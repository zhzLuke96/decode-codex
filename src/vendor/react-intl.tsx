// Restored from ref/webview/assets/lib-BWT6A3Q0.js
// React Intl is a bundled third-party FormatJS package; keep this boundary as
// a direct npm re-export shim instead of a hand-written compatibility layer.

export {
  createIntl,
  createIntlCache,
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

export type {
  IntlConfig as ReactIntlConfig,
  IntlShape,
  MessageDescriptor,
  PrimitiveType,
  ReactIntlErrorCode as IntlErrorCodeValue,
  ResolvedIntlConfig,
} from "react-intl";

export function initIntlRuntime(): void {}

export function initReactIntlRuntimeChunk(): void {}
