// Restored from ref/webview/assets/workspace-onboarding-controller-FdX3OkH-.js
// Teen onboarding eligibility query wrapper.

import { useStatsigClient } from "../../vendor/statsig-current-runtime";
import { useOnboardingContextQuery } from "../../runtime/codex-api";
import {
  WORKSPACE_ONBOARDING_ENABLE_TEEN_CHECK_GATE_ID,
  WORKSPACE_ONBOARDING_TEEN_ONBOARDING_GATE_ID,
} from "../workspace-onboarding-experiment";
import type { StatsigClientWithGates } from "./types";
type TeenOnboardingEligibilityInput = {
  enabled: boolean;
};
type OnboardingContext = {
  age_status?: string;
};
export function useTeenOnboardingEligibility({
  enabled,
}: TeenOnboardingEligibilityInput): {
  isLoading: boolean;
  shouldUseTeenOnboarding: boolean;
} {
  const { client, isLoading: isStatsigLoading } = useStatsigClient() as {
    client: StatsigClientWithGates;
    isLoading: boolean;
  };
  const shouldCheckAge =
    enabled &&
    !isStatsigLoading &&
    client.checkGate(WORKSPACE_ONBOARDING_ENABLE_TEEN_CHECK_GATE_ID);
  const onboardingContextQuery = useOnboardingContextQuery({
    enabled: shouldCheckAge,
  });
  const onboardingContext = onboardingContextQuery.data as
    | OnboardingContext
    | undefined;
  const isUnder18 = onboardingContext?.age_status === "under_18";
  if (!enabled) {
    return {
      isLoading: false,
      shouldUseTeenOnboarding: false,
    };
  }
  return {
    isLoading:
      isStatsigLoading ||
      (shouldCheckAge && Boolean(onboardingContextQuery.isLoading)),
    shouldUseTeenOnboarding:
      shouldCheckAge &&
      isUnder18 &&
      client.checkGate(WORKSPACE_ONBOARDING_TEEN_ONBOARDING_GATE_ID),
  };
}
