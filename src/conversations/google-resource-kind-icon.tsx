// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Maps a Google Workspace resource kind to its monochrome file-type icon for
// end-of-turn conversation resource cards (localConversation domain).
import type { ReactElement, SVGProps } from "react";
import {
  DocumentFileTypeIcon,
  SpreadsheetFileTypeIcon,
  PresentationFileTypeIcon,
  DriveFileTypeIcon,
} from "../boundaries/onboarding-commons-externals.facade";

export type GoogleResourceKind =
  | "document"
  | "spreadsheet"
  | "presentation"
  | "drive";

export interface GoogleResourceKindIconProps {
  className?: string;
  resourceKind: GoogleResourceKind;
}

export function initGoogleResourceKindIconChunk(): void {}

export function GoogleResourceKindIcon({
  className,
  resourceKind,
}: GoogleResourceKindIconProps): ReactElement | null {
  switch (resourceKind) {
    case "document":
      return <DocumentFileTypeIcon className={className} />;
    case "spreadsheet":
      return <SpreadsheetFileTypeIcon className={className} />;
    case "presentation":
      return <PresentationFileTypeIcon className={className} />;
    case "drive":
      return <DriveFileTypeIcon className={className} />;
    default:
      return null;
  }
}

export type GoogleResourceKindIconSvgProps = SVGProps<SVGSVGElement>;
