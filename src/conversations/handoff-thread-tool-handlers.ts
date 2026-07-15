// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Backend handlers for the handoff_thread and get_handoff_status MCP tools.

import {
  GET_HANDOFF_STATUS_TOOL_NAME,
  HANDOFF_THREAD_TOOL_NAME,
} from "./codex-app-tool-names";
import { getAvailableHandoffHosts } from "./available-handoff-hosts";
import { interruptSourceThreadIfRunning } from "./interrupt-source-thread";
import {
  getHandoffOperationStatus,
  setHandoffOperationStatus,
  waitForHandoffOperationStatus,
} from "./handoff-operation-status-store";
import {
  toHandoffStatusPayload,
  wrapHandoffToolResult,
} from "./thread-handoff-progress";
import {
  buildToolErrorResult,
  evaluateFeatureGate,
  isConversationRunning,
  normalizeThreadId,
} from "../boundaries/onboarding-commons-externals.facade";
import { appLogger as logger, serializeError } from "../runtime/app-logger";
import {
  getHandoffStatusParamsSchema,
  handoffThreadParamsSchema,
} from "./handoff-thread-tool-params";
import { loadHandoffContext } from "./handoff-thread-context";
import { planCrossHostHandoff } from "./handoff-thread-cross-host-plan";
import { planLocalHandoff } from "./handoff-thread-local-plan";
import { startHandoff } from "./handoff-thread-runner";
import {
  CROSS_HOST_HANDOFF_FEATURE_GATE,
  type AppScope,
  type HandleHandoffThreadOptions,
  type ToolResult,
} from "./handoff-thread-types";

export {
  getHandoffStatusParamsSchema,
  handoffThreadParamsSchema,
} from "./handoff-thread-tool-params";
export { transferBrowserState } from "./handoff-thread-local-plan";

export async function handleHandoffThread({
  scope,
  appServerRegistry,
  argumentsValue,
  callId,
  callingThreadId,
  crossHostHandoffEnabled = evaluateFeatureGate(
    scope,
    CROSS_HOST_HANDOFF_FEATURE_GATE,
  ),
  queryClient,
}: HandleHandoffThreadOptions): Promise<ToolResult> {
  const parsed = handoffThreadParamsSchema.safeParse(argumentsValue);
  if (!parsed.success) {
    return buildToolErrorResult(
      `${HANDOFF_THREAD_TOOL_NAME} received invalid arguments.`,
    );
  }
  const targetThreadId = normalizeThreadId(parsed.data.threadId);
  if (targetThreadId === callingThreadId) {
    return buildToolErrorResult(
      "A thread cannot hand itself off. Choose another thread.",
    );
  }
  try {
    const operationId = callId;
    const existingStatus = getHandoffOperationStatus(scope, operationId);
    if (existingStatus != null) {
      return wrapHandoffToolResult(toHandoffStatusPayload(existingStatus));
    }
    const hosts = getAvailableHandoffHosts(scope);
    const context = await loadHandoffContext({
      scope,
      appServerRegistry,
      operationId,
      hosts,
      queryClient,
      threadId: targetThreadId,
    });
    const destinationHost =
      parsed.data.destinationHostId == null
        ? context.hostConfig
        : hosts.find((host) => host.id === parsed.data.destinationHostId);
    if (destinationHost == null) {
      throw Error(
        `Host ${parsed.data.destinationHostId} is not available for thread handoff.`,
      );
    }
    if (
      destinationHost.id !== context.hostConfig.id &&
      !crossHostHandoffEnabled
    ) {
      throw Error("Cross-host thread handoff is not enabled.");
    }
    await interruptSourceThreadIfRunning({
      conversationId: targetThreadId,
      sourceThreadRunning: isConversationRunning(context.conversation),
    });
    const plan =
      destinationHost.id === context.hostConfig.id
        ? await planLocalHandoff(context)
        : await planCrossHostHandoff(context, destinationHost);
    setHandoffOperationStatus(scope, operationId, plan.progress);
    startHandoff({
      callingThreadId,
      context,
      destinationHostId: plan.destinationHostId,
      followUpPrompt: parsed.data.followUpPrompt,
      run: plan.run,
    });
    return wrapHandoffToolResult(
      toHandoffStatusPayload(
        getHandoffOperationStatus(scope, operationId) ?? plan.progress,
      ),
    );
  } catch (error) {
    logger.warning("Thread handoff dynamic tool failed: {}", {
      sensitive: { error: serializeError(error) },
      safe: { threadId: targetThreadId },
    });
    return buildToolErrorResult(
      error instanceof Error ? error.message : "Thread handoff failed.",
    );
  }
}

export async function handleGetHandoffStatus({
  scope,
  argumentsValue,
}: {
  scope: AppScope;
  argumentsValue: unknown;
}): Promise<ToolResult> {
  const parsed = getHandoffStatusParamsSchema.safeParse(argumentsValue);
  if (!parsed.success) {
    return buildToolErrorResult(
      `${GET_HANDOFF_STATUS_TOOL_NAME} received invalid arguments.`,
    );
  }
  const state = await waitForHandoffOperationStatus({
    afterRevision: parsed.data.afterRevision ?? null,
    scope,
    operationId: parsed.data.operationId,
    waitMs: parsed.data.waitMs ?? 0,
  });
  return state == null
    ? buildToolErrorResult(
        `No thread handoff operation found for operationId ${parsed.data.operationId}.`,
      )
    : wrapHandoffToolResult(toHandoffStatusPayload(state));
}
