// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Fallback UI rendered inside the embedded terminal panel when the xterm.js
// surface crashes, offering a button to reload the terminal.
import { FormattedMessage } from "../vendor/react-intl";
import { Button } from "../ui/button";

export type TerminalErrorFallbackProps = {
  onRetry: () => void;
};

export function TerminalErrorFallback({ onRetry }: TerminalErrorFallbackProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 bg-token-terminal-background px-6 py-8 text-center">
      <div className="flex max-w-md flex-col gap-1">
        <div className="text-sm font-medium text-token-foreground">
          <FormattedMessage
            id="terminal.error.title"
            defaultMessage="The terminal encountered an error"
            description="Title shown in the terminal panel when the embedded terminal crashes"
          />
        </div>
        <div className="text-sm text-token-description-foreground">
          <FormattedMessage
            id="terminal.error.description"
            defaultMessage="Try reloading the terminal to continue"
            description="Description shown in the terminal panel when the embedded terminal crashes"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button color="secondary" onClick={onRetry}>
          <FormattedMessage
            id="terminal.error.retry"
            defaultMessage="Reload"
            description="Button label that reloads rendering the terminal after a crash"
          />
        </Button>
      </div>
    </div>
  );
}
