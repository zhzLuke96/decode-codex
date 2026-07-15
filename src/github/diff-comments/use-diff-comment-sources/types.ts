// Restored from ref/webview/assets/use-diff-comment-sources-K8MB00rv.js
// Types for inline diff comments collected from model output and pull-request state.

export type DiffCommentContent = {
  content_type: "text";
  text: string;
};
export type DiffComment = {
  content: DiffCommentContent[];
  position: {
    line: number;
    path: string;
    side: "right";
    start_line?: number;
  };
};
export type DiffCommentsByConversation = Record<
  string,
  DiffComment[] | undefined
>;
export type CompletedTurn = {
  items: Array<{
    phase?: string;
    text: string;
    type: string;
  }>;
  params: {
    cwd?: string | null;
  };
  status: string;
};
export type TurnCommentsCache = WeakMap<
  CompletedTurn,
  {
    comments: DiffComment[];
    items: CompletedTurn["items"];
  }
>;
export type DiffCommentSetter = (
  nextComments:
    | DiffComment[]
    | ((currentComments: DiffComment[]) => DiffComment[]),
) => void;
export const emptyDiffComments: DiffComment[] = [];
