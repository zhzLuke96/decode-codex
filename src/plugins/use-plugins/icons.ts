// Restored from ref/webview/assets/use-plugins-Dex8E4w_.js
// Plugin icon selection and deterministic fallback icons.

import type { PluginIconPaths, PluginSummary } from "./types";
const CONNECTOR_ICON_COLORS: Record<string, string> = {
  gmail: "#fc413d",
  "google-calendar": "#3c90ff",
  "google-docs": "#3186ff",
  "google-drive": "#0ebc5f",
  "google-sheets": "#009954",
  "google-slides": "#fec700",
};
const FALLBACK_ICON_SVGS = [
  createFallbackIconSvg("#2E9EFF", "window"),
  createFallbackIconSvg("#FFA43D", "box"),
  createFallbackIconSvg("#7DCC60", "check"),
  createFallbackIconSvg("#BEBEBE", "compass"),
  createFallbackIconSvg("#41CEF9", "globe"),
  createFallbackIconSvg("#5856D6", "star"),
  createFallbackIconSvg("#FEBD08", "edit"),
  createFallbackIconSvg("#36DEC3", "meter"),
].map(svgToDataUrl);
export function resolvePluginIconPaths(plugin: PluginSummary): PluginIconPaths {
  const knownConnectorIcon = resolveKnownConnectorIcon(plugin);
  if (knownConnectorIcon != null) {
    return {
      composerIconPath: knownConnectorIcon,
      logoPath: knownConnectorIcon,
    };
  }
  const composerIconPath =
    plugin.interface?.composerIcon ?? plugin.interface?.composerIconUrl ?? null;
  const logoPath = plugin.interface?.logo ?? plugin.interface?.logoUrl ?? null;
  if (composerIconPath != null || logoPath != null) {
    return {
      composerIconPath: composerIconPath ?? "",
      logoPath: logoPath ?? "",
    };
  }
  const fallbackIcon = deterministicFallbackIcon(plugin.id);
  return {
    composerIconPath: fallbackIcon,
    logoPath: fallbackIcon,
  };
}
function resolveKnownConnectorIcon(plugin: PluginSummary): string | null {
  const names = [plugin.name, plugin.id, plugin.interface?.displayName ?? ""]
    .map(normalizeConnectorName)
    .filter((name) => name.length > 0);
  for (const name of names) {
    const icon = lookupConnectorIcon(name);
    if (icon != null) return icon;
  }
  return null;
}
function lookupConnectorIcon(name: string): string | null {
  const connectorName = name.replace(/^connector-/u, "");
  const iconColor =
    CONNECTOR_ICON_COLORS[name] ??
    CONNECTOR_ICON_COLORS[connectorName] ??
    CONNECTOR_ICON_COLORS[connectorName.replace(/-mcp-server$/u, "")];
  return iconColor == null ? null : createConnectorIconDataUrl(iconColor);
}
function normalizeConnectorName(value: string): string {
  return (value.split("@")[0] ?? "")
    .trim()
    .toLowerCase()
    .split(/[^a-z0-9]+/gu)
    .filter((part) => part.length > 0)
    .join("-");
}
function deterministicFallbackIcon(pluginId: string): string {
  let hash = 0;
  for (let index = 0; index < pluginId.length; index += 1) {
    hash = (hash * 31 + pluginId.charCodeAt(index)) % FALLBACK_ICON_SVGS.length;
  }
  return FALLBACK_ICON_SVGS[hash] ?? "";
}
function createConnectorIconDataUrl(color: string): string {
  return svgToDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192">
      <rect width="192" height="192" rx="40" fill="#fff"/>
      <rect x="36" y="36" width="120" height="120" rx="28" fill="${color}"/>
      <path d="M62 98h68M96 64v68" stroke="#fff" stroke-width="16" stroke-linecap="round"/>
    </svg>
  `);
}
function createFallbackIconSvg(color: string, kind: string): string {
  const glyph =
    kind === "check"
      ? '<path d="M7 12.5 10.5 16 17 8.5" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>'
      : kind === "globe"
        ? '<circle cx="12" cy="12" r="6.8" stroke="#fff" stroke-width="2"/><path d="M5.5 12h13M12 5.3c2 2 2 11.4 0 13.4M12 5.3c-2 2-2 11.4 0 13.4" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>'
        : kind === "star"
          ? '<path d="m12 5 2 4.2 4.6.7-3.3 3.2.8 4.6-4.1-2.2-4.1 2.2.8-4.6-3.3-3.2 4.6-.7L12 5Z" fill="#fff"/>'
          : kind === "meter"
            ? '<path d="M6 15.5a6 6 0 1 1 12 0" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="m12 13 3-4" stroke="#fff" stroke-width="2" stroke-linecap="round"/>'
            : kind === "edit"
              ? '<path d="M6 16.5 7 13l7.2-7.2 3 3L10 16l-4 .5Z" fill="#fff"/>'
              : kind === "compass"
                ? '<circle cx="12" cy="12" r="7" stroke="#fff" stroke-width="2"/><path d="m14.8 8.2-1.6 5-5 1.6 1.6-5 5-1.6Z" fill="#fff"/>'
                : kind === "box"
                  ? '<path d="m12 4.8 6.2 3.6v7.2L12 19.2l-6.2-3.6V8.4L12 4.8Z" fill="#fff"/>'
                  : '<rect x="5" y="6" width="14" height="12" rx="2.2" fill="#fff"/><path d="M5 10h14" stroke="#d9d9d9" stroke-width="1.8"/>';
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" fill="${color}"/>
      ${glyph}
    </svg>
  `;
}
function svgToDataUrl(svg: string): string {
  return `data:image/svg+xml,${encodeURIComponent(svg.trim())}`;
}
