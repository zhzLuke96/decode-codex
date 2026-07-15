// Restored from ref/webview/assets/settings-shared-B8obOSL1.js
// settings-shared-B8obOSL1 chunk restored from the Codex webview bundle.
import type { ComponentProps, ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import clsx from "clsx";
import { ChevronIcon } from "../../icons/chevron-icon";
import { Button } from "../../ui/button";
import { CODEX_MCP_DOCS_URL } from "../../utils/links-bd-mmkun-d";
import type { SettingsSectionSlug } from "./messages";
import {
  getSettingsNavMessage,
  getSettingsSectionTitleMessage,
} from "./messages";
type SettingsSlugProps = {
  slug: SettingsSectionSlug;
};
type SettingsMenuButtonProps = ComponentProps<typeof Button> & {
  chevronClassName?: string;
  children?: ReactNode;
  contentClassName?: string;
};
function SettingsMenuButton({
  children,
  className,
  contentClassName,
  chevronClassName,
  color = "secondary",
  ...buttonProps
}: SettingsMenuButtonProps) {
  return (
    <Button
      color={color}
      size="toolbar"
      className={clsx("w-[240px] justify-between", className)}
      {...buttonProps}
    >
      <span
        className={clsx(
          "flex min-w-0 flex-1 items-center gap-1.5",
          contentClassName,
        )}
      >
        {children}
      </span>
      <ChevronIcon
        className={clsx(
          "icon-2xs shrink-0 text-token-input-placeholder-foreground",
          chevronClassName,
        )}
      />
    </Button>
  );
}
function SettingsNavLabel({ slug }: SettingsSlugProps) {
  return <FormattedMessage {...getSettingsNavMessage(slug)} />;
}
function SettingsSectionTitle({ slug }: SettingsSlugProps) {
  return <FormattedMessage {...getSettingsSectionTitleMessage(slug)} />;
}
function SettingsSectionSubtitle({ slug }: SettingsSlugProps) {
  if (slug !== "mcp-settings") {
    return null;
  }
  return (
    <div>
      <FormattedMessage
        id="settings.section.mcp-settings.subtitle"
        defaultMessage="Connect external tools and data sources. "
        description="Subtitle for MCP settings section"
      />
      <a
        className="inline-flex items-center gap-1 text-base text-token-text-link-foreground"
        href={CODEX_MCP_DOCS_URL}
        target="_blank"
        rel="noreferrer"
      >
        <FormattedMessage
          id="settings.section.mcp-settings.learnMore"
          defaultMessage="Learn more."
          description="Label for MCP docs link"
        />
      </a>
    </div>
  );
}
export {
  SettingsSectionTitle,
  SettingsNavLabel,
  SettingsSectionSubtitle,
  SettingsMenuButton,
};
