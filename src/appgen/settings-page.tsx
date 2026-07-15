// Restored from ref/webview/assets/appgen-settings-page-BxhhSHRZ.js
// Semantic AppgenSettingsPage implementation with current-ref query bindings.

import React, { type ChangeEvent, type ReactElement } from "react";
import { Navigate, useNavigate, useParams } from "../vendor/react-router";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import {
  _appScopeA as useAppScopeValue,
  _appScopeO as useAppScopeStore,
} from "../boundaries/app-scope";
import {
  buildStartTurnWorkspaceContext as updateSiteTitleMutation,
  currentAppInitialSharedMember0301 as siteEnvironmentQuery,
  currentAppInitialSharedMember0369 as updateSiteEnvironmentMutation,
  currentAppInitialSharedMember0917 as appgenProjectQuery,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import { newThreadOrchestratorUpperXLowerOExport as formatDisplayUrl } from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  Button,
  LoadingSpinnerIcon,
  openExternalUrl,
  toastControllerSignal,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  appMainCurrentCompatSlotUpperFLowerN as SettingsRow,
  appMainCurrentCompatSlotUpperFLowerO as AccessPolicyIcon,
  appMainCurrentCompatSlotUpperHLowerO as getAccessPolicyMessageValues,
  appMainCurrentCompatSlotUpperMLowerO as getAccessPolicyMessageProps,
} from "../vendor/app-main-current-runtime";
import { PROJECT_SITES_LIBRARY_ROUTE } from "../runtime/current-app-initial/appgen-site-route-icon-runtime";
import { AppgenShareDialog } from "../features/appgen-share-dialog";
import type { AppgenAccessPolicy } from "../features/appgen-share-dialog/types";
import { ToolbarBreadcrumb } from "../ui/toolbar-breadcrumb";
import { SettingsGroup } from "../utils/settings-group";
import { WithWindow } from "../utils/with-window";
import { openModalControllerModal } from "../ui/modal-controller-state";
import { isEqualT } from "../vendor/lodash-is-equal";
import { ExternalLinkIcon } from "../icons/external-link-icon";
import { ShareIcon } from "../icons/share-icon";
import {
  buildEnvironmentUpdate,
  buildTitleState,
  saveSettingsUpdates,
  toEnvironmentDraft,
  type EnvironmentDraft,
  type EnvironmentUpdate,
  type SecretDraft,
  type SiteEnvironment,
  type TitleUpdate,
} from "./settings-page-helpers";
import { DeleteSiteDialog } from "./settings-page-delete-dialog";
import { EnvironmentEntryGroup } from "./settings-page-environment-entries";
import { initAppgenSettingsPageRuntime } from "./settings-page-runtime";

const isEqual = isEqualT() as (left: unknown, right: unknown) => boolean;
const TITLE_ERROR_ID = "appgen-settings-site-title-error";

type QueryResult<TData> = {
  data?: TData | null;
  isError?: boolean;
  isLoading?: boolean;
};

type MutationResult<TVariables> = {
  isPending?: boolean;
  mutateAsync: (variables: TVariables) => Promise<unknown>;
};

type AppScopeStore = ReturnType<typeof useAppScopeStore>;

type SiteProject = {
  access_policy?: AppgenAccessPolicy | null;
  current_live_url?: string | null;
  slug: string;
  title: string;
};

type SettingsSectionProps = {
  accessPolicy?: AppgenAccessPolicy | null;
  environment: SiteEnvironment;
  projectId: string;
  siteSlug: string;
  siteTitle: string;
};

export function AppgenSettingsPage(): ReactElement {
  const { projectId } = useParams();
  if (projectId == null) {
    return <Navigate replace to="/sites" />;
  }
  return <AppgenSettingsContent projectId={projectId} />;
}

