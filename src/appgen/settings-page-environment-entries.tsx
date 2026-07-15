// Restored from ref/webview/assets/appgen-settings-page-BxhhSHRZ.js
// Environment variable and secret row editor for the Appgen settings page.

import React, {
  type ClipboardEvent,
  type ReactElement,
  type ReactNode,
} from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Button } from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import { SettingsGroup } from "../utils/settings-group";
import { SettingsEmptyState } from "../utils/settings-empty-state";
import { PlusSmIcon } from "../icons/plus-sm-icon";
import { TrashIcon } from "../icons/trash-icon";
import {
  applyPastedEnvironmentText,
  type EnvironmentVariableDraft,
} from "./settings-page-helpers";

type EnvironmentEntryGroupProps<Entry extends EnvironmentVariableDraft> = {
  addButtonLabel: ReactNode;
  disabled?: boolean;
  entries: Entry[];
  onChange: (entries: Entry[]) => void;
  subtitle: ReactNode;
  title: ReactNode;
  valueInputType: "password" | "text";
};

type EnvironmentEntryRowProps<Entry extends EnvironmentVariableDraft> = {
  disabled: boolean;
  entry: Entry;
  onChange: (entry: Entry) => void;
  onKeyPaste: (event: ClipboardEvent<HTMLInputElement>) => void;
  onRemove: () => void;
  valueInputType: "password" | "text";
};

export function EnvironmentEntryGroup<Entry extends EnvironmentVariableDraft>({
  addButtonLabel,
  disabled = false,
  entries,
  onChange,
  subtitle,
  title,
  valueInputType,
}: EnvironmentEntryGroupProps<Entry>): ReactElement {
  const addEntry = () => {
    onChange([
      ...entries,
      {
        key: "",
        value: "",
      } as Entry,
    ]);
  };
  return (
    <SettingsGroup className="gap-2">
      <SettingsGroup.Header
        actions={
          <Button
            color="outline"
            disabled={disabled}
            size="toolbar"
            onClick={addEntry}
          >
            <PlusSmIcon className="icon-xs" />
            {addButtonLabel}
          </Button>
        }
        subtitle={subtitle}
        title={title}
        titleGap="none"
      />
      <SettingsGroup.Content>
        <div className="flex flex-col gap-1.5">
          {entries.length === 0 ? (
            <SettingsEmptyState>
              <FormattedMessage
                id="envEntrySettingsGroup.empty"
                defaultMessage="Nothing yet"
                description="Empty state for an environment entry settings section"
              />
            </SettingsEmptyState>
          ) : (
            <div className="flex flex-col gap-2 p-4">
              {entries.map((entry, index) => (
                <EnvironmentEntryRow
                  key={index}
                  disabled={disabled}
                  entry={entry}
                  valueInputType={valueInputType}
                  onChange={(nextEntry) => {
                    onChange(
                      entries.map((existingEntry, entryIndex) =>
                        entryIndex === index
                          ? (nextEntry as Entry)
                          : existingEntry,
                      ),
                    );
                  }}
                  onKeyPaste={(event) => {
                    const pastedEntries = applyPastedEnvironmentText(
                      entries,
                      index,
                      event.clipboardData.getData("text/plain"),
                    );
                    if (pastedEntries != null) {
                      event.preventDefault();
                      onChange(pastedEntries as Entry[]);
                    }
                  }}
                  onRemove={() => {
                    onChange(
                      entries.filter(
                        (_existingEntry, entryIndex) => entryIndex !== index,
                      ),
                    );
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}

function EnvironmentEntryRow<Entry extends EnvironmentVariableDraft>({
  disabled,
  entry,
  onChange,
  onKeyPaste,
  onRemove,
  valueInputType,
}: EnvironmentEntryRowProps<Entry>): ReactElement {
  const intl = useIntl();
  const keyInputDisabled =
    disabled ||
    ("keyInputDisabledWhileValue" in entry &&
      entry.keyInputDisabledWhileValue === entry.value);
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2">
      <EnvironmentEntryInput
        aria-label={intl.formatMessage({
          id: "envEntrySettingsGroup.key.ariaLabel",
          defaultMessage: "Key",
          description:
            "Accessible label for an environment variable or secret key input",
        })}
        disabled={keyInputDisabled}
        placeholder={intl.formatMessage({
          id: "envEntrySettingsGroup.key.placeholder",
          defaultMessage: "Key",
          description:
            "Placeholder for an environment variable or secret key input",
        })}
        value={entry.key}
        onChange={(event) => {
          onChange({
            ...entry,
            key: event.target.value,
          });
        }}
        onPaste={onKeyPaste}
      />
      <EnvironmentEntryInput
        aria-label={intl.formatMessage({
          id: "envEntrySettingsGroup.value.ariaLabel",
          defaultMessage: "Value",
          description:
            "Accessible label for an environment variable or secret value input",
        })}
        disabled={disabled}
        placeholder={intl.formatMessage({
          id: "envEntrySettingsGroup.value.placeholder",
          defaultMessage: "Value",
          description:
            "Placeholder for an environment variable or secret value input",
        })}
        type={valueInputType}
        value={entry.value}
        onChange={(event) => {
          onChange({
            ...entry,
            value: event.target.value,
          });
        }}
      />
      <Button
        aria-label={intl.formatMessage({
          id: "envEntrySettingsGroup.remove.ariaLabel",
          defaultMessage: "Remove entry",
          description:
            "Accessible label for removing an environment variable or secret row",
        })}
        color="ghost"
        disabled={disabled}
        size="icon"
        onClick={onRemove}
      >
        <TrashIcon className="icon-2xs" />
      </Button>
    </div>
  );
}

function EnvironmentEntryInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
): ReactElement {
  return (
    <input
      className="h-token-button-composer w-full min-w-0 rounded-md border border-token-input-border bg-token-input-background px-2 font-mono text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border disabled:cursor-not-allowed disabled:opacity-40"
      {...props}
    />
  );
}
