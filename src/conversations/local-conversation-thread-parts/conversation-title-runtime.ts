// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Conversation title formatting and id normalization helpers used by the local summary panel.
import {
  decodeNamedHtmlEntityReference,
  initNamedHtmlEntityDecoderRuntime,
} from "../../runtime/html-entity-runtime";
import { normalizeConversationId } from "../../boundaries/src-l0hb-mz-p";

export function initConversationTitleRuntime(): void {
  initNamedHtmlEntityDecoderRuntime();
}

export function formatConversationTitleText(title: string): string {
  return decodeNamedHtmlEntityReference(title) as string;
}

export function toConversationId(value: string): string {
  return normalizeConversationId(value);
}
