// Restored from ref/webview/assets/hooks-settings-navigation-BjQMYS8c.js; synced with ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~plugin-detail-page~new-~sfopfmmp-B_kSkG_X.js.
// Selects a hook host and navigates to its settings section.

type HooksSettingsNavigationOptions = {
  hostId: string;
  navigate: (path: string) => void;
  section: string;
  setSelectedHostId: (hostId: string) => void;
};

export function initHooksSettingsNavigationChunk(): void {}

export function hooksSettingsNavigation({
  hostId,
  navigate,
  section,
  setSelectedHostId,
}: HooksSettingsNavigationOptions): void {
  setSelectedHostId(hostId);
  navigate(`/settings/${section}`);
}
