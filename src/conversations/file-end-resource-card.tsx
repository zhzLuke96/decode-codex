// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Local file end-of-turn resource card.

import { useState } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { ThreadResourceCardHeader } from "../ui/thread-resource-card";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { Dropdown, DropdownMenu } from "../ui/dropdown";
import { ChevronIcon } from "../icons/chevron-icon";
import {
  headerClassName,
  OVERLAY_BUTTON_CLASS_NAME,
} from "./end-resource-card-shared";
import {
  AppConnectDialog,
  GoogleWorkspaceExportMenuItems,
  OpenFileContextMenuWrapper,
  OpenInTargetsPreloader,
  analyticsClickSource,
  basename,
  filterOpenInTargets,
  getFileExtension,
  getFileIconComponent,
  getGoogleWorkspaceExportTarget,
  openFileResourceFromTurn,
  useAppStore,
  useConnectApp,
  useHostConfig,
  useHostRequest,
  useOpenInTargets,
  usePlatform,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  formatFileTypeLabel,
  formatParentDirectoryLabel,
} from "./file-resource-labels";

function isFileManagerTarget(target: { target: string }): boolean {
  return target.target === "fileManager";
}

function isNonFileManagerTarget(target: { target: string }): boolean {
  return target.target !== "fileManager";
}

export interface FileEndResourceCardProps {
  turnId?: string;
  conversationId: string;
  cwd: string | null;
  hostId: string;
  inputMessageId?: string | null;
  messageId?: string | null;
  onOpen?: () => void;
  path: string;
}

