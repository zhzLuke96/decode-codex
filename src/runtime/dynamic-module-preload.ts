// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js
// Dynamic import preloader used by lazily loaded conversation UI modules.
type PreloadResult =
  | { status: "fulfilled"; value: unknown }
  | { status: "rejected"; reason: unknown };

type VitePreloadErrorEvent = Event & {
  payload?: unknown;
};

const MODULE_PRELOAD_REL = "modulepreload";
const seenPreloadUrls: Record<string, true> = {};

export function initDynamicModulePreloadRuntime(): void {
  // The restored module initializes its preload cache at module evaluation time.
}

export function preloadDynamicImport<TModule>(
  loader: () => Promise<TModule>,
  dependencies: readonly string[],
  importerUrl: string,
): Promise<TModule> {
  let preloadPromise: Promise<PreloadResult[]> = Promise.resolve([]);

  if (dependencies.length > 0) {
    let existingLinks = document.getElementsByTagName("link");
    let nonceMeta = document.querySelector("meta[property=csp-nonce]");
    let nonce = nonceMeta?.nonce || nonceMeta?.getAttribute("nonce");

    preloadPromise = settleAll(
      dependencies.map((dependency) =>
        preloadDependency(dependency, importerUrl, existingLinks, nonce),
      ),
    );
  }

  return preloadPromise.then((results) => {
    for (const result of results) {
      if (result.status === "rejected") {
        dispatchPreloadError(result.reason);
      }
    }
    return loader().catch(dispatchPreloadError) as Promise<TModule>;
  });
}

function settleAll(values: readonly unknown[]): Promise<PreloadResult[]> {
  return Promise.all(
    values.map((value) =>
      Promise.resolve(value).then(
        (settledValue) => ({
          status: "fulfilled" as const,
          value: settledValue,
        }),
        (reason) => ({ status: "rejected" as const, reason }),
      ),
    ),
  );
}

function preloadDependency(
  dependency: string,
  importerUrl: string,
  existingLinks: HTMLCollectionOf<HTMLLinkElement>,
  nonce: string | null | undefined,
): Promise<void> | void {
  let href = resolveDependencyUrl(dependency, importerUrl);
  if (href in seenPreloadUrls) return;
  seenPreloadUrls[href] = true;

  let isCss = href.endsWith(".css");
  let selectorSuffix = isCss ? '[rel="stylesheet"]' : "";

  if (importerUrl) {
    for (let index = existingLinks.length - 1; index >= 0; index -= 1) {
      let link = existingLinks[index];
      if (link.href === href && (!isCss || link.rel === "stylesheet")) {
        return;
      }
    }
  } else if (document.querySelector(`link[href="${href}"]${selectorSuffix}`)) {
    return;
  }

  let link = document.createElement("link");
  link.rel = isCss ? "stylesheet" : MODULE_PRELOAD_REL;
  if (!isCss) {
    link.as = "script";
  }
  link.crossOrigin = "";
  link.href = href;
  if (nonce) {
    link.setAttribute("nonce", nonce);
  }
  document.head.appendChild(link);

  if (isCss) {
    return new Promise((resolve, reject) => {
      link.addEventListener("load", () => resolve());
      link.addEventListener("error", () =>
        reject(Error(`Unable to preload CSS for ${href}`)),
      );
    });
  }
}

function resolveDependencyUrl(dependency: string, importerUrl: string): string {
  return new URL(dependency, importerUrl).href;
}

function dispatchPreloadError(error: unknown): never | undefined {
  let event = new Event("vite:preloadError", { cancelable: true });
  (event as VitePreloadErrorEvent).payload = error;
  window.dispatchEvent(event);
  if (!event.defaultPrevented) {
    throw error;
  }
}
