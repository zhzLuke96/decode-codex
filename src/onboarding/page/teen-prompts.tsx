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
function onboardingPageUnit40(onboardingPageOperand9) {
  let {
      selectedInterests,
      onContinue
    } = onboardingPageOperand9,
    onboardingPageBinding372 = currentAppInitialSharedFunction0375(),
    onboardingPageBinding373,
    onboardingPageBinding374,
    onboardingPageBinding375,
    onboardingPageBinding376,
    onboardingPageBinding377,
    onboardingPageBinding378,
    onboardingPageBinding379;
  {
    let onboardingPageBinding530 = onboardingPageUnit41(selectedInterests);
    onboardingPageBinding379 = "flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary px-6 py-12 text-token-foreground";
    onboardingPageBinding375 = "flex w-full max-w-[768px] flex-col items-center";
    onboardingPageBinding376 = <img src={generalAppearanceCurrentCompatSlotLowerZ} className="size-12 shrink-0" draggable={false} alt="" aria-hidden="true" />;
    onboardingPageBinding377 = <h1 className="mt-4 text-center text-[28px] leading-[34px] font-normal tracking-[0.38px] text-token-foreground">
        {React.createElement(currentAppInitialSharedMember0924, {
        id: "electron.onboarding.teenPrompts.title",
        defaultMessage: "See what Codex can do",
        description: "Heading above teen onboarding example prompt cards"
      })}
      </h1>;
    onboardingPageBinding378 = <p className="mt-2 max-w-[688px] text-center text-base leading-6 text-token-description-foreground">
        {React.createElement(currentAppInitialSharedMember0924, {
        id: "electron.onboarding.teenPrompts.subtitle",
        defaultMessage: "Here are some ideas for your first project. Choose an idea, or start with one of your own.",
        description: "Subtitle above teen onboarding example prompt cards"
      })}
      </p>;
    onboardingPageBinding373 = "mt-6 grid w-full grid-cols-1 gap-4 min-[760px]:grid-cols-3";
    let onboardingPageBinding531;
    onboardingPageBinding531 = onboardingPageOperand57 => React.createElement(onboardingPageUnit42, {
      key: onboardingPageOperand57.id,
      prompt: onboardingPageOperand57,
      onUsePrompt: () => {
        onContinue(onboardingPageBinding372.formatMessage(onboardingPageOperand57.promptMessage));
      }
    });
    onboardingPageBinding374 = onboardingPageBinding530.map(onboardingPageBinding531);
  }
  let onboardingPageBinding380 = <div className={onboardingPageBinding373}>{onboardingPageBinding374}</div>;
  let onboardingPageBinding381 = () => {
    onContinue();
  };
  let onboardingPageBinding382 = React.createElement(currentAppInitialSharedMember0924, {
    id: "electron.onboarding.teenPrompts.writeOwnPrompt",
    defaultMessage: "Write my own prompt",
    description: "Button label for skipping teen onboarding example prompts"
  });
  let onboardingPageBinding383 = <button className="mt-8 h-10 cursor-interaction px-4 text-sm leading-5 font-normal text-token-description-foreground hover:text-token-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border" type="button" onClick={onboardingPageBinding381}>
      {onboardingPageBinding382}
    </button>;
  let onboardingPageBinding384 = <main className={onboardingPageBinding375}>
      {onboardingPageBinding376}
      {onboardingPageBinding377}
      {onboardingPageBinding378}
      {onboardingPageBinding380}
      {onboardingPageBinding383}
    </main>;
  return <div className={onboardingPageBinding379}>{onboardingPageBinding384}</div>;
}
function onboardingPageUnit41(onboardingPageOperand49) {
  return onboardingPageBinding84.map((item, index) => ({
    prompt: item,
    index,
    matchCount: item.interests.filter(_item => onboardingPageOperand49.includes(_item)).length
  })).sort((onboardingPageOperand68, onboardingPageOperand69) => onboardingPageOperand69.matchCount === onboardingPageOperand68.matchCount ? onboardingPageOperand68.index - onboardingPageOperand69.index : onboardingPageOperand69.matchCount - onboardingPageOperand68.matchCount).slice(0, 3).map(({
    prompt
  }) => prompt);
}
function onboardingPageUnit42(onboardingPageOperand17) {
  let {
      prompt,
      onUsePrompt
    } = onboardingPageOperand17,
    onboardingPageBinding494 = worktreeNewThreadQueryCompatSlotLowerMLowerH("flex h-[125px] items-center justify-center overflow-hidden rounded-t-2xl", prompt.thumbnail.className);
  let onboardingPageBinding495 = <div className="flex size-20 items-center justify-center rounded-2xl bg-white/70 text-[42px] shadow-lg">
      {prompt.thumbnail.emoji}
    </div>;
  let onboardingPageBinding496 = <div className={onboardingPageBinding494} aria-hidden="true">
      {onboardingPageBinding495}
    </div>;
  let onboardingPageBinding497 = <h3 className="text-sm leading-5 font-medium tracking-[-0.24px] text-token-foreground">
      {React.createElement(currentAppInitialSharedMember0924, {
      ...prompt.titleMessage
    })}
    </h3>;
  let onboardingPageBinding498 = <p className="mt-0.5 min-h-10 text-sm leading-5 tracking-[-0.3px] text-token-description-foreground">
      {React.createElement(currentAppInitialSharedMember0924, {
      ...prompt.descriptionMessage
    })}
    </p>;
  let onboardingPageBinding499 = React.createElement(currentAppInitialSharedMember0924, {
    id: "electron.onboarding.teenPrompts.usePrompt",
    defaultMessage: "Use prompt",
    description: "Button label for selecting a teen onboarding example prompt"
  });
  let onboardingPageBinding500 = React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
    className: "mt-4 h-9 w-full justify-center rounded-full px-4 py-0 text-sm leading-5 font-medium",
    color: "secondary",
    size: "default",
    onClick: onUsePrompt
  }, onboardingPageBinding499);
  let onboardingPageBinding501 = <div className="flex flex-1 flex-col px-4 py-3">
      {onboardingPageBinding497}
      {onboardingPageBinding498}
      {onboardingPageBinding500}
    </div>;
  return <article className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-token-border bg-token-main-surface-primary">
      {onboardingPageBinding496}
      {onboardingPageBinding501}
    </article>;
}
var onboardingPageBinding82,
  onboardingPageBinding83,
  onboardingPageBinding84,
  onboardingPageBinding85 = once(() => {
    onboardingPageBinding82 = currentAppInitialSharedCompatSlotLowerGLowerC();
    worktreeNewThreadQueryCompatSlotLowerHLowerH();
    intlFormatDateTimeRuntime();
    generalAppearanceCurrentCompatSlotUpperB();
    worktreeNewThreadQueryCompatSlotUpperELowerM();
    onboardingPageBinding83 = currentAppInitialSharedCompatSlotLowerLLowerC();
    onboardingPageBinding84 = [{
      id: "dodging-game",
      titleMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.dodgingGame.title",
        defaultMessage: "Dodging Game",
        description: "Title for a teen onboarding example prompt"
      }),
      descriptionMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.dodgingGame.description",
        defaultMessage: "Build a game you can play in your browser.",
        description: "Description for a teen onboarding example prompt"
      }),
      promptMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.dodgingGame.prompt",
        defaultMessage: "Build me a browser game where I control a character, dodge obstacles, collect points, and try to beat my high score. Make it colorful and easy to play.",
        description: "Prompt inserted from a teen onboarding example card"
      }),
      interests: ["gaming", "coding"],
      thumbnail: {
        emoji: "🎮",
        className: "bg-[linear-gradient(135deg,#DFF6FF_0%,#BEE6FF_100%)]"
      }
    }, {
      id: "study-web-app",
      titleMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.studyWebApp.title",
        defaultMessage: "Study web app",
        description: "Title for a teen onboarding example prompt"
      }),
      descriptionMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.studyWebApp.description",
        defaultMessage: "Turn your notes into flashcards and quizzes.",
        description: "Description for a teen onboarding example prompt"
      }),
      promptMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.studyWebApp.prompt",
        defaultMessage: "Create a study web app where I can paste notes, turn them into flashcards, quiz myself, and track what I need to review next.",
        description: "Prompt inserted from a teen onboarding example card"
      }),
      interests: ["school", "science", "coding"],
      thumbnail: {
        emoji: "📚",
        className: "bg-[linear-gradient(135deg,#E7FFF2_0%,#C9F3D9_100%)]"
      }
    }, {
      id: "outfit-picker",
      titleMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.outfitPicker.title",
        defaultMessage: "Outfit picker",
        description: "Title for a teen onboarding example prompt"
      }),
      descriptionMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.outfitPicker.description",
        defaultMessage: "Get outfit ideas based on your style, plans, and weather.",
        description: "Description for a teen onboarding example prompt"
      }),
      promptMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.outfitPicker.prompt",
        defaultMessage: "Make an outfit picker app that asks about my style, plans, and the weather, then suggests outfit ideas and lets me save favorites.",
        description: "Prompt inserted from a teen onboarding example card"
      }),
      interests: ["beauty_style", "art_creative"],
      thumbnail: {
        emoji: "👟",
        className: "bg-[linear-gradient(135deg,#FFF3F7_0%,#F6DDE8_100%)]"
      }
    }, {
      id: "pet-care-tracker",
      titleMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.petCareTracker.title",
        defaultMessage: "Pet care tracker",
        description: "Title for a teen onboarding example prompt"
      }),
      descriptionMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.petCareTracker.description",
        defaultMessage: "Track feeding, walks, and reminders for a pet.",
        description: "Description for a teen onboarding example prompt"
      }),
      promptMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.petCareTracker.prompt",
        defaultMessage: "Build a pet care tracker where I can log feeding, walks, training, and reminders for my pet. Add a cute dashboard and streaks.",
        description: "Prompt inserted from a teen onboarding example card"
      }),
      interests: ["animals"],
      thumbnail: {
        emoji: "🐶",
        className: "bg-[linear-gradient(135deg,#FFF6DE_0%,#F9DFB4_100%)]"
      }
    }, {
      id: "animal-avatar-maker",
      titleMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.animalAvatarMaker.title",
        defaultMessage: "Animal avatar maker",
        description: "Title for a teen onboarding example prompt"
      }),
      descriptionMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.animalAvatarMaker.description",
        defaultMessage: "Design cute animal characters and profile pictures.",
        description: "Description for a teen onboarding example prompt"
      }),
      promptMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.animalAvatarMaker.prompt",
        defaultMessage: "Build an animal avatar maker where I can design cute animal characters, choose colors and accessories, and save profile pictures.",
        description: "Prompt inserted from a teen onboarding example card"
      }),
      interests: ["animals", "art_creative"],
      thumbnail: {
        emoji: "🐾",
        className: "bg-[linear-gradient(135deg,#F9F0FF_0%,#FFD9EF_100%)]"
      }
    }, {
      id: "workout-planner",
      titleMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.workoutPlanner.title",
        defaultMessage: "Workout planner",
        description: "Title for a teen onboarding example prompt"
      }),
      descriptionMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.workoutPlanner.description",
        defaultMessage: "Plan workouts and track progress over time.",
        description: "Description for a teen onboarding example prompt"
      }),
      promptMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.workoutPlanner.prompt",
        defaultMessage: "Create a workout planner for teens with beginner-friendly workouts, rest days, progress tracking, and encouraging reminders.",
        description: "Prompt inserted from a teen onboarding example card"
      }),
      interests: ["fitness", "sports"],
      thumbnail: {
        emoji: "💪",
        className: "bg-[linear-gradient(135deg,#EBFFF6_0%,#BEEBD7_100%)]"
      }
    }, {
      id: "song-idea-board",
      titleMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.songIdeaBoard.title",
        defaultMessage: "Song idea board",
        description: "Title for a teen onboarding example prompt"
      }),
      descriptionMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.songIdeaBoard.description",
        defaultMessage: "Organize lyrics, moods, and playlist inspiration.",
        description: "Description for a teen onboarding example prompt"
      }),
      promptMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.songIdeaBoard.prompt",
        defaultMessage: "Make a music idea board where I can save song concepts, lyric fragments, moods, cover art ideas, and playlists that inspire me.",
        description: "Prompt inserted from a teen onboarding example card"
      }),
      interests: ["music", "art_creative"],
      thumbnail: {
        emoji: "🎵",
        className: "bg-[linear-gradient(135deg,#F2EDFF_0%,#D7CAFF_100%)]"
      }
    }, {
      id: "budget-helper",
      titleMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.budgetHelper.title",
        defaultMessage: "Budget helper",
        description: "Title for a teen onboarding example prompt"
      }),
      descriptionMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.budgetHelper.description",
        defaultMessage: "Track savings goals and spending habits.",
        description: "Description for a teen onboarding example prompt"
      }),
      promptMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.budgetHelper.prompt",
        defaultMessage: "Build a simple budget helper where I can track spending, savings goals, chores or job money, and see how long until I can afford something.",
        description: "Prompt inserted from a teen onboarding example card"
      }),
      interests: ["money", "school"],
      thumbnail: {
        emoji: "💸",
        className: "bg-[linear-gradient(135deg,#F1FFE6_0%,#D5F2B6_100%)]"
      }
    }, {
      id: "science-fair-lab",
      titleMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.scienceFairLab.title",
        defaultMessage: "Science fair lab",
        description: "Title for a teen onboarding example prompt"
      }),
      descriptionMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.scienceFairLab.description",
        defaultMessage: "Plan an experiment and organize observations.",
        description: "Description for a teen onboarding example prompt"
      }),
      promptMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.scienceFairLab.prompt",
        defaultMessage: "Create a science fair project planner that helps me choose a question, write a hypothesis, track observations, and prepare a presentation.",
        description: "Prompt inserted from a teen onboarding example card"
      }),
      interests: ["science", "school"],
      thumbnail: {
        emoji: "🧪",
        className: "bg-[linear-gradient(135deg,#EAFBFF_0%,#C3EDF6_100%)]"
      }
    }, {
      id: "team-stats-dashboard",
      titleMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.teamStatsDashboard.title",
        defaultMessage: "Team stats dashboard",
        description: "Title for a teen onboarding example prompt"
      }),
      descriptionMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.teamStatsDashboard.description",
        defaultMessage: "Track games, players, and season highlights.",
        description: "Description for a teen onboarding example prompt"
      }),
      promptMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.teamStatsDashboard.prompt",
        defaultMessage: "Build a sports team dashboard where I can track games, player stats, highlights, practice goals, and season progress.",
        description: "Prompt inserted from a teen onboarding example card"
      }),
      interests: ["sports", "fitness"],
      thumbnail: {
        emoji: "🏀",
        className: "bg-[linear-gradient(135deg,#FFF0E6_0%,#FFD3B8_100%)]"
      }
    }, {
      id: "portfolio-gallery",
      titleMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.portfolioGallery.title",
        defaultMessage: "Portfolio gallery",
        description: "Title for a teen onboarding example prompt"
      }),
      descriptionMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.portfolioGallery.description",
        defaultMessage: "Show off art, photos, writing, or projects.",
        description: "Description for a teen onboarding example prompt"
      }),
      promptMessage: currentAppInitialSharedMember0273({
        id: "electron.onboarding.teenPrompts.portfolioGallery.prompt",
        defaultMessage: "Make a personal portfolio gallery where I can show my art, photos, writing, projects, and a short bio in a clean visual layout.",
        description: "Prompt inserted from a teen onboarding example card"
      }),
      interests: ["art_creative", "coding"],
      thumbnail: {
        emoji: "🎨",
        className: "bg-[linear-gradient(135deg,#FFF0FA_0%,#EFD1FF_100%)]"
      }
    }];
  });
