// Restored from ref/webview/assets/codex-light-CP3oidzW.js

import { codexLightTokenColorCoreRules } from "./codex-light-token-colors-core";
import { codexLightTokenColorLanguageRules } from "./codex-light-token-colors-language";
import { codexLightTokenColorMarkupRules } from "./codex-light-token-colors-markup";
import { codexLightTokenColorDiagnosticsRules } from "./codex-light-token-colors-diagnostics";

export const codexLightTokenColors = [
  ...codexLightTokenColorCoreRules,
  ...codexLightTokenColorLanguageRules,
  ...codexLightTokenColorMarkupRules,
  ...codexLightTokenColorDiagnosticsRules,
] as const;
