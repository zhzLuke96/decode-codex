// Restored from ref/webview/assets/build-start-conversation-params-D8aKUHyS.js
import { buildPermissionOverridesForAgentMode } from "../boundaries/src-l0hb-mz-p";
type FileAttachment = {
  label?: string | null;
  path?: string | null;
  fsPath?: string | null;
  startLine?: number | null;
  endLine?: number | null;
  [key: string]: unknown;
};
type PermissionOverrides = {
  approvalsReviewer?: unknown;
  activePermissionProfile?: {
    id: string;
    extends: null;
  };
  runtimeWorkspaceRoots?: string[];
  [key: string]: unknown;
};
type BuildStartConversationParamsOptions = {
  agentMode: string;
  permissionProfileId?: string | null;
  shouldSendPermissionOverrides?: boolean;
  workspaceRoots: string[];
  config?: unknown;
  configOverrides?: unknown;
  input: unknown;
  commentAttachments: unknown;
  collaborationMode: unknown;
  responsesapiClientMetadata?: unknown;
  serviceTier: unknown;
  cwd: string | null;
  fileAttachments: FileAttachment[];
  addedFiles: FileAttachment[];
  memoryPreferences?: unknown;
  threadSource?: unknown;
  threadStartKind?: unknown;
  workspaceKind?: "project" | "projectless" | string;
  projectlessOutputDirectory?: string | null;
  projectAssignment?: unknown;
  additionalDeveloperInstructions?: unknown;
};
export function buildStartConversationParams({
  agentMode,
  permissionProfileId,
  shouldSendPermissionOverrides,
  workspaceRoots,
  config,
  configOverrides,
  input,
  commentAttachments,
  collaborationMode,
  responsesapiClientMetadata,
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
  additionalDeveloperInstructions,
}: BuildStartConversationParamsOptions) {
  if (workspaceKind === "projectless" && projectlessOutputDirectory == null) {
    throw Error("Projectless conversations require an output directory");
  }
  const attachments = uniqueAttachmentsByLocation([
    ...fileAttachments,
    ...addedFiles,
  ]);
  const permissions =
    shouldSendPermissionOverrides === false
      ? null
      : (buildPermissionOverridesForAgentMode(
          agentMode,
          workspaceRoots,
          config,
        ) as PermissionOverrides | null | undefined);
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
    ...(responsesapiClientMetadata === undefined
      ? {}
      : {
          responsesapiClientMetadata,
        }),
    serviceTier,
    ...(permissions == null
      ? {
          useAppServerPermissionDefault: true,
        }
      : {
          permissions,
          approvalsReviewer: permissions.approvalsReviewer,
        }),
    cwd,
    attachments,
    workspaceKind,
    ...(projectAssignment === undefined
      ? {}
      : {
          projectAssignment,
        }),
    ...(threadSource === undefined
      ? {}
      : {
          threadSource,
        }),
    ...(threadStartKind === undefined
      ? {}
      : {
          threadStartKind,
        }),
    ...(configOverrides === undefined
      ? {}
      : {
          config: configOverrides,
        }),
    ...(workspaceKind === "projectless"
      ? {
          projectlessOutputDirectory,
        }
      : {}),
    ...(memoryPreferences === undefined
      ? {}
      : {
          memoryPreferences,
        }),
    ...(additionalDeveloperInstructions === undefined
      ? {}
      : {
          additionalDeveloperInstructions,
        }),
  };
}
function uniqueAttachmentsByLocation(
  attachments: FileAttachment[],
): FileAttachment[] {
  const seen = new Set<string>();
  const uniqueAttachments: FileAttachment[] = [];
  for (const attachment of attachments) {
    const key = JSON.stringify([
      attachment.label,
      attachment.path,
      attachment.fsPath,
      attachment.startLine,
      attachment.endLine,
    ]);
    if (!seen.has(key)) {
      seen.add(key);
      uniqueAttachments.push(attachment);
    }
  }
  return uniqueAttachments;
}
