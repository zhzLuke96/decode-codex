// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~onboarding-page~hotkey-window-thread-page~thr~b0jzjd62-JuRN2k_O.js
// Public entry for git review primitives, diff stats, and git-repository initialization helpers.
import { initDiffStatsChunk } from "./diff-stats";
import { initCreateGitRepositoryChunk } from "./action-popover-primitives";

export {
  AnimatedDiffStats,
  DiffStats,
  initDiffStatsChunk,
  RollingDiffStatNumber,
} from "./diff-stats";
export {
  GitReviewPrimitives,
  initCreateGitRepositoryChunk,
  useCreateGitRepository,
} from "./action-popover-primitives";
export type { UseCreateGitRepositoryOptions } from "./action-popover-primitives";

export function initGitReviewPrimitivesChunk(): void {
  initDiffStatsChunk();
  initCreateGitRepositoryChunk();
}
