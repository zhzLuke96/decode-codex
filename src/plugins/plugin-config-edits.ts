// Restored from ref/webview/assets/plugin-config-edits-Dq2JYPpm.js

type PluginConfigEdit = {
  keyPath: string;
  value: boolean;
  mergeStrategy: "upsert";
};
const OPENAI_BUNDLED_MARKETPLACE_NAME = "openai-bundled";
const SITE_CREATOR_PLUGIN_ID = "sites";
const BROWSER_USE_PLUGIN_ID = "browser";
const COMPUTER_USE_PLUGIN_ID = "computer-use";
const OPENAI_BUNDLED_SITES_PLUGIN_ID = `${SITE_CREATOR_PLUGIN_ID}@${OPENAI_BUNDLED_MARKETPLACE_NAME}`;
const BUNDLED_PLUGIN_AUTO_INSTALL_DISABLED_CONFIG_IDS = new Map([
  [SITE_CREATOR_PLUGIN_ID, "site-creator-bundled-plugin-auto-install-disabled"],
  [BROWSER_USE_PLUGIN_ID, "browser-use-bundled-plugin-auto-install-disabled"],
  [COMPUTER_USE_PLUGIN_ID, "computer-use-bundled-plugin-auto-install-disabled"],
]);
function getPluginMarketplaceSuffix(pluginId: string) {
  const suffixOffset = pluginId.lastIndexOf("@");
  return suffixOffset <= 0 || suffixOffset === pluginId.length - 1
    ? null
    : pluginId.slice(suffixOffset + 1);
}
function isOpenAIBundledMarketplaceName(marketplaceName: string) {
  return marketplaceName === OPENAI_BUNDLED_MARKETPLACE_NAME;
}
function getBundledPluginAutoInstallDisabledConfigId(pluginId: string) {
  const marketplaceName = getPluginMarketplaceSuffix(pluginId);
  if (
    marketplaceName == null ||
    !isOpenAIBundledMarketplaceName(marketplaceName)
  ) {
    return undefined;
  }
  return BUNDLED_PLUGIN_AUTO_INSTALL_DISABLED_CONFIG_IDS.get(
    pluginId.slice(0, pluginId.length - marketplaceName.length - 1),
  );
}
function createPluginEnabledConfigEdit({
  pluginId,
  enabled,
}: {
  pluginId: string;
  enabled: boolean;
}): PluginConfigEdit[] {
  return [
    {
      keyPath: `plugins.${pluginId}.enabled`,
      value: enabled,
      mergeStrategy: "upsert",
    },
  ];
}
export {
  createPluginEnabledConfigEdit,
  getBundledPluginAutoInstallDisabledConfigId,
  OPENAI_BUNDLED_SITES_PLUGIN_ID,
};
