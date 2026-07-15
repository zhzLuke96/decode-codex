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
import { OnboardingSchemaModule } from "./schema";
import { OnboardingFlowModule } from "./flow";
function onboardingPageUnit44(onboardingPageOperand15) {
  let {
      onContinue
    } = onboardingPageOperand15,
    onboardingPageBinding455 = React.createElement(AnimatedIcon, {
      className: "text-token-foreground",
      animation: "hello",
      animated: false,
      size: 64
    });
  let onboardingPageBinding456 = <h1 className="heading-xl mt-4 text-center font-semibold text-token-foreground">
      {React.createElement(currentAppInitialSharedMember0924, {
      id: "electron.onboarding.teenWelcome.title",
      defaultMessage: "Welcome to Codex",
      description: "Title on the teen onboarding welcome page"
    })}
    </h1>;
  let onboardingPageBinding457, onboardingPageBinding458;
  onboardingPageBinding457 = <p className="mt-2 max-w-sm text-center text-lg leading-6 text-token-description-foreground">
      {React.createElement(currentAppInitialSharedMember0924, {
      id: "electron.onboarding.teenWelcome.subtitle",
      defaultMessage: "Turn your ideas into web apps, games, and tools just for you—even with no coding experience.",
      description: "Subtitle on the teen onboarding welcome page"
    })}
    </p>;
  onboardingPageBinding458 = React.createElement(_o, null);
  let onboardingPageBinding459 = React.createElement(currentAppInitialSharedMember0924, {
    id: "electron.onboarding.teenWelcome.continue",
    defaultMessage: "Get started",
    description: "Button label on the teen onboarding welcome page"
  });
  let onboardingPageBinding460 = React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
    className: "mt-8 h-12 w-80 justify-center rounded-full border-transparent px-4 py-0 text-base leading-5 font-semibold",
    color: "primary",
    size: "default",
    onClick: onContinue
  }, onboardingPageBinding459);
  let onboardingPageBinding461 = <button className="mt-3 flex h-10 cursor-interaction items-center gap-2 text-base leading-5 font-semibold text-token-foreground hover:underline" type="button" onClick={onboardingPageUnit45}>
      {React.createElement(currentAppInitialSharedMember0924, {
      id: "electron.onboarding.teenWelcome.learnMore",
      defaultMessage: "Learn more about what Codex can do",
      description: "Link label on the teen onboarding welcome page"
    })}
      {React.createElement(worktreeNewThreadQueryCompatSlotUpperNLowerN, {
      className: "icon-sm",
      ExternalIcon: appMainCurrentCompatSlotUpperXLowerD,
      href: onboardingPageBinding91
    })}
    </button>;
  return <div className="flex h-full w-full items-center justify-center bg-token-main-surface-primary px-8 py-12">
      <main className="flex w-full flex-col items-center">
        {onboardingPageBinding455}
        {onboardingPageBinding456}
        {onboardingPageBinding457}
        {onboardingPageBinding458}
        {onboardingPageBinding460}
        {onboardingPageBinding461}
      </main>
    </div>;
}
function onboardingPageUnit45(onboardingPageOperand74) {
  worktreeNewThreadQueryCompatSlotLowerILowerS({
    event: onboardingPageOperand74,
    href: onboardingPageBinding91,
    initiator: "open_in_browser_bridge"
  });
}
function _o() {
  let onboardingPageBinding511 = React.createElement(onboardingPageUnit46, {
    className: "top-[13px] left-0 h-[121px] w-[170px] -rotate-[12deg] bg-[#F9ECF3]"
  }, <div className="absolute inset-x-5 top-5 h-10 rounded bg-[#FFF8FC]" />, <div className="absolute right-4 bottom-4 left-4 h-8 rounded bg-[#F3DDE9]" />);
  let onboardingPageBinding512 = React.createElement(onboardingPageUnit46, {
    className: "top-[14px] right-0 h-[120px] w-[170px] rotate-[12deg] bg-[#F8F8DE]"
  }, <div className="absolute inset-x-4 top-4 h-12 rounded bg-[#FFFFF0]" />, <div className="absolute right-6 bottom-5 left-6 h-7 rounded bg-[#E9E9B6]" />);
  let onboardingPageBinding513 = React.createElement(onboardingPageUnit46, {
    className: "top-[54px] left-1/2 h-[108px] w-[162px] -translate-x-1/2 bg-[#CFE0FF]"
  }, <div className="absolute inset-x-3 top-3 h-[72px] rounded bg-[linear-gradient(180deg,#FBFDFF_0%,#D9E8FF_100%)]" />, <div className="absolute right-4 bottom-3 left-4 h-4 rounded-full bg-white/75" />);
  return <div className="relative mt-8 h-[177px] w-[320px]" aria-hidden="true">
      {onboardingPageBinding511}
      {onboardingPageBinding512}
      {onboardingPageBinding513}
      <div className="absolute bottom-0 left-1/2 flex h-6 -translate-x-1/2 items-center rounded-full bg-token-main-surface-primary px-3 text-xs leading-3 font-medium text-token-foreground shadow-xl">
        {React.createElement(currentAppInitialSharedMember0924, {
        id: "electron.onboarding.teenWelcome.previewPrompt",
        defaultMessage: "Build a studying app",
        description: "Prompt shown in the decorative preview on the teen onboarding welcome page"
      })}
      </div>
    </div>;
}
function onboardingPageUnit46(onboardingPageOperand41) {
  let {
      children,
      className
    } = onboardingPageOperand41,
    onboardingPageBinding655 = worktreeNewThreadQueryCompatSlotLowerMLowerH("absolute overflow-hidden rounded-2xl border border-token-border/50 shadow-2xl", className);
  return <div className={onboardingPageBinding655}>{children}</div>;
}
var onboardingPageBinding89,
  onboardingPageBinding90,
  onboardingPageBinding91,
  onboardingPageBinding92 = once(() => {
    onboardingPageBinding89 = currentAppInitialSharedCompatSlotLowerGLowerC();
    worktreeNewThreadQueryCompatSlotLowerHLowerH();
    intlFormatDateTimeRuntime();
    initAnimatedIconModule();
    worktreeNewThreadQueryCompatSlotUpperELowerM();
    worktreeNewThreadQueryCompatSlotLowerNLowerS();
    worktreeNewThreadQueryCompatSlotUpperPLowerN();
    appMainCurrentCompatSlotUpperZLowerD();
    onboardingPageBinding90 = currentAppInitialSharedCompatSlotLowerLLowerC();
    onboardingPageBinding91 = "https://openai.com/codex/";
  });
