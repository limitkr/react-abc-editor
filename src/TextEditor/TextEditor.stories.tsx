import * as React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextEditor from "./TextEditor";
import { TextEditorProps } from "./types";

export default {
  title: "TextEditor",
  component: TextEditor,
} as ComponentMeta<typeof TextEditor>;

const TextEditorTemplate: ComponentStory<typeof TextEditor> = (
  args: TextEditorProps
) => <TextEditor {...args} />;

export const TextEditorDefault = TextEditorTemplate.bind({});
export const disableEdit = TextEditorTemplate.bind({});

TextEditorDefault.args = {
  allowEdit: true,
  allowClick: true,
  options: {
    draggingColor: "orange",
  },
  predefinedAbcString: "X:1\nL:1/8\nM:4/4\nK:C\nz8|z8|]",
};

disableEdit.args = {
  allowEdit: false,
  allowClick: false,
};
