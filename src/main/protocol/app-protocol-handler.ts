// Restored from ref/.vite/build/workspace-root-drop-handler-DeLi4ACJ.js

import * as path from "node:path";
import { app, protocol, session } from "electron";
import * as sharedRuntime from "../boundaries/shared-node-runtime.facade";
import {
  createStaticFileResponse,
  createVideoFileResponse,
  isImageOrVideoFile,
  isVideoFile,
  notFoundResponse,
} from "./app-file-response";

const APP_PROTOCOL_ORIGIN = "app://-";

const APP_FILE_ORIGIN = "app://fs";

const APP_FILE_PATH_PREFIX = "/@fs";

const APP_INDEX_FILE = "index.html";

export function webviewRootFromModuleDir(moduleDir: string): string {
  return path.join(moduleDir, "..", "..", "webview");
}

export function createWebviewAppUrl(
  initialRoute?: string | null,
  options?: {
    mcpAppSandboxDevtools?: boolean;
  },
): string {
  const url = new URL(`${APP_PROTOCOL_ORIGIN}/${APP_INDEX_FILE}`);
  if (initialRoute) url.searchParams.set("initialRoute", initialRoute);
  if (options?.mcpAppSandboxDevtools) {
    url.searchParams.set("mcpAppSandboxDevtools", "1");
  }
  return url.toString();
}

export function filePathFromAppFileUrl(value: string): string | null {
  try {
    const url = new URL(value);
    if (
      url.protocol !== "app:" ||
      url.host !== "fs" ||
      !url.pathname.startsWith(APP_FILE_PATH_PREFIX)
    ) {
      return null;
    }
    return decodeAppFilePathname(url.pathname);
  } catch {
    return null;
  }
}

export function registerAppProtocolHandler(webviewRoot: string): void {
  registerAppSchemePrivileges();
  session.defaultSession.webRequest.onBeforeRequest(
    {
      urls: [`${APP_FILE_ORIGIN}/*`],
    },
    (details, callback) => {
      callback({
        cancel: !isTrustedAppFileRequest(details),
      });
    },
  );
  protocol.handle("app", async (request) => {
    const filePath = resolveAppProtocolPath(request.url, webviewRoot);
    if (!filePath) return notFoundResponse();
    return isVideoFile(filePath)
      ? createVideoFileResponse(request, filePath)
      : createStaticFileResponse(filePath);
  });
}

function registerAppSchemePrivileges(): void {
  protocol.registerSchemesAsPrivileged([
    {
      scheme: "app",
      privileges: {
        standard: true,
        secure: true,
        stream: true,
        supportFetchAPI: true,
      },
    },
  ]);
}

function resolveAppProtocolPath(
  requestUrl: string,
  webviewRoot: string,
): string | null {
  const rawPath = extractAppUrlPath(requestUrl);
  if (!rawPath) return null;
  try {
    if (hasPathTraversal(normalizeBundlePath(decodeURIComponent(rawPath)))) {
      return null;
    }
  } catch {
    return null;
  }
  const url = new URL(requestUrl);
  if (url.protocol !== "app:") return null;
  if (url.pathname.startsWith(APP_FILE_PATH_PREFIX)) {
    return url.host === "fs" ? decodeAppFilePathname(url.pathname) : null;
  }
  if (url.host && url.host !== "-") return null;
  const normalizedPath = normalizeBundlePath(url.pathname || "/");
  const relativePath = normalizedPath.startsWith("/")
    ? normalizedPath.slice(1)
    : normalizedPath;
  const normalizedRelativePath = path.posix.normalize(relativePath);
  if (normalizedRelativePath === "." || normalizedRelativePath === "") {
    return path.join(webviewRoot, APP_INDEX_FILE);
  }
  if (
    normalizedRelativePath.startsWith("..") ||
    normalizedRelativePath.includes("/..")
  ) {
    return null;
  }
  const filePath = path.join(webviewRoot, ...normalizedRelativePath.split("/"));
  const relativeToRoot = path.relative(webviewRoot, filePath);
  return relativeToRoot.startsWith("..") || path.isAbsolute(relativeToRoot)
    ? null
    : filePath;
}

function extractAppUrlPath(value: string): string | null {
  if (!value.startsWith("app://")) return null;
  const withoutProtocol = value.slice("app://".length);
  const slashIndex = withoutProtocol.indexOf("/");
  return (
    (slashIndex >= 0 ? withoutProtocol.slice(slashIndex) : "/")
      .split("?")[0]
      ?.split("#")[0] ?? null
  );
}

function hasPathTraversal(value: string): boolean {
  return value.split("/").some((segment) => {
    return segment === ".." || /^\.\.[. ]+$/.test(segment);
  });
}

function normalizeBundlePath(value: string): string {
  const normalize = sharedRuntime.normalizePathSeparators as
    | ((pathValue: string) => string)
    | undefined;
  return typeof normalize === "function" ? normalize(value) : value;
}

function toNativeFilePath(value: string): string {
  const convert = sharedRuntime.stripLeadingSlashFromWindowsDrivePath as
    | ((pathValue: string) => string)
    | undefined;
  return typeof convert === "function" ? convert(value) : value;
}

function isSafeAbsoluteFilePath(value: string): boolean {
  const isSafe = sharedRuntime.isAbsoluteFilePath as
    | ((pathValue: string) => boolean)
    | undefined;
  if (typeof isSafe === "function") return isSafe(value);
  return path.posix.isAbsolute(value) || path.win32.isAbsolute(value);
}

function decodeAppFilePathname(pathname: string): string | null {
  const encodedPath = pathname.slice(APP_FILE_PATH_PREFIX.length);
  if (!encodedPath) return null;
  let decodedPath: string;
  try {
    decodedPath = decodeURIComponent(encodedPath);
  } catch {
    return null;
  }
  const normalizedPath = normalizeBundlePath(decodedPath);
  if (!isSafeAbsoluteFilePath(normalizedPath)) return null;
  const filePath = path.resolve(toNativeFilePath(normalizedPath));
  return isImageOrVideoFile(filePath) ? filePath : null;
}

function isTrustedAppFileRequest(details: {
  frame?: {
    url?: string | null;
  } | null;
}): boolean {
  const frameOrigin = originFromUrl(details.frame?.url ?? null);
  return (
    frameOrigin === APP_PROTOCOL_ORIGIN || frameOrigin === rendererDevOrigin()
  );
}

function originFromUrl(value: string | null): string | null {
  if (value == null) return null;
  try {
    const url = new URL(value);
    return url.protocol === "app:" ? `app://${url.host}` : url.origin;
  } catch {
    return null;
  }
}

function rendererDevOrigin(): string | null {
  if (app.isPackaged) return null;
  const value = process.env.ELECTRON_RENDERER_URL;
  if (value == null || value.trim().length === 0) return null;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:"
      ? url.origin
      : null;
  } catch {
    return null;
  }
}
