// Restored from ref/webview/assets/general-settings-CyYw_gZ3.js
import type { ReactNode } from "react";
import { FormattedMessage } from "../vendor/react-intl";

export type PromptSubmitBehavior = "enter" | "cmdIfMultiline" | "cmdAlways";

type PromptSubmitBehaviorLabelProps = {
  behavior: PromptSubmitBehavior;
  modifierSymbol: string;
};

export function PromptSubmitBehaviorLabel({
  behavior,
  modifierSymbol,
}: PromptSubmitBehaviorLabelProps): ReactNode {
  switch (behavior) {
    case "enter":
      return (
        <FormattedMessage
          id="settings.general.enterBehavior.enter"
          defaultMessage="Enter"
          description="Option label for sending prompts with Enter"
        />
      );
    case "cmdIfMultiline":
      return (
        <FormattedMessage
          id="settings.general.enterBehavior.cmdIfMultiline"
          defaultMessage="{modifierSymbol} + Enter for multiline prompts"
          description="Option label for requiring a modifier key to send multiline prompts"
          values={{ modifierSymbol }}
        />
      );
    case "cmdAlways":
      return (
        <FormattedMessage
          id="settings.general.enterBehavior.cmdAlways"
          defaultMessage="{modifierSymbol} + Enter always"
          description="Option label for always requiring a modifier key to send prompts"
          values={{ modifierSymbol }}
        />
      );
  }
}
