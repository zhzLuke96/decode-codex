// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js

import { classNames } from "../../../utils/class-names";
import {
  LinkArrowIcon,
  openFileInEditor,
  useHostRequest,
} from "../../../boundaries/onboarding-commons-externals.facade";
import type { PatchPathGroupProps } from "./types";

export function PatchPathGroup({
  toneClassName,
  heading,
  paths,
  cwd,
  hostId,
}: PatchPathGroupProps) {
  const openFile = useHostRequest("open-file");
  if (paths.length === 0) return null;
  return (
    <div className="flex flex-col gap-1">
      <div className={classNames("text-sm font-medium", toneClassName)}>
        {heading}
      </div>
      <ul className="flex flex-col gap-0.5 text-sm">
        {paths.map((path) => (
          <li key={path}>
            <button
              type="button"
              className="group w-full cursor-interaction rounded px-1 py-0.5 text-left focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none"
              title={path}
              onClick={() => {
                openFileInEditor({
                  path,
                  cwd,
                  hostId,
                  openFile: openFile.mutate,
                });
              }}
            >
              <span className="flex items-center gap-1">
                <span className="group-hover:text-token-link-foreground group-focus-visible:text-token-link-foreground min-w-0 truncate transition-colors">
                  {path}
                </span>
                <LinkArrowIcon className="text-token-link-foreground icon-2xs hidden shrink-0 group-hover:block group-focus-visible:block" />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
