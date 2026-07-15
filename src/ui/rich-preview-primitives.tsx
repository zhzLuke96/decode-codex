// Restored from ref/webview/assets/rich-preview-primitives-C3E5AsLr.js
// rich-preview-primitives-C3E5AsLr chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import clsx from "clsx";
import { Spinner } from "../ui/spinner";
type RichPreviewClassNameProps = {
  className?: string;
};
type RichPreviewChildrenProps = {
  children?: ReactNode;
};
type RichPreviewMetaTextProps = RichPreviewClassNameProps &
  RichPreviewChildrenProps;
function RichPreviewLoading({ className }: RichPreviewClassNameProps) {
  return (
    <div
      className={clsx(
        "text-token-text-secondary flex items-center gap-2",
        className,
      )}
    >
      <Spinner className="icon-xs text-token-input-placeholder-foreground" />
      <FormattedMessage
        id="codex.diffView.richPreviewLoading"
        defaultMessage="Loading preview…"
        description="Loading label while rich preview renders in the diff view"
      />
    </div>
  );
}
function RichPreviewMetaText({
  className,
  children,
}: RichPreviewMetaTextProps) {
  return (
    <span className={clsx("text-token-text-secondary text-xs", className)}>
      {children}
    </span>
  );
}
function RichPreviewBody({ children }: RichPreviewChildrenProps) {
  return (
    <div className="flex min-h-40 flex-col">
      <div className="flex flex-1 items-center justify-center overflow-auto p-3 text-sm">
        {children}
      </div>
    </div>
  );
}
export { RichPreviewMetaText, RichPreviewBody, RichPreviewLoading };
