// Restored from ref/webview/assets/use-codex-pricing-url-En1bzzbT.js
import * as React from "react";
import { useStatsigClient } from "../vendor/statsig-current-runtime";
import {
  CHATGPT_PRICING_HASH_URL,
  CHATGPT_PRICING_URL,
} from "./links-bd-mmkun-d";
type UseCodexPricingUrlOptions = {
  logExposure: boolean;
};
const LOGGED_IN_PRICING_LAYER_ID = "337040058";
const SHOW_LOGGED_IN_PRICING_PAGE_PARAM = "show_logged_in_pricing_page";
export function useCodexPricingUrl({ logExposure }: UseCodexPricingUrlOptions) {
  const { client } = useStatsigClient();
  return React.useCallback(
    () =>
      client
        .getLayer(LOGGED_IN_PRICING_LAYER_ID, {
          disableExposureLog: !logExposure,
        })
        .get(SHOW_LOGGED_IN_PRICING_PAGE_PARAM, false)
        ? CHATGPT_PRICING_HASH_URL
        : CHATGPT_PRICING_URL,
    [client, logExposure],
  );
}
