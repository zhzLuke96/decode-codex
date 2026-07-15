// Restored from ref/webview/assets/connector-logo-stack-DsdN9EQl.js
// Stacks connector logo children in overlapping bordered squares.
import { Children, type ReactNode } from "react";
import clsx from "clsx";
import { once } from "../runtime/commonjs-interop";

const connectorLogoStackSizeClassNames = {
  small: "-ml-1 size-5",
  medium: "-ml-1.5 size-6",
} as const;

export type ConnectorLogoStackSize =
  keyof typeof connectorLogoStackSizeClassNames;

export interface ConnectorLogoStackProps {
  ariaLabel?: string;
  children?: ReactNode;
  size?: ConnectorLogoStackSize;
}

export const initConnectorLogoStackChunk = once(() => {});

export function ConnectorLogoStack({
  ariaLabel,
  children,
  size = "small",
}: ConnectorLogoStackProps): ReactNode {
  const logoChildren = Children.toArray(children);
  if (logoChildren.length === 0) {
    return null;
  }

  return (
    <span
      aria-hidden={ariaLabel == null ? true : undefined}
      aria-label={ariaLabel}
      className="flex shrink-0 items-center"
      role={ariaLabel == null ? undefined : "img"}
    >
      {Children.map(logoChildren, (logoChild) => (
        <span
          className={clsx(
            "flex items-center justify-center overflow-hidden rounded-md border border-token-border-default bg-token-main-surface-primary first:ml-0",
            connectorLogoStackSizeClassNames[size],
          )}
        >
          {logoChild}
        </span>
      ))}
    </span>
  );
}
