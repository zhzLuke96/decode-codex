// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Parameter schemas for handoff_thread and get_handoff_status tools.

import { z } from "zod";
import { MAX_HANDOFF_STATUS_WAIT_MS } from "./thread-handoff-tool-definitions";

export const handoffThreadParamsSchema = z.object({
  threadId: z.string().min(1),
  destinationHostId: z.string().min(1).optional(),
  followUpPrompt: z.string().trim().min(1).optional(),
});

export const getHandoffStatusParamsSchema = z.object({
  operationId: z.string().min(1),
  afterRevision: z.number().int().min(0).optional(),
  waitMs: z.number().int().min(0).max(MAX_HANDOFF_STATUS_WAIT_MS).optional(),
});
