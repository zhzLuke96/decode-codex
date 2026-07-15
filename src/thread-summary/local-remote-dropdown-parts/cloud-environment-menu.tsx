// Restored from ref/webview/assets/local-remote-dropdown-BZlMncy8.js
import type { ReactNode } from "react";
import type { CloudEnvironmentRecord } from "../../runtime/codex-api/types";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { CODEX_ENVIRONMENTS_URL } from "./constants";
import {
  getCloudEnvironmentId,
  useCloudEnvironmentOptions,
} from "./cloud-environment-options";
import type { ComposerMode } from "./types";

export function CloudEnvironmentSlashCommandContent({
  onClose,
  searchQuery,
  selectedEnvironmentId,
  setComposerMode,
  setSelectedEnvironment,
}: {
  onClose: () => void;
  searchQuery: string;
  selectedEnvironmentId: string | null;
  setComposerMode: (mode: ComposerMode) => void | Promise<void>;
  setSelectedEnvironment: (environment: CloudEnvironmentRecord) => void;
}): JSX.Element {
  let { environments, isError, isLoading } = useCloudEnvironmentOptions({
    enabled: true,
    searchQuery,
    selectedEnvironmentId,
  });

  if (isLoading) {
    return (
      <CloudEnvironmentMessage>
        <FormattedMessage
          id="composer.environmentSelector.loading"
          defaultMessage="Loading environments..."
          description="Loading state for the cloud environment dropdown"
        />
      </CloudEnvironmentMessage>
    );
  }
  if (isError) {
    return (
      <CloudEnvironmentMessage>
        <FormattedMessage
          id="composer.environmentSelector.error"
          defaultMessage="Error loading environments"
          description="Error state for the cloud environment dropdown"
        />
      </CloudEnvironmentMessage>
    );
  }
  if (environments.length === 0) {
    return (
      <CloudEnvironmentMessage>
        <FormattedMessage
          id="codex.environments.noEnvironmentsFound"
          defaultMessage="No environments found"
          description="Message shown when no Codex environments were found"
        />
      </CloudEnvironmentMessage>
    );
  }

  return (
    <div className="flex max-h-72 flex-col overflow-y-auto py-1 text-sm">
      {environments.slice(0, 100).map((environment) => {
        let environmentId = getCloudEnvironmentId(environment),
          isSelected =
            environmentId != null && environmentId === selectedEnvironmentId;
        return (
          <button
            key={environmentId ?? environment.label}
            type="button"
            className="flex min-w-0 w-full items-center justify-between gap-2 px-3 py-2 text-left text-token-foreground hover:bg-token-list-hover-background"
            onClick={() => {
              setSelectedEnvironment(environment);
              void setComposerMode("cloud");
              onClose();
            }}
          >
            <span className="min-w-0">
              <span className="block truncate">{environment.label}</span>
              {environment.repos?.length ? (
                <span className="block truncate text-xs text-token-text-secondary">
                  {environment.repos.join(", ")}
                </span>
              ) : null}
            </span>
            {isSelected ? (
              <span className="text-token-text-tertiary" aria-hidden={true}>
                *
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

export function CloudEnvironmentMenu({
  environments,
  isError,
  isLoading,
  onCreateNew,
  onSearchQueryChange,
  onSelectEnvironment,
  searchQuery,
  selectedEnvironmentId,
}: {
  environments: CloudEnvironmentRecord[];
  isError: boolean;
  isLoading: boolean;
  onCreateNew: () => void;
  onSearchQueryChange: (query: string) => void;
  onSelectEnvironment: (environment: CloudEnvironmentRecord) => void;
  searchQuery: string;
  selectedEnvironmentId: string | null;
}): JSX.Element {
  let intl = useIntl();
  return (
    <div className="absolute top-full left-0 z-50 mt-1 flex w-72 flex-col overflow-hidden rounded-md border border-token-border bg-token-bg-primary py-1 text-sm shadow-lg">
      <div className="border-b border-token-border px-3 py-2">
        <div className="mb-2 text-xs font-medium text-token-text-secondary">
          <FormattedMessage
            id="composer.environmentSelector.title"
            defaultMessage="Select environment"
            description="Title for the cloud environment dropdown"
          />
        </div>
        <input
          className="h-8 w-full rounded-md border border-token-border bg-token-bg-secondary px-2 text-sm text-token-foreground outline-none placeholder:text-token-text-tertiary"
          placeholder={intl.formatMessage({
            id: "composer.searchEnvironments",
            defaultMessage: "Search environments",
            description: "Search environments placeholder",
          })}
          value={searchQuery}
          onChange={(event) => onSearchQueryChange(event.currentTarget.value)}
        />
      </div>
      <div className="max-h-72 overflow-y-auto py-1">
        {isLoading ? (
          <CloudEnvironmentMessage>
            <FormattedMessage
              id="composer.environmentSelector.loading"
              defaultMessage="Loading environments..."
              description="Loading state for the cloud environment dropdown"
            />
          </CloudEnvironmentMessage>
        ) : isError ? (
          <CloudEnvironmentMessage>
            <FormattedMessage
              id="composer.environmentSelector.error"
              defaultMessage="Error loading environments"
              description="Error state for the cloud environment dropdown"
            />
          </CloudEnvironmentMessage>
        ) : environments.length > 0 ? (
          environments.map((environment) => {
            let environmentId = getCloudEnvironmentId(environment),
              isSelected =
                environmentId != null &&
                environmentId === selectedEnvironmentId;
            return (
              <button
                key={environmentId ?? environment.label}
                type="button"
                className="flex min-w-0 w-full items-center justify-between gap-2 px-3 py-2 text-left text-token-foreground hover:bg-token-list-hover-background"
                onClick={() => onSelectEnvironment(environment)}
              >
                <span className="min-w-0">
                  <span className="block truncate">{environment.label}</span>
                  {environment.repos?.length ? (
                    <span className="block truncate text-xs text-token-text-secondary">
                      {environment.repos.join(", ")}
                    </span>
                  ) : null}
                </span>
                {isSelected ? (
                  <span className="text-token-text-tertiary" aria-hidden={true}>
                    *
                  </span>
                ) : null}
              </button>
            );
          })
        ) : (
          <CloudEnvironmentMessage>
            <FormattedMessage
              id="codex.environments.noEnvironmentsFound"
              defaultMessage="No environments found"
              description="Message shown when no Codex environments were found"
            />
          </CloudEnvironmentMessage>
        )}
      </div>
      <div className="border-t border-token-border py-1">
        <a
          className="block px-3 py-2 text-sm text-token-foreground hover:bg-token-list-hover-background"
          href={CODEX_ENVIRONMENTS_URL}
          rel="noreferrer"
          target="_blank"
          onClick={onCreateNew}
        >
          <FormattedMessage
            id="composer.environmentSelector.createNew"
            defaultMessage="Create new"
            description="CTA to create a new Codex environment"
          />
        </a>
      </div>
    </div>
  );
}

function CloudEnvironmentMessage({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div className="px-3 py-3 text-sm text-token-text-secondary">
      {children}
    </div>
  );
}
