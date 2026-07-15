// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Display and fallback helpers for MCP tool activity and approval review UI.

import * as React from "react";
import {
  appStoreScope,
  createScopedAtom,
} from "../runtime/onboarding-scope-runtime";
import { classNames } from "../utils/class-names";
import { isCodexAppsServer } from "./codex-apps-server";
import { stableHashSegment } from "./mcp-app-sandbox-runtime";

export function isDilServer(server: string | null | undefined): boolean {
  return isCodexAppsServer(server) || server === "dil" || server === "openai";
}

export function isPlatform(platform: string): boolean {
  if (platform === "electron") return true;
  if (typeof navigator === "undefined") return false;
  return navigator.userAgent.toLowerCase().includes(platform.toLowerCase());
}

export function resolvePluginToolDisplay({
  mcpAppResourceUri,
  pluginId,
  plugins,
}: {
  mcpAppResourceUri?: string | null;
  pluginId?: string | null;
  plugins?: unknown[] | null;
  serverName?: string | null;
}): { alt: string; logoDarkUrl?: string | null; logoUrl?: string | null } | null {
  if (pluginId == null) return null;
  const plugin = (plugins ?? []).find((item) => {
    const record = item as Record<string, unknown> | null;
    return (
      record?.id === pluginId ||
      record?.name === pluginId ||
      record?.slug === pluginId
    );
  }) as Record<string, unknown> | undefined;
  if (plugin == null) return null;
  const name =
    stringField(plugin, "displayName") ??
    stringField(plugin, "name") ??
    stringField(plugin, "title") ??
    pluginId;
  const logoUrl =
    stringField(plugin, "logoUrl") ??
    stringField(plugin, "iconUrl") ??
    stringField(plugin, "icon") ??
    resourceMatchedLogo(plugin, mcpAppResourceUri);
  return {
    alt: name,
    logoDarkUrl: stringField(plugin, "logoDarkUrl"),
    logoUrl,
  };
}

export function resolveToolActivityAppDisplay({
  item,
}: {
  item: { invocation: { arguments?: unknown; server: string; tool: string } };
  platform?: string;
}): {
  groupKey?: string;
  logoUrl?: string | null;
  name: string;
  nativeAppReference?: unknown;
  usesBrowserIcon?: boolean;
} | null {
  const server = item.invocation.server;
  const tool = item.invocation.tool;
  if (server === "node_repl") return { name: "Node REPL" };
  if (server.includes("browser") || tool.includes("browser")) {
    return { name: "Browser", usesBrowserIcon: true };
  }
  if (server.includes("computer") || tool.includes("computer")) {
    return { groupKey: "computer-use", name: "Computer use" };
  }
  const nativeAppReference = isPlainRecord(item.invocation.arguments)
    ? (item.invocation.arguments.appPath ??
      item.invocation.arguments.bundleId ??
      item.invocation.arguments.app)
    : null;
  return nativeAppReference == null
    ? null
    : { name: String(nativeAppReference), nativeAppReference };
}

export function useNativeDesktopAppMetadata(_reference: unknown): null {
  return null;
}

export function selectMcpToolResult({
  isCodexAppsServer: codexAppsServer,
  toolResult,
}: {
  isCodexAppsServer: boolean;
  toolResult: unknown;
}): unknown {
  if (!codexAppsServer || !isPlainRecord(toolResult)) return toolResult;
  const structuredContent = toolResult.structuredContent;
  if (!isPlainRecord(structuredContent)) return toolResult;
  return {
    _meta: structuredContent.meta ?? toolResult._meta ?? null,
    content: structuredContent.content ?? toolResult.content,
    structuredContent:
      structuredContent.structuredContent ?? toolResult.structuredContent,
  };
}

export function extractToolResponseMetadata({
  toolResult,
}: {
  toolResult: unknown;
}): unknown {
  return isPlainRecord(toolResult) ? (toolResult._meta ?? null) : null;
}

export const conversationCwdFamily = createScopedAtom(
  appStoreScope,
  () => null as string | null,
);

export function useComposerMessageSetter(_conversationId?: string | null) {
  return React.useMemo(() => {
    const setComposerMessage = (() => {}) as ((message: unknown) => void) & {
      actions: { enqueue: (message: unknown) => void };
    };
    setComposerMessage.actions = { enqueue: () => {} };
    return setComposerMessage;
  }, []);
}

export function usePendingWorktreeController(): {
  createPendingWorktree: (options?: unknown) => Promise<string>;
} {
  return React.useMemo(
    () => ({
      createPendingWorktree: async () =>
        `pending-${stableHashSegment(String(Date.now()))}`,
    }),
    [],
  );
}

export function Callout({
  children,
  className,
  level = "info",
}: {
  children?: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  level?: "danger" | "info" | "warning" | string;
}) {
  const levelClass =
    level === "danger"
      ? "border-token-border-xheavy bg-token-surface-error text-token-text-primary"
      : level === "warning"
        ? "border-token-border-xheavy bg-token-surface-warning text-token-text-primary"
        : "border-token-border-light bg-token-surface-secondary text-token-text-primary";
  return (
    <div
      className={classNames("rounded-lg border px-3 py-2", levelClass, className)}
    >
      {children}
    </div>
  );
}

export function AutomaticApprovalReviewIndicator() {
  return (
    <span
      aria-label="Auto-review"
      className="inline-flex size-1.5 shrink-0 rounded-full bg-token-text-tertiary"
    />
  );
}

export function AutomaticApprovalReviews({
  className,
  reviews,
}: {
  className?: string;
  isExpandable?: boolean;
  reviews?: readonly unknown[] | null;
}) {
  if (reviews == null || reviews.length === 0) return null;
  return (
    <div
      className={classNames("flex flex-col gap-1 py-2 text-size-chat-sm", className)}
    >
      {reviews.map((review, index) => {
        const record = isPlainRecord(review) ? review : {};
        const status = stringField(record, "status") ?? "reviewed";
        const rationale = stringField(record, "rationale");
        return (
          <div
            key={index}
            className="rounded-md border border-token-border-light px-2 py-1 text-token-text-secondary"
          >
            <div className="font-medium text-token-text-primary">{status}</div>
            {rationale == null ? null : <div>{rationale}</div>}
          </div>
        );
      })}
    </div>
  );
}

function isPlainRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null && !Array.isArray(value);
}

function stringField(
  record: Record<string, unknown>,
  field: string,
): string | null {
  const value = record[field];
  return typeof value === "string" && value.trim().length > 0 ? value : null;
}

function resourceMatchedLogo(
  plugin: Record<string, unknown>,
  resourceUri?: string | null,
): string | null {
  if (resourceUri == null) return null;
  const apps = plugin.apps;
  if (!Array.isArray(apps)) return null;
  const match = apps.find((app) => {
    if (!isPlainRecord(app)) return false;
    return Object.values(app).some((value) => value === resourceUri);
  });
  return isPlainRecord(match)
    ? (stringField(match, "logoUrl") ?? stringField(match, "iconUrl"))
    : null;
}
