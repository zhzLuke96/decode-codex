// Restored from ref/webview/assets/app-initial~app-main~appgen-publication-terms-route~plugin-detail-page~skills-settings~plug~bpqstr7s-Dw2BkCEu.js
// Persistent disclosure state for the Sites/Appgen publication terms announcement.
import { createPersistentSignal } from "../runtime/app-host-services-runtime";
import { createSignal } from "../runtime/scope-signal-runtime";
import { sharedObjectAppScopeRoot } from "../runtime/shared-object-host-runtime";
import type {
  AppgenAnnouncementAudience,
  AppgenDisclosureState,
  ScopeWriter,
} from "./appgen-announcement-types";

const DISCLOSURE_SEEN_KEY = "has-seen-appgen-publication-terms-disclosure-v1";

export const hasSeenAppgenPublicationTermsDisclosureSignal =
  createPersistentSignal(DISCLOSURE_SEEN_KEY, false);

export const appgenPublicationTermsDisclosureSignal = createSignal(
  sharedObjectAppScopeRoot,
  null as AppgenDisclosureState | null,
);

export function hasSeenAppgenPublicationTermsDisclosure(
  scope?: ScopeWriter | null,
): boolean {
  return (
    scope?.get?.<boolean>(hasSeenAppgenPublicationTermsDisclosureSignal) ??
    readPersistedDisclosureSeen()
  );
}

export function markAppgenPublicationTermsDisclosureSeen(
  scope?: ScopeWriter | null,
): void {
  scope?.set?.(hasSeenAppgenPublicationTermsDisclosureSignal, true);
  scope?.set?.(appgenPublicationTermsDisclosureSignal, null);
  writePersistedDisclosureSeen();
}

export function getAppgenAnnouncementAudienceForAccount(
  account: unknown,
): AppgenAnnouncementAudience {
  return (account as { structure?: string } | null)?.structure === "workspace"
    ? "workspace"
    : "personal";
}

export function initAppgenPublicationTermsDisclosureRuntime(): void {}

function readPersistedDisclosureSeen(): boolean {
  try {
    return window.localStorage.getItem(DISCLOSURE_SEEN_KEY) === "true";
  } catch {
    return false;
  }
}

function writePersistedDisclosureSeen(): void {
  try {
    window.localStorage.setItem(DISCLOSURE_SEEN_KEY, "true");
  } catch {
    // Ignore unavailable storage; the in-memory signal was already updated.
  }
}
