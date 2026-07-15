// Restored from ref/webview/assets/local-conversation-page-C379OsPf.js
import React from "react";

import { ChevronRightIcon as DisclosureChevronIcon } from "../../icons/chevron-right-icon";
import { once } from "../../runtime/commonjs-interop";
import { Button, initButtonComponentPrimitives } from "../../ui/button";
import {
  initPopoverPrimitives,
  Popover as PopoverRoot,
  PopoverContent,
  PopoverTrigger,
} from "../../ui/popover";
import { classNames, initClassNameRuntime } from "../../utils/class-names";
import { useIsBackgroundSubagentsEnabled } from "../../utils/use-is-background-subagents-enabled";
import {
  initUseStableCallback,
  useStableCallback,
} from "../../utils/use-stable-callback";
import {
  activeWorkspaceDiffSignal,
  appScope,
  appShellTabIds,
  AppgenProjectHeader,
  AutomationTooltipSurface,
  clearRestoredWorkspaceRoot,
  clearSelectedSummarySource,
  ComposerDismissableLayer,
  conversationCwdSignal,
  conversationHostIdSignal,
  conversationModeSignal,
  conversationModelSignal,
  conversationReasoningEffortSignal,
  conversationRequestsSignal,
  conversationResumeStateSignal,
  getChunkModuleExports,
  getProjectAppearance,
  getRenderableTurnItems,
  getRouteConversationId,
  getTurnAgentItemGroups,
  hasConversationSignal,
  initAppgenProjectHeaderChunk,
  initAppScope,
  initAppServerRequestBridge,
  initAutomationSurface,
  initConnectorAppsListQuery,
  initConversationRouteSourceHelpers,
  initCurrentRefViewRuntime,
  initDebugPanelRuntime,
  initDebugPanelSourceRuntime,
  initGlobalStateQueryRuntime,
  initIntlMessageRuntime,
  initMotionRuntime,
  initPendingWorktreeChunk,
  initProjectAppearanceChunk,
  initProjectsAppSharedRuntime,
  initPullRequestThreadActionsChunk,
  initReactQueryRuntime,
  initReactRuntime,
  initRouteScope,
  initScopeRuntime,
  initVscodeApiBridge,
  isConversationItemInProgress,
  lastTurnCwdSignal,
  lastTurnDiffSignal,
  latestConversationTurnSignal,
  localConversationRouteScope,
  localConversationTitleSignal,
  localResponseInProgressSignal,
  LocalConversationTurnRow,
  Navigate,
  normalizeConfigPath,
  normalizeWorkspacePath,
  openWorkspaceDiffPanelTab,
  openWorkspaceFilePanelTab,
  pendingClientLocalConversationSignal,
  pendingProjectlessLocalConversationSignal,
  PendingWorktreeConversation,
  ProjectAvatar,
  resolveRenderableAgentItems,
  rightPanelController,
  rightPanelOpenSignal,
  rightPanelTabController,
  rolloutPathSignal,
  selectedSummaryPanelSignal,
  setSelectedSummarySource,
  sourceWorkspaceRootAfterRestoreSignal,
  subagentParentThreadIdSignal,
  summaryPanelPinnedSignal,
  targetWorkspaceRootSignal,
  ThreadAppShellLayout,
  useAppsQuery,
  useCommandRegistration,
  useScope,
  useScopedValue,
  useSignalValue,
  useStatsigGate,
  WorkedForCollapsedAgentsLabel,
} from "../local-conversation-page-runtime";
import {
  getAttachedHeartbeatAutomationForThread,
  initAttachedHeartbeatAutomationLookupChunk,
} from "../../github/pull-request-checks-summary";
import {
  initProjectHoverCardChunk,
  ProjectHoverCard,
} from "../../sidebar/project-hover-card";
import {
  initProjectIconChunk,
  ProjectIcon,
} from "../../composer/project-selector";
import {
  initOpenThreadInNewWindowChunk,
  useOpenThreadInNewWindow,
} from "../../automation/heartbeat-automation-eligibility";
import {
  initLocalConversationHeartbeatAutomationThreadStateReporter,
  initLocalConversationStreamRoleProductEventReporter,
  LocalConversationHeartbeatAutomationThreadStateReporter,
  LocalConversationStreamRoleProductEventReporter,
} from "../local-conversation-stream-role-product-event";
import {
  initLocalConversationThreadChunk,
  LocalConversationThread,
  LocalConversationSummaryPanel,
  ThreadSummaryPanelChrome,
  useResumeLocalConversation,
} from "../local-conversation-thread";
import {
  initThreadOverflowMenuChunk,
  ThreadOverflowMenu,
} from "../../threads/thread-overflow-menu";
import {
  initThreadAppShellChromeChunk,
  initThreadAppShellLocalConversationDependency,
  ThreadAppShellChrome,
} from "../../app-shell/thread-app-shell-chrome";
import { BackgroundSubagentsPanel } from "./background-subagents-panel";
import { LocalConversationDebugPanelReporter } from "./debug-panel";
import {
  initLocalConversationDiffSummaryEffectsChunk,
  LocalConversationDiffSummaryView,
} from "./local-conversation-diff-summary-effects";
import type { IntlShape, PanelTab, Scope } from "./types";
import {
  initIntlRuntime as initReactIntlRuntime,
  useIntl,
  FormattedMessage,
} from "../../vendor/react-intl";

