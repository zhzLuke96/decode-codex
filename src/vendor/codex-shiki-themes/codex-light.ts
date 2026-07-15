// Restored from ref/webview/assets/codex-light-CP3oidzW.js

import type { CodexShikiTheme } from "./types";
import { codexLightColors } from "./codex-light-colors";
import { codexLightSemanticTokenColors } from "./codex-light-semantic-token-colors";
import { codexLightTokenColors } from "./codex-light-token-colors";

export const codexLightName = "Codex Light" as const;

export const codexLightType = "light" as const;

export {
  codexLightColors,
  codexLightSemanticTokenColors,
  codexLightTokenColors,
};

export const codexLightTheme = {
  name: codexLightName,
  type: codexLightType,
  colors: codexLightColors,
  tokenColors: codexLightTokenColors,
  semanticTokenColors: codexLightSemanticTokenColors,
} as const satisfies CodexShikiTheme;

export default codexLightTheme;
