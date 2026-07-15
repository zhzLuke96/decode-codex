// Restored from ref/webview/assets/use-auth-pK1tONyf.js
// use-auth-pK1tONyf chunk restored from the Codex webview bundle.
import React from "react";
import { appScopeRoot, useAppScopeValue } from "../boundaries/app-scope";
import { LOCAL_HOST_ID } from "../boundaries/use-host-config.facade";
import {
  createVscodeQueryOptions,
  vscodeApiA as useQueryClient,
  vscodeApiR as createVscodeQueryKey,
  vscodeApiU as queryTimes,
} from "../boundaries/vscode-api";
import { useAppServerManagerForHost } from "../app-server/app-server-manager-hooks";
import { useGlobalState } from "../utils/use-global-state";
import {
  createDefaultAuthState,
  useAuthStateFromManager,
  type AuthManager,
  type AuthMethod,
  type AuthState,
} from "./use-auth-state";

export type { AuthState } from "./use-auth-state";

type AuthContextValue = AuthState & {
  isLoading: boolean;
  isCopilotApiAvailable: boolean;
  accountId: null;
  userId: null;
  computeResidency: null;
  setAuthMethod: (method: AuthMethod | null) => void;
};
const copilotApiAvailabilityQuery = createVscodeQueryOptions(
  appScopeRoot,
  "is-copilot-api-available",
  {
    staleTime: queryTimes.INFINITE,
  },
);
function useInvalidateCopilotApiAvailability(): () => void {
  const queryClient = useQueryClient();
  return () => {
    queryClient.invalidateQueries({
      queryKey: createVscodeQueryKey("is-copilot-api-available"),
    });
  };
}
function useIsCopilotApiAvailable(): boolean {
  const { data } = useAppScopeValue(copilotApiAvailabilityQuery);
  return data?.available ?? false;
}
const AuthContext = React.createContext<AuthContextValue | undefined>(
  undefined,
);
const AuthNonceContext = React.createContext<unknown>(null);
function useAuth(): AuthContextValue {
  const value = React.useContext(AuthContext);
  if (!value) throw Error("useAuth must be used within AuthProvider");
  return value;
}
function initAuthRuntimeChunk(): void {}
function useAuthForHost(hostId: string): AuthContextValue | null {
  return useAuthForManager(
    useAppServerManagerForHost(hostId) as AuthManager | null,
  );
}
function useAuthForManager(
  manager: AuthManager | null | undefined,
): AuthContextValue | null {
  const hostId = manager?.getHostId();
  const isLocalHost = hostId === LOCAL_HOST_ID;
  const isCopilotApiAvailable = useIsCopilotApiAvailable();
  const { data, isLoading } = useGlobalState("use-copilot-auth-if-available");
  const copilotAvailableForHost = isLocalHost ? isCopilotApiAvailable : false;
  const shouldUseCopilotAuth =
    isLocalHost && !isLoading ? (data ?? false) : false;
  const shouldUseWindowsStartupAuthTimeout =
    isLocalHost && document.documentElement.dataset.codexOs === "win32";
  const {
    authState,
    isLoading: isAuthLoading,
    setAuthMethod,
  } = useAuthStateFromManager(manager, {
    isCopilotApiAvailable: copilotAvailableForHost,
    useCopilotAuthIfAvailable: shouldUseCopilotAuth,
    shouldUseWindowsStartupAuthTimeout,
  });
  if (manager == null) return null;
  return {
    ...(authState ?? createDefaultAuthState()),
    isLoading: isAuthLoading,
    isCopilotApiAvailable: copilotAvailableForHost,
    accountId: null,
    userId: null,
    computeResidency: null,
    setAuthMethod,
  };
}
function useUpdateAuthNonce(): unknown {
  const value = React.useContext(AuthNonceContext);
  if (!value) {
    throw Error("useUpdateAuthNonce must be used within AuthNonceProvider");
  }
  return value;
}
export {
  AuthNonceContext,
  useIsCopilotApiAvailable,
  useAuthStateFromManager,
  useInvalidateCopilotApiAvailability,
  useAuthForHost,
  AuthContext,
  useUpdateAuthNonce,
  copilotApiAvailabilityQuery,
  initAuthRuntimeChunk,
  useAuth,
};