function remapWorkspacePathBetweenRoots(
  value: string | null | undefined,
  sourceRoot: string | null | undefined,
  targetRoot: string | null | undefined,
): string | null | undefined {
  if (!value || !sourceRoot || !targetRoot) {
    return value;
  }
  const normalizedValue = normalizeConfigPath(normalizeWorkspacePath(value));
  const normalizedSource = normalizeConfigPath(
    normalizeWorkspacePath(sourceRoot),
  );
  const normalizedTarget = normalizeConfigPath(
    normalizeWorkspacePath(targetRoot),
  );
  if (normalizedValue === normalizedSource) {
    return normalizedTarget;
  }
  if (!normalizedValue.startsWith(`${normalizedSource}/`)) {
    return value;
  }
  return `${normalizedTarget}${normalizedValue.slice(normalizedSource.length)}`;
}

function remapPanelTab(
  tab: PanelTab,
  sourceRoot: string | null | undefined,
  targetRoot: string | null | undefined,
): PanelTab {
  return {
    ...tab,
    path: remapWorkspacePathBetweenRoots(tab.path, sourceRoot, targetRoot),
    originalPath: remapWorkspacePathBetweenRoots(
      tab.originalPath,
      sourceRoot,
      targetRoot,
    ),
    cwd: remapWorkspacePathBetweenRoots(tab.cwd, sourceRoot, targetRoot),
    source: tab.source
      ? {
          ...tab.source,
          path: remapWorkspacePathBetweenRoots(
            tab.source.path,
            sourceRoot,
            targetRoot,
          ),
          originalPath: remapWorkspacePathBetweenRoots(
            tab.source.originalPath,
            sourceRoot,
            targetRoot,
          ),
          cwd: remapWorkspacePathBetweenRoots(
            tab.source.cwd,
            sourceRoot,
            targetRoot,
          ),
        }
      : tab.source,
  };
}

function remapOpenWorkspaceTabsAfterRootChange(
  scope: Scope,
  sourceRoot: string | null | undefined,
  targetRoot: string | null | undefined,
): void {
  if (!sourceRoot || !targetRoot) {
    return;
  }

  const remapTabsForController = (
    controller: typeof rightPanelController,
  ): void => {
    const activeTab = scope.get<PanelTab | null>(controller.activeTab$);
    const tabs = scope.get<PanelTab[]>(controller.tabs$);
    for (const tab of tabs) {
      if (tab.id === activeTab?.id) {
        continue;
      }
      const remapped = remapPanelTab(tab, sourceRoot, targetRoot);
      if (tab.tabKind === appShellTabIds.DIFF) {
        openWorkspaceDiffPanelTab(scope, remapped, controller);
      } else {
        openWorkspaceFilePanelTab(scope, remapped, controller);
      }
    }
    if (activeTab) {
      const remappedActiveTab = remapPanelTab(
        activeTab,
        sourceRoot,
        targetRoot,
      );
      if (activeTab.tabKind === appShellTabIds.DIFF) {
        openWorkspaceDiffPanelTab(scope, remappedActiveTab, controller);
      } else {
        openWorkspaceFilePanelTab(scope, remappedActiveTab, controller);
      }
    }
  };

  remapTabsForController(rightPanelController);
  remapTabsForController(rightPanelTabController);
}

