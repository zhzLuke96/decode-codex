// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Zod argument schemas and shared defaults for Codex thread-management MCP tools.
import { z as zod } from "zod";

export const INVALID_TOOL_ARGUMENTS_MESSAGE = "received invalid arguments.";
export const DEFAULT_LIST_THREADS_LIMIT = 10;
export const DEFAULT_READ_THREAD_TURN_LIMIT = 1;
export const DEFAULT_READ_THREAD_MAX_OUTPUT_CHARS = 2_000;

export const reasoningEffortEnum = zod.enum([
  "low",
  "medium",
  "high",
  "xhigh",
  "max",
  "ultra",
]);

const worktreeStartingStateSchema = zod.discriminatedUnion("type", [
  zod.object({ type: zod.literal("working-tree") }),
  zod.object({ type: zod.literal("branch"), branchName: zod.string().min(1) }),
]);

const threadEnvironmentSchema = zod.discriminatedUnion("type", [
  zod.object({ type: zod.literal("local") }),
  zod.object({
    type: zod.literal("worktree"),
    startingState: worktreeStartingStateSchema.optional(),
  }),
]);

const createThreadTargetSchema = zod.discriminatedUnion("type", [
  zod.object({
    type: zod.literal("project"),
    projectId: zod.string().min(1),
    environment: threadEnvironmentSchema,
  }),
  zod.object({
    type: zod.literal("projectless"),
    directoryName: zod.string().min(1).optional(),
  }),
]);

const forkEnvironmentSchema = zod.discriminatedUnion("type", [
  zod.object({ type: zod.literal("same-directory") }),
  zod.object({ type: zod.literal("worktree") }),
]);

export const createThreadParamsSchema = zod.object({
  prompt: zod.string().min(1),
  target: createThreadTargetSchema,
  model: zod.string().min(1).optional(),
  thinking: reasoningEffortEnum.optional(),
});

export const forkThreadParamsSchema = zod.object({
  threadId: zod.string().min(1).optional(),
  environment: forkEnvironmentSchema.optional(),
});

export const listProjectsParamsSchema = zod.object({});

export const listThreadsParamsSchema = zod.object({
  query: zod.string().optional(),
  limit: zod.number().int().min(1).max(50).optional(),
});

export const readThreadParamsSchema = zod.object({
  threadId: zod.string().min(1),
  hostId: zod.string().min(1).optional(),
  cursor: zod.string().min(1).optional(),
  turnLimit: zod.number().int().min(1).max(10).optional(),
  includeOutputs: zod.boolean().optional(),
  maxOutputCharsPerItem: zod.number().int().min(0).max(20_000).optional(),
});

export const sendMessageToThreadParamsSchema = zod.object({
  threadId: zod.string().min(1),
  hostId: zod.string().min(1).optional(),
  prompt: zod.string().min(1),
  model: zod.string().min(1).optional(),
  thinking: reasoningEffortEnum.optional(),
});

export const setThreadPinnedParamsSchema = zod.object({
  threadId: zod.string().min(1),
  pinned: zod.boolean(),
});

export const setThreadArchivedParamsSchema = zod.object({
  threadId: zod.string().min(1).optional(),
  archived: zod.boolean(),
});

export const setThreadTitleParamsSchema = zod.object({
  threadId: zod.string().min(1),
  title: zod.string().min(1),
});
