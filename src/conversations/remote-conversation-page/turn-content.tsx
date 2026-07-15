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

function remoteConversationPageUnit8(remoteConversationPageOperand3) {
  let {
      turnId,
      diff,
      taskEnvironment
    } = remoteConversationPageOperand3,
    remoteConversationPageBinding118 = {
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
      taskEnvironmentLabel
    } = RemoteConversationSummaryModule.remoteConversationPageUnit6(remoteConversationPageBinding118),
    remoteConversationPageBinding119 = function (remoteConversationPageOperand29) {
      let {
        className
      } = remoteConversationPageOperand29;
      return taskEnvironmentLabel ? React.createElement(worktreeNewThreadQueryCompatSlotLowerYLowerP, {
        tooltipContent: <div className="max-w-[200px]">
                  {React.createElement(currentAppInitialSharedMember0924, {
            id: "codex.applyOrRevertBanner.applyMessageDifferentEnvironment.tooltip",
            defaultMessage: "Changes made in {environment} so may not apply cleanly.",
            description: "Banner warning the user that the Codex code changes they are viewing were made in a different environment and may not apply cleanly.",
            values: {
              environment: <code className="whitespace-nowrap">
                            {taskEnvironmentLabel}
                          </code>
            }
          })}
                </div>
      }, React.createElement(RemoteConversationSummaryModule.remoteConversationPageBinding10, {
        className
      })) : React.createElement(RemoteConversationSummaryModule.remoteConversationPageBinding10, {
        className
      });
    };
  let remoteConversationPageBinding120 = remoteConversationPageBinding119;
  if (hasAppliedCodeLocally) {
    let remoteConversationPageBinding314 = isNonWorkspaceEnvironment ? remoteConversationPageBinding120 : CloudTerminalIcon,
      remoteConversationPageBinding315 = <div className="truncate text-base">
          {React.createElement(currentAppInitialSharedMember0924, {
          id: "codex.applyOrRevertBanner.revertMessage",
          defaultMessage: "Revert applied changes?",
          description: "Banner message for reverting applied changes from Codex Cloud"
        })}
        </div>;
    let remoteConversationPageBinding316 = isNonWorkspaceEnvironment && taskEnvironmentLabel && React.createElement(remoteConversationPageUnit9, {
      taskEnvironmentName: taskEnvironmentLabel
    });
    let remoteConversationPageBinding317 = <div className="flex flex-col gap-0.5">
        {remoteConversationPageBinding315}
        {remoteConversationPageBinding316}
      </div>;
    let remoteConversationPageBinding318 = React.createElement(currentAppInitialSharedMember0924, {
      id: "codex.applyOrRevertBanner.revert",
      defaultMessage: "Revert",
      description: "Label to revert applied code changes from Codex"
    });
    let remoteConversationPageBinding319 = () => {
      revert();
    };
    let remoteConversationPageBinding320 = isApplying || !canApply,
      remoteConversationPageBinding321 = React.createElement(currentAppInitialSharedMember0924, {
        id: "codex.applyOrRevertBanner.reapply",
        defaultMessage: "Reapply",
        description: "Label to reapply code changes to Codex"
      });
    let remoteConversationPageBinding322 = () => {
      apply();
    };
    let remoteConversationPageBinding323 = isApplying || !canApply,
      remoteConversationPageBinding324 = <RemoteConversationShell Icon={remoteConversationPageBinding314} content={remoteConversationPageBinding317} primaryCtaText={remoteConversationPageBinding318} onPrimaryCtaClick={remoteConversationPageBinding319} isPrimaryCtaDisabled={remoteConversationPageBinding320} secondaryCtaText={remoteConversationPageBinding321} onSecondaryCtaClick={remoteConversationPageBinding322} isSecondaryCtaDisabled={remoteConversationPageBinding323} />;
    let remoteConversationPageBinding325 = React.createElement(remoteConversationPageUnit10, {
      open: results.open,
      result: results.result,
      onOpenChange: setResultsOpen
    });
    let remoteConversationPageBinding326;
    return <>
        {remoteConversationPageBinding324}
        {remoteConversationPageBinding325}
      </>;
  }
  let remoteConversationPageBinding121 = isNonWorkspaceEnvironment ? remoteConversationPageBinding120 : CloudTerminalIcon,
    remoteConversationPageBinding122 = <div className="text-base">
        {React.createElement(currentAppInitialSharedMember0924, {
        id: "codex.applyOrRevertBanner.applyMessage",
        defaultMessage: "Apply changes and continue locally?",
        description: "Banner message for applying changes to Codex locally"
      })}
      </div>;
  let remoteConversationPageBinding123 = isNonWorkspaceEnvironment && taskEnvironmentLabel && React.createElement(remoteConversationPageUnit9, {
    taskEnvironmentName: taskEnvironmentLabel
  });
  let remoteConversationPageBinding124 = <div className="flex flex-col gap-0.5">
      {remoteConversationPageBinding122}
      {remoteConversationPageBinding123}
    </div>;
  let remoteConversationPageBinding125 = React.createElement(currentAppInitialSharedMember0924, {
    id: "codex.applyOrRevertBanner.apply",
    defaultMessage: "Apply",
    description: "Label to apply code changes from Codex"
  });
  let remoteConversationPageBinding126 = () => {
    apply();
  };
  let remoteConversationPageBinding127 = isApplying || !canApply,
    remoteConversationPageBinding128 = <RemoteConversationShell Icon={remoteConversationPageBinding121} content={remoteConversationPageBinding124} primaryCtaText={remoteConversationPageBinding125} onPrimaryCtaClick={remoteConversationPageBinding126} isPrimaryCtaDisabled={remoteConversationPageBinding127} />;
  let remoteConversationPageBinding129 = React.createElement(remoteConversationPageUnit10, {
    open: results.open,
    result: results.result,
    onOpenChange: setResultsOpen
  });
  return <>
      {remoteConversationPageBinding128}
      {remoteConversationPageBinding129}
    </>;
}
function remoteConversationPageUnit9(remoteConversationPageOperand30) {
  let {
    taskEnvironmentName
  } = remoteConversationPageOperand30;
  return <div className="truncate text-base text-token-editor-warning-foreground">
      {React.createElement(currentAppInitialSharedMember0924, {
      id: "codex.applyOrRevertBanner.applyMessageDifferentEnvironment",
      defaultMessage: "This task was made in {environment} so may not apply cleanly.",
      description: "Banner warning the user that the Codex code changes they are viewing were made in a different environment and may not apply cleanly.",
      values: {
        environment: <code className="whitespace-nowrap">{taskEnvironmentName}</code>
      }
    })}
    </div>;
}
function remoteConversationPageUnit10(remoteConversationPageOperand4) {
  let {
      open,
      onOpenChange,
      result
    } = remoteConversationPageOperand4,
    remoteConversationPageBinding132 = currentAppInitialSharedFunction0375(),
    remoteConversationPageBinding133 = result?.appliedPaths ?? [];
  let remoteConversationPageBinding134 = remoteConversationPageBinding133,
    remoteConversationPageBinding135,
    remoteConversationPageBinding136,
    remoteConversationPageBinding137,
    remoteConversationPageBinding138,
    remoteConversationPageBinding139,
    remoteConversationPageBinding140,
    remoteConversationPageBinding141;
  {
    let remoteConversationPageBinding228 = result?.conflictedPaths ?? [],
      remoteConversationPageBinding229 = result?.skippedPaths ?? [],
      remoteConversationPageBinding230 = result?.errorCode === "not-git-repo",
      remoteConversationPageBinding231 = remoteConversationPageBinding134.length > 0 || remoteConversationPageBinding228.length > 0 || remoteConversationPageBinding229.length > 0;
    remoteConversationPageBinding136 = worktreeNewThreadQueryCompatSlotLowerWLowerO;
    remoteConversationPageBinding139 = open;
    remoteConversationPageBinding140 = onOpenChange;
    remoteConversationPageBinding141 = false;
    remoteConversationPageBinding135 = worktreeNewThreadQueryCompatSlotUnderscoreLowerA;
    remoteConversationPageBinding137 = React.createElement(worktreeNewThreadQueryCompatSlotLowerBLowerA, null, React.createElement(worktreeNewThreadQueryCompatSlotLowerYLowerA, {
      title: React.createElement(currentAppInitialSharedMember0924, {
        id: "codex.applyResultsDialog.title",
        defaultMessage: "Apply results",
        description: "Title for dialog showing apply patch results"
      })
    }));
    remoteConversationPageBinding138 = remoteConversationPageBinding231 ? React.createElement(worktreeNewThreadQueryCompatSlotLowerBLowerA, {
      className: "flex max-h-64 flex-col gap-3 overflow-y-auto pr-1"
    }, remoteConversationPageBinding134.length > 0 && <div className="flex flex-col gap-1">
                  <div className="font-medium">
                    {React.createElement(currentAppInitialSharedMember0924, {
          id: "codex.applyResultsDialog.applied",
          defaultMessage: "Applied cleanly ({count})",
          description: "Heading for applied paths",
          values: {
            count: remoteConversationPageBinding134.length
          }
        })}
                  </div>
                  <ul>
                    {remoteConversationPageBinding134.map(remoteConversationPageUnit13)}
                  </ul>
                </div>, remoteConversationPageBinding228.length > 0 && <div className="flex flex-col gap-1">
                  <div className="font-medium text-token-charts-red">
                    {remoteConversationPageBinding132.formatMessage({
          id: "codex.applyResultsDialog.conflicted",
          defaultMessage: "Conflicted ({count})",
          description: "Heading for conflicted paths"
        }, {
          count: remoteConversationPageBinding228.length
        })}
                  </div>
                  <ul>
                    {remoteConversationPageBinding228.map(remoteConversationPageUnit12)}
                  </ul>
                </div>, remoteConversationPageBinding229.length > 0 && <div className="flex flex-col gap-1">
                  <div className="font-medium text-token-description-foreground">
                    {remoteConversationPageBinding132.formatMessage({
          id: "codex.applyResultsDialog.skipped",
          defaultMessage: "Skipped ({count})",
          description: "Heading for skipped paths"
        }, {
          count: remoteConversationPageBinding229.length
        })}
                  </div>
                  <ul>
                    {remoteConversationPageBinding229.map(remoteConversationPageUnit11)}
                  </ul>
                </div>) : React.createElement(worktreeNewThreadQueryCompatSlotLowerBLowerA, {
      className: "text-token-description-foreground"
    }, <p>
                {remoteConversationPageBinding230 ? React.createElement(currentAppInitialSharedMember0924, {
        id: "codex.applyResultsDialog.notGitRepo",
        defaultMessage: "This action only works when running in a Git repository.",
        description: "Shown when apply/revert fails because the workspace is not in a Git repository"
      }) : React.createElement(currentAppInitialSharedMember0924, {
        id: "codex.applyResultsDialog.noDetails",
        defaultMessage: "No file details available.",
        description: "Shown when there are no file-level results to display"
      })}
              </p>);
  }
  let remoteConversationPageBinding142 = () => onOpenChange(false);
  let remoteConversationPageBinding143 = React.createElement(currentAppInitialSharedMember0924, {
    id: "codex.applyResultsDialog.close",
    defaultMessage: "Close",
    description: "Close button for apply results dialog"
  });
  let remoteConversationPageBinding144 = React.createElement(worktreeNewThreadQueryCompatSlotLowerBLowerA, null, React.createElement(worktreeNewThreadQueryCompatSlotLowerVLowerA, null, React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
    color: "outline",
    onClick: remoteConversationPageBinding142
  }, remoteConversationPageBinding143)));
  let remoteConversationPageBinding145 = React.createElement(remoteConversationPageBinding135, null, remoteConversationPageBinding137, remoteConversationPageBinding138, remoteConversationPageBinding144);
  return React.createElement(remoteConversationPageBinding136, {
    open: remoteConversationPageBinding139,
    onOpenChange: remoteConversationPageBinding140,
    triggerAsChild: remoteConversationPageBinding141
  }, remoteConversationPageBinding145);
}
function remoteConversationPageUnit11(remoteConversationPageOperand84) {
  return <li key={remoteConversationPageOperand84} className="truncate" title={remoteConversationPageOperand84}>
      {remoteConversationPageOperand84}
    </li>;
}
function remoteConversationPageUnit12(remoteConversationPageOperand85) {
  return <li key={remoteConversationPageOperand85} className="truncate" title={remoteConversationPageOperand85}>
      {remoteConversationPageOperand85}
    </li>;
}
function remoteConversationPageUnit13(remoteConversationPageOperand86) {
  return <li key={remoteConversationPageOperand86} className="truncate" title={remoteConversationPageOperand86}>
      {remoteConversationPageOperand86}
    </li>;
}
var remoteConversationPageBinding14,
  remoteConversationPageBinding15,
  remoteConversationPageBinding16 = once(() => {
    remoteConversationPageBinding14 = currentAppInitialSharedCompatSlotLowerGLowerC();
    intlFormatDateTimeRuntime();
    appMainCurrentCompatSlotLowerQLowerT();
    worktreeNewThreadQueryCompatSlotUpperELowerM();
    worktreeNewThreadQueryCompatSlotUpperDLowerO();
    worktreeNewThreadQueryCompatSlotUpperCLowerA();
    worktreeNewThreadQueryCompatSlotLowerXLowerP();
    initCloudTerminalIconChunk();
    RemoteConversationSummaryModule.remoteConversationPageBinding11();
    RemoteConversationSummaryModule.remoteConversationPageBinding13();
    remoteConversationPageBinding15 = currentAppInitialSharedCompatSlotLowerLLowerC();
  });

export class RemoteConversationTurnContentModule {
  static remoteConversationPageUnit8 = remoteConversationPageUnit8;
  static remoteConversationPageUnit9 = remoteConversationPageUnit9;
  static remoteConversationPageUnit10 = remoteConversationPageUnit10;
  static remoteConversationPageUnit11 = remoteConversationPageUnit11;
  static remoteConversationPageUnit12 = remoteConversationPageUnit12;
  static remoteConversationPageUnit13 = remoteConversationPageUnit13;
  static get remoteConversationPageBinding14() {
    return remoteConversationPageBinding14;
  }
  static get remoteConversationPageBinding15() {
    return remoteConversationPageBinding15;
  }
  static get remoteConversationPageBinding16() {
    return remoteConversationPageBinding16;
  }
}
