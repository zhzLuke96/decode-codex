// Restored from ref/.vite/build/worker.js
// OpenIn target editor argument helpers.

import { pathToFileURL } from "node:url";
import type { OpenInHostConfig, OpenInLocation } from "./types";

export function buildCodeEditorArgs(
  path: string,
  location?: OpenInLocation | null,
  hostConfig?: OpenInHostConfig | null,
  remoteWorkspaceRoot?: string | null,
  remotePath?: string | null,
): string[] {
  if (isRemoteOpenHostConfig(hostConfig)) {
    if (hostConfig.kind === "remote-control") {
      throw Error("Remote control does not support VS Code remote open yet.");
    }
    if (remoteWorkspaceRoot != null || remotePath != null) {
      return buildVsCodeRemoteArgs({
        hostConfig,
        location,
        remotePath,
        remoteWorkspaceRoot,
      });
    }
  }
  return location != null
    ? ["--goto", `${path}:${location.line}:${location.column}`]
    : process.platform === "win32"
      ? [path]
      : ["--goto", path];
}

export function buildJetBrainsArgs(
  path: string,
  location?: OpenInLocation | null,
): string[] {
  return location == null
    ? [path]
    : [
        "--line",
        location.line.toString(),
        "--column",
        location.column.toString(),
        path,
      ];
}

export function buildZedArgs(
  path: string,
  location?: OpenInLocation | null,
  hostConfig?: OpenInHostConfig | null,
  remoteWorkspaceRoot?: string | null,
  remotePath?: string | null,
): string[] {
  if (hostConfig?.kind === "ssh") {
    const authority = getZedSshAuthority(hostConfig);
    if (authority == null) {
      throw Error("Zed SSH open is not available for this host.");
    }
    const targetPath = remotePath?.trim() || remoteWorkspaceRoot?.trim();
    const remoteUri =
      targetPath == null || targetPath.length === 0
        ? null
        : buildSshUri(authority, targetPath);
    if (remoteUri == null) throw Error("Missing remote path for Zed SSH open.");
    return [appendLineColumn(remoteUri, location)];
  }
  return [appendLineColumn(path, location)];
}

export function buildTextMateArgs(
  path: string,
  location?: OpenInLocation | null,
): string[] {
  if (location == null) return ["-a", "TextMate", path];
  const url = new URL("txmt://open/");
  url.searchParams.set("url", pathToFileURL(path).toString());
  url.searchParams.set("line", location.line.toString());
  url.searchParams.set("column", location.column.toString());
  return ["-a", "TextMate", url.toString()];
}

export function buildLaunchServicesArgs(
  appName: string,
  path: string,
): string[] {
  return ["-a", appName, path];
}

export function createCursorDarwinCliEnv(): NodeJS.ProcessEnv {
  const env = { ...process.env };
  env.VSCODE_NODE_OPTIONS = env.NODE_OPTIONS;
  env.VSCODE_NODE_REPL_EXTERNAL_MODULE = env.NODE_REPL_EXTERNAL_MODULE;
  delete env.NODE_OPTIONS;
  delete env.NODE_REPL_EXTERNAL_MODULE;
  env.ELECTRON_RUN_AS_NODE = "1";
  return env;
}

function isRemoteOpenHostConfig(
  hostConfig: OpenInHostConfig | null | undefined,
): hostConfig is OpenInHostConfig {
  return (
    hostConfig?.kind === "ssh" ||
    hostConfig?.kind === "wsl" ||
    hostConfig?.kind === "remote-control"
  );
}

function buildVsCodeRemoteArgs({
  hostConfig,
  location,
  remotePath,
  remoteWorkspaceRoot,
}: {
  hostConfig: OpenInHostConfig;
  location?: OpenInLocation | null;
  remotePath?: string | null;
  remoteWorkspaceRoot?: string | null;
}): string[] {
  const remoteAuthority = `ssh-remote+${resolveRemoteAuthority(hostConfig)}`;
  const workspaceRoot = remoteWorkspaceRoot?.trim() || undefined;
  const filePath = remotePath?.trim() || undefined;
  if (filePath != null && location != null) {
    const args: string[] = [];
    if (workspaceRoot != null) {
      args.push(
        "--folder-uri",
        buildVsCodeRemoteUri(remoteAuthority, workspaceRoot),
      );
    }
    args.push(
      "--remote",
      remoteAuthority,
      "--goto",
      `${filePath}:${location.line}:${location.column}`,
    );
    return args;
  }
  const args: string[] = [];
  if (workspaceRoot != null) {
    args.push(
      "--folder-uri",
      buildVsCodeRemoteUri(remoteAuthority, workspaceRoot),
    );
  }
  if (filePath != null) {
    args.push("--file-uri", buildVsCodeRemoteUri(remoteAuthority, filePath));
  }
  return args;
}

