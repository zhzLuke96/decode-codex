// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// File-opening button and context-menu wrapper for workspace resources.
import * as React from "react";

import {
  buildWorkspaceFileContextMenuItems,
  copyWorkspaceFileContents,
  fetchWorkspaceFileContextMenuItems,
  type WorkspaceFileContextMenuRequest,
  type WorkspaceFileContextMenuScope,
} from "../../appgen/publication-terms/file-reference-actions";
import { appScopeO as useAppStore } from "../../boundaries/app-scope";
import { OpenInIcon } from "../../icons/facade-icon-aliases";
import {
  openFileAtLine,
  useHostRequest,
} from "../../runtime/file-open-runtime";
import { Button } from "../../ui/button";
import {
  ContextMenu,
  type ContextMenuItemDefinition,
} from "../../ui/context-menu";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import type {
  OpenFileButtonProps,
  OpenFileContextMenuWrapperProps,
} from "./types";

type AppStoreWithQueryClient = WorkspaceFileContextMenuScope & {
  query?: WorkspaceFileContextMenuScope["queryClient"];
};

type CopyFileContentsToClipboard = typeof copyWorkspaceFileContents;

export const copyFileContentsToClipboard: CopyFileContentsToClipboard =
  copyWorkspaceFileContents;

export function OpenFileButton({
  cwd,
  hostId,
  onBeforeOpen,
  path,
  showLabel = false,
}: OpenFileButtonProps) {
  const intl = useIntl();
  const openFileRequest = useHostRequest<Record<string, unknown>>("open-file");
  const openLabel = intl.formatMessage({
    id: "workspace.file.open",
    defaultMessage: "Open file",
    description: "Button label to open a workspace file in the editor",
  });

  const handleClick = React.useCallback(async () => {
    await onBeforeOpen?.();
    await openFileAtLine({
      cwd,
      hostId,
      openFile: openFileRequest.mutate,
      path,
    });
  }, [cwd, hostId, onBeforeOpen, openFileRequest.mutate, path]);

  return (
    <Button
      aria-label={openLabel}
      color="secondary"
      loading={openFileRequest.isPending}
      onClick={handleClick}
      size="toolbar"
    >
      <OpenInIcon className="icon-xs" />
      {showLabel ? (
        <FormattedMessage
          id="workspace.file.open.short"
          defaultMessage="Open"
          description="Short button label to open a workspace file"
        />
      ) : null}
    </Button>
  );
}

export function OpenFileContextMenuWrapper({
  children,
  cwd,
  hostId,
  openInSidePanel = false,
  path,
}: OpenFileContextMenuWrapperProps) {
  const appStore = useAppStore() as AppStoreWithQueryClient;
  const menuScope = React.useMemo<WorkspaceFileContextMenuScope>(
    () => ({
      get: appStore.get?.bind(appStore),
      queryClient: appStore.queryClient ?? appStore.query,
    }),
    [appStore],
  );
  const request = React.useMemo<WorkspaceFileContextMenuRequest>(
    () => ({
      cwd,
      hostId,
      openInSidePanel,
      path,
    }),
    [cwd, hostId, openInSidePanel, path],
  );
  const getItems = React.useCallback(() => {
    const fetchedItems = fetchWorkspaceFileContextMenuItems(
      menuScope,
      request,
    ) as Promise<ContextMenuItemDefinition[]> | undefined;
    return (
      fetchedItems ??
      (buildWorkspaceFileContextMenuItems(
        menuScope,
        request,
      ) as ContextMenuItemDefinition[])
    );
  }, [menuScope, request]);

  return (
    <ContextMenu getItems={getItems}>
      {React.Children.only(children)}
    </ContextMenu>
  );
}
