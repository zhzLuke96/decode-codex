// Restored from ref/webview/assets/use-platform-D3fl3oDu.js
import { resolveCodexPlatform, type CodexPlatform } from "../runtime/platform";
import { useOsInfo } from "../utils/use-os-info";

export type PlatformModifierSymbol = "⌘" | "^";

export type UsePlatformResult = {
  platform: CodexPlatform;
  modifierSymbol: PlatformModifierSymbol;
  isLoading: boolean | undefined;
};

function getPlatformModifierSymbol(
  platform: CodexPlatform,
): PlatformModifierSymbol {
  return platform === "macOS" ? "⌘" : "^";
}

function initUsePlatformRuntime(): void {}

function usePlatform(): UsePlatformResult {
  const { data, isLoading } = useOsInfo();
  const platform = resolveCodexPlatform(data?.platform);
  return {
    platform,
    modifierSymbol: getPlatformModifierSymbol(platform),
    isLoading,
  };
}
export { initUsePlatformRuntime, usePlatform };
