// Restored from ref/webview/assets/thread-user-message-navigation-rail-Mi2GE36I.js
// Also covers ref/webview/assets/thread-user-message-navigation-rail-DwC5A8DL.js.
// Semantic implementation for thread user-message navigation tooltip previews.
import React from "react";
import { FormattedMessage } from "../../vendor/react-intl";
import { ClockIcon } from "../../icons/clock-icon";
import { AppsIcon } from "../../icons/apps-icon";
import { GoogleDriveIcon } from "../../icons/google-drive-icon";
import { CommitIcon } from "../../icons/commit-icon";
import { PullRequestIcon } from "../../icons/pull-request-icon";
import { ImagesIcon } from "../../icons/images-icon";
import { GlobeIcon } from "../../icons/globe-icon";
import { ExternalLinkFavicon } from "../../utils/external-link-favicon";
import { getKnownAppIconByName } from "../../icons/known-app-icon";
import { getFileIcon } from "../../utils/get-file-icon";
import { getSkillsMentionIcon } from "../../ui/mention-icons";
import { InlineMentionContent } from "../../utils/inline-mention-content";
import { markdownToSearchText } from "../../utils/markdown-to-search-text";
import {
  parseDirectivesA,
  parseDirectivesG,
  parseDirectivesN,
  parseDirectivesU,
  parseDirectivesUnderscore,
} from "../../utils/parse-directives";
import {
  isAppMentionHref,
  isPluginMentionHref,
  stripMentionTriggerSyntax,
} from "../../composer/mention-item";
import { externalLinkSource } from "../../utils/external-link-source";
import { normalizeRichLinkHref } from "../../ui/rich-link-g-oum-tm-pc";
type NavigationRailOutput = {
  label?: string | null;
  type: string;
};
export type NavigationRailItem = {
  getLabel(): string;
  getPreview(): {
    outputs: NavigationRailOutput[];
    response: string;
  };
  hasOutput?: boolean;
  id: string;
  isHeartbeat?: boolean;
};
const ReviewOutputIcon = (
  props: React.SVGProps<SVGSVGElement>,
): React.ReactNode => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.12725 9.17656C9.39819 9.06319 9.7106 9.19089 9.82412 9.46172C9.93751 9.73275 9.80921 10.0444 9.53818 10.1578C8.54869 10.5718 7.63742 10.5982 6.65771 10.2359L6.46084 10.1578L6.36631 10.1062C6.16212 9.96683 6.07651 9.69872 6.17568 9.46172C6.27497 9.22478 6.52602 9.09763 6.76865 9.14531L6.87178 9.17656L7.01865 9.23438C7.74842 9.50658 8.38411 9.4874 9.12725 9.17656Z"
      fill="currentColor"
    />
    <path
      d="M5.66631 5.66719C6.21851 5.66719 6.66618 6.11502 6.66631 6.66719C6.66631 7.21947 6.21859 7.66719 5.66631 7.66719C5.11416 7.66703 4.66631 7.21937 4.66631 6.66719C4.66644 6.11511 5.11424 5.66735 5.66631 5.66719Z"
      fill="currentColor"
    />
    <path
      d="M10.3335 5.66719C10.8856 5.66735 11.3334 6.11511 11.3335 6.66719C11.3335 7.21937 10.8856 7.66703 10.3335 7.66719C9.78121 7.66719 9.3335 7.21947 9.3335 6.66719C9.33363 6.11502 9.78129 5.66719 10.3335 5.66719Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.9999 1.46875C8.29372 1.46875 8.53193 1.70697 8.53193 2.00078V2.46875H10.4671C11.0181 2.46875 11.464 2.46824 11.8241 2.49766C12.1902 2.52761 12.5151 2.59109 12.8163 2.74453L12.9905 2.84219C13.3872 3.08547 13.7101 3.43468 13.9226 3.85156L13.9765 3.96563C14.0918 4.23459 14.1432 4.52333 14.1694 4.84375C14.1912 5.11055 14.1952 5.42422 14.1968 5.79297C14.5926 5.98867 14.8654 6.3958 14.8655 6.86719V7.86719C14.8655 8.3407 14.5899 8.74887 14.1913 8.94375C14.1852 9.3005 14.1746 9.61715 14.1515 9.9C14.1094 10.4152 14.0283 10.8547 13.8569 11.2539L13.7772 11.4227C13.4299 12.1041 12.8885 12.6662 12.2233 13.0391L12.0882 13.1117C11.6443 13.3378 11.1548 13.4378 10.5663 13.4859C9.98384 13.5335 9.258 13.5328 8.3335 13.5328H7.66709C6.74267 13.5328 6.01674 13.5335 5.43428 13.4859C4.91911 13.4438 4.47957 13.362 4.08037 13.1906L3.91162 13.1117C3.18452 12.7412 2.59312 12.1497 2.22256 11.4227C1.99632 10.9786 1.89644 10.4887 1.84834 9.9C1.82523 9.61715 1.81366 9.30051 1.80771 8.94375C1.40945 8.74874 1.13428 8.34045 1.13428 7.86719V6.86719C1.13438 6.3958 1.40723 5.98867 1.80303 5.79297C1.80434 5.42421 1.80857 5.11056 1.83037 4.84375C1.8603 4.47753 1.9238 4.15285 2.07725 3.85156C2.32 3.37519 2.70789 2.98726 3.18428 2.74453C3.4855 2.59117 3.81033 2.52758 4.17646 2.49766C4.53661 2.46825 4.98237 2.46875 5.5335 2.46875H7.46787V2.00078C7.46787 1.70697 7.70609 1.46875 7.9999 1.46875ZM5.5335 3.53281C4.96484 3.53281 4.56996 3.53355 4.26318 3.55859C3.9628 3.58314 3.79347 3.62862 3.66709 3.69297C3.39093 3.83369 3.16642 4.05823 3.02568 4.33438C2.96128 4.46078 2.91587 4.62992 2.89131 4.93047C2.86624 5.23728 2.86553 5.63195 2.86553 6.20078V7.66719C2.86553 8.60929 2.86606 9.28415 2.90928 9.81328C2.952 10.3362 3.03394 10.6701 3.171 10.9391C3.43957 11.4661 3.86815 11.8947 4.39521 12.1633L4.49912 12.2125C4.75035 12.3205 5.06357 12.3876 5.521 12.425C6.05008 12.4682 6.72516 12.4688 7.66709 12.4688H8.3335C9.27554 12.4688 9.95049 12.4682 10.4796 12.425C11.0023 12.3823 11.3364 12.3003 11.6054 12.1633L11.7983 12.0555C12.237 11.7863 12.5946 11.4002 12.8296 10.9391L12.878 10.8352C12.9861 10.5839 13.0539 10.2709 13.0913 9.81328C13.1345 9.28416 13.1351 8.60927 13.1351 7.66719V6.20078C13.1351 5.63197 13.1343 5.23728 13.1093 4.93047C13.0908 4.70493 13.0606 4.55329 13.0194 4.43828L12.9749 4.33438C12.8518 4.09269 12.6642 3.89027 12.4343 3.74922L12.3335 3.69297C12.2072 3.6286 12.0376 3.58317 11.7374 3.55859C11.4307 3.53353 11.0356 3.53281 10.4671 3.53281H5.5335Z"
      fill="currentColor"
    />
  </svg>
);
export function renderNavigationTooltipPreview(props: {
  item: NavigationRailItem;
}): React.ReactNode {
  let { item } = props,
    rawLabel = item.getLabel();
  let previewLabel = rawLabel,
    previewContent;
  {
    let preview = item.getPreview(),
      responseText = markdownToSearchText(parseDirectivesN(preview.response)),
      heartbeatIcon = item.isHeartbeat ? (
        <ClockIcon className="icon-xs shrink-0 text-token-description-foreground" />
      ) : null;
    let titleElement = (
      <span className="min-w-0 truncate">
        {previewLabel.length === 0
          ? React.createElement(FormattedMessage, {
              id: "thread.userMessageNavigation.noContent",
              defaultMessage: "(No content)",
              description:
                "Fallback label for an empty user message in the floating thread navigation tooltip",
            })
          : React.createElement(FormattedNavigationLabel, {
              label: previewLabel,
            })}
      </span>
    );
    let headerElement;
    headerElement = (
      <div className="flex min-w-0 items-center gap-1.5 font-medium">
        {heartbeatIcon}
        {titleElement}
      </div>
    );
    previewContent = (
      <div
        data-thread-user-message-navigation-tooltip-preview={true}
        className="w-80 max-w-[calc(100vw-1rem)] overflow-hidden rounded-xl bg-token-dropdown-background/95 p-2 text-sm leading-5 text-token-foreground shadow-xl-spread ring-[0.5px] ring-token-border backdrop-blur-sm"
      >
        {headerElement}
        {responseText.length > 0 ? (
          <div className="mt-1 line-clamp-3 text-token-description-foreground">
            {responseText}
          </div>
        ) : null}
        {preview.outputs.length > 0 ? (
          <div className="mt-2 flex min-w-0 items-center gap-3 text-token-description-foreground">
            {preview.outputs.slice(0, 2).map(renderNavigationOutputChip)}
            {preview.outputs.length > 2 ? (
              <span className="shrink-0 tabular-nums">
                {React.createElement(FormattedMessage, {
                  id: "thread.userMessageNavigation.moreOutputs",
                  defaultMessage: "+{count}",
                  description:
                    "Count of additional turn outputs hidden from the prompt rail tooltip preview",
                  values: {
                    count: preview.outputs.length - 2,
                  },
                })}
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
  return previewContent;
}
function renderNavigationOutputChip(
  output: NavigationRailOutput,
  index: number,
): React.ReactNode {
  return React.createElement(
    NavigationOutputChip,
    {
      output: output,
    },
    `${output.type}:${output.label ?? index}`,
  );
}
function NavigationOutputChip(props: {
  output: NavigationRailOutput;
}): React.ReactNode {
  let { output } = props,
    outputIcon = getNavigationOutputIcon(output);
  let outputLabel = getNavigationOutputLabel(output);
  let outputLabelElement = (
    <span className="max-w-36 truncate">{outputLabel}</span>
  );
  return (
    <span className="flex min-w-0 items-center gap-1.5">
      {outputIcon}
      {outputLabelElement}
    </span>
  );
}
function getNavigationOutputIcon(
  output: NavigationRailOutput,
): React.ReactNode {
  switch (output.type) {
    case "app":
      return <AppsIcon className="icon-sm shrink-0 text-token-charts-blue" />;
    case "commit":
      return <CommitIcon className="icon-sm shrink-0" />;
    case "file":
      return React.createElement(getFileIcon(output.label ?? undefined), {
        className: "icon-sm shrink-0",
      });
    case "google-drive":
      return <GoogleDriveIcon className="icon-sm shrink-0" />;
    case "image":
      return <ImagesIcon className="icon-sm shrink-0" />;
    case "pull-request":
      return <PullRequestIcon className="icon-sm shrink-0" />;
    case "review":
      return React.createElement(ReviewOutputIcon, {
        className: "icon-sm shrink-0",
      });
    case "website":
      return <GlobeIcon className="icon-sm shrink-0" />;
  }
}
function getNavigationOutputLabel(
  output: NavigationRailOutput,
): React.ReactNode {
  if (output.label != null) return output.label;
  switch (output.type) {
    case "app":
      return React.createElement(FormattedMessage, {
        id: "thread.userMessageNavigation.appOutput",
        defaultMessage: "App preview",
        description:
          "Fallback label for an app output in the prompt rail tooltip",
      });
    case "commit":
      return React.createElement(FormattedMessage, {
        id: "thread.userMessageNavigation.commitOutput",
        defaultMessage: "Commit",
        description: "Label for a commit output in the prompt rail tooltip",
      });
    case "file":
      return React.createElement(FormattedMessage, {
        id: "thread.userMessageNavigation.fileOutput",
        defaultMessage: "File",
        description:
          "Fallback label for a file output in the prompt rail tooltip",
      });
    case "google-drive":
      return React.createElement(FormattedMessage, {
        id: "thread.userMessageNavigation.googleDriveOutput",
        defaultMessage: "Google Drive",
        description:
          "Fallback label for a Google Drive output in the prompt rail tooltip",
      });
    case "image":
      return React.createElement(FormattedMessage, {
        id: "thread.userMessageNavigation.imageOutput",
        defaultMessage: "Image",
        description:
          "Label for a generated image output in the prompt rail tooltip",
      });
    case "pull-request":
      return React.createElement(FormattedMessage, {
        id: "thread.userMessageNavigation.pullRequestOutput",
        defaultMessage: "Pull request",
        description:
          "Fallback label for a pull request output in the prompt rail tooltip",
      });
    case "review":
      return React.createElement(FormattedMessage, {
        id: "thread.userMessageNavigation.reviewOutput",
        defaultMessage: "Review",
        description:
          "Fallback label for a review output in the prompt rail tooltip",
      });
    case "website":
      return React.createElement(FormattedMessage, {
        id: "thread.userMessageNavigation.websiteOutput",
        defaultMessage: "Web preview",
        description: "Label for a website output in the prompt rail tooltip",
      });
  }
}
function FormattedNavigationLabel(props: { label: string }): React.ReactNode {
  let { label } = props,
    formattedLabel;
  {
    let labelParts = [],
      scanOffset = 0,
      lastSliceEnd = 0;
    for (; scanOffset < label.length; ) {
      let mentionMatch = parseDirectivesU(label, scanOffset);
      if (mentionMatch == null) break;
      scanOffset = mentionMatch.end;
      let mentionLabel = parseDirectivesG(mentionMatch.label).trim(),
        mentionHref = parseDirectivesUnderscore(mentionMatch.path),
        MentionIcon,
        mentionText = mentionLabel,
        mentionTitle;
      if (isAppMentionHref(mentionHref) || isPluginMentionHref(mentionHref)) {
        MentionIcon = getKnownAppIconByName(mentionLabel) ?? AppsIcon;
        mentionText = stripMentionTriggerSyntax(mentionLabel);
      } else if (mentionLabel.startsWith("$")) {
        MentionIcon = getSkillsMentionIcon();
        mentionText = parseDirectivesA(
          mentionLabel.startsWith("$[") && mentionLabel.endsWith("]")
            ? mentionLabel.slice(2, -1)
            : mentionLabel.slice(1),
        );
      } else {
        let richLinkHref = normalizeRichLinkHref(mentionHref);
        if (richLinkHref == null) continue;
        let externalLink = externalLinkSource(richLinkHref);
        MentionIcon = (externalLink == null
          ? null
          : getKnownAppIconByName(externalLink.appId)) ?? (
          <ExternalLinkFavicon href={richLinkHref} />
        );
        mentionTitle = richLinkHref;
      }
      labelParts.push(label.slice(lastSliceEnd, mentionMatch.start));
      labelParts.push(
        <InlineMentionContent
          key={mentionMatch.start}
          className="first:pl-0"
          icon={MentionIcon}
          text={mentionText}
          title={mentionTitle}
        />,
      );
      lastSliceEnd = mentionMatch.end;
    }
    labelParts.push(label.slice(lastSliceEnd));
    formattedLabel = <>{labelParts}</>;
  }
  return formattedLabel;
}
