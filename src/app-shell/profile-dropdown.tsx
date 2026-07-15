// Restored from ref/webview/assets/app-initial~app-main~automations-page-BfqUlSo6.js
// Account/profile dropdown for the app header.
import React, { type SVGProps } from "react";
import { useAuth } from "../auth/use-auth";
import type { AuthMethod } from "../auth/use-auth-state";
import {
  LOCAL_HOST_ID,
  sendAppServerRequest,
} from "../boundaries/use-host-config.facade";
import { vscodeApiF as vscodeBridge } from "../boundaries/vscode-api";
import { openGiftCreditsInBrowser } from "../features/gift-credits-runtime";
import { useProfileDropdownEntryPointVisible } from "../features/profile-visibility";
import { Button } from "../ui/button";
import { Dropdown, DropdownMenu } from "../ui/dropdown";
import { FormattedMessage, useIntl } from "../vendor/react-intl";

const SETTINGS_ROUTE = "/settings";
const PROFILE_ROUTE = "/settings/profile";
const USAGE_ROUTE = "/settings/usage";

type ProfileDropdownAuth = ReturnType<typeof useAuth> & {
  accountId?: string | null;
  isCopilotApiAvailable?: boolean;
  openAIAuth?: AuthMethod | null;
  userId?: string | null;
};

export type ProfileDropdownProps = {
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  triggerButton?: React.ReactNode;
};

