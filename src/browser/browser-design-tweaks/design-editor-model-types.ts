// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Shared design editor model types.

import type { CssDeclarationEdit } from "../browser-comment-design-draft";

// Editor declarations carry an optional inherited placeholder value in addition
// to the persisted draft shape.
export type DesignDeclaration = CssDeclarationEdit & {
  placeholderValue?: string;
};

export type SpacingGroupProperty = "margin" | "padding";
export type SpacingAxis = "vertical" | "horizontal";

export type DesignSection =
  | { kind: "declaration"; declaration: DesignDeclaration }
  | {
      kind: "dimensions";
      width: DesignDeclaration;
      height: DesignDeclaration;
    }
  | {
      kind: "spacing";
      property: SpacingGroupProperty;
      declarations: DesignDeclaration[];
    }
  | {
      kind: "flex-spacing";
      columnGap: DesignDeclaration;
      rowGap: DesignDeclaration;
    };

export type DesignSectionGroup = {
  id: string;
  sections: DesignSection[];
};

export type LockedRelationships = Record<string, boolean>;

export type SpacingSide = "top" | "bottom" | "left" | "right";
