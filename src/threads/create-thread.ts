// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Starts a new Codex thread for a project / remote-project / projectless target,
// creating a pending worktree first when the target environment is a worktree.
import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import { vscodeApiN as requestHostResource } from "../boundaries/vscode-api";
import { normalizeFilesystemPath } from "../boundaries/rpc.facade";
import {
  LOCAL_HOST_ID,
  agentModeFromPermissions,
  buildDelegationInput,
  buildProjectAssignment,
  buildThreadPermissions,
  getRpcClient,
  getServiceTierForModel,
  hostConfigSignal,
  labelFromConversationInput,
  mergeRuntimeWorkspaceRoots,
  mergeSandboxPolicyRoots,
  parseConversationId,
  readHostConfigValue,
  resolveProjectContext,
  resolveProjectlessThreadContext,
  sanitizeThreadConfig,
  threadCwdSignal,
  threadHostIdSignal,
  threadPermissionsSignal,
} from "../boundaries/onboarding-commons-externals.facade";
import { createPendingWorktreeInDesktop } from "./pending-worktree-store/pending-worktree-desktop";

interface AppScope {
  get(signal: unknown, key?: string): unknown;
}

type ThinkingEffort = string | null;

interface CollaborationMode {
  mode: "default";
  settings: {
    model: string;
    reasoning_effort: string;
    developer_instructions: null;
  };
}

interface PermissionSelection {
  agentMode: string;
  permissions: any;
  permissionProfileId: string | null;
  sourceCwd: unknown;
}

type CreateThreadTarget =
  | {
      type: "project";
      projectId: string;
      environment?: { type: string; startingState?: unknown };
    }
  | {
      type: "remoteProject";
      projectId: string;
      hostId: string;
      path: string;
      environment?: { type: string; startingState?: unknown };
    }
  | {
      type: "projectless";
      directoryName?: string;
      environment?: { type: string; startingState?: unknown };
    };

interface CreateThreadInput {
  config?: unknown;
  model: string | null;
  prompt: string;
  scope: AppScope;
  sourceThreadId?: string | null;
  target: CreateThreadTarget;
  thinking?: ThinkingEffort;
}

export function initCreateThreadChunk(): void {}

export async function createThread({
  config,
  model,
  prompt,
  scope,
  sourceThreadId,
  target,
  thinking,
}: CreateThreadInput) {
  if (config != null && sourceThreadId != null) {
    throw Error(
      "createThread config is not supported for delegated thread creation",
    );
  }
  if (
    target.type !== "projectless" &&
    (target as { environment?: { type?: string } }).environment?.type ===
      "worktree"
  ) {
    let projectPath: string;
    let projectAssignment: unknown;
    if (target.type === "project") {
      const projectContext = await resolveProjectContext({
        projectId: target.projectId,
        prompt,
        validateProjectId: true,
      });
      if (projectContext?.projectlessOutputDirectory != null) {
        throw Error(
          "Worktree threads require a project with exactly one directory",
        );
      }
      projectPath = projectContext?.cwd ?? target.projectId;
      projectAssignment = buildProjectAssignment({
        type: "assignment",
        assignment: projectContext?.projectAssignment,
        executionHostId: LOCAL_HOST_ID,
      });
    } else {
      projectPath = target.path;
      const { roots } = await requestHostResource("workspace-root-options", {
        params: { hostId: target.hostId },
      });
      if (!roots.includes(projectPath)) {
        throw Error(
          `Unknown projectId: ${projectPath}\nSaved projectIds:\n${roots.join("\n")}`,
        );
      }
      projectAssignment = buildProjectAssignment({
        type: "remote-project",
        projectId: target.projectId,
        hostId: target.hostId,
        path: target.path,
      });
    }
    return createWorktreeThread({
      hostId: target.type === "remoteProject" ? target.hostId : LOCAL_HOST_ID,
      model,
      projectAssignment,
      projectPath,
      prompt,
      scope,
      sourceThreadId,
      startingState: (target as { environment?: { startingState?: unknown } })
        .environment?.startingState,
      thinking,
    });
  }
  return createThreadInPlace({
    config,
    model,
    prompt,
    scope,
    sourceThreadId,
    target,
    thinking,
  });
}

