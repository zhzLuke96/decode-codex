// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~ou5otpha-1Hh4BDD9.js
// Effect component that registers thread-find conversation and diff sources with the app shell.
import { useEffect, useRef } from "react";

import type { ThreadAppShellSourceRegistrationProps } from "./types";

export function ThreadAppShellSourceRegistration({
  conversationSource = null,
  diffSource = null,
  orchestrationId,
  isDefault,
  scope,
}: ThreadAppShellSourceRegistrationProps) {
  useEffect(() => {
    return scope?.setThreadAppShellSources?.(
      {
        conversationSource,
        diffSource,
      },
      {
        orchestrationId,
        isDefault,
      },
    );
  }, [conversationSource, diffSource, isDefault, orchestrationId, scope]);

  return null;
}

export function useNullAppShellRef<Value = unknown>(
  _key?: string,
  _initialValue?: Value | null,
) {
  return useRef<Value | null>(null);
}

export function initThreadNullRefChunk() {}

export function initThreadAppShellSourcesChunk() {}
