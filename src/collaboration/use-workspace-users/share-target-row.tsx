// Restored from ref/webview/assets/use-workspace-users-BuMotENr.js
// Shared row presentation for users and groups in sharing dialogs.
import type { ReactNode } from "react";
type ShareTargetRowProps = {
  avatarLabel?: string;
  label: string;
  secondaryLabel?: ReactNode;
  trailingContent?: ReactNode;
};
function ShareTargetRow({
  label,
  avatarLabel,
  secondaryLabel,
  trailingContent,
}: ShareTargetRowProps) {
  const initials = getInitials(avatarLabel === undefined ? label : avatarLabel);
  const secondaryLabelNode =
    secondaryLabel == null ? null : (
      <div className="truncate text-sm text-token-description-foreground">
        {secondaryLabel}
      </div>
    );
  return (
    <div className="flex items-center gap-3">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-token-foreground/10 text-sm font-medium text-token-foreground">
        {initials}
      </span>
      <div className="min-w-0 flex-1">
        <div className="truncate text-base">{label}</div>
        {secondaryLabelNode}
      </div>
      {trailingContent}
    </div>
  );
}
function getInitials(label: string): string {
  return label
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
export { ShareTargetRow };
