// Restored from ref/webview/assets/use-workspace-file-search-D0QLzi6-.js
// use-workspace-file-search-D0QLzi6- chunk restored from the Codex webview bundle.
import React from "react";
import { useRequiredAppServerManagerForHost } from "../app-server/app-server-manager-hooks";
import type { AppServerManager } from "../app-server/app-server-manager-hooks/registry";
import {
  formatWorkspaceRelativePath,
  joinHostFilesystemPath,
} from "../boundaries/rpc.facade";
import { vscodeApiH as vscodeLogger } from "../boundaries/vscode-api";
import { scoreQueryMatch } from "./score-query-match";
import { sortBy } from "./sort-by";
import { usePlatform } from "./use-platform";
import { useStableCallback } from "./use-stable-callback";
type WorkspaceFileSearchMatchType = "file" | "directory";
type WorkspaceFileSearchRawFile = {
  file_name: string;
  match_type: WorkspaceFileSearchMatchType;
  path: string;
  root: string;
};
export type WorkspaceFileSearchFile = {
  label: string;
  matchType: WorkspaceFileSearchMatchType;
  path: string;
  relativePathWithoutFileName: string;
  fsPath: string;
};
type WorkspaceFileSearchResponse = {
  query: string;
  files: WorkspaceFileSearchRawFile[];
};
type WorkspaceFileSearchSession = {
  update(query: string): Promise<void>;
  stop(): Promise<void>;
};
type WorkspaceFileSearchManager = AppServerManager & {
  createFuzzyFileSearchSession(options: {
    roots: string[];
    onUpdated: (response: WorkspaceFileSearchResponse) => void;
    onCompleted: () => void;
  }): Promise<WorkspaceFileSearchSession>;
};
type WorkspaceFileSearchSortResult = {
  file: WorkspaceFileSearchFile;
  score: number;
  index: number;
};
export type UseWorkspaceFileSearchOptions = {
  hostId: string;
  includeDirectories?: boolean;
  onFiles?: (response: {
    files: WorkspaceFileSearchFile[];
    query: string;
  }) => void;
  query: string;
  roots: string[] | null | undefined;
};
const IGNORED_PATH_SEGMENTS = new Set([
  ".git",
  ".hg",
  ".next",
  ".pnpm-store",
  ".svn",
  ".turbo",
  ".yarn",
  "build",
  "coverage",
  "dist",
  "node_modules",
]);

export function initWorkspaceFileSearchRuntime(): void {}

