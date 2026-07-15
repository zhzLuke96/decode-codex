// Restored from ref/.vite/build/comment-preload.js
// Browser sidebar comment preload: IPC bridge, host message queue, and navigation hooks.
import { contextBridge, ipcRenderer } from "electron";
import {
  BrowserSidebarDocumentContextResolver,
  mountBrowserSidebarCommentRuntime,
  type BrowserSidebarHostMessage,
  type BrowserSidebarRuntimeController,
  type BrowserSidebarRuntimeHost,
  type BrowserSidebarRuntimeMessage,
  type BrowserSidebarRuntimeState,
} from "./browser-sidebar-comment-runtime";
type BrowserSidebarHistoryDirection = "back" | "forward";

const VIEW_MESSAGE_CHANNEL = "codex_desktop:message-for-view";
const RUNTIME_MESSAGE_CHANNEL = "codex_desktop:browser-sidebar-runtime-message";
const WEB_MCP_MODEL_CONTEXT_GLOBAL = "__codexWebMcpModelContext";
const modifierKeys = new Set(["Meta", "Control", "Alt", "AltGraph", "Shift"]);
const keyAliases = new Map([
  ["Escape", "Esc"],
  ["ArrowUp", "Up"],
  ["ArrowDown", "Down"],
  ["ArrowLeft", "Left"],
  ["ArrowRight", "Right"],
]);
const shiftedKeyAliases = new Map([
  ["1", "!"],
  ["2", "@"],
  ["3", "#"],
  ["4", "$"],
  ["5", "%"],
  ["6", "^"],
  ["7", "&"],
  ["8", "*"],
  ["9", "("],
  ["0", ")"],
  ["-", "_"],
  ["=", "+"],
  ["[", "{"],
  ["]", "}"],
  ["\\", "|"],
  [";", ":"],
  ["'", '"'],
  [",", "<"],
  [".", ">"],
  ["/", "?"],
  ["`", "~"],
]);

let runtimeController: BrowserSidebarRuntimeController | null = null;
let runtimeState: BrowserSidebarRuntimeState = {
  interactionMode: "browse",
  annotationEditorMode: "comment",
  isAgentControllingBrowser: false,
  canUseTweaks: false,
  isDesignModifierPressed: false,
  isTweaksEditorOpen: false,
  comments: [],
  intlConfig: { defaultLocale: "en-US", locale: "en-US", messages: {} },
  viewportScale: 1,
  zoomPercent: 100,
};
let runtimeSubscribed = false;
let pendingEditorMessage: BrowserSidebarHostMessage | null = null;
let pendingTextSelectionCapture = false;
let imageDragActive = false;
let historyShortcuts: {
  backAccelerators: string[];
  forwardAccelerators: string[];
} | null = null;

installWebMcpModelContextShim();
installDomHooks();

function installDomHooks(): void {
  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", mountRuntimeOnce, {
      once: true,
    });
  } else {
    mountRuntimeOnce();
  }
  window.addEventListener("mousedown", preventAuxiliaryHistoryClick, true);
  window.addEventListener("mouseup", handleAuxiliaryHistoryClick, true);
  window.addEventListener("auxclick", preventAuxiliaryHistoryClick, true);
  window.addEventListener("dragstart", handleImageDragStart, true);
  window.addEventListener("dragend", handleImageDragEnd, true);
  window.addEventListener("keydown", handleHistoryShortcut, true);
}

function mountRuntimeOnce(): void {
  runtimeController ??= mountBrowserSidebarCommentRuntime(createRuntimeHost());
}