function LocalConversationWorkspaceRootEffects(): null {
  const scope = useScope(localConversationRouteScope) as Scope;
  const conversationId = scope.value?.conversationId as string | undefined;
  const sourceRoot = useSignalValue(sourceWorkspaceRootAfterRestoreSignal) as
    | string
    | null;
  const targetRoot = useSignalValue(targetWorkspaceRootSignal) as string | null;
  const selectedSummary = useScopedValue(
    selectedSummaryPanelSignal,
    conversationId,
  ) as unknown;

  React.useEffect(() => {
    if (sourceRoot && targetRoot) {
      remapOpenWorkspaceTabsAfterRootChange(scope, sourceRoot, targetRoot);
      scope.set(sourceWorkspaceRootAfterRestoreSignal, null);
      return;
    }
    clearRestoredWorkspaceRoot(scope);
  }, [scope, sourceRoot, targetRoot]);

  React.useEffect(() => {
    if (!conversationId || selectedSummary) {
      return;
    }
    setSelectedSummarySource(scope, conversationId, (source: unknown) => {
      clearSelectedSummarySource(scope, source);
    });
  }, [conversationId, scope, selectedSummary]);

  return null;
}

function preventRightPanelOutsidePointer(event: Event): void {
  const target = event.target;
  if (
    target instanceof HTMLElement &&
    target.closest(`[data-panel-id="${rightPanelController.panelId}"]`)
  ) {
    event.preventDefault();
  }
}

function preventRightPanelFocusOutside(event: Event): void {
  const target = event.target;
  if (
    target instanceof HTMLElement &&
    target.closest(`[data-panel-id="${rightPanelController.panelId}"]`)
  ) {
    event.preventDefault();
  }
}

type SummaryPanelOverlayPopoverProps = {
  trigger: React.ReactElement;
  children: React.ReactNode;
};

function SummaryPanelOverlayPopover({
  trigger,
  children,
}: SummaryPanelOverlayPopoverProps): React.ReactElement {
  return (
    <PopoverRoot modal={false}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        align="end"
        className="z-popover w-[min(640px,calc(100vw-32px))] overflow-hidden rounded-lg border border-token-border-default bg-token-bg-primary shadow-xl"
        collisionPadding={16}
        onFocusOutside={preventRightPanelFocusOutside}
        onPointerDownOutside={preventRightPanelOutsidePointer}
        side="bottom"
        sideOffset={8}
      >
        {children}
      </PopoverContent>
    </PopoverRoot>
  );
}

function toggleSummaryPanel(scope: Scope, force?: boolean): void {
  const nextPinned =
    force ??
    !scope.get<boolean>(summaryPanelPinnedSignal, scope.value?.conversationId);
  scope.set(summaryPanelPinnedSignal, nextPinned, scope.value?.conversationId);
  if (nextPinned) {
    scope.set(rightPanelOpenSignal, true);
  }
}

type LocalConversationHeaderProps = {
  conversationId: string;
  projectId?: string | null;
};

