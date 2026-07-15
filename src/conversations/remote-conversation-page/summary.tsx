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

function remoteConversationPageUnit1(remoteConversationPageOperand5) {
  let {
      trigger,
      title,
      header,
      actions,
      disabled,
      align = "end",
      open,
      onOpenChange,
      footer,
      titleClassName,
      contentClassName,
      contentWidth = "panel",
      context
    } = remoteConversationPageOperand5,
    remoteConversationPageBinding149 = !!context?.results,
    [remoteConversationPageBinding150, remoteConversationPageBinding151] = remoteConversationPageBinding3.useState(context?.targets[0] ?? null);
  if (!context?.targets?.length) return null;
  let remoteConversationPageBinding152 = context?.targets?.some(remoteConversationPageOperand111 => remoteConversationPageOperand111.gitRoot === remoteConversationPageBinding150?.gitRoot) ? remoteConversationPageBinding150 : context.targets[0] ?? null,
    remoteConversationPageBinding154 = header ?? React.createElement(worktreeNewThreadQueryCompatSlotLowerNLowerO.Title, {
      className: worktreeNewThreadQueryCompatSlotLowerMLowerH("leading-relaxed font-medium whitespace-normal break-words text-token-foreground", titleClassName)
    }, title);
  let remoteConversationPageBinding155 = !context.results && context?.targets?.map(remoteConversationPageOperand25 => React.createElement(worktreeNewThreadQueryCompatSlotLowerNLowerO.Item, {
    key: remoteConversationPageOperand25.gitRoot,
    LeftIcon: worktreeNewThreadQueryCompatSlotUpperQLowerS,
    onClick: event => {
      event.preventDefault();
      event.stopPropagation();
      remoteConversationPageBinding151(remoteConversationPageOperand25);
    },
    RightIcon: remoteConversationPageOperand25.gitRoot === remoteConversationPageBinding152?.gitRoot ? worktreeNewThreadQueryCompatSlotUpperOLowerP : undefined
  }, <div className="flex flex-col truncate" title={remoteConversationPageOperand25.gitRoot ?? undefined}>
              <span className="flex gap-1 truncate">
                <span className="truncate font-medium">
                  {remoteConversationPageOperand25.label}
                </span>
              </span>
              {remoteConversationPageOperand25.subtitle ? <span className="truncate text-token-description-foreground">
                  {remoteConversationPageOperand25.subtitle}
                </span> : null}
            </div>));
  let remoteConversationPageBinding156 = remoteConversationPageBinding149 ? React.createElement(remoteConversationPageUnit3, {
    appliedPaths: context?.results?.appliedPaths ?? [],
    skippedPaths: context?.results?.skippedPaths ?? [],
    conflictedPaths: context?.results?.conflictedPaths ?? []
  }) : null;
  let remoteConversationPageBinding157 = <div className="flex flex-col gap-px">
      {remoteConversationPageBinding155}
      {remoteConversationPageBinding156}
    </div>;
  let remoteConversationPageBinding158 = remoteConversationPageUnit2(actions) ? <>
      {React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
      size: "toolbar",
      color: actions.primary.color,
      className: "justify-center",
      onClick: () => {
        remoteConversationPageBinding152 && actions.primary.onClick(remoteConversationPageBinding152);
      },
      disabled: actions.primary.disabled || !remoteConversationPageBinding152,
      loading: actions.primary.loading
    }, actions.primary.label)}
      {actions.secondary ? React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
      size: "toolbar",
      color: actions.secondary.color,
      className: "justify-center",
      onClick: () => {
        remoteConversationPageBinding152 && actions.secondary?.onClick(remoteConversationPageBinding152);
      },
      disabled: actions.secondary.disabled || !remoteConversationPageBinding152,
      loading: actions.secondary.loading
    }, actions.secondary.label) : null}
    </> : actions;
  let remoteConversationPageBinding159 = React.createElement(worktreeNewThreadQueryCompatSlotLowerNLowerO.Section, {
    className: "mt-1 flex flex-col gap-1"
  }, remoteConversationPageBinding158);
  let remoteConversationPageBinding160 = footer ? React.createElement(worktreeNewThreadQueryCompatSlotLowerNLowerO.Section, {
    className: "mt-2"
  }, footer) : null;
  return React.createElement(worktreeNewThreadQueryCompatSlotLowerELowerO, {
    align: align,
    disabled,
    open,
    onOpenChange,
    surface: "panel",
    contentWidth: contentWidth,
    contentClassName,
    triggerButton: trigger
  }, remoteConversationPageBinding154, remoteConversationPageBinding157, remoteConversationPageBinding159, remoteConversationPageBinding160);
}
function remoteConversationPageUnit2(remoteConversationPageOperand96) {
  return !!(remoteConversationPageOperand96 && typeof remoteConversationPageOperand96 == "object" && "primary" in remoteConversationPageOperand96);
}
function remoteConversationPageUnit3(remoteConversationPageOperand16) {
  let {
    appliedPaths,
    skippedPaths,
    conflictedPaths
  } = remoteConversationPageOperand16;
  if (!(appliedPaths.length + skippedPaths.length + conflictedPaths.length > 0)) {
    let remoteConversationPageBinding473;
    return <div className="p-2 text-sm text-token-description-foreground">
        {React.createElement(currentAppInitialSharedMember0924, {
        id: "codex.applyDropdown.results.empty",
        defaultMessage: "No files were copied",
        description: "Fallback text when no files were applied from an apply operation"
      })}
      </div>;
  }
  let remoteConversationPageBinding340 = React.createElement(remoteConversationPageUnit4, {
    paths: appliedPaths,
    className: "text-token-description-foreground",
    Icon: worktreeNewThreadQueryCompatSlotUpperOLowerP
  });
  let remoteConversationPageBinding341 = React.createElement(currentAppInitialSharedMember0924, {
    id: "codex.applyDropdown.results.skipped",
    defaultMessage: "{count, plural, one {1 file skipped:} other {{count} files skipped:}}",
    description: "Heading for skipped files after apply",
    values: {
      count: skippedPaths.length
    }
  });
  let remoteConversationPageBinding342 = React.createElement(remoteConversationPageUnit4, {
    label: remoteConversationPageBinding341,
    paths: skippedPaths,
    className: "text-token-description-foreground",
    Icon: worktreeNewThreadQueryCompatSlotUpperOLowerP
  });
  let remoteConversationPageBinding343 = React.createElement(currentAppInitialSharedMember0924, {
    id: "codex.applyDropdown.results.conflicted",
    defaultMessage: "{count, plural, one {1 file conflicted:} other {{count} files conflicted:}}",
    description: "Heading for conflicted files after apply",
    values: {
      count: conflictedPaths.length
    }
  });
  let remoteConversationPageBinding344 = React.createElement(remoteConversationPageUnit4, {
    label: remoteConversationPageBinding343,
    paths: conflictedPaths,
    className: "text-token-editor-warning-foreground",
    Icon: worktreeNewThreadQueryCompatSlotUpperOLowerP
  });
  return <div className="vertical-scroll-fade-mask flex max-h-64 flex-col gap-3 overflow-y-auto rounded-lg p-2">
      {remoteConversationPageBinding340}
      {remoteConversationPageBinding342}
      {remoteConversationPageBinding344}
    </div>;
}
function remoteConversationPageUnit4(remoteConversationPageOperand27) {
  let {
    label,
    paths,
    className,
    Icon
  } = remoteConversationPageOperand27;
  if (paths.length === 0) return null;
  let remoteConversationPageBinding412 = worktreeNewThreadQueryCompatSlotLowerMLowerH("flex flex-col gap-1.5 text-sm", className);
  let remoteConversationPageBinding413 = label ? <div className="whitespace-nowrap text-token-description-foreground">
      {label}
    </div> : null;
  let remoteConversationPageBinding414;
  {
    let remoteConversationPageBinding499;
    remoteConversationPageBinding499 = remoteConversationPageOperand105 => React.createElement(remoteConversationPageUnit5, {
      key: remoteConversationPageOperand105,
      filePath: remoteConversationPageOperand105,
      Icon
    });
    remoteConversationPageBinding414 = paths.map(remoteConversationPageBinding499);
  }
  return <div className={remoteConversationPageBinding412}>
      {remoteConversationPageBinding413}
      {remoteConversationPageBinding414}
    </div>;
}
function remoteConversationPageUnit5(remoteConversationPageOperand28) {
  let {
      filePath,
      Icon
    } = remoteConversationPageOperand28,
    remoteConversationPageBinding417 = remoteConversationPageBinding2.default.basename(filePath);
  let remoteConversationPageBinding418 = remoteConversationPageBinding417,
    remoteConversationPageBinding419 = remoteConversationPageBinding2.default.basename(remoteConversationPageBinding2.default.dirname(filePath));
  let remoteConversationPageBinding420 = remoteConversationPageBinding419,
    remoteConversationPageBinding421 = remoteConversationPageBinding420 && remoteConversationPageBinding420 !== "." ? `${remoteConversationPageBinding420}/${remoteConversationPageBinding418}` : remoteConversationPageBinding418,
    remoteConversationPageBinding422 = <Icon className="icon-2xs shrink-0" />;
  let remoteConversationPageBinding423 = <span className="truncate">{remoteConversationPageBinding421}</span>;
  return <div className="flex items-center gap-2 truncate text-base text-token-foreground" title={filePath}>
      {remoteConversationPageBinding422}
      {remoteConversationPageBinding423}
    </div>;
}
var remoteConversationPageBinding1,
  remoteConversationPageBinding2,
  remoteConversationPageBinding3,
  remoteConversationPageBinding4,
  remoteConversationPageBinding5 = once(() => {
    remoteConversationPageBinding1 = currentAppInitialSharedCompatSlotLowerGLowerC();
    remoteConversationPageBinding2 = toEsModule(currentAppInitialSharedCompatSlotUpperNLowerI(), 1);
    worktreeNewThreadQueryCompatSlotLowerHLowerH();
    remoteConversationPageBinding3 = toEsModule(currentAppInitialSharedCompatSlotUnderscoreLowerC(), 1);
    intlFormatDateTimeRuntime();
    worktreeNewThreadQueryCompatSlotUpperELowerM();
    worktreeNewThreadQueryCompatSlotLowerOLowerO();
    worktreeNewThreadQueryCompatSlotDollarLowerS();
    worktreeNewThreadQueryCompatSlotLowerKLowerP();
    worktreeNewThreadQueryCompatSlotLowerSLowerP();
    remoteConversationPageBinding4 = currentAppInitialSharedCompatSlotLowerLLowerC();
  }),
  remoteConversationPageBinding6,
  remoteConversationPageBinding7,
  remoteConversationPageBinding8 = once(() => {
    toEsModule(currentAppInitialSharedCompatSlotUnderscoreLowerC());
    remoteConversationPageBinding6 = currentAppInitialSharedCompatSlotLowerLLowerC();
    remoteConversationPageBinding7 = remoteConversationPageOperand9 => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...remoteConversationPageOperand9}>
        <path d="M14.6602 11.3291C14.8874 11.1024 15.2382 11.0739 15.4961 11.2441L15.6006 11.3291L18.0508 13.7793C18.1754 13.904 18.2451 14.0737 18.2451 14.25C18.2451 14.4261 18.1751 14.5951 18.0508 14.7197L15.6006 17.1699L15.4961 17.2549C15.238 17.4255 14.8875 17.3971 14.6602 17.1699C14.4006 16.9102 14.4005 16.4892 14.6602 16.2295L15.9736 14.915H12.3301C11.9629 14.915 11.6651 14.6172 11.665 14.25C11.6651 13.8828 11.9629 13.585 12.3301 13.585H15.9746L14.6602 12.2705L14.5742 12.166C14.4039 11.9079 14.433 11.5563 14.6602 11.3291Z" fill="currentColor" />
        <path d="M7.6211 2.84082L7.875 2.86719C8.46133 2.95309 9.01189 3.20874 9.45703 3.60547L9.70215 3.84473C9.81425 3.95779 9.85105 3.99455 9.88672 4.02637L9.99805 4.11719C10.2646 4.3174 10.5851 4.43638 10.9199 4.45703L11.1797 4.45996H13.6914C14.2499 4.45996 14.703 4.45958 15.0713 4.48535C15.4458 4.51157 15.7828 4.56683 16.1025 4.70313L16.3662 4.83106C16.9638 5.15706 17.4378 5.67623 17.707 6.30762L17.7939 6.54981C17.868 6.79538 17.904 7.05317 17.9238 7.33203C17.9498 7.69789 17.9502 8.14747 17.9502 8.7002C17.9501 8.87631 17.8803 9.0453 17.7559 9.16992C17.6311 9.29464 17.4615 9.36524 17.2852 9.36524H3.4502V12.7002C3.4502 13.3761 3.45084 13.8434 3.48047 14.2061C3.50947 14.5608 3.56304 14.7568 3.63672 14.9014L3.70215 15.0195C3.86642 15.2873 4.10236 15.505 4.38379 15.6484L4.50391 15.7002C4.63661 15.7476 4.8133 15.783 5.0791 15.8047C5.44174 15.8343 5.90904 15.835 6.58496 15.835H9L9.13477 15.8486C9.43762 15.9108 9.66504 16.1788 9.66504 16.5C9.66504 16.8212 9.43763 17.0892 9.13477 17.1514L9 17.165H6.58496C5.93097 17.165 5.40006 17.1659 4.97071 17.1309C4.5885 17.0996 4.24191 17.0373 3.91797 16.8984L3.78028 16.834C3.27979 16.579 2.86045 16.191 2.56836 15.7148L2.45117 15.5049C2.26619 15.1417 2.19002 14.7513 2.1543 14.3145C2.11922 13.8851 2.12012 13.3542 2.12012 12.7002V7.29981C2.12012 6.64581 2.11922 6.1149 2.1543 5.68555C2.19002 5.24867 2.26619 4.85831 2.45117 4.49512L2.56836 4.28516C2.86045 3.80898 3.27979 3.42103 3.78028 3.16602L3.91797 3.10156C4.24191 2.96268 4.5885 2.90039 4.97071 2.86914C5.40006 2.83406 5.93097 2.83496 6.58496 2.83496H7.28028C7.42346 2.83496 7.52306 2.83479 7.6211 2.84082ZM6.58496 4.16504C5.90904 4.16504 5.44174 4.16569 5.0791 4.19531C4.8133 4.21705 4.63661 4.25237 4.50391 4.29981L4.38379 4.35156C4.10236 4.49499 3.86642 4.71271 3.70215 4.98047L3.63672 5.09863C3.56304 5.24324 3.50947 5.43924 3.48047 5.79395C3.45084 6.15659 3.4502 6.62388 3.4502 7.29981V8.03516H16.6172C16.6146 7.79548 16.6098 7.59777 16.5977 7.42676C16.5816 7.20054 16.5552 7.04845 16.5205 6.9336L16.4834 6.8291C16.332 6.47411 16.0655 6.1824 15.7295 5.99903L15.5811 5.92676C15.4545 5.8728 15.2835 5.83385 14.9785 5.8125C14.6674 5.79073 14.2686 5.79004 13.6914 5.79004H11.1797L10.8379 5.78418C10.2426 5.74746 9.67313 5.53663 9.19922 5.18067L9.00196 5.01953C8.92848 4.95403 8.85889 4.88222 8.75781 4.78028L8.57227 4.59863C8.32169 4.37525 8.01175 4.23086 7.68164 4.18262L7.54004 4.16797C7.49225 4.16502 7.43986 4.16504 7.28028 4.16504H6.58496Z" fill="currentColor" />
      </svg>;
  }),
  remoteConversationPageBinding9,
  remoteConversationPageBinding10,
  remoteConversationPageBinding11 = once(() => {
    toEsModule(currentAppInitialSharedCompatSlotUnderscoreLowerC());
    remoteConversationPageBinding9 = currentAppInitialSharedCompatSlotLowerLLowerC();
    remoteConversationPageBinding10 = remoteConversationPageOperand22 => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...remoteConversationPageOperand22}>
        <path d="M3.24023 5.82812C3.22357 5.9231 3.20784 6.03267 3.19727 6.16211C3.16593 6.54563 3.16504 7.03896 3.16504 7.75V12.25C3.16504 12.961 3.16593 13.4544 3.19727 13.8379C3.22797 14.2136 3.28473 14.425 3.36523 14.583C3.54116 14.9283 3.82175 15.2088 4.16699 15.3848C4.325 15.4653 4.53641 15.522 4.91211 15.5527C5.29563 15.5841 5.78896 15.585 6.5 15.585H12.9971L14.3232 16.9111C14.0722 16.914 13.7985 16.915 13.5 16.915H6.5C5.81091 16.915 5.25395 16.9157 4.80371 16.8789C4.34592 16.8415 3.94009 16.7621 3.56348 16.5703C2.96794 16.2669 2.48313 15.7821 2.17969 15.1865C1.98788 14.8099 1.90851 14.4041 1.87109 13.9463C1.83431 13.496 1.83496 12.9391 1.83496 12.25V7.75C1.83496 7.06091 1.83431 6.50395 1.87109 6.05371C1.90851 5.59592 1.98788 5.19009 2.17969 4.81348C2.18485 4.80335 2.19005 4.79326 2.19531 4.7832L3.24023 5.82812ZM13.5 3.08496C14.1891 3.08496 14.746 3.08431 15.1963 3.12109C15.6541 3.15851 16.0599 3.23788 16.4365 3.42969C17.0321 3.73313 17.5169 4.21794 17.8203 4.81348C18.0121 5.19009 18.0915 5.59592 18.1289 6.05371C18.1657 6.50395 18.165 7.06091 18.165 7.75V12.25C18.165 12.9391 18.1657 13.496 18.1289 13.9463C18.0915 14.4041 18.0121 14.8099 17.8203 15.1865C17.8152 15.1965 17.8089 15.2059 17.8037 15.2158L16.7588 14.1709C16.7754 14.0761 16.7922 13.967 16.8027 13.8379C16.8341 13.4544 16.835 12.961 16.835 12.25V7.75C16.835 7.03896 16.8341 6.54563 16.8027 6.16211C16.772 5.78641 16.7153 5.575 16.6348 5.41699C16.4588 5.07175 16.1783 4.79116 15.833 4.61523C15.675 4.53473 15.4636 4.47797 15.0879 4.44727C14.7044 4.41593 14.211 4.41504 13.5 4.41504H7.00293L5.67578 3.08789C5.92704 3.08503 6.20109 3.08496 6.5 3.08496H13.5ZM11.7373 14.3252H6.66699C6.29978 14.3252 6.00205 14.0273 6.00195 13.6602C6.00195 13.2929 6.29972 12.9951 6.66699 12.9951H10.4072L11.7373 14.3252Z" fill="currentColor" />
        <path d="M2 2L18 18" stroke="currentColor" strokeWidth={1.33} strokeLinecap="round" />
      </svg>;
  });
