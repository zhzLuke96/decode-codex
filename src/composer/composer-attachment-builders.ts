// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js
// Pure attachment/comment builders used by the composer submit path.
//
// `splitCommentsForSubmit` folds the image-comment overlay draft into the prompt
// text; `buildComposerImageInputItems` turns staged image attachments into the
// conversation input items the app-server expects; `normalizeConversationAttachments`
// de-duplicates the merged attachment list; `removeAllImageComments` clears the
// image-comment overlay for a composer scope. The attachment item builder and
// normalizer are restored inline from the remote-projects shared chunk; the
// overlay reset resolves to the worktree new-thread atoms this chunk was
// code-split from.
import {
  composerImageCommentDraftAtom,
  composerImageInputsAtom,
  type ComposerImageAttachment,
} from "./composer-attachment-atoms";
import type { ScopeAtom } from "./composer-atoms";

/** A positioned image comment carried by the image-comment overlay draft. */
export interface ComposerImageComment {
  readonly x: number;
  readonly y: number;
  readonly text: string;
}

/** A conversation input item / attachment sent with a start-thread or follow-up request. */
export interface ConversationInputAttachment {
  readonly type?: string;
  readonly [field: string]: unknown;
}

/** A composer scope store handle (only its identity is needed to reset overlay state). */
export interface ComposerScopeHandle {
  get<Value>(atom: ScopeAtom<Value>): Value;
  set<Value>(atom: ScopeAtom<Value>, value: Value): void;
  readonly [field: string]: unknown;
}

function formatCommentCoordinate(fraction: number): string {
  return `${(Math.min(Math.max(fraction, 0), 1) * 100).toFixed(1)}%`;
}

function stripExtendedWindowsPathPrefix(path: string): string {
  const uncMatch = path.match(/^\\\\\?\\UNC\\(.*)$/i);
  if (uncMatch != null) return `\\\\${uncMatch[1]}`;

  const driveMatch = path.match(/^\\\\\?\\([a-zA-Z]:[\\/].*)$/);
  return driveMatch == null ? path : driveMatch[1];
}

function normalizeAttachmentPath(path: string): string {
  return stripExtendedWindowsPathPrefix(path).replace(/\\/g, "/");
}

function basenameFromAttachmentPath(path: string): string {
  const withoutTrailingSlashes = normalizeAttachmentPath(path).replace(
    /\/+$/,
    "",
  );
  return withoutTrailingSlashes.split("/").at(-1) ?? withoutTrailingSlashes;
}

function conversationAttachmentDedupeKey({
  label,
  path,
  fsPath,
  startLine,
  endLine,
}: ConversationInputAttachment): string {
  return JSON.stringify([label, path, fsPath, startLine, endLine]);
}

/**
 * Fold the image-comment overlay draft into the prompt: when there are comments,
 * render them as a numbered list of `(x%, y%) text` lines followed by the trimmed
 * prompt; otherwise return the prompt unchanged.
 */
export function splitCommentsForSubmit({
  comments,
  prompt,
}: {
  comments: readonly ComposerImageComment[];
  prompt: string;
}): string {
  if (comments.length === 0) return prompt;
  const lines = comments.map(
    (comment, index) =>
      `${index + 1}. (x: ${formatCommentCoordinate(
        comment.x,
      )}, y: ${formatCommentCoordinate(comment.y)}) ${comment.text}`,
  );
  const trimmedPrompt = prompt.trim();
  if (trimmedPrompt.length > 0) lines.push("", trimmedPrompt);
  return lines.join("\n");
}

/** Build conversation image input items from the composer's staged image attachments. */
export function buildComposerImageInputItems(
  imageAttachments: readonly ComposerImageAttachment[],
): ConversationInputAttachment[] {
  return imageAttachments.flatMap((attachment) => {
    if (attachment.localPath == null) return [];

    const normalizedPath = normalizeAttachmentPath(attachment.localPath);
    return [
      {
        label:
          basenameFromAttachmentPath(normalizedPath) ||
          attachment.filename ||
          attachment.localPath,
        path: normalizedPath,
        fsPath: normalizedPath,
      },
    ];
  });
}

/** De-duplicate / normalize a merged list of conversation input attachments. */
export function normalizeConversationAttachments(
  attachments: readonly ConversationInputAttachment[],
): ConversationInputAttachment[] {
  const seen = new Set<string>();
  const normalized: ConversationInputAttachment[] = [];
  for (const attachment of attachments) {
    const key = conversationAttachmentDedupeKey(attachment);
    if (seen.has(key)) continue;
    seen.add(key);
    normalized.push(attachment);
  }
  return normalized;
}

export function buildAttachmentsPayload(
  attachments: readonly ConversationInputAttachment[],
): ConversationInputAttachment[] {
  return normalizeConversationAttachments(attachments);
}

export function mergeFileAttachments(
  ...attachmentGroups: readonly (readonly ConversationInputAttachment[] | null | undefined)[]
): ConversationInputAttachment[] {
  return buildAttachmentsPayload(attachmentGroups.flatMap((group) => group ?? []));
}

export function toImageAttachmentInputs(
  imageAttachments: readonly ComposerImageAttachment[] | null | undefined,
): ConversationInputAttachment[] {
  return buildComposerImageInputItems(imageAttachments ?? []);
}

export function getComposerPromptText(context: {
  prompt?: unknown;
}): string {
  const prompt = context.prompt;
  if (typeof prompt === "string") return prompt;
  if (prompt == null) return "";
  if (typeof prompt === "object") {
    const record = prompt as Record<string, unknown>;
    if (typeof record.text === "string") return record.text;
    if (typeof record.content === "string") return record.content;
    if (typeof record.prompt === "string") return record.prompt;
  }
  return "";
}

/** Clear the image-comment overlay draft for the given composer scope. */
export function removeAllImageComments(
  scope: ComposerScopeHandle,
  attachmentId?: string,
): void {
  const activeAttachmentId = scope.get(
    composerImageCommentDraftAtom,
  )?.attachmentId;
  if (activeAttachmentId == null) return;
  if (attachmentId != null && activeAttachmentId !== attachmentId) return;

  scope.set(composerImageCommentDraftAtom, null);
  scope.set(
    composerImageInputsAtom,
    scope
      .get(composerImageInputsAtom)
      .filter((attachment) => attachment.id !== activeAttachmentId),
  );
}