async function createThreadInPlace({
  config,
  model,
  prompt,
  scope,
  sourceThreadId,
  target,
  thinking,
}: CreateThreadInput) {
  let cwd: string;
  let workspaceKind: "project" | "projectless";
  let workspaceRoots: string[];
  let projectlessOutputDirectory: unknown;
  let projectAssignment: unknown;
  let hostId: string = LOCAL_HOST_ID;
  switch (target.type) {
    case "project": {
      const projectContext = await resolveProjectContext({
        projectId: target.projectId,
        prompt,
        validateProjectId: true,
      });
      if (projectContext == null) {
        cwd = target.projectId;
        workspaceRoots = [target.projectId];
      } else {
        cwd = projectContext.cwd;
        workspaceRoots = projectContext.workspaceRoots;
        projectlessOutputDirectory = projectContext.projectlessOutputDirectory;
        projectAssignment = projectContext.projectAssignment;
      }
      workspaceKind = "project";
      break;
    }
    case "remoteProject":
      hostId = target.hostId;
      cwd = target.path;
      workspaceRoots = [target.path];
      workspaceKind = "project";
      projectAssignment = {
        projectKind: "remote",
        projectId: target.projectId,
        path: target.path,
        hostId: target.hostId,
        pendingCoreUpdate: false,
      };
      break;
    case "projectless": {
      const projectlessContext = await resolveProjectlessThreadContext(["~"], {
        directoryName: target.directoryName,
        prompt,
      });
      if (projectlessContext.cwd == null) {
        throw Error("Missing projectless thread cwd");
      }
      cwd = projectlessContext.cwd;
      workspaceKind = "projectless";
      workspaceRoots = projectlessContext.workspaceRoots;
      projectlessOutputDirectory =
        projectlessContext.projectlessOutputDirectory;
      break;
    }
  }
  const permissions = await resolveThreadPermissions(
    hostId,
    cwd,
    workspaceRoots,
    resolveSourcePermissionSelection(scope, sourceThreadId, hostId),
  );
  const textInput = { type: "text", text: prompt, text_elements: [] };
  const collaborationMode = buildCollaborationMode(model, thinking);
  const threadId = await sendAppServerRequest("start-conversation", {
    hostId,
    input:
      sourceThreadId == null
        ? [textInput]
        : buildDelegationInput({ sourceThreadId, input: prompt }),
    cwd,
    workspaceRoots,
    collaborationMode,
    serviceTier: await getServiceTierForModel(
      scope,
      hostId,
      collaborationMode?.settings.model ?? null,
    ),
    threadSource: sourceThreadId == null ? "user" : "subagent",
    permissions,
    approvalsReviewer: permissions.approvalsReviewer,
    config,
    projectAssignment,
    workspaceKind,
    projectlessOutputDirectory,
  });
  if (sourceThreadId != null) {
    parseConversationId(sourceThreadId);
  }
  return {
    threadId,
    ...(workspaceKind === "projectless" ? { projectlessOutputDirectory } : {}),
  };
}

async function createWorktreeThread({
  hostId,
  model,
  projectAssignment,
  projectPath,
  prompt,
  scope,
  sourceThreadId,
  startingState,
  thinking,
}: {
  hostId: string;
  model: string | null;
  projectAssignment: unknown;
  projectPath: string;
  prompt: string;
  scope: AppScope;
  sourceThreadId?: string | null;
  startingState?: unknown;
  thinking?: ThinkingEffort;
}) {
  const baseInput = [{ type: "text", text: prompt, text_elements: [] }];
  const input =
    sourceThreadId == null
      ? baseInput
      : buildDelegationInput({ sourceThreadId, input: prompt });
  const [startConversationParamsInput, resolvedStartingState] =
    await Promise.all([
      buildWorktreeStartConversationParams({
        input,
        hostId,
        model,
        projectAssignment,
        projectPath,
        scope,
        sourcePermissionSelection: resolveSourcePermissionSelection(
          scope,
          sourceThreadId,
          hostId,
        ),
        threadSource: sourceThreadId == null ? "user" : "subagent",
        thinking,
      }),
      startingState ?? resolveWorktreeStartingState(scope, hostId, projectPath),
    ]);
  return {
    pendingWorktreeId: createPendingWorktreeInDesktop({
      hostId,
      label: labelFromConversationInput(baseInput),
      sourceWorkspaceRoot: projectPath,
      startingState: resolvedStartingState,
      localEnvironmentConfigPath: null,
      launchMode: "start-conversation",
      prompt,
      startConversationParamsInput,
      sourceConversationId: null,
      sourceCollaborationMode: null,
      navigateOnSuccess: false,
    }),
  };
}

async function resolveWorktreeStartingState(
  scope: AppScope,
  hostId: string,
  projectPath: string,
) {
  const hostConfig = scope.get(hostConfigSignal, hostId);
  const stableMetadata = await getRpcClient("git").request({
    method: "stable-metadata",
    params: {
      cwd: normalizeFilesystemPath(projectPath),
      hostConfig,
      operationSource: "worktree_pending_create",
    },
  });
  if (stableMetadata == null) {
    return { type: "branch", branchName: "main" };
  }
  const { branch } = await getRpcClient("git").request({
    method: "default-branch",
    params: {
      root: stableMetadata.root,
      hostConfig,
      operationSource: "worktree_pending_create",
    },
  });
  return { type: "branch", branchName: branch ?? "main" };
}

