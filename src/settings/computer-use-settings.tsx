// Restored from ref/webview/assets/computer-use-settings-BIYkni3c.js
// Computer use settings page restored from the current Codex webview chunk.

import computerUseSettingsRuntime from "./computer-use-settings/runtime-impl";
import { ComputerUsePluginControls } from "./computer-use-settings/plugin-controls-impl";
import { GoogleChromeComputerUseSettings } from "./computer-use-settings/chrome-settings-impl";
import {
  AllowedComputerUseAppsSection,
  ComputerUseSoundSettingsSection,
  LockedComputerUseSection,
} from "./computer-use-settings/allowed-apps-impl";
function ComputerUseSettings() {
  let { selectedHostId: selectedHostId } =
      computerUseSettingsRuntime.appInitialAppMainOnboardingPageMu(),
    computerUseBinding155 =
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wGo(
        computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nYt,
        selectedHostId,
      ),
    computerUseBinding156 = {
      hostId: selectedHostId,
    };
  let computerUseBinding157 =
      computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwRl(
        computerUseBinding156,
      ),
    { platform: platform } =
      computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkP();
  if (
    computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dPa(
      computerUseSettingsRuntime.chromeComputerUseSettingsPath,
    ) != null
  ) {
    let computerUseBinding253;
    return computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      GoogleChromeComputerUseSettings,
      {},
    );
  }
  let computerUseBinding158, computerUseBinding159;
  ((computerUseBinding158 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nV,
      {
        slug: computerUseSettingsRuntime.computerUseSettingsSlug,
      },
    )),
    (computerUseBinding159 =
      computerUseSettingsRuntime.computerUseReactRuntime.createElement(
        computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.computerUse.subtitle`,
          defaultMessage: `Manage how Codex uses other applications computerUsePluginSlug your computer`,
          description: `Subtitle for computer use settings`,
        },
      )));
  let computerUseBinding160 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime
        .appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD.Header,
      {
        title: computerUseSettingsRuntime.computerUseReactRuntime.createElement(
          computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            ...computerUseSettingsRuntime.computerUseSettingsMessages.control,
          },
        ),
      },
    );
  let computerUseBinding161 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      ComputerUsePluginControls,
      {
        computerUseAvailability: computerUseBinding157,
        platform: platform,
      },
    );
  let computerUseBinding162 =
    platform === `macOS` &&
    computerUseBinding157.available &&
    computerUseBinding155
      ? computerUseSettingsRuntime.computerUseReactRuntime.createElement(
          LockedComputerUseSection,
          {},
        )
      : null;
  let computerUseBinding163 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD,
      {
        children: [
          computerUseBinding160,
          computerUseSettingsRuntime.computerUseReactRuntime.createElement(
            computerUseSettingsRuntime
              .appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD
              .Content,
            {
              children: [computerUseBinding161, computerUseBinding162],
            },
          ),
        ],
      },
    );
  let computerUseBinding164 = computerUseBinding157.available
    ? computerUseSettingsRuntime.computerUseReactRuntime.createElement(
        computerUseSettingsRuntime.computerUseReactRuntime.Fragment,
        {
          children: [
            computerUseSettingsRuntime.computerUseReactRuntime.createElement(
              computerUseSettingsRuntime.appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD,
              {
                children: [
                  computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                    computerUseSettingsRuntime
                      .appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD
                      .Header,
                    {
                      title:
                        computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                          computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                          {
                            ...computerUseSettingsRuntime
                              .computerUseSettingsMessages.alwaysAllowedApps,
                          },
                        ),
                    },
                  ),
                  computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                    computerUseSettingsRuntime
                      .appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD
                      .Content,
                    {
                      children:
                        computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                          computerUseSettingsRuntime.appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsQ,
                          {
                            children:
                              computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                                AllowedComputerUseAppsSection,
                                {},
                              ),
                          },
                        ),
                    },
                  ),
                ],
              },
            ),
            computerUseSettingsRuntime.computerUseReactRuntime.createElement(
              ComputerUseSoundSettingsSection,
              {},
            ),
          ],
        },
      )
    : null;
  return computerUseSettingsRuntime.computerUseReactRuntime.createElement(
    computerUseSettingsRuntime.appInitialAppMainSettingsPageOpenSourceLicensesPageSkillsSettingsPluginsSettinCxbtmbfcT,
    {
      title: computerUseBinding158,
      subtitle: computerUseBinding159,
      children: [computerUseBinding163, computerUseBinding164],
    },
  );
}
export { ComputerUseSettings };
