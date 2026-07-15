// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Sources pill + popover summarizing the external pages referenced by one assistant turn.

import { useState, type MouseEvent } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { classNames } from "../utils/class-names";
import { ExternalLinkFavicon } from "../utils/external-link-favicon";
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "../ui/popover";
import { openInBrowserFromEvent } from "../runtime/resource-open-runtime";
import { SourceListItemButton } from "../boundaries/onboarding-commons-externals.facade";

const MAX_PROVIDER_ICONS = 5;

export type TurnSource = {
  label: string;
  title?: string | null;
  url: string;
};

export type TurnSourcesPopoverProps = {
  className?: string;
  sources: readonly TurnSource[];
};

export function initTurnSourcesPopoverChunk(): void {
  void TurnSourcesPopover;
  void collectWebSearchTurnSources;
}

export function TurnSourcesPopover({
  className,
  sources,
}: TurnSourcesPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const intl = useIntl();
  const sourcesLabel = intl.formatMessage({
    id: "codex.turnSources.title",
    defaultMessage: "Sources",
    description: "Label for the sources used by one assistant response",
  });

  if (sources.length === 0) {
    return null;
  }

  const providerIcons = dedupeSourcesByHostname(sources)
    .slice(0, MAX_PROVIDER_ICONS)
    .map(renderProviderIcon);

  const triggerButton = (
    <button
      aria-label={sourcesLabel}
      className={classNames(
        "group/footnote mt-3 mb-2 flex h-[38px] w-fit cursor-interaction items-center gap-1.5 rounded-3xl border border-token-border-default bg-token-bg-primary px-3 py-2 text-token-text-secondary hover:bg-token-main-surface-secondary",
        className,
      )}
      type="button"
    >
      <span aria-hidden={true} className="flex flex-row-reverse">
        {providerIcons}
      </span>
      <span className="text-xs font-semibold">
        <FormattedMessage
          id="codex.turnSources.title"
          defaultMessage="Sources"
          description="Label for the sources used by one assistant response"
        />
      </span>
    </button>
  );

  const sourceListItems = sources.map((source) => (
    <TurnSourceListItem
      key={source.url}
      source={source}
      onClose={() => setIsOpen(false)}
    />
  ));

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild={true}>{triggerButton}</PopoverTrigger>
      <PopoverContent
        aria-label={sourcesLabel}
        className="w-80 p-2"
        side="top"
        sideOffset={6}
      >
        <PopoverTitle
          aria-level={2}
          className="px-2 pt-1 pb-1.5 text-sm"
          role="heading"
        >
          <FormattedMessage
            id="codex.turnSources.title"
            defaultMessage="Sources"
            description="Label for the sources used by one assistant response"
          />
        </PopoverTitle>
        <ul className="flex flex-col px-2 pb-1">{sourceListItems}</ul>
      </PopoverContent>
    </Popover>
  );
}

function renderProviderIcon(source: TurnSource) {
  return (
    <span
      key={hostnameOf(source)}
      className="group-hover/footnote:border-token-main-surface-secondary group-hover/footnote:bg-token-main-surface-secondary -ms-1 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-token-bg-primary bg-token-bg-primary first:me-0"
      data-turn-source-provider-icon=""
    >
      <ExternalLinkFavicon className="size-4" href={source.url} />
    </span>
  );
}

type TurnSourceListItemProps = {
  onClose: () => void;
  source: TurnSource;
};

function TurnSourceListItem({ onClose, source }: TurnSourceListItemProps) {
  const primaryLabel = source.title ?? source.label;
  const icon = <ExternalLinkFavicon className="size-4" href={source.url} />;
  const label = (
    <span className="flex min-w-0 flex-col py-0.5">
      <span className="truncate">{primaryLabel}</span>
      {source.title == null ? null : (
        <span className="truncate text-xs text-token-text-secondary">
          {source.label}
        </span>
      )}
    </span>
  );
  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    openInBrowserFromEvent({
      event,
      href: source.url,
      initiator: "markdown_link_click",
    });
    onClose();
  };
  return (
    <li>
      <SourceListItemButton
        aria-label={primaryLabel}
        className="h-auto min-h-8"
        icon={icon}
        interactive={true}
        label={label}
        labelClassName="min-w-0"
        title={source.url}
        onClick={handleOpen}
      />
    </li>
  );
}

function dedupeSourcesByHostname(sources: readonly TurnSource[]): TurnSource[] {
  const seen = new Set<string>();
  return sources.filter((source) => {
    const hostname = hostnameOf(source);
    if (seen.has(hostname)) {
      return false;
    }
    seen.add(hostname);
    return true;
  });
}

function hostnameOf(source: TurnSource): string {
  return new URL(source.url).hostname;
}

type WebSearchActivityItem = {
  type: string;
  action?: {
    type: string;
    url?: string | null;
  } | null;
};

export function collectWebSearchTurnSources(
  items: readonly WebSearchActivityItem[],
): TurnSource[] {
  return dedupeSourcesByUrl(
    items.flatMap((item) => {
      if (
        item.type !== "web-search" ||
        (item.action?.type !== "openPage" &&
          item.action?.type !== "findInPage") ||
        item.action.url == null
      ) {
        return [];
      }
      const source = normalizeTurnSource({ url: item.action.url });
      return source == null ? [] : [source];
    }),
  );
}

export function normalizeTurnSource({
  label,
  title = null,
  url,
}: {
  label?: string | null;
  title?: string | null;
  url: string;
}): TurnSource | null {
  try {
    const parsed = new URL(url);
    if (
      (parsed.protocol !== "http:" && parsed.protocol !== "https:") ||
      parsed.username !== "" ||
      parsed.password !== ""
    ) {
      return null;
    }
    return {
      label:
        label?.trim() ||
        `${parsed.host.replace(/^www\./u, "")}${parsed.pathname}`,
      title: title?.trim() || null,
      url: parsed.href,
    };
  } catch {
    return null;
  }
}

export function dedupeSourcesByUrl(
  sources: readonly TurnSource[],
): TurnSource[] {
  const seen = new Set<string>();
  return sources.filter((source) =>
    seen.has(source.url) ? false : (seen.add(source.url), true),
  );
}
