// Restored from ref/webview/assets/slash-command-item-CjEpy4Fo.js
// slash-command-item-CjEpy4Fo chunk restored from the Codex webview bundle.
import type React from "react";
import { Command } from "../../vendor/cmdk";
export type GitRootLookupOptions = {
  enabled?: boolean;
};
export type DirectoryGitRootOptions = GitRootLookupOptions & {
  hostId?: string | null;
  source: string;
};
export type LookupState = {
  gitRoot: string | null;
  lookupKey: symbol;
};
export type GitOrigin = {
  dir?: string | null;
  originUrl?: string | null;
  root?: string | null;
};
export type GitOriginsData = {
  origins?: GitOrigin[] | null;
};
export type ActiveWorkspaceRootsData = {
  roots: string[];
};
export type HighlightMode = "fuzzy" | "substring";
export type HighlightSegment = {
  isMatch: boolean;
  text: string;
};
export type SlashCommandItemProps = React.ComponentPropsWithoutRef<
  typeof Command.Item
> & {
  description?: string | null;
  descriptionClassName?: string;
  descriptionTooltipContent?: React.ReactNode;
  highlightMode?: HighlightMode;
  leftAccessory?: React.ReactNode;
  LeftIcon?: React.ComponentType<{
    className?: string;
  }>;
  rightAccessory?: React.ReactNode;
  RightIcon?: React.ComponentType<{
    className?: string;
  }>;
  secondaryContent?: React.ReactNode;
  title: string;
  titleTooltipContent?: React.ReactNode;
  tooltipDelayDuration?: number;
};
export type OverflowTooltipTextProps = {
  children: React.ReactNode;
  className?: string;
  delayDuration?: number;
  tooltipContent?: React.ReactNode;
};
