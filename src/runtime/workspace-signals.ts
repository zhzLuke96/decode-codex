// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js
// Workspace / project-selection signals surfaced on the home page: the active
// workspace context, the list of selectable workspace groups, the fetched
// workspace roots, and whether a remote-project selection is still pending.
//
// These originate in three sibling new-thread chunks:
//   - workspaceContextSignal        -> kg2pu5rs (worktree new-thread orchestrator)
//   - workspaceGroupsSignal         -> ko8xg8gw (new-thread query, ref .js: ...ko8xg8gw-DEdbMp8p.js)
//   - workspaceRootsSignal          -> ozr5a6hk (pull-requests new-thread, ref .js: ...ozr5a6hk-DZC70s11.js)
//   - isRemoteProjectPendingSignal  -> ozr5a6hk (derived from the roots query above)
import { of as workspaceContextSignalRef } from "../vendor/worktree-new-thread-orchestrator-current-bundle";
import { ti as workspaceGroupsSignalRef } from "../vendor/worktree-new-thread-query-current-bundle";
import {
  in as isRemoteProjectPendingSignalRef,
  on as workspaceRootsSignalRef,
} from "../vendor/pull-request-new-thread-current-runtime";

/** Discriminates how the active workspace resolves a run location. */
export type WorkspaceContextKind = "none" | "plain" | "git";

/** Active workspace context derived from the current host, cwd, and git metadata. */
export interface WorkspaceContext {
  kind: WorkspaceContextKind;
  cwd?: string | null;
  hostId?: string | null;
  codexHome?: string | null;
}

/** A single selectable workspace/project in the home workspace picker. */
export interface WorkspaceGroup {
  projectId: string;
  projectKind?: string;
  isLocalProject?: boolean;
  repositoryData?: unknown;
  hostId?: string | null;
  label?: string | null;
  path?: string | null;
}

/** Result of the `active-workspace-roots` query held by {@link workspaceRootsSignal}. */
export interface WorkspaceRootsQueryResult {
  data?: { roots?: string[] } | null;
  isPending?: boolean;
}

/** Signal carrying the active {@link WorkspaceContext}. */
export const workspaceContextSignal = workspaceContextSignalRef;

/** Signal carrying the list of selectable {@link WorkspaceGroup}s. */
export const workspaceGroupsSignal = workspaceGroupsSignalRef;

/** Signal carrying the `active-workspace-roots` query result. */
export const workspaceRootsSignal = workspaceRootsSignalRef;

/**
 * Derived boolean signal: true while the workspace roots query is pending, or a
 * single-root project's writable-roots lookup is still resolving. Used to gate
 * the home project-selection loading state.
 */
export const isRemoteProjectPendingSignal = isRemoteProjectPendingSignalRef;
