// Restored from ref/webview/assets/agent-settings-CE_EGsV1.js
// Semantic implementation module for the model feature settings section.

import agentSettingsRuntime from "./runtime-impl";
function ModelFeaturesSection(agentSettingsOperand2) {
  let { hostId: hostId } = agentSettingsOperand2,
    agentSettingsBinding155 =
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wKo(
        agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wE,
      ),
    agentSettingsBinding156 =
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wQo(
        agentSettingsRuntime.appInitialAppMainOnboardingPageZp,
      ),
    agentSettingsBinding157 = {
      hostId: hostId,
    };
  let { data: data } = agentSettingsRuntime.appInitialAppMainOnboardingPagePp(
      agentSettingsBinding157,
    ),
    agentSettingsBinding158,
    agentSettingsBinding159,
    agentSettingsBinding160,
    agentSettingsBinding161,
    agentSettingsBinding162,
    agentSettingsBinding163,
    agentSettingsBinding164,
    agentSettingsBinding165,
    agentSettingsBinding166,
    agentSettingsBinding167,
    agentSettingsBinding168,
    agentSettingsBinding169,
    agentSettingsBinding170,
    agentSettingsBinding171;
  agentSettingsBinding163 = Symbol.for(`react.early_return_sentinel`);
  bb0: {
    let agentSettingsBinding203 = (agentSettingsOperand32) =>
      agentSettingsOperand32 === `max`
        ? data?.hasModelSupportingMaxReasoningEffort === !0
        : data?.hasModelSupportingUltraReasoningEffort === !0;
    let agentSettingsBinding204 =
      agentSettingsRuntime.reasoningEffortOptions.filter(
        agentSettingsBinding203,
      );
    if (data == null || agentSettingsBinding204.length === 0) {
      agentSettingsBinding163 = null;
      break bb0;
    }
    let agentSettingsBinding205 = (agentSettingsOperand57) =>
      agentSettingsBinding156.has(agentSettingsOperand57);
    let agentSettingsBinding206 =
      agentSettingsRuntime.appInitialAppMainOnboardingPageRp.length +
      agentSettingsBinding204.filter(agentSettingsBinding205).length;
    ((agentSettingsBinding162 =
      agentSettingsRuntime.appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD),
      (agentSettingsBinding171 =
        agentSettingsRuntime.modelFeatureElementFactory.createElement(
          agentSettingsRuntime
            .appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD
            .Header,
          {
            title:
              agentSettingsRuntime.modelFeatureElementFactory.createElement(
                agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  id: `settings.agent.modelFeatures.title`,
                  defaultMessage: `Model features`,
                  description: `Title for model feature settings`,
                },
              ),
          },
        )),
      (agentSettingsBinding161 =
        agentSettingsRuntime
          .appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD
          .Content),
      (agentSettingsBinding160 =
        agentSettingsRuntime.appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsQ),
      (agentSettingsBinding159 =
        agentSettingsRuntime.appInitialAppMainOnboardingPageFn),
      (agentSettingsBinding169 =
        agentSettingsRuntime.modelFeatureElementFactory.createElement(
          agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `settings.agent.modelFeatures.reasoningEfforts.label`,
            defaultMessage: `Available reasoning efforts`,
            description: `Label for the available reasoning efforts setting`,
          },
        )),
      (agentSettingsBinding170 =
        agentSettingsRuntime.modelFeatureElementFactory.createElement(
          agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `settings.agent.modelFeatures.reasoningEfforts.description`,
            defaultMessage: `Choose which reasoning effort levels appear in model controls. Availability varies by model`,
            description: `Description for the available reasoning efforts setting`,
          },
        )),
      (agentSettingsBinding158 =
        agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwEo),
      (agentSettingsBinding164 = `end`),
      (agentSettingsBinding165 = `menuWide`),
      (agentSettingsBinding166 =
        agentSettingsRuntime.modelFeatureElementFactory.createElement(
          agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nR,
          {
            children:
              agentSettingsRuntime.modelFeatureElementFactory.createElement(
                agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  id: `settings.agent.modelFeatures.reasoningEfforts.selectedCount`,
                  defaultMessage: `{count, plural, one {# selected} other {# selected}}`,
                  description: `Number of available reasoning efforts selected`,
                  values: {
                    count: agentSettingsBinding206,
                  },
                },
              ),
          },
        )),
      (agentSettingsBinding167 =
        agentSettingsRuntime.appInitialAppMainOnboardingPageRp.map(
          ReasoningEffortMenuItem,
        )),
      (agentSettingsBinding168 = agentSettingsBinding204.map((item) =>
        agentSettingsRuntime.modelFeatureElementFactory.createElement(
          agentSettingsRuntime
            .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
            .CheckboxItem,
          {
            checked: agentSettingsBinding156.has(item),
            onCheckedChange: (agentSettingsOperand29) => {
              agentSettingsRuntime.appInitialAppMainOnboardingPageVp(
                agentSettingsBinding155,
                {
                  enabled: agentSettingsOperand29,
                  hostId: hostId,
                  listModelsData: data,
                  reasoningEffort: item,
                },
              );
            },
            children:
              agentSettingsRuntime.modelFeatureElementFactory.createElement(
                agentSettingsRuntime.appInitialAppMainOnboardingPageUr,
                {
                  effort: item,
                },
              ),
          },
          item,
        ),
      )));
  }
  if (agentSettingsBinding163 !== Symbol.for(`react.early_return_sentinel`))
    return agentSettingsBinding163;
  let agentSettingsBinding172 =
    agentSettingsRuntime.modelFeatureElementFactory.createElement(
      agentSettingsBinding158,
      {
        align: agentSettingsBinding164,
        contentWidth: agentSettingsBinding165,
        triggerButton: agentSettingsBinding166,
        children: [agentSettingsBinding167, agentSettingsBinding168],
      },
    );
  let agentSettingsBinding173 =
    agentSettingsRuntime.modelFeatureElementFactory.createElement(
      agentSettingsBinding159,
      {
        label: agentSettingsBinding169,
        description: agentSettingsBinding170,
        control: agentSettingsBinding172,
      },
    );
  let agentSettingsBinding174 =
    agentSettingsRuntime.modelFeatureElementFactory.createElement(
      agentSettingsBinding160,
      {
        children: agentSettingsBinding173,
      },
    );
  let agentSettingsBinding175 =
    agentSettingsRuntime.modelFeatureElementFactory.createElement(
      agentSettingsBinding161,
      {
        children: agentSettingsBinding174,
      },
    );
  return agentSettingsRuntime.modelFeatureElementFactory.createElement(
    agentSettingsBinding162,
    {
      children: [agentSettingsBinding171, agentSettingsBinding175],
    },
  );
}
function ReasoningEffortMenuItem(agentSettingsOperand33) {
  return agentSettingsRuntime.modelFeatureElementFactory.createElement(
    agentSettingsRuntime
      .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
      .CheckboxItem,
    {
      checked: !0,
      disabled: !0,
      children: agentSettingsRuntime.modelFeatureElementFactory.createElement(
        agentSettingsRuntime.appInitialAppMainOnboardingPageUr,
        {
          effort: agentSettingsOperand33,
        },
      ),
    },
    agentSettingsOperand33,
  );
}
export { ModelFeaturesSection };
