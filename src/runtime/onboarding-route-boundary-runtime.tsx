// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Boundary helpers for the root onboarding redirect gate and desktop menu bar.
import React from "react";
import { Navigate, useOutlet } from "../vendor/react-router";
import { appScopeO as getAppScopeStore } from "../boundaries/app-scope";
import {
  hasCompletedProjectlessOnboardingSignal,
  onboardingOverrideAtom,
} from "../onboarding/onboarding-state";
import {
  shouldSkipWorkspacePickerForArm,
  type WORKSPACE_ONBOARDING_V2_ARM,
} from "../onboarding/workspace-onboarding-experiment";
import { appgenLibraryHotDjo67r4nCompatSlotLowerELowerN as useFinalOnboardingStep } from "./current-app-initial/appgen-library-hot-djo67r4n-runtime";

type WorkspaceOnboardingTarget = "workspace" | string | null;

export const applicationMenuIds = {
  file: "file",
  edit: "edit",
  view: "view",
  help: "help",
} as const;

export const RouteRedirect = Navigate;

export function RouteOutlet(): React.ReactElement | null {
  return useOutlet() as React.ReactElement | null;
}

export function readScopedSignal<TValue = unknown>(
  signal: unknown,
  key?: unknown,
): TValue {
  return getAppScopeStore().get<TValue>(signal, key);
}

export const hasPreviouslyCompletedOnboardingAtom =
  hasCompletedProjectlessOnboardingSignal;

export const onboardingForcedOverrideSignal = onboardingOverrideAtom;

export { useFinalOnboardingStep };

export function shouldAutoCompleteWorkspaceOnboarding({
  arm,
  isRemoteHost,
  onboardingTarget,
}: {
  arm: string | typeof WORKSPACE_ONBOARDING_V2_ARM;
  isRemoteHost: boolean;
  onboardingTarget: WorkspaceOnboardingTarget;
}): boolean {
  return (
    onboardingTarget === "workspace" &&
    !isRemoteHost &&
    shouldSkipWorkspacePickerForArm(arm)
  );
}
