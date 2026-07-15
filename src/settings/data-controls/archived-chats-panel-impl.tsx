// Restored from ref/webview/assets/data-controls-CwyuAPUl.js
// Semantic implementation module for the archived chats settings panel.

import dataControlsRuntime from "./runtime-impl";
import { ArchivedChatsToolbar } from "./archived-chats-toolbar-impl";
import {
  ArchivedChatsGroup,
  DeleteArchivedChatsDialog,
} from "./archived-chat-groups-impl";
import {
  getArchiveProjectFilterGroupId,
  getArchivedThreadId,
  getDeleteArchivedChatsToastId,
  getLocalArchivedThreadIds,
  getLocalProjectArchivedThreads,
  groupArchivedChatEntries,
  isLocalArchiveEntry,
} from "./archive-model-impl";
function ArchivedChatsSettingsPanel(dataControlsOperand1) {
  let {
      archivedChats: archivedChats,
      projects: projects,
      hostId: hostId,
      hasNextPage: hasNextPage,
      isLoading: isLoading,
      isFetchingNextPage: isFetchingNextPage,
      isError: isError,
      onLoadNextPage: onLoadNextPage,
    } = dataControlsOperand1,
    dataControlsBinding16 =
      dataControlsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wKo(
        dataControlsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wE,
      ),
    dataControlsBinding17 =
      dataControlsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wCc(),
    dataControlsBinding18 =
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy(),
    dataControlsBinding19 =
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dFa(),
    dataControlsBinding20 =
      dataControlsRuntime.AppInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsEi(),
    [dataControlsBinding21, dataControlsBinding22] = (0,
    dataControlsRuntime.dataControlsReactRuntime.useState)(null),
    [dataControlsBinding23, dataControlsBinding24] = (0,
    dataControlsRuntime.dataControlsReactRuntime.useState)(``),
    [dataControlsBinding25, dataControlsBinding26] = (0,
    dataControlsRuntime.dataControlsReactRuntime.useState)(`all`),
    [dataControlsBinding27, dataControlsBinding28] = (0,
    dataControlsRuntime.dataControlsReactRuntime.useState)(
      dataControlsRuntime.allArchivedProjectsFilter,
    ),
    [dataControlsBinding29, dataControlsBinding30] = (0,
    dataControlsRuntime.dataControlsReactRuntime.useState)(`updated`),
    dataControlsBinding31 = new Set([
      ...projects.map(getArchiveProjectFilterGroupId),
      dataControlsRuntime.projectlessArchiveGroupId,
      dataControlsRuntime.automationsArchiveGroupId,
    ]),
    dataControlsBinding32 =
      dataControlsBinding27.kind === `all` ||
      dataControlsBinding31.has(dataControlsBinding27.groupId)
        ? dataControlsBinding27
        : dataControlsRuntime.allArchivedProjectsFilter,
    dataControlsBinding33 =
      dataControlsBinding32.kind === `all` ? `project` : `none`,
    dataControlsBinding34 = groupArchivedChatEntries({
      entries: archivedChats,
      groupKey: dataControlsBinding33,
      kindFilter: dataControlsBinding25,
      projectFilter: dataControlsBinding32,
      searchQuery: dataControlsBinding23,
      sortKey: dataControlsBinding29,
    });
  let dataControlsBinding35 = dataControlsBinding34,
    dataControlsBinding36 = dataControlsBinding25 !== `local` && hasNextPage,
    dataControlsBinding37 =
      hostId === `local` && archivedChats.some(isLocalArchiveEntry);
  let dataControlsBinding38 = dataControlsBinding37,
    dataControlsBinding39 = (dataControlsOperand51) => {
      (dataControlsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wTa(
        dataControlsOperand51.id,
      ),
        hostId === `local` && dataControlsBinding20(dataControlsOperand51.id));
    };
  let dataControlsBinding40 = dataControlsBinding39,
    dataControlsBinding41,
    dataControlsBinding42;
  ((dataControlsBinding41 = [`unarchive-thread`, hostId]),
    (dataControlsBinding42 = async (dataControlsOperand36) => (
      await dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dYg(
        `unarchive-conversation`,
        {
          hostId: hostId,
          conversationId:
            dataControlsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wTa(
              dataControlsOperand36.id,
            ),
        },
      ),
      dataControlsOperand36
    )));
  let dataControlsBinding43 = async (dataControlsOperand12) => {
    (dataControlsBinding16
      .get(
        dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
      )
      .info(
        dataControlsRuntime.dataControlsReactRuntime.createElement(
          dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `settings.dataControls.archivedChats.unarchiving`,
            defaultMessage: `Unarchiving chat…`,
            description: `Toast shown while unarchiving a chat`,
          },
        ),
        {
          id: `unarchive-thread-${dataControlsOperand12.id}`,
          duration: 0,
          hasCloseButton: !1,
        },
      ),
      await dataControlsBinding17.cancelQueries({
        queryKey: [`archived-threads`, hostId],
      }));
    let dataControlsBinding257 =
      dataControlsBinding17.getQueryData([`archived-threads`, hostId]) ?? [];
    return (
      dataControlsBinding17.setQueryData(
        [`archived-threads`, hostId],
        dataControlsBinding257.filter(
          (item) => item.id !== dataControlsOperand12.id,
        ),
      ),
      {
        previousThreads: dataControlsBinding257,
      }
    );
  };
  let dataControlsBinding44 = (
    dataControlsOperand23,
    dataControlsOperand24,
    dataControlsOperand25,
  ) => {
    let dataControlsBinding278 =
      dataControlsOperand23 instanceof
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dLc;
    (!dataControlsBinding278 &&
      dataControlsOperand25?.previousThreads &&
      dataControlsBinding17.setQueryData(
        [`archived-threads`, hostId],
        dataControlsOperand25.previousThreads,
      ),
      dataControlsBinding16
        .get(
          dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
        )
        .danger(
          dataControlsBinding18.formatMessage(
            dataControlsBinding278
              ? dataControlsRuntime.archivedChatActionMessages.openError
              : dataControlsRuntime.archivedChatActionMessages.unarchiveError,
          ),
          {
            id: `unarchive-thread-${dataControlsOperand24.id}`,
          },
        ));
  };
  let dataControlsBinding45 = (dataControlsOperand16) => {
    dataControlsBinding16
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
                  dataControlsBinding40(dataControlsOperand16);
                },
                children:
                  dataControlsRuntime.dataControlsReactRuntime.createElement(
                    dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                    {
                      ...dataControlsRuntime.archivedChatActionMessages.viewNow,
                    },
                  ),
              },
            ),
          ],
        }),
        {
          id: `unarchive-thread-${dataControlsOperand16.id}`,
        },
      );
  };
  let dataControlsBinding46 = () => {
    dataControlsBinding17.invalidateQueries({
      queryKey: [`archived-threads`, hostId],
    });
  };
  let dataControlsBinding47 = {
    mutationKey: dataControlsBinding41,
    mutationFn: dataControlsBinding42,
    onMutate: dataControlsBinding43,
    onError: dataControlsBinding44,
    onSuccess: dataControlsBinding45,
    onSettled: dataControlsBinding46,
  };
  let dataControlsBinding48 =
      dataControlsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wTc(
        dataControlsBinding47,
      ),
    dataControlsBinding49,
    dataControlsBinding50;
  ((dataControlsBinding49 = [`delete-archived-conversations`, hostId]),
    (dataControlsBinding50 = async (dataControlsOperand15) =>
      dataControlsOperand15.kind === `all`
        ? dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dYg(
            `delete-all-archived-conversations`,
            {
              hostId: hostId,
            },
          )
        : dataControlsOperand15.kind === `project`
          ? (
              await Promise.all(
                dataControlsOperand15.threadIds.map((item) =>
                  dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dYg(
                    `delete-archived-conversation`,
                    {
                      hostId: hostId,
                      conversationId:
                        dataControlsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wTa(
                          item,
                        ),
                    },
                  ),
                ),
              )
            ).flat()
          : dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dYg(
              `delete-archived-conversation`,
              {
                hostId: hostId,
                conversationId:
                  dataControlsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wTa(
                    dataControlsOperand15.thread.id,
                  ),
              },
            )));
  let dataControlsBinding51 = async (dataControlsOperand11) => {
    let dataControlsBinding255 =
      dataControlsOperand11.kind === `single`
        ? [dataControlsOperand11.thread.id]
        : dataControlsOperand11.threadIds;
    (dataControlsBinding16
      .get(
        dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
      )
      .info(
        dataControlsOperand11.kind === `single`
          ? dataControlsRuntime.dataControlsReactRuntime.createElement(
              dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
              {
                ...dataControlsRuntime.archivedChatActionMessages.deleting,
              },
            )
          : dataControlsRuntime.dataControlsReactRuntime.createElement(
              dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
              {
                ...dataControlsRuntime.archivedChatActionMessages.deletingAll,
              },
            ),
        {
          id: getDeleteArchivedChatsToastId(dataControlsOperand11),
          duration: 0,
          hasCloseButton: !1,
        },
      ),
      await dataControlsBinding17.cancelQueries({
        queryKey: [`archived-threads`, hostId],
      }));
    let dataControlsBinding256 =
      dataControlsBinding17.getQueryData([`archived-threads`, hostId]) ?? [];
    return (
      dataControlsBinding17.setQueryData(
        [`archived-threads`, hostId],
        dataControlsBinding256.filter(
          (item) => !dataControlsBinding255.includes(item.id),
        ),
      ),
      {
        deletingThreadIds: dataControlsBinding255,
        previousThreads: dataControlsBinding256,
      }
    );
  };
  let dataControlsBinding52 = (
    dataControlsOperand17,
    dataControlsOperand18,
    dataControlsOperand19,
  ) => {
    (dataControlsOperand19?.previousThreads &&
      dataControlsBinding17.setQueryData(
        [`archived-threads`, hostId],
        dataControlsOperand19.previousThreads,
      ),
      dataControlsBinding16
        .get(
          dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
        )
        .danger(
          dataControlsBinding18.formatMessage(
            dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dBl(
              dataControlsOperand17,
              `thread/delete`,
            )
              ? dataControlsRuntime.archivedChatActionMessages.deleteUnsupported
              : dataControlsOperand18.kind === `single`
                ? dataControlsRuntime.archivedChatActionMessages.deleteError
                : dataControlsRuntime.archivedChatActionMessages.deleteAllError,
          ),
          {
            id: getDeleteArchivedChatsToastId(dataControlsOperand18),
          },
        ));
  };
  let dataControlsBinding53 = (
    dataControlsOperand13,
    dataControlsOperand14,
  ) => {
    if (dataControlsOperand14.kind !== `single`) {
      dataControlsBinding16
        .get(
          dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
        )
        .success(
          dataControlsBinding18.formatMessage(
            {
              id: `settings.dataControls.archivedChats.deleteAllSuccess`,
              defaultMessage: `Deleted {count, plural, one {# archived chat} other {# archived chats}}`,
              description: `Success toast after deleting archived chats`,
            },
            {
              count:
                dataControlsOperand13.length ||
                dataControlsOperand14.threadIds.length,
            },
          ),
          {
            id: getDeleteArchivedChatsToastId(dataControlsOperand14),
          },
        );
      return;
    }
    dataControlsBinding16
      .get(
        dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
      )
      .success(
        dataControlsBinding18.formatMessage(
          dataControlsRuntime.archivedChatActionMessages.deleteSuccessPlain,
        ),
        {
          id: getDeleteArchivedChatsToastId(dataControlsOperand14),
        },
      );
  };
  let dataControlsBinding54 = () => {
    dataControlsBinding17.invalidateQueries({
      queryKey: [`archived-threads`, hostId],
    });
  };
  let dataControlsBinding55 = {
    mutationKey: dataControlsBinding49,
    mutationFn: dataControlsBinding50,
    onMutate: dataControlsBinding51,
    onError: dataControlsBinding52,
    onSuccess: dataControlsBinding53,
    onSettled: dataControlsBinding54,
  };
  let dataControlsBinding56 =
      dataControlsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wTc(
        dataControlsBinding55,
      ),
    dataControlsBinding57 =
      dataControlsBinding48.isPending || dataControlsBinding56.isPending,
    dataControlsBinding58;
  if (isLoading) {
    let dataControlsBinding269;
    ((dataControlsBinding269 =
      dataControlsRuntime.dataControlsReactRuntime.createElement(
        dataControlsRuntime.appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsQ,
        {
          children: dataControlsRuntime.dataControlsReactRuntime.createElement(
            dataControlsRuntime.appInitialAppMainOnboardingPageFn,
            {
              label: dataControlsRuntime.dataControlsReactRuntime.createElement(
                dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  id: `settings.dataControls.archivedChats.loading`,
                  defaultMessage: `Loading archived chats…`,
                  description: `Loading state label for archived chats list`,
                },
              ),
              control: null,
            },
          ),
        },
      )),
      (dataControlsBinding58 = dataControlsBinding269));
  } else if (isError) {
    let dataControlsBinding268;
    ((dataControlsBinding268 =
      dataControlsRuntime.dataControlsReactRuntime.createElement(
        dataControlsRuntime.appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsQ,
        {
          children: dataControlsRuntime.dataControlsReactRuntime.createElement(
            dataControlsRuntime.appInitialAppMainOnboardingPageFn,
            {
              label: dataControlsRuntime.dataControlsReactRuntime.createElement(
                dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  id: `settings.dataControls.archivedChats.error`,
                  defaultMessage: `Could not load archived chats.`,
                  description: `Error state label for archived chats list`,
                },
              ),
              control: null,
            },
          ),
        },
      )),
      (dataControlsBinding58 = dataControlsBinding268));
  } else if (archivedChats.length === 0) {
    let dataControlsBinding273;
    ((dataControlsBinding273 =
      dataControlsRuntime.dataControlsReactRuntime.createElement(
        dataControlsRuntime.appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsQ,
        {
          children: dataControlsRuntime.dataControlsReactRuntime.createElement(
            dataControlsRuntime.appInitialAppMainOnboardingPageFn,
            {
              label: dataControlsRuntime.dataControlsReactRuntime.createElement(
                dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  id: `settings.dataControls.archivedChats.empty`,
                  defaultMessage: `No archived chats.`,
                  description: `Empty state label for archived chats list`,
                },
              ),
              control: null,
            },
          ),
        },
      )),
      (dataControlsBinding58 = dataControlsBinding273));
  } else {
    let dataControlsBinding191 =
      dataControlsRuntime.dataControlsReactRuntime.createElement(`div`, {
        className: `rounded-t-[7px] bg-token-main-surface-primary p-3`,
        children: dataControlsRuntime.dataControlsReactRuntime.createElement(
          ArchivedChatsToolbar,
          {
            kindFilter: dataControlsBinding25,
            projectFilter: dataControlsBinding32,
            projects: projects,
            sortKey: dataControlsBinding29,
            onKindFilterChange: dataControlsBinding26,
            onProjectFilterChange: dataControlsBinding28,
            onSearchQueryChange: dataControlsBinding24,
            onSortKeyChange: dataControlsBinding30,
          },
        ),
      });
    let dataControlsBinding192 =
      dataControlsBinding35.length === 0 &&
      !dataControlsBinding36 &&
      !isFetchingNextPage
        ? dataControlsRuntime.dataControlsReactRuntime.createElement(`div`, {
            className: `px-4 py-3 text-base text-token-text-secondary`,
            children:
              dataControlsRuntime.dataControlsReactRuntime.createElement(
                `span`,
                {
                  children:
                    dataControlsRuntime.dataControlsReactRuntime.createElement(
                      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                      {
                        id: `settings.dataControls.archivedChats.noMatches`,
                        defaultMessage: `No matching archived chats`,
                        description: `Empty state shown when archived chat search has no matches`,
                      },
                    ),
                },
              ),
          })
        : null;
    let dataControlsBinding193;
    {
      let dataControlsBinding242;
      ((dataControlsBinding242 = (dataControlsOperand10) =>
        dataControlsRuntime.dataControlsReactRuntime.createElement(
          ArchivedChatsGroup,
          {
            group: dataControlsOperand10,
            hostId: hostId,
            isDeleteDisabled: dataControlsBinding57,
            projectArchivedThreads: getLocalProjectArchivedThreads(
              dataControlsOperand10.entries,
              dataControlsOperand10.id,
            ),
            unarchivingThreadId: dataControlsBinding48.variables?.id ?? null,
            isUnarchiving: dataControlsBinding48.isPending,
            showHeader: dataControlsBinding32.kind === `all`,
            onDelete: (dataControlsOperand48) => {
              dataControlsBinding22({
                kind: `single`,
                thread: dataControlsOperand48,
              });
            },
            onUnarchive: (dataControlsOperand52) => {
              dataControlsBinding48.mutate(dataControlsOperand52);
            },
            onDeleteProject: (dataControlsOperand44, dataControlsOperand45) => {
              dataControlsBinding22({
                kind: `project`,
                projectLabel: dataControlsOperand44,
                threads: dataControlsOperand45,
              });
            },
            key: dataControlsOperand10.id,
          },
        )),
        (dataControlsBinding193 = dataControlsBinding35.map(
          dataControlsBinding242,
        )));
    }
    let dataControlsBinding194 = () => {
      onLoadNextPage();
    };
    let dataControlsBinding195 =
      dataControlsRuntime.dataControlsReactRuntime.createElement(
        dataControlsRuntime.infiniteScrollPaginationSpinnerT,
        {
          hasNextPage: dataControlsBinding36,
          isFetchingNextPage: isFetchingNextPage,
          onLoadNextPage: dataControlsBinding194,
        },
      );
    let dataControlsBinding196 =
      dataControlsRuntime.dataControlsReactRuntime.createElement(`div`, {
        className: `min-h-0 flex-1 overflow-y-auto`,
        children: dataControlsRuntime.dataControlsReactRuntime.createElement(
          `div`,
          {
            className: `flex flex-col`,
            children: [
              dataControlsBinding192,
              dataControlsBinding193,
              dataControlsBinding195,
            ],
          },
        ),
      });
    let dataControlsBinding197;
    ((dataControlsBinding197 =
      dataControlsRuntime.dataControlsReactRuntime.createElement(
        dataControlsRuntime.appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsQ,
        {
          className: `max-h-[min(80vh)]`,
          children: [dataControlsBinding191, dataControlsBinding196],
        },
      )),
      (dataControlsBinding58 = dataControlsBinding197));
  }
  let dataControlsBinding59 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nV,
      {
        slug: `data-controls`,
      },
    );
  let dataControlsBinding60 =
    dataControlsBinding38 && !isLoading && !isError
      ? dataControlsRuntime.dataControlsReactRuntime.createElement(
          dataControlsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
          {
            color: `danger`,
            size: `toolbar`,
            disabled: dataControlsBinding57,
            onClick: () => {
              dataControlsBinding22({
                kind: `all`,
              });
            },
            children: [
              dataControlsRuntime.dataControlsReactRuntime.createElement(
                dataControlsRuntime.appInitialAppMainOnboardingPageId,
                {
                  className: `icon-xs shrink-0`,
                },
              ),
              dataControlsRuntime.dataControlsReactRuntime.createElement(
                dataControlsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  ...dataControlsRuntime.archivedChatActionMessages.deleteAll,
                },
              ),
            ],
          },
        )
      : null;
  let archivedChatsContentCard =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      dataControlsRuntime.appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD,
      {
        className: `gap-2`,
        children: dataControlsRuntime.dataControlsReactRuntime.createElement(
          dataControlsRuntime
            .appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD
            .Content,
          {
            children: dataControlsBinding58,
          },
        ),
      },
    );
  let dataControlsBinding61 = () => {
    if (dataControlsBinding21 != null) {
      if ((dataControlsBinding22(null), dataControlsBinding21.kind === `all`)) {
        dataControlsBinding56.mutate({
          kind: `all`,
          threadIds: archivedChats.flatMap(getLocalArchivedThreadIds),
        });
        return;
      }
      if (dataControlsBinding21.kind === `project`) {
        dataControlsBinding56.mutate({
          kind: `project`,
          projectLabel: dataControlsBinding21.projectLabel,
          threadIds: dataControlsBinding21.threads.map(getArchivedThreadId),
        });
        return;
      }
      dataControlsBinding56.mutate({
        kind: `single`,
        thread: dataControlsBinding21.thread,
      });
    }
  };
  let dataControlsBinding62 = (dataControlsOperand57) => {
    dataControlsOperand57 || dataControlsBinding22(null);
  };
  let dataControlsBinding63 =
    dataControlsRuntime.dataControlsReactRuntime.createElement(
      DeleteArchivedChatsDialog,
      {
        state: dataControlsBinding21,
        onConfirm: dataControlsBinding61,
        onOpenChange: dataControlsBinding62,
      },
    );
  return dataControlsRuntime.dataControlsReactRuntime.createElement(
    dataControlsRuntime.appInitialAppMainSettingsPageOpenSourceLicensesPageSkillsSettingsPluginsSettinCxbtmbfcT,
    {
      title: dataControlsBinding59,
      titleStackClassName: `gap-1.5`,
      action: dataControlsBinding60,
      children: [archivedChatsContentCard, dataControlsBinding63],
    },
  );
}
export { ArchivedChatsSettingsPanel };
