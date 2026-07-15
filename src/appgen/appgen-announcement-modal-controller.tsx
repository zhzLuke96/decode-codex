// Restored from ref/webview/assets/app-initial~app-main~appgen-publication-terms-route~plugin-detail-page~skills-settings~plug~bpqstr7s-Dw2BkCEu.js
// Sites/Appgen announcement modal controller and concrete announcement content.
import type { MouseEvent, ReactElement, ReactNode } from "react";
import { useScope, useSignalValue } from "../runtime/scope-signal-runtime";
import { sharedObjectAppScopeRoot } from "../runtime/shared-object-host-runtime";
import { openInBrowserFromEvent } from "../runtime/pull-request-actions-runtime";
import { useSelectedAccountQuery } from "../runtime/codex-api";
import { gradient } from "../utils/gradient";
import { FormattedMessage } from "../vendor/react-intl";
import { AppMentionPill } from "./app-mention-pill";
import {
  AppgenAnnouncementAudience,
  AppgenAnnouncementModalControllerProps,
  ScopeWriter,
} from "./appgen-announcement-types";
import {
  appgenPublicationTermsDisclosureSignal,
  getAppgenAnnouncementAudienceForAccount,
  hasSeenAppgenPublicationTermsDisclosure,
  hasSeenAppgenPublicationTermsDisclosureSignal,
  markAppgenPublicationTermsDisclosureSeen,
} from "./appgen-publication-terms-disclosure";
import { AppgenSitesIcon } from "./appgen-sites-icon";
import { FeatureAnnouncementModal } from "./feature-announcement-modal";

export const appgenAnnouncementGradient = gradient;

export function AppgenAnnouncementModalController({
  audience,
  showWhenUnseen = false,
}: AppgenAnnouncementModalControllerProps): ReactElement | null {
  const scope = useScope(sharedObjectAppScopeRoot) as ScopeWriter;
  const hasSeen =
    useSignalValue(hasSeenAppgenPublicationTermsDisclosureSignal as never) ??
    hasSeenAppgenPublicationTermsDisclosure(scope);
  const pendingDisclosure = useSignalValue(
    appgenPublicationTermsDisclosureSignal,
  );

  if (hasSeen || (!showWhenUnseen && pendingDisclosure == null)) return null;

  const resolvedAudience = pendingDisclosure?.audience ?? audience;
  if (resolvedAudience == null) {
    return <AccountAudienceAppgenAnnouncement scope={scope} />;
  }
  return (
    <DismissibleAppgenAnnouncementModal
      scope={scope}
      audience={resolvedAudience}
    />
  );
}

function AccountAudienceAppgenAnnouncement({
  scope,
}: {
  scope: ScopeWriter;
}): ReactElement | null {
  const { data, isLoading } = useSelectedAccountQuery();
  if (isLoading) return null;
  return (
    <DismissibleAppgenAnnouncementModal
      scope={scope}
      audience={getAppgenAnnouncementAudienceForAccount(data)}
    />
  );
}

function DismissibleAppgenAnnouncementModal({
  audience,
  scope,
}: {
  audience: AppgenAnnouncementAudience;
  scope: ScopeWriter;
}): ReactElement {
  const dismiss = () => markAppgenPublicationTermsDisclosureSeen(scope);
  return (
    <AppgenAnnouncementModal
      audience={audience}
      onDismiss={dismiss}
      onPrimaryAction={dismiss}
    />
  );
}

