// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Drives local thread-history discovery: refreshes the local host's recent
// conversations and re-refreshes once when the "has any threads" signal flips.
import { useEffect } from "react";
import {
  isHotkeyWindow,
  LOCAL_HOST_ID,
  logger,
  useAtomFamilyValue,
  useFeatureGate,
} from "../boundaries/onboarding-commons-externals.facade";
import { currentAppInitialSharedMember0192 as recentConversationsServiceFamily } from "../runtime/current-app-initial/remote-projects-app-shared-runtime";

interface RecentConversationsService {
  refreshRecentConversations(options: {
    mode: "expanded" | "routine";
  }): Promise<void>;
  getThreadSummaries(): unknown[];
}

async function syncRecentConversationsForDiscovery(
  service: RecentConversationsService,
  expandedDiscoveryEnabled: boolean,
  isCancelled: () => boolean = () => false,
): Promise<void> {
  const mode = expandedDiscoveryEnabled ? "expanded" : "routine";
  await service.refreshRecentConversations({ mode });
  const hasDiscoveredThreads = service.getThreadSummaries().length > 0;
  if (!isCancelled() && hasDiscoveredThreads !== expandedDiscoveryEnabled) {
    await service.refreshRecentConversations({ mode });
  }
}

export function LocalThreadHistoryDiscoverySyncEffect(): null {
  const localHistoryDiscoveryEnabled = useFeatureGate("3314958849");
  const localThreadCatalogEnabled = useFeatureGate("567837310");
  const expandedDiscoveryEnabled =
    localHistoryDiscoveryEnabled && !localThreadCatalogEnabled;
  const service = useAtomFamilyValue(
    recentConversationsServiceFamily,
    LOCAL_HOST_ID,
  ) as RecentConversationsService | null;

  useEffect(() => {
    if (service == null || isHotkeyWindow()) return;
    let cancelled = false;
    void syncRecentConversationsForDiscovery(
      service,
      expandedDiscoveryEnabled,
      () => cancelled,
    ).catch((error) => {
      logger.warning("Failed to sync local thread history discovery", {
        safe: { enabled: expandedDiscoveryEnabled },
        sensitive: { error },
      });
    });
    return () => {
      cancelled = true;
    };
  }, [expandedDiscoveryEnabled, service]);
  return null;
}
