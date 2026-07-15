// Restored from ref/webview/assets/debug-window-page-DHU1KOnj.js
// Semantic DebugWindowPage surface with restored dependency imports.

import { useState, type ReactElement } from "react";
import { once as runOnce } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotLowerY as useViewMessageSubscription,
  currentAppInitialSharedCompatSlotUnderscore as initViewMessageBridgeRuntime,
  currentAppInitialSharedCompatSlotUpperLLowerI as BuildFlavor,
  currentAppInitialSharedCompatSlotUpperO as initCurrentSharedObjectRuntime,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadQueryCompatSlotLowerLLowerS as ElectronOnlyShell,
  worktreeNewThreadQueryCompatSlotLowerQLowerC as initDebugWindowRouteRuntime,
  worktreeNewThreadQueryCompatSlotLowerULowerS as initElectronOnlyShellRuntime,
  worktreeNewThreadQueryCompatSlotUpperKLowerC as getCurrentBuildFlavor,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  currentAppInitialSharedMember0084 as Navigate,
  openAiNativeAppDefinition as initOpenAiNativeAppDefinition,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  debugModalN as DebugModal,
  debugModalR as initDebugModalChunk,
} from "../runtime/current-app-initial/debug-modal-current-runtime";

type DebugWindowOriginConversationChangedMessage = {
  conversationId: string;
};

function DebugWindowPage(): ReactElement {
  const [originConversationId, setOriginConversationId] = useState<
    string | null
  >(null);

  useViewMessageSubscription(
    "debug-window-origin-conversation-changed",
    ({ conversationId }: DebugWindowOriginConversationChangedMessage) => {
      setOriginConversationId(conversationId);
    },
  );

  if (!BuildFlavor.allowDebugMenu(getCurrentBuildFlavor())) {
    return <Navigate to="/" replace />;
  }

  return (
    <ElectronOnlyShell electron>
      <main className="h-dvh w-full overflow-hidden bg-token-main-surface-primary text-token-foreground">
        <DebugModal
          conversationIdOverride={originConversationId}
          onClose={closeDebugWindow}
          showHeader={false}
          showPopOutButton={false}
        />
      </main>
    </ElectronOnlyShell>
  );
}

function closeDebugWindow(): void {
  window.close();
}

runOnce(() => {
  initCurrentSharedObjectRuntime();
  initOpenAiNativeAppDefinition();
  initElectronOnlyShellRuntime();
  initViewMessageBridgeRuntime();
  initDebugWindowRouteRuntime();
  initDebugModalChunk();
})();
export { DebugWindowPage };
