// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// "New remote project" / "Choose folder path" dialog: lets the user pick a connected
// remote host and a folder on it, validates the path, blocks submission with a typed
// notice when the selection is unusable, and either maps the folder as a standalone
// sidebar project or answers a host workspace-root request. Labelled
// "[remote-connections/mapping]" in host logs.
import {
  useState,
  type ComponentType,
  type FormEvent,
  type ReactElement,
  type ReactNode,
} from "react";
import {
  defineMessage,
  FormattedMessage,
  useIntl,
  type MessageDescriptor,
  type PrimitiveType,
} from "../vendor/react-intl";
import clsx from "clsx";
import {
  appStore,
  Button,
  CheckmarkIcon,
  ChevronDownIcon,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogSection,
  Dropdown,
  ErrorIcon,
  findRemoteProjectForPath,
  getRemoteProjectLabelFromPath,
  getSelectableRemoteHosts,
  hostMessageBridge,
  invokeAppServerRequest,
  isAbsoluteRemotePath,
  isSshConnection,
  isWslConnection,
  logger,
  logRemoteSshConnectionEvent,
  Menu,
  normalizeRemotePath,
  ProjectStorageKey,
  RemoteDirectoryPathInput,
  remoteConnectionsStateSignal,
  RemoteHostIcon,
  RemoteSshConnectionAction,
  RemoteSshConnectionErrorCategory,
  RemoteSshConnectionEventSource,
  RemoteSshConnectionResult,
  remoteSshConnectionAnalyticsSignal,
  toastNotificationAtom,
  toComparableRemotePath,
  useAppServerQuery,
  useHostMessageHandler,
  useIsRemoteProjectsEnabled,
  useIsWorkspaceOnboardingActive,
  usePersistedValue,
  useSignalValue,
  useStore,
  WarningIcon,
  writePersistedValue,
} from "../boundaries/onboarding-commons-externals.facade";

const MAPPING_LOG_LABEL = "[remote-connections/mapping]";

type SubmitBlockerKind =
  | "no-connected-remote"
  | "selected-remote-unavailable"
  | "invalid-path"
  | "path-validation-pending"
  | "conflicting-remote-project";

interface SubmitBlocker {
  kind: SubmitBlockerKind;
}

type RemotePathValidation = "pending" | "valid" | "invalid";

interface RemoteHostConnection {
  hostId: string;
  displayName: string;
  sshAlias?: string;
  sshHost?: string;
  distro?: string;
  os?: string;
  arch?: string;
}

type RemoteProjectDialogState =
  | {
      mode: "setup";
      initialDirectoryPath: string | null;
      selectedHostId: string | null;
      setActive?: boolean;
    }
  | {
      mode: "choose-remote-folder";
      host: string;
      initialDirectoryPath: string | null;
      selectedHostId: string | null;
    };

interface BlockerNotice {
  message: MessageDescriptor;
  tone: "warning" | "danger";
  values?: Record<string, PrimitiveType>;
}

type SubmitState =
  | { kind: "ready" }
  | { kind: "blocked"; notice: BlockerNotice };

// Availability check shared by both dialog modes: is a connected remote selected and
// does it point at a valid, fully validated folder?
function computeRemoteAvailabilityBlocker({
  hasConnectedRemoteConnections,
  comparableRemoteProjectPath,
  remoteProjectPathValidation,
  selectedConnection,
}: {
  hasConnectedRemoteConnections: boolean;
  comparableRemoteProjectPath: string | null;
  remoteProjectPathValidation: RemotePathValidation;
  selectedConnection: RemoteHostConnection | null;
}): SubmitBlocker | null {
  if (!hasConnectedRemoteConnections) return { kind: "no-connected-remote" };
  if (selectedConnection == null)
    return { kind: "selected-remote-unavailable" };
  if (comparableRemoteProjectPath == null) return { kind: "invalid-path" };
  if (remoteProjectPathValidation === "pending")
    return { kind: "path-validation-pending" };
  if (remoteProjectPathValidation === "invalid")
    return { kind: "invalid-path" };
  return null;
}

