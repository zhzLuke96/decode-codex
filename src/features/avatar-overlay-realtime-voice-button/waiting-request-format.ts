// Restored from ref/webview/assets/avatar-overlay-realtime-voice-button-BtRztXew.js
// avatar-overlay-realtime-voice-button-BtRztXew chunk restored from the Codex webview bundle.
import type { CompactWaitingRequest, IntlShapeLike } from "./types";
import { waitingRequestMessages } from "./waiting-request-messages";
export function getWaitingRequestSearchText(
  request: CompactWaitingRequest,
  intl: IntlShapeLike,
): string {
  switch (request.kind) {
    case "question":
      return [request.prompt, ...request.options.map((option) => option.label)]
        .filter(Boolean)
        .join(" ");
    case "plan":
      return request.summary;
    case "patch":
      return [
        intl.formatMessage(waitingRequestMessages.fileCount, {
          count: request.fileCount,
        }),
        request.additions > 0 ? `+${request.additions}` : null,
        request.deletions > 0 ? `-${request.deletions}` : null,
        request.summary,
      ]
        .filter(Boolean)
        .join(". ");
    case "exec":
      return request.summary;
    case "network":
    case "permission":
      return request.target;
    case "tool":
      return [request.target, request.summary].filter(Boolean).join(". ");
  }
}
export function formatWaitingRequestAccessibleLabel(
  searchText: string,
  request: CompactWaitingRequest,
): string {
  return `${request.title} · ${searchText}`;
}
