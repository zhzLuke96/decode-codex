// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js
// State used by the Electron power-save blocker controller.
import {
  appStoreScope,
  createParametricAtom,
  createScopedAtom,
} from "./onboarding-scope-runtime";

type RemoteControlConnectionState =
  | { status: "connected" | "connecting" | "disabled" | "errored" }
  | null;

export const hasRunningTurnAtom = createScopedAtom<boolean>(
  appStoreScope,
  false,
);

const remoteControlConnectionStateAtom =
  createScopedAtom<RemoteControlConnectionState>(appStoreScope, null);

const remoteControlPowerSaveDisabledAtom = createScopedAtom<boolean>(
  appStoreScope,
  false,
);

export const isHostPluggedInAtom = createParametricAtom<string, boolean>(
  appStoreScope,
  (hostId, { get }) => {
    const connectionState = get<RemoteControlConnectionState>(
      remoteControlConnectionStateAtom,
      hostId,
    );
    return (
      !get<boolean>(remoteControlPowerSaveDisabledAtom, hostId) &&
      (connectionState?.status === "connecting" ||
        connectionState?.status === "connected")
    );
  },
);