function buildVsCodeRemoteUri(remoteAuthority: string, path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `vscode-remote://${remoteAuthority}${normalizedPath
    .split("/")
    .map(encodeURIComponent)
    .join("/")}`;
}

function resolveRemoteAuthority(hostConfig: OpenInHostConfig): string {
  if (hostConfig.kind === "ssh") {
    const sshConfig = getSshWebsocketConfig(hostConfig);
    const alias = getSshAlias(sshConfig);
    if (alias != null) return alias;
    const terminalHost = getTerminalCommandHost(hostConfig);
    if (terminalHost != null) return terminalHost;
  }
  const name =
    typeof hostConfig.name === "string" ? hostConfig.name.trim() : "";
  if (name) return name;
  const id = typeof hostConfig.id === "string" ? hostConfig.id.trim() : "";
  const finalSegment = id.split(/[:/]/).at(-1)?.trim();
  return finalSegment || id;
}

function getZedSshAuthority(hostConfig: OpenInHostConfig): string | null {
  const sshConfig = getSshWebsocketConfig(hostConfig);
  const alias = getSshAlias(sshConfig);
  if (alias != null) return alias;
  if (sshConfig != null) {
    if (typeof sshConfig.identity === "string" && sshConfig.identity.trim()) {
      return null;
    }
    const host =
      typeof sshConfig.sshHost === "string" ? sshConfig.sshHost.trim() : "";
    if (host) return formatSshHostWithPort(host, sshConfig.sshPort);
  }
  if (terminalCommandHasIdentity(hostConfig)) return null;
  const terminalHost = getTerminalCommandHost(hostConfig);
  return terminalHost ?? resolveRemoteAuthority(hostConfig);
}

function getSshWebsocketConfig(
  hostConfig: OpenInHostConfig,
): Record<string, unknown> | null {
  return isRecord(hostConfig.ssh_websocket_v0)
    ? hostConfig.ssh_websocket_v0
    : null;
}

function getSshAlias(config: Record<string, unknown> | null): string | null {
  const alias =
    typeof config?.sshAlias === "string" ? config.sshAlias.trim() : "";
  return alias || null;
}

function getTerminalCommandHost(hostConfig: OpenInHostConfig): string | null {
  const terminalCommand = Array.isArray(hostConfig.terminal_command)
    ? hostConfig.terminal_command
    : [];
  const host = terminalCommand.at(-1);
  if (typeof host !== "string" || !host.trim()) return null;
  return formatSshHostWithPort(
    host.trim(),
    parseTerminalCommandPort(terminalCommand),
  );
}

function parseTerminalCommandPort(command: unknown[]): number | null {
  const compactPort = command.find(
    (part): part is string => typeof part === "string" && /^-p\d+$/.test(part),
  );
  if (compactPort != null) return Number(compactPort.slice(2));
  const portFlagIndex = command.indexOf("-p");
  const portValue = portFlagIndex >= 0 ? command[portFlagIndex + 1] : null;
  return typeof portValue === "string" && /^\d+$/.test(portValue)
    ? Number(portValue)
    : null;
}

function terminalCommandHasIdentity(hostConfig: OpenInHostConfig): boolean {
  const terminalCommand = Array.isArray(hostConfig.terminal_command)
    ? hostConfig.terminal_command
    : [];
  return terminalCommand.some(
    (part) =>
      typeof part === "string" && (part === "-i" || /^-i\S+/.test(part)),
  );
}

function formatSshHostWithPort(host: string, port: unknown): string {
  const portNumber = typeof port === "number" ? port : null;
  const hostWithBrackets =
    host.includes(":") && !host.startsWith("[") ? `[${host}]` : host;
  return portNumber == null
    ? hostWithBrackets
    : `${hostWithBrackets}:${portNumber}`;
}

function buildSshUri(authority: string, path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `ssh://${authority}${normalizedPath
    .split("/")
    .map(encodeURIComponent)
    .join("/")}`;
}

function appendLineColumn(
  target: string,
  location?: OpenInLocation | null,
): string {
  return location == null
    ? target
    : `${target}:${location.line}:${location.column}`;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}
