// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Thumbs up / thumbs down rating controls shown under an assistant turn.
// Selecting a rating logs an analytics event and opens a feedback dialog with
// rating-specific options (separate sets for artifact turns vs. regular turns).
// Choosing the "safety or legal concern" option hands off to the report dialog.
import { useState } from "react";
import type { MouseEvent, ReactElement, ReactNode } from "react";
import {
  FormattedMessage,
  defineMessages,
  useIntl,
} from "../vendor/react-intl";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import { FeedbackFormDialog } from "../ui/feedback-form-dialog";
import {
  ThumbRatingFilledIcon,
  ThumbRatingOutlineIcon,
} from "../icons/feedback-thumb-icons";
import { CodexThreadReportDialog } from "./codex-thread-report-dialog";
import {
  useAppScope,
  useAtomValue,
  useFeatureGate,
  appStoreScope,
  codexAnalyticsConfigAtom,
  openDialog,
  closeDialog,
  openExternalLinkFromEvent,
} from "../boundaries/onboarding-commons-externals.facade";

const DATA_USAGE_HELP_URL =
  "https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance";
const SAFETY_OR_LEGAL_CONCERN_OPTION_ID = "safety_or_legal_concern";
const INCLUDE_SAFETY_OPTION_GATE_ID = "584954669";

type ThumbsRating = "thumbs_up" | "thumbs_down";

interface FeedbackOption {
  id: string;
  label: ReactNode;
}

const feedbackMessages = defineMessages({
  wrongPresentationLength: {
    id: "turnRatingControls.artifactFeedback.wrongPresentationLength",
    defaultMessage: "Wrong presentation length",
    description:
      "Feedback option for an artifact with the wrong presentation length",
  },
  poorWriting: {
    id: "turnRatingControls.artifactFeedback.poorWriting",
    defaultMessage: "Poor writing",
    description: "Feedback option for an artifact with poor writing",
  },
  poorStyleFormatOrVisuals: {
    id: "turnRatingControls.artifactFeedback.poorStyleFormatOrVisuals",
    defaultMessage: "Poor style, format, or visuals",
    description:
      "Feedback option for an artifact with poor style, formatting, or visuals",
  },
  wrongTopicsOrSubtopics: {
    id: "turnRatingControls.artifactFeedback.wrongTopicsOrSubtopics",
    defaultMessage: "Wrong topics or subtopics",
    description:
      "Feedback option for an artifact with incorrect topic coverage",
  },
  didntFollowMyInstructions: {
    id: "turnRatingControls.artifactFeedback.didntFollowMyInstructions",
    defaultMessage: "Didn't follow my instructions",
    description: "Feedback option for an artifact that missed instructions",
  },
  didntFollowMyTemplate: {
    id: "turnRatingControls.artifactFeedback.didntFollowMyTemplate",
    defaultMessage: "Didn't follow my template",
    description: "Feedback option for an artifact that missed the template",
  },
  incorrectContent: {
    id: "turnRatingControls.artifactFeedback.incorrectContent",
    defaultMessage: "Incorrect content",
    description: "Feedback option for an artifact with incorrect content",
  },
  goodContent: {
    id: "turnRatingControls.artifactFeedback.goodContent",
    defaultMessage: "Good content",
    description: "Positive feedback option for artifact content",
  },
  goodWritingQuality: {
    id: "turnRatingControls.artifactFeedback.goodWritingQuality",
    defaultMessage: "Good writing quality",
    description: "Positive feedback option for artifact writing quality",
  },
  goodStyleFormatOrVisuals: {
    id: "turnRatingControls.artifactFeedback.goodStyleFormatOrVisuals",
    defaultMessage: "Good style, format, or visuals",
    description:
      "Positive feedback option for artifact style, formatting, or visuals",
  },
  followedMyInstructionsWell: {
    id: "turnRatingControls.artifactFeedback.followedMyInstructionsWell",
    defaultMessage: "Followed my instructions well",
    description: "Positive feedback option for following instructions",
  },
  generatedQuickly: {
    id: "turnRatingControls.artifactFeedback.generatedQuickly",
    defaultMessage: "Generated quickly",
    description: "Positive feedback option for fast artifact generation",
  },
  solvedMyTask: {
    id: "turnRatingControls.feedback.solvedMyTask",
    defaultMessage: "Solved my task",
    description: "Positive feedback option for a turn that solved the task",
  },
  followedMyInstructions: {
    id: "turnRatingControls.feedback.followedMyInstructions",
    defaultMessage: "Followed my instructions",
    description: "Positive feedback option for following instructions",
  },
  goodCodeOrOutputQuality: {
    id: "turnRatingControls.feedback.goodCodeOrOutputQuality",
    defaultMessage: "Good code / output quality",
    description: "Positive feedback option for good code or output quality",
  },
  fastAndEfficient: {
    id: "turnRatingControls.feedback.fastAndEfficient",
    defaultMessage: "Fast and efficient",
    description: "Positive feedback option for fast and efficient work",
  },
  usefulAutonomy: {
    id: "turnRatingControls.feedback.usefulAutonomy",
    defaultMessage: "Useful autonomy",
    description: "Positive feedback option for useful autonomous behavior",
  },
  incorrectOrIncomplete: {
    id: "turnRatingControls.feedback.incorrectOrIncomplete",
    defaultMessage: "Incorrect or incomplete",
    description: "Negative feedback option for incorrect or incomplete work",
  },
  offTrackOrWrongScope: {
    id: "turnRatingControls.feedback.offTrackOrWrongScope",
    defaultMessage: "Off track / wrong scope",
    description: "Negative feedback option for going off track or out of scope",
  },
  lostContext: {
    id: "turnRatingControls.feedback.lostContext",
    defaultMessage: "Lost context",
    description: "Negative feedback option for losing context",
  },
  slowOrBuggy: {
    id: "turnRatingControls.feedback.slowOrBuggy",
    defaultMessage: "Slow or buggy",
    description: "Negative feedback option for slow or buggy behavior",
  },
  safetyOrLegalConcern: {
    id: "turnRatingControls.feedback.safetyOrLegalConcern",
    defaultMessage: "Safety or legal concern",
    description:
      "Negative feedback option that opens a safety or legal report flow",
  },
  other: {
    id: "turnRatingControls.feedback.other",
    defaultMessage: "Other",
    description: "Feedback option for other feedback",
  },
});

