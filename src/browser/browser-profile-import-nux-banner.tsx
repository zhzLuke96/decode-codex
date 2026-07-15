// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Banner inviting the user to import passwords and cookies from another browser.
import type { SVGProps } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { XIcon } from "../icons/x-icon";
import { filterImportableBrowserProfiles } from "./browser-profile-import-query";

export type BrowserProfileSource = "atlas" | "chrome";

type ImportableBrowserProfile = {
  source: BrowserProfileSource;
  hasCookies?: boolean;
  hasPasswords?: boolean;
};

export function initAtlasBrowserIconUrlChunk(): void {}

export const atlasBrowserIconUrl =
  "" + new URL("atlas-app-BbZ7-u67.png", import.meta.url).href;

function ChromeBrandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={256}
      height={256}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#fff"
        d="M128.003 199.216c39.335 0 71.221-31.888 71.221-71.223S167.338 56.77 128.003 56.77S56.78 88.658 56.78 127.993s31.887 71.223 71.222 71.223"
      />
      <path
        fill="#229342"
        d="M35.89 92.997Q27.92 79.192 17.154 64.02a127.98 127.98 0 0 0 110.857 191.981q17.671-24.785 23.996-35.74q12.148-21.042 31.423-60.251v-.015a63.993 63.993 0 0 1-110.857.017Q46.395 111.19 35.89 92.998"
      />
      <path
        fill="#fbc116"
        d="M128.008 255.996A127.97 127.97 0 0 0 256 127.997A128 128 0 0 0 238.837 64q-36.372-3.585-53.686-3.585q-19.632 0-57.152 3.585l-.014.01a63.99 63.99 0 0 1 55.444 31.987a63.99 63.99 0 0 1-.001 64.01z"
      />
      <path
        fill="#1a73e8"
        d="M128.003 178.677c27.984 0 50.669-22.685 50.669-50.67s-22.685-50.67-50.67-50.67c-27.983 0-50.669 22.686-50.669 50.67s22.686 50.67 50.67 50.67"
      />
      <path
        fill="#e33b2e"
        d="M128.003 64.004H238.84a127.973 127.973 0 0 0-221.685.015l55.419 95.99l.015.008a63.993 63.993 0 0 1 55.415-96.014z"
      />
    </svg>
  );
}

function getProfileSource(
  profile: ImportableBrowserProfile,
): BrowserProfileSource {
  return profile.source;
}

type ProfileSourceIconProps = {
  className?: string;
  source: BrowserProfileSource;
};

function ProfileSourceIcon({ className, source }: ProfileSourceIconProps) {
  switch (source) {
    case "atlas":
      return (
        <img
          aria-hidden={true}
          alt=""
          className={className}
          src={atlasBrowserIconUrl}
        />
      );
    case "chrome":
      return <ChromeBrandIcon aria-hidden={true} className={className} />;
  }
}

type ProfileSourceBadgesProps = {
  sources: BrowserProfileSource[];
};

function ProfileSourceBadges({ sources }: ProfileSourceBadgesProps) {
  if (sources.length === 1) {
    return (
      <ProfileSourceIcon
        source={sources[0]}
        className="h-6 w-6 shrink-0 rounded-[22%]"
      />
    );
  }
  return (
    <div className="relative h-7 w-9 shrink-0" aria-hidden={true}>
      <ProfileSourceIcon
        className="absolute top-0 left-0 h-6 w-6 rounded-[22%]"
        source="atlas"
      />
      <ProfileSourceIcon
        className="absolute right-0 bottom-0 h-6 w-6 rounded-full ring-2 ring-token-main-surface-primary"
        source="chrome"
      />
    </div>
  );
}

export type BrowserProfileImportNuxBannerProps = {
  profiles: ImportableBrowserProfile[];
  onDismiss: () => void;
  onImport: () => void;
};

export function BrowserProfileImportNuxBanner({
  profiles,
  onDismiss,
  onImport,
}: BrowserProfileImportNuxBannerProps) {
  const intl = useIntl();
  const sources = Array.from(
    new Set(filterImportableBrowserProfiles(profiles).map(getProfileSource)),
  );
  const singleSource = sources.length === 1 ? sources[0] : null;
  const dismissLabel = intl.formatMessage({
    id: "browserProfileImport.nux.dismiss",
    defaultMessage: "Dismiss browser data import banner",
    description:
      "Accessible label for dismissing the browser data import banner",
  });

  return (
    <div
      data-testid="browser-profile-import-nux-banner"
      className="flex min-h-14 w-full items-center gap-3 border-b border-token-border bg-token-main-surface-primary px-4 py-2 text-token-foreground shadow-sm max-[420px]:flex-wrap"
      role="status"
    >
      <ProfileSourceBadges sources={sources} />
      <div className="min-w-40 flex-1">
        <div className="text-sm leading-5 font-medium">
          {singleSource === "chrome" ? (
            <FormattedMessage
              id="browserProfileImport.nux.title.chrome"
              defaultMessage="Import data from Chrome"
              description="Title of the browser import banner when Google Chrome, the browser product, is the only source"
            />
          ) : singleSource === "atlas" ? (
            <FormattedMessage
              id="browserProfileImport.nux.title.atlas"
              defaultMessage="Import data from Atlas"
              description="Title of the browser import banner when ChatGPT Atlas, the browser product, is the only source"
            />
          ) : (
            <FormattedMessage
              id="browserProfileImport.nux.title.multiple"
              defaultMessage="Import data from your browser"
              description="Title of the browser import banner when multiple browser sources are available"
            />
          )}
        </div>
        <div className="text-xs leading-4 text-token-description-foreground">
          <FormattedMessage
            id="browserProfileImport.nux.description"
            defaultMessage="Bring over your passwords and cookies to Codex's browser"
            description="Description of the browser data import banner"
          />
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-1 max-[420px]:ml-auto">
        <Button color="secondary" size="toolbar" onClick={onImport}>
          <FormattedMessage
            id="browserProfileImport.nux.import"
            defaultMessage="Import"
            description="Button that opens the browser data import dialog from the banner"
          />
        </Button>
        <Button
          aria-label={dismissLabel}
          color="ghost"
          size="icon"
          uniform={true}
          onClick={onDismiss}
        >
          <XIcon aria-hidden={true} className="icon-xs" />
        </Button>
      </div>
    </div>
  );
}
