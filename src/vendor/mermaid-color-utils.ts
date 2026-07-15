// Restored from ref/webview/assets/dist-Dcs2yc8m.js
// Flat boundary. Vendored Mermaid color parsing and transform helpers.

type ColorChannel = "r" | "g" | "b" | "h" | "s" | "l" | "a";

type ColorData = Partial<Record<ColorChannel, number>>;

const CHANNEL_LIMITS = {
  min: { r: 0, g: 0, b: 0, s: 0, l: 0, a: 0 },
  max: { r: 255, g: 255, b: 255, h: 360, s: 100, l: 100, a: 1 },
} as const;

const CSS_COLORS: Record<string, string> = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyanaqua: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  transparent: "#00000000",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32",
};

const HEX_RE = /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i;
const HSL_RE =
  /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i;
const RGB_RE =
  /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i;

function clamp(channel: ColorChannel, value: number): number {
  if (channel === "h") return value % CHANNEL_LIMITS.max.h;
  const min = CHANNEL_LIMITS.min[channel];
  const max = CHANNEL_LIMITS.max[channel];
  return value >= max ? max : value < min ? min : value;
}

function round(value: number): number {
  return Math.round(value * 1e10) / 1e10;
}

function toLinear(value: number): number {
  const normalized = value / 255;
  return value > 0.03928
    ? ((normalized + 0.055) / 1.055) ** 2.4
    : normalized / 12.92;
}

function hueToRgb(start: number, end: number, hue: number): number {
  if (hue < 0) hue += 1;
  if (hue > 1) hue -= 1;
  if (hue < 1 / 6) return start + (end - start) * 6 * hue;
  if (hue < 1 / 2) return end;
  if (hue < 2 / 3) return start + (end - start) * (2 / 3 - hue) * 6;
  return start;
}

function hslToRgb(data: ColorData, channel: "r" | "g" | "b"): number {
  let { h = 0, s = 0, l = 0 } = data;
  if (!s) return l * 2.55;
  h /= 360;
  s /= 100;
  l /= 100;
  const end = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const start = 2 * l - end;
  if (channel === "r") return hueToRgb(start, end, h + 1 / 3) * 255;
  if (channel === "g") return hueToRgb(start, end, h) * 255;
  return hueToRgb(start, end, h - 1 / 3) * 255;
}

function rgbToHsl(data: ColorData, channel: "h" | "s" | "l"): number {
  let { r = 0, g = 0, b = 0 } = data;
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const lightness = (max + min) / 2;
  if (channel === "l") return lightness * 100;
  if (max === min) return 0;
  const delta = max - min;
  const saturation =
    lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  if (channel === "s") return saturation * 100;
  if (max === r) return ((g - b) / delta + (g < b ? 6 : 0)) * 60;
  if (max === g) return ((b - r) / delta + 2) * 60;
  return ((r - g) / delta + 4) * 60;
}

class ParsedColor {
  public changed = false;
  private mode: "all" | "rgb" | "hsl" = "all";

  public constructor(
    public data: ColorData,
    private readonly originalColor?: string,
  ) {}

  public get r(): number {
    return this.mode !== "hsl" && this.data.r !== undefined
      ? this.data.r
      : hslToRgb(this.data, "r");
  }

  public get g(): number {
    return this.mode !== "hsl" && this.data.g !== undefined
      ? this.data.g
      : hslToRgb(this.data, "g");
  }

  public get b(): number {
    return this.mode !== "hsl" && this.data.b !== undefined
      ? this.data.b
      : hslToRgb(this.data, "b");
  }

  public get h(): number {
    return this.mode !== "rgb" && this.data.h !== undefined
      ? this.data.h
      : rgbToHsl(this.data, "h");
  }

  public get s(): number {
    return this.mode !== "rgb" && this.data.s !== undefined
      ? this.data.s
      : rgbToHsl(this.data, "s");
  }

  public get l(): number {
    return this.mode !== "rgb" && this.data.l !== undefined
      ? this.data.l
      : rgbToHsl(this.data, "l");
  }

  public get a(): number {
    return this.data.a ?? 1;
  }

  public set r(value: number) {
    this.mode = "rgb";
    this.changed = true;
    this.data.r = value;
  }

  public set g(value: number) {
    this.mode = "rgb";
    this.changed = true;
    this.data.g = value;
  }

  public set b(value: number) {
    this.mode = "rgb";
    this.changed = true;
    this.data.b = value;
  }

