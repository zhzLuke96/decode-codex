// Restored from ref/webview/assets/remote-conversation-page-CSJXivxd.js
// Remote conversation page restored from the current Codex webview chunk.

import React from "react";
import { once, toEsModule } from "../../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotUpperBLowerO,
  currentAppInitialSharedCompatSlotUnderscoreLowerC,
  currentAppInitialSharedCompatSlotLowerCLowerC,
  currentAppInitialSharedCompatSlotUpperD,
  currentAppInitialSharedCompatSlotUpperE,
  currentAppInitialSharedCompatSlotUpperELowerO,
  currentAppInitialSharedCompatSlotLowerF,
  currentAppInitialSharedCompatSlotLowerGLowerC,
  currentAppInitialSharedCompatSlotUpperGLowerO,
  currentAppInitialSharedCompatSlotLowerJLowerO,
  currentAppInitialSharedCompatSlotUpperKLowerO,
  currentAppInitialSharedCompatSlotLowerLLowerC,
  currentAppInitialSharedCompatSlotUpperNLowerI,
  currentAppInitialSharedCompatSlotUpperO,
  currentAppInitialSharedCompatSlotLowerP,
  currentAppInitialSharedCompatSlotLowerQLowerA,
  currentAppInitialSharedCompatSlotLowerQLowerO,
  currentAppInitialSharedCompatSlotDollarLowerS,
  currentAppInitialSharedCompatSlotUpperSLowerO,
  currentAppInitialSharedCompatSlotLowerTLowerA,
  currentAppInitialSharedCompatSlotLowerTLowerT,
  currentAppInitialSharedCompatSlotLowerU,
  currentAppInitialSharedCompatSlotUnderscore,
  currentAppInitialSharedCompatSlotUpperVLowerO,
  currentAppInitialSharedCompatSlotUpperXLowerT,
  currentAppInitialSharedCompatSlotLowerY,
} from "../../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadOrchestratorCompatSlotDollarLowerA,
  worktreeNewThreadOrchestratorCompatSlotUpperCLowerF,
  worktreeNewThreadOrchestratorCompatSlotLowerDLowerC,
  worktreeNewThreadOrchestratorCompatSlotUpperE,
  worktreeNewThreadOrchestratorCompatSlotLowerFLowerC,
  worktreeNewThreadOrchestratorCompatSlotUpperGLowerL,
  worktreeNewThreadOrchestratorCompatSlotUpperGLowerR,
  worktreeNewThreadOrchestratorCompatSlotLowerHLowerM,
  worktreeNewThreadOrchestratorCompatSlotUpperI,
  worktreeNewThreadOrchestratorCompatSlotLowerJLowerL,
  worktreeNewThreadOrchestratorCompatSlotUpperKLowerR,
  worktreeNewThreadOrchestratorCompatSlotUpperL,
  worktreeNewThreadOrchestratorCompatSlotLowerMLowerM,
  worktreeNewThreadOrchestratorCompatSlotUpperO,
  worktreeNewThreadOrchestratorCompatSlotLowerOLowerT,
  worktreeNewThreadOrchestratorCompatSlotUpperQLowerP,
  worktreeNewThreadOrchestratorCompatSlotUpperQLowerT,
  worktreeNewThreadOrchestratorCompatSlotLowerRLowerM,
  worktreeNewThreadOrchestratorCompatSlotLowerRLowerO,
  worktreeNewThreadOrchestratorCompatSlotUpperSLowerF,
  worktreeNewThreadOrchestratorCompatSlotLowerSLowerT,
  worktreeNewThreadOrchestratorCompatSlotUpperULowerL,
  worktreeNewThreadOrchestratorCompatSlotLowerWLowerL,
  worktreeNewThreadOrchestratorCompatSlotUpperZLowerT,
} from "../../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  worktreeNewThreadQueryCompatSlotUnderscoreLowerA,
  worktreeNewThreadQueryCompatSlotLowerALowerD,
  worktreeNewThreadQueryCompatSlotLowerALowerF,
  worktreeNewThreadQueryCompatSlotLowerALowerS,
  worktreeNewThreadQueryCompatSlotLowerBLowerA,
  worktreeNewThreadQueryCompatSlotLowerBLowerD,
  worktreeNewThreadQueryCompatSlotUpperCLowerA,
  worktreeNewThreadQueryCompatSlotLowerCLowerD,
  worktreeNewThreadQueryCompatSlotDollarLowerD,
  worktreeNewThreadQueryCompatSlotLowerDLowerD,
  worktreeNewThreadQueryCompatSlotUpperDLowerM,
  worktreeNewThreadQueryCompatSlotUpperDLowerN,
  worktreeNewThreadQueryCompatSlotUpperDLowerO,
  worktreeNewThreadQueryCompatSlotUpperELowerM,
  worktreeNewThreadQueryCompatSlotLowerELowerO,
  worktreeNewThreadQueryCompatSlotLowerFLowerD,
  worktreeNewThreadQueryCompatSlotLowerFLowerF,
  worktreeNewThreadQueryCompatSlotLowerGLowerD,
  worktreeNewThreadQueryCompatSlotLowerGLowerP,
  worktreeNewThreadQueryCompatSlotLowerHLowerD,
  worktreeNewThreadQueryCompatSlotLowerHLowerF,
  worktreeNewThreadQueryCompatSlotLowerHLowerH,
  worktreeNewThreadQueryCompatSlotUpperHLowerT,
  worktreeNewThreadQueryCompatSlotLowerILowerC,
  worktreeNewThreadQueryCompatSlotLowerILowerD,
  worktreeNewThreadQueryCompatSlotUpperILowerS,
  worktreeNewThreadQueryCompatSlotUpperJLowerD,
  worktreeNewThreadQueryCompatSlotLowerKLowerP,
  worktreeNewThreadQueryCompatSlotLowerLLowerD,
  worktreeNewThreadQueryCompatSlotUpperLLowerS,
  worktreeNewThreadQueryCompatSlotLowerMLowerD,
  worktreeNewThreadQueryCompatSlotLowerMLowerH,
  worktreeNewThreadQueryCompatSlotLowerMLowerP,
  worktreeNewThreadQueryCompatSlotUpperNLowerN,
  worktreeNewThreadQueryCompatSlotLowerNLowerO,
  worktreeNewThreadQueryCompatSlotLowerNLowerS,
  worktreeNewThreadQueryCompatSlotLowerOLowerD,
  worktreeNewThreadQueryCompatSlotUpperOLowerM,
  worktreeNewThreadQueryCompatSlotUpperOLowerN,
  worktreeNewThreadQueryCompatSlotLowerOLowerO,
  worktreeNewThreadQueryCompatSlotUpperOLowerP,
  worktreeNewThreadQueryCompatSlotLowerPLowerD,
  worktreeNewThreadQueryCompatSlotLowerPLowerF,
  worktreeNewThreadQueryCompatSlotUpperPLowerN,
  worktreeNewThreadQueryCompatSlotUpperQLowerS,
  worktreeNewThreadQueryCompatSlotLowerRLowerD,
  worktreeNewThreadQueryCompatSlotLowerRLowerS,
  worktreeNewThreadQueryCompatSlotDollarLowerS,
  worktreeNewThreadQueryCompatSlotLowerSLowerC,
  worktreeNewThreadQueryCompatSlotLowerSLowerD,
  worktreeNewThreadQueryCompatSlotLowerSLowerP,
  worktreeNewThreadQueryCompatSlotUpperTLowerM,
  worktreeNewThreadQueryCompatSlotLowerULowerD,
  worktreeNewThreadQueryCompatSlotUpperULowerM,
  worktreeNewThreadQueryCompatSlotLowerULowerS,
  worktreeNewThreadQueryCompatSlotLowerVLowerA,
  worktreeNewThreadQueryCompatSlotUpperVLowerT,
  worktreeNewThreadQueryCompatSlotLowerWLowerO,
  worktreeNewThreadQueryCompatSlotLowerXLowerD,
  worktreeNewThreadQueryCompatSlotLowerXLowerP,
  worktreeNewThreadQueryCompatSlotLowerYLowerA,
  worktreeNewThreadQueryCompatSlotLowerYLowerP,
  worktreeNewThreadQueryCompatSlotLowerZLowerM,
} from "../../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  automationCronHeartbeatCreateMessages,
  currentAppInitialSharedMember0051,
  currentAppInitialSharedMember0084,
  currentAppInitialSharedRuntime0541,
  currentAppInitialSharedMember0542,
  normalizeDiffLineRange,
  reactRouterRouteScopeParentRuntime,
  mergeDiffLineRanges,
  intlFormatDateTimeRuntime,
  createWhamApiRequestClient,
  currentAppInitialSharedRandomBytesLengthFunction,
  currentAppInitialSharedMember0194,
  appServerDisconnectedAppServerSignal,
  currentAppInitialSharedMember0011,
  getCodexDesktopOriginator,
  currentAppInitialSharedDisplayRuntime,
  reactRouterMember0297,
  modelContextProtocolRelatedTaskSchema,
  currentAppInitialSharedSrcFunction,
  buildUserPromptSubmitMessage,
  currentAppInitialSharedFunction0375,
  currentAppInitialSharedMember0386,
  openAiNativeAppDefinition,
  helperImmerNothingDraftableSchema,
  gitUpstreamBranchBaseRuntime,
  currentAppInitialSharedMember0924,
} from "../../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  ThreadAppShellSourceRegistration,
  useNullAppShellRef,
  initThreadAppShellSourcesChunk,
  initThreadNullRefChunk,
} from "../../vendor/automations-page-current-runtime";
import {
  pullRequestNewThreadCompatSlotUpperSLowerN,
  pullRequestNewThreadCompatSlotLowerXLowerN,
} from "../../runtime/current-app-initial/pull-request-new-thread-runtime";
import {
  toggleThreadSidePanel,
  appMainCurrentCompatSlotUpperCLowerS,
  appMainCurrentCompatSlotLowerDLowerP,
  appMainCurrentCompatSlotUpperELowerI,
  appMainCurrentCompatSlotUpperELowerL,
  appMainCurrentCompatSlotUpperFLowerA,
  appMainCurrentCompatSlotUpperFLowerC,
  appMainCurrentCompatSlotLowerFLowerU,
  appMainCurrentCompatSlotUpperGLowerC,
  openThreadBrowserSidePanelTab,
  appMainCurrentCompatSlotUpperGLowerN,
  appMainCurrentCompatSlotUpperILowerA,
  appMainCurrentCompatSlotUpperKLowerN,
  appMainCurrentCompatSlotUpperKLowerT as RemoteConversationShell,
  openThreadBrowserSidePanelTabWithPendingState,
  appMainCurrentCompatSlotUpperLLowerA,
  appMainCurrentCompatSlotLowerLLowerP,
  appMainCurrentCompatSlotLowerNLowerI,
  appMainCurrentCompatSlotLowerOLowerN,
  appMainCurrentCompatSlotLowerOLowerP,
  appMainCurrentCompatSlotLowerPLowerU,
  appMainCurrentCompatSlotLowerQLowerT,
  appMainCurrentCompatSlotUpperR,
  appMainCurrentCompatSlotUpperRLowerA,
  appMainCurrentCompatSlotLowerRLowerI,
  appMainCurrentCompatSlotUpperRLowerT,
  appMainCurrentCompatSlotLowerSLowerN,
  appMainCurrentCompatSlotUpperTLowerI,
  appMainCurrentCompatSlotLowerWLowerL as RemoteConversationThreadView,
  browserTabIdForConversation,
  appMainCurrentCompatSlotUpperXLowerT,
  appMainCurrentCompatSlotLowerZ,
  appMainCurrentCompatSlotLowerZLowerA,
  appMainCurrentCompatSlotUpperZLowerT,
} from "../../vendor/app-main-current-runtime";
import {
  appgenLibraryHotDjo67r4nCompatSlotDollar,
  appgenLibraryHotDjo67r4nCompatSlotLowerELowerT,
  appgenLibraryHotDjo67r4nCompatSlotLowerN,
  appgenLibraryHotDjo67r4nCompatSlotUpperQ,
  appgenLibraryHotDjo67r4nCompatSlotLowerT,
  appgenLibraryHotDjo67r4nCompatSlotUpperZ,
} from "../../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";
import {
  projectsIndexCurrentCompatSlotUpperA,
  projectsIndexCurrentCompatSlotUpperB,
  projectsIndexCurrentCompatSlotDollar,
  projectsIndexCurrentCompatSlotLowerELowerT,
  projectsIndexCurrentCompatSlotUpperG,
  projectsIndexCurrentCompatSlotUpperK,
  projectsIndexCurrentCompatSlotUpperV,
  projectsIndexCurrentCompatSlotUpperW,
  projectsIndexCurrentCompatSlotLowerZ,
} from "../../runtime/current-app-initial/projects-index-current-runtime";
import {
  initInfoCircleIconChunk,
  InfoCircleIcon,
} from "../../runtime/renderer-error-boundary-runtime";
import {
  initCloudTerminalIconChunk,
  CloudTerminalIcon,
} from "../../icons/cloud-terminal-icon";
import {
  initAppLoadingScreenChunk,
  AppLoadingScreen,
} from "../../runtime/current-app-initial/plugin-logo-card-runtime";
import {
  initEditPencilIconChunk,
  EditPencilIcon,
} from "../../icons/edit-pencil-icon";
import {
  ThreadFindBar,
  useRegisterToggleDiffPanelCommand,
  initLocalConversationDiffSummaryEffectsChunk,
  initThreadFindBarChunk,
  initThreadPanelCommandHooksChunk,
  LocalConversationDiffSummaryView,
} from "../../runtime/current-app-initial/remote-local-conversation-runtime";
import {
  initThreadLayoutChunk,
  ThreadLayout,
  initRightPanelComposerOverlayChunk,
  RightPanelComposerOverlay,
} from "../../runtime/current-app-initial/conversation-dialog-layer-runtime";
import {
  initAppgenProjectHeaderChunk,
  AppgenProjectHeader,
} from "../../appgen/project-header";
import {
  initChromeExtensionHeaderChunk,
  ChromeExtensionHeader,
} from "../../browser/chrome-extension-header";
import {
  initHotkeyWindowDetailLayoutChunk,
  useHotkeyWindowDetailLayout,
} from "../../utils/use-hotkey-window-detail-layout";
import {
  initThreadScrollLayoutChunk,
  ThreadScrollLayout,
} from "../../threads/thread-scroll-layout";
import {
  createLocalConversationSearchAdapter,
  ThreadFindNavigationRail,
  initThreadFindNavigationRail,
  initReviewSearchHighlighter,
  initConversationSearchHelpers,
  useReviewSearchHighlights,
} from "../../conversations/local-conversation-thread";
import {
  initThreadAppShellChromeChunk,
  ThreadAppShellChrome,
} from "../../app-shell/thread-app-shell-chrome";
import { RemoteConversationDataModule } from "./data";
import { RemoteConversationProjectHeaderModule } from "./project-header";
import { RemoteConversationThreadViewModule } from "./thread-view";

