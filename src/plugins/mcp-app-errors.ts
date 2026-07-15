// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Error helpers shared by the MCP app sandbox bridge and tool proxy: building
// JSON-RPC style errors with codes, normalizing unknown thrown values, and
// swallowing best-effort sandbox RPC failures.

import { z } from "zod";
import { logger } from "../boundaries/onboarding-commons-externals.facade";

export const MCP_APP_DEFAULT_ERROR_CODE = -32000;
const MCP_APP_INTERNAL_ERROR_CODE = -32603;

export interface McpAppError extends Error {
  code?: number;
  cause?: unknown;
}

const mcpAppErrorShapeSchema = z
  .object({
    code: z.number().optional(),
    message: z.string().min(1),
  })
  .passthrough();

export function createMcpAppError(
  message: string,
  code?: number,
  cause?: unknown,
): McpAppError {
  const error = new Error(message) as McpAppError;
  error.code = code;
  if (cause !== undefined) error.cause = cause;
  return error;
}

export function normalizeMcpAppError(
  value: unknown,
  fallbackMessage: string,
): McpAppError {
  const parsed = mcpAppErrorShapeSchema.safeParse(value);
  if (parsed.success) {
    return createMcpAppError(
      parsed.data.message,
      parsed.data.code ?? MCP_APP_DEFAULT_ERROR_CODE,
      value,
    );
  }
  if (value instanceof Error && value.message.length > 0) {
    return createMcpAppError(value.message, MCP_APP_DEFAULT_ERROR_CODE, value);
  }
  return createMcpAppError(fallbackMessage, MCP_APP_DEFAULT_ERROR_CODE, value);
}

export function runMcpAppHandler<T>(handler: () => T): T {
  try {
    return handler();
  } catch (error) {
    throw error instanceof Error
      ? createMcpAppError(error.message, MCP_APP_INTERNAL_ERROR_CODE)
      : error;
  }
}

export function swallowMcpAppRpcError(result: unknown): void {
  Promise.resolve(result).catch((error: unknown) => {
    logger.debug("MCP sandbox RPC failed", {
      safe: {},
      sensitive: { error },
    });
  });
}

export function isPlainRecord(
  value: unknown,
): value is Record<string, unknown> {
  return typeof value === "object" && !!value && !Array.isArray(value);
}
