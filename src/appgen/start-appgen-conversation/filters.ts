// Restored from ref/webview/assets/start-appgen-conversation-DsuZNIH_.js
// Search and filter helpers for appgen Library content.

import { summarizeAppgenAccessPolicy } from "../../utils/appgen-access";
import type {
  AppgenLibraryCloudFile,
  AppgenLibraryContentType,
  AppgenLibraryFileFilter,
  AppgenLibraryFileType,
  AppgenLibrarySearchItem,
  AppgenProject,
  CloudLibraryFileFilterOptions,
  FilterAppgenLibraryItemsOptions,
} from "./types";

export function filterAppgenLibraryItems({
  accessFilter,
  cloudFiles,
  cloudUploadingFiles,
  contentType,
  fileFilter,
  files,
  images,
  projects,
  searchQuery,
}: FilterAppgenLibraryItemsOptions) {
  const normalizedSearchQuery = searchQuery.trim().toLowerCase();
  const items: AppgenLibrarySearchItem[] = [];

  if (
    (contentType === "sites" || contentType === "all") &&
    (contentType === "sites" || fileFilter === "all") &&
    projects != null
  ) {
    for (const project of projects) {
      if (
        isAppgenProjectSearchMatch(project, normalizedSearchQuery) &&
        (contentType !== "sites" ||
          projectMatchesAccessFilter(project, accessFilter))
      ) {
        items.push({
          id: project.id,
          kind: "site" as const,
          modifiedAt: project.updated_at,
          project,
        });
      }
    }
  }

  if ((contentType === "files" || contentType === "all") && files != null) {
    const seenPaths = new Set<string>();

    for (const file of files) {
      if (seenPaths.has(file.path)) continue;
      seenPaths.add(file.path);

      const fileType = getLibraryFileTypeFromPath(file.path);
      if (
        fileType != null &&
        (fileFilter === "all" || fileType === fileFilter) &&
        fileMatchesPathSearch(file, normalizedSearchQuery)
      ) {
        items.push({
          file,
          fileType,
          id: file.path,
          kind: "file" as const,
          modifiedAt: file.modifiedAt,
        });
      }
    }
  }

  if (
    (contentType === "images" ||
      (contentType === "all" && fileFilter === "all")) &&
    images != null
  ) {
    for (const image of images) {
      if (fileMatchesPathSearch(image, normalizedSearchQuery)) {
        items.push({
          id: image.path,
          image,
          kind: "image" as const,
          modifiedAt: image.modifiedAt,
        });
      }
    }
  }

  if (cloudUploadingFiles != null) {
    for (const file of cloudUploadingFiles) {
      const fileType = getCloudLibraryFileType(file);
      if (
        shouldIncludeCloudLibraryFile({
          contentType,
          file,
          fileFilter,
          searchQuery,
        })
      ) {
        items.push({
          file,
          fileType,
          id: `cloud-upload:${file.id}`,
          kind: "cloud-upload" as const,
          modifiedAt: file.modifiedAt,
        });
      }
    }
  }

  if (cloudFiles != null) {
    for (const cloudFile of cloudFiles) {
      const fileType = getCloudLibraryFileType(cloudFile);
      if (
        cloudFileMatchesContentFilter(
          cloudFile,
          fileType,
          contentType,
          fileFilter,
        )
      ) {
        items.push({
          cloudFile,
          fileType,
          id: `cloud:${cloudFile.id}`,
          kind: "cloud-file" as const,
          modifiedAt: cloudFile.modifiedAt,
        });
      }
    }
  }

  return items.sort(
    (left, right) =>
      Date.parse(right.modifiedAt) - Date.parse(left.modifiedAt) ||
      left.id.localeCompare(right.id),
  );
}

export function shouldIncludeCloudLibraryFile({
  contentType,
  file,
  fileFilter,
  searchQuery,
}: CloudLibraryFileFilterOptions) {
  return (
    cloudFileMatchesNameSearch(file, searchQuery.trim().toLowerCase()) &&
    cloudFileMatchesContentFilter(
      file,
      getCloudLibraryFileType(file),
      contentType,
      fileFilter,
    )
  );
}

export function isAppgenProjectSearchMatch(
  project: AppgenProject,
  normalizedSearchQuery: string,
) {
  return (
    project.title.toLowerCase().includes(normalizedSearchQuery) ||
    project.slug.toLowerCase().includes(normalizedSearchQuery) ||
    project.description?.toLowerCase().includes(normalizedSearchQuery) === true
  );
}

function getLibraryFileTypeFromPath(
  path: string,
): AppgenLibraryFileType | null {
  switch (getPathExtension(path)) {
    case "docx":
      return "document";
    case "pdf":
      return "pdf";
    case "pptx":
      return "presentation";
    case "csv":
    case "tsv":
    case "xlsx":
      return "spreadsheet";
    case "ipynb":
    case "tex":
    case null:
      return null;
  }
}

function getCloudLibraryFileType(
  file: AppgenLibraryCloudFile,
): AppgenLibraryFileType | undefined {
  const fileType = getLibraryFileTypeFromPath(file.name);
  if (fileType != null) return fileType;

  switch (file.category) {
    case "audio":
      return "audio";
    case "image":
      return "image";
    case "other":
      return "other";
    case "pdf":
      return "pdf";
    case "text":
      return "text";
    case "video":
      return "video";
  }
}

function cloudFileMatchesContentFilter(
  file: AppgenLibraryCloudFile,
  fileType: AppgenLibraryFileType | undefined,
  contentType: AppgenLibraryContentType,
  fileFilter: AppgenLibraryFileFilter,
) {
  return contentType === "sites"
    ? false
    : contentType === "images"
      ? file.category === "image"
      : fileFilter === "all"
        ? contentType === "files"
          ? file.category !== "image"
          : true
        : fileType === fileFilter;
}

function fileMatchesPathSearch(
  file: { name: string; relativePath: string },
  normalizedSearchQuery: string,
) {
  return (
    file.name.toLowerCase().includes(normalizedSearchQuery) ||
    file.relativePath.toLowerCase().includes(normalizedSearchQuery)
  );
}

function cloudFileMatchesNameSearch(
  file: AppgenLibraryCloudFile,
  normalizedSearchQuery: string,
) {
  return (
    normalizedSearchQuery.length === 0 ||
    file.name.toLowerCase().includes(normalizedSearchQuery)
  );
}

function projectMatchesAccessFilter(
  project: AppgenProject,
  accessFilter: "all" | "private" | "shared",
) {
  if (accessFilter === "all") return true;

  const { accessMode, groupCount, userCount } = summarizeAppgenAccessPolicy(
    project.access_policy,
  );
  const isPrivate =
    (accessMode === "admins_only" || accessMode === "custom") &&
    groupCount === 0 &&
    userCount === 0;

  return accessFilter === "private" ? isPrivate : !isPrivate;
}

function getPathExtension(path: string) {
  const pathWithoutQuery = path.split(/[?#]/, 1)[0] ?? "";
  const filename = pathWithoutQuery.split("/").pop() ?? "";
  const extensionStart = filename.lastIndexOf(".");
  if (extensionStart === -1 || extensionStart === filename.length - 1) {
    return null;
  }
  return filename.slice(extensionStart + 1).toLowerCase();
}

export function initAppgenLibraryFilteringChunk(): void {}
