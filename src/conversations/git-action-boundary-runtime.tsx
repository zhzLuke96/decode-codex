// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Local-conversation git action controls imported through onboarding commons.
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import { GitBranchIcon } from "../icons/git-branch-icon";
import { GitBranchSwitcher } from "../git/git-branch-switcher";
import { useAppScopeValue } from "../boundaries/app-scope";
import { gitActionsContextAtom } from "../review/git-actions-runtime";

export interface GitBranchControlProps {
  deferQueries?: boolean;
}

export function GitBranchControl({
  deferQueries = false,
}: GitBranchControlProps) {
  const { conversationId, cwd, hostConfig } = useAppScopeValue(
    gitActionsContextAtom,
  ) as {
    conversationId?: string | null;
    cwd?: string | null;
    hostConfig?: { id: string } | null;
  };

  if (cwd == null || hostConfig == null) return null;

  return (
    <GitBranchSwitcher
      gitRoot={cwd}
      hostConfig={hostConfig}
      localConversationId={conversationId}
      shouldShow={!deferQueries}
      renderControl={({
        currentBranch,
        disabled,
        isPending,
        switchTooltipText,
      }) => (
        <Tooltip tooltipContent={switchTooltipText}>
          <Button
            color="ghost"
            disabled={disabled}
            loading={isPending}
            size="toolbar"
          >
            <GitBranchIcon className="icon-xs shrink-0" />
            <span className="max-w-40 truncate">{currentBranch}</span>
          </Button>
        </Tooltip>
      )}
      renderStaticBranch={({ currentBranch }) => (
        <span className="flex min-w-0 items-center gap-1 text-token-description-foreground">
          <GitBranchIcon className="icon-xs shrink-0" />
          <span className="max-w-40 truncate">{currentBranch}</span>
        </span>
      )}
    />
  );
}
