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
import { RemoteConversationSummaryModule } from "./summary";
import { RemoteConversationTurnContentModule } from "./turn-content";

function remoteConversationPageUnit14(remoteConversationPageOperand1) {
  let {
      turnId,
      diff,
      taskEnvironment
    } = remoteConversationPageOperand1,
    remoteConversationPageBinding52 = {
      turnId,
      diff,
      taskEnvironment
    };
  let {
      hasAppliedCodeLocally,
      canApply,
      isApplying,
      apply,
      revert,
      results,
      setResultsOpen,
      isNonWorkspaceEnvironment,
      taskEnvironmentLabel,
      gitRootPath,
      branchName
    } = RemoteConversationSummaryModule.remoteConversationPageUnit6(remoteConversationPageBinding52),
    remoteConversationPageBinding53 = hasAppliedCodeLocally ? "codex.remoteConversation.applyDiff.revert" : "codex.remoteConversation.applyDiff.apply",
    remoteConversationPageBinding54 = hasAppliedCodeLocally ? {
      id: remoteConversationPageBinding53,
      defaultMessage: "Revert",
      description: "Button to revert a remote diff locally"
    } : {
      id: remoteConversationPageBinding53,
      defaultMessage: "Apply",
      description: "Button to apply a remote diff locally"
    };
  let remoteConversationPageBinding55 = remoteConversationPageBinding54,
    remoteConversationPageBinding56;
  bb0: {
    if (!diff) {
      remoteConversationPageBinding56 = null;
      break bb0;
    }
    let remoteConversationPageBinding469, remoteConversationPageBinding470, remoteConversationPageBinding471;
    remoteConversationPageBinding469 = worktreeNewThreadOrchestratorCompatSlotUpperCLowerF(diff);
    remoteConversationPageBinding470 = 0;
    remoteConversationPageBinding471 = 0;
    for (let remoteConversationPageBinding520 of remoteConversationPageBinding469) {
      remoteConversationPageBinding470 += remoteConversationPageBinding520.additions;
      remoteConversationPageBinding471 += remoteConversationPageBinding520.deletions;
    }
    let remoteConversationPageBinding472;
    remoteConversationPageBinding472 = {
      fileCount: remoteConversationPageBinding469.length,
      linesAdded: remoteConversationPageBinding470,
      linesRemoved: remoteConversationPageBinding471
    };
    remoteConversationPageBinding56 = remoteConversationPageBinding472;
  }
  let remoteConversationPageBinding57 = remoteConversationPageBinding56,
    remoteConversationPageBinding58 = !results.result && !hasAppliedCodeLocally,
    remoteConversationPageBinding59 = remoteConversationPageBinding58 ? <div className="flex flex-col gap-3 pt-2 pb-1">
        {React.createElement(RemoteConversationSummaryModule.remoteConversationPageBinding7, {
        className: "icon-lg text-token-foreground"
      })}
        <div className="heading-lg text-token-foreground">
          {React.createElement(currentAppInitialSharedMember0924, {
          id: "codex.applyDropdown.header.title",
          defaultMessage: "Apply changes",
          description: "Title for the apply dropdown header"
        })}
        </div>
        {remoteConversationPageBinding57 ? <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-token-description-foreground">
              {React.createElement(currentAppInitialSharedMember0924, {
            id: "codex.applyDropdown.header.changes",
            defaultMessage: "Changes",
            description: "Label for the apply dropdown change summary"
          })}
            </span>
            <span className="font-medium text-token-foreground">
              {React.createElement(currentAppInitialSharedMember0924, {
            id: "codex.applyDropdown.header.fileCount",
            defaultMessage: "{count, plural, one {# file} other {# files}}",
            description: "File count summary in apply dropdown header",
            values: {
              count: remoteConversationPageBinding57.fileCount
            }
          })}
            </span>
            <span className="flex items-center gap-1">
              {React.createElement(appMainCurrentCompatSlotLowerFLowerU, {
            linesAdded: remoteConversationPageBinding57.linesAdded,
            linesRemoved: remoteConversationPageBinding57.linesRemoved
          })}
              <span className="text-token-description-foreground">
                {React.createElement(currentAppInitialSharedMember0924, {
              id: "codex.applyDropdown.header.rows",
              defaultMessage: "rows",
              description: "Label for line change totals in apply dropdown header"
            })}
              </span>
            </span>
          </div> : null}
        {React.createElement(worktreeNewThreadQueryCompatSlotLowerNLowerO.Separator, {
        paddingClassName: "py-2"
      })}
        <div className="mb-1 text-sm text-token-description-foreground">
          {React.createElement(currentAppInitialSharedMember0924, {
          id: "codex.applyDropdown.header.workspace",
          defaultMessage: "Project",
          description: "Label for the workspace list in apply dropdown header"
        })}
        </div>
      </div> : null;
  let remoteConversationPageBinding60 = remoteConversationPageBinding59,
    remoteConversationPageBinding61 = gitRootPath ? [{
      label: branchName ?? remoteConversationPageBinding17.default.basename(gitRootPath),
      subtitle: remoteConversationPageBinding17.default.basename(gitRootPath),
      gitRoot: gitRootPath,
      workspaceRoot: gitRootPath
    }] : [];
  let remoteConversationPageBinding62 = results.result ? {
    appliedPaths: results.result.appliedPaths ?? [],
    skippedPaths: results.result.skippedPaths ?? [],
    conflictedPaths: results.result.conflictedPaths ?? []
  } : null;
  let remoteConversationPageBinding63 = {
    targets: remoteConversationPageBinding61,
    results: remoteConversationPageBinding62
  };
  let remoteConversationPageBinding64 = !canApply || isApplying,
    remoteConversationPageBinding65 = React.createElement(RemoteConversationSummaryModule.remoteConversationPageBinding7, {
      className: "icon-xs"
    });
  let remoteConversationPageBinding66 = React.createElement(currentAppInitialSharedMember0924, {
    ...remoteConversationPageBinding55
  });
  let remoteConversationPageBinding67 = React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
    size: "toolbar",
    color: "outline",
    loading: isApplying,
    disabled: remoteConversationPageBinding64
  }, remoteConversationPageBinding65, remoteConversationPageBinding66);
  let remoteConversationPageBinding68 = React.createElement(currentAppInitialSharedMember0924, {
    id: "codex.remoteConversation.applyDiff.dropdownTitle",
    defaultMessage: "Apply changes to a local branch",
    description: "Dropdown title for applying remote diff"
  });
  let remoteConversationPageBinding69 = hasAppliedCodeLocally ? {
    primary: {
      label: React.createElement(currentAppInitialSharedMember0924, {
        id: "codex.remoteConversation.applyDiff.revertCta",
        defaultMessage: "Revert changes",
        description: "Dropdown button to revert a remote diff locally"
      }),
      onClick: revert,
      color: "secondary",
      disabled: !canApply || isApplying,
      loading: isApplying
    },
    secondary: {
      label: React.createElement(currentAppInitialSharedMember0924, {
        id: "codex.applyOrRevertBanner.reapply",
        defaultMessage: "Reapply",
        description: "Label to reapply code changes to Codex"
      }),
      onClick: apply,
      color: "ghost",
      disabled: !canApply || isApplying,
      loading: isApplying
    }
  } : {
    primary: {
      label: React.createElement(currentAppInitialSharedMember0924, {
        id: "codex.remoteConversation.applyDiff.applyCta",
        defaultMessage: "Apply changes",
        description: "Dropdown button to apply a remote diff locally"
      }),
      onClick: apply,
      color: "secondary",
      disabled: !canApply || isApplying,
      loading: isApplying
    }
  };
  let remoteConversationPageBinding70 = isNonWorkspaceEnvironment && taskEnvironmentLabel ? <div className="text-center text-sm text-balance text-token-editor-warning-foreground">
        {React.createElement(currentAppInitialSharedMember0924, {
      id: "codex.applyOrRevertBanner.applyMessageDifferentEnvironment",
      defaultMessage: "This task was made in {environment} so may not apply cleanly.",
      description: "Banner warning the user that the Codex code changes they are viewing were made in a different environment and may not apply cleanly.",
      values: {
        environment: <span className="font-medium">{taskEnvironmentLabel}</span>
      }
    })}
      </div> : null;
  let remoteConversationPageBinding71 = React.createElement(RemoteConversationSummaryModule.remoteConversationPageUnit1, {
    align: "end",
    disabled: isApplying,
    contentWidth: "panelWide",
    header: remoteConversationPageBinding60,
    context: remoteConversationPageBinding63,
    trigger: remoteConversationPageBinding67,
    title: remoteConversationPageBinding68,
    actions: remoteConversationPageBinding69,
    footer: remoteConversationPageBinding70
  });
  let remoteConversationPageBinding72 = React.createElement(RemoteConversationTurnContentModule.remoteConversationPageUnit10, {
    open: results.open,
    result: results.result,
    onOpenChange: setResultsOpen
  });
  return <>
      {remoteConversationPageBinding71}
      {remoteConversationPageBinding72}
    </>;
}
var ui,
  remoteConversationPageBinding17,
  remoteConversationPageBinding18,
  remoteConversationPageBinding19 = once(() => {
    ui = currentAppInitialSharedCompatSlotLowerGLowerC();
    remoteConversationPageBinding17 = toEsModule(currentAppInitialSharedCompatSlotUpperNLowerI(), 1);
    intlFormatDateTimeRuntime();
    RemoteConversationSummaryModule.remoteConversationPageBinding5();
    worktreeNewThreadQueryCompatSlotUpperELowerM();
    worktreeNewThreadQueryCompatSlotLowerOLowerO();
    appMainCurrentCompatSlotLowerPLowerU();
    worktreeNewThreadOrchestratorCompatSlotUpperSLowerF();
    RemoteConversationSummaryModule.remoteConversationPageBinding8();
    RemoteConversationTurnContentModule.remoteConversationPageBinding16();
    RemoteConversationSummaryModule.remoteConversationPageBinding13();
    remoteConversationPageBinding18 = currentAppInitialSharedCompatSlotLowerLLowerC();
  });
