// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Resolves which review paths are marked `linguist-generated` by reading the
// relevant `.gitattributes` files (git root, cwd, ancestors, common dir) through
// the host bridge and evaluating their glob rules against each path.
import {
  useHostQuery,
  normalizePath,
  joinPath,
} from "../boundaries/onboarding-commons-externals.facade";

export type LinguistState = "set" | "unset" | "unspecified";

type LinguistMatcher = (path: string) => LinguistState | null;

interface AttributeRule {
  matches: (path: string) => boolean;
  state: LinguistState;
}

export interface UseLinguistGeneratedPathsParams {
  gitRoot: string | null | undefined;
  gitCommonDir: string | null | undefined;
  cwd: string | null | undefined;
  hostId: string;
  paths: string[];
}

export interface LinguistGeneratedPathsResult {
  hasUnhandledAttributesFiles: boolean;
  isReady: boolean;
  paths: Set<string>;
}

export function useLinguistGeneratedPaths({
  gitRoot,
  gitCommonDir,
  cwd,
  hostId,
  paths,
}: UseLinguistGeneratedPathsParams): LinguistGeneratedPathsResult {
  const { normalizedGitRoot, normalizedCwd, cwdRelativeToGitRoot } =
    normalizeGitRootAndCwd(gitRoot, cwd);
  const gitRootAttributesPath =
    normalizedGitRoot == null ? null : `${normalizedGitRoot}/.gitattributes`;
  const cwdAttributesPath =
    cwdRelativeToGitRoot != null && cwdRelativeToGitRoot !== ""
      ? `${normalizedCwd}/.gitattributes`
      : null;
  const ancestorAttributesPaths = collectAncestorAttributeFiles(
    normalizedGitRoot,
    paths,
  );
  const commonDirAttributesPath =
    gitCommonDir == null
      ? null
      : `${normalizePath(gitCommonDir)}/info/attributes`;
  const candidateAttributesPaths = [
    gitRootAttributesPath,
    cwdAttributesPath,
    commonDirAttributesPath,
    ...ancestorAttributesPaths,
  ].filter(isNonEmptyString);
  const uniqueAttributesPaths = Array.from(new Set(candidateAttributesPaths));

  const existingAttributesPaths = usePathsExist(uniqueAttributesPaths, hostId);
  const hasGitRootAttributes =
    gitRootAttributesPath != null &&
    existingAttributesPaths.paths.has(gitRootAttributesPath);
  const hasCwdAttributes =
    cwdAttributesPath != null &&
    existingAttributesPaths.paths.has(cwdAttributesPath);

  let ambiguousSlashPaths: string[];
  if (cwdRelativeToGitRoot == null || cwdRelativeToGitRoot === "") {
    ambiguousSlashPaths = [];
  } else {
    ambiguousSlashPaths = paths.filter((path) => {
      const normalized = normalizePath(path);
      return (
        normalized.includes("/") &&
        stripBasePrefix(normalized, cwdRelativeToGitRoot) == null
      );
    });
  }

  const ambiguousCandidatePaths = expandAmbiguousCandidatePaths({
    ambiguousSlashPaths,
    normalizedCwd,
    normalizedGitRoot,
  });
  const existingAmbiguousCandidatePaths = usePathsExist(
    ambiguousCandidatePaths,
    hostId,
  );

  const { data: gitRootAttributesData, isLoading: gitRootAttributesLoading } =
    useHostQuery("read-file", {
      params: { path: gitRootAttributesPath ?? "" },
      queryConfig: { enabled: hasGitRootAttributes },
    });
  const { data: cwdAttributesData, isLoading: cwdAttributesLoading } =
    useHostQuery("read-file", {
      params: { path: cwdAttributesPath ?? "" },
      queryConfig: { enabled: hasCwdAttributes },
    });

  const gitRootMatcher = buildLinguistMatcher(
    gitRootAttributesData?.contents ?? null,
  );
  const cwdRelativeMatcher =
    cwdRelativeToGitRoot == null || cwdRelativeToGitRoot === ""
      ? null
      : buildLinguistMatcher(cwdAttributesData?.contents ?? null, {
          basePath: cwdRelativeToGitRoot,
        });

  let cwdMatcher: LinguistMatcher | null;
  if (cwdRelativeToGitRoot == null || cwdRelativeToGitRoot === "") {
    cwdMatcher = null;
  } else {
    cwdMatcher = buildLinguistMatcher(cwdAttributesData?.contents ?? null);
  }

  const ambiguousBasePaths = resolveAmbiguousBasePaths({
    ambiguousSlashPaths,
    normalizedCwd,
    normalizedGitRoot,
    existingCandidatePaths: existingAmbiguousCandidatePaths.paths,
  });

  const isLinguistGenerated = (path: string): boolean => {
    const normalized = normalizePath(path);
    const cwdRelativeState = cwdRelativeMatcher?.(normalized) ?? null;
    if (cwdRelativeState != null) return cwdRelativeState === "set";
    if (
      isAmbiguousOrNested(normalized, cwdRelativeToGitRoot, ambiguousBasePaths)
    ) {
      const cwdState = cwdMatcher?.(normalized) ?? null;
      if (cwdState != null) return cwdState === "set";
    }
    return gitRootMatcher?.(normalized) === "set";
  };

  let generatedPaths: Set<string>;
  if (
    gitRootMatcher == null &&
    cwdRelativeMatcher == null &&
    cwdMatcher == null
  ) {
    generatedPaths = new Set();
  } else {
    generatedPaths = new Set(paths.filter(isLinguistGenerated));
  }

  const hasUnhandledAttributesFiles = Array.from(
    existingAttributesPaths.paths,
  ).some(
    (path) => path !== gitRootAttributesPath && path !== cwdAttributesPath,
  );
  const isReady =
    !existingAttributesPaths.isLoading &&
    !existingAmbiguousCandidatePaths.isLoading &&
    (!hasGitRootAttributes || !gitRootAttributesLoading) &&
    (!hasCwdAttributes || !cwdAttributesLoading);

  return {
    hasUnhandledAttributesFiles,
    isReady,
    paths: generatedPaths,
  };
}

