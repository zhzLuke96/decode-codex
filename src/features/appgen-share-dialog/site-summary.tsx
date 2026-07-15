// Restored from ref/webview/assets/appgen-share-dialog-DXPJlTmi.js
// appgen-share-dialog-DXPJlTmi chunk restored from the Codex webview bundle.
import { FormattedMessage } from "../../vendor/react-intl";
import { SitesColorIcon } from "../../icons/sites-color-icon";
import { formatAppgenUrlWithoutProtocol } from "../../utils/appgen-url";
import type { SiteSummaryProps } from "./types";
export function SiteSummary({ liveUrl, title }: SiteSummaryProps) {
  const formattedUrl = formatAppgenUrlWithoutProtocol(liveUrl ?? null);
  return (
    <div className="flex items-center gap-3 rounded-lg bg-token-bg-secondary p-3">
      <span className="flex size-10 shrink-0 items-center justify-center">
        <SitesColorIcon className="icon-md" />
      </span>
      <div className="flex min-w-0 flex-col gap-0.5">
        <div className="truncate text-sm font-medium text-token-foreground">
          {title}
        </div>
        <div className="truncate text-xs text-token-text-tertiary">
          {formattedUrl ?? (
            <FormattedMessage
              id="appgenShareDialog.site.notPublished"
              defaultMessage="Not published yet"
              description="Label in the share dialog for a site without a published URL"
            />
          )}
        </div>
      </div>
    </div>
  );
}
