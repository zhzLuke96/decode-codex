// Restored from ref/webview/assets/home-conversation-starters-3NXtkj_S.js
// Home conversation starter cards shown under the home composer.
import React from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import { appScopeO as useAppScopeStore } from "../boundaries/app-scope";
import { useAuth } from "../auth/use-auth";
import {
  useComposerController,
  useComposerControllerSelector,
} from "../composer/use-composer-controller";
import {
  type HomeComposerSubmitMode,
  useHomeComposerSubmitModeController,
} from "../composer/home-composer-submit-mode";
import { Button } from "../ui/button";
import {
  ConversationStarterCard,
  ConversationStarterIcon,
} from "../ui/conversation-starter-card-current";
import { XIcon } from "../icons/x-icon";
import { useCollaborationMode } from "../collaboration/use-collaboration-mode";
import { HOME_USE_CASES } from "./home-use-cases-data";
import { formatSkillMention, findSkillByName } from "../plugins/skill-utils";
import { sendAppServerRequest } from "../runtime/app-server-request";
import { useSharedObjectState } from "../runtime/shared-object-host-runtime/shared-object-state";
import { useRecommendedSkills } from "../utils/use-recommended-skills";
import { useIntl } from "../vendor/react-intl";
import { vscodeApiA as useQueryClient } from "../boundaries/vscode-api";
import {
  imagePickerSchemaCapabilities as logProductEvent,
  currentAppInitialSharedMember0166 as starterPromptSelectedEvent,
  currentAppInitialSharedMember0414 as starterPromptsDisplayedEvent,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
type ComposerController = {
  focus(): void;
  getText(): string;
  hasText(): boolean;
  setPromptText?: (text: string) => void;
  setText(text: string): void;
};
type HomeUseCase = (typeof HOME_USE_CASES)[number] & {
  initialCollaborationMode?: string | null;
  skillName?: string | null;
};
type HomeConversationStartersProps = {
  activeWorkspaceRoot: string | null;
  hostId: string;
  portalTarget?: Element | DocumentFragment | null;
};
type QueryClientLike = {
  invalidateQueries(options: { queryKey: readonly unknown[] }): unknown;
};
type ListedSkill = {
  name: string;
  path?: string | null;
};
type ListSkillsForHostResponse = {
  data?: Array<{
    skills: ListedSkill[];
  }>;
};
type RecommendedSkill = {
  id: string;
  name: string;
  repoPath?: string | null;
};
type InstallRecommendedSkillResult = {
  destination?: string | null;
  success?: boolean;
};
const HIDDEN_STARTERS_SHARED_OBJECT_KEY =
  "has-hidden-home-conversation-starters";
const HOME_CONVERSATION_STARTER_PROMPT_TYPE = "home_conversation_starter";
const STARTER_SKILL_PATTERN = /\$([a-z0-9-]+)/i;
const STARTER_USE_CASE_IDS = [
  "snake-game",
  "one-page-pdf",
  "create-plan",
] as const;
const HOME_CONVERSATION_STARTERS = STARTER_USE_CASE_IDS.map((id) =>
  getHomeUseCaseById(id),
);
function getHomeUseCaseById(id: (typeof STARTER_USE_CASE_IDS)[number]) {
  const useCase = HOME_USE_CASES.find((item) => item.id === id);
  if (!useCase) throw Error(`Missing home use case: ${id}`);
  return useCase as HomeUseCase;
}
export function HomeConversationStarters({
  activeWorkspaceRoot,
  hostId,
  portalTarget,
}: HomeConversationStartersProps) {
  const appScopeStore = useAppScopeStore();
  const auth = useAuth() as {
    accountId?: string | null;
    userId?: string | null;
  };
  const intl = useIntl();
  const composerController = useComposerController() as ComposerController;
  const composerHasText = useComposerControllerSelector(
    composerController,
    (controller: ComposerController) => controller.hasText(),
  );
  const [hasHiddenStarters = false, setHasHiddenStarters] =
    useSharedObjectState<boolean>(HIDDEN_STARTERS_SHARED_OBJECT_KEY);
  const selectConversationStarter = useSelectConversationStarter({
    activeWorkspaceRoot,
    composerController,
    hostId,
  });
  const hasLoggedExposureRef = React.useRef(false);
  const shouldShowStarters = !composerHasText;
  React.useEffect(() => {
    if (
      hasHiddenStarters ||
      !shouldShowStarters ||
      hasLoggedExposureRef.current
    ) {
      return;
    }
    hasLoggedExposureRef.current = true;
    logProductEvent(appScopeStore, starterPromptsDisplayedEvent, {
      promptIds: HOME_CONVERSATION_STARTERS.map((starter) => starter.id).join(
        ",",
      ),
      promptTypes: HOME_CONVERSATION_STARTERS.map(
        () => HOME_CONVERSATION_STARTER_PROMPT_TYPE,
      ).join(","),
      promptCount: HOME_CONVERSATION_STARTERS.length,
    });
  }, [
    appScopeStore,
    auth.accountId,
    auth.userId,
    hasHiddenStarters,
    shouldShowStarters,
  ]);
  if (hasHiddenStarters) return null;
  const content = (
    <div
      className={clsx(
        "[@container_home-main-content_(max-height:399px)]:hidden [@container_home-main-content_(max-width:449px)]:hidden [container-type:inline-size] mx-auto flex w-full max-w-3xl flex-col gap-2 motion-safe:transition-opacity motion-safe:duration-200",
        shouldShowStarters ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      inert={!shouldShowStarters}
      aria-hidden={!shouldShowStarters}
    >
      <div className="flex items-center justify-end">
        <Button
          className="focus-visible:outline-token-focus mt-0.5 text-token-description-foreground transition-colors hover:text-token-foreground focus-visible:outline focus-visible:outline-offset-2"
          aria-label={intl.formatMessage({
            id: "home.conversationStarters.hide",
            defaultMessage: "Hide conversation starters",
            description:
              "Aria label for permanently hiding the home page conversation starters",
          })}
          color="ghost"
          size="icon"
          onClick={() => {
            setHasHiddenStarters(true);
          }}
        >
          <XIcon className="icon-xs" />
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {HOME_CONVERSATION_STARTERS.map((starter, promptIndex) => {
          const prompt = intl.formatMessage(starter.promptMessage);
          return (
            <ConversationStarterCard
              key={starter.id}
              icon={<ConversationStarterIcon name={starter.iconName} />}
              mode={starter.mode}
              initialCollaborationMode={starter.initialCollaborationMode}
              onSelect={(selectedPrompt, mode, initialCollaborationMode) => {
                logProductEvent(appScopeStore, starterPromptSelectedEvent, {
                  promptId: starter.id,
                  promptIndex,
                  promptType: HOME_CONVERSATION_STARTER_PROMPT_TYPE,
                  mode,
                });
                selectConversationStarter(
                  selectedPrompt,
                  mode as HomeComposerSubmitMode,
                  starter.skillName,
                  typeof initialCollaborationMode === "string"
                    ? initialCollaborationMode
                    : null,
                );
              }}
              prompt={prompt}
            />
          );
        })}
      </div>
    </div>
  );
  return portalTarget ? createPortal(content, portalTarget) : content;
}
function useSelectConversationStarter({
  activeWorkspaceRoot,
  composerController,
  hostId,
}: {
  activeWorkspaceRoot: string | null;
  composerController: ComposerController;
  hostId: string;
}) {
  const setSubmitMode = useHomeComposerSubmitModeController({
    activeWorkspaceRoot,
    hostId,
  });
  const { setSelectedMode } = useCollaborationMode();
  const queryClient = useQueryClient() as QueryClientLike;
  const { ensureSkillByName, installSkill } = useRecommendedSkills({
    hostId,
    loadOnMount: false,
  });
  return React.useCallback(
    (
      prompt: string,
      submitMode: HomeComposerSubmitMode,
      configuredSkillName?: string | null,
      initialCollaborationMode?: string | null,
    ) => {
      setSubmitMode(submitMode);
      if (initialCollaborationMode) setSelectedMode(initialCollaborationMode);
      const inlineSkillMatch = prompt.match(STARTER_SKILL_PATTERN);
      const skillName = configuredSkillName ?? inlineSkillMatch?.[1] ?? null;
      const promptSkillToken =
        inlineSkillMatch?.[0] ??
        (configuredSkillName ? `$${configuredSkillName}` : null);
      composerController.setText(prompt);
      composerController.focus();
      if (
        activeWorkspaceRoot == null ||
        skillName == null ||
        promptSkillToken == null
      ) {
        return;
      }
      void replaceStarterSkillReference({
        activeWorkspaceRoot,
        composerController,
        ensureSkillByName,
        hostId,
        installSkill,
        prompt,
        promptSkillToken,
        queryClient,
        skillName,
      });
    },
    [
      activeWorkspaceRoot,
      composerController,
      ensureSkillByName,
      hostId,
      installSkill,
      queryClient,
      setSelectedMode,
      setSubmitMode,
    ],
  );
}
async function replaceStarterSkillReference({
  activeWorkspaceRoot,
  composerController,
  ensureSkillByName,
  hostId,
  installSkill,
  prompt,
  promptSkillToken,
  queryClient,
  skillName,
}: {
  activeWorkspaceRoot: string;
  composerController: ComposerController;
  ensureSkillByName(skillName: string): Promise<RecommendedSkill | null>;
  hostId: string;
  installSkill(options: {
    skill: RecommendedSkill;
  }): Promise<InstallRecommendedSkillResult>;
  prompt: string;
  promptSkillToken: string;
  queryClient: QueryClientLike;
  skillName: string;
}) {
  const listedSkills = await sendAppServerRequest<ListSkillsForHostResponse>(
    "list-skills-for-host",
    {
      hostId,
      cwds: [activeWorkspaceRoot],
    },
  );
  const installedSkill = findSkillByName(listedSkills, skillName);
  if (installedSkill) {
    replacePromptSkillToken({
      composerController,
      prompt,
      promptSkillToken,
      skillMention: formatSkillMention(installedSkill),
    });
    return;
  }
  const recommendedSkill = await ensureSkillByName(skillName);
  if (!recommendedSkill) return;
  const installResult = await installSkill({
    skill: recommendedSkill,
  });
  if (!installResult.success || installResult.destination == null) return;
  void refreshSkillsForHost({
    activeWorkspaceRoot,
    hostId,
    queryClient,
  });
  replacePromptSkillToken({
    composerController,
    prompt,
    promptSkillToken,
    skillMention: formatSkillMention({
      name: recommendedSkill.name,
      path: joinSkillMarkdownPath(installResult.destination),
    }),
  });
}
async function refreshSkillsForHost({
  activeWorkspaceRoot,
  hostId,
  queryClient,
}: {
  activeWorkspaceRoot: string;
  hostId: string;
  queryClient: QueryClientLike;
}) {
  await sendAppServerRequest("list-skills-for-host", {
    hostId,
    cwds: [activeWorkspaceRoot],
    forceReload: true,
  });
  await queryClient.invalidateQueries({
    queryKey: ["skills"],
  });
}
function replacePromptSkillToken({
  composerController,
  prompt,
  promptSkillToken,
  skillMention,
}: {
  composerController: ComposerController;
  prompt: string;
  promptSkillToken: string;
  skillMention: string;
}) {
  if (composerController.getText() !== prompt) return;
  const nextPrompt = prompt.replace(promptSkillToken, skillMention);
  if (composerController.setPromptText) {
    composerController.setPromptText(nextPrompt);
  } else {
    composerController.setText(nextPrompt);
  }
  composerController.focus();
}
function joinSkillMarkdownPath(destination: string) {
  return `${destination.replace(/[/\\]+$/, "")}/SKILL.md`;
}
