// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Toolbar button shared by the review git-action toolbar (commit / push / create
// PR / create branch). Shows the active workflow phase and a cancel affordance
// while a workflow is running, and collapses to icon-only in compact layouts.

import type { ComponentType, ReactNode, SVGProps } from "react";
import clsx from "clsx";
import { FormattedMessage } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { CancelGitActionButton } from "./cancel-git-action-button";
import {
  GitWorkflowPhaseLabel,
  type GitWorkflowPhase,
} from "./git-workflow-phase-label";
import { Tooltip } from "../boundaries/onboarding-commons-externals.facade";

const COMPACT_ICON_ONLY_CLASS_NAME =
  "[@container_review-header_(max-width:624px)]:aspect-square [@container_review-header_(max-width:624px)]:justify-center [@container_review-header_(max-width:624px)]:!px-0";
const COMPACT_LABEL_HIDDEN_CLASS_NAME =
  "hidden [@container_review-header_(min-width:625px)]:inline";

export interface GitActionToolbarButtonProps {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  ariaLabel: string;
  children: ReactNode;
  compact?: boolean;
  disabled?: boolean;
  loading?: boolean;
  phase?: GitWorkflowPhase | null;
  push?: boolean;
  tooltipContent?: ReactNode;
  onCancel?: () => void;
  onClick: () => void;
}

export function GitActionToolbarButton({
  Icon,
  ariaLabel,
  children,
  compact,
  disabled = false,
  loading = false,
  phase = null,
  push = false,
  tooltipContent,
  onCancel,
  onClick,
}: GitActionToolbarButtonProps) {
  const label =
    phase == null ? children : <GitWorkflowPhaseLabel phase={phase} />;
  const labelNode = (
    <span
      className={clsx(
        compact && COMPACT_LABEL_HIDDEN_CLASS_NAME,
        "min-w-0",
        push ? "shrink-0 whitespace-nowrap" : "truncate",
      )}
    >
      {label}
    </span>
  );

  const button =
    loading && onCancel != null ? (
      <CancelGitActionButton variant="toolbar" onCancel={onCancel}>
        {labelNode}
      </CancelGitActionButton>
    ) : (
      <Button
        aria-label={ariaLabel}
        className={clsx(
          "min-w-0 px-2 enabled:text-token-foreground",
          disabled && "!text-token-text-secondary",
          loading ? "gap-1" : "gap-0",
          compact && !loading ? COMPACT_ICON_ONLY_CLASS_NAME : null,
        )}
        color="outline"
        disabled={disabled && !loading}
        loading={loading}
        size="toolbar"
        onClick={onClick}
      >
        {loading ? null : <Icon className="icon-xs shrink-0" />}
        {labelNode}
      </Button>
    );

  const tooltip =
    tooltipContent ??
    (compact && loading && onCancel != null ? (
      <FormattedMessage
        id="localConversation.gitActions.cancel"
        defaultMessage="Cancel git action"
        description="Accessible label for canceling an active git action"
      />
    ) : compact ? (
      label
    ) : null);

  if (tooltip == null) {
    return button;
  }
  return (
    <Tooltip tooltipContent={tooltip} delayOpen={true}>
      <span className="min-w-0">{button}</span>
    </Tooltip>
  );
}
