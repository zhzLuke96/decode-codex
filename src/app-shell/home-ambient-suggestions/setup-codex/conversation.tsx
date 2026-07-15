// Restored from ref/webview/assets/home-onboarding-assistant-tutorial-card-CacqQsHt.js
// Host interactions used when the Setup Codex suggestion starts a conversation.

import React from "react";

import {
  resolveProjectlessWorkspace,
  toastControllerSignal,
} from "../../../boundaries/onboarding-commons-externals.facade";
import { trackOnboardingWizardAction } from "../../../boundaries/thread-context-inputs.facade";
import { formatSkillMention } from "../../../plugins/skill-utils";
import { onboardingWizardAction } from "../../../runtime/app-host-services-runtime";
import { sendAppServerRequest } from "../../../runtime/app-server-request";
import { sendHostRequest } from "../../../runtime/host-request-runtime";
import { FormattedMessage } from "../../../vendor/react-intl";
import { buildStartConversationParams } from "../../../utils/build-start-conversation-params";
import type { AppScopeStoreLike } from "./types";

type InstallRecommendedSkillResponse = {
  destination?: string | null;
  error?: string | null;
  success: boolean;
};
type SetupCodexWorkspace = {
  cwd: string | null;
  projectlessOutputDirectory: string | null;
  workspaceRoots: string[];
};

const SETUP_CODEX_SKILL_ID = "onboard-new-user";
const SETUP_CODEX_SKILL_NAME = "Setup Codex";
const SETUP_CODEX_RECOMMENDED_SKILL_PATH = "skills/.curated/onboard-new-user";
const SETUP_CODEX_INTERACTIVE_TOOLS_CONFIG_KEY =
  "features.onboarding_interactive_tools";
export const SETUP_CODEX_SKILL_SLUG = "setup-codex";
export const ONBOARDING_WIZARD_PHASE_LAUNCH =
  "CODEX_ONBOARDING_WIZARD_PHASE_LAUNCH";
export const ONBOARDING_WIZARD_PHASE_ROLE_PICKER =
  "CODEX_ONBOARDING_WIZARD_PHASE_ROLE_PICKER";

export function buildSetupCodexPrompt(skillMarkdownPath: string): string {
  return formatSkillMention({
    name: SETUP_CODEX_SKILL_NAME,
    path: skillMarkdownPath,
  });
}

export function buildPreselectedRoleInstructions(
  roles: readonly string[],
): string | null {
  const selectedRoles = roles.filter((role) => role !== "default");
  return selectedRoles.length === 0
    ? null
    : `The user has already selected Setup Codex roles: ${selectedRoles.join(", ")}. Mark Personalize Codex complete, skip role selection, and use these roles for subsequent setup steps.`;
}

export async function installSetupCodexSkill({
  forceReinstall,
  hostId,
  invalidateSkills,
  skillStatsigOverride,
}: {
  forceReinstall: boolean;
  hostId: string;
  invalidateSkills: () => void;
  skillStatsigOverride?: string;
}): Promise<string> {
  const result = await sendHostRequest<InstallRecommendedSkillResponse>(
    "install-recommended-skill",
    {
      params: {
        forceReinstall,
        hostId,
        installRoot: null,
        repoPath: SETUP_CODEX_RECOMMENDED_SKILL_PATH,
        skillId: SETUP_CODEX_SKILL_ID,
        skillStatsigOverride,
      },
    },
  );

  if (!result.success || result.destination == null) {
    throw new Error(result.error ?? "Unable to install skill");
  }

  invalidateSkills();
  await sendAppServerRequest("list-skills-for-host", {
    forceReload: true,
    hostId,
  });
  return joinSkillMarkdownPath(result.destination);
}

