// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Shared success dialog + helpers shown after a feedback report or a performance
// trace has been uploaded. The same surface serves both flows, keyed by `kind`.
import type { MouseEvent, ReactNode } from "react";
import { FormattedMessage } from "../vendor/react-intl";
import {
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogLayout,
  DialogSection,
} from "../ui/dialog-layout";
import { Button } from "../ui/button";
import { CopyButton } from "../ui/copy-button";
import { CheckMdIcon } from "../icons/check-md-icon";
import { copyToClipboard } from "../utils/copy-to-clipboard";
import { openExternalLinkFromEvent } from "../boundaries/onboarding-commons-externals.facade";

export type UploadedAssetKind = "feedback" | "performance-trace";

// Label used inside the prefilled GitHub issue "steps" query param. Shared
// between the feedback and performance-trace upload flows.
export function getUploadedAssetIdLabel(kind: UploadedAssetKind): string {
  switch (kind) {
    case "feedback":
      return "Feedback ID";
    case "performance-trace":
      return "Uploaded performance trace";
  }
}

// Success-dialog title for each upload kind.
export function getUploadResultTitle(kind: UploadedAssetKind): ReactNode {
  switch (kind) {
    case "feedback":
      return (
        <FormattedMessage
          id="feedback.dialog.uploadedTitle"
          defaultMessage="Feedback uploaded"
          description="Title shown after feedback has been uploaded"
        />
      );
    case "performance-trace":
      return (
        <FormattedMessage
          id="traceRecording.uploadSuccess.title"
          defaultMessage="Performance trace uploaded"
          description="Title shown after a performance trace has been uploaded"
        />
      );
  }
}

// Success-dialog body message for each upload kind, with the two issue links
// interpolated in.
export function getUploadResultMessage(
  kind: UploadedAssetKind,
  openIssueLink: ReactNode,
  existingIssueLink: ReactNode,
): ReactNode {
  switch (kind) {
    case "feedback":
      return (
        <FormattedMessage
          id="feedback.dialog.uploadedMessage.withThread"
          defaultMessage="Feedback uploaded. If the problem persists, please {openIssueLink} or mention this id in an {existingIssueLink}:"
          description="Message shown after feedback has been uploaded when there is an active conversation"
          values={{ openIssueLink, existingIssueLink }}
        />
      );
    case "performance-trace":
      return (
        <FormattedMessage
          id="traceRecording.uploadSuccess.message"
          defaultMessage="Performance trace uploaded. If the problem persists, please {openIssueLink} or mention this id in an {existingIssueLink}:"
          description="Message shown after a performance trace has been uploaded"
          values={{ openIssueLink, existingIssueLink }}
        />
      );
  }
}

function handleIssueLinkClick(event: MouseEvent<HTMLAnchorElement>): void {
  const href = event.currentTarget.href;
  if (href.length !== 0) {
    openExternalLinkFromEvent({
      event,
      href,
      initiator: "open_in_browser_bridge",
    });
    event.stopPropagation();
  }
}

export interface UploadedAssetRowProps {
  label: ReactNode;
  value: string;
}

// A labelled, copyable identifier row (e.g. the uploaded feedback id).
export function UploadedAssetRow({ label, value }: UploadedAssetRowProps) {
  return (
    <div className="flex items-center gap-2 rounded border border-token-border bg-token-menu-background px-3 py-2">
      <div className="min-w-0 flex-1">
        <div className="text-xs text-token-text-secondary">{label}</div>
        <code className="block overflow-hidden text-ellipsis text-token-foreground">
          {value}
        </code>
      </div>
      <CopyButton
        iconOnly
        iconClassName="icon-2xs"
        className="shrink-0"
        onCopy={(event) => {
          copyToClipboard(value, event);
        }}
      />
    </div>
  );
}

export interface UploadResultDialogProps {
  correlationId: string;
  internalSlackMessage?: string;
  kind?: UploadedAssetKind;
  onClose: () => void;
}

export function UploadResultDialog({
  correlationId,
  kind = "feedback",
  onClose,
}: UploadResultDialogProps) {
  const idLabel = getUploadedAssetIdLabel(kind);
  const issueUrl = `https://github.com/openai/codex/issues/new?template=1-codex-app.yml&steps=${encodeURIComponent(
    `${idLabel}: ${correlationId}`,
  )}`;

  const openIssueLink = (
    <a
      className="inline text-token-link underline"
      href={issueUrl}
      onClick={handleIssueLinkClick}
      rel="noreferrer"
      target="_blank"
    >
      <FormattedMessage
        id="feedback.dialog.uploadedMessage.openIssue"
        defaultMessage="open a GitHub issue"
        description="Link text for opening a GitHub issue"
      />
    </a>
  );

  const existingIssueLink = (
    <a
      className="inline text-token-link underline"
      href="https://github.com/openai/codex/issues"
      onClick={handleIssueLinkClick}
      rel="noreferrer"
      target="_blank"
    >
      <FormattedMessage
        id="feedback.dialog.uploadedMessage.existingIssue"
        defaultMessage="existing open issue"
        description="Link text for browsing existing open issues"
      />
    </a>
  );

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <DialogLayout open={true} onOpenChange={handleOpenChange}>
      <DialogBody>
        <DialogSection>
          <DialogHeader
            icon={<CheckMdIcon className="icon-base text-token-success" />}
            title={getUploadResultTitle(kind)}
          />
        </DialogSection>
        <DialogSection className="gap-3 text-token-foreground">
          <p>
            {getUploadResultMessage(kind, openIssueLink, existingIssueLink)}
          </p>
          <div className="flex flex-col gap-2">
            <UploadedAssetRow
              label={
                <FormattedMessage
                  id="feedback.dialog.correlationIdLabel"
                  defaultMessage="Feedback ID"
                  description="Label for the uploaded Codex feedback id"
                />
              }
              value={correlationId}
            />
          </div>
        </DialogSection>
        <DialogSection>
          <DialogFooter>
            <Button color="primary" onClick={() => handleOpenChange(false)}>
              <FormattedMessage
                id="feedback.dialog.dismiss"
                defaultMessage="Dismiss"
                description="Button label to close the feedback success dialog"
              />
            </Button>
          </DialogFooter>
        </DialogSection>
      </DialogBody>
    </DialogLayout>
  );
}
