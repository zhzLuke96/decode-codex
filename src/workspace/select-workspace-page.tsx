// Restored from ref/webview/assets/select-workspace-page-Dpe6Qyul.js
// Semantic SelectWorkspacePage implementation with current-ref dependency imports.

import React, {
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
  type SVGProps,
} from "react";
import {
  currentAppInitialSharedCompatSlotUpperE as currentAnalyticsScopeSignal,
  currentAppInitialSharedCompatSlotUpperGLowerO as useWorkspaceQueryWithParams,
  currentAppInitialSharedCompatSlotUpperKLowerO as useSharedSignalValue,
  currentAppInitialSharedCompatSlotUpperYLowerS as useSharedSignalSetter,
  currentAppInitialSharedCompatSlotLowerL as useNamedQuery,
  currentAppInitialSharedCompatSlotLowerNLowerC as useIsFetching,
  currentAppInitialSharedCompatSlotLowerQLowerO as useWorkspaceQuery,
  currentAppInitialSharedCompatSlotLowerQLowerS as useSharedSignalState,
  currentAppInitialSharedCompatSlotLowerR as queryCacheScopeKey,
  currentAppInitialSharedCompatSlotLowerV as electronBridge,
  currentAppInitialSharedCompatSlotLowerY as useElectronMessageSubscription,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import { worktreeNewThreadOrchestratorCompatSlotUpperJLowerO as useCurrentHostManager } from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  Button,
  classNames,
  LoadingSpinnerIcon,
  worktreeNewThreadQueryCompatSlotUpperDLowerP as StartFromScratchIcon,
  worktreeNewThreadQueryCompatSlotUpperFLowerF as useCodexHomeQuery,
  worktreeNewThreadQueryCompatSlotUpperJLowerA as ExistingFolderIcon,
  worktreeNewThreadQueryCompatSlotUpperNLowerO as ProjectSourceMenu,
  worktreeNewThreadQueryCompatSlotUpperOLowerF as gitOriginsForDirsQuery,
  worktreeNewThreadQueryCompatSlotUpperVLowerO as workspaceSelectionController,
  worktreeNewThreadQueryCompatSlotLowerELowerO as MenuWithTrigger,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  appActionPayloadSchema as formatWorkspaceRootDescription,
  currentAppInitialSharedFunction0375 as useIntl,
  currentAppInitialSharedMember0086 as addWorkspaceFromModalEvent,
  currentAppInitialSharedMember0090 as desktopHostId,
  currentAppInitialSharedMember0875 as isConversationOutsideCurrentHost,
  FormattedMessage,
  logProductEvent,
  useWorkspaceNavigation,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  localWorkspaceRootOptionsQuery,
  useRecentConversationsQuery,
} from "../runtime/current-app-initial/pull-request-new-thread-runtime";
import {
  getWorkspaceOnboardingPlaygroundName,
  isModalCopyCtaPlaygroundArm,
  lastCompletedOnboardingAtom,
  onboardingOverrideAtom,
  useWorkspaceOnboardingAutoLaunch,
} from "../runtime/current-app-initial/onboarding-select-workspace-current-runtime";
import {
  ExternalAgentImportScrollableList as WorkspaceOptionList,
  ExternalAgentImportSelectableRow as WorkspaceOptionRow,
  EXTERNAL_AGENT_IMPORT_CHECKBOX_CLASS_NAME as workspaceCheckboxClassName,
  OnboardingImportLayout,
} from "../runtime/current-app-initial/general-appearance-current-runtime";
import { NotebookPlusIcon } from "../icons/notebook-plus-icon";
import {
  buildWorkspaceOption,
  compareStrings,
  countSelectedRoots,
  getRootsFromTasks,
  getSuggestedWorkspaceRoots,
  logWorkspaceSelectionChanged,
  logWorkspaceSelectionSubmitted,
  normalizeRootKey,
  parseWorkspaceRootForComparison,
  toLocalOnboardingTask,
  uniqueBy,
  type GitOrigin,
  type RecentConversation,
  type SelectionMap,
  type WorkspaceOption,
} from "./select-workspace-page-helpers";
import { initSelectWorkspacePageRuntime } from "./select-workspace-page-runtime";

type SelectWorkspaceRootMessage = {
  root: string;
};

type SkipWorkspaceResultMessage = {
  error?: string;
  success: boolean;
};

type AddProjectButtonProps = {
  className?: string;
  color?: string;
  isRemoteHost: boolean;
  onStartFromScratch: () => void;
  onUseExistingFolder: () => void;
  size?: string;
};

