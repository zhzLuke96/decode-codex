// Restored from ref/webview/assets/app-initial~app-main~automations-page-Bc0ZtIBr.js
// Controlled folder-path input for the remote project setup dialog.
import React, {
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type ReactElement,
} from "react";

export interface RemoteDirectoryPathInputProps
  extends Omit<ComponentPropsWithoutRef<"input">, "onChange" | "value"> {
  hostId: string;
  initialDirectoryPath?: string | null;
  selectedPath?: string;
  setSelectedPath?: (path: string) => void;
}

export function RemoteDirectoryPathInput({
  className,
  disabled,
  hostId,
  initialDirectoryPath,
  selectedPath = "",
  setSelectedPath,
  ...props
}: RemoteDirectoryPathInputProps): ReactElement {
  const appliedInitialPathKeyRef = React.useRef<string | null>(null);

  React.useEffect(() => {
    const initialPath = initialDirectoryPath?.trim();
    if (!initialPath || selectedPath.trim().length > 0) return;
    const pathKey = `${hostId}:${initialPath}`;
    if (appliedInitialPathKeyRef.current === pathKey) return;
    appliedInitialPathKeyRef.current = pathKey;
    setSelectedPath?.(initialPath);
  }, [hostId, initialDirectoryPath, selectedPath, setSelectedPath]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedPath?.(event.currentTarget.value);
  };

  return (
    <input
      autoComplete="off"
      className={[
        "h-10 rounded-xl border border-token-border bg-token-input-background px-3 text-sm text-token-text-primary outline-none placeholder:text-token-description-foreground focus:border-token-border-focus disabled:cursor-not-allowed disabled:opacity-50",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-host-id={hostId}
      disabled={disabled}
      onChange={handleChange}
      placeholder="/path/to/project"
      spellCheck={false}
      value={selectedPath}
      {...props}
    />
  );
}
