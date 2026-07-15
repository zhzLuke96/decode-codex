// Restored from ref/webview/assets/pdf-CaT3Fa-k.js
// PDF.js package body restored as a typed npm-backed compatibility shim.
import * as pdfjs from "pdfjs-dist";

import { exportGetters } from "../runtime/commonjs-interop";

export * from "pdfjs-dist";

export const pdfDollar = pdfjs.stopEvent;
export const pdfA = pdfjs.Util;
export const pdfB = pdfjs.getPdfFilenameFromUrl;
export const _pdfC = pdfjs.PixelsPerInch;
export const pdfD = pdfjs.SupportedImageMimeTypes;
export const pdfE = pdfjs.SignatureExtractor;
export const pdfF = pdfjs.createValidAbsoluteUrl;
export const _pdfG = pdfjs.isPdfFile;
export const pdfH = pdfjs.getUuid;
export const _pdfI = pdfjs.fetchData;
export const _pdfJ = pdfjs.normalizeUnicode;
export const _pdfK = pdfjs.isValidExplicitDest;
export const _pdfL = pdfjs.findContrastColor;
export const _pdfM = pdfjs.XfaLayer;
export const pdfN = pdfjs.applyOpacity;
export const pdfO = pdfjs.TextLayer;
export const _pdfP = pdfjs.build;
export const pdfQ = pdfjs.shadow;
export const _pdfR = pdfjs.getDocument;
export const _pdfS = pdfjs.PermissionFlag;
export const pdfT = pdfjs.ResponseException;
export const pdfU = pdfjs.getXfaPageViewport;
export const pdfV = pdfjs.getRGB;
export const _pdfW = pdfjs.isDataScheme;
export const _pdfX = pdfjs.renderRichText;
export const _pdfZ = pdfjs.setLayerDimensions;
export const pdfUnderscore = pdfjs.OutputScale;
export const _pdfA = pdfjs.AnnotationEditorUIManager;
export const _pdfB = pdfjs.PDFWorker;
export const pdfC = pdfjs.AnnotationType;
export const _pdfD = pdfjs.DOMSVGFactory;
export const pdfEt = pdfjs.updateUrlHash;
export const _pdfF = pdfjs.DrawLayer;
export const pdfG = pdfjs.OPS;
export const _pdfH = pdfjs.MathClamp;
export const pdfI = pdfjs.AnnotationEditorType;
export const pdfJ = pdfjs.VerbosityLevel;
export const pdfK = pdfjs.TouchManager;
export const pdfL = pdfjs.CSSConstants;
export const pdfM = pdfjs.InvalidPDFException;
export const _pdfN = pdfjs.AnnotationEditorLayer;
export const pdfNt = pdfjs.ImageKind;
export const _pdfO = pdfjs.AnnotationLayer;
export const pdfP = pdfjs.GlobalWorkerOptions;
export const _pdfQ = pdfjs.noContextMenu;
export const pdfR = pdfjs.AnnotationEditorParamsType;
export const pdfRt = pdfjs.version;
export const pdfS = pdfjs.AnnotationMode;
export const _pdfT = pdfjs.AbortException;
export const pdfTt = pdfjs.FeatureTest;
export const _pdfU = pdfjs.ColorPicker;
export const _pdfV = pdfjs.PDFDataRangeTransport;
export const pdfW = pdfjs.RenderingCancelledException;
export const pdfX = pdfjs.PasswordResponses;
export const _pdfY = pdfjs.PDFDateString;
export const pdfZ = pdfjs.getFilenameFromUrl;

export const pdfY = exportGetters({
  AbortException: () => _pdfT,
  AnnotationEditorLayer: () => _pdfN,
  AnnotationEditorParamsType: () => pdfR,
  AnnotationEditorType: () => pdfI,
  AnnotationEditorUIManager: () => _pdfA,
  AnnotationLayer: () => _pdfO,
  AnnotationMode: () => pdfS,
  AnnotationType: () => pdfC,
  CSSConstants: () => pdfL,
  ColorPicker: () => _pdfU,
  DOMSVGFactory: () => _pdfD,
  DrawLayer: () => _pdfF,
  FeatureTest: () => pdfTt,
  GlobalWorkerOptions: () => pdfP,
  ImageKind: () => pdfNt,
  InvalidPDFException: () => pdfM,
  MathClamp: () => _pdfH,
  OPS: () => pdfG,
  OutputScale: () => pdfUnderscore,
  PDFDataRangeTransport: () => _pdfV,
  PDFDateString: () => _pdfY,
  PDFWorker: () => _pdfB,
  PasswordResponses: () => pdfX,
  PermissionFlag: () => _pdfS,
  PixelsPerInch: () => _pdfC,
  RenderingCancelledException: () => pdfW,
  ResponseException: () => pdfT,
  SignatureExtractor: () => pdfE,
  SupportedImageMimeTypes: () => pdfD,
  TextLayer: () => pdfO,
  TouchManager: () => pdfK,
  Util: () => pdfA,
  VerbosityLevel: () => pdfJ,
  XfaLayer: () => _pdfM,
  applyOpacity: () => pdfN,
  build: () => _pdfP,
  createValidAbsoluteUrl: () => pdfF,
  fetchData: () => _pdfI,
  findContrastColor: () => _pdfL,
  getDocument: () => _pdfR,
  getFilenameFromUrl: () => pdfZ,
  getPdfFilenameFromUrl: () => pdfB,
  getRGB: () => pdfV,
  getUuid: () => pdfH,
  getXfaPageViewport: () => pdfU,
  isDataScheme: () => _pdfW,
  isPdfFile: () => _pdfG,
  isValidExplicitDest: () => _pdfK,
  noContextMenu: () => _pdfQ,
  normalizeUnicode: () => _pdfJ,
  renderRichText: () => _pdfX,
  setLayerDimensions: () => _pdfZ,
  shadow: () => pdfQ,
  stopEvent: () => pdfDollar,
  updateUrlHash: () => pdfEt,
  version: () => pdfRt,
});

(globalThis as typeof globalThis & { pdfjsLib?: typeof pdfjs }).pdfjsLib =
  pdfjs;

export { pdfDollar as $ };
