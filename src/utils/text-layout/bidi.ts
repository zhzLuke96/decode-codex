// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Minimal Unicode bidirectional resolver used by the text-layout engine to assign
// embedding levels to characters so wrapped lines can be measured with mixed
// left-to-right / right-to-left content.

// Bidi character classes for the Latin-1 range (code points 0-255).
const LATIN1_CHAR_TYPES =
  "BN.BN.BN.BN.BN.BN.BN.BN.BN.S.B.S.WS.B.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.B.B.B.S.WS.ON.ON.ET.ET.ET.ON.ON.ON.ON.ON.ON.CS.ON.CS.ON.EN.EN.EN.EN.EN.EN.EN.EN.EN.EN.ON.ON.ON.ON.ON.ON.ON.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.ON.ON.ON.ON.ON.ON.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.ON.ON.ON.ON.BN.BN.BN.BN.BN.BN.B.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.BN.CS.ON.ET.ET.ET.ET.ON.ON.ON.ON.L.ON.ON.ON.ON.ON.ET.ET.EN.EN.ON.L.ON.ON.ON.EN.L.ON.ON.ON.ON.ON.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.ON.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.ON.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L.L".split(
    ".",
  );

// Bidi character classes for the Arabic block (code points 1536-1791, indexed by
// the low byte of the code point).
const ARABIC_CHAR_TYPES =
  "AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.CS.AL.ON.ON.NSM.NSM.NSM.NSM.NSM.NSM.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.AL.AL.AL.AL.AL.AL.AL.AN.AN.AN.AN.AN.AN.AN.AN.AN.AN.ET.AN.AN.AL.AL.AL.NSM.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.NSM.ON.NSM.NSM.NSM.NSM.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL.AL".split(
    ".",
  );

function getCharType(charCode: number): string {
  return charCode <= 255
    ? LATIN1_CHAR_TYPES[charCode]
    : 1424 <= charCode && charCode <= 1524
      ? "R"
      : 1536 <= charCode && charCode <= 1791
        ? ARABIC_CHAR_TYPES[charCode & 255]
        : 1792 <= charCode && charCode <= 2220
          ? "AL"
          : "L";
}

// Resolves embedding levels for an entire string. Returns null when the text has
// no strong RTL characters and can therefore be laid out as plain LTR.
function computeBidiLevels(text: string): Int8Array | null {
  const length = text.length;
  if (length === 0) return null;
  const charTypes: string[] = Array(length);
  let strongRtlCount = 0;
  for (let index = 0; index < length; index++) {
    const charType = getCharType(text.charCodeAt(index));
    if (charType === "R" || charType === "AL" || charType === "AN")
      strongRtlCount++;
    charTypes[index] = charType;
  }
  if (strongRtlCount === 0) return null;

  const baseLevel = length / strongRtlCount < 0.3 ? 0 : 1;
  const levels = new Int8Array(length);
  for (let index = 0; index < length; index++) levels[index] = baseLevel;
  const baseDirection = baseLevel & 1 ? "R" : "L";
  const sentinel = baseDirection;
  let running = sentinel;

  for (let index = 0; index < length; index++)
    charTypes[index] === "NSM"
      ? (charTypes[index] = running)
      : (running = charTypes[index]);

  running = sentinel;
  for (let index = 0; index < length; index++) {
    const charType = charTypes[index];
    charType === "EN"
      ? (charTypes[index] = running === "AL" ? "AN" : "EN")
      : (charType === "R" || charType === "L" || charType === "AL") &&
        (running = charType);
  }

  for (let index = 0; index < length; index++)
    charTypes[index] === "AL" && (charTypes[index] = "R");

  for (let index = 1; index < length - 1; index++) {
    charTypes[index] === "ES" &&
      charTypes[index - 1] === "EN" &&
      charTypes[index + 1] === "EN" &&
      (charTypes[index] = "EN");
    charTypes[index] === "CS" &&
      (charTypes[index - 1] === "EN" || charTypes[index - 1] === "AN") &&
      charTypes[index + 1] === charTypes[index - 1] &&
      (charTypes[index] = charTypes[index - 1]);
  }

  for (let index = 0; index < length; index++) {
    if (charTypes[index] !== "EN") continue;
    let scan: number;
    for (scan = index - 1; scan >= 0 && charTypes[scan] === "ET"; scan--)
      charTypes[scan] = "EN";
    for (scan = index + 1; scan < length && charTypes[scan] === "ET"; scan++)
      charTypes[scan] = "EN";
  }

  for (let index = 0; index < length; index++) {
    const charType = charTypes[index];
    (charType === "WS" ||
      charType === "ES" ||
      charType === "ET" ||
      charType === "CS") &&
      (charTypes[index] = "ON");
  }

  running = sentinel;
  for (let index = 0; index < length; index++) {
    const charType = charTypes[index];
    charType === "EN"
      ? (charTypes[index] = running === "L" ? "L" : "EN")
      : (charType === "R" || charType === "L") && (running = charType);
  }

  for (let index = 0; index < length; index++) {
    if (charTypes[index] !== "ON") continue;
    let runEnd = index + 1;
    for (; runEnd < length && charTypes[runEnd] === "ON"; ) runEnd++;
    const before = index > 0 ? charTypes[index - 1] : sentinel;
    const after = runEnd < length ? charTypes[runEnd] : sentinel;
    const resolved = before === "L" ? "L" : "R";
    if (resolved === (after === "L" ? "L" : "R"))
      for (let fill = index; fill < runEnd; fill++) charTypes[fill] = resolved;
    index = runEnd - 1;
  }

  for (let index = 0; index < length; index++)
    charTypes[index] === "ON" && (charTypes[index] = baseDirection);

  for (let index = 0; index < length; index++) {
    const charType = charTypes[index];
    levels[index] & 1
      ? (charType === "L" || charType === "AN" || charType === "EN") &&
        levels[index]++
      : charType === "R"
        ? levels[index]++
        : (charType === "AN" || charType === "EN") && (levels[index] += 2);
  }

  return levels;
}

// Projects the per-character bidi levels onto a set of segment start offsets.
function mapSegmentBidiLevels(
  text: string,
  charIndices: number[],
): Int8Array | null {
  const levels = computeBidiLevels(text);
  if (levels === null) return null;
  const segmentLevels = new Int8Array(charIndices.length);
  for (let index = 0; index < charIndices.length; index++)
    segmentLevels[index] = levels[charIndices[index]];
  return segmentLevels;
}

export { getCharType, computeBidiLevels, mapSegmentBidiLevels };
