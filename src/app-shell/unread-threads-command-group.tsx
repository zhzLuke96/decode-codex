// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Registers the "Unread chats" group in the command menu. A headless effect
// registers the group (enabled only when there are unread threads); the group is
// hidden while the user is searching, and each row navigates to the thread and
// marks it read (via the host for local threads, via a mutation for remote tasks).
import React from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { useNavigate } from "../conversations/local-conversation-route-runtime";
import { useScopedFamilyValue } from "../runtime/scope-signal-runtime";
import {
  appRootScope,
  CommandMenuList,
  CommandMenuListItem,
  ConversationUnreadAvatar,
  FIRST_COMMAND_ITEM_VALUE,
  formatRemoteTaskTitle,
  getLocalConversationTitle,
  getLocalConversationWorkspaceLabel,
  navigateToThreadRoute,
  sendHostRequest,
  threadByKeyAtomFamily,
  unreadThreadKeysAtom,
  useAtomValue,
  useCommandMenuStore,
  useMarkRemoteTaskReadMutation,
  useRegisterCommandMenuGroup,
  useScope,
  useThreadNavigationContext,
} from "../boundaries/onboarding-commons-externals.facade";

const UNREAD_THREADS_GROUP_ID = "unread-threads";
const UNREAD_THREADS_GROUP_ORDER = -2000;

interface CommandMenuGroupItem {
  id: string;
}

interface CommandMenuGroupRegistration {
  enabled: boolean;
  id: string;
  order: number;
  render: (close: () => void) => React.JSX.Element;
}

type UnreadThreadEntry =
  | {
      kind: "local";
      conversation: {
        id: string;
        cwd?: string | null;
        workspaceKind?: unknown;
      };
    }
  | {
      kind: "remote";
      task: {
        id: string;
        title?: string | null;
        task_status_display?: { environment_label?: string };
      };
    }
  | { kind: "pending-worktree" };

export function isUnreadThreadsItem(item: CommandMenuGroupItem): boolean {
  return item.id === UNREAD_THREADS_GROUP_ID;
}

function isCommandMenuSearchActive(state: { search: string }): boolean {
  return state.search.trim().length > 0;
}

interface UnreadThreadCommandItemProps {
  close: () => void;
  index: number;
  threadKey: string;
}

function UnreadThreadCommandItem({
  close,
  index,
  threadKey,
}: UnreadThreadCommandItemProps) {
  const scope = useScope(appRootScope);
  const intl = useIntl();
  const navigate = useNavigate();
  const threadNavigationContext = useThreadNavigationContext();
  const thread = useScopedFamilyValue<UnreadThreadEntry, string>(
    threadByKeyAtomFamily,
    threadKey,
  );
  const { mutate } = useMarkRemoteTaskReadMutation(
    thread?.kind === "remote" ? thread.task.id : "",
  );

  if (thread == null || thread.kind === "pending-worktree") return null;

  const title =
    (thread.kind === "local"
      ? getLocalConversationTitle(thread.conversation)
      : formatRemoteTaskTitle(thread.task.title ?? "")) ||
    intl.formatMessage({
      id: "codex.commandMenu.untitledThread",
      defaultMessage: "Untitled chat",
      description:
        "Fallback title for a thread without a title in the command menu",
    });
  const description =
    thread.kind === "local"
      ? getLocalConversationWorkspaceLabel({
          cwd: thread.conversation.cwd ?? "",
          workspaceKind: thread.conversation.workspaceKind,
        })
      : (thread.task.task_status_display?.environment_label ?? "");
  const value = index === 0 ? FIRST_COMMAND_ITEM_VALUE : threadKey;

  const onSelect = () => {
    if (thread.kind === "local") {
      sendHostRequest("mark-conversation-as-read", {
        conversationId: thread.conversation.id,
      });
    } else {
      mutate();
    }
    navigateToThreadRoute(scope, threadKey, threadNavigationContext, navigate);
    close();
  };

  const leftAccessory =
    thread.kind === "local" ? (
      <ConversationUnreadAvatar
        archived={false}
        conversationId={thread.conversation.id}
      />
    ) : (
      <span className="h-5 w-5 shrink-0" />
    );

  return (
    <CommandMenuListItem
      value={value}
      title={title}
      description={description}
      titleTooltipContent={title}
      descriptionTooltipContent={description}
      descriptionClassName="w-24 shrink-0 text-right"
      tooltipDelayDuration={2000}
      onSelect={onSelect}
      leftAccessory={leftAccessory}
    />
  );
}

interface UnreadThreadsGroupProps {
  close: () => void;
}

function UnreadThreadsGroup({ close }: UnreadThreadsGroupProps) {
  const isSearchActive = useCommandMenuStore(isCommandMenuSearchActive);
  const unreadThreadKeys = useAtomValue(unreadThreadKeysAtom);
  if (isSearchActive) return null;

  const heading = (
    <span className="block px-2 pt-2 text-sm text-token-description-foreground">
      <FormattedMessage
        id="codex.commandMenu.unreadThreadsGroup"
        defaultMessage="Unread chats"
        description="Group label for unread chats in the command menu"
      />
    </span>
  );

  return (
    <CommandMenuList.Group
      heading={heading}
      className="flex flex-col"
      style={{ gap: "var(--spacing)" }}
    >
      {unreadThreadKeys.map((threadKey: string, index: number) => (
        <UnreadThreadCommandItem
          key={threadKey}
          close={close}
          index={index}
          threadKey={threadKey}
        />
      ))}
    </CommandMenuList.Group>
  );
}

function renderUnreadThreadsGroup(close: () => void): React.JSX.Element {
  return <UnreadThreadsGroup close={close} />;
}

export function UnreadThreadsCommandGroupEffect(): null {
  const hasUnreadThreads = useAtomValue(unreadThreadKeysAtom).length > 0;
  const registration: CommandMenuGroupRegistration = {
    enabled: hasUnreadThreads,
    id: UNREAD_THREADS_GROUP_ID,
    order: UNREAD_THREADS_GROUP_ORDER,
    render: renderUnreadThreadsGroup,
  };
  useRegisterCommandMenuGroup(registration);
  return null;
}