function AppgenAnnouncementModal({
  audience = "personal",
  onDismiss,
  onPrimaryAction,
}: {
  audience?: AppgenAnnouncementAudience;
  onDismiss: () => void;
  onPrimaryAction: () => void;
}): ReactElement {
  const body = (
    <p className="text-base leading-normal tracking-normal text-token-description-foreground">
      {audience === "workspace" ? (
        <FormattedMessage
          id="codexAppgenAnnouncementModal.body"
          defaultMessage="Codex can create and publish websites, dashboards, and tools to a URL that you can share with your team."
          description="Body copy for the Sites announcement modal shown in workspace accounts"
        />
      ) : (
        <FormattedMessage
          id="codexAppgenAnnouncementModal.body.personal"
          defaultMessage="Codex can create and publish websites, dashboards, and tools to a shareable URL."
          description="Body copy for the Sites announcement modal shown in personal accounts"
        />
      )}
    </p>
  );

  return (
    <FeatureAnnouncementModal
      title={
        <FormattedMessage
          id="codexAppgenAnnouncementModal.title"
          defaultMessage="Turn your ideas into live websites"
          description="Title for the Sites announcement modal"
        />
      }
      body={body}
      media={<AppgenAnnouncementHero audience={audience} />}
      closeButtonTone="dark"
      dismissLabel={
        <FormattedMessage
          id="codexAppgenAnnouncementModal.dismissLabel"
          defaultMessage="Later"
          description="Secondary action to dismiss the Sites announcement"
        />
      }
      primaryActionLabel={
        <FormattedMessage
          id="codexAppgenAnnouncementModal.primaryActionLabel"
          defaultMessage="Try Sites"
          description="Primary action to start building a site from the Sites announcement"
        />
      }
      disclaimerFooter={<AppgenPublicationTermsDisclaimer />}
      onDismiss={onDismiss}
      onPrimaryAction={onPrimaryAction}
    />
  );
}

function AppgenAnnouncementHero({
  audience,
}: {
  audience: AppgenAnnouncementAudience;
}): ReactElement {
  return (
    <div className="relative flex h-full justify-center overflow-hidden px-4 py-12 shadow-[inset_0_0_0_1px_var(--color-token-border-default)] sm:px-8">
      <img
        src={appgenAnnouncementGradient}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-token-bg-primary/70" />
      <div className="relative flex w-full max-w-[640px] items-center justify-center">
        <div className="max-w-[77%] rounded-2xl bg-token-bg-primary/75 py-3 pr-2.5 pl-3 break-words shadow-[0_0_0_1px_var(--color-token-border-default)] [&_.contain-inline-size]:[contain:initial]">
          <AppMentionPill
            icon={<AppgenSitesIcon />}
            text={
              <FormattedMessage
                id="codexAppgenAnnouncementModal.heroTitle"
                defaultMessage="Sites"
                description="Sites label shown over the Sites announcement hero image"
              />
            }
          />
          <span className="ml-1">
            {audience === "workspace" ? (
              <FormattedMessage
                id="codexAppgenAnnouncementModal.heroDescription"
                defaultMessage="Build a launch calendar"
                description="Example Sites prompt shown over the Sites announcement hero image"
              />
            ) : (
              <FormattedMessage
                id="codexAppgenAnnouncementModal.heroDescription.personal"
                defaultMessage="Build a portfolio site"
                description="Example Sites prompt shown over the Sites announcement hero image for personal accounts"
              />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

function AppgenPublicationTermsDisclaimer(): ReactElement {
  return (
    <>
      By using this feature, you agree to the{" "}
      <ExternalPolicyLink url="https://openai.com/policies/chatgpt-sites-terms/">
        ChatGPT Sites Terms
      </ExternalPolicyLink>{" "}
      and are responsible for your website content.{" "}
      <ExternalPolicyLink url="https://help.openai.com/articles/20001273">
        Learn more
      </ExternalPolicyLink>
    </>
  );
}

function ExternalPolicyLink({
  children,
  url,
}: {
  children: ReactNode;
  url: string;
}): ReactElement {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    openInBrowserFromEvent({
      event,
      href: url,
      initiator: "open_in_browser_bridge",
    });
  };
  return (
    <a
      className="cursor-interaction underline underline-offset-2 hover:no-underline"
      href={url}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

export function initAppgenAnnouncementGradientAsset(): void {}

export function initAppgenAnnouncementModalRuntime(): void {
  initAppgenAnnouncementModalShell();
}

export function initAppgenAnnouncementModalShell(): void {}