// Setup mode additionally blocks when the folder is already mapped to another project.
function computeRemoteProjectSetupBlocker({
  hasConnectedRemoteConnections,
  comparableRemoteProjectPath,
  remoteProjectPathValidation,
  selectedConnection,
  isRemoteProjectAlreadySetUp,
}: {
  hasConnectedRemoteConnections: boolean;
  comparableRemoteProjectPath: string | null;
  remoteProjectPathValidation: RemotePathValidation;
  selectedConnection: RemoteHostConnection | null;
  isRemoteProjectAlreadySetUp: boolean;
}): SubmitBlocker | null {
  return (
    computeRemoteAvailabilityBlocker({
      hasConnectedRemoteConnections,
      comparableRemoteProjectPath,
      remoteProjectPathValidation,
      selectedConnection,
    }) ??
    (isRemoteProjectAlreadySetUp
      ? { kind: "conflicting-remote-project" }
      : null)
  );
}

// Maps a submit blocker to the message + tone shown under the form.
function getSubmitBlockerNotice({
  conflictingProjectName,
  remoteName,
  submitBlocker,
}: {
  conflictingProjectName: string | null;
  remoteName: string | null;
  submitBlocker: SubmitBlocker | null;
}): BlockerNotice | null {
  if (submitBlocker != null)
    switch (submitBlocker.kind) {
      case "no-connected-remote":
        return {
          message: defineMessage({
            id: "projectSetupDialog.noConnectedRemotes",
            defaultMessage: "No remote hosts are connected right now.",
            description:
              "Message shown in the remote project setup dialog when no remote hosts are connected",
          }),
          tone: "warning",
        };
      case "selected-remote-unavailable":
        return {
          message: defineMessage({
            id: "projectSetupDialog.selectedRemoteUnavailable",
            defaultMessage: "Choose a connected remote host to continue.",
            description:
              "Message shown when the selected remote host is no longer available for project setup",
          }),
          tone: "warning",
        };
      case "invalid-path":
        return {
          message: defineMessage({
            id: "projectSetupDialog.invalidPath.missing",
            defaultMessage: "Choose an existing folder on this remote host.",
            description:
              "Message shown when the selected remote project path is missing or invalid",
          }),
          tone: "danger",
        };
      case "path-validation-pending":
        return null;
      case "conflicting-remote-project":
        return conflictingProjectName == null || remoteName == null
          ? null
          : {
              message: defineMessage({
                id: "projectSetupDialog.conflict.remoteProjectAlreadyMapped.standalone",
                defaultMessage:
                  "This remote project on {remoteName} is already set up for {projectName}. Choose a different folder or remove that setup first.",
                description:
                  "Warning shown when the selected remote project is already set up for a different sidebar project on the same host while creating a standalone project",
              }),
              tone: "danger",
              values: { projectName: conflictingProjectName, remoteName },
            };
    }
  return null;
}

// Secondary label for a host row in the dropdown: SSH alias/host, WSL distro, or os/arch.
function getRemoteHostSubtext(connection: RemoteHostConnection): string {
  if (isSshConnection(connection))
    return connection.sshAlias ?? connection.sshHost ?? "";
  if (isWslConnection(connection)) return connection.distro ?? "";
  return [connection.os, connection.arch]
    .filter(
      (part): part is string =>
        typeof part === "string" && part.trim().length > 0,
    )
    .join(" / ");
}

// Confirms the folder still resolves on the host to exactly the path the user chose.
async function validateRemoteDirectory(
  hostId: string,
  remotePath: string,
  comparablePath: string,
): Promise<boolean> {
  if (!isAbsoluteRemotePath(remotePath.trim())) return false;
  try {
    const result = await invokeAppServerRequest(
      "remote-workspace-directory-entries",
      { params: { hostId, directoryPath: remotePath, directoriesOnly: true } },
    );
    return toComparableRemotePath(result.directoryPath) === comparablePath;
  } catch {
    return false;
  }
}

interface SubmitBlockerNoticeProps {
  children: ReactNode;
  Icon: ComponentType<{ className?: string }>;
  tone: "warning" | "danger";
}

function SubmitBlockerNotice({
  children,
  Icon,
  tone,
}: SubmitBlockerNoticeProps): ReactElement {
  const toneClass =
    tone === "warning"
      ? "text-token-editor-warning-foreground"
      : "text-token-error-foreground";
  return (
    <div
      className={clsx(
        "mt-1 flex items-start gap-1.5 text-sm leading-5",
        toneClass,
      )}
    >
      <Icon className={clsx("icon-xs mt-1 shrink-0")} />
      <div>{children}</div>
    </div>
  );
}

