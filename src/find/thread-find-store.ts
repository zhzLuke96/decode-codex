// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Imperative mutations over the thread-find app-scope atoms: opening/closing the
// find bar, switching search domain (conversation/diff/browser), updating the
// query, applying browser-provided status and stepping through matches.
import {
  emptyFindBrowserStatus,
  findActiveDomainAtom,
  findActiveMatchIndexAtom,
  findBrowserStatusAtom,
  findBrowserTargetAtom,
  findPreferredDomainAtom,
  findLoadingAtom,
  findOpenAtom,
  findQueryAtom,
  findResultAtom,
} from "./thread-find-atoms";
import {
  findActiveOrchestrationAtom,
  findDefaultOrchestrationAtom,
  getThreadFindController,
} from "../boundaries/onboarding-commons-externals.facade";

export type ThreadFindDomain = "conversation" | "diff" | "browser";

export type ThreadFindBrowserStatus = {
  activeMatchOrdinal: number;
  matches: number;
  query: string;
};

export type ThreadFindBrowserTarget = {
  conversationId?: string | null;
  browserTabId?: string | null;
} | null;

type AppScope = {
  get<TValue>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, value: unknown, key?: unknown): void;
};

export function openThreadFind(scope: AppScope): void {
  scope.set(findOpenAtom, true);
}

export function setThreadFindScope(
  scope: AppScope,
  domain: ThreadFindDomain,
  orchestrationId?: string | null,
): void {
  scope.set(findPreferredDomainAtom, domain);
  if (
    orchestrationId != null &&
    orchestrationId !== getActiveOrchestration(scope)
  ) {
    preserveScrollBeforeClear(scope);
    scope.set(findActiveOrchestrationAtom, orchestrationId);
    resetFindResults(scope);
  }
}

export function closeThreadFind(scope: AppScope): void {
  preserveScrollBeforeClear(scope);
  scope.set(findOpenAtom, false);
  scope.set(findQueryAtom, "");
  scope.set(findResultAtom, null);
  scope.set(findLoadingAtom, false);
  scope.set(findActiveMatchIndexAtom, null);
}

export function setThreadFindDomain(
  scope: AppScope,
  domain: ThreadFindDomain,
): void {
  preserveScrollBeforeClear(scope);
  scope.set(findActiveDomainAtom, domain);
  scope.set(findResultAtom, null);
  scope.set(findLoadingAtom, false);
  scope.set(findActiveMatchIndexAtom, null);
}

export function setThreadFindBrowserTarget(
  scope: AppScope,
  target: ThreadFindBrowserTarget,
): void {
  const current = scope.get<ThreadFindBrowserTarget>(findBrowserTargetAtom);
  const isSameTarget =
    current?.conversationId === target?.conversationId &&
    current?.browserTabId === target?.browserTabId;
  if (isSameTarget) {
    return;
  }
  scope.set(findBrowserTargetAtom, target);
  scope.set(findBrowserStatusAtom, emptyFindBrowserStatus);
  if (
    target == null &&
    scope.get<ThreadFindDomain>(findActiveDomainAtom) === "browser"
  ) {
    setThreadFindDomain(scope, "conversation");
  }
}

export function applyThreadFindBrowserStatus(
  scope: AppScope,
  status: ThreadFindBrowserStatus,
): void {
  scope.set(findBrowserStatusAtom, status);
  if (scope.get<ThreadFindDomain>(findActiveDomainAtom) === "browser") {
    scope.set(findQueryAtom, status.query);
    scope.set(findLoadingAtom, false);
  }
}

export function setThreadFindBrowserQuery(
  scope: AppScope,
  query: string,
): void {
  preserveScrollBeforeClear(scope);
  scope.set(findQueryAtom, query);
  scope.set(findResultAtom, null);
  scope.set(findLoadingAtom, false);
  scope.set(findActiveMatchIndexAtom, null);
  scope.set(findBrowserStatusAtom, {
    activeMatchOrdinal: 0,
    matches: 0,
    query,
  });
}

export function setThreadFindActiveOrchestration(
  scope: AppScope,
  orchestrationId: string | null,
): void {
  scope.set(findActiveOrchestrationAtom, orchestrationId);
}

export function submitThreadFindQuery(
  scope: AppScope,
  options?: { shift?: boolean },
): void {
  const query = scope.get<string>(findQueryAtom).trim();
  if (query.length === 0) return;
  const result = scope.get<ThreadFindResult | null>(findResultAtom);
  if (
    result == null ||
    result.query !== query ||
    result.domain !== scope.get<ThreadFindDomain>(findActiveDomainAtom)
  ) {
    getThreadFindController(scope)?.runSearch({ selectFirstMatch: true });
    return;
  }
  if (options?.shift) {
    goToPreviousThreadFindMatch(scope);
    return;
  }
  goToNextThreadFindMatch(scope);
}

export function setThreadFindQuery(scope: AppScope, query: string): void {
  if (query.trim().length === 0) {
    preserveScrollBeforeClear(scope);
    scope.set(findQueryAtom, query);
    scope.set(findResultAtom, null);
    scope.set(findLoadingAtom, false);
    scope.set(findActiveMatchIndexAtom, null);
    return;
  }
  scope.set(findQueryAtom, query);
  scope.set(findLoadingAtom, true);
}

export function goToNextThreadFindMatch(scope: AppScope): void {
  const result = scope.get<ThreadFindResult | null>(findResultAtom);
  if (result == null || result.matches.length === 0) {
    return;
  }
  navigateToMatch(
    scope,
    (scope.get<number | null>(findActiveMatchIndexAtom) ?? -1) + 1,
  );
}

export function goToPreviousThreadFindMatch(scope: AppScope): void {
  const result = scope.get<ThreadFindResult | null>(findResultAtom);
  if (result == null || result.matches.length === 0) {
    return;
  }
  navigateToMatch(
    scope,
    (scope.get<number | null>(findActiveMatchIndexAtom) ?? 0) - 1,
  );
}

type ThreadFindResult = {
  domain?: ThreadFindDomain;
  matches: unknown[];
  query?: string;
};

function getActiveOrchestration(scope: AppScope): string | null {
  return (
    scope.get<string | null>(findActiveOrchestrationAtom) ??
    scope.get<string | null>(findDefaultOrchestrationAtom)
  );
}

function preserveScrollBeforeClear(scope: AppScope): void {
  if (scope.get<ThreadFindResult | null>(findResultAtom) != null) {
    getThreadFindController(scope)?.preserveScrollBeforeResultClear();
  }
}

function resetFindResults(scope: AppScope): void {
  scope.set(findResultAtom, null);
  scope.set(findActiveMatchIndexAtom, null);
  scope.set(
    findLoadingAtom,
    getThreadFindController(scope) != null &&
      scope.get<boolean>(findOpenAtom) &&
      scope.get<string>(findQueryAtom).trim().length > 0,
  );
}

function navigateToMatch(scope: AppScope, index: number | null): void {
  const result = scope.get<ThreadFindResult | null>(findResultAtom);
  if (index == null || result == null || result.matches.length === 0) {
    scope.set(findActiveMatchIndexAtom, null);
    return;
  }
  const wrapped = wrapMatchIndex(index, result.matches.length);
  if (scope.get<number | null>(findActiveMatchIndexAtom) === wrapped) {
    getThreadFindController(scope)?.ensureVisibleActiveMatch();
    return;
  }
  scope.set(findActiveMatchIndexAtom, wrapped);
}

function wrapMatchIndex(value: number, length: number): number {
  if (length <= 0) {
    return 0;
  }
  const remainder = value % length;
  return remainder < 0 ? remainder + length : remainder;
}