type ProjectSourceMenuProps = {
  children?: ReactNode;
  localProjectSourcesEnabled?: boolean;
  onOpenChange?: (open: boolean) => void;
  onStartFromScratch: () => void;
  onUseExistingFolder: () => void;
  open?: boolean;
  triggerButton: ReactNode;
};

type PageFrameProps = {
  children: ReactNode;
  showIcon: boolean;
};

type EmptyWorkspaceStateProps = {
  handleOpenFolder: () => void;
  handleSkip: () => void;
  isRemoteHost: boolean;
  isSkipPending: boolean;
  skipErrorMessage: string | null;
  workspaceOnboardingExperimentArm: unknown;
};

type WorkspaceSelectionStateProps = EmptyWorkspaceStateProps & {
  availableOptions: WorkspaceOption[];
  handleContinue: () => void;
  handleToggleSelectAll: (checked: boolean) => void;
  handleToggleWorkspace: (root: string, checked: boolean) => void;
  hasAvailableRoots: boolean;
  hasSelectedRoots: boolean;
  intl: {
    formatMessage(message: {
      defaultMessage: string;
      description?: string;
      id: string;
    }): string;
  };
  isLoadingRoots: boolean;
  selectAllState: boolean;
  selectedRoots: string[];
};

type WorkspaceOptionItemProps = {
  index: number;
  isDisabled: boolean;
  isSelected: boolean;
  onToggle: (root: string, checked: boolean) => void;
  option: WorkspaceOption;
  skipExistenceCheck: boolean;
};

