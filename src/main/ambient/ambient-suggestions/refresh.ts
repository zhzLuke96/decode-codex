// Restored from ref/.vite/build/src-CoIhwwHr.js
// Ambient-suggestions refresh, safety screening, and generation status tracking.

import { randomUUID } from "node:crypto";
import {
  buildAmbientThreadConfigOverrides,
  createEmptyAmbientConnectedAppState,
  getAmbientConnectedAppState,
  getAmbientDisabledBundledPluginConfig,
} from "./connected-apps";
import { buildAmbientSuggestionsPrompt } from "./prompts";
import { buildAmbientSuggestionSafetyPrompt } from "./safety-prompt";
import {
  ambientSuggestionCandidateJsonSchema,
  ambientSuggestionCandidateResponseSchema,
  ambientSuggestionSafetyJsonSchema,
  ambientSuggestionSafetyResponseSchema,
} from "./schemas";
import {
  readAmbientSuggestionsFile,
  writeAmbientSuggestionsFile,
} from "./storage";
import { generateStructuredResult } from "./structured-generation";
import type {
  AmbientAppServerConnection,
  AmbientConnectedAppState,
  AmbientDisabledPluginConfig,
  AmbientGenerationTokenUsage,
  AmbientStructuredLogger,
  AmbientSuggestion,
  AmbientSuggestionCandidate,
  AmbientSuggestionDomain,
  AmbientSuggestionGenerationStatus,
  AmbientSuggestionRefreshMode,
  AmbientSuggestionsFile,
  AmbientThreadSummary,
} from "./types";

const DEFAULT_AMBIENT_SUGGESTION_DOMAIN: AmbientSuggestionDomain = null;
const AMBIENT_SUGGESTION_MODEL = "gpt-5.4";
const AMBIENT_SUGGESTION_REASONING_EFFORT = "medium";
const AMBIENT_SUGGESTION_FIRST_CONNECT_MODEL = "gpt-5.4-mini";
const AMBIENT_SUGGESTION_FIRST_CONNECT_REASONING_EFFORT = "low";
const AMBIENT_SUGGESTION_TIMEOUT_MS = 10 * 60_000;
const AMBIENT_SUGGESTION_SAFETY_MODEL = "gpt-5.4-mini";
const AMBIENT_SUGGESTION_SAFETY_REASONING_EFFORT = "low";
const AMBIENT_SUGGESTION_SAFETY_TIMEOUT_MS = 20_000;
const MAX_RECENT_THREADS = 8;
const MAX_DISMISSED_SUGGESTIONS_IN_PROMPT = 3;
const AMBIENT_SUGGESTION_SAFETY_INSTRUCTIONS =
  "Classify Codex ambient suggestion candidates for policy safety. Return only JSON matching the schema.";
const AMBIENT_SUGGESTION_SAFETY_CONFIG = {
  include_permissions_instructions: false,
  include_apps_instructions: false,
  include_environment_context: false,
  project_doc_max_bytes: 0,
  apps: {
    _default: {
      enabled: false,
      destructive_enabled: false,
      open_world_enabled: false,
    },
  },
  skills: { bundled: { enabled: false }, config: [] },
  memories: { use_memories: false, generate_memories: false },
  "features.apps": false,
  "features.plugins": false,
  "features.tool_suggest": false,
  "features.shell_tool": false,
  "features.unified_exec": false,
  "features.shell_snapshot": false,
  "features.apply_patch_freeform": false,
  "features.js_repl": false,
  "features.js_repl_tools_only": false,
  "features.code_mode": false,
  "features.code_mode_only": false,
  "features.multi_agent": false,
  "features.multi_agent_v2": false,
  "features.enable_fanout": false,
  "features.memories": false,
  "features.request_permissions_tool": false,
  "features.image_generation": false,
  "features.image_detail_original": false,
  "features.skill_mcp_dependency_install": false,
  "features.skill_env_var_dependency_prompt": false,
  "features.default_mode_request_user_input": false,
  web_search: "disabled",
};

