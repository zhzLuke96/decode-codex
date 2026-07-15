// Restored from ref/webview/assets/hotkey-window-new-thread-page-DC8KDgIn.js
// Semantic hotkey window new thread page with restored dependency imports.

import type { ReactElement } from "react";
import { once as runOnce } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotUpperKLowerT as buildHotkeyWindowConversationPath,
  currentAppInitialSharedCompatSlotUpperO as initCurrentSharedObjectRuntime,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  currentAppInitialSharedMember0815 as appHostServices,
  currentAppInitialSharedMember0924 as FormattedMessage,
  currentAppInitialSharedRuntime0710 as initAppHostServicesRuntime,
  intlFormatDateTimeRuntime as initIntlFormattingRuntime,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  ComposerProjectSelector,
  initHomeHeroHeadingChunk,
} from "../vendor/automations-page-current-runtime";
import {
  appgenLibraryHotDjo67r4nCompatSlotLowerN as initNewThreadComposerFooterRuntime,
  appgenLibraryHotDjo67r4nCompatSlotLowerT as NewThreadComposerFooter,
} from "../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";
import {
  CodexKnotLogoIcon,
  initCodexKnotLogoIconChunk,
} from "../runtime/current-app-initial/plugin-logo-card-runtime";
import {
  initThreadLayoutChunk,
  ThreadLayout,
} from "../runtime/current-app-initial/conversation-dialog-layer-runtime";
import {
  initHotkeyWindowDetailLayoutChunk,
  useHotkeyWindowDetailLayout,
} from "../utils/use-hotkey-window-detail-layout";
import {
  initThreadScrollLayoutChunk,
  ThreadScrollLayout,
} from "../threads/thread-scroll-layout";
export function HotkeyWindowNewThreadPage(): ReactElement {
  const detailLayout = {
    title: (
      <span className="max-w-full truncate">
        <FormattedMessage
          id="threadPage.newThread"
          defaultMessage="New chat"
          description="Header title for the home page"
        />
      </span>
    ),
    mainWindowPath: "/",
    canCollapseToHome: false,
  };
  useHotkeyWindowDetailLayout(detailLayout);

  const footer = (
    <NewThreadComposerFooter
      showWorkspaceDropdownInFooter={false}
      onLocalConversationCreated={openConversationInHotkeyWindow}
    />
  );
  const logo = (
    <div aria-hidden="true">
      <CodexKnotLogoIcon className="h-12 w-12 text-token-foreground/20" />
    </div>
  );

  return (
    <ThreadLayout className="h-full [--padding-panel:calc(var(--padding-panel-base)/2)]">
      <ThreadScrollLayout footer={footer}>
        <div className="flex h-full items-center justify-center px-panel">
          <div className="flex flex-col items-center gap-3 text-center">
            {logo}
            <div className="flex flex-col items-center gap-1">
              <div className="heading-xl mt-2 font-normal text-token-foreground select-none">
                <FormattedMessage
                  id="home.hero.letsBuild"
                  defaultMessage="Let’s build"
                  description="Label above the workspace name on the electron home page"
                />
              </div>
              <ComposerProjectSelector variant="hero" />
            </div>
          </div>
        </div>
      </ThreadScrollLayout>
    </ThreadLayout>
  );
}

function openConversationInHotkeyWindow(conversationId: string) {
  appHostServices.hotkeyWindowHotkeys?.open({
    path: buildHotkeyWindowConversationPath(conversationId),
  });
}

runOnce(() => {
  initCurrentSharedObjectRuntime();
  initIntlFormattingRuntime();
  initNewThreadComposerFooterRuntime();
  initHomeHeroHeadingChunk();
  initCodexKnotLogoIconChunk();
  initAppHostServicesRuntime();
  initThreadLayoutChunk();
  initThreadScrollLayoutChunk();
  initHotkeyWindowDetailLayoutChunk();
})();
