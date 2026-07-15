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
import { InfiniteScrollPaginationSpinner } from "../../ui/infinite-scroll-pagination-spinner";
import { MoreMenuTrigger } from "../../ui/more-menu-trigger";
import { PageSearchInput } from "../../ui/page-search-input";
import { SettingsButtonRow } from "../../ui/settings-row";
import { SettingsEmptyState } from "../../utils/settings-empty-state";
import { SettingsSurface } from "../../utils/settings-surface";
import { PencilIcon } from "../../icons/pencil-icon";
import { PinFilledIcon } from "../../icons/pin-filled-icon";
import { PinIcon } from "../../icons/pin-icon";
import { TrashIcon } from "../../icons/trash-icon";
import { useDebouncedValue } from "../../utils/use-debounced-value";
import { deleteCloudEnvironment, setCloudEnvironmentPinned } from "./api";
import { useCloudEnvironmentSearch } from "./hooks";
import type { CloudEnvironment } from "./types";
import {
  getEnvironmentId,
  getEnvironmentLabel,
  getMachineLabel,
  getRepositoryName,
} from "./types";
type CloudEnvironmentsListProps = {
  onCreate: () => void;
  onDeleted?: () => void;
  onEdit: (environmentId: string) => void;
  onOpen: (environmentId: string) => void;
};
export function CloudEnvironmentsList({
  onCreate,
  onDeleted,
  onEdit,
  onOpen,
}: CloudEnvironmentsListProps): JSX.Element {
  const intl = useIntl();
  const [searchQuery, setSearchQuery] = React.useState("");
  const debouncedSearchQuery = useDebouncedValue(searchQuery, 250);
  const environmentsQuery = useCloudEnvironmentSearch(debouncedSearchQuery);
  const [pendingPinId, setPendingPinId] = React.useState<string | null>(null);
  const [pendingDeleteId, setPendingDeleteId] = React.useState<string | null>(
    null,
  );
  const togglePin = async (environment: CloudEnvironment) => {
    const environmentId = getEnvironmentId(environment);
    setPendingPinId(environmentId);
    try {
      await setCloudEnvironmentPinned({
        environmentId,
        etag: environment.etag,
        isPinned: !environment.is_pinned,
      });
      environmentsQuery.refetch();
    } finally {
      setPendingPinId(null);
    }
  };
  const deleteEnvironment = async (environment: CloudEnvironment) => {
    const environmentId = getEnvironmentId(environment);
    const confirmed = window.confirm(
      intl.formatMessage(
        {
          id: "settings.cloudEnvironments.list.delete.confirm",
          defaultMessage: 'Delete "{name}"?',
          description:
            "Confirmation prompt before deleting a cloud environment",
        },
        {
          name: getEnvironmentLabel(environment),
        },
      ),
    );
    if (!confirmed) return;
    setPendingDeleteId(environmentId);
    try {
      await deleteCloudEnvironment(environmentId);
      environmentsQuery.refetch();
      onDeleted?.();
    } finally {
      setPendingDeleteId(null);
    }
  };
  return (
    <div className="flex flex-col gap-3">
      <PageSearchInput
        id="cloud-environments-search"
        label={
          <FormattedMessage
            id="settings.cloudEnvironments.search.label"
            defaultMessage="Search environments"
            description="Accessible label for searching cloud environments"
          />
        }
        placeholder={intl.formatMessage({
          id: "settings.cloudEnvironments.search.placeholder",
          defaultMessage: "Search environments",
          description: "Placeholder for cloud environment search input",
        })}
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
      />

      <SettingsSurface>
        {environmentsQuery.isLoading ? (
          <SettingsEmptyState>
            <FormattedMessage
              id="settings.cloudEnvironments.list.loading"
              defaultMessage="Loading cloud environments..."
              description="Loading state for cloud environments list"
            />
          </SettingsEmptyState>
        ) : environmentsQuery.error ? (
          <SettingsEmptyState>
            <div className="flex flex-col items-center gap-2">
              <span>
                <FormattedMessage
                  id="settings.cloudEnvironments.list.error"
                  defaultMessage="Unable to load cloud environments"
                  description="Error state for cloud environments list"
                />
              </span>
              <Button color="secondary" onClick={environmentsQuery.refetch}>
                <FormattedMessage
                  id="settings.cloudEnvironments.list.retry"
                  defaultMessage="Retry"
                  description="Retry cloud environments loading button"
                />
              </Button>
            </div>
          </SettingsEmptyState>
        ) : environmentsQuery.items.length === 0 ? (
          <SettingsEmptyState>
            <div className="flex flex-col items-center gap-2">
              <span>
                {searchQuery ? (
                  <FormattedMessage
                    id="settings.cloudEnvironments.list.emptySearch"
                    defaultMessage="No cloud environments match this search."
                    description="Empty search state for cloud environments"
                  />
                ) : (
                  <FormattedMessage
                    id="settings.cloudEnvironments.list.empty"
                    defaultMessage="No cloud environments yet."
                    description="Empty state for cloud environments list"
                  />
                )}
              </span>
              {!searchQuery ? (
                <Button color="secondary" onClick={onCreate}>
                  <FormattedMessage
                    id="settings.cloudEnvironments.list.createEmpty"
                    defaultMessage="Create environment"
                    description="Create cloud environment button in empty state"
                  />
                </Button>
              ) : null}
            </div>
          </SettingsEmptyState>
        ) : (
          <>
            {environmentsQuery.items.map((environment) => (
              <EnvironmentRow
                key={getEnvironmentId(environment)}
                environment={environment}
                isDeleting={pendingDeleteId === getEnvironmentId(environment)}
                isPinning={pendingPinId === getEnvironmentId(environment)}
                onDelete={() => deleteEnvironment(environment)}
                onEdit={() => onEdit(getEnvironmentId(environment))}
                onOpen={() => onOpen(getEnvironmentId(environment))}
                onTogglePin={() => togglePin(environment)}
              />
            ))}
            <InfiniteScrollPaginationSpinner
              hasNextPage={environmentsQuery.hasMore}
              isFetchingNextPage={environmentsQuery.isLoadingMore}
              onLoadNextPage={environmentsQuery.loadMore}
            />
          </>
        )}
      </SettingsSurface>
    </div>
  );
}
function EnvironmentRow({
  environment,
  isDeleting,
  isPinning,
  onDelete,
  onEdit,
  onOpen,
  onTogglePin,
}: {
  environment: CloudEnvironment;
  isDeleting: boolean;
  isPinning: boolean;
  onDelete: () => void;
  onEdit: () => void;
  onOpen: () => void;
  onTogglePin: () => void;
}) {
  const repository =
    environment.repository ?? environment.github_repository ?? undefined;
  const subtitleParts = [
    repository ? getRepositoryName(repository) : null,
    environment.machine ? getMachineLabel(environment.machine) : null,
  ].filter(Boolean);
  return (
    <SettingsButtonRow
      disabled={isDeleting}
      label={
        <div className="flex items-center gap-2">
          {environment.is_pinned ? (
            <PinFilledIcon className="icon-xs text-token-text-secondary" />
          ) : null}
          <span className="truncate">{getEnvironmentLabel(environment)}</span>
        </div>
      }
      description={
        <div className="flex min-w-0 flex-wrap gap-x-2 gap-y-1">
          <span className="truncate">{subtitleParts.join(" · ")}</span>
          {environment.created_at ? (
            <span className="text-token-text-tertiary">
              <FormattedDate
                value={new Date(environment.created_at)}
                year="numeric"
                month="short"
                day="numeric"
              />
            </span>
          ) : null}
        </div>
      }
      actions={
        <div className="flex items-center gap-1">
          <Button
            color="ghost"
            loading={isPinning}
            size="icon"
            uniform
            aria-label={environment.is_pinned ? "Unpin" : "Pin"}
            onClick={(event) => {
              event.stopPropagation();
              onTogglePin();
            }}
          >
            {environment.is_pinned ? (
              <PinFilledIcon className="icon-xs" />
            ) : (
              <PinIcon className="icon-xs" />
            )}
          </Button>
          <Button
            color="ghost"
            size="icon"
            uniform
            aria-label="Edit"
            onClick={(event) => {
              event.stopPropagation();
              onEdit();
            }}
          >
            <PencilIcon className="icon-xs" />
          </Button>
          <DropdownMenu
            align="end"
            triggerButton={
              <MoreMenuTrigger label="Cloud environment actions" />
            }
          >
            <DropdownItem
              LeftIcon={PencilIcon}
              onSelect={(event) => {
                event.preventDefault();
                onEdit();
              }}
            >
              Edit
            </DropdownItem>
            <DropdownSeparator />
            <DropdownItem
              LeftIcon={TrashIcon}
              onSelect={(event) => {
                event.preventDefault();
                onDelete();
              }}
            >
              Delete
            </DropdownItem>
          </DropdownMenu>
        </div>
      }
      onClick={onOpen}
    />
  );
}
