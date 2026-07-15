// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Mutation filtering for content-search highlights.
import {
  activeContentSearchMatchClassName,
  contentSearchMatchClassName,
} from "./constants";

export function shouldRefreshSearchHighlightMutations(
  mutationRecords: readonly MutationRecord[],
): boolean {
  for (const mutationRecord of mutationRecords) {
    if (!isContentSearchHighlightMutation(mutationRecord)) {
      return true;
    }
  }
  return false;
}

function isContentSearchHighlightMutation(
  mutationRecord: MutationRecord,
): boolean {
  if (mutationRecord.type === "characterData") {
    const parentElement = mutationRecord.target.parentElement;
    return parentElement == null
      ? false
      : isContentSearchHighlightNode(parentElement);
  }
  if (mutationRecord.type !== "childList") {
    return false;
  }
  if (isContentSearchHighlightNode(mutationRecord.target)) {
    return true;
  }

  const changedNodes = [
    ...mutationRecord.addedNodes,
    ...mutationRecord.removedNodes,
  ];
  let sawHighlightNode = false;
  for (const changedNode of changedNodes) {
    if (changedNode instanceof Text) {
      continue;
    }
    if (isContentSearchHighlightNode(changedNode)) {
      sawHighlightNode = true;
      continue;
    }
    return false;
  }
  return sawHighlightNode;
}

function isContentSearchHighlightNode(node: Node): boolean {
  return node instanceof HTMLElement
    ? node.classList.contains(activeContentSearchMatchClassName) ||
        node.classList.contains(contentSearchMatchClassName)
    : false;
}
