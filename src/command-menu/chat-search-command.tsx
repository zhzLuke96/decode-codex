// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Command-menu chat-search entries: trigger the native chat-search surface,
// render the "Search chats" command row and the "No matches" empty state.
import type { ReactNode } from "react";
import { FormattedMessage } from "../vendor/react-intl";
import {
  CommandMenu,
  CommandMenuItem,
  KeyboardShortcutHint,
  MagnifyingGlassIcon,
  hostMessageBridge,
  useCommandShortcut,
} from "../boundaries/onboarding-commons-externals.facade";

export function dispatchChatSearchCommandMenu(): void {
  hostMessageBridge.dispatchHostMessage({ type: "chat-search-command-menu" });
}

function SearchChatsShortcutHint() {
  const shortcutLabel = useCommandShortcut("searchChats");
  return shortcutLabel ? (
    <KeyboardShortcutHint keysLabel={shortcutLabel} />
  ) : null;
}

export interface SearchChatsCommandItemProps {
  onSelect: () => void;
  title: ReactNode;
}

export function SearchChatsCommandItem({
  onSelect,
  title,
}: SearchChatsCommandItemProps) {
  return (
    <CommandMenuItem
      key="search-chats"
      value="search chats conversations history"
      title={title}
      LeftIcon={MagnifyingGlassIcon}
      rightAccessory={<SearchChatsShortcutHint />}
      onSelect={onSelect}
    />
  );
}

export function NoChatMatchesItem() {
  return (
    <CommandMenu.Item
      disabled
      forceMount
      onSelect={() => {}}
      value="no chat matches"
    >
      <div className="flex h-12 w-full items-center justify-center text-token-text-secondary">
        <FormattedMessage
          id="codex.commandMenu.noResults"
          defaultMessage="No matches"
          description="Shown when no commands or workspaces match in the command menu"
        />
      </div>
    </CommandMenu.Item>
  );
}
