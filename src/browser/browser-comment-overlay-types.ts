// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Public types for the browser sidebar comment overlay.

import type {
  DesignDraftGroup,
  DesignEditorState,
} from "./browser-comment-design-draft";

export type AttachedImage = {
  dataUrl: string;
  filename?: string;
  localPath?: string;
};

export type CommentTarget = {
  mode: "create" | "edit" | "design";
  commentId?: string;
};

export type BrowserCommentSession = {
  sessionId: string;
  surfaceMode: "preview" | "editor";
  body: string;
  attachedImages?: AttachedImage[];
  designChange?: DesignDraftGroup | null;
  designEditorState?: DesignEditorState | null;
  previewAlignment?: "start" | "end" | "center";
  target: CommentTarget;
  cwd?: string | null;
};

export type SubmitPayload = {
  body: string;
  submitSource: string;
  attachedImages?: AttachedImage[];
  designChange?: DesignDraftGroup | null;
};

export type BrowserSidebarCommentOverlayProps = {
  allowImageAttachments?: boolean;
  allowDirectSubmit?: boolean;
  defaultCreateSubmitMode?: "saved" | "direct";
  defaultDesignEditorOpen?: boolean;
  defaultExpandedSpacingGroups?: unknown;
  inputAriaLabel?: string;
  placeholder?: string;
  session: BrowserCommentSession;
  showAdjustEntry?: boolean;
  windowHeight: number;
  keyboardEventTarget?: Window | null;
  onSubmit: (payload: SubmitPayload) => void;
  onDirectSubmit: (payload: SubmitPayload) => void;
  onDesignChangeDelete?: (groupId: string) => void;
  onDesignChangeUpdate?: (group: DesignDraftGroup | null) => void;
  onDesignScrubPropertyChange?: (property: string | null) => void;
  onTweaksEditorOpenChange?: (open: boolean) => void;
  onDelete: (commentId: string) => void;
  onCancel: () => void;
  onEscape: () => void;
  onMounted: (
    sessionId: string,
    size: { width: number; height: number },
    placementHint?: unknown,
  ) => void;
  onBodyChange?: (body: string) => void;
  onAttachmentPreviewOpenChange?: (open: boolean) => void;
  onLightDismissibilityChange: (isLightDismissible: boolean) => void;
};

export type BrowserCommentEditorProps = {
  session: BrowserCommentSession;
  windowHeight: number;
  defaultDesignEditorOpen?: boolean;
  defaultExpandedSpacingGroups?: unknown;
  showAdjustEntry?: boolean;
  keyboardEventTarget?: Window | null;
  onSubmit: (payload: SubmitPayload) => void;
  onDirectSubmit: (payload: SubmitPayload) => void;
  onDesignChangeDelete?: (groupId: string) => void;
  onDesignChangeUpdate?: (group: DesignDraftGroup | null) => void;
  onDesignScrubPropertyChange?: (property: string | null) => void;
  onTweaksEditorOpenChange?: (open: boolean) => void;
  onDelete: (commentId: string) => void;
  onCancel: () => void;
  onEscape: () => void;
  onMounted: BrowserSidebarCommentOverlayProps["onMounted"];
  onBodyChange?: (body: string) => void;
  onAttachmentPreviewOpenChange?: (open: boolean) => void;
  onLightDismissibilityChange: (isLightDismissible: boolean) => void;
  allowImageAttachments?: boolean;
  allowDirectSubmit?: boolean;
  defaultCreateSubmitMode?: "saved" | "direct";
  inputAriaLabel?: string;
  placeholder?: string;
};

export type ScrubCloneRow = {
  controlRect: { height: number; left: number; top: number; width: number };
  label: string;
  labelRect: { height: number; left: number; top: number; width: number };
  property: string;
  resetRect?: { height: number; left: number; top: number; width: number };
};

export type ScrubClone = {
  rect: { height: number; left: number; top: number; width: number };
  rows: ScrubCloneRow[];
};
