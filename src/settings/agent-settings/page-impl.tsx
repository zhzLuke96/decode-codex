// Restored from ref/webview/assets/agent-settings-CE_EGsV1.js
// Semantic implementation module for the AgentSettings page composition.

import agentSettingsRuntime from "./runtime-impl";
import { AgentConfigSettingsSection } from "./agent-config-settings-section-impl";
import { ExperimentalFeaturesSection } from "./experimental-features-section-impl";
import { ModelFeaturesSection } from "./model-features-section-impl";
import { PrimaryRuntimeDependenciesSection } from "./primary-runtime-dependencies-impl";
function AgentSettings() {
  let { selectedHostId: selectedHostId } =
      agentSettingsRuntime.appInitialAppMainOnboardingPageMu(),
    agentSettingsBinding131 =
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dP(
        selectedHostId,
      ),
    agentSettingsBinding132 =
      agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkB(
        selectedHostId,
      ),
    agentSettingsBinding133 =
      agentSettingsRuntime.AppInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dRy(
        agentSettingsRuntime.appInitialAppMainAgentSettingsL,
      ),
    agentSettingsBinding134 =
      agentSettingsRuntime.AppInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dRy(
        `2106641128`,
      ),
    agentSettingsBinding135 =
      agentSettingsRuntime.AppInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dRy(
        `3693343337`,
      ),
    agentSettingsBinding136 =
      agentSettingsRuntime.agentSettingsElementFactory.createElement(
        agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nV,
        {
          slug: `agent`,
        },
      );
  let agentSettingsBinding137 =
    agentSettingsRuntime.agentSettingsElementFactory.createElement(
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        id: `settings.agent.configuration.subtitle.summary`,
        defaultMessage: `Configure approval policy and sandbox settings <a>Learn more</a>`,
        description: `Summary text for the configuration settings subtitle`,
        values: {
          a: renderConfigDocsLink,
        },
      },
    );
  let agentSettingsBinding138 =
    agentSettingsRuntime.agentSettingsElementFactory.createElement(
      agentSettingsRuntime
        .appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD.Header,
      {
        title: agentSettingsRuntime.agentSettingsElementFactory.createElement(
          agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            ...agentSettingsRuntime.agentSettingsMessages.customConfig,
          },
        ),
      },
    );
  let agentSettingsBinding139;
  {
    let agentSettingsBinding202;
    ((agentSettingsBinding202 = (
      agentSettingsOperand4,
      agentSettingsOperand5,
    ) =>
      agentSettingsRuntime.agentSettingsElementFactory.createElement(
        agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsIt,
        {
          fullWidth: !0,
          icon: agentSettingsRuntime.appInitialAppMainOnboardingPageWt,
          level: agentSettingsOperand4.level,
          className:
            agentSettingsOperand5 === agentSettingsBinding132.length - 1
              ? `mb-3`
              : `mb-2`,
          children:
            agentSettingsRuntime.agentSettingsElementFactory.createElement(
              `div`,
              {
                className: `flex min-w-0 flex-col gap-2`,
                children:
                  agentSettingsRuntime.agentSettingsElementFactory.createElement(
                    `div`,
                    {
                      className: `flex min-w-0 items-start justify-between gap-2`,
                      children: [
                        agentSettingsRuntime.agentSettingsElementFactory.createElement(
                          `div`,
                          {
                            className: `flex min-w-0 flex-col gap-1`,
                            children: [
                              agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                `div`,
                                {
                                  className: `min-w-0 text-sm text-token-text-primary`,
                                  children:
                                    agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                      agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsDr,
                                      {
                                        cwd: null,
                                        className: `[&>p]:my-0`,
                                        textStyle: {
                                          kind: `small`,
                                        },
                                        children: agentSettingsOperand4.summary,
                                      },
                                    ),
                                },
                              ),
                              agentSettingsOperand4.details != null &&
                              agentSettingsOperand4.details.length > 0
                                ? agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                    `div`,
                                    {
                                      className: `min-w-0 text-sm text-token-text-secondary`,
                                      children:
                                        agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                          agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsDr,
                                          {
                                            cwd: null,
                                            className: `[&>p]:my-0`,
                                            textStyle: {
                                              kind: `small`,
                                            },
                                            children:
                                              agentSettingsOperand4.details,
                                          },
                                        ),
                                    },
                                  )
                                : null,
                              agentSettingsOperand4.path == null
                                ? null
                                : agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                    `div`,
                                    {
                                      className: `min-w-0 text-sm text-token-text-secondary`,
                                      children:
                                        agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                          agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                                          {
                                            id: `settings.agent.configuration.notice.fileContext`,
                                            defaultMessage: `File: {path}{location}`,
                                            description: `File path and optional location for a config or rules warning shown in settings`,
                                            values: {
                                              path: agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                                `code`,
                                                {
                                                  children:
                                                    agentSettingsOperand4.path,
                                                },
                                              ),
                                              location:
                                                agentSettingsOperand4.range ==
                                                null
                                                  ? ``
                                                  : agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                                      agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                                                      {
                                                        id: `settings.agent.configuration.notice.fileLocationSuffix`,
                                                        defaultMessage: ` (line {line}, column {column})`,
                                                        description: `Suffix showing the line and column for a config warning in settings`,
                                                        values: {
                                                          line: agentSettingsOperand4
                                                            .range.start.line,
                                                          column:
                                                            agentSettingsOperand4
                                                              .range.start
                                                              .column,
                                                        },
                                                      },
                                                    ),
                                            },
                                          },
                                        ),
                                    },
                                  ),
                            ],
                          },
                        ),
                        agentSettingsOperand4.path == null
                          ? null
                          : agentSettingsRuntime.agentSettingsElementFactory.createElement(
                              agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
                              {
                                color: `secondary`,
                                size: `toolbar`,
                                className: `inline-flex w-fit shrink-0`,
                                onClick: () => {
                                  agentSettingsOperand4.path != null &&
                                    agentSettingsRuntime.appInitialAppMainOnboardingPageJp(
                                      {
                                        hostId: selectedHostId,
                                        path: agentSettingsOperand4.path,
                                        range: agentSettingsOperand4.range,
                                      },
                                    );
                                },
                                children:
                                  agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                    agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                                    {
                                      id: `settings.agent.configuration.notice.openFile`,
                                      defaultMessage: `Open file`,
                                      description: `Button label to open the file associated with a config or rules warning`,
                                    },
                                  ),
                              },
                            ),
                      ],
                    },
                  ),
              },
            ),
        },
        `${agentSettingsOperand5}:${agentSettingsOperand4.kind}:${agentSettingsOperand4.summary}:${agentSettingsOperand4.path ?? ``}`,
      )),
      (agentSettingsBinding139 = agentSettingsBinding132.map(
        agentSettingsBinding202,
      )));
  }
  let agentSettingsBinding140 =
    agentSettingsRuntime.agentSettingsElementFactory.createElement(
      agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLs,
      {
        electron: !0,
        children:
          agentSettingsRuntime.agentSettingsElementFactory.createElement(
            AgentConfigSettingsSection,
            {
              hostId: selectedHostId,
            },
          ),
      },
    );
  let agentSettingsBinding141, agentSettingsBinding142;
  ((agentSettingsBinding141 =
    agentSettingsRuntime.agentSettingsElementFactory.createElement(
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        id: `settings.agent.configuration.configToml`,
        defaultMessage: `config.toml`,
        description: `Label for config.toml open button`,
      },
    )),
    (agentSettingsBinding142 =
      agentSettingsRuntime.agentSettingsElementFactory.createElement(
        agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.agent.configuration.configToml.description`,
          defaultMessage: `Edit your config to customize agent behavior`,
          description: `Description for config.toml open row`,
        },
      )));
  let agentSettingsBinding143, agentSettingsBinding144;
  ((agentSettingsBinding143 =
    agentSettingsRuntime.agentSettingsElementFactory.createElement(`span`, {
      className: `block`,
    })),
    (agentSettingsBinding144 =
      agentSettingsRuntime.agentSettingsElementFactory.createElement(
        agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.agent.configuration.configToml.restartNote`,
          defaultMessage: `Restart Codex after editing to apply changes`,
          description: `Note that config.toml changes require a restart`,
        },
      )));
  let agentSettingsBinding145 =
    agentSettingsRuntime.agentSettingsElementFactory.createElement(
      agentSettingsRuntime.agentSettingsElementFactory.Fragment,
      {
        children: [
          agentSettingsBinding142,
          ` `,
          agentSettingsBinding143,
          agentSettingsBinding144,
          ` `,
          agentSettingsRuntime.agentSettingsElementFactory.createElement(`a`, {
            className: `inline-flex items-center gap-1 text-token-text-secondary hover:text-token-text-primary`,
            href: agentSettingsRuntime.appInitialAppMainOnboardingPageDc,
            target: `_blank`,
            rel: `noreferrer`,
            onClick: handleConfigDocsClick,
            children: [
              agentSettingsRuntime.agentSettingsElementFactory.createElement(
                agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  id: `settings.agent.configuration.configToml.docs`,
                  defaultMessage: `Docs`,
                  description: `Link label for config documentation`,
                },
              ),
              agentSettingsRuntime.agentSettingsElementFactory.createElement(
                agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNn,
                {
                  href: agentSettingsRuntime.appInitialAppMainOnboardingPageDc,
                  className: `icon-xxs`,
                },
              ),
            ],
          }),
        ],
      },
    );
  let agentSettingsBinding146 =
    agentSettingsRuntime.agentSettingsElementFactory.createElement(
      agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLs,
      {
        extension: !0,
        children:
          agentSettingsRuntime.agentSettingsElementFactory.createElement(
            agentSettingsRuntime.appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsQ,
            {
              children:
                agentSettingsRuntime.agentSettingsElementFactory.createElement(
                  agentSettingsRuntime.appInitialAppMainOnboardingPageFn,
                  {
                    label: agentSettingsBinding141,
                    description: agentSettingsBinding145,
                    control:
                      agentSettingsRuntime.agentSettingsElementFactory.createElement(
                        agentSettingsRuntime.AppInitialAppMainOnboardingPageGp,
                        {
                          hostId: selectedHostId,
                        },
                      ),
                  },
                ),
            },
          ),
      },
    );
  let agentSettingsBinding147 =
    agentSettingsRuntime.agentSettingsElementFactory.createElement(
      agentSettingsRuntime.appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD,
      {
        className: `gap-2`,
        children: [
          agentSettingsBinding138,
          agentSettingsRuntime.agentSettingsElementFactory.createElement(
            agentSettingsRuntime
              .appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD
              .Content,
            {
              children: [
                agentSettingsBinding139,
                agentSettingsBinding140,
                agentSettingsBinding146,
              ],
            },
          ),
        ],
      },
    );
  let agentSettingsBinding148 = agentSettingsBinding135
    ? agentSettingsRuntime.agentSettingsElementFactory.createElement(
        ModelFeaturesSection,
        {
          hostId: selectedHostId,
        },
      )
    : null;
  let agentSettingsBinding149 = agentSettingsBinding134
    ? agentSettingsRuntime.agentSettingsElementFactory.createElement(`div`, {
        children:
          agentSettingsRuntime.agentSettingsElementFactory.createElement(
            ExperimentalFeaturesSection,
            {
              hostId: selectedHostId,
            },
          ),
      })
    : null;
  let agentSettingsBinding150 =
    agentSettingsRuntime.agentSettingsElementFactory.createElement(
      agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLs,
      {
        electron: !0,
        children: agentSettingsBinding149,
      },
    );
  let agentSettingsBinding151 =
    agentSettingsBinding133 && agentSettingsBinding131.kind === `local`
      ? agentSettingsRuntime.agentSettingsElementFactory.createElement(
          PrimaryRuntimeDependenciesSection,
          {
            hostId: selectedHostId,
          },
        )
      : null;
  let agentSettingsBinding152 =
    agentSettingsRuntime.agentSettingsElementFactory.createElement(
      agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLs,
      {
        electron: !0,
        children: agentSettingsBinding151,
      },
    );
  return agentSettingsRuntime.agentSettingsElementFactory.createElement(
    agentSettingsRuntime.agentSettingsElementFactory.Fragment,
    {
      children: agentSettingsRuntime.agentSettingsElementFactory.createElement(
        agentSettingsRuntime.appInitialAppMainSettingsPageOpenSourceLicensesPageSkillsSettingsPluginsSettinCxbtmbfcT,
        {
          title: agentSettingsBinding136,
          subtitle: agentSettingsBinding137,
          children: [
            agentSettingsBinding147,
            agentSettingsBinding148,
            agentSettingsBinding150,
            agentSettingsBinding152,
          ],
        },
      ),
    },
  );
}
function handleConfigDocsClick(agentSettingsOperand44) {
  agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwIs(
    {
      event: agentSettingsOperand44,
      href: agentSettingsRuntime.appInitialAppMainOnboardingPageDc,
      initiator: `open_in_browser_bridge`,
    },
  );
}
function renderConfigDocsLink(agentSettingsOperand31) {
  return agentSettingsRuntime.agentSettingsElementFactory.createElement(`a`, {
    className: `inline-flex text-token-text-link-foreground`,
    href: agentSettingsRuntime.appInitialAppMainOnboardingPageDc,
    target: `_blank`,
    rel: `noreferrer`,
    children: agentSettingsOperand31,
  });
}
export { AgentSettings };
