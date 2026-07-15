// Restored from ref/webview/assets/invert-D9sJN2p1.js
// Flat boundary. Vendored invert chunk restored from the Codex webview bundle.
var invertValue1 = {
    min: {
      r: 0,
      g: 0,
      b: 0,
      s: 0,
      l: 0,
      a: 0,
    },
    max: {
      r: 255,
      g: 255,
      b: 255,
      h: 360,
      s: 100,
      l: 100,
      a: 1,
    },
    clamp: {
      r: (invertParam46) =>
        invertParam46 >= 255 ? 255 : invertParam46 < 0 ? 0 : invertParam46,
      g: (invertParam47) =>
        invertParam47 >= 255 ? 255 : invertParam47 < 0 ? 0 : invertParam47,
      b: (invertParam48) =>
        invertParam48 >= 255 ? 255 : invertParam48 < 0 ? 0 : invertParam48,
      h: (invertParam55) => invertParam55 % 360,
      s: (invertParam49) =>
        invertParam49 >= 100 ? 100 : invertParam49 < 0 ? 0 : invertParam49,
      l: (invertParam50) =>
        invertParam50 >= 100 ? 100 : invertParam50 < 0 ? 0 : invertParam50,
      a: (invertParam52) =>
        invertParam52 >= 1 ? 1 : invertParam52 < 0 ? 0 : invertParam52,
    },
    toLinear: (invertParam36) => {
      let _invertL = invertParam36 / 255;
      return invertParam36 > 0.03928
        ? ((_invertL + 0.055) / 1.055) ** 2.4
        : _invertL / 12.92;
    },
    hue2rgb: (invertParam25, _invertL, invertParam26) => (
      invertParam26 < 0 && (invertParam26 += 1),
      invertParam26 > 1 && --invertParam26,
      invertParam26 < 0.16666666666666666
        ? invertParam25 + (_invertL - invertParam25) * 6 * invertParam26
        : invertParam26 < 0.5
          ? _invertL
          : invertParam26 < 0.6666666666666666
            ? invertParam25 +
              (_invertL - invertParam25) *
                (0.6666666666666666 - invertParam26) *
                6
            : invertParam25
    ),
    hsl2rgb: ({ h: _invertL, s, l }, invertParam6) => {
      if (!s) return l * 2.55;
      _invertL /= 360;
      s /= 100;
      l /= 100;
      let invertValue41 = l < 0.5 ? l * (1 + s) : l + s - l * s,
        invertValue42 = 2 * l - invertValue41;
      switch (invertParam6) {
        case "r":
          return (
            invertValue1.hue2rgb(
              invertValue42,
              invertValue41,
              _invertL + 0.3333333333333333,
            ) * 255
          );
        case "g":
          return (
            invertValue1.hue2rgb(invertValue42, invertValue41, _invertL) * 255
          );
        case "b":
          return (
            invertValue1.hue2rgb(
              invertValue42,
              invertValue41,
              _invertL - 0.3333333333333333,
            ) * 255
          );
      }
    },
    rgb2hsl: ({ r: _r, g: _invertL, b }, invertParam2) => {
      _r /= 255;
      _invertL /= 255;
      b /= 255;
      let invertValue22 = Math.max(_r, _invertL, b),
        invertValue23 = Math.min(_r, _invertL, b),
        invertValue24 = (invertValue22 + invertValue23) / 2;
      if (invertParam2 === "l") return invertValue24 * 100;
      if (invertValue22 === invertValue23) return 0;
      let invertValue25 = invertValue22 - invertValue23,
        invertValue26 =
          invertValue24 > 0.5
            ? invertValue25 / (2 - invertValue22 - invertValue23)
            : invertValue25 / (invertValue22 + invertValue23);
      if (invertParam2 === "s") return invertValue26 * 100;
      switch (invertValue22) {
        case _r:
          return ((_invertL - b) / invertValue25 + (_invertL < b ? 6 : 0)) * 60;
        case _invertL:
          return ((b - _r) / invertValue25 + 2) * 60;
        case b:
          return ((_r - _invertL) / invertValue25 + 4) * 60;
        default:
          return -1;
      }
    },
  },
  invertL = {
    channel: invertValue1,
    lang: {
      clamp: (invertParam33, _invertL, invertParam34) =>
        _invertL > invertParam34
          ? Math.min(_invertL, Math.max(invertParam34, invertParam33))
          : Math.min(invertParam34, Math.max(_invertL, invertParam33)),
      round: (invertParam45) => Math.round(invertParam45 * 1e10) / 1e10,
    },
    unit: {
      dec2hex: (invertParam32) => {
        let _invertL = Math.round(invertParam32).toString(16);
        return _invertL.length > 1 ? _invertL : `0${_invertL}`;
      },
    },
  },
  invertValue2 = {};
