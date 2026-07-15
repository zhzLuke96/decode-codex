// Restored from ref/webview/assets/appgen-publication-terms-route-CgK9B-Bt.js
// Semantic AppgenPublicationTermsRoute wrapper with restored dependency imports.

import type { ReactElement, ReactNode } from "react";
import { once as runOnce } from "../../runtime/commonjs-interop";
import {
  worktreeNewThreadQueryCompatSlotLowerELowerF as useSelectedAccountQuery,
  worktreeNewThreadQueryCompatSlotUpperJLowerD as initSelectedAccountQueryRuntime,
} from "../../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  appgenPublicationTermsDisclosureSignal as initAppgenPublicationTermsDisclosureRuntime,
  currentAppInitialSharedMember0546 as getAppgenAnnouncementAudienceForAccount,
} from "../../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  AppgenAnnouncementModalController,
  initAppgenAnnouncementModalRuntime,
} from "../appgen-announcement-modal";

type AppgenPublicationTermsRouteProps = {
  children: ReactNode;
};

function AppgenPublicationTermsRoute({
  children,
}: AppgenPublicationTermsRouteProps): ReactElement {
  const { data: account, isLoading } = useSelectedAccountQuery();
  const announcement = isLoading ? null : (
    <AppgenAnnouncementModalController
      audience={getAppgenAnnouncementAudienceForAccount(account)}
      showWhenUnseen
    />
  );

  return (
    <>
      {children}
      {announcement}
    </>
  );
}

runOnce(() => {
  initSelectedAccountQueryRuntime();
  initAppgenAnnouncementModalRuntime();
  initAppgenPublicationTermsDisclosureRuntime();
})();
export { AppgenPublicationTermsRoute };
