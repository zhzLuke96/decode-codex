// Restored from ref/webview/assets/checkbox-CrhGhZh2.js
import clsx from "clsx";
import React from "react";
import type {
  ButtonHTMLAttributes,
  CSSProperties,
  KeyboardEvent,
  MouseEvent,
  Ref,
} from "react";
import { CheckMdIcon } from "../icons/check-md-icon";
import { MinusIcon } from "../icons/minus-icon";
type CheckedState = boolean | "indeterminate";
type CheckboxProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "checked" | "defaultChecked" | "onChange" | "type" | "value"
> & {
  checked?: CheckedState;
  defaultChecked?: CheckedState;
  form?: string;
  name?: string;
  onCheckedChange?: (checked: boolean) => void;
  required?: boolean;
  value?: string;
};
export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  function Checkbox(
    {
      checked,
      className,
      defaultChecked,
      disabled = false,
      form,
      name,
      onCheckedChange,
      onClick,
      onKeyDown,
      required,
      style,
      value = "on",
      ...rest
    },
    forwardedRef,
  ) {
    const isControlled = checked !== undefined;
    const [uncontrolledChecked, setUncontrolledChecked] =
      React.useState<CheckedState>(defaultChecked ?? false);
    const currentChecked = isControlled ? checked : uncontrolledChecked;
    const initialCheckedRef = React.useRef(currentChecked);
    const buttonRef = React.useRef<HTMLButtonElement | null>(null);
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const consumerStoppedPropagationRef = React.useRef(false);
    const [control, setControl] = React.useState<HTMLButtonElement | null>(
      null,
    );
    const controlSize = useElementSize(control);
    const previousChecked = usePrevious(currentChecked);
    const isFormControl = control
      ? Boolean(form) || !!control.closest("form")
      : true;
    const setChecked = React.useCallback(
      (
        nextChecked: CheckedState | ((checked: CheckedState) => CheckedState),
      ) => {
        const resolvedChecked =
          typeof nextChecked === "function"
            ? nextChecked(currentChecked)
            : nextChecked;
        if (!isControlled) {
          setUncontrolledChecked(resolvedChecked);
        }
        if (resolvedChecked !== currentChecked) {
          onCheckedChange?.(
            isIndeterminate(resolvedChecked) ? true : resolvedChecked,
          );
        }
      },
      [currentChecked, isControlled, onCheckedChange],
    );
    const setButtonRefs = React.useMemo(
      () =>
        composeRefs<HTMLButtonElement>(forwardedRef, (node) => {
          buttonRef.current = node;
          setControl(node);
        }),
      [forwardedRef],
    );
    React.useEffect(() => {
      const formElement = buttonRef.current?.form;
      if (!formElement) {
        return;
      }
      const handleReset = () => {
        setChecked(initialCheckedRef.current);
      };
      formElement.addEventListener("reset", handleReset);
      return () => {
        formElement.removeEventListener("reset", handleReset);
      };
    }, [setChecked]);
    React.useEffect(() => {
      const input = inputRef.current;
      if (!input) {
        return;
      }
      input.indeterminate = isIndeterminate(currentChecked);
      if (previousChecked === currentChecked) {
        return;
      }
      const checkedSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "checked",
      )?.set;
      if (checkedSetter) {
        checkedSetter.call(
          input,
          isIndeterminate(currentChecked) ? false : currentChecked,
        );
        input.dispatchEvent(
          new Event("click", {
            bubbles: !consumerStoppedPropagationRef.current,
          }),
        );
      }
    }, [currentChecked, previousChecked]);
    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(event);
      if (!event.defaultPrevented && event.key === "Enter") {
        event.preventDefault();
      }
    };
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      if (event.defaultPrevented) {
        return;
      }
      setChecked((current) => (isIndeterminate(current) ? true : !current));
      if (isFormControl && inputRef.current) {
        consumerStoppedPropagationRef.current = event.isPropagationStopped();
        if (!consumerStoppedPropagationRef.current) {
          event.stopPropagation();
        }
      }
    };
    const state = getCheckboxState(currentChecked);
    const rootClassName = clsx(
      "border-token-border peer",
      "data-[state=checked]:bg-token-checkbox-background data-[state=checked]:text-token-checkbox-foreground",
      "data-[state=checked]:border-token-border",
      "data-[state=indeterminate]:bg-token-checkbox-background data-[state=indeterminate]:text-token-checkbox-foreground",
      "data-[state=indeterminate]:border-token-border",
      "focus-visible:border-token-border focus-visible:ring-token-checkbox-background/50 focus-visible:ring-1",
      "aria-invalid:ring-2 aria-invalid:ring-token-error-foreground/20",
      "aria-invalid:border-token-error-foreground",
      "icon-2xs rounded-xs shrink-0 border shadow-sm outline-none transition-[background-color,border-color,box-shadow]",
      "disabled:cursor-not-allowed",
      !disabled && "hover:bg-token-editor-background",
      className,
    );
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        "button",
        {
          ...rest,
          ref: setButtonRefs,
          type: "button",
          role: "checkbox",
          "aria-checked": isIndeterminate(currentChecked)
            ? "mixed"
            : currentChecked,
          "aria-required": required,
          "data-state": state,
          "data-disabled": disabled ? "" : undefined,
          className: rootClassName,
          disabled,
          onClick: handleClick,
          onKeyDown: handleKeyDown,
          style,
          value,
        },
        (currentChecked === true || isIndeterminate(currentChecked)) &&
          React.createElement(
            "span",
            {
              className:
                "flex h-full w-full items-center justify-center text-current",
              "data-state": state,
              "data-disabled": disabled ? "" : undefined,
              style: {
                pointerEvents: "none",
              },
            },
            isIndeterminate(currentChecked)
              ? React.createElement(MinusIcon, {
                  className: "icon-2xs flex-shrink-0",
                })
              : React.createElement(CheckMdIcon, {
                  className: "icon-xxs flex-shrink-0",
                }),
          ),
      ),
      isFormControl &&
        React.createElement("input", {
          ref: inputRef,
          type: "checkbox",
          "aria-hidden": true,
          checked: isIndeterminate(currentChecked) ? false : currentChecked,
          defaultChecked: isIndeterminate(defaultChecked)
            ? false
            : defaultChecked,
          disabled,
          form,
          name,
          readOnly: true,
          required,
          style: getBubbleInputStyle(controlSize),
          tabIndex: -1,
          value,
        }),
    );
  },
);
Checkbox.displayName = "Checkbox";
function usePrevious<T>(value: T) {
  const ref = React.useRef({
    value,
    previous: value,
  });
  return React.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}
