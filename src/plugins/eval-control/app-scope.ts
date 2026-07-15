// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Shared app-scope guard for dev-only eval-control actions. Handlers that reach
// into per-conversation / per-thread signal state require a bound app scope;
// this guard turns a missing scope into a clear error.

/** A bound app scope store: reads signal/query values by family + key. */
export interface EvalControlScope {
  get: <T = unknown>(signalOrFamily: unknown, key?: unknown) => T;
}

/** Context threaded through every eval-control action handler. */
export interface EvalControlContext {
  scope: EvalControlScope | null;
}

export function requireAppScope(context: EvalControlContext): EvalControlScope {
  if (context.scope == null) {
    throw new Error("Eval control action requires an app scope");
  }
  return context.scope;
}
