// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Multi-step "report response" dialog reached from the turn rating controls.
// Walks the user through nested report reasons fetched from the host, then
// either submits the report, opens an external form, or collects free-text
// details depending on the selected reason.
import { useState } from "react";
import type { FormEvent, MouseEvent, ReactElement, ReactNode } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Button } from "../ui/button";
import {
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogLayout,
  DialogSection,
  FieldStack,
} from "../ui/dialog-layout";
import {
  useQuery,
  useMutation,
  httpClient,
  buildApiRequestInit,
  timeConstants,
  openExternalLink,
  openExternalLinkFromEvent,
} from "../boundaries/onboarding-commons-externals.facade";

const REPORT_REASONS_QUERY_KEY = "codex-thread-report-reasons";

export interface ReportReason {
  id: string;
  cta: ReactNode;
  sub_reasons?: ReportReason[];
  details_placeholder?: string | null;
  link_attachment?: string | null;
  subtext?: ReactNode;
}

export interface ReportReasons {
  header?: ReactNode;
  header_explanation?: ReactNode;
  reasons?: ReportReason[];
}

export interface CodexThreadReportDialogProps {
  onBackToFeedback?: () => void;
  onClose: () => void;
  reportEntityType: string;
  threadId: string;
}

function dropLastReason(stack: ReportReason[]): ReportReason[] {
  return stack.slice(0, -1);
}

function isTerminalReason(reason: ReportReason): boolean {
  return (
    (reason.sub_reasons?.length ?? 0) === 0 &&
    reason.details_placeholder == null &&
    reason.link_attachment == null &&
    reason.subtext == null
  );
}

async function fetchReportReasons(entityType: string): Promise<ReportReasons> {
  return (
    await httpClient
      .getInstance()
      .get(`/report_flow/reasons/${entityType}`, buildApiRequestInit())
  ).body;
}

async function submitReport({
  details,
  entityType,
  reasonId,
  threadId,
}: {
  details: string;
  entityType: string;
  reasonId: string;
  threadId: string;
}): Promise<void> {
  await httpClient.getInstance().post(
    "/report_flow/report",
    JSON.stringify({
      entity_id: threadId,
      entity_type: entityType,
      product_area: "codex",
      reason:
        details.length === 0 ? { id: reasonId } : { id: reasonId, details },
    }),
    buildApiRequestInit(),
  );
}

function ReportDialogTitle({ success }: { success: boolean }): ReactElement {
  if (success) {
    return (
      <FormattedMessage
        id="codexThreadReportDialog.successTitle"
        defaultMessage="Thanks for your report"
        description="Title shown after a Codex thread safety or legal report is submitted"
      />
    );
  }
  return (
    <FormattedMessage
      id="codexThreadReportDialog.title"
      defaultMessage="Report response"
      description="Title for the modal where users report a Codex response for safety or legal reasons"
    />
  );
}

function ReportDialogSubmitLabel({
  close,
  isLinkStep,
  isSubmitStep,
}: {
  close: boolean;
  isLinkStep: boolean;
  isSubmitStep: boolean;
}): ReactElement {
  if (close) {
    return (
      <FormattedMessage
        id="codexThreadReportDialog.close"
        defaultMessage="Close"
        description="Close button for Codex thread report dialog"
      />
    );
  }
  if (isLinkStep) {
    return (
      <FormattedMessage
        id="codexThreadReportDialog.viewForm"
        defaultMessage="View form"
        description="Button label for opening an external Codex report form"
      />
    );
  }
  if (isSubmitStep) {
    return (
      <FormattedMessage
        id="codexThreadReportDialog.submit"
        defaultMessage="Submit"
        description="Submit button for Codex thread report dialog"
      />
    );
  }
  return (
    <FormattedMessage
      id="codexThreadReportDialog.next"
      defaultMessage="Next"
      description="Next button for Codex thread report reason selection"
    />
  );
}

function ReportDialogText({ children }: { children: ReactNode }): ReactElement {
  return (
    <div className="text-sm text-token-description-foreground">{children}</div>
  );
}

function formatReportDialogSubtitle({
  activeReason,
  isSuccess,
  reportReasons,
}: {
  activeReason: ReportReason | null;
  isSuccess: boolean;
  reportReasons: ReportReasons | undefined;
}): ReactNode {
  if (isSuccess) {
    return null;
  }
  if (activeReason == null) {
    return reportReasons?.header_explanation ?? reportReasons?.header ?? null;
  }
  return activeReason.cta;
}

