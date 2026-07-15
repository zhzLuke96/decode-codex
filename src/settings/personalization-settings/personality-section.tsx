// Restored from ref/webview/assets/personalization-settings-B1J6eU5_.js
// Personality controls for personalization settings.
import React from "react";

import { usePersonality } from "../../features/personality/use-personality";
import { CheckMdIcon } from "../../icons/check-md-icon";
import { Button } from "../../ui/button";
import { Dropdown, DropdownMenu } from "../../ui/dropdown";
import { SettingsControlRow } from "../../ui/settings-row";
import { SettingsGroup } from "../../utils/settings-group";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { personalizationMessages } from "./messages";

type PersonalityOption = {
  description: string;
  label: string;
  value: string;
};

export function PersonalitySection({
  hostId,
}: {
  hostId: string;
}): JSX.Element | null {
  const intl = useIntl();
  const { isPersonalityEnabled, personality, setPersonality } = usePersonality({
    hostId,
  });

  const options = React.useMemo<PersonalityOption[]>(
    () => [
      {
        value: "friendly",
        label: intl.formatMessage(personalizationMessages.friendly),
        description: intl.formatMessage(
          personalizationMessages.friendlyDescription,
        ),
      },
      {
        value: "pragmatic",
        label: intl.formatMessage(personalizationMessages.pragmatic),
        description: intl.formatMessage(
          personalizationMessages.pragmaticDescription,
        ),
      },
    ],
    [intl],
  );

  if (!isPersonalityEnabled) return null;

  const selectedOption =
    options.find((option) => option.value === personality) ?? options[0];

  return (
    <SettingsGroup>
      <SettingsGroup.Content>
        <SettingsControlRow
          label={<FormattedMessage {...personalizationMessages.personality} />}
          description={
            <FormattedMessage
              {...personalizationMessages.personalityDescription}
            />
          }
          control={
            <DropdownMenu
              align="end"
              triggerButton={
                <Button color="secondary" size="toolbar">
                  <span className="flex min-w-0 items-center gap-1.5">
                    {selectedOption.label}
                  </span>
                </Button>
              }
            >
              <div className="w-[260px] max-w-xs space-y-1">
                {options.map((option) => (
                  <Dropdown.Item
                    key={option.value}
                    onSelect={() => {
                      setPersonality(option.value);
                    }}
                    RightIcon={
                      personality === option.value ? CheckMdIcon : undefined
                    }
                  >
                    <div className="flex flex-col items-start gap-0.5">
                      <span className="text-sm">{option.label}</span>
                      <span className="text-xs text-token-text-secondary">
                        {option.description}
                      </span>
                    </div>
                  </Dropdown.Item>
                ))}
              </div>
            </DropdownMenu>
          }
        />
      </SettingsGroup.Content>
    </SettingsGroup>
  );
}
