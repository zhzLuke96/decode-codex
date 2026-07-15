// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js
// Subscribes a handler to a host -> webview message type through the shared VS
// Code / Electron message bridge. The handler is wrapped in an effect event so
// it always sees the latest closure without re-subscribing on every render.
import { useEffect, useEffectEvent, type DependencyList } from "react";
import { VscodeHostMessageBridge } from "../boundaries/vscode-api";

export function useElectronMessageHandler<TMessage = unknown>(
  messageType: string,
  handler: (message: TMessage) => void,
  extraDeps: DependencyList = [],
): void {
  const bridge = VscodeHostMessageBridge.getInstance();
  const stableHandler = useEffectEvent(handler);
  useEffect(
    () =>
      bridge.subscribe(messageType, (message) => {
        stableHandler(message as TMessage);
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [bridge, messageType, ...extraDeps],
  );
}
