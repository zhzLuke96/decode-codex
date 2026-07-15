// Restored from ref/webview/assets/hooks-settings-DUMdgBqk.js
// Semantic Hooks settings page backed by the restored hooks model/query modules.
import React, { type ReactNode, type SVGProps } from "react";
import clsx from "clsx";

import {
  _appScopeA as useAppScopeQueryResult,
  _appScopeO as useAppScopeStore,
} from "../../boundaries/app-scope";
import { LOCAL_HOST_ID } from "../../boundaries/use-host-config.facade";
import { vscodeApiA as useQueryClient } from "../../boundaries/vscode-api";
import { openConfigInEditor } from "../../composer/open-config-in-editor";
import { AppgenPlugIcon } from "../../icons/appgen-plug-icon";
import { BuildingIcon } from "../../icons/building-icon";
import { ChevronIcon } from "../../icons/chevron-icon";
import { FileIcon } from "../../icons/file-icon";
import { FolderIcon } from "../../icons/folder-icon";
import { HooksIcon } from "../../icons/hooks-icon";
import { RegenerateIcon } from "../../icons/regenerate-icon";
import { ShieldCodeIcon } from "../../icons/shield-code-icon";
import { WarningIcon } from "../../icons/warning-icon";
import {
  SettingsTitle,
  formatWorkspaceRootLabel,
} from "../../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";
import {
  activeRemoteProjectSelector,
  workspaceRootOptionsQuery,
  workspaceRootOptionsSelector,
} from "../../runtime/current-app-initial/pull-request-new-thread-runtime";
import { toastControllerSignal } from "../../runtime/current-app-initial/worktree-new-thread-query-runtime";
import { useScopedValue as useRuntimeScopedValue } from "../../runtime/app-scope-hooks";
import { Button } from "../../ui/button";
import { Banner } from "../../ui/banner";
import {
  DialogBody,
  DialogHeader,
  DialogLayout,
} from "../../ui/dialog-layout";
import { SettingsContentLayout } from "../../ui/settings-content-layout";
import { SettingsControlRow } from "../../ui/settings-row";
import { Tooltip } from "../../ui/tooltip-b";
import { Toggle } from "../../utils/toggle";
import { CODEX_HOOKS_DOCS_URL } from "../../utils/links-bd-mmkun-d";
import { SettingsGroup } from "../../utils/settings-group";
import { SettingsSurface } from "../../utils/settings-surface";
import { Link, useLocation, useSearchParams } from "../../vendor/react-router";
import {
  defineMessages,
  FormattedMessage,
  FormattedNumber,
  useIntl,
  type IntlShape,
} from "../../vendor/react-intl";
import {
  buildHookSourceGroups,
  countHooksNeedingReview,
  findHookSourceEntry,
  getHooksForEvent,
  hookNeedsReview,
  parseHookSourceSelection,
  summarizeHookConfigEntryIssues,
  summarizeHooksByEvent,
} from "../hooks-settings-model";
import type {
  HookConfigEntry,
  HookDefinition,
  HookError,
  HookEventName,
  HookSourceGroup,
  HookSourceGroupId,
  HookSourceSelection,
} from "../hooks-settings-model/types";
import {
  formatFallbackHookTitle,
  formatHookEventDescription,
  formatHookEventName,
  getHookPluginDisplayId,
} from "../hooks-settings-copy";
import {
  hooksForProjectsQueryOptions,
  hooksStateMutation,
  invalidateHooksQueries,
} from "../hooks-settings-queries";
import { updateHooksSettingsSearchParams } from "../hooks-settings-route";
import { useSettingsHostContext } from "../settings-host-context";

type HooksQueryResponse = {
  data?: HookConfigEntry[];
  labels?: Record<string, string>;
};

type QueryResult<TData> = {
  data?: TData;
  error?: Error | null;
  isFetching?: boolean;
  isPending?: boolean;
  refetch?: () => Promise<{ isSuccess?: boolean }>;
};

type MutationResult<TVariables> = {
  mutate: (variables: TVariables) => void;
};

type HookStateEdit = {
  enabled?: boolean;
  key: string;
  trustedHash?: string | null;
};

type WorkspaceRootOptions = {
  labels?: Record<string, string>;
  roots?: string[];
};

type ActiveRemoteProject = {
  hostId?: string;
  remotePath?: string;
};

type HooksSettingsHook = HookDefinition & {
  command?: string | null;
  currentHash?: string | null;
  handlerType?: "agent" | "command" | "prompt" | string | null;
  isManaged?: boolean;
  matcher?: string | null;
  sourcePath?: string | null;
  statusMessage?: string | null;
  timeoutSec?: number;
};

type HookIssueSummary = ReturnType<typeof summarizeHookConfigEntryIssues>;

type HooksSettingsContentProps = {
  entries?: HookConfigEntry[];
  hostId: string;
  isLoading: boolean;
  isLoadingProjectRoots: boolean;
  isRefreshing: boolean;
  isRemoteHost: boolean;
  loadError?: Error | null;
  onRefreshHooks: () => void;
  onSelectSourceSection: (selection: HookSourceSelection | null) => void;
  onToggleHookEnabled: (hook: HooksSettingsHook, enabled: boolean) => void;
  onTrustHook: (hook: HooksSettingsHook) => void;
  projectRootLabels?: Record<string, string>;
  projectRoots?: string[];
  selectedSourceSection: HookSourceSelection | null;
};

type SourceRowProps = {
  entry: HookConfigEntry;
  icon: ReactNode;
  label: ReactNode;
  onClick: () => void;
};

const HOOKS_SETTINGS_SLUG = "hooks-settings";

