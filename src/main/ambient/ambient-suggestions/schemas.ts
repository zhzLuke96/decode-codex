// Restored from ref/.vite/build/src-CoIhwwHr.js
// Small runtime validators replacing bundled Zod for ambient suggestion JSON.

import type {
  AmbientSuggestionCandidateResponse,
  AmbientSuggestionSafetyResponse,
  RuntimeSchema,
} from "./types";

export const ambientSuggestionCandidateJsonSchema = {
  type: "object",
  properties: {
    suggestions: {
      type: "array",
      maxItems: 3,
      items: {
        type: "object",
        properties: {
          title: { type: "string", minLength: 1 },
          description: { type: "string", minLength: 1 },
          prompt: { type: "string", minLength: 1 },
          appId: { type: "string" },
        },
        required: ["title", "description", "prompt", "appId"],
        additionalProperties: false,
      },
    },
  },
  required: ["suggestions"],
  additionalProperties: false,
} as const;

export const ambientSuggestionSafetyJsonSchema = {
  type: "object",
  properties: {
    exclude: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string", minLength: 1 },
          reason: { type: "string", minLength: 1 },
        },
        required: ["id", "reason"],
        additionalProperties: false,
      },
    },
  },
  required: ["exclude"],
  additionalProperties: false,
} as const;

export const ambientSuggestionCandidateResponseSchema: RuntimeSchema<AmbientSuggestionCandidateResponse> =
  {
    safeParse(input: unknown) {
      const record = parseRecord(input);
      if (
        !Array.isArray(record?.suggestions) ||
        record.suggestions.length > 3
      ) {
        return { success: false };
      }
      const suggestions = [];
      for (const item of record.suggestions) {
        const suggestion = parseRecord(item);
        if (
          typeof suggestion?.title !== "string" ||
          suggestion.title.length === 0 ||
          typeof suggestion.description !== "string" ||
          suggestion.description.length === 0 ||
          typeof suggestion.prompt !== "string" ||
          suggestion.prompt.length === 0 ||
          typeof suggestion.appId !== "string"
        ) {
          return { success: false };
        }
        suggestions.push({
          title: suggestion.title,
          description: suggestion.description,
          prompt: suggestion.prompt,
          appId: suggestion.appId,
        });
      }
      return { success: true, data: { suggestions } };
    },
  };

export const ambientSuggestionSafetyResponseSchema: RuntimeSchema<AmbientSuggestionSafetyResponse> =
  {
    safeParse(input: unknown) {
      const record = parseRecord(input);
      if (!Array.isArray(record?.exclude)) return { success: false };
      const exclude = [];
      for (const item of record.exclude) {
        const exclusion = parseRecord(item);
        if (
          typeof exclusion?.id !== "string" ||
          exclusion.id.length === 0 ||
          typeof exclusion.reason !== "string" ||
          exclusion.reason.length === 0
        ) {
          return { success: false };
        }
        exclude.push({ id: exclusion.id, reason: exclusion.reason });
      }
      return { success: true, data: { exclude } };
    },
  };

function parseRecord(value: unknown): Record<string, unknown> | null {
  return typeof value === "object" && value != null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}
