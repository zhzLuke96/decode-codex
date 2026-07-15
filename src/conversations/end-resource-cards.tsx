// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Expandable end-of-turn resource card list.

import type { ReactElement } from "react";
import { useState } from "react";
import { FormattedMessage } from "../vendor/react-intl";
import {
  ThreadResourceCard,
  ThreadResourceCardExpandButton,
} from "../ui/thread-resource-card";
import { AppgenSiteEndResourceCard } from "./appgen-site-end-resource-card";
import type { AppgenSiteResource } from "./appgen-site-end-resource-card";
import { FileEndResourceCard } from "./file-end-resource-card";
import { GoogleDriveEndResourceCard } from "./google-drive-end-resource-card";
import type { GoogleDriveResource } from "./google-drive-end-resource-card";
import { WebsiteEndResourceCard } from "./website-end-resource-card";
import type { WebsiteResource } from "./website-end-resource-card";

const MAX_VISIBLE_RESOURCES = 3;

export {
  AppgenAccessPolicySubtitle,
  AppgenSiteEndResourceCard,
} from "./appgen-site-end-resource-card";
export type {
  AppgenAccessPolicySubtitleProps,
  AppgenSiteEndResourceCardProps,
  AppgenSiteResource,
} from "./appgen-site-end-resource-card";
export { FileEndResourceCard } from "./file-end-resource-card";
export type { FileEndResourceCardProps } from "./file-end-resource-card";
export {
  formatFileTypeLabel,
  formatParentDirectoryLabel,
} from "./file-resource-labels";
export {
  GoogleDriveEndResourceCard,
  getGoogleResourceSubtitle,
} from "./google-drive-end-resource-card";
export type {
  GoogleDriveEndResourceCardProps,
  GoogleDriveResource,
} from "./google-drive-end-resource-card";
export { WebsiteEndResourceCard } from "./website-end-resource-card";
export type {
  WebsiteEndResourceCardProps,
  WebsiteResource,
} from "./website-end-resource-card";

export type EndResource =
  | ({ type: "file"; path: string } & Record<string, unknown>)
  | GoogleDriveResource
  | AppgenSiteResource
  | WebsiteResource;

export interface EndResourcesListProps {
  turnId?: string;
  conversationId: string;
  cwd: string | null;
  hostId: string;
  inputMessageId?: string | null;
  messageId?: string | null;
  onFileOpen?: (path: string) => void;
  resources: EndResource[];
}

export function EndResourcesList({
  turnId,
  conversationId,
  cwd,
  hostId,
  inputMessageId,
  messageId,
  onFileOpen,
  resources,
}: EndResourcesListProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleResources = isExpanded
    ? resources
    : resources.slice(0, MAX_VISIBLE_RESOURCES);
  const hiddenCount = resources.length - visibleResources.length;
  if (resources.length === 0) {
    return null;
  }
  const renderResource = (resource: EndResource): ReactElement | undefined => {
    switch (resource.type) {
      case "file":
        return (
          <FileEndResourceCard
            key={resource.path}
            turnId={turnId}
            conversationId={conversationId}
            cwd={cwd}
            hostId={hostId}
            inputMessageId={inputMessageId}
            messageId={messageId}
            onOpen={() => {
              onFileOpen?.(resource.path);
            }}
            path={resource.path}
          />
        );
      case "google-drive":
        return (
          <GoogleDriveEndResourceCard
            key={resource.url}
            conversationId={conversationId}
            hostId={hostId}
            analyticsContext={{
              threadId: conversationId,
              turnId: turnId ?? null,
              inputMessageId: inputMessageId ?? null,
              messageId: messageId ?? null,
            }}
            resource={resource}
          />
        );
      case "appgen-app":
        return (
          <AppgenSiteEndResourceCard
            key={resource.url}
            conversationId={conversationId}
            cwd={cwd}
            hostId={hostId}
            resource={resource}
          />
        );
      case "website":
        return (
          <WebsiteEndResourceCard
            key={resource.target}
            cwd={cwd}
            hostId={hostId}
            resource={resource}
          />
        );
    }
  };
  return (
    <ThreadResourceCard className="divide-y divide-token-border">
      {visibleResources.map(renderResource)}
      {hiddenCount > 0 ? (
        <ThreadResourceCardExpandButton
          isExpanded={false}
          onClick={() => setIsExpanded(true)}
        >
          <FormattedMessage
            id="localConversation.endResource.showMore"
            defaultMessage="Show {count, number} more"
            description="Button label that expands hidden conversation resource rows"
            values={{ count: hiddenCount }}
          />
        </ThreadResourceCardExpandButton>
      ) : null}
    </ThreadResourceCard>
  );
}

export function isNativeSystemDefaultTarget(event: {
  target: string;
  appPath?: string | null;
  kind?: string;
}): boolean {
  return (
    event.target === "systemDefault" &&
    event.appPath != null &&
    event.kind === "native"
  );
}
