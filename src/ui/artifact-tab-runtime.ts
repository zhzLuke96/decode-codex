// Restored from ref/webview/assets/artifact-tab-content.electron-CggSRQ3S.js
// Artifact tab route scope and fallback conversation state.
import {
  createAppScopedSignal,
  initAppScopeSignalRuntime,
} from "../runtime/app-scope-runtime";

type ArtifactEntrypointKey = {
  entrypoint: string;
};

const fallbackArtifactConversationIds = new Map<string, string>();

export const artifactRouteScope = createAppScopedSignal(false);

export function getFallbackArtifactConversationId({
  entrypoint,
}: ArtifactEntrypointKey): string {
  const existingId = fallbackArtifactConversationIds.get(entrypoint);
  if (existingId != null) return existingId;

  const fallbackId = `artifact:${entrypoint}`;
  fallbackArtifactConversationIds.set(entrypoint, fallbackId);
  return fallbackId;
}

export function initArtifactRouteScopeRuntime(): void {
  initAppScopeSignalRuntime();
}

export function initArtifactPanelRuntime(): void {
  initArtifactRouteScopeRuntime();
}
