// Restored from ref/webview/assets/computer-use-app-approvals-query-Dl5M_EB7.js

import { _appScopeT } from "../boundaries/app-scope";
import {
  _vscodeApiA,
  vscodeApiI,
  vscodeApiN,
  vscodeApiU,
} from "../boundaries/vscode-api";
const computerUseAppApprovalsVisibilityQuery = _vscodeApiA(
  _appScopeT,
  "computer-use-app-approvals-visibility",
  {
    refetchOnMount: "always",
    refetchOnWindowFocus: "always",
    staleTime: vscodeApiU.FIVE_SECONDS,
  },
);
const computerUseAppApprovalsReadQuery = _vscodeApiA(
  _appScopeT,
  "computer-use-app-approvals-read",
  {
    refetchOnMount: "always",
    refetchOnWindowFocus: "always",
    staleTime: vscodeApiU.ONE_MINUTE,
  },
);
const computerUseSoundModeQuery = _vscodeApiA(
  _appScopeT,
  "computer-use-sound-mode-read",
  {
    refetchOnMount: "always",
    refetchOnWindowFocus: "always",
    select: ({ value }: { value: unknown }) => value,
    staleTime: vscodeApiU.FIVE_SECONDS,
  },
);
const computerUseBackgroundAuthQuery = _vscodeApiA(
  _appScopeT,
  "computer-use-background-auth-read",
  {
    refetchOnMount: "always",
    refetchOnWindowFocus: "always",
    staleTime: vscodeApiU.FIVE_SECONDS,
  },
);
vscodeApiI(_appScopeT, "chrome-extension-installed-read", (extensionId) => ({
  enabled: extensionId != null,
  params:
    extensionId == null
      ? undefined
      : {
          extensionId,
        },
  refetchOnMount: true,
  refetchOnWindowFocus: true,
  staleTime: vscodeApiU.FIVE_SECONDS,
}));
async function removeComputerUseAppApproval(bundleIdentifier: string) {
  return vscodeApiN("computer-use-app-approval-remove", {
    params: {
      bundleIdentifier,
    },
  });
}
async function writeComputerUseSoundMode(value: unknown) {
  return (
    (await vscodeApiN("computer-use-sound-mode-write", {
      params: {
        value,
      },
    })) as {
      value: unknown;
    }
  ).value;
}
async function writeComputerUseBackgroundAuth(enabled: boolean) {
  return (
    (await vscodeApiN("computer-use-background-auth-write", {
      params: {
        enabled,
      },
    })) as {
      enabled: boolean;
    }
  ).enabled;
}
export {
  removeComputerUseAppApproval,
  computerUseSoundModeQuery,
  computerUseAppApprovalsVisibilityQuery,
  writeComputerUseBackgroundAuth,
  computerUseBackgroundAuthQuery,
  writeComputerUseSoundMode,
  computerUseAppApprovalsReadQuery,
};
