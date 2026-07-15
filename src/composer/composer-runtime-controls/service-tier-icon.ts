// Restored from ref/webview/assets/service-tier-icons-C-0I5QrR.js
// Service-tier icon selector used by composer controls.
import {
  FastServiceTierIcon,
  initFastServiceTierIcon,
  initUltraFastServiceTierIcon,
  UltraFastServiceTierIcon,
} from "../service-tier-speed-icon";
import {
  ServiceTierCopyIcon,
  ServiceTierCopyIcon2,
} from "../../icons/service-tier-copy";

export function getServiceTierIcon(
  serviceTier: string | null,
): typeof ServiceTierCopyIcon | typeof ServiceTierCopyIcon2 | undefined {
  switch (serviceTier) {
    case "fast":
      return ServiceTierCopyIcon2;
    case "ultrafast":
      return ServiceTierCopyIcon;
    case null:
      return undefined;
  }
}

export function initServiceTierSpeedIconSelectorChunk(): void {
  initFastServiceTierIcon();
  initUltraFastServiceTierIcon();
}

export function getServiceTierSpeedIconComponent(
  serviceTier: string | null,
): typeof FastServiceTierIcon | typeof UltraFastServiceTierIcon | undefined {
  switch (serviceTier) {
    case "fast":
      return FastServiceTierIcon;
    case "ultrafast":
      return UltraFastServiceTierIcon;
    case null:
      return undefined;
  }
}
