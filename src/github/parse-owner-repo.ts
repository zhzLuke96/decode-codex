// Restored from ref/webview/assets/parse-owner-repo-C5HIXlEB.js
// parse-owner-repo-C5HIXlEB chunk restored from the Codex webview bundle.
type OwnerRepo = {
  owner: string;
  repoName: string;
};

export function baseEach<TValue>(
  collection: ArrayLike<TValue> | Record<string, TValue> | null | undefined,
  iteratee: (
    value: TValue,
    key: number | string,
    collection: unknown,
  ) => false | void,
) {
  if (collection == null) return collection;
  if (
    Array.isArray(collection) ||
    typeof (collection as { length?: unknown }).length === "number"
  ) {
    const arrayLike = collection as ArrayLike<TValue>;
    for (let index = 0; index < arrayLike.length; index += 1) {
      if (iteratee(arrayLike[index], index, collection) === false) break;
    }
    return collection;
  }
  const object = collection as Record<string, TValue>;
  for (const key of Object.keys(object)) {
    if (iteratee(object[key], key, collection) === false) break;
  }
  return collection;
}

export const forEachCollection = baseEach;

export function initParseOwnerRepoChunk() {}

export function parseOwnerRepo(value: string): OwnerRepo | null {
  try {
    let normalized = value.trim();
    const scpLike = /^(?<user>[^@]+)@(?<host>[^:]+):(?<path>.+)$/.exec(
      normalized,
    );
    let host: string | null = null;
    if (scpLike?.groups?.path && scpLike.groups.host) {
      host = scpLike.groups.host;
      normalized = `${host}/${scpLike.groups.path}`;
    } else {
      const protocolMatch = /^(?<proto>[a-z]+):\/\/(?<rest>.+)$/i.exec(
        normalized,
      );
      if (protocolMatch?.groups?.rest) normalized = protocolMatch.groups.rest;
    }
    normalized = normalized
      .replace(/^[a-z]+:\/\//i, "")
      .replace(/^[^@]+@/, "")
      .replace(/[?#].*$/, "")
      .replace(/\.git$/i, "");
    const parts = normalized.split("/").filter(Boolean);
    if (!host && parts.length > 0) host = parts[0] ?? null;
    const pathParts = host ? parts.slice(1) : parts;
    if (pathParts.length < 2) return null;
    const repoName = pathParts[pathParts.length - 1];
    const owner = pathParts[pathParts.length - 2];
    return !owner || !repoName ? null : { owner, repoName };
  } catch {
    return null;
  }
}

export function parseGitHubOwnerRepo(value: string): OwnerRepo | null {
  try {
    const trimmed = value.trim();
    if (!trimmed) return null;
    const withoutQuery = trimmed.replace(/[?#].*$/, "");
    const scpPath = /^(?:[^@]+)@github\.com:(?<path>.+)$/i.exec(withoutQuery)
      ?.groups?.path;
    let pathParts: string[];
    if (scpPath) {
      pathParts = scpPath.split("/").filter(Boolean);
    } else {
      const hasProtocol = /^[a-z][a-z0-9+.-]*:\/\//i.test(withoutQuery);
      if (!hasProtocol && !/^github\.com\//i.test(withoutQuery)) return null;
      const parsed = new URL(
        hasProtocol ? withoutQuery : `https://${withoutQuery}`,
      );
      if (parsed.hostname.toLowerCase() !== "github.com") return null;
      pathParts = parsed.pathname.split("/").filter(Boolean);
    }
    return pathParts.length === 2
      ? parseOwnerRepo(withoutQuery.replace(/\/+$/, ""))
      : null;
  } catch {
    return null;
  }
}
