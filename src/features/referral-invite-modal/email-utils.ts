// Restored from ref/webview/assets/referral-invite-modal-CL-_nI4E.js
// Email parsing and validation helpers for the referral invite modal.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function splitEmailInput(input: string): string[] {
  return input
    .split(/[\s,;]+/)
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}
export function isValidEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email);
}
export function normalizeEmailKey(email: string): string {
  return email.toLowerCase();
}
export function getInvalidEmails(emails: string[]): string[] {
  return emails.filter((email) => !isValidEmail(email));
}