function SelectWorkspacePage(): ReactElement {
  const navigate = useWorkspaceNavigation();
  const analyticsScope = useSharedSignalValue(currentAnalyticsScopeSignal);
  const intl = useIntl();
  const [onboardingOverride, setOnboardingOverride] = useSharedSignalState(
    onboardingOverrideAtom,
  ) as [string | null, (value: string) => void];
  const setLastCompletedOnboarding = useSharedSignalSetter(
    lastCompletedOnboardingAtom,
  ) as (value: number) => void;
  const recentConversationsQuery = useRecentConversationsQuery() as {
    data?: RecentConversation[];
    isFetching?: boolean;
  };
  const recentConversations = recentConversationsQuery.data ?? [];
  const currentHostManager = useCurrentHostManager();
  const conversationsForHost = recentConversations
    .filter(
      (conversation) =>
        !isConversationOutsideCurrentHost(conversation, currentHostManager),
    )
    .map(toLocalOnboardingTask);
  const workspaceRootsQuery = useWorkspaceQuery(
    localWorkspaceRootOptionsQuery,
  ) as {
    data?: { labels?: Record<string, string>; roots?: string[] };
    isFetching?: boolean;
  };
  const taskRoots = getRootsFromTasks(conversationsForHost);
  const gitOriginsQuery = useWorkspaceQueryWithParams(gitOriginsForDirsQuery, {
    params: {
      dirs: uniqueBy(taskRoots, normalizeRootKey).sort(compareStrings),
    },
    source: "onboarding_workspace_select",
  }) as { data?: { origins?: GitOrigin[] }; isFetching?: boolean };
  const codexHomeQuery = useCodexHomeQuery() as {
    data?: { codexHome?: string };
    isFetching?: boolean;
  };
  const {
    autoLaunchAction,
    isRemoteHost,
    setWorkspaceOnboardingAutoLaunchApplied,
    workspaceOnboardingExperimentArm,
  } = useWorkspaceOnboardingAutoLaunch();
  const [addedRoots, setAddedRoots] = useState<string[]>([]);
  const [selectedByRoot, setSelectedByRoot] = useState<SelectionMap>({});
  const [isSkipPending, setIsSkipPending] = useState(false);
  const [skipErrorMessage, setSkipErrorMessage] = useState<string | null>(null);
  const autoSkipStartedRef = useRef(false);
  const focusComposerNonceRef = useRef(0);
  const autoNavigationStartedRef = useRef(false);
  const unknownSkipError = intl.formatMessage({
    id: "electron.onboarding.workspace.skip.error.unknown",
    defaultMessage: "Unknown error",
    description:
      "Fallback error message when onboarding skip fails without details",
  });
  const savedRoots = workspaceRootsQuery.data?.roots;
  const hasSavedRoots = savedRoots != null && savedRoots.length > 0;
  const inferredRoots = getSuggestedWorkspaceRoots({
    codexHome: codexHomeQuery.data?.codexHome,
    gitOrigins: gitOriginsQuery.data?.origins,
    tasks: conversationsForHost,
  });
  const candidateRoots = uniqueBy(
    [...(savedRoots ?? []), ...inferredRoots, ...addedRoots],
    normalizeRootKey,
  ).sort(compareStrings);
  const workspaceOptions = candidateRoots.map((root) =>
    buildWorkspaceOption(root, workspaceRootsQuery.data?.labels),
  );
  const workspaceRootPaths = workspaceOptions.map((option) => option.root);
  const selectedRoots = workspaceRootPaths.filter(
    (root) => selectedByRoot[root] === true,
  );
  const selectAllState =
    workspaceRootPaths.length > 0 &&
    selectedRoots.length === workspaceRootPaths.length
      ? true
      : false;
  const hasSomeSelectedRoots = selectedRoots.length > 0;

  const handleWorkspaceRootPicked = (message: SelectWorkspaceRootMessage) => {
    setAddedRoots((currentRoots) =>
      uniqueBy([...currentRoots, message.root], normalizeRootKey),
    );
    const nextSelectedRoots = {
      ...selectedByRoot,
      [message.root]: true,
    };
    setSelectedByRoot(nextSelectedRoots);
    const rootAlreadyListed = workspaceRootPaths.includes(message.root);
    logWorkspaceSelectionChanged(analyticsScope, {
      action: "toggle_root",
      checked: true,
      experimentArm: workspaceOnboardingExperimentArm,
      selectedWorkspacesCount:
        countSelectedRoots(nextSelectedRoots, workspaceRootPaths) +
        (rootAlreadyListed ? 0 : 1),
      totalWorkspacesCount: rootAlreadyListed
        ? workspaceRootPaths.length
        : workspaceRootPaths.length + 1,
    });
  };
  useElectronMessageSubscription(
    "workspace-root-option-picked",
    handleWorkspaceRootPicked,
  );

  const handleSkipWorkspaceResult = (message: SkipWorkspaceResultMessage) => {
    setIsSkipPending(false);
    if (message.success) {
      logWorkspaceSelectionSubmitted(analyticsScope, {
        autoNavigated: false,
        experimentArm: workspaceOnboardingExperimentArm,
        selectedWorkspacesCount: 1,
        totalWorkspacesCount: workspaceRootPaths.length,
      });
      setSkipErrorMessage(null);
      setLastCompletedOnboarding(Math.floor(Date.now() / 1000));
      setOnboardingOverride("auto");
      return;
    }
    setSkipErrorMessage(message.error ?? unknownSkipError);
  };
  useElectronMessageSubscription(
    "electron-onboarding-skip-workspace-result",
    handleSkipWorkspaceResult,
  );

  const handleOpenFolder = () => {
    setSkipErrorMessage(null);
    logProductEvent(analyticsScope, addWorkspaceFromModalEvent, {
      experimentArm: workspaceOnboardingExperimentArm,
      hasExistingWorkspaces: hasSavedRoots,
      source: "onboarding_modal",
    });
    electronBridge.dispatchMessage("electron-pick-workspace-root-option", {
      allowMultiple: false,
    });
  };

  const handleSkip = () => {
    if (isSkipPending) return;
    setSkipErrorMessage(null);
    setIsSkipPending(true);
    const playgroundName = getWorkspaceOnboardingPlaygroundName(
      workspaceOnboardingExperimentArm,
    );
    electronBridge.dispatchMessage(
      "electron-onboarding-skip-workspace",
      playgroundName == null ? {} : { projectName: playgroundName },
    );
  };
  const handleSkipEvent = useEffectEvent(() => {
    handleSkip();
  });

  const handleToggleWorkspace = (root: string, checked: boolean) => {
    setSkipErrorMessage(null);
    setAddedRoots((currentRoots) =>
      uniqueBy([...currentRoots, root], normalizeRootKey),
    );
    const nextSelectedRoots = {
      ...selectedByRoot,
      [root]: checked,
    };
    setSelectedByRoot(nextSelectedRoots);
    logWorkspaceSelectionChanged(analyticsScope, {
      action: "toggle_root",
      checked,
      experimentArm: workspaceOnboardingExperimentArm,
      selectedWorkspacesCount: countSelectedRoots(
        nextSelectedRoots,
        workspaceRootPaths,
      ),
      totalWorkspacesCount: workspaceRootPaths.length,
    });
  };

  const handleToggleSelectAll = (checked: boolean) => {
    setSkipErrorMessage(null);
    const nextSelectedRoots: SelectionMap = { ...selectedByRoot };
    for (const root of workspaceRootPaths) nextSelectedRoots[root] = checked;
    setSelectedByRoot(nextSelectedRoots);
    logWorkspaceSelectionChanged(analyticsScope, {
      action: "select_all",
      checked,
      experimentArm: workspaceOnboardingExperimentArm,
      selectedWorkspacesCount: countSelectedRoots(
        nextSelectedRoots,
        workspaceRootPaths,
      ),
      totalWorkspacesCount: workspaceRootPaths.length,
    });
  };

  const pathExistenceFetchCount = useIsFetching({
    queryKey: [queryCacheScopeKey, "paths-exist"],
  }) as number;
  const isLoadingRoots =
    recentConversationsQuery.isFetching ||
    workspaceRootsQuery.isFetching ||
    gitOriginsQuery.isFetching ||
    codexHomeQuery.isFetching ||
    pathExistenceFetchCount > 0;
  const hasAvailableRoots = workspaceOptions.length > 0;
  const hasExistingOrSuggestedRoots = hasSavedRoots || inferredRoots.length > 0;
  const shouldShowEmptyState =
    !hasExistingOrSuggestedRoots && !isLoadingRoots && !hasAvailableRoots;

  const continueWithRoots = (
    rootsToSelect: string[],
    autoNavigated: boolean,
  ) => {
    logWorkspaceSelectionSubmitted(analyticsScope, {
      autoNavigated,
      experimentArm: workspaceOnboardingExperimentArm,
      selectedWorkspacesCount: rootsToSelect.length,
      totalWorkspacesCount: workspaceRootPaths.length,
    });
    let nextRoots = rootsToSelect;
    setLastCompletedOnboarding(Math.floor(Date.now() / 1000));
    if (onboardingOverride === "workspace" && savedRoots != null) {
      nextRoots = uniqueBy([...savedRoots, ...rootsToSelect], normalizeRootKey);
    }
    electronBridge.dispatchMessage("electron-update-workspace-root-options", {
      roots: nextRoots,
    });
    setOnboardingOverride("auto");
    focusComposerNonceRef.current += 1;
    workspaceSelectionController.select(analyticsScope, {
      path: rootsToSelect[0],
      projectId: rootsToSelect[0],
    });
    navigate("/", {
      replace: true,
      state: {
        focusComposerNonce: focusComposerNonceRef.current,
      },
    });
  };

  useEffect(() => {
    if (
      autoSkipStartedRef.current ||
      isLoadingRoots ||
      autoLaunchAction !== "select_workspace_skip_to_playground"
    ) {
      return;
    }
    autoSkipStartedRef.current = true;
    setWorkspaceOnboardingAutoLaunchApplied(true);
    handleSkipEvent();
  }, [
    autoLaunchAction,
    isLoadingRoots,
    setWorkspaceOnboardingAutoLaunchApplied,
  ]);

  useEffect(() => {
    if (
      hasExistingOrSuggestedRoots ||
      autoNavigationStartedRef.current ||
      isLoadingRoots ||
      selectedRoots.length === 0
    ) {
      return;
    }
    autoNavigationStartedRef.current = true;
    continueWithRoots(selectedRoots, true);
  }, [
    continueWithRoots,
    hasExistingOrSuggestedRoots,
    isLoadingRoots,
    selectedRoots,
  ]);

  const handleContinue = () => {
    setSkipErrorMessage(null);
    continueWithRoots(selectedRoots, false);
  };

  return (
    <OnboardingImportLayout>
      {shouldShowEmptyState ? (
        <EmptyWorkspaceState
          workspaceOnboardingExperimentArm={workspaceOnboardingExperimentArm}
          isRemoteHost={isRemoteHost}
          handleOpenFolder={handleOpenFolder}
          handleSkip={handleSkip}
          isSkipPending={isSkipPending}
          skipErrorMessage={skipErrorMessage}
        />
      ) : (
        <WorkspaceSelectionState
          availableOptions={workspaceOptions}
          handleContinue={handleContinue}
          handleOpenFolder={handleOpenFolder}
          handleSkip={handleSkip}
          handleToggleSelectAll={handleToggleSelectAll}
          handleToggleWorkspace={handleToggleWorkspace}
          hasAvailableRoots={hasAvailableRoots}
          hasSelectedRoots={hasSomeSelectedRoots}
          intl={intl}
          isLoadingRoots={Boolean(isLoadingRoots)}
          isRemoteHost={isRemoteHost}
          isSkipPending={isSkipPending}
          selectAllState={selectAllState}
          selectedRoots={selectedRoots}
          skipErrorMessage={skipErrorMessage}
          workspaceOnboardingExperimentArm={workspaceOnboardingExperimentArm}
        />
      )}
    </OnboardingImportLayout>
  );
}

