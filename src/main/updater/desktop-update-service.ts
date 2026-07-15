// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import * as path from "node:path";
import { nativeTheme } from "electron";
import { runtimeLogger } from "../logging/scoped-runtime-logger";
import { requireFromWorkspaceBoundary } from "../runtime/desktop-runtime-utils";
import { KeyValueStore } from "../workspace/desktop-runtime-types";

export function loadWindowsUpdaterNativeAddon(): unknown {
  try {
    return requireFromWorkspaceBoundary(
      path.join(process.resourcesPath, "native", "windows-updater.node"),
    );
  } catch (error) {
    runtimeLogger().error("Failed to load native Windows updater addon", {
      safe: {},
      sensitive: {
        error,
      },
    });
    return null;
  }
}

export function applyNativeThemeSource(theme: string): void {
  nativeTheme.themeSource =
    theme === "light" || theme === "dark" ? theme : "system";
}

export async function setInternalUpdateCdnEnabled(
  store: KeyValueStore,
  enabled: boolean,
): Promise<void> {
  store.set("electron-internal-update-cdn-enabled", enabled);
  await store.flush?.();
}
