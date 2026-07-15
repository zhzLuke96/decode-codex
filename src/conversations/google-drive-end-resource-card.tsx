// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Google Drive end-of-turn resource card.

import { useState, type MouseEvent } from "react";
import type { ReactElement } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { ThreadResourceCardHeader } from "../ui/thread-resource-card";
import { GoogleResourceKindIcon } from "./google-resource-kind-icon";
import type { GoogleResourceKind } from "./google-resource-kind-icon";
import {
  OVERLAY_BUTTON_CLASS_NAME,
  headerClassName,
} from "./end-resource-card-shared";
import {
  OpenInTargetsHoverSubtitle,
  ResourceOverflowMenu,
  analyticsClickAction,
  analyticsClickSource,
  handleOpenResourceLink,
  trackGoogleWorkspaceResourceClick,
  trackOpenInCodexBrowser,
  useOpenTarget,
  useProductLogger,
} from "../boundaries/onboarding-commons-externals.facade";

export function getGoogleResourceSubtitle(
  resourceKind: GoogleResourceKind,
): ReactElement | undefined {
  switch (resourceKind) {
    case "document":
      return (
        <FormattedMessage
          id="localConversation.endResource.googleDocsSubtitle"
          defaultMessage="Google Docs"
          description="Subtitle for a Google Docs conversation resource card"
        />
      );
    case "spreadsheet":
      return (
        <FormattedMessage
          id="localConversation.endResource.googleSheetsSubtitle"
          defaultMessage="Google Sheets"
          description="Subtitle for a Google Sheets conversation resource card"
        />
      );
    case "presentation":
      return (
        <FormattedMessage
          id="localConversation.endResource.googleSlidesSubtitle"
          defaultMessage="Google Slides"
          description="Subtitle for a Google Slides conversation resource card"
        />
      );
    case "drive":
      return (
        <FormattedMessage
          id="localConversation.endResource.googleDriveSubtitle"
          defaultMessage="Drive"
          description="Subtitle for a Google Drive conversation resource card"
        />
      );
  }
}

export interface GoogleDriveResource {
  type: "google-drive";
  url: string;
  title: string;
  resourceKind: GoogleResourceKind;
}

export interface GoogleDriveEndResourceCardProps {
  analyticsContext: {
    threadId: string;
    turnId: string | null;
    inputMessageId: string | null;
    messageId: string | null;
  };
  conversationId: string;
  hostId: string;
  resource: GoogleDriveResource;
}

export function GoogleDriveEndResourceCard({
  analyticsContext,
  conversationId,
  hostId,
  resource,
}: GoogleDriveEndResourceCardProps) {
  const intl = useIntl();
  const productLogger = useProductLogger();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [shouldLoadTargets, setShouldLoadTargets] = useState(false);
  const openTarget = useOpenTarget({
    href: resource.url,
    openTargetIntent: "default",
  });
  const handleClick = (event: MouseEvent) => {
    trackGoogleWorkspaceResourceClick({
      clickAction:
        analyticsClickAction.CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_ACTION_OPEN_EXISTING_RESOURCE,
      clickSource:
        analyticsClickSource.CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_END_RESOURCE_CARD,
      context: analyticsContext,
      productLogger,
      resourceKind: resource.resourceKind,
    });
    handleOpenResourceLink({
      event,
      href: resource.url,
      originHostId: hostId,
      initiator: "mcp_app_resource",
      openTarget,
    });
  };
  const handleOpenInCodexBrowser = () => {
    trackOpenInCodexBrowser({
      conversationId,
      url: resource.url,
      source: "manual",
      initiator: "mcp_app_resource",
    });
  };
  const showTargetsOnHover = () => {
    setShouldLoadTargets(true);
  };
  return (
    <div className="group/end-resource relative">
      <button
        aria-label={intl.formatMessage(
          {
            id: "localConversation.endResource.openGoogleDriveResource",
            defaultMessage: "Open {title}",
            description:
              "Accessible label for opening a Google Drive conversation resource card",
          },
          { title: resource.title },
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
            <GoogleResourceKindIcon
              className="size-6"
              resourceKind={resource.resourceKind}
            />
          </span>
        }
        title={resource.title}
        titleTooltip={resource.title}
        subtitle={
          <>
            <span className="end-resource-default-subtitle">
              {getGoogleResourceSubtitle(resource.resourceKind)}
            </span>
            <span className="end-resource-hover-subtitle hidden items-center gap-1">
              <OpenInTargetsHoverSubtitle
                cwd={null}
                hostId={hostId}
                href={resource.url}
                openTarget={openTarget}
                shouldLoadTargets={shouldLoadTargets}
              />
            </span>
          </>
        }
        trailing={
          <ResourceOverflowMenu
            copyLink={resource.url}
            cwd={null}
            hostId={hostId}
            isOpen={isMenuOpen}
            onOpenChange={setMenuOpen}
            onOpenInCodexBrowser={handleOpenInCodexBrowser}
            openPath={resource.url}
          />
        }
      />
    </div>
  );
}