const generationStatusByKey = new Map<
  string,
  AmbientSuggestionGenerationStatus
>();

export function getAmbientSuggestionGenerationStatuses(): AmbientSuggestionGenerationStatus[] {
  return Array.from(generationStatusByKey.values()).sort((left, right) => {
    const projectOrder = left.projectRoot.localeCompare(right.projectRoot);
    return projectOrder === 0
      ? (left.domain ?? "").localeCompare(right.domain ?? "")
      : projectOrder;
  });
}

export async function refreshAmbientSuggestions({
  appServerConnection,
  domain = DEFAULT_AMBIENT_SUGGESTION_DOMAIN,
  enabled,
  hostId,
  isProjectlessChat,
  logger,
  mode = "default",
  projectRoot,
  serviceTier,
  staleTimeMs,
}: {
  appServerConnection: AmbientAppServerConnection;
  domain?: AmbientSuggestionDomain;
  enabled: boolean;
  hostId: string;
  isProjectlessChat: boolean;
  logger?: AmbientStructuredLogger;
  mode?: AmbientSuggestionRefreshMode;
  projectRoot: string;
  serviceTier: string | null;
  staleTimeMs: number;
}): Promise<AmbientSuggestionsFile> {
  const currentFile = readAmbientSuggestionsFile(hostId, projectRoot, domain);
  if (
    !enabled ||
    (mode === "default" &&
      currentFile.generatedAtMs != null &&
      Date.now() - currentFile.generatedAtMs < staleTimeMs)
  ) {
    return currentFile;
  }

  const statusKey = getGenerationStatusKey(hostId, projectRoot, domain);
  const existingStatus = generationStatusByKey.get(statusKey);
  if (
    (existingStatus?.runningCount ?? 0) > 0 ||
    (existingStatus?.safetyRunningCount ?? 0) > 0
  ) {
    return currentFile;
  }

  setGenerationStatus(statusKey, {
    domain,
    projectRoot,
    runningCount: 1,
    runningStartedAtMs: Date.now(),
    safetyRunningCount: 0,
    safetyStartedAtMs: null,
    lastFinishedAtMs: existingStatus?.lastFinishedAtMs ?? null,
  });

  let connectedAppState: AmbientConnectedAppState | null = null;
  let generatedFile = currentFile;
  let candidateResponse: { suggestions: AmbientSuggestionCandidate[] } | null =
    null;

  try {
    if (isProjectlessChat) {
      connectedAppState = await getAmbientConnectedAppState(
        appServerConnection,
        projectRoot,
      ).catch(() => createEmptyAmbientConnectedAppState());
      if (
        connectedAppState.listAppsSucceeded &&
        connectedAppState.connectedApps.length === 0
      ) {
        return currentFile;
      }
    }

    const connectedAppsPromise =
      connectedAppState == null
        ? getAmbientConnectedAppState(appServerConnection, projectRoot).catch(
            () => createEmptyAmbientConnectedAppState(),
          )
        : Promise.resolve(connectedAppState);
    const disabledPluginConfigPromise = getAmbientDisabledBundledPluginConfig(
      appServerConnection,
      projectRoot,
    ).catch(() => null);
    const [recentThreads, resolvedConnectedAppState, disabledPluginConfig] =
      await Promise.all([
        listRecentAmbientThreads({
          client: appServerConnection,
          isProjectlessChat,
          projectRoot,
        }),
        connectedAppsPromise,
        disabledPluginConfigPromise,
      ]);
    connectedAppState = resolvedConnectedAppState;

    generatedFile = {
      ...readAmbientSuggestionsFile(hostId, projectRoot, domain),
      generatedAtMs: Date.now(),
    };
    writeAmbientSuggestionsFile(hostId, projectRoot, domain, generatedFile);
    candidateResponse = await generateAmbientSuggestionCandidates({
      appServerConnection,
      connectedAppState,
      disabledPluginConfig,
      domain,
      isProjectlessChat,
      previousSuggestions: currentFile.suggestions,
      projectRoot,
      recentThreads,
      serviceTier,
      mode,
      logger,
    });
  } finally {
    setGenerationStatus(statusKey, {
      domain,
      projectRoot,
      runningCount: 0,
      runningStartedAtMs: null,
      safetyRunningCount: 0,
      safetyStartedAtMs: null,
      lastFinishedAtMs: Date.now(),
    });
  }

  if (candidateResponse == null) return generatedFile;

  const lastStatus = generationStatusByKey.get(statusKey);
  setGenerationStatus(statusKey, {
    domain,
    projectRoot,
    runningCount: 0,
    runningStartedAtMs: null,
    safetyRunningCount: 1,
    safetyStartedAtMs: Date.now(),
    lastFinishedAtMs: lastStatus?.lastFinishedAtMs ?? null,
  });

  let safeCandidates: AmbientSuggestionCandidate[];
  try {
    safeCandidates = await filterAmbientSuggestionCandidatesForSafety({
      appServerConnection,
      candidates: candidateResponse.suggestions,
      logger,
      serviceTier,
    });
  } finally {
    setGenerationStatus(statusKey, {
      domain,
      projectRoot,
      runningCount: 0,
      runningStartedAtMs: null,
      safetyRunningCount: 0,
      safetyStartedAtMs: null,
      lastFinishedAtMs: Date.now(),
    });
  }

  if (candidateResponse.suggestions.length > 0 && safeCandidates.length === 0) {
    return readAmbientSuggestionsFile(hostId, projectRoot, domain);
  }

  const now = Date.now();
  const latestFile = readAmbientSuggestionsFile(hostId, projectRoot, domain);
  const completedSuggestionKeys = new Set(
    latestFile.suggestions
      .filter((suggestion) => suggestion.status !== "pending")
      .map((suggestion) =>
        getSuggestionDedupeKey(suggestion.appIds, suggestion.prompt),
      ),
  );
  const newSuggestions = safeCandidates.flatMap((candidate) => {
    const appId = candidate.appId.trim();
    const appIds =
      appId.length > 0 &&
      connectedAppState?.disableAllApps !== true &&
      !connectedAppState?.disabledAmbientAppIds.has(appId)
        ? [appId]
        : [];
    return completedSuggestionKeys.has(
      getSuggestionDedupeKey(appIds, candidate.prompt),
    )
      ? []
      : [
          {
            id: randomUUID(),
            title: candidate.title,
            description: candidate.description,
            prompt: candidate.prompt,
            appIds,
            status: "pending" as const,
            createdAtMs: now,
            updatedAtMs: now,
          },
        ];
  });
  const nextFile: AmbientSuggestionsFile = {
    ...latestFile,
    projectRoot,
    generatedAtMs: now,
    currentSuggestionIds: newSuggestions.map((suggestion) => suggestion.id),
    suggestions: [...latestFile.suggestions, ...newSuggestions],
  };
  writeAmbientSuggestionsFile(hostId, projectRoot, domain, nextFile);
  return nextFile;
}

