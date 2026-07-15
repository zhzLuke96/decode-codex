// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Drag-and-drop context that powers reordering app-shell tabs across tab strips:
// owns the live drag state, renders the dragged-tab overlay preview into a body
// portal, and implements the custom collision detection that decides which tab
// (and which side of it) a dragged tab should drop onto.
import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  closestCenter,
  pointerWithin,
  useSensor,
  useSensors,
} from "../vendor/dnd-kit-core";
import { AppShellTab } from "./app-shell-tab";
import {
  commitTabToSourceIndex,
  reorderTabWithinController,
  resolveInsertionPlacement,
  withDropPreview,
} from "./app-shell-tab-reorder";
import {
  appShellPanelDragContext,
  appStoreScope,
  panelOverlayZIndex,
  useAppScope,
  useWindowZoom,
} from "../boundaries/onboarding-commons-externals.facade";
import type {
  AppShellStore,
  AppShellTabController,
  AppShellTabInsertionPlacement,
  AppShellTabRecord,
} from "./app-shell-tab-controller/types";

type AppShellDragData =
  | { kind: "app-shell-tab"; controller: AppShellTabController; tabId: string }
  | { kind: "app-shell-tab-strip"; controller: AppShellTabController };

export interface TabDragState {
  draggedTab: AppShellTabRecord;
  insertionPlacement: AppShellTabInsertionPlacement;
  isDraggedTabActive: boolean;
  overTabId: string | null;
  previewController: AppShellTabController;
  sourceController: AppShellTabController;
}

interface TabDragSource {
  sourceController: AppShellTabController;
  sourceIndex: number;
  tabId: string;
  wasDraggedTabActive: boolean;
}

interface TabDragEvent {
  active: { data: { current: unknown } };
  over?: { id: string | number; data: { current: unknown } } | null;
  collisions?: Array<{
    id: string | number;
    data?: Record<string, unknown>;
  }> | null;
}

interface TabCollisionArgs {
  droppableContainers: Array<{
    id: string | number;
    data: { current: unknown };
  }>;
  droppableRects: Map<string | number, { left: number; width: number }>;
  pointerCoordinates: { x: number; y: number } | null;
}

interface TabCollision {
  id: string | number;
  data?: {
    droppableContainer: { data: { current: unknown } };
    [key: string]: unknown;
  };
}

function getAppShellTabDragData(value: unknown): AppShellDragData | null {
  if (typeof value !== "object" || !value) return null;
  switch (Reflect.get(value, "kind")) {
    case "app-shell-tab":
    case "app-shell-tab-strip":
      return value as AppShellDragData;
    default:
      return null;
  }
}

function dispatchEscapeKey(): void {
  document.dispatchEvent(
    new KeyboardEvent("keydown", {
      bubbles: true,
      cancelable: true,
      code: "Escape",
      key: "Escape",
    }),
  );
}

function annotateTabCollisions(
  collisions: TabCollision[],
  args: TabCollisionArgs,
): TabCollision[] {
  return collisions.map((collision) => {
    const data = getAppShellTabDragData(
      collision.data?.droppableContainer.data.current,
    );
    const rect = args.droppableRects.get(collision.id);
    if (data?.kind !== "app-shell-tab" || rect == null) return collision;
    return {
      ...collision,
      data: {
        ...collision.data,
        appShellTabInsertionPlacement: resolveInsertionPlacement(
          args.pointerCoordinates?.x ?? null,
          rect.left,
          rect.width,
        ),
      },
    };
  });
}

