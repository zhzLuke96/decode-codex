// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Browser address bar autocomplete: omnibox-style suggestion controller, listbox, and combobox input.

import * as React from "react";
import clsx from "clsx";
import { useIntl } from "../vendor/react-intl";
import { GlobeIcon } from "../icons/globe-icon";
import {
  AnchoredOverlayLayer,
  browserHostServices,
} from "../boundaries/onboarding-commons-externals.facade";

const MAX_MATCHES = 8;
const URL_SCHEME_PATTERN = /^[a-z][a-z\d+.-]*:(?:\/\/)?/i;

// ACMatchClassification bitmask (Chromium omnibox classification styles).
const STYLE_URL = 1;
const STYLE_MATCH = 2;
const STYLE_DIM = 4;

export type StyledRange = {
  offset: number;
  style: number;
  text?: string;
};

export type AutocompleteMatch = {
  destinationURL: string;
  fillIntoEdit: string;
  inlineAutocompletion: string;
  description?: string | null;
  descriptionClass?: StyledRange[];
  contents?: string | null;
  contentsClass?: StyledRange[];
  faviconDataURL?: string | null;
};

export type AutocompleteResult = {
  defaultMatch: AutocompleteMatch | null;
  done: boolean;
  matches: AutocompleteMatch[];
};

export type AutocompletePreview = {
  value: string;
  selectionStart: number;
  selectionEnd: number;
};

export type ActiveAutocompleteRequest = {
  browserTabId: string;
  conversationId: string;
  editingSessionId: string;
  preventInlineAutocomplete: boolean;
  query: string;
  requestId: string;
  selectionEnd: number;
  selectionStart: number;
};

export type AutocompleteControllerState = {
  activeRequest: ActiveAutocompleteRequest | null;
  displayedResult: AutocompleteResult | null;
  isRetained: boolean;
  selectedIndex: number | null;
};

export type AutocompleteSnapshot = {
  matches: AutocompleteMatch[];
  preview: AutocompletePreview | null;
  selectedIndex: number;
};

export type AutocompleteStartRequest = {
  browserTabId: string;
  conversationId: string;
  editingSessionId: string;
  requestId: string;
  input: {
    cursorPosition: number;
    preventInlineAutocomplete: boolean;
    text: string;
  };
};

export type AutocompleteResultEnvelope = {
  browserTabId: string;
  conversationId: string;
  editingSessionId: string;
  requestId: string;
  result: AutocompleteResult;
};

export type AutocompleteStopRequest = {
  browserTabId: string;
  conversationId: string;
  editingSessionId: string;
  requestId: string;
  reason: string;
};

type DisposableResource = {
  [Symbol.dispose]?: () => void;
  dispose?: () => void;
};

export interface AutocompleteService {
  start(
    request: AutocompleteStartRequest,
    onResult: (envelope: AutocompleteResultEnvelope) => void,
  ): DisposableResource;
  stop(request: AutocompleteStopRequest): DisposableResource | undefined;
}

type ChangeSignal = {
  on(event: "change", handler: () => void): () => void;
};

const INITIAL_STATE: AutocompleteControllerState = {
  activeRequest: null,
  displayedResult: null,
  isRetained: false,
  selectedIndex: null,
};

const EMPTY_SNAPSHOT: AutocompleteSnapshot = {
  matches: [],
  preview: null,
  selectedIndex: -1,
};

class DisposableScope {
  private resources: DisposableResource[] = [];
  private capturedError: unknown = undefined;
  private hasError = false;

  use<T extends DisposableResource | null | undefined>(resource: T): T {
    if (resource != null) this.resources.push(resource);
    return resource;
  }

  set error(value: unknown) {
    this.capturedError = value;
    this.hasError = true;
  }

  dispose(): void {
    for (let index = this.resources.length - 1; index >= 0; index--) {
      const resource = this.resources[index];
      (resource[Symbol.dispose] ?? resource.dispose)?.call(resource);
    }
    if (this.hasError) throw this.capturedError;
  }
}

function limitMatches(result: AutocompleteResult): AutocompleteMatch[] {
  return result.matches.slice(0, MAX_MATCHES);
}

