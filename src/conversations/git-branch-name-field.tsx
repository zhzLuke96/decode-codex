// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Branch-name input row used by the commit and create-pull-request command menus,
// with an inline "branch already exists" validation message.

import type { KeyboardEvent } from "react";
import { FormattedMessage, useIntl } from "../vendor/react-intl";

export function stopEnterKeyPropagation(event: KeyboardEvent<HTMLElement>) {
  if (event.key === "Enter" && !event.metaKey && !event.ctrlKey) {
    event.stopPropagation();
  }
}

export interface GitBranchNameFieldProps {
  branchAlreadyExists: boolean;
  disabled: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export function GitBranchNameField({
  branchAlreadyExists,
  disabled,
  placeholder,
  value,
  onChange,
}: GitBranchNameFieldProps) {
  const intl = useIntl();
  const ariaLabel = intl.formatMessage({
    id: "localConversationPage.gitActions.branchNameLabel",
    defaultMessage: "Branch name",
    description: "Accessible label for a new Git action branch field",
  });

  return (
    <div className="flex flex-col gap-1 px-3 pt-2">
      <input
        autoFocus={true}
        className="w-full bg-transparent text-token-input-foreground outline-none placeholder:text-token-description-foreground"
        aria-label={ariaLabel}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onKeyDown={stopEnterKeyPropagation}
        onChange={(event) => onChange(event.target.value)}
      />
      {branchAlreadyExists ? (
        <p className="text-xs text-token-error-foreground">
          <FormattedMessage
            id="localConversationPage.gitActions.branchExistsError"
            defaultMessage="Branch already exists"
            description="Validation message shown when a new Git action branch already exists"
          />
        </p>
      ) : null}
    </div>
  );
}
