// Restored from ref/webview/assets/thread-overflow-menu-yh1Ldo2y.js
// Thread overflow menu component and chunk initializer.
import React from "react";

import { CopyIcon } from "../../icons/copy-icon";
import { EditIcon as RenameThreadIcon } from "../../icons/edit-icon";
import { GitBranchIcon, initGitBranchIcon } from "../../icons/git-branch-icon";
import { once } from "../../runtime/commonjs-interop";
import {
  Dropdown as MenuChrome,
  DropdownMenu,
  initDropdownMenuPrimitives,
} from "../../ui/dropdown";
import { Button, initButtonComponentPrimitives } from "../../ui/button";
import {
  FormattedMessage,
  initIntlRuntime,
  useIntl,
} from "../../vendor/react-intl";
import {
  conversationCollaborationModeSignal,
  conversationHostIdSignal,
  createForkConversationPendingWorktree,
  forkConversationFromLatest,
  HeartbeatAutomationIcon,
  initAutomationPanelRuntime,
  initCreateHeartbeatAutomationRuntime,
  initCurrentRefViewRuntime,
  initDeveloperInstructionsProducer,
  initElectronPlatformContent,
  initForkDialogLocalIcon,
  initForkDialogWorktreeIcon,
  initForkThreadMessages,
  initHeartbeatAutomationTabsRuntime,
  initHostConversationActionsProducer,
  initKeyboardModifierState,
  initLoggerRuntime,
  initMoreHorizontalIcon,
  initPendingWorktreeNavigationRoute,
  initProjectsAppProducer,
  initQueryRuntime,
  initReactRuntime,
  initRouteScope,
  initScopeRuntime,
  initThreadActionMenuRuntime,
  initThreadActionMessages,
  initThreadOverflowQueryRuntime,
  initToastRuntime,
  initWorkspaceRouteHelpers,
  isSideChatUnavailable,
  LocalForkIcon,
  localConversationRouteScope,
  localEnvironmentSelectionsByWorkspaceSignal,
  logger,
  MoreHorizontalIcon,
  openCreateHeartbeatAutomationTab,
  openExistingHeartbeatAutomationTab,
  PlatformContentGate,
  RenameThreadDialog,
  sendHostRequest,
  SideChatIcon,
  threadActionMessages,
  threadActionShortcutSignal,
  threadSourceSignal,
  toastSignal,
  useCommandRegistration,
  useNavigate,
  useScope,
  useScopedValue,
  useSignalSnapshot,
  useSignalValue,
  useThreadActions,
  useThreadCommandHandler,
  useThreadPinControls,
  WorktreeForkIcon,
} from "../thread-overflow-menu-runtime";
import {
  automationsQuerySignal as heartbeatAutomationsQuerySignal,
  initAutomationsQueryChunk as initHeartbeatAutomationsQueryChunk,
} from "../../automation/automation-schedule";
import {
  ArchiveThreadConfirmDialog,
  heartbeatAutomationEligibilitySignal,
  initArchiveThreadConfirmDialogChunk,
  initHeartbeatAutomationEligibilityChunk,
  initOpenThreadInNewWindowChunk,
  initThreadPinControlsChunk,
  initThreadPinIconChunk,
  pinThreadMessage,
  ThreadPinIcon,
  unpinThreadMessage,
  useOpenThreadInNewWindow,
} from "../../automation/heartbeat-automation-eligibility";
import {
  getAttachedHeartbeatAutomationForThread,
  initAttachedHeartbeatAutomationLookupChunk,
} from "../../github/pull-request-checks-summary";
import { ArchiveIcon, initArchiveIconChunk } from "../../icons/archive-icon";
import { initPinIconChunk, PinIcon } from "../../icons/pin-icon";
import {
  initPopInMacIconChunk,
  PopInMacIcon,
} from "../../icons/pop-in-mac-icon";
import {
  initOpenSideChatTabChunk,
  openSideChatTab,
} from "./open-side-chat-tab";

type ScopeRuntime = {
  value?: {
    pathname?: string;
    search?: string;
  };
  get<T = unknown>(signal: unknown, key?: unknown): T;
};

