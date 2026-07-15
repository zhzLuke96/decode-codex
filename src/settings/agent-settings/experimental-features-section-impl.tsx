// Restored from ref/webview/assets/agent-settings-CE_EGsV1.js
// Semantic implementation module for the agent experimental features settings section.

import agentSettingsRuntime from "./runtime-impl";
function ExperimentalFeaturesSection(agentSettingsOperand3) {
  let { hostId: hostId } = agentSettingsOperand3,
    agentSettingsBinding178 =
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy(),
    [agentSettingsBinding179, agentSettingsBinding180] = (0,
    agentSettingsRuntime.experimentalFeatureReactRuntime.useState)(!1),
    { data: data, isLoading: isLoading } =
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wGo(
        agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwSl,
        hostId,
      ),
    agentSettingsBinding181 = data === void 0 ? [] : data,
    agentSettingsBinding182 = {
      hostId: hostId,
    };
  let agentSettingsBinding183 =
      agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLl(
        agentSettingsBinding182,
      ),
    agentSettingsBinding184 = agentSettingsBinding181.filter(
      isVisibleExperimentalFeature,
    ),
    agentSettingsBinding185 =
      agentSettingsBinding181.some(isEnabledAppsFeature),
    agentSettingsBinding186 = agentSettingsBinding181.find(isPluginsFeature),
    agentSettingsBinding187 = (agentSettingsOperand21) => ({
      key: agentSettingsOperand21.name,
      label: agentSettingsOperand21.displayName ?? agentSettingsOperand21.name,
      description: agentSettingsOperand21.description ?? void 0,
      enabled: agentSettingsOperand21.enabled,
      onChange: (agentSettingsOperand28) => {
        agentSettingsBinding183.mutate(
          {
            featureName: agentSettingsOperand21.name,
            enabled: agentSettingsOperand28,
          },
          {
            onSuccess: () => {
              agentSettingsBinding180(!0);
            },
          },
        );
      },
    });
  let agentSettingsBinding188 = [
      ...(agentSettingsBinding185
        ? [
            {
              key: `plugins`,
              label: agentSettingsBinding178.formatMessage({
                id: `settings.general.experimentalFeatures.plugins.label`,
                defaultMessage: `Plugins`,
                description: `Label for the plugins experimental feature toggle`,
              }),
              description:
                agentSettingsBinding186?.description ??
                agentSettingsBinding178.formatMessage({
                  id: `settings.general.experimentalFeatures.plugins.description`,
                  defaultMessage: `Enable the plugins experience in Codex`,
                  description: `Description for the plugins experimental feature toggle`,
                }),
              enabled: agentSettingsBinding186?.enabled ?? !0,
              onChange: (agentSettingsOperand25) => {
                agentSettingsBinding183.mutate(
                  {
                    featureName: `plugins`,
                    enabled: agentSettingsOperand25,
                  },
                  {
                    onSuccess: () => {
                      agentSettingsBinding180(!0);
                    },
                  },
                );
              },
            },
          ]
        : []),
      ...agentSettingsBinding184.map(agentSettingsBinding187),
    ],
    agentSettingsBinding189 = agentSettingsBinding188.length > 0,
    agentSettingsBinding190 =
      agentSettingsRuntime.appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD,
    agentSettingsBinding191 =
      agentSettingsRuntime.experimentalFeatureElementFactory.createElement(
        agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.general.experimentalFeatures`,
          defaultMessage: `Experimental features (Beta)`,
          description: `Heading for beta experimental features settings group`,
        },
      );
  let agentSettingsBinding192 = agentSettingsBinding179
    ? agentSettingsRuntime.experimentalFeatureElementFactory.createElement(
        `div`,
        {
          className: `mb-2 block font-medium text-token-error-foreground`,
          children:
            agentSettingsRuntime.experimentalFeatureElementFactory.createElement(
              agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
              {
                id: `settings.general.experimentalFeatures.restartNote`,
                defaultMessage: `Restart {appName} to apply experimental feature changes`,
                description: `Notice shown after changing an experimental feature to indicate restart is required`,
                values: {
                  appName:
                    agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageAppgenSettingsPagePageAppgenPageRemoteConDi269h6jM,
                },
              },
            ),
        },
      )
    : void 0;
  let agentSettingsBinding193 =
    agentSettingsRuntime.experimentalFeatureElementFactory.createElement(
      agentSettingsRuntime
        .appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD.Header,
      {
        title: agentSettingsBinding191,
        subtitle: agentSettingsBinding192,
      },
    );
  let agentSettingsBinding194 =
      agentSettingsRuntime.appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD,
    agentSettingsBinding195 =
      agentSettingsRuntime.appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsQ,
    agentSettingsBinding196 = isLoading
      ? agentSettingsRuntime.experimentalFeatureElementFactory.createElement(
          agentSettingsRuntime.appInitialAppMainOnboardingPageFn,
          {
            label:
              agentSettingsRuntime.experimentalFeatureElementFactory.createElement(
                agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  id: `settings.general.experimentalFeatures.loading`,
                  defaultMessage: `Loading experimental features…`,
                  description: `Loading label for beta experimental features settings group`,
                },
              ),
            control:
              agentSettingsRuntime.experimentalFeatureElementFactory.createElement(
                `span`,
                {
                  className: `h-5 w-8`,
                },
              ),
          },
        )
      : null;
  let agentSettingsBinding197 =
    !isLoading && !agentSettingsBinding189
      ? agentSettingsRuntime.experimentalFeatureElementFactory.createElement(
          agentSettingsRuntime.appInitialAppMainOnboardingPageFn,
          {
            label:
              agentSettingsRuntime.experimentalFeatureElementFactory.createElement(
                agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  id: `settings.general.experimentalFeatures.empty`,
                  defaultMessage: `No beta experimental features available`,
                  description: `Empty label for beta experimental features settings group`,
                },
              ),
            control:
              agentSettingsRuntime.experimentalFeatureElementFactory.createElement(
                `span`,
                {
                  className: `h-5 w-8`,
                },
              ),
          },
        )
      : null;
  let agentSettingsBinding198 = agentSettingsBinding188.map((item) =>
      agentSettingsRuntime.experimentalFeatureElementFactory.createElement(
        agentSettingsRuntime.appInitialAppMainOnboardingPageFn,
        {
          label: item.label,
          description: item.description,
          control:
            agentSettingsRuntime.experimentalFeatureElementFactory.createElement(
              agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwKn,
              {
                checked: item.enabled,
                disabled: agentSettingsBinding183.isPending,
                onChange: item.onChange,
                ariaLabel: agentSettingsBinding178.formatMessage(
                  {
                    id: `settings.general.experimentalFeatures.toggle`,
                    defaultMessage: `Toggle {featureName}`,
                    description: `Aria label for toggling a beta experimental feature`,
                  },
                  {
                    featureName: item.label,
                  },
                ),
              },
            ),
        },
        item.key,
      ),
    ),
    agentSettingsBinding199 =
      agentSettingsRuntime.experimentalFeatureElementFactory.createElement(
        agentSettingsBinding195,
        {
          children: [
            agentSettingsBinding196,
            agentSettingsBinding197,
            agentSettingsBinding198,
          ],
        },
      );
  let agentSettingsBinding200 =
    agentSettingsRuntime.experimentalFeatureElementFactory.createElement(
      agentSettingsBinding194.Content,
      {
        children: agentSettingsBinding199,
      },
    );
  return agentSettingsRuntime.experimentalFeatureElementFactory.createElement(
    agentSettingsBinding190,
    {
      children: [agentSettingsBinding193, agentSettingsBinding200],
    },
  );
}
function isPluginsFeature(agentSettingsOperand50) {
  return agentSettingsOperand50.name === `plugins`;
}
function isEnabledAppsFeature(agentSettingsOperand48) {
  return (
    agentSettingsOperand48.name === `apps` && agentSettingsOperand48.enabled
  );
}
function isVisibleExperimentalFeature(agentSettingsOperand53) {
  return agentSettingsRuntime.experimentalFeatureVisibilityN(
    agentSettingsOperand53,
  );
}
export { ExperimentalFeaturesSection };
