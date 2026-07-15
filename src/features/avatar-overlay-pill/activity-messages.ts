// Restored from ref/webview/assets/avatar-overlay-pill-dismiss-button-Br8FWkZZ.js
// Message catalog for avatar overlay pill activity subtitles.
import { defineMessages } from "../../vendor/react-intl";

export const activityMessages = defineMessages({
  calledTool: {
    id: "avatarOverlay.session.calledTool",
    defaultMessage: "Called tool",
    description:
      "Avatar overlay activity subtitle for a completed generic tool call",
  },
  calledToolName: {
    id: "avatarOverlay.session.calledToolName",
    defaultMessage: "Called {toolName}",
    description:
      "Avatar overlay activity subtitle for a completed named tool call",
  },
  callingTool: {
    id: "avatarOverlay.session.callingTool",
    defaultMessage: "Calling tool",
    description:
      "Avatar overlay activity subtitle for a running generic tool call",
  },
  callingToolName: {
    id: "avatarOverlay.session.callingToolName",
    defaultMessage: "Calling {toolName}",
    description:
      "Avatar overlay activity subtitle for a running named tool call",
  },
  editedFiles: {
    id: "avatarOverlay.session.editedFiles",
    defaultMessage: "Edited {fileCount, plural, one {# file} other {# files}}",
    description: "Avatar overlay activity subtitle for completed file edits",
  },
  editingFiles: {
    id: "avatarOverlay.session.editingFiles",
    defaultMessage: "Editing {fileCount, plural, one {# file} other {# files}}",
    description: "Avatar overlay activity subtitle for running file edits",
  },
  listedFiles: {
    id: "avatarOverlay.session.listedFiles",
    defaultMessage: "Listed files",
    description:
      "Avatar overlay activity subtitle for a completed file listing command",
  },
  listingFiles: {
    id: "avatarOverlay.session.listingFiles",
    defaultMessage: "Listing files",
    description:
      "Avatar overlay activity subtitle for a running file listing command",
  },
  newThread: {
    id: "avatarOverlay.session.newThread",
    defaultMessage: "New chat",
    description:
      "Avatar overlay fallback title for a thread without a generated title",
  },
  ranCommand: {
    id: "avatarOverlay.session.ranCommand",
    defaultMessage: "Ran command",
    description:
      "Avatar overlay activity subtitle for a completed shell command",
  },
  readFile: {
    id: "avatarOverlay.session.readFile",
    defaultMessage: "Read {fileName}",
    description: "Avatar overlay activity subtitle for a completed file read",
  },
  readingFile: {
    id: "avatarOverlay.session.readingFile",
    defaultMessage: "Reading {fileName}",
    description: "Avatar overlay activity subtitle for a running file read",
  },
  runningCommand: {
    id: "avatarOverlay.session.runningCommand",
    defaultMessage: "Running command",
    description: "Avatar overlay activity subtitle for a running shell command",
  },
  searchedFiles: {
    id: "avatarOverlay.session.searchedFiles",
    defaultMessage: "Searched files",
    description:
      "Avatar overlay activity subtitle for a completed file search command without a query",
  },
  searchedQuery: {
    id: "avatarOverlay.session.searchedQuery",
    defaultMessage: 'Searched "{query}"',
    description:
      "Avatar overlay activity subtitle for a completed search with a query",
  },
  searchedWeb: {
    id: "avatarOverlay.session.searchedWeb",
    defaultMessage: "Searched web",
    description: "Avatar overlay activity subtitle for a completed web search",
  },
  searchingFiles: {
    id: "avatarOverlay.session.searchingFiles",
    defaultMessage: "Searching files",
    description:
      "Avatar overlay activity subtitle for a running file search command without a query",
  },
  searchingQuery: {
    id: "avatarOverlay.session.searchingQuery",
    defaultMessage: 'Searching "{query}"',
    description:
      "Avatar overlay activity subtitle for a running search with a query",
  },
});
