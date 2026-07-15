// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared generated-image alt text formatting.
import type { IntlShape } from "../../../vendor/react-intl";

export function formatGeneratedImageAlt(
  intl: IntlShape,
  imageNumber: number,
): string {
  return intl.formatMessage(
    {
      id: "codex.localConversation.generatedImage",
      defaultMessage: "Generated image {imageNumber}",
      description:
        "Alt text for an assistant-generated image shown in the final response",
    },
    { imageNumber },
  );
}