function createRuntimeHost(): BrowserSidebarRuntimeHost {
  return {
    initialState: runtimeState,
    createDocumentContextResolver(pageUrl) {
      return new BrowserSidebarDocumentContextResolver(pageUrl);
    },
    sendMessageToHost(message) {
      void ipcRenderer.invoke(RUNTIME_MESSAGE_CHANNEL, message);
    },
    subscribeToHostMessages(listener) {
      runtimeSubscribed = true;
      const onHostMessage = (
        _event: unknown,
        message: BrowserSidebarHostMessage,
      ) => {
        if (message.type === "browser-sidebar-runtime-sync") {
          updateRuntimeState(message);
          listener(message);
          return;
        }
        if (message.type === "browser-sidebar-runtime-history-shortcuts")
          return;
        if (isRuntimeForwardedHostMessage(message)) listener(message);
      };
      ipcRenderer.on(VIEW_MESSAGE_CHANNEL, onHostMessage);
      if (pendingTextSelectionCapture) {
        listener({ type: "browser-sidebar-runtime-capture-text-selection" });
        pendingTextSelectionCapture = false;
      }
      if (pendingEditorMessage != null) {
        listener(pendingEditorMessage);
        pendingEditorMessage = null;
      }
      return () => {
        runtimeSubscribed = false;
        ipcRenderer.removeListener(VIEW_MESSAGE_CHANNEL, onHostMessage);
      };
    },
  };
}

ipcRenderer.on(
  VIEW_MESSAGE_CHANNEL,
  (_event: unknown, message: BrowserSidebarHostMessage) => {
    switch (message.type) {
      case "browser-sidebar-runtime-sync":
        updateRuntimeState(message);
        return;
      case "browser-sidebar-runtime-history-shortcuts":
        historyShortcuts = {
          backAccelerators: message.backAccelerators,
          forwardAccelerators: message.forwardAccelerators,
        };
        return;
      case "browser-sidebar-runtime-capture-text-selection":
        if (!runtimeSubscribed) pendingTextSelectionCapture = true;
        return;
      case "browser-sidebar-runtime-select-comment":
      case "browser-sidebar-runtime-create-comment-at-point":
      case "browser-sidebar-runtime-create-comment-from-selection":
      case "browser-sidebar-runtime-open-design-editor-at-point":
      case "browser-sidebar-runtime-restore-editor":
      case "browser-sidebar-runtime-close-editor":
        if (!runtimeSubscribed) {
          pendingEditorMessage = mergePendingEditorMessage(
            pendingEditorMessage,
            message,
          );
        }
        return;
      case "browser-sidebar-runtime-design-scrub-changed":
      case "browser-sidebar-runtime-prepare-comment-screenshot":
      case "browser-sidebar-runtime-clear-comment-screenshot":
        return;
    }
  },
);

function updateRuntimeState(
  message: Partial<BrowserSidebarRuntimeState>,
): void {
  runtimeState = {
    activeDesignChange: message.activeDesignChange,
    interactionMode: message.interactionMode ?? runtimeState.interactionMode,
    annotationEditorMode: message.annotationEditorMode ?? "comment",
    isAgentControllingBrowser:
      message.isAgentControllingBrowser ??
      runtimeState.isAgentControllingBrowser,
    canUseTweaks: message.canUseTweaks !== false,
    isDesignModifierPressed: message.isDesignModifierPressed === true,
    isOriginalViewEnabled: message.isOriginalViewEnabled === true,
    isTweaksEditorOpen: message.isTweaksEditorOpen === true,
    comments: message.comments ?? runtimeState.comments,
    intlConfig: message.intlConfig ?? runtimeState.intlConfig,
    viewportScale: message.viewportScale ?? 1,
    zoomPercent: message.zoomPercent ?? runtimeState.zoomPercent,
  };
}

function mergePendingEditorMessage(
  current: BrowserSidebarHostMessage | null,
  next: BrowserSidebarHostMessage,
): BrowserSidebarHostMessage | null {
  switch (next.type) {
    case "browser-sidebar-runtime-select-comment":
    case "browser-sidebar-runtime-create-comment-at-point":
    case "browser-sidebar-runtime-create-comment-from-selection":
    case "browser-sidebar-runtime-open-design-editor-at-point":
      return next;
    case "browser-sidebar-runtime-restore-editor":
      return current?.type === "browser-sidebar-runtime-select-comment" ||
        current?.type === "browser-sidebar-runtime-create-comment-at-point" ||
        current?.type ===
          "browser-sidebar-runtime-create-comment-from-selection" ||
        current?.type === "browser-sidebar-runtime-open-design-editor-at-point"
        ? current
        : next;
    case "browser-sidebar-runtime-close-editor":
      return null;
    default:
      return current;
  }
}

