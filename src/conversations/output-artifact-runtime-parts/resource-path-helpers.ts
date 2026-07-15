// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
import {
  ensureLeadingSlashForDrivePath,
  isRawAbsolutePath,
  joinRawWorkspacePath,
  normalizePosixPath,
  normalizeRawWorkspacePath,
} from "./path-helpers";

type ProjectlessResourcePathOptionsLike = {
  cwd: string | null;
  projectlessOutputDirectory: string | null;
  resourcePath: string;
};

export function resolveWorkspacePathFromCwdValue(
  cwd: string,
  path: string,
): string {
  const normalizedCwd = normalizeRawWorkspacePath(cwd),
    normalizedPath = normalizeRawWorkspacePath(path);
  return isRawAbsolutePath(normalizedPath) || normalizedCwd === ""
    ? ensureLeadingSlashForDrivePath(normalizedPath)
    : ensureLeadingSlashForDrivePath(
        joinRawWorkspacePath(normalizedCwd, normalizedPath),
      );
}

export function normalizeArtifactPathKeyValue(path: string): string {
  return normalizeRawWorkspacePath(path).toLowerCase();
}

export function isProjectlessResourcePathInsideOutput(
  options: ProjectlessResourcePathOptionsLike,
): boolean {
  if (options.projectlessOutputDirectory == null) return true;
  const outputDirectory = normalizeProjectlessResourcePath(
    options.cwd,
    options.projectlessOutputDirectory,
  ).replace(/\/+$/, "");
  if (outputDirectory === "") return false;

  const resourcePath = normalizeProjectlessResourcePath(
    options.cwd,
    options.resourcePath,
  );
  return (
    resourcePath === outputDirectory ||
    resourcePath.startsWith(`${outputDirectory}/`)
  );
}

function normalizeProjectlessResourcePath(
  cwd: string | null,
  resourcePath: string,
): string {
  const resolvedPath = resolveWorkspacePathFromCwdValue(
    cwd ?? "",
    normalizeRawWorkspacePath(resourcePath),
  );
  return resolvedPath === ""
    ? ""
    : normalizeArtifactPathKeyValue(normalizePosixPath(resolvedPath));
}
