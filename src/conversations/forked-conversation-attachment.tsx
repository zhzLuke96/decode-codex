// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Renders the link/divider shown when a thread was forked from another conversation:
// a "Parent chat" attachment chip, or a "Forked from conversation" divider.
import { useIntl, FormattedMessage } from "../vendor/react-intl";
import { useNavigate } from "../vendor/react-router";
import {
  isHotkeyWindow,
  MessageAttachmentChip,
  ParentChatIcon,
  ForkIcon,
} from "../boundaries/onboarding-commons-externals.facade";

export interface ForkedConversationAttachmentProps {
  sourceConversationId: string;
  kind?: "thread-fork" | "parent-context";
}

export function ForkedConversationAttachment({
  sourceConversationId,
  kind = "thread-fork",
}: ForkedConversationAttachmentProps) {
  const intl = useIntl();
  const navigate = useNavigate();
  const targetPath = isHotkeyWindow()
    ? `/hotkey-window/thread/${sourceConversationId}`
    : `/local/${sourceConversationId}`;

  if (kind === "parent-context") {
    const filename = intl.formatMessage({
      id: "localConversation.parentThread",
      defaultMessage: "Parent chat",
      description:
        "Attachment label shown above the first message in a forked subagent thread. Clicking it navigates to the parent thread.",
    });
    return (
      <MessageAttachmentChip
        filename={filename}
        Icon={ParentChatIcon}
        onClick={() => {
          navigate(targetPath);
        }}
      />
    );
  }

  return (
    <div className="text-size-chat my-2 flex items-center gap-2 text-token-text-secondary">
      <div className="flex-1 border-t border-current/20" />
      <div className="flex max-w-[70%] min-w-0 items-center gap-1 whitespace-nowrap">
        <ForkIcon className="icon-2xs shrink-0" />
        <button
          type="button"
          className="max-w-64 min-w-0 truncate text-left align-bottom text-token-link hover:underline"
          onClick={() => {
            navigate(targetPath);
          }}
        >
          <FormattedMessage
            id="localConversation.forkedFromConversation"
            defaultMessage="Forked from conversation"
            description="Divider shown when the conversation was forked from another thread."
          />
        </button>
      </div>
      <div className="flex-1 border-t border-current/20" />
    </div>
  );
}