function isRuntimeForwardedHostMessage(
  message: BrowserSidebarHostMessage,
): boolean {
  return (
    message.type === "browser-sidebar-runtime-prepare-comment-screenshot" ||
    message.type === "browser-sidebar-runtime-clear-comment-screenshot" ||
    message.type === "browser-sidebar-runtime-capture-text-selection" ||
    message.type === "browser-sidebar-runtime-select-comment" ||
    message.type === "browser-sidebar-runtime-close-editor" ||
    message.type === "browser-sidebar-runtime-design-scrub-changed" ||
    message.type === "browser-sidebar-runtime-create-comment-at-point" ||
    message.type === "browser-sidebar-runtime-create-comment-from-selection" ||
    message.type === "browser-sidebar-runtime-open-design-editor-at-point" ||
    message.type === "browser-sidebar-runtime-restore-editor"
  );
}

function handleAuxiliaryHistoryClick(event: MouseEvent): void {
  const direction = historyDirectionForMouseButton(event);
  if (direction == null || !event.isTrusted) return;
  preventAuxiliaryHistoryClick(event);
  void ipcRenderer.invoke(RUNTIME_MESSAGE_CHANNEL, {
    type: "browser-sidebar-runtime-mouse-navigation",
    direction,
  });
}

function preventAuxiliaryHistoryClick(event: MouseEvent): void {
  if (historyDirectionForMouseButton(event) == null) return;
  event.preventDefault();
  event.stopPropagation();
}

function historyDirectionForMouseButton(
  event: MouseEvent,
): BrowserSidebarHistoryDirection | null {
  return event.button === 3 ? "back" : event.button === 4 ? "forward" : null;
}

function handleHistoryShortcut(event: KeyboardEvent): void {
  if (
    !event.isTrusted ||
    event.defaultPrevented ||
    historyShortcuts == null ||
    event.composedPath().some(isEditableEventTarget)
  ) {
    return;
  }
  const direction = matchesAnyAccelerator(
    event,
    historyShortcuts.backAccelerators,
  )
    ? "back"
    : matchesAnyAccelerator(event, historyShortcuts.forwardAccelerators)
      ? "forward"
      : null;
  if (direction == null) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  void ipcRenderer.invoke(RUNTIME_MESSAGE_CHANNEL, {
    type: "browser-sidebar-runtime-mouse-navigation",
    direction,
  });
}

function isEditableEventTarget(target: EventTarget): boolean {
  return (
    target instanceof HTMLInputElement ||
    target instanceof HTMLIFrameElement ||
    target instanceof HTMLSelectElement ||
    target instanceof HTMLTextAreaElement ||
    (target instanceof HTMLElement && target.isContentEditable)
  );
}

function matchesAnyAccelerator(
  event: KeyboardEvent,
  accelerators: string[],
): boolean {
  return accelerators.some(
    (accelerator) =>
      !accelerator.includes(" ") && matchesAccelerator(event, accelerator),
  );
}

function matchesAccelerator(
  event: KeyboardEvent,
  accelerator: string,
): boolean {
  const parsed = parseAccelerator(accelerator);
  return (
    parsed.key.length > 0 &&
    eventKeyMatches(event, parsed) &&
    event.ctrlKey === parsed.requireCtrl &&
    event.metaKey === parsed.requireMeta &&
    event.altKey === parsed.requireAlt &&
    event.shiftKey === parsed.requireShift
  );
}

function parseAccelerator(accelerator: string): {
  key: string;
  requireAlt: boolean;
  requireCtrl: boolean;
  requireMeta: boolean;
  requireShift: boolean;
} {
  const isMacOS = process.platform === "darwin";
  let key = "";
  let requireAlt = false;
  let requireCtrl = false;
  let requireMeta = false;
  let requireShift = false;
  for (const token of accelerator.split("+").filter(Boolean)) {
    switch (token) {
      case "CmdOrCtrl":
        if (isMacOS) requireMeta = true;
        else requireCtrl = true;
        break;
      case "Command":
      case "Cmd":
        requireMeta = true;
        break;
      case "Control":
      case "Ctrl":
        requireCtrl = true;
        break;
      case "Alt":
      case "Option":
        requireAlt = true;
        break;
      case "Shift":
        requireShift = true;
        break;
      default:
        key = normalizeAcceleratorKey(token);
    }
  }
  return { key, requireAlt, requireCtrl, requireMeta, requireShift };
}

