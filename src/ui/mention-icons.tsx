// Restored from ref/webview/assets/mention-icons-B52KM14d.js
// mention-icons-B52KM14d chunk restored from the Codex webview bundle.
import type { ComponentType, SVGProps } from "react";
import { SkillsIcon } from "../icons/skills-icon";
import { FILE_ICON_COMPONENTS, getFileIconKey } from "../utils/get-file-icon";
type MentionFileIconRequest = {
  path: string;
  matchType?: string | null;
};
type MentionIconComponent = ComponentType<SVGProps<SVGSVGElement>>;
function getSkillsMentionIcon(): MentionIconComponent {
  return SkillsIcon;
}
function resolveMentionFileIcon({
  path,
  matchType,
}: MentionFileIconRequest): MentionIconComponent {
  return matchType === "directory"
    ? FILE_ICON_COMPONENTS.folder
    : FILE_ICON_COMPONENTS[getFileIconKey(path)];
}
export { getSkillsMentionIcon, resolveMentionFileIcon };
