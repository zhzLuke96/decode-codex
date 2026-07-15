// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~edtlcz4n-Ra05UQ4S.js
// Current app-main referral invite modal aliases and small icon helpers.
import type { SVGProps } from "react";

export { ReferralInviteModalIcon } from "./index";

export function formatReferralDisplayName(
  fallbackName: string | null | undefined,
  preferredName: string | null | undefined,
): string | null {
  if (preferredName != null && preferredName.trim().length > 0) {
    return trimReferralDisplayName(preferredName);
  }

  if (fallbackName == null) return null;
  const normalizedFallback = fallbackName.trim();
  if (normalizedFallback.length === 0) return null;

  const pathParts = normalizedFallback.split(/[/\\]+/).filter(Boolean);
  return trimReferralDisplayName(
    pathParts[pathParts.length - 1] ?? normalizedFallback,
  );
}

function trimReferralDisplayName(value: string): string {
  const words = value.trim().split(/\s+/).filter(Boolean);
  return words.length <= 3 ? value.trim() : words.slice(0, 3).join(" ");
}

export function ReferralInviteHelpIcon(
  iconProps: SVGProps<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      fill="none"
      height={20}
      viewBox="0 0 20 20"
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      {...iconProps}
    >
      <path
        d="M16.585 10A6.585 6.585 0 1 0 3.415 10a6.585 6.585 0 0 0 13.17 0ZM17.915 10A7.915 7.915 0 1 1 2.085 10a7.915 7.915 0 0 1 15.83 0Z"
        fill="currentColor"
      />
      <path
        d="M9.817 11.596c-.459 0-.729-.313-.729-.756v-.076c0-.637.33-1.058.967-1.431.697-.416.907-.686.907-1.183 0-.53-.41-.897-1.004-.897-.53 0-.886.259-1.059.74-.135.346-.378.497-.708.497-.426 0-.691-.265-.691-.675 0-.232.054-.438.162-.643C8.008 6.459 8.872 6 10.033 6c1.535 0 2.566.843 2.566 2.101 0 .816-.394 1.372-1.156 1.821-.718.416-.88.648-.95 1.102-.082.361-.292.572-.676.572ZM9.828 14c-.486 0-.88-.373-.88-.848s.394-.848.88-.848c.492 0 .886.373.886.848S10.32 14 9.828 14Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ReferralInviteCheckIcon(
  iconProps: SVGProps<SVGSVGElement>,
): JSX.Element {
  return (
    <svg
      fill="currentColor"
      height={10}
      viewBox="0 0 10 10"
      width={10}
      xmlns="http://www.w3.org/2000/svg"
      {...iconProps}
    >
      <path
        clipRule="evenodd"
        d="M8.467 1.741a.417.417 0 0 1 .104.58L4.508 8.155a.625.625 0 0 1-.968.057L1.476 5.815a.417.417 0 1 1 .589-.589l2.044 2.044 3.778-5.425a.417.417 0 0 1 .58-.104Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function initReferralInviteHelpIconChunk(): void {}

export function initReferralInviteCheckIconChunk(): void {}

export function initReferralInviteModalCurrentChunk(): void {}

export function initReferralInviteAssetUrlsChunk(): void {}
