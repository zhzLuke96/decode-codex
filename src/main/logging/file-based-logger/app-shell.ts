// Restored from ref/.vite/build/file-based-logger-DZ6052-3.js
// file-based-logger-DZ6052-3 chunk restored from the Codex Electron main bundle.
import type { Environment, Platform } from "./types";

function shouldUseOwlAppShell(
  platform: Platform = process.platform,
  env: Environment = process.env,
): boolean {
  return platform !== "linux" && env.CODEX_USE_OWL_APP_SHELL !== "0";
}

export { shouldUseOwlAppShell };