export function ProfileDropdown({
  triggerButton,
  open,
  onOpenChange,
}: ProfileDropdownProps) {
  const intl = useIntl();
  const auth = useAuth() as ProfileDropdownAuth;
  const isProfileVisible = useProfileDropdownEntryPointVisible();
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const currentOpen = open ?? uncontrolledOpen;
  const isChatGptAuth = auth.authMethod === "chatgpt";
  const isCopilotAuth = auth.authMethod === "copilot";
  const isApiKeyAuth = auth.authMethod === "apikey";
  const isAmazonBedrockAuth = auth.authMethod === "amazonBedrock";
  const canSwitchToOpenAI = !isChatGptAuth && auth.openAIAuth != null;
  const canSwitchToCopilot =
    !isCopilotAuth && auth.isCopilotApiAvailable === true;
  const shouldShowSignIn =
    !isChatGptAuth &&
    !isApiKeyAuth &&
    !isAmazonBedrockAuth &&
    auth.requiresAuth;

  function setOpen(nextOpen: boolean) {
    if (open === undefined) setUncontrolledOpen(nextOpen);
    onOpenChange?.(nextOpen);
  }

  function closeMenu() {
    setOpen(false);
  }

  function navigateToRoute(path: string) {
    closeMenu();
    vscodeBridge.dispatchHostMessage({
      type: "navigate-to-route",
      path,
    });
  }

  function showSettings(section = "general") {
    closeMenu();
    vscodeBridge.dispatchMessage("show-settings", {
      section,
    });
    vscodeBridge.dispatchHostMessage({
      type: "navigate-to-route",
      path: SETTINGS_ROUTE,
    });
  }

  function openKeyboardShortcuts() {
    closeMenu();
    vscodeBridge.dispatchMessage("open-keyboard-shortcuts", {});
  }

  function switchAuthMethod(method: AuthMethod | null) {
    closeMenu();
    auth.setAuthMethod(method);
  }

  async function logOut() {
    closeMenu();
    const confirmed = window.confirm(
      intl.formatMessage({
        id: "codex.profileDropdown.logOutConfirmation.title",
        defaultMessage: "Log out?",
        description:
          "Title for the confirmation dialog shown before logging out from the profile dropdown",
      }),
    );
    if (!confirmed) return;
    await sendAppServerRequest("logout", {
      hostId: LOCAL_HOST_ID,
    }).catch(() => undefined);
    auth.setAuthMethod(null);
    vscodeBridge.dispatchHostMessage({
      type: "navigate-to-route",
      path: "/login",
    });
  }

  const trigger = triggerButton ?? (
    <Button
      aria-label={intl.formatMessage({
        id: "codex.header.settingsTooltip",
        defaultMessage: "Settings",
        description: "Tooltip text for opening settings",
      })}
      color="ghost"
      size="icon"
    >
      <UserCircleIcon className="icon-xs" />
    </Button>
  );

  return (
    <DropdownMenu
      align="end"
      contentWidth="panel"
      open={currentOpen}
      onOpenChange={setOpen}
      triggerButton={trigger}
    >
      <div className="flex w-full min-w-0 flex-col gap-0">
        <Dropdown.Section className="flex flex-col">
          {renderAccountStatus(auth, {
            isAmazonBedrockAuth,
            isApiKeyAuth,
            isChatGptAuth,
            isCopilotAuth,
          })}
          {canSwitchToOpenAI ? (
            <Dropdown.Item
              LeftIcon={SwitchAccountIcon}
              onClick={() => switchAuthMethod(auth.openAIAuth ?? "chatgpt")}
            >
              <FormattedMessage
                id="codex.profileDropdown.switchToOpenAIAccount"
                defaultMessage="Use OpenAI account"
                description="Label showing the option to switch to OpenAI authentication"
              />
            </Dropdown.Item>
          ) : null}
          {canSwitchToCopilot ? (
            <Dropdown.Item
              LeftIcon={SwitchAccountIcon}
              onClick={() => switchAuthMethod("copilot")}
            >
              <FormattedMessage
                id="codex.profileDropdown.switchToCopilotAccount"
                defaultMessage="Use Copilot account"
                description="Label showing the option to switch to Copilot authentication"
              />
            </Dropdown.Item>
          ) : null}
          {shouldShowSignIn ? (
            <Dropdown.Item
              LeftIcon={SignInIcon}
              onClick={() => navigateToRoute("/login")}
            >
              <FormattedMessage
                id="codex.profileDropdown.signInWithOpenAI"
                defaultMessage="Sign in with ChatGPT"
                description="Profile menu item to sign in with ChatGPT"
              />
            </Dropdown.Item>
          ) : null}
        </Dropdown.Section>

        <Dropdown.Separator />

        <Dropdown.Section className="flex flex-col">
          {isProfileVisible ? (
            <Dropdown.Item
              LeftIcon={UserCircleIcon}
              onClick={() => navigateToRoute(PROFILE_ROUTE)}
            >
              <FormattedMessage
                id="codex.profileDropdown.profile"
                defaultMessage="Profile"
                description="Menu item to open the Codex profile page"
              />
            </Dropdown.Item>
          ) : null}
          <Dropdown.Item
            LeftIcon={SettingsIcon}
            onClick={() => navigateToRoute(SETTINGS_ROUTE)}
          >
            <FormattedMessage
              id="codex.profileDropdown.settingsPage"
              defaultMessage="Settings"
              description="Menu item to open Codex settings page"
            />
          </Dropdown.Item>
          <Dropdown.Item LeftIcon={SettingsIcon} onClick={() => showSettings()}>
            <FormattedMessage
              id="codex.profileDropdown.codexSettings"
              defaultMessage="{appName} settings"
              description="Menu item to view Codex settings"
              values={{
                appName: "Codex",
              }}
            />
          </Dropdown.Item>
          <Dropdown.Item
            LeftIcon={GiftIcon}
            onClick={() => {
              closeMenu();
              openGiftCreditsInBrowser();
            }}
          >
            <FormattedMessage
              id="codex.profileDropdown.giftCredits"
              defaultMessage="Gift credits"
              description="Persistent account-menu item that opens the ChatGPT gift credits purchase flow"
            />
          </Dropdown.Item>
          {isChatGptAuth ? (
            <Dropdown.Item
              LeftIcon={UsageIcon}
              onClick={() => navigateToRoute(USAGE_ROUTE)}
            >
              <FormattedMessage
                id="codex.profileDropdown.getPlus"
                defaultMessage="Upgrade for higher limits"
                description="Menu item in the profile dropdown to upgrade a free account for higher limits"
              />
            </Dropdown.Item>
          ) : null}
          <Dropdown.Item
            LeftIcon={KeyboardIcon}
            onClick={openKeyboardShortcuts}
          >
            <FormattedMessage
              id="codex.profileDropdown.keyboardShortcuts"
              defaultMessage="Keyboard shortcuts"
              description="Menu item to open keyboard shortcuts filtered to this extension"
            />
          </Dropdown.Item>
        </Dropdown.Section>

        {auth.requiresAuth ? (
          <>
            <Dropdown.Separator />
            <Dropdown.Section className="flex flex-col">
              <Dropdown.Item
                LeftIcon={LogOutIcon}
                onClick={() => void logOut()}
              >
                <FormattedMessage
                  id="codex.profileDropdown.logOut"
                  defaultMessage="Log out"
                  description="Menu item to log out of ChatGPT"
                />
              </Dropdown.Item>
            </Dropdown.Section>
          </>
        ) : null}
      </div>
    </DropdownMenu>
  );
}

