// Restored from ref/webview/assets/thread-app-shell-chrome-D7ImdiWZ.js
// Local panel icons used by the thread app-shell chrome controls.
import type { ReactNode } from "react";
import type { IconProps } from "./types";

interface BaseIconProps extends IconProps {
  children: ReactNode;
}

function SvgIcon({ children, ...props }: BaseIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
}

export function BottomPanelClosedIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 3.086H5A3.165 3.165 0 0 0 1.835 6.251v7.5A3.165 3.165 0 0 0 5 16.916h10a3.165 3.165 0 0 0 3.165-3.165v-7.5A3.165 3.165 0 0 0 15 3.086ZM3.165 6.251c0-1.013.822-1.835 1.835-1.835h10c1.013 0 1.835.822 1.835 1.835v7.5A1.835 1.835 0 0 1 15 15.586H5a1.835 1.835 0 0 1-1.835-1.835v-7.5Z"
      />
      <path fill="currentColor" d="M3.165 12.253h13.67v1.33H3.165z" />
    </SvgIcon>
  );
}

export function BottomPanelOpenIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 3.086H5A3.165 3.165 0 0 0 1.835 6.251v7.5A3.165 3.165 0 0 0 5 16.916h10a3.165 3.165 0 0 0 3.165-3.165v-7.5A3.165 3.165 0 0 0 15 3.086ZM3.165 6.251c0-1.013.822-1.835 1.835-1.835h10c1.013 0 1.835.822 1.835 1.835v7.5A1.835 1.835 0 0 1 15 15.586H5a1.835 1.835 0 0 1-1.835-1.835v-7.5Z"
      />
      <path fill="currentColor" d="M3.165 6.417h13.67v1.33H3.165z" />
    </SvgIcon>
  );
}

export function SidePanelIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 3.25h11A2.25 2.25 0 0 1 17.75 5.5v9A2.25 2.25 0 0 1 15.5 16.75h-11A2.25 2.25 0 0 1 2.25 14.5v-9A2.25 2.25 0 0 1 4.5 3.25Zm0 1.5a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h7.25V4.75H4.5Zm8.75 10.5h2.25a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75h-2.25v10.5Z"
      />
    </SvgIcon>
  );
}

export function FilePanelIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path
        fill="currentColor"
        d="M4 3.5A1.5 1.5 0 0 1 5.5 2h5.086a2 2 0 0 1 1.414.586L16.414 7A2 2 0 0 1 17 8.414V16.5A1.5 1.5 0 0 1 15.5 18h-10A1.5 1.5 0 0 1 4 16.5v-13Zm7 0V8h4.5L11 3.5Z"
      />
    </SvgIcon>
  );
}

export function BrowserPanelIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2.25a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5Zm0 1.5c.82 0 1.61.154 2.336.435-.39.176-.873.311-1.44.388a10.45 10.45 0 0 1-1.792 0c-.567-.077-1.05-.212-1.44-.388A6.22 6.22 0 0 1 10 3.75Zm-4.87 3.5a6.233 6.233 0 0 1 1.18-1.625c.638.254 1.5.416 2.594.416h2.192c1.094 0 1.956-.162 2.594-.416.49.47.89 1.02 1.18 1.625H5.13Zm-.833 1.5a6.28 6.28 0 0 0 0 2.5h11.406a6.28 6.28 0 0 0 0-2.5H4.297Zm.833 4a6.232 6.232 0 0 0 1.18 1.625c.638-.254 1.5-.416 2.594-.416h2.192c1.094 0 1.956.162 2.594.416.49-.47.89-1.02 1.18-1.625H5.13Zm2.534 3.065A6.22 6.22 0 0 0 10 16.25c.82 0 1.61-.154 2.336-.435-.39-.176-.873-.311-1.44-.388a10.45 10.45 0 0 0-1.792 0c-.567.077-1.05.212-1.44.388Z"
      />
    </SvgIcon>
  );
}

export function ReviewPanelIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path
        fill="currentColor"
        d="M4.75 3.5A1.75 1.75 0 0 0 3 5.25v9.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 17 14.75v-9.5a1.75 1.75 0 0 0-1.75-1.75H4.75Zm1 4h8.5V9h-8.5V7.5Zm0 3h5.5V12h-5.5v-1.5Z"
      />
    </SvgIcon>
  );
}

export function TimelinePanelIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path
        fill="currentColor"
        d="M10 2.5a7.5 7.5 0 1 0 7.5 7.5H16a6 6 0 1 1-1.757-4.243L12.5 7.5h5v-5l-2.2 2.2A7.477 7.477 0 0 0 10 2.5Zm.75 3.5h-1.5v4.25l3.25 2 .75-1.299-2.5-1.451V6Z"
      />
    </SvgIcon>
  );
}

export function TerminalPanelIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path
        fill="currentColor"
        d="M3.75 4.5A1.75 1.75 0 0 0 2 6.25v7.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0 0 18 13.75v-7.5a1.75 1.75 0 0 0-1.75-1.75H3.75Zm2.03 3.47 2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5-1.06-1.06L6.69 11 4.72 9.03l1.06-1.06ZM9.5 12.75h4.75v1.5H9.5v-1.5Z"
      />
    </SvgIcon>
  );
}

export function SideChatPanelIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path
        fill="currentColor"
        d="M4.25 3A2.25 2.25 0 0 0 2 5.25v6.5A2.25 2.25 0 0 0 4.25 14H5v2.25a.75.75 0 0 0 1.22.586L9.765 14h5.985A2.25 2.25 0 0 0 18 11.75v-6.5A2.25 2.25 0 0 0 15.75 3H4.25Z"
      />
    </SvgIcon>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path
        fill="currentColor"
        d="M10.75 4.5h-1.5v4.75H4.5v1.5h4.75v4.75h1.5v-4.75h4.75v-1.5h-4.75V4.5Z"
      />
    </SvgIcon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path
        fill="currentColor"
        d="m5.53 4.47 4.47 4.47 4.47-4.47 1.06 1.06L11.06 10l4.47 4.47-1.06 1.06L10 11.06l-4.47 4.47-1.06-1.06L8.94 10 4.47 5.53l1.06-1.06Z"
      />
    </SvgIcon>
  );
}

export function AppArtifactIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path
        fill="currentColor"
        d="M4.5 3h4v4h-4V3Zm7 0h4v4h-4V3Zm-7 6.5h4v4h-4v-4Zm7 0h4v4h-4v-4ZM4.5 15h11v1.5h-11V15Z"
      />
    </SvgIcon>
  );
}
