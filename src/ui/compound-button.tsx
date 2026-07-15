// Restored from ref/webview/assets/compound-button-CnDUF4co.js
// Compound button component with primary action and dropdown action.
import React, {
  type ButtonHTMLAttributes,
  type ComponentProps,
  type ComponentType,
  type MouseEvent,
  type MouseEventHandler,
  type ReactNode,
  type Ref,
} from "react";
import clsx from "clsx";
import { ChevronIcon } from "../icons/chevron-icon";
import { BUTTON_RADIUS_CLASS_NAMES, Button } from "./button";
import { DropdownMenu } from "./dropdown";
import { Tooltip } from "./tooltip-b";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
type ButtonProps = ComponentProps<typeof Button>;
type DropdownMenuProps = ComponentProps<typeof DropdownMenu>;
type TooltipProps = ComponentProps<typeof Tooltip>;
type MessageDescriptor = ComponentProps<typeof FormattedMessage>;
type SecondaryIconComponent = ComponentType<{
  className?: string;
}>;
type CompoundButtonProps = Omit<ComponentProps<"div">, "onClick" | "ref"> & {
  children: ReactNode;
  color?: ButtonProps["color"];
  disabled?: boolean;
  dropdownAlign?: DropdownMenuProps["align"];
  dropdownButtonClassName?: string;
  dropdownContent: ReactNode;
  dropdownContentClassName?: string;
  dropdownContentLayout?: "menu" | "plain";
  dropdownContentMaxHeight?: DropdownMenuProps["contentMaxHeight"];
  dropdownContentWidth?: DropdownMenuProps["contentWidth"];
  dropdownDir?: DropdownMenuProps["dir"];
  dropdownDisabled?: boolean;
  dropdownOpen?: boolean;
  dropdownSide?: DropdownMenuProps["side"];
  dropdownSurface?: DropdownMenuProps["surface"];
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onDropdownOpenChange?: (open: boolean) => void;
  primaryAriaLabel?: string | MessageDescriptor;
  primaryClassName?: string;
  primaryDisabled?: boolean;
  ref?: Ref<HTMLDivElement>;
  secondaryAriaLabel?: string;
  secondaryIcon?: SecondaryIconComponent;
  secondaryTooltipContent?: ReactNode;
  secondaryTooltipDisabled?: boolean;
  size?: ButtonProps["size"];
  tooltipAlign?: TooltipProps["align"];
  tooltipContent?: ReactNode;
  tooltipDelayOpen?: TooltipProps["delayOpen"];
  tooltipSide?: TooltipProps["side"];
  tooltipSideOffset?: TooltipProps["sideOffset"];
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
};
export function CompoundButton({
  children,
  onClick,
  color = "primary",
  size = "default",
  disabled = false,
  primaryDisabled,
  dropdownDisabled,
  loading = false,
  className,
  primaryClassName,
  dropdownButtonClassName,
  secondaryAriaLabel,
  secondaryIcon: SecondaryIcon = ChevronIcon,
  type,
  dropdownContent,
  dropdownAlign = "start",
  dropdownDir,
  dropdownSide = "bottom",
  dropdownSurface = "menu",
  dropdownContentMaxHeight,
  dropdownContentWidth,
  dropdownContentLayout = "menu",
  dropdownContentClassName,
  primaryAriaLabel,
  dropdownOpen,
  onDropdownOpenChange,
  tooltipContent,
  tooltipSide,
  tooltipAlign,
  tooltipSideOffset,
  tooltipDelayOpen,
  secondaryTooltipContent,
  secondaryTooltipDisabled,
  ref,
  ...containerProps
}: CompoundButtonProps) {
  const intl = useIntl();
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const buttonDisabled = disabled || loading;
  const primaryActionDisabled = buttonDisabled || primaryDisabled === true;
  const secondaryActionDisabled = dropdownDisabled ?? buttonDisabled;
  const allActionsDisabled = primaryActionDisabled && secondaryActionDisabled;
  const dropdownIsControlled = dropdownOpen !== undefined;
  const open = dropdownIsControlled ? dropdownOpen : uncontrolledOpen;
  const outlinePrimaryOnlyDisabled =
    color === "outline" && primaryActionDisabled && !secondaryActionDisabled;
  const secondaryLabel =
    secondaryAriaLabel ??
    intl.formatMessage({
      id: "compoundButton.secondaryAction",
      defaultMessage: "Secondary action",
      description: "Aria label for the secondary target on the compound button",
    });
  const formattedPrimaryAriaLabel =
    typeof primaryAriaLabel === "string"
      ? primaryAriaLabel
      : primaryAriaLabel != null
        ? intl.formatMessage(primaryAriaLabel)
        : undefined;
  function setOpen(nextOpen: boolean) {
    if (!dropdownIsControlled) setUncontrolledOpen(nextOpen);
    onDropdownOpenChange?.(nextOpen);
  }
  function handlePrimaryClick(event: MouseEvent<HTMLButtonElement>) {
    if (primaryActionDisabled) return;
    if (onClick) {
      onClick(event);
      return;
    }
    setOpen(!open);
  }
  const primaryChildren =
    outlinePrimaryOnlyDisabled &&
    (typeof children === "string" || typeof children === "number") ? (
      <span>{children}</span>
    ) : (
      children
    );
  const primaryButton = (
    <Button
      color={color}
      size={size}
      disabled={primaryActionDisabled}
      loading={loading}
      className={clsx(
        "rounded-r-none border-r-0 pr-1",
        color === "outline" && primaryActionDisabled && "disabled:opacity-100",
        outlinePrimaryOnlyDisabled && "disabled:[&>*]:opacity-40",
        primaryClassName,
      )}
      aria-label={formattedPrimaryAriaLabel}
      onClick={handlePrimaryClick}
      type={type}
    >
      {primaryChildren}
    </Button>
  );
  const secondaryButton = (
    <Button
      aria-label={secondaryLabel}
      color={color}
      size={size}
      disabled={secondaryActionDisabled}
      className={clsx(
        "gap-0 rounded-l-none border-l-0 pl-0.5 pr-1.5",
        color === "outline" &&
          secondaryActionDisabled &&
          "disabled:opacity-100",
        dropdownButtonClassName,
      )}
      onMouseDown={preventMouseDownDefault}
      type="button"
    >
      <SecondaryIcon
        className={clsx(
          "icon-2xs",
          color === "outline" &&
            secondaryActionDisabled &&
            !primaryActionDisabled
            ? "opacity-20"
            : "opacity-50",
        )}
      />
    </Button>
  );
  const primaryWithTooltip =
    tooltipContent == null ? (
      primaryButton
    ) : (
      <Tooltip
        tooltipContent={tooltipContent}
        side={tooltipSide}
        align={tooltipAlign}
        sideOffset={tooltipSideOffset}
        delayOpen={tooltipDelayOpen}
      >
        <span className="inline-flex min-w-0">{primaryButton}</span>
      </Tooltip>
    );
  const secondaryWithTooltip =
    secondaryTooltipContent == null || secondaryTooltipDisabled === true ? (
      secondaryButton
    ) : (
      <Tooltip
        tooltipContent={secondaryTooltipContent}
        delayOpen={tooltipDelayOpen}
      >
        <span className="inline-flex">{secondaryButton}</span>
      </Tooltip>
    );
  const content =
    dropdownContentLayout === "menu" ? (
      <div className="flex min-w-[160px] flex-col gap-0.5">
        {dropdownContent}
      </div>
    ) : (
      dropdownContent
    );
  return (
    <div
      ref={ref}
      className={clsx(
        "inline-flex self-start items-stretch overflow-hidden",
        BUTTON_RADIUS_CLASS_NAMES[size],
        color === "outline" && allActionsDisabled && "opacity-40",
        className,
      )}
      {...containerProps}
    >
      {primaryWithTooltip}
      <DropdownMenu
        open={secondaryActionDisabled ? false : open}
        onOpenChange={(nextOpen) => {
          if (!secondaryActionDisabled) setOpen(nextOpen);
        }}
        dir={dropdownDir}
        side={dropdownSide}
        align={dropdownAlign}
        surface={dropdownSurface}
        contentMaxHeight={dropdownContentMaxHeight}
        contentWidth={dropdownContentWidth}
        contentClassName={dropdownContentClassName}
        triggerButton={secondaryWithTooltip}
      >
        {content}
      </DropdownMenu>
    </div>
  );
}
function preventMouseDownDefault(event: MouseEvent<HTMLButtonElement>) {
  event.preventDefault();
}
