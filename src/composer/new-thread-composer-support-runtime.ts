// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Leaf helpers used by the split new-thread composer runtime.
import { useEffect, useMemo } from "react";

import { sendAppServerRequest } from "../boundaries/use-host-config.facade";
import { useHostQuery } from "../runtime/host-query-runtime";
import { fetchIdeContext } from "./composer-utils";
import { createAtom } from "../vendor/jotai-runtime";
import { runCommand } from "../utils/run-command";
import {
  isSshConnection,
  isWslConnection,
  type RemoteHostConnection,
} from "../remote-connections/remote-host-runtime";
import { useGateValue } from "../vendor/statsig-current-runtime";
import { memoryPreferencesDraftAtom } from "./new-thread-submit-runtime";

type ComposerModeAvailabilityInput = {
  canCreateBrowserDefaultHostThreads: boolean;
  hasBrowserLocalExecutionHost: boolean;
  hasComposerModeGitRepo: boolean;
  hasFollowUp: boolean;
  isBrowser: boolean;
  isComposerModeGitMetadataLoading: boolean;
  isResponseInProgress: boolean;
  isStatsigLoading: boolean;
  isWorktreeExecutionTargetLoading: boolean;
  isWorktreePickerEnabled: boolean;
};

type ComposerModeAvailability = {
  fallbackMode: "cloud" | "local";
  isAvailabilityLoading: boolean;
  isCloudAvailable: boolean;
  isLocalAvailable: boolean;
  isWorktreeAvailable: boolean;
};

type GitOriginsResponse = {
  origins?: Array<{ dir?: string | null; root?: string | null }>;
};

type ComposerControllerLike = {
  view?: { dom?: EventTarget | null } | null;
};

type ScopeLike = {
  query?: {
    setData?: (query: unknown, keyOrValue: unknown, value?: unknown) => void;
  };
  set?: (signal: unknown, keyOrValue: unknown, value?: unknown) => void;
};

export const extensionPageSelectionAtom = createAtom(null);

export const buildLocalContextIdeSnapshot = fetchIdeContext;

export function buildComposerModeAvailability({
  canCreateBrowserDefaultHostThreads,
  hasBrowserLocalExecutionHost,
  hasComposerModeGitRepo,
  hasFollowUp,
  isBrowser,
  isComposerModeGitMetadataLoading,
  isResponseInProgress,
  isStatsigLoading,
  isWorktreeExecutionTargetLoading,
  isWorktreePickerEnabled,
}: ComposerModeAvailabilityInput): ComposerModeAvailability {
  if (isBrowser) {
    const shouldPreferLocal =
      canCreateBrowserDefaultHostThreads && !hasFollowUp;
    return {
      fallbackMode: shouldPreferLocal ? "local" : "cloud",
      isAvailabilityLoading: false,
      isCloudAvailable: !shouldPreferLocal,
      isLocalAvailable:
        hasBrowserLocalExecutionHost || canCreateBrowserDefaultHostThreads,
      isWorktreeAvailable: false,
    };
  }

  return {
    fallbackMode: "local",
    isAvailabilityLoading:
      isComposerModeGitMetadataLoading ||
      isStatsigLoading ||
      isWorktreeExecutionTargetLoading,
    isCloudAvailable: hasComposerModeGitRepo,
    isLocalAvailable: true,
    isWorktreeAvailable:
      hasComposerModeGitRepo &&
      !hasFollowUp &&
      !isResponseInProgress &&
      isWorktreePickerEnabled,
  };
}

export function afterLocalConversationCreated(
  scope: ScopeLike,
  conversationId: string,
  memoryPreferences: unknown,
  config: unknown,
): void {
  scope.set?.(memoryPreferencesDraftAtom, null);
  scope.query?.setData?.("local-conversation-config", conversationId, config);
  scope.query?.setData?.("local-conversation-memory-preferences", {
    conversationId,
    memoryPreferences,
  });
}

export function isRemoteConnection(
  connection: RemoteHostConnection | null | undefined,
): boolean {
  if (connection == null) return false;
  return (
    connection.source === "remote-control" ||
    isSshConnection(connection) ||
    isWslConnection(connection)
  );
}

export function registerSidebarToggleShortcut(
  composerController: ComposerControllerLike,
): void {
  useEffect(() => {
    const target = composerController.view?.dom;
    if (target == null || !("addEventListener" in target)) return;

    const listener = (event: Event) => {
      const keyboardEvent = event as KeyboardEvent;
      if (
        keyboardEvent.key.toLowerCase() !== "b" ||
        keyboardEvent.shiftKey ||
        keyboardEvent.altKey
      ) {
        return;
      }
      const isMac =
        typeof navigator !== "undefined" &&
        /Mac|iPhone|iPad|iPod/.test(navigator.platform);
      const hasPlatformModifier = isMac
        ? keyboardEvent.metaKey && !keyboardEvent.ctrlKey
        : keyboardEvent.ctrlKey && !keyboardEvent.metaKey;
      if (!hasPlatformModifier) return;
      runCommand("toggleSidebar", "composer_sidebar_shortcut");
      keyboardEvent.preventDefault();
      keyboardEvent.stopPropagation();
    };

    target.addEventListener("keydown", listener);
    return () => {
      target.removeEventListener("keydown", listener);
    };
  }, [composerController]);
}

export function useGitRepoRoot(cwd: string | null | undefined): string | null {
  const enabled = typeof cwd === "string" && cwd.length > 0;
  const params = useMemo(
    () => ({
      dirs: enabled ? [cwd] : [],
    }),
    [cwd, enabled],
  );
  const { data } = useHostQuery<string | null>("git-origins", {
    params,
    queryConfig: { enabled },
    select: (response: unknown) => {
      const origins = (response as GitOriginsResponse | null)?.origins ?? [];
      return (
        origins.find((origin) => origin.dir === cwd)?.root ??
        origins[0]?.root ??
        null
      );
    },
    source: "composer_content",
  });
  return data ?? null;
}

export function useInterruptThread(): {
  interruptThread: (options: { conversationId: string }) => void;
} {
  return useMemo(
    () => ({
      interruptThread({ conversationId }) {
        void sendAppServerRequest("interrupt-conversation", {
          conversationId,
          initiatedBy: "user",
        });
      },
    }),
    [],
  );
}

export function useIsElectronPlatform(): boolean {
  return (
    typeof window !== "undefined" &&
    "electronBridge" in (window as Window & { electronBridge?: unknown })
  );
}

export function useIsWorkspaceRequired(): boolean {
  return false;
}

export function useIsWorktreePickerEnabled(): boolean {
  return useGateValue("505458");
}

export function useIsWorktreeSnapshotsEnabled(): boolean {
  return useGateValue("3025044430");
}

export function useMessageLimitEvent(_remoteProjectPin: unknown): {
  dismissedEventId: number | null;
  event: null;
} {
  return { dismissedEventId: null, event: null };
}
