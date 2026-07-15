// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Zod parameter schemas for the Codex app-control thread tools surfaced in the
// local conversation activity stream (localConversation domain).
import { z } from "zod";

export const threadsHandoffTargetSchema = z.object({
  target: z.object({
    type: z.string(),
    environment: z
      .object({
        type: z.string(),
      })
      .optional(),
  }),
});

export const threadsCreateEnvironmentSchema = z.object({
  environment: z
    .object({
      type: z.string(),
    })
    .optional(),
});

export const threadsHandoffStatusParamsSchema = z.object({
  destinationHostId: z.string().min(1).optional(),
  threadId: z.string().min(1),
});

export const threadsOperationParamsSchema = z.object({
  operationId: z.string().min(1),
});

export const threadsThreadIdParamsSchema = z.object({
  threadId: z.string().min(1),
});

export const threadsTargetReferenceSchema = z.union([
  z.object({
    threadId: z.string().min(1),
  }),
  z.object({
    pendingWorktreeId: z.string().min(1),
  }),
]);
