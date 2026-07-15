// Restored from ref/webview/assets/hotkey-window-home-page-HuAbYFeH.js
// Semantic implementation helpers for the current hotkey window home page with restored dependency imports.

import React from "react";
import { once as runOnce } from "../runtime/commonjs-interop";
import {
  currentAppInitialSharedCompatSlotLowerGLowerC,
  currentAppInitialSharedCompatSlotUpperO,
} from "../runtime/current-app-initial/current-app-initial-shared-runtime";
import {
  worktreeNewThreadOrchestratorCompatSlotUpperB,
  worktreeNewThreadOrchestratorCompatSlotUpperK,
  worktreeNewThreadOrchestratorCompatSlotLowerQ,
  worktreeNewThreadOrchestratorCompatSlotUpperV,
} from "../runtime/current-app-initial/worktree-new-thread-orchestrator-runtime";
import {
  worktreeNewThreadQueryCompatSlotUpperELowerM,
  worktreeNewThreadQueryCompatSlotLowerELowerO,
  worktreeNewThreadQueryCompatSlotLowerFLowerH,
  worktreeNewThreadQueryCompatSlotLowerKLowerP,
  worktreeNewThreadQueryCompatSlotLowerNLowerO,
  worktreeNewThreadQueryCompatSlotLowerOLowerO,
  worktreeNewThreadQueryCompatSlotUpperOLowerP,
  worktreeNewThreadQueryCompatSlotLowerPLowerH,
  worktreeNewThreadQueryCompatSlotUpperTLowerM,
  worktreeNewThreadQueryCompatSlotLowerXLowerP,
  worktreeNewThreadQueryCompatSlotLowerYLowerP,
} from "../runtime/current-app-initial/worktree-new-thread-query-runtime";
import {
  intlFormatDateTimeRuntime,
  currentAppInitialSharedFunction0375,
  currentAppInitialSharedMember0924,
} from "../runtime/current-app-initial/remote-projects-app-shared-runtime";
import {
  appMainCurrentCompatSlotUpperXLowerT,
  appMainCurrentCompatSlotUpperZLowerT,
} from "../vendor/app-main-current-runtime";
import {
  registerComposerSlashCommand,
  initComposerSlashCommandRegistryRuntime,
} from "../runtime/current-app-initial/appgen-library-hot-djo67r4n-runtime";
import {
  useFloatingWindowPointerInteractivity,
  initFloatingWindowPointerInteractivityChunk,
} from "../utils/use-floating-window-pointer-interactivity";
function ComposerModeDropdown(modeDropdownProps) {
  let {
      canUseCloud,
      composerMode,
      setComposerMode,
      showLabel = false,
      disabledTooltipText,
      showWorktree,
    } = modeDropdownProps,
    modeDropdownIntl = currentAppInitialSharedFunction0375(),
    modeDropdownIcon =
      composerMode === "cloud"
        ? React.createElement(appMainCurrentCompatSlotUpperXLowerT, {
            className: "icon-2xs",
          })
        : composerMode === "worktree" && showWorktree
          ? React.createElement(worktreeNewThreadOrchestratorCompatSlotUpperK, {
              className: "icon-2xs",
            })
          : React.createElement(worktreeNewThreadOrchestratorCompatSlotUpperB, {
              className: "icon-2xs",
            });
  let modeDropdownLabel = showLabel ? (
    <span className="max-w-40 truncate text-left whitespace-nowrap">
      {composerMode === "cloud"
        ? React.createElement(currentAppInitialSharedMember0924, {
            id: "composer.footer.v2.cloudTab",
            defaultMessage: "Cloud",
            description: "Cloud mode label",
          })
        : composerMode === "worktree" && showWorktree
          ? React.createElement(currentAppInitialSharedMember0924, {
              id: "composer.mode.worktreeSegment",
              defaultMessage: "Worktree",
              description: "Worktree mode label for the segmented toggle",
            })
          : React.createElement(currentAppInitialSharedMember0924, {
              id: "composer.hotkeyWindow.modeDropdown.localProject",
              defaultMessage: "Local project",
              description:
                "Hotkey window overflow menu label for local project mode",
            })}
    </span>
  ) : null;
  let modeDropdownChevronIcon = React.createElement(
    worktreeNewThreadQueryCompatSlotLowerFLowerH,
    { className: "icon-2xs text-token-input-placeholder-foreground" },
  );
  let modeDropdownTriggerContent = (
    <>
      {modeDropdownIcon}
      {modeDropdownLabel}
      {modeDropdownChevronIcon}
    </>
  );
  let modeDropdownTriggerChildren = modeDropdownTriggerContent;
  if (disabledTooltipText) {
    let disabledTriggerWrapper = (
      <span>
        {React.createElement(
          worktreeNewThreadQueryCompatSlotUpperTLowerM,
          {
            size: "composerSm",
            color: "ghost",
            className: "gap-1 px-1.5",
            disabled: true,
          },
          modeDropdownTriggerChildren,
        )}
      </span>
    );
    let disabledTooltipContent;
    return React.createElement(
      worktreeNewThreadQueryCompatSlotLowerYLowerP,
      { tooltipContent: disabledTooltipText },
      disabledTriggerWrapper,
    );
  }
  let modeDropdownTooltip = React.createElement(
    currentAppInitialSharedMember0924,
    {
      id: "composer.hotkeyWindow.modeDropdown.tooltip",
      defaultMessage: "Select where to run the task",
      description: "Tooltip for the hotkey-window mode selector",
    },
  );
  let modeDropdownTriggerButton = React.createElement(
    worktreeNewThreadQueryCompatSlotLowerYLowerP,
    { tooltipContent: modeDropdownTooltip },
    React.createElement(
      worktreeNewThreadQueryCompatSlotUpperTLowerM,
      { size: "composerSm", color: "ghost", className: "gap-1 px-1.5" },
      modeDropdownTriggerChildren,
    ),
  );
  let localModeCheckIcon =
      composerMode === "local"
        ? worktreeNewThreadQueryCompatSlotUpperOLowerP
        : undefined,
    selectLocalMode = () => {
      setComposerMode("local");
    };
  let localModeLabel = React.createElement(currentAppInitialSharedMember0924, {
    id: "composer.mode.local",
    defaultMessage: "Work locally",
    description: "Local mode label",
  });
  let localModeItem = React.createElement(
    worktreeNewThreadQueryCompatSlotLowerNLowerO.Item,
    {
      LeftIcon: worktreeNewThreadOrchestratorCompatSlotUpperB,
      RightIcon: localModeCheckIcon,
      onSelect: selectLocalMode,
    },
    localModeLabel,
  );
  let cloudModeCheckIcon =
      composerMode === "cloud"
        ? worktreeNewThreadQueryCompatSlotUpperOLowerP
        : undefined,
    cloudModeDisabled = !canUseCloud,
    selectCloudMode = () => {
      setComposerMode("cloud");
    };
  let cloudModeTooltip = canUseCloud
    ? undefined
    : modeDropdownIntl.formatMessage({
        id: "composer.hotkeyWindow.modeDropdown.cloudUnavailable",
        defaultMessage: "Cloud is unavailable",
        description: "Tooltip for disabled hotkey-window Cloud mode",
      });
  let cloudModeLabel = React.createElement(currentAppInitialSharedMember0924, {
    id: "composer.footer.v2.cloudTab",
    defaultMessage: "Cloud",
    description: "Cloud mode label",
  });
  let cloudModeItem = React.createElement(
    worktreeNewThreadQueryCompatSlotLowerNLowerO.Item,
    {
      LeftIcon: appMainCurrentCompatSlotUpperXLowerT,
      RightIcon: cloudModeCheckIcon,
      disabled: cloudModeDisabled,
      onSelect: selectCloudMode,
      tooltipText: cloudModeTooltip,
    },
    cloudModeLabel,
  );
  let worktreeModeCheckIcon =
      composerMode === "worktree"
        ? worktreeNewThreadQueryCompatSlotUpperOLowerP
        : undefined,
    selectWorktreeMode = () => {
      setComposerMode("worktree");
    };
  let worktreeModeDisabled = !showWorktree,
    worktreeModeTooltip = showWorktree
      ? undefined
      : modeDropdownIntl.formatMessage({
          id: "composer.hotkeyWindow.modeDropdown.localOnly",
          defaultMessage: "Initialize a git repo to run tasks in worktrees",
          description:
            "Tooltip for disabled hotkey-window worktree mode selector",
        });
  let worktreeModeLabel = React.createElement(
    currentAppInitialSharedMember0924,
    {
      id: "composer.mode.worktreeSegment",
      defaultMessage: "Worktree",
      description: "Worktree mode label for the segmented toggle",
    },
  );
  let worktreeModeItem = React.createElement(
    worktreeNewThreadQueryCompatSlotLowerNLowerO.Item,
    {
      LeftIcon: worktreeNewThreadOrchestratorCompatSlotUpperK,
      RightIcon: worktreeModeCheckIcon,
      onSelect: selectWorktreeMode,
      disabled: worktreeModeDisabled,
      tooltipText: worktreeModeTooltip,
    },
    worktreeModeLabel,
  );
  return React.createElement(
    worktreeNewThreadQueryCompatSlotLowerELowerO,
    { triggerButton: modeDropdownTriggerButton, contentWidth: "menuNarrow" },
    [localModeItem, cloudModeItem, worktreeModeItem],
  );
}
var initComposerModeDropdownChunk = runOnce(() => {
  currentAppInitialSharedCompatSlotLowerGLowerC();
  intlFormatDateTimeRuntime();
  worktreeNewThreadQueryCompatSlotUpperELowerM();
  worktreeNewThreadQueryCompatSlotLowerOLowerO();
  worktreeNewThreadQueryCompatSlotLowerXLowerP();
  worktreeNewThreadQueryCompatSlotLowerKLowerP();
  worktreeNewThreadQueryCompatSlotLowerPLowerH();
  appMainCurrentCompatSlotUpperZLowerT();
  worktreeNewThreadOrchestratorCompatSlotUpperV();
  worktreeNewThreadOrchestratorCompatSlotLowerQ();
});
function resolveInitialComposerWorkspaceRoot({
  activeWorkspaceRoot,
  defaultToProjectless,
  prefillCwd,
}) {
  return prefillCwd ?? (defaultToProjectless ? "~" : activeWorkspaceRoot);
}
function resolveComposerConversationCwd({
  composerWorkspaceRoot,
  selectedRemoteProjectPath,
}) {
  return (
    selectedRemoteProjectPath ??
    (composerWorkspaceRoot === "~" ? null : composerWorkspaceRoot)
  );
}
var initComposerModeSlashCommandRuntime = runOnce(() => {
  currentAppInitialSharedCompatSlotUpperO();
});
function ComposerModeSlashCommandRegistrar(slashCommandProps) {
  let { composerMode, enabled, setComposerMode, showWorktree } =
      slashCommandProps,
    slashCommandIntl = currentAppInitialSharedFunction0375(),
    localCommandTitle = slashCommandIntl.formatMessage({
      id: "composer.mode.local",
      defaultMessage: "Work locally",
      description: "Local mode label",
    });
  let localCommandDescription = slashCommandIntl.formatMessage({
    id: "composer.mode.localSlashCommand.description",
    defaultMessage: "Run this chat locally",
    description: "Description for the local mode slash command",
  });
  let localCommandEnabled = enabled && composerMode !== "local",
    selectLocalFromCommand = async () => {
      setComposerMode("local");
    };
  let localCommandHandler = selectLocalFromCommand,
    localCommandRegistration;
  localCommandRegistration = {
    id: "local",
    title: localCommandTitle,
    description: localCommandDescription,
    requiresEmptyComposer: false,
    Icon: worktreeNewThreadOrchestratorCompatSlotUpperB,
    enabled: localCommandEnabled,
    onSelect: localCommandHandler,
  };
  registerComposerSlashCommand(localCommandRegistration);
  let worktreeCommandTitle = slashCommandIntl.formatMessage({
    id: "composer.mode.worktree",
    defaultMessage: "New worktree",
    description: "Worktree mode label",
  });
  let worktreeCommandDescription = slashCommandIntl.formatMessage({
    id: "composer.mode.worktreeSlashCommand.description",
    defaultMessage: "Run this chat in a new worktree",
    description: "Description for the worktree mode slash command",
  });
  let worktreeCommandEnabled =
      enabled && showWorktree && composerMode !== "worktree",
    selectWorktreeFromCommand = async () => {
      setComposerMode("worktree");
    };
  let worktreeCommandHandler = selectWorktreeFromCommand,
    worktreeCommandRegistration;
  return (
    (worktreeCommandRegistration = {
      id: "worktree",
      title: worktreeCommandTitle,
      description: worktreeCommandDescription,
      requiresEmptyComposer: false,
      Icon: worktreeNewThreadOrchestratorCompatSlotUpperK,
      enabled: worktreeCommandEnabled,
      onSelect: worktreeCommandHandler,
    }),
    registerComposerSlashCommand(worktreeCommandRegistration),
    null
  );
}
var initComposerModeSlashCommandRegistrarChunk = runOnce(() => {
  currentAppInitialSharedCompatSlotLowerGLowerC();
  intlFormatDateTimeRuntime();
  initComposerSlashCommandRegistryRuntime();
  worktreeNewThreadOrchestratorCompatSlotUpperV();
  worktreeNewThreadOrchestratorCompatSlotLowerQ();
});
function useHotkeyHomePointerInteractivity(pointerInteractivityProps) {
  let { activationNonce, interactiveRegionRef, onInteractiveChange } =
      pointerInteractivityProps,
    pointerInteractivityOptions;
  return (
    (pointerInteractivityOptions = {
      activationNonce,
      floatingElementSelectors: pointerFloatingSelectors,
      includeInteractiveRegion: true,
      interactiveRegionRef,
      onInteractiveChange,
    }),
    useFloatingWindowPointerInteractivity(pointerInteractivityOptions)
  );
}
var pointerFloatingSelectors,
  initPointerInteractivityAdapterChunk = runOnce(() => {
    currentAppInitialSharedCompatSlotLowerGLowerC();
    initFloatingWindowPointerInteractivityChunk();
    pointerFloatingSelectors = [
      "[data-composer-overlay-floating-ui]",
      "[data-above-composer-portal] > *",
      "[data-radix-popper-content-wrapper] > *",
    ];
  }),
  homeClassToken,
  homeShellClassToken,
  shellUnderlayClassToken,
  composerSurfaceClassToken,
  hotkeyHomeClassNames,
  initHotkeyHomeStylesChunk = runOnce(() => {
    homeClassToken = "_home_reiaa_1";
    homeShellClassToken = "_homeShell_reiaa_20";
    shellUnderlayClassToken = "_shellUnderlay_reiaa_21";
    composerSurfaceClassToken = "_composerSurface_reiaa_22";
    hotkeyHomeClassNames = {
      home: homeClassToken,
      homeShell: homeShellClassToken,
      shellUnderlay: shellUnderlayClassToken,
      composerSurface: composerSurfaceClassToken,
    };
  });
