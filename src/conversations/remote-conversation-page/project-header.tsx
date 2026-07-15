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

function remoteConversationPageUnit21(remoteConversationPageOperand11) {
  let {
      conversationId
    } = remoteConversationPageOperand11,
    remoteConversationPageBinding268 = currentAppInitialSharedFunction0375(),
    {
      isPinned,
      togglePin
    } = appMainCurrentCompatSlotLowerZLowerA(conversationId),
    remoteConversationPageBinding269 = currentAppInitialSharedCompatSlotUpperGLowerO(worktreeNewThreadOrchestratorCompatSlotDollarLowerA, "toggleThreadPin"),
    remoteConversationPageBinding270 = currentAppInitialSharedCompatSlotUpperGLowerO(worktreeNewThreadOrchestratorCompatSlotDollarLowerA, "copySessionId"),
    remoteConversationPageBinding271 = isPinned ? projectsIndexCurrentCompatSlotUpperK : projectsIndexCurrentCompatSlotUpperG,
    remoteConversationPageBinding272 = isPinned ? projectsIndexCurrentCompatSlotUpperK : appMainCurrentCompatSlotUpperGLowerN,
    remoteConversationPageBinding273 = remoteConversationPageBinding268.formatMessage(appMainCurrentCompatSlotUpperRLowerA.moreActions);
  let remoteConversationPageBinding274 = remoteConversationPageBinding273,
    remoteConversationPageBinding275;
  remoteConversationPageBinding275 = [togglePin];
  currentAppInitialSharedCompatSlotLowerY("toggle-thread-pin", togglePin, remoteConversationPageBinding275);
  let remoteConversationPageBinding276, remoteConversationPageBinding277;
  remoteConversationPageBinding276 = () => {
    conversationId && appMainCurrentCompatSlotUpperILowerA(conversationId);
  };
  remoteConversationPageBinding277 = [conversationId];
  currentAppInitialSharedCompatSlotLowerY("copy-session-id", remoteConversationPageBinding276, remoteConversationPageBinding277);
  let remoteConversationPageBinding278, remoteConversationPageBinding279;
  if (remoteConversationPageBinding278 = () => {
    conversationId && appMainCurrentCompatSlotUpperFLowerA(conversationId);
  }, remoteConversationPageBinding279 = [conversationId], currentAppInitialSharedCompatSlotLowerY("copy-deeplink", remoteConversationPageBinding278, remoteConversationPageBinding279), !conversationId) return null;
  let remoteConversationPageBinding280 = React.createElement(worktreeNewThreadOrchestratorCompatSlotLowerDLowerC, {
    className: "icon-sm"
  });
  let remoteConversationPageBinding281 = React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
    size: "icon",
    color: "ghost",
    className: "no-drag",
    "aria-label": remoteConversationPageBinding274
  }, remoteConversationPageBinding280);
  let remoteConversationPageBinding282 = React.createElement(currentAppInitialSharedMember0924, {
    ...remoteConversationPageBinding271
  });
  let remoteConversationPageBinding283 = React.createElement(worktreeNewThreadQueryCompatSlotLowerNLowerO.Item, {
    onSelect: togglePin,
    LeftIcon: remoteConversationPageBinding272,
    keyboardShortcut: remoteConversationPageBinding269
  }, remoteConversationPageBinding282);
  let remoteConversationPageBinding284 = React.createElement(worktreeNewThreadQueryCompatSlotLowerNLowerO.Item, {
    disabled: true,
    LeftIcon: EditPencilIcon
  }, React.createElement(currentAppInitialSharedMember0924, {
    ...appMainCurrentCompatSlotUpperRLowerA.renameThread
  }));
  let remoteConversationPageBinding285, remoteConversationPageBinding286;
  remoteConversationPageBinding285 = React.createElement(worktreeNewThreadQueryCompatSlotLowerNLowerO.Item, {
    disabled: true,
    LeftIcon: projectsIndexCurrentCompatSlotDollar
  }, React.createElement(currentAppInitialSharedMember0924, {
    ...appMainCurrentCompatSlotUpperRLowerA.archiveThread
  }));
  remoteConversationPageBinding286 = React.createElement(worktreeNewThreadQueryCompatSlotLowerNLowerO.Separator, null);
  let remoteConversationPageBinding287 = () => appMainCurrentCompatSlotUpperILowerA(conversationId);
  let remoteConversationPageBinding288 = React.createElement(currentAppInitialSharedMember0924, {
    ...appMainCurrentCompatSlotUpperRLowerA.copySessionId
  });
  let remoteConversationPageBinding289 = React.createElement(worktreeNewThreadQueryCompatSlotLowerNLowerO.Item, {
    onSelect: remoteConversationPageBinding287,
    LeftIcon: worktreeNewThreadOrchestratorCompatSlotUpperGLowerR,
    keyboardShortcut: remoteConversationPageBinding270
  }, remoteConversationPageBinding288);
  return React.createElement(worktreeNewThreadQueryCompatSlotLowerELowerO, {
    triggerButton: remoteConversationPageBinding281,
    align: "start",
    contentWidth: "menu"
  }, remoteConversationPageBinding283, remoteConversationPageBinding284, remoteConversationPageBinding285, remoteConversationPageBinding286, remoteConversationPageBinding289);
}
var remoteConversationPageBinding26,
  remoteConversationPageBinding27,
  remoteConversationPageBinding28 = once(() => {
    remoteConversationPageBinding26 = currentAppInitialSharedCompatSlotLowerGLowerC();
    currentAppInitialSharedCompatSlotUpperVLowerO();
    intlFormatDateTimeRuntime();
    worktreeNewThreadOrchestratorCompatSlotLowerRLowerO();
    worktreeNewThreadQueryCompatSlotUpperELowerM();
    worktreeNewThreadQueryCompatSlotLowerOLowerO();
    projectsIndexCurrentCompatSlotLowerELowerT();
    worktreeNewThreadOrchestratorCompatSlotUpperKLowerR();
    initEditPencilIconChunk();
    projectsIndexCurrentCompatSlotUpperA();
    appMainCurrentCompatSlotUpperKLowerN();
    worktreeNewThreadOrchestratorCompatSlotLowerFLowerC();
    appMainCurrentCompatSlotUpperLLowerA();
    currentAppInitialSharedCompatSlotUnderscore();
    projectsIndexCurrentCompatSlotUpperW();
    remoteConversationPageBinding27 = currentAppInitialSharedCompatSlotLowerLLowerC();
  });
