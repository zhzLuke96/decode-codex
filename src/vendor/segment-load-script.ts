// Restored from ref/webview/assets/load-script-BifiZc4M.js
// Segment analytics script-loader helpers used by the bundled analytics runtime.
type SegmentAnalyticsGlobal = {
  _cdn?: string;
  [key: string]: unknown;
};
type ScriptAttributes = Record<string, string>;
const SEGMENT_CDN_PATTERN =
  /(https:\/\/.*)\/analytics\.js\/v1\/(?:.*?)\/(?:platform|analytics.*)?/;
let analyticsGlobalKey = "analytics";
let configuredCdnUrl: string | undefined;
function loadScriptL(): boolean {
  return typeof window < "u";
}
function loadScriptU(): boolean {
  return !loadScriptL();
}
function loadScriptF(): void {}
function loadScriptNamespaceInit(): void {
  analyticsGlobalKey = "analytics";
}
function loadScriptO(): SegmentAnalyticsGlobal | undefined {
  return (window as unknown as Record<string, SegmentAnalyticsGlobal>)[
    analyticsGlobalKey
  ];
}
function loadScriptC(globalKey: string): void {
  analyticsGlobalKey = globalKey;
}
function loadScriptS(analyticsGlobal: SegmentAnalyticsGlobal): void {
  (window as unknown as Record<string, SegmentAnalyticsGlobal>)[
    analyticsGlobalKey
  ] = analyticsGlobal;
}
function findSegmentCdnFromScripts(): string | undefined {
  let cdnUrl: string | undefined;
  Array.prototype.slice
    .call(document.querySelectorAll("script"))
    .forEach((script: HTMLScriptElement) => {
      const source = script.getAttribute("src") ?? "";
      const match = SEGMENT_CDN_PATTERN.exec(source);
      if (match?.[1]) cdnUrl = match[1];
    });
  return cdnUrl;
}
function getConfiguredSegmentCdn(): string | undefined {
  return configuredCdnUrl ?? loadScriptO()?._cdn;
}
function loadScriptR(): string {
  return (
    getConfiguredSegmentCdn() ??
    findSegmentCdnFromScripts() ??
    "https://cdn.segment.com"
  );
}
const loadScriptI = function getSegmentIntegrationsBaseUrl(): string {
  return `${loadScriptR()}/next-integrations`;
};
const loadScriptA = function setSegmentCdnUrl(cdnUrl: string): void {
  const analyticsGlobal = loadScriptO();
  if (analyticsGlobal) analyticsGlobal._cdn = cdnUrl;
  configuredCdnUrl = cdnUrl;
};
function loadScriptCdnInit(): void {
  loadScriptNamespaceInit();
}
function findScriptBySource(source: string): HTMLScriptElement | undefined {
  return Array.prototype.slice
    .call(window.document.querySelectorAll("script"))
    .find((script: HTMLScriptElement) => script.src === source);
}
function loadScriptT(
  source: string,
  attributes?: ScriptAttributes,
): Promise<HTMLScriptElement> {
  const existingScript = findScriptBySource(source);
  if (existingScript !== undefined) {
    const status = existingScript.getAttribute("status");
    if (status === "loaded") return Promise.resolve(existingScript);
    if (status === "loading") {
      return new Promise((resolve, reject) => {
        existingScript.addEventListener("load", () => {
          resolve(existingScript);
        });
        existingScript.addEventListener("error", (event) => {
          reject(event);
        });
      });
    }
  }
  return new Promise((resolve, reject) => {
    const script = window.document.createElement("script");
    script.type = "text/javascript";
    script.src = source;
    script.async = true;
    script.setAttribute("status", "loading");
    for (const [name, value] of Object.entries(attributes ?? {})) {
      script.setAttribute(name, value);
    }
    script.onload = () => {
      script.onerror = script.onload = null;
      script.setAttribute("status", "loaded");
      resolve(script);
    };
    script.onerror = () => {
      script.onerror = script.onload = null;
      script.setAttribute("status", "error");
      reject(Error(`Failed to load ${source}`));
    };
    const firstScript = window.document.querySelector("script");
    if (firstScript) {
      firstScript.parentElement?.insertBefore(script, firstScript);
    } else {
      window.document.head.appendChild(script);
    }
  });
}
function loadScriptN(source: string): Promise<void> {
  const script = findScriptBySource(source);
  if (script !== undefined) script.remove();
  return Promise.resolve();
}
function loadScriptEntryInit(): void {}
export {
  loadScriptI,
  loadScriptO,
  loadScriptC,
  loadScriptF,
  loadScriptR,
  loadScriptNamespaceInit,
  loadScriptU,
  loadScriptT,
  loadScriptCdnInit,
  loadScriptL,
  loadScriptN,
  loadScriptA,
  loadScriptEntryInit,
  loadScriptS,
};
