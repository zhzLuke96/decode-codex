// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// @dnd-kit/sortable is a bundled third-party package; keep this boundary as a
// direct npm re-export shim instead of a local copy of the package internals.

export {
  arrayMove,
  defaultAnimateLayoutChanges,
  defaultNewIndexGetter,
  hasSortableData,
  horizontalListSortingStrategy,
  rectSortingStrategy,
  rectSwappingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export type {
  AnimateLayoutChanges,
  NewIndexGetter,
  SortableData,
  SortableContextProps,
  SortingStrategy,
  UseSortableArguments,
} from "@dnd-kit/sortable";

export function initDndKitSortableRuntime(): void {}
