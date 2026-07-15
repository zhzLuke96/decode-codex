// Restored from ref/webview/assets/connector-logo-CxTweOVv.js
import React, { type ReactElement } from "react";
import clsx from "clsx";
import {
  parseConnectorLogoUrl,
  useConnectorLogoDataUrl,
  type AppConnectApp,
  type ConnectorLogoRequest,
} from "../../connectors/apps-queries";
import {
  getKnownAppIconByName,
  resolveKnownAppIcon,
} from "../../icons/known-app-icon";
import { useIsDark } from "../use-is-dark";
type ConnectorLogoProps = {
  alt: string;
  appInfo?: AppConnectApp | null;
  className?: string;
  fallback: ReactElement<{
    className?: string;
  }>;
  knownAppId?: string | null;
  logoDarkUrl?: string | null;
  logoUrl?: string | null;
};
type ImageLogoProps = {
  alt: string;
  className?: string;
  fallback: ReactElement;
  src: string;
};
type ResolvedConnectorLogoProps = {
  alt: string;
  className?: string;
  connectorLogoRequest: ConnectorLogoRequest;
  fallback: ReactElement;
};
export function ConnectorLogo({
  alt,
  appInfo,
  className,
  fallback,
  knownAppId,
  logoDarkUrl,
  logoUrl,
}: ConnectorLogoProps) {
  const isDarkTheme = useIsDark() === true;
  const imageClassName = clsx("rounded-2xs", className);
  const KnownIcon = resolveConnectorKnownIcon({
    appInfo,
    knownAppId,
  });
  if (KnownIcon != null) {
    return <KnownIcon aria-hidden={true} className={className} />;
  }
  const selectedLogoUrl = selectLogoUrl({
    logoUrl: logoUrl ?? appInfo?.logoUrl,
    logoDarkUrl: logoDarkUrl ?? appInfo?.logoUrlDark,
    isDarkTheme,
  });
  const fallbackLogo = React.cloneElement(fallback, {
    className: clsx(imageClassName, fallback.props.className),
  });
  if (selectedLogoUrl == null) return fallbackLogo;
  const connectorLogoRequest = parseConnectorLogoUrl(selectedLogoUrl);
  if (connectorLogoRequest != null) {
    return (
      <ResolvedConnectorLogo
        alt={alt}
        className={imageClassName}
        connectorLogoRequest={connectorLogoRequest}
        fallback={fallbackLogo}
      />
    );
  }
  return (
    <ImageLogo
      key={selectedLogoUrl}
      alt={alt}
      className={imageClassName}
      fallback={fallbackLogo}
      src={selectedLogoUrl}
    />
  );
}
function resolveConnectorKnownIcon({
  appInfo,
  knownAppId,
}: {
  appInfo?: AppConnectApp | null;
  knownAppId?: string | null;
}) {
  if (appInfo != null) {
    const appIcon = resolveKnownAppIcon({
      id: appInfo.id,
      name: appInfo.name ?? appInfo.id,
      pluginDisplayNames: Array.isArray(appInfo.pluginDisplayNames)
        ? (appInfo.pluginDisplayNames as string[])
        : [],
    });
    if (appIcon != null) return appIcon;
  }
  return knownAppId == null ? null : getKnownAppIconByName(knownAppId);
}
function selectLogoUrl({
  logoUrl,
  logoDarkUrl,
  isDarkTheme,
}: {
  isDarkTheme: boolean;
  logoDarkUrl?: string | null;
  logoUrl?: string | null;
}): string | null {
  const lightLogoUrl = normalizeLogoUrl(logoUrl);
  const darkLogoUrl = normalizeLogoUrl(logoDarkUrl);
  return isDarkTheme
    ? (darkLogoUrl ?? lightLogoUrl)
    : (lightLogoUrl ?? darkLogoUrl);
}
function normalizeLogoUrl(logoUrl?: string | null): string | null {
  const trimmedLogoUrl = logoUrl?.trim();
  return trimmedLogoUrl == null || trimmedLogoUrl.length === 0
    ? null
    : trimmedLogoUrl;
}
function ResolvedConnectorLogo({
  alt,
  className,
  connectorLogoRequest,
  fallback,
}: ResolvedConnectorLogoProps) {
  const resolvedLogoUrl = useConnectorLogoDataUrl(connectorLogoRequest);
  if (resolvedLogoUrl == null) return fallback;
  return (
    <ImageLogo
      key={resolvedLogoUrl}
      alt={alt}
      className={className}
      fallback={fallback}
      src={resolvedLogoUrl}
    />
  );
}
function ImageLogo({ alt, className, fallback, src }: ImageLogoProps) {
  const [hasError, setHasError] = React.useState(false);
  if (hasError) return fallback;
  return (
    <img
      alt={alt}
      className={clsx("object-contain", className)}
      src={src}
      onError={() => setHasError(true)}
    />
  );
}
