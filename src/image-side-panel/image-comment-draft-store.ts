// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Composer-scope mutations for the "image comment draft": starting, cancelling,
// committing comments and (re)uploading the underlying image attachment.
import { createImageAttachmentUpload } from "./upload-image";
import type { ImageComment } from "./image-comment-surface";
import {
  updateComposerState,
  imageCommentDraftAtom,
  imageAttachmentsAtom,
  composerModeAtom,
  loadImageFileDataUrl,
} from "../boundaries/onboarding-commons-externals.facade";

export type { ImageComment } from "./image-comment-surface";

interface ComposerScope {
  get(atom: unknown): any;
}

function resetImageCommentDraft(
  composerScope: ComposerScope,
  attachmentSrc: string,
  attachmentId: string,
): void {
  updateComposerState(composerScope, (state: any) => {
    if (
      state.imageCommentDraft == null ||
      state.imageCommentDraft.attachmentId !== attachmentId ||
      state.imageCommentDraft.attachmentSrc !== attachmentSrc
    ) {
      return;
    }
    state.imageCommentDraft.comments = [];
    state.imageAttachments = state.imageAttachments.filter(
      (attachment: { id: string }) => attachment.id !== attachmentId,
    );
  });
}

export function startImageCommentDraft(
  composerScope: ComposerScope,
  attachmentId: string,
  attachmentSrc: string,
): void {
  updateComposerState(composerScope, (state: any) => {
    const previousAttachmentId = state.imageCommentDraft?.attachmentId;
    state.imageCommentDraft = { attachmentId, attachmentSrc, comments: [] };
    if (previousAttachmentId != null) {
      state.imageAttachments = state.imageAttachments.filter(
        (attachment: { id: string }) => attachment.id !== previousAttachmentId,
      );
    }
  });
}

export function cancelImageCommentDraft(
  composerScope: ComposerScope,
  attachmentSrc: string,
): void {
  updateComposerState(composerScope, (state: any) => {
    if (
      state.imageCommentDraft == null ||
      state.imageCommentDraft.attachmentSrc !== attachmentSrc
    ) {
      return;
    }
    const { attachmentId } = state.imageCommentDraft;
    state.imageCommentDraft = null;
    state.imageAttachments = state.imageAttachments.filter(
      (attachment: { id: string }) => attachment.id !== attachmentId,
    );
  });
}

export function clearImageCommentDraft(
  composerScope: ComposerScope,
  attachmentId?: string,
): void {
  updateComposerState(composerScope, (state: any) => {
    const draftAttachmentId = state.imageCommentDraft?.attachmentId;
    if (
      draftAttachmentId == null ||
      (attachmentId != null && draftAttachmentId !== attachmentId)
    ) {
      return;
    }
    state.imageCommentDraft = null;
    state.imageAttachments = state.imageAttachments.filter(
      (attachment: { id: string }) => attachment.id !== draftAttachmentId,
    );
  });
}

export interface CommitImageCommentDraftArgs {
  composerScope: ComposerScope;
  attachmentId: string;
  attachmentSrc: string;
  downloadFileName: string;
  src: string;
  downloadSrc: string;
  isCloudComposer: boolean;
  onUploadFailure: () => void;
  absoluteImageFilePath: string | null;
  hostId: string;
  queryClient: unknown;
}

function getInlineDataUrl(args: CommitImageCommentDraftArgs): string | null {
  if (args.src.startsWith("data:")) return args.src;
  if (args.downloadSrc.startsWith("data:")) return args.downloadSrc;
  return null;
}

async function resolveImageDataUrl(
  args: CommitImageCommentDraftArgs,
): Promise<string | null> {
  return (
    getInlineDataUrl(args) ??
    (args.absoluteImageFilePath == null
      ? fetchAsDataUrl(args.downloadSrc)
      : loadImageFileDataUrl(
          args.absoluteImageFilePath,
          args.hostId,
          args.queryClient,
        ))
  );
}

