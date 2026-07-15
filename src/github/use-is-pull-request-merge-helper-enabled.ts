// Restored from ref/webview/assets/use-is-pull-request-merge-helper-enabled-CrfHuIjo.js
// use-is-pull-request-merge-helper-enabled-CrfHuIjo chunk restored from the Codex webview bundle.
import { useGateValue } from "../vendor/statsig-current-runtime";
import {
  appScopeT,
  appScopeU,
  appScopeUnderscore,
} from "../boundaries/app-scope";
import { createPersistedSignal } from "../runtime/persisted-signal";
type WritableSignal<TValue> = {
  set(value: TValue | ((previous: TValue) => TValue)): void;
};
type PullRequestMergeHelperState = {
  ciJobsFixed$: WritableSignal<number>;
  conversationId$: WritableSignal<string | null>;
  mergeConflictsResolved$: WritableSignal<number>;
  pendingWorktreeId$: WritableSignal<string | null>;
};
type ScopedStore = {
  get<TValue>(signal: unknown, key?: string): TValue;
  set<TValue>(signal: unknown, value: TValue, key?: string): void;
};
type PullRequestMergeHelperStart = {
  pendingWorktreeId: string;
  pullRequestUrl: string;
};
type PullRequestMergeHelperConversation = {
  conversationId: string;
  pendingWorktreeId: string;
};
type PullRequestMergeHelperProgress = {
  ciJobsFixed: number;
  conversationId: string;
  mergeConflictsResolved: number;
};
const useIsPullRequestMergeHelperEnabledA = appScopeU(
  appScopeT,
  (
    _scope: unknown,
    {
      signal,
    }: {
      signal<TValue>(value: TValue): WritableSignal<TValue>;
    },
  ) => {
    const pendingWorktreeId$ = signal<string | null>(null);
    const conversationId$ = signal<string | null>(null);
    return {
      ciJobsFixed$: signal(0),
      conversationId$,
      mergeConflictsResolved$: signal(0),
      pendingWorktreeId$,
    };
  },
);
const useIsPullRequestMergeHelperEnabledO = appScopeUnderscore(
  appScopeT,
  () => null as string | null,
);
const useIsPullRequestMergeHelperEnabledS = createPersistedSignal(
  "skip-pull-request-merge-helper-confirm",
  false,
);
const pendingWorktreeToPullRequestUrlSignal = appScopeUnderscore(
  appScopeT,
  () => null as string | null,
);
function useIsPullRequestMergeHelperEnabledC(
  store: ScopedStore,
  { pendingWorktreeId, pullRequestUrl }: PullRequestMergeHelperStart,
): void {
  const state = store.get<PullRequestMergeHelperState>(
    useIsPullRequestMergeHelperEnabledA,
    pullRequestUrl,
  );
  state.pendingWorktreeId$.set(pendingWorktreeId);
  state.conversationId$.set(null);
  state.ciJobsFixed$.set(0);
  state.mergeConflictsResolved$.set(0);
  store.set(
    pendingWorktreeToPullRequestUrlSignal,
    pullRequestUrl,
    pendingWorktreeId,
  );
}
function useIsPullRequestMergeHelperEnabledN(
  store: ScopedStore,
  { conversationId, pendingWorktreeId }: PullRequestMergeHelperConversation,
): void {
  const pullRequestUrl = store.get<string | null>(
    pendingWorktreeToPullRequestUrlSignal,
    pendingWorktreeId,
  );
  if (pullRequestUrl == null) return;
  store
    .get<PullRequestMergeHelperState>(
      useIsPullRequestMergeHelperEnabledA,
      pullRequestUrl,
    )
    .conversationId$.set(conversationId);
  store.set(
    useIsPullRequestMergeHelperEnabledO,
    conversationId,
    pullRequestUrl,
  );
}
function useIsPullRequestMergeHelperEnabledI(
  store: ScopedStore,
  pendingWorktreeId: string,
): void {
  const pullRequestUrl = store.get<string | null>(
    pendingWorktreeToPullRequestUrlSignal,
    pendingWorktreeId,
  );
  if (pullRequestUrl == null) return;
  store
    .get<PullRequestMergeHelperState>(
      useIsPullRequestMergeHelperEnabledA,
      pullRequestUrl,
    )
    .pendingWorktreeId$.set(null);
}
function useIsPullRequestMergeHelperEnabledR(
  store: ScopedStore,
  {
    ciJobsFixed,
    conversationId,
    mergeConflictsResolved,
  }: PullRequestMergeHelperProgress,
): void {
  const pullRequestUrl = store.get<string | null>(
    useIsPullRequestMergeHelperEnabledO,
    conversationId,
  );
  if (pullRequestUrl == null) return;
  const state = store.get<PullRequestMergeHelperState>(
    useIsPullRequestMergeHelperEnabledA,
    pullRequestUrl,
  );
  if (ciJobsFixed > 0) {
    state.ciJobsFixed$.set((current) => current + ciJobsFixed);
  }
  if (mergeConflictsResolved > 0) {
    state.mergeConflictsResolved$.set(
      (current) => current + mergeConflictsResolved,
    );
  }
}
function useIsPullRequestMergeHelperEnabledT(): boolean {
  return useGateValue("896050304");
}

function initPullRequestMergeHelperStateChunk() {}

function initPullRequestMergeHelperGateChunk() {}

const pullRequestMergeHelperStateSignal = useIsPullRequestMergeHelperEnabledA;
const conversationToPullRequestUrlSignal = useIsPullRequestMergeHelperEnabledO;
const skipPullRequestMergeHelperConfirmSignal =
  useIsPullRequestMergeHelperEnabledS;
const startPullRequestMergeHelper = useIsPullRequestMergeHelperEnabledC;
const clearPullRequestMergeHelperPendingWorktree =
  useIsPullRequestMergeHelperEnabledI;
const attachPullRequestMergeHelperConversation =
  useIsPullRequestMergeHelperEnabledN;
const recordPullRequestMergeHelperProgress =
  useIsPullRequestMergeHelperEnabledR;
const useIsPullRequestMergeHelperEnabled = useIsPullRequestMergeHelperEnabledT;

export {
  attachPullRequestMergeHelperConversation,
  clearPullRequestMergeHelperPendingWorktree,
  conversationToPullRequestUrlSignal,
  initPullRequestMergeHelperGateChunk,
  initPullRequestMergeHelperStateChunk,
  pullRequestMergeHelperStateSignal,
  recordPullRequestMergeHelperProgress,
  skipPullRequestMergeHelperConfirmSignal,
  startPullRequestMergeHelper,
  useIsPullRequestMergeHelperEnabled,
  useIsPullRequestMergeHelperEnabledA,
  useIsPullRequestMergeHelperEnabledC,
  useIsPullRequestMergeHelperEnabledI,
  useIsPullRequestMergeHelperEnabledN,
  useIsPullRequestMergeHelperEnabledO,
  useIsPullRequestMergeHelperEnabledR,
  useIsPullRequestMergeHelperEnabledS,
  useIsPullRequestMergeHelperEnabledT,
};
