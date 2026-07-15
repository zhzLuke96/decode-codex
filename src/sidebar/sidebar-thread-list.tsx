// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// The scrolling body of the sidebar: assembles the pinned / threads / projects /
// cloud sections (legacy vs. projects-sidebar layouts), persists the per-mode
// scroll position, and handles thread/project drag-and-drop reordering and moves
// (including the worktree-move confirmation prompt). Wraps everything in the
// scroll fade mask and the keyboard-shortcut scope.
import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  type ReactNode,
} from "react";
import { SidebarScrollFadeMask } from "./scroll-fade-mask";
import { WorktreeMoveConfirmDialog } from "./worktree-move-confirm-dialog";
import {
  appStoreScope,
  canStartProjectlessChatAtom,
  debounce,
  featureGateAtomFamily,
  getWorktreeMoveConfirmation,
  localProjectActionsEnabledAtom,
  logProjectsSidebarExposure,
  moveThreadToContainer,
  openDialog,
  ProjectThreadList,
  projectsSidebarModelAtom,
  projectsSidebarViewAtom,
  resolveTargetWorktreeWorkspaceRoot,
  setProjectPinned,
  setSidebarScrollPosition,
  setThreadPinned,
  shouldLogProjectsSidebarExposure,
  SidebarChatsList,
  SidebarCloudSection,
  SidebarKeyboardShortcutScope,
  sidebarLayoutModeAtom,
  sidebarPreferencesAtom,
  sidebarScrollTopByModeAtom,
  sidebarSectionsModelAtom,
  SidebarThreadGroups,
  SidebarThreadShortcutRegistrar,
  SidebarThreadsSection,
  Spinner,
  syncDiscoveredThreadWorkspaceRootHints,
  useAppScope,
  useAtomFamilyValue,
  useAtomValue,
  useDetailLevel,
  useCodexHomeInfo,
  useStableCallback,
  WORKSPACE_STATE_MOVES_GATE,
} from "../boundaries/onboarding-commons-externals.facade";

// Statsig gate that turns on the projects-sidebar (v2) layout.
const PROJECTS_SIDEBAR_GATE = "12346831";
// Debounce (ms) for writing the scroll position back to the store.
const SCROLL_PERSIST_DEBOUNCE_MS = 100;

interface ThreadDropPayload {
  targetContainerId: string;
  sourceContainerId?: string;
  threadId: string;
  beforeThreadId?: string;
}

interface ProjectDropPayload {
  targetContainerId: string;
  projectId: string;
}

export interface SidebarThreadListProps {
  sidebarMode: string;
  topContent?: ReactNode;
}