function remoteConversationPageUnit6(remoteConversationPageOperand8) {
  let {
      turnId,
      diff,
      taskEnvironment
    } = remoteConversationPageOperand8,
    remoteConversationPageBinding233 = currentAppInitialSharedCompatSlotUpperKLowerO(reactRouterMember0297),
    remoteConversationPageBinding234 = currentAppInitialSharedCompatSlotUpperGLowerO(worktreeNewThreadQueryCompatSlotLowerILowerD, turnId),
    remoteConversationPageBinding235 = worktreeNewThreadQueryCompatSlotLowerBLowerD(taskEnvironment),
    remoteConversationPageBinding236 = appgenLibraryHotDjo67r4nCompatSlotLowerELowerT(remoteConversationPageBinding235 == null ? undefined : taskEnvironment?.repo_map?.[remoteConversationPageBinding235]?.clone_url),
    remoteConversationPageBinding237 = currentAppInitialSharedMember0011(currentAppInitialSharedMember0542),
    {
      data = null
    } = openThreadBrowserSidePanelTabWithPendingState(remoteConversationPageBinding236, remoteConversationPageBinding237, "remote_conversation_apply_diff"),
    {
      data: _data
    } = worktreeNewThreadQueryCompatSlotLowerHLowerF(),
    remoteConversationPageBinding238 = currentAppInitialSharedFunction0375(),
    remoteConversationPageBinding239;
  bb0: {
    if (!taskEnvironment) {
      remoteConversationPageBinding239 = false;
      break bb0;
    }
    if (!_data || _data.length === 0) {
      remoteConversationPageBinding239 = true;
      break bb0;
    }
    let remoteConversationPageBinding483;
    {
      let remoteConversationPageBinding502;
      remoteConversationPageBinding502 = remoteConversationPageOperand119 => remoteConversationPageOperand119.id === taskEnvironment.id;
      remoteConversationPageBinding483 = _data.some(remoteConversationPageBinding502);
    }
    remoteConversationPageBinding239 = !remoteConversationPageBinding483;
  }
  let remoteConversationPageBinding240 = remoteConversationPageBinding239,
    remoteConversationPageBinding241 = {
      open: false,
      result: null
    };
  let [remoteConversationPageBinding242, remoteConversationPageBinding243] = $r.useState(remoteConversationPageBinding241),
    remoteConversationPageBinding244 = {
      source: "remote_conversation_apply_diff",
      onSuccess(remoteConversationPageOperand44, remoteConversationPageOperand45) {
        let {
          revert = false
        } = remoteConversationPageOperand45;
        remoteConversationPageUnit7(revert, remoteConversationPageOperand44, remoteConversationPageBinding238, remoteConversationPageBinding233.get(worktreeNewThreadQueryCompatSlotLowerGLowerP));
        revert && remoteConversationPageOperand44.status === "success" ? worktreeNewThreadQueryCompatSlotLowerRLowerD(remoteConversationPageBinding233, turnId) : !revert && remoteConversationPageOperand44.status === "success" && worktreeNewThreadQueryCompatSlotLowerOLowerD(remoteConversationPageBinding233, turnId);
        remoteConversationPageOperand44.status !== "success" && remoteConversationPageBinding243({
          open: true,
          result: remoteConversationPageOperand44
        });
      },
      onError(remoteConversationPageOperand78, remoteConversationPageOperand79) {
        let {
          revert
        } = remoteConversationPageOperand79;
        remoteConversationPageUnit7(revert === undefined ? false : revert, {
          status: "error"
        }, remoteConversationPageBinding238, remoteConversationPageBinding233.get(worktreeNewThreadQueryCompatSlotLowerGLowerP));
      },
      onSettled(remoteConversationPageOperand60, remoteConversationPageOperand61, remoteConversationPageOperand62) {
        currentAppInitialSharedMember0386({
          cwd: remoteConversationPageOperand62.cwd,
          hostConfig: remoteConversationPageBinding237,
          operationSource: "remote_conversation_apply_diff",
          queryClient: remoteConversationPageBinding233.queryClient
        });
      }
    };
  let remoteConversationPageBinding245 = currentAppInitialSharedCompatSlotLowerU("apply-patch", remoteConversationPageBinding244),
    remoteConversationPageBinding246 = remoteConversationPageOperand83 => {
      remoteConversationPageBinding245.isPending || remoteConversationPageBinding236 && remoteConversationPageBinding245.mutate({
        diff,
        cwd: remoteConversationPageBinding236,
        hostConfig: remoteConversationPageBinding237,
        revert: remoteConversationPageOperand83
      });
    };
  let remoteConversationPageBinding247 = remoteConversationPageBinding246,
    remoteConversationPageBinding248 = !!remoteConversationPageBinding236,
    remoteConversationPageBinding249,
    remoteConversationPageBinding250;
  remoteConversationPageBinding249 = () => {
    remoteConversationPageBinding247(false);
  };
  remoteConversationPageBinding250 = () => {
    remoteConversationPageBinding247(true);
  };
  let remoteConversationPageBinding251 = remoteConversationPageOperand104 => {
    remoteConversationPageBinding243(remoteConversationPageOperand114 => ({
      ...remoteConversationPageOperand114,
      open: remoteConversationPageOperand104
    }));
  };
  let remoteConversationPageBinding252 = taskEnvironment?.label ?? null;
  return {
    hasAppliedCodeLocally: remoteConversationPageBinding234,
    canApply: remoteConversationPageBinding248,
    isApplying: remoteConversationPageBinding245.isPending,
    apply: remoteConversationPageBinding249,
    revert: remoteConversationPageBinding250,
    results: remoteConversationPageBinding242,
    setResultsOpen: remoteConversationPageBinding251,
    isNonWorkspaceEnvironment: remoteConversationPageBinding240,
    taskEnvironmentLabel: remoteConversationPageBinding252,
    gitRootPath: remoteConversationPageBinding236,
    branchName: data
  };
}
function remoteConversationPageUnit7(remoteConversationPageOperand18, remoteConversationPageOperand19, remoteConversationPageOperand20, remoteConversationPageOperand21) {
  if (remoteConversationPageOperand19.status === "error" && remoteConversationPageOperand19.errorCode === "not-git-repo") {
    remoteConversationPageOperand21.danger(remoteConversationPageOperand20.formatMessage(remoteConversationPageOperand18 ? {
      id: "codex.diffView.revertPatchNotGitRepo",
      defaultMessage: "Revert requires a Git repository",
      description: "Toast shown when reverting patch outside a Git repository"
    } : {
      id: "codex.diffView.applyPatchNotGitRepo",
      defaultMessage: "Apply requires a Git repository",
      description: "Toast shown when applying patch outside a Git repository"
    }), {
      id: "patch"
    });
    return;
  }
  let {
    status
  } = remoteConversationPageOperand19;
  switch (status) {
    case "success":
      remoteConversationPageOperand21.success(remoteConversationPageOperand20.formatMessage(remoteConversationPageOperand18 ? {
        id: "codex.diffView.revertPatchSuccess",
        defaultMessage: "Changes reverted",
        description: "Toast shown when reverting patch succeeds"
      } : {
        id: "codex.diffView.applyPatchSuccess",
        defaultMessage: "Changes applied",
        description: "Toast shown when applying patch succeeds"
      }), {
        id: "patch"
      });
      break;
    case "partial-success":
      remoteConversationPageOperand21.warning(remoteConversationPageOperand20.formatMessage(remoteConversationPageOperand18 ? {
        id: "codex.diffView.revertPatchPartialSuccess",
        defaultMessage: "Changes partially reverted",
        description: "Toast shown when reverting patch partially succeeds"
      } : {
        id: "codex.diffView.applyPatchPartialSuccess",
        defaultMessage: "Changes partially applied",
        description: "Toast shown when applying patch partially succeeds"
      }), {
        id: "patch"
      });
      break;
    case "error":
      remoteConversationPageOperand21.danger(remoteConversationPageOperand20.formatMessage(remoteConversationPageOperand18 ? {
        id: "codex.diffView.revertPatchError",
        defaultMessage: "Failed to revert changes",
        description: "Toast shown when reverting patch fails"
      } : {
        id: "codex.diffView.applyPatchError",
        defaultMessage: "Failed to apply changes",
        description: "Toast shown when applying patch fails"
      }), {
        id: "patch"
      });
      break;
  }
}
var remoteConversationPageBinding12,
  $r,
  remoteConversationPageBinding13 = once(() => {
    remoteConversationPageBinding12 = currentAppInitialSharedCompatSlotLowerGLowerC();
    currentAppInitialSharedCompatSlotUpperVLowerO();
    $r = toEsModule(currentAppInitialSharedCompatSlotUnderscoreLowerC(), 1);
    intlFormatDateTimeRuntime();
    worktreeNewThreadQueryCompatSlotUpperJLowerD();
    worktreeNewThreadQueryCompatSlotLowerMLowerP();
    gitUpstreamBranchBaseRuntime();
    openThreadBrowserSidePanelTab();
    reactRouterRouteScopeParentRuntime();
    currentAppInitialSharedDisplayRuntime();
    appgenLibraryHotDjo67r4nCompatSlotDollar();
    worktreeNewThreadQueryCompatSlotLowerXLowerD();
    currentAppInitialSharedCompatSlotUnderscoreLowerC();
    worktreeNewThreadQueryCompatSlotLowerALowerD();
  });

