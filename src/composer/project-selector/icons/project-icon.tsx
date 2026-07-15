// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~hotkey-window-new-thread-page~hotkey-window-home-p~hswrsggc-D-_P9low.js
// Local and remote project glyph for composer project selector controls.

import type { ProjectSelectorIconProps } from "./types";

export interface ProjectIconProps extends ProjectSelectorIconProps {
  isRemoteProject?: boolean;
}

export function ProjectIcon({
  isRemoteProject = false,
  ...svgProps
}: ProjectIconProps) {
  if (isRemoteProject) {
    return (
      <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgProps}
      >
        <path
          d="M3.5 5.25h5.25a1.5 1.5 0 0 1 1.5 1.5v4.75A1.5 1.5 0 0 1 8.75 13H3.5A1.5 1.5 0 0 1 2 11.5V6.75a1.5 1.5 0 0 1 1.5-1.5Z"
          stroke="currentColor"
          strokeWidth={1.2}
        />
        <path
          d="M10.25 7h1.25A1.5 1.5 0 0 1 13 8.5v4.25a1.5 1.5 0 0 1-1.5 1.5H6.25a1.5 1.5 0 0 1-1.5-1.5V13"
          stroke="currentColor"
          strokeWidth={1.2}
        />
        <path
          d="M4.25 3.25h3.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={1.2}
        />
      </svg>
    );
  }

  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M2.25 5.25c0-.83.67-1.5 1.5-1.5h3.42c.4 0 .78.16 1.06.44l.74.74c.28.28.66.44 1.06.44h2.22c.83 0 1.5.67 1.5 1.5v4.88c0 .83-.67 1.5-1.5 1.5h-8.5c-.83 0-1.5-.67-1.5-1.5v-6.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.2}
      />
    </svg>
  );
}

export function initProjectIconChunk() {}

export default ProjectIcon;
