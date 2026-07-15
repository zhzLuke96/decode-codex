// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Floating browser sidebar comment + design-tweak overlay (preview, editor, and dispatcher).
import React, {
  Fragment,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip-b";
import { useIsDictationSupported } from "../utils/use-is-dictation-supported";
import { ImageAttachment } from "../image-side-panel/image-attachment";
import { useDictationKeyboard } from "../composer/use-dictation-keyboard";
import { useDictationShortcutLabel } from "../composer/composer-command-keymap";
import {
  areDesignDraftGroupsEqual,
  buildCommentDraft,
  buildDesignDraftFromEditor,
  isDesignDraftActive,
  parseScrubValue,
  type DesignDraftGroup,
  type DesignEditorState,
} from "./browser-comment-design-draft";
import {
  AtMentionAutocomplete,
  CommentSaveIcon,
  CommentSendIcon,
  ComposerEditor,
  DictationButton,
  DictationRecordingFooter,
  LOCAL_HOST_ID,
  ResetValueIcon,
  SkillMentionAutocomplete,
  appStoreScope,
  BrowserDesignTweaksEditor,
  createComposerController,
  dataTransferHasImages,
  designEditorPlacementHint,
  directSubmitPreferenceAtom,
  extractImageFilesFromDataTransfer,
  getLocalPathForFile,
  handleComposerSuggestionEvent,
  subscribeToEditorChanges,
  toastControllerToken,
  useAtMentionController,
  useComposerControllerCleanup,
  useConnectedApps,
  useDesignAdjustEntryEnabled,
  useDictation,
  useIsMac,
  useScopedQuery,
  useScopedStore,
  useScopedValue,
  useSkillMentionController,
  useSkills,
} from "../boundaries/onboarding-commons-externals.facade";
import {
  ADJUST_HINT_DURATION_MS,
  ATTACHMENT_ROW_TOP_3,
  ATTACHMENT_ROW_TOP_24,
  ATTACHMENT_TOP_PADDING,
  CARD_AREA_CLASS,
  COMMENT_SURFACE_STYLE_VARS,
  DESIGN_PROMPT_EXPANDED,
  DESIGN_PROMPT_SCROLL,
  DESIGN_STACK_CLASS,
  DRAG_MARGIN,
  FOOTER_CLASS,
  INPUT_ABSOLUTE_CLASS,
  INPUT_MAX_HEIGHT_180,
  INPUT_MAX_HEIGHT_FULL,
  INPUT_RIGHT_PADDING_52,
  MEASURE_SPAN_CLASS,
  PREVIEW_INNER_CLASS,
  PREVIEW_TEXT_CLASS,
  PROSE_CLASS,
  SCRUB_HIDE_DELAY_MS,
  TOP_TRAY_CLASS,
} from "./browser-comment-overlay-constants";
import {
  AddTooltipLabel,
  CommentDeleteIcon,
  CommentOverlaySurface,
  DesignAdjustIcon,
  SendTooltipLabel,
  ShortcutTooltipRow,
} from "./browser-comment-overlay-components";
import {
  computeLightDismissibility,
  countDesignAdjustments,
  isDraggableTarget,
  previewAlignmentClass,
  renderPreviewSegments,
  resolveBaselineDesignGroup,
  resolvePreviewText,
  shouldExpandComposer,
  shouldExpandDesignPrompt,
} from "./browser-comment-overlay-helpers";
import type {
  AttachedImage,
  BrowserCommentEditorProps,
  BrowserSidebarCommentOverlayProps,
  ScrubClone,
  SubmitPayload,
} from "./browser-comment-overlay-types";
import { buildBrowserCommentEditorInteractionHandlers } from "./browser-comment-editor-interactions";
import { useBrowserCommentEditorSubmitHandlers } from "./use-browser-comment-editor-submit-handlers";
import { BrowserCommentEditorView } from "./browser-comment-editor-view";
import { BrowserCommentPreview } from "./browser-comment-preview";

export function initBrowserSidebarCommentOverlayChunk(): void {}

export function BrowserSidebarCommentOverlay({
  allowImageAttachments = true,
  allowDirectSubmit = true,
  defaultCreateSubmitMode = "saved",
  defaultDesignEditorOpen = false,
  defaultExpandedSpacingGroups,
  inputAriaLabel,
  placeholder,
  session,
  showAdjustEntry = true,
  windowHeight,
  keyboardEventTarget,
  onSubmit,
  onDirectSubmit,
  onDesignChangeDelete,
  onDesignChangeUpdate,
  onDesignScrubPropertyChange,
  onTweaksEditorOpenChange,
  onDelete,
  onCancel,
  onEscape,
  onMounted,
  onBodyChange,
  onAttachmentPreviewOpenChange,
  onLightDismissibilityChange,
}: BrowserSidebarCommentOverlayProps) {
  if (session.surfaceMode === "preview") {
    return (
      <BrowserCommentPreview
        session={session}
        showAdjustEntry={showAdjustEntry}
        windowHeight={windowHeight}
        onMounted={onMounted}
      />
    );
  }
  return (
    <BrowserCommentEditor
      session={session}
      defaultDesignEditorOpen={defaultDesignEditorOpen}
      defaultExpandedSpacingGroups={defaultExpandedSpacingGroups}
      showAdjustEntry={showAdjustEntry}
      windowHeight={windowHeight}
      keyboardEventTarget={keyboardEventTarget}
      onSubmit={onSubmit}
      onDirectSubmit={onDirectSubmit}
      onDesignChangeDelete={onDesignChangeDelete}
      onDesignChangeUpdate={onDesignChangeUpdate}
      onDesignScrubPropertyChange={onDesignScrubPropertyChange}
      onTweaksEditorOpenChange={onTweaksEditorOpenChange}
      onDelete={onDelete}
      onCancel={onCancel}
      onEscape={onEscape}
      onMounted={onMounted}
      onBodyChange={onBodyChange}
      onAttachmentPreviewOpenChange={onAttachmentPreviewOpenChange}
      onLightDismissibilityChange={onLightDismissibilityChange}
      allowImageAttachments={allowImageAttachments}
      allowDirectSubmit={allowDirectSubmit}
      defaultCreateSubmitMode={defaultCreateSubmitMode}
      inputAriaLabel={inputAriaLabel}
      placeholder={placeholder}
    />
  );
}

function BrowserCommentEditor({
  session,
  windowHeight,
  defaultDesignEditorOpen = false,
  defaultExpandedSpacingGroups,
  showAdjustEntry = true,
  keyboardEventTarget,
  onSubmit,
  onDirectSubmit,
  onDesignChangeDelete,
  onDesignChangeUpdate,
  onDesignScrubPropertyChange,
  onTweaksEditorOpenChange,
  onDelete,
  onCancel,
  onEscape,
  onMounted,
  onBodyChange,
  onAttachmentPreviewOpenChange,
  onLightDismissibilityChange,
  allowImageAttachments = true,
  allowDirectSubmit,
  defaultCreateSubmitMode,
  inputAriaLabel,
  placeholder,
}: BrowserCommentEditorProps) {
  const store = useScopedStore(appStoreScope);
  const intl = useIntl();
  const initialBodyText = resolvePreviewText(session);
  const baselineFromSession = showAdjustEntry
    ? resolveBaselineDesignGroup(session)
    : null;
  const composer = useMemo(() => createComposerController(), []);
  useComposerControllerCleanup(
    useCallback(() => {
      if (!composer.view.isDestroyed) composer.destroy();
    }, [composer]),
  );

  const [bodyText, setBodyText] = useState(initialBodyText);
  const [attachedImages, setAttachedImages] = useState<AttachedImage[]>(
    () => session.attachedImages ?? [],
  );
  const [designEditorState, setDesignEditorState] =
    useState<DesignEditorState | null>(() =>
      showAdjustEntry
        ? (session.designEditorState ?? baselineFromSession ?? null)
        : null,
    );
  const baselineDesignGroupRef = useRef<DesignDraftGroup | null>(
    baselineFromSession ?? null,
  );
  const [isDesignEditorOpen, setIsDesignEditorOpen] = useState(
    () =>
      designEditorState != null &&
      (defaultDesignEditorOpen ||
        session.target.mode === "design" ||
        baselineFromSession != null),
  );
  const activeDesignEditorState = showAdjustEntry ? designEditorState : null;
  const isDesignEditorVisible = showAdjustEntry && isDesignEditorOpen;

  const [isAdjustEntryAnimating, setIsAdjustEntryAnimating] = useState(false);
  const [showAdjustHint, setShowAdjustHint] = useState(false);
  const [isComposerOverflowing, setIsComposerOverflowing] = useState(false);
  const [isPromptExpanded, setIsPromptExpanded] = useState(false);
  const [scrubClone, setScrubClone] = useState<ScrubClone | null>(null);
  const [isCardHiddenForScrub, setIsCardHiddenForScrub] = useState(false);
  const [, setIsAttachmentPreviewOpen] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const isAttachmentPreviewOpenRef = useRef(false);

  const handlePreviewOpenChange = (open: boolean) => {
    isAttachmentPreviewOpenRef.current = open;
    setIsAttachmentPreviewOpen(open);
    onAttachmentPreviewOpenChange?.(open);
  };
  const focusComposer = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    composer.focus();
  };
  const [isDragOver, setIsDragOver] = useState(false);
  const [isComposerFocused, setIsComposerFocused] = useState(false);
  const directSubmitPreference = useScopedValue(directSubmitPreferenceAtom);

  const bodyTextRef = useRef(initialBodyText);
  const attachedImagesRef = useRef<AttachedImage[]>(
    session.attachedImages ?? [],
  );
  const scrubContainerRef = useRef<HTMLDivElement | null>(null);
  const activeDesignEditorStateRef = useRef(activeDesignEditorState);
  activeDesignEditorStateRef.current = activeDesignEditorState;
  const cardRef = useRef<HTMLDivElement | null>(null);
  const promptShellRef = useRef<HTMLDivElement | null>(null);
  const measureSpanRef = useRef<HTMLSpanElement | null>(null);
  const appliedSessionIdRef = useRef<string | null>(null);
  const mountedSessionIdRef = useRef<string | null>(null);
  const lastMountedSizeRef = useRef<{ width: number; height: number } | null>(
    null,
  );
  const dragEnterCountRef = useRef(0);
  const adjustHintTimeoutRef = useRef<number | null>(null);
  const scrubHideTimeoutRef = useRef<number | null>(null);
  const dragStateRef = useRef<{
    baseLeft: number;
    baseTop: number;
    cardHeight: number;
    cardWidth: number;
    offsetX: number;
    offsetY: number;
    pointerId: number;
    startClientX: number;
    startClientY: number;
    viewportHeight: number;
    viewportWidth: number;
  } | null>(null);

  const { data: workspaceRootOptions } = useScopedQuery(
    "workspace-root-options",
    {
      params: { hostId: LOCAL_HOST_ID },
    },
  );
  const workspaceRoots = useMemo<string[] | undefined>(() => {
    if (workspaceRootOptions?.roots.length) return workspaceRootOptions.roots;
    if (session.cwd != null) return [session.cwd];
    return undefined;
  }, [session.cwd, workspaceRootOptions?.roots]);

  const atMention = useAtMentionController(composer);
  const skillMention = useSkillMentionController(composer);
  let activeMentionKind: "at" | "skill" | null = null;
  if (atMention.ui?.active === true) activeMentionKind = "at";
  else if (skillMention.ui?.active === true) activeMentionKind = "skill";

  const adjustEntryEnabled = useDesignAdjustEntryEnabled({
    canEditDesign: activeDesignEditorState != null,
    showAdjustEntry,
  });
  const isDesignSubmissionMode =
    isDesignEditorVisible && activeDesignEditorState != null;
  const isExpandedComposer =
    session.target.mode === "edit" ||
    isComposerOverflowing ||
    isDesignEditorVisible;
  const isEditMode = session.target.mode === "edit" && !isDesignEditorVisible;

  const { hasCommentText } = buildCommentDraft({
    baselineDesignGroup: baselineDesignGroupRef.current,
    commentText: bodyText,
    designEditorState: activeDesignEditorState,
    isDesignSubmissionMode,
  });
  const { designDraft } = buildCommentDraft({
    baselineDesignGroup: baselineDesignGroupRef.current,
    commentText: bodyText,
    designEditorState: activeDesignEditorState,
    isDesignSubmissionMode: activeDesignEditorState != null,
  });
  const isDesignDraftActiveState = isDesignDraftActive({
    baselineDesignGroup: baselineDesignGroupRef.current,
    designDraft,
    designEditorState: activeDesignEditorState,
    isDesignEditorOpen: isDesignEditorVisible,
  });

  const dictationAvailability = useIsDictationSupported(LOCAL_HOST_ID);
  const isDictationEnabled = dictationAvailability === true;
  const {
    isDictating,
    isTranscribing,
    canRetryDictation,
    recordingDurationMs,
    retryDictation,
    waveformCanvasRef,
    startDictation,
    stopDictation,
  } = useDictation({
    enabled: isDictationEnabled,
    getSurroundingText: () => composer.getText(),
    onTranscriptInsert: (text: string) => {
      if (!composer.view.isDestroyed) composer.appendText(text);
    },
    onTranscriptSend: (text: string) => {
      if (composer.view.isDestroyed) return;
      composer.appendText(text);
      const trimmed = composer.getText().trim();
      if (trimmed.length === 0) return;
      const payload: SubmitPayload = {
        body: trimmed,
        submitSource: "dictation",
        ...(attachedImagesRef.current.length === 0
          ? {}
          : { attachedImages: attachedImagesRef.current }),
      };
      if (
        session.target.mode === "create" &&
        defaultCreateSubmitMode === "direct"
      ) {
        onDirectSubmit(payload);
        return;
      }
      onSubmit(payload);
    },
    onStartError: () => {
      store.get(toastControllerToken).danger(
        intl.formatMessage({
          id: "composer.dictation.startError",
          defaultMessage: "Unable to start dictation",
          description: "Toast text shown when dictation could not be started",
        }),
      );
    },
    onTranscribeError: () => {
      store.get(toastControllerToken).danger(
        intl.formatMessage({
          id: "composer.dictation.transcribeError",
          defaultMessage: "Unable to transcribe audio",
          description:
            "Toast text shown when dictation audio transcription fails",
        }),
      );
    },
    onUnsupported: () => {
      store.get(toastControllerToken).danger(
        intl.formatMessage({
          id: "composer.dictation.unsupported",
          defaultMessage: "Dictation is not available on this device",
          description:
            "Toast text shown when dictation is not supported on the current device",
        }),
      );
    },
  });

  const hasAttachments = allowImageAttachments && attachedImages.length > 0;
  const showFooterRow = isExpandedComposer || isDictating || hasAttachments;
  const canShowAdjustHint =
    session.target.mode !== "edit" && !isComposerOverflowing && !hasAttachments;
  const isTallLayout =
    session.target.mode !== "edit" &&
    !isDesignEditorVisible &&
    (isExpandedComposer || hasAttachments);
  const isTallButNotExpanded = isTallLayout && !isExpandedComposer;
  const cardHeight = showFooterRow ? 120 : 44;
  const topTrayHeight = Math.min(Math.max(windowHeight - 120, 0), 88);
  const connectedApps = useConnectedApps();
  const { skills } = useSkills(workspaceRoots);

  const notifyLightDismissibility = useCallback(
    (
      text: string,
      images: AttachedImage[],
      designState: DesignEditorState | null = activeDesignEditorStateRef.current,
    ) => {
      onLightDismissibilityChange(
        computeLightDismissibility(
          session.target.mode,
          initialBodyText,
          text,
          session.attachedImages ?? [],
          images,
          baselineDesignGroupRef.current,
          designState,
        ),
      );
    },
    [
      onLightDismissibilityChange,
      session.attachedImages,
      initialBodyText,
      session.target.mode,
    ],
  );

  const updatePromptExpanded = useCallback(
    (text: string, promptShell = promptShellRef.current) => {
      const expanded =
        isDesignEditorVisible &&
        shouldExpandDesignPrompt(text, measureSpanRef.current, promptShell);
      setIsPromptExpanded((previous) =>
        previous === expanded ? previous : expanded,
      );
    },
    [isDesignEditorVisible],
  );

  const setPromptShellRef = useCallback(
    (node: HTMLDivElement | null) => {
      promptShellRef.current = node;
      if (node == null) {
        setIsPromptExpanded(false);
        return;
      }
      updatePromptExpanded(bodyTextRef.current, node);
    },
    [updatePromptExpanded],
  );

  const handleEditorChange = useCallback(() => {
    const text = composer.getText();
    if (bodyTextRef.current === text) return;
    bodyTextRef.current = text;
    setBodyText(text);
    onBodyChange?.(text);
    setIsComposerOverflowing(
      session.target.mode !== "edit" &&
        shouldExpandComposer(
          text,
          composer.view.state.doc.childCount > 1,
          measureSpanRef.current,
          cardRef.current,
        ),
    );
    updatePromptExpanded(text);
    notifyLightDismissibility(text, attachedImagesRef.current);
    const designState = activeDesignEditorStateRef.current;
    if (isDesignSubmissionMode && designState != null) {
      onDesignChangeUpdate?.(
        buildDesignDraftFromEditor(
          designState,
          baselineDesignGroupRef.current,
          text.trim(),
        ),
      );
    }
  }, [
    composer,
    isDesignSubmissionMode,
    onBodyChange,
    onDesignChangeUpdate,
    session.target.mode,
    updatePromptExpanded,
    notifyLightDismissibility,
  ]);
  useEffect(
    () => subscribeToEditorChanges(composer.view, handleEditorChange),
    [composer, handleEditorChange],
  );
  useEffect(() => {
    composer.syncMentionMetadata({ skills, apps: connectedApps });
  }, [connectedApps, skills, composer]);

  useLayoutEffect(() => {
    if (appliedSessionIdRef.current === session.sessionId) return;
    appliedSessionIdRef.current = session.sessionId;
    const images = session.attachedImages ?? [];
    composer.setPromptText(initialBodyText);
    bodyTextRef.current = initialBodyText;
    attachedImagesRef.current = images;
    onBodyChange?.(initialBodyText);
    setBodyText(initialBodyText);
    setAttachedImages(images);
    setShowAdjustHint(false);
    setIsAdjustEntryAnimating(false);
    mountedSessionIdRef.current = null;
    lastMountedSizeRef.current = null;
    setIsComposerOverflowing(
      session.target.mode !== "edit" &&
        shouldExpandComposer(
          initialBodyText,
          composer.view.state.doc.childCount > 1,
          measureSpanRef.current,
          cardRef.current,
        ),
    );
    notifyLightDismissibility(initialBodyText, images);
  }, [
    composer,
    session.attachedImages,
    initialBodyText,
    session.sessionId,
    session.target.mode,
    onBodyChange,
    notifyLightDismissibility,
  ]);

  useLayoutEffect(() => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect == null) return;
    const size = {
      width: Math.ceil(rect.width),
      height: Math.ceil(rect.height),
    };
    const last = lastMountedSizeRef.current;
    if (
      mountedSessionIdRef.current === session.sessionId &&
      last?.width === size.width &&
      last?.height === size.height
    ) {
      return;
    }
    mountedSessionIdRef.current = session.sessionId;
    lastMountedSizeRef.current = size;
    onMounted(
      session.sessionId,
      size,
      isDesignEditorVisible ? designEditorPlacementHint : undefined,
    );
  }, [
    attachedImages,
    bodyText,
    isDesignEditorVisible,
    isComposerOverflowing,
    isPromptExpanded,
    onMounted,
    session.sessionId,
    cardHeight,
    windowHeight,
  ]);

  useEffect(
    () => () => {
      if (adjustHintTimeoutRef.current != null) {
        globalThis.clearTimeout(adjustHintTimeoutRef.current);
      }
      if (scrubHideTimeoutRef.current != null) {
        globalThis.clearTimeout(scrubHideTimeoutRef.current);
      }
    },
    [],
  );

  const refocusComposer = React.useEffectEvent(() => {
    if (isAttachmentPreviewOpenRef.current) return;
    const dom = composer.view.dom;
    const activeElement = dom.ownerDocument.activeElement;
    const form = dom.closest("form");
    if (
      !(
        activeElement != null &&
        form?.contains(activeElement) &&
        !dom.contains(activeElement)
      )
    ) {
      composer.focus();
    }
  });
  useEffect(() => {
    if (keyboardEventTarget == null) return;
    const onFocus = () => {
      keyboardEventTarget.requestAnimationFrame(() => {
        refocusComposer();
      });
    };
    keyboardEventTarget.addEventListener("focus", onFocus);
    if (keyboardEventTarget.document.hasFocus()) onFocus();
    return () => {
      keyboardEventTarget.removeEventListener("focus", onFocus);
    };
  }, [keyboardEventTarget]);

  const commentLabel = intl.formatMessage({
    id: "browserSidebarCommentOverlay.comment",
    defaultMessage: "Comment",
    description: "Primary action for creating a new browser comment",
  });
  const addTweaksLabel = intl.formatMessage({
    id: "browserSidebarCommentOverlay.addTweaks",
    defaultMessage: "Add",
    description: "Primary action for adding browser tweaks",
  });
  const deleteLabel = intl.formatMessage({
    id: "browserSidebarCommentOverlay.delete",
    defaultMessage: "Delete",
    description: "Delete action for the browser comment overlay",
  });
  const adjustLabel = intl.formatMessage({
    id: "browserSidebarCommentOverlay.tweak",
    defaultMessage: "Adjust",
    description:
      "Accessible label for opening browser design adjustment controls from the comment editor",
  });
  const placeholderText =
    placeholder ??
    (isDesignSubmissionMode
      ? intl.formatMessage({
          id: "browserSidebarCommentOverlay.tweaksPlaceholder",
          defaultMessage: "Describe these changes...",
          description:
            "Placeholder text for the browser tweaks editor comment field",
        })
      : intl.formatMessage({
          id: "browserSidebarCommentOverlay.placeholder",
          defaultMessage: "Add a comment…",
          description: "Placeholder text for the browser comment editor",
        }));

  const existingCommentId =
    session.target.mode === "edit" ? (session.target.commentId ?? null) : null;
  const isDictationDefaultOn =
    dictationAvailability == null || dictationAvailability;
  const canSubmitEmpty =
    existingCommentId == null &&
    !isExpandedComposer &&
    !hasCommentText &&
    dictationAvailability == null;
  const showDictationStart =
    !isDictating &&
    (isDictationDefaultOn || canSubmitEmpty) &&
    (isExpandedComposer || !hasCommentText);
  const showSubmitButton =
    !canSubmitEmpty &&
    !isDictating &&
    (isExpandedComposer || hasCommentText || !isDictationEnabled);
  const canSubmit = isDesignDraftActiveState
    ? baselineDesignGroupRef.current == null
      ? designDraft != null || hasCommentText
      : !areDesignDraftGroupsEqual(designDraft, baselineDesignGroupRef.current)
    : hasCommentText;
  const dictationShortcutLabel = useDictationShortcutLabel();
  const isMac = useIsMac();
  const tooltipPortalContainer = keyboardEventTarget?.document.body ?? null;
  const shouldDirectSubmit =
    existingCommentId == null &&
    allowDirectSubmit &&
    isComposerFocused &&
    directSubmitPreference;
  const enterLabel = isMac ? "⏎" : "Enter";
  const cmdEnterLabel = isMac ? "⌘⏎" : "Ctrl+Enter";
  const submitMode = isDesignDraftActiveState
    ? "saved"
    : allowDirectSubmit
      ? defaultCreateSubmitMode
      : "saved";
  const isDirectIconState =
    submitMode === "direct" ? !shouldDirectSubmit : shouldDirectSubmit;
  const queuedBaseline =
    baselineDesignGroupRef.current?.status === "queued"
      ? baselineDesignGroupRef.current
      : null;
  const showFooterActions =
    existingCommentId != null ||
    isDesignEditorVisible ||
    queuedBaseline != null;
  const footerActionsVisible =
    isExpandedComposer && !isDictating && showFooterActions;
  const scrubCloneRows =
    scrubClone == null || designEditorState == null
      ? null
      : scrubClone.rows.flatMap((row) => {
          const value = parseScrubValue(
            designEditorState.declarations,
            row.property,
          );
          return value == null ? [] : [{ row, value }];
        });

  const { handleAddImages, submitComment, primarySubmit, secondarySubmit } =
    useBrowserCommentEditorSubmitHandlers({
      activeDesignEditorStateRef,
      allowImageAttachments,
      attachedImagesRef,
      baselineDesignGroupRef,
      bodyTextRef,
      buildCommentDraft,
      composer,
      getLocalPathForFile,
      isDesignDraftActive,
      isDesignEditorVisible,
      notifyLightDismissibility,
      onDesignChangeDelete,
      onDirectSubmit,
      onSubmit,
      setAttachedImages,
      submitMode,
    });

  useDictationKeyboard({
    enabled: isDictationEnabled && existingCommentId == null,
    isDictating,
    isTranscribing,
    startDictation,
    stopDictation,
    keyboardEventTarget,
    shouldHandleDictation: () => isComposerFocused,
  });

  useEffect(() => {
    if (keyboardEventTarget == null || existingCommentId != null) return;
    const updateFocus = () => {
      const active = keyboardEventTarget.document.activeElement;
      setIsComposerFocused(
        active != null && composer.view.dom.contains(active),
      );
    };
    const onFocusChange = () => {
      keyboardEventTarget.requestAnimationFrame(updateFocus);
    };
    const onBlur = () => {
      setIsComposerFocused(false);
    };
    updateFocus();
    keyboardEventTarget.document.addEventListener("focusin", onFocusChange);
    keyboardEventTarget.document.addEventListener("focusout", onFocusChange);
    keyboardEventTarget.addEventListener("blur", onBlur);
    return () => {
      keyboardEventTarget.document.removeEventListener(
        "focusin",
        onFocusChange,
      );
      keyboardEventTarget.document.removeEventListener(
        "focusout",
        onFocusChange,
      );
      keyboardEventTarget.removeEventListener("blur", onBlur);
    };
  }, [composer, existingCommentId, keyboardEventTarget]);

  const {
    handleKeyDownCapture,
    handleFormMouseDown,
    resetDragCounter,
    toggleDesignEditor,
    handleDesignEditorUpdate,
    handleScrubActiveChange,
    handleSuggestion,
    handleCardPointerDown,
    handleCardPointerMove,
    handleCardPointerEnd,
  } = buildBrowserCommentEditorInteractionHandlers({
    ADJUST_HINT_DURATION_MS,
    DRAG_MARGIN,
    SCRUB_HIDE_DELAY_MS,
    activeDesignEditorStateRef,
    allowDirectSubmit,
    atMention,
    attachedImagesRef,
    baselineDesignGroupRef,
    bodyTextRef,
    buildDesignDraftFromEditor,
    canShowAdjustHint,
    cardRef,
    composer,
    dragEnterCountRef,
    dragOffset,
    dragStateRef,
    existingCommentId,
    handleComposerSuggestionEvent,
    isAdjustEntryAnimating,
    isComposerFocused,
    isDesignEditorVisible,
    isDesignSubmissionMode,
    isDraggableTarget,
    notifyLightDismissibility,
    onDesignChangeUpdate,
    onDesignScrubPropertyChange,
    onEscape,
    onTweaksEditorOpenChange,
    secondarySubmit,
    setDesignEditorState,
    setDragOffset,
    setIsAdjustEntryAnimating,
    setIsCardHiddenForScrub,
    setIsDesignEditorOpen,
    setIsDragOver,
    setIsPromptExpanded,
    setScrubClone,
    setShowAdjustHint,
    showAdjustEntry,
    showAdjustHint,
    skillMention,
    submitComment,
    scrubContainerRef,
    scrubHideTimeoutRef,
    adjustHintTimeoutRef,
  });

  return (
    <BrowserCommentEditorView
      context={{
        ATTACHMENT_ROW_TOP_3,
        ATTACHMENT_ROW_TOP_24,
        ATTACHMENT_TOP_PADDING,
        AtMentionAutocomplete,
        BrowserDesignTweaksEditor,
        Button,
        CARD_AREA_CLASS,
        COMMENT_SURFACE_STYLE_VARS,
        AddTooltipLabel,
        CommentOverlaySurface,
        CommentDeleteIcon,
        CommentSaveIcon,
        CommentSendIcon,
        ComposerEditor,
        DESIGN_PROMPT_EXPANDED,
        DESIGN_PROMPT_SCROLL,
        DESIGN_STACK_CLASS,
        DesignAdjustIcon,
        DictationButton,
        DictationRecordingFooter,
        FOOTER_CLASS,
        FormattedMessage,
        Fragment,
        INPUT_ABSOLUTE_CLASS,
        INPUT_MAX_HEIGHT_180,
        INPUT_MAX_HEIGHT_FULL,
        INPUT_RIGHT_PADDING_52,
        ImageAttachment,
        LOCAL_HOST_ID,
        MEASURE_SPAN_CLASS,
        PROSE_CLASS,
        ResetValueIcon,
        SendTooltipLabel,
        ShortcutTooltipRow,
        SkillMentionAutocomplete,
        TOP_TRAY_CLASS,
        Tooltip,
        activeDesignEditorState,
        activeMentionKind,
        addTweaksLabel,
        adjustEntryEnabled,
        adjustLabel,
        allowDirectSubmit,
        allowImageAttachments,
        atMention,
        attachedImages,
        attachedImagesRef,
        bodyText,
        bodyTextRef,
        canRetryDictation,
        canSubmit,
        canSubmitEmpty,
        cardHeight,
        cardRef,
        clsx,
        cmdEnterLabel,
        commentLabel,
        composer,
        defaultExpandedSpacingGroups,
        deleteLabel,
        dataTransferHasImages,
        dictationShortcutLabel,
        directSubmitPreference,
        dragEnterCountRef,
        dragOffset,
        enterLabel,
        existingCommentId,
        extractImageFilesFromDataTransfer,
        focusComposer,
        footerActionsVisible,
        handleAddImages,
        handleCardPointerDown,
        handleCardPointerEnd,
        handleCardPointerMove,
        handleDesignEditorUpdate,
        handleFormMouseDown,
        handleKeyDownCapture,
        handlePreviewOpenChange,
        handleScrubActiveChange,
        handleSuggestion,
        hasAttachments,
        inputAriaLabel,
        isAdjustEntryAnimating,
        isCardHiddenForScrub,
        isDesignEditorVisible,
        isDesignSubmissionMode,
        isDictating,
        isDictationDefaultOn,
        isDirectIconState,
        isDragOver,
        isEditMode,
        isExpandedComposer,
        isPromptExpanded,
        isTallButNotExpanded,
        isTallLayout,
        isTranscribing,
        keyboardEventTarget,
        measureSpanRef,
        notifyLightDismissibility,
        onCancel,
        onDelete,
        onDesignChangeDelete,
        placeholderText,
        primarySubmit,
        queuedBaseline,
        recordingDurationMs,
        resetDragCounter,
        retryDictation,
        scrubClone,
        scrubCloneRows,
        scrubContainerRef,
        secondarySubmit,
        session,
        setAttachedImages,
        setIsDragOver,
        setPromptShellRef,
        shouldDirectSubmit,
        showAdjustHint,
        showDictationStart,
        showFooterActions,
        showFooterRow,
        showSubmitButton,
        skillMention,
        startDictation,
        stopDictation,
        submitComment,
        submitMode,
        toggleDesignEditor,
        tooltipPortalContainer,
        topTrayHeight,
        waveformCanvasRef,
        windowHeight,
        workspaceRoots,
      }}
    />
  );
}
