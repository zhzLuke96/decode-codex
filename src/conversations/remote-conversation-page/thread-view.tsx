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
import { RemoteConversationTurnContentModule } from "./turn-content";

function remoteConversationPageUnit47(remoteConversationPageOperand2) {
  let {
      hostId,
      showComposer = true,
      conversationDetailLevel
    } = remoteConversationPageOperand2,
    remoteConversationPageBinding76 = currentAppInitialSharedCompatSlotUpperKLowerO(reactRouterMember0297),
    {
      data,
      error,
      isLoading
    } = currentAppInitialSharedCompatSlotLowerQLowerO(worktreeNewThreadQueryCompatSlotLowerLLowerD),
    {
      isFetching,
      isLoading: _isLoading
    } = currentAppInitialSharedCompatSlotLowerQLowerO(worktreeNewThreadQueryCompatSlotLowerULowerD),
    remoteConversationPageBinding77 = currentAppInitialSharedCompatSlotLowerQLowerO(worktreeNewThreadQueryCompatSlotLowerSLowerD),
    remoteConversationPageBinding78 = currentAppInitialSharedCompatSlotLowerQLowerO(worktreeNewThreadQueryCompatSlotLowerCLowerD),
    remoteConversationPageBinding79 = currentAppInitialSharedCompatSlotLowerQLowerO(worktreeNewThreadOrchestratorCompatSlotUpperZLowerT),
    remoteConversationPageBinding80 = useNullAppShellRef("chatgpt.supportsNewChatKeyShortcut"),
    [remoteConversationPageBinding81, remoteConversationPageBinding82] = remoteConversationPageBinding43.useState(null),
    {
      taskId
    } = currentAppInitialSharedMember0194(),
    {
      mutate
    } = worktreeNewThreadQueryCompatSlotLowerALowerF(taskId ?? ""),
    remoteConversationPageBinding83 = remoteConversationPageBinding78 ?? data?.current_assistant_turn,
    remoteConversationPageBinding84 = remoteConversationPageBinding83?.environment,
    remoteConversationPageBinding85 = remoteConversationPageBinding83?.turn_status ?? null,
    remoteConversationPageBinding86 = remoteConversationPageBinding85 === "pending" || remoteConversationPageBinding85 === "in_progress",
    remoteConversationPageBinding87 = remoteConversationPageBinding85 === "failed",
    remoteConversationPageBinding88 = appMainCurrentCompatSlotLowerDLowerP(),
    remoteConversationPageBinding89 = conversationDetailLevel ?? remoteConversationPageBinding88,
    remoteConversationPageBinding90 = remoteConversationPageBinding89 === appMainCurrentCompatSlotLowerOLowerP,
    remoteConversationPageBinding91 = RemoteConversationProjectHeaderModule.remoteConversationPageUnit22(data, remoteConversationPageBinding78, remoteConversationPageBinding77);
  let remoteConversationPageBinding92 = remoteConversationPageBinding91,
    remoteConversationPageBinding93 = data?.task.has_unread_turn ?? false,
    remoteConversationPageBinding94,
    remoteConversationPageBinding95;
  remoteConversationPageBinding94 = () => {
    remoteConversationPageBinding93 && mutate();
  };
  remoteConversationPageBinding95 = [remoteConversationPageBinding93, mutate];
  remoteConversationPageBinding43.useEffect(remoteConversationPageBinding94, remoteConversationPageBinding95);
  let remoteConversationPageBinding96 = remoteConversationPageOperand64 => {
    taskId && worktreeNewThreadQueryCompatSlotUpperILowerS({
      event: remoteConversationPageOperand64,
      href: `${currentAppInitialSharedCompatSlotUpperBLowerO}/tasks/${taskId}`,
      initiator: "open_in_browser_bridge"
    });
  };
  let remoteConversationPageBinding97 = remoteConversationPageBinding96,
    remoteConversationPageBinding98 = remoteConversationPageBinding43.useEffectEvent(remoteConversationPageUnit48),
    remoteConversationPageBinding99 = () => {
      remoteConversationPageBinding90 || data?.task.id && remoteConversationPageBinding92 && remoteConversationPageBinding98(data?.task.id ?? null, remoteConversationPageBinding92);
    };
  let remoteConversationPageBinding100 = data?.task.id,
    remoteConversationPageBinding101;
  remoteConversationPageBinding101 = [remoteConversationPageBinding90, remoteConversationPageBinding100, remoteConversationPageBinding92];
  remoteConversationPageBinding43.useEffect(remoteConversationPageBinding99, remoteConversationPageBinding101);
  let remoteConversationPageBinding102 = remoteConversationPageOperand106 => {
    remoteConversationPageBinding80.current = remoteConversationPageOperand106;
    remoteConversationPageBinding82(remoteConversationPageOperand106);
  };
  let remoteConversationPageBinding103 = pullRequestNewThreadCompatSlotUpperSLowerN(remoteConversationPageBinding102),
    remoteConversationPageBinding104 = data?.task.title ?? undefined,
    remoteConversationPageBinding105 = React.createElement(worktreeNewThreadQueryCompatSlotUpperLLowerS, {
      extension: true
    }, React.createElement(ChromeExtensionHeader, {
      title: remoteConversationPageBinding104
    }));
  let remoteConversationPageBinding106 = React.createElement(worktreeNewThreadQueryCompatSlotUpperLLowerS, {
    extension: true
  }, React.createElement(remoteConversationPageUnit49, {
    taskDetails: data
  }));
  let remoteConversationPageBinding107 = remoteConversationPageBinding92 && taskId && remoteConversationPageBinding78?.id && !remoteConversationPageBinding90 && React.createElement(RemoteConversationTurnContentModule.remoteConversationPageUnit8, {
    turnId: remoteConversationPageBinding78.id,
    diff: remoteConversationPageBinding92,
    taskEnvironment: remoteConversationPageBinding84
  });
  let remoteConversationPageBinding108 = remoteConversationPageBinding87 && <div className="p-2">
      <RemoteConversationShell type="error" content={React.createElement(currentAppInitialSharedMember0924, {
      id: "codex.remoteConversation.turnFailed",
      defaultMessage: "An error occurred during this task",
      description: "Error banner shown when the current cloud task turn failed"
    })} primaryCtaText={<div className="flex items-center gap-1">
            {React.createElement(currentAppInitialSharedMember0924, {
        id: "codex.remoteConversation.openInWeb",
        defaultMessage: "Open in web",
        description: "Open task in Codex web button"
      })}
          </div>} onPrimaryCtaClick={remoteConversationPageBinding97} />
    </div>;
  let remoteConversationPageBinding109 = showComposer && remoteConversationPageBinding85 != null && <div className="contents" data-thread-find-composer="true" onMouseDownCapture={() => {
    worktreeNewThreadOrchestratorCompatSlotLowerJLowerL(remoteConversationPageBinding76, "conversation");
  }} onFocusCapture={() => {
    worktreeNewThreadOrchestratorCompatSlotLowerJLowerL(remoteConversationPageBinding76, "conversation");
  }}>
        {React.createElement(appgenLibraryHotDjo67r4nCompatSlotLowerT, {
      isResponseInProgress: remoteConversationPageBinding86,
      showFooterBranchWhen: "always"
    })}
      </div>;
  let remoteConversationPageBinding110 = <div className="flex flex-col gap-2">
      {remoteConversationPageBinding107}
      {remoteConversationPageBinding108}
      {remoteConversationPageBinding109}
    </div>;
  let remoteConversationPageBinding111 = error && <div className="py-2">
      {React.createElement(currentAppInitialSharedMember0924, {
      id: "codex.remoteConversation.errorWithMessage",
      defaultMessage: "Error: {message}",
      description: "Error display on the remote conversation page including the message",
      values: {
        message: error.message
      }
    })}
    </div>;
  let remoteConversationPageBinding112 = data ? React.createElement(RemoteConversationTurnList, {
    hostId,
    turns: remoteConversationPageBinding77,
    unifiedDiff: remoteConversationPageBinding92,
    taskId: taskId ?? null,
    turnsLoading: _isLoading || isFetching,
    focusedAssistantId: remoteConversationPageBinding83?.id ?? null,
    conversationDetailLevel: remoteConversationPageBinding89,
    hideCodeBlocks: remoteConversationPageBinding90
  }) : isLoading ? <div className="flex min-h-full w-full items-center justify-center">
      {React.createElement(worktreeNewThreadQueryCompatSlotUpperDLowerM, null)}
    </div> : null;
  let remoteConversationPageBinding113 = <div className="flex flex-col gap-1.5 pt-2">
      {remoteConversationPageBinding111}
      {remoteConversationPageBinding112}
    </div>;
  let remoteConversationPageBinding114 = React.createElement(worktreeNewThreadOrchestratorCompatSlotUpperI, {
    key: taskId
  });
  let threadScrollContent = React.createElement(ThreadScrollLayout, {
    hasLiveMcpAppFrame: remoteConversationPageBinding79,
    footer: remoteConversationPageBinding110
  }, remoteConversationPageBinding113, remoteConversationPageBinding114);
  let remoteConversationPageBinding115 = React.createElement(ThreadLayout, {
    containerRef: remoteConversationPageBinding103,
    bodyClassName: "[&_[data-thread-find-target=conversation]]:scroll-mt-24",
    "data-vscode-context": '{"chatgpt.supportsNewChatMenu": true}',
    header: remoteConversationPageBinding105,
    banner: remoteConversationPageBinding106
  }, threadScrollContent);
  return React.createElement(appgenLibraryHotDjo67r4nCompatSlotUpperZ, {
    value: remoteConversationPageBinding81
  }, remoteConversationPageBinding115);
}
function remoteConversationPageUnit48(remoteConversationPageOperand120, remoteConversationPageOperand121) {}
function remoteConversationPageUnit49(remoteConversationPageOperand24) {
  let {
      taskDetails
    } = remoteConversationPageOperand24,
    remoteConversationPageBinding400 = taskDetails && <a className="group flex items-center justify-center gap-1 bg-token-text-link-foreground/20 py-1.5 text-sm text-token-foreground focus:!outline-none" href={`https://chatgpt.com/codex/tasks/${taskDetails.task.id}`}>
        {React.createElement(appMainCurrentCompatSlotUpperXLowerT, {
        className: "icon-2xs"
      })}
        {React.createElement(currentAppInitialSharedMember0924, {
        id: "codex.remoteConversation.codexCloudTask",
        defaultMessage: "You are viewing a <u>Codex cloud</u> task",
        description: "Label indicating that you are viewing a Codex cloud task, not a local task",
        values: {
          u: remoteConversationPageUnit51
        }
      }, remoteConversationPageUnit50)}
        {React.createElement(worktreeNewThreadQueryCompatSlotLowerYLowerP, {
        tooltipContent: <div className="max-w-[120px]">
                {React.createElement(currentAppInitialSharedMember0924, {
            id: "codex.remoteConversation.viewPreviousTurns",
            defaultMessage: "Open in web",
            description: "Tooltip for opening the task in Codex web"
          })}
              </div>
      }, React.createElement(InfoCircleIcon, {
        className: "icon-2xs"
      }))}
      </a>;
  return <>{remoteConversationPageBinding400}</>;
}
function remoteConversationPageUnit50(remoteConversationPageOperand88) {
  return <>
      {remoteConversationPageBinding43.Children.toArray(remoteConversationPageOperand88)}
    </>;
}
function remoteConversationPageUnit51(remoteConversationPageOperand77) {
  return <span key="codex-cloud" className="underline underline-offset-2">
      {remoteConversationPageOperand77}
    </span>;
}
function RemoteConversationTurnList({
  hostId,
  turns,
  unifiedDiff,
  taskId,
  turnsLoading,
  focusedAssistantId,
  conversationDetailLevel,
  hideCodeBlocks
}) {
  let remoteConversationPageBinding221 = currentAppInitialSharedCompatSlotUpperKLowerO(reactRouterMember0297),
    remoteConversationPageBinding222 = worktreeNewThreadQueryCompatSlotLowerPLowerD(worktreeNewThreadQueryCompatSlotLowerFLowerD(turns), focusedAssistantId),
    remoteConversationPageBinding223 = remoteConversationPageBinding43.useRef(null),
    remoteConversationPageBinding224 = remoteConversationPageBinding43.useMemo(() => ({
      scrollToTurn: async (remoteConversationPageOperand47, remoteConversationPageOperand48) => {
        remoteConversationPageOperand48?.signal?.aborted || (await worktreeNewThreadOrchestratorCompatSlotUpperO(), !remoteConversationPageOperand48?.signal?.aborted && (remoteConversationPageUnit52(remoteConversationPageBinding223, remoteConversationPageOperand47)?.scrollIntoView({
          block: "center",
          behavior: "smooth"
        }), await worktreeNewThreadOrchestratorCompatSlotUpperO()));
      },
      getTurnContainer: remoteConversationPageOperand122 => remoteConversationPageUnit52(remoteConversationPageBinding223, remoteConversationPageOperand122)
    }), []),
    remoteConversationPageBinding225 = remoteConversationPageBinding43.useRef(remoteConversationPageBinding222);
  remoteConversationPageBinding225.current = remoteConversationPageBinding222;
  let remoteConversationPageBinding226 = currentAppInitialSharedCompatSlotLowerQLowerO(worktreeNewThreadOrchestratorCompatSlotUpperGLowerL),
    remoteConversationPageBinding227 = remoteConversationPageBinding43.useMemo(() => RemoteConversationDataModule.createRemoteConversationFindSource({
      getGroupings: () => remoteConversationPageBinding225.current,
      routeContextId: taskId == null ? "unavailable" : `remote:${taskId}`,
      scrollAdapter: remoteConversationPageBinding224
    }), [remoteConversationPageBinding224, taskId]);
  return useReviewSearchHighlights({
    containerRef: remoteConversationPageBinding223,
    contextId: remoteConversationPageBinding227.contextId
  }), remoteConversationPageBinding222.length === 0 ? React.createElement(AppLoadingScreen, {
    fillParent: true,
    debugName: "RemoteConversationThread.groupings"
  }) : <>
        {React.createElement(ThreadAppShellSourceRegistration, {
      conversationSource: remoteConversationPageBinding227,
      diffSource: remoteConversationPageBinding226
    })}
        <div ref={remoteConversationPageBinding223} data-thread-find-target="conversation" className="relative flex flex-col gap-2" onMouseDownCapture={() => {
      worktreeNewThreadOrchestratorCompatSlotLowerJLowerL(remoteConversationPageBinding221, "conversation");
    }} onFocusCapture={() => {
      worktreeNewThreadOrchestratorCompatSlotLowerJLowerL(remoteConversationPageBinding221, "conversation");
    }}>
          {turnsLoading ? null : React.createElement(ThreadFindNavigationRail, {
        getItems: () => remoteConversationPageUnit63(remoteConversationPageBinding222)
      })}
          {remoteConversationPageBinding222.map(({
        node,
        activeId
      }) => {
        let remoteConversationPageBinding356 = node.userTurn.input_items.filter(item => item.type === "image_asset_pointer"),
          remoteConversationPageBinding357 = node.userTurn.input_items.filter(item => item.type === "comment").length,
          remoteConversationPageBinding358 = worktreeNewThreadQueryCompatSlotLowerMLowerD(node.assistantTurns, activeId),
          remoteConversationPageBinding359 = !!focusedAssistantId && remoteConversationPageBinding358?.id === focusedAssistantId,
          remoteConversationPageBinding360 = `user:${node.userTurn.id}`,
          remoteConversationPageBinding361 = worktreeNewThreadOrchestratorCompatSlotUpperULowerL(remoteConversationPageBinding360, "message"),
          remoteConversationPageBinding362 = remoteConversationPageBinding358 == null ? null : `assistant:${remoteConversationPageBinding358.id}`;
        return <div key={node.userTurn.id} className="flex flex-col gap-2" data-content-search-turn-key={remoteConversationPageBinding360} data-content-search-assistant-turn-key={remoteConversationPageBinding362 ?? undefined}>
                {remoteConversationPageBinding356.length > 0 ? React.createElement(remoteConversationPageUnit65, {
            attachments: remoteConversationPageBinding356
          }) : null}
                <div className="scroll-mt-4" data-content-search-unit-key={remoteConversationPageBinding361}>
                  {React.createElement(appMainCurrentCompatSlotLowerNLowerI, {
              message: remoteConversationPageUnit62(node.userTurn.input_items.filter(item => item.type === "message")),
              sentAtMs: null,
              hostId,
              commentCount: remoteConversationPageBinding357,
              referencesPriorConversation: node.userTurn.input_items.some(item => item.type === "prior_conversation")
            })}
                </div>
                {remoteConversationPageBinding358 ? React.createElement(remoteConversationPageUnit53, {
            hostId,
            taskId,
            userTurn: node.userTurn,
            assistantTurn: remoteConversationPageBinding358,
            conversationDetailLevel,
            fallbackDiff: remoteConversationPageBinding359 && !hideCodeBlocks ? unifiedDiff : null
          }) : null}
              </div>;
      })}
        </div>
      </>;
}
function remoteConversationPageUnit52(remoteConversationPageOperand57, remoteConversationPageOperand58) {
  let remoteConversationPageBinding500 = remoteConversationPageOperand57.current;
  return remoteConversationPageBinding500 == null ? null : remoteConversationPageBinding500.querySelector(`[data-content-search-turn-key="${remoteConversationPageOperand58}"]`) ?? remoteConversationPageBinding500.querySelector(`[data-content-search-assistant-turn-key="${remoteConversationPageOperand58}"]`) ?? null;
}
function remoteConversationPageUnit53(remoteConversationPageOperand7) {
  let {
    hostId,
    taskId,
    userTurn,
    assistantTurn,
    conversationDetailLevel,
    fallbackDiff
  } = remoteConversationPageOperand7;
  let remoteConversationPageBinding198 = {
    taskId,
    turnId: assistantTurn.id,
    turnStatus: assistantTurn.turn_status,
    keepStreamOpenAfterCompletion: false
  };
  let {
      setupLogs,
      threadEvents
    } = RemoteConversationDataModule.remoteConversationPageUnit46(remoteConversationPageBinding198),
    remoteConversationPageBinding199 = RemoteConversationDataModule.remoteConversationPageUnit25(assistantTurn);
  let remoteConversationPageBinding200 = remoteConversationPageBinding199,
    remoteConversationPageBinding201 = RemoteConversationDataModule.remoteConversationPageUnit27({
      turnStatus: assistantTurn.turn_status,
      storedEvents: remoteConversationPageBinding200,
      liveEvents: threadEvents,
      preserveLiveImageGenerationEvents: false
    }).map(remoteConversationPageUnit55);
  let remoteConversationPageBinding202 = remoteConversationPageBinding201,
    remoteConversationPageBinding203 = assistantTurn.error?.code === "startup_script_failed",
    remoteConversationPageBinding204 = {
      enabled: remoteConversationPageBinding203
    };
  let {
      data
    } = worktreeNewThreadQueryCompatSlotLowerPLowerF(taskId, assistantTurn.id, remoteConversationPageBinding204),
    remoteConversationPageBinding205 = data == null ? setupLogs : data.logs.flatMap(remoteConversationPageUnit54);
  let remoteConversationPageBinding206 = remoteConversationPageBinding205,
    remoteConversationPageBinding207 = assistantTurn.turn_status === "failed" && remoteConversationPageBinding203,
    remoteConversationPageBinding208 = remoteConversationPageBinding202.length === 0 && (assistantTurn.turn_status === "pending" || assistantTurn.turn_status === "in_progress"),
    remoteConversationPageBinding209 = {
      hostId
    };
  let {
    data: _data = []
  } = worktreeNewThreadQueryCompatSlotLowerSLowerC(remoteConversationPageBinding209);
  let remoteConversationPageBinding211 = _data,
    remoteConversationPageBinding212 = taskId ?? assistantTurn.id,
    remoteConversationPageBinding213 = RemoteConversationDataModule.remoteConversationPageUnit29({
      taskId: remoteConversationPageBinding212,
      userTurn,
      assistantTurn,
      threadEvents: remoteConversationPageBinding202,
      fallbackDiff,
      includeUserMessage: false
    });
  let remoteConversationPageBinding214 = remoteConversationPageBinding213,
    remoteConversationPageBinding215 = buildUserPromptSubmitMessage(remoteConversationPageBinding214, []);
  let remoteConversationPageBinding216 = remoteConversationPageBinding215,
    remoteConversationPageBinding217 = remoteConversationPageBinding207 ? React.createElement(remoteConversationPageUnit57, {
      logs: remoteConversationPageBinding206
    }) : remoteConversationPageBinding208 ? React.createElement(remoteConversationPageUnit59, {
      logs: remoteConversationPageBinding206
    }) : React.createElement(appMainCurrentCompatSlotUpperR, {
      conversationId: currentAppInitialSharedCompatSlotLowerTLowerA(taskId ?? assistantTurn.id),
      hostId,
      turnSearchKey: `assistant:${assistantTurn.id}`,
      turn: remoteConversationPageBinding214,
      turnState: remoteConversationPageBinding216,
      conversationDetailLevel,
      cwd: null,
      resolvedApps: remoteConversationPageBinding211,
      reportEntityType: "task",
      modelProvider: null
    });
  let remoteConversationPageBinding218 = assistantTurn.turn_status === "cancelled" ? <div className="text-secondary px-4 text-sm">
        {React.createElement(currentAppInitialSharedMember0924, {
      id: "codex.remoteConversation.turnStatus.cancelled",
      defaultMessage: "Cancelled",
      description: "Status label for a cloud task turn that was cancelled."
    })}
      </div> : null;
  let remoteConversationPageBinding219 = assistantTurn.turn_status === "failed" && !remoteConversationPageBinding203 ? React.createElement(remoteConversationPageUnit56, {
    message: assistantTurn.error?.message ?? null
  }) : null;
  return <>
      {remoteConversationPageBinding217}
      {remoteConversationPageBinding218}
      {remoteConversationPageBinding219}
    </>;
}
function remoteConversationPageUnit54(event, remoteConversationPageOperand69) {
  return event.key.type === "UserSetupScript" ? [{
    id: `stored:${remoteConversationPageOperand69}`,
    createdAt: event.key.created_at ?? "",
    line: event.line
  }] : [];
}
function remoteConversationPageUnit55(remoteConversationPageOperand108) {
  return remoteConversationPageOperand108.notification;
}
function remoteConversationPageUnit56(remoteConversationPageOperand37) {
  let {
      message
    } = remoteConversationPageOperand37,
    remoteConversationPageBinding467 = message ?? React.createElement(currentAppInitialSharedMember0924, {
      id: "codex.remoteConversation.taskFailed",
      defaultMessage: "Task failed",
      description: "Fallback message shown when a selected cloud task attempt failed without a specific error message"
    });
  return <RemoteConversationShell type="error" content={remoteConversationPageBinding467} />;
}
function remoteConversationPageUnit57(remoteConversationPageOperand34) {
  let {
      logs
    } = remoteConversationPageOperand34,
    remoteConversationPageBinding453 = React.createElement(currentAppInitialSharedMember0924, {
      id: "remoteConversation.environmentSetup.failed",
      defaultMessage: "Environment setup failed",
      description: "Status shown when a cloud environment setup script fails"
    });
  let remoteConversationPageBinding454 = logs.map(remoteConversationPageUnit58).join("\n");
  return React.createElement(remoteConversationPageUnit61, {
    title: remoteConversationPageBinding453,
    output: remoteConversationPageBinding454
  });
}
function remoteConversationPageUnit58(remoteConversationPageOperand109) {
  return remoteConversationPageOperand109.line;
}
function remoteConversationPageUnit59(remoteConversationPageOperand33) {
  let {
      logs
    } = remoteConversationPageOperand33,
    remoteConversationPageBinding446 = React.createElement(appMainCurrentCompatSlotUpperCLowerS, {
      message: React.createElement(currentAppInitialSharedMember0924, {
        id: "remoteConversation.environmentSetup.running",
        defaultMessage: "Setting up environment",
        description: "Status shown while a cloud environment setup script is running"
      })
    });
  let remoteConversationPageBinding447 = logs.map(remoteConversationPageUnit60).join("\n");
  return React.createElement(remoteConversationPageUnit61, {
    title: remoteConversationPageBinding446,
    output: remoteConversationPageBinding447
  });
}
function remoteConversationPageUnit60(remoteConversationPageOperand110) {
  return remoteConversationPageOperand110.line;
}
function remoteConversationPageUnit61(remoteConversationPageOperand23) {
  let {
      title,
      output
    } = remoteConversationPageOperand23,
    remoteConversationPageBinding392 = output.length > 0 ? React.createElement(appMainCurrentCompatSlotLowerOLowerN, {
      className: "text-sm"
    }, output) : <span className="text-token-input-placeholder-foreground">
          {React.createElement(currentAppInitialSharedMember0924, {
        id: "remoteConversation.environmentSetup.output.empty",
        defaultMessage: "Waiting for output…",
        description: "Placeholder text before cloud environment setup output starts streaming"
      })}
        </span>;
  let remoteConversationPageBinding393 = remoteConversationPageBinding392,
    remoteConversationPageBinding394 = <div className="text-sm text-token-description-foreground">{title}</div>;
  let remoteConversationPageBinding395 = [{
    key: "cloud-environment-setup-output",
    node: remoteConversationPageBinding393
  }];
  let remoteConversationPageBinding396 = {
    preview: "500px",
    expanded: "500px",
    collapsed: "0px"
  };
  let remoteConversationPageBinding397 = React.createElement(appMainCurrentCompatSlotUpperTLowerI, {
    items: remoteConversationPageBinding395,
    allowHorizontalScroll: true,
    className: "text-size-code min-h-[180px] overflow-x-auto rounded-lg border border-token-border bg-token-editor-background p-3 font-mono text-sm whitespace-pre text-token-input-placeholder-foreground",
    contentClassName: "gap-0",
    maxHeightByState: remoteConversationPageBinding396
  });
  return <div className="mb-4 flex flex-col gap-3">
      {remoteConversationPageBinding394}
      {remoteConversationPageBinding397}
    </div>;
}
function remoteConversationPageUnit62(remoteConversationPageOperand76) {
  return remoteConversationPageOperand76.flatMap(item => item.content.filter(_item => _item.content_type === "text")).map(item => item.text).join("");
}
function remoteConversationPageUnit63(remoteConversationPageOperand26) {
  return remoteConversationPageOperand26.map(({
    node,
    activeId
  }) => {
    let remoteConversationPageBinding425 = `user:${node.userTurn.id}`,
      remoteConversationPageBinding426 = worktreeNewThreadQueryCompatSlotLowerMLowerD(node.assistantTurns, activeId),
      remoteConversationPageBinding427 = remoteConversationPageBinding426?.output_items ?? [];
    return {
      id: worktreeNewThreadOrchestratorCompatSlotUpperULowerL(remoteConversationPageBinding425, "message"),
      getPreview: () => {
        let remoteConversationPageBinding449 = remoteConversationPageBinding427.flatMap(item => {
          let remoteConversationPageBinding487 = remoteConversationPageUnit64(item);
          if (remoteConversationPageBinding487 == null) return [];
          let remoteConversationPageBinding488 = null;
          return item.type === "pr" ? remoteConversationPageBinding488 = item.pr_title.trim() || null : (item.type === "comment" || item.type === "suggested_task") && (remoteConversationPageBinding488 = item.title?.trim() || null), [{
            label: remoteConversationPageBinding488,
            type: remoteConversationPageBinding487
          }];
        });
        return remoteConversationPageBinding426?.direct_push_pushed_commit_sha != null && remoteConversationPageBinding449.push({
          label: null,
          type: "commit"
        }), {
          outputs: remoteConversationPageBinding449,
          response: remoteConversationPageUnit62(remoteConversationPageBinding427.filter(item => item.type === "message")).trim()
        };
      },
      getLabel: () => remoteConversationPageUnit62(node.userTurn.input_items.filter(item => item.type === "message")).trim(),
      isHeartbeat: false,
      turnKey: remoteConversationPageBinding425
    };
  });
}
function remoteConversationPageUnit64(remoteConversationPageOperand36) {
  switch (remoteConversationPageOperand36.type) {
    case "output_diff":
    case "follow_up_diff":
    case "output_asset_pointer":
      return "file";
    case "output_image_asset_pointer":
      return "image";
    case "output_preview":
    case "output_deployment_info":
      return "website";
    case "pr":
      return "pull-request";
    case "comment":
    case "cr":
    case "review":
    case "sr":
    case "suggested_task":
      return "review";
    case "message":
    case "output_session_info":
    case "partial_repo_snapshot":
    case "rollout_summary":
    case undefined:
      return null;
  }
}
function remoteConversationPageUnit65(remoteConversationPageOperand43) {
  let {
      attachments
    } = remoteConversationPageOperand43,
    remoteConversationPageBinding485 = attachments.map(remoteConversationPageUnit66);
  return <div className="flex flex-wrap gap-2 self-end">
      {remoteConversationPageBinding485}
    </div>;
}
function remoteConversationPageUnit66(remoteConversationPageOperand89, remoteConversationPageOperand90) {
  return React.createElement(remoteConversationPageUnit67, {
    key: `${remoteConversationPageOperand89.asset_pointer}-${remoteConversationPageOperand90}`,
    asset: remoteConversationPageOperand89
  });
}
function remoteConversationPageUnit67(remoteConversationPageOperand10) {
  let {
      asset
    } = remoteConversationPageOperand10,
    remoteConversationPageBinding256 = currentAppInitialSharedFunction0375(),
    [remoteConversationPageBinding257, remoteConversationPageBinding258] = remoteConversationPageBinding43.useState(false),
    remoteConversationPageBinding259 = remoteConversationPageBinding256.formatMessage({
      id: "codex.remoteConversation.userImageAttachment",
      defaultMessage: "User attachment",
      description: "Alt text for user image attachment"
    });
  let remoteConversationPageBinding260 = remoteConversationPageBinding259,
    remoteConversationPageBinding261 = remoteConversationPageBinding256.formatMessage({
      id: "codex.remoteConversation.closeImagePreview",
      defaultMessage: "Close image preview",
      description: "Aria label for closing the image preview dialog in remote conversation"
    });
  let remoteConversationPageBinding262 = remoteConversationPageBinding261,
    {
      src,
      isLoading,
      isError,
      refetch
    } = appMainCurrentCompatSlotUpperZLowerT(asset.asset_pointer);
  if (isError) return null;
  if (isLoading || !src) {
    let remoteConversationPageBinding450 = remoteConversationPageBinding256.formatMessage({
      id: "codex.remoteConversation.loadingImage",
      defaultMessage: "Loading image",
      description: "Aria label for loading image"
    });
    let remoteConversationPageBinding451;
    return <div className="flex size-16 items-center justify-center rounded-md border border-token-border bg-token-bg-tertiary text-sm" aria-label={remoteConversationPageBinding450}>
        {"…"}
      </div>;
  }
  let remoteConversationPageBinding263 = event => {
    (event.key === "Enter" || event.key === " ") && (event.preventDefault(), remoteConversationPageBinding258(true));
  };
  let remoteConversationPageBinding264 = <img src={src} width={asset.width} height={asset.height} className="h-full w-full rounded-md object-contain" referrerPolicy="no-referrer" onError={refetch} alt={remoteConversationPageBinding260} />;
  let remoteConversationPageBinding265 = <div className="size-16 cursor-interaction rounded-md focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border" role="button" tabIndex={0} aria-label={remoteConversationPageBinding260} onKeyDown={remoteConversationPageBinding263}>
      {remoteConversationPageBinding264}
    </div>;
  return React.createElement(worktreeNewThreadQueryCompatSlotUpperVLowerT, {
    src,
    alt: remoteConversationPageBinding260,
    open: remoteConversationPageBinding257,
    onOpenChange: remoteConversationPageBinding258,
    closeAriaLabel: remoteConversationPageBinding262,
    imageReferrerPolicy: "no-referrer",
    onImageError: refetch,
    triggerContent: remoteConversationPageBinding265
  });
}
var remoteConversationPageBinding42,
  remoteConversationPageBinding43,
  remoteConversationPageBinding44,
  remoteConversationPageBinding45 = once(() => {
    remoteConversationPageBinding42 = currentAppInitialSharedCompatSlotLowerGLowerC();
    currentAppInitialSharedCompatSlotUpperVLowerO();
    currentAppInitialSharedCompatSlotUpperO();
    remoteConversationPageBinding43 = toEsModule(currentAppInitialSharedCompatSlotUnderscoreLowerC(), 1);
    intlFormatDateTimeRuntime();
    openAiNativeAppDefinition();
    appMainCurrentCompatSlotLowerSLowerN();
    appMainCurrentCompatSlotUpperELowerI();
    appMainCurrentCompatSlotLowerQLowerT();
    worktreeNewThreadQueryCompatSlotLowerNLowerS();
    worktreeNewThreadQueryCompatSlotUpperHLowerT();
    worktreeNewThreadQueryCompatSlotUpperOLowerM();
    worktreeNewThreadQueryCompatSlotLowerXLowerP();
    appMainCurrentCompatSlotLowerRLowerI();
    worktreeNewThreadQueryCompatSlotLowerULowerS();
    appgenLibraryHotDjo67r4nCompatSlotLowerN();
    appgenLibraryHotDjo67r4nCompatSlotUpperQ();
    worktreeNewThreadOrchestratorCompatSlotUpperGLowerL();
    worktreeNewThreadOrchestratorCompatSlotUpperE();
    initThreadAppShellSourcesChunk();
    worktreeNewThreadOrchestratorCompatSlotLowerWLowerL();
    initReviewSearchHighlighter();
    initChromeExtensionHeaderChunk();
    appMainCurrentCompatSlotUpperZLowerT();
    initInfoCircleIconChunk();
    initAppLoadingScreenChunk();
    automationCronHeartbeatCreateMessages();
    worktreeNewThreadOrchestratorCompatSlotUpperQLowerT();
    worktreeNewThreadOrchestratorCompatSlotUpperL();
    browserTabIdForConversation();
    appMainCurrentCompatSlotLowerZ();
    worktreeNewThreadQueryCompatSlotLowerILowerC();
    reactRouterRouteScopeParentRuntime();
    appMainCurrentCompatSlotLowerLLowerP();
    initThreadLayoutChunk();
    initThreadScrollLayoutChunk();
    initThreadFindNavigationRail();
    appMainCurrentCompatSlotUpperRLowerT();
    pullRequestNewThreadCompatSlotLowerXLowerN();
    initThreadNullRefChunk();
    worktreeNewThreadQueryCompatSlotUpperJLowerD();
    currentAppInitialSharedCompatSlotUnderscore();
    RemoteConversationTurnContentModule.remoteConversationPageBinding16();
    RemoteConversationDataModule.remoteConversationPageBinding33();
    RemoteConversationDataModule.remoteConversationPageBinding34();
    worktreeNewThreadQueryCompatSlotLowerALowerD();
    worktreeNewThreadQueryCompatSlotLowerHLowerD();
    RemoteConversationProjectHeaderModule.remoteConversationPageBinding29();
    RemoteConversationDataModule.remoteConversationPageBinding41();
    remoteConversationPageBinding44 = currentAppInitialSharedCompatSlotLowerLLowerC();
  });

