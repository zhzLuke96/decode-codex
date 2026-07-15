// Restored from ref/webview/assets/workspace-onboarding-controller-FdX3OkH-.js
// Workspace onboarding experiment assignment hooks.

import React from "react";
import { useAtom, useAtomValue } from "jotai";
import { useStatsigClient } from "../../vendor/statsig-current-runtime";
import { workspaceExperimentAssignmentAtom } from "../onboarding-state";
import {
  getWorkspaceOnboardingExperimentArm,
  isDirectFolderPickerArm,
  isWorkspaceOnboardingExperimentAssignment,
  shouldSkipWorkspacePickerForArm,
  WORKSPACE_ONBOARDING_EXPERIMENT_ID,
  WORKSPACE_ONBOARDING_PLAYGROUND_NAME,
} from "../workspace-onboarding-experiment";
import { useIsRemoteHost } from "../../utils/use-is-remote-host";
import type {
  StatsigClientWithGates,
  WorkspaceOnboardingExperimentArm,
  WorkspaceOnboardingExperimentAssignment,
  WorkspaceOnboardingTarget,
} from "./types";
type WorkspaceOnboardingExperimentInput = {
  onboardingTarget: WorkspaceOnboardingTarget;
};
type DirectWorkspacePickerInput = {
  arm: WorkspaceOnboardingExperimentArm;
  isRemoteHost: boolean;
  onboardingTarget: WorkspaceOnboardingTarget;
};
export function useWorkspaceOnboardingExperiment({
  onboardingTarget,
}: WorkspaceOnboardingExperimentInput): {
  workspaceOnboardingExperimentArm: WorkspaceOnboardingExperimentArm;
  workspaceOnboardingExperimentAssignment: WorkspaceOnboardingExperimentAssignment | null;
} {
  const [rawAssignment, setRawAssignment] = useAtom(
    workspaceExperimentAssignmentAtom,
  );
  const assignment = normalizeAssignment(rawAssignment);
  const { client } = useStatsigClient() as {
    client: StatsigClientWithGates;
  };
  const experimentArm = resolveWorkspaceOnboardingArm({
    assignment,
    evaluateExperimentArm: () => getWorkspaceOnboardingExperimentArm(client),
    onboardingTarget,
  });
  React.useEffect(() => {
    if (onboardingTarget !== "workspace" || assignment != null) return;
    setRawAssignment({
      arm: getWorkspaceOnboardingExperimentArm(client),
      assignedAtMs: Date.now(),
      experimentName: WORKSPACE_ONBOARDING_EXPERIMENT_ID,
    });
  }, [assignment, client, onboardingTarget, setRawAssignment]);
  return {
    workspaceOnboardingExperimentArm: experimentArm,
    workspaceOnboardingExperimentAssignment: assignment,
  };
}
export function useWorkspaceOnboardingExperimentValue(): {
  workspaceOnboardingExperimentArm: WorkspaceOnboardingExperimentArm;
  workspaceOnboardingExperimentAssignment: WorkspaceOnboardingExperimentAssignment | null;
} {
  const rawAssignment = useAtomValue(workspaceExperimentAssignmentAtom);
  const assignment = normalizeAssignment(rawAssignment);
  return {
    workspaceOnboardingExperimentArm: assignment?.arm ?? "control",
    workspaceOnboardingExperimentAssignment: assignment,
  };
}
export function shouldShowDirectWorkspacePicker({
  onboardingTarget,
  arm,
  isRemoteHost,
}: DirectWorkspacePickerInput): boolean {
  return (
    onboardingTarget === "workspace" &&
    !isRemoteHost &&
    isDirectFolderPickerArm(arm)
  );
}
export function useShouldShowDirectWorkspacePicker({
  onboardingTarget,
  arm,
}: {
  arm: WorkspaceOnboardingExperimentArm;
  onboardingTarget: WorkspaceOnboardingTarget;
}): boolean {
  return shouldShowDirectWorkspacePicker({
    arm,
    isRemoteHost: useIsRemoteHost(),
    onboardingTarget,
  });
}
export function getWorkspaceOnboardingPlaygroundName(
  arm: WorkspaceOnboardingExperimentArm,
): string | undefined {
  return shouldSkipWorkspacePickerForArm(arm)
    ? WORKSPACE_ONBOARDING_PLAYGROUND_NAME
    : undefined;
}
function resolveWorkspaceOnboardingArm({
  onboardingTarget,
  assignment,
  evaluateExperimentArm,
}: {
  assignment: WorkspaceOnboardingExperimentAssignment | null;
  evaluateExperimentArm: () => WorkspaceOnboardingExperimentArm;
  onboardingTarget: WorkspaceOnboardingTarget;
}): WorkspaceOnboardingExperimentArm {
  if (assignment != null) return assignment.arm;
  return onboardingTarget === "workspace" ? evaluateExperimentArm() : "control";
}
function normalizeAssignment(
  value: unknown,
): WorkspaceOnboardingExperimentAssignment | null {
  return isWorkspaceOnboardingExperimentAssignment(value)
    ? (value as WorkspaceOnboardingExperimentAssignment)
    : null;
}
