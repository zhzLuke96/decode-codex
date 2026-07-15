// Restored from ref/webview/assets/worktrees-settings-page-KeLyIYZM.js
// Settings page for inspecting and deleting Codex-managed git worktrees.
import type { ReactNode } from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import { useHostConfigById } from "../../boundaries/use-host-config.facade";
import { useGitMetadataQuery } from "../../boundaries/thread-context-inputs.facade";
import { SettingsGroup } from "../../utils/settings-group";
import { SettingsSurface } from "../../utils/settings-surface";
import { WorktreeRow } from "./worktree-row";
import {
  type CodexWorktree,
  filterConversationsForWorktree,
  sortWorktreesByConversationCount,
  type WorktreeConversation,
} from "./worktree-utils";
type GitMetadataQueryResult = {
  data?: {
    root?: string | null;
  } | null;
  isLoading?: boolean;
};
type WorktreeRepositorySectionProps = {
  action?: ReactNode;
  allConversations: WorktreeConversation[];
  hostId: string;
  isConversationsLoading: boolean;
  onWorktreeDeleted: () => void;
  repoRoot: string | null;
  visibleConversations: WorktreeConversation[];
  worktrees: CodexWorktree[];
};
export function WorktreeRepositorySection({
  action,
  allConversations,
  hostId,
  isConversationsLoading,
  onWorktreeDeleted,
  repoRoot,
  visibleConversations,
  worktrees,
}: WorktreeRepositorySectionProps): JSX.Element {
  const hostConfig = useHostConfigById(hostId);
  const metadataQuery = useGitMetadataQuery(
    repoRoot,
    hostConfig,
    "worktree_restore_banner",
  ) as GitMetadataQueryResult;
  const displayRoot =
    metadataQuery.data?.root ?? repoRoot ?? worktrees[0]?.dir ?? null;
  const isRepositoryLoading = metadataQuery.isLoading && displayRoot == null;
  return (
    <SettingsGroup>
      <SettingsGroup.Header
        title={
          <div className="flex min-w-0 flex-col">
            <div className="min-w-0 truncate text-sm text-token-text-primary">
              {displayRoot ? (
                <span className="truncate font-mono text-sm">
                  {displayRoot}
                </span>
              ) : (
                <FormattedMessage
                  id="settings.worktrees.repository.unknown"
                  defaultMessage="Unknown repository"
                  description="Fallback label when worktree repository cannot be resolved"
                />
              )}
            </div>
            {isRepositoryLoading ? (
              <div className="text-xs text-token-text-secondary">
                <FormattedMessage
                  id="settings.worktrees.repository.loading"
                  defaultMessage="Loading repository metadata…"
                  description="Subtitle while repository metadata is loading"
                />
              </div>
            ) : null}
          </div>
        }
        actions={action}
      />
      <SettingsGroup.Content>
        <SettingsSurface>
          {sortWorktreesByConversationCount(
            worktrees,
            visibleConversations,
          ).map((worktree) => (
            <WorktreeRow
              key={worktree.dir}
              allConversations={filterConversationsForWorktree(
                worktree.dir,
                allConversations,
              )}
              hostId={hostId}
              isConversationsLoading={isConversationsLoading}
              onWorktreeDeleted={onWorktreeDeleted}
              visibleConversations={filterConversationsForWorktree(
                worktree.dir,
                visibleConversations,
              )}
              worktree={worktree}
            />
          ))}
        </SettingsSurface>
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}
