// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Prompt editor form for the scheduled-task (automation) editor, wired to the
// composer controller with @-mention and skill autocomplete.
import React, { type ReactElement } from "react";
import { useIntl } from "../vendor/react-intl";
import { classNames } from "../utils/class-names";
import { isAutomationDraftUsingDefaultCwd } from "./shared";
import {
  ComposerAnchoredOverlay,
  createPromptComposerController,
  handleComposerSuggestionEvent,
  LOCAL_HOST_ID,
  MentionAutocompletePanel,
  PromptComposerInput,
  SkillAutocompleteOverlay,
  subscribeComposerDocChanges,
  useConfiguredApps,
  useMentionAutocomplete,
  useNativeApps,
  usePluginAvailability,
  useSkillAutocomplete,
  useSkills,
  selectActivePlugins,
} from "../boundaries/automation-editor-deps.facade";

const PROMPT_BASE_CLASS_NAME =
  "text-token-input-foreground placeholder:text-token-input-placeholder-foreground w-full text-base outline-none";
const PROMPT_PROSEMIRROR_CLASSES = [
  "[&_.ProseMirror]:leading-relaxed",
  "extension:[&_.ProseMirror]:leading-normal",
  "[&_.ProseMirror]:px-0",
  "[&_.ProseMirror]:py-0",
];
const PROMPT_DEFAULT_CLASS_NAME = classNames(
  PROMPT_BASE_CLASS_NAME,
  "min-h-[16rem] max-h-[32rem]",
  ...PROMPT_PROSEMIRROR_CLASSES,
);
const PROMPT_COMPACT_CLASS_NAME = classNames(
  PROMPT_BASE_CLASS_NAME,
  "max-h-64",
  ...PROMPT_PROSEMIRROR_CLASSES,
);

export function initAutomationPromptFormChunk(): void {}

interface AutomationPromptDraft {
  prompt: string;
  cwds: string[];
  kind: string;
  [key: string]: unknown;
}

export interface AutomationPromptFormProps {
  draft: AutomationPromptDraft;
  setDraft: (
    update: (draft: AutomationPromptDraft) => AutomationPromptDraft,
  ) => void;
  roots: string[];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  formId?: string;
  disablePromptAutoFocus?: boolean;
  promptSize?: "default" | "compact";
}

function createAutomationPromptController() {
  return createPromptComposerController("", {
    defaultTextKind: "prompt",
    enableFileMentions: true,
    enableSelectedTextLinks: true,
    enableSkillMentions: true,
    enterBehavior: "newline",
    restoreMarkdownLinksAsTextLinks: true,
  });
}

export function AutomationPromptForm({
  draft,
  setDraft,
  roots,
  onSubmit,
  formId,
  disablePromptAutoFocus = false,
  promptSize = "default",
}: AutomationPromptFormProps): ReactElement {
  const intl = useIntl();
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const anchorRef = React.useRef<HTMLDivElement | null>(null);
  const [composerController] = React.useState(createAutomationPromptController);

  const usingDefaultCwd = isAutomationDraftUsingDefaultCwd(draft);
  const effectiveRoots =
    draft.cwds.length > 0 && !usingDefaultCwd ? draft.cwds : roots;

  const mentionAutocomplete = useMentionAutocomplete(composerController);
  const skillAutocomplete = useSkillAutocomplete(composerController);
  const apps = useConfiguredApps({ hostId: LOCAL_HOST_ID });
  const { availablePlugins } = usePluginAvailability(
    LOCAL_HOST_ID,
    effectiveRoots,
  );
  const activePlugins = selectActivePlugins(availablePlugins);
  const { nativeApps } = useNativeApps({ enabled: activePlugins != null });
  const { skills } = useSkills(effectiveRoots);

  React.useEffect(() => {
    composerController.syncMentionMetadata({
      skills,
      apps,
      plugins: availablePlugins,
      nativeApps,
    });
  }, [apps, availablePlugins, skills, nativeApps, composerController]);

  React.useEffect(() => {
    if (composerController.getText() !== draft.prompt) {
      composerController.setPromptText(draft.prompt);
    }
  }, [draft.prompt, composerController]);

  React.useEffect(
    () =>
      subscribeComposerDocChanges(composerController.view, () => {
        const nextPrompt = composerController.getText();
        setDraft((current) =>
          current.prompt === nextPrompt
            ? current
            : { ...current, prompt: nextPrompt },
        );
      }),
    [composerController, setDraft],
  );

  const submitForm = (): void => {
    formRef.current?.requestSubmit();
  };

  const promptClassName =
    promptSize === "compact"
      ? PROMPT_COMPACT_CLASS_NAME
      : PROMPT_DEFAULT_CLASS_NAME;
  const promptMinHeight = promptSize === "compact" ? "2rem" : "14rem";

  const promptAriaLabel = intl.formatMessage({
    id: "settings.automations.promptLabel",
    defaultMessage: "Prompt",
    description: "Label for automation prompt input",
  });
  const promptPlaceholder = intl.formatMessage({
    id: "settings.automations.promptPlaceholder",
    defaultMessage: "Add prompt e.g. look for crashes in $sentry",
    description: "Placeholder text for automations prompt input",
  });

  const mentionPanel = (
    <MentionAutocompletePanel
      hostId={LOCAL_HOST_ID}
      onAddContext={mentionAutocomplete.addMention}
      onRequestClose={mentionAutocomplete.closeAutocomplete}
      onUpdateSelectedMention={mentionAutocomplete.setSelectedMention}
      query={mentionAutocomplete.ui?.query ?? ""}
      roots={effectiveRoots}
      skillRoots={effectiveRoots}
      source={mentionAutocomplete.ui?.source ?? null}
    />
  );

  const mentionOverlay = (
    <ComposerAnchoredOverlay
      anchorRef={anchorRef}
      composerController={composerController}
      isActive={mentionAutocomplete.ui?.active ?? false}
      mentionUiState={mentionAutocomplete.ui}
      placement="bottom"
      portalRoot="body"
      zIndexClassName="z-[10000]"
    >
      {mentionPanel}
    </ComposerAnchoredOverlay>
  );

  const skillOverlay = (
    <SkillAutocompleteOverlay
      autocomplete={skillAutocomplete}
      roots={effectiveRoots}
      composerController={composerController}
      portalRoot="body"
      zIndexClassName="z-[10000]"
    />
  );

  const promptInput = (
    <PromptComposerInput
      className={promptClassName}
      composerController={composerController}
      ariaLabel={promptAriaLabel}
      minHeight={promptMinHeight}
      disableAutoFocus={disablePromptAutoFocus}
      placeholder={promptPlaceholder}
      onSuggestionHandler={(event: unknown) => {
        handleComposerSuggestionEvent(event, {
          onAtMention: mentionAutocomplete.handleMentionEvent,
          onSkillMention: skillAutocomplete.handleMentionEvent,
        });
      }}
      onSubmit={submitForm}
    />
  );

  return (
    <form
      id={formId}
      ref={formRef}
      className="flex flex-col gap-0"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div ref={anchorRef} className="relative">
            {mentionOverlay}
            {skillOverlay}
            {promptInput}
          </div>
        </div>
      </div>
    </form>
  );
}
