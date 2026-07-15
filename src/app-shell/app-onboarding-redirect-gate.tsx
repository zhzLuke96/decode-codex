// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Root route gate for the Electron app. Resolves the onboarding target from auth,
// the final onboarding step, workspace roots and forced overrides; tells the host
// which window mode to show; logs a "previously completed onboarding" event once
// on the login route; and redirects the router to the matching onboarding page (or
// renders the app outlet when onboarding is complete).
import React, { useEffect, useRef } from "react";
import { hostMessageBridge } from "../runtime/app-main-host-runtime";
import { useAuth } from "../auth/use-auth";
import { useLocation } from "../conversations/local-conversation-route-runtime";
import {
  appRootScope,
  hasPreviouslyCompletedOnboardingAtom,
  logWorkspaceOnboardingEvent,
  onboardingForcedOverrideSignal,
  onboardingPreviouslyCompletedEvent,
  projectlessOnboardingCompletedSignal,
  RouteOutlet,
  RouteRedirect,
  shouldAutoCompleteWorkspaceOnboarding,
  useAtomValue,
  useFinalOnboardingStep,
  useScope,
  useSignalValue,
  useWorkspaceOnboardingExperiment,
  workspaceRootsQueryAtom,
} from "../boundaries/onboarding-commons-externals.facade";

const ONBOARDING_LOGIN_PATH = "/login";
const ONBOARDING_WELCOME_PATH = "/welcome";
const ONBOARDING_SELECT_WORKSPACE_PATH = "/select-workspace";

type OnboardingTarget = "login" | "welcome" | "workspace" | "app" | null;

interface OnboardingAuthState {
  authMethod: string | null;
  requiresAuth: boolean;
  isLoading: boolean;
}

interface FinalOnboardingStep {
  isLoading: boolean;
  shouldShow: boolean;
}

interface ResolveOnboardingTargetInput {
  auth: OnboardingAuthState;
  workspaceRootsData?: { roots: unknown[] };
  workspaceRootsIsLoading: boolean;
  forcedOverride: OnboardingTarget;
  finalStep: FinalOnboardingStep;
  projectlessOnboardingCompleted: boolean;
}

function resolveOnboardingTarget({
  auth,
  workspaceRootsData,
  workspaceRootsIsLoading,
  forcedOverride,
  finalStep,
  projectlessOnboardingCompleted,
}: ResolveOnboardingTargetInput): OnboardingTarget {
  return auth.isLoading
    ? null
    : !auth.authMethod && auth.requiresAuth
      ? "login"
      : forcedOverride ||
        (finalStep.isLoading
          ? null
          : finalStep.shouldShow
            ? "welcome"
            : projectlessOnboardingCompleted
              ? "app"
              : workspaceRootsIsLoading
                ? null
                : (workspaceRootsData?.roots.length ?? 0) === 0
                  ? "welcome"
                  : "app");
}

export function AppOnboardingRedirectGate(): React.JSX.Element {
  const scope = useScope(appRootScope);
  const location = useLocation();
  const auth = useAuth();
  const finalStep = useFinalOnboardingStep();
  const forcedOverrideSetting = useSignalValue(onboardingForcedOverrideSignal);
  const projectlessOnboardingCompleted = useSignalValue(
    projectlessOnboardingCompletedSignal,
  );
  const hasPreviouslyCompletedOnboarding = useAtomValue(
    hasPreviouslyCompletedOnboardingAtom,
  );
  const hasNavigatedRef = useRef(false);
  const isAuthResolved =
    forcedOverrideSetting !== "auto" ||
    auth.authMethod != null ||
    auth.requiresAuth === false;
  const workspaceRootsQuery = useAtomValue(workspaceRootsQueryAtom);
  const forcedOverride: OnboardingTarget =
    forcedOverrideSetting === "auto" ? null : forcedOverrideSetting;
  const onboardingTarget = resolveOnboardingTarget({
    auth,
    workspaceRootsData: isAuthResolved ? workspaceRootsQuery.data : undefined,
    workspaceRootsIsLoading: isAuthResolved && workspaceRootsQuery.isLoading,
    forcedOverride,
    projectlessOnboardingCompleted,
    finalStep,
  });
  const { workspaceOnboardingExperimentArm } = useWorkspaceOnboardingExperiment(
    {
      onboardingTarget,
    },
  );
  const resolvedTarget: OnboardingTarget =
    shouldAutoCompleteWorkspaceOnboarding({
      onboardingTarget,
      arm: workspaceOnboardingExperimentArm,
      isRemoteHost: false,
    })
      ? "app"
      : onboardingTarget;

  useEffect(() => {
    if (!resolvedTarget) return;
    const windowMode = resolvedTarget === "app" ? "app" : "onboarding";
    hostMessageBridge.dispatchMessage(
      "electron-set-window-mode",
      windowMode === "onboarding"
        ? { mode: windowMode, onboardingVariant: "v2" }
        : { mode: windowMode },
    );
  }, [resolvedTarget]);

  useEffect(() => {
    if (location.pathname !== ONBOARDING_LOGIN_PATH) {
      hasNavigatedRef.current = false;
      return;
    }
    if (hasPreviouslyCompletedOnboarding == null || hasNavigatedRef.current) {
      return;
    }
    hasNavigatedRef.current = true;
    logWorkspaceOnboardingEvent(scope, onboardingPreviouslyCompletedEvent, {
      hasPreviouslyCompletedOnboarding,
    });
  }, [hasPreviouslyCompletedOnboarding, location.pathname, scope]);

  if (!resolvedTarget) return <></>;

  const pathname = location.pathname;
  const isOnboardingRoute =
    pathname === ONBOARDING_LOGIN_PATH ||
    pathname === ONBOARDING_WELCOME_PATH ||
    pathname === ONBOARDING_SELECT_WORKSPACE_PATH;

  if (resolvedTarget === "login" && pathname !== ONBOARDING_LOGIN_PATH) {
    return <RouteRedirect to={ONBOARDING_LOGIN_PATH} replace />;
  }
  if (resolvedTarget === "welcome" && pathname !== ONBOARDING_WELCOME_PATH) {
    return <RouteRedirect to={ONBOARDING_WELCOME_PATH} replace />;
  }
  if (
    resolvedTarget === "workspace" &&
    pathname !== ONBOARDING_SELECT_WORKSPACE_PATH
  ) {
    return <RouteRedirect to={ONBOARDING_SELECT_WORKSPACE_PATH} replace />;
  }
  if (resolvedTarget === "app" && isOnboardingRoute) {
    return <RouteRedirect to="/" replace />;
  }
  return <RouteOutlet />;
}