function LocalConversationHeader({
  conversationId,
  projectId,
}: LocalConversationHeaderProps): React.ReactElement {
  const title = useScopedValue(localConversationTitleSignal, conversationId) as
    | string
    | null;
  const intl = useIntl() as IntlShape;
  const projectAppearance = projectId ? getProjectAppearance(projectId) : null;
  const model = useScopedValue(conversationModelSignal, conversationId) as
    | string
    | null;
  const reasoningEffort = useScopedValue(
    conversationReasoningEffortSignal,
    conversationId,
  ) as string | null;

  return (
    <ThreadAppShellLayout.Header
      className="border-b border-token-border-default bg-token-bg-primary px-3"
      data-testid="local-conversation-header"
    >
      <div className="flex min-w-0 flex-1 items-center gap-2">
        {projectId && projectAppearance ? (
          <ProjectHoverCard projectId={projectId}>
            <button
              aria-label={intl.formatMessage({
                id: "localConversation.header.project",
                defaultMessage: "Project details",
              })}
              className="flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-token-bg-secondary"
              type="button"
            >
              <ProjectAvatar
                appearance={projectAppearance}
                className="size-5"
                fallbackIcon={<ProjectIcon className="icon-sm" />}
              />
            </button>
          </ProjectHoverCard>
        ) : null}
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-medium text-token-text-primary">
            {title ||
              intl.formatMessage({
                id: "localConversation.header.untitled",
                defaultMessage: "Local conversation",
              })}
          </div>
          <div className="truncate text-xs text-token-text-tertiary">
            {[model, reasoningEffort].filter(Boolean).join(" · ")}
          </div>
        </div>
      </div>
      <HeartbeatAutomationHeaderButton conversationId={conversationId} />
      <SummaryPanelHeaderAction />
      <ThreadOverflowMenu conversationId={conversationId} />
    </ThreadAppShellLayout.Header>
  );
}

type HeartbeatAutomationHeaderButtonProps = { conversationId: string };

function HeartbeatAutomationHeaderButton({
  conversationId,
}: HeartbeatAutomationHeaderButtonProps): React.ReactElement | null {
  const { data } = useAppsQuery({ enabled: true }) as {
    data?: { items?: unknown[] };
  };
  const automation = getAttachedHeartbeatAutomationForThread({
    automations: data?.items ?? [],
    conversationId,
  }) as { title?: string; nextRunAt?: string } | null;

  if (!automation) {
    return null;
  }

  return (
    <AutomationTooltipSurface.Root>
      <AutomationTooltipSurface.Trigger asChild>
        <Button
          aria-label={automation.title}
          className="size-8"
          size="icon-sm"
          variant="ghost"
        >
          <LocalConversationHeartbeatAutomationThreadStateReporter
            conversationId={conversationId}
          />
        </Button>
      </AutomationTooltipSurface.Trigger>
      <AutomationTooltipSurface.Content>
        <HeartbeatAutomationNextRunTooltip automation={automation} />
      </AutomationTooltipSurface.Content>
    </AutomationTooltipSurface.Root>
  );
}

type HeartbeatAutomationNextRunTooltipProps = {
  automation: { title?: string; nextRunAt?: string };
};

function HeartbeatAutomationNextRunTooltip({
  automation,
}: HeartbeatAutomationNextRunTooltipProps): React.ReactElement {
  return (
    <div className="max-w-xs text-sm">
      <div className="font-medium">{automation.title}</div>
      {automation.nextRunAt ? (
        <div className="mt-1 text-token-text-tertiary">
          <FormattedMessage
            defaultMessage="Next run: {time}"
            id="localConversation.automation.nextRun"
            values={{ time: automation.nextRunAt }}
          />
        </div>
      ) : null}
    </div>
  );
}

type LatestTurnComposerPreviewProps = { conversationId: string };

function LatestTurnComposerPreviewContainer({
  conversationId,
}: LatestTurnComposerPreviewProps): React.ReactElement | null {
  const latestTurn = useScopedValue(
    latestConversationTurnSignal,
    conversationId,
  ) as { id?: string; items?: unknown[]; status?: string } | null;
  const requests = useScopedValue(
    conversationRequestsSignal,
    conversationId,
  ) as Array<{ turnId?: string; items?: unknown[]; status?: string }> | null;
  const hostId = useScopedValue(conversationHostIdSignal, conversationId) as
    | string
    | null;
  const appsQuery = useAppsQuery({ hostId, enabled: Boolean(hostId) }) as {
    data?: unknown;
  };
  const backgroundSubagentsEnabled = useIsBackgroundSubagentsEnabled();

  const latestTurnState = React.useMemo(() => {
    if (!latestTurn) {
      return null;
    }
    const request = requests?.find((entry) => entry.turnId === latestTurn.id);
    return {
      ...latestTurn,
      ...request,
      apps: appsQuery.data,
      isBackgroundSubagentsEnabled: backgroundSubagentsEnabled,
    };
  }, [appsQuery.data, backgroundSubagentsEnabled, latestTurn, requests]);

  if (!latestTurnState) {
    return null;
  }

  return (
    <LatestTurnComposerPreview
      conversationId={conversationId}
      latestTurn={latestTurnState}
    />
  );
}

