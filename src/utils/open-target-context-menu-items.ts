// Restored from ref/webview/assets/open-target-context-menu-items-ClwD6vw2.js
// Builds context-menu items for opening a resource in another target app.

type OpenTarget = {
  id: string;
  label: string;
  target: string;
  appPath?: string;
  icon?: unknown;
};

type OpenTargetMessages = {
  openInTarget: unknown;
  openIn: unknown;
  openInTargetSubmenu: unknown;
};

type OpenTargetContextMenuOptions = {
  idPrefix: string;
  messages: OpenTargetMessages;
  onOpenInTarget: (target: string, appPath?: string) => void;
  primaryTarget: OpenTarget | null | undefined;
  visibleTargets: OpenTarget[];
};

type ContextMenuItem = {
  id: string;
  message: unknown;
  messageValues?: { target: string };
  icon?: unknown;
  onSelect?: () => void;
  submenu?: ContextMenuItem[];
};

export function openTargetContextMenuItems({
  idPrefix,
  messages,
  onOpenInTarget,
  primaryTarget,
  visibleTargets,
}: OpenTargetContextMenuOptions): ContextMenuItem[] {
  return primaryTarget == null
    ? []
    : [
        {
          id: `${idPrefix}-primary`,
          message: messages.openInTarget,
          messageValues: {
            target: primaryTarget.label,
          },
          icon: primaryTarget.icon,
          onSelect: () =>
            onOpenInTarget(primaryTarget.target, primaryTarget.appPath),
        },
        {
          id: `${idPrefix}-targets`,
          message: messages.openIn,
          submenu: visibleTargets.map((item) => ({
            id: `${idPrefix}-target-${item.id}`,
            message: messages.openInTargetSubmenu,
            messageValues: {
              target: item.label,
            },
            icon: item.icon,
            onSelect: () => onOpenInTarget(item.target, item.appPath),
          })),
        },
      ];
}
