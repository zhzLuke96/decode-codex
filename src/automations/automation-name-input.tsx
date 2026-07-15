// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Title input for the scheduled-task (automation) editor.
import type { ReactElement } from "react";
import { useIntl } from "../vendor/react-intl";

const AUTOMATION_NAME_INPUT_CLASS_NAME =
  "text-token-input-foreground placeholder:text-token-input-placeholder-foreground m-0 w-full min-w-0 appearance-none bg-transparent p-0 text-lg leading-tight outline-none";

export function initAutomationNameInputChunk(): void {}

export interface AutomationNameInputProps {
  id?: string;
  value: string;
  autoFocus?: boolean;
  onChange: (value: string) => void;
}

export function AutomationNameInput({
  id,
  value,
  autoFocus,
  onChange,
}: AutomationNameInputProps): ReactElement {
  const intl = useIntl();
  const ariaLabel = intl.formatMessage({
    id: "settings.automations.nameLabel",
    defaultMessage: "Name",
    description: "Label for automation name input",
  });
  const placeholder = intl.formatMessage({
    id: "settings.automations.namePlaceholder",
    defaultMessage: "Scheduled task title",
    description: "Placeholder for scheduled task name input",
  });

  return (
    <input
      id={id}
      data-testid="automation-title-input"
      autoFocus={autoFocus}
      className={AUTOMATION_NAME_INPUT_CLASS_NAME}
      aria-label={ariaLabel}
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