const ARTIFACT_FEEDBACK_OPTIONS: Record<ThumbsRating, FeedbackOption[]> = {
  thumbs_down: [
    {
      id: "wrong_presentation_length",
      label: feedbackMessages.wrongPresentationLength,
    },
    { id: "poor_writing", label: feedbackMessages.poorWriting },
    {
      id: "poor_style_format_or_visuals",
      label: feedbackMessages.poorStyleFormatOrVisuals,
    },
    {
      id: "wrong_topics_or_subtopics",
      label: feedbackMessages.wrongTopicsOrSubtopics,
    },
    {
      id: "didnt_follow_my_instructions",
      label: feedbackMessages.didntFollowMyInstructions,
    },
    {
      id: "didnt_follow_my_template",
      label: feedbackMessages.didntFollowMyTemplate,
    },
    { id: "incorrect_content", label: feedbackMessages.incorrectContent },
    {
      id: SAFETY_OR_LEGAL_CONCERN_OPTION_ID,
      label: feedbackMessages.safetyOrLegalConcern,
    },
  ],
  thumbs_up: [
    { id: "good_content", label: feedbackMessages.goodContent },
    { id: "good_writing_quality", label: feedbackMessages.goodWritingQuality },
    {
      id: "good_style_format_or_visuals",
      label: feedbackMessages.goodStyleFormatOrVisuals,
    },
    {
      id: "followed_my_instructions_well",
      label: feedbackMessages.followedMyInstructionsWell,
    },
    { id: "generated_quickly", label: feedbackMessages.generatedQuickly },
  ],
};

const TURN_FEEDBACK_OPTIONS: Record<ThumbsRating, FeedbackOption[]> = {
  thumbs_down: [
    {
      id: "incorrect_or_incomplete",
      label: feedbackMessages.incorrectOrIncomplete,
    },
    {
      id: "didnt_follow_my_instructions",
      label: feedbackMessages.didntFollowMyInstructions,
    },
    {
      id: "off_track_or_wrong_scope",
      label: feedbackMessages.offTrackOrWrongScope,
    },
    { id: "lost_context", label: feedbackMessages.lostContext },
    { id: "slow_or_buggy", label: feedbackMessages.slowOrBuggy },
    {
      id: SAFETY_OR_LEGAL_CONCERN_OPTION_ID,
      label: feedbackMessages.safetyOrLegalConcern,
    },
    { id: "other", label: feedbackMessages.other },
  ],
  thumbs_up: [
    { id: "solved_my_task", label: feedbackMessages.solvedMyTask },
    {
      id: "followed_my_instructions",
      label: feedbackMessages.followedMyInstructions,
    },
    {
      id: "good_code_or_output_quality",
      label: feedbackMessages.goodCodeOrOutputQuality,
    },
    { id: "fast_and_efficient", label: feedbackMessages.fastAndEfficient },
    { id: "useful_autonomy", label: feedbackMessages.usefulAutonomy },
    { id: "other", label: feedbackMessages.other },
  ],
};

function excludeSafetyOption(option: FeedbackOption): boolean {
  return option.id !== SAFETY_OR_LEGAL_CONCERN_OPTION_ID;
}

function handleLegalLinkClick(event: MouseEvent<HTMLAnchorElement>): void {
  openExternalLinkFromEvent({
    event,
    href: DATA_USAGE_HELP_URL,
    initiator: "open_in_browser_bridge",
  });
}

function FeedbackLegalNoticeLink(children: ReactNode): ReactElement {
  return (
    <a
      className="underline underline-offset-2"
      href={DATA_USAGE_HELP_URL}
      rel="noreferrer"
      target="_blank"
      onClick={handleLegalLinkClick}
    >
      {children}
    </a>
  );
}

