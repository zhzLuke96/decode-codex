// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Host component for the browser sidebar design-tweaks editor: groups CSS
// declarations into sections and wires editing/locking/scrub callbacks.
import { useState, type PointerEvent } from "react";
import type { DesignEditorState } from "../browser-comment-design-draft";
import {
  type LockedRelationships,
  type SpacingGroupProperty,
  computeInitialLockedRelationships,
  getTextEdit,
  groupDeclarationsIntoSections,
  groupSectionsByCategory,
  isSpacingValueLocked,
  lockSpacingAxis,
  resetDeclaration,
  resetSpacingValueLinked,
  resetTextValue,
  setDimensionValueLinked,
  setSpacingValueLinked,
  setTextValue,
  spacingRelationshipKey,
  updateDeclaration,
  getSpacingGroupForProperty,
} from "./design-editor-model";
import {
  DesignSectionGroupRows,
  DesignTextRow,
  DesignDragHandle,
} from "./design-editor-rows";

type ExpandedSpacingGroups = {
  margin: boolean;
  padding: boolean;
};

export type BrowserDesignTweaksEditorProps = {
  dropdownPortalContainer?: HTMLElement | null;
  editorState: DesignEditorState;
  defaultExpandedSpacingGroups?: {
    margin?: boolean;
    padding?: boolean;
  } | null;
  isEditable: boolean;
  onDragHandlePointerCancel: (event: PointerEvent<HTMLDivElement>) => void;
  onDragHandlePointerDown: (event: PointerEvent<HTMLDivElement>) => void;
  onDragHandlePointerMove: (event: PointerEvent<HTMLDivElement>) => void;
  onDragHandlePointerUp: (event: PointerEvent<HTMLDivElement>) => void;
  onScrubActiveChange?: (
    property: string | null,
    element: HTMLElement | null,
  ) => void;
  onUpdate: (state: DesignEditorState) => void;
};

function toggleBoolean(value: boolean): boolean {
  return !value;
}

function toggleDimensionsLock(
  locked: LockedRelationships,
): LockedRelationships {
  return { ...locked, dimensions: !locked.dimensions };
}

export function BrowserDesignTweaksEditor({
  dropdownPortalContainer,
  editorState,
  defaultExpandedSpacingGroups,
  isEditable,
  onDragHandlePointerCancel,
  onDragHandlePointerDown,
  onDragHandlePointerMove,
  onDragHandlePointerUp,
  onScrubActiveChange,
  onUpdate,
}: BrowserDesignTweaksEditorProps) {
  const [expandedSpacingGroups, setExpandedSpacingGroups] =
    useState<ExpandedSpacingGroups>(() => ({
      margin: defaultExpandedSpacingGroups?.margin === true,
      padding: defaultExpandedSpacingGroups?.padding === true,
    }));
  const [isFlexSpacingExpanded, setIsFlexSpacingExpanded] = useState(false);
  const [lockedRelationships, setLockedRelationships] =
    useState<LockedRelationships>(() =>
      computeInitialLockedRelationships(editorState),
    );

  const textEdit = getTextEdit(editorState);
  const sectionGroups = groupSectionsByCategory(
    groupDeclarationsIntoSections(editorState.declarations),
  );

  const applyUpdate = (
    transform: (state: DesignEditorState) => DesignEditorState,
  ) => {
    onUpdate(transform(editorState));
  };

  return (
    <div className="-mx-4 flex min-w-0 flex-col">
      <DesignDragHandle
        editorState={editorState}
        onPointerCancel={onDragHandlePointerCancel}
        onPointerDown={onDragHandlePointerDown}
        onPointerMove={onDragHandlePointerMove}
        onPointerUp={onDragHandlePointerUp}
      />
      <div
        className="max-h-[216px] min-w-0 overflow-y-auto"
        data-browser-sidebar-design-scroll-container={true}
      >
        <div className="grid grid-cols-[minmax(108px,auto)_minmax(0,1fr)] items-start gap-x-3 gap-y-1.5 px-4 py-2">
          {textEdit == null ? null : (
            <DesignTextRow
              isEditable={isEditable}
              isEdited={textEdit.value !== textEdit.previousValue}
              value={textEdit.value}
              onReset={() => {
                applyUpdate(resetTextValue);
              }}
              onValueChange={(value) => {
                applyUpdate((state) => setTextValue(state, value));
              }}
            />
          )}
          {sectionGroups.map((sectionGroup, index) => (
            <DesignSectionGroupRows
              key={sectionGroup.id}
              dropdownPortalContainer={dropdownPortalContainer}
              expandedSpacingGroups={expandedSpacingGroups}
              isFlexSpacingExpanded={isFlexSpacingExpanded}
              isEditable={isEditable}
              lockedRelationships={lockedRelationships}
              sectionGroup={sectionGroup}
              showDivider={index > 0 || textEdit != null}
              onDimensionLockToggle={() => {
                setLockedRelationships(toggleDimensionsLock);
              }}
              onDimensionValueChange={(property, value) => {
                applyUpdate((state) =>
                  lockedRelationships.dimensions
                    ? setDimensionValueLinked(
                        state,
                        property as "width" | "height",
                        value,
                      )
                    : updateDeclaration(state, property, { value }),
                );
              }}
              onSpacingExpandToggle={(property) => {
                setExpandedSpacingGroups((groups) => ({
                  ...groups,
                  [property]: !groups[property as keyof ExpandedSpacingGroups],
                }));
              }}
              onFlexSpacingExpandToggle={() => {
                setIsFlexSpacingExpanded(toggleBoolean);
              }}
              onSpacingLockToggle={(property, axis) => {
                const relationshipKey = spacingRelationshipKey(property, axis);
                const nextLocked = !lockedRelationships[relationshipKey];
                setLockedRelationships((locked) => ({
                  ...locked,
                  [relationshipKey]: nextLocked,
                }));
                if (nextLocked) {
                  applyUpdate((state) =>
                    lockSpacingAxis(state, property, axis),
                  );
                }
              }}
              onSpacingValueChange={(property, declarationProperty, value) => {
                applyUpdate((state) =>
                  isSpacingValueLocked(
                    lockedRelationships,
                    property,
                    declarationProperty,
                  )
                    ? setSpacingValueLinked(
                        state,
                        property,
                        declarationProperty,
                        value,
                      )
                    : updateDeclaration(state, declarationProperty, { value }),
                );
              }}
              onDeclarationValueChange={(property, value) => {
                applyUpdate((state) =>
                  updateDeclaration(state, property, { value }),
                );
              }}
              onScrubActiveChange={onScrubActiveChange}
              onDeclarationReset={(property) => {
                const spacingGroup = getSpacingGroupForProperty(
                  property,
                ) as SpacingGroupProperty | null;
                applyUpdate((state) =>
                  spacingGroup != null &&
                  isSpacingValueLocked(
                    lockedRelationships,
                    spacingGroup,
                    property,
                  )
                    ? resetSpacingValueLinked(state, spacingGroup, property)
                    : resetDeclaration(state, property),
                );
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
