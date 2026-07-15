// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Composer editor shell: mounts the ProseMirror controller DOM into React,
// wires submit/suggestion handlers, and exposes small composer controls.

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { Button } from "../ui/button";
import { PlusIcon } from "../icons/plus-icon";

type ComposerEventEmitter = {
  addListener?(event: string, listener: (payload: unknown) => void): void;
  removeListener?(event: string, listener: (payload: unknown) => void): void;
};

type ComposerEditorView = {
  dom: HTMLElement;
};

type ComposerController = {
  eventEmitter?: ComposerEventEmitter;
  focus(): void;
  setPlaceholder?(placeholder: string | null | undefined): void;
  addSubmitHandler?(handler: (() => void) | undefined): void;
  removeSubmitHandler?(handler: (() => void) | undefined): void;
  view: ComposerEditorView;
};

type MentionDescriptor = {
  fsPath?: string;
  isFolder?: boolean;
  kind: string;
  path: string;
};

export interface ComposerEditorProps {
  ariaLabel?: string;
  className?: string;
  composerController: ComposerController;
  disableAutoFocus?: boolean;
  isFocusComposerTarget?: boolean;
  minHeight?: string;
  onCompositionStateChange?: (isComposing: boolean) => void;
  onMentionActivate?: (mention: MentionDescriptor) => boolean | void;
  onSubmit?: () => void;
  onSuggestionHandler?: (event: unknown) => void;
  placeholder?: string | null;
  singleLine?: boolean;
}

export function ComposerEditor({
  ariaLabel,
  className,
  composerController,
  disableAutoFocus = false,
  isFocusComposerTarget = false,
  minHeight,
  onCompositionStateChange,
  onMentionActivate,
  onSubmit,
  onSuggestionHandler,
  placeholder,
  singleLine = false,
}: ComposerEditorProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const isComposingRef = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    if (root == null) throw Error("RichTextInput rootRef is not mounted");
    const dom = composerController.view.dom;
    root.appendChild(dom);
    dom.dataset.virtualkeyboard = "true";
    dom.style.fontSize = "var(--codex-chat-font-size)";
    dom.style.height = "auto";
    dom.style.resize = "none";
    return () => {
      if (isComposingRef.current) {
        isComposingRef.current = false;
        onCompositionStateChange?.(false);
      }
      dom
        .querySelector('[rich-link-display-text][rich-link-href][aria-expanded="true"]')
        ?.setAttribute("aria-expanded", "false");
      dom.blur();
      if (dom.parentElement === root) root.removeChild(dom);
    };
  }, [composerController, onCompositionStateChange]);

  useEffect(() => {
    const dom = composerController.view.dom;
    if (isFocusComposerTarget) {
      dom.dataset.codexComposer = "true";
      return;
    }
    delete dom.dataset.codexComposer;
  }, [composerController, isFocusComposerTarget]);

  useEffect(() => {
    if (disableAutoFocus) return;
    requestAnimationFrame(() => composerController.focus());
  }, [composerController, disableAutoFocus]);

  useEffect(() => {
    const dom = composerController.view.dom;
    if (ariaLabel) {
      dom.setAttribute("aria-label", ariaLabel);
      return;
    }
    dom.removeAttribute("aria-label");
  }, [ariaLabel, composerController]);

  useEffect(() => {
    composerController.view.dom.style.minHeight = minHeight ?? "2.5rem";
  }, [composerController, minHeight]);

  useEffect(() => {
    composerController.setPlaceholder?.(placeholder);
  }, [composerController, placeholder]);

  useEffect(() => {
    const handleSuggestion = (event: unknown) => onSuggestionHandler?.(event);
    composerController.addSubmitHandler?.(onSubmit);
    if (onSuggestionHandler != null) {
      composerController.eventEmitter?.addListener?.(
        "composer-suggestion-ui-event",
        handleSuggestion,
      );
    }
    return () => {
      composerController.removeSubmitHandler?.(onSubmit);
      composerController.eventEmitter?.removeListener?.(
        "composer-suggestion-ui-event",
        handleSuggestion,
      );
    };
  }, [composerController, onSubmit, onSuggestionHandler]);

  const focusEditorOnShellMouseDown = (
    event: ReactMouseEvent<HTMLDivElement>,
  ) => {
    const dom = composerController.view.dom;
    if (event.target instanceof Node && !dom.contains(event.target)) {
      event.preventDefault();
      dom.focus();
    }
  };

  const handleMentionClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof Element)) return;
    const mention = readMentionDescriptor(event.target);
    if (mention == null) return;
    if (onMentionActivate?.(mention) !== false) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const handleCompositionState = (isComposing: boolean) => {
    isComposingRef.current = isComposing;
    onCompositionStateChange?.(isComposing);
  };

  return (
    <div
      ref={rootRef}
      className={joinClassNames(
        "text-size-chat text-token-foreground [&_.ProseMirror]:focus-visible:outline-none [&_.ProseMirror]:resize-none [&_.ProseMirror_p]:m-0",
        singleLine
          ? "flex h-9 max-h-none items-center overflow-hidden [&_.ProseMirror]:!h-5 [&_.ProseMirror]:!min-h-5 [&_.ProseMirror]:min-w-0 [&_.ProseMirror]:flex-1 [&_.ProseMirror]:overflow-hidden [&_.ProseMirror]:whitespace-nowrap [&_.ProseMirror_p]:overflow-hidden [&_.ProseMirror_p]:text-ellipsis [&_.ProseMirror_p]:whitespace-nowrap"
          : "h-auto max-h-[25dvh] overflow-y-auto [&_.ProseMirror]:h-auto [&_.ProseMirror]:min-h-[2rem]",
        className,
      )}
      onMouseDown={focusEditorOnShellMouseDown}
      onClick={handleMentionClick}
      onCompositionStart={() => handleCompositionState(true)}
      onCompositionEnd={() => handleCompositionState(false)}
    />
  );
}

