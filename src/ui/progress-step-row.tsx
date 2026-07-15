// Restored from ref/webview/assets/progress-step-row-CUPOU6py.js
// progress-step-row-CUPOU6py chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import clsx from "clsx";
import { CheckCircleIcon } from "../icons/check-circle-icon";
import { UnselectedCircleIcon } from "../icons/unselected-circle-icon";
import { XCircleIcon } from "../icons/x-circle-icon";
import { Spinner } from "../ui/spinner";
type ProgressStepStatus = "running" | "done" | "failed" | "pending";
type ProgressStepRowProps = {
  children?: ReactNode;
  compact?: boolean;
  status: ProgressStepStatus;
};
function ProgressStepRow({
  children,
  compact = false,
  status,
}: ProgressStepRowProps) {
  const labelClassName = clsx(
    compact
      ? "text-size-chat text-token-conversation-summary-leading"
      : "text-base leading-6 tracking-[-0.13px]",
    !compact && {
      "font-medium text-token-foreground": status === "running",
      "text-token-foreground": status === "done",
      "text-token-editor-error-foreground": status === "failed",
      "text-token-description-foreground": status === "pending",
    },
  );
  return (
    <div className={clsx("flex items-center", compact ? "gap-2" : "gap-3")}>
      <ProgressStepStatusIcon status={status} />
      <div className={labelClassName}>
        <span className="sr-only">
          <ProgressStepScreenReaderStatus status={status} />
        </span>
        {children}
      </div>
    </div>
  );
}
function ProgressStepStatusIcon({ status }: { status: ProgressStepStatus }) {
  let icon: ReactNode;
  switch (status) {
    case "running":
      icon = <Spinner className="icon-xs" />;
      break;
    case "done":
      icon = <CheckCircleIcon className="icon-xs" />;
      break;
    case "failed":
      icon = (
        <XCircleIcon className="icon-xs text-token-editor-error-foreground" />
      );
      break;
    case "pending":
      icon = <UnselectedCircleIcon className="icon-xs" />;
      break;
  }
  return (
    <span
      aria-hidden={true}
      className="flex h-4 w-4 shrink-0 items-center justify-center text-token-text-secondary"
    >
      {icon}
    </span>
  );
}
function ProgressStepScreenReaderStatus({
  status,
}: {
  status: ProgressStepStatus;
}) {
  switch (status) {
    case "running":
      return (
        <FormattedMessage
          id="progressStep.status.running"
          defaultMessage="In progress:"
          description="Screen reader status for a progress step that is currently running"
        />
      );
    case "done":
      return (
        <FormattedMessage
          id="progressStep.status.done"
          defaultMessage="Completed:"
          description="Screen reader status for a completed progress step"
        />
      );
    case "failed":
      return (
        <FormattedMessage
          id="progressStep.status.failed"
          defaultMessage="Failed:"
          description="Screen reader status for a failed progress step"
        />
      );
    case "pending":
      return (
        <FormattedMessage
          id="progressStep.status.pending"
          defaultMessage="Pending:"
          description="Screen reader status for a progress step that has not started"
        />
      );
  }
}
export { ProgressStepRow };
