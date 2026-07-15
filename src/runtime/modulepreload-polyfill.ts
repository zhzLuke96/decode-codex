// Restored from ref/webview/assets/modulepreload-polyfill-D8LKdSkT.js
// Modulepreload polyfill initializer used by the Codex webview entry chunk.
let modulepreloadPolyfillInstalled = false;
export function installModulepreloadPolyfill(): void {
  if (modulepreloadPolyfillInstalled) return;
  modulepreloadPolyfillInstalled = true;
  const relList = document.createElement("link").relList;
  if (relList?.supports?.("modulepreload")) return;
  for (const link of document.querySelectorAll<HTMLLinkElement>(
    'link[rel="modulepreload"]',
  )) {
    preloadLink(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) {
        if (node instanceof HTMLLinkElement && node.rel === "modulepreload") {
          preloadLink(node);
        }
      }
    }
  }).observe(document, {
    childList: true,
    subtree: true,
  });
}
function fetchOptionsForModulepreload(link: HTMLLinkElement): RequestInit {
  const options: RequestInit = {};
  if (link.integrity) options.integrity = link.integrity;
  if (link.referrerPolicy) options.referrerPolicy = link.referrerPolicy;
  options.credentials =
    link.crossOrigin === "use-credentials"
      ? "include"
      : link.crossOrigin === "anonymous"
        ? "omit"
        : "same-origin";
  return options;
}
function preloadLink(
  link: HTMLLinkElement & {
    ep?: boolean;
  },
): void {
  if (link.ep) return;
  link.ep = true;
  fetch(link.href, fetchOptionsForModulepreload(link));
}