function isNonEmptyString(value: string | null | undefined): value is string {
  return value != null && value.length > 0;
}

function collectAncestorAttributeFiles(
  gitRoot: string | null,
  paths: string[],
): string[] {
  if (gitRoot == null) return [];
  const result = new Set<string>();
  for (const path of paths) {
    const segments = normalizePath(path).split("/").filter(Boolean);
    for (let index = 0; index < segments.length - 1; index += 1) {
      result.add(
        joinPath(
          gitRoot,
          `${segments.slice(0, index + 1).join("/")}/.gitattributes`,
        ),
      );
    }
  }
  return Array.from(result);
}

function buildLinguistMatcher(
  contents: string | null,
  options: { basePath?: string } = {},
): LinguistMatcher | null {
  if (!contents) return null;
  const basePath =
    options.basePath == null
      ? null
      : normalizePath(options.basePath).replace(/^\/+/, "").replace(/\/+$/, "");
  const rules = contents
    .split(/\r?\n/)
    .map((line) => parseAttributeLine(line))
    .filter((rule): rule is AttributeRule => rule != null);
  if (rules.length === 0) return null;
  return (path) => {
    let state: LinguistState | null = null;
    const relative = stripBasePrefix(normalizePath(path), basePath);
    if (relative == null) return null;
    for (const rule of rules) if (rule.matches(relative)) state = rule.state;
    return state;
  };
}

function stripBasePrefix(path: string, base: string | null): string | null {
  if (base == null) return path;
  const prefix = `${base}/`;
  if (path === base) return "";
  return path.startsWith(prefix) ? path.slice(prefix.length) : null;
}

function isAmbiguousOrNested(
  path: string,
  cwdRelativeToGitRoot: string | null,
  ambiguousBasePaths: Set<string>,
): boolean {
  if (cwdRelativeToGitRoot == null || cwdRelativeToGitRoot === "") return false;
  return path.includes("/")
    ? ambiguousBasePaths.has(path)
    : stripBasePrefix(path, cwdRelativeToGitRoot) == null;
}

function parseAttributeLine(line: string): AttributeRule | null {
  const trimmed = line.trim();
  if (
    trimmed.length === 0 ||
    trimmed.startsWith("#") ||
    trimmed.startsWith("[attr]")
  ) {
    return null;
  }
  const tokens = trimmed.split(/\s+/);
  if (tokens.length < 2) return null;
  const matches = compileAttributePattern(tokens[0]);
  if (!matches) return null;
  const state = resolveLinguistState(tokens.slice(1));
  return state == null ? null : { matches, state };
}

