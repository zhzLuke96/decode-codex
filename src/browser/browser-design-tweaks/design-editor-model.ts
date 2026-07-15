// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Compatibility exports for the browser design editor model.

export type {
  DesignDeclaration,
  DesignSection,
  DesignSectionGroup,
  LockedRelationships,
  SpacingAxis,
  SpacingGroupProperty,
  SpacingSide,
} from "./design-editor-model-types";
import { getDesignEditorModel } from "./design-editor-model-impl";

const designEditorModel = getDesignEditorModel();

export const updateDeclaration = designEditorModel.updateDeclaration;
export const updateDeclarations = designEditorModel.updateDeclarations;
export const lockSpacingAxis = designEditorModel.lockSpacingAxis;
export const setSpacingValueLinked = designEditorModel.setSpacingValueLinked;
export const setDimensionValueLinked =
  designEditorModel.setDimensionValueLinked;
export const setTextValue = designEditorModel.setTextValue;
export const resetTextValue = designEditorModel.resetTextValue;
export const resetDeclaration = designEditorModel.resetDeclaration;
export const resetSpacingValueLinked =
  designEditorModel.resetSpacingValueLinked;
export const getTextEdit = designEditorModel.getTextEdit;
export const formatTargetLabel = designEditorModel.formatTargetLabel;
export const groupDeclarationsIntoSections =
  designEditorModel.groupDeclarationsIntoSections;
export const getSectionKey = designEditorModel.getSectionKey;
export const isLayoutSection = designEditorModel.isLayoutSection;
export const groupSectionsByCategory =
  designEditorModel.groupSectionsByCategory;
export const getSpacingGroupForProperty =
  designEditorModel.getSpacingGroupForProperty;
export const findSpacingDeclaration = designEditorModel.findSpacingDeclaration;
export const spacingRelationshipKey = designEditorModel.spacingRelationshipKey;
export const computeInitialLockedRelationships =
  designEditorModel.computeInitialLockedRelationships;
export const isSpacingValueLocked = designEditorModel.isSpacingValueLocked;
export const spacingAxisProperties = designEditorModel.spacingAxisProperties;
export const oppositeSpacingProperty =
  designEditorModel.oppositeSpacingProperty;
export const parsePixelNumber = designEditorModel.parsePixelNumber;
export const normalizeGapValue = designEditorModel.normalizeGapValue;
export const getPlaceholderValue = designEditorModel.getPlaceholderValue;
export const extractPixelValue = designEditorModel.extractPixelValue;
export const formatNumber = designEditorModel.formatNumber;
export const clamp = designEditorModel.clamp;
export const isColorProperty = designEditorModel.isColorProperty;
export const isLengthLikeDeclaration =
  designEditorModel.isLengthLikeDeclaration;
export const isLengthProperty = designEditorModel.isLengthProperty;
export const isGapProperty = designEditorModel.isGapProperty;
export const resolveScrubBaseValue = designEditorModel.resolveScrubBaseValue;
export const toHexColor = designEditorModel.toHexColor;
export const humanizePropertyName = designEditorModel.humanizePropertyName;
export const getPropertyLabel = designEditorModel.getPropertyLabel;
export const getDeclarationSuggestions =
  designEditorModel.getDeclarationSuggestions;
