// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Subagent inline activity summary messages and deterministic avatar icon set.
import React, { type SVGProps } from "react";

import { defineMessages, type IntlShape } from "../vendor/react-intl";

const subagentActivityMessages = defineMessages({
  groupStartedWorking: {
    id: "localConversation.subagentActivity.group.startedWorking",
    defaultMessage: "started working",
    description:
      "Shared status shown after subagent chips when subagents start working",
  },
  groupUpdated: {
    id: "localConversation.subagentActivity.group.updated",
    defaultMessage: "updated",
    description:
      "Shared status shown after subagent chips when subagents report an update",
  },
  groupInterrupted: {
    id: "localConversation.subagentActivity.group.interrupted",
    defaultMessage: "interrupted",
    description:
      "Shared status shown after subagent chips when subagent work is interrupted",
  },
  groupFinished: {
    id: "localConversation.subagentActivity.group.finished",
    defaultMessage: "finished",
    description: "Shared status shown after subagent chips when all subagents finish",
  },
});

export function summarizeSubagentActivityStatus(
  intl: IntlShape,
  statuses: readonly string[],
): string {
  if (statuses.some((status) => status === "interrupted")) {
    return intl.formatMessage(subagentActivityMessages.groupInterrupted);
  }
  if (statuses.some((status) => status === "updated")) {
    return intl.formatMessage(subagentActivityMessages.groupUpdated);
  }
  if (statuses.length > 0 && statuses.every((status) => status === "done")) {
    return intl.formatMessage(subagentActivityMessages.groupFinished);
  }
  return intl.formatMessage(subagentActivityMessages.groupStartedWorking);
}

export const subagentAvatarIcons = [
  SubagentAvatarIconOne,
  SubagentAvatarIconTwo,
  SubagentAvatarIconThree,
  SubagentAvatarIconFour,
] as const;

function SubagentAvatarIconOne(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseSubagentAvatarIcon
      accent="#f9a0a1"
      glyph="spark"
      shadow="#7d2a3a"
      {...props}
    />
  );
}

function SubagentAvatarIconTwo(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseSubagentAvatarIcon
      accent="#7fecd5"
      glyph="nodes"
      shadow="#0b6b68"
      {...props}
    />
  );
}

function SubagentAvatarIconThree(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseSubagentAvatarIcon
      accent="#c7a4ff"
      glyph="ring"
      shadow="#563b8f"
      {...props}
    />
  );
}

function SubagentAvatarIconFour(props: SVGProps<SVGSVGElement>) {
  return (
    <BaseSubagentAvatarIcon
      accent="#ffd36e"
      glyph="bolt"
      shadow="#8a5a0b"
      {...props}
    />
  );
}

function BaseSubagentAvatarIcon({
  accent,
  glyph,
  shadow,
  ...props
}: SVGProps<SVGSVGElement> & {
  accent: string;
  glyph: "bolt" | "nodes" | "ring" | "spark";
  shadow: string;
}) {
  return (
    <svg
      fill="none"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.318 1.99a5.532 5.532 0 0 1 5.05 1.16 5.535 5.535 0 0 1 6.48 6.478 5.533 5.533 0 0 1-2.372 8.85 5.53 5.53 0 0 1-8.848 2.372 5.536 5.536 0 0 1-6.48-6.48A5.535 5.535 0 0 1 5.52 5.52a5.534 5.534 0 0 1 3.797-3.53Z"
        fill={accent}
      />
      <path
        d="M9.318 1.99a5.532 5.532 0 0 1 5.05 1.16 5.535 5.535 0 0 1 6.48 6.478 5.533 5.533 0 0 1-2.372 8.85 5.53 5.53 0 0 1-8.848 2.372 5.536 5.536 0 0 1-6.48-6.48A5.535 5.535 0 0 1 5.52 5.52a5.534 5.534 0 0 1 3.797-3.53Z"
        fill="#fff"
        opacity={0.18}
      />
      {glyph === "spark" ? (
        <path
          d="M12 5.75 13.35 10 17.6 12 13.35 14 12 18.25 10.65 14 6.4 12 10.65 10 12 5.75Z"
          fill={shadow}
        />
      ) : null}
      {glyph === "nodes" ? (
        <path
          d="M8.2 9.1a1.6 1.6 0 1 1 1.2 2.95l3.05 2.05a1.6 1.6 0 1 1-.6 1.05L8.8 13.1a1.6 1.6 0 1 1-.6-4Zm6.6-.7a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2Z"
          fill={shadow}
        />
      ) : null}
      {glyph === "ring" ? (
        <path
          d="M12 6.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2.15a3.35 3.35 0 1 0 0 6.7 3.35 3.35 0 0 0 0-6.7Z"
          fill={shadow}
        />
      ) : null}
      {glyph === "bolt" ? (
        <path
          d="M13.25 5.7 7.8 12.6h3.1l-.55 5.7 5.85-7.45h-3.35l.4-5.15Z"
          fill={shadow}
        />
      ) : null}
    </svg>
  );
}
