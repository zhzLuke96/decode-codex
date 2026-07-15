// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Empty-state shown when a workspace "file source" tab cannot preview a file
// because its type is unsupported (archives, media, office documents, binaries).
import { FormattedMessage } from "../vendor/react-intl";

export type UnsupportedFileKind =
  | "archive"
  | "audio"
  | "binary"
  | "excel-spreadsheet"
  | "keynote-deck"
  | "numbers-spreadsheet"
  | "opendocument-presentation"
  | "opendocument-spreadsheet"
  | "opendocument-text"
  | "pages-document"
  | "powerpoint-deck"
  | "rich-text-document"
  | "video"
  | "word-document";

export interface UnsupportedFileTypeViewProps {
  type: UnsupportedFileKind;
}

export function UnsupportedFileTypeView({
  type,
}: UnsupportedFileTypeViewProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-1 px-4 text-center text-sm text-token-description-foreground">
      <UnsupportedFileTypeMessage type={type} />
      <span className="text-xs">
        <FormattedMessage
          id="review.fileSource.unsupportedDetail"
          defaultMessage="Open this file outside Codex to view it"
          description="Detail shown when a workspace file tab cannot preview an unsupported file type"
        />
      </span>
    </div>
  );
}

function UnsupportedFileTypeMessage({ type }: UnsupportedFileTypeViewProps) {
  switch (type) {
    case "archive":
      return (
        <FormattedMessage
          id="review.fileSource.unsupported.archive"
          defaultMessage="Archive previews aren't supported yet"
          description="Message shown when a workspace file tab cannot preview an archive file"
        />
      );
    case "audio":
      return (
        <FormattedMessage
          id="review.fileSource.unsupported.audio"
          defaultMessage="Audio previews aren't supported yet"
          description="Message shown when a workspace file tab cannot preview an audio file"
        />
      );
    case "binary":
      return (
        <FormattedMessage
          id="review.fileSource.unsupported.binary"
          defaultMessage="Binary file previews aren't supported yet"
          description="Message shown when a workspace file tab cannot preview a binary file"
        />
      );
    case "excel-spreadsheet":
      return (
        <FormattedMessage
          id="review.fileSource.unsupported.excelSpreadsheet"
          defaultMessage="Excel spreadsheet previews aren't supported yet"
          description="Message shown when a workspace file tab cannot preview an Excel spreadsheet"
        />
      );
    case "keynote-deck":
      return (
        <FormattedMessage
          id="review.fileSource.unsupported.keynoteDeck"
          defaultMessage="Keynote deck previews aren't supported yet"
          description="Message shown when a workspace file tab cannot preview a Keynote deck"
        />
      );
    case "numbers-spreadsheet":
      return (
        <FormattedMessage
          id="review.fileSource.unsupported.numbersSpreadsheet"
          defaultMessage="Numbers spreadsheet previews aren't supported yet"
          description="Message shown when a workspace file tab cannot preview a Numbers spreadsheet"
        />
      );
    case "opendocument-presentation":
      return (
        <FormattedMessage
          id="review.fileSource.unsupported.opendocumentPresentation"
          defaultMessage="OpenDocument presentation previews aren't supported yet"
          description="Message shown when a workspace file tab cannot preview an OpenDocument presentation"
        />
      );
    case "opendocument-spreadsheet":
      return (
        <FormattedMessage
          id="review.fileSource.unsupported.opendocumentSpreadsheet"
          defaultMessage="OpenDocument spreadsheet previews aren't supported yet"
          description="Message shown when a workspace file tab cannot preview an OpenDocument spreadsheet"
        />
      );
    case "opendocument-text":
      return (
        <FormattedMessage
          id="review.fileSource.unsupported.opendocumentText"
          defaultMessage="OpenDocument text previews aren't supported yet"
          description="Message shown when a workspace file tab cannot preview an OpenDocument text file"
        />
      );
    case "pages-document":
      return (
        <FormattedMessage
          id="review.fileSource.unsupported.pagesDocument"
          defaultMessage="Pages document previews aren't supported yet"
          description="Message shown when a workspace file tab cannot preview a Pages document"
        />
      );
    case "powerpoint-deck":
      return (
        <FormattedMessage
          id="review.fileSource.unsupported.powerpointDeck"
          defaultMessage="PowerPoint deck previews aren't supported yet"
          description="Message shown when a workspace file tab cannot preview a PowerPoint deck"
        />
      );
    case "rich-text-document":
      return (
        <FormattedMessage
          id="review.fileSource.unsupported.richTextDocument"
          defaultMessage="Rich Text document previews aren't supported yet"
          description="Message shown when a workspace file tab cannot preview a Rich Text document"
        />
      );
    case "video":
      return (
        <FormattedMessage
          id="review.fileSource.unsupported.video"
          defaultMessage="Video previews aren't supported yet"
          description="Message shown when a workspace file tab cannot preview a video file"
        />
      );
    case "word-document":
      return (
        <FormattedMessage
          id="review.fileSource.unsupported.wordDocument"
          defaultMessage="Word document previews aren't supported yet"
          description="Message shown when a workspace file tab cannot preview a Word document"
        />
      );
  }
}