function remoteConversationPageUnit15({
  turns,
  selectedTurn,
  diffTaskTurn
}) {
  let remoteConversationPageBinding459 = new Map();
  for (let remoteConversationPageBinding521 of turns) remoteConversationPageBinding459.set(remoteConversationPageBinding521.id, remoteConversationPageBinding521);
  selectedTurn && remoteConversationPageBinding459.set(selectedTurn.id, selectedTurn);
  diffTaskTurn && remoteConversationPageBinding459.set(diffTaskTurn.id, diffTaskTurn);
  let remoteConversationPageBinding460 = Array.from(remoteConversationPageBinding459.values()).filter(item => !worktreeNewThreadQueryCompatSlotDollarLowerD(item)),
    remoteConversationPageBinding461 = selectedTurn ? remoteConversationPageUnit17(remoteConversationPageBinding460, remoteConversationPageBinding459, selectedTurn) : null,
    remoteConversationPageBinding462 = !!selectedTurn && !!diffTaskTurn && worktreeNewThreadQueryCompatSlotLowerDLowerD(remoteConversationPageBinding459, selectedTurn.id, diffTaskTurn.id),
    remoteConversationPageBinding463 = remoteConversationPageUnit16(diffTaskTurn),
    remoteConversationPageBinding464 = remoteConversationPageBinding462 ? remoteConversationPageBinding463 : null;
  diffTaskTurn && remoteConversationPageBinding464 && (!remoteConversationPageBinding461 || diffTaskTurn.created_at > remoteConversationPageBinding461.actionTurn.created_at) && (remoteConversationPageBinding461 = {
    actionTurn: diffTaskTurn,
    prItem: remoteConversationPageBinding464
  });
  let remoteConversationPageBinding465 = remoteConversationPageUnit16(selectedTurn);
  return !remoteConversationPageBinding461 && selectedTurn && remoteConversationPageBinding465 && (remoteConversationPageBinding461 = {
    actionTurn: selectedTurn,
    prItem: remoteConversationPageBinding465
  }), !remoteConversationPageBinding461 && !selectedTurn && diffTaskTurn && remoteConversationPageBinding463 && (remoteConversationPageBinding461 = {
    actionTurn: diffTaskTurn,
    prItem: remoteConversationPageBinding463
  }), remoteConversationPageBinding461;
}
function remoteConversationPageUnit16(remoteConversationPageOperand95) {
  return remoteConversationPageOperand95?.output_items?.find(remoteConversationPageOperand115 => remoteConversationPageOperand115.type === "pr") ?? null;
}
function remoteConversationPageUnit17(remoteConversationPageOperand50, remoteConversationPageOperand51, remoteConversationPageOperand52) {
  let remoteConversationPageBinding492 = null;
  for (let remoteConversationPageBinding503 of remoteConversationPageOperand50) {
    if (!worktreeNewThreadQueryCompatSlotLowerGLowerD(remoteConversationPageOperand51, remoteConversationPageOperand52.id, remoteConversationPageBinding503.id)) continue;
    let remoteConversationPageBinding504 = remoteConversationPageUnit16(remoteConversationPageBinding503);
    remoteConversationPageBinding504?.output_diff?.diff && (!remoteConversationPageBinding492 || remoteConversationPageBinding503.created_at > remoteConversationPageBinding492.actionTurn.created_at) && (remoteConversationPageBinding492 = {
      actionTurn: remoteConversationPageBinding503,
      prItem: remoteConversationPageBinding504
    });
  }
  return remoteConversationPageBinding492;
}
var remoteConversationPageBinding20 = once(() => {
  worktreeNewThreadQueryCompatSlotLowerHLowerD();
});
function PullRequestActionButton(remoteConversationPageOperand6) {
  let {
      taskId,
      turns,
      selectedTurn,
      diffTaskTurn,
      pullRequests,
      size = "toolbar"
    } = remoteConversationPageOperand6,
    remoteConversationPageBinding164 = currentAppInitialSharedCompatSlotUpperKLowerO(currentAppInitialSharedCompatSlotUpperE),
    remoteConversationPageBinding165 = currentAppInitialSharedFunction0375(),
    remoteConversationPageBinding166 = worktreeNewThreadQueryCompatSlotUpperULowerM(currentAppInitialSharedCompatSlotLowerTLowerT.createPullRequestAsDraft),
    remoteConversationPageBinding167 = worktreeNewThreadQueryCompatSlotDollarLowerD(),
    remoteConversationPageBinding168 = remoteConversationPageBinding22.useRef(null),
    remoteConversationPageBinding169 = remoteConversationPageBinding22.useRef(null),
    [remoteConversationPageBinding170, remoteConversationPageBinding171] = remoteConversationPageBinding22.useState(null),
    remoteConversationPageBinding172 = remoteConversationPageUnit15({
      turns,
      selectedTurn,
      diffTaskTurn
    }),
    remoteConversationPageBinding173 = remoteConversationPageBinding172?.actionTurn ?? null,
    remoteConversationPageBinding174 = (remoteConversationPageBinding172?.prItem ?? null)?.output_diff?.diff ?? null,
    remoteConversationPageBinding175 = remoteConversationPageBinding173?.id ?? null,
    remoteConversationPageBinding176 = remoteConversationPageBinding173?.pull_request_status ?? null,
    remoteConversationPageBinding177 = !!remoteConversationPageBinding170 && remoteConversationPageBinding170 === remoteConversationPageBinding175,
    remoteConversationPageBinding178 = !!taskId && !!remoteConversationPageBinding175 && (remoteConversationPageBinding167.isPending || remoteConversationPageBinding176 === "creating" || remoteConversationPageBinding177),
    remoteConversationPageBinding179 = remoteConversationPageBinding178 ? remoteConversationPageUnit18 : false,
    remoteConversationPageBinding180 = {
      enabled: remoteConversationPageBinding178,
      refetchInterval: remoteConversationPageBinding179
    };
  let {
      data
    } = worktreeNewThreadQueryCompatSlotLowerFLowerF(taskId, remoteConversationPageBinding175, remoteConversationPageBinding180),
    remoteConversationPageBinding181 = data?.turn ?? remoteConversationPageBinding173,
    remoteConversationPageBinding182 = remoteConversationPageBinding181?.pull_request_status ?? null,
    remoteConversationPageBinding183 = remoteConversationPageBinding181?.pull_request_data?.url ?? null,
    remoteConversationPageBinding184 = remoteConversationPageUnit20(pullRequests, remoteConversationPageBinding181?.id ?? null, remoteConversationPageBinding183) ?? remoteConversationPageUnit20(pullRequests, remoteConversationPageBinding175, remoteConversationPageBinding183),
    remoteConversationPageBinding185 = remoteConversationPageBinding181?.turn_status === "completed",
    remoteConversationPageBinding186 = remoteConversationPageUnit19(remoteConversationPageBinding182, remoteConversationPageBinding183),
    remoteConversationPageBinding187 = remoteConversationPageBinding167.isPending || remoteConversationPageBinding182 === "creating" || remoteConversationPageBinding177 && !remoteConversationPageBinding186;
  remoteConversationPageBinding22.useEffect(() => {
    let remoteConversationPageBinding509 = remoteConversationPageBinding168.current;
    remoteConversationPageBinding509 != null && remoteConversationPageBinding183 && (worktreeNewThreadQueryCompatSlotLowerALowerS({
      ...remoteConversationPageBinding509,
      href: remoteConversationPageBinding183,
      initiator: "pull_request_link"
    }), remoteConversationPageBinding168.current = null);
  }, [remoteConversationPageBinding183]);
  remoteConversationPageBinding22.useEffect(() => {
    !remoteConversationPageBinding175 || remoteConversationPageBinding182 !== "failed" || remoteConversationPageBinding169.current !== remoteConversationPageBinding175 && (remoteConversationPageBinding169.current = remoteConversationPageBinding175, remoteConversationPageBinding168.current = null, remoteConversationPageBinding164.get(worktreeNewThreadQueryCompatSlotLowerGLowerP).danger(remoteConversationPageBinding165.formatMessage({
      id: "localConversationPage.createPullRequestError",
      defaultMessage: "Failed to create pull request",
      description: "Error message when creating a pull request fails"
    })));
  }, [remoteConversationPageBinding175, remoteConversationPageBinding164, remoteConversationPageBinding182, remoteConversationPageBinding165]);
  let remoteConversationPageBinding188 = function (remoteConversationPageOperand87) {
      remoteConversationPageBinding183 && worktreeNewThreadQueryCompatSlotUpperILowerS({
        event: remoteConversationPageOperand87,
        href: remoteConversationPageBinding183,
        initiator: "pull_request_link"
      });
    },
    remoteConversationPageBinding189 = async function (remoteConversationPageOperand31) {
      if (!taskId || !remoteConversationPageBinding175 || !remoteConversationPageBinding185 || remoteConversationPageBinding187) return;
      let remoteConversationPageBinding434 = worktreeNewThreadQueryCompatSlotLowerRLowerS(remoteConversationPageOperand31);
      remoteConversationPageBinding168.current = {
        ...(remoteConversationPageBinding434 ? {
          disposition: "new-tab"
        } : {}),
        openTargetIntent: remoteConversationPageBinding434 ? "alternate" : "default"
      };
      remoteConversationPageBinding169.current = null;
      remoteConversationPageBinding171(remoteConversationPageBinding175);
      try {
        await remoteConversationPageBinding167.mutateAsync({
          taskId,
          turnId: remoteConversationPageBinding175,
          ...(remoteConversationPageBinding166 ? {
            mode: "draft"
          } : {})
        });
      } catch {
        remoteConversationPageBinding168.current = null;
        remoteConversationPageBinding171(null);
        remoteConversationPageBinding164.get(worktreeNewThreadQueryCompatSlotLowerGLowerP).danger(remoteConversationPageBinding165.formatMessage({
          id: "localConversationPage.createPullRequestError",
          defaultMessage: "Failed to create pull request",
          description: "Error message when creating a pull request fails"
        }));
      }
    };
  if (!taskId || !remoteConversationPageBinding175 || !remoteConversationPageBinding174) return null;
  if (remoteConversationPageBinding183) {
    let remoteConversationPageBinding437 = remoteConversationPageBinding184?.number ?? projectsIndexCurrentCompatSlotLowerZ(remoteConversationPageBinding183),
      remoteConversationPageBinding438 = remoteConversationPageBinding184 ? projectsIndexCurrentCompatSlotUpperB(remoteConversationPageBinding184) : "open",
      remoteConversationPageBinding439 = <RemoteConversationThreadView className="icon-xs shrink-0" status={remoteConversationPageBinding438} />;
    let remoteConversationPageBinding440 = React.createElement(toggleThreadSidePanel, {
      number: remoteConversationPageBinding437
    });
    let remoteConversationPageBinding441;
    return React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
      className: "shrink-0",
      color: "outline",
      size: size,
      onClick: remoteConversationPageBinding188
    }, remoteConversationPageBinding439, remoteConversationPageBinding440);
  }
  let remoteConversationPageBinding190 = !remoteConversationPageBinding185 || remoteConversationPageBinding187,
    remoteConversationPageBinding191 = remoteConversationPageOperand112 => {
      remoteConversationPageBinding189(remoteConversationPageOperand112);
    };
  let remoteConversationPageBinding192 = remoteConversationPageBinding187 ? React.createElement(worktreeNewThreadQueryCompatSlotUpperDLowerM, {
    className: "icon-xs"
  }) : React.createElement(worktreeNewThreadQueryCompatSlotUpperILowerS, {
    className: "icon-xs"
  });
  let remoteConversationPageBinding193 = remoteConversationPageBinding187 ? remoteConversationPageBinding166 ? React.createElement(currentAppInitialSharedMember0924, {
    id: "review.commit.loading.title.createDraftPr",
    defaultMessage: "Creating a draft PR",
    description: "Title shown while creating a draft pull request"
  }) : React.createElement(currentAppInitialSharedMember0924, {
    id: "review.commit.loading.title.createPr",
    defaultMessage: "Creating a PR",
    description: "Title shown while creating a pull request"
  }) : remoteConversationPageBinding166 ? React.createElement(currentAppInitialSharedMember0924, {
    id: "localConversationPage.createDraftPullRequestButtonLabel",
    defaultMessage: "Create draft PR",
    description: "Label for create draft pull request action"
  }) : React.createElement(currentAppInitialSharedMember0924, {
    id: "localConversationPage.createPullRequestButtonLabel",
    defaultMessage: "Create PR",
    description: "Label for create pull request action"
  });
  return React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
    className: "shrink-0",
    color: "outline",
    disabled: remoteConversationPageBinding190,
    size: size,
    onClick: remoteConversationPageBinding191
  }, remoteConversationPageBinding192, remoteConversationPageBinding193);
}
function remoteConversationPageUnit18(remoteConversationPageOperand70) {
  let remoteConversationPageBinding510 = remoteConversationPageOperand70.state.data?.turn;
  return remoteConversationPageUnit19(remoteConversationPageBinding510?.pull_request_status ?? null, remoteConversationPageBinding510?.pull_request_data?.url ?? null) ? false : remoteConversationPageBinding24;
}
function remoteConversationPageUnit19(remoteConversationPageOperand65, remoteConversationPageOperand66) {
  return remoteConversationPageOperand66 ? true : remoteConversationPageOperand65 === "created" || remoteConversationPageOperand65 === "failed" || remoteConversationPageOperand65 === "updated" || remoteConversationPageOperand65 === "externally_created";
}
function remoteConversationPageUnit20(remoteConversationPageOperand53, remoteConversationPageOperand54, remoteConversationPageOperand55) {
  if (remoteConversationPageOperand54 != null) {
    let remoteConversationPageBinding517 = remoteConversationPageOperand53.find(item => item.assistant_turn_id === remoteConversationPageOperand54);
    if (remoteConversationPageBinding517) return remoteConversationPageBinding517.pull_request;
  }
  if (remoteConversationPageOperand55 != null) {
    let remoteConversationPageBinding518 = remoteConversationPageOperand53.find(item => item.pull_request.url === remoteConversationPageOperand55);
    if (remoteConversationPageBinding518) return remoteConversationPageBinding518.pull_request;
  }
  return null;
}
var remoteConversationPageBinding21,
  remoteConversationPageBinding22,
  remoteConversationPageBinding23,
  remoteConversationPageBinding24,
  remoteConversationPageBinding25 = once(() => {
    remoteConversationPageBinding21 = currentAppInitialSharedCompatSlotLowerGLowerC();
    currentAppInitialSharedCompatSlotUpperVLowerO();
    currentAppInitialSharedCompatSlotUpperO();
    remoteConversationPageBinding22 = toEsModule(currentAppInitialSharedCompatSlotUnderscoreLowerC(), 1);
    intlFormatDateTimeRuntime();
    worktreeNewThreadQueryCompatSlotUpperELowerM();
    worktreeNewThreadQueryCompatSlotLowerNLowerS();
    worktreeNewThreadQueryCompatSlotUpperOLowerM();
    worktreeNewThreadQueryCompatSlotLowerMLowerP();
    worktreeNewThreadQueryCompatSlotUpperLLowerS();
    appMainCurrentCompatSlotUpperELowerL();
    projectsIndexCurrentCompatSlotUpperV();
    currentAppInitialSharedCompatSlotUpperD();
    worktreeNewThreadQueryCompatSlotLowerZLowerM();
    worktreeNewThreadQueryCompatSlotUpperJLowerD();
    remoteConversationPageBinding20();
    remoteConversationPageBinding23 = currentAppInitialSharedCompatSlotLowerLLowerC();
    remoteConversationPageBinding24 = 2e3;
  });

