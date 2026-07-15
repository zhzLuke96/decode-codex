// Restored from ref/webview/assets/app-connect-oauth-CaBlbuQW.js
import { useAtom } from "jotai";
import { _appScopeX as createAppScopeAtom } from "../../boundaries/app-scope";
import type {
  AppConnectOAuthStateApi,
  PendingAppConnectOAuthByState,
  PendingAppConnectOAuthSetter,
} from "./types";
import { getUrlSearchParam, matchesResumeTarget } from "./types";
const pendingAppConnectOAuthAtom = createAppScopeAtom(
  {} as PendingAppConnectOAuthByState,
);
export function useAppConnectOAuthState(): AppConnectOAuthStateApi {
  const [pendingCallbacks, setPendingCallbacks] = useAtom(
    pendingAppConnectOAuthAtom,
  ) as [PendingAppConnectOAuthByState, PendingAppConnectOAuthSetter];
  return {
    claimAppConnectOAuthCallback: (callbackUrl) => {
      const oauthState = getUrlSearchParam(callbackUrl, "state");
      if (oauthState == null) return false;
      const pendingCallback = pendingCallbacks[oauthState] ?? null;
      if (pendingCallback == null || pendingCallback.claimed) return false;
      setPendingCallbacks((currentPending) => {
        const currentCallback = currentPending[oauthState] ?? null;
        return currentCallback == null || currentCallback.claimed
          ? currentPending
          : {
              ...currentPending,
              [oauthState]: {
                ...currentCallback,
                claimed: true,
              },
            };
      });
      return true;
    },
    clearPendingAppConnect: ({ oauthState, appId, resumeTarget }) => {
      if (oauthState != null) {
        setPendingCallbacks((currentPending) => {
          if (!(oauthState in currentPending)) return currentPending;
          const { [oauthState]: removedCallback, ...remainingPending } =
            currentPending;
          void removedCallback;
          return remainingPending;
        });
        return;
      }
      if (appId == null) return;
      setPendingCallbacks((currentPending) =>
        Object.entries(currentPending)
          .filter(
            ([, pendingCallback]) =>
              pendingCallback.appId !== appId ||
              !matchesResumeTarget(pendingCallback.resumeTarget, resumeTarget),
          )
          .reduce<PendingAppConnectOAuthByState>(
            (nextPending, [state, pendingCallback]) => {
              nextPending[state] = pendingCallback;
              return nextPending;
            },
            {},
          ),
      );
    },
    getPendingAppConnectForCallbackUrl: (callbackUrl) => {
      const oauthState = getUrlSearchParam(callbackUrl, "state");
      return oauthState == null ? null : (pendingCallbacks[oauthState] ?? null);
    },
    hasAppConnectCallbackCompleted: (appId, resumeTarget) =>
      Object.values(pendingCallbacks).some(
        (pendingCallback) =>
          pendingCallback.appId === appId &&
          pendingCallback.completed &&
          matchesResumeTarget(pendingCallback.resumeTarget, resumeTarget),
      ),
    isAppConnectPending: (appId, resumeTarget) =>
      Object.values(pendingCallbacks).some(
        (pendingCallback) =>
          pendingCallback.appId === appId &&
          matchesResumeTarget(pendingCallback.resumeTarget, resumeTarget),
      ),
    markAppConnectOAuthCallbackCompleted: (oauthState) => {
      setPendingCallbacks((currentPending) => {
        const pendingCallback = currentPending[oauthState];
        return pendingCallback == null
          ? currentPending
          : {
              ...currentPending,
              [oauthState]: {
                ...pendingCallback,
                completed: true,
              },
            };
      });
    },
    markAppConnectOAuthPending: ({
      app,
      hostId,
      redirectUrl,
      returnTo,
      resumeTarget = {
        kind: "apps-tab",
      },
    }) => {
      const oauthState = getUrlSearchParam(redirectUrl, "state");
      if (oauthState == null) return;
      setPendingCallbacks((currentPending) => ({
        ...currentPending,
        [oauthState]: {
          appId: app.id,
          appName: app.name,
          claimed: false,
          completed: false,
          hostId: hostId ?? "local",
          oauthState,
          returnTo,
          resumeTarget,
        },
      }));
    },
  };
}
