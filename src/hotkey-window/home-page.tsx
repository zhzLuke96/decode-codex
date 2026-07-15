// Restored from ref/webview/assets/hotkey-window-home-page-HuAbYFeH.js
// Semantic implementation for the current hotkey window home page with restored dependency imports.

import React from "react";
import { once as runOnce } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotUpperDLowerT,
  currentAppInitialSharedCompatSlotLowerGLowerC,
  currentAppInitialSharedCompatSlotUpperGLowerO,
  currentAppInitialSharedCompatSlotUpperKLowerO,
  currentAppInitialSharedCompatSlotUpperKLowerT,
  currentAppInitialSharedCompatSlotLowerNLowerT,
  currentAppInitialSharedCompatSlotUpperO,
  currentAppInitialSharedCompatSlotLowerQLowerO,
  currentAppInitialSharedCompatSlotUnderscore,
  currentAppInitialSharedCompatSlotLowerV,
  currentAppInitialSharedCompatSlotUpperVLowerO,
  currentAppInitialSharedCompatSlotLowerY,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadOrchestratorCompatSlotUpperJLowerU,
  worktreeNewThreadOrchestratorCompatSlotUpperXLowerU,
} from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  worktreeNewThreadQueryCompatSlotUpperALowerD,
  worktreeNewThreadQueryCompatSlotLowerCLowerA,
  worktreeNewThreadQueryCompatSlotUpperDLowerD,
  worktreeNewThreadQueryCompatSlotUpperDLowerF,
  worktreeNewThreadQueryCompatSlotUpperDLowerL,
  worktreeNewThreadQueryCompatSlotUpperELowerD,
  worktreeNewThreadQueryCompatSlotUpperGLowerL,
  worktreeNewThreadQueryCompatSlotLowerHLowerH,
  worktreeNewThreadQueryCompatSlotLowerILowerA,
  worktreeNewThreadQueryCompatSlotUpperILowerD,
  worktreeNewThreadQueryCompatSlotUpperILowerL,
  worktreeNewThreadQueryCompatSlotUpperJLowerL,
  worktreeNewThreadQueryCompatSlotDollarLowerL,
  worktreeNewThreadQueryCompatSlotLowerLLowerA,
  worktreeNewThreadQueryCompatSlotLowerMLowerH,
  worktreeNewThreadQueryCompatSlotUpperNLowerF,
  worktreeNewThreadQueryCompatSlotLowerOLowerA,
  worktreeNewThreadQueryCompatSlotUpperPLowerF,
  worktreeNewThreadQueryCompatSlotUpperTLowerF,
  worktreeNewThreadQueryCompatSlotUpperULowerM,
  worktreeNewThreadQueryCompatSlotLowerZLowerM,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  currentAppInitialSharedMember0542,
  parseWorkspaceRootPathList,
  intlFormatDateTimeRuntime,
  appServerErrorSchema,
  useReactRouterLocationInvariant,
  currentAppInitialSharedRuntime0710,
  currentAppInitialSharedMember0011,
  currentAppInitialSharedDisplayRuntime,
  currentAppInitialSharedMember0781,
  currentAppInitialSharedMember0799,
  currentAppInitialSharedMember0815,
  currentAppInitialSharedRuntime0816,
  currentAppInitialSharedFunction0375,
  openAiNativeAppDefinition,
  workspaceCwdHostConfigFunction,
  currentAppInitialSharedMember0924,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  initHomeHeroHeadingChunk,
  ComposerProjectSelector,
} from "../vendor/automations-page-current-runtime";
import {
  pullRequestNewThreadCompatSlotLowerDLowerN,
  pullRequestNewThreadCompatSlotLowerOLowerN,
} from "../runtime/current-app-initial/pull-request-new-thread-runtime";
import {
  appMainCurrentCompatSlotUpperXLowerU,
  AppShellOverlayOutlet,
} from "../vendor/app-main-current-runtime";
import {
  initAppgenLibraryHotRuntime,
  initWorkspaceRootLabelFormatterRuntime,
  initCodexCloudAccessRuntime,
  initLocalEnvironmentSelectionRuntime,
  ComposerPermissionModeDropdown,
  initNewThreadComposerFooterControlsRuntime,
  formatWorkspaceRootLabel,
  CodexCloudAccessStatusReporter,
  resolveAvailableComposerMode,
  useAboveComposerPortalChildren,
  initNewThreadComposerFooterRuntime,
  useLocalEnvironmentSelection,
  initAboveComposerPortalStore,
  NewThreadComposerFooter,
  getWorkspaceGitRoot,
  useCodexCloudAccessState,
  initLazySuspensePlaceholderRuntime,
} from "../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";
import {
  initWorktreeEnvironmentDropdownChunk,
  WorktreeEnvironmentDropdown,
} from "../environments/worktree-environment-dropdown";
import {
  initComposerFooterBranchSwitcherChunk,
  initComposerFooterInlineBranchSwitcherChunk,
  ComposerFooterBranchSwitcher,
  ComposerFooterInlineBranchSwitcher,
} from "../composer/composer-footer-branch-switcher";
import {
  useHotkeyWindowDismissOnEscape,
  initHotkeyWindowDismissOnEscapeChunk,
} from "../utils/use-hotkey-window-dismiss-on-escape";
import {
  ComposerModeDropdown,
  ComposerModeSlashCommandRegistrar,
  PermissionsDropdownRow,
  TaskSettingsRow,
  hotkeyHomeClassNames,
  initComposerModeDropdownChunk,
  initComposerModeSlashCommandRuntime,
  initComposerModeSlashCommandRegistrarChunk,
  initHotkeyHomeStylesChunk,
  initPointerInteractivityAdapterChunk,
  parseCssPixelValue,
  resolveComposerConversationCwd,
  resolveInitialComposerWorkspaceRoot,
  useHotkeyHomePointerInteractivity,
} from "./home-page-controls-impl";
export function HotkeyWindowHomePage() {
  let composerModeScope = currentAppInitialSharedCompatSlotUpperKLowerO(
    worktreeNewThreadQueryCompatSlotUpperALowerD,
  );
  useHotkeyWindowDismissOnEscape();
  let intl = currentAppInitialSharedFunction0375(),
    location = useReactRouterLocationInvariant(),
    navigate = parseWorkspaceRootPathList(),
    worktreeModeFeatureEnabled = currentAppInitialSharedMember0781("505458"),
    isComposerAvailabilityLoading = currentAppInitialSharedMember0799(),
    { access } = useCodexCloudAccessState(),
    { selectedRemoteProject } = worktreeNewThreadQueryCompatSlotUpperDLowerF(),
    homeRootRef = React.useRef(null),
    composerShellRef = React.useRef(null),
    activeDragPointerIdRef = React.useRef(null),
    lastLayoutMetricsRef = React.useRef(null),
    routeState = location.state,
    focusComposerNonce = routeState?.focusComposerNonce ?? null,
    prefillCwd = routeState?.prefillCwd ?? null,
    { data, isLoading } = currentAppInitialSharedCompatSlotLowerQLowerO(
      pullRequestNewThreadCompatSlotLowerOLowerN,
    ),
    projectlessDefaultEnabled = worktreeNewThreadQueryCompatSlotUpperULowerM(
      currentAppInitialSharedCompatSlotLowerNLowerT.hotkeyWindowProjectlessDefaultEnabled,
    ),
    composerWorkspaceRoot = resolveInitialComposerWorkspaceRoot({
      activeWorkspaceRoot: data?.roots[0] ?? null,
      defaultToProjectless: projectlessDefaultEnabled === true,
      prefillCwd: prefillCwd,
    }),
    selectedHomeRemoteProject =
      prefillCwd == null ? selectedRemoteProject : null,
    isProjectlessComposer =
      selectedHomeRemoteProject == null && composerWorkspaceRoot === "~",
    hostId = selectedHomeRemoteProject?.hostId ?? "local",
    hostConfig = currentAppInitialSharedMember0011(hostId),
    hostWorkspaceRoot = worktreeNewThreadQueryCompatSlotUpperPLowerF(hostId),
    conversationCwd = resolveComposerConversationCwd({
      composerWorkspaceRoot: composerWorkspaceRoot,
      selectedRemoteProjectPath: selectedHomeRemoteProject?.remotePath ?? null,
    }),
    isWorkspaceRootLoading =
      selectedHomeRemoteProject == null &&
      composerWorkspaceRoot == null &&
      isLoading,
    composerModeQueryKey = worktreeNewThreadQueryCompatSlotUpperELowerD({
      cwd: conversationCwd,
      hostId: hostId,
      isLoading: isWorkspaceRootLoading,
    }),
    { data: workspaceHostConfigData, isLoading: workspaceHostConfigLoading } =
      workspaceCwdHostConfigFunction(
        conversationCwd,
        hostConfig,
        "hotkey_window_home_page",
      ),
    resolvedGitRoot = workspaceHostConfigData?.root ?? null,
    canCreateWorktree =
      conversationCwd != null &&
      resolvedGitRoot != null &&
      worktreeModeFeatureEnabled &&
      !currentAppInitialSharedCompatSlotUpperDLowerT(
        conversationCwd,
        hostWorkspaceRoot,
      );
  let showWorktreeMode = canCreateWorktree,
    isMissingGitRepository =
      selectedHomeRemoteProject == null &&
      !isLoading &&
      !workspaceHostConfigLoading &&
      resolvedGitRoot == null,
    startLocationUnavailable = isProjectlessComposer || isMissingGitRepository,
    composerModeAvailability = {
      fallbackMode: "local",
      isAvailabilityLoading:
        !startLocationUnavailable &&
        ((selectedHomeRemoteProject == null && isLoading) ||
          workspaceHostConfigLoading ||
          isComposerAvailabilityLoading),
      isCloudAvailable: !startLocationUnavailable,
      isLocalAvailable: true,
      isWorktreeAvailable: showWorktreeMode,
    },
    storedComposerMode = currentAppInitialSharedCompatSlotUpperGLowerO(
      worktreeNewThreadQueryCompatSlotUpperILowerL,
      composerModeQueryKey,
    ),
    branchStartingState = currentAppInitialSharedCompatSlotLowerQLowerO(
      worktreeNewThreadQueryCompatSlotUpperDLowerL,
    ),
    includeOverlayFloatingElements = useAboveComposerPortalChildren(),
    composerMode = resolveAvailableComposerMode({
      ...composerModeAvailability,
      composerMode: storedComposerMode,
      cloudAccess: access,
    }),
    shouldResolveWorktreeGitRoot =
      composerMode === "worktree" && conversationCwd != null,
    worktreeGitRootQueryOptions = {
      enabled: shouldResolveWorktreeGitRoot,
      hostId: hostId,
      source: "hotkey_window_worktree_source",
    };
  let { gitRoot } = getWorkspaceGitRoot(
      conversationCwd,
      worktreeGitRootQueryOptions,
    ),
    environmentWorkspaceRoot =
      composerMode === "worktree" ? conversationCwd : null,
    environmentSelectionQuery = {
      hostId: hostId,
      workspaceRoot: environmentWorkspaceRoot,
    };
  let {
      environments,
      isLoading: environmentsLoading,
      error,
      resolvedConfigPath,
      updateSelection,
    } = useLocalEnvironmentSelection(environmentSelectionQuery),
    [taskMenuOpen, setTaskMenuOpen] = React.useState(false),
    [composerTopInset, setComposerTopInset] = React.useState(null),
    pointerInteractivityConfig = {
      activationNonce: focusComposerNonce,
      interactiveRegionRef: composerShellRef,
      onInteractiveChange: notifyPointerInteractivityChanged,
    };
  let homePointerIsInteractive = useHotkeyHomePointerInteractivity(
      pointerInteractivityConfig,
    ),
    composerPositionSubscription;
  composerPositionSubscription = (composerPositionEvent) => {
    setComposerTopInset(composerPositionEvent.topInsetPx);
  };
  currentAppInitialSharedCompatSlotLowerY(
    "hotkey-window-home-composer-position-changed",
    composerPositionSubscription,
  );
  let recomputeHomeLayout = (includeFloatingComposerElements) => {
    let homeRootElement = homeRootRef.current,
      composerShellElement = composerShellRef.current;
    if (!homeRootElement || !composerShellElement) return;
    let composerBottomPadding = parseCssPixelValue(
        window.getComputedStyle(homeRootElement).paddingBottom,
      ),
      homeBounds = homeRootElement.getBoundingClientRect(),
      composerShellBounds = composerShellElement.getBoundingClientRect(),
      overlayTopEdge = composerShellBounds.top;
    if (includeFloatingComposerElements)
      for (let floatingSelector of layoutFloatingSelectors)
        for (let floatingElement of document.querySelectorAll(floatingSelector))
          overlayTopEdge = Math.min(
            overlayTopEdge,
            floatingElement.getBoundingClientRect().top,
          );
    let layoutMetrics = {
        minimumComposerTopInsetPx: Math.max(
          0,
          Math.ceil(composerShellBounds.top - overlayTopEdge),
        ),
        restingComposerTopInsetPx: Math.ceil(
          Math.max(
            0,
            homeBounds.height -
              composerShellBounds.height -
              composerBottomPadding,
          ),
        ),
      },
      previousLayoutMetrics = lastLayoutMetricsRef.current;
    (previousLayoutMetrics?.minimumComposerTopInsetPx ===
      layoutMetrics.minimumComposerTopInsetPx &&
      previousLayoutMetrics.restingComposerTopInsetPx ===
        layoutMetrics.restingComposerTopInsetPx) ||
      ((lastLayoutMetricsRef.current = layoutMetrics),
      currentAppInitialSharedMember0815.hotkeyWindowHotkeys?.homeLayoutChanged(
        layoutMetrics,
      ));
  };
  let emitHomeLayoutMetrics = recomputeHomeLayout,
    focusComposerEffectDeps;
  focusComposerEffectDeps = [focusComposerNonce];
  React.useEffect(notifyHotkeyHomeActivated, focusComposerEffectDeps);
  let layoutObserverEffectDeps, setupLayoutObserver;
  setupLayoutObserver = () => {
    let layoutAnimationFrame = null,
      requestLayoutRecompute = () => {
        layoutAnimationFrame ??= window.requestAnimationFrame(() => {
          layoutAnimationFrame = null;
          emitHomeLayoutMetrics(includeOverlayFloatingElements);
        });
      },
      resizeObserver =
        typeof ResizeObserver === "undefined"
          ? null
          : new ResizeObserver(requestLayoutRecompute);
    return (
      composerShellRef.current != null &&
        resizeObserver?.observe(composerShellRef.current),
      requestLayoutRecompute(),
      () => {
        layoutAnimationFrame != null &&
          window.cancelAnimationFrame(layoutAnimationFrame);
        resizeObserver?.disconnect();
      }
    );
  };
  layoutObserverEffectDeps = [includeOverlayFloatingElements];
  React.useLayoutEffect(setupLayoutObserver, layoutObserverEffectDeps);
  let setComposerModeInScope = (nextComposerMode) => {
    worktreeNewThreadQueryCompatSlotUpperJLowerL(
      composerModeScope,
      composerModeQueryKey,
      nextComposerMode,
    );
  };
  let setComposerMode = setComposerModeInScope,
    setBranchStartingState = (nextStartingState) => {
      worktreeNewThreadQueryCompatSlotDollarLowerL(
        composerModeScope,
        (draftThreadState) => {
          draftThreadState.asyncThreadStartingState = nextStartingState;
        },
      );
    };
  let setBranchStartingStateHandler = setBranchStartingState,
    conversationCreatedHandler = openConversationFromHotkeyWindow,
    selectWorkspaceRoot = (workspaceRootOverride) => {
      let nextWorkspaceRoot = workspaceRootOverride ?? "~",
        nextRouteState = {
          ...routeState,
          prefillCwd: nextWorkspaceRoot,
        };
      navigate(
        {
          pathname: location.pathname,
          search: location.search,
          hash: location.hash,
        },
        {
          replace: true,
          state: nextRouteState,
        },
      );
    };
  let selectWorkspaceRootHandler = selectWorkspaceRoot,
    finishWindowDrag = (event) => {
      activeDragPointerIdRef.current === event.pointerId &&
        ((activeDragPointerIdRef.current = null),
        event.currentTarget.hasPointerCapture?.(event.pointerId) &&
          event.currentTarget.releasePointerCapture?.(event.pointerId),
        currentAppInitialSharedMember0815.hotkeyWindowHotkeys?.homeDragEnd());
    };
  let finishWindowDragHandler = finishWindowDrag,
    startWindowDrag = (event) => {
      event.button === 0 &&
        (event.preventDefault(),
        (activeDragPointerIdRef.current = event.pointerId),
        event.currentTarget.setPointerCapture?.(event.pointerId),
        currentAppInitialSharedMember0815.hotkeyWindowHotkeys?.homeDragStart({
          pointerWindowX: event.clientX,
          pointerWindowY: event.clientY,
        }));
    };
  let startWindowDragHandler = startWindowDrag,
    moveWindowDrag = (event) => {
      activeDragPointerIdRef.current === event.pointerId &&
        currentAppInitialSharedMember0815.hotkeyWindowHotkeys?.homeDragMove();
    };
  let moveWindowDragHandler = moveWindowDrag,
    composerPlaceholder;
  {
    let projectDisplayName =
      formatWorkspaceRootLabel(
        selectedHomeRemoteProject?.remotePath ?? conversationCwd,
        selectedHomeRemoteProject?.label,
      ) ??
      intl.formatMessage({
        id: "hotkeyWindow.home.placeholder.unknownProject",
        defaultMessage: "this project",
        description:
          "Fallback project name in the hotkey window composer placeholder",
      });
    if (isProjectlessComposer) {
      let projectlessPlaceholder;
      projectlessPlaceholder = intl.formatMessage({
        id: "hotkeyWindow.home.placeholder.projectless",
        defaultMessage: "Ask Codex anything locally",
        description: "Hotkey window placeholder for projectless local mode",
      });
      composerPlaceholder = projectlessPlaceholder;
    } else if (composerMode === "cloud") {
      let cloudPlaceholder;
      cloudPlaceholder = intl.formatMessage({
        id: "hotkeyWindow.home.placeholder.cloud",
        defaultMessage: "Ask Codex anything in the cloud",
        description: "Hotkey window placeholder for cloud mode",
      });
      composerPlaceholder = cloudPlaceholder;
    } else
      composerPlaceholder =
        composerMode === "worktree"
          ? intl.formatMessage(
              {
                id: "hotkeyWindow.home.placeholder.worktree",
                defaultMessage: "Ask Codex anything in a worktree in {project}",
                description: "Hotkey window placeholder for worktree mode",
              },
              {
                project: projectDisplayName,
              },
            )
          : intl.formatMessage(
              {
                id: "hotkeyWindow.home.placeholder.local",
                defaultMessage: "Ask Codex anything locally in {project}",
                description: "Hotkey window placeholder for local mode",
              },
              {
                project: projectDisplayName,
              },
            );
  }
  let startInDisabledTooltip;
  if (isWorkspaceRootLoading) {
    let loadingProjectTooltip;
    loadingProjectTooltip = intl.formatMessage({
      id: "hotkeyWindow.home.taskMenu.startIn.loadingTooltip",
      defaultMessage: "Loading project",
      description:
        "Tooltip shown when the hotkey-window project is still loading",
    });
    startInDisabledTooltip = loadingProjectTooltip;
  } else if (isProjectlessComposer) {
    let projectlessTooltip;
    projectlessTooltip = intl.formatMessage({
      id: "hotkeyWindow.home.taskMenu.startIn.projectlessTooltip",
      defaultMessage: "Projectless chats run locally",
      description:
        "Tooltip shown when the hotkey-window start-in control is disabled for projectless chats",
    });
    startInDisabledTooltip = projectlessTooltip;
  } else if (isMissingGitRepository) {
    let missingGitRepoTooltip;
    missingGitRepoTooltip = intl.formatMessage({
      id: "hotkeyWindow.home.taskMenu.startIn.disabledTooltip",
      defaultMessage:
        "Initialize a git repo to start in cloud or worktree mode",
      description:
        "Tooltip shown when the hotkey-window start-in control is disabled because the project is not a git repo",
    });
    startInDisabledTooltip = missingGitRepoTooltip;
  }
  let branchControl =
    composerMode === "worktree"
      ? React.createElement(ComposerFooterBranchSwitcher, {
          startingState: branchStartingState,
          setStartingState: setBranchStartingStateHandler,
          hostConfig: hostConfig,
          gitRootOverride: gitRoot ?? conversationCwd,
          branchSource: "worktree",
        })
      : resolvedGitRoot == null
        ? null
        : React.createElement(ComposerFooterInlineBranchSwitcher, {
            gitRoot: resolvedGitRoot,
            hostConfig: hostConfig,
            localConversationId: null,
            shouldShow: true,
          });
  let branchSettingsControl = branchControl,
    taskSettingsLabelMessage = intl.formatMessage({
      id: "hotkeyWindow.home.taskMenu.label",
      defaultMessage: "Task settings",
      description: "Accessible label for the hotkey window task settings menu",
    });
  let taskSettingsLabel = taskSettingsLabelMessage,
    homeClassName,
    cloudAccessStatusReporter;
  homeClassName = worktreeNewThreadQueryCompatSlotLowerMLowerH(
    hotkeyHomeClassNames.home,
    "relative h-full w-full overflow-hidden bg-transparent pb-1",
  );
  cloudAccessStatusReporter = React.createElement(
    CodexCloudAccessStatusReporter,
    null,
  );
  let interactiveNoDragClassName = homePointerIsInteractive && "no-drag",
    homeShellClassName = worktreeNewThreadQueryCompatSlotLowerMLowerH(
      hotkeyHomeClassNames.homeShell,
      "absolute inset-x-1 bottom-1 px-[15px] pb-[13px] pt-[17px]",
      interactiveNoDragClassName,
    );
  let homeShellStyle =
    composerTopInset == null
      ? undefined
      : {
          bottom: "auto",
          top: composerTopInset,
        };
  let dragUnderlay = (
    <div
      className={hotkeyHomeClassNames.shellUnderlay}
      aria-hidden="true"
      onLostPointerCapture={finishWindowDragHandler}
      onPointerCancel={finishWindowDragHandler}
      onPointerDown={startWindowDragHandler}
      onPointerMove={moveWindowDragHandler}
      onPointerUp={finishWindowDragHandler}
    />
  );
  let modeSlashCommandsEnabled =
      !isProjectlessComposer && !isWorkspaceRootLoading,
    modeSlashCommandRegistrar = React.createElement(
      ComposerModeSlashCommandRegistrar,
      {
        composerMode: composerMode,
        enabled: modeSlashCommandsEnabled,
        setComposerMode: setComposerMode,
        showWorktree: showWorktreeMode,
      },
    );
  let taskSettingsTrigger = React.createElement(
    worktreeNewThreadQueryCompatSlotLowerCLowerA,
    { asChild: true },
    React.createElement(appMainCurrentCompatSlotUpperXLowerU, {
      label: taskSettingsLabel,
      size: "composer",
    }),
  );
  let projectRowLabel = React.createElement(currentAppInitialSharedMember0924, {
    id: "hotkeyWindow.home.taskMenu.project",
    defaultMessage: "Project",
    description: "Label for the hotkey window project row",
  });
  let activeProjectIdOverride = isProjectlessComposer
      ? null
      : (selectedHomeRemoteProject?.id ?? conversationCwd ?? undefined),
    projectSettingsRow = React.createElement(TaskSettingsRow, {
      label: projectRowLabel,
      control: React.createElement(ComposerProjectSelector, {
        activeProjectIdOverride: activeProjectIdOverride,
        allowRemoteProjects: false,
        onWorkspaceRootSelected: selectWorkspaceRootHandler,
      }),
    });
  let startInRowLabel = React.createElement(currentAppInitialSharedMember0924, {
    id: "hotkeyWindow.home.taskMenu.startIn",
    defaultMessage: "Start in",
    description: "Label for the hotkey window mode row on the home page",
  });
  let canUseCloudMode =
      composerModeAvailability.isCloudAvailable && access === "enabled",
    startInSettingsRow = React.createElement(TaskSettingsRow, {
      label: startInRowLabel,
      control: React.createElement(ComposerModeDropdown, {
        canUseCloud: canUseCloudMode,
        composerMode: composerMode,
        setComposerMode: setComposerMode,
        showLabel: true,
        disabledTooltipText: startInDisabledTooltip,
        showWorktree: showWorktreeMode,
      }),
    });
  let environmentSettingsRow =
    composerMode === "worktree"
      ? React.createElement(TaskSettingsRow, {
          label: React.createElement(currentAppInitialSharedMember0924, {
            id: "hotkeyWindow.home.taskMenu.environment",
            defaultMessage: "Environment",
            description: "Label for the hotkey window environment row",
          }),
          control: React.createElement(WorktreeEnvironmentDropdown, {
            environments,
            isLoading: environmentsLoading,
            hasError: error != null,
            selectedConfigPath: resolvedConfigPath,
            onSelectConfigPath: updateSelection,
            onOpenSettings: openLocalEnvironmentsSettings,
          }),
        })
      : null;
  let branchSettingsRow = branchSettingsControl
    ? React.createElement(TaskSettingsRow, {
        label: React.createElement(currentAppInitialSharedMember0924, {
          id: "hotkeyWindow.home.taskMenu.branch",
          defaultMessage: "Branch",
          description: "Label for the hotkey window branch row",
        }),
        control: branchSettingsControl,
      })
    : null;
  let permissionsSettingsRow =
    composerMode === "cloud"
      ? null
      : React.createElement(ComposerPermissionModeDropdown, {
          conversationId: null,
          hostId: currentAppInitialSharedMember0542,
          DropdownContainer: PermissionsDropdownRow,
        });
  let $ = React.createElement(
    worktreeNewThreadQueryCompatSlotLowerOLowerA,
    {
      align: "center",
      side: "top",
      sideOffset: 10,
      className: "no-drag w-auto min-w-[320px] rounded-3xl p-0",
    },
    <div className="flex flex-col gap-4 p-3">
      {projectSettingsRow}
      {startInSettingsRow}
      {environmentSettingsRow}
      {branchSettingsRow}
      {permissionsSettingsRow}
    </div>,
  );
  let taskSettingsPopover;
  return (
    (taskSettingsPopover = React.createElement(
      worktreeNewThreadQueryCompatSlotLowerILowerA,
      { open: taskMenuOpen, onOpenChange: setTaskMenuOpen },
      [taskSettingsTrigger, $],
    )),
    (
      <div ref={homeRootRef} className={homeClassName}>
        {cloudAccessStatusReporter}
        <div
          ref={composerShellRef}
          className={homeShellClassName}
          style={homeShellStyle}
        >
          {dragUnderlay}
          {modeSlashCommandRegistrar}
          <div className="no-drag relative">
            {React.createElement(NewThreadComposerFooter, {
              showWorkspaceDropdownInFooter: false,
              showExternalFooter: false,
              surfaceClassName: hotkeyHomeClassNames.composerSurface,
              composerModeAvailability: composerModeAvailability,
              placeholderText: composerPlaceholder,
              defaultCwd: isProjectlessComposer ? "~" : undefined,
              hotkeyWindowHomeFooterControls: taskSettingsPopover,
              onLocalConversationCreated: conversationCreatedHandler,
            })}
          </div>
        </div>
      </div>
    )
  );
}
function openLocalEnvironmentsSettings() {
  currentAppInitialSharedCompatSlotLowerV.dispatchMessage("show-settings", {
    section: "local-environments",
  });
}
function openConversationFromHotkeyWindow(conversationId) {
  currentAppInitialSharedMember0815.hotkeyWindowHotkeys?.open({
    path: currentAppInitialSharedCompatSlotUpperKLowerT(conversationId),
  });
}
function notifyHotkeyHomeActivated() {
  worktreeNewThreadOrchestratorCompatSlotUpperJLowerU();
}
function notifyPointerInteractivityChanged(isInteractive) {
  currentAppInitialSharedMember0815.hotkeyWindowHotkeys?.homePointerInteractionChanged(
    {
      isInteractive: isInteractive,
    },
  );
}
var layoutFloatingSelectors;
runOnce(() => {
  currentAppInitialSharedCompatSlotLowerGLowerC();
  worktreeNewThreadQueryCompatSlotLowerHLowerH();
  currentAppInitialSharedCompatSlotUpperVLowerO();
  currentAppInitialSharedCompatSlotUpperO();
  intlFormatDateTimeRuntime();
  openAiNativeAppDefinition();
  initCodexCloudAccessRuntime();
  AppShellOverlayOutlet();
  worktreeNewThreadQueryCompatSlotLowerLLowerA();
  initComposerFooterBranchSwitcherChunk();
  initNewThreadComposerFooterRuntime();
  initComposerFooterInlineBranchSwitcherChunk();
  initLazySuspensePlaceholderRuntime();
  worktreeNewThreadQueryCompatSlotUpperDLowerD();
  worktreeNewThreadQueryCompatSlotUpperGLowerL();
  worktreeNewThreadOrchestratorCompatSlotUpperXLowerU();
  initComposerModeDropdownChunk();
  initHomeHeroHeadingChunk();
  initNewThreadComposerFooterControlsRuntime();
  initAboveComposerPortalStore();
  initWorktreeEnvironmentDropdownChunk();
  appServerErrorSchema();
  worktreeNewThreadQueryCompatSlotUpperNLowerF();
  initLocalEnvironmentSelectionRuntime();
  currentAppInitialSharedCompatSlotUnderscore();
  worktreeNewThreadQueryCompatSlotUpperTLowerF();
  currentAppInitialSharedRuntime0710();
  worktreeNewThreadQueryCompatSlotUpperILowerD();
  pullRequestNewThreadCompatSlotLowerDLowerN();
  worktreeNewThreadQueryCompatSlotLowerZLowerM();
  currentAppInitialSharedDisplayRuntime();
  currentAppInitialSharedRuntime0816();
  initWorkspaceRootLabelFormatterRuntime();
  initAppgenLibraryHotRuntime();
  initComposerModeSlashCommandRuntime();
  initComposerModeSlashCommandRegistrarChunk();
  initHotkeyWindowDismissOnEscapeChunk();
  initPointerInteractivityAdapterChunk();
  initHotkeyHomeStylesChunk();
  layoutFloatingSelectors = [
    "[data-composer-overlay-floating-ui]",
    "[data-above-composer-portal] > *",
  ];
})();
