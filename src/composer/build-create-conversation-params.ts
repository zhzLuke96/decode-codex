// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Build the request payload for creating a new conversation/thread.
import {
  MULTI_AGENT_MODE,
  buildAttachmentsPayload,
  buildThreadPermissions,
  mergeFileAttachments,
} from "../boundaries/onboarding-commons-externals.facade";
import { sendAppServerRequest } from "../runtime/app-server-request";
import { sanitizeThreadConfig } from "../runtime/thread-start-runtime";
import { buildImageInputItems } from "./build-image-input-items";

export interface BuildCreateConversationParamsInput {
  agentMode: string;
  permissionProfileId: string | null;
  shouldSendPermissionOverrides: boolean;
  workspaceRoots: string[];
  config: unknown;
  configOverrides: unknown;
  input: unknown;
  commentAttachments: unknown;
  collaborationMode: unknown;
  serviceTier: string | null;
  cwd: string | null;
  fileAttachments: unknown[];
  addedFiles: unknown[];
  memoryPreferences: unknown;
  threadSource: unknown;
  threadStartKind: unknown;
  workspaceKind?: "project" | "projectless";
  projectlessOutputDirectory?: string | null;
  projectAssignment: unknown;
  baseInstructions: unknown;
  additionalDeveloperInstructions: unknown;
}

export function initBuildCreateConversationParamsChunk(): void {}

export interface BuildCreateConversationParamsFromContextInput {
  context: {
    addedFiles: unknown[];
    appshotContexts?: unknown[];
    commentAttachments: unknown;
    fileAttachments: unknown[];
    imageAttachments: Array<{ src: string; localPath?: string }>;
    mcpAppModelContextAttachments?: Array<{
      imageAttachments: Array<{ src: string; localPath?: string }>;
    }>;
    pastedTextAttachments: unknown[];
    [key: string]: unknown;
  };
  prompt: string;
  workspaceRoots: string[];
  cwd: string;
  hostId: string;
  agentMode: string;
  permissionProfileId: string | null;
  serviceTier: string | null;
  collaborationMode: { settings?: { reasoning_effort?: unknown } } | null;
  memoryPreferences: unknown;
  workspaceKind?: "project" | "projectless";
  projectlessOutputDirectory?: string | null;
  projectAssignment?: unknown;
}

function getDefaultReasoningEffort(config: unknown): unknown {
  return config != null && typeof config === "object"
    ? (config as { model_reasoning_effort?: unknown }).model_reasoning_effort
    : undefined;
}

export async function buildCreateConversationParamsFromContext({
  context,
  prompt,
  workspaceRoots,
  cwd,
  hostId,
  agentMode,
  permissionProfileId,
  serviceTier,
  collaborationMode,
  memoryPreferences,
  workspaceKind = "project",
  projectlessOutputDirectory,
  projectAssignment,
}: BuildCreateConversationParamsFromContextInput) {
  const { config } = await sendAppServerRequest<{ config: unknown }>(
    "read-config-for-host",
    {
      hostId,
      includeLayers: false,
      cwd,
    },
  );
  const sanitizedConfig = sanitizeThreadConfig(config);

  return {
    input: [
      { type: "text", text: prompt, text_elements: [] },
      ...buildImageInputItems(context, hostId !== "local", {
        shouldRestrictRemoteHostImageSize: false,
      }),
    ],
    commentAttachments: context.commentAttachments,
    workspaceRoots,
    cwd,
    fileAttachments: mergeFileAttachments(
      context.fileAttachments,
      context.pastedTextAttachments,
    ),
    addedFiles: context.addedFiles,
    agentMode,
    permissionProfileId,
    shouldSendPermissionOverrides: true,
    model: null,
    serviceTier,
    reasoningEffort:
      collaborationMode?.settings?.reasoning_effort ??
      getDefaultReasoningEffort(sanitizedConfig),
    collaborationMode,
    config: sanitizedConfig,
    configOverrides: undefined,
    memoryPreferences,
    workspaceKind,
    projectAssignment,
    ...(workspaceKind === "projectless" ? { projectlessOutputDirectory } : {}),
  };
}

export function buildCreateConversationParams({
  agentMode,
  permissionProfileId,
  shouldSendPermissionOverrides,
  workspaceRoots,
  config,
  configOverrides,
  input,
  commentAttachments,
  collaborationMode,
  serviceTier,
  cwd,
  fileAttachments,
  addedFiles,
  memoryPreferences,
  threadSource,
  threadStartKind,
  workspaceKind = "project",
  projectlessOutputDirectory,
  projectAssignment,
  baseInstructions,
  additionalDeveloperInstructions,
}: BuildCreateConversationParamsInput) {
  if (workspaceKind === "projectless" && projectlessOutputDirectory == null) {
    throw new Error("Projectless conversations require an output directory");
  }

  const attachments = buildAttachmentsPayload([
    ...fileAttachments,
    ...addedFiles,
  ]);
  const permissions =
    shouldSendPermissionOverrides === false
      ? null
      : buildThreadPermissions(agentMode, workspaceRoots, config);

  if (permissions != null && permissionProfileId != null) {
    permissions.activePermissionProfile = {
      id: permissionProfileId,
      extends: null,
    };
    permissions.runtimeWorkspaceRoots = workspaceRoots;
  }

  return {
    input,
    commentAttachments,
    workspaceRoots,
    collaborationMode,
    multiAgentMode: MULTI_AGENT_MODE,
    serviceTier,
    ...(permissions == null
      ? { useAppServerPermissionDefault: true }
      : {
          permissions,
          approvalsReviewer: permissions.approvalsReviewer,
        }),
    cwd,
    attachments,
    workspaceKind,
    projectAssignment,
    threadSource,
    threadStartKind,
    config: configOverrides,
    ...(workspaceKind === "projectless" ? { projectlessOutputDirectory } : {}),
    memoryPreferences,
    baseInstructions,
    additionalDeveloperInstructions,
  };
}
