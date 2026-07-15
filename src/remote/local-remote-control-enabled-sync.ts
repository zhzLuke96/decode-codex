// Restored from ref/webview/assets/local-remote-control-enabled-sync-DueNKRXX.js
// Local remote-control enable/disable sync and error-toast handling.
import {
  LOCAL_HOST_ID,
  sendAppServerRequest,
} from "../boundaries/use-host-config.facade";
import {
  applyRemoteControlHostStatus,
  remoteControlConnectionStatusSignal,
} from "../boundaries/thread-context-inputs.facade";
import { _vscodeApiC as VscodeApiError } from "../boundaries/vscode-api";
import { toastSignal } from "../runtime/toast-runtime";
import { appIntlSignal } from "../utils/app-intl-signal";
type RemoteControlStatusOptions = {
  shouldApplyStatus?: () => boolean;
};
type LocalRemoteControlOptions = {
  force?: boolean;
};

const REMOTE_CONTROL_TOKEN_INVALIDATED_ERROR = "token_invalidated";

export function initSetRemoteControlEnabledForHostChunk(): void {}

export async function setRemoteControlEnabledForHost(
  scope: any,
  hostId: string,
  enabled: boolean,
  { shouldApplyStatus = () => true }: RemoteControlStatusOptions = {},
) {
  const previousStatus = scope.get(remoteControlConnectionStatusSignal, hostId);
  const status = await sendAppServerRequest(
    "set-remote-control-enabled-for-host",
    {
      enabled,
      hostId,
    },
  );
  const nextStatus = scope.get(remoteControlConnectionStatusSignal, hostId);
  const statusChanged =
    nextStatus !== previousStatus &&
    (nextStatus?.status === "connected" || nextStatus?.status === "errored");
  if (shouldApplyStatus() && (!enabled || !statusChanged)) {
    applyRemoteControlHostStatus(scope, hostId, status);
  }
  return status;
}
let lastAppliedEnabled: boolean | undefined;
let pendingEnabled: boolean | undefined;
let requestSequence = 0;
let inFlightRequest:
  | {
      enabled: boolean;
      promise: Promise<unknown>;
    }
  | undefined;
export async function setLocalRemoteControlEnabled(
  scope: any,
  enabled: boolean,
  { force = false }: LocalRemoteControlOptions = {},
) {
  pendingEnabled = enabled;
  if (inFlightRequest?.enabled === enabled) return inFlightRequest.promise;
  if (!force && lastAppliedEnabled === enabled) return null;
  const requestId = ++requestSequence;
  const promise = setRemoteControlEnabledForHost(
    scope,
    LOCAL_HOST_ID,
    enabled,
    {
      shouldApplyStatus: () => requestId === requestSequence,
    },
  );
  inFlightRequest = {
    enabled,
    promise,
  };
  try {
    const status = await promise;
    if (requestId === requestSequence) {
      lastAppliedEnabled = enabled;
    } else if (pendingEnabled != null && pendingEnabled !== enabled) {
      await setLocalRemoteControlEnabled(scope, pendingEnabled, {
        force: true,
      });
    }
    return status;
  } catch (error) {
    if (requestId === requestSequence && lastAppliedEnabled === enabled) {
      lastAppliedEnabled = undefined;
    }
    throw error;
  } finally {
    if (inFlightRequest?.promise === promise) inFlightRequest = undefined;
  }
}

export function initLocalRemoteControlEnabledChunk(): void {}

export function initLocalRemoteControlErrorHandlingChunk(): void {}

export function isRemoteControlTokenInvalidatedError(error: unknown): boolean {
  return (
    error instanceof Error &&
    error.message.includes(REMOTE_CONTROL_TOKEN_INVALIDATED_ERROR)
  );
}

type ToastApiLike = {
  danger(message: string, options?: { id?: string }): void;
};
type IntlShapeLike = {
  formatMessage(descriptor: {
    defaultMessage: string;
    description: string;
    id: string;
  }): string;
};
type RemoteControlToastScope = {
  get<TValue>(signal: unknown): TValue;
};

export function handleLocalRemoteControlEnableError(
  scope: RemoteControlToastScope,
  error: unknown,
): boolean {
  const toast = scope.get<ToastApiLike>(toastSignal);
  const intl = scope.get<IntlShapeLike>(appIntlSignal);
  if (error instanceof VscodeApiError) {
    toast.danger(
      intl.formatMessage({
        id: "settings.remoteConnections.remoteControlServerAlreadyOnline",
        defaultMessage:
          "Could not enable remote control. Please ensure only one instance of Codex is running.",
        description:
          "Error toast shown when remote control cannot be enabled because another Codex instance is already running a remote control server on this device.",
      }),
      { id: "remote-control-server-already-online" },
    );
    return true;
  }
  if (isRemoteControlTokenInvalidatedError(error)) {
    toast.danger(
      intl.formatMessage({
        id: "settings.remoteConnections.remoteControlTokenInvalidated",
        defaultMessage:
          "Your Codex session on this device has expired. Sign in again and try again.",
        description:
          "Error shown when enabling remote control fails because the device's Codex authentication token was invalidated",
      }),
      { id: "remote-control-token-invalidated" },
    );
    return true;
  }
  return false;
}
