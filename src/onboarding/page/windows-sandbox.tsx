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
import { OnboardingTeenWelcomeModule } from "./teen-welcome";
import { OnboardingWindowsUacPreviewModule } from "./windows-uac-preview";
function onboardingPageUnit49(onboardingPageOperand18) {
  let {
      onContinue
    } = onboardingPageOperand18,
    onboardingPageBinding516 = currentAppInitialSharedCompatSlotUpperKLowerO(currentAppInitialSharedCompatSlotUpperE),
    {
      phase,
      error,
      isPending,
      isRequirementsPending,
      isRequirementsError,
      allowElevatedSetup,
      requiresElevatedSandboxByPolicy,
      showUnelevatedSetupAlternative,
      allowUnelevatedFallback,
      setLimitedAccessMode,
      enableElevated,
      enableUnelevated: onboardingPageBinding517,
      retryRequirements
    } = appgenLibraryHotDjo67r4nCompatSlotLowerULowerN(),
    {
      hasError,
      retry
    } = appgenLibraryHotDjo67r4nCompatSlotLowerNLowerN(),
    onboardingPageBinding518 = onboardingPageOperand90 => {
      onboardingPageOperand90 && onContinue({
        step: OnboardingSchemaModule.onboardingPageBinding7.WindowsSandboxSetup
      });
    };
  let onboardingPageBinding519 = onboardingPageBinding518,
    onboardingPageBinding520 = isRequirementsError || hasError,
    onboardingPageBinding521 = error != null,
    onboardingPageBinding522 = () => {
      enableElevated().then(onboardingPageBinding519);
    };
  let onboardingPageBinding523 = () => {
    onboardingPageBinding517().then(value => {
      value && (onboardingPageBinding516.set(appgenLibraryHotDjo67r4nCompatSlotUnderscoreLowerN, true), onContinue({
        step: OnboardingSchemaModule.onboardingPageBinding7.WindowsSandboxSetup
      }));
    });
  };
  let onboardingPageBinding524 = hasError ? retry : retryRequirements,
    onboardingPageBinding525 = () => {
      setLimitedAccessMode();
      onboardingPageBinding516.set(appgenLibraryHotDjo67r4nCompatSlotUnderscoreLowerN, true);
      onContinue({
        step: OnboardingSchemaModule.onboardingPageBinding7.WindowsSandboxSetup
      });
    };
  return React.createElement(onboardingPageUnit50, {
    phase,
    isPending,
    isRequirementsPending,
    isRequirementsError: onboardingPageBinding520,
    hasError: onboardingPageBinding521,
    allowElevatedSetup,
    allowUnelevatedFallback,
    requiresElevatedSandboxByPolicy,
    showUnelevatedSetupAlternative,
    onElevatedSetup: onboardingPageBinding522,
    onUnelevatedSetup: onboardingPageBinding523,
    onRetryRequirements: onboardingPageBinding524,
    onContinueWithLimitedAccess: onboardingPageBinding525
  });
}
function onboardingPageUnit50(onboardingPageOperand3) {
  let {
    phase,
    isPending,
    isRequirementsPending,
    isRequirementsError,
    hasError,
    allowElevatedSetup,
    allowUnelevatedFallback,
    requiresElevatedSandboxByPolicy,
    showUnelevatedSetupAlternative,
    onElevatedSetup,
    onUnelevatedSetup,
    onRetryRequirements,
    onContinueWithLimitedAccess
  } = onboardingPageOperand3;
  if (isRequirementsPending) {
    let onboardingPageBinding616 = React.createElement(appMainCurrentCompatSlotLowerVLowerS, {
      className: "size-10"
    });
    let onboardingPageBinding617;
    return React.createElement(onboardingPageUnit51, null, onboardingPageBinding616, <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-[28px] leading-[34px] font-normal text-token-foreground">
            {React.createElement(currentAppInitialSharedMember0924, {
          id: "windowsSandbox.onboarding.checking.title",
          defaultMessage: "Checking Windows setup",
          description: "Title while Codex checks Windows sandbox setup requirements"
        })}
          </h1>
          {React.createElement(worktreeNewThreadQueryCompatSlotUpperDLowerM, {
        className: "size-5"
      })}
        </div>);
  }
  if (isRequirementsError) {
    let onboardingPageBinding503 = React.createElement(appMainCurrentCompatSlotLowerVLowerS, {
      className: "size-10"
    });
    let onboardingPageBinding504 = <h1 className="text-[28px] leading-[34px] font-normal text-token-foreground">
        {React.createElement(currentAppInitialSharedMember0924, {
        id: "windowsSandbox.onboarding.requirementsError.title",
        defaultMessage: "Couldn’t check Windows setup",
        description: "Title when Codex cannot check organization requirements for Windows sandbox setup"
      })}
      </h1>;
    let onboardingPageBinding505 = <p className="text-base leading-6 text-token-description-foreground">
        {React.createElement(currentAppInitialSharedMember0924, {
        id: "windowsSandbox.onboarding.requirementsError.description",
        defaultMessage: "Try again to continue Windows setup",
        description: "Description when Codex cannot check organization requirements for Windows sandbox setup"
      })}
      </p>;
    let onboardingPageBinding506 = React.createElement(currentAppInitialSharedMember0924, {
      id: "windowsSandbox.onboarding.requirementsError.retry",
      defaultMessage: "Try again",
      description: "Button to retry checking organization requirements for Windows sandbox setup"
    });
    let onboardingPageBinding507 = React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
      className: "h-12 w-full justify-center focus-visible:ring-2 focus-visible:ring-token-focus-border",
      size: "large",
      onClick: onRetryRequirements
    }, onboardingPageBinding506);
    let onboardingPageBinding508 = React.createElement(onboardingPageUnit52, {
      onConfirm: onContinueWithLimitedAccess
    });
    let onboardingPageBinding509;
    return React.createElement(onboardingPageUnit51, null, onboardingPageBinding503, <div className="flex max-w-[520px] flex-col items-center gap-3 text-center">
          {onboardingPageBinding504}
          {onboardingPageBinding505}
          <div className="mt-3 flex w-[340px] flex-col items-center gap-2">
            {onboardingPageBinding507}
            {onboardingPageBinding508}
          </div>
        </div>);
  }
  let onboardingPageBinding278 = isPending && (phase === "startingElevated" || phase === "waitingElevated"),
    onboardingPageBinding279 = showUnelevatedSetupAlternative || phase === "retryUnelevated",
    onboardingPageBinding280 = React.createElement(appMainCurrentCompatSlotLowerVLowerS, {
      className: "size-10"
    });
  let onboardingPageBinding281 = <h1 className="text-[24px] leading-[30px] font-normal text-token-foreground">
      {React.createElement(currentAppInitialSharedMember0924, {
      id: "windowsSandbox.onboarding.title",
      defaultMessage: "Finish Windows setup",
      description: "Title for the one-time Windows setup step"
    })}
    </h1>;
  let onboardingPageBinding282 = <div className="mt-2.5 flex flex-col items-center gap-1.5 text-center">
      {onboardingPageBinding281}
      <p className="text-base leading-6 text-token-description-foreground">
        {React.createElement(currentAppInitialSharedMember0924, {
        id: "windowsSandbox.onboarding.elevated.subtitle",
        defaultMessage: "{appName} needs a one-time permission to work on your computer",
        description: "Subtitle explaining why the app requests Windows administrator permission",
        values: {
          appName: CODEX_APP_NAME
        }
      })}
      </p>
    </div>;
  let onboardingPageBinding283 = requiresElevatedSandboxByPolicy ? <div className="mt-5 flex h-8 items-center gap-1.5 rounded-xl bg-[#fff7d6] px-2.5 text-[13px] text-[#b56a00] [.electron-dark_&]:bg-[#4a390d] [.electron-dark_&]:text-[#f0b552]">
      {React.createElement(appMainCurrentCompatSlotUpperZLowerO, {
      className: "size-3.5"
    })}
      {React.createElement(currentAppInitialSharedMember0924, {
      id: "windowsSandbox.onboarding.workspaceRequirement",
      defaultMessage: "Your workspace requires this setup",
      description: "Notice that the user's workspace requires Windows setup"
    })}
    </div> : null;
  let onboardingPageBinding284 = requiresElevatedSandboxByPolicy ? "mt-6" : "mt-[22px]",
    onboardingPageBinding285 = !onboardingPageBinding278,
    onboardingPageBinding286 = React.createElement(OnboardingWindowsUacPreviewModule.onboardingPageUnit53, {
      disabled: isPending,
      showArrow: onboardingPageBinding285,
      onElevatedSetup
    });
  let onboardingPageBinding287 = <div className={onboardingPageBinding284}>{onboardingPageBinding286}</div>;
  let onboardingPageBinding288 = <div className="mt-8 flex min-h-5 w-[312px] max-w-[calc(100vw-48px)] items-center justify-center text-center text-[15px] leading-5 text-token-description-foreground">
      {hasError ? <span className="text-token-charts-red">
          {React.createElement(currentAppInitialSharedMember0924, {
        id: "windowsSandbox.onboarding.setup.error",
        defaultMessage: "Windows setup didn’t finish",
        description: "Error after Windows setup does not finish"
      })}
        </span> : React.createElement(currentAppInitialSharedMember0924, {
      id: "windowsSandbox.onboarding.elevated.instruction",
      defaultMessage: "Click Yes in the next step to finish setup",
      description: "Instruction preparing users for the Windows UAC prompt"
    })}
    </div>;
  let onboardingPageBinding289 = hasError ? React.createElement(currentAppInitialSharedMember0924, {
    id: "windowsSandbox.onboarding.retry",
    defaultMessage: "Try Windows setup again",
    description: "Button to retry Windows setup"
  }) : React.createElement(currentAppInitialSharedMember0924, {
    id: "windowsSandbox.onboarding.finishSetup",
    defaultMessage: "Finish setup",
    description: "Button to start Windows setup"
  });
  let onboardingPageBinding290 = React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
    className: "h-10 w-full justify-center !bg-[#0d0d0d] !text-white focus-visible:ring-2 focus-visible:ring-token-focus-border [.electron-dark_&]:!bg-token-foreground [.electron-dark_&]:!text-token-dropdown-background",
    size: "large",
    disabled: isPending,
    loading: onboardingPageBinding278,
    onClick: onElevatedSetup
  }, onboardingPageBinding289);
  let onboardingPageBinding291 = allowElevatedSetup && allowUnelevatedFallback && onboardingPageBinding279 ? React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
    className: "justify-center px-3 py-1.5 focus-visible:ring-2 focus-visible:ring-token-focus-border",
    color: "ghostTertiary",
    disabled: isPending,
    onClick: onUnelevatedSetup
  }, React.createElement(currentAppInitialSharedMember0924, {
    id: "windowsSandbox.onboarding.elevated.noAdmin",
    defaultMessage: "Continue with limited access",
    description: "Button to continue by setting up Windows without administrator access"
  })) : null;
  let onboardingPageBinding292 = requiresElevatedSandboxByPolicy ? React.createElement(onboardingPageUnit52, {
    disabled: isPending,
    onConfirm: onContinueWithLimitedAccess
  }) : null;
  let onboardingPageBinding293 = <div className="absolute top-12 left-1/2 -translate-x-1/2">
      {onboardingPageBinding291}
      {onboardingPageBinding292}
    </div>;
  let onboardingPageBinding294 = <div className="relative mt-2 w-[296px] max-w-[calc(100vw-48px)]">
      {onboardingPageBinding290}
      {onboardingPageBinding293}
    </div>;
  let onboardingPageBinding295 = <div className="flex w-full flex-col items-center">
      {onboardingPageBinding280}
      {onboardingPageBinding282}
      {onboardingPageBinding283}
      {onboardingPageBinding287}
      {onboardingPageBinding288}
      {onboardingPageBinding294}
    </div>;
  return React.createElement(onboardingPageUnit51, {
    shiftForWorkspaceRequirement: requiresElevatedSandboxByPolicy
  }, onboardingPageBinding295);
}
function onboardingPageUnit51(onboardingPageOperand33) {
  let {
      children,
      shiftForWorkspaceRequirement
    } = onboardingPageOperand33,
    onboardingPageBinding629 = shiftForWorkspaceRequirement !== undefined && shiftForWorkspaceRequirement ? "-translate-y-[31px]" : "-translate-y-0.5",
    onboardingPageBinding630 = worktreeNewThreadQueryCompatSlotLowerMLowerH("relative my-auto flex w-full shrink-0 flex-col items-center gap-5 py-7", onboardingPageBinding629);
  return <main className="flex size-full overflow-y-auto bg-white px-6 [.electron-dark_&]:bg-token-bg-primary">
      <div className={onboardingPageBinding630}>{children}</div>
    </main>;
}
function onboardingPageUnit52(onboardingPageOperand8) {
  let {
      disabled,
      onConfirm
    } = onboardingPageOperand8,
    [onboardingPageBinding355, onboardingPageBinding356] = onboardingPageBinding103.useState(false),
    onboardingPageBinding357 = React.createElement(currentAppInitialSharedMember0924, {
      id: "windowsSandbox.onboarding.limitedAccessConfirmation.title",
      defaultMessage: "Continue with limited access?",
      description: "Title for confirming that the user wants to continue without Windows sandbox setup"
    });
  let onboardingPageBinding358 = onboardingPageBinding357,
    onboardingPageBinding359 = React.createElement(currentAppInitialSharedMember0924, {
      id: "windowsSandbox.onboarding.limitedAccessConfirmation.description",
      defaultMessage: "You’ll still be able to chat, but {appName} won’t be able to create files, edit code, or take actions until setup is complete",
      description: "Description of the read-only limitations when continuing without Windows sandbox setup",
      values: {
        appName: CODEX_APP_NAME
      }
    });
  let onboardingPageBinding360 = onboardingPageBinding359,
    onboardingPageBinding361 = React.createElement(currentAppInitialSharedMember0924, {
      id: "windowsSandbox.onboarding.continueWithLimitedAccess",
      defaultMessage: "Continue with limited access",
      description: "Button to continue in read-only mode without completing Windows sandbox setup"
    });
  let onboardingPageBinding362 = React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
    className: "justify-center px-3 py-1.5 focus-visible:ring-2 focus-visible:ring-token-focus-border",
    color: "ghostTertiary",
    disabled
  }, onboardingPageBinding361);
  let onboardingPageBinding363 = event => {
    event.preventDefault();
    onboardingPageBinding356(false);
    onConfirm();
  };
  let onboardingPageBinding364, onboardingPageBinding365;
  onboardingPageBinding364 = React.createElement(worktreeNewThreadQueryCompatSlotUpperELowerO, {
    className: "sr-only"
  }, onboardingPageBinding358);
  onboardingPageBinding365 = React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerO, {
    className: "sr-only"
  }, onboardingPageBinding360);
  let onboardingPageBinding366 = React.createElement(worktreeNewThreadQueryCompatSlotLowerBLowerA, {
    className: "!pt-0"
  }, React.createElement(worktreeNewThreadQueryCompatSlotLowerYLowerA, {
    title: onboardingPageBinding358,
    subtitle: onboardingPageBinding360,
    subtitleSize: "sm"
  }));
  let onboardingPageBinding367 = React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
    className: "!px-2.5 py-1",
    type: "button",
    size: "default",
    color: "secondary",
    onClick: () => onboardingPageBinding356(false)
  }, React.createElement(currentAppInitialSharedMember0924, {
    id: "windowsSandbox.onboarding.limitedAccessConfirmation.cancel",
    defaultMessage: "Finish setup",
    description: "Button to return to Windows sandbox setup instead of continuing with limited access"
  }));
  let onboardingPageBinding368 = React.createElement(worktreeNewThreadQueryCompatSlotLowerBLowerA, null, React.createElement(worktreeNewThreadQueryCompatSlotLowerVLowerA, {
    className: "!gap-1.5"
  }, onboardingPageBinding367, React.createElement(worktreeNewThreadQueryCompatSlotUpperTLowerM, {
    className: "!px-2.5 py-1",
    type: "submit",
    size: "default"
  }, React.createElement(currentAppInitialSharedMember0924, {
    id: "windowsSandbox.onboarding.limitedAccessConfirmation.confirm",
    defaultMessage: "Use limited access",
    description: "Button to confirm continuing in read-only mode without Windows sandbox setup"
  }))));
  let onboardingPageBinding369 = React.createElement(worktreeNewThreadQueryCompatSlotUnderscoreLowerA, {
    as: "form",
    onSubmit: onboardingPageBinding363
  }, onboardingPageBinding364, onboardingPageBinding365, onboardingPageBinding366, onboardingPageBinding368);
  return React.createElement(worktreeNewThreadQueryCompatSlotLowerWLowerO, {
    open: onboardingPageBinding355,
    onOpenChange: onboardingPageBinding356,
    contentClassName: "-mt-1 !w-[370px] !bg-token-dropdown-background !backdrop-blur-none",
    overlayClassName: "!bg-[color-mix(in_srgb,var(--color-token-bg-primary)_64%,transparent)] backdrop-blur-[18px]",
    showDialogClose: false,
    size: "compact",
    triggerContent: onboardingPageBinding362
  }, onboardingPageBinding369);
}
var onboardingPageBinding102,
  onboardingPageBinding103,
  windowsSandboxJsxRuntime,
  onboardingPageBinding104 = once(() => {
    onboardingPageBinding102 = currentAppInitialSharedCompatSlotLowerGLowerC();
    worktreeNewThreadQueryCompatSlotLowerHLowerH();
    currentAppInitialSharedCompatSlotUpperVLowerO();
    onboardingPageBinding103 = toEsModule(currentAppInitialSharedCompatSlotUpperC(), 1);
    intlFormatDateTimeRuntime();
    initCodexAppIdentityChunk();
    worktreeNewThreadQueryCompatSlotUpperELowerM();
    worktreeNewThreadQueryCompatSlotUpperDLowerO();
    worktreeNewThreadQueryCompatSlotUpperCLowerA();
    worktreeNewThreadQueryCompatSlotUpperOLowerM();
    appgenLibraryHotDjo67r4nCompatSlotLowerTLowerN();
    appgenLibraryHotDjo67r4nCompatSlotLowerLLowerN();
    appgenLibraryHotDjo67r4nCompatSlotLowerGLowerN();
    appMainCurrentCompatSlotUpperBLowerO();
    appMainCurrentCompatSlotLowerYLowerS();
    worktreeNewThreadQueryCompatSlotLowerVLowerR();
    OnboardingTeenWelcomeModule.onboardingPageBinding98();
    currentAppInitialSharedCompatSlotUpperD();
    OnboardingSchemaModule.onboardingPageBinding16();
    OnboardingTeenWelcomeModule.onboardingPageBinding101();
    windowsSandboxJsxRuntime = currentAppInitialSharedCompatSlotLowerLLowerC();
  });
class OnboardingWindowsSandboxModule {
  static get onboardingPageUnit49() {
    return onboardingPageUnit49;
  }
  static get onboardingPageBinding104() {
    return onboardingPageBinding104;
  }
}
export { OnboardingWindowsSandboxModule };
