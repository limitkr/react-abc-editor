import { AbcVisualParams } from "abcjs";

export interface TextEditorProps {
  /**
   * If `true`, the Editor allow editing abc strings.
   * If `false`, the textarea will be disabled.
   * @default true
   */
  allowEdit?: boolean;
  /**
   * If `true`, the Editor allow clicking abc element.
   * @default true
   */
  allowClick?: boolean;
  /**
   * abcjs `renderAbc` options.
   */
  options: Omit<AbcVisualParams, "selectTypes" | "dragging">;
  /**
   * The value for showing score when TextEditor initialized first time.
   */
  predefinedAbcString: string;
}