async function generateAmbientSuggestionCandidates({
  appServerConnection,
  connectedAppState,
  disabledPluginConfig,
  domain,
  isProjectlessChat,
  logger,
  mode,
  previousSuggestions,
  projectRoot,
  recentThreads,
  serviceTier,
}: {
  appServerConnection: AmbientAppServerConnection;
  connectedAppState: AmbientConnectedAppState;
  disabledPluginConfig: AmbientDisabledPluginConfig | null;
  domain: AmbientSuggestionDomain;
  isProjectlessChat: boolean;
  logger?: AmbientStructuredLogger;
  mode: AmbientSuggestionRefreshMode;
  previousSuggestions: AmbientSuggestion[];
  projectRoot: string;
  recentThreads: AmbientThreadSummary[];
  serviceTier: string | null;
}): Promise<{ suggestions: AmbientSuggestionCandidate[] } | null> {
  const model =
    mode === "first-plugin-connect"
      ? AMBIENT_SUGGESTION_FIRST_CONNECT_MODEL
      : AMBIENT_SUGGESTION_MODEL;
  const effort =
    mode === "first-plugin-connect"
      ? AMBIENT_SUGGESTION_FIRST_CONNECT_REASONING_EFFORT
      : AMBIENT_SUGGESTION_REASONING_EFFORT;
  let tokenUsage: AmbientGenerationTokenUsage | null = null;
  try {
    const result = await generateStructuredResult({
      client: appServerConnection,
      prompt: buildAmbientSuggestionsPrompt({
        connectedApps: connectedAppState.connectedApps,
        disabledConnectedApps: connectedAppState.disabledConnectedApps,
        domain,
        isProjectlessChat,
        previousSuggestionsJson: JSON.stringify(
          previousSuggestions
            .filter((suggestion) => suggestion.status === "dismissed")
            .slice(-MAX_DISMISSED_SUGGESTIONS_IN_PROMPT),
          null,
          2,
        ),
        projectRoot,
        recentThreadsJson: JSON.stringify(recentThreads, null, 2),
      }),
      cwd: isProjectlessChat ? null : projectRoot,
      model,
      effort,
      serviceTier,
      threadSource: "system",
      schema: ambientSuggestionCandidateJsonSchema,
      config: buildAmbientThreadConfigOverrides(
        connectedAppState,
        disabledPluginConfig,
      ),
      timeoutMs: AMBIENT_SUGGESTION_TIMEOUT_MS,
      responseSchema: ambientSuggestionCandidateResponseSchema,
      onTokenUsage: (usage) => {
        tokenUsage = usage;
      },
    });
    logAmbientGenerationTokenUsage({
      feature: "ambient_suggestions",
      logger,
      model,
      reasoningEffort: effort,
      serviceTier,
      status: result == null ? "empty" : "success",
      tokenUsage,
    });
    return result;
  } catch (error) {
    logAmbientGenerationTokenUsage({
      feature: "ambient_suggestions",
      logger,
      model,
      reasoningEffort: effort,
      serviceTier,
      status: "error",
      tokenUsage,
    });
    throw error;
  }
}

