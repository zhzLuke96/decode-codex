// Restored from ref/webview/assets/home-conversation-starters-3NXtkj_S.js
// Current-runtime bridge for selecting the home composer submit mode.
import { appScopeO as useAppScopeStore } from "../boundaries/app-scope";
import {
  worktreeNewThreadQueryCompatSlotUpperALowerD as composerPromptScope,
  worktreeNewThreadQueryCompatSlotUpperELowerD as getComposerPromptProjectKey,
  worktreeNewThreadQueryCompatSlotUpperKLowerL as setComposerPromptSubmitMode,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";

type AppScopeStoreLike = {
  get<TValue = unknown>(signal: unknown, key?: unknown): TValue;
  set(signal: unknown, keyOrUpdater: unknown, value?: unknown): void;
};

export type HomeComposerSubmitMode = "local" | "worktree" | string | null;

export function useHomeComposerSubmitModeController({
  activeWorkspaceRoot,
  hostId,
}: {
  activeWorkspaceRoot: string | null | undefined;
  hostId: string;
}): (mode: HomeComposerSubmitMode) => void {
  const composerScopeStore = useAppScopeStore(
    composerPromptScope,
  ) as AppScopeStoreLike;

  return (mode) => {
    setComposerPromptSubmitMode(
      composerScopeStore,
      getComposerPromptProjectKey({
        cwd: activeWorkspaceRoot,
        hostId,
      }),
      mode,
    );
  };
}