type IntlShape = {
  formatMessage(
    descriptor: Record<string, unknown>,
    values?: Record<string, unknown>,
  ): string;
};

type ThreadActions = {
  archiveThread(input: {
    conversationId: string;
    source: string;
    onArchiveStart?: () => void;
  }): void;
  renameThread(input: { conversationId: string; title: string }): void;
  copyAppLink(conversationId: string): void;
  copyConversationMarkdown(input: {
    conversationId: string;
    parentConversationId: string | null;
    getMarkdown: () => string | Promise<string>;
  }): void;
  copySessionId(conversationId: string): void;
  copyWorkingDirectory(cwd?: string | null): void;
};

type ThreadOverflowMenuProps = {
  conversationId?: string | null;
  getConversationMarkdown?: (() => string | Promise<string>) | null;
  markdownParentConversationId?: string | null;
  sideChatTab?: unknown;
  cwd?: string | null;
  title?: string | null;
  canPin?: boolean;
  hideForkActions?: boolean;
  isWorktreeThread?: boolean;
  archiveNavigation?: "home" | string;
  archiveSource?: string;
  dropdownAlign?: "start" | "center" | "end" | string;
  triggerButtonClassName?: string;
  triggerButtonColor?: string;
  triggerIconClassName?: string;
};

type HeartbeatAutomation = {
  id: string;
  name: string;
};

type HeartbeatEligibility = {
  isEligible?: boolean;
  reason?: string;
};