function renderAccountStatus(
  auth: ProfileDropdownAuth,
  state: {
    isAmazonBedrockAuth: boolean;
    isApiKeyAuth: boolean;
    isChatGptAuth: boolean;
    isCopilotAuth: boolean;
  },
) {
  if (state.isChatGptAuth) {
    return (
      <>
        {auth.email ? (
          <Dropdown.Item LeftIcon={MailIcon} disabled>
            {auth.email}
          </Dropdown.Item>
        ) : null}
        <Dropdown.Item LeftIcon={UserCircleIcon} disabled>
          <FormattedMessage
            id="codex.profileDropdown.personalAccountTitle"
            defaultMessage="Personal account"
            description="Label for a personal account"
          />
        </Dropdown.Item>
      </>
    );
  }
  if (state.isApiKeyAuth) {
    return (
      <Dropdown.Item LeftIcon={KeyIcon} disabled>
        <FormattedMessage
          id="codex.profileDropdown.apiKeyAuth"
          defaultMessage="Logged in with API key"
          description="Label indicating the user is authenticated with an API key"
        />
      </Dropdown.Item>
    );
  }
  if (state.isAmazonBedrockAuth) {
    return (
      <Dropdown.Item LeftIcon={KeyIcon} disabled>
        <FormattedMessage
          id="codex.profileDropdown.amazonBedrockAuth"
          defaultMessage="Logged in with Amazon Bedrock"
          description="Label indicating the user is authenticated with Amazon Bedrock"
        />
      </Dropdown.Item>
    );
  }
  if (state.isCopilotAuth) {
    return (
      <Dropdown.Item LeftIcon={UserCircleIcon} disabled>
        <FormattedMessage
          id="codex.profileDropdown.copilotAuth"
          defaultMessage="Logged in with Copilot"
          description="Label indicating the user is authenticated with Copilot"
        />
      </Dropdown.Item>
    );
  }
  return (
    <Dropdown.Item LeftIcon={UserCircleIcon} disabled>
      <FormattedMessage
        id="codex.profileDropdown.defaultAccountTitle"
        defaultMessage="Default account"
        description="Fallback label when a non-personal account has no display name"
      />
    </Dropdown.Item>
  );
}

function UserCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10 10.75a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M4.75 16.25a5.25 5.25 0 0 1 10.5 0"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3.75 5.75h12.5v8.5H3.75v-8.5Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="m4.25 6.25 5.75 4 5.75-4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SettingsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10 12.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        d="M10 2.75v2M10 15.25v2M4.87 4.87l1.41 1.41M13.72 13.72l1.41 1.41M2.75 10h2M15.25 10h2M4.87 15.13l1.41-1.41M13.72 6.28l1.41-1.41"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

function KeyboardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 6.25h14v7.5H3v-7.5Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M5.5 8.5h.01M8 8.5h.01M10.5 8.5h.01M13 8.5h.01M15.5 8.5h.01M5.5 11.5h.01M8 11.5h4.5M15.5 11.5h.01"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

function GiftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3.5 8h13v8h-13V8ZM2.75 5.5h14.5V8H2.75V5.5ZM10 5.5V16"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M10 5.5H7.75A1.75 1.75 0 1 1 9.5 3.75L10 5.5ZM10 5.5h2.25A1.75 1.75 0 1 0 10.5 3.75L10 5.5Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UsageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 15.5V9M10 15.5V4.5M16 15.5v-8"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

function SwitchAccountIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5.25 7.25h8.5l-2-2M14.75 12.75h-8.5l2 2"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SignInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8.5 5.25H5.25v9.5H8.5M9.75 10h6M13.5 6.25 17.25 10l-3.75 3.75"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LogOutIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8.5 14.75H5.25v-9.5H8.5M10.25 10h6M13.5 6.25 17.25 10l-3.75 3.75"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function KeyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8.75 10.5a3.25 3.25 0 1 1 2.02 2.98L7.25 17H4.5v-2.75l3.52-3.52a3.2 3.2 0 0 1 .73-.23Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M13.5 6.5h.01"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function initProfileDropdownChunk(): void {}
