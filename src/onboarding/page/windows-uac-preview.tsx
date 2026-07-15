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
import { OnboardingTeenWelcomeModule } from "./teen-welcome";
function onboardingPageUnit53(onboardingPageOperand5) {
  let {
      disabled,
      showArrow,
      onElevatedSetup
    } = onboardingPageOperand5,
    onboardingPageBinding324 = currentAppInitialSharedFunction0375(),
    onboardingPageBinding325 = onboardingPageBinding324.formatMessage({
      id: "windowsSandbox.onboarding.uac.preview",
      defaultMessage: "Example Windows permission prompt",
      description: "Accessible label for the illustrative Windows UAC prompt"
    });
  let onboardingPageBinding326 = <div className="flex h-6 shrink-0 items-center bg-[#f2f2f2] px-3 text-[8px]" aria-hidden="true">
      {React.createElement(currentAppInitialSharedMember0924, {
      id: "windowsSandbox.onboarding.uac.title",
      defaultMessage: "User Account Control",
      description: "Title shown in the illustrative Windows UAC prompt"
    })}
    </div>;
  let onboardingPageBinding327 = <div className="flex h-11 shrink-0 items-start bg-[#f2f2f2] px-4 text-[14px] leading-[18px] font-semibold" aria-hidden="true">
      {React.createElement(currentAppInitialSharedMember0924, {
      id: "windowsSandbox.onboarding.uac.question",
      defaultMessage: "Do you want to allow this app to make changes to your device?",
      description: "Question shown in the illustrative Windows UAC prompt"
    })}
    </div>;
  let onboardingPageBinding328 = <div className="flex size-[22px] items-center justify-center rounded-md border border-black/10 bg-[#f5f5f5] text-[#303030]">
      {React.createElement(worktreeNewThreadQueryCompatSlotUnderscoreLowerR, {
      className: "size-3.5"
    })}
    </div>;
  let onboardingPageBinding329 = <div className="flex h-[22px] items-center gap-2.5">
      {onboardingPageBinding328}
      <span className="text-[14px] leading-[18px] font-semibold">
        {React.createElement(currentAppInitialSharedMember0924, {
        id: "windowsSandbox.onboarding.uac.appName",
        defaultMessage: "{appName}",
        description: "Application name shown in the illustrative Windows UAC prompt",
        values: {
          appName: CODEX_APP_NAME
        }
      })}
      </span>
    </div>;
  let onboardingPageBinding330 = <div className="mt-1.5 text-[9px] leading-3.5 text-[#4d4d4d]">
      {React.createElement(currentAppInitialSharedMember0924, {
      id: "windowsSandbox.onboarding.uac.publisher",
      defaultMessage: "Verified publisher: OpenAI LLC",
      description: "Publisher shown in the illustrative Windows UAC prompt"
    })}
    </div>;
  let onboardingPageBinding331 = <div aria-hidden="true" className="h-24 shrink-0 px-4 pt-3.5">
      {onboardingPageBinding329}
      {onboardingPageBinding330}
      <div className="mt-1 text-[9px] leading-3.5 text-[#005fb8]">
        {React.createElement(currentAppInitialSharedMember0924, {
        id: "windowsSandbox.onboarding.uac.details",
        defaultMessage: "Show more details",
        description: "Details link shown in the illustrative Windows UAC prompt"
      })}
      </div>
    </div>;
  let onboardingPageBinding332 = React.createElement(currentAppInitialSharedMember0924, {
    id: "windowsSandbox.onboarding.uac.yes",
    defaultMessage: "Yes",
    description: "Yes button shown in the illustrative Windows UAC prompt"
  });
  let onboardingPageBinding333 = showArrow ? <span className="pointer-events-none absolute top-[25px] left-1/2 -translate-x-1/2" aria-hidden="true">
      {React.createElement(OnboardingTeenWelcomeModule.onboardingPageBinding97, {
      className: worktreeNewThreadQueryCompatSlotLowerMLowerH("h-[30px] w-[25px]", OnboardingTeenWelcomeModule.onboardingPageBinding100.uacArrow)
    })}
    </span> : null;
  let onboardingPageBinding334 = <button type="button" className="relative flex h-[22px] flex-1 cursor-interaction items-center justify-center rounded-[3px] border border-[#d0d0d0] bg-white text-[9px] outline-none focus-visible:ring-2 focus-visible:ring-[#0091ff] disabled:cursor-default" disabled={disabled} onClick={onElevatedSetup}>
      {onboardingPageBinding332}
      {onboardingPageBinding333}
    </button>;
  let onboardingPageBinding335 = React.createElement(currentAppInitialSharedMember0924, {
    id: "windowsSandbox.onboarding.uac.no",
    defaultMessage: "No",
    description: "No button shown in the illustrative Windows UAC prompt"
  });
  let onboardingPageBinding336 = <button type="button" className="flex h-[22px] flex-1 cursor-interaction items-center justify-center rounded-[3px] bg-[#0067c0] text-[9px] text-white outline-none focus-visible:ring-2 focus-visible:ring-[#0091ff] disabled:cursor-default" disabled={disabled} onClick={onElevatedSetup}>
      {onboardingPageBinding335}
    </button>;
  let onboardingPageBinding337 = <div className="flex flex-1 items-center gap-1.5 rounded-b-md border-t border-black/10 bg-[#f2f2f2] px-4">
      {onboardingPageBinding334}
      {onboardingPageBinding336}
    </div>;
  return <div className="relative flex h-[226px] w-[312px] max-w-[calc(100vw-48px)] flex-col rounded-md border border-black/20 bg-white text-left text-[#202020] shadow-[0_5px_15px_rgba(0,0,0,0.14)]" role="group" aria-label={onboardingPageBinding325}>
      {onboardingPageBinding326}
      {onboardingPageBinding327}
      {onboardingPageBinding331}
      {onboardingPageBinding337}
    </div>;
}
class OnboardingWindowsUacPreviewModule {
  static get onboardingPageUnit53() {
    return onboardingPageUnit53;
  }
}
export { OnboardingWindowsUacPreviewModule };
