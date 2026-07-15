// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~local-conversation-page-4SURv8Cr.js
// Remote connection status row rendered below host source rows.
import {
  classNames,
  useHostConfigById,
  useIntl,
  useRemoteConnectionState,
} from "../../runtime/project-hover-card-runtime";
import { getRemoteConnectionStatusBadgeModel } from "./remote-connection-status";
import { ProjectHoverCardInfoRow } from "./rows";
import type {
  IntlShape,
  RemoteConnectionError,
  RemoteConnectionState,
} from "./types";

export function RemoteConnectionStatusRow({ hostId }: { hostId: string }) {
  const intl = useIntl() as IntlShape;
  const { error, state = "disconnected" } = useRemoteConnectionState(
    hostId,
  ) as {
    error?: RemoteConnectionError | null;
    state?: RemoteConnectionState;
  };
  const hostConfig = useHostConfigById(hostId) as { kind?: string } | null;
  const status = getRemoteConnectionStatusBadgeModel(intl, {
    canLogin: false,
    error,
    hostKind: hostConfig?.kind,
    state,
    surface: "connection-status-badge",
  });
  const shouldWrapError =
    state === "error" &&
    (error?.code === "login-required" ||
      error?.code === "remote-codex-not-found" ||
      error?.code === "restart-required" ||
      error?.code === "update-required");
  const statusDotClassName = classNames(
    "block size-2 rounded-full",
    state === "connected" ? "bg-green-500" : "bg-gray-400",
  );

  return (
    <ProjectHoverCardInfoRow
      icon={<span className={statusDotClassName} />}
      allowWrap={shouldWrapError}
      label={shouldWrapError ? status.message : status.label}
    />
  );
}
