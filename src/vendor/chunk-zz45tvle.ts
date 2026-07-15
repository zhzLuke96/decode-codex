// Restored from ref/webview/assets/chunk-ZZ45TVLE-DzHSn4eK.js
// ChunkZZ45TVLE chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN } from "./dayjs-core-alt";
import { _chunkICPOFSXXP, chunkICPOFSXXV } from "./chunk-icpofsxx";
import { chunk5PVQY5BWH } from "./chunk-5pvqy5bw";

type MermaidFlowchartConfig = {
  flowchart?: {
    subGraphTitleMargin?: {
      top?: number;
      bottom?: number;
    };
  };
};

type SubGraphTitleMargins = {
  subGraphTitleTopMargin: number;
  subGraphTitleBottomMargin: number;
  subGraphTitleTotalMargin: number;
};

const getSubGraphTitleMargins = chunkAGHRB4JFN(
  ({ flowchart }: MermaidFlowchartConfig): SubGraphTitleMargins => {
    const topMargin = flowchart?.subGraphTitleMargin?.top ?? 0;
    const bottomMargin = flowchart?.subGraphTitleMargin?.bottom ?? 0;

    return {
      subGraphTitleTopMargin: topMargin,
      subGraphTitleBottomMargin: bottomMargin,
      subGraphTitleTotalMargin: topMargin + bottomMargin,
    };
  },
  "getSubGraphTitleMargins",
);

async function configureLabelImages(
  labelElement: Element,
  labelHtml: string,
): Promise<void> {
  const images = labelElement.getElementsByTagName("img");
  if (!images || images.length === 0) return;

  const labelOnlyContainsImages =
    labelHtml.replace(/<img[^>]*>/g, "").trim() === "";

  await Promise.all(
    [...images].map(
      (image) =>
        new Promise<HTMLImageElement>((resolve) => {
          function setupImage() {
            if (
              ((image.style.display = "flex"),
              (image.style.flexDirection = "column"),
              labelOnlyContainsImages)
            ) {
              const [configuredFontSize = chunkICPOFSXXV.fontSize] =
                chunk5PVQY5BWH(
                  _chunkICPOFSXXP().fontSize
                    ? _chunkICPOFSXXP().fontSize
                    : window.getComputedStyle(document.body).fontSize,
                );
              const fallbackImageWidth = configuredFontSize * 5 + "px";
              image.style.minWidth = fallbackImageWidth;
              image.style.maxWidth = fallbackImageWidth;
            } else image.style.width = "100%";
            resolve(image);
          }
          chunkAGHRB4JFN(setupImage, "setupImage");
          setTimeout(() => {
            image.complete && setupImage();
          });
          image.addEventListener("error", setupImage);
          image.addEventListener("load", setupImage);
        }),
    ),
  );
}
chunkAGHRB4JFN(configureLabelImages, "configureLabelImages");
export function initChunkZZ45TVLE(): void {}
export {
  configureLabelImages,
  configureLabelImages as chunkZZ45TVLET,
  getSubGraphTitleMargins,
  getSubGraphTitleMargins as chunkZZ45TVLEN,
};