async function resolveThreadPermissions(
  hostId: string,
  cwd: string,
  workspaceRoots: string[],
  sourcePermissionSelection: PermissionSelection | null,
) {
  const { config } = await sendAppServerRequest("read-config-for-host", {
    hostId,
    includeLayers: false,
    cwd,
  });
  const normalizedSelection = normalizePermissionSelection(
    cwd,
    sourcePermissionSelection,
  );
  if (normalizedSelection?.sourceCwd === cwd) {
    return applyRuntimeWorkspaceRoots(
      normalizedSelection.permissions,
      workspaceRoots,
    );
  }
  const permissions = buildThreadPermissions(
    resolveAgentMode(hostId, normalizedSelection),
    workspaceRoots,
    config,
  );
  const permissionProfileId = normalizedSelection?.permissionProfileId;
  if (permissionProfileId != null) {
    permissions.activePermissionProfile = {
      extends: null,
      id: permissionProfileId,
    };
    permissions.runtimeWorkspaceRoots = workspaceRoots;
  }
  return permissions;
}

async function buildWorktreeStartConversationParams({
  hostId,
  input,
  model,
  projectAssignment,
  projectPath,
  scope,
  sourcePermissionSelection,
  threadSource,
  thinking,
}: {
  hostId: string;
  input: unknown;
  model: string | null;
  projectAssignment: unknown;
  projectPath: string;
  scope: AppScope;
  sourcePermissionSelection: PermissionSelection | null;
  threadSource: string;
  thinking?: ThinkingEffort;
}) {
  const { config } = await sendAppServerRequest("read-config-for-host", {
    hostId,
    includeLayers: false,
    cwd: projectPath,
  });
  const collaborationMode = buildCollaborationMode(model, thinking);
  const normalizedSelection = normalizePermissionSelection(
    projectPath,
    sourcePermissionSelection,
  );
  const permissionProfileId = normalizedSelection?.permissionProfileId;
  return {
    input,
    workspaceRoots: [projectPath],
    cwd: projectPath,
    fileAttachments: [],
    addedFiles: [],
    agentMode: resolveAgentMode(hostId, normalizedSelection),
    permissionProfileId: permissionProfileId ?? undefined,
    shouldSendPermissionOverrides: true,
    model: null,
    serviceTier: await getServiceTierForModel(
      scope,
      hostId,
      collaborationMode?.settings.model ?? null,
    ),
    reasoningEffort: null,
    collaborationMode,
    config: sanitizeThreadConfig(config),
    threadSource,
    workspaceKind: "project",
    projectAssignment,
  };
}

function resolveSourcePermissionSelection(
  scope: AppScope,
  sourceThreadId: string | null | undefined,
  hostId: string,
): PermissionSelection | null {
  if (sourceThreadId == null) return null;
  const conversationId = parseConversationId(sourceThreadId);
  if (scope.get(threadHostIdSignal, conversationId) !== hostId) return null;
  const permissions = scope.get(threadPermissionsSignal, conversationId) as any;
  if (permissions == null) return null;
  const agentMode = agentModeFromPermissions(permissions);
  if (agentMode == null) return null;
  return {
    agentMode,
    permissions,
    permissionProfileId: permissions.activePermissionProfile?.id ?? null,
    sourceCwd: scope.get(threadCwdSignal, conversationId),
  };
}

function resolveAgentMode(
  hostId: string,
  selection: PermissionSelection | null,
): string {
  return (
    selection?.agentMode ??
    readHostConfigValue("agent-mode-by-host-id", {})[hostId] ??
    "auto"
  );
}

function normalizePermissionSelection(
  cwd: string,
  selection: PermissionSelection | null,
): PermissionSelection | null {
  if (selection == null) return null;
  const permissionProfileId = selection.permissionProfileId;
  if (selection.sourceCwd === cwd) return selection;
  if (
    selection.agentMode === "custom" ||
    selection.agentMode === "guardian-approvals"
  ) {
    return null;
  }
  return permissionProfileId?.startsWith(":") === true ? selection : null;
}

function applyRuntimeWorkspaceRoots(
  permissions: any,
  workspaceRoots: string[],
) {
  return {
    ...permissions,
    runtimeWorkspaceRoots: mergeRuntimeWorkspaceRoots(
      permissions.runtimeWorkspaceRoots ?? [],
      workspaceRoots,
    ),
    sandboxPolicy: mergeSandboxPolicyRoots(
      permissions.sandboxPolicy,
      workspaceRoots,
    ),
  };
}

function buildCollaborationMode(
  model: string | null,
  thinking: ThinkingEffort | undefined,
): CollaborationMode | null {
  return model == null && thinking == null
    ? null
    : {
        mode: "default",
        settings: {
          model: model ?? "gpt-5.5",
          reasoning_effort: thinking ?? "medium",
          developer_instructions: null,
        },
      };
}
