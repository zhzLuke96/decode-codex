// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Action buttons attached to desktop approval notifications (approve / approve
// for session / decline). The desktop-notifications listener maps the chosen
// action id to an approval decision it replies to the host with.
export type ApprovalNotificationActionType =
  | "approve"
  | "approve-for-session"
  | "decline";

export interface ApprovalNotificationAction {
  id: string;
  title: string;
  actionType: ApprovalNotificationActionType;
}

export const APPROVAL_NOTIFICATION_ACTIONS: ApprovalNotificationAction[] = [
  { id: "approve", title: "Approve", actionType: "approve" },
  {
    id: "approve-session",
    title: "Approve for session",
    actionType: "approve-for-session",
  },
  { id: "decline", title: "Decline", actionType: "decline" },
];
