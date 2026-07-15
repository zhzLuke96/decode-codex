// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~1je6c975-DGpPRr1D.js
// Current mixed producer for tslib helpers, React Intl, and automatic approval review copy.
import {
  __assign,
  __awaiter,
  __extends,
  __generator,
  __rest,
  __spreadArray,
} from "tslib";

import {
  initReactIntlRuntimeChunk,
  type IntlErrorCode as IntlErrorCodeValue,
} from "../../vendor/react-intl";

export {
  createIntl,
  defineMessage,
  defineMessages,
  FormattedDate,
  FormattedMessage,
  FormattedNumber,
  FormattedRelativeTime,
  IntlErrorCode,
  IntlProvider,
  initReactIntlRuntimeChunk,
  RawIntlProvider,
  useIntl,
} from "../../vendor/react-intl";

export {
  getAutomaticApprovalReviewActionSummary,
  getAutomaticApprovalReviewSummary,
  getAutomaticApprovalReviewTitle,
  useAutomaticApprovalReviewInterval as useInterval,
} from "../../utils/automatic-approval-review";

export const excludeObjectKeys = __rest;
export const createGeneratorRuntime = __generator;
export const runAsyncGenerator = __awaiter;
export const appendArraySlice = __spreadArray;
export const extendClassPrototype = __extends;
export const assignObjectProperties = __assign;

export type { IntlErrorCodeValue };

export function initTslibHelpersChunk(): void {}

export function initUseIntervalChunk(): void {}

export function initAutomaticApprovalReviewMessagesChunk(): void {}

export function initReactIntlApprovalReviewChunk(): void {
  initTslibHelpersChunk();
  initReactIntlRuntimeChunk();
  initUseIntervalChunk();
  initAutomaticApprovalReviewMessagesChunk();
}
