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
function onboardingPageUnit22(onboardingPageOperand19) {
  let {
    canContinueRole,
    isTaskReady,
    workflow,
    onContinueRole,
    onGetStarted,
    onSkip
  } = onboardingPageOperand19;
  if (workflow.phase === "role") {
    let onboardingPageBinding623 = !canContinueRole,
      onboardingPageBinding624 = React.createElement(currentAppInitialSharedMember0924, {
        id: "electron.onboarding.conversationalOnboarding.continue",
        defaultMessage: "Continue",
        description: "Button that continues from conversational onboarding role selection"
      });
    let onboardingPageBinding625;
    return React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
      className: "h-[46px] w-[320px] justify-center rounded-[24px] !text-lg !leading-6",
      color: "primary",
      disabled: onboardingPageBinding623,
      size: "large",
      onClick: onContinueRole
    }, onboardingPageBinding624);
  }
  if (isTaskReady) {
    let onboardingPageBinding626 = React.createElement(currentAppInitialSharedMember0924, {
      id: "electron.onboarding.conversationalOnboarding.getStarted",
      defaultMessage: "Get Started",
      description: "Button that completes conversational onboarding after task access is resolved"
    });
    let onboardingPageBinding627;
    return React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
      className: "h-[46px] w-[320px] justify-center rounded-[24px] !text-lg !leading-6",
      color: "primary",
      size: "large",
      onClick: onGetStarted
    }, onboardingPageBinding626);
  }
  let onboardingPageBinding528 = React.createElement(currentAppInitialSharedMember0924, {
    id: "electron.onboarding.conversationalOnboarding.skipAfterRole",
    defaultMessage: "Skip",
    description: "Button that opens the confirmation for skipping the remainder of conversational onboarding"
  });
  return React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
    className: "h-[46px] w-[320px] justify-center !text-lg !leading-6",
    color: "ghostTertiary",
    size: "large",
    onClick: onSkip
  }, onboardingPageBinding528);
}
var onboardingPageBinding43,
  onboardingPageBinding44,
  onboardingPageBinding45 = once(() => {
    onboardingPageBinding43 = currentAppInitialSharedCompatSlotLowerGLowerC();
    intlFormatDateTimeRuntime();
    worktreeNewThreadQueryCompatSlotUpperELowerM();
    onboardingPageBinding44 = currentAppInitialSharedCompatSlotLowerLLowerC();
  });
function onboardingPageUnit23(onboardingPageOperand11) {
  let {
      otherRoleDescription,
      selectedRole,
      onOtherRoleDescriptionChange,
      onSelect
    } = onboardingPageOperand11,
    onboardingPageBinding390 = currentAppInitialSharedFunction0375(),
    onboardingPageBinding391 = onboardingPageBinding390.formatMessage({
      id: "electron.onboarding.conversationalOnboarding.rolePicker.somethingElse",
      defaultMessage: "Describe something else",
      description: "Conversational onboarding role option for work not represented by the listed roles"
    });
  let onboardingPageBinding392 = onboardingPageBinding391,
    onboardingPageBinding393 = <legend className="sr-only">
        {React.createElement(currentAppInitialSharedMember0924, {
        id: "electron.onboarding.conversationalOnboarding.rolePicker.legend",
        defaultMessage: "Select the kind of work you do",
        description: "Accessible legend for the conversational onboarding role selector"
      })}
      </legend>;
  let onboardingPageBinding394 = onboardingPageBinding48.map(item => React.createElement(onboardingPageUnit24, {
    key: item,
    checked: selectedRole === item,
    role: item,
    onSelect: () => onSelect(item)
  }));
  let onboardingPageBinding395 = <div className="grid grid-cols-3 gap-x-1.5 gap-y-1 p-2">
      {onboardingPageBinding394}
    </div>;
  let onboardingPageBinding396 = () => onSelect("something_else");
  let onboardingPageBinding397 = selectedRole === "something_else",
    onboardingPageBinding398 = () => onSelect("something_else");
  let onboardingPageBinding399 = <input aria-label={onboardingPageBinding392} checked={onboardingPageBinding397} className="sr-only" name="conversational-onboarding-inline-role" type="radio" value="something_else" onChange={onboardingPageBinding398} />;
  let onboardingPageBinding400 = React.createElement(AppgenSettingsPencilIcon, {
    "aria-hidden": true,
    className: "size-[18px] shrink-0"
  });
  let onboardingPageBinding401 = event => {
    onSelect("something_else");
    onOtherRoleDescriptionChange(event.currentTarget.value);
  };
  let onboardingPageBinding402 = <input aria-label={onboardingPageBinding392} className="min-w-0 flex-1 bg-transparent text-token-text-primary placeholder:text-token-text-tertiary focus:outline-none" placeholder={onboardingPageBinding392} value={otherRoleDescription} onChange={onboardingPageBinding401} />;
  let onboardingPageBinding403 = <div className="flex h-12 w-full cursor-interaction items-center gap-2 border-t border-token-border-light px-4 text-token-text-tertiary" onClick={onboardingPageBinding396}>
      {onboardingPageBinding399}
      {onboardingPageBinding400}
      {onboardingPageBinding402}
    </div>;
  return <fieldset className="w-full overflow-hidden rounded-2xl border border-token-border bg-token-main-surface-primary text-lg leading-6 shadow-[0_2px_6px_-1px_rgba(0,0,0,0.03)]">
      {onboardingPageBinding393}
      {onboardingPageBinding395}
      {onboardingPageBinding403}
    </fieldset>;
}
function onboardingPageUnit24(onboardingPageOperand20) {
  let {
      checked,
      role,
      onSelect
    } = onboardingPageOperand20,
    onboardingPageBinding557 = <input checked={checked} className="sr-only" name="conversational-onboarding-inline-role" type="radio" value={role} onChange={onSelect} />;
  let onboardingPageBinding558 = checked ? "border-token-radio-active-foreground bg-token-radio-active-foreground" : "border-token-radio-inactive-border",
    onboardingPageBinding559 = worktreeNewThreadQueryCompatSlotLowerMLowerH("flex size-[18px] shrink-0 items-center justify-center rounded-full border", onboardingPageBinding558);
  let onboardingPageBinding560 = checked ? <span className="size-[7px] rounded-full bg-token-main-surface-primary" /> : null;
  let onboardingPageBinding561 = <span className={onboardingPageBinding559}>{onboardingPageBinding560}</span>;
  let onboardingPageBinding562 = welcomeOnboardingRoleMessages[role],
    onboardingPageBinding563 = <span className="truncate">
        {React.createElement(currentAppInitialSharedMember0924, {
        ...onboardingPageBinding562
      })}
      </span>;
  return <label className="flex min-w-0 cursor-interaction items-center gap-2 rounded-[10px] p-1.5 has-[:focus-visible]:outline-1 has-[:focus-visible]:outline-token-focus-border">
      {onboardingPageBinding557}
      {onboardingPageBinding561}
      {onboardingPageBinding563}
    </label>;
}
var onboardingPageBinding46,
  onboardingPageBinding47,
  onboardingPageBinding48,
  onboardingPageBinding49 = once(() => {
    onboardingPageBinding46 = currentAppInitialSharedCompatSlotLowerGLowerC();
    worktreeNewThreadQueryCompatSlotLowerHLowerH();
    intlFormatDateTimeRuntime();
    initAppgenSettingsPencilIconChunk();
    initWelcomeOnboardingRolesChunk();
    onboardingPageBinding47 = currentAppInitialSharedCompatSlotLowerLLowerC();
    onboardingPageBinding48 = welcomeOnboardingRoleIds.filter(item => item !== "something_else");
  });
