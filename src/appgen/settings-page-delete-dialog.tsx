// Restored from ref/webview/assets/appgen-settings-page-BxhhSHRZ.js
// Delete-site confirmation dialog for the Appgen settings page.

import React, {
  type FormEvent,
  type ReactElement,
  type ReactNode,
} from "react";
import { useNavigate } from "../vendor/react-router";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import {
  _appScopeA as useAppScopeValue,
  _appScopeO as useAppScopeStore,
} from "../boundaries/app-scope";
import { currentAppInitialSharedMember0204 as deleteSiteMutation } from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  Button,
  toastControllerSignal,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogLayout,
  DialogTitle,
} from "../ui/dialog-layout";

type MutationResult<TVariables> = {
  isPending?: boolean;
  mutateAsync: (variables: TVariables) => Promise<unknown>;
};

export type DeleteSiteDialogProps = {
  onClose: () => void;
  projectId: string;
  siteSlug: string;
  siteTitle: string;
};

export function DeleteSiteDialog({
  onClose,
  projectId,
  siteSlug,
  siteTitle,
}: DeleteSiteDialogProps): ReactElement {
  const appScope = useAppScopeStore();
  const intl = useIntl();
  const navigate = useNavigate();
  const deleteSite = useAppScopeValue(
    deleteSiteMutation,
    projectId,
  ) as MutationResult<void>;
  const [confirmation, setConfirmation] = React.useState("");
  const isPending = deleteSite.isPending === true;
  const isConfirmDisabled = confirmation !== siteSlug || isPending;
  const title = (
    <FormattedMessage
      id="appgenSettings.deleteDialog.title"
      defaultMessage="Delete {siteTitle}?"
      description="Title for dialog confirming deletion of a site"
      values={{ siteTitle }}
    />
  );
  const subtitle = (
    <FormattedMessage
      id="appgenSettings.deleteDialog.subtitle"
      defaultMessage="Deleting your site will take it offline permanently and delete any data users have uploaded. Please type <strong>{siteSlug}</strong> below:"
      description="Subtitle for dialog confirming deletion of a site"
      values={{
        siteSlug,
        strong: (children: ReactNode) => <strong>{children}</strong>,
      }}
    />
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isConfirmDisabled) return;
    deleteSite.mutateAsync(undefined).then(
      () => {
        appScope
          .get<{ success(message: string): void }>(toastControllerSignal)
          .success(
            intl.formatMessage({
              id: "appgenSettings.deleteDialog.success",
              defaultMessage: "Site deleted",
              description: "Success toast shown after deleting a site",
            }),
          );
        onClose();
        navigate("/sites");
      },
      () => {
        appScope
          .get<{ danger(message: string): void }>(toastControllerSignal)
          .danger(
            intl.formatMessage({
              id: "appgenSettings.deleteDialog.error",
              defaultMessage: "Unable to delete site",
              description: "Error toast shown when deleting a site fails",
            }),
          );
      },
    );
  };

  return (
    <DialogLayout
      open={true}
      size="compact"
      shouldIgnoreClickOutside={isPending}
      showDialogClose={!isPending}
      onOpenChange={(open) => {
        if (!open && !isPending) onClose();
      }}
    >
      <DialogBody as="form" className="gap-4 px-4 py-3" onSubmit={handleSubmit}>
        <div className="flex w-full flex-col">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <DialogHeader
            title={title}
            titleClassName="truncate pr-8"
            subtitle={subtitle}
          />
        </div>
        <label className="sr-only" htmlFor="appgen-delete-site-slug">
          {intl.formatMessage({
            id: "appgenSettings.deleteDialog.slugInputLabel",
            defaultMessage: "Site slug",
            description:
              "Accessible label for the site slug input used to confirm site deletion",
          })}
        </label>
        <input
          id="appgen-delete-site-slug"
          aria-label={intl.formatMessage({
            id: "appgenSettings.deleteDialog.slugInputLabel",
            defaultMessage: "Site slug",
            description:
              "Accessible label for the site slug input used to confirm site deletion",
          })}
          autoFocus={true}
          className="w-full min-w-0 cursor-interaction rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 font-mono text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border disabled:cursor-not-allowed disabled:opacity-40"
          disabled={isPending}
          placeholder={siteSlug}
          spellCheck={false}
          type="text"
          value={confirmation}
          onChange={(event) => setConfirmation(event.target.value)}
        />
        <DialogFooter>
          <Button
            color="ghost"
            disabled={isPending}
            type="button"
            onClick={onClose}
          >
            <FormattedMessage
              id="appgenSettings.deleteDialog.cancel"
              defaultMessage="Cancel"
              description="Cancel button label for delete site confirmation dialog"
            />
          </Button>
          <Button
            color="danger"
            disabled={isConfirmDisabled}
            loading={isPending}
            type="submit"
          >
            <FormattedMessage
              id="appgenSettings.deleteDialog.confirm"
              defaultMessage="Permanently delete"
              description="Confirm button label for delete site confirmation dialog"
            />
          </Button>
        </DialogFooter>
      </DialogBody>
    </DialogLayout>
  );
}
