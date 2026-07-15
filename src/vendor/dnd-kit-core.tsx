// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// @dnd-kit/core is a bundled third-party package; keep this boundary as a
// direct npm re-export shim instead of a local copy of the package internals.

export {
  AutoScrollActivator,
  closestCenter,
  closestCorners,
  defaultDropAnimation,
  DndContext,
  DragOverlay,
  getFirstCollision,
  KeyboardCode,
  KeyboardSensor,
  MeasuringFrequency,
  MeasuringStrategy,
  MouseSensor,
  PointerSensor,
  pointerWithin,
  rectIntersection,
  TouchSensor,
  useDndContext,
  useDndMonitor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

export type {
  Active,
  Announcements,
  Collision,
  CollisionDescriptor,
  CollisionDetection,
  DndContextProps,
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
  DragStartEvent,
  DraggableAttributes,
  DraggableSyntheticListeners,
  DropAnimation,
  DroppableContainer,
  KeyboardCodes,
  KeyboardCoordinateGetter,
  MeasuringConfiguration,
  Modifiers,
  Over,
  PointerActivationConstraint,
  SensorContext,
  SensorDescriptor,
  SensorOptions,
  UniqueIdentifier,
} from "@dnd-kit/core";

export function initDndKitCoreRuntime(): void {}