function useElementSize(element: HTMLElement | null) {
  const [size, setSize] = React.useState<{
    height: number;
    width: number;
  }>();
  React.useLayoutEffect(() => {
    if (!element) {
      setSize(undefined);
      return;
    }
    const updateSize = () => {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight,
      });
    };
    updateSize();
    if (typeof ResizeObserver === "undefined") {
      return;
    }
    const observer = new ResizeObserver(updateSize);
    observer.observe(element, {
      box: "border-box",
    });
    return () => {
      observer.unobserve(element);
    };
  }, [element]);
  return size;
}
function composeRefs<T>(...refs: Array<Ref<T> | undefined>) {
  return (node: T | null) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }
  };
}
function getBubbleInputStyle(
  size:
    | {
        height: number;
        width: number;
      }
    | undefined,
): CSSProperties {
  return {
    position: "absolute",
    pointerEvents: "none",
    opacity: 0,
    margin: 0,
    transform: "translateX(-100%)",
    width: size?.width,
    height: size?.height,
  };
}
function isIndeterminate(checked: CheckedState | undefined) {
  return checked === "indeterminate";
}
function getCheckboxState(checked: CheckedState) {
  return isIndeterminate(checked)
    ? "indeterminate"
    : checked
      ? "checked"
      : "unchecked";
}