function resolveLinguistState(tokens: string[]): LinguistState | null {
  let state: LinguistState | null = null;
  for (const token of tokens) {
    if (token === "linguist-generated" || token === "linguist-generated=true") {
      state = "set";
      continue;
    }
    if (
      token === "-linguist-generated" ||
      token === "linguist-generated=false"
    ) {
      state = "unset";
      continue;
    }
    if (token === "!linguist-generated") state = "unspecified";
  }
  return state;
}

function compileAttributePattern(
  pattern: string,
): ((path: string) => boolean) | null {
  if (!pattern) return null;
  const normalized = normalizePath(pattern)
    .replace(/^\/+/, "")
    .replace(/\/+$/, "");
  if (normalized.length === 0) return null;
  const isBare = !normalized.includes("/");
  const intermediate = isBare
    ? normalized
    : `^${globToRegexSource(normalized)}$`;
  const regex = isBare
    ? RegExp(`(^|/)${globToRegexSource(intermediate)}$`)
    : new RegExp(intermediate);
  return (path) => regex.test(normalizePath(path));
}

function globToRegexSource(glob: string): string {
  let source = "";
  for (let index = 0; index < glob.length; index += 1) {
    const char = glob[index];
    if (char === "*") {
      if (glob[index + 1] === "*") {
        if (glob[index + 2] === "/") {
          source += "(?:.*/)?";
          index += 2;
          continue;
        }
        source += ".*";
        index += 1;
        continue;
      }
      source += "[^/]*";
      continue;
    }
    if (char === "?") {
      source += "[^/]";
      continue;
    }
    source += escapeRegexChar(char);
  }
  return source;
}

function escapeRegexChar(char: string): string {
  return char.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
}

function usePathsExist(
  paths: string[],
  hostId: string,
): { isLoading: boolean; paths: Set<string> } {
  const enabled = paths.length > 0;
  const { data, isLoading } = useHostQuery("paths-exist", {
    params: { hostId, paths },
    queryConfig: { enabled },
  });
  const existing = new Set<string>(
    data?.existingPaths.map((path: string) => normalizePath(path)) ?? [],
  );
  return { isLoading, paths: existing };
}

function normalizeGitRootAndCwd(
  gitRoot: string | null | undefined,
  cwd: string | null | undefined,
): {
  normalizedGitRoot: string | null;
  normalizedCwd: string | null;
  cwdRelativeToGitRoot: string | null;
} {
  const normalizedGitRoot = normalizeTrailingSlash(gitRoot);
  const normalizedCwd = normalizeTrailingSlash(cwd);
  return {
    normalizedGitRoot,
    normalizedCwd,
    cwdRelativeToGitRoot: relativeToGitRoot(normalizedGitRoot, normalizedCwd),
  };
}

function normalizeTrailingSlash(
  value: string | null | undefined,
): string | null {
  return value == null ? null : normalizePath(value).replace(/\/+$/, "");
}

function relativeToGitRoot(
  gitRoot: string | null,
  cwd: string | null,
): string | null {
  if (gitRoot == null || cwd == null) return null;
  if (cwd === gitRoot) return "";
  const prefix = `${gitRoot}/`;
  return cwd.startsWith(prefix) ? cwd.slice(prefix.length) : null;
}

interface AmbiguousPathParams {
  ambiguousSlashPaths: string[];
  normalizedCwd: string | null;
  normalizedGitRoot: string | null;
}

function expandAmbiguousCandidatePaths({
  ambiguousSlashPaths,
  normalizedCwd,
  normalizedGitRoot,
}: AmbiguousPathParams): string[] {
  if (normalizedGitRoot == null || normalizedCwd == null) return [];
  return ambiguousSlashPaths.flatMap((path) => {
    const normalized = normalizePath(path);
    return [
      joinPath(normalizedGitRoot, normalized),
      joinPath(normalizedCwd, normalized),
    ];
  });
}

function resolveAmbiguousBasePaths({
  ambiguousSlashPaths,
  normalizedCwd,
  normalizedGitRoot,
  existingCandidatePaths,
}: AmbiguousPathParams & {
  existingCandidatePaths: Set<string>;
}): Set<string> {
  if (normalizedGitRoot == null || normalizedCwd == null) return new Set();
  return new Set(
    ambiguousSlashPaths.filter((path) => {
      const normalized = normalizePath(path);
      const gitRootCandidate = normalizePath(
        joinPath(normalizedGitRoot, normalized),
      );
      const cwdCandidate = normalizePath(joinPath(normalizedCwd, normalized));
      return (
        existingCandidatePaths.has(cwdCandidate) &&
        !existingCandidatePaths.has(gitRootCandidate)
      );
    }),
  );
}