async function filterAmbientSuggestionCandidatesForSafety({
  appServerConnection,
  candidates,
  logger,
  serviceTier,
}: {
  appServerConnection: AmbientAppServerConnection;
  candidates: AmbientSuggestionCandidate[];
  logger?: AmbientStructuredLogger;
  serviceTier: string | null;
}): Promise<AmbientSuggestionCandidate[]> {
  if (candidates.length === 0) return candidates;
  let tokenUsage: AmbientGenerationTokenUsage | null = null;
  try {
    const result = await generateStructuredResult({
      client: appServerConnection,
      prompt: buildAmbientSuggestionSafetyPrompt({ candidates }),
      cwd: null,
      model: AMBIENT_SUGGESTION_SAFETY_MODEL,
      effort: AMBIENT_SUGGESTION_SAFETY_REASONING_EFFORT,
      serviceTier,
      threadSource: "system",
      baseInstructions: AMBIENT_SUGGESTION_SAFETY_INSTRUCTIONS,
      developerInstructions: "",
      schema: ambientSuggestionSafetyJsonSchema,
      config: AMBIENT_SUGGESTION_SAFETY_CONFIG,
      timeoutMs: AMBIENT_SUGGESTION_SAFETY_TIMEOUT_MS,
      responseSchema: ambientSuggestionSafetyResponseSchema,
      onTokenUsage: (usage) => {
        tokenUsage = usage;
      },
    });
    logAmbientGenerationTokenUsage({
      feature: "ambient_suggestion_safety",
      logger,
      model: AMBIENT_SUGGESTION_SAFETY_MODEL,
      reasoningEffort: AMBIENT_SUGGESTION_SAFETY_REASONING_EFFORT,
      serviceTier,
      status: result == null ? "empty" : "success",
      tokenUsage,
    });
    if (result == null) return [];
    const excludedIds = new Set(result.exclude.map((item) => item.id));
    return candidates.filter(
      (_candidate, index) => !excludedIds.has(`suggestion-${index + 1}`),
    );
  } catch (error) {
    logAmbientGenerationTokenUsage({
      feature: "ambient_suggestion_safety",
      logger,
      model: AMBIENT_SUGGESTION_SAFETY_MODEL,
      reasoningEffort: AMBIENT_SUGGESTION_SAFETY_REASONING_EFFORT,
      serviceTier,
      status: "error",
      tokenUsage,
    });
    throw error;
  }
}

