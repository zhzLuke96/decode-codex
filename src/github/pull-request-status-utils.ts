// Restored from ref/webview/assets/pull-request-status-utils-ClWM1OCD.js
// pull-request-status-utils-ClWM1OCD chunk restored from the Codex webview bundle.
export function getPullRequestStatus({
  draft,
  merged,
  state,
}: {
  draft?: boolean;
  merged?: boolean;
  state: string;
}): "merged" | "draft" | "open" | "closed" {
  if (merged) return "merged";
  switch (state.toUpperCase()) {
    case "OPEN":
      return draft ? "draft" : "open";
    case "MERGED":
      return "merged";
    case "CLOSED":
      return "closed";
    default:
      return "closed";
  }
}

export function parsePullRequestNumber(url: string): number | null {
  const match = /\/pull\/(\d+)(?:$|[/?#])/.exec(url);
  return match ? Number(match[1]) : null;
}
