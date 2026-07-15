// Restored from ref/webview/assets/action-popover-primitives-BriXOYq-.js
// action-popover-primitives-BriXOYq- chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
import clsx from "clsx";
import { getWorkspaceRelativePath } from "../../boundaries/use-host-config.facade";
import { DiffStats } from "../../ui/diff-stats";
type ClassNameProps = {
  className?: string;
};
type ActionPopoverDiffFile = {
  additions?: number | null;
  deletions?: number | null;
  path: string;
};
type ActionPopoverFileRowProps = {
  file: ActionPopoverDiffFile;
  workspaceRoot?: string | null;
};
type ActionPopoverFileSectionProps = ClassNameProps & {
  files: ActionPopoverDiffFile[];
  title: ReactNode;
  workspaceRoot?: string | null;
};
export function FileRow({ file, workspaceRoot }: ActionPopoverFileRowProps) {
  const displayPath = getWorkspaceRelativePath(file.path, workspaceRoot);
  const pathSegments = displayPath.split("/");
  const fileName = pathSegments.pop() ?? displayPath;
  const folderPath = pathSegments.join("/");
  const linesAdded = file.additions ?? 0;
  const linesRemoved = file.deletions ?? 0;
  const hasDiffStats = file.additions != null || file.deletions != null;
  return (
    <div
      className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6"
      title={file.path}
    >
      <div className="flex min-w-0 items-baseline gap-2 whitespace-nowrap">
        <span className="flex-shrink-0 font-medium text-token-foreground">
          {fileName}
        </span>
        {folderPath.length > 0 ? (
          <span className="min-w-0 truncate text-token-description-foreground">
            {folderPath}
          </span>
        ) : null}
      </div>
      {hasDiffStats ? (
        <DiffStats
          variant="color"
          linesAdded={linesAdded}
          linesRemoved={linesRemoved}
        />
      ) : (
        <span />
      )}
    </div>
  );
}
export function FileSection({
  title,
  files,
  workspaceRoot,
  className,
}: ActionPopoverFileSectionProps) {
  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      <div className="text-token-description-foreground">{title}</div>
      <div className="flex flex-col gap-2">
        {files.map((file) => (
          <FileRow key={file.path} file={file} workspaceRoot={workspaceRoot} />
        ))}
      </div>
    </div>
  );
}
