// Restored from ref/webview/assets/data-controls-CwyuAPUl.js
// Semantic implementation module for archived chat groups, rows, and delete dialog.

import dataControlsRuntime from "./runtime-impl";
import { ArchivedCloudTaskRow } from "./archived-cloud-tasks-impl";
function ArchivedChatsProjectFilterMenu(dataControlsOperand3) {
  let {
      projectFilter: projectFilter,
      projects: projects,
      onProjectFilterChange: onProjectFilterChange,
    } = dataControlsOperand3,
    dataControlsBinding95 =
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy(),
    dataControlsBinding96 =
      projectFilter.kind === `group`
        ? projects.find((item) => item.groupId === projectFilter.groupId)
        : null;
  let dataControlsBinding97 = dataControlsBinding96,
    dataControlsBinding98,
    dataControlsBinding99,
    dataControlsBinding100,
    dataControlsBinding101,
    dataControlsBinding102,
    dataControlsBinding103,
    dataControlsBinding104,
    dataControlsBinding105,
    dataControlsBinding106;
  {
    let dataControlsBinding217 = new Map();
    for (let dataControlsBinding294 of projects) {
      let dataControlsBinding297 =
        dataControlsBinding217.get(dataControlsBinding294.label) ?? [];
      (dataControlsBinding297.push(
        dataControlsBinding294.path ?? dataControlsBinding294.projectId,
      ),
        dataControlsBinding217.set(
          dataControlsBinding294.label,
          dataControlsBinding297,
        ));
    }
    ((dataControlsBinding98 =
      dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwEo),
      (dataControlsBinding99 = `bottom`),
      (dataControlsBinding100 = `end`),
      (dataControlsBinding101 = `workspace`),
      (dataControlsBinding102 = `tall`));
    let dataControlsBinding218 = dataControlsBinding95.formatMessage(
      dataControlsRuntime.archivedChatFilterMessages
        .filterArchivedChatsByProject,
    );
    let dataControlsBinding219 =
      dataControlsRuntime.dataControlsReactRuntime.createElement(
        dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwJa,
        {
          className: `icon-xs shrink-0`,
        },
      );
    let dataControlsBinding220 =
      projectFilter.kind === `all`
        ? dataControlsRuntime.dataControlsReactRuntime.createElement(
            dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              ...dataControlsRuntime.archivedChatFilterMessages.allProjects,
            },
          )
        : projectFilter.groupId === `special:automations`
          ? dataControlsRuntime.dataControlsReactRuntime.createElement(
              dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
              {
                ...dataControlsRuntime.archivedChatFilterMessages.automations,
              },
            )
          : projectFilter.groupId === `special:none`
            ? dataControlsRuntime.dataControlsReactRuntime.createElement(
                dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  ...dataControlsRuntime.archivedChatFilterMessages.chats,
                },
              )
            : dataControlsBinding97 == null
              ? dataControlsRuntime.dataControlsReactRuntime.createElement(
                  dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                  {
                    ...dataControlsRuntime.archivedChatFilterMessages
                      .allProjects,
                  },
                )
              : dataControlsBinding97.label;
    let dataControlsBinding221;
    ((dataControlsBinding221 =
      dataControlsRuntime.dataControlsReactRuntime.createElement(`span`, {
        className: `truncate`,
        children: dataControlsBinding220,
      })),
      (dataControlsBinding103 =
        dataControlsRuntime.dataControlsReactRuntime.createElement(
          dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nR,
          {
            className: `w-[180px] md:w-44`,
            "aria-label": dataControlsBinding218,
            children: [dataControlsBinding219, dataControlsBinding221],
          },
        )));
    let dataControlsBinding222 =
        projectFilter.kind === `all`
          ? dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwOp
          : void 0,
      dataControlsBinding223 = () => {
        onProjectFilterChange({
          kind: `all`,
        });
      };
    let dataControlsBinding224;
    ((dataControlsBinding224 =
      dataControlsRuntime.dataControlsReactRuntime.createElement(
        dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          ...dataControlsRuntime.archivedChatFilterMessages.allProjects,
        },
      )),
      (dataControlsBinding104 =
        dataControlsRuntime.dataControlsReactRuntime.createElement(
          dataControlsRuntime
            .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
            .Item,
          {
            RightIcon: dataControlsBinding222,
            onSelect: dataControlsBinding223,
            children: dataControlsBinding224,
          },
        )),
      (dataControlsBinding105 =
        dataControlsRuntime.dataControlsReactRuntime.createElement(
          dataControlsRuntime
            .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
            .Separator,
          {},
        )),
      (dataControlsBinding106 = projects.map((item) => {
        let dataControlsBinding265 =
            dataControlsBinding217.get(item.label) ?? [],
          dataControlsBinding266 =
            dataControlsBinding265.length > 1
              ? dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dNv(
                  item.path ?? item.projectId,
                  dataControlsBinding265,
                )
              : void 0,
          dataControlsBinding267 =
            projectFilter.kind === `group` &&
            projectFilter.groupId === item.groupId;
        return dataControlsRuntime.dataControlsReactRuntime.createElement(
          dataControlsRuntime
            .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
            .Item,
          {
            LeftIcon:
              dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwJa,
            RightIcon: dataControlsBinding267
              ? dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwOp
              : void 0,
            tooltipText: dataControlsBinding266,
            tooltipAlign: `center`,
            onSelect: () => {
              onProjectFilterChange({
                kind: `group`,
                groupId: item.groupId,
              });
            },
            children: item.label,
            key: item.groupId,
          },
        );
      })));
  }
  let dataControlsBinding107 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime
        .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
        .Separator,
      {},
    );
  let dataControlsBinding108 =
      projectFilter.kind === `group` && projectFilter.groupId === `special:none`
        ? dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwOp
        : void 0,
    dataControlsBinding109 = () => {
      onProjectFilterChange({
        kind: `group`,
        groupId: dataControlsRuntime.projectlessArchiveGroupId,
      });
    };
  let dataControlsBinding110 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        ...dataControlsRuntime.archivedChatFilterMessages.chats,
      },
    );
  let dataControlsBinding111 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime
        .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
        .Item,
      {
        LeftIcon:
          dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsFr,
        RightIcon: dataControlsBinding108,
        onSelect: dataControlsBinding109,
        children: dataControlsBinding110,
      },
    );
  let dataControlsBinding112 =
      projectFilter.kind === `group` &&
      projectFilter.groupId === `special:automations`
        ? dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwOp
        : void 0,
    dataControlsBinding113 = () => {
      onProjectFilterChange({
        kind: `group`,
        groupId: dataControlsRuntime.automationsArchiveGroupId,
      });
    };
  let dataControlsBinding114 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        ...dataControlsRuntime.archivedChatFilterMessages.automations,
      },
    );
  let dataControlsBinding115 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime
        .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
        .Item,
      {
        LeftIcon: dataControlsRuntime.appInitialAppMainOnboardingPageAm,
        RightIcon: dataControlsBinding112,
        onSelect: dataControlsBinding113,
        children: dataControlsBinding114,
      },
    );
  return dataControlsRuntime.dataControlsReactRuntime.createElement(
    dataControlsBinding98,
    {
      side: dataControlsBinding99,
      align: dataControlsBinding100,
      contentWidth: dataControlsBinding101,
      contentMaxHeight: dataControlsBinding102,
      triggerButton: dataControlsBinding103,
      children: [
        dataControlsBinding104,
        dataControlsBinding105,
        dataControlsBinding106,
        dataControlsBinding107,
        dataControlsBinding111,
        dataControlsBinding115,
      ],
    },
  );
}
function ArchivedChatsGroup(dataControlsOperand5) {
  let {
      group: group,
      hostId: hostId,
      isDeleteDisabled: isDeleteDisabled,
      projectArchivedThreads: projectArchivedThreads,
      unarchivingThreadId: unarchivingThreadId,
      isUnarchiving: isUnarchiving,
      showHeader: showHeader,
      onDelete: onDelete,
      onDeleteProject: onDeleteProject,
      onUnarchive: onUnarchive,
    } = dataControlsOperand5,
    dataControlsBinding140 =
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy(),
    dataControlsBinding141 =
      hostId === `local` && projectArchivedThreads.length > 0,
    dataControlsBinding142 = showHeader
      ? dataControlsRuntime.dataControlsReactRuntime.createElement(`div`, {
          className: `sticky top-0 z-10 flex items-center justify-between gap-3 bg-token-main-surface-primary px-4 py-1.5`,
          children: [
            dataControlsRuntime.dataControlsReactRuntime.createElement(`span`, {
              className: `flex min-w-0 items-center gap-2 text-base text-token-description-foreground`,
              children: [
                dataControlsRuntime.dataControlsReactRuntime.createElement(
                  dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwJa,
                  {
                    className: `icon-xs shrink-0`,
                  },
                ),
                dataControlsRuntime.dataControlsReactRuntime.createElement(
                  `span`,
                  {
                    className: `truncate`,
                    children:
                      group.projectLabel == null
                        ? dataControlsRuntime.dataControlsReactRuntime.createElement(
                            dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                            {
                              id: `settings.dataControls.archivedChats.noProject`,
                              defaultMessage: `No project`,
                              description: `Fallback project header for archived chats without a project`,
                            },
                          )
                        : group.projectLabel,
                  },
                ),
              ],
            }),
            dataControlsRuntime.dataControlsReactRuntime.createElement(`div`, {
              className: `ml-auto flex shrink-0 items-center gap-1`,
              children: [
                dataControlsRuntime.dataControlsReactRuntime.createElement(
                  `span`,
                  {
                    className: `text-base text-token-description-foreground`,
                    children:
                      dataControlsRuntime.dataControlsReactRuntime.createElement(
                        dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                        {
                          id: `settings.dataControls.archivedChats.groupCount`,
                          defaultMessage: `{count, plural, one {# chat} other {# chats}}`,
                          description: `Archived chat count shown in a project group header`,
                          values: {
                            count: group.entries.length,
                          },
                        },
                      ),
                  },
                ),
                dataControlsBinding141
                  ? dataControlsRuntime.dataControlsReactRuntime.createElement(
                      dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwEo,
                      {
                        align: `end`,
                        contentWidth: `menu`,
                        triggerButton:
                          dataControlsRuntime.dataControlsReactRuntime.createElement(
                            dataControlsRuntime.appInitialAppMainOnboardingPageXu,
                            {
                              className: `text-token-description-foreground hover:bg-token-list-hover-background hover:text-token-foreground`,
                              label: dataControlsBinding140.formatMessage({
                                id: `settings.dataControls.archivedChats.projectActions`,
                                defaultMessage: `Project actions`,
                                description: `Accessible label for the project archived chats actions menu`,
                              }),
                              size: `toolbar`,
                            },
                          ),
                        children:
                          dataControlsRuntime.dataControlsReactRuntime.createElement(
                            dataControlsRuntime
                              .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
                              .Item,
                            {
                              LeftIcon:
                                dataControlsRuntime.appInitialAppMainOnboardingPageId,
                              className: `!text-token-error-foreground`,
                              leftIconClassName: `icon-xs text-token-error-foreground`,
                              disabled: isDeleteDisabled,
                              onSelect: () => {
                                onDeleteProject(
                                  group.projectLabel,
                                  projectArchivedThreads,
                                );
                              },
                              children:
                                dataControlsRuntime.dataControlsReactRuntime.createElement(
                                  dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                                  {
                                    ...dataControlsRuntime
                                      .archivedChatFilterMessages
                                      .deleteProjectChats,
                                  },
                                ),
                            },
                          ),
                      },
                    )
                  : null,
              ],
            }),
          ],
        })
      : null;
  let dataControlsBinding143;
  {
    let dataControlsBinding238;
    ((dataControlsBinding238 = (dataControlsOperand9) => {
      switch (dataControlsOperand9.kind) {
        case `cloud`:
          return dataControlsRuntime.dataControlsReactRuntime.createElement(
            ArchivedCloudTaskRow,
            {
              archivedTask: dataControlsOperand9.task,
              showProjectName: !showHeader,
              key: `cloud:${dataControlsOperand9.task.id}`,
            },
          );
        case `local`:
          return dataControlsRuntime.dataControlsReactRuntime.createElement(
            ArchivedLocalThreadRow,
            {
              archivedThread: dataControlsOperand9.thread,
              isDeleteDisabled: isDeleteDisabled,
              isUnarchiving:
                isUnarchiving &&
                unarchivingThreadId === dataControlsOperand9.thread.id,
              showDeleteButton:
                hostId ===
                dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dEm,
              showProjectName: !showHeader,
              onDelete: () => {
                onDelete(dataControlsOperand9.thread);
              },
              onUnarchive: () => {
                onUnarchive(dataControlsOperand9.thread);
              },
              key: `local:${dataControlsOperand9.thread.id}`,
            },
          );
      }
    }),
      (dataControlsBinding143 = group.entries.map(dataControlsBinding238)));
  }
  return dataControlsRuntime.dataControlsReactRuntime.createElement(`div`, {
    className: `flex flex-col`,
    children: [dataControlsBinding142, dataControlsBinding143],
  });
}
function ArchivedLocalThreadRow(dataControlsOperand4) {
  let {
      archivedThread: archivedThread,
      isDeleteDisabled: isDeleteDisabled,
      isUnarchiving: isUnarchiving,
      showDeleteButton: showDeleteButton,
      showProjectName: showProjectName,
      onDelete: onDelete,
      onUnarchive: onUnarchive,
    } = dataControlsOperand4,
    dataControlsBinding118 =
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy(),
    dataControlsBinding119 = dataControlsRuntime
      .appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dH(
        archivedThread.name?.trim() || archivedThread.preview,
      )
      .trim();
  let dataControlsBinding120 = dataControlsBinding119,
    dataControlsBinding121,
    dataControlsBinding122,
    dataControlsBinding123,
    dataControlsBinding124;
  {
    let dataControlsBinding246 = new Date(
        Number(archivedThread.updatedAt) * 1e3,
      ),
      dataControlsBinding247 = new Date(Number(archivedThread.createdAt) * 1e3),
      dataControlsBinding248 = Number.isFinite(dataControlsBinding246.getTime())
        ? dataControlsBinding246
        : Number.isFinite(dataControlsBinding247.getTime())
          ? dataControlsBinding247
          : null,
      dataControlsBinding249;
    ((dataControlsBinding249 = showProjectName
      ? (dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nQn(
          archivedThread.cwd,
        ) ??
        dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nQn(
          archivedThread.path,
        ))
      : null),
      (dataControlsBinding123 = dataControlsBinding249),
      (dataControlsBinding122 = dataControlsBinding248 != null),
      (dataControlsBinding121 = dataControlsBinding122
        ? dataControlsBinding118.formatDate(dataControlsBinding248, {
            year: `numeric`,
            month: `short`,
            day: `numeric`,
          })
        : ``),
      (dataControlsBinding124 = dataControlsBinding122
        ? dataControlsBinding118.formatTime(dataControlsBinding248, {
            hour: `numeric`,
            minute: `2-digit`,
          })
        : ``));
  }
  let dataControlsBinding125 = dataControlsBinding124,
    dataControlsBinding126 = dataControlsBinding118.formatMessage({
      id: `settings.dataControls.archivedChats.deleteAriaLabel`,
      defaultMessage: `Delete archived chat`,
      description: `Aria label for deleting an archived chat`,
    });
  let dataControlsBinding127 = dataControlsBinding126,
    dataControlsBinding128 =
      dataControlsBinding120.length > 0
        ? dataControlsBinding120
        : dataControlsRuntime.dataControlsReactRuntime.createElement(
            dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              id: `settings.dataControls.archivedChats.untitled`,
              defaultMessage: `Untitled chat`,
              description: `Fallback title for an archived chat`,
            },
          );
  let dataControlsBinding129 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(`div`, {
      className: `truncate text-base font-medium`,
      children: dataControlsBinding128,
    });
  let dataControlsBinding130 = dataControlsBinding122
    ? dataControlsBinding123
      ? dataControlsRuntime.dataControlsReactRuntime.createElement(
          dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `settings.dataControls.archivedChats.dateTimeWithRepo`,
            defaultMessage: `{date}, {time} • {repo}`,
            description: `Date, time, and repo name for an archived chat`,
            values: {
              date: dataControlsBinding121,
              time: dataControlsBinding125,
              repo: dataControlsBinding123,
            },
          },
        )
      : dataControlsRuntime.dataControlsReactRuntime.createElement(
          dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `settings.dataControls.archivedChats.dateTime`,
            defaultMessage: `{date}, {time}`,
            description: `Date and time for an archived chat`,
            values: {
              date: dataControlsBinding121,
              time: dataControlsBinding125,
            },
          },
        )
    : null;
  let dataControlsBinding131 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(`div`, {
      className: `mt-1 flex min-w-0 flex-col gap-0.5 text-sm`,
      children: dataControlsRuntime.dataControlsReactRuntime.createElement(
        `div`,
        {
          className: `truncate text-token-text-secondary`,
          children: dataControlsBinding130,
        },
      ),
    });
  let dataControlsBinding132 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(`div`, {
      className: `min-w-0 flex-1 text-left text-token-text-primary`,
      children: [dataControlsBinding129, dataControlsBinding131],
    });
  let dataControlsBinding133 = showDeleteButton
    ? dataControlsRuntime.dataControlsReactRuntime.createElement(
        dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwYp,
        {
          tooltipContent: dataControlsBinding127,
          children: dataControlsRuntime.dataControlsReactRuntime.createElement(
            dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
            {
              "aria-label": dataControlsBinding127,
              className: `text-token-charts-red enabled:hover:bg-token-charts-red/10`,
              color: `ghost`,
              size: `toolbar`,
              uniform: !0,
              disabled: isDeleteDisabled,
              onClick: onDelete,
              children:
                dataControlsRuntime.dataControlsReactRuntime.createElement(
                  dataControlsRuntime.appInitialAppMainOnboardingPageId,
                  {
                    className: `icon-xs`,
                  },
                ),
            },
          ),
        },
      )
    : null;
  let dataControlsBinding134 = () => {
    isDeleteDisabled || onUnarchive();
  };
  let dataControlsBinding135 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        ...dataControlsRuntime.archivedChatActionMessages.unarchive,
      },
    );
  let dataControlsBinding136 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
      {
        className: `shrink-0`,
        color: `secondary`,
        size: `toolbar`,
        disabled: isDeleteDisabled,
        loading: isUnarchiving,
        onClick: dataControlsBinding134,
        children: dataControlsBinding135,
      },
    );
  let dataControlsBinding137 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(`div`, {
      className: `flex shrink-0 items-center gap-2 opacity-0 group-focus-within:opacity-100 group-hover:opacity-100`,
      children: [dataControlsBinding133, dataControlsBinding136],
    });
  return dataControlsRuntime.dataControlsReactRuntime.createElement(`div`, {
    className: `group flex w-full items-center justify-between gap-3 border-b border-token-border bg-[var(--color-background-panel,var(--color-token-bg-fog))] px-4 py-3 last:border-b-0 hover:bg-token-list-hover-background`,
    children: [dataControlsBinding132, dataControlsBinding137],
  });
}
function DeleteArchivedChatsDialog(dataControlsOperand7) {
  let {
    state: state,
    onConfirm: onConfirm,
    onOpenChange: onOpenChange,
  } = dataControlsOperand7;
  if (state == null) return null;
  let dataControlsBinding181 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwBa,
      {
        children: dataControlsRuntime.dataControlsReactRuntime.createElement(
          dataControlsRuntime._appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwYa,
          {
            title:
              state.kind === `all`
                ? dataControlsRuntime.dataControlsReactRuntime.createElement(
                    dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                    {
                      id: `settings.dataControls.archivedChats.deleteAllConfirm.title`,
                      defaultMessage: `Delete all archived local chats?`,
                      description: `Title for confirming deletion of all archived local chats`,
                    },
                  )
                : state.kind === `project`
                  ? dataControlsRuntime.dataControlsReactRuntime.createElement(
                      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                      {
                        id: `settings.dataControls.archivedChats.deleteProjectConfirm.title`,
                        defaultMessage: `Delete all in project?`,
                        description: `Title for confirming deletion of archived local chats in one project`,
                      },
                    )
                  : dataControlsRuntime.dataControlsReactRuntime.createElement(
                      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                      {
                        id: `settings.dataControls.archivedChats.deleteConfirm.title`,
                        defaultMessage: `Delete archived chat?`,
                        description: `Title for confirming deletion of an archived chat`,
                      },
                    ),
          },
        ),
      },
    );
  let dataControlsBinding182 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwBa,
      {
        className: `text-token-description-foreground`,
        children: dataControlsRuntime.dataControlsReactRuntime.createElement(
          `p`,
          {
            children:
              state.kind === `all`
                ? dataControlsRuntime.dataControlsReactRuntime.createElement(
                    dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                    {
                      id: `settings.dataControls.archivedChats.deleteAllConfirm.body`,
                      defaultMessage: `This permanently deletes all local archived chats`,
                      description: `Body copy in the delete all archived local chats confirmation dialog`,
                    },
                  )
                : state.kind === `project`
                  ? dataControlsRuntime.dataControlsReactRuntime.createElement(
                      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                      {
                        id: `settings.dataControls.archivedChats.deleteProjectConfirm.body`,
                        defaultMessage: `This permanently deletes {count, plural, one {# local archived chat} other {# local archived chats}} in this project`,
                        description: `Body copy in the delete archived local chats in project confirmation dialog`,
                        values: {
                          count: state.threads.length,
                        },
                      },
                    )
                  : dataControlsRuntime.dataControlsReactRuntime.createElement(
                      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                      {
                        id: `settings.dataControls.archivedChats.deleteConfirm.body`,
                        defaultMessage: `This permanently deletes the archived chat`,
                        description: `Body copy in the delete archived chat confirmation dialog`,
                      },
                    ),
          },
        ),
      },
    );
  let dataControlsBinding183 = () => {
    onOpenChange(!1);
  };
  let dataControlsBinding184 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        id: `settings.dataControls.archivedChats.deleteConfirm.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for deleting archived chats`,
      },
    );
  let dataControlsBinding185 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
      {
        color: `ghost`,
        onClick: dataControlsBinding183,
        children: dataControlsBinding184,
      },
    );
  let dataControlsBinding186 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        ...dataControlsRuntime.archivedChatActionMessages.delete,
      },
    );
  let dataControlsBinding187 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
      {
        color: `danger`,
        onClick: onConfirm,
        children: dataControlsBinding186,
      },
    );
  let dataControlsBinding188 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwBa,
      {
        children: dataControlsRuntime.dataControlsReactRuntime.createElement(
          dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwVa,
          {
            children: [dataControlsBinding185, dataControlsBinding187],
          },
        ),
      },
    );
  let dataControlsBinding189 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwA,
      {
        children: [
          dataControlsBinding181,
          dataControlsBinding182,
          dataControlsBinding188,
        ],
      },
    );
  return dataControlsRuntime.dataControlsReactRuntime.createElement(
    dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwWo,
    {
      open: !0,
      showDialogClose: !1,
      onOpenChange: onOpenChange,
      children: dataControlsBinding189,
    },
  );
}
export {
  ArchivedChatsGroup,
  ArchivedChatsProjectFilterMenu,
  DeleteArchivedChatsDialog,
};