type LatestTurnComposerPreviewInnerProps = {
  conversationId: string;
  latestTurn: { items?: unknown[]; status?: string };
};

function LatestTurnComposerPreview({
  conversationId,
  latestTurn,
}: LatestTurnComposerPreviewInnerProps): React.ReactElement | null {
  const [isOpen, setIsOpen] = React.useState(true);
  const normalizedItems = getRenderableTurnItems(latestTurn.items ?? []);
  const agentGroups = getTurnAgentItemGroups(
    normalizedItems,
    latestTurn.status,
  );
  const renderableAgents = resolveRenderableAgentItems(agentGroups);
  const previewSummary = getLatestTurnPreviewSummary(renderableAgents);
  const collapsedCount = countCollapsedRenderableAgentItems(renderableAgents);

  if (!previewSummary) {
    return null;
  }

  return (
    <div className="border-t border-token-border-default bg-token-bg-primary">
      <button
        className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-token-bg-secondary"
        onClick={() => setIsOpen((value) => !value)}
        type="button"
      >
        <DisclosureChevronIcon
          className={classNames("icon-2xs transition-transform", {
            "rotate-90": isOpen,
          })}
        />
        <span className="min-w-0 flex-1 truncate text-token-text-secondary">
          {previewSummary}
        </span>
        {collapsedCount > 0 ? (
          <WorkedForCollapsedAgentsLabel count={collapsedCount} />
        ) : null}
      </button>
      {isOpen ? (
        <div className="max-h-[30vh] overflow-y-auto px-4 pb-3">
          <LocalConversationTurnRow
            conversationId={conversationId}
            items={normalizedItems}
            status={latestTurn.status}
          />
        </div>
      ) : null}
    </div>
  );
}

function getLatestTurnPreviewSummary(items: unknown[]): React.ReactNode {
  const inProgress = items.find((item) => isConversationItemInProgress(item));
  if (inProgress) {
    return (
      <FormattedMessage
        defaultMessage="Working on the latest turn"
        id="localConversation.latestTurn.working"
      />
    );
  }
  const workedFor = findWorkedForItem(items);
  if (workedFor) {
    return workedFor;
  }
  return null;
}

function countCollapsedRenderableAgentItems(items: unknown[]): number {
  return Math.max(0, items.length - 1);
}

function findWorkedForItem(items: unknown[]): unknown | null {
  return items.find((item) => item && typeof item === "object") ?? null;
}

type LocalConversationDiffSummaryProps = { conversationId: string };

function LocalConversationDiffSummary({
  conversationId,
}: LocalConversationDiffSummaryProps): React.ReactElement | null {
  const cwd = useScopedValue(lastTurnCwdSignal, conversationId) as
    | string
    | null;
  const diff = useScopedValue(lastTurnDiffSignal, conversationId) as unknown;

  if (!cwd || !diff) {
    return null;
  }

  return (
    <LocalConversationDiffSummaryView lastTurnCwd={cwd} lastTurnDiff={diff} />
  );
}

function MarkLocalConversationReadOnVisibility(): null {
  LocalConversationStreamRoleProductEventReporter.useMarkConversationReadOnVisibility();
  return null;
}

type LocalConversationThreadPageProps = { conversationId: string };

function LocalConversationThreadPage({
  conversationId,
}: LocalConversationThreadPageProps): React.ReactElement {
  const scope = useScope(localConversationRouteScope) as Scope;
  const activeDiff = useSignalValue(activeWorkspaceDiffSignal) as {
    kind?: string;
  } | null;
  const pinnedSummaryPanel = useScopedValue(
    summaryPanelPinnedSignal,
    conversationId,
  ) as boolean;

  React.useEffect(() => {
    if (activeDiff?.kind === "git") {
      toggleSummaryPanel(scope, false);
    }
  }, [activeDiff, scope]);

  return (
    <ThreadAppShellLayout.MainContentLayout
      footer={<LocalConversationComposer conversationId={conversationId} />}
      header={<LocalConversationThreadHeader conversationId={conversationId} />}
      rightPanel={
        pinnedSummaryPanel ? (
          <LocalConversationSummaryPanelContent
            conversationId={conversationId}
          />
        ) : (
          <BackgroundSubagentsPanel conversationId={conversationId} />
        )
      }
    >
      <MarkLocalConversationReadOnVisibility />
      <LocalConversationWorkspaceRootEffects />
      <LocalConversationDiffSummary conversationId={conversationId} />
      <LocalConversationThread conversationId={conversationId} />
    </ThreadAppShellLayout.MainContentLayout>
  );
}

