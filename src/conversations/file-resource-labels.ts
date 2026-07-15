// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// File labels used by local file end-resource cards.

import posixPath from "path-browserify";
import { useIntl } from "../vendor/react-intl";
import { normalizePath } from "../boundaries/onboarding-commons-externals.facade";

export function formatFileTypeLabel(
  extension: string | null,
  intl: ReturnType<typeof useIntl>,
): string | null {
  if (extension == null) {
    return null;
  }
  const upperExtension = extension.toUpperCase();
  if (
    extension === "pdf" ||
    extension === "doc" ||
    extension === "docx" ||
    extension === "md" ||
    extension === "mdx"
  ) {
    return intl.formatMessage(
      {
        id: "localConversation.endResource.documentFileType",
        defaultMessage: "Document · {extension}",
        description: "File type label for a document resource card",
      },
      { extension: upperExtension },
    );
  }
  if (
    extension === "csv" ||
    extension === "tsv" ||
    extension === "xls" ||
    extension === "xlsm" ||
    extension === "xlsx"
  ) {
    return intl.formatMessage(
      {
        id: "localConversation.endResource.spreadsheetFileType",
        defaultMessage: "Spreadsheet · {extension}",
        description: "File type label for a spreadsheet resource card",
      },
      { extension: upperExtension },
    );
  }
  if (extension === "ppt" || extension === "pptx") {
    return intl.formatMessage(
      {
        id: "localConversation.endResource.presentationFileType",
        defaultMessage: "Slides · {extension}",
        description: "File type label for a presentation resource card",
      },
      { extension: upperExtension },
    );
  }
  if (
    extension === "avif" ||
    extension === "gif" ||
    extension === "jpeg" ||
    extension === "jpg" ||
    extension === "png" ||
    extension === "webp"
  ) {
    return intl.formatMessage(
      {
        id: "localConversation.endResource.imageFileType",
        defaultMessage: "Image · {extension}",
        description: "File type label for an image resource card",
      },
      { extension: upperExtension },
    );
  }
  return null;
}

export function formatParentDirectoryLabel(filePath: string): string {
  const directory = posixPath.posix.dirname(normalizePath(filePath));
  return directory === "." ? "/" : `${directory}/`;
}
