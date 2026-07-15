// Restored from ref/webview/assets/comment-attachment-labels-BEv69mU6.js
// comment-attachment-labels-BEv69mU6 chunk restored from the Codex webview bundle.
import { defineMessages, type IntlShape } from "react-intl";
type CommentAttachmentKind = "annotation" | "comment";
const commentAttachmentMessages = defineMessages({
  annotationCount: {
    id: "commentAttachments.numAnnotations",
    defaultMessage: "{count, plural, one {# annotation} other {# annotations}}",
    description: "Number of in-app browser annotations in the attachment",
  },
  commentCount: {
    id: "commentAttachments.numComments",
    defaultMessage: "{count, plural, one {# comment} other {# comments}}",
    description: "Number of comments in the comment attachment",
  },
  removeAnnotations: {
    id: "commentAttachments.removeAnnotationsAriaLabel",
    defaultMessage: "Remove annotations attachment",
    description: "Aria label for removing the annotations attachment",
  },
  removeComments: {
    id: "commentAttachments.removeAriaLabel",
    defaultMessage: "Remove comments attachment",
    description: "Aria label for removing the comment attachment",
  },
  mixedSummary: {
    id: "commentAttachments.mixedSummary",
    defaultMessage: "{annotations}, {comments}",
    description:
      "Summary text for a queued message with both browser annotations and diff comments",
  },
});
function formatCommentAttachmentCount(
  intl: IntlShape,
  {
    count,
    kind,
  }: {
    count: number;
    kind: CommentAttachmentKind;
  },
) {
  switch (kind) {
    case "annotation":
      return intl.formatMessage(commentAttachmentMessages.annotationCount, {
        count,
      });
    case "comment":
      return intl.formatMessage(commentAttachmentMessages.commentCount, {
        count,
      });
  }
}
export function formatCommentAttachmentSummary(
  intl: IntlShape,
  {
    annotationCount,
    commentCount,
    designTweakCount = 0,
  }: {
    annotationCount: number;
    commentCount: number;
    designTweakCount?: number;
  },
) {
  const totalAnnotationCount = annotationCount + designTweakCount;
  return totalAnnotationCount > 0 && commentCount > 0
    ? intl.formatMessage(commentAttachmentMessages.mixedSummary, {
        annotations: formatCommentAttachmentCount(intl, {
          count: totalAnnotationCount,
          kind: "annotation",
        }),
        comments: formatCommentAttachmentCount(intl, {
          count: commentCount,
          kind: "comment",
        }),
      })
    : totalAnnotationCount > 0
      ? formatCommentAttachmentCount(intl, {
          count: totalAnnotationCount,
          kind: "annotation",
        })
      : commentCount > 0
        ? formatCommentAttachmentCount(intl, {
            count: commentCount,
            kind: "comment",
          })
        : "";
}
export function formatRemoveCommentAttachmentLabel(
  intl: IntlShape,
  kind: CommentAttachmentKind,
) {
  switch (kind) {
    case "annotation":
      return intl.formatMessage(commentAttachmentMessages.removeAnnotations);
    case "comment":
      return intl.formatMessage(commentAttachmentMessages.removeComments);
  }
}
export function formatCommentAttachmentKindCount(
  intl: IntlShape,
  kind: CommentAttachmentKind,
  count: number,
) {
  return formatCommentAttachmentCount(intl, {
    count,
    kind,
  });
}
