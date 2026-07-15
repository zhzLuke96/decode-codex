// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js
// Google Workspace app-connect bridge.

import * as React from "react";
import {
  appsListQueryKey,
  hardRefreshAppsList,
  startAppConnectionFlow,
  type AppConnectApp,
} from "../../connectors/apps-queries";
import { useAppConnectFlow } from "../../utils/use-app-connect-flow";
import { useQueryClient } from "../query-client/react-query-context";
import { sendHostRequest } from "../host-request-runtime";

export function useConnectApp(options: { hostId?: string } = {}) {
  return useAppConnectFlow(options);
}

export function AppConnectDialog({
  app,
  hostId,
  onClose,
  onOAuthStarted,
}: {
  app: AppConnectApp;
  hostId: string;
  onClose: () => void;
  onOAuthStarted?: (input: {
    app: AppConnectApp;
    redirectUrl: string;
    resumeTarget?: "app-connect" | "plugin-install";
  }) => void;
}) {
  const queryClient = useQueryClient();
  const hasStartedRef = React.useRef(false);
  React.useEffect(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;
    void startAppConnectionFlow({
      app,
      queryClient,
      openInBrowser(url) {
        void sendHostRequest("open-external-link", {
          params: {
            href: url,
            initiator: "open_in_browser_bridge",
            openTarget: "external-browser",
          },
        }).catch(() => {
          globalThis.open?.(url, "_blank", "noopener,noreferrer");
        });
      },
    })
      .then((result) => {
        if (result.kind === "oauth-started") {
          onOAuthStarted?.({
            app,
            redirectUrl: result.redirectUrl,
            resumeTarget: "app-connect",
          });
        }
        if (result.kind === "connected-directly") {
          void hardRefreshAppsList({ hostId, queryClient });
        }
      })
      .finally(onClose);
  }, [app, hostId, onClose, onOAuthStarted, queryClient]);
  return null;
}

export function invalidateGoogleWorkspaceAppsList(
  queryClient: {
    invalidateQueries?: (options: { queryKey: readonly unknown[] }) => unknown;
  },
  hostId: string,
): void {
  void queryClient.invalidateQueries?.({ queryKey: appsListQueryKey(hostId) });
}
