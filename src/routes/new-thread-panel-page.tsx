// Restored from ref/webview/assets/new-thread-panel-page-DkFQ6OWQ.js
// Semantic NewThreadPanelPage redirect wrapper with restored dependency imports.

import type { ReactElement } from "react";
import { once as runOnce } from "../runtime/commonjs-interop";
import { worktreeNewThreadQueryCompatSlotLowerHLowerH as initClassNameRuntime } from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  currentAppInitialSharedMember0084 as Navigate,
  intlFormatDateTimeRuntime as initIntlFormattingRuntime,
  currentAppInitialSharedFunction0375 as useIntl,
  openAiNativeAppDefinition as initOpenAiNativeAppDefinition,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import { appgenLibraryHotDjo67r4nCompatSlotLowerN as initNewThreadComposerFooterRuntime } from "../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";
import { initThreadLayoutChunk } from "../runtime/current-app-initial/conversation-dialog-layer-runtime";
import { initNewThreadNuxGateChunk } from "../runtime/current-app-initial/new-thread-debug-context-runtime";
import { initHomeAnnouncementsChunk } from "../app-shell/home-announcements/index";

function NewThreadPanelPage(): ReactElement {
  useIntl();
  return <Navigate to="/" replace />;
}

runOnce(() => {
  initClassNameRuntime();
  initIntlFormattingRuntime();
  initOpenAiNativeAppDefinition();
  initNewThreadComposerFooterRuntime();
  initHomeAnnouncementsChunk();
  initNewThreadNuxGateChunk();
  initThreadLayoutChunk();
})();
export { NewThreadPanelPage };
