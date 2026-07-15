// Restored from ref/webview/assets/data-controls-CwyuAPUl.js
// Data controls settings restored from the current Codex webview chunk.

import dataControlsRuntime from "./data-controls/runtime-impl";
import { ArchivedChatsSettingsPanel } from "./data-controls/archived-chats-panel-impl";
import { useArchivedCloudTasksQuery } from "./data-controls/archived-cloud-tasks-impl";
import {
  buildArchivedChatEntries,
  buildProjectArchiveGroupId,
  fetchAutomationInboxItems,
  getAutomationInboxThreadIds,
  getProjectGroupId,
} from "./data-controls/archive-model-impl";
function DataControlsSettings() {
  let { selectedHostId: selectedHostId } =
      dataControlsRuntime.appInitialAppMainOnboardingPageMu(),
    dataControlsBinding199 =
      dataControlsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wQo(
        dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTi,
      ),
    dataControlsBinding200 =
      dataControlsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wQo(
        dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwJr,
      ),
    dataControlsBinding201 =
      dataControlsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wQo(
        dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkGn,
      ),
    dataControlsBinding202 =
      dataControlsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wQo(
        dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwYr,
      ),
    dataControlsBinding203 = {
      queryKey: [`archived-threads`, selectedHostId],
      queryFn: () =>
        dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dYg(
          `list-archived-threads`,
          {
            hostId: selectedHostId,
          },
        ),
      enabled: !0,
      staleTime:
        dataControlsRuntime
          .appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wM
          .FIVE_SECONDS,
    };
  let {
      data: data,
      isLoading: isLoading,
      isError: isError,
    } = dataControlsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wAc(
      dataControlsBinding203,
    ),
    {
      data: _data,
      fetchNextPage: fetchNextPage,
      hasNextPage: hasNextPage,
      isLoading: _isLoading,
      isFetchNextPageError: isFetchNextPageError,
      isFetchingNextPage: dataControlsBinding204,
      isError: _isError,
    } = useArchivedCloudTasksQuery(),
    dataControlsBinding205 =
      dataControlsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wA(
        `inbox-items`,
        {
          limit: dataControlsRuntime.automationInboxFetchLimit,
        },
      );
  let dataControlsBinding206 =
      selectedHostId ===
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dEm,
    dataControlsBinding207 = {
      queryKey: dataControlsBinding205,
      queryFn: fetchAutomationInboxItems,
      enabled: dataControlsBinding206,
      staleTime:
        dataControlsRuntime
          .appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wM
          .FIVE_SECONDS,
    };
  let { data: __data, isLoading: __isLoading } =
      dataControlsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wAc(
        dataControlsBinding207,
      ),
    dataControlsBinding208,
    dataControlsBinding209;
  {
    let dataControlsBinding243 = selectedHostId === `local` ? data : [],
      dataControlsBinding244;
    {
      let dataControlsBinding274 = new Map();
      for (let dataControlsBinding281 of dataControlsRuntime.AppInitialAppMainOnboardingPageNu(
        dataControlsBinding199,
        selectedHostId,
      )) {
        let dataControlsBinding283 = {
          groupId: buildProjectArchiveGroupId(dataControlsBinding281),
          hostId: dataControlsBinding281.hostId,
          label: dataControlsBinding281.label,
          path: dataControlsBinding281.path,
          projectId: dataControlsBinding281.projectId,
          projectKind: dataControlsBinding281.projectKind,
        };
        dataControlsBinding274.set(
          dataControlsBinding283.groupId,
          dataControlsBinding283,
        );
      }
      dataControlsBinding244 = [...dataControlsBinding274.values()];
    }
    dataControlsBinding208 = dataControlsBinding244;
    let dataControlsBinding245;
    ((dataControlsBinding245 = new Set(
      __data?.items.flatMap(getAutomationInboxThreadIds) ?? [],
    )),
      (dataControlsBinding209 = buildArchivedChatEntries({
        automationThreadIds: dataControlsBinding245,
        cloudTasks: _data,
        localThreads: dataControlsBinding243,
        projects: dataControlsBinding208,
        projectlessThreadIds: new Set(dataControlsBinding200 ?? []),
        threadProjectAssignments: dataControlsBinding201,
        threadWorkspaceRootHints: dataControlsBinding202,
      })));
  }
  let dataControlsBinding210 = dataControlsBinding209,
    dataControlsBinding211 = dataControlsBinding208.map(getProjectGroupId);
  let dataControlsBinding212 = `${selectedHostId}:${dataControlsBinding211.join(`,`)}`,
    dataControlsBinding213 = hasNextPage && !isFetchNextPageError,
    dataControlsBinding214 =
      isLoading || _isLoading || (selectedHostId === `local` && __isLoading),
    dataControlsBinding215 = isError || (_data == null && _isError);
  return dataControlsRuntime.dataControlsReactRuntime.createElement(
    ArchivedChatsSettingsPanel,
    {
      archivedChats: dataControlsBinding210,
      projects: dataControlsBinding208,
      hostId: selectedHostId,
      hasNextPage: dataControlsBinding213,
      isLoading: dataControlsBinding214,
      isFetchingNextPage: dataControlsBinding204,
      isError: dataControlsBinding215,
      onLoadNextPage: fetchNextPage,
      key: dataControlsBinding212,
    },
  );
}
export { DataControlsSettings };
