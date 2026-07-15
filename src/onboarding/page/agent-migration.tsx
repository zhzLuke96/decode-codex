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
function onboardingPageUnit17(onboardingPageOperand14) {
  let {
      agentMigrationContext,
      providerIds,
      onContinue
    } = onboardingPageOperand14,
    onboardingPageBinding440 = currentAppInitialSharedCompatSlotUpperKLowerO(currentAppInitialSharedCompatSlotUpperE),
    onboardingPageBinding441 = currentAppInitialSharedCompatSlotUpperJLowerS(workspaceExperimentAssignmentAtom),
    onboardingPageBinding442 = {
      status: "idle"
    };
  let [onboardingPageBinding443, onboardingPageBinding444] = onboardingPageBinding34.useState(onboardingPageBinding442),
    onboardingPageBinding445 = {
      enabled: agentMigrationContext.isSupported
    };
  let onboardingPageBinding446 = generalAppearanceCurrentCompatSlotLowerX(onboardingPageBinding445),
    onboardingPageBinding447 = onboardingPageBinding446.getSummaryForProviders(providerIds);
  let onboardingPageBinding448 = onboardingPageBinding447,
    onboardingPageBinding449 = onboardingPageOperand86 => {
      imagePickerSchemaCapabilities(onboardingPageBinding440, currentAppInitialSharedMember0749, {
        ...onboardingPageOperand86,
        experimentArm: onboardingPageBinding441?.arm
      });
    };
  let onboardingPageBinding450 = onboardingPageBinding449;
  if (onboardingPageBinding448 == null) return null;
  let onboardingPageBinding451 = onboardingPageOperand38 => {
    let {
      result,
      skipped
    } = onboardingPageOperand38;
    if (skipped === true || result == null) {
      onContinue({
        step: OnboardingSchemaModule.onboardingPageBinding7.AgentMigrationItemSelection,
        action: "skipped"
      });
      return;
    }
    OnboardingFlowModule.onboardingPageUnit15({
      importSelection: () => onboardingPageBinding446.importSelection(result, providerIds),
      importStatus: onboardingPageBinding443,
      onComplete: () => {
        onContinue({
          step: OnboardingSchemaModule.onboardingPageBinding7.AgentMigrationItemSelection,
          action: "imported"
        });
      },
      onImportStarted: onboardingPageUnit18,
      scope: onboardingPageBinding440,
      setImportStatus: onboardingPageBinding444
    });
  };
  let onboardingPageBinding452 = onboardingPageOperand36 => {
    let {
      completeStep
    } = onboardingPageOperand36;
    return React.createElement(generalAppearanceCurrentCompatSlotLowerH, {
      appBrand: CODEX_APP_BRAND_ID,
      hasError: onboardingPageBinding443.status === "error",
      isComplete: onboardingPageBinding443.status === "success",
      isPending: onboardingPageBinding446.isImporting || onboardingPageBinding443.status === "importing",
      logShownOnMount: false,
      detectedProviderIds: onboardingPageBinding446.providerIds,
      providerIds,
      summary: onboardingPageBinding448,
      onContinue: onboardingPageOperand95 => {
        completeStep({
          result: onboardingPageOperand95
        });
      },
      onEvent: onboardingPageBinding450,
      onSkip: () => {
        completeStep({
          result: null,
          skipped: true
        });
      }
    });
  };
  return <div className="flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary text-token-foreground">
      <div className="flex w-full max-w-3xl flex-col items-center justify-start">
        {React.createElement(OnboardingFlowModule.onboardingPageUnit16, {
        name: "agent_migration_item_selection",
        onComplete: onboardingPageBinding451
      }, onboardingPageBinding452)}
      </div>
    </div>;
}
function onboardingPageUnit18() {}
var onboardingPageBinding33,
  onboardingPageBinding34,
  onboardingPageBinding35,
  onboardingPageBinding36 = once(() => {
    onboardingPageBinding33 = currentAppInitialSharedCompatSlotLowerGLowerC();
    remoteControlRefreshSourceEnum();
    currentAppInitialSharedCompatSlotUpperGLowerS();
    currentAppInitialSharedCompatSlotUpperVLowerO();
    onboardingPageBinding34 = toEsModule(currentAppInitialSharedCompatSlotUpperC(), 1);
    initCodexAppIdentityChunk();
    initOnboardingStateChunk();
    remoteConnectionRuntime0298();
    currentAppInitialSharedCompatSlotUpperD();
    OnboardingFlowModule.onboardingPageBinding29();
    generalAppearanceCurrentCompatSlotLowerG();
    generalAppearanceCurrentCompatSlotUpperB();
    OnboardingSchemaModule.onboardingPageBinding16();
    OnboardingFlowModule.onboardingPageBinding32();
    onboardingPageBinding35 = currentAppInitialSharedCompatSlotLowerLLowerC();
  });