function onboardingPageUnit25(onboardingPageOperand23) {
  let {
      taskIds,
      taskPlugins,
      onSelect
    } = onboardingPageOperand23,
    onboardingPageBinding585;
  {
    let onboardingPageBinding615;
    onboardingPageBinding615 = onboardingPageOperand29 => <button key={onboardingPageOperand29} className="flex h-[120px] min-w-0 cursor-interaction flex-col items-start gap-4 rounded-2xl border border-token-border bg-token-main-surface-primary p-4 text-left shadow-[0_2px_6px_-1px_rgba(0,0,0,0.03)] hover:bg-token-list-hover-background focus-visible:outline-1 focus-visible:outline-token-focus-border" type="button" onClick={() => onSelect(onboardingPageOperand29)}>
        <OnboardingStepView appPlugin={taskPlugins?.get(onboardingPageOperand29) ?? null} className="size-6 shrink-0 object-contain" task={onboardingPageOperand29} />
        <span>
          {React.createElement(currentAppInitialSharedMember0924, {
          ...appMainCurrentCompatSlotLowerS(onboardingPageOperand29).label
        })}
        </span>
      </button>;
    onboardingPageBinding585 = taskIds.map(onboardingPageBinding615);
  }
  return <div className="grid w-full auto-cols-fr grid-flow-col gap-3 text-lg leading-6">
      {onboardingPageBinding585}
    </div>;
}
var onboardingPageBinding50,
  onboardingPageBinding51,
  onboardingPageBinding52 = once(() => {
    onboardingPageBinding50 = currentAppInitialSharedCompatSlotLowerGLowerC();
    intlFormatDateTimeRuntime();
    initConversationalOnboardingWorkflowStateChunk();
    onboardingPageBinding51 = currentAppInitialSharedCompatSlotLowerLLowerC();
  });
class OnboardingConversationalControlsModule {
  static get onboardingPageUnit23() {
    return onboardingPageUnit23;
  }
  static get onboardingPageUnit25() {
    return onboardingPageUnit25;
  }
  static get onboardingPageUnit22() {
    return onboardingPageUnit22;
  }
  static get onboardingPageBinding45() {
    return onboardingPageBinding45;
  }
  static get onboardingPageBinding49() {
    return onboardingPageBinding49;
  }
  static get onboardingPageBinding52() {
    return onboardingPageBinding52;
  }
}
export { OnboardingConversationalControlsModule };
