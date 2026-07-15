// Restored from ref/webview/assets/plan-summary-page-B3al0AKT.js
// Route page for rendering a plan summary passed through react-router location state.

import type { ReactElement } from "react";
import { PlanSummaryCard } from "../conversations/local-conversation-thread-parts/plan-summary-card";
import { useLocation } from "../vendor/react-router";
type PlanSummaryLocationState = {
  conversationId?: unknown;
  planContent?: unknown;
};
type PlanSummaryMessageItem = {
  type: "assistant-message";
  content: string;
  sentAtMs: null;
  completed: true;
  phase: null;
  structuredOutput: undefined;
};
type PlanSummaryContentProps = {
  conversationId: string;
  planContent: string;
};
export function PlanSummaryPage(): ReactElement {
  const location = useLocation();
  const planState = parsePlanSummaryLocationState(location.state);
  if (planState == null) {
    return <PlanSummaryLoadingSkeleton />;
  }
  return (
    <PlanSummaryContent
      planContent={planState.planContent}
      conversationId={planState.conversationId}
    />
  );
}
function parsePlanSummaryLocationState(
  state: unknown,
): PlanSummaryContentProps | null {
  if (state == null || typeof state !== "object") return null;
  const { conversationId, planContent } = state as PlanSummaryLocationState;
  if (typeof conversationId !== "string" || conversationId.length === 0) {
    return null;
  }
  if (typeof planContent !== "string" || planContent.length === 0) {
    return null;
  }
  return {
    conversationId,
    planContent,
  };
}
function PlanSummaryContent({
  conversationId,
  planContent,
}: PlanSummaryContentProps): ReactElement {
  const item: PlanSummaryMessageItem = {
    type: "assistant-message",
    content: planContent,
    sentAtMs: null,
    completed: true,
    phase: null,
    structuredOutput: undefined,
  };
  return (
    <div className="overflow-y-auto p-[var(--padding-panel)]">
      <PlanSummaryCard
        item={item}
        conversationId={conversationId}
        cwd={null}
        showOpenButton={false}
      />
    </div>
  );
}
function PlanSummaryLoadingSkeleton(): ReactElement {
  return (
    <div className="p-[var(--padding-panel)]">
      <div className="animate-pulse overflow-hidden rounded-2xl border border-token-border bg-token-editor-background/50">
        <div className="flex items-center gap-3 border-b border-token-border/60 px-4 py-3">
          <div className="size-8 rounded-lg bg-token-foreground/10" />
          <div className="h-4 w-24 rounded bg-token-foreground/20" />
        </div>
        <div className="space-y-3 px-4 py-4">
          <div className="h-3 w-5/6 rounded bg-token-foreground/10" />
          <div className="h-3 w-4/6 rounded bg-token-foreground/10" />
          <div className="h-3 w-3/6 rounded bg-token-foreground/10" />
        </div>
      </div>
    </div>
  );
}
