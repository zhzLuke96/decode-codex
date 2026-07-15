// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Helpers for Codex-to-Codex delegated prompts and thread id normalization.
import { normalizeConversationId } from "../boundaries/src-l0hb-mz-p";

export interface CodexDelegation {
  sourceThreadId: string;
  input: string;
}

export interface BuildDelegationInputOptions {
  sourceThreadId: string;
  input: string;
}

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function unescapeXml(value: string): string {
  return value
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&");
}

function readXmlTag(source: string, tagName: string): string | null {
  const value =
    RegExp(`<${tagName}>\\s*([\\s\\S]*?)\\s*<\\/${tagName}>`, "i")
      .exec(source)?.[1]
      ?.trim() ?? null;
  return value == null ? null : unescapeXml(value);
}

export function buildDelegationText({
  sourceThreadId,
  input,
}: BuildDelegationInputOptions): string {
  return [
    "<codex_delegation>",
    `  <source_thread_id>${escapeXml(sourceThreadId)}</source_thread_id>`,
    `  <input>${escapeXml(input)}</input>`,
    "</codex_delegation>",
  ].join("\n");
}

export function buildDelegationInput(options: BuildDelegationInputOptions): [
  {
    type: "text";
    text: string;
    text_elements: [];
  },
] {
  return [
    {
      type: "text",
      text: buildDelegationText(options),
      text_elements: [],
    },
  ];
}

export function parseCodexDelegation(value: unknown): CodexDelegation | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (
    !trimmed.startsWith("<codex_delegation>") ||
    !trimmed.endsWith("</codex_delegation>")
  ) {
    return null;
  }
  const sourceThreadId = readXmlTag(trimmed, "source_thread_id");
  const input = readXmlTag(trimmed, "input");
  return sourceThreadId == null || input == null
    ? null
    : { sourceThreadId, input };
}

export function parseConversationId(value: unknown): string {
  return normalizeConversationId(value);
}
