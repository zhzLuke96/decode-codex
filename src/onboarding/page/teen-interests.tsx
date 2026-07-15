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
function onboardingPageUnit38(onboardingPageOperand13) {
  let {
      selectedInterests,
      onToggleInterest,
      onNext
    } = onboardingPageOperand13,
    onboardingPageBinding431 = <img src={generalAppearanceCurrentCompatSlotLowerZ} className="size-12 shrink-0" draggable={false} alt="" aria-hidden="true" />;
  let onboardingPageBinding432 = <h1 className="mt-4 text-center text-[28px] leading-[34px] font-normal tracking-[0.38px] text-token-foreground">
      {React.createElement(currentAppInitialSharedMember0924, {
      id: "electron.onboarding.teenWelcome.interests.title",
      defaultMessage: "What are you into right now?",
      description: "Title on the teen onboarding interest picker page"
    })}
    </h1>;
  let onboardingPageBinding433 = <p className="mt-2 text-center text-base leading-6 text-token-description-foreground">
      {React.createElement(currentAppInitialSharedMember0924, {
      id: "electron.onboarding.teenWelcome.interests.subtitle",
      defaultMessage: "Pick your interests and we’ll suggest things to build",
      description: "Subtitle on the teen onboarding interest picker page"
    })}
    </p>;
  let onboardingPageBinding434 = onboardingPageBinding78.map(item => React.createElement(onboardingPageUnit39, {
    key: item.id,
    option: item,
    selected: selectedInterests.includes(item.id),
    onClick: () => {
      onToggleInterest(item.id);
    }
  }));
  let onboardingPageBinding435 = <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-3 px-6">
      {onboardingPageBinding434}
    </div>;
  let onboardingPageBinding436 = React.createElement(currentAppInitialSharedMember0924, {
    id: "electron.onboarding.teenWelcome.interests.next",
    defaultMessage: "Next",
    description: "Button label on the teen onboarding interest picker page"
  });
  let onboardingPageBinding437 = React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
    className: "mt-8 h-10 w-80 justify-center rounded-full border-transparent px-4 py-0 text-sm leading-5 font-medium",
    color: "primary",
    size: "default",
    onClick: onNext
  }, onboardingPageBinding436);
  return <div className="flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary px-6 py-12 text-token-foreground">
      <main className="flex w-full max-w-[600px] flex-col items-center">
        {onboardingPageBinding431}
        {onboardingPageBinding432}
        {onboardingPageBinding433}
        {onboardingPageBinding435}
        {onboardingPageBinding437}
      </main>
    </div>;
}
function onboardingPageUnit39(onboardingPageOperand22) {
  let {
      option,
      selected,
      onClick
    } = onboardingPageOperand22,
    onboardingPageBinding579 = selected ? "border-token-foreground bg-token-foreground/5" : "border-token-border bg-token-main-surface-primary hover:bg-token-foreground/[0.03]",
    onboardingPageBinding580 = worktreeNewThreadQueryCompatSlotLowerMLowerH("flex h-12 shrink-0 cursor-interaction items-center gap-2.5 rounded-[10px] border px-[13px] py-2.5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border", onboardingPageBinding579);
  let onboardingPageBinding581 = <span className="text-xl leading-5 tracking-[-0.18px] text-token-description-foreground" aria-hidden="true">
      {option.emoji}
    </span>;
  let onboardingPageBinding582 = <span className="text-base leading-6 tracking-[-0.32px] text-token-foreground">
      {option.label}
    </span>;
  return <button type="button" className={onboardingPageBinding580} aria-pressed={selected} onClick={onClick}>
      {onboardingPageBinding581}
      {onboardingPageBinding582}
    </button>;
}
var onboardingPageBinding76,
  onboardingPageBinding77,
  onboardingPageBinding78,
  onboardingPageBinding79 = once(() => {
    onboardingPageBinding76 = currentAppInitialSharedCompatSlotLowerGLowerC();
    worktreeNewThreadQueryCompatSlotLowerHLowerH();
    intlFormatDateTimeRuntime();
    generalAppearanceCurrentCompatSlotUpperB();
    worktreeNewThreadQueryCompatSlotUpperELowerM();
    onboardingPageBinding77 = currentAppInitialSharedCompatSlotLowerLLowerC();
    onboardingPageBinding78 = [{
      id: "animals",
      emoji: "🐶",
      label: React.createElement(currentAppInitialSharedMember0924, {
        id: "electron.onboarding.teenWelcome.interest.animals",
        defaultMessage: "Animals",
        description: "Teen onboarding interest option for animals"
      })
    }, {
      id: "fitness",
      emoji: "💪",
      label: React.createElement(currentAppInitialSharedMember0924, {
        id: "electron.onboarding.teenWelcome.interest.fitness",
        defaultMessage: "Fitness",
        description: "Teen onboarding interest option for fitness"
      })
    }, {
      id: "school",
      emoji: "📖",
      label: React.createElement(currentAppInitialSharedMember0924, {
        id: "electron.onboarding.teenWelcome.interest.school",
        defaultMessage: "School",
        description: "Teen onboarding interest option for school"
      })
    }, {
      id: "art_creative",
      emoji: "🎨",
      label: React.createElement(currentAppInitialSharedMember0924, {
        id: "electron.onboarding.teenWelcome.interest.artCreative",
        defaultMessage: "Art & Creative",
        description: "Teen onboarding interest option for art and creative work"
      })
    }, {
      id: "beauty_style",
      emoji: "💄",
      label: React.createElement(currentAppInitialSharedMember0924, {
        id: "electron.onboarding.teenWelcome.interest.beautyStyle",
        defaultMessage: "Beauty & Style",
        description: "Teen onboarding interest option for beauty and style"
      })
    }, {
      id: "science",
      emoji: "🧪",
      label: React.createElement(currentAppInitialSharedMember0924, {
        id: "electron.onboarding.teenWelcome.interest.science",
        defaultMessage: "Science",
        description: "Teen onboarding interest option for science"
      })
    }, {
      id: "money",
      emoji: "💸",
      label: React.createElement(currentAppInitialSharedMember0924, {
        id: "electron.onboarding.teenWelcome.interest.money",
        defaultMessage: "Money",
        description: "Teen onboarding interest option for money"
      })
    }, {
      id: "gaming",
      emoji: "👾",
      label: React.createElement(currentAppInitialSharedMember0924, {
        id: "electron.onboarding.teenWelcome.interest.gaming",
        defaultMessage: "Gaming",
        description: "Teen onboarding interest option for gaming"
      })
    }, {
      id: "music",
      emoji: "🎵",
      label: React.createElement(currentAppInitialSharedMember0924, {
        id: "electron.onboarding.teenWelcome.interest.music",
        defaultMessage: "Music",
        description: "Teen onboarding interest option for music"
      })
    }, {
      id: "sports",
      emoji: "🏀",
      label: React.createElement(currentAppInitialSharedMember0924, {
        id: "electron.onboarding.teenWelcome.interest.sports",
        defaultMessage: "Sports",
        description: "Teen onboarding interest option for sports"
      })
    }, {
      id: "coding",
      emoji: "🧑‍💻",
      label: React.createElement(currentAppInitialSharedMember0924, {
        id: "electron.onboarding.teenWelcome.interest.coding",
        defaultMessage: "Coding",
        description: "Teen onboarding interest option for coding"
      })
    }, {
      id: "other",
      emoji: "🔎",
      label: React.createElement(currentAppInitialSharedMember0924, {
        id: "electron.onboarding.teenWelcome.interest.other",
        defaultMessage: "Other",
        description: "Teen onboarding interest option for something else"
      })
    }];
  });
