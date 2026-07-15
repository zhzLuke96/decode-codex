// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~keyboard-shortcuts-~n7jwlpf0-BaxBxQFI.js
// Whether to surface the free-plan upsell affordance in the home composer:
// only for ChatGPT free/go plans on a personal account that has no linked
// non-personal (workspace) account.
import { PlanType } from "../boundaries/onboarding-commons-externals.facade";

interface KeyboardShortcutsAccount {
  structure?: string | null;
  [key: string]: unknown;
}

export interface HomeComposerKeyboardShortcutsInput {
  authMethod: string | null | undefined;
  plan: string | null | undefined;
  currentAccount: KeyboardShortcutsAccount | null | undefined;
  accounts: KeyboardShortcutsAccount[] | null | undefined;
}

function isPersonalAccount(
  account: KeyboardShortcutsAccount | null | undefined,
): boolean {
  return account?.structure?.toLowerCase() === "personal";
}

function hasNonPersonalSiblingAccount({
  currentAccount,
  accounts,
}: {
  currentAccount: KeyboardShortcutsAccount | null | undefined;
  accounts: KeyboardShortcutsAccount[] | null | undefined;
}): boolean {
  if (!isPersonalAccount(currentAccount)) return false;
  return accounts == null
    ? true
    : accounts.some((account) => !isPersonalAccount(account));
}

export function useHomeComposerKeyboardShortcuts({
  authMethod,
  plan,
  currentAccount,
  accounts,
}: HomeComposerKeyboardShortcutsInput): boolean {
  if (
    authMethod !== "chatgpt" ||
    (plan !== PlanType.FREE && plan !== PlanType.GO) ||
    currentAccount == null ||
    accounts == null
  ) {
    return false;
  }
  return !hasNonPersonalSiblingAccount({ currentAccount, accounts });
}
