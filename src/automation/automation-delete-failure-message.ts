// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Maps an automation delete-failure reason code to a user-facing message.

export type AutomationDeleteFailureReason =
  | "invalid_id"
  | "store_unavailable"
  | "state_cleanup_failed"
  | "remove_failed"
  | "deleted"
  | "not_found";

export function getAutomationDeleteFailureMessage(
  reason: AutomationDeleteFailureReason,
): string | undefined {
  switch (reason) {
    case "invalid_id":
      return "Automation id was invalid.";
    case "store_unavailable":
      return "Automation storage is unavailable.";
    case "state_cleanup_failed":
      return "Automation scheduling state could not be updated.";
    case "remove_failed":
      return "Automation still exists after the app tried to delete it.";
    case "deleted":
    case "not_found":
      return "Automation was not deleted.";
  }
}