export class RemoteConversationPullRequestModule {
  static remoteConversationPageUnit14 = remoteConversationPageUnit14;
  static get ui() {
    return ui;
  }
  static get remoteConversationPageBinding17() {
    return remoteConversationPageBinding17;
  }
  static get remoteConversationPageBinding18() {
    return remoteConversationPageBinding18;
  }
  static get remoteConversationPageBinding19() {
    return remoteConversationPageBinding19;
  }
  static remoteConversationPageUnit15 = remoteConversationPageUnit15;
  static remoteConversationPageUnit16 = remoteConversationPageUnit16;
  static remoteConversationPageUnit17 = remoteConversationPageUnit17;
  static get remoteConversationPageBinding20() {
    return remoteConversationPageBinding20;
  }
  static PullRequestActionButton = PullRequestActionButton;
  static remoteConversationPageUnit18 = remoteConversationPageUnit18;
  static remoteConversationPageUnit19 = remoteConversationPageUnit19;
  static remoteConversationPageUnit20 = remoteConversationPageUnit20;
  static get remoteConversationPageBinding21() {
    return remoteConversationPageBinding21;
  }
  static get remoteConversationPageBinding22() {
    return remoteConversationPageBinding22;
  }
  static get remoteConversationPageBinding23() {
    return remoteConversationPageBinding23;
  }
  static get remoteConversationPageBinding24() {
    return remoteConversationPageBinding24;
  }
  static get remoteConversationPageBinding25() {
    return remoteConversationPageBinding25;
  }
}
