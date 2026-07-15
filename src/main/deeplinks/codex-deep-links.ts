// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import * as sharedRuntime from "../boundaries/shared-node-runtime.facade";
import { runtimeLogger } from "../logging/scoped-runtime-logger";
import { OPEN_PROJECT_ARG } from "../workspace/desktop-open-file-queue";
import {
  DeepLinkCoordinator,
  DeepLinkCoordinatorOptions,
  DeepLinkRoute,
} from "../workspace/desktop-runtime-types";

const SETTINGS_SECTIONS = [
  "browser-use",
  "computer-use/google-chrome",
  "connections",
  "connections/computer",
  "connections/devices",
  "connections/ssh",
  "connections/ssh/add",
];

const PLUGIN_INSTALL_QUERY_KEYS = new Set(["marketplace"]);

const LOCAL_PLUGIN_DETAIL_QUERY_KEYS = new Set(["marketplacePath", "mode"]);

const SSH_ADD_QUERY_KEYS = new Set(["name"]);

const PET_INSTALL_QUERY_KEYS = new Set(["name", "description", "imageUrl"]);

function parseCodexDeepLink(value: string): DeepLinkRoute | null {
  if (!value.startsWith("codex://")) return null;
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return null;
  }
  if (url.protocol !== "codex:") return null;
  switch (url.host) {
    case "plugins":
      return (
        parsePluginInstallDeepLink(url) ??
        parseLocalPluginDetailDeepLink(url) ??
        parsePluginDetailDeepLink(url)
      );
    case "pets":
      return parsePetInstallDeepLink(url);
    case "automations":
      return {
        kind: "automations",
      };
    case "codex-app":
      return parseCodexAppDeepLink(url);
    case "connector":
      return parseConnectorDeepLink(url, value);
    case "launch":
      return deepLinkPathSegments(url).length === 0
        ? {
            kind: "launch",
          }
        : null;
    case "new":
      return parseNewThreadDeepLink(url);
    case "settings":
      return parseSettingsDeepLink(url);
    case "skills":
      return {
        kind: "skills",
      };
    case "threads": {
      if (deepLinkPathSegments(url)[0] === "new") {
        return (
          parseNewThreadDeepLink(url) ?? {
            kind: "newThread",
          }
        );
      }
      const parseLocalConversation = sharedRuntime.parseCodexThreadDeepLink as
        | ((
            url: URL,
            options: {
              allowExtraPathSegments: boolean;
            },
          ) => object | null)
        | undefined;
      const route = parseLocalConversation?.(url, {
        allowExtraPathSegments: true,
      });
      return route == null
        ? null
        : {
            kind: "localConversation",
            ...route,
          };
    }
    default:
      return null;
  }
}

function parseProcessDeepLinks(
  argv: string[],
  {
    allowBareWindowsProjectPathArg = false,
  }: {
    allowBareWindowsProjectPathArg?: boolean;
  } = {},
): DeepLinkRoute[] {
  const routes: DeepLinkRoute[] = [];
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === OPEN_PROJECT_ARG) {
      const projectPath = argv[index + 1]?.trim();
      index += 1;
      if (projectPath)
        routes.push({
          kind: "newThread",
          path: projectPath,
        });
      continue;
    }
    if (arg.startsWith(`${OPEN_PROJECT_ARG}=`)) {
      const projectPath = arg.slice(`${OPEN_PROJECT_ARG}=`.length).trim();
      if (projectPath)
        routes.push({
          kind: "newThread",
          path: projectPath,
        });
      continue;
    }
    const deepLinkRoute = parseCodexDeepLink(arg);
    if (deepLinkRoute) {
      routes.push(deepLinkRoute);
      continue;
    }
    if (
      allowBareWindowsProjectPathArg &&
      index > 0 &&
      isWindowsProjectPath(arg)
    ) {
      routes.push({
        kind: "newThread",
        path: arg,
      });
    }
  }
  return routes;
}

function deepLinkPathSegments(url: URL): string[] {
  return url.pathname.split("/").filter(Boolean);
}

function deepLinkSearchParam(url: URL, name: string): string | null {
  const value = url.searchParams.get(name);
  return value == null || value.trim().length === 0 ? null : value;
}

function parseSettingsDeepLink(url: URL): DeepLinkRoute {
  const sectionPath = deepLinkPathSegments(url).join("/");
  const section = SETTINGS_SECTIONS.find(
    (candidate) => candidate === sectionPath,
  );
  if (section == null)
    return {
      kind: "settings",
    };
  if (section === "connections/ssh/add") {
    const name = deepLinkSearchParam(url, "name")?.trim();
    return name == null || !hasOnlyQueryKeys(url, SSH_ADD_QUERY_KEYS)
      ? {
          kind: "settings",
          section: "connections/ssh",
        }
      : {
          kind: "settings",
          section,
          search: `?name=${encodeURIComponent(name)}`,
        };
  }
  return {
    kind: "settings",
    section,
  };
}

