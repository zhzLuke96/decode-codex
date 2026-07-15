// Restored from ref/webview/assets/check-git-index-for-changes-adW1BmYE.js
// check-git-index-for-changes-adW1BmYE chunk restored from the Codex webview bundle.
const CHECK_GIT_INDEX_FOR_CHANGES_EVENT = "codex-check-git-index-for-changes";

export function initCheckGitIndexForChangesChunk(): void {
  void CHECK_GIT_INDEX_FOR_CHANGES_EVENT;
}

export function requestGitIndexChangeCheck(): void {
  window.dispatchEvent(new CustomEvent(CHECK_GIT_INDEX_FOR_CHANGES_EVENT));
}

export function onGitIndexChangeCheckRequested(
  callback: () => void,
): () => void {
  const listener = () => {
    callback();
  };
  window.addEventListener(CHECK_GIT_INDEX_FOR_CHANGES_EVENT, listener);
  return () => {
    window.removeEventListener(CHECK_GIT_INDEX_FOR_CHANGES_EVENT, listener);
  };
}
