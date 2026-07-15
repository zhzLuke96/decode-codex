// Restored from ref/webview/assets/copy-button-CRbl2OgP.js
// copy-button-CRbl2OgP chunk restored from the Codex webview bundle.
import React from "react";
import clsx from "clsx";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import { Button } from "./button";
import { CheckMdIcon } from "../icons/check-md-icon";
import { CopyIcon } from "../icons/copy-icon";
import { Tooltip } from "./tooltip-b";
type CopyButtonProps = {
  ariaLabel?: string;
  buttonText?: boolean | React.ReactNode;
  className?: string;
  iconClassName?: string;
  iconOnly?: boolean;
  onCopy: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
function useIsMounted() {
  const isMountedRef = React.useRef(false);
  React.useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  return React.useCallback(() => isMountedRef.current, []);
}
function CopyButton({
  buttonText,
  iconClassName = "icon-sm",
  onCopy,
  ariaLabel,
  className,
  iconOnly = false,
}: CopyButtonProps) {
  const intl = useIntl();
  const [copied, setCopied] = React.useState(false);
  const isMounted = useIsMounted();
  const handleCopy = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onCopy(event);
      setCopied(true);
      setTimeout(() => {
        if (isMounted()) setCopied(false);
      }, 2000);
    },
    [isMounted, onCopy],
  );
  const copiedLabel = (
    <FormattedMessage
      id="copyButton.copied"
      defaultMessage="Copied"
      description="Text displayed when the content has been copied"
    />
  );
  let visibleText = copied ? copiedLabel : buttonText;
  if (visibleText === true) {
    visibleText = (
      <FormattedMessage
        id="copyButton.copy"
        defaultMessage="Copy"
        description="Text displayed when the content can be copied"
      />
    );
  }
  const tooltipContent = copied
    ? copiedLabel
    : (buttonText ?? (
        <FormattedMessage
          id="CopyButton.copyTooltip"
          defaultMessage="Copy"
          description="Tooltip on copy message icon button"
        />
      ));
  const buttonAriaLabel = copied
    ? intl.formatMessage({
        id: "copyButton.copiedAriaLabel",
        defaultMessage: "Copied",
        description: "Aria label for a button state when text has been copied",
      })
    : (ariaLabel ??
      intl.formatMessage({
        id: "copyButton.copyAriaLabel",
        defaultMessage: "Copy",
        description: "Aria label for a button for content that can be copied",
      }));
  const icon = copied ? (
    <CheckMdIcon className={iconClassName} />
  ) : (
    <CopyIcon className={iconClassName} />
  );
  return (
    <Tooltip tooltipContent={tooltipContent} disabled={!iconOnly}>
      <Button
        className={clsx(copied && "text-token-foreground", className)}
        aria-label={buttonAriaLabel}
        color="ghost"
        size="icon"
        onClick={copied ? undefined : handleCopy}
      >
        {icon}
        {!iconOnly && visibleText}
      </Button>
    </Tooltip>
  );
}
export { useIsMounted, CopyButton };
