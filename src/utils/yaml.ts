// Restored from ref/webview/assets/yaml-COuIrSCu.js
// Shiki YAML grammar wrapper; the grammar payload stays in @shikijs/langs/yaml.
import { n as yamlGrammar, t as initYamlGrammar } from "@shikijs/langs/yaml";

export const yamlLanguageGrammars = yamlGrammar;

export function initYamlGrammarChunk(): void {
  initYamlGrammar();
}

initYamlGrammarChunk();
export { yamlLanguageGrammars as default };
