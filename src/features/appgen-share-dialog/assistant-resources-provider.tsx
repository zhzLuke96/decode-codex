// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Supplies appgen site resources to assistant responses so that links pointing
// at a generated site render an access-policy badge (icon + tooltip) describing
// who the site is shared with. Resolves each link's URL to a known resource,
// loads that project's access policy, and feeds a render-prop badge to the
// shared resource-hover context.
import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import { summarizeAppgenAccessPolicy } from "../../utils/appgen-access";
import {
  AppgenAccessStateIcon,
  getAppgenAccessSiteStateMessage,
} from "../../utils/appgen-access-state-messages";
// Cross-slice deps owned by sibling chunks not yet restored, imported by role
// from the chunk boundary facade: `useAppgenProject` reads a generated site's
// access policy; `AssistantResourceHoverContext` (alias `ene`) is the context
// that exposes a per-link badge renderer; `matchesResourceUrl` (alias `yne`)
// tests whether a link URL refers to a given resource.
import {
  useAppgenProject,
  AssistantResourceHoverContext,
  matchesResourceUrl,
} from "../../boundaries/onboarding-commons-externals.facade";

type AssistantResource = {
  projectId: string;
  url: string;
};

type AssistantResourceBadge = {
  customIcon: ReactNode;
  customTooltip: ReactNode;
  tooltipDelayDuration: number;
};

type AssistantResourceBadgeRenderer = (
  badge: AssistantResourceBadge | null,
) => ReactNode;

const AssistantResourcesContext = createContext<AssistantResource[] | null>(
  null,
);

type AssistantResourcesProviderProps = {
  children: ReactNode;
  resources: AssistantResource[];
};

export function AssistantResourcesProvider({
  children,
  resources,
}: AssistantResourcesProviderProps) {
  const renderer = resources.length === 0 ? null : AppgenSiteAccessBadge;
  return (
    <AssistantResourcesContext value={resources}>
      <AssistantResourceHoverContext value={renderer}>
        {children}
      </AssistantResourceHoverContext>
    </AssistantResourcesContext>
  );
}

type AppgenSiteAccessBadgeProps = {
  children: AssistantResourceBadgeRenderer;
  href: string;
  iconClassName?: string;
};

function AppgenSiteAccessBadge({
  children,
  href,
  iconClassName,
}: AppgenSiteAccessBadgeProps) {
  const resource = useContext(AssistantResourcesContext)?.find((candidate) =>
    matchesResourceUrl(href, candidate.url),
  );
  if (resource == null) {
    return children(null);
  }
  return (
    <AppgenSiteAccessBadgeContent
      iconClassName={iconClassName}
      projectId={resource.projectId}
    >
      {children}
    </AppgenSiteAccessBadgeContent>
  );
}

type AppgenSiteAccessBadgeContentProps = {
  children: AssistantResourceBadgeRenderer;
  iconClassName?: string;
  projectId: string;
};

function AppgenSiteAccessBadgeContent({
  children,
  iconClassName,
  projectId,
}: AppgenSiteAccessBadgeContentProps) {
  const { data, isError, isLoading } = useAppgenProject(projectId);
  if (isLoading || isError || data == null) {
    return children(null);
  }
  const summary = summarizeAppgenAccessPolicy(data.access_policy);
  const tooltipDescriptor = getAppgenAccessSiteStateMessage(summary);
  const customIcon = (
    <AppgenAccessStateIcon
      aria-hidden={true}
      accessPolicy={data.access_policy}
      className={iconClassName}
    />
  );
  const customTooltip = (
    <FormattedMessage {...tooltipDescriptor} values={summary} />
  );
  return children({
    customIcon,
    customTooltip,
    tooltipDelayDuration: 0,
  });
}
