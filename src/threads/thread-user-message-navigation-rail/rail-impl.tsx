// Restored from ref/webview/assets/thread-user-message-navigation-rail-Mi2GE36I.js
// Also covers ref/webview/assets/thread-user-message-navigation-rail-DwC5A8DL.js.
// Semantic implementation for the thread user-message navigation rail.
import React from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useAppScopeValue } from "../../boundaries/app-scope";
import { useIntl } from "../../vendor/react-intl";
import { useReducedMotion } from "../../utils/use-reduced-motion";
import { useStableCallback } from "../../utils/use-stable-callback";
import { Tooltip } from "../../ui/tooltip-b";
import { findLastIndex } from "../../utils/markdown-to-search-text";
import {
  _r as productLogger,
  productLoggerZn as userMessageNavigationRailEvent,
} from "../../analytics/product-logger";
import { appShellElementContext } from "../../app-shell/app-shell-ref";
import { useThreadScrollController } from "../thread-scroll-layout/scroll-controller-context";
import {
  renderNavigationTooltipPreview,
  type NavigationRailItem,
} from "./preview-impl";
export type ThreadUserMessageNavigationRailProps = {
  items: NavigationRailItem[];
  onRevealItem?: (item: NavigationRailItem) => Promise<void> | void;
};
type PointerScrubState = {
  itemId: string;
  pointerCaptureTarget: HTMLElement;
  pointerId: number;
};
type PointerRailTarget = {
  button: HTMLElement;
  item: NavigationRailItem;
};
const railClassNames = {
  marker: "_marker_fmcrx_1",
  row: "_row_fmcrx_22",
  railList: "_railList_fmcrx_47",
} as const;
export function ThreadUserMessageNavigationRail(
  props: ThreadUserMessageNavigationRailProps,
): React.ReactNode {
  let { items, onRevealItem } = props;
  if (items.length < 4) return null;
  return React.createElement(ThreadUserMessageNavigationRailBody, {
    items,
    onRevealItem,
  });
}
function ThreadUserMessageNavigationRailBody(
  props: ThreadUserMessageNavigationRailProps,
): React.ReactNode {
  let { items, onRevealItem } = props,
    { getScrollElement } = useThreadScrollController(),
    tooltipPortalContainer = React.useContext(appShellElementContext),
    logger = useAppScopeValue(productLogger),
    lastItemId = items.at(-1)?.id ?? null,
    createInitialVisibleItemIds = () =>
      new Set(lastItemId == null ? [] : [lastItemId]);
  let [visibleItemIds, setVisibleItemIds] = React.useState<Set<string>>(
      createInitialVisibleItemIds,
    ),
    [isPointerInsideRail, setIsPointerInsideRail] = React.useState(false),
    [scrubbedItemId, setScrubbedItemId] = React.useState<string | null>(null),
    [hoverTarget, setHoverTarget] = React.useState<PointerRailTarget | null>(
      null,
    ),
    [tooltipOpen, setTooltipOpen] = React.useState(false),
    [hasRailAnchorOffset, setHasRailAnchorOffset] = React.useState(false),
    [railPortalContainer, setRailPortalContainer] =
      React.useState<HTMLElement | null>(null),
    railListRef = React.useRef<HTMLDivElement | null>(null),
    pointerScrubRef = React.useRef<PointerScrubState | null>(null),
    suppressClickAfterScrubRef = React.useRef(false),
    tooltipId = React.useId(),
    intl = useIntl(),
    prefersReducedMotion = useReducedMotion(),
    itemIdsSignature = items.map(getNavigationItemId).join("\0");
  let stableItemIdsSignature = itemIdsSignature,
    firstVisibleItemId =
      items.find((item) => visibleItemIds.has(item.id))?.id ?? lastItemId;
  let activeItemId = firstVisibleItemId,
    ensureActiveRailButtonVisible = () => {
      pointerScrubRef.current ??
        scrollRailButtonIntoView(railListRef.current, activeItemId);
    };
  let ensureActiveRailButtonVisibleEvent = React.useEffectEvent(
      ensureActiveRailButtonVisible,
    ),
    scrollToNavigationItemImpl = async (
      item: NavigationRailItem,
      scrollBehavior: ScrollBehavior,
    ) => {
      let scrollElement = getScrollElement();
      if (scrollElement == null) return;
      let targetElement = findContentSearchUnitElement(scrollElement, item.id);
      if (targetElement == null && onRevealItem != null) {
        await onRevealItem(item);
        targetElement = findContentSearchUnitElement(scrollElement, item.id);
        animateNavigationTargetHighlight(targetElement, prefersReducedMotion);
        return;
      }
      targetElement?.scrollIntoView({
        behavior: scrollBehavior,
        block: "start",
      });
      animateNavigationTargetHighlight(targetElement, prefersReducedMotion);
    };
  let scrollToNavigationItem = useStableCallback(scrollToNavigationItemImpl),
    logAndScrollToNavigationItem = (item: NavigationRailItem) => (
      logger.logProductEvent(userMessageNavigationRailEvent, {}),
      scrollToNavigationItem(item, "smooth")
    );
  let handleJumpToItem = logAndScrollToNavigationItem,
    finishPointerScrubImpl = (event: React.PointerEvent<HTMLDivElement>) => {
      let pointerScrub = pointerScrubRef.current;
      pointerScrub?.pointerId === event.pointerId &&
        ((pointerScrubRef.current = null),
        setScrubbedItemId(null),
        pointerScrub.pointerCaptureTarget.hasPointerCapture?.(
          event.pointerId,
        ) &&
          pointerScrub.pointerCaptureTarget.releasePointerCapture?.(
            event.pointerId,
          ),
        isPointerInsideRail || (setHoverTarget(null), setTooltipOpen(false)),
        window.setTimeout(() => {
          suppressClickAfterScrubRef.current = false;
        }, 0));
    };
  let finishPointerScrub = useStableCallback(finishPointerScrubImpl),
    setupRailGeometryObserver = () => {
      let scrollElement = getScrollElement(),
        portalTargetElement =
          scrollElement?.querySelector('[data-mcp-app-portal-target="true"]') ??
          null;
      if (scrollElement == null || portalTargetElement == null) return;
      let measureFrameId: number | null = null,
        measureRailGeometry = () => {
          measureFrameId ??= window.requestAnimationFrame(() => {
            measureFrameId = null;
            setRailPortalContainer(scrollElement.parentElement);
            let scrollRect = scrollElement.getBoundingClientRect(),
              portalRect = portalTargetElement.getBoundingClientRect(),
              scrollScaleX =
                scrollElement.offsetWidth > 0
                  ? scrollRect.width / scrollElement.offsetWidth
                  : 1;
            setHasRailAnchorOffset(
              (portalRect.left - scrollRect.left) /
                (scrollScaleX > 0 ? scrollScaleX : 1) >=
                48,
            );
            ensureActiveRailButtonVisibleEvent();
          });
        },
        resizeObserver = new ResizeObserver(measureRailGeometry);
      resizeObserver.observe(scrollElement);
      resizeObserver.observe(portalTargetElement);
      let styleMutationObserver = new MutationObserver(measureRailGeometry);
      return (
        styleMutationObserver.observe(
          scrollElement.firstElementChild ?? scrollElement,
          {
            attributes: true,
            attributeFilter: ["style"],
          },
        ),
        window.addEventListener("resize", measureRailGeometry),
        measureRailGeometry(),
        () => {
          measureFrameId != null && window.cancelAnimationFrame(measureFrameId);
          resizeObserver.disconnect();
          styleMutationObserver.disconnect();
          window.removeEventListener("resize", measureRailGeometry);
        }
      );
    };
  let railGeometryDeps;
  railGeometryDeps = [getScrollElement];
  React.useEffect(setupRailGeometryObserver, railGeometryDeps);
  let setupVisibleItemObserver, visibleItemObserverDeps;
  setupVisibleItemObserver = () => {
    let scrollElement = getScrollElement();
    if (scrollElement == null || typeof IntersectionObserver === "undefined")
      return;
    let intersectingItemIds = new Set<string>(),
      itemIdByElement = new Map<Element, string>(),
      observedElements = new Set<Element>(),
      orderedItemIds =
        stableItemIdsSignature.length === 0
          ? []
          : stableItemIdsSignature.split("\0"),
      orderedItemIdSet = new Set(orderedItemIds),
      updateVisibleItemRange = () => {
        let firstVisibleIndex = orderedItemIds.findIndex((item) =>
          intersectingItemIds.has(item),
        );
        if (firstVisibleIndex === -1) return;
        let lastVisibleIndex = findLastIndex(orderedItemIds, (itemId) =>
            intersectingItemIds.has(itemId),
          ),
          nextVisibleItemIds = new Set(
            orderedItemIds.slice(firstVisibleIndex, lastVisibleIndex + 1),
          );
        setVisibleItemIds((previousVisibleItemIds) =>
          previousVisibleItemIds.size === nextVisibleItemIds.size &&
          [...previousVisibleItemIds].every((item) =>
            nextVisibleItemIds.has(item),
          )
            ? previousVisibleItemIds
            : nextVisibleItemIds,
        );
      },
      intersectionObserver = new IntersectionObserver(
        (entries) => {
          for (let entry of entries) {
            if (!(entry.target instanceof HTMLElement)) continue;
            let itemId = itemIdByElement.get(entry.target);
            itemId != null &&
              (entry.isIntersecting
                ? intersectingItemIds.add(itemId)
                : intersectingItemIds.delete(itemId));
          }
          updateVisibleItemRange();
        },
        {
          root: scrollElement,
          rootMargin: `-${16}px 0px 0px 0px`,
        },
      ),
      refreshObservedElements = () => {
        let currentObservedElements = new Set<Element>();
        for (let contentUnitElement of scrollElement.querySelectorAll(
          "[data-content-search-unit-key]",
        )) {
          let itemId = contentUnitElement.dataset.contentSearchUnitKey;
          if (itemId == null || !orderedItemIdSet.has(itemId)) continue;
          let turnElement = contentUnitElement.closest(
              "[data-turn-key], [data-content-search-turn-key]",
            ),
            observedElement =
              turnElement == null || currentObservedElements.has(turnElement)
                ? contentUnitElement
                : turnElement;
          currentObservedElements.add(observedElement);
          itemIdByElement.set(observedElement, itemId);
          observedElements.has(observedElement) ||
            (intersectionObserver.observe(observedElement),
            observedElements.add(observedElement));
        }
        for (let observedElement of observedElements) {
          if (currentObservedElements.has(observedElement)) continue;
          let itemId = itemIdByElement.get(observedElement);
          itemId != null && intersectingItemIds.delete(itemId);
          itemIdByElement.delete(observedElement);
          intersectionObserver.unobserve(observedElement);
          observedElements.delete(observedElement);
        }
        updateVisibleItemRange();
      },
      contentMutationObserver = new MutationObserver((mutations) => {
        mutationTouchesTurnContent(mutations) && refreshObservedElements();
      });
    return (
      contentMutationObserver.observe(scrollElement, {
        childList: true,
        subtree: true,
      }),
      refreshObservedElements(),
      () => {
        contentMutationObserver.disconnect();
        intersectionObserver.disconnect();
      }
    );
  };
  visibleItemObserverDeps = [getScrollElement, stableItemIdsSignature];
  React.useEffect(setupVisibleItemObserver, visibleItemObserverDeps);
  let keepActiveRailButtonVisible = () => {
    scrubbedItemId ??
      scrollRailButtonIntoView(railListRef.current, activeItemId);
  };
  let layoutEffectDeps;
  if (
    ((layoutEffectDeps = [activeItemId, hasRailAnchorOffset, scrubbedItemId]),
    React.useLayoutEffect(keepActiveRailButtonVisible, layoutEffectDeps),
    !hasRailAnchorOffset ||
      railPortalContainer == null ||
      typeof document === "undefined")
  )
    return null;
  let railAriaLabel = intl.formatMessage({
    id: "thread.userMessageNavigation.ariaLabel",
    defaultMessage: "User messages",
    description:
      "Aria label for the floating thread navigation rail that jumps between user messages",
  });
  let visibleAnimation = {
    opacity: 1,
  };
  let initialAnimation = {
    opacity: 0,
  };
  let railTransition = prefersReducedMotion
    ? {
        duration: 0,
      }
    : {
        duration: 0.15,
        ease: [0.23, 1, 0.32, 1],
      };
  let scrubbingDataAttribute = scrubbedItemId == null ? undefined : true,
    railListClassName = clsx(
      railClassNames.railList,
      "vertical-scroll-fade-mask hide-scrollbar flex max-h-[min(70vh,40rem)] flex-col overflow-y-auto overscroll-contain [--edge-fade-distance:2.5rem]",
    );
  let handlePointerDownCapture = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (event.button !== 0) return;
    let pointerTarget = getPointerRailTarget(
      items,
      event.currentTarget,
      event.target instanceof Element ? event.target : null,
    );
    pointerTarget != null &&
      ((suppressClickAfterScrubRef.current = false),
      setIsPointerInsideRail(true),
      (pointerScrubRef.current = {
        itemId: pointerTarget.item.id,
        pointerCaptureTarget: pointerTarget.button,
        pointerId: event.pointerId,
      }),
      setScrubbedItemId(pointerTarget.item.id),
      setHoverTarget(pointerTarget),
      setTooltipOpen(true),
      pointerTarget.button.setPointerCapture?.(event.pointerId));
  };
  let handlePointerEnter = () => {
    setIsPointerInsideRail(true);
  };
  let handlePointerLeave = () => {
    setIsPointerInsideRail(false);
    pointerScrubRef.current ?? setHoverTarget(null);
  };
  let handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    let pointerScrub = pointerScrubRef.current;
    if (pointerScrub == null) {
      let pointerTarget = getPointerRailTarget(
        items,
        event.currentTarget,
        event.target instanceof Element ? event.target : null,
      );
      pointerTarget != null &&
        setHoverTarget((currentTarget) =>
          currentTarget?.item.id === pointerTarget.item.id
            ? currentTarget
            : pointerTarget,
        );
      return;
    }
    if (pointerScrub.pointerId !== event.pointerId) return;
    if (event.buttons % 2 == 0) {
      finishPointerScrub(event);
      return;
    }
    let railBounds = event.currentTarget.getBoundingClientRect(),
      pointerTarget = getPointerRailTarget(
        items,
        event.currentTarget,
        document.elementFromPoint(
          railBounds.left + railBounds.width / 2,
          Math.max(
            railBounds.top,
            Math.min(event.clientY, railBounds.bottom - 1),
          ),
        ),
      );
    pointerTarget == null ||
      pointerTarget.item.id === pointerScrub.itemId ||
      ((pointerScrubRef.current = {
        ...pointerScrub,
        itemId: pointerTarget.item.id,
      }),
      setScrubbedItemId(pointerTarget.item.id),
      setHoverTarget(pointerTarget),
      (suppressClickAfterScrubRef.current = true),
      scrollToNavigationItem(pointerTarget.item, "instant"));
  };
  let handleTooltipOpenChange = (open: boolean) => {
    if (!open && pointerScrubRef.current != null) return;
    setTooltipOpen(open);
    open || setHoverTarget(null);
  };
  let tooltipPositioningElement = hoverTarget?.button ?? null,
    tooltipItem = hoverTarget?.item ?? items[0],
    tooltipContent = React.createElement(renderNavigationTooltipPreview, {
      item: tooltipItem,
    });
  let railRows = items.map((item, index) => (
    <button
      key={item.id}
      data-thread-user-message-navigation-item-id={item.id}
      data-scrub-target={scrubbedItemId === item.id ? true : undefined}
      aria-current={visibleItemIds.has(item.id) ? "true" : undefined}
      aria-describedby={
        tooltipOpen && hoverTarget?.item.id === item.id ? tooltipId : undefined
      }
      aria-label={intl.formatMessage(
        {
          id: "thread.userMessageNavigation.jumpAriaLabel",
          defaultMessage: "Jump to user message {position}",
          description:
            "Aria label for a row in the floating thread user-message navigation rail",
        },
        {
          position: index + 1,
        },
      )}
      className={clsx(
        railClassNames.row,
        "group/navigation-row flex h-2.5 w-9 shrink-0 cursor-interaction items-center outline-none",
      )}
      type="button"
      onClick={(event) => {
        if (suppressClickAfterScrubRef.current) {
          suppressClickAfterScrubRef.current = false;
          return;
        }
        setHoverTarget({
          button: event.currentTarget,
          item,
        });
        setTooltipOpen(true);
        handleJumpToItem(item);
      }}
      onFocus={(event) => {
        setHoverTarget({
          button: event.currentTarget,
          item,
        });
        setTooltipOpen(true);
      }}
    >
      <span className="flex h-0.5 w-[30px] items-center">
        <span
          className={clsx(
            railClassNames.marker,
            "h-0.5 bg-token-description-foreground opacity-40 group-focus-visible/navigation-row:bg-token-foreground group-focus-visible/navigation-row:opacity-100",
            scrubbedItemId == null &&
              "group-hover/navigation-row:bg-token-foreground group-hover/navigation-row:opacity-100",
            visibleItemIds.has(item.id) &&
              scrubbedItemId !== item.id &&
              "bg-token-foreground opacity-60",
            scrubbedItemId === item.id && "bg-token-foreground opacity-100",
          )}
        />
      </span>
    </button>
  ));
  let railRowsContainer = <div className="flex flex-col">{railRows}</div>;
  let railListElement = (
    <Tooltip
      align="center"
      delayOpen={true}
      open={tooltipOpen}
      onOpenChange={handleTooltipOpenChange}
      portalContainer={tooltipPortalContainer}
      positioningElement={tooltipPositioningElement}
      side="right"
      sideOffset={0}
      skipDelayKey="thread-user-message-navigation"
      tooltipClassName="!m-0 !z-20"
      tooltipId={tooltipId}
      tooltipMaxWidth="min(20rem, calc(100vw - 16px))"
      variant="unstyled"
      tooltipContent={tooltipContent}
    >
      <div
        ref={railListRef}
        data-thread-user-message-navigation-rail-list={true}
        data-scrubbing={scrubbingDataAttribute}
        className={railListClassName}
        onLostPointerCapture={finishPointerScrub}
        onPointerCancelCapture={finishPointerScrub}
        onPointerDownCapture={handlePointerDownCapture}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerMove={handlePointerMove}
        onPointerUpCapture={finishPointerScrub}
      >
        {railRowsContainer}
      </div>
    </Tooltip>
  );
  let railNavElement = React.createElement(motion.nav, {
    "aria-label": railAriaLabel,
    animate: visibleAnimation,
    className: "absolute top-1/2 left-3 z-20 -translate-y-1/2 electron:left-4",
    initial: initialAnimation,
    transition: railTransition,
    children: railListElement,
  });
  return createPortal(railNavElement, railPortalContainer);
}
function getNavigationItemId(item: NavigationRailItem): string {
  return item.id;
}
function findContentSearchUnitElement(
  scrollElement: Element,
  itemId: string,
): HTMLElement | null {
  return scrollElement.querySelector<HTMLElement>(
    `[data-content-search-unit-key="${escapeSelectorAttributeValue(itemId)}"]`,
  );
}
function scrollRailButtonIntoView(
  railListElement: HTMLElement | null,
  itemId: string | null,
): void {
  if (railListElement == null) return;
  let buttonElement = findRailButtonElement(railListElement, itemId);
  buttonElement != null &&
    (buttonElement.offsetTop < railListElement.scrollTop
      ? (railListElement.scrollTop = buttonElement.offsetTop)
      : buttonElement.offsetTop + buttonElement.offsetHeight >
          railListElement.scrollTop + railListElement.clientHeight &&
        (railListElement.scrollTop =
          buttonElement.offsetTop +
          buttonElement.offsetHeight -
          railListElement.clientHeight +
          1));
}
function findRailButtonElement(
  railListElement: HTMLElement | null,
  itemId: string | null,
): HTMLElement | null {
  return itemId == null || railListElement == null
    ? null
    : railListElement.querySelector<HTMLElement>(
        `[data-thread-user-message-navigation-item-id="${escapeSelectorAttributeValue(itemId)}"]`,
      );
}
function getPointerRailTarget(
  items: NavigationRailItem[],
  railElement: Element,
  eventTarget: Element | null,
): PointerRailTarget | null {
  let buttonElement = eventTarget?.closest(
    "[data-thread-user-message-navigation-item-id]",
  );
  if (buttonElement == null || !railElement.contains(buttonElement))
    return null;
  let matchedItem = items.find(
    (item) =>
      item.id === buttonElement.dataset.threadUserMessageNavigationItemId,
  );
  return matchedItem == null
    ? null
    : {
        button: buttonElement,
        item: matchedItem,
      };
}
function animateNavigationTargetHighlight(
  targetElement: Element | null | undefined,
  prefersReducedMotion: boolean,
): void {
  (
    targetElement?.querySelector("[data-user-message-bubble]") ??
    targetElement?.querySelector("[data-composer-attachment-pill]")
  )?.animate?.(
    [
      {
        backgroundColor:
          "color-mix(in srgb, var(--color-token-foreground) 14%, transparent)",
      },
      {
        backgroundColor:
          "color-mix(in srgb, var(--color-token-foreground) 14%, transparent)",
        offset: 0.35,
      },
      {
        backgroundColor:
          "color-mix(in srgb, var(--color-token-foreground) 5%, transparent)",
      },
    ],
    {
      duration: prefersReducedMotion ? 0 : 1400,
      easing: "cubic-bezier(0.23, 1, 0.32, 1)",
    },
  );
}
function mutationTouchesTurnContent(mutations: MutationRecord[]): boolean {
  return mutations.some((item) =>
    [...item.addedNodes, ...item.removedNodes].some(
      (_item) =>
        _item instanceof HTMLElement &&
        (_item.matches("[data-turn-key], [data-content-search-turn-key]") ||
          _item.querySelector(
            "[data-turn-key], [data-content-search-turn-key]",
          ) != null),
    ),
  );
}
function escapeSelectorAttributeValue(value: string): string {
  return typeof CSS !== "undefined" && CSS.escape != null
    ? CSS.escape(value)
    : value.replace(/"/g, '\\"');
}
