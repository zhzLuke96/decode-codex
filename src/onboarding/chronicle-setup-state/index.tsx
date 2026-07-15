// Restored from ref/webview/assets/chronicle-setup-state-BH1UQGSM.js
// chronicle-setup-state-BH1UQGSM chunk restored from the Codex webview bundle.
import {
  codexMemoryAnalyticsEvents,
  codexMemoryResetClickedEvent,
  codexMemorySettingToggledEvent,
  codexMemoryStateSnapshotEvent,
} from "./analytics";
import { useIsChronicleResearchPreviewEnabled } from "./feature-gate";
import { buildCodexMemoryStateSnapshot } from "./memory-state";
import {
  buildChronicleSetupState,
  CHRONICLE_TRY_CODEX_PROMPT,
  isChronicleSetupCompletionState,
} from "./setup-state";
import { ChronicleSetupDialog } from "./setup-dialog";

export function initChronicleFeatureGateChunk(): void {}

export function initChronicleSetupDialogChunk(): void {}

export function initChronicleSetupStateChunk(): void {}

export function initCodexMemoryStateSnapshotChunk(): void {}

export {
  useIsChronicleResearchPreviewEnabled,
  codexMemorySettingToggledEvent,
  ChronicleSetupDialog,
  codexMemoryStateSnapshotEvent,
  isChronicleSetupCompletionState,
  buildCodexMemoryStateSnapshot,
  CHRONICLE_TRY_CODEX_PROMPT,
  codexMemoryResetClickedEvent,
  buildChronicleSetupState,
  codexMemoryAnalyticsEvents,
};
export type {
  BuildChronicleSetupStateInput,
  ChroniclePermissionStatus,
  ChronicleSetupState,
  ChronicleSidecarProcessState,
  CodexMemoryStateSnapshot,
  CodexMemoryStateSnapshotInput,
  MemoryConfig,
} from "./types";
