// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Sidebar thread-list section components and shortcut registration wrappers.
import React, { type ReactElement, type ReactNode } from "react";
import {
  ChatsSidebarSection,
  ProjectsOrConnectionsSidebarSection,
} from "../runtime/current-app-initial/projects-index-current-runtime";

type SidebarSectionProps = Record<string, unknown>;

function renderSection(
  Component: (props: SidebarSectionProps) => ReactElement | null,
  props: SidebarSectionProps,
): ReactElement | null {
  return <Component {...props} />;
}

export function ProjectThreadList(
  props: SidebarSectionProps,
): ReactElement | null {
  return renderSection(ChatsSidebarSection, props);
}

export function SidebarChatsList(
  props: SidebarSectionProps,
): ReactElement | null {
  return renderSection(ChatsSidebarSection, props);
}

export function SidebarCloudSection(
  props: SidebarSectionProps,
): ReactElement | null {
  return renderSection(ChatsSidebarSection, {
    ...props,
    sectionKind: "cloud",
  });
}

export function SidebarThreadsSection(
  props: SidebarSectionProps,
): ReactElement | null {
  return renderSection(ChatsSidebarSection, {
    ...props,
    sectionKind: "threads",
  });
}

export function SidebarThreadGroups(
  props: SidebarSectionProps,
): ReactElement | null {
  return renderSection(ProjectsOrConnectionsSidebarSection, props);
}

export function SidebarKeyboardShortcutScope({
  children,
}: {
  children?: ReactNode;
  shortcutKeys?: readonly string[];
}): ReactElement {
  return <>{children}</>;
}

export function SidebarThreadShortcutRegistrar({
  threadKeys,
}: {
  threadKeys?: readonly string[];
}): null {
  React.useEffect(() => {
    void threadKeys;
  }, [threadKeys]);
  return null;
}