function ProjectSourceMenuWrapper({
  children,
  localProjectSourcesEnabled = false,
  onOpenChange,
  onStartFromScratch,
  onUseExistingFolder,
  open,
  triggerButton,
}: ProjectSourceMenuProps): ReactElement {
  const shouldStartFromScratchRef = useRef(false);
  const handleCloseAutoFocus = (event: { preventDefault(): void }) => {
    if (!shouldStartFromScratchRef.current) return;
    shouldStartFromScratchRef.current = false;
    event.preventDefault();
    onStartFromScratch();
  };

  const menuItems = localProjectSourcesEnabled ? (
    <ProjectSourceMenu.Item
      LeftIcon={NotebookPlusIcon}
      onSelect={() => {
        shouldStartFromScratchRef.current = true;
      }}
    >
      <FormattedMessage
        id="projectSetup.addProjectMenu.localProject"
        defaultMessage="Local project"
        description="Menu item that opens the local project creation flow"
      />
    </ProjectSourceMenu.Item>
  ) : (
    <>
      <ProjectSourceMenu.Item
        LeftIcon={StartFromScratchIcon}
        onSelect={() => {
          shouldStartFromScratchRef.current = true;
        }}
      >
        <FormattedMessage
          id="projectSetup.addProjectMenu.startFromScratch"
          defaultMessage="Start from scratch"
          description="Menu item that creates a new local project folder"
        />
      </ProjectSourceMenu.Item>
      <ProjectSourceMenu.Item
        LeftIcon={ExistingFolderIcon}
        onSelect={onUseExistingFolder}
      >
        <FormattedMessage
          id="projectSetup.addProjectMenu.useExistingFolder"
          defaultMessage="Use an existing folder"
          description="Menu item that opens the existing folder picker"
        />
      </ProjectSourceMenu.Item>
    </>
  );

  return (
    <MenuWithTrigger
      triggerButton={triggerButton}
      contentWidth="menu"
      onOpenChange={onOpenChange}
      onCloseAutoFocus={handleCloseAutoFocus}
      open={open}
    >
      {menuItems}
      {children}
    </MenuWithTrigger>
  );
}

