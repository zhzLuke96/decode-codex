// Restored from ref/.vite/build/comment-preload.js
// Page and frame URL matching helpers for browser sidebar comment anchors.

type BrowserSidebarLocationLike = {
  location: {
    href: string;
  };
};

export function frameUrlMatchesWindow(
  frameUrl: string | null | undefined,
  frameWindow: BrowserSidebarLocationLike,
): boolean {
  return frameUrl == null || frameWindow.location.href === frameUrl;
}

export function areBrowserSidebarPageUrlsEquivalent(
  firstPageUrl: string,
  secondPageUrl: string,
): boolean {
  const firstUrl = parseBrowserSidebarPageUrl(firstPageUrl);
  const secondUrl = parseBrowserSidebarPageUrl(secondPageUrl);
  if (firstUrl == null || secondUrl == null) {
    return firstPageUrl === secondPageUrl;
  }

  if (isHttpUrl(firstUrl) && isHttpUrl(secondUrl)) {
    return (
      firstUrl.origin === secondUrl.origin &&
      firstUrl.pathname === secondUrl.pathname &&
      firstUrl.search === secondUrl.search
    );
  }

  if (firstUrl.protocol === "file:" && secondUrl.protocol === "file:") {
    return (
      firstUrl.pathname === secondUrl.pathname &&
      firstUrl.search === secondUrl.search
    );
  }

  return firstPageUrl === secondPageUrl;
}

export function parseBrowserSidebarPageUrl(pageUrl: string): URL | null {
  try {
    return new URL(pageUrl);
  } catch {
    return null;
  }
}

function isHttpUrl(url: URL): boolean {
  return url.protocol === "http:" || url.protocol === "https:";
}