export class RemoteConversationThreadViewModule {
  static remoteConversationPageUnit47 = remoteConversationPageUnit47;
  static remoteConversationPageUnit48 = remoteConversationPageUnit48;
  static remoteConversationPageUnit49 = remoteConversationPageUnit49;
  static remoteConversationPageUnit50 = remoteConversationPageUnit50;
  static remoteConversationPageUnit51 = remoteConversationPageUnit51;
  static RemoteConversationTurnList = RemoteConversationTurnList;
  static remoteConversationPageUnit52 = remoteConversationPageUnit52;
  static remoteConversationPageUnit53 = remoteConversationPageUnit53;
  static remoteConversationPageUnit54 = remoteConversationPageUnit54;
  static remoteConversationPageUnit55 = remoteConversationPageUnit55;
  static remoteConversationPageUnit56 = remoteConversationPageUnit56;
  static remoteConversationPageUnit57 = remoteConversationPageUnit57;
  static remoteConversationPageUnit58 = remoteConversationPageUnit58;
  static remoteConversationPageUnit59 = remoteConversationPageUnit59;
  static remoteConversationPageUnit60 = remoteConversationPageUnit60;
  static remoteConversationPageUnit61 = remoteConversationPageUnit61;
  static remoteConversationPageUnit62 = remoteConversationPageUnit62;
  static remoteConversationPageUnit63 = remoteConversationPageUnit63;
  static remoteConversationPageUnit64 = remoteConversationPageUnit64;
  static remoteConversationPageUnit65 = remoteConversationPageUnit65;
  static remoteConversationPageUnit66 = remoteConversationPageUnit66;
  static remoteConversationPageUnit67 = remoteConversationPageUnit67;
  static get remoteConversationPageBinding42() {
    return remoteConversationPageBinding42;
  }
  static get remoteConversationPageBinding43() {
    return remoteConversationPageBinding43;
  }
  static get remoteConversationPageBinding44() {
    return remoteConversationPageBinding44;
  }
  static get remoteConversationPageBinding45() {
    return remoteConversationPageBinding45;
  }
}
