// Restored from ref/webview/assets/hotkey-window-worktree-init-page-CDrG7Phs.js
// Semantic hotkey window worktree init page with restored dependency imports.

import type { ReactElement } from "react";
import { once as runOnce } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotLowerQLowerO as useQuery,
  currentAppInitialSharedCompatSlotUpperKLowerT as buildHotkeyWindowConversationPath,
  currentAppInitialSharedCompatSlotUpperO as initCurrentSharedObjectRuntime,
  currentAppInitialSharedCompatSlotUpperQLowerT as buildHotkeyWindowHomePath,
  currentAppInitialSharedCompatSlotUpperVLowerO as initCurrentSharedRuntime,
  currentAppInitialSharedCompatSlotUpperZLowerT as buildPendingWorktreeMainWindowPath,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  currentAppInitialSharedMember0084 as Navigate,
  currentAppInitialSharedMember0194 as usePendingWorktreeRouteParams,
  currentAppInitialSharedMember0815 as appHostServices,
  currentAppInitialSharedMember0924 as FormattedMessage,
  currentAppInitialSharedRuntime0710 as initAppHostServicesRuntime,
  intlFormatDateTimeRuntime as initIntlFormattingRuntime,
  openAiNativeAppDefinition as initOpenAiNativeAppDefinition,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  initLauncherHotkeyStateChunk,
  launcherHotkeyStateQuery,
} from "../features/hotkey-window-state";
import {
  initHotkeyWindowDetailLayoutChunk,
  useHotkeyWindowDetailLayout,
} from "../utils/use-hotkey-window-detail-layout";
import {
  initPendingWorktreeChunk,
  PendingWorktreeConversation,
} from "./pending-worktree-conversation-ui";

export function HotkeyWindowWorktreeInitPage(): ReactElement {
  const { pendingWorktreeId } = usePendingWorktreeRouteParams();
  const { data: launcherHotkeyState } = useQuery(launcherHotkeyStateQuery);
  const hasConfiguredHotkey =
    launcherHotkeyState == null || launcherHotkeyState.configuredHotkey != null;
  const homePath = buildHotkeyWindowHomePath(hasConfiguredHotkey);

  const detailLayout =
    pendingWorktreeId == null
      ? null
      : {
          title: (
            <span className="max-w-full truncate">
              <FormattedMessage
                id="worktreeInitV2.title"
                defaultMessage="Creating worktree"
                description="Title for the worktree init v2 page"
              />
            </span>
          ),
          mainWindowPath: buildPendingWorktreeMainWindowPath(pendingWorktreeId),
        };
  useHotkeyWindowDetailLayout(detailLayout);

  if (!pendingWorktreeId) {
    return <Navigate to={homePath} replace />;
  }

  return (
    <PendingWorktreeConversation
      homePath={homePath}
      conversationPathBuilder={buildHotkeyWindowConversationPath}
      onConversationReady={openConversationInHotkeyWindow}
    />
  );
}

function openConversationInHotkeyWindow(conversationId: string): void {
  appHostServices.hotkeyWindowHotkeys?.open({
    path: buildHotkeyWindowConversationPath(conversationId),
  });
}

runOnce(() => {
  initCurrentSharedRuntime();
  initCurrentSharedObjectRuntime();
  initIntlFormattingRuntime();
  initOpenAiNativeAppDefinition();
  initAppHostServicesRuntime();
  initPendingWorktreeChunk();
  initLauncherHotkeyStateChunk();
  initHotkeyWindowDetailLayoutChunk();
})();
