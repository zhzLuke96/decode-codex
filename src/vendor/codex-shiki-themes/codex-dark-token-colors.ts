// Restored from ref/webview/assets/codex-dark-C0SGGgEz.js

import { codexDarkTokenColorCoreRules } from "./codex-dark-token-colors-core";
import { codexDarkTokenColorLanguageRules } from "./codex-dark-token-colors-language";
import { codexDarkTokenColorMarkupRules } from "./codex-dark-token-colors-markup";
import { codexDarkTokenColorDiagnosticsRules } from "./codex-dark-token-colors-diagnostics";

export const codexDarkTokenColors = [
  ...codexDarkTokenColorCoreRules,
  ...codexDarkTokenColorLanguageRules,
  ...codexDarkTokenColorMarkupRules,
  ...codexDarkTokenColorDiagnosticsRules,
] as const;
