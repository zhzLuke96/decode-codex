// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Formats either a plain string or a react-intl message descriptor to a string.
import type { IntlShape, MessageDescriptor } from "../vendor/react-intl";

export function formatMessageOrString(
  intl: IntlShape,
  value: string | MessageDescriptor,
): string {
  return typeof value === "string" ? value : intl.formatMessage(value);
}
