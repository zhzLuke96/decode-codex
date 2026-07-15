// Restored from ref/webview/assets/app-initial~app-main~pets-settings~appearance-settings~general-settings-D0OOyiXs.js
// External-agent setup import progress dialog.
import { useState } from "react";
import {
  DialogBody,
  DialogHeader,
  DialogLayout,
  DialogSection,
} from "../../ui/dialog-layout";
import { SettingsControlRow } from "../../ui/settings-row";
import { SettingsSurface } from "../../utils/settings-surface";
import {
  dirnameExternalAgentConfigPath,
  joinExternalAgentConfigPath,
} from "../../utils/external-agent-config-paths";
import { ScrollToBottomButton } from "../../threads/scroll-to-bottom-button";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import type {
  ExternalAgentImportItem,
  ExternalAgentImportProgress,
} from "./types";

export type ExternalAgentImportProgressDialogProps = {
  appName: string;
  codexHome?: string | null;
  onClose: () => void;
  progress: ExternalAgentImportProgress | null;
};

export function ExternalAgentImportProgressDialog({
  appName,
  codexHome,
  onClose,
  progress,
}: ExternalAgentImportProgressDialogProps) {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const isRunning = progress?.status === "running";
  const handleOpenChange = (open: boolean) => {
    if (!open && !isRunning) onClose();
  };
  return (
    <DialogLayout
      open={progress != null}
      onOpenChange={handleOpenChange}
      shouldIgnoreClickOutside={isRunning}
      size="default"
    >
      <DialogBody className="relative max-h-[min(720px,calc(100vh-64px))] overflow-hidden p-0">
        <div
          className="vertical-scroll-fade-mask max-h-[min(720px,calc(100vh-64px))] overflow-y-auto px-6 pt-5 pb-8"
          onScroll={(event) => {
            const element = event.currentTarget;
            setShowScrollButton(
              element.scrollHeight - element.scrollTop - element.clientHeight >
                8,
            );
          }}
        >
          <DialogSection className="gap-0">
            <DialogHeader
              title={getImportProgressTitle(progress)}
              subtitle={getImportProgressSubtitle(progress, appName)}
            />
          </DialogSection>
          {progress?.items.length ? (
            <DialogSection className="min-h-0 gap-3 pt-5">
              <ExternalAgentImportProgressItems
                codexHome={codexHome}
                items={progress.items}
                status={progress.status}
              />
            </DialogSection>
          ) : null}
        </div>
        <DialogSection className="pointer-events-none absolute right-0 bottom-0 left-0 h-0 pt-0">
          <ScrollToBottomButton
            className="pointer-events-auto bottom-10"
            label="Scroll to bottom"
            show={showScrollButton}
            onClick={() => {
              const scrollHost = document.querySelector<HTMLElement>(
                ".vertical-scroll-fade-mask",
              );
              scrollHost?.scrollTo({
                behavior: "smooth",
                top: scrollHost.scrollHeight,
              });
            }}
          />
        </DialogSection>
      </DialogBody>
    </DialogLayout>
  );
}

function ExternalAgentImportProgressItems({
  codexHome,
  items,
  status,
}: {
  codexHome?: string | null;
  items: readonly ExternalAgentImportItem[];
  status: ExternalAgentImportProgress["status"];
}) {
  return (
    <SettingsSurface>
      {items.map((item) => (
        <SettingsControlRow
          key={`${item.itemType}:${item.cwd ?? ""}:${item.description}`}
          label={<ImportItemLabel item={item} />}
          description={formatImportedItemDescription(item, codexHome, status)}
          control={<ImportStatusDot status={status} />}
        />
      ))}
    </SettingsSurface>
  );
}

function ImportItemLabel({ item }: { item: ExternalAgentImportItem }) {
  const intl = useIntl();
  return <>{getImportItemTypeLabel(intl, item)}</>;
}

function getImportItemTypeLabel(
  intl: ReturnType<typeof useIntl>,
  item: ExternalAgentImportItem,
): string {
  const labels: Record<ExternalAgentImportItem["itemType"], string> = {
    AGENTS_MD: "Instructions",
    COMMANDS: "Commands",
    CONFIG: "Settings",
    HOOKS: "Hooks",
    MCP_SERVER_CONFIG: "MCP servers",
    PLUGINS: "Plugins",
    SESSIONS: "Sessions",
    SKILLS: "Skills",
    SUBAGENTS: "Agents",
  };
  return intl.formatMessage({
    id: `externalAgentConfig.itemType.${item.itemType}`,
    defaultMessage: labels[item.itemType],
  });
}

function formatImportedItemDescription(
  item: ExternalAgentImportItem,
  codexHome: string | null | undefined,
  status: ExternalAgentImportProgress["status"],
): string {
  const description =
    status === "success"
      ? item.description
          .replace(/^Import /, "Imported ")
          .replace(/^Migrate /, "Migrated ")
      : item.description;
  if (!codexHome) return description;
  const parent = dirnameExternalAgentConfigPath(codexHome);
  return description
    .split(codexHome)
    .join("~/.codex")
    .split(joinExternalAgentConfigPath(parent, ".claude"))
    .join("~/.claude")
    .split(joinExternalAgentConfigPath(parent, ".agents"))
    .join("~/.agents");
}

function ImportStatusDot({
  status,
}: {
  status: ExternalAgentImportProgress["status"];
}) {
  const className =
    status === "success"
      ? "border-token-success/40 bg-token-success/15"
      : status === "error"
        ? "border-token-editor-error-foreground/40 bg-token-editor-error-foreground/15"
        : "border-token-foreground/30";
  return (
    <span
      className={`mt-1 flex h-4 w-4 shrink-0 rounded-full border ${className}`}
    />
  );
}

function getImportProgressTitle(progress: ExternalAgentImportProgress | null) {
  if (progress?.status === "success") {
    return (
      <FormattedMessage
        id="settings.agent.importSettings.progress.successTitle"
        defaultMessage="Imported external agent config"
        description="Title shown after external config import succeeds"
      />
    );
  }
  if (progress?.status === "error") {
    return (
      <FormattedMessage
        id="settings.agent.importSettings.progress.errorTitle"
        defaultMessage="Import failed"
        description="Title shown after external config import fails"
      />
    );
  }
  return (
    <FormattedMessage
      id="settings.agent.importSettings.progress.runningTitle"
      defaultMessage="Importing external agent config"
      description="Title shown while external config import is running"
    />
  );
}

function getImportProgressSubtitle(
  progress: ExternalAgentImportProgress | null,
  appName: string,
) {
  if (progress?.status === "success") {
    return (
      <FormattedMessage
        id="settings.agent.importSettings.progress.successSubtitle.appName"
        defaultMessage="Selected config was copied into {appName}"
        description="Subtitle shown after external config import succeeds"
        values={{ appName }}
      />
    );
  }
  if (progress?.status === "error") {
    return (
      <FormattedMessage
        id="settings.agent.importSettings.progress.errorSubtitle"
        defaultMessage="Some config could not be imported. Check the selected items and try again"
        description="Subtitle shown after external config import fails"
      />
    );
  }
  return (
    <FormattedMessage
      id="settings.agent.importSettings.progress.runningSubtitle"
      defaultMessage="Hang tight, this may take a few moments"
      description="Subtitle shown while external config import is running"
    />
  );
}
