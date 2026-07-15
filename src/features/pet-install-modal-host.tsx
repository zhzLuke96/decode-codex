// Restored from ref/webview/assets/pet-install-modal-host-D2_OQIXZ.js
// Semantic host for the pet install modal flow.
import { useCallback, type FormEvent, type ReactElement } from "react";

import { once as runOnce } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotUpperD as initAppScopeRuntimeChunk,
  currentAppInitialSharedCompatSlotUpperE as appScopeRoot,
  currentAppInitialSharedCompatSlotUpperKLowerO as useRouteScopeContext,
  currentAppInitialSharedCompatSlotUpperVLowerO as initCurrentSharedRuntime,
  currentAppInitialSharedCompatSlotLowerGLowerC as initCurrentSharedCompatRuntime,
  currentAppInitialSharedCompatSlotLowerQLowerO as useSignalValue,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadQueryCompatSlotUpperCLowerA as initDialogContentRuntime,
  worktreeNewThreadQueryCompatSlotUpperDLowerM as LoadingSpinnerIcon,
  worktreeNewThreadQueryCompatSlotUpperDLowerO as initDialogOverlayRuntime,
  worktreeNewThreadQueryCompatSlotUpperELowerM as initDialogLayoutRuntime,
  worktreeNewThreadQueryCompatSlotUpperOLowerM as initDialogShellRuntime,
  worktreeNewThreadQueryCompatSlotUpperTLowerM as Button,
  worktreeNewThreadQueryCompatSlotUnderscoreLowerA as DialogBody,
  worktreeNewThreadQueryCompatSlotLowerBLowerA as DialogSection,
  worktreeNewThreadQueryCompatSlotLowerVLowerA as DialogFooter,
  worktreeNewThreadQueryCompatSlotLowerWLowerO as DialogModal,
  worktreeNewThreadQueryCompatSlotLowerYLowerA as DialogHeader,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  intlFormatDateTimeRuntime as initIntlFormattingRuntime,
  currentAppInitialSharedMember0924 as FormattedMessage,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  initAvatarMascotButtonChunk,
  AvatarMascotButton,
} from "../ui/avatar-mascot-button";
import {
  pullRequestNewThreadCompatSlotLowerBLowerN as useInvalidateQueryKey,
  pullRequestNewThreadCompatSlotLowerYLowerN as initInvalidateQueryKeyRuntime,
} from "../runtime/current-app-initial/pull-request-new-thread-runtime";
import {
  useSelectedAvatar,
  initAvatarSelectionStateChunk,
  initCustomAvatarsQueryChunk,
  CUSTOM_AVATARS_QUERY_KEY,
} from "./custom-avatars-query";
import {
  petInstallSession$,
  initPetInstallStateChunk,
  installPet,
  closePetInstallSession,
  type PetInstallSession,
} from "./pet-install-state";

type ActivePetInstallSession = NonNullable<PetInstallSession> & {
  installedAvatarId?: string;
  preview?: {
    spritesheetDataUrl: string;
  };
};

interface PetInstallModalContentProps {
  session: ActivePetInstallSession;
  onClose: () => void;
  onInstall: () => void | Promise<void>;
}

interface PetInstallModalHostProps {
  onClose: () => void;
}

const useCurrentSelectedAvatar = useSelectedAvatar as () => {
  setSelectedAvatarId(nextAvatarId: string): void;
};

function requirePreviewSpritesheetUrl(
  session: ActivePetInstallSession,
): string {
  return session.preview!.spritesheetDataUrl;
}

function requireInstalledAvatarId(session: ActivePetInstallSession): string {
  return session.installedAvatarId!;
}

