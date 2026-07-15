// Restored from ref/webview/assets/start-appgen-conversation-DsuZNIH_.js
// Shared types for the Sites and appgen Library surfaces.

import type {
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
  SVGProps,
} from "react";
import type { AppgenAccessPolicy } from "../../features/appgen-share-dialog/types";

export type AppgenLibraryViewMode = "grid" | "list";
export type AppgenLibraryAccessFilter = "all" | "private" | "shared";
export type AppgenLibraryContentType = "all" | "files" | "images" | "sites";
export type AppgenLibraryFileType =
  | "audio"
  | "document"
  | "image"
  | "other"
  | "pdf"
  | "presentation"
  | "spreadsheet"
  | "text"
  | "video";
export type AppgenLibraryFileFilter = "all" | AppgenLibraryFileType;
export type AppgenLibraryAssetType =
  | "document"
  | "image"
  | "pdf"
  | "presentation"
  | "spreadsheet";

export type AppgenProject = {
  access_policy?: AppgenAccessPolicy | null;
  current_live_url?: string | null;
  description?: string | null;
  id: string;
  screenshot_url?: string | null;
  slug: string;
  title: string;
  updated_at: string;
};

export type AppgenLibraryFile = {
  mimeType?: string | null;
  modifiedAt: string;
  name: string;
  path: string;
  relativePath: string;
  threadId?: string | null;
};

export type AppgenLibraryCloudFileCategory =
  | "audio"
  | "image"
  | "other"
  | "pdf"
  | "text"
  | "video";

export type AppgenLibraryCloudFile = {
  category: AppgenLibraryCloudFileCategory;
  id: string;
  mimeType?: string | null;
  modifiedAt: string;
  name: string;
  path?: string;
  relativePath?: string;
  threadId?: string | null;
};

export type AppgenLibrarySearchItem =
  | {
      id: string;
      kind: "site";
      modifiedAt: string;
      project: AppgenProject;
    }
  | {
      file: AppgenLibraryFile;
      fileType: AppgenLibraryFileType;
      id: string;
      kind: "file";
      modifiedAt: string;
    }
  | {
      id: string;
      image: AppgenLibraryFile;
      kind: "image";
      modifiedAt: string;
    }
  | {
      file: AppgenLibraryCloudFile;
      fileType: AppgenLibraryFileType | undefined;
      id: string;
      kind: "cloud-upload";
      modifiedAt: string;
    }
  | {
      cloudFile: AppgenLibraryCloudFile;
      fileType: AppgenLibraryFileType | undefined;
      id: string;
      kind: "cloud-file";
      modifiedAt: string;
    };

export type FilterAppgenLibraryItemsOptions = {
  accessFilter: AppgenLibraryAccessFilter;
  cloudFiles?: readonly AppgenLibraryCloudFile[] | null;
  cloudUploadingFiles?: readonly AppgenLibraryCloudFile[] | null;
  contentType: AppgenLibraryContentType;
  fileFilter: AppgenLibraryFileFilter;
  files?: readonly AppgenLibraryFile[] | null;
  images?: readonly AppgenLibraryFile[] | null;
  projects?: readonly AppgenProject[] | null;
  searchQuery: string;
};

export type CloudLibraryFileFilterOptions = {
  contentType: AppgenLibraryContentType;
  file: AppgenLibraryCloudFile;
  fileFilter: AppgenLibraryFileFilter;
  searchQuery: string;
};

export type AppgenLibraryItemShellProps = HTMLAttributes<HTMLDivElement> & {
  viewMode: AppgenLibraryViewMode;
};

export type AppgenLibraryThumbnailFrameProps =
  HTMLAttributes<HTMLDivElement> & {
    viewMode: AppgenLibraryViewMode;
  };

export type AppgenLibraryItemTextProps = HTMLAttributes<HTMLDivElement> & {
  viewMode: AppgenLibraryViewMode;
};

export type AppgenLibraryItemMetaProps = HTMLAttributes<HTMLDivElement> & {
  hideWhenCompact?: boolean;
};

export type AppgenLibraryItemFooterProps = {
  actions: ReactNode;
  children: ReactNode;
};

export type ContinueLibraryItemChatButtonProps = {
  disabled?: boolean;
  itemName: string;
  onContinue: MouseEventHandler<HTMLButtonElement>;
  viewMode: AppgenLibraryViewMode;
};

export type AppgenSiteActionsSurface = "library" | "sites";

export type AppgenSiteActionsProps = {
  onEdit: () => void;
  projectId: string;
  projectTitle: string;
  surface: AppgenSiteActionsSurface;
  viewMode: AppgenLibraryViewMode;
};

export type AppgenDefaultThumbnailIconProps = SVGProps<SVGSVGElement>;

export type AppScopeReader = {
  get<T>(signal: unknown): T;
};

export type NavigateToConversation = (
  path: string,
  options: {
    state: {
      prefillPrompt: string;
    };
  },
) => void;

export type StartAppgenConversation = (options: {
  activeProject: null;
  prefillPrompt: string | undefined;
  startInSidebar: boolean;
}) => void;

export type StartAppgenConversationAction =
  | {
      setSelectedMode?: (mode: "plan") => void;
      type: "create";
    }
  | {
      assetType: AppgenLibraryAssetType;
      type: "create-asset";
    }
  | {
      liveUrl?: string | null;
      projectId: string;
      projectTitle: string;
      type: "edit";
    };
