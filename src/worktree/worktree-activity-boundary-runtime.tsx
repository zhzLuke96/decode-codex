// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Worktree activity UI helpers shared through the onboarding boundary.
import type { ReactNode, SVGProps } from "react";
import clsx from "clsx";

import { ChatBubblesIcon } from "../icons/chat-bubbles-icon";
import { SettingsGearIcon } from "../icons/settings-gear-icon";

type CommandOutputBlockProps = {
  command?: string;
  footer?: ReactNode;
  isInProgress?: boolean;
  output?: string;
  surface?: "plain" | string;
};

type IconProps = SVGProps<SVGSVGElement>;

export function CommandOutputBlock({
  command,
  footer,
  isInProgress = false,
  output = "",
  surface = "plain",
}: CommandOutputBlockProps) {
  const hasCommand = command != null && command.trim().length > 0;
  return (
    <div
      className={clsx(
        "min-w-0",
        surface !== "plain" &&
          "rounded-md border border-token-border bg-token-bg-primary",
      )}
    >
      {hasCommand ? (
        <div className="border-b border-token-border-light px-3 py-2 font-mono text-xs text-token-text-secondary">
          {command}
        </div>
      ) : null}
      <pre
        className={clsx(
          "max-h-72 overflow-auto whitespace-pre-wrap break-words p-3 font-mono text-xs leading-5 text-token-text-secondary",
          isInProgress && "after:ml-0.5 after:content-['|']",
        )}
      >
        {output}
      </pre>
      {footer}
    </div>
  );
}

export function EnvironmentSetupIcon(props: IconProps) {
  return <SettingsGearIcon {...props} />;
}

export function ConversationActivityIcon(props: IconProps) {
  return <ChatBubblesIcon {...props} />;
}
