// Restored from ref/webview/assets/initial-route-atom-ozazkUDm.js
// initial-route-atom-ozazkUDm chunk restored from the Codex webview bundle.
function readInitialRoute(): string | null {
  const initialRouteMeta = document.querySelector('meta[name="initial-route"]');
  if (initialRouteMeta?.content?.trim()) {
    return initialRouteMeta.content.trim();
  }

  const initialRoute = new URL(window.location.href).searchParams.get(
    "initialRoute",
  );
  return initialRoute ? initialRoute.trim() : null;
}

export const initialRouteAtom = readInitialRoute();
