// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Inline citation card rendered inside a chat message when the assistant
// created / updated / deleted (or proposed) a scheduled task. Clicking it opens
// the matching automation editor tab, navigates to the automations page, or
// starts a create flow depending on the directive mode and route context.
import type { ReactElement } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import type { IntlShape } from "../vendor/react-intl";
import { isHeartbeatAutomation } from "../boundaries/src-l0hb-mz-p";
import { automationsQuerySignal } from "../automation/automation-schedule/automations-query";
import { getAutomationDirectiveActionMode } from "./shared";
import {
  openAutomationTab,
  openAutomationSuggestionTab,
} from "./automation-side-panel-tabs";
import { useConversationIdFromRoute } from "../conversations/use-conversation-id-from-route";
import {
  useAppScope,
  useAtomValue,
  useFeatureGate,
  useRouteMatch,
  useSignalValue,
  useSetSignal,
  appRootScope,
  hostBridge,
  ScheduledTaskIcon,
  CitationActionLabel,
  CitationCardBody,
  CitationCardFrame,
  formatRruleSummary,
  startCase,
  pendingAutomationDirectiveSignal,
  activeAutomationSeedSignal,
} from "../boundaries/onboarding-commons-externals.facade";

const ALLOW_THREAD_DESTINATION_GATE_ID = "1488233300";
const UUID_LIKE_PATTERN = /^[0-9a-f]{8}-[0-9a-f-]+$/i;

type AutomationCitationMode =
  | "view"
  | "create"
  | "update"
  | "delete"
  | "suggested-create"
  | "suggested-update"
  | string;

interface AutomationCitationResult {
  automationId?: string | null;
  snapshot?: { name?: string | null; rrule?: string | null } | null;
  mode?: AutomationCitationMode;
  deleteStatus?: string;
}

export interface AutomationUpdateCitationProps {
  result?: AutomationCitationResult | null;
  id?: string | null;
  kind?: "cron" | "heartbeat" | string | null;
  mode: AutomationCitationMode;
  name?: string;
  prompt?: string | null;
  rrule?: string | null;
  cwds?: string[] | null;
  destination?: string | null;
  executionEnvironment?: string | null;
  localEnvironmentConfigPath?: string | null;
  model?: string | null;
  reasoningEffort?: string | null;
  targetThreadId?: string | null;
  status?: string | null;
}

function isStringValue(value: unknown): value is string {
  return typeof value === "string";
}

function deriveTitleFromAutomationId(value: string | null): string | null {
  const trimmed = value?.trim() ?? "";
  if (trimmed.length === 0) {
    return null;
  }
  if (UUID_LIKE_PATTERN.test(trimmed)) {
    return trimmed;
  }
  return startCase(trimmed.replace(/[-_]+/g, " "));
}

function formatCitationActionLabel({
  deleteStatus,
  intl,
  mode,
}: {
  deleteStatus?: string;
  intl: IntlShape;
  mode: AutomationCitationMode;
}): string {
  switch (mode) {
    case "create":
      return intl.formatMessage({
        id: "automation.updateDirective.created",
        defaultMessage: "Created",
        description:
          "Action label for an automation citation after creating an automation",
      });
    case "update":
      return intl.formatMessage({
        id: "automation.updateDirective.updated",
        defaultMessage: "Updated",
        description:
          "Action label for an automation citation after updating an automation",
      });
    case "delete":
      return deleteStatus === "not_found"
        ? intl.formatMessage({
            id: "automation.updateDirective.missing",
            defaultMessage: "Missing",
            description:
              "Action label for an automation citation when the automation was already missing",
          })
        : intl.formatMessage({
            id: "automation.updateDirective.deleted",
            defaultMessage: "Deleted",
            description:
              "Action label for an automation citation after deleting an automation",
          });
    case "suggested-create":
      return intl.formatMessage({
        id: "automation.updateDirective.proposed",
        defaultMessage: "Proposed",
        description:
          "Action label for an automation citation that proposes creating an automation",
      });
    case "suggested-update":
      return intl.formatMessage({
        id: "automation.updateDirective.proposedUpdate",
        defaultMessage: "Proposed update",
        description:
          "Action label for an automation citation that proposes updating an automation",
      });
    default:
      return intl.formatMessage({
        id: "automation.updateDirective.automation",
        defaultMessage: "Scheduled task",
        description: "Generic action label for a scheduled task citation",
      });
  }
}