function SummaryPanelHeaderAction(): React.ReactElement {
  const scope = useScope(localConversationRouteScope) as Scope;
  const conversationId = scope.value?.conversationId as string | undefined;
  const pinned = useScopedValue(
    summaryPanelPinnedSignal,
    conversationId,
  ) as boolean;

  const button = (
    <ThreadSummaryPanelChrome.HeaderButton
      active={pinned}
      onClick={() => toggleSummaryPanel(scope)}
    />
  );

  if (pinned || !conversationId) {
    return button;
  }

  return (
    <SummaryPanelOverlayPopover trigger={button}>
      <LocalConversationSummaryPanelContent conversationId={conversationId} />
    </SummaryPanelOverlayPopover>
  );
}

type LocalConversationSummaryPanelContentProps = { conversationId: string };

function LocalConversationSummaryPanelContent({
  conversationId,
}: LocalConversationSummaryPanelContentProps): React.ReactElement {
  return (
    <ThreadSummaryPanelChrome>
      <LocalConversationSummaryPanel conversationId={conversationId} />
    </ThreadSummaryPanelChrome>
  );
}

type LocalConversationThreadHeaderProps = { conversationId: string };

function LocalConversationThreadHeader({
  conversationId,
}: LocalConversationThreadHeaderProps): React.ReactElement {
  const projectId = useScopedValue(
    subagentParentThreadIdSignal,
    conversationId,
  ) as string | null;

  return (
    <>
      <ThreadAppShellChrome />
      <LocalConversationHeader
        conversationId={conversationId}
        projectId={projectId ?? undefined}
      />
    </>
  );
}

type LocalConversationComposerProps = { conversationId: string };

function LocalConversationComposer({
  conversationId,
}: LocalConversationComposerProps): React.ReactElement {
  const scope = useScope(localConversationRouteScope) as Scope;
  const browserConversationId = getRouteConversationId(scope) ?? undefined;
  const cwd = useScopedValue(conversationCwdSignal, conversationId) as
    | string
    | null;
  const mode = useScopedValue(conversationModeSignal, conversationId) as
    | string
    | null;
  const resumeState = useScopedValue(
    conversationResumeStateSignal,
    conversationId,
  ) as string | null;
  const responseInProgress = useScopedValue(
    localResponseInProgressSignal,
    conversationId,
  ) as boolean;
  const onPointerDownOutside = useStableCallback((event: Event) => {
    preventRightPanelOutsidePointer(event);
  });

  return (
    <ComposerDismissableLayer onPointerDownOutside={onPointerDownOutside}>
      <div className="border-t border-token-border-default bg-token-bg-primary">
        <LatestTurnComposerPreviewContainer conversationId={conversationId} />
        <ThreadAppShellChrome.Composer
          browserConversationId={browserConversationId}
          conversationId={conversationId}
          cwd={cwd ?? undefined}
          mode={mode ?? undefined}
          responseInProgress={responseInProgress}
          resumeState={resumeState ?? undefined}
        />
      </div>
    </ComposerDismissableLayer>
  );
}

export function LocalConversationPage(): React.ReactElement {
  const scope = useScope(localConversationRouteScope) as Scope;
  const conversationId = scope.value?.conversationId as string | undefined;

  if (!conversationId) {
    return <ClientLocalThreadRoute />;
  }

  return <LocalThreadRoute conversationId={conversationId} />;
}

type LocalThreadRouteProps = { conversationId: string };

