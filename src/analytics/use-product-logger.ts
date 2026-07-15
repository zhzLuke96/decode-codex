// Restored from ref/webview/assets/product-logger-ibAP2Yp2.js
// Hook for reading the scoped product analytics logger.
import { useAppScopeValue } from "../boundaries/app-scope";
import { __productLoggerR, type ProductLogger } from "./product-logger";

export function useProductLogger(): ProductLogger {
  return useAppScopeValue<ProductLogger>(__productLoggerR);
}

