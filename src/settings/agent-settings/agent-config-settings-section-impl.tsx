// Restored from ref/webview/assets/agent-settings-CE_EGsV1.js
// Semantic implementation module for the agent configuration settings section.

import agentSettingsRuntime from "./runtime-impl";
import {
  writeAgentConfigValue,
  parseWorkspaceRootLocationState,
  buildProjectConfigScopeOptions,
  readEffectiveAgentConfigValues,
  getConfigScopeLockReason,
  getConfigurationControlLockReason,
  findApprovalPolicyOption,
  findSandboxModeOption,
} from "./config-model-impl";
function AgentConfigSettingsSection({ hostId: hostId }) {
  let agentSettingsBinding79 =
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dVy(),
    agentSettingsBinding80 =
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dNa(),
    agentSettingsBinding81 =
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wCc(),
    [agentSettingsBinding82, agentSettingsBinding83] = (0,
    agentSettingsRuntime.agentSettingsReactRuntime.useState)(null),
    [agentSettingsBinding84, agentSettingsBinding85] = (0,
    agentSettingsRuntime.agentSettingsReactRuntime.useState)(null),
    [agentSettingsBinding86, agentSettingsBinding87] = (0,
    agentSettingsRuntime.agentSettingsReactRuntime.useState)({}),
    agentSettingsBinding88 =
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wQo(
        agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkRn,
      ),
    agentSettingsBinding89 = parseWorkspaceRootLocationState(
      agentSettingsBinding80.state,
    ),
    agentSettingsBinding90 = agentSettingsBinding89.hasValue
      ? hostId === `local`
        ? agentSettingsBinding89.workspaceRoot
        : null
      : hostId === `local`
        ? agentSettingsBinding88
        : null,
    agentSettingsBinding91 =
      agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwPf(
        hostId,
      ),
    { data: data, isPending: agentSettingsBinding92 } =
      agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkZt(
        agentSettingsBinding90,
        {
          hostId: hostId,
          cwdMode:
            hostId === `local` ? `fallback-to-workspace` : `preserve-null`,
        },
      ),
    { data: _data, isPending: isPending } =
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wGo(
        agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkBt,
        {
          hostId: hostId,
        },
      ),
    agentSettingsBinding93 =
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wU(
        `open-file`,
      ),
    agentSettingsBinding94 = data?.config ?? null,
    agentSettingsBinding95 = data?.layers ?? null,
    agentSettingsBinding96 = data?.origins ?? null,
    agentSettingsBinding97 = _data?.requirements ?? null,
    agentSettingsBinding98 = buildProjectConfigScopeOptions(
      agentSettingsBinding95,
      agentSettingsBinding79,
    ),
    agentSettingsBinding99 =
      agentSettingsBinding95?.find(
        (agentSettingsOperand55) => agentSettingsOperand55.name.type === `user`,
      ) ?? null,
    agentSettingsBinding100 =
      agentSettingsBinding95?.find((agentSettingsOperand56) =>
        agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkGt(
          agentSettingsOperand56.name,
        ),
      ) ?? null,
    agentSettingsBinding101 =
      agentSettingsBinding91 == null
        ? null
        : `${agentSettingsBinding91}/config.toml`,
    agentSettingsBinding102 =
      agentSettingsBinding99 == null
        ? agentSettingsBinding101
        : agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkUt(
            agentSettingsBinding99.name,
          ),
    agentSettingsBinding103 = {
      key: `user`,
      kind: `user`,
      label: agentSettingsBinding79.formatMessage(
        agentSettingsRuntime.agentSettingsMessages.userConfig,
      ),
      tooltipText: agentSettingsBinding102 ?? `~/.codex/config.toml`,
      filePath: agentSettingsBinding102,
      expectedVersion: agentSettingsBinding99?.version ?? null,
      workspaceRoot: null,
      layer: agentSettingsBinding99,
    },
    agentSettingsBinding104 =
      agentSettingsBinding100 == null
        ? null
        : {
            key: `managed`,
            kind: `managed`,
            label: agentSettingsBinding79.formatMessage(
              agentSettingsRuntime.agentSettingsMessages.adminConfig,
            ),
            tooltipText: agentSettingsBinding79.formatMessage({
              id: `settings.agent.configuration.scope.managedDescription`,
              defaultMessage: `Managed by admin policy`,
              description: `Tooltip text for the admin config scope in configuration settings`,
            }),
            filePath:
              agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkUt(
                agentSettingsBinding100.name,
              ),
            expectedVersion: agentSettingsBinding100.version,
            workspaceRoot: null,
            layer: agentSettingsBinding100,
          },
    agentSettingsBinding105 = [
      ...agentSettingsBinding98,
      agentSettingsBinding103,
      ...(agentSettingsBinding104 == null ? [] : [agentSettingsBinding104]),
    ],
    agentSettingsBinding106 = agentSettingsBinding98.length > 0,
    agentSettingsBinding107 =
      agentSettingsBinding90 == null
        ? (agentSettingsBinding105[0]?.key ?? null)
        : `project:${agentSettingsBinding90}`,
    agentSettingsBinding108 =
      agentSettingsBinding105.find(
        (item) => item.key === agentSettingsBinding82,
      ) ??
      agentSettingsBinding105.find(
        (item) => item.key === agentSettingsBinding107,
      ) ??
      agentSettingsBinding105[0] ??
      null,
    { data: __data } =
      agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wGo(
        agentSettingsRuntime.openInTargetsQueryN,
        {
          cwd:
            agentSettingsBinding108?.workspaceRoot == null
              ? agentSettingsBinding90 == null
                ? null
                : agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wTr(
                    agentSettingsBinding90,
                  )
              : agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wTr(
                  agentSettingsBinding108.workspaceRoot,
                ),
          hostId: hostId,
        },
      ),
    agentSettingsBinding109 = readEffectiveAgentConfigValues(
      agentSettingsBinding108?.layer?.config ?? null,
    ),
    agentSettingsBinding110 =
      normalizeApprovalPolicy(
        agentSettingsBinding94?.approval_policy ?? null,
      ) ?? `on-request`,
    agentSettingsBinding111 =
      agentSettingsBinding94?.sandbox_mode == null
        ? `read-only`
        : agentSettingsBinding94.sandbox_mode,
    agentSettingsBinding112 =
      agentSettingsBinding109.sandboxMode == null &&
      agentSettingsBinding111 === `workspace-write`,
    agentSettingsBinding113 =
      agentSettingsBinding109.sandboxMode === `workspace-write` ||
      agentSettingsBinding112,
    agentSettingsBinding114 =
      agentSettingsBinding109.approvalPolicy ?? agentSettingsBinding110,
    agentSettingsBinding115 =
      agentSettingsBinding109.sandboxMode ?? agentSettingsBinding111,
    agentSettingsBinding116 = findApprovalPolicyOption(agentSettingsBinding114),
    agentSettingsBinding117 = findSandboxModeOption(agentSettingsBinding115),
    agentSettingsBinding118 =
      agentSettingsBinding109.networkAccess ??
      agentSettingsBinding94?.sandbox_workspace_write?.network_access ??
      !1,
    _e =
      agentSettingsBinding96 == null
        ? null
        : agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkJt(
            agentSettingsBinding96,
            `approval_policy`,
            [`approvalPolicy`],
          ),
    agentSettingsBinding119 =
      agentSettingsBinding96 == null
        ? null
        : agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkJt(
            agentSettingsBinding96,
            `sandbox_mode`,
          ),
    agentSettingsBinding120 =
      agentSettingsBinding96 == null
        ? null
        : agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkJt(
            agentSettingsBinding96,
            `sandbox_workspace_write`,
            [`network_access`],
          ),
    agentSettingsBinding121 =
      agentSettingsBinding108?.kind === `project`
        ? (agentSettingsBinding108.layer?.disabledReason ?? null)
        : null,
    agentSettingsBinding122 = getConfigScopeLockReason(
      agentSettingsBinding108,
      agentSettingsBinding79,
    ),
    be = agentSettingsRuntime.approvalPolicyOptions.filter((item) =>
      agentSettingsBinding97?.allowedApprovalPolicies == null ||
      agentSettingsBinding97.allowedApprovalPolicies.length === 0
        ? !0
        : agentSettingsBinding97.allowedApprovalPolicies.includes(item.value),
    ),
    agentSettingsBinding123 = agentSettingsRuntime.sandboxModeOptions.filter(
      (item) =>
        agentSettingsBinding97?.allowedSandboxModes == null ||
        agentSettingsBinding97.allowedSandboxModes.length === 0
          ? !0
          : agentSettingsBinding97.allowedSandboxModes.includes(item.value),
    );
  async function writeSelectedAgentConfigValue(
    agentSettingsOperand7,
    agentSettingsOperand8,
    agentSettingsOperand9,
  ) {
    if (
      !(
        agentSettingsBinding108 == null ||
        agentSettingsBinding108.filePath == null
      ) &&
      agentSettingsBinding84 == null
    ) {
      (agentSettingsBinding85(agentSettingsOperand7),
        agentSettingsBinding87((agentSettingsOperand54) => ({
          ...agentSettingsOperand54,
          [agentSettingsOperand7]: void 0,
        })));
      try {
        if (agentSettingsBinding108.kind === `project`)
          await writeAgentConfigValue({
            filePath: agentSettingsBinding108.filePath,
            keyPath: agentSettingsOperand8,
            value: agentSettingsOperand9,
          });
        else {
          let agentSettingsBinding234 =
            agentSettingsBinding108.kind === `user`
              ? await agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkHt(
                  agentSettingsBinding81,
                  hostId,
                )
              : null;
          await agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dYg(
            `write-config-value`,
            {
              hostId: hostId,
              keyPath: agentSettingsOperand8,
              value: agentSettingsOperand9,
              mergeStrategy: `upsert`,
              filePath: agentSettingsBinding234
                ? agentSettingsBinding234.filePath
                : agentSettingsBinding108.filePath,
              expectedVersion:
                agentSettingsBinding234 == null
                  ? agentSettingsBinding108.expectedVersion
                  : agentSettingsBinding234.expectedVersion,
            },
          );
        }
        (await agentSettingsBinding81.invalidateQueries({
          queryKey: [
            ...agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkFt,
            hostId,
          ],
        }),
          await Promise.all([
            agentSettingsBinding81.invalidateQueries({
              queryKey: [
                ...agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkPt,
                hostId,
              ],
            }),
            agentSettingsBinding81.invalidateQueries({
              queryKey: [
                ...agentSettingsRuntime._appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkZt,
                hostId,
              ],
            }),
          ]));
      } catch (agentSettingsBinding247) {
        agentSettingsBinding87((agentSettingsOperand40) => ({
          ...agentSettingsOperand40,
          [agentSettingsOperand7]:
            agentSettingsBinding247 instanceof Error
              ? agentSettingsBinding247.message
              : `Unable to save`,
        }));
      } finally {
        agentSettingsBinding85(null);
      }
    }
  }
  let agentSettingsBinding124 = agentSettingsBinding92 || isPending,
    agentSettingsBinding125 = getConfigurationControlLockReason({
      intl: agentSettingsBinding79,
      scopeLockReason: agentSettingsBinding122,
      origin: _e,
      selectedScope: agentSettingsBinding108,
      hasOptions: be.length > 0,
      restrictedMessage: agentSettingsBinding79.formatMessage({
        id: `settings.agent.configuration.approval.restricted`,
        defaultMessage: `Approval policy is restricted by this installation.`,
        description: `Restriction message for approval policy in configuration settings`,
      }),
    }),
    agentSettingsBinding126 = getConfigurationControlLockReason({
      intl: agentSettingsBinding79,
      scopeLockReason: agentSettingsBinding122,
      origin: agentSettingsBinding119,
      selectedScope: agentSettingsBinding108,
      hasOptions: agentSettingsBinding123.length > 0,
      restrictedMessage: agentSettingsBinding79.formatMessage({
        id: `settings.agent.configuration.sandbox.restricted`,
        defaultMessage: `Sandbox mode is restricted by this installation.`,
        description: `Restriction message for sandbox mode in configuration settings`,
      }),
    }),
    agentSettingsBinding127 = getConfigurationControlLockReason({
      intl: agentSettingsBinding79,
      scopeLockReason: agentSettingsBinding122,
      origin: agentSettingsBinding120,
      selectedScope: agentSettingsBinding108,
      hasOptions: !0,
      restrictedMessage: ``,
    }),
    agentSettingsBinding128 =
      agentSettingsBinding124 ||
      agentSettingsBinding84 != null ||
      agentSettingsBinding121 != null,
    agentSettingsBinding129 = (agentSettingsOperand52) => {
      (agentSettingsBinding83(agentSettingsOperand52),
        agentSettingsBinding87({}));
    };
  return agentSettingsRuntime.agentSettingsElementFactory.createElement(
    agentSettingsRuntime.appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD,
    {
      children: [
        agentSettingsRuntime.agentSettingsElementFactory.createElement(
          agentSettingsRuntime
            .appInitialAppMainPetsSettingsAppearanceSettingsGeneralSettingsD
            .Header,
          {
            title:
              agentSettingsRuntime.agentSettingsElementFactory.createElement(
                agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwEo,
                {
                  align: `start`,
                  contentWidth: `menuWide`,
                  disabled: agentSettingsBinding105.length === 0,
                  triggerButton:
                    agentSettingsRuntime.agentSettingsElementFactory.createElement(
                      agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nR,
                      {
                        disabled: agentSettingsBinding105.length === 0,
                        contentClassName: `truncate`,
                        children:
                          agentSettingsBinding108?.label ??
                          agentSettingsBinding79.formatMessage({
                            id: `settings.agent.configuration.scope.loading`,
                            defaultMessage: `Loading…`,
                            description: `Fallback label while config scope options are loading`,
                          }),
                      },
                    ),
                  children: [
                    agentSettingsBinding106
                      ? agentSettingsRuntime.agentSettingsElementFactory.createElement(
                          agentSettingsRuntime.agentSettingsElementFactory
                            .Fragment,
                          {
                            children: [
                              agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                agentSettingsRuntime
                                  .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
                                  .Section,
                                {
                                  children: [
                                    agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                      agentSettingsRuntime
                                        .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
                                        .SectionLabel,
                                      {
                                        children:
                                          agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                            agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                                            {
                                              ...agentSettingsRuntime
                                                .agentSettingsMessages
                                                .projectConfig,
                                            },
                                          ),
                                      },
                                    ),
                                    agentSettingsBinding98.map((item) =>
                                      agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                        ConfigScopeMenuItem,
                                        {
                                          scopeOption: item,
                                          selected:
                                            agentSettingsBinding108?.key ===
                                            item.key,
                                          onSelect: () => {
                                            agentSettingsBinding129(item.key);
                                          },
                                        },
                                        item.key,
                                      ),
                                    ),
                                  ],
                                },
                              ),
                              agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                agentSettingsRuntime
                                  .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
                                  .Separator,
                                {},
                              ),
                            ],
                          },
                        )
                      : null,
                    agentSettingsRuntime.agentSettingsElementFactory.createElement(
                      agentSettingsRuntime
                        .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
                        .Section,
                      {
                        children: [
                          agentSettingsRuntime.agentSettingsElementFactory.createElement(
                            agentSettingsRuntime
                              .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
                              .SectionLabel,
                            {
                              children:
                                agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                  agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                                  {
                                    ...agentSettingsRuntime
                                      .agentSettingsMessages.globalConfig,
                                  },
                                ),
                            },
                          ),
                          agentSettingsRuntime.agentSettingsElementFactory.createElement(
                            ConfigScopeMenuItem,
                            {
                              scopeOption: agentSettingsBinding103,
                              selected:
                                agentSettingsBinding108?.key ===
                                agentSettingsBinding103.key,
                              onSelect: () => {
                                agentSettingsBinding129(
                                  agentSettingsBinding103.key,
                                );
                              },
                            },
                          ),
                          agentSettingsBinding104 == null
                            ? null
                            : agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                ConfigScopeMenuItem,
                                {
                                  scopeOption: agentSettingsBinding104,
                                  selected:
                                    agentSettingsBinding108?.key ===
                                    agentSettingsBinding104.key,
                                  onSelect: () => {
                                    agentSettingsBinding129(
                                      agentSettingsBinding104.key,
                                    );
                                  },
                                },
                              ),
                        ],
                      },
                    ),
                  ],
                },
              ),
            actions:
              agentSettingsRuntime.agentSettingsElementFactory.createElement(
                agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwTm,
                {
                  color: `ghost`,
                  size: `toolbar`,
                  disabled: agentSettingsBinding108?.filePath == null,
                  onClick: () => {
                    agentSettingsBinding108?.filePath != null &&
                      agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKg2pu5rsJm(
                        {
                          path: agentSettingsBinding108.filePath,
                          cwd:
                            agentSettingsBinding108.workspaceRoot == null
                              ? null
                              : agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wTr(
                                  agentSettingsBinding108.workspaceRoot,
                                ),
                          hostId: hostId,
                          target: __data?.preferredTarget,
                          openFile: agentSettingsBinding93.mutate,
                        },
                      );
                  },
                  children: [
                    agentSettingsRuntime.agentSettingsElementFactory.createElement(
                      agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                      {
                        id: `settings.agent.configuration.scope.open`,
                        defaultMessage: `Open config.toml`,
                        description: `Button label to open the selected config file`,
                      },
                    ),
                    agentSettingsRuntime.agentSettingsElementFactory.createElement(
                      agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwDn,
                      {
                        className: `icon-2xs`,
                      },
                    ),
                  ],
                },
              ),
          },
        ),
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
                    agentSettingsBinding121 == null
                      ? null
                      : agentSettingsRuntime.agentSettingsElementFactory.createElement(
                          `div`,
                          {
                            className: `flex items-start gap-2 p-3`,
                            children: [
                              agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                agentSettingsRuntime.appInitialAppMainOnboardingPageRm,
                                {
                                  className: `icon-xs mt-0.5 shrink-0 text-token-editor-warning-foreground`,
                                },
                              ),
                              agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                `div`,
                                {
                                  className: `text-sm text-token-text-secondary`,
                                  children: agentSettingsBinding121,
                                },
                              ),
                            ],
                          },
                        ),
                    agentSettingsRuntime.agentSettingsElementFactory.createElement(
                      agentSettingsRuntime.appInitialAppMainOnboardingPageFn,
                      {
                        label:
                          agentSettingsRuntime.agentSettingsElementFactory.createElement(
                            agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                            {
                              ...agentSettingsRuntime.agentSettingsMessages
                                .approvalPolicy,
                            },
                          ),
                        description:
                          agentSettingsRuntime.agentSettingsElementFactory.createElement(
                            ConfigControlDescription,
                            {
                              error: agentSettingsBinding86.approval,
                              lockReason: agentSettingsBinding125,
                              children:
                                agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                  agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                                  {
                                    id: `settings.agent.configuration.approval.definition`,
                                    defaultMessage: `Choose when Codex asks for approval`,
                                    description: `Definition for approval policy in configuration settings`,
                                  },
                                ),
                            },
                          ),
                        control:
                          agentSettingsRuntime.agentSettingsElementFactory.createElement(
                            agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwEo,
                            {
                              align: `end`,
                              contentWidth: `panelWide`,
                              disabled:
                                agentSettingsBinding128 ||
                                agentSettingsBinding125 != null,
                              triggerButton:
                                agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                  agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nR,
                                  {
                                    disabled:
                                      agentSettingsBinding128 ||
                                      agentSettingsBinding125 != null,
                                    contentClassName: `truncate`,
                                    children:
                                      agentSettingsBinding116 == null
                                        ? agentSettingsBinding114
                                        : agentSettingsBinding79.formatMessage(
                                            agentSettingsBinding116.label,
                                          ),
                                  },
                                ),
                              children: be.map((item) =>
                                agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                  agentSettingsRuntime
                                    .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
                                    .Item,
                                  {
                                    RightIcon:
                                      item.value === agentSettingsBinding114
                                        ? agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwOp
                                        : void 0,
                                    subTextAllowWrap: !0,
                                    onSelect: () => {
                                      writeSelectedAgentConfigValue(
                                        `approval`,
                                        `approval_policy`,
                                        item.value,
                                      );
                                    },
                                    SubText:
                                      agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                        `div`,
                                        {
                                          className: `pt-1 text-sm text-token-text-secondary`,
                                          children: item.description,
                                        },
                                      ),
                                    children:
                                      agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                        `span`,
                                        {
                                          className: `text-sm`,
                                          children:
                                            agentSettingsBinding79.formatMessage(
                                              item.label,
                                            ),
                                        },
                                      ),
                                  },
                                  item.value,
                                ),
                              ),
                            },
                          ),
                      },
                    ),
                    agentSettingsRuntime.agentSettingsElementFactory.createElement(
                      agentSettingsRuntime.appInitialAppMainOnboardingPageFn,
                      {
                        label:
                          agentSettingsRuntime.agentSettingsElementFactory.createElement(
                            agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                            {
                              ...agentSettingsRuntime.agentSettingsMessages
                                .sandboxSettings,
                            },
                          ),
                        description:
                          agentSettingsRuntime.agentSettingsElementFactory.createElement(
                            ConfigControlDescription,
                            {
                              error: agentSettingsBinding86.sandbox,
                              lockReason: agentSettingsBinding126,
                              children:
                                agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                  agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                                  {
                                    id: `settings.agent.configuration.sandbox.definition`,
                                    defaultMessage: `Choose how much Codex can do when running commands`,
                                    description: `Definition for sandbox settings in configuration settings`,
                                  },
                                ),
                            },
                          ),
                        control:
                          agentSettingsRuntime.agentSettingsElementFactory.createElement(
                            agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwEo,
                            {
                              align: `end`,
                              contentWidth: `panelWide`,
                              disabled:
                                agentSettingsBinding128 ||
                                agentSettingsBinding126 != null,
                              triggerButton:
                                agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                  agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageAppgenLibraryPageHotDjo67r4nR,
                                  {
                                    disabled:
                                      agentSettingsBinding128 ||
                                      agentSettingsBinding126 != null,
                                    contentClassName: `truncate`,
                                    children:
                                      agentSettingsBinding117 == null
                                        ? agentSettingsBinding115
                                        : agentSettingsBinding79.formatMessage(
                                            agentSettingsBinding117.label,
                                          ),
                                  },
                                ),
                              children: agentSettingsBinding123.map((item) =>
                                agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                  agentSettingsRuntime
                                    .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
                                    .Item,
                                  {
                                    RightIcon:
                                      item.value === agentSettingsBinding115
                                        ? agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwOp
                                        : void 0,
                                    subTextAllowWrap: !0,
                                    onSelect: () => {
                                      writeSelectedAgentConfigValue(
                                        `sandbox`,
                                        `sandbox_mode`,
                                        item.value,
                                      );
                                    },
                                    SubText:
                                      agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                        `div`,
                                        {
                                          className: `pt-1 text-sm text-token-text-secondary`,
                                          children: item.description,
                                        },
                                      ),
                                    children:
                                      agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                        `span`,
                                        {
                                          className: `text-sm`,
                                          children:
                                            agentSettingsBinding79.formatMessage(
                                              item.label,
                                            ),
                                        },
                                      ),
                                  },
                                  item.value,
                                ),
                              ),
                            },
                          ),
                      },
                    ),
                    agentSettingsBinding113
                      ? agentSettingsRuntime.agentSettingsElementFactory.createElement(
                          agentSettingsRuntime.appInitialAppMainOnboardingPageFn,
                          {
                            label:
                              agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                                {
                                  ...agentSettingsRuntime.agentSettingsMessages
                                    .networkAccess,
                                },
                              ),
                            description:
                              agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                ConfigControlDescription,
                                {
                                  error: agentSettingsBinding86.network,
                                  lockReason: agentSettingsBinding127,
                                  children:
                                    agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                      agentSettingsRuntime.appInitialAppMainRemoteConversationPageNewThreadPanelPageProjectsIndexPageAppIy8s9c2dZy,
                                      {
                                        id: `settings.agent.configuration.network.definition`,
                                        defaultMessage: `Allow network access when the sandbox is set to workspace write`,
                                        description: `Definition for network access in configuration settings`,
                                      },
                                    ),
                                },
                              ),
                            control:
                              agentSettingsRuntime.agentSettingsElementFactory.createElement(
                                agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwKn,
                                {
                                  checked: agentSettingsBinding118,
                                  disabled:
                                    agentSettingsBinding128 ||
                                    agentSettingsBinding127 != null,
                                  onChange: (agentSettingsOperand38) => {
                                    writeSelectedAgentConfigValue(
                                      `network`,
                                      `sandbox_workspace_write.network_access`,
                                      agentSettingsOperand38,
                                    );
                                  },
                                  ariaLabel:
                                    agentSettingsBinding79.formatMessage({
                                      id: `settings.agent.configuration.network.ariaLabel`,
                                      defaultMessage: `Allow network access`,
                                      description: `Aria label for network access toggle in configuration settings`,
                                    }),
                                },
                              ),
                          },
                        )
                      : null,
                  ],
                },
              ),
          },
        ),
      ],
    },
  );
}
function ConfigScopeMenuItem(agentSettingsOperand14) {
  let {
      onSelect: onSelect,
      scopeOption: scopeOption,
      selected: selected,
    } = agentSettingsOperand14,
    agentSettingsBinding221 = selected
      ? agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwOp
      : void 0,
    agentSettingsBinding222 =
      agentSettingsRuntime.agentSettingsElementFactory.createElement(`span`, {
        className: `truncate text-sm`,
        children: scopeOption.label,
      });
  return agentSettingsRuntime.agentSettingsElementFactory.createElement(
    agentSettingsRuntime
      .appInitialAppMainWorktreeInitV2PageRemoteConversationPageNewThreadPanelPageOKo8xg8gwNo
      .Item,
    {
      RightIcon: agentSettingsBinding221,
      tooltipText: scopeOption.tooltipText,
      tooltipSide: `right`,
      onSelect: onSelect,
      children: agentSettingsBinding222,
    },
  );
}
function ConfigControlDescription(agentSettingsOperand6) {
  let {
      children: children,
      error: error,
      lockReason: lockReason,
    } = agentSettingsOperand6,
    agentSettingsBinding210 =
      agentSettingsRuntime.agentSettingsElementFactory.createElement(`div`, {
        children: children,
      });
  let agentSettingsBinding211 =
    lockReason == null
      ? null
      : agentSettingsRuntime.agentSettingsElementFactory.createElement(`div`, {
          className: `inline-flex items-center gap-1 text-sm text-token-editor-warning-foreground`,
          children: [
            agentSettingsRuntime.agentSettingsElementFactory.createElement(
              agentSettingsRuntime.appInitialAppMainOnboardingPageLo,
              {
                className: `icon-2xs`,
              },
            ),
            agentSettingsRuntime.agentSettingsElementFactory.createElement(
              `span`,
              {
                children: lockReason,
              },
            ),
          ],
        });
  let agentSettingsBinding212 =
    error == null
      ? null
      : agentSettingsRuntime.agentSettingsElementFactory.createElement(`div`, {
          className: `text-sm text-token-error-foreground`,
          children: error,
        });
  return agentSettingsRuntime.agentSettingsElementFactory.createElement(`div`, {
    className: `flex flex-col gap-1`,
    children: [
      agentSettingsBinding210,
      agentSettingsBinding211,
      agentSettingsBinding212,
    ],
  });
}
export { AgentConfigSettingsSection };
