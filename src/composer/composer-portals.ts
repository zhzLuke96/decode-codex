// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js
// Portal element ids/attributes for the "above composer" regions rendered by the
// home composer, plus resolvers that locate the portal element belonging to a
// specific conversation (falling back to the shared portal when no per-conversation
// element is mounted).

export const aboveComposerPortalId = "above-composer-portal";
export const aboveComposerQueuePortalId = "above-composer-queue-portal";
export const aboveComposerPortalAttribute = "data-above-composer-portal";
export const aboveComposerQueuePortalAttribute =
  "data-above-composer-queue-portal";

const conversationIdAttribute = "data-above-composer-conversation-id";

function resolvePortalElement(
  portalAttribute: string,
  fallbackId: string,
  conversationId: string | null | undefined,
): HTMLElement | null {
  if (typeof document === "undefined") return null;
  if (conversationId != null) {
    let sawCandidate = false;
    for (const element of document.querySelectorAll<HTMLElement>(
      `[${portalAttribute}]`,
    )) {
      sawCandidate = true;
      if (element.getAttribute(conversationIdAttribute) === conversationId) {
        return element;
      }
    }
    return sawCandidate ? null : document.getElementById(fallbackId);
  }
  return document.getElementById(fallbackId);
}

export function getAboveComposerPortalElement(
  conversationId?: string | null,
): HTMLElement | null {
  return resolvePortalElement(
    aboveComposerPortalAttribute,
    aboveComposerPortalId,
    conversationId,
  );
}

export function getAboveComposerQueuePortalElement(
  conversationId?: string | null,
): HTMLElement | null {
  return resolvePortalElement(
    aboveComposerQueuePortalAttribute,
    aboveComposerQueuePortalId,
    conversationId,
  );
}
