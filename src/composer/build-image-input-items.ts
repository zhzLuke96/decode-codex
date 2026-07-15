// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Collect every image attachment on a composer context into turn input items.
import {
  buildImageInputItem,
  buildCommentImageInputItems,
} from "../boundaries/onboarding-commons-externals.facade";

interface ImageAttachmentLike {
  src: string;
  localPath?: string;
}

interface AppshotContextLike {
  imageDataUrl?: string | null;
  imagePath?: string | null;
}

export interface ComposerImageContext {
  imageAttachments: ImageAttachmentLike[];
  mcpAppModelContextAttachments?: { imageAttachments: ImageAttachmentLike[] }[];
  appshotContexts?: AppshotContextLike[];
  commentAttachments: unknown;
}

export interface BuildImageInputItemsOptions {
  shouldRestrictRemoteHostImageSize?: boolean;
}

export function buildImageInputItems(
  context: ComposerImageContext,
  isRemoteHost: boolean,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  {
    shouldRestrictRemoteHostImageSize = false,
  }: BuildImageInputItemsOptions = {},
): unknown[] {
  return [
    ...context.imageAttachments.map((attachment) =>
      buildImageInputItem(attachment.src, {
        localPath: attachment.localPath,
        isRemoteHost,
      }),
    ),
    ...(context.mcpAppModelContextAttachments ?? []).flatMap((attachment) =>
      attachment.imageAttachments.map((image) =>
        buildImageInputItem(image.src, { isRemoteHost }),
      ),
    ),
    ...(context.appshotContexts ?? []).flatMap((appshot) => {
      const source = appshot.imageDataUrl ?? appshot.imagePath;
      return source == null
        ? []
        : [
            buildImageInputItem(source, {
              localPath: appshot.imagePath ?? undefined,
              isRemoteHost,
            }),
          ];
    }),
    ...buildCommentImageInputItems(context.commentAttachments, isRemoteHost),
  ];
}
