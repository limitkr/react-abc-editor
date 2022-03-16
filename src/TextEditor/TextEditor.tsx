import * as React from "react";
import ABCJS, { AbcVisualParams } from "abcjs";
import { TextEditorProps } from "./types";

const defaultProps: TextEditorProps = {
  allowEdit: true,
  allowClick: true,
  options: {
    scale: 1,
  },
  predefinedAbcString: "X:1\nL:1/8\nM:4/4\nK:C\nz8|",
};

const TextEditor = ({
  allowClick,
  allowEdit,
  options,
  predefinedAbcString,
}: TextEditorProps) => {
  const [abcString, setAbcString] = React.useState(predefinedAbcString);
  const abcVisualOptions: AbcVisualParams = {
    ...options,
    dragging: allowEdit ? true : false,
    selectTypes: allowClick ? true : false,
  };

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = e.target;
      setAbcString(value);
    },
    [abcString]
  );

  React.useEffect(() => {
    ABCJS.renderAbc("paper", abcString, abcVisualOptions);
  }, [abcString]);

  return (
    <div id="conatiner">
      <div id="paper" />
      {allowEdit ? (
        <textarea
          id="abcnotation-textarea"
          style={{ marginTop: "10px", height: "100px", width: "200px" }}
          value={abcString}
          onChange={onChange}
        />
      ) : null}
    </div>
  );
};

TextEditor.defaultProps = defaultProps;

export default TextEditor;
