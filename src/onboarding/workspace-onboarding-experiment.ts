// Restored from ref/webview/assets/workspace-onboarding-experiment-C2rOtLv8.js

type WorkspaceOnboardingExperimentArm =
  | "control"
  | "t2_direct_folder_picker"
  | "t3_auto_playground"
  | "t4_modal_copy_cta_playground"
  | typeof WORKSPACE_ONBOARDING_V2_ARM;
type PersistedWorkspaceOnboardingExperimentArm = Exclude<
  WorkspaceOnboardingExperimentArm,
  typeof WORKSPACE_ONBOARDING_V2_ARM
>;
type StatsigExperimentLike = {
  get(parameterName: string, fallback: string | null): unknown;
  getGroupName?: () => unknown;
};
type StatsigClientLike = {
  getExperiment(
    experimentName: string,
    options?: unknown,
  ): StatsigExperimentLike;
};
const WORKSPACE_ONBOARDING_PLAYGROUND_NAME = "Playground";
const WORKSPACE_ONBOARDING_EXPERIMENT_ID = "93537254";
const WORKSPACE_ONBOARDING_ENABLE_TEEN_CHECK_GATE_ID = "1482884768";
const WORKSPACE_ONBOARDING_TEEN_ONBOARDING_GATE_ID = "3150044490";
const WORKSPACE_ONBOARDING_V2_ARM = "t5_onboarding_v2";
const WORKSPACE_ONBOARDING_ARM_PARAMETER = "arm";

function initWorkspaceOnboardingExperimentChunk(): void {}

function normalizeWorkspaceOnboardingArm(
  value: unknown,
): WorkspaceOnboardingExperimentArm {
  switch (value) {
    case "control":
    case "t2_direct_folder_picker":
    case "t3_auto_playground":
    case "t4_modal_copy_cta_playground":
    case WORKSPACE_ONBOARDING_V2_ARM:
      return value;
    default:
      return "control";
  }
}
function normalizePersistedWorkspaceOnboardingArm(
  value: unknown,
): PersistedWorkspaceOnboardingExperimentArm {
  const arm = normalizeWorkspaceOnboardingArm(value);
  return arm === WORKSPACE_ONBOARDING_V2_ARM ? "control" : arm;
}
function getWorkspaceOnboardingExperimentArm(
  statsigClient: StatsigClientLike,
): PersistedWorkspaceOnboardingExperimentArm {
  const experiment = statsigClient.getExperiment(
    WORKSPACE_ONBOARDING_EXPERIMENT_ID,
  );
  const arm = normalizePersistedWorkspaceOnboardingArm(
    experiment.get(WORKSPACE_ONBOARDING_ARM_PARAMETER, null),
  );
  if (arm !== "control") return arm;
  return "getGroupName" in experiment &&
    typeof experiment.getGroupName === "function"
    ? normalizePersistedWorkspaceOnboardingArm(experiment.getGroupName())
    : "control";
}
function isWorkspaceOnboardingExperimentAssignment(value: unknown) {
  return (
    typeof value === "object" &&
    value !== null &&
    "experimentName" in value &&
    (
      value as {
        experimentName?: unknown;
      }
    ).experimentName === WORKSPACE_ONBOARDING_EXPERIMENT_ID
  );
}
function isDirectFolderPickerArm(value: unknown) {
  return value === "t2_direct_folder_picker";
}
function isAutoPlaygroundArm(value: unknown) {
  return value === "t3_auto_playground";
}
function isModalCopyCtaPlaygroundArm(value: unknown) {
  return value === "t4_modal_copy_cta_playground";
}
function shouldSkipWorkspacePickerForArm(value: unknown) {
  return (
    isDirectFolderPickerArm(value) ||
    isAutoPlaygroundArm(value) ||
    isModalCopyCtaPlaygroundArm(value)
  );
}
export {
  WORKSPACE_ONBOARDING_V2_ARM,
  isAutoPlaygroundArm,
  shouldSkipWorkspacePickerForArm,
  WORKSPACE_ONBOARDING_EXPERIMENT_ID,
  isDirectFolderPickerArm,
  WORKSPACE_ONBOARDING_ENABLE_TEEN_CHECK_GATE_ID,
  getWorkspaceOnboardingExperimentArm,
  WORKSPACE_ONBOARDING_PLAYGROUND_NAME,
  isWorkspaceOnboardingExperimentAssignment,
  initWorkspaceOnboardingExperimentChunk,
  WORKSPACE_ONBOARDING_TEEN_ONBOARDING_GATE_ID,
  isModalCopyCtaPlaygroundArm,
};
