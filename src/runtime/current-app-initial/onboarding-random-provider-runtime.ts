// Restored from ref/webview/assets/app-initial~app-main~onboarding-page~pending-request-item-panel-B2KHEzKZ.js
// App-initial bridge for Welcome v2 onboarding role choices.
import {
  getShuffledWelcomeOnboardingRoles,
  getWelcomeOnboardingWorkMode,
  initWelcomeOnboardingRolesChunk,
  welcomeOnboardingRoleIds,
  welcomeOnboardingRoleMessages,
  welcomeOnboardingSelectedRolesAtom,
} from "../../onboarding/onboarding-roles";

const technicalWelcomeOnboardingRoles = new Set([
  "engineering",
  "data_science",
]);

export function hasTechnicalWelcomeOnboardingRole(
  roles: readonly string[],
): boolean {
  return roles.some((role) => technicalWelcomeOnboardingRoles.has(role));
}

export {
  getShuffledWelcomeOnboardingRoles,
  getWelcomeOnboardingWorkMode,
  initWelcomeOnboardingRolesChunk,
  welcomeOnboardingRoleIds,
  welcomeOnboardingRoleMessages,
  welcomeOnboardingSelectedRolesAtom,
};
