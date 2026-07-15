// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Shared types for the Computer Use native pipe server and controller.

import type { Socket } from "node:net";

export type StructuredLogDetails = {
  safe?: Record<string, unknown>;
  sensitive?: Record<string, unknown>;
};

export type ComputerUseNativePipeLogger = {
  debug(message: string, details?: StructuredLogDetails): void;
  info(message: string, details?: StructuredLogDetails): void;
  warning(message: string, details?: StructuredLogDetails): void;
};

export type JsonRpcId = number | string;

export type JsonRpcRequest = {
  id?: JsonRpcId;
  jsonrpc: "2.0";
  method: string;
  params?: unknown;
};

export type JsonRpcResult = {
  id: JsonRpcId;
  jsonrpc: "2.0";
  result: unknown;
};

export type JsonRpcError = {
  error: {
    code: number;
    data?: unknown;
    message: string;
  };
  id: JsonRpcId;
  jsonrpc: "2.0";
};

export type JsonRpcMessage = JsonRpcError | JsonRpcRequest | JsonRpcResult;

export type SendJsonRpcMessage = (message: JsonRpcMessage) => void;

export type ComputerUseNativeRequest = {
  codexTurnMetadata?: unknown;
  method: string;
  params?: unknown;
};

export type ComputerUseTurnIdentity = {
  sessionId: string;
  turnId: string;
};

export type ComputerUseToolAnalyticsFields = {
  bundleIdentifier?: string;
  model?: string;
  reasoningEffort?: string;
  toolName: string;
  transport: "native_pipe";
};

export type ComputerUseInvocationAnalyticsFields = {
  invocationSource: "model";
  itemId?: string;
  mcpServerName: "computer-use";
  pluginId: "computer-use@openai-bundled";
  threadId?: string;
  turnId?: string;
};

export type ComputerUseNativePipeAnalyticsEvent =
  | ({ type: "started" | "ended" } & ComputerUseToolAnalyticsFields)
  | ({
      durationMs: number;
      mcpErrorPresent: boolean;
      terminalStatus: "completed" | "failed";
      type: "tool-called";
    } & ComputerUseInvocationAnalyticsFields &
      ComputerUseToolAnalyticsFields)
  | ({
      approvalPersistence?: "always" | "session";
      approvalResult:
        | "accepted"
        | "canceled"
        | "declined"
        | "timeout"
        | "unknown";
      type: "app-approval-resolved";
    } & ComputerUseToolAnalyticsFields)
  | ({ type: "app-approval-requested" } & ComputerUseToolAnalyticsFields)
  | { transport: "native_pipe"; type: "server-launched" };

export type ComputerUseApprovalBridge = {
  handleApprovalResponse(message: JsonRpcMessage): boolean;
  rejectPendingApprovals(error: Error): void;
  requestApprovalForSender(
    sendResponse: SendJsonRpcMessage,
    request: unknown,
  ): Promise<unknown>;
};

export type WindowsHelperTransport = {
  close(): Promise<void> | void;
  request(
    method: string,
    params: unknown,
    options: {
      codexTurnMetadata?: unknown;
      createElicitation(request: unknown): Promise<unknown>;
    },
  ): Promise<unknown>;
};

export type WindowsHelperTransportConstructor = new (options: {
  helperArgs: string[];
  helperCommand: string;
  helperEnv?: Record<string, string>;
}) => WindowsHelperTransport;

export type ComputerUseNativePipeServer = {
  closeActiveTurn(turn: ComputerUseTurnIdentity): Promise<boolean>;
  dispose(): Promise<void>;
  hasActiveTurn(turn: ComputerUseTurnIdentity): boolean;
  pipePath: string;
};

export type ComputerUseNativePipeServerOptions = {
  codexCliPath?: string | null;
  logger: ComputerUseNativePipeLogger;
  nativePipeDirectory?: string;
  onAnalyticsEvent?(event: ComputerUseNativePipeAnalyticsEvent): void;
  windowsHelperPath?: string | null;
  windowsHelperTransportModulePath?: string | null;
};

export type ComputerUseNativePipeFeatureAvailability = {
  computerUse?: boolean | null;
  computerUseNodeRepl?: boolean | null;
};

export type ComputerUseNativePipeController = {
  closeActiveTurn(turn: ComputerUseTurnIdentity): Promise<boolean>;
  dispose(): void;
  ensureReadyPipePath(): Promise<string | null>;
  hasActiveTurn(turn: ComputerUseTurnIdentity): boolean;
  refresh(): void;
  setDesktopFeatureAvailability(
    availability: ComputerUseNativePipeFeatureAvailability,
  ): void;
};

export type ComputerUseNativePipeSocketState = {
  activeTurnAnalyticsBySocket: Map<Socket, ComputerUseToolAnalyticsFields>;
  activeTurnBySocket: Map<Socket, string>;
};

export type NotifyConfigStatus = "already-present" | "installed" | "repaired";