const hooksPageMessages = defineMessages({
  openConfigFile: {
    id: "settings.hooks.event.openConfigFile",
    defaultMessage: "Open config file",
    description: "Button label for opening the config file that defines a hook",
  },
  reloadHooks: {
    id: "settings.hooks.refresh",
    defaultMessage: "Reload hooks",
    description: "Button label to reload hooks for the visible projects",
  },
  refreshSuccess: {
    id: "settings.hooks.refresh.success",
    defaultMessage: "Refreshed hooks",
    description: "Success toast shown after manually refreshing hooks",
  },
});

function TrustedHookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M15.344 10.036a1 1 0 1 0-1.688-1.072l-2.474 3.896-.943-1.034a1 1 0 0 0-1.478 1.348l1.826 2a1 1 0 0 0 1.583-.138l3.174-5Z" />
      <path
        fillRule="evenodd"
        d="M13.203 1.935a3 3 0 0 0-2.405 0l-6 2.625A3 3 0 0 0 3 7.308V13a9 9 0 1 0 18 0V7.308a3 3 0 0 0-1.797-2.748l-6-2.625Zm-1.604 1.832a1 1 0 0 1 .802 0l6 2.625a1 1 0 0 1 .599.916V13a7 7 0 1 1-14 0V7.308a1 1 0 0 1 .6-.916l6-2.625Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function formatAttentionCounts(
  summary: HookIssueSummary,
  intl: IntlShape,
): ReactNode {
  const issueCount =
    summary.issueCount > 0
      ? intl.formatMessage(
          {
            id: "settings.hooks.summary.issueCounts",
            defaultMessage:
              "{issueCount, plural, one {# issue} other {# issues}}",
            description: "Hook load issue count for a project row",
          },
          { issueCount: summary.issueCount },
        )
      : "";
  const needsReview =
    summary.needsReview > 0
      ? intl.formatMessage(
          {
            id: "settings.hooks.summary.reviewCounts",
            defaultMessage:
              "{needsReview, plural, one {# needs review} other {# need review}}",
            description: "Review-needed hook count for a project row",
          },
          { needsReview: summary.needsReview },
        )
      : "";

  return (
    <FormattedMessage
      id="settings.hooks.summary.attentionCounts"
      defaultMessage="{issueCount}{separator}{needsReview}"
      description="Combined hook load issue and review-needed counts for a project row"
      values={{
        issueCount,
        separator: issueCount !== "" && needsReview !== "" ? " / " : "",
        needsReview,
      }}
    />
  );
}

