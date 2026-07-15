// Restored from ref/webview/assets/onboarding-login-content-BYCq-uLw.js
// Updated with exports from ref/webview/assets/onboarding-login-content-BFxktxIt.js.
// Login request helpers and onboarding login controls.
import type { ChangeEvent, ReactNode } from "react";
import { loadStatsigCore } from "../vendor/statsig-current-runtime";
import { FormattedMessage, useIntl } from "../vendor/react-intl";
import {
  LOCAL_HOST_ID,
  sendAppServerRequest,
} from "../boundaries/use-host-config.facade";
import { Button } from "../ui/button";
import { STATSIG_CLIENT_KEY } from "../utils/statsig-client-key";
const DESKTOP_AUTH_PATH = "/codex/desktop-auth";
const DESKTOP_AUTH_URL = `https://chatgpt.com${DESKTOP_AUTH_PATH}`;
const CODEX_ORIGIN_STABLE_ID_PARAM = "codex_origin_stable_id";
const CODEX_STREAMLINED_LOGIN_PARAM = "codex_streamlined_login";
const SOURCE_SURFACE_STABLE_ID_PARAM = "source_surface_stable_id";
type StatsigCore = {
  StableID: {
    get: (sdkKey: string) => string | null;
  };
};
const statsigCore = loadStatsigCore() as StatsigCore;
export type ChatGptLoginRequestOptions = {
  appBrand?: string;
  hostId?: string;
  signal?: AbortSignal;
  useHostedLoginSuccessPage?: boolean;
  useStreamlinedLogin?: boolean;
};
export type BuildChatGptAuthUrlOptions = {
  authUrl: string;
  includeCodexOriginStableId?: boolean;
  sourceSurfaceStableId?: string | null;
  useDesktopAuth?: boolean;
  useStreamlinedLoginUx?: boolean;
};
export type DeviceCodeLoginRequestOptions = {
  signal?: AbortSignal;
};
export type OnboardingLoginContentProps = {
  apiKeySecondaryActionLabel: ReactNode;
  apiKeyValue: string;
  isApiKeyEntryVisible: boolean;
  isApiKeySignInPending: boolean;
  isChatGptSignInPending: boolean;
  onApiKeySecondaryAction: () => void;
  onApiKeySubmit: () => void;
  onApiKeyValueChange: (value: string) => void;
  onChatGptSignIn: () => void;
  onShowApiKeyEntry: () => void;
};
export function initChatGptLoginRequestChunk(): void {}
export async function startChatGptLogin({
  appBrand,
  hostId = LOCAL_HOST_ID as string,
  signal,
  useHostedLoginSuccessPage,
  useStreamlinedLogin,
}: ChatGptLoginRequestOptions) {
  const abortController = createAbortControllerFromSignal(signal);
  return hostId === LOCAL_HOST_ID
    ? sendAppServerRequest("login-with-chatgpt", {
        abortController,
        ...(useHostedLoginSuccessPage && appBrand != null ? { appBrand } : {}),
        useHostedLoginSuccessPage,
        useStreamlinedLogin,
      })
    : sendAppServerRequest("login-with-chatgpt-for-host", {
        abortController,
        hostId,
        ...(useHostedLoginSuccessPage && appBrand != null ? { appBrand } : {}),
        useHostedLoginSuccessPage,
        useStreamlinedLogin,
      });
}
export function initChatGptAuthUrlChunk(): void {}
export function buildChatGptAuthUrl({
  authUrl,
  sourceSurfaceStableId = statsigCore.StableID.get(STATSIG_CLIENT_KEY),
  includeCodexOriginStableId = false,
  useDesktopAuth,
  useStreamlinedLoginUx,
}: BuildChatGptAuthUrlOptions): string {
  if (!sourceSurfaceStableId && !useDesktopAuth && !useStreamlinedLoginUx) {
    return authUrl;
  }
  try {
    const parsedAuthUrl = new URL(authUrl);
    if (parsedAuthUrl.pathname === DESKTOP_AUTH_PATH) {
      const nestedAuthorizeUrl =
        parsedAuthUrl.searchParams.get("authorize_url");
      if (sourceSurfaceStableId && nestedAuthorizeUrl) {
        const parsedNestedAuthorizeUrl = new URL(nestedAuthorizeUrl);
        setStableIdParams(
          parsedNestedAuthorizeUrl,
          sourceSurfaceStableId,
          includeCodexOriginStableId,
        );
        parsedAuthUrl.searchParams.set(
          "authorize_url",
          parsedNestedAuthorizeUrl.toString(),
        );
      }
      if (useStreamlinedLoginUx) {
        parsedAuthUrl.searchParams.set(CODEX_STREAMLINED_LOGIN_PARAM, "true");
      }
      return parsedAuthUrl.toString();
    }
    if (sourceSurfaceStableId) {
      setStableIdParams(
        parsedAuthUrl,
        sourceSurfaceStableId,
        includeCodexOriginStableId,
      );
    }
    if (useStreamlinedLoginUx) {
      parsedAuthUrl.searchParams.set(CODEX_STREAMLINED_LOGIN_PARAM, "true");
    }
    if (!useDesktopAuth) return parsedAuthUrl.toString();
    const desktopAuthUrl = new URL(DESKTOP_AUTH_URL);
    desktopAuthUrl.searchParams.set("authorize_url", parsedAuthUrl.toString());
    if (useStreamlinedLoginUx) {
      desktopAuthUrl.searchParams.set(CODEX_STREAMLINED_LOGIN_PARAM, "true");
    }
    return desktopAuthUrl.toString();
  } catch {
    return authUrl;
  }
}
export function startChatGptDeviceCodeLogin({
  signal,
}: DeviceCodeLoginRequestOptions = {}) {
  return sendAppServerRequest("login-with-chatgpt-device-code", {
    abortController: createAbortControllerFromSignal(signal),
  });
}
function createAbortControllerFromSignal(signal?: AbortSignal) {
  const abortController = new AbortController();
  if (signal == null) return abortController;
  if (signal.aborted) {
    abortController.abort();
    return abortController;
  }
  signal.addEventListener("abort", () => abortController.abort(), {
    once: true,
  });
  return abortController;
}
export function initOnboardingLoginContentChunk(): void {}
function setStableIdParams(
  url: URL,
  sourceSurfaceStableId: string,
  includeCodexOriginStableId: boolean,
) {
  url.searchParams.set(SOURCE_SURFACE_STABLE_ID_PARAM, sourceSurfaceStableId);
  if (includeCodexOriginStableId) {
    url.searchParams.set(CODEX_ORIGIN_STABLE_ID_PARAM, sourceSurfaceStableId);
  }
}
export function OnboardingLoginContent({
  apiKeyValue,
  isApiKeyEntryVisible,
  isApiKeySignInPending,
  isChatGptSignInPending,
  onApiKeySecondaryAction,
  onApiKeySubmit,
  onApiKeyValueChange,
  onChatGptSignIn,
  onShowApiKeyEntry,
  apiKeySecondaryActionLabel,
}: OnboardingLoginContentProps) {
  const intl = useIntl();
  if (isApiKeyEntryVisible) {
    const apiKeyPlaceholder = intl.formatMessage({
      id: "electron.onboarding.login.apikey.placeholder",
      defaultMessage: "sk-…",
      description: "Placeholder for API key input on desktop onboarding",
    });
    const isSubmitDisabled =
      apiKeyValue.trim().length === 0 || isApiKeySignInPending;
    const handleApiKeyValueChange = (event: ChangeEvent<HTMLInputElement>) => {
      onApiKeyValueChange(event.target.value);
    };
    return (
      <div className="flex w-full flex-col gap-3">
        <label className="text-base font-medium text-token-foreground">
          <FormattedMessage
            id="electron.onboarding.login.apikey.label"
            defaultMessage="OpenAI API key"
            description="Label for API key input on desktop onboarding"
          />
          <input
            autoFocus={true}
            className="mt-2 w-full rounded-xl border border-token-border bg-token-input-background px-4 py-2.5 focus:ring-2 focus:ring-black/15 focus:outline-none"
            placeholder={apiKeyPlaceholder}
            value={apiKeyValue}
            onChange={handleApiKeyValueChange}
          />
        </label>
        <div className="flex items-center gap-2">
          <Button
            color="secondary"
            className="flex flex-1 justify-center py-2"
            onClick={onApiKeySecondaryAction}
          >
            {apiKeySecondaryActionLabel}
          </Button>
          <Button
            className="flex flex-1 justify-center py-2"
            onClick={onApiKeySubmit}
            disabled={isSubmitDisabled}
            loading={isApiKeySignInPending}
          >
            <FormattedMessage
              id="electron.onboarding.login.apikey.continue"
              defaultMessage="Continue"
              description="Continue button label for API key sign-in on desktop onboarding"
            />
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className="flex w-full max-w-[200px] flex-col gap-3">
      <Button
        color="primary"
        className="w-full justify-center py-2.5"
        onClick={onChatGptSignIn}
      >
        {isChatGptSignInPending ? (
          <FormattedMessage
            id="electron.onboarding.login.chatgpt.cancel"
            defaultMessage="Cancel sign-in"
            description="Cancel button label while ChatGPT sign-in is in progress on desktop onboarding"
          />
        ) : (
          <FormattedMessage
            id="electron.onboarding.login.chatgpt.continue"
            defaultMessage="Continue with ChatGPT"
            description="Button label to sign in with ChatGPT on desktop onboarding"
          />
        )}
      </Button>
      {isChatGptSignInPending ? null : (
        <Button
          color="outline"
          className="w-full justify-center py-2.5"
          onClick={onShowApiKeyEntry}
        >
          <FormattedMessage
            id="electron.onboarding.login.apikey.open"
            defaultMessage="Enter API key"
            description="Button label to open API key entry on desktop onboarding"
          />
        </Button>
      )}
    </div>
  );
}
