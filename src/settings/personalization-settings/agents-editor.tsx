// Restored from ref/webview/assets/personalization-settings-B1J6eU5_.js
// Personal agents.md editor for personalization settings.
import React, { type ReactNode } from "react";

import {
  _appScopeA as useAppScopeQueryResult,
  _appScopeO as useAppScopeStore,
  appScopeRoot,
} from "../../boundaries/app-scope";
import { Button } from "../../ui/button";
import { Spinner } from "../../ui/spinner";
import { toastApiSignal } from "../../ui/toast-signal";
import { useHotkey } from "../../utils/use-hotkey";
import { CODEX_GLOBAL_AGENTS_GUIDANCE_DOCS_URL } from "../../utils/links-bd-mmkun-d";
import { SettingsGroup } from "../../utils/settings-group";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { personalizationMessages } from "./messages";
import {
  codexAgentsDocumentQuery,
  type AgentsDocument,
  useSaveAgentsDocumentMutation,
} from "./queries";

type QueryResult<TData> = {
  data?: TData;
  error?: unknown;
  isFetching?: boolean;
  refetch?: () => Promise<unknown>;
};

type ToastApi = {
  danger(message: ReactNode): void;
  success(message: ReactNode): void;
};

export function AgentsEditorSection({
  hostId,
}: {
  hostId: string;
}): JSX.Element {
  const intl = useIntl();
  const appScopeStore = useAppScopeStore(appScopeRoot);
  const [draftContents, setDraftContents] = React.useState<string | null>(null);
  const agentsQuery = useAppScopeQueryResult(
    codexAgentsDocumentQuery,
    hostId,
  ) as QueryResult<AgentsDocument>;

  const showSuccessToast = React.useCallback(() => {
    setDraftContents(null);
    appScopeStore
      .get<ToastApi>(toastApiSignal)
      .success(intl.formatMessage(personalizationMessages.agentsSaveSuccess));
  }, [appScopeStore, intl]);

  const showErrorToast = React.useCallback(() => {
    appScopeStore
      .get<ToastApi>(toastApiSignal)
      .danger(intl.formatMessage(personalizationMessages.agentsSaveError));
  }, [appScopeStore, intl]);

  const saveAgentsDocument = useSaveAgentsDocumentMutation({
    onSuccess: showSuccessToast,
    onError: showErrorToast,
  });

  const currentContents = agentsQuery.data?.contents ?? "";
  const editorContents = draftContents ?? currentContents;
  const hasDocument = agentsQuery.data != null;
  const hasDraft =
    draftContents != null && draftContents !== currentContents;
  const isInitialLoading = !hasDocument && agentsQuery.isFetching === true;
  const isSaving = saveAgentsDocument.isPending;
  const hasLoadError = agentsQuery.error != null && !hasDocument;
  const canSave = hasDocument && hasDraft && !isSaving;

  const saveDraft = React.useCallback(() => {
    if (!canSave) return;
    saveAgentsDocument.mutate({
      hostId,
      contents: editorContents,
    });
  }, [canSave, editorContents, hostId, saveAgentsDocument]);

  useHotkey({
    accelerator: "CmdOrCtrl+S",
    enabled: canSave,
    onKeyDown: (event) => {
      event.preventDefault();
      saveDraft();
    },
  });

  const title = intl.formatMessage(personalizationMessages.customInstructions);

  return (
    <SettingsGroup className="gap-2">
      <SettingsGroup.Header
        title={<FormattedMessage {...personalizationMessages.customInstructions} />}
        subtitle={
          <FormattedMessage
            {...personalizationMessages.customInstructionsDescription}
            values={{ a: agentsDocsLink }}
          />
        }
      />
      <SettingsGroup.Content>
        {hasLoadError ? (
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm text-token-text-secondary">
              <FormattedMessage {...personalizationMessages.agentsLoadError} />
            </div>
            <Button
              className="shrink-0"
              color="secondary"
              onClick={() => {
                void agentsQuery.refetch?.();
              }}
              size="toolbar"
            >
              <FormattedMessage {...personalizationMessages.agentsRetry} />
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {isInitialLoading ? (
              <div className="flex items-center gap-2 text-sm text-token-text-secondary">
                <Spinner className="icon-xs" />
                <FormattedMessage {...personalizationMessages.agentsLoading} />
              </div>
            ) : (
              <textarea
                aria-label={title}
                id="personal-agents-editor"
                className="focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none focus-visible:ring-2"
                disabled={!hasDocument || isSaving}
                placeholder={intl.formatMessage(
                  personalizationMessages.agentsPlaceholder,
                )}
                rows={12}
                value={editorContents}
                onChange={(event) => {
                  const nextContents = event.target.value;
                  setDraftContents(
                    nextContents === currentContents ? null : nextContents,
                  );
                }}
              />
            )}
            <div className="flex items-center justify-end gap-2">
              <Button
                color="primary"
                disabled={!hasDraft || !hasDocument}
                loading={isSaving}
                onClick={saveDraft}
                size="toolbar"
              >
                <FormattedMessage {...personalizationMessages.agentsSave} />
              </Button>
            </div>
          </div>
        )}
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}

function agentsDocsLink(chunks: ReactNode): JSX.Element {
  return (
    <a
      className="inline-flex text-token-text-link-foreground"
      href={CODEX_GLOBAL_AGENTS_GUIDANCE_DOCS_URL}
      target="_blank"
      rel="noreferrer"
    >
      {chunks}
    </a>
  );
}
