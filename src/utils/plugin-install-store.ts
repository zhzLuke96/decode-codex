// Restored from ref/webview/assets/plugin-install-store-BO7kpZzR.js
import React from "react";
type PluginLike = {
  plugin?: {
    id?: string;
  };
};
type RequiredApp = {
  app: {
    id: string;
    [key: string]: unknown;
  };
  status: string;
};
type RequiredBrowserExtension = unknown;
type PluginInstallOptions = {
  origin?: unknown;
  postInstallComposerPrefill?: unknown;
  postInstallNewConversation?: unknown;
  tryInChatCwd?: unknown;
  telemetry?: unknown;
  [key: string]: unknown;
};
type PluginInstallSession =
  | {
      kind: "closed";
    }
  | (PluginInstallOptions & {
      kind: "installing";
      hostId: string;
      installStarted: boolean;
      plugin: PluginLike;
      progressPercent: number;
    })
  | (PluginInstallOptions & {
      kind: "details";
      plugin: PluginLike;
    })
  | (PluginInstallOptions & {
      kind: "needsApps";
      plugin: PluginLike;
      requiredApps: RequiredApp[];
      requiredBrowserExtensions: RequiredBrowserExtension[];
    })
  | (PluginInstallOptions & {
      kind: "connectApp";
      app: RequiredApp["app"];
      plugin: PluginLike;
      requiredApps: RequiredApp[];
      requiredBrowserExtensions: RequiredBrowserExtension[];
    });
type SessionUpdater =
  | PluginInstallSession
  | ((current: PluginInstallSession) => PluginInstallSession);
let currentSession: PluginInstallSession = {
  kind: "closed",
};
const listeners = new Set<() => void>();
function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
function getSessionSnapshot() {
  return currentSession;
}
function setPluginInstallSession(nextSession: SessionUpdater) {
  const resolvedSession =
    typeof nextSession === "function"
      ? nextSession(currentSession)
      : nextSession;
  if (Object.is(resolvedSession, currentSession)) {
    return;
  }
  currentSession = resolvedSession;
  for (const listener of listeners) {
    listener();
  }
}
export function pluginInstallStore() {
  const session = React.useSyncExternalStore(
    subscribe,
    getSessionSnapshot,
    getSessionSnapshot,
  );
  const claimPluginInstall = React.useCallback(
    ({ hostId, pluginId }: { hostId: string; pluginId: string }) => {
      let claimed = false;
      setPluginInstallSession((current) => {
        if (
          current.kind !== "installing" ||
          current.hostId !== hostId ||
          current.plugin.plugin?.id !== pluginId ||
          current.installStarted
        ) {
          return current;
        }
        claimed = true;
        return {
          ...current,
          installStarted: true,
        };
      });
      return claimed;
    },
    [],
  );
  const openPluginInstall = React.useCallback(
    (
      hostId: string,
      plugin: PluginLike,
      options: PluginInstallOptions = {},
    ) => {
      setPluginInstallSession((current) =>
        current.kind === "installing"
          ? current
          : {
              ...options,
              kind: "installing",
              hostId,
              installStarted: false,
              plugin,
              progressPercent: 0,
            },
      );
    },
    [],
  );
  const openPluginInstallDetails = React.useCallback(
    (plugin: PluginLike, options: PluginInstallOptions = {}) => {
      setPluginInstallSession({
        ...options,
        kind: "details",
        plugin,
      });
    },
    [],
  );
  const closePluginInstall = React.useCallback(() => {
    setPluginInstallSession({
      kind: "closed",
    });
  }, []);
  const setPluginInstallProgress = React.useCallback(
    (progressPercent: number) => {
      setPluginInstallSession((current) =>
        current.kind === "installing"
          ? {
              ...current,
              progressPercent,
            }
          : current,
      );
    },
    [],
  );
  const setPluginInstallNeedsApps = React.useCallback(
    ({
      apps,
      browserExtensions,
      connectingAppId,
      options,
      plugin,
    }: {
      apps: Array<RequiredApp["app"]>;
      browserExtensions: RequiredBrowserExtension[];
      connectingAppId?: string;
      options?: PluginInstallOptions;
      plugin: PluginLike;
    }) => {
      const requiredApps = apps.map(toRequiredApp);
      const connectingApp = requiredApps.find(
        (requiredApp) => requiredApp.app.id === connectingAppId,
      );
      if (connectingApp == null) {
        setPluginInstallSession({
          ...options,
          kind: "needsApps",
          plugin,
          requiredApps,
          requiredBrowserExtensions: browserExtensions,
        });
        return;
      }
      setPluginInstallSession({
        ...options,
        kind: "connectApp",
        plugin,
        app: connectingApp.app,
        requiredApps,
        requiredBrowserExtensions: browserExtensions,
      });
    },
    [],
  );
  const openRequiredAppConnect = React.useCallback((appId: string) => {
    setPluginInstallSession((current) => {
      if (current.kind !== "needsApps") {
        return current;
      }
      const requiredApp = current.requiredApps.find(
        (item) => item.app.id === appId,
      );
      return requiredApp == null
        ? current
        : {
            ...current,
            kind: "connectApp",
            app: requiredApp.app,
          };
    });
  }, []);
  const closePluginInstallAppConnect = React.useCallback(() => {
    setPluginInstallSession(resolveAppConnectClose);
  }, []);
  const markRequiredAppStatus = React.useCallback(
    ({ appId, status }: { appId: string; status: string }) => {
      setPluginInstallSession((current) =>
        current.kind !== "needsApps" && current.kind !== "connectApp"
          ? current
          : {
              ...current,
              requiredApps: current.requiredApps.map((item) =>
                item.app.id === appId
                  ? {
                      ...item,
                      status,
                    }
                  : item,
              ),
            },
      );
    },
    [],
  );
  return {
    claimPluginInstall,
    closePluginInstallAppConnect,
    closePluginInstall,
    markRequiredAppStatus,
    openPluginInstallDetails,
    openPluginInstall,
    openRequiredAppConnect,
    session,
    setPluginInstallProgress,
    setPluginInstallNeedsApps,
  };
}
function resolveAppConnectClose(
  session: PluginInstallSession,
): PluginInstallSession {
  if (session.kind !== "connectApp") {
    return session;
  }
  if (
    session.requiredApps.length === 1 &&
    session.requiredBrowserExtensions.length === 0 &&
    session.requiredApps[0]?.status !== "connected"
  ) {
    return {
      kind: "closed",
    };
  }
  return {
    kind: "needsApps",
    origin: session.origin,
    postInstallComposerPrefill: session.postInstallComposerPrefill,
    postInstallNewConversation: session.postInstallNewConversation,
    plugin: session.plugin,
    requiredApps: session.requiredApps,
    requiredBrowserExtensions: session.requiredBrowserExtensions,
    tryInChatCwd: session.tryInChatCwd,
    telemetry: session.telemetry,
  };
}
function toRequiredApp(app: RequiredApp["app"]): RequiredApp {
  return {
    app,
    status: "pending",
  };
}
