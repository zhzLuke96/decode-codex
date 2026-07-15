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
import { RemoteConversationProjectHeaderModule } from "./project-header";
import { RemoteConversationPullRequestModule } from "./pull-request";

function remoteConversationPageUnit24() {
  let remoteConversationPageBinding292 = currentAppInitialSharedCompatSlotLowerQLowerO(worktreeNewThreadQueryCompatSlotLowerLLowerD),
    remoteConversationPageBinding293 = currentAppInitialSharedCompatSlotLowerQLowerO(worktreeNewThreadQueryCompatSlotLowerSLowerD),
    remoteConversationPageBinding294 = currentAppInitialSharedCompatSlotLowerQLowerO(worktreeNewThreadQueryCompatSlotLowerCLowerD),
    remoteConversationPageBinding295 = remoteConversationPageBinding292.data,
    remoteConversationPageBinding296 = remoteConversationPageBinding295?.task.id,
    remoteConversationPageBinding297 = remoteConversationPageBinding296 == null ? null : `${currentAppInitialSharedCompatSlotUpperBLowerO}/tasks/${remoteConversationPageBinding296}`,
    remoteConversationPageBinding298 = remoteConversationPageBinding295?.current_diff_task_turn,
    remoteConversationPageBinding299 = remoteConversationPageBinding295?.current_assistant_turn,
    remoteConversationPageBinding300 = remoteConversationPageBinding295?.task.external_pull_requests ?? [];
  let remoteConversationPageBinding301 = remoteConversationPageBinding300,
    remoteConversationPageBinding302 = RemoteConversationProjectHeaderModule.remoteConversationPageUnit22(remoteConversationPageBinding295, remoteConversationPageBinding294, remoteConversationPageBinding293);
  let remoteConversationPageBinding303 = remoteConversationPageBinding302,
    remoteConversationPageBinding304 = remoteConversationPageBinding294?.id ?? remoteConversationPageBinding298?.id ?? null,
    remoteConversationPageBinding305 = remoteConversationPageBinding294?.environment ?? (remoteConversationPageBinding294?.id === remoteConversationPageBinding298?.id ? remoteConversationPageBinding298?.environment : undefined) ?? (remoteConversationPageBinding294 == null || remoteConversationPageBinding294.id === remoteConversationPageBinding299?.id ? remoteConversationPageBinding299?.environment : undefined),
    remoteConversationPageBinding306 = remoteConversationPageBinding295?.task.title ?? null,
    remoteConversationPageBinding307 = remoteConversationPageBinding296 ?? null,
    remoteConversationPageBinding308 = React.createElement(RemoteConversationProjectHeaderModule.remoteConversationPageUnit21, {
      conversationId: remoteConversationPageBinding307
    });
  let remoteConversationPageBinding309 = remoteConversationPageBinding303 && remoteConversationPageBinding304 ? React.createElement(RemoteConversationPullRequestModule.remoteConversationPageUnit14, {
    turnId: remoteConversationPageBinding304,
    diff: remoteConversationPageBinding303,
    taskEnvironment: remoteConversationPageBinding305
  }) : null;
  let remoteConversationPageBinding310 = React.createElement(worktreeNewThreadQueryCompatSlotLowerYLowerP, {
    tooltipContent: React.createElement(currentAppInitialSharedMember0924, {
      id: "codex.remoteConversation.viewPreviousTurns.buttonTooltip",
      defaultMessage: "Open in web",
      description: "Open task in Codex web button"
    })
  }, React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
    color: "outline",
    size: "toolbar",
    onClick: remoteConversationPageOperand82 => {
      remoteConversationPageBinding297 != null && worktreeNewThreadQueryCompatSlotUpperILowerS({
        event: remoteConversationPageOperand82,
        href: remoteConversationPageBinding297,
        initiator: "open_in_browser_bridge"
      });
    }
  }, React.createElement(worktreeNewThreadQueryCompatSlotUpperNLowerN, {
    className: "icon-2xs",
    ExternalIcon: worktreeNewThreadQueryCompatSlotUpperDLowerN,
    href: remoteConversationPageBinding297 ?? "https://chatgpt.com/codex"
  }), React.createElement(currentAppInitialSharedMember0924, {
    id: "codex.remoteConversation.viewPreviousTurns.buttonText",
    defaultMessage: "Open",
    description: "Open task in Codex web button text"
  })));
  let remoteConversationPageBinding311 = remoteConversationPageBinding296 ? React.createElement(RemoteConversationPullRequestModule.PullRequestActionButton, {
    taskId: remoteConversationPageBinding296,
    turns: remoteConversationPageBinding293,
    selectedTurn: remoteConversationPageBinding294,
    diffTaskTurn: remoteConversationPageBinding298 ?? null,
    pullRequests: remoteConversationPageBinding301
  }) : null;
  let remoteConversationPageBinding312 = <div className="flex items-center gap-2">
      {remoteConversationPageBinding309}
      {remoteConversationPageBinding310}
      {remoteConversationPageBinding311}
    </div>;
  return React.createElement(AppgenProjectHeader, {
    start: remoteConversationPageBinding306,
    startActions: remoteConversationPageBinding308,
    trailing: remoteConversationPageBinding312
  });
}
var remoteConversationPageBinding30,
  remoteConversationPageBinding31,
  remoteConversationPageBinding32 = once(() => {
    remoteConversationPageBinding30 = currentAppInitialSharedCompatSlotLowerGLowerC();
    currentAppInitialSharedCompatSlotUpperVLowerO();
    currentAppInitialSharedCompatSlotUpperO();
    intlFormatDateTimeRuntime();
    worktreeNewThreadQueryCompatSlotUpperELowerM();
    worktreeNewThreadQueryCompatSlotLowerNLowerS();
    worktreeNewThreadQueryCompatSlotUpperPLowerN();
    worktreeNewThreadQueryCompatSlotLowerXLowerP();
    worktreeNewThreadQueryCompatSlotUpperOLowerN();
    initAppgenProjectHeaderChunk();
    RemoteConversationPullRequestModule.remoteConversationPageBinding19();
    worktreeNewThreadQueryCompatSlotLowerALowerD();
    RemoteConversationPullRequestModule.remoteConversationPageBinding25();
    RemoteConversationProjectHeaderModule.remoteConversationPageBinding28();
    RemoteConversationProjectHeaderModule.remoteConversationPageBinding29();
    remoteConversationPageBinding31 = currentAppInitialSharedCompatSlotLowerLLowerC();
  });
