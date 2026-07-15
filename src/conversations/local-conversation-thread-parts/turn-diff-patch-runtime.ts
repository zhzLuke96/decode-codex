// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Patch and path helpers backing the local turn-diff card.

import {
  clearGitStatusCache,
  gitMetadataFromCwdQuery,
} from "../../runtime/git-query-runtime";
import {
  appRootScope,
  createParametricAtom,
} from "../../runtime/onboarding-scope-runtime";
import { disabledQueryResult } from "../../runtime/query-result-runtime";
import { normalizePath } from "../../runtime/path-helpers-runtime";
import { resolveHostConfig } from "../../review/review-route-runtime";

type PatchChange = {
  content?: string;
  move_path?: string | null;
  type?: string;
  unified_diff?: string;
};

type GitDirOriginsParams = {
  params?: {
    dirs?: string[];
    hostId?: string | null;
  };
  source?: string;
};

type QueryClientLike = {
  invalidateQueries?: (filters?: unknown) => Promise<unknown> | unknown;
};

export const gitDirOriginsQueryAtom = createParametricAtom<
  GitDirOriginsParams,
  unknown
>(appRootScope, ({ params, source } = {}, { get }) => {
  const dirs = params?.dirs ?? [];
  const hostConfig = resolveHostConfig(params?.hostId ?? undefined);
  const metadataQueries = dirs.map(
    (dir) =>
      get(gitMetadataFromCwdQuery, {
        cwd: dir,
        enabled: true,
        hostConfig,
        operationSource: source ?? "thread_diff",
        watchForGitInit: false,
      }) as {
        data?: { commonDir?: string; root?: string };
        isFetching?: boolean;
        isPending?: boolean;
      },
  );
  const result = disabledQueryResult({
    origins: dirs.map((dir, index) => {
      const metadata = metadataQueries[index]?.data;
      return {
        commonDir: metadata?.commonDir ?? metadata?.root ?? dir,
        dir,
        root: metadata?.root ?? dir,
      };
    }),
  });
  return {
    ...result,
    isFetching: metadataQueries.some(
      (query) => query?.isFetching === true || query?.isPending === true,
    ),
  };
});

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}

function normalizeFilesystemPath(path: string): string {
  return normalizePath(path).replace(/\/+$/u, "");
}

export function isAbsoluteFilesystemPath(path: string): boolean {
  return (
    path.startsWith("/") || path.startsWith("//") || /^[A-Za-z]:\//u.test(path)
  );
}

function stripPathBase(path: string, base: string | null | undefined): string {
  if (!base) return normalizePath(path);
  const normalizedBase = normalizeFilesystemPath(base);
  const normalizedPath = normalizePath(path);
  const compareBase = isAbsoluteFilesystemPath(normalizedBase)
    ? normalizedBase.toLowerCase()
    : normalizedBase;
  const comparePath = isAbsoluteFilesystemPath(normalizedBase)
    ? normalizedPath.toLowerCase()
    : normalizedPath;
  if (comparePath.startsWith(`${compareBase}/`)) {
    return normalizedPath.slice(normalizedBase.length + 1);
  }
  const baseName = `${compareBase.split("/").at(-1) ?? compareBase}/`;
  const nestedIndex = comparePath.indexOf(baseName);
  return nestedIndex !== -1 &&
    (nestedIndex === 0 || comparePath[nestedIndex - 1] === "/")
    ? normalizedPath.slice(nestedIndex + baseName.length)
    : normalizedPath;
}

function posixJoin(...parts: string[]): string {
  return parts
    .filter((part) => part.length > 0)
    .join("/")
    .replace(/\/+/gu, "/");
}

function scopedPath(
  path: string,
  cwd: string | null | undefined,
  gitRoot: string | null | undefined,
): string {
  const normalizedPath = normalizePath(path);
  if (gitRoot == null) return normalizedPath;
  const pathRelativeToRoot = stripPathBase(path, gitRoot);
  if (
    pathRelativeToRoot !== normalizedPath ||
    cwd == null ||
    normalizePath(cwd) === normalizePath(gitRoot)
  ) {
    return pathRelativeToRoot;
  }
  const cwdRelativeToRoot = stripPathBase(cwd, gitRoot);
  return cwdRelativeToRoot === normalizePath(cwd) ||
    normalizedPath === cwdRelativeToRoot ||
    normalizedPath.startsWith(`${cwdRelativeToRoot}/`)
    ? normalizedPath
    : posixJoin(cwdRelativeToRoot, normalizedPath);
}

