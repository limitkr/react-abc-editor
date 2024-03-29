# react-abc-editor

React component for showing and writing abc notations using the Abcjs library.<br>
Thank you [@paulrosen](https://github.com/paulrosen) for creator of Abcjs library.

# Quick Start

## Install

```bash
# Using npm:
npm i react-abc-editor
# or Yarn package manager:
yarn add react-abc-editor
```

## Update (2023-08-22)
The `<AbcTextEditor />` component is scheduled to be deprecated in the next major release for the following two reasons:

1. The React team is planning to discontinue support for `defaultProps`. see [pull requests](https://github.com/facebook/react/pull/25699)
2. The current component structure is deemed difficult to extend.

The new component will additionally support the following features:
1. Styling
2. Interactive Editor

## Basic Usage

```tsx
// App.tsx

import React from "react";
import { AbcTextEditor } from "react-abc-editor";

export default function App() {
  return <AbcTextEditor />;
}
```

### Disable Edit mode and Click event

If you want to TextEditor as read-only, set `allowEdit` to false for disable textarea, and set `allowClick` to false for disable click event.

```tsx
// App.tsx

import React from "react";
import { AbcTextEditor } from "react-abc-editor";

export default function App() {
  return <AbcTextEditor allowEdit={false} allowClick={false} />;
}
```

### Use predefined abc tune

If you want to use the pre-made abc notation string, assign it to the `predefinedAbcString` prop.

```tsx
// App.tsx

import React from "react";
import { AbcTextEditor } from "react-abc-editor";

const tune = "X: 1\nT: Cooley's\nM: 4/4\nL: 1/8\nK: Emin\n|:D2|"Em"EBBA B2 EB||"

export default function App() {
  return <AbcTextEditor predefinedAbcString={tune} />;
}
```

## Use Abcjs render options

```tsx
interface TextEditorProps {
  options?: Omit<AbcVisualParams, "selectTypes" | "dragging">;
}
```

Not required. However, you can set the `options` prop for advanced settings to visualizing score.

```tsx
import React from "react";
import { AbcTextEditor } from "react-abc-editor";

export default function App() {
  return <AbcTextEditor options={{ draggingColor: "orange" }} />;
}
```