function AddProjectButton({
  className,
  color,
  isRemoteHost,
  onStartFromScratch,
  onUseExistingFolder,
  size,
}: AddProjectButtonProps): ReactElement {
  const remoteHostClickHandler = isRemoteHost ? onUseExistingFolder : undefined;
  const triggerButton = (
    <Button
      className={className}
      color={color}
      size={size}
      onClick={remoteHostClickHandler}
    >
      <FormattedMessage
        id="electron.onboarding.workspace.openFolder"
        defaultMessage="Add project"
        description="Button label to add a workspace during desktop onboarding"
      />
    </Button>
  );

  if (isRemoteHost) return triggerButton;
  return (
    <ProjectSourceMenuWrapper
      triggerButton={triggerButton}
      onStartFromScratch={onStartFromScratch}
      onUseExistingFolder={onUseExistingFolder}
    />
  );
}

function PageFrame({ children, showIcon }: PageFrameProps): ReactElement {
  return (
    <OnboardingImportLayout
      className="max-w-[330px]"
      icon={
        showIcon ? (
          <SelectProjectIcon className="h-10 w-10" aria-hidden="true" />
        ) : null
      }
      textClassName="gap-6"
      title={
        <FormattedMessage
          id="electron.onboarding.workspace.title"
          defaultMessage="Select a project"
          description="Title on the desktop onboarding workspace selection page"
        />
      }
      subtitle={
        <FormattedMessage
          id="electron.onboarding.workspace.subtitle"
          defaultMessage="Codex will be able to edit files and run commands in selected folders."
          description="Subtitle on the desktop onboarding workspace selection page"
        />
      }
    >
      {children}
    </OnboardingImportLayout>
  );
}

