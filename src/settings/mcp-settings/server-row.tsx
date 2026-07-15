// Restored from ref/webview/assets/mcp-settings-Cq9pFeQZ.js
// Server row controls for MCP settings lists.
import { Button } from "../../ui/button";
import { SettingsControlRow } from "../../ui/settings-row";
import { ControlGroup } from "../../utils/control-group";
import { Toggle } from "../../utils/toggle";
import { PlusIcon } from "../../icons/plus-icon";
import { SettingsCogIcon } from "../../icons/settings-cog-icon";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import type { McpServerRowProps } from "./types";

export function McpServerRow({
  name,
  statusLoading,
  onAuthenticateClicked,
  authStatus,
  onEnableClicked,
  enabled,
  onSettingsClicked,
  isReadOnly,
}: McpServerRowProps) {
  const intl = useIntl();
  const shouldShowAuthButton =
    !statusLoading &&
    onAuthenticateClicked !== undefined &&
    authStatus === "notLoggedIn";
  const hasControls =
    onEnableClicked !== undefined ||
    onSettingsClicked !== undefined ||
    shouldShowAuthButton;
  const label = (
    <span className="flex min-w-0 flex-col gap-0.5 text-sm">
      <span className="flex flex-wrap items-end gap-1">
        <span className="font-medium text-token-text-primary">{name}</span>
      </span>
    </span>
  );
  const controls = hasControls ? (
    <ControlGroup>
      {shouldShowAuthButton ? (
        <Button
          color="outline"
          disabled={!!statusLoading}
          onClick={() => {
            onAuthenticateClicked();
          }}
          size="toolbar"
        >
          <FormattedMessage
            id="settings.mcp.server.login"
            defaultMessage="Authenticate"
            description="Button label to authenticate with an MCP server"
          />
        </Button>
      ) : null}
      {onSettingsClicked ? (
        <Button
          aria-label={intl.formatMessage({
            id: "settings.mcp.server.settings",
            defaultMessage: "Settings",
            description: "Button label to view MCP server settings",
          })}
          color="ghost"
          disabled={isReadOnly === true}
          onClick={() => {
            onSettingsClicked();
          }}
          size="toolbar"
          uniform
        >
          <SettingsCogIcon className="icon-xs" />
        </Button>
      ) : null}
      {onEnableClicked ? (
        <Toggle
          ariaLabel={intl.formatMessage({
            id: "settings.mcp.server.enable",
            defaultMessage: "Enable",
            description: "Toggle to enable an MCP server",
          })}
          checked={enabled === true}
          disabled={statusLoading === true || isReadOnly === true}
          onChange={(nextEnabled) => {
            onEnableClicked(nextEnabled);
          }}
        />
      ) : null}
    </ControlGroup>
  ) : null;

  return (
    <SettingsControlRow control={controls} description={null} label={label} />
  );
}

export function AddMcpServerButton({ onClick }: { onClick?: () => void }) {
  return (
    <Button
      color="secondary"
      onClick={() => {
        onClick?.();
      }}
      size="toolbar"
    >
      <PlusIcon className="icon-xs" />
      <FormattedMessage
        id="settings.mcp.addServer"
        defaultMessage="Add server"
        description="Button to add a new MCP server"
      />
    </Button>
  );
}
