// Restored from ref/webview/assets/statsig-url-config-CBN_IuJR.js
type StatsigUrlConfigLike = {
  url?: unknown;
};
function parseHttpsUrl(value: unknown) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  try {
    new URL(trimmed);
  } catch {
    return null;
  }
  return trimmed.startsWith("https://") ? trimmed : null;
}
function getStatsigUrlConfig(
  config: StatsigUrlConfigLike,
  fallbackUrl: string,
) {
  return parseHttpsUrl(config.url) ?? fallbackUrl;
}
export { getStatsigUrlConfig };