interface RatingButtonProps {
  rating: ThumbsRating;
  selectedRating: ThumbsRating | null;
  onClick: (rating: ThumbsRating) => void;
}

function RatingButton({
  rating,
  selectedRating,
  onClick,
}: RatingButtonProps): ReactElement {
  const intl = useIntl();
  const label =
    rating === "thumbs_up"
      ? intl.formatMessage({
          id: "assistantMessageContent.thumbsUp",
          defaultMessage: "Good response",
          description:
            "Tooltip and aria label for rating an assistant response positively",
        })
      : intl.formatMessage({
          id: "assistantMessageContent.thumbsDown",
          defaultMessage: "Bad response",
          description:
            "Tooltip and aria label for rating an assistant response negatively",
        });

  const isSelected = selectedRating === rating;
  const Icon = isSelected ? ThumbRatingFilledIcon : ThumbRatingOutlineIcon;
  const iconClassName =
    rating === "thumbs_down" ? "icon-xs rotate-180" : "icon-xs";

  const button = (
    <Button
      color="ghost"
      size="icon"
      aria-pressed={isSelected}
      onClick={(event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onClick(rating);
      }}
      aria-label={label}
    >
      <Icon className={iconClassName} />
    </Button>
  );

  return <Tooltip tooltipContent={label}>{button}</Tooltip>;
}

export interface TurnRatingControlsProps {
  hasArtifacts?: boolean;
  reportEntityType?: string;
  threadId: string;
  turnId: string;
}

export function TurnRatingControls({
  hasArtifacts = false,
  reportEntityType = "thread",
  threadId,
  turnId,
}: TurnRatingControlsProps): ReactElement {
  const store = useAppScope(appStoreScope);
  const [selectedRating, setSelectedRating] = useState<ThumbsRating | null>(
    null,
  );
  const analytics = useAtomValue(codexAnalyticsConfigAtom);
  const includeSafetyOption = useFeatureGate(INCLUDE_SAFETY_OPTION_GATE_ID);

  const openReportDialog = (details: string, rating: ThumbsRating) => {
    openDialog(store, CodexThreadReportDialog, {
      onBackToFeedback: () => {
        openFeedbackDialog(rating, details, SAFETY_OR_LEGAL_CONCERN_OPTION_ID);
      },
      reportEntityType,
      threadId,
    });
  };

  const openFeedbackDialog = (
    rating: ThumbsRating,
    details?: string,
    initialSelectedOptionId?: string,
  ) => {
    const initialDetails = details === undefined ? "" : details;
    const optionSet = hasArtifacts
      ? ARTIFACT_FEEDBACK_OPTIONS[rating]
      : TURN_FEEDBACK_OPTIONS[rating];
    const options = includeSafetyOption
      ? optionSet
      : optionSet.filter(excludeSafetyOption);

    openDialog(store, FeedbackFormDialog, {
      belowFreeformContent: (
        <div className="text-sm text-token-description-foreground">
          <FormattedMessage
            id="turnRatingControls.feedbackLegalNotice"
            defaultMessage="Your feedback can be used to improve Codex. <link>Learn more</link>."
            description="Legal notice shown below turn rating feedback details"
            values={{ link: FeedbackLegalNoticeLink }}
          />
        </div>
      ),
      freeformFeedbackRequired: false,
      initialDetails,
      initialSelectedOptionId,
      onOptionSelect: ({ details: optionDetails, selectedOptionId }) => {
        if (selectedOptionId === SAFETY_OR_LEGAL_CONCERN_OPTION_ID) {
          closeDialog(store, FeedbackFormDialog);
          openReportDialog(optionDetails, rating);
        }
      },
      onSubmit: ({ details: submitDetails, selectedOptionId }) => {
        if (selectedOptionId === SAFETY_OR_LEGAL_CONCERN_OPTION_ID) {
          openReportDialog(submitDetails, rating);
          return;
        }
        return analytics.submitCodexAnalyticsEvent?.({
          action: "submit_turn_feedback",
          eventKind: "action",
          threadId,
          turnId,
          metadata: {
            details: submitDetails,
            has_artifacts: hasArtifacts,
            selected_option: selectedOptionId,
          },
        });
      },
      options,
    });
  };

  const handleRate = (rating: ThumbsRating) => {
    if (selectedRating === rating) {
      setSelectedRating(null);
      return;
    }
    setSelectedRating(rating);
    analytics.submitCodexAnalyticsEvent?.({
      eventKind: "turn_rating",
      threadId,
      turnId,
      rating,
    });
    openFeedbackDialog(rating);
  };

  return (
    <>
      <RatingButton
        rating="thumbs_up"
        selectedRating={selectedRating}
        onClick={handleRate}
      />
      <RatingButton
        rating="thumbs_down"
        selectedRating={selectedRating}
        onClick={handleRate}
      />
    </>
  );
}
