// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Scrolls (and focuses) the DOM node tagged for a local-conversation item id into view.
import { once } from "../runtime/commonjs-interop";
import {
  createScopedSignalFamily,
  type ScopedSignalGetter,
  type ScopedSignalSetter,
} from "../runtime/app-scope-runtime";
import {
  initLocalConversationRouteRuntime,
  localConversationRouteScope,
} from "./local-conversation-route-runtime";

const CONVERSATION_ITEM_TARGET_ATTRIBUTE =
  "data-local-conversation-item-target-ids";
const SCROLL_TARGET_WAIT_TIMEOUT_MS = 1000;

type ConversationItemScrollTargetStore = ScopedSignalGetter &
  ScopedSignalSetter;

export let conversationItemScrollTargetSignal: unknown;

export const initConversationItemScrollTargetRuntime = once(() => {
  initLocalConversationRouteRuntime();
  conversationItemScrollTargetSignal = createScopedSignalFamily<
    string,
    string | null
  >(localConversationRouteScope, () => null);
});

function findConversationItemElement(itemId: string): Element | null {
  const encodedId = encodeURIComponent(itemId);
  const candidates = document.querySelectorAll(
    `[${CONVERSATION_ITEM_TARGET_ATTRIBUTE}]`,
  );
  for (const candidate of candidates) {
    const ids = (
      candidate.getAttribute(CONVERSATION_ITEM_TARGET_ATTRIBUTE) ?? ""
    ).split(" ");
    if (ids.includes(encodedId)) {
      return candidate;
    }
  }
  return null;
}

export function scrollConversationItemIntoView(
  itemId: string,
  behavior?: ScrollBehavior,
): boolean {
  const element = findConversationItemElement(itemId);
  if (element == null) {
    return false;
  }
  element.scrollIntoView({ block: "center", behavior });
  (element as HTMLElement).focus({ preventScroll: true });
  return true;
}

export function scrollConversationItemIntoViewWhenReady(
  itemId: string,
  behavior?: ScrollBehavior,
): Promise<boolean> {
  if (scrollConversationItemIntoView(itemId, behavior)) {
    return Promise.resolve(true);
  }

  return new Promise((resolve) => {
    const startedAt = performance.now();
    let animationFrameId: number | null = null;

    const finish = (result: boolean) => {
      if (animationFrameId != null) {
        window.cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
      resolve(result);
    };

    const poll = () => {
      if (scrollConversationItemIntoView(itemId, behavior)) {
        finish(true);
        return;
      }
      if (performance.now() - startedAt >= SCROLL_TARGET_WAIT_TIMEOUT_MS) {
        finish(false);
        return;
      }
      animationFrameId = window.requestAnimationFrame(poll);
    };

    animationFrameId = window.requestAnimationFrame(poll);
  });
}

export function registerConversationItemScrollTarget(
  store: ConversationItemScrollTargetStore,
  itemId: string,
  targetId: string,
): () => void {
  initConversationItemScrollTargetRuntime();
  store.set(conversationItemScrollTargetSignal, itemId, targetId);

  return () => {
    if (store.get(conversationItemScrollTargetSignal, itemId) === targetId) {
      store.set(conversationItemScrollTargetSignal, itemId, null);
    }
  };
}