export class RemoteConversationSummaryModule {
  static remoteConversationPageUnit1 = remoteConversationPageUnit1;
  static remoteConversationPageUnit2 = remoteConversationPageUnit2;
  static remoteConversationPageUnit3 = remoteConversationPageUnit3;
  static remoteConversationPageUnit4 = remoteConversationPageUnit4;
  static remoteConversationPageUnit5 = remoteConversationPageUnit5;
  static get remoteConversationPageBinding1() {
    return remoteConversationPageBinding1;
  }
  static get remoteConversationPageBinding2() {
    return remoteConversationPageBinding2;
  }
  static get remoteConversationPageBinding3() {
    return remoteConversationPageBinding3;
  }
  static get remoteConversationPageBinding4() {
    return remoteConversationPageBinding4;
  }
  static get remoteConversationPageBinding5() {
    return remoteConversationPageBinding5;
  }
  static get remoteConversationPageBinding6() {
    return remoteConversationPageBinding6;
  }
  static get remoteConversationPageBinding7() {
    return remoteConversationPageBinding7;
  }
  static get remoteConversationPageBinding8() {
    return remoteConversationPageBinding8;
  }
  static get remoteConversationPageBinding9() {
    return remoteConversationPageBinding9;
  }
  static get remoteConversationPageBinding10() {
    return remoteConversationPageBinding10;
  }
  static get remoteConversationPageBinding11() {
    return remoteConversationPageBinding11;
  }
  static remoteConversationPageUnit6 = remoteConversationPageUnit6;
  static remoteConversationPageUnit7 = remoteConversationPageUnit7;
  static get remoteConversationPageBinding12() {
    return remoteConversationPageBinding12;
  }
  static get $r() {
    return $r;
  }
  static get remoteConversationPageBinding13() {
    return remoteConversationPageBinding13;
  }
}
