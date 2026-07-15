// Restored from ref/webview/assets/workspace-onboarding-controller-FdX3OkH-.js
// Workspace onboarding auto-launch decision hook.

import { useAtom } from "jotai";
import { useAppScopeValue } from "../../boundaries/app-scope";
import { F as workspaceRootOptionsQuery } from "../../boundaries/thread-context-inputs.facade";
import { useIsRemoteHost } from "../../utils/use-is-remote-host";
import { workspaceOnboardingAutolaunchAppliedAtom } from "../onboarding-state";
import {
  isAutoPlaygroundArm,
  isDirectFolderPickerArm,
} from "../workspace-onboarding-experiment";
import { useWorkspaceOnboardingExperimentValue } from "./experiment-assignment";
import type {
  WorkspaceAutoLaunchAction,
  WorkspaceOnboardingExperimentArm,
  WorkspaceRootOptionsQueryResult,
} from "./types";
export function useWorkspaceOnboardingAutoLaunch(): {
  autoLaunchAction: WorkspaceAutoLaunchAction;
  hasPersistedRoots: boolean;
  isLoadingWorkspaceRootOptions: boolean;
  isRemoteHost: boolean;
  setWorkspaceOnboardingAutoLaunchApplied: (value: boolean) => void;
  workspaceOnboardingAutoLaunchApplied: boolean;
  workspaceOnboardingExperimentArm: WorkspaceOnboardingExperimentArm;
  workspaceRootOptions: WorkspaceRootOptionsQueryResult | null | undefined;
} {
  const { workspaceOnboardingExperimentArm } =
    useWorkspaceOnboardingExperimentValue();
  const isRemoteHost = useIsRemoteHost();
  const [
    workspaceOnboardingAutoLaunchApplied,
    setWorkspaceOnboardingAutoLaunchApplied,
  ] = useAtom(workspaceOnboardingAutolaunchAppliedAtom);
  const { data: workspaceRootOptions, isLoading } = useAppScopeValue(
    workspaceRootOptionsQuery,
  ) as {
    data?: WorkspaceRootOptionsQueryResult | null;
    isLoading: boolean;
  };
  const hasPersistedRoots = (workspaceRootOptions?.roots?.length ?? 0) > 0;
  const autoLaunchAction = resolveWorkspaceAutoLaunchAction({
    arm: workspaceOnboardingExperimentArm,
    autoLaunchApplied: Boolean(workspaceOnboardingAutoLaunchApplied),
    hasPersistedRoots,
    isLoadingRoots: isLoading,
    isRemoteHost,
  });
  return {
    autoLaunchAction,
    hasPersistedRoots,
    isLoadingWorkspaceRootOptions: isLoading,
    isRemoteHost,
    setWorkspaceOnboardingAutoLaunchApplied,
    workspaceOnboardingAutoLaunchApplied: Boolean(
      workspaceOnboardingAutoLaunchApplied,
    ),
    workspaceOnboardingExperimentArm,
    workspaceRootOptions,
  };
}
function resolveWorkspaceAutoLaunchAction({
  arm,
  autoLaunchApplied,
  hasPersistedRoots,
  isLoadingRoots,
  isRemoteHost,
}: {
  arm: WorkspaceOnboardingExperimentArm;
  autoLaunchApplied: boolean;
  hasPersistedRoots: boolean;
  isLoadingRoots: boolean;
  isRemoteHost: boolean;
}): WorkspaceAutoLaunchAction {
  if (
    isRemoteHost ||
    isLoadingRoots ||
    hasPersistedRoots ||
    autoLaunchApplied
  ) {
    return "none";
  }
  if (isDirectFolderPickerArm(arm)) {
    return "home_open_picker_or_create_default";
  }
  if (isAutoPlaygroundArm(arm)) {
    return "select_workspace_skip_to_playground";
  }
  return "none";
}
