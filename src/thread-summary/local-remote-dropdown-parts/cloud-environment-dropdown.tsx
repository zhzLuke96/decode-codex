// Restored from ref/webview/assets/local-remote-dropdown-BZlMncy8.js
import React from "react";
import { appScopeO as useAppScopeStore } from "../../boundaries/app-scope";
import { selectedEnvironmentSignal } from "../../composer/composer-view-state";
import type { ScopeStore } from "../../composer/composer-view-state/types";
import { composerPromptScope } from "../../composer/prompt-text";
import { useGitRootQuery } from "../../github/git-root-query";
import { useCodexCloudAccess } from "../../remote/local-remote-selection";
import { useScopedValue, useSignalValue } from "../../runtime/app-scope-hooks";
import {
  conversationCwdSignal,
  conversationHostIdSignal,
} from "../../runtime/conversation-state-runtime";
import type { CloudEnvironmentRecord } from "../../runtime/codex-api/types";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { CloudEnvironmentMenu } from "./cloud-environment-menu";
import {
  getCloudEnvironmentId,
  useCloudEnvironmentOptions,
} from "./cloud-environment-options";
import { LOCAL_REMOTE_DROPDOWN_SOURCE } from "./constants";
import type { CloudEnvironmentDropdownProps } from "./types";

export function CloudEnvironmentDropdown({
  composerMode,
  conversationId,
  disabled = false,
  onOpenChange,
  side: _side,
  setComposerMode,
}: CloudEnvironmentDropdownProps): JSX.Element | null {
  let intl = useIntl(),
    composerScopeStore = useAppScopeStore(composerPromptScope) as ScopeStore,
    conversationCwd = useScopedValue<string | null | undefined>(
      conversationCwdSignal,
      conversationId,
    ),
    conversationHostId =
      useScopedValue<string | null | undefined>(
        conversationHostIdSignal,
        conversationId,
      ) ?? "local",
    { access: cloudAccess } = useCodexCloudAccess(),
    { gitRoot } = useGitRootQuery(conversationCwd, {
      enabled: composerMode === "cloud",
      hostId: conversationHostId,
      source: LOCAL_REMOTE_DROPDOWN_SOURCE,
    }),
    selectedEnvironment =
      useSignalValue<CloudEnvironmentRecord | null>(
        selectedEnvironmentSignal,
      ) ?? null,
    [isOpen, setIsOpen] = React.useState(false),
    [searchQuery, setSearchQuery] = React.useState(""),
    shouldQuery = isOpen && composerMode === "cloud",
    selectedEnvironmentId = getCloudEnvironmentId(selectedEnvironment);

  let { environments, isError, isLoading } = useCloudEnvironmentOptions({
      enabled: shouldQuery,
      searchQuery,
      selectedEnvironmentId,
    }),
    selectedEnvironmentLabel =
      selectedEnvironment == null ? (
        <FormattedMessage
          id="composer.mode.remote.selectEnvironment"
          defaultMessage="Select environment"
          description="Remote mode label when no environment is selected"
        />
      ) : (
        selectedEnvironment.label
      );

  let updateOpen = (nextOpen: boolean) => {
    if (disabled && nextOpen) return;
    setIsOpen(nextOpen);
    if (!nextOpen) setSearchQuery("");
    onOpenChange?.(nextOpen);
  };

  React.useEffect(() => {
    if (
      !shouldQuery ||
      selectedEnvironment != null ||
      environments.length === 0
    ) {
      return;
    }
    composerScopeStore.set(selectedEnvironmentSignal, environments[0]);
  }, [composerScopeStore, environments, selectedEnvironment, shouldQuery]);

  if (
    composerMode !== "cloud" ||
    cloudAccess !== "enabled" ||
    gitRoot == null
  ) {
    return null;
  }

  return (
    <div className="relative inline-flex min-w-0">
      <button
        type="button"
        className="flex h-7 min-w-0 items-center gap-1 rounded-md border border-token-border bg-token-bg-secondary px-2 text-sm text-token-foreground disabled:cursor-not-allowed disabled:opacity-40"
        disabled={disabled}
        title={intl.formatMessage({
          id: "composer.environmentSelector.tooltip",
          defaultMessage: "Select a cloud environment",
          description: "Tooltip content for environment selector",
        })}
        onClick={() => updateOpen(!isOpen)}
      >
        <span className="min-w-0 max-w-40 truncate">
          {selectedEnvironmentLabel}
        </span>
        <span className="text-token-text-tertiary" aria-hidden={true}>
          v
        </span>
      </button>
      {isOpen ? (
        <CloudEnvironmentMenu
          environments={environments}
          isError={isError}
          isLoading={isLoading}
          searchQuery={searchQuery}
          selectedEnvironmentId={selectedEnvironmentId}
          onCreateNew={() => updateOpen(false)}
          onSearchQueryChange={setSearchQuery}
          onSelectEnvironment={(environment) => {
            composerScopeStore.set(selectedEnvironmentSignal, environment);
            void setComposerMode("cloud");
            updateOpen(false);
          }}
        />
      ) : null}
    </div>
  );
}