export function ThreadOverflowMenu({
  conversationId,
  getConversationMarkdown,
  markdownParentConversationId,
  sideChatTab,
  cwd,
  title,
  canPin = true,
  hideForkActions,
  isWorktreeThread = false,
  archiveNavigation = "home",
  archiveSource = "thread_overflow_menu",
  dropdownAlign = "start",
  triggerButtonClassName,
  triggerButtonColor = "ghost",
  triggerIconClassName = "icon-sm",
}: ThreadOverflowMenuProps): React.ReactElement | null {
  const scope = useScope(localConversationRouteScope) as ScopeRuntime;
  const intl = useIntl() as IntlShape;
  const {
    archiveThread,
    renameThread,
    copyAppLink,
    copyConversationMarkdown,
    copySessionId,
    copyWorkingDirectory,
  } = useThreadActions() as ThreadActions;
  const navigate = useNavigate() as (
    path: string,
    options?: Record<string, unknown>,
  ) => void;

  const [archiveConfirmOpen, setArchiveConfirmOpen] = React.useState(false);
  const [pendingArchiveSource, setPendingArchiveSource] = React.useState<
    string | null
  >(null);
  const [renameInitialTitle, setRenameInitialTitle] = React.useState<
    string | null
  >(null);
  const [heartbeatAutomationName, setHeartbeatAutomationName] = React.useState<
    string | null
  >(null);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const hostId = useScopedValue(conversationHostIdSignal, conversationId) as
    | string
    | null;
  useScopedValue(threadSourceSignal, conversationId);

  const { isPinned, togglePin } = useThreadPinControls(conversationId, {
    canPin,
  }) as { isPinned: boolean; togglePin: () => void };
  const togglePinShortcut = useScopedValue(
    threadActionShortcutSignal,
    "toggleThreadPin",
  );
  const pinKeyboardShortcut = canPin ? togglePinShortcut : null;
  const renameKeyboardShortcut = useScopedValue(
    threadActionShortcutSignal,
    "renameThread",
  );
  const archiveKeyboardShortcut = useScopedValue(
    threadActionShortcutSignal,
    "archiveThread",
  );
  const copyWorkingDirectoryShortcut = useScopedValue(
    threadActionShortcutSignal,
    "copyWorkingDirectory",
  );
  const copySessionIdShortcut = useScopedValue(
    threadActionShortcutSignal,
    "copySessionId",
  );
  const copyAppLinkShortcut = useScopedValue(
    threadActionShortcutSignal,
    "copyDeeplink",
  );
  const copyConversationMarkdownShortcut = useScopedValue(
    threadActionShortcutSignal,
    "copyConversationMarkdown",
  );
  const openSideChatShortcut = useScopedValue(
    threadActionShortcutSignal,
    "openSideChat",
  );
  const { canOpenThreadInNewWindow, openThreadInNewWindow } =
    useOpenThreadInNewWindow({ conversationId }) as {
      canOpenThreadInNewWindow: boolean;
      openThreadInNewWindow: () => void;
    };
  const heartbeatEligibility = useScopedValue(
    heartbeatAutomationEligibilitySignal,
    conversationId,
  ) as HeartbeatEligibility;
  const canOpenSideChat = sideChatTab != null && !isSideChatUnavailable();
  const collaborationMode = useScopedValue(
    conversationCollaborationModeSignal,
    conversationId,
  );
  const localEnvironmentSelectionsByWorkspace = useSignalSnapshot(
    localEnvironmentSelectionsByWorkspaceSignal,
  );

  const archiveThreadWithSource = React.useCallback(
    (source: string) => {
      if (conversationId == null) {
        return;
      }

      archiveThread({
        conversationId,
        source,
        onArchiveStart:
          archiveNavigation === "home"
            ? () => {
                navigate("/", {
                  replace: true,
                  state: {
                    focusComposerNonce: Date.now(),
                    prefillCwd: cwd,
                  },
                });
              }
            : undefined,
      });
    },
    [archiveNavigation, archiveThread, conversationId, cwd, navigate],
  );

  const requestArchiveThread = React.useCallback(
    (source: string) => {
      if (conversationId == null) {
        return;
      }

      void (async () => {
        let attachedAutomation: HeartbeatAutomation | null = null;
        try {
          attachedAutomation = getAttachedHeartbeatAutomationForThread({
            automations: (await sendHostRequest("list-automations")).items,
            conversationId,
            includePausedAutomations: true,
          }) as HeartbeatAutomation | null;
        } catch (error) {
          logger.error("Error checking heartbeat automation before archive", {
            safe: {},
            sensitive: { error },
          });
        }

        if (attachedAutomation == null) {
          archiveThreadWithSource(source);
          return;
        }

        setPendingArchiveSource(source);
        setHeartbeatAutomationName(attachedAutomation.name);
        setArchiveConfirmOpen(true);
      })();
    },
    [archiveThreadWithSource, conversationId],
  );

  const openHeartbeatAutomation = React.useCallback(
    (automation: HeartbeatAutomation | null) => {
      if (automation != null) {
        openExistingHeartbeatAutomationTab({
          scope,
          automationId: automation.id,
          title: automation.name,
        });
        return;
      }

      openCreateHeartbeatAutomationTab({
        scope,
        seed: {
          directiveKey: `thread-overflow-${conversationId}`,
          mode: null,
          id: null,
          kind: "heartbeat",
          name: title ?? "",
          prompt: "",
          rrule: "",
          cwds: [],
          executionEnvironment: null,
          localEnvironmentConfigPath: null,
          model: null,
          reasoningEffort: null,
          targetThreadId: conversationId,
          status: "ACTIVE",
        },
        title:
          title ??
          intl.formatMessage({
            id: "localConversation.automation.newTabTitle",
            defaultMessage: "New scheduled task",
            description:
              "Right panel tab title for a scheduled task created from a thread",
          }),
      });
    },
    [conversationId, intl, scope, title],
  );

  const openSideChat = React.useCallback(() => {
    if (conversationId == null || sideChatTab == null) {
      return;
    }

    openSideChatTab(scope, sideChatTab, {
      sourceConversationId: conversationId,
      cwd,
      hostId,
      collaborationMode,
      intl,
    }).catch((error: unknown) => {
      logger.error("Error opening side chat", {
        safe: {},
        sensitive: { error },
      });
      scope.get<{ danger(message: string): void }>(toastSignal).danger(
        intl.formatMessage({
          id: "threadHeader.openSideChatError",
          defaultMessage: "Failed to open side chat",
          description: "Error message shown when opening a side chat fails",
        }),
      );
    });
  }, [
    collaborationMode,
    conversationId,
    cwd,
    hostId,
    intl,
    scope,
    sideChatTab,
  ]);

  useCommandRegistration(
    "copyConversationMarkdown",
    () => {
      if (conversationId != null && getConversationMarkdown != null) {
        copyConversationMarkdown({
          conversationId,
          parentConversationId: markdownParentConversationId ?? null,
          getMarkdown: getConversationMarkdown,
        });
      }
    },
    {
      enabled: conversationId != null && getConversationMarkdown != null,
    },
  );
  useCommandRegistration("openSideChat", openSideChat, {
    enabled: conversationId != null && canOpenSideChat,
  });
  useThreadCommandHandler(
    "toggle-thread-pin",
    () => {
      if (canPin) {
        togglePin();
      }
    },
    [canPin, togglePin],
  );
  useThreadCommandHandler(
    "rename-thread",
    () => {
      if (conversationId != null) {
        setRenameInitialTitle(title ?? "");
      }
    },
    [conversationId, title],
  );
  useThreadCommandHandler(
    "archive-thread",
    ({ source }: { source: string }) => {
      requestArchiveThread(source);
    },
    [requestArchiveThread],
  );
  useThreadCommandHandler(
    "copy-conversation-path",
    () => {
      copyWorkingDirectory(cwd);
    },
    [cwd],
  );
  useThreadCommandHandler(
    "copy-working-directory",
    () => {
      copyWorkingDirectory(cwd);
    },
    [cwd],
  );
  useThreadCommandHandler(
    "copy-session-id",
    () => {
      if (conversationId != null) {
        copySessionId(conversationId);
      }
    },
    [conversationId],
  );
  useThreadCommandHandler(
    "copy-deeplink",
    () => {
      if (conversationId != null) {
        copyAppLink(conversationId);
      }
    },
    [conversationId],
  );

  if (conversationId == null) {
    return null;
  }

  const canForkIntoWorktree = cwd != null;
  const forkIntoLocal = async () => {
    const forkedConversationId = await forkConversationFromLatest(scope, {
      sourceConversationId: conversationId,
      sourceWorkspaceRoot: cwd,
    });
    if (forkedConversationId != null) {
      navigate(`/local/${forkedConversationId}`);
    }
  };
  const forkIntoWorktree = async () => {
    const pendingWorktreeId = await createForkConversationPendingWorktree(
      scope,
      {
        localEnvironmentSelectionsByWorkspace,
        sourceConversationId: conversationId,
        sourceWorkspaceRoot: cwd,
      },
    );
    if (pendingWorktreeId != null && cwd != null) {
      navigate(`/worktree-init-v2/${pendingWorktreeId}`);
    }
  };
  const confirmArchiveAfterAutomationWarning = () => {
    if (pendingArchiveSource != null) {
      setArchiveConfirmOpen(false);
      archiveThreadWithSource(pendingArchiveSource);
    }
  };

  const pinMessage = isPinned ? unpinThreadMessage : pinThreadMessage;
  const PinMenuIcon = isPinned ? ThreadPinIcon : PinIcon;
  const moreActionsLabel = intl.formatMessage(threadActionMessages.moreActions);
  const showForkActions = !hideForkActions;
  const showOpenInNewWindowAction = canOpenThreadInNewWindow;
  const showDisabledHeartbeatAutomationAction =
    heartbeatEligibility.reason === "turn_in_progress";

  return (
    <>
      <DropdownMenu
        open={menuOpen}
        onOpenChange={setMenuOpen}
        triggerButton={
          <Button
            size="icon"
            color={triggerButtonColor}
            className={triggerButtonClassName ?? "no-drag"}
            aria-label={moreActionsLabel}
          >
            <MoreHorizontalIcon className={triggerIconClassName} />
          </Button>
        }
        align={dropdownAlign}
        contentWidth="menu"
      >
        {canPin ? (
          <MenuChrome.Item
            onSelect={togglePin}
            LeftIcon={PinMenuIcon}
            keyboardShortcut={pinKeyboardShortcut}
          >
            <FormattedMessage {...pinMessage} />
          </MenuChrome.Item>
        ) : null}
        <MenuChrome.Item
          onSelect={() => setRenameInitialTitle(title ?? "")}
          LeftIcon={RenameThreadIcon}
          keyboardShortcut={renameKeyboardShortcut}
        >
          <FormattedMessage {...threadActionMessages.renameThread} />
        </MenuChrome.Item>
        <MenuChrome.Item
          onSelect={() => requestArchiveThread(archiveSource)}
          LeftIcon={ArchiveIcon}
          keyboardShortcut={archiveKeyboardShortcut}
        >
          <FormattedMessage {...threadActionMessages.archiveThread} />
        </MenuChrome.Item>
        <MenuChrome.Separator />
        {canOpenSideChat ? (
          <MenuChrome.Item
            onSelect={openSideChat}
            LeftIcon={SideChatIcon}
            keyboardShortcut={openSideChatShortcut}
          >
            <FormattedMessage
              id="threadHeader.openSideChat"
              defaultMessage="Open side chat"
              description="Menu item to fork a local thread into an ephemeral right panel side chat"
            />
          </MenuChrome.Item>
        ) : null}
        <MenuChrome.FlyoutSubmenuItem
          LeftIcon={CopyIcon}
          label={
            <FormattedMessage
              id="threadHeader.copyActions"
              defaultMessage="Copy"
              description="Menu item that opens chat copy actions"
            />
          }
        >
          <MenuChrome.Item
            onSelect={() => copyWorkingDirectory(cwd)}
            LeftIcon={CopyIcon}
            keyboardShortcut={copyWorkingDirectoryShortcut}
            disabled={!cwd}
          >
            <FormattedMessage {...threadActionMessages.copyWorkingDirectory} />
          </MenuChrome.Item>
          <MenuChrome.Item
            onSelect={() => copySessionId(conversationId)}
            LeftIcon={CopyIcon}
            keyboardShortcut={copySessionIdShortcut}
          >
            <FormattedMessage {...threadActionMessages.copySessionId} />
          </MenuChrome.Item>
          <MenuChrome.Item
            onSelect={() => copyAppLink(conversationId)}
            LeftIcon={CopyIcon}
            keyboardShortcut={copyAppLinkShortcut}
          >
            <FormattedMessage {...threadActionMessages.copyAppLink} />
          </MenuChrome.Item>
          {getConversationMarkdown != null ? (
            <MenuChrome.Item
              onSelect={() =>
                copyConversationMarkdown({
                  conversationId,
                  parentConversationId: markdownParentConversationId ?? null,
                  getMarkdown: getConversationMarkdown,
                })
              }
              LeftIcon={CopyIcon}
              keyboardShortcut={copyConversationMarkdownShortcut}
            >
              <FormattedMessage
                {...threadActionMessages.copyConversationMarkdown}
              />
            </MenuChrome.Item>
          ) : null}
        </MenuChrome.FlyoutSubmenuItem>
        {showForkActions ? (
          <MenuChrome.FlyoutSubmenuItem
            LeftIcon={GitBranchIcon}
            label={
              <FormattedMessage
                id="threadHeader.forkActions"
                defaultMessage="Fork"
                description="Menu item that opens chat fork actions"
              />
            }
          >
            <MenuChrome.Item
              onSelect={() => {
                void forkIntoLocal();
              }}
              LeftIcon={isWorktreeThread ? WorktreeForkIcon : LocalForkIcon}
            >
              <FormattedMessage
                {...(isWorktreeThread
                  ? threadActionMessages.forkIntoSameWorktree
                  : threadActionMessages.forkIntoLocal)}
              />
            </MenuChrome.Item>
            <MenuChrome.Item
              onSelect={() => {
                void forkIntoWorktree();
              }}
              LeftIcon={WorktreeForkIcon}
              disabled={!canForkIntoWorktree}
            >
              <FormattedMessage {...threadActionMessages.forkIntoWorktree} />
            </MenuChrome.Item>
          </MenuChrome.FlyoutSubmenuItem>
        ) : null}
        <PlatformContentGate electron={true}>
          {menuOpen ? (
            <HeartbeatAutomationMenuItem
              canAddHeartbeatAutomation={Boolean(
                heartbeatEligibility.isEligible,
              )}
              conversationId={conversationId}
              onSelect={openHeartbeatAutomation}
              showDisabledAddHeartbeatAutomation={
                showDisabledHeartbeatAutomationAction
              }
            />
          ) : null}
        </PlatformContentGate>
        {showOpenInNewWindowAction ? <MenuChrome.Separator /> : null}
        {showOpenInNewWindowAction ? (
          <MenuChrome.Item
            onSelect={openThreadInNewWindow}
            LeftIcon={PopInMacIcon}
          >
            <FormattedMessage {...threadActionMessages.openInNewWindow} />
          </MenuChrome.Item>
        ) : null}
      </DropdownMenu>
      {renameInitialTitle == null ? null : (
        <RenameThreadDialog
          initialValue={renameInitialTitle}
          onClose={() => setRenameInitialTitle(null)}
          onSave={(nextTitle: string) => {
            renameThread({
              conversationId,
              title: nextTitle,
            });
          }}
        />
      )}
      <ArchiveThreadConfirmDialog
        heartbeatAutomationName={heartbeatAutomationName}
        open={archiveConfirmOpen}
        onOpenChange={setArchiveConfirmOpen}
        onConfirm={confirmArchiveAfterAutomationWarning}
      />
    </>
  );
}

