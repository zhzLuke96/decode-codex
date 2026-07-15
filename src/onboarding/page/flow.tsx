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
function onboardingPageUnit2() {
  let onboardingPageBinding479 = currentAppInitialSharedCompatSlotUpperKLowerO(OnboardingSchemaModule.onboardingPageBinding17),
    onboardingPageBinding480 = currentAppInitialSharedCompatSlotUpperYLowerS(welcomeV2RoleStateAtom),
    onboardingPageBinding481 = parseWorkspaceRootPathList(),
    onboardingPageBinding482 = currentAppInitialSharedCompatSlotLowerCLowerC(),
    onboardingPageBinding483 = currentAppInitialSharedCompatSlotUpperJLowerS(onboardingOverrideAtom),
    onboardingPageBinding484 = currentAppInitialSharedCompatSlotUpperYLowerS(onboardingOverrideAtom),
    onboardingPageBinding485 = currentAppInitialSharedCompatSlotUpperYLowerS(welcomeOnboardingPendingAtom),
    onboardingPageBinding486 = currentAppInitialSharedCompatSlotUpperYLowerS(projectlessOnboardingCompletedAtom),
    onboardingPageBinding487 = currentAppInitialSharedCompatSlotUpperYLowerS(hideFirstNewThreadOnboardingPromosAtom),
    onboardingPageBinding488 = currentAppInitialSharedCompatSlotUpperYLowerS(onboardingPluginChecklistActiveAtom),
    onboardingPageBinding489 = currentAppInitialSharedCompatSlotUpperYLowerS(pluginSuggestionsV2EnabledAtCompletionAtom),
    onboardingPageBinding490 = currentAppInitialSharedMember0781("1500581060"),
    onboardingPageBinding491 = currentAppInitialSharedCompatSlotUpperYLowerS(lastCompletedOnboardingAtom);
  return () => {
    let onboardingPageBinding532 = onboardingPageBinding479.get(OnboardingSchemaModule.onboardingPageBinding19);
    if (imagePickerSchemaCapabilities(onboardingPageBinding479, currentAppInitialSharedMember0180, {
      selectedWorkspacesCount: 0,
      personalizedSuggestionsEnabled: onboardingPageBinding532?.state.personalizedSuggestionsEnabled
    }), onboardingPageBinding532 == null) return;
    let {
        state,
        options
      } = onboardingPageBinding532,
      onboardingPageBinding533 = state.personalizedSuggestionsEnabled ?? true,
      onboardingPageBinding534 = onboardingPageUnit5(state.workMode);
    onboardingPageBinding480(state);
    worktreeNewThreadQueryCompatSlotUpperHLowerM(onboardingPageBinding479, currentAppInitialSharedCompatSlotUpperZ.conversationDetailMode, onboardingPageBinding534.threadDetailLevel).catch(onboardingPageUnit4).finally(() => {
      let onboardingPageBinding632 = onboardingPageBinding483 === "welcome";
      onboardingPageBinding484("auto");
      onboardingPageBinding485(false);
      onboardingPageBinding486(true);
      onboardingPageBinding487(true);
      onboardingPageBinding488(true);
      onboardingPageBinding489(onboardingPageBinding490);
      onboardingPageBinding491(Math.floor(Date.now() / 1e3));
      onboardingPageBinding632 || worktreeNewThreadQueryCompatSlotDollarLowerI(onboardingPageBinding479, null);
      onboardingPageBinding481(`/?${welcomeV2OnboardingStorageKey}=1`, {
        replace: true,
        state: options?.focusComposer !== true && options?.prefillPrompt == null ? undefined : {
          focusComposerNonce: Date.now(),
          prefillPrompt: options.prefillPrompt
        }
      });
    });
    onboardingPageBinding534.fontSizes != null && (worktreeNewThreadQueryCompatSlotUpperHLowerM(onboardingPageBinding479, currentAppInitialSharedCompatSlotLowerSLowerT.sansFontSize, onboardingPageBinding534.fontSizes.sans), worktreeNewThreadQueryCompatSlotUpperHLowerM(onboardingPageBinding479, currentAppInitialSharedCompatSlotLowerSLowerT.codeFontSize, onboardingPageBinding534.fontSizes.code));
    onboardingPageBinding479.set(appgenLibraryHotDjo67r4nCompatSlotUpperP, onboardingPageBinding534.composerPermissionModeVisibility);
    onboardingPageBinding533 && onboardingPageBinding479.set(hasSeenAmbientSuggestionsConnectedAppsConsentSignal, true);
    (async () => {
      await worktreeNewThreadQueryCompatSlotUpperHLowerM(onboardingPageBinding479, currentAppInitialSharedCompatSlotLowerCLowerT.enabled, onboardingPageBinding533);
      onboardingPageBinding533 && (await currentAppInitialSharedCompatSlotLowerI("ambient-suggestions-refresh", {
        params: {
          domain: null,
          hostId: currentAppInitialSharedMember0542,
          projectRoot: currentAppInitialSharedCompatSlotLowerTLowerR("~")
        }
      }), await Promise.all([onboardingPageBinding482.invalidateQueries({
        queryKey: currentAppInitialSharedCompatSlotLowerA("ambient-suggestions")
      }), onboardingPageBinding482.invalidateQueries({
        queryKey: currentAppInitialSharedCompatSlotLowerA("ambient-suggestions-refresh")
      })]));
    })().catch(onboardingPageUnit3);
  };
}
function onboardingPageUnit3(onboardingPageOperand66) {
  currentAppInitialSharedCompatSlotUpperC.error("Failed to refresh ambient suggestions after onboarding", {
    safe: {},
    sensitive: {
      error: onboardingPageOperand66
    }
  });
}
function onboardingPageUnit4(onboardingPageOperand67) {
  currentAppInitialSharedCompatSlotUpperC.error("Failed to persist welcome v2 onboarding configuration", {
    safe: {},
    sensitive: {
      error: onboardingPageOperand67
    }
  });
}
function onboardingPageUnit5(onboardingPageOperand44) {
  return onboardingPageOperand44 === "non_coding" ? {
    threadDetailLevel: appMainCurrentCompatSlotLowerOLowerP,
    fontSizes: {
      sans: _i,
      code: onboardingPageBinding23
    },
    composerPermissionModeVisibility: {
      "guardian-approvals": true,
      "full-access": false
    }
  } : {
    threadDetailLevel: appMainCurrentCompatSlotLowerALowerP,
    fontSizes: null,
    composerPermissionModeVisibility: {
      "guardian-approvals": true,
      "full-access": true
    }
  };
}
var onboardingPageBinding22,
  _i,
  onboardingPageBinding23,
  onboardingPageBinding24 = once(() => {
    onboardingPageBinding22 = currentAppInitialSharedCompatSlotLowerGLowerC();
    remoteControlRefreshSourceEnum();
    currentAppInitialSharedCompatSlotDollarLowerS();
    currentAppInitialSharedCompatSlotUpperGLowerS();
    currentAppInitialSharedCompatSlotUpperVLowerO();
    currentAppInitialSharedCompatSlotUpperO();
    openAiNativeAppDefinition();
    initAmbientSuggestionsConnectedAppsConsentChunk();
    appgenLibraryHotDjo67r4nCompatSlotUpperI();
    initOnboardingStateChunk();
    remoteConnectionRuntime0298();
    worktreeNewThreadQueryCompatSlotUpperQLowerI();
    worktreeNewThreadQueryCompatSlotLowerZLowerM();
    appMainCurrentCompatSlotLowerLLowerP();
    currentAppInitialSharedDisplayRuntime();
    currentAppInitialSharedRuntime0816();
    currentAppInitialSharedCompatSlotDollarLowerS();
    currentAppInitialSharedCompatSlotUpperC();
    OnboardingSchemaModule.onboardingPageBinding21();
    _i = 14;
    onboardingPageBinding23 = 13;
  });