function remoteConversationPageUnit22(remoteConversationPageOperand38, remoteConversationPageOperand39, remoteConversationPageOperand40) {
  let remoteConversationPageBinding478 = remoteConversationPageOperand38?.current_diff_task_turn,
    remoteConversationPageBinding479 = remoteConversationPageOperand38?.current_assistant_turn,
    remoteConversationPageBinding480 = remoteConversationPageOperand39?.output_items?.find(remoteConversationPageOperand116 => remoteConversationPageOperand116.type === "pr"),
    remoteConversationPageBinding481 = remoteConversationPageBinding478?.output_items?.find(remoteConversationPageOperand117 => remoteConversationPageOperand117.type === "pr"),
    remoteConversationPageBinding482 = remoteConversationPageOperand39 == null || remoteConversationPageBinding478 != null && remoteConversationPageUnit23(remoteConversationPageOperand40, remoteConversationPageOperand39, remoteConversationPageBinding478) ? remoteConversationPageBinding481 : undefined;
  return remoteConversationPageOperand39 && remoteConversationPageOperand39.id !== remoteConversationPageBinding479?.id ? (remoteConversationPageBinding480 ?? remoteConversationPageBinding482)?.output_diff?.diff ?? null : (remoteConversationPageBinding480 ?? remoteConversationPageBinding482 ?? remoteConversationPageBinding479?.output_items?.find(remoteConversationPageOperand118 => remoteConversationPageOperand118.type === "pr"))?.output_diff?.diff ?? null;
}
function remoteConversationPageUnit23(remoteConversationPageOperand71, remoteConversationPageOperand72, remoteConversationPageOperand73) {
  let remoteConversationPageBinding511 = new Map();
  for (let remoteConversationPageBinding522 of remoteConversationPageOperand71) remoteConversationPageBinding511.set(remoteConversationPageBinding522.id, remoteConversationPageBinding522);
  return remoteConversationPageBinding511.set(remoteConversationPageOperand72.id, remoteConversationPageOperand72), remoteConversationPageBinding511.set(remoteConversationPageOperand73.id, remoteConversationPageOperand73), worktreeNewThreadQueryCompatSlotLowerDLowerD(remoteConversationPageBinding511, remoteConversationPageOperand72.id, remoteConversationPageOperand73.id);
}
var remoteConversationPageBinding29 = once(() => {
  worktreeNewThreadQueryCompatSlotLowerHLowerD();
});

export class RemoteConversationProjectHeaderModule {
  static remoteConversationPageUnit21 = remoteConversationPageUnit21;
  static get remoteConversationPageBinding26() {
    return remoteConversationPageBinding26;
  }
  static get remoteConversationPageBinding27() {
    return remoteConversationPageBinding27;
  }
  static get remoteConversationPageBinding28() {
    return remoteConversationPageBinding28;
  }
  static remoteConversationPageUnit22 = remoteConversationPageUnit22;
  static remoteConversationPageUnit23 = remoteConversationPageUnit23;
  static get remoteConversationPageBinding29() {
    return remoteConversationPageBinding29;
  }
}
