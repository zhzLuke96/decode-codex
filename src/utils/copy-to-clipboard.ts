// Restored from ref/webview/assets/copy-to-clipboard-C9EKP1fU.js
// copy-to-clipboard-C9EKP1fU chunk restored from the Codex webview bundle.
type ClipboardPayload = string | Record<string, string | Blob>;

type ClipboardEventLike = {
  target?: {
    ownerDocument?: {
      defaultView?: Window | null;
    } | null;
  } | null;
} | null;

export function copyToClipboard(
  payload: ClipboardPayload,
  event?: ClipboardEventLike,
): Promise<boolean> {
  const { navigator } = event?.target?.ownerDocument?.defaultView ?? window;

  return new Promise((resolve, reject) => {
    if (!navigator?.clipboard) {
      reject(Error("Clipboard API unavailable"));
      return;
    }

    try {
      if (
        typeof payload !== "string" &&
        "write" in navigator.clipboard &&
        typeof ClipboardItem !== "undefined" &&
        "supports" in ClipboardItem
      ) {
        const item = new ClipboardItem(
          Object.fromEntries(
            Object.entries(payload).map(([mimeType, value]) => [
              mimeType,
              typeof value === "string"
                ? new Blob([value], { type: mimeType })
                : value,
            ]),
          ),
        );
        navigator.clipboard.write([item]).then(
          () => resolve(true),
          () => reject(Error("Failed to copy to clipboard")),
        );
      } else {
        const text =
          typeof payload === "string" ? payload : (payload["text/plain"] ?? "");
        navigator.clipboard.writeText(text).then(
          () => resolve(true),
          () => reject(Error("Failed to copy to clipboard")),
        );
      }
    } catch {
      reject(Error("Failed to copy to clipboard"));
    }
  });
}
