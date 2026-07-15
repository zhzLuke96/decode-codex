// Restored from ref/webview/assets/codex-dark-C0SGGgEz.js

import type { CodexShikiTheme } from "./types";
import { codexDarkColors } from "./codex-dark-colors";
import { codexDarkSemanticTokenColors } from "./codex-dark-semantic-token-colors";
import { codexDarkTokenColors } from "./codex-dark-token-colors";

export const codexDarkName = "Codex Dark" as const;

export const codexDarkType = "dark" as const;

export { codexDarkColors, codexDarkSemanticTokenColors, codexDarkTokenColors };

export const codexDarkTheme = {
  name: codexDarkName,
  type: codexDarkType,
  colors: codexDarkColors,
  tokenColors: codexDarkTokenColors,
  semanticTokenColors: codexDarkSemanticTokenColors,
} as const satisfies CodexShikiTheme;

export default codexDarkTheme;