export function appShellTabCollisionDetection(
  args: TabCollisionArgs,
): TabCollision[] {
  const pointerCollisions = pointerWithin(args) as TabCollision[];
  const tabCollisions = pointerCollisions.filter(
    (collision) =>
      getAppShellTabDragData(collision.data?.droppableContainer.data.current)
        ?.kind === "app-shell-tab",
  );
  if (tabCollisions.length > 0)
    return annotateTabCollisions(tabCollisions, args);

  const stripCollision =
    pointerCollisions.find(
      (collision) =>
        getAppShellTabDragData(collision.data?.droppableContainer.data.current)
          ?.kind === "app-shell-tab-strip",
    ) ?? null;
  const stripData =
    stripCollision == null
      ? null
      : getAppShellTabDragData(
          stripCollision.data?.droppableContainer.data.current,
        );
  if (stripCollision != null && stripData?.kind === "app-shell-tab-strip") {
    const stripTabs = args.droppableContainers.filter((container) => {
      const data = getAppShellTabDragData(container.data.current);
      return (
        data?.kind === "app-shell-tab" &&
        data.controller === stripData.controller
      );
    });
    return stripTabs.length > 0
      ? annotateTabCollisions(
          closestCenter({
            ...args,
            droppableContainers: stripTabs,
          }) as TabCollision[],
          args,
        )
      : [stripCollision];
  }
  return annotateTabCollisions(closestCenter(args) as TabCollision[], args);
}

function getCollisionInsertionPlacement(
  event: TabDragEvent,
): AppShellTabInsertionPlacement {
  const overId = event.over?.id;
  const placement =
    overId == null
      ? null
      : (event.collisions?.find((collision) => collision.id === overId)?.data
          ?.appShellTabInsertionPlacement as
          | AppShellTabInsertionPlacement
          | undefined);
  return placement === "after" ? "after" : "before";
}

interface TabDragPreviewProps {
  dragState: TabDragState;
}

function TabDragPreview({ dragState }: TabDragPreviewProps) {
  const zoom = useWindowZoom();
  const {
    highlightedIcon,
    icon,
    isClosable,
    isHighlighted,
    isLabel,
    isPreview,
    tabId,
    title,
    tooltip,
    trailingContent,
  } = dragState.draggedTab;
  const previewStyle: CSSProperties = {
    height: `calc(100% / ${zoom})`,
    transform: `scale(${zoom})`,
    transformOrigin: "top left",
    width: `calc(100% / ${zoom})`,
  };
  return (
    <div style={previewStyle}>
      <div className="relative my-auto flex max-w-40 shrink-0 items-center gap-0.5 pe-1">
        <AppShellTab
          id={tabId}
          highlightedIcon={highlightedIcon}
          icon={icon}
          isActive={dragState.isDraggedTabActive}
          isClosable={isClosable}
          isDragging
          isHighlighted={isHighlighted}
          isLabel={isLabel}
          isPreview={isPreview}
          trailingContent={trailingContent}
          title={title}
          tooltip={tooltip}
        />
      </div>
    </div>
  );
}

export interface AppShellTabDragAndDropContextProps {
  children: ReactNode;
}

