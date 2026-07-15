// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Data-only tool definitions used when assembling the `codex_app` namespace.
import {
  navigateToCodexPageTool,
  NAVIGATE_TO_CODEX_PAGE_TOOL_NAME,
} from "../runtime/navigate-to-codex-page-tool";
import {
  openInCodexTool,
  OPEN_IN_CODEX_TOOL_NAME,
} from "../runtime/open-in-codex-tool";
import {
  READ_SETTINGS_TOOL_NAME,
  WRITE_SETTINGS_TOOL_NAME,
} from "../settings/settings-tool-definitions";
import { modelListFilter } from "../utils/model-list-filter";

type JsonSchemaObject = {
  additionalProperties?: boolean;
  properties: Record<string, unknown>;
  required?: string[];
  type: "object";
};

type ToolDefinition = {
  description: string;
  inputSchema: JsonSchemaObject;
  name: string;
};

export const threadToolsFeatureKey = "thread_tools";
export const showExperimentalFileToolFeatureKey = "experimental_file_tool";
export const speakToUserFeatureKey = "speak_to_user";
export const loadWorkspaceDependenciesToolName = "load_workspace_dependencies";

export function initCodexAppToolDefinitionsRuntimeChunk(): void {}

const emptyInputSchema: JsonSchemaObject = {
  type: "object",
  properties: {},
  additionalProperties: false,
};

export const buildOpenInCodexTool = openInCodexTool;
export const buildNavigateToCodexPageTool = navigateToCodexPageTool;

export const alwaysAvailableCodexTool: ToolDefinition = {
  name: "sleep",
  description:
    "Pause briefly before continuing. Use this only when waiting is required for the user's request, such as allowing background work or UI state to settle.",
  inputSchema: {
    type: "object",
    properties: {
      durationMs: {
        type: "number",
        description: "Milliseconds to wait before continuing.",
      },
    },
    additionalProperties: false,
  },
};

export const experimentalFileToolDefinition: ToolDefinition = {
  name: loadWorkspaceDependenciesToolName,
  description:
    "Locate the configured bundled workspace dependency runtime paths for this local desktop thread, including Node.js, Python, and useful libraries for working with spreadsheets, slide decks, Word documents, and PDFs. This is read-only and takes no arguments.",
  inputSchema: emptyInputSchema,
};

export const experimentalToolPair: ToolDefinition[] = [
  {
    name: READ_SETTINGS_TOOL_NAME,
    description:
      "Read Codex settings, effective values after defaults, and the machine-readable setting definitions that Codex is allowed to inspect. Use this to learn how the app can be configured before suggesting or changing settings.",
    inputSchema: emptyInputSchema,
  },
  {
    name: WRITE_SETTINGS_TOOL_NAME,
    description:
      "Update one or more Codex settings by writing a partial JSON settings object. Only ordinary settings marked writable for Codex can be changed.",
    inputSchema: {
      type: "object",
      properties: {
        settings: {
          type: "object",
          description: "Partial JSON settings object to update.",
          additionalProperties: true,
        },
      },
      required: ["settings"],
      additionalProperties: false,
    },
  },
];

export function settingsToolNamespaceEntries(): ToolDefinition {
  return experimentalToolPair[0];
}

export const speakToUserToolDefinitions: ToolDefinition[] = [
  {
    name: "request_user_input",
    description:
      "Ask the user a concise question when progress requires information that cannot be safely inferred.",
    inputSchema: {
      type: "object",
      properties: {
        questions: {
          type: "array",
          description: "One to three short questions to show the user.",
        },
      },
      required: ["questions"],
      additionalProperties: false,
    },
  },
];

export const speakToUserToolDefinition: ToolDefinition = {
  name: "speak_to_user",
  description:
    "Send a short user-facing update without ending the turn. Use sparingly for important progress or blockers.",
  inputSchema: {
    type: "object",
    properties: {
      message: {
        type: "string",
        description: "The short message to show the user.",
      },
    },
    required: ["message"],
    additionalProperties: false,
  },
};

export const nonDeferredCodexToolNames = new Set<string>([
  alwaysAvailableCodexTool.name,
  experimentalFileToolDefinition.name,
  NAVIGATE_TO_CODEX_PAGE_TOOL_NAME,
  OPEN_IN_CODEX_TOOL_NAME,
  READ_SETTINGS_TOOL_NAME,
  WRITE_SETTINGS_TOOL_NAME,
  speakToUserToolDefinition.name,
]);

export function filterAvailableModels(options: {
  authMethod: string;
  availableModels: Set<string> | readonly string[];
  defaultModel: string | { model?: string } | null | undefined;
  enabledReasoningEfforts?: unknown;
  includeUltraReasoningEffort?: boolean;
  models: Array<{
    model: string;
    hidden?: boolean;
    isDefault?: boolean;
    supportedReasoningEfforts: Array<{
      description: string;
      reasoningEffort: string;
    }>;
  }>;
  useHiddenModels: boolean;
}): ReturnType<typeof modelListFilter> {
  const defaultModel =
    typeof options.defaultModel === "string"
      ? options.defaultModel
      : (options.defaultModel?.model ?? "");
  return modelListFilter({
    authMethod: options.authMethod,
    availableModels:
      options.availableModels instanceof Set
        ? options.availableModels
        : new Set(options.availableModels),
    defaultModel,
    enabledReasoningEfforts:
      options.enabledReasoningEfforts instanceof Set ||
      Array.isArray(options.enabledReasoningEfforts)
        ? options.enabledReasoningEfforts
        : null,
    includeUltraReasoningEffort: options.includeUltraReasoningEffort,
    models: options.models,
    useHiddenModels: options.useHiddenModels,
  });
}

export function readFeatureGateById(
  featureOverrides: Record<string, boolean> | null | undefined,
  featureKey: string,
): boolean {
  return featureOverrides?.[featureKey] === true;
}