export function useWorkspaceFileSearch({
  hostId,
  includeDirectories = false,
  onFiles,
  query,
  roots,
}: UseWorkspaceFileSearchOptions): {
  files: WorkspaceFileSearchFile[] | null;
  isLoading: boolean;
} {
  const { platform } = usePlatform();
  const handleFiles = useStableCallback(
    (response: WorkspaceFileSearchResponse) => {
      if (roots == null) return;
      onFiles?.({
        files: buildWorkspaceFileResults({
          files: response.files,
          includeDirectories,
          isWindowsHost: platform === "windows",
          query: response.query,
          roots,
        }),
        query: response.query,
      });
    },
  );
  const { response, isLoading } = useFuzzyFileSearchSession(
    hostId,
    roots,
    query,
    handleFiles,
  );
  const trimmedQuery = query.trim();
  const activeResponse =
    response != null && trimmedQuery.length > 0 ? response : null;
  const files =
    activeResponse == null || roots == null
      ? null
      : buildWorkspaceFileResults({
          files: activeResponse.files,
          includeDirectories,
          isWindowsHost: platform === "windows",
          query: activeResponse.query,
          roots,
        });
  return {
    files,
    isLoading,
  };
}
function useFuzzyFileSearchSession(
  hostId: string,
  roots: string[] | null | undefined,
  query: string,
  onResponse: (response: WorkspaceFileSearchResponse) => void,
): {
  response: WorkspaceFileSearchResponse | null;
  isLoading: boolean;
} {
  const manager = useRequiredAppServerManagerForHost(
    hostId,
  ) as WorkspaceFileSearchManager;
  const [response, setResponse] =
    React.useState<WorkspaceFileSearchResponse | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const sessionPromiseRef =
    React.useRef<Promise<WorkspaceFileSearchSession> | null>(null);
  const sessionTokenRef = React.useRef<object | null>(null);
  const hasRoots = roots != null && roots.length > 0;
  const rootsKey = roots?.join("\0") ?? "";
  const ensureSession = React.useEffectEvent(async () => {
    if (roots == null || roots.length === 0) return null;
    if (sessionPromiseRef.current != null) return sessionPromiseRef.current;
    const sessionToken = {};
    sessionTokenRef.current = sessionToken;
    const sessionPromise = manager
      .createFuzzyFileSearchSession({
        roots,
        onUpdated: (nextResponse) => {
          if (sessionTokenRef.current !== sessionToken) return;
          const normalizedResponse = {
            query: nextResponse.query,
            files: nextResponse.files,
          };
          setResponse(normalizedResponse);
          onResponse(normalizedResponse);
          setIsLoading(true);
        },
        onCompleted: () => {
          if (sessionTokenRef.current === sessionToken) setIsLoading(false);
        },
      })
      .catch((error) => {
        if (sessionPromiseRef.current === sessionPromise) {
          sessionPromiseRef.current = null;
        }
        if (sessionTokenRef.current === sessionToken) {
          sessionTokenRef.current = null;
        }
        throw error;
      });
    sessionPromiseRef.current = sessionPromise;
    return sessionPromise;
  });
  const stopSession = React.useEffectEvent(async () => {
    const sessionPromise = sessionPromiseRef.current;
    if (sessionPromise != null) {
      sessionPromiseRef.current = null;
      sessionTokenRef.current = null;
      await (await sessionPromise).stop();
    }
  });
  React.useEffect(() => {
    setResponse(null);
    setIsLoading(false);
    return () => {
      stopSession().catch(logFuzzySearchCloseFailure);
    };
  }, [manager, rootsKey]);
  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!hasRoots || query.length === 0) {
        setResponse(null);
        setIsLoading(false);
        return;
      }
      try {
        setIsLoading(true);
        const session = await ensureSession();
        if (cancelled || session == null) return;
        await session.update(query);
      } catch (error) {
        if (!cancelled) {
          vscodeLogger.error("Error fetching fuzzy file search", {
            safe: {},
            sensitive: {
              error,
            },
          });
          setIsLoading(false);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [ensureSession, hasRoots, manager, query, rootsKey]);
  return {
    response,
    isLoading,
  };
}
function shouldIncludeRawFile(
  file: WorkspaceFileSearchRawFile,
  includeDirectories: boolean,
): boolean {
  return (
    (file.match_type === "file" ||
      (includeDirectories && file.match_type === "directory")) &&
    !file.path
      .split(/[\\/]+/)
      .some((segment) => IGNORED_PATH_SEGMENTS.has(segment))
  );
}
function buildWorkspaceFileResults({
  files,
  includeDirectories,
  isWindowsHost,
  query,
  roots,
}: {
  files: WorkspaceFileSearchRawFile[];
  includeDirectories: boolean;
  isWindowsHost: boolean;
  query: string;
  roots: string[];
}): WorkspaceFileSearchFile[] {
  return sortWorkspaceFilesByQuery(
    files
      .filter((file) => shouldIncludeRawFile(file, includeDirectories))
      .map((file) =>
        buildWorkspaceFileResult(file, roots.length > 1, isWindowsHost),
      ),
    query,
  );
}
function buildWorkspaceFileResult(
  { file_name, match_type, path, root }: WorkspaceFileSearchRawFile,
  includeWorkspaceRootLabel: boolean,
  isWindowsHost: boolean,
): WorkspaceFileSearchFile {
  const displayPath = formatWorkspaceRelativePath({
    root,
    relativePath: path,
    includeWorkspaceRootLabel,
  });
  const fileNameOffset = displayPath.lastIndexOf("/");
  return {
    label: file_name,
    matchType: match_type,
    path: includeWorkspaceRootLabel
      ? joinHostFilesystemPath(root, path, isWindowsHost)
      : displayPath,
    relativePathWithoutFileName: displayPath.substring(0, fileNameOffset),
    fsPath: joinHostFilesystemPath(root, path, isWindowsHost),
  };
}
function sortWorkspaceFilesByQuery(
  files: WorkspaceFileSearchFile[],
  query: string,
): WorkspaceFileSearchFile[] {
  const trimmedQuery = query.trim();
  if (trimmedQuery.length === 0) return files;
  const scoredFiles: WorkspaceFileSearchSortResult[] = files.map(
    (file, index) => ({
      file,
      score: scoreQueryMatch(file.label, trimmedQuery),
      index,
    }),
  );
  return sortBy<WorkspaceFileSearchSortResult>(scoredFiles, [
    (result: WorkspaceFileSearchSortResult) => -result.score,
    (result: WorkspaceFileSearchSortResult) => result.file.label,
    (result: WorkspaceFileSearchSortResult) => result.index,
  ]).map((result) => result.file);
}
function logFuzzySearchCloseFailure(error: unknown): void {
  vscodeLogger.warning("Failed to close fuzzy file search session", {
    safe: {},
    sensitive: {
      error,
    },
  });
}
