// Restored from ref/webview/assets/browser-profile-import-query-BINiFkrA.js
import { vscodeApiH } from "../boundaries/vscode-api";
import { queryOptions } from "../utils/query-options";
type BrowserProfile = {
  hasCookies?: boolean;
  hasPasswords?: boolean;
  [key: string]: any;
};
type BrowserProfileImportApi = {
  importBrowserProfile(options: BrowserProfileImportOptions): Promise<unknown>;
  listImportableBrowserProfiles(): Promise<BrowserProfile[]>;
};
type BrowserProfileImportOptions = {
  importCookies?: boolean;
  importPasswords?: boolean;
  profilePath?: string;
  source?: string;
  [key: string]: any;
};
const BROWSER_PROFILE_IMPORT_STALE_TIME_MS = 30_000;
export function initBrowserProfileImportQueryConstantsChunk(): void {
  void BROWSER_PROFILE_IMPORT_STALE_TIME_MS;
}

export function filterImportableBrowserProfiles(profiles: BrowserProfile[]) {
  return profiles.filter(
    (profile) => profile.hasCookies || profile.hasPasswords,
  );
}
export async function importBrowserProfile(
  browserProfileImport: BrowserProfileImportApi,
  options: BrowserProfileImportOptions,
) {
  try {
    return await browserProfileImport.importBrowserProfile(options);
  } catch (error) {
    vscodeApiH.error("Failed to import browser profile", {
      safe: {
        importCookies: options.importCookies,
        importPasswords: options.importPasswords,
        source: options.source,
      },
      sensitive: {
        error,
        profilePath: options.profilePath,
      },
    });
    throw error;
  }
}
export function browserProfileImportProfilesQuery(
  browserProfileImport: BrowserProfileImportApi | null | undefined,
  enabled: boolean,
) {
  return queryOptions({
    enabled,
    queryKey: ["browser-profile-import-profiles"],
    queryFn: async () => {
      if (browserProfileImport == null) {
        throw Error("Browser profile import is unavailable");
      }
      try {
        return await browserProfileImport.listImportableBrowserProfiles();
      } catch (error) {
        vscodeApiH.error("Failed to list importable browser profiles", {
          safe: {},
          sensitive: {
            error,
          },
        });
        throw error;
      }
    },
    retry: false,
    staleTime: BROWSER_PROFILE_IMPORT_STALE_TIME_MS,
  });
}

export function initBrowserProfileImportQueryChunk(): void {}
