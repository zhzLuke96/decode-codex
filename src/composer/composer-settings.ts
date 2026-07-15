// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js
// Composer-relevant settings: the registry of setting definitions (each carrying
// a scope atom + metadata) and the hook that reads a setting's current value.
import { useSettingValue as useStoredSettingValue } from "../settings/setting-storage";

export type SettingAgentAccess = "read-write" | "read" | "hidden";
export type ComposerEnterBehavior = "enter" | "cmdIfMultiline" | "cmdAlways";

/** A single setting definition with key/default/description metadata. */
export interface SettingDefinition<Value> {
  readonly key: string;
  readonly default: Value;
  readonly description?: string;
  readonly agentAccess?: SettingAgentAccess;
}

/** Registry of setting definitions keyed by setting name (e.g. `composerEnterBehavior`). */
export interface SettingsAtoms {
  readonly [settingKey: string]: SettingDefinition<unknown>;
  readonly composerEnterBehavior: SettingDefinition<ComposerEnterBehavior>;
}

export const settingsAtoms: SettingsAtoms = {
  composerEnterBehavior: {
    agentAccess: "read-write",
    default: "enter",
    description: "How Enter behaves in the composer",
    key: "composerEnterBehavior",
  },
};

/** Read the current value of a setting definition. */
export function useSettingValue<Value>(
  setting: SettingDefinition<Value>,
): Value {
  return useStoredSettingValue(setting);
}