  public set h(value: number) {
    this.mode = "hsl";
    this.changed = true;
    this.data.h = value;
  }

  public set s(value: number) {
    this.mode = "hsl";
    this.changed = true;
    this.data.s = value;
  }

  public set l(value: number) {
    this.mode = "hsl";
    this.changed = true;
    this.data.l = value;
  }

  public set a(value: number) {
    this.changed = true;
    this.data.a = value;
  }

  public prefersHsl(): boolean {
    return this.mode === "hsl" || this.data.r === undefined;
  }

  public toCss(): string {
    if (!this.changed && this.originalColor) return this.originalColor;
    return this.prefersHsl() ? stringifyHsl(this) : stringifyRgb(this);
  }
}

function parseHue(value: string): number {
  const match = value.match(/^(.+?)(deg|grad|rad|turn)$/i);
  if (!match) return clamp("h", parseFloat(value));
  const [, amount, unit] = match;
  if (unit === "grad") return clamp("h", parseFloat(amount) * 0.9);
  if (unit === "rad") return clamp("h", (parseFloat(amount) * 180) / Math.PI);
  if (unit === "turn") return clamp("h", parseFloat(amount) * 360);
  return clamp("h", parseFloat(amount));
}

function parseHex(color: string): ParsedColor | undefined {
  if (color.charCodeAt(0) !== 35) return undefined;
  const match = color.match(HEX_RE);
  if (!match) return undefined;
  const value = match[1];
  const parsed = parseInt(value, 16);
  const isAlpha = value.length % 4 === 0;
  const isLong = value.length > 4;
  const scale = isLong ? 1 : 17;
  const step = isLong ? 8 : 4;
  const alphaOffset = isAlpha ? 0 : -1;
  const mask = isLong ? 255 : 15;
  return new ParsedColor(
    {
      r: ((parsed >> (step * (alphaOffset + 3))) & mask) * scale,
      g: ((parsed >> (step * (alphaOffset + 2))) & mask) * scale,
      b: ((parsed >> (step * (alphaOffset + 1))) & mask) * scale,
      a: isAlpha ? ((parsed & mask) * scale) / 255 : 1,
    },
    color,
  );
}

function parseRgb(color: string): ParsedColor | undefined {
  const first = color.charCodeAt(0);
  if (first !== 114 && first !== 82) return undefined;
  const match = color.match(RGB_RE);
  if (!match) return undefined;
  const [
    ,
    red,
    redPercent,
    green,
    greenPercent,
    blue,
    bluePercent,
    alpha,
    alphaPercent,
  ] = match;
  return new ParsedColor(
    {
      r: clamp("r", redPercent ? parseFloat(red) * 2.55 : parseFloat(red)),
      g: clamp(
        "g",
        greenPercent ? parseFloat(green) * 2.55 : parseFloat(green),
      ),
      b: clamp("b", bluePercent ? parseFloat(blue) * 2.55 : parseFloat(blue)),
      a: alpha
        ? clamp("a", alphaPercent ? parseFloat(alpha) / 100 : parseFloat(alpha))
        : 1,
    },
    color,
  );
}

function parseHsl(color: string): ParsedColor | undefined {
  const first = color.charCodeAt(0);
  if (first !== 104 && first !== 72) return undefined;
  const match = color.match(HSL_RE);
  if (!match) return undefined;
  const [, hue, saturation, lightness, alpha, alphaPercent] = match;
  return new ParsedColor(
    {
      h: parseHue(hue),
      s: clamp("s", parseFloat(saturation)),
      l: clamp("l", parseFloat(lightness)),
      a: alpha
        ? clamp("a", alphaPercent ? parseFloat(alpha) / 100 : parseFloat(alpha))
        : 1,
    },
    color,
  );
}

function parseKeyword(color: string): ParsedColor | undefined {
  const hex = CSS_COLORS[color.toLowerCase()];
  return hex ? parseHex(hex) : undefined;
}

function parseColor(color: string | ColorData | ParsedColor): ParsedColor {
  if (color instanceof ParsedColor) return color;
  if (typeof color !== "string") return new ParsedColor({ ...color });
  const parsed =
    parseHex(color) ||
    parseRgb(color) ||
    parseHsl(color) ||
    parseKeyword(color);
  if (!parsed) throw Error(`Unsupported color format: "${color}"`);
  return parsed;
}

