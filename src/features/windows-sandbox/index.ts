// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~login-r~ehxf5gah-DKrCkXP8.js
// Public barrel for the Windows sandbox setup/readiness chunk.
export {
  defaultWindowsSandboxSetupContextValue,
  initWindowsSandboxSetupContextRuntime,
  useWindowsSandboxSetupContext,
  WindowsSandboxSetupContext,
  type WindowsSandboxSetupContextValue,
} from "./context";
export {
  buildConfigRequirementsQueryOptions,
  configRequirementsByHostAuthSignal,
  initWindowsSandboxConfigQueryRuntime,
  readHostConfigForHost,
  useConfigRequirementsQuery,
  type ConfigReadResponse,
} from "./config";
export {
  initOsInfoRuntimeChunk,
  osInfoQuerySignal,
  useOsInfoQuery,
  type WindowsOsInfo,
} from "./os-info";
export {
  getWindowsSandboxModeQueryKey,
  getWindowsSandboxReadinessQueryKey,
  initWindowsSandboxModeRuntime,
  parseWindowsSandboxMode,
  useUpdateWindowsSandboxModeMutation,
  useWindowsSandboxModeQuery,
  useWindowsSandboxReadinessQuery,
  type WindowsSandboxModeMutationContext,
} from "./queries";
export {
  initWindowsSandboxRequirementSummaryRuntime,
  useWindowsSandboxRequirementSummary,
  type WindowsSandboxRequirementSummary,
} from "./requirement-summary";
export {
  initWindowsSandboxSetupControllerRuntime,
  useWindowsSandboxSetupController,
  type WindowsSandboxSetupController,
} from "./setup-controller";
export {
  getAllowedWindowsSandboxImplementations,
  getFailedWindowsSandboxPhase,
  getNextWindowsSandboxSetupMode,
  getWindowsSandboxErrorMessage,
  getWindowsSandboxSetupVisibility,
  hasKnownWindowsSandboxImplementations,
  initWindowsSandboxSetupStateRuntime,
  isWindowsSandboxModeAllowed,
  isWindowsSandboxSetupPendingPhase,
  shouldShowUnelevatedSetupAlternative,
  WINDOWS_SANDBOX_MODE_QUERY_ROOT,
  WINDOWS_SANDBOX_POST_ENABLE_DELAY_MS,
  WINDOWS_SANDBOX_READINESS_QUERY_ROOT,
  WINDOWS_SANDBOX_SETUP_FAILED_MESSAGE,
  WINDOWS_SANDBOX_START_FAILED_MESSAGE,
  windowsSandboxOnboardingDismissedSignal,
  type WindowsSandboxAccountType,
  type WindowsSandboxMode,
  type WindowsSandboxReadinessStatus,
  type WindowsSandboxRequirement,
  type WindowsSandboxRequirementsResponse,
  type WindowsSandboxSetupPhase,
  type WindowsSandboxSetupVisibility,
} from "./types";
