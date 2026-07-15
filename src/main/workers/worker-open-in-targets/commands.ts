// Restored from ref/.vite/build/worker.js
// OpenIn target command, icon, and request-parameter normalization.

import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { spawnOpenInTargetCommand } from "./launch";
import { createOpenInPlatformHelpers } from "./platform";
import { getOpenInPlatformTarget } from "./registry";
import type {
  OpenInHostConfig,
  OpenInLocation,
  OpenInTargetRequestParams,
  ShortcutLink,
} from "./types";

const platform = createOpenInPlatformHelpers();

export async function detectOpenInTarget(
  params: OpenInTargetRequestParams,
  readShortcutLink: (path: string) => Promise<ShortcutLink>,
): Promise<string | null> {
  if (params.customTarget != null) {
    return resolveCustomOpenInCommand(
      params.customTarget.command,
      readShortcutLink,
    );
  }
  return getOpenInPlatformTarget(params.target).detect(readShortcutLink);
}

async function resolveCustomOpenInCommand(
  command: string | null | undefined,
  readShortcutLink: (path: string) => Promise<ShortcutLink>,
): Promise<string | null> {
  if (command == null || command.trim() === "") return null;
  const trimmedCommand = command.trim();
  if (platform.isPlatformAbsolutePath(trimmedCommand)) {
    return existsSync(trimmedCommand) ? trimmedCommand : null;
  }
  const resolvedFromPath = platform.resolveExecutableFromPath(trimmedCommand);
  if (resolvedFromPath != null) return resolvedFromPath;
  if (
    process.platform === "win32" &&
    trimmedCommand.toLowerCase().endsWith(".lnk")
  ) {
    const shortcut = await readShortcutLink(trimmedCommand);
    return shortcut.target ?? null;
  }
  return null;
}

export async function getOpenInTargetIcon({
  command,
  params,
  readShortcutLink,
}: {
  command: string | null;
  params: OpenInTargetRequestParams;
  readShortcutLink(path: string): Promise<ShortcutLink>;
}): Promise<string> {
  if (params.customTarget != null) {
    return normalizeOpenInIconSpecifier(params.customTarget.icon);
  }
  if (process.platform === "win32" && command?.toLowerCase().endsWith(".lnk")) {
    const shortcut = await readShortcutLink(command);
    return normalizeOpenInIconSpecifier(shortcut.icon ?? shortcut.target);
  }
  const platformTarget = getOpenInPlatformTarget(params.target);
  if (process.platform !== "win32" || command == null) {
    return platformTarget.icon;
  }
  const iconPath = platformTarget.iconPath
    ? platformTarget.iconPath(command)
    : command;
  const resolvedIconPath =
    iconPath?.toLowerCase().endsWith(".lnk") === true
      ? await platform.resolveWindowsShortcutIconPath(
          iconPath,
          readShortcutLink,
        )
      : iconPath;
  return resolvedIconPath == null
    ? platformTarget.icon
    : normalizeOpenInIconSpecifier(
        platform.stripWindowsIconResourceSuffix(resolvedIconPath),
      );
}

export async function openPathInOpenInTarget({
  command,
  hostConfig,
  location,
  params,
  path,
  remotePath,
  remoteWorkspaceRoot,
}: {
  params: OpenInTargetRequestParams;
  command: string | null;
  path: string;
  location?: OpenInLocation | null;
  hostConfig?: OpenInHostConfig | null;
  remoteWorkspaceRoot?: string | null;
  remotePath?: string | null;
}): Promise<void> {
  if (command == null || command.trim() === "") {
    throw Error("Open target command is required.");
  }
  if (params.customTarget != null) {
    await spawnOpenInTargetCommand(command, [path]);
    return;
  }
  const platformTarget = getOpenInPlatformTarget(params.target);
  if (platformTarget.open != null) {
    await platformTarget.open({
      command,
      hostConfig,
      location,
      path,
      remotePath,
      remoteWorkspaceRoot,
    });
    return;
  }
  await spawnOpenInTargetCommand(
    command,
    platformTarget.args?.(
      path,
      location,
      hostConfig,
      remoteWorkspaceRoot,
      remotePath,
    ) ?? [path],
    { env: platformTarget.env?.() },
  );
}

export function parseOpenInTargetRequestParams(
  value: unknown,
): OpenInTargetRequestParams {
  if (!isRecord(value)) return {};
  const customTarget = isRecord(value.customTarget)
    ? {
        command:
          typeof value.customTarget.command === "string"
            ? value.customTarget.command
            : null,
        icon:
          typeof value.customTarget.icon === "string"
            ? value.customTarget.icon
            : null,
      }
    : null;
  return {
    target: typeof value.target === "string" ? value.target : null,
    command: typeof value.command === "string" ? value.command : null,
    customTarget,
  };
}

function normalizeOpenInIconSpecifier(icon: string | null | undefined): string {
  if (icon == null || icon.trim() === "") return "apps/vscode.png";
  const trimmedIcon = icon.trim();
  if (isBundledAppIconPath(trimmedIcon) || isDataImageUrl(trimmedIcon)) {
    return trimmedIcon;
  }
  const filePath = parseLocalIconPath(trimmedIcon);
  return filePath == null ? "apps/vscode.png" : toAppFileUrl(filePath);
}

function parseLocalIconPath(icon: string): string | null {
  if (icon.startsWith("file:")) {
    try {
      return fileURLToPath(icon);
    } catch {
      return null;
    }
  }
  if (!platform.isPlatformAbsolutePath(icon)) return null;
  if (process.platform !== "win32" && !existsSync(icon)) return null;
  return icon;
}

function toAppFileUrl(filePath: string): string {
  let normalizedPath = filePath.replaceAll("\\", "/");
  if (!normalizedPath.startsWith("/")) normalizedPath = `/${normalizedPath}`;
  return `app://fs/@fs${encodeURI(normalizedPath).replaceAll("#", "%23").replaceAll("?", "%3F")}`;
}

function isBundledAppIconPath(icon: string): boolean {
  const withoutLeadingSlash = icon.startsWith("/") ? icon.slice(1) : icon;
  return (
    withoutLeadingSlash.startsWith("apps/") &&
    !withoutLeadingSlash.split("/").includes("..")
  );
}

function isDataImageUrl(icon: string): boolean {
  return /^data:image\/(?:png|jpe?g|gif|webp|bmp|x-icon|vnd\.microsoft\.icon);base64,/i.test(
    icon,
  );
}

export function normalizeShortcutLink(value: unknown): ShortcutLink {
  if (!isRecord(value)) return {};
  return {
    target: typeof value.target === "string" ? value.target : null,
    icon: typeof value.icon === "string" ? value.icon : null,
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}