for (let invertValue75 = 0; invertValue75 <= 255; invertValue75++)
  invertValue2[invertValue75] = invertL.unit.dec2hex(invertValue75);
var invertValue3 = {
    ALL: 0,
    RGB: 1,
    HSL: 2,
  },
  invertValue4 = class {
    constructor() {
      this.type = invertValue3.ALL;
    }
    get() {
      return this.type;
    }
    set(invertParam19) {
      if (this.type && this.type !== invertParam19)
        throw Error("Cannot change both RGB and HSL channels at the same time");
      this.type = invertParam19;
    }
    reset() {
      this.type = invertValue3.ALL;
    }
    is(invertParam44) {
      return this.type === invertParam44;
    }
  },
  invertValue5 = new (class {
    constructor(invertParam31, _invertL) {
      this.color = _invertL;
      this.changed = false;
      this.data = invertParam31;
      this.type = new invertValue4();
    }
    set(invertParam27, _invertL) {
      return (
        (this.color = _invertL),
        (this.changed = false),
        (this.data = invertParam27),
        (this.type.type = invertValue3.ALL),
        this
      );
    }
    _ensureHSL() {
      let invertValue52 = this.data,
        { h, s, l } = invertValue52;
      h === undefined &&
        (invertValue52.h = invertL.channel.rgb2hsl(invertValue52, "h"));
      s === undefined &&
        (invertValue52.s = invertL.channel.rgb2hsl(invertValue52, "s"));
      l === undefined &&
        (invertValue52.l = invertL.channel.rgb2hsl(invertValue52, "l"));
    }
    _ensureRGB() {
      let invertValue53 = this.data,
        { r: _r, g, b } = invertValue53;
      _r === undefined &&
        (invertValue53.r = invertL.channel.hsl2rgb(invertValue53, "r"));
      g === undefined &&
        (invertValue53.g = invertL.channel.hsl2rgb(invertValue53, "g"));
      b === undefined &&
        (invertValue53.b = invertL.channel.hsl2rgb(invertValue53, "b"));
    }
    get r() {
      let invertValue55 = this.data,
        invertValue56 = invertValue55.r;
      return !this.type.is(invertValue3.HSL) && invertValue56 !== undefined
        ? invertValue56
        : (this._ensureHSL(), invertL.channel.hsl2rgb(invertValue55, "r"));
    }
    get g() {
      let invertValue57 = this.data,
        invertValue58 = invertValue57.g;
      return !this.type.is(invertValue3.HSL) && invertValue58 !== undefined
        ? invertValue58
        : (this._ensureHSL(), invertL.channel.hsl2rgb(invertValue57, "g"));
    }
    get b() {
      let invertValue59 = this.data,
        invertValue60 = invertValue59.b;
      return !this.type.is(invertValue3.HSL) && invertValue60 !== undefined
        ? invertValue60
        : (this._ensureHSL(), invertL.channel.hsl2rgb(invertValue59, "b"));
    }
    get h() {
      let invertValue61 = this.data,
        invertValue62 = invertValue61.h;
      return !this.type.is(invertValue3.RGB) && invertValue62 !== undefined
        ? invertValue62
        : (this._ensureRGB(), invertL.channel.rgb2hsl(invertValue61, "h"));
    }
    get s() {
      let invertValue63 = this.data,
        invertValue64 = invertValue63.s;
      return !this.type.is(invertValue3.RGB) && invertValue64 !== undefined
        ? invertValue64
        : (this._ensureRGB(), invertL.channel.rgb2hsl(invertValue63, "s"));
    }
    get l() {
      let invertValue65 = this.data,
        invertValue66 = invertValue65.l;
      return !this.type.is(invertValue3.RGB) && invertValue66 !== undefined
        ? invertValue66
        : (this._ensureRGB(), invertL.channel.rgb2hsl(invertValue65, "l"));
    }
    get a() {
      return this.data.a;
    }
    set r(invertParam37) {
      this.type.set(invertValue3.RGB);
      this.changed = true;
      this.data.r = invertParam37;
    }
    set g(invertParam38) {
      this.type.set(invertValue3.RGB);
      this.changed = true;
      this.data.g = invertParam38;
    }
    set b(invertParam39) {
      this.type.set(invertValue3.RGB);
      this.changed = true;
      this.data.b = invertParam39;
    }
    set h(invertParam40) {
      this.type.set(invertValue3.HSL);
      this.changed = true;
      this.data.h = invertParam40;
    }
    set s(invertParam41) {
      this.type.set(invertValue3.HSL);
      this.changed = true;
      this.data.s = invertParam41;
    }
    set l(invertParam42) {
      this.type.set(invertValue3.HSL);
      this.changed = true;
      this.data.l = invertParam42;
    }
    set a(invertParam43) {
      this.changed = true;
      this.data.a = invertParam43;
    }
  })(
    {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
    },
    "transparent",
  ),
  invertValue6 = {
    re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
    parse: (invertParam5) => {
      if (invertParam5.charCodeAt(0) !== 35) return;
      let _invertL = invertParam5.match(invertValue6.re);
      if (!_invertL) return;
      let invertValue34 = _invertL[1],
        invertValue35 = parseInt(invertValue34, 16),
        invertValue36 = invertValue34.length,
        invertValue37 = invertValue36 % 4 == 0,
        invertValue38 = invertValue36 > 4,
        invertValue39 = invertValue38 ? 1 : 17,
        _invertC = invertValue38 ? 8 : 4,
        invertValue40 = invertValue37 ? 0 : -1,
        _invertS = invertValue38 ? 255 : 15;
      return invertValue5.set(
        {
          r:
            ((invertValue35 >> (_invertC * (invertValue40 + 3))) & _invertS) *
            invertValue39,
          g:
            ((invertValue35 >> (_invertC * (invertValue40 + 2))) & _invertS) *
            invertValue39,
          b:
            ((invertValue35 >> (_invertC * (invertValue40 + 1))) & _invertS) *
            invertValue39,
          a: invertValue37
            ? ((invertValue35 & _invertS) * invertValue39) / 255
            : 1,
        },
        invertParam5,
      );
    },
    stringify: (invertParam13) => {
      let { r: _invertL, g, b, a: invertValue47 } = invertParam13;
      return invertValue47 < 1
        ? `#${invertValue2[Math.round(_invertL)]}${invertValue2[Math.round(g)]}${invertValue2[Math.round(b)]}${invertValue2[Math.round(invertValue47 * 255)]}`
        : `#${invertValue2[Math.round(_invertL)]}${invertValue2[Math.round(g)]}${invertValue2[Math.round(b)]}`;
    },
  },
  invertValue7 = {
    re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
    hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
    _hue2deg: (invertParam3) => {
      let invertValue27 = invertParam3.match(invertValue7.hueRe);
      if (invertValue27) {
        let [, invertValue43, invertValue44] = invertValue27;
        switch (invertValue44) {
          case "grad":
            return invertL.channel.clamp.h(parseFloat(invertValue43) * 0.9);
          case "rad":
            return invertL.channel.clamp.h(
              (parseFloat(invertValue43) * 180) / Math.PI,
            );
          case "turn":
            return invertL.channel.clamp.h(parseFloat(invertValue43) * 360);
        }
      }
      return invertL.channel.clamp.h(parseFloat(invertParam3));
    },
    parse: (invertParam4) => {
      let invertValue28 = invertParam4.charCodeAt(0);
      if (invertValue28 !== 104 && invertValue28 !== 72) return;
      let invertValue29 = invertParam4.match(invertValue7.re);
      if (!invertValue29) return;
      let [
        ,
        invertValue30,
        invertValue31,
        invertValue32,
        invertValue33,
        _invertC,
      ] = invertValue29;
      return invertValue5.set(
        {
          h: invertValue7._hue2deg(invertValue30),
          s: invertL.channel.clamp.s(parseFloat(invertValue31)),
          l: invertL.channel.clamp.l(parseFloat(invertValue32)),
          a: invertValue33
            ? invertL.channel.clamp.a(
                _invertC
                  ? parseFloat(invertValue33) / 100
                  : parseFloat(invertValue33),
              )
            : 1,
        },
        invertParam4,
      );
    },
    stringify: (invertParam16) => {
      let { h, s, l, a: invertValue51 } = invertParam16;
      return invertValue51 < 1
        ? `hsla(${invertL.lang.round(h)}, ${invertL.lang.round(s)}%, ${invertL.lang.round(l)}%, ${invertValue51})`
        : `hsl(${invertL.lang.round(h)}, ${invertL.lang.round(s)}%, ${invertL.lang.round(l)}%)`;
    },
  },
  invertValue8 = {
    colors: {
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
    },
    parse: (invertParam35) => {
      invertParam35 = invertParam35.toLowerCase();
      let _invertL = invertValue8.colors[invertParam35];
      if (_invertL) return invertValue6.parse(_invertL);
    },
    stringify: (invertParam30) => {
      let _invertL = invertValue6.stringify(invertParam30);
      for (let invertValue74 in invertValue8.colors)
        if (invertValue8.colors[invertValue74] === _invertL)
          return invertValue74;
    },
  },
  invertValue9 = {
    re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
    parse: (invertParam1) => {
      let invertValue14 = invertParam1.charCodeAt(0);
      if (invertValue14 !== 114 && invertValue14 !== 82) return;
      let invertValue15 = invertParam1.match(invertValue9.re);
      if (!invertValue15) return;
      let [
        ,
        invertValue16,
        invertValue17,
        invertValue18,
        invertValue19,
        _invertC,
        invertValue20,
        _invertS,
        invertValue21,
      ] = invertValue15;
      return invertValue5.set(
        {
          r: invertL.channel.clamp.r(
            invertValue17
              ? parseFloat(invertValue16) * 2.55
              : parseFloat(invertValue16),
          ),
          g: invertL.channel.clamp.g(
            invertValue19
              ? parseFloat(invertValue18) * 2.55
              : parseFloat(invertValue18),
          ),
          b: invertL.channel.clamp.b(
            invertValue20 ? parseFloat(_invertC) * 2.55 : parseFloat(_invertC),
          ),
          a: _invertS
            ? invertL.channel.clamp.a(
                invertValue21
                  ? parseFloat(_invertS) / 100
                  : parseFloat(_invertS),
              )
            : 1,
        },
        invertParam1,
      );
    },
    stringify: (invertParam7) => {
      let { r: _r, g, b, a: invertValue45 } = invertParam7;
      return invertValue45 < 1
        ? `rgba(${invertL.lang.round(_r)}, ${invertL.lang.round(g)}, ${invertL.lang.round(b)}, ${invertL.lang.round(invertValue45)})`
        : `rgb(${invertL.lang.round(_r)}, ${invertL.lang.round(g)}, ${invertL.lang.round(b)})`;
    },
  },
  invertC = {
    format: {
      keyword: invertValue8,
      hex: invertValue6,
      rgb: invertValue9,
      rgba: invertValue9,
      hsl: invertValue7,
      hsla: invertValue7,
    },
    parse: (invertParam17) => {
      if (typeof invertParam17 != "string") return invertParam17;
      let _invertL =
        invertValue6.parse(invertParam17) ||
        invertValue9.parse(invertParam17) ||
        invertValue7.parse(invertParam17) ||
        invertValue8.parse(invertParam17);
      if (_invertL) return _invertL;
      throw Error(`Unsupported color format: "${invertParam17}"`);
    },
    stringify: (invertParam8) =>
      !invertParam8.changed && invertParam8.color
        ? invertParam8.color
        : invertParam8.type.is(invertValue3.HSL) ||
            invertParam8.data.r === undefined
          ? invertValue7.stringify(invertParam8)
          : invertParam8.a < 1 ||
              !Number.isInteger(invertParam8.r) ||
              !Number.isInteger(invertParam8.g) ||
              !Number.isInteger(invertParam8.b)
            ? invertValue9.stringify(invertParam8)
            : invertValue6.stringify(invertParam8),
  },
  invertValue10 = (invertParam23, invertParam24) => {
    let invertValue70 = invertC.parse(invertParam23);
    for (let invertValue76 in invertParam24)
      invertValue70[invertValue76] = invertL.channel.clamp[invertValue76](
        invertParam24[invertValue76],
      );
    return invertC.stringify(invertValue70);
  },
  invertS = (
    invertParam9,
    invertParam10,
    invertParam11 = 0,
    invertParam12 = 1,
  ) => {
    if (typeof invertParam9 != "number")
      return invertValue10(invertParam9, {
        a: invertParam10,
      });
    let invertValue46 = invertValue5.set({
      r: invertL.channel.clamp.r(invertParam9),
      g: invertL.channel.clamp.g(invertParam10),
      b: invertL.channel.clamp.b(invertParam11),
      a: invertL.channel.clamp.a(invertParam12),
    });
    return invertC.stringify(invertValue46);
  },
  invertValue11 = (invertParam18) => {
    let { r: _r, g, b } = invertC.parse(invertParam18),
      invertValue54 =
        0.2126 * invertL.channel.toLinear(_r) +
        0.7152 * invertL.channel.toLinear(g) +
        0.0722 * invertL.channel.toLinear(b);
    return invertL.lang.round(invertValue54);
  },
  invertValue12 = (invertParam54) => invertValue11(invertParam54) >= 0.5,
  invertA = (invertParam20, invertParam21, invertParam22) => {
    let invertValue67 = invertC.parse(invertParam20),
      invertValue68 = invertValue67[invertParam21],
      invertValue69 = invertL.channel.clamp[invertParam21](
        invertValue68 + invertParam22,
      );
    return (
      invertValue68 !== invertValue69 &&
        (invertValue67[invertParam21] = invertValue69),
      invertC.stringify(invertValue67)
    );
  },
  invertValue13 = (invertParam14, _invertL, invertParam15 = 50) => {
    let { r: invertValue48, g: _g, b, a } = invertC.parse(invertParam14),
      { r, g: __g, b: _b, a: _a } = invertC.parse(_invertL),
      invertValue49 = invertParam15 / 100,
      invertValue50 = invertValue49 * 2 - 1,
      _invertO = a - _a,
      _invertA =
        ((invertValue50 * _invertO === -1
          ? invertValue50
          : (invertValue50 + _invertO) / (1 + invertValue50 * _invertO)) +
          1) /
        2,
      _invertI = 1 - _invertA;
    return invertS(
      invertValue48 * _invertA + r * _invertI,
      _g * _invertA + __g * _invertI,
      b * _invertA + _b * _invertI,
      a * invertValue49 + _a * (1 - invertValue49),
    );
  };
export const invertT = (invertParam29, _invertL = 100) => {
  let invertValue73 = invertC.parse(invertParam29);
  return (
    (invertValue73.r = 255 - invertValue73.r),
    (invertValue73.g = 255 - invertValue73.g),
    (invertValue73.b = 255 - invertValue73.b),
    invertValue13(invertValue73, invertParam29, _invertL)
  );
};
export const invertR = (invertParam51, _invertL) =>
  invertA(invertParam51, "l", -_invertL);
export const invertO = (invertParam56) => !invertValue12(invertParam56);
export const invertN = (invertParam28, _invertL) => {
  let invertValue71 = invertC.parse(invertParam28),
    invertValue72 = {};
  for (let invertValue77 in _invertL)
    _invertL[invertValue77] &&
      (invertValue72[invertValue77] =
        invertValue71[invertValue77] + _invertL[invertValue77]);
  return invertValue10(invertParam28, invertValue72);
};
export const invertI = (invertParam53, _invertL) =>
  invertA(invertParam53, "l", _invertL);
export { invertA, invertC, invertL, invertS };
