// Restored from ref/webview/assets/keyboard-shortcuts-search-input-C1dmntOi.js
// keyboard-shortcuts-search-input-C1dmntOi chunk restored from the Codex webview bundle.
import { appIdentity } from "../../utils/app-identity";
import { commandHasDescription } from "../../utils/electron-menu-shortcuts";
import {
  commandDescriptionMessages,
  commandMenuTitleMessages,
  commandTitleMessages,
} from "./messages";
import type {
  IntlFormatter,
  IntlMessageDescriptor,
  KeyboardShortcutCommand,
  KeyboardShortcutCommandTextOverride,
} from "./types";
function messageFrom(
  messages: Record<string, IntlMessageDescriptor>,
  messageId: string | undefined,
): IntlMessageDescriptor {
  if (messageId == null || messages[messageId] == null) {
    return {
      id: messageId ?? "codex.command.unknown",
      defaultMessage: messageId ?? "",
    };
  }
  return messages[messageId];
}
function getKeyboardShortcutCommandTitle(
  command: KeyboardShortcutCommand,
  intl: IntlFormatter,
): string {
  if (command.titleIntlId != null) {
    return intl.formatMessage(
      messageFrom(commandTitleMessages, command.titleIntlId),
    );
  }
  return intl.formatMessage(
    messageFrom(commandMenuTitleMessages, command.electron?.menuTitleIntlId),
  );
}
export function getKeyboardShortcutCommandCopy(
  command: KeyboardShortcutCommand,
  intl: IntlFormatter,
  override?: KeyboardShortcutCommandTextOverride,
): {
  title: string;
  description: string;
} {
  return {
    title: override?.title ?? getKeyboardShortcutCommandTitle(command, intl),
    description:
      override?.description ??
      (commandHasDescription(command)
        ? intl.formatMessage(
            messageFrom(commandDescriptionMessages, command.descriptionIntlId),
            {
              appName: appIdentity,
            },
          )
        : ""),
  };
}

export function initKeyboardShortcutCommandCopyChunk(): void {}
