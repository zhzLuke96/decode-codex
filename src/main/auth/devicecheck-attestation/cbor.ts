// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Minimal CBOR encoder used for DeviceCheck token envelopes.

export function encodeUtf8Text(value: string): Buffer {
  const data = Buffer.from(value, "utf8");
  return Buffer.concat([encodeMajorTypeLength(0x60, data.length), data]);
}

export function encodeUnsignedInteger(value: number): Buffer {
  if (!Number.isSafeInteger(value) || value < 0) {
    throw Error(`Invalid CBOR unsigned integer: ${value}`);
  }
  return encodeMajorTypeLength(0, value);
}

export function encodeFloat64(value: number): Buffer {
  const data = Buffer.allocUnsafe(9);
  data[0] = 0xfb;
  data.writeDoubleBE(value, 1);
  return data;
}

export function encodeArray(items: readonly Buffer[]): Buffer {
  return Buffer.concat([encodeMajorTypeLength(0x80, items.length), ...items]);
}

export function encodeMap(
  entries: readonly (readonly [number, Buffer])[],
): Buffer {
  return Buffer.concat([
    encodeMajorTypeLength(0xa0, entries.length),
    ...entries.flatMap(([key, value]) => [encodeUnsignedInteger(key), value]),
  ]);
}

export function encodeByteString(value: Buffer): Buffer {
  return Buffer.concat([encodeMajorTypeLength(0x40, value.length), value]);
}

export function encodeStringPair(key: string, value: string): Buffer {
  return Buffer.concat([encodeUtf8Text(key), encodeUtf8Text(value)]);
}

export function encodeIntegerPair(key: string, value: number): Buffer {
  return Buffer.concat([encodeUtf8Text(key), encodeUnsignedInteger(value)]);
}

export function encodeFloatPair(key: string, value: number): Buffer {
  return Buffer.concat([encodeUtf8Text(key), encodeFloat64(value)]);
}

function encodeMajorTypeLength(majorType: number, length: number): Buffer {
  if (length < 24) return Buffer.from([majorType + length]);
  if (length <= 0xff) return Buffer.from([majorType + 24, length]);
  if (length <= 0xffff) {
    const data = Buffer.allocUnsafe(3);
    data[0] = majorType + 25;
    data.writeUInt16BE(length, 1);
    return data;
  }
  if (length <= 0xffffffff) {
    const data = Buffer.allocUnsafe(5);
    data[0] = majorType + 26;
    data.writeUInt32BE(length, 1);
    return data;
  }
  throw Error(`CBOR length too large: ${length}`);
}
