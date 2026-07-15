// Restored from ref/webview/assets/bullet-separator-BJK3jgEi.js
// bullet-separator-BJK3jgEi chunk restored from the Codex webview bundle.
import clsx from "clsx";
import { FormattedMessage } from "react-intl";
export type BulletSeparatorProps = {
  className?: string;
};
export function BulletSeparator({
  className,
}: BulletSeparatorProps): JSX.Element {
  return (
    <span aria-hidden={true} className={clsx("last:hidden", className)}>
      <FormattedMessage
        id="codex.ui.bulletSeparator"
        defaultMessage="·"
        description="Middle dot separator used between inline items"
      />
    </span>
  );
}

export function initBulletSeparatorChunk(): void {}