function eventKeyMatches(
  event: KeyboardEvent,
  parsed: ReturnType<typeof parseAccelerator>,
): boolean {
  const key = normalizeAcceleratorKey(readKeyboardEventKey(event) ?? "");
  return (
    key === parsed.key ||
    (parsed.requireShift &&
      key === (shiftedKeyAliases.get(parsed.key) ?? parsed.key))
  );
}

function normalizeAcceleratorKey(key: string): string {
  switch (key.toLowerCase()) {
    case "space":
      return " ";
    case "plus":
      return "+";
    case "esc":
    case "escape":
      return "escape";
    case "up":
    case "arrowup":
      return "arrowup";
    case "down":
    case "arrowdown":
      return "arrowdown";
    case "left":
    case "arrowleft":
      return "arrowleft";
    case "right":
    case "arrowright":
      return "arrowright";
    case "pgup":
    case "pageup":
      return "pageup";
    case "pgdn":
    case "pagedown":
      return "pagedown";
    default:
      return key.toLowerCase();
  }
}

function readKeyboardEventKey(event: KeyboardEvent): string | null {
  if (modifierKeys.has(event.key)) return null;
  if (event.altKey) {
    const codeKey = keyFromKeyboardCode(event.code);
    if (codeKey != null) return codeKey;
  }
  if (event.key === " ") return "Space";
  if (event.key === "+") return "Plus";
  return (
    keyAliases.get(event.key) ??
    (/^f\d{1,2}$/i.test(event.key) || event.key.length === 1
      ? event.key.toUpperCase()
      : (keyFromKeyboardCode(event.code) ?? event.key))
  );
}

function keyFromKeyboardCode(code: string | undefined): string | null {
  if (code == null) return null;
  if (/^Key[A-Z]$/.test(code)) return code.slice(3);
  if (/^Digit[0-9]$/.test(code)) return code.slice(5);
  return code === "Space" ? "Space" : null;
}

function handleImageDragStart(event: DragEvent): void {
  if (!event.isTrusted) return;
  const image = imageFromEvent(event);
  const sourceUrl = image?.currentSrc || image?.src;
  if (!sourceUrl) return;
  imageDragActive = true;
  void ipcRenderer.invoke(RUNTIME_MESSAGE_CHANNEL, {
    type: "browser-sidebar-runtime-image-drag-started",
    sourceUrl,
  });
}

function handleImageDragEnd(event: DragEvent): void {
  if (!event.isTrusted || !imageDragActive) return;
  imageDragActive = false;
  void ipcRenderer.invoke(RUNTIME_MESSAGE_CHANNEL, {
    type: "browser-sidebar-runtime-image-drag-ended",
  });
}

function imageFromEvent(event: Event): HTMLImageElement | null {
  for (const target of event.composedPath()) {
    if (target instanceof HTMLImageElement) return target;
  }
  return event.target instanceof HTMLImageElement ? event.target : null;
}

function installWebMcpModelContextShim(): void {
  if (navigatorHasModelContext()) return;
  const modelContext = createWebMcpModelContextShim();
  const internalBridge = contextBridge.internalContextBridge as
    | {
        overrideGlobalPropertyFromIsolatedWorld?(
          path: string[],
          getter: () => unknown,
        ): void;
      }
    | undefined;
  if (internalBridge?.overrideGlobalPropertyFromIsolatedWorld != null) {
    internalBridge.overrideGlobalPropertyFromIsolatedWorld(
      ["navigator", "modelContext"],
      () => modelContext,
    );
    return;
  }
  contextBridge.exposeInMainWorld(WEB_MCP_MODEL_CONTEXT_GLOBAL, modelContext);
  contextBridge.executeInMainWorld({
    args: [WEB_MCP_MODEL_CONTEXT_GLOBAL],
    func: (globalName: string) => {
      Object.defineProperty(navigator, "modelContext", {
        configurable: true,
        enumerable: false,
        get: () => Reflect.get(window, globalName),
      });
    },
  });
}

