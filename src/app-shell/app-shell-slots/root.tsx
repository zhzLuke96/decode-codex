// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
import type { ReactElement, ReactNode } from "react";
import { Children, isValidElement } from "react";
import { AppShellLayout } from "../app-shell-layout";
import {
  AppShellBottomPanelSlot,
  AppShellLeftPanelSlot,
  AppShellRightPanelSlot,
} from "./panel-marker-slots";
import type { AppShellSlotProps } from "./slot-types";

function isLeftPanelSlotElement(node: ReactNode): node is ReactElement {
  return isValidElement(node) && node.type === AppShellLeftPanelSlot;
}

function isRightPanelSlotElement(node: ReactNode): node is ReactElement {
  return isValidElement(node) && node.type === AppShellRightPanelSlot;
}

function isBottomPanelSlotElement(node: ReactNode): node is ReactElement {
  return isValidElement(node) && node.type === AppShellBottomPanelSlot;
}

interface SplitAppShellChildren {
  bottomPanelSlot?: AppShellSlotProps;
  contentChildren: ReactNode[];
  leftPanelSlot?: AppShellSlotProps;
  rightPanelSlot?: AppShellSlotProps;
}

function splitAppShellChildren(children: ReactNode): SplitAppShellChildren {
  const contentChildren: ReactNode[] = [];
  let bottomPanelSlot: AppShellSlotProps | undefined;
  let leftPanelSlot: AppShellSlotProps | undefined;
  let rightPanelSlot: AppShellSlotProps | undefined;
  Children.forEach(children, (child, index) => {
    if (isLeftPanelSlotElement(child)) {
      leftPanelSlot = child.props as AppShellSlotProps;
      return;
    }
    if (isRightPanelSlotElement(child)) {
      rightPanelSlot = child.props as AppShellSlotProps;
      return;
    }
    if (isBottomPanelSlotElement(child)) {
      bottomPanelSlot = child.props as AppShellSlotProps;
      return;
    }
    if (isValidElement(child)) {
      contentChildren.push({ ...child, key: child.key ?? `${index}` });
    } else {
      contentChildren.push(child);
    }
  });
  return { bottomPanelSlot, contentChildren, leftPanelSlot, rightPanelSlot };
}

export function AppShellRoot({ children }: AppShellSlotProps) {
  const { bottomPanelSlot, contentChildren, leftPanelSlot, rightPanelSlot } =
    splitAppShellChildren(children);
  return (
    <AppShellLayout
      bottomPanelSlot={bottomPanelSlot}
      leftPanelSlot={leftPanelSlot}
      rightPanelSlot={rightPanelSlot}
    >
      {contentChildren}
    </AppShellLayout>
  );
}
