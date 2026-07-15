// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Zod schemas describing the messages exchanged with an MCP app sandbox: tool
// content blocks, proxy requests, display-mode and navigation notifications,
// model-context updates and tool results.

import { z } from "zod";
import {
  MCP_PROGRESS_META_KEY,
  composerAttachmentLayoutValues,
  mcpProgressSchema,
  mcpProgressTokenSchema,
} from "../boundaries/onboarding-commons-externals.facade";

export const structuredContentSchema = z.record(z.string(), z.any());

export const textContentSchema = z
  .object({
    text: z.string(),
    type: z.literal("text"),
  })
  .strip();

export const imageContentSchema = z
  .object({
    data: z.string(),
    mimeType: z.string(),
    type: z.literal("image"),
  })
  .strip();

export const contentBlockSchema = z
  .object({
    type: z.enum(["audio", "image", "resource", "resource_link", "text"]),
  })
  .passthrough();

export const backgroundColorSchema = z.string();

export const displayModeRequestSchema = z.object({
  mode: z.enum(["inline", "fullscreen"]),
});

export const navigationStateSchema = z
  .object({
    canGoBack: z.boolean(),
    canGoForward: z.boolean(),
  })
  .passthrough();

export const proxyRequestSchema = z
  .object({
    method: z.string(),
    params: z.record(z.string(), z.any()).optional(),
  })
  .strip();

export const fileDownloadParamsSchema = z
  .object({
    blob: z.instanceof(Blob),
    name: z.string().trim().min(1),
  })
  .strip();

export const toolCallMetaSchema = z.object({
  [MCP_PROGRESS_META_KEY]: mcpProgressSchema.optional(),
  progressToken: mcpProgressTokenSchema.optional(),
});

export const toolCallParamsSchema = z
  .object({
    name: z.string().min(1),
    arguments: z.record(z.string(), z.any()).optional(),
    _meta: toolCallMetaSchema.optional(),
  })
  .passthrough();

export const resourceReadParamsSchema = z
  .object({
    uri: z.string().min(1),
  })
  .passthrough();

export const intrinsicHeightSchema = z.number().finite().positive();

export const widgetStateSchema = z.record(z.string(), z.any());

export const presentationSchema = z
  .object({
    composerAttachmentLayout: z
      .enum(composerAttachmentLayoutValues as [string, ...string[]])
      .optional(),
    composerLabel: z.string().optional(),
    showInComposer: z.boolean().optional(),
  })
  .strip();

export const modelContextUpdateSchema = z
  .object({
    content: z.array(z.any()).optional(),
    presentation: presentationSchema.optional(),
  })
  .passthrough();

export const toolResultUpdateSchema = z
  .object({
    content: z.array(contentBlockSchema),
    presentation: presentationSchema.optional(),
    structuredContent: structuredContentSchema.optional(),
  })
  .strict();

export const DEFAULT_NAVIGATION_STATE = {
  canGoBack: false,
  canGoForward: false,
} as const;

export function initMcpAppSchemasChunk(): void {
  void navigationStateSchema;
  void DEFAULT_NAVIGATION_STATE;
}

export type McpAppNavigationState = {
  canGoBack: boolean;
  canGoForward: boolean;
};
