// Restored from ref/webview/assets/git-settings-Bv6LnZbi.js
// Worktree auto-cleanup settings rows and confirmation dialog.
import React, { type ChangeEvent, type KeyboardEvent } from "react";
import { worktreeSettingDefinitions } from "../../boundaries/src-l0hb-mz-p";
import { Button } from "../../ui/button";
import {
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogLayout,
  DialogSection,
} from "../../ui/dialog-layout";
import { SettingsControlRow } from "../../ui/settings-row";
import { Toggle } from "../../utils/toggle";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { useSettingValue } from "../setting-storage";
import { gitSettingsMessages } from "./messages";
import { useSettingMutation } from "./setting-mutation";
export function WorktreeAutoCleanupSettings() {
  const intl = useIntl();
  const [confirmDisableOpen, setConfirmDisableOpen] = React.useState(false);
  const [keepCountDraft, setKeepCountDraft] = React.useState<string | null>(
    null,
  );
  const autoCleanupEnabled = useSettingValue(
    worktreeSettingDefinitions.autoCleanupEnabled,
  );
  const keepCount = useSettingValue(worktreeSettingDefinitions.keepCount);
  const autoCleanupMutation = useSettingMutation<boolean>({
    setting: worktreeSettingDefinitions.autoCleanupEnabled,
    successMessage: (enabled) =>
      enabled
        ? gitSettingsMessages.automaticWorktreeDeletionEnabled
        : gitSettingsMessages.automaticWorktreeDeletionDisabled,
    errorMessage: gitSettingsMessages.automaticWorktreeDeletionError,
  });
  const keepCountMutation = useSettingMutation<number>({
    setting: worktreeSettingDefinitions.keepCount,
    successMessage: gitSettingsMessages.autoDeleteLimitSaveSuccess,
    errorMessage: gitSettingsMessages.autoDeleteLimitSaveError,
    onSuccess: () => {
      setKeepCountDraft(null);
    },
  });
  const keepCountFromSettings = String(keepCount);
  const keepCountText = keepCountDraft ?? keepCountFromSettings;
  const autoCleanupPending = autoCleanupMutation.isPending;
  const keepCountInputDisabled =
    keepCountMutation.isPending || autoCleanupPending || !autoCleanupEnabled;
  const handleAutoCleanupChange = (enabled: boolean) => {
    if (autoCleanupPending) {
      return;
    }
    if (enabled) {
      autoCleanupMutation.mutate(true);
      return;
    }
    setConfirmDisableOpen(true);
  };
  const confirmDisableAutoCleanup = () => {
    setKeepCountDraft(null);
    setConfirmDisableOpen(false);
    autoCleanupMutation.mutate(false);
  };
  const handleKeepCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (keepCountInputDisabled) {
      return;
    }
    const nextValue = event.target.value;
    setKeepCountDraft(nextValue === keepCountFromSettings ? null : nextValue);
  };
  const saveKeepCount = () => {
    if (keepCountInputDisabled || keepCountDraft == null) {
      return;
    }
    const trimmedValue = keepCountDraft.trim();
    const parsedValue = Number.parseInt(trimmedValue, 10);
    if (trimmedValue.length === 0 || Number.isNaN(parsedValue)) {
      setKeepCountDraft(null);
      return;
    }
    const normalizedValue = Math.max(1, Math.trunc(parsedValue));
    if (normalizedValue === keepCount) {
      setKeepCountDraft(null);
      return;
    }
    keepCountMutation.mutate(normalizedValue);
  };
  const saveKeepCountOnEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      saveKeepCount();
    }
  };
  return (
    <>
      <SettingsControlRow
        label={
          <FormattedMessage
            {...gitSettingsMessages.automaticWorktreeDeletion}
          />
        }
        description={
          <FormattedMessage
            {...gitSettingsMessages.automaticWorktreeDeletionDescription}
          />
        }
        control={
          <Toggle
            checked={autoCleanupEnabled}
            disabled={autoCleanupPending}
            onChange={handleAutoCleanupChange}
            ariaLabel={intl.formatMessage(
              gitSettingsMessages.automaticWorktreeDeletionAriaLabel,
            )}
          />
        }
      />
      <SettingsControlRow
        label={<FormattedMessage {...gitSettingsMessages.autoDeleteLimit} />}
        description={
          autoCleanupEnabled ? (
            <FormattedMessage
              {...gitSettingsMessages.autoDeleteLimitDescription}
            />
          ) : (
            <FormattedMessage
              {...gitSettingsMessages.autoDeleteLimitDisabledDescription}
            />
          )
        }
        control={
          <div className="ml-6">
            <input
              className="w-24 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border"
              value={keepCountText}
              onChange={handleKeepCountChange}
              onBlur={saveKeepCount}
              onKeyDown={saveKeepCountOnEnter}
              type="number"
              inputMode="numeric"
              min={1}
              step={1}
              aria-label={intl.formatMessage(
                gitSettingsMessages.autoDeleteLimitAriaLabel,
              )}
              disabled={keepCountInputDisabled}
            />
          </div>
        }
      />
      <DisableAutomaticDeletionDialog
        open={confirmDisableOpen}
        onOpenChange={setConfirmDisableOpen}
        onConfirm={confirmDisableAutoCleanup}
      />
    </>
  );
}
type DisableAutomaticDeletionDialogProps = {
  onConfirm: () => void;
  onOpenChange: (open: boolean) => void;
  open: boolean;
};
function DisableAutomaticDeletionDialog({
  onConfirm,
  onOpenChange,
  open,
}: DisableAutomaticDeletionDialogProps) {
  return (
    <DialogLayout
      open={open}
      showDialogClose={false}
      onOpenChange={onOpenChange}
    >
      <DialogBody>
        <DialogSection>
          <DialogHeader
            title={
              <FormattedMessage
                {...gitSettingsMessages.disableAutomaticDeletionTitle}
              />
            }
          />
        </DialogSection>
        <DialogSection className="text-token-description-foreground">
          <p>
            <FormattedMessage
              {...gitSettingsMessages.disableAutomaticDeletionBody}
            />
          </p>
        </DialogSection>
        <DialogSection>
          <DialogFooter>
            <Button
              color="ghost"
              onClick={() => {
                onOpenChange(false);
              }}
            >
              <FormattedMessage
                {...gitSettingsMessages.keepAutomaticDeletion}
              />
            </Button>
            <Button color="danger" onClick={onConfirm}>
              <FormattedMessage
                {...gitSettingsMessages.disableAutomaticDeletion}
              />
            </Button>
          </DialogFooter>
        </DialogSection>
      </DialogBody>
    </DialogLayout>
  );
}
