// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Buttons and config-path resolution for opening a host's config.toml in the editor.
import type { ReactNode } from "react";
import nodePath from "node:path";
import { Button } from "../ui/button";
import { LinkExternalIcon } from "../icons/link-external-icon";
import { FormattedMessage, defineMessages } from "../vendor/react-intl";
import { useOsInfo } from "../utils/use-os-info";
import { useCodexHome } from "../utils/use-codex-home";
import { useSettingValue } from "../settings/setting-storage";
import { generalSettingDefinitions } from "../boundaries/src-l0hb-mz-p";
import {
  initOpenConfigInEditorChunk,
  openConfigInEditor,
} from "./open-config-in-editor";

const openConfigTomlMessages = defineMessages({
  openConfigToml: {
    id: "codex.profileDropdown.openConfigToml",
    defaultMessage: "Open config.toml",
    description: "Action to open the MCP configuration file",
  },
  openConfigTomlWsl: {
    id: "codex.profileDropdown.openConfigToml.wsl",
    defaultMessage: "Open config.toml in WSL environment",
    description:
      "Action to open the MCP configuration file inside Windows Subsystem for Linux",
  },
});

interface ConfigTomlPath {
  configPath: string | null;
  label: ReactNode;
}

function useConfigTomlPath(hostId: string): ConfigTomlPath {
  const { data: osInfo } = useOsInfo();
  const runCodexInWsl = useSettingValue(
    generalSettingDefinitions.runCodexInWsl,
  );
  const codexHome = useCodexHome(hostId);

  const isWslEnvironment =
    osInfo?.platform === "win32" && osInfo?.hasWsl && runCodexInWsl;
  const configPath =
    codexHome == null ? null : nodePath.join(codexHome, "config.toml");
  const label = isWslEnvironment ? (
    <FormattedMessage {...openConfigTomlMessages.openConfigTomlWsl} />
  ) : (
    <FormattedMessage {...openConfigTomlMessages.openConfigToml} />
  );

  return { configPath, label };
}

export interface OpenConfigTomlButtonProps {
  hostId: string;
}

export function initOpenConfigTomlButtonChunk(): void {
  initOpenConfigInEditorChunk();
}

export function OpenConfigTomlButton({ hostId }: OpenConfigTomlButtonProps) {
  const { configPath, label } = useConfigTomlPath(hostId);
  const handleClick = () => {
    if (configPath != null) {
      openConfigInEditor({ hostId, path: configPath });
    }
  };
  const isDisabled = configPath == null;

  return (
    <Button
      color="secondary"
      size="toolbar"
      className="inline-flex w-fit"
      onClick={handleClick}
      disabled={isDisabled}
    >
      {label}
    </Button>
  );
}

export function OpenConfigTomlLink({ hostId }: OpenConfigTomlButtonProps) {
  const { configPath, label } = useConfigTomlPath(hostId);
  const handleClick = () => {
    if (configPath != null) {
      openConfigInEditor({ hostId, path: configPath });
    }
  };
  const isDisabled = configPath == null;

  return (
    <button
      type="button"
      className="inline-flex cursor-interaction items-center gap-1 text-start font-medium text-token-text-secondary hover:text-token-text-primary disabled:cursor-not-allowed disabled:opacity-50"
      onClick={handleClick}
      disabled={isDisabled}
    >
      {label}
      <LinkExternalIcon className="icon-xxs shrink-0" aria-hidden={true} />
    </button>
  );
}
