// Restored from ref/webview/assets/diff-summary-qXVUYlx3.js
// diff-summary-qXVUYlx3 chunk restored from the Codex webview bundle.
type DiffFileSummary = {
  additions: number;
  deletions: number;
};

type DiffSummary = {
  fileCount: number;
  linesAdded: number;
  linesDeleted: number;
  hasChanges: boolean;
};

export function diffSummary(files: DiffFileSummary[]): DiffSummary {
  let linesAdded = 0;
  let linesDeleted = 0;

  for (const file of files) {
    linesAdded += file.additions;
    linesDeleted += file.deletions;
  }

  return {
    fileCount: files.length,
    linesAdded,
    linesDeleted,
    hasChanges: linesAdded > 0 || linesDeleted > 0,
  };
}
