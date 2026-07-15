// Restored from ref/webview/assets/profile-visibility-xdIEz8NE.js
// Statsig gates for showing profile surfaces in settings and the account menu.
import {
  useGateValue,
  useLayer,
  useStatsigClient,
} from "../vendor/statsig-current-runtime";
import { useAuth } from "../auth/use-auth";
import { Sku } from "../utils/skus";
const PROFILE_VISIBILITY_GATE = "2478676115";
const PROFILE_USAGE_LAYER = "3503973010";
const SHOW_DROPDOWN_ENTRY_POINT_PARAM = "show_dropdown_entry_point";
type ProfileVisibilityState = {
  isProfileVisibilityLoading: boolean;
  isProfileVisible: boolean;
};
export function useProfileVisibility(): ProfileVisibilityState {
  const { authMethod, isLoading: isAuthLoading } = useAuth();
  const { isLoading: isStatsigLoading } = useStatsigClient();
  const hasProfileVisibilityGate = useGateValue(PROFILE_VISIBILITY_GATE);
  const isChatGptAuth = authMethod === "chatgpt";
  return {
    isProfileVisibilityLoading:
      isAuthLoading || (isChatGptAuth && isStatsigLoading),
    isProfileVisible: isChatGptAuth && hasProfileVisibilityGate,
  };
}
export function useProfileDropdownEntryPointVisible(): boolean {
  const { authMethod } = useAuth();
  const hasProfileVisibilityGate = useGateValue(PROFILE_VISIBILITY_GATE);
  const profileUsageLayer = useLayer(PROFILE_USAGE_LAYER);
  if (authMethod !== "chatgpt") {
    return false;
  }
  return (
    hasProfileVisibilityGate &&
    profileUsageLayer.get(SHOW_DROPDOWN_ENTRY_POINT_PARAM, false)
  );
}

export function initProfileVisibilityHelpersChunk(): void {}

export function initProfileVisibilityChunk(): void {}

type AccountWithStructure = {
  structure?: string | null;
};

export function shouldHideFreeGoPersonalAccountSwitcher({
  authMethod,
  plan,
  currentAccount,
  accounts,
}: {
  authMethod?: string | null;
  plan?: string | null;
  currentAccount?: AccountWithStructure | null;
  accounts?: readonly AccountWithStructure[] | null;
}): boolean {
  if (
    authMethod !== "chatgpt" ||
    (plan !== Sku.FREE && plan !== Sku.GO) ||
    currentAccount == null ||
    accounts == null
  ) {
    return false;
  }
  if (!isPersonalAccount(currentAccount)) return false;
  return !accounts.some((account) => !isPersonalAccount(account));
}

function isPersonalAccount(account: AccountWithStructure): boolean {
  return account.structure?.toLowerCase() === "personal";
}