function stringifyHex({ r, g, b, a }: ParsedColor): string {
  const red = Math.round(r).toString(16).padStart(2, "0");
  const green = Math.round(g).toString(16).padStart(2, "0");
  const blue = Math.round(b).toString(16).padStart(2, "0");
  if (a < 1) {
    const alpha = Math.round(a * 255)
      .toString(16)
      .padStart(2, "0");
    return `#${red}${green}${blue}${alpha}`;
  }
  return `#${red}${green}${blue}`;
}

function stringifyRgb(color: ParsedColor): string {
  const { r, g, b, a } = color;
  if (
    a < 1 ||
    !Number.isInteger(r) ||
    !Number.isInteger(g) ||
    !Number.isInteger(b)
  ) {
    return `rgba(${round(r)}, ${round(g)}, ${round(b)}, ${round(a)})`;
  }
  return stringifyHex(color);
}

function stringifyHsl({ h, s, l, a }: ParsedColor): string {
  if (a < 1) return `hsla(${round(h)}, ${round(s)}%, ${round(l)}%, ${a})`;
  return `hsl(${round(h)}, ${round(s)}%, ${round(l)}%)`;
}

function setChannels(
  color: string | ColorData | ParsedColor,
  channels: ColorData,
): string {
  const parsed = parseColor(color);
  for (const [channel, value] of Object.entries(channels) as [
    ColorChannel,
    number,
  ][]) {
    parsed[channel] = clamp(channel, value);
  }
  return parsed.toCss();
}

export function rgba(
  colorOrRed: string | ColorData | number,
  greenOrAlpha: number,
  blue: number = 0,
  alpha: number = 1,
): string {
  if (typeof colorOrRed !== "number") {
    return setChannels(colorOrRed, { a: greenOrAlpha });
  }
  return new ParsedColor({
    r: clamp("r", colorOrRed),
    g: clamp("g", greenOrAlpha),
    b: clamp("b", blue),
    a: clamp("a", alpha),
  }).toCss();
}

export function colorChannel(
  color: string | ColorData,
  channel: ColorChannel,
): number {
  return round(parseColor(color)[channel]);
}

function luminance(color: string | ColorData): number {
  const parsed = parseColor(color);
  return round(
    0.2126 * toLinear(parsed.r) +
      0.7152 * toLinear(parsed.g) +
      0.0722 * toLinear(parsed.b),
  );
}

function isLight(color: string | ColorData): boolean {
  return luminance(color) >= 0.5;
}

export function isDark(color: string | ColorData): boolean {
  return !isLight(color);
}

function changeChannel(
  color: string | ColorData,
  channel: ColorChannel,
  amount: number,
): string {
  const parsed = parseColor(color);
  const next = clamp(channel, parsed[channel] + amount);
  if (parsed[channel] !== next) parsed[channel] = next;
  return parsed.toCss();
}

export function lighten(color: string | ColorData, amount: number): string {
  return changeChannel(color, "l", amount);
}

export function darken(color: string | ColorData, amount: number): string {
  return changeChannel(color, "l", -amount);
}

export function transparentize(
  color: string | ColorData,
  amount: number,
): string {
  return changeChannel(color, "a", -amount);
}

export function adjustColor(
  color: string | ColorData,
  channels: ColorData,
): string {
  const parsed = parseColor(color);
  const next: ColorData = {};
  for (const [channel, amount] of Object.entries(channels) as [
    ColorChannel,
    number,
  ][]) {
    if (amount) next[channel] = parsed[channel] + amount;
  }
  return setChannels(color, next);
}

function mixColor(
  color: string | ColorData | ParsedColor,
  other: string | ColorData,
  weight = 50,
): string {
  const first = parseColor(color);
  const second = parseColor(other);
  const percentage = weight / 100;
  const weighted = percentage * 2 - 1;
  const alphaDelta = first.a - second.a;
  const firstWeight =
    ((weighted * alphaDelta === -1
      ? weighted
      : (weighted + alphaDelta) / (1 + weighted * alphaDelta)) +
      1) /
    2;
  const secondWeight = 1 - firstWeight;
  return rgba(
    first.r * firstWeight + second.r * secondWeight,
    first.g * firstWeight + second.g * secondWeight,
    first.b * firstWeight + second.b * secondWeight,
    first.a * percentage + second.a * (1 - percentage),
  );
}

export function invertColor(
  color: string | ColorData,
  weight: number = 100,
): string {
  const parsed = parseColor(color);
  parsed.r = 255 - parsed.r;
  parsed.g = 255 - parsed.g;
  parsed.b = 255 - parsed.b;
  return mixColor(parsed, color, weight);
}

export function initMermaidColorUtils() {}