export function SidebarThreadList({
  sidebarMode,
  topContent,
}: SidebarThreadListProps) {
  const store = useAppScope(appStoreScope);
  const canStartProjectlessChat = useAtomValue(canStartProjectlessChatAtom);
  const isProjectsSidebarEnabled = useAtomFamilyValue(
    featureGateAtomFamily,
    PROJECTS_SIDEBAR_GATE,
  );
  const workspaceStateMovesEnabled = useAtomFamilyValue(
    featureGateAtomFamily,
    WORKSPACE_STATE_MOVES_GATE,
  );
  const localProjectActionsEnabled = useAtomValue(
    localProjectActionsEnabledAtom,
  );
  const detailLevel = useDetailLevel();
  const { data } = useCodexHomeInfo() as {
    data?: { codexHome?: unknown; worktreesSegment?: unknown };
  };
  const codexHome = data?.codexHome;

  const modelOptions = { canStartProjectlessChat, localProjectActionsEnabled };
  const {
    discoveredThreadWorkspaceRootHints,
    isWorkspaceRootOptionsLoading,
    shortcutThreadKeys,
    homeContainerIdByThreadId,
    visibleSidebarSectionKeys,
  } = useAtomFamilyValue(sidebarSectionsModelAtom, modelOptions);
  const { allProjectGroups, allSidebarItems, threadProjectAssignments } =
    useAtomFamilyValue(projectsSidebarModelAtom, modelOptions);
  const projectsSidebarView = useAtomValue(projectsSidebarViewAtom);
  const sidebarLayoutMode = useAtomValue(sidebarLayoutModeAtom);
  const sidebarPreferences = useAtomValue(sidebarPreferencesAtom);

  useEffect(() => {
    syncDiscoveredThreadWorkspaceRootHints(
      store,
      discoveredThreadWorkspaceRootHints,
    );
  }, [discoveredThreadWorkspaceRootHints, store]);

  useEffect(() => {
    if (
      shouldLogProjectsSidebarExposure({
        enabled: isProjectsSidebarEnabled && true,
        hasLoadedProjectSources: projectsSidebarView.hasLoadedProjectSources,
        isWorkspaceRootOptionsLoading:
          projectsSidebarView.isWorkspaceRootOptionsLoading,
        preferences: sidebarPreferences,
      })
    ) {
      logProjectsSidebarExposure(store, projectsSidebarView.projectCount);
    }
  }, [
    projectsSidebarView.hasLoadedProjectSources,
    projectsSidebarView.isWorkspaceRootOptionsLoading,
    projectsSidebarView.projectCount,
    false,
    isProjectsSidebarEnabled,
    sidebarPreferences,
    store,
  ]);

  const handleThreadDrop = useStableCallback((drop: ThreadDropPayload) => {
    const { targetContainerId } = drop;
    if (isProjectsSidebarEnabled) {
      if (targetContainerId === "pinned")
        return setThreadPinned(store, drop.threadId, true, drop.beforeThreadId);
      if (targetContainerId === "chats" && drop.sourceContainerId === "pinned")
        return setThreadPinned(store, drop.threadId, false);
    }
    if (
      targetContainerId !== "pinned" &&
      targetContainerId !== "chats" &&
      targetContainerId !== "cloud" &&
      !targetContainerId.startsWith("project:")
    )
      return;

    const performMove = (targetWorktreeWorkspaceRoot: unknown) =>
      moveThreadToContainer(store, drop, {
        allProjectGroups,
        allSidebarItems,
        targetWorktreeWorkspaceRoot,
        workspaceStateMovesEnabled,
      });

    return (async () => {
      const targetProjectGroup = drop.targetContainerId.startsWith("project:")
        ? allProjectGroups.find(
            (group: { projectId: string }) =>
              group.projectId === drop.targetContainerId.slice(8),
          )
        : null;
      const droppedThreadTask = allSidebarItems.find(
        (item: { task: { kind: string; conversation: { id: string } } }) =>
          item.task.kind === "local" &&
          item.task.conversation.id === drop.threadId,
      )?.task;
      const targetWorktreeWorkspaceRoot =
        droppedThreadTask?.kind === "local" &&
        targetProjectGroup?.projectKind === "local"
          ? await resolveTargetWorktreeWorkspaceRoot(
              store,
              droppedThreadTask.conversation.id,
              targetProjectGroup,
              droppedThreadTask.conversation.cwd,
              data?.worktreesSegment,
            )
          : null;
      const worktreeMoveConfirmation = getWorktreeMoveConfirmation({
        drop,
        allProjectGroups,
        allSidebarItems,
        codexHome,
        targetWorktreeWorkspaceRoot,
        threadProjectAssignments,
      });
      if (worktreeMoveConfirmation != null) {
        openDialog(store, WorktreeMoveConfirmDialog, {
          ...worktreeMoveConfirmation,
          onConfirm: () => {
            performMove(targetWorktreeWorkspaceRoot);
          },
        });
        return;
      }
      return performMove(targetWorktreeWorkspaceRoot);
    })();
  });

  const handleProjectDrop = useStableCallback((drop: ProjectDropPayload) => {
    if (drop.targetContainerId === "pinned")
      setProjectPinned(store, drop.projectId, true);
  });

  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const scrollPersistMode =
    sidebarMode === "chatgpt"
      ? "chatgpt"
      : detailLevel === "STEPS_PROSE"
        ? "work"
        : "codex";
  const persistScrollTop = useMemo(
    () =>
      debounce((scrollTop: number) => {
        setSidebarScrollPosition(store, scrollPersistMode, scrollTop);
      }, SCROLL_PERSIST_DEBOUNCE_MS),
    [store, scrollPersistMode],
  );

  useLayoutEffect(() => {
    const node = sidebarRef.current;
    if (node != null)
      node.scrollTop = store.get(sidebarScrollTopByModeAtom)[scrollPersistMode];
    return () => {
      persistScrollTop.flush();
      if (node != null)
        setSidebarScrollPosition(store, scrollPersistMode, node.scrollTop);
    };
  }, [persistScrollTop, store, scrollPersistMode]);

  const isLoading = isProjectsSidebarEnabled
    ? projectsSidebarView.isWorkspaceRootOptionsLoading
    : isWorkspaceRootOptionsLoading;
  if (isLoading)
    return (
      <SidebarScrollFadeMask
        handleSidebarScroll={persistScrollTop}
        homeContainerIdByThreadId={homeContainerIdByThreadId}
        onProjectDrop={handleProjectDrop}
        onThreadDrop={handleThreadDrop}
        sidebarRef={sidebarRef}
        sidebarSectionNodes={[
          <div
            key="loading"
            className="flex min-h-24 flex-1 items-center justify-center"
          >
            <Spinner className="icon-sm" />
          </div>,
        ]}
        topContent={topContent}
        showPinnedSection={false}
      />
    );

  const chatsSection = isProjectsSidebarEnabled ? (
    <ProjectThreadList
      mode={sidebarLayoutMode}
      threadKeys={
        sidebarLayoutMode === "project"
          ? projectsSidebarView.projectlessThreadKeys
          : projectsSidebarView.threadKeys
      }
      threadKeysInDisplayOrder={projectsSidebarView.threadKeys}
    />
  ) : (
    <SidebarChatsList />
  );

  let sidebarSectionNodes: ReactNode[];
  if (isProjectsSidebarEnabled) {
    switch (sidebarLayoutMode) {
      case "connection":
        sidebarSectionNodes = [
          <SidebarThreadGroups
            key="threads"
            connectionGroups={projectsSidebarView.connectionGroups}
            mode="connection"
          />,
        ];
        break;
      case "project":
        sidebarSectionNodes = [
          <SidebarThreadGroups
            key="threads"
            mode="project"
            projectGroups={projectsSidebarView.projectGroups}
            threadKeysInDisplayOrder={projectsSidebarView.threadKeys}
          />,
          <>{chatsSection}</>,
        ];
        break;
      default:
        sidebarSectionNodes = [<>{chatsSection}</>];
        break;
    }
  } else {
    sidebarSectionNodes = visibleSidebarSectionKeys.map(
      (sectionKey: string) => {
        switch (sectionKey) {
          case "cloud":
            return <SidebarCloudSection key={sectionKey} />;
          case "threads":
            return <SidebarThreadsSection key={sectionKey} />;
          case "chats":
            return <>{chatsSection}</>;
          default:
            return null;
        }
      },
    );
  }

  const shortcutKeys = isProjectsSidebarEnabled
    ? projectsSidebarView.shortcutThreadKeys
    : shortcutThreadKeys;

  return (
    <SidebarKeyboardShortcutScope shortcutKeys={shortcutKeys}>
      <SidebarThreadShortcutRegistrar threadKeys={shortcutKeys} />
      <SidebarScrollFadeMask
        floatStatusIconsRight={isProjectsSidebarEnabled}
        handleSidebarScroll={persistScrollTop}
        hidePinnedThreadTimestamps={isProjectsSidebarEnabled}
        homeContainerIdByThreadId={homeContainerIdByThreadId}
        onProjectDrop={handleProjectDrop}
        onThreadDrop={handleThreadDrop}
        pinnedProjectThreadKeysInDisplayOrder={
          isProjectsSidebarEnabled
            ? projectsSidebarView.pinnedProjectThreadKeys
            : undefined
        }
        sidebarRef={sidebarRef}
        sidebarSectionNodes={sidebarSectionNodes}
        topContent={topContent}
        showPinnedProjectHoverCards={isProjectsSidebarEnabled}
        showPinnedProjectGroups
        showPinnedSection
      />
    </SidebarKeyboardShortcutScope>
  );
}
