// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Layered paper-plane send glyph: a filled plane drawn over a contrasting outline.
import type { SVGProps } from "react";
import clsx from "clsx";

function PaperPlaneOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M12.725 20.288c-.367.716-.842 1.166-1.425 1.35-.583.191-1.15.12-1.7-.213-.55-.325-.954-.846-1.213-1.563L3.787 6.95c-.175-.492-.216-.958-.124-1.4.091-.45.291-.83.6-1.137a2.187 2.187 0 0 1 1.137-.6c.45-.092.92-.05 1.412.125l12.913 4.6c.717.258 1.237.662 1.563 1.212.333.542.404 1.104.212 1.688-.183.583-.633 1.058-1.35 1.425l-4.925 2.512-2.5 4.913Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PaperPlaneFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12.725 20.288c-.367.716-.842 1.166-1.425 1.35-.583.191-1.15.12-1.7-.213-.55-.325-.954-.846-1.213-1.563L3.787 6.95c-.175-.492-.216-.958-.124-1.4.091-.45.291-.83.6-1.137a2.187 2.187 0 0 1 1.137-.6c.45-.092.92-.05 1.412.125l12.913 4.6c.717.258 1.237.662 1.563 1.212.333.542.404 1.104.212 1.688-.183.583-.633 1.058-1.35 1.425l-4.925 2.512-2.5 4.913Z"
      />
    </svg>
  );
}

export type PaperPlaneSendIconProps = {
  className?: string;
};

export function PaperPlaneSendIcon({ className }: PaperPlaneSendIconProps) {
  return (
    <span
      aria-hidden="true"
      className={clsx("relative flex items-center justify-center", className)}
    >
      <PaperPlaneOutline
        className="absolute inset-0 size-full"
        style={{ color: "var(--color-token-main-surface-primary)" }}
      />
      <PaperPlaneFilled className="absolute inset-0 size-full text-token-text-primary" />
    </span>
  );
}
