// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Compatibility exports for design editor field components.

export { DesignScrubInput } from "./design-scrub-input";
export type { DesignScrubInputProps } from "./design-scrub-input";
import { getDesignEditorFields } from "./design-editor-fields-impl";

const designEditorFields = getDesignEditorFields();

export const DesignPropertyLabel = designEditorFields.DesignPropertyLabel;
export const DesignSpacingGridInput = designEditorFields.DesignSpacingGridInput;
export const DesignFlexGapGridInput = designEditorFields.DesignFlexGapGridInput;
export const DesignDeclarationValueEditor =
  designEditorFields.DesignDeclarationValueEditor;
