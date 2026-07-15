// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Render a git branch name that keeps a fixed-width suffix visible while
// middle-truncating the leading portion when the name is too long.

export interface BranchNameMiddleTruncationProps {
  branchName: string;
  suffixCharacterCount: number;
}

export function BranchNameMiddleTruncation({
  branchName,
  suffixCharacterCount,
}: BranchNameMiddleTruncationProps) {
  if (branchName.length <= suffixCharacterCount) {
    return (
      <span
        data-tooltip-overflow-target={true}
        className="block min-w-0 truncate"
      >
        {branchName}
      </span>
    );
  }

  const splitIndex = branchName.length - suffixCharacterCount;
  const leading = branchName.slice(0, splitIndex);
  const suffix = branchName.slice(splitIndex);

  return (
    <span className="flex min-w-0 overflow-hidden">
      <span data-tooltip-overflow-target={true} className="min-w-0 truncate">
        {leading}
      </span>
      <span className="shrink-0">{suffix}</span>
    </span>
  );
}
