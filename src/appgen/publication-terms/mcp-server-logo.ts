// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7-B4ar2dlW.js
// MCP server icon selection helpers.
import { once } from "../../runtime/commonjs-interop";

export type McpServerIcon = {
  sizes?: readonly string[] | string | null;
  src?: string | null;
  theme?: "dark" | "light" | string | null;
};

export type McpServerInfoWithIcons = {
  icons?: readonly McpServerIcon[] | null;
};

export type McpServerLogo = {
  logoDarkUrl: string;
  logoUrl: string;
};

export function getMcpServerLogo(
  serverInfo: McpServerInfoWithIcons | null | undefined,
): McpServerLogo | null {
  const icons = (serverInfo?.icons ?? []).flatMap((icon) => {
    const src = typeof icon.src === "string" ? icon.src.trim() : "";
    return src.length === 0 ? [] : [{ ...icon, src }];
  });
  const defaultLogo = pickLargestIconSource(
    icons.filter((icon) => icon.theme == null),
  );
  const lightLogo =
    pickLargestIconSource(icons.filter((icon) => icon.theme === "light")) ??
    defaultLogo;
  const darkLogo =
    pickLargestIconSource(icons.filter((icon) => icon.theme === "dark")) ??
    defaultLogo;
  const logoUrl = lightLogo ?? darkLogo;
  const logoDarkUrl = darkLogo ?? lightLogo;

  return logoUrl == null || logoDarkUrl == null
    ? null
    : { logoDarkUrl, logoUrl };
}

function pickLargestIconSource(
  icons: readonly (McpServerIcon & { src: string })[],
) {
  let bestSource: string | null = null;
  let bestArea = 0;

  for (const icon of icons) {
    const area = getIconArea(icon);
    if (bestSource == null || area > bestArea) {
      bestSource = icon.src;
      bestArea = area;
    }
  }

  return bestSource;
}

function getIconArea(icon: McpServerIcon) {
  const sizes = Array.isArray(icon.sizes)
    ? icon.sizes
    : typeof icon.sizes === "string"
      ? icon.sizes.split(/\s+/u)
      : null;
  if (
    sizes == null ||
    sizes.some((size) => size.trim().toLowerCase() === "any")
  )
    return Infinity;

  return sizes.reduce((area, size) => {
    const match = /^(\d+)x(\d+)$/u.exec(size.trim());
    return match == null
      ? area
      : Math.max(area, Number(match[1]) * Number(match[2]));
  }, 0);
}

export const initMcpServerLogoHelpers = once(() => {});

export { getMcpServerLogo as H, initMcpServerLogoHelpers as U };