async function listRecentAmbientThreads({
  client,
  isProjectlessChat,
  projectRoot,
}: {
  client: AmbientAppServerConnection;
  isProjectlessChat: boolean;
  projectRoot: string;
}): Promise<AmbientThreadSummary[]> {
  const response = await client.listThreads({
    limit: 100,
    cursor: null,
    sortKey: "updated_at",
    modelProviders: null,
    sourceKinds: [],
    archived: false,
  });
  return response.data
    .filter(
      (thread) =>
        !thread.ephemeral &&
        isThreadInAmbientProject({
          isProjectlessChat,
          projectRoot,
          threadCwd: thread.cwd,
        }),
    )
    .slice(0, MAX_RECENT_THREADS)
    .map((thread) => ({
      id: thread.id,
      title: thread.name?.trim() || normalizeThreadPreview(thread.preview),
      preview: normalizeThreadPreview(thread.preview),
      updatedAt: new Date(thread.updatedAt * 1000).toISOString(),
    }));
}

function isThreadInAmbientProject({
  isProjectlessChat,
  projectRoot,
  threadCwd,
}: {
  isProjectlessChat: boolean;
  projectRoot: string;
  threadCwd: string;
}): boolean {
  const normalizedProjectRoot = projectRoot.replaceAll("\\", "/");
  const normalizedThreadCwd = threadCwd.replaceAll("\\", "/");
  if (isProjectlessChat) return normalizedThreadCwd === normalizedProjectRoot;
  if (normalizedThreadCwd === normalizedProjectRoot) return true;
  const projectPrefix = normalizedProjectRoot.endsWith("/")
    ? normalizedProjectRoot
    : `${normalizedProjectRoot}/`;
  return normalizedThreadCwd.startsWith(projectPrefix);
}

function normalizeThreadPreview(preview: string): string {
  return preview.replace(/\s+/g, " ").trim();
}

function getGenerationStatusKey(
  hostId: string,
  projectRoot: string,
  domain: AmbientSuggestionDomain,
): string {
  return domain == null
    ? `${hostId}\0${projectRoot}`
    : `${hostId}\0${projectRoot}\0${domain}`;
}

function setGenerationStatus(
  key: string,
  status: AmbientSuggestionGenerationStatus,
): void {
  generationStatusByKey.set(key, status);
}

function getSuggestionDedupeKey(appIds: string[], prompt: string): string {
  return JSON.stringify([appIds.slice().sort(), prompt]);
}

function logAmbientGenerationTokenUsage({
  feature,
  logger,
  model,
  reasoningEffort,
  serviceTier,
  status,
  tokenUsage,
}: {
  feature: string;
  logger?: AmbientStructuredLogger;
  model: string;
  reasoningEffort: string;
  serviceTier: string | null;
  status: "empty" | "success" | "error";
  tokenUsage: AmbientGenerationTokenUsage | null;
}): void {
  if (tokenUsage == null) return;
  logger?.info("ephemeral_generation_token_usage", {
    safe: {
      event: "ephemeral_generation_token_usage",
      feature,
      model,
      reasoningEffort,
      serviceTier,
      status,
      inputTokens: tokenUsage.last.inputTokens,
      cachedInputTokens: tokenUsage.last.cachedInputTokens,
      outputTokens: tokenUsage.last.outputTokens,
      reasoningOutputTokens: tokenUsage.last.reasoningOutputTokens,
      totalTokens: tokenUsage.last.totalTokens,
    },
  });
}