function remoteConversationPageUnit25(remoteConversationPageOperand59) {
  let remoteConversationPageBinding501 = remoteConversationPageOperand59?.thread_events?.events;
  return Array.isArray(remoteConversationPageBinding501) ? remoteConversationPageBinding501.flatMap((item, index) => {
    let remoteConversationPageBinding516 = remoteConversationPageUnit34(item);
    return remoteConversationPageBinding516 == null ? [] : [{
      id: `stored:${index}`,
      notification: remoteConversationPageBinding516
    }];
  }) : [];
}
function remoteConversationPageUnit26(remoteConversationPageOperand56) {
  if (!remoteConversationPageUnit42(remoteConversationPageOperand56) || remoteConversationPageOperand56.item_type !== "thread_event") return null;
  let remoteConversationPageBinding497 = remoteConversationPageOperand56,
    remoteConversationPageBinding498 = remoteConversationPageUnit34(remoteConversationPageBinding497.event);
  return remoteConversationPageBinding498 == null ? null : {
    id: typeof remoteConversationPageBinding497.id == "string" ? remoteConversationPageBinding497.id : crypto.randomUUID(),
    notification: remoteConversationPageBinding498
  };
}
function remoteConversationPageUnit27({
  turnStatus,
  storedEvents,
  liveEvents,
  preserveLiveImageGenerationEvents = false
}) {
  let remoteConversationPageBinding442 = storedEvents.some(item => item.notification.method === "item/completed" && item.notification.params.item.type === "agentMessage");
  if (turnStatus !== "completed" || !remoteConversationPageBinding442) return [...storedEvents, ...liveEvents];
  if (!preserveLiveImageGenerationEvents) return storedEvents;
  let remoteConversationPageBinding443 = new Set(storedEvents.flatMap(item => item.notification.method === "item/completed" ? [remoteConversationPageUnit28(item.notification.params.item)] : [])),
    remoteConversationPageBinding444 = liveEvents.filter(item => item.notification.method === "item/completed" && item.notification.params.item.type === "imageGeneration" && !remoteConversationPageBinding443.has(remoteConversationPageUnit28(item.notification.params.item)));
  return [...storedEvents, ...remoteConversationPageBinding444];
}
function remoteConversationPageUnit28(remoteConversationPageOperand107) {
  return `${remoteConversationPageOperand107.type}:${remoteConversationPageOperand107.id}`;
}
function remoteConversationPageUnit29({
  taskId,
  userTurn,
  assistantTurn,
  threadEvents,
  fallbackDiff,
  includeUserMessage
}) {
  let remoteConversationPageBinding405 = currentAppInitialSharedCompatSlotLowerQLowerA([]),
    remoteConversationPageBinding406 = {
      params: {
        threadId: assistantTurn.conversation_id ?? taskId,
        input: includeUserMessage ? remoteConversationPageUnit33(userTurn.input_items) : [],
        cwd: null,
        approvalPolicy: remoteConversationPageBinding405.approvalPolicy,
        sandboxPolicy: remoteConversationPageBinding405.sandboxPolicy,
        model: null,
        effort: null,
        summary: "none",
        personality: null,
        outputSchema: null,
        collaborationMode: null
      },
      turnId: assistantTurn.id,
      turnStartedAtMs: remoteConversationPageUnit41(assistantTurn.created_at),
      firstTurnWorkItemStartedAtMs: null,
      finalAssistantStartedAtMs: null,
      status: remoteConversationPageUnit32(assistantTurn),
      error: null,
      diff: fallbackDiff,
      items: []
    },
    remoteConversationPageBinding407 = threadEvents.reduce(remoteConversationPageUnit30, remoteConversationPageBinding406),
    remoteConversationPageBinding408 = remoteConversationPageUnit31(assistantTurn, remoteConversationPageBinding407.status),
    remoteConversationPageBinding409 = remoteConversationPageBinding408 === remoteConversationPageBinding407.status ? remoteConversationPageBinding407 : {
      ...remoteConversationPageBinding407,
      status: remoteConversationPageBinding408
    };
  if (remoteConversationPageBinding409.items.some(item => item.type === "agentMessage")) return remoteConversationPageBinding409;
  let remoteConversationPageBinding410 = remoteConversationPageUnit40(assistantTurn.output_items?.filter(remoteConversationPageOperand113 => remoteConversationPageOperand113.type === "message") ?? []);
  return remoteConversationPageBinding410.trim().length === 0 ? remoteConversationPageBinding409 : modelContextProtocolRelatedTaskSchema(remoteConversationPageBinding409, remoteConversationPageOperand63 => {
    remoteConversationPageOperand63.items.push({
      id: `cloud-assistant-message:${assistantTurn.id}`,
      type: "agentMessage",
      text: remoteConversationPageBinding410,
      phase: null,
      memoryCitation: null
    });
  });
}
function remoteConversationPageUnit30(remoteConversationPageOperand12, remoteConversationPageOperand13) {
  return modelContextProtocolRelatedTaskSchema(remoteConversationPageOperand12, remoteConversationPageOperand14 => {
    switch (remoteConversationPageOperand13.method) {
      case "turn/started":
        remoteConversationPageOperand14.turnId = remoteConversationPageOperand13.params.turn.id;
        remoteConversationPageOperand14.status = remoteConversationPageOperand13.params.turn.status;
        remoteConversationPageOperand14.error = remoteConversationPageOperand13.params.turn.error;
        remoteConversationPageOperand14.turnStartedAtMs = remoteConversationPageOperand14.turnStartedAtMs ?? Date.now();
        break;
      case "turn/completed":
        remoteConversationPageOperand14.turnId = remoteConversationPageOperand13.params.turn.id;
        remoteConversationPageOperand14.status = remoteConversationPageOperand13.params.turn.status;
        remoteConversationPageOperand14.error = remoteConversationPageOperand13.params.turn.error;
        break;
      case "turn/diff/updated":
        remoteConversationPageOperand14.diff = remoteConversationPageOperand13.params.diff;
        break;
      case "turn/plan/updated":
        remoteConversationPageOperand14.items.push({
          id: currentAppInitialSharedRandomBytesLengthFunction(),
          type: "todo-list",
          explanation: remoteConversationPageOperand13.params.explanation ?? null,
          plan: remoteConversationPageOperand13.params.plan
        });
        break;
      case "item/started":
        {
          let remoteConversationPageBinding490 = remoteConversationPageUnit36(remoteConversationPageOperand13.params.item);
          if (remoteConversationPageBinding490.type === "userMessage") break;
          remoteConversationPageBinding490.type === "agentMessage" && (remoteConversationPageOperand14.finalAssistantStartedAtMs = remoteConversationPageOperand14.finalAssistantStartedAtMs ?? Date.now());
          remoteConversationPageUnit37(remoteConversationPageOperand14.items, remoteConversationPageBinding490);
          break;
        }
      case "item/completed":
        {
          let remoteConversationPageBinding514 = remoteConversationPageUnit36(remoteConversationPageOperand13.params.item);
          if (remoteConversationPageBinding514.type === "userMessage") break;
          remoteConversationPageUnit37(remoteConversationPageOperand14.items, remoteConversationPageBinding514);
          break;
        }
      case "item/agentMessage/delta":
        {
          let remoteConversationPageBinding512 = remoteConversationPageUnit38(remoteConversationPageOperand14.items, remoteConversationPageOperand13.params.itemId, "agentMessage");
          remoteConversationPageBinding512 && (remoteConversationPageBinding512.text = `${remoteConversationPageBinding512.text}${remoteConversationPageOperand13.params.delta}`);
          break;
        }
      case "item/plan/delta":
        {
          let remoteConversationPageBinding513 = remoteConversationPageUnit38(remoteConversationPageOperand14.items, remoteConversationPageOperand13.params.itemId, "plan");
          remoteConversationPageBinding513 && (remoteConversationPageBinding513.text = `${remoteConversationPageBinding513.text}${remoteConversationPageOperand13.params.delta}`);
          break;
        }
      case "item/reasoning/summaryTextDelta":
        {
          let remoteConversationPageBinding493 = remoteConversationPageUnit38(remoteConversationPageOperand14.items, remoteConversationPageOperand13.params.itemId, "reasoning");
          if (!remoteConversationPageBinding493) break;
          let remoteConversationPageBinding494 = remoteConversationPageOperand13.params.summaryIndex;
          remoteConversationPageBinding493.summary = remoteConversationPageUnit39(remoteConversationPageBinding493.summary, remoteConversationPageBinding494, "");
          remoteConversationPageBinding493.summary[remoteConversationPageBinding494] = `${remoteConversationPageBinding493.summary[remoteConversationPageBinding494]}${remoteConversationPageOperand13.params.delta}`;
          break;
        }
      case "item/reasoning/textDelta":
        {
          let remoteConversationPageBinding495 = remoteConversationPageUnit38(remoteConversationPageOperand14.items, remoteConversationPageOperand13.params.itemId, "reasoning");
          if (!remoteConversationPageBinding495) break;
          let remoteConversationPageBinding496 = remoteConversationPageOperand13.params.contentIndex;
          remoteConversationPageBinding495.content = remoteConversationPageUnit39(remoteConversationPageBinding495.content, remoteConversationPageBinding496, "");
          remoteConversationPageBinding495.content[remoteConversationPageBinding496] = `${remoteConversationPageBinding495.content[remoteConversationPageBinding496]}${remoteConversationPageOperand13.params.delta}`;
          break;
        }
      case "item/commandExecution/outputDelta":
        {
          let remoteConversationPageBinding505 = remoteConversationPageUnit38(remoteConversationPageOperand14.items, remoteConversationPageOperand13.params.itemId, "commandExecution");
          remoteConversationPageBinding505 && (remoteConversationPageBinding505.aggregatedOutput = `${remoteConversationPageBinding505.aggregatedOutput ?? ""}${remoteConversationPageOperand13.params.delta}`);
          break;
        }
      case "error":
        remoteConversationPageOperand14.items.push({
          id: currentAppInitialSharedRandomBytesLengthFunction(),
          type: "error",
          message: remoteConversationPageOperand13.params.error.message,
          willRetry: remoteConversationPageOperand13.params.willRetry,
          errorInfo: remoteConversationPageOperand13.params.error.codexErrorInfo,
          additionalDetails: remoteConversationPageOperand13.params.error.additionalDetails ?? null
        });
        break;
    }
  });
}
function remoteConversationPageUnit31(remoteConversationPageOperand97, remoteConversationPageOperand98) {
  let remoteConversationPageBinding519 = remoteConversationPageUnit32(remoteConversationPageOperand97);
  return remoteConversationPageBinding519 === "inProgress" ? remoteConversationPageOperand98 : remoteConversationPageBinding519;
}
function remoteConversationPageUnit32(remoteConversationPageOperand42) {
  if (remoteConversationPageOperand42.cancellation_requested_at != null && (remoteConversationPageOperand42.turn_status === "pending" || remoteConversationPageOperand42.turn_status === "in_progress")) return "interrupted";
  switch (remoteConversationPageOperand42.turn_status) {
    case "completed":
      return "completed";
    case "failed":
      return "failed";
    case "cancelled":
      return "interrupted";
    case "in_progress":
    case "pending":
      return "inProgress";
  }
}
function remoteConversationPageUnit33(remoteConversationPageOperand49) {
  let remoteConversationPageBinding491 = remoteConversationPageOperand49.flatMap(item => item.type === "message" ? item.content : []).filter(item => item.content_type === "text").map(item => item.text).join("\n");
  return remoteConversationPageBinding491.trim().length > 0 ? [{
    type: "text",
    text: remoteConversationPageBinding491,
    text_elements: []
  }] : [];
}
function remoteConversationPageUnit34(remoteConversationPageOperand67) {
  if (!remoteConversationPageUnit42(remoteConversationPageOperand67)) return null;
  let remoteConversationPageBinding507 = remoteConversationPageOperand67.method;
  return typeof remoteConversationPageBinding507 != "string" || !remoteConversationPageUnit35(remoteConversationPageBinding507) ? null : {
    method: remoteConversationPageBinding507,
    params: remoteConversationPageOperand67.params
  };
}
function remoteConversationPageUnit35(remoteConversationPageOperand41) {
  return remoteConversationPageOperand41 === "turn/started" || remoteConversationPageOperand41 === "turn/completed" || remoteConversationPageOperand41 === "turn/diff/updated" || remoteConversationPageOperand41 === "turn/plan/updated" || remoteConversationPageOperand41 === "item/started" || remoteConversationPageOperand41 === "item/completed" || remoteConversationPageOperand41 === "item/agentMessage/delta" || remoteConversationPageOperand41 === "item/plan/delta" || remoteConversationPageOperand41 === "item/reasoning/summaryTextDelta" || remoteConversationPageOperand41 === "item/reasoning/textDelta" || remoteConversationPageOperand41 === "item/commandExecution/outputDelta" || remoteConversationPageOperand41 === "error";
}
function remoteConversationPageUnit36(remoteConversationPageOperand46) {
  return remoteConversationPageOperand46.type === "imageGeneration" ? currentAppInitialSharedSrcFunction(remoteConversationPageOperand46) : remoteConversationPageOperand46.type === "collabAgentToolCall" ? {
    ...remoteConversationPageOperand46,
    receiverThreads: remoteConversationPageOperand46.receiverThreadIds.map(item => ({
      threadId: item,
      thread: null
    }))
  } : remoteConversationPageOperand46;
}
function remoteConversationPageUnit37(remoteConversationPageOperand80, remoteConversationPageOperand81) {
  let remoteConversationPageBinding515 = remoteConversationPageOperand80.findIndex(item => item.id === remoteConversationPageOperand81.id);
  if (remoteConversationPageBinding515 >= 0) {
    remoteConversationPageOperand80[remoteConversationPageBinding515] = remoteConversationPageOperand81;
    return;
  }
  remoteConversationPageOperand80.push(remoteConversationPageOperand81);
}
function remoteConversationPageUnit38(remoteConversationPageOperand92, remoteConversationPageOperand93, remoteConversationPageOperand94) {
  return remoteConversationPageOperand92.find(item => item.id === remoteConversationPageOperand93 && item.type === remoteConversationPageOperand94) ?? null;
}
function remoteConversationPageUnit39(remoteConversationPageOperand99, remoteConversationPageOperand100, remoteConversationPageOperand101) {
  for (; remoteConversationPageOperand99.length <= remoteConversationPageOperand100;) remoteConversationPageOperand99.push(remoteConversationPageOperand101);
  return remoteConversationPageOperand99;
}
function remoteConversationPageUnit40(remoteConversationPageOperand74) {
  return remoteConversationPageOperand74.flatMap(item => item.content.filter(_item => _item.content_type === "text")).map(item => item.text).join("");
}
function remoteConversationPageUnit41(remoteConversationPageOperand102) {
  return typeof remoteConversationPageOperand102 == "number" ? remoteConversationPageOperand102 * 1e3 : null;
}
function remoteConversationPageUnit42(remoteConversationPageOperand103) {
  return typeof remoteConversationPageOperand103 == "object" && !!remoteConversationPageOperand103;
}
var remoteConversationPageBinding33 = once(() => {
  helperImmerNothingDraftableSchema();
  currentAppInitialSharedCompatSlotUpperO();
  currentAppInitialSharedDisplayRuntime();
  currentAppInitialSharedRuntime0541();
});
function createRemoteConversationFindSource({
  getGroupings,
  routeContextId,
  scrollAdapter
}) {
  return createLocalConversationSearchAdapter({
    contextId: routeContextId,
    getTurns: () => getGroupings().flatMap(({
      node,
      activeId
    }) => {
      let remoteConversationPageBinding430 = remoteConversationPageUnit43(node.userTurn.input_items.filter(item => item.type === "message")),
        remoteConversationPageBinding431 = node.assistantTurns.find(item => item.id === activeId) ?? node.assistantTurns[0] ?? null,
        remoteConversationPageBinding432 = remoteConversationPageBinding431 == null ? "" : mergeDiffLineRanges(remoteConversationPageUnit43(remoteConversationPageBinding431.output_items.filter(item => item.type === "message"))),
        remoteConversationPageBinding433 = [];
      return remoteConversationPageBinding430.trim().length > 0 && remoteConversationPageBinding433.push({
        turnKey: `user:${node.userTurn.id}`,
        units: [{
          unitId: "message",
          text: remoteConversationPageBinding430
        }]
      }), remoteConversationPageBinding431 != null && remoteConversationPageBinding432.trim().length > 0 && remoteConversationPageBinding433.push({
        turnKey: `assistant:${remoteConversationPageBinding431.id}`,
        units: [{
          unitId: "message",
          text: remoteConversationPageBinding432
        }]
      }), remoteConversationPageBinding433;
    }),
    scrollAdapter
  });
}
function remoteConversationPageUnit43(remoteConversationPageOperand75) {
  return remoteConversationPageOperand75.flatMap(item => item.content.filter(_item => _item.content_type === "text")).map(item => item.text).join("");
}
var remoteConversationPageBinding34 = once(() => {
  initConversationSearchHelpers();
  normalizeDiffLineRange();
});
function remoteConversationPageUnit44(remoteConversationPageOperand68) {
  let remoteConversationPageBinding508 = remoteConversationPageBinding35.safeParse(remoteConversationPageOperand68);
  return remoteConversationPageBinding508.success ? {
    id: remoteConversationPageBinding508.data.id,
    createdAt: remoteConversationPageBinding508.data.key.created_at,
    line: remoteConversationPageBinding508.data.line
  } : null;
}
var remoteConversationPageBinding35,
  remoteConversationPageBinding36 = once(() => {
    currentAppInitialSharedCompatSlotUpperSLowerO();
    remoteConversationPageBinding35 = currentAppInitialSharedCompatSlotUpperELowerO({
      id: currentAppInitialSharedCompatSlotLowerJLowerO(),
      item_type: currentAppInitialSharedCompatSlotUpperSLowerO("log"),
      key: currentAppInitialSharedCompatSlotUpperELowerO({
        type: currentAppInitialSharedCompatSlotUpperSLowerO("UserSetupScript"),
        created_at: currentAppInitialSharedCompatSlotLowerJLowerO()
      }),
      line: currentAppInitialSharedCompatSlotLowerJLowerO()
    });
  });
