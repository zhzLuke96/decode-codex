// Restored from ref/webview/assets/computer-use-settings-BIYkni3c.js
// Semantic implementation module for computer use plugin control rows.

import computerUseSettingsRuntime from "./runtime-impl";
import {
  BrowserExtensionConnectionStatus,
  findPreferredChromeComputerUsePlugin,
  useBrowserExtensionConnectionStatus,
} from "./chrome-settings-impl";
function ComputerUsePluginControls(computerUseOperand2) {
  let { computerUseAvailability: computerUseAvailability, platform: platform } =
      computerUseOperand2,
    computerUseBinding52 =
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy(),
    computerUseBinding53 =
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dFa(),
    { selectedHostId: selectedHostId } =
      computerUseSettingsRuntime.appInitialAppMainOnboardingPageMu(),
    computerUseBinding54 =
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dP(
        selectedHostId,
      ).kind === `local`,
    { data: data } =
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wGo(
        computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwEc,
        selectedHostId,
      ),
    computerUseBinding55 = {
      hostId: selectedHostId,
    };
  let computerUseBinding56 =
      computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTl(
        computerUseBinding55,
      ),
    computerUseBinding57 = {
      hostId: selectedHostId,
    };
  let {
      isUpdating: isUpdating,
      setAppEnabled: setAppEnabled,
      updatingAppId: updatingAppId,
    } = computerUseSettingsRuntime.appsAvailabilityN(computerUseBinding57),
    computerUseBinding58 = [];
  let computerUseBinding59 =
      computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwZc(
        selectedHostId,
        computerUseBinding58,
      ),
    computerUseBinding60 =
      computerUseSettingsRuntime.useHomeDirectoryN(selectedHostId),
    computerUseBinding61 =
      computerUseSettingsRuntime.AppInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dRy(
        computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageAppgenSettingsPageAppgenPublicationTermsRoG0k1g2btT,
      ),
    computerUseBinding62 = computerUseSettingsRuntime.browserUseSettingsH(
      computerUseBinding59.availablePlugins,
      computerUseSettingsRuntime.computerUsePluginSlug,
      computerUseBinding60,
    );
  let computerUseBinding63 = computerUseBinding62,
    computerUseBinding64 = findPreferredChromeComputerUsePlugin(
      computerUseBinding59.availablePlugins,
      computerUseBinding60,
    );
  let computerUseBinding65 = computerUseBinding64,
    computerUseBinding66 =
      computerUseBinding59.availablePlugins.find(
        computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageAppgenSettingsPageAppgenPublicationTermsRoG0k1g2btO,
      ) ?? null,
    computerUseBinding67 =
      computerUseBinding59.availablePlugins.find(
        computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageAppgenSettingsPageAppgenPublicationTermsRoG0k1g2btK,
      ) ?? null,
    computerUseBinding68 = [
      {
        appControlId: `microsoft-excel-document-control-app`,
        description:
          computerUseSettingsRuntime.computerUseSettingsMessages
            .microsoftExcelDescription,
        disableTooltip:
          computerUseSettingsRuntime.computerUseSettingsMessages
            .microsoftExcelDisableTooltip,
        enableTooltip:
          computerUseSettingsRuntime.computerUseSettingsMessages
            .microsoftExcelEnableTooltip,
        icon: computerUseSettingsRuntime.excelIconUrl,
        plugin: computerUseBinding66,
        title:
          computerUseSettingsRuntime.computerUseSettingsMessages.microsoftExcel,
        toggleAriaLabel:
          computerUseSettingsRuntime.computerUseSettingsMessages
            .microsoftExcelToggleAria,
      },
      {
        appControlId: `microsoft-powerpoint-document-control-app`,
        description:
          computerUseSettingsRuntime.computerUseSettingsMessages
            .microsoftPowerPointDescription,
        disableTooltip:
          computerUseSettingsRuntime.computerUseSettingsMessages
            .microsoftPowerPointDisableTooltip,
        enableTooltip:
          computerUseSettingsRuntime.computerUseSettingsMessages
            .microsoftPowerPointEnableTooltip,
        icon: computerUseSettingsRuntime.powerPointIconUrl,
        plugin: computerUseBinding67,
        title:
          computerUseSettingsRuntime.computerUseSettingsMessages
            .microsoftPowerPoint,
        toggleAriaLabel:
          computerUseSettingsRuntime.computerUseSettingsMessages
            .microsoftPowerPointToggleAria,
      },
    ],
    computerUseBinding69 = computerUseBinding65?.plugin.installed === !0,
    computerUseBinding70 =
      computerUseBinding69 && computerUseBinding65.plugin.enabled,
    computerUseBinding71 =
      data?.find(isDocumentControlAvailability)?.isEnabled ?? !0,
    computerUseBinding72 =
      isUpdating &&
      updatingAppId === computerUseSettingsRuntime.documentControlAppId,
    computerUseBinding73 = {
      hostId: selectedHostId,
      plugin: computerUseBinding65,
      shouldReadBrowserExtension: computerUseBinding69,
    };
  let computerUseBinding74 =
      useBrowserExtensionConnectionStatus(computerUseBinding73),
    computerUseBinding75 = [],
    computerUseBinding76 =
      computerUseBinding65 == null &&
      computerUseBinding54 &&
      !computerUseBinding56.isLoading &&
      !computerUseBinding56.allowed
        ? [
            {
              description:
                computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                  computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                  {
                    ...computerUseSettingsRuntime
                      .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwU
                      .restrictedAvailabilityDescription,
                  },
                ),
              icon: computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                `img`,
                {
                  alt: ``,
                  className: `h-full w-full object-contain`,
                  src: computerUseSettingsRuntime.chromeIconUrl,
                },
              ),
              id: `chrome-unavailable`,
              title:
                computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                  computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                  {
                    ...computerUseSettingsRuntime.computerUseSettingsMessages
                      .googleChrome,
                  },
                ),
            },
          ]
        : [];
  let computerUseBinding77 = computerUseBinding76;
  if (computerUseAvailability.available && computerUseBinding63 != null) {
    let computerUseBinding245, computerUseBinding246;
    ((computerUseBinding245 =
      computerUseSettingsRuntime.computerUseReactRuntime.createElement(
        computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          ...computerUseSettingsRuntime.computerUseSettingsMessages.anyApp,
        },
      )),
      (computerUseBinding246 =
        computerUseSettingsRuntime.computerUseReactRuntime.createElement(
          computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `settings.computerUse.anyApp.description`,
            defaultMessage: `Let Codex control apps computerUsePluginSlug your computer`,
            description: `Description for the Computer Use plugin control row`,
          },
        )));
    let computerUseBinding247;
    ((computerUseBinding247 = {
      plugin: computerUseBinding63,
      title: computerUseBinding245,
      description: computerUseBinding246,
    }),
      computerUseBinding75.push(computerUseBinding247));
  }
  if (computerUseBinding65 != null) {
    let computerUseBinding216 =
      computerUseSettingsRuntime.computerUseReactRuntime.createElement(
        computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          ...computerUseSettingsRuntime.computerUseSettingsMessages
            .googleChrome,
        },
      );
    let computerUseBinding217 =
      computerUseSettingsRuntime.computerUseReactRuntime.createElement(
        BrowserExtensionConnectionStatus,
        {
          status: computerUseBinding74,
        },
      );
    let computerUseBinding218 = computerUseBinding70
      ? computerUseSettingsRuntime.computerUseReactRuntime.createElement(
          computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
          {
            color: `secondary`,
            onClick: () => {
              computerUseBinding53(
                computerUseSettingsRuntime.chromeComputerUseSettingsPath,
              );
            },
            size: `toolbar`,
            children:
              computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  id: `settings.computerUse.chrome.manage`,
                  defaultMessage: `Manage`,
                  description: `Button label to manage Google Chrome settings`,
                },
              ),
          },
        )
      : null;
    let computerUseBinding219;
    ((computerUseBinding219 = {
      plugin: computerUseBinding65,
      title: computerUseBinding216,
      description: computerUseBinding217,
      action: computerUseBinding218,
    }),
      computerUseBinding75.push(computerUseBinding219));
  }
  if (computerUseBinding61 && (platform === `macOS` || platform === `windows`))
    for (let computerUseBinding220 of computerUseBinding68) {
      if (computerUseBinding220.plugin == null) continue;
      let computerUseBinding221 = computerUseBinding220.plugin;
      computerUseBinding75.push({
        ...(computerUseBinding221.plugin.installed &&
        computerUseBinding221.plugin.enabled
          ? {
              kind: `app`,
              enabled: computerUseBinding71,
              id: computerUseBinding220.appControlId,
              isPending: computerUseBinding72,
              onToggleEnabled: (computerUseOperand16) => {
                setAppEnabled({
                  appId: computerUseSettingsRuntime.documentControlAppId,
                  appName: computerUseBinding52.formatMessage(
                    computerUseBinding220.title,
                  ),
                  enabled: computerUseOperand16,
                }).catch(ignoreAppAvailabilityUpdateError);
              },
              toggleAriaLabel: computerUseBinding52.formatMessage(
                computerUseBinding220.toggleAriaLabel,
              ),
              toggleTooltip: computerUseBinding71
                ? computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                    computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                    {
                      ...computerUseBinding220.disableTooltip,
                    },
                  )
                : computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                    computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                    {
                      ...computerUseBinding220.enableTooltip,
                    },
                  ),
            }
          : {
              displayName: computerUseBinding52.formatMessage(
                computerUseBinding220.title,
              ),
              plugin: computerUseBinding221,
            }),
        icon: computerUseSettingsRuntime.computerUseReactRuntime.createElement(
          `img`,
          {
            alt: ``,
            className: `h-full w-full object-contain`,
            src: computerUseBinding220.icon,
          },
        ),
        title: computerUseSettingsRuntime.computerUseReactRuntime.createElement(
          computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            ...computerUseBinding220.title,
          },
        ),
        description:
          computerUseSettingsRuntime.computerUseReactRuntime.createElement(
            computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              ...computerUseBinding220.description,
            },
          ),
      });
    }
  let computerUseBinding78, computerUseBinding79;
  return (
    (computerUseBinding78 =
      computerUseSettingsRuntime.computerUseReactRuntime.createElement(
        computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.computerUse.install.empty`,
          defaultMessage: `Computer Use plugins unavailable`,
          description: `Empty state shown when computer use plugins cannot be found`,
        },
      )),
    (computerUseBinding79 =
      computerUseSettingsRuntime.computerUseReactRuntime.createElement(
        computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.computerUse.install.button`,
          defaultMessage: `Install`,
          description: `Button label for installing a computer use plugin`,
        },
      )),
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.browserUseSettingsG,
      {
        emptyStateTitle: computerUseBinding78,
        installButtonLabel: computerUseBinding79,
        items: computerUseBinding75,
        pluginsQuery: computerUseBinding59,
        selectedHostId: selectedHostId,
        unavailableItems: computerUseBinding77,
      },
    )
  );
}
function ignoreAppAvailabilityUpdateError() {}
function isDocumentControlAvailability(computerUseOperand24) {
  return (
    computerUseOperand24.id === computerUseSettingsRuntime.documentControlAppId
  );
}
export { ComputerUsePluginControls };