function onboardingPageUnit19(onboardingPageOperand37) {
  let {
      agentMigrationContext,
      onContinue
    } = onboardingPageOperand37,
    onboardingPageBinding642 = {
      enabled: agentMigrationContext.isSupported
    };
  let onboardingPageBinding643 = generalAppearanceCurrentCompatSlotLowerX(onboardingPageBinding642);
  if (onboardingPageBinding643.summary == null) return null;
  return React.createElement(onboardingPageUnit20, {
    agentMigration: onboardingPageBinding643,
    onContinue,
    summary: onboardingPageBinding643.summary
  });
}
function onboardingPageUnit20(onboardingPageOperand16) {
  let {
      agentMigration,
      onContinue,
      summary
    } = onboardingPageOperand16,
    onboardingPageBinding464 = currentAppInitialSharedCompatSlotUpperKLowerO(currentAppInitialSharedCompatSlotUpperE),
    onboardingPageBinding465 = currentAppInitialSharedCompatSlotUpperJLowerS(workspaceExperimentAssignmentAtom),
    onboardingPageBinding466 = onboardingPageBinding38.useRef(false),
    onboardingPageBinding467 = onboardingPageOperand87 => {
      imagePickerSchemaCapabilities(onboardingPageBinding464, currentAppInitialSharedMember0749, {
        ...onboardingPageOperand87,
        experimentArm: onboardingPageBinding465?.arm
      });
    };
  let onboardingPageBinding468 = onboardingPageBinding467,
    onboardingPageBinding469 = onboardingPageOperand65 => {
      onboardingPageBinding468({
        source: "first_time_onboarding",
        action: onboardingPageOperand65,
        ...generalAppearanceCurrentCompatSlotLowerV(summary, generalAppearanceCurrentCompatSlotUnderscore(summary), agentMigration.providerIds)
      });
    };
  let onboardingPageBinding470 = onboardingPageBinding469,
    onboardingPageBinding471 = () => {
      onboardingPageBinding470("shown");
    };
  let onboardingPageBinding472 = onboardingPageBinding38.useEffectEvent(onboardingPageBinding471),
    onboardingPageBinding473 = () => {
      onboardingPageBinding466.current || (onboardingPageBinding466.current = true, onboardingPageBinding472());
    };
  let onboardingPageBinding474;
  onboardingPageBinding474 = [summary];
  onboardingPageBinding38.useEffect(onboardingPageBinding473, onboardingPageBinding474);
  let onboardingPageBinding475 = onboardingPageOperand88 => {
    let {
      result
    } = onboardingPageOperand88;
    return onContinue(result);
  };
  let onboardingPageBinding476 = onboardingPageOperand30 => {
    let {
      completeStep
    } = onboardingPageOperand30;
    return React.createElement(generalAppearanceCurrentCompatSlotUpperN, {
      appBrand: CODEX_APP_BRAND_ID,
      providerIds: agentMigration.providerIds,
      onContinue: onboardingPageOperand48 => {
        let onboardingPageBinding671 = agentMigration.getSummaryForProviders(onboardingPageOperand48) == null;
        onboardingPageBinding671 && onboardingPageBinding470("skipped");
        completeStep({
          result: {
            step: OnboardingSchemaModule.onboardingPageBinding7.AgentMigrationSourceSelection,
            providerIds: onboardingPageOperand48,
            ...(onboardingPageBinding671 ? {
              skipped: true
            } : {})
          },
          skipped: onboardingPageBinding671
        });
      },
      onSkip: () => {
        onboardingPageBinding470("skipped");
        completeStep({
          result: {
            step: OnboardingSchemaModule.onboardingPageBinding7.AgentMigrationSourceSelection,
            providerIds: [],
            skipped: true
          },
          skipped: true
        });
      }
    });
  };
  return <div className="flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary text-token-foreground">
      <div className="flex w-full max-w-3xl flex-col items-center justify-start">
        {React.createElement(OnboardingFlowModule.onboardingPageUnit16, {
        name: "agent_migration_source_selection",
        onComplete: onboardingPageBinding475
      }, onboardingPageBinding476)}
      </div>
    </div>;
}
var onboardingPageBinding37,
  onboardingPageBinding38,
  onboardingPageBinding39,
  onboardingPageBinding40 = once(() => {
    onboardingPageBinding37 = currentAppInitialSharedCompatSlotLowerGLowerC();
    remoteControlRefreshSourceEnum();
    currentAppInitialSharedCompatSlotUpperGLowerS();
    currentAppInitialSharedCompatSlotUpperVLowerO();
    onboardingPageBinding38 = toEsModule(currentAppInitialSharedCompatSlotUpperC(), 1);
    initCodexAppIdentityChunk();
    initOnboardingStateChunk();
    remoteConnectionRuntime0298();
    currentAppInitialSharedCompatSlotUpperD();
    generalAppearanceCurrentCompatSlotUpperP();
    generalAppearanceCurrentCompatSlotUpperB();
    OnboardingSchemaModule.onboardingPageBinding16();
    OnboardingFlowModule.onboardingPageBinding32();
    onboardingPageBinding39 = currentAppInitialSharedCompatSlotLowerLLowerC();
  });
class OnboardingAgentMigrationModule {
  static get onboardingPageUnit19() {
    return onboardingPageUnit19;
  }
  static get onboardingPageUnit17() {
    return onboardingPageUnit17;
  }
  static get onboardingPageBinding36() {
    return onboardingPageBinding36;
  }
  static get onboardingPageBinding40() {
    return onboardingPageBinding40;
  }
}
export { OnboardingAgentMigrationModule };