function EmptyWorkspaceState({
  handleOpenFolder,
  handleSkip,
  isRemoteHost,
  isSkipPending,
  skipErrorMessage,
  workspaceOnboardingExperimentArm,
}: EmptyWorkspaceStateProps): ReactElement {
  const addProjectColor = isModalCopyCtaPlaygroundArm(
    workspaceOnboardingExperimentArm,
  )
    ? "outline"
    : "primary";
  return (
    <PageFrame showIcon>
      <div className="flex w-full flex-col gap-3">
        <AddProjectButton
          className="w-full justify-center py-2.5"
          color={addProjectColor}
          isRemoteHost={isRemoteHost}
          onStartFromScratch={handleSkip}
          onUseExistingFolder={handleOpenFolder}
        />
        {!isRemoteHost ? (
          <SkipWorkspaceButton
            handleSkip={handleSkip}
            isSkipPending={isSkipPending}
            skipErrorMessage={skipErrorMessage}
            workspaceOnboardingExperimentArm={workspaceOnboardingExperimentArm}
          />
        ) : null}
      </div>
    </PageFrame>
  );
}

function WorkspaceSelectionState({
  availableOptions,
  handleContinue,
  handleOpenFolder,
  handleSkip,
  handleToggleSelectAll,
  handleToggleWorkspace,
  hasAvailableRoots,
  hasSelectedRoots,
  intl,
  isLoadingRoots,
  isRemoteHost,
  isSkipPending,
  selectAllState,
  selectedRoots,
  skipErrorMessage,
  workspaceOnboardingExperimentArm,
}: WorkspaceSelectionStateProps): ReactElement {
  const selectedRootSet = new Set(selectedRoots);
  const isContinueDisabled = !hasSelectedRoots || isLoadingRoots;
  return (
    <PageFrame showIcon={false}>
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full flex-col gap-2">
          {isLoadingRoots ? (
            <div className="bg-token-surface-primary flex w-full items-center justify-center gap-2 rounded-2xl border border-token-border px-5 py-6">
              <LoadingSpinnerIcon className="h-4 w-4 text-token-foreground" />
              <span className="text-sm text-token-description-foreground">
                <FormattedMessage
                  id="electron.onboarding.workspace.loading"
                  defaultMessage="Loading projects..."
                  description="Loading state while onboarding workspace options are fetched"
                />
              </span>
            </div>
          ) : null}
          {hasAvailableRoots ? (
            <WorkspaceOptionList
              className={classNames(
                isLoadingRoots && "pointer-events-none opacity-50",
              )}
              ariaLabel={intl.formatMessage({
                id: "electron.onboarding.workspace.listLabel",
                defaultMessage: "Available projects",
                description:
                  "Aria label for the available workspaces list during onboarding",
              })}
            >
              <WorkspaceOptionRow
                checkboxId="workspace-root-select-all"
                checkboxClassName={workspaceCheckboxClassName}
                checked={selectAllState}
                disabled={isLoadingRoots}
                onCheckedChange={(checked: boolean) => {
                  handleToggleSelectAll(Boolean(checked));
                }}
                label={
                  <FormattedMessage
                    id="electron.onboarding.workspace.selectAll"
                    defaultMessage="Select all"
                    description="Checkbox label for selecting all workspaces during onboarding"
                  />
                }
              />
              {availableOptions.map((option, index) => (
                <WorkspaceRootOptionRow
                  key={option.root}
                  index={index}
                  isDisabled={isLoadingRoots}
                  isSelected={selectedRootSet.has(option.root)}
                  skipExistenceCheck={isRemoteHost}
                  option={option}
                  onToggle={handleToggleWorkspace}
                />
              ))}
            </WorkspaceOptionList>
          ) : (
            <div className="text-center text-sm text-token-description-foreground">
              <FormattedMessage
                id="electron.onboarding.workspace.empty"
                defaultMessage="Add a project to continue."
                description="Empty state shown when no workspaces are selected during onboarding"
              />
            </div>
          )}
        </div>
        <div className="flex w-full flex-col gap-3">
          <div className="flex w-full items-center gap-4">
            <AddProjectButton
              className="flex-1 justify-center border-token-button-border bg-transparent text-base leading-6 font-medium whitespace-nowrap enabled:hover:bg-token-foreground/5"
              color="outline"
              size="large"
              isRemoteHost={isRemoteHost}
              onStartFromScratch={handleSkip}
              onUseExistingFolder={handleOpenFolder}
            />
            <Button
              className="flex-1 justify-center text-base leading-6 font-medium"
              color="primary"
              size="large"
              disabled={isContinueDisabled}
              onClick={handleContinue}
            >
              <FormattedMessage
                id="electron.onboarding.workspace.continue"
                defaultMessage="Continue"
                description="Button label to continue after selecting workspaces during onboarding"
              />
            </Button>
          </div>
          {!isRemoteHost ? (
            <SkipWorkspaceButton
              handleSkip={handleSkip}
              isSkipPending={isSkipPending}
              skipErrorMessage={skipErrorMessage}
              workspaceOnboardingExperimentArm={
                workspaceOnboardingExperimentArm
              }
            />
          ) : null}
        </div>
      </div>
    </PageFrame>
  );
}