export function RemoteProjectSetupDialog(): ReactElement | null {
  const store = useStore(appStore);
  const analytics = useSignalValue(remoteSshConnectionAnalyticsSignal);
  const intl = useIntl();
  const isOnboardingActive = useIsWorkspaceOnboardingActive();
  const isRemoteProjectsEnabled = useIsRemoteProjectsEnabled();
  const { remoteConnections, selectedRemoteHostId } = useSignalValue(
    remoteConnectionsStateSignal,
  ) as {
    remoteConnections: RemoteHostConnection[];
    selectedRemoteHostId: string | null;
  };
  const selectableHosts = getSelectableRemoteHosts(
    remoteConnections,
  ) as RemoteHostConnection[];
  const hostIdsForColor = remoteConnections.map(
    (connection) => connection.hostId,
  );
  const { data: remoteProjects } = usePersistedValue(
    ProjectStorageKey.REMOTE_PROJECTS,
  );
  const { data: projectOrder } = usePersistedValue(
    ProjectStorageKey.PROJECT_ORDER,
  );

  const [dialogState, setDialogState] =
    useState<RemoteProjectDialogState | null>(null);
  const [pathInput, setPathInput] = useState("");
  const [lastInvalidPath, setLastInvalidPath] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [portalContainer, setPortalContainer] = useState<Element | null>(null);

  const trimmedPath = pathInput.trim();
  const defaultHostId =
    selectableHosts.find((host) => host.hostId === selectedRemoteHostId)
      ?.hostId ??
    selectableHosts[0]?.hostId ??
    null;
  const resetPathState = () => {
    setPathInput("");
    setLastInvalidPath(null);
  };
  const normalizedInputPath =
    trimmedPath.length > 0 ? normalizeRemotePath(trimmedPath) : null;
  const {
    data: directoryEntries,
    error,
    isFetching,
  } = useAppServerQuery("remote-workspace-directory-entries", {
    params: {
      hostId: dialogState?.selectedHostId ?? "",
      directoryPath: normalizedInputPath,
      directoriesOnly: true,
    },
    queryConfig: { enabled: dialogState?.selectedHostId != null },
  });

  useHostMessageHandler(
    "open-create-remote-project-modal",
    (request: { hostId?: string; setActive?: boolean }) => {
      if (!isRemoteProjectsEnabled || isOnboardingActive) return;
      setDialogState({
        mode: "setup",
        initialDirectoryPath: null,
        selectedHostId:
          selectableHosts.find((host) => host.hostId === request.hostId)
            ?.hostId ?? defaultHostId,
        setActive: request.setActive,
      });
      resetPathState();
    },
    [isOnboardingActive, isRemoteProjectsEnabled, defaultHostId],
  );

  useHostMessageHandler(
    "remote-workspace-root-requested",
    (request: {
      host: string;
      hostId?: string;
      mode?: string;
      initialPath?: string;
      setActive?: boolean;
    }) => {
      if (!isRemoteProjectsEnabled) return;
      const host = request.host.trim();
      const hostId =
        request.hostId ??
        selectableHosts.find((option) => option.displayName === host)?.hostId ??
        defaultHostId ??
        null;
      if (request.mode === "pick") {
        setDialogState({
          mode: "choose-remote-folder",
          host,
          initialDirectoryPath: request.initialPath?.trim() ?? null,
          selectedHostId: hostId,
        });
        setPathInput(request.initialPath?.trim() ?? "");
        setLastInvalidPath(null);
        return;
      }
      setDialogState({
        mode: "setup",
        initialDirectoryPath: request.initialPath?.trim() ?? null,
        selectedHostId: hostId,
        setActive: request.setActive,
      });
      setPathInput(request.initialPath?.trim() ?? "");
      setLastInvalidPath(null);
    },
    [
      selectableHosts,
      isOnboardingActive,
      isRemoteProjectsEnabled,
      defaultHostId,
    ],
  );

  if (!dialogState) return null;

  const isChooseFolderMode = dialogState.mode === "choose-remote-folder";
  const hasConnectedRemotes = selectableHosts.length > 0;
  const selectedHost =
    selectableHosts.find(
      (host) => host.hostId === dialogState.selectedHostId,
    ) ?? null;
  const selectedSshConnection =
    selectedHost != null && isSshConnection(selectedHost) ? selectedHost : null;
  const resolvedRemotePath =
    normalizedInputPath ??
    (directoryEntries == null
      ? null
      : normalizeRemotePath(directoryEntries.directoryPath));
  const comparableRemotePath =
    resolvedRemotePath == null
      ? null
      : toComparableRemotePath(resolvedRemotePath);
  const pathValidation: RemotePathValidation = isFetching
    ? "pending"
    : directoryEntries != null && error == null
      ? "valid"
      : "invalid";
  const conflictingProject =
    isChooseFolderMode || resolvedRemotePath == null
      ? null
      : findRemoteProjectForPath(
          remoteProjects,
          dialogState.selectedHostId,
          resolvedRemotePath,
        );
  let submitBlocker = isChooseFolderMode
    ? computeRemoteAvailabilityBlocker({
        hasConnectedRemoteConnections: hasConnectedRemotes,
        comparableRemoteProjectPath: comparableRemotePath,
        remoteProjectPathValidation: pathValidation,
        selectedConnection: selectedHost,
      })
    : computeRemoteProjectSetupBlocker({
        hasConnectedRemoteConnections: hasConnectedRemotes,
        comparableRemoteProjectPath: comparableRemotePath,
        remoteProjectPathValidation: pathValidation,
        selectedConnection: selectedHost,
        isRemoteProjectAlreadySetUp:
          conflictingProject != null && !isSubmitting,
      });
  if (lastInvalidPath === comparableRemotePath)
    submitBlocker = { kind: "invalid-path" };

  const blockerNotice = getSubmitBlockerNotice({
    conflictingProjectName: isChooseFolderMode
      ? null
      : (conflictingProject?.label ?? null),
    remoteName: isChooseFolderMode ? null : (selectedHost?.displayName ?? null),
    submitBlocker,
  });
  const submitState: SubmitState =
    blockerNotice == null
      ? { kind: "ready" }
      : { kind: "blocked", notice: blockerNotice };
  const isSubmitDisabled = submitBlocker != null;

  const handlePathChange = (path: string) => {
    setPathInput(path);
    setLastInvalidPath(null);
  };
  const closeDialog = () => {
    setDialogState(null);
    resetPathState();
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      submitBlocker != null ||
      dialogState.selectedHostId == null ||
      resolvedRemotePath == null ||
      comparableRemotePath == null
    )
      return;
    const setActive =
      dialogState.mode === "setup" && dialogState.setActive === true;
    try {
      setIsSubmitting(true);
      if (
        !(await validateRemoteDirectory(
          dialogState.selectedHostId,
          resolvedRemotePath,
          comparableRemotePath,
        ))
      ) {
        setLastInvalidPath(comparableRemotePath);
        return;
      }
      setLastInvalidPath(null);
      if (isChooseFolderMode) {
        hostMessageBridge.dispatchHostMessage({
          type: "workspace-root-option-picked",
          root: resolvedRemotePath,
        });
        closeDialog();
        return;
      }
      const newProject = {
        id: crypto.randomUUID(),
        hostId: dialogState.selectedHostId,
        remotePath: resolvedRemotePath,
        label: getRemoteProjectLabelFromPath(resolvedRemotePath),
      };
      await writePersistedValue(store, ProjectStorageKey.REMOTE_PROJECTS, [
        newProject,
        ...(remoteProjects ?? []),
      ]);
      await writePersistedValue(store, ProjectStorageKey.PROJECT_ORDER, [
        newProject.id,
        ...(projectOrder ?? []).filter((id: string) => id !== newProject.id),
      ]);
      if (setActive)
        await writePersistedValue(
          store,
          ProjectStorageKey.ACTIVE_REMOTE_PROJECT_ID,
          newProject.id,
        );
      if (selectedSshConnection != null)
        logRemoteSshConnectionEvent(analytics, {
          action:
            RemoteSshConnectionAction.CODEX_REMOTE_SSH_CONNECTION_ACTION_CREATE_REMOTE_PROJECT,
          result:
            RemoteSshConnectionResult.CODEX_REMOTE_SSH_CONNECTION_RESULT_SUCCEEDED,
          source:
            RemoteSshConnectionEventSource.CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_PROJECT_SETUP,
          connection: selectedSshConnection,
          setActiveRemoteProject: setActive,
        });
      closeDialog();
    } catch (submitError) {
      if (selectedSshConnection != null)
        logRemoteSshConnectionEvent(analytics, {
          action:
            RemoteSshConnectionAction.CODEX_REMOTE_SSH_CONNECTION_ACTION_CREATE_REMOTE_PROJECT,
          result:
            RemoteSshConnectionResult.CODEX_REMOTE_SSH_CONNECTION_RESULT_FAILED,
          source:
            RemoteSshConnectionEventSource.CODEX_REMOTE_SSH_CONNECTION_EVENT_SOURCE_PROJECT_SETUP,
          connection: selectedSshConnection,
          errorCategory:
            RemoteSshConnectionErrorCategory.CODEX_REMOTE_SSH_CONNECTION_ERROR_CATEGORY_UNKNOWN,
          setActiveRemoteProject: setActive,
        });
      logger.error(`${MAPPING_LOG_LABEL} save_failed`, {
        safe: {},
        sensitive: {
          hostId: dialogState.selectedHostId,
          remoteProjectPath: resolvedRemotePath,
          error: submitError,
        },
      });
      store.get(toastNotificationAtom).danger(
        intl.formatMessage({
          id: "projectSetupDialog.saveError",
          defaultMessage: "Failed to save project",
          description: "Toast shown when project setup fails",
        }),
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const chooseModeHostName =
    selectedHost?.displayName ??
    (dialogState.mode === "choose-remote-folder" ? dialogState.host : "");

  return (
    <Dialog
      open
      onOpenChange={(open: boolean) => {
        if (!open) closeDialog();
      }}
    >
      <form
        className="flex flex-col gap-0"
        onSubmit={(event) => {
          void handleSubmit(event);
        }}
      >
        <DialogBody>
          <DialogSection>
            <DialogHeader
              title={
                isChooseFolderMode ? (
                  <FormattedMessage
                    id="workspaceRootDialog.title.pick"
                    defaultMessage="Choose folder path"
                    description="Title for the remote workspace path dialog when selecting a workspace"
                  />
                ) : (
                  <FormattedMessage
                    id="projectSetupDialog.newRemoteProjectTitle"
                    defaultMessage="New remote project"
                    description="Title for the remote project setup dialog"
                  />
                )
              }
              subtitle={
                isChooseFolderMode ? (
                  <FormattedMessage
                    id="workspaceRootDialog.description.pick"
                    defaultMessage="Enter a folder path on {host} to use for this project."
                    description="Description for the remote workspace path dialog"
                    values={{
                      host: (
                        <span className="font-medium text-token-text-primary">
                          {chooseModeHostName}
                        </span>
                      ) as unknown as PrimitiveType,
                    }}
                  />
                ) : hasConnectedRemotes ? (
                  <FormattedMessage
                    id="projectSetupDialog.description"
                    defaultMessage="Choose a connected remote host and enter the folder for this project."
                    description="Description for the remote project setup dialog"
                  />
                ) : (
                  <FormattedMessage
                    id="projectSetupDialog.description.noConnectedRemotes"
                    defaultMessage="Set up a remote host first. Then you can choose a host and folder here."
                    description="Description for the remote project setup dialog when no remote hosts are connected"
                  />
                )
              }
            />
          </DialogSection>
          {isChooseFolderMode || dialogState.mode === "setup" ? (
            <>
              <DialogSection className="gap-2">
                <label className="flex flex-col gap-2">
                  <span className="font-medium text-token-text-primary">
                    <FormattedMessage
                      id="workspaceRootDialog.remoteLabel"
                      defaultMessage="Remote host"
                      description="Label for the remote connection dropdown in the remote workspace path dialog"
                    />
                  </span>
                  <div
                    ref={(element: HTMLDivElement | null) => {
                      if (typeof document === "undefined") {
                        setPortalContainer(null);
                        return;
                      }
                      setPortalContainer(
                        element?.closest(".codex-dialog") ?? document.body,
                      );
                    }}
                  >
                    <Dropdown
                      align="start"
                      disabled={!hasConnectedRemotes}
                      contentMaxHeight="list"
                      contentWidth="menuBounded"
                      portalContainer={portalContainer}
                      triggerButton={
                        <button
                          type="button"
                          disabled={!hasConnectedRemotes}
                          className="flex h-10 w-full items-center justify-between gap-2 rounded-xl border border-token-border bg-token-dropdown-background px-3 text-sm text-token-foreground disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <span className="flex min-w-0 items-center gap-2">
                            {selectedHost ? (
                              <RemoteHostIcon
                                className="icon-xs shrink-0"
                                hostId={selectedHost.hostId}
                                hostIdsForColorAssignment={hostIdsForColor}
                              />
                            ) : null}
                            <span
                              className={
                                selectedHost == null
                                  ? "truncate text-left text-token-description-foreground"
                                  : "truncate text-left"
                              }
                            >
                              {selectedHost?.displayName ?? (
                                <FormattedMessage
                                  id="workspaceRootDialog.remotePlaceholder"
                                  defaultMessage="No connected remote"
                                  description="Placeholder shown when no connected remote is available in the remote workspace path dialog"
                                />
                              )}
                            </span>
                          </span>
                          <ChevronDownIcon className="icon-xs shrink-0 text-token-description-foreground" />
                        </button>
                      }
                    >
                      {selectableHosts.length === 0 ? (
                        <Menu.Item disabled>
                          <FormattedMessage
                            id="workspaceRootDialog.remoteEmpty"
                            defaultMessage="No connected remotes"
                            description="Label shown when no connected remotes are available in the remote workspace path dialog"
                          />
                        </Menu.Item>
                      ) : (
                        <Menu.Section className="flex max-h-40 flex-col overflow-y-auto">
                          {selectableHosts.map((host) => (
                            <Menu.Item
                              key={host.hostId}
                              RightIcon={
                                dialogState.selectedHostId === host.hostId
                                  ? CheckmarkIcon
                                  : undefined
                              }
                              subTextAllowWrap
                              SubText={
                                <span className="text-xs text-token-description-foreground">
                                  {getRemoteHostSubtext(host)}
                                </span>
                              }
                              onSelect={() => {
                                if (
                                  dialogState.selectedHostId !== host.hostId
                                ) {
                                  resetPathState();
                                  setDialogState(
                                    (previous) =>
                                      previous && {
                                        ...previous,
                                        initialDirectoryPath: null,
                                        selectedHostId: host.hostId,
                                      },
                                  );
                                }
                              }}
                            >
                              <Menu.ItemIcon size="xs">
                                <RemoteHostIcon
                                  className="icon-xs"
                                  hostId={host.hostId}
                                  hostIdsForColorAssignment={hostIdsForColor}
                                />
                              </Menu.ItemIcon>
                              <span className="block truncate">
                                {host.displayName}
                              </span>
                            </Menu.Item>
                          ))}
                        </Menu.Section>
                      )}
                    </Dropdown>
                  </div>
                </label>
              </DialogSection>
              <DialogSection className="gap-2">
                <label className="flex flex-col gap-0.5">
                  <span className="font-medium text-token-text-primary">
                    <FormattedMessage
                      id="workspaceRootDialog.pathLabel"
                      defaultMessage="Folder path"
                      description="Label for the remote workspace path input"
                    />
                  </span>
                  {dialogState.selectedHostId == null ? null : (
                    <RemoteDirectoryPathInput
                      key={dialogState.selectedHostId}
                      hostId={dialogState.selectedHostId}
                      initialDirectoryPath={dialogState.initialDirectoryPath}
                      selectedPath={pathInput}
                      setSelectedPath={handlePathChange}
                    />
                  )}
                </label>
              </DialogSection>
            </>
          ) : null}
          {dialogState.mode === "setup" ? (
            <DialogSection>
              <div className="text-sm text-token-description-foreground">
                <FormattedMessage
                  id="projectSetupDialog.remoteMode.standalone.description"
                  defaultMessage="This remote folder will appear as its own project in the sidebar."
                  description="Description for saving a remote project as a standalone sidebar project"
                />
              </div>
            </DialogSection>
          ) : null}
          <DialogSection>
            <div className="min-h-5">
              {submitState.kind === "ready" ? null : (
                <SubmitBlockerNotice
                  Icon={
                    submitState.notice.tone === "warning"
                      ? WarningIcon
                      : ErrorIcon
                  }
                  tone={submitState.notice.tone}
                >
                  <FormattedMessage
                    {...submitState.notice.message}
                    values={submitState.notice.values}
                  />
                </SubmitBlockerNotice>
              )}
            </div>
            <DialogFooter>
              <Button color="ghost" onClick={closeDialog} type="button">
                <FormattedMessage
                  id="workspaceRootDialog.cancel"
                  defaultMessage="Cancel"
                  description="Cancel button label for the project setup dialog"
                />
              </Button>
              <Button
                color="primary"
                type="submit"
                loading={isSubmitting}
                disabled={isSubmitDisabled}
              >
                {isChooseFolderMode ? (
                  <FormattedMessage
                    id="workspaceRootDialog.confirmPick"
                    defaultMessage="Use folder"
                    description="Confirm button label for selecting a remote workspace path"
                  />
                ) : (
                  <FormattedMessage
                    id="workspaceRootDialog.confirmAdd"
                    defaultMessage="Add project"
                    description="Confirm button label for saving project setup"
                  />
                )}
              </Button>
            </DialogFooter>
          </DialogSection>
        </DialogBody>
      </form>
    </Dialog>
  );
}
