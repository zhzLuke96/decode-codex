// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Generated website preview end-of-turn resource card.

import { useState, type MouseEvent } from "react";
import type { ReactElement, SVGProps } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { ThreadResourceCardHeader } from "../ui/thread-resource-card";
import {
  OVERLAY_BUTTON_CLASS_NAME,
  headerClassName,
} from "./end-resource-card-shared";
import {
  buildFaviconDataUri,
  parseWebsitePreviewMetadata,
  resolveWebsiteResourcePath,
} from "./website-resource-preview";
import {
  OpenInTargetsHoverSubtitle,
  ResourceOverflowMenu,
  handleOpenResourceLink,
  isBrowserOpenableUrl,
  openFileResourceFromTurn,
  openInBrowserTarget,
  useBrowserSidebarEnabled,
  useHostConfig,
  useHostQuery,
  useHostRequest,
  useOpenTarget,
} from "../boundaries/onboarding-commons-externals.facade";

const MAX_FAVICON_BYTES = 262144;

const WebsitePreviewFallbackIcon = (
  props: SVGProps<SVGSVGElement>,
): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={12} cy={12} r={9} fill="#CDF3FF" />
    <path
      fill="#41CEF9"
      fillRule="evenodd"
      d="M12 2c5.522 0 10 4.478 10 10s-4.478 10-10 10S2 17.522 2 12 6.478 2 12 2ZM9.172 13c.146 4.477 1.284 7 2.828 7 1.544 0 2.682-2.523 2.828-7H9.172Zm-5.108 0a7.994 7.994 0 0 0 4.313 6.134C7.686 17.622 7.261 15.549 7.174 13h-3.11Zm12.762 0c-.087 2.55-.512 4.622-1.204 6.134A7.994 7.994 0 0 0 19.936 13h-3.11Zm-8.45-8.135A7.995 7.995 0 0 0 4.065 11h3.11c.087-2.55.511-4.623 1.203-6.135ZM12.001 4c-1.544 0-2.682 2.523-2.828 7h5.656C14.682 6.523 13.544 4 12 4Zm3.622.865C16.314 6.377 16.74 8.45 16.826 11h3.11a7.995 7.995 0 0 0-4.314-6.135Z"
      clipRule="evenodd"
    />
  </svg>
);

export interface WebsiteResource {
  type: "website";
  target: string;
}

export interface WebsiteEndResourceCardProps {
  cwd: string | null;
  hostId: string;
  resource: WebsiteResource;
}

