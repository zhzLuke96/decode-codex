// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~appgen-library-page~local-conversation-page-DAngUxdy.js
// Base class name for the thread composer footer container: centers the footer
// on the thread content width and applies the shared toolbar horizontal padding.
// Source composed this via cn("mx-auto w-full max-w-(--thread-content-max-width)", "px-toolbar");
// the two groups touch distinct properties, so the merged value is a stable literal.
export const threadFooterClassName =
  "mx-auto w-full max-w-(--thread-content-max-width) px-toolbar" as const;
