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
import { OnboardingConversationalViewModule } from "./conversational-view";
function onboardingPageUnit32(onboardingPageOperand52) {
  let {
    onContinue
  } = onboardingPageOperand52;
  return React.createElement(currentAppInitialSharedCompatSlotUpperULowerO, {
    scope: appMainCurrentCompatSlotLowerY
  }, React.createElement(onboardingPageUnit33, {
    onContinue
  }));
}
function onboardingPageUnit33(onboardingPageOperand2) {
  let {
      onContinue
    } = onboardingPageOperand2,
    onboardingPageBinding193 = currentAppInitialSharedCompatSlotUpperKLowerO(appMainCurrentCompatSlotLowerY),
    onboardingPageBinding194 = worktreeNewThreadQueryCompatSlotUpperLLowerF(),
    {
      data
    } = worktreeNewThreadQueryCompatSlotLowerELowerF(),
    onboardingPageBinding195 = onboardingPageBinding194.accountId != null && onboardingPageBinding194.userId != null,
    onboardingPageBinding196 = {
      accountId: onboardingPageBinding194.accountId,
      enabled: onboardingPageBinding195,
      userId: onboardingPageBinding194.userId
    };
  let {
      data: _data,
      isLoading
    } = useProfileUsageQuery(onboardingPageBinding196),
    onboardingPageBinding197 = currentAppInitialSharedCompatSlotUpperJLowerS(welcomeV2RoleStateAtom),
    onboardingPageBinding198 = currentAppInitialSharedCompatSlotUpperYLowerS(welcomeV2RoleStateAtom),
    onboardingPageBinding199 = {
      conversationId: null,
      cwdOverride: onboardingPageBinding70,
      hostId: currentAppInitialSharedMember0542
    };
  let {
      isConfigDataPending,
      requirements: onboardingPageBinding200
    } = appMainCurrentCompatSlotLowerQLowerF(onboardingPageBinding199),
    onboardingPageBinding201 = {
      conversationId: null,
      cwdOverride: onboardingPageBinding70,
      hostId: currentAppInitialSharedMember0542
    };
  let {
      agentMode,
      permissionProfileId,
      shouldSendPermissionOverrides
    } = appMainCurrentCompatSlotUpperYLowerF(onboardingPageBinding201),
    {
      serviceTierSettings
    } = appMainCurrentCompatSlotUpperVLowerF(null),
    onboardingPageBinding202 = {
      hostId: currentAppInitialSharedMember0542
    };
  let {
      data: __data,
      isLoading: _isLoading
    } = appMainCurrentCompatSlotUpperPLowerP(onboardingPageBinding202),
    onboardingPageBinding203 = currentAppInitialSharedCompatSlotLowerQLowerO(appMainCurrentCompatSlotUpperA) ?? getConversationalOnboardingWorkflowState(onboardingPageBinding193),
    onboardingPageBinding204 = currentAppInitialSharedCompatSlotLowerQLowerO(windowVisibleSignal) === true,
    onboardingPageBinding205 = onboardingPageBinding203.selectedTask,
    onboardingPageBinding206 = currentAppInitialSharedCompatSlotLowerQLowerO(onboardingMailProviderDebugOverrideSignal),
    onboardingPageBinding207 = getEmailDomain(onboardingPageBinding194.email);
  let onboardingPageBinding208 = onboardingPageBinding207,
    onboardingPageBinding209 = onboardingPageBinding206 == null,
    onboardingPageBinding210 = {
      enabled: onboardingPageBinding209
    };
  let {
      data: ___data,
      isError
    } = currentAppInitialSharedCompatSlotUpperGLowerO(emailDomainMailProviderQuery, onboardingPageBinding208, onboardingPageBinding210),
    onboardingPageBinding211 = resolveMailProviderForEmailDomain({
      debugOverride: onboardingPageBinding206,
      detectedProvider: ___data?.provider,
      emailDomain: onboardingPageBinding208,
      isError
    }),
    onboardingPageBinding212 = data?.plan_type ?? onboardingPageBinding194.planAtLogin,
    onboardingPageBinding213 = onboardingPageBinding211 == null ? null : normalizeMailProviderForSku(onboardingPageBinding211, onboardingPageBinding212),
    onboardingPageBinding214 = onboardingPageBinding211 == null ? null : appMainCurrentCompatSlotLowerO(onboardingPageBinding211, onboardingPageBinding212),
    onboardingPageBinding215 = onboardingPageBinding213 == null ? null : appMainCurrentCompatSlotLowerA(onboardingPageBinding213),
    onboardingPageBinding216 = {
      hostId: currentAppInitialSharedMember0542
    };
  let {
      data: ____data,
      isLoading: __isLoading
    } = worktreeNewThreadQueryCompatSlotLowerSLowerC(onboardingPageBinding216),
    onboardingPageBinding217 = {
      hostId: currentAppInitialSharedMember0542,
      marketplaceKind: "local"
    };
  let {
      data: _____data,
      isLoading: ___isLoading,
      refetch
    } = worktreeNewThreadQueryCompatSlotUpperBLowerC(onboardingPageBinding217),
    onboardingPageBinding218 = onboardingPageBinding213 == null ? null : appMainCurrentCompatSlotLowerC(onboardingPageBinding213, _____data),
    _e = currentAppInitialSharedCompatSlotLowerCLowerC(),
    onboardingPageBinding219 = ____data == null || onboardingPageBinding215 == null ? [] : onboardingPageBinding215.flatMap(item => {
      let onboardingPageBinding690 = appMainCurrentCompatSlotUpperYLowerO(____data, item);
      return onboardingPageBinding690 == null ? [] : [appMainCurrentCompatSlotUpperXLowerO(onboardingPageBinding690.id)];
    }),
    be;
  be = {
    queries: onboardingPageBinding219
  };
  currentAppInitialSharedCompatSlotLowerOLowerC(be);
  let onboardingPageBinding220 = __data?.models.some(onboardingPageUnit34);
  let onboardingPageBinding221 = onboardingPageBinding220 === true,
    onboardingPageBinding222 = async () => (await refetch()).data;
  let onboardingPageBinding223 = {
    agentMode,
    apps: ____data,
    hostId: currentAppInitialSharedMember0542,
    isAppsLoading: __isLoading,
    isConfigDataPending,
    isModelsLoading: _isLoading,
    isPluginsLoading: ___isLoading,
    isRequiredModelAvailable: onboardingPageBinding221,
    localPlugins: _____data,
    mailProvider: onboardingPageBinding213,
    permissionProfileId,
    permissionsRequirements: onboardingPageBinding200,
    projectRoot: onboardingPageBinding70,
    queryClient: _e,
    refetchLocalPlugins: onboardingPageBinding222,
    serviceTier: serviceTierSettings.serviceTierForRequest,
    shouldSendPermissionOverrides
  };
  let onboardingPageBinding224 = onboardingPageBinding223,
    [onboardingPageBinding225, onboardingPageBinding226] = onboardingPageBinding68.useState(null),
    [onboardingPageBinding227, onboardingPageBinding228] = onboardingPageBinding68.useState(""),
    [onboardingPageBinding229, onboardingPageBinding230] = onboardingPageBinding68.useState(true),
    [onboardingPageBinding231, onboardingPageBinding232] = onboardingPageBinding68.useState(false),
    [onboardingPageBinding233, onboardingPageBinding234] = onboardingPageBinding68.useState(false),
    onboardingPageBinding235 = currentAppInitialSharedCompatSlotLowerQLowerO(appMainCurrentCompatSlotLowerX),
    onboardingPageBinding236 = currentAppInitialSharedCompatSlotLowerQLowerO(appMainCurrentCompatSlotLowerB),
    onboardingPageBinding237 = currentAppInitialSharedCompatSlotLowerQLowerO(appMainCurrentCompatSlotUpperS),
    onboardingPageBinding238 = currentAppInitialSharedCompatSlotUpperGLowerO(appMainCurrentCompatSlotUpperD, onboardingPageBinding235?.conversationId ?? null),
    onboardingPageBinding239 = currentAppInitialSharedCompatSlotUpperGLowerO(appMainCurrentCompatSlotUpperE, onboardingPageBinding235?.conversationId ?? null),
    onboardingPageBinding240 = onboardingPageBinding227.trim();
  let onboardingPageBinding241 = onboardingPageBinding240,
    onboardingPageBinding242 = onboardingPageBinding225 != null && (onboardingPageBinding225 !== "something_else" || onboardingPageBinding241.length > 1),
    onboardingPageBinding243 = onboardingPageBinding205 != null && (appMainCurrentCompatSlotLowerU(onboardingPageBinding205) ? onboardingPageBinding238 != null : onboardingPageBinding236);
  let onboardingPageBinding244 = onboardingPageBinding243,
    onboardingPageBinding245,
    onboardingPageBinding246;
  onboardingPageBinding245 = () => {
    appMainCurrentCompatSlotLowerALowerS(onboardingPageBinding193);
  };
  onboardingPageBinding246 = [onboardingPageBinding193];
  onboardingPageBinding68.useEffect(onboardingPageBinding245, onboardingPageBinding246);
  let onboardingPageBinding247 = async onboardingPageOperand93 => {
    await appMainCurrentCompatSlotLowerV(onboardingPageBinding193, appMainCurrentCompatSlotLowerA(onboardingPageOperand93), onboardingPageBinding224);
  };
  let onboardingPageBinding248 = onboardingPageBinding68.useEffectEvent(onboardingPageBinding247),
    onboardingPageBinding249 = () => {
      _____data == null || onboardingPageBinding213 == null || onboardingPageBinding248(onboardingPageBinding213);
    };
  let onboardingPageBinding250;
  onboardingPageBinding250 = [_____data, onboardingPageBinding213];
  onboardingPageBinding68.useEffect(onboardingPageBinding249, onboardingPageBinding250);
  let onboardingPageBinding251 = async onboardingPageOperand39 => {
    let {
      isSkipped,
      personalizedSuggestionsEnabled
    } = onboardingPageOperand39;
    onboardingPageBinding244 && onboardingPageBinding194.accountId != null && onboardingPageBinding205 != null && setCompletedConversationalOnboardingTask(onboardingPageBinding193, onboardingPageBinding194.accountId, onboardingPageBinding205);
    isSkipped ? appMainCurrentCompatSlotLowerILowerS(onboardingPageBinding193, onboardingPageBinding205) : appMainCurrentCompatSlotLowerELowerS(onboardingPageBinding193, onboardingPageBinding205);
    await onContinue({
      step: OnboardingSchemaModule.onboardingPageBinding7.ConversationalOnboarding,
      roles: onboardingPageBinding197.roles,
      personalizedSuggestionsEnabled,
      workMode: onboardingPageBinding197.workMode
    });
    appMainCurrentCompatSlotLowerK(currentAppInitialSharedMember0542);
    onboardingPageBinding205 != null && appMainCurrentCompatSlotLowerR[onboardingPageBinding205].reset(onboardingPageBinding193);
    appMainCurrentCompatSlotLowerW(onboardingPageBinding193);
    resetConversationalOnboardingWorkflowState(onboardingPageBinding193);
    await appMainCurrentCompatSlotUpperT(currentAppInitialSharedMember0542);
  };
  let onboardingPageBinding252 = onboardingPageBinding251,
    onboardingPageBinding253 = onboardingPageOperand42 => {
      if (!onboardingPageBinding242 || onboardingPageBinding225 == null) return;
      let onboardingPageBinding657 = [onboardingPageBinding225],
        onboardingPageBinding658 = getWelcomeOnboardingWorkMode(onboardingPageBinding657);
      onboardingPageBinding198({
        roles: onboardingPageBinding657,
        personalizedSuggestionsEnabled: onboardingPageOperand42,
        workMode: onboardingPageBinding658
      });
      imagePickerSchemaCapabilities(onboardingPageBinding193, currentAppInitialSharedMember0396, {
        step: "role",
        option: onboardingPageBinding225,
        selected: true,
        selectedRoles: onboardingPageBinding225,
        selectedWorkMode: onboardingPageBinding658,
        otherRoleDescription: onboardingPageBinding225 === "something_else" ? onboardingPageBinding241 : undefined
      });
      appMainCurrentCompatSlotUpperF(onboardingPageBinding193, onboardingPageBinding225);
      appMainCurrentCompatSlotLowerRLowerS(onboardingPageBinding193, onboardingPageBinding225);
      onboardingPageBinding232(true);
    };
  let onboardingPageBinding254 = onboardingPageBinding253,
    onboardingPageBinding255 = () => {
      if (onboardingPageBinding205 != null) {
        if (onboardingPageBinding239) {
          appMainCurrentCompatSlotLowerNLowerS(onboardingPageBinding193, onboardingPageBinding205);
          return;
        }
        onboardingPageBinding237 && !onboardingPageBinding244 && appMainCurrentCompatSlotLowerTLowerS(onboardingPageBinding193, onboardingPageBinding205);
      }
    };
  let onboardingPageBinding256 = onboardingPageBinding255,
    $e = () => {
      onboardingPageBinding205 == null || onboardingPageBinding203.permissionStatus === "allowed" || appMainCurrentCompatSlotDollarLowerO(onboardingPageBinding193, onboardingPageBinding205);
    };
  let onboardingPageBinding257 = $e,
    onboardingPageBinding258 = onboardingPageOperand58 => {
      onboardingPageBinding256();
      appMainCurrentCompatSlotLowerK(currentAppInitialSharedMember0542);
      onboardingPageBinding205 != null && appMainCurrentCompatSlotLowerR[onboardingPageBinding205].reset(onboardingPageBinding193);
      appMainCurrentCompatSlotLowerW(onboardingPageBinding193);
      selectConversationalOnboardingTask(onboardingPageBinding193, onboardingPageOperand58);
      appMainCurrentCompatSlotLowerOLowerS(onboardingPageBinding193, onboardingPageOperand58);
      onboardingPageBinding234(true);
      let onboardingPageBinding686 = appMainCurrentCompatSlotLowerR[onboardingPageOperand58];
      onboardingPageBinding686.reset(onboardingPageBinding193);
      onboardingPageBinding686.prepare?.(onboardingPageBinding193, onboardingPageOperand58, onboardingPageBinding224);
    };
  let onboardingPageBinding259 = onboardingPageBinding258,
    at = onboardingPageOperand73 => {
      onboardingPageBinding256();
      onboardingPageBinding257();
      appMainCurrentCompatSlotLowerK(currentAppInitialSharedMember0542);
      appMainCurrentCompatSlotLowerR[onboardingPageOperand73].reset(onboardingPageBinding193);
      appMainCurrentCompatSlotLowerW(onboardingPageBinding193);
      onboardingPageBinding234(false);
      declineConversationalOnboardingTask(onboardingPageBinding193, onboardingPageOperand73);
    };
  let onboardingPageBinding260 = at,
    onboardingPageBinding261 = () => {
      onboardingPageBinding256();
      onboardingPageBinding205 != null && (appMainCurrentCompatSlotLowerK(currentAppInitialSharedMember0542), appMainCurrentCompatSlotLowerW(onboardingPageBinding193), appMainCurrentCompatSlotLowerR[onboardingPageBinding205].retry(onboardingPageBinding193, onboardingPageBinding205, onboardingPageBinding224));
    };
  let onboardingPageBinding262 = onboardingPageBinding261,
    onboardingPageBinding263 = () => {
      onboardingPageBinding234(false);
      let onboardingPageBinding689 = getConversationalOnboardingWorkflowState(onboardingPageBinding193).selectedTask;
      onboardingPageBinding689 != null && appMainCurrentCompatSlotLowerR[onboardingPageBinding689].start?.(onboardingPageBinding193, onboardingPageBinding689, onboardingPageBinding224);
    };
  let onboardingPageBinding264 = onboardingPageBinding263,
    onboardingPageBinding265 = onboardingPageBinding203.permissionStatus === "denied" || onboardingPageBinding244,
    onboardingPageBinding266 = onboardingPageBinding205 == null ? null : appMainCurrentCompatSlotLowerR[onboardingPageBinding205].View,
    onboardingPageBinding267 = onboardingPageBinding266 == null || onboardingPageBinding205 == null ? null : React.createElement(onboardingPageBinding266, {
      key: onboardingPageBinding205,
      context: onboardingPageBinding224,
      isAppWindowFocused: onboardingPageBinding204,
      task: onboardingPageBinding205,
      onChooseAnotherTask: () => onboardingPageBinding260(onboardingPageBinding205),
      onRetryTask: onboardingPageBinding262
    });
  let onboardingPageBinding268 = onboardingPageBinding267,
    onboardingPageBinding269 = onboardingPageBinding229 || isLoading,
    onboardingPageBinding270 = onboardingPageBinding231 || onboardingPageBinding214 == null,
    onboardingPageBinding271 = _data?.displayName?.trim().split(/\s+/)[0] || undefined;
  let onboardingPageBinding272 = () => {
    onboardingPageBinding252({
      isSkipped: false,
      personalizedSuggestionsEnabled: onboardingPageBinding197.personalizedSuggestionsEnabled
    });
  };
  let onboardingPageBinding273 = () => onboardingPageBinding230(false);
  let onboardingPageBinding274 = () => {
    onboardingPageBinding256();
    onboardingPageBinding257();
    onboardingPageBinding203.permissionStatus !== "allowed" && setConversationalOnboardingPermissionStatus(onboardingPageBinding193, "denied");
    onboardingPageBinding252({
      isSkipped: true,
      personalizedSuggestionsEnabled: onboardingPageBinding203.phase === "role" ? false : onboardingPageBinding197.personalizedSuggestionsEnabled
    });
  };
  let onboardingPageBinding275 = () => onboardingPageBinding232(false);
  return React.createElement(OnboardingConversationalViewModule.onboardingPageUnit26, {
    canContinueRole: onboardingPageBinding242,
    isAppWindowFocused: onboardingPageBinding204,
    isTaskReady: onboardingPageBinding265,
    otherRoleDescription: onboardingPageBinding227,
    roleSelection: onboardingPageBinding225,
    selectedTaskContent: onboardingPageBinding268,
    showInitialThinking: onboardingPageBinding269,
    showSelectedTaskThinking: onboardingPageBinding233,
    showTaskIntroThinking: onboardingPageBinding270,
    taskIds: onboardingPageBinding214,
    taskPlugins: onboardingPageBinding218,
    userFirstName: onboardingPageBinding271,
    workflow: onboardingPageBinding203,
    onContinueRole: onboardingPageBinding254,
    onGetStarted: onboardingPageBinding272,
    onInitialThinkingComplete: onboardingPageBinding273,
    onOtherRoleDescriptionChange: onboardingPageBinding228,
    onRoleSelectionChange: onboardingPageBinding226,
    onSelectTask: onboardingPageBinding259,
    onSelectedTaskThinkingComplete: onboardingPageBinding264,
    onSkip: onboardingPageBinding274,
    onTaskIntroThinkingComplete: onboardingPageBinding275
  });
}
function onboardingPageUnit34(onboardingPageOperand70) {
  return onboardingPageOperand70.model === "gpt-5.5" && onboardingPageOperand70.supportedReasoningEfforts.some(onboardingPageUnit35);
}
function onboardingPageUnit35(onboardingPageOperand83) {
  let {
    reasoningEffort
  } = onboardingPageOperand83;
  return reasoningEffort === "low";
}
var onboardingPageBinding67,
  onboardingPageBinding68,
  onboardingPageBinding69,
  onboardingPageBinding70,
  onboardingPageBinding71 = once(() => {
    onboardingPageBinding67 = currentAppInitialSharedCompatSlotLowerGLowerC();
    remoteControlRefreshSourceEnum();
    currentAppInitialSharedCompatSlotDollarLowerS();
    currentAppInitialSharedCompatSlotUpperGLowerS();
    currentAppInitialSharedCompatSlotUpperVLowerO();
    currentAppInitialSharedCompatSlotUpperO();
    onboardingPageBinding68 = toEsModule(currentAppInitialSharedCompatSlotUpperC(), 1);
    initWindowVisibilitySignal();
    worktreeNewThreadQueryCompatSlotUpperILowerF();
    worktreeNewThreadQueryCompatSlotUpperJLowerD();
    appMainCurrentCompatSlotUpperGLowerF();
    appMainCurrentCompatSlotUpperULowerP();
    appMainCurrentCompatSlotUpperBLowerF();
    initOnboardingMailProviderChunk();
    initWelcomeOnboardingRolesChunk();
    initOnboardingStateChunk();
    worktreeNewThreadQueryCompatSlotUpperNLowerC();
    remoteConnectionRuntime0298();
    worktreeNewThreadQueryCompatSlotLowerILowerC();
    appMainCurrentCompatSlotUpperNLowerP();
    initProfileQueriesRuntimeChunk();
    currentAppInitialSharedDisplayRuntime();
    initSidebarOnboardingChecklistStateChunk();
    OnboardingSchemaModule.onboardingPageBinding16();
    appMainCurrentCompatSlotUpperQLowerO();
    appMainCurrentCompatSlotUpperZLowerO();
    OnboardingConversationalViewModule.onboardingPageBinding66();
    appMainCurrentCompatSlotDollarLowerO();
    appMainCurrentCompatSlotUpperC();
    appMainCurrentCompatSlotUnderscore();
    initConversationalOnboardingWorkflowStateChunk();
    onboardingPageBinding69 = currentAppInitialSharedCompatSlotLowerLLowerC();
    onboardingPageBinding70 = currentAppInitialSharedCompatSlotLowerTLowerR("~");
  });
class OnboardingConversationalDataModule {
  static get onboardingPageUnit32() {
    return onboardingPageUnit32;
  }
  static get onboardingPageBinding71() {
    return onboardingPageBinding71;
  }
}
export { OnboardingConversationalDataModule };
