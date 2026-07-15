// Restored from ref/webview/assets/use-native-apps.electron-BKycNd6Z.js
// use-native-apps.electron-BKycNd6Z chunk restored from the Codex webview bundle.
import {
  CHROME_NATIVE_APP_DISPLAY_NAME,
  isChromeNativeApp,
} from "../boundaries/thread-context-inputs.facade";
import {
  _vscodeApiO as useVscodeQuery,
  vscodeApiU,
} from "../boundaries/vscode-api";
import {
  createPluginMentionHref,
  createPluginMentionItem,
  getPluginMentionIcon,
} from "../composer/mention-item";
import { McpIcon } from "../icons/mcp-icon";
import { getSkillIcon } from "../utils/get-skill-icon";
import { usePlatform } from "../utils/use-platform";
type NativeDesktopApp = {
  bundleId: string;
  displayName: string;
  [key: string]: unknown;
};
type PluginDescriptor = {
  id: string;
  name: string;
  installed?: boolean;
  enabled?: boolean;
};
type NativeAppPlugin = {
  plugin: PluginDescriptor;
  displayName?: string | null;
  description?: string | null;
  logoPath?: string | null;
  marketplaceName?: string | null;
  composerIconPath?: string | null;
  [key: string]: unknown;
};
type NativeAppMentionResolution = {
  isComputerUse: boolean;
  nativeApp: NativeDesktopApp | null;
};
type ComputerUseNativeAppMentionOptions = {
  app: NativeDesktopApp;
  description?: string | null;
  computerPlugin: NativeAppPlugin;
  iconSmall?: string | null;
};
type FindNativeAppPluginOptions = {
  label: string;
  path?: string | null;
  plugins: NativeAppPlugin[];
};
type UseNativeAppsElectronOptions = {
  enabled?: boolean;
};
type NativeDesktopAppsQueryResult = {
  apps?: NativeDesktopApp[];
};
export function createNativeAppPluginMentionItem(
  plugin: NativeAppPlugin,
  labels?: unknown,
) {
  return createPluginMentionItem(plugin as never, labels as never);
}
export function getNativeAppDisplayName(app: NativeDesktopApp): string {
  return isChromeNativeApp(app)
    ? CHROME_NATIVE_APP_DISPLAY_NAME
    : app.displayName;
}
export function getNativeAppPluginIcon(
  plugin: NativeAppPlugin,
  labels?: unknown,
) {
  const mentionItem = createNativeAppPluginMentionItem(plugin, labels);
  return getSkillIcon(null, {
    size: "small",
    smallOnly: true,
    iconSmall: getPluginMentionIcon(plugin as never),
    basePath: mentionItem.path,
    fallbackName: mentionItem.name,
    fallbackDescription: mentionItem.description,
    fallbackIcon: McpIcon,
  });
}
export function createComputerUseNativeAppMentionItem({
  app,
  description,
  computerPlugin,
  iconSmall,
}: ComputerUseNativeAppMentionOptions) {
  const displayName = getNativeAppDisplayName(app);
  return {
    kind: "plugin",
    name: displayName,
    displayName,
    path: createPluginMentionHref(computerPlugin.plugin.id),
    description: description ?? computerPlugin.description ?? "",
    iconSmall: iconSmall ?? computerPlugin.logoPath ?? "",
  };
}
export function findNativeAppPluginByLabel({
  label,
  path,
  plugins,
}: FindNativeAppPluginOptions): NativeAppPlugin | undefined {
  const normalizedLabel = label.trim().toLowerCase();
  if (path != null && path.length > 0) {
    const pathMatch = plugins.find(
      (item) => createPluginMentionHref(item.plugin.id) === path,
    );
    if (pathMatch != null) return pathMatch;
  }
  return plugins.find(
    (item) =>
      item.plugin.id.toLowerCase() === normalizedLabel ||
      item.plugin.name.toLowerCase() === normalizedLabel ||
      item.displayName?.toLowerCase() === normalizedLabel,
  );
}
export function findComputerUsePlugin(
  plugins: NativeAppPlugin[],
): NativeAppPlugin | null {
  return plugins.find((item) => item.plugin.name === "computer-use") ?? null;
}
export function getNativeAppDescription(
  plugin: NativeAppPlugin,
): string | null {
  return plugin.description ?? (plugin.marketplaceName || null);
}
export function findEnabledComputerUsePlugin(
  plugins: NativeAppPlugin[],
): NativeAppPlugin | null {
  return (
    plugins.find(
      (item) =>
        item.plugin.name === "computer-use" &&
        item.plugin.installed &&
        item.plugin.enabled,
    ) ?? null
  );
}
export function useNativeAppsElectron({
  enabled,
}: UseNativeAppsElectronOptions) {
  const { platform, isLoading } = usePlatform();
  const shouldFetch =
    enabled && (platform === "macOS" || platform === "windows");
  const query = useVscodeQuery("native-desktop-apps", {
    params: {
      order: "usage",
    },
    queryConfig: {
      enabled: shouldFetch,
      staleTime: vscodeApiU.FIVE_MINUTES,
      refetchOnWindowFocus: false,
    },
  }) as {
    data?: NativeDesktopAppsQueryResult;
    isLoading: boolean;
  };
  const nativeApps = shouldFetch ? (query.data?.apps ?? []) : [];
  return {
    nativeApps,
    isLoading: isLoading || (shouldFetch && query.isLoading),
  };
}
export function resolveComputerUseMentionedNativeApp({
  mentionPath,
  mentionDisplayName,
  nativeApps,
  computerPlugin,
}: {
  mentionPath: string;
  mentionDisplayName: string;
  nativeApps: NativeDesktopApp[];
  computerPlugin: NativeAppPlugin | null | undefined;
}): NativeAppMentionResolution {
  return isMentionPathForComputerPlugin(mentionPath, computerPlugin)
    ? {
        isComputerUse: true,
        nativeApp: findNativeAppByDisplayName(nativeApps, mentionDisplayName),
      }
    : {
        isComputerUse: false,
        nativeApp: null,
      };
}
function findNativeAppByDisplayName(
  nativeApps: NativeDesktopApp[],
  displayName: string,
): NativeDesktopApp | null {
  return displayName.length === 0
    ? null
    : (nativeApps.find(
        (item) =>
          item.displayName === displayName ||
          getNativeAppDisplayName(item) === displayName,
      ) ?? null);
}
function isMentionPathForComputerPlugin(
  mentionPath: string,
  computerPlugin: NativeAppPlugin | null | undefined,
): boolean {
  return computerPlugin == null
    ? false
    : mentionPath === createPluginMentionHref(computerPlugin.plugin.id);
}
