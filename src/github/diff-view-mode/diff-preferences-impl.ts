// Restored from ref/webview/assets/diff-view-mode-C5urbSEm.js
// diff-view-mode-C5urbSEm chunk restored from the Codex webview bundle.
// Semantic implementation for diff view persisted preference signals.
import { _appScopeC as createComputedSignal } from "../../boundaries/app-scope";
import {
  createPersistedSignal,
  getRouteThreadId,
  routeScope,
  type RouteLocation,
} from "../../runtime/persisted-signal";
type AppScopeSignal<TValue> = unknown;
type DiffViewMode = "unified" | "split" | string;
interface ScopedReadContext<TScopeValue> {
  get<TValue>(signal: AppScopeSignal<TValue>): TValue;
  scope: {
    value: TScopeValue;
  };
}
interface RouteScopedStore {
  value: RouteLocation;
  get<TValue>(signal: AppScopeSignal<TValue>): TValue;
  set<TValue>(signal: AppScopeSignal<TValue>, value: TValue): void;
}
interface ThreadDiffSettings {
  richPreviewEnabled?: boolean;
}
type ThreadDiffSettingsByRoute = Record<string, ThreadDiffSettings>;
const createComputed = createComputedSignal as <TValue>(
  scope: unknown,
  read: (context: ScopedReadContext<RouteLocation>) => TValue,
) => AppScopeSignal<TValue>;
const EMPTY_THREAD_DIFF_SETTINGS: ThreadDiffSettingsByRoute = {};
const threadDiffSettingsSignal =
  createPersistedSignal<ThreadDiffSettingsByRoute>(
    "diffViewThreadSettings",
    {},
  );
export const editorDiffViewModeSignal = createPersistedSignal<DiffViewMode>(
  "editorDiffViewMode",
  "unified",
);
export const wordDiffsEnabledSignal = createPersistedSignal(
  "wordDiffsEnabled.2",
  false,
);
export const hideDiffWhitespaceSignal = createPersistedSignal(
  "hideDiffWhitespace",
  false,
);
export const fileSourceGitBlameSignal = createPersistedSignal(
  "fileSourceGitBlame",
  false,
);
export const richPreviewSignal = createPersistedSignal(
  "diffRichPreview",
  false,
);
export const wrapCodeDiffSignal = createPersistedSignal(
  "wrapCodeDiff.2",
  false,
);
export const scopedRichPreviewEnabledSignal = createComputed(
  routeScope,
  ({ get, scope }) =>
    (get(threadDiffSettingsSignal) ?? EMPTY_THREAD_DIFF_SETTINGS)[
      getDiffSettingsRouteKey(scope.value)
    ]?.richPreviewEnabled ?? true,
);
export function setThreadRichPreviewEnabled(
  routeStore: RouteScopedStore,
  richPreviewEnabled: boolean,
): void {
  const settingsByRoute =
    routeStore.get(threadDiffSettingsSignal) ?? EMPTY_THREAD_DIFF_SETTINGS;
  const routeKey = getDiffSettingsRouteKey(routeStore.value);
  routeStore.set(threadDiffSettingsSignal, {
    ...settingsByRoute,
    [routeKey]: {
      ...settingsByRoute[routeKey],
      richPreviewEnabled,
    },
  });
}
function getDiffSettingsRouteKey(routeLocation: RouteLocation): string {
  return getRouteThreadId(routeLocation) ?? routeLocation.pathname;
}
