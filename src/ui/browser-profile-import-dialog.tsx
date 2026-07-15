// Restored from ref/webview/assets/browser-profile-import-dialog-D1qMiO6m.js
// Browser profile import dialog modal.

import React, { type FormEvent, type ReactNode, type SVGProps } from "react";
import clsx from "clsx";
import { useGateValue } from "../vendor/statsig-current-runtime";
import {
  vscodeApiUnderscore as useMutationRaw,
  vscodeApiV as useQueryRaw,
} from "../boundaries/vscode-api";
import { Button } from "./button";
import { Checkbox } from "../utils/checkbox";
import { CheckCircleFilledIcon } from "../icons/check-circle-filled-icon";
import { CheckMdIcon } from "../icons/check-md-icon";
import {
  DialogBody,
  DialogDescription,
  DialogFooter,
  DIALOG_FOOTER_BUTTON_CLASS,
  DialogHeader,
  DialogLayout,
  DialogSection,
  DialogTitle,
} from "./dialog-layout";
import { Dropdown, DropdownMenu } from "./dropdown";
import { defineMessages, FormattedMessage } from "../vendor/react-intl";
import { GoogleChromeIcon } from "../icons/google-chrome-icon";
import { SettingsMenuButton } from "../settings/settings-shared";
import {
  browserProfileImportProfilesQuery,
  filterImportableBrowserProfiles,
  importBrowserProfile,
} from "../browser/browser-profile-import-query";
import { SettingsControlRow } from "./settings-row";
import { SettingsSurface } from "../utils/settings-surface";
import { Spinner } from "./spinner";
import { Toggle } from "../utils/toggle";
import { XCircleFilledIcon } from "../icons/x-circle-filled-icon";
type BrowserProfile = {
  appName: string;
  hasCookies?: boolean;
  hasPasswords?: boolean;
  profileDirectoryName?: string | null;
  profileName?: string | null;
  profilePath: string;
  source: "atlas" | "chrome" | string;
};
type BrowserProfileImportOptions = {
  allowElevatedChromeDecryption?: boolean;
  importCookies: boolean;
  importPasswords: boolean;
  profilePath: string;
  source: string;
};
type BrowserProfileImportService = {
  importBrowserProfile(
    options: BrowserProfileImportOptions,
  ): Promise<BrowserProfileImportResult>;
  listImportableBrowserProfiles(): Promise<BrowserProfile[]>;
};
type ImportItemResult = {
  error?: unknown;
  failed?: number;
  imported?: number;
  status?: "success" | "partial-success" | "failed_to_copy" | string;
};
type PasswordImportResult = ImportItemResult & {
  account?: ImportItemResult | null;
  profile?: ImportItemResult | null;
};
type BrowserProfileImportResult = {
  cookies?: ImportItemResult | null;
  passwords?: PasswordImportResult | null;
};
type QueryResult<TData> = {
  data?: TData;
  isError: boolean;
  isLoading: boolean;
};
type MutationResult<TVariables, TData> = {
  data?: TData;
  isError: boolean;
  isPending: boolean;
  mutate(variables: TVariables): void;
  reset(): void;
};
type BrowserProfileImportDialogModalProps = {
  onClose: () => void;
  service: BrowserProfileImportService | null | undefined;
};
type BrowserProfileImportDialogProps = {
  cookieAccessFailureMessage?: ReactNode;
  elevatedChromeConsent: boolean;
  hasImportError: boolean;
  importCookies: boolean;
  importPasswords: boolean;
  isImporting: boolean;
  isLoadingProfiles: boolean;
  profilePickerOpen?: boolean;
  profiles?: BrowserProfile[];
  profilesHaveError: boolean;
  requiresElevatedChromeConsent: boolean;
  result: BrowserProfileImportResult | null;
  selectedProfile: BrowserProfile | null;
  onCancel: () => void;
  onElevatedChromeConsentChange: (checked: boolean) => void;
  onImport: () => void;
  onImportCookiesChange: (checked: boolean) => void;
  onImportPasswordsChange: (checked: boolean) => void;
  onProfilePickerOpenChange?: (open: boolean) => void;
  onSelectProfile: (profile: BrowserProfile) => void;
};
type ProfilePickerProps = {
  disabled: boolean;
  isLoading: boolean;
  open?: boolean;
  profiles?: BrowserProfile[];
  selectedProfile: BrowserProfile | null;
  onOpenChange?: (open: boolean) => void;
  onSelectProfile: (profile: BrowserProfile) => void;
};
type ImportOptionKind = "cookies" | "passwords";
type ImportOptionRowProps = {
  available?: boolean;
  checked: boolean;
  disabled: boolean;
  kind: ImportOptionKind;
  onChange: (checked: boolean) => void;
};
type ElevatedChromeConsentProps = {
  checked: boolean;
  disabled: boolean;
  onChange: (checked: boolean) => void;
};
type ResultViewProps = {
  cookieAccessFailureMessage?: ReactNode;
  result: BrowserProfileImportResult;
  onDone: () => void;
};
type ResultRowProps = {
  failureMessage?: ReactNode;
  kind: ImportOptionKind;
};
const useQuery = useQueryRaw as <TData>(options: unknown) => QueryResult<TData>;
const useMutation = useMutationRaw as <TVariables, TData>(options: {
  mutationFn: (variables: TVariables) => Promise<TData>;
}) => MutationResult<TVariables, TData>;
const browserProfileImportMessages = defineMessages({
  cookies: {
    id: "settings.browserUse.profileImport.cookies",
    defaultMessage: "Cookies",
    description: "Label for importing cookies from a browser profile",
  },
  passwords: {
    id: "settings.browserUse.profileImport.passwords",
    defaultMessage: "Passwords",
    description: "Label for importing passwords from a browser profile",
  },
  title: {
    id: "settings.browserUse.profileImport.title",
    defaultMessage: "Import from your browser",
    description: "Title for the browser profile import dialog",
  },
});
const browserProfileImportCompleteMessages = defineMessages({
  complete: {
    id: "settings.browserUse.profileImport.complete",
    defaultMessage: "Import complete",
    description: "Title shown after browser data import completes",
  },
});
function CookieIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2A10 10 0 1 0 22 12C19.7909 12 18 10.2091 18 8C15.7909 8 14 6.20914 14 4C14 3.3072 13.824 2.6555 13.5143 2.0873C13.0186 2.02962 12.5139 2 12 2Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={12} cy={7} r={1} fill="currentColor" />
      <circle cx={7.5} cy={11} r={1} fill="currentColor" />
      <circle cx={11.5} cy={15} r={1} fill="currentColor" />
      <circle cx={16} cy={12.5} r={1} fill="currentColor" />
    </svg>
  );
}
function PasswordsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.75 9.55V15.75L6.5 18.25L4.25 15.75V9.55C2.886 8.748 2 7.267 2 5.625C2 3.14 4.015 1.125 6.5 1.125C8.985 1.125 11 3.14 11 5.625C11 7.267 10.114 8.748 8.75 9.55Z"
        stroke="currentColor"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={6.5} cy={5.5} r={0.75} fill="currentColor" />
      <path
        d="M11.45 2.775C12.078 2.362 12.83 2.125 13.625 2.125C16.11 2.125 18.125 4.14 18.125 6.625C18.125 8.267 17.239 9.748 15.875 10.55V15.75L13.625 18.25L11.375 15.75V10.55C10.818 10.223 10.342 9.783 9.977 9.263"
        stroke="currentColor"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function BrowserProfileImportDialogModal({
  onClose,
  service,
}: BrowserProfileImportDialogModalProps) {
  const isProfileImportEnabled = useGateValue("1834314516");
  const [selectedProfileKey, setSelectedProfileKey] = React.useState("");
  const [importCookies, setImportCookies] = React.useState(true);
  const [importPasswords, setImportPasswords] = React.useState(true);
  const [elevatedConsentProfileKey, setElevatedConsentProfileKey] =
    React.useState<string | null>(null);
  const profilesQuery = useQuery<BrowserProfile[]>(
    browserProfileImportProfilesQuery(service, true),
  );
  const importMutation = useMutation<
    BrowserProfileImportOptions,
    BrowserProfileImportResult
  >({
    mutationFn: (options) => importBrowserProfile(service, options),
  });
  React.useEffect(() => {
    if (!isProfileImportEnabled) onClose();
  }, [isProfileImportEnabled, onClose]);
  const profiles = profilesQuery.data;
  const selectedProfile =
    profiles?.find(
      (profile) => getBrowserProfileKey(profile) === selectedProfileKey,
    ) ??
    filterImportableBrowserProfiles(profiles ?? [])[0] ??
    profiles?.[0] ??
    null;
  const selectedKey = selectedProfile
    ? getBrowserProfileKey(selectedProfile)
    : null;
  const canImportCookies =
    selectedProfile?.hasCookies === true && importCookies;
  const canImportPasswords =
    selectedProfile?.hasPasswords === true && importPasswords;
  const requiresElevatedChromeConsent =
    typeof document !== "undefined" &&
    document.documentElement.dataset.codexOs === "win32" &&
    selectedProfile?.source === "chrome";
  const elevatedChromeConsent =
    selectedKey != null && elevatedConsentProfileKey === selectedKey;
  const result = importMutation.data ?? null;
  const showDialogClose = !importMutation.isPending && result == null;
  const closeIfIdle = () => {
    if (!importMutation.isPending) onClose();
  };
  const handleOpenChange = (open: boolean) => {
    if (!open) closeIfIdle();
  };
  const handleElevatedChromeConsentChange = (checked: boolean) => {
    setElevatedConsentProfileKey(checked ? selectedKey : null);
  };
  const handleImport = () => {
    if (selectedProfile == null) return;
    importMutation.mutate(
      createBrowserProfileImportOptions(
        selectedProfile,
        canImportCookies,
        canImportPasswords,
        requiresElevatedChromeConsent,
      ),
    );
  };
  const handleSelectProfile = (profile: BrowserProfile) => {
    setSelectedProfileKey(getBrowserProfileKey(profile));
    setElevatedConsentProfileKey(null);
    importMutation.reset();
  };
  return (
    <DialogLayout
      open
      onOpenChange={handleOpenChange}
      showDialogClose={showDialogClose}
      size="narrow"
    >
      <BrowserProfileImportDialog
        elevatedChromeConsent={elevatedChromeConsent}
        hasImportError={importMutation.isError}
        importCookies={importCookies}
        importPasswords={importPasswords}
        isImporting={importMutation.isPending}
        isLoadingProfiles={profilesQuery.isLoading}
        profiles={profiles}
        profilesHaveError={profilesQuery.isError}
        requiresElevatedChromeConsent={requiresElevatedChromeConsent}
        result={result}
        selectedProfile={selectedProfile}
        onCancel={closeIfIdle}
        onElevatedChromeConsentChange={handleElevatedChromeConsentChange}
        onImport={handleImport}
        onImportCookiesChange={setImportCookies}
        onImportPasswordsChange={setImportPasswords}
        onSelectProfile={handleSelectProfile}
      />
    </DialogLayout>
  );
}
function BrowserProfileImportDialog({
  cookieAccessFailureMessage,
  elevatedChromeConsent,
  hasImportError,
  importCookies,
  importPasswords,
  isImporting,
  isLoadingProfiles,
  profilePickerOpen,
  profiles,
  profilesHaveError,
  requiresElevatedChromeConsent,
  result,
  selectedProfile,
  onCancel,
  onElevatedChromeConsentChange,
  onImport,
  onImportCookiesChange,
  onImportPasswordsChange,
  onProfilePickerOpenChange,
  onSelectProfile,
}: BrowserProfileImportDialogProps) {
  if (result != null) {
    return (
      <BrowserProfileImportResultView
        cookieAccessFailureMessage={cookieAccessFailureMessage}
        result={result}
        onDone={onCancel}
      />
    );
  }
  const selectedCookies = selectedProfile?.hasCookies === true && importCookies;
  const selectedPasswords =
    selectedProfile?.hasPasswords === true && importPasswords;
  const submitDisabled =
    selectedProfile == null ||
    (!selectedCookies && !selectedPasswords) ||
    (requiresElevatedChromeConsent && !elevatedChromeConsent);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onImport();
  };
  return (
    <DialogBody as="form" onSubmit={handleSubmit}>
      <DialogSection>
        <DialogTitle asChild>
          <h2 className="sr-only">
            <FormattedMessage {...browserProfileImportMessages.title} />
          </h2>
        </DialogTitle>
        <DialogHeader
          title={<FormattedMessage {...browserProfileImportMessages.title} />}
          subtitle={
            <DialogDescription asChild>
              <div>
                <FormattedMessage
                  id="settings.browserUse.profileImport.subtitle"
                  defaultMessage="Choose data to bring over to the built-in browser"
                  description="Subtitle for the browser data import dialog"
                />
              </div>
            </DialogDescription>
          }
        />
      </DialogSection>

      <DialogSection className="gap-3">
        <BrowserProfilePicker
          disabled={isImporting || !profiles?.length}
          isLoading={isLoadingProfiles}
          open={profilePickerOpen}
          profiles={profiles}
          selectedProfile={selectedProfile}
          onOpenChange={onProfilePickerOpenChange}
          onSelectProfile={onSelectProfile}
        />
        {profiles?.length === 0 ? (
          <p className="text-sm text-token-description-foreground">
            <FormattedMessage
              id="settings.browserUse.profileImport.noProfilesDescription"
              defaultMessage="No Chrome or Atlas profiles were found on this device"
              description="Message shown when no importable browser profiles are found"
            />
          </p>
        ) : null}
        {selectedProfile != null ? (
          <SettingsSurface>
            <BrowserProfileImportOptionRow
              available={selectedProfile.hasPasswords}
              checked={selectedPasswords}
              disabled={isImporting}
              kind="passwords"
              onChange={onImportPasswordsChange}
            />
            <BrowserProfileImportOptionRow
              available={selectedProfile.hasCookies}
              checked={selectedCookies}
              disabled={isImporting}
              kind="cookies"
              onChange={onImportCookiesChange}
            />
          </SettingsSurface>
        ) : null}
        {requiresElevatedChromeConsent ? (
          <ElevatedChromeConsent
            checked={elevatedChromeConsent}
            disabled={isImporting}
            onChange={onElevatedChromeConsentChange}
          />
        ) : null}
        <BrowserProfileImportErrors
          importFailed={hasImportError}
          profileDiscoveryFailed={profilesHaveError}
        />
      </DialogSection>

      <DialogSection>
        <DialogFooter className={DIALOG_FOOTER_BUTTON_CLASS}>
          <Button
            color="secondary"
            disabled={isImporting}
            onClick={onCancel}
            type="button"
          >
            <FormattedMessage
              id="settings.browserUse.profileImport.cancel"
              defaultMessage="Cancel"
              description="Button that closes the browser data import dialog"
            />
          </Button>
          <Button
            color="primary"
            disabled={submitDisabled}
            loading={isImporting}
            type="submit"
          >
            <FormattedMessage
              id="settings.browserUse.profileImport.import"
              defaultMessage="Import"
              description="Button that starts importing browser data"
            />
          </Button>
        </DialogFooter>
      </DialogSection>
    </DialogBody>
  );
}
function BrowserProfilePicker({
  disabled,
  isLoading,
  open,
  profiles,
  selectedProfile,
  onOpenChange,
  onSelectProfile,
}: ProfilePickerProps) {
  const selectedProfileKey = selectedProfile
    ? getBrowserProfileKey(selectedProfile)
    : null;
  const selectedProfileLabel = selectedProfile
    ? getBrowserProfileLabel(selectedProfile)
    : undefined;
  const hasSingleProfile = profiles?.length === 1;
  const triggerButton = (
    <SettingsMenuButton
      aria-disabled={hasSingleProfile || undefined}
      aria-label={selectedProfileLabel}
      className={clsx(
        "min-w-0 flex-1",
        hasSingleProfile && "pointer-events-none",
      )}
      chevronClassName={hasSingleProfile ? "hidden" : undefined}
      disabled={hasSingleProfile ? undefined : disabled}
      tabIndex={hasSingleProfile ? -1 : undefined}
    >
      <BrowserProfilePickerContent
        isLoading={isLoading}
        selectedProfile={selectedProfile}
      />
    </SettingsMenuButton>
  );
  return (
    <div className="flex items-center gap-3">
      <span className="shrink-0 text-sm text-token-description-foreground">
        <FormattedMessage
          id="settings.browserUse.profileImport.from"
          defaultMessage="From"
          description="Label before the browser profile selector"
        />
      </span>
      {hasSingleProfile ? (
        triggerButton
      ) : (
        <DropdownMenu
          align="end"
          contentWidth="menuWide"
          disabled={disabled}
          open={open}
          triggerButton={triggerButton}
          onOpenChange={onOpenChange}
        >
          <Dropdown.Section className="max-h-[250px] overflow-y-auto">
            {profiles?.map((profile) => {
              const key = getBrowserProfileKey(profile);
              return (
                <Dropdown.Item
                  key={key}
                  aria-label={getBrowserProfileLabel(profile)}
                  RightIcon={
                    key === selectedProfileKey ? CheckMdIcon : undefined
                  }
                  onSelect={() => onSelectProfile(profile)}
                >
                  <BrowserProfileLabel profile={profile} />
                </Dropdown.Item>
              );
            })}
          </Dropdown.Section>
        </DropdownMenu>
      )}
    </div>
  );
}
function BrowserProfilePickerContent({
  isLoading,
  selectedProfile,
}: {
  isLoading: boolean;
  selectedProfile: BrowserProfile | null;
}) {
  if (isLoading) {
    return (
      <>
        <Spinner className="icon-2xs" />
        <FormattedMessage
          id="settings.browserUse.profileImport.loadingProfiles"
          defaultMessage="Loading profiles…"
          description="Placeholder shown while importable browser profiles load"
        />
      </>
    );
  }
  if (selectedProfile == null) {
    return (
      <FormattedMessage
        id="settings.browserUse.profileImport.noProfiles"
        defaultMessage="No profiles found"
        description="Placeholder shown when no importable browser profiles are found"
      />
    );
  }
  return <BrowserProfileLabel profile={selectedProfile} />;
}
function BrowserProfileImportOptionRow({
  available,
  checked,
  disabled,
  kind,
  onChange,
}: ImportOptionRowProps) {
  const labelId = `browser-profile-import-${kind}-label`;
  const labelMessage =
    kind === "cookies"
      ? browserProfileImportMessages.cookies
      : browserProfileImportMessages.passwords;
  const icon =
    kind === "cookies" ? (
      <CookieIcon className="size-5 text-token-text-secondary" />
    ) : (
      <PasswordsIcon className="size-5 text-token-text-secondary" />
    );
  return (
    <SettingsControlRow
      icon={icon}
      label={
        <span id={labelId}>
          <FormattedMessage {...labelMessage} />
        </span>
      }
      control={
        <Toggle
          aria-labelledby={labelId}
          ariaLabel={kind === "cookies" ? "Cookies" : "Passwords"}
          checked={checked}
          disabled={!available || disabled}
          onChange={onChange}
        />
      }
    />
  );
}
function ElevatedChromeConsent({
  checked,
  disabled,
  onChange,
}: ElevatedChromeConsentProps) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-token-input-border bg-token-foreground/[0.025] p-3 text-sm">
      <p className="font-medium text-token-text-primary">
        <FormattedMessage
          id="settings.browserUse.profileImport.windowsChrome.title"
          defaultMessage="Administrator approval required"
          description="Title for the Windows Chrome browser import consent notice"
        />
      </p>
      <p className="text-token-description-foreground">
        <FormattedMessage
          id="settings.browserUse.profileImport.windowsChrome.description"
          defaultMessage="Windows protects Chrome cookies and passwords with App-Bound Encryption, so the app needs administrator approval to import them"
          description="Description for the Windows Chrome browser import consent notice"
        />
      </p>
      <label className="relative flex cursor-interaction items-start gap-2">
        <Checkbox
          checked={checked}
          disabled={disabled}
          onCheckedChange={onChange}
        />
        <span>
          <FormattedMessage
            id="settings.browserUse.profileImport.windowsChrome.consent"
            defaultMessage="I understand the app will request administrator approval to import this Chrome data"
            description="Consent label for elevated Windows Chrome browser data import"
          />
        </span>
      </label>
    </div>
  );
}
function BrowserProfileImportErrors({
  importFailed,
  profileDiscoveryFailed,
}: {
  importFailed: boolean;
  profileDiscoveryFailed: boolean;
}) {
  if (profileDiscoveryFailed) {
    return (
      <BrowserProfileImportError>
        <FormattedMessage
          id="settings.browserUse.profileImport.profilesError"
          defaultMessage="We couldn't load browser profiles. Close and reopen this dialog to try again"
          description="Error shown when browser profiles cannot be loaded for import"
        />
      </BrowserProfileImportError>
    );
  }
  if (importFailed) {
    return (
      <BrowserProfileImportError>
        <FormattedMessage
          id="settings.browserUse.profileImport.error"
          defaultMessage="We couldn't import all of this browser data. Try again"
          description="Error shown when browser profile import fails"
        />
      </BrowserProfileImportError>
    );
  }
  return null;
}
function BrowserProfileImportError({ children }: { children?: ReactNode }) {
  return (
    <p className="px-3 text-sm text-token-error-foreground" role="alert">
      {children}
    </p>
  );
}
function BrowserProfileImportResultView({
  cookieAccessFailureMessage,
  result,
  onDone,
}: ResultViewProps) {
  const cookieFailed = hasImportFailure(result.cookies);
  const cookieAccessFailed = result.cookies?.status === "failed_to_copy";
  const cookiePartiallyFailed =
    cookieFailed &&
    ((result.cookies?.imported ?? 0) > 0 ||
      result.cookies?.status === "partial-success");
  const passwordResults = [
    result.passwords,
    result.passwords?.profile,
    result.passwords?.account,
  ];
  const passwordFailed = passwordResults.some(hasImportFailure);
  const passwordAccessFailed = passwordResults.some(isCopyFailure);
  const passwordPartiallyFailed =
    passwordFailed && passwordResults.some(hasImportSuccess);
  const hasAnyFailure = cookieFailed || passwordFailed;
  return (
    <DialogBody>
      <DialogSection>
        <DialogTitle asChild>
          <h2 className="sr-only">
            <FormattedMessage
              {...browserProfileImportCompleteMessages.complete}
            />
          </h2>
        </DialogTitle>
        <DialogHeader
          subtitleClassName={hasAnyFailure ? "sr-only" : undefined}
          title={
            <FormattedMessage
              {...browserProfileImportCompleteMessages.complete}
            />
          }
          subtitle={
            <DialogDescription asChild>
              <div>
                {hasAnyFailure ? (
                  <FormattedMessage
                    id="settings.browserUse.profileImport.partialDescription"
                    defaultMessage="Review the import status for each browser data type"
                    description="Accessible description for a browser data import with one or more failed data types"
                  />
                ) : (
                  <FormattedMessage
                    id="settings.browserUse.profileImport.completeDescription"
                    defaultMessage="Your data is now available in the built-in browser"
                    description="Description shown after browser data import completes"
                  />
                )}
              </div>
            </DialogDescription>
          }
        />
      </DialogSection>
      <DialogSection>
        <SettingsSurface>
          {result.passwords != null ? (
            <BrowserProfileImportResultRow
              failureMessage={
                passwordFailed ? (
                  <PasswordFailureMessage
                    accessFailed={passwordAccessFailed}
                    partiallyFailed={passwordPartiallyFailed}
                  />
                ) : undefined
              }
              kind="passwords"
            />
          ) : null}
          {result.cookies != null ? (
            <BrowserProfileImportResultRow
              failureMessage={
                cookieFailed ? (
                  <CookieFailureMessage
                    accessFailed={cookieAccessFailed}
                    message={cookieAccessFailureMessage}
                    partiallyFailed={cookiePartiallyFailed}
                  />
                ) : undefined
              }
              kind="cookies"
            />
          ) : null}
        </SettingsSurface>
      </DialogSection>
      <DialogSection>
        <DialogFooter
          className={DIALOG_FOOTER_BUTTON_CLASS}
          expandSingleButton={false}
        >
          <Button color="primary" onClick={onDone} type="button">
            <FormattedMessage
              id="settings.browserUse.profileImport.done"
              defaultMessage="Done"
              description="Button that closes the completed browser data import dialog"
            />
          </Button>
        </DialogFooter>
      </DialogSection>
    </DialogBody>
  );
}
function CookieFailureMessage({
  accessFailed,
  message,
  partiallyFailed,
}: {
  accessFailed: boolean;
  message?: ReactNode;
  partiallyFailed: boolean;
}) {
  if (accessFailed) {
    return (
      <>
        {message ?? (
          <FormattedMessage
            id="settings.browserUse.profileImport.cookieAccessError"
            defaultMessage="Codex couldn’t access this profile’s cookies. A device security policy may be blocking access"
            description="Error shown when device security may have blocked access to cookies during browser profile import"
          />
        )}
      </>
    );
  }
  if (partiallyFailed) {
    return (
      <FormattedMessage
        id="settings.browserUse.profileImport.cookiesPartialError"
        defaultMessage="Some cookies couldn’t be imported"
        description="Error shown when some cookies could not be imported from a browser profile"
      />
    );
  }
  return (
    <FormattedMessage
      id="settings.browserUse.profileImport.cookiesError"
      defaultMessage="Cookies couldn’t be imported"
      description="Error shown when cookies could not be imported from a browser profile"
    />
  );
}
function PasswordFailureMessage({
  accessFailed,
  partiallyFailed,
}: {
  accessFailed: boolean;
  partiallyFailed: boolean;
}) {
  if (partiallyFailed) {
    return (
      <FormattedMessage
        id="settings.browserUse.profileImport.passwordsPartialError"
        defaultMessage="Some passwords couldn’t be imported"
        description="Error shown when some passwords could not be imported from a browser profile"
      />
    );
  }
  if (accessFailed) {
    return (
      <FormattedMessage
        id="settings.browserUse.profileImport.passwordAccessError"
        defaultMessage="Codex couldn’t access this profile’s passwords. A device security policy may be blocking access"
        description="Error shown when device security may have blocked access to passwords during browser profile import"
      />
    );
  }
  return (
    <FormattedMessage
      id="settings.browserUse.profileImport.passwordsError"
      defaultMessage="Passwords couldn’t be imported"
      description="Error shown when passwords could not be imported from a browser profile"
    />
  );
}
function BrowserProfileLabel({ profile }: { profile: BrowserProfile }) {
  const profileName = profile.profileName || profile.profileDirectoryName;
  return (
    <span className="flex min-w-0 flex-1 items-center gap-1.5">
      <GoogleChromeIcon className="size-4 shrink-0" />
      <span className="min-w-0 truncate text-token-text-primary">
        {profile.appName}
      </span>
      <span className="min-w-0 truncate text-token-text-tertiary">
        {profileName}
      </span>
    </span>
  );
}
function BrowserProfileImportResultRow({
  failureMessage,
  kind,
}: ResultRowProps) {
  const isCookies = kind === "cookies";
  const labelMessage = isCookies
    ? browserProfileImportMessages.cookies
    : browserProfileImportMessages.passwords;
  const icon = isCookies ? (
    <CookieIcon className="size-5 text-token-text-secondary" />
  ) : (
    <PasswordsIcon className="size-5 text-token-text-secondary" />
  );
  const statusIcon =
    failureMessage == null ? (
      <CheckCircleFilledIcon className="size-5 text-token-text-primary" />
    ) : (
      <XCircleFilledIcon className="size-5 text-token-error-foreground" />
    );
  const description =
    failureMessage == null ? undefined : (
      <span className="text-token-error-foreground" role="alert">
        {failureMessage}
      </span>
    );
  return (
    <SettingsControlRow
      control={statusIcon}
      description={description}
      icon={icon}
      label={<FormattedMessage {...labelMessage} />}
    />
  );
}
function getBrowserProfileKey(profile: BrowserProfile): string {
  return `${profile.source}:${profile.profilePath}`;
}
function getBrowserProfileLabel(profile: BrowserProfile): string {
  const profileName = profile.profileName || profile.profileDirectoryName;
  return `${profile.appName} ${profileName ?? ""}`.trim();
}
function hasImportSuccess(
  result: ImportItemResult | null | undefined,
): boolean {
  return (
    (result?.imported ?? 0) > 0 ||
    result?.status === "success" ||
    result?.status === "partial-success"
  );
}
function isCopyFailure(result: ImportItemResult | null | undefined): boolean {
  return result?.status === "failed_to_copy";
}
function hasImportFailure(
  result: ImportItemResult | null | undefined,
): boolean {
  return (
    (result?.failed ?? 0) > 0 ||
    result?.error != null ||
    (result?.status != null && result.status !== "success")
  );
}
function createBrowserProfileImportOptions(
  profile: BrowserProfile,
  importCookies: boolean,
  importPasswords: boolean,
  allowElevatedChromeDecryption: boolean,
): BrowserProfileImportOptions {
  const options: BrowserProfileImportOptions = {
    source: profile.source,
    profilePath: profile.profilePath,
    importCookies,
    importPasswords,
  };
  return allowElevatedChromeDecryption
    ? {
        ...options,
        allowElevatedChromeDecryption: true,
      }
    : options;
}
