// Restored from ref/webview/assets/home-onboarding-assistant-tutorial-card-CacqQsHt.js
// The Setup Codex card rendered at the front of onboarding ambient suggestions.

import React, { type SVGProps } from "react";

import {
  appScopeO as useAppScopeStore,
  useAppScopeValue,
} from "../../../boundaries/app-scope";
import { useActiveCollaborationMode } from "../../../boundaries/onboarding-commons-externals.facade";
import { useServiceTierSettings } from "../../../composer/use-service-tier-settings";
import { CheckCircleFilledIcon } from "../../../icons/check-circle-filled-icon";
import {
  getRecommendedSkillStatsigOverride,
  useRecommendedSkillStatsigOverrides,
} from "../../../plugins/recommended-skill-statsig-overrides";
import { welcomeV2RoleStateAtom } from "../../../runtime/current-app-initial/onboarding-select-workspace-current-runtime";
import { classNames } from "../../../utils/class-names";
import { usePermissionsMode } from "../../../utils/use-permissions-mode";
import { useSetupCodexWizardStepView } from "../../../utils/setup-codex-wizard-step-view";
import { useIntl } from "../../../vendor/react-intl";
import {
  buildPreselectedRoleInstructions,
  buildSetupCodexPrompt,
  installSetupCodexSkill,
  ONBOARDING_WIZARD_PHASE_LAUNCH,
  ONBOARDING_WIZARD_PHASE_ROLE_PICKER,
  SETUP_CODEX_SKILL_SLUG,
  showAmbientSuggestionStartError,
  startSetupCodexConversation,
  trackSetupCodexWizardCompleted,
  trackSetupCodexWizardSkipped,
} from "./conversation";
import {
  ONBOARDING_ASSISTANT_SUGGESTION_ID,
  setAmbientSuggestionDefaultStatus,
} from "./state";
import type {
  AppScopeStoreLike,
  SetupCodexOnboardingSuggestionCardProps,
  WelcomeRoleState,
} from "./types";

const SETUP_CODEX_SKILL_ID = "onboard-new-user";

