// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Fixed, pointer-events-none overlay that stacks the currently active toast
// notifications at the top-center of the viewport.

import {
  activeToastIdsAtom,
  ToastNotification,
  useAppScopeValue,
} from "../boundaries/onboarding-commons-externals.facade";

export function ToastOverlay() {
  const toastIds = useAppScopeValue<string[]>(activeToastIdsAtom) ?? [];
  return (
    <span className="pointer-events-none fixed inset-0 z-[60] mx-auto my-2 flex max-w-[560px] flex-col items-center justify-start md:pb-5">
      {toastIds.map((toastId) => (
        <ToastNotification key={toastId} toastId={toastId} />
      ))}
    </span>
  );
}