function ReportReasonOptions({
  reasons,
  selectedReasonId,
  setSelectedReasonId,
}: {
  reasons: ReportReason[];
  selectedReasonId: string | null;
  setSelectedReasonId: (id: string) => void;
}): ReactElement {
  const intl = useIntl();
  const optionsLabel = intl.formatMessage({
    id: "codexThreadReportDialog.optionsLabel",
    defaultMessage: "Reporting options",
    description: "Accessible label for Codex thread report reason options",
  });

  return (
    <div
      role="radiogroup"
      aria-label={optionsLabel}
      className="flex flex-col gap-2"
    >
      {reasons.map((reason) => {
        const selected = selectedReasonId === reason.id;
        return (
          <button
            key={reason.id}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => setSelectedReasonId(reason.id)}
            className={[
              "border-token-border cursor-interaction rounded-lg border px-3 py-2 text-left text-sm",
              "focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-1",
              selected
                ? "bg-token-foreground text-token-dropdown-background"
                : "text-token-foreground hover:bg-token-menu-background/60",
            ].join(" ")}
          >
            {reason.cta}
          </button>
        );
      })}
    </div>
  );
}

export function CodexThreadReportDialog({
  onBackToFeedback,
  onClose,
  reportEntityType,
  threadId,
}: CodexThreadReportDialogProps): ReactElement {
  const intl = useIntl();
  const reasonsQuery = useQuery({
    queryKey: [REPORT_REASONS_QUERY_KEY, reportEntityType],
    queryFn: () => fetchReportReasons(reportEntityType),
    staleTime: timeConstants.ONE_MINUTE,
  });
  const submitMutation = useMutation({ mutationFn: submitReport });

  const [details, setDetails] = useState("");
  const [selectedReasonId, setSelectedReasonId] = useState<string | null>(null);
  const [reasonStack, setReasonStack] = useState<ReportReason[]>([]);

  const activeReason =
    reasonStack.length === 0 ? null : reasonStack[reasonStack.length - 1];
  const reasons: ReportReason[] =
    activeReason?.sub_reasons ?? reasonsQuery.data?.reasons ?? [];
  const selectedReason =
    reasons.find((reason) => reason.id === selectedReasonId) ?? null;
  const needsDetails = activeReason?.details_placeholder != null;
  const needsLink = activeReason?.link_attachment != null;
  const isSubmitStep =
    needsDetails ||
    (selectedReason != null && isTerminalReason(selectedReason));
  const nextDisabled =
    selectedReason == null ||
    reasonsQuery.isPending ||
    submitMutation.isPending;
  const isDone = submitMutation.isSuccess || reasonsQuery.isError;
  const submitDisabled = !isDone && !isSubmitStep && !needsLink && nextDisabled;

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  const handleBack = () => {
    if (activeReason == null) {
      onClose();
      onBackToFeedback?.();
      return;
    }
    const previousReason = reasonStack[reasonStack.length - 1];
    setReasonStack(dropLastReason);
    setSelectedReasonId(previousReason?.id ?? null);
    setDetails("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isDone) {
      onClose();
      return;
    }
    if (needsLink && activeReason?.link_attachment != null) {
      openExternalLink({
        href: activeReason.link_attachment,
        initiator: "open_in_browser_bridge",
      });
      return;
    }
    if (needsDetails && activeReason != null) {
      submitMutation.mutate({
        details: details.trim(),
        entityType: reportEntityType,
        reasonId: activeReason.id,
        threadId,
      });
      return;
    }
    if (selectedReason != null) {
      if (isTerminalReason(selectedReason)) {
        submitMutation.mutate({
          details: "",
          entityType: reportEntityType,
          reasonId: selectedReason.id,
          threadId,
        });
        return;
      }
      setReasonStack((stack) => [...stack, selectedReason]);
      setSelectedReasonId(null);
      setDetails("");
    }
  };

  const handleLinkClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (activeReason?.link_attachment != null) {
      openExternalLinkFromEvent({
        event,
        href: activeReason.link_attachment,
        initiator: "open_in_browser_bridge",
      });
    }
  };

  const titleNode = <ReportDialogTitle success={submitMutation.isSuccess} />;
  const subtitle = formatReportDialogSubtitle({
    activeReason,
    reportReasons: reasonsQuery.data,
    isSuccess: submitMutation.isSuccess,
  });

  let body: ReactNode;
  if (submitMutation.isSuccess) {
    body = (
      <ReportDialogText>
        <FormattedMessage
          id="codexThreadReportDialog.successBody"
          defaultMessage="Our team will review the content to determine if it violates our policies"
          description="Body shown after a Codex thread safety or legal report is submitted"
        />
      </ReportDialogText>
    );
  } else if (reasonsQuery.isPending) {
    body = (
      <ReportDialogText>
        <FormattedMessage
          id="codexThreadReportDialog.loading"
          defaultMessage="Loading reporting options…"
          description="Loading text while Codex thread report reasons are fetched"
        />
      </ReportDialogText>
    );
  } else if (reasonsQuery.isError) {
    body = (
      <ReportDialogText>
        <FormattedMessage
          id="codexThreadReportDialog.loadError"
          defaultMessage="We couldn't load reporting options. Please try again in a moment"
          description="Error text shown when Codex thread report reasons fail to load"
        />
      </ReportDialogText>
    );
  } else if (needsDetails && activeReason != null) {
    body = (
      <FieldStack className="gap-3">
        <textarea
          autoFocus
          className="min-h-[120px] w-full rounded-2xl border border-token-border px-3 py-2 text-token-input-foreground shadow-sm outline-none focus:ring-1 focus:ring-token-focus-border"
          placeholder={activeReason.details_placeholder ?? undefined}
          aria-label={intl.formatMessage({
            id: "codexThreadReportDialog.detailsLabel",
            defaultMessage: "Add details",
            description:
              "Accessible label for Codex thread report details field",
          })}
          value={details}
          onChange={(event) => setDetails(event.target.value)}
        />
        {activeReason.subtext == null ? null : (
          <ReportDialogText>{activeReason.subtext}</ReportDialogText>
        )}
      </FieldStack>
    );
  } else if (needsLink) {
    body = (
      <ReportDialogText>
        {activeReason?.subtext ?? (
          <FormattedMessage
            id="codexThreadReportDialog.linkBody"
            defaultMessage="Open the linked form to finish this report"
            description="Body shown when a Codex thread report reason needs an external form"
          />
        )}
      </ReportDialogText>
    );
  } else {
    body = (
      <ReportReasonOptions
        reasons={reasons}
        selectedReasonId={selectedReasonId}
        setSelectedReasonId={setSelectedReasonId}
      />
    );
  }

  const submitError = submitMutation.isError ? (
    <p className="text-token-danger text-sm">
      <FormattedMessage
        id="codexThreadReportDialog.submitError"
        defaultMessage="We couldn't submit your report. Please try again in a moment"
        description="Error text shown when Codex thread report submission fails"
      />
    </p>
  ) : null;

  const backButton =
    (activeReason != null || onBackToFeedback != null) &&
    !submitMutation.isSuccess ? (
      <Button
        color="secondary"
        disabled={submitMutation.isPending}
        type="button"
        onClick={handleBack}
      >
        <FormattedMessage
          id="codexThreadReportDialog.back"
          defaultMessage="Back"
          description="Back button for Codex thread report reason selection"
        />
      </Button>
    ) : null;

  const submitButton = (
    <Button
      color="primary"
      disabled={submitDisabled}
      loading={submitMutation.isPending}
      type={needsLink ? "button" : "submit"}
      onClick={needsLink ? handleLinkClick : undefined}
    >
      <ReportDialogSubmitLabel
        close={isDone}
        isLinkStep={needsLink}
        isSubmitStep={isSubmitStep}
      />
    </Button>
  );

  return (
    <DialogLayout open onOpenChange={handleOpenChange} size="wide">
      <DialogBody as="form" className="gap-4" onSubmit={handleSubmit}>
        <DialogSection>
          <DialogHeader
            title={titleNode}
            subtitle={subtitle}
            titleSize="dialog"
          />
        </DialogSection>
        <DialogSection>
          {body}
          {submitError}
        </DialogSection>
        <DialogSection>
          <DialogFooter>
            {backButton}
            {submitButton}
          </DialogFooter>
        </DialogSection>
      </DialogBody>
    </DialogLayout>
  );
}
