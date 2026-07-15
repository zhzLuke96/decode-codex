// Restored from ref/webview/assets/local-environments-utils-CkypnJBW.js
// Local environment default scripts and platform constants.

import type { LocalEnvironmentPlatform } from "./types";

export const LOCAL_ENVIRONMENT_PLATFORMS = [
  "darwin",
  "linux",
  "win32",
] as const satisfies readonly LocalEnvironmentPlatform[];

export const DEFAULT_RUN_COMMAND = "npm run dev";
export const DEFAULT_CLEANUP_SCRIPT = `docker compose down --remove-orphans
rm -rf .cache/tmp`;
export const DEFAULT_SETUP_SCRIPT = `cd "$CODEX_WORKTREE_PATH"
pip install -r requirements.txt
npm install
./run/setup.sh`;

export function initLocalEnvironmentDefaultsChunk() {}
