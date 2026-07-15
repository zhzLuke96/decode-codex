// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Browser sidebar "Annotate" toggle: wraps the annotation-mode button with a
// dismissible coachmark and disabled/fallback tooltips, dispatching interaction-mode
// changes to the host.
import type { ReactNode } from "react";
import { useAtom } from "jotai";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Tooltip } from "../ui/tooltip-b";
import { AnnotationModeButton } from "../ui/annotation-mode-button";
import { vscodeApiF } from "../boundaries/vscode-api";
import { CoachmarkTooltip } from "./browser-coachmark-tooltip";
import {
  browserSidebarMode,
  type BrowserSidebarMode,
} from "./browser-sidebar-state";
import {
  browserSidebarCommentModeCoachmarkDismissedAtom,
  dismissBrowserSidebarCommentModeCoachmark,
} from "./browser-sidebar-comment-mode-coachmark-state";

const COACHMARK_TOOLTIP_LTR_CLASS =
  "-translate-y-[6px] before:!left-auto before:!top-4 before:!translate-y-0 before:!right-[-5px]";
const COACHMARK_TOOLTIP_RTL_CLASS =
  "-translate-y-[6px] before:!right-auto before:!top-4 before:!translate-y-0 before:!left-[-5px]";

function getDocumentDirection(): "ltr" | "rtl" {
  return typeof document === "undefined"
    ? "ltr"
    : window.getComputedStyle(document.documentElement).direction === "rtl"
      ? "rtl"
      : "ltr";
}

export type BrowserAnnotateButtonProps = {
  activeHoverSuppressed?: boolean;
  conversationId: string;
  direction?: "ltr" | "rtl";
  disabled?: boolean;
  disabledTooltipContent?: ReactNode;
  onActiveHoverSuppressedChange?: (isSuppressed: boolean) => void;
  onInteractionModeChange?: (mode: BrowserSidebarMode) => void;
  interactionMode: BrowserSidebarMode;
  shortcutLabel?: ReactNode;
  shouldShowCoachmark?: boolean;
};

export function BrowserAnnotateButton({
  activeHoverSuppressed,
  conversationId,
  direction,
  disabled = false,
  disabledTooltipContent,
  onActiveHoverSuppressedChange,
  onInteractionModeChange,
  interactionMode,
  shortcutLabel,
  shouldShowCoachmark,
}: BrowserAnnotateButtonProps) {
  const intl = useIntl();
  const [isCoachmarkDismissed] = useAtom(
    browserSidebarCommentModeCoachmarkDismissedAtom,
  );
  const isRtl = (direction ?? getDocumentDirection()) === "rtl";
  const isCommentMode = interactionMode === browserSidebarMode.COMMENT;
  const isCoachmarkOpen =
    (shouldShowCoachmark ?? false) && !disabled && !isCoachmarkDismissed;

  const annotateLabel = intl.formatMessage({
    id: "thread.browser.commentMode",
    defaultMessage: "Annotate",
    description: "Tooltip text for the browser annotate button",
  });
  const annotatingLabel = intl.formatMessage({
    id: "thread.browser.commentModeActive",
    defaultMessage: "Annotating",
    description: "Label shown on the browser annotate button when active",
  });
  const dismissLabel = intl.formatMessage({
    id: "thread.browser.commentModeCoachmarkDismiss",
    defaultMessage: "Dismiss",
    description:
      "Accessible label for dismissing the browser annotate coachmark",
  });

  const handleToggle = () => {
    const nextMode = isCommentMode
      ? browserSidebarMode.BROWSE
      : browserSidebarMode.COMMENT;
    if (onInteractionModeChange != null) {
      onInteractionModeChange(nextMode);
      return;
    }
    vscodeApiF.dispatchMessage("browser-sidebar-command", {
      conversationId,
      command: {
        type: "set-interaction-mode",
        interactionMode: nextMode,
      },
    });
  };

  const button = (
    <AnnotationModeButton
      active={isCommentMode}
      activeHoverSuppressed={activeHoverSuppressed}
      activeLabel={annotatingLabel}
      className={isCommentMode ? undefined : "!max-w-7 !min-w-7"}
      direction={direction}
      disabled={disabled}
      label={annotateLabel}
      onActiveHoverSuppressedChange={onActiveHoverSuppressedChange}
      onClick={handleToggle}
    />
  );

  if (disabled && disabledTooltipContent != null) {
    return (
      <Tooltip tooltipContent={disabledTooltipContent}>
        <span className="inline-flex">{button}</span>
      </Tooltip>
    );
  }

  return (
    <CoachmarkTooltip
      align="start"
      description={
        <FormattedMessage
          id="thread.browser.commentModeCoachmarkDescription"
          defaultMessage="Leave visual comments for Codex with a single click or drag to select an area"
          description="Body copy shown in the browser annotate coachmark"
        />
      }
      disabled={disabled}
      dismissLabel={dismissLabel}
      fallbackShortcut={isCommentMode ? null : shortcutLabel}
      fallbackTooltipContent={isCommentMode ? null : annotateLabel}
      onDismiss={dismissBrowserSidebarCommentModeCoachmark}
      open={isCoachmarkOpen}
      side={isRtl ? "right" : "left"}
      sideOffset={12}
      title={
        <FormattedMessage
          id="thread.browser.commentModeCoachmarkTitle"
          defaultMessage="Try Annotation Mode"
          description="Title shown in the browser annotate coachmark"
        />
      }
      tooltipClassName={
        isRtl ? COACHMARK_TOOLTIP_RTL_CLASS : COACHMARK_TOOLTIP_LTR_CLASS
      }
    >
      {button}
    </CoachmarkTooltip>
  );
}
