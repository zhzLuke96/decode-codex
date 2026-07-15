// Restored from ref/webview/assets/agent-settings-CE_EGsV1.js
// Semantic implementation module for primary runtime dependency controls.

import agentSettingsRuntime from "./runtime-impl";
function PrimaryRuntimeDependenciesSection(agentSettingsOperand24) {
  let { hostId: hostId } = agentSettingsOperand24,
    agentSettingsBinding239 =
      agentSettingsRuntime
        .appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dTv
        .primaryRuntime;
  if (agentSettingsBinding239 == null) return null;
  return agentSettingsRuntime.agentSettingsElementFactory.createElement(
    PrimaryRuntimeDependenciesSettings,
    {
      hostId: hostId,
      primaryRuntime: agentSettingsBinding239,
    },
  );
}
function PrimaryRuntimeDependenciesSettings(agentSettingsOperand1) {
  let { hostId: hostId, primaryRuntime: primaryRuntime } =
      agentSettingsOperand1,
    agentSettingsBinding19 =
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wKo(
        agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wE,
      ),
    agentSettingsBinding20 =
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy(),
    agentSettingsBinding21 =
      agentSettingsRuntime.AppInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dAy(),
    { data: data, isLoading: isLoading } =
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wGo(
        agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwSl,
        hostId,
      ),
    agentSettingsBinding22 = {
      hostId: hostId,
    };
  let agentSettingsBinding23 =
      agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLl(
        agentSettingsBinding22,
      ),
    agentSettingsBinding24 = data?.find(isPrimaryRuntimeFeatureToggle);
  let agentSettingsBinding25 = agentSettingsBinding24,
    agentSettingsBinding26 = agentSettingsBinding25?.enabled === !0,
    agentSettingsBinding27 = () =>
      primaryRuntime.diagnoseDependencies({
        hostId: hostId,
      });
  let agentSettingsBinding28 =
    agentSettingsRuntime.appInitialAppMainDebugWindowPageAgentSettingsDebugModalN(
      hostId,
    );
  let agentSettingsBinding29 = {
    queryFn: agentSettingsBinding27,
    queryKey: agentSettingsBinding28,
    staleTime:
      agentSettingsRuntime
        .appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wM
        .FIVE_SECONDS,
  };
  let agentSettingsBinding30 =
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wAc(
        agentSettingsBinding29,
      ),
    agentSettingsBinding31 = {
      mutationFn: () =>
        primaryRuntime.diagnoseDependencies({
          hostId: hostId,
        }),
    };
  let agentSettingsBinding32 =
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wTc(
        agentSettingsBinding31,
      ),
    agentSettingsBinding33 = {
      mutationFn: async (agentSettingsOperand36) => {
        let { release: release } = agentSettingsOperand36;
        return (
          await agentSettingsRuntime.appInitialAppMainDebugWindowPageAgentSettingsDebugModalS(
            agentSettingsBinding21,
          ),
          primaryRuntime.runUpdateNow({
            release: release,
          })
        );
      },
    };
  let agentSettingsBinding34 =
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wTc(
        agentSettingsBinding33,
      ),
    agentSettingsBinding35 = {
      mutationFn: async (agentSettingsOperand34) => {
        let { release: release } = agentSettingsOperand34;
        return (
          await agentSettingsRuntime.appInitialAppMainDebugWindowPageAgentSettingsDebugModalS(
            agentSettingsBinding21,
          ),
          primaryRuntime.resetDependencies({
            hostId: hostId,
            release: release,
          })
        );
      },
    };
  let agentSettingsBinding36 =
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wTc(
        agentSettingsBinding35,
      ),
    agentSettingsBinding37 = {
      mutationFn: () =>
        agentSettingsRuntime.appInitialAppMainAgentSettingsD({
          hostId: hostId,
        }),
    };
  let agentSettingsBinding38 =
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wTc(
        agentSettingsBinding37,
      ),
    agentSettingsBinding39 =
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wQo(
        agentSettingsRuntime.appInitialAppMainOnboardingPageJo,
      ),
    agentSettingsBinding40 =
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wQo(
        agentSettingsRuntime.appInitialAppMainOnboardingPageAo,
      ),
    agentSettingsBinding41 =
      agentSettingsBinding39?.hostId === hostId ? agentSettingsBinding39 : null,
    agentSettingsBinding42 = agentSettingsBinding19.get(
      agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwGp,
    );
  let agentSettingsBinding43 = agentSettingsBinding42,
    agentSettingsBinding44 =
      isLoading ||
      agentSettingsBinding23.isPending ||
      agentSettingsBinding32.isPending ||
      agentSettingsBinding34.isPending ||
      agentSettingsBinding36.isPending ||
      agentSettingsBinding38.isPending,
    agentSettingsBinding45 =
      agentSettingsRuntime.appInitialAppMainOnboardingPageKo(
        agentSettingsBinding41,
      );
  let agentSettingsBinding46 = agentSettingsBinding45,
    agentSettingsBinding47 =
      agentSettingsBinding30.data?.bundleVersion == null ||
      agentSettingsBinding30.data.bundleVersion.length === 0
        ? null
        : agentSettingsBinding30.data.bundleVersion,
    agentSettingsBinding48 = () => {
      let agentSettingsBinding208 = Date.now();
      agentSettingsBinding32
        .mutateAsync()
        .then((value) => {
          if (
            (agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dBl(
              agentSettingsBinding19,
              agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVf,
              agentSettingsRuntime.appInitialAppMainAgentSettingsI({
                diagnostics: value,
                durationMs: Date.now() - agentSettingsBinding208,
              }),
            ),
            agentSettingsBinding30.refetch(),
            value.installed)
          ) {
            agentSettingsBinding43.success(
              agentSettingsBinding20.formatMessage({
                id: `settings.agent.dependencies.diagnose.ok`,
                defaultMessage: `Codex dependencies look healthy`,
                description: `Toast shown when dependency diagnostics find no problems`,
              }),
            );
            return;
          }
          agentSettingsBinding43.warning(
            agentSettingsBinding20.formatMessage({
              id: `settings.agent.dependencies.diagnose.problem`,
              defaultMessage: `Codex dependencies may need repair. Send /feedback if this keeps happening`,
              description: `Toast shown when dependency diagnostics find problems`,
            }),
          );
        })
        .catch(() => {
          (agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dBl(
            agentSettingsBinding19,
            agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVf,
            agentSettingsRuntime.appInitialAppMainAgentSettingsA({
              durationMs: Date.now() - agentSettingsBinding208,
            }),
          ),
            agentSettingsBinding43.danger(
              agentSettingsBinding20.formatMessage({
                id: `settings.agent.dependencies.diagnose.failed`,
                defaultMessage: `Couldn’t diagnose Codex dependencies`,
                description: `Toast shown when dependency diagnostics fail`,
              }),
            ));
        });
    };
  let agentSettingsBinding49 = agentSettingsBinding48,
    agentSettingsBinding50 = () => {
      let agentSettingsBinding207 = Date.now();
      agentSettingsBinding36
        .mutateAsync({
          release: agentSettingsBinding40,
        })
        .then((value) => {
          (agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dBl(
            agentSettingsBinding19,
            agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dBf,
            agentSettingsRuntime.appInitialAppMainAgentSettingsO({
              bundleVersion: value.bundleVersion,
              durationMs: Date.now() - agentSettingsBinding207,
              status: value.status,
            }),
          ),
            agentSettingsBinding30.refetch(),
            agentSettingsBinding43.success(
              agentSettingsBinding20.formatMessage({
                id: `settings.agent.dependencies.reset.installed`,
                defaultMessage: `Codex dependencies were reinstalled`,
                description: `Toast shown when dependency reset and reinstall succeeds`,
              }),
            ));
        })
        .catch((error) => {
          if (agentSettingsRuntime.appInitialAppMainAgentSettingsN(error)) {
            (agentSettingsBinding19.set(
              agentSettingsRuntime.appInitialAppMainOnboardingPageJo,
              null,
            ),
              agentSettingsBinding30.refetch(),
              agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dBl(
                agentSettingsBinding19,
                agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dBf,
                agentSettingsRuntime.appInitialAppMainAgentSettingsO({
                  bundleVersion: null,
                  durationMs: Date.now() - agentSettingsBinding207,
                  status: `canceled`,
                }),
              ),
              agentSettingsBinding43.info(
                agentSettingsBinding20.formatMessage({
                  id: `settings.agent.dependencies.reset.canceled`,
                  defaultMessage: `Codex dependency download canceled`,
                  description: `Toast shown when dependency reset and reinstall is canceled`,
                }),
                {
                  id: `install-primary-runtime`,
                },
              ));
            return;
          }
          (agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dBl(
            agentSettingsBinding19,
            agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dBf,
            agentSettingsRuntime.appInitialAppMainAgentSettingsO({
              bundleVersion: null,
              durationMs: Date.now() - agentSettingsBinding207,
              status: `failed`,
            }),
          ),
            agentSettingsBinding43.danger(
              agentSettingsBinding20.formatMessage({
                id: `settings.agent.dependencies.reset.failed`,
                defaultMessage: `Couldn’t reinstall Codex dependencies`,
                description: `Toast shown when dependency reset fails`,
              }),
            ));
        });
    };
  let agentSettingsBinding51 = agentSettingsBinding50,
    agentSettingsBinding52 = () => {
      agentSettingsBinding38
        .mutateAsync()
        .then((value) => {
          let { canceled: canceled } = value;
          if (
            (agentSettingsBinding19.set(
              agentSettingsRuntime.appInitialAppMainOnboardingPageJo,
              null,
            ),
            agentSettingsBinding30.refetch(),
            !canceled)
          ) {
            agentSettingsBinding43.info(
              agentSettingsBinding20.formatMessage({
                id: `settings.agent.dependencies.cancel.noop`,
                defaultMessage: `No Codex dependency download is running`,
                description: `Toast shown when canceling a Codex dependency download but no download is running`,
              }),
            );
            return;
          }
          agentSettingsBinding43.info(
            agentSettingsBinding20.formatMessage({
              id: `settings.agent.dependencies.cancel.canceled`,
              defaultMessage: `Canceling Codex dependency download`,
              description: `Toast shown after requesting cancellation of a Codex dependency download`,
            }),
            {
              id: `install-primary-runtime`,
            },
          );
        })
        .catch(() => {
          agentSettingsBinding43.danger(
            agentSettingsBinding20.formatMessage({
              id: `settings.agent.dependencies.cancel.failed`,
              defaultMessage: `Couldn’t cancel Codex dependency download`,
              description: `Toast shown when canceling a Codex dependency download fails`,
            }),
          );
        });
    };
  let agentSettingsBinding53 = agentSettingsBinding52,
    agentSettingsBinding54 =
      agentSettingsRuntime.agentSettingsElementFactory.createElement(
        agentSettingsRuntime
          .appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD
          .Header,
        {
          title: agentSettingsRuntime.agentSettingsElementFactory.createElement(
            agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
            {
              ...agentSettingsRuntime.agentSettingsMessages
                .workspaceDependencies,
            },
          ),
        },
      );
  let agentSettingsBinding55 =
    agentSettingsRuntime.agentSettingsElementFactory.createElement(
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        ...agentSettingsRuntime.agentSettingsMessages.currentDependencyVersion,
      },
    );
  let agentSettingsBinding56 = agentSettingsBinding30.data?.problems.length
    ? agentSettingsRuntime.agentSettingsElementFactory.createElement(
        agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.agent.dependencies.bundleVersion.problemDescription`,
          defaultMessage: `Run diagnostics or reinstall if tool calls fail`,
          description: `Description shown when dependency diagnostics have problems`,
        },
      )
    : null;
  let agentSettingsBinding57 = agentSettingsBinding46
    ? agentSettingsRuntime.appInitialAppMainOnboardingPageTo(
        agentSettingsBinding41,
        agentSettingsRuntime.appInitialAppMainOnboardingPageWo(
          agentSettingsBinding41,
        ),
      )
    : agentSettingsBinding30.isLoading
      ? agentSettingsRuntime.agentSettingsElementFactory.createElement(
          agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `settings.agent.dependencies.bundleVersion.loading`,
            defaultMessage: `Checking…`,
            description: `Status while loading the current dependency bundle version`,
          },
        )
      : (agentSettingsBinding47 ??
        agentSettingsRuntime.agentSettingsElementFactory.createElement(
          agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
          {
            id: `settings.agent.dependencies.bundleVersion.notInstalled`,
            defaultMessage: `Not installed`,
            description: `Status when dependency bundle version is unavailable`,
          },
        ));
  let agentSettingsBinding58 =
    agentSettingsRuntime.agentSettingsElementFactory.createElement(`span`, {
      className: `text-sm text-token-text-secondary`,
      children: agentSettingsBinding57,
    });
  let agentSettingsBinding59 =
    agentSettingsRuntime.agentSettingsElementFactory.createElement(
      agentSettingsRuntime.appInitialAppMainOnboardingPageFn,
      {
        label: agentSettingsBinding55,
        description: agentSettingsBinding56,
        control: agentSettingsBinding58,
      },
    );
  let agentSettingsBinding60, agentSettingsBinding61;
  ((agentSettingsBinding60 =
    agentSettingsRuntime.agentSettingsElementFactory.createElement(
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        ...agentSettingsRuntime.agentSettingsMessages.codexDependencies,
      },
    )),
    (agentSettingsBinding61 =
      agentSettingsRuntime.agentSettingsElementFactory.createElement(
        agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.agent.dependencies.enabled.description`,
          defaultMessage: `Allow Codex to install and expose bundled Node.js and Python tools`,
          description: `Description for the Codex dependencies enabled toggle`,
        },
      )));
  let agentSettingsBinding62 =
      isLoading ||
      agentSettingsBinding23.isPending ||
      agentSettingsBinding25 == null,
    agentSettingsBinding63 = (agentSettingsOperand27) => {
      agentSettingsBinding23.mutate(
        {
          enabled: agentSettingsOperand27,
          featureName:
            agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wUr,
        },
        {
          onSuccess: () => {
            agentSettingsOperand27 &&
              agentSettingsBinding34.mutate({
                release: agentSettingsBinding40,
              });
          },
        },
      );
    };
  let agentSettingsBinding64 = agentSettingsBinding20.formatMessage({
    id: `settings.agent.dependencies.enabled.ariaLabel`,
    defaultMessage: `Enable Codex dependencies`,
    description: `Aria label for the Codex dependencies enabled toggle`,
  });
  let agentSettingsBinding65 =
    agentSettingsRuntime.agentSettingsElementFactory.createElement(
      agentSettingsRuntime.appInitialAppMainOnboardingPageFn,
      {
        label: agentSettingsBinding60,
        description: agentSettingsBinding61,
        control: agentSettingsRuntime.agentSettingsElementFactory.createElement(
          agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwKn,
          {
            checked: agentSettingsBinding26,
            disabled: agentSettingsBinding62,
            onChange: agentSettingsBinding63,
            ariaLabel: agentSettingsBinding64,
          },
        ),
      },
    );
  let agentSettingsBinding66, agentSettingsBinding67;
  ((agentSettingsBinding66 =
    agentSettingsRuntime.agentSettingsElementFactory.createElement(
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        ...agentSettingsRuntime.agentSettingsMessages
          .diagnoseWorkspaceDependencies,
      },
    )),
    (agentSettingsBinding67 =
      agentSettingsRuntime.agentSettingsElementFactory.createElement(
        agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.agent.dependencies.diagnose.description`,
          defaultMessage: `Checks the current bundle and records diagnostic logs`,
          description: `Description for dependency diagnostics in settings`,
        },
      )));
  let agentSettingsBinding68, agentSettingsBinding69;
  ((agentSettingsBinding68 =
    agentSettingsRuntime.agentSettingsElementFactory.createElement(
      agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwLo,
      {
        className: `icon-2xs`,
      },
    )),
    (agentSettingsBinding69 =
      agentSettingsRuntime.agentSettingsElementFactory.createElement(
        agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.agent.dependencies.diagnose.button`,
          defaultMessage: `Diagnose`,
          description: `Button label for dependency diagnostics`,
        },
      )));
  let agentSettingsBinding70 =
    agentSettingsRuntime.agentSettingsElementFactory.createElement(
      agentSettingsRuntime.appInitialAppMainOnboardingPageFn,
      {
        label: agentSettingsBinding66,
        description: agentSettingsBinding67,
        control: agentSettingsRuntime.agentSettingsElementFactory.createElement(
          agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
          {
            color: `secondary`,
            size: `toolbar`,
            loading: agentSettingsBinding32.isPending,
            disabled: agentSettingsBinding36.isPending,
            onClick: agentSettingsBinding49,
            children: [agentSettingsBinding68, agentSettingsBinding69],
          },
        ),
      },
    );
  let agentSettingsBinding71, agentSettingsBinding72;
  ((agentSettingsBinding71 =
    agentSettingsRuntime.agentSettingsElementFactory.createElement(
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
      {
        ...agentSettingsRuntime.agentSettingsMessages
          .resetWorkspaceDependencies,
      },
    )),
    (agentSettingsBinding72 =
      agentSettingsRuntime.agentSettingsElementFactory.createElement(
        agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
        {
          id: `settings.agent.dependencies.reset.description`,
          defaultMessage: `Deletes the local bundle, downloads it again, and reloads tools`,
          description: `Description for resetting and reinstalling dependencies in settings`,
        },
      )));
  let agentSettingsBinding73 = agentSettingsBinding46
      ? agentSettingsBinding38.isPending
      : agentSettingsBinding36.isPending,
    agentSettingsBinding74 =
      !agentSettingsBinding26 ||
      (agentSettingsBinding46
        ? agentSettingsBinding38.isPending
        : agentSettingsBinding44),
    agentSettingsBinding75 = agentSettingsBinding46
      ? agentSettingsBinding53
      : agentSettingsBinding51,
    agentSettingsBinding76 = agentSettingsBinding46
      ? agentSettingsRuntime.agentSettingsElementFactory.createElement(
          agentSettingsRuntime.agentSettingsElementFactory.Fragment,
          {
            children: [
              agentSettingsRuntime.agentSettingsElementFactory.createElement(
                agentSettingsRuntime._appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwOp,
                {
                  className: `icon-2xs`,
                },
              ),
              agentSettingsRuntime.agentSettingsElementFactory.createElement(
                agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  id: `settings.agent.dependencies.cancel.button`,
                  defaultMessage: `Cancel download`,
                  description: `Button label for canceling dependency download`,
                },
              ),
            ],
          },
        )
      : agentSettingsRuntime.agentSettingsElementFactory.createElement(
          agentSettingsRuntime.agentSettingsElementFactory.Fragment,
          {
            children: [
              agentSettingsRuntime.agentSettingsElementFactory.createElement(
                agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwDs,
                {
                  className: `icon-2xs`,
                },
              ),
              agentSettingsRuntime.agentSettingsElementFactory.createElement(
                agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                {
                  id: `settings.agent.dependencies.reset.button`,
                  defaultMessage: `Reinstall`,
                  description: `Button label for resetting and reinstalling dependencies`,
                },
              ),
            ],
          },
        );
  let agentSettingsBinding77 =
    agentSettingsRuntime.agentSettingsElementFactory.createElement(
      agentSettingsRuntime.appInitialAppMainOnboardingPageFn,
      {
        label: agentSettingsBinding71,
        description: agentSettingsBinding72,
        control: agentSettingsRuntime.agentSettingsElementFactory.createElement(
          agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
          {
            color: `danger`,
            size: `toolbar`,
            loading: agentSettingsBinding73,
            disabled: agentSettingsBinding74,
            onClick: agentSettingsBinding75,
            children: agentSettingsBinding76,
          },
        ),
      },
    );
  return agentSettingsRuntime.agentSettingsElementFactory.createElement(
    agentSettingsRuntime.appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD,
    {
      className: `gap-2`,
      children: [
        agentSettingsBinding54,
        agentSettingsRuntime.agentSettingsElementFactory.createElement(
          agentSettingsRuntime
            .appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD
            .Content,
          {
            children:
              agentSettingsRuntime.agentSettingsElementFactory.createElement(
                agentSettingsRuntime.appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsQ,
                {
                  children: [
                    agentSettingsBinding59,
                    agentSettingsBinding65,
                    agentSettingsBinding70,
                    agentSettingsBinding77,
                  ],
                },
              ),
          },
        ),
      ],
    },
  );
}
function isPrimaryRuntimeFeatureToggle(agentSettingsOperand51) {
  return (
    agentSettingsOperand51.name ===
    agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wUr
  );
}
export { PrimaryRuntimeDependenciesSection };
