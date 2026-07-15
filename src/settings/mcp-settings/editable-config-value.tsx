// Restored from ref/webview/assets/mcp-settings-Cq9pFeQZ.js
// Reusable editor for string, list, and record MCP configuration fields.
import type { InputHTMLAttributes } from "react";
import clsx from "clsx";
import { Button } from "../../ui/button";
import { PlusIcon } from "../../icons/plus-icon";
import { TrashIcon } from "../../icons/trash-icon";
import { useIntl } from "../../vendor/react-intl";
import { SettingsSchemaValueType } from "../settings-sections";
import type { EditableConfigValueProps } from "./types";

export function EditableConfigValue(props: EditableConfigValueProps) {
  const isString = props.inputType === SettingsSchemaValueType.String;
  const isArray = props.inputType === SettingsSchemaValueType.Array;
  const isRecord = props.inputType === SettingsSchemaValueType.Record;
  const intl = useIntl();
  const defaultKeyPlaceholder = intl.formatMessage({
    id: "settings.editRow.headerPlaceholder",
    defaultMessage: "Key",
    description: "Placeholder for record key input",
  });
  const defaultValuePlaceholder = intl.formatMessage({
    id: "settings.editRow.valuePlaceholder",
    defaultMessage: "Value",
    description: "Placeholder for record value input",
  });
  const removeEntryLabel = intl.formatMessage({
    id: "settings.editRow.removeEntry",
    defaultMessage: "Remove entry",
    description: "Label for removing an entry from a list",
  });

  let keyPlaceholder = defaultKeyPlaceholder;
  let valuePlaceholder = defaultValuePlaceholder;
  if (isRecord) {
    const [firstPlaceholder] = props.placeHolderValue;
    keyPlaceholder = firstPlaceholder?.key ?? defaultKeyPlaceholder;
    valuePlaceholder = firstPlaceholder?.value ?? defaultValuePlaceholder;
  }

  if (isString) {
    return (
      <div className="flex flex-col gap-2 rounded-lg bg-token-input-background px-3 py-2">
        <p className="text-base font-medium text-token-text-primary">
          {props.title}
        </p>
        <McpSettingsInput
          aria-label={props.inputAriaLabel}
          className="text-base"
          disabled={props.disabled}
          onChange={(event) => {
            props.onEdit(event.target.value);
          }}
          placeholder={props.placeHolderValue}
          value={props.value}
        />
      </div>
    );
  }

  const arrayValues = isArray
    ? props.value.length > 0
      ? props.value
      : [""]
    : [];
  const recordValues = isRecord
    ? props.value.length > 0
      ? props.value
      : [
          {
            key: "",
            value: "",
          },
        ]
    : [];

  const valueInputs = isArray
    ? arrayValues.map((item, index) => (
        <div key={`list-${index}`} className="flex items-center gap-2">
          <McpSettingsInput
            aria-label={props.inputAriaLabel}
            className="text-base"
            disabled={props.disabled}
            onChange={(event) => {
              const nextValues = [...arrayValues];
              nextValues[index] = event.target.value;
              props.onEdit(nextValues);
            }}
            placeholder={
              props.placeHolderValue.length > 0
                ? (props.placeHolderValue[index] ??
                  props.placeHolderValue[0] ??
                  "")
                : ""
            }
            value={item}
          />
          <Button
            aria-label={removeEntryLabel}
            color="ghost"
            disabled={
              props.disabled ||
              (arrayValues.length <= 1 && item.trim().length === 0)
            }
            onClick={() => {
              props.onEdit(
                props.value.filter((_, itemIndex) => itemIndex !== index),
              );
            }}
            size="icon"
          >
            <TrashIcon className="icon-2xs" />
          </Button>
        </div>
      ))
    : recordValues.map((item, index) => (
        <div
          key={`record-${index}`}
          className="grid grid-cols-[1fr_1fr_auto] items-center gap-2"
        >
          <McpSettingsInput
            aria-label={props.inputAriaLabel}
            className="text-sm"
            disabled={props.disabled}
            onChange={(event) => {
              const nextValues = [...recordValues];
              nextValues[index] = {
                ...nextValues[index],
                key: event.target.value,
              };
              props.onEdit(nextValues);
            }}
            placeholder={keyPlaceholder}
            value={item.key}
          />
          <McpSettingsInput
            aria-label={props.inputAriaLabel}
            className="text-sm"
            disabled={props.disabled}
            onChange={(event) => {
              const nextValues = [...recordValues];
              nextValues[index] = {
                ...nextValues[index],
                value: event.target.value,
              };
              props.onEdit(nextValues);
            }}
            placeholder={valuePlaceholder}
            value={item.value}
          />
          <Button
            aria-label={removeEntryLabel}
            color="ghost"
            disabled={
              props.disabled ||
              (recordValues.length <= 1 &&
                item.key.trim().length === 0 &&
                item.value.trim().length === 0)
            }
            onClick={() => {
              props.onEdit(
                props.value.filter((_, itemIndex) => itemIndex !== index),
              );
            }}
            size="icon"
          >
            <TrashIcon className="icon-2xs" />
          </Button>
        </div>
      ));

  const addEntry = () => {
    if (isArray) {
      props.onEdit(props.value.length > 0 ? [...props.value, ""] : [""]);
      return;
    }
    props.onEdit([
      ...recordValues,
      {
        key: "",
        value: "",
      },
    ]);
  };

  return (
    <div className="flex flex-col gap-3 rounded-lg bg-token-input-background px-3 py-2">
      <p className="text-base font-medium text-token-text-primary">
        {props.title}
      </p>
      <div className="flex flex-col gap-2">{valueInputs}</div>
      <Button
        className={clsx(
          "text-token-text-secondary/90 justify-center rounded-md border border-dashed text-base",
        )}
        color="secondary"
        disabled={props.disabled}
        onClick={addEntry}
        size="toolbar"
      >
        <PlusIcon className="icon-2xs" />
        {props.addLabel ?? null}
      </Button>
    </div>
  );
}

function McpSettingsInput({
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx(
        "bg-token-input-background text-token-input-foreground placeholder:text-token-input-placeholder-foreground w-full rounded-md border border-token-input-border px-2.5 py-1.5 outline-none focus:border-token-focus-border",
        className,
      )}
      {...rest}
    />
  );
}
