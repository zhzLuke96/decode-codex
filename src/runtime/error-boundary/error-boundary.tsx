// Restored from ref/webview/assets/error-boundary-BOla93vo.js
// React ErrorBoundary and default full-screen fallback.
import React from "react";
import { vscodeApiH as vscodeLogger } from "../../boundaries/vscode-api";
import { InfoIcon } from "../../icons/info-icon";
import { Button } from "../../ui/button";
import { WithWindow } from "../../utils/with-window";
import { FormattedMessage } from "../../vendor/react-intl";
import { useNavigate } from "../../vendor/react-router";
import { AppUpdateRecoveryButton } from "./app-updates";
import { captureErrorBoundaryException } from "./sentry";
import type {
  ErrorBoundaryFallback,
  ErrorBoundaryFallbackArgs,
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from "./types";
const emptyErrorBoundaryState: ErrorBoundaryState = {
  componentStack: null,
  error: null,
  eventId: "",
};
export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = emptyErrorBoundaryState;
  componentDidUpdate(previousProps: ErrorBoundaryProps): void {
    if (
      this.state.error != null &&
      previousProps.resetKey !== this.props.resetKey
    ) {
      this.resetErrorBoundary();
    }
  }
  componentDidCatch(caughtValue: unknown, { componentStack = "" }): void {
    const error = isErrorLike(caughtValue)
      ? caughtValue
      : Error(String(caughtValue));
    if (isErrorLike(caughtValue)) {
      const reactStackError = Error(caughtValue.message);
      reactStackError.name = `React ErrorBoundary ${reactStackError.name}`;
      reactStackError.stack = componentStack;
      appendDeepCause(caughtValue, reactStackError);
    }
    const eventId = captureErrorBoundaryException(error, {
      boundaryName: this.props.name,
      componentStack,
    });
    this.props.onError?.(error, componentStack, eventId);
    try {
      vscodeLogger.error("error boundary", {
        safe: {
          name: this.props.name,
        },
        sensitive: {
          componentStack: componentStack ?? "",
          error: caughtValue,
        },
      });
    } catch {}
    this.setState({
      componentStack,
      error,
      eventId,
    });
  }
  resetErrorBoundary = (): void => {
    const { onReset } = this.props;
    const { componentStack, error, eventId } = this.state;
    onReset?.(error, componentStack ?? "", eventId);
    this.setState(emptyErrorBoundaryState);
  };
  render(): React.ReactNode {
    const { children, fallback } = this.props;
    const { componentStack, error, eventId } = this.state;
    const fallbackRenderer =
      fallback ??
      ((fallbackArgs: ErrorBoundaryFallbackArgs) => (
        <DefaultErrorFallback resetError={fallbackArgs.resetError} />
      ));
    if (error) {
      const fallbackNode = renderFallback(fallbackRenderer, {
        componentStack: componentStack ?? "",
        error,
        eventId,
        resetError: this.resetErrorBoundary,
      });
      return React.isValidElement(fallbackNode) ? fallbackNode : null;
    }
    return typeof children === "function" ? children() : children;
  }
}
function renderFallback(
  fallback: ErrorBoundaryFallback,
  fallbackArgs: ErrorBoundaryFallbackArgs,
): React.ReactNode {
  return typeof fallback === "function" ? fallback(fallbackArgs) : fallback;
}
function DefaultErrorFallback({ resetError }: { resetError: () => void }) {
  const navigate = useNavigate();
  const goHomeAndReset = () => {
    resetError();
    navigate("/");
  };
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <InfoIcon className="icon-lg text-token-error-foreground" />
      <FormattedMessage
        id="codex.errorBoundary.genericError"
        defaultMessage="Oops, an error has occurred"
        description="Generic error message shown when the extension webview fails"
      />
      <div className="flex flex-wrap items-center justify-center gap-2">
        <WithWindow electron={true}>
          <AppUpdateRecoveryButton />
        </WithWindow>
        <Button onClick={goHomeAndReset}>
          <FormattedMessage
            id="codex.errorBoundary.goHome"
            defaultMessage="Try again"
            description="Button label to navigate to the home page after an error"
          />
        </Button>
      </div>
    </div>
  );
}
function getObjectTag(value: unknown): string {
  return Object.prototype.toString.call(value);
}
function instanceOf(value: unknown, constructor: typeof Error): value is Error {
  try {
    return value instanceof constructor;
  } catch {
    return false;
  }
}
function isErrorLike(value: unknown): value is Error {
  switch (getObjectTag(value)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return true;
    default:
      return instanceOf(value, Error);
  }
}
function appendDeepCause(error: Error, cause: Error): void {
  const visited = new WeakMap<object, true>();
  function attachCause(current: Error, nextCause: Error): void {
    if (visited.has(current)) return;
    visited.set(current, true);
    if (current.cause instanceof Error) {
      attachCause(current.cause, nextCause);
      return;
    }
    current.cause = nextCause;
  }
  attachCause(error, cause);
}
