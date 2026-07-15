// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Small visual primitives for the browser sidebar comment overlay.

import React, { type Ref } from "react";
import clsx from "clsx";
import { FormattedMessage } from "../vendor/react-intl";
import { KeyboardShortcutHint } from "../boundaries/onboarding-commons-externals.facade";
import { COMMENT_SURFACE_STYLE_VARS } from "./browser-comment-overlay-constants";

type CommentOverlaySurfaceProps = React.HTMLAttributes<HTMLDivElement> & {
  ref?: Ref<HTMLDivElement>;
};

export function CommentOverlaySurface({
  className,
  style,
  ref,
  ...rest
}: CommentOverlaySurfaceProps) {
  return (
    <div
      {...rest}
      ref={ref}
      className={clsx(
        "pointer-events-auto overflow-hidden rounded-[22px] bg-token-dropdown-background shadow-md ring-1 ring-token-border-light transition-[height,width,opacity] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none",
        className,
      )}
      style={{ ...COMMENT_SURFACE_STYLE_VARS, ...style }}
    />
  );
}

type ShortcutTooltipRowProps = {
  children: React.ReactNode;
  keysLabel: string;
};

export function ShortcutTooltipRow({
  children,
  keysLabel,
}: ShortcutTooltipRowProps) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-token-foreground">{children}</span>
      <KeyboardShortcutHint keysLabel={keysLabel} />
    </div>
  );
}

export function AddTooltipLabel() {
  return (
    <FormattedMessage
      id="browserSidebarCommentOverlay.add.tooltip"
      defaultMessage="Add"
      description="Action label shown in the browser comment submit tooltip for saving a pending comment"
    />
  );
}

export function SendTooltipLabel() {
  return (
    <FormattedMessage
      id="browserSidebarCommentOverlay.send.tooltip"
      defaultMessage="Send"
      description="Action label shown in the browser comment submit tooltip for sending a comment"
    />
  );
}

export function DesignAdjustIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.9165 11.0012C9.43621 11.0012 10.7056 12.0728 11.0112 13.5012H16.6665L16.8013 13.5149C17.104 13.577 17.3314 13.8452 17.3315 14.1663C17.3315 14.4874 17.1041 14.7554 16.8013 14.8176L16.6665 14.8313H11.0112C10.7058 16.2601 9.43643 17.3313 7.9165 17.3313C6.39667 17.3311 5.12714 16.26 4.82178 14.8313H3.3335C2.96623 14.8313 2.66846 14.5335 2.66846 14.1663C2.66863 13.7991 2.96634 13.5012 3.3335 13.5012H4.82178C5.12738 12.0728 6.3969 11.0014 7.9165 11.0012ZM7.9165 12.3313C6.90332 12.3315 6.08172 13.1531 6.08154 14.1663C6.08154 15.1796 6.90321 16.001 7.9165 16.0012C8.92995 16.0012 9.75146 15.1797 9.75146 14.1663C9.75129 13.153 8.92984 12.3313 7.9165 12.3313ZM12.0835 2.66821C13.6033 2.66821 14.8727 3.73958 15.1782 5.16821H16.6665L16.8013 5.18188C17.1041 5.24406 17.3315 5.51204 17.3315 5.83325C17.3315 6.15446 17.1041 6.42245 16.8013 6.48462L16.6665 6.49829H15.1782C14.8727 7.92693 13.6033 8.99829 12.0835 8.99829C10.5637 8.99829 9.2943 7.92693 8.98877 6.49829H3.3335C2.96623 6.49829 2.66846 6.20052 2.66846 5.83325C2.66846 5.46598 2.96623 5.16821 3.3335 5.16821H8.98877C9.2943 3.73958 10.5637 2.66821 12.0835 2.66821ZM12.0835 3.99829C11.0701 3.99829 10.2485 4.81981 10.2485 5.83325C10.2485 6.84669 11.0701 7.66821 12.0835 7.66821C13.0969 7.66821 13.9185 6.84669 13.9185 5.83325C13.9185 4.81981 13.0969 3.99829 12.0835 3.99829Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CommentDeleteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10.6299 1.33496C12.0335 1.33496 13.2695 2.25996 13.666 3.60645L13.8809 4.33496H17L17.1338 4.34863C17.4369 4.41057 17.665 4.67858 17.665 5C17.665 5.32142 17.4369 5.58943 17.1338 5.65137L17 5.66504H16.6543L15.8574 14.9912C15.7177 16.629 14.3478 17.8877 12.7041 17.8877H7.2959C5.75502 17.8877 4.45439 16.7815 4.18262 15.2939L4.14258 14.9912L3.34668 5.66504H3C2.63273 5.66504 2.33496 5.36727 2.33496 5C2.33496 4.63273 2.63273 4.33496 3 4.33496H6.11914L6.33398 3.60645L6.41797 3.3584C6.88565 2.14747 8.05427 1.33496 9.37012 1.33496H10.6299ZM5.46777 14.8779L5.49121 15.0537C5.64881 15.9161 6.40256 16.5576 7.2959 16.5576H12.7041C13.6571 16.5576 14.4512 15.8275 14.5322 14.8779L15.3193 5.66504H4.68164L5.46777 14.8779ZM7.66797 12.8271V8.66016C7.66797 8.29299 7.96588 7.99528 8.33301 7.99512C8.70028 7.99512 8.99805 8.29289 8.99805 8.66016V12.8271C8.99779 13.1942 8.70012 13.4912 8.33301 13.4912C7.96604 13.491 7.66823 13.1941 7.66797 12.8271ZM11.002 12.8271V8.66016C11.002 8.29289 11.2997 7.99512 11.667 7.99512C12.0341 7.9953 12.332 8.293 12.332 8.66016V12.8271C12.3318 13.1941 12.0339 13.491 11.667 13.4912C11.2999 13.4912 11.0022 13.1942 11.002 12.8271ZM9.37012 2.66504C8.60726 2.66504 7.92938 3.13589 7.6582 3.83789L7.60938 3.98145L7.50586 4.33496H12.4941L12.3906 3.98145C12.1607 3.20084 11.4437 2.66504 10.6299 2.66504H9.37012Z" />
    </svg>
  );
}
