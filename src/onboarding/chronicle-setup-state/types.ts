// Restored from ref/webview/assets/chronicle-setup-state-BH1UQGSM.js
// chronicle-setup-state-BH1UQGSM chunk restored from the Codex webview bundle.
export type ChroniclePermissionStatus =
  | "granted"
  | "denied"
  | "restricted"
  | "not-determined"
  | "unknown";
export type ChronicleSidecarProcessState =
  | "disabled"
  | "stopped"
  | "restarting"
  | "starting"
  | "stopping"
  | "running";
export type ChronicleSetupState =
  | {
      kind: "preparing";
    }
  | {
      kind: "starting";
    }
  | {
      kind: "screen-recording-permission-needed";
      status: ChroniclePermissionStatus;
    }
  | {
      kind: "accessibility-permission-needed";
      status: ChroniclePermissionStatus;
    }
  | {
      kind: "ready";
    }
  | {
      kind: "failed";
      message: string;
    };
export interface BuildChronicleSetupStateInput {
  accessibilityStatus?: ChroniclePermissionStatus | null;
  errorMessage?: string | null;
  isSidecarPresent: boolean;
  isUpdatingChronicle: boolean;
  processState: ChronicleSidecarProcessState;
  screenRecordingStatus?: ChroniclePermissionStatus | null;
}
export interface MemoryConfig {
  disableOnExternalContext?: boolean;
  generateMemories: boolean;
  useMemories: boolean;
}
export interface CodexMemoryStateSnapshotInput {
  isMemoryFeatureEnabled: boolean;
  memoryConfig: MemoryConfig;
}
export interface CodexMemoryStateSnapshot {
  generateMemoriesEnabled: boolean;
  memoriesEnabled: boolean;
  memoryFeatureEnabled: boolean;
  useMemoriesEnabled: boolean;
}
