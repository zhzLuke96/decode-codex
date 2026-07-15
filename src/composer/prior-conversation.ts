// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Flatten a thread's turns into the prior-conversation transcript (plus latest diff)
// sent as referenced-chat context when composing a new message.
import { parseTurnItems } from "../boundaries/onboarding-commons-externals.facade";

export interface PriorConversationMessage {
  role: "user" | "assistant";
  content: { content_type: "text"; text: string }[];
}

export interface PriorConversationDiff {
  type: "output_diff";
  diff: string;
}

export interface PriorConversation {
  conversation: PriorConversationMessage[];
  diff: PriorConversationDiff | null;
}

export function buildPriorConversation(
  turns: Iterable<unknown>,
  parseOptions: unknown[],
): PriorConversation {
  const conversation: PriorConversationMessage[] = [];
  let latestDiff: string | null = null;

  for (const turn of turns) {
    const { items } = parseTurnItems(turn, parseOptions);
    for (const item of items) {
      if (item.type === "user-message") {
        conversation.push({
          role: "user",
          content: [{ content_type: "text", text: item.message }],
        });
      } else if (item.type === "assistant-message" && item.completed) {
        conversation.push({
          role: "assistant",
          content: [{ content_type: "text", text: item.content }],
        });
      } else if (item.type === "turn-diff") {
        latestDiff = item.unifiedDiff;
      }
    }
  }

  return {
    conversation,
    diff: latestDiff == null ? null : { type: "output_diff", diff: latestDiff },
  };
}
