// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Large-diff single-file mode UI bits: the floating banner shown when review
// switches to one-file-at-a-time rendering, plus the bottom-inset calculation
// that reserves space for the banner and section action buttons.
import { FormattedMessage } from "../vendor/react-intl";
import { InfoIcon } from "../icons/info-icon";
import { reviewExpandedBottomInset } from "./review-ui-state-runtime";

export const LARGE_DIFF_BANNER_BOTTOM_INSET = "0.5rem";
export const LARGE_DIFF_BANNER_HEIGHT = "2.75rem";

const SECTION_ACTIONS_HIDDEN_INSET = "0.75rem";
const SECTION_ACTIONS_VISIBLE_INSET = "2rem";

export function initLargeDiffBannerChunk(): void {}

export interface LargeDiffBannerProps {
  bottomInset?: string;
}

export function LargeDiffBanner({ bottomInset }: LargeDiffBannerProps) {
  const resolvedBottomInset =
    bottomInset === undefined ? LARGE_DIFF_BANNER_BOTTOM_INSET : bottomInset;
  return (
    <div
      className="pointer-events-none absolute right-4 left-4 z-10 flex items-center gap-1.5 border-t border-token-border-light bg-token-main-surface-primary pt-3 pb-2 text-base text-token-text-tertiary"
      style={{ bottom: resolvedBottomInset }}
    >
      <InfoIcon aria-hidden={true} className="icon-xs shrink-0" />
      <FormattedMessage
        id="codex.review.largeDiff.banner"
        defaultMessage="This diff is large, showing one file at a time"
        description="Banner shown when the review switches to single-file mode for large diffs"
      />
    </div>
  );
}

export interface ReviewBottomInsetParams {
  isCappedMode: boolean;
  isReviewExpanded: boolean;
  showSectionActionButtons: boolean;
}

export function computeReviewBottomInset({
  isCappedMode,
  isReviewExpanded,
  showSectionActionButtons,
}: ReviewBottomInsetParams): string | undefined {
  if (isCappedMode) {
    const base = isReviewExpanded
      ? reviewExpandedBottomInset
      : LARGE_DIFF_BANNER_BOTTOM_INSET;
    const sectionInset = showSectionActionButtons
      ? SECTION_ACTIONS_VISIBLE_INSET
      : SECTION_ACTIONS_HIDDEN_INSET;
    return `calc(${base} + ${LARGE_DIFF_BANNER_HEIGHT} + ${sectionInset})`;
  }
  return isReviewExpanded ? reviewExpandedBottomInset : undefined;
}
