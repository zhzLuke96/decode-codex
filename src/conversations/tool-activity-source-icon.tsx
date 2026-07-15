// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Source glyphs for collapsed MCP tool-activity summaries: browser-use /
// computer-use marks, native desktop app logos, and a generic connector logo
// fallback (localConversation domain).
import type { SVGProps } from "react";
import clsx from "clsx";
import {
  useRpcQuery,
  defineRpcQuery,
  rpcClient,
  rpcTimeConstants,
  useNativeAppIcon,
  ConnectorLogoImage,
  AppPlaceholderIcon,
  NodeReplIcon,
} from "../boundaries/onboarding-commons-externals.facade";

const NODE_REPL_SOURCE_KEY = "server:node_repl";

const SOURCE_ICON_CLASS_NAME = clsx(
  "icon-xs shrink-0 rounded-2xs bg-token-main-surface-primary object-contain",
  "text-token-text-secondary",
);

export type ToolActivitySource = {
  key: string;
  name?: string | null;
  logoUrl?: string | null;
  logoUrlDark?: string | null;
  nativeAppReference?: NativeAppReference | null;
};

export type NativeAppReference =
  | { kind: "appId"; appId: string }
  | { kind: "displayName"; displayName: string };

// QG: the Browser Use source glyph.
export function BrowserUseGlyphIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.62561 8.79541L9.77112 8.82764L14.1774 10.1499C15.1066 10.4288 15.1641 11.7231 14.2633 12.0835L12.4684 12.8013L11.7506 14.5962C11.3903 15.4971 10.096 15.4395 9.81702 14.5103L8.49475 10.104C8.27544 9.37127 8.90238 8.68518 9.62561 8.79541ZM10.8014 14.1382L11.4977 12.4009L11.5416 12.3062C11.6544 12.0911 11.8405 11.9217 12.068 11.8306L13.8053 11.1343L9.51331 9.84619L10.8014 14.1382Z"
        fill="currentColor"
      />
      <path
        d="M9.93323 2.14111C10.6945 2.14111 11.297 2.14156 11.7819 2.18115C12.2729 2.22127 12.6895 2.30471 13.0699 2.49854C13.6861 2.81247 14.1876 3.3131 14.5016 3.9292C14.6954 4.3096 14.7788 4.72637 14.819 5.21729C14.8586 5.70219 14.858 6.30549 14.858 7.06689V7.6665C14.858 7.95634 14.6234 8.19172 14.3336 8.19189C14.0437 8.19189 13.8082 7.95645 13.8082 7.6665V7.06689C13.8082 6.28823 13.8074 5.73544 13.7721 5.30322C13.7373 4.87739 13.6718 4.61446 13.566 4.40674C13.3527 3.98808 13.012 3.6474 12.5934 3.43408C12.3856 3.32822 12.1229 3.26187 11.6969 3.22705C11.2647 3.19174 10.712 3.19189 9.93323 3.19189H6.06702C5.28839 3.19189 4.73555 3.19175 4.30334 3.22705C3.87742 3.26185 3.6146 3.32829 3.40686 3.43408C2.9882 3.6474 2.64752 3.98808 2.4342 4.40674C2.32841 4.61448 2.26197 4.8773 2.22717 5.30322C2.19187 5.73543 2.19202 6.28826 2.19202 7.06689V8.99951C2.19202 9.74646 2.19168 10.2767 2.22424 10.6919C2.25636 11.1013 2.31809 11.3543 2.41565 11.5552C2.63356 12.0038 2.99542 12.3665 3.44397 12.5845C3.64482 12.682 3.89884 12.7428 4.30823 12.7749C4.72328 12.8074 5.25301 12.8081 5.99963 12.8081C6.28958 12.8081 6.52502 13.0435 6.52502 13.3335C6.52485 13.6233 6.28947 13.8579 5.99963 13.8579C5.26963 13.8579 4.69181 13.8583 4.2262 13.8218C3.75478 13.7848 3.35407 13.7076 2.98596 13.5288C2.32548 13.208 1.79118 12.6746 1.47034 12.0142C1.29156 11.6461 1.21435 11.2454 1.17737 10.7739C1.14084 10.3082 1.14124 9.72981 1.14124 8.99951V7.06689C1.14124 6.30548 1.14166 5.70219 1.18127 5.21729C1.2214 4.72638 1.30484 4.30959 1.49866 3.9292C1.81259 3.3133 2.31342 2.81246 2.92932 2.49854C3.30972 2.30471 3.72651 2.22128 4.21741 2.18115C4.70231 2.14153 5.30561 2.14111 6.06702 2.14111H9.93323Z"
        fill="currentColor"
      />
      <path
        d="M5.13803 4.65356C5.51358 4.65356 5.81772 4.9577 5.81772 5.33325C5.81771 5.7088 5.51358 6.01294 5.13803 6.01294C4.76259 6.01281 4.45835 5.70872 4.45834 5.33325C4.45834 4.95778 4.76258 4.65369 5.13803 4.65356Z"
        fill="currentColor"
      />
      <path
        d="M10.6667 4.7994C10.9612 4.7994 11.2005 5.0387 11.2005 5.33325C11.2005 5.6278 10.9612 5.86711 10.6667 5.86711H8.00001C7.70546 5.86711 7.46616 5.6278 7.46616 5.33325C7.46616 5.0387 7.70546 4.7994 8.00001 4.7994H10.6667Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function initBrowserUseGlyphIconChunk(): void {
  void BrowserUseGlyphIcon;
}