function navigatorHasModelContext(): boolean {
  const maybeNavigator = navigator as Navigator & {
    modelContext?: {
      registerTool?: unknown;
      getTools?: unknown;
      executeTool?: unknown;
    };
  };
  return (
    typeof maybeNavigator.modelContext?.registerTool === "function" &&
    typeof maybeNavigator.modelContext.getTools === "function" &&
    typeof maybeNavigator.modelContext.executeTool === "function"
  );
}

function createWebMcpModelContextShim(): {
  executeTool(tool: { name?: string }, input: string): Promise<string>;
  getTools(): Array<Record<string, unknown>>;
  registerTool(
    tool: {
      name?: string;
      title?: string;
      description?: string;
      inputSchema?: unknown;
      annotations?: unknown;
      execute?: (input: unknown, client: unknown) => unknown | Promise<unknown>;
    },
    options?: { signal?: AbortSignal },
  ): void;
} {
  const registry = new Map<
    string,
    {
      name: string;
      title?: string;
      description?: string;
      inputSchema?: string;
      annotations?: unknown;
      execute(input: unknown, client: unknown): unknown | Promise<unknown>;
    }
  >();
  const client = {
    async requestUserInteraction() {
      throw Error(
        "requestUserInteraction is not supported by the Codex WebMCP shim.",
      );
    },
  };
  return {
    async executeTool(tool, input) {
      const name = normalizeToolName(tool?.name);
      const registeredTool = registry.get(name);
      if (!registeredTool) throw Error(`WebMCP tool not found: ${name}`);
      let parsedInput: unknown;
      try {
        parsedInput = JSON.parse(input);
      } catch {
        throw Error("WebMCP executeTool requires a JSON-stringified input.");
      }
      return stringifyToolResult(
        await registeredTool.execute(parsedInput, client),
      );
    },
    getTools() {
      return [...registry.values()].map((tool) => ({
        name: tool.name,
        inputSchema: tool.inputSchema ?? null,
        ...(tool.title == null ? {} : { title: tool.title }),
        ...(tool.description == null ? {} : { description: tool.description }),
        ...(tool.annotations == null ? {} : { annotations: tool.annotations }),
        ...(location.origin == null ? {} : { origin: location.origin }),
        ...(location.href == null ? {} : { pageUrl: location.href }),
      }));
    },
    registerTool(tool, options) {
      const name = normalizeToolName(tool?.name);
      if (typeof tool.execute !== "function") {
        throw Error(`WebMCP tool ${name} is missing an execute callback.`);
      }
      const inputSchema =
        tool.inputSchema === undefined
          ? undefined
          : JSON.stringify(tool.inputSchema);
      if (tool.inputSchema !== undefined && inputSchema === undefined) {
        throw Error("WebMCP tool inputSchema must be JSON-serializable.");
      }
      const registeredTool = {
        name,
        execute: tool.execute,
        ...(tool.title == null ? {} : { title: tool.title }),
        ...(tool.description == null ? {} : { description: tool.description }),
        ...(inputSchema === undefined ? {} : { inputSchema }),
        ...(tool.annotations == null ? {} : { annotations: tool.annotations }),
      };
      registry.set(name, registeredTool);
      const signal = options?.signal;
      if (!signal) return;
      const unregister = () => {
        if (registry.get(name) === registeredTool) registry.delete(name);
      };
      if (signal.aborted) unregister();
      else signal.addEventListener("abort", unregister, { once: true });
    },
  };
}

function normalizeToolName(name: unknown): string {
  if (typeof name !== "string" || name.trim().length === 0) {
    throw Error("WebMCP tools must have a non-empty name.");
  }
  return name.trim();
}

function stringifyToolResult(result: unknown): string {
  const serializableResult = result === undefined ? null : result;
  try {
    const encoded = JSON.stringify(serializableResult);
    if (encoded === undefined) {
      throw Error("WebMCP tool result is not JSON-serializable.");
    }
    return encoded;
  } catch {
    throw Error("WebMCP tool result is not JSON-serializable.");
  }
}
