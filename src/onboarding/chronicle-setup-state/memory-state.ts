// Restored from ref/webview/assets/chronicle-setup-state-BH1UQGSM.js
// chronicle-setup-state-BH1UQGSM chunk restored from the Codex webview bundle.
import type {
  CodexMemoryStateSnapshot,
  CodexMemoryStateSnapshotInput,
} from "./types";
export function buildCodexMemoryStateSnapshot({
  isMemoryFeatureEnabled,
  memoryConfig,
}: CodexMemoryStateSnapshotInput): CodexMemoryStateSnapshot {
  const generateMemoriesEnabled = memoryConfig.generateMemories;
  const useMemoriesEnabled = memoryConfig.useMemories;
  return {
    memoryFeatureEnabled: isMemoryFeatureEnabled,
    generateMemoriesEnabled,
    useMemoriesEnabled,
    memoriesEnabled:
      isMemoryFeatureEnabled && generateMemoriesEnabled && useMemoriesEnabled,
  };
}
