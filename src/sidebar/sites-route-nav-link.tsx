// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Sidebar navigation row that opens the Sites route, shown only once the Sites
// feature reports itself as available. Highlights while on /sites (but not the
// /sites/library sub-route).
import { FormattedMessage } from "../vendor/react-intl";
import {
  useLocation,
  useNavigate,
} from "../conversations/local-conversation-route-runtime";
import {
  appStoreScope,
  openSitesRoute,
  SidebarRouteNavRow,
  sitesRouteAvailabilityAtom,
  SitesIcon,
  useAppScope,
  useAtomValue,
} from "../boundaries/onboarding-commons-externals.facade";

export function SitesRouteNavLink() {
  const store = useAppScope(appStoreScope);
  const sitesAvailability = useAtomValue(sitesRouteAvailabilityAtom) as string;
  const navigate = useNavigate();
  const { pathname } = useLocation() as { pathname: string };

  if (sitesAvailability !== "available") return null;

  const isActive =
    pathname.startsWith("/sites") && !pathname.startsWith("/sites/library");

  return (
    <SidebarRouteNavRow
      icon={SitesIcon}
      onClick={() => openSitesRoute(store, navigate)}
      isActive={isActive}
      label={
        <FormattedMessage
          id="sidebarElectron.sitesRouteNavLink"
          defaultMessage="Sites"
          description="Nav link that opens the Sites route"
        />
      }
    />
  );
}
