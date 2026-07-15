// Restored from ref/webview/assets/apps-queries-9OR8lHId.js
export type QueryClientLike = {
  cancelQueries?: (options: { queryKey: readonly unknown[] }) => Promise<void>;
  fetchQuery: (options: Record<string, unknown>) => Promise<unknown>;
  getQueryData?: (queryKey: readonly unknown[]) => unknown;
  setQueryData?: (queryKey: readonly unknown[], value: unknown) => void;
};
export type IntlLike = {
  formatMessage: (
    descriptor: {
      id: string;
      defaultMessage: string;
      description?: string;
    },
    values?: Record<string, unknown>,
  ) => string;
};
export type AppConnectApp = {
  id: string;
  name?: string;
  installUrl?: string | null;
  logoUrl?: string | null;
  logoUrlDark?: string | null;
  isAccessible?: boolean;
  isEnabled?: boolean;
  [key: string]: unknown;
};
export type ConnectorAuth = {
  type: string;
  [key: string]: unknown;
};
export type ConnectorAction = {
  description?: string | null;
  disabled_reason?: string | null;
  is_destructive?: boolean | null;
  is_enabled?: boolean | null;
  is_open_world?: boolean | null;
  is_read_only?: boolean | null;
  name: string;
  visibility?: string | null;
  [key: string]: unknown;
};
export type ConnectorDetails = {
  actions?: ConnectorAction[];
  id: string;
  link_params_schema?: unknown;
  name: string;
  supported_auth: ConnectorAuth[];
  [key: string]: unknown;
};
export type DisplayConnectorAction = {
  accessBadges: string[];
  description?: string | null;
  disabledReason: string | null;
  name: string;
  visibility: string | null;
};
export type ConnectorLogoRequest = {
  connectorId: string;
  theme: "dark" | "light";
};
export type AppConnectionResult =
  | {
      kind: "browser-fallback";
    }
  | {
      kind: "connected-directly";
    }
  | {
      kind: "failed";
    }
  | {
      kind: "oauth-started";
      redirectUrl: string;
    };
export type OpenInBrowser = (url: string) => void;
export type StartAppConnectionOptions = {
  app: AppConnectApp;
  callbackMode?: "browser" | "native";
  connector?: ConnectorDetails | null;
  openInBrowser: OpenInBrowser;
  personalizationMode?: unknown;
  queryClient: QueryClientLike;
};
export type ContinueAppReauthenticationOptions = {
  app: AppConnectApp;
  authReason: string;
  fallbackUrl: string;
  linkId?: string | null;
  openInBrowser: OpenInBrowser;
  queryClient: QueryClientLike;
  requestedScopes?: string[] | null;
};