export async function startSetupCodexConversation({
  additionalDeveloperInstructions,
  agentMode,
  collaborationMode,
  hostId,
  onLocalConversationCreated,
  permissionProfileId,
  projectRoot,
  prompt,
  serviceTier,
  shouldSendPermissionOverrides,
}: {
  additionalDeveloperInstructions: string | null;
  agentMode: string;
  collaborationMode: unknown;
  hostId: string;
  onLocalConversationCreated: (conversationId: unknown) => unknown;
  permissionProfileId: string | null;
  projectRoot: string;
  prompt: string;
  serviceTier: string | null;
  shouldSendPermissionOverrides: boolean;
}): Promise<void> {
  const workspace = await resolveSetupCodexWorkspace(projectRoot, prompt);
  if (
    isProjectlessWorkspaceRoot(projectRoot) &&
    workspace.projectlessOutputDirectory == null
  ) {
    throw new Error("No projectless output directory found");
  }

  const { config } = await sendAppServerRequest<{ config: unknown }>(
    "read-config-for-host",
    {
      cwd: workspace.cwd ?? projectRoot,
      hostId,
      includeLayers: false,
    },
  );
  const input = [
    {
      type: "text",
      text: prompt,
      text_elements: [],
    },
  ];
  const startConversationParams = buildStartConversationParams({
    additionalDeveloperInstructions,
    addedFiles: [],
    agentMode,
    collaborationMode,
    commentAttachments: [],
    config,
    configOverrides: {
      [SETUP_CODEX_INTERACTIVE_TOOLS_CONFIG_KEY]: true,
    },
    cwd: workspace.cwd ?? projectRoot,
    fileAttachments: [],
    input,
    permissionProfileId,
    serviceTier,
    shouldSendPermissionOverrides,
    workspaceRoots: workspace.workspaceRoots,
    ...(isProjectlessWorkspaceRoot(projectRoot)
      ? {
          projectlessOutputDirectory: workspace.projectlessOutputDirectory,
          workspaceKind: "projectless" as const,
        }
      : {
          workspaceKind: "project" as const,
        }),
  });

  await onLocalConversationCreated(
    await sendAppServerRequest("start-conversation", {
      hostId,
      ...startConversationParams,
    }),
  );
}

export function trackSetupCodexWizardCompleted(
  appScope: unknown,
  phase: string,
): void {
  trackSetupCodexWizardAction(
    appScope,
    phase,
    onboardingWizardAction.CODEX_ONBOARDING_WIZARD_ACTION_COMPLETED,
  );
}

export function trackSetupCodexWizardSkipped(
  appScope: unknown,
  phase: string,
): void {
  trackSetupCodexWizardAction(
    appScope,
    phase,
    onboardingWizardAction.CODEX_ONBOARDING_WIZARD_ACTION_SKIPPED,
  );
}

export function showAmbientSuggestionStartError(
  appScope: AppScopeStoreLike,
): void {
  const toastController = safeReadToastController(appScope);
  toastController?.danger?.(
    <FormattedMessage
      id="home.ambientSuggestions.startError"
      defaultMessage="Unable to start this suggestion"
      description="Toast shown when launching an ambient suggestion fails"
    />,
    {
      id: "ambient-suggestion-start-error",
    },
  );
}

function joinSkillMarkdownPath(destination: string): string {
  return `${destination.replace(/[\\/]+$/, "")}/SKILL.md`;
}

async function resolveSetupCodexWorkspace(
  projectRoot: string,
  prompt: string,
): Promise<SetupCodexWorkspace> {
  if (
    isProjectlessWorkspaceRoot(projectRoot) &&
    typeof resolveProjectlessWorkspace === "function"
  ) {
    return (await resolveProjectlessWorkspace([projectRoot], {
      prompt,
    })) as SetupCodexWorkspace;
  }

  return {
    cwd: projectRoot,
    projectlessOutputDirectory: null,
    workspaceRoots: [projectRoot],
  };
}

function isProjectlessWorkspaceRoot(projectRoot: string): boolean {
  return projectRoot === "~";
}

function trackSetupCodexWizardAction(
  appScope: unknown,
  phase: string,
  action: string,
): void {
  if (typeof trackOnboardingWizardAction === "function") {
    trackOnboardingWizardAction(appScope, phase, action);
  }
}

function safeReadToastController(
  appScope: AppScopeStoreLike,
): { danger?: (message: React.ReactNode, options?: unknown) => void } | null {
  try {
    return appScope.get(toastControllerSignal) ?? null;
  } catch {
    return null;
  }
}
