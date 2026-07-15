// Restored from ref/.vite/build/worker.js
// Public OpenIn target launch helpers.

export {
  normalizeSpawnCommandForPlatform,
  spawnOpenInTargetCommand,
} from "./launch-spawn";
export {
  buildFileManagerArgs,
  buildWindowsTerminalArgs,
  buildWslTerminalArgs,
  getDirectoryToOpen,
  windowsPathToWslPath,
} from "./launch-paths";
export {
  buildCodeEditorArgs,
  buildJetBrainsArgs,
  buildLaunchServicesArgs,
  buildTextMateArgs,
  buildZedArgs,
  createCursorDarwinCliEnv,
} from "./launch-editors";
export {
  openMacDefault,
  openWindowsFileManagerPath,
  openWindowsStartTarget,
  openWithElectronShell,
  openXcodePath,
  openZedPath,
} from "./launch-system";
