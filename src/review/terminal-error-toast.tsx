// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Toast UI for surfacing terminal command failures from git actions: shows the
// failing command, its output, and an error message, with copy + close controls.

import type { ReactNode } from "react";
import { useIntl } from "../vendor/react-intl";
import {
  CloseIcon,
  CopyIcon,
  copyTextToClipboard,
} from "../boundaries/onboarding-commons-externals.facade";

export const TERMINAL_ERROR_TOAST_DURATION = 7;

interface TerminalExecOutput {
  command?: string | null;
  output?: string | null;
}

export interface TerminalErrorDetailsProps {
  command?: string | null;
  output?: string | null;
  message?: string | null;
}

export function TerminalErrorDetails({
  command,
  output,
  message,
}: TerminalErrorDetailsProps) {
  const outputText = output?.trim() ?? "";
  const messageText = message?.trim() ?? "";
  const hasCommand = command != null && command.length > 0;
  const hasOutput = outputText.length > 0;
  const hasMessage = messageText.length > 0 && messageText !== outputText;

  if (!hasCommand && !hasOutput && !hasMessage) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-token-terminal-border bg-token-terminal-background px-2.5 py-1.5 pr-8">
      {hasCommand ? (
        <div className="font-vscode-editor text-size-code-sm flex items-start gap-1.5 leading-5 text-token-description-foreground">
          <span className="shrink-0 select-none" aria-hidden="true">
            {"$"}
          </span>
          <pre className="m-0 whitespace-pre-wrap">{command}</pre>
        </div>
      ) : null}
      {hasOutput ? (
        <div className="max-h-20 overflow-auto">
          <pre className="font-vscode-editor text-size-code-sm m-0 whitespace-pre-wrap text-token-terminal-foreground">
            {outputText}
          </pre>
        </div>
      ) : null}
      {hasMessage ? (
        <div className="text-size-chat-sm text-token-input-validation-error-foreground/85">
          {messageText}
        </div>
      ) : null}
    </div>
  );
}

export interface TerminalErrorToastProps {
  title: ReactNode;
  message?: string | null;
  execOutput?: TerminalExecOutput | null;
  actions?: ReactNode;
  onClose?: () => void;
}

function isNotNull<TValue>(value: TValue | null): value is TValue {
  return value != null;
}

export function TerminalErrorToast({
  title,
  message,
  execOutput,
  actions,
  onClose,
}: TerminalErrorToastProps) {
  const intl = useIntl();
  const outputText = execOutput?.output?.trim() ?? "";
  const messageText = message?.trim() ?? "";
  const commandLine =
    execOutput?.command != null && execOutput.command.length > 0
      ? `$ ${execOutput.command}`
      : null;
  const outputLine = outputText.length > 0 ? outputText : null;
  const messageLine =
    messageText.length > 0 && messageText !== outputText ? messageText : null;
  const copyableLines = [commandLine, outputLine, messageLine].filter(
    isNotNull,
  );
  const copyText = copyableLines.join("\n");

  return (
    <div className="pointer-events-auto w-[min(390px,calc(100vw-32px))] overflow-hidden rounded-xl border border-token-border bg-token-dropdown-background text-start shadow-lg">
      <div className="flex items-center gap-2.5 px-3 py-2.5">
        <span
          className="h-2 w-2 shrink-0 rounded-full bg-token-input-validation-error-border"
          aria-hidden="true"
        />
        <div className="text-size-chat-sm min-w-0 flex-1 font-medium text-token-foreground">
          {title}
        </div>
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            className="flex shrink-0 cursor-interaction rounded-full opacity-50 transition-opacity hover:bg-token-button-secondary-hover-background/5 hover:opacity-80"
            aria-label={intl.formatMessage({
              id: "codex.alert.closeAriaLabel",
              defaultMessage: "Close",
              description:
                "Aria label for the close button on an alert/toast component",
            })}
          >
            <CloseIcon className="icon-xs" />
          </button>
        ) : null}
      </div>
      <div className="border-t border-token-border/60 px-3 pt-2 pb-2.5">
        <div className="relative">
          <TerminalErrorDetails
            command={execOutput?.command}
            output={execOutput?.output}
            message={message}
          />
          {copyText.length > 0 ? (
            <button
              type="button"
              className="absolute top-1 right-1 flex h-6 w-6 cursor-interaction items-center justify-center rounded-md text-token-description-foreground opacity-80 hover:bg-token-list-hover-background hover:opacity-100"
              aria-label={intl.formatMessage({
                id: "codex.terminalToast.copyError",
                defaultMessage: "Copy error",
                description:
                  "Aria label for copying terminal error content from a toast",
              })}
              onClick={(event) => {
                copyTextToClipboard(copyText, event);
              }}
            >
              <CopyIcon className="icon-2xs" />
            </button>
          ) : null}
        </div>
        {actions ? (
          <div className="mt-2 flex items-center justify-end gap-2">
            {actions}
          </div>
        ) : null}
      </div>
    </div>
  );
}

interface ToastController {
  custom(options: {
    duration: number;
    content: (controls: { close: () => void }) => ReactNode;
  }): void;
}

export function showTerminalErrorToast({
  toaster,
  title,
  message,
  execOutput,
}: {
  toaster: ToastController;
  title: ReactNode;
  message?: string | null;
  execOutput?: TerminalExecOutput | null;
}): void {
  toaster.custom({
    duration: TERMINAL_ERROR_TOAST_DURATION,
    content: ({ close }) => (
      <TerminalErrorToast
        title={title}
        message={message}
        execOutput={execOutput}
        onClose={close}
      />
    ),
  });
}
