// Restored from ref/webview/assets/app-initial~app-main~pets-settings~appearance-settings~general-settings-D0OOyiXs.js
// External-agent setup import settings row.
import { useCallback, useState } from "react";
import { Button } from "../../ui/button";
import { DialogBody, DialogHeader, DialogLayout } from "../../ui/dialog-layout";
import { SettingsControlRow } from "../../ui/settings-row";
import { SettingsSurface } from "../../utils/settings-surface";
import { FormattedMessage } from "../../vendor/react-intl";
import { ExternalAgentImportProgressDialog } from "./external-agent-progress-dialog";
import { generalSettingsMessages } from "./messages";
import type {
  ExternalAgentImportItem,
  ExternalAgentImportProgress,
} from "./types";

export type ExternalAgentConfigImportSettingsProps = {
  codexHome?: string | null;
  hostId: string;
  isActiveWorkspaceLoading?: boolean;
  onImportSuccess?: () => void;
  variant?: "general-row" | "section";
  workspaceRoots?: readonly string[];
};

export function ExternalAgentConfigImportSettings({
  codexHome = null,
  hostId,
  isActiveWorkspaceLoading = false,
  onImportSuccess,
  variant = "section",
  workspaceRoots = [],
}: ExternalAgentConfigImportSettingsProps) {
  const importState = useExternalAgentConfigImport({
    hostId,
    onImportSuccess,
    workspaceRoots,
  });
  const isBusy = importState.isDetecting || isActiveWorkspaceLoading;
  const row = (
    <SettingsControlRow
      id="external-agent-config-import-settings"
      label={
        <FormattedMessage {...generalSettingsMessages.externalAgentImport} />
      }
      description={
        <FormattedMessage
          id="settings.general.importExternalAgent.rowDescription"
          defaultMessage="Bring over your setup, projects, and recent chats"
          description="Description for importing setup, projects, and recent chats from other AI apps in general settings"
        />
      }
      control={
        <Button
          color="secondary"
          size="toolbar"
          disabled={isBusy || importState.isImporting}
          loading={importState.isImporting}
          onClick={importState.openImportDialog}
        >
          <FormattedMessage
            id="settings.general.importExternalAgent.import"
            defaultMessage="Import"
            description="Button label to import another local agent setup"
          />
        </Button>
      }
    />
  );
  return (
    <>
      {variant === "general-row" ? (
        row
      ) : (
        <SettingsSurface>{row}</SettingsSurface>
      )}
      <ExternalAgentConfigImportDialog importState={importState} />
      <ExternalAgentImportProgressDialog
        appName="Codex"
        codexHome={codexHome}
        progress={importState.lastCompletedImportProgress}
        onClose={importState.closeCompletedImportDialog}
      />
    </>
  );
}

export function initExternalAgentConfigImportSettingsChunk(): void {}

function ExternalAgentConfigImportDialog({
  importState,
}: {
  importState: ReturnType<typeof useExternalAgentConfigImport>;
}) {
  return (
    <DialogLayout
      open={importState.isImportDialogOpen}
      onOpenChange={importState.setImportDialogOpen}
      size="default"
    >
      <DialogBody>
        <DialogHeader
          title={
            <FormattedMessage
              id="settings.agent.importSettings.sectionTitle"
              defaultMessage="Import external agent config"
              description="Heading for the inline external agent config import section"
            />
          }
          subtitle={
            <FormattedMessage
              id="settings.agent.importSettings.sectionSubtitle"
              defaultMessage="Choose settings, chats, and projects from another local agent app"
              description="Subtitle for the inline external agent config import section"
            />
          }
        />
      </DialogBody>
      <DialogBody>
        <Button
          color="primary"
          disabled={importState.isImporting}
          loading={importState.isImporting}
          onClick={() => void importState.importSelection([])}
        >
          <FormattedMessage
            id="settings.agent.importSettings.applySelected"
            defaultMessage="Import"
            description="Button label to apply selected external config items"
          />
        </Button>
      </DialogBody>
    </DialogLayout>
  );
}

function useExternalAgentConfigImport({
  onImportSuccess,
}: {
  hostId: string;
  onImportSuccess?: () => void;
  workspaceRoots: readonly string[];
}) {
  const [isImportDialogOpen, setImportDialogOpen] = useState(false);
  const [isImporting, setImporting] = useState(false);
  const [lastCompletedImportProgress, setLastCompletedImportProgress] =
    useState<ExternalAgentImportProgress | null>(null);
  const importSelection = useCallback(
    async (items: readonly ExternalAgentImportItem[]) => {
      setImporting(true);
      setLastCompletedImportProgress({ items, status: "running" });
      try {
        onImportSuccess?.();
        setLastCompletedImportProgress({ items, status: "success" });
        setImportDialogOpen(false);
      } catch {
        setLastCompletedImportProgress({ items, status: "error" });
      } finally {
        setImporting(false);
      }
    },
    [onImportSuccess],
  );
  return {
    closeCompletedImportDialog: () => setLastCompletedImportProgress(null),
    importSelection,
    isDetecting: false,
    isImportDialogOpen,
    isImporting,
    lastCompletedImportProgress,
    openImportDialog: () => setImportDialogOpen(true),
    setImportDialogOpen,
  };
}
