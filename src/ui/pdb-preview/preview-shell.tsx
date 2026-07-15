// Restored from ref/webview/assets/preview-DvaTfwxN.js
// preview-DvaTfwxN chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
import clsx from "clsx";
import type { LegendSwatchProps, PdbPreviewShellProps } from "./types";
export function PdbPreviewShell({
  children,
  className,
  filePath,
}: PdbPreviewShellProps) {
  return (
    <div
      className={clsx(
        "flex h-full min-h-0 flex-col bg-token-main-surface-primary",
        className,
      )}
    >
      {filePath == null ? null : (
        <div className="border-b border-token-border px-3 py-2 text-sm font-medium text-token-text-primary">
          {getBaseName(filePath)}
        </div>
      )}
      {children}
    </div>
  );
}
export function LegendSwatch({ children, className }: LegendSwatchProps) {
  return (
    <span className="inline-flex items-center gap-1">
      <span className={clsx("h-2.5 w-2.5 rounded-sm", className)} />
      {children}
    </span>
  );
}
function getBaseName(path: string): ReactNode {
  return path.split(/[/\\]+/).at(-1) ?? path;
}
