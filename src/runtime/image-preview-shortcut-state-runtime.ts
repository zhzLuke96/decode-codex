// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Host shortcut bridge state for image preview dialogs.

let imagePreviewOpen = false;
const imagePreviewOpenListeners = new Set<() => void>();

export const imagePreviewOpenStore = {
  getSnapshot: () => imagePreviewOpen,
  subscribe(listener: () => void) {
    imagePreviewOpenListeners.add(listener);
    return () => {
      imagePreviewOpenListeners.delete(listener);
    };
  },
  setOpen(open: boolean) {
    setImagePreviewOpen(open);
  },
};

export function setImagePreviewOpen(open: boolean): void {
  if (imagePreviewOpen === open) return;
  imagePreviewOpen = open;
  for (const listener of imagePreviewOpenListeners) listener();
}

export function applyImagePreviewZoomCommand(command: string): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent("codex:image-preview-zoom-command", {
      detail: { command },
    }),
  );
}
