// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Browser comment overlay composer controller and attachment helpers.

import {
  createScopedStateAtom,
  appStoreScope,
} from "../runtime/onboarding-scope-runtime";

type EditorChangeHandler = () => void;
type PastedImagesHandler = (files: File[]) => void;
type SubmitHandler = (() => void) | undefined;
type ComposerSuggestionState = {
  active: boolean;
  activation: "typed" | "synthetic" | null;
  anchorPos: number | null;
  dismissedMatch: unknown;
  kind: "at-mention" | "skill-mention" | "slash-command" | null;
  query: string;
  range: { from: number; to: number } | null;
  source: unknown;
  trigger: string | null;
};

type ComposerTransaction = {
  meta: Array<{ key: unknown; value: unknown }>;
  setMeta(key: unknown, value: unknown): ComposerTransaction;
};

export type BrowserCommentComposerController = ReturnType<
  typeof createComposerController
>;

const suggestionPluginKey = "composer-suggestion-ui$";
const transactionEventPluginKey = "transactionEventPlugin$";
const dispatchTransactionEvent = "prosemirrorDispatchTransaction";

function createTransaction(): ComposerTransaction {
  return {
    meta: [],
    setMeta(key, value) {
      this.meta.push({ key, value });
      return this;
    },
  };
}

function createEmptySuggestionState(): ComposerSuggestionState {
  return {
    active: false,
    activation: null,
    anchorPos: null,
    dismissedMatch: null,
    kind: null,
    query: "",
    range: null,
    source: null,
    trigger: null,
  };
}

function createEditorElement(): HTMLElement {
  const element = document.createElement("div");
  element.contentEditable = "true";
  element.role = "textbox";
  element.spellcheck = true;
  element.className = "ProseMirror";
  element.dataset.codexBrowserCommentComposer = "true";
  element.appendChild(document.createElement("p"));
  return element;
}

