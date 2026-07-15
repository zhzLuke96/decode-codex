// Restored from ref/webview/assets/workspace-onboarding-controller-FdX3OkH-.js
// Shared workspace onboarding controller types.

export type WorkspaceOnboardingTarget = "workspace" | string;
export type WorkspaceOnboardingExperimentArm =
  | "control"
  | "t2_direct_folder_picker"
  | "t3_auto_playground"
  | "t4_modal_copy_cta_playground"
  | string;
export type WorkspaceOnboardingExperimentAssignment = {
  arm: WorkspaceOnboardingExperimentArm;
  assignedAtMs: number;
  experimentName: string;
};
export type WorkspaceAutoLaunchAction =
  | "home_open_picker_or_create_default"
  | "none"
  | "select_workspace_skip_to_playground";
export type StatsigClientWithGates = {
  checkGate(gateName: string): boolean;
};
export type WorkspaceRootOptionsQueryResult = {
  roots?: unknown[];
};