function SkipWorkspaceButton({
  handleSkip,
  isSkipPending,
  skipErrorMessage,
  workspaceOnboardingExperimentArm,
}: {
  handleSkip: () => void;
  isSkipPending: boolean;
  skipErrorMessage: string | null;
  workspaceOnboardingExperimentArm: unknown;
}): ReactElement {
  const isPlaygroundArm = isModalCopyCtaPlaygroundArm(
    workspaceOnboardingExperimentArm,
  );
  const buttonLabel = isSkipPending ? (
    isPlaygroundArm ? (
      <FormattedMessage
        id="electron.onboarding.workspace.skipping.playground"
        defaultMessage="Opening playground..."
        description="Button label shown while opening Playground during onboarding workspace flow"
      />
    ) : (
      <FormattedMessage
        id="electron.onboarding.workspace.skipping"
        defaultMessage="Creating a new project..."
        description="Button label shown while creating a new project during onboarding"
      />
    )
  ) : isPlaygroundArm ? (
    <FormattedMessage
      id="electron.onboarding.workspace.skip.playground"
      defaultMessage="Continue to playground"
      description="Button label to continue to Playground during onboarding"
    />
  ) : (
    <FormattedMessage
      id="electron.onboarding.workspace.skip"
      defaultMessage="Skip"
      description="Button label to skip workspace selection during onboarding"
    />
  );

  return (
    <div className="flex w-full flex-col items-center gap-2">
      {skipErrorMessage == null ? null : (
        <div className="text-center text-sm text-token-error-foreground">
          <FormattedMessage
            id="electron.onboarding.workspace.skip.error"
            defaultMessage="Couldn't create a new project: {message}"
            description="Error shown when creating a new project fails during onboarding"
            values={{ message: skipErrorMessage }}
          />
        </div>
      )}
      <Button
        className="w-full justify-center text-base leading-6 font-medium"
        color="ghost"
        size="large"
        disabled={isSkipPending}
        onClick={handleSkip}
      >
        {buttonLabel}
      </Button>
    </div>
  );
}

function WorkspaceRootOptionRow({
  index,
  isDisabled,
  isSelected,
  onToggle,
  option,
  skipExistenceCheck,
}: WorkspaceOptionItemProps): ReactElement | null {
  const root = option.root;
  const description = formatWorkspaceRootDescription(root);
  const normalizedRoot = parseWorkspaceRootForComparison(root);
  const queryParams = {
    hostId: desktopHostId,
    paths: [root],
  };
  const placeholderData = {
    existingPaths: [root],
  };
  const pathsExistQuery = useNamedQuery("paths-exist", {
    params: queryParams,
    placeholderData,
    queryConfig: {
      enabled: !skipExistenceCheck,
    },
  }) as { data?: { existingPaths?: string[] } };
  const rootExists =
    skipExistenceCheck ||
    (pathsExistQuery.data?.existingPaths ?? []).some(
      (existingPath) =>
        parseWorkspaceRootForComparison(existingPath) === normalizedRoot,
    );
  if (!rootExists) return null;
  const checkboxId = `workspace-root-${index}`;
  return (
    <WorkspaceOptionRow
      checkboxId={checkboxId}
      checkboxClassName={workspaceCheckboxClassName}
      checked={isSelected}
      disabled={isDisabled}
      onCheckedChange={(checked: boolean) => {
        onToggle(root, Boolean(checked));
      }}
      label={option.label}
      description={description}
    />
  );
}

