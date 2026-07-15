// Restored from ref/webview/assets/katex-BvHNzFYT.js
// npm-backed KaTeX runtime shim preserving the bundled export aliases.

import katex from "katex";
import type { KatexOptions, ParseError } from "katex";

export { ParseError, render, renderToString, version } from "katex";

type KatexRuntimeFunction = (...args: unknown[]) => unknown;
type KatexParseErrorConstructor = new (
  message: string,
  token?: object,
) => ParseError;

interface KatexRuntimeApi {
  version: string;
  render: (tex: string, element: HTMLElement, options?: KatexOptions) => void;
  renderToString: (tex: string, options?: KatexOptions) => string;
  ParseError: KatexParseErrorConstructor;
  SETTINGS_SCHEMA: Record<string, unknown>;
  __parse: KatexRuntimeFunction;
  __renderToDomTree: KatexRuntimeFunction;
  __renderToHTMLTree: KatexRuntimeFunction;
  __setFontMetrics: KatexRuntimeFunction;
  __defineSymbol: KatexRuntimeFunction;
  __defineFunction: KatexRuntimeFunction;
  __defineMacro: KatexRuntimeFunction;
  __domTree: Record<string, unknown>;
}

export const katexC = katex as unknown as KatexRuntimeApi;
export const katexA = katexC.__defineMacro;
export const katexD = katexC.__renderToHTMLTree;
export const katexF = katexC.renderToString;
export const katexI = katexC.__defineFunction;
export const katexL = katexC.render;
export const katexM = katexC.version;
export const katexN = katexC.SETTINGS_SCHEMA;
export const katexO = katexC.__defineSymbol;
export const katexP = katexC.__setFontMetrics;
export const katexR = katexC.__domTree;
export const katexS = katexC.__parse;
export const katexT = katexC.ParseError;
export const katexU = katexC.__renderToDomTree;
export default katexC;