type HeartbeatAutomationMenuItemProps = {
  canAddHeartbeatAutomation: boolean;
  conversationId: string;
  onSelect: (automation: HeartbeatAutomation | null) => void;
  showDisabledAddHeartbeatAutomation: boolean;
};

function HeartbeatAutomationMenuItem({
  canAddHeartbeatAutomation,
  conversationId,
  onSelect,
  showDisabledAddHeartbeatAutomation,
}: HeartbeatAutomationMenuItemProps): React.ReactElement | null {
  const { data } = useSignalValue(heartbeatAutomationsQuerySignal) as {
    data?: { items?: unknown[] };
  };
  const attachedAutomation = getAttachedHeartbeatAutomationForThread({
    automations: data?.items ?? [],
    conversationId,
    includePausedAutomations: true,
  }) as HeartbeatAutomation | null;

  const hasAttachedAutomation = attachedAutomation != null;
  if (
    !hasAttachedAutomation &&
    !canAddHeartbeatAutomation &&
    !showDisabledAddHeartbeatAutomation
  ) {
    return null;
  }

  const disabled = !hasAttachedAutomation && !canAddHeartbeatAutomation;
  const label = hasAttachedAutomation
    ? threadActionMessages.editAutomation
    : threadActionMessages.addAutomation;

  return (
    <MenuChrome.Item
      onSelect={() => onSelect(attachedAutomation)}
      LeftIcon={HeartbeatAutomationIcon}
      disabled={disabled}
    >
      <FormattedMessage {...label} />
    </MenuChrome.Item>
  );
}

