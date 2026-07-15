// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Mirrors "is a local thread currently running" from the app-server manager
// registry to the host shell via the local-thread-activity-changed message.
import { useEffect, useSyncExternalStore } from "react";
import { useAtomValue } from "../boundaries/onboarding-commons-externals.facade";
import { currentAppInitialSharedCompatSlotUpperV as hostMessenger } from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import { appServerRegistryAtom } from "../runtime/current-app-initial/remote-projects-app-shared-runtime";

interface AppServerRegistry {
  addAnyConversationMetaCallback(onChange: () => void): () => void;
  getHasInProgressLocalConversation(): boolean;
}

export function LocalThreadActivitySyncEffect(): null {
  const registry = useAtomValue(appServerRegistryAtom) as AppServerRegistry;
  const hasInProgressLocalConversation = useSyncExternalStore(
    (onChange) => registry.addAnyConversationMetaCallback(onChange),
    () => registry.getHasInProgressLocalConversation(),
  );
  useEffect(() => {
    hostMessenger.dispatchMessage("local-thread-activity-changed", {
      hasInProgressLocalConversation,
    });
  }, [hasInProgressLocalConversation]);
  return null;
}