function AppgenSettingsContent({
  projectId,
}: {
  projectId: string;
}): ReactElement {
  const projectQuery = useAppScopeValue(
    appgenProjectQuery,
    projectId,
  ) as QueryResult<SiteProject>;
  const environmentQuery = useAppScopeValue(
    siteEnvironmentQuery,
    projectId,
  ) as QueryResult<SiteEnvironment>;
  const liveUrl = projectQuery.data?.current_live_url;
  const displayUrl = liveUrl == null ? null : formatDisplayUrl(liveUrl);
  const toolbar = (
    <AppgenSettingsToolbar
      liveUrl={liveUrl}
      siteTitle={projectQuery.data?.title}
    />
  );

  return (
    <div className="flex h-full min-h-0 flex-col bg-token-main-surface-primary">
      <WithWindow extension>{toolbar}</WithWindow>
      <WithWindow browser chromeExtension electron>
        <div className="electron:h-toolbar extension:py-row-y">{toolbar}</div>
      </WithWindow>
      <div className="scrollbar-stable flex min-h-0 flex-1 overflow-y-auto p-panel">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-[var(--padding-panel)]">
          {projectQuery.isLoading || environmentQuery.isLoading ? (
            <LoadingState />
          ) : projectQuery.isError ||
            environmentQuery.isError ||
            projectQuery.data == null ||
            environmentQuery.data == null ? (
            <ErrorState />
          ) : (
            <>
              <div className="flex min-w-0 flex-col gap-1">
                <div className="truncate text-[22px] leading-7 font-medium text-token-text-primary">
                  {projectQuery.data.title}
                </div>
                {displayUrl == null ? null : (
                  <div className="truncate text-xs text-token-text-tertiary">
                    {displayUrl}
                  </div>
                )}
              </div>
              <SettingsSections
                accessPolicy={projectQuery.data.access_policy}
                environment={environmentQuery.data}
                projectId={projectId}
                siteSlug={projectQuery.data.slug}
                siteTitle={projectQuery.data.title}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function AppgenSettingsToolbar({
  liveUrl,
  siteTitle,
}: {
  liveUrl?: string | null;
  siteTitle?: string | null;
}): ReactElement {
  const navigate = useNavigate();
  const breadcrumbAncestors = [
    {
      id: "sites",
      label: (
        <FormattedMessage
          id="appgenSettings.header.sites"
          defaultMessage="Sites"
          description="Breadcrumb link back to the Sites Library page"
        />
      ),
      onClick: () => navigate(PROJECT_SITES_LIBRARY_ROUTE),
    },
  ];
  return (
    <div className="draggable grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4">
      <ToolbarBreadcrumb ancestors={breadcrumbAncestors} current={siteTitle} />
      <div className="flex items-center justify-end">
        {liveUrl == null ? null : (
          <Button
            color="outline"
            size="toolbar"
            onClick={(event) => {
              openExternalUrl({
                event,
                href: liveUrl,
                initiator: "mcp_app_resource",
              });
            }}
          >
            <ExternalLinkIcon className="icon-xs" href={liveUrl} />
            <FormattedMessage
              id="appgenSettings.visit"
              defaultMessage="Visit"
              description="Button label for opening a live site externally"
            />
          </Button>
        )}
      </div>
    </div>
  );
}

function SettingsSections({
  accessPolicy,
  environment,
  projectId,
  siteSlug,
  siteTitle,
}: SettingsSectionProps): ReactElement {
  const appScope = useAppScopeStore();
  const intl = useIntl();
  const updateEnvironment = useAppScopeValue(
    updateSiteEnvironmentMutation,
    projectId,
  ) as MutationResult<EnvironmentUpdate>;
  const updateTitle = useAppScopeValue(
    updateSiteTitleMutation,
    projectId,
  ) as MutationResult<TitleUpdate>;
  const [environmentDraftState, setEnvironmentDraftState] = React.useState<{
    baseEnvironment: SiteEnvironment;
    draft: EnvironmentDraft;
  } | null>(null);
  const [draftTitle, setDraftTitle] = React.useState<string | null>(null);
  const [forceTitleInvalid, setForceTitleInvalid] = React.useState(false);
  const draftEnvironment =
    environmentDraftState?.draft ?? toEnvironmentDraft(environment);
  const environmentUpdate =
    environmentDraftState == null
      ? null
      : buildEnvironmentUpdate(
          environmentDraftState.baseEnvironment,
          environmentDraftState.draft,
        );
  const {
    isInvalid,
    title,
    update: titleUpdate,
  } = buildTitleState(draftTitle, siteTitle, forceTitleInvalid);
  const hasDuplicateEnvironmentKeys =
    environmentDraftState != null && environmentUpdate == null;
  const isSaving =
    updateEnvironment.isPending === true || updateTitle.isPending === true;
  const saveDisabled =
    isSaving ||
    isInvalid ||
    hasDuplicateEnvironmentKeys ||
    (titleUpdate == null && environmentUpdate == null);

  const updateDraftEnvironment = (
    updater: (draft: EnvironmentDraft) => EnvironmentDraft,
  ) => {
    setEnvironmentDraftState((currentState) => {
      const baseEnvironment = currentState?.baseEnvironment ?? environment;
      const baseDraft = toEnvironmentDraft(baseEnvironment);
      const nextDraft = updater(currentState?.draft ?? baseDraft);
      return isEqual(nextDraft, baseDraft)
        ? null
        : {
            baseEnvironment,
            draft: nextDraft,
          };
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (saveDisabled) return;
    saveSettingsUpdates({
      environmentUpdate,
      titleUpdate,
      updateEnvironment: updateEnvironment.mutateAsync,
      updateTitle: updateTitle.mutateAsync,
    }).then(({ environmentSaved, titleSaved }) => {
      if (titleSaved) {
        setDraftTitle(null);
        setForceTitleInvalid(false);
      } else {
        setForceTitleInvalid(true);
      }
      if (environmentSaved) setEnvironmentDraftState(null);
      if (!titleSaved || !environmentSaved) {
        appScope
          .get<{ danger(message: string): void }>(toastControllerSignal)
          .danger(
            intl.formatMessage({
              id: "appgenSettings.save.error",
              defaultMessage: "Unable to save site settings",
              description: "Error toast shown when saving site settings fails",
            }),
          );
      }
    });
  };

  const updateEnvironmentVariables = (entries: EnvironmentVariableDraft[]) => {
    updateDraftEnvironment((draft) => ({
      ...draft,
      environmentVariables: entries,
    }));
  };
  const updateSecrets = (entries: SecretDraft[]) => {
    updateDraftEnvironment((draft) => ({
      ...draft,
      secrets: entries,
    }));
  };
  const openDeleteDialog = () => {
    openModalControllerModal(appScope, DeleteSiteDialog, {
      projectId,
      siteSlug,
      siteTitle,
    });
  };

  return (
    <form
      className="flex flex-col gap-[var(--padding-panel)]"
      onSubmit={handleSubmit}
    >
      <GeneralSettingsSection
        disabled={isSaving}
        isInvalid={isInvalid}
        siteTitle={siteTitle}
        title={title}
        onBlur={() => {
          if (!forceTitleInvalid && draftTitle?.trim() === siteTitle) {
            setDraftTitle(null);
          }
        }}
        onTitleChange={(event) => {
          setForceTitleInvalid(false);
          setDraftTitle(
            event.target.value === siteTitle ? null : event.target.value,
          );
        }}
      />
      {accessPolicy == null ? null : (
        <SharingSettingsSection
          accessPolicy={accessPolicy}
          appScope={appScope}
          projectId={projectId}
        />
      )}
      <EnvironmentEntryGroup
        addButtonLabel={
          <FormattedMessage
            id="appgenSettings.environmentVariables.add"
            defaultMessage="Add variable"
            description="Button label to add a site environment variable"
          />
        }
        disabled={isSaving}
        entries={draftEnvironment.environmentVariables}
        subtitle={
          <FormattedMessage
            id="appgenSettings.environmentVariables.description"
            defaultMessage="Settings your site uses while it runs, like URLs, names, or feature switches"
            description="Description for site environment variable settings"
          />
        }
        title={
          <FormattedMessage
            id="appgenSettings.environmentVariables.title"
            defaultMessage="Environment variables"
            description="Heading for site environment variable settings"
          />
        }
        valueInputType="text"
        onChange={updateEnvironmentVariables}
      />
      <EnvironmentEntryGroup
        addButtonLabel={
          <FormattedMessage
            id="appgenSettings.secrets.add"
            defaultMessage="Add secret"
            description="Button label to add a site secret"
          />
        }
        disabled={isSaving}
        entries={draftEnvironment.secrets}
        subtitle={
          <FormattedMessage
            id="appgenSettings.secrets.description"
            defaultMessage="Sensitive setup info, like keys and passwords"
            description="Description for site secret settings"
          />
        }
        title={
          <FormattedMessage
            id="appgenSettings.secrets.title"
            defaultMessage="Secrets"
            description="Heading for site secret settings"
          />
        }
        valueInputType="password"
        onChange={updateSecrets}
      />
      <DangerSettingsSection onDeleteSite={openDeleteDialog} />
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        {isInvalid ? (
          <p
            id={TITLE_ERROR_ID}
            className="text-sm text-token-charts-red"
            role="alert"
          >
            <FormattedMessage
              id="appgenSettings.general.title.required"
              defaultMessage="Site title is required"
              description="Inline validation message below the Site settings form when the Site title is empty"
            />
          </p>
        ) : hasDuplicateEnvironmentKeys ? (
          <p className="text-sm text-token-charts-red" role="alert">
            <FormattedMessage
              id="appgenSettings.environmentKeys.duplicate"
              defaultMessage="Keys must be unique across environment variables and secrets"
              description="Validation shown when site environment settings use a duplicate key"
            />
          </p>
        ) : null}
        <Button
          className="ml-auto"
          disabled={saveDisabled}
          loading={isSaving}
          size="toolbar"
          type="submit"
        >
          <FormattedMessage
            id="appgenSettings.save"
            defaultMessage="Save"
            description="Button for saving site settings"
          />
        </Button>
      </div>
    </form>
  );
}

function GeneralSettingsSection({
  disabled,
  isInvalid,
  onBlur,
  onTitleChange,
  siteTitle,
  title,
}: {
  disabled: boolean;
  isInvalid: boolean;
  onBlur: () => void;
  onTitleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  siteTitle: string;
  title: string;
}): ReactElement {
  const intl = useIntl();
  return (
    <SettingsGroup>
      <SettingsGroup.Header
        title={
          <FormattedMessage
            id="appgenSettings.general.title"
            defaultMessage="General"
            description="Section heading for general Site information on the Site settings page"
          />
        }
      />
      <SettingsGroup.Content>
        <div className="flex flex-col gap-1.5">
          <SettingsRow
            className="max-sm:flex-col max-sm:items-stretch"
            label={
              <FormattedMessage
                id="appgenSettings.general.title.label"
                defaultMessage="Title"
                description="Short label for the editable Site title field on the Site settings page"
              />
            }
            description={
              <FormattedMessage
                id="appgenSettings.general.title.description"
                defaultMessage="Name for your site"
                description="Help text for the editable Site title field on the Site settings page"
              />
            }
            control={
              <input
                aria-label={intl.formatMessage({
                  id: "appgenSettings.general.title.ariaLabel",
                  defaultMessage: "Site title",
                  description:
                    "Accessible label for the Site title text input on the Site settings page",
                })}
                aria-describedby={isInvalid ? TITLE_ERROR_ID : undefined}
                aria-invalid={isInvalid}
                className="w-[320px] max-w-full cursor-interaction rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-sm text-token-input-foreground outline-none focus:border-token-focus-border disabled:cursor-not-allowed disabled:opacity-40"
                disabled={disabled}
                maxLength={100}
                type="text"
                value={title}
                onBlur={onBlur}
                onChange={onTitleChange}
              />
            }
          />
        </div>
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}

function SharingSettingsSection({
  accessPolicy,
  appScope,
  projectId,
}: {
  accessPolicy: AppgenAccessPolicy;
  appScope: AppScopeStore;
  projectId: string;
}): ReactElement {
  const accessMessageValues = getAccessPolicyMessageValues(accessPolicy);
  const accessMessageProps = getAccessPolicyMessageProps(accessMessageValues);
  const openShareDialog = () => {
    openModalControllerModal(appScope, AppgenShareDialog, {
      projectId,
    });
  };
  return (
    <SettingsGroup>
      <SettingsGroup.Header
        title={
          <FormattedMessage
            id="appgenSettings.sharing.title"
            defaultMessage="Sharing"
            description="Heading for site sharing settings"
          />
        }
      />
      <SettingsGroup.Content>
        <div className="flex flex-col gap-1.5">
          <SettingsRow
            label={
              <FormattedMessage
                id="appgenSettings.sharing.label"
                defaultMessage="Sharing"
                description="Label for site sharing settings"
              />
            }
            description={
              <span className="flex items-center gap-1">
                <AccessPolicyIcon
                  aria-hidden={true}
                  accessPolicy={accessPolicy}
                  className="icon-2xs shrink-0"
                />
                <FormattedMessage
                  {...accessMessageProps}
                  values={accessMessageValues}
                />
              </span>
            }
            control={
              <Button color="outline" size="toolbar" onClick={openShareDialog}>
                <ShareIcon aria-hidden={true} className="icon-xs" />
                <FormattedMessage
                  id="appgenSettings.sharing.button"
                  defaultMessage="Share settings"
                  description="Sharing settings button label"
                />
              </Button>
            }
          />
        </div>
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}

function DangerSettingsSection({
  onDeleteSite,
}: {
  onDeleteSite: () => void;
}): ReactElement {
  return (
    <SettingsGroup>
      <SettingsGroup.Header
        title={
          <FormattedMessage
            id="appgenSettings.danger.title"
            defaultMessage="Danger zone"
            description="Heading for destructive site actions"
          />
        }
      />
      <SettingsGroup.Content>
        <div className="flex flex-col gap-1.5">
          <SettingsRow
            label={
              <FormattedMessage
                id="appgenSettings.danger.delete.label"
                defaultMessage="Delete site"
                description="Label for the delete site action"
              />
            }
            description={
              <FormattedMessage
                id="appgenSettings.danger.delete.description"
                defaultMessage="Permanently delete this site"
                description="Description for the delete site action"
              />
            }
            control={
              <Button
                color="danger"
                size="toolbar"
                type="button"
                onClick={onDeleteSite}
              >
                <FormattedMessage
                  id="appgenSettings.danger.delete.button"
                  defaultMessage="Delete site"
                  description="Delete site button label"
                />
              </Button>
            }
          />
        </div>
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}

function LoadingState(): ReactElement {
  return (
    <div className="flex min-h-[420px] flex-1 items-center justify-center">
      <LoadingSpinnerIcon />
    </div>
  );
}

function ErrorState(): ReactElement {
  return (
    <div className="flex min-h-[420px] flex-1 items-center justify-center">
      <div className="text-sm font-medium text-token-text-secondary">
        <FormattedMessage
          id="appgenSettings.error.title"
          defaultMessage="Unable to load site settings"
          description="Error state title for the site settings page"
        />
      </div>
    </div>
  );
}

export function initAppgenSettingsPageChunk(): void {
  initAppgenSettingsPageRuntime();
}

initAppgenSettingsPageRuntime();
