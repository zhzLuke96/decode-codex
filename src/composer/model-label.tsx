// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Inline model name with an optional service-tier speed glyph.
import type { ReactElement, ReactNode } from "react";
import { FormattedMessage } from "../vendor/react-intl";
import { classNames } from "../utils/class-names";
import { normalizeModelDisplayName } from "../boundaries/automation-editor-deps.facade";
import {
  ServiceTierSpeedIcon,
  type ServiceTierIconKind,
} from "./service-tier-speed-icon";

export interface ModelLabelProps {
  model: string;
  displayName?: string | null;
  labelClassName?: string;
  serviceTierIconKind?: ServiceTierIconKind;
  stripGptPrefix?: boolean;
}

export function ModelLabel({
  model,
  displayName,
  labelClassName,
  serviceTierIconKind = null,
  stripGptPrefix = false,
}: ModelLabelProps): ReactElement {
  let label: ReactNode;
  if (displayName != null) {
    const normalized = normalizeModelDisplayName(displayName);
    label = stripGptPrefix ? normalized.replace(/^GPT-/iu, "") : normalized;
  } else if (model) {
    label = (
      <FormattedMessage
        id="composer.mode.local.model.custom"
        defaultMessage="Custom"
        description="Custom model from config"
      />
    );
  } else {
    label = model;
  }

  return (
    <span className="flex min-w-0 items-center gap-1 tabular-nums">
      <ServiceTierSpeedIcon
        className="icon-2xs text-token-link-foreground shrink-0"
        iconKind={serviceTierIconKind}
      />
      <span
        className={classNames("truncate whitespace-nowrap", labelClassName)}
      >
        {label}
      </span>
    </span>
  );
}
