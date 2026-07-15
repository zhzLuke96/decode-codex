// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Sandbox-details banner for the scheduled-task (automation) editor: an info
// tooltip that explains how scheduled tasks inherit the user's default sandbox
// settings (read-only, workspace-write, or full-access danger mode).
import type { ReactElement, ReactNode } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Tooltip } from "../ui/tooltip-b";
import { InfoIcon } from "../icons/info-icon";
import { CODEX_RULES_DOCS_URL } from "../utils/links-bd-mmkun-d";

export interface AutomationSandboxBannerProps {
  isReadOnlySandbox: boolean;
  isDangerFullAccess: boolean;
}

export function initAutomationSandboxBannerChunk(): void {}

function renderRulesDocsLink(chunks: ReactNode): ReactElement {
  return (
    <a
      className="text-token-link underline-offset-2 hover:underline"
      href={CODEX_RULES_DOCS_URL}
      rel="noreferrer"
      target="_blank"
    >
      {Array.isArray(chunks) ? chunks.join("") : chunks}
    </a>
  );
}

function renderDangerRulesDocsLink(chunks: ReactNode): ReactElement {
  return (
    <a
      className="text-token-error-foreground underline underline-offset-2 hover:underline"
      href={CODEX_RULES_DOCS_URL}
      rel="noreferrer"
      target="_blank"
    >
      {Array.isArray(chunks) ? chunks.join("") : chunks}
    </a>
  );
}

export function AutomationSandboxBannerContent({
  isReadOnlySandbox,
  isDangerFullAccess,
}: AutomationSandboxBannerProps): ReactElement {
  if (isDangerFullAccess) {
    return (
      <div className="flex flex-col gap-1">
        <p className="text-token-error-foreground">
          <FormattedMessage
            id="settings.automations.banner.danger"
            defaultMessage="Scheduled tasks run with your default sandbox settings, which are currently set to Full Access. Running scheduled tasks in the background with Full Access carries elevated risk, as Codex may modify files, run commands, and access network without asking. Consider updating sandbox settings to workspace write, and using <rulesDocsLink>rules</rulesDocsLink> to selectively define which commands the agent can run with full access."
            description="Warning shown in the scheduled task editor when dangerous sandbox mode is enabled"
            values={{ rulesDocsLink: renderDangerRulesDocsLink }}
          />
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <p>
        {isReadOnlySandbox ? (
          <FormattedMessage
            id="settings.automations.banner.defaultHowTo.readOnly"
            defaultMessage="Scheduled tasks run with your default sandbox settings, which are set to read-only. Tool calls will fail if they require modifying files, accessing network, or working with apps on your computer. Consider updating sandbox settings to workspace write."
            description="Follow-up guidance shown in the scheduled task editor when default sandbox mode is read-only"
          />
        ) : (
          <FormattedMessage
            id="settings.automations.banner.defaultHowTo.default"
            defaultMessage="Scheduled tasks run with your default sandbox settings. Tool calls will fail if they require modifying files outside the workspace, accessing network, or working with apps on your computer. You can selectively allowlist commands to run outside the sandbox using <rulesDocsLink>rules</rulesDocsLink>."
            description="Follow-up guidance shown in the scheduled task editor when default sandbox mode is workspace write"
            values={{ rulesDocsLink: renderRulesDocsLink }}
          />
        )}
      </p>
    </div>
  );
}

export function AutomationSandboxBanner({
  isReadOnlySandbox,
  isDangerFullAccess,
}: AutomationSandboxBannerProps): ReactElement {
  const intl = useIntl();
  const tooltipLabel = intl.formatMessage({
    id: "settings.automations.banner.tooltipLabel",
    defaultMessage: "Scheduled task sandbox details",
    description:
      "Aria label for the scheduled task sandbox details tooltip trigger",
  });

  const trigger = (
    <button
      type="button"
      className="inline-flex shrink-0 items-center justify-center text-token-description-foreground hover:text-token-foreground"
      aria-label={tooltipLabel}
    >
      <InfoIcon className="icon-sm" />
    </button>
  );

  return (
    <Tooltip
      tooltipContent={
        <AutomationSandboxBannerContent
          isReadOnlySandbox={isReadOnlySandbox}
          isDangerFullAccess={isDangerFullAccess}
        />
      }
      side="top"
      align="center"
      interactive={true}
      tooltipClassName="max-w-md text-left"
    >
      {trigger}
    </Tooltip>
  );
}
