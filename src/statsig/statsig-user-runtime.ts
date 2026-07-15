// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Statsig user construction and final SDK user shaping.

export const codexBrandName = "codex";

export interface CodexStatsigAuth {
  accountId?: string | null;
  authMethod?: string | null;
  computeResidency?: unknown;
  email?: string | null;
  openAIAuth?: unknown;
  requiresAuth?: boolean | null;
  userId?: string | null;
}

export interface CodexStatsigAccount {
  account_user_id?: string | null;
  id?: string | null;
  structure?: unknown;
}

export interface BuildStatsigUserOptions {
  appSessionId?: string;
  appVersion?: string;
  auth: CodexStatsigAuth;
  buildFlavor?: string;
  currentAccount: CodexStatsigAccount;
  locale?: string;
  planType?: string | null;
  stableId?: string | null;
  systemName?: string;
  systemVersion?: string;
}

export interface CodexStatsigRawUser {
  accountId?: string | null;
  accountUserId?: string | null;
  appSessionId?: string;
  appVersion?: string;
  authMethod?: string | null;
  buildFlavor?: string;
  computeResidency?: unknown;
  email?: string | null;
  locale?: string;
  openAIAuth?: unknown;
  planType?: string | null;
  requiresAuth?: boolean | null;
  stableId?: string | null;
  systemName?: string;
  systemVersion?: string;
  userId?: string | null;
  windowType: string;
  workspaceId?: string | null;
}

export interface StatsigUser {
  appVersion?: string;
  custom: Record<string, unknown>;
  customIDs: Record<string, string>;
  email?: string;
  locale?: string;
  userID?: string;
}

export function buildStatsigUser({
  appSessionId,
  appVersion,
  auth,
  buildFlavor,
  currentAccount,
  locale,
  planType,
  stableId,
  systemName,
  systemVersion,
}: BuildStatsigUserOptions): CodexStatsigRawUser {
  return {
    accountId: auth.accountId ?? currentAccount.id ?? null,
    accountUserId: currentAccount.account_user_id ?? null,
    appSessionId,
    appVersion,
    authMethod: auth.authMethod,
    buildFlavor,
    computeResidency: auth.computeResidency,
    email: auth.email,
    locale,
    openAIAuth: auth.openAIAuth,
    planType,
    requiresAuth: auth.requiresAuth,
    stableId,
    systemName,
    systemVersion,
    userId: auth.userId,
    windowType: "electron",
    workspaceId:
      currentAccount.structure === "workspace" ? currentAccount.id : null,
  };
}

export function finalizeStatsigUser(user: CodexStatsigRawUser): StatsigUser {
  return {
    email: user.email ?? undefined,
    userID: getStatsigUserId(user),
    locale: user.locale,
    customIDs: getStatsigCustomIds(user),
    appVersion: user.appVersion,
    custom: {
      auth_status: user.authMethod === "chatgpt" ? "logged_in" : "logged_out",
      auth_method: user.authMethod ?? undefined,
      account_id: user.accountId ?? undefined,
      plan_type: user.planType ?? undefined,
      compute_residency: user.computeResidency ?? undefined,
      ...(user.workspaceId ? { workspace_id: user.workspaceId } : {}),
      is_openai_internal: user.email?.endsWith("@openai.com") ?? false,
      brand_name: codexBrandName,
      systemName: user.systemName,
      systemVersion: user.systemVersion,
      codex_window_type: user.windowType,
      codex_build_flavor: user.buildFlavor,
      codex_app_session_id: user.appSessionId ?? undefined,
    },
  };
}

function getStatsigUserId(user: CodexStatsigRawUser): string | undefined {
  if (user.userId != null) return user.userId;
  if (user.authMethod === "chatgpt") {
    return normalizeAccountUserId(user.accountUserId);
  }
  if (user.authMethod === "apikey" && user.stableId != null) {
    return `ua-${user.stableId}`;
  }
  return undefined;
}

function getStatsigCustomIds(
  user: CodexStatsigRawUser,
): Record<string, string> {
  return {
    ...(user.stableId == null ? {} : { stableID: user.stableId }),
    ...(user.accountId == null ? {} : { account_id: user.accountId }),
    ...(user.workspaceId ? { workspace_id: user.workspaceId } : {}),
  };
}

function normalizeAccountUserId(
  accountUserId: string | null | undefined,
): string | undefined {
  if (accountUserId == null) return undefined;
  const separatorIndex = accountUserId.indexOf("__");
  return separatorIndex === -1
    ? accountUserId
    : accountUserId.slice(0, separatorIndex);
}
