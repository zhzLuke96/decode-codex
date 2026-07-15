// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Time-bound "New" chip campaign config for the Skills & Apps nav link in the
// Electron sidebar.

export interface SidebarFeatureChipCampaign {
  enabled: boolean;
  campaignId: string;
  startsAtMs: number;
  endsAtMs: number;
  storageNamespace: string;
  chipLabel: {
    id: string;
    defaultMessage: string;
    description: string;
  };
  variant: string;
}

export const skillsAppsSidebarNewChipCampaign: SidebarFeatureChipCampaign = {
  enabled: false,
  campaignId: "skills-apps-sidebar-new-chip-2026-02",
  startsAtMs: Date.UTC(2026, 1, 24),
  endsAtMs: Date.UTC(2026, 2, 3),
  storageNamespace: "sidebar-feature-chip",
  chipLabel: {
    id: "sidebarElectron.skillsAppsRouteNavLink.newChip",
    defaultMessage: "New",
    description:
      "Time-bound chip shown next to the Skills & Apps nav link in the Electron sidebar",
  },
  variant: "new",
};
