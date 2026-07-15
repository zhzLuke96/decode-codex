// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~nek76pmq-C240EGR1.js
// Shared-object host state and remote host config helpers for the current app-main runtime.
export {
  appScopeRoot,
  initSharedObjectAppScopeRoot,
  initSharedObjectSignalFamilyRuntime,
  initSharedObjectStateRuntime,
  readSharedObjectValueWithReader,
  sharedObjectAppScopeRoot,
  updateSharedObjectValue,
  useSharedObjectState,
} from "./shared-object-host-runtime/shared-object-state";
export type {
  SharedObjectScope,
  SharedObjectState,
  SharedObjectUpdate,
  SharedObjectValueReader,
} from "./shared-object-host-runtime/shared-object-state";

export {
  findRemoteHostConfigById,
  initLocalHostKindRuntime,
  initRemoteConnectionListRuntime,
  initRemoteHostConfigRuntime,
  initSharedObjectHostRuntime,
  isCurrentHostLocal,
  localHostKind,
  localHostKindAlias,
  normalizeRemoteConnectionToHostConfig,
  useRemoteHostConfigs,
  useSharedObjectHostConfigById,
} from "./shared-object-host-runtime/remote-host-config";
export type {
  RemoteConnection,
  RemoteHostConfig,
  RemoteHostConfigOptions,
} from "./shared-object-host-runtime/remote-host-config";