function remoteConversationPageUnit68() {
  let remoteConversationPageBinding364 = currentAppInitialSharedCompatSlotUpperKLowerO(reactRouterMember0297),
    remoteConversationPageBinding365 = currentAppInitialSharedCompatSlotLowerQLowerO(currentAppInitialSharedMember0051),
    remoteConversationPageBinding366 = currentAppInitialSharedCompatSlotLowerQLowerO(worktreeNewThreadQueryCompatSlotLowerLLowerD),
    remoteConversationPageBinding367 = currentAppInitialSharedCompatSlotLowerQLowerO(worktreeNewThreadQueryCompatSlotLowerSLowerD),
    remoteConversationPageBinding368 = currentAppInitialSharedCompatSlotLowerQLowerO(worktreeNewThreadQueryCompatSlotLowerCLowerD),
    remoteConversationPageBinding369 = appMainCurrentCompatSlotLowerDLowerP(),
    remoteConversationPageBinding370 = RemoteConversationProjectHeaderModule.remoteConversationPageUnit22(remoteConversationPageBinding366.data, remoteConversationPageBinding368, remoteConversationPageBinding367);
  let remoteConversationPageBinding371 = remoteConversationPageBinding370,
    remoteConversationPageBinding372 = remoteConversationPageBinding368?.turn_status,
    remoteConversationPageBinding373 = remoteConversationPageBinding369 !== appMainCurrentCompatSlotLowerOLowerP,
    remoteConversationPageBinding374 = currentAppInitialSharedCompatSlotLowerQLowerO(worktreeNewThreadOrchestratorCompatSlotUpperQLowerP),
    remoteConversationPageBinding375 = currentAppInitialSharedCompatSlotLowerQLowerO(worktreeNewThreadOrchestratorCompatSlotLowerHLowerM),
    remoteConversationPageBinding376 = remoteConversationPageBinding373 && remoteConversationPageBinding371 != null,
    [remoteConversationPageBinding377, remoteConversationPageBinding378] = remoteConversationPageBinding47.useState(null),
    remoteConversationPageBinding379 = remoteConversationPageBinding374 && remoteConversationPageBinding375,
    remoteConversationPageBinding380 = !remoteConversationPageBinding379,
    remoteConversationPageBinding381 = remoteConversationPageBinding379 && remoteConversationPageBinding366.data != null && remoteConversationPageBinding372 != null,
    remoteConversationPageBinding382;
  remoteConversationPageBinding382 = () => appMainCurrentCompatSlotUpperGLowerC(remoteConversationPageBinding364);
  useRegisterToggleDiffPanelCommand(remoteConversationPageBinding382);
  let remoteConversationPageBinding383 = React.createElement(LocalConversationDiffSummaryView, {
    lastTurnCwd: null,
    lastTurnDiff: remoteConversationPageBinding371
  });
  let remoteConversationPageBinding384 = React.createElement(worktreeNewThreadOrchestratorCompatSlotLowerOLowerT.MainContentLayout, {
    layout: "thread-edge-scroll"
  });
  let remoteConversationPageBinding385 = React.createElement(worktreeNewThreadOrchestratorCompatSlotLowerOLowerT.Header, null, React.createElement(RemoteConversationDataModule.remoteConversationPageUnit24, null));
  let remoteConversationPageBinding386 = <div className="h-full min-h-0">
      {React.createElement(RemoteConversationThreadViewModule.remoteConversationPageUnit47, {
      hostId: remoteConversationPageBinding365,
      showComposer: remoteConversationPageBinding380
    })}
    </div>;
  let remoteConversationPageBinding387 = React.createElement(ThreadAppShellChrome, {
    showReviewTab: remoteConversationPageBinding376,
    threadType: "remote"
  });
  let remoteConversationPageBinding388 = remoteConversationPageBinding381 ? React.createElement(remoteConversationPageUnit69, null) : null;
  let remoteConversationPageBinding389 = <div ref={remoteConversationPageBinding378} className="relative h-full min-h-0">
      {remoteConversationPageBinding383}
      {remoteConversationPageBinding384}
      {remoteConversationPageBinding385}
      {remoteConversationPageBinding386}
      {remoteConversationPageBinding387}
      {remoteConversationPageBinding388}
    </div>;
  return React.createElement(appgenLibraryHotDjo67r4nCompatSlotUpperZ, {
    value: remoteConversationPageBinding377
  }, remoteConversationPageBinding389);
}
function remoteConversationPageUnit69() {
  let remoteConversationPageBinding475 = currentAppInitialSharedCompatSlotLowerQLowerO(worktreeNewThreadQueryCompatSlotLowerCLowerD),
    remoteConversationPageBinding476 = remoteConversationPageBinding475?.turn_status === "pending" || remoteConversationPageBinding475?.turn_status === "in_progress";
  return React.createElement(RightPanelComposerOverlay, null, React.createElement(appgenLibraryHotDjo67r4nCompatSlotLowerT, {
    composerLayoutMode: "auto-single-line",
    isResponseInProgress: remoteConversationPageBinding476,
    showFooterBranchWhen: "always"
  }));
}
var remoteConversationPageBinding46,
  remoteConversationPageBinding47,
  remoteConversationPageBinding48,
  remoteConversationPageBinding49 = once(() => {
    remoteConversationPageBinding46 = currentAppInitialSharedCompatSlotLowerGLowerC();
    currentAppInitialSharedCompatSlotUpperVLowerO();
    remoteConversationPageBinding47 = toEsModule(currentAppInitialSharedCompatSlotUnderscoreLowerC(), 1);
    appServerDisconnectedAppServerSignal();
    worktreeNewThreadOrchestratorCompatSlotLowerSLowerT();
    worktreeNewThreadOrchestratorCompatSlotLowerMLowerM();
    worktreeNewThreadOrchestratorCompatSlotLowerRLowerM();
    appgenLibraryHotDjo67r4nCompatSlotLowerN();
    appgenLibraryHotDjo67r4nCompatSlotUpperQ();
    initLocalConversationDiffSummaryEffectsChunk();
    reactRouterRouteScopeParentRuntime();
    appMainCurrentCompatSlotLowerLLowerP();
    initThreadPanelCommandHooksChunk();
    initRightPanelComposerOverlayChunk();
    initThreadAppShellChromeChunk();
    appMainCurrentCompatSlotUpperFLowerC();
    RemoteConversationDataModule.remoteConversationPageBinding32();
    worktreeNewThreadQueryCompatSlotLowerALowerD();
    RemoteConversationThreadViewModule.remoteConversationPageBinding45();
    RemoteConversationProjectHeaderModule.remoteConversationPageBinding29();
    remoteConversationPageBinding48 = currentAppInitialSharedCompatSlotLowerLLowerC();
  });
