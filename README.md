# react-abc-editor

A React components that can write abc notation.

## Quick Start

### Install

```bash
# The library not published yet.
```

### Storybook Preview

You can testing on storybook. just simply run:

```bash
yarn storybook
```

### Usage

```tsx
import React from "react";
import { AbcTextEditor } from "react-abc-editor";

export default function App() {
  return <AbcTextEditor />;
}
```

### Disable Edit mode and Click event

```tsx
import React from "react";
import { AbcTextEditor } from "react-abc-editor";

export default function App() {
  return <AbcTextEditor allowEdit={false} allowClick={false} />;
}
```

### Use predefined abc tune

```tsx
import React from "react";
import { AbcTextEditor } from "react-abc-editor";

const tune = "X: 1\nT: Cooley's\nM: 4/4\nL: 1/8\nK: Emin\n|:D2|"Em"EBBA B2 EB||"

export default function App() {
  return <AbcTextEditor predefinedAbcString={tune} />;
}
```