function onboardingPageUnit47(onboardingPageOperand47) {
  let {
    onContinue
  } = onboardingPageOperand47;
  return React.createElement(OnboardingFlowModule.onboardingPageUnit16, {
    name: "teen_welcome",
    onComplete: onboardingPageOperand84 => {
      let {
        result
      } = onboardingPageOperand84;
      onContinue(result);
    }
  }, onboardingPageUnit48);
}
function onboardingPageUnit48(onboardingPageOperand63) {
  let {
    completeStep
  } = onboardingPageOperand63;
  return React.createElement(onboardingPageUnit44, {
    onContinue: () => {
      completeStep({
        result: {
          step: OnboardingSchemaModule.onboardingPageBinding7.TeenWelcome
        }
      });
    }
  });
}
var onboardingPageBinding93,
  onboardingPageBinding94,
  onboardingPageBinding95 = once(() => {
    onboardingPageBinding93 = currentAppInitialSharedCompatSlotLowerGLowerC();
    OnboardingSchemaModule.onboardingPageBinding16();
    OnboardingFlowModule.onboardingPageBinding32();
    onboardingPageBinding92();
    onboardingPageBinding94 = currentAppInitialSharedCompatSlotLowerLLowerC();
  }),
  onboardingPageBinding96,
  onboardingPageBinding97,
  onboardingPageBinding98 = once(() => {
    toEsModule(currentAppInitialSharedCompatSlotUpperC());
    onboardingPageBinding96 = currentAppInitialSharedCompatSlotLowerLLowerC();
    onboardingPageBinding97 = onboardingPageOperand40 => <svg width={28} height={33} viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg" {...onboardingPageOperand40}>
        <path d="M14 2L26 14H20V29C20 30.1046 19.1046 31 18 31H10C8.89543 31 8 30.1046 8 29V14H2L14 2Z" fill="#0091FF" stroke="white" strokeWidth={3} strokeLinejoin="round" />
      </svg>;
  }),
  onboardingPageBinding99,
  onboardingPageBinding100,
  onboardingPageBinding101 = once(() => {
    onboardingPageBinding99 = "_uacArrow_cwr2x_1";
    onboardingPageBinding100 = {
      uacArrow: onboardingPageBinding99,
      "uac-arrow-bounce": "_uac-arrow-bounce_cwr2x_1"
    };
  });
class OnboardingTeenWelcomeModule {
  static get onboardingPageBinding97() {
    return onboardingPageBinding97;
  }
  static get onboardingPageBinding100() {
    return onboardingPageBinding100;
  }
  static get onboardingPageBinding98() {
    return onboardingPageBinding98;
  }
  static get onboardingPageBinding101() {
    return onboardingPageBinding101;
  }
  static get onboardingPageUnit47() {
    return onboardingPageUnit47;
  }
  static get onboardingPageBinding95() {
    return onboardingPageBinding95;
  }
}
export { OnboardingTeenWelcomeModule };
