// Restored from ref/webview/assets/avatar-overlay-realtime-voice-button-BtRztXew.js
// avatar-overlay-realtime-voice-button-BtRztXew chunk restored from the Codex webview bundle.
import { permissionRequestModel } from "../../utils/permission-request-model";
import type {
  CompactWaitingRequest,
  CompactWaitingRequestAction,
  IntlShapeLike,
} from "./types";
import {
  countPatchChanges,
  formatToolParamsPreview,
  formatUrlPreview,
  getGenericElicitationOperation,
  getRequestedToolName,
  normalizeConnectorName,
  normalizeText,
  stripEmptyPermissionKinds,
} from "./waiting-request-helpers";
import { waitingRequestMessages } from "./waiting-request-messages";
type WaitingRequestBuildOptions = {
  includeMcpElicitationCancelAction?: boolean;
  planStartCollaborationMode?: unknown;
};
export function buildCompactWaitingRequest(
  request: any,
  intl: IntlShapeLike,
  {
    includeMcpElicitationCancelAction = false,
    planStartCollaborationMode,
  }: WaitingRequestBuildOptions = {},
): CompactWaitingRequest | null {
  switch (request?.type) {
    case "userInput":
      return request.isOnboardingDynamicInput === true
        ? null
        : buildQuestionRequest(request, intl);
    case "approval":
      return request.item.type === "exec"
        ? buildCommandApprovalRequest(request.item, intl)
        : buildPatchApprovalRequest(request.item, intl);
    case "permissionRequest":
      return buildPermissionRequest(request.item, intl);
    case "implementPlan":
      return buildPlanRequest(request, intl, planStartCollaborationMode);
    case "mcpServerElicitation":
      return buildMcpElicitationRequest(
        request,
        intl,
        includeMcpElicitationCancelAction,
      );
    case "optionPicker":
    case "setupCodexContextPicker":
    case "setupCodexStep":
    case undefined:
      return null;
  }
}
function buildQuestionRequest(
  request: any,
  intl: IntlShapeLike,
): CompactWaitingRequest | null {
  const question = request.item.questions[0];
  if (question == null) return null;
  const prompt =
    normalizeText(question.question) ?? normalizeText(question.header);
  return prompt == null || question.options.length === 0
    ? null
    : {
        kind: "question",
        requestId: request.item.requestId,
        title: intl.formatMessage(waitingRequestMessages.askQuestion),
        prompt,
        options: question.options.map((option: any) => ({
          label:
            normalizeText(option.label) ??
            intl.formatMessage(waitingRequestMessages.option),
          description: normalizeText(option.description),
          questionId: question.id,
        })),
      };
}
function buildCommandApprovalRequest(
  item: any,
  intl: IntlShapeLike,
): CompactWaitingRequest | null {
  if (item.type !== "exec") throw Error("Expected exec approval item");
  if (item.approvalRequestId == null) return null;
  const networkHost = normalizeText(item.networkApprovalContext?.host ?? "");
  if (networkHost != null) {
    return {
      kind: "network",
      requestId: item.approvalRequestId,
      operation: intl.formatMessage(waitingRequestMessages.allowNetwork),
      target: networkHost,
      title: intl.formatMessage(waitingRequestMessages.allowNetwork),
      actions: [
        {
          ariaLabel: intl.formatMessage(waitingRequestMessages.allowOnce),
          commandDecision: "accept",
          intent: "command-approval",
          label: intl.formatMessage(waitingRequestMessages.allow),
          tone: "primary",
        },
        {
          commandDecision: "decline",
          intent: "command-approval",
          label: intl.formatMessage(waitingRequestMessages.deny),
          tone: "danger",
        },
      ],
    };
  }
  return {
    kind: "exec",
    requestId: item.approvalRequestId,
    operation: intl.formatMessage(waitingRequestMessages.runCommand),
    summary:
      normalizeText(item.cmd.join(" && ")) ??
      intl.formatMessage(waitingRequestMessages.command),
    title: intl.formatMessage(waitingRequestMessages.reviewCommand),
    actions: [
      {
        commandDecision: "accept",
        intent: "command-approval",
        label: intl.formatMessage(waitingRequestMessages.runOnce),
        tone: "primary",
      },
      {
        commandDecision: "decline",
        intent: "command-approval",
        label: intl.formatMessage(waitingRequestMessages.deny),
        tone: "danger",
      },
    ],
  };
}
function buildPatchApprovalRequest(
  item: any,
  intl: IntlShapeLike,
): CompactWaitingRequest | null {
  if (item.type !== "patch" || item.approvalRequestId == null) return null;
  const changedFiles = Object.entries(item.changes);
  if (changedFiles.length === 0) return null;
  const totals = countPatchChanges(item.changes);
  return {
    kind: "patch",
    requestId: item.approvalRequestId,
    operation: intl.formatMessage(waitingRequestMessages.applyChanges),
    summary:
      changedFiles[0]?.[0] ??
      intl.formatMessage(waitingRequestMessages.oneFileChanged),
    title: intl.formatMessage(waitingRequestMessages.applyChanges),
    files: changedFiles.map(([fileName]) => fileName),
    fileCount: changedFiles.length,
    additions: totals.additions,
    deletions: totals.deletions,
    actions: [
      {
        fileDecision: "accept",
        intent: "file-approval",
        label: intl.formatMessage(waitingRequestMessages.apply),
        tone: "primary",
      },
      {
        intent: "open",
        label: intl.formatMessage(waitingRequestMessages.review),
        tone: "secondary",
      },
    ],
  };
}
function buildPermissionRequest(
  item: any,
  intl: IntlShapeLike,
): CompactWaitingRequest | null {
  const { permissions } = item;
  const permission = permissionRequestModel(permissions)[0];
  if (permission == null) return null;
  let target: string;
  let operation: string;
  if (permission.kind === "network") {
    operation = intl.formatMessage(waitingRequestMessages.networkAccess);
    target = operation;
  } else {
    operation = intl.formatMessage(waitingRequestMessages.fileAccess);
    const firstPath = permission.paths[0] ?? operation;
    const remainingPathCount = Math.max(0, permission.paths.length - 1);
    target =
      remainingPathCount === 0
        ? firstPath
        : `${firstPath} +${remainingPathCount}`;
  }
  return {
    kind: "permission",
    requestId: item.requestId,
    operation,
    target,
    title: operation,
    actions: [
      {
        intent: "permission-response",
        ariaLabel: intl.formatMessage(waitingRequestMessages.allowOnce),
        label: intl.formatMessage(waitingRequestMessages.allow),
        permissionResponse: {
          permissions: stripEmptyPermissionKinds(permissions),
          scope: "turn",
        },
        tone: "primary",
      },
      {
        intent: "permission-response",
        label: intl.formatMessage(waitingRequestMessages.deny),
        permissionResponse: {
          permissions: {},
          scope: "turn",
        },
        tone: "danger",
      },
    ],
  };
}
function buildPlanRequest(
  request: any,
  intl: IntlShapeLike,
  planStartCollaborationMode: unknown,
): CompactWaitingRequest | null {
  const { planContent } = request;
  const summary = normalizeText(
    planContent
      .split(/\r?\n/)
      .map((line: string) => line.replace(/^[-*]\s+\[[ x]\]\s+/i, "").trim())
      .find((line: string) => line.length > 0) ?? "",
  );
  return summary == null
    ? null
    : {
        kind: "plan",
        operation: intl.formatMessage(waitingRequestMessages.plan),
        planContent,
        summary,
        title: intl.formatMessage(waitingRequestMessages.plan),
        turnId: request.turnId,
        actions: [
          {
            intent: "plan-start",
            label: intl.formatMessage(waitingRequestMessages.implementPlan),
            ...(planStartCollaborationMode == null
              ? {}
              : {
                  planStartCollaborationMode,
                }),
            tone: "primary",
          },
        ],
      };
}
function buildMcpElicitationRequest(
  request: any,
  intl: IntlShapeLike,
  includeCancelAction: boolean,
): CompactWaitingRequest {
  const { elicitation } = request;
  const params = request.request.params;
  const rawServerName = normalizeText(params.serverName);
  const serverName =
    normalizeConnectorName(rawServerName) ??
    rawServerName ??
    intl.formatMessage(waitingRequestMessages.toolServer);
  let operation: string;
  let target = serverName;
  let summary: string | null = null;
  let overrideActions: CompactWaitingRequestAction[] | null = null;
  switch (elicitation.kind) {
    case "formElicitation":
      operation = intl.formatMessage(waitingRequestMessages.answerTarget, {
        target: serverName,
      });
      summary = normalizeText(elicitation.message);
      overrideActions = [];
      break;
    case "mcpToolCall": {
      const connectorName =
        normalizeText(elicitation.approval.connector_name) ??
        normalizeConnectorName(elicitation.approval.connector_id) ??
        serverName;
      const requestedToolName = getRequestedToolName(elicitation.message);
      operation =
        requestedToolName == null
          ? intl.formatMessage(waitingRequestMessages.allowTarget, {
              target: connectorName,
            })
          : intl.formatMessage(waitingRequestMessages.allowTarget, {
              target: requestedToolName,
            });
      target = connectorName;
      summary =
        normalizeText(elicitation.subtitle) ??
        formatToolParamsPreview(elicitation.approval.tool_params) ??
        normalizeText(elicitation.message);
      break;
    }
    case "toolSuggestion": {
      const toolName =
        normalizeText(elicitation.suggestion.tool_name) ??
        normalizeConnectorName(elicitation.suggestion.tool_id) ??
        intl.formatMessage(waitingRequestMessages.tool);
      operation =
        elicitation.suggestion.suggest_type === "enable"
          ? intl.formatMessage(waitingRequestMessages.enableTool, {
              toolName,
            })
          : intl.formatMessage(waitingRequestMessages.installTool, {
              toolName,
            });
      target =
        elicitation.suggestion.tool_type === "connector"
          ? intl.formatMessage(waitingRequestMessages.connector)
          : intl.formatMessage(waitingRequestMessages.plugin);
      summary = normalizeText(elicitation.suggestion.suggest_reason);
      break;
    }
    case "connectorAuth":
      return buildConnectorAuthRequest(request, intl, serverName);
    case "urlAction":
      target =
        normalizeConnectorName(elicitation.serverName) ??
        normalizeText(elicitation.serverName) ??
        serverName;
      operation = intl.formatMessage(waitingRequestMessages.openLink);
      summary =
        normalizeText(elicitation.subtitle) ??
        formatUrlPreview(elicitation.url) ??
        normalizeText(elicitation.message);
      overrideActions = [
        {
          intent: "open",
          label: intl.formatMessage(waitingRequestMessages.openLink),
          tone: "primary",
        },
      ];
      break;
    case "generic":
      operation =
        getGenericElicitationOperation({
          message: elicitation.message,
          metadata: elicitation.metadata,
        }) ??
        intl.formatMessage(waitingRequestMessages.allowTarget, {
          target: serverName,
        });
      summary =
        normalizeText(elicitation.subtitle) ??
        formatToolParamsPreview(elicitation.toolParams) ??
        normalizeText(elicitation.message);
      break;
    default:
      operation = intl.formatMessage(waitingRequestMessages.allowTarget, {
        target: serverName,
      });
      break;
  }
  if (elicitation.riskLevel === "high") {
    overrideActions = [
      {
        intent: "open",
        label: intl.formatMessage(waitingRequestMessages.review),
        tone: "primary",
      },
    ];
  }
  return buildMcpToolRequestResult({
    requestId: request.requestId,
    operation,
    target,
    summary,
    overrideActions,
    includeCancelAction,
    intl,
  });
}
function buildConnectorAuthRequest(
  request: any,
  intl: IntlShapeLike,
  serverName: string,
): CompactWaitingRequest {
  const { elicitation } = request;
  const connectorName =
    normalizeText(elicitation.connector.connector_name) ??
    normalizeConnectorName(elicitation.connector.connector_id) ??
    serverName;
  const authReason = elicitation.connector.auth_reason;
  const operation =
    authReason === "missing_link"
      ? intl.formatMessage(waitingRequestMessages.connectTarget, {
          target: connectorName,
        })
      : authReason === "oauth_upgrade_required"
        ? intl.formatMessage(waitingRequestMessages.additionalAccessTarget, {
            target: connectorName,
          })
        : intl.formatMessage(waitingRequestMessages.reconnectTarget, {
            target: connectorName,
          });
  const summary =
    normalizeText(elicitation.subtitle) ??
    normalizeText(elicitation.message) ??
    formatUrlPreview(elicitation.url);
  return {
    kind: "tool",
    requestId: request.requestId,
    operation,
    target: connectorName,
    summary,
    title: operation,
    actions: [
      {
        intent: "open",
        label:
          authReason === "missing_link"
            ? intl.formatMessage(waitingRequestMessages.connect)
            : authReason === "oauth_upgrade_required"
              ? intl.formatMessage(waitingRequestMessages.updateAccess)
              : intl.formatMessage(waitingRequestMessages.reconnect),
        tone: "primary",
      },
    ],
  };
}
function buildMcpToolRequestResult({
  requestId,
  operation,
  target,
  summary,
  overrideActions,
  includeCancelAction,
  intl,
}: {
  requestId: string;
  operation: string;
  target: string;
  summary: string | null;
  overrideActions: CompactWaitingRequestAction[] | null;
  includeCancelAction: boolean;
  intl: IntlShapeLike;
}): CompactWaitingRequest {
  const acceptAction: CompactWaitingRequestAction = {
    ariaLabel: intl.formatMessage(waitingRequestMessages.allowTarget, {
      target,
    }),
    intent: "mcp-elicitation",
    label: intl.formatMessage(waitingRequestMessages.allowTarget, {
      target,
    }),
    mcpElicitationAction: "accept",
    tone: "primary",
  };
  return {
    kind: "tool",
    requestId,
    operation,
    target,
    summary,
    title: operation,
    actions:
      overrideActions ??
      (includeCancelAction
        ? [
            {
              intent: "mcp-elicitation",
              label: intl.formatMessage(waitingRequestMessages.cancel),
              mcpElicitationAction: "decline",
              tone: "secondary",
            },
            acceptAction,
          ]
        : [acceptAction]),
  };
}
