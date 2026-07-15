// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Shared selected group state used while editing Appgen access policies.
import {
  appScopeRoot,
  appScopeUnderscore as createScopedAtomFamily,
} from "../../boundaries/app-scope";

export type AppgenSelectedGroup = {
  id: string;
  source?: string;
  [key: string]: unknown;
};

type AppScopeStore = {
  set(
    atom: unknown,
    key: unknown,
    updater: (
      current: ReadonlySet<AppgenSelectedGroup>,
    ) => Set<AppgenSelectedGroup>,
  ): void;
};

const emptySelectedGroups = new Set<AppgenSelectedGroup>();

export const appgenSelectedGroupsByKeyAtom = createScopedAtomFamily(
  appScopeRoot,
  () => emptySelectedGroups,
);

export function initAppgenSelectedGroupsStateChunk(): void {}

export function addAppgenSelectedGroup(
  store: AppScopeStore,
  key: unknown,
  group: AppgenSelectedGroup,
): void {
  store.set(appgenSelectedGroupsByKeyAtom, key, (current) =>
    new Set(current).add(group),
  );
}
