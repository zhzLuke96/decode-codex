// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Boundary facade (thread-scope) - typed `any` placeholders for non-exported cross-slice symbols.
// Open boundary; replace as owning modules are restored. Auto-generated from imports.

export { ScopeProvider } from "../runtime/scope-signal-runtime";
export { va as clientThreadByIdSignal } from "../runtime/current-app-initial/remote-projects-app-shared-backing";
export {
  getRouteThreadLocationId as getClientThreadScopeKey,
  resolvedThreadLocationIdAtom as clientThreadIdByRouteSignal,
  routeScope,
  threadScope as clientThreadScope,
} from "../runtime/persisted-signal";
export { isClientThreadId as isNonEmptyClientThreadId } from "../runtime/persisted-signal/route-ids";
export {
  createDerived as createComputedSignal,
  useSignalValue as useAppScopeValue,
  useSignalValue as useScopedSignalValue,
} from "../runtime/scope-signal-runtime";
