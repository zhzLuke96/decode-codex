// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Remote-hosted picture-in-picture (PiP) state: visibility, active-stream, and
// per-conversation stream-state signals plus the host-message effect wiring.
import {
  _appScopeL as createAppScopeKeyedSignal,
  _appScopeO as getAppScopeStore,
  appScopeRoot,
  createAppScopeSignal,
  useAppScopeValue,
} from "../../boundaries/app-scope";
import { useHostMessageSubscription } from "../../runtime/app-main-host-runtime";
import { once } from "../../runtime/commonjs-interop";
import { useEffect } from "react";

type WindowWithElectronBridge = Window &
  typeof globalThis & {
    electronBridge?: {
      sendMessageFromView?: (message: {
        type: string;
        [key: string]: unknown;
      }) => unknown;
    };
  };

type RemoteHostedPipStreamStateChangedMessage = {
  conversationId: string;
  isActive: boolean;
  isAnyActive: boolean;
};

type RemoteHostedPipVisibilityRequestedMessage = {
  isVisible: boolean;
};

export const remoteHostedPipVisibleSignal = createAppScopeSignal<boolean>(
  appScopeRoot,
  true,
);

export const remoteHostedPipAnyStreamActiveSignal =
  createAppScopeSignal<boolean>(appScopeRoot, false);

export const remoteHostedPipStreamStateByConversationSignal =
  createAppScopeKeyedSignal<boolean>(appScopeRoot, () => false);

export function RemoteHostedPipStreamStateListener(): null {
  const store = getAppScopeStore();
  useHostMessageSubscription(
    "remote-hosted-pip-stream-state-changed",
    (message) => {
      const { conversationId, isActive, isAnyActive } =
        message as RemoteHostedPipStreamStateChangedMessage;
      store.set(
        remoteHostedPipStreamStateByConversationSignal,
        conversationId,
        isActive,
      );
      store.set(remoteHostedPipAnyStreamActiveSignal, isAnyActive);
    },
    [store],
  );
  return null;
}

export function RemoteHostedPipVisibilityController(): null {
  const store = getAppScopeStore();
  const isVisible = useAppScopeValue<boolean>(remoteHostedPipVisibleSignal);

  useHostMessageSubscription(
    "remote-hosted-pip-visibility-requested",
    (message) => {
      const { isVisible: nextVisible } =
        message as RemoteHostedPipVisibilityRequestedMessage;
      if (isVisible !== nextVisible) {
        store.set(remoteHostedPipVisibleSignal, nextVisible);
      }
    },
    [isVisible, store],
  );

  useEffect(() => {
    (window as WindowWithElectronBridge).electronBridge?.sendMessageFromView?.({
      isVisible,
      type: "remote-hosted-pip-visibility-changed",
    });
  }, [isVisible]);

  return null;
}

export function emitRemoteHostedPipActiveThreadChanged(
  conversationId: string | null,
): void {
  (window as WindowWithElectronBridge).electronBridge?.sendMessageFromView?.({
    type: "remote-hosted-pip-active-thread-changed",
    conversationId,
  });
}

export const initRemoteHostedPipStateChunk = once(() => {});
