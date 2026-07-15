// Restored from ref/webview/assets/app-initial~app-main~home-ambient-suggestions-content-C1TXIiPK.js
// Route matcher for home ambient suggestion announcements.
import { matchPath, useLocation } from "../../vendor/react-router";

const HOME_AMBIENT_SUGGESTION_ROUTE_PATTERNS = ["/", "/local/:conversationId"];

export function useIsHomeAmbientSuggestionsRoute(): boolean {
  const location = useLocation();
  return HOME_AMBIENT_SUGGESTION_ROUTE_PATTERNS.some(
    (path) => matchPath({ path, end: true }, location.pathname) != null,
  );
}
