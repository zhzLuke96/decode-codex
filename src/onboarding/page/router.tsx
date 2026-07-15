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
import { OnboardingAgentMigrationModule } from "./agent-migration";
import { OnboardingConversationalDataModule } from "./conversational-data";
import { OnboardingRoleSelectionModule } from "./role-selection";
import { OnboardingTeenInterestsModule } from "./teen-interests";
import { OnboardingTeenPromptsModule } from "./teen-prompts";
import { OnboardingTeenWelcomeModule } from "./teen-welcome";
import { OnboardingWindowsSandboxModule } from "./windows-sandbox";
function onboardingPageUnit54(onboardingPageOperand10) {
  let {
      currentStep,
      onboardingContext,
      onContinue
    } = onboardingPageOperand10,
    onboardingPageBinding387 = currentAppInitialSharedCompatSlotLowerQLowerO(OnboardingSchemaModule.onboardingPageBinding20),
    onboardingPageBinding388 = currentAppInitialSharedCompatSlotLowerQLowerO(OnboardingSchemaModule.ui);
  switch (currentStep) {
    case OnboardingSchemaModule.onboardingPageBinding7.Start:
      {
        let onboardingPageBinding685;
        return React.createElement(NewThreadDebugLoading, {
          debugName: "OnboardingLoadingPage"
        });
      }
    case OnboardingSchemaModule.onboardingPageBinding7.TeenWelcome:
      {
        let onboardingPageBinding679;
        return React.createElement(OnboardingTeenWelcomeModule.onboardingPageUnit47, {
          onContinue: () => {
            onContinue();
          }
        });
      }
    case OnboardingSchemaModule.onboardingPageBinding7.TeenInterests:
      {
        let onboardingPageBinding678;
        return React.createElement(OnboardingTeenInterestsModule.$a, {
          onContinue: onboardingPageOperand96 => {
            onContinue(onboardingPageOperand96);
          }
        });
      }
    case OnboardingSchemaModule.onboardingPageBinding7.TeenPrompts:
      {
        if (onboardingPageBinding387 == null) return null;
        let onboardingPageBinding647 = onboardingPageOperand99 => {
          onContinue(onboardingPageOperand99);
        };
        let onboardingPageBinding648;
        return React.createElement(OnboardingTeenPromptsModule.onboardingPageUnit43, {
          selectedInterests: onboardingPageBinding387.interests,
          onContinue: onboardingPageBinding647
        });
      }
    case OnboardingSchemaModule.onboardingPageBinding7.WindowsSandboxSetup:
      {
        let onboardingPageBinding677;
        return React.createElement(OnboardingWindowsSandboxModule.onboardingPageUnit49, {
          onContinue: onboardingPageOperand97 => {
            onContinue(onboardingPageOperand97);
          }
        });
      }
    case OnboardingSchemaModule.onboardingPageBinding7.ConversationalOnboarding:
      {
        let onboardingPageBinding688;
        return React.createElement(OnboardingConversationalDataModule.onboardingPageUnit32, {
          onContinue
        });
      }
    case OnboardingSchemaModule.onboardingPageBinding7.RoleSelection:
      {
        let onboardingPageBinding652 = onboardingPageOperand100 => {
          onContinue(onboardingPageOperand100);
        };
        let onboardingPageBinding653;
        return React.createElement(OnboardingRoleSelectionModule.onboardingPageUnit36, {
          isAdvancePending: onboardingContext.isLoading,
          onContinue: onboardingPageBinding652
        });
      }
    case OnboardingSchemaModule.onboardingPageBinding7.AgentMigrationSourceSelection:
      {
        let onboardingPageBinding649 = onboardingPageOperand101 => {
          onContinue(onboardingPageOperand101);
        };
        let onboardingPageBinding650;
        return React.createElement(OnboardingAgentMigrationModule.onboardingPageUnit19, {
          agentMigrationContext: onboardingContext.agentMigration,
          onContinue: onboardingPageBinding649
        });
      }
    case OnboardingSchemaModule.onboardingPageBinding7.AgentMigrationItemSelection:
      {
        if (onboardingPageBinding388 == null) return null;
        let onboardingPageBinding633 = onboardingPageOperand102 => {
          onContinue(onboardingPageOperand102);
        };
        let onboardingPageBinding634;
        return React.createElement(OnboardingAgentMigrationModule.onboardingPageUnit17, {
          agentMigrationContext: onboardingContext.agentMigration,
          providerIds: onboardingPageBinding388.providerIds,
          onContinue: onboardingPageBinding633
        });
      }
    case OnboardingSchemaModule.onboardingPageBinding7.Complete:
      return null;
  }
}
var onboardingPageBinding105,
  onboardingPageBinding106,
  onboardingPageBinding107 = once(() => {
    onboardingPageBinding105 = currentAppInitialSharedCompatSlotLowerGLowerC();
    currentAppInitialSharedCompatSlotUpperVLowerO();
    initNewThreadDebugLoadingChunk();
    OnboardingSchemaModule.onboardingPageBinding21();
    OnboardingSchemaModule.onboardingPageBinding16();
    OnboardingAgentMigrationModule.onboardingPageBinding36();
    OnboardingAgentMigrationModule.onboardingPageBinding40();
    OnboardingConversationalDataModule.onboardingPageBinding71();
    OnboardingRoleSelectionModule.onboardingPageBinding75();
    OnboardingTeenInterestsModule.onboardingPageBinding81();
    OnboardingTeenPromptsModule.onboardingPageBinding88();
    OnboardingTeenWelcomeModule.onboardingPageBinding95();
    OnboardingWindowsSandboxModule.onboardingPageBinding104();
    onboardingPageBinding106 = currentAppInitialSharedCompatSlotLowerLLowerC();
  });
