// Restored from ref/webview/assets/chronicle-setup-state-BH1UQGSM.js
// chronicle-setup-state-BH1UQGSM chunk restored from the Codex webview bundle.
import { exportGetters } from "../../runtime/commonjs-interop";
export const codexMemorySettingToggledEvent = {
  $type: "protobuf_analytics_events.v1.CodexMemorySettingToggled",
} as const;
export const codexMemoryResetClickedEvent = {
  $type: "protobuf_analytics_events.v1.CodexMemoryResetClicked",
} as const;
export const codexMemoryStateSnapshotEvent = {
  $type: "protobuf_analytics_events.v1.CodexMemoryStateSnapshot",
} as const;
export const codexMemoryAnalyticsEvents = exportGetters({
  CodexMemoryResetClicked: () => codexMemoryResetClickedEvent,
  CodexMemorySettingToggled: () => codexMemorySettingToggledEvent,
  CodexMemoryStateSnapshot: () => codexMemoryStateSnapshotEvent,
});
