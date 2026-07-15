// Restored from ref/webview/assets/chatgpt-token-auth.browser-fpdQoL-R.js
// chatgpt-token-auth.browser-fpdQoL-R chunk restored from the Codex webview bundle.
const CHATGPT_HOSTS = ["chatgpt.com", "chatgpt-staging.com"] as const;
export function redirectToChatGptLoginIfNeeded() {
  if (!isChatGptHost()) return false;
  window.location.assign(buildChatGptLoginUrl());
  return true;
}
function buildChatGptLoginUrl() {
  const loginUrl = new URL("/auth/login", window.location.origin);
  loginUrl.searchParams.set(
    "next",
    `${window.location.pathname}${window.location.search}${window.location.hash}`,
  );
  return loginUrl.toString();
}
function isChatGptHost() {
  const hostname = window.location.hostname.toLowerCase();
  return CHATGPT_HOSTS.some(
    (host) => hostname === host || hostname.endsWith(`.${host}`),
  );
}
