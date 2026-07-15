// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js
// Analytics events for Google Workspace resource interactions.

import type { ProductLogger } from "../../analytics/product-logger";
import type {
  GoogleWorkspaceAnalyticsContext,
  GoogleWorkspaceResourceKind,
} from "./types";
import { getGoogleWorkspaceResourceKindProto } from "./target";

export const analyticsClickAction = {
  CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_ACTION_UNSPECIFIED:
    "CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_ACTION_UNSPECIFIED",
  CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_ACTION_OPEN_EXISTING_RESOURCE:
    "CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_ACTION_OPEN_EXISTING_RESOURCE",
  CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_ACTION_UPLOAD_LOCAL_FILE:
    "CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_ACTION_UPLOAD_LOCAL_FILE",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export const analyticsClickSource = {
  CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_UNSPECIFIED:
    "CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_UNSPECIFIED",
  CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_END_RESOURCE_CARD:
    "CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_END_RESOURCE_CARD",
  CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_END_RESOURCE_EXPORT_MENU:
    "CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_END_RESOURCE_EXPORT_MENU",
  CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_ARTIFACT_PREVIEW_EXPORT_MENU:
    "CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_ARTIFACT_PREVIEW_EXPORT_MENU",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

const googleWorkspaceResourceClickedEvent = {
  $type: "protobuf_analytics_events.v1.CodexGoogleWorkspaceResourceClicked",
};

export function trackGoogleWorkspaceResourceClick({
  clickAction,
  clickSource,
  context,
  productLogger,
  resourceKind,
}: {
  clickAction: string;
  clickSource: string;
  context: GoogleWorkspaceAnalyticsContext;
  productLogger: ProductLogger;
  resourceKind: GoogleWorkspaceResourceKind | "drive";
}): void {
  if (resourceKind === "drive") return;
  productLogger.logProductEvent(googleWorkspaceResourceClickedEvent, {
    threadId: context.threadId ?? undefined,
    turnId: context.turnId ?? undefined,
    inputMessageId: context.inputMessageId ?? undefined,
    messageId: context.messageId ?? undefined,
    resourceKind: getGoogleWorkspaceResourceKindProto(resourceKind),
    clickAction,
    clickSource,
  });
}
