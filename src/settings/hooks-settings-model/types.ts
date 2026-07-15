// Restored from ref/webview/assets/hooks-settings-model-CesfUzEC.js
// hooks-settings-model-CesfUzEC chunk restored from the Codex webview bundle.
export type HookSourceGroupId =
  | "plugin"
  | "user"
  | "admin"
  | "project"
  | "sessionFlags"
  | "unknown";

export type HookEventName =
  | "preToolUse"
  | "permissionRequest"
  | "postToolUse"
  | "preCompact"
  | "postCompact"
  | "sessionStart"
  | "userPromptSubmit"
  | "subagentStart"
  | "subagentStop"
  | "stop";

export type HookError = {
  path: string;
  message: string;
  [key: string]: unknown;
};

export type HookDefinition = {
  key: string;
  eventName: HookEventName | string;
  source: string;
  trustStatus: string;
  enabled: boolean;
  displayOrder: number;
  pluginId?: string | null;
  [key: string]: unknown;
};

export type HookConfigEntry = {
  cwd: string;
  hooks: HookDefinition[];
  warnings: unknown[];
  errors: HookError[];
  summary?: {
    id?: string;
    installed?: boolean;
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

export type HookSourceGroup =
  | {
      id: "project";
      projectEntries: HookConfigEntry[];
    }
  | {
      id: "plugin";
      entry: HookConfigEntry;
      pluginEntries: Array<{
        pluginId: string | null | undefined;
        entry: HookConfigEntry;
      }>;
    }
  | {
      id: Exclude<HookSourceGroupId, "project" | "plugin">;
      entry: HookConfigEntry;
    };

export type HookSourceSelection =
  | { source: "project"; projectRoot: string }
  | { source: "plugin"; pluginId?: string | null }
  | { source: Exclude<HookSourceGroupId, "project" | "plugin"> };
