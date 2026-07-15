// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Inline composer used when editing a prior user message.

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { MentionMetadataSync } from "../composer/mention-metadata-sync";
import {
  ComposerEditor,
  MentionAutocompleteList,
  MentionAutocompletePopover,
  SkillAutocompletePopover,
  composerSettingKeys,
  createEditComposerController,
  dispatchComposerSuggestion,
  hasFileMentions,
  hasPromptSyntax,
  subscribeToComposerUpdates,
  useAnchoredPlacement,
  useMentionAutocomplete,
  useOnUnmount,
  useSettingValue,
  useSkillAutocomplete,
} from "../boundaries/user-message.facade";
import type { EditComposerController } from "../boundaries/user-message.facade";

export interface EditUserMessageFormProps {
  cwd: string | null;
  hostId?: string;
  initialMessage: string;
  onCancel: () => void;
  onDraftChange: (text: string) => void;
  onSubmit: (text: string) => Promise<void>;
}

export function EditUserMessageForm({
  cwd,
  hostId,
  initialMessage,
  onCancel,
  onDraftChange,
  onSubmit,
}: EditUserMessageFormProps) {
  const intl = useIntl();
  const enterBehavior = useSettingValue(
    composerSettingKeys.composerEnterBehavior,
  );
  const anchorRef = useRef<HTMLDivElement>(null);
  const [controller] = useState<EditComposerController>(() => {
    const isPrompt = hasPromptSyntax(initialMessage);
    const hasMentions = hasFileMentions(initialMessage);
    return createEditComposerController(initialMessage, {
      defaultTextKind: isPrompt || hasMentions ? "prompt" : "plain",
      enterBehavior,
      enableSelectedTextLinks: true,
      enableSlashCommands: false,
      restoreMarkdownLinksAsTextLinks: true,
      restorePathLinksAsFileMentions: isPrompt || !hasMentions,
    });
  });

  useEffect(() => {
    controller.setEnterBehavior(enterBehavior);
  }, [controller, enterBehavior]);

  useOnUnmount(
    useCallback(() => {
      if (!controller.view.isDestroyed) controller.destroy();
    }, [controller]),
  );

  const roots = useMemo(() => {
    if (cwd != null) return [cwd];
    return undefined;
  }, [cwd]);
  const mentionAutocomplete = useMentionAutocomplete(controller);
  const skillAutocomplete = useSkillAutocomplete(controller);
  const mentionPlacement = useAnchoredPlacement({
    anchorRef,
    isActive: mentionAutocomplete.ui?.active ?? false,
  });
  const skillPlacement = useAnchoredPlacement({
    anchorRef,
    isActive: skillAutocomplete.ui?.active ?? false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emitDraftChange = useCallback(() => {
    onDraftChange(controller.getText());
  }, [controller, onDraftChange]);

  useEffect(
    () => subscribeToComposerUpdates(controller.view, emitDraftChange),
    [controller, emitDraftChange],
  );

  const submit = async () => {
    if (!isSubmitting) {
      setIsSubmitting(true);
      try {
        await onSubmit(controller.getText().trim());
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form
      className="relative flex w-full flex-col rounded-3xl bg-token-foreground/5"
      onSubmit={(event) => {
        event.preventDefault();
        submit();
      }}
    >
      <div
        ref={anchorRef}
        className="relative z-10 flex min-h-0 flex-1 flex-col"
      >
        <MentionAutocompletePopover
          anchorRef={anchorRef}
          composerController={controller}
          isActive={mentionAutocomplete.ui?.active ?? false}
          mentionUiState={mentionAutocomplete.ui}
          placement={mentionPlacement}
        >
          <MentionAutocompleteList
            hostId={hostId}
            onAddContext={mentionAutocomplete.addMention}
            onRequestClose={mentionAutocomplete.closeAutocomplete}
            onUpdateSelectedMention={mentionAutocomplete.setSelectedMention}
            query={mentionAutocomplete.ui?.query ?? ""}
            roots={roots}
            skillRoots={roots}
            source={mentionAutocomplete.ui?.source ?? null}
          />
        </MentionAutocompletePopover>
        <SkillAutocompletePopover
          autocomplete={skillAutocomplete}
          cwd={cwd ?? undefined}
          roots={roots}
          hostId={hostId}
          composerController={controller}
          anchorRef={anchorRef}
          placement={skillPlacement}
        />
        <MentionMetadataSync
          composerController={controller}
          hostId={hostId ?? ""}
          roots={roots ?? []}
          shouldLoadPlugins={mentionAutocomplete.ui?.active === true}
        />
        <div className="mb-2 flex-grow overflow-y-auto px-3 pt-3">
          <ComposerEditor
            ariaLabel={intl.formatMessage({
              id: "codex.userMessage.editTextareaAriaLabel",
              defaultMessage: "Edit message",
              description:
                "Aria label for the editor used to edit the previous user message",
            })}
            className="text-base"
            composerController={controller}
            placeholder={intl.formatMessage({
              id: "codex.userMessage.editPlaceholder",
              defaultMessage: "Edit message",
              description:
                "Placeholder shown in the editor used to edit a previous user message",
            })}
            onSuggestionHandler={(event) => {
              dispatchComposerSuggestion(event, {
                onAtMention: mentionAutocomplete.handleMentionEvent,
                onSkillMention: skillAutocomplete.handleMentionEvent,
              });
            }}
            onSubmit={() => {
              submit();
            }}
          />
        </div>
        <div className="flex justify-end gap-1.5 px-3 pb-3">
          <Button
            color="outline"
            size="toolbar"
            disabled={isSubmitting}
            onClick={onCancel}
          >
            <FormattedMessage
              id="codex.userMessage.cancelEditMessage"
              defaultMessage="Cancel"
              description="Button label for canceling an edited user message"
            />
          </Button>
          <Button
            color="primary"
            size="toolbar"
            loading={isSubmitting}
            type="submit"
          >
            <FormattedMessage
              id="codex.userMessage.sendEditedMessage"
              defaultMessage="Send"
              description="Button label for submitting an edited user message"
            />
          </Button>
        </div>
      </div>
    </form>
  );
}
