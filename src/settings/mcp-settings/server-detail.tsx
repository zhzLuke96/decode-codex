// Restored from ref/webview/assets/mcp-settings-Cq9pFeQZ.js
// Detail editor for adding, updating, and uninstalling a single MCP server.
import React from "react";
import { Button } from "../../ui/button";
import { LoadingPage } from "../../ui/loading-page";
import { SettingsContentLayout } from "../../ui/settings-content-layout";
import { SettingsGroup } from "../../utils/settings-group";
import { SettingsSurface } from "../../utils/settings-surface";
import { Tabs } from "../../utils/tabs";
import { ArrowLeftIcon } from "../../icons/arrow-left-icon";
import { LinkExternalIcon } from "../../icons/link-external-icon";
import { TrashIcon } from "../../icons/trash-icon";
import { CODEX_MCP_DOCS_URL } from "../../utils/links-bd-mmkun-d";
import { isEqualT } from "../../vendor/lodash-is-equal";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { SettingsSchemaValueType } from "../settings-sections";
import { EditableConfigValue } from "./editable-config-value";
import {
  formatMcpTitle,
  fromEditableMcpServerDraft,
  getErrorMessage,
  toEditableMcpServerDraft,
} from "./config-draft";
import type { McpServerDetailProps, TransportType } from "./types";

const isEqual = isEqualT() as (left: unknown, right: unknown) => boolean;

export function McpServerDetail({
  config,
  initialKey,
  onCancel,
  onSave,
  onUninstall,
}: McpServerDetailProps) {
  const initialDraft = React.useMemo(
    () => toEditableMcpServerDraft(config, initialKey),
    [config, initialKey],
  );
  const [draft, setDraft] = React.useState(initialDraft);
  const [isSaving, setIsSaving] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const intl = useIntl();
  const trimmedLabel = draft.label.trim();
  const isDirty = !isEqual(draft, initialDraft);
  const missingTransportField =
    draft.transportType === "streamable_http"
      ? draft.http.url.trim().length === 0
      : draft.stdio.command.trim().length === 0;
  const hasExistingName = !!(config.name && config.name.trim().length > 0);

  const saveServer = async () => {
    if (trimmedLabel.length === 0 || missingTransportField) return;
    setError(null);
    setIsSaving(true);
    try {
      await onSave(fromEditableMcpServerDraft(draft), draft.label);
    } catch (saveError) {
      setError(
        getErrorMessage(
          saveError,
          intl.formatMessage({
            id: "settings.mcp.detail.saveError",
            defaultMessage: "Could not save MCP server",
            description: "Error shown when saving an MCP server fails",
          }),
        ),
      );
    } finally {
      setIsSaving(false);
    }
  };

  const uninstallServer = async () => {
    if (!onUninstall) return;
    setError(null);
    setIsSaving(true);
    try {
      await onUninstall(draft.label);
    } catch (uninstallError) {
      setError(
        getErrorMessage(
          uninstallError,
          intl.formatMessage({
            id: "settings.mcp.detail.uninstallError",
            defaultMessage: "Could not uninstall MCP server",
            description: "Error shown when uninstalling an MCP server fails",
          }),
        ),
      );
    } finally {
      setIsSaving(false);
    }
  };

  const title = hasExistingName ? (
    <FormattedMessage
      id="settings.mcp.detail.titleExisting"
      defaultMessage="Update {name} MCP"
      description="Title for the MCP server detail view when editing an existing server"
      values={{
        name: formatMcpTitle(config.name),
      }}
    />
  ) : (
    <FormattedMessage
      id="settings.mcp.detail.titleNew"
      defaultMessage="Connect to a custom MCP"
      description="Title for the MCP server detail view when adding a new server"
    />
  );

  return (
    <SettingsContentLayout
      action={
        onUninstall && draft.label.trim().length > 0 ? (
          <Button
            color="danger"
            disabled={isSaving}
            onClick={() => {
              uninstallServer();
            }}
            size="toolbar"
          >
            <TrashIcon className="icon-xs" />
            <FormattedMessage
              id="settings.mcp.detail.uninstall"
              defaultMessage="Uninstall"
              description="Button label to uninstall an MCP server"
            />
          </Button>
        ) : null
      }
      backSlot={
        <Button
          color="ghost"
          onClick={() => {
            onCancel();
          }}
          size="toolbar"
        >
          <ArrowLeftIcon className="icon-xs" />
          <FormattedMessage
            id="settings.mcp.detail.back"
            defaultMessage="Back"
            description="Button label to go back to MCP settings"
          />
        </Button>
      }
      subtitle={
        hasExistingName ? null : (
          <a
            aria-label={intl.formatMessage({
              id: "settings.mcp.detail.docs",
              defaultMessage: "Open MCP documentation",
              description: "Aria label for MCP docs link in detail header",
            })}
            className="inline-flex items-center gap-1 text-sm text-token-text-secondary hover:text-token-text-primary"
            href={CODEX_MCP_DOCS_URL}
            rel="noreferrer"
            target="_blank"
          >
            <FormattedMessage
              id="settings.mcp.detail.docs.link"
              defaultMessage="Docs"
              description="Tooltip link label for MCP docs on add page"
            />
            <LinkExternalIcon className="icon-xxs" />
          </a>
        )
      }
      title={title}
    >
      <div className="relative">
        {isSaving ? <LoadingPage overlay /> : null}
        <SettingsGroup>
          <SettingsGroup.Content>
            {hasExistingName ? (
              <p className="text-sm text-token-text-secondary">
                <FormattedMessage
                  id="settings.mcp.detail.switchTransportNotice"
                  defaultMessage="If you would like to switch MCP server type, please uninstall first."
                  description="Notice explaining how to change MCP transport type"
                />
              </p>
            ) : (
              <SettingsSurface>
                <EditableConfigValue
                  inputType={SettingsSchemaValueType.String}
                  onEdit={(label) => {
                    setDraft((currentDraft) => ({
                      ...currentDraft,
                      label,
                    }));
                  }}
                  placeHolderValue="MCP server name"
                  title={
                    <FormattedMessage
                      id="settings.mcp.detail.name"
                      defaultMessage="Name"
                      description="Name for MCP server display name"
                    />
                  }
                  value={draft.label}
                />
                <Tabs
                  onSelect={(transportType) => {
                    setDraft((currentDraft) => ({
                      ...currentDraft,
                      transportType: transportType as TransportType,
                    }));
                  }}
                  selectedKey={draft.transportType}
                  tabs={[
                    {
                      key: "stdio",
                      name: (
                        <FormattedMessage
                          id="settings.mcp.detail.transport.stdio"
                          defaultMessage="STDIO"
                          description="Label for stdio transport toggle"
                        />
                      ),
                    },
                    {
                      key: "streamable_http",
                      name: (
                        <FormattedMessage
                          id="settings.mcp.detail.transport.http"
                          defaultMessage="Streamable HTTP"
                          description="Label for HTTP transport toggle"
                        />
                      ),
                    },
                  ]}
                />
              </SettingsSurface>
            )}
            <SettingsSurface>
              {draft.transportType === "stdio" ? (
                <StdioServerFields draft={draft} setDraft={setDraft} />
              ) : (
                <HttpServerFields draft={draft} setDraft={setDraft} />
              )}
            </SettingsSurface>
            {error == null ? null : (
              <p
                className="rounded-md bg-token-input-validation-error-background/20 px-3 py-2 text-sm text-token-error-foreground"
                role="alert"
              >
                {error}
              </p>
            )}
            <div className="flex justify-end">
              <Button
                color="primary"
                disabled={
                  trimmedLabel.length === 0 ||
                  !isDirty ||
                  isSaving ||
                  missingTransportField
                }
                onClick={saveServer}
                size="toolbar"
              >
                <FormattedMessage
                  id="settings.mcp.detail.save"
                  defaultMessage="Save"
                  description="Save button label on MCP server detail view"
                />
              </Button>
            </div>
          </SettingsGroup.Content>
        </SettingsGroup>
      </div>
    </SettingsContentLayout>
  );
}

