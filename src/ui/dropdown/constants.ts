// Restored from ref/webview/assets/dropdown-CTBRoADH.js
// dropdown-CTBRoADH chunk restored from the Codex webview bundle.
export const dropdownAnimationClasses = {
  content: "_content_1hiti_1",
  contentWithFadeExitAnimation: "_contentWithFadeExitAnimation_1hiti_40",
  contentWithoutExitAnimation: "_contentWithoutExitAnimation_1hiti_45",
  parentBottomAlignedContent: "_parentBottomAlignedContent_1hiti_83",
};
export const contentViewportStyle = {
  maxWidth:
    "min(var(--radix-dropdown-menu-content-available-width), calc(100vw - 16px))",
  maxHeight:
    "min(var(--radix-dropdown-menu-content-available-height), calc(100vh - 16px))",
};
export const parentBottomAlignedContentStyle = {
  ...contentViewportStyle,
  maxHeight: "calc(100vh - 16px)",
};
export const dropdownItemClasses = {
  content: "flex w-full items-center gap-1.5",
  contentWithIconAndSubText: "flex w-full items-center gap-3",
  icon: "shrink-0 opacity-75 group-focus:opacity-100 group-hover:opacity-100",
  itemBase:
    "text-token-foreground outline-hidden rounded-lg px-[var(--padding-row-x)] py-[var(--padding-row-y)] text-sm",
  itemInteractive:
    "group hover:bg-token-list-hover-background focus:bg-token-list-hover-background cursor-interaction",
};
export const dropdownMessageClasses = {
  messageBase: "px-[var(--padding-row-x)] text-sm",
  sectionLabel:
    "px-[var(--padding-row-x)] py-1 text-sm text-token-description-foreground",
};
export const iconSizeClasses = {
  xs: "icon-xs",
  sm: "icon-sm",
  md: "icon-md",
};
