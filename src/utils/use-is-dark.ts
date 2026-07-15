// Restored from ref/webview/assets/use-is-dark-Dz6aJFFs.js
// UseIsDark chunk restored from the Codex webview bundle.
import React from "react";
var currentIsDark = null,
  subscribers = new Set(),
  rootObserver = null,
  headObserver = null,
  colorSchemeQuery = null;
function notifyThemeSubscribers() {
  for (let listener of subscribers) listener();
}
function refreshCurrentIsDark() {
  let nextIsDark = detectCurrentIsDark();
  nextIsDark !== currentIsDark &&
    ((currentIsDark = nextIsDark), notifyThemeSubscribers());
}
function watchStylesheetLink(link) {
  if (link.rel !== "stylesheet") return;
  if (link.sheet) {
    queueMicrotask(() => {
      refreshCurrentIsDark();
    });
    return;
  }
  let onLoadOrError = () => {
    refreshCurrentIsDark();
  };
  link.addEventListener("load", onLoadOrError, {
    once: true,
  });
  link.addEventListener("error", onLoadOrError, {
    once: true,
  });
}
function handleHeadMutation(event) {
  if (event.type === "childList") {
    let addedStylesheet = false;
    for (let node of Array.from(event.addedNodes))
      node instanceof HTMLLinkElement &&
        node.rel === "stylesheet" &&
        (watchStylesheetLink(node), (addedStylesheet = true));
    (event.removedNodes.length > 0 || !addedStylesheet) &&
      refreshCurrentIsDark();
    return;
  }
  if (event.type === "attributes") {
    let target = event.target;
    if (
      target instanceof HTMLLinkElement &&
      target.rel === "stylesheet" &&
      (event.attributeName === "href" ||
        event.attributeName === "media" ||
        event.attributeName === "rel")
    ) {
      watchStylesheetLink(target);
      return;
    }
    refreshCurrentIsDark();
  }
}
function startDarkThemeObservers() {
  if (typeof window > "u" || rootObserver || headObserver) return;
  refreshCurrentIsDark();
  rootObserver = new MutationObserver((mutations) => {
    for (let mutation of mutations)
      if (mutation.type === "attributes") {
        refreshCurrentIsDark();
        break;
      }
  });
  rootObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class", "style"],
  });
  let head = document.head;
  head &&
    ((headObserver = new MutationObserver((mutations) => {
      for (let mutation of mutations)
        if (mutation.type === "childList" || mutation.type === "attributes") {
          handleHeadMutation(mutation);
          break;
        }
    })),
    headObserver.observe(head, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["href", "media", "rel"],
    }));
  typeof window < "u" &&
    typeof window.matchMedia == "function" &&
    ((colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)")),
    colorSchemeQuery.addEventListener("change", refreshCurrentIsDark));
}
function stopDarkThemeObservers() {
  rootObserver?.disconnect();
  headObserver?.disconnect();
  rootObserver = null;
  headObserver = null;
  colorSchemeQuery?.removeEventListener("change", refreshCurrentIsDark);
  colorSchemeQuery = null;
}
function subscribeToDarkThemeChanges(callback) {
  return (
    subscribers.add(callback),
    startDarkThemeObservers(),
    () => {
      subscribers.delete(callback);
      subscribers.size === 0 && stopDarkThemeObservers();
    }
  );
}
function getCurrentIsDarkSnapshot() {
  return currentIsDark;
}
export function useIsDark() {
  return React.useSyncExternalStore(
    subscribeToDarkThemeChanges,
    getCurrentIsDarkSnapshot,
    getCurrentIsDarkSnapshot,
  );
}
function relativeLuminance(r, g, b) {
  let toLinear = (value) => {
      let channel = value / 255;
      return channel <= 0.03928
        ? channel / 12.92
        : ((channel + 0.055) / 1.055) ** 2.4;
    },
    rLinear = toLinear(r),
    gLinear = toLinear(g),
    bLinear = toLinear(b);
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}
function parseCssColorToRgb(color) {
  let normalized = color.trim().toLowerCase();
  if (!normalized) return null;
  if (normalized.startsWith("#")) {
    let hex = normalized.slice(1),
      expand = (digit) => digit + digit;
    return hex.length === 3 || hex.length === 4
      ? {
          r: parseInt(expand(hex[0]), 16),
          g: parseInt(expand(hex[1]), 16),
          b: parseInt(expand(hex[2]), 16),
        }
      : hex.length === 6 || hex.length === 8
        ? {
            r: parseInt(hex.slice(0, 2), 16),
            g: parseInt(hex.slice(2, 4), 16),
            b: parseInt(hex.slice(4, 6), 16),
          }
        : null;
  }
  let rgbMatch = normalized.match(/^rgba?\(([^)]+)\)$/);
  if (rgbMatch) {
    let rgbParts = rgbMatch[1].split(/\s*,\s*/).map((item) => item.trim());
    if (rgbParts.length >= 3) {
      let r = parseRgbChannel(rgbParts[0]),
        g = parseRgbChannel(rgbParts[1]),
        b = parseRgbChannel(rgbParts[2]);
      if (r != null && g != null && b != null)
        return {
          r: r,
          g: g,
          b: b,
        };
    }
    return null;
  }
  let hslMatch = normalized.match(/^hsla?\(([^)]+)\)$/);
  if (hslMatch) {
    let hslParts = hslMatch[1].split(/\s*,\s*/).map((item) => item.trim());
    if (hslParts.length >= 3) {
      let h = parseFloat(hslParts[0]),
        s = parseCssPercentage(hslParts[1]),
        l = parseCssPercentage(hslParts[2]);
      if ([h, s, l].every((item) => !Number.isNaN(item))) {
        let { r, g, b } = hslToRgb(h, s, l);
        return {
          r,
          g,
          b,
        };
      }
    }
    return null;
  }
  return null;
}
function parseRgbChannel(token) {
  if (token.endsWith("%")) {
    let percent = parseFloat(token.slice(0, -1));
    return Number.isNaN(percent) ? null : Math.round((percent / 100) * 255);
  }
  let value = parseFloat(token);
  return Number.isNaN(value) ? null : Math.max(0, Math.min(255, value));
}
function parseCssPercentage(token) {
  if (token.endsWith("%")) {
    let percent = parseFloat(token.slice(0, -1));
    return Number.isNaN(percent) ? 0 : percent / 100;
  }
  let value = parseFloat(token);
  return Number.isNaN(value) ? 0 : value / 100;
}
function hslToRgb(h, s, l) {
  let chroma = (1 - Math.abs(2 * l - 1)) * s,
    huePrime = (h % 360) / 60,
    secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1)),
    r1 = 0,
    g1 = 0,
    b1 = 0;
  huePrime >= 0 && huePrime < 1
    ? ([r1, g1, b1] = [chroma, secondComponent, 0])
    : huePrime >= 1 && huePrime < 2
      ? ([r1, g1, b1] = [secondComponent, chroma, 0])
      : huePrime >= 2 && huePrime < 3
        ? ([r1, g1, b1] = [0, chroma, secondComponent])
        : huePrime >= 3 && huePrime < 4
          ? ([r1, g1, b1] = [0, secondComponent, chroma])
          : huePrime >= 4 && huePrime < 5
            ? ([r1, g1, b1] = [secondComponent, 0, chroma])
            : huePrime >= 5 &&
              huePrime < 6 &&
              ([r1, g1, b1] = [chroma, 0, secondComponent]);
  let lightnessMatch = l - chroma / 2;
  return {
    r: Math.round((r1 + lightnessMatch) * 255),
    g: Math.round((g1 + lightnessMatch) * 255),
    b: Math.round((b1 + lightnessMatch) * 255),
  };
}
function readTokenBackgroundColor() {
  if (typeof window > "u") return null;
  try {
    let probe = document.createElement("div");
    probe.style.display = "none";
    probe.style.backgroundColor = "var(--color-token-editor-background)";
    document.body.appendChild(probe);
    let backgroundColor = getComputedStyle(probe).backgroundColor || "";
    return (probe.remove(), backgroundColor);
  } catch {
    return null;
  }
}
function detectCurrentIsDark() {
  let backgroundColor = readTokenBackgroundColor();
  if (!backgroundColor) return null;
  let rgb = parseCssColorToRgb(backgroundColor);
  return rgb ? relativeLuminance(rgb.r, rgb.g, rgb.b) < 0.5 : null;
}