function onboardingPageUnit55() {
  let onboardingPageBinding536 = currentAppInitialSharedCompatSlotUpperKLowerO(OnboardingSchemaModule.onboardingPageBinding17),
    onboardingPageBinding537 = appgenLibraryHotDjo67r4nCompatSlotLowerELowerN(),
    onboardingPageBinding538 = currentAppInitialSharedCompatSlotLowerQLowerO(OnboardingSchemaModule.onboardingPageBinding18),
    onboardingPageBinding539 = currentAppInitialSharedCompatSlotUpperJLowerS(onboardingOverrideAtom),
    onboardingPageBinding540 = currentAppInitialSharedCompatSlotUpperJLowerS(welcomeOnboardingPendingAtom),
    onboardingPageBinding541 = currentAppInitialSharedCompatSlotLowerQLowerO(hasCompletedProjectlessOnboardingSignal),
    onboardingPageBinding542 = OnboardingFlowModule.onboardingPageUnit2(),
    [onboardingPageBinding543, onboardingPageBinding544] = onboardingPageBinding109.useState(false),
    onboardingPageBinding545 = {
      finalStep: onboardingPageBinding537,
      hasPreviouslyCompletedOnboarding: onboardingPageBinding541,
      isAdvancingOnboarding: onboardingPageBinding543,
      onboardingOverride: onboardingPageBinding539,
      postLoginWelcomePending: onboardingPageBinding540
    };
  let onboardingPageBinding546 = OnboardingFlowModule.onboardingPageUnit6(onboardingPageBinding545),
    onboardingPageBinding547 = onboardingPageOperand61 => OnboardingFlowModule.onboardingPageUnit7(onboardingPageBinding536, {
      completeOnboarding: onboardingPageBinding542,
      logEntered: () => currentAppInitialSharedMember0903(onboardingPageBinding536),
      logStepViewed: onboardingPageOperand104 => currentAppInitialSharedMember0320(onboardingPageBinding536, onboardingPageOperand104),
      onboardingContext: onboardingPageBinding546,
      result: onboardingPageOperand61
    });
  let onboardingPageBinding548 = onboardingPageBinding547,
    onboardingPageBinding549 = () => {
      onboardingPageBinding548();
    };
  let onboardingPageBinding550 = onboardingPageBinding109.useEffectEvent(onboardingPageBinding549),
    onboardingPageBinding551 = () => {
      onboardingPageBinding538 !== OnboardingSchemaModule.onboardingPageBinding7.Start || onboardingPageBinding546.isLoading || onboardingPageBinding550();
    };
  let onboardingPageBinding552;
  onboardingPageBinding552 = [onboardingPageBinding538, onboardingPageBinding546.isLoading];
  onboardingPageBinding109.useEffect(onboardingPageBinding551, onboardingPageBinding552);
  let onboardingPageBinding553 = onboardingPageOperand72 => (onboardingPageBinding544(true), onboardingPageBinding548(onboardingPageOperand72).finally(() => {
    onboardingPageBinding544(false);
  }));
  let onboardingPageBinding554 = onboardingPageBinding553;
  return React.createElement(onboardingPageUnit54, {
    currentStep: onboardingPageBinding538,
    onboardingContext: onboardingPageBinding546,
    onContinue: onboardingPageBinding554
  });
}
var onboardingPageBinding108,
  onboardingPageBinding109,
  onboardingPageBinding110,
  onboardingPageBinding111 = once(() => {
    onboardingPageBinding108 = currentAppInitialSharedCompatSlotLowerGLowerC();
    currentAppInitialSharedCompatSlotUpperGLowerS();
    currentAppInitialSharedCompatSlotUpperVLowerO();
    onboardingPageBinding109 = toEsModule(currentAppInitialSharedCompatSlotUpperC(), 1);
    reactRouterRuntime0849();
    initOnboardingStateChunk();
    appgenLibraryHotDjo67r4nCompatSlotDollarLowerT();
    OnboardingFlowModule.onboardingPageBinding24();
    OnboardingFlowModule.onboardingPageBinding26();
    OnboardingFlowModule.onboardingPageBinding28();
    OnboardingSchemaModule.onboardingPageBinding21();
    OnboardingSchemaModule.onboardingPageBinding16();
    onboardingPageBinding107();
    onboardingPageBinding110 = currentAppInitialSharedCompatSlotLowerLLowerC();
  });
class OnboardingRouterModule {
  static get onboardingPageUnit55() {
    return onboardingPageUnit55;
  }
  static get onboardingPageBinding111() {
    return onboardingPageBinding111;
  }
}
export { OnboardingRouterModule };