function parseCodexAppDeepLink(url: URL): DeepLinkRoute | null {
  const [action] = deepLinkPathSegments(url);
  return action === "apply-config"
    ? {
        kind: "applyCodexAppConfig",
      }
    : null;
}

function parseNewThreadDeepLink(url: URL): DeepLinkRoute | null {
  const prompt = deepLinkSearchParam(url, "prompt");
  const originUrl = deepLinkSearchParam(url, "originUrl");
  const projectPath = deepLinkSearchParam(url, "path");
  return prompt == null && originUrl == null && projectPath == null
    ? null
    : {
        kind: "newThread",
        prompt: prompt ?? undefined,
        originUrl,
        path: projectPath,
      };
}

function parsePluginInstallDeepLink(url: URL): DeepLinkRoute | null {
  const [action, encodedPluginName, extraSegment] = deepLinkPathSegments(url);
  if (action !== "install" || extraSegment != null) return null;
  const pluginName = decodeDeepLinkSegment(encodedPluginName);
  if (pluginName == null || !hasOnlyQueryKeys(url, PLUGIN_INSTALL_QUERY_KEYS)) {
    return null;
  }
  const marketplaceName = deepLinkSearchParam(url, "marketplace")?.trim();
  return isValidMarketplaceName(marketplaceName)
    ? {
        kind: "pluginInstall",
        marketplaceName,
        pluginName,
      }
    : null;
}

function parseLocalPluginDetailDeepLink(url: URL): DeepLinkRoute | null {
  const [encodedPluginName, extraSegment] = deepLinkPathSegments(url);
  if (
    extraSegment != null ||
    !hasOnlyQueryKeys(url, LOCAL_PLUGIN_DETAIL_QUERY_KEYS)
  ) {
    return null;
  }
  const pluginName = decodeDeepLinkSegment(encodedPluginName);
  const marketplacePath = deepLinkSearchParam(url, "marketplacePath")?.trim();
  const mode = deepLinkSearchParam(url, "mode")?.trim();
  return pluginName == null ||
    marketplacePath == null ||
    (mode != null && mode !== "share") ||
    !isSafeMarketplacePath(marketplacePath)
    ? null
    : {
        kind: "localPluginDetail",
        hostId: null,
        marketplacePath,
        pluginName,
        openShareDialog: mode === "share",
      };
}

function parsePluginDetailDeepLink(url: URL): DeepLinkRoute | null {
  const [encodedPluginName, extraSegment] = deepLinkPathSegments(url);
  if (extraSegment != null) return null;
  const pluginName = decodeDeepLinkSegment(encodedPluginName);
  if (pluginName == null) return null;
  const toPluginId = sharedRuntime.parsePluginIdentifier as
    | ((name: string) => unknown)
    | undefined;
  const pluginId = toPluginId?.(pluginName);
  if (pluginId == null) return null;
  return {
    kind: "pluginDetail",
    hostId: deepLinkSearchParam(url, "hostId"),
    pluginId,
    source:
      deepLinkSearchParam(url, "source") === "manage"
        ? sharedRuntime.pluginManagePermission
        : null,
  };
}

function parsePetInstallDeepLink(url: URL): DeepLinkRoute | null {
  const [action, extraSegment] = deepLinkPathSegments(url);
  if (
    action !== "install" ||
    extraSegment != null ||
    !hasOnlyQueryKeys(url, PET_INSTALL_QUERY_KEYS)
  ) {
    return null;
  }
  const name = deepLinkSearchParam(url, "name")?.trim();
  const description = deepLinkSearchParam(url, "description")?.trim() ?? null;
  const imageUrl = deepLinkSearchParam(url, "imageUrl");
  if (name == null || imageUrl == null) return null;
  try {
    const parsedImageUrl = new URL(imageUrl);
    return parsedImageUrl.protocol === "https:"
      ? {
          kind: "petInstall",
          name,
          description,
          imageUrl: parsedImageUrl.toString(),
        }
      : null;
  } catch {
    return null;
  }
}

function parseConnectorDeepLink(
  url: URL,
  fullRedirectUrl: string,
): DeepLinkRoute | null {
  const [action] = deepLinkPathSegments(url);
  return action === "oauth_callback"
    ? {
        kind: "connectorOAuthCallback",
        fullRedirectUrl,
        returnTo: deepLinkSearchParam(url, "returnTo"),
      }
    : null;
}

