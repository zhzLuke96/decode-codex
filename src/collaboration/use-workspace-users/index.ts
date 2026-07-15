// Restored from ref/webview/assets/use-workspace-users-D5OfJQX1.js
// Also matches ref/webview/assets/use-workspace-users-BuMotENr.js.
// Updated with exports from ref/webview/assets/use-workspace-users-CmiCK9G8.js.
import { once } from "../../runtime/commonjs-interop";
import {
  WorkspaceAccessDropdown,
  WorkspaceAccessSelect,
} from "./access-controls";
import { ShareTargetAutocomplete } from "./autocomplete";
import { ShareDialogPrimaryActions } from "./primary-actions";
import {
  filterAvailableWorkspaceUsers,
  getWorkspaceUserDisplayName,
  useWorkspaceGroupsQuery,
  useWorkspaceUsersQuery,
  workspaceUserToShareTargetOption,
} from "./queries";
import { ShareTargetRow } from "./share-target-row";

const initShareTargetRowChunk = once(() => {});
const initWorkspaceUserQueryHelpersChunk = once(() => {});
const initWorkspaceAccessSelectChunk = once(() => {});
const initShareDialogPrimaryActionsChunk = once(() => {});
const initWorkspaceAccessDropdownChunk = once(() => {});
const initWorkspaceUserQueriesChunk = once(() => {});

export {
  initShareTargetRowChunk,
  filterAvailableWorkspaceUsers,
  initWorkspaceUserQueryHelpersChunk,
  ShareDialogPrimaryActions,
  initWorkspaceAccessSelectChunk,
  ShareTargetRow,
  workspaceUserToShareTargetOption,
  WorkspaceAccessSelect,
  useWorkspaceGroupsQuery,
  WorkspaceAccessDropdown,
  initShareDialogPrimaryActionsChunk,
  useWorkspaceUsersQuery,
  initWorkspaceAccessDropdownChunk,
  initWorkspaceUserQueriesChunk,
  getWorkspaceUserDisplayName,
  ShareTargetAutocomplete,
};
export type {
  ShareDialogActionConfig,
  ShareDialogPrimaryAction,
  ShareTargetOption,
  ShareTargetOptionSection,
  WorkspaceAccessOption,
  WorkspaceGroup,
  WorkspaceUser,
} from "./types";
