// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js
// Dropdown item for exporting a local file to Google Workspace.

import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import type { AppConnectApp } from "../../connectors/apps-queries";
import { useAppsList } from "../../connectors/apps-queries";
import { useProductLogger } from "../../analytics/use-product-logger";
import {
  GoogleDocsIcon,
  GoogleSheetsIcon,
  GoogleSlidesIcon,
} from "../../icons/known-app-icon";
import { Dropdown } from "../../ui/dropdown";
import { joinPath } from "../path-helpers-runtime";
import {
  analyticsClickAction,
  trackGoogleWorkspaceResourceClick,
} from "./analytics";
import { findGoogleDriveApp, isAccessibleGoogleDriveApp } from "./apps";
import { getGoogleWorkspaceExportTarget } from "./target";
import {
  extractGoogleDriveUploadUrl,
  GoogleDriveConnectorAuthError,
  uploadGoogleWorkspaceFile,
} from "./upload";
import { openGoogleWorkspaceUrl } from "./open-url";
import type {
  GoogleWorkspaceAnalyticsContext,
  GoogleWorkspaceResourceKind,
} from "./types";

function targetIcon(kind: GoogleWorkspaceResourceKind) {
  switch (kind) {
    case "document":
      return GoogleDocsIcon;
    case "spreadsheet":
      return GoogleSheetsIcon;
    case "presentation":
      return GoogleSlidesIcon;
  }
}

function TargetLabel({
  targetType,
}: {
  targetType: GoogleWorkspaceResourceKind;
}) {
  switch (targetType) {
    case "document":
      return (
        <FormattedMessage
          id="connectedApps.googleDrive.openInDocs"
          defaultMessage="Export to Google Docs"
          description="Dropdown item for exporting a file to Google Docs"
        />
      );
    case "spreadsheet":
      return (
        <FormattedMessage
          id="connectedApps.googleDrive.openInSheets"
          defaultMessage="Export to Google Sheets"
          description="Dropdown item for exporting a file to Google Sheets"
        />
      );
    case "presentation":
      return (
        <FormattedMessage
          id="connectedApps.googleDrive.openInSlides"
          defaultMessage="Export to Google Slides"
          description="Dropdown item for exporting a file to Google Slides"
        />
      );
  }
}

export function GoogleWorkspaceExportMenuItems({
  analyticsClickSource: clickSource,
  analyticsContext,
  cwd,
  handleConnectApp,
  hostId,
  isOpening,
  onCloseDropdown,
  onOpeningChange,
  path,
  title,
}: {
  analyticsClickSource: string;
  analyticsContext?: GoogleWorkspaceAnalyticsContext | null;
  cwd?: string | null;
  handleConnectApp: (app: AppConnectApp) => Promise<void>;
  hostId: string;
  isOpening: boolean;
  onCloseDropdown?: () => void;
  onOpeningChange: (opening: boolean) => void;
  path: string;
  title?: string | null;
}) {
  const intl = useIntl();
  const productLogger = useProductLogger();
  const { data: apps, hardRefetchAppsList } = useAppsList({ hostId });
  const targetType = getGoogleWorkspaceExportTarget(path);
  if (targetType == null) return null;
  const Icon = targetIcon(targetType);

  const openExport = async (intent: "alternate" | "default" = "default") => {
    if (isOpening) return;
    onOpeningChange(true);
    try {
      const absolutePath = cwd == null ? path : joinPath(cwd, path);
      trackGoogleWorkspaceResourceClick({
        clickAction:
          analyticsClickAction.CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_ACTION_UPLOAD_LOCAL_FILE,
        clickSource,
        context: {
          threadId: analyticsContext?.threadId ?? null,
          turnId: analyticsContext?.turnId ?? null,
          inputMessageId: analyticsContext?.inputMessageId ?? null,
          messageId: analyticsContext?.messageId ?? null,
        },
        productLogger,
        resourceKind: targetType,
      });
      if (!isAccessibleGoogleDriveApp(apps)) {
        const refreshedApps = await hardRefetchAppsList().catch(() => []);
        const googleDriveApp = findGoogleDriveApp(refreshedApps);
        if (
          !isAccessibleGoogleDriveApp(refreshedApps) &&
          googleDriveApp != null
        ) {
          await handleConnectApp(googleDriveApp);
          return;
        }
      }
      const response = await uploadGoogleWorkspaceFile({
        hostId,
        path: absolutePath,
        title,
      });
      const url = extractGoogleDriveUploadUrl(response);
      if (url != null) {
        openGoogleWorkspaceUrl(url, intent);
      }
    } catch (error) {
      if (
        error instanceof GoogleDriveConnectorAuthError ||
        findGoogleDriveApp(apps) != null
      ) {
        const app = findGoogleDriveApp(apps);
        if (app != null) {
          await handleConnectApp(app);
          return;
        }
      }
      throw error instanceof Error
        ? error
        : Error(
            intl.formatMessage({
              id: "connectedApps.googleDrive.openFailedGeneric",
              defaultMessage: "Could not open in Google Drive",
              description:
                "Fallback error thrown when exporting a local file to a connected Google app fails",
            }),
          );
    } finally {
      onOpeningChange(false);
    }
  };

  const runExport = (intent?: "alternate" | "default") => {
    void openExport(intent).catch(() => undefined);
  };

  return (
    <Dropdown.Item
      disabled={isOpening}
      onClickCapture={(event) => {
        if (event.metaKey || event.ctrlKey || event.button === 1) {
          event.preventDefault();
          event.stopPropagation();
          runExport("alternate");
          onCloseDropdown?.();
        }
      }}
      onSelect={() => {
        runExport();
        onCloseDropdown?.();
      }}
    >
      <Dropdown.ItemIcon>
        <Icon aria-hidden className="icon-sm" />
      </Dropdown.ItemIcon>
      <TargetLabel targetType={targetType} />
    </Dropdown.Item>
  );
}