function hasOnlyQueryKeys(url: URL, allowedKeys: ReadonlySet<string>): boolean {
  for (const key of url.searchParams.keys()) {
    if (!allowedKeys.has(key)) return false;
  }
  return true;
}

function decodeDeepLinkSegment(value: string | undefined): string | null {
  if (value == null || value.trim().length === 0) return null;
  try {
    const decoded = decodeURIComponent(value).trim();
    return decoded.length > 0 ? decoded : null;
  } catch {
    return null;
  }
}

function isValidMarketplaceName(value: string | undefined): boolean {
  const validate = sharedRuntime.isSafePathSegment as
    | ((name: string | undefined) => boolean)
    | undefined;
  return typeof validate === "function" ? validate(value) : Boolean(value);
}

function isSafeMarketplacePath(value: string): boolean {
  const isSafePath = sharedRuntime.isAbsoluteFilePath as
    | ((pathValue: string) => boolean)
    | undefined;
  const isPluginPathBlocked = sharedRuntime.isUncPath as
    | ((pathValue: string) => boolean)
    | undefined;
  const safe =
    typeof isSafePath === "function" ? isSafePath(value) : value.length > 0;
  const blocked =
    typeof isPluginPathBlocked === "function"
      ? isPluginPathBlocked(value)
      : false;
  return safe && !blocked;
}

function isWindowsProjectPath(value: string): boolean {
  const trimmed = value.trim();
  return (
    trimmed.length > 0 &&
    (/^[a-zA-Z]:[\\/]/.test(trimmed) || trimmed.startsWith("\\\\"))
  );
}

function normalizeError(error: unknown): Error {
  if (error instanceof Error) return error;
  const convert = sharedRuntime.toError as
    | ((error: unknown) => Error)
    | undefined;
  return typeof convert === "function" ? convert(error) : Error(String(error));
}

export function createDeepLinkCoordinator({
  app: electronApp,
  ensurePrimaryWindowVisible,
  errorReporter,
  initialArgv,
  isMacOS,
  navigateToRoute,
}: DeepLinkCoordinatorOptions): DeepLinkCoordinator {
  const pendingRoutes: DeepLinkRoute[] = [];
  const logger =
    typeof sharedRuntime.getRootStructuredLogger === "function"
      ? (
          sharedRuntime.getRootStructuredLogger as () => ReturnType<
            typeof runtimeLogger
          >
        )()
      : runtimeLogger();
  async function flushPendingDeepLinks(): Promise<void> {
    if (pendingRoutes.length === 0 || !electronApp.isReady()) return;
    const targetWindow = await ensurePrimaryWindowVisible();
    if (!targetWindow) return;
    const route = pendingRoutes.at(-1);
    pendingRoutes.length = 0;
    if (route) await navigateToRoute(targetWindow, route);
  }
  function queueRoute(route: DeepLinkRoute): void {
    pendingRoutes.push(route);
    if (!electronApp.isReady()) return;
    flushPendingDeepLinks().catch((error) => {
      errorReporter.reportNonFatal(normalizeError(error), {
        kind: "flush-pending-deep-links",
      });
    });
  }
  function queueCodexDeepLinkUrl(url: string, hostId?: string | null): boolean {
    const route = parseCodexDeepLink(url);
    if (!route) return false;
    queueRoute(
      route.kind === "localPluginDetail" && hostId != null
        ? {
            ...route,
            hostId,
          }
        : route,
    );
    return true;
  }
  const allowBareWindowsProjectPathArg = electronApp.isPackaged && !isMacOS;
  function queueInitialArgs(args: string[]): void {
    for (const route of parseProcessDeepLinks(args)) queueRoute(route);
  }
  function queueProcessArgs(args: string[]): boolean {
    const routes = parseProcessDeepLinks(args, {
      allowBareWindowsProjectPathArg,
    });
    for (const route of routes) queueRoute(route);
    return routes.length > 0;
  }
  function registerProtocolClient(): void {
    if (electronApp.isPackaged && process.platform !== "win32") return;
    try {
      if (!electronApp.setAsDefaultProtocolClient("codex")) {
        logger.warning("Failed to register codex:// protocol handler", {
          safe: {
            isPackaged: electronApp.isPackaged,
          },
          sensitive: {},
        });
      }
    } catch (error) {
      logger.warning("Failed to register codex:// protocol handler", {
        safe: {},
        sensitive: {
          error,
        },
      });
    }
  }
  if (isMacOS) {
    electronApp.on("open-url", (event, url) => {
      if (queueCodexDeepLinkUrl(url)) event.preventDefault();
    });
  }
  queueInitialArgs(initialArgv);
  return {
    registerProtocolClient,
    queueProcessArgs,
    flushPendingDeepLinks,
    queueCodexDeepLinkUrl,
  };
}
