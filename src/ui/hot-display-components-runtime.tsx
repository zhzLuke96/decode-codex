// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// Small display components used through the onboarding commons facade.
import React from "react";
import { GlobeIcon } from "../icons/globe-icon";
import { FormattedNumber } from "../vendor/react-intl";

export function FormattedCount({ value }: { value: number }) {
  return <FormattedNumber value={value} />;
}

export function TruncatedBranchName({
  branchName,
  suffixCharacterCount = 18,
}: {
  branchName: string;
  suffixCharacterCount?: number;
}) {
  return <>{truncateBranchName(branchName, suffixCharacterCount)}</>;
}

export function WebSearchIcon(props: React.ComponentProps<typeof GlobeIcon>) {
  return <GlobeIcon {...props} />;
}

export function truncateBranchName(
  branchName: string,
  suffixCharacterCount: number,
): string {
  const maxLength = Math.max(24, suffixCharacterCount + 12);
  if (branchName.length <= maxLength) return branchName;
  const suffix = branchName.slice(-suffixCharacterCount);
  const prefixLength = Math.max(1, maxLength - suffix.length - 3);
  return `${branchName.slice(0, prefixLength)}...${suffix}`;
}
