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
function onboardingPageUnit21(onboardingPageOperand7) {
  let {
      checked,
      onChange,
      variant = "toggle"
    } = onboardingPageOperand7,
    onboardingPageBinding341 = currentAppInitialSharedFunction0375(),
    onboardingPageBinding342 = React.createElement(currentAppInitialSharedMember0924, {
      id: "electron.onboarding.welcomeV2.personalizedSuggestions.title",
      defaultMessage: "Suggest personalized tasks",
      description: "Label for the welcome v2 personalized suggestions control"
    });
  let onboardingPageBinding343 = onboardingPageBinding342,
    onboardingPageBinding344 = variant === "checkbox" ? "py-[13px]" : "mt-7",
    onboardingPageBinding345 = worktreeNewThreadQueryCompatSlotLowerMLowerH("relative flex items-center justify-center gap-2", onboardingPageBinding344);
  let onboardingPageBinding346 = variant === "checkbox" ? React.createElement(worktreeNewThreadOrchestratorCompatSlotUpperXLowerI, {
    id: "personalized-suggestions",
    className: "size-5 !rounded-[7px] [&_svg]:size-4",
    checked,
    onCheckedChange: onChange
  }) : React.createElement(worktreeNewThreadQueryCompatSlotLowerKLowerN, {
    checked,
    ariaLabel: onboardingPageBinding341.formatMessage({
      id: "electron.onboarding.welcomeV2.personalizedSuggestions.toggle",
      defaultMessage: "Enable personalized suggestions",
      description: "Accessible label for the welcome v2 personalized suggestions toggle"
    }),
    onChange
  });
  let onboardingPageBinding347 = variant === "checkbox" ? <label htmlFor="personalized-suggestions" className="cursor-interaction text-[14px] leading-5 font-normal text-token-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border">
        {onboardingPageBinding343}
      </label> : <button type="button" className="cursor-interaction text-lg leading-6 font-normal text-token-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border" aria-pressed={checked} onClick={() => onChange(!checked)}>
        {onboardingPageBinding343}
      </button>;
  let onboardingPageBinding348 = <span className="block !text-white">
      {currentAppInitialSharedCompatSlotLowerJLowerA.ChatGPT === "codex" ? React.createElement(currentAppInitialSharedMember0924, {
      id: "electron.onboarding.welcomeV2.personalizedSuggestions.description.chatgpt",
      defaultMessage: "ChatGPT can suggest what to do next by searching project files and connected apps",
      description: "Tooltip for the welcome v2 personalized suggestions control in the ChatGPT app"
    }) : React.createElement(currentAppInitialSharedMember0924, {
      id: "electron.onboarding.welcomeV2.personalizedSuggestions.description",
      defaultMessage: "Codex can suggest what to do next by searching project files and connected apps",
      description: "Tooltip for the welcome v2 personalized suggestions control"
    })}
    </span>;
  let onboardingPageBinding349 = onboardingPageBinding341.formatMessage({
    id: "electron.onboarding.welcomeV2.personalizedSuggestions.info",
    defaultMessage: "About personalized suggestions",
    description: "Accessible label for the welcome v2 personalized suggestions info tooltip"
  });
  let onboardingPageBinding350 = React.createElement(InfoCircleIcon, {
    className: "size-4",
    "aria-hidden": "true"
  });
  let onboardingPageBinding351 = React.createElement(worktreeNewThreadQueryCompatSlotLowerYLowerP, {
    side: "top",
    sideOffset: 6,
    delayDuration: 0,
    tooltipClassName: "!border-transparent !bg-black px-1.5 py-1.5 text-center text-xs leading-4 font-medium !text-white shadow-lg",
    tooltipBodyClassName: "!text-white",
    tooltipMaxWidth: "17rem",
    tooltipContent: onboardingPageBinding348
  }, <button type="button" className="inline-flex size-4 items-center justify-center rounded-full text-token-text-tertiary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border" aria-label={onboardingPageBinding349}>
          {onboardingPageBinding350}
        </button>);
  let onboardingPageBinding352 = <div className="flex min-w-0 items-center gap-2">
      {onboardingPageBinding347}
      {onboardingPageBinding351}
    </div>;
  return <div className={onboardingPageBinding345}>
      {onboardingPageBinding346}
      {onboardingPageBinding352}
    </div>;
}
var onboardingPageBinding41,
  $i,
  onboardingPageBinding42 = once(() => {
    onboardingPageBinding41 = currentAppInitialSharedCompatSlotLowerGLowerC();
    worktreeNewThreadQueryCompatSlotLowerHLowerH();
    currentAppInitialSharedCompatSlotUpperO();
    intlFormatDateTimeRuntime();
    initCodexAppIdentityChunk();
    worktreeNewThreadOrchestratorCompatSlotUpperZLowerI();
    worktreeNewThreadQueryCompatSlotUpperALowerN();
    worktreeNewThreadQueryCompatSlotLowerXLowerP();
    initInfoCircleIconChunk();
    $i = currentAppInitialSharedCompatSlotLowerLLowerC();
  });
class OnboardingPersonalizedSuggestionsModule {
  static get onboardingPageUnit21() {
    return onboardingPageUnit21;
  }
  static get onboardingPageBinding42() {
    return onboardingPageBinding42;
  }
}
export { OnboardingPersonalizedSuggestionsModule };
