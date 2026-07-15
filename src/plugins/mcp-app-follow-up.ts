// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Helpers for the follow-up messages an MCP app can request: extracting prompt
// text / image attachments from tool content, and starting either a thread or a
// pending worktree to run the follow-up prompt.

import {
  buildThreadPermissions,
  buildWorktreeLabel,
  readPersistedRecord,
  resolveProjectlessWorkspace,
  resolveServiceTier,
  sendHostRequest,
  serializeConfig,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  createMcpAppError,
  MCP_APP_DEFAULT_ERROR_CODE,
} from "./mcp-app-errors";
import { imageContentSchema, textContentSchema } from "./mcp-app-schemas";

const EMPTY_ATTACHMENTS: never[] = [];

export function extractFollowUpText(
  content: unknown[] | undefined,
): string | null {
  const texts =
    content
      ?.map((block) => textContentSchema.safeParse(block))
      .flatMap((parsed) => (parsed.success ? [parsed.data.text.trim()] : []))
      .filter((text) => text.length > 0) ?? [];
  return texts.length > 0 ? texts.join("\n\n") : null;
}

export function extractFollowUpImages(
  content: unknown[] | undefined,
): { src: string }[] {
  return (
    content
      ?.map((block) => imageContentSchema.safeParse(block))
      .flatMap((parsed) =>
        parsed.success
          ? [
              {
                src: `data:${parsed.data.mimeType};base64,${parsed.data.data}`,
              },
            ]
          : [],
      ) ?? []
  );
}

export async function startThreadForFollowUp({
  hostId,
  prompt,
  projectRoot,
  scope,
}: {
  hostId: string;
  prompt: string;
  projectRoot: string;
  scope: unknown;
}): Promise<unknown> {
  const isProjectless = projectRoot === "~";
  const workspace = isProjectless
    ? await resolveProjectlessWorkspace(["~"], { prompt })
    : {
        cwd: projectRoot,
        projectlessOutputDirectory: null,
        workspaceRoots: [projectRoot],
      };
  if (workspace.cwd == null)
    throw createMcpAppError("Missing project root", MCP_APP_DEFAULT_ERROR_CODE);
  if (isProjectless && workspace.projectlessOutputDirectory == null)
    throw createMcpAppError(
      "Missing projectless thread output directory",
      MCP_APP_DEFAULT_ERROR_CODE,
    );

  const { config } = await sendHostRequest("read-config-for-host", {
    hostId,
    includeLayers: false,
    cwd: workspace.cwd,
  });
  const permissions = buildThreadPermissions(
    readPersistedRecord("agent-mode-by-host-id", {})[hostId] ?? "auto",
    workspace.workspaceRoots,
    config,
  );

  return sendHostRequest("start-conversation", {
    hostId,
    input: [{ type: "text", text: prompt, text_elements: [] }],
    cwd: workspace.cwd,
    workspaceRoots: workspace.workspaceRoots,
    collaborationMode: null,
    serviceTier: await resolveServiceTier(scope, hostId, null),
    permissions,
    approvalsReviewer: permissions.approvalsReviewer,
    ...(isProjectless
      ? {
          workspaceKind: "projectless",
          projectlessOutputDirectory: workspace.projectlessOutputDirectory,
        }
      : { workspaceKind: "project" }),
  });
}

export async function createWorktreeForFollowUp({
  createPendingWorktree,
  hostId,
  prompt,
  projectRoot,
  scope,
}: {
  createPendingWorktree: (params: unknown) => unknown;
  hostId: string;
  prompt: string;
  projectRoot: string;
  scope: unknown;
}): Promise<unknown> {
  if (projectRoot === "~")
    throw createMcpAppError("Missing project root", MCP_APP_DEFAULT_ERROR_CODE);

  const { config } = await sendHostRequest("read-config-for-host", {
    hostId,
    includeLayers: false,
    cwd: projectRoot,
  });
  const input = [{ type: "text", text: prompt, text_elements: [] }];
  const startConversationParamsInput = {
    input,
    workspaceRoots: [projectRoot],
    cwd: projectRoot,
    fileAttachments: EMPTY_ATTACHMENTS,
    addedFiles: EMPTY_ATTACHMENTS,
    agentMode:
      readPersistedRecord("agent-mode-by-host-id", {})[hostId] ?? "auto",
    shouldSendPermissionOverrides: true,
    model: null,
    serviceTier: await resolveServiceTier(scope, hostId, null),
    reasoningEffort: null,
    collaborationMode: null,
    config: serializeConfig(config),
    workspaceKind: "project",
  };

  return createPendingWorktree({
    hostId,
    label: buildWorktreeLabel(input),
    sourceWorkspaceRoot: projectRoot,
    startingState: { type: "working-tree" },
    localEnvironmentConfigPath: null,
    launchMode: "start-conversation",
    prompt,
    startConversationParamsInput,
    sourceConversationId: null,
    sourceCollaborationMode: null,
  });
}
