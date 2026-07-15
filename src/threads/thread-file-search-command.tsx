// Restored from ref/webview/assets/app-initial~app-main~automations-page-BfqUlSo6.js
// Registers the thread command-menu file search surface.
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import {
  useRegisterThreadCommandMenuEntry,
  type ThreadCommandMenuEntryDefinition,
} from "./thread-command-menu-entries";
import { CommandMenuItem } from "../ui/command-menu-item";
import { FIRST_FILE_COMMAND_MENU_ITEM_VALUE } from "./thread-command-menu-state";
import { useWorkspaceFileSearch } from "../utils/use-workspace-file-search";
import { useCommandRegistration } from "../runtime/command-registration-runtime";
import { vscodeApiF } from "../boundaries/vscode-api";
import { DropdownSearchIcon as SearchIcon } from "../ui/dropdown";

export type ThreadFileSearchCommandProps = {
  hostId?: string | null;
  openFile?: (path: string) => void;
  workspaceRoot?: string | null;
};

type ThreadFileSearchMenuProps = Required<
  Pick<ThreadFileSearchCommandProps, "hostId" | "openFile" | "workspaceRoot">
> & {
  closeMenu: () => void;
  query?: string;
};

export function useRegisterThreadFileSearchCommand({
  hostId,
  openFile,
  workspaceRoot,
}: ThreadFileSearchCommandProps = {}): void {
  const enabled = hostId != null && workspaceRoot != null;
  const openFileSearch = React.useCallback(() => {
    vscodeApiF.dispatchHostMessage({
      type: "command-menu",
      query: "",
    });
  }, []);

  useCommandRegistration("file-search-command-menu", openFileSearch, {
    enabled,
  });

  useRegisterThreadCommandMenuEntry({
    dependencies: [enabled, hostId, workspaceRoot, openFile],
    enabled,
    groupKey: "suggested",
    id: "thread-file-search",
    order: -1000,
    render: (closeMenu: () => void, query?: string) => {
      if (!enabled || hostId == null || workspaceRoot == null) return null;
      return (
        <ThreadFileSearchMenu
          closeMenu={closeMenu}
          hostId={hostId}
          openFile={openFile ?? defaultOpenFile}
          query={query}
          workspaceRoot={workspaceRoot}
        />
      );
    },
  } satisfies ThreadCommandMenuEntryDefinition);
}

export function ThreadFileSearchCommandMenuRegistration(
  props: ThreadFileSearchCommandProps = {},
): null {
  useRegisterThreadFileSearchCommand(props);
  return null;
}

function ThreadFileSearchMenu({
  closeMenu,
  hostId,
  openFile,
  query = "",
  workspaceRoot,
}: ThreadFileSearchMenuProps) {
  const intl = useIntl();
  const { files, isLoading } = useWorkspaceFileSearch({
    hostId,
    query,
    roots: [workspaceRoot],
  });

  if (query.trim().length === 0) {
    return (
      <CommandMenuItem
        keywords={["workspace", "project", "file"]}
        leftAccessory={<SearchIcon className="icon-xs shrink-0" />}
        onSelect={() => {}}
        title={intl.formatMessage({
          id: "thread.fileCommandMenu.searchFiles",
          defaultMessage: "Search files",
          description: "Command menu item that opens workspace file search",
        })}
        value="search files workspace project cmd+p"
      />
    );
  }

  if (isLoading && files == null) {
    return (
      <CommandMenuItem
        disabled
        title={intl.formatMessage({
          id: "codex.commandMenu.loadingChats",
          defaultMessage: "Loading chats...",
          description:
            "Fallback loading text reused while command menu search results load.",
        })}
        value={FIRST_FILE_COMMAND_MENU_ITEM_VALUE}
      />
    );
  }

  if (files == null || files.length === 0) return null;

  return (
    <div className="flex flex-col gap-1">
      <span className="block px-2 pt-2 text-sm text-token-description-foreground">
        <FormattedMessage
          id="thread.fileCommandMenu.filesGroup"
          defaultMessage="Files"
          description="Group label for workspace file search results"
        />
      </span>
      {files.map((file, index) => (
        <CommandMenuItem
          key={file.fsPath}
          description={file.relativePathWithoutFileName}
          onSelect={() => {
            openFile(file.fsPath);
            closeMenu();
          }}
          title={file.label}
          value={
            index === 0
              ? FIRST_FILE_COMMAND_MENU_ITEM_VALUE
              : [file.label, file.relativePathWithoutFileName].join(" ")
          }
        />
      ))}
    </div>
  );
}

function defaultOpenFile(path: string): void {
  vscodeApiF.dispatchMessage("open-file", {
    path,
    openInSidePanel: true,
  });
}

export function initThreadFileSearchCommandChunk(): void {}