export function FileEndResourceCard({
  turnId,
  conversationId,
  cwd,
  hostId,
  inputMessageId,
  messageId,
  onOpen,
  path,
}: FileEndResourceCardProps) {
  const store = useAppStore();
  const intl = useIntl();
  const { platform } = usePlatform();
  const hostConfig = useHostConfig(hostId);
  const openFileRequest = useHostRequest("open-file");
  const extension = getFileExtension(path);
  const [showPreloader, setShowPreloader] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const {
    clearConnectingApp,
    connectingApp,
    handleAppConnectOAuthStarted,
    handleConnectApp,
  } = useConnectApp({ hostId });
  const {
    canLoadTargets,
    targets,
    availableTargets,
    mode,
    hasLoadedTargets,
    isLoadingTargets,
    open,
  } = useOpenInTargets({ turnId, cwd, hostId, openPath: path });
  const filename = basename(path);
  const openInItems = filterOpenInTargets({
    targets,
    availableTargets,
    includeHiddenTargets: true,
    mode,
  }).filter(isNonFileManagerTarget);
  const fileManagerTarget = availableTargets.includes("fileManager")
    ? (targets.find(isFileManagerTarget) ?? null)
    : null;
  const googleExportTarget = getGoogleWorkspaceExportTarget(path);
  const hasGoogleExport = googleExportTarget != null;
  const subtitleLabel =
    formatFileTypeLabel(extension, intl) ?? formatParentDirectoryLabel(path);
  const handleOpen = () => {
    onOpen?.();
    openFileResourceFromTurn({
      scope: store,
      path,
      cwd,
      hostConfig,
      hostId,
      openFile: openFileRequest.mutate,
      openInSidePanel: true,
    });
  };
  const showPreloaderOnHover = () => {
    setShowPreloader(true);
  };
  const preloader =
    canLoadTargets && showPreloader ? (
      <OpenInTargetsPreloader cwd={cwd} hostId={hostId} openPath={path} />
    ) : null;
  const isLoadingTargetsNow =
    canLoadTargets && showPreloader && isLoadingTargets;
  const hasOpenInOptions =
    isLoadingTargetsNow || openInItems.length > 0 || hasGoogleExport;
  const FileIcon = getFileIconComponent(path);
  const overlayButton = (
    <button
      aria-label={intl.formatMessage(
        {
          id: "localConversation.endResource.openResource",
          defaultMessage: "Open {filename}",
          description:
            "Accessible label for opening a conversation resource card",
        },
        { filename },
      )}
      className={OVERLAY_BUTTON_CLASS_NAME}
      onClick={handleOpen}
      type="button"
    />
  );
  const iconNode = (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-token-bg-secondary text-token-text-secondary">
      <FileIcon className="size-6" />
    </span>
  );
  const subtitle = (
    <>
      <span className="end-resource-default-subtitle">{subtitleLabel}</span>
      <span className="end-resource-hover-subtitle hidden items-center gap-1">
        <FormattedMessage
          id="localConversation.endResource.openPreview"
          defaultMessage="Open preview"
          description="Hover subtitle for opening a conversation resource preview"
        />
      </span>
    </>
  );
  const trailing = isOpening ? (
    <Spinner />
  ) : (
    <DropdownMenu
      align="end"
      open={isMenuOpen}
      disabled={
        hasLoadedTargets &&
        openInItems.length === 0 &&
        fileManagerTarget == null &&
        !hasGoogleExport
      }
      contentClassName="pt-2"
      triggerButton={
        <Button
          className="end-resource-open-button pointer-events-auto !self-center !bg-transparent hover:!bg-token-list-hover-background data-[state=open]:!bg-token-list-hover-background"
          color="outline"
          onFocus={showPreloaderOnHover}
          onMouseEnter={showPreloaderOnHover}
          size="toolbar"
        >
          <FormattedMessage
            id="localConversation.endResource.openIn"
            defaultMessage="Open in"
            description="Button label for opening a conversation resource"
          />
          <ChevronIcon className="icon-2xs opacity-50" />
        </Button>
      }
      onOpenChange={(open) => {
        setMenuOpen(open);
        if (open) {
          showPreloaderOnHover();
        }
      }}
    >
      <div className="flex min-w-[160px] flex-col gap-0.5">
        {openInItems.map((item) => (
          <Dropdown.Item
            key={item.id}
            onSelect={() => {
              open(item.target, {
                appPath: item.appPath,
                path,
                persistPreferred: false,
              });
            }}
          >
            <Dropdown.ItemIcon>
              <img alt="" src={item.icon} className="icon-sm" />
            </Dropdown.ItemIcon>
            {item.label}
          </Dropdown.Item>
        ))}
        {isLoadingTargetsNow ? (
          <Dropdown.Message compact={true}>
            <FormattedMessage
              id="localConversation.endResource.loadingAvailableApps"
              defaultMessage="Loading available apps…"
              description="Dropdown item shown while loading apps that can open a conversation resource"
            />
          </Dropdown.Message>
        ) : null}
        {hasGoogleExport ? (
          <GoogleWorkspaceExportMenuItems
            analyticsClickSource={
              analyticsClickSource.CODEX_GOOGLE_WORKSPACE_RESOURCE_CLICK_SOURCE_END_RESOURCE_EXPORT_MENU
            }
            analyticsContext={{
              threadId: conversationId,
              turnId: turnId ?? null,
              inputMessageId: inputMessageId ?? null,
              messageId: messageId ?? null,
            }}
            cwd={cwd}
            handleConnectApp={handleConnectApp}
            hostId={hostId}
            isOpening={isOpening}
            onCloseDropdown={() => setMenuOpen(false)}
            onOpeningChange={setIsOpening}
            path={path}
            title={filename}
          />
        ) : null}
        {fileManagerTarget == null ? null : (
          <>
            {hasOpenInOptions ? <Dropdown.Separator /> : null}
            <Dropdown.Item
              onSelect={() => {
                open("fileManager", { path, persistPreferred: false });
              }}
            >
              <Dropdown.ItemIcon>
                <img alt="" src={fileManagerTarget.icon} className="icon-sm" />
              </Dropdown.ItemIcon>
              {platform === "macOS" ? (
                <FormattedMessage
                  id="localConversation.endResource.revealInFinder"
                  defaultMessage="Reveal in Finder"
                  description="Dropdown item for revealing a conversation resource in Finder"
                />
              ) : platform === "windows" ? (
                <FormattedMessage
                  id="localConversation.endResource.openInExplorer"
                  defaultMessage="Open in Explorer"
                  description="Dropdown item for revealing a conversation resource in File Explorer"
                />
              ) : (
                <FormattedMessage
                  id="localConversation.endResource.openInFileManager"
                  defaultMessage="Open in File Manager"
                  description="Dropdown item for revealing a conversation resource in the system file manager"
                />
              )}
            </Dropdown.Item>
          </>
        )}
      </div>
    </DropdownMenu>
  );
  const card = (
    <OpenFileContextMenuWrapper
      cwd={cwd}
      hostId={hostId}
      openInSidePanel={true}
      path={path}
    >
      <div className="group/end-resource relative">
        {overlayButton}
        <ThreadResourceCardHeader
          className={headerClassName(isMenuOpen)}
          icon={iconNode}
          title={filename}
          subtitle={subtitle}
          trailing={trailing}
        />
      </div>
    </OpenFileContextMenuWrapper>
  );
  const connectDialog =
    hasGoogleExport && connectingApp != null ? (
      <AppConnectDialog
        app={connectingApp}
        hostId={hostId}
        onClose={clearConnectingApp}
        onOAuthStarted={handleAppConnectOAuthStarted}
      />
    ) : null;
  return (
    <>
      {preloader}
      {card}
      {connectDialog}
    </>
  );
}