async function fetchAsDataUrl(url: string): Promise<string | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    const blob = await response.blob();
    return await new Promise<string | null>((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(typeof reader.result === "string" ? reader.result : null);
      };
      reader.onerror = () => {
        resolve(null);
      };
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

function handleCommentImageUploadFailure(
  args: CommitImageCommentDraftArgs,
): void {
  const draft = args.composerScope.get(imageCommentDraftAtom);
  const stillAttached = args.composerScope
    .get(imageAttachmentsAtom)
    .some((attachment: { id: string }) => attachment.id === args.attachmentId);
  if (
    draft == null ||
    !stillAttached ||
    draft.attachmentId !== args.attachmentId ||
    draft.attachmentSrc !== args.attachmentSrc
  ) {
    return;
  }
  args.onUploadFailure();
}

async function uploadCloudCommentImage(
  args: CommitImageCommentDraftArgs,
): Promise<void> {
  const dataUrl = await resolveImageDataUrl(args);
  if (dataUrl == null) {
    handleCommentImageUploadFailure(args);
    return;
  }
  try {
    const upload = await createImageAttachmentUpload({
      dataUrl,
      filename: args.downloadFileName,
    });
    updateComposerState(args.composerScope, (state: any) => {
      const attachment = state.imageAttachments.find(
        (item: { id: string }) => item.id === args.attachmentId,
      );
      if (attachment != null) {
        attachment.uploadSrc = dataUrl;
        Object.assign(attachment, upload);
      }
    });
  } catch {
    handleCommentImageUploadFailure(args);
  }
}

async function loadLocalCommentImage(
  args: CommitImageCommentDraftArgs,
): Promise<void> {
  const dataUrl = await resolveImageDataUrl(args);
  if (dataUrl == null) {
    updateComposerState(args.composerScope, (state: any) => {
      const attachment = state.imageAttachments.find(
        (item: { id: string }) => item.id === args.attachmentId,
      );
      if (attachment != null) attachment.uploadStatus = "error";
    });
    return;
  }
  const isCloud = args.composerScope.get(composerModeAtom) === "cloud";
  updateComposerState(args.composerScope, (state: any) => {
    const attachment = state.imageAttachments.find(
      (item: { id: string }) => item.id === args.attachmentId,
    );
    if (attachment != null) {
      attachment.uploadSrc = dataUrl;
      attachment.uploadStatus = isCloud ? "uploading" : "idle";
    }
  });
  if (isCloud) uploadCloudCommentImage(args);
}

export function commitImageCommentDraft(
  args: CommitImageCommentDraftArgs,
  comments: ImageComment[],
): void {
  if (comments.length === 0) {
    resetImageCommentDraft(
      args.composerScope,
      args.attachmentSrc,
      args.attachmentId,
    );
    return;
  }

  const inlineDataUrl = getInlineDataUrl(args);
  let attachmentAdded = false;
  updateComposerState(args.composerScope, (state: any) => {
    state.imageCommentDraft = {
      attachmentId: args.attachmentId,
      attachmentSrc: args.attachmentSrc,
      comments,
    };
    if (
      !state.imageAttachments.some(
        (attachment: { id: string }) => attachment.id === args.attachmentId,
      )
    ) {
      state.imageAttachments.push({
        filename: args.downloadFileName,
        id: args.attachmentId,
        previewSrc: args.src,
        src: args.attachmentSrc,
        uploadSrc: inlineDataUrl ?? undefined,
        ...(args.isCloudComposer || inlineDataUrl == null
          ? { uploadStatus: "uploading" }
          : {}),
      });
      attachmentAdded = true;
    }
  });

  if (!attachmentAdded) return;
  if (args.isCloudComposer) {
    uploadCloudCommentImage(args);
  } else if (inlineDataUrl == null) {
    loadLocalCommentImage(args);
  }
}

export function initImageCommentDraftStoreChunk(): void {
  void clearImageCommentDraft;
  void commitImageCommentDraft;
}
