// Restored from ref/webview/assets/onboarding-roles-Dtb3fisD.js
import { _appScopeX as createAtom } from "../boundaries/app-scope";
import { defineMessages } from "../vendor/react-intl";
import { welcomeV2RoleStateAtom } from "./onboarding-state";
type WelcomeOnboardingRole = (typeof welcomeOnboardingRoleIds)[number];
type WelcomeOnboardingWorkMode = "coding" | "non_coding";
type WelcomeV2RoleState = {
  personalizedSuggestionsEnabled: boolean;
  roles: WelcomeOnboardingRole[];
  workMode: WelcomeOnboardingWorkMode | null;
};
type RandomSource = () => number;
const codingWelcomeOnboardingRoles = new Set<WelcomeOnboardingRole>([
  "default",
  "engineering",
  "data_science",
]);
const welcomeOnboardingRoleIds = [
  "engineering",
  "data_science",
  "product_management",
  "design",
  "marketing",
  "sales",
  "finance",
  "operations",
  "people_hr",
  "legal",
  "student",
  "something_else",
] as const;
const welcomeOnboardingRoleMessages = defineMessages({
  engineering: {
    id: "electron.onboarding.welcomeV2.role.engineering",
    defaultMessage: "Engineering",
    description: "Welcome v2 role option for engineering users",
  },
  product_management: {
    id: "electron.onboarding.welcomeV2.role.product",
    defaultMessage: "Product",
    description: "Welcome v2 role option for product management users",
  },
  data_science: {
    id: "electron.onboarding.welcomeV2.role.dataScience",
    defaultMessage: "Data science",
    description: "Welcome v2 role option for data science users",
  },
  design: {
    id: "electron.onboarding.welcomeV2.role.design",
    defaultMessage: "Design",
    description: "Welcome v2 role option for design users",
  },
  finance: {
    id: "electron.onboarding.welcomeV2.role.finance",
    defaultMessage: "Finance",
    description: "Welcome v2 role option for finance users",
  },
  marketing: {
    id: "electron.onboarding.welcomeV2.role.marketing",
    defaultMessage: "Marketing",
    description: "Welcome v2 role option for marketing users",
  },
  sales: {
    id: "electron.onboarding.welcomeV2.role.sales",
    defaultMessage: "Sales",
    description: "Welcome v2 role option for sales users",
  },
  operations: {
    id: "electron.onboarding.welcomeV2.role.operations",
    defaultMessage: "Operations",
    description: "Welcome v2 role option for operations users",
  },
  people_hr: {
    id: "electron.onboarding.welcomeV2.role.peopleHr",
    defaultMessage: "People & HR",
    description: "Welcome v2 role option for people and HR users",
  },
  legal: {
    id: "electron.onboarding.welcomeV2.role.legal",
    defaultMessage: "Legal",
    description: "Welcome v2 role option for legal users",
  },
  student: {
    id: "electron.onboarding.welcomeV2.role.student",
    defaultMessage: "Student",
    description: "Welcome v2 role option for student users",
  },
  something_else: {
    id: "electron.onboarding.welcomeV2.role.somethingElse",
    defaultMessage: "Something else",
    description:
      "Welcome v2 role option for users who don't fit into the other categories",
  },
});
const welcomeOnboardingSelectedRolesAtom = createAtom(
  null,
  (
    get: <TValue>(atom: unknown) => TValue,
    set: (atom: unknown, value: WelcomeV2RoleState) => void,
    roles: WelcomeOnboardingRole[],
  ) => {
    set(
      welcomeV2RoleStateAtom,
      applyWelcomeOnboardingRoles(
        get<WelcomeV2RoleState>(welcomeV2RoleStateAtom),
        roles,
      ),
    );
  },
);
function getWelcomeOnboardingWorkMode(
  roles: readonly WelcomeOnboardingRole[],
): WelcomeOnboardingWorkMode {
  return roles.some((role) => codingWelcomeOnboardingRoles.has(role))
    ? "coding"
    : "non_coding";
}
function getShuffledWelcomeOnboardingRoles(
  random: RandomSource = Math.random,
): WelcomeOnboardingRole[] {
  const shuffledRoles = welcomeOnboardingRoleIds.filter(
    (role) => role !== "something_else",
  );
  for (let index = shuffledRoles.length - 1; index > 0; --index) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffledRoles[index], shuffledRoles[swapIndex]] = [
      shuffledRoles[swapIndex],
      shuffledRoles[index],
    ];
  }
  return [...shuffledRoles, "something_else"];
}
function applyWelcomeOnboardingRoles(
  state: WelcomeV2RoleState,
  roles: WelcomeOnboardingRole[],
): WelcomeV2RoleState {
  return {
    ...state,
    roles,
    workMode: getWelcomeOnboardingWorkMode(roles),
  };
}
export {
  getShuffledWelcomeOnboardingRoles,
  getWelcomeOnboardingWorkMode,
  welcomeOnboardingRoleIds,
  welcomeOnboardingSelectedRolesAtom,
  welcomeOnboardingRoleMessages,
};

export function initWelcomeOnboardingRolesChunk(): void {}
