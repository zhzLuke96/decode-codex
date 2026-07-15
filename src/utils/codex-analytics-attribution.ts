// Restored from ref/webview/assets/codex-analytics-attribution-CQbubOx-.js
// CodexAnalyticsAttribution chunk restored from the Codex webview bundle.
import { appScopeM } from "../boundaries/app-scope";
import { st } from "../boundaries/thread-context-inputs.facade";
import { routeScope } from "../runtime/persisted-signal";
export const codexAnalyticsAttribution = appScopeM(
  routeScope,
  ({ get, scope }) => {
    if (scope.value.routeKind !== "local-thread") return null;
    let _codexAnalyticsAttribution = get(st, scope.value.conversationId);
    return _codexAnalyticsAttribution?.turnId == null
      ? null
      : {
          threadId: scope.value.conversationId,
          turnId: _codexAnalyticsAttribution.turnId,
        };
  },
);
