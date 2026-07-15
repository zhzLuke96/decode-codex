// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Body and connected entry point for the review side-panel tab: composes the review
// header, the diffs view, the changed-files side panel, the section action pill, and
// the revert confirmation dialog inside the expanded-diffs provider.

import { useState } from "react";
import { ReviewHeader } from "./review-header";
import { ReviewContent } from "./review-content";
import { ReviewExpandedDiffsProvider } from "./review-expanded-diffs-provider";
import { ReviewSectionActionPill } from "./review-section-action-pill";
import { RevertConfirmDialog } from "./revert-confirm-dialog";
import {
  useAtomValue,
  reviewDiffViewModeAtom,
  ReviewChangedFilesSidePanel,
} from "../boundaries/onboarding-commons-externals.facade";

interface ReviewTabState {
  scrollTop?: number | null;
}

type SetReviewTabState = (
  updater: (state: ReviewTabState) => ReviewTabState,
) => void;

export interface ReviewTabBodyProps {
  expandedActionsPortalTarget?: HTMLElement | null;
  setTabState: SetReviewTabState;
  tabState: ReviewTabState;
}

export function ReviewTabBody({
  expandedActionsPortalTarget = null,
  setTabState,
  tabState,
}: ReviewTabBodyProps) {
  const diffMode = useAtomValue<string>(reviewDiffViewModeAtom);

  return (
    <ReviewExpandedDiffsProvider>
      <div className="relative grid h-full min-h-0 w-full min-w-0 grid-rows-[auto_minmax(0,1fr)]">
        <div className="min-h-0 max-w-full min-w-0">
          <ReviewHeader />
        </div>
        <div className="flex min-h-0 max-w-full min-w-0">
          <ReviewContent
            diffMode={diffMode}
            setTabState={setTabState}
            tabState={tabState}
          />
          <ReviewChangedFilesSidePanel type="changed-files" />
        </div>
        <ReviewSectionActionPill
          expandedActionsPortalTarget={expandedActionsPortalTarget}
        />
        <RevertConfirmDialog />
      </div>
    </ReviewExpandedDiffsProvider>
  );
}

export interface ReviewSidePanelTabContentProps {
  setTabState: SetReviewTabState;
  tabState: ReviewTabState;
}

export function ReviewSidePanelTabContent({
  setTabState,
  tabState,
}: ReviewSidePanelTabContentProps) {
  const [portalTarget, setPortalTarget] = useState<HTMLDivElement | null>(null);

  return (
    <div ref={setPortalTarget} className="relative h-full min-h-0">
      <ReviewTabBody
        expandedActionsPortalTarget={portalTarget}
        setTabState={setTabState}
        tabState={tabState}
      />
    </div>
  );
}

export function initReviewSidePanelTabContentChunk(): void {}
