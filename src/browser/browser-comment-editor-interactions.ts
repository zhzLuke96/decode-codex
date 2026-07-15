// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Interaction handler assembly for the browser comment editor.

import React from "react";

export function buildBrowserCommentEditorInteractionHandlers(
  context: Record<string, any>,
) {
  const {
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
  } = context;
  const handleKeyDownCapture = (
    event: React.KeyboardEvent<HTMLFormElement>,
  ) => {
    const view = event.currentTarget.ownerDocument.defaultView;
    const designInput =
      view != null &&
      (event.target instanceof view.HTMLInputElement ||
        event.target instanceof view.HTMLTextAreaElement) &&
      event.target.dataset.browserSidebarDesignContentInput === "true"
        ? event.target
        : null;
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      if (designInput) {
        designInput.blur();
        return;
      }
      onEscape();
      return;
    }
    if (
      isDesignSubmissionMode &&
      event.key === "Enter" &&
      !event.altKey &&
      !event.shiftKey &&
      (event.metaKey || event.ctrlKey)
    ) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    const dom = composer.view.dom;
    const domView = dom.ownerDocument.defaultView;
    const targetInComposer =
      domView != null &&
      event.target instanceof domView.Node &&
      dom.contains(event.target);
    if (
      existingCommentId == null &&
      !isDesignSubmissionMode &&
      (isComposerFocused || targetInComposer) &&
      event.key === "Enter" &&
      !event.altKey &&
      !event.shiftKey &&
      (event.metaKey || event.ctrlKey)
    ) {
      event.preventDefault();
      event.stopPropagation();
      if (!allowDirectSubmit) {
        submitComment("keyboard");
        return;
      }
      secondarySubmit("keyboard");
    }
  };

  const handleFormMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const dom = composer.view.dom;
    const view = dom.ownerDocument.defaultView;
    if (
      view != null &&
      event.target instanceof view.Node &&
      !dom.contains(event.target)
    ) {
      event.preventDefault();
      dom.focus();
    }
  };

  const resetDragCounter = () => {
    dragEnterCountRef.current = 0;
    setIsDragOver(false);
  };
  const clearAdjustHintTimeout = () => {
    if (adjustHintTimeoutRef.current != null) {
      globalThis.clearTimeout(adjustHintTimeoutRef.current);
      adjustHintTimeoutRef.current = null;
    }
  };
  const clearScrubHideTimeout = () => {
    if (scrubHideTimeoutRef.current != null) {
      globalThis.clearTimeout(scrubHideTimeoutRef.current);
      scrubHideTimeoutRef.current = null;
    }
  };
  const openDesignEditor = () => {
    if (!showAdjustEntry) return;
    clearAdjustHintTimeout();
    setShowAdjustHint(false);
    setIsDesignEditorOpen(true);
    onTweaksEditorOpenChange?.(true);
  };
  const closeDesignEditor = () => {
    clearAdjustHintTimeout();
    setIsDesignEditorOpen(false);
    setIsPromptExpanded(false);
    onTweaksEditorOpenChange?.(false);
    setIsAdjustEntryAnimating(false);
    if (!canShowAdjustHint) {
      setShowAdjustHint(false);
      return;
    }
    setShowAdjustHint(true);
    adjustHintTimeoutRef.current = globalThis.setTimeout(() => {
      setShowAdjustHint(false);
      adjustHintTimeoutRef.current = null;
    }, ADJUST_HINT_DURATION_MS);
  };
  const toggleDesignEditor = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDesignEditorVisible) {
      closeDesignEditor();
      return;
    }
    if (isAdjustEntryAnimating || showAdjustHint) return;
    clearAdjustHintTimeout();
    setShowAdjustHint(false);
    const view = event.currentTarget.ownerDocument.defaultView;
    if (
      typeof view?.matchMedia === "function" &&
      view.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      openDesignEditor();
      return;
    }
    setIsAdjustEntryAnimating(true);
    openDesignEditor();
    globalThis.setTimeout(() => {
      setIsAdjustEntryAnimating(false);
    }, ADJUST_HINT_DURATION_MS);
  };

  const handleDesignEditorUpdate = (state: DesignEditorState) => {
    const draft = buildDesignDraftFromEditor(
      state,
      baselineDesignGroupRef.current,
      bodyTextRef.current.trim(),
    );
    activeDesignEditorStateRef.current = state;
    setDesignEditorState(state);
    notifyLightDismissibility(
      bodyTextRef.current,
      attachedImagesRef.current,
      state,
    );
    onDesignChangeUpdate?.(draft);
  };

  const handleScrubActiveChange = (
    property: string | null,
    element: HTMLElement | null,
  ) => {
    onDesignScrubPropertyChange?.(property);
    const containerRect = scrubContainerRef.current?.getBoundingClientRect();
    if (property == null) {
      clearScrubHideTimeout();
      setIsCardHiddenForScrub(false);
      scrubHideTimeoutRef.current = globalThis.setTimeout(() => {
        setScrubClone(null);
        scrubHideTimeoutRef.current = null;
      }, SCRUB_HIDE_DELAY_MS);
      return;
    }
    clearScrubHideTimeout();
    if (element == null || containerRect == null) {
      setIsCardHiddenForScrub(false);
      setScrubClone(null);
      return;
    }
    const valueCell = element.closest<HTMLElement>(
      "[data-browser-sidebar-design-scrub-value-cell]",
    );
    if (valueCell == null) {
      setIsCardHiddenForScrub(false);
      setScrubClone(null);
      return;
    }
    const peerProperty =
      valueCell.dataset.browserSidebarDesignScrubPeerProperty;
    const peerCell =
      peerProperty == null
        ? null
        : (Array.from(
            cardRef.current?.querySelectorAll<HTMLElement>(
              "[data-browser-sidebar-design-scrub-property]",
            ) ?? [],
          ).find(
            (node) =>
              node.dataset.browserSidebarDesignScrubProperty === peerProperty,
          ) ?? null);
    const cells =
      peerCell == null || peerCell === valueCell
        ? [valueCell]
        : [valueCell, peerCell];
    const measuredRows = cells.flatMap((cell) => {
      const labelNode =
        cell.parentElement?.querySelector<HTMLElement>(
          "[data-browser-sidebar-design-scrub-label]",
        ) ?? null;
      const controlNode = cell.querySelector("input")?.parentElement ?? null;
      const resetNode = cell.querySelector("button");
      const cellProperty =
        cell.dataset.browserSidebarDesignScrubProperty ?? property;
      const labelRect = labelNode?.getBoundingClientRect();
      const controlRect = controlNode?.getBoundingClientRect();
      const resetRect = resetNode?.getBoundingClientRect();
      const cellRect = cell.getBoundingClientRect();
      const label =
        (cell === valueCell
          ? element.getAttribute("aria-label")?.trim()
          : null) ??
        labelNode?.dataset.browserSidebarDesignScrubCloneLabel ??
        labelNode?.textContent?.trim();
      if (
        labelRect == null ||
        controlRect == null ||
        label == null ||
        label.length === 0
      ) {
        return [];
      }
      return [
        {
          controlRect,
          label,
          labelRect,
          property: cellProperty,
          resetRect,
          rowBottom: Math.max(
            labelRect.bottom,
            cellRect.bottom,
            resetRect?.bottom ?? -Infinity,
          ),
          rowLeft: Math.min(
            labelRect.left,
            cellRect.left,
            resetRect?.left ?? Infinity,
          ),
          rowRight: Math.max(
            labelRect.right,
            cellRect.right,
            resetRect?.right ?? -Infinity,
          ),
          rowTop: Math.min(
            labelRect.top,
            cellRect.top,
            resetRect?.top ?? Infinity,
          ),
        },
      ];
    });
    if (measuredRows.length !== cells.length) {
      setIsCardHiddenForScrub(false);
      setScrubClone(null);
      return;
    }
    const left = Math.min(...measuredRows.map((row) => row.rowLeft));
    const right = Math.max(...measuredRows.map((row) => row.rowRight));
    const top = Math.min(...measuredRows.map((row) => row.rowTop));
    const bottom = Math.max(...measuredRows.map((row) => row.rowBottom));
    setIsCardHiddenForScrub(true);
    setScrubClone({
      rect: {
        height: bottom - top,
        left: left - containerRect.left,
        top: top - containerRect.top,
        width: right - left,
      },
      rows: measuredRows.map((row) => ({
        controlRect: {
          height: row.controlRect.height,
          left: row.controlRect.left - left,
          top: row.controlRect.top - top,
          width: row.controlRect.width,
        },
        label: row.label,
        labelRect: {
          height: row.labelRect.height,
          left: row.labelRect.left - left,
          top: row.labelRect.top - top,
          width: row.labelRect.width,
        },
        property: row.property,
        resetRect:
          row.resetRect == null
            ? undefined
            : {
                height: row.resetRect.height,
                left: row.resetRect.left - left,
                top: row.resetRect.top - top,
                width: row.resetRect.width,
              },
      })),
    });
  };

  const handleSuggestion = (event: unknown) => {
    handleComposerSuggestionEvent(event, {
      onAtMention: atMention.handleMentionEvent,
      onSkillMention: skillMention.handleMentionEvent,
    });
  };

  const handleCardPointerDown = (event: React.PointerEvent<HTMLElement>) => {
    if (
      !isDesignEditorVisible ||
      !event.isPrimary ||
      event.button !== 0 ||
      cardRef.current == null ||
      !isDraggableTarget(event)
    ) {
      return;
    }
    const rect = cardRef.current.getBoundingClientRect();
    const view = event.currentTarget.ownerDocument.defaultView;
    dragStateRef.current = {
      baseLeft: rect.left - dragOffset.x,
      baseTop: rect.top - dragOffset.y,
      cardHeight: rect.height,
      cardWidth: rect.width,
      offsetX: dragOffset.x,
      offsetY: dragOffset.y,
      pointerId: event.pointerId,
      startClientX: event.clientX,
      startClientY: event.clientY,
      viewportHeight: view?.innerHeight ?? Infinity,
      viewportWidth: view?.innerWidth ?? Infinity,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const handleCardPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const drag = dragStateRef.current;
    if (drag == null || drag.pointerId !== event.pointerId) return;
    const nextX = drag.offsetX + event.clientX - drag.startClientX;
    const nextY = drag.offsetY + event.clientY - drag.startClientY;
    const minX = DRAG_MARGIN - drag.baseLeft;
    const maxX =
      drag.viewportWidth - drag.cardWidth - DRAG_MARGIN - drag.baseLeft;
    const minY = DRAG_MARGIN - drag.baseTop;
    const maxY =
      drag.viewportHeight - drag.cardHeight - DRAG_MARGIN - drag.baseTop;
    event.preventDefault();
    setDragOffset({
      x: maxX < minX ? nextX : Math.min(Math.max(nextX, minX), maxX),
      y: maxY < minY ? nextY : Math.min(Math.max(nextY, minY), maxY),
    });
  };
  const handleCardPointerEnd = (event: React.PointerEvent<HTMLElement>) => {
    if (dragStateRef.current?.pointerId === event.pointerId) {
      dragStateRef.current = null;
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return {
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
  };
}
