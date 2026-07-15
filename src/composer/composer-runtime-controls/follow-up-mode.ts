// Restored from ref/webview/assets/service-tier-icons-C-0I5QrR.js
// Follow-up queue mode helpers for composer controls.
import React from "react";
import {
  _appScopeO as useAppScope,
  appScopeRoot,
} from "../../boundaries/app-scope";
import { generalSettingDefinitions } from "../../boundaries/src-l0hb-mz-p";
import {
  useSettingValue,
  writeSettingValue,
} from "../../settings/setting-storage";

export type FollowUpQueueMode = "queue" | "steer" | string;

export function initFollowUpQueueModeRuntimeChunk(): void {}

export function useFollowUpQueueMode(): {
  mode: FollowUpQueueMode;
  isQueueingEnabled: boolean;
} {
  const appScope = useAppScope(appScopeRoot);
  const storedMode = useSettingValue(
    generalSettingDefinitions.followUpQueueMode,
  ) as FollowUpQueueMode | "interrupt" | null | undefined;
  const mode: FollowUpQueueMode =
    storedMode === "interrupt" ? "steer" : (storedMode ?? "queue");

  React.useEffect(() => {
    if (storedMode === "interrupt") {
      writeSettingValue(
        appScope,
        generalSettingDefinitions.followUpQueueMode,
        "steer",
      );
    }
  }, [storedMode, appScope]);

  return {
    mode,
    isQueueingEnabled: mode === "queue",
  };
}

export function getInvertFollowUpShortcutLabel(
  composerEnterBehavior: string,
): string {
  return composerEnterBehavior === "cmdIfMultiline"
    ? "CmdOrCtrl+Shift+Enter"
    : "CmdOrCtrl+Enter";
}

export function getComposerSubmitShortcutLabel(
  composerEnterBehavior: string,
): string | undefined {
  switch (composerEnterBehavior) {
    case "enter":
      return "CmdOrCtrl+Enter";
    case "cmdIfMultiline":
    case "cmdAlways":
      return "CmdOrCtrl+Shift+Enter";
  }
}