function remoteConversationPageUnit45(remoteConversationPageOperand91) {
  return remoteConversationPageOperand91 === "completed" || remoteConversationPageOperand91 === "failed" || remoteConversationPageOperand91 === "cancelled";
}
function remoteConversationPageUnit46(remoteConversationPageOperand15) {
  let {
      taskId,
      turnId,
      turnStatus,
      keepStreamOpenAfterCompletion = false
    } = remoteConversationPageOperand15,
    remoteConversationPageBinding329 = () => turnId == null ? remoteConversationPageBinding40 : remoteConversationPageBinding39.get(turnId) ?? remoteConversationPageBinding40;
  let [remoteConversationPageBinding330, remoteConversationPageBinding331] = remoteConversationPageBinding38.useState(remoteConversationPageBinding329),
    remoteConversationPageBinding332 = currentAppInitialSharedCompatSlotLowerCLowerC(),
    remoteConversationPageBinding333,
    remoteConversationPageBinding334;
  remoteConversationPageBinding333 = () => {
    remoteConversationPageBinding331(turnId == null ? remoteConversationPageBinding40 : remoteConversationPageBinding39.get(turnId) ?? remoteConversationPageBinding40);
  };
  remoteConversationPageBinding334 = [turnId];
  remoteConversationPageBinding38.useEffect(remoteConversationPageBinding333, remoteConversationPageBinding334);
  let remoteConversationPageBinding335 = !!taskId && !!turnId && (keepStreamOpenAfterCompletion || !remoteConversationPageUnit45(turnStatus));
  let remoteConversationPageBinding336 = remoteConversationPageBinding335,
    remoteConversationPageBinding337,
    remoteConversationPageBinding338;
  return remoteConversationPageBinding337 = () => {
    if (!remoteConversationPageBinding336 || !taskId || !turnId) return;
    let remoteConversationPageBinding402 = new URLSearchParams();
    remoteConversationPageBinding402.append("item_type", "thread_event");
    remoteConversationPageBinding402.append("item_type", "log");
    let remoteConversationPageBinding403 = `/wham/tasks/${taskId}/turns/${turnId}/stream?${remoteConversationPageBinding402.toString()}`,
      remoteConversationPageBinding404 = currentAppInitialSharedCompatSlotLowerF.getInstance().stream("GET", remoteConversationPageBinding403, {
        headers: getCodexDesktopOriginator(),
        onEvent: remoteConversationPageOperand32 => {
          let remoteConversationPageBinding435 = remoteConversationPageUnit26(remoteConversationPageOperand32.data),
            remoteConversationPageBinding436 = remoteConversationPageUnit44(remoteConversationPageOperand32.data);
          remoteConversationPageBinding435 == null && remoteConversationPageBinding436 == null || remoteConversationPageBinding331(remoteConversationPageOperand35 => {
            let remoteConversationPageBinding456 = remoteConversationPageBinding435 == null || remoteConversationPageOperand35.threadEvents.some(item => item.id === remoteConversationPageBinding435.id) ? remoteConversationPageOperand35.threadEvents : [...remoteConversationPageOperand35.threadEvents, remoteConversationPageBinding435],
              remoteConversationPageBinding457 = remoteConversationPageBinding436 == null || remoteConversationPageOperand35.setupLogs.some(item => item.id === remoteConversationPageBinding436.id) ? remoteConversationPageOperand35.setupLogs : [...remoteConversationPageOperand35.setupLogs, remoteConversationPageBinding436];
            if (remoteConversationPageBinding456 === remoteConversationPageOperand35.threadEvents && remoteConversationPageBinding457 === remoteConversationPageOperand35.setupLogs) return remoteConversationPageOperand35;
            let remoteConversationPageBinding458 = {
              setupLogs: remoteConversationPageBinding457,
              threadEvents: remoteConversationPageBinding456
            };
            return remoteConversationPageBinding39.set(turnId, remoteConversationPageBinding458), remoteConversationPageBinding458;
          });
        },
        onComplete: () => {
          remoteConversationPageBinding332.invalidateQueries({
            queryKey: ["tasks"]
          });
          remoteConversationPageBinding332.invalidateQueries({
            queryKey: ["task", taskId]
          });
          remoteConversationPageBinding332.invalidateQueries({
            queryKey: ["task", taskId, "turns"]
          });
        }
      });
    return () => {
      currentAppInitialSharedCompatSlotLowerF.getInstance().cancelStream(remoteConversationPageBinding404);
    };
  }, remoteConversationPageBinding338 = [remoteConversationPageBinding332, remoteConversationPageBinding336, taskId, turnId], remoteConversationPageBinding38.useEffect(remoteConversationPageBinding337, remoteConversationPageBinding338), remoteConversationPageBinding330;
}
var remoteConversationPageBinding37,
  remoteConversationPageBinding38,
  remoteConversationPageBinding39,
  remoteConversationPageBinding40,
  remoteConversationPageBinding41 = once(() => {
    remoteConversationPageBinding37 = currentAppInitialSharedCompatSlotLowerGLowerC();
    currentAppInitialSharedCompatSlotDollarLowerS();
    remoteConversationPageBinding38 = toEsModule(currentAppInitialSharedCompatSlotUnderscoreLowerC(), 1);
    createWhamApiRequestClient();
    currentAppInitialSharedCompatSlotLowerP();
    remoteConversationPageBinding33();
    remoteConversationPageBinding36();
    remoteConversationPageBinding39 = new Map();
    remoteConversationPageBinding40 = {
      setupLogs: [],
      threadEvents: []
    };
  });

