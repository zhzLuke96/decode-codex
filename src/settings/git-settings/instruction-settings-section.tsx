// Restored from ref/webview/assets/git-settings-Bv6LnZbi.js
// Reusable textarea section for Git-generated text instructions.
import type { ChangeEvent, ReactNode } from "react";
import { Button } from "../../ui/button";
import { SettingsGroup } from "../../utils/settings-group";
import { FormattedMessage } from "../../vendor/react-intl";
type MessageDescriptor = {
  id: string;
  defaultMessage: string;
  description?: string;
};
type InstructionSettingsSectionProps = {
  ariaLabel: string;
  disabled: boolean;
  draftValue: string;
  onChange: (value: string) => void;
  onSave: () => void;
  placeholder: string;
  saveDisabled: boolean;
  saveLabel: MessageDescriptor;
  saving: boolean;
  subtitle: ReactNode;
  title: ReactNode;
};
export function InstructionSettingsSection({
  ariaLabel,
  disabled,
  draftValue,
  onChange,
  onSave,
  placeholder,
  saveDisabled,
  saveLabel,
  saving,
  subtitle,
  title,
}: InstructionSettingsSectionProps) {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };
  return (
    <SettingsGroup>
      <SettingsGroup.Header
        title={title}
        subtitle={subtitle}
        actions={
          <Button
            color="secondary"
            disabled={saveDisabled}
            loading={saving}
            onClick={onSave}
            size="toolbar"
          >
            <FormattedMessage {...saveLabel} />
          </Button>
        }
      />
      <SettingsGroup.Content>
        <textarea
          className="mt-1.5 w-full rounded-md border border-token-input-border bg-token-input-background px-2.5 py-2 text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border"
          value={draftValue}
          onChange={handleChange}
          placeholder={placeholder}
          aria-label={ariaLabel}
          disabled={disabled}
          rows={6}
        />
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}