function normalizeChange(
  change: unknown,
  cwd: string | null | undefined,
  gitRoot: string | null | undefined,
): PatchChange {
  if (!isRecord(change)) return {};
  return {
    content: typeof change.content === "string" ? change.content : "",
    move_path:
      typeof change.move_path === "string"
        ? scopedPath(change.move_path, cwd, gitRoot)
        : null,
    type: typeof change.type === "string" ? change.type : undefined,
    unified_diff:
      typeof change.unified_diff === "string" ? change.unified_diff : "",
  };
}

function splitContentLines(content: string): string[] {
  const lines = content.replace(/\r\n/gu, "\n").split("\n");
  return lines.length > 0 && lines[lines.length - 1] === ""
    ? lines.slice(0, -1)
    : lines;
}

export function buildPatchUnifiedDiff(
  path: string,
  change: PatchChange,
): string | null {
  if (change.type === "update") {
    const fromPath = path;
    const toPath = change.move_path ?? path;
    const diff = (change.unified_diff ?? "").trimStart();
    const hasFileHeader = /\n?---\s/u.test(diff);
    const hasDiffHeader = /^diff --git /mu.test(diff);
    const body = hasFileHeader
      ? diff
      : `--- a/${fromPath}\n+++ b/${toPath}\n${diff}`;
    return `${hasDiffHeader ? "" : `diff --git a/${fromPath} b/${toPath}\n`}${body}`;
  }
  if (change.type === "add") {
    const lines = splitContentLines(change.content ?? "");
    const hunk =
      lines.length > 0
        ? `@@ -0,0 +1,${lines.length} @@\n${lines.map((line) => `+${line}`).join("\n")}\n`
        : "";
    return [
      `diff --git a/${path} b/${path}`,
      "new file mode 100644",
      "--- /dev/null",
      `+++ b/${path}`,
      hunk,
    ]
      .filter(Boolean)
      .join("\n");
  }
  if (change.type === "delete") {
    const lines = splitContentLines(change.content ?? "");
    const hunk =
      lines.length > 0
        ? `@@ -1,${lines.length} +0,0 @@\n${lines.map((line) => `-${line}`).join("\n")}\n`
        : "";
    return [
      `diff --git a/${path} b/${path}`,
      "deleted file mode 100644",
      `--- a/${path}`,
      "+++ /dev/null",
      hunk,
    ]
      .filter(Boolean)
      .join("\n");
  }
  return null;
}

export function buildScopedDiff(
  changes: unknown,
  cwd?: string | null,
  gitRoot?: string | null,
): string {
  if (typeof changes === "string") return changes;
  if (!isRecord(changes)) return "";
  return Object.entries(changes)
    .flatMap(([path, change]) => {
      const diff = buildPatchUnifiedDiff(
        scopedPath(path, cwd, gitRoot),
        normalizeChange(change, cwd, gitRoot),
      );
      return diff == null ? [] : [diff];
    })
    .join("\n");
}

export function relativePath(path: string, cwd: string): string {
  return stripPathBase(path, cwd);
}

function parsePosixPath(path: string) {
  const normalized = normalizePath(path);
  const slashIndex = normalized.lastIndexOf("/");
  const base =
    slashIndex === -1 ? normalized : normalized.slice(slashIndex + 1);
  const dir =
    slashIndex <= 0
      ? slashIndex === 0
        ? "/"
        : ""
      : normalized.slice(0, slashIndex);
  const dotIndex = base.lastIndexOf(".");
  return {
    base,
    dir,
    ext: dotIndex > 0 ? base.slice(dotIndex) : "",
    name: dotIndex > 0 ? base.slice(0, dotIndex) : base,
    root: normalized.startsWith("/") ? "/" : "",
  };
}

export const nodePath = {
  posix: {
    parse: parsePosixPath,
    sep: "/",
  },
};

export async function refreshGitStatus({
  queryClient,
}: {
  cwd?: string;
  hostConfig?: unknown;
  operationSource?: string;
  queryClient?: QueryClientLike;
}): Promise<void> {
  await clearGitStatusCache({ queryClient });
}
