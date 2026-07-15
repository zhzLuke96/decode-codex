// Restored from ref/webview/assets/app-initial~app-main~onboarding-page~pending-request-item-panel~home-ambient-suggestions-content-B1ROILfQ.js
// app-initial~app-main~onboarding-page~pending-request-item-panel~home-ambient-suggestions-content-B1ROILfQ chunk restored from the Codex webview bundle.
import { _appScopeT } from "../boundaries/app-scope";
import { vscodeApiI, vscodeApiU } from "../boundaries/vscode-api";
import { isEnterpriseLikeSku } from "../utils/skus";
type MailProvider = string | null | undefined;
const microsoftPluginNameByGooglePluginName: Record<string, string> = {
  gmail: "outlook-email",
  "google-calendar": "outlook-calendar",
  "google-drive": "sharepoint",
  slack: "teams",
};
const emailDomainMailProviderQuery = vscodeApiI(
  _appScopeT,
  "email-domain-mail-provider",
  (domain: string | null | undefined) => ({
    enabled: domain != null,
    params:
      domain == null
        ? undefined
        : {
            domain,
          },
    retry: 2,
    staleTime: vscodeApiU.FIVE_MINUTES,
  }),
);
function getEmailDomain(email: string | null | undefined) {
  if (email == null) return null;
  const atIndex = email.lastIndexOf("@");
  if (atIndex <= 0) return null;
  const domain = email
    .slice(atIndex + 1)
    .trim()
    .toLowerCase();
  return domain.length === 0 ? null : domain;
}
function resolveMailProviderForEmailDomain({
  debugOverride,
  detectedProvider,
  emailDomain,
  isError,
}: {
  debugOverride?: MailProvider;
  detectedProvider?: MailProvider;
  emailDomain?: string | null;
  isError: boolean;
}) {
  return (
    debugOverride ??
    detectedProvider ??
    (emailDomain == null || isError ? "other" : null)
  );
}
function normalizeMailProviderForSku(
  provider: string,
  sku: string | null | undefined,
) {
  return provider === "other"
    ? isEnterpriseLikeSku(sku)
      ? "microsoft"
      : "google"
    : provider;
}
function mapPluginNameForMailProvider(pluginName: string, provider: string) {
  return provider === "microsoft"
    ? (microsoftPluginNameByGooglePluginName[pluginName] ?? pluginName)
    : pluginName;
}
function initOnboardingMailProviderChunk() {}
export {
  normalizeMailProviderForSku,
  mapPluginNameForMailProvider,
  getEmailDomain,
  initOnboardingMailProviderChunk,
  resolveMailProviderForEmailDomain,
  emailDomainMailProviderQuery,
};
