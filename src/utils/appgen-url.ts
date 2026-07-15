// Restored from ref/webview/assets/appgen-url-n_yb-0uU.js
// appgen-url-n_yb-0uU chunk restored from the Codex webview bundle.
export function formatAppgenUrlWithoutProtocol(
  url: string | null,
): string | null {
  if (url == null) return null;
  const parsed = new URL(url);
  return `${parsed.host}${parsed.pathname === "/" ? "" : parsed.pathname}${parsed.search}${parsed.hash}`;
}

export function isAppgenUrlWithinBase(url: string, baseUrl: string): boolean {
  try {
    const parsedUrl = new URL(url);
    const parsedBaseUrl = new URL(baseUrl);
    if (parsedUrl.origin !== parsedBaseUrl.origin) return false;
    const basePath = normalizePathname(parsedBaseUrl.pathname);
    const path = normalizePathname(parsedUrl.pathname);
    return (
      basePath === "/" || path === basePath || path.startsWith(`${basePath}/`)
    );
  } catch {
    return false;
  }
}

function normalizePathname(pathname: string): string {
  return pathname.replace(/\/+$/u, "") || "/";
}
