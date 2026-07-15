// Restored from ref/webview/assets/thread-page-header-D_hZ50OA.js
// Header layout for thread pages.
import type { ReactNode } from "react";
import {
  CloudThreadEnvIcon,
  LocalThreadEnvIcon,
  RemoteThreadEnvIcon,
  WorktreeThreadEnvIcon,
} from "./thread-env-icon";
export type ThreadPageHeaderEnv =
  | "cloud"
  | "local"
  | "remote"
  | "worktree"
  | (string & {})
  | null
  | undefined;
export type ThreadPageHeaderProps = {
  env?: ThreadPageHeaderEnv;
  hostConfig?: {
    id: string;
  } | null;
  secondary?: ReactNode;
  start?: ReactNode;
  startActions?: ReactNode;
  trailing?: ReactNode;
};
function getThreadEnvIcon(
  env: ThreadPageHeaderEnv,
  hostConfig: ThreadPageHeaderProps["hostConfig"],
): ReactNode {
  if (env === "remote") {
    return hostConfig == null ? null : (
      <RemoteThreadEnvIcon hostId={hostConfig.id} />
    );
  }
  if (env === "worktree") return <WorktreeThreadEnvIcon />;
  if (env === "cloud") return <CloudThreadEnvIcon />;
  if (env) return <LocalThreadEnvIcon />;
  return null;
}
export function ThreadPageHeader({
  start,
  startActions,
  env,
  secondary,
  trailing,
  hostConfig,
}: ThreadPageHeaderProps) {
  const startElement = start ? (
    <div className="max-w-[320px] min-w-0 truncate">{start}</div>
  ) : null;
  const envIcon = getThreadEnvIcon(env, hostConfig);
  const secondaryElement = secondary ? (
    <div className="flex min-w-0 truncate leading-[18px] font-normal text-token-description-foreground">
      {secondary}
    </div>
  ) : null;
  return (
    <div className="draggable grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 electron:h-toolbar extension:py-row-y">
      <div className="text-md flex min-w-0 items-center gap-2 truncate text-base electron:font-medium">
        {startElement}
        {envIcon}
        {secondaryElement}
        {startActions}
      </div>
      <div className="flex items-center justify-end gap-1.5">{trailing}</div>
    </div>
  );
}

export function initThreadPageHeaderChunk(): void {}
