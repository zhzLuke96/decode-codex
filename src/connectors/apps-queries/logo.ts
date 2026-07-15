// Restored from ref/webview/assets/apps-queries-9OR8lHId.js
import {
  vscodeApiA as useQueryClient,
  vscodeApiU as queryTimings,
  vscodeApiV as useQuery,
} from "../../boundaries/vscode-api";
import { codexRequest } from "../../runtime/request";
import type { AppConnectApp, ConnectorLogoRequest } from "./types";
const CONNECTOR_LOGO_QUERY_KEY = ["connector-logo-data-url"] as const;
const CONNECTOR_LOGOS_QUERY_KEY = ["connector-logos"] as const;
const LOGO_FETCH_CONCURRENCY = 8;
type ConnectorLogoResponse = {
  base64: string;
  contentType: string;
};
export function parseConnectorLogoUrl(
  logoUrl: string | null | undefined,
): ConnectorLogoRequest | null {
  const trimmedUrl = logoUrl?.trim();
  if (
    trimmedUrl == null ||
    trimmedUrl.length === 0 ||
    !trimmedUrl.startsWith("connectors://")
  ) {
    return null;
  }
  const body = trimmedUrl.slice("connectors://".length);
  const connectorId = (
    (body.split(/[?#]/u)[0] ?? "").split("/")[0] ?? ""
  ).trim();
  if (connectorId.length === 0) return null;
  const query = body.split("?")[1]?.split("#")[0] ?? "";
  return {
    connectorId,
    theme:
      new URLSearchParams(query).get("theme")?.toLowerCase() === "dark"
        ? "dark"
        : "light",
  };
}
function getConnectorLogoCacheKey({
  connectorId,
  theme,
}: ConnectorLogoRequest): string {
  return `${connectorId}:${theme}`;
}
async function fetchConnectorLogoDataUrl({
  connectorId,
  theme,
}: ConnectorLogoRequest): Promise<string> {
  const response = (await codexRequest.safeGet(
    `/aip/connectors/${encodeURIComponent(connectorId)}/logo`,
    {
      parameters: {
        query: {
          theme,
        },
      },
    },
  )) as ConnectorLogoResponse;
  return `data:${response.contentType};base64,${response.base64}`;
}
function connectorLogoDataUrlQueryOptions(request: ConnectorLogoRequest) {
  return {
    queryKey: [...CONNECTOR_LOGO_QUERY_KEY, getConnectorLogoCacheKey(request)],
    queryFn: async () => {
      try {
        return await fetchConnectorLogoDataUrl(request);
      } catch {
        return null;
      }
    },
    retry: false,
    staleTime: queryTimings.INFINITE,
  };
}
export function useConnectorLogoDataUrl(
  request: ConnectorLogoRequest,
): string | null | undefined {
  const { data } = useQuery(connectorLogoDataUrlQueryOptions(request));
  return data ?? undefined;
}
export function useAppsWithResolvedLogos({
  apps,
  enabled = true,
}: {
  apps: AppConnectApp[] | undefined;
  enabled?: boolean;
}): AppConnectApp[] | undefined {
  const queryClient = useQueryClient();
  const maybeApps = enabled ? apps : undefined;
  const logoRequests =
    maybeApps == null ? undefined : collectConnectorLogoRequests(maybeApps);
  const queryKey = [
    ...CONNECTOR_LOGOS_QUERY_KEY,
    ...(logoRequests ?? []).map(getConnectorLogoCacheKey),
  ];
  const { data } = useQuery({
    queryKey,
    queryFn: async () => {
      if (logoRequests == null) {
        throw Error("connector logo requests are required");
      }
      return fetchConnectorLogos({
        queryClient,
        requests: logoRequests,
      });
    },
    enabled: logoRequests != null && logoRequests.length > 0,
    staleTime: queryTimings.INFINITE,
  });
  return maybeApps == null
    ? undefined
    : resolveAppLogoUrls({
        apps: maybeApps,
        connectorLogoDataUrlByCacheKey: data,
      });
}
function collectConnectorLogoRequests(
  apps: readonly AppConnectApp[],
): ConnectorLogoRequest[] {
  const requestsByKey = new Map<string, ConnectorLogoRequest>();
  apps.forEach((app) => {
    const lightLogo = parseConnectorLogoUrl(app.logoUrl);
    if (lightLogo != null) {
      requestsByKey.set(getConnectorLogoCacheKey(lightLogo), lightLogo);
    }
    const darkLogo = parseConnectorLogoUrl(app.logoUrlDark);
    if (darkLogo != null) {
      requestsByKey.set(getConnectorLogoCacheKey(darkLogo), darkLogo);
    }
  });
  return Array.from(requestsByKey.values());
}
async function fetchConnectorLogos({
  queryClient,
  requests,
}: {
  queryClient: {
    fetchQuery: (options: Record<string, unknown>) => Promise<unknown>;
  };
  requests: ConnectorLogoRequest[];
}): Promise<Map<string, string>> {
  const logoDataUrls = new Map<string, string>();
  let nextRequestIndex = 0;
  await Promise.all(
    Array.from(
      {
        length: Math.min(requests.length, LOGO_FETCH_CONCURRENCY),
      },
      async () => {
        for (;;) {
          const request = requests[nextRequestIndex];
          nextRequestIndex += 1;
          if (request == null) return;
          const dataUrl = (await queryClient.fetchQuery(
            connectorLogoDataUrlQueryOptions(request),
          )) as string | null;
          if (dataUrl != null) {
            logoDataUrls.set(getConnectorLogoCacheKey(request), dataUrl);
          }
        }
      },
    ),
  );
  return logoDataUrls;
}
export function resolveAppLogoUrls({
  apps,
  connectorLogoDataUrlByCacheKey,
}: {
  apps: AppConnectApp[];
  connectorLogoDataUrlByCacheKey?: Map<string, string>;
}): AppConnectApp[] {
  let changed = false;
  const resolvedApps = apps.map((app) => {
    const logoUrl = resolveLogoUrl({
      logoUrl: app.logoUrl,
      installUrl: app.installUrl,
      connectorLogoDataUrlByCacheKey,
    });
    const logoUrlDark = resolveLogoUrl({
      logoUrl: app.logoUrlDark,
      installUrl: app.installUrl,
      connectorLogoDataUrlByCacheKey,
    });
    return logoUrl === app.logoUrl && logoUrlDark === app.logoUrlDark
      ? app
      : ((changed = true),
        {
          ...app,
          logoUrl,
          logoUrlDark,
        });
  });
  return changed ? resolvedApps : apps;
}
function resolveLogoUrl({
  logoUrl,
  installUrl,
  connectorLogoDataUrlByCacheKey,
}: {
  logoUrl: string | null | undefined;
  installUrl: string | null | undefined;
  connectorLogoDataUrlByCacheKey?: Map<string, string>;
}): string | null {
  const trimmedLogoUrl = logoUrl?.trim();
  if (trimmedLogoUrl == null || trimmedLogoUrl.length === 0) return null;
  const normalizedLogoUrl = normalizeRelativeLogoUrl({
    logoUrl: trimmedLogoUrl,
    installUrl,
  });
  if (connectorLogoDataUrlByCacheKey == null) return normalizedLogoUrl;
  const connectorLogo = parseConnectorLogoUrl(normalizedLogoUrl);
  return connectorLogo == null
    ? normalizedLogoUrl
    : (connectorLogoDataUrlByCacheKey.get(
        getConnectorLogoCacheKey(connectorLogo),
      ) ?? normalizedLogoUrl);
}
function normalizeRelativeLogoUrl({
  logoUrl,
  installUrl,
}: {
  logoUrl: string;
  installUrl: string | null | undefined;
}): string {
  if (!logoUrl.startsWith("/")) return logoUrl;
  const trimmedInstallUrl = installUrl?.trim();
  if (trimmedInstallUrl == null || trimmedInstallUrl.length === 0) {
    return logoUrl;
  }
  try {
    return new URL(logoUrl, trimmedInstallUrl).toString();
  } catch {
    return logoUrl;
  }
}
