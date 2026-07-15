// Restored from ref/webview/assets/use-dictation-DQROZBbT.js
// use-dictation-DQROZBbT chunk restored from the Codex webview bundle.
import React from "react";
import { Badge } from "../../utils/badge";
import { Button } from "../../ui/button";
import { FormattedMessage, useIntl } from "../../vendor/react-intl";
import { initPlusIcon, PlusIcon } from "../../icons/plus-icon";
import { Tooltip } from "../../ui/tooltip-b";
import { useGateValue } from "../../vendor/statsig-current-runtime";
import type { ComposerContextButtonProps } from "./types";

const COMPACT_COMPOSER_CONTROLS_GATE = "2700454473";

function preventMouseDownDefault(event: React.MouseEvent) {
  event.preventDefault();
}
function ComposerContextButton({
  active = false,
  disabled = false,
  onOpen,
}: ComposerContextButtonProps) {
  const intl = useIntl();
  const compactComposerControlsEnabled = useGateValue(
    COMPACT_COMPOSER_CONTROLS_GATE,
  );
  const tooltipContent = (
    <div className="flex items-center gap-1">
      <FormattedMessage
        id="composer.contextButton.tooltip"
        defaultMessage="Add files and more"
        description="Tooltip for the button that opens contextual composer suggestions"
      />
      <Badge className="px-1 py-0 text-xs leading-none">
        <FormattedMessage
          id="composer.contextButton.keyboardEquivalent"
          defaultMessage="@"
          description="Keyboard equivalent shown in the contextual composer button tooltip"
        />
      </Badge>
    </div>
  );
  const ariaLabel = intl.formatMessage({
    id: "composer.contextButton.ariaLabel",
    defaultMessage: "Add files and more",
    description:
      "Accessible label for the button that opens contextual composer suggestions",
  });
  return (
    <Tooltip
      tooltipContent={tooltipContent}
      side="top"
      align="center"
      sideOffset={4}
    >
      <Button
        aria-label={ariaLabel}
        aria-expanded={active}
        data-state={active ? "open" : "closed"}
        color={active ? "ghostActive" : "ghost"}
        disabled={disabled}
        size="composer"
        uniform
        onMouseDown={preventMouseDownDefault}
        onClick={onOpen}
      >
        <PlusIcon
          className={
            compactComposerControlsEnabled
              ? "icon-xs text-token-foreground"
              : "icon-sm"
          }
        />
      </Button>
    </Tooltip>
  );
}
export function initComposerContextButtonChunk(): void {
  initPlusIcon();
  void ComposerContextButton;
}
export { ComposerContextButton };
