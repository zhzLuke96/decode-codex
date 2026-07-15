// Restored from ref/webview/assets/remote-connections-page-CDoJq-7A.js; synced with ref/webview/assets/remote-connections-page-CWiJhSOT.js.
// Redirects the legacy remote connections route to the settings connection page.
import { Navigate } from "../vendor/react-router";
import { useIsRemoteConnectionsVisible } from "./remote-connection-visibility";
export function RemoteConnectionsPage() {
  return (
    <Navigate
      to={useIsRemoteConnectionsVisible() ? "/settings/connections" : "/"}
      replace
    />
  );
}
