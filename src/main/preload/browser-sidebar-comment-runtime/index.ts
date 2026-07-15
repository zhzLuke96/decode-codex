// Restored from ref/.vite/build/comment-preload.js
// Browser sidebar comment runtime document-context public surface.

export { BrowserSidebarDocumentContextResolver } from "./document-context-resolver";
export {
  BROWSER_SIDEBAR_COMMENT_ROOT_Z_INDEX,
  BROWSER_SIDEBAR_RUNTIME_BOUNDARY_ATTRIBUTE,
  ensureBrowserSidebarCommentRootHost,
  mountBrowserSidebarCommentRuntime,
} from "./mount";
export {
  getBrowserSidebarAnchorViewportRect,
  getBrowserSidebarBoundingRect,
  getBrowserSidebarTextSelectionViewportRects,
} from "./anchor-rects";
export {
  createBrowserSidebarAnchorStateForAnchor,
  createBrowserSidebarAnchorStateForComment,
  createBrowserSidebarAnchorStateForEditorEvent,
  createBrowserSidebarElementAnchorState,
  serializeBrowserSidebarEditorAnchor,
} from "./anchor-state";
export {
  areBrowserSidebarAnchorsEqual,
  areScrollContainerSnapshotsEqual,
} from "./anchors";
export { normalizeCssColorValue } from "./colors";
export {
  DEFAULT_DESIGN_GROUP_ATTRIBUTE,
  mergeDesignStyleDeclarationValues,
  readDesignStyleDeclarations,
  serializeDesignDraftStyles,
} from "./design-css";
export {
  BROWSER_SIDEBAR_DOM_OBSERVER_INIT,
  observeBrowserSidebarExternalDomMutations,
  subscribeToBrowserSidebarScrollContainers,
} from "./dom-observers";
export {
  isBrowserSidebarOwnSelectionMirrorMutation,
  measureBrowserSidebarFormControlSelectionRects,
} from "./form-control-measurement";
export {
  buildBrowserSidebarFormControlSelection,
  captureBrowserSidebarFormControlSelection,
  getBrowserSidebarDeepActiveElement,
  isBrowserSidebarSelectableFormControl,
} from "./form-control-selection";
export {
  addBrowserSidebarElementDesignGroup,
  readBrowserSidebarElementDesignGroups,
  setBrowserSidebarElementDesignGroups,
  syncBrowserSidebarDesignDraftElements,
} from "./design-dom-groups";
export { observeBrowserSidebarDesignDraftDom } from "./design-dom-observer";
export {
  DEFAULT_DESIGN_DRAFT_STYLE_ELEMENT_ID,
  syncBrowserSidebarDesignDraftStyleElement,
} from "./design-dom-style";
export {
  buildBrowserSidebarElementAnchor,
  buildBrowserSidebarRegionAnchor,
  isBrowserSidebarElementFixedToRoot,
} from "./element-anchor-builders";
export {
  findBrowserSidebarAnchorTargetElement,
  isPreferredBrowserSidebarAnchorTarget,
} from "./element-anchor-targets";
export {
  getBrowserSidebarEquivalentElementPoint,
  reprojectBrowserSidebarElementAnchor,
  resolveBrowserSidebarElementAnchorState,
} from "./element-anchor-reprojection";
export {
  applyBrowserSidebarDesignTextDrafts,
  DEFAULT_DESIGN_ORIGINAL_TEXT_ATTRIBUTE,
  restoreBrowserSidebarDesignTextDrafts,
} from "./design-dom-text";
export {
  escapeBrowserSidebarCssIdentifier,
  getBrowserSidebarElementSelector,
} from "./element-selectors";
export {
  getElementOwnerWindow,
  getVisibleElementViewportRect,
  isBrowserSidebarElement,
  isElementVisibleForBrowserSidebar,
} from "./element-geometry";
export {
  BROWSER_SIDEBAR_COMMENTS_ROOT_ID,
  BROWSER_SIDEBAR_INTERACTION_BLOCKER_ATTRIBUTE,
  eventComposedPathIncludes,
  eventHasBrowserSidebarInteractionBlocker,
  isBrowserSidebarOverlayElement,
  isBrowserSidebarRootEvent,
  stopBrowserSidebarEvent,
} from "./event-interactions";
export {
  BROWSER_SIDEBAR_COMMENT_ROOT_ATTRIBUTE,
  BROWSER_SIDEBAR_INTERACTION_LAYER_ATTRIBUTE,
  getBrowserSidebarAnchorTargetAtPoint,
  getBrowserSidebarAnchorTargetFromEventPath,
  getBrowserSidebarAnchorTargetFromPoint,
  getBrowserSidebarDeepElementFromPoint,
  getBrowserSidebarElementAtPointOutsideOverlay,
  normalizeBrowserSidebarAnchorTarget,
} from "./hit-testing";
export {
  BROWSER_SIDEBAR_SHADOW_FRAME_PATH_PREFIX,
  BROWSER_SIDEBAR_SHADOW_FRAME_PATH_SEPARATOR,
  getBrowserSidebarFramePath,
  getBrowserSidebarFramePathForElement,
  getBrowserSidebarFrameDocument,
  getBrowserSidebarFrameWindow,
  getBrowserSidebarWindowFrameOffset,
  getFrameElementContentWindow,
  resolveBrowserSidebarFrameElement,
} from "./frame-path";
export {
  getBrowserSidebarClampedMarkerPoint,
  getBrowserSidebarMarkerPoint,
  getBrowserSidebarZoomedMarkerPoint,
  isBrowserSidebarMarkerPointInsideFramePath,
} from "./marker-positioning";
export {
  BROWSER_SIDEBAR_BASE_DESIGN_STYLE_PROPERTIES,
  BROWSER_SIDEBAR_FLEX_DESIGN_STYLE_PROPERTIES,
  getBrowserSidebarElementSnapshot,
  readBrowserSidebarElementDesignStyleDeclarations,
} from "./element-metadata";
export {
  getBrowserSidebarElementAccessibleName,
  getBrowserSidebarElementImmediateText,
  getBrowserSidebarElementPath,
  getBrowserSidebarElementTargetLabel,
  getBrowserSidebarElementTitle,
  getBrowserSidebarNearbyElementText,
  readBrowserSidebarElementTextDraft,
} from "./element-text";
export {
  createGoogleDocsDocumentContext,
  isGoogleWorkspaceDocumentUrl,
  parseGoogleDocsDocumentUrl,
  parseGoogleSheetsDocumentId,
} from "./google-workspace-urls";
export {
  getGoogleDocsElementHoverClassName,
  getGoogleDocsPostedRegionClassName,
  getGoogleDocsRegionHoverClassName,
  isGoogleDocsAnnotationOverlay,
  isGoogleDocsAnnotationTarget,
  isLargeEnoughForGoogleDocsAnnotation,
} from "./google-docs-overlay";
export {
  applyBrowserSidebarViewportSizeOverride,
  BROWSER_SIDEBAR_MARKER_POINT_INSET,
  browserSidebarRectToOverlayStyle,
  computeBrowserSidebarEditorOverlayRect,
  computeBrowserSidebarMarkerViewportSize,
  getBrowserSidebarThemeVariant,
  getBrowserSidebarViewportScrollState,
  getBrowserSidebarViewportSize,
  getElementMetadataTooltipViewportRect,
  mergeBrowserSidebarMarkerViewportSize,
  scaleBrowserSidebarOverlayRect,
} from "./overlay-layout";
export {
  areBrowserSidebarPageUrlsEquivalent,
  frameUrlMatchesWindow,
  parseBrowserSidebarPageUrl,
} from "./page-urls";
export {
  BROWSER_SIDEBAR_REGION_DRAG_THRESHOLD,
  hasBrowserSidebarRegionDragStarted,
  isPointInsideCurrentBrowserSidebarViewport,
  rectBetweenBrowserSidebarRegionDragPoints,
  updateBrowserSidebarRegionDragState,
} from "./region-drag";
export { getBrowserSidebarScrollContainerSnapshotsAtPoint } from "./scroll-containers";
export {
  findScrollableBrowserSidebarAncestor,
  getBrowserSidebarWheelDelta,
  scrollBrowserSidebarElementAtPoint,
} from "./scroll-passthrough";
export {
  createBrowserSidebarCommentScreenshotReadyMessage,
  getBrowserSidebarScreenshotAnnotationId,
  getBrowserSidebarScreenshotViewportRect,
  resolveBrowserSidebarScreenshotAnnotation,
  retainPreparedBrowserSidebarScreenshotId,
  shouldSendBrowserSidebarScreenshotReady,
  shouldSkipBrowserSidebarScreenshotCapture,
} from "./screenshot";
export { buildBrowserSidebarTextAnchorState } from "./text-anchor-builder";
export {
  captureBrowserSidebarActiveTextAnchorState,
  captureBrowserSidebarDomTextSelection,
  restoreBrowserSidebarDomTextSelection,
  restoreBrowserSidebarTextAnchorState,
} from "./text-anchor-state";
export {
  clampNumber,
  computeCommentEditorRect,
  hasPointMovedPastThreshold,
  inverseViewportScale,
  isPointInsideViewportSize,
  rectBetweenPoints,
  scaleRect,
  spreadCoincidentMarkerPoints,
} from "./geometry";
export { normalizeBrowserSidebarText } from "./text";
export {
  getBrowserSidebarFrameDocumentsUntilPath,
  getBrowserSidebarShadowHost,
  getBrowserSidebarTextLocatorFallbackRoot,
  getBrowserSidebarTextLocatorRoot,
  getBrowserSidebarTextLocatorRootDescriptor,
  getBrowserSidebarTextOffsetWithinRoot,
  isBrowserSidebarDocumentOrShadowRoot,
  isBrowserSidebarShadowRoot,
  resolveBrowserSidebarTextLocatorTarget,
  resolveBrowserSidebarTextPositionAtOffset,
} from "./text-locators";
export {
  browserSidebarRangeIntersectsSecureText,
  createBrowserSidebarRangeFromTextLocator,
  getBrowserSidebarNonEmptyBoundingRect,
  getBrowserSidebarRangeEndpointPoint,
  getBrowserSidebarRangeFromSelection,
  getBrowserSidebarRangeRects,
  getBrowserSidebarSelectionDirection,
  isBrowserSidebarFixedTextRoot,
} from "./text-ranges";
export type {
  BrowserSidebarCommentEditorLayoutOptions,
  BrowserSidebarPoint,
  BrowserSidebarRect,
  BrowserSidebarSize,
} from "./geometry";
export type {
  BrowserSidebarMarkerViewportSizeInput,
  BrowserSidebarMetadataTooltipRectOptions,
  BrowserSidebarOverlayRectStyle,
  BrowserSidebarThemeVariant,
  BrowserSidebarViewportScrollState,
  BrowserSidebarViewportWindow,
} from "./overlay-layout";
export type {
  BrowserSidebarRegionDragState,
  BrowserSidebarViewportSizeWindow,
} from "./region-drag";
export type {
  BrowserSidebarCommentScreenshotReadyMessage,
  BrowserSidebarScreenshotAnnotation,
  BrowserSidebarScreenshotAnnotationBase,
} from "./screenshot";
export type {
  BrowserSidebarAnnotationMode,
  BrowserSidebarComment,
  BrowserSidebarEditorTarget,
  BrowserSidebarHostMessage,
  BrowserSidebarInteractionMode,
  BrowserSidebarIntlConfig,
  BrowserSidebarRuntimeController,
  BrowserSidebarRuntimeHost,
  BrowserSidebarRuntimeMessage,
  BrowserSidebarRuntimeState,
  BrowserSidebarRuntimeSyncMessage,
  BrowserSidebarViewportPoint,
} from "./mount";
export type {
  BrowserSidebarAnchorState,
  BrowserSidebarCommentItem,
  BrowserSidebarEditorAnchorEvent,
  BrowserSidebarSerializedEditorAnchor,
  BrowserSidebarStoredEditorAnchor,
} from "./anchor-state";
export type {
  BrowserSidebarAnchorPoint,
  BrowserSidebarCommentAnchor,
  BrowserSidebarElementAnchor,
  BrowserSidebarRegionAnchor,
  BrowserSidebarScrollContainerSnapshot,
  BrowserSidebarTextAnchor,
  BrowserSidebarTextLocator,
} from "./anchors";
export type {
  BrowserSidebarDesignStyleDeclaration,
  BrowserSidebarDesignStyleDraft,
} from "./design-css";
export type {
  BrowserSidebarClampedMarkerPointOptions,
  BrowserSidebarMarkerPointOptions,
  BrowserSidebarScaledMarkerPointOptions,
} from "./marker-positioning";
export type {
  BrowserSidebarFrameWindowResolver,
  BrowserSidebarScrollContainerAnchor,
} from "./dom-observers";
export type {
  BrowserSidebarDesignDomDraft,
  BrowserSidebarDesignDomOptions,
  BrowserSidebarDesignDraftElementResolver,
} from "./design-dom-types";
export type { BrowserSidebarElementAnchorState } from "./element-anchor-reprojection";
export type { BrowserSidebarElementSelectorOptions } from "./element-selectors";
export type { BrowserSidebarElementSnapshot } from "./element-metadata";
export type { BrowserSidebarFormControlSelection } from "./form-control-selection";
export type { BrowserSidebarSelectableFormControl } from "./form-control-selection";
export type {
  BrowserSidebarCapturedTextSelection,
  BrowserSidebarTextAnchorState,
} from "./text-anchor-builder";
export type { BrowserSidebarTextDraft } from "./element-text";
export type {
  BrowserSidebarTextLocatorRoot,
  BrowserSidebarTextPosition,
} from "./text-locators";
export type { BrowserSidebarTextSelectionDirection } from "./text-ranges";
export type {
  BrowserSidebarComposedPathEvent,
  BrowserSidebarStopEventOptions,
  BrowserSidebarStoppableEvent,
} from "./event-interactions";
export type {
  BrowserSidebarAnchorLike,
  BrowserSidebarDocumentContextInput,
  BrowserSidebarGoogleDocsDocumentContext,
  BrowserSidebarGoogleDocsDocumentLocation,
  BrowserSidebarViewportRect,
} from "./types";