export function createComposerController() {
  const eventTarget = new EventTarget();
  const changeHandlers = new Set<EditorChangeHandler>();
  const pastedImagesHandlers = new Set<PastedImagesHandler>();
  const submitHandlers = new Set<SubmitHandler>();
  const suggestionListeners = new Set<(payload: unknown) => void>();
  const dom = createEditorElement();
  const state: Record<string, unknown> & {
    doc: { childCount: number };
    tr: ComposerTransaction;
  } = {
    doc: { childCount: 1 },
    tr: createTransaction(),
    [suggestionPluginKey]: createEmptySuggestionState(),
    [transactionEventPluginKey]: { eventTarget },
  };

  const notifyChanged = () => {
    state.doc.childCount = Math.max(
      1,
      dom.textContent?.split(/\n+/).filter(Boolean).length ?? 1,
    );
    state.tr = createTransaction();
    for (const handler of changeHandlers) handler();
    eventTarget.dispatchEvent(new Event(dispatchTransactionEvent));
  };

  const setText = (text: string) => {
    dom.textContent = text;
    notifyChanged();
  };

  dom.addEventListener("input", notifyChanged);
  dom.addEventListener("paste", (event) => {
    const files = extractImageFilesFromDataTransfer(event.clipboardData);
    if (files.length === 0) return;
    for (const handler of pastedImagesHandlers) handler(files);
  });
  dom.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || event.shiftKey || event.altKey) return;
    if (!(event.metaKey || event.ctrlKey)) return;
    for (const handler of submitHandlers) handler?.();
  });

  const view = {
    dom,
    isDestroyed: false,
    state,
    dispatch(transaction: ComposerTransaction) {
      for (const { key, value } of transaction.meta) {
        const resolvedKey =
          typeof key === "object" && key != null && "key" in key
            ? String((key as { key: unknown }).key)
            : String(key);
        if (resolvedKey === suggestionPluginKey) {
          const current =
            (state[suggestionPluginKey] as ComposerSuggestionState) ??
            createEmptySuggestionState();
          state[suggestionPluginKey] =
            typeof value === "object" &&
            value != null &&
            "type" in value &&
            (value as { type: unknown }).type === "close"
              ? createEmptySuggestionState()
              : {
                  ...current,
                  active: false,
                  dismissedMatch: value,
                };
        }
      }
      notifyChanged();
    },
  };

  return {
    eventEmitter: {
      addListener(event: string, listener: (payload: unknown) => void) {
        if (event === "composer-suggestion-ui-event") {
          suggestionListeners.add(listener);
        }
      },
      removeListener(event: string, listener: (payload: unknown) => void) {
        if (event === "composer-suggestion-ui-event") {
          suggestionListeners.delete(listener);
        }
      },
    },
    view,
    addPastedImagesHandler(handler: PastedImagesHandler) {
      pastedImagesHandlers.add(handler);
    },
    removePastedImagesHandler(handler: PastedImagesHandler) {
      pastedImagesHandlers.delete(handler);
    },
    addSubmitHandler(handler: SubmitHandler) {
      if (handler != null) submitHandlers.add(handler);
    },
    removeSubmitHandler(handler: SubmitHandler) {
      submitHandlers.delete(handler);
    },
    appendText(text: string) {
      setText(`${dom.textContent ?? ""}${text}`);
    },
    clearSuggestion() {
      state[suggestionPluginKey] = createEmptySuggestionState();
      notifyChanged();
    },
    completeSuggestionQuery(query: string) {
      setText(`${dom.textContent ?? ""}${query}`);
      state[suggestionPluginKey] = createEmptySuggestionState();
    },
    destroy() {
      view.isDestroyed = true;
      dom.remove();
    },
    focus() {
      dom.focus();
    },
    getText() {
      return dom.textContent ?? "";
    },
    insertMention(mention: unknown) {
      const label = resolveMentionLabel(mention);
      setText(`${dom.textContent ?? ""}${label}`);
      state[suggestionPluginKey] = createEmptySuggestionState();
    },
    setAtMentionSource(source: unknown) {
      state[suggestionPluginKey] = {
        ...createEmptySuggestionState(),
        active: true,
        kind: "at-mention",
        source,
      };
      notifyChanged();
    },
    setPlaceholder(placeholder: string | null | undefined) {
      if (placeholder == null) delete dom.dataset.placeholder;
      else dom.dataset.placeholder = placeholder;
      dom.setAttribute("aria-placeholder", placeholder ?? "");
    },
    setPromptText,
    syncMentionMetadata(_metadata: unknown) {},
  };

  function setPromptText(text: string) {
    setText(text);
  }
}

export const directSubmitPreferenceAtom = createScopedStateAtom(
  appStoreScope,
  () => true,
);

export const designEditorPlacementHint = "browser-comment-design-editor";

export function dataTransferHasImages(
  dataTransfer: DataTransfer | null | undefined,
): boolean {
  return extractImageFilesFromDataTransfer(dataTransfer).length > 0;
}

export function extractImageFilesFromDataTransfer(
  dataTransfer: DataTransfer | null | undefined,
): File[] {
  if (dataTransfer == null) return [];
  const files = Array.from(dataTransfer.files ?? []);
  const itemFiles = Array.from(dataTransfer.items ?? [])
    .filter((item) => item.kind === "file" && item.type.startsWith("image/"))
    .map((item) => item.getAsFile())
    .filter((file): file is File => file != null);
  return [...files, ...itemFiles].filter((file) =>
    file.type.startsWith("image/"),
  );
}

export function subscribeToEditorChanges(
  view: { dom: HTMLElement },
  handler: EditorChangeHandler,
): () => void {
  view.dom.addEventListener("input", handler);
  return () => {
    view.dom.removeEventListener("input", handler);
  };
}

function resolveMentionLabel(mention: unknown): string {
  if (mention == null) return "";
  if (typeof mention === "string") return mention;
  if (typeof mention !== "object") return String(mention);
  const record = mention as Record<string, unknown>;
  const label = record.label ?? record.title ?? record.name ?? record.path;
  return typeof label === "string" ? label : "";
}
