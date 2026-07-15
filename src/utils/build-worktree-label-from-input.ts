// Restored from ref/webview/assets/build-worktree-label-from-input-CHMnzmbR.js
const defaultWorktreeLabel = "Codex Task";
const maxWorktreeLabelLength = 80;
const requestMarker = "## My request for Codex:";
export type WorktreeLabelInputItem = {
  type: string;
  text?: string;
};
export function buildWorktreeLabelFromInput(
  input: readonly WorktreeLabelInputItem[],
): string {
  const textItem = input.find(
    (
      item,
    ): item is WorktreeLabelInputItem & {
      text: string;
    } => item.type === "text" && typeof item.text === "string",
  );
  if (!textItem) {
    return defaultWorktreeLabel;
  }
  const normalizedLabel = extractRequestText(textItem.text)
    .trim()
    .replace(/\s+/g, " ")
    .trim();
  if (normalizedLabel.length === 0) {
    return defaultWorktreeLabel;
  }
  return normalizedLabel.length <= maxWorktreeLabelLength
    ? normalizedLabel
    : `${normalizedLabel.slice(0, maxWorktreeLabelLength - 1).trimEnd()}\u2026`;
}
function extractRequestText(text: string): string {
  const parts = text.split(requestMarker);
  return parts.length <= 1 ? text : parts[parts.length - 1].trim();
}

export function initBuildWorktreeLabelFromInputChunk(): void {}