export function AppShellTabDragAndDropContext({
  children,
}: AppShellTabDragAndDropContextProps) {
  const store = useAppScope(appStoreScope) as AppShellStore;
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
  );
  const [dragState, setDragState] = useState<TabDragState | null>(null);
  const dragSourceRef = useRef<TabDragSource | null>(null);
  const isDragging = dragState != null;

  const updatePreview = (
    controller: AppShellTabController,
    overTabId: string | null,
    placement: AppShellTabInsertionPlacement,
  ) => {
    setDragState((previous) =>
      previous == null
        ? previous
        : (withDropPreview(
            previous as never,
            controller,
            overTabId as never,
            placement,
          ) as TabDragState),
    );
  };

  useEffect(() => {
    if (!isDragging) return;
    const cancelDrag = dispatchEscapeKey;
    const handleVisibilityChange = () => {
      if (document.visibilityState !== "visible") cancelDrag();
    };
    window.addEventListener("blur", cancelDrag);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.documentElement.addEventListener("pointerleave", cancelDrag);
    return () => {
      window.removeEventListener("blur", cancelDrag);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.documentElement.removeEventListener("pointerleave", cancelDrag);
    };
  }, [isDragging]);

  const handleDragStart = (event: TabDragEvent) => {
    const data = getAppShellTabDragData(event.active.data.current);
    if (data?.kind !== "app-shell-tab") return;
    const tabs = store.get<AppShellTabRecord[]>(data.controller.tabs$);
    const sourceIndex = tabs.findIndex((tab) => tab.tabId === data.tabId);
    const draggedTab = tabs[sourceIndex] ?? null;
    if (draggedTab == null) return;
    const wasDraggedTabActive =
      store.get<AppShellTabRecord | null>(data.controller.activeTab$)?.tabId ===
      data.tabId;
    dragSourceRef.current = {
      sourceController: data.controller,
      sourceIndex,
      tabId: data.tabId,
      wasDraggedTabActive,
    };
    setDragState({
      draggedTab,
      insertionPlacement: "before",
      isDraggedTabActive: wasDraggedTabActive,
      overTabId: null,
      previewController: data.controller,
      sourceController: data.controller,
    });
  };

  const handleDragOver = (event: TabDragEvent) => {
    const source = dragSourceRef.current;
    if (!isDragging || source == null) return;
    const overData = getAppShellTabDragData(event.over?.data.current);
    if (overData == null) return;
    if (overData.kind === "app-shell-tab") {
      if (overData.tabId === source.tabId) return;
      if (overData.controller === source.sourceController) {
        reorderTabWithinController(
          store,
          source.sourceController,
          source.tabId,
          overData.tabId,
        );
        updatePreview(source.sourceController, null, "before");
        return;
      }
      updatePreview(
        overData.controller,
        overData.tabId,
        getCollisionInsertionPlacement(event),
      );
    } else {
      updatePreview(overData.controller, null, "before");
    }
  };

  const handleDragMove = (event: TabDragEvent) => {
    const source = dragSourceRef.current;
    if (!isDragging || source == null) return;
    const overData = getAppShellTabDragData(event.over?.data.current);
    if (
      overData?.kind !== "app-shell-tab" ||
      overData.tabId === source.tabId ||
      overData.controller === source.sourceController
    ) {
      return;
    }
    updatePreview(
      overData.controller,
      overData.tabId,
      getCollisionInsertionPlacement(event),
    );
  };

  const handleDragCancel = () => {
    const source = dragSourceRef.current;
    if (isDragging && source != null) commitTabToSourceIndex(store, source);
    setDragState(null);
    dragSourceRef.current = null;
  };

  const handleDragEnd = (event: TabDragEvent) => {
    const source = dragSourceRef.current;
    if (isDragging && source != null && event.over == null) {
      commitTabToSourceIndex(store, source);
    } else if (
      isDragging &&
      source != null &&
      dragState != null &&
      dragState.previewController !== source.sourceController
    ) {
      source.sourceController.moveTabTo(
        store,
        source.tabId,
        dragState.previewController,
        dragState.overTabId,
        { insertionPlacement: dragState.insertionPlacement },
      );
    }
    setDragState(null);
    dragSourceRef.current = null;
  };

  const cursorBlocker = isDragging ? (
    <div
      aria-hidden
      className="fixed inset-0 cursor-grabbing"
      style={{ zIndex: panelOverlayZIndex }}
    />
  ) : null;
  const overlayPreview =
    dragState == null ? null : <TabDragPreview dragState={dragState} />;
  const dragOverlay = (
    <DragOverlay adjustScale={false} zIndex={panelOverlayZIndex}>
      {overlayPreview}
    </DragOverlay>
  );
  const portal = createPortal(
    <>
      {cursorBlocker}
      {dragOverlay}
    </>,
    document.body,
  );

  return (
    <appShellPanelDragContext.Provider value={{ dragState }}>
      <DndContext
        sensors={sensors}
        collisionDetection={appShellTabCollisionDetection}
        onDragStart={handleDragStart}
        onDragMove={handleDragMove}
        onDragOver={handleDragOver}
        onDragCancel={handleDragCancel}
        onDragEnd={handleDragEnd}
      >
        {children}
        {portal}
      </DndContext>
    </appShellPanelDragContext.Provider>
  );
}
