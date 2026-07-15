// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Statsig post-login bootstrap payload request and local fallback.
import { appLogger } from "../runtime/app-logger";
import { bootstrapStatsigForCodex } from "../runtime/codex-api";
import {
  buildStatsigUser,
  finalizeStatsigUser,
  type StatsigUser,
} from "./statsig-user-runtime";

export interface StatsigBootstrapRequestBody {
  app_session_id?: string;
  app_version?: string;
  brand_name?: string;
  build_flavor?: string;
  locale?: string;
  stable_id?: string;
  system_name?: string;
  system_version?: string;
  window_type?: string;
}

export interface StatsigBootstrapResponse {
  statsigPayload: string;
}

export async function requestStatsigBootstrapPayload(
  requestBody: StatsigBootstrapRequestBody,
): Promise<StatsigBootstrapResponse> {
  try {
    const response = (await bootstrapStatsigForCodex(
      requestBody,
    )) as Partial<StatsigBootstrapResponse> & {
      statsig_payload?: string;
    };
    if (typeof response?.statsigPayload === "string") {
      return { statsigPayload: response.statsigPayload };
    }
    if (typeof response?.statsig_payload === "string") {
      return { statsigPayload: response.statsig_payload };
    }
    appLogger.warning("Statsig bootstrap response missing payload", {
      safe: {
        responseKeys:
          response != null && typeof response === "object"
            ? Object.keys(response)
            : [],
      },
      sensitive: {},
    });
  } catch (error) {
    appLogger.warning("Failed to request Statsig bootstrap payload", {
      safe: {},
      sensitive: { error },
    });
  }
  return {
    statsigPayload: buildFallbackStatsigPayload(requestBody),
  };
}

function buildFallbackStatsigPayload(
  requestBody: StatsigBootstrapRequestBody,
): string {
  const user = finalizeStatsigUser(
    buildStatsigUser({
      appSessionId: requestBody.app_session_id,
      appVersion: requestBody.app_version,
      auth: { authMethod: "chatgpt" },
      buildFlavor: requestBody.build_flavor,
      currentAccount: {},
      locale: requestBody.locale,
      planType: null,
      stableId: requestBody.stable_id,
      systemName: requestBody.system_name,
      systemVersion: requestBody.system_version,
    }),
  );
  return JSON.stringify({ user: normalizeBootstrapStatsigUser(user) });
}

function normalizeBootstrapStatsigUser(
  user: StatsigUser,
): Record<string, unknown> {
  return omitUndefined({
    ...user,
    customIDs: omitUndefined(user.customIDs),
    custom: filterStatsigCustomValues(user.custom),
  });
}

function filterStatsigCustomValues(
  custom: Record<string, unknown>,
): Record<string, string | number | boolean | string[] | number[]> {
  const result: Record<
    string,
    string | number | boolean | string[] | number[]
  > = {};
  for (const [key, value] of Object.entries(custom)) {
    if (isStatsigCustomValue(value)) result[key] = value;
  }
  return result;
}

function isStatsigCustomValue(
  value: unknown,
): value is string | number | boolean | string[] | number[] {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    (Array.isArray(value) && value.every((item) => typeof item === "string")) ||
    (Array.isArray(value) && value.every((item) => typeof item === "number"))
  );
}

function omitUndefined<T extends Record<string, unknown>>(
  value: T,
): Partial<T> {
  const result: Partial<T> = {};
  for (const key of Object.keys(value) as Array<keyof T>) {
    if (value[key] !== undefined) result[key] = value[key];
  }
  return result;
}