// tK: the Computer Use source glyph.
export function ComputerUseGlyphIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.2878 9.46029L11.4421 9.49545L17.8913 11.43L18.0642 11.4974C18.8215 11.8649 18.8705 12.9544 18.1491 13.388L17.9821 13.4701L15.1872 14.5872L14.07 17.3822C13.7134 18.2734 12.4912 18.2756 12.0974 17.4642L12.03 17.2913L10.0954 10.8421C9.8634 10.0687 10.5245 9.34418 11.2878 9.46029ZM13.0984 16.2288L13.9929 13.9954L14.0388 13.8949C14.1579 13.6675 14.3549 13.4891 14.5954 13.3929L16.8288 12.4984L11.5007 10.9007L13.0984 16.2288ZM6.50362 12.9749C6.76326 12.7153 7.18434 12.7154 7.44405 12.9749C7.70375 13.2346 7.70375 13.6557 7.44405 13.9154L5.67648 15.6829C5.41678 15.9426 4.99574 15.9426 4.73605 15.6829C4.47652 15.4232 4.4764 15.0022 4.73605 14.7425L6.50362 12.9749ZM3.43722 7.3265L5.85226 7.97299L5.97823 8.02084C6.25482 8.1591 6.40594 8.47712 6.32296 8.78744C6.23981 9.09774 5.94995 9.298 5.64132 9.27963L5.50851 9.25814L3.09347 8.61068L2.96749 8.56283C2.6908 8.42452 2.53958 8.10666 2.62276 7.79623C2.70597 7.4859 2.99571 7.28652 3.3044 7.30502L3.43722 7.3265ZM15.447 4.05111C15.7051 3.88059 16.0556 3.90894 16.2829 4.13607C16.5426 4.39577 16.5426 4.8168 16.2829 5.0765L14.5153 6.84408C14.2556 7.10378 13.8346 7.10378 13.5749 6.84408C13.3154 6.58437 13.3153 6.16329 13.5749 5.90365L15.3425 4.13607L15.447 4.05111ZM8.3962 2.02279C8.75096 1.92773 9.1156 2.13874 9.21065 2.49349L9.85812 4.90853L9.8796 5.04135C9.89797 5.34998 9.69771 5.63984 9.38741 5.72299C9.07711 5.80592 8.75905 5.65484 8.62081 5.37826L8.57296 5.25228L7.92648 2.83724L7.90499 2.70443C7.8865 2.39577 8.08593 2.10603 8.3962 2.02279Z"
        fill="currentColor"
      />
    </svg>
  );
}

