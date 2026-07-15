// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Render-only view for the browser comment editor.

export function BrowserCommentEditorView({
  context,
}: {
  context: Record<string, any>;
}) {
  const {
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
  } = context;
  const adjustToggle = adjustEntryEnabled ? (
    <Button
      aria-label={adjustLabel}
      data-browser-sidebar-design-editor-toggle={true}
      className="absolute top-2 left-3 z-10"
      color={isDesignEditorVisible ? "secondary" : "ghost"}
      size="composer"
      title={adjustLabel}
      type="button"
      uniform
      onClick={toggleDesignEditor}
    >
      <span
        data-browser-sidebar-design-editor-entry-enter={
          !isDesignEditorVisible && showAdjustHint ? "" : undefined
        }
        className="flex items-center justify-center"
      >
        <DesignAdjustIcon
          className={clsx(
            "icon-sm origin-center",
            !isDesignEditorVisible &&
              (showAdjustHint
                ? "browser-sidebar-design-editor-entry-enter"
                : clsx(
                    "transition-[opacity,transform] duration-[180ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none",
                    isAdjustEntryAnimating
                      ? "-translate-x-1 -rotate-12 scale-[0.82] opacity-0"
                      : "translate-x-0 rotate-0 scale-100 opacity-100",
                  )),
          )}
        />
      </span>
    </Button>
  ) : null;

  const attachmentRow = hasAttachments ? (
    <div
      data-browser-comment-editor-attachment-row={true}
      className={clsx(
        "absolute right-3 flex gap-1.5 overflow-x-auto pb-1",
        ATTACHMENT_ROW_TOP_3,
        adjustEntryEnabled ? "left-12" : "left-3",
      )}
    >
      {attachedImages.map((image, index) => (
        <ImageAttachment
          key={`${image.filename ?? "image"}-${index}`}
          src={image.dataUrl}
          filename={image.filename}
          previewPortalContainer={keyboardEventTarget?.document.body ?? null}
          onPreviewCloseAutoFocus={focusComposer}
          onPreviewOpenChange={handlePreviewOpenChange}
          onRemove={() => {
            const next = attachedImagesRef.current.filter(
              (_item, itemIndex) => itemIndex !== index,
            );
            attachedImagesRef.current = next;
            setAttachedImages(next);
            notifyLightDismissibility(bodyTextRef.current, next);
          }}
        />
      ))}
    </div>
  ) : null;

  const composerBody =
    isDesignEditorVisible && activeDesignEditorState != null ? (
      <div
        data-browser-comment-design-editor-stack={true}
        className={clsx(
          DESIGN_STACK_CLASS,
          hasAttachments ? ATTACHMENT_TOP_PADDING : "pt-2",
          isPromptExpanded ? "gap-0" : "gap-2",
        )}
        onPointerCancel={handleCardPointerEnd}
        onPointerDown={handleCardPointerDown}
        onPointerMove={handleCardPointerMove}
        onPointerUp={handleCardPointerEnd}
      >
        <div
          ref={setPromptShellRef}
          data-browser-comment-design-prompt-shell={true}
          className={clsx(
            "translate-y-0.5 transition-[height,min-height,max-height] duration-[140ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none",
            adjustEntryEnabled && "ml-8",
            isPromptExpanded
              ? DESIGN_PROMPT_EXPANDED
              : "h-7 min-h-0 overflow-hidden",
          )}
        >
          <div className={clsx("min-h-0", !isPromptExpanded && "h-full")}>
            <ComposerEditor
              className={clsx(
                PROSE_CLASS,
                isPromptExpanded && DESIGN_PROMPT_SCROLL,
                !isPromptExpanded &&
                  "!overflow-hidden [&_.ProseMirror]:h-6 [&_.ProseMirror]:!overflow-hidden [&_.ProseMirror]:whitespace-nowrap",
              )}
              composerController={composer}
              ariaLabel={inputAriaLabel}
              minHeight="1.5rem"
              placeholder={placeholderText}
              onSuggestionHandler={handleSuggestion}
              onSubmit={() => primarySubmit("keyboard")}
            />
          </div>
        </div>
        <BrowserDesignTweaksEditor
          key={activeDesignEditorState.id}
          defaultExpandedSpacingGroups={defaultExpandedSpacingGroups}
          dropdownPortalContainer={keyboardEventTarget?.document.body ?? null}
          editorState={activeDesignEditorState}
          isEditable
          onDragHandlePointerCancel={handleCardPointerEnd}
          onDragHandlePointerDown={handleCardPointerDown}
          onDragHandlePointerMove={handleCardPointerMove}
          onDragHandlePointerUp={handleCardPointerEnd}
          onScrubActiveChange={handleScrubActiveChange}
          onUpdate={handleDesignEditorUpdate}
        />
      </div>
    ) : (
      <div
        data-browser-comment-editor-input-shell={true}
        className={clsx(
          isTallLayout
            ? clsx(
                "min-w-0",
                isExpandedComposer ? "pb-[52px]" : "pb-2",
                adjustEntryEnabled && !isAdjustEntryAnimating
                  ? isTallButNotExpanded
                    ? clsx("pl-12", INPUT_RIGHT_PADDING_52)
                    : "pl-12 pr-4"
                  : isTallButNotExpanded
                    ? clsx("pl-4", INPUT_RIGHT_PADDING_52)
                    : "px-4",
                hasAttachments ? ATTACHMENT_TOP_PADDING : "pt-2",
              )
            : clsx(
                INPUT_ABSOLUTE_CLASS,
                adjustEntryEnabled && !isAdjustEntryAnimating
                  ? "left-12"
                  : "left-4",
                hasAttachments ? ATTACHMENT_ROW_TOP_24 : "top-2",
                showFooterRow
                  ? adjustEntryEnabled && !isAdjustEntryAnimating
                    ? "bottom-[52px] w-[calc(100%-64px)]"
                    : "bottom-[52px] w-[calc(100%-32px)]"
                  : adjustEntryEnabled && !isAdjustEntryAnimating
                    ? "bottom-2 w-[calc(100%-92px)]"
                    : "bottom-2 w-[calc(100%-60px)]",
              ),
        )}
        onMouseDown={handleFormMouseDown}
      >
        <div
          className={clsx(
            isTallLayout
              ? "min-h-0 translate-y-0.5"
              : "h-full min-h-0 translate-y-0.5",
          )}
        >
          <ComposerEditor
            className={clsx(
              PROSE_CLASS,
              isTallLayout && INPUT_MAX_HEIGHT_180,
              isEditMode && INPUT_MAX_HEIGHT_FULL,
              !isExpandedComposer &&
                !hasAttachments &&
                "!overflow-hidden [&_.ProseMirror]:h-6 [&_.ProseMirror]:!overflow-hidden [&_.ProseMirror]:whitespace-nowrap",
            )}
            composerController={composer}
            ariaLabel={inputAriaLabel}
            minHeight="1.5rem"
            placeholder={placeholderText}
            onSuggestionHandler={handleSuggestion}
            onSubmit={
              existingCommentId == null
                ? () => primarySubmit("keyboard")
                : () => submitComment("keyboard")
            }
          />
        </div>
      </div>
    );

  const footerActions = (
    <div
      data-browser-comment-editor-footer-actions={true}
      aria-hidden={!footerActionsVisible}
      className={clsx(
        FOOTER_CLASS,
        existingCommentId == null ? "justify-start gap-1.5" : "justify-between",
        footerActionsVisible
          ? "scale-100 opacity-100"
          : "invisible pointer-events-none scale-95 opacity-0",
      )}
    >
      {existingCommentId == null ? (
        queuedBaseline != null && onDesignChangeDelete != null ? (
          <Button
            aria-label={deleteLabel}
            color="ghostMuted"
            size="composer"
            onClick={() => {
              onDesignChangeDelete(queuedBaseline.id);
            }}
            uniform
          >
            <CommentDeleteIcon className="icon-sm" />
          </Button>
        ) : null
      ) : (
        <Button
          aria-label={deleteLabel}
          color="ghostMuted"
          size="composer"
          onClick={() => {
            onDelete(existingCommentId);
          }}
          uniform
        >
          <CommentDeleteIcon className="icon-sm" />
        </Button>
      )}
      <div className="flex items-center gap-1.5">
        {showFooterActions ? (
          <Button
            color="outline"
            size="composer"
            tabIndex={footerActionsVisible ? undefined : -1}
            onClick={() => {
              onCancel();
            }}
          >
            <FormattedMessage
              id="browserSidebarCommentOverlay.cancel"
              defaultMessage="Cancel"
              description="Cancel action for the browser comment overlay"
            />
          </Button>
        ) : null}
        {existingCommentId == null ? null : (
          <Button
            color="primary"
            disabled={!canSubmit}
            size="composer"
            type="submit"
          >
            <FormattedMessage
              id="browserSidebarCommentOverlay.save"
              defaultMessage="Save"
              description="Primary action for editing an existing browser comment"
            />
          </Button>
        )}
      </div>
    </div>
  );

  const submitControls =
    existingCommentId == null ? (
      <div className="absolute right-2 bottom-2 flex items-center gap-2">
        {showDictationStart ? (
          <DictationButton
            isVisible={isDictationDefaultOn}
            isTranscribing={isTranscribing}
            canRetryDictation={canRetryDictation}
            disabled={canSubmitEmpty}
            retryDictation={retryDictation}
            shortcutLabel={dictationShortcutLabel}
            startDictation={startDictation}
            stopDictation={stopDictation}
            tooltipPortalContainer={tooltipPortalContainer}
          />
        ) : null}
        {showSubmitButton ? (
          isDesignSubmissionMode ? (
            <Button
              aria-label={addTweaksLabel}
              color="primary"
              data-browser-comment-submit={true}
              size="composer"
              disabled={!canSubmit}
              type="button"
              uniform
              onMouseDown={(event) => {
                event.preventDefault();
              }}
              onClick={() => {
                submitComment("button");
              }}
            >
              <CommentSendIcon className="icon-sm" />
            </Button>
          ) : (
            <Tooltip
              side="top"
              sideOffset={4}
              portalContainer={tooltipPortalContainer}
              tooltipContent={
                <div className="space-y-1">
                  <ShortcutTooltipRow keysLabel={enterLabel}>
                    {submitMode === "direct" ? (
                      <SendTooltipLabel />
                    ) : (
                      <AddTooltipLabel />
                    )}
                  </ShortcutTooltipRow>
                  {allowDirectSubmit ? (
                    <ShortcutTooltipRow keysLabel={cmdEnterLabel}>
                      {submitMode === "direct" ? (
                        <AddTooltipLabel />
                      ) : (
                        <SendTooltipLabel />
                      )}
                    </ShortcutTooltipRow>
                  ) : null}
                </div>
              }
            >
              <Button
                aria-label={commentLabel}
                color="primary"
                data-browser-comment-submit={true}
                size="composer"
                disabled={!canSubmit}
                type="button"
                uniform
                onMouseDown={(event) => {
                  event.preventDefault();
                }}
                onClick={() => {
                  if (shouldDirectSubmit) {
                    secondarySubmit("button");
                    return;
                  }
                  primarySubmit("button");
                }}
              >
                {isDirectIconState ? (
                  <CommentSaveIcon className="icon-sm" />
                ) : (
                  <CommentSendIcon className="icon-sm" />
                )}
              </Button>
            </Tooltip>
          )
        ) : null}
      </div>
    ) : null;

  const scrubCloneOverlay =
    scrubClone != null &&
    scrubCloneRows != null &&
    scrubCloneRows.length === scrubClone.rows.length ? (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-20"
        data-browser-comment-design-scrub-clone={true}
        style={{
          height: scrubClone.rect.height,
          left: scrubClone.rect.left,
          top: scrubClone.rect.top,
          width: scrubClone.rect.width,
        }}
      >
        <span className="absolute -top-2 -right-3 -bottom-2 -left-3 rounded-xl bg-token-dropdown-background shadow-md ring-1 ring-token-border-light" />
        {scrubCloneRows.map(({ row, value }) => (
          <Fragment key={row.property}>
            <span
              className="absolute flex min-w-0 items-center text-sm text-token-text-secondary"
              style={{
                height: row.labelRect.height,
                left: row.labelRect.left,
                top: row.labelRect.top,
                width: row.labelRect.width,
              }}
            >
              <span className="min-w-0 truncate">{row.label}</span>
            </span>
            {row.resetRect == null ? null : (
              <span
                className="absolute flex items-center justify-center text-token-text-secondary"
                style={{
                  height: row.resetRect.height,
                  left: row.resetRect.left,
                  top: row.resetRect.top,
                  width: row.resetRect.width,
                }}
              >
                <ResetValueIcon className="icon-2xs" />
              </span>
            )}
            <span
              className="absolute flex min-w-0 items-center gap-1 rounded-lg border border-token-focus-border bg-token-input-background px-3 text-token-input-foreground shadow-sm ring-1 ring-token-focus-border"
              style={{
                height: row.controlRect.height,
                left: row.controlRect.left,
                top: row.controlRect.top,
                width: row.controlRect.width,
              }}
            >
              <span className="min-w-0 flex-1 truncate text-left font-mono text-xs text-token-input-foreground">
                {value.value}
              </span>
              {value.unit == null ? null : (
                <span className="shrink-0 font-mono text-xs text-token-text-tertiary">
                  {value.unit}
                </span>
              )}
            </span>
          </Fragment>
        ))}
      </div>
    ) : null;

  return (
    <form
      className="pointer-events-none relative h-full w-full overflow-visible bg-transparent text-token-foreground"
      style={COMMENT_SURFACE_STYLE_VARS}
      onKeyDownCapture={handleKeyDownCapture}
      onSubmit={(event) => {
        event.preventDefault();
        if (existingCommentId == null) {
          primarySubmit("button");
          return;
        }
        submitComment("button");
      }}
    >
      <div className={TOP_TRAY_CLASS} style={{ height: topTrayHeight }}>
        {activeMentionKind != null && topTrayHeight > 0 ? (
          <div className="pointer-events-auto max-h-full w-full">
            {activeMentionKind === "at" ? (
              <AtMentionAutocomplete
                className="max-h-full w-full"
                chromeVariant="default"
                hostId={LOCAL_HOST_ID}
                keyboardEventTarget={keyboardEventTarget}
                onAddContext={atMention.addMention}
                onRequestClose={atMention.closeAutocomplete}
                onUpdateSelectedMention={atMention.setSelectedMention}
                query={atMention.ui?.query ?? ""}
                roots={workspaceRoots ?? []}
                skillRoots={workspaceRoots}
                source={atMention.ui?.source ?? null}
              />
            ) : null}
            {activeMentionKind === "skill" ? (
              <SkillMentionAutocomplete
                className="max-h-full w-full"
                query={skillMention.ui?.query ?? ""}
                keyboardEventTarget={keyboardEventTarget}
                onUpdateSelectedMention={skillMention.setSelectedMention}
                onAddMention={skillMention.addMention}
                onRequestClose={skillMention.closeAutocomplete}
                cwd={session.cwd ?? undefined}
                roots={workspaceRoots}
                chromeVariant="default"
              />
            ) : null}
          </div>
        ) : null}
      </div>
      <div
        ref={scrubContainerRef}
        className={CARD_AREA_CLASS}
        style={{
          top: topTrayHeight,
          height: isDesignEditorVisible || isTallLayout ? undefined : 120,
        }}
      >
        <CommentOverlaySurface
          ref={cardRef}
          data-browser-comment-editor-surface={true}
          className={clsx(
            "relative",
            isDesignEditorVisible
              ? "w-[344px] max-w-full"
              : "w-[294px] max-w-full",
            isDragOver && "bg-token-menu-background ring-token-focus-border",
            isCardHiddenForScrub
              ? "opacity-0 duration-[300ms]"
              : "duration-[150ms]",
          )}
          style={
            isDesignEditorVisible || isTallLayout
              ? {
                  transform: `translate3d(${dragOffset.x}px, ${dragOffset.y}px, 0px)`,
                }
              : {
                  height: cardHeight,
                  transform: `translate3d(${dragOffset.x}px, ${dragOffset.y}px, 0px)`,
                }
          }
          onDragEnter={(event) => {
            if (
              allowImageAttachments &&
              dataTransferHasImages(event.dataTransfer)
            ) {
              event.preventDefault();
              event.stopPropagation();
              event.dataTransfer.dropEffect = "copy";
              dragEnterCountRef.current += 1;
              setIsDragOver(true);
            }
          }}
          onDragOver={(event) => {
            if (
              allowImageAttachments &&
              dataTransferHasImages(event.dataTransfer)
            ) {
              event.preventDefault();
              event.stopPropagation();
              event.dataTransfer.dropEffect = "copy";
              if (!isDragOver) setIsDragOver(true);
            }
          }}
          onDragLeave={(event) => {
            if (
              allowImageAttachments &&
              dataTransferHasImages(event.dataTransfer)
            ) {
              event.preventDefault();
              event.stopPropagation();
              dragEnterCountRef.current = Math.max(
                0,
                dragEnterCountRef.current - 1,
              );
              if (dragEnterCountRef.current === 0) setIsDragOver(false);
            }
          }}
          onDrop={(event) => {
            if (
              !allowImageAttachments ||
              !dataTransferHasImages(event.dataTransfer)
            ) {
              return;
            }
            event.preventDefault();
            event.stopPropagation();
            const files = extractImageFilesFromDataTransfer(event.dataTransfer);
            if (files.length > 0) handleAddImages(files);
            resetDragCounter();
          }}
        >
          {adjustToggle}
          {attachmentRow}
          {composerBody}
          <span
            ref={measureSpanRef}
            aria-hidden="true"
            className={MEASURE_SPAN_CLASS}
            style={{ fontSize: "var(--codex-chat-font-size)" }}
          >
            {bodyText}
          </span>
          {isDesignEditorVisible ? (
            <div
              data-browser-sidebar-design-footer-divider={true}
              className="pointer-events-none absolute inset-x-0 bottom-12 border-t border-token-border/60"
            />
          ) : null}
          {footerActions}
          {existingCommentId == null && isDictating ? (
            <div className="absolute right-0 bottom-2 left-0">
              <DictationRecordingFooter
                isTranscribing={isTranscribing}
                recordingDurationMs={recordingDurationMs}
                waveformCanvasRef={waveformCanvasRef}
                stopDictation={stopDictation}
                leadingAccessory={null}
                noBottomMargin
                tooltipPortalContainer={tooltipPortalContainer}
              />
            </div>
          ) : null}
          {submitControls}
        </CommentOverlaySurface>
        {scrubCloneOverlay}
      </div>
    </form>
  );
}
