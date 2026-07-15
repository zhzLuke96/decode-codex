// Restored from ref/webview/assets/use-auth-pK1tONyf.js
// use-auth-pK1tONyf chunk restored from the Codex webview bundle.
import React from "react";
import type { AppServerManager } from "../app-server/app-server-manager-hooks/registry";

type OpenAiAuthMethod = "apikey" | "chatgpt" | null;
export type AuthMethod = OpenAiAuthMethod | "amazonBedrock" | "copilot";

type Account =
  | { type: "apiKey" }
  | { type: "amazonBedrock" }
  | { type: "chatgpt"; email: string | null; planType: string | null }
  | null
  | undefined;

type AccountResponse = {
  account?: Account;
  requiresOpenaiAuth?: boolean;
};

export type AuthState = {
  openAIAuth: OpenAiAuthMethod;
  authMethod: AuthMethod | null;
  requiresAuth: boolean;
  email: string | null;
  planAtLogin: string | null;
};

export type AuthManager = AppServerManager & {
  addAuthStatusCallback(
    callback: (status: { authMethod: AuthMethod | null }) => void,
  ): void;
  getAccount(): Promise<AccountResponse>;
  removeAuthStatusCallback(
    callback: (status: { authMethod: AuthMethod | null }) => void,
  ): void;
};

type UseAuthStateOptions = {
  isCopilotApiAvailable: boolean;
  useCopilotAuthIfAvailable: boolean;
  shouldUseWindowsStartupAuthTimeout: boolean;
  onLogout?: () => void;
};

const accountRequestCache = new WeakMap<
  AuthManager,
  Promise<AccountResponse>
>();

export function useAuthStateFromManager(
  manager: AuthManager | null | undefined,
  options: UseAuthStateOptions,
): {
  isLoading: boolean;
  authState: AuthState | null;
  setAuthMethod: (method: AuthMethod | null) => void;
} {
  const {
    isCopilotApiAvailable,
    useCopilotAuthIfAvailable,
    shouldUseWindowsStartupAuthTimeout,
    onLogout,
  } = options;
  const [isLoading, setIsLoading] = React.useState(manager != null);
  const [authState, setAuthState] = React.useState<AuthState | null>(null);

  React.useEffect(() => {
    if (manager == null) {
      setAuthState(null);
      setIsLoading(false);
      return;
    }
    setAuthState(null);
    setIsLoading(true);
  }, [manager]);

  React.useEffect(() => {
    if (manager == null) return;
    let disposed = false;
    let didComplete = false;
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const loadAccount = () => {
      readAccount(manager)
        .then((accountResponse) => {
          didComplete = true;
          if (timeout != null) clearTimeout(timeout);
          if (!disposed) {
            setIsLoading(false);
            setAuthState(
              buildAuthState(accountResponse, {
                isCopilotApiAvailable,
                useCopilotAuthIfAvailable,
              }),
            );
          }
        })
        .catch(() => {
          didComplete = true;
          if (timeout != null) clearTimeout(timeout);
          if (!disposed) {
            setIsLoading(false);
            setAuthState(ensureDefaultAuthState);
          }
        });
    };

    if (shouldUseWindowsStartupAuthTimeout) {
      timeout = setTimeout(() => {
        if (!disposed && !didComplete) {
          setIsLoading(false);
          setAuthState(ensureDefaultAuthState);
        }
      }, 2_000);
    }

    loadAccount();
    const handleAuthStatus = (status: { authMethod: AuthMethod | null }) => {
      setAuthState((previousState) => {
        if (status.authMethod == null && previousState?.authMethod != null) {
          onLogout?.();
          return createDefaultAuthState();
        }
        if (previousState == null) {
          return status.authMethod == null
            ? previousState
            : { ...createDefaultAuthState(), authMethod: status.authMethod };
        }
        return { ...previousState, authMethod: status.authMethod ?? null };
      });
      loadAccount();
    };

    manager.addAuthStatusCallback(handleAuthStatus);
    return () => {
      disposed = true;
      if (timeout != null) clearTimeout(timeout);
      manager.removeAuthStatusCallback(handleAuthStatus);
    };
  }, [
    manager,
    isCopilotApiAvailable,
    onLogout,
    shouldUseWindowsStartupAuthTimeout,
    useCopilotAuthIfAvailable,
  ]);

  return {
    isLoading,
    authState,
    setAuthMethod: (authMethod) => {
      setAuthState((previousState) => ({
        ...(previousState ?? createDefaultAuthState()),
        authMethod,
      }));
    },
  };
}

function ensureDefaultAuthState(authState?: AuthState | null): AuthState {
  return authState ?? createDefaultAuthState();
}

function readAccount(manager: AuthManager): Promise<AccountResponse> {
  const cached = accountRequestCache.get(manager);
  if (cached != null) return cached;
  const request = manager.getAccount().finally(() => {
    accountRequestCache.delete(manager);
  });
  accountRequestCache.set(manager, request);
  return request;
}

export function createDefaultAuthState(): AuthState {
  return {
    openAIAuth: null,
    authMethod: null,
    requiresAuth: true,
    email: null,
    planAtLogin: null,
  };
}

function openAiAuthMethodForAccount(account: Account): OpenAiAuthMethod {
  if (account == null) return null;
  switch (account.type) {
    case "apiKey":
      return "apikey";
    case "amazonBedrock":
      return null;
    case "chatgpt":
      return "chatgpt";
  }
}

function buildAuthState(
  accountResponse: AccountResponse,
  options: {
    isCopilotApiAvailable: boolean;
    useCopilotAuthIfAvailable: boolean;
  },
): AuthState {
  const openAIAuth = openAiAuthMethodForAccount(accountResponse.account);
  const authMethod =
    options.useCopilotAuthIfAvailable && options.isCopilotApiAvailable
      ? "copilot"
      : accountResponse.account?.type === "amazonBedrock"
        ? "amazonBedrock"
        : openAIAuth;
  return {
    openAIAuth,
    authMethod,
    requiresAuth:
      authMethod === "copilot" || (accountResponse.requiresOpenaiAuth ?? true),
    email:
      accountResponse.account?.type === "chatgpt"
        ? accountResponse.account.email
        : null,
    planAtLogin:
      accountResponse.account?.type === "chatgpt"
        ? accountResponse.account.planType
        : null,
  };
}
