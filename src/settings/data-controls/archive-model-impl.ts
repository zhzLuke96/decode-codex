// Restored from ref/webview/assets/data-controls-CwyuAPUl.js
// Semantic implementation module for archived chat filtering and grouping.

import dataControlsRuntime from "./runtime-impl";
function buildProjectArchiveGroupId(dataControlsOperand47) {
  return `project:${dataControlsOperand47.projectKind}:${dataControlsOperand47.hostId ?? ``}:${dataControlsOperand47.projectId}`;
}
function buildArchivedChatEntries({
  automationThreadIds = new Set(),
  cloudTasks: cloudTasks,
  localThreads: localThreads,
  projects = [],
  projectlessThreadIds = new Set(),
  threadProjectAssignments: threadProjectAssignments,
  threadWorkspaceRootHints: threadWorkspaceRootHints,
}) {
  return [
    ...(cloudTasks ?? []).map((item) => {
      let dataControlsBinding260 = dataControlsRuntime
          .appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dH(
            item.title ?? ``,
          )
          .trim(),
        dataControlsBinding261 =
          item.task_status_display?.environment_label?.trim() ?? ``,
        dataControlsBinding262 =
          dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nQn(
            dataControlsBinding261,
          ),
        dataControlsBinding263 = resolveArchivedChatProject({
          assignment: threadProjectAssignments?.[item.id],
          projects: projects,
        }),
        dataControlsBinding264 =
          dataControlsBinding263?.label ?? dataControlsBinding262;
      return {
        kind: `cloud`,
        createdAt: getFiniteTimestamp(item.created_at, item.updated_at),
        filterGroupId: projectlessThreadIds.has(item.id)
          ? dataControlsRuntime.projectlessArchiveGroupId
          : (dataControlsBinding263?.groupId ?? `special:none`),
        projectId:
          dataControlsBinding262 == null ? null : dataControlsBinding261,
        projectLabel: dataControlsBinding264,
        searchValues: [
          dataControlsBinding260,
          dataControlsBinding264 ?? ``,
          dataControlsBinding261,
        ],
        task: item,
        title: dataControlsBinding260,
        updatedAt: getFiniteTimestamp(item.updated_at, item.created_at),
      };
    }),
    ...(localThreads ?? []).map((item) => {
      let dataControlsBinding250 = dataControlsRuntime
          .appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dH(
            item.name?.trim() || item.preview,
          )
          .trim(),
        dataControlsBinding251 =
          dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nQn(
            item.cwd,
          ),
        dataControlsBinding252 =
          dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nQn(
            item.path,
          ),
        dataControlsBinding253 = resolveArchivedChatProject({
          assignment: threadProjectAssignments?.[item.id],
          fallbackPaths: [threadWorkspaceRootHints?.[item.id], item.cwd],
          projects: projects,
        }),
        dataControlsBinding254 =
          dataControlsBinding253?.label ??
          dataControlsBinding251 ??
          dataControlsBinding252;
      return {
        kind: `local`,
        createdAt: getFiniteTimestamp(item.createdAt, item.updatedAt),
        filterGroupId: automationThreadIds.has(item.id)
          ? dataControlsRuntime.automationsArchiveGroupId
          : projectlessThreadIds.has(item.id)
            ? dataControlsRuntime.projectlessArchiveGroupId
            : (dataControlsBinding253?.groupId ?? `special:none`),
        projectId:
          dataControlsBinding251 == null
            ? dataControlsBinding252 == null
              ? null
              : item.path
            : item.cwd,
        projectLabel: dataControlsBinding254,
        searchValues: [
          dataControlsBinding250,
          dataControlsBinding254 ?? ``,
          dataControlsBinding251 ?? ``,
          dataControlsBinding252 ?? ``,
        ],
        thread: item,
        title: dataControlsBinding250,
        updatedAt: getFiniteTimestamp(item.updatedAt, item.createdAt),
      };
    }),
  ].sort(
    (dataControlsOperand60, dataControlsOperand61) =>
      dataControlsOperand61.updatedAt - dataControlsOperand60.updatedAt,
  );
}
function createArchivedChatSearch(dataControlsOperand30) {
  let dataControlsBinding285 =
    new dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwXf(
      dataControlsOperand30,
      {
        ignoreLocation: !0,
        keys: [`searchValues`],
        threshold: 0.4,
      },
    );
  return (dataControlsOperand41) => {
    let dataControlsBinding295 = dataControlsOperand41.trim();
    return dataControlsBinding295.length === 0
      ? dataControlsOperand30
      : dataControlsBinding285
          .search(dataControlsBinding295)
          .map(({ item: item }) => item);
  };
}
function groupArchivedChatEntries({
  entries: entries,
  groupKey: groupKey,
  kindFilter: kindFilter,
  projectFilter = {
    kind: `all`,
  },
  searchQuery: searchQuery,
  sortKey: sortKey,
}) {
  let dataControlsBinding239 = createArchivedChatSearch(
    entries.filter(
      (item) =>
        (kindFilter === `all` || item.kind === kindFilter) &&
        (projectFilter.kind === `all` ||
          item.filterGroupId === projectFilter.groupId),
    ),
  )(searchQuery);
  if (groupKey === `none`)
    return dataControlsBinding239.length === 0
      ? []
      : [
          {
            id: `all`,
            projectLabel: null,
            entries: [...dataControlsBinding239].sort(
              (dataControlsOperand63, dataControlsOperand64) =>
                compareArchivedEntries(
                  dataControlsOperand63,
                  dataControlsOperand64,
                  sortKey,
                ),
            ),
          },
        ];
  let dataControlsBinding240 = new Map();
  for (let dataControlsBinding286 of dataControlsBinding239) {
    let dataControlsBinding287 = dataControlsBinding286.projectId ?? ``,
      dataControlsBinding288 = dataControlsBinding240.get(
        dataControlsBinding287,
      );
    if (dataControlsBinding288 != null) {
      dataControlsBinding288.entries.push(dataControlsBinding286);
      continue;
    }
    dataControlsBinding240.set(dataControlsBinding287, {
      id: dataControlsBinding287,
      projectLabel: dataControlsBinding286.projectLabel,
      entries: [dataControlsBinding286],
    });
  }
  let dataControlsBinding241 = [...dataControlsBinding240.values()];
  for (let dataControlsBinding299 of dataControlsBinding241)
    dataControlsBinding299.entries.sort(
      (dataControlsOperand65, dataControlsOperand66) =>
        compareArchivedEntries(
          dataControlsOperand65,
          dataControlsOperand66,
          sortKey,
        ),
    );
  return dataControlsBinding241.sort(
    (dataControlsOperand20, dataControlsOperand21) => {
      if (sortKey === `alphabetical`) {
        let dataControlsBinding293 = (
          dataControlsOperand20.projectLabel ?? ``
        ).localeCompare(dataControlsOperand21.projectLabel ?? ``);
        return dataControlsBinding293 === 0
          ? dataControlsOperand20.id.localeCompare(dataControlsOperand21.id)
          : dataControlsBinding293;
      }
      let dataControlsBinding275 =
        getArchivedGroupSortValue(dataControlsOperand21, sortKey) -
        getArchivedGroupSortValue(dataControlsOperand20, sortKey);
      if (dataControlsBinding275 !== 0) return dataControlsBinding275;
      let dataControlsBinding276 = (
        dataControlsOperand20.projectLabel ?? ``
      ).localeCompare(dataControlsOperand21.projectLabel ?? ``);
      return dataControlsBinding276 === 0
        ? dataControlsOperand20.id.localeCompare(dataControlsOperand21.id)
        : dataControlsBinding276;
    },
  );
}
function getLocalProjectArchivedThreads(
  dataControlsOperand39,
  dataControlsOperand40,
) {
  return dataControlsOperand39.flatMap((item) =>
    item.kind === `local` && (item.projectId ?? ``) === dataControlsOperand40
      ? [item.thread]
      : [],
  );
}
function resolveArchivedChatProject({
  assignment: assignment,
  fallbackPaths = [],
  projects: projects,
}) {
  if (assignment != null) {
    let dataControlsBinding282 = projects.find((item) =>
      item.projectId !== assignment.projectId ||
      item.projectKind !== assignment.projectKind
        ? !1
        : assignment.projectKind === `local`
          ? !0
          : item.hostId === assignment.hostId && item.path === assignment.path,
    );
    if (dataControlsBinding282 != null) return dataControlsBinding282;
  }
  for (let dataControlsBinding277 of fallbackPaths) {
    if (
      dataControlsBinding277 == null ||
      dataControlsBinding277.trim().length === 0
    )
      continue;
    let dataControlsBinding279 = dataControlsRuntime
        .appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wEi(
          dataControlsBinding277,
        )
        .replace(/\/+archivedChatFilterMessages/, ``),
      dataControlsBinding280 = projects.filter(
        (item) =>
          item.projectKind === `local` &&
          item.path != null &&
          dataControlsRuntime
            .appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wEi(
              item.path,
            )
            .replace(/\/+archivedChatFilterMessages/, ``) ===
            dataControlsBinding279,
      );
    if (dataControlsBinding280.length === 1)
      return dataControlsBinding280[0] ?? null;
  }
  return null;
}
function getFiniteTimestamp(dataControlsOperand37, dataControlsOperand38) {
  return dataControlsOperand37 != null && Number.isFinite(dataControlsOperand37)
    ? dataControlsOperand37
    : dataControlsOperand38 != null && Number.isFinite(dataControlsOperand38)
      ? dataControlsOperand38
      : 0;
}
function getArchiveEntrySortValue(
  dataControlsOperand32,
  dataControlsOperand33,
) {
  switch (dataControlsOperand33) {
    case `alphabetical`:
      return 0;
    case `created`:
      return dataControlsOperand32.createdAt;
    case `updated`:
      return dataControlsOperand32.updatedAt;
  }
}
function compareArchivedEntries(
  dataControlsOperand27,
  dataControlsOperand28,
  dataControlsOperand29,
) {
  if (dataControlsOperand29 === `alphabetical`) {
    let dataControlsBinding296 = dataControlsOperand27.title.localeCompare(
      dataControlsOperand28.title,
    );
    return dataControlsBinding296 === 0
      ? dataControlsOperand28.updatedAt - dataControlsOperand27.updatedAt
      : dataControlsBinding296;
  }
  let dataControlsBinding284 =
    getArchiveEntrySortValue(dataControlsOperand28, dataControlsOperand29) -
    getArchiveEntrySortValue(dataControlsOperand27, dataControlsOperand29);
  return dataControlsBinding284 === 0
    ? dataControlsOperand27.title.localeCompare(dataControlsOperand28.title)
    : dataControlsBinding284;
}
function getArchivedGroupSortValue(
  dataControlsOperand42,
  dataControlsOperand43,
) {
  let dataControlsBinding298 = 0;
  for (let dataControlsBinding300 of dataControlsOperand42.entries)
    dataControlsBinding298 = Math.max(
      dataControlsBinding298,
      getArchiveEntrySortValue(dataControlsBinding300, dataControlsOperand43),
    );
  return dataControlsBinding298;
}
function getProjectGroupId(dataControlsOperand53) {
  let { groupId: groupId } = dataControlsOperand53;
  return groupId;
}
function getAutomationInboxThreadIds(dataControlsOperand46) {
  return dataControlsOperand46.automationId != null &&
    dataControlsOperand46.threadId != null
    ? [dataControlsOperand46.threadId]
    : [];
}
function fetchAutomationInboxItems() {
  return dataControlsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wI(
    `inbox-items`,
    {
      params: {
        limit: dataControlsRuntime.automationInboxFetchLimit,
      },
    },
  );
}
function getArchivedThreadId(dataControlsOperand62) {
  return dataControlsOperand62.id;
}
function getLocalArchivedThreadIds(dataControlsOperand49) {
  return dataControlsOperand49.kind === `local`
    ? [dataControlsOperand49.thread.id]
    : [];
}
function isLocalArchiveEntry(dataControlsOperand55) {
  return dataControlsOperand55.kind === `local`;
}
function getArchiveProjectFilterGroupId(dataControlsOperand58) {
  return dataControlsOperand58.groupId;
}
function getKindFilterLabelMessage(dataControlsOperand35) {
  switch (dataControlsOperand35) {
    case `all`:
      return dataControlsRuntime.archivedChatFilterMessages.allChats;
    case `cloud`:
      return dataControlsRuntime.archivedChatFilterMessages.cloud;
    case `local`:
      return dataControlsRuntime.archivedChatFilterMessages.local;
  }
}
function getDeleteArchivedChatsToastId(dataControlsOperand31) {
  return dataControlsOperand31.kind === `all`
    ? `delete-archived-chats`
    : dataControlsOperand31.kind === `project`
      ? `delete-archived-project-${dataControlsOperand31.projectLabel ?? `no-project`}`
      : `delete-archived-thread-${dataControlsOperand31.thread.id}`;
}
export {
  buildArchivedChatEntries,
  buildProjectArchiveGroupId,
  createArchivedChatSearch,
  fetchAutomationInboxItems,
  getArchiveProjectFilterGroupId,
  getArchivedThreadId,
  getAutomationInboxThreadIds,
  getDeleteArchivedChatsToastId,
  getKindFilterLabelMessage,
  getLocalArchivedThreadIds,
  getLocalProjectArchivedThreads,
  getProjectGroupId,
  groupArchivedChatEntries,
  isLocalArchiveEntry,
};
