// Restored from ref/webview/assets/agent-settings-CE_EGsV1.js
// Semantic implementation module for agent settings config model helpers.

import agentSettingsRuntime from "./runtime-impl";
async function writeAgentConfigValue({
  filePath: filePath,
  keyPath: keyPath,
  value: value,
}) {
  let agentSettingsBinding244 = buildConfigFieldUpdate(keyPath, value);
  if (agentSettingsBinding244 == null)
    throw Error(`Unsupported config key for project config write.`);
  await writeProjectConfigField({
    filePath: filePath,
    field: agentSettingsBinding244,
  });
}
async function writeProjectConfigField({ filePath: filePath, field: field }) {
  let agentSettingsBinding232 = ``;
  try {
    agentSettingsBinding232 = (
      await agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wI(
        `read-file`,
        {
          params: {
            path: filePath,
          },
        },
      )
    ).contents;
  } catch (agentSettingsBinding251) {
    if (!isMissingConfigFileError(agentSettingsBinding251))
      throw Error(`Failed to read project config.`);
  }
  let agentSettingsBinding233 = applyConfigFieldUpdate(
    agentSettingsBinding232,
    field.name,
    field.value,
  );
  if (agentSettingsBinding233 !== agentSettingsBinding232)
    try {
      await agentSettingsRuntime.appInitialAppMainRemoteConversationPageHotkeyWindowThreadPageAutomationsPageThBnlvjk3wI(
        `local-environment-config-save`,
        {
          params: {
            configPath: filePath,
            raw: agentSettingsBinding233,
          },
        },
      );
    } catch {
      throw Error(`Failed to save project config.`);
    }
}
function buildConfigFieldUpdate(
  agentSettingsOperand22,
  agentSettingsOperand23,
) {
  return agentSettingsOperand22 === `approval_policy` &&
    typeof agentSettingsOperand23 == `string`
    ? {
        name: `approval_policy`,
        value: agentSettingsOperand23,
      }
    : agentSettingsOperand22 === `sandbox_mode` &&
        typeof agentSettingsOperand23 == `string`
      ? {
          name: `sandbox_mode`,
          value: agentSettingsOperand23,
        }
      : agentSettingsOperand22 === `sandbox_workspace_write.network_access` &&
          typeof agentSettingsOperand23 == `boolean`
        ? {
            name: `network_access`,
            value: agentSettingsOperand23,
          }
        : null;
}
function applyConfigFieldUpdate(
  agentSettingsOperand41,
  agentSettingsOperand42,
  agentSettingsOperand43,
) {
  return agentSettingsOperand42 === `network_access`
    ? setSandboxNetworkAccess(
        agentSettingsOperand41,
        agentSettingsOperand43 === !0,
      )
    : replaceTomlScalarSetting(
        agentSettingsOperand41,
        agentSettingsOperand42,
        String(agentSettingsOperand43),
      );
}
function replaceTomlScalarSetting(
  agentSettingsOperand18,
  agentSettingsOperand19,
  agentSettingsOperand20,
) {
  let agentSettingsBinding229 =
      agentSettingsOperand18.length > 0
        ? agentSettingsOperand18.split(`
`)
        : [],
    agentSettingsBinding230 = null,
    agentSettingsBinding231 = !1;
  for (let [
    agentSettingsBinding241,
    agentSettingsBinding242,
  ] of agentSettingsBinding229.entries()) {
    let agentSettingsBinding245 = parseTomlSectionHeader(
      agentSettingsBinding242,
    );
    if (agentSettingsBinding245 != null) {
      agentSettingsBinding230 = agentSettingsBinding245;
      continue;
    }
    if (
      agentSettingsBinding230 == null &&
      RegExp(`^\\s*${agentSettingsOperand19}\\s*=`).test(
        agentSettingsBinding242,
      )
    ) {
      ((agentSettingsBinding229[agentSettingsBinding241] =
        `${agentSettingsOperand19} = "${agentSettingsOperand20}"`),
        (agentSettingsBinding231 = !0));
      break;
    }
  }
  if (!agentSettingsBinding231) {
    let agentSettingsBinding248 = agentSettingsBinding229.findIndex(
        (item) => parseTomlSectionHeader(item) != null,
      ),
      agentSettingsBinding249 =
        agentSettingsBinding248 === -1
          ? agentSettingsBinding229.length
          : agentSettingsBinding248;
    agentSettingsBinding229.splice(
      agentSettingsBinding249,
      0,
      `${agentSettingsOperand19} = "${agentSettingsOperand20}"`,
    );
  }
  return ensureTrailingNewline(
    agentSettingsBinding229.join(`
`),
  );
}
function setSandboxNetworkAccess(
  agentSettingsOperand10,
  agentSettingsOperand11,
) {
  let agentSettingsBinding214 =
      agentSettingsOperand10.length > 0
        ? agentSettingsOperand10.split(`
`)
        : [],
    agentSettingsBinding215 = !1,
    agentSettingsBinding216 = agentSettingsBinding214.length,
    agentSettingsBinding217 = !1;
  for (let [
    agentSettingsBinding235,
    agentSettingsBinding236,
  ] of agentSettingsBinding214.entries()) {
    let agentSettingsBinding237 = parseTomlSectionHeader(
      agentSettingsBinding236,
    );
    if (agentSettingsBinding237 != null) {
      if (agentSettingsBinding215) {
        agentSettingsBinding216 = agentSettingsBinding235;
        break;
      }
      agentSettingsBinding237 === `sandbox_workspace_write` &&
        (agentSettingsBinding215 = !0);
      continue;
    }
    if (
      agentSettingsBinding215 &&
      /^\s*network_access\s*=/.test(agentSettingsBinding236)
    ) {
      ((agentSettingsBinding214[agentSettingsBinding235] =
        `network_access = ${agentSettingsOperand11 ? `true` : `false`}`),
        (agentSettingsBinding217 = !0));
      break;
    }
  }
  if (agentSettingsBinding215 && !agentSettingsBinding217)
    return (
      agentSettingsBinding214.splice(
        agentSettingsBinding216,
        0,
        `network_access = ${agentSettingsOperand11 ? `true` : `false`}`,
      ),
      ensureTrailingNewline(
        agentSettingsBinding214.join(`
`),
      )
    );
  if (agentSettingsBinding217)
    return ensureTrailingNewline(
      agentSettingsBinding214.join(`
`),
    );
  let agentSettingsBinding218 =
    agentSettingsOperand10.length > 0 &&
    !agentSettingsOperand10.endsWith(`
`)
      ? `${agentSettingsOperand10}\n`
      : agentSettingsOperand10;
  return `${agentSettingsBinding218}${
    agentSettingsBinding218.trim().length === 0
      ? ``
      : `
`
  }[sandbox_workspace_write]\nnetwork_access = ${agentSettingsOperand11 ? `true` : `false`}\n`;
}
function ensureTrailingNewline(agentSettingsOperand45) {
  return agentSettingsOperand45.endsWith(`
`)
    ? agentSettingsOperand45
    : `${agentSettingsOperand45}\n`;
}
function parseTomlSectionHeader(agentSettingsOperand37) {
  let agentSettingsBinding250 = agentSettingsOperand37.match(
    /^\s*\[([^\]]+)\]\s*(?:#.*)?$/,
  );
  return agentSettingsBinding250?.[1] == null
    ? null
    : agentSettingsBinding250[1].trim();
}
function isMissingConfigFileError(agentSettingsOperand30) {
  if (!(agentSettingsOperand30 instanceof Error)) return !1;
  let agentSettingsBinding246 = agentSettingsOperand30.message
    .trim()
    .toLowerCase();
  return (
    agentSettingsBinding246 === `enoent` ||
    agentSettingsBinding246.includes(`no such file`) ||
    agentSettingsBinding246.includes(`not found`)
  );
}
function parseWorkspaceRootLocationState(agentSettingsOperand26) {
  let agentSettingsBinding243 =
    agentSettingsRuntime.locationStateSchema.safeParse(agentSettingsOperand26);
  return !agentSettingsBinding243.success ||
    !Object.hasOwn(agentSettingsBinding243.data, `workspaceRoot`)
    ? {
        hasValue: !1,
        workspaceRoot: null,
      }
    : {
        hasValue: !0,
        workspaceRoot: agentSettingsBinding243.data.workspaceRoot ?? null,
      };
}
function buildProjectConfigScopeOptions(
  agentSettingsOperand12,
  agentSettingsOperand13,
) {
  if (agentSettingsOperand12 == null) return [];
  let agentSettingsBinding219 = [];
  for (let agentSettingsBinding224 of agentSettingsOperand12) {
    if (agentSettingsBinding224.name.type !== `project`) continue;
    let agentSettingsBinding225 = stripDotCodexFolderSuffix(
      agentSettingsBinding224.name.dotCodexFolder,
    );
    agentSettingsBinding219.push({
      key: `project:${agentSettingsBinding225 ?? agentSettingsBinding224.name.dotCodexFolder}`,
      kind: `project`,
      label: agentSettingsOperand13.formatMessage(
        {
          id: `settings.agent.configuration.scope.project`,
          defaultMessage: `{repoName}`,
          description: `Label for a project config scope in configuration settings`,
        },
        {
          repoName: getPathBaseName(
            agentSettingsBinding225 ??
              agentSettingsBinding224.name.dotCodexFolder,
          ),
        },
      ),
      tooltipText:
        agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkUt(
          agentSettingsBinding224.name,
        ) ?? agentSettingsBinding224.name.dotCodexFolder,
      filePath:
        agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkUt(
          agentSettingsBinding224.name,
        ),
      expectedVersion: agentSettingsBinding224.version,
      workspaceRoot: agentSettingsBinding225,
      layer: agentSettingsBinding224,
    });
  }
  return agentSettingsBinding219;
}
function stripDotCodexFolderSuffix(agentSettingsOperand39) {
  return agentSettingsOperand39.endsWith(`/.codex`) ||
    agentSettingsOperand39.endsWith(`\\.codex`)
    ? agentSettingsOperand39.slice(0, -7)
    : null;
}
function getPathBaseName(agentSettingsOperand49) {
  return agentSettingsOperand49.split(/[/\\]/).at(-1) || agentSettingsOperand49;
}
function readEffectiveAgentConfigValues(agentSettingsOperand15) {
  if (
    typeof agentSettingsOperand15 != `object` ||
    !agentSettingsOperand15 ||
    Array.isArray(agentSettingsOperand15)
  )
    return {
      approvalPolicy: null,
      sandboxMode: null,
      networkAccess: null,
    };
  let agentSettingsBinding226 = agentSettingsOperand15.approval_policy,
    agentSettingsBinding227 = agentSettingsOperand15.sandbox_mode,
    agentSettingsBinding228 = agentSettingsOperand15.sandbox_workspace_write;
  return {
    approvalPolicy: normalizeApprovalPolicy(agentSettingsBinding226 ?? null),
    sandboxMode:
      agentSettingsBinding227 === `read-only` ||
      agentSettingsBinding227 === `workspace-write` ||
      agentSettingsBinding227 === `danger-full-access`
        ? agentSettingsBinding227
        : null,
    networkAccess:
      typeof agentSettingsBinding228 == `object` &&
      agentSettingsBinding228 &&
      !Array.isArray(agentSettingsBinding228) &&
      typeof agentSettingsBinding228.network_access == `boolean`
        ? agentSettingsBinding228.network_access
        : null,
  };
}
function getConfigScopeLockReason(
  agentSettingsOperand16,
  agentSettingsOperand17,
) {
  return agentSettingsOperand16 == null
    ? agentSettingsOperand17.formatMessage({
        id: `settings.agent.configuration.scope.unavailable`,
        defaultMessage: `Config scope unavailable.`,
        description: `Message shown when no config scope is available in configuration settings`,
      })
    : agentSettingsOperand16.filePath == null
      ? agentSettingsOperand17.formatMessage({
          id: `settings.agent.configuration.scope.readOnly`,
          defaultMessage: `This config source cannot be edited here.`,
          description: `Message shown when the selected config scope cannot be edited`,
        })
      : null;
}
function getConfigurationControlLockReason({
  intl: intl,
  scopeLockReason: scopeLockReason,
  origin: origin,
  selectedScope: selectedScope,
  hasOptions: hasOptions,
  restrictedMessage: restrictedMessage,
}) {
  return (
    scopeLockReason ??
    (hasOptions
      ? selectedScope?.kind !== `managed` &&
        origin != null &&
        agentSettingsRuntime.appInitialAppMainWorktreeInitV2PageRemoteConversationPagePullRequestsPageNewOzr5a6hkGt(
          origin.name,
        )
        ? intl.formatMessage({
            id: `settings.agent.configuration.control.managed`,
            defaultMessage: `This value is managed by admin policy.`,
            description: `Message shown when a configuration control is managed by admin policy`,
          })
        : null
      : restrictedMessage)
  );
}
function findApprovalPolicyOption(agentSettingsOperand46) {
  return (
    agentSettingsRuntime.approvalPolicyOptions.find(
      (item) => item.value === agentSettingsOperand46,
    ) ?? null
  );
}
function findSandboxModeOption(agentSettingsOperand47) {
  return (
    agentSettingsRuntime.sandboxModeOptions.find(
      (item) => item.value === agentSettingsOperand47,
    ) ?? null
  );
}
function normalizeApprovalPolicy(agentSettingsOperand35) {
  return agentSettingsOperand35 === `untrusted` ||
    agentSettingsOperand35 === `on-failure` ||
    agentSettingsOperand35 === `on-request` ||
    agentSettingsOperand35 === `never`
    ? agentSettingsOperand35
    : null;
}
export {
  writeAgentConfigValue,
  parseWorkspaceRootLocationState,
  buildProjectConfigScopeOptions,
  readEffectiveAgentConfigValues,
  getConfigScopeLockReason,
  getConfigurationControlLockReason,
  findApprovalPolicyOption,
  findSandboxModeOption,
};