type DraftState = ReturnType<typeof toEditableMcpServerDraft>;
type SetDraft = React.Dispatch<React.SetStateAction<DraftState>>;

function StdioServerFields({
  draft,
  setDraft,
}: {
  draft: DraftState;
  setDraft: SetDraft;
}) {
  return (
    <>
      <EditableConfigValue
        inputType={SettingsSchemaValueType.String}
        onEdit={(command) => {
          setDraft((currentDraft) => ({
            ...currentDraft,
            stdio: {
              ...currentDraft.stdio,
              command,
            },
          }));
        }}
        placeHolderValue="openai-dev-mcp serve-sqlite"
        title={
          <FormattedMessage
            id="settings.mcp.detail.command"
            defaultMessage="Command to launch"
            description="Label for MCP stdio command"
          />
        }
        value={draft.stdio.command}
      />
      <EditableConfigValue
        addLabel={
          <FormattedMessage
            id="settings.mcp.detail.addArgument"
            defaultMessage="Add argument"
            description="Add button label for MCP stdio arguments"
          />
        }
        inputType={SettingsSchemaValueType.Array}
        onEdit={(args) => {
          setDraft((currentDraft) => ({
            ...currentDraft,
            stdio: {
              ...currentDraft.stdio,
              args,
            },
          }));
        }}
        placeHolderValue={[]}
        title={
          <FormattedMessage
            id="settings.mcp.detail.args"
            defaultMessage="Arguments"
            description="Label for MCP stdio arguments"
          />
        }
        value={draft.stdio.args}
      />
      <EditableConfigValue
        addLabel={
          <FormattedMessage
            id="settings.mcp.detail.addEnvVar"
            defaultMessage="Add environment variable"
            description="Add button label for MCP stdio environment variables"
          />
        }
        inputType={SettingsSchemaValueType.Record}
        onEdit={(env) => {
          setDraft((currentDraft) => ({
            ...currentDraft,
            stdio: {
              ...currentDraft.stdio,
              env,
            },
          }));
        }}
        placeHolderValue={[]}
        title={
          <FormattedMessage
            id="settings.mcp.detail.envVars"
            defaultMessage="Environment variables"
            description="Label for MCP stdio environment variables"
          />
        }
        value={draft.stdio.env}
      />
      <EditableConfigValue
        addLabel={
          <FormattedMessage
            id="settings.mcp.detail.addEnvVarPassthrough"
            defaultMessage="Add variable"
            description="Add button label for MCP stdio env var passthrough"
          />
        }
        inputType={SettingsSchemaValueType.Array}
        onEdit={(envVars) => {
          setDraft((currentDraft) => ({
            ...currentDraft,
            stdio: {
              ...currentDraft.stdio,
              envVars,
            },
          }));
        }}
        placeHolderValue={[]}
        title={
          <FormattedMessage
            id="settings.mcp.detail.envVarPassthrough"
            defaultMessage="Environment variable passthrough"
            description="Label for MCP stdio env var passthrough"
          />
        }
        value={draft.stdio.envVars}
      />
      <EditableConfigValue
        inputType={SettingsSchemaValueType.String}
        onEdit={(cwd) => {
          setDraft((currentDraft) => ({
            ...currentDraft,
            stdio: {
              ...currentDraft.stdio,
              cwd,
            },
          }));
        }}
        placeHolderValue="~/code"
        title={
          <FormattedMessage
            id="settings.mcp.detail.cwd"
            defaultMessage="Working directory"
            description="Label for MCP stdio working directory"
          />
        }
        value={draft.stdio.cwd}
      />
    </>
  );
}