function onboardingPageUnit6(onboardingPageOperand21) {
  let {
      finalStep,
      hasPreviouslyCompletedOnboarding,
      isAdvancingOnboarding,
      onboardingOverride,
      postLoginWelcomePending
    } = onboardingPageOperand21,
    onboardingPageBinding566 = worktreeNewThreadQueryCompatSlotUpperLLowerF(),
    onboardingPageBinding567 = currentAppInitialSharedCompatSlotLowerCLowerC(),
    {
      client,
      isLoading
    } = intlFormatDateTimeRuntime(),
    onboardingPageBinding568 = statsigFunction0290(client, "2744470156");
  let onboardingPageBinding569 = onboardingPageBinding568,
    onboardingPageBinding570 = onboardingPageBinding566.authMethod === "chatgpt",
    onboardingPageBinding571 = {
      enabled: onboardingPageBinding570
    };
  let {
      isLoading: _isLoading,
      shouldUseTeenOnboarding
    } = useTeenOnboardingEligibility(onboardingPageBinding571),
    onboardingPageBinding572 = _isLoading || isAdvancingOnboarding || isLoading || finalStep.isLoading || onboardingOverride !== "welcome" && !postLoginWelcomePending && hasPreviouslyCompletedOnboarding == null,
    onboardingPageBinding573 = onboardingOverride === "welcome" || postLoginWelcomePending || hasPreviouslyCompletedOnboarding === false,
    onboardingPageBinding574 = onboardingPageBinding569,
    onboardingPageBinding575 = {
      shouldShow: finalStep.shouldShow
    };
  let onboardingPageBinding576 = {
    isSupported: true,
    shouldShow: async () => generalAppearanceCurrentCompatSlotLowerY({
      queryClient: onboardingPageBinding567
    })
  };
  return {
    isLoading: onboardingPageBinding572,
    shouldShowStandardOnboarding: onboardingPageBinding573,
    shouldShowConversationalOnboarding: onboardingPageBinding574,
    shouldShowTeenOnboarding: shouldUseTeenOnboarding,
    finalStep: onboardingPageBinding575,
    agentMigration: onboardingPageBinding576
  };
}
var onboardingPageBinding25,
  onboardingPageBinding26 = once(() => {
    onboardingPageBinding25 = currentAppInitialSharedCompatSlotLowerGLowerC();
    currentAppInitialSharedCompatSlotDollarLowerS();
    worktreeNewThreadQueryCompatSlotUpperILowerF();
    initOnboardingSelectWorkspaceCurrentRuntimeChunk();
    currentAppInitialSharedRuntime0816();
    generalAppearanceCurrentCompatSlotUpperB();
  });
