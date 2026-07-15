// Restored from ref/webview/assets/data-controls-CwyuAPUl.js
// Semantic implementation module for archived chat toolbar controls.

import dataControlsRuntime from "./runtime-impl";
import { ArchivedChatsProjectFilterMenu } from "./archived-chat-groups-impl";
import { getKindFilterLabelMessage } from "./archive-model-impl";
function ArchivedChatsToolbar(dataControlsOperand8) {
  let {
      kindFilter: kindFilter,
      projectFilter: projectFilter,
      projects: projects,
      sortKey: sortKey,
      onKindFilterChange: onKindFilterChange,
      onProjectFilterChange: onProjectFilterChange,
      onSearchQueryChange: onSearchQueryChange,
      onSortKeyChange: onSortKeyChange,
    } = dataControlsOperand8,
    dataControlsBinding226 =
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy(),
    [dataControlsBinding227, dataControlsBinding228] = (0,
    dataControlsRuntime.dataControlsReactRuntime.useState)(``),
    dataControlsBinding229 =
      dataControlsRuntime.dataControlsReactRuntime.createElement(
        dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLo,
        {
          className: `icon-xs shrink-0 text-token-input-placeholder-foreground`,
        },
      );
  let dataControlsBinding230 = dataControlsBinding226.formatMessage(
    dataControlsRuntime.archivedChatFilterMessages.searchArchivedChats,
  );
  let dataControlsBinding231 = dataControlsBinding226.formatMessage(
    dataControlsRuntime.archivedChatFilterMessages.searchArchivedChats,
  );
  let dataControlsBinding232 = (event) => {
    let dataControlsBinding292 = event.currentTarget.value;
    (dataControlsBinding228(dataControlsBinding292),
      (0, dataControlsRuntime.dataControlsReactRuntime.startTransition)(() => {
        onSearchQueryChange(dataControlsBinding292);
      }));
  };
  let dataControlsBinding233 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(`div`, {
      className: `flex h-[28px] min-h-[28px] min-w-0 flex-1 items-center gap-2 rounded-lg border border-transparent bg-token-foreground/5 px-2 text-base leading-[18px] text-token-foreground`,
      children: [
        dataControlsBinding229,
        dataControlsRuntime.dataControlsReactRuntime.createElement(`input`, {
          className: `min-w-0 flex-1 appearance-none border-0 bg-transparent p-0 text-token-foreground outline-none placeholder:text-token-input-placeholder-foreground`,
          "aria-label": dataControlsBinding230,
          placeholder: dataControlsBinding231,
          value: dataControlsBinding227,
          onChange: dataControlsBinding232,
        }),
      ],
    });
  let dataControlsBinding234 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      ArchivedChatsFilterMenu,
      {
        kindFilter: kindFilter,
        sortKey: sortKey,
        onKindFilterChange: onKindFilterChange,
        onSortKeyChange: onSortKeyChange,
      },
    );
  let dataControlsBinding235 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      ArchivedChatsProjectFilterMenu,
      {
        projectFilter: projectFilter,
        projects: projects,
        onProjectFilterChange: onProjectFilterChange,
      },
    );
  let dataControlsBinding236 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.controlGroupT,
      {
        className: `shrink-0`,
        children: [dataControlsBinding234, dataControlsBinding235],
      },
    );
  return dataControlsRuntime.dataControlsReactRuntime.createElement(`div`, {
    className: `flex flex-col gap-2 md:flex-row md:items-center`,
    children: [dataControlsBinding233, dataControlsBinding236],
  });
}
function ArchivedChatsFilterMenu(dataControlsOperand6) {
  let {
      kindFilter: kindFilter,
      sortKey: sortKey,
      onKindFilterChange: onKindFilterChange,
      onSortKeyChange: onSortKeyChange,
    } = dataControlsOperand6,
    dataControlsBinding146 =
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy(),
    dataControlsBinding147 = dataControlsBinding146.formatMessage(
      dataControlsRuntime.archivedChatFilterMessages.filterArchivedChats,
    );
  let dataControlsBinding148 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.filterT,
      {
        className: `icon-xs shrink-0`,
      },
    );
  let dataControlsBinding149 = getKindFilterLabelMessage(kindFilter);
  let dataControlsBinding150 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(`span`, {
      className: `truncate`,
      children: dataControlsRuntime.dataControlsReactRuntime.createElement(
        dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          ...dataControlsBinding149,
        },
      ),
    });
  let dataControlsBinding151 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nR,
      {
        className: `w-[150px] md:w-36`,
        "aria-label": dataControlsBinding147,
        children: [dataControlsBinding148, dataControlsBinding150],
      },
    );
  let dataControlsBinding152 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime
        .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
        .SectionLabel,
      {
        children: dataControlsRuntime.dataControlsReactRuntime.createElement(
          dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            ...dataControlsRuntime.archivedChatFilterMessages.type,
          },
        ),
      },
    );
  let dataControlsBinding153 =
      kindFilter === `all`
        ? dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwOp
        : void 0,
    dataControlsBinding154 = () => {
      onKindFilterChange(`all`);
    };
  let dataControlsBinding155 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        ...dataControlsRuntime.archivedChatFilterMessages.allChats,
      },
    );
  let dataControlsBinding156 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime
        .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
        .Item,
      {
        RightIcon: dataControlsBinding153,
        onSelect: dataControlsBinding154,
        children: dataControlsBinding155,
      },
    );
  let dataControlsBinding157 =
      kindFilter === `local`
        ? dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwOp
        : void 0,
    dataControlsBinding158 = () => {
      onKindFilterChange(`local`);
    };
  let dataControlsBinding159 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        ...dataControlsRuntime.archivedChatFilterMessages.local,
      },
    );
  let dataControlsBinding160 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime
        .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
        .Item,
      {
        RightIcon: dataControlsBinding157,
        onSelect: dataControlsBinding158,
        children: dataControlsBinding159,
      },
    );
  let dataControlsBinding161 =
      kindFilter === `cloud`
        ? dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwOp
        : void 0,
    dataControlsBinding162 = () => {
      onKindFilterChange(`cloud`);
    };
  let dataControlsBinding163 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        ...dataControlsRuntime.archivedChatFilterMessages.cloud,
      },
    );
  let dataControlsBinding164 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime
        .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
        .Item,
      {
        RightIcon: dataControlsBinding161,
        onSelect: dataControlsBinding162,
        children: dataControlsBinding163,
      },
    );
  let dataControlsBinding165 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime
        .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
        .Separator,
      {},
    );
  let dataControlsBinding166 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime
        .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
        .SectionLabel,
      {
        children: dataControlsRuntime.dataControlsReactRuntime.createElement(
          dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            ...dataControlsRuntime.archivedChatFilterMessages.sortBy,
          },
        ),
      },
    );
  let dataControlsBinding167 =
      sortKey === `updated`
        ? dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwOp
        : void 0,
    dataControlsBinding168 = () => {
      onSortKeyChange(`updated`);
    };
  let dataControlsBinding169 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        ...dataControlsRuntime.archivedChatFilterMessages.updated,
      },
    );
  let dataControlsBinding170 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime
        .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
        .Item,
      {
        RightIcon: dataControlsBinding167,
        onSelect: dataControlsBinding168,
        children: dataControlsBinding169,
      },
    );
  let dataControlsBinding171 =
      sortKey === `created`
        ? dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwOp
        : void 0,
    dataControlsBinding172 = () => {
      onSortKeyChange(`created`);
    };
  let dataControlsBinding173 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        ...dataControlsRuntime.archivedChatFilterMessages.created,
      },
    );
  let dataControlsBinding174 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime
        .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
        .Item,
      {
        RightIcon: dataControlsBinding171,
        onSelect: dataControlsBinding172,
        children: dataControlsBinding173,
      },
    );
  let dataControlsBinding175 =
      sortKey === `alphabetical`
        ? dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwOp
        : void 0,
    dataControlsBinding176 = () => {
      onSortKeyChange(`alphabetical`);
    };
  let dataControlsBinding177 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        ...dataControlsRuntime.archivedChatFilterMessages.alphabetical,
      },
    );
  let dataControlsBinding178 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime
        .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
        .Item,
      {
        RightIcon: dataControlsBinding175,
        onSelect: dataControlsBinding176,
        children: dataControlsBinding177,
      },
    );
  return dataControlsRuntime.dataControlsReactRuntime.createElement(
    dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwEo,
    {
      side: `bottom`,
      align: `end`,
      contentWidth: `menuNarrow`,
      triggerButton: dataControlsBinding151,
      children: [
        dataControlsBinding152,
        dataControlsBinding156,
        dataControlsBinding160,
        dataControlsBinding164,
        dataControlsBinding165,
        dataControlsBinding166,
        dataControlsBinding170,
        dataControlsBinding174,
        dataControlsBinding178,
      ],
    },
  );
}
export { ArchivedChatsToolbar };