function defaultMatchIndex(result: AutocompleteResult): number {
  const defaultMatch = result.defaultMatch;
  if (defaultMatch == null) return -1;
  return result.matches.findIndex(
    (match) =>
      match.destinationURL === defaultMatch.destinationURL &&
      match.fillIntoEdit === defaultMatch.fillIntoEdit,
  );
}

function resolveSelectedIndex(
  result: AutocompleteResult | null,
  selectedIndex: number | null,
  query: string,
  suppressInlineAutocomplete: boolean,
): number {
  if (selectedIndex != null) return selectedIndex;
  if (suppressInlineAutocomplete || result == null) return -1;
  const index = defaultMatchIndex(result);
  return index >= 0 &&
    index < MAX_MATCHES &&
    isInlineAutocompleteAllowed(query, result.matches[index])
    ? index
    : -1;
}

function applyMatchToInput(
  query: string,
  match: AutocompleteMatch,
  useInlineAutocompletion: boolean,
): AutocompletePreview {
  if (useInlineAutocompletion && match.inlineAutocompletion.length > 0) {
    return {
      selectionEnd: query.length + match.inlineAutocompletion.length,
      selectionStart: query.length,
      value: `${query}${match.inlineAutocompletion}`,
    };
  }
  const fillStartsWithQuery = match.fillIntoEdit
    .toLowerCase()
    .startsWith(query.toLowerCase());
  return {
    selectionEnd: match.fillIntoEdit.length,
    selectionStart: fillStartsWithQuery ? query.length : 0,
    value: match.fillIntoEdit,
  };
}

function wrapSelectionIndex(
  currentIndex: number,
  delta: number,
  count: number,
): number {
  if (currentIndex < 0) return delta > 0 ? 0 : count - 1;
  return (currentIndex + delta + count) % count;
}

function optionId(listboxId: string, index: number): string {
  return `${listboxId}-option-${index}`;
}

function splitStyledRanges(text: string, ranges: StyledRange[]): StyledRange[] {
  if (text.length === 0) return [];
  const result: StyledRange[] = [];
  const first = ranges[0];
  if (first == null || first.offset > 0) {
    result.push({ offset: 0, style: 0, text: text.slice(0, first?.offset) });
  }
  ranges.forEach((range, index) => {
    const segment = text.slice(range.offset, ranges[index + 1]?.offset);
    if (segment.length > 0) result.push({ ...range, text: segment });
  });
  return result;
}

function isInlineAutocompleteAllowed(
  query: string,
  match: AutocompleteMatch,
): boolean {
  if (match == null || match.inlineAutocompletion.length === 0) return false;
  const scheme = `${query}${match.inlineAutocompletion}`.match(
    URL_SCHEME_PATTERN,
  )?.[0];
  return scheme == null || query.toLowerCase().startsWith(scheme.toLowerCase());
}

export class AddressBarAutocompleteController {
  private editingSessionId: string | null = null;
  private isComposing = false;
  private preventInlineAutocompleteOnNextChange = false;
  private state: AutocompleteControllerState = INITIAL_STATE;
  private snapshot: AutocompleteSnapshot = EMPTY_SNAPSHOT;
  private listeners = new Set<() => void>();
  private service: AutocompleteService | null;

  constructor(service: AutocompleteService | null) {
    this.service = service;
  }

  getSnapshot = (): AutocompleteSnapshot => this.snapshot;

