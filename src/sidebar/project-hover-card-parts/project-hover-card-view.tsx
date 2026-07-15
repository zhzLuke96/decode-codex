// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~local-conversation-page-4SURv8Cr.js
// Main project hover card composition and chunk initializer.
import { once } from "../../runtime/commonjs-interop";
import {
  appScope,
  getChunkModuleExports,
  getProjectWritableRootsForDisplay,
  globalSettingKeys,
  initAppScope,
  initButtonRuntime,
  initClassNamesRuntime,
  initCodexAppFrameRuntime,
  initDialogRuntime,
  initGlobalSettingsRuntime,
  initGlobalStateQueryRuntime,
  initInlinePopoverRuntime,
  initIntlMessageRuntime,
  initKeyboardShortcutRuntime,
  initLocalProjectActionsRuntime,
  initModalRuntime,
  initNotificationRuntime,
  initPanelRuntime,
  initReactIntlRuntime,
  initReactQueryRuntime,
  initReactRuntime,
  initRemoteConnectionActionsChunk,
  initRemoteConnectionStateChunk,
  initRemoteProjectIconChunk,
  initScopeRuntime,
  initSignalHooksRuntime,
  initSpinnerComponent,
  initSvgIconRuntime,
  initVscodeApiBridge,
  initWorkspaceRootLabelRuntime,
  LocalProjectFallbackIcon,
  normalizeWorkspacePath,
  parseProjectWritableRoots,
  ProjectAvatar,
  RemoteProjectIcon,
  threadAttentionCountsSignal,
  useAppServerMutation,
  useGlobalStateQuery,
  useIntl,
  useRemoteHostConfigs,
  useScope,
  useScopedValue,
} from "../../runtime/project-hover-card-runtime";
import {
  initWorkspaceResourceOpenerChunk,
  openWorkspaceResource,
} from "../../appgen/publication-terms";
import { initProfileIconsChunk } from "../../runtime/project-hover-card-runtime";
import {
  EditProjectHoverCardRow,
  EditableProjectHoverCardTitle,
} from "./editable-title";
import { getProjectHoverCardMessage } from "./messages";
import {
  ProjectPinButton,
  initPinnedProjectRuntime,
  initProjectPinButtonChunk,
  setProjectPinned,
} from "./pinning";
import { initRemoteConnectionStatusMessagesChunk } from "./remote-connection-status";
import { RemoteConnectionStatusRow } from "./remote-connection-status-row";
import { initRemoteHostGlobeIconChunk } from "./remote-host-globe";
import { ProjectHoverCardRow, ProjectHoverCardSourceRow } from "./rows";
import { initProjectSourceFolderIconChunk } from "./source-icons";
import {
  buildProjectHoverCardSourceRows,
  collapseHomeDirectoryInPath,
  getProjectSourceRowIcon,
  initProjectHoverCardSourceHelpers,
} from "./source-rows";
import { ProjectHoverCardStatusSummary } from "./status-summary";
import type {
  IntlShape,
  ProjectAttentionCounts,
  ProjectWritableRoots,
  RemoteHostConfig,
  RenderableProjectSourceRow,
  ScopeRuntime,
  SidebarProjectGroup,
} from "./types";
import { EMPTY_ATTENTION_COUNTS } from "./types";

export function ProjectHoverCard({
  group,
  separateStatusRows = false,
}: {
  group: SidebarProjectGroup;
  separateStatusRows?: boolean;
}) {
  const scope = useScope(appScope) as ScopeRuntime;
  const intl = useIntl() as IntlShape;
  const openFileMutation = useAppServerMutation("open-file");
  const remoteHostConfigs = useRemoteHostConfigs() as RemoteHostConfig[];
  const writableRootsQuery = useGlobalStateQuery(
    globalSettingKeys.PROJECT_WRITABLE_ROOTS,
  );
  const pinnedProjectIdsQuery = useGlobalStateQuery(
    globalSettingKeys.PINNED_PROJECT_IDS,
  );
  const isPinned = Boolean(
    (pinnedProjectIdsQuery.data as string[] | null | undefined)?.includes(
      group.projectId,
    ),
  );
  const hostIdsForColorAssignment = remoteHostConfigs
    .map(getHostIdFromWritableRoot)
    .filter(isNonEmptyString);
  const attentionCounts =
    (useScopedValue(threadAttentionCountsSignal, group.threadKeys) as
      | ProjectAttentionCounts
      | null
      | undefined) ?? EMPTY_ATTENTION_COUNTS;
  const writableRoots = getProjectWritableRootsForDisplay({
    projectId: group.projectId,
    projectWritableRoots: parseProjectWritableRoots(
      writableRootsQuery.data,
    ) as ProjectWritableRoots,
    legacyRoot: group.path ?? null,
  }) as string[];
  const canEditProject =
    writableRootsQuery.isFetched &&
    !writableRootsQuery.isLoadingError &&
    group.projectKind === "local" &&
    (group.isLocalProject === true || group.path != null);
  const sourceRows = buildRenderableSourceRows({
    group,
    hostIdsForColorAssignment,
    intl,
    openFileMutation,
    writableRoots,
  });
  const fallbackIcon =
    group.projectKind === "remote" ? (
      <RemoteProjectIcon className="icon-xs shrink-0" />
    ) : (
      <LocalProjectFallbackIcon className="icon-xs shrink-0" />
    );
  const pinLabel = intl.formatMessage(
    isPinned
      ? getProjectHoverCardMessage("unpinProject")
      : getProjectHoverCardMessage("pinProject"),
  );

  return (
    <div className="flex w-[min(21rem,calc(100vw-16px))] min-w-72 flex-col gap-1.5 px-row-x py-2 text-token-foreground">
      <div className="flex min-w-0 flex-col gap-1">
        <ProjectHoverCardRow
          align="center"
          icon={
            <ProjectAvatar
              projectId={group.projectId}
              projectName={group.label}
              buttonClassName="!h-5 !w-4 !p-0 text-token-description-foreground"
              disablePopoverPortal={true}
              fallbackIcon={fallbackIcon}
              markerClassName="h-4 w-4"
            />
          }
        >
          <div className="flex min-w-0 items-center gap-2">
            <span className="min-w-0 flex-1">
              <EditableProjectHoverCardTitle group={group} />
            </span>
            <ProjectPinButton
              ariaLabel={pinLabel}
              isPinned={isPinned}
              onPin={() => {
                setProjectPinned(scope, group.projectId, true);
              }}
              onUnpin={() => {
                setProjectPinned(scope, group.projectId, false);
              }}
            />
          </div>
        </ProjectHoverCardRow>
        <ProjectHoverCardStatusSummary
          chatCount={group.threadKeys.length}
          separateStatusRows={separateStatusRows}
          attentionCounts={attentionCounts}
        />
      </div>
      {sourceRows.length > 0 ? (
        <div className="flex min-w-0 flex-col gap-1 border-t border-token-border pt-1.5">
          {sourceRows.map((row) => (
            <ProjectHoverCardSourceRowWithStatus key={row.id} {...row} />
          ))}
        </div>
      ) : null}
      {canEditProject ? (
        <div className="flex min-w-0 flex-col gap-1 border-t border-token-border pt-1.5">
          <EditProjectHoverCardRow
            group={group}
            initialSources={writableRoots}
          />
        </div>
      ) : null}
    </div>
  );
}

