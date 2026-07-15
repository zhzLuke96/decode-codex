// Restored from ref/webview/assets/github-details-BuERSkr8.js
// github-details-BuERSkr8 chunk restored from the Codex webview bundle.
const DETAILS_BLOCK_RE = /<details(\s+open)?>([\s\S]*?)<\/details>/gi;
const FENCED_CODE_BLOCK_RE = /(^|\n)(`{3,}|~{3,})[^\n]*\n[\s\S]*?\n\2(?=\n|$)/g;
const GITHUB_ADMONITION_RE =
  /(^|\n)(>[ \t]*)\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]([ \t]*(?=\n|$))/gi;
const HTML_COMMENT_RE = /<!--[\s\S]*?-->/g;
const SUMMARY_RE = /^\s*<summary>([\s\S]*?)<\/summary>\s*([\s\S]*)$/i;
const HTML_TAG_RE = /<[^>]+>/g;
const CODE_BLOCK_PLACEHOLDER_PREFIX = "@@CODEX_FENCED_CODE_BLOCK_";

export function githubDetails(markdown: string): string {
  const codeBlocks: string[] = [];
  const protectedMarkdown = markdown.replace(FENCED_CODE_BLOCK_RE, (block) => {
    const placeholder = `${CODE_BLOCK_PLACEHOLDER_PREFIX}${codeBlocks.length}@@`;
    codeBlocks.push(block);
    return placeholder;
  });

  return restoreCodeBlocks(rewriteGithubDetails(protectedMarkdown), codeBlocks);
}

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function stripTags(value: string): string {
  return normalizeWhitespace(value.replace(HTML_TAG_RE, " "));
}

function rewriteGithubDetails(markdown: string): string {
  return markdown
    .replace(HTML_COMMENT_RE, "")
    .replace(
      GITHUB_ADMONITION_RE,
      (_match: string, linePrefix: string, quotePrefix: string, kind: string) =>
        `${linePrefix}${quotePrefix}**${titleCase(kind)}**`,
    )
    .replace(DETAILS_BLOCK_RE, (match, openAttribute, body) => {
      const summaryMatch = body.match(SUMMARY_RE);
      if (summaryMatch == null) return match;

      const summary = stripTags(summaryMatch[1] ?? "");
      if (summary.length === 0) return match;

      const content = (summaryMatch[2] ?? "").trim();
      const attributes = [`summary=${JSON.stringify(summary)}`];
      if (openAttribute != null) attributes.push('open="true"');
      return `:::github-details{${attributes.join(" ")}}\n${content}\n:::`;
    })
    .replace(/\n{3,}/g, "\n\n");
}

function titleCase(value: string): string {
  const lower = value.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

function restoreCodeBlocks(markdown: string, codeBlocks: string[]): string {
  return markdown.replace(
    /@@CODEX_FENCED_CODE_BLOCK_(\d+)@@/g,
    (placeholder, index) => codeBlocks[Number(index)] ?? placeholder,
  );
}
