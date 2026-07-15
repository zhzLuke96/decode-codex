// Restored from ref/webview/assets/app-initial~app-main~projects-index-page~local-conversation-page-4SURv8Cr.js
// Source row normalization and icon selection for the project hover card.
import {
  GlobeIcon,
  initStringNormalizeRuntime,
  normalizeTextForCompare,
} from "../../runtime/project-hover-card-runtime";
import { once } from "../../runtime/commonjs-interop";
import { RemoteHostGlobeIcon } from "./remote-host-globe";
import { ProjectSourceFolderIcon, RepositorySourceIcon } from "./source-icons";
import type { ProjectSourceRow, SidebarProjectGroup } from "./types";

export function buildProjectHoverCardSourceRows(
  group: SidebarProjectGroup,
  writableRoots: string[] = [],
) {
  const rows: ProjectSourceRow[] = [];
  const seenKeys = new Set<string>();
  const addRow = (row: ProjectSourceRow) => {
    const rowKey = getProjectSourceRowDedupeKey(row);
    if (
      rowKey === "" ||
      rowKey === normalizeProjectLabel(group.label) ||
      seenKeys.has(rowKey)
    ) {
      return;
    }
    seenKeys.add(rowKey);
    rows.push(row);
  };

  if (group.projectKind === "remote") {
    addRow({
      hostId: group.hostId ?? null,
      kind: "host",
      value: group.hostDisplayName ?? group.hostId ?? "",
    });
  }

  if (group.repositoryData != null) {
    const ownerRepo = group.repositoryData.ownerRepo;
    const repositoryLabel =
      ownerRepo == null
        ? group.repositoryData.rootFolder
        : `${ownerRepo.owner}/${ownerRepo.repoName}`;
    if (repositoryLabel != null) {
      addRow({
        kind: "repository",
        value: repositoryLabel,
      });
    }
  }

  const sourcePaths =
    writableRoots.length === 0 && group.path != null
      ? [group.path]
      : writableRoots;
  for (const sourcePath of sourcePaths) {
    addRow({
      allowBreak: true,
      kind: "path",
      value: sourcePath,
    });
  }

  return rows;
}

export function collapseHomeDirectoryInPath(path: string) {
  return path.replace(/^\/Users\/[^/]+(?=\/|$)/u, "~");
}

function normalizeProjectLabel(value: string) {
  return normalizeTextForCompare(value).trim().toLocaleLowerCase();
}

function getProjectSourceRowDedupeKey(row: ProjectSourceRow) {
  return row.kind === "path"
    ? row.value.trim().toLocaleLowerCase()
    : normalizeProjectLabel(row.value);
}

export function getProjectSourceRowIcon(
  row: ProjectSourceRow,
  hostIdsForColorAssignment: string[],
) {
  switch (row.kind) {
    case "host":
      return row.hostId == null ? (
        <GlobeIcon />
      ) : (
        <RemoteHostGlobeIcon
          hostId={row.hostId}
          hostIdsForColorAssignment={hostIdsForColorAssignment}
        />
      );
    case "path":
      return <ProjectSourceFolderIcon />;
    case "repository":
      return <RepositorySourceIcon />;
  }
}

export const initProjectHoverCardSourceHelpers = once(() => {
  initStringNormalizeRuntime();
});
