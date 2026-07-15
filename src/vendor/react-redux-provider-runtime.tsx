// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-CgNc-Bk2.js
// React Redux is a bundled third-party package; keep this as an npm-backed
// alias shim rather than a hand-written copy of its Provider internals.
import type { ProviderProps } from "react-redux";

export { Provider as ReactReduxProvider, ReactReduxContext } from "react-redux";

export type { ProviderProps as ReactReduxProviderProps } from "react-redux";

export type ReactReduxStore = ProviderProps["store"];

export function initReactReduxProviderRuntimeChunk(): void {}
