// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~local-conversation-page-4SURv8Cr.js
// Inline project title editing and the edit-project action row.
import React from "react";
import {
  appScope,
  EditProjectIcon,
  FormattedMessage,
  globalSettingKeys,
  openLocalProjectEditModal,
  setGlobalSettingValue,
  toastControllerSignal,
  updateWorkspaceRootLabel,
  useGlobalStateQuery,
  useIntl,
  useQueryClient,
  useScope,
} from "../../runtime/project-hover-card-runtime";
import { localProjectActions } from "../../features/local-projects";
import { getProjectHoverCardMessage } from "./messages";
import { ProjectHoverCardRow } from "./rows";
import type {
  IntlShape,
  SavedRemoteProject,
  ScopeRuntime,
  SidebarProjectGroup,
  ToastController,
} from "./types";

export function EditableProjectHoverCardTitle({
  group,
}: {
  group: SidebarProjectGroup;
}) {
  const scope = useScope(appScope) as ScopeRuntime;
  const intl = useIntl() as IntlShape;
  const queryClient = useQueryClient();
  const localProjectsQuery = useGlobalStateQuery(
    globalSettingKeys.LOCAL_PROJECTS,
  );
  const remoteProjectsQuery = useGlobalStateQuery(
    globalSettingKeys.REMOTE_PROJECTS,
  );
  const [isRenaming, setIsRenaming] = React.useState(false);
  const [draftName, setDraftName] = React.useState(group.label);
  const canRename =
    group.projectKind === "remote" ||
    group.isLocalProject === true ||
    group.path != null;

  const commitRename = (value: string) => {
    const trimmedName = value.trim();
    setIsRenaming(false);
    if (trimmedName.length === 0 || trimmedName === group.label) {
      setDraftName(group.label);
      return;
    }

    void (async () => {
      try {
        if (group.projectKind === "remote") {
          const remoteProjects = Array.isArray(remoteProjectsQuery.data)
            ? (remoteProjectsQuery.data as SavedRemoteProject[])
            : [];
          await setGlobalSettingValue(
            scope,
            globalSettingKeys.REMOTE_PROJECTS,
            remoteProjects.map((project) =>
              project.id === group.projectId
                ? { ...project, label: trimmedName }
                : project,
            ),
          );
          return;
        }

        await localProjectActions.rename({
          existingLocalProjects: localProjectsQuery.data,
          name: trimmedName,
          now: Date.now(),
          project: group,
          setGlobalSetting: (key: string, settingValue: unknown) =>
            setGlobalSettingValue(scope, key, settingValue),
          updateWorkspaceRootLabel: (path: string, label: string) => {
            updateWorkspaceRootLabel({ label, path, queryClient });
          },
        });
      } catch {
        const toastController = scope.get<ToastController>(
          toastControllerSignal,
        );
        toastController.danger(
          intl.formatMessage(getProjectHoverCardMessage("renameError")),
        );
      }
    })();
  };

  if (isRenaming) {
    return (
      <input
        autoFocus={true}
        className="h-6 w-full min-w-0 rounded-md border border-token-focus-border bg-token-input-background px-1.5 text-base leading-6 font-medium text-token-input-foreground outline-none"
        value={draftName}
        onBlur={(event) => {
          if (event.currentTarget.dataset.cancelRename !== "true") {
            commitRename(event.currentTarget.value);
          }
        }}
        onChange={(event) => {
          setDraftName(event.target.value);
        }}
        onFocus={selectInputText}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            event.currentTarget.blur();
            return;
          }
          if (event.key === "Escape") {
            event.preventDefault();
            event.currentTarget.dataset.cancelRename = "true";
            setDraftName(group.label);
            setIsRenaming(false);
          }
        }}
        aria-label={intl.formatMessage({
          id: "sidebarElectron.projectHoverCard.projectNameAriaLabel",
          defaultMessage: "Project name",
          description:
            "Accessible label for the inline project name editor in the project hover card",
        })}
      />
    );
  }

  return canRename ? (
    <button
      type="button"
      className="max-w-full min-w-0 cursor-interaction truncate rounded-md text-left text-base leading-6 font-medium text-token-foreground hover:bg-token-list-hover-background focus-visible:bg-token-list-hover-background focus-visible:outline-none"
      onClick={() => {
        setDraftName(group.label);
        setIsRenaming(true);
      }}
    >
      {group.label}
    </button>
  ) : (
    <div className="truncate text-base leading-6 font-medium">
      {group.label}
    </div>
  );
}

function selectInputText(event: React.FocusEvent<HTMLInputElement>) {
  event.currentTarget.select();
}

export function EditProjectHoverCardRow({
  group,
  initialSources,
}: {
  group: SidebarProjectGroup;
  initialSources: string[];
}) {
  const scope = useScope(appScope) as ScopeRuntime;
  const intl = useIntl() as IntlShape;
  const actionLabel = intl.formatMessage({
    id: "sidebarElectron.projectHoverCard.editProjectActionLabel",
    defaultMessage: "Edit project",
    description:
      "Accessible label for opening the project edit modal from the project hover card",
  });

  return (
    <ProjectHoverCardRow
      actionLabel={actionLabel}
      icon={<EditProjectIcon className="icon-xs" />}
      showActionIndicator={false}
      onClick={() => {
        openLocalProjectEditModal(scope, {
          initialName: group.label,
          initialSources,
          project: group,
          showDeleteAction: true,
        });
      }}
    >
      <span className="min-w-0 truncate text-sm leading-5 text-token-foreground">
        <FormattedMessage
          id="sidebarElectron.projectHoverCard.editProject"
          defaultMessage="Edit project"
          description="Row label for opening the project edit modal from the project hover card"
        />
      </span>
    </ProjectHoverCardRow>
  );
}
