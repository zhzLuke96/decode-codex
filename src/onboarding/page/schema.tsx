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
function onboardingPageUnit1(onboardingPageOperand75, onboardingPageOperand76) {
  return onboardingPageOperand75.includes(onboardingPageOperand76) ? onboardingPageOperand75.filter(item => item !== onboardingPageOperand76) : [...onboardingPageOperand75, onboardingPageOperand76];
}
var onboardingPageBinding1,
  onboardingPageBinding2 = once(() => {
    onboardingPageBinding1 = ["animals", "fitness", "school", "art_creative", "beauty_style", "science", "money", "gaming", "music", "sports", "coding", "other"];
  }),
  onboardingPageBinding3,
  onboardingPageBinding4,
  onboardingPageBinding5,
  onboardingPageBinding6,
  onboardingPageBinding7,
  onboardingPageBinding8,
  onboardingPageBinding9,
  onboardingPageBinding10,
  $r,
  onboardingPageBinding11,
  onboardingPageBinding12,
  onboardingPageBinding13,
  onboardingPageBinding14,
  onboardingPageBinding15,
  onboardingPageBinding16 = once(() => {
    currentAppInitialSharedCompatSlotUpperSLowerO();
    onboardingPageBinding2();
    onboardingPageBinding3 = ["default", "engineering", "product_management", "finance", "marketing", "sales", "operations", "people_hr", "legal", "data_science", "design", "student", "something_else"];
    onboardingPageBinding4 = ["coding", "non_coding"];
    onboardingPageBinding5 = ["claude-code", "claude-cowork"];
    onboardingPageBinding6 = currentAppInitialSharedCompatSlotUpperELowerO({
      state: currentAppInitialSharedCompatSlotUpperELowerO({
        roles: currentAppInitialSharedCompatSlotLowerMLowerO(currentAppInitialSharedCompatSlotUpperULowerO(onboardingPageBinding3)),
        personalizedSuggestionsEnabled: currentAppInitialSharedCompatSlotUpperGLowerO(),
        workMode: currentAppInitialSharedCompatSlotUpperULowerO(onboardingPageBinding4).nullable()
      }),
      options: currentAppInitialSharedCompatSlotUpperELowerO({
        focusComposer: currentAppInitialSharedCompatSlotUpperGLowerO().optional(),
        prefillPrompt: currentAppInitialSharedCompatSlotLowerJLowerO().optional()
      }).optional()
    });
    onboardingPageBinding7 = {
      Start: "start",
      TeenWelcome: "teen-welcome",
      TeenInterests: "teen-interests",
      TeenPrompts: "teen-prompts",
      WindowsSandboxSetup: "windows-sandbox-setup",
      ConversationalOnboarding: "conversational-onboarding",
      RoleSelection: "role-selection",
      AgentMigrationSourceSelection: "agent-migration-source-selection",
      AgentMigrationItemSelection: "agent-migration-item-selection",
      Complete: "complete"
    };
    onboardingPageBinding8 = currentAppInitialSharedCompatSlotUpperELowerO({
      step: currentAppInitialSharedCompatSlotUpperSLowerO(onboardingPageBinding7.TeenWelcome)
    });
    onboardingPageBinding9 = currentAppInitialSharedCompatSlotUpperELowerO({
      step: currentAppInitialSharedCompatSlotUpperSLowerO(onboardingPageBinding7.TeenInterests),
      interests: currentAppInitialSharedCompatSlotLowerMLowerO(currentAppInitialSharedCompatSlotUpperULowerO(onboardingPageBinding1))
    });
    onboardingPageBinding10 = currentAppInitialSharedCompatSlotUpperELowerO({
      step: currentAppInitialSharedCompatSlotUpperSLowerO(onboardingPageBinding7.TeenPrompts),
      completion: onboardingPageBinding6
    });
    $r = currentAppInitialSharedCompatSlotUpperELowerO({
      step: currentAppInitialSharedCompatSlotUpperSLowerO(onboardingPageBinding7.WindowsSandboxSetup)
    });
    onboardingPageBinding11 = currentAppInitialSharedCompatSlotUpperELowerO({
      step: currentAppInitialSharedCompatSlotUpperSLowerO(onboardingPageBinding7.ConversationalOnboarding),
      roles: currentAppInitialSharedCompatSlotLowerMLowerO(currentAppInitialSharedCompatSlotUpperULowerO(onboardingPageBinding3)),
      personalizedSuggestionsEnabled: currentAppInitialSharedCompatSlotUpperGLowerO(),
      workMode: currentAppInitialSharedCompatSlotUpperULowerO(onboardingPageBinding4).nullable()
    });
    onboardingPageBinding12 = currentAppInitialSharedCompatSlotUpperELowerO({
      step: currentAppInitialSharedCompatSlotUpperSLowerO(onboardingPageBinding7.RoleSelection),
      roles: currentAppInitialSharedCompatSlotLowerMLowerO(currentAppInitialSharedCompatSlotUpperULowerO(onboardingPageBinding3)),
      personalizedSuggestionsEnabled: currentAppInitialSharedCompatSlotUpperGLowerO(),
      workMode: currentAppInitialSharedCompatSlotUpperULowerO(onboardingPageBinding4).nullable()
    });
    onboardingPageBinding13 = currentAppInitialSharedCompatSlotUpperELowerO({
      step: currentAppInitialSharedCompatSlotUpperSLowerO(onboardingPageBinding7.AgentMigrationSourceSelection),
      providerIds: currentAppInitialSharedCompatSlotLowerMLowerO(currentAppInitialSharedCompatSlotUpperULowerO(onboardingPageBinding5)),
      skipped: currentAppInitialSharedCompatSlotUpperGLowerO().optional()
    });
    onboardingPageBinding14 = currentAppInitialSharedCompatSlotUpperELowerO({
      step: currentAppInitialSharedCompatSlotUpperSLowerO(onboardingPageBinding7.AgentMigrationItemSelection),
      action: currentAppInitialSharedCompatSlotUpperULowerO(["imported", "skipped"])
    });
    onboardingPageBinding15 = currentAppInitialSharedCompatSlotUpperVLowerO("step", [onboardingPageBinding8, onboardingPageBinding9, onboardingPageBinding10, $r, onboardingPageBinding11, onboardingPageBinding12, onboardingPageBinding13, onboardingPageBinding14]);
  }),
  onboardingPageBinding17,
  onboardingPageBinding18,
  onboardingPageBinding19,
  onboardingPageBinding20,
  ui,
  onboardingPageBinding21 = once(() => {
    currentAppInitialSharedCompatSlotUpperVLowerO();
    currentAppInitialSharedCompatSlotUpperD();
    onboardingPageBinding16();
    onboardingPageBinding17 = currentAppInitialSharedCompatSlotUpperLLowerS("OnboardingScope", {
      parent: currentAppInitialSharedCompatSlotUpperE
    });
    onboardingPageBinding18 = currentAppInitialSharedCompatSlotUpperRLowerS(onboardingPageBinding17, () => onboardingPageBinding7.Start);
    onboardingPageBinding19 = currentAppInitialSharedCompatSlotUpperRLowerS(onboardingPageBinding17, () => null);
    onboardingPageBinding20 = currentAppInitialSharedCompatSlotUpperRLowerS(onboardingPageBinding17, () => null);
    ui = currentAppInitialSharedCompatSlotUpperRLowerS(onboardingPageBinding17, () => null);
  });
class OnboardingSchemaModule {
  static get onboardingPageBinding17() {
    return onboardingPageBinding17;
  }
  static get onboardingPageBinding19() {
    return onboardingPageBinding19;
  }
  static get onboardingPageBinding21() {
    return onboardingPageBinding21;
  }
  static get onboardingPageBinding18() {
    return onboardingPageBinding18;
  }
  static get onboardingPageBinding7() {
    return onboardingPageBinding7;
  }
  static get onboardingPageBinding15() {
    return onboardingPageBinding15;
  }
  static get onboardingPageBinding20() {
    return onboardingPageBinding20;
  }
  static get ui() {
    return ui;
  }
  static get onboardingPageBinding16() {
    return onboardingPageBinding16;
  }
  static get onboardingPageUnit1() {
    return onboardingPageUnit1;
  }
  static get onboardingPageBinding2() {
    return onboardingPageBinding2;
  }
}
export { OnboardingSchemaModule };
