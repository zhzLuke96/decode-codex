// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Listens for "primary-runtime-install-progress" host messages, mirrors the
// progress into the app scope store, and once the runtime is ready flips the
// "installed" flag and invalidates the host-scoped queries that depend on it.

import {
  appScopeAtom,
  buildPrimaryRuntimeStatusQueryKey,
  primaryRuntimeInstallProgressStorageKey,
  primaryRuntimeInstalledAtom,
  primaryRuntimeReadyInvalidationQueryKeyPrefixes,
  useAtomValue,
  useHostMessageHandler,
  useQueryClient,
  useSetAtom,
} from "../boundaries/onboarding-commons-externals.facade";

interface PrimaryRuntimeInstallProgressMessage {
  hostId: string;
  progress: {
    phase: string;
    [key: string]: unknown;
  };
}

export function PrimaryRuntimeInstallProgressListener() {
  const scopeStore = useAtomValue(appScopeAtom);
  const queryClient = useQueryClient();
  const setPrimaryRuntimeInstalled = useSetAtom(primaryRuntimeInstalledAtom);

  useHostMessageHandler(
    "primary-runtime-install-progress",
    (message: PrimaryRuntimeInstallProgressMessage) => {
      scopeStore.set(primaryRuntimeInstallProgressStorageKey, {
        ...message.progress,
        hostId: message.hostId,
        updatedAtMs: Date.now(),
      });

      if (message.progress.phase !== "ready") return;

      setPrimaryRuntimeInstalled(true);
      const invalidations = [
        queryClient.invalidateQueries({
          queryKey: buildPrimaryRuntimeStatusQueryKey(message.hostId),
        }),
        ...primaryRuntimeReadyInvalidationQueryKeyPrefixes.map(
          (prefix: unknown[]) =>
            queryClient.invalidateQueries({
              queryKey: [...prefix, message.hostId],
            }),
        ),
      ];
      void Promise.all(invalidations);
    },
    [queryClient, scopeStore, setPrimaryRuntimeInstalled],
  );

  return null;
}