export function SetupCodexOnboardingSuggestionCard({
  completed,
  domain = null,
  hostId,
  onLocalConversationCreated,
  projectRoot = null,
}: SetupCodexOnboardingSuggestionCardProps) {
  const appScope = useAppScopeStore() as AppScopeStoreLike;
  const intl = useIntl();
  const {
    agentMode,
    isAgentModePending,
    permissionProfileId,
    shouldSendPermissionOverrides,
  } = usePermissionsMode({
    conversationId: null,
    cwdOverride: projectRoot,
    hostId,
  });
  const activeCollaborationModeState =
    typeof useActiveCollaborationMode === "function"
      ? useActiveCollaborationMode(null)
      : null;
  const { serviceTierSettings } = useServiceTierSettings(null);
  const welcomeRoleState = useAppScopeValue<WelcomeRoleState>(
    welcomeV2RoleStateAtom,
  );
  const recommendedSkillOverrides = useRecommendedSkillStatsigOverrides();
  const [isStarting, setIsStarting] = React.useState(false);
  const title = intl.formatMessage({
    id: "electron.onboarding.assistantSuggestion.title",
    defaultMessage: "Setup Codex",
    description: "Title for the card that starts the Setup Codex flow",
  });
  const description = intl.formatMessage({
    id: "electron.onboarding.assistantSuggestion.description",
    defaultMessage: "Personalize Codex around your work",
    description: "Description for the card that starts the Setup Codex flow",
  });
  const isDisabled = isAgentModePending || projectRoot == null;

  useSetupCodexWizardStepView(ONBOARDING_WIZARD_PHASE_LAUNCH, !completed);

  const startSetupCodex = async () => {
    if (isDisabled || completed || isStarting || projectRoot == null) return;

    trackSetupCodexWizardCompleted(appScope, ONBOARDING_WIZARD_PHASE_LAUNCH);
    setIsStarting(true);

    try {
      const additionalDeveloperInstructions = buildPreselectedRoleInstructions(
        welcomeRoleState?.roles ?? [],
      );
      const skillStatsigOverride = getRecommendedSkillStatsigOverride(
        recommendedSkillOverrides,
        SETUP_CODEX_SKILL_ID,
      )?.replace(/^name:\s*.*$/m, `name: ${SETUP_CODEX_SKILL_SLUG}`);
      const skillMarkdownPath = await installSetupCodexSkill({
        forceReinstall: skillStatsigOverride == null,
        hostId,
        invalidateSkills: () => {
          appScope.queryClient?.invalidateQueries({
            queryKey: ["skills"],
          });
        },
        skillStatsigOverride,
      });

      await startSetupCodexConversation({
        additionalDeveloperInstructions,
        agentMode: agentMode ?? "auto",
        collaborationMode: activeCollaborationModeState?.activeMode ?? null,
        hostId,
        onLocalConversationCreated,
        permissionProfileId,
        projectRoot,
        prompt: buildSetupCodexPrompt(skillMarkdownPath),
        serviceTier: serviceTierSettings.serviceTierForRequest,
        shouldSendPermissionOverrides,
      });

      if (additionalDeveloperInstructions != null) {
        trackSetupCodexWizardSkipped(
          appScope,
          ONBOARDING_WIZARD_PHASE_ROLE_PICKER,
        );
      }
      setAmbientSuggestionDefaultStatus(
        appScope,
        {
          domain,
          hostId,
          projectRoot,
        },
        ONBOARDING_ASSISTANT_SUGGESTION_ID,
        "accepted",
      );
    } catch {
      showAmbientSuggestionStartError(appScope);
    } finally {
      setIsStarting(false);
    }
  };

  return (
    <button
      type="button"
      className={classNames(
        "relative flex min-w-0 flex-col items-start gap-[10px] rounded-2xl border border-token-border-default bg-token-main-surface-primary px-3 py-3 text-left",
        completed || isDisabled || isStarting
          ? "cursor-default"
          : "cursor-interaction enabled:hover:bg-token-foreground/[0.02]",
        (isDisabled || isStarting) && !completed && "opacity-70",
        !completed && "shadow-[0_2px_6px_0_rgba(0,0,0,0.02)]",
      )}
      disabled={isDisabled || isStarting || completed}
      onClick={() => {
        void startSetupCodex();
      }}
    >
      <span
        className={classNames(
          "flex h-5 shrink-0 items-center",
          completed && "opacity-30",
        )}
      >
        <GraduationCapIcon aria-hidden className="size-5 shrink-0" />
      </span>
      <span
        className={classNames(
          "flex w-full min-w-0 flex-col gap-1 text-base",
          completed && "opacity-30",
        )}
      >
        <span className="line-clamp-1 leading-[18px] text-token-text-primary">
          {title}
        </span>
        <span className="line-clamp-3 leading-[18px] text-token-text-tertiary">
          {description}
        </span>
      </span>
      {completed ? (
        <CheckCircleFilledIcon
          aria-hidden="true"
          className="absolute top-3 right-3 h-5 w-5 text-token-charts-green [.dark_&]:text-[var(--green-500)] [.electron-dark_&]:text-[var(--green-500)]"
        />
      ) : null}
    </button>
  );
}

function GraduationCapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4322 4.81596C12.159 4.68505 11.8411 4.68505 11.5679 4.81596L2.31421 9.25003L11.5679 13.6841C11.8411 13.815 12.159 13.815 12.4322 13.6841L21.6859 9.25003L12.4322 4.81596ZM10.7037 3.01233C11.5233 2.61959 12.4768 2.61959 13.2964 3.01233L22.5501 7.44639C23.8957 8.09114 24.0456 9.86518 23 10.7617V15C23 15.5523 22.5523 16 22 16C21.4478 16 21 15.5523 21 15V11.7964L19.5 12.5152V15.8888C19.5 17.2412 18.8167 18.5019 17.6837 19.2402L16.9133 19.7422C13.9268 21.6881 10.0733 21.6881 7.08675 19.7422L6.31636 19.2402C5.18333 18.5019 4.50004 17.2412 4.50004 15.8888V12.5151L1.44997 11.0537C-0.0643805 10.328 -0.0643747 8.17202 1.44997 7.44639L10.7037 3.01233ZM6.50004 13.4735V15.8888C6.50004 16.565 6.84168 17.1954 7.4082 17.5645L8.17859 18.0665C10.5014 19.58 13.4986 19.58 15.8215 18.0665L16.5919 17.5645C17.1584 17.1954 17.5 16.565 17.5 15.8888V13.4735L13.2964 15.4877C12.4768 15.8805 11.5233 15.8805 10.7037 15.4877L6.50004 13.4735Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SetupCodexOnboardingSuggestionCard;
