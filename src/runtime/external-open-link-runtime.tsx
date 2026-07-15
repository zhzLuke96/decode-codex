// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Icon-only external-link wrapper used in open-target subtitles.
import type * as React from "react";

import { ExternalLink } from "../utils/external-link/component";

export function ExternalOpenLink({
  ExternalIcon,
  className,
  href,
  openTarget,
}: {
  ExternalIcon: React.ComponentType<{ className?: string }>;
  className?: string;
  href: string;
  openTarget?: string;
}): React.ReactElement {
  return (
    <ExternalLink href={href} openTarget={openTarget}>
      <ExternalIcon className={className} />
    </ExternalLink>
  );
}

