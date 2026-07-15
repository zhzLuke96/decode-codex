// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Eval-control "threads.*" actions: create / read / archive background threads.
// These are thin scope-guarded adapters over the shared background-thread
// backend used by the thread-management MCP tools.

import { z } from "zod";
import {
  createBackgroundThread,
  readBackgroundThread,
  setBackgroundThreadArchived,
} from "../../boundaries/onboarding-commons-externals.facade";
import { requireAppScope, type EvalControlContext } from "./app-scope";

export const thinkingLevelSchema = z.enum([
  "low",
  "medium",
  "high",
  "xhigh",
  "max",
  "ultra",
]);

export const createThreadTargetSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("project"),
    projectId: z.string().min(1),
    environment: z.object({ type: z.literal("local") }),
  }),
  z.object({
    type: z.literal("projectless"),
    directoryName: z.string().min(1).optional(),
  }),
]);

export const createThreadActionSchema = z.object({
  type: z.literal("threads.create"),
  prompt: z.string().min(1),
  target: createThreadTargetSchema,
  config: z.record(z.string(), z.unknown()).optional(),
  model: z.string().min(1).optional(),
  thinking: thinkingLevelSchema.optional(),
});

export const readThreadActionSchema = z.object({
  type: z.literal("threads.read"),
  threadId: z.string().min(1),
  cursor: z.string().min(1).optional(),
  limit: z.number().int().min(1).max(10).default(1),
  includeOutputs: z.boolean().default(false),
  maxOutputChars: z.number().int().min(0).max(20000).default(2000),
});

export const setThreadArchivedActionSchema = z.object({
  type: z.literal("threads.set_archived"),
  threadId: z.string().min(1),
  archived: z.boolean(),
});

export type CreateThreadAction = z.infer<typeof createThreadActionSchema>;
export type ReadThreadAction = z.infer<typeof readThreadActionSchema>;
export type SetThreadArchivedAction = z.infer<
  typeof setThreadArchivedActionSchema
>;

export async function runCreateThreadAction(
  action: CreateThreadAction,
  context: EvalControlContext,
): Promise<unknown> {
  return createBackgroundThread({
    config: action.config,
    model: action.model,
    prompt: action.prompt,
    scope: requireAppScope(context),
    target: action.target,
    thinking: action.thinking,
  });
}

export async function runReadThreadAction(
  action: ReadThreadAction,
  context: EvalControlContext,
): Promise<unknown> {
  return readBackgroundThread({
    scope: requireAppScope(context),
    cursor: action.cursor,
    includeOutputs: action.includeOutputs,
    maxOutputCharsPerItem: action.maxOutputChars,
    threadId: action.threadId,
    turnLimit: action.limit,
  });
}

export async function runSetThreadArchivedAction(
  action: SetThreadArchivedAction,
  context: EvalControlContext,
): Promise<unknown> {
  return setBackgroundThreadArchived({
    archived: action.archived,
    scope: requireAppScope(context),
    threadId: action.threadId,
  });
}
