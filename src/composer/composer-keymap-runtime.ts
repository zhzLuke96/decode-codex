// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Composer keymap helpers used by the new-thread ProseMirror controller.

type KeyboardTarget =
  | EventTarget
  | { dom?: EventTarget | null }
  | null
  | undefined;
type KeyboardHandler = (event: KeyboardEvent) => boolean | void;

function resolveKeyboardTarget(target: KeyboardTarget): EventTarget | null {
  if (target == null) return null;
  if (typeof (target as EventTarget).addEventListener === "function") {
    return target as EventTarget;
  }
  return (target as { dom?: EventTarget | null }).dom ?? null;
}

function registerKeydown(
  target: KeyboardTarget,
  handler: KeyboardHandler,
): () => void {
  const eventTarget = resolveKeyboardTarget(target);
  if (eventTarget == null) return () => {};

  const listener = (event: Event) => {
    const keyboardEvent = event as KeyboardEvent;
    if (typeof keyboardEvent.key !== "string") return;
    const handled = handler(keyboardEvent);
    if (handled === true) {
      keyboardEvent.preventDefault();
      keyboardEvent.stopPropagation();
    }
  };

  eventTarget.addEventListener("keydown", listener);
  return () => {
    eventTarget.removeEventListener("keydown", listener);
  };
}

export function registerComposerEscapeHandler(
  target: KeyboardTarget,
  handler: KeyboardHandler,
): () => void {
  return registerKeydown(target, (event) => {
    if (event.key !== "Escape") return false;
    return handler(event);
  });
}

export function registerComposerEnterKeymap(
  view: KeyboardTarget,
  handlers: Partial<Record<string, KeyboardHandler>>,
): () => void {
  return registerKeydown(view, (event) => handlers[event.key]?.(event));
}

export function registerComposerKeymap(
  _composerController: unknown,
  _enabled: boolean = true,
): void {}
