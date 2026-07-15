// Restored from ref/webview/assets/computer-use-settings-BIYkni3c.js
// Semantic implementation module for Google Chrome computer use settings.

import computerUseSettingsRuntime from "./runtime-impl";
function BrowserExtensionConnectionStatus(computerUseOperand6) {
  let { status: status } = computerUseOperand6;
  if (status.isLoading) {
    let computerUseBinding251;
    return computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        ...computerUseSettingsRuntime.browserExtensionStatusMessages.loading,
      },
    );
  }
  let computerUseBinding211 = status.isConnected
      ? `bg-[var(--color-icon-success)]`
      : `bg-[var(--color-icon-error)]`,
    computerUseBinding212 =
      computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwMh(
        `h-2 w-2 shrink-0 rounded-full`,
        computerUseBinding211,
      );
  let computerUseBinding213 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(`span`, {
      className: computerUseBinding212,
    });
  let computerUseBinding214 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(`span`, {
      className: `min-w-0 truncate`,
      children: status.isConnected
        ? computerUseSettingsRuntime.computerUseReactRuntime.createElement(
            computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              ...computerUseSettingsRuntime.browserExtensionStatusMessages
                .connected,
            },
          )
        : computerUseSettingsRuntime.computerUseReactRuntime.createElement(
            computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              ...computerUseSettingsRuntime.browserExtensionStatusMessages
                .disconnected,
            },
          ),
    });
  return computerUseSettingsRuntime.computerUseReactRuntime.createElement(
    `span`,
    {
      className: `inline-flex max-w-full items-center gap-2`,
      children: [computerUseBinding213, computerUseBinding214],
    },
  );
}
function useBrowserExtensionConnectionStatus(computerUseOperand11) {
  let {
      hostId: hostId,
      plugin: plugin,
      shouldReadBrowserExtension: shouldReadBrowserExtension,
    } = computerUseOperand11,
    computerUseBinding230 = {
      enabled: shouldReadBrowserExtension,
      hostId: hostId,
      plugin: plugin,
    };
  let computerUseBinding231 =
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nIt(
        computerUseBinding230,
      ),
    computerUseBinding232 = computerUseBinding231?.[0] ?? null,
    computerUseBinding233 =
      shouldReadBrowserExtension && computerUseBinding231 === void 0,
    computerUseBinding234 = computerUseBinding232?.id ?? null,
    computerUseBinding235 = {
      browserExtensionId: computerUseBinding234,
    };
  let computerUseBinding236 =
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nRt(
        computerUseBinding235,
      ),
    computerUseBinding237 =
      computerUseBinding233 || computerUseBinding236.isLoading;
  return {
    browserExtension: computerUseBinding232,
    isConnected: computerUseBinding236.isConnected,
    isInstalled: computerUseBinding236.isConnected,
    isLoading: computerUseBinding237,
  };
}
function GoogleChromeComputerUseSettings() {
  let computerUseBinding81 =
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wKo(
        computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wE,
      ),
    { platform: platform } =
      computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkP(),
    { selectedHostId: selectedHostId } =
      computerUseSettingsRuntime.appInitialAppMainOnboardingPageMu(),
    computerUseBinding82 = [];
  let computerUseBinding83 =
      computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwZc(
        selectedHostId,
        computerUseBinding82,
      ),
    computerUseBinding84 =
      computerUseSettingsRuntime.useHomeDirectoryN(selectedHostId),
    computerUseBinding85 = findPreferredChromeComputerUsePlugin(
      computerUseBinding83.installedPlugins,
      computerUseBinding84,
    );
  let computerUseBinding86 = computerUseBinding85,
    computerUseBinding87 = computerUseBinding86?.plugin.installed === !0,
    computerUseBinding88 =
      computerUseBinding87 && computerUseBinding86.plugin.enabled,
    computerUseBinding89 = {
      hostId: selectedHostId,
      plugin: computerUseBinding86,
      shouldReadBrowserExtension: computerUseBinding87,
    };
  let computerUseBinding90 =
      useBrowserExtensionConnectionStatus(computerUseBinding89),
    computerUseBinding91 = computerUseBinding90.browserExtension,
    computerUseBinding92 = computerUseBinding91?.id,
    computerUseBinding93 = computerUseBinding90.isInstalled,
    computerUseBinding94 = computerUseBinding90.isLoading;
  if (computerUseBinding83.isLoading && computerUseBinding86 == null) {
    let computerUseBinding239, computerUseBinding240;
    ((computerUseBinding239 =
      computerUseSettingsRuntime.computerUseReactRuntime.createElement(
        GoogleChromeSettingsBackSlot,
        {},
      )),
      (computerUseBinding240 =
        computerUseSettingsRuntime.computerUseReactRuntime.createElement(
          computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `settings.computerUse.chrome.title`,
            defaultMessage: `Google Chrome`,
            description: `Title for Google Chrome computer use settings`,
          },
        )));
    let computerUseBinding241;
    return computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainSettingsPageOpenSourceLicensesPageSkillsSettingsPluginsSettinCxbtmbfcT,
      {
        backSlot: computerUseBinding239,
        title: computerUseBinding240,
        children:
          computerUseSettingsRuntime.computerUseReactRuntime.createElement(
            `div`,
            {
              className: `flex min-h-[120px] items-center justify-center text-token-text-secondary`,
              children:
                computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                  computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwDm,
                  {
                    className: `icon-xs`,
                  },
                ),
            },
          ),
      },
    );
  }
  if (!computerUseBinding83.isLoading && !computerUseBinding88) {
    let computerUseBinding250;
    return computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dEa,
      {
        to: `/settings/computer-use`,
        replace: !0,
      },
    );
  }
  let computerUseBinding95 = computerUseBinding91?.url == null,
    computerUseBinding96 = (computerUseOperand14) => {
      computerUseBinding91?.url != null &&
        computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwIs(
          {
            event: computerUseOperand14,
            href: computerUseBinding91.url,
            initiator: `open_in_browser_bridge`,
            openTarget: `external-browser`,
          },
        );
    };
  let computerUseBinding97 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        id: `settings.computerUse.chrome.reinstallExtension`,
        defaultMessage: `Reinstall extension`,
        description: `Button label to reinstall the Google Chrome extension`,
      },
    );
  let computerUseBinding98 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
      {
        color: `secondary`,
        disabled: computerUseBinding95,
        onClick: computerUseBinding96,
        size: `toolbar`,
        children: computerUseBinding97,
      },
    );
  let computerUseBinding99 =
    platform === `macOS` || platform === `windows`
      ? computerUseSettingsRuntime.computerUseReactRuntime.createElement(
          computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
          {
            color: `danger`,
            disabled:
              computerUseBinding92 == null ||
              computerUseBinding94 ||
              !computerUseBinding93,
            onClick: () => {
              computerUseBinding92 != null &&
                computerUseSettingsRuntime
                  .appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wI(
                    `chrome-extension-settings-open`,
                    {
                      params: {
                        extensionId: computerUseBinding92,
                      },
                    },
                  )
                  .catch(() => {
                    computerUseBinding81
                      .get(
                        computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
                      )
                      .danger(
                        computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                          computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                          {
                            id: `settings.computerUse.chrome.openExtensionSettingsError`,
                            defaultMessage: `Unable to open Chrome extension settings`,
                            description: `Toast shown when the app fails to open Chrome extension settings`,
                          },
                        ),
                      );
                  });
            },
            size: `toolbar`,
            children:
              computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  id: `settings.computerUse.chrome.removeExtension`,
                  defaultMessage: `Remove extension`,
                  description: `Button label to remove the Google Chrome extension`,
                },
              ),
          },
        )
      : null;
  let computerUseBinding100 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(`div`, {
      className: `flex items-center gap-2`,
      children: [computerUseBinding98, computerUseBinding99],
    });
  let computerUseBinding101 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      GoogleChromeSettingsBackSlot,
      {},
    );
  let computerUseBinding102 = computerUseBinding94
    ? null
    : computerUseSettingsRuntime.computerUseReactRuntime.createElement(
        ChromeExtensionStatusBadge,
        {
          installed: computerUseBinding93,
        },
      );
  let computerUseBinding103 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        id: `settings.computerUse.chrome.title`,
        defaultMessage: `Google Chrome`,
        description: `Title for Google Chrome computer use settings`,
      },
    );
  let computerUseBinding104 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime
        .appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD.Header,
      {
        title: computerUseSettingsRuntime.computerUseReactRuntime.createElement(
          computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `settings.computerUse.chrome.permissions.title`,
            defaultMessage: `Permissions`,
            description: `Title for Google Chrome browser permissions settings section`,
          },
        ),
      },
    );
  let computerUseBinding105, computerUseBinding106, computerUseBinding107;
  ((computerUseBinding105 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD,
      {
        children: [
          computerUseBinding104,
          computerUseSettingsRuntime.computerUseReactRuntime.createElement(
            computerUseSettingsRuntime
              .appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD
              .Content,
            {
              children:
                computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                  computerUseSettingsRuntime.appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsQ,
                  {
                    children: [
                      computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                        computerUseSettingsRuntime.browserUseSettingsS,
                        {},
                      ),
                      computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                        computerUseSettingsRuntime.browserUseSettingsU,
                        {},
                      ),
                      computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                        BrowserUseTransferApprovalModeRow,
                        {
                          kind: `download`,
                        },
                      ),
                      computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                        BrowserUseTransferApprovalModeRow,
                        {
                          kind: `upload`,
                        },
                      ),
                    ],
                  },
                ),
            },
          ),
        ],
      },
    )),
    (computerUseBinding106 =
      computerUseSettingsRuntime.computerUseReactRuntime.createElement(
        computerUseSettingsRuntime.browserUseSettingsC,
        {
          surface: `googleChrome`,
        },
      )),
    (computerUseBinding107 =
      computerUseSettingsRuntime.computerUseReactRuntime.createElement(
        computerUseSettingsRuntime.browserUseSettingsV,
        {},
      )));
  return computerUseSettingsRuntime.computerUseReactRuntime.createElement(
    computerUseSettingsRuntime.appInitialAppMainSettingsPageOpenSourceLicensesPageSkillsSettingsPluginsSettinCxbtmbfcT,
    {
      action: computerUseBinding100,
      backSlot: computerUseBinding101,
      subtitle: computerUseBinding102,
      subtitleClassName: `flex`,
      title: computerUseBinding103,
      children: [
        computerUseBinding105,
        computerUseBinding106,
        computerUseBinding107,
      ],
    },
  );
}
function BrowserUseTransferApprovalModeRow(computerUseOperand1) {
  let { kind: kind } = computerUseOperand1,
    computerUseBinding27 =
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wKo(
        computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wE,
      ),
    { data: data, isLoading: isLoading } =
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wQo(
        computerUseSettingsRuntime.AppInitialAppMainOnboardingPageRu,
      ),
    computerUseBinding28 =
      computerUseSettingsRuntime.appInitialAppMainOnboardingPageKu(),
    computerUseBinding29 =
      kind === `download`
        ? data?.downloadApprovalMode
        : data?.uploadApprovalMode,
    computerUseBinding30 =
      computerUseSettingsRuntime.computerUseReactRuntime.createElement(
        computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.browserUse.approval.alwaysAsk.label`,
          defaultMessage: `Always ask`,
          description: `Label for browser use always ask approval mode`,
        },
      );
  let computerUseBinding31 = {
    id: `alwaysAsk`,
    label: computerUseBinding30,
    description:
      kind === `download`
        ? computerUseSettingsRuntime.computerUseReactRuntime.createElement(
            computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              id: `settings.browserUse.downloadApproval.alwaysAsk.description`,
              defaultMessage: `Ask before downloading files`,
              description: `Description for browser use always ask download approval mode`,
            },
          )
        : computerUseSettingsRuntime.computerUseReactRuntime.createElement(
            computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              id: `settings.browserUse.uploadApproval.alwaysAsk.description`,
              defaultMessage: `Ask before uploading files`,
              description: `Description for browser use always ask upload approval mode`,
            },
          ),
  };
  let computerUseBinding32 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        id: `settings.browserUse.approval.neverAsk.label`,
        defaultMessage: `Always allow`,
        description: `Label for browser use never ask approval mode`,
      },
    );
  let computerUseBinding33 = {
    id: `neverAsk`,
    label: computerUseBinding32,
    description:
      kind === `download`
        ? computerUseSettingsRuntime.computerUseReactRuntime.createElement(
            computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              id: `settings.browserUse.downloadApproval.neverAsk.description`,
              defaultMessage: `Download files without asking`,
              description: `Description for browser use never ask download approval mode`,
            },
          )
        : computerUseSettingsRuntime.computerUseReactRuntime.createElement(
            computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              id: `settings.browserUse.uploadApproval.neverAsk.description`,
              defaultMessage: `Upload files without asking`,
              description: `Description for browser use never ask upload approval mode`,
            },
          ),
  };
  let computerUseBinding34 = [computerUseBinding31, computerUseBinding33];
  let computerUseBinding35 = computerUseBinding34,
    computerUseBinding36 =
      computerUseBinding35.find((item) => item.id === computerUseBinding29) ??
      computerUseBinding35[0];
  let computerUseBinding37 = computerUseBinding36,
    computerUseBinding38 = computerUseBinding28.isPending,
    computerUseBinding39 = async (computerUseOperand12) => {
      if (
        !(computerUseOperand12 === computerUseBinding29 || computerUseBinding38)
      )
        try {
          await computerUseBinding28.mutateAsync({
            approvalMode: computerUseOperand12,
            kind: kind,
          });
        } catch {
          computerUseBinding27
            .get(
              computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
            )
            .danger(
              kind === `download`
                ? computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                    computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                    {
                      id: `settings.browserUse.downloadApproval.saveError`,
                      defaultMessage: `Unable to save download setting`,
                      description: `Toast shown when saving browser use download approval mode fails`,
                    },
                  )
                : computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                    computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                    {
                      id: `settings.browserUse.uploadApproval.saveError`,
                      defaultMessage: `Unable to save upload setting`,
                      description: `Toast shown when saving browser use upload approval mode fails`,
                    },
                  ),
            );
        }
    };
  let computerUseBinding40 = computerUseBinding39,
    computerUseBinding41,
    computerUseBinding42;
  ((computerUseBinding41 =
    kind === `download`
      ? computerUseSettingsRuntime.computerUseReactRuntime.createElement(
          computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `settings.browserUse.downloadApproval.label`,
            defaultMessage: `Downloads`,
            description: `Label for browser use download approval mode setting`,
          },
        )
      : computerUseSettingsRuntime.computerUseReactRuntime.createElement(
          computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `settings.browserUse.uploadApproval.label`,
            defaultMessage: `Uploads`,
            description: `Label for browser use upload approval mode setting`,
          },
        )),
    (computerUseBinding42 =
      kind === `download`
        ? computerUseSettingsRuntime.computerUseReactRuntime.createElement(
            computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              id: `settings.browserUse.downloadApproval.description`,
              defaultMessage: `Choose if Codex asks before downloading files from websites`,
              description: `Description for browser use download approval mode setting`,
            },
          )
        : computerUseSettingsRuntime.computerUseReactRuntime.createElement(
            computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              id: `settings.browserUse.uploadApproval.description`,
              defaultMessage: `Choose if Codex asks before uploading files to websites`,
              description: `Description for browser use upload approval mode setting`,
            },
          )));
  let computerUseBinding43 = isLoading || computerUseBinding38,
    computerUseBinding44 = isLoading || computerUseBinding38,
    computerUseBinding45 = computerUseBinding37?.label,
    computerUseBinding46 =
      computerUseSettingsRuntime.computerUseReactRuntime.createElement(`span`, {
        className: `truncate`,
        children: computerUseBinding45,
      });
  let computerUseBinding47 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nR,
      {
        className: `w-[152px]`,
        disabled: computerUseBinding44,
        children: computerUseBinding46,
      },
    );
  let computerUseBinding48 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(`div`, {
      className: `flex flex-col`,
      children: computerUseBinding35.map((item) => {
        let computerUseBinding242 = item.id === computerUseBinding29;
        return computerUseSettingsRuntime.computerUseReactRuntime.createElement(
          computerUseSettingsRuntime
            .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
            .Item,
          {
            allowWrap: !0,
            disabled: computerUseBinding38,
            RightIcon: computerUseBinding242
              ? computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwOp
              : void 0,
            onSelect: () => {
              computerUseBinding40(item.id);
            },
            children:
              computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                `div`,
                {
                  className: `flex min-w-0 flex-col gap-0.5`,
                  children: [
                    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                      `span`,
                      {
                        className: `truncate`,
                        children: item.label,
                      },
                    ),
                    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                      `span`,
                      {
                        className: `truncate text-sm text-token-text-secondary`,
                        children: item.description,
                      },
                    ),
                  ],
                },
              ),
            key: item.id,
          },
        );
      }),
    });
  let computerUseBinding49 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwEo,
      {
        contentWidth: `menuWide`,
        align: `end`,
        disabled: computerUseBinding43,
        triggerButton: computerUseBinding47,
        children: computerUseBinding48,
      },
    );
  return computerUseSettingsRuntime.computerUseReactRuntime.createElement(
    computerUseSettingsRuntime.appInitialAppMainOnboardingPageFn,
    {
      label: computerUseBinding41,
      description: computerUseBinding42,
      control: computerUseBinding49,
    },
  );
}
function ChromeExtensionStatusBadge(computerUseOperand5) {
  let { installed: installed } = computerUseOperand5,
    computerUseBinding202 = installed
      ? `bg-[var(--color-background-status-success)] text-[var(--color-text-success)]`
      : `bg-token-charts-red/10 text-token-charts-red`,
    computerUseBinding203 =
      computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwMh(
        `inline-flex w-max items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium`,
        computerUseBinding202,
      );
  let computerUseBinding204 = installed
      ? `bg-[var(--color-icon-success)]`
      : `bg-token-charts-red`,
    computerUseBinding205 =
      computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwMh(
        `h-2 w-2 rounded-full`,
        computerUseBinding204,
      );
  let computerUseBinding206 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(`span`, {
      className: computerUseBinding205,
    });
  let computerUseBinding207 = installed
    ? computerUseSettingsRuntime.computerUseReactRuntime.createElement(
        computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.computerUse.chrome.connected`,
          defaultMessage: `Connected`,
          description: `Status badge for connected Google Chrome extension`,
        },
      )
    : computerUseSettingsRuntime.computerUseReactRuntime.createElement(
        computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.computerUse.chrome.notConnected`,
          defaultMessage: `Not connected`,
          description: `Status badge for a Google Chrome extension that is not connected`,
        },
      );
  return computerUseSettingsRuntime.computerUseReactRuntime.createElement(
    `span`,
    {
      className: computerUseBinding203,
      children: [computerUseBinding206, computerUseBinding207],
    },
  );
}
function GoogleChromeSettingsBackSlot() {
  let computerUseBinding186 =
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dFa(),
    computerUseBinding187 = () => {
      computerUseBinding186(`/settings/computer-use`);
    };
  let computerUseBinding188, computerUseBinding189;
  ((computerUseBinding188 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwYs,
      {
        className: `icon-xs`,
      },
    )),
    (computerUseBinding189 =
      computerUseSettingsRuntime.computerUseReactRuntime.createElement(
        computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.computerUse.chrome.back`,
          defaultMessage: `Back`,
          description: `Button label to go back to Computer use settings`,
        },
      )));
  let computerUseBinding190 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
      {
        color: `ghost`,
        size: `toolbar`,
        onClick: computerUseBinding187,
        children: [computerUseBinding188, computerUseBinding189],
      },
    );
  let computerUseBinding191, computerUseBinding192;
  ((computerUseBinding191 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        id: `settings.computerUse.breadcrumb.computerUse`,
        defaultMessage: `Computer use`,
        description: `Computer use breadcrumb label`,
      },
    )),
    (computerUseBinding192 =
      computerUseSettingsRuntime.computerUseReactRuntime.createElement(
        computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwEp,
        {
          className: `icon-xs text-token-text-secondary`,
        },
      )));
  let computerUseBinding193 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(`div`, {
      className: `flex items-center gap-1`,
      children: [
        computerUseBinding191,
        computerUseBinding192,
        computerUseSettingsRuntime.computerUseReactRuntime.createElement(
          `span`,
          {
            className: `text-token-text-primary`,
            children:
              computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  id: `settings.computerUse.chrome.breadcrumb.googleChrome`,
                  defaultMessage: `Google Chrome`,
                  description: `Google Chrome breadcrumb label`,
                },
              ),
          },
        ),
      ],
    });
  return computerUseSettingsRuntime.computerUseReactRuntime.createElement(
    `nav`,
    {
      className: `flex items-center gap-2 text-sm font-medium text-token-text-secondary`,
      children: [computerUseBinding190, computerUseBinding193],
    },
  );
}
function findPreferredChromeComputerUsePlugin(
  computerUseOperand17,
  computerUseOperand18,
) {
  let computerUseBinding252 =
    computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwKc();
  return (
    (computerUseBinding252 ===
    computerUseSettingsRuntime
      .appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wLi
      .Dev
      ? computerUseSettingsRuntime.browserUseSettingsH(
          computerUseOperand17,
          computerUseSettingsRuntime.chromeDevPluginSlug,
          computerUseOperand18,
        )
      : computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wLi.isInternal(
            computerUseBinding252,
          )
        ? (computerUseSettingsRuntime.browserUseSettingsH(
            computerUseOperand17,
            computerUseSettingsRuntime.chromeInternalPluginSlug,
            computerUseOperand18,
          ) ??
          computerUseSettingsRuntime.browserUseSettingsH(
            computerUseOperand17,
            computerUseSettingsRuntime.chromeDevPluginSlug,
            computerUseOperand18,
          ))
        : null) ??
    computerUseSettingsRuntime.browserUseSettingsH(
      computerUseOperand17,
      computerUseSettingsRuntime.chromePluginSlug,
      computerUseOperand18,
    )
  );
}
export {
  BrowserExtensionConnectionStatus,
  GoogleChromeComputerUseSettings,
  findPreferredChromeComputerUsePlugin,
  useBrowserExtensionConnectionStatus,
};