async function onboardingPageUnit7(onboardingPageOperand45, {
  completeOnboarding,
  logEntered,
  logStepViewed,
  onboardingContext,
  result
}) {
  let onboardingPageBinding664 = onboardingPageOperand45.get(OnboardingSchemaModule.onboardingPageBinding18);
  if (onboardingPageBinding664 === OnboardingSchemaModule.onboardingPageBinding7.Complete) return;
  let onboardingPageBinding665 = result == null ? undefined : OnboardingSchemaModule.onboardingPageBinding15.parse(result);
  onboardingPageBinding665 != null && onboardingPageUnit14(onboardingPageOperand45, onboardingPageBinding665);
  let onboardingPageBinding666 = await onboardingPageUnit8({
    currentStep: onboardingPageBinding664,
    onboardingContext,
    result: onboardingPageBinding665
  });
  onboardingPageOperand45.get(OnboardingSchemaModule.onboardingPageBinding18) === onboardingPageBinding664 && (onboardingPageBinding666 !== onboardingPageBinding664 && (onboardingPageBinding664 === OnboardingSchemaModule.onboardingPageBinding7.Start && logEntered(), onboardingPageUnit13(onboardingPageOperand45, onboardingPageBinding666, logStepViewed)), onboardingPageBinding666 === OnboardingSchemaModule.onboardingPageBinding7.Complete && completeOnboarding());
}
async function onboardingPageUnit8({
  currentStep,
  onboardingContext,
  result
}) {
  if (onboardingContext.isLoading) return currentStep;
  switch (currentStep) {
    case OnboardingSchemaModule.onboardingPageBinding7.Start:
      return onboardingContext.shouldShowStandardOnboarding ? onboardingPageUnit9(onboardingContext) : onboardingPageUnit12(onboardingContext);
    case OnboardingSchemaModule.onboardingPageBinding7.WindowsSandboxSetup:
      return OnboardingSchemaModule.onboardingPageBinding7.Complete;
    case OnboardingSchemaModule.onboardingPageBinding7.TeenWelcome:
      return OnboardingSchemaModule.onboardingPageBinding7.TeenInterests;
    case OnboardingSchemaModule.onboardingPageBinding7.TeenInterests:
      return OnboardingSchemaModule.onboardingPageBinding7.TeenPrompts;
    case OnboardingSchemaModule.onboardingPageBinding7.TeenPrompts:
      return onboardingPageUnit12(onboardingContext);
    case OnboardingSchemaModule.onboardingPageBinding7.ConversationalOnboarding:
    case OnboardingSchemaModule.onboardingPageBinding7.RoleSelection:
      return onboardingPageUnit10(onboardingContext, result);
    case OnboardingSchemaModule.onboardingPageBinding7.AgentMigrationSourceSelection:
    case OnboardingSchemaModule.onboardingPageBinding7.AgentMigrationItemSelection:
      return onboardingPageUnit11({
        currentStep,
        onboardingContext,
        result
      });
    case OnboardingSchemaModule.onboardingPageBinding7.Complete:
      return OnboardingSchemaModule.onboardingPageBinding7.Complete;
  }
}
function onboardingPageUnit9(onboardingPageOperand62) {
  return onboardingPageOperand62.shouldShowTeenOnboarding ? OnboardingSchemaModule.onboardingPageBinding7.TeenWelcome : onboardingPageOperand62.shouldShowConversationalOnboarding ? OnboardingSchemaModule.onboardingPageBinding7.ConversationalOnboarding : OnboardingSchemaModule.onboardingPageBinding7.RoleSelection;
}
async function onboardingPageUnit10(onboardingPageOperand55, onboardingPageOperand56) {
  return (onboardingPageOperand56?.step === OnboardingSchemaModule.onboardingPageBinding7.ConversationalOnboarding || onboardingPageOperand56?.step === OnboardingSchemaModule.onboardingPageBinding7.RoleSelection) && onboardingPageOperand56.workMode === "non_coding" ? onboardingPageUnit12(onboardingPageOperand55) : (await onboardingPageOperand55.agentMigration.shouldShow()) ? OnboardingSchemaModule.onboardingPageBinding7.AgentMigrationSourceSelection : onboardingPageUnit12(onboardingPageOperand55);
}
function onboardingPageUnit11({
  currentStep,
  onboardingContext,
  result
}) {
  switch (currentStep) {
    case OnboardingSchemaModule.onboardingPageBinding7.AgentMigrationSourceSelection:
      return result?.step === OnboardingSchemaModule.onboardingPageBinding7.AgentMigrationSourceSelection && result.skipped !== true && result.providerIds.length > 0 ? OnboardingSchemaModule.onboardingPageBinding7.AgentMigrationItemSelection : onboardingPageUnit12(onboardingContext);
    case OnboardingSchemaModule.onboardingPageBinding7.AgentMigrationItemSelection:
      return onboardingPageUnit12(onboardingContext);
  }
}
function onboardingPageUnit12(onboardingPageOperand71) {
  return onboardingPageOperand71.finalStep.shouldShow ? OnboardingSchemaModule.onboardingPageBinding7.WindowsSandboxSetup : OnboardingSchemaModule.onboardingPageBinding7.Complete;
}
function onboardingPageUnit13(onboardingPageOperand78, onboardingPageOperand79, onboardingPageOperand80) {
  onboardingPageOperand78.set(OnboardingSchemaModule.onboardingPageBinding18, onboardingPageOperand79);
  let onboardingPageBinding691 = onboardingPageBinding27[onboardingPageOperand79];
  onboardingPageBinding691 != null && onboardingPageOperand80(onboardingPageBinding691);
}
function onboardingPageUnit14(onboardingPageOperand31, onboardingPageOperand32) {
  switch (currentAppInitialSharedCompatSlotUpperC.debug("[onboarding-flow] store result", {
    safe: {
      resultStep: onboardingPageOperand32.step
    }
  }), onboardingPageOperand32.step) {
    case OnboardingSchemaModule.onboardingPageBinding7.TeenWelcome:
      return;
    case OnboardingSchemaModule.onboardingPageBinding7.TeenInterests:
      onboardingPageOperand31.set(OnboardingSchemaModule.onboardingPageBinding20, onboardingPageOperand32);
      return;
    case OnboardingSchemaModule.onboardingPageBinding7.TeenPrompts:
      onboardingPageOperand31.set(OnboardingSchemaModule.onboardingPageBinding19, onboardingPageOperand32.completion);
      return;
    case OnboardingSchemaModule.onboardingPageBinding7.WindowsSandboxSetup:
      return;
    case OnboardingSchemaModule.onboardingPageBinding7.ConversationalOnboarding:
    case OnboardingSchemaModule.onboardingPageBinding7.RoleSelection:
      onboardingPageOperand31.set(OnboardingSchemaModule.onboardingPageBinding19, {
        state: {
          roles: onboardingPageOperand32.roles,
          personalizedSuggestionsEnabled: onboardingPageOperand32.personalizedSuggestionsEnabled,
          workMode: onboardingPageOperand32.workMode
        }
      });
      return;
    case OnboardingSchemaModule.onboardingPageBinding7.AgentMigrationSourceSelection:
      onboardingPageOperand31.set(OnboardingSchemaModule.ui, onboardingPageOperand32);
      return;
    case OnboardingSchemaModule.onboardingPageBinding7.AgentMigrationItemSelection:
      return;
  }
}
var onboardingPageBinding27,
  onboardingPageBinding28 = once(() => {
    currentAppInitialSharedCompatSlotDollarLowerS();
    OnboardingSchemaModule.onboardingPageBinding21();
    OnboardingSchemaModule.onboardingPageBinding16();
    onboardingPageBinding27 = {
      [OnboardingSchemaModule.onboardingPageBinding7.Start]: null,
      [OnboardingSchemaModule.onboardingPageBinding7.TeenWelcome]: "teen_welcome",
      [OnboardingSchemaModule.onboardingPageBinding7.TeenInterests]: "teen_interests",
      [OnboardingSchemaModule.onboardingPageBinding7.TeenPrompts]: "teen_prompts",
      [OnboardingSchemaModule.onboardingPageBinding7.WindowsSandboxSetup]: null,
      [OnboardingSchemaModule.onboardingPageBinding7.ConversationalOnboarding]: null,
      [OnboardingSchemaModule.onboardingPageBinding7.RoleSelection]: "role_selection",
      [OnboardingSchemaModule.onboardingPageBinding7.AgentMigrationSourceSelection]: "agent_migration_source_selection",
      [OnboardingSchemaModule.onboardingPageBinding7.AgentMigrationItemSelection]: "agent_migration_item_selection",
      [OnboardingSchemaModule.onboardingPageBinding7.Complete]: null
    };
  });
