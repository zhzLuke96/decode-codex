// Restored from ref/webview/assets/plugin-prefill-prompt-Ba9YzNzQ.js
// plugin-prefill-prompt-Ba9YzNzQ chunk restored from the Codex webview bundle.
import { createPluginMentionHref } from "../composer/mention-item";
import { parseDirectivesL } from "../utils/parse-directives";
export type PluginPrefillPromptOptions = {
  defaultPrompt?: string | null;
  pluginDisplayName: string;
  pluginId: string;
};
export function getFirstNonEmptyPluginPrompt(
  prompts: readonly (string | null | undefined)[] | null | undefined,
): string | null {
  return prompts?.map((prompt) => prompt?.trim() ?? "").find(Boolean) ?? null;
}
export function createPluginPrefillPrompt({
  defaultPrompt,
  pluginDisplayName,
  pluginId,
}: PluginPrefillPromptOptions): string {
  const mentionHref = parseDirectivesL(createPluginMentionHref(pluginId));
  const trimmedDefaultPrompt = defaultPrompt?.trim() ?? "";
  return `[@${pluginDisplayName}](${mentionHref}) ${trimmedDefaultPrompt}`;
}
