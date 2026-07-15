// Restored from ref/webview/assets/cloud-environments-settings-page-Cx0Mfko0.js

import React from "react";
import { useGateValue } from "../../vendor/statsig-current-runtime";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { useAuth } from "../../auth/use-auth";
import { isEnterpriseLikeSku, isSelfServeBusinessSku } from "../../utils/skus";
import { Button } from "../../ui/button";
import { Spinner } from "../../ui/spinner";
import { SettingsControlRow } from "../../ui/settings-row";
import { PageSearchInput } from "../../ui/page-search-input";
import { SettingsGroup } from "../../utils/settings-group";
import { SettingsSurface } from "../../utils/settings-surface";
import { SegmentedToggle } from "../../utils/segmented-toggle";
import { Toggle } from "../../utils/toggle";
import { useDebouncedValue } from "../../utils/use-debounced-value";
import {
  createBlankEnvironmentForm,
  createEnvironmentForm,
  createEnvironmentRequestBody,
  repositoryToFormPatch,
  updateEnvironmentRequestBody,
  validateEnvironmentForm,
} from "./form-model";
import {
  useCloudMachines,
  useGithubConnectors,
  useRepositorySearch,
} from "./hooks";
import type {
  CloudEnvironment,
  EnvironmentFormErrors,
  EnvironmentFormState,
  KeyValueEntry,
  SecretEntry,
} from "./types";
import {
  getConnectorId,
  getConnectorLabel,
  getMachineId,
  getMachineLabel,
  getRepositoryName,
} from "./types";
type EnvironmentEditorProps = {
  environment?: CloudEnvironment | null;
  mode: "create" | "edit";
  onCancel: () => void;
  onSubmit: (requestBody: Record<string, unknown>) => Promise<void>;
};
const textInputClassName =
  "w-full rounded-lg border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border";
const textAreaClassName =
  "min-h-20 w-full resize-y rounded-lg border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border";
