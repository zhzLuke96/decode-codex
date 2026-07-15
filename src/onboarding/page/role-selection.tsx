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
import { OnboardingPersonalizedSuggestionsModule } from "./personalized-suggestions";
function onboardingPageUnit36(onboardingPageOperand4) {
  let {
      isAdvancePending = false,
      onContinue
    } = onboardingPageOperand4,
    onboardingPageBinding299 = currentAppInitialSharedCompatSlotUpperKLowerO(currentAppInitialSharedCompatSlotUpperE),
    onboardingPageBinding300 = currentAppInitialSharedCompatSlotUpperJLowerS(workspaceExperimentAssignmentAtom),
    onboardingPageBinding301 = currentAppInitialSharedMember0730("4147559047"),
    onboardingPageBinding302 = onboardingPageBinding301.get("allow_multi_select", true);
  let onboardingPageBinding303 = onboardingPageBinding302,
    onboardingPageBinding304 = onboardingPageBinding301.get("allow_skip", true);
  let onboardingPageBinding305 = onboardingPageBinding304,
    [onboardingPageBinding306] = onboardingPageBinding73.useState(getShuffledWelcomeOnboardingRoles),
    onboardingPageBinding307 = {
      roles: [],
      personalizedSuggestionsEnabled: true,
      workMode: null
    };
  let [onboardingPageBinding308, onboardingPageBinding309] = onboardingPageBinding73.useState(onboardingPageBinding307),
    onboardingPageBinding310 = onboardingPageOperand51 => {
      let {
        role,
        selected,
        state
      } = onboardingPageOperand51;
      imagePickerSchemaCapabilities(onboardingPageBinding299, currentAppInitialSharedMember0396, {
        step: "role",
        option: role,
        selected,
        selectedRoles: state.roles.join(","),
        selectedWorkMode: state.workMode ?? undefined,
        experimentArm: onboardingPageBinding300?.arm
      });
    };
  let onboardingPageBinding311 = onboardingPageBinding310,
    onboardingPageBinding312 = onboardingPageOperand60 => {
      imagePickerSchemaCapabilities(onboardingPageBinding299, currentAppInitialSharedMember0431, {
        step: "role",
        selectedRoles: onboardingPageOperand60.roles.join(","),
        selectedWorkMode: onboardingPageOperand60.workMode ?? undefined,
        experimentArm: onboardingPageBinding300?.arm
      });
    };
  let onboardingPageBinding313 = onboardingPageBinding312,
    onboardingPageBinding314 = onboardingPageOperand54 => {
      let onboardingPageBinding680 = !onboardingPageBinding303 || !onboardingPageBinding308.roles.includes(onboardingPageOperand54),
        onboardingPageBinding681 = [onboardingPageOperand54];
      onboardingPageBinding303 && (onboardingPageBinding681 = onboardingPageBinding680 ? [...onboardingPageBinding308.roles, onboardingPageOperand54] : onboardingPageBinding308.roles.filter(item => item !== onboardingPageOperand54));
      let onboardingPageBinding682 = {
        ...onboardingPageBinding308,
        roles: onboardingPageBinding681,
        workMode: getWelcomeOnboardingWorkMode(onboardingPageBinding681)
      };
      onboardingPageBinding309(onboardingPageBinding682);
      onboardingPageBinding311({
        role: onboardingPageOperand54,
        selected: onboardingPageBinding680,
        state: onboardingPageBinding682
      });
    };
  let onboardingPageBinding315 = onboardingPageBinding314,
    onboardingPageBinding316 = onboardingPageOperand77 => {
      onboardingPageBinding309(onboardingPageOperand94 => ({
        ...onboardingPageOperand94,
        personalizedSuggestionsEnabled: onboardingPageOperand77
      }));
    };
  let onboardingPageBinding317 = onboardingPageBinding316,
    onboardingPageBinding318 = onboardingPageBinding308.roles.length > 0 && !isAdvancePending,
    onboardingPageBinding319 = !isAdvancePending,
    onboardingPageBinding320 = onboardingPageOperand89 => {
      let {
        result
      } = onboardingPageOperand89;
      return onContinue(result);
    };
  let onboardingPageBinding321 = onboardingPageOperand6 => {
    let {
      completeStep
    } = onboardingPageOperand6;
    return <div className="flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary text-token-foreground">
        <div className="flex w-full max-w-3xl flex-col items-center justify-start">
          <div className="flex w-full max-w-[560px] flex-col items-center overflow-hidden rounded-2xl p-10">
            <div className="flex flex-col items-center text-center">
              <img src={generalAppearanceCurrentCompatSlotLowerZ} className="size-12 shrink-0" draggable={false} alt="" aria-hidden="true" />
              <h1 className="mt-4 text-[28px] leading-[34px] font-normal whitespace-nowrap text-token-foreground max-[540px]:whitespace-normal">
                {React.createElement(currentAppInitialSharedMember0924, {
                id: "electron.onboarding.welcomeV2.role.title",
                defaultMessage: "What type of work do you do?",
                description: "Welcome v2 role selection title"
              })}
              </h1>
              <p className="mt-2 text-[16px] leading-6 text-token-description-foreground">
                {React.createElement(currentAppInitialSharedMember0924, {
                id: "electron.onboarding.welcomeV2.role.subtitle",
                defaultMessage: "Customize Codex to fit the way you work",
                description: "Welcome v2 role selection subtitle"
              })}
              </p>
            </div>
            <div className="mt-8 grid w-full grid-cols-2 gap-2 min-[540px]:grid-cols-3">
              {onboardingPageBinding306.map(item => React.createElement(onboardingPageUnit37, {
              key: item,
              role: item,
              selected: onboardingPageBinding308.roles.includes(item),
              onClick: () => onboardingPageBinding315(item)
            }))}
            </div>
            {React.createElement(OnboardingPersonalizedSuggestionsModule.onboardingPageUnit21, {
            checked: onboardingPageBinding308.personalizedSuggestionsEnabled,
            onChange: onboardingPageBinding317
          })}
            <div className="mt-8 flex w-full max-w-xs flex-col items-center gap-3">
              <button className={worktreeNewThreadQueryCompatSlotLowerMLowerH("flex w-full items-center justify-center rounded-full border border-transparent px-4 py-3 text-[14px] leading-5 font-medium text-token-dropdown-background", onboardingPageBinding318 ? "cursor-interaction bg-token-foreground hover:bg-token-foreground/80" : "cursor-not-allowed bg-token-foreground/30")} type="button" disabled={!onboardingPageBinding318} onClick={() => {
              completeStep({
                result: {
                  step: OnboardingSchemaModule.onboardingPageBinding7.RoleSelection,
                  roles: onboardingPageBinding308.roles,
                  personalizedSuggestionsEnabled: onboardingPageBinding308.personalizedSuggestionsEnabled,
                  workMode: getWelcomeOnboardingWorkMode(onboardingPageBinding308.roles)
                }
              });
            }}>
                {React.createElement(currentAppInitialSharedMember0924, {
                id: "electron.onboarding.welcomeV2.continue",
                defaultMessage: "Continue",
                description: "Welcome v2 continue button label"
              })}
              </button>
              {onboardingPageBinding305 ? <button type="button" className={worktreeNewThreadQueryCompatSlotLowerMLowerH("inline-flex items-center justify-center px-2 py-2 text-[14px] font-medium text-token-description-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border", onboardingPageBinding319 ? "cursor-interaction hover:text-token-foreground" : "cursor-not-allowed opacity-50")} disabled={!onboardingPageBinding319} onClick={() => {
              let onboardingPageBinding651 = {
                roles: ["something_else"],
                personalizedSuggestionsEnabled: false,
                workMode: "non_coding"
              };
              onboardingPageBinding313(onboardingPageBinding651);
              completeStep({
                result: {
                  step: OnboardingSchemaModule.onboardingPageBinding7.RoleSelection,
                  ...onboardingPageBinding651
                },
                skipped: true
              });
            }}>
                  {React.createElement(currentAppInitialSharedMember0924, {
                id: "electron.onboarding.welcomeV2.skip",
                defaultMessage: "Skip",
                description: "Welcome v2 skip button label"
              })}
                </button> : null}
            </div>
          </div>
        </div>
      </div>;
  };
  return React.createElement(OnboardingFlowModule.onboardingPageUnit16, {
    name: "role_selection",
    onComplete: onboardingPageBinding320
  }, onboardingPageBinding321);
}
function onboardingPageUnit37(onboardingPageOperand24) {
  let {
      role,
      selected,
      onClick
    } = onboardingPageOperand24,
    onboardingPageBinding588 = selected ? "border-token-foreground/20 bg-token-foreground/[0.06]" : "border-token-border bg-token-main-surface-primary hover:bg-token-foreground/[0.03]",
    onboardingPageBinding589 = worktreeNewThreadQueryCompatSlotLowerMLowerH("relative flex h-10 min-w-0 items-center justify-center overflow-hidden rounded-xl border px-3 py-2 text-center text-[14px] leading-5 font-normal text-token-foreground", onboardingPageBinding588);
  let onboardingPageBinding590 = welcomeOnboardingRoleMessages[role],
    onboardingPageBinding591 = <span className="min-w-0 truncate">
        {React.createElement(currentAppInitialSharedMember0924, {
        ...onboardingPageBinding590
      })}
      </span>;
  let onboardingPageBinding592 = selected ? React.createElement(worktreeNewThreadQueryCompatSlotUpperOLowerP, {
    className: "absolute left-2 size-4 text-token-foreground",
    "aria-hidden": "true"
  }) : null;
  return <button type="button" className={onboardingPageBinding589} aria-pressed={selected} onClick={onClick}>
      {onboardingPageBinding591}
      {onboardingPageBinding592}
    </button>;
}
var onboardingPageBinding72,
  onboardingPageBinding73,
  onboardingPageBinding74,
  onboardingPageBinding75 = once(() => {
    onboardingPageBinding72 = currentAppInitialSharedCompatSlotLowerGLowerC();
    remoteControlRefreshSourceEnum();
    worktreeNewThreadQueryCompatSlotLowerHLowerH();
    currentAppInitialSharedCompatSlotUpperGLowerS();
    currentAppInitialSharedCompatSlotUpperVLowerO();
    onboardingPageBinding73 = toEsModule(currentAppInitialSharedCompatSlotUpperC(), 1);
    intlFormatDateTimeRuntime();
    generalAppearanceCurrentCompatSlotUpperB();
    worktreeNewThreadQueryCompatSlotLowerKLowerP();
    initWelcomeOnboardingRolesChunk();
    initOnboardingStateChunk();
    remoteConnectionRuntime0298();
    currentAppInitialSharedCompatSlotUpperD();
    currentAppInitialSharedRuntime0816();
    OnboardingSchemaModule.onboardingPageBinding16();
    OnboardingPersonalizedSuggestionsModule.onboardingPageBinding42();
    OnboardingFlowModule.onboardingPageBinding32();
    onboardingPageBinding74 = currentAppInitialSharedCompatSlotLowerLLowerC();
  });
class OnboardingRoleSelectionModule {
  static get onboardingPageUnit36() {
    return onboardingPageUnit36;
  }
  static get onboardingPageBinding75() {
    return onboardingPageBinding75;
  }
}
export { OnboardingRoleSelectionModule };