function buildRenderableSourceRows({
  group,
  hostIdsForColorAssignment,
  intl,
  openFileMutation,
  writableRoots,
}: {
  group: SidebarProjectGroup;
  hostIdsForColorAssignment: string[];
  intl: IntlShape;
  openFileMutation: { mutate: (params: unknown) => void };
  writableRoots: string[];
}) {
  return buildProjectHoverCardSourceRows(group, writableRoots).map((row) => {
    const isOpenableLocalPath =
      row.kind === "path" && group.projectKind === "local";
    const displayValue =
      row.kind === "path" ? collapseHomeDirectoryInPath(row.value) : row.value;

    return {
      actionLabel: isOpenableLocalPath
        ? intl.formatMessage(
            {
              id: "sidebarElectron.projectHoverCard.openSource",
              defaultMessage: "Open {source}",
              description:
                "Accessible label for opening a project source from the project hover card",
            },
            { source: displayValue },
          )
        : undefined,
      allowBreak: row.allowBreak,
      hostId: row.kind === "host" ? row.hostId : null,
      icon: getProjectSourceRowIcon(row, hostIdsForColorAssignment),
      id: `${row.kind}:${row.value}`,
      kind: row.kind,
      onClick: isOpenableLocalPath
        ? () => {
            openWorkspaceResource({
              path: row.value,
              cwd: normalizeWorkspacePath(row.value),
              target: "fileManager",
              openFile: openFileMutation.mutate,
            });
          }
        : undefined,
      value: displayValue,
    } satisfies RenderableProjectSourceRow;
  });
}

function ProjectHoverCardSourceRowWithStatus(row: RenderableProjectSourceRow) {
  return (
    <>
      <ProjectHoverCardSourceRow row={row} />
      {row.kind === "host" && row.hostId != null ? (
        <RemoteConnectionStatusRow hostId={row.hostId} />
      ) : null}
    </>
  );
}

function getHostIdFromWritableRoot(config: RemoteHostConfig) {
  return config.hostId;
}

function isNonEmptyString(value: string | null | undefined): value is string {
  return typeof value === "string" && value.length > 0;
}

export const initProjectHoverCardChunk = once(() => {
  getChunkModuleExports();
  initReactQueryRuntime();
  initGlobalStateQueryRuntime();
  initScopeRuntime();
  initIntlMessageRuntime();
  initReactRuntime();
  initReactIntlRuntime();
  initRemoteConnectionStateChunk();
  initRemoteConnectionStatusMessagesChunk();
  initRemoteHostGlobeIconChunk();
  initSpinnerComponent();
  initWorkspaceResourceOpenerChunk();
  initGlobalSettingsRuntime();
  initCodexAppFrameRuntime();
  initProfileIconsChunk();
  initSignalHooksRuntime();
  initRemoteConnectionActionsChunk();
  initButtonRuntime();
  initRemoteProjectIconChunk();
  initWorkspaceRootLabelRuntime();
  initPanelRuntime();
  initDialogRuntime();
  initNotificationRuntime();
  initSvgIconRuntime();
  initKeyboardShortcutRuntime();
  initAppScope();
  initGlobalStateQueryRuntime();
  initProjectSourceFolderIconChunk();
  initProjectPinButtonChunk();
  initProjectHoverCardSourceHelpers();
  initPinnedProjectRuntime();
  initClassNamesRuntime();
  initVscodeApiBridge();
  initModalRuntime();
  initLocalProjectActionsRuntime();
  initInlinePopoverRuntime();
});