export class RemoteConversationDataModule {
  static remoteConversationPageUnit24 = remoteConversationPageUnit24;
  static get remoteConversationPageBinding30() {
    return remoteConversationPageBinding30;
  }
  static get remoteConversationPageBinding31() {
    return remoteConversationPageBinding31;
  }
  static get remoteConversationPageBinding32() {
    return remoteConversationPageBinding32;
  }
  static remoteConversationPageUnit25 = remoteConversationPageUnit25;
  static remoteConversationPageUnit26 = remoteConversationPageUnit26;
  static remoteConversationPageUnit27 = remoteConversationPageUnit27;
  static remoteConversationPageUnit28 = remoteConversationPageUnit28;
  static remoteConversationPageUnit29 = remoteConversationPageUnit29;
  static remoteConversationPageUnit30 = remoteConversationPageUnit30;
  static remoteConversationPageUnit31 = remoteConversationPageUnit31;
  static remoteConversationPageUnit32 = remoteConversationPageUnit32;
  static remoteConversationPageUnit33 = remoteConversationPageUnit33;
  static remoteConversationPageUnit34 = remoteConversationPageUnit34;
  static remoteConversationPageUnit35 = remoteConversationPageUnit35;
  static remoteConversationPageUnit36 = remoteConversationPageUnit36;
  static remoteConversationPageUnit37 = remoteConversationPageUnit37;
  static remoteConversationPageUnit38 = remoteConversationPageUnit38;
  static remoteConversationPageUnit39 = remoteConversationPageUnit39;
  static remoteConversationPageUnit40 = remoteConversationPageUnit40;
  static remoteConversationPageUnit41 = remoteConversationPageUnit41;
  static remoteConversationPageUnit42 = remoteConversationPageUnit42;
  static get remoteConversationPageBinding33() {
    return remoteConversationPageBinding33;
  }
  static createRemoteConversationFindSource = createRemoteConversationFindSource;
  static remoteConversationPageUnit43 = remoteConversationPageUnit43;
  static get remoteConversationPageBinding34() {
    return remoteConversationPageBinding34;
  }
  static remoteConversationPageUnit44 = remoteConversationPageUnit44;
  static get remoteConversationPageBinding35() {
    return remoteConversationPageBinding35;
  }
  static get remoteConversationPageBinding36() {
    return remoteConversationPageBinding36;
  }
  static remoteConversationPageUnit45 = remoteConversationPageUnit45;
  static remoteConversationPageUnit46 = remoteConversationPageUnit46;
  static get remoteConversationPageBinding37() {
    return remoteConversationPageBinding37;
  }
  static get remoteConversationPageBinding38() {
    return remoteConversationPageBinding38;
  }
  static get remoteConversationPageBinding39() {
    return remoteConversationPageBinding39;
  }
  static get remoteConversationPageBinding40() {
    return remoteConversationPageBinding40;
  }
  static get remoteConversationPageBinding41() {
    return remoteConversationPageBinding41;
  }
}
