// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Safety buffering notice shown while a turn is delayed by safety routing.
import type { ReactNode } from "react";
import clsx from "clsx";
import { FormattedMessage } from "../vendor/react-intl";
import { Button } from "../ui/button";

type SafetyBufferingContainerProps = {
  children?: ReactNode;
  isVisible?: boolean;
};

type SafetyBufferingPromptProps = {
  fasterModel?: string | null;
  isShimmering?: boolean;
  onRetry?: (model: string) => void;
  reasons?: string[] | null;
  threadId?: string | null;
  turnId?: string | null;
  useCases?: string[] | null;
};

export function SafetyBufferingContainer({
  children,
  isVisible = true,
}: SafetyBufferingContainerProps) {
  return (
    <div
      className={clsx(
        "transition-opacity duration-200",
        isVisible ? "opacity-100" : "opacity-60",
      )}
    >
      {children}
    </div>
  );
}

export function SafetyBufferingPrompt({
  fasterModel,
  isShimmering = false,
  onRetry,
  reasons,
  useCases,
}: SafetyBufferingPromptProps) {
  const details = [...(reasons ?? []), ...(useCases ?? [])].filter(
    (value) => value.trim().length > 0,
  );

  return (
    <div className="my-2 flex max-w-3xl flex-col gap-2 rounded-lg border border-token-border bg-token-bg-secondary px-3 py-2.5 text-size-chat text-token-text-secondary">
      <div className="flex items-center gap-2">
        <span
          className={clsx(
            "size-2 shrink-0 rounded-full bg-token-text-tertiary",
            isShimmering && "animate-pulse",
          )}
          aria-hidden={true}
        />
        <span className="font-medium text-token-foreground">
          <FormattedMessage
            id="safetyBuffering.prompt.title"
            defaultMessage="Reviewing this turn"
            description="Title shown while a turn is temporarily safety-buffered"
          />
        </span>
      </div>
      <div>
        <FormattedMessage
          id="safetyBuffering.prompt.body"
          defaultMessage="This response is taking a little longer while Codex checks the request."
          description="Body shown while a turn is temporarily safety-buffered"
        />
      </div>
      {details.length > 0 ? (
        <div className="text-size-chat-sm text-token-text-tertiary">
          {details.join(" | ")}
        </div>
      ) : null}
      {fasterModel != null && fasterModel.trim().length > 0 ? (
        <div>
          <Button
            size="small"
            variant="secondary"
            onClick={() => onRetry?.(fasterModel)}
          >
            <FormattedMessage
              id="safetyBuffering.prompt.retry"
              defaultMessage="Retry with faster model"
              description="Button label to retry a safety-buffered turn with a faster model"
            />
          </Button>
        </div>
      ) : null}
    </div>
  );
}
