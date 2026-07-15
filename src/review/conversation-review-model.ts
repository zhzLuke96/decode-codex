// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Parametric atoms that build a conversation's review model from its turns, falling
// back to the parent conversation's turns when the conversation itself has none.

import {
  createParametricAtom,
  reviewMetadataScope,
  conversationTitleAtom,
  conversationTurnsAtom,
  conversationFallbackTurnsAtom,
  parentConversationIdAtom,
  buildConversationReviewModel,
  buildParentConversationReviewModel,
} from "../boundaries/onboarding-commons-externals.facade";

interface ParametricAtomContext {
  get: (atom: unknown, arg?: unknown) => any;
}

// Review model derived directly from a conversation's own turns.
export const conversationReviewModelAtom = createParametricAtom(
  reviewMetadataScope,
  (conversationId: string | null, { get }: ParametricAtomContext) =>
    conversationId == null
      ? null
      : buildConversationReviewModel({
          id: conversationId,
          title: get(conversationTitleAtom, conversationId),
          turns:
            get(conversationTurnsAtom, conversationId) ??
            get(conversationFallbackTurnsAtom, conversationId),
        }),
);

// Review model for a conversation, falling back to the parent conversation's turns
// when the conversation has no review model of its own.
export const conversationReviewModelWithParentFallbackAtom =
  createParametricAtom(
    reviewMetadataScope,
    (conversationId: string | null, { get }: ParametricAtomContext) => {
      if (conversationId == null) return null;
      const ownModel = get(conversationReviewModelAtom, conversationId);
      if (ownModel != null) return ownModel;
      const parentId = get(parentConversationIdAtom, conversationId);
      return buildParentConversationReviewModel(
        conversationId,
        get(conversationTurnsAtom, parentId) ??
          get(conversationFallbackTurnsAtom, parentId),
      );
    },
  );
