// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1-mhRp2VYQ.js
// GitHub avatar URL helper shared by pull request reviewer and comment rows.

export function getGithubAvatarUrl(
  login: string | null | undefined,
  size: number,
): string | null {
  const trimmedLogin = login?.trim();
  return trimmedLogin == null ||
    trimmedLogin.length === 0 ||
    /\s/.test(trimmedLogin)
    ? null
    : `https://github.com/${encodeURIComponent(trimmedLogin)}.png?size=${size}`;
}