function resolveAutomationView({
  isViewMode,
  trimmedId,
  trimmedName,
  trimmedRrule,
  automations,
  isLoading,
}: {
  isViewMode: boolean;
  trimmedId: string | null;
  trimmedName: string | null;
  trimmedRrule: string | null;
  automations: Array<{ id: string; name?: string; rrule?: string }> | null;
  isLoading: boolean;
}): {
  resolvedName: string | null;
  resolvedRrule: string | null;
  isLoadingView: boolean;
} {
  const matched =
    isViewMode && trimmedId != null && automations
      ? (automations.find((item) => item.id === trimmedId) ?? null)
      : null;
  const resolvedName = trimmedName ?? matched?.name ?? null;
  return {
    resolvedName,
    resolvedRrule: trimmedRrule ?? matched?.rrule ?? null,
    isLoadingView: isViewMode && isLoading && resolvedName == null,
  };
}

export function AutomationUpdateCitation({
  result = null,
  id = null,
  kind,
  mode,
  name = "",
  prompt,
  rrule,
  cwds,
  destination,
  executionEnvironment,
  localEnvironmentConfigPath,
  model,
  reasoningEffort,
  targetThreadId,
  status,
}: AutomationUpdateCitationProps): ReactElement {
  const store = useAppScope(appRootScope);
  const intl = useIntl();
  const allowThreadDestination = useFeatureGate(
    ALLOW_THREAD_DESTINATION_GATE_ID,
  );
  const routeConversationId = useConversationIdFromRoute();
  const remoteMatch = useRouteMatch("/remote/:conversationId");
  const localMatch = useRouteMatch("/local/:conversationId");
  const pendingDirective = useSignalValue(pendingAutomationDirectiveSignal);
  const setActiveAutomationSeed = useSetSignal(activeAutomationSeedSignal);
  const setPendingDirective = useSetSignal(pendingAutomationDirectiveSignal);

  const resolvedTargetThreadId =
    destination === "thread" && allowThreadDestination && remoteMatch == null
      ? routeConversationId
      : (targetThreadId ?? null);

  const directiveKey = JSON.stringify({
    id,
    kind,
    mode,
    name,
    prompt,
    rrule,
    cwds,
    destination,
    executionEnvironment,
    localEnvironmentConfigPath,
    model,
    reasoningEffort,
    targetThreadId: resolvedTargetThreadId,
    status,
  });

  const automationIdFromDirective =
    pendingDirective?.directiveKey === directiveKey
      ? pendingDirective.automationId
      : null;
  const snapshot = result?.snapshot ?? null;
  const directiveMode = mode === "view" ? mode : null;
  const isViewMode = mode === "view" && id != null;
  const shouldLoadAutomations =
    id != null && (isViewMode || mode === "suggested-update");

  const automationsQuery = useAtomValue(automationsQuerySignal);
  const automations = automationsQuery.data;
  const isLoading = shouldLoadAutomations ? automationsQuery.isLoading : false;

  const existingAutomation =
    id == null
      ? null
      : (automations?.items.find((item: { id: string }) => item.id === id) ??
        null);

  const { resolvedName, resolvedRrule, isLoadingView } = resolveAutomationView({
    isViewMode,
    trimmedId: id ?? null,
    trimmedName: name ?? snapshot?.name ?? null,
    trimmedRrule: rrule ?? snapshot?.rrule ?? null,
    automations: automations?.items ?? null,
    isLoading,
  });

  const rruleFallback = intl.formatMessage({
    id: "settings.automations.rruleSummaryFallback",
    defaultMessage: "Custom schedule",
    description: "Fallback label when RRULE summary cannot be generated",
  });
  const rruleSummary = formatRruleSummary({
    rrule: resolvedRrule,
    intl,
    fallbackMessage: rruleFallback,
  });
  const loadingLabel = intl.formatMessage({
    id: "settings.automations.loading",
    defaultMessage: "Loading…",
    description: "Loading state for workflows list",
  });
  const untitledLabel = intl.formatMessage({
    id: "automation.updateDirective.untitled",
    defaultMessage: "Untitled scheduled task",
    description: "Fallback title when scheduled task name is missing",
  });

  const citationMode = result?.mode ?? mode;
  const isDelete = citationMode === "delete";
  const citationAutomationId =
    isDelete || result?.automationId != null
      ? (result?.automationId ?? id ?? null)
      : (automationIdFromDirective ?? result?.automationId ?? id);
  const deletedTitle = isDelete
    ? deriveTitleFromAutomationId(citationAutomationId ?? null)
    : null;

  const title = isLoadingView
    ? loadingLabel
    : resolvedName || deletedTitle || untitledLabel;
  const titleForTab = resolvedName ?? deletedTitle ?? untitledLabel;
  const subtitleRrule =
    rruleSummary ||
    (isLoadingView
      ? loadingLabel
      : resolvedRrule == null
        ? null
        : rruleFallback);

  const canCreate =
    name != null &&
    prompt != null &&
    rrule != null &&
    (kind === "heartbeat" ? resolvedTargetThreadId != null : cwds != null);
  const canUpdate =
    id != null &&
    status != null &&
    name != null &&
    prompt != null &&
    rrule != null &&
    (existingAutomation == null
      ? kind === "heartbeat"
        ? resolvedTargetThreadId != null
        : cwds != null
      : isHeartbeatAutomation(existingAutomation)
        ? true
        : cwds != null);
  const isSuggestedUpdateLoading =
    mode === "suggested-update" &&
    shouldLoadAutomations &&
    automationsQuery.isLoading;

  const seed = {
    directiveKey,
    mode: directiveMode,
    id: id ?? null,
    kind: kind ?? null,
    name: name ?? "",
    prompt: prompt ?? "",
    rrule: rrule ?? "",
    cwds: cwds ?? [],
    executionEnvironment: executionEnvironment ?? null,
    localEnvironmentConfigPath: localEnvironmentConfigPath ?? null,
    model: model ?? null,
    reasoningEffort: reasoningEffort ?? null,
    targetThreadId: resolvedTargetThreadId,
    status: status ?? null,
  };

  const hasExistingDirective = automationIdFromDirective != null;
  const openMode = getAutomationDirectiveActionMode({
    directiveMode,
    canCreate,
    canUpdate,
    isViewMode,
    forceOpen: hasExistingDirective,
  });

  const subtitleMeta = isDelete ? null : subtitleRrule;
  const actionLabel = formatCitationActionLabel({
    deleteStatus: result?.deleteStatus,
    intl,
    mode: citationMode,
  });

  const handleClick = () => {
    if (isSuggestedUpdateLoading) {
      return;
    }
    const isSuggested =
      mode === "suggested-create" || mode === "suggested-update";
    if (
      automationIdFromDirective == null &&
      (isSuggested || openMode === "create")
    ) {
      if (!isSuggested) {
        setPendingDirective(null);
      }
      openAutomationSuggestionTab({ scope: store, seed, title: titleForTab });
      return;
    }
    const targetId = citationAutomationId;
    if (targetId != null) {
      if (localMatch != null || remoteMatch != null) {
        openAutomationTab({
          scope: store,
          automationId: targetId,
          title: titleForTab,
        });
        return;
      }
      hostBridge.dispatchHostMessage({
        type: "navigate-to-route",
        path: `/automations?automationId=${targetId}`,
      });
      return;
    }
    if (openMode === "create") {
      setPendingDirective(null);
      setActiveAutomationSeed(seed);
      hostBridge.dispatchHostMessage({
        type: "navigate-to-route",
        path: "/automations?automationMode=create",
      });
    }
  };

  const isEnabled =
    !isSuggestedUpdateLoading &&
    (citationAutomationId != null || openMode === "create");
  const metaParts = [actionLabel, resolvedName, subtitleMeta].filter(
    isStringValue,
  );
  const ariaLabel = metaParts.join(" · ") || undefined;
  const subtitle = subtitleMeta ?? actionLabel;
  const icon = (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-token-bg-secondary text-token-text-secondary">
      <ScheduledTaskIcon className="size-6" aria-hidden />
    </span>
  );
  const trailing = isEnabled ? (
    <CitationActionLabel
      label={
        <FormattedMessage
          id="automation.updateDirective.open"
          defaultMessage="Open"
          description="Button label for opening an automation from a chat message"
        />
      }
    />
  ) : null;

  return (
    <CitationCardFrame as="span" className="mt-3">
      <button
        type="button"
        className="w-full cursor-interaction text-left hover:bg-token-list-hover-background/30 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset disabled:cursor-default"
        aria-label={ariaLabel}
        disabled={!isEnabled}
        onClick={handleClick}
      >
        <CitationCardBody
          icon={icon}
          title={title}
          subtitle={subtitle}
          trailing={trailing}
        />
      </button>
    </CitationCardFrame>
  );
}