  subscribe = (listener: () => void): (() => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  start({
    browserTabId,
    conversationId,
    preventInlineAutocomplete = false,
    selectionEnd,
    selectionStart,
    value,
  }: {
    browserTabId: string;
    conversationId: string;
    preventInlineAutocomplete?: boolean;
    selectionEnd: number;
    selectionStart: number;
    value: string;
  }): void {
    const scope = new DisposableScope();
    try {
      if (value.trim().length === 0) {
        this.stop("clobbered", false);
        return;
      }
      const editingSessionId = this.editingSessionId ?? crypto.randomUUID();
      this.editingSessionId = editingSessionId;
      const preventInline =
        preventInlineAutocomplete ||
        this.isComposing ||
        selectionStart !== value.length ||
        selectionEnd !== value.length;
      const activeRequest: ActiveAutocompleteRequest = {
        browserTabId,
        conversationId,
        editingSessionId,
        preventInlineAutocomplete: preventInline,
        query: value,
        requestId: crypto.randomUUID(),
        selectionEnd,
        selectionStart,
      };
      const previousResult = this.state.displayedResult;
      this.setState({
        activeRequest,
        displayedResult: previousResult,
        isRetained: previousResult != null,
        selectedIndex: null,
      });
      const request: AutocompleteStartRequest = {
        browserTabId,
        conversationId,
        editingSessionId,
        requestId: activeRequest.requestId,
        input: {
          cursorPosition: selectionStart,
          preventInlineAutocomplete: preventInline,
          text: value,
        },
      };
      if (this.service == null) {
        this.handleResult({
          browserTabId,
          conversationId,
          editingSessionId,
          requestId: activeRequest.requestId,
          result: { defaultMatch: null, done: true, matches: [] },
        });
        return;
      }
      scope.use(this.service.start(request, this.handleResult));
    } catch (error) {
      scope.error = error;
    } finally {
      scope.dispose();
    }
  }

  stop(reason: string, resetSession: boolean): void {
    this.preventInlineAutocompleteOnNextChange = false;
    const activeRequest = this.state.activeRequest;
    if (activeRequest != null) {
      const scope = new DisposableScope();
      try {
        scope.use(
          this.service?.stop({
            browserTabId: activeRequest.browserTabId,
            conversationId: activeRequest.conversationId,
            editingSessionId: activeRequest.editingSessionId,
            requestId: activeRequest.requestId,
            reason,
          }),
        );
      } catch (error) {
        scope.error = error;
      } finally {
        scope.dispose();
      }
    }
    this.setState(INITIAL_STATE);
    if (resetSession) {
      this.editingSessionId = null;
      this.isComposing = false;
    }
  }

  moveSelection(delta: number): void {
    const activeRequest = this.state.activeRequest;
    if (
      activeRequest == null ||
      this.state.isRetained ||
      this.snapshot.matches.length === 0
    ) {
      return;
    }
    if (this.state.selectedIndex == null) {
      const scope = new DisposableScope();
      try {
        scope.use(
          this.service?.stop({
            browserTabId: activeRequest.browserTabId,
            conversationId: activeRequest.conversationId,
            editingSessionId: activeRequest.editingSessionId,
            requestId: activeRequest.requestId,
            reason: "interaction",
          }),
        );
      } catch (error) {
        scope.error = error;
      } finally {
        scope.dispose();
      }
    }
    this.setState({
      ...this.state,
      isRetained: false,
      selectedIndex: wrapSelectionIndex(
        this.snapshot.selectedIndex,
        delta,
        this.snapshot.matches.length,
      ),
    });
  }

  setComposing(isComposing: boolean): void {
    this.isComposing = isComposing;
  }

  setPreventInlineAutocompleteOnNextChange(value: boolean): void {
    this.preventInlineAutocompleteOnNextChange = value;
  }

  shouldPreventInlineAutocompleteOnNextChange(): boolean {
    return this.preventInlineAutocompleteOnNextChange;
  }

  consumePreventInlineAutocompleteOnNextChange(): boolean {
    const value = this.preventInlineAutocompleteOnNextChange;
    this.preventInlineAutocompleteOnNextChange = false;
    return value;
  }

  isAutocompleteSelection(
    value: string,
    selectionStart: number,
    selectionEnd: number,
  ): boolean {
    const activeRequest = this.state.activeRequest;
    const matchesPreview = (preview: AutocompletePreview | null): boolean =>
      preview?.value === value &&
      preview.selectionStart === selectionStart &&
      preview.selectionEnd === selectionEnd;
    return (activeRequest?.query === value &&
      activeRequest.selectionStart === selectionStart &&
      activeRequest.selectionEnd === selectionEnd) ||
      matchesPreview(this.snapshot.preview)
      ? true
      : activeRequest != null &&
          this.snapshot.matches.some(
            (match) =>
              matchesPreview(
                applyMatchToInput(activeRequest.query, match, false),
              ) ||
              matchesPreview(
                applyMatchToInput(activeRequest.query, match, true),
              ),
          );
  }

  handleResult = (envelope: AutocompleteResultEnvelope): void => {
    const activeRequest = this.state.activeRequest;
    if (
      activeRequest == null ||
      this.state.selectedIndex != null ||
      envelope.browserTabId !== activeRequest.browserTabId ||
      envelope.conversationId !== activeRequest.conversationId ||
      envelope.editingSessionId !== activeRequest.editingSessionId ||
      envelope.requestId !== activeRequest.requestId ||
      (this.state.displayedResult != null &&
        !envelope.result.done &&
        envelope.result.matches.length === 0)
    ) {
      return;
    }
    this.setState({
      ...this.state,
      displayedResult: envelope.result,
      isRetained: false,
    });
  };

  private setState(state: AutocompleteControllerState): void {
    this.state = state;
    const result = state.displayedResult;
    const matches = result == null ? [] : limitMatches(result);
    const defaultIndex = result == null ? -1 : defaultMatchIndex(result);
    const selectedIndex = resolveSelectedIndex(
      result,
      state.selectedIndex,
      state.activeRequest?.query ?? "",
      state.activeRequest?.preventInlineAutocomplete === true ||
        state.isRetained,
    );
    const selectedMatch = matches[selectedIndex] ?? null;
    this.snapshot = {
      matches,
      preview:
        state.activeRequest == null || selectedMatch == null
          ? null
          : applyMatchToInput(
              state.activeRequest.query,
              selectedMatch,
              state.selectedIndex == null && selectedIndex === defaultIndex,
            ),
      selectedIndex,
    };
    this.listeners.forEach((listener) => listener());
  }
}

function styledRangeClassName(style: number): string {
  return clsx({
    "font-semibold": !!(style & STYLE_MATCH),
    "text-token-description-foreground": !!(style & (STYLE_URL | STYLE_DIM)),
  });
}

// SPe / CPe in the source were identical styled-text span renderers; unified here.
function renderStyledRange(range: StyledRange) {
  return (
    <span key={range.offset} className={styledRangeClassName(range.style)}>
      {range.text}
    </span>
  );
}

function preventPointerDownDefault(event: React.PointerEvent): void {
  event.preventDefault();
}

type AddressSuggestionsListboxProps = {
  label: string;
  listboxId: string;
  matches: AutocompleteMatch[];
  onSelect: (match: AutocompleteMatch) => void;
  selectedIndex: number;
};

function AddressSuggestionsListbox({
  label,
  listboxId,
  matches,
  onSelect,
  selectedIndex,
}: AddressSuggestionsListboxProps) {
  const rows = matches.map((match, index) => {
    const primaryText =
      match.description || match.contents || match.fillIntoEdit;
    let primaryRanges = match.descriptionClass;
    if (!match.description) {
      primaryRanges = match.contents ? match.contentsClass : [];
    }
    const secondaryText = match.description
      ? match.contents || match.fillIntoEdit
      : null;
    const secondaryRanges = match.contents ? match.contentsClass : [];
    return (
      <button
        key={`${match.destinationURL}\0${match.fillIntoEdit}`}
        id={optionId(listboxId, index)}
        className={clsx(
          "flex h-9 w-full shrink-0 cursor-interaction items-center gap-2.5 rounded-lg px-2.5 text-left text-[13px] outline-none",
          index === selectedIndex
            ? "bg-token-list-active-selection-background"
            : "hover:bg-token-list-hover-background",
        )}
        tabIndex={-1}
        type="button"
        aria-selected={index === selectedIndex}
        data-browser-sidebar-skip-address-commit="true"
        role="option"
        onClick={() => {
          onSelect(match);
        }}
        onPointerDown={preventPointerDownDefault}
      >
        {match.faviconDataURL == null ? (
          <GlobeIcon className="size-4 text-token-description-foreground" />
        ) : (
          <img
            alt=""
            className="size-4 rounded-2xs object-contain"
            src={match.faviconDataURL}
          />
        )}
        <span className="flex min-w-0 flex-1 items-baseline gap-1">
          <span className="max-w-[60%] shrink-0 truncate text-token-foreground">
            {splitStyledRanges(primaryText, primaryRanges ?? []).map(
              renderStyledRange,
            )}
          </span>
          {secondaryText == null ? null : (
            <>
              <span
                aria-hidden={true}
                className="shrink-0 text-token-description-foreground before:content-['—']"
              />
              <span className="min-w-0 flex-1 truncate text-token-description-foreground">
                {splitStyledRanges(secondaryText, secondaryRanges ?? []).map(
                  renderStyledRange,
                )}
              </span>
            </>
          )}
        </span>
      </button>
    );
  });
  return (
    <div
      id={listboxId}
      className="flex max-h-[inherit] w-full flex-col overflow-y-auto rounded-xl border border-token-input-border bg-token-input-background p-2 text-token-input-foreground shadow-lg"
      aria-label={label}
      role="listbox"
    >
      {rows}
    </div>
  );
}

export type BrowserAddressBarAutocompleteProps = {
  addressBarRef: React.RefObject<HTMLDivElement | null>;
  addressInputRef: React.RefObject<HTMLInputElement | null>;
  className?: string;
  addressValue: string;
  bottomPanelAnimation: ChangeSignal;
  browserStateUrl: string;
  browserTabId: string;
  conversationId: string;
  hasEditedAddressRef: React.MutableRefObject<boolean>;
  isAddressEditing: boolean;
  isStoppingAddressEditingRef: React.MutableRefObject<boolean>;
  isVisible: boolean;
  onAddressValueChange: (value: string) => void;
  onCancelAddressEditing: () => void;
  onCommitAddress: (url: string) => void;
  onEnsureAddressEditing: React.FocusEventHandler<HTMLInputElement>;
  onFinishAddressEditing: () => void;
  onOpenBrowserFind: () => void;
  onStartAddressEditing: () => void;
  onStopAddressEditing: () => void;
  panelTarget: "bottom" | "right";
  placeholder?: string;
  rightPanelLayoutTick: ChangeSignal;
  shouldKeepAddressSelectedRef: React.MutableRefObject<boolean>;
  submittedAddressStillPending: boolean;
};

export function BrowserAddressBarAutocomplete({
  addressBarRef,
  addressInputRef,
  className,
  addressValue,
  bottomPanelAnimation,
  browserStateUrl,
  browserTabId,
  conversationId,
  hasEditedAddressRef,
  isAddressEditing,
  isStoppingAddressEditingRef,
  isVisible,
  onAddressValueChange,
  onCancelAddressEditing,
  onCommitAddress,
  onEnsureAddressEditing,
  onFinishAddressEditing,
  onOpenBrowserFind,
  onStartAddressEditing,
  onStopAddressEditing,
  panelTarget,
  placeholder,
  rightPanelLayoutTick,
  shouldKeepAddressSelectedRef,
  submittedAddressStillPending,
}: BrowserAddressBarAutocompleteProps) {
  const intl = useIntl();
  const autocompleteService: AutocompleteService | null =
    browserHostServices?.browserSidebarAutocomplete ?? null;
  const [controller] = React.useState(
    () => new AddressBarAutocompleteController(autocompleteService),
  );
  const { matches, preview, selectedIndex } = React.useSyncExternalStore(
    controller.subscribe,
    controller.getSnapshot,
  );
  const selectedMatch = matches[selectedIndex] ?? null;
  const showSuggestions = isAddressEditing && matches.length > 0;
  const listboxId = `browser-address-suggestions-${browserTabId}`;
  const inputValue = isAddressEditing
    ? (preview?.value ?? addressValue)
    : addressValue;

  React.useEffect(() => {
    if (!showSuggestions) return;
    const addressBar = addressBarRef.current;
    if (addressBar == null) return;
    const initialWidth = addressBar.offsetWidth;
    const initialHeight = addressBar.offsetHeight;
    const listboxElement = document.getElementById(listboxId);
    let dismissed = false;
    const dismiss = () => {
      if (!dismissed) {
        dismissed = true;
        controller.stop("interaction", false);
      }
    };
    const resizeObserver = new ResizeObserver(() => {
      if (
        addressBar.offsetWidth !== initialWidth ||
        addressBar.offsetHeight !== initialHeight
      ) {
        dismiss();
      }
    });
    const dismissOnScroll = (event: Event) => {
      if (
        !(
          event.target instanceof Node && listboxElement?.contains(event.target)
        )
      ) {
        dismiss();
      }
    };
    resizeObserver.observe(addressBar);
    const unsubscribePanel =
      panelTarget === "bottom"
        ? bottomPanelAnimation.on("change", dismiss)
        : rightPanelLayoutTick.on("change", dismiss);
    window.addEventListener("resize", dismiss);
    window.addEventListener("scroll", dismissOnScroll, true);
    window.visualViewport?.addEventListener("resize", dismiss);
    window.visualViewport?.addEventListener("scroll", dismiss);
    return () => {
      resizeObserver.disconnect();
      unsubscribePanel();
      window.removeEventListener("resize", dismiss);
      window.removeEventListener("scroll", dismissOnScroll, true);
      window.visualViewport?.removeEventListener("resize", dismiss);
      window.visualViewport?.removeEventListener("scroll", dismiss);
    };
  }, [
    addressBarRef,
    controller,
    bottomPanelAnimation,
    showSuggestions,
    listboxId,
    panelTarget,
    rightPanelLayoutTick,
  ]);

  React.useEffect(() => {
    if (!isAddressEditing || !isVisible) controller.stop("interaction", true);
  }, [controller, isAddressEditing, isVisible]);

  React.useEffect(
    () => () => {
      controller.stop("interaction", true);
    },
    [controller],
  );

  React.useLayoutEffect(() => {
    const input = addressInputRef.current;
    if (
      !isAddressEditing ||
      input == null ||
      input !== document.activeElement ||
      preview == null
    ) {
      return;
    }
    if (
      input.value === preview.value &&
      input.selectionStart === preview.selectionStart &&
      input.selectionEnd === preview.selectionEnd
    ) {
      return;
    }
    input.setSelectionRange(
      preview.selectionStart,
      preview.selectionEnd,
      "forward",
    );
  }, [addressInputRef, isAddressEditing, preview]);

  const startAutocomplete = (
    value: string,
    selectionStart: number,
    selectionEnd: number,
    preventInlineAutocomplete?: boolean,
  ) => {
    controller.start({
      browserTabId,
      conversationId,
      preventInlineAutocomplete: preventInlineAutocomplete ?? false,
      selectionEnd,
      selectionStart,
      value,
    });
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = event.clipboardData.getData("text");
    if (pasted.length === 0) return;
    event.preventDefault();
    const input = event.currentTarget;
    const selectionStart = input.selectionStart ?? input.value.length;
    const selectionEnd = input.selectionEnd ?? selectionStart;
    const nextValue = `${input.value.slice(0, selectionStart)}${pasted}${input.value.slice(selectionEnd)}`;
    input.value = nextValue;
    const cursor = selectionStart + pasted.length;
    input.setSelectionRange(cursor, cursor);
    hasEditedAddressRef.current = true;
    shouldKeepAddressSelectedRef.current = false;
    onAddressValueChange(nextValue);
    startAutocomplete(nextValue, cursor, cursor, true);
  };

  const commitAddress = (url: string) => {
    controller.stop("interaction", true);
    onStopAddressEditing();
    onCommitAddress(url);
  };

  const editingClassName = isAddressEditing
    ? "cursor-text pl-2 text-left"
    : "cursor-text text-center focus:pl-2 focus:text-left";
  const inputClassName = clsx(
    "h-full w-full min-w-0 bg-transparent py-0 text-sm leading-[18px] text-token-input-foreground outline-none select-text placeholder:text-token-input-placeholder-foreground [&::placeholder]:select-none",
    editingClassName,
    className,
  );

  const activeDescendant =
    selectedIndex >= 0 && matches.length > 0
      ? optionId(listboxId, selectedIndex)
      : undefined;
  const ariaControls = matches.length > 0 ? listboxId : undefined;
  const ariaExpanded =
    autocompleteService == null ? undefined : matches.length > 0;

  const handlePointerDown = (event: React.PointerEvent<HTMLInputElement>) => {
    if (event.currentTarget !== document.activeElement) {
      event.preventDefault();
      onStartAddressEditing();
      return;
    }
    shouldKeepAddressSelectedRef.current = false;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const selectionStart = event.currentTarget.selectionStart ?? value.length;
    const selectionEnd = event.currentTarget.selectionEnd ?? selectionStart;
    const preventInline =
      controller.consumePreventInlineAutocompleteOnNextChange();
    hasEditedAddressRef.current = true;
    shouldKeepAddressSelectedRef.current = false;
    onAddressValueChange(value);
    startAutocomplete(value, selectionStart, selectionEnd, preventInline);
  };

  const handleCompositionStart = () => controller.setComposing(true);
  const handleCompositionEnd = () => controller.setComposing(false);
  const handleCut = (event: React.ClipboardEvent<HTMLInputElement>) => {
    if (
      event.currentTarget.selectionStart !== event.currentTarget.selectionEnd
    ) {
      controller.setPreventInlineAutocompleteOnNextChange(true);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    shouldKeepAddressSelectedRef.current = false;
    controller.stop("interaction", true);
    const relatedTarget = event.relatedTarget;
    const isSkipCommitTarget =
      relatedTarget instanceof HTMLElement &&
      (relatedTarget.dataset.browserSidebarOpenExternal === "true" ||
        relatedTarget.dataset.browserSidebarSkipAddressCommit === "true");
    if (isStoppingAddressEditingRef.current || event.relatedTarget != null) {
      onFinishAddressEditing();
      if (!isSkipCommitTarget && !submittedAddressStillPending) {
        onCancelAddressEditing();
      }
      isStoppingAddressEditingRef.current = false;
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing) return;
    controller.setPreventInlineAutocompleteOnNextChange(
      event.key === "Backspace" || event.key === "Delete",
    );
    if (event.key.toLowerCase() === "f" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      event.stopPropagation();
      onOpenBrowserFind();
      return;
    }
    if (
      (event.key === "ArrowDown" || event.key === "ArrowUp") &&
      matches.length > 0
    ) {
      event.preventDefault();
      controller.moveSelection(event.key === "ArrowDown" ? 1 : -1);
      requestAnimationFrame(() => {
        const nextIndex = controller.getSnapshot().selectedIndex;
        document
          .getElementById(optionId(listboxId, nextIndex))
          ?.scrollIntoView?.({ block: "nearest" });
      });
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      onStopAddressEditing();
      return;
    }
    if (event.key === "Enter" || event.key === "Return") {
      event.preventDefault();
      commitAddress(selectedMatch?.destinationURL ?? event.currentTarget.value);
    }
  };

  const handleSelect = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const selectionStart = input.selectionStart ?? input.value.length;
    const selectionEnd = input.selectionEnd ?? selectionStart;
    if (controller.shouldPreventInlineAutocompleteOnNextChange()) return;
    if (!hasEditedAddressRef.current && input.value === browserStateUrl) return;
    if (
      controller.isAutocompleteSelection(
        input.value,
        selectionStart,
        selectionEnd,
      )
    ) {
      return;
    }
    hasEditedAddressRef.current = true;
    shouldKeepAddressSelectedRef.current = false;
    onAddressValueChange(input.value);
    startAutocomplete(input.value, selectionStart, selectionEnd);
  };

  const inputElement = (
    <input
      ref={addressInputRef}
      className={inputClassName}
      data-browser-sidebar-address-input="true"
      aria-activedescendant={activeDescendant}
      aria-autocomplete={autocompleteService == null ? undefined : "both"}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      role={autocompleteService == null ? undefined : "combobox"}
      value={inputValue}
      placeholder={placeholder}
      onFocus={onEnsureAddressEditing}
      onPointerDown={handlePointerDown}
      onChange={handleChange}
      onCompositionStart={handleCompositionStart}
      onCompositionEnd={handleCompositionEnd}
      onCut={handleCut}
      onPaste={handlePaste}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onSelect={handleSelect}
    />
  );

  const overlay = showSuggestions ? (
    <AnchoredOverlayLayer
      anchorRef={addressBarRef}
      constrainHeightToViewport={true}
      gap={0}
      isActive={true}
      placement="bottom"
      portalRoot="body"
    >
      <AddressSuggestionsListbox
        label={intl.formatMessage({
          id: "thread.browser.addressSuggestions",
          defaultMessage: "Address suggestions",
          description: "Accessible label for browser address bar suggestions",
        })}
        listboxId={listboxId}
        matches={matches}
        selectedIndex={selectedIndex}
        onSelect={(match) => {
          commitAddress(match.destinationURL);
        }}
      />
    </AnchoredOverlayLayer>
  ) : null;

  return (
    <>
      {inputElement}
      {overlay}
    </>
  );
}
