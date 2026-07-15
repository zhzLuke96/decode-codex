// Restored from ref/webview/assets/computer-use-settings-BIYkni3c.js
// Semantic implementation module for computer use sound and allowed-app sections.

import computerUseSettingsRuntime from "./runtime-impl";
function LockedComputerUseIcon(computerUseOperand10) {
  let {
      computerImageDataUrl: computerImageDataUrl,
      lockImageDataUrl: lockImageDataUrl,
    } = computerUseOperand10,
    computerUseBinding226 =
      computerUseSettingsRuntime.computerUseReactRuntime.createElement(`img`, {
        alt: ``,
        className: `absolute top-0 left-1 h-[53px] w-[53px] object-contain`,
        draggable: !1,
        src: computerImageDataUrl,
      });
  let computerUseBinding227 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(`img`, {
      alt: ``,
      className: `absolute right-0 bottom-0 h-[33px] w-[27px] object-contain`,
      draggable: !1,
      src: lockImageDataUrl,
    });
  return computerUseSettingsRuntime.computerUseReactRuntime.createElement(
    `span`,
    {
      className: `relative inline-block h-[57px] w-[62px] shrink-0`,
      children: [computerUseBinding226, computerUseBinding227],
    },
  );
}
function ComputerUseSoundSettingsSection() {
  let computerUseBinding170 =
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wQo(
        computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nPt,
      ),
    computerUseBinding171 =
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wCc(),
    computerUseBinding172 = {
      mutationFn:
        computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nT,
      onSuccess: (computerUseOperand21) => {
        computerUseBinding171.setQueryData(
          computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wA(
            `computer-use-sound-mode-read`,
          ),
          computerUseOperand21,
        );
      },
    };
  let computerUseBinding173 =
    computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wTc(
      computerUseBinding172,
    );
  if (computerUseBinding170.data == null) return null;
  let computerUseBinding174 = isKnownComputerUseSoundMode(
    computerUseBinding170.data,
  )
    ? computerUseBinding170.data
    : computerUseSettingsRuntime.defaultComputerUseSoundMode;
  let computerUseBinding175 = computerUseBinding174,
    computerUseBinding176 =
      computerUseSettingsRuntime.computerUseSoundModeOptions.find(
        (item) => item.value === computerUseBinding175,
      ) ??
      computerUseSettingsRuntime.computerUseSoundModeOptions.find(
        isDefaultComputerUseSoundMode,
      ) ??
      computerUseSettingsRuntime.computerUseSoundModeOptions[0];
  let computerUseBinding177 = computerUseBinding176,
    computerUseBinding178 =
      computerUseBinding170.isLoading || computerUseBinding173.isPending,
    computerUseBinding179 =
      computerUseSettingsRuntime.computerUseReactRuntime.createElement(
        computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          ...computerUseBinding177.label,
        },
      );
  let computerUseBinding180 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nR,
      {
        className: `w-max max-w-full`,
        contentClassName: `flex-none`,
        disabled: computerUseBinding178,
        children: computerUseBinding179,
      },
    );
  let computerUseBinding181 =
      computerUseBinding170.isLoading || computerUseBinding173.isPending,
    computerUseBinding182 =
      computerUseSettingsRuntime.computerUseSoundModeOptions.map((item) =>
        computerUseSettingsRuntime.computerUseReactRuntime.createElement(
          computerUseSettingsRuntime
            .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
            .Item,
          {
            onSelect: () => {
              computerUseBinding173.mutate(item.value);
            },
            RightIcon:
              computerUseBinding175 === item.value
                ? computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwOp
                : void 0,
            children:
              computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                `span`,
                {
                  className: `text-sm`,
                  children:
                    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                      {
                        ...item.label,
                      },
                    ),
                },
              ),
            key: item.value,
          },
        ),
      );
  let computerUseBinding183 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(`div`, {
      className: `w-max max-w-[calc(100vw-2rem)]`,
      children: computerUseBinding182,
    });
  return computerUseSettingsRuntime.computerUseReactRuntime.createElement(
    computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwEo,
    {
      triggerButton: computerUseBinding180,
      align: `start`,
      disabled: computerUseBinding181,
      children: computerUseBinding183,
    },
  );
}
function isDefaultComputerUseSoundMode(computerUseOperand23) {
  return (
    computerUseOperand23.value ===
    computerUseSettingsRuntime.defaultComputerUseSoundMode
  );
}
function LockedComputerUseSection() {
  let computerUseBinding138 =
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wKo(
        computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wE,
      ),
    computerUseBinding139 =
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy(),
    computerUseBinding140 =
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wCc(),
    computerUseBinding141 =
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wQo(
        computerUseSettingsRuntime._appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nFt,
      ),
    computerUseBinding142 = (computerUseOperand9) => {
      if (
        (computerUseBinding140.setQueryData(
          computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wA(
            `computer-use-background-auth-read`,
          ),
          (computerUseOperand19) => ({
            computerIconDataURL:
              computerUseOperand19?.computerIconDataURL ?? null,
            enabled: computerUseOperand9,
            lockIconDataURL: computerUseOperand19?.lockIconDataURL ?? null,
          }),
        ),
        computerUseOperand9 != null)
      ) {
        if (computerUseOperand9) {
          computerUseBinding138
            .get(
              computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
            )
            .success(
              computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  id: `settings.computerUse.backgroundAuth.enabled`,
                  defaultMessage: `Locked use enabled`,
                  description: `Toast shown after enabling Locked use`,
                },
              ),
            );
          return;
        }
        computerUseBinding138
          .get(
            computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
          )
          .success(
            computerUseSettingsRuntime.computerUseReactRuntime.createElement(
              computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
              {
                id: `settings.computerUse.backgroundAuth.disabled`,
                defaultMessage: `Locked use disabled`,
                description: `Toast shown after disabling Locked use`,
              },
            ),
          );
      }
    };
  let computerUseBinding143 = () => {
    computerUseBinding138
      .get(
        computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
      )
      .danger(
        computerUseSettingsRuntime.computerUseReactRuntime.createElement(
          computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `settings.computerUse.backgroundAuth.saveError`,
            defaultMessage: `Unable to update Locked use`,
            description: `Toast shown when updating Locked use fails`,
          },
        ),
      );
  };
  let computerUseBinding144 = {
    mutationFn:
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nGt,
    onSuccess: computerUseBinding142,
    onError: computerUseBinding143,
  };
  let computerUseBinding145 =
    computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wTc(
      computerUseBinding144,
    );
  if (computerUseBinding141.data?.enabled == null) return null;
  let computerUseBinding146 =
    computerUseBinding141.data.computerIconDataURL != null &&
    computerUseBinding141.data.lockIconDataURL != null
      ? computerUseSettingsRuntime.computerUseReactRuntime.createElement(
          `span`,
          {
            className: `flex h-10 w-10 items-center justify-center`,
            children:
              computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                `span`,
                {
                  className: `origin-center scale-[0.65]`,
                  children:
                    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                      LockedComputerUseIcon,
                      {
                        computerImageDataUrl:
                          computerUseBinding141.data.computerIconDataURL,
                        lockImageDataUrl:
                          computerUseBinding141.data.lockIconDataURL,
                      },
                    ),
                },
              ),
          },
        )
      : null;
  let computerUseBinding147 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        id: `settings.computerUse.backgroundAuth.label`,
        defaultMessage: `Locked use`,
        description: `Label for the Locked use toggle`,
      },
    );
  let computerUseBinding148 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        id: `settings.computerUse.backgroundAuth.description`,
        defaultMessage: `Let Codex use your Mac when it's locked. <a>Learn more</a>`,
        description: `Description for the Locked use toggle`,
        values: {
          a: renderLockedUseLearnMoreLink,
        },
      },
    );
  let computerUseBinding149 = computerUseBinding139.formatMessage({
    id: `settings.computerUse.backgroundAuth.ariaLabel`,
    defaultMessage: `Enable Locked use`,
    description: `Accessible label for the Locked use toggle`,
  });
  let computerUseBinding150 =
      computerUseBinding141.isLoading || computerUseBinding145.isPending,
    computerUseBinding151 = (computerUseOperand26) => {
      computerUseBinding145.mutate(computerUseOperand26);
    };
  let computerUseBinding152 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwKn,
      {
        ariaLabel: computerUseBinding149,
        checked: computerUseBinding141.data.enabled,
        disabled: computerUseBinding150,
        onChange: computerUseBinding151,
      },
    );
  return computerUseSettingsRuntime.computerUseReactRuntime.createElement(
    computerUseSettingsRuntime.appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsQ,
    {
      children:
        computerUseSettingsRuntime.computerUseReactRuntime.createElement(
          computerUseSettingsRuntime.appInitialAppMainOnboardingPageFn,
          {
            icon: computerUseBinding146,
            label: computerUseBinding147,
            description: computerUseBinding148,
            control: computerUseBinding152,
          },
        ),
    },
  );
}
function renderLockedUseLearnMoreLink(computerUseOperand15) {
  return computerUseSettingsRuntime.computerUseReactRuntime.createElement(`a`, {
    className: `inline-flex text-token-text-link-foreground`,
    href: computerUseSettingsRuntime.appInitialAppMainOnboardingPageGc,
    target: `_blank`,
    rel: `noreferrer`,
    children: computerUseOperand15,
  });
}
function isKnownComputerUseSoundMode(computerUseOperand22) {
  return computerUseSettingsRuntime.computerUseSoundModeOptions.some(
    (item) => item.value === computerUseOperand22,
  );
}
function AllowedComputerUseAppsSection() {
  let computerUseBinding196 =
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wKo(
        computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wE,
      ),
    computerUseBinding197 =
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wQo(
        computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nUt,
      ),
    computerUseBinding198,
    computerUseBinding199;
  if (
    ((computerUseBinding198 = () => {
      computerUseBinding196
        .get(
          computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nUt,
        )
        .refetch();
    }),
    (computerUseBinding199 = [computerUseBinding196]),
    (0, computerUseSettingsRuntime.computerUseReactRuntime.useEffect)(
      computerUseBinding198,
      computerUseBinding199,
    ),
    computerUseBinding197.isLoading)
  ) {
    let computerUseBinding243;
    return computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      `div`,
      {
        className: `flex items-center gap-2 p-4 text-sm text-token-text-secondary`,
        children: [
          computerUseSettingsRuntime.computerUseReactRuntime.createElement(
            computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwDm,
            {
              className: `icon-xs`,
            },
          ),
          computerUseSettingsRuntime.computerUseReactRuntime.createElement(
            computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              id: `settings.computerUse.allowedApps.loading`,
              defaultMessage: `Loading allowed apps`,
              description: `Message shown while loading computer use allowed apps`,
            },
          ),
        ],
      },
    );
  }
  if (computerUseBinding197.isError) {
    let computerUseBinding248;
    return computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      `div`,
      {
        className: `p-4 text-sm text-token-text-secondary`,
        children:
          computerUseSettingsRuntime.computerUseReactRuntime.createElement(
            computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              id: `settings.computerUse.allowedApps.loadError`,
              defaultMessage: `Unable to load allowed apps.`,
              description: `Message shown when computer use allowed apps fail to load`,
            },
          ),
      },
    );
  }
  return computerUseSettingsRuntime.computerUseReactRuntime.createElement(
    AllowedComputerUseAppsManager,
    {
      approvals: computerUseBinding197.data,
    },
  );
}
function AllowedComputerUseAppsManager(computerUseOperand3) {
  let { approvals: approvals } = computerUseOperand3,
    computerUseBinding110 =
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wKo(
        computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wE,
      ),
    computerUseBinding111 =
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy(),
    [computerUseBinding112, computerUseBinding113] = (0,
    computerUseSettingsRuntime.computerUseReactRuntime.useState)(null),
    computerUseBinding114 = {
      mutationFn: removeAllowedComputerUseApp,
      onSuccess: (computerUseOperand13) => {
        (computerUseBinding110.query.setData(
          computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nUt,
          computerUseOperand13,
        ),
          computerUseBinding110
            .get(
              computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
            )
            .success(
              computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  id: `settings.computerUse.allowedApps.saved`,
                  defaultMessage: `Allowed app removed`,
                  description: `Toast shown after removing a computer use allowed app`,
                },
              ),
            ));
      },
      onError: () => {
        computerUseBinding110
          .get(
            computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
          )
          .danger(
            computerUseSettingsRuntime.computerUseReactRuntime.createElement(
              computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
              {
                id: `settings.computerUse.allowedApps.saveError`,
                defaultMessage: `Unable to save allowed apps`,
                description: `Toast shown when saving computer use allowed apps fails`,
              },
            ),
          );
      },
    };
  let computerUseBinding115 =
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wTc(
        computerUseBinding114,
      ),
    computerUseBinding116 = async () => {
      computerUseBinding112 != null &&
        (await computerUseBinding115.mutateAsync(
          computerUseBinding112.bundleIdentifier,
        ),
        computerUseBinding113(null));
    };
  let computerUseBinding117 = computerUseBinding116,
    computerUseBinding118 = approvals?.approvedApps ?? [];
  let computerUseBinding119 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      AllowedComputerUseAppsList,
      {
        approvedApps: computerUseBinding118,
        intl: computerUseBinding111,
        isSaving: computerUseBinding115.isPending,
        onRequestRemoval: computerUseBinding113,
      },
    );
  let computerUseBinding120 = computerUseBinding112 != null,
    computerUseBinding121 = (computerUseOperand25) => {
      computerUseOperand25 || computerUseBinding113(null);
    };
  let computerUseBinding122 = computerUseBinding112?.displayName ?? ``,
    computerUseBinding123 =
      computerUseSettingsRuntime.computerUseReactRuntime.createElement(
        computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.computerUse.allowedApps.removeDialogTitle`,
          defaultMessage: `Remove “{displayName}” from always allowed apps?`,
          description: `Title for dialog confirming removal of a computer use allowed app`,
          values: {
            displayName: computerUseBinding122,
          },
        },
      );
  let computerUseBinding124 = computerUseBinding112?.displayName ?? ``,
    computerUseBinding125 =
      computerUseSettingsRuntime.computerUseReactRuntime.createElement(
        computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.computerUse.allowedApps.removeDialogSubtitle`,
          defaultMessage: `Codex will ask to use “{displayName}” in the next computer use session.`,
          description: `Subtitle for dialog confirming removal of a computer use allowed app`,
          values: {
            displayName: computerUseBinding124,
          },
        },
      );
  let computerUseBinding126 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwBa,
      {
        children:
          computerUseSettingsRuntime.computerUseReactRuntime.createElement(
            computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwYa,
            {
              title: computerUseBinding123,
              subtitle: computerUseBinding125,
            },
          ),
      },
    );
  let computerUseBinding127, computerUseBinding128;
  ((computerUseBinding127 = () => {
    computerUseBinding113(null);
  }),
    (computerUseBinding128 =
      computerUseSettingsRuntime.computerUseReactRuntime.createElement(
        computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.computerUse.allowedApps.removeDialogCancel`,
          defaultMessage: `Cancel`,
          description: `Cancel button label for remove allowed app dialog`,
        },
      )));
  let computerUseBinding129 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
      {
        color: `ghost`,
        disabled: computerUseBinding115.isPending,
        onClick: computerUseBinding127,
        children: computerUseBinding128,
      },
    );
  let computerUseBinding130 = () => {
    computerUseBinding117();
  };
  let computerUseBinding131 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        id: `settings.computerUse.allowedApps.removeDialogConfirm`,
        defaultMessage: `Remove`,
        description: `Confirm button label for remove allowed app dialog`,
      },
    );
  let computerUseBinding132 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
      {
        color: `danger`,
        loading: computerUseBinding115.isPending,
        onClick: computerUseBinding130,
        children: computerUseBinding131,
      },
    );
  let computerUseBinding133 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwBa,
      {
        children:
          computerUseSettingsRuntime.computerUseReactRuntime.createElement(
            computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwVa,
            {
              children: [computerUseBinding129, computerUseBinding132],
            },
          ),
      },
    );
  let computerUseBinding134 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwA,
      {
        children: [computerUseBinding126, computerUseBinding133],
      },
    );
  let computerUseBinding135 =
    computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwWo,
      {
        open: computerUseBinding120,
        onOpenChange: computerUseBinding121,
        size: `compact`,
        children: computerUseBinding134,
      },
    );
  return computerUseSettingsRuntime.computerUseReactRuntime.createElement(
    computerUseSettingsRuntime.computerUseReactRuntime.Fragment,
    {
      children: [computerUseBinding119, computerUseBinding135],
    },
  );
}
function AllowedComputerUseAppsList(computerUseOperand4) {
  let {
    approvedApps: approvedApps,
    intl: intl,
    isSaving: isSaving,
    onRequestRemoval: onRequestRemoval,
  } = computerUseOperand4;
  if (approvedApps.length === 0) {
    let computerUseBinding244;
    return computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      computerUseSettingsRuntime.appInitialAppMainOnboardingPageFn,
      {
        className: `justify-center`,
        label: computerUseSettingsRuntime.computerUseReactRuntime.createElement(
          `span`,
          {
            className: `text-token-text-secondary`,
            children:
              computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                computerUseSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  id: `settings.computerUse.allowedApps.emptyTitle`,
                  defaultMessage: `None yet`,
                  description: `Empty state title for computer use allowed apps`,
                },
              ),
          },
        ),
        control: null,
      },
    );
  }
  let computerUseBinding167;
  {
    let computerUseBinding209;
    ((computerUseBinding209 = (computerUseOperand7) =>
      computerUseSettingsRuntime.computerUseReactRuntime.createElement(
        computerUseSettingsRuntime.appInitialAppMainOnboardingPageFn,
        {
          icon: computerUseSettingsRuntime.computerUseReactRuntime.createElement(
            AllowedComputerUseAppIcon,
            {
              approvedApp: computerUseOperand7,
            },
          ),
          label:
            computerUseSettingsRuntime.computerUseReactRuntime.createElement(
              `span`,
              {
                className: `font-medium`,
                children: computerUseOperand7.displayName,
              },
            ),
          description: null,
          control:
            computerUseSettingsRuntime.computerUseReactRuntime.createElement(
              computerUseSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
              {
                "aria-label": intl.formatMessage(
                  {
                    id: `settings.computerUse.allowedApps.removeAriaLabel`,
                    defaultMessage: `Remove {displayName}`,
                    description: `Aria label for button that removes a computer use allowed app`,
                  },
                  {
                    displayName: computerUseOperand7.displayName,
                  },
                ),
                color: `ghost`,
                disabled: isSaving,
                onClick: () => {
                  onRequestRemoval(computerUseOperand7);
                },
                size: `icon`,
                children:
                  computerUseSettingsRuntime.computerUseReactRuntime.createElement(
                    computerUseSettingsRuntime.appInitialAppMainOnboardingPageId,
                    {
                      className: `icon-2xs`,
                    },
                  ),
              },
            ),
          key: computerUseOperand7.bundleIdentifier,
        },
      )),
      (computerUseBinding167 = approvedApps.map(computerUseBinding209)));
  }
  return computerUseSettingsRuntime.computerUseReactRuntime.createElement(
    computerUseSettingsRuntime.computerUseReactRuntime.Fragment,
    {
      children: computerUseBinding167,
    },
  );
}
function AllowedComputerUseAppIcon(computerUseOperand8) {
  let { approvedApp: approvedApp } = computerUseOperand8;
  if (approvedApp.iconDataURL != null) {
    let computerUseBinding249;
    return computerUseSettingsRuntime.computerUseReactRuntime.createElement(
      `img`,
      {
        alt: ``,
        className: `h-9 w-9 shrink-0 rounded-md`,
        draggable: !1,
        src: approvedApp.iconDataURL,
      },
    );
  }
  let computerUseBinding223 = approvedApp.displayName.slice(0, 1).toUpperCase();
  return computerUseSettingsRuntime.computerUseReactRuntime.createElement(
    `div`,
    {
      className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-token-foreground/10 text-sm font-semibold text-token-description-foreground`,
      children: computerUseBinding223,
    },
  );
}
export {
  AllowedComputerUseAppsSection,
  ComputerUseSoundSettingsSection,
  LockedComputerUseSection,
};
