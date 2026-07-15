// Restored from ref/webview/assets/use-dictation-DQROZBbT.js
// use-dictation-DQROZBbT chunk restored from the Codex webview bundle.
import type React from "react";
export type DictationAction = "insert" | "send" | "abort";
export type StopDictation = (action: DictationAction) => void;
export type DictationHandlers = {
  getSurroundingText?: (() => string | null | undefined) | null;
  onStartError(error: unknown): void;
  onTranscribeError(error: unknown): void;
  onTranscriptInsert(transcript: string): void;
  onTranscriptSend(transcript: string): void;
  onUnsupported(): void;
};
export type UseDictationCoreOptions = DictationHandlers & {
  cleanupEnabled: boolean;
  enabled: boolean;
  streamingEnabled: boolean;
};
export type UseDictationOptions = DictationHandlers & {
  enabled: boolean;
};
export type PendingTranscription = {
  action: DictationAction;
  audio: Blob;
  handlers: DictationHandlers;
};
export type UseDictationResult = {
  abortDictation: () => void;
  canRetryDictation: boolean;
  isDictating: boolean;
  isTranscribing: boolean;
  recordingDurationMs: number;
  retryDictation: () => Promise<void>;
  startDictation: () => Promise<void>;
  stopDictation: StopDictation;
  waveformCanvasRef: React.RefObject<HTMLCanvasElement | null>;
};
export type FooterAction = {
  ariaLabel: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick: () => void;
  tooltipContent: React.ReactNode;
};
export type ComposerContextButtonProps = {
  active?: boolean;
  disabled?: boolean;
  onOpen: () => void;
};
export type DictationRecordingFooterProps = {
  isTranscribing: boolean;
  leadingAccessory?: React.ReactNode;
  noBottomMargin?: boolean;
  recordingDurationMs: number;
  stopDictation: StopDictation;
  tooltipPortalContainer?: HTMLElement | null;
  waveformCanvasRef: React.RefObject<HTMLCanvasElement | null>;
};
export type RealtimeVoicePhase = "active" | "starting" | "stopping";
export type RealtimeVoiceFooterProps = {
  isMicrophoneMuted: boolean;
  isMuted: boolean;
  noBottomMargin?: boolean;
  phase: RealtimeVoicePhase;
  sendAction?: React.ReactNode;
  stopRealtime: () => void;
  toggleMicrophoneMute: () => void;
  toggleMute: () => void;
  tooltipPortalContainer?: HTMLElement | null;
  waveformCanvasRef: React.RefObject<HTMLCanvasElement | null>;
};
export type DictationButtonProps = {
  canRetryDictation: boolean;
  className?: string;
  color?: "ghost" | "secondary";
  disabled?: boolean;
  idleIcon?: React.ReactNode;
  isDictating?: boolean;
  isTranscribing: boolean;
  isVisible: boolean;
  retryDictation: () => void;
  shortcutLabel?: React.ReactNode;
  size?: "composer" | "icon";
  startDictation: () => Promise<void>;
  stopDictation?: StopDictation;
  tooltipPortalContainer?: HTMLElement | null;
};
