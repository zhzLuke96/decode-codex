// Restored from ref/webview/assets/avatar-overlay-realtime-voice-button-BtRztXew.js
// avatar-overlay-realtime-voice-button-BtRztXew chunk restored from the Codex webview bundle.
import type { ReactNode, RefObject } from "react";
export type IntlShapeLike = {
  formatMessage(message: unknown, values?: Record<string, unknown>): string;
};
export type AvatarOverlayActivityStatus =
  | "idle"
  | "running"
  | "waiting"
  | "failed"
  | "review";
export type CompactWaitingRequestAction = {
  ariaLabel?: string;
  commandDecision?: "accept" | "decline";
  fileDecision?: "accept" | "decline";
  intent:
    | "command-approval"
    | "file-approval"
    | "mcp-elicitation"
    | "open"
    | "permission-response"
    | "plan-start";
  label: string;
  mcpElicitationAction?: "accept" | "decline";
  permissionResponse?: unknown;
  planStartCollaborationMode?: unknown;
  tone: "primary" | "secondary" | "danger";
};
export type CompactWaitingRequest =
  | {
      kind: "question";
      requestId: string;
      title: string;
      prompt: string;
      options: Array<{
        label: string;
        description: string | null;
        questionId: string;
      }>;
    }
  | {
      kind: "plan";
      operation: string;
      planContent: string;
      summary: string;
      title: string;
      turnId: string;
      actions: CompactWaitingRequestAction[];
    }
  | {
      kind: "patch";
      requestId: string;
      operation: string;
      summary: string;
      title: string;
      files: string[];
      fileCount: number;
      additions: number;
      deletions: number;
      actions: CompactWaitingRequestAction[];
    }
  | {
      kind: "exec";
      requestId: string;
      operation: string;
      summary: string;
      title: string;
      actions: CompactWaitingRequestAction[];
    }
  | {
      kind: "network";
      requestId: string;
      operation: string;
      target: string;
      title: string;
      actions: CompactWaitingRequestAction[];
    }
  | {
      kind: "permission";
      requestId: string;
      operation: string;
      target: string;
      title: string;
      actions: CompactWaitingRequestAction[];
    }
  | {
      kind: "tool";
      requestId: string;
      operation: string;
      target: string;
      summary: string | null;
      title: string;
      actions: CompactWaitingRequestAction[];
    };
export type AvatarOverlayActivityItem = {
  actionPath: string;
  controlTarget:
    | {
        type: "app-server-conversation";
        conversationId: string;
      }
    | {
        type: "cloud-task";
        taskId: string;
        turnId: string;
      }
    | null;
  hostId: string | null;
  key: string;
  localConversationId: string | null;
  source: "local" | "remote-host" | "cloud";
  sortAtMs: number;
  status: AvatarOverlayActivityStatus;
  subtitle: string | null;
  title: string;
  turnKey: string | null;
  updatedAtMs: number;
  waitingRequest: CompactWaitingRequest | null;
};
export type RealtimeVoiceButtonProps = {
  areControlsVisible?: boolean;
  canRevealControls?: boolean;
  canStart: boolean;
  isRealtimeVoiceSurfaceVisible?: boolean;
  isMicrophoneMuted?: boolean;
  isMuted?: boolean;
  onStart?: () => void;
  onStop?: () => void;
  onToggleMicrophoneMute?: () => void;
  onToggleMute?: () => void;
  phase: "inactive" | "starting" | "active" | string;
  waveformCanvasRef: RefObject<HTMLCanvasElement>;
};
export type AvatarOverlayCloseButtonProps = {
  ariaLabel: string;
  onClick: () => void;
};
export type RealtimeVoiceControlButtonProps = {
  ariaLabel: string;
  children: ReactNode;
  className?: string;
  isPressed?: boolean;
  onClick: () => void;
  tooltipContent: ReactNode;
};
