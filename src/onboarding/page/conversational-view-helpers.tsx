// Restored from ref/webview/assets/onboarding-page-DtzKDTbH.js
// Onboarding page split module restored from the current Codex webview chunk.
import React from "react";
import { once, toEsModule } from "../../runtime/commonjs-interop";
import { currentAppInitialSharedCompatSlotLowerA, currentAppInitialSharedCompatSlotUpperC, currentAppInitialSharedCompatSlotLowerCLowerC, currentAppInitialSharedCompatSlotLowerCLowerT, currentAppInitialSharedCompatSlotUpperD, currentAppInitialSharedCompatSlotUpperE, currentAppInitialSharedCompatSlotUpperELowerO, currentAppInitialSharedCompatSlotLowerGLowerC, currentAppInitialSharedCompatSlotUpperGLowerO, currentAppInitialSharedCompatSlotUpperGLowerS, currentAppInitialSharedCompatSlotLowerI, currentAppInitialSharedCompatSlotLowerJLowerA, currentAppInitialSharedCompatSlotLowerJLowerO, currentAppInitialSharedCompatSlotUpperJLowerS, currentAppInitialSharedCompatSlotUpperKLowerO, currentAppInitialSharedCompatSlotLowerLLowerC, currentAppInitialSharedCompatSlotUpperLLowerS, currentAppInitialSharedCompatSlotLowerMLowerO, currentAppInitialSharedCompatSlotUpperO, currentAppInitialSharedCompatSlotLowerOLowerC, currentAppInitialSharedCompatSlotLowerQLowerO, currentAppInitialSharedCompatSlotUpperRLowerS, currentAppInitialSharedCompatSlotDollarLowerS, currentAppInitialSharedCompatSlotUpperSLowerO, currentAppInitialSharedCompatSlotLowerSLowerT, currentAppInitialSharedCompatSlotLowerTLowerR, currentAppInitialSharedCompatSlotUpperULowerO, currentAppInitialSharedCompatSlotUpperVLowerO, currentAppInitialSharedCompatSlotUpperYLowerS, currentAppInitialSharedCompatSlotUpperZ } from "../../runtime/current-app-initial/current-app-initial-shared-runtime";
import { worktreeNewThreadOrchestratorCompatSlotLowerALowerA, worktreeNewThreadOrchestratorCompatSlotLowerSLowerA, worktreeNewThreadOrchestratorCompatSlotUpperXLowerI, worktreeNewThreadOrchestratorCompatSlotUpperZLowerI } from "../../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import { worktreeNewThreadQueryCompatSlotUnderscoreLowerA, worktreeNewThreadQueryCompatSlotUpperALowerN, worktreeNewThreadQueryCompatSlotLowerBLowerA, worktreeNewThreadQueryCompatSlotUpperBLowerC, worktreeNewThreadQueryCompatSlotUpperCLowerA, worktreeNewThreadQueryCompatSlotLowerCLowerO, worktreeNewThreadQueryCompatSlotUpperDLowerM, worktreeNewThreadQueryCompatSlotUpperDLowerO, worktreeNewThreadQueryCompatSlotUpperDLowerP, worktreeNewThreadQueryCompatSlotLowerELowerF, worktreeNewThreadQueryCompatSlotUpperELowerM, worktreeNewThreadQueryCompatSlotUpperELowerO, worktreeNewThreadQueryCompatSlotUpperELowerP, worktreeNewThreadQueryCompatSlotLowerHLowerH, worktreeNewThreadQueryCompatSlotUpperHLowerM, worktreeNewThreadQueryCompatSlotDollarLowerI, worktreeNewThreadQueryCompatSlotLowerILowerC, worktreeNewThreadQueryCompatSlotUpperILowerF, worktreeNewThreadQueryCompatSlotLowerILowerH, worktreeNewThreadQueryCompatSlotLowerILowerS, worktreeNewThreadQueryCompatSlotUpperJLowerD, worktreeNewThreadQueryCompatSlotLowerKLowerN, worktreeNewThreadQueryCompatSlotLowerKLowerP, worktreeNewThreadQueryCompatSlotUpperLLowerF, worktreeNewThreadQueryCompatSlotLowerMLowerH, worktreeNewThreadQueryCompatSlotUpperNLowerC, worktreeNewThreadQueryCompatSlotUpperNLowerN, worktreeNewThreadQueryCompatSlotLowerNLowerS, worktreeNewThreadQueryCompatSlotUpperOLowerM, worktreeNewThreadQueryCompatSlotUpperOLowerP, worktreeNewThreadQueryCompatSlotUpperPLowerN, worktreeNewThreadQueryCompatSlotUpperQLowerI, worktreeNewThreadQueryCompatSlotUpperQLowerM, worktreeNewThreadQueryCompatSlotUnderscoreLowerR, worktreeNewThreadQueryCompatSlotLowerSLowerC, worktreeNewThreadQueryCompatSlotLowerSLowerO, worktreeNewThreadQueryCompatSlotUpperTLowerM, worktreeNewThreadQueryCompatSlotUpperTLowerO, worktreeNewThreadQueryCompatSlotLowerVLowerA, worktreeNewThreadQueryCompatSlotLowerVLowerR, worktreeNewThreadQueryCompatSlotLowerWLowerO, worktreeNewThreadQueryCompatSlotUpperXLowerM, worktreeNewThreadQueryCompatSlotLowerXLowerP, worktreeNewThreadQueryCompatSlotLowerYLowerA, worktreeNewThreadQueryCompatSlotLowerYLowerP, worktreeNewThreadQueryCompatSlotLowerZLowerM } from "../../runtime/current-app-initial/worktree-new-thread-query-runtime";
import { imagePickerSchemaCapabilities, currentAppInitialSharedMember0495, currentAppInitialSharedMember0542, parseWorkspaceRootPathList, intlFormatDateTimeRuntime, currentAppInitialSharedMember0180, remoteControlRefreshSourceEnum, currentAppInitialSharedMember0730, currentAppInitialSharedMember0273, currentAppInitialSharedMember0749, currentAppInitialSharedDisplayRuntime, statsigFunction0290, remoteConnectionRuntime0298, currentAppInitialSharedMember0781, currentAppInitialSharedMember0320, currentAppInitialSharedRuntime0816, reactRouterRuntime0849, currentAppInitialSharedFunction0375, openAiNativeAppDefinition, currentAppInitialSharedMember0396, currentAppInitialSharedMember0885, currentAppInitialSharedMember0903, currentAppInitialSharedMember0431, currentAppInitialSharedMember0924 } from "../../runtime/current-app-initial/remote-projects-app-shared-runtime";
import { initWindowVisibilitySignal, windowVisibleSignal } from "../../vendor/automations-page-current-runtime";
import { appMainCurrentCompatSlotUpperA, appMainCurrentCompatSlotLowerA, appMainCurrentCompatSlotLowerALowerP, appMainCurrentCompatSlotLowerALowerS, appMainCurrentCompatSlotLowerB, appMainCurrentCompatSlotUpperBLowerF, appMainCurrentCompatSlotUpperBLowerO, appMainCurrentCompatSlotUpperC, appMainCurrentCompatSlotLowerC, appMainCurrentCompatSlotUpperD, appMainCurrentCompatSlotUpperE, appMainCurrentCompatSlotLowerELowerS, appMainCurrentCompatSlotUpperF, appMainCurrentCompatSlotUpperFLowerI, appMainCurrentCompatSlotUpperGLowerF, appMainCurrentCompatSlotLowerGLowerS, appMainCurrentCompatSlotUpperILowerI, appMainCurrentCompatSlotLowerILowerS, appMainCurrentCompatSlotLowerK, appMainCurrentCompatSlotLowerLLowerP, declineConversationalOnboardingTask, getConversationalOnboardingWorkflowState, initConversationalOnboardingWorkflowStateChunk, resetConversationalOnboardingWorkflowState, appMainCurrentCompatSlotUpperNLowerP, appMainCurrentCompatSlotLowerNLowerS, appMainCurrentCompatSlotDollarLowerO, appMainCurrentCompatSlotLowerO, appMainCurrentCompatSlotLowerOLowerP, appMainCurrentCompatSlotLowerOLowerS, selectConversationalOnboardingTask, setConversationalOnboardingPermissionStatus, appMainCurrentCompatSlotUpperPLowerP, appMainCurrentCompatSlotLowerQLowerF, appMainCurrentCompatSlotUpperQLowerO, appMainCurrentCompatSlotLowerR, appMainCurrentCompatSlotLowerRLowerS, appMainCurrentCompatSlotUpperS, appMainCurrentCompatSlotLowerS, appMainCurrentCompatSlotUpperSLowerS, appMainCurrentCompatSlotUpperT, appMainCurrentCompatSlotLowerT as OnboardingStepView, appMainCurrentCompatSlotLowerTLowerS, appMainCurrentCompatSlotLowerU, appMainCurrentCompatSlotUnderscore, appMainCurrentCompatSlotUpperULowerP, appMainCurrentCompatSlotLowerV, appMainCurrentCompatSlotUpperVLowerF, appMainCurrentCompatSlotLowerVLowerS, appMainCurrentCompatSlotLowerW, browserTabIdForConversation, appMainCurrentCompatSlotLowerX, appMainCurrentCompatSlotUpperXLowerD, appMainCurrentCompatSlotUpperXLowerO, appMainCurrentCompatSlotLowerY, appMainCurrentCompatSlotUpperYLowerF, appMainCurrentCompatSlotUpperYLowerO, appMainCurrentCompatSlotLowerYLowerS, appMainCurrentCompatSlotUpperZLowerD, appMainCurrentCompatSlotUpperZLowerO } from "../../vendor/app-main-current-runtime";
import { appgenLibraryHotDjo67r4nCompatSlotLowerELowerN, appgenLibraryHotDjo67r4nCompatSlotLowerGLowerN, appgenLibraryHotDjo67r4nCompatSlotUpperI, appgenLibraryHotDjo67r4nCompatSlotLowerLLowerN, appgenLibraryHotDjo67r4nCompatSlotUnderscoreLowerN, appgenLibraryHotDjo67r4nCompatSlotLowerNLowerN, appgenLibraryHotDjo67r4nCompatSlotUpperP, appgenLibraryHotDjo67r4nCompatSlotDollarLowerT, appgenLibraryHotDjo67r4nCompatSlotLowerTLowerN, appgenLibraryHotDjo67r4nCompatSlotLowerULowerN } from "../../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";
import { onboardingPluginChecklistActiveAtom, welcomeV2RoleStateAtom, hideFirstNewThreadOnboardingPromosAtom, welcomeV2OnboardingStorageKey, useTeenOnboardingEligibility, initOnboardingStateChunk, hasCompletedProjectlessOnboardingSignal, onboardingMailProviderDebugOverrideSignal, initOnboardingSelectWorkspaceCurrentRuntimeChunk, workspaceExperimentAssignmentAtom, welcomeOnboardingPendingAtom, projectlessOnboardingCompletedAtom, lastCompletedOnboardingAtom, pluginSuggestionsV2EnabledAtCompletionAtom, onboardingOverrideAtom } from "../../runtime/current-app-initial/onboarding-select-workspace-current-runtime";
import { normalizeMailProviderForSku, getEmailDomain, initOnboardingMailProviderChunk, resolveMailProviderForEmailDomain, emailDomainMailProviderQuery } from "../onboarding-mail-provider";
import { initAmbientSuggestionsConnectedAppsConsentChunk, hasSeenAmbientSuggestionsConnectedAppsConsentSignal } from "../../composer/ambient-suggestions-connected-apps-consent";
import { initInfoCircleIconChunk, initCodexAppIdentityChunk, CODEX_APP_NAME, CODEX_APP_BRAND_ID, InfoCircleIcon } from "../../runtime/renderer-error-boundary-runtime";
import { AppgenSettingsPencilIcon, initAppgenSettingsPencilIconChunk } from "../../runtime/current-app-initial/appgen-settings-publication-runtime";
import { generalAppearanceCurrentCompatSlotUpperB, generalAppearanceCurrentCompatSlotLowerG, generalAppearanceCurrentCompatSlotLowerH, generalAppearanceCurrentCompatSlotLowerJ, generalAppearanceCurrentCompatSlotUpperL, generalAppearanceCurrentCompatSlotUpperM, generalAppearanceCurrentCompatSlotUpperN, generalAppearanceCurrentCompatSlotUpperP, generalAppearanceCurrentCompatSlotUpperR, generalAppearanceCurrentCompatSlotUnderscore, generalAppearanceCurrentCompatSlotLowerV, generalAppearanceCurrentCompatSlotLowerX, generalAppearanceCurrentCompatSlotLowerY, generalAppearanceCurrentCompatSlotLowerZ } from "../../runtime/current-app-initial/general-appearance-current-runtime";
import { runExternalAgentImportWithStatus, initExternalAgentImportStatusChunk, setCompletedConversationalOnboardingTask, initSidebarOnboardingChecklistStateChunk } from "../sidebar-onboarding-checklist-state";
import { getShuffledWelcomeOnboardingRoles, getWelcomeOnboardingWorkMode, welcomeOnboardingRoleIds, initWelcomeOnboardingRolesChunk, welcomeOnboardingRoleMessages } from "../../runtime/current-app-initial/onboarding-random-provider-runtime";
import { initProfileQueriesRuntimeChunk, useProfileUsageQuery } from "../../features/profile-queries";
import { initNewThreadDebugLoadingChunk, NewThreadDebugLoading } from "../../runtime/current-app-initial/new-thread-debug-context-runtime";
import { initAnimatedIconModule, AnimatedIcon } from "../../ui/animated-icon";
import { OnboardingConversationalViewModule } from "./conversational-view";
function onboardingPageUnit27(onboardingPageOperand26) {
  let {
      durationSeconds = 2,
      fadeIn = false,
      onComplete
    } = onboardingPageOperand26,
    onboardingPageBinding601 = {
      opacity: 0
    };
  let onboardingPageBinding602 = {
    opacity: 1
  };
  let onboardingPageBinding603 = {
    delay: durationSeconds,
    duration: 0.2
  };
  let onboardingPageBinding604 = fadeIn ? React.createElement(worktreeNewThreadQueryCompatSlotLowerILowerH.div, {
    animate: {
      opacity: 1
    },
    initial: {
      opacity: 0
    },
    transition: OnboardingConversationalViewModule.onboardingPageBinding62
  }, React.createElement(onboardingPageUnit28, null)) : React.createElement(onboardingPageUnit28, null);
  return React.createElement(worktreeNewThreadQueryCompatSlotLowerILowerH.div, {
    animate: onboardingPageBinding601,
    className: "h-6",
    initial: onboardingPageBinding602,
    transition: onboardingPageBinding603,
    onAnimationComplete: onComplete
  }, onboardingPageBinding604);
}
function onboardingPageUnit28() {
  return React.createElement(appMainCurrentCompatSlotUpperSLowerS, {
    className: "text-lg leading-6"
  }, React.createElement(currentAppInitialSharedMember0924, {
    id: "electron.onboarding.conversationalOnboarding.thinking",
    defaultMessage: "Thinking",
    description: "Animated thinking label shown between deterministic conversational onboarding states"
  }));
}
function _a(onboardingPageOperand12) {
  let {
      answer,
      question
    } = onboardingPageOperand12,
    [onboardingPageBinding406, onboardingPageBinding407] = OnboardingConversationalViewModule.onboardingPageBinding54.useState(false),
    {
      elementHeightPx,
      elementRef
    } = appMainCurrentCompatSlotUpperILowerI(),
    onboardingPageBinding408 = () => onboardingPageBinding407(!onboardingPageBinding406);
  let onboardingPageBinding409 = <span className="truncate text-token-conversation-summary-trailing group-hover:text-token-foreground">
      {React.createElement(currentAppInitialSharedMember0924, {
      id: "electron.onboarding.conversationalOnboarding.askedQuestion",
      defaultMessage: "Asked a question",
      description: "Expandable status for a completed conversational onboarding question"
    })}
    </span>;
  let onboardingPageBinding410 = onboardingPageBinding406 && "opacity-100",
    onboardingPageBinding411 = onboardingPageBinding406 && "rotate-90",
    onboardingPageBinding412 = worktreeNewThreadQueryCompatSlotLowerMLowerH("icon-2xs flex-shrink-0 text-token-input-placeholder-foreground opacity-0 transition-[rotate] duration-500 group-hover:text-token-foreground group-hover:opacity-100", onboardingPageBinding410, onboardingPageBinding411);
  let onboardingPageBinding413 = React.createElement(worktreeNewThreadQueryCompatSlotUpperELowerP, {
    className: onboardingPageBinding412,
    "aria-hidden": true
  });
  let onboardingPageBinding414 = <button type="button" aria-expanded={onboardingPageBinding406} className="group flex min-w-0 cursor-interaction items-center gap-1.5 text-left" onClick={onboardingPageBinding408}>
      {onboardingPageBinding409}
      {onboardingPageBinding413}
    </button>;
  let onboardingPageBinding415 = onboardingPageBinding406 ? elementHeightPx : 0,
    onboardingPageBinding416 = onboardingPageBinding406 ? 1 : 0,
    onboardingPageBinding417 = {
      height: onboardingPageBinding415,
      opacity: onboardingPageBinding416
    };
  let onboardingPageBinding418 = !onboardingPageBinding406,
    onboardingPageBinding419 = !onboardingPageBinding406,
    onboardingPageBinding420 = onboardingPageBinding406 ? "mt-1.5 overflow-visible" : "overflow-hidden",
    onboardingPageBinding421 = worktreeNewThreadQueryCompatSlotLowerMLowerH(onboardingPageBinding420);
  let onboardingPageBinding422 = onboardingPageBinding406 ? "auto" : "none",
    onboardingPageBinding423 = {
      pointerEvents: onboardingPageBinding422
    };
  let onboardingPageBinding424 = onboardingPageBinding406 ? elementRef : null,
    onboardingPageBinding425 = <p className="text-token-text-secondary">{question}</p>;
  let onboardingPageBinding426 = <p>{answer}</p>;
  let onboardingPageBinding427 = <div ref={onboardingPageBinding424} className="flex flex-col gap-2 border-l border-token-border-default pl-3">
      {onboardingPageBinding425}
      {onboardingPageBinding426}
    </div>;
  let onboardingPageBinding428 = React.createElement(worktreeNewThreadQueryCompatSlotLowerILowerH.div, {
    initial: false,
    animate: onboardingPageBinding417,
    "aria-hidden": onboardingPageBinding418,
    inert: onboardingPageBinding419,
    className: onboardingPageBinding421,
    style: onboardingPageBinding423,
    transition: worktreeNewThreadQueryCompatSlotLowerSLowerO
  }, onboardingPageBinding427);
  return <div className="flex flex-col">
      {onboardingPageBinding414}
      {onboardingPageBinding428}
    </div>;
}
function onboardingPageUnit29(onboardingPageOperand50) {
  let onboardingPageBinding672 = onboardingPageOperand50.firstElementChild?.firstElementChild;
  if (!(onboardingPageBinding672 instanceof HTMLElement)) return OnboardingConversationalViewModule.onboardingPageBinding58;
  let onboardingPageBinding673 = onboardingPageOperand50.getBoundingClientRect(),
    onboardingPageBinding674 = onboardingPageBinding672.getBoundingClientRect();
  return {
    hasContentBelow: onboardingPageBinding674.bottom > onboardingPageBinding673.bottom + OnboardingConversationalViewModule.onboardingPageBinding57,
    hasContentUnderTitleBar: onboardingPageBinding674.top < onboardingPageBinding673.top + OnboardingConversationalViewModule.onboardingPageBinding56
  };
}
function onboardingPageUnit30(onboardingPageOperand46) {
  let {
    children
  } = onboardingPageOperand46;
  return <div className="flex w-full justify-end">
      <span className="rounded-3xl bg-token-foreground/5 px-3 py-2">
        {children}
      </span>
    </div>;
}
function onboardingPageUnit31(onboardingPageOperand28) {
  let {
      isTaskReady,
      phase
    } = onboardingPageOperand28,
    onboardingPageBinding619 = phase === "role" ? 0 : phase === "task" || !isTaskReady ? 1 : 2,
    onboardingPageBinding620 = [0, 1, 2];
  let onboardingPageBinding621 = onboardingPageBinding620.map(item => <span key={item} className={worktreeNewThreadQueryCompatSlotLowerMLowerH("h-full flex-1 rounded-[20px]", item === onboardingPageBinding619 ? "bg-token-foreground" : "bg-token-foreground/10")} />);
  return <div aria-hidden="true" data-active-index={onboardingPageBinding619} data-testid="onboarding-progress-bar" className="absolute bottom-4 flex h-[3px] w-[100px] gap-1.5">
      {onboardingPageBinding621}
    </div>;
}
class OnboardingConversationalViewHelpersModule {
  static get onboardingPageUnit29() {
    return onboardingPageUnit29;
  }
  static get onboardingPageUnit27() {
    return onboardingPageUnit27;
  }
  static get _a() {
    return _a;
  }
  static get onboardingPageUnit30() {
    return onboardingPageUnit30;
  }
  static get onboardingPageUnit31() {
    return onboardingPageUnit31;
  }
}
export { OnboardingConversationalViewHelpersModule };
