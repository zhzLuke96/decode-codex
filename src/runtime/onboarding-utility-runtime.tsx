// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Small commons utilities whose original exports lived in the onboarding shared chunk.
import React, { type CSSProperties, type HTMLAttributes } from "react";

import { dismissTooltips } from "../utils/tooltip-dismiss";
import {
  workspaceRootAtom,
  workspaceRootToCwd,
} from "./onboarding-common-runtime";

export const DEFAULT_COLLABORATION_MODE = "default";

export class RequestAbortedError extends Error {
  constructor(message = "Request aborted") {
    super(message);
    this.name = "RequestAbortedError";
  }
}

export function createRequestAbortedError(): RequestAbortedError {
  return new RequestAbortedError();
}

export function resolveQueryOptions<TOptions extends Record<string, unknown>>(
  options: TOptions | null | undefined,
  fallback: TOptions | null | undefined,
): TOptions {
  return {
    ...(fallback ?? {}),
    ...(options ?? {}),
  } as TOptions;
}

export function uniqBy<TItem, TKey>(
  items: readonly TItem[],
  getKey: (item: TItem) => TKey,
): TItem[] {
  const seen = new Set<TKey>();
  const result: TItem[] = [];
  for (const item of items) {
    const key = getKey(item);
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(item);
  }
  return result;
}

function recordPath(value: Record<string, unknown>): string | null {
  const path =
    value.cwd ??
    value.workspaceRoot ??
    value.workspace_root ??
    value.root ??
    value.path ??
    value.dir;
  return typeof path === "string" && path.trim().length > 0
    ? workspaceRootToCwd(path)
    : null;
}

export function getWorkspaceCwd(source: unknown): string | null {
  if (typeof source === "string") return workspaceRootToCwd(source);
  if (source == null || typeof source !== "object") return null;

  const record = source as Record<string, unknown>;
  const direct = recordPath(record);
  if (direct != null) return direct;

  if (record.value != null && typeof record.value === "object") {
    const nested = recordPath(record.value as Record<string, unknown>);
    if (nested != null) return nested;
  }

  if (typeof record.get === "function") {
    try {
      const workspaceRoot = (record.get as (signal: unknown) => unknown)(
        workspaceRootAtom,
      );
      return workspaceRoot == null ? null : workspaceRootToCwd(workspaceRoot);
    } catch {
      return null;
    }
  }

  return null;
}

export function dismissActivePopover(): void {
  dismissTooltips();
  if (typeof document === "undefined") return;
  document.dispatchEvent(
    new KeyboardEvent("keydown", {
      bubbles: true,
      cancelable: true,
      key: "Escape",
    }),
  );
}

const visuallyHiddenStyle: CSSProperties = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: 1,
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: 1,
};

export function VisuallyHidden({
  style,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return <span {...props} style={{ ...visuallyHiddenStyle, ...style }} />;
}

export const VisuallyHiddenTitle = VisuallyHidden;
export const VisuallyHiddenDescription = VisuallyHidden;

export function isRemoteControlBridgeDisabled(): boolean {
  return (
    typeof localStorage !== "undefined" &&
    localStorage.getItem("codex:disable-remote-control-bridge") === "true"
  );
}
