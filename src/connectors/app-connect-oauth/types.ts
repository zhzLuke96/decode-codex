// Restored from ref/webview/assets/app-connect-oauth-CaBlbuQW.js
import type { QueryKey } from "../../utils/invalidate-queries-and-broadcast";
import type { AppConnectApp } from "../apps-queries";
import type { QueryClientLike as AppsQueryClientLike } from "../apps-queries/types";
export type AppConnectResumeTarget =
  | {
      kind: "apps-tab";
    }
  | {
      kind: "plugin-install";
    }
  | {
      kind: "connector-auth-elicitation";
      conversationId: string;
      requestId: string;
    };
export type PendingAppConnectOAuth = {
  appId: string;
  appName?: string;
  claimed: boolean;
  completed: boolean;
  hostId: string;
  oauthState: string;
  returnTo?: string;
  resumeTarget: AppConnectResumeTarget;
};
export type PendingAppConnectOAuthByState = Record<
  string,
  PendingAppConnectOAuth
>;
export type PendingAppConnectOAuthSetter = (
  updater: (
    currentPending: PendingAppConnectOAuthByState,
  ) => PendingAppConnectOAuthByState,
) => void;
export type AppConnectOAuthStateApi = {
  claimAppConnectOAuthCallback(callbackUrl: string): boolean;
  clearPendingAppConnect(options: {
    appId?: string;
    oauthState?: string;
    resumeTarget?: AppConnectResumeTarget;
  }): void;
  getPendingAppConnectForCallbackUrl(
    callbackUrl: string,
  ): PendingAppConnectOAuth | null;
  hasAppConnectCallbackCompleted(
    appId: string,
    resumeTarget?: AppConnectResumeTarget,
  ): boolean;
  isAppConnectPending(
    appId: string,
    resumeTarget?: AppConnectResumeTarget,
  ): boolean;
  markAppConnectOAuthCallbackCompleted(oauthState: string): void;
  markAppConnectOAuthPending(options: {
    app: AppConnectApp;
    hostId?: string;
    redirectUrl: string;
    returnTo?: string;
    resumeTarget?: AppConnectResumeTarget;
  }): void;
};
export type AppConnectOAuthCallbackInput = {
  fullRedirectUrl: string;
  returnTo?: string;
};
export type AppConnectOAuthCallbackResult =
  | {
      kind: "missing-callback-data";
    }
  | {
      kind: "request-failed";
      message?: string;
    }
  | {
      kind: "success";
      appName: string;
    };
export type AppConnectOAuthQueryClient = AppsQueryClientLike & {
  getQueryData<TValue>(queryKey: readonly unknown[]): TValue | undefined;
  invalidateQueries(options: { queryKey: QueryKey }): Promise<unknown>;
};
export function parseAppConnectOAuthCallbackSearchState(
  input: unknown,
): AppConnectOAuthCallbackInput | null {
  if (typeof input !== "object" || input == null) return null;
  const fullRedirectUrl = Reflect.get(input, "fullRedirectUrl");
  const returnTo = Reflect.get(input, "returnTo");
  return typeof fullRedirectUrl !== "string" ||
    (returnTo != null && typeof returnTo !== "string")
    ? null
    : {
        fullRedirectUrl,
        returnTo: returnTo ?? undefined,
      };
}
export function matchesResumeTarget(
  resumeTarget: AppConnectResumeTarget,
  expectedResumeTarget: AppConnectResumeTarget | undefined,
): boolean {
  if (expectedResumeTarget == null) return true;
  switch (expectedResumeTarget.kind) {
    case "apps-tab":
    case "plugin-install":
      return resumeTarget.kind === expectedResumeTarget.kind;
    case "connector-auth-elicitation":
      return (
        resumeTarget.kind === "connector-auth-elicitation" &&
        resumeTarget.conversationId === expectedResumeTarget.conversationId &&
        resumeTarget.requestId === expectedResumeTarget.requestId
      );
  }
}
export function getUrlSearchParam(url: string, name: string): string | null {
  try {
    return new URL(url).searchParams.get(name)?.trim() || null;
  } catch {
    return null;
  }
}