type RemoteConversationPageProps = {
  variant?: "main" | "hotkey";
};
export function RemoteConversationPageIcon(remoteConversationPageOperand17: RemoteConversationPageProps) {
  let {
      variant = "main"
    } = remoteConversationPageOperand17,
    {
      taskId
    } = currentAppInitialSharedMember0194(),
    remoteConversationPageBinding348 = currentAppInitialSharedCompatSlotLowerQLowerO(currentAppInitialSharedMember0051),
    remoteConversationPageBinding349 = currentAppInitialSharedCompatSlotLowerQLowerO(worktreeNewThreadQueryCompatSlotLowerLLowerD).data,
    remoteConversationPageBinding350 = remoteConversationPageBinding349?.task.task_status_display?.environment_label,
    remoteConversationPageBinding351;
  if (remoteConversationPageBinding351 = variant !== "hotkey" || taskId == null ? null : {
    title: <div className="flex max-w-full min-w-0 items-baseline gap-2">
                <div className="min-w-0 shrink-[999] truncate text-token-foreground">
                  {remoteConversationPageBinding349?.task.title ?? React.createElement(currentAppInitialSharedMember0924, {
          id: "hotkeyWindow.defaultTitle",
          defaultMessage: "Codex",
          description: "Fallback title for hotkey window thread header"
        })}
                </div>
                {remoteConversationPageBinding350 == null ? null : <div className="flex shrink-0 items-center gap-1 whitespace-nowrap text-token-description-foreground">
                    <span className="truncate">
                      {remoteConversationPageBinding350}
                    </span>
                  </div>}
              </div>,
    mainWindowPath: currentAppInitialSharedCompatSlotUpperXLowerT(taskId)
  }, useHotkeyWindowDetailLayout(remoteConversationPageBinding351), !taskId) {
    let remoteConversationPageBinding506;
    return React.createElement(currentAppInitialSharedMember0084, {
      to: "/"
    });
  }
  let remoteConversationPageBinding352 = variant === "hotkey" ? React.createElement(RemoteConversationThreadViewModule.remoteConversationPageUnit47, {
    key: taskId,
    hostId: remoteConversationPageBinding348
  }) : React.createElement(remoteConversationPageUnit68, {
    key: taskId
  });
  let remoteConversationPageBinding353 = remoteConversationPageBinding352,
    remoteConversationPageBinding354 = React.createElement(ThreadFindBar.Surface, null);
  return <>
      {remoteConversationPageBinding354}
      {remoteConversationPageBinding353}
    </>;
}
var remoteConversationPageBinding50, remoteConversationPageJsxRuntime;
once(() => {
  remoteConversationPageBinding50 = currentAppInitialSharedCompatSlotLowerGLowerC();
  currentAppInitialSharedCompatSlotUpperVLowerO();
  currentAppInitialSharedCompatSlotUpperO();
  intlFormatDateTimeRuntime();
  openAiNativeAppDefinition();
  appServerDisconnectedAppServerSignal();
  initThreadFindBarChunk();
  initHotkeyWindowDetailLayoutChunk();
  remoteConversationPageBinding49();
  worktreeNewThreadQueryCompatSlotLowerALowerD();
  RemoteConversationThreadViewModule.remoteConversationPageBinding45();
  remoteConversationPageJsxRuntime = currentAppInitialSharedCompatSlotLowerLLowerC();
})();
export { RemoteConversationPageIcon as RemoteConversationPage };