// cK: resolve the native desktop app metadata referenced by an MCP source.
export function useNativeDesktopAppForSource(
  reference: NativeAppReference | null | undefined,
) {
  const byBundleId = useRpcQuery(
    nativeDesktopAppByBundleIdQuery,
    reference?.kind === "appId" ? reference.appId : null,
  );
  const byDisplayName = useRpcQuery(
    nativeDesktopAppByDisplayNameQuery,
    reference?.kind === "displayName" ? reference.displayName : null,
  );
  return byBundleId.data ?? byDisplayName.data ?? null;
}

const nativeDesktopAppByBundleIdQuery = defineRpcQuery(
  rpcClient,
  "native-desktop-app-by-bundle-id",
  (bundleId: string | null) => ({
    enabled: bundleId != null,
    params: bundleId == null ? undefined : { bundleId },
    refetchOnWindowFocus: false,
    select: (result: any) => result.app,
    staleTime: rpcTimeConstants.FIVE_MINUTES,
  }),
);

const nativeDesktopAppByDisplayNameQuery = defineRpcQuery(
  rpcClient,
  "native-desktop-apps",
  (displayName: string | null) => ({
    cacheKey: ["computer-use-tool-row-display-name", displayName],
    enabled: displayName != null,
    params: { order: "usage" },
    refetchOnWindowFocus: false,
    select: (result: any) =>
      result.apps.find(
        (app: any) =>
          app.displayName.toLowerCase() === displayName?.toLowerCase(),
      ) ?? null,
    staleTime: rpcTimeConstants.FIVE_MINUTES,
  }),
);

// Eat: logo for an MCP source backed by a native desktop app reference.
export function NativeAppToolActivityIcon({
  source,
}: {
  source: ToolActivitySource;
}) {
  const app = useNativeDesktopAppForSource(source.nativeAppReference);
  const { iconSmall } = useNativeAppIcon({ appPath: app?.appPath ?? null });
  const alt = app?.displayName ?? source.name ?? "";
  return (
    <ConnectorLogoImage
      alt={alt}
      className="icon-xs shrink-0 scale-[1.15] rounded-2xs bg-token-main-surface-primary object-contain"
      logoUrl={iconSmall}
      logoDarkUrl={null}
      fallback={
        <ComputerUseGlyphIcon className="icon-xs shrink-0 text-token-text-secondary" />
      }
    />
  );
}

// Tat: pick the right glyph for a collapsed MCP tool-activity source.
export function ToolActivitySourceIcon({
  source,
}: {
  source: ToolActivitySource;
}) {
  if (source.key === "browser-use") {
    return (
      <BrowserUseGlyphIcon
        aria-hidden={true}
        className={SOURCE_ICON_CLASS_NAME}
      />
    );
  }
  if (source.key === "computer-use") {
    return (
      <ComputerUseGlyphIcon
        aria-hidden={true}
        className={SOURCE_ICON_CLASS_NAME}
      />
    );
  }
  if (source.nativeAppReference != null) {
    return <NativeAppToolActivityIcon source={source} />;
  }
  if (source.key === NODE_REPL_SOURCE_KEY) {
    return (
      <NodeReplIcon aria-hidden={true} className={SOURCE_ICON_CLASS_NAME} />
    );
  }
  return (
    <ConnectorLogoImage
      alt={source.name}
      className={SOURCE_ICON_CLASS_NAME}
      knownAppId={source.name}
      logoUrl={source.logoUrl}
      logoDarkUrl={source.logoUrlDark}
      fallback={
        <AppPlaceholderIcon className="icon-xs shrink-0 text-token-text-secondary" />
      }
    />
  );
}
