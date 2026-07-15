// Restored from ref/webview/assets/projects-index-page-CJjk7dRY.js
// Projects index row state helpers split from the current projects page chunk.
class ProjectIndexRowStateHelpers {
  static getThreadStatusState({
  entry: entry,
  localHasUnreadTurn: localHasUnreadTurn,
  localStatusType: localStatusType,
  localUnreadMessageCount: localUnreadMessageCount
}) {
  switch (entry?.kind) {
    case `local`:
      return {
        type: localStatusType ?? `idle`,
        unread: localHasUnreadTurn === !0,
        unreadCount: localUnreadMessageCount ?? 0
      };
    case `remote`:
      {
        let projectIndexBinding236 = entry.task.task_status_display?.latest_turn_status_display?.turn_status;
        return {
          type: projectIndexBinding236 === `in_progress` || projectIndexBinding236 === `pending` ? `loading` : projectIndexBinding236 === `failed` ? `error` : `idle`,
          unread: entry.task.has_unread_turn
        };
      }
    case `pending-worktree`:
      return {
        type: entry.pendingWorktree.phase === `queued` || entry.pendingWorktree.phase === `creating` ? `loading` : entry.pendingWorktree.phase === `failed` ? `error` : `idle`,
        unread: entry.pendingWorktree.needsAttention
      };
    case void 0:
      return null;
  }
}
  static togglePinnedProjectId(projectIndexOperand30, projectIndexOperand31) {
  return projectIndexOperand30?.includes(projectIndexOperand31) === !0 ? projectIndexOperand30.filter(item => item !== projectIndexOperand31) : [...(projectIndexOperand30 ?? []), projectIndexOperand31];
}
  static getEditableProjectDescriptor(projectIndexOperand20) {
  return projectIndexOperand20.isLocalProject === !0 ? {
    isLocalProject: !0,
    projectId: projectIndexOperand20.projectId
  } : projectIndexOperand20.path == null ? {
    projectId: projectIndexOperand20.projectId
  } : {
    path: projectIndexOperand20.path,
    projectId: projectIndexOperand20.projectId
  };
}
}
export { ProjectIndexRowStateHelpers };