function PetInstallModalContent({
  session,
  onClose,
  onInstall,
}: PetInstallModalContentProps): ReactElement {
  const { setSelectedAvatarId } = useCurrentSelectedAvatar();
  const canClose = session.status !== "installing";
  const canInstall =
    session.status === "ready" || session.status === "installError";

  const handleOpenChange = useCallback(
    (isOpen: boolean) => {
      if (!isOpen && canClose) {
        onClose();
      }
    },
    [canClose, onClose],
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (canInstall) {
        void onInstall();
      }
    },
    [canInstall, onInstall],
  );

  const handleUseInstalledPet = useCallback(() => {
    setSelectedAvatarId(requireInstalledAvatarId(session));
    onClose();
  }, [onClose, session, setSelectedAvatarId]);

  const title =
    session.status === "installed" ? (
      <FormattedMessage
        id="pets.install.installedTitle"
        defaultMessage="Installed {petName}"
        description="Title shown after a pet installs successfully"
        values={{ petName: session.name }}
      />
    ) : (
      <FormattedMessage
        id="pets.install.title"
        defaultMessage="Install {petName}?"
        description="Title for the pet install modal"
        values={{ petName: session.name }}
      />
    );

  return (
    <DialogModal
      open
      onOpenChange={handleOpenChange}
      shouldIgnoreClickOutside={!canClose}
      showDialogClose={canClose}
      size="compact"
    >
      <DialogBody as="form" onSubmit={handleSubmit}>
        <DialogSection>
          <DialogHeader title={title} subtitle={session.description} />
        </DialogSection>
        <DialogSection>
          <div className="flex min-h-32 items-center justify-center">
            {session.status === "loading" ? (
              <div className="flex items-center gap-2 text-sm text-token-text-secondary">
                <LoadingSpinnerIcon className="icon-xs" />
                <FormattedMessage
                  id="pets.install.loading"
                  defaultMessage="Loading {petName}"
                  description="Loading state shown while a pet preview is prepared"
                  values={{ petName: session.name }}
                />
              </div>
            ) : session.status === "previewError" ? (
              <div className="px-5 text-center text-sm text-token-text-secondary">
                <FormattedMessage
                  id="pets.install.error"
                  defaultMessage="Unable to load {petName}"
                  description="Error state shown when a pet cannot be prepared"
                  values={{ petName: session.name }}
                />
              </div>
            ) : (
              <AvatarMascotButton
                assetRef="codex"
                spritesheetUrl={requirePreviewSpritesheetUrl(session)}
              />
            )}
          </div>
        </DialogSection>
        {session.status === "installError" ? (
          <DialogSection>
            <div className="text-sm text-token-text-secondary">
              <FormattedMessage
                id="pets.install.installError"
                defaultMessage="Unable to install {petName}"
                description="Error state shown when a pet preview is valid but installation fails"
                values={{ petName: session.name }}
              />
            </div>
          </DialogSection>
        ) : null}
        <DialogSection>
          {session.status === "installed" ? (
            <DialogFooter>
              <Button color="outline" type="button" onClick={onClose}>
                <FormattedMessage
                  id="pets.install.close"
                  defaultMessage="Close"
                  description="Button label to close a completed pet install modal"
                />
              </Button>
              <Button type="button" onClick={handleUseInstalledPet}>
                <FormattedMessage
                  id="pets.install.usePet"
                  defaultMessage="Use this pet"
                  description="Button label to select an installed pet"
                />
              </Button>
            </DialogFooter>
          ) : (
            <DialogFooter>
              <Button
                color="outline"
                disabled={!canClose}
                type="button"
                onClick={onClose}
              >
                <FormattedMessage
                  id="pets.install.cancel"
                  defaultMessage="Cancel"
                  description="Button label to cancel a pet install"
                />
              </Button>
              <Button
                disabled={!canInstall}
                loading={session.status === "installing"}
                type="submit"
              >
                {session.status === "installError" ? (
                  <FormattedMessage
                    id="pets.install.tryAgain"
                    defaultMessage="Try again"
                    description="Button label to retry a failed pet install"
                  />
                ) : (
                  <FormattedMessage
                    id="pets.install.install"
                    defaultMessage="Install"
                    description="Button label to install a pet"
                  />
                )}
              </Button>
            </DialogFooter>
          )}
        </DialogSection>
      </DialogBody>
    </DialogModal>
  );
}

const initPetInstallModalContentRuntime = runOnce(() => {
  initCurrentSharedCompatRuntime();
  initIntlFormattingRuntime();
  initAvatarMascotButtonChunk();
  initAvatarSelectionStateChunk();
  initDialogLayoutRuntime();
  initDialogOverlayRuntime();
  initDialogContentRuntime();
  initDialogShellRuntime();
});

export function PetInstallModalHost({
  onClose,
}: PetInstallModalHostProps): ReactElement | null {
  const routeScope = useRouteScopeContext(appScopeRoot);
  const session = useSignalValue(
    petInstallSession$,
  ) as ActivePetInstallSession | null;
  const invalidateQueryKey = useInvalidateQueryKey();

  const handleClose = useCallback(() => {
    closePetInstallSession(routeScope);
    onClose();
  }, [onClose, routeScope]);

  const handleInstall = useCallback(
    () =>
      installPet(routeScope, () =>
        invalidateQueryKey(CUSTOM_AVATARS_QUERY_KEY),
      ),
    [invalidateQueryKey, routeScope],
  );

  if (session == null) {
    return null;
  }

  return (
    <PetInstallModalContent
      session={session}
      onClose={handleClose}
      onInstall={handleInstall}
    />
  );
}

const initPetInstallModalHostRuntime = runOnce(() => {
  initCurrentSharedCompatRuntime();
  initCurrentSharedRuntime();
  initCustomAvatarsQueryChunk();
  initInvalidateQueryKeyRuntime();
  initAppScopeRuntimeChunk();
  initPetInstallModalContentRuntime();
  initPetInstallStateChunk();
});

initPetInstallModalHostRuntime();
