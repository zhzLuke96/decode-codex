// Restored from ref/webview/assets/skus-K50o09d3.js
// skus-K50o09d3 chunk restored from the Codex webview bundle.
const skuValues = {
  FREE: "free",
  GO: "go",
  PLUS: "plus",
  PRO: "pro",
  PROLITE: "prolite",
  SELF_SERVE_BUSINESS: "team",
  ENTERPRISE_CBP: "business",
  SELF_SERVE_BUSINESS_USAGE_BASED: "self_serve_business_usage_based",
  ENTERPRISE_CBP_USAGE_BASED: "enterprise_cbp_usage_based",
  FINSERV: "finserv",
  EDUCATION_CBP: "education",
  QUORUM: "quorum",
  DEPRECATED_ENTERPRISE: "enterprise",
  HC: "hc",
  DEPRECATED_ENTERPRISE_2: "deprecated_enterprise",
  DEPRECATED_EDU: "edu",
  DEPRECATED_EDU_2: "deprecated_edu",
} as const;

type SkuLike = string | null | undefined;

export function initSkuRuntimeChunk(): void {}

export function initSkuHelpersChunk(): void {}

function isEducationSku(sku: SkuLike) {
  return (
    sku === skuValues.EDUCATION_CBP ||
    sku === skuValues.DEPRECATED_EDU ||
    sku === skuValues.DEPRECATED_EDU_2 ||
    sku === "k12"
  );
}

function isQuorumSku(sku: SkuLike) {
  return sku === skuValues.QUORUM;
}

export function isUsageBasedSku(sku: SkuLike) {
  return (
    sku === skuValues.SELF_SERVE_BUSINESS_USAGE_BASED ||
    sku === skuValues.ENTERPRISE_CBP_USAGE_BASED
  );
}

export function isSelfServeBusinessSku(sku: SkuLike) {
  return (
    sku === skuValues.SELF_SERVE_BUSINESS ||
    sku === skuValues.SELF_SERVE_BUSINESS_USAGE_BASED
  );
}

export function isNonQuorumEnterpriseSku(sku: SkuLike) {
  return isEnterpriseLikeSku(sku) && !isQuorumSku(sku);
}

export function isEnterpriseLikeSku(sku: SkuLike) {
  return (
    sku === "business" ||
    sku === "enterprise" ||
    sku === "enterprise_cbp_usage_based" ||
    sku === "deprecated_enterprise" ||
    sku === "hc" ||
    sku === "finserv" ||
    isEducationSku(sku) ||
    isQuorumSku(sku)
  );
}

export const Sku = skuValues;
