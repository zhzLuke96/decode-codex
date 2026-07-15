// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js

import { FormattedMessage } from "../../../vendor/react-intl";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooterRow,
  DialogHeaderRow,
  DialogSection,
  VisuallyHiddenDescription,
  VisuallyHiddenTitle,
  WarningCircleIcon,
} from "../../../boundaries/onboarding-commons-externals.facade";
import { firstNonEmptyTrimmedLine } from "./error-summary";
import {
  PatchFailureDescription,
  PatchFailureTitle,
} from "./patch-failure-messages";
import { PatchPathGroup } from "./patch-path-group";
import type { PatchFailureDialogProps } from "./types";

export function PatchFailureDialog({
  open,
  onOpenChange,
  failure,
  cwd,
  hostId,
}: PatchFailureDialogProps) {
  if (failure == null) return null;
  const { action, result } = failure;
  const hasAnyPaths =
    result.appliedPaths.length > 0 ||
    result.skippedPaths.length > 0 ||
    result.conflictedPaths.length > 0;
  const fallbackErrorLine = firstNonEmptyTrimmedLine(result.execOutput?.output);

  const hiddenTitle = (
    <VisuallyHiddenTitle className="sr-only">
      <PatchFailureTitle action={action} result={result} />
    </VisuallyHiddenTitle>
  );
  const hiddenDescription = (
    <VisuallyHiddenDescription className="sr-only">
      <PatchFailureDescription
        action={action}
        result={result}
        hasAnyPaths={hasAnyPaths}
        fallbackErrorLine={fallbackErrorLine}
      />
    </VisuallyHiddenDescription>
  );

  const header = (
    <DialogSection>
      <DialogHeaderRow
        icon={<WarningCircleIcon className="icon-sm text-token-charts-red" />}
        iconBackgroundClassName="bg-token-charts-red/10"
        title={<PatchFailureTitle action={action} result={result} />}
      />
    </DialogSection>
  );

  const description = (
    <DialogSection>
      <div className="text-sm text-token-description-foreground">
        <PatchFailureDescription
          action={action}
          result={result}
          hasAnyPaths={hasAnyPaths}
          fallbackErrorLine={fallbackErrorLine}
        />
      </div>
    </DialogSection>
  );

  const pathDetails = hasAnyPaths ? (
    <DialogSection className="max-h-[40vh] overflow-y-auto">
      <div className="flex flex-col gap-3">
        <PatchPathGroup
          cwd={cwd}
          hostId={hostId}
          toneClassName="text-token-foreground"
          heading={
            <FormattedMessage
              id="codex.unifiedDiff.patchAppliedPathsHeading"
              defaultMessage="Applied cleanly ({count})"
              description="Heading for files where a patch action was applied cleanly"
              values={{ count: result.appliedPaths.length }}
            />
          }
          paths={result.appliedPaths}
        />
        <PatchPathGroup
          cwd={cwd}
          hostId={hostId}
          toneClassName="text-token-description-foreground"
          heading={
            <FormattedMessage
              id="codex.unifiedDiff.patchSkippedPathsHeading"
              defaultMessage="Skipped ({count})"
              description="Heading for files skipped during a patch action"
              values={{ count: result.skippedPaths.length }}
            />
          }
          paths={result.skippedPaths}
        />
        <PatchPathGroup
          cwd={cwd}
          hostId={hostId}
          toneClassName="text-token-charts-red"
          heading={
            <FormattedMessage
              id="codex.unifiedDiff.patchConflictedPathsHeading"
              defaultMessage="Conflicts ({count})"
              description="Heading for files with conflicts during a patch action"
              values={{ count: result.conflictedPaths.length }}
            />
          }
          paths={result.conflictedPaths}
        />
      </div>
    </DialogSection>
  ) : null;

  const footer = (
    <DialogSection>
      <DialogFooterRow>
        <Button color="primary" onClick={() => onOpenChange(false)}>
          <FormattedMessage
            id="codex.unifiedDiff.patchFailureDialogClose"
            defaultMessage="Close"
            description="Close button label for the patch action failure dialog"
          />
        </Button>
      </DialogFooterRow>
    </DialogSection>
  );

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      triggerAsChild={false}
      size="compact"
    >
      {hiddenTitle}
      {hiddenDescription}
      <DialogBody>
        {header}
        {description}
        {pathDetails}
        {footer}
      </DialogBody>
    </Dialog>
  );
}
