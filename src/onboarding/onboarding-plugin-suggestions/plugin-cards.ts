// Restored from ref/webview/assets/onboarding-plugin-suggestions-DbMYi-zc.js
// onboarding-plugin-suggestions-DbMYi-zc chunk restored from the Codex webview bundle.
import { normalizeMailProviderForSku } from "../onboarding-mail-provider";
import { getPluginSuggestionsForRole } from "./plugin-suggestions-by-role";
function buildOnboardingPluginSuggestionCards({
  intl,
  mailProvider,
  plan: userPlan = null,
  plugins = [],
  roles,
}) {
  let primaryRole = roles[0] ?? "something_else",
    resolvedMailProvider = normalizeMailProviderForSku(mailProvider, userPlan);
  return getPluginSuggestionsForRole(primaryRole).flatMap((item) => {
    let installedPlugin = plugins.find(
      (_item) => _item.plugin.name === item.pluginName,
    );
    return installedPlugin == null ||
      (item.mailProvider != null && item.mailProvider !== resolvedMailProvider)
      ? []
      : [
          {
            id: `onboarding-plugin-${primaryRole}-${item.pluginName}`,
            title: intl.formatMessage(item.titleMessage),
            description: intl.formatMessage(item.subtextMessage),
            prompt: intl.formatMessage(item.starterPromptMessage),
            appIds: [item.pluginName],
            status: "pending",
            createdAtMs: 0,
            updatedAtMs: 0,
            analyticsType: "onboarding_starter",
            homeAction: {
              type: "connect-plugin-onboarding",
              plugin: installedPlugin,
            },
            showTooltip: true,
            source: "default",
          },
        ];
  });
}
export { buildOnboardingPluginSuggestionCards };