export function WebsiteEndResourceCard({
  cwd,
  hostId,
  resource,
}: WebsiteEndResourceCardProps) {
  const intl = useIntl();
  const hostConfig = useHostConfig(hostId);
  const browserSidebarEnabled = useBrowserSidebarEnabled();
  const openFileRequest = useHostRequest("open-file");
  const resolvedPath = resolveWebsiteResourcePath({
    cwd,
    target: resource.target,
  });
  const hasResolvedPath = resolvedPath != null;
  const { data: previewMetadata } = useHostQuery("read-file", {
    params: { path: resolvedPath ?? "", hostId },
    queryConfig: { enabled: hasResolvedPath },
    select: (result: { contents: string }) =>
      parseWebsitePreviewMetadata({
        filePath: resolvedPath,
        html: result.contents,
      }),
  });
  const faviconFilePath =
    previewMetadata?.favicon?.type === "file"
      ? previewMetadata.favicon.path
      : null;
  const hasFaviconFile = faviconFilePath != null;
  const { data: faviconMetadata } = useHostQuery("read-file-metadata", {
    params: { path: faviconFilePath ?? "", hostId },
    queryConfig: { enabled: hasFaviconFile },
  });
  const canReadFaviconBytes =
    faviconMetadata?.isFile === true &&
    faviconMetadata.sizeBytes != null &&
    faviconMetadata.sizeBytes <= MAX_FAVICON_BYTES;
  const { data: faviconDataUri } = useHostQuery("read-file-binary", {
    params: { path: faviconFilePath ?? "", hostId },
    queryConfig: { enabled: canReadFaviconBytes },
    select: (result: { contentsBase64?: string | null }) =>
      result.contentsBase64 == null || faviconFilePath == null
        ? null
        : buildFaviconDataUri({
            contentsBase64: result.contentsBase64,
            filePath: faviconFilePath,
          }),
  });
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [shouldLoadTargets, setShouldLoadTargets] = useState(false);
  const [faviconError, setFaviconError] = useState<string | null>(null);
  const faviconSrc =
    previewMetadata?.favicon?.type === "url"
      ? previewMetadata.favicon.src
      : canReadFaviconBytes
        ? faviconDataUri
        : null;
  const title =
    previewMetadata?.title ??
    intl.formatMessage({
      id: "localConversation.endResource.websiteTitle",
      defaultMessage: "Web preview",
      description: "Title for a generated website preview resource card",
    });
  const isBrowserUrl = isBrowserOpenableUrl(resource.target);
  const openTarget = useOpenTarget({
    href: resource.target,
    openTargetIntent: "default",
  });
  const resolvedOpenTarget = isBrowserUrl ? openTarget : undefined;
  const openInDefault = () => {
    openFileResourceFromTurn({
      path: resource.target,
      cwd,
      browserSidebarEnabled,
      hostConfig,
      hostId,
      openFile: openFileRequest.mutate,
    });
  };
  const handleClick = (event: MouseEvent) => {
    if (isBrowserUrl) {
      handleOpenResourceLink({
        event,
        href: resource.target,
        initiator: "mcp_app_resource",
        openTarget: resolvedOpenTarget,
      });
      return;
    }
    openInDefault();
  };
  const handleOpenInCodexBrowser = isBrowserUrl
    ? () => {
        openInBrowserTarget({
          href: resource.target,
          initiator: "mcp_app_resource",
          openTarget: "in-app-browser",
        });
      }
    : openInDefault;
  const showTargetsOnHover = () => {
    setShouldLoadTargets(true);
  };
  const copyLink = isBrowserOpenableUrl(resource.target)
    ? resource.target
    : undefined;
  return (
    <div className="group/end-resource relative">
      <button
        aria-label={intl.formatMessage(
          {
            id: "localConversation.endResource.openWebsite",
            defaultMessage: "Open {title}",
            description:
              "Accessible label for opening a website preview resource card",
          },
          { title },
        )}
        className={OVERLAY_BUTTON_CLASS_NAME}
        onClick={handleClick}
        onFocus={showTargetsOnHover}
        onMouseEnter={showTargetsOnHover}
        type="button"
      />
      <ThreadResourceCardHeader
        className={headerClassName(isMenuOpen)}
        icon={
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-token-bg-secondary text-token-text-secondary">
            {faviconSrc != null && faviconError !== faviconSrc ? (
              <img
                alt=""
                className="size-6 rounded-2xs object-contain"
                draggable={false}
                onError={() => setFaviconError(faviconSrc)}
                src={faviconSrc}
              />
            ) : (
              <WebsitePreviewFallbackIcon className="size-6" />
            )}
          </span>
        }
        title={title}
        titleTooltip={title}
        subtitle={
          <>
            <span className="end-resource-default-subtitle">
              <FormattedMessage
                id="localConversation.endResource.websiteSubtitle"
                defaultMessage="Website"
                description="Subtitle for a generated website preview resource card"
              />
            </span>
            <span className="end-resource-hover-subtitle hidden items-center gap-1">
              {isBrowserUrl ? (
                <OpenInTargetsHoverSubtitle
                  cwd={cwd}
                  hostId={hostId}
                  href={resource.target}
                  openTarget={resolvedOpenTarget}
                  shouldLoadTargets={shouldLoadTargets}
                />
              ) : (
                <FormattedMessage
                  id="localConversation.endResource.openInCodexBrowserSubtitle"
                  defaultMessage="Open"
                  description="Hover subtitle for opening a website preview in the Codex browser"
                />
              )}
            </span>
          </>
        }
        trailing={
          <ResourceOverflowMenu
            copyLink={copyLink}
            cwd={cwd}
            hostId={hostId}
            isOpen={isMenuOpen}
            onOpenChange={setMenuOpen}
            onOpenInCodexBrowser={handleOpenInCodexBrowser}
            openPath={resource.target}
          />
        }
      />
    </div>
  );
}