function onboardingPageUnit43(onboardingPageOperand25) {
  let {
      selectedInterests,
      onContinue
    } = onboardingPageOperand25,
    onboardingPageBinding595 = onboardingPageOperand92 => {
      let {
        result
      } = onboardingPageOperand92;
      onContinue(result);
    };
  let onboardingPageBinding596 = onboardingPageOperand35 => {
    let {
      completeStep
    } = onboardingPageOperand35;
    return React.createElement(onboardingPageUnit40, {
      selectedInterests,
      onContinue: onboardingPageOperand43 => {
        completeStep({
          result: {
            step: OnboardingSchemaModule.onboardingPageBinding7.TeenPrompts,
            completion: {
              state: {
                roles: ["student"],
                personalizedSuggestionsEnabled: false,
                workMode: "coding"
              },
              options: {
                focusComposer: true,
                prefillPrompt: onboardingPageOperand43
              }
            }
          },
          skipped: onboardingPageOperand43 == null
        });
      }
    });
  };
  return React.createElement(OnboardingFlowModule.onboardingPageUnit16, {
    name: "teen_prompts",
    onComplete: onboardingPageBinding595
  }, onboardingPageBinding596);
}
var onboardingPageBinding86,
  onboardingPageBinding87,
  onboardingPageBinding88 = once(() => {
    onboardingPageBinding86 = currentAppInitialSharedCompatSlotLowerGLowerC();
    OnboardingSchemaModule.onboardingPageBinding16();
    OnboardingFlowModule.onboardingPageBinding32();
    onboardingPageBinding85();
    onboardingPageBinding87 = currentAppInitialSharedCompatSlotLowerLLowerC();
  });
class OnboardingTeenPromptsModule {
  static get onboardingPageUnit43() {
    return onboardingPageUnit43;
  }
  static get onboardingPageBinding88() {
    return onboardingPageBinding88;
  }
}
export { OnboardingTeenPromptsModule };
