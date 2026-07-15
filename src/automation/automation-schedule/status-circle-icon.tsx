// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~projects-i~easvi6ps-Cs84X9Ip.js
// Small currentColor status marker used by automation lists.

import type { SVGProps } from "react";
import { once } from "../../runtime/commonjs-interop";

export type AutomationStatusCircleIconProps = SVGProps<SVGSVGElement>;

export function AutomationStatusCircleIcon(
  props: AutomationStatusCircleIconProps,
) {
  return (
    <svg
      width={8}
      height={8}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={4} cy={4} r={4} fill="currentColor" />
    </svg>
  );
}

export const initAutomationStatusCircleIconChunk = once(() => {});
