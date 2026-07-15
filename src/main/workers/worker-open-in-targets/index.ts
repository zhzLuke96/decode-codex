// Restored from ref/.vite/build/worker.js
// Public OpenIn target worker helpers.

export type {
  OpenInHostConfig,
  OpenInLocation,
  OpenInTargetOpenContext,
  OpenInTargetRequestParams,
  ShortcutLink,
} from "./types";
export {
  detectOpenInTarget,
  getOpenInTargetIcon,
  normalizeShortcutLink,
  openPathInOpenInTarget,
  parseOpenInTargetRequestParams,
} from "./commands";
export {
  buildCodeEditorArgs,
  buildFileManagerArgs,
  buildJetBrainsArgs,
  buildTextMateArgs,
  buildWindowsTerminalArgs,
  buildWslTerminalArgs,
  buildZedArgs,
  getDirectoryToOpen,
  openMacDefault,
  openWindowsFileManagerPath,
  openWindowsStartTarget,
  openWithElectronShell,
  openXcodePath,
  openZedPath,
  spawnOpenInTargetCommand,
} from "./launch";