function PermissionsDropdownRow(permissionsDropdownRowProps) {
  let { children } = permissionsDropdownRowProps,
    permissionsLabel = React.createElement(currentAppInitialSharedMember0924, {
      id: "hotkeyWindow.home.taskMenu.permissions",
      defaultMessage: "Permissions",
      description: "Label for the hotkey window permissions row",
    });
  return React.createElement(TaskSettingsRow, {
    label: permissionsLabel,
    control: children,
  });
}
function TaskSettingsRow(taskSettingsRowProps) {
  let { label, control } = taskSettingsRowProps,
    rowLabelNode = (
      <div className="shrink-0 text-sm font-medium text-token-foreground">
        {label}
      </div>
    );
  let rowControlNode = <div className="min-w-0">{control}</div>;
  return (
    <div className="flex items-center justify-between gap-4">
      {rowLabelNode}
      {rowControlNode}
    </div>
  );
}
function parseCssPixelValue(cssPixelValue) {
  return Number.parseFloat(cssPixelValue) || 0;
}
export {
  ComposerModeDropdown,
  ComposerModeSlashCommandRegistrar,
  PermissionsDropdownRow,
  TaskSettingsRow,
  hotkeyHomeClassNames,
  initComposerModeDropdownChunk,
  initComposerModeSlashCommandRuntime,
  initComposerModeSlashCommandRegistrarChunk,
  initHotkeyHomeStylesChunk,
  initPointerInteractivityAdapterChunk,
  parseCssPixelValue,
  resolveComposerConversationCwd,
  resolveInitialComposerWorkspaceRoot,
  useHotkeyHomePointerInteractivity,
};
