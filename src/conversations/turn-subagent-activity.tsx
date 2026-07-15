// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Subagent inline activity aggregation for a conversation turn.

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { SubagentActivityInlineGroup } from "./subagent-activity-inline-group";
import {
  buildSubagentActivityRows,
  summarizeSubagentActivityStatus,
  useBackgroundSubagents,
  useStableCallback,
} from "../boundaries/onboarding-commons-externals.facade";

interface UseTurnSubagentActivityOptions {
  conversationId: string;
  intl: unknown;
  isBackgroundSubagentsEnabled: boolean;
  subagentActivityItemGroups: any[];
  turnKey: string;
}

export function useTurnSubagentActivity({
  conversationId,
  intl,
  isBackgroundSubagentsEnabled,
  subagentActivityItemGroups,
  turnKey,
}: UseTurnSubagentActivityOptions) {
  const backgroundAgents = useBackgroundSubagents(
    isBackgroundSubagentsEnabled ? conversationId : null,
  );
  const subagentActivityGroups = useMemo(() => {
    if (!isBackgroundSubagentsEnabled) {
      return [];
    }
    if (subagentActivityItemGroups.length > 0) {
      return subagentActivityItemGroups.map((group: any) => {
        const rows = buildSubagentActivityRows({
          activityItems: group,
          backgroundAgents,
          intl,
        });
        return {
          anchorItemId: group[0]?.id ?? null,
          rows,
          statusLabel: summarizeSubagentActivityStatus(
            intl,
            rows.map((row: any) => row.activityStatus),
          ),
        };
      });
    }
    const inlineRows = backgroundAgents
      .filter(
        (agent: any) =>
          agent.showInlineActivity && agent.parentTurnKey === turnKey,
      )
      .map((agent: any) => ({
        activityStatus: agent.status === "done" ? "done" : "active",
        conversationId: agent.conversationId,
        displayName: agent.displayName,
        status: agent.status,
        statusSummary: agent.statusSummary,
      }));
    return inlineRows.length === 0
      ? []
      : [
          {
            anchorItemId: null,
            rows: inlineRows,
            statusLabel: summarizeSubagentActivityStatus(
              intl,
              inlineRows.map((row: any) => row.activityStatus),
            ),
          },
        ];
  }, [
    backgroundAgents,
    intl,
    isBackgroundSubagentsEnabled,
    subagentActivityItemGroups,
    turnKey,
  ]);
  const subagentActivityRows = subagentActivityGroups.flatMap(
    ({ rows }: any) => rows,
  );
  const [animatedConversationIds, setAnimatedConversationIds] = useState(
    () =>
      new Set(
        subagentActivityRows.map(
          ({ conversationId: rowConversationId }: any) => rowConversationId,
        ),
      ),
  );
  const markEntranceAnimated = useStableCallback(
    (rowConversationId: string) => {
      setAnimatedConversationIds((current: Set<string>) => {
        if (current.has(rowConversationId)) {
          return current;
        }
        const next = new Set(current);
        next.add(rowConversationId);
        return next;
      });
    },
  );
  const subagentActivityContentByItemId = new Map<string, ReactNode>();
  for (const group of subagentActivityGroups) {
    if (group.anchorItemId != null) {
      subagentActivityContentByItemId.set(
        group.anchorItemId,
        <SubagentActivityInlineGroup
          rows={group.rows}
          statusLabel={group.statusLabel}
          shouldAnimateEntrance={(rowConversationId: string) =>
            !animatedConversationIds.has(rowConversationId)
          }
          onEntranceAnimationEnd={markEntranceAnimated}
        />,
      );
    }
  }
  const hasSubagentActivity = subagentActivityRows.length > 0;
  const hasActiveSubagentActivity = subagentActivityRows.some(
    ({ status }: any) => status !== "done",
  );
  return {
    hasActiveSubagentActivity,
    hasSubagentActivity,
    subagentActivityContentByItemId,
    subagentActivityRows,
  };
}
