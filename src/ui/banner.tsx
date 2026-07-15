// Restored from ref/webview/assets/banner-NiedSf5B.js
// banner-NiedSf5B chunk restored from the Codex webview bundle.
import type { ComponentProps, ComponentType, ReactNode } from "react";
import clsx from "clsx";
import { Button } from "../ui/button";
type BannerType = "normal" | "info" | "infoAccent" | "error";
type BannerLayout = "horizontal" | "vertical" | "verticalIcon";
type BannerButtonColor = NonNullable<ComponentProps<typeof Button>["color"]>;
type BannerProps = {
  Icon?: ComponentType<{
    className?: string;
  }>;
  className?: string;
  content?: ReactNode;
  customCtas?: ReactNode;
  dangerCtaText?: ReactNode;
  iconClassName?: string;
  isDangerCtaDisabled?: boolean;
  isPrimaryCtaDisabled?: boolean;
  isSecondaryCtaDisabled?: boolean;
  layout?: BannerLayout;
  onDangerCtaClick?: () => void;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
  primaryCtaColor?: BannerButtonColor;
  primaryCtaText?: ReactNode;
  secondaryCtaColor?: BannerButtonColor;
  secondaryCtaText?: ReactNode;
  stackOnNarrow?: boolean;
  title?: ReactNode;
  type?: BannerType;
};
function Banner({
  title,
  content,
  customCtas,
  onPrimaryCtaClick,
  primaryCtaText,
  primaryCtaColor,
  secondaryCtaColor,
  onSecondaryCtaClick,
  onDangerCtaClick,
  secondaryCtaText,
  dangerCtaText,
  Icon,
  iconClassName,
  isPrimaryCtaDisabled = false,
  isSecondaryCtaDisabled = false,
  isDangerCtaDisabled = false,
  type = "normal",
  className,
  layout = "horizontal",
  stackOnNarrow = false,
}: BannerProps) {
  const isVertical = layout === "vertical";
  const isVerticalIcon = layout === "verticalIcon";
  const shouldStackHorizontal = layout === "horizontal" && stackOnNarrow;
  const ctas = renderBannerCtas({
    customCtas,
    dangerCtaText,
    isDangerCtaDisabled,
    isPrimaryCtaDisabled,
    isSecondaryCtaDisabled,
    isVertical,
    onDangerCtaClick,
    onPrimaryCtaClick,
    onSecondaryCtaClick,
    primaryCtaColor,
    primaryCtaText,
    secondaryCtaColor,
    secondaryCtaText,
    shouldStackHorizontal,
  });
  const toneClassName = {
    error:
      "border-token-error-foreground/20 text-token-error-foreground bg-token-input-validation-error-background/20",
    info: "border-token-border bg-token-input-background text-token-foreground",
    infoAccent:
      "border-token-text-link-foreground/40 bg-token-input-background text-token-foreground",
    normal:
      "border-token-border bg-token-input-background text-token-foreground",
  }[type];
  const resolvedIconClassName = clsx(
    "icon-sm shrink-0",
    type === "infoAccent" && "text-token-text-link-foreground",
    iconClassName,
  );
  const titleRow = () => (
    <div className="flex items-center gap-1">
      {Icon ? <Icon className={resolvedIconClassName} /> : null}
      {title ? (
        <h3 className="text-pretty electron:text-base electron:font-semibold extension:text-sm extension:font-bold">
          {title}
        </h3>
      ) : null}
    </div>
  );
  const contentColumn = (extraClassName?: string) => (
    <div className={clsx("flex min-w-0 flex-1 flex-col", extraClassName)}>
      <div
        className={clsx(
          "electron:leading-relaxed min-w-0 flex-1 text-pretty",
          title
            ? type === "error"
              ? "text-token-error-foreground"
              : "text-token-description-foreground"
            : "",
        )}
      >
        {content}
      </div>
    </div>
  );
  if (isVertical) {
    return (
      <div className="rounded-3xl bg-token-side-bar-background opacity-100">
        <aside
          className={clsx(
            "flex w-full flex-col gap-1.5 rounded-3xl border py-2 pl-3 pr-2 text-sm lg:mx-auto dark:border-transparent",
            toneClassName,
            className,
          )}
        >
          {Icon || title ? titleRow() : null}
          {contentColumn("gap-1.5")}
          {ctas}
        </aside>
      </div>
    );
  }
  if (isVerticalIcon) {
    return (
      <div className="rounded-3xl bg-token-side-bar-background opacity-100">
        <aside
          className={clsx(
            "flex w-full gap-3 rounded-3xl border py-2 pl-3 pr-2 text-sm lg:mx-auto dark:border-transparent",
            toneClassName,
            className,
          )}
        >
          {Icon ? (
            <div className="flex items-center self-center">
              <Icon className={resolvedIconClassName} />
            </div>
          ) : null}
          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
            {title ? (
              <h3 className="text-pretty electron:text-base electron:font-semibold extension:text-sm extension:font-bold">
                {title}
              </h3>
            ) : null}
            {contentColumn()}
            {ctas}
          </div>
        </aside>
      </div>
    );
  }
  return (
    <div className="rounded-3xl bg-token-side-bar-background opacity-100">
      <aside
        className={clsx(
          "flex w-full items-center gap-4 rounded-3xl border py-2 pl-3 pr-2 text-sm lg:mx-auto dark:border-transparent",
          shouldStackHorizontal && "max-[400px]:items-start max-[400px]:gap-2",
          toneClassName,
          className,
        )}
      >
        <div
          className={clsx(
            "flex h-full w-full items-center gap-2",
            shouldStackHorizontal && "max-[400px]:items-start",
          )}
        >
          {Icon ? (
            <Icon
              className={clsx(
                resolvedIconClassName,
                shouldStackHorizontal && "max-[400px]:hidden",
              )}
            />
          ) : null}
          <div
            className={clsx(
              "flex min-w-0 grow flex-row items-center justify-between gap-2",
              shouldStackHorizontal &&
                "max-[400px]:flex-col max-[400px]:items-stretch max-[400px]:gap-2",
            )}
          >
            {title ? (
              <h3 className="text-sm font-bold text-pretty">{title}</h3>
            ) : null}
            {contentColumn()}
            {ctas}
          </div>
        </div>
      </aside>
    </div>
  );
}
function renderBannerCtas({
  customCtas,
  dangerCtaText,
  isDangerCtaDisabled,
  isPrimaryCtaDisabled,
  isSecondaryCtaDisabled,
  isVertical,
  onDangerCtaClick,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  primaryCtaColor,
  primaryCtaText,
  secondaryCtaColor,
  secondaryCtaText,
  shouldStackHorizontal,
}: {
  customCtas?: ReactNode;
  dangerCtaText?: ReactNode;
  isDangerCtaDisabled: boolean;
  isPrimaryCtaDisabled: boolean;
  isSecondaryCtaDisabled: boolean;
  isVertical: boolean;
  onDangerCtaClick?: () => void;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
  primaryCtaColor?: BannerButtonColor;
  primaryCtaText?: ReactNode;
  secondaryCtaColor?: BannerButtonColor;
  secondaryCtaText?: ReactNode;
  shouldStackHorizontal: boolean;
}) {
  const className = clsx(
    "flex gap-2 pb-0",
    isVertical ? "w-full justify-end pt-0" : "shrink-0",
    shouldStackHorizontal &&
      "max-[400px]:w-full max-[400px]:shrink max-[400px]:justify-center",
  );
  if (customCtas) return <div className={className}>{customCtas}</div>;
  if (!primaryCtaText && !secondaryCtaText && !dangerCtaText) return false;
  return (
    <div className={className}>
      {primaryCtaText ? (
        <Button
          onClick={onPrimaryCtaClick}
          color={primaryCtaColor ?? "outline"}
          className="shrink-0"
          disabled={isPrimaryCtaDisabled}
        >
          {primaryCtaText}
        </Button>
      ) : null}
      {secondaryCtaText ? (
        <Button
          onClick={onSecondaryCtaClick}
          color={secondaryCtaColor ?? "ghost"}
          className="shrink-0"
          disabled={isSecondaryCtaDisabled}
        >
          {secondaryCtaText}
        </Button>
      ) : null}
      {dangerCtaText ? (
        <Button
          onClick={onDangerCtaClick}
          color="danger"
          className="shrink-0"
          disabled={isDangerCtaDisabled}
        >
          {dangerCtaText}
        </Button>
      ) : null}
    </div>
  );
}

function initBannerChunk(): void {}

export { Banner, initBannerChunk };
