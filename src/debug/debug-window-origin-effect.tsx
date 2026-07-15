// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Publishes the conversation that owns the current local-thread route to the
// Electron main process so the detached debug window can follow it.

import { useEffect } from "react";
import { appLogger } from "../runtime/app-logger";
import {
  currentRouteSignal,
  useAtomValue,
} from "../boundaries/onboarding-commons-externals.facade";

interface LocalThreadRouteValue {
  routeKind?: string;
  conversationId?: string | null;
}

declare global {
  interface Window {
    electronBridge?: {
      sendMessageFromView?: (message: {
        type: string;
        conversationId: string | null;
      }) => Promise<void>;
    };
  }
}

function logPublishError(error: unknown): void {
  appLogger.error("Failed to publish debug window origin conversation", {
    safe: {},
    sensitive: { error },
  });
}

export function DebugWindowOriginConversationEffect() {
  const route = useAtomValue(currentRouteSignal) as {
    value: LocalThreadRouteValue;
  };
  const conversationId =
    route.value.routeKind === "local-thread"
      ? (route.value.conversationId ?? null)
      : null;

  useEffect(() => {
    const sendMessageFromView = window.electronBridge?.sendMessageFromView;
    sendMessageFromView?.({
      type: "debug-window-origin-conversation-changed",
      conversationId,
    }).catch(logPublishError);
  }, [conversationId]);

  return null;
}