async function onboardingPageUnit15({
  scope,
  importSelection,
  importStatus,
  onComplete,
  onImportStarted,
  setImportStatus
}) {
  if (importStatus.status !== "importing") {
    if (importStatus.status === "success") {
      onComplete();
      return;
    }
    setImportStatus({
      status: "importing"
    });
    onImportStarted();
    try {
      await runExternalAgentImportWithStatus(scope, importSelection);
      setImportStatus({
        status: "success"
      });
    } catch {
      setImportStatus({
        status: "error"
      });
    }
    onComplete();
  }
}
var onboardingPageBinding29 = once(() => {
  initExternalAgentImportStatusChunk();
});
function onboardingPageUnit16(onboardingPageOperand34) {
  let {
      name,
      onComplete,
      children
    } = onboardingPageOperand34,
    onboardingPageBinding636 = currentAppInitialSharedCompatSlotUpperKLowerO(currentAppInitialSharedCompatSlotUpperE),
    onboardingPageBinding637 = onboardingPageOperand85 => {
      onboardingPageOperand85.skipped === true ? currentAppInitialSharedMember0885(onboardingPageBinding636, name) : currentAppInitialSharedMember0495(onboardingPageBinding636, name);
      onComplete(onboardingPageOperand85);
    };
  let onboardingPageBinding638 = onboardingPageBinding637,
    onboardingPageBinding639 = children({
      completeStep: onboardingPageBinding638
    });
  return <>{onboardingPageBinding639}</>;
}
var onboardingPageBinding30,
  onboardingPageBinding31,
  onboardingPageBinding32 = once(() => {
    onboardingPageBinding30 = currentAppInitialSharedCompatSlotLowerGLowerC();
    currentAppInitialSharedCompatSlotUpperVLowerO();
    currentAppInitialSharedCompatSlotUpperD();
    reactRouterRuntime0849();
    onboardingPageBinding31 = currentAppInitialSharedCompatSlotLowerLLowerC();
  });
class OnboardingFlowModule {
  static get onboardingPageUnit15() {
    return onboardingPageUnit15;
  }
  static get onboardingPageUnit16() {
    return onboardingPageUnit16;
  }
  static get onboardingPageBinding29() {
    return onboardingPageBinding29;
  }
  static get onboardingPageBinding32() {
    return onboardingPageBinding32;
  }
  static get onboardingPageUnit2() {
    return onboardingPageUnit2;
  }
  static get onboardingPageUnit6() {
    return onboardingPageUnit6;
  }
  static get onboardingPageUnit7() {
    return onboardingPageUnit7;
  }
  static get onboardingPageBinding24() {
    return onboardingPageBinding24;
  }
  static get onboardingPageBinding26() {
    return onboardingPageBinding26;
  }
  static get onboardingPageBinding28() {
    return onboardingPageBinding28;
  }
}
export { OnboardingFlowModule };