function HookEventSection({
  eventName,
  hooks,
  hostId,
  isRemoteHost,
  onToggleHookEnabled,
  onTrustHook,
}: {
  eventName: HookEventName;
  hooks: HookDefinition[];
  hostId: string;
  isRemoteHost: boolean;
  onToggleHookEnabled: (hook: HooksSettingsHook, enabled: boolean) => void;
  onTrustHook: (hook: HooksSettingsHook) => void;
}) {
  const intl = useIntl();
  const [expandedHookKey, setExpandedHookKey] = React.useState<string | null>(
    null,
  );
  const eventHooks = getHooksForEvent(hooks, eventName) as HooksSettingsHook[];

  return (
    <div className="border-t border-token-border px-3">
      <div className="divide-y-[0.5px] divide-token-border">
        {eventHooks.map((hook, index) => {
          const needsReview = hookNeedsReview(hook);
          const canOpenConfig = !isRemoteHost && !hook.isManaged;
          const isExpanded = expandedHookKey === hook.key;
          const rowLabel = formatFallbackHookTitle(index, intl);

          return (
            <div key={hook.key} className={clsx(isExpanded && "pb-2")}>
              <div className="-mx-3 flex items-center gap-2 px-3 hover:bg-token-list-hover-background">
                <div className="relative flex min-w-0 flex-1">
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    className={clsx(
                      "flex min-w-0 flex-1 cursor-interaction appearance-none items-center border-0 bg-transparent py-2 pl-7 text-left text-sm text-inherit [font:inherit] focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none",
                      canOpenConfig ? "pr-12" : "pr-6",
                    )}
                    onClick={() => {
                      setExpandedHookKey(isExpanded ? null : hook.key);
                    }}
                  >
                    <span className="shrink-0 text-token-text-primary">
                      {rowLabel}
                    </span>
                  </button>
                  {canOpenConfig && hook.sourcePath != null ? (
                    <Tooltip
                      triggerAsChild
                      tooltipContent={
                        <FormattedMessage {...hooksPageMessages.openConfigFile} />
                      }
                    >
                      <button
                        type="button"
                        aria-label={intl.formatMessage(
                          hooksPageMessages.openConfigFile,
                        )}
                        className="absolute top-1/2 right-6 inline-flex size-5 -translate-y-1/2 cursor-interaction items-center justify-center rounded-md text-token-text-tertiary hover:bg-token-list-hover-background hover:text-token-text-primary focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none"
                        onClick={() => {
                          void openConfigInEditor({
                            hostId,
                            path: hook.sourcePath as string,
                          });
                        }}
                      >
                        <FileIcon className="icon-xxs" aria-hidden />
                      </button>
                    </Tooltip>
                  ) : null}
                  <ChevronIcon
                    aria-hidden
                    className={clsx(
                      "icon-2xs pointer-events-none absolute top-1/2 right-1 -translate-y-1/2 text-token-text-secondary",
                      isExpanded && "rotate-180",
                    )}
                  />
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  {needsReview ? (
                    <Tooltip
                      delayDuration={0}
                      tooltipContent={
                        hook.trustStatus === "modified" ? (
                          <FormattedMessage
                            id="settings.hooks.event.changedReviewReason"
                            defaultMessage="Hook changed since last trusted"
                            description="Tooltip shown for changed hooks awaiting review"
                          />
                        ) : (
                          <FormattedMessage
                            id="settings.hooks.event.untrustedReviewReason"
                            defaultMessage="New hook"
                            description="Tooltip shown for hooks awaiting first review"
                          />
                        )
                      }
                    >
                      <Button
                        color="outline"
                        size="composerSm"
                        onClick={() => onTrustHook(hook)}
                      >
                        <TrustedHookIcon className="icon-2xs" />
                        <FormattedMessage
                          id="settings.hooks.event.trust"
                          defaultMessage="Trust"
                          description="Button label to trust a hook"
                        />
                      </Button>
                    </Tooltip>
                  ) : null}

                  {hook.isManaged ? (
                    <Tooltip
                      delayDuration={0}
                      tooltipContent={
                        <FormattedMessage
                          id="settings.hooks.event.managedTooltip"
                          defaultMessage="Managed hooks are always on"
                          description="Tooltip shown for admin-managed hooks"
                        />
                      }
                    >
                      <span className="inline-flex cursor-not-allowed" tabIndex={0}>
                        <Toggle
                          ariaLabel={rowLabel}
                          checked
                          className="pointer-events-none"
                          disabled
                          onChange={() => {}}
                        />
                      </span>
                    </Tooltip>
                  ) : (
                    <Tooltip
                      delayDuration={0}
                      tooltipContent={
                        needsReview ? (
                          <FormattedMessage
                            id="settings.hooks.event.disabledUntilTrustedTooltip"
                            defaultMessage="Disabled until hook is trusted"
                            description="Tooltip shown for review-needed hooks whose toggle cannot be enabled yet"
                          />
                        ) : null
                      }
                    >
                      <span
                        className={needsReview ? "inline-flex cursor-not-allowed" : ""}
                        tabIndex={needsReview ? 0 : undefined}
                      >
                        <Toggle
                          ariaLabel={rowLabel}
                          checked={hook.enabled && !needsReview}
                          className={needsReview ? "pointer-events-none" : ""}
                          disabled={needsReview}
                          onChange={(enabled) => {
                            onToggleHookEnabled(hook, enabled);
                          }}
                        />
                      </span>
                    </Tooltip>
                  )}
                </div>
              </div>
              {isExpanded ? (
                <div className="pl-7">
                  <HookDetailsPanel hook={hook} />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function HookDetailsPanel({ hook }: { hook: HooksSettingsHook }) {
  return (
    <div className="mt-2 overflow-hidden rounded-md border border-token-border text-sm">
      <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-2 px-3 py-3">
        <DetailRow
          label={
            <FormattedMessage
              id="settings.hooks.event.handler"
              defaultMessage="Handler"
              description="Label for the handler type of a configured hook"
            />
          }
        >
          <HookHandlerTypeLabel handlerType={hook.handlerType} />
        </DetailRow>
        {hook.command == null ? null : (
          <DetailRow
            label={
              <FormattedMessage
                id="settings.hooks.event.command"
                defaultMessage="Command"
                description="Label for the command executed by a hook"
              />
            }
          >
            <code className="block font-mono text-xs break-all whitespace-pre-wrap">
              {hook.command}
            </code>
          </DetailRow>
        )}
        {hook.matcher == null ? null : (
          <DetailRow
            label={
              <FormattedMessage
                id="settings.hooks.event.matcher"
                defaultMessage="Matcher"
                description="Label for the matcher configured for a hook"
              />
            }
          >
            <code className="font-mono text-xs break-all">{hook.matcher}</code>
          </DetailRow>
        )}
        {hook.timeoutSec == null ? null : (
          <DetailRow
            label={
              <FormattedMessage
                id="settings.hooks.event.timeout"
                defaultMessage="Timeout"
                description="Label for a hook execution timeout"
              />
            }
          >
            <FormattedNumber
              value={hook.timeoutSec}
              style="unit"
              unit="second"
              unitDisplay="narrow"
            />
          </DetailRow>
        )}
        {hook.statusMessage == null ? null : (
          <DetailRow
            label={
              <FormattedMessage
                id="settings.hooks.event.statusMessage"
                defaultMessage="Status message"
                description="Label for the status message configured for a hook"
              />
            }
          >
            {hook.statusMessage}
          </DetailRow>
        )}
      </dl>
    </div>
  );
}

function DetailRow({
  children,
  label,
}: {
  children: ReactNode;
  label: ReactNode;
}) {
  return (
    <>
      <dt className="text-token-text-secondary">{label}</dt>
      <dd className="min-w-0 text-token-text-primary">{children}</dd>
    </>
  );
}

function HookHandlerTypeLabel({
  handlerType,
}: {
  handlerType?: string | null;
}) {
  switch (handlerType) {
    case "command":
      return (
        <FormattedMessage
          id="settings.hooks.event.commandHandler"
          defaultMessage="Command"
          description="Label for a command hook handler type"
        />
      );
    case "prompt":
      return (
        <FormattedMessage
          id="settings.hooks.event.promptHandler"
          defaultMessage="Prompt"
          description="Label for a prompt hook handler type"
        />
      );
    case "agent":
      return (
        <FormattedMessage
          id="settings.hooks.event.agentHandler"
          defaultMessage="Agent"
          description="Label for an agent hook handler type"
        />
      );
    default:
      return <>{handlerType ?? ""}</>;
  }
}

function HookSourceDialog({
  entry,
  hostId,
  isLoading,
  isOpen,
  isRemoteHost,
  loadError,
  onClose,
  onToggleHookEnabled,
  onTrustHook,
  subtitle,
  title,
  titleHref,
  titleIcon,
}: {
  entry: HookConfigEntry | null;
  hostId: string;
  isLoading: boolean;
  isOpen: boolean;
  isRemoteHost: boolean;
  loadError?: Error | null;
  onClose: () => void;
  onToggleHookEnabled: (hook: HooksSettingsHook, enabled: boolean) => void;
  onTrustHook: (hook: HooksSettingsHook) => void;
  subtitle: ReactNode;
  title: ReactNode;
  titleHref?: string;
  titleIcon: ReactNode;
}) {
  const headerTitle =
    title == null ? null : titleHref == null ? (
      <span className="flex min-w-0 items-center gap-2">
        {titleIcon == null ? null : (
          <span className="flex shrink-0 items-center justify-center">
            {titleIcon}
          </span>
        )}
        <span className="min-w-0">{title}</span>
      </span>
    ) : (
      <Link
        className="group -m-1 inline-flex min-w-0 cursor-interaction items-center gap-2 rounded-md p-1 hover:bg-token-list-hover-background focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none active:scale-[0.98]"
        to={titleHref}
      >
        {titleIcon == null ? null : (
          <span className="flex shrink-0 items-center justify-center">
            {titleIcon}
          </span>
        )}
        <span className="min-w-0">{title}</span>
        <ChevronIcon
          className="icon-2xs shrink-0 -rotate-90 opacity-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:translate-x-0.5 group-focus-visible:opacity-100"
          aria-hidden
        />
      </Link>
    );

  return (
    <DialogLayout
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      contentProps={{ "aria-describedby": undefined }}
      size="xwide"
    >
      <div className="flex max-h-[calc(100vh-6rem)] min-h-0 flex-col gap-4">
        <DialogHeader
          title={<h2 className="flex min-w-0">{headerTitle}</h2>}
          subtitle={subtitle}
          subtitleClassName="break-all"
        />
        <DialogBody className="vertical-scroll-fade-mask min-h-0 flex-1 gap-3 overflow-y-auto pr-1 [&>*]:shrink-0">
          {isOpen ? (
            isLoading ? (
              <LoadingHooksSurface />
            ) : loadError == null ? (
              <SourceHooksPanel
                entry={entry}
                hostId={hostId}
                isRemoteHost={isRemoteHost}
                onToggleHookEnabled={onToggleHookEnabled}
                onTrustHook={onTrustHook}
              />
            ) : (
              <LoadErrorSurface error={loadError} />
            )
          ) : null}
        </DialogBody>
      </div>
    </DialogLayout>
  );
}

function SourceHooksPanel({
  entry,
  hostId,
  isRemoteHost,
  onToggleHookEnabled,
  onTrustHook,
}: {
  entry: HookConfigEntry | null;
  hostId: string;
  isRemoteHost: boolean;
  onToggleHookEnabled: (hook: HooksSettingsHook, enabled: boolean) => void;
  onTrustHook: (hook: HooksSettingsHook) => void;
}) {
  const intl = useIntl();
  const [issuesExpanded, setIssuesExpanded] = React.useState(false);
  if (entry == null) return null;

  const eventSummaries = summarizeHooksByEvent(entry.hooks).filter(
    (summary) => summary.installed > 0,
  );
  const reviewCount = countHooksNeedingReview(entry.hooks);
  const issueCount = entry.warnings.length + entry.errors.length;

  return (
    <>
      {reviewCount > 0 ? <ReviewWarningBanner /> : null}
      {issueCount > 0 ? (
        <HookIssuesDisclosure
          errors={entry.errors}
          expanded={issuesExpanded}
          issueCount={issueCount}
          warnings={entry.warnings}
          onToggleExpanded={() => setIssuesExpanded(!issuesExpanded)}
        />
      ) : null}
      {eventSummaries.length > 0 ? (
        <SettingsSurface>
          {eventSummaries.map((summary) => (
            <div key={summary.eventName}>
              <SettingsControlRow
                icon={<HooksIcon className="icon-xs" />}
                label={
                  <span className="font-medium">
                    {formatHookEventName(summary.eventName, intl)}
                  </span>
                }
                description={formatHookEventDescription(summary.eventName, intl)}
                control={
                  summary.needsReview > 0 ? (
                    <WarningIcon className="icon-2xs shrink-0 text-token-editor-warning-foreground" />
                  ) : null
                }
              />
              <HookEventSection
                eventName={summary.eventName}
                hostId={hostId}
                hooks={entry.hooks}
                isRemoteHost={isRemoteHost}
                onToggleHookEnabled={onToggleHookEnabled}
                onTrustHook={onTrustHook}
              />
            </div>
          ))}
        </SettingsSurface>
      ) : null}
    </>
  );
}

function ReviewWarningBanner() {
  return (
    <Banner
      Icon={WarningIcon}
      iconClassName="text-token-editor-warning-foreground"
      type="info"
      content={
        <FormattedMessage
          id="settings.hooks.review.summary"
          defaultMessage="Hooks can run outside of the sandbox so we ask you to review any recently installed or modified hooks"
          description="Banner shown when hooks require trust review"
        />
      }
    />
  );
}

function HookIssuesDisclosure({
  errors,
  expanded,
  issueCount,
  onToggleExpanded,
  warnings,
}: {
  errors: HookError[];
  expanded: boolean;
  issueCount: number;
  onToggleExpanded: () => void;
  warnings: unknown[];
}) {
  return (
    <div className="bg-token-editor-warning-background/30 overflow-hidden rounded-lg border border-token-editor-warning-foreground/30">
      <button
        type="button"
        className="flex w-full cursor-interaction items-center justify-between gap-3 px-3 py-2 text-left"
        onClick={onToggleExpanded}
      >
        <span className="flex min-w-0 items-center gap-2">
          <WarningIcon className="icon-xs shrink-0 text-token-editor-warning-foreground" />
          <span className="truncate text-sm text-token-text-primary">
            <FormattedMessage
              id="settings.hooks.issues.summary"
              defaultMessage="{count, plural, one {# issue loading hooks for this source} other {# issues loading hooks for this source}}"
              description="Summary text for hook warnings and errors"
              values={{ count: issueCount }}
            />
          </span>
        </span>
        <ChevronIcon
          className={clsx("icon-2xs shrink-0 transition-transform", expanded && "rotate-180")}
        />
      </button>
      {expanded ? (
        <div className="space-y-2 border-t border-token-editor-warning-foreground/20 px-3 py-2 text-sm text-token-text-secondary">
          {warnings.map(renderWarningDetail)}
          {errors.map(renderErrorDetail)}
        </div>
      ) : null}
    </div>
  );
}

function renderErrorDetail(error: HookError) {
  return (
    <div key={`${error.path}:${error.message}`}>
      <FormattedMessage
        id="settings.hooks.issues.error"
        defaultMessage="{path}: {message}"
        description="Expanded hook error detail"
        values={{
          path: error.path,
          message: error.message,
        }}
      />
    </div>
  );
}

function renderWarningDetail(warning: unknown) {
  const text = String(warning);
  return <div key={text}>{text}</div>;
}

function HooksSettingsContent({
  entries,
  hostId,
  isLoading,
  isLoadingProjectRoots,
  isRefreshing,
  isRemoteHost,
  loadError,
  onRefreshHooks,
  onSelectSourceSection,
  onToggleHookEnabled,
  onTrustHook,
  projectRootLabels,
  projectRoots,
  selectedSourceSection,
}: HooksSettingsContentProps) {
  const intl = useIntl();
  const reloadLabel = intl.formatMessage(hooksPageMessages.reloadHooks);
  const groups = entries == null || isLoading ? [] : buildHookSourceGroups(entries);
  const globalSections: HookSourceGroup[] = [];
  const otherSections: HookSourceGroup[] = [];
  let pluginSection: Extract<HookSourceGroup, { id: "plugin" }> | null = null;
  let projectSection: Extract<HookSourceGroup, { id: "project" }> | null = null;

  for (const group of groups) {
    switch (group.id) {
      case "plugin":
        pluginSection = group;
        break;
      case "project":
        projectSection = group;
        break;
      case "user":
      case "admin":
        globalSections.push(group);
        break;
      case "sessionFlags":
      case "unknown":
        otherSections.push(group);
        break;
    }
  }

  const selectedEntry = findHookSourceEntry(groups, selectedSourceSection);
  const selectedTitle = getSelectedSourceTitle({
    entry: selectedEntry,
    projectRootLabels,
    selection: selectedSourceSection,
  });
  const selectedTitleHref = undefined;
  const selectedTitleIcon =
    selectedSourceSection == null
      ? null
      : renderSourceIcon(selectedSourceSection.source);
  const selectedSubtitle =
    selectedSourceSection?.source === "project" ? (
      selectedSourceSection.projectRoot
    ) : selectedSourceSection == null ? null : (
      <FormattedMessage
        id="settings.hooks.source.sharedProjects"
        defaultMessage="All projects"
        description="Label for hook sources that apply across every project"
      />
    );
  const selectedKey =
    selectedSourceSection?.source === "project"
      ? selectedSourceSection.projectRoot
      : selectedSourceSection?.source === "plugin"
        ? `plugin:${selectedSourceSection.pluginId ?? "unknown"}`
        : (selectedSourceSection?.source ?? "none");
  const disableReload =
    projectRoots == null ||
    projectRoots.length === 0 ||
    isLoading ||
    isRefreshing;

  return (
    <SettingsContentLayout
      title={<SettingsTitle slug={HOOKS_SETTINGS_SLUG} />}
      subtitleClassName="whitespace-normal"
      actionPlacement="subtitle"
      subtitle={
        <>
          <FormattedMessage
            id="settings.hooks.subtitle"
            defaultMessage="Manage lifecycle hooks from config and enabled plugins."
            description="Subtitle for hooks settings"
          />{" "}
          <LearnMoreLink>
            <FormattedMessage
              id="settings.hooks.learnMore"
              defaultMessage="Learn more"
              description="Link text to the Codex hooks documentation"
            />
          </LearnMoreLink>
        </>
      }
      action={
        <Tooltip delayDuration={0} tooltipContent={reloadLabel}>
          <Button
            aria-label={reloadLabel}
            color="ghost"
            disabled={disableReload}
            onClick={onRefreshHooks}
            size="icon"
          >
            <RegenerateIcon className="icon-xs" />
          </Button>
        </Tooltip>
      }
    >
      {projectRoots == null && isLoadingProjectRoots ? (
        <LoadingHooksSurface />
      ) : projectRoots == null || projectRoots.length === 0 ? (
        <EmptyState />
      ) : loadError == null ? (
        isLoading ? (
          <LoadingHooksSurface />
        ) : groups.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="flex flex-col gap-[var(--padding-panel)]">
            {globalSections.length > 0 ? (
              <SourceGroupSection
                title={
                  <FormattedMessage
                    id="settings.hooks.source.globalConfig"
                    defaultMessage="From Config"
                    description="Group heading for hooks from global user and admin config"
                  />
                }
                sections={globalSections}
                onSelectSourceSection={onSelectSourceSection}
              />
            ) : null}
            {pluginSection == null ? null : (
              <PluginSection
                section={pluginSection}
                onSelectSourceSection={onSelectSourceSection}
              />
            )}
            {projectSection == null ? null : (
              <ProjectSection
                section={projectSection}
                projectRootLabels={projectRootLabels}
                onSelectSourceSection={onSelectSourceSection}
              />
            )}
            {otherSections.length > 0 ? (
              <SourceGroupSection
                title={
                  <FormattedMessage
                    id="settings.hooks.source.otherSources"
                    defaultMessage="Other sources"
                    description="Group heading for hooks from uncommon sources"
                  />
                }
                sections={otherSections}
                onSelectSourceSection={onSelectSourceSection}
              />
            ) : null}
          </div>
        )
      ) : (
        <LoadErrorSurface error={loadError} />
      )}

      <HookSourceDialog
        key={selectedKey}
        entry={selectedEntry}
        hostId={hostId}
        isOpen={
          selectedSourceSection != null && (isLoading || selectedEntry != null)
        }
        isLoading={isLoading}
        isRemoteHost={isRemoteHost}
        loadError={loadError}
        title={selectedTitle}
        titleHref={selectedTitleHref}
        titleIcon={selectedTitleIcon}
        subtitle={selectedSubtitle}
        onClose={() => onSelectSourceSection(null)}
        onToggleHookEnabled={onToggleHookEnabled}
        onTrustHook={onTrustHook}
      />
    </SettingsContentLayout>
  );
}

function LearnMoreLink({ children }: { children: ReactNode }) {
  return (
    <a
      className="inline-flex text-token-text-link-foreground"
      href={CODEX_HOOKS_DOCS_URL}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function LoadingHooksSurface() {
  return (
    <SettingsSurface>
      <SettingsControlRow
        label={
          <FormattedMessage
            id="settings.hooks.loading.label"
            defaultMessage="Loading hooks..."
            description="Label while hooks are loading"
          />
        }
        control={null}
      />
    </SettingsSurface>
  );
}

function LoadErrorSurface({ error }: { error: Error | null | undefined }) {
  return (
    <SettingsSurface>
      <SettingsControlRow
        label={
          <FormattedMessage
            id="settings.hooks.loadError.label"
            defaultMessage="Could not load hooks"
            description="Label when hooks settings fails to load hooks"
          />
        }
        description={error?.message}
        control={null}
      />
    </SettingsSurface>
  );
}

function EmptyState() {
  return (
    <SettingsSurface>
      <SettingsControlRow
        label={
          <FormattedMessage
            id="settings.hooks.emptyHooks.label"
            defaultMessage="No hooks found"
            description="Label when known projects do not have hooks or hook load issues"
          />
        }
        description={
          <FormattedMessage
            id="settings.hooks.emptyHooks.description"
            defaultMessage="Configured hooks will appear here"
            description="Description when no hooks are configured"
          />
        }
        control={null}
      />
    </SettingsSurface>
  );
}

function SourceGroupSection({
  onSelectSourceSection,
  sections,
  title,
}: {
  onSelectSourceSection: (selection: HookSourceSelection) => void;
  sections: HookSourceGroup[];
  title: ReactNode;
}) {
  return (
    <SettingsGroup className="gap-2">
      <SettingsGroup.Header title={title} />
      <SettingsGroup.Content>
        {sections.map((section) => (
          <ConfigSourceRow
            key={section.id}
            section={section}
            onSelectSourceSection={onSelectSourceSection}
          />
        ))}
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}

function PluginSection({
  onSelectSourceSection,
  section,
}: {
  onSelectSourceSection: (selection: HookSourceSelection) => void;
  section: Extract<HookSourceGroup, { id: "plugin" }>;
}) {
  return (
    <SettingsGroup className="gap-2">
      <SettingsGroup.Header
        title={
          <FormattedMessage
            id="settings.hooks.source.plugins"
            defaultMessage="From Plugins"
            description="Group heading for hooks installed by plugins"
          />
        }
      />
      <SettingsGroup.Content>
        {section.pluginEntries.map((pluginEntry) => (
          <PluginSourceRow
            key={pluginEntry.pluginId ?? "unknown-plugin"}
            pluginEntry={pluginEntry}
            onSelectSourceSection={onSelectSourceSection}
          />
        ))}
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}

function PluginSourceRow({
  onSelectSourceSection,
  pluginEntry,
}: {
  onSelectSourceSection: (selection: HookSourceSelection) => void;
  pluginEntry: Extract<HookSourceGroup, { id: "plugin" }>["pluginEntries"][number];
}) {
  const intl = useIntl();
  const label =
    getHookPluginDisplayId(pluginEntry.pluginId) ??
    intl.formatMessage({
      id: "settings.hooks.source.unknownPlugin",
      defaultMessage: "Unknown plugin",
      description: "Fallback label for plugin hooks without a plugin id",
    });

  return (
    <SourceRow
      entry={pluginEntry.entry}
      icon={<AppgenPlugIcon className="icon-sm text-token-text-secondary" />}
      label={<span className="block truncate">{label}</span>}
      onClick={() => {
        onSelectSourceSection({
          source: "plugin",
          pluginId: pluginEntry.pluginId,
        });
      }}
    />
  );
}

function ProjectSection({
  onSelectSourceSection,
  projectRootLabels,
  section,
}: {
  onSelectSourceSection: (selection: HookSourceSelection) => void;
  projectRootLabels?: Record<string, string>;
  section: Extract<HookSourceGroup, { id: "project" }>;
}) {
  return (
    <SettingsGroup className="gap-2">
      <SettingsGroup.Header
        title={
          <FormattedMessage
            id="settings.hooks.source.projects"
            defaultMessage="From Projects"
            description="Group heading for hooks from project config files"
          />
        }
      />
      <SettingsGroup.Content>
        {section.projectEntries.map((entry) => (
          <ProjectSourceRow
            key={entry.cwd}
            entry={entry}
            projectRootLabels={projectRootLabels}
            onSelectSourceSection={onSelectSourceSection}
          />
        ))}
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}

function ConfigSourceRow({
  onSelectSourceSection,
  section,
}: {
  onSelectSourceSection: (selection: HookSourceSelection) => void;
  section: HookSourceGroup;
}) {
  if (section.id === "plugin" || section.id === "project") return null;

  return (
    <SourceRow
      entry={section.entry}
      icon={renderSourceIcon(section.id)}
      label={<SourceLabel source={section.id} />}
      onClick={() => {
        onSelectSourceSection({ source: section.id });
      }}
    />
  );
}

function SourceLabel({ source }: { source: HookSourceGroupId }) {
  switch (source) {
    case "plugin":
      return (
        <FormattedMessage
          id="settings.hooks.source.plugin"
          defaultMessage="Plugin"
          description="Source label for plugin hooks"
        />
      );
    case "user":
      return (
        <FormattedMessage
          id="settings.hooks.source.userConfig"
          defaultMessage="User config"
          description="Source label for user hooks"
        />
      );
    case "admin":
      return (
        <FormattedMessage
          id="settings.hooks.source.adminConfig"
          defaultMessage="Admin config"
          description="Source label for admin-managed hooks"
        />
      );
    case "project":
      return (
        <FormattedMessage
          id="settings.hooks.source.projectConfig"
          defaultMessage="Project config"
          description="Source label for project hooks"
        />
      );
    case "sessionFlags":
      return (
        <FormattedMessage
          id="settings.hooks.source.sessionFlags"
          defaultMessage="Session flags"
          description="Source label for session flag hooks"
        />
      );
    case "unknown":
      return (
        <FormattedMessage
          id="settings.hooks.source.unknown"
          defaultMessage="Unknown source"
          description="Source label for hooks with unknown provenance"
        />
      );
  }
}

function renderSourceIcon(source: HookSourceGroupId) {
  switch (source) {
    case "plugin":
      return <AppgenPlugIcon className="icon-sm text-token-text-secondary" />;
    case "user":
      return <FileIcon className="icon-sm text-token-text-secondary" />;
    case "admin":
      return <ShieldCodeIcon className="icon-sm text-token-text-secondary" />;
    case "project":
      return <FolderIcon className="icon-sm text-token-text-secondary" />;
    case "sessionFlags":
      return <BuildingIcon className="icon-sm text-token-text-secondary" />;
    case "unknown":
      return <WarningIcon className="icon-sm text-token-text-secondary" />;
  }
}

function ProjectSourceRow({
  entry,
  onSelectSourceSection,
  projectRootLabels,
}: {
  entry: HookConfigEntry;
  onSelectSourceSection: (selection: HookSourceSelection) => void;
  projectRootLabels?: Record<string, string>;
}) {
  return (
    <SourceRow
      entry={entry}
      icon={<FolderIcon className="icon-sm text-token-text-secondary" />}
      label={
        <span className="block truncate">
          {formatProjectRootLabel(entry.cwd, projectRootLabels)}
        </span>
      }
      onClick={() => {
        onSelectSourceSection({
          source: "project",
          projectRoot: entry.cwd,
        });
      }}
    />
  );
}

function SourceRow({ entry, icon, label, onClick }: SourceRowProps) {
  const summary = summarizeHookConfigEntryIssues(entry);

  return (
    <SettingsSurface>
      <button
        type="button"
        className="focus-visible:outline-token-focus w-full cursor-interaction rounded-lg text-left hover:bg-token-list-hover-background focus-visible:bg-token-list-hover-background focus-visible:outline-1 focus-visible:outline-offset-[-2px] active:bg-token-list-active-selection-background"
        onClick={onClick}
      >
        <SettingsControlRow
          icon={icon}
          label={label}
          description={<HookCountLabel count={entry.hooks.length} />}
          control={<SourceRowTrailing summary={summary} />}
        />
      </button>
    </SettingsSurface>
  );
}

function HookCountLabel({ count }: { count: number }) {
  return (
    <FormattedMessage
      id="settings.hooks.summary.hookCount"
      defaultMessage="{count, plural, one {# hook} other {# hooks}}"
      description="Hook count shown under a hook source row"
      values={{ count }}
    />
  );
}

function SourceRowTrailing({ summary }: { summary: HookIssueSummary }) {
  return (
    <div className="flex items-center gap-3 text-token-text-secondary">
      <AttentionSummary summary={summary} />
      <ChevronIcon className="icon-2xs shrink-0 -rotate-90" aria-hidden />
    </div>
  );
}

function AttentionSummary({ summary }: { summary: HookIssueSummary }) {
  const intl = useIntl();
  const hasAttention = summary.issueCount > 0 || summary.needsReview > 0;
  if (!hasAttention) return null;

  return (
    <span className="flex items-center gap-1 text-token-editor-warning-foreground">
      <WarningIcon className="icon-2xs shrink-0" />
      <span className="max-[30rem]:hidden">
        {formatAttentionCounts(summary, intl)}
      </span>
    </span>
  );
}

function formatProjectRootLabel(
  projectRoot: string,
  projectRootLabels?: Record<string, string>,
) {
  return (
    projectRootLabels?.[projectRoot] ??
    formatWorkspaceRootLabel(projectRoot, projectRoot)
  );
}

function getSelectedSourceTitle({
  entry,
  projectRootLabels,
  selection,
}: {
  entry: HookConfigEntry | null;
  projectRootLabels?: Record<string, string>;
  selection: HookSourceSelection | null | undefined;
}): ReactNode {
  if (selection == null) return null;
  if (selection.source === "project") {
    return formatProjectRootLabel(selection.projectRoot, projectRootLabels);
  }
  if (selection.source === "plugin") {
    const pluginTitle =
      selection.pluginId === undefined && entry != null
        ? getSharedPluginTitle(entry.hooks)
        : getHookPluginDisplayId(selection.pluginId);
    if (pluginTitle != null) return pluginTitle;
  }
  return <SourceLabel source={selection.source} />;
}

function getSharedPluginTitle(hooks: HookDefinition[]) {
  let sharedTitle: string | null = null;
  for (const hook of hooks) {
    const displayId = getHookPluginDisplayId(hook.pluginId);
    if (
      displayId == null ||
      (sharedTitle != null && sharedTitle !== displayId)
    ) {
      return null;
    }
    sharedTitle = displayId;
  }
  return sharedTitle;
}

function resolveVisibleProjectRoots(
  roots: string[] | undefined,
  activeProjectRoots: string[],
  selectedProjectRoot: string | null,
) {
  if (roots == null) return undefined;
  const activeRoots = new Set(activeProjectRoots);
  const visibleRoots = roots.filter((root) => !activeRoots.has(root));
  if (
    selectedProjectRoot != null &&
    roots.includes(selectedProjectRoot) &&
    !visibleRoots.includes(selectedProjectRoot)
  ) {
    visibleRoots.push(selectedProjectRoot);
  }
  return visibleRoots;
}

export function HooksSettings() {
  const intl = useIntl();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const appScopeStore = useAppScopeStore();
  const queryClient = useQueryClient();
  const { selectedHostId, setSelectedHostId } = useSettingsHostContext();
  const localWorkspaceRoots =
    useRuntimeScopedValue<string[] | undefined>(workspaceRootOptionsSelector) ??
    [];
  const activeRemoteProject = useRuntimeScopedValue<
    ActiveRemoteProject | undefined
  >(activeRemoteProjectSelector);
  const workspaceRootOptions = useRuntimeScopedValue<
    QueryResult<WorkspaceRootOptions>
  >(workspaceRootOptionsQuery, { hostId: selectedHostId });

  const routeHostId = searchParams.get("hostId");
  const routeMatchesSelectedHost =
    routeHostId == null || routeHostId === selectedHostId;
  const selectedProjectRoot = routeMatchesSelectedHost
    ? searchParams.get("projectRoot")
    : null;
  const selectedPluginId = routeMatchesSelectedHost
    ? searchParams.get("pluginId")
    : null;
  const activeProjectRoots =
    selectedHostId === LOCAL_HOST_ID
      ? localWorkspaceRoots
      : activeRemoteProject?.hostId === selectedHostId &&
          activeRemoteProject.remotePath != null
        ? [activeRemoteProject.remotePath]
        : [];
  const projectRoots = resolveVisibleProjectRoots(
    workspaceRootOptions.data?.roots,
    activeProjectRoots,
    selectedProjectRoot,
  );
  const selectedSourceSection = routeMatchesSelectedHost
    ? parseHookSourceSelection({
        pluginId: selectedPluginId,
        source: searchParams.get("source"),
        projectRoot: selectedProjectRoot,
        projectRoots,
      })
    : null;

  const hooksQuery = useAppScopeQueryResult(hooksForProjectsQueryOptions, {
    hostId: selectedHostId,
    cwds: projectRoots,
  }) as QueryResult<HooksQueryResponse>;
  const hookStateMutation = useAppScopeQueryResult(
    hooksStateMutation,
    selectedHostId,
  ) as MutationResult<HookStateEdit[]>;

  React.useEffect(() => {
    if (routeHostId != null && routeHostId !== selectedHostId) {
      setSelectedHostId(routeHostId);
      return;
    }
    void invalidateHooksQueries(queryClient, selectedHostId, {
      refetchType: "active",
    });
  }, [
    location.key,
    queryClient,
    routeHostId,
    selectedHostId,
    setSelectedHostId,
  ]);

  const refreshHooks = React.useCallback(() => {
    const refetch = hooksQuery.refetch;
    if (refetch == null) return;
    void refetch().then(async (result) => {
      if (!result.isSuccess) return;
      await invalidateHooksQueries(queryClient, selectedHostId, {
        broadcast: true,
        refetchType: "none",
      });
      appScopeStore
        .get<{ success: (message: string) => void }>(toastControllerSignal)
        .success(intl.formatMessage(hooksPageMessages.refreshSuccess));
    });
  }, [appScopeStore, hooksQuery, intl, queryClient, selectedHostId]);

  const selectSourceSection = React.useCallback(
    (selection: HookSourceSelection | null) => {
      const nextParams = new URLSearchParams(searchParams);
      updateHooksSettingsSearchParams(nextParams, selectedHostId, selection);
      setSearchParams(nextParams, { replace: true });
    },
    [searchParams, selectedHostId, setSearchParams],
  );

  const toggleHookEnabled = React.useCallback(
    (hook: HooksSettingsHook, enabled: boolean) => {
      hookStateMutation.mutate([
        {
          key: hook.key,
          enabled,
        },
      ]);
    },
    [hookStateMutation],
  );

  const trustHook = React.useCallback(
    (hook: HooksSettingsHook) => {
      hookStateMutation.mutate([
        {
          key: hook.key,
          trustedHash: hook.currentHash ?? null,
        },
      ]);
    },
    [hookStateMutation],
  );

  return (
    <HooksSettingsContent
      entries={hooksQuery.data?.data}
      hostId={selectedHostId}
      isRemoteHost={selectedHostId !== LOCAL_HOST_ID}
      isLoadingProjectRoots={workspaceRootOptions.isPending === true}
      loadError={hooksQuery.error}
      isLoading={hooksQuery.isPending === true}
      isRefreshing={
        hooksQuery.isFetching === true && hooksQuery.isPending !== true
      }
      projectRootLabels={workspaceRootOptions.data?.labels}
      projectRoots={projectRoots}
      selectedSourceSection={selectedSourceSection}
      onSelectSourceSection={selectSourceSection}
      onRefreshHooks={refreshHooks}
      onToggleHookEnabled={toggleHookEnabled}
      onTrustHook={trustHook}
    />
  );
}
