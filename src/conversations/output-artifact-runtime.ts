// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Path, markdown-resource, and output-artifact helpers for conversation summaries.
import { initConversationPromptContextRuntime } from "../runtime/conversation-prompt-context-runtime";
import { initArtifactPreviewRuntime } from "../runtime/artifact-preview-runtime";

import { normalizeWorkspacePath as normalizeWorkspacePathValue } from "../boundaries/src-l0hb-mz-p";
import { isFileReferencePathValue } from "./output-artifact-runtime-parts/file-reference-path";
import {
  isProjectlessResourcePathInsideOutput,
  normalizeArtifactPathKeyValue,
  resolveWorkspacePathFromCwdValue,
} from "./output-artifact-runtime-parts/resource-path-helpers";
import {
  isFileUrlLikeTargetValue,
  mapTurnStatusToOutputStatusValue,
  normalizeHrefValue,
} from "./output-artifact-runtime-parts/target-url-helpers";
import { collectTurnFileArtifactsFromTurn } from "./output-artifact-runtime-parts/turn-file-artifacts";

export type ProjectlessResourcePathOptions = {
  cwd: string | null;
  projectlessOutputDirectory: string | null;
  resourcePath: string;
};

export function initOutputArtifactRuntime(): void {
  initConversationPromptContextRuntime();
  initArtifactPreviewRuntime();
}

export function resolveWorkspacePathFromCwd(cwd: string, path: string): string {
  return resolveWorkspacePathFromCwdValue(cwd, path);
}

export function normalizeWorkspacePath(path: string): string {
  return normalizeWorkspacePathValue(path);
}

export function collectTurnFileArtifacts<TArtifacts = unknown>(
  turn: unknown,
): TArtifacts {
  return collectTurnFileArtifactsFromTurn<TArtifacts>(turn);
}

export function normalizeArtifactPathKey(path: string): string {
  return normalizeArtifactPathKeyValue(path);
}

export function isFileUrlLikeTarget(target: string): boolean {
  return isFileUrlLikeTargetValue(target);
}

export function isFileReferencePath(path: string): boolean {
  return isFileReferencePathValue(path);
}

export function isResourcePathInsideProjectlessOutput(
  options: ProjectlessResourcePathOptions,
): boolean {
  return isProjectlessResourcePathInsideOutput(options);
}

export function mapTurnStatusToOutputStatus(status: string): string {
  return mapTurnStatusToOutputStatusValue(status);
}

export function normalizeHref(href: string): string {
  return normalizeHrefValue(href);
}
