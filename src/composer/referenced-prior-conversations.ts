// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Build prior-conversation context from the live composer turn state, and read
// the transcripts of other referenced chats over the host bridge.
import { buildPriorConversation } from "./prior-conversation";
import {
  sendHostRequest,
  getConversationTurns,
} from "../boundaries/onboarding-commons-externals.facade";

const MAX_THREAD_REFERENCES = 3;
const THREAD_REFERENCE_LIMIT_EXCEEDED = "thread_reference_limit_exceeded";
const THREAD_REFERENCE_READ_FAILED = "thread_reference_read_failed";

export function initReferencedPriorConversationsChunk(): void {}

interface TurnContentItem {
  content_type: string;
  text?: string;
}

interface TurnInputItem {
  type?: string;
  content?: TurnContentItem[];
}

interface CurrentTurnState {
  current_user_turn?: { input_items?: TurnInputItem[] } | null;
  current_assistant_turn?: { output_items?: TurnInputItem[] } | null;
  current_diff_task_turn?: { output_items?: { type: string }[] } | null;
}

export interface CurrentTurnConversation {
  conversation: {
    role: "user" | "assistant";
    content: TurnContentItem[];
  }[];
  diff: { type: string } | undefined;
}

function collectTextContent(
  items: TurnInputItem[] | undefined,
): TurnContentItem[] {
  return (items ?? [])
    .flatMap((item) => (item?.type === "message" ? (item.content ?? []) : []))
    .filter((item) => item.content_type === "text");
}

export function buildCurrentTurnConversation(
  state: CurrentTurnState,
): CurrentTurnConversation {
  const conversation: CurrentTurnConversation["conversation"] = [];

  const userContent = collectTextContent(state.current_user_turn?.input_items);
  if (userContent.length > 0) {
    conversation.push({ role: "user", content: userContent });
  }

  const assistantContent = collectTextContent(
    state.current_assistant_turn?.output_items,
  );
  if (assistantContent.length > 0) {
    conversation.push({ role: "assistant", content: assistantContent });
  }

  return {
    conversation,
    diff: state.current_diff_task_turn?.output_items?.find(
      (item) => item.type === "output_diff",
    ),
  };
}

export interface ReadReferencedConversationsArgs {
  excludedThreadId: string;
  hostId: string;
  threadIds: string[];
}

export interface ReferencedConversation {
  title: string;
  priorConversation: ReturnType<typeof buildPriorConversation>;
}

export async function readReferencedPriorConversations({
  excludedThreadId,
  hostId,
  threadIds,
}: ReadReferencedConversationsArgs): Promise<ReferencedConversation[]> {
  const uniqueIds = Array.from(new Set(threadIds)).filter(
    (threadId) => threadId !== excludedThreadId,
  );
  if (uniqueIds.length > MAX_THREAD_REFERENCES) {
    throw Error(THREAD_REFERENCE_LIMIT_EXCEEDED);
  }

  try {
    return await Promise.all(
      uniqueIds.map(async (threadId) => {
        const response = await sendHostRequest("send-cli-request-for-host", {
          hostId,
          method: "thread/read",
          params: { includeTurns: true, threadId },
        });
        const { thread } = response;
        return {
          title: thread.name?.trim() || thread.preview.trim() || thread.id,
          priorConversation: buildPriorConversation(
            getConversationTurns(response),
            [],
          ),
        };
      }),
    );
  } catch {
    throw Error(THREAD_REFERENCE_READ_FAILED);
  }
}