function LocalThreadRoute({
  conversationId,
}: LocalThreadRouteProps): React.ReactElement {
  const hasConversation = useScopedValue(
    hasConversationSignal,
    conversationId,
  ) as boolean;
  const rolloutPath = useScopedValue(rolloutPathSignal, conversationId) as
    | string
    | null;
  const shouldResumeLocalConversation = useStatsigGate("567837310");
  useResumeLocalConversation(
    shouldResumeLocalConversation ? conversationId : null,
    rolloutPath ?? undefined,
  );
  const openThreadInNewWindow = useOpenThreadInNewWindow();

  useCommandRegistration("codex.openLocalThreadInNewWindow", () => {
    openThreadInNewWindow(conversationId);
  });

  if (!hasConversation) {
    return <Navigate replace to="/" />;
  }

  return (
    <>
      <LocalConversationDebugPanelReporter conversationId={conversationId} />
      <LocalConversationStreamRoleProductEventReporter
        conversationId={conversationId}
      />
      <LocalConversationThreadPage conversationId={conversationId} />
    </>
  );
}

function ClientLocalThreadRoute(): React.ReactElement {
  const scope = useScope(localConversationRouteScope) as Scope;
  const clientThreadId = scope.value?.clientThreadId as string | undefined;
  const pendingConversation = useScopedValue(
    pendingClientLocalConversationSignal,
    clientThreadId,
  ) as { conversationId?: string } | null;
  const pendingStart = useScopedValue(
    pendingProjectlessLocalConversationSignal,
    clientThreadId,
  ) as { title?: string } | null;
  const navigate = useStableCallback((path: string) => {
    scope.set(appScope, { path });
  });

  if (pendingConversation?.conversationId) {
    return (
      <Navigate
        replace
        to={`/local/${encodeURIComponent(pendingConversation.conversationId)}`}
      />
    );
  }

  if (!clientThreadId) {
    return <Navigate replace to="/" />;
  }

  return (
    <ThreadAppShellLayout.MainContentLayout
      header={<AppgenProjectHeader start={pendingStart?.title} />}
    >
      <ThreadAppShellChrome />
      <ThreadAppShellChrome.PendingClientConversation
        clientThreadId={clientThreadId}
        onNavigate={navigate}
      />
    </ThreadAppShellLayout.MainContentLayout>
  );
}

type PendingWorktreeLocalConversationPageProps = {
  pendingWorktreeId: string;
};

function PendingWorktreeLocalConversationPage({
  pendingWorktreeId,
}: PendingWorktreeLocalConversationPageProps): React.ReactElement {
  return (
    <PendingWorktreeConversation
      pendingWorktreeId={pendingWorktreeId}
      stayOnClientThread
    />
  );
}

const initLocalConversationPageChunk = once(() => {
  getChunkModuleExports("local-conversation-page-C379OsPf");
  initReactRuntime();
  initScopeRuntime();
  initRouteScope();
  initAppScope();
  initReactIntlRuntime();
  initIntlMessageRuntime();
  initReactQueryRuntime();
  initMotionRuntime();
  initButtonComponentPrimitives();
  initPopoverPrimitives();
  initClassNameRuntime();
  initUseStableCallback();
  initGlobalStateQueryRuntime();
  initCurrentRefViewRuntime();
  initVscodeApiBridge();
  initAppServerRequestBridge();
  initConversationRouteSourceHelpers();
  initConnectorAppsListQuery();
  initProjectsAppSharedRuntime();
  initLocalConversationDiffSummaryEffectsChunk();
  initAutomationSurface();
  initAttachedHeartbeatAutomationLookupChunk();
  initProjectAppearanceChunk();
  initAppgenProjectHeaderChunk();
  initDebugPanelRuntime();
  initDebugPanelSourceRuntime();
  initPendingWorktreeChunk();
  initProjectHoverCardChunk();
  initProjectIconChunk();
  initOpenThreadInNewWindowChunk();
  initPullRequestThreadActionsChunk();
  initLocalConversationThreadChunk();
  initLocalConversationStreamRoleProductEventReporter();
  initLocalConversationHeartbeatAutomationThreadStateReporter();
  initThreadOverflowMenuChunk();
  initThreadAppShellChromeChunk();
  initThreadAppShellLocalConversationDependency();
});

initLocalConversationPageChunk();
