// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Stage all / Unstage all / Revert all bulk-action buttons for the current review
// diff section, wrapped in the floating action portal so they hover over the diff.

import type { MouseEvent } from "react";
import { FormattedMessage } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { UndoIcon } from "../icons/undo-icon";
import { MinusIcon } from "../icons/minus-icon";
import { PlusIcon } from "../icons/plus-icon";
import { FloatingActionPortal } from "./review-floating-action-pill";
import { reviewDiffFilterAtom } from "./review-diff-model";
import {
  useStore,
  useAtomValue,
  routeAtom,
  useFeatureGate,
  reviewFilterSupportsGitActions,
  reviewDiffActionsAvailableAtom,
  reviewPatchActionInFlightAtom,
  reviewRevertActionInFlightAtom,
  reviewDiffQueryAtom,
  reviewGitActionsSupportedAtom,
  requestReviewPatchAction,
} from "../boundaries/onboarding-commons-externals.facade";

const SECTION_ACTIONS_GATE = "2882842607";

interface ReviewDiffQuerySnapshot {
  isFetching: boolean;
  isError: boolean;
}

export function ReviewSectionActionButtons() {
  const store = useStore(routeAtom);
  const isSectionActionsGateEnabled = useFeatureGate(SECTION_ACTIONS_GATE);
  const diffFilter = useAtomValue<string>(reviewDiffFilterAtom);
  const hasActionableDiff = useAtomValue<boolean>(
    reviewDiffActionsAvailableAtom,
  );
  const isPatchActionInFlight = useAtomValue<boolean>(
    reviewPatchActionInFlightAtom,
  );
  const isRevertInFlight = useAtomValue<boolean>(
    reviewRevertActionInFlightAtom,
  );
  const diffQuery = useAtomValue<ReviewDiffQuerySnapshot>(reviewDiffQueryAtom);
  const isGitActionsSupported = useAtomValue<boolean>(
    reviewGitActionsSupportedAtom,
  );

  if (
    !(isSectionActionsGateEnabled && isGitActionsSupported) ||
    !reviewFilterSupportsGitActions(diffFilter) ||
    !hasActionableDiff
  ) {
    return null;
  }

  const isStaged = diffFilter === "staged";
  const isDisabled =
    isPatchActionInFlight ||
    isRevertInFlight ||
    diffQuery.isFetching ||
    diffQuery.isError;

  const revertButton = isStaged ? null : (
    <Button
      className="min-w-0 gap-2 text-token-description-foreground hover:!bg-transparent hover:text-token-foreground active:!bg-transparent"
      color="ghost"
      disabled={isDisabled}
      onClick={(event: MouseEvent) => {
        event.stopPropagation();
        requestReviewPatchAction(store, {
          action: "revert",
          path: "",
          scope: "section",
        });
      }}
    >
      <UndoIcon className="icon-2xs" />
      <span className="min-w-0 truncate">
        <FormattedMessage
          id="diff.actionButton.revertSectionLabel"
          defaultMessage="Revert all"
          description="Label for revert all changes button in the review action pill"
        />
      </span>
    </Button>
  );

  const handleStageToggle = (event: MouseEvent) => {
    event.stopPropagation();
    requestReviewPatchAction(store, {
      action: isStaged ? "unstage" : "stage",
      path: "",
      scope: "section",
    });
  };

  const stageButton = (
    <Button
      className="min-w-0 gap-2 text-token-description-foreground hover:!bg-transparent hover:text-token-foreground active:!bg-transparent"
      color="ghost"
      disabled={isDisabled}
      onClick={handleStageToggle}
    >
      {isStaged ? (
        <MinusIcon className="icon-2xs" />
      ) : (
        <PlusIcon className="icon-2xs" />
      )}
      <span className="min-w-0 truncate">
        {isStaged ? (
          <FormattedMessage
            id="diff.actionButton.unstageSectionLabel"
            defaultMessage="Unstage all"
            description="Label for unstage all changes button in the review action pill"
          />
        ) : (
          <FormattedMessage
            id="diff.actionButton.stageSectionLabel"
            defaultMessage="Stage all"
            description="Label for stage all changes button in the review action pill"
          />
        )}
      </span>
    </Button>
  );

  return (
    <div className="flex items-center gap-2">
      {revertButton}
      {stageButton}
    </div>
  );
}

interface ReviewSectionActionPillProps {
  expandedActionsPortalTarget?: HTMLElement | null;
}

export function ReviewSectionActionPill({
  expandedActionsPortalTarget,
}: ReviewSectionActionPillProps) {
  const isSectionActionsGateEnabled = useFeatureGate(SECTION_ACTIONS_GATE);
  const hasActionableDiff = useAtomValue<boolean>(
    reviewDiffActionsAvailableAtom,
  );
  const isGitActionsSupported = useAtomValue<boolean>(
    reviewGitActionsSupportedAtom,
  );

  if (
    !(isSectionActionsGateEnabled && isGitActionsSupported && hasActionableDiff)
  ) {
    return null;
  }

  return (
    <FloatingActionPortal
      expandedActionsPortalTarget={expandedActionsPortalTarget}
    >
      <ReviewSectionActionButtons />
    </FloatingActionPortal>
  );
}
