// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Single toast surface: renders either custom content or a leveled Alert, then
// auto-dismisses after `duration` seconds and notifies `onRemove` once hidden.
import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";
import clsx from "clsx";
import { Alert } from "../utils/alert";
import {
  CheckmarkIcon,
  ErrorIcon,
  WarningIcon,
} from "../boundaries/onboarding-commons-externals.facade";

type ToastLevel = "info" | "success" | "warning" | "danger";

const toastClasses = {
  root: "_root_gnhgp_23",
  "toast-open": "_toast-open_gnhgp_1",
  "toast-close": "_toast-close_gnhgp_1",
  alert: "_alert_gnhgp_43",
};

const TOAST_LEVEL_ICONS: Partial<
  Record<ToastLevel, ComponentType<{ className?: string }>>
> = {
  success: CheckmarkIcon,
  warning: WarningIcon,
  danger: ErrorIcon,
};

export interface ToastProps {
  zIndex?: number;
  duration?: number;
  onRemove?: () => void;
  level: ToastLevel;
  title?: ReactNode;
  description?: ReactNode;
  content?: ReactNode;
  hasCloseButton?: boolean;
  isShown?: boolean;
  testId?: string;
}

export function Toast({
  zIndex,
  duration,
  onRemove,
  level,
  title,
  description,
  content,
  hasCloseButton,
  isShown = true,
  testId,
}: ToastProps) {
  const [isDismissed, setIsDismissed] = useState(false);
  const dismissTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isVisible = isShown && !isDismissed;

  const clearDismissTimeout = () => {
    if (dismissTimeoutRef.current) {
      clearTimeout(dismissTimeoutRef.current);
      dismissTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    if (isVisible && duration) {
      dismissTimeoutRef.current = setTimeout(() => {
        setIsDismissed(true);
      }, duration * 1000);
    }
    return clearDismissTimeout;
  }, [duration, isVisible]);

  useEffect(() => {
    if (!isVisible) onRemove?.();
  }, [isVisible, onRemove]);

  if (!isVisible) return null;

  const icon = TOAST_LEVEL_ICONS[level];

  return (
    <div className={clsx(toastClasses.root, "no-drag")} style={{ zIndex }}>
      <div className="no-drag pointer-events-auto w-full p-1 text-center md:w-auto md:text-justify">
        {content ? (
          <div data-testid={testId}>{content}</div>
        ) : (
          <Alert
            className={toastClasses.alert}
            icon={icon}
            level={level}
            onRemove={hasCloseButton ? () => setIsDismissed(true) : undefined}
            testId={testId}
          >
            <div
              className={clsx("whitespace-pre-wrap text-start", {
                "font-medium": description,
              })}
            >
              {title}
            </div>
            {description ? (
              <div className="text-start">{description}</div>
            ) : null}
          </Alert>
        )}
      </div>
    </div>
  );
}
