// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~local-conversation-page-4SURv8Cr.js
// Runtime bindings for project hover card parts and remote connection rows.
import { appScope, initAppScope, initScopeRuntime } from "../app-scope-runtime";
import { useScope, useScopedValue, useSignalValue } from "../app-scope-hooks";
import {
  initReactQueryRuntime,
  useAppServerMutation,
  useQueryClient,
} from "../app-server-mutation-runtime";
import { defineMessages } from "../intl-define-messages-runtime";
import { initIntlMessageRuntime } from "../intl-message-runtime";
import { initModalRuntime } from "../modal-runtime";
import { getPathBasename as normalizeTextForCompare } from "../path-basename-runtime";
import { initVscodeBridgeRuntime as initVscodeApiBridge } from "../platform-content-runtime";
import { initReactRuntime } from "../shared-utility-runtime";
import { initStringNormalizeRuntime } from "../string-normalize-runtime";
import {
  LocalProjectFallbackIcon,
  ProjectAvatar,
  initProjectHoverCardCurrentRuntime,
  openLocalProjectEditModal,
  threadAttentionCountsSignal,
  updateWorkspaceRootLabel,
} from "./current-primitives";
import {
  createPersistentSignal,
  getChunkModuleExports,
  getGlobalSettingValue,
  getProjectWritableRootsForDisplay,
  globalSettingKeys,
  initGlobalSettingsRuntime,
  initGlobalStateQueryRuntime,
  initPersistentSignalRuntime,
  normalizeWorkspacePath,
  parseProjectWritableRoots,
  persistGlobalSettingValue,
  primeGlobalSettingValue,
  readGlobalSetting,
  setGlobalSettingValue,
  toastControllerSignal,
  useGlobalStateQuery,
  useHostConfigById,
  useRemoteHostConfigs,
} from "./settings-state";
import { initButtonComponentPrimitives } from "../../ui/button";
import {
  initAppDialog,
  initDialogLayoutComponents,
} from "../../ui/dialog-layout";
import {
  FormattedMessage,
  initIntlRuntime as initReactIntlRuntime,
  useIntl,
} from "../../vendor/react-intl";
import {
  GlobeIcon,
  initGlobeIcon as initSignalHooksRuntime,
} from "../../icons/globe-icon";
import {
  SettingsGearIcon as EditProjectIcon,
  initSettingsGearIcon,
} from "../../icons/settings-gear-icon";
import {
  Spinner as ActivityIcon,
  initSpinnerComponent,
} from "../../ui/spinner";
import { classNames, initClassNameRuntime } from "../../utils/class-names";
import {
  RemoteProjectIcon,
  WaitingStatusIcon,
  initRemoteConnectionStateChunk,
  initRemoteProjectIconChunk,
  initWaitingStatusIconChunk,
  useRemoteConnectionState,
} from "../../remote/remote-connection-runtime";
import {
  Gd as initProfileIconsChunk,
  Wd as RowActionChevronIcon,
} from "../../vendor/profile-page-runtime";

function initKeyboardShortcutRuntime(): void {
  // Current ProjectHoverCard no longer initializes the old keyboard-shortcut runtime.
}

function initCodexAppFrameRuntime(): void {
  // Current ProjectHoverCard chunk no longer has a separate app-frame initializer.
}

function initButtonRuntime(): void {
  initButtonComponentPrimitives();
}

function initClassNamesRuntime(): void {
  initClassNameRuntime();
}

function initDialogRuntime(): void {
  initAppDialog();
  initDialogLayoutComponents();
}

function initInlinePopoverRuntime(): void {
  initClassNameRuntime();
}

function initLocalProjectActionsRuntime(): void {
  initProjectHoverCardCurrentRuntime();
}

function initNotificationRuntime(): void {
  // Current project hover card uses the app-scope toast controller directly.
}

function initPanelRuntime(): void {
  // Current project hover card no longer has a separate panel primitive chunk.
}

function initSvgIconRuntime(): void {
  // SVG icons are restored as plain React components.
}

function initWorkspaceRootLabelRuntime(): void {
  initSettingsGearIcon();
  initProjectHoverCardCurrentRuntime();
}

export {
  ActivityIcon,
  appScope,
  classNames,
  createPersistentSignal,
  defineMessages,
  EditProjectIcon,
  FormattedMessage,
  getChunkModuleExports,
  getGlobalSettingValue,
  getProjectWritableRootsForDisplay,
  globalSettingKeys,
  GlobeIcon,
  initAppScope,
  initButtonRuntime,
  initClassNamesRuntime,
  initCodexAppFrameRuntime,
  initDialogRuntime,
  initGlobalSettingsRuntime,
  initGlobalStateQueryRuntime,
  initInlinePopoverRuntime,
  initIntlMessageRuntime,
  initKeyboardShortcutRuntime,
  initLocalProjectActionsRuntime,
  initModalRuntime,
  initNotificationRuntime,
  initPanelRuntime,
  initPersistentSignalRuntime,
  initProfileIconsChunk,
  initReactIntlRuntime,
  initReactQueryRuntime,
  initReactRuntime,
  initRemoteConnectionStateChunk,
  initRemoteProjectIconChunk as initRemoteConnectionActionsChunk,
  initScopeRuntime,
  initSignalHooksRuntime,
  initSpinnerComponent,
  initStringNormalizeRuntime,
  initSvgIconRuntime,
  initVscodeApiBridge,
  initWaitingStatusIconChunk as initRemoteProjectIconChunk,
  initWorkspaceRootLabelRuntime,
  LocalProjectFallbackIcon,
  normalizeTextForCompare,
  normalizeWorkspacePath,
  openLocalProjectEditModal,
  parseProjectWritableRoots,
  persistGlobalSettingValue,
  primeGlobalSettingValue,
  ProjectAvatar,
  readGlobalSetting,
  RemoteProjectIcon,
  RowActionChevronIcon,
  setGlobalSettingValue,
  threadAttentionCountsSignal,
  toastControllerSignal,
  updateWorkspaceRootLabel,
  useAppServerMutation,
  useGlobalStateQuery,
  useHostConfigById,
  useIntl,
  useQueryClient,
  useRemoteConnectionState,
  useRemoteHostConfigs,
  useScope,
  useScopedValue,
  useSignalValue,
  WaitingStatusIcon,
};