function HttpServerFields({
  draft,
  setDraft,
}: {
  draft: DraftState;
  setDraft: SetDraft;
}) {
  return (
    <>
      <EditableConfigValue
        inputType={SettingsSchemaValueType.String}
        onEdit={(url) => {
          setDraft((currentDraft) => ({
            ...currentDraft,
            http: {
              ...currentDraft.http,
              url,
            },
          }));
        }}
        placeHolderValue="https://mcp.example.com/mcp"
        title={
          <FormattedMessage
            id="settings.mcp.detail.http.url"
            defaultMessage="URL"
            description="Label for MCP HTTP URL"
          />
        }
        value={draft.http.url}
      />
      <EditableConfigValue
        inputType={SettingsSchemaValueType.String}
        onEdit={(bearerTokenEnvVar) => {
          setDraft((currentDraft) => ({
            ...currentDraft,
            http: {
              ...currentDraft.http,
              bearerTokenEnvVar,
            },
          }));
        }}
        placeHolderValue="MCP_BEARER_TOKEN"
        title={
          <FormattedMessage
            id="settings.mcp.detail.http.bearerToken"
            defaultMessage="Bearer token env var"
            description="Label for MCP HTTP bearer token env var"
          />
        }
        value={draft.http.bearerTokenEnvVar}
      />
      <EditableConfigValue
        addLabel={
          <FormattedMessage
            id="settings.mcp.detail.http.addHeader"
            defaultMessage="Add header"
            description="Add button label for MCP HTTP headers"
          />
        }
        inputType={SettingsSchemaValueType.Record}
        onEdit={(httpHeaders) => {
          setDraft((currentDraft) => ({
            ...currentDraft,
            http: {
              ...currentDraft.http,
              httpHeaders,
            },
          }));
        }}
        placeHolderValue={[]}
        title={
          <FormattedMessage
            id="settings.mcp.detail.http.headers"
            defaultMessage="Headers"
            description="Label for MCP HTTP headers"
          />
        }
        value={draft.http.httpHeaders}
      />
      <EditableConfigValue
        addLabel={
          <FormattedMessage
            id="settings.mcp.detail.http.addEnvHeader"
            defaultMessage="Add variable"
            description="Add button label for MCP HTTP env headers"
          />
        }
        inputType={SettingsSchemaValueType.Record}
        onEdit={(envHttpHeaders) => {
          setDraft((currentDraft) => ({
            ...currentDraft,
            http: {
              ...currentDraft.http,
              envHttpHeaders,
            },
          }));
        }}
        placeHolderValue={[]}
        title={
          <FormattedMessage
            id="settings.mcp.detail.http.envHeaders"
            defaultMessage="Headers from environment variables"
            description="Label for MCP HTTP env headers"
          />
        }
        value={draft.http.envHttpHeaders}
      />
    </>
  );
}
