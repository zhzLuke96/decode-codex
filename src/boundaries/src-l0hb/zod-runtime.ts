// Restored from ref/webview/assets/src-l0hb-mz-p.js
import { z, type ZodTypeAny } from "zod";

export const srcAa = z.string;
export const srcWa = z.number;
export const srcHa = z.boolean;
export const srcXa = z.literal;
export const srcJa = z.union;
export const srcKa = z.strictObject;
export const srcTa = z.object;
export const srcLa = z.enum;
export const _srcLa = z.enum;
export const srcNa = z.url;
export const srcOa = z.record;
export const srcPa = z.array;
export const _srcPa = z.array;
export const srcMa = z.json;
export const _srcMa = z.unknown;
export const srcFa = z.iso.datetime;
export const srcA = z.discriminatedUnion;
export const srcBa = z.json;
export const srcIa = (
  z as unknown as {
    toJSONSchema: (schema: ZodTypeAny) => unknown;
  }
).toJSONSchema;
export const zodStringSchema = srcAa;
export const zodNumberSchema = srcWa;
export const zodObjectSchema = srcTa;
export const zodEnumSchema = srcLa;
export const zodRecordSchema = srcOa;
export const zodJsonValueSchema = srcBa;
export const zodString = srcAa;
export const zodNumber = srcWa;
export const zodObject = srcTa;
export const zodLiteral = srcXa;
export const zodArray = srcPa;
export const zodJson = srcMa;
export const zodPreprocessSchema = z.preprocess;
export const zString = srcAa;
export const zStrictObject = srcKa;
export const createJsonSchemaParser = srcBa;
export const zodToJsonSchema = srcIa;

export function initZodRuntimeChunk(): void {}

export function srcEa(schema: ZodTypeAny): ZodTypeAny {
  return schema.optional();
}

export function srcSa(shape: z.ZodRawShape): ZodTypeAny {
  return z.object(shape).passthrough();
}
