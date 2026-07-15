// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Feedback classification categories shown as selectable options in the
// feedback dialog.
import { defineMessages } from "../vendor/react-intl";

export const feedbackCategoryMessages = defineMessages({
  bug: {
    id: "feedback.dialog.category.bug",
    defaultMessage: "Bug",
    description: "Category label for reporting a bug",
  },
  badResult: {
    id: "feedback.dialog.category.badResult",
    defaultMessage: "Bad result",
    description: "Category label for reporting a bad result",
  },
  goodResult: {
    id: "feedback.dialog.category.goodResult",
    defaultMessage: "Good result",
    description: "Category label for reporting a good result",
  },
  safetyCheck: {
    id: "feedback.dialog.category.safetyCheck",
    defaultMessage: "Safety check",
    description: "Category label for safety-check feedback",
  },
  other: {
    id: "feedback.dialog.category.other",
    defaultMessage: "Other",
    description: "Category label for reporting other types of feedback",
  },
});

export interface FeedbackCategoryOption {
  id: string;
  label: (typeof feedbackCategoryMessages)[keyof typeof feedbackCategoryMessages];
}

export const FEEDBACK_CATEGORY_OPTIONS: FeedbackCategoryOption[] = [
  { id: "bug", label: feedbackCategoryMessages.bug },
  { id: "bad-result", label: feedbackCategoryMessages.badResult },
  { id: "good-result", label: feedbackCategoryMessages.goodResult },
  { id: "safety_check", label: feedbackCategoryMessages.safetyCheck },
  { id: "other", label: feedbackCategoryMessages.other },
];