export const initThreadOverflowMenuChunk = once(() => {
  initQueryRuntime();
  initScopeRuntime();
  initReactRuntime();
  initIntlRuntime();
  initCurrentRefViewRuntime();
  initHostConversationActionsProducer();
  initHeartbeatAutomationsQueryChunk();
  initAttachedHeartbeatAutomationLookupChunk();
  initHeartbeatAutomationEligibilityChunk();
  initAutomationPanelRuntime();
  initDeveloperInstructionsProducer();
  initKeyboardModifierState();
  initWorkspaceRouteHelpers();
  initButtonComponentPrimitives();
  initDropdownMenuPrimitives();
  initThreadActionMenuRuntime();
  initElectronPlatformContent();
  initArchiveIconChunk();
  initGitBranchIcon();
  initProjectsAppProducer();
  initHeartbeatAutomationTabsRuntime();
  initForkDialogLocalIcon();
  initCreateHeartbeatAutomationRuntime();
  initThreadPinIconChunk();
  initPinIconChunk();
  initPopInMacIconChunk();
  initMoreHorizontalIcon();
  initForkDialogWorktreeIcon();
  initForkThreadMessages();
  initThreadActionMessages();
  initRouteScope();
  initThreadPinControlsChunk();
  initThreadOverflowQueryRuntime();
  initLoggerRuntime();
  initArchiveThreadConfirmDialogChunk();
  initOpenSideChatTabChunk();
  initPendingWorktreeNavigationRoute();
  initOpenThreadInNewWindowChunk();
});