function $a(onboardingPageOperand27) {
  let {
      onContinue
    } = onboardingPageOperand27,
    onboardingPageBinding607 = [];
  let [onboardingPageBinding608, onboardingPageBinding609] = to.useState(onboardingPageBinding607),
    onboardingPageBinding610 = onboardingPageOperand98 => {
      onboardingPageBinding609(onboardingPageOperand103 => OnboardingSchemaModule.onboardingPageUnit1(onboardingPageOperand103, onboardingPageOperand98));
    };
  let onboardingPageBinding611 = onboardingPageBinding610,
    onboardingPageBinding612 = onboardingPageOperand91 => {
      let {
        result
      } = onboardingPageOperand91;
      onContinue(result);
    };
  let onboardingPageBinding613 = onboardingPageOperand53 => {
    let {
      completeStep
    } = onboardingPageOperand53;
    return React.createElement(onboardingPageUnit38, {
      selectedInterests: onboardingPageBinding608,
      onToggleInterest: onboardingPageBinding611,
      onNext: () => {
        completeStep({
          result: {
            step: OnboardingSchemaModule.onboardingPageBinding7.TeenInterests,
            interests: onboardingPageBinding608
          }
        });
      }
    });
  };
  return React.createElement(OnboardingFlowModule.onboardingPageUnit16, {
    name: "teen_interests",
    onComplete: onboardingPageBinding612
  }, onboardingPageBinding613);
}
var onboardingPageBinding80,
  to,
  no,
  onboardingPageBinding81 = once(() => {
    onboardingPageBinding80 = currentAppInitialSharedCompatSlotLowerGLowerC();
    to = toEsModule(currentAppInitialSharedCompatSlotUpperC(), 1);
    OnboardingSchemaModule.onboardingPageBinding16();
    OnboardingSchemaModule.onboardingPageBinding2();
    OnboardingFlowModule.onboardingPageBinding32();
    onboardingPageBinding79();
    no = currentAppInitialSharedCompatSlotLowerLLowerC();
  });
class OnboardingTeenInterestsModule {
  static get $a() {
    return $a;
  }
  static get onboardingPageBinding81() {
    return onboardingPageBinding81;
  }
}
export { OnboardingTeenInterestsModule };
