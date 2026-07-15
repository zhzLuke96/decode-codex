// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Builds visible menu items for host-provided open targets.
import type * as React from "react";

import type { ContextMenuItemDefinition } from "../ui/context-menu";
import { buildExternalLinkContextMenuItems } from "../utils/external-link/browser-actions";

type OpenTargetMenuItem = {
  appPath?: string | null;
  icon?: string;
  id: string;
  label: React.ReactNode;
  target: unknown;
};

function readString(record: Record<string, unknown>, keys: string[]): string | null {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" && value.length > 0) return value;
  }
  return null;
}

function toOpenTargetMenuItem(target: unknown, index: number): OpenTargetMenuItem {
  const record =
    typeof target === "object" && target != null
      ? (target as Record<string, unknown>)
      : {};
  const appPath = readString(record, ["appPath", "path", "bundlePath"]);
  const id =
    readString(record, ["id", "target", "appId", "bundleIdentifier"]) ??
    appPath ??
    `target-${index}`;
  const label =
    readString(record, ["label", "name", "displayName", "title"]) ?? id;
  const icon = readString(record, ["icon", "iconUrl", "iconDataUrl"]);
  return {
    appPath,
    icon: icon ?? undefined,
    id,
    label,
    target,
  };
}

export function buildOpenTargetMenuItems(
  options:
    | {
        availableTargets?: unknown[];
        includeHiddenTargets?: boolean;
        mode?: string;
        targets?: unknown[];
      }
    | {
        conversationId: string | null;
        href: string;
        initiator?: string;
      },
): OpenTargetMenuItem[] | ContextMenuItemDefinition[] {
  if ("href" in options) {
    return buildExternalLinkContextMenuItems({
      conversationId: options.conversationId,
      href: options.href,
      initiator: options.initiator,
    });
  }
  const source =
    options.availableTargets != null && options.availableTargets.length > 0
      ? options.availableTargets
      : (options.targets ?? []);
  return source.map(toOpenTargetMenuItem);
}

export function isVisibleOpenTargetMenuItem(item: OpenTargetMenuItem): boolean {
  return item.label != null;
}

export function filterOpenInTargets(options: {
  availableTargets?: unknown[];
  includeHiddenTargets?: boolean;
  mode?: string;
  targets?: unknown[];
}): OpenTargetMenuItem[] {
  return buildOpenTargetMenuItems(options).filter(
    isVisibleOpenTargetMenuItem,
  ) as OpenTargetMenuItem[];
}