export function EnvironmentEditor({
  environment,
  mode,
  onCancel,
  onSubmit,
}: EnvironmentEditorProps): JSX.Element {
  const intl = useIntl();
  const auth = useAuth();
  const showAuthtranslator = useGateValue("479474474");
  const showDockerInDocker = useGateValue("2664309699");
  const machinesQuery = useCloudMachines();
  const connectorsQuery = useGithubConnectors();
  const preferredConnectorId = getConnectorId(connectorsQuery.data?.[0] ?? {});
  const [form, setForm] = React.useState<EnvironmentFormState>(() =>
    environment
      ? createEnvironmentForm(environment, preferredConnectorId)
      : createBlankEnvironmentForm(preferredConnectorId),
  );
  const [errors, setErrors] = React.useState<EnvironmentFormErrors>({});
  const [isSaving, setIsSaving] = React.useState(false);
  const planAtLogin =
    (
      auth as {
        planAtLogin?: string;
        plan_at_login?: string;
        plan?: string;
      }
    ).planAtLogin ??
    (
      auth as {
        plan_at_login?: string;
      }
    ).plan_at_login ??
    (
      auth as {
        plan?: string;
      }
    ).plan;
  const canConfigureSharing =
    isSelfServeBusinessSku(planAtLogin) || isEnterpriseLikeSku(planAtLogin);
  React.useEffect(() => {
    if (!form.githubConnectorId && preferredConnectorId) {
      setForm((current) => ({
        ...current,
        githubConnectorId: preferredConnectorId,
      }));
    }
  }, [form.githubConnectorId, preferredConnectorId]);
  const updateForm = <Key extends keyof EnvironmentFormState>(
    key: Key,
    value: EnvironmentFormState[Key],
  ) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
    setErrors((current) => ({
      ...current,
      [key]: undefined,
    }));
  };
  const handleSubmit = async () => {
    const nextErrors = validateEnvironmentForm(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setIsSaving(true);
    try {
      await onSubmit(
        mode === "create"
          ? createEnvironmentRequestBody(form)
          : updateEnvironmentRequestBody(form),
      );
    } catch (error) {
      setErrors({
        form:
          error instanceof Error ? error.message : "Unable to save environment",
      });
    } finally {
      setIsSaving(false);
    }
  };
  return (
    <div className="flex flex-col gap-panel">
      {errors.form ? (
        <div className="rounded-lg border border-token-error-border bg-token-error-background px-3 py-2 text-sm text-token-error-foreground">
          {errors.form}
        </div>
      ) : null}

      <SettingsGroup>
        <SettingsGroup.Header
          title={
            <FormattedMessage
              id="settings.cloudEnvironments.editor.basic.title"
              defaultMessage="Environment"
              description="Section title for cloud environment basic settings"
            />
          }
        />
        <SettingsGroup.Content>
          <SettingsSurface>
            <SettingsControlRow
              label={
                <FormattedMessage
                  id="settings.cloudEnvironments.editor.name"
                  defaultMessage="Name"
                  description="Cloud environment name label"
                />
              }
              control={
                <FieldError error={errors.label}>
                  <input
                    className={textInputClassName}
                    value={form.label}
                    onChange={(event) =>
                      updateForm("label", event.target.value)
                    }
                  />
                </FieldError>
              }
            />
            <SettingsControlRow
              label={
                <FormattedMessage
                  id="settings.cloudEnvironments.editor.description"
                  defaultMessage="Description"
                  description="Cloud environment description label"
                />
              }
              control={
                <textarea
                  className={textAreaClassName}
                  value={form.description}
                  onChange={(event) =>
                    updateForm("description", event.target.value)
                  }
                />
              }
            />
            <SettingsControlRow
              label={
                <FormattedMessage
                  id="settings.cloudEnvironments.editor.repository"
                  defaultMessage="Repository"
                  description="Cloud environment repository label"
                />
              }
              description={errors.repositoryId}
              control={
                <RepositorySelector
                  connectorError={errors.githubConnectorId}
                  connectors={connectorsQuery.data ?? []}
                  isLoadingConnectors={connectorsQuery.isLoading}
                  form={form}
                  onChange={(patch) => {
                    setForm((current) => ({
                      ...current,
                      ...patch,
                      githubConnectorId:
                        patch.githubConnectorId ?? current.githubConnectorId,
                    }));
                    setErrors((current) => ({
                      ...current,
                      githubConnectorId: undefined,
                      repositoryId: undefined,
                    }));
                  }}
                />
              }
            />
            <SettingsControlRow
              label={
                <FormattedMessage
                  id="settings.cloudEnvironments.editor.machine"
                  defaultMessage="Machine"
                  description="Cloud environment machine label"
                />
              }
              description={errors.machineId}
              control={
                <select
                  className={textInputClassName}
                  value={form.machineId}
                  onChange={(event) =>
                    updateForm("machineId", event.target.value)
                  }
                >
                  <option value="">
                    {machinesQuery.isLoading
                      ? intl.formatMessage({
                          id: "settings.cloudEnvironments.editor.machines.loading",
                          defaultMessage: "Loading machines...",
                          description: "Placeholder while machines load",
                        })
                      : intl.formatMessage({
                          id: "settings.cloudEnvironments.editor.machines.empty",
                          defaultMessage: "Select a machine",
                          description: "Placeholder for machine select",
                        })}
                  </option>
                  {(machinesQuery.data ?? []).map((machine) => (
                    <option
                      key={getMachineId(machine)}
                      value={getMachineId(machine)}
                    >
                      {getMachineLabel(machine)}
                    </option>
                  ))}
                </select>
              }
            />
            <SettingsControlRow
              label={
                <FormattedMessage
                  id="settings.cloudEnvironments.editor.workspaceDirectory"
                  defaultMessage="Workspace directory"
                  description="Cloud environment workspace directory label"
                />
              }
              control={
                <input
                  className={textInputClassName}
                  placeholder="/workspace"
                  value={form.workspaceDirectory}
                  onChange={(event) =>
                    updateForm("workspaceDirectory", event.target.value)
                  }
                />
              }
            />
          </SettingsSurface>
        </SettingsGroup.Content>
      </SettingsGroup>

      <ScriptSection
        setupCommands={form.setupCommands}
        maintenanceCommands={form.maintenanceCommands}
        onSetupCommandsChange={(value) => updateForm("setupCommands", value)}
        onMaintenanceCommandsChange={(value) =>
          updateForm("maintenanceCommands", value)
        }
      />

      <SettingsGroup>
        <SettingsGroup.Header
          title={
            <FormattedMessage
              id="settings.cloudEnvironments.editor.runtime.title"
              defaultMessage="Runtime"
              description="Cloud environment runtime settings title"
            />
          }
        />
        <SettingsGroup.Content>
          <SettingsSurface>
            <SettingsControlRow
              label={
                <FormattedMessage
                  id="settings.cloudEnvironments.editor.automaticSetup"
                  defaultMessage="Automatic setup"
                  description="Cloud environment automatic setup toggle"
                />
              }
              control={
                <Toggle
                  ariaLabel={intl.formatMessage({
                    id: "settings.cloudEnvironments.editor.automaticSetup.aria",
                    defaultMessage: "Toggle automatic setup",
                    description: "Accessible label for automatic setup toggle",
                  })}
                  checked={form.automaticSetupEnabled}
                  onChange={(checked) =>
                    updateForm("automaticSetupEnabled", checked)
                  }
                />
              }
            />
            <SettingsControlRow
              label={
                <FormattedMessage
                  id="settings.cloudEnvironments.editor.cache"
                  defaultMessage="Post-setup cache"
                  description="Cloud environment post setup cache toggle"
                />
              }
              control={
                <Toggle
                  ariaLabel={intl.formatMessage({
                    id: "settings.cloudEnvironments.editor.cache.aria",
                    defaultMessage: "Toggle post-setup cache",
                    description: "Accessible label for post setup cache toggle",
                  })}
                  checked={form.postSetupCacheEnabled}
                  onChange={(checked) =>
                    updateForm("postSetupCacheEnabled", checked)
                  }
                />
              }
            />
            {showAuthtranslator ? (
              <SettingsControlRow
                label="Auth translator"
                control={
                  <Toggle
                    ariaLabel="Toggle auth translator"
                    checked={form.authtranslatorEnabled}
                    onChange={(checked) =>
                      updateForm("authtranslatorEnabled", checked)
                    }
                  />
                }
              />
            ) : null}
            {showDockerInDocker ? (
              <SettingsControlRow
                label="Docker in Docker"
                control={
                  <Toggle
                    ariaLabel="Toggle Docker in Docker"
                    checked={form.dockerInDockerEnabled}
                    onChange={(checked) =>
                      updateForm("dockerInDockerEnabled", checked)
                    }
                  />
                }
              />
            ) : null}
          </SettingsSurface>
        </SettingsGroup.Content>
      </SettingsGroup>

      <NetworkSection form={form} updateForm={updateForm} />
      <VariablesSection
        environmentVariables={form.environmentVariables}
        secrets={form.secrets}
        errors={errors}
        onEnvironmentVariablesChange={(environmentVariables) =>
          updateForm("environmentVariables", environmentVariables)
        }
        onSecretsChange={(secrets) => updateForm("secrets", secrets)}
      />

      {canConfigureSharing ? (
        <SettingsGroup>
          <SettingsGroup.Header
            title={
              <FormattedMessage
                id="settings.cloudEnvironments.editor.sharing.title"
                defaultMessage="Sharing"
                description="Cloud environment sharing section title"
              />
            }
          />
          <SettingsGroup.Content>
            <SettingsSurface>
              <SettingsControlRow
                label={
                  <FormattedMessage
                    id="settings.cloudEnvironments.editor.sharing.label"
                    defaultMessage="Access"
                    description="Cloud environment sharing mode label"
                  />
                }
                control={
                  <SegmentedToggle
                    fullWidth
                    selectedId={form.sharing}
                    onSelect={(id) =>
                      updateForm(
                        "sharing",
                        id as EnvironmentFormState["sharing"],
                      )
                    }
                    options={[
                      {
                        id: "private",
                        label: "Private",
                      },
                      {
                        id: "workspace",
                        label: "Workspace",
                      },
                      {
                        id: "public",
                        label: "Public",
                      },
                    ]}
                  />
                }
              />
            </SettingsSurface>
          </SettingsGroup.Content>
        </SettingsGroup>
      ) : null}

      <div className="flex items-center justify-end gap-2">
        <Button color="secondary" disabled={isSaving} onClick={onCancel}>
          <FormattedMessage
            id="settings.cloudEnvironments.editor.cancel"
            defaultMessage="Cancel"
            description="Cancel cloud environment editor button"
          />
        </Button>
        <Button loading={isSaving} onClick={handleSubmit}>
          {mode === "create" ? (
            <FormattedMessage
              id="settings.cloudEnvironments.editor.create"
              defaultMessage="Create environment"
              description="Create cloud environment button"
            />
          ) : (
            <FormattedMessage
              id="settings.cloudEnvironments.editor.save"
              defaultMessage="Save"
              description="Save cloud environment button"
            />
          )}
        </Button>
      </div>
    </div>
  );
}
function RepositorySelector({
  connectorError,
  connectors,
  form,
  isLoadingConnectors,
  onChange,
}: {
  connectorError?: string;
  connectors: ReturnType<typeof useGithubConnectors>["data"];
  form: EnvironmentFormState;
  isLoadingConnectors: boolean;
  onChange: (patch: {
    githubConnectorId?: string;
    repositoryId: string;
    repositoryName: string;
  }) => void;
}) {
  const [query, setQuery] = React.useState(form.repositoryName);
  const debouncedQuery = useDebouncedValue(query, 250);
  const repositoriesQuery = useRepositorySearch(
    debouncedQuery,
    form.githubConnectorId,
  );
  return (
    <div className="flex w-full flex-col gap-2">
      <select
        className={textInputClassName}
        value={form.githubConnectorId}
        onChange={(event) =>
          onChange({
            githubConnectorId: event.target.value,
            repositoryId: "",
            repositoryName: "",
          })
        }
      >
        <option value="">
          {isLoadingConnectors ? "Loading connectors..." : "Select connector"}
        </option>
        {(connectors ?? []).map((connector) => (
          <option
            key={getConnectorId(connector)}
            value={getConnectorId(connector)}
          >
            {getConnectorLabel(connector)}
          </option>
        ))}
      </select>
      {connectorError ? (
        <div className="text-xs text-token-error-foreground">
          {connectorError}
        </div>
      ) : null}
      <PageSearchInput
        id="cloud-environment-repository-search"
        label="Search repositories"
        placeholder="Search repositories"
        searchQuery={query}
        onSearchQueryChange={setQuery}
      />
      {form.repositoryName ? (
        <div className="text-xs text-token-text-secondary">
          Selected: {form.repositoryName}
        </div>
      ) : null}
      {repositoriesQuery.isLoading && debouncedQuery ? (
        <div className="flex items-center gap-2 text-sm text-token-text-secondary">
          <Spinner className="icon-xs" />
          <span>Searching repositories...</span>
        </div>
      ) : null}
      {(repositoriesQuery.data ?? []).length > 0 ? (
        <div className="max-h-48 overflow-y-auto rounded-lg border border-token-border bg-token-bg-secondary">
          {(repositoriesQuery.data ?? []).map((repository) => (
            <button
              key={
                repository.repository_id ??
                repository.id ??
                getRepositoryName(repository)
              }
              className="flex w-full cursor-interaction px-3 py-2 text-left text-sm hover:bg-token-list-hover-background"
              type="button"
              onClick={() => {
                const patch = repositoryToFormPatch(repository);
                onChange({
                  ...patch,
                  githubConnectorId:
                    patch.githubConnectorId ?? form.githubConnectorId,
                });
                setQuery(patch.repositoryName);
              }}
            >
              {getRepositoryName(repository)}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
function ScriptSection({
  maintenanceCommands,
  onMaintenanceCommandsChange,
  onSetupCommandsChange,
  setupCommands,
}: {
  maintenanceCommands: string;
  onMaintenanceCommandsChange: (value: string) => void;
  onSetupCommandsChange: (value: string) => void;
  setupCommands: string;
}) {
  return (
    <SettingsGroup>
      <SettingsGroup.Header title="Configuration scripts" />
      <SettingsGroup.Content>
        <SettingsSurface>
          <SettingsControlRow
            label="Setup"
            description="Commands run when the environment is first created."
            control={
              <textarea
                className={textAreaClassName}
                spellCheck={false}
                value={setupCommands}
                onChange={(event) => onSetupCommandsChange(event.target.value)}
              />
            }
          />
          <SettingsControlRow
            label="Maintenance"
            description="Commands used to refresh an existing environment."
            control={
              <textarea
                className={textAreaClassName}
                spellCheck={false}
                value={maintenanceCommands}
                onChange={(event) =>
                  onMaintenanceCommandsChange(event.target.value)
                }
              />
            }
          />
        </SettingsSurface>
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}
function NetworkSection({
  form,
  updateForm,
}: {
  form: EnvironmentFormState;
  updateForm: <Key extends keyof EnvironmentFormState>(
    key: Key,
    value: EnvironmentFormState[Key],
  ) => void;
}) {
  return (
    <SettingsGroup>
      <SettingsGroup.Header title="Network access" />
      <SettingsGroup.Content>
        <SettingsSurface>
          <SettingsControlRow
            label="Mode"
            control={
              <SegmentedToggle
                fullWidth
                selectedId={form.networkAccess}
                onSelect={(id) =>
                  updateForm(
                    "networkAccess",
                    id as EnvironmentFormState["networkAccess"],
                  )
                }
                options={[
                  {
                    id: "off",
                    label: "Off",
                  },
                  {
                    id: "on",
                    label: "On",
                  },
                  {
                    id: "custom",
                    label: "Custom",
                  },
                ]}
              />
            }
          />
          {form.networkAccess === "custom" ? (
            <>
              <SettingsControlRow
                label="Allowed domains"
                description="One domain per line or comma-separated."
                control={
                  <textarea
                    className={textAreaClassName}
                    value={form.allowedDomains}
                    onChange={(event) =>
                      updateForm("allowedDomains", event.target.value)
                    }
                  />
                }
              />
              <SettingsControlRow
                label="Blocked domains"
                description="One domain per line or comma-separated."
                control={
                  <textarea
                    className={textAreaClassName}
                    value={form.blockedDomains}
                    onChange={(event) =>
                      updateForm("blockedDomains", event.target.value)
                    }
                  />
                }
              />
            </>
          ) : null}
        </SettingsSurface>
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}
function VariablesSection({
  environmentVariables,
  errors,
  onEnvironmentVariablesChange,
  onSecretsChange,
  secrets,
}: {
  environmentVariables: KeyValueEntry[];
  errors: EnvironmentFormErrors;
  onEnvironmentVariablesChange: (entries: KeyValueEntry[]) => void;
  onSecretsChange: (entries: SecretEntry[]) => void;
  secrets: SecretEntry[];
}) {
  return (
    <SettingsGroup>
      <SettingsGroup.Header title="Variables and secrets" />
      <SettingsGroup.Content>
        <SettingsSurface>
          <SettingsControlRow
            label="Environment variables"
            description={errors.environmentVariables}
            control={
              <KeyValueList
                entries={environmentVariables}
                keyPlaceholder="NAME"
                valuePlaceholder="value"
                onChange={onEnvironmentVariablesChange}
              />
            }
          />
          <SettingsControlRow
            label="Secrets"
            description={errors.secrets}
            control={
              <SecretList entries={secrets} onChange={onSecretsChange} />
            }
          />
        </SettingsSurface>
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}
function KeyValueList({
  entries,
  keyPlaceholder,
  onChange,
  valuePlaceholder,
}: {
  entries: KeyValueEntry[];
  keyPlaceholder: string;
  onChange: (entries: KeyValueEntry[]) => void;
  valuePlaceholder: string;
}) {
  const updateEntry = (
    index: number,
    patch: Partial<Pick<KeyValueEntry, "key" | "value">>,
  ) => {
    onChange(
      entries.map((entry, entryIndex) =>
        entryIndex === index
          ? {
              ...entry,
              ...patch,
            }
          : entry,
      ),
    );
  };
  return (
    <div className="flex w-full flex-col gap-2">
      {entries.map((entry, index) => (
        <div key={entry.id} className="grid grid-cols-[1fr_1fr_auto] gap-2">
          <input
            className={textInputClassName}
            placeholder={keyPlaceholder}
            value={entry.key}
            onChange={(event) =>
              updateEntry(index, {
                key: event.target.value,
              })
            }
          />
          <input
            className={textInputClassName}
            placeholder={valuePlaceholder}
            value={entry.value}
            onChange={(event) =>
              updateEntry(index, {
                value: event.target.value,
              })
            }
          />
          <Button
            color="ghost"
            onClick={() =>
              onChange(entries.filter((_, entryIndex) => entryIndex !== index))
            }
          >
            Remove
          </Button>
        </div>
      ))}
      <Button
        color="secondary"
        onClick={() =>
          onChange([
            ...entries,
            {
              id: `env-${Date.now()}`,
              key: "",
              value: "",
            },
          ])
        }
      >
        Add variable
      </Button>
    </div>
  );
}
function SecretList({
  entries,
  onChange,
}: {
  entries: SecretEntry[];
  onChange: (entries: SecretEntry[]) => void;
}) {
  const updateEntry = (
    index: number,
    patch: Partial<Pick<SecretEntry, "domain" | "name">>,
  ) => {
    onChange(
      entries.map((entry, entryIndex) =>
        entryIndex === index
          ? {
              ...entry,
              ...patch,
            }
          : entry,
      ),
    );
  };
  return (
    <div className="flex w-full flex-col gap-2">
      {entries.map((entry, index) => (
        <div key={entry.id} className="grid grid-cols-[1fr_1fr_auto] gap-2">
          <input
            className={textInputClassName}
            placeholder="SECRET_NAME"
            value={entry.name}
            onChange={(event) =>
              updateEntry(index, {
                name: event.target.value,
              })
            }
          />
          <input
            className={textInputClassName}
            placeholder="Domain"
            value={entry.domain}
            onChange={(event) =>
              updateEntry(index, {
                domain: event.target.value,
              })
            }
          />
          <Button
            color="ghost"
            onClick={() =>
              onChange(entries.filter((_, entryIndex) => entryIndex !== index))
            }
          >
            Remove
          </Button>
        </div>
      ))}
      <Button
        color="secondary"
        onClick={() =>
          onChange([
            ...entries,
            {
              domain: "",
              id: `secret-${Date.now()}`,
              name: "",
            },
          ])
        }
      >
        Add secret
      </Button>
    </div>
  );
}
function FieldError({
  children,
  error,
}: {
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div className="flex w-full flex-col gap-1">
      {children}
      {error ? (
        <div className="text-xs text-token-error-foreground">{error}</div>
      ) : null}
    </div>
  );
}
