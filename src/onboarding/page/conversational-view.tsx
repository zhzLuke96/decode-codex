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
import { OnboardingPersonalizedSuggestionsModule } from "./personalized-suggestions";
import { OnboardingConversationalControlsModule } from "./conversational-controls";
import { OnboardingConversationalViewHelpersModule } from "./conversational-view-helpers";
function onboardingPageUnit26(onboardingPageOperand1) {
  let {
      canContinueRole,
      isAppWindowFocused,
      isTaskReady,
      otherRoleDescription,
      roleSelection,
      selectedTaskContent,
      showInitialThinking,
      showSelectedTaskThinking,
      showTaskIntroThinking,
      taskIds,
      taskPlugins,
      userFirstName,
      workflow,
      onContinueRole,
      onGetStarted,
      onInitialThinkingComplete: onboardingPageBinding114,
      onOtherRoleDescriptionChange,
      onRoleSelectionChange,
      onSelectTask,
      onSelectedTaskThinkingComplete,
      onSkip,
      onTaskIntroThinkingComplete
    } = onboardingPageOperand1,
    [onboardingPageBinding115, onboardingPageBinding116] = onboardingPageBinding54.useState(false),
    [onboardingPageBinding117, onboardingPageBinding118] = onboardingPageBinding54.useState(false),
    [onboardingPageBinding119, onboardingPageBinding120] = onboardingPageBinding54.useState(false),
    [onboardingPageBinding121, onboardingPageBinding122] = onboardingPageBinding54.useState(false),
    [onboardingPageBinding123, onboardingPageBinding124] = onboardingPageBinding54.useState(true),
    [onboardingPageBinding125, onboardingPageBinding126] = onboardingPageBinding54.useState(onboardingPageBinding58),
    onboardingPageBinding127 = onboardingPageOperand59 => {
      let onboardingPageBinding687 = OnboardingConversationalViewHelpersModule.onboardingPageUnit29(onboardingPageOperand59);
      onboardingPageBinding126(onboardingPageOperand64 => onboardingPageOperand64.hasContentBelow === onboardingPageBinding687.hasContentBelow && onboardingPageOperand64.hasContentUnderTitleBar === onboardingPageBinding687.hasContentUnderTitleBar ? onboardingPageOperand64 : onboardingPageBinding687);
    };
  let onboardingPageBinding128 = onboardingPageBinding127,
    onboardingPageBinding129 = (onboardingPageOperand105, onboardingPageOperand106) => onboardingPageBinding128(onboardingPageOperand106);
  let onboardingPageBinding130 = worktreeNewThreadOrchestratorCompatSlotLowerSLowerA(onboardingPageBinding129),
    onboardingPageBinding131 = (onboardingPageOperand81, onboardingPageOperand82) => {
      onboardingPageOperand82.parentElement != null && onboardingPageBinding128(onboardingPageOperand82.parentElement);
    };
  let onboardingPageBinding132 = worktreeNewThreadOrchestratorCompatSlotLowerSLowerA(onboardingPageBinding131),
    onboardingPageBinding133 = worktreeNewThreadQueryCompatSlotUpperQLowerM(),
    onboardingPageBinding134 = currentAppInitialSharedFunction0375(),
    onboardingPageBinding135,
    onboardingPageBinding136,
    onboardingPageBinding137,
    onboardingPageBinding138,
    onboardingPageBinding139,
    onboardingPageBinding140,
    onboardingPageBinding141,
    onboardingPageBinding142,
    _e,
    onboardingPageBinding143,
    onboardingPageBinding144,
    be,
    onboardingPageBinding145,
    onboardingPageBinding146;
  {
    let onboardingPageBinding164 = otherRoleDescription.trim(),
      onboardingPageBinding165 = null;
    workflow.selectedRole === "something_else" ? onboardingPageBinding165 = onboardingPageBinding164.length > 1 ? onboardingPageBinding164 : onboardingPageBinding134.formatMessage(welcomeOnboardingRoleMessages[workflow.selectedRole]) : workflow.selectedRole != null && (onboardingPageBinding165 = onboardingPageBinding134.formatMessage(welcomeOnboardingRoleMessages[workflow.selectedRole]));
    let onboardingPageBinding166 = workflow.selectedRole === "something_else" || workflow.selectedRole === "people_hr" ? onboardingPageBinding165 : onboardingPageBinding165?.toLocaleLowerCase(),
      onboardingPageBinding167,
      onboardingPageBinding168;
    onboardingPageBinding167 = workflow.selectedTask == null ? null : appMainCurrentCompatSlotLowerS(workflow.selectedTask);
    onboardingPageBinding168 = onboardingPageBinding167 == null ? null : onboardingPageBinding134.formatMessage(onboardingPageBinding167.label);
    let onboardingPageBinding169 = onboardingPageBinding168,
      onboardingPageBinding170 = onboardingPageBinding167?.SelectionAttachment ?? null,
      onboardingPageBinding171 = workflow.declinedTasks ?? [];
    let onboardingPageBinding172 = onboardingPageBinding171,
      onboardingPageBinding173 = userFirstName == null ? onboardingPageBinding134.formatMessage({
        id: "electron.onboarding.conversationalOnboarding.welcome",
        defaultMessage: "Hey — welcome to ChatGPT for desktop.",
        description: "Welcome message at the start of onboarding"
      }) : onboardingPageBinding134.formatMessage({
        id: "electron.onboarding.conversationalOnboarding.welcomeWithName",
        defaultMessage: "Hey {firstName} — welcome to ChatGPT for desktop.",
        description: "Welcome message with the user's first name at the start of conversational onboarding"
      }, {
        firstName: userFirstName
      });
    let onboardingPageBinding174 = onboardingPageBinding173,
      onboardingPageBinding175 = onboardingPageBinding134.formatMessage({
        id: "electron.onboarding.conversationalOnboarding.introQuestion",
        defaultMessage: "Mind a few quick questions? They’ll help me tailor things for how you work.",
        description: "Introductory question at the start of conversational onboarding"
      });
    let onboardingPageBinding176 = onboardingPageBinding175,
      onboardingPageBinding177 = onboardingPageBinding134.formatMessage({
        id: "electron.onboarding.conversationalOnboarding.roleQuestion",
        defaultMessage: "To start: what kind of work fills most of your day?",
        description: "Question asking for the user's role during conversational onboarding"
      });
    let onboardingPageBinding178 = onboardingPageBinding177,
      onboardingPageBinding179 = onboardingPageBinding134.formatMessage({
        id: "electron.onboarding.conversationalOnboarding.taskQuestion",
        defaultMessage: "Here in the desktop app, I can work directly on your computer: your files, folders, and even your apps. Want to try a quick example?",
        description: "Question introducing the first conversational onboarding task choices"
      });
    let onboardingPageBinding180 = onboardingPageBinding179,
      onboardingPageBinding181 = `${onboardingPageBinding174} ${onboardingPageBinding176}\n\n${onboardingPageBinding178}`,
      {
        hasContentBelow,
        hasContentUnderTitleBar
      } = onboardingPageBinding125;
    onboardingPageBinding135 = hasContentBelow;
    let onboardingPageBinding182 = showInitialThinking && !onboardingPageBinding117,
      onboardingPageBinding183 = hasContentUnderTitleBar ? onboardingPageBinding65 : onboardingPageBinding64;
    onboardingPageBinding136 = !onboardingPageBinding182 && !showInitialThinking && (workflow.phase !== "role" || onboardingPageBinding119);
    onboardingPageBinding137 = !onboardingPageBinding182 && !showInitialThinking && workflow.phase === "role" && onboardingPageBinding119;
    onboardingPageBinding140 = "relative flex h-full min-h-0 w-full flex-col bg-token-main-surface-primary tracking-normal text-token-text-primary select-text [--codex-chat-font-size:16px]";
    let onboardingPageBinding184 = hasContentUnderTitleBar ? "border-token-input-border bg-token-main-surface-primary" : "border-transparent bg-transparent",
      onboardingPageBinding185;
    onboardingPageBinding185 = worktreeNewThreadQueryCompatSlotLowerMLowerH("pointer-events-none absolute inset-x-0 top-0 z-20 h-12 border-b-[0.5px]", onboardingPageBinding184);
    onboardingPageBinding141 = <div className={onboardingPageBinding185} />;
    let onboardingPageBinding186 = onboardingPageBinding182 ? {
      height: onboardingPageBinding60,
      top: "50%",
      width: onboardingPageBinding60,
      x: "-50%",
      y: "-50%"
    } : false;
    let onboardingPageBinding187 = onboardingPageBinding182 && !isAppWindowFocused ? {
      height: onboardingPageBinding60,
      top: "50%",
      width: onboardingPageBinding60,
      x: "-50%",
      y: "-50%"
    } : {
      height: onboardingPageBinding183,
      top: hasContentUnderTitleBar ? "0.875rem" : "1.5rem",
      width: onboardingPageBinding183,
      x: "-50%",
      y: 0
    };
    let onboardingPageBinding188 = {
      left: "50%"
    };
    let onboardingPageBinding189 = onboardingPageBinding133 ? {
      duration: 0
    } : {
      ...onboardingPageBinding63,
      delay: onboardingPageBinding182 && isAppWindowFocused ? onboardingPageBinding59 : 0
    };
    let onboardingPageBinding190 = onboardingPageBinding182 && isAppWindowFocused ? () => onboardingPageBinding118(true) : undefined;
    let onboardingPageBinding191;
    onboardingPageBinding191 = React.createElement(generalAppearanceCurrentCompatSlotUpperL, {
      className: "block size-full"
    });
    onboardingPageBinding142 = React.createElement(worktreeNewThreadQueryCompatSlotLowerILowerH.div, {
      "aria-hidden": "true",
      className: "pointer-events-none absolute z-30 text-token-foreground",
      initial: onboardingPageBinding186,
      animate: onboardingPageBinding187,
      style: onboardingPageBinding188,
      transition: onboardingPageBinding189,
      onAnimationComplete: onboardingPageBinding190
    }, onboardingPageBinding191);
    onboardingPageBinding139 = "relative flex min-h-0 flex-1";
    onboardingPageBinding145 = onboardingPageBinding130;
    onboardingPageBinding146 = "flex min-h-0 flex-1 flex-col-reverse overflow-x-hidden overflow-y-auto [overflow-anchor:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";
    onboardingPageBinding138 = event => onboardingPageBinding128(event.currentTarget);
    onboardingPageBinding144 = onboardingPageBinding132;
    be = "min-h-full shrink-0 px-8 pt-[72px]";
    _e = "mx-auto flex w-full max-w-[736px] flex-col gap-4 pb-6 text-lg leading-6";
    onboardingPageBinding143 = onboardingPageBinding182 ? null : showInitialThinking ? React.createElement(OnboardingConversationalViewHelpersModule.onboardingPageUnit27, {
      fadeIn: true,
      onComplete: onboardingPageBinding114
    }) : <>
          {React.createElement(appMainCurrentCompatSlotLowerGLowerS, {
        animate: workflow.phase === "role",
        onComplete: () => onboardingPageBinding120(true)
      }, onboardingPageBinding181)}
          {workflow.phase === "role" && onboardingPageBinding119 ? React.createElement(worktreeNewThreadQueryCompatSlotLowerILowerH.div, {
        animate: {
          opacity: 1
        },
        className: "w-full",
        initial: {
          opacity: 0
        },
        transition: onboardingPageBinding62
      }, React.createElement(OnboardingConversationalControlsModule.onboardingPageUnit23, {
        otherRoleDescription,
        selectedRole: roleSelection,
        onOtherRoleDescriptionChange,
        onSelect: onRoleSelectionChange
      })) : workflow.phase === "role" ? null : <>
              {React.createElement(OnboardingConversationalViewHelpersModule._a, {
          answer: onboardingPageBinding165 ?? "",
          question: onboardingPageBinding178
        })}
              {onboardingPageBinding165 == null ? null : React.createElement(OnboardingConversationalViewHelpersModule.onboardingPageUnit30, null, onboardingPageBinding165)}
              {showTaskIntroThinking ? React.createElement(OnboardingConversationalViewHelpersModule.onboardingPageUnit27, {
          onComplete: onTaskIntroThinkingComplete
        }) : <>
                  {React.createElement(appMainCurrentCompatSlotLowerGLowerS, {
            animate: workflow.phase === "task" && onboardingPageBinding172.length === 0,
            onComplete: () => onboardingPageBinding122(true)
          }, [onboardingPageBinding134.formatMessage({
            id: "electron.onboarding.conversationalOnboarding.roleAcknowledgement",
            defaultMessage: "Great — I’ll set a few things up for {role} work.",
            description: "Acknowledgement after selecting a role during conversational onboarding"
          }, {
            role: onboardingPageBinding166
          }), onboardingPageBinding180].join("\n\n"))}
                  {workflow.phase === "task" ? <>
                      {onboardingPageBinding172.map((item, index) => <div key={`${item}-${index}`} className="flex flex-col gap-4">
                          {React.createElement(OnboardingConversationalViewHelpersModule.onboardingPageUnit30, null, React.createElement(currentAppInitialSharedMember0924, {
                id: "electron.onboarding.conversationalOnboarding.taskDeclinedAnswer",
                defaultMessage: "Not now",
                description: "User answer shown after declining a conversational onboarding task access request"
              }))}
                          {React.createElement(appMainCurrentCompatSlotLowerGLowerS, {
                animate: index === onboardingPageBinding172.length - 1
              }, appMainCurrentCompatSlotLowerR[item].getDeclinedRetryPrompt(onboardingPageBinding134))}
                        </div>)}
                      {taskIds != null && (onboardingPageBinding172.length > 0 || onboardingPageBinding121) ? React.createElement(worktreeNewThreadQueryCompatSlotLowerILowerH.div, {
              animate: {
                opacity: 1
              },
              className: "w-full",
              initial: {
                opacity: 0
              },
              transition: onboardingPageBinding62
            }, React.createElement(OnboardingConversationalControlsModule.onboardingPageUnit25, {
              taskIds,
              taskPlugins,
              onSelect: onSelectTask
            })) : null}
                    </> : <>
                      {React.createElement(OnboardingConversationalViewHelpersModule._a, {
              answer: onboardingPageBinding169 ?? "",
              question: onboardingPageBinding180
            })}
                      {onboardingPageBinding169 == null ? null : <div className="flex flex-col gap-2">
                          {onboardingPageBinding170 == null ? null : React.createElement(onboardingPageBinding170, null)}
                          {React.createElement(OnboardingConversationalViewHelpersModule.onboardingPageUnit30, null, onboardingPageBinding169)}
                        </div>}
                      {showSelectedTaskThinking ? React.createElement(OnboardingConversationalViewHelpersModule.onboardingPageUnit27, {
              durationSeconds: onboardingPageBinding61,
              onComplete: onSelectedTaskThinkingComplete
            }) : selectedTaskContent}
                    </>}
                </>}
            </>}
        </>;
  }
  let onboardingPageBinding147 = <div className={_e}>{onboardingPageBinding143}</div>;
  let onboardingPageBinding148 = <div ref={onboardingPageBinding144} className={be}>
      {onboardingPageBinding147}
    </div>;
  let onboardingPageBinding149 = <div ref={onboardingPageBinding145} className={onboardingPageBinding146} onScroll={onboardingPageBinding138}>
      {onboardingPageBinding148}
    </div>;
  let onboardingPageBinding150 = onboardingPageBinding135 ? "opacity-100" : "opacity-0",
    onboardingPageBinding151 = worktreeNewThreadQueryCompatSlotLowerMLowerH("pointer-events-none absolute inset-x-0 bottom-0 z-10 h-14 bg-gradient-to-b from-transparent to-token-main-surface-primary transition-opacity duration-200", onboardingPageBinding150);
  let onboardingPageBinding152 = <div aria-hidden={true} className={onboardingPageBinding151} />;
  let onboardingPageBinding153 = <div className={onboardingPageBinding139}>
      {onboardingPageBinding149}
      {onboardingPageBinding152}
    </div>;
  let onboardingPageBinding154 = onboardingPageBinding137 || onboardingPageBinding136 ? React.createElement(worktreeNewThreadQueryCompatSlotLowerILowerH.div, {
    animate: {
      opacity: 1
    },
    className: "flex flex-col items-center gap-3",
    initial: {
      opacity: 0
    },
    transition: onboardingPageBinding62
  }, onboardingPageBinding137 ? React.createElement(OnboardingPersonalizedSuggestionsModule.onboardingPageUnit21, {
    checked: onboardingPageBinding123,
    onChange: onboardingPageBinding124,
    variant: "checkbox"
  }) : null, onboardingPageBinding136 ? React.createElement(OnboardingConversationalControlsModule.onboardingPageUnit22, {
    canContinueRole,
    isTaskReady,
    workflow,
    onContinueRole: () => onContinueRole(onboardingPageBinding123),
    onGetStarted,
    onSkip: () => onboardingPageBinding116(true)
  }) : null, onboardingPageBinding136 ? React.createElement(OnboardingConversationalViewHelpersModule.onboardingPageUnit31, {
    isTaskReady,
    phase: workflow.phase
  }) : null) : null;
  let onboardingPageBinding155 = <div className="relative flex shrink-0 flex-col items-center gap-3 px-10 pt-10 pb-12">
      {onboardingPageBinding154}
    </div>;
  let onboardingPageBinding156 = event => {
    event.preventDefault();
    onboardingPageBinding116(false);
  };
  let onboardingPageBinding157 = React.createElement(worktreeNewThreadQueryCompatSlotUpperELowerO, {
    className: "sr-only"
  }, React.createElement(currentAppInitialSharedMember0924, {
    id: "electron.onboarding.conversationalOnboarding.skipDialog.title",
    defaultMessage: "Skip setup?",
    description: "Title for the confirmation dialog shown before skipping conversational onboarding"
  }));
  let onboardingPageBinding158 = React.createElement(worktreeNewThreadQueryCompatSlotLowerBLowerA, null, React.createElement(worktreeNewThreadQueryCompatSlotLowerYLowerA, {
    title: React.createElement(currentAppInitialSharedMember0924, {
      id: "electron.onboarding.conversationalOnboarding.skipDialog.heading",
      defaultMessage: "Skip setup?",
      description: "Heading for the confirmation dialog shown before skipping conversational onboarding"
    }),
    subtitle: React.createElement(currentAppInitialSharedMember0924, {
      id: "electron.onboarding.conversationalOnboarding.skipDialog.subtitle",
      defaultMessage: "You’ll go straight to ChatGPT",
      description: "Subtitle explaining what happens when conversational onboarding is skipped"
    })
  }));
  let onboardingPageBinding159 = React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
    color: "primary",
    type: "submit"
  }, React.createElement(currentAppInitialSharedMember0924, {
    id: "electron.onboarding.conversationalOnboarding.skipDialog.keepSettingUp",
    defaultMessage: "Keep setting up",
    description: "Button that closes the skip confirmation and returns to conversational onboarding"
  }));
  let onboardingPageBinding160 = React.createElement(currentAppInitialSharedMember0924, {
    id: "electron.onboarding.conversationalOnboarding.skipDialog.goToApp",
    defaultMessage: "Go to ChatGPT",
    description: "Button that confirms skipping conversational onboarding and opens the app"
  });
  let onboardingPageBinding161 = React.createElement(worktreeNewThreadQueryCompatSlotUnderscoreLowerA, {
    as: "form",
    onSubmit: onboardingPageBinding156
  }, onboardingPageBinding157, onboardingPageBinding158, React.createElement(worktreeNewThreadQueryCompatSlotLowerBLowerA, null, React.createElement(worktreeNewThreadQueryCompatSlotLowerVLowerA, null, onboardingPageBinding159, React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
    color: "outline",
    type: "button",
    onClick: onSkip
  }, onboardingPageBinding160))));
  let onboardingPageBinding162 = React.createElement(worktreeNewThreadQueryCompatSlotLowerWLowerO, {
    open: onboardingPageBinding115,
    size: "compact",
    onOpenChange: onboardingPageBinding116
  }, onboardingPageBinding161);
  return <div className={onboardingPageBinding140}>
      {onboardingPageBinding141}
      {onboardingPageBinding142}
      {onboardingPageBinding153}
      {onboardingPageBinding155}
      {onboardingPageBinding162}
    </div>;
}
var onboardingPageBinding53,
  onboardingPageBinding54,
  onboardingPageBinding55,
  onboardingPageBinding56,
  onboardingPageBinding57,
  onboardingPageBinding58,
  onboardingPageBinding59,
  onboardingPageBinding60,
  onboardingPageBinding61,
  onboardingPageBinding62,
  onboardingPageBinding63,
  onboardingPageBinding64,
  onboardingPageBinding65,
  onboardingPageBinding66 = once(() => {
    onboardingPageBinding53 = currentAppInitialSharedCompatSlotLowerGLowerC();
    worktreeNewThreadQueryCompatSlotLowerHLowerH();
    worktreeNewThreadQueryCompatSlotUpperXLowerM();
    onboardingPageBinding54 = toEsModule(currentAppInitialSharedCompatSlotUpperC(), 1);
    intlFormatDateTimeRuntime();
    worktreeNewThreadQueryCompatSlotUpperELowerM();
    worktreeNewThreadQueryCompatSlotUpperDLowerO();
    worktreeNewThreadQueryCompatSlotUpperCLowerA();
    worktreeNewThreadQueryCompatSlotUpperDLowerP();
    generalAppearanceCurrentCompatSlotUpperR();
    browserTabIdForConversation();
    appMainCurrentCompatSlotUpperFLowerI();
    initWelcomeOnboardingRolesChunk();
    worktreeNewThreadOrchestratorCompatSlotLowerALowerA();
    worktreeNewThreadQueryCompatSlotLowerCLowerO();
    OnboardingPersonalizedSuggestionsModule.onboardingPageBinding42();
    appMainCurrentCompatSlotUpperS();
    OnboardingConversationalControlsModule.onboardingPageBinding45();
    OnboardingConversationalControlsModule.onboardingPageBinding49();
    OnboardingConversationalControlsModule.onboardingPageBinding52();
    onboardingPageBinding55 = currentAppInitialSharedCompatSlotLowerLLowerC();
    onboardingPageBinding56 = 48;
    onboardingPageBinding57 = 1;
    onboardingPageBinding58 = {
      hasContentBelow: false,
      hasContentUnderTitleBar: false
    };
    onboardingPageBinding59 = 1;
    onboardingPageBinding60 = 40;
    onboardingPageBinding61 = 0.6;
    onboardingPageBinding62 = {
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1]
    };
    onboardingPageBinding63 = {
      type: "spring",
      stiffness: 110,
      damping: 20,
      mass: 1
    };
    onboardingPageBinding64 = 28;
    onboardingPageBinding65 = 20;
  });
class OnboardingConversationalViewModule {
  static get onboardingPageBinding62() {
    return onboardingPageBinding62;
  }
  static get onboardingPageBinding54() {
    return onboardingPageBinding54;
  }
  static get onboardingPageBinding58() {
    return onboardingPageBinding58;
  }
  static get onboardingPageBinding57() {
    return onboardingPageBinding57;
  }
  static get onboardingPageBinding56() {
    return onboardingPageBinding56;
  }
  static get onboardingPageUnit26() {
    return onboardingPageUnit26;
  }
  static get onboardingPageBinding66() {
    return onboardingPageBinding66;
  }
}
export { OnboardingConversationalViewModule };
