// Restored from ref/webview/assets/cloud-environments-settings-page-Cx0Mfko0.js

import React from "react";
import {
  FormattedDate,
  FormattedMessage,
  useIntl,
} from "../../vendor/react-intl";
import { Button } from "../../ui/button";
import {
  DropdownItem,
  DropdownMenu,
  DropdownSeparator,
} from "../../ui/dropdown";
import { MoreMenuTrigger } from "../../ui/more-menu-trigger";
import { Spinner } from "../../ui/spinner";
import { SettingsKeyValueRow } from "../../ui/settings-row";
import { SettingsGroup } from "../../utils/settings-group";
import { SettingsSurface } from "../../utils/settings-surface";
import { PencilIcon } from "../../icons/pencil-icon";
import { PinFilledIcon } from "../../icons/pin-filled-icon";
import { PinIcon } from "../../icons/pin-icon";
import { RegenerateIcon } from "../../icons/regenerate-icon";
import { TrashIcon } from "../../icons/trash-icon";
import {
  deleteCloudEnvironment,
  resetCloudEnvironmentCache,
  setCloudEnvironmentPinned,
} from "./api";
import { useCloudEnvironmentDetails } from "./hooks";
import type { CloudEnvironment } from "./types";
import {
  getEnvironmentId,
  getEnvironmentLabel,
  getMachineLabel,
  getRepositoryName,
} from "./types";
type CloudEnvironmentDetailsProps = {
  environmentId: string;
  onDeleted: () => void;
  onEdit: () => void;
};
export function CloudEnvironmentDetails({
  environmentId,
  onDeleted,
  onEdit,
}: CloudEnvironmentDetailsProps): JSX.Element {
  const intl = useIntl();
  const query = useCloudEnvironmentDetails(environmentId);
  const [pendingAction, setPendingAction] = React.useState<string | null>(null);
  if (query.isLoading || query.data == null) {
    return (
      <SettingsSurface>
        <div className="flex items-center justify-center gap-2 px-4 py-8 text-sm text-token-text-secondary">
          <Spinner className="icon-xs" />
          <FormattedMessage
            id="settings.cloudEnvironments.details.loading"
            defaultMessage="Loading cloud environment..."
            description="Loading state for cloud environment details"
          />
        </div>
      </SettingsSurface>
    );
  }
  if (query.error) {
    return (
      <SettingsSurface>
        <div className="flex flex-col items-center gap-3 px-4 py-8 text-sm text-token-text-secondary">
          <FormattedMessage
            id="settings.cloudEnvironments.details.error"
            defaultMessage="Unable to load cloud environment"
            description="Error state for cloud environment details"
          />
          <Button color="secondary" onClick={query.refetch}>
            <FormattedMessage
              id="settings.cloudEnvironments.details.retry"
              defaultMessage="Retry"
              description="Retry loading cloud environment details"
            />
          </Button>
        </div>
      </SettingsSurface>
    );
  }
  const environment = query.data;
  const environmentName = getEnvironmentLabel(environment);
  const canWrite = environment.permissions?.can_write !== false;
  const canDelete = environment.permissions?.can_delete !== false;
  const withAction = async (action: string, run: () => Promise<void>) => {
    setPendingAction(action);
    try {
      await run();
    } finally {
      setPendingAction(null);
    }
  };
  const handleDelete = () =>
    withAction("delete", async () => {
      const confirmed = window.confirm(
        intl.formatMessage(
          {
            id: "settings.cloudEnvironments.details.delete.confirm",
            defaultMessage: 'Delete "{name}"?',
            description:
              "Confirmation prompt before deleting a cloud environment",
          },
          {
            name: environmentName,
          },
        ),
      );
      if (!confirmed) return;
      await deleteCloudEnvironment(getEnvironmentId(environment));
      onDeleted();
    });
  const handleResetCache = () =>
    withAction("reset-cache", async () => {
      const confirmed = window.confirm(
        intl.formatMessage(
          {
            id: "settings.cloudEnvironments.details.resetCache.confirm",
            defaultMessage: 'Reset cache for "{name}"?',
            description:
              "Confirmation prompt before resetting a cloud environment cache",
          },
          {
            name: environmentName,
          },
        ),
      );
      if (!confirmed) return;
      await resetCloudEnvironmentCache(getEnvironmentId(environment));
    });
  const handleTogglePin = () =>
    withAction("pin", async () => {
      await setCloudEnvironmentPinned({
        environmentId: getEnvironmentId(environment),
        etag: environment.etag,
        isPinned: !environment.is_pinned,
      });
      query.refetch();
    });
  return (
    <div className="flex flex-col gap-panel">
      <div className="flex items-center justify-end gap-2">
        <Button
          color="ghost"
          loading={pendingAction === "pin"}
          size="toolbar"
          onClick={handleTogglePin}
        >
          {environment.is_pinned ? (
            <PinFilledIcon className="icon-xs" />
          ) : (
            <PinIcon className="icon-xs" />
          )}
          {environment.is_pinned ? "Pinned" : "Pin"}
        </Button>
        {canWrite ? (
          <Button color="secondary" size="toolbar" onClick={onEdit}>
            <PencilIcon className="icon-xs" />
            <FormattedMessage
              id="settings.cloudEnvironments.details.edit"
              defaultMessage="Edit"
              description="Edit cloud environment button"
            />
          </Button>
        ) : null}
        <DropdownMenu
          align="end"
          triggerButton={<MoreMenuTrigger label="Cloud environment actions" />}
        >
          <DropdownItem
            LeftIcon={RegenerateIcon}
            onSelect={(event) => {
              event.preventDefault();
              void handleResetCache();
            }}
          >
            Reset cache
          </DropdownItem>
          {canDelete ? (
            <>
              <DropdownSeparator />
              <DropdownItem
                LeftIcon={TrashIcon}
                onSelect={(event) => {
                  event.preventDefault();
                  void handleDelete();
                }}
              >
                Delete
              </DropdownItem>
            </>
          ) : null}
        </DropdownMenu>
      </div>

      <EnvironmentSummary environment={environment} />
      <EnvironmentConfiguration environment={environment} />
    </div>
  );
}
function EnvironmentSummary({
  environment,
}: {
  environment: CloudEnvironment;
}) {
  const repository =
    environment.repository ?? environment.github_repository ?? undefined;
  return (
    <SettingsGroup>
      <SettingsGroup.Header
        title={
          <FormattedMessage
            id="settings.cloudEnvironments.details.summary.title"
            defaultMessage="Details"
            description="Cloud environment details summary section"
          />
        }
      />
      <SettingsGroup.Content>
        <SettingsSurface>
          <SettingsKeyValueRow label="Repository">
            {repository ? getRepositoryName(repository) : "Unknown"}
          </SettingsKeyValueRow>
          <SettingsKeyValueRow label="Machine">
            {environment.machine
              ? getMachineLabel(environment.machine)
              : "Unknown"}
          </SettingsKeyValueRow>
          <SettingsKeyValueRow label="Creator">
            {environment.creator?.display_name ??
              environment.creator?.name ??
              environment.creator?.email ??
              "Unknown"}
          </SettingsKeyValueRow>
          <SettingsKeyValueRow label="Created">
            {environment.created_at ? (
              <FormattedDate
                value={new Date(environment.created_at)}
                year="numeric"
                month="short"
                day="numeric"
              />
            ) : (
              "Unknown"
            )}
          </SettingsKeyValueRow>
          <SettingsKeyValueRow label="Sharing">
            {environment.share_setting ?? environment.sharing ?? "private"}
          </SettingsKeyValueRow>
        </SettingsSurface>
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}
function EnvironmentConfiguration({
  environment,
}: {
  environment: CloudEnvironment;
}) {
  const envVarCount = countObjectEntries(
    environment.environment_variables ?? environment.env_vars,
  );
  const secretCount = countObjectEntries(environment.secrets);
  return (
    <SettingsGroup>
      <SettingsGroup.Header
        title={
          <FormattedMessage
            id="settings.cloudEnvironments.details.configuration.title"
            defaultMessage="Configuration"
            description="Cloud environment configuration section"
          />
        }
      />
      <SettingsGroup.Content>
        <SettingsSurface>
          <SettingsKeyValueRow label="Workspace directory">
            {environment.workspace_directory || "Default"}
          </SettingsKeyValueRow>
          <SettingsKeyValueRow label="Network">
            {formatNetworkAccess(environment)}
          </SettingsKeyValueRow>
          <SettingsKeyValueRow label="Environment variables">
            {envVarCount}
          </SettingsKeyValueRow>
          <SettingsKeyValueRow label="Secrets">
            {secretCount}
          </SettingsKeyValueRow>
          <SettingsKeyValueRow label="Setup script">
            {environment.setup_script || environment.setup_commands
              ? "Configured"
              : "Not configured"}
          </SettingsKeyValueRow>
          <SettingsKeyValueRow label="Maintenance script">
            {environment.maintenance_script || environment.maintenance_commands
              ? "Configured"
              : "Not configured"}
          </SettingsKeyValueRow>
        </SettingsSurface>
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}
function countObjectEntries(value: unknown): number {
  if (Array.isArray(value)) return value.length;
  if (value != null && typeof value === "object")
    return Object.keys(value).length;
  return 0;
}
function formatNetworkAccess(environment: CloudEnvironment): string {
  const networkAccess = environment.network_access;
  const mode =
    typeof networkAccess === "string" ? networkAccess : networkAccess?.mode;
  if (mode === "custom") return "Custom";
  if (mode === "off") return "Off";
  return "On";
}