export function ComposerInputField(props: ComposerEditorProps) {
  return <ComposerEditor {...props} />;
}

export interface AddContextButtonProps {
  active?: boolean;
  onOpen: () => void;
}

export function AddContextButton({ active = false, onOpen }: AddContextButtonProps) {
  return (
    <Button
      aria-label="Add context"
      color={active ? "outlineActive" : "ghost"}
      size="composerSm"
      uniform
      onClick={onOpen}
    >
      <PlusIcon aria-hidden="true" className="icon-2xs" />
    </Button>
  );
}

export interface SelectedTextPortalProps {
  children?: ReactNode;
  electron?: boolean;
}

export function SelectedTextPortal({ children }: SelectedTextPortalProps) {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setPortalRoot(document.body);
  }, []);
  return portalRoot == null ? <>{children}</> : createPortal(children, portalRoot);
}

function readMentionDescriptor(target: Element): MentionDescriptor | null {
  const element = target.closest(
    "[at-mention-path], [skill-mention-path], [app-mention-path], [plugin-mention-path], [resource-mention-resource-uri], [chatgpt-conversation-mention-path]",
  );
  if (element == null) return null;
  const filePath = element.getAttribute("at-mention-path");
  if (filePath != null) {
    const fsPath = element.getAttribute("at-mention-fs-path") ?? "";
    return {
      fsPath,
      isFolder: /[\\/]$/.test(filePath) || /[\\/]$/.test(fsPath),
      kind: "file",
      path: filePath,
    };
  }
  for (const kind of ["skill", "app", "plugin", "chatgpt-conversation"]) {
    const path = element.getAttribute(`${kind}-mention-path`);
    if (path != null) return { kind, path };
  }
  const resourceUri = element.getAttribute("resource-mention-resource-uri");
  const server = element.getAttribute("resource-mention-server");
  return resourceUri == null || server == null
    ? null
    : { kind: "mcp-resource", path: `${server}:${resourceUri}` };
}

function joinClassNames(
  ...values: Array<string | false | null | undefined>
): string {
  return values.filter(Boolean).join(" ");
}
