// Restored from ref/webview/assets/start-appgen-conversation-DsuZNIH_.js
// Scroll-container title visibility hook shared by Sites and Library pages.

import React from "react";
import {
  initUseElementInViewChunk,
  useElementInView,
} from "../../utils/use-element-in-view";

export type AppgenScrollablePageTitleState = {
  scrollContainerRef: React.RefCallback<HTMLElement>;
  showTitleInToolbar: boolean;
  titleRef: React.RefCallback<HTMLElement>;
};

export function useAppgenScrollablePageTitle(): AppgenScrollablePageTitleState {
  const [scrollContainer, setScrollContainer] =
    React.useState<HTMLElement | null>(null);
  const [titleElement, setTitleElement] = React.useState<HTMLElement | null>(
    null,
  );
  const scrollContainerRef = React.useCallback(
    (element: HTMLElement | null) => {
      setScrollContainer(element);
    },
    [],
  );
  const titleRef = React.useCallback((element: HTMLElement | null) => {
    setTitleElement(element);
  }, []);
  const titleInView = useElementInView({
    container: scrollContainer,
    target: titleElement,
  });

  return {
    scrollContainerRef,
    showTitleInToolbar: !titleInView,
    titleRef,
  };
}

export function initAppgenScrollablePageTitleChunk(): void {
  initUseElementInViewChunk();
}
