// Restored from ref/webview/assets/data-controls-CwyuAPUl.js
// Semantic implementation module for archived cloud task rows and pagination.

import dataControlsRuntime from "./runtime-impl";
function ArchivedCloudTaskRow(dataControlsOperand2) {
  let { archivedTask: archivedTask, showProjectName: showProjectName } =
      dataControlsOperand2,
    dataControlsBinding66 =
      dataControlsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wKo(
        dataControlsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wE,
      ),
    dataControlsBinding67 =
      dataControlsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wCc(),
    dataControlsBinding68 =
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy(),
    dataControlsBinding69 =
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dFa(),
    dataControlsBinding70,
    dataControlsBinding71;
  ((dataControlsBinding70 = [`recover-cloud-task`, archivedTask.id]),
    (dataControlsBinding71 = () =>
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dK.safePost(
        `/wham/tasks/{task_id}/recover`,
        {
          parameters: {
            path: {
              task_id: archivedTask.id,
            },
          },
        },
      )));
  let dataControlsBinding72 = () => {
    dataControlsBinding66
      .get(
        dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
      )
      .danger(
        dataControlsBinding68.formatMessage(
          dataControlsRuntime.archivedChatActionMessages.unarchiveError,
        ),
      );
  };
  let dataControlsBinding73 = () => {
    (dataControlsBinding67.setQueryData(
      [`tasks`, `archived`],
      (dataControlsOperand26) =>
        dataControlsOperand26 == null
          ? dataControlsOperand26
          : {
              ...dataControlsOperand26,
              pages: dataControlsOperand26.pages.map((item) => ({
                ...item,
                items: item.items.filter(
                  (_item) => _item.id !== archivedTask.id,
                ),
              })),
            },
    ),
      dataControlsBinding66
        .get(
          dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
        )
        .info(
          dataControlsRuntime.dataControlsReactRuntime.createElement(`span`, {
            children: [
              dataControlsRuntime.dataControlsReactRuntime.createElement(
                dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  ...dataControlsRuntime.archivedChatActionMessages
                    .unarchiveSuccessPlain,
                },
              ),
              dataControlsRuntime.dataControlsReactRuntime.createElement(
                `button`,
                {
                  className: `pointer-events-auto ml-1 cursor-interaction text-token-link underline-offset-2 hover:underline`,
                  type: `button`,
                  onClick: () => {
                    dataControlsBinding69(`/remote/${archivedTask.id}`);
                  },
                  children:
                    dataControlsRuntime.dataControlsReactRuntime.createElement(
                      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                      {
                        ...dataControlsRuntime.archivedChatActionMessages
                          .viewNow,
                      },
                    ),
                },
              ),
            ],
          }),
          {
            id: `recover-cloud-task-${archivedTask.id}`,
          },
        ));
  };
  let dataControlsBinding74 = () => {
    dataControlsBinding67.invalidateQueries({
      queryKey: [`tasks`],
    });
  };
  let dataControlsBinding75 = {
    mutationKey: dataControlsBinding70,
    mutationFn: dataControlsBinding71,
    onError: dataControlsBinding72,
    onSuccess: dataControlsBinding73,
    onSettled: dataControlsBinding74,
  };
  let dataControlsBinding76 =
      dataControlsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wTc(
        dataControlsBinding75,
      ),
    dataControlsBinding77 = dataControlsRuntime
      .appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dH(
        archivedTask.title ?? ``,
      )
      .trim();
  let dataControlsBinding78 = dataControlsBinding77,
    dataControlsBinding79,
    dataControlsBinding80,
    dataControlsBinding81,
    dataControlsBinding82;
  {
    let dataControlsBinding258 = getArchivedTaskDate(archivedTask),
      dataControlsBinding259;
    ((dataControlsBinding259 = showProjectName
      ? archivedTask.task_status_display?.environment_label?.trim()
      : null),
      (dataControlsBinding80 = dataControlsBinding259),
      (dataControlsBinding81 = dataControlsBinding258 != null),
      (dataControlsBinding79 = dataControlsBinding81
        ? dataControlsBinding68.formatDate(dataControlsBinding258, {
            year: `numeric`,
            month: `short`,
            day: `numeric`,
          })
        : ``),
      (dataControlsBinding82 = dataControlsBinding81
        ? dataControlsBinding68.formatTime(dataControlsBinding258, {
            hour: `numeric`,
            minute: `2-digit`,
          })
        : ``));
  }
  let dataControlsBinding83 = dataControlsBinding82,
    dataControlsBinding84 =
      dataControlsRuntime.dataControlsReactRuntime.createElement(
        dataControlsRuntime.appInitialAppMainOnboardingPageXt,
        {
          className: `icon-sm shrink-0`,
        },
      );
  let dataControlsBinding85 =
    dataControlsBinding78.length > 0
      ? dataControlsBinding78
      : dataControlsRuntime.dataControlsReactRuntime.createElement(
          dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `settings.dataControls.archivedChats.untitled`,
            defaultMessage: `Untitled chat`,
            description: `Fallback title for an archived chat`,
          },
        );
  let dataControlsBinding86 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(`div`, {
      className: `flex min-w-0 items-center gap-2 text-base font-medium`,
      children: [
        dataControlsBinding84,
        dataControlsRuntime.dataControlsReactRuntime.createElement(`span`, {
          className: `truncate`,
          children: dataControlsBinding85,
        }),
      ],
    });
  let dataControlsBinding87 = dataControlsBinding81
    ? dataControlsBinding80
      ? dataControlsRuntime.dataControlsReactRuntime.createElement(
          dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `settings.dataControls.archivedChats.dateTimeWithEnvironment`,
            defaultMessage: `{date}, {time} • {environment}`,
            description: `Date, time, and environment name for an archived cloud chat`,
            values: {
              date: dataControlsBinding79,
              time: dataControlsBinding83,
              environment: dataControlsBinding80,
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
              date: dataControlsBinding79,
              time: dataControlsBinding83,
            },
          },
        )
    : null;
  let dataControlsBinding88 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(`div`, {
      className: `mt-1 flex min-w-0 flex-col gap-0.5 text-sm`,
      children: dataControlsRuntime.dataControlsReactRuntime.createElement(
        `div`,
        {
          className: `truncate text-token-text-secondary`,
          children: dataControlsBinding87,
        },
      ),
    });
  let dataControlsBinding89 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(`div`, {
      className: `min-w-0 flex-1 text-left text-token-text-primary`,
      children: [dataControlsBinding86, dataControlsBinding88],
    });
  let dataControlsBinding90 = () => {
    dataControlsBinding76.isPending || dataControlsBinding76.mutate();
  };
  let dataControlsBinding91 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        ...dataControlsRuntime.archivedChatActionMessages.unarchive,
      },
    );
  let dataControlsBinding92 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
      {
        className: `shrink-0`,
        color: `secondary`,
        size: `toolbar`,
        disabled: dataControlsBinding76.isPending,
        loading: dataControlsBinding76.isPending,
        onClick: dataControlsBinding90,
        children: dataControlsBinding91,
      },
    );
  return dataControlsRuntime.dataControlsReactRuntime.createElement(`div`, {
    className: `flex w-full items-center justify-between gap-3 border-b border-token-border bg-[var(--color-background-panel,var(--color-token-bg-fog))] px-4 py-3 last:border-b-0 hover:bg-token-list-hover-background`,
    children: [dataControlsBinding89, dataControlsBinding92],
  });
}
function getArchivedTaskDate(dataControlsOperand34) {
  let dataControlsBinding290 =
    dataControlsOperand34.updated_at ?? dataControlsOperand34.created_at;
  if (dataControlsBinding290 == null) return null;
  let dataControlsBinding291 = new Date(dataControlsBinding290 * 1e3);
  return Number.isFinite(dataControlsBinding291.getTime())
    ? dataControlsBinding291
    : null;
}
function useArchivedCloudTasksQuery() {
  let dataControlsBinding271 = [`tasks`, `archived`];
  let dataControlsBinding272;
  return (
    (dataControlsBinding272 = {
      queryKey: dataControlsBinding271,
      initialPageParam: null,
      queryFn: fetchArchivedTasksPageFromQuery,
      getNextPageParam: getNextArchivedTaskCursor,
      select: flattenArchivedTaskPages,
      staleTime:
        dataControlsRuntime
          .appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wM
          .FIVE_SECONDS,
    }),
    dataControlsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wEc(
      dataControlsBinding272,
    )
  );
}
function flattenArchivedTaskPages(dataControlsOperand54) {
  return dataControlsOperand54.pages.flatMap(getArchivedTaskPageItems);
}
function getArchivedTaskPageItems(dataControlsOperand59) {
  return dataControlsOperand59.items;
}
function getNextArchivedTaskCursor(dataControlsOperand56) {
  return dataControlsOperand56.cursor ?? null;
}
function fetchArchivedTasksPageFromQuery(dataControlsOperand50) {
  let { pageParam: pageParam } = dataControlsOperand50;
  return fetchArchivedTasksPage(pageParam);
}
async function fetchArchivedTasksPage(dataControlsOperand22) {
  try {
    return await dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dK.safeGet(
      `/wham/tasks/list`,
      {
        parameters: {
          query: {
            limit: 20,
            cursor: dataControlsOperand22,
            task_filter: `archived`,
          },
        },
      },
    );
  } catch (dataControlsBinding289) {
    if (
      dataControlsBinding289 instanceof
        dataControlsRuntime._appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wD &&
      (dataControlsBinding289.status === 401 ||
        dataControlsBinding289.status === 403 ||
        dataControlsBinding289.status === 404)
    )
      return {
        items: [],
        cursor: null,
      };
    throw dataControlsBinding289;
  }
}
export { ArchivedCloudTaskRow, useArchivedCloudTasksQuery };
