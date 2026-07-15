// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// App-scope atoms backing the thread find bar across conversation, diff, and browser domains.
import {
  _appScopeC as createComputedSignal,
  appScopeRoot,
  createAppScopeSignal,
} from "../boundaries/app-scope";
import {
  activeAppShellFocusAreaSignal,
  rightPanelExpandedSignal,
} from "../app-shell/app-shell-state";
import { rightAppShellTabController } from "../app-shell/app-shell-tab-controller";

export type ThreadFindDomain = "conversation" | "diff" | "browser";

export type ThreadFindBrowserStatus = {
  activeMatchOrdinal: number;
  matches: number;
  query: string;
};

export type ThreadFindBrowserTarget = {
  browserTabId?: string | null;
  conversationId?: string | null;
} | null;

export type ThreadFindResult = {
  contextId: string;
  domain: ThreadFindDomain;
  isCapped: boolean;
  matches: unknown[];
  query: string;
  runId: number;
  totalMatches: number;
};

export const emptyFindBrowserStatus: ThreadFindBrowserStatus = {
  activeMatchOrdinal: 0,
  matches: 0,
  query: "",
};

type SignalReader = {
  get<TValue>(signal: unknown, key?: unknown): TValue;
};

export const findOpenAtom = createAppScopeSignal<boolean>(appScopeRoot, false);
export const findActiveDomainAtom = createAppScopeSignal<ThreadFindDomain>(
  appScopeRoot,
  "conversation",
);
export const findPreferredDomainAtom = createAppScopeSignal<ThreadFindDomain>(
  appScopeRoot,
  "conversation",
);
export const findEffectiveDomainAtom = createComputedSignal<ThreadFindDomain>(
  appScopeRoot,
  ({ get }: SignalReader) =>
    get<string | null>(activeAppShellFocusAreaSignal) === "right-panel" &&
    get<boolean>(rightPanelExpandedSignal) &&
    get<{ tabId?: string } | null>(rightAppShellTabController.activeTab$)
      ?.tabId === "diff"
      ? "diff"
      : get(findPreferredDomainAtom),
);
export const findQueryAtom = createAppScopeSignal<string>(appScopeRoot, "");
export const findResultAtom = createAppScopeSignal<ThreadFindResult | null>(
  appScopeRoot,
  null,
);
export const findLoadingAtom = createAppScopeSignal<boolean>(
  appScopeRoot,
  false,
);
export const findActiveMatchIndexAtom = createAppScopeSignal<number | null>(
  appScopeRoot,
  null,
);
export const findActiveMatchAtom = createComputedSignal<unknown | null>(
  appScopeRoot,
  ({ get }: SignalReader) => {
    const result = get<ThreadFindResult | null>(findResultAtom);
    const activeMatchIndex = get<number | null>(findActiveMatchIndexAtom);
    return result == null || activeMatchIndex == null
      ? null
      : (result.matches[activeMatchIndex] ?? null);
  },
);
export const findHasQueryAtom = createComputedSignal<boolean>(
  appScopeRoot,
  ({ get }: SignalReader) => get<string>(findQueryAtom).trim().length > 0,
);
export const findBrowserTargetAtom =
  createAppScopeSignal<ThreadFindBrowserTarget>(appScopeRoot, null);
export const findBrowserStatusAtom =
  createAppScopeSignal<ThreadFindBrowserStatus>(
    appScopeRoot,
    emptyFindBrowserStatus,
  );

export function initThreadFindAtomsChunk(): void {}
