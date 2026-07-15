// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~1je6c975-DGpPRr1D.js
// Current mixed facade for tslib helpers, React Intl, and automatic approval review copy.

import {
  __assign,
  __awaiter,
  __extends,
  __generator,
  __rest,
  __spreadArray,
} from "tslib";

import { initReactIntlRuntimeChunk } from "./react-intl";

export {
  createIntl,
  defineMessage,
  defineMessages,
  FormattedDate,
  FormattedMessage,
  FormattedNumber,
  FormattedRelativeTime,
  IntlProvider,
  RawIntlProvider,
  ReactIntlErrorCode as IntlErrorCode,
  useIntl,
} from "react-intl";

export type { ReactIntlErrorCode as IntlErrorCodeValue } from "react-intl";

export {
  getAutomaticApprovalReviewActionSummary,
  getAutomaticApprovalReviewSummary,
  getAutomaticApprovalReviewTitle,
  useAutomaticApprovalReviewInterval as useInterval,
} from "../utils/automatic-approval-review";

export const excludeObjectKeys = __rest;
export const createGeneratorRuntime = __generator;
export const runAsyncGenerator = __awaiter;
export const appendArraySlice = __spreadArray;
export const extendClassPrototype = __extends;
export const assignObjectProperties = __assign;

export { initReactIntlRuntimeChunk };

export function initTslibHelpersChunk(): void {}

export function initUseIntervalChunk(): void {}

export function initAutomaticApprovalReviewMessagesChunk(): void {}

export function initReactIntlApprovalReviewChunk(): void {
  initTslibHelpersChunk();
  initReactIntlRuntimeChunk();
  initUseIntervalChunk();
  initAutomaticApprovalReviewMessagesChunk();
}