function SelectProjectIcon(props: SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.2041 17.5V15.665H13.3691C13.0019 15.665 12.7041 15.3673 12.7041 15C12.7041 14.6327 13.0019 14.335 13.3691 14.335H15.2041V12.5C15.2041 12.1327 15.5019 11.835 15.8691 11.835C16.2362 11.8352 16.5332 12.1329 16.5332 12.5V14.335H18.3691C18.7362 14.3352 19.0332 14.6329 19.0332 15C19.0332 15.3671 18.7362 15.6648 18.3691 15.665H16.5332V17.5C16.5332 17.8671 16.2362 18.1648 15.8691 18.165C15.5019 18.165 15.2041 17.8673 15.2041 17.5ZM2.12012 12.7002V7.29981C2.12012 6.64581 2.11922 6.1149 2.1543 5.68555C2.19002 5.24867 2.26619 4.85832 2.45117 4.49512L2.56836 4.28516C2.86045 3.80898 3.27979 3.42103 3.78028 3.16602L3.91797 3.10156C4.24192 2.96268 4.5885 2.90039 4.97071 2.86914C5.40006 2.83406 5.93096 2.83496 6.58496 2.83496H7.28028C7.42346 2.83496 7.52305 2.83479 7.6211 2.84082L7.875 2.86719C8.46133 2.95309 9.01189 3.20874 9.45703 3.60547L9.70215 3.84473C9.81425 3.95779 9.85105 3.99455 9.88672 4.02637L9.99805 4.11719C10.2646 4.31741 10.5851 4.43638 10.9199 4.45703L11.1797 4.45996H13.6914C14.2499 4.45996 14.703 4.45958 15.0713 4.48535C15.4458 4.51157 15.7828 4.56683 16.1025 4.70313L16.3662 4.83106C16.9638 5.15706 17.4378 5.67623 17.707 6.30762L17.7939 6.54981C17.868 6.79538 17.904 7.05317 17.9238 7.33203C17.9498 7.69789 17.9502 8.14747 17.9502 8.7002C17.9501 8.87631 17.8803 9.0453 17.7559 9.16992C17.6311 9.29464 17.4615 9.36524 17.2852 9.36524H3.4502V12.7002C3.4502 13.3761 3.45084 13.8434 3.48047 14.2061C3.50947 14.5608 3.56304 14.7568 3.63672 14.9014L3.70215 15.0195C3.86642 15.2873 4.10236 15.505 4.38379 15.6484L4.50391 15.7002C4.63661 15.7476 4.81329 15.783 5.0791 15.8047C5.44174 15.8343 5.90903 15.835 6.58496 15.835H9.40918L9.54395 15.8486C9.84681 15.9108 10.0742 16.1788 10.0742 16.5C10.0742 16.8212 9.84681 17.0892 9.54395 17.1514L9.40918 17.165H6.58496C5.93096 17.165 5.40006 17.1659 4.97071 17.1309C4.5885 17.0996 4.24192 17.0373 3.91797 16.8984L3.78028 16.834C3.27979 16.579 2.86045 16.191 2.56836 15.7148L2.45117 15.5049C2.26619 15.1417 2.19002 14.7513 2.1543 14.3145C2.11922 13.8851 2.12012 13.3542 2.12012 12.7002ZM3.4502 8.03516H16.6172C16.6146 7.79548 16.6098 7.59777 16.5977 7.42676C16.5816 7.20054 16.5552 7.04845 16.5205 6.9336L16.4834 6.8291C16.332 6.47411 16.0655 6.1824 15.7295 5.99903L15.5811 5.92676C15.4545 5.8728 15.2835 5.83385 14.9785 5.8125C14.6674 5.79073 14.2686 5.79004 13.6914 5.79004H11.1797L10.8379 5.78418C10.2426 5.74746 9.67313 5.53663 9.19922 5.18067L9.00196 5.01953C8.92848 4.95403 8.85889 4.88222 8.75781 4.78028L8.57227 4.59863C8.32169 4.37525 8.01175 4.23086 7.68164 4.18262L7.54004 4.16797C7.49225 4.16502 7.43987 4.16504 7.28028 4.16504H6.58496C5.90903 4.16504 5.44174 4.16569 5.0791 4.19531C4.81329 4.21705 4.63661 4.25237 4.50391 4.29981L4.38379 4.35156C4.10236 4.49499 3.86642 4.71271 3.70215 4.98047L3.63672 5.09863C3.56304 5.24324 3.50947 5.43924 3.48047 5.79395C3.45084 6.15659 3.4502 6.62388 3.4502 7.29981V8.03516Z"
        fill="currentColor"
      />
    </svg>
  );
}

initSelectWorkspacePageRuntime();

export { SelectWorkspacePage };
