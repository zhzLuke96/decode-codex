// Restored from ref/webview/assets/pull-request-fix-button-D5HTDG4t.js
// Pull request analytics helpers and the compact fix action button.
import type { ComponentProps, MouseEventHandler, ReactNode } from "react";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import {
  ___productLoggerT as logProductEvent,
  _productLoggerBn as pullRequestActionClickedEvent,
  _productLoggerHn as pullRequestSelectedEvent,
  _productLoggerVn as pullRequestCommentPostedEvent,
} from "../analytics/product-logger";
type ProductLoggerScope = Parameters<typeof logProductEvent>[0];
type PullRequestItemAnalytics = {
  state: string;
  isAuthor: boolean;
};
type PullRequestSurfaceAnalytics = {
  surface: string;
};
type PullRequestActionAnalytics = PullRequestSurfaceAnalytics & {
  action: string;
  item: PullRequestItemAnalytics;
};
type PullRequestSelectedAnalytics = PullRequestSurfaceAnalytics & {
  item: PullRequestItemAnalytics;
};
type PullRequestCommentAnalytics = PullRequestSurfaceAnalytics & {
  kind: string;
};
type PullRequestFixButtonProps = {
  children: ReactNode;
  color?: ComponentProps<typeof Button>["color"];
  disabled?: boolean;
  tooltipContent?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
export function trackPullRequestSelected(
  productLoggerScope: ProductLoggerScope,
  { item, surface }: PullRequestSelectedAnalytics,
) {
  logProductEvent(productLoggerScope, pullRequestSelectedEvent, {
    surface,
    state: item.state,
    isAuthor: item.isAuthor,
  });
}
export function trackPullRequestActionClicked(
  productLoggerScope: ProductLoggerScope,
  { action, item, surface }: PullRequestActionAnalytics,
) {
  logProductEvent(productLoggerScope, pullRequestActionClickedEvent, {
    action,
    surface,
    state: item.state,
    isAuthor: item.isAuthor,
  });
}
export function trackPullRequestCommentPosted(
  productLoggerScope: ProductLoggerScope,
  { kind, surface }: PullRequestCommentAnalytics,
) {
  logProductEvent(productLoggerScope, pullRequestCommentPostedEvent, {
    kind,
    surface,
  });
}
export function PullRequestFixButton({
  children,
  color,
  disabled = false,
  tooltipContent,
  onClick,
}: PullRequestFixButtonProps) {
  const buttonColor = disabled
    ? "ghost"
    : color === undefined
      ? "ghostMuted"
      : color;
  const disabledClassName = disabled ? "text-token-text-secondary" : undefined;
  const buttonElement = (
    <span className="-me-1.5 inline-flex">
      <Button
        className={disabledClassName}
        color={buttonColor}
        disabled={disabled}
        size="composerSm"
        onClick={onClick}
      >
        {children}
      </Button>
    </span>
  );
  if (!disabled) {
    return buttonElement;
  }
  return <Tooltip tooltipContent={tooltipContent}>{buttonElement}</Tooltip>;
}
