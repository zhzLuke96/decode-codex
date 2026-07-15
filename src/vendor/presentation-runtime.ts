// Restored from ref/webview/assets/presentation-iV9gDfl9.js
// Flat boundary. Vendored presentation chunk restored from the Codex webview bundle.
function presentationHelper1() {
  let presentationValue558 = 0,
    presentationValue559 = 0;
  for (
    let presentationValue1134 = 0;
    presentationValue1134 < 28;
    presentationValue1134 += 7
  ) {
    let presentationValue1173 = this.buf[this.pos++];
    if (
      ((presentationValue558 |=
        (presentationValue1173 & 127) << presentationValue1134),
      !(presentationValue1173 & 128))
    )
      return (
        this.assertBounds(),
        [presentationValue558, presentationValue559]
      );
  }
  let presentationValue560 = this.buf[this.pos++];
  if (
    ((presentationValue558 |= (presentationValue560 & 15) << 28),
    (presentationValue559 = (presentationValue560 & 112) >> 4),
    !(presentationValue560 & 128))
  )
    return (this.assertBounds(), [presentationValue558, presentationValue559]);
  for (
    let presentationValue1132 = 3;
    presentationValue1132 <= 31;
    presentationValue1132 += 7
  ) {
    let presentationValue1174 = this.buf[this.pos++];
    if (
      ((presentationValue559 |=
        (presentationValue1174 & 127) << presentationValue1132),
      !(presentationValue1174 & 128))
    )
      return (
        this.assertBounds(),
        [presentationValue558, presentationValue559]
      );
  }
  throw Error(`invalid varint`);
}
function presentationHelper2(
  presentationParam566,
  presentationParam567,
  presentationParam568,
) {
  for (
    let presentationValue1159 = 0;
    presentationValue1159 < 28;
    presentationValue1159 += 7
  ) {
    let presentationValue1200 = presentationParam566 >>> presentationValue1159,
      presentationValue1201 = !(
        !(presentationValue1200 >>> 7) && presentationParam567 == 0
      ),
      presentationValue1202 =
        (presentationValue1201
          ? presentationValue1200 | 128
          : presentationValue1200) & 255;
    if (
      (presentationParam568.push(presentationValue1202), !presentationValue1201)
    )
      return;
  }
  let presentationValue743 =
      ((presentationParam566 >>> 28) & 15) | ((presentationParam567 & 7) << 4),
    presentationValue744 = !!(presentationParam567 >> 3);
  if (
    (presentationParam568.push(
      (presentationValue744
        ? presentationValue743 | 128
        : presentationValue743) & 255,
    ),
    presentationValue744)
  ) {
    for (
      let presentationValue1171 = 3;
      presentationValue1171 < 31;
      presentationValue1171 += 7
    ) {
      let presentationValue1250 =
          presentationParam567 >>> presentationValue1171,
        presentationValue1251 = !!(presentationValue1250 >>> 7),
        presentationValue1252 =
          (presentationValue1251
            ? presentationValue1250 | 128
            : presentationValue1250) & 255;
      if (
        (presentationParam568.push(presentationValue1252),
        !presentationValue1251)
      )
        return;
    }
    presentationParam568.push((presentationParam567 >>> 31) & 1);
  }
}
var presentationValue1 = 4294967296;
function presentationHelper3(presentationParam804) {
  let presentationValue980 = presentationParam804[0] === `-`;
  presentationValue980 &&
    (presentationParam804 = presentationParam804.slice(1));
  let presentationValue981 = 1e6,
    presentationValue982 = 0,
    presentationValue983 = 0;
  function presentationHelper216(presentationParam1087, presentationParam1088) {
    let presentationValue1190 = Number(
      presentationParam804.slice(presentationParam1087, presentationParam1088),
    );
    ((presentationValue983 *= presentationValue981),
      (presentationValue982 =
        presentationValue982 * presentationValue981 + presentationValue1190),
      presentationValue982 >= presentationValue1 &&
        ((presentationValue983 +=
          (presentationValue982 / presentationValue1) | 0),
        (presentationValue982 %= presentationValue1)));
  }
  return (
    presentationHelper216(-24, -18),
    presentationHelper216(-18, -12),
    presentationHelper216(-12, -6),
    presentationHelper216(-6),
    presentationValue980
      ? presentationHelper8(presentationValue982, presentationValue983)
      : presentationHelper7(presentationValue982, presentationValue983)
  );
}
function presentationHelper4(presentationParam1025, presentationParam1026) {
  let presentationValue1142 = presentationHelper7(
      presentationParam1025,
      presentationParam1026,
    ),
    presentationValue1143 = presentationValue1142.hi & 2147483648;
  presentationValue1143 &&
    (presentationValue1142 = presentationHelper8(
      presentationValue1142.lo,
      presentationValue1142.hi,
    ));
  let presentationValue1144 = presentationHelper5(
    presentationValue1142.lo,
    presentationValue1142.hi,
  );
  return presentationValue1143
    ? `-` + presentationValue1144
    : presentationValue1144;
}
function presentationHelper5(lo, hi) {
  if ((({ lo: lo, hi: hi } = presentationHelper6(lo, hi)), hi <= 2097151))
    return String(presentationValue1 * hi + lo);
  let presentationValue807 = lo & 16777215,
    presentationValue808 = ((lo >>> 24) | (hi << 8)) & 16777215,
    presentationValue809 = (hi >> 16) & 65535,
    presentationValue810 =
      presentationValue807 +
      presentationValue808 * 6777216 +
      presentationValue809 * 6710656,
    presentationValue811 =
      presentationValue808 + presentationValue809 * 8147497,
    presentationValue812 = presentationValue809 * 2,
    presentationValue813 = 1e7;
  return (
    presentationValue810 >= presentationValue813 &&
      ((presentationValue811 += Math.floor(
        presentationValue810 / presentationValue813,
      )),
      (presentationValue810 %= presentationValue813)),
    presentationValue811 >= presentationValue813 &&
      ((presentationValue812 += Math.floor(
        presentationValue811 / presentationValue813,
      )),
      (presentationValue811 %= presentationValue813)),
    presentationValue812.toString() +
      presentationValue2(presentationValue811) +
      presentationValue2(presentationValue810)
  );
}
function presentationHelper6(presentationParam1151, presentationParam1152) {
  return {
    lo: presentationParam1151 >>> 0,
    hi: presentationParam1152 >>> 0,
  };
}
function presentationHelper7(presentationParam1327, presentationParam1328) {
  return {
    lo: presentationParam1327 | 0,
    hi: presentationParam1328 | 0,
  };
}
function presentationHelper8(presentationParam1147, presentationParam1148) {
  return (
    (presentationParam1148 = ~presentationParam1148),
    presentationParam1147
      ? (presentationParam1147 = ~presentationParam1147 + 1)
      : (presentationParam1148 += 1),
    presentationHelper7(presentationParam1147, presentationParam1148)
  );
}
var presentationValue2 = (presentationParam1145) => {
  let presentationValue1314 = String(presentationParam1145);
  return `0000000`.slice(presentationValue1314.length) + presentationValue1314;
};
function presentationHelper9(presentationParam961, presentationParam962) {
  if (presentationParam961 >= 0) {
    for (; presentationParam961 > 127; )
      (presentationParam962.push((presentationParam961 & 127) | 128),
        (presentationParam961 >>>= 7));
    presentationParam962.push(presentationParam961);
  } else {
    for (
      let presentationValue1329 = 0;
      presentationValue1329 < 9;
      presentationValue1329++
    )
      (presentationParam962.push((presentationParam961 & 127) | 128),
        (presentationParam961 >>= 7));
    presentationParam962.push(1);
  }
}
function presentationHelper10() {
  let presentationValue492 = this.buf[this.pos++],
    presentationValue493 = presentationValue492 & 127;
  if (
    !(presentationValue492 & 128) ||
    ((presentationValue492 = this.buf[this.pos++]),
    (presentationValue493 |= (presentationValue492 & 127) << 7),
    !(presentationValue492 & 128)) ||
    ((presentationValue492 = this.buf[this.pos++]),
    (presentationValue493 |= (presentationValue492 & 127) << 14),
    !(presentationValue492 & 128)) ||
    ((presentationValue492 = this.buf[this.pos++]),
    (presentationValue493 |= (presentationValue492 & 127) << 21),
    !(presentationValue492 & 128))
  )
    return (this.assertBounds(), presentationValue493);
  ((presentationValue492 = this.buf[this.pos++]),
    (presentationValue493 |= (presentationValue492 & 15) << 28));
  for (
    let presentationValue1318 = 5;
    presentationValue492 & 128 && presentationValue1318 < 10;
    presentationValue1318++
  )
    presentationValue492 = this.buf[this.pos++];
  if (presentationValue492 & 128) throw Error(`invalid varint`);
  return (this.assertBounds(), presentationValue493 >>> 0);
}
var presentationValue3 = presentationHelper11();
function presentationHelper11() {
  let presentationValue142 = new DataView(new ArrayBuffer(8));
  if (
    typeof BigInt == `function` &&
    typeof presentationValue142.getBigInt64 == `function` &&
    typeof presentationValue142.getBigUint64 == `function` &&
    typeof presentationValue142.setBigInt64 == `function` &&
    typeof presentationValue142.setBigUint64 == `function` &&
    (typeof process != `object` || {}.BUF_BIGINT_DISABLE !== `1`)
  ) {
    let presentationValue249 = BigInt(`-9223372036854775808`),
      presentationValue250 = BigInt(`9223372036854775807`),
      presentationValue251 = BigInt(`0`),
      presentationValue252 = BigInt(`18446744073709551615`);
    return {
      zero: BigInt(0),
      supported: !0,
      parse(presentationParam1028) {
        let presentationValue1148 =
          typeof presentationParam1028 == `bigint`
            ? presentationParam1028
            : BigInt(presentationParam1028);
        if (
          presentationValue1148 > presentationValue250 ||
          presentationValue1148 < presentationValue249
        )
          throw Error(`invalid int64: ${presentationParam1028}`);
        return presentationValue1148;
      },
      uParse(presentationParam1020) {
        let presentationValue1141 =
          typeof presentationParam1020 == `bigint`
            ? presentationParam1020
            : BigInt(presentationParam1020);
        if (
          presentationValue1141 > presentationValue252 ||
          presentationValue1141 < presentationValue251
        )
          throw Error(`invalid uint64: ${presentationParam1020}`);
        return presentationValue1141;
      },
      enc(presentationParam1060) {
        return (
          presentationValue142.setBigInt64(
            0,
            this.parse(presentationParam1060),
            !0,
          ),
          {
            lo: presentationValue142.getInt32(0, !0),
            hi: presentationValue142.getInt32(4, !0),
          }
        );
      },
      uEnc(presentationParam1051) {
        return (
          presentationValue142.setBigInt64(
            0,
            this.uParse(presentationParam1051),
            !0,
          ),
          {
            lo: presentationValue142.getInt32(0, !0),
            hi: presentationValue142.getInt32(4, !0),
          }
        );
      },
      dec(presentationParam1106, presentationParam1107) {
        return (
          presentationValue142.setInt32(0, presentationParam1106, !0),
          presentationValue142.setInt32(4, presentationParam1107, !0),
          presentationValue142.getBigInt64(0, !0)
        );
      },
      uDec(presentationParam1102, presentationParam1103) {
        return (
          presentationValue142.setInt32(0, presentationParam1102, !0),
          presentationValue142.setInt32(4, presentationParam1103, !0),
          presentationValue142.getBigUint64(0, !0)
        );
      },
    };
  }
  return {
    zero: `0`,
    supported: !1,
    parse(presentationParam1136) {
      return (
        typeof presentationParam1136 != `string` &&
          (presentationParam1136 = presentationParam1136.toString()),
        presentationHelper12(presentationParam1136),
        presentationParam1136
      );
    },
    uParse(presentationParam1133) {
      return (
        typeof presentationParam1133 != `string` &&
          (presentationParam1133 = presentationParam1133.toString()),
        presentationHelper13(presentationParam1133),
        presentationParam1133
      );
    },
    enc(presentationParam1134) {
      return (
        typeof presentationParam1134 != `string` &&
          (presentationParam1134 = presentationParam1134.toString()),
        presentationHelper12(presentationParam1134),
        presentationHelper3(presentationParam1134)
      );
    },
    uEnc(presentationParam1131) {
      return (
        typeof presentationParam1131 != `string` &&
          (presentationParam1131 = presentationParam1131.toString()),
        presentationHelper13(presentationParam1131),
        presentationHelper3(presentationParam1131)
      );
    },
    dec(presentationParam1381, presentationParam1382) {
      return presentationHelper4(presentationParam1381, presentationParam1382);
    },
    uDec(presentationParam1379, presentationParam1380) {
      return presentationHelper5(presentationParam1379, presentationParam1380);
    },
  };
}
function presentationHelper12(presentationParam1113) {
  if (!/^-?[0-9]+$/.test(presentationParam1113))
    throw Error(`invalid int64: ` + presentationParam1113);
}
function presentationHelper13(presentationParam1114) {
  if (!/^[0-9]+$/.test(presentationParam1114))
    throw Error(`invalid uint64: ` + presentationParam1114);
}
var presentationValue4 = Symbol.for(`@bufbuild/protobuf/text-encoding`);
function presentationHelper14() {
  if (globalThis[presentationValue4] == null) {
    let presentationValue1001 = new globalThis.TextEncoder(),
      presentationValue1002 = new globalThis.TextDecoder();
    globalThis[presentationValue4] = {
      encodeUtf8(presentationParam1368) {
        return presentationValue1001.encode(presentationParam1368);
      },
      decodeUtf8(presentationParam1369) {
        return presentationValue1002.decode(presentationParam1369);
      },
      checkUtf8(presentationParam1153) {
        try {
          return !0;
        } catch {
          return !1;
        }
      },
    };
  }
  return globalThis[presentationValue4];
}
var presentationValue5;
(function (presentationParam863) {
  ((presentationParam863[(presentationParam863.Varint = 0)] = `Varint`),
    (presentationParam863[(presentationParam863.Bit64 = 1)] = `Bit64`),
    (presentationParam863[(presentationParam863.LengthDelimited = 2)] =
      `LengthDelimited`),
    (presentationParam863[(presentationParam863.StartGroup = 3)] =
      `StartGroup`),
    (presentationParam863[(presentationParam863.EndGroup = 4)] = `EndGroup`),
    (presentationParam863[(presentationParam863.Bit32 = 5)] = `Bit32`));
})((presentationValue5 ||= {}));
var presentationPr = class {
    constructor(presentationParam1061 = presentationHelper14().encodeUtf8) {
      ((this.encodeUtf8 = presentationParam1061),
        (this.stack = []),
        (this.chunks = []),
        (this.buf = []));
    }
    finish() {
      this.buf.length &&
        (this.chunks.push(new Uint8Array(this.buf)), (this.buf = []));
      let presentationValue726 = 0;
      for (
        let presentationValue1282 = 0;
        presentationValue1282 < this.chunks.length;
        presentationValue1282++
      )
        presentationValue726 += this.chunks[presentationValue1282].length;
      let presentationValue727 = new Uint8Array(presentationValue726),
        presentationValue728 = 0;
      for (
        let presentationValue1177 = 0;
        presentationValue1177 < this.chunks.length;
        presentationValue1177++
      )
        (presentationValue727.set(
          this.chunks[presentationValue1177],
          presentationValue728,
        ),
          (presentationValue728 += this.chunks[presentationValue1177].length));
      return ((this.chunks = []), presentationValue727);
    }
    fork() {
      return (
        this.stack.push({
          chunks: this.chunks,
          buf: this.buf,
        }),
        (this.chunks = []),
        (this.buf = []),
        this
      );
    }
    join() {
      let presentationValue1026 = this.finish(),
        presentationValue1027 = this.stack.pop();
      if (!presentationValue1027)
        throw Error(`invalid state, fork stack empty`);
      return (
        (this.chunks = presentationValue1027.chunks),
        (this.buf = presentationValue1027.buf),
        this.uint32(presentationValue1026.byteLength),
        this.raw(presentationValue1026)
      );
    }
    tag(presentationParam1154, presentationParam1155) {
      return this.uint32(
        ((presentationParam1154 << 3) | presentationParam1155) >>> 0,
      );
    }
    raw(presentationParam1007) {
      return (
        this.buf.length &&
          (this.chunks.push(new Uint8Array(this.buf)), (this.buf = [])),
        this.chunks.push(presentationParam1007),
        this
      );
    }
    uint32(presentationParam1067) {
      for (
        presentationHelper16(presentationParam1067);
        presentationParam1067 > 127;

      )
        (this.buf.push((presentationParam1067 & 127) | 128),
          (presentationParam1067 >>>= 7));
      return (this.buf.push(presentationParam1067), this);
    }
    int32(presentationParam1156) {
      return (
        presentationHelper15(presentationParam1156),
        presentationHelper9(presentationParam1156, this.buf),
        this
      );
    }
    bool(presentationParam1157) {
      return (this.buf.push(presentationParam1157 ? 1 : 0), this);
    }
    bytes(presentationParam1146) {
      return (
        this.uint32(presentationParam1146.byteLength),
        this.raw(presentationParam1146)
      );
    }
    string(presentationParam1090) {
      let presentationValue1192 = this.encodeUtf8(presentationParam1090);
      return (
        this.uint32(presentationValue1192.byteLength),
        this.raw(presentationValue1192)
      );
    }
    float(presentationParam1033) {
      presentationHelper17(presentationParam1033);
      let presentationValue1153 = new Uint8Array(4);
      return (
        new DataView(presentationValue1153.buffer).setFloat32(
          0,
          presentationParam1033,
          !0,
        ),
        this.raw(presentationValue1153)
      );
    }
    double(presentationParam1045) {
      let presentationValue1160 = new Uint8Array(8);
      return (
        new DataView(presentationValue1160.buffer).setFloat64(
          0,
          presentationParam1045,
          !0,
        ),
        this.raw(presentationValue1160)
      );
    }
    fixed32(presentationParam1031) {
      presentationHelper16(presentationParam1031);
      let presentationValue1151 = new Uint8Array(4);
      return (
        new DataView(presentationValue1151.buffer).setUint32(
          0,
          presentationParam1031,
          !0,
        ),
        this.raw(presentationValue1151)
      );
    }
    sfixed32(presentationParam1032) {
      presentationHelper15(presentationParam1032);
      let presentationValue1152 = new Uint8Array(4);
      return (
        new DataView(presentationValue1152.buffer).setInt32(
          0,
          presentationParam1032,
          !0,
        ),
        this.raw(presentationValue1152)
      );
    }
    sint32(presentationParam1135) {
      return (
        presentationHelper15(presentationParam1135),
        (presentationParam1135 =
          ((presentationParam1135 << 1) ^ (presentationParam1135 >> 31)) >>> 0),
        presentationHelper9(presentationParam1135, this.buf),
        this
      );
    }
    sfixed64(presentationParam953) {
      let presentationValue1089 = new Uint8Array(8),
        presentationValue1090 = new DataView(presentationValue1089.buffer),
        presentationValue1091 = presentationValue3.enc(presentationParam953);
      return (
        presentationValue1090.setInt32(0, presentationValue1091.lo, !0),
        presentationValue1090.setInt32(4, presentationValue1091.hi, !0),
        this.raw(presentationValue1089)
      );
    }
    fixed64(presentationParam954) {
      let presentationValue1092 = new Uint8Array(8),
        presentationValue1093 = new DataView(presentationValue1092.buffer),
        presentationValue1094 = presentationValue3.uEnc(presentationParam954);
      return (
        presentationValue1093.setInt32(0, presentationValue1094.lo, !0),
        presentationValue1093.setInt32(4, presentationValue1094.hi, !0),
        this.raw(presentationValue1092)
      );
    }
    int64(presentationParam1140) {
      let presentationValue1309 = presentationValue3.enc(presentationParam1140);
      return (
        presentationHelper2(
          presentationValue1309.lo,
          presentationValue1309.hi,
          this.buf,
        ),
        this
      );
    }
    sint64(presentationParam1052) {
      let presentationValue1167 = presentationValue3.enc(presentationParam1052),
        presentationValue1168 = presentationValue1167.hi >> 31;
      return (
        presentationHelper2(
          (presentationValue1167.lo << 1) ^ presentationValue1168,
          ((presentationValue1167.hi << 1) |
            (presentationValue1167.lo >>> 31)) ^
            presentationValue1168,
          this.buf,
        ),
        this
      );
    }
    uint64(presentationParam1137) {
      let presentationValue1298 = presentationValue3.uEnc(
        presentationParam1137,
      );
      return (
        presentationHelper2(
          presentationValue1298.lo,
          presentationValue1298.hi,
          this.buf,
        ),
        this
      );
    }
  },
  presentationFr = class {
    constructor(
      presentationParam855,
      presentationParam856 = presentationHelper14().decodeUtf8,
    ) {
      ((this.decodeUtf8 = presentationParam856),
        (this.varint64 = presentationHelper1),
        (this.uint32 = presentationHelper10),
        (this.buf = presentationParam855),
        (this.len = presentationParam855.length),
        (this.pos = 0),
        (this.view = new DataView(
          presentationParam855.buffer,
          presentationParam855.byteOffset,
          presentationParam855.byteLength,
        )));
    }
    tag() {
      let presentationValue1103 = this.uint32(),
        presentationValue1104 = presentationValue1103 >>> 3,
        presentationValue1105 = presentationValue1103 & 7;
      if (
        presentationValue1104 <= 0 ||
        presentationValue1105 < 0 ||
        presentationValue1105 > 5
      )
        throw Error(
          `illegal tag: field no ` +
            presentationValue1104 +
            ` wire type ` +
            presentationValue1105,
        );
      return [presentationValue1104, presentationValue1105];
    }
    skip(presentationParam284, presentationParam285) {
      let presentationValue422 = this.pos;
      switch (presentationParam284) {
        case presentationValue5.Varint:
          for (; this.buf[this.pos++] & 128; );
          break;
        case presentationValue5.Bit64:
          this.pos += 4;
        case presentationValue5.Bit32:
          this.pos += 4;
          break;
        case presentationValue5.LengthDelimited:
          let presentationValue557 = this.uint32();
          this.pos += presentationValue557;
          break;
        case presentationValue5.StartGroup:
          for (;;) {
            let [presentationValue1121, presentationValue1122] = this.tag();
            if (presentationValue1122 === presentationValue5.EndGroup) {
              if (
                presentationParam285 !== void 0 &&
                presentationValue1121 !== presentationParam285
              )
                throw Error(`invalid end group tag`);
              break;
            }
            this.skip(presentationValue1122, presentationValue1121);
          }
          break;
        default:
          throw Error(`cant skip wire type ` + presentationParam284);
      }
      return (
        this.assertBounds(),
        this.buf.subarray(presentationValue422, this.pos)
      );
    }
    assertBounds() {
      if (this.pos > this.len) throw RangeError(`premature EOF`);
    }
    int32() {
      return this.uint32() | 0;
    }
    sint32() {
      let presentationValue1319 = this.uint32();
      return (presentationValue1319 >>> 1) ^ -(presentationValue1319 & 1);
    }
    int64() {
      return presentationValue3.dec(...this.varint64());
    }
    uint64() {
      return presentationValue3.uDec(...this.varint64());
    }
    sint64() {
      let [presentationValue1162, presentationValue1163] = this.varint64(),
        presentationValue1164 = -(presentationValue1162 & 1);
      return (
        (presentationValue1162 =
          ((presentationValue1162 >>> 1) |
            ((presentationValue1163 & 1) << 31)) ^
          presentationValue1164),
        (presentationValue1163 =
          (presentationValue1163 >>> 1) ^ presentationValue1164),
        presentationValue3.dec(presentationValue1162, presentationValue1163)
      );
    }
    bool() {
      let [presentationValue1315, presentationValue1316] = this.varint64();
      return presentationValue1315 !== 0 || presentationValue1316 !== 0;
    }
    fixed32() {
      return this.view.getUint32((this.pos += 4) - 4, !0);
    }
    sfixed32() {
      return this.view.getInt32((this.pos += 4) - 4, !0);
    }
    fixed64() {
      return presentationValue3.uDec(this.sfixed32(), this.sfixed32());
    }
    sfixed64() {
      return presentationValue3.dec(this.sfixed32(), this.sfixed32());
    }
    float() {
      return this.view.getFloat32((this.pos += 4) - 4, !0);
    }
    double() {
      return this.view.getFloat64((this.pos += 8) - 8, !0);
    }
    bytes() {
      let presentationValue1145 = this.uint32(),
        presentationValue1146 = this.pos;
      return (
        (this.pos += presentationValue1145),
        this.assertBounds(),
        this.buf.subarray(
          presentationValue1146,
          presentationValue1146 + presentationValue1145,
        )
      );
    }
    string() {
      return this.decodeUtf8(this.bytes());
    }
  };
function presentationHelper15(presentationParam817) {
  if (typeof presentationParam817 == `string`)
    presentationParam817 = Number(presentationParam817);
  else if (typeof presentationParam817 != `number`)
    throw Error(`invalid int32: ` + typeof presentationParam817);
  if (
    !Number.isInteger(presentationParam817) ||
    presentationParam817 > 2147483647 ||
    presentationParam817 < -2147483648
  )
    throw Error(`invalid int32: ` + presentationParam817);
}
function presentationHelper16(presentationParam827) {
  if (typeof presentationParam827 == `string`)
    presentationParam827 = Number(presentationParam827);
  else if (typeof presentationParam827 != `number`)
    throw Error(`invalid uint32: ` + typeof presentationParam827);
  if (
    !Number.isInteger(presentationParam827) ||
    presentationParam827 > 4294967295 ||
    presentationParam827 < 0
  )
    throw Error(`invalid uint32: ` + presentationParam827);
}
function presentationHelper17(presentationParam535) {
  if (typeof presentationParam535 == `string`) {
    let presentationValue1178 = presentationParam535;
    if (
      ((presentationParam535 = Number(presentationParam535)),
      Number.isNaN(presentationParam535) && presentationValue1178 !== `NaN`)
    )
      throw Error(`invalid float32: ` + presentationValue1178);
  } else if (typeof presentationParam535 != `number`)
    throw Error(`invalid float32: ` + typeof presentationParam535);
  if (
    Number.isFinite(presentationParam535) &&
    (presentationParam535 > 34028234663852886e22 ||
      presentationParam535 < -34028234663852886e22)
  )
    throw Error(`invalid float32: ` + presentationParam535);
}
export const presentationZn = (function (presentationParam694) {
  return (
    (presentationParam694[(presentationParam694.COLOR_TYPE_UNSPECIFIED = 0)] =
      `COLOR_TYPE_UNSPECIFIED`),
    (presentationParam694[(presentationParam694.COLOR_TYPE_RGB = 1)] =
      `COLOR_TYPE_RGB`),
    (presentationParam694[(presentationParam694.COLOR_TYPE_SCHEME = 2)] =
      `COLOR_TYPE_SCHEME`),
    (presentationParam694[(presentationParam694.COLOR_TYPE_SYSTEM = 3)] =
      `COLOR_TYPE_SYSTEM`),
    (presentationParam694[(presentationParam694.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam694
  );
})({});
export const presentationUr = (function (presentationParam620) {
  return (
    (presentationParam620[
      (presentationParam620.THREAD_STATUS_UNSPECIFIED = 0)
    ] = `THREAD_STATUS_UNSPECIFIED`),
    (presentationParam620[(presentationParam620.THREAD_STATUS_ACTIVE = 1)] =
      `THREAD_STATUS_ACTIVE`),
    (presentationParam620[(presentationParam620.THREAD_STATUS_RESOLVED = 2)] =
      `THREAD_STATUS_RESOLVED`),
    (presentationParam620[(presentationParam620.THREAD_STATUS_CLOSED = 3)] =
      `THREAD_STATUS_CLOSED`),
    (presentationParam620[(presentationParam620.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam620
  );
})({});
export const presentationTr = (function (presentationParam204) {
  return (
    (presentationParam204[
      (presentationParam204.PICTURE_EFFECT_TYPE_UNSPECIFIED = 0)
    ] = `PICTURE_EFFECT_TYPE_UNSPECIFIED`),
    (presentationParam204[
      (presentationParam204.PICTURE_EFFECT_TYPE_ALPHA_MOD_FIX = 1)
    ] = `PICTURE_EFFECT_TYPE_ALPHA_MOD_FIX`),
    (presentationParam204[
      (presentationParam204.PICTURE_EFFECT_TYPE_LUMINANCE = 2)
    ] = `PICTURE_EFFECT_TYPE_LUMINANCE`),
    (presentationParam204[
      (presentationParam204.PICTURE_EFFECT_TYPE_GRAYSCALE = 3)
    ] = `PICTURE_EFFECT_TYPE_GRAYSCALE`),
    (presentationParam204[
      (presentationParam204.PICTURE_EFFECT_TYPE_DUOTONE = 4)
    ] = `PICTURE_EFFECT_TYPE_DUOTONE`),
    (presentationParam204[
      (presentationParam204.PICTURE_EFFECT_TYPE_BI_LEVEL = 5)
    ] = `PICTURE_EFFECT_TYPE_BI_LEVEL`),
    (presentationParam204[
      (presentationParam204.PICTURE_EFFECT_TYPE_COLOR_CHANGE = 6)
    ] = `PICTURE_EFFECT_TYPE_COLOR_CHANGE`),
    (presentationParam204[(presentationParam204.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam204
  );
})({});
export const presentationRr = (function (presentationParam671) {
  return (
    (presentationParam671[
      (presentationParam671.REVIEW_MARK_TYPE_UNSPECIFIED = 0)
    ] = `REVIEW_MARK_TYPE_UNSPECIFIED`),
    (presentationParam671[
      (presentationParam671.REVIEW_MARK_TYPE_INSERTION = 1)
    ] = `REVIEW_MARK_TYPE_INSERTION`),
    (presentationParam671[
      (presentationParam671.REVIEW_MARK_TYPE_DELETION = 2)
    ] = `REVIEW_MARK_TYPE_DELETION`),
    (presentationParam671[(presentationParam671.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam671
  );
})({});
export const presentationIr = (function (presentationParam262) {
  return (
    (presentationParam262[
      (presentationParam262.TAB_STOP_ALIGNMENT_UNSPECIFIED = 0)
    ] = `TAB_STOP_ALIGNMENT_UNSPECIFIED`),
    (presentationParam262[(presentationParam262.TAB_STOP_ALIGNMENT_LEFT = 1)] =
      `TAB_STOP_ALIGNMENT_LEFT`),
    (presentationParam262[
      (presentationParam262.TAB_STOP_ALIGNMENT_CENTER = 2)
    ] = `TAB_STOP_ALIGNMENT_CENTER`),
    (presentationParam262[(presentationParam262.TAB_STOP_ALIGNMENT_RIGHT = 3)] =
      `TAB_STOP_ALIGNMENT_RIGHT`),
    (presentationParam262[
      (presentationParam262.TAB_STOP_ALIGNMENT_DECIMAL = 4)
    ] = `TAB_STOP_ALIGNMENT_DECIMAL`),
    (presentationParam262[(presentationParam262.TAB_STOP_ALIGNMENT_BAR = 5)] =
      `TAB_STOP_ALIGNMENT_BAR`),
    (presentationParam262[(presentationParam262.TAB_STOP_ALIGNMENT_CLEAR = 6)] =
      `TAB_STOP_ALIGNMENT_CLEAR`),
    (presentationParam262[(presentationParam262.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam262
  );
})({});
export const presentationDr = (function (presentationParam314) {
  return (
    (presentationParam314[
      (presentationParam314.VERTICAL_TYPE_UNSPECIFIED = 0)
    ] = `VERTICAL_TYPE_UNSPECIFIED`),
    (presentationParam314[(presentationParam314.VERTICAL_TYPE_HORIZONTAL = 1)] =
      `VERTICAL_TYPE_HORIZONTAL`),
    (presentationParam314[(presentationParam314.VERTICAL_TYPE_VERTICAL = 2)] =
      `VERTICAL_TYPE_VERTICAL`),
    (presentationParam314[
      (presentationParam314.VERTICAL_TYPE_VERTICAL_270 = 3)
    ] = `VERTICAL_TYPE_VERTICAL_270`),
    (presentationParam314[
      (presentationParam314.VERTICAL_TYPE_WORD_ART_VERTICAL = 4)
    ] = `VERTICAL_TYPE_WORD_ART_VERTICAL`),
    (presentationParam314[
      (presentationParam314.VERTICAL_TYPE_EA_VERTICAL = 5)
    ] = `VERTICAL_TYPE_EA_VERTICAL`),
    (presentationParam314[(presentationParam314.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam314
  );
})({});
export const presentationCr = (function (presentationParam675) {
  return (
    (presentationParam675[
      (presentationParam675.TEXT_WRAPPING_TYPE_UNSPECIFIED = 0)
    ] = `TEXT_WRAPPING_TYPE_UNSPECIFIED`),
    (presentationParam675[(presentationParam675.TEXT_WRAPPING_TYPE_NONE = 1)] =
      `TEXT_WRAPPING_TYPE_NONE`),
    (presentationParam675[
      (presentationParam675.TEXT_WRAPPING_TYPE_SQUARE = 2)
    ] = `TEXT_WRAPPING_TYPE_SQUARE`),
    (presentationParam675[(presentationParam675.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam675
  );
})({});
export const presentationAr = (function (presentationParam520) {
  return (
    (presentationParam520[
      (presentationParam520.TEXT_CAPITALIZATION_UNSPECIFIED = 0)
    ] = `TEXT_CAPITALIZATION_UNSPECIFIED`),
    (presentationParam520[(presentationParam520.TEXT_CAPITALIZATION_NONE = 1)] =
      `TEXT_CAPITALIZATION_NONE`),
    (presentationParam520[
      (presentationParam520.TEXT_CAPITALIZATION_SMALL = 2)
    ] = `TEXT_CAPITALIZATION_SMALL`),
    (presentationParam520[(presentationParam520.TEXT_CAPITALIZATION_ALL = 3)] =
      `TEXT_CAPITALIZATION_ALL`),
    (presentationParam520[(presentationParam520.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam520
  );
})({});
export const _presentationZn = (function (presentationParam726) {
  return (
    (presentationParam726[(presentationParam726.LINE_JOIN_UNSPECIFIED = 0)] =
      `LINE_JOIN_UNSPECIFIED`),
    (presentationParam726[(presentationParam726.LINE_JOIN_ROUND = 1)] =
      `LINE_JOIN_ROUND`),
    (presentationParam726[(presentationParam726.LINE_JOIN_BEVEL = 2)] =
      `LINE_JOIN_BEVEL`),
    (presentationParam726[(presentationParam726.LINE_JOIN_MITER = 3)] =
      `LINE_JOIN_MITER`),
    (presentationParam726[(presentationParam726.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam726
  );
})({});
export const presentationYn = (function (presentationParam347) {
  return (
    (presentationParam347[
      (presentationParam347.COMPOUND_STYLE_UNSPECIFIED = 0)
    ] = `COMPOUND_STYLE_UNSPECIFIED`),
    (presentationParam347[(presentationParam347.COMPOUND_STYLE_SINGLE = 1)] =
      `COMPOUND_STYLE_SINGLE`),
    (presentationParam347[(presentationParam347.COMPOUND_STYLE_DOUBLE = 2)] =
      `COMPOUND_STYLE_DOUBLE`),
    (presentationParam347[
      (presentationParam347.COMPOUND_STYLE_THICK_THIN = 3)
    ] = `COMPOUND_STYLE_THICK_THIN`),
    (presentationParam347[
      (presentationParam347.COMPOUND_STYLE_THIN_THICK = 4)
    ] = `COMPOUND_STYLE_THIN_THICK`),
    (presentationParam347[(presentationParam347.COMPOUND_STYLE_TRIPLE = 5)] =
      `COMPOUND_STYLE_TRIPLE`),
    (presentationParam347[(presentationParam347.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam347
  );
})({});
export const presentationXn = (function (presentationParam765) {
  return (
    (presentationParam765[(presentationParam765.LINE_CAP_UNSPECIFIED = 0)] =
      `LINE_CAP_UNSPECIFIED`),
    (presentationParam765[(presentationParam765.LINE_CAP_FLAT = 1)] =
      `LINE_CAP_FLAT`),
    (presentationParam765[(presentationParam765.LINE_CAP_ROUND = 2)] =
      `LINE_CAP_ROUND`),
    (presentationParam765[(presentationParam765.LINE_CAP_SQUARE = 3)] =
      `LINE_CAP_SQUARE`),
    (presentationParam765[(presentationParam765.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam765
  );
})({});
export const presentationWn = (function (presentationParam789) {
  return (
    (presentationParam789[
      (presentationParam789.GRADIENT_KIND_UNSPECIFIED = 0)
    ] = `GRADIENT_KIND_UNSPECIFIED`),
    (presentationParam789[(presentationParam789.GRADIENT_KIND_LINEAR = 1)] =
      `GRADIENT_KIND_LINEAR`),
    (presentationParam789[(presentationParam789.GRADIENT_KIND_PATH = 2)] =
      `GRADIENT_KIND_PATH`),
    (presentationParam789[(presentationParam789.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam789
  );
})({});
export const presentationVn = (function (presentationParam600) {
  return (
    (presentationParam600[
      (presentationParam600.CONTENT_REFERENCE_TYPE_UNSPECIFIED = 0)
    ] = `CONTENT_REFERENCE_TYPE_UNSPECIFIED`),
    (presentationParam600[
      (presentationParam600.CONTENT_REFERENCE_TYPE_INTERNAL = 1)
    ] = `CONTENT_REFERENCE_TYPE_INTERNAL`),
    (presentationParam600[
      (presentationParam600.CONTENT_REFERENCE_TYPE_EXTERNAL = 2)
    ] = `CONTENT_REFERENCE_TYPE_EXTERNAL`),
    (presentationParam600[(presentationParam600.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam600
  );
})({});
export const presentationUn = (function (presentationParam416) {
  return (
    (presentationParam416[(presentationParam416.FILL_TYPE_UNSPECIFIED = 0)] =
      `FILL_TYPE_UNSPECIFIED`),
    (presentationParam416[(presentationParam416.FILL_TYPE_SOLID = 1)] =
      `FILL_TYPE_SOLID`),
    (presentationParam416[(presentationParam416.FILL_TYPE_GRADIENT = 2)] =
      `FILL_TYPE_GRADIENT`),
    (presentationParam416[(presentationParam416.FILL_TYPE_PATTERN = 3)] =
      `FILL_TYPE_PATTERN`),
    (presentationParam416[(presentationParam416.FILL_TYPE_PICTURE = 4)] =
      `FILL_TYPE_PICTURE`),
    (presentationParam416[(presentationParam416.FILL_TYPE_VIDEO = 5)] =
      `FILL_TYPE_VIDEO`),
    (presentationParam416[(presentationParam416.FILL_TYPE_GROUP = 6)] =
      `FILL_TYPE_GROUP`),
    (presentationParam416[(presentationParam416.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam416
  );
})({});
export const presentationQn = (function (presentationParam101) {
  return (
    (presentationParam101[(presentationParam101.LINE_STYLE_UNSPECIFIED = 0)] =
      `LINE_STYLE_UNSPECIFIED`),
    (presentationParam101[(presentationParam101.LINE_STYLE_SOLID = 1)] =
      `LINE_STYLE_SOLID`),
    (presentationParam101[(presentationParam101.LINE_STYLE_DASHED = 2)] =
      `LINE_STYLE_DASHED`),
    (presentationParam101[(presentationParam101.LINE_STYLE_DOTTED = 3)] =
      `LINE_STYLE_DOTTED`),
    (presentationParam101[(presentationParam101.LINE_STYLE_DASH_DOT = 4)] =
      `LINE_STYLE_DASH_DOT`),
    (presentationParam101[(presentationParam101.LINE_STYLE_DASH_DOT_DOT = 5)] =
      `LINE_STYLE_DASH_DOT_DOT`),
    (presentationParam101[(presentationParam101.LINE_STYLE_LARGE_DASH = 6)] =
      `LINE_STYLE_LARGE_DASH`),
    (presentationParam101[(presentationParam101.LINE_STYLE_SYSTEM_DASH = 7)] =
      `LINE_STYLE_SYSTEM_DASH`),
    (presentationParam101[(presentationParam101.LINE_STYLE_SYSTEM_DOT = 8)] =
      `LINE_STYLE_SYSTEM_DOT`),
    (presentationParam101[
      (presentationParam101.LINE_STYLE_LARGE_DASH_DOT = 9)
    ] = `LINE_STYLE_LARGE_DASH_DOT`),
    (presentationParam101[
      (presentationParam101.LINE_STYLE_SYSTEM_DASH_DOT = 10)
    ] = `LINE_STYLE_SYSTEM_DASH_DOT`),
    (presentationParam101[
      (presentationParam101.LINE_STYLE_LARGE_DASH_DOT_DOT = 11)
    ] = `LINE_STYLE_LARGE_DASH_DOT_DOT`),
    (presentationParam101[
      (presentationParam101.LINE_STYLE_SYSTEM_DASH_DOT_DOT = 12)
    ] = `LINE_STYLE_SYSTEM_DASH_DOT_DOT`),
    (presentationParam101[(presentationParam101.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam101
  );
})({});
export const presentationLn = (function (presentationParam670) {
  return (
    (presentationParam670[(presentationParam670.ANCHOR_TYPE_UNSPECIFIED = 0)] =
      `ANCHOR_TYPE_UNSPECIFIED`),
    (presentationParam670[(presentationParam670.ANCHOR_TYPE_TOP = 1)] =
      `ANCHOR_TYPE_TOP`),
    (presentationParam670[(presentationParam670.ANCHOR_TYPE_MIDDLE = 2)] =
      `ANCHOR_TYPE_MIDDLE`),
    (presentationParam670[(presentationParam670.ANCHOR_TYPE_BOTTOM = 3)] =
      `ANCHOR_TYPE_BOTTOM`),
    (presentationParam670[(presentationParam670.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam670
  );
})({});
export const presentationIn = (function (presentationParam627) {
  return (
    (presentationParam627[
      (presentationParam627.ALIGNMENT_TYPE_UNSPECIFIED = 0)
    ] = `ALIGNMENT_TYPE_UNSPECIFIED`),
    (presentationParam627[(presentationParam627.ALIGNMENT_TYPE_LEFT = 1)] =
      `ALIGNMENT_TYPE_LEFT`),
    (presentationParam627[(presentationParam627.ALIGNMENT_TYPE_CENTER = 2)] =
      `ALIGNMENT_TYPE_CENTER`),
    (presentationParam627[(presentationParam627.ALIGNMENT_TYPE_RIGHT = 3)] =
      `ALIGNMENT_TYPE_RIGHT`),
    (presentationParam627[(presentationParam627.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam627
  );
})({});
export const presentationGn = (function (presentationParam526) {
  return (
    (presentationParam526[
      (presentationParam526.GRADIENT_PATH_TYPE_UNSPECIFIED = 0)
    ] = `GRADIENT_PATH_TYPE_UNSPECIFIED`),
    (presentationParam526[(presentationParam526.GRADIENT_PATH_TYPE_SHAPE = 1)] =
      `GRADIENT_PATH_TYPE_SHAPE`),
    (presentationParam526[(presentationParam526.GRADIENT_PATH_TYPE_RECT = 2)] =
      `GRADIENT_PATH_TYPE_RECT`),
    (presentationParam526[
      (presentationParam526.GRADIENT_PATH_TYPE_CIRCLE = 3)
    ] = `GRADIENT_PATH_TYPE_CIRCLE`),
    (presentationParam526[(presentationParam526.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam526
  );
})({});
export const presentationN = (function (presentationParam1) {
  return (
    (presentationParam1[(presentationParam1.PATTERN_TYPE_UNSPECIFIED = 0)] =
      `PATTERN_TYPE_UNSPECIFIED`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_NONE = 1)] =
      `PATTERN_TYPE_NONE`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_SOLID = 2)] =
      `PATTERN_TYPE_SOLID`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_MEDIUM_GRAY = 3)] =
      `PATTERN_TYPE_MEDIUM_GRAY`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_DARK_GRAY = 4)] =
      `PATTERN_TYPE_DARK_GRAY`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_LIGHT_GRAY = 5)] =
      `PATTERN_TYPE_LIGHT_GRAY`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_DARK_HORIZONTAL = 6)] =
      `PATTERN_TYPE_DARK_HORIZONTAL`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_DARK_VERTICAL = 7)] =
      `PATTERN_TYPE_DARK_VERTICAL`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_DARK_DOWN = 8)] =
      `PATTERN_TYPE_DARK_DOWN`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_DARK_UP = 9)] =
      `PATTERN_TYPE_DARK_UP`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_DARK_GRID = 10)] =
      `PATTERN_TYPE_DARK_GRID`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_DARK_TRELLIS = 11)] =
      `PATTERN_TYPE_DARK_TRELLIS`),
    (presentationParam1[
      (presentationParam1.PATTERN_TYPE_LIGHT_HORIZONTAL = 12)
    ] = `PATTERN_TYPE_LIGHT_HORIZONTAL`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_LIGHT_VERTICAL = 13)] =
      `PATTERN_TYPE_LIGHT_VERTICAL`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_LIGHT_DOWN = 14)] =
      `PATTERN_TYPE_LIGHT_DOWN`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_LIGHT_UP = 15)] =
      `PATTERN_TYPE_LIGHT_UP`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_LIGHT_GRID = 16)] =
      `PATTERN_TYPE_LIGHT_GRID`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_LIGHT_TRELLIS = 17)] =
      `PATTERN_TYPE_LIGHT_TRELLIS`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_GRAY125 = 18)] =
      `PATTERN_TYPE_GRAY125`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_GRAY0625 = 19)] =
      `PATTERN_TYPE_GRAY0625`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_PERCENT_5 = 20)] =
      `PATTERN_TYPE_PERCENT_5`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_PERCENT_10 = 21)] =
      `PATTERN_TYPE_PERCENT_10`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_PERCENT_20 = 22)] =
      `PATTERN_TYPE_PERCENT_20`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_PERCENT_25 = 23)] =
      `PATTERN_TYPE_PERCENT_25`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_PERCENT_30 = 24)] =
      `PATTERN_TYPE_PERCENT_30`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_PERCENT_40 = 25)] =
      `PATTERN_TYPE_PERCENT_40`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_PERCENT_50 = 26)] =
      `PATTERN_TYPE_PERCENT_50`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_PERCENT_60 = 27)] =
      `PATTERN_TYPE_PERCENT_60`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_PERCENT_70 = 28)] =
      `PATTERN_TYPE_PERCENT_70`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_PERCENT_75 = 29)] =
      `PATTERN_TYPE_PERCENT_75`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_PERCENT_80 = 30)] =
      `PATTERN_TYPE_PERCENT_80`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_PERCENT_90 = 31)] =
      `PATTERN_TYPE_PERCENT_90`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_HORIZONTAL = 32)] =
      `PATTERN_TYPE_HORIZONTAL`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_VERTICAL = 33)] =
      `PATTERN_TYPE_VERTICAL`),
    (presentationParam1[
      (presentationParam1.PATTERN_TYPE_NARROW_HORIZONTAL = 34)
    ] = `PATTERN_TYPE_NARROW_HORIZONTAL`),
    (presentationParam1[
      (presentationParam1.PATTERN_TYPE_NARROW_VERTICAL = 35)
    ] = `PATTERN_TYPE_NARROW_VERTICAL`),
    (presentationParam1[
      (presentationParam1.PATTERN_TYPE_DASHED_HORIZONTAL = 36)
    ] = `PATTERN_TYPE_DASHED_HORIZONTAL`),
    (presentationParam1[
      (presentationParam1.PATTERN_TYPE_DASHED_VERTICAL = 37)
    ] = `PATTERN_TYPE_DASHED_VERTICAL`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_CROSS = 38)] =
      `PATTERN_TYPE_CROSS`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_LARGE_GRID = 39)] =
      `PATTERN_TYPE_LARGE_GRID`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_SMALL_GRID = 40)] =
      `PATTERN_TYPE_SMALL_GRID`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_DOT_GRID = 41)] =
      `PATTERN_TYPE_DOT_GRID`),
    (presentationParam1[
      (presentationParam1.PATTERN_TYPE_DOWNWARD_DIAGONAL = 42)
    ] = `PATTERN_TYPE_DOWNWARD_DIAGONAL`),
    (presentationParam1[
      (presentationParam1.PATTERN_TYPE_UPWARD_DIAGONAL = 43)
    ] = `PATTERN_TYPE_UPWARD_DIAGONAL`),
    (presentationParam1[
      (presentationParam1.PATTERN_TYPE_WIDE_DOWNWARD_DIAGONAL = 44)
    ] = `PATTERN_TYPE_WIDE_DOWNWARD_DIAGONAL`),
    (presentationParam1[
      (presentationParam1.PATTERN_TYPE_WIDE_UPWARD_DIAGONAL = 45)
    ] = `PATTERN_TYPE_WIDE_UPWARD_DIAGONAL`),
    (presentationParam1[
      (presentationParam1.PATTERN_TYPE_DASHED_DOWNWARD_DIAGONAL = 46)
    ] = `PATTERN_TYPE_DASHED_DOWNWARD_DIAGONAL`),
    (presentationParam1[
      (presentationParam1.PATTERN_TYPE_DASHED_UPWARD_DIAGONAL = 47)
    ] = `PATTERN_TYPE_DASHED_UPWARD_DIAGONAL`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_DIAGONAL_CROSS = 48)] =
      `PATTERN_TYPE_DIAGONAL_CROSS`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_SMALL_CHECK = 49)] =
      `PATTERN_TYPE_SMALL_CHECK`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_LARGE_CHECK = 50)] =
      `PATTERN_TYPE_LARGE_CHECK`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_SMALL_CONFETTI = 51)] =
      `PATTERN_TYPE_SMALL_CONFETTI`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_LARGE_CONFETTI = 52)] =
      `PATTERN_TYPE_LARGE_CONFETTI`),
    (presentationParam1[
      (presentationParam1.PATTERN_TYPE_HORIZONTAL_BRICK = 53)
    ] = `PATTERN_TYPE_HORIZONTAL_BRICK`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_DIAGONAL_BRICK = 54)] =
      `PATTERN_TYPE_DIAGONAL_BRICK`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_SOLID_DIAMOND = 55)] =
      `PATTERN_TYPE_SOLID_DIAMOND`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_OPEN_DIAMOND = 56)] =
      `PATTERN_TYPE_OPEN_DIAMOND`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_DOTTED_DIAMOND = 57)] =
      `PATTERN_TYPE_DOTTED_DIAMOND`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_PLAID = 58)] =
      `PATTERN_TYPE_PLAID`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_SPHERE = 59)] =
      `PATTERN_TYPE_SPHERE`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_WEAVE = 60)] =
      `PATTERN_TYPE_WEAVE`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_DIVOT = 61)] =
      `PATTERN_TYPE_DIVOT`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_SHINGLE = 62)] =
      `PATTERN_TYPE_SHINGLE`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_WAVE = 63)] =
      `PATTERN_TYPE_WAVE`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_TRELLIS = 64)] =
      `PATTERN_TYPE_TRELLIS`),
    (presentationParam1[(presentationParam1.PATTERN_TYPE_ZIG_ZAG = 65)] =
      `PATTERN_TYPE_ZIG_ZAG`),
    (presentationParam1[(presentationParam1.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam1
  );
})({});
function presentationHelper18() {
  return {
    xEmu: void 0,
    yEmu: void 0,
    widthEmu: void 0,
    heightEmu: void 0,
    rotation: void 0,
    horizontalFlip: void 0,
    verticalFlip: void 0,
  };
}
var presentationValue6 = {
  encode(presentationParam360, presentationParam361 = new presentationPr()) {
    return (
      presentationParam360.xEmu !== void 0 &&
        presentationParam361.uint32(8).int64(presentationParam360.xEmu),
      presentationParam360.yEmu !== void 0 &&
        presentationParam361.uint32(16).int64(presentationParam360.yEmu),
      presentationParam360.widthEmu !== void 0 &&
        presentationParam361.uint32(24).int64(presentationParam360.widthEmu),
      presentationParam360.heightEmu !== void 0 &&
        presentationParam361.uint32(32).int64(presentationParam360.heightEmu),
      presentationParam360.rotation !== void 0 &&
        presentationParam361.uint32(40).int32(presentationParam360.rotation),
      presentationParam360.horizontalFlip !== void 0 &&
        presentationParam361
          .uint32(48)
          .bool(presentationParam360.horizontalFlip),
      presentationParam360.verticalFlip !== void 0 &&
        presentationParam361.uint32(56).bool(presentationParam360.verticalFlip),
      presentationParam361
    );
  },
  decode(presentationParam202, presentationParam203) {
    let presentationValue323 =
        presentationParam202 instanceof presentationFr
          ? presentationParam202
          : new presentationFr(presentationParam202),
      presentationValue324 =
        presentationParam203 === void 0
          ? presentationValue323.len
          : presentationValue323.pos + presentationParam203,
      presentationValue325 = presentationHelper18();
    for (; presentationValue323.pos < presentationValue324; ) {
      let presentationValue431 = presentationValue323.uint32();
      switch (presentationValue431 >>> 3) {
        case 1:
          if (presentationValue431 !== 8) break;
          presentationValue325.xEmu = presentationHelper66(
            presentationValue323.int64(),
          );
          continue;
        case 2:
          if (presentationValue431 !== 16) break;
          presentationValue325.yEmu = presentationHelper66(
            presentationValue323.int64(),
          );
          continue;
        case 3:
          if (presentationValue431 !== 24) break;
          presentationValue325.widthEmu = presentationHelper66(
            presentationValue323.int64(),
          );
          continue;
        case 4:
          if (presentationValue431 !== 32) break;
          presentationValue325.heightEmu = presentationHelper66(
            presentationValue323.int64(),
          );
          continue;
        case 5:
          if (presentationValue431 !== 40) break;
          presentationValue325.rotation = presentationValue323.int32();
          continue;
        case 6:
          if (presentationValue431 !== 48) break;
          presentationValue325.horizontalFlip = presentationValue323.bool();
          continue;
        case 7:
          if (presentationValue431 !== 56) break;
          presentationValue325.verticalFlip = presentationValue323.bool();
          continue;
      }
      if ((presentationValue431 & 7) == 4 || presentationValue431 === 0) break;
      presentationValue323.skip(presentationValue431 & 7);
    }
    return presentationValue325;
  },
  create(presentationParam1329) {
    return presentationValue6.fromPartial(presentationParam1329 ?? {});
  },
  fromPartial(presentationParam666) {
    let presentationValue877 = presentationHelper18();
    return (
      (presentationValue877.xEmu = presentationParam666.xEmu ?? void 0),
      (presentationValue877.yEmu = presentationParam666.yEmu ?? void 0),
      (presentationValue877.widthEmu = presentationParam666.widthEmu ?? void 0),
      (presentationValue877.heightEmu =
        presentationParam666.heightEmu ?? void 0),
      (presentationValue877.rotation = presentationParam666.rotation ?? void 0),
      (presentationValue877.horizontalFlip =
        presentationParam666.horizontalFlip ?? void 0),
      (presentationValue877.verticalFlip =
        presentationParam666.verticalFlip ?? void 0),
      presentationValue877
    );
  },
};
function presentationHelper19() {
  return {
    tint: void 0,
    shade: void 0,
    lumMod: void 0,
    lumOff: void 0,
    satMod: void 0,
    alpha: void 0,
  };
}
var presentationValue7 = {
  encode(presentationParam523, presentationParam524 = new presentationPr()) {
    return (
      presentationParam523.tint !== void 0 &&
        presentationParam524.uint32(8).int32(presentationParam523.tint),
      presentationParam523.shade !== void 0 &&
        presentationParam524.uint32(16).int32(presentationParam523.shade),
      presentationParam523.lumMod !== void 0 &&
        presentationParam524.uint32(24).int32(presentationParam523.lumMod),
      presentationParam523.lumOff !== void 0 &&
        presentationParam524.uint32(32).int32(presentationParam523.lumOff),
      presentationParam523.satMod !== void 0 &&
        presentationParam524.uint32(40).int32(presentationParam523.satMod),
      presentationParam523.alpha !== void 0 &&
        presentationParam524.uint32(48).int32(presentationParam523.alpha),
      presentationParam524
    );
  },
  decode(presentationParam272, presentationParam273) {
    let presentationValue399 =
        presentationParam272 instanceof presentationFr
          ? presentationParam272
          : new presentationFr(presentationParam272),
      presentationValue400 =
        presentationParam273 === void 0
          ? presentationValue399.len
          : presentationValue399.pos + presentationParam273,
      presentationValue401 = presentationHelper19();
    for (; presentationValue399.pos < presentationValue400; ) {
      let presentationValue566 = presentationValue399.uint32();
      switch (presentationValue566 >>> 3) {
        case 1:
          if (presentationValue566 !== 8) break;
          presentationValue401.tint = presentationValue399.int32();
          continue;
        case 2:
          if (presentationValue566 !== 16) break;
          presentationValue401.shade = presentationValue399.int32();
          continue;
        case 3:
          if (presentationValue566 !== 24) break;
          presentationValue401.lumMod = presentationValue399.int32();
          continue;
        case 4:
          if (presentationValue566 !== 32) break;
          presentationValue401.lumOff = presentationValue399.int32();
          continue;
        case 5:
          if (presentationValue566 !== 40) break;
          presentationValue401.satMod = presentationValue399.int32();
          continue;
        case 6:
          if (presentationValue566 !== 48) break;
          presentationValue401.alpha = presentationValue399.int32();
          continue;
      }
      if ((presentationValue566 & 7) == 4 || presentationValue566 === 0) break;
      presentationValue399.skip(presentationValue566 & 7);
    }
    return presentationValue401;
  },
  create(presentationParam1330) {
    return presentationValue7.fromPartial(presentationParam1330 ?? {});
  },
  fromPartial(presentationParam844) {
    let presentationValue1018 = presentationHelper19();
    return (
      (presentationValue1018.tint = presentationParam844.tint ?? void 0),
      (presentationValue1018.shade = presentationParam844.shade ?? void 0),
      (presentationValue1018.lumMod = presentationParam844.lumMod ?? void 0),
      (presentationValue1018.lumOff = presentationParam844.lumOff ?? void 0),
      (presentationValue1018.satMod = presentationParam844.satMod ?? void 0),
      (presentationValue1018.alpha = presentationParam844.alpha ?? void 0),
      presentationValue1018
    );
  },
};
function presentationHelper20() {
  return {
    type: 0,
    value: ``,
    transform: void 0,
    lastColor: void 0,
  };
}
var presentationRn = {
  encode(presentationParam724, presentationParam725 = new presentationPr()) {
    return (
      presentationParam724.type !== 0 &&
        presentationParam725.uint32(8).int32(presentationParam724.type),
      presentationParam724.value !== `` &&
        presentationParam725.uint32(18).string(presentationParam724.value),
      presentationParam724.transform !== void 0 &&
        presentationValue7
          .encode(
            presentationParam724.transform,
            presentationParam725.uint32(26).fork(),
          )
          .join(),
      presentationParam724.lastColor !== void 0 &&
        presentationParam725.uint32(34).string(presentationParam724.lastColor),
      presentationParam725
    );
  },
  decode(presentationParam373, presentationParam374) {
    let presentationValue517 =
        presentationParam373 instanceof presentationFr
          ? presentationParam373
          : new presentationFr(presentationParam373),
      presentationValue518 =
        presentationParam374 === void 0
          ? presentationValue517.len
          : presentationValue517.pos + presentationParam374,
      presentationValue519 = presentationHelper20();
    for (; presentationValue517.pos < presentationValue518; ) {
      let presentationValue733 = presentationValue517.uint32();
      switch (presentationValue733 >>> 3) {
        case 1:
          if (presentationValue733 !== 8) break;
          presentationValue519.type = presentationValue517.int32();
          continue;
        case 2:
          if (presentationValue733 !== 18) break;
          presentationValue519.value = presentationValue517.string();
          continue;
        case 3:
          if (presentationValue733 !== 26) break;
          presentationValue519.transform = presentationValue7.decode(
            presentationValue517,
            presentationValue517.uint32(),
          );
          continue;
        case 4:
          if (presentationValue733 !== 34) break;
          presentationValue519.lastColor = presentationValue517.string();
          continue;
      }
      if ((presentationValue733 & 7) == 4 || presentationValue733 === 0) break;
      presentationValue517.skip(presentationValue733 & 7);
    }
    return presentationValue519;
  },
  create(presentationParam1331) {
    return presentationRn.fromPartial(presentationParam1331 ?? {});
  },
  fromPartial(presentationParam832) {
    let presentationValue1003 = presentationHelper20();
    return (
      (presentationValue1003.type = presentationParam832.type ?? 0),
      (presentationValue1003.value = presentationParam832.value ?? ``),
      (presentationValue1003.transform =
        presentationParam832.transform !== void 0 &&
        presentationParam832.transform !== null
          ? presentationValue7.fromPartial(presentationParam832.transform)
          : void 0),
      (presentationValue1003.lastColor =
        presentationParam832.lastColor ?? void 0),
      presentationValue1003
    );
  },
};
function presentationHelper21() {
  return {
    script: ``,
    typeface: ``,
  };
}
var presentationValue8 = {
  encode(presentationParam996, presentationParam997 = new presentationPr()) {
    return (
      presentationParam996.script !== `` &&
        presentationParam997.uint32(10).string(presentationParam996.script),
      presentationParam996.typeface !== `` &&
        presentationParam997.uint32(18).string(presentationParam996.typeface),
      presentationParam997
    );
  },
  decode(presentationParam614, presentationParam615) {
    let presentationValue814 =
        presentationParam614 instanceof presentationFr
          ? presentationParam614
          : new presentationFr(presentationParam614),
      presentationValue815 =
        presentationParam615 === void 0
          ? presentationValue814.len
          : presentationValue814.pos + presentationParam615,
      presentationValue816 = presentationHelper21();
    for (; presentationValue814.pos < presentationValue815; ) {
      let presentationValue1034 = presentationValue814.uint32();
      switch (presentationValue1034 >>> 3) {
        case 1:
          if (presentationValue1034 !== 10) break;
          presentationValue816.script = presentationValue814.string();
          continue;
        case 2:
          if (presentationValue1034 !== 18) break;
          presentationValue816.typeface = presentationValue814.string();
          continue;
      }
      if ((presentationValue1034 & 7) == 4 || presentationValue1034 === 0)
        break;
      presentationValue814.skip(presentationValue1034 & 7);
    }
    return presentationValue816;
  },
  create(presentationParam1158) {
    return presentationValue8.fromPartial(presentationParam1158 ?? {});
  },
  fromPartial(presentationParam1082) {
    let presentationValue1182 = presentationHelper21();
    return (
      (presentationValue1182.script = presentationParam1082.script ?? ``),
      (presentationValue1182.typeface = presentationParam1082.typeface ?? ``),
      presentationValue1182
    );
  },
};
function presentationHelper22() {
  return {
    latinTypeface: void 0,
    eastAsianTypeface: void 0,
    complexScriptTypeface: void 0,
    supplementalFonts: [],
  };
}
var presentationValue9 = {
  encode(presentationParam513, presentationParam514 = new presentationPr()) {
    (presentationParam513.latinTypeface !== void 0 &&
      presentationParam514
        .uint32(10)
        .string(presentationParam513.latinTypeface),
      presentationParam513.eastAsianTypeface !== void 0 &&
        presentationParam514
          .uint32(18)
          .string(presentationParam513.eastAsianTypeface),
      presentationParam513.complexScriptTypeface !== void 0 &&
        presentationParam514
          .uint32(26)
          .string(presentationParam513.complexScriptTypeface));
    for (let presentationValue1211 of presentationParam513.supplementalFonts)
      presentationValue8
        .encode(presentationValue1211, presentationParam514.uint32(34).fork())
        .join();
    return presentationParam514;
  },
  decode(presentationParam303, presentationParam304) {
    let presentationValue446 =
        presentationParam303 instanceof presentationFr
          ? presentationParam303
          : new presentationFr(presentationParam303),
      presentationValue447 =
        presentationParam304 === void 0
          ? presentationValue446.len
          : presentationValue446.pos + presentationParam304,
      presentationValue448 = presentationHelper22();
    for (; presentationValue446.pos < presentationValue447; ) {
      let presentationValue623 = presentationValue446.uint32();
      switch (presentationValue623 >>> 3) {
        case 1:
          if (presentationValue623 !== 10) break;
          presentationValue448.latinTypeface = presentationValue446.string();
          continue;
        case 2:
          if (presentationValue623 !== 18) break;
          presentationValue448.eastAsianTypeface =
            presentationValue446.string();
          continue;
        case 3:
          if (presentationValue623 !== 26) break;
          presentationValue448.complexScriptTypeface =
            presentationValue446.string();
          continue;
        case 4:
          if (presentationValue623 !== 34) break;
          presentationValue448.supplementalFonts.push(
            presentationValue8.decode(
              presentationValue446,
              presentationValue446.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue623 & 7) == 4 || presentationValue623 === 0) break;
      presentationValue446.skip(presentationValue623 & 7);
    }
    return presentationValue448;
  },
  create(presentationParam1159) {
    return presentationValue9.fromPartial(presentationParam1159 ?? {});
  },
  fromPartial(presentationParam669) {
    let presentationValue878 = presentationHelper22();
    return (
      (presentationValue878.latinTypeface =
        presentationParam669.latinTypeface ?? void 0),
      (presentationValue878.eastAsianTypeface =
        presentationParam669.eastAsianTypeface ?? void 0),
      (presentationValue878.complexScriptTypeface =
        presentationParam669.complexScriptTypeface ?? void 0),
      (presentationValue878.supplementalFonts =
        presentationParam669.supplementalFonts?.map((presentationParam1383) =>
          presentationValue8.fromPartial(presentationParam1383),
        ) || []),
      presentationValue878
    );
  },
};
function presentationHelper23() {
  return {
    name: void 0,
    majorFont: void 0,
    minorFont: void 0,
  };
}
var presentationValue10 = {
  encode(presentationParam790, presentationParam791 = new presentationPr()) {
    return (
      presentationParam790.name !== void 0 &&
        presentationParam791.uint32(10).string(presentationParam790.name),
      presentationParam790.majorFont !== void 0 &&
        presentationValue9
          .encode(
            presentationParam790.majorFont,
            presentationParam791.uint32(18).fork(),
          )
          .join(),
      presentationParam790.minorFont !== void 0 &&
        presentationValue9
          .encode(
            presentationParam790.minorFont,
            presentationParam791.uint32(26).fork(),
          )
          .join(),
      presentationParam791
    );
  },
  decode(presentationParam439, presentationParam440) {
    let presentationValue593 =
        presentationParam439 instanceof presentationFr
          ? presentationParam439
          : new presentationFr(presentationParam439),
      presentationValue594 =
        presentationParam440 === void 0
          ? presentationValue593.len
          : presentationValue593.pos + presentationParam440,
      presentationValue595 = presentationHelper23();
    for (; presentationValue593.pos < presentationValue594; ) {
      let presentationValue869 = presentationValue593.uint32();
      switch (presentationValue869 >>> 3) {
        case 1:
          if (presentationValue869 !== 10) break;
          presentationValue595.name = presentationValue593.string();
          continue;
        case 2:
          if (presentationValue869 !== 18) break;
          presentationValue595.majorFont = presentationValue9.decode(
            presentationValue593,
            presentationValue593.uint32(),
          );
          continue;
        case 3:
          if (presentationValue869 !== 26) break;
          presentationValue595.minorFont = presentationValue9.decode(
            presentationValue593,
            presentationValue593.uint32(),
          );
          continue;
      }
      if ((presentationValue869 & 7) == 4 || presentationValue869 === 0) break;
      presentationValue593.skip(presentationValue869 & 7);
    }
    return presentationValue595;
  },
  create(presentationParam1160) {
    return presentationValue10.fromPartial(presentationParam1160 ?? {});
  },
  fromPartial(presentationParam727) {
    let presentationValue910 = presentationHelper23();
    return (
      (presentationValue910.name = presentationParam727.name ?? void 0),
      (presentationValue910.majorFont =
        presentationParam727.majorFont !== void 0 &&
        presentationParam727.majorFont !== null
          ? presentationValue9.fromPartial(presentationParam727.majorFont)
          : void 0),
      (presentationValue910.minorFont =
        presentationParam727.minorFont !== void 0 &&
        presentationParam727.minorFont !== null
          ? presentationValue9.fromPartial(presentationParam727.minorFont)
          : void 0),
      presentationValue910
    );
  },
};
function presentationHelper24() {
  return {
    ref: void 0,
    fill: void 0,
  };
}
var presentationValue11 = {
  encode(presentationParam919, presentationParam920 = new presentationPr()) {
    return (
      presentationParam919.ref !== void 0 &&
        presentationValue12
          .encode(
            presentationParam919.ref,
            presentationParam920.uint32(18).fork(),
          )
          .join(),
      presentationParam919.fill !== void 0 &&
        presentationHn
          .encode(
            presentationParam919.fill,
            presentationParam920.uint32(26).fork(),
          )
          .join(),
      presentationParam920
    );
  },
  decode(presentationParam550, presentationParam551) {
    let presentationValue717 =
        presentationParam550 instanceof presentationFr
          ? presentationParam550
          : new presentationFr(presentationParam550),
      presentationValue718 =
        presentationParam551 === void 0
          ? presentationValue717.len
          : presentationValue717.pos + presentationParam551,
      presentationValue719 = presentationHelper24();
    for (; presentationValue717.pos < presentationValue718; ) {
      let presentationValue999 = presentationValue717.uint32();
      switch (presentationValue999 >>> 3) {
        case 2:
          if (presentationValue999 !== 18) break;
          presentationValue719.ref = presentationValue12.decode(
            presentationValue717,
            presentationValue717.uint32(),
          );
          continue;
        case 3:
          if (presentationValue999 !== 26) break;
          presentationValue719.fill = presentationHn.decode(
            presentationValue717,
            presentationValue717.uint32(),
          );
          continue;
      }
      if ((presentationValue999 & 7) == 4 || presentationValue999 === 0) break;
      presentationValue717.skip(presentationValue999 & 7);
    }
    return presentationValue719;
  },
  create(presentationParam1161) {
    return presentationValue11.fromPartial(presentationParam1161 ?? {});
  },
  fromPartial(presentationParam883) {
    let presentationValue1056 = presentationHelper24();
    return (
      (presentationValue1056.ref =
        presentationParam883.ref !== void 0 && presentationParam883.ref !== null
          ? presentationValue12.fromPartial(presentationParam883.ref)
          : void 0),
      (presentationValue1056.fill =
        presentationParam883.fill !== void 0 &&
        presentationParam883.fill !== null
          ? presentationHn.fromPartial(presentationParam883.fill)
          : void 0),
      presentationValue1056
    );
  },
};
function presentationHelper25() {
  return {
    index: 0,
    schemeColor: ``,
  };
}
var presentationValue12 = {
  encode(presentationParam994, presentationParam995 = new presentationPr()) {
    return (
      presentationParam994.index !== 0 &&
        presentationParam995.uint32(8).int32(presentationParam994.index),
      presentationParam994.schemeColor !== `` &&
        presentationParam995
          .uint32(18)
          .string(presentationParam994.schemeColor),
      presentationParam995
    );
  },
  decode(presentationParam616, presentationParam617) {
    let presentationValue817 =
        presentationParam616 instanceof presentationFr
          ? presentationParam616
          : new presentationFr(presentationParam616),
      presentationValue818 =
        presentationParam617 === void 0
          ? presentationValue817.len
          : presentationValue817.pos + presentationParam617,
      presentationValue819 = presentationHelper25();
    for (; presentationValue817.pos < presentationValue818; ) {
      let presentationValue1035 = presentationValue817.uint32();
      switch (presentationValue1035 >>> 3) {
        case 1:
          if (presentationValue1035 !== 8) break;
          presentationValue819.index = presentationValue817.int32();
          continue;
        case 2:
          if (presentationValue1035 !== 18) break;
          presentationValue819.schemeColor = presentationValue817.string();
          continue;
      }
      if ((presentationValue1035 & 7) == 4 || presentationValue1035 === 0)
        break;
      presentationValue817.skip(presentationValue1035 & 7);
    }
    return presentationValue819;
  },
  create(presentationParam1162) {
    return presentationValue12.fromPartial(presentationParam1162 ?? {});
  },
  fromPartial(presentationParam1079) {
    let presentationValue1179 = presentationHelper25();
    return (
      (presentationValue1179.index = presentationParam1079.index ?? 0),
      (presentationValue1179.schemeColor =
        presentationParam1079.schemeColor ?? ``),
      presentationValue1179
    );
  },
};
function presentationHelper26() {
  return {
    id: void 0,
    type: 0,
    color: void 0,
    gradientStops: [],
    relId: void 0,
    gradientKind: void 0,
    angleDeg: void 0,
    isScaled: void 0,
    pathType: void 0,
    fillRect: void 0,
    gradientFlip: void 0,
    tileRect: void 0,
    imageReference: void 0,
    alphaModFix: void 0,
    lum: void 0,
    srcRect: void 0,
    stretchFillRect: void 0,
    tile: void 0,
    duotone: void 0,
    pattern: void 0,
    grayscale: void 0,
    rotateWithShape: void 0,
    pictureEffects: [],
  };
}
var presentationHn = {
  encode(presentationParam29, presentationParam30 = new presentationPr()) {
    (presentationParam29.id !== void 0 &&
      presentationParam30.uint32(82).string(presentationParam29.id),
      presentationParam29.type !== 0 &&
        presentationParam30.uint32(8).int32(presentationParam29.type),
      presentationParam29.color !== void 0 &&
        presentationRn
          .encode(
            presentationParam29.color,
            presentationParam30.uint32(18).fork(),
          )
          .join());
    for (let presentationValue1230 of presentationParam29.gradientStops)
      presentationValue18
        .encode(presentationValue1230, presentationParam30.uint32(26).fork())
        .join();
    (presentationParam29.relId !== void 0 &&
      presentationParam30.uint32(34).string(presentationParam29.relId),
      presentationParam29.gradientKind !== void 0 &&
        presentationParam30.uint32(40).int32(presentationParam29.gradientKind),
      presentationParam29.angleDeg !== void 0 &&
        presentationParam30.uint32(49).double(presentationParam29.angleDeg),
      presentationParam29.isScaled !== void 0 &&
        presentationParam30.uint32(56).bool(presentationParam29.isScaled),
      presentationParam29.pathType !== void 0 &&
        presentationParam30.uint32(64).int32(presentationParam29.pathType),
      presentationParam29.fillRect !== void 0 &&
        presentationValue28
          .encode(
            presentationParam29.fillRect,
            presentationParam30.uint32(74).fork(),
          )
          .join(),
      presentationParam29.gradientFlip !== void 0 &&
        presentationParam30.uint32(176).int32(presentationParam29.gradientFlip),
      presentationParam29.tileRect !== void 0 &&
        presentationValue28
          .encode(
            presentationParam29.tileRect,
            presentationParam30.uint32(186).fork(),
          )
          .join(),
      presentationParam29.imageReference !== void 0 &&
        _presentationQn
          .encode(
            presentationParam29.imageReference,
            presentationParam30.uint32(90).fork(),
          )
          .join(),
      presentationParam29.alphaModFix !== void 0 &&
        presentationParam30.uint32(96).int32(presentationParam29.alphaModFix),
      presentationParam29.lum !== void 0 &&
        presentationParam30.uint32(104).bool(presentationParam29.lum),
      presentationParam29.srcRect !== void 0 &&
        presentationValue28
          .encode(
            presentationParam29.srcRect,
            presentationParam30.uint32(114).fork(),
          )
          .join(),
      presentationParam29.stretchFillRect !== void 0 &&
        presentationValue28
          .encode(
            presentationParam29.stretchFillRect,
            presentationParam30.uint32(122).fork(),
          )
          .join(),
      presentationParam29.tile !== void 0 &&
        presentationValue13
          .encode(
            presentationParam29.tile,
            presentationParam30.uint32(146).fork(),
          )
          .join(),
      presentationParam29.duotone !== void 0 &&
        presentationValue15
          .encode(
            presentationParam29.duotone,
            presentationParam30.uint32(130).fork(),
          )
          .join(),
      presentationParam29.pattern !== void 0 &&
        presentationValue14
          .encode(
            presentationParam29.pattern,
            presentationParam30.uint32(138).fork(),
          )
          .join(),
      presentationParam29.grayscale !== void 0 &&
        presentationParam30.uint32(152).bool(presentationParam29.grayscale),
      presentationParam29.rotateWithShape !== void 0 &&
        presentationParam30
          .uint32(160)
          .bool(presentationParam29.rotateWithShape));
    for (let presentationValue1222 of presentationParam29.pictureEffects)
      presentationValue17
        .encode(presentationValue1222, presentationParam30.uint32(170).fork())
        .join();
    return presentationParam30;
  },
  decode(presentationParam22, presentationParam23) {
    let presentationValue127 =
        presentationParam22 instanceof presentationFr
          ? presentationParam22
          : new presentationFr(presentationParam22),
      presentationValue128 =
        presentationParam23 === void 0
          ? presentationValue127.len
          : presentationValue127.pos + presentationParam23,
      presentationValue129 = presentationHelper26();
    for (; presentationValue127.pos < presentationValue128; ) {
      let presentationValue132 = presentationValue127.uint32();
      switch (presentationValue132 >>> 3) {
        case 10:
          if (presentationValue132 !== 82) break;
          presentationValue129.id = presentationValue127.string();
          continue;
        case 1:
          if (presentationValue132 !== 8) break;
          presentationValue129.type = presentationValue127.int32();
          continue;
        case 2:
          if (presentationValue132 !== 18) break;
          presentationValue129.color = presentationRn.decode(
            presentationValue127,
            presentationValue127.uint32(),
          );
          continue;
        case 3:
          if (presentationValue132 !== 26) break;
          presentationValue129.gradientStops.push(
            presentationValue18.decode(
              presentationValue127,
              presentationValue127.uint32(),
            ),
          );
          continue;
        case 4:
          if (presentationValue132 !== 34) break;
          presentationValue129.relId = presentationValue127.string();
          continue;
        case 5:
          if (presentationValue132 !== 40) break;
          presentationValue129.gradientKind = presentationValue127.int32();
          continue;
        case 6:
          if (presentationValue132 !== 49) break;
          presentationValue129.angleDeg = presentationValue127.double();
          continue;
        case 7:
          if (presentationValue132 !== 56) break;
          presentationValue129.isScaled = presentationValue127.bool();
          continue;
        case 8:
          if (presentationValue132 !== 64) break;
          presentationValue129.pathType = presentationValue127.int32();
          continue;
        case 9:
          if (presentationValue132 !== 74) break;
          presentationValue129.fillRect = presentationValue28.decode(
            presentationValue127,
            presentationValue127.uint32(),
          );
          continue;
        case 22:
          if (presentationValue132 !== 176) break;
          presentationValue129.gradientFlip = presentationValue127.int32();
          continue;
        case 23:
          if (presentationValue132 !== 186) break;
          presentationValue129.tileRect = presentationValue28.decode(
            presentationValue127,
            presentationValue127.uint32(),
          );
          continue;
        case 11:
          if (presentationValue132 !== 90) break;
          presentationValue129.imageReference = _presentationQn.decode(
            presentationValue127,
            presentationValue127.uint32(),
          );
          continue;
        case 12:
          if (presentationValue132 !== 96) break;
          presentationValue129.alphaModFix = presentationValue127.int32();
          continue;
        case 13:
          if (presentationValue132 !== 104) break;
          presentationValue129.lum = presentationValue127.bool();
          continue;
        case 14:
          if (presentationValue132 !== 114) break;
          presentationValue129.srcRect = presentationValue28.decode(
            presentationValue127,
            presentationValue127.uint32(),
          );
          continue;
        case 15:
          if (presentationValue132 !== 122) break;
          presentationValue129.stretchFillRect = presentationValue28.decode(
            presentationValue127,
            presentationValue127.uint32(),
          );
          continue;
        case 18:
          if (presentationValue132 !== 146) break;
          presentationValue129.tile = presentationValue13.decode(
            presentationValue127,
            presentationValue127.uint32(),
          );
          continue;
        case 16:
          if (presentationValue132 !== 130) break;
          presentationValue129.duotone = presentationValue15.decode(
            presentationValue127,
            presentationValue127.uint32(),
          );
          continue;
        case 17:
          if (presentationValue132 !== 138) break;
          presentationValue129.pattern = presentationValue14.decode(
            presentationValue127,
            presentationValue127.uint32(),
          );
          continue;
        case 19:
          if (presentationValue132 !== 152) break;
          presentationValue129.grayscale = presentationValue127.bool();
          continue;
        case 20:
          if (presentationValue132 !== 160) break;
          presentationValue129.rotateWithShape = presentationValue127.bool();
          continue;
        case 21:
          if (presentationValue132 !== 170) break;
          presentationValue129.pictureEffects.push(
            presentationValue17.decode(
              presentationValue127,
              presentationValue127.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue132 & 7) == 4 || presentationValue132 === 0) break;
      presentationValue127.skip(presentationValue132 & 7);
    }
    return presentationValue129;
  },
  create(presentationParam1332) {
    return presentationHn.fromPartial(presentationParam1332 ?? {});
  },
  fromPartial(presentationParam39) {
    let presentationValue146 = presentationHelper26();
    return (
      (presentationValue146.id = presentationParam39.id ?? void 0),
      (presentationValue146.type = presentationParam39.type ?? 0),
      (presentationValue146.color =
        presentationParam39.color !== void 0 &&
        presentationParam39.color !== null
          ? presentationRn.fromPartial(presentationParam39.color)
          : void 0),
      (presentationValue146.gradientStops =
        presentationParam39.gradientStops?.map((presentationParam1384) =>
          presentationValue18.fromPartial(presentationParam1384),
        ) || []),
      (presentationValue146.relId = presentationParam39.relId ?? void 0),
      (presentationValue146.gradientKind =
        presentationParam39.gradientKind ?? void 0),
      (presentationValue146.angleDeg = presentationParam39.angleDeg ?? void 0),
      (presentationValue146.isScaled = presentationParam39.isScaled ?? void 0),
      (presentationValue146.pathType = presentationParam39.pathType ?? void 0),
      (presentationValue146.fillRect =
        presentationParam39.fillRect !== void 0 &&
        presentationParam39.fillRect !== null
          ? presentationValue28.fromPartial(presentationParam39.fillRect)
          : void 0),
      (presentationValue146.gradientFlip =
        presentationParam39.gradientFlip ?? void 0),
      (presentationValue146.tileRect =
        presentationParam39.tileRect !== void 0 &&
        presentationParam39.tileRect !== null
          ? presentationValue28.fromPartial(presentationParam39.tileRect)
          : void 0),
      (presentationValue146.imageReference =
        presentationParam39.imageReference !== void 0 &&
        presentationParam39.imageReference !== null
          ? _presentationQn.fromPartial(presentationParam39.imageReference)
          : void 0),
      (presentationValue146.alphaModFix =
        presentationParam39.alphaModFix ?? void 0),
      (presentationValue146.lum = presentationParam39.lum ?? void 0),
      (presentationValue146.srcRect =
        presentationParam39.srcRect !== void 0 &&
        presentationParam39.srcRect !== null
          ? presentationValue28.fromPartial(presentationParam39.srcRect)
          : void 0),
      (presentationValue146.stretchFillRect =
        presentationParam39.stretchFillRect !== void 0 &&
        presentationParam39.stretchFillRect !== null
          ? presentationValue28.fromPartial(presentationParam39.stretchFillRect)
          : void 0),
      (presentationValue146.tile =
        presentationParam39.tile !== void 0 && presentationParam39.tile !== null
          ? presentationValue13.fromPartial(presentationParam39.tile)
          : void 0),
      (presentationValue146.duotone =
        presentationParam39.duotone !== void 0 &&
        presentationParam39.duotone !== null
          ? presentationValue15.fromPartial(presentationParam39.duotone)
          : void 0),
      (presentationValue146.pattern =
        presentationParam39.pattern !== void 0 &&
        presentationParam39.pattern !== null
          ? presentationValue14.fromPartial(presentationParam39.pattern)
          : void 0),
      (presentationValue146.grayscale =
        presentationParam39.grayscale ?? void 0),
      (presentationValue146.rotateWithShape =
        presentationParam39.rotateWithShape ?? void 0),
      (presentationValue146.pictureEffects =
        presentationParam39.pictureEffects?.map((presentationParam1385) =>
          presentationValue17.fromPartial(presentationParam1385),
        ) || []),
      presentationValue146
    );
  },
};
function presentationHelper27() {
  return {
    offsetX: void 0,
    offsetY: void 0,
    scaleX: void 0,
    scaleY: void 0,
    flip: void 0,
    alignment: void 0,
  };
}
var presentationValue13 = {
  encode(event, presentationParam501 = new presentationPr()) {
    return (
      event.offsetX !== void 0 &&
        presentationParam501.uint32(8).int64(event.offsetX),
      event.offsetY !== void 0 &&
        presentationParam501.uint32(16).int64(event.offsetY),
      event.scaleX !== void 0 &&
        presentationParam501.uint32(24).int32(event.scaleX),
      event.scaleY !== void 0 &&
        presentationParam501.uint32(32).int32(event.scaleY),
      event.flip !== void 0 &&
        presentationParam501.uint32(42).string(event.flip),
      event.alignment !== void 0 &&
        presentationParam501.uint32(50).string(event.alignment),
      presentationParam501
    );
  },
  decode(presentationParam258, presentationParam259) {
    let presentationValue386 =
        presentationParam258 instanceof presentationFr
          ? presentationParam258
          : new presentationFr(presentationParam258),
      presentationValue387 =
        presentationParam259 === void 0
          ? presentationValue386.len
          : presentationValue386.pos + presentationParam259,
      presentationValue388 = presentationHelper27();
    for (; presentationValue386.pos < presentationValue387; ) {
      let presentationValue532 = presentationValue386.uint32();
      switch (presentationValue532 >>> 3) {
        case 1:
          if (presentationValue532 !== 8) break;
          presentationValue388.offsetX = presentationHelper66(
            presentationValue386.int64(),
          );
          continue;
        case 2:
          if (presentationValue532 !== 16) break;
          presentationValue388.offsetY = presentationHelper66(
            presentationValue386.int64(),
          );
          continue;
        case 3:
          if (presentationValue532 !== 24) break;
          presentationValue388.scaleX = presentationValue386.int32();
          continue;
        case 4:
          if (presentationValue532 !== 32) break;
          presentationValue388.scaleY = presentationValue386.int32();
          continue;
        case 5:
          if (presentationValue532 !== 42) break;
          presentationValue388.flip = presentationValue386.string();
          continue;
        case 6:
          if (presentationValue532 !== 50) break;
          presentationValue388.alignment = presentationValue386.string();
          continue;
      }
      if ((presentationValue532 & 7) == 4 || presentationValue532 === 0) break;
      presentationValue386.skip(presentationValue532 & 7);
    }
    return presentationValue388;
  },
  create(presentationParam1163) {
    return presentationValue13.fromPartial(presentationParam1163 ?? {});
  },
  fromPartial(event) {
    let presentationValue992 = presentationHelper27();
    return (
      (presentationValue992.offsetX = event.offsetX ?? void 0),
      (presentationValue992.offsetY = event.offsetY ?? void 0),
      (presentationValue992.scaleX = event.scaleX ?? void 0),
      (presentationValue992.scaleY = event.scaleY ?? void 0),
      (presentationValue992.flip = event.flip ?? void 0),
      (presentationValue992.alignment = event.alignment ?? void 0),
      presentationValue992
    );
  },
};
function presentationHelper28() {
  return {
    patternType: 0,
    color: void 0,
    preset: void 0,
  };
}
var presentationValue14 = {
  encode(presentationParam833, presentationParam834 = new presentationPr()) {
    return (
      presentationParam833.patternType !== 0 &&
        presentationParam834.uint32(8).int32(presentationParam833.patternType),
      presentationParam833.color !== void 0 &&
        presentationRn
          .encode(
            presentationParam833.color,
            presentationParam834.uint32(26).fork(),
          )
          .join(),
      presentationParam833.preset !== void 0 &&
        presentationParam834.uint32(34).string(presentationParam833.preset),
      presentationParam834
    );
  },
  decode(presentationParam460, presentationParam461) {
    let presentationValue624 =
        presentationParam460 instanceof presentationFr
          ? presentationParam460
          : new presentationFr(presentationParam460),
      presentationValue625 =
        presentationParam461 === void 0
          ? presentationValue624.len
          : presentationValue624.pos + presentationParam461,
      presentationValue626 = presentationHelper28();
    for (; presentationValue624.pos < presentationValue625; ) {
      let presentationValue897 = presentationValue624.uint32();
      switch (presentationValue897 >>> 3) {
        case 1:
          if (presentationValue897 !== 8) break;
          presentationValue626.patternType = presentationValue624.int32();
          continue;
        case 3:
          if (presentationValue897 !== 26) break;
          presentationValue626.color = presentationRn.decode(
            presentationValue624,
            presentationValue624.uint32(),
          );
          continue;
        case 4:
          if (presentationValue897 !== 34) break;
          presentationValue626.preset = presentationValue624.string();
          continue;
      }
      if ((presentationValue897 & 7) == 4 || presentationValue897 === 0) break;
      presentationValue624.skip(presentationValue897 & 7);
    }
    return presentationValue626;
  },
  create(presentationParam1164) {
    return presentationValue14.fromPartial(presentationParam1164 ?? {});
  },
  fromPartial(presentationParam888) {
    let presentationValue1060 = presentationHelper28();
    return (
      (presentationValue1060.patternType =
        presentationParam888.patternType ?? 0),
      (presentationValue1060.color =
        presentationParam888.color !== void 0 &&
        presentationParam888.color !== null
          ? presentationRn.fromPartial(presentationParam888.color)
          : void 0),
      (presentationValue1060.preset = presentationParam888.preset ?? void 0),
      presentationValue1060
    );
  },
};
function presentationHelper29() {
  return {
    id: ``,
  };
}
var _presentationQn = {
  encode(presentationParam1127, presentationParam1128 = new presentationPr()) {
    return (
      presentationParam1127.id !== `` &&
        presentationParam1128.uint32(10).string(presentationParam1127.id),
      presentationParam1128
    );
  },
  decode(presentationParam785, presentationParam786) {
    let presentationValue968 =
        presentationParam785 instanceof presentationFr
          ? presentationParam785
          : new presentationFr(presentationParam785),
      presentationValue969 =
        presentationParam786 === void 0
          ? presentationValue968.len
          : presentationValue968.pos + presentationParam786,
      presentationValue970 = presentationHelper29();
    for (; presentationValue968.pos < presentationValue969; ) {
      let presentationValue1125 = presentationValue968.uint32();
      switch (presentationValue1125 >>> 3) {
        case 1:
          if (presentationValue1125 !== 10) break;
          presentationValue970.id = presentationValue968.string();
          continue;
      }
      if ((presentationValue1125 & 7) == 4 || presentationValue1125 === 0)
        break;
      presentationValue968.skip(presentationValue1125 & 7);
    }
    return presentationValue970;
  },
  create(presentationParam1333) {
    return _presentationQn.fromPartial(presentationParam1333 ?? {});
  },
  fromPartial(presentationParam1149) {
    let presentationValue1320 = presentationHelper29();
    return (
      (presentationValue1320.id = presentationParam1149.id ?? ``),
      presentationValue1320
    );
  },
};
function presentationHelper30() {
  return {
    darkColor: void 0,
    lightColor: void 0,
  };
}
var presentationValue15 = {
  encode(presentationParam869, presentationParam870 = new presentationPr()) {
    return (
      presentationParam869.darkColor !== void 0 &&
        presentationRn
          .encode(
            presentationParam869.darkColor,
            presentationParam870.uint32(10).fork(),
          )
          .join(),
      presentationParam869.lightColor !== void 0 &&
        presentationRn
          .encode(
            presentationParam869.lightColor,
            presentationParam870.uint32(18).fork(),
          )
          .join(),
      presentationParam870
    );
  },
  decode(presentationParam527, presentationParam528) {
    let presentationValue694 =
        presentationParam527 instanceof presentationFr
          ? presentationParam527
          : new presentationFr(presentationParam527),
      presentationValue695 =
        presentationParam528 === void 0
          ? presentationValue694.len
          : presentationValue694.pos + presentationParam528,
      presentationValue696 = presentationHelper30();
    for (; presentationValue694.pos < presentationValue695; ) {
      let presentationValue988 = presentationValue694.uint32();
      switch (presentationValue988 >>> 3) {
        case 1:
          if (presentationValue988 !== 10) break;
          presentationValue696.darkColor = presentationRn.decode(
            presentationValue694,
            presentationValue694.uint32(),
          );
          continue;
        case 2:
          if (presentationValue988 !== 18) break;
          presentationValue696.lightColor = presentationRn.decode(
            presentationValue694,
            presentationValue694.uint32(),
          );
          continue;
      }
      if ((presentationValue988 & 7) == 4 || presentationValue988 === 0) break;
      presentationValue694.skip(presentationValue988 & 7);
    }
    return presentationValue696;
  },
  create(presentationParam1334) {
    return presentationValue15.fromPartial(presentationParam1334 ?? {});
  },
  fromPartial(presentationParam805) {
    let presentationValue984 = presentationHelper30();
    return (
      (presentationValue984.darkColor =
        presentationParam805.darkColor !== void 0 &&
        presentationParam805.darkColor !== null
          ? presentationRn.fromPartial(presentationParam805.darkColor)
          : void 0),
      (presentationValue984.lightColor =
        presentationParam805.lightColor !== void 0 &&
        presentationParam805.lightColor !== null
          ? presentationRn.fromPartial(presentationParam805.lightColor)
          : void 0),
      presentationValue984
    );
  },
};
function presentationHelper31() {
  return {
    brightness: void 0,
    contrast: void 0,
  };
}
var presentationValue16 = {
  encode(presentationParam957, presentationParam958 = new presentationPr()) {
    return (
      presentationParam957.brightness !== void 0 &&
        presentationParam958.uint32(8).int32(presentationParam957.brightness),
      presentationParam957.contrast !== void 0 &&
        presentationParam958.uint32(16).int32(presentationParam957.contrast),
      presentationParam958
    );
  },
  decode(presentationParam612, presentationParam613) {
    let presentationValue802 =
        presentationParam612 instanceof presentationFr
          ? presentationParam612
          : new presentationFr(presentationParam612),
      presentationValue803 =
        presentationParam613 === void 0
          ? presentationValue802.len
          : presentationValue802.pos + presentationParam613,
      presentationValue804 = presentationHelper31();
    for (; presentationValue802.pos < presentationValue803; ) {
      let presentationValue1033 = presentationValue802.uint32();
      switch (presentationValue1033 >>> 3) {
        case 1:
          if (presentationValue1033 !== 8) break;
          presentationValue804.brightness = presentationValue802.int32();
          continue;
        case 2:
          if (presentationValue1033 !== 16) break;
          presentationValue804.contrast = presentationValue802.int32();
          continue;
      }
      if ((presentationValue1033 & 7) == 4 || presentationValue1033 === 0)
        break;
      presentationValue802.skip(presentationValue1033 & 7);
    }
    return presentationValue804;
  },
  create(presentationParam1165) {
    return presentationValue16.fromPartial(presentationParam1165 ?? {});
  },
  fromPartial(presentationParam1034) {
    let presentationValue1154 = presentationHelper31();
    return (
      (presentationValue1154.brightness =
        presentationParam1034.brightness ?? void 0),
      (presentationValue1154.contrast =
        presentationParam1034.contrast ?? void 0),
      presentationValue1154
    );
  },
};
function presentationHelper32() {
  return {
    fromColor: void 0,
    toColor: void 0,
    useAlpha: void 0,
  };
}
var $e = {
  encode(presentationParam792, presentationParam793 = new presentationPr()) {
    return (
      presentationParam792.fromColor !== void 0 &&
        presentationRn
          .encode(
            presentationParam792.fromColor,
            presentationParam793.uint32(10).fork(),
          )
          .join(),
      presentationParam792.toColor !== void 0 &&
        presentationRn
          .encode(
            presentationParam792.toColor,
            presentationParam793.uint32(18).fork(),
          )
          .join(),
      presentationParam792.useAlpha !== void 0 &&
        presentationParam793.uint32(24).bool(presentationParam792.useAlpha),
      presentationParam793
    );
  },
  decode(presentationParam441, presentationParam442) {
    let presentationValue598 =
        presentationParam441 instanceof presentationFr
          ? presentationParam441
          : new presentationFr(presentationParam441),
      presentationValue599 =
        presentationParam442 === void 0
          ? presentationValue598.len
          : presentationValue598.pos + presentationParam442,
      presentationValue600 = presentationHelper32();
    for (; presentationValue598.pos < presentationValue599; ) {
      let presentationValue870 = presentationValue598.uint32();
      switch (presentationValue870 >>> 3) {
        case 1:
          if (presentationValue870 !== 10) break;
          presentationValue600.fromColor = presentationRn.decode(
            presentationValue598,
            presentationValue598.uint32(),
          );
          continue;
        case 2:
          if (presentationValue870 !== 18) break;
          presentationValue600.toColor = presentationRn.decode(
            presentationValue598,
            presentationValue598.uint32(),
          );
          continue;
        case 3:
          if (presentationValue870 !== 24) break;
          presentationValue600.useAlpha = presentationValue598.bool();
          continue;
      }
      if ((presentationValue870 & 7) == 4 || presentationValue870 === 0) break;
      presentationValue598.skip(presentationValue870 & 7);
    }
    return presentationValue600;
  },
  create(presentationParam1166) {
    return $e.fromPartial(presentationParam1166 ?? {});
  },
  fromPartial(presentationParam736) {
    let presentationValue915 = presentationHelper32();
    return (
      (presentationValue915.fromColor =
        presentationParam736.fromColor !== void 0 &&
        presentationParam736.fromColor !== null
          ? presentationRn.fromPartial(presentationParam736.fromColor)
          : void 0),
      (presentationValue915.toColor =
        presentationParam736.toColor !== void 0 &&
        presentationParam736.toColor !== null
          ? presentationRn.fromPartial(presentationParam736.toColor)
          : void 0),
      (presentationValue915.useAlpha = presentationParam736.useAlpha ?? void 0),
      presentationValue915
    );
  },
};
function presentationHelper33() {
  return {
    type: 0,
    alphaModFix: void 0,
    luminance: void 0,
    duotone: void 0,
    biLevelThreshold: void 0,
    colorChange: void 0,
  };
}
var presentationValue17 = {
  encode(presentationParam336, presentationParam337 = new presentationPr()) {
    return (
      presentationParam336.type !== 0 &&
        presentationParam337.uint32(8).int32(presentationParam336.type),
      presentationParam336.alphaModFix !== void 0 &&
        presentationParam337.uint32(16).int32(presentationParam336.alphaModFix),
      presentationParam336.luminance !== void 0 &&
        presentationValue16
          .encode(
            presentationParam336.luminance,
            presentationParam337.uint32(26).fork(),
          )
          .join(),
      presentationParam336.duotone !== void 0 &&
        presentationValue15
          .encode(
            presentationParam336.duotone,
            presentationParam337.uint32(34).fork(),
          )
          .join(),
      presentationParam336.biLevelThreshold !== void 0 &&
        presentationParam337
          .uint32(40)
          .int32(presentationParam336.biLevelThreshold),
      presentationParam336.colorChange !== void 0 &&
        $e
          .encode(
            presentationParam336.colorChange,
            presentationParam337.uint32(50).fork(),
          )
          .join(),
      presentationParam337
    );
  },
  decode(presentationParam212, presentationParam213) {
    let presentationValue337 =
        presentationParam212 instanceof presentationFr
          ? presentationParam212
          : new presentationFr(presentationParam212),
      presentationValue338 =
        presentationParam213 === void 0
          ? presentationValue337.len
          : presentationValue337.pos + presentationParam213,
      presentationValue339 = presentationHelper33();
    for (; presentationValue337.pos < presentationValue338; ) {
      let presentationValue452 = presentationValue337.uint32();
      switch (presentationValue452 >>> 3) {
        case 1:
          if (presentationValue452 !== 8) break;
          presentationValue339.type = presentationValue337.int32();
          continue;
        case 2:
          if (presentationValue452 !== 16) break;
          presentationValue339.alphaModFix = presentationValue337.int32();
          continue;
        case 3:
          if (presentationValue452 !== 26) break;
          presentationValue339.luminance = presentationValue16.decode(
            presentationValue337,
            presentationValue337.uint32(),
          );
          continue;
        case 4:
          if (presentationValue452 !== 34) break;
          presentationValue339.duotone = presentationValue15.decode(
            presentationValue337,
            presentationValue337.uint32(),
          );
          continue;
        case 5:
          if (presentationValue452 !== 40) break;
          presentationValue339.biLevelThreshold = presentationValue337.int32();
          continue;
        case 6:
          if (presentationValue452 !== 50) break;
          presentationValue339.colorChange = $e.decode(
            presentationValue337,
            presentationValue337.uint32(),
          );
          continue;
      }
      if ((presentationValue452 & 7) == 4 || presentationValue452 === 0) break;
      presentationValue337.skip(presentationValue452 & 7);
    }
    return presentationValue339;
  },
  create(presentationParam1167) {
    return presentationValue17.fromPartial(presentationParam1167 ?? {});
  },
  fromPartial(presentationParam355) {
    let presentationValue498 = presentationHelper33();
    return (
      (presentationValue498.type = presentationParam355.type ?? 0),
      (presentationValue498.alphaModFix =
        presentationParam355.alphaModFix ?? void 0),
      (presentationValue498.luminance =
        presentationParam355.luminance !== void 0 &&
        presentationParam355.luminance !== null
          ? presentationValue16.fromPartial(presentationParam355.luminance)
          : void 0),
      (presentationValue498.duotone =
        presentationParam355.duotone !== void 0 &&
        presentationParam355.duotone !== null
          ? presentationValue15.fromPartial(presentationParam355.duotone)
          : void 0),
      (presentationValue498.biLevelThreshold =
        presentationParam355.biLevelThreshold ?? void 0),
      (presentationValue498.colorChange =
        presentationParam355.colorChange !== void 0 &&
        presentationParam355.colorChange !== null
          ? $e.fromPartial(presentationParam355.colorChange)
          : void 0),
      presentationValue498
    );
  },
};
function presentationHelper34() {
  return {
    position: void 0,
    color: void 0,
  };
}
var presentationValue18 = {
  encode(presentationParam932, presentationParam933 = new presentationPr()) {
    return (
      presentationParam932.position !== void 0 &&
        presentationParam933.uint32(8).int32(presentationParam932.position),
      presentationParam932.color !== void 0 &&
        presentationRn
          .encode(
            presentationParam932.color,
            presentationParam933.uint32(18).fork(),
          )
          .join(),
      presentationParam933
    );
  },
  decode(presentationParam581, presentationParam582) {
    let presentationValue765 =
        presentationParam581 instanceof presentationFr
          ? presentationParam581
          : new presentationFr(presentationParam581),
      presentationValue766 =
        presentationParam582 === void 0
          ? presentationValue765.len
          : presentationValue765.pos + presentationParam582,
      presentationValue767 = presentationHelper34();
    for (; presentationValue765.pos < presentationValue766; ) {
      let presentationValue1016 = presentationValue765.uint32();
      switch (presentationValue1016 >>> 3) {
        case 1:
          if (presentationValue1016 !== 8) break;
          presentationValue767.position = presentationValue765.int32();
          continue;
        case 2:
          if (presentationValue1016 !== 18) break;
          presentationValue767.color = presentationRn.decode(
            presentationValue765,
            presentationValue765.uint32(),
          );
          continue;
      }
      if ((presentationValue1016 & 7) == 4 || presentationValue1016 === 0)
        break;
      presentationValue765.skip(presentationValue1016 & 7);
    }
    return presentationValue767;
  },
  create(presentationParam1168) {
    return presentationValue18.fromPartial(presentationParam1168 ?? {});
  },
  fromPartial(presentationParam951) {
    let presentationValue1087 = presentationHelper34();
    return (
      (presentationValue1087.position =
        presentationParam951.position ?? void 0),
      (presentationValue1087.color =
        presentationParam951.color !== void 0 &&
        presentationParam951.color !== null
          ? presentationRn.fromPartial(presentationParam951.color)
          : void 0),
      presentationValue1087
    );
  },
};
function presentationHelper35() {
  return {
    noAutofit: void 0,
    normalAutoFit: void 0,
    shapeAutoFit: void 0,
  };
}
var presentationValue19 = {
  encode(presentationParam655, presentationParam656 = new presentationPr()) {
    return (
      presentationParam655.noAutofit !== void 0 &&
        presentationValue20
          .encode(
            presentationParam655.noAutofit,
            presentationParam656.uint32(10).fork(),
          )
          .join(),
      presentationParam655.normalAutoFit !== void 0 &&
        presentationValue22
          .encode(
            presentationParam655.normalAutoFit,
            presentationParam656.uint32(18).fork(),
          )
          .join(),
      presentationParam655.shapeAutoFit !== void 0 &&
        presentationValue21
          .encode(
            presentationParam655.shapeAutoFit,
            presentationParam656.uint32(26).fork(),
          )
          .join(),
      presentationParam656
    );
  },
  decode(presentationParam393, presentationParam394) {
    let presentationValue540 =
        presentationParam393 instanceof presentationFr
          ? presentationParam393
          : new presentationFr(presentationParam393),
      presentationValue541 =
        presentationParam394 === void 0
          ? presentationValue540.len
          : presentationValue540.pos + presentationParam394,
      presentationValue542 = presentationHelper35();
    for (; presentationValue540.pos < presentationValue541; ) {
      let presentationValue790 = presentationValue540.uint32();
      switch (presentationValue790 >>> 3) {
        case 1:
          if (presentationValue790 !== 10) break;
          presentationValue542.noAutofit = presentationValue20.decode(
            presentationValue540,
            presentationValue540.uint32(),
          );
          continue;
        case 2:
          if (presentationValue790 !== 18) break;
          presentationValue542.normalAutoFit = presentationValue22.decode(
            presentationValue540,
            presentationValue540.uint32(),
          );
          continue;
        case 3:
          if (presentationValue790 !== 26) break;
          presentationValue542.shapeAutoFit = presentationValue21.decode(
            presentationValue540,
            presentationValue540.uint32(),
          );
          continue;
      }
      if ((presentationValue790 & 7) == 4 || presentationValue790 === 0) break;
      presentationValue540.skip(presentationValue790 & 7);
    }
    return presentationValue542;
  },
  create(presentationParam1335) {
    return presentationValue19.fromPartial(presentationParam1335 ?? {});
  },
  fromPartial(presentationParam493) {
    let presentationValue660 = presentationHelper35();
    return (
      (presentationValue660.noAutofit =
        presentationParam493.noAutofit !== void 0 &&
        presentationParam493.noAutofit !== null
          ? presentationValue20.fromPartial(presentationParam493.noAutofit)
          : void 0),
      (presentationValue660.normalAutoFit =
        presentationParam493.normalAutoFit !== void 0 &&
        presentationParam493.normalAutoFit !== null
          ? presentationValue22.fromPartial(presentationParam493.normalAutoFit)
          : void 0),
      (presentationValue660.shapeAutoFit =
        presentationParam493.shapeAutoFit !== void 0 &&
        presentationParam493.shapeAutoFit !== null
          ? presentationValue21.fromPartial(presentationParam493.shapeAutoFit)
          : void 0),
      presentationValue660
    );
  },
};
function at() {
  return {};
}
var presentationValue20 = {
  encode(presentationParam1370, presentationParam1371 = new presentationPr()) {
    return presentationParam1371;
  },
  decode(presentationParam871, presentationParam872) {
    let presentationValue1043 =
        presentationParam871 instanceof presentationFr
          ? presentationParam871
          : new presentationFr(presentationParam871),
      presentationValue1044 =
        presentationParam872 === void 0
          ? presentationValue1043.len
          : presentationValue1043.pos + presentationParam872,
      presentationValue1045 = at();
    for (; presentationValue1043.pos < presentationValue1044; ) {
      let presentationValue1225 = presentationValue1043.uint32();
      switch (presentationValue1225 >>> 3) {
      }
      if ((presentationValue1225 & 7) == 4 || presentationValue1225 === 0)
        break;
      presentationValue1043.skip(presentationValue1225 & 7);
    }
    return presentationValue1045;
  },
  create(presentationParam1169) {
    return presentationValue20.fromPartial(presentationParam1169 ?? {});
  },
  fromPartial(presentationParam1372) {
    return at();
  },
};
function presentationHelper36() {
  return {};
}
var presentationValue21 = {
  encode(presentationParam1373, presentationParam1374 = new presentationPr()) {
    return presentationParam1374;
  },
  decode(presentationParam873, presentationParam874) {
    let presentationValue1046 =
        presentationParam873 instanceof presentationFr
          ? presentationParam873
          : new presentationFr(presentationParam873),
      presentationValue1047 =
        presentationParam874 === void 0
          ? presentationValue1046.len
          : presentationValue1046.pos + presentationParam874,
      presentationValue1048 = presentationHelper36();
    for (; presentationValue1046.pos < presentationValue1047; ) {
      let presentationValue1226 = presentationValue1046.uint32();
      switch (presentationValue1226 >>> 3) {
      }
      if ((presentationValue1226 & 7) == 4 || presentationValue1226 === 0)
        break;
      presentationValue1046.skip(presentationValue1226 & 7);
    }
    return presentationValue1048;
  },
  create(presentationParam1170) {
    return presentationValue21.fromPartial(presentationParam1170 ?? {});
  },
  fromPartial(presentationParam1375) {
    return presentationHelper36();
  },
};
function presentationHelper37() {
  return {
    fontScale: void 0,
    lineSpaceReduction: void 0,
  };
}
var presentationValue22 = {
  encode(presentationParam913, presentationParam914 = new presentationPr()) {
    return (
      presentationParam913.fontScale !== void 0 &&
        presentationParam914.uint32(8).int32(presentationParam913.fontScale),
      presentationParam913.lineSpaceReduction !== void 0 &&
        presentationParam914
          .uint32(16)
          .int32(presentationParam913.lineSpaceReduction),
      presentationParam914
    );
  },
  decode(presentationParam577, presentationParam578) {
    let presentationValue757 =
        presentationParam577 instanceof presentationFr
          ? presentationParam577
          : new presentationFr(presentationParam577),
      presentationValue758 =
        presentationParam578 === void 0
          ? presentationValue757.len
          : presentationValue757.pos + presentationParam578,
      presentationValue759 = presentationHelper37();
    for (; presentationValue757.pos < presentationValue758; ) {
      let presentationValue1013 = presentationValue757.uint32();
      switch (presentationValue1013 >>> 3) {
        case 1:
          if (presentationValue1013 !== 8) break;
          presentationValue759.fontScale = presentationValue757.int32();
          continue;
        case 2:
          if (presentationValue1013 !== 16) break;
          presentationValue759.lineSpaceReduction =
            presentationValue757.int32();
          continue;
      }
      if ((presentationValue1013 & 7) == 4 || presentationValue1013 === 0)
        break;
      presentationValue757.skip(presentationValue1013 & 7);
    }
    return presentationValue759;
  },
  create(presentationParam1171) {
    return presentationValue22.fromPartial(presentationParam1171 ?? {});
  },
  fromPartial(presentationParam999) {
    let presentationValue1126 = presentationHelper37();
    return (
      (presentationValue1126.fontScale =
        presentationParam999.fontScale ?? void 0),
      (presentationValue1126.lineSpaceReduction =
        presentationParam999.lineSpaceReduction ?? void 0),
      presentationValue1126
    );
  },
};
function presentationHelper38() {
  return {
    anchor: void 0,
    vertical: void 0,
    rotation: void 0,
    bold: void 0,
    italic: void 0,
    fontSize: void 0,
    fill: void 0,
    alignment: void 0,
    underline: void 0,
    bottomInset: void 0,
    leftInset: void 0,
    rightInset: void 0,
    topInset: void 0,
    useParagraphSpacing: void 0,
    name: void 0,
    family: void 0,
    scheme: void 0,
    typeface: void 0,
    characterSpacing: void 0,
    wrap: void 0,
    autoFit: void 0,
    outline: void 0,
    shadow: void 0,
    capitalization: void 0,
    highlight: void 0,
  };
}
var presentationOr = {
  encode(presentationParam27, presentationParam28 = new presentationPr()) {
    return (
      presentationParam27.anchor !== void 0 &&
        presentationParam28.uint32(8).int32(presentationParam27.anchor),
      presentationParam27.vertical !== void 0 &&
        presentationParam28.uint32(16).int32(presentationParam27.vertical),
      presentationParam27.rotation !== void 0 &&
        presentationParam28.uint32(24).int32(presentationParam27.rotation),
      presentationParam27.bold !== void 0 &&
        presentationParam28.uint32(32).bool(presentationParam27.bold),
      presentationParam27.italic !== void 0 &&
        presentationParam28.uint32(40).bool(presentationParam27.italic),
      presentationParam27.fontSize !== void 0 &&
        presentationParam28.uint32(48).int32(presentationParam27.fontSize),
      presentationParam27.fill !== void 0 &&
        presentationHn
          .encode(
            presentationParam27.fill,
            presentationParam28.uint32(58).fork(),
          )
          .join(),
      presentationParam27.alignment !== void 0 &&
        presentationParam28.uint32(64).int32(presentationParam27.alignment),
      presentationParam27.underline !== void 0 &&
        presentationParam28.uint32(74).string(presentationParam27.underline),
      presentationParam27.bottomInset !== void 0 &&
        presentationParam28.uint32(80).int32(presentationParam27.bottomInset),
      presentationParam27.leftInset !== void 0 &&
        presentationParam28.uint32(88).int32(presentationParam27.leftInset),
      presentationParam27.rightInset !== void 0 &&
        presentationParam28.uint32(96).int32(presentationParam27.rightInset),
      presentationParam27.topInset !== void 0 &&
        presentationParam28.uint32(104).int32(presentationParam27.topInset),
      presentationParam27.useParagraphSpacing !== void 0 &&
        presentationParam28
          .uint32(112)
          .bool(presentationParam27.useParagraphSpacing),
      presentationParam27.name !== void 0 &&
        presentationParam28.uint32(122).string(presentationParam27.name),
      presentationParam27.family !== void 0 &&
        presentationParam28.uint32(128).int32(presentationParam27.family),
      presentationParam27.scheme !== void 0 &&
        presentationParam28.uint32(138).string(presentationParam27.scheme),
      presentationParam27.typeface !== void 0 &&
        presentationParam28.uint32(146).string(presentationParam27.typeface),
      presentationParam27.characterSpacing !== void 0 &&
        presentationParam28
          .uint32(152)
          .int32(presentationParam27.characterSpacing),
      presentationParam27.wrap !== void 0 &&
        presentationParam28.uint32(160).int32(presentationParam27.wrap),
      presentationParam27.autoFit !== void 0 &&
        presentationValue19
          .encode(
            presentationParam27.autoFit,
            presentationParam28.uint32(170).fork(),
          )
          .join(),
      presentationParam27.outline !== void 0 &&
        presentationJn
          .encode(
            presentationParam27.outline,
            presentationParam28.uint32(178).fork(),
          )
          .join(),
      presentationParam27.shadow !== void 0 &&
        presentationValue23
          .encode(
            presentationParam27.shadow,
            presentationParam28.uint32(186).fork(),
          )
          .join(),
      presentationParam27.capitalization !== void 0 &&
        presentationParam28
          .uint32(192)
          .int32(presentationParam27.capitalization),
      presentationParam27.highlight !== void 0 &&
        presentationRn
          .encode(
            presentationParam27.highlight,
            presentationParam28.uint32(202).fork(),
          )
          .join(),
      presentationParam28
    );
  },
  decode(presentationParam20, presentationParam21) {
    let presentationValue124 =
        presentationParam20 instanceof presentationFr
          ? presentationParam20
          : new presentationFr(presentationParam20),
      presentationValue125 =
        presentationParam21 === void 0
          ? presentationValue124.len
          : presentationValue124.pos + presentationParam21,
      presentationValue126 = presentationHelper38();
    for (; presentationValue124.pos < presentationValue125; ) {
      let presentationValue131 = presentationValue124.uint32();
      switch (presentationValue131 >>> 3) {
        case 1:
          if (presentationValue131 !== 8) break;
          presentationValue126.anchor = presentationValue124.int32();
          continue;
        case 2:
          if (presentationValue131 !== 16) break;
          presentationValue126.vertical = presentationValue124.int32();
          continue;
        case 3:
          if (presentationValue131 !== 24) break;
          presentationValue126.rotation = presentationValue124.int32();
          continue;
        case 4:
          if (presentationValue131 !== 32) break;
          presentationValue126.bold = presentationValue124.bool();
          continue;
        case 5:
          if (presentationValue131 !== 40) break;
          presentationValue126.italic = presentationValue124.bool();
          continue;
        case 6:
          if (presentationValue131 !== 48) break;
          presentationValue126.fontSize = presentationValue124.int32();
          continue;
        case 7:
          if (presentationValue131 !== 58) break;
          presentationValue126.fill = presentationHn.decode(
            presentationValue124,
            presentationValue124.uint32(),
          );
          continue;
        case 8:
          if (presentationValue131 !== 64) break;
          presentationValue126.alignment = presentationValue124.int32();
          continue;
        case 9:
          if (presentationValue131 !== 74) break;
          presentationValue126.underline = presentationValue124.string();
          continue;
        case 10:
          if (presentationValue131 !== 80) break;
          presentationValue126.bottomInset = presentationValue124.int32();
          continue;
        case 11:
          if (presentationValue131 !== 88) break;
          presentationValue126.leftInset = presentationValue124.int32();
          continue;
        case 12:
          if (presentationValue131 !== 96) break;
          presentationValue126.rightInset = presentationValue124.int32();
          continue;
        case 13:
          if (presentationValue131 !== 104) break;
          presentationValue126.topInset = presentationValue124.int32();
          continue;
        case 14:
          if (presentationValue131 !== 112) break;
          presentationValue126.useParagraphSpacing =
            presentationValue124.bool();
          continue;
        case 15:
          if (presentationValue131 !== 122) break;
          presentationValue126.name = presentationValue124.string();
          continue;
        case 16:
          if (presentationValue131 !== 128) break;
          presentationValue126.family = presentationValue124.int32();
          continue;
        case 17:
          if (presentationValue131 !== 138) break;
          presentationValue126.scheme = presentationValue124.string();
          continue;
        case 18:
          if (presentationValue131 !== 146) break;
          presentationValue126.typeface = presentationValue124.string();
          continue;
        case 19:
          if (presentationValue131 !== 152) break;
          presentationValue126.characterSpacing = presentationValue124.int32();
          continue;
        case 20:
          if (presentationValue131 !== 160) break;
          presentationValue126.wrap = presentationValue124.int32();
          continue;
        case 21:
          if (presentationValue131 !== 170) break;
          presentationValue126.autoFit = presentationValue19.decode(
            presentationValue124,
            presentationValue124.uint32(),
          );
          continue;
        case 22:
          if (presentationValue131 !== 178) break;
          presentationValue126.outline = presentationJn.decode(
            presentationValue124,
            presentationValue124.uint32(),
          );
          continue;
        case 23:
          if (presentationValue131 !== 186) break;
          presentationValue126.shadow = presentationValue23.decode(
            presentationValue124,
            presentationValue124.uint32(),
          );
          continue;
        case 24:
          if (presentationValue131 !== 192) break;
          presentationValue126.capitalization = presentationValue124.int32();
          continue;
        case 25:
          if (presentationValue131 !== 202) break;
          presentationValue126.highlight = presentationRn.decode(
            presentationValue124,
            presentationValue124.uint32(),
          );
          continue;
      }
      if ((presentationValue131 & 7) == 4 || presentationValue131 === 0) break;
      presentationValue124.skip(presentationValue131 & 7);
    }
    return presentationValue126;
  },
  create(presentationParam1336) {
    return presentationOr.fromPartial(presentationParam1336 ?? {});
  },
  fromPartial(presentationParam52) {
    let presentationValue157 = presentationHelper38();
    return (
      (presentationValue157.anchor = presentationParam52.anchor ?? void 0),
      (presentationValue157.vertical = presentationParam52.vertical ?? void 0),
      (presentationValue157.rotation = presentationParam52.rotation ?? void 0),
      (presentationValue157.bold = presentationParam52.bold ?? void 0),
      (presentationValue157.italic = presentationParam52.italic ?? void 0),
      (presentationValue157.fontSize = presentationParam52.fontSize ?? void 0),
      (presentationValue157.fill =
        presentationParam52.fill !== void 0 && presentationParam52.fill !== null
          ? presentationHn.fromPartial(presentationParam52.fill)
          : void 0),
      (presentationValue157.alignment =
        presentationParam52.alignment ?? void 0),
      (presentationValue157.underline =
        presentationParam52.underline ?? void 0),
      (presentationValue157.bottomInset =
        presentationParam52.bottomInset ?? void 0),
      (presentationValue157.leftInset =
        presentationParam52.leftInset ?? void 0),
      (presentationValue157.rightInset =
        presentationParam52.rightInset ?? void 0),
      (presentationValue157.topInset = presentationParam52.topInset ?? void 0),
      (presentationValue157.useParagraphSpacing =
        presentationParam52.useParagraphSpacing ?? void 0),
      (presentationValue157.name = presentationParam52.name ?? void 0),
      (presentationValue157.family = presentationParam52.family ?? void 0),
      (presentationValue157.scheme = presentationParam52.scheme ?? void 0),
      (presentationValue157.typeface = presentationParam52.typeface ?? void 0),
      (presentationValue157.characterSpacing =
        presentationParam52.characterSpacing ?? void 0),
      (presentationValue157.wrap = presentationParam52.wrap ?? void 0),
      (presentationValue157.autoFit =
        presentationParam52.autoFit !== void 0 &&
        presentationParam52.autoFit !== null
          ? presentationValue19.fromPartial(presentationParam52.autoFit)
          : void 0),
      (presentationValue157.outline =
        presentationParam52.outline !== void 0 &&
        presentationParam52.outline !== null
          ? presentationJn.fromPartial(presentationParam52.outline)
          : void 0),
      (presentationValue157.shadow =
        presentationParam52.shadow !== void 0 &&
        presentationParam52.shadow !== null
          ? presentationValue23.fromPartial(presentationParam52.shadow)
          : void 0),
      (presentationValue157.capitalization =
        presentationParam52.capitalization ?? void 0),
      (presentationValue157.highlight =
        presentationParam52.highlight !== void 0 &&
        presentationParam52.highlight !== null
          ? presentationRn.fromPartial(presentationParam52.highlight)
          : void 0),
      presentationValue157
    );
  },
};
function presentationHelper39() {
  return {
    color: void 0,
    blurRadius: void 0,
    distance: void 0,
    direction: void 0,
    alignment: void 0,
    rotateWithShape: void 0,
  };
}
var presentationValue23 = {
  encode(presentationParam413, presentationParam414 = new presentationPr()) {
    return (
      presentationParam413.color !== void 0 &&
        presentationRn
          .encode(
            presentationParam413.color,
            presentationParam414.uint32(10).fork(),
          )
          .join(),
      presentationParam413.blurRadius !== void 0 &&
        presentationParam414.uint32(16).int32(presentationParam413.blurRadius),
      presentationParam413.distance !== void 0 &&
        presentationParam414.uint32(24).int32(presentationParam413.distance),
      presentationParam413.direction !== void 0 &&
        presentationParam414.uint32(32).int32(presentationParam413.direction),
      presentationParam413.alignment !== void 0 &&
        presentationParam414.uint32(42).string(presentationParam413.alignment),
      presentationParam413.rotateWithShape !== void 0 &&
        presentationParam414
          .uint32(48)
          .bool(presentationParam413.rotateWithShape),
      presentationParam414
    );
  },
  decode(presentationParam237, presentationParam238) {
    let presentationValue368 =
        presentationParam237 instanceof presentationFr
          ? presentationParam237
          : new presentationFr(presentationParam237),
      presentationValue369 =
        presentationParam238 === void 0
          ? presentationValue368.len
          : presentationValue368.pos + presentationParam238,
      presentationValue370 = presentationHelper39();
    for (; presentationValue368.pos < presentationValue369; ) {
      let presentationValue478 = presentationValue368.uint32();
      switch (presentationValue478 >>> 3) {
        case 1:
          if (presentationValue478 !== 10) break;
          presentationValue370.color = presentationRn.decode(
            presentationValue368,
            presentationValue368.uint32(),
          );
          continue;
        case 2:
          if (presentationValue478 !== 16) break;
          presentationValue370.blurRadius = presentationValue368.int32();
          continue;
        case 3:
          if (presentationValue478 !== 24) break;
          presentationValue370.distance = presentationValue368.int32();
          continue;
        case 4:
          if (presentationValue478 !== 32) break;
          presentationValue370.direction = presentationValue368.int32();
          continue;
        case 5:
          if (presentationValue478 !== 42) break;
          presentationValue370.alignment = presentationValue368.string();
          continue;
        case 6:
          if (presentationValue478 !== 48) break;
          presentationValue370.rotateWithShape = presentationValue368.bool();
          continue;
      }
      if ((presentationValue478 & 7) == 4 || presentationValue478 === 0) break;
      presentationValue368.skip(presentationValue478 & 7);
    }
    return presentationValue370;
  },
  create(presentationParam1172) {
    return presentationValue23.fromPartial(presentationParam1172 ?? {});
  },
  fromPartial(presentationParam607) {
    let presentationValue797 = presentationHelper39();
    return (
      (presentationValue797.color =
        presentationParam607.color !== void 0 &&
        presentationParam607.color !== null
          ? presentationRn.fromPartial(presentationParam607.color)
          : void 0),
      (presentationValue797.blurRadius =
        presentationParam607.blurRadius ?? void 0),
      (presentationValue797.distance = presentationParam607.distance ?? void 0),
      (presentationValue797.direction =
        presentationParam607.direction ?? void 0),
      (presentationValue797.alignment =
        presentationParam607.alignment ?? void 0),
      (presentationValue797.rotateWithShape =
        presentationParam607.rotateWithShape ?? void 0),
      presentationValue797
    );
  },
};
function presentationHelper40() {
  return {
    position: void 0,
    alignment: void 0,
    leader: void 0,
  };
}
var presentationValue24 = {
  encode(presentationParam851, presentationParam852 = new presentationPr()) {
    return (
      presentationParam851.position !== void 0 &&
        presentationParam852.uint32(8).int32(presentationParam851.position),
      presentationParam851.alignment !== void 0 &&
        presentationParam852.uint32(16).int32(presentationParam851.alignment),
      presentationParam851.leader !== void 0 &&
        presentationParam852.uint32(26).string(presentationParam851.leader),
      presentationParam852
    );
  },
  decode(presentationParam487, presentationParam488) {
    let presentationValue651 =
        presentationParam487 instanceof presentationFr
          ? presentationParam487
          : new presentationFr(presentationParam487),
      presentationValue652 =
        presentationParam488 === void 0
          ? presentationValue651.len
          : presentationValue651.pos + presentationParam488,
      presentationValue653 = presentationHelper40();
    for (; presentationValue651.pos < presentationValue652; ) {
      let presentationValue926 = presentationValue651.uint32();
      switch (presentationValue926 >>> 3) {
        case 1:
          if (presentationValue926 !== 8) break;
          presentationValue653.position = presentationValue651.int32();
          continue;
        case 2:
          if (presentationValue926 !== 16) break;
          presentationValue653.alignment = presentationValue651.int32();
          continue;
        case 3:
          if (presentationValue926 !== 26) break;
          presentationValue653.leader = presentationValue651.string();
          continue;
      }
      if ((presentationValue926 & 7) == 4 || presentationValue926 === 0) break;
      presentationValue651.skip(presentationValue926 & 7);
    }
    return presentationValue653;
  },
  create(presentationParam1173) {
    return presentationValue24.fromPartial(presentationParam1173 ?? {});
  },
  fromPartial(presentationParam992) {
    let presentationValue1114 = presentationHelper40();
    return (
      (presentationValue1114.position =
        presentationParam992.position ?? void 0),
      (presentationValue1114.alignment =
        presentationParam992.alignment ?? void 0),
      (presentationValue1114.leader = presentationParam992.leader ?? void 0),
      presentationValue1114
    );
  },
};
function presentationHelper41() {
  return {
    top: void 0,
    right: void 0,
    bottom: void 0,
    left: void 0,
  };
}
var _t = {
  encode(presentationParam621, presentationParam622 = new presentationPr()) {
    return (
      presentationParam621.top !== void 0 &&
        presentationJn
          .encode(
            presentationParam621.top,
            presentationParam622.uint32(10).fork(),
          )
          .join(),
      presentationParam621.right !== void 0 &&
        presentationJn
          .encode(
            presentationParam621.right,
            presentationParam622.uint32(18).fork(),
          )
          .join(),
      presentationParam621.bottom !== void 0 &&
        presentationJn
          .encode(
            presentationParam621.bottom,
            presentationParam622.uint32(26).fork(),
          )
          .join(),
      presentationParam621.left !== void 0 &&
        presentationJn
          .encode(
            presentationParam621.left,
            presentationParam622.uint32(34).fork(),
          )
          .join(),
      presentationParam622
    );
  },
  decode(presentationParam326, presentationParam327) {
    let presentationValue465 =
        presentationParam326 instanceof presentationFr
          ? presentationParam326
          : new presentationFr(presentationParam326),
      presentationValue466 =
        presentationParam327 === void 0
          ? presentationValue465.len
          : presentationValue465.pos + presentationParam327,
      presentationValue467 = presentationHelper41();
    for (; presentationValue465.pos < presentationValue466; ) {
      let presentationValue676 = presentationValue465.uint32();
      switch (presentationValue676 >>> 3) {
        case 1:
          if (presentationValue676 !== 10) break;
          presentationValue467.top = presentationJn.decode(
            presentationValue465,
            presentationValue465.uint32(),
          );
          continue;
        case 2:
          if (presentationValue676 !== 18) break;
          presentationValue467.right = presentationJn.decode(
            presentationValue465,
            presentationValue465.uint32(),
          );
          continue;
        case 3:
          if (presentationValue676 !== 26) break;
          presentationValue467.bottom = presentationJn.decode(
            presentationValue465,
            presentationValue465.uint32(),
          );
          continue;
        case 4:
          if (presentationValue676 !== 34) break;
          presentationValue467.left = presentationJn.decode(
            presentationValue465,
            presentationValue465.uint32(),
          );
          continue;
      }
      if ((presentationValue676 & 7) == 4 || presentationValue676 === 0) break;
      presentationValue465.skip(presentationValue676 & 7);
    }
    return presentationValue467;
  },
  create(presentationParam1174) {
    return _t.fromPartial(presentationParam1174 ?? {});
  },
  fromPartial(presentationParam518) {
    let presentationValue689 = presentationHelper41();
    return (
      (presentationValue689.top =
        presentationParam518.top !== void 0 && presentationParam518.top !== null
          ? presentationJn.fromPartial(presentationParam518.top)
          : void 0),
      (presentationValue689.right =
        presentationParam518.right !== void 0 &&
        presentationParam518.right !== null
          ? presentationJn.fromPartial(presentationParam518.right)
          : void 0),
      (presentationValue689.bottom =
        presentationParam518.bottom !== void 0 &&
        presentationParam518.bottom !== null
          ? presentationJn.fromPartial(presentationParam518.bottom)
          : void 0),
      (presentationValue689.left =
        presentationParam518.left !== void 0 &&
        presentationParam518.left !== null
          ? presentationJn.fromPartial(presentationParam518.left)
          : void 0),
      presentationValue689
    );
  },
};
function presentationHelper42() {
  return {
    bulletCharacter: void 0,
    marginLeft: void 0,
    indent: void 0,
    lineSpacingPercent: void 0,
    lineSpacingPoints: void 0,
    autoNumberType: void 0,
    autoNumberStartAt: void 0,
    outlineLevel: void 0,
    tabStops: [],
    borders: void 0,
    fill: void 0,
    snapToGrid: void 0,
  };
}
var presentationValue25 = {
  encode(presentationParam96, presentationParam97 = new presentationPr()) {
    (presentationParam96.bulletCharacter !== void 0 &&
      presentationParam97
        .uint32(10)
        .string(presentationParam96.bulletCharacter),
      presentationParam96.marginLeft !== void 0 &&
        presentationParam97.uint32(16).int32(presentationParam96.marginLeft),
      presentationParam96.indent !== void 0 &&
        presentationParam97.uint32(24).int32(presentationParam96.indent),
      presentationParam96.lineSpacingPercent !== void 0 &&
        presentationParam97
          .uint32(32)
          .int32(presentationParam96.lineSpacingPercent),
      presentationParam96.lineSpacingPoints !== void 0 &&
        presentationParam97
          .uint32(40)
          .int32(presentationParam96.lineSpacingPoints),
      presentationParam96.autoNumberType !== void 0 &&
        presentationParam97
          .uint32(50)
          .string(presentationParam96.autoNumberType),
      presentationParam96.autoNumberStartAt !== void 0 &&
        presentationParam97
          .uint32(56)
          .int32(presentationParam96.autoNumberStartAt),
      presentationParam96.outlineLevel !== void 0 &&
        presentationParam97.uint32(64).int32(presentationParam96.outlineLevel));
    for (let presentationValue1263 of presentationParam96.tabStops)
      presentationValue24
        .encode(presentationValue1263, presentationParam97.uint32(74).fork())
        .join();
    return (
      presentationParam96.borders !== void 0 &&
        _t
          .encode(
            presentationParam96.borders,
            presentationParam97.uint32(82).fork(),
          )
          .join(),
      presentationParam96.fill !== void 0 &&
        presentationHn
          .encode(
            presentationParam96.fill,
            presentationParam97.uint32(90).fork(),
          )
          .join(),
      presentationParam96.snapToGrid !== void 0 &&
        presentationParam97.uint32(96).bool(presentationParam96.snapToGrid),
      presentationParam97
    );
  },
  decode(presentationParam66, presentationParam67) {
    let presentationValue177 =
        presentationParam66 instanceof presentationFr
          ? presentationParam66
          : new presentationFr(presentationParam66),
      presentationValue178 =
        presentationParam67 === void 0
          ? presentationValue177.len
          : presentationValue177.pos + presentationParam67,
      presentationValue179 = presentationHelper42();
    for (; presentationValue177.pos < presentationValue178; ) {
      let presentationValue201 = presentationValue177.uint32();
      switch (presentationValue201 >>> 3) {
        case 1:
          if (presentationValue201 !== 10) break;
          presentationValue179.bulletCharacter = presentationValue177.string();
          continue;
        case 2:
          if (presentationValue201 !== 16) break;
          presentationValue179.marginLeft = presentationValue177.int32();
          continue;
        case 3:
          if (presentationValue201 !== 24) break;
          presentationValue179.indent = presentationValue177.int32();
          continue;
        case 4:
          if (presentationValue201 !== 32) break;
          presentationValue179.lineSpacingPercent =
            presentationValue177.int32();
          continue;
        case 5:
          if (presentationValue201 !== 40) break;
          presentationValue179.lineSpacingPoints = presentationValue177.int32();
          continue;
        case 6:
          if (presentationValue201 !== 50) break;
          presentationValue179.autoNumberType = presentationValue177.string();
          continue;
        case 7:
          if (presentationValue201 !== 56) break;
          presentationValue179.autoNumberStartAt = presentationValue177.int32();
          continue;
        case 8:
          if (presentationValue201 !== 64) break;
          presentationValue179.outlineLevel = presentationValue177.int32();
          continue;
        case 9:
          if (presentationValue201 !== 74) break;
          presentationValue179.tabStops.push(
            presentationValue24.decode(
              presentationValue177,
              presentationValue177.uint32(),
            ),
          );
          continue;
        case 10:
          if (presentationValue201 !== 82) break;
          presentationValue179.borders = _t.decode(
            presentationValue177,
            presentationValue177.uint32(),
          );
          continue;
        case 11:
          if (presentationValue201 !== 90) break;
          presentationValue179.fill = presentationHn.decode(
            presentationValue177,
            presentationValue177.uint32(),
          );
          continue;
        case 12:
          if (presentationValue201 !== 96) break;
          presentationValue179.snapToGrid = presentationValue177.bool();
          continue;
      }
      if ((presentationValue201 & 7) == 4 || presentationValue201 === 0) break;
      presentationValue177.skip(presentationValue201 & 7);
    }
    return presentationValue179;
  },
  create(presentationParam1337) {
    return presentationValue25.fromPartial(presentationParam1337 ?? {});
  },
  fromPartial(presentationParam168) {
    let presentationValue288 = presentationHelper42();
    return (
      (presentationValue288.bulletCharacter =
        presentationParam168.bulletCharacter ?? void 0),
      (presentationValue288.marginLeft =
        presentationParam168.marginLeft ?? void 0),
      (presentationValue288.indent = presentationParam168.indent ?? void 0),
      (presentationValue288.lineSpacingPercent =
        presentationParam168.lineSpacingPercent ?? void 0),
      (presentationValue288.lineSpacingPoints =
        presentationParam168.lineSpacingPoints ?? void 0),
      (presentationValue288.autoNumberType =
        presentationParam168.autoNumberType ?? void 0),
      (presentationValue288.autoNumberStartAt =
        presentationParam168.autoNumberStartAt ?? void 0),
      (presentationValue288.outlineLevel =
        presentationParam168.outlineLevel ?? void 0),
      (presentationValue288.tabStops =
        presentationParam168.tabStops?.map((presentationParam1386) =>
          presentationValue24.fromPartial(presentationParam1386),
        ) || []),
      (presentationValue288.borders =
        presentationParam168.borders !== void 0 &&
        presentationParam168.borders !== null
          ? _t.fromPartial(presentationParam168.borders)
          : void 0),
      (presentationValue288.fill =
        presentationParam168.fill !== void 0 &&
        presentationParam168.fill !== null
          ? presentationHn.fromPartial(presentationParam168.fill)
          : void 0),
      (presentationValue288.snapToGrid =
        presentationParam168.snapToGrid ?? void 0),
      presentationValue288
    );
  },
};
function presentationHelper43() {
  return {
    id: ``,
    name: ``,
    description: void 0,
    textStyle: void 0,
    paragraphStyle: void 0,
    basedOn: void 0,
    tags: [],
    nextId: void 0,
    spaceBefore: void 0,
    spaceAfter: void 0,
    type: void 0,
  };
}
var presentationSr = {
  encode(presentationParam162, presentationParam163 = new presentationPr()) {
    (presentationParam162.id !== `` &&
      presentationParam163.uint32(10).string(presentationParam162.id),
      presentationParam162.name !== `` &&
        presentationParam163.uint32(18).string(presentationParam162.name),
      presentationParam162.description !== void 0 &&
        presentationParam163
          .uint32(26)
          .string(presentationParam162.description),
      presentationParam162.textStyle !== void 0 &&
        presentationOr
          .encode(
            presentationParam162.textStyle,
            presentationParam163.uint32(34).fork(),
          )
          .join(),
      presentationParam162.paragraphStyle !== void 0 &&
        presentationValue25
          .encode(
            presentationParam162.paragraphStyle,
            presentationParam163.uint32(42).fork(),
          )
          .join(),
      presentationParam162.basedOn !== void 0 &&
        presentationParam163.uint32(50).string(presentationParam162.basedOn));
    for (let presentationValue1331 of presentationParam162.tags)
      presentationParam163.uint32(58).string(presentationValue1331);
    return (
      presentationParam162.nextId !== void 0 &&
        presentationParam163.uint32(66).string(presentationParam162.nextId),
      presentationParam162.spaceBefore !== void 0 &&
        presentationParam163.uint32(72).int32(presentationParam162.spaceBefore),
      presentationParam162.spaceAfter !== void 0 &&
        presentationParam163.uint32(80).int32(presentationParam162.spaceAfter),
      presentationParam162.type !== void 0 &&
        presentationParam163.uint32(88).int32(presentationParam162.type),
      presentationParam163
    );
  },
  decode(presentationParam92, presentationParam93) {
    let presentationValue206 =
        presentationParam92 instanceof presentationFr
          ? presentationParam92
          : new presentationFr(presentationParam92),
      presentationValue207 =
        presentationParam93 === void 0
          ? presentationValue206.len
          : presentationValue206.pos + presentationParam93,
      presentationValue208 = presentationHelper43();
    for (; presentationValue206.pos < presentationValue207; ) {
      let presentationValue261 = presentationValue206.uint32();
      switch (presentationValue261 >>> 3) {
        case 1:
          if (presentationValue261 !== 10) break;
          presentationValue208.id = presentationValue206.string();
          continue;
        case 2:
          if (presentationValue261 !== 18) break;
          presentationValue208.name = presentationValue206.string();
          continue;
        case 3:
          if (presentationValue261 !== 26) break;
          presentationValue208.description = presentationValue206.string();
          continue;
        case 4:
          if (presentationValue261 !== 34) break;
          presentationValue208.textStyle = presentationOr.decode(
            presentationValue206,
            presentationValue206.uint32(),
          );
          continue;
        case 5:
          if (presentationValue261 !== 42) break;
          presentationValue208.paragraphStyle = presentationValue25.decode(
            presentationValue206,
            presentationValue206.uint32(),
          );
          continue;
        case 6:
          if (presentationValue261 !== 50) break;
          presentationValue208.basedOn = presentationValue206.string();
          continue;
        case 7:
          if (presentationValue261 !== 58) break;
          presentationValue208.tags.push(presentationValue206.string());
          continue;
        case 8:
          if (presentationValue261 !== 66) break;
          presentationValue208.nextId = presentationValue206.string();
          continue;
        case 9:
          if (presentationValue261 !== 72) break;
          presentationValue208.spaceBefore = presentationValue206.int32();
          continue;
        case 10:
          if (presentationValue261 !== 80) break;
          presentationValue208.spaceAfter = presentationValue206.int32();
          continue;
        case 11:
          if (presentationValue261 !== 88) break;
          presentationValue208.type = presentationValue206.int32();
          continue;
      }
      if ((presentationValue261 & 7) == 4 || presentationValue261 === 0) break;
      presentationValue206.skip(presentationValue261 & 7);
    }
    return presentationValue208;
  },
  create(presentationParam1175) {
    return presentationSr.fromPartial(presentationParam1175 ?? {});
  },
  fromPartial(presentationParam271) {
    let presentationValue398 = presentationHelper43();
    return (
      (presentationValue398.id = presentationParam271.id ?? ``),
      (presentationValue398.name = presentationParam271.name ?? ``),
      (presentationValue398.description =
        presentationParam271.description ?? void 0),
      (presentationValue398.textStyle =
        presentationParam271.textStyle !== void 0 &&
        presentationParam271.textStyle !== null
          ? presentationOr.fromPartial(presentationParam271.textStyle)
          : void 0),
      (presentationValue398.paragraphStyle =
        presentationParam271.paragraphStyle !== void 0 &&
        presentationParam271.paragraphStyle !== null
          ? presentationValue25.fromPartial(presentationParam271.paragraphStyle)
          : void 0),
      (presentationValue398.basedOn = presentationParam271.basedOn ?? void 0),
      (presentationValue398.tags =
        presentationParam271.tags?.map(
          (presentationParam1462) => presentationParam1462,
        ) || []),
      (presentationValue398.nextId = presentationParam271.nextId ?? void 0),
      (presentationValue398.spaceBefore =
        presentationParam271.spaceBefore ?? void 0),
      (presentationValue398.spaceAfter =
        presentationParam271.spaceAfter ?? void 0),
      (presentationValue398.type = presentationParam271.type ?? void 0),
      presentationValue398
    );
  },
};
function presentationHelper44() {
  return {
    id: ``,
    type: 0,
    author: void 0,
    initials: void 0,
    createdAt: void 0,
  };
}
var presentationNr = {
  encode(presentationParam651, presentationParam652 = new presentationPr()) {
    return (
      presentationParam651.id !== `` &&
        presentationParam652.uint32(10).string(presentationParam651.id),
      presentationParam651.type !== 0 &&
        presentationParam652.uint32(16).int32(presentationParam651.type),
      presentationParam651.author !== void 0 &&
        presentationParam652.uint32(26).string(presentationParam651.author),
      presentationParam651.initials !== void 0 &&
        presentationParam652.uint32(34).string(presentationParam651.initials),
      presentationParam651.createdAt !== void 0 &&
        presentationParam652.uint32(42).string(presentationParam651.createdAt),
      presentationParam652
    );
  },
  decode(presentationParam315, presentationParam316) {
    let presentationValue455 =
        presentationParam315 instanceof presentationFr
          ? presentationParam315
          : new presentationFr(presentationParam315),
      presentationValue456 =
        presentationParam316 === void 0
          ? presentationValue455.len
          : presentationValue455.pos + presentationParam316,
      presentationValue457 = presentationHelper44();
    for (; presentationValue455.pos < presentationValue456; ) {
      let presentationValue661 = presentationValue455.uint32();
      switch (presentationValue661 >>> 3) {
        case 1:
          if (presentationValue661 !== 10) break;
          presentationValue457.id = presentationValue455.string();
          continue;
        case 2:
          if (presentationValue661 !== 16) break;
          presentationValue457.type = presentationValue455.int32();
          continue;
        case 3:
          if (presentationValue661 !== 26) break;
          presentationValue457.author = presentationValue455.string();
          continue;
        case 4:
          if (presentationValue661 !== 34) break;
          presentationValue457.initials = presentationValue455.string();
          continue;
        case 5:
          if (presentationValue661 !== 42) break;
          presentationValue457.createdAt = presentationValue455.string();
          continue;
      }
      if ((presentationValue661 & 7) == 4 || presentationValue661 === 0) break;
      presentationValue455.skip(presentationValue661 & 7);
    }
    return presentationValue457;
  },
  create(presentationParam1176) {
    return presentationNr.fromPartial(presentationParam1176 ?? {});
  },
  fromPartial(presentationParam910) {
    let presentationValue1070 = presentationHelper44();
    return (
      (presentationValue1070.id = presentationParam910.id ?? ``),
      (presentationValue1070.type = presentationParam910.type ?? 0),
      (presentationValue1070.author = presentationParam910.author ?? void 0),
      (presentationValue1070.initials =
        presentationParam910.initials ?? void 0),
      (presentationValue1070.createdAt =
        presentationParam910.createdAt ?? void 0),
      presentationValue1070
    );
  },
};
function presentationHelper45() {
  return {
    id: void 0,
    level: 0,
    textStyle: void 0,
    paragraphStyle: void 0,
    spaceBefore: void 0,
    spaceAfter: void 0,
  };
}
var presentationValue26 = {
  encode(presentationParam409, presentationParam410 = new presentationPr()) {
    return (
      presentationParam409.id !== void 0 &&
        presentationParam410.uint32(10).string(presentationParam409.id),
      presentationParam409.level !== 0 &&
        presentationParam410.uint32(16).int32(presentationParam409.level),
      presentationParam409.textStyle !== void 0 &&
        presentationOr
          .encode(
            presentationParam409.textStyle,
            presentationParam410.uint32(26).fork(),
          )
          .join(),
      presentationParam409.paragraphStyle !== void 0 &&
        presentationValue25
          .encode(
            presentationParam409.paragraphStyle,
            presentationParam410.uint32(34).fork(),
          )
          .join(),
      presentationParam409.spaceBefore !== void 0 &&
        presentationParam410.uint32(40).int32(presentationParam409.spaceBefore),
      presentationParam409.spaceAfter !== void 0 &&
        presentationParam410.uint32(48).int32(presentationParam409.spaceAfter),
      presentationParam410
    );
  },
  decode(presentationParam225, presentationParam226) {
    let presentationValue356 =
        presentationParam225 instanceof presentationFr
          ? presentationParam225
          : new presentationFr(presentationParam225),
      presentationValue357 =
        presentationParam226 === void 0
          ? presentationValue356.len
          : presentationValue356.pos + presentationParam226,
      presentationValue358 = presentationHelper45();
    for (; presentationValue356.pos < presentationValue357; ) {
      let presentationValue471 = presentationValue356.uint32();
      switch (presentationValue471 >>> 3) {
        case 1:
          if (presentationValue471 !== 10) break;
          presentationValue358.id = presentationValue356.string();
          continue;
        case 2:
          if (presentationValue471 !== 16) break;
          presentationValue358.level = presentationValue356.int32();
          continue;
        case 3:
          if (presentationValue471 !== 26) break;
          presentationValue358.textStyle = presentationOr.decode(
            presentationValue356,
            presentationValue356.uint32(),
          );
          continue;
        case 4:
          if (presentationValue471 !== 34) break;
          presentationValue358.paragraphStyle = presentationValue25.decode(
            presentationValue356,
            presentationValue356.uint32(),
          );
          continue;
        case 5:
          if (presentationValue471 !== 40) break;
          presentationValue358.spaceBefore = presentationValue356.int32();
          continue;
        case 6:
          if (presentationValue471 !== 48) break;
          presentationValue358.spaceAfter = presentationValue356.int32();
          continue;
      }
      if ((presentationValue471 & 7) == 4 || presentationValue471 === 0) break;
      presentationValue356.skip(presentationValue471 & 7);
    }
    return presentationValue358;
  },
  create(presentationParam1338) {
    return presentationValue26.fromPartial(presentationParam1338 ?? {});
  },
  fromPartial(presentationParam472) {
    let presentationValue637 = presentationHelper45();
    return (
      (presentationValue637.id = presentationParam472.id ?? void 0),
      (presentationValue637.level = presentationParam472.level ?? 0),
      (presentationValue637.textStyle =
        presentationParam472.textStyle !== void 0 &&
        presentationParam472.textStyle !== null
          ? presentationOr.fromPartial(presentationParam472.textStyle)
          : void 0),
      (presentationValue637.paragraphStyle =
        presentationParam472.paragraphStyle !== void 0 &&
        presentationParam472.paragraphStyle !== null
          ? presentationValue25.fromPartial(presentationParam472.paragraphStyle)
          : void 0),
      (presentationValue637.spaceBefore =
        presentationParam472.spaceBefore ?? void 0),
      (presentationValue637.spaceAfter =
        presentationParam472.spaceAfter ?? void 0),
      presentationValue637
    );
  },
};
function presentationHelper46() {
  return {
    style: 0,
    widthEmu: void 0,
    fill: void 0,
    compound: void 0,
    sketch: void 0,
    cap: void 0,
    join: void 0,
  };
}
var presentationJn = {
  encode(presentationParam389, presentationParam390 = new presentationPr()) {
    return (
      presentationParam389.style !== 0 &&
        presentationParam390.uint32(8).int32(presentationParam389.style),
      presentationParam389.widthEmu !== void 0 &&
        presentationParam390.uint32(16).int32(presentationParam389.widthEmu),
      presentationParam389.fill !== void 0 &&
        presentationHn
          .encode(
            presentationParam389.fill,
            presentationParam390.uint32(26).fork(),
          )
          .join(),
      presentationParam389.compound !== void 0 &&
        presentationParam390.uint32(32).int32(presentationParam389.compound),
      presentationParam389.sketch !== void 0 &&
        presentationValue27
          .encode(
            presentationParam389.sketch,
            presentationParam390.uint32(42).fork(),
          )
          .join(),
      presentationParam389.cap !== void 0 &&
        presentationParam390.uint32(48).int32(presentationParam389.cap),
      presentationParam389.join !== void 0 &&
        presentationParam390.uint32(56).int32(presentationParam389.join),
      presentationParam390
    );
  },
  decode(presentationParam205, presentationParam206) {
    let presentationValue326 =
        presentationParam205 instanceof presentationFr
          ? presentationParam205
          : new presentationFr(presentationParam205),
      presentationValue327 =
        presentationParam206 === void 0
          ? presentationValue326.len
          : presentationValue326.pos + presentationParam206,
      presentationValue328 = presentationHelper46();
    for (; presentationValue326.pos < presentationValue327; ) {
      let presentationValue436 = presentationValue326.uint32();
      switch (presentationValue436 >>> 3) {
        case 1:
          if (presentationValue436 !== 8) break;
          presentationValue328.style = presentationValue326.int32();
          continue;
        case 2:
          if (presentationValue436 !== 16) break;
          presentationValue328.widthEmu = presentationValue326.int32();
          continue;
        case 3:
          if (presentationValue436 !== 26) break;
          presentationValue328.fill = presentationHn.decode(
            presentationValue326,
            presentationValue326.uint32(),
          );
          continue;
        case 4:
          if (presentationValue436 !== 32) break;
          presentationValue328.compound = presentationValue326.int32();
          continue;
        case 5:
          if (presentationValue436 !== 42) break;
          presentationValue328.sketch = presentationValue27.decode(
            presentationValue326,
            presentationValue326.uint32(),
          );
          continue;
        case 6:
          if (presentationValue436 !== 48) break;
          presentationValue328.cap = presentationValue326.int32();
          continue;
        case 7:
          if (presentationValue436 !== 56) break;
          presentationValue328.join = presentationValue326.int32();
          continue;
      }
      if ((presentationValue436 & 7) == 4 || presentationValue436 === 0) break;
      presentationValue326.skip(presentationValue436 & 7);
    }
    return presentationValue328;
  },
  create(presentationParam1339) {
    return presentationJn.fromPartial(presentationParam1339 ?? {});
  },
  fromPartial(presentationParam536) {
    let presentationValue704 = presentationHelper46();
    return (
      (presentationValue704.style = presentationParam536.style ?? 0),
      (presentationValue704.widthEmu = presentationParam536.widthEmu ?? void 0),
      (presentationValue704.fill =
        presentationParam536.fill !== void 0 &&
        presentationParam536.fill !== null
          ? presentationHn.fromPartial(presentationParam536.fill)
          : void 0),
      (presentationValue704.compound = presentationParam536.compound ?? void 0),
      (presentationValue704.sketch =
        presentationParam536.sketch !== void 0 &&
        presentationParam536.sketch !== null
          ? presentationValue27.fromPartial(presentationParam536.sketch)
          : void 0),
      (presentationValue704.cap = presentationParam536.cap ?? void 0),
      (presentationValue704.join = presentationParam536.join ?? void 0),
      presentationValue704
    );
  },
};
function presentationHelper47() {
  return {
    type: 0,
    presetGeometry: ``,
    seed: void 0,
  };
}
var presentationValue27 = {
  encode(presentationParam875, presentationParam876 = new presentationPr()) {
    return (
      presentationParam875.type !== 0 &&
        presentationParam876.uint32(8).int32(presentationParam875.type),
      presentationParam875.presetGeometry !== `` &&
        presentationParam876
          .uint32(18)
          .string(presentationParam875.presetGeometry),
      presentationParam875.seed !== void 0 &&
        presentationParam876.uint32(24).uint32(presentationParam875.seed),
      presentationParam876
    );
  },
  decode(presentationParam489, presentationParam490) {
    let presentationValue654 =
        presentationParam489 instanceof presentationFr
          ? presentationParam489
          : new presentationFr(presentationParam489),
      presentationValue655 =
        presentationParam490 === void 0
          ? presentationValue654.len
          : presentationValue654.pos + presentationParam490,
      presentationValue656 = presentationHelper47();
    for (; presentationValue654.pos < presentationValue655; ) {
      let presentationValue927 = presentationValue654.uint32();
      switch (presentationValue927 >>> 3) {
        case 1:
          if (presentationValue927 !== 8) break;
          presentationValue656.type = presentationValue654.int32();
          continue;
        case 2:
          if (presentationValue927 !== 18) break;
          presentationValue656.presetGeometry = presentationValue654.string();
          continue;
        case 3:
          if (presentationValue927 !== 24) break;
          presentationValue656.seed = presentationValue654.uint32();
          continue;
      }
      if ((presentationValue927 & 7) == 4 || presentationValue927 === 0) break;
      presentationValue654.skip(presentationValue927 & 7);
    }
    return presentationValue656;
  },
  create(presentationParam1177) {
    return presentationValue27.fromPartial(presentationParam1177 ?? {});
  },
  fromPartial(presentationParam1009) {
    let presentationValue1130 = presentationHelper47();
    return (
      (presentationValue1130.type = presentationParam1009.type ?? 0),
      (presentationValue1130.presetGeometry =
        presentationParam1009.presetGeometry ?? ``),
      (presentationValue1130.seed = presentationParam1009.seed ?? void 0),
      presentationValue1130
    );
  },
};
function presentationHelper48() {
  return {
    l: void 0,
    t: void 0,
    r: void 0,
    b: void 0,
  };
}
var presentationValue28 = {
  encode(presentationParam861, presentationParam862 = new presentationPr()) {
    return (
      presentationParam861.l !== void 0 &&
        presentationParam862.uint32(8).int32(presentationParam861.l),
      presentationParam861.t !== void 0 &&
        presentationParam862.uint32(16).int32(presentationParam861.t),
      presentationParam861.r !== void 0 &&
        presentationParam862.uint32(24).int32(presentationParam861.r),
      presentationParam861.b !== void 0 &&
        presentationParam862.uint32(32).int32(presentationParam861.b),
      presentationParam862
    );
  },
  decode(presentationParam447, presentationParam448) {
    let presentationValue607 =
        presentationParam447 instanceof presentationFr
          ? presentationParam447
          : new presentationFr(presentationParam447),
      presentationValue608 =
        presentationParam448 === void 0
          ? presentationValue607.len
          : presentationValue607.pos + presentationParam448,
      presentationValue609 = presentationHelper48();
    for (; presentationValue607.pos < presentationValue608; ) {
      let presentationValue874 = presentationValue607.uint32();
      switch (presentationValue874 >>> 3) {
        case 1:
          if (presentationValue874 !== 8) break;
          presentationValue609.l = presentationValue607.int32();
          continue;
        case 2:
          if (presentationValue874 !== 16) break;
          presentationValue609.t = presentationValue607.int32();
          continue;
        case 3:
          if (presentationValue874 !== 24) break;
          presentationValue609.r = presentationValue607.int32();
          continue;
        case 4:
          if (presentationValue874 !== 32) break;
          presentationValue609.b = presentationValue607.int32();
          continue;
      }
      if ((presentationValue874 & 7) == 4 || presentationValue874 === 0) break;
      presentationValue607.skip(presentationValue874 & 7);
    }
    return presentationValue609;
  },
  create(presentationParam1340) {
    return presentationValue28.fromPartial(presentationParam1340 ?? {});
  },
  fromPartial(presentationParam1035) {
    let presentationValue1155 = presentationHelper48();
    return (
      (presentationValue1155.l = presentationParam1035.l ?? void 0),
      (presentationValue1155.t = presentationParam1035.t ?? void 0),
      (presentationValue1155.r = presentationParam1035.r ?? void 0),
      (presentationValue1155.b = presentationParam1035.b ?? void 0),
      presentationValue1155
    );
  },
};
function presentationHelper49() {
  return {
    contentType: ``,
    data: new Uint8Array(),
    id: ``,
    prompt: void 0,
    uri: void 0,
  };
}
var presentationKn = {
  encode(presentationParam657, presentationParam658 = new presentationPr()) {
    return (
      presentationParam657.contentType !== `` &&
        presentationParam658
          .uint32(10)
          .string(presentationParam657.contentType),
      presentationParam657.data.length !== 0 &&
        presentationParam658.uint32(18).bytes(presentationParam657.data),
      presentationParam657.id !== `` &&
        presentationParam658.uint32(26).string(presentationParam657.id),
      presentationParam657.prompt !== void 0 &&
        presentationParam658.uint32(34).string(presentationParam657.prompt),
      presentationParam657.uri !== void 0 &&
        presentationParam658.uint32(42).string(presentationParam657.uri),
      presentationParam658
    );
  },
  decode(presentationParam319, presentationParam320) {
    let presentationValue461 =
        presentationParam319 instanceof presentationFr
          ? presentationParam319
          : new presentationFr(presentationParam319),
      presentationValue462 =
        presentationParam320 === void 0
          ? presentationValue461.len
          : presentationValue461.pos + presentationParam320,
      presentationValue463 = presentationHelper49();
    for (; presentationValue461.pos < presentationValue462; ) {
      let presentationValue669 = presentationValue461.uint32();
      switch (presentationValue669 >>> 3) {
        case 1:
          if (presentationValue669 !== 10) break;
          presentationValue463.contentType = presentationValue461.string();
          continue;
        case 2:
          if (presentationValue669 !== 18) break;
          presentationValue463.data = presentationValue461.bytes();
          continue;
        case 3:
          if (presentationValue669 !== 26) break;
          presentationValue463.id = presentationValue461.string();
          continue;
        case 4:
          if (presentationValue669 !== 34) break;
          presentationValue463.prompt = presentationValue461.string();
          continue;
        case 5:
          if (presentationValue669 !== 42) break;
          presentationValue463.uri = presentationValue461.string();
          continue;
      }
      if ((presentationValue669 & 7) == 4 || presentationValue669 === 0) break;
      presentationValue461.skip(presentationValue669 & 7);
    }
    return presentationValue463;
  },
  create(presentationParam1178) {
    return presentationKn.fromPartial(presentationParam1178 ?? {});
  },
  fromPartial(presentationParam898) {
    let presentationValue1064 = presentationHelper49();
    return (
      (presentationValue1064.contentType =
        presentationParam898.contentType ?? ``),
      (presentationValue1064.data =
        presentationParam898.data ?? new Uint8Array()),
      (presentationValue1064.id = presentationParam898.id ?? ``),
      (presentationValue1064.prompt = presentationParam898.prompt ?? void 0),
      (presentationValue1064.uri = presentationParam898.uri ?? void 0),
      presentationValue1064
    );
  },
};
function presentationHelper50() {
  return {
    id: ``,
    tetherId: ``,
    uri: void 0,
    title: void 0,
    type: 0,
    sourceType: void 0,
    targetId: ``,
    contentLineRange: void 0,
    contentId: void 0,
  };
}
var presentationBn = {
  encode(presentationParam256, presentationParam257 = new presentationPr()) {
    return (
      presentationParam256.id !== `` &&
        presentationParam257.uint32(10).string(presentationParam256.id),
      presentationParam256.tetherId !== `` &&
        presentationParam257.uint32(18).string(presentationParam256.tetherId),
      presentationParam256.uri !== void 0 &&
        presentationParam257.uint32(26).string(presentationParam256.uri),
      presentationParam256.title !== void 0 &&
        presentationParam257.uint32(34).string(presentationParam256.title),
      presentationParam256.type !== 0 &&
        presentationParam257.uint32(40).int32(presentationParam256.type),
      presentationParam256.sourceType !== void 0 &&
        presentationParam257.uint32(48).int32(presentationParam256.sourceType),
      presentationParam256.targetId !== `` &&
        presentationParam257.uint32(58).string(presentationParam256.targetId),
      presentationParam256.contentLineRange !== void 0 &&
        presentationValue29
          .encode(
            presentationParam256.contentLineRange,
            presentationParam257.uint32(66).fork(),
          )
          .join(),
      presentationParam256.contentId !== void 0 &&
        presentationParam257.uint32(74).string(presentationParam256.contentId),
      presentationParam257
    );
  },
  decode(presentationParam146, presentationParam147) {
    let presentationValue271 =
        presentationParam146 instanceof presentationFr
          ? presentationParam146
          : new presentationFr(presentationParam146),
      presentationValue272 =
        presentationParam147 === void 0
          ? presentationValue271.len
          : presentationValue271.pos + presentationParam147,
      presentationValue273 = presentationHelper50();
    for (; presentationValue271.pos < presentationValue272; ) {
      let presentationValue316 = presentationValue271.uint32();
      switch (presentationValue316 >>> 3) {
        case 1:
          if (presentationValue316 !== 10) break;
          presentationValue273.id = presentationValue271.string();
          continue;
        case 2:
          if (presentationValue316 !== 18) break;
          presentationValue273.tetherId = presentationValue271.string();
          continue;
        case 3:
          if (presentationValue316 !== 26) break;
          presentationValue273.uri = presentationValue271.string();
          continue;
        case 4:
          if (presentationValue316 !== 34) break;
          presentationValue273.title = presentationValue271.string();
          continue;
        case 5:
          if (presentationValue316 !== 40) break;
          presentationValue273.type = presentationValue271.int32();
          continue;
        case 6:
          if (presentationValue316 !== 48) break;
          presentationValue273.sourceType = presentationValue271.int32();
          continue;
        case 7:
          if (presentationValue316 !== 58) break;
          presentationValue273.targetId = presentationValue271.string();
          continue;
        case 8:
          if (presentationValue316 !== 66) break;
          presentationValue273.contentLineRange = presentationValue29.decode(
            presentationValue271,
            presentationValue271.uint32(),
          );
          continue;
        case 9:
          if (presentationValue316 !== 74) break;
          presentationValue273.contentId = presentationValue271.string();
          continue;
      }
      if ((presentationValue316 & 7) == 4 || presentationValue316 === 0) break;
      presentationValue271.skip(presentationValue316 & 7);
    }
    return presentationValue273;
  },
  create(presentationParam1179) {
    return presentationBn.fromPartial(presentationParam1179 ?? {});
  },
  fromPartial(presentationParam453) {
    let presentationValue615 = presentationHelper50();
    return (
      (presentationValue615.id = presentationParam453.id ?? ``),
      (presentationValue615.tetherId = presentationParam453.tetherId ?? ``),
      (presentationValue615.uri = presentationParam453.uri ?? void 0),
      (presentationValue615.title = presentationParam453.title ?? void 0),
      (presentationValue615.type = presentationParam453.type ?? 0),
      (presentationValue615.sourceType =
        presentationParam453.sourceType ?? void 0),
      (presentationValue615.targetId = presentationParam453.targetId ?? ``),
      (presentationValue615.contentLineRange =
        presentationParam453.contentLineRange !== void 0 &&
        presentationParam453.contentLineRange !== null
          ? presentationValue29.fromPartial(
              presentationParam453.contentLineRange,
            )
          : void 0),
      (presentationValue615.contentId =
        presentationParam453.contentId ?? void 0),
      presentationValue615
    );
  },
};
function presentationHelper51() {
  return {
    startLineNum: 0,
    endLineNum: void 0,
  };
}
var presentationValue29 = {
  encode(presentationParam939, presentationParam940 = new presentationPr()) {
    return (
      presentationParam939.startLineNum !== 0 &&
        presentationParam940
          .uint32(8)
          .uint64(presentationParam939.startLineNum),
      presentationParam939.endLineNum !== void 0 &&
        presentationParam940.uint32(16).uint64(presentationParam939.endLineNum),
      presentationParam940
    );
  },
  decode(presentationParam560, presentationParam561) {
    let presentationValue738 =
        presentationParam560 instanceof presentationFr
          ? presentationParam560
          : new presentationFr(presentationParam560),
      presentationValue739 =
        presentationParam561 === void 0
          ? presentationValue738.len
          : presentationValue738.pos + presentationParam561,
      presentationValue740 = presentationHelper51();
    for (; presentationValue738.pos < presentationValue739; ) {
      let presentationValue1008 = presentationValue738.uint32();
      switch (presentationValue1008 >>> 3) {
        case 1:
          if (presentationValue1008 !== 8) break;
          presentationValue740.startLineNum = presentationHelper66(
            presentationValue738.uint64(),
          );
          continue;
        case 2:
          if (presentationValue1008 !== 16) break;
          presentationValue740.endLineNum = presentationHelper66(
            presentationValue738.uint64(),
          );
          continue;
      }
      if ((presentationValue1008 & 7) == 4 || presentationValue1008 === 0)
        break;
      presentationValue738.skip(presentationValue1008 & 7);
    }
    return presentationValue740;
  },
  create(presentationParam1180) {
    return presentationValue29.fromPartial(presentationParam1180 ?? {});
  },
  fromPartial(presentationParam1029) {
    let presentationValue1149 = presentationHelper51();
    return (
      (presentationValue1149.startLineNum =
        presentationParam1029.startLineNum ?? 0),
      (presentationValue1149.endLineNum =
        presentationParam1029.endLineNum ?? void 0),
      presentationValue1149
    );
  },
};
function presentationHelper52() {
  return {
    id: ``,
    displayName: ``,
    initials: void 0,
    email: void 0,
    avatarUrl: void 0,
    userId: void 0,
    providerId: void 0,
  };
}
var presentationEr = {
  encode(presentationParam395, presentationParam396 = new presentationPr()) {
    return (
      presentationParam395.id !== `` &&
        presentationParam396.uint32(10).string(presentationParam395.id),
      presentationParam395.displayName !== `` &&
        presentationParam396
          .uint32(18)
          .string(presentationParam395.displayName),
      presentationParam395.initials !== void 0 &&
        presentationParam396.uint32(26).string(presentationParam395.initials),
      presentationParam395.email !== void 0 &&
        presentationParam396.uint32(34).string(presentationParam395.email),
      presentationParam395.avatarUrl !== void 0 &&
        presentationParam396.uint32(42).string(presentationParam395.avatarUrl),
      presentationParam395.userId !== void 0 &&
        presentationParam396.uint32(50).string(presentationParam395.userId),
      presentationParam395.providerId !== void 0 &&
        presentationParam396.uint32(58).string(presentationParam395.providerId),
      presentationParam396
    );
  },
  decode(presentationParam210, presentationParam211) {
    let presentationValue334 =
        presentationParam210 instanceof presentationFr
          ? presentationParam210
          : new presentationFr(presentationParam210),
      presentationValue335 =
        presentationParam211 === void 0
          ? presentationValue334.len
          : presentationValue334.pos + presentationParam211,
      presentationValue336 = presentationHelper52();
    for (; presentationValue334.pos < presentationValue335; ) {
      let presentationValue440 = presentationValue334.uint32();
      switch (presentationValue440 >>> 3) {
        case 1:
          if (presentationValue440 !== 10) break;
          presentationValue336.id = presentationValue334.string();
          continue;
        case 2:
          if (presentationValue440 !== 18) break;
          presentationValue336.displayName = presentationValue334.string();
          continue;
        case 3:
          if (presentationValue440 !== 26) break;
          presentationValue336.initials = presentationValue334.string();
          continue;
        case 4:
          if (presentationValue440 !== 34) break;
          presentationValue336.email = presentationValue334.string();
          continue;
        case 5:
          if (presentationValue440 !== 42) break;
          presentationValue336.avatarUrl = presentationValue334.string();
          continue;
        case 6:
          if (presentationValue440 !== 50) break;
          presentationValue336.userId = presentationValue334.string();
          continue;
        case 7:
          if (presentationValue440 !== 58) break;
          presentationValue336.providerId = presentationValue334.string();
          continue;
      }
      if ((presentationValue440 & 7) == 4 || presentationValue440 === 0) break;
      presentationValue334.skip(presentationValue440 & 7);
    }
    return presentationValue336;
  },
  create(presentationParam1181) {
    return presentationEr.fromPartial(presentationParam1181 ?? {});
  },
  fromPartial(presentationParam753) {
    let presentationValue928 = presentationHelper52();
    return (
      (presentationValue928.id = presentationParam753.id ?? ``),
      (presentationValue928.displayName =
        presentationParam753.displayName ?? ``),
      (presentationValue928.initials = presentationParam753.initials ?? void 0),
      (presentationValue928.email = presentationParam753.email ?? void 0),
      (presentationValue928.avatarUrl =
        presentationParam753.avatarUrl ?? void 0),
      (presentationValue928.userId = presentationParam753.userId ?? void 0),
      (presentationValue928.providerId =
        presentationParam753.providerId ?? void 0),
      presentationValue928
    );
  },
};
function presentationHelper53() {
  return {
    plainText: ``,
  };
}
var presentationValue30 = {
  encode(presentationParam1098, presentationParam1099 = new presentationPr()) {
    return (
      presentationParam1098.plainText !== `` &&
        presentationParam1099
          .uint32(10)
          .string(presentationParam1098.plainText),
      presentationParam1099
    );
  },
  decode(presentationParam766, presentationParam767) {
    let presentationValue941 =
        presentationParam766 instanceof presentationFr
          ? presentationParam766
          : new presentationFr(presentationParam766),
      presentationValue942 =
        presentationParam767 === void 0
          ? presentationValue941.len
          : presentationValue941.pos + presentationParam767,
      presentationValue943 = presentationHelper53();
    for (; presentationValue941.pos < presentationValue942; ) {
      let presentationValue1111 = presentationValue941.uint32();
      switch (presentationValue1111 >>> 3) {
        case 1:
          if (presentationValue1111 !== 10) break;
          presentationValue943.plainText = presentationValue941.string();
          continue;
      }
      if ((presentationValue1111 & 7) == 4 || presentationValue1111 === 0)
        break;
      presentationValue941.skip(presentationValue1111 & 7);
    }
    return presentationValue943;
  },
  create(presentationParam1182) {
    return presentationValue30.fromPartial(presentationParam1182 ?? {});
  },
  fromPartial(presentationParam1132) {
    let presentationValue1270 = presentationHelper53();
    return (
      (presentationValue1270.plainText = presentationParam1132.plainText ?? ``),
      presentationValue1270
    );
  },
};
function presentationHelper54() {
  return {
    sheetName: ``,
    sheetId: void 0,
    address: ``,
  };
}
var presentationValue31 = {
  encode(presentationParam864, presentationParam865 = new presentationPr()) {
    return (
      presentationParam864.sheetName !== `` &&
        presentationParam865.uint32(10).string(presentationParam864.sheetName),
      presentationParam864.sheetId !== void 0 &&
        presentationParam865.uint32(18).string(presentationParam864.sheetId),
      presentationParam864.address !== `` &&
        presentationParam865.uint32(26).string(presentationParam864.address),
      presentationParam865
    );
  },
  decode(presentationParam480, presentationParam481) {
    let presentationValue641 =
        presentationParam480 instanceof presentationFr
          ? presentationParam480
          : new presentationFr(presentationParam480),
      presentationValue642 =
        presentationParam481 === void 0
          ? presentationValue641.len
          : presentationValue641.pos + presentationParam481,
      presentationValue643 = presentationHelper54();
    for (; presentationValue641.pos < presentationValue642; ) {
      let presentationValue919 = presentationValue641.uint32();
      switch (presentationValue919 >>> 3) {
        case 1:
          if (presentationValue919 !== 10) break;
          presentationValue643.sheetName = presentationValue641.string();
          continue;
        case 2:
          if (presentationValue919 !== 18) break;
          presentationValue643.sheetId = presentationValue641.string();
          continue;
        case 3:
          if (presentationValue919 !== 26) break;
          presentationValue643.address = presentationValue641.string();
          continue;
      }
      if ((presentationValue919 & 7) == 4 || presentationValue919 === 0) break;
      presentationValue641.skip(presentationValue919 & 7);
    }
    return presentationValue643;
  },
  create(presentationParam1183) {
    return presentationValue31.fromPartial(presentationParam1183 ?? {});
  },
  fromPartial(presentationParam1002) {
    let presentationValue1128 = presentationHelper54();
    return (
      (presentationValue1128.sheetName = presentationParam1002.sheetName ?? ``),
      (presentationValue1128.sheetId = presentationParam1002.sheetId ?? void 0),
      (presentationValue1128.address = presentationParam1002.address ?? ``),
      presentationValue1128
    );
  },
};
function presentationHelper55() {
  return {
    sheetName: ``,
    sheetId: void 0,
    startAddress: ``,
    endAddress: ``,
  };
}
var presentationValue32 = {
  encode(presentationParam699, presentationParam700 = new presentationPr()) {
    return (
      presentationParam699.sheetName !== `` &&
        presentationParam700.uint32(10).string(presentationParam699.sheetName),
      presentationParam699.sheetId !== void 0 &&
        presentationParam700.uint32(18).string(presentationParam699.sheetId),
      presentationParam699.startAddress !== `` &&
        presentationParam700
          .uint32(26)
          .string(presentationParam699.startAddress),
      presentationParam699.endAddress !== `` &&
        presentationParam700.uint32(34).string(presentationParam699.endAddress),
      presentationParam700
    );
  },
  decode(presentationParam369, presentationParam370) {
    let presentationValue514 =
        presentationParam369 instanceof presentationFr
          ? presentationParam369
          : new presentationFr(presentationParam369),
      presentationValue515 =
        presentationParam370 === void 0
          ? presentationValue514.len
          : presentationValue514.pos + presentationParam370,
      presentationValue516 = presentationHelper55();
    for (; presentationValue514.pos < presentationValue515; ) {
      let presentationValue729 = presentationValue514.uint32();
      switch (presentationValue729 >>> 3) {
        case 1:
          if (presentationValue729 !== 10) break;
          presentationValue516.sheetName = presentationValue514.string();
          continue;
        case 2:
          if (presentationValue729 !== 18) break;
          presentationValue516.sheetId = presentationValue514.string();
          continue;
        case 3:
          if (presentationValue729 !== 26) break;
          presentationValue516.startAddress = presentationValue514.string();
          continue;
        case 4:
          if (presentationValue729 !== 34) break;
          presentationValue516.endAddress = presentationValue514.string();
          continue;
      }
      if ((presentationValue729 & 7) == 4 || presentationValue729 === 0) break;
      presentationValue514.skip(presentationValue729 & 7);
    }
    return presentationValue516;
  },
  create(presentationParam1184) {
    return presentationValue32.fromPartial(presentationParam1184 ?? {});
  },
  fromPartial(presentationParam908) {
    let presentationValue1068 = presentationHelper55();
    return (
      (presentationValue1068.sheetName = presentationParam908.sheetName ?? ``),
      (presentationValue1068.sheetId = presentationParam908.sheetId ?? void 0),
      (presentationValue1068.startAddress =
        presentationParam908.startAddress ?? ``),
      (presentationValue1068.endAddress =
        presentationParam908.endAddress ?? ``),
      presentationValue1068
    );
  },
};
function presentationHelper56() {
  return {
    slideId: ``,
  };
}
var presentationValue33 = {
  encode(presentationParam1108, presentationParam1109 = new presentationPr()) {
    return (
      presentationParam1108.slideId !== `` &&
        presentationParam1109.uint32(10).string(presentationParam1108.slideId),
      presentationParam1109
    );
  },
  decode(presentationParam771, presentationParam772) {
    let presentationValue948 =
        presentationParam771 instanceof presentationFr
          ? presentationParam771
          : new presentationFr(presentationParam771),
      presentationValue949 =
        presentationParam772 === void 0
          ? presentationValue948.len
          : presentationValue948.pos + presentationParam772,
      presentationValue950 = presentationHelper56();
    for (; presentationValue948.pos < presentationValue949; ) {
      let presentationValue1116 = presentationValue948.uint32();
      switch (presentationValue1116 >>> 3) {
        case 1:
          if (presentationValue1116 !== 10) break;
          presentationValue950.slideId = presentationValue948.string();
          continue;
      }
      if ((presentationValue1116 & 7) == 4 || presentationValue1116 === 0)
        break;
      presentationValue948.skip(presentationValue1116 & 7);
    }
    return presentationValue950;
  },
  create(presentationParam1185) {
    return presentationValue33.fromPartial(presentationParam1185 ?? {});
  },
  fromPartial(presentationParam1138) {
    let presentationValue1305 = presentationHelper56();
    return (
      (presentationValue1305.slideId = presentationParam1138.slideId ?? ``),
      presentationValue1305
    );
  },
};
function presentationHelper57() {
  return {
    slideId: ``,
    elementId: ``,
  };
}
var presentationValue34 = {
  encode(presentationParam987, presentationParam988 = new presentationPr()) {
    return (
      presentationParam987.slideId !== `` &&
        presentationParam988.uint32(10).string(presentationParam987.slideId),
      presentationParam987.elementId !== `` &&
        presentationParam988.uint32(18).string(presentationParam987.elementId),
      presentationParam988
    );
  },
  decode(presentationParam608, presentationParam609) {
    let presentationValue798 =
        presentationParam608 instanceof presentationFr
          ? presentationParam608
          : new presentationFr(presentationParam608),
      presentationValue799 =
        presentationParam609 === void 0
          ? presentationValue798.len
          : presentationValue798.pos + presentationParam609,
      presentationValue800 = presentationHelper57();
    for (; presentationValue798.pos < presentationValue799; ) {
      let presentationValue1032 = presentationValue798.uint32();
      switch (presentationValue1032 >>> 3) {
        case 1:
          if (presentationValue1032 !== 10) break;
          presentationValue800.slideId = presentationValue798.string();
          continue;
        case 2:
          if (presentationValue1032 !== 18) break;
          presentationValue800.elementId = presentationValue798.string();
          continue;
      }
      if ((presentationValue1032 & 7) == 4 || presentationValue1032 === 0)
        break;
      presentationValue798.skip(presentationValue1032 & 7);
    }
    return presentationValue800;
  },
  create(presentationParam1186) {
    return presentationValue34.fromPartial(presentationParam1186 ?? {});
  },
  fromPartial(presentationParam1075) {
    let presentationValue1175 = presentationHelper57();
    return (
      (presentationValue1175.slideId = presentationParam1075.slideId ?? ``),
      (presentationValue1175.elementId = presentationParam1075.elementId ?? ``),
      presentationValue1175
    );
  },
};
function presentationHelper58() {
  return {
    contextLength: void 0,
    contextHash: void 0,
  };
}
var presentationValue35 = {
  encode(presentationParam921, presentationParam922 = new presentationPr()) {
    return (
      presentationParam921.contextLength !== void 0 &&
        presentationParam922
          .uint32(8)
          .uint32(presentationParam921.contextLength),
      presentationParam921.contextHash !== void 0 &&
        presentationParam922
          .uint32(16)
          .uint32(presentationParam921.contextHash),
      presentationParam922
    );
  },
  decode(presentationParam583, presentationParam584) {
    let presentationValue768 =
        presentationParam583 instanceof presentationFr
          ? presentationParam583
          : new presentationFr(presentationParam583),
      presentationValue769 =
        presentationParam584 === void 0
          ? presentationValue768.len
          : presentationValue768.pos + presentationParam584,
      presentationValue770 = presentationHelper58();
    for (; presentationValue768.pos < presentationValue769; ) {
      let presentationValue1017 = presentationValue768.uint32();
      switch (presentationValue1017 >>> 3) {
        case 1:
          if (presentationValue1017 !== 8) break;
          presentationValue770.contextLength = presentationValue768.uint32();
          continue;
        case 2:
          if (presentationValue1017 !== 16) break;
          presentationValue770.contextHash = presentationValue768.uint32();
          continue;
      }
      if ((presentationValue1017 & 7) == 4 || presentationValue1017 === 0)
        break;
      presentationValue768.skip(presentationValue1017 & 7);
    }
    return presentationValue770;
  },
  create(presentationParam1187) {
    return presentationValue35.fromPartial(presentationParam1187 ?? {});
  },
  fromPartial(presentationParam1010) {
    let presentationValue1131 = presentationHelper58();
    return (
      (presentationValue1131.contextLength =
        presentationParam1010.contextLength ?? void 0),
      (presentationValue1131.contextHash =
        presentationParam1010.contextHash ?? void 0),
      presentationValue1131
    );
  },
};
function presentationHelper59() {
  return {
    slideId: ``,
    elementId: ``,
    startCp: 0,
    length: 0,
    context: void 0,
  };
}
var presentationValue36 = {
  encode(presentationParam594, presentationParam595 = new presentationPr()) {
    return (
      presentationParam594.slideId !== `` &&
        presentationParam595.uint32(10).string(presentationParam594.slideId),
      presentationParam594.elementId !== `` &&
        presentationParam595.uint32(18).string(presentationParam594.elementId),
      presentationParam594.startCp !== 0 &&
        presentationParam595.uint32(24).uint32(presentationParam594.startCp),
      presentationParam594.length !== 0 &&
        presentationParam595.uint32(32).uint32(presentationParam594.length),
      presentationParam594.context !== void 0 &&
        presentationValue35
          .encode(
            presentationParam594.context,
            presentationParam595.uint32(42).fork(),
          )
          .join(),
      presentationParam595
    );
  },
  decode(presentationParam292, presentationParam293) {
    let presentationValue432 =
        presentationParam292 instanceof presentationFr
          ? presentationParam292
          : new presentationFr(presentationParam292),
      presentationValue433 =
        presentationParam293 === void 0
          ? presentationValue432.len
          : presentationValue432.pos + presentationParam293,
      presentationValue434 = presentationHelper59();
    for (; presentationValue432.pos < presentationValue433; ) {
      let presentationValue610 = presentationValue432.uint32();
      switch (presentationValue610 >>> 3) {
        case 1:
          if (presentationValue610 !== 10) break;
          presentationValue434.slideId = presentationValue432.string();
          continue;
        case 2:
          if (presentationValue610 !== 18) break;
          presentationValue434.elementId = presentationValue432.string();
          continue;
        case 3:
          if (presentationValue610 !== 24) break;
          presentationValue434.startCp = presentationValue432.uint32();
          continue;
        case 4:
          if (presentationValue610 !== 32) break;
          presentationValue434.length = presentationValue432.uint32();
          continue;
        case 5:
          if (presentationValue610 !== 42) break;
          presentationValue434.context = presentationValue35.decode(
            presentationValue432,
            presentationValue432.uint32(),
          );
          continue;
      }
      if ((presentationValue610 & 7) == 4 || presentationValue610 === 0) break;
      presentationValue432.skip(presentationValue610 & 7);
    }
    return presentationValue434;
  },
  create(presentationParam1188) {
    return presentationValue36.fromPartial(presentationParam1188 ?? {});
  },
  fromPartial(presentationParam806) {
    let presentationValue985 = presentationHelper59();
    return (
      (presentationValue985.slideId = presentationParam806.slideId ?? ``),
      (presentationValue985.elementId = presentationParam806.elementId ?? ``),
      (presentationValue985.startCp = presentationParam806.startCp ?? 0),
      (presentationValue985.length = presentationParam806.length ?? 0),
      (presentationValue985.context =
        presentationParam806.context !== void 0 &&
        presentationParam806.context !== null
          ? presentationValue35.fromPartial(presentationParam806.context)
          : void 0),
      presentationValue985
    );
  },
};
function presentationHelper60() {
  return {
    spreadsheetCell: void 0,
    spreadsheetRange: void 0,
    slide: void 0,
    element: void 0,
    textRange: void 0,
  };
}
var presentationValue37 = {
  encode(presentationParam348, presentationParam349 = new presentationPr()) {
    return (
      presentationParam348.spreadsheetCell !== void 0 &&
        presentationValue31
          .encode(
            presentationParam348.spreadsheetCell,
            presentationParam349.uint32(10).fork(),
          )
          .join(),
      presentationParam348.spreadsheetRange !== void 0 &&
        presentationValue32
          .encode(
            presentationParam348.spreadsheetRange,
            presentationParam349.uint32(18).fork(),
          )
          .join(),
      presentationParam348.slide !== void 0 &&
        presentationValue33
          .encode(
            presentationParam348.slide,
            presentationParam349.uint32(26).fork(),
          )
          .join(),
      presentationParam348.element !== void 0 &&
        presentationValue34
          .encode(
            presentationParam348.element,
            presentationParam349.uint32(34).fork(),
          )
          .join(),
      presentationParam348.textRange !== void 0 &&
        presentationValue36
          .encode(
            presentationParam348.textRange,
            presentationParam349.uint32(42).fork(),
          )
          .join(),
      presentationParam349
    );
  },
  decode(presentationParam228, presentationParam229) {
    let presentationValue360 =
        presentationParam228 instanceof presentationFr
          ? presentationParam228
          : new presentationFr(presentationParam228),
      presentationValue361 =
        presentationParam229 === void 0
          ? presentationValue360.len
          : presentationValue360.pos + presentationParam229,
      presentationValue362 = presentationHelper60();
    for (; presentationValue360.pos < presentationValue361; ) {
      let presentationValue472 = presentationValue360.uint32();
      switch (presentationValue472 >>> 3) {
        case 1:
          if (presentationValue472 !== 10) break;
          presentationValue362.spreadsheetCell = presentationValue31.decode(
            presentationValue360,
            presentationValue360.uint32(),
          );
          continue;
        case 2:
          if (presentationValue472 !== 18) break;
          presentationValue362.spreadsheetRange = presentationValue32.decode(
            presentationValue360,
            presentationValue360.uint32(),
          );
          continue;
        case 3:
          if (presentationValue472 !== 26) break;
          presentationValue362.slide = presentationValue33.decode(
            presentationValue360,
            presentationValue360.uint32(),
          );
          continue;
        case 4:
          if (presentationValue472 !== 34) break;
          presentationValue362.element = presentationValue34.decode(
            presentationValue360,
            presentationValue360.uint32(),
          );
          continue;
        case 5:
          if (presentationValue472 !== 42) break;
          presentationValue362.textRange = presentationValue36.decode(
            presentationValue360,
            presentationValue360.uint32(),
          );
          continue;
      }
      if ((presentationValue472 & 7) == 4 || presentationValue472 === 0) break;
      presentationValue360.skip(presentationValue472 & 7);
    }
    return presentationValue362;
  },
  create(presentationParam1189) {
    return presentationValue37.fromPartial(presentationParam1189 ?? {});
  },
  fromPartial(presentationParam243) {
    let presentationValue371 = presentationHelper60();
    return (
      (presentationValue371.spreadsheetCell =
        presentationParam243.spreadsheetCell !== void 0 &&
        presentationParam243.spreadsheetCell !== null
          ? presentationValue31.fromPartial(
              presentationParam243.spreadsheetCell,
            )
          : void 0),
      (presentationValue371.spreadsheetRange =
        presentationParam243.spreadsheetRange !== void 0 &&
        presentationParam243.spreadsheetRange !== null
          ? presentationValue32.fromPartial(
              presentationParam243.spreadsheetRange,
            )
          : void 0),
      (presentationValue371.slide =
        presentationParam243.slide !== void 0 &&
        presentationParam243.slide !== null
          ? presentationValue33.fromPartial(presentationParam243.slide)
          : void 0),
      (presentationValue371.element =
        presentationParam243.element !== void 0 &&
        presentationParam243.element !== null
          ? presentationValue34.fromPartial(presentationParam243.element)
          : void 0),
      (presentationValue371.textRange =
        presentationParam243.textRange !== void 0 &&
        presentationParam243.textRange !== null
          ? presentationValue36.fromPartial(presentationParam243.textRange)
          : void 0),
      presentationValue371
    );
  },
};
function presentationHelper61() {
  return {
    authorId: ``,
    time: ``,
  };
}
var $t = {
  encode(presentationParam1000, presentationParam1001 = new presentationPr()) {
    return (
      presentationParam1000.authorId !== `` &&
        presentationParam1001.uint32(10).string(presentationParam1000.authorId),
      presentationParam1000.time !== `` &&
        presentationParam1001.uint32(18).string(presentationParam1000.time),
      presentationParam1001
    );
  },
  decode(presentationParam624, presentationParam625) {
    let presentationValue824 =
        presentationParam624 instanceof presentationFr
          ? presentationParam624
          : new presentationFr(presentationParam624),
      presentationValue825 =
        presentationParam625 === void 0
          ? presentationValue824.len
          : presentationValue824.pos + presentationParam625,
      presentationValue826 = presentationHelper61();
    for (; presentationValue824.pos < presentationValue825; ) {
      let presentationValue1038 = presentationValue824.uint32();
      switch (presentationValue1038 >>> 3) {
        case 1:
          if (presentationValue1038 !== 10) break;
          presentationValue826.authorId = presentationValue824.string();
          continue;
        case 2:
          if (presentationValue1038 !== 18) break;
          presentationValue826.time = presentationValue824.string();
          continue;
      }
      if ((presentationValue1038 & 7) == 4 || presentationValue1038 === 0)
        break;
      presentationValue824.skip(presentationValue1038 & 7);
    }
    return presentationValue826;
  },
  create(presentationParam1190) {
    return $t.fromPartial(presentationParam1190 ?? {});
  },
  fromPartial(presentationParam1093) {
    let presentationValue1193 = presentationHelper61();
    return (
      (presentationValue1193.authorId = presentationParam1093.authorId ?? ``),
      (presentationValue1193.time = presentationParam1093.time ?? ``),
      presentationValue1193
    );
  },
};
function presentationHelper62() {
  return {
    type: ``,
    instances: [],
  };
}
var presentationValue38 = {
  encode(presentationParam963, presentationParam964 = new presentationPr()) {
    presentationParam963.type !== `` &&
      presentationParam964.uint32(10).string(presentationParam963.type);
    for (let presentationValue1256 of presentationParam963.instances)
      $t.encode(
        presentationValue1256,
        presentationParam964.uint32(18).fork(),
      ).join();
    return presentationParam964;
  },
  decode(presentationParam552, presentationParam553) {
    let presentationValue720 =
        presentationParam552 instanceof presentationFr
          ? presentationParam552
          : new presentationFr(presentationParam552),
      presentationValue721 =
        presentationParam553 === void 0
          ? presentationValue720.len
          : presentationValue720.pos + presentationParam553,
      presentationValue722 = presentationHelper62();
    for (; presentationValue720.pos < presentationValue721; ) {
      let presentationValue1000 = presentationValue720.uint32();
      switch (presentationValue1000 >>> 3) {
        case 1:
          if (presentationValue1000 !== 10) break;
          presentationValue722.type = presentationValue720.string();
          continue;
        case 2:
          if (presentationValue1000 !== 18) break;
          presentationValue722.instances.push(
            $t.decode(presentationValue720, presentationValue720.uint32()),
          );
          continue;
      }
      if ((presentationValue1000 & 7) == 4 || presentationValue1000 === 0)
        break;
      presentationValue720.skip(presentationValue1000 & 7);
    }
    return presentationValue722;
  },
  create(presentationParam1191) {
    return presentationValue38.fromPartial(presentationParam1191 ?? {});
  },
  fromPartial(presentationParam1015) {
    let presentationValue1136 = presentationHelper62();
    return (
      (presentationValue1136.type = presentationParam1015.type ?? ``),
      (presentationValue1136.instances =
        presentationParam1015.instances?.map((presentationParam1387) =>
          $t.fromPartial(presentationParam1387),
        ) || []),
      presentationValue1136
    );
  },
};
function presentationHelper63() {
  return {
    xEmu: 0,
    yEmu: 0,
  };
}
var presentationValue39 = {
  encode(presentationParam1021, presentationParam1022 = new presentationPr()) {
    return (
      presentationParam1021.xEmu !== 0 &&
        presentationParam1022.uint32(8).int64(presentationParam1021.xEmu),
      presentationParam1021.yEmu !== 0 &&
        presentationParam1022.uint32(16).int64(presentationParam1021.yEmu),
      presentationParam1022
    );
  },
  decode(presentationParam628, presentationParam629) {
    let presentationValue828 =
        presentationParam628 instanceof presentationFr
          ? presentationParam628
          : new presentationFr(presentationParam628),
      presentationValue829 =
        presentationParam629 === void 0
          ? presentationValue828.len
          : presentationValue828.pos + presentationParam629,
      presentationValue830 = presentationHelper63();
    for (; presentationValue828.pos < presentationValue829; ) {
      let presentationValue1039 = presentationValue828.uint32();
      switch (presentationValue1039 >>> 3) {
        case 1:
          if (presentationValue1039 !== 8) break;
          presentationValue830.xEmu = presentationHelper66(
            presentationValue828.int64(),
          );
          continue;
        case 2:
          if (presentationValue1039 !== 16) break;
          presentationValue830.yEmu = presentationHelper66(
            presentationValue828.int64(),
          );
          continue;
      }
      if ((presentationValue1039 & 7) == 4 || presentationValue1039 === 0)
        break;
      presentationValue828.skip(presentationValue1039 & 7);
    }
    return presentationValue830;
  },
  create(presentationParam1192) {
    return presentationValue39.fromPartial(presentationParam1192 ?? {});
  },
  fromPartial(presentationParam1121) {
    let presentationValue1231 = presentationHelper63();
    return (
      (presentationValue1231.xEmu = presentationParam1121.xEmu ?? 0),
      (presentationValue1231.yEmu = presentationParam1121.yEmu ?? 0),
      presentationValue1231
    );
  },
};
function presentationHelper64() {
  return {
    id: ``,
    parentId: void 0,
    authorId: ``,
    createdAt: ``,
    editedAt: void 0,
    body: void 0,
    isDeleted: !1,
    reactions: [],
    citations: [],
    position: void 0,
  };
}
var on = {
  encode(presentationParam189, presentationParam190 = new presentationPr()) {
    (presentationParam189.id !== `` &&
      presentationParam190.uint32(10).string(presentationParam189.id),
      presentationParam189.parentId !== void 0 &&
        presentationParam190.uint32(18).string(presentationParam189.parentId),
      presentationParam189.authorId !== `` &&
        presentationParam190.uint32(26).string(presentationParam189.authorId),
      presentationParam189.createdAt !== `` &&
        presentationParam190.uint32(34).string(presentationParam189.createdAt),
      presentationParam189.editedAt !== void 0 &&
        presentationParam190.uint32(42).string(presentationParam189.editedAt),
      presentationParam189.body !== void 0 &&
        presentationValue30
          .encode(
            presentationParam189.body,
            presentationParam190.uint32(50).fork(),
          )
          .join(),
      presentationParam189.isDeleted !== !1 &&
        presentationParam190.uint32(56).bool(presentationParam189.isDeleted));
    for (let presentationValue1257 of presentationParam189.reactions)
      presentationValue38
        .encode(presentationValue1257, presentationParam190.uint32(66).fork())
        .join();
    for (let presentationValue1326 of presentationParam189.citations)
      presentationParam190.uint32(74).string(presentationValue1326);
    return (
      presentationParam189.position !== void 0 &&
        presentationValue39
          .encode(
            presentationParam189.position,
            presentationParam190.uint32(82).fork(),
          )
          .join(),
      presentationParam190
    );
  },
  decode(presentationParam108, presentationParam109) {
    let presentationValue221 =
        presentationParam108 instanceof presentationFr
          ? presentationParam108
          : new presentationFr(presentationParam108),
      presentationValue222 =
        presentationParam109 === void 0
          ? presentationValue221.len
          : presentationValue221.pos + presentationParam109,
      presentationValue223 = presentationHelper64();
    for (; presentationValue221.pos < presentationValue222; ) {
      let presentationValue274 = presentationValue221.uint32();
      switch (presentationValue274 >>> 3) {
        case 1:
          if (presentationValue274 !== 10) break;
          presentationValue223.id = presentationValue221.string();
          continue;
        case 2:
          if (presentationValue274 !== 18) break;
          presentationValue223.parentId = presentationValue221.string();
          continue;
        case 3:
          if (presentationValue274 !== 26) break;
          presentationValue223.authorId = presentationValue221.string();
          continue;
        case 4:
          if (presentationValue274 !== 34) break;
          presentationValue223.createdAt = presentationValue221.string();
          continue;
        case 5:
          if (presentationValue274 !== 42) break;
          presentationValue223.editedAt = presentationValue221.string();
          continue;
        case 6:
          if (presentationValue274 !== 50) break;
          presentationValue223.body = presentationValue30.decode(
            presentationValue221,
            presentationValue221.uint32(),
          );
          continue;
        case 7:
          if (presentationValue274 !== 56) break;
          presentationValue223.isDeleted = presentationValue221.bool();
          continue;
        case 8:
          if (presentationValue274 !== 66) break;
          presentationValue223.reactions.push(
            presentationValue38.decode(
              presentationValue221,
              presentationValue221.uint32(),
            ),
          );
          continue;
        case 9:
          if (presentationValue274 !== 74) break;
          presentationValue223.citations.push(presentationValue221.string());
          continue;
        case 10:
          if (presentationValue274 !== 82) break;
          presentationValue223.position = presentationValue39.decode(
            presentationValue221,
            presentationValue221.uint32(),
          );
          continue;
      }
      if ((presentationValue274 & 7) == 4 || presentationValue274 === 0) break;
      presentationValue221.skip(presentationValue274 & 7);
    }
    return presentationValue223;
  },
  create(presentationParam1193) {
    return on.fromPartial(presentationParam1193 ?? {});
  },
  fromPartial(presentationParam309) {
    let presentationValue453 = presentationHelper64();
    return (
      (presentationValue453.id = presentationParam309.id ?? ``),
      (presentationValue453.parentId = presentationParam309.parentId ?? void 0),
      (presentationValue453.authorId = presentationParam309.authorId ?? ``),
      (presentationValue453.createdAt = presentationParam309.createdAt ?? ``),
      (presentationValue453.editedAt = presentationParam309.editedAt ?? void 0),
      (presentationValue453.body =
        presentationParam309.body !== void 0 &&
        presentationParam309.body !== null
          ? presentationValue30.fromPartial(presentationParam309.body)
          : void 0),
      (presentationValue453.isDeleted = presentationParam309.isDeleted ?? !1),
      (presentationValue453.reactions =
        presentationParam309.reactions?.map((presentationParam1388) =>
          presentationValue38.fromPartial(presentationParam1388),
        ) || []),
      (presentationValue453.citations =
        presentationParam309.citations?.map(
          (presentationParam1463) => presentationParam1463,
        ) || []),
      (presentationValue453.position =
        presentationParam309.position !== void 0 &&
        presentationParam309.position !== null
          ? presentationValue39.fromPartial(presentationParam309.position)
          : void 0),
      presentationValue453
    );
  },
};
function presentationHelper65() {
  return {
    id: ``,
    target: void 0,
    comments: [],
    status: 0,
    resolvedBy: void 0,
    resolvedAt: void 0,
  };
}
var presentationLr = {
    encode(event, presentationParam449 = new presentationPr()) {
      (event.id !== `` && presentationParam449.uint32(10).string(event.id),
        event.target !== void 0 &&
          presentationValue37
            .encode(event.target, presentationParam449.uint32(18).fork())
            .join());
      for (let presentationValue1264 of event.comments)
        on.encode(
          presentationValue1264,
          presentationParam449.uint32(26).fork(),
        ).join();
      return (
        event.status !== 0 &&
          presentationParam449.uint32(32).int32(event.status),
        event.resolvedBy !== void 0 &&
          presentationParam449.uint32(42).string(event.resolvedBy),
        event.resolvedAt !== void 0 &&
          presentationParam449.uint32(50).string(event.resolvedAt),
        presentationParam449
      );
    },
    decode(presentationParam223, presentationParam224) {
      let presentationValue353 =
          presentationParam223 instanceof presentationFr
            ? presentationParam223
            : new presentationFr(presentationParam223),
        presentationValue354 =
          presentationParam224 === void 0
            ? presentationValue353.len
            : presentationValue353.pos + presentationParam224,
        presentationValue355 = presentationHelper65();
      for (; presentationValue353.pos < presentationValue354; ) {
        let presentationValue470 = presentationValue353.uint32();
        switch (presentationValue470 >>> 3) {
          case 1:
            if (presentationValue470 !== 10) break;
            presentationValue355.id = presentationValue353.string();
            continue;
          case 2:
            if (presentationValue470 !== 18) break;
            presentationValue355.target = presentationValue37.decode(
              presentationValue353,
              presentationValue353.uint32(),
            );
            continue;
          case 3:
            if (presentationValue470 !== 26) break;
            presentationValue355.comments.push(
              on.decode(presentationValue353, presentationValue353.uint32()),
            );
            continue;
          case 4:
            if (presentationValue470 !== 32) break;
            presentationValue355.status = presentationValue353.int32();
            continue;
          case 5:
            if (presentationValue470 !== 42) break;
            presentationValue355.resolvedBy = presentationValue353.string();
            continue;
          case 6:
            if (presentationValue470 !== 50) break;
            presentationValue355.resolvedAt = presentationValue353.string();
            continue;
        }
        if ((presentationValue470 & 7) == 4 || presentationValue470 === 0)
          break;
        presentationValue353.skip(presentationValue470 & 7);
      }
      return presentationValue355;
    },
    create(presentationParam1194) {
      return presentationLr.fromPartial(presentationParam1194 ?? {});
    },
    fromPartial(event) {
      let presentationValue849 = presentationHelper65();
      return (
        (presentationValue849.id = event.id ?? ``),
        (presentationValue849.target =
          event.target !== void 0 && event.target !== null
            ? presentationValue37.fromPartial(event.target)
            : void 0),
        (presentationValue849.comments =
          event.comments?.map((presentationParam1389) =>
            on.fromPartial(presentationParam1389),
          ) || []),
        (presentationValue849.status = event.status ?? 0),
        (presentationValue849.resolvedBy = event.resolvedBy ?? void 0),
        (presentationValue849.resolvedAt = event.resolvedAt ?? void 0),
        presentationValue849
      );
    },
  },
  presentationValue40 = (() => {
    if (typeof globalThis < `u`) return globalThis;
    if (typeof self < `u`) return self;
    if (typeof window < `u`) return window;
    if (typeof global < `u`) return global;
    throw `Unable to locate global object`;
  })();
function presentationHelper66(presentationParam664) {
  let presentationValue875 = presentationValue40.Number(
    presentationParam664.toString(),
  );
  if (presentationValue875 > presentationValue40.Number.MAX_SAFE_INTEGER)
    throw new presentationValue40.Error(
      `Value is larger than Number.MAX_SAFE_INTEGER`,
    );
  if (presentationValue875 < presentationValue40.Number.MIN_SAFE_INTEGER)
    throw new presentationValue40.Error(
      `Value is smaller than Number.MIN_SAFE_INTEGER`,
    );
  return presentationValue875;
}
export const _presentationYn = (function (presentationParam713) {
  return (
    (presentationParam713[
      (presentationParam713.ERROR_BAR_DIRECTION_UNSPECIFIED = 0)
    ] = `ERROR_BAR_DIRECTION_UNSPECIFIED`),
    (presentationParam713[(presentationParam713.ERROR_BAR_DIRECTION_X = 1)] =
      `ERROR_BAR_DIRECTION_X`),
    (presentationParam713[(presentationParam713.ERROR_BAR_DIRECTION_Y = 2)] =
      `ERROR_BAR_DIRECTION_Y`),
    (presentationParam713[(presentationParam713.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam713
  );
})({});
export const _presentationXn = (function (presentationParam230) {
  return (
    (presentationParam230[
      (presentationParam230.ERROR_BAR_VALUE_TYPE_UNSPECIFIED = 0)
    ] = `ERROR_BAR_VALUE_TYPE_UNSPECIFIED`),
    (presentationParam230[
      (presentationParam230.ERROR_BAR_VALUE_TYPE_FIXED_VALUE = 1)
    ] = `ERROR_BAR_VALUE_TYPE_FIXED_VALUE`),
    (presentationParam230[
      (presentationParam230.ERROR_BAR_VALUE_TYPE_PERCENTAGE = 2)
    ] = `ERROR_BAR_VALUE_TYPE_PERCENTAGE`),
    (presentationParam230[
      (presentationParam230.ERROR_BAR_VALUE_TYPE_STANDARD_DEVIATION = 3)
    ] = `ERROR_BAR_VALUE_TYPE_STANDARD_DEVIATION`),
    (presentationParam230[
      (presentationParam230.ERROR_BAR_VALUE_TYPE_STANDARD_ERROR = 4)
    ] = `ERROR_BAR_VALUE_TYPE_STANDARD_ERROR`),
    (presentationParam230[
      (presentationParam230.ERROR_BAR_VALUE_TYPE_CUSTOM = 5)
    ] = `ERROR_BAR_VALUE_TYPE_CUSTOM`),
    (presentationParam230[(presentationParam230.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam230
  );
})({});
export const _presentationWn = (function (presentationParam546) {
  return (
    (presentationParam546[
      (presentationParam546.LINE_GROUPING_UNSPECIFIED = 0)
    ] = `LINE_GROUPING_UNSPECIFIED`),
    (presentationParam546[(presentationParam546.LINE_GROUPING_STANDARD = 1)] =
      `LINE_GROUPING_STANDARD`),
    (presentationParam546[(presentationParam546.LINE_GROUPING_STACKED = 2)] =
      `LINE_GROUPING_STACKED`),
    (presentationParam546[
      (presentationParam546.LINE_GROUPING_PERCENT_STACKED = 3)
    ] = `LINE_GROUPING_PERCENT_STACKED`),
    (presentationParam546[(presentationParam546.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam546
  );
})({});
export const _presentationVn = (function (presentationParam563) {
  return (
    (presentationParam563[
      (presentationParam563.DISPLAY_BLANKS_AS_UNSPECIFIED = 0)
    ] = `DISPLAY_BLANKS_AS_UNSPECIFIED`),
    (presentationParam563[(presentationParam563.DISPLAY_BLANKS_AS_GAP = 1)] =
      `DISPLAY_BLANKS_AS_GAP`),
    (presentationParam563[(presentationParam563.DISPLAY_BLANKS_AS_ZERO = 2)] =
      `DISPLAY_BLANKS_AS_ZERO`),
    (presentationParam563[(presentationParam563.DISPLAY_BLANKS_AS_SPAN = 3)] =
      `DISPLAY_BLANKS_AS_SPAN`),
    (presentationParam563[(presentationParam563.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam563
  );
})({});
export const _presentationUn = (function (presentationParam799) {
  return (
    (presentationParam799[
      (presentationParam799.BAR_DIRECTION_UNSPECIFIED = 0)
    ] = `BAR_DIRECTION_UNSPECIFIED`),
    (presentationParam799[(presentationParam799.BAR_DIRECTION_COLUMN = 1)] =
      `BAR_DIRECTION_COLUMN`),
    (presentationParam799[(presentationParam799.BAR_DIRECTION_BAR = 2)] =
      `BAR_DIRECTION_BAR`),
    (presentationParam799[(presentationParam799.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam799
  );
})({});
export const presentationSn = (function (presentationParam547) {
  return (
    (presentationParam547[
      (presentationParam547.AREA_GROUPING_UNSPECIFIED = 0)
    ] = `AREA_GROUPING_UNSPECIFIED`),
    (presentationParam547[(presentationParam547.AREA_GROUPING_STANDARD = 1)] =
      `AREA_GROUPING_STANDARD`),
    (presentationParam547[(presentationParam547.AREA_GROUPING_STACKED = 2)] =
      `AREA_GROUPING_STACKED`),
    (presentationParam547[
      (presentationParam547.AREA_GROUPING_PERCENT_STACKED = 3)
    ] = `AREA_GROUPING_PERCENT_STACKED`),
    (presentationParam547[(presentationParam547.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam547
  );
})({});
export const _presentationMn = (function (presentationParam40) {
  return (
    (presentationParam40[(presentationParam40.CHART_TYPE_UNSPECIFIED = 0)] =
      `CHART_TYPE_UNSPECIFIED`),
    (presentationParam40[(presentationParam40.CHART_TYPE_AREA_3D = 1)] =
      `CHART_TYPE_AREA_3D`),
    (presentationParam40[(presentationParam40.CHART_TYPE_AREA = 2)] =
      `CHART_TYPE_AREA`),
    (presentationParam40[(presentationParam40.CHART_TYPE_BAR_3D = 3)] =
      `CHART_TYPE_BAR_3D`),
    (presentationParam40[(presentationParam40.CHART_TYPE_BAR = 4)] =
      `CHART_TYPE_BAR`),
    (presentationParam40[(presentationParam40.CHART_TYPE_BUBBLE = 5)] =
      `CHART_TYPE_BUBBLE`),
    (presentationParam40[(presentationParam40.CHART_TYPE_DOUGHNUT = 8)] =
      `CHART_TYPE_DOUGHNUT`),
    (presentationParam40[(presentationParam40.CHART_TYPE_LINE_3D = 12)] =
      `CHART_TYPE_LINE_3D`),
    (presentationParam40[(presentationParam40.CHART_TYPE_LINE = 13)] =
      `CHART_TYPE_LINE`),
    (presentationParam40[(presentationParam40.CHART_TYPE_OF_PIE = 14)] =
      `CHART_TYPE_OF_PIE`),
    (presentationParam40[(presentationParam40.CHART_TYPE_PIE_3D = 15)] =
      `CHART_TYPE_PIE_3D`),
    (presentationParam40[(presentationParam40.CHART_TYPE_PIE = 16)] =
      `CHART_TYPE_PIE`),
    (presentationParam40[(presentationParam40.CHART_TYPE_RADAR = 17)] =
      `CHART_TYPE_RADAR`),
    (presentationParam40[(presentationParam40.CHART_TYPE_SCATTER = 18)] =
      `CHART_TYPE_SCATTER`),
    (presentationParam40[(presentationParam40.CHART_TYPE_STOCK = 20)] =
      `CHART_TYPE_STOCK`),
    (presentationParam40[(presentationParam40.CHART_TYPE_SURFACE_3D = 21)] =
      `CHART_TYPE_SURFACE_3D`),
    (presentationParam40[(presentationParam40.CHART_TYPE_SURFACE = 22)] =
      `CHART_TYPE_SURFACE`),
    (presentationParam40[(presentationParam40.CHART_TYPE_MAP = 23)] =
      `CHART_TYPE_MAP`),
    (presentationParam40[(presentationParam40.CHART_TYPE_HISTOGRAM = 24)] =
      `CHART_TYPE_HISTOGRAM`),
    (presentationParam40[(presentationParam40.CHART_TYPE_PARETO = 25)] =
      `CHART_TYPE_PARETO`),
    (presentationParam40[(presentationParam40.CHART_TYPE_BOX_WHISKER = 26)] =
      `CHART_TYPE_BOX_WHISKER`),
    (presentationParam40[(presentationParam40.CHART_TYPE_WATERFALL = 27)] =
      `CHART_TYPE_WATERFALL`),
    (presentationParam40[(presentationParam40.CHART_TYPE_FUNNEL = 28)] =
      `CHART_TYPE_FUNNEL`),
    (presentationParam40[(presentationParam40.CHART_TYPE_TREEMAP = 29)] =
      `CHART_TYPE_TREEMAP`),
    (presentationParam40[(presentationParam40.CHART_TYPE_SUNBURST = 30)] =
      `CHART_TYPE_SUNBURST`),
    (presentationParam40[(presentationParam40.CHART_TYPE_COMBO = 31)] =
      `CHART_TYPE_COMBO`),
    (presentationParam40[(presentationParam40.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam40
  );
})({});
export const _presentationLn = (function (presentationParam519) {
  return (
    (presentationParam519[
      (presentationParam519.AXIS_POSITION_UNSPECIFIED = 0)
    ] = `AXIS_POSITION_UNSPECIFIED`),
    (presentationParam519[(presentationParam519.AXIS_POSITION_LEFT = 1)] =
      `AXIS_POSITION_LEFT`),
    (presentationParam519[(presentationParam519.AXIS_POSITION_RIGHT = 2)] =
      `AXIS_POSITION_RIGHT`),
    (presentationParam519[(presentationParam519.AXIS_POSITION_TOP = 3)] =
      `AXIS_POSITION_TOP`),
    (presentationParam519[(presentationParam519.AXIS_POSITION_BOTTOM = 4)] =
      `AXIS_POSITION_BOTTOM`),
    (presentationParam519[(presentationParam519.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam519
  );
})({});
export const _presentationKn = (function (presentationParam165) {
  return (
    (presentationParam165[
      (presentationParam165.MARKER_SYMBOL_UNSPECIFIED = 0)
    ] = `MARKER_SYMBOL_UNSPECIFIED`),
    (presentationParam165[(presentationParam165.MARKER_SYMBOL_NONE = 1)] =
      `MARKER_SYMBOL_NONE`),
    (presentationParam165[(presentationParam165.MARKER_SYMBOL_DOT = 2)] =
      `MARKER_SYMBOL_DOT`),
    (presentationParam165[(presentationParam165.MARKER_SYMBOL_CIRCLE = 3)] =
      `MARKER_SYMBOL_CIRCLE`),
    (presentationParam165[(presentationParam165.MARKER_SYMBOL_SQUARE = 4)] =
      `MARKER_SYMBOL_SQUARE`),
    (presentationParam165[(presentationParam165.MARKER_SYMBOL_DIAMOND = 5)] =
      `MARKER_SYMBOL_DIAMOND`),
    (presentationParam165[(presentationParam165.MARKER_SYMBOL_TRIANGLE = 6)] =
      `MARKER_SYMBOL_TRIANGLE`),
    (presentationParam165[(presentationParam165.MARKER_SYMBOL_X = 7)] =
      `MARKER_SYMBOL_X`),
    (presentationParam165[(presentationParam165.MARKER_SYMBOL_STAR = 8)] =
      `MARKER_SYMBOL_STAR`),
    (presentationParam165[(presentationParam165.MARKER_SYMBOL_PLUS = 9)] =
      `MARKER_SYMBOL_PLUS`),
    (presentationParam165[(presentationParam165.MARKER_SYMBOL_DASH = 10)] =
      `MARKER_SYMBOL_DASH`),
    (presentationParam165[(presentationParam165.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam165
  );
})({});
export const _presentationJn = (function (presentationParam366) {
  return (
    (presentationParam366[
      (presentationParam366.SCATTER_STYLE_UNSPECIFIED = 0)
    ] = `SCATTER_STYLE_UNSPECIFIED`),
    (presentationParam366[
      (presentationParam366.SCATTER_STYLE_LINE_MARKER = 1)
    ] = `SCATTER_STYLE_LINE_MARKER`),
    (presentationParam366[(presentationParam366.SCATTER_STYLE_LINE = 2)] =
      `SCATTER_STYLE_LINE`),
    (presentationParam366[(presentationParam366.SCATTER_STYLE_MARKER = 3)] =
      `SCATTER_STYLE_MARKER`),
    (presentationParam366[(presentationParam366.SCATTER_STYLE_SMOOTH = 4)] =
      `SCATTER_STYLE_SMOOTH`),
    (presentationParam366[
      (presentationParam366.SCATTER_STYLE_SMOOTH_MARKER = 5)
    ] = `SCATTER_STYLE_SMOOTH_MARKER`),
    (presentationParam366[(presentationParam366.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam366
  );
})({});
export const _presentationHn = (function (presentationParam682) {
  return (
    (presentationParam682[
      (presentationParam682.CROSS_BETWEEN_UNSPECIFIED = 0)
    ] = `CROSS_BETWEEN_UNSPECIFIED`),
    (presentationParam682[(presentationParam682.CROSS_BETWEEN_BETWEEN = 1)] =
      `CROSS_BETWEEN_BETWEEN`),
    (presentationParam682[
      (presentationParam682.CROSS_BETWEEN_MIDPOINT_CATEGORY = 2)
    ] = `CROSS_BETWEEN_MIDPOINT_CATEGORY`),
    (presentationParam682[(presentationParam682.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam682
  );
})({});
export const _presentationGn = (function (presentationParam672) {
  return (
    (presentationParam672[(presentationParam672.CROSSES_UNSPECIFIED = 0)] =
      `CROSSES_UNSPECIFIED`),
    (presentationParam672[(presentationParam672.CROSSES_AUTO_ZERO = 1)] =
      `CROSSES_AUTO_ZERO`),
    (presentationParam672[(presentationParam672.CROSSES_MIN = 2)] =
      `CROSSES_MIN`),
    (presentationParam672[(presentationParam672.CROSSES_MAX = 3)] =
      `CROSSES_MAX`),
    (presentationParam672[(presentationParam672.CROSSES_AT = 4)] =
      `CROSSES_AT`),
    (presentationParam672[(presentationParam672.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam672
  );
})({});
export const _presentationFn = (function (presentationParam683) {
  return (
    (presentationParam683[
      (presentationParam683.QUARTILE_METHOD_UNSPECIFIED = 0)
    ] = `QUARTILE_METHOD_UNSPECIFIED`),
    (presentationParam683[
      (presentationParam683.QUARTILE_METHOD_INCLUSIVE = 1)
    ] = `QUARTILE_METHOD_INCLUSIVE`),
    (presentationParam683[
      (presentationParam683.QUARTILE_METHOD_EXCLUSIVE = 2)
    ] = `QUARTILE_METHOD_EXCLUSIVE`),
    (presentationParam683[(presentationParam683.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam683
  );
})({});
export const presentationDn = (function (presentationParam562) {
  return (
    (presentationParam562[(presentationParam562.BAR_GROUPING_UNSPECIFIED = 0)] =
      `BAR_GROUPING_UNSPECIFIED`),
    (presentationParam562[(presentationParam562.BAR_GROUPING_CLUSTERED = 1)] =
      `BAR_GROUPING_CLUSTERED`),
    (presentationParam562[(presentationParam562.BAR_GROUPING_STACKED = 2)] =
      `BAR_GROUPING_STACKED`),
    (presentationParam562[
      (presentationParam562.BAR_GROUPING_PERCENT_STACKED = 3)
    ] = `BAR_GROUPING_PERCENT_STACKED`),
    (presentationParam562[(presentationParam562.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam562
  );
})({});
export const _presentationCn = (function (presentationParam688) {
  return (
    (presentationParam688[
      (presentationParam688.AXIS_ORIENTATION_UNSPECIFIED = 0)
    ] = `AXIS_ORIENTATION_UNSPECIFIED`),
    (presentationParam688[(presentationParam688.AXIS_ORIENTATION_MIN_MAX = 1)] =
      `AXIS_ORIENTATION_MIN_MAX`),
    (presentationParam688[(presentationParam688.AXIS_ORIENTATION_MAX_MIN = 2)] =
      `AXIS_ORIENTATION_MAX_MIN`),
    (presentationParam688[(presentationParam688.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam688
  );
})({});
export const _presentationBn = (function (presentationParam642) {
  return (
    (presentationParam642[
      (presentationParam642.ERROR_BAR_TYPE_UNSPECIFIED = 0)
    ] = `ERROR_BAR_TYPE_UNSPECIFIED`),
    (presentationParam642[(presentationParam642.ERROR_BAR_TYPE_BOTH = 1)] =
      `ERROR_BAR_TYPE_BOTH`),
    (presentationParam642[(presentationParam642.ERROR_BAR_TYPE_PLUS = 2)] =
      `ERROR_BAR_TYPE_PLUS`),
    (presentationParam642[(presentationParam642.ERROR_BAR_TYPE_MINUS = 3)] =
      `ERROR_BAR_TYPE_MINUS`),
    (presentationParam642[(presentationParam642.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam642
  );
})({});
export const _presentationN = (function (presentationParam130) {
  return (
    (presentationParam130[
      (presentationParam130.DATA_LABEL_POSITION_UNSPECIFIED = 0)
    ] = `DATA_LABEL_POSITION_UNSPECIFIED`),
    (presentationParam130[
      (presentationParam130.DATA_LABEL_POSITION_OUT_END = 1)
    ] = `DATA_LABEL_POSITION_OUT_END`),
    (presentationParam130[
      (presentationParam130.DATA_LABEL_POSITION_IN_END = 2)
    ] = `DATA_LABEL_POSITION_IN_END`),
    (presentationParam130[
      (presentationParam130.DATA_LABEL_POSITION_CENTER = 3)
    ] = `DATA_LABEL_POSITION_CENTER`),
    (presentationParam130[(presentationParam130.DATA_LABEL_POSITION_LEFT = 4)] =
      `DATA_LABEL_POSITION_LEFT`),
    (presentationParam130[
      (presentationParam130.DATA_LABEL_POSITION_RIGHT = 5)
    ] = `DATA_LABEL_POSITION_RIGHT`),
    (presentationParam130[(presentationParam130.DATA_LABEL_POSITION_TOP = 6)] =
      `DATA_LABEL_POSITION_TOP`),
    (presentationParam130[
      (presentationParam130.DATA_LABEL_POSITION_BOTTOM = 7)
    ] = `DATA_LABEL_POSITION_BOTTOM`),
    (presentationParam130[
      (presentationParam130.DATA_LABEL_POSITION_INSIDE_BASE = 8)
    ] = `DATA_LABEL_POSITION_INSIDE_BASE`),
    (presentationParam130[
      (presentationParam130.DATA_LABEL_POSITION_BEST_FIT = 9)
    ] = `DATA_LABEL_POSITION_BEST_FIT`),
    (presentationParam130[(presentationParam130.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam130
  );
})({});
export const presentationTn = (function (presentationParam637) {
  return (
    (presentationParam637[(presentationParam637.MAP_AREA_UNSPECIFIED = 0)] =
      `MAP_AREA_UNSPECIFIED`),
    (presentationParam637[(presentationParam637.MAP_AREA_AUTO = 1)] =
      `MAP_AREA_AUTO`),
    (presentationParam637[(presentationParam637.MAP_AREA_WORLD = 2)] =
      `MAP_AREA_WORLD`),
    (presentationParam637[(presentationParam637.MAP_AREA_DATA_ONLY = 3)] =
      `MAP_AREA_DATA_ONLY`),
    (presentationParam637[(presentationParam637.MAP_AREA_REGION = 4)] =
      `MAP_AREA_REGION`),
    (presentationParam637[(presentationParam637.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam637
  );
})({});
export const _presentationSn = (function (presentationParam761) {
  return (
    (presentationParam761[
      (presentationParam761.INTERVAL_CLOSED_UNSPECIFIED = 0)
    ] = `INTERVAL_CLOSED_UNSPECIFIED`),
    (presentationParam761[(presentationParam761.INTERVAL_CLOSED_LEFT = 1)] =
      `INTERVAL_CLOSED_LEFT`),
    (presentationParam761[(presentationParam761.INTERVAL_CLOSED_RIGHT = 2)] =
      `INTERVAL_CLOSED_RIGHT`),
    (presentationParam761[(presentationParam761.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam761
  );
})({});
export const presentationPn = (function (presentationParam496) {
  return (
    (presentationParam496[
      (presentationParam496.PARENT_LABEL_LAYOUT_UNSPECIFIED = 0)
    ] = `PARENT_LABEL_LAYOUT_UNSPECIFIED`),
    (presentationParam496[(presentationParam496.PARENT_LABEL_LAYOUT_NONE = 1)] =
      `PARENT_LABEL_LAYOUT_NONE`),
    (presentationParam496[
      (presentationParam496.PARENT_LABEL_LAYOUT_BANNER = 2)
    ] = `PARENT_LABEL_LAYOUT_BANNER`),
    (presentationParam496[
      (presentationParam496.PARENT_LABEL_LAYOUT_OVERLAPPING = 3)
    ] = `PARENT_LABEL_LAYOUT_OVERLAPPING`),
    (presentationParam496[(presentationParam496.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam496
  );
})({});
export const presentationOn = (function (presentationParam479) {
  return (
    (presentationParam479[
      (presentationParam479.MAP_PROJECTION_UNSPECIFIED = 0)
    ] = `MAP_PROJECTION_UNSPECIFIED`),
    (presentationParam479[(presentationParam479.MAP_PROJECTION_AUTO = 1)] =
      `MAP_PROJECTION_AUTO`),
    (presentationParam479[(presentationParam479.MAP_PROJECTION_MERCATOR = 2)] =
      `MAP_PROJECTION_MERCATOR`),
    (presentationParam479[(presentationParam479.MAP_PROJECTION_MILLER = 3)] =
      `MAP_PROJECTION_MILLER`),
    (presentationParam479[(presentationParam479.MAP_PROJECTION_ALBERS = 4)] =
      `MAP_PROJECTION_ALBERS`),
    (presentationParam479[(presentationParam479.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam479
  );
})({});
export const presentationNn = (function (presentationParam610) {
  return (
    (presentationParam610[(presentationParam610.TICK_MARK_UNSPECIFIED = 0)] =
      `TICK_MARK_UNSPECIFIED`),
    (presentationParam610[(presentationParam610.TICK_MARK_NONE = 1)] =
      `TICK_MARK_NONE`),
    (presentationParam610[(presentationParam610.TICK_MARK_INSIDE = 2)] =
      `TICK_MARK_INSIDE`),
    (presentationParam610[(presentationParam610.TICK_MARK_OUTSIDE = 3)] =
      `TICK_MARK_OUTSIDE`),
    (presentationParam610[(presentationParam610.TICK_MARK_CROSS = 4)] =
      `TICK_MARK_CROSS`),
    (presentationParam610[(presentationParam610.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam610
  );
})({});
export const presentationMn = (function (presentationParam417) {
  return (
    (presentationParam417[
      (presentationParam417.TICK_LABEL_POSITION_UNSPECIFIED = 0)
    ] = `TICK_LABEL_POSITION_UNSPECIFIED`),
    (presentationParam417[(presentationParam417.TICK_LABEL_POSITION_HIGH = 1)] =
      `TICK_LABEL_POSITION_HIGH`),
    (presentationParam417[(presentationParam417.TICK_LABEL_POSITION_LOW = 2)] =
      `TICK_LABEL_POSITION_LOW`),
    (presentationParam417[
      (presentationParam417.TICK_LABEL_POSITION_NEXT_TO = 3)
    ] = `TICK_LABEL_POSITION_NEXT_TO`),
    (presentationParam417[(presentationParam417.TICK_LABEL_POSITION_NONE = 4)] =
      `TICK_LABEL_POSITION_NONE`),
    (presentationParam417[(presentationParam417.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam417
  );
})({});
export const presentationFn = (function (presentationParam263) {
  return (
    (presentationParam263[
      (presentationParam263.TRENDLINE_TYPE_UNSPECIFIED = 0)
    ] = `TRENDLINE_TYPE_UNSPECIFIED`),
    (presentationParam263[(presentationParam263.TRENDLINE_TYPE_LINEAR = 1)] =
      `TRENDLINE_TYPE_LINEAR`),
    (presentationParam263[
      (presentationParam263.TRENDLINE_TYPE_EXPONENTIAL = 2)
    ] = `TRENDLINE_TYPE_EXPONENTIAL`),
    (presentationParam263[
      (presentationParam263.TRENDLINE_TYPE_LOGARITHMIC = 3)
    ] = `TRENDLINE_TYPE_LOGARITHMIC`),
    (presentationParam263[
      (presentationParam263.TRENDLINE_TYPE_POLYNOMIAL = 4)
    ] = `TRENDLINE_TYPE_POLYNOMIAL`),
    (presentationParam263[(presentationParam263.TRENDLINE_TYPE_POWER = 5)] =
      `TRENDLINE_TYPE_POWER`),
    (presentationParam263[
      (presentationParam263.TRENDLINE_TYPE_MOVING_AVERAGE = 6)
    ] = `TRENDLINE_TYPE_MOVING_AVERAGE`),
    (presentationParam263[(presentationParam263.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam263
  );
})({});
export const presentationEn = (function (presentationParam151) {
  return (
    (presentationParam151[
      (presentationParam151.MAP_DATA_LEVEL_UNSPECIFIED = 0)
    ] = `MAP_DATA_LEVEL_UNSPECIFIED`),
    (presentationParam151[(presentationParam151.MAP_DATA_LEVEL_AUTO = 1)] =
      `MAP_DATA_LEVEL_AUTO`),
    (presentationParam151[
      (presentationParam151.MAP_DATA_LEVEL_COUNTRY_OR_REGION = 2)
    ] = `MAP_DATA_LEVEL_COUNTRY_OR_REGION`),
    (presentationParam151[
      (presentationParam151.MAP_DATA_LEVEL_STATE_OR_PROVINCE = 3)
    ] = `MAP_DATA_LEVEL_STATE_OR_PROVINCE`),
    (presentationParam151[(presentationParam151.MAP_DATA_LEVEL_COUNTY = 4)] =
      `MAP_DATA_LEVEL_COUNTY`),
    (presentationParam151[
      (presentationParam151.MAP_DATA_LEVEL_POSTAL_CODE = 5)
    ] = `MAP_DATA_LEVEL_POSTAL_CODE`),
    (presentationParam151[
      (presentationParam151.MAP_DATA_LEVEL_COUNTRY_OR_REGION_CODE = 6)
    ] = `MAP_DATA_LEVEL_COUNTRY_OR_REGION_CODE`),
    (presentationParam151[
      (presentationParam151.MAP_DATA_LEVEL_STATE_CODE = 7)
    ] = `MAP_DATA_LEVEL_STATE_CODE`),
    (presentationParam151[
      (presentationParam151.MAP_DATA_LEVEL_COUNTY_CODE = 8)
    ] = `MAP_DATA_LEVEL_COUNTY_CODE`),
    (presentationParam151[(presentationParam151.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam151
  );
})({});
export const _presentationDn = (function (presentationParam537) {
  return (
    (presentationParam537[
      (presentationParam537.MAP_LABEL_LAYOUT_UNSPECIFIED = 0)
    ] = `MAP_LABEL_LAYOUT_UNSPECIFIED`),
    (presentationParam537[(presentationParam537.MAP_LABEL_LAYOUT_NONE = 1)] =
      `MAP_LABEL_LAYOUT_NONE`),
    (presentationParam537[
      (presentationParam537.MAP_LABEL_LAYOUT_BEST_FIT = 2)
    ] = `MAP_LABEL_LAYOUT_BEST_FIT`),
    (presentationParam537[
      (presentationParam537.MAP_LABEL_LAYOUT_SHOW_ALL = 3)
    ] = `MAP_LABEL_LAYOUT_SHOW_ALL`),
    (presentationParam537[(presentationParam537.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam537
  );
})({});
export const presentationCn = (function (presentationParam375) {
  return (
    (presentationParam375[
      (presentationParam375.LEGEND_POSITION_UNSPECIFIED = 0)
    ] = `LEGEND_POSITION_UNSPECIFIED`),
    (presentationParam375[(presentationParam375.LEGEND_POSITION_RIGHT = 1)] =
      `LEGEND_POSITION_RIGHT`),
    (presentationParam375[(presentationParam375.LEGEND_POSITION_LEFT = 2)] =
      `LEGEND_POSITION_LEFT`),
    (presentationParam375[(presentationParam375.LEGEND_POSITION_TOP = 3)] =
      `LEGEND_POSITION_TOP`),
    (presentationParam375[(presentationParam375.LEGEND_POSITION_BOTTOM = 4)] =
      `LEGEND_POSITION_BOTTOM`),
    (presentationParam375[
      (presentationParam375.LEGEND_POSITION_TOP_RIGHT = 5)
    ] = `LEGEND_POSITION_TOP_RIGHT`),
    (presentationParam375[(presentationParam375.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam375
  );
})({});
export const presentationAn = (function (presentationParam653) {
  return (
    (presentationParam653[(presentationParam653.RADAR_STYLE_UNSPECIFIED = 0)] =
      `RADAR_STYLE_UNSPECIFIED`),
    (presentationParam653[(presentationParam653.RADAR_STYLE_STANDARD = 1)] =
      `RADAR_STYLE_STANDARD`),
    (presentationParam653[(presentationParam653.RADAR_STYLE_MARKER = 2)] =
      `RADAR_STYLE_MARKER`),
    (presentationParam653[(presentationParam653.RADAR_STYLE_FILLED = 3)] =
      `RADAR_STYLE_FILLED`),
    (presentationParam653[(presentationParam653.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam653
  );
})({});
function presentationHelper67() {
  return {
    title: ``,
    categories: [],
    series: [],
    bbox: void 0,
    type: 0,
    styleIndex: 0,
    id: ``,
    xAxis: void 0,
    yAxis: void 0,
    barDirection: 0,
    hasLegend: !1,
    legend: void 0,
    titleTextStyle: void 0,
    dataLabels: void 0,
    chartFill: void 0,
    chartLine: void 0,
    chartSpaceFill: void 0,
    chartSpaceLine: void 0,
    roundedCorners: void 0,
    plotAreaFill: void 0,
    plotAreaLine: void 0,
    pivot: void 0,
    pivotOptions: void 0,
    pivotFormats: [],
    mapOptions: void 0,
    style: void 0,
    displayBlanksAs: void 0,
    showDlblsOverMax: void 0,
    view3d: void 0,
    barOptions: void 0,
    lineOptions: void 0,
    areaOptions: void 0,
    pieOptions: void 0,
    ofPieOptions: void 0,
    doughnutOptions: void 0,
    scatterOptions: void 0,
    bubbleOptions: void 0,
    radarOptions: void 0,
    surfaceOptions: void 0,
    chartGroups: [],
    axes: [],
    treemapOptions: void 0,
    boxWhiskerOptions: void 0,
    histogramOptions: void 0,
    waterfallOptions: void 0,
    funnelOptions: void 0,
    titlePosition: void 0,
    titleAlignment: void 0,
    titleOverlay: void 0,
    titleParagraphs: [],
    externalData: void 0,
  };
}
var _presentationPn = {
  encode(presentationParam5, presentationParam6 = new presentationPr()) {
    presentationParam5.title !== `` &&
      presentationParam6.uint32(10).string(presentationParam5.title);
    for (let presentationValue1321 of presentationParam5.categories)
      presentationParam6.uint32(18).string(presentationValue1321);
    for (let presentationValue1283 of presentationParam5.series)
      presentationValue46
        .encode(presentationValue1283, presentationParam6.uint32(26).fork())
        .join();
    (presentationParam5.bbox !== void 0 &&
      presentationValue6
        .encode(presentationParam5.bbox, presentationParam6.uint32(34).fork())
        .join(),
      presentationParam5.type !== 0 &&
        presentationParam6.uint32(40).int32(presentationParam5.type),
      presentationParam5.styleIndex !== 0 &&
        presentationParam6.uint32(48).int32(presentationParam5.styleIndex),
      presentationParam5.id !== `` &&
        presentationParam6.uint32(58).string(presentationParam5.id),
      presentationParam5.xAxis !== void 0 &&
        presentationValue61
          .encode(
            presentationParam5.xAxis,
            presentationParam6.uint32(66).fork(),
          )
          .join(),
      presentationParam5.yAxis !== void 0 &&
        presentationValue61
          .encode(
            presentationParam5.yAxis,
            presentationParam6.uint32(74).fork(),
          )
          .join(),
      presentationParam5.barDirection !== 0 &&
        presentationParam6.uint32(80).int32(presentationParam5.barDirection),
      presentationParam5.hasLegend !== !1 &&
        presentationParam6.uint32(88).bool(presentationParam5.hasLegend),
      presentationParam5.legend !== void 0 &&
        presentationValue44
          .encode(
            presentationParam5.legend,
            presentationParam6.uint32(98).fork(),
          )
          .join(),
      presentationParam5.titleTextStyle !== void 0 &&
        presentationOr
          .encode(
            presentationParam5.titleTextStyle,
            presentationParam6.uint32(106).fork(),
          )
          .join(),
      presentationParam5.dataLabels !== void 0 &&
        presentationValue62
          .encode(
            presentationParam5.dataLabels,
            presentationParam6.uint32(114).fork(),
          )
          .join(),
      presentationParam5.chartFill !== void 0 &&
        presentationHn
          .encode(
            presentationParam5.chartFill,
            presentationParam6.uint32(122).fork(),
          )
          .join(),
      presentationParam5.chartLine !== void 0 &&
        presentationJn
          .encode(
            presentationParam5.chartLine,
            presentationParam6.uint32(130).fork(),
          )
          .join(),
      presentationParam5.chartSpaceFill !== void 0 &&
        presentationHn
          .encode(
            presentationParam5.chartSpaceFill,
            presentationParam6.uint32(194).fork(),
          )
          .join(),
      presentationParam5.chartSpaceLine !== void 0 &&
        presentationJn
          .encode(
            presentationParam5.chartSpaceLine,
            presentationParam6.uint32(202).fork(),
          )
          .join(),
      presentationParam5.roundedCorners !== void 0 &&
        presentationParam6.uint32(208).bool(presentationParam5.roundedCorners),
      presentationParam5.plotAreaFill !== void 0 &&
        presentationHn
          .encode(
            presentationParam5.plotAreaFill,
            presentationParam6.uint32(138).fork(),
          )
          .join(),
      presentationParam5.plotAreaLine !== void 0 &&
        presentationJn
          .encode(
            presentationParam5.plotAreaLine,
            presentationParam6.uint32(146).fork(),
          )
          .join(),
      presentationParam5.pivot !== void 0 &&
        presentationValue78
          .encode(
            presentationParam5.pivot,
            presentationParam6.uint32(154).fork(),
          )
          .join(),
      presentationParam5.pivotOptions !== void 0 &&
        presentationValue79
          .encode(
            presentationParam5.pivotOptions,
            presentationParam6.uint32(162).fork(),
          )
          .join());
    for (let presentationValue1232 of presentationParam5.pivotFormats)
      ui.encode(
        presentationValue1232,
        presentationParam6.uint32(170).fork(),
      ).join();
    (presentationParam5.mapOptions !== void 0 &&
      presentationValue64
        .encode(
          presentationParam5.mapOptions,
          presentationParam6.uint32(178).fork(),
        )
        .join(),
      presentationParam5.style !== void 0 &&
        presentationValue72
          .encode(
            presentationParam5.style,
            presentationParam6.uint32(186).fork(),
          )
          .join(),
      presentationParam5.displayBlanksAs !== void 0 &&
        presentationParam6
          .uint32(224)
          .int32(presentationParam5.displayBlanksAs),
      presentationParam5.showDlblsOverMax !== void 0 &&
        presentationParam6
          .uint32(232)
          .bool(presentationParam5.showDlblsOverMax),
      presentationParam5.view3d !== void 0 &&
        presentationValue81
          .encode(
            presentationParam5.view3d,
            presentationParam6.uint32(330).fork(),
          )
          .join(),
      presentationParam5.barOptions !== void 0 &&
        presentationValue45
          .encode(
            presentationParam5.barOptions,
            presentationParam6.uint32(402).fork(),
          )
          .join(),
      presentationParam5.lineOptions !== void 0 &&
        presentationValue52
          .encode(
            presentationParam5.lineOptions,
            presentationParam6.uint32(410).fork(),
          )
          .join(),
      presentationParam5.areaOptions !== void 0 &&
        presentationValue53
          .encode(
            presentationParam5.areaOptions,
            presentationParam6.uint32(418).fork(),
          )
          .join(),
      presentationParam5.pieOptions !== void 0 &&
        presentationValue54
          .encode(
            presentationParam5.pieOptions,
            presentationParam6.uint32(426).fork(),
          )
          .join(),
      presentationParam5.ofPieOptions !== void 0 &&
        _r
          .encode(
            presentationParam5.ofPieOptions,
            presentationParam6.uint32(474).fork(),
          )
          .join(),
      presentationParam5.doughnutOptions !== void 0 &&
        presentationValue55
          .encode(
            presentationParam5.doughnutOptions,
            presentationParam6.uint32(434).fork(),
          )
          .join(),
      presentationParam5.scatterOptions !== void 0 &&
        presentationValue56
          .encode(
            presentationParam5.scatterOptions,
            presentationParam6.uint32(442).fork(),
          )
          .join(),
      presentationParam5.bubbleOptions !== void 0 &&
        presentationValue57
          .encode(
            presentationParam5.bubbleOptions,
            presentationParam6.uint32(450).fork(),
          )
          .join(),
      presentationParam5.radarOptions !== void 0 &&
        presentationValue58
          .encode(
            presentationParam5.radarOptions,
            presentationParam6.uint32(458).fork(),
          )
          .join(),
      presentationParam5.surfaceOptions !== void 0 &&
        presentationValue59
          .encode(
            presentationParam5.surfaceOptions,
            presentationParam6.uint32(466).fork(),
          )
          .join());
    for (let presentationValue1236 of presentationParam5.chartGroups)
      presentationValue43
        .encode(presentationValue1236, presentationParam6.uint32(482).fork())
        .join();
    for (let presentationValue1299 of presentationParam5.axes)
      presentationValue61
        .encode(presentationValue1299, presentationParam6.uint32(506).fork())
        .join();
    (presentationParam5.treemapOptions !== void 0 &&
      presentationValue66
        .encode(
          presentationParam5.treemapOptions,
          presentationParam6.uint32(354).fork(),
        )
        .join(),
      presentationParam5.boxWhiskerOptions !== void 0 &&
        presentationValue67
          .encode(
            presentationParam5.boxWhiskerOptions,
            presentationParam6.uint32(362).fork(),
          )
          .join(),
      presentationParam5.histogramOptions !== void 0 &&
        presentationValue68
          .encode(
            presentationParam5.histogramOptions,
            presentationParam6.uint32(370).fork(),
          )
          .join(),
      presentationParam5.waterfallOptions !== void 0 &&
        presentationValue70
          .encode(
            presentationParam5.waterfallOptions,
            presentationParam6.uint32(378).fork(),
          )
          .join(),
      presentationParam5.funnelOptions !== void 0 &&
        presentationValue71
          .encode(
            presentationParam5.funnelOptions,
            presentationParam6.uint32(386).fork(),
          )
          .join(),
      presentationParam5.titlePosition !== void 0 &&
        presentationParam6.uint32(392).int32(presentationParam5.titlePosition),
      presentationParam5.titleAlignment !== void 0 &&
        presentationParam6.uint32(496).int32(presentationParam5.titleAlignment),
      presentationParam5.titleOverlay !== void 0 &&
        presentationParam6.uint32(520).bool(presentationParam5.titleOverlay));
    for (let presentationValue1218 of presentationParam5.titleParagraphs)
      presentationValue41
        .encode(presentationValue1218, presentationParam6.uint32(514).fork())
        .join();
    return (
      presentationParam5.externalData !== void 0 &&
        presentationValue69
          .encode(
            presentationParam5.externalData,
            presentationParam6.uint32(490).fork(),
          )
          .join(),
      presentationParam6
    );
  },
  decode(presentationParam3, presentationParam4) {
    let presentationValue107 =
        presentationParam3 instanceof presentationFr
          ? presentationParam3
          : new presentationFr(presentationParam3),
      presentationValue108 =
        presentationParam4 === void 0
          ? presentationValue107.len
          : presentationValue107.pos + presentationParam4,
      presentationValue109 = presentationHelper67();
    for (; presentationValue107.pos < presentationValue108; ) {
      let presentationValue110 = presentationValue107.uint32();
      switch (presentationValue110 >>> 3) {
        case 1:
          if (presentationValue110 !== 10) break;
          presentationValue109.title = presentationValue107.string();
          continue;
        case 2:
          if (presentationValue110 !== 18) break;
          presentationValue109.categories.push(presentationValue107.string());
          continue;
        case 3:
          if (presentationValue110 !== 26) break;
          presentationValue109.series.push(
            presentationValue46.decode(
              presentationValue107,
              presentationValue107.uint32(),
            ),
          );
          continue;
        case 4:
          if (presentationValue110 !== 34) break;
          presentationValue109.bbox = presentationValue6.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 5:
          if (presentationValue110 !== 40) break;
          presentationValue109.type = presentationValue107.int32();
          continue;
        case 6:
          if (presentationValue110 !== 48) break;
          presentationValue109.styleIndex = presentationValue107.int32();
          continue;
        case 7:
          if (presentationValue110 !== 58) break;
          presentationValue109.id = presentationValue107.string();
          continue;
        case 8:
          if (presentationValue110 !== 66) break;
          presentationValue109.xAxis = presentationValue61.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 9:
          if (presentationValue110 !== 74) break;
          presentationValue109.yAxis = presentationValue61.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 10:
          if (presentationValue110 !== 80) break;
          presentationValue109.barDirection = presentationValue107.int32();
          continue;
        case 11:
          if (presentationValue110 !== 88) break;
          presentationValue109.hasLegend = presentationValue107.bool();
          continue;
        case 12:
          if (presentationValue110 !== 98) break;
          presentationValue109.legend = presentationValue44.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 13:
          if (presentationValue110 !== 106) break;
          presentationValue109.titleTextStyle = presentationOr.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 14:
          if (presentationValue110 !== 114) break;
          presentationValue109.dataLabels = presentationValue62.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 15:
          if (presentationValue110 !== 122) break;
          presentationValue109.chartFill = presentationHn.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 16:
          if (presentationValue110 !== 130) break;
          presentationValue109.chartLine = presentationJn.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 24:
          if (presentationValue110 !== 194) break;
          presentationValue109.chartSpaceFill = presentationHn.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 25:
          if (presentationValue110 !== 202) break;
          presentationValue109.chartSpaceLine = presentationJn.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 26:
          if (presentationValue110 !== 208) break;
          presentationValue109.roundedCorners = presentationValue107.bool();
          continue;
        case 17:
          if (presentationValue110 !== 138) break;
          presentationValue109.plotAreaFill = presentationHn.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 18:
          if (presentationValue110 !== 146) break;
          presentationValue109.plotAreaLine = presentationJn.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 19:
          if (presentationValue110 !== 154) break;
          presentationValue109.pivot = presentationValue78.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 20:
          if (presentationValue110 !== 162) break;
          presentationValue109.pivotOptions = presentationValue79.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 21:
          if (presentationValue110 !== 170) break;
          presentationValue109.pivotFormats.push(
            ui.decode(presentationValue107, presentationValue107.uint32()),
          );
          continue;
        case 22:
          if (presentationValue110 !== 178) break;
          presentationValue109.mapOptions = presentationValue64.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 23:
          if (presentationValue110 !== 186) break;
          presentationValue109.style = presentationValue72.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 28:
          if (presentationValue110 !== 224) break;
          presentationValue109.displayBlanksAs = presentationValue107.int32();
          continue;
        case 29:
          if (presentationValue110 !== 232) break;
          presentationValue109.showDlblsOverMax = presentationValue107.bool();
          continue;
        case 41:
          if (presentationValue110 !== 330) break;
          presentationValue109.view3d = presentationValue81.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 50:
          if (presentationValue110 !== 402) break;
          presentationValue109.barOptions = presentationValue45.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 51:
          if (presentationValue110 !== 410) break;
          presentationValue109.lineOptions = presentationValue52.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 52:
          if (presentationValue110 !== 418) break;
          presentationValue109.areaOptions = presentationValue53.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 53:
          if (presentationValue110 !== 426) break;
          presentationValue109.pieOptions = presentationValue54.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 59:
          if (presentationValue110 !== 474) break;
          presentationValue109.ofPieOptions = _r.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 54:
          if (presentationValue110 !== 434) break;
          presentationValue109.doughnutOptions = presentationValue55.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 55:
          if (presentationValue110 !== 442) break;
          presentationValue109.scatterOptions = presentationValue56.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 56:
          if (presentationValue110 !== 450) break;
          presentationValue109.bubbleOptions = presentationValue57.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 57:
          if (presentationValue110 !== 458) break;
          presentationValue109.radarOptions = presentationValue58.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 58:
          if (presentationValue110 !== 466) break;
          presentationValue109.surfaceOptions = presentationValue59.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 60:
          if (presentationValue110 !== 482) break;
          presentationValue109.chartGroups.push(
            presentationValue43.decode(
              presentationValue107,
              presentationValue107.uint32(),
            ),
          );
          continue;
        case 63:
          if (presentationValue110 !== 506) break;
          presentationValue109.axes.push(
            presentationValue61.decode(
              presentationValue107,
              presentationValue107.uint32(),
            ),
          );
          continue;
        case 44:
          if (presentationValue110 !== 354) break;
          presentationValue109.treemapOptions = presentationValue66.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 45:
          if (presentationValue110 !== 362) break;
          presentationValue109.boxWhiskerOptions = presentationValue67.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 46:
          if (presentationValue110 !== 370) break;
          presentationValue109.histogramOptions = presentationValue68.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 47:
          if (presentationValue110 !== 378) break;
          presentationValue109.waterfallOptions = presentationValue70.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 48:
          if (presentationValue110 !== 386) break;
          presentationValue109.funnelOptions = presentationValue71.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
        case 49:
          if (presentationValue110 !== 392) break;
          presentationValue109.titlePosition = presentationValue107.int32();
          continue;
        case 62:
          if (presentationValue110 !== 496) break;
          presentationValue109.titleAlignment = presentationValue107.int32();
          continue;
        case 65:
          if (presentationValue110 !== 520) break;
          presentationValue109.titleOverlay = presentationValue107.bool();
          continue;
        case 64:
          if (presentationValue110 !== 514) break;
          presentationValue109.titleParagraphs.push(
            presentationValue41.decode(
              presentationValue107,
              presentationValue107.uint32(),
            ),
          );
          continue;
        case 61:
          if (presentationValue110 !== 490) break;
          presentationValue109.externalData = presentationValue69.decode(
            presentationValue107,
            presentationValue107.uint32(),
          );
          continue;
      }
      if ((presentationValue110 & 7) == 4 || presentationValue110 === 0) break;
      presentationValue107.skip(presentationValue110 & 7);
    }
    return presentationValue109;
  },
  create(presentationParam1195) {
    return _presentationPn.fromPartial(presentationParam1195 ?? {});
  },
  fromPartial(presentationParam2) {
    let presentationValue106 = presentationHelper67();
    return (
      (presentationValue106.title = presentationParam2.title ?? ``),
      (presentationValue106.categories =
        presentationParam2.categories?.map(
          (presentationParam1464) => presentationParam1464,
        ) || []),
      (presentationValue106.series =
        presentationParam2.series?.map((presentationParam1390) =>
          presentationValue46.fromPartial(presentationParam1390),
        ) || []),
      (presentationValue106.bbox =
        presentationParam2.bbox !== void 0 && presentationParam2.bbox !== null
          ? presentationValue6.fromPartial(presentationParam2.bbox)
          : void 0),
      (presentationValue106.type = presentationParam2.type ?? 0),
      (presentationValue106.styleIndex = presentationParam2.styleIndex ?? 0),
      (presentationValue106.id = presentationParam2.id ?? ``),
      (presentationValue106.xAxis =
        presentationParam2.xAxis !== void 0 && presentationParam2.xAxis !== null
          ? presentationValue61.fromPartial(presentationParam2.xAxis)
          : void 0),
      (presentationValue106.yAxis =
        presentationParam2.yAxis !== void 0 && presentationParam2.yAxis !== null
          ? presentationValue61.fromPartial(presentationParam2.yAxis)
          : void 0),
      (presentationValue106.barDirection =
        presentationParam2.barDirection ?? 0),
      (presentationValue106.hasLegend = presentationParam2.hasLegend ?? !1),
      (presentationValue106.legend =
        presentationParam2.legend !== void 0 &&
        presentationParam2.legend !== null
          ? presentationValue44.fromPartial(presentationParam2.legend)
          : void 0),
      (presentationValue106.titleTextStyle =
        presentationParam2.titleTextStyle !== void 0 &&
        presentationParam2.titleTextStyle !== null
          ? presentationOr.fromPartial(presentationParam2.titleTextStyle)
          : void 0),
      (presentationValue106.dataLabels =
        presentationParam2.dataLabels !== void 0 &&
        presentationParam2.dataLabels !== null
          ? presentationValue62.fromPartial(presentationParam2.dataLabels)
          : void 0),
      (presentationValue106.chartFill =
        presentationParam2.chartFill !== void 0 &&
        presentationParam2.chartFill !== null
          ? presentationHn.fromPartial(presentationParam2.chartFill)
          : void 0),
      (presentationValue106.chartLine =
        presentationParam2.chartLine !== void 0 &&
        presentationParam2.chartLine !== null
          ? presentationJn.fromPartial(presentationParam2.chartLine)
          : void 0),
      (presentationValue106.chartSpaceFill =
        presentationParam2.chartSpaceFill !== void 0 &&
        presentationParam2.chartSpaceFill !== null
          ? presentationHn.fromPartial(presentationParam2.chartSpaceFill)
          : void 0),
      (presentationValue106.chartSpaceLine =
        presentationParam2.chartSpaceLine !== void 0 &&
        presentationParam2.chartSpaceLine !== null
          ? presentationJn.fromPartial(presentationParam2.chartSpaceLine)
          : void 0),
      (presentationValue106.roundedCorners =
        presentationParam2.roundedCorners ?? void 0),
      (presentationValue106.plotAreaFill =
        presentationParam2.plotAreaFill !== void 0 &&
        presentationParam2.plotAreaFill !== null
          ? presentationHn.fromPartial(presentationParam2.plotAreaFill)
          : void 0),
      (presentationValue106.plotAreaLine =
        presentationParam2.plotAreaLine !== void 0 &&
        presentationParam2.plotAreaLine !== null
          ? presentationJn.fromPartial(presentationParam2.plotAreaLine)
          : void 0),
      (presentationValue106.pivot =
        presentationParam2.pivot !== void 0 && presentationParam2.pivot !== null
          ? presentationValue78.fromPartial(presentationParam2.pivot)
          : void 0),
      (presentationValue106.pivotOptions =
        presentationParam2.pivotOptions !== void 0 &&
        presentationParam2.pivotOptions !== null
          ? presentationValue79.fromPartial(presentationParam2.pivotOptions)
          : void 0),
      (presentationValue106.pivotFormats =
        presentationParam2.pivotFormats?.map((presentationParam1391) =>
          ui.fromPartial(presentationParam1391),
        ) || []),
      (presentationValue106.mapOptions =
        presentationParam2.mapOptions !== void 0 &&
        presentationParam2.mapOptions !== null
          ? presentationValue64.fromPartial(presentationParam2.mapOptions)
          : void 0),
      (presentationValue106.style =
        presentationParam2.style !== void 0 && presentationParam2.style !== null
          ? presentationValue72.fromPartial(presentationParam2.style)
          : void 0),
      (presentationValue106.displayBlanksAs =
        presentationParam2.displayBlanksAs ?? void 0),
      (presentationValue106.showDlblsOverMax =
        presentationParam2.showDlblsOverMax ?? void 0),
      (presentationValue106.view3d =
        presentationParam2.view3d !== void 0 &&
        presentationParam2.view3d !== null
          ? presentationValue81.fromPartial(presentationParam2.view3d)
          : void 0),
      (presentationValue106.barOptions =
        presentationParam2.barOptions !== void 0 &&
        presentationParam2.barOptions !== null
          ? presentationValue45.fromPartial(presentationParam2.barOptions)
          : void 0),
      (presentationValue106.lineOptions =
        presentationParam2.lineOptions !== void 0 &&
        presentationParam2.lineOptions !== null
          ? presentationValue52.fromPartial(presentationParam2.lineOptions)
          : void 0),
      (presentationValue106.areaOptions =
        presentationParam2.areaOptions !== void 0 &&
        presentationParam2.areaOptions !== null
          ? presentationValue53.fromPartial(presentationParam2.areaOptions)
          : void 0),
      (presentationValue106.pieOptions =
        presentationParam2.pieOptions !== void 0 &&
        presentationParam2.pieOptions !== null
          ? presentationValue54.fromPartial(presentationParam2.pieOptions)
          : void 0),
      (presentationValue106.ofPieOptions =
        presentationParam2.ofPieOptions !== void 0 &&
        presentationParam2.ofPieOptions !== null
          ? _r.fromPartial(presentationParam2.ofPieOptions)
          : void 0),
      (presentationValue106.doughnutOptions =
        presentationParam2.doughnutOptions !== void 0 &&
        presentationParam2.doughnutOptions !== null
          ? presentationValue55.fromPartial(presentationParam2.doughnutOptions)
          : void 0),
      (presentationValue106.scatterOptions =
        presentationParam2.scatterOptions !== void 0 &&
        presentationParam2.scatterOptions !== null
          ? presentationValue56.fromPartial(presentationParam2.scatterOptions)
          : void 0),
      (presentationValue106.bubbleOptions =
        presentationParam2.bubbleOptions !== void 0 &&
        presentationParam2.bubbleOptions !== null
          ? presentationValue57.fromPartial(presentationParam2.bubbleOptions)
          : void 0),
      (presentationValue106.radarOptions =
        presentationParam2.radarOptions !== void 0 &&
        presentationParam2.radarOptions !== null
          ? presentationValue58.fromPartial(presentationParam2.radarOptions)
          : void 0),
      (presentationValue106.surfaceOptions =
        presentationParam2.surfaceOptions !== void 0 &&
        presentationParam2.surfaceOptions !== null
          ? presentationValue59.fromPartial(presentationParam2.surfaceOptions)
          : void 0),
      (presentationValue106.chartGroups =
        presentationParam2.chartGroups?.map((presentationParam1392) =>
          presentationValue43.fromPartial(presentationParam1392),
        ) || []),
      (presentationValue106.axes =
        presentationParam2.axes?.map((presentationParam1427) =>
          presentationValue61.fromPartial(presentationParam1427),
        ) || []),
      (presentationValue106.treemapOptions =
        presentationParam2.treemapOptions !== void 0 &&
        presentationParam2.treemapOptions !== null
          ? presentationValue66.fromPartial(presentationParam2.treemapOptions)
          : void 0),
      (presentationValue106.boxWhiskerOptions =
        presentationParam2.boxWhiskerOptions !== void 0 &&
        presentationParam2.boxWhiskerOptions !== null
          ? presentationValue67.fromPartial(
              presentationParam2.boxWhiskerOptions,
            )
          : void 0),
      (presentationValue106.histogramOptions =
        presentationParam2.histogramOptions !== void 0 &&
        presentationParam2.histogramOptions !== null
          ? presentationValue68.fromPartial(presentationParam2.histogramOptions)
          : void 0),
      (presentationValue106.waterfallOptions =
        presentationParam2.waterfallOptions !== void 0 &&
        presentationParam2.waterfallOptions !== null
          ? presentationValue70.fromPartial(presentationParam2.waterfallOptions)
          : void 0),
      (presentationValue106.funnelOptions =
        presentationParam2.funnelOptions !== void 0 &&
        presentationParam2.funnelOptions !== null
          ? presentationValue71.fromPartial(presentationParam2.funnelOptions)
          : void 0),
      (presentationValue106.titlePosition =
        presentationParam2.titlePosition ?? void 0),
      (presentationValue106.titleAlignment =
        presentationParam2.titleAlignment ?? void 0),
      (presentationValue106.titleOverlay =
        presentationParam2.titleOverlay ?? void 0),
      (presentationValue106.titleParagraphs =
        presentationParam2.titleParagraphs?.map((presentationParam1393) =>
          presentationValue41.fromPartial(presentationParam1393),
        ) || []),
      (presentationValue106.externalData =
        presentationParam2.externalData !== void 0 &&
        presentationParam2.externalData !== null
          ? presentationValue69.fromPartial(presentationParam2.externalData)
          : void 0),
      presentationValue106
    );
  },
};
function presentationHelper68() {
  return {
    runs: [],
    textStyle: void 0,
    paragraphStyle: void 0,
  };
}
var presentationValue41 = {
  encode(presentationParam701, presentationParam702 = new presentationPr()) {
    for (let presentationValue1300 of presentationParam701.runs)
      presentationValue42
        .encode(presentationValue1300, presentationParam702.uint32(10).fork())
        .join();
    return (
      presentationParam701.textStyle !== void 0 &&
        presentationOr
          .encode(
            presentationParam701.textStyle,
            presentationParam702.uint32(18).fork(),
          )
          .join(),
      presentationParam701.paragraphStyle !== void 0 &&
        presentationValue25
          .encode(
            presentationParam701.paragraphStyle,
            presentationParam702.uint32(26).fork(),
          )
          .join(),
      presentationParam702
    );
  },
  decode(presentationParam399, presentationParam400) {
    let presentationValue547 =
        presentationParam399 instanceof presentationFr
          ? presentationParam399
          : new presentationFr(presentationParam399),
      presentationValue548 =
        presentationParam400 === void 0
          ? presentationValue547.len
          : presentationValue547.pos + presentationParam400,
      presentationValue549 = presentationHelper68();
    for (; presentationValue547.pos < presentationValue548; ) {
      let presentationValue805 = presentationValue547.uint32();
      switch (presentationValue805 >>> 3) {
        case 1:
          if (presentationValue805 !== 10) break;
          presentationValue549.runs.push(
            presentationValue42.decode(
              presentationValue547,
              presentationValue547.uint32(),
            ),
          );
          continue;
        case 2:
          if (presentationValue805 !== 18) break;
          presentationValue549.textStyle = presentationOr.decode(
            presentationValue547,
            presentationValue547.uint32(),
          );
          continue;
        case 3:
          if (presentationValue805 !== 26) break;
          presentationValue549.paragraphStyle = presentationValue25.decode(
            presentationValue547,
            presentationValue547.uint32(),
          );
          continue;
      }
      if ((presentationValue805 & 7) == 4 || presentationValue805 === 0) break;
      presentationValue547.skip(presentationValue805 & 7);
    }
    return presentationValue549;
  },
  create(presentationParam1196) {
    return presentationValue41.fromPartial(presentationParam1196 ?? {});
  },
  fromPartial(presentationParam626) {
    let presentationValue827 = presentationHelper68();
    return (
      (presentationValue827.runs =
        presentationParam626.runs?.map((presentationParam1394) =>
          presentationValue42.fromPartial(presentationParam1394),
        ) || []),
      (presentationValue827.textStyle =
        presentationParam626.textStyle !== void 0 &&
        presentationParam626.textStyle !== null
          ? presentationOr.fromPartial(presentationParam626.textStyle)
          : void 0),
      (presentationValue827.paragraphStyle =
        presentationParam626.paragraphStyle !== void 0 &&
        presentationParam626.paragraphStyle !== null
          ? presentationValue25.fromPartial(presentationParam626.paragraphStyle)
          : void 0),
      presentationValue827
    );
  },
};
function presentationHelper69() {
  return {
    text: ``,
    textStyle: void 0,
  };
}
var presentationValue42 = {
  encode(presentationParam941, presentationParam942 = new presentationPr()) {
    return (
      presentationParam941.text !== `` &&
        presentationParam942.uint32(10).string(presentationParam941.text),
      presentationParam941.textStyle !== void 0 &&
        presentationOr
          .encode(
            presentationParam941.textStyle,
            presentationParam942.uint32(18).fork(),
          )
          .join(),
      presentationParam942
    );
  },
  decode(presentationParam573, presentationParam574) {
    let presentationValue751 =
        presentationParam573 instanceof presentationFr
          ? presentationParam573
          : new presentationFr(presentationParam573),
      presentationValue752 =
        presentationParam574 === void 0
          ? presentationValue751.len
          : presentationValue751.pos + presentationParam574,
      presentationValue753 = presentationHelper69();
    for (; presentationValue751.pos < presentationValue752; ) {
      let presentationValue1011 = presentationValue751.uint32();
      switch (presentationValue1011 >>> 3) {
        case 1:
          if (presentationValue1011 !== 10) break;
          presentationValue753.text = presentationValue751.string();
          continue;
        case 2:
          if (presentationValue1011 !== 18) break;
          presentationValue753.textStyle = presentationOr.decode(
            presentationValue751,
            presentationValue751.uint32(),
          );
          continue;
      }
      if ((presentationValue1011 & 7) == 4 || presentationValue1011 === 0)
        break;
      presentationValue751.skip(presentationValue1011 & 7);
    }
    return presentationValue753;
  },
  create(presentationParam1197) {
    return presentationValue42.fromPartial(presentationParam1197 ?? {});
  },
  fromPartial(presentationParam936) {
    let presentationValue1079 = presentationHelper69();
    return (
      (presentationValue1079.text = presentationParam936.text ?? ``),
      (presentationValue1079.textStyle =
        presentationParam936.textStyle !== void 0 &&
        presentationParam936.textStyle !== null
          ? presentationOr.fromPartial(presentationParam936.textStyle)
          : void 0),
      presentationValue1079
    );
  },
};
function presentationHelper70() {
  return {
    type: 0,
    series: [],
    dataLabels: void 0,
    barOptions: void 0,
    lineOptions: void 0,
    areaOptions: void 0,
    scatterOptions: void 0,
    bubbleOptions: void 0,
    radarOptions: void 0,
    axisIds: [],
  };
}
var presentationValue43 = {
  encode(presentationParam115, presentationParam116 = new presentationPr()) {
    presentationParam115.type !== 0 &&
      presentationParam116.uint32(8).int32(presentationParam115.type);
    for (let presentationValue1284 of presentationParam115.series)
      presentationValue46
        .encode(presentationValue1284, presentationParam116.uint32(18).fork())
        .join();
    (presentationParam115.dataLabels !== void 0 &&
      presentationValue62
        .encode(
          presentationParam115.dataLabels,
          presentationParam116.uint32(26).fork(),
        )
        .join(),
      presentationParam115.barOptions !== void 0 &&
        presentationValue45
          .encode(
            presentationParam115.barOptions,
            presentationParam116.uint32(34).fork(),
          )
          .join(),
      presentationParam115.lineOptions !== void 0 &&
        presentationValue52
          .encode(
            presentationParam115.lineOptions,
            presentationParam116.uint32(42).fork(),
          )
          .join(),
      presentationParam115.areaOptions !== void 0 &&
        presentationValue53
          .encode(
            presentationParam115.areaOptions,
            presentationParam116.uint32(50).fork(),
          )
          .join(),
      presentationParam115.scatterOptions !== void 0 &&
        presentationValue56
          .encode(
            presentationParam115.scatterOptions,
            presentationParam116.uint32(66).fork(),
          )
          .join(),
      presentationParam115.bubbleOptions !== void 0 &&
        presentationValue57
          .encode(
            presentationParam115.bubbleOptions,
            presentationParam116.uint32(74).fork(),
          )
          .join(),
      presentationParam115.radarOptions !== void 0 &&
        presentationValue58
          .encode(
            presentationParam115.radarOptions,
            presentationParam116.uint32(82).fork(),
          )
          .join(),
      presentationParam116.uint32(90).fork());
    for (let presentationValue1339 of presentationParam115.axisIds)
      presentationParam116.uint32(presentationValue1339);
    return (presentationParam116.join(), presentationParam116);
  },
  decode(presentationParam61, presentationParam62) {
    let presentationValue169 =
        presentationParam61 instanceof presentationFr
          ? presentationParam61
          : new presentationFr(presentationParam61),
      presentationValue170 =
        presentationParam62 === void 0
          ? presentationValue169.len
          : presentationValue169.pos + presentationParam62,
      presentationValue171 = presentationHelper70();
    for (; presentationValue169.pos < presentationValue170; ) {
      let presentationValue194 = presentationValue169.uint32();
      switch (presentationValue194 >>> 3) {
        case 1:
          if (presentationValue194 !== 8) break;
          presentationValue171.type = presentationValue169.int32();
          continue;
        case 2:
          if (presentationValue194 !== 18) break;
          presentationValue171.series.push(
            presentationValue46.decode(
              presentationValue169,
              presentationValue169.uint32(),
            ),
          );
          continue;
        case 3:
          if (presentationValue194 !== 26) break;
          presentationValue171.dataLabels = presentationValue62.decode(
            presentationValue169,
            presentationValue169.uint32(),
          );
          continue;
        case 4:
          if (presentationValue194 !== 34) break;
          presentationValue171.barOptions = presentationValue45.decode(
            presentationValue169,
            presentationValue169.uint32(),
          );
          continue;
        case 5:
          if (presentationValue194 !== 42) break;
          presentationValue171.lineOptions = presentationValue52.decode(
            presentationValue169,
            presentationValue169.uint32(),
          );
          continue;
        case 6:
          if (presentationValue194 !== 50) break;
          presentationValue171.areaOptions = presentationValue53.decode(
            presentationValue169,
            presentationValue169.uint32(),
          );
          continue;
        case 8:
          if (presentationValue194 !== 66) break;
          presentationValue171.scatterOptions = presentationValue56.decode(
            presentationValue169,
            presentationValue169.uint32(),
          );
          continue;
        case 9:
          if (presentationValue194 !== 74) break;
          presentationValue171.bubbleOptions = presentationValue57.decode(
            presentationValue169,
            presentationValue169.uint32(),
          );
          continue;
        case 10:
          if (presentationValue194 !== 82) break;
          presentationValue171.radarOptions = presentationValue58.decode(
            presentationValue169,
            presentationValue169.uint32(),
          );
          continue;
        case 11:
          if (presentationValue194 === 88) {
            presentationValue171.axisIds.push(presentationValue169.uint32());
            continue;
          }
          if (presentationValue194 === 90) {
            let presentationValue1207 =
              presentationValue169.uint32() + presentationValue169.pos;
            for (; presentationValue169.pos < presentationValue1207; )
              presentationValue171.axisIds.push(presentationValue169.uint32());
            continue;
          }
          break;
      }
      if ((presentationValue194 & 7) == 4 || presentationValue194 === 0) break;
      presentationValue169.skip(presentationValue194 & 7);
    }
    return presentationValue171;
  },
  create(presentationParam1198) {
    return presentationValue43.fromPartial(presentationParam1198 ?? {});
  },
  fromPartial(presentationParam85) {
    let presentationValue198 = presentationHelper70();
    return (
      (presentationValue198.type = presentationParam85.type ?? 0),
      (presentationValue198.series =
        presentationParam85.series?.map((presentationParam1395) =>
          presentationValue46.fromPartial(presentationParam1395),
        ) || []),
      (presentationValue198.dataLabels =
        presentationParam85.dataLabels !== void 0 &&
        presentationParam85.dataLabels !== null
          ? presentationValue62.fromPartial(presentationParam85.dataLabels)
          : void 0),
      (presentationValue198.barOptions =
        presentationParam85.barOptions !== void 0 &&
        presentationParam85.barOptions !== null
          ? presentationValue45.fromPartial(presentationParam85.barOptions)
          : void 0),
      (presentationValue198.lineOptions =
        presentationParam85.lineOptions !== void 0 &&
        presentationParam85.lineOptions !== null
          ? presentationValue52.fromPartial(presentationParam85.lineOptions)
          : void 0),
      (presentationValue198.areaOptions =
        presentationParam85.areaOptions !== void 0 &&
        presentationParam85.areaOptions !== null
          ? presentationValue53.fromPartial(presentationParam85.areaOptions)
          : void 0),
      (presentationValue198.scatterOptions =
        presentationParam85.scatterOptions !== void 0 &&
        presentationParam85.scatterOptions !== null
          ? presentationValue56.fromPartial(presentationParam85.scatterOptions)
          : void 0),
      (presentationValue198.bubbleOptions =
        presentationParam85.bubbleOptions !== void 0 &&
        presentationParam85.bubbleOptions !== null
          ? presentationValue57.fromPartial(presentationParam85.bubbleOptions)
          : void 0),
      (presentationValue198.radarOptions =
        presentationParam85.radarOptions !== void 0 &&
        presentationParam85.radarOptions !== null
          ? presentationValue58.fromPartial(presentationParam85.radarOptions)
          : void 0),
      (presentationValue198.axisIds =
        presentationParam85.axisIds?.map(
          (presentationParam1465) => presentationParam1465,
        ) || []),
      presentationValue198
    );
  },
};
function presentationHelper71() {
  return {
    position: 0,
    overlay: void 0,
    textStyle: void 0,
    fill: void 0,
    stroke: void 0,
  };
}
var presentationValue44 = {
  encode(presentationParam504, presentationParam505 = new presentationPr()) {
    return (
      presentationParam504.position !== 0 &&
        presentationParam505.uint32(8).int32(presentationParam504.position),
      presentationParam504.overlay !== void 0 &&
        presentationParam505.uint32(16).bool(presentationParam504.overlay),
      presentationParam504.textStyle !== void 0 &&
        presentationOr
          .encode(
            presentationParam504.textStyle,
            presentationParam505.uint32(26).fork(),
          )
          .join(),
      presentationParam504.fill !== void 0 &&
        presentationHn
          .encode(
            presentationParam504.fill,
            presentationParam505.uint32(34).fork(),
          )
          .join(),
      presentationParam504.stroke !== void 0 &&
        presentationJn
          .encode(
            presentationParam504.stroke,
            presentationParam505.uint32(42).fork(),
          )
          .join(),
      presentationParam505
    );
  },
  decode(presentationParam278, presentationParam279) {
    let presentationValue410 =
        presentationParam278 instanceof presentationFr
          ? presentationParam278
          : new presentationFr(presentationParam278),
      presentationValue411 =
        presentationParam279 === void 0
          ? presentationValue410.len
          : presentationValue410.pos + presentationParam279,
      presentationValue412 = presentationHelper71();
    for (; presentationValue410.pos < presentationValue411; ) {
      let presentationValue578 = presentationValue410.uint32();
      switch (presentationValue578 >>> 3) {
        case 1:
          if (presentationValue578 !== 8) break;
          presentationValue412.position = presentationValue410.int32();
          continue;
        case 2:
          if (presentationValue578 !== 16) break;
          presentationValue412.overlay = presentationValue410.bool();
          continue;
        case 3:
          if (presentationValue578 !== 26) break;
          presentationValue412.textStyle = presentationOr.decode(
            presentationValue410,
            presentationValue410.uint32(),
          );
          continue;
        case 4:
          if (presentationValue578 !== 34) break;
          presentationValue412.fill = presentationHn.decode(
            presentationValue410,
            presentationValue410.uint32(),
          );
          continue;
        case 5:
          if (presentationValue578 !== 42) break;
          presentationValue412.stroke = presentationJn.decode(
            presentationValue410,
            presentationValue410.uint32(),
          );
          continue;
      }
      if ((presentationValue578 & 7) == 4 || presentationValue578 === 0) break;
      presentationValue410.skip(presentationValue578 & 7);
    }
    return presentationValue412;
  },
  create(presentationParam1199) {
    return presentationValue44.fromPartial(presentationParam1199 ?? {});
  },
  fromPartial(presentationParam510) {
    let presentationValue683 = presentationHelper71();
    return (
      (presentationValue683.position = presentationParam510.position ?? 0),
      (presentationValue683.overlay = presentationParam510.overlay ?? void 0),
      (presentationValue683.textStyle =
        presentationParam510.textStyle !== void 0 &&
        presentationParam510.textStyle !== null
          ? presentationOr.fromPartial(presentationParam510.textStyle)
          : void 0),
      (presentationValue683.fill =
        presentationParam510.fill !== void 0 &&
        presentationParam510.fill !== null
          ? presentationHn.fromPartial(presentationParam510.fill)
          : void 0),
      (presentationValue683.stroke =
        presentationParam510.stroke !== void 0 &&
        presentationParam510.stroke !== null
          ? presentationJn.fromPartial(presentationParam510.stroke)
          : void 0),
      presentationValue683
    );
  },
};
function presentationHelper72() {
  return {
    direction: void 0,
    grouping: void 0,
    varyColors: void 0,
    gapWidth: void 0,
    overlap: void 0,
    gapDepth: void 0,
    bar3dShape: void 0,
  };
}
var presentationValue45 = {
  encode(presentationParam350, presentationParam351 = new presentationPr()) {
    return (
      presentationParam350.direction !== void 0 &&
        presentationParam351.uint32(8).int32(presentationParam350.direction),
      presentationParam350.grouping !== void 0 &&
        presentationParam351.uint32(16).int32(presentationParam350.grouping),
      presentationParam350.varyColors !== void 0 &&
        presentationParam351.uint32(24).bool(presentationParam350.varyColors),
      presentationParam350.gapWidth !== void 0 &&
        presentationParam351.uint32(32).uint32(presentationParam350.gapWidth),
      presentationParam350.overlap !== void 0 &&
        presentationParam351.uint32(40).sint32(presentationParam350.overlap),
      presentationParam350.gapDepth !== void 0 &&
        presentationParam351.uint32(48).uint32(presentationParam350.gapDepth),
      presentationParam350.bar3dShape !== void 0 &&
        presentationParam351.uint32(56).int32(presentationParam350.bar3dShape),
      presentationParam351
    );
  },
  decode(presentationParam208, presentationParam209) {
    let presentationValue330 =
        presentationParam208 instanceof presentationFr
          ? presentationParam208
          : new presentationFr(presentationParam208),
      presentationValue331 =
        presentationParam209 === void 0
          ? presentationValue330.len
          : presentationValue330.pos + presentationParam209,
      presentationValue332 = presentationHelper72();
    for (; presentationValue330.pos < presentationValue331; ) {
      let presentationValue438 = presentationValue330.uint32();
      switch (presentationValue438 >>> 3) {
        case 1:
          if (presentationValue438 !== 8) break;
          presentationValue332.direction = presentationValue330.int32();
          continue;
        case 2:
          if (presentationValue438 !== 16) break;
          presentationValue332.grouping = presentationValue330.int32();
          continue;
        case 3:
          if (presentationValue438 !== 24) break;
          presentationValue332.varyColors = presentationValue330.bool();
          continue;
        case 4:
          if (presentationValue438 !== 32) break;
          presentationValue332.gapWidth = presentationValue330.uint32();
          continue;
        case 5:
          if (presentationValue438 !== 40) break;
          presentationValue332.overlap = presentationValue330.sint32();
          continue;
        case 6:
          if (presentationValue438 !== 48) break;
          presentationValue332.gapDepth = presentationValue330.uint32();
          continue;
        case 7:
          if (presentationValue438 !== 56) break;
          presentationValue332.bar3dShape = presentationValue330.int32();
          continue;
      }
      if ((presentationValue438 & 7) == 4 || presentationValue438 === 0) break;
      presentationValue330.skip(presentationValue438 & 7);
    }
    return presentationValue332;
  },
  create(presentationParam1200) {
    return presentationValue45.fromPartial(presentationParam1200 ?? {});
  },
  fromPartial(presentationParam663) {
    let presentationValue871 = presentationHelper72();
    return (
      (presentationValue871.direction =
        presentationParam663.direction ?? void 0),
      (presentationValue871.grouping = presentationParam663.grouping ?? void 0),
      (presentationValue871.varyColors =
        presentationParam663.varyColors ?? void 0),
      (presentationValue871.gapWidth = presentationParam663.gapWidth ?? void 0),
      (presentationValue871.overlap = presentationParam663.overlap ?? void 0),
      (presentationValue871.gapDepth = presentationParam663.gapDepth ?? void 0),
      (presentationValue871.bar3dShape =
        presentationParam663.bar3dShape ?? void 0),
      presentationValue871
    );
  },
};
function presentationHelper73() {
  return {
    id: void 0,
    name: ``,
    values: [],
    formula: ``,
    stringCache: ``,
    categories: [],
    categoryFormula: ``,
    fill: void 0,
    stroke: void 0,
    points: [],
    valuesFormatCode: void 0,
    categoryFormatCode: void 0,
    invertIfNegative: void 0,
    uniqueId: void 0,
    explosion: void 0,
    marker: void 0,
    xValues: [],
    xFormula: ``,
    xValuesFormatCode: void 0,
    bubbleSizes: [],
    bubbleSizeFormula: ``,
    categoryPaths: [],
    dataLabels: void 0,
    dataLabelOverrides: [],
    trendlines: [],
    errorBars: [],
    ownerIndex: void 0,
    axisIds: [],
    categoryIndices: [],
    categoryPointCount: void 0,
    valueIndices: [],
    valuePointCount: void 0,
  };
}
var presentationValue46 = {
  encode(presentationParam14, presentationParam15 = new presentationPr()) {
    (presentationParam14.id !== void 0 &&
      presentationParam15.uint32(66).string(presentationParam14.id),
      presentationParam14.name !== `` &&
        presentationParam15.uint32(10).string(presentationParam14.name),
      presentationParam15.uint32(18).fork());
    for (let presentationValue1342 of presentationParam14.values)
      presentationParam15.double(presentationValue1342);
    (presentationParam15.join(),
      presentationParam14.formula !== `` &&
        presentationParam15.uint32(26).string(presentationParam14.formula),
      presentationParam14.stringCache !== `` &&
        presentationParam15.uint32(34).string(presentationParam14.stringCache));
    for (let presentationValue1322 of presentationParam14.categories)
      presentationParam15.uint32(42).string(presentationValue1322);
    (presentationParam14.categoryFormula !== `` &&
      presentationParam15
        .uint32(50)
        .string(presentationParam14.categoryFormula),
      presentationParam14.fill !== void 0 &&
        presentationHn
          .encode(
            presentationParam14.fill,
            presentationParam15.uint32(58).fork(),
          )
          .join(),
      presentationParam14.stroke !== void 0 &&
        presentationJn
          .encode(
            presentationParam14.stroke,
            presentationParam15.uint32(74).fork(),
          )
          .join());
    for (let presentationValue1285 of presentationParam14.points)
      presentationValue60
        .encode(presentationValue1285, presentationParam15.uint32(82).fork())
        .join();
    (presentationParam14.valuesFormatCode !== void 0 &&
      presentationParam15
        .uint32(90)
        .string(presentationParam14.valuesFormatCode),
      presentationParam14.categoryFormatCode !== void 0 &&
        presentationParam15
          .uint32(98)
          .string(presentationParam14.categoryFormatCode),
      presentationParam14.invertIfNegative !== void 0 &&
        presentationParam15
          .uint32(104)
          .bool(presentationParam14.invertIfNegative),
      presentationParam14.uniqueId !== void 0 &&
        presentationParam15.uint32(114).string(presentationParam14.uniqueId),
      presentationParam14.explosion !== void 0 &&
        presentationParam15.uint32(120).uint32(presentationParam14.explosion),
      presentationParam14.marker !== void 0 &&
        presentationValue80
          .encode(
            presentationParam14.marker,
            presentationParam15.uint32(130).fork(),
          )
          .join(),
      presentationParam15.uint32(138).fork());
    for (let presentationValue1340 of presentationParam14.xValues)
      presentationParam15.double(presentationValue1340);
    (presentationParam15.join(),
      presentationParam14.xFormula !== `` &&
        presentationParam15.uint32(146).string(presentationParam14.xFormula),
      presentationParam14.xValuesFormatCode !== void 0 &&
        presentationParam15
          .uint32(154)
          .string(presentationParam14.xValuesFormatCode),
      presentationParam15.uint32(162).fork());
    for (let presentationValue1337 of presentationParam14.bubbleSizes)
      presentationParam15.double(presentationValue1337);
    (presentationParam15.join(),
      presentationParam14.bubbleSizeFormula !== `` &&
        presentationParam15
          .uint32(170)
          .string(presentationParam14.bubbleSizeFormula));
    for (let presentationValue1227 of presentationParam14.categoryPaths)
      presentationValue65
        .encode(presentationValue1227, presentationParam15.uint32(178).fork())
        .join();
    presentationParam14.dataLabels !== void 0 &&
      presentationValue62
        .encode(
          presentationParam14.dataLabels,
          presentationParam15.uint32(186).fork(),
        )
        .join();
    for (let presentationValue1203 of presentationParam14.dataLabelOverrides)
      presentationValue63
        .encode(presentationValue1203, presentationParam15.uint32(194).fork())
        .join();
    for (let presentationValue1242 of presentationParam14.trendlines)
      presentationValue51
        .encode(presentationValue1242, presentationParam15.uint32(202).fork())
        .join();
    for (let presentationValue1253 of presentationParam14.errorBars)
      $n.encode(
        presentationValue1253,
        presentationParam15.uint32(210).fork(),
      ).join();
    (presentationParam14.ownerIndex !== void 0 &&
      presentationParam15.uint32(216).uint32(presentationParam14.ownerIndex),
      presentationParam15.uint32(226).fork());
    for (let presentationValue1341 of presentationParam14.axisIds)
      presentationParam15.uint32(presentationValue1341);
    (presentationParam15.join(), presentationParam15.uint32(234).fork());
    for (let presentationValue1332 of presentationParam14.categoryIndices)
      presentationParam15.uint32(presentationValue1332);
    (presentationParam15.join(),
      presentationParam14.categoryPointCount !== void 0 &&
        presentationParam15
          .uint32(240)
          .uint32(presentationParam14.categoryPointCount),
      presentationParam15.uint32(250).fork());
    for (let presentationValue1336 of presentationParam14.valueIndices)
      presentationParam15.uint32(presentationValue1336);
    return (
      presentationParam15.join(),
      presentationParam14.valuePointCount !== void 0 &&
        presentationParam15
          .uint32(256)
          .uint32(presentationParam14.valuePointCount),
      presentationParam15
    );
  },
  decode(presentationParam12, presentationParam13) {
    let presentationValue116 =
        presentationParam12 instanceof presentationFr
          ? presentationParam12
          : new presentationFr(presentationParam12),
      presentationValue117 =
        presentationParam13 === void 0
          ? presentationValue116.len
          : presentationValue116.pos + presentationParam13,
      presentationValue118 = presentationHelper73();
    for (; presentationValue116.pos < presentationValue117; ) {
      let presentationValue119 = presentationValue116.uint32();
      switch (presentationValue119 >>> 3) {
        case 8:
          if (presentationValue119 !== 66) break;
          presentationValue118.id = presentationValue116.string();
          continue;
        case 1:
          if (presentationValue119 !== 10) break;
          presentationValue118.name = presentationValue116.string();
          continue;
        case 2:
          if (presentationValue119 === 17) {
            presentationValue118.values.push(presentationValue116.double());
            continue;
          }
          if (presentationValue119 === 18) {
            let presentationValue1212 =
              presentationValue116.uint32() + presentationValue116.pos;
            for (; presentationValue116.pos < presentationValue1212; )
              presentationValue118.values.push(presentationValue116.double());
            continue;
          }
          break;
        case 3:
          if (presentationValue119 !== 26) break;
          presentationValue118.formula = presentationValue116.string();
          continue;
        case 4:
          if (presentationValue119 !== 34) break;
          presentationValue118.stringCache = presentationValue116.string();
          continue;
        case 5:
          if (presentationValue119 !== 42) break;
          presentationValue118.categories.push(presentationValue116.string());
          continue;
        case 6:
          if (presentationValue119 !== 50) break;
          presentationValue118.categoryFormula = presentationValue116.string();
          continue;
        case 7:
          if (presentationValue119 !== 58) break;
          presentationValue118.fill = presentationHn.decode(
            presentationValue116,
            presentationValue116.uint32(),
          );
          continue;
        case 9:
          if (presentationValue119 !== 74) break;
          presentationValue118.stroke = presentationJn.decode(
            presentationValue116,
            presentationValue116.uint32(),
          );
          continue;
        case 10:
          if (presentationValue119 !== 82) break;
          presentationValue118.points.push(
            presentationValue60.decode(
              presentationValue116,
              presentationValue116.uint32(),
            ),
          );
          continue;
        case 11:
          if (presentationValue119 !== 90) break;
          presentationValue118.valuesFormatCode = presentationValue116.string();
          continue;
        case 12:
          if (presentationValue119 !== 98) break;
          presentationValue118.categoryFormatCode =
            presentationValue116.string();
          continue;
        case 13:
          if (presentationValue119 !== 104) break;
          presentationValue118.invertIfNegative = presentationValue116.bool();
          continue;
        case 14:
          if (presentationValue119 !== 114) break;
          presentationValue118.uniqueId = presentationValue116.string();
          continue;
        case 15:
          if (presentationValue119 !== 120) break;
          presentationValue118.explosion = presentationValue116.uint32();
          continue;
        case 16:
          if (presentationValue119 !== 130) break;
          presentationValue118.marker = presentationValue80.decode(
            presentationValue116,
            presentationValue116.uint32(),
          );
          continue;
        case 17:
          if (presentationValue119 === 137) {
            presentationValue118.xValues.push(presentationValue116.double());
            continue;
          }
          if (presentationValue119 === 138) {
            let presentationValue1208 =
              presentationValue116.uint32() + presentationValue116.pos;
            for (; presentationValue116.pos < presentationValue1208; )
              presentationValue118.xValues.push(presentationValue116.double());
            continue;
          }
          break;
        case 18:
          if (presentationValue119 !== 146) break;
          presentationValue118.xFormula = presentationValue116.string();
          continue;
        case 19:
          if (presentationValue119 !== 154) break;
          presentationValue118.xValuesFormatCode =
            presentationValue116.string();
          continue;
        case 20:
          if (presentationValue119 === 161) {
            presentationValue118.bubbleSizes.push(
              presentationValue116.double(),
            );
            continue;
          }
          if (presentationValue119 === 162) {
            let presentationValue1195 =
              presentationValue116.uint32() + presentationValue116.pos;
            for (; presentationValue116.pos < presentationValue1195; )
              presentationValue118.bubbleSizes.push(
                presentationValue116.double(),
              );
            continue;
          }
          break;
        case 21:
          if (presentationValue119 !== 170) break;
          presentationValue118.bubbleSizeFormula =
            presentationValue116.string();
          continue;
        case 22:
          if (presentationValue119 !== 178) break;
          presentationValue118.categoryPaths.push(
            presentationValue65.decode(
              presentationValue116,
              presentationValue116.uint32(),
            ),
          );
          continue;
        case 23:
          if (presentationValue119 !== 186) break;
          presentationValue118.dataLabels = presentationValue62.decode(
            presentationValue116,
            presentationValue116.uint32(),
          );
          continue;
        case 24:
          if (presentationValue119 !== 194) break;
          presentationValue118.dataLabelOverrides.push(
            presentationValue63.decode(
              presentationValue116,
              presentationValue116.uint32(),
            ),
          );
          continue;
        case 25:
          if (presentationValue119 !== 202) break;
          presentationValue118.trendlines.push(
            presentationValue51.decode(
              presentationValue116,
              presentationValue116.uint32(),
            ),
          );
          continue;
        case 26:
          if (presentationValue119 !== 210) break;
          presentationValue118.errorBars.push(
            $n.decode(presentationValue116, presentationValue116.uint32()),
          );
          continue;
        case 27:
          if (presentationValue119 !== 216) break;
          presentationValue118.ownerIndex = presentationValue116.uint32();
          continue;
        case 28:
          if (presentationValue119 === 224) {
            presentationValue118.axisIds.push(presentationValue116.uint32());
            continue;
          }
          if (presentationValue119 === 226) {
            let presentationValue1209 =
              presentationValue116.uint32() + presentationValue116.pos;
            for (; presentationValue116.pos < presentationValue1209; )
              presentationValue118.axisIds.push(presentationValue116.uint32());
            continue;
          }
          break;
        case 29:
          if (presentationValue119 === 232) {
            presentationValue118.categoryIndices.push(
              presentationValue116.uint32(),
            );
            continue;
          }
          if (presentationValue119 === 234) {
            let presentationValue1187 =
              presentationValue116.uint32() + presentationValue116.pos;
            for (; presentationValue116.pos < presentationValue1187; )
              presentationValue118.categoryIndices.push(
                presentationValue116.uint32(),
              );
            continue;
          }
          break;
        case 30:
          if (presentationValue119 !== 240) break;
          presentationValue118.categoryPointCount =
            presentationValue116.uint32();
          continue;
        case 31:
          if (presentationValue119 === 248) {
            presentationValue118.valueIndices.push(
              presentationValue116.uint32(),
            );
            continue;
          }
          if (presentationValue119 === 250) {
            let presentationValue1194 =
              presentationValue116.uint32() + presentationValue116.pos;
            for (; presentationValue116.pos < presentationValue1194; )
              presentationValue118.valueIndices.push(
                presentationValue116.uint32(),
              );
            continue;
          }
          break;
        case 32:
          if (presentationValue119 !== 256) break;
          presentationValue118.valuePointCount = presentationValue116.uint32();
          continue;
      }
      if ((presentationValue119 & 7) == 4 || presentationValue119 === 0) break;
      presentationValue116.skip(presentationValue119 & 7);
    }
    return presentationValue118;
  },
  create(presentationParam1201) {
    return presentationValue46.fromPartial(presentationParam1201 ?? {});
  },
  fromPartial(presentationParam24) {
    let presentationValue130 = presentationHelper73();
    return (
      (presentationValue130.id = presentationParam24.id ?? void 0),
      (presentationValue130.name = presentationParam24.name ?? ``),
      (presentationValue130.values =
        presentationParam24.values?.map(
          (presentationParam1466) => presentationParam1466,
        ) || []),
      (presentationValue130.formula = presentationParam24.formula ?? ``),
      (presentationValue130.stringCache =
        presentationParam24.stringCache ?? ``),
      (presentationValue130.categories =
        presentationParam24.categories?.map(
          (presentationParam1467) => presentationParam1467,
        ) || []),
      (presentationValue130.categoryFormula =
        presentationParam24.categoryFormula ?? ``),
      (presentationValue130.fill =
        presentationParam24.fill !== void 0 && presentationParam24.fill !== null
          ? presentationHn.fromPartial(presentationParam24.fill)
          : void 0),
      (presentationValue130.stroke =
        presentationParam24.stroke !== void 0 &&
        presentationParam24.stroke !== null
          ? presentationJn.fromPartial(presentationParam24.stroke)
          : void 0),
      (presentationValue130.points =
        presentationParam24.points?.map((presentationParam1396) =>
          presentationValue60.fromPartial(presentationParam1396),
        ) || []),
      (presentationValue130.valuesFormatCode =
        presentationParam24.valuesFormatCode ?? void 0),
      (presentationValue130.categoryFormatCode =
        presentationParam24.categoryFormatCode ?? void 0),
      (presentationValue130.invertIfNegative =
        presentationParam24.invertIfNegative ?? void 0),
      (presentationValue130.uniqueId = presentationParam24.uniqueId ?? void 0),
      (presentationValue130.explosion =
        presentationParam24.explosion ?? void 0),
      (presentationValue130.marker =
        presentationParam24.marker !== void 0 &&
        presentationParam24.marker !== null
          ? presentationValue80.fromPartial(presentationParam24.marker)
          : void 0),
      (presentationValue130.xValues =
        presentationParam24.xValues?.map(
          (presentationParam1468) => presentationParam1468,
        ) || []),
      (presentationValue130.xFormula = presentationParam24.xFormula ?? ``),
      (presentationValue130.xValuesFormatCode =
        presentationParam24.xValuesFormatCode ?? void 0),
      (presentationValue130.bubbleSizes =
        presentationParam24.bubbleSizes?.map(
          (presentationParam1469) => presentationParam1469,
        ) || []),
      (presentationValue130.bubbleSizeFormula =
        presentationParam24.bubbleSizeFormula ?? ``),
      (presentationValue130.categoryPaths =
        presentationParam24.categoryPaths?.map((presentationParam1397) =>
          presentationValue65.fromPartial(presentationParam1397),
        ) || []),
      (presentationValue130.dataLabels =
        presentationParam24.dataLabels !== void 0 &&
        presentationParam24.dataLabels !== null
          ? presentationValue62.fromPartial(presentationParam24.dataLabels)
          : void 0),
      (presentationValue130.dataLabelOverrides =
        presentationParam24.dataLabelOverrides?.map((presentationParam1398) =>
          presentationValue63.fromPartial(presentationParam1398),
        ) || []),
      (presentationValue130.trendlines =
        presentationParam24.trendlines?.map((presentationParam1399) =>
          presentationValue51.fromPartial(presentationParam1399),
        ) || []),
      (presentationValue130.errorBars =
        presentationParam24.errorBars?.map((presentationParam1400) =>
          $n.fromPartial(presentationParam1400),
        ) || []),
      (presentationValue130.ownerIndex =
        presentationParam24.ownerIndex ?? void 0),
      (presentationValue130.axisIds =
        presentationParam24.axisIds?.map(
          (presentationParam1470) => presentationParam1470,
        ) || []),
      (presentationValue130.categoryIndices =
        presentationParam24.categoryIndices?.map(
          (presentationParam1471) => presentationParam1471,
        ) || []),
      (presentationValue130.categoryPointCount =
        presentationParam24.categoryPointCount ?? void 0),
      (presentationValue130.valueIndices =
        presentationParam24.valueIndices?.map(
          (presentationParam1472) => presentationParam1472,
        ) || []),
      (presentationValue130.valuePointCount =
        presentationParam24.valuePointCount ?? void 0),
      presentationValue130
    );
  },
};
function presentationHelper74() {
  return {
    direction: 0,
    type: 0,
    valueType: 0,
    noEndCap: void 0,
    value: void 0,
    fill: void 0,
    stroke: void 0,
    plus: void 0,
    minus: void 0,
  };
}
var $n = {
  encode(presentationParam232, presentationParam233 = new presentationPr()) {
    return (
      presentationParam232.direction !== 0 &&
        presentationParam233.uint32(8).int32(presentationParam232.direction),
      presentationParam232.type !== 0 &&
        presentationParam233.uint32(16).int32(presentationParam232.type),
      presentationParam232.valueType !== 0 &&
        presentationParam233.uint32(24).int32(presentationParam232.valueType),
      presentationParam232.noEndCap !== void 0 &&
        presentationParam233.uint32(32).bool(presentationParam232.noEndCap),
      presentationParam232.value !== void 0 &&
        presentationParam233.uint32(41).double(presentationParam232.value),
      presentationParam232.fill !== void 0 &&
        presentationHn
          .encode(
            presentationParam232.fill,
            presentationParam233.uint32(50).fork(),
          )
          .join(),
      presentationParam232.stroke !== void 0 &&
        presentationJn
          .encode(
            presentationParam232.stroke,
            presentationParam233.uint32(58).fork(),
          )
          .join(),
      presentationParam232.plus !== void 0 &&
        presentationValue47
          .encode(
            presentationParam232.plus,
            presentationParam233.uint32(66).fork(),
          )
          .join(),
      presentationParam232.minus !== void 0 &&
        presentationValue47
          .encode(
            presentationParam232.minus,
            presentationParam233.uint32(74).fork(),
          )
          .join(),
      presentationParam233
    );
  },
  decode(presentationParam142, presentationParam143) {
    let presentationValue263 =
        presentationParam142 instanceof presentationFr
          ? presentationParam142
          : new presentationFr(presentationParam142),
      presentationValue264 =
        presentationParam143 === void 0
          ? presentationValue263.len
          : presentationValue263.pos + presentationParam143,
      presentationValue265 = presentationHelper74();
    for (; presentationValue263.pos < presentationValue264; ) {
      let presentationValue296 = presentationValue263.uint32();
      switch (presentationValue296 >>> 3) {
        case 1:
          if (presentationValue296 !== 8) break;
          presentationValue265.direction = presentationValue263.int32();
          continue;
        case 2:
          if (presentationValue296 !== 16) break;
          presentationValue265.type = presentationValue263.int32();
          continue;
        case 3:
          if (presentationValue296 !== 24) break;
          presentationValue265.valueType = presentationValue263.int32();
          continue;
        case 4:
          if (presentationValue296 !== 32) break;
          presentationValue265.noEndCap = presentationValue263.bool();
          continue;
        case 5:
          if (presentationValue296 !== 41) break;
          presentationValue265.value = presentationValue263.double();
          continue;
        case 6:
          if (presentationValue296 !== 50) break;
          presentationValue265.fill = presentationHn.decode(
            presentationValue263,
            presentationValue263.uint32(),
          );
          continue;
        case 7:
          if (presentationValue296 !== 58) break;
          presentationValue265.stroke = presentationJn.decode(
            presentationValue263,
            presentationValue263.uint32(),
          );
          continue;
        case 8:
          if (presentationValue296 !== 66) break;
          presentationValue265.plus = presentationValue47.decode(
            presentationValue263,
            presentationValue263.uint32(),
          );
          continue;
        case 9:
          if (presentationValue296 !== 74) break;
          presentationValue265.minus = presentationValue47.decode(
            presentationValue263,
            presentationValue263.uint32(),
          );
          continue;
      }
      if ((presentationValue296 & 7) == 4 || presentationValue296 === 0) break;
      presentationValue263.skip(presentationValue296 & 7);
    }
    return presentationValue265;
  },
  create(presentationParam1202) {
    return $n.fromPartial(presentationParam1202 ?? {});
  },
  fromPartial(presentationParam299) {
    let presentationValue441 = presentationHelper74();
    return (
      (presentationValue441.direction = presentationParam299.direction ?? 0),
      (presentationValue441.type = presentationParam299.type ?? 0),
      (presentationValue441.valueType = presentationParam299.valueType ?? 0),
      (presentationValue441.noEndCap = presentationParam299.noEndCap ?? void 0),
      (presentationValue441.value = presentationParam299.value ?? void 0),
      (presentationValue441.fill =
        presentationParam299.fill !== void 0 &&
        presentationParam299.fill !== null
          ? presentationHn.fromPartial(presentationParam299.fill)
          : void 0),
      (presentationValue441.stroke =
        presentationParam299.stroke !== void 0 &&
        presentationParam299.stroke !== null
          ? presentationJn.fromPartial(presentationParam299.stroke)
          : void 0),
      (presentationValue441.plus =
        presentationParam299.plus !== void 0 &&
        presentationParam299.plus !== null
          ? presentationValue47.fromPartial(presentationParam299.plus)
          : void 0),
      (presentationValue441.minus =
        presentationParam299.minus !== void 0 &&
        presentationParam299.minus !== null
          ? presentationValue47.fromPartial(presentationParam299.minus)
          : void 0),
      presentationValue441
    );
  },
};
function presentationHelper75() {
  return {
    values: [],
    formula: ``,
    valuesFormatCode: void 0,
  };
}
var presentationValue47 = {
  encode(presentationParam812, presentationParam813 = new presentationPr()) {
    presentationParam813.uint32(10).fork();
    for (let presentationValue1343 of presentationParam812.values)
      presentationParam813.double(presentationValue1343);
    return (
      presentationParam813.join(),
      presentationParam812.formula !== `` &&
        presentationParam813.uint32(18).string(presentationParam812.formula),
      presentationParam812.valuesFormatCode !== void 0 &&
        presentationParam813
          .uint32(26)
          .string(presentationParam812.valuesFormatCode),
      presentationParam813
    );
  },
  decode(presentationParam317, presentationParam318) {
    let presentationValue458 =
        presentationParam317 instanceof presentationFr
          ? presentationParam317
          : new presentationFr(presentationParam317),
      presentationValue459 =
        presentationParam318 === void 0
          ? presentationValue458.len
          : presentationValue458.pos + presentationParam318,
      presentationValue460 = presentationHelper75();
    for (; presentationValue458.pos < presentationValue459; ) {
      let presentationValue665 = presentationValue458.uint32();
      switch (presentationValue665 >>> 3) {
        case 1:
          if (presentationValue665 === 9) {
            presentationValue460.values.push(presentationValue458.double());
            continue;
          }
          if (presentationValue665 === 10) {
            let presentationValue1213 =
              presentationValue458.uint32() + presentationValue458.pos;
            for (; presentationValue458.pos < presentationValue1213; )
              presentationValue460.values.push(presentationValue458.double());
            continue;
          }
          break;
        case 2:
          if (presentationValue665 !== 18) break;
          presentationValue460.formula = presentationValue458.string();
          continue;
        case 3:
          if (presentationValue665 !== 26) break;
          presentationValue460.valuesFormatCode = presentationValue458.string();
          continue;
      }
      if ((presentationValue665 & 7) == 4 || presentationValue665 === 0) break;
      presentationValue458.skip(presentationValue665 & 7);
    }
    return presentationValue460;
  },
  create(presentationParam1203) {
    return presentationValue47.fromPartial(presentationParam1203 ?? {});
  },
  fromPartial(presentationParam947) {
    let presentationValue1084 = presentationHelper75();
    return (
      (presentationValue1084.values =
        presentationParam947.values?.map(
          (presentationParam1473) => presentationParam1473,
        ) || []),
      (presentationValue1084.formula = presentationParam947.formula ?? ``),
      (presentationValue1084.valuesFormatCode =
        presentationParam947.valuesFormatCode ?? void 0),
      presentationValue1084
    );
  },
};
function presentationHelper76() {
  return {
    x: void 0,
    y: void 0,
    w: void 0,
    h: void 0,
  };
}
var presentationValue48 = {
  encode(presentationParam848, presentationParam849 = new presentationPr()) {
    return (
      presentationParam848.x !== void 0 &&
        presentationParam849.uint32(9).double(presentationParam848.x),
      presentationParam848.y !== void 0 &&
        presentationParam849.uint32(17).double(presentationParam848.y),
      presentationParam848.w !== void 0 &&
        presentationParam849.uint32(25).double(presentationParam848.w),
      presentationParam848.h !== void 0 &&
        presentationParam849.uint32(33).double(presentationParam848.h),
      presentationParam849
    );
  },
  decode(presentationParam437, presentationParam438) {
    let presentationValue590 =
        presentationParam437 instanceof presentationFr
          ? presentationParam437
          : new presentationFr(presentationParam437),
      presentationValue591 =
        presentationParam438 === void 0
          ? presentationValue590.len
          : presentationValue590.pos + presentationParam438,
      presentationValue592 = presentationHelper76();
    for (; presentationValue590.pos < presentationValue591; ) {
      let presentationValue868 = presentationValue590.uint32();
      switch (presentationValue868 >>> 3) {
        case 1:
          if (presentationValue868 !== 9) break;
          presentationValue592.x = presentationValue590.double();
          continue;
        case 2:
          if (presentationValue868 !== 17) break;
          presentationValue592.y = presentationValue590.double();
          continue;
        case 3:
          if (presentationValue868 !== 25) break;
          presentationValue592.w = presentationValue590.double();
          continue;
        case 4:
          if (presentationValue868 !== 33) break;
          presentationValue592.h = presentationValue590.double();
          continue;
      }
      if ((presentationValue868 & 7) == 4 || presentationValue868 === 0) break;
      presentationValue590.skip(presentationValue868 & 7);
    }
    return presentationValue592;
  },
  create(presentationParam1204) {
    return presentationValue48.fromPartial(presentationParam1204 ?? {});
  },
  fromPartial(presentationParam1036) {
    let presentationValue1156 = presentationHelper76();
    return (
      (presentationValue1156.x = presentationParam1036.x ?? void 0),
      (presentationValue1156.y = presentationParam1036.y ?? void 0),
      (presentationValue1156.w = presentationParam1036.w ?? void 0),
      (presentationValue1156.h = presentationParam1036.h ?? void 0),
      presentationValue1156
    );
  },
};
function presentationHelper77() {
  return {
    text: void 0,
    numberFormatCode: void 0,
    numberFormatSourceLinked: void 0,
    manualLayout: void 0,
    textStyle: void 0,
    fill: void 0,
    stroke: void 0,
    textRuns: [],
  };
}
var presentationValue49 = {
  encode(presentationParam191, presentationParam192 = new presentationPr()) {
    (presentationParam191.text !== void 0 &&
      presentationParam192.uint32(10).string(presentationParam191.text),
      presentationParam191.numberFormatCode !== void 0 &&
        presentationParam192
          .uint32(18)
          .string(presentationParam191.numberFormatCode),
      presentationParam191.numberFormatSourceLinked !== void 0 &&
        presentationParam192
          .uint32(24)
          .bool(presentationParam191.numberFormatSourceLinked),
      presentationParam191.manualLayout !== void 0 &&
        presentationValue48
          .encode(
            presentationParam191.manualLayout,
            presentationParam192.uint32(34).fork(),
          )
          .join(),
      presentationParam191.textStyle !== void 0 &&
        presentationOr
          .encode(
            presentationParam191.textStyle,
            presentationParam192.uint32(42).fork(),
          )
          .join(),
      presentationParam191.fill !== void 0 &&
        presentationHn
          .encode(
            presentationParam191.fill,
            presentationParam192.uint32(50).fork(),
          )
          .join(),
      presentationParam191.stroke !== void 0 &&
        presentationJn
          .encode(
            presentationParam191.stroke,
            presentationParam192.uint32(58).fork(),
          )
          .join());
    for (let presentationValue1265 of presentationParam191.textRuns)
      presentationValue50
        .encode(presentationValue1265, presentationParam192.uint32(66).fork())
        .join();
    return presentationParam192;
  },
  decode(presentationParam138, presentationParam139) {
    let presentationValue255 =
        presentationParam138 instanceof presentationFr
          ? presentationParam138
          : new presentationFr(presentationParam138),
      presentationValue256 =
        presentationParam139 === void 0
          ? presentationValue255.len
          : presentationValue255.pos + presentationParam139,
      presentationValue257 = presentationHelper77();
    for (; presentationValue255.pos < presentationValue256; ) {
      let presentationValue294 = presentationValue255.uint32();
      switch (presentationValue294 >>> 3) {
        case 1:
          if (presentationValue294 !== 10) break;
          presentationValue257.text = presentationValue255.string();
          continue;
        case 2:
          if (presentationValue294 !== 18) break;
          presentationValue257.numberFormatCode = presentationValue255.string();
          continue;
        case 3:
          if (presentationValue294 !== 24) break;
          presentationValue257.numberFormatSourceLinked =
            presentationValue255.bool();
          continue;
        case 4:
          if (presentationValue294 !== 34) break;
          presentationValue257.manualLayout = presentationValue48.decode(
            presentationValue255,
            presentationValue255.uint32(),
          );
          continue;
        case 5:
          if (presentationValue294 !== 42) break;
          presentationValue257.textStyle = presentationOr.decode(
            presentationValue255,
            presentationValue255.uint32(),
          );
          continue;
        case 6:
          if (presentationValue294 !== 50) break;
          presentationValue257.fill = presentationHn.decode(
            presentationValue255,
            presentationValue255.uint32(),
          );
          continue;
        case 7:
          if (presentationValue294 !== 58) break;
          presentationValue257.stroke = presentationJn.decode(
            presentationValue255,
            presentationValue255.uint32(),
          );
          continue;
        case 8:
          if (presentationValue294 !== 66) break;
          presentationValue257.textRuns.push(
            presentationValue50.decode(
              presentationValue255,
              presentationValue255.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue294 & 7) == 4 || presentationValue294 === 0) break;
      presentationValue255.skip(presentationValue294 & 7);
    }
    return presentationValue257;
  },
  create(presentationParam1205) {
    return presentationValue49.fromPartial(presentationParam1205 ?? {});
  },
  fromPartial(presentationParam207) {
    let presentationValue329 = presentationHelper77();
    return (
      (presentationValue329.text = presentationParam207.text ?? void 0),
      (presentationValue329.numberFormatCode =
        presentationParam207.numberFormatCode ?? void 0),
      (presentationValue329.numberFormatSourceLinked =
        presentationParam207.numberFormatSourceLinked ?? void 0),
      (presentationValue329.manualLayout =
        presentationParam207.manualLayout !== void 0 &&
        presentationParam207.manualLayout !== null
          ? presentationValue48.fromPartial(presentationParam207.manualLayout)
          : void 0),
      (presentationValue329.textStyle =
        presentationParam207.textStyle !== void 0 &&
        presentationParam207.textStyle !== null
          ? presentationOr.fromPartial(presentationParam207.textStyle)
          : void 0),
      (presentationValue329.fill =
        presentationParam207.fill !== void 0 &&
        presentationParam207.fill !== null
          ? presentationHn.fromPartial(presentationParam207.fill)
          : void 0),
      (presentationValue329.stroke =
        presentationParam207.stroke !== void 0 &&
        presentationParam207.stroke !== null
          ? presentationJn.fromPartial(presentationParam207.stroke)
          : void 0),
      (presentationValue329.textRuns =
        presentationParam207.textRuns?.map((presentationParam1401) =>
          presentationValue50.fromPartial(presentationParam1401),
        ) || []),
      presentationValue329
    );
  },
};
function or() {
  return {
    text: ``,
    textStyle: void 0,
  };
}
var presentationValue50 = {
  encode(presentationParam943, presentationParam944 = new presentationPr()) {
    return (
      presentationParam943.text !== `` &&
        presentationParam944.uint32(10).string(presentationParam943.text),
      presentationParam943.textStyle !== void 0 &&
        presentationOr
          .encode(
            presentationParam943.textStyle,
            presentationParam944.uint32(18).fork(),
          )
          .join(),
      presentationParam944
    );
  },
  decode(presentationParam575, presentationParam576) {
    let presentationValue754 =
        presentationParam575 instanceof presentationFr
          ? presentationParam575
          : new presentationFr(presentationParam575),
      presentationValue755 =
        presentationParam576 === void 0
          ? presentationValue754.len
          : presentationValue754.pos + presentationParam576,
      presentationValue756 = or();
    for (; presentationValue754.pos < presentationValue755; ) {
      let presentationValue1012 = presentationValue754.uint32();
      switch (presentationValue1012 >>> 3) {
        case 1:
          if (presentationValue1012 !== 10) break;
          presentationValue756.text = presentationValue754.string();
          continue;
        case 2:
          if (presentationValue1012 !== 18) break;
          presentationValue756.textStyle = presentationOr.decode(
            presentationValue754,
            presentationValue754.uint32(),
          );
          continue;
      }
      if ((presentationValue1012 & 7) == 4 || presentationValue1012 === 0)
        break;
      presentationValue754.skip(presentationValue1012 & 7);
    }
    return presentationValue756;
  },
  create(presentationParam1206) {
    return presentationValue50.fromPartial(presentationParam1206 ?? {});
  },
  fromPartial(presentationParam937) {
    let presentationValue1080 = or();
    return (
      (presentationValue1080.text = presentationParam937.text ?? ``),
      (presentationValue1080.textStyle =
        presentationParam937.textStyle !== void 0 &&
        presentationParam937.textStyle !== null
          ? presentationOr.fromPartial(presentationParam937.textStyle)
          : void 0),
      presentationValue1080
    );
  },
};
function presentationHelper78() {
  return {
    type: 0,
    name: void 0,
    order: void 0,
    period: void 0,
    forward: void 0,
    backward: void 0,
    intercept: void 0,
    displayEquation: void 0,
    displayRSquared: void 0,
    stroke: void 0,
    label: void 0,
  };
}
var presentationValue51 = {
  encode(presentationParam158, presentationParam159 = new presentationPr()) {
    return (
      presentationParam158.type !== 0 &&
        presentationParam159.uint32(8).int32(presentationParam158.type),
      presentationParam158.name !== void 0 &&
        presentationParam159.uint32(18).string(presentationParam158.name),
      presentationParam158.order !== void 0 &&
        presentationParam159.uint32(24).uint32(presentationParam158.order),
      presentationParam158.period !== void 0 &&
        presentationParam159.uint32(32).uint32(presentationParam158.period),
      presentationParam158.forward !== void 0 &&
        presentationParam159.uint32(41).double(presentationParam158.forward),
      presentationParam158.backward !== void 0 &&
        presentationParam159.uint32(49).double(presentationParam158.backward),
      presentationParam158.intercept !== void 0 &&
        presentationParam159.uint32(57).double(presentationParam158.intercept),
      presentationParam158.displayEquation !== void 0 &&
        presentationParam159
          .uint32(64)
          .bool(presentationParam158.displayEquation),
      presentationParam158.displayRSquared !== void 0 &&
        presentationParam159
          .uint32(72)
          .bool(presentationParam158.displayRSquared),
      presentationParam158.stroke !== void 0 &&
        presentationJn
          .encode(
            presentationParam158.stroke,
            presentationParam159.uint32(82).fork(),
          )
          .join(),
      presentationParam158.label !== void 0 &&
        presentationValue49
          .encode(
            presentationParam158.label,
            presentationParam159.uint32(90).fork(),
          )
          .join(),
      presentationParam159
    );
  },
  decode(presentationParam99, presentationParam100) {
    let presentationValue212 =
        presentationParam99 instanceof presentationFr
          ? presentationParam99
          : new presentationFr(presentationParam99),
      presentationValue213 =
        presentationParam100 === void 0
          ? presentationValue212.len
          : presentationValue212.pos + presentationParam100,
      presentationValue214 = presentationHelper78();
    for (; presentationValue212.pos < presentationValue213; ) {
      let presentationValue266 = presentationValue212.uint32();
      switch (presentationValue266 >>> 3) {
        case 1:
          if (presentationValue266 !== 8) break;
          presentationValue214.type = presentationValue212.int32();
          continue;
        case 2:
          if (presentationValue266 !== 18) break;
          presentationValue214.name = presentationValue212.string();
          continue;
        case 3:
          if (presentationValue266 !== 24) break;
          presentationValue214.order = presentationValue212.uint32();
          continue;
        case 4:
          if (presentationValue266 !== 32) break;
          presentationValue214.period = presentationValue212.uint32();
          continue;
        case 5:
          if (presentationValue266 !== 41) break;
          presentationValue214.forward = presentationValue212.double();
          continue;
        case 6:
          if (presentationValue266 !== 49) break;
          presentationValue214.backward = presentationValue212.double();
          continue;
        case 7:
          if (presentationValue266 !== 57) break;
          presentationValue214.intercept = presentationValue212.double();
          continue;
        case 8:
          if (presentationValue266 !== 64) break;
          presentationValue214.displayEquation = presentationValue212.bool();
          continue;
        case 9:
          if (presentationValue266 !== 72) break;
          presentationValue214.displayRSquared = presentationValue212.bool();
          continue;
        case 10:
          if (presentationValue266 !== 82) break;
          presentationValue214.stroke = presentationJn.decode(
            presentationValue212,
            presentationValue212.uint32(),
          );
          continue;
        case 11:
          if (presentationValue266 !== 90) break;
          presentationValue214.label = presentationValue49.decode(
            presentationValue212,
            presentationValue212.uint32(),
          );
          continue;
      }
      if ((presentationValue266 & 7) == 4 || presentationValue266 === 0) break;
      presentationValue212.skip(presentationValue266 & 7);
    }
    return presentationValue214;
  },
  create(presentationParam1207) {
    return presentationValue51.fromPartial(presentationParam1207 ?? {});
  },
  fromPartial(presentationParam294) {
    let presentationValue435 = presentationHelper78();
    return (
      (presentationValue435.type = presentationParam294.type ?? 0),
      (presentationValue435.name = presentationParam294.name ?? void 0),
      (presentationValue435.order = presentationParam294.order ?? void 0),
      (presentationValue435.period = presentationParam294.period ?? void 0),
      (presentationValue435.forward = presentationParam294.forward ?? void 0),
      (presentationValue435.backward = presentationParam294.backward ?? void 0),
      (presentationValue435.intercept =
        presentationParam294.intercept ?? void 0),
      (presentationValue435.displayEquation =
        presentationParam294.displayEquation ?? void 0),
      (presentationValue435.displayRSquared =
        presentationParam294.displayRSquared ?? void 0),
      (presentationValue435.stroke =
        presentationParam294.stroke !== void 0 &&
        presentationParam294.stroke !== null
          ? presentationJn.fromPartial(presentationParam294.stroke)
          : void 0),
      (presentationValue435.label =
        presentationParam294.label !== void 0 &&
        presentationParam294.label !== null
          ? presentationValue49.fromPartial(presentationParam294.label)
          : void 0),
      presentationValue435
    );
  },
};
function presentationHelper79() {
  return {
    grouping: void 0,
    smooth: void 0,
    varyColors: void 0,
  };
}
var presentationValue52 = {
  encode(presentationParam857, presentationParam858 = new presentationPr()) {
    return (
      presentationParam857.grouping !== void 0 &&
        presentationParam858.uint32(8).int32(presentationParam857.grouping),
      presentationParam857.smooth !== void 0 &&
        presentationParam858.uint32(16).bool(presentationParam857.smooth),
      presentationParam857.varyColors !== void 0 &&
        presentationParam858.uint32(24).bool(presentationParam857.varyColors),
      presentationParam858
    );
  },
  decode(presentationParam494, presentationParam495) {
    let presentationValue662 =
        presentationParam494 instanceof presentationFr
          ? presentationParam494
          : new presentationFr(presentationParam494),
      presentationValue663 =
        presentationParam495 === void 0
          ? presentationValue662.len
          : presentationValue662.pos + presentationParam495,
      presentationValue664 = presentationHelper79();
    for (; presentationValue662.pos < presentationValue663; ) {
      let presentationValue944 = presentationValue662.uint32();
      switch (presentationValue944 >>> 3) {
        case 1:
          if (presentationValue944 !== 8) break;
          presentationValue664.grouping = presentationValue662.int32();
          continue;
        case 2:
          if (presentationValue944 !== 16) break;
          presentationValue664.smooth = presentationValue662.bool();
          continue;
        case 3:
          if (presentationValue944 !== 24) break;
          presentationValue664.varyColors = presentationValue662.bool();
          continue;
      }
      if ((presentationValue944 & 7) == 4 || presentationValue944 === 0) break;
      presentationValue662.skip(presentationValue944 & 7);
    }
    return presentationValue664;
  },
  create(presentationParam1208) {
    return presentationValue52.fromPartial(presentationParam1208 ?? {});
  },
  fromPartial(presentationParam989) {
    let presentationValue1109 = presentationHelper79();
    return (
      (presentationValue1109.grouping =
        presentationParam989.grouping ?? void 0),
      (presentationValue1109.smooth = presentationParam989.smooth ?? void 0),
      (presentationValue1109.varyColors =
        presentationParam989.varyColors ?? void 0),
      presentationValue1109
    );
  },
};
function presentationHelper80() {
  return {
    grouping: void 0,
    varyColors: void 0,
  };
}
var presentationValue53 = {
  encode(presentationParam965, presentationParam966 = new presentationPr()) {
    return (
      presentationParam965.grouping !== void 0 &&
        presentationParam966.uint32(8).int32(presentationParam965.grouping),
      presentationParam965.varyColors !== void 0 &&
        presentationParam966.uint32(16).bool(presentationParam965.varyColors),
      presentationParam966
    );
  },
  decode(presentationParam618, presentationParam619) {
    let presentationValue820 =
        presentationParam618 instanceof presentationFr
          ? presentationParam618
          : new presentationFr(presentationParam618),
      presentationValue821 =
        presentationParam619 === void 0
          ? presentationValue820.len
          : presentationValue820.pos + presentationParam619,
      presentationValue822 = presentationHelper80();
    for (; presentationValue820.pos < presentationValue821; ) {
      let presentationValue1036 = presentationValue820.uint32();
      switch (presentationValue1036 >>> 3) {
        case 1:
          if (presentationValue1036 !== 8) break;
          presentationValue822.grouping = presentationValue820.int32();
          continue;
        case 2:
          if (presentationValue1036 !== 16) break;
          presentationValue822.varyColors = presentationValue820.bool();
          continue;
      }
      if ((presentationValue1036 & 7) == 4 || presentationValue1036 === 0)
        break;
      presentationValue820.skip(presentationValue1036 & 7);
    }
    return presentationValue822;
  },
  create(presentationParam1209) {
    return presentationValue53.fromPartial(presentationParam1209 ?? {});
  },
  fromPartial(presentationParam1037) {
    let presentationValue1157 = presentationHelper80();
    return (
      (presentationValue1157.grouping =
        presentationParam1037.grouping ?? void 0),
      (presentationValue1157.varyColors =
        presentationParam1037.varyColors ?? void 0),
      presentationValue1157
    );
  },
};
function presentationHelper81() {
  return {
    firstSliceAngle: void 0,
    varyColors: void 0,
  };
}
var presentationValue54 = {
  encode(presentationParam923, presentationParam924 = new presentationPr()) {
    return (
      presentationParam923.firstSliceAngle !== void 0 &&
        presentationParam924
          .uint32(8)
          .uint32(presentationParam923.firstSliceAngle),
      presentationParam923.varyColors !== void 0 &&
        presentationParam924.uint32(16).bool(presentationParam923.varyColors),
      presentationParam924
    );
  },
  decode(presentationParam585, presentationParam586) {
    let presentationValue771 =
        presentationParam585 instanceof presentationFr
          ? presentationParam585
          : new presentationFr(presentationParam585),
      presentationValue772 =
        presentationParam586 === void 0
          ? presentationValue771.len
          : presentationValue771.pos + presentationParam586,
      presentationValue773 = presentationHelper81();
    for (; presentationValue771.pos < presentationValue772; ) {
      let presentationValue1019 = presentationValue771.uint32();
      switch (presentationValue1019 >>> 3) {
        case 1:
          if (presentationValue1019 !== 8) break;
          presentationValue773.firstSliceAngle = presentationValue771.uint32();
          continue;
        case 2:
          if (presentationValue1019 !== 16) break;
          presentationValue773.varyColors = presentationValue771.bool();
          continue;
      }
      if ((presentationValue1019 & 7) == 4 || presentationValue1019 === 0)
        break;
      presentationValue771.skip(presentationValue1019 & 7);
    }
    return presentationValue773;
  },
  create(presentationParam1210) {
    return presentationValue54.fromPartial(presentationParam1210 ?? {});
  },
  fromPartial(presentationParam1008) {
    let presentationValue1129 = presentationHelper81();
    return (
      (presentationValue1129.firstSliceAngle =
        presentationParam1008.firstSliceAngle ?? void 0),
      (presentationValue1129.varyColors =
        presentationParam1008.varyColors ?? void 0),
      presentationValue1129
    );
  },
};
function presentationHelper82() {
  return {
    ofPieType: void 0,
    splitType: void 0,
    splitPosition: void 0,
    gapWidth: void 0,
    secondPieSize: void 0,
    secondaryIndices: [],
    varyColors: void 0,
    serLines: [],
  };
}
var _r = {
  encode(presentationParam241, presentationParam242 = new presentationPr()) {
    (presentationParam241.ofPieType !== void 0 &&
      presentationParam242.uint32(8).int32(presentationParam241.ofPieType),
      presentationParam241.splitType !== void 0 &&
        presentationParam242.uint32(16).int32(presentationParam241.splitType),
      presentationParam241.splitPosition !== void 0 &&
        presentationParam242
          .uint32(25)
          .double(presentationParam241.splitPosition),
      presentationParam241.gapWidth !== void 0 &&
        presentationParam242.uint32(32).uint32(presentationParam241.gapWidth),
      presentationParam241.secondPieSize !== void 0 &&
        presentationParam242
          .uint32(40)
          .uint32(presentationParam241.secondPieSize),
      presentationParam242.uint32(50).fork());
    for (let presentationValue1330 of presentationParam241.secondaryIndices)
      presentationParam242.uint32(presentationValue1330);
    (presentationParam242.join(),
      presentationParam241.varyColors !== void 0 &&
        presentationParam242.uint32(56).bool(presentationParam241.varyColors));
    for (let presentationValue1271 of presentationParam241.serLines)
      presentationJn
        .encode(presentationValue1271, presentationParam242.uint32(66).fork())
        .join();
    return presentationParam242;
  },
  decode(presentationParam113, presentationParam114) {
    let presentationValue228 =
        presentationParam113 instanceof presentationFr
          ? presentationParam113
          : new presentationFr(presentationParam113),
      presentationValue229 =
        presentationParam114 === void 0
          ? presentationValue228.len
          : presentationValue228.pos + presentationParam114,
      presentationValue230 = presentationHelper82();
    for (; presentationValue228.pos < presentationValue229; ) {
      let presentationValue280 = presentationValue228.uint32();
      switch (presentationValue280 >>> 3) {
        case 1:
          if (presentationValue280 !== 8) break;
          presentationValue230.ofPieType = presentationValue228.int32();
          continue;
        case 2:
          if (presentationValue280 !== 16) break;
          presentationValue230.splitType = presentationValue228.int32();
          continue;
        case 3:
          if (presentationValue280 !== 25) break;
          presentationValue230.splitPosition = presentationValue228.double();
          continue;
        case 4:
          if (presentationValue280 !== 32) break;
          presentationValue230.gapWidth = presentationValue228.uint32();
          continue;
        case 5:
          if (presentationValue280 !== 40) break;
          presentationValue230.secondPieSize = presentationValue228.uint32();
          continue;
        case 6:
          if (presentationValue280 === 48) {
            presentationValue230.secondaryIndices.push(
              presentationValue228.uint32(),
            );
            continue;
          }
          if (presentationValue280 === 50) {
            let presentationValue1183 =
              presentationValue228.uint32() + presentationValue228.pos;
            for (; presentationValue228.pos < presentationValue1183; )
              presentationValue230.secondaryIndices.push(
                presentationValue228.uint32(),
              );
            continue;
          }
          break;
        case 7:
          if (presentationValue280 !== 56) break;
          presentationValue230.varyColors = presentationValue228.bool();
          continue;
        case 8:
          if (presentationValue280 !== 66) break;
          presentationValue230.serLines.push(
            presentationJn.decode(
              presentationValue228,
              presentationValue228.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue280 & 7) == 4 || presentationValue280 === 0) break;
      presentationValue228.skip(presentationValue280 & 7);
    }
    return presentationValue230;
  },
  create(presentationParam1211) {
    return _r.fromPartial(presentationParam1211 ?? {});
  },
  fromPartial(presentationParam450) {
    let presentationValue611 = presentationHelper82();
    return (
      (presentationValue611.ofPieType =
        presentationParam450.ofPieType ?? void 0),
      (presentationValue611.splitType =
        presentationParam450.splitType ?? void 0),
      (presentationValue611.splitPosition =
        presentationParam450.splitPosition ?? void 0),
      (presentationValue611.gapWidth = presentationParam450.gapWidth ?? void 0),
      (presentationValue611.secondPieSize =
        presentationParam450.secondPieSize ?? void 0),
      (presentationValue611.secondaryIndices =
        presentationParam450.secondaryIndices?.map(
          (presentationParam1474) => presentationParam1474,
        ) || []),
      (presentationValue611.varyColors =
        presentationParam450.varyColors ?? void 0),
      (presentationValue611.serLines =
        presentationParam450.serLines?.map((presentationParam1428) =>
          presentationJn.fromPartial(presentationParam1428),
        ) || []),
      presentationValue611
    );
  },
};
function presentationHelper83() {
  return {
    holeSize: void 0,
    firstSliceAngle: void 0,
    varyColors: void 0,
  };
}
var presentationValue55 = {
  encode(presentationParam820, presentationParam821 = new presentationPr()) {
    return (
      presentationParam820.holeSize !== void 0 &&
        presentationParam821.uint32(8).uint32(presentationParam820.holeSize),
      presentationParam820.firstSliceAngle !== void 0 &&
        presentationParam821
          .uint32(16)
          .uint32(presentationParam820.firstSliceAngle),
      presentationParam820.varyColors !== void 0 &&
        presentationParam821.uint32(24).bool(presentationParam820.varyColors),
      presentationParam821
    );
  },
  decode(presentationParam470, presentationParam471) {
    let presentationValue633 =
        presentationParam470 instanceof presentationFr
          ? presentationParam470
          : new presentationFr(presentationParam470),
      presentationValue634 =
        presentationParam471 === void 0
          ? presentationValue633.len
          : presentationValue633.pos + presentationParam471,
      presentationValue635 = presentationHelper83();
    for (; presentationValue633.pos < presentationValue634; ) {
      let presentationValue906 = presentationValue633.uint32();
      switch (presentationValue906 >>> 3) {
        case 1:
          if (presentationValue906 !== 8) break;
          presentationValue635.holeSize = presentationValue633.uint32();
          continue;
        case 2:
          if (presentationValue906 !== 16) break;
          presentationValue635.firstSliceAngle = presentationValue633.uint32();
          continue;
        case 3:
          if (presentationValue906 !== 24) break;
          presentationValue635.varyColors = presentationValue633.bool();
          continue;
      }
      if ((presentationValue906 & 7) == 4 || presentationValue906 === 0) break;
      presentationValue633.skip(presentationValue906 & 7);
    }
    return presentationValue635;
  },
  create(presentationParam1212) {
    return presentationValue55.fromPartial(presentationParam1212 ?? {});
  },
  fromPartial(presentationParam929) {
    let presentationValue1074 = presentationHelper83();
    return (
      (presentationValue1074.holeSize =
        presentationParam929.holeSize ?? void 0),
      (presentationValue1074.firstSliceAngle =
        presentationParam929.firstSliceAngle ?? void 0),
      (presentationValue1074.varyColors =
        presentationParam929.varyColors ?? void 0),
      presentationValue1074
    );
  },
};
function presentationHelper84() {
  return {
    style: void 0,
    varyColors: void 0,
  };
}
var presentationValue56 = {
  encode(presentationParam981, presentationParam982 = new presentationPr()) {
    return (
      presentationParam981.style !== void 0 &&
        presentationParam982.uint32(8).int32(presentationParam981.style),
      presentationParam981.varyColors !== void 0 &&
        presentationParam982.uint32(16).bool(presentationParam981.varyColors),
      presentationParam982
    );
  },
  decode(presentationParam630, presentationParam631) {
    let presentationValue831 =
        presentationParam630 instanceof presentationFr
          ? presentationParam630
          : new presentationFr(presentationParam630),
      presentationValue832 =
        presentationParam631 === void 0
          ? presentationValue831.len
          : presentationValue831.pos + presentationParam631,
      presentationValue833 = presentationHelper84();
    for (; presentationValue831.pos < presentationValue832; ) {
      let presentationValue1040 = presentationValue831.uint32();
      switch (presentationValue1040 >>> 3) {
        case 1:
          if (presentationValue1040 !== 8) break;
          presentationValue833.style = presentationValue831.int32();
          continue;
        case 2:
          if (presentationValue1040 !== 16) break;
          presentationValue833.varyColors = presentationValue831.bool();
          continue;
      }
      if ((presentationValue1040 & 7) == 4 || presentationValue1040 === 0)
        break;
      presentationValue831.skip(presentationValue1040 & 7);
    }
    return presentationValue833;
  },
  create(presentationParam1213) {
    return presentationValue56.fromPartial(presentationParam1213 ?? {});
  },
  fromPartial(presentationParam1049) {
    let presentationValue1165 = presentationHelper84();
    return (
      (presentationValue1165.style = presentationParam1049.style ?? void 0),
      (presentationValue1165.varyColors =
        presentationParam1049.varyColors ?? void 0),
      presentationValue1165
    );
  },
};
function presentationHelper85() {
  return {
    is3d: void 0,
    scale: void 0,
    showNegative: void 0,
    varyColors: void 0,
  };
}
var presentationValue57 = {
  encode(presentationParam739, presentationParam740 = new presentationPr()) {
    return (
      presentationParam739.is3d !== void 0 &&
        presentationParam740.uint32(8).bool(presentationParam739.is3d),
      presentationParam739.scale !== void 0 &&
        presentationParam740.uint32(16).uint32(presentationParam739.scale),
      presentationParam739.showNegative !== void 0 &&
        presentationParam740.uint32(24).bool(presentationParam739.showNegative),
      presentationParam739.varyColors !== void 0 &&
        presentationParam740.uint32(32).bool(presentationParam739.varyColors),
      presentationParam740
    );
  },
  decode(presentationParam401, presentationParam402) {
    let presentationValue550 =
        presentationParam401 instanceof presentationFr
          ? presentationParam401
          : new presentationFr(presentationParam401),
      presentationValue551 =
        presentationParam402 === void 0
          ? presentationValue550.len
          : presentationValue550.pos + presentationParam402,
      presentationValue552 = presentationHelper85();
    for (; presentationValue550.pos < presentationValue551; ) {
      let presentationValue806 = presentationValue550.uint32();
      switch (presentationValue806 >>> 3) {
        case 1:
          if (presentationValue806 !== 8) break;
          presentationValue552.is3d = presentationValue550.bool();
          continue;
        case 2:
          if (presentationValue806 !== 16) break;
          presentationValue552.scale = presentationValue550.uint32();
          continue;
        case 3:
          if (presentationValue806 !== 24) break;
          presentationValue552.showNegative = presentationValue550.bool();
          continue;
        case 4:
          if (presentationValue806 !== 32) break;
          presentationValue552.varyColors = presentationValue550.bool();
          continue;
      }
      if ((presentationValue806 & 7) == 4 || presentationValue806 === 0) break;
      presentationValue550.skip(presentationValue806 & 7);
    }
    return presentationValue552;
  },
  create(presentationParam1341) {
    return presentationValue57.fromPartial(presentationParam1341 ?? {});
  },
  fromPartial(presentationParam911) {
    let presentationValue1071 = presentationHelper85();
    return (
      (presentationValue1071.is3d = presentationParam911.is3d ?? void 0),
      (presentationValue1071.scale = presentationParam911.scale ?? void 0),
      (presentationValue1071.showNegative =
        presentationParam911.showNegative ?? void 0),
      (presentationValue1071.varyColors =
        presentationParam911.varyColors ?? void 0),
      presentationValue1071
    );
  },
};
function presentationHelper86() {
  return {
    style: void 0,
    varyColors: void 0,
  };
}
var presentationValue58 = {
  encode(presentationParam983, presentationParam984 = new presentationPr()) {
    return (
      presentationParam983.style !== void 0 &&
        presentationParam984.uint32(8).int32(presentationParam983.style),
      presentationParam983.varyColors !== void 0 &&
        presentationParam984.uint32(16).bool(presentationParam983.varyColors),
      presentationParam984
    );
  },
  decode(presentationParam632, presentationParam633) {
    let presentationValue834 =
        presentationParam632 instanceof presentationFr
          ? presentationParam632
          : new presentationFr(presentationParam632),
      presentationValue835 =
        presentationParam633 === void 0
          ? presentationValue834.len
          : presentationValue834.pos + presentationParam633,
      presentationValue836 = presentationHelper86();
    for (; presentationValue834.pos < presentationValue835; ) {
      let presentationValue1041 = presentationValue834.uint32();
      switch (presentationValue1041 >>> 3) {
        case 1:
          if (presentationValue1041 !== 8) break;
          presentationValue836.style = presentationValue834.int32();
          continue;
        case 2:
          if (presentationValue1041 !== 16) break;
          presentationValue836.varyColors = presentationValue834.bool();
          continue;
      }
      if ((presentationValue1041 & 7) == 4 || presentationValue1041 === 0)
        break;
      presentationValue834.skip(presentationValue1041 & 7);
    }
    return presentationValue836;
  },
  create(presentationParam1342) {
    return presentationValue58.fromPartial(presentationParam1342 ?? {});
  },
  fromPartial(presentationParam1050) {
    let presentationValue1166 = presentationHelper86();
    return (
      (presentationValue1166.style = presentationParam1050.style ?? void 0),
      (presentationValue1166.varyColors =
        presentationParam1050.varyColors ?? void 0),
      presentationValue1166
    );
  },
};
function presentationHelper87() {
  return {
    wireframe: void 0,
  };
}
var presentationValue59 = {
  encode(presentationParam1094, presentationParam1095 = new presentationPr()) {
    return (
      presentationParam1094.wireframe !== void 0 &&
        presentationParam1095.uint32(8).bool(presentationParam1094.wireframe),
      presentationParam1095
    );
  },
  decode(presentationParam777, presentationParam778) {
    let presentationValue957 =
        presentationParam777 instanceof presentationFr
          ? presentationParam777
          : new presentationFr(presentationParam777),
      presentationValue958 =
        presentationParam778 === void 0
          ? presentationValue957.len
          : presentationValue957.pos + presentationParam778,
      presentationValue959 = presentationHelper87();
    for (; presentationValue957.pos < presentationValue958; ) {
      let presentationValue1119 = presentationValue957.uint32();
      switch (presentationValue1119 >>> 3) {
        case 1:
          if (presentationValue1119 !== 8) break;
          presentationValue959.wireframe = presentationValue957.bool();
          continue;
      }
      if ((presentationValue1119 & 7) == 4 || presentationValue1119 === 0)
        break;
      presentationValue957.skip(presentationValue1119 & 7);
    }
    return presentationValue959;
  },
  create(presentationParam1214) {
    return presentationValue59.fromPartial(presentationParam1214 ?? {});
  },
  fromPartial(presentationParam1124) {
    let presentationValue1243 = presentationHelper87();
    return (
      (presentationValue1243.wireframe =
        presentationParam1124.wireframe ?? void 0),
      presentationValue1243
    );
  },
};
function presentationHelper88() {
  return {
    idx: 0,
    fill: void 0,
    stroke: void 0,
    explosion: void 0,
  };
}
var presentationValue60 = {
  encode(presentationParam684, presentationParam685 = new presentationPr()) {
    return (
      presentationParam684.idx !== 0 &&
        presentationParam685.uint32(8).int32(presentationParam684.idx),
      presentationParam684.fill !== void 0 &&
        presentationHn
          .encode(
            presentationParam684.fill,
            presentationParam685.uint32(18).fork(),
          )
          .join(),
      presentationParam684.stroke !== void 0 &&
        presentationJn
          .encode(
            presentationParam684.stroke,
            presentationParam685.uint32(26).fork(),
          )
          .join(),
      presentationParam684.explosion !== void 0 &&
        presentationParam685.uint32(32).uint32(presentationParam684.explosion),
      presentationParam685
    );
  },
  decode(presentationParam353, presentationParam354) {
    let presentationValue494 =
        presentationParam353 instanceof presentationFr
          ? presentationParam353
          : new presentationFr(presentationParam353),
      presentationValue495 =
        presentationParam354 === void 0
          ? presentationValue494.len
          : presentationValue494.pos + presentationParam354,
      presentationValue496 = presentationHelper88();
    for (; presentationValue494.pos < presentationValue495; ) {
      let presentationValue711 = presentationValue494.uint32();
      switch (presentationValue711 >>> 3) {
        case 1:
          if (presentationValue711 !== 8) break;
          presentationValue496.idx = presentationValue494.int32();
          continue;
        case 2:
          if (presentationValue711 !== 18) break;
          presentationValue496.fill = presentationHn.decode(
            presentationValue494,
            presentationValue494.uint32(),
          );
          continue;
        case 3:
          if (presentationValue711 !== 26) break;
          presentationValue496.stroke = presentationJn.decode(
            presentationValue494,
            presentationValue494.uint32(),
          );
          continue;
        case 4:
          if (presentationValue711 !== 32) break;
          presentationValue496.explosion = presentationValue494.uint32();
          continue;
      }
      if ((presentationValue711 & 7) == 4 || presentationValue711 === 0) break;
      presentationValue494.skip(presentationValue711 & 7);
    }
    return presentationValue496;
  },
  create(presentationParam1215) {
    return presentationValue60.fromPartial(presentationParam1215 ?? {});
  },
  fromPartial(presentationParam770) {
    let presentationValue946 = presentationHelper88();
    return (
      (presentationValue946.idx = presentationParam770.idx ?? 0),
      (presentationValue946.fill =
        presentationParam770.fill !== void 0 &&
        presentationParam770.fill !== null
          ? presentationHn.fromPartial(presentationParam770.fill)
          : void 0),
      (presentationValue946.stroke =
        presentationParam770.stroke !== void 0 &&
        presentationParam770.stroke !== null
          ? presentationJn.fromPartial(presentationParam770.stroke)
          : void 0),
      (presentationValue946.explosion =
        presentationParam770.explosion ?? void 0),
      presentationValue946
    );
  },
};
function presentationHelper89() {
  return {
    textStyle: void 0,
    line: void 0,
    min: void 0,
    max: void 0,
    majorGridlines: void 0,
    minorGridlines: void 0,
    numberFormatCode: void 0,
    numberFormatSourceLinked: void 0,
    majorUnit: void 0,
    minorUnit: void 0,
    position: void 0,
    orientation: void 0,
    majorTickMark: void 0,
    minorTickMark: void 0,
    tickLabelPosition: void 0,
    crossBetween: void 0,
    crosses: void 0,
    crossValue: void 0,
    deleted: void 0,
    title: void 0,
    titleTextStyle: void 0,
    tickLabelInterval: void 0,
    tickMarkInterval: void 0,
    id: void 0,
    kind: void 0,
    crossingAxisId: void 0,
    categoryGapWidth: void 0,
    unit: void 0,
  };
}
var presentationValue61 = {
  encode(presentationParam18, presentationParam19 = new presentationPr()) {
    return (
      presentationParam18.textStyle !== void 0 &&
        presentationOr
          .encode(
            presentationParam18.textStyle,
            presentationParam19.uint32(10).fork(),
          )
          .join(),
      presentationParam18.line !== void 0 &&
        presentationJn
          .encode(
            presentationParam18.line,
            presentationParam19.uint32(18).fork(),
          )
          .join(),
      presentationParam18.min !== void 0 &&
        presentationParam19.uint32(25).double(presentationParam18.min),
      presentationParam18.max !== void 0 &&
        presentationParam19.uint32(33).double(presentationParam18.max),
      presentationParam18.majorGridlines !== void 0 &&
        presentationJn
          .encode(
            presentationParam18.majorGridlines,
            presentationParam19.uint32(42).fork(),
          )
          .join(),
      presentationParam18.minorGridlines !== void 0 &&
        presentationJn
          .encode(
            presentationParam18.minorGridlines,
            presentationParam19.uint32(50).fork(),
          )
          .join(),
      presentationParam18.numberFormatCode !== void 0 &&
        presentationParam19
          .uint32(58)
          .string(presentationParam18.numberFormatCode),
      presentationParam18.numberFormatSourceLinked !== void 0 &&
        presentationParam19
          .uint32(168)
          .bool(presentationParam18.numberFormatSourceLinked),
      presentationParam18.majorUnit !== void 0 &&
        presentationParam19.uint32(65).double(presentationParam18.majorUnit),
      presentationParam18.minorUnit !== void 0 &&
        presentationParam19.uint32(73).double(presentationParam18.minorUnit),
      presentationParam18.position !== void 0 &&
        presentationParam19.uint32(80).int32(presentationParam18.position),
      presentationParam18.orientation !== void 0 &&
        presentationParam19.uint32(88).int32(presentationParam18.orientation),
      presentationParam18.majorTickMark !== void 0 &&
        presentationParam19.uint32(96).int32(presentationParam18.majorTickMark),
      presentationParam18.minorTickMark !== void 0 &&
        presentationParam19
          .uint32(104)
          .int32(presentationParam18.minorTickMark),
      presentationParam18.tickLabelPosition !== void 0 &&
        presentationParam19
          .uint32(112)
          .int32(presentationParam18.tickLabelPosition),
      presentationParam18.crossBetween !== void 0 &&
        presentationParam19.uint32(120).int32(presentationParam18.crossBetween),
      presentationParam18.crosses !== void 0 &&
        presentationParam19.uint32(128).int32(presentationParam18.crosses),
      presentationParam18.crossValue !== void 0 &&
        presentationParam19.uint32(137).double(presentationParam18.crossValue),
      presentationParam18.deleted !== void 0 &&
        presentationParam19.uint32(144).bool(presentationParam18.deleted),
      presentationParam18.title !== void 0 &&
        presentationParam19.uint32(154).string(presentationParam18.title),
      presentationParam18.titleTextStyle !== void 0 &&
        presentationOr
          .encode(
            presentationParam18.titleTextStyle,
            presentationParam19.uint32(162).fork(),
          )
          .join(),
      presentationParam18.tickLabelInterval !== void 0 &&
        presentationParam19
          .uint32(176)
          .uint32(presentationParam18.tickLabelInterval),
      presentationParam18.tickMarkInterval !== void 0 &&
        presentationParam19
          .uint32(184)
          .uint32(presentationParam18.tickMarkInterval),
      presentationParam18.id !== void 0 &&
        presentationParam19.uint32(192).uint32(presentationParam18.id),
      presentationParam18.kind !== void 0 &&
        presentationParam19.uint32(200).int32(presentationParam18.kind),
      presentationParam18.crossingAxisId !== void 0 &&
        presentationParam19
          .uint32(208)
          .uint32(presentationParam18.crossingAxisId),
      presentationParam18.categoryGapWidth !== void 0 &&
        presentationParam19
          .uint32(217)
          .double(presentationParam18.categoryGapWidth),
      presentationParam18.unit !== void 0 &&
        presentationParam19.uint32(224).int32(presentationParam18.unit),
      presentationParam19
    );
  },
  decode(presentationParam16, presentationParam17) {
    let presentationValue120 =
        presentationParam16 instanceof presentationFr
          ? presentationParam16
          : new presentationFr(presentationParam16),
      presentationValue121 =
        presentationParam17 === void 0
          ? presentationValue120.len
          : presentationValue120.pos + presentationParam17,
      presentationValue122 = presentationHelper89();
    for (; presentationValue120.pos < presentationValue121; ) {
      let presentationValue123 = presentationValue120.uint32();
      switch (presentationValue123 >>> 3) {
        case 1:
          if (presentationValue123 !== 10) break;
          presentationValue122.textStyle = presentationOr.decode(
            presentationValue120,
            presentationValue120.uint32(),
          );
          continue;
        case 2:
          if (presentationValue123 !== 18) break;
          presentationValue122.line = presentationJn.decode(
            presentationValue120,
            presentationValue120.uint32(),
          );
          continue;
        case 3:
          if (presentationValue123 !== 25) break;
          presentationValue122.min = presentationValue120.double();
          continue;
        case 4:
          if (presentationValue123 !== 33) break;
          presentationValue122.max = presentationValue120.double();
          continue;
        case 5:
          if (presentationValue123 !== 42) break;
          presentationValue122.majorGridlines = presentationJn.decode(
            presentationValue120,
            presentationValue120.uint32(),
          );
          continue;
        case 6:
          if (presentationValue123 !== 50) break;
          presentationValue122.minorGridlines = presentationJn.decode(
            presentationValue120,
            presentationValue120.uint32(),
          );
          continue;
        case 7:
          if (presentationValue123 !== 58) break;
          presentationValue122.numberFormatCode = presentationValue120.string();
          continue;
        case 21:
          if (presentationValue123 !== 168) break;
          presentationValue122.numberFormatSourceLinked =
            presentationValue120.bool();
          continue;
        case 8:
          if (presentationValue123 !== 65) break;
          presentationValue122.majorUnit = presentationValue120.double();
          continue;
        case 9:
          if (presentationValue123 !== 73) break;
          presentationValue122.minorUnit = presentationValue120.double();
          continue;
        case 10:
          if (presentationValue123 !== 80) break;
          presentationValue122.position = presentationValue120.int32();
          continue;
        case 11:
          if (presentationValue123 !== 88) break;
          presentationValue122.orientation = presentationValue120.int32();
          continue;
        case 12:
          if (presentationValue123 !== 96) break;
          presentationValue122.majorTickMark = presentationValue120.int32();
          continue;
        case 13:
          if (presentationValue123 !== 104) break;
          presentationValue122.minorTickMark = presentationValue120.int32();
          continue;
        case 14:
          if (presentationValue123 !== 112) break;
          presentationValue122.tickLabelPosition = presentationValue120.int32();
          continue;
        case 15:
          if (presentationValue123 !== 120) break;
          presentationValue122.crossBetween = presentationValue120.int32();
          continue;
        case 16:
          if (presentationValue123 !== 128) break;
          presentationValue122.crosses = presentationValue120.int32();
          continue;
        case 17:
          if (presentationValue123 !== 137) break;
          presentationValue122.crossValue = presentationValue120.double();
          continue;
        case 18:
          if (presentationValue123 !== 144) break;
          presentationValue122.deleted = presentationValue120.bool();
          continue;
        case 19:
          if (presentationValue123 !== 154) break;
          presentationValue122.title = presentationValue120.string();
          continue;
        case 20:
          if (presentationValue123 !== 162) break;
          presentationValue122.titleTextStyle = presentationOr.decode(
            presentationValue120,
            presentationValue120.uint32(),
          );
          continue;
        case 22:
          if (presentationValue123 !== 176) break;
          presentationValue122.tickLabelInterval =
            presentationValue120.uint32();
          continue;
        case 23:
          if (presentationValue123 !== 184) break;
          presentationValue122.tickMarkInterval = presentationValue120.uint32();
          continue;
        case 24:
          if (presentationValue123 !== 192) break;
          presentationValue122.id = presentationValue120.uint32();
          continue;
        case 25:
          if (presentationValue123 !== 200) break;
          presentationValue122.kind = presentationValue120.int32();
          continue;
        case 26:
          if (presentationValue123 !== 208) break;
          presentationValue122.crossingAxisId = presentationValue120.uint32();
          continue;
        case 27:
          if (presentationValue123 !== 217) break;
          presentationValue122.categoryGapWidth = presentationValue120.double();
          continue;
        case 28:
          if (presentationValue123 !== 224) break;
          presentationValue122.unit = presentationValue120.int32();
          continue;
      }
      if ((presentationValue123 & 7) == 4 || presentationValue123 === 0) break;
      presentationValue120.skip(presentationValue123 & 7);
    }
    return presentationValue122;
  },
  create(presentationParam1343) {
    return presentationValue61.fromPartial(presentationParam1343 ?? {});
  },
  fromPartial(presentationParam34) {
    let presentationValue141 = presentationHelper89();
    return (
      (presentationValue141.textStyle =
        presentationParam34.textStyle !== void 0 &&
        presentationParam34.textStyle !== null
          ? presentationOr.fromPartial(presentationParam34.textStyle)
          : void 0),
      (presentationValue141.line =
        presentationParam34.line !== void 0 && presentationParam34.line !== null
          ? presentationJn.fromPartial(presentationParam34.line)
          : void 0),
      (presentationValue141.min = presentationParam34.min ?? void 0),
      (presentationValue141.max = presentationParam34.max ?? void 0),
      (presentationValue141.majorGridlines =
        presentationParam34.majorGridlines !== void 0 &&
        presentationParam34.majorGridlines !== null
          ? presentationJn.fromPartial(presentationParam34.majorGridlines)
          : void 0),
      (presentationValue141.minorGridlines =
        presentationParam34.minorGridlines !== void 0 &&
        presentationParam34.minorGridlines !== null
          ? presentationJn.fromPartial(presentationParam34.minorGridlines)
          : void 0),
      (presentationValue141.numberFormatCode =
        presentationParam34.numberFormatCode ?? void 0),
      (presentationValue141.numberFormatSourceLinked =
        presentationParam34.numberFormatSourceLinked ?? void 0),
      (presentationValue141.majorUnit =
        presentationParam34.majorUnit ?? void 0),
      (presentationValue141.minorUnit =
        presentationParam34.minorUnit ?? void 0),
      (presentationValue141.position = presentationParam34.position ?? void 0),
      (presentationValue141.orientation =
        presentationParam34.orientation ?? void 0),
      (presentationValue141.majorTickMark =
        presentationParam34.majorTickMark ?? void 0),
      (presentationValue141.minorTickMark =
        presentationParam34.minorTickMark ?? void 0),
      (presentationValue141.tickLabelPosition =
        presentationParam34.tickLabelPosition ?? void 0),
      (presentationValue141.crossBetween =
        presentationParam34.crossBetween ?? void 0),
      (presentationValue141.crosses = presentationParam34.crosses ?? void 0),
      (presentationValue141.crossValue =
        presentationParam34.crossValue ?? void 0),
      (presentationValue141.deleted = presentationParam34.deleted ?? void 0),
      (presentationValue141.title = presentationParam34.title ?? void 0),
      (presentationValue141.titleTextStyle =
        presentationParam34.titleTextStyle !== void 0 &&
        presentationParam34.titleTextStyle !== null
          ? presentationOr.fromPartial(presentationParam34.titleTextStyle)
          : void 0),
      (presentationValue141.tickLabelInterval =
        presentationParam34.tickLabelInterval ?? void 0),
      (presentationValue141.tickMarkInterval =
        presentationParam34.tickMarkInterval ?? void 0),
      (presentationValue141.id = presentationParam34.id ?? void 0),
      (presentationValue141.kind = presentationParam34.kind ?? void 0),
      (presentationValue141.crossingAxisId =
        presentationParam34.crossingAxisId ?? void 0),
      (presentationValue141.categoryGapWidth =
        presentationParam34.categoryGapWidth ?? void 0),
      (presentationValue141.unit = presentationParam34.unit ?? void 0),
      presentationValue141
    );
  },
};
function presentationHelper90() {
  return {
    showValue: !1,
    position: 0,
    textStyle: void 0,
    leaderLine: void 0,
    fill: void 0,
    stroke: void 0,
    showCategoryName: !1,
    showSeriesName: !1,
    showLegendKey: !1,
    showPercent: !1,
    showBubbleSize: !1,
    showLeaderLines: !1,
    showFlagsPresentMask: void 0,
    showDataLabelsRange: void 0,
    dataLabelsRangeFormula: void 0,
  };
}
var presentationValue62 = {
  encode(presentationParam57, presentationParam58 = new presentationPr()) {
    return (
      presentationParam57.showValue !== !1 &&
        presentationParam58.uint32(8).bool(presentationParam57.showValue),
      presentationParam57.position !== 0 &&
        presentationParam58.uint32(16).int32(presentationParam57.position),
      presentationParam57.textStyle !== void 0 &&
        presentationOr
          .encode(
            presentationParam57.textStyle,
            presentationParam58.uint32(26).fork(),
          )
          .join(),
      presentationParam57.leaderLine !== void 0 &&
        presentationJn
          .encode(
            presentationParam57.leaderLine,
            presentationParam58.uint32(34).fork(),
          )
          .join(),
      presentationParam57.fill !== void 0 &&
        presentationHn
          .encode(
            presentationParam57.fill,
            presentationParam58.uint32(42).fork(),
          )
          .join(),
      presentationParam57.stroke !== void 0 &&
        presentationJn
          .encode(
            presentationParam57.stroke,
            presentationParam58.uint32(50).fork(),
          )
          .join(),
      presentationParam57.showCategoryName !== !1 &&
        presentationParam58
          .uint32(56)
          .bool(presentationParam57.showCategoryName),
      presentationParam57.showSeriesName !== !1 &&
        presentationParam58.uint32(64).bool(presentationParam57.showSeriesName),
      presentationParam57.showLegendKey !== !1 &&
        presentationParam58.uint32(72).bool(presentationParam57.showLegendKey),
      presentationParam57.showPercent !== !1 &&
        presentationParam58.uint32(80).bool(presentationParam57.showPercent),
      presentationParam57.showBubbleSize !== !1 &&
        presentationParam58.uint32(88).bool(presentationParam57.showBubbleSize),
      presentationParam57.showLeaderLines !== !1 &&
        presentationParam58
          .uint32(96)
          .bool(presentationParam57.showLeaderLines),
      presentationParam57.showFlagsPresentMask !== void 0 &&
        presentationParam58
          .uint32(120)
          .uint32(presentationParam57.showFlagsPresentMask),
      presentationParam57.showDataLabelsRange !== void 0 &&
        presentationParam58
          .uint32(104)
          .bool(presentationParam57.showDataLabelsRange),
      presentationParam57.dataLabelsRangeFormula !== void 0 &&
        presentationParam58
          .uint32(114)
          .string(presentationParam57.dataLabelsRangeFormula),
      presentationParam58
    );
  },
  decode(presentationParam50, presentationParam51) {
    let presentationValue154 =
        presentationParam50 instanceof presentationFr
          ? presentationParam50
          : new presentationFr(presentationParam50),
      presentationValue155 =
        presentationParam51 === void 0
          ? presentationValue154.len
          : presentationValue154.pos + presentationParam51,
      presentationValue156 = presentationHelper90();
    for (; presentationValue154.pos < presentationValue155; ) {
      let presentationValue164 = presentationValue154.uint32();
      switch (presentationValue164 >>> 3) {
        case 1:
          if (presentationValue164 !== 8) break;
          presentationValue156.showValue = presentationValue154.bool();
          continue;
        case 2:
          if (presentationValue164 !== 16) break;
          presentationValue156.position = presentationValue154.int32();
          continue;
        case 3:
          if (presentationValue164 !== 26) break;
          presentationValue156.textStyle = presentationOr.decode(
            presentationValue154,
            presentationValue154.uint32(),
          );
          continue;
        case 4:
          if (presentationValue164 !== 34) break;
          presentationValue156.leaderLine = presentationJn.decode(
            presentationValue154,
            presentationValue154.uint32(),
          );
          continue;
        case 5:
          if (presentationValue164 !== 42) break;
          presentationValue156.fill = presentationHn.decode(
            presentationValue154,
            presentationValue154.uint32(),
          );
          continue;
        case 6:
          if (presentationValue164 !== 50) break;
          presentationValue156.stroke = presentationJn.decode(
            presentationValue154,
            presentationValue154.uint32(),
          );
          continue;
        case 7:
          if (presentationValue164 !== 56) break;
          presentationValue156.showCategoryName = presentationValue154.bool();
          continue;
        case 8:
          if (presentationValue164 !== 64) break;
          presentationValue156.showSeriesName = presentationValue154.bool();
          continue;
        case 9:
          if (presentationValue164 !== 72) break;
          presentationValue156.showLegendKey = presentationValue154.bool();
          continue;
        case 10:
          if (presentationValue164 !== 80) break;
          presentationValue156.showPercent = presentationValue154.bool();
          continue;
        case 11:
          if (presentationValue164 !== 88) break;
          presentationValue156.showBubbleSize = presentationValue154.bool();
          continue;
        case 12:
          if (presentationValue164 !== 96) break;
          presentationValue156.showLeaderLines = presentationValue154.bool();
          continue;
        case 15:
          if (presentationValue164 !== 120) break;
          presentationValue156.showFlagsPresentMask =
            presentationValue154.uint32();
          continue;
        case 13:
          if (presentationValue164 !== 104) break;
          presentationValue156.showDataLabelsRange =
            presentationValue154.bool();
          continue;
        case 14:
          if (presentationValue164 !== 114) break;
          presentationValue156.dataLabelsRangeFormula =
            presentationValue154.string();
          continue;
      }
      if ((presentationValue164 & 7) == 4 || presentationValue164 === 0) break;
      presentationValue154.skip(presentationValue164 & 7);
    }
    return presentationValue156;
  },
  create(presentationParam1344) {
    return presentationValue62.fromPartial(presentationParam1344 ?? {});
  },
  fromPartial(presentationParam89) {
    let presentationValue202 = presentationHelper90();
    return (
      (presentationValue202.showValue = presentationParam89.showValue ?? !1),
      (presentationValue202.position = presentationParam89.position ?? 0),
      (presentationValue202.textStyle =
        presentationParam89.textStyle !== void 0 &&
        presentationParam89.textStyle !== null
          ? presentationOr.fromPartial(presentationParam89.textStyle)
          : void 0),
      (presentationValue202.leaderLine =
        presentationParam89.leaderLine !== void 0 &&
        presentationParam89.leaderLine !== null
          ? presentationJn.fromPartial(presentationParam89.leaderLine)
          : void 0),
      (presentationValue202.fill =
        presentationParam89.fill !== void 0 && presentationParam89.fill !== null
          ? presentationHn.fromPartial(presentationParam89.fill)
          : void 0),
      (presentationValue202.stroke =
        presentationParam89.stroke !== void 0 &&
        presentationParam89.stroke !== null
          ? presentationJn.fromPartial(presentationParam89.stroke)
          : void 0),
      (presentationValue202.showCategoryName =
        presentationParam89.showCategoryName ?? !1),
      (presentationValue202.showSeriesName =
        presentationParam89.showSeriesName ?? !1),
      (presentationValue202.showLegendKey =
        presentationParam89.showLegendKey ?? !1),
      (presentationValue202.showPercent =
        presentationParam89.showPercent ?? !1),
      (presentationValue202.showBubbleSize =
        presentationParam89.showBubbleSize ?? !1),
      (presentationValue202.showLeaderLines =
        presentationParam89.showLeaderLines ?? !1),
      (presentationValue202.showFlagsPresentMask =
        presentationParam89.showFlagsPresentMask ?? void 0),
      (presentationValue202.showDataLabelsRange =
        presentationParam89.showDataLabelsRange ?? void 0),
      (presentationValue202.dataLabelsRangeFormula =
        presentationParam89.dataLabelsRangeFormula ?? void 0),
      presentationValue202
    );
  },
};
function presentationHelper91() {
  return {
    idx: 0,
    text: void 0,
    position: void 0,
    textStyle: void 0,
    fill: void 0,
    stroke: void 0,
    showValue: void 0,
    showCategoryName: void 0,
    showSeriesName: void 0,
    showLegendKey: void 0,
    showPercent: void 0,
    showBubbleSize: void 0,
  };
}
var presentationValue63 = {
  encode(presentationParam117, presentationParam118 = new presentationPr()) {
    return (
      presentationParam117.idx !== 0 &&
        presentationParam118.uint32(8).int32(presentationParam117.idx),
      presentationParam117.text !== void 0 &&
        presentationParam118.uint32(18).string(presentationParam117.text),
      presentationParam117.position !== void 0 &&
        presentationParam118.uint32(24).int32(presentationParam117.position),
      presentationParam117.textStyle !== void 0 &&
        presentationOr
          .encode(
            presentationParam117.textStyle,
            presentationParam118.uint32(34).fork(),
          )
          .join(),
      presentationParam117.fill !== void 0 &&
        presentationHn
          .encode(
            presentationParam117.fill,
            presentationParam118.uint32(42).fork(),
          )
          .join(),
      presentationParam117.stroke !== void 0 &&
        presentationJn
          .encode(
            presentationParam117.stroke,
            presentationParam118.uint32(50).fork(),
          )
          .join(),
      presentationParam117.showValue !== void 0 &&
        presentationParam118.uint32(56).bool(presentationParam117.showValue),
      presentationParam117.showCategoryName !== void 0 &&
        presentationParam118
          .uint32(64)
          .bool(presentationParam117.showCategoryName),
      presentationParam117.showSeriesName !== void 0 &&
        presentationParam118
          .uint32(72)
          .bool(presentationParam117.showSeriesName),
      presentationParam117.showLegendKey !== void 0 &&
        presentationParam118
          .uint32(80)
          .bool(presentationParam117.showLegendKey),
      presentationParam117.showPercent !== void 0 &&
        presentationParam118.uint32(88).bool(presentationParam117.showPercent),
      presentationParam117.showBubbleSize !== void 0 &&
        presentationParam118
          .uint32(96)
          .bool(presentationParam117.showBubbleSize),
      presentationParam118
    );
  },
  decode(presentationParam78, presentationParam79) {
    let presentationValue187 =
        presentationParam78 instanceof presentationFr
          ? presentationParam78
          : new presentationFr(presentationParam78),
      presentationValue188 =
        presentationParam79 === void 0
          ? presentationValue187.len
          : presentationValue187.pos + presentationParam79,
      presentationValue189 = presentationHelper91();
    for (; presentationValue187.pos < presentationValue188; ) {
      let presentationValue220 = presentationValue187.uint32();
      switch (presentationValue220 >>> 3) {
        case 1:
          if (presentationValue220 !== 8) break;
          presentationValue189.idx = presentationValue187.int32();
          continue;
        case 2:
          if (presentationValue220 !== 18) break;
          presentationValue189.text = presentationValue187.string();
          continue;
        case 3:
          if (presentationValue220 !== 24) break;
          presentationValue189.position = presentationValue187.int32();
          continue;
        case 4:
          if (presentationValue220 !== 34) break;
          presentationValue189.textStyle = presentationOr.decode(
            presentationValue187,
            presentationValue187.uint32(),
          );
          continue;
        case 5:
          if (presentationValue220 !== 42) break;
          presentationValue189.fill = presentationHn.decode(
            presentationValue187,
            presentationValue187.uint32(),
          );
          continue;
        case 6:
          if (presentationValue220 !== 50) break;
          presentationValue189.stroke = presentationJn.decode(
            presentationValue187,
            presentationValue187.uint32(),
          );
          continue;
        case 7:
          if (presentationValue220 !== 56) break;
          presentationValue189.showValue = presentationValue187.bool();
          continue;
        case 8:
          if (presentationValue220 !== 64) break;
          presentationValue189.showCategoryName = presentationValue187.bool();
          continue;
        case 9:
          if (presentationValue220 !== 72) break;
          presentationValue189.showSeriesName = presentationValue187.bool();
          continue;
        case 10:
          if (presentationValue220 !== 80) break;
          presentationValue189.showLegendKey = presentationValue187.bool();
          continue;
        case 11:
          if (presentationValue220 !== 88) break;
          presentationValue189.showPercent = presentationValue187.bool();
          continue;
        case 12:
          if (presentationValue220 !== 96) break;
          presentationValue189.showBubbleSize = presentationValue187.bool();
          continue;
      }
      if ((presentationValue220 & 7) == 4 || presentationValue220 === 0) break;
      presentationValue187.skip(presentationValue220 & 7);
    }
    return presentationValue189;
  },
  create(presentationParam1216) {
    return presentationValue63.fromPartial(presentationParam1216 ?? {});
  },
  fromPartial(presentationParam182) {
    let presentationValue305 = presentationHelper91();
    return (
      (presentationValue305.idx = presentationParam182.idx ?? 0),
      (presentationValue305.text = presentationParam182.text ?? void 0),
      (presentationValue305.position = presentationParam182.position ?? void 0),
      (presentationValue305.textStyle =
        presentationParam182.textStyle !== void 0 &&
        presentationParam182.textStyle !== null
          ? presentationOr.fromPartial(presentationParam182.textStyle)
          : void 0),
      (presentationValue305.fill =
        presentationParam182.fill !== void 0 &&
        presentationParam182.fill !== null
          ? presentationHn.fromPartial(presentationParam182.fill)
          : void 0),
      (presentationValue305.stroke =
        presentationParam182.stroke !== void 0 &&
        presentationParam182.stroke !== null
          ? presentationJn.fromPartial(presentationParam182.stroke)
          : void 0),
      (presentationValue305.showValue =
        presentationParam182.showValue ?? void 0),
      (presentationValue305.showCategoryName =
        presentationParam182.showCategoryName ?? void 0),
      (presentationValue305.showSeriesName =
        presentationParam182.showSeriesName ?? void 0),
      (presentationValue305.showLegendKey =
        presentationParam182.showLegendKey ?? void 0),
      (presentationValue305.showPercent =
        presentationParam182.showPercent ?? void 0),
      (presentationValue305.showBubbleSize =
        presentationParam182.showBubbleSize ?? void 0),
      presentationValue305
    );
  },
};
function presentationHelper92() {
  return {
    mapArea: void 0,
    projection: void 0,
    labelLayout: void 0,
    dataLevel: void 0,
    showUnknown: void 0,
    onlyRegionsWithData: void 0,
    regionFilter: void 0,
    colorScale: [],
    buckets: void 0,
    classification: void 0,
    colorScaleDetails: void 0,
  };
}
var presentationValue64 = {
  encode(presentationParam128, presentationParam129 = new presentationPr()) {
    (presentationParam128.mapArea !== void 0 &&
      presentationParam129.uint32(8).int32(presentationParam128.mapArea),
      presentationParam128.projection !== void 0 &&
        presentationParam129.uint32(16).int32(presentationParam128.projection),
      presentationParam128.labelLayout !== void 0 &&
        presentationParam129.uint32(24).int32(presentationParam128.labelLayout),
      presentationParam128.dataLevel !== void 0 &&
        presentationParam129.uint32(32).int32(presentationParam128.dataLevel),
      presentationParam128.showUnknown !== void 0 &&
        presentationParam129.uint32(40).bool(presentationParam128.showUnknown),
      presentationParam128.onlyRegionsWithData !== void 0 &&
        presentationParam129
          .uint32(48)
          .bool(presentationParam128.onlyRegionsWithData),
      presentationParam128.regionFilter !== void 0 &&
        presentationParam129
          .uint32(58)
          .string(presentationParam128.regionFilter));
    for (let presentationValue1258 of presentationParam128.colorScale)
      presentationRn
        .encode(presentationValue1258, presentationParam129.uint32(66).fork())
        .join();
    return (
      presentationParam128.buckets !== void 0 &&
        presentationParam129.uint32(72).int32(presentationParam128.buckets),
      presentationParam128.classification !== void 0 &&
        presentationParam129
          .uint32(80)
          .int32(presentationParam128.classification),
      presentationParam128.colorScaleDetails !== void 0 &&
        presentationValue77
          .encode(
            presentationParam128.colorScaleDetails,
            presentationParam129.uint32(90).fork(),
          )
          .join(),
      presentationParam129
    );
  },
  decode(presentationParam83, presentationParam84) {
    let presentationValue195 =
        presentationParam83 instanceof presentationFr
          ? presentationParam83
          : new presentationFr(presentationParam83),
      presentationValue196 =
        presentationParam84 === void 0
          ? presentationValue195.len
          : presentationValue195.pos + presentationParam84,
      presentationValue197 = presentationHelper92();
    for (; presentationValue195.pos < presentationValue196; ) {
      let presentationValue232 = presentationValue195.uint32();
      switch (presentationValue232 >>> 3) {
        case 1:
          if (presentationValue232 !== 8) break;
          presentationValue197.mapArea = presentationValue195.int32();
          continue;
        case 2:
          if (presentationValue232 !== 16) break;
          presentationValue197.projection = presentationValue195.int32();
          continue;
        case 3:
          if (presentationValue232 !== 24) break;
          presentationValue197.labelLayout = presentationValue195.int32();
          continue;
        case 4:
          if (presentationValue232 !== 32) break;
          presentationValue197.dataLevel = presentationValue195.int32();
          continue;
        case 5:
          if (presentationValue232 !== 40) break;
          presentationValue197.showUnknown = presentationValue195.bool();
          continue;
        case 6:
          if (presentationValue232 !== 48) break;
          presentationValue197.onlyRegionsWithData =
            presentationValue195.bool();
          continue;
        case 7:
          if (presentationValue232 !== 58) break;
          presentationValue197.regionFilter = presentationValue195.string();
          continue;
        case 8:
          if (presentationValue232 !== 66) break;
          presentationValue197.colorScale.push(
            presentationRn.decode(
              presentationValue195,
              presentationValue195.uint32(),
            ),
          );
          continue;
        case 9:
          if (presentationValue232 !== 72) break;
          presentationValue197.buckets = presentationValue195.int32();
          continue;
        case 10:
          if (presentationValue232 !== 80) break;
          presentationValue197.classification = presentationValue195.int32();
          continue;
        case 11:
          if (presentationValue232 !== 90) break;
          presentationValue197.colorScaleDetails = presentationValue77.decode(
            presentationValue195,
            presentationValue195.uint32(),
          );
          continue;
      }
      if ((presentationValue232 & 7) == 4 || presentationValue232 === 0) break;
      presentationValue195.skip(presentationValue232 & 7);
    }
    return presentationValue197;
  },
  create(presentationParam1217) {
    return presentationValue64.fromPartial(presentationParam1217 ?? {});
  },
  fromPartial(presentationParam214) {
    let presentationValue340 = presentationHelper92();
    return (
      (presentationValue340.mapArea = presentationParam214.mapArea ?? void 0),
      (presentationValue340.projection =
        presentationParam214.projection ?? void 0),
      (presentationValue340.labelLayout =
        presentationParam214.labelLayout ?? void 0),
      (presentationValue340.dataLevel =
        presentationParam214.dataLevel ?? void 0),
      (presentationValue340.showUnknown =
        presentationParam214.showUnknown ?? void 0),
      (presentationValue340.onlyRegionsWithData =
        presentationParam214.onlyRegionsWithData ?? void 0),
      (presentationValue340.regionFilter =
        presentationParam214.regionFilter ?? void 0),
      (presentationValue340.colorScale =
        presentationParam214.colorScale?.map((presentationParam1429) =>
          presentationRn.fromPartial(presentationParam1429),
        ) || []),
      (presentationValue340.buckets = presentationParam214.buckets ?? void 0),
      (presentationValue340.classification =
        presentationParam214.classification ?? void 0),
      (presentationValue340.colorScaleDetails =
        presentationParam214.colorScaleDetails !== void 0 &&
        presentationParam214.colorScaleDetails !== null
          ? presentationValue77.fromPartial(
              presentationParam214.colorScaleDetails,
            )
          : void 0),
      presentationValue340
    );
  },
};
function presentationHelper93() {
  return {
    levels: [],
  };
}
var presentationValue65 = {
  encode(presentationParam1115, presentationParam1116 = new presentationPr()) {
    for (let presentationValue1328 of presentationParam1115.levels)
      presentationParam1116.uint32(10).string(presentationValue1328);
    return presentationParam1116;
  },
  decode(presentationParam742, presentationParam743) {
    let presentationValue922 =
        presentationParam742 instanceof presentationFr
          ? presentationParam742
          : new presentationFr(presentationParam742),
      presentationValue923 =
        presentationParam743 === void 0
          ? presentationValue922.len
          : presentationValue922.pos + presentationParam743,
      presentationValue924 = presentationHelper93();
    for (; presentationValue922.pos < presentationValue923; ) {
      let presentationValue1101 = presentationValue922.uint32();
      switch (presentationValue1101 >>> 3) {
        case 1:
          if (presentationValue1101 !== 10) break;
          presentationValue924.levels.push(presentationValue922.string());
          continue;
      }
      if ((presentationValue1101 & 7) == 4 || presentationValue1101 === 0)
        break;
      presentationValue922.skip(presentationValue1101 & 7);
    }
    return presentationValue924;
  },
  create(presentationParam1218) {
    return presentationValue65.fromPartial(presentationParam1218 ?? {});
  },
  fromPartial(presentationParam1123) {
    let presentationValue1237 = presentationHelper93();
    return (
      (presentationValue1237.levels =
        presentationParam1123.levels?.map(
          (presentationParam1475) => presentationParam1475,
        ) || []),
      presentationValue1237
    );
  },
};
function presentationHelper94() {
  return {
    parentLabelLayout: void 0,
  };
}
var presentationValue66 = {
  encode(presentationParam1041, presentationParam1042 = new presentationPr()) {
    return (
      presentationParam1041.parentLabelLayout !== void 0 &&
        presentationParam1042
          .uint32(8)
          .int32(presentationParam1041.parentLabelLayout),
      presentationParam1042
    );
  },
  decode(presentationParam737, presentationParam738) {
    let presentationValue916 =
        presentationParam737 instanceof presentationFr
          ? presentationParam737
          : new presentationFr(presentationParam737),
      presentationValue917 =
        presentationParam738 === void 0
          ? presentationValue916.len
          : presentationValue916.pos + presentationParam738,
      presentationValue918 = presentationHelper94();
    for (; presentationValue916.pos < presentationValue917; ) {
      let presentationValue1100 = presentationValue916.uint32();
      switch (presentationValue1100 >>> 3) {
        case 1:
          if (presentationValue1100 !== 8) break;
          presentationValue918.parentLabelLayout = presentationValue916.int32();
          continue;
      }
      if ((presentationValue1100 & 7) == 4 || presentationValue1100 === 0)
        break;
      presentationValue916.skip(presentationValue1100 & 7);
    }
    return presentationValue918;
  },
  create(presentationParam1219) {
    return presentationValue66.fromPartial(presentationParam1219 ?? {});
  },
  fromPartial(presentationParam1083) {
    let presentationValue1184 = presentationHelper94();
    return (
      (presentationValue1184.parentLabelLayout =
        presentationParam1083.parentLabelLayout ?? void 0),
      presentationValue1184
    );
  },
};
function presentationHelper95() {
  return {
    showMeanLine: void 0,
    showMeanMarker: void 0,
    showNonOutliers: void 0,
    showOutliers: void 0,
    quartileMethod: void 0,
  };
}
var presentationValue67 = {
  encode(presentationParam473, presentationParam474 = new presentationPr()) {
    return (
      presentationParam473.showMeanLine !== void 0 &&
        presentationParam474.uint32(8).bool(presentationParam473.showMeanLine),
      presentationParam473.showMeanMarker !== void 0 &&
        presentationParam474
          .uint32(16)
          .bool(presentationParam473.showMeanMarker),
      presentationParam473.showNonOutliers !== void 0 &&
        presentationParam474
          .uint32(24)
          .bool(presentationParam473.showNonOutliers),
      presentationParam473.showOutliers !== void 0 &&
        presentationParam474.uint32(32).bool(presentationParam473.showOutliers),
      presentationParam473.quartileMethod !== void 0 &&
        presentationParam474
          .uint32(40)
          .int32(presentationParam473.quartileMethod),
      presentationParam474
    );
  },
  decode(presentationParam286, presentationParam287) {
    let presentationValue423 =
        presentationParam286 instanceof presentationFr
          ? presentationParam286
          : new presentationFr(presentationParam286),
      presentationValue424 =
        presentationParam287 === void 0
          ? presentationValue423.len
          : presentationValue423.pos + presentationParam287,
      presentationValue425 = presentationHelper95();
    for (; presentationValue423.pos < presentationValue424; ) {
      let presentationValue596 = presentationValue423.uint32();
      switch (presentationValue596 >>> 3) {
        case 1:
          if (presentationValue596 !== 8) break;
          presentationValue425.showMeanLine = presentationValue423.bool();
          continue;
        case 2:
          if (presentationValue596 !== 16) break;
          presentationValue425.showMeanMarker = presentationValue423.bool();
          continue;
        case 3:
          if (presentationValue596 !== 24) break;
          presentationValue425.showNonOutliers = presentationValue423.bool();
          continue;
        case 4:
          if (presentationValue596 !== 32) break;
          presentationValue425.showOutliers = presentationValue423.bool();
          continue;
        case 5:
          if (presentationValue596 !== 40) break;
          presentationValue425.quartileMethod = presentationValue423.int32();
          continue;
      }
      if ((presentationValue596 & 7) == 4 || presentationValue596 === 0) break;
      presentationValue423.skip(presentationValue596 & 7);
    }
    return presentationValue425;
  },
  create(presentationParam1220) {
    return presentationValue67.fromPartial(presentationParam1220 ?? {});
  },
  fromPartial(presentationParam703) {
    let presentationValue898 = presentationHelper95();
    return (
      (presentationValue898.showMeanLine =
        presentationParam703.showMeanLine ?? void 0),
      (presentationValue898.showMeanMarker =
        presentationParam703.showMeanMarker ?? void 0),
      (presentationValue898.showNonOutliers =
        presentationParam703.showNonOutliers ?? void 0),
      (presentationValue898.showOutliers =
        presentationParam703.showOutliers ?? void 0),
      (presentationValue898.quartileMethod =
        presentationParam703.quartileMethod ?? void 0),
      presentationValue898
    );
  },
};
function presentationHelper96() {
  return {
    intervalClosed: void 0,
    binWidth: void 0,
    binCount: void 0,
    underflow: void 0,
    overflow: void 0,
    aggregated: void 0,
  };
}
var presentationValue68 = {
  encode(presentationParam431, presentationParam432 = new presentationPr()) {
    return (
      presentationParam431.intervalClosed !== void 0 &&
        presentationParam432
          .uint32(8)
          .int32(presentationParam431.intervalClosed),
      presentationParam431.binWidth !== void 0 &&
        presentationParam432.uint32(17).double(presentationParam431.binWidth),
      presentationParam431.binCount !== void 0 &&
        presentationParam432.uint32(24).uint32(presentationParam431.binCount),
      presentationParam431.underflow !== void 0 &&
        presentationParam432.uint32(33).double(presentationParam431.underflow),
      presentationParam431.overflow !== void 0 &&
        presentationParam432.uint32(41).double(presentationParam431.overflow),
      presentationParam431.aggregated !== void 0 &&
        presentationParam432.uint32(48).bool(presentationParam431.aggregated),
      presentationParam432
    );
  },
  decode(presentationParam246, presentationParam247) {
    let presentationValue374 =
        presentationParam246 instanceof presentationFr
          ? presentationParam246
          : new presentationFr(presentationParam246),
      presentationValue375 =
        presentationParam247 === void 0
          ? presentationValue374.len
          : presentationValue374.pos + presentationParam247,
      presentationValue376 = presentationHelper96();
    for (; presentationValue374.pos < presentationValue375; ) {
      let presentationValue497 = presentationValue374.uint32();
      switch (presentationValue497 >>> 3) {
        case 1:
          if (presentationValue497 !== 8) break;
          presentationValue376.intervalClosed = presentationValue374.int32();
          continue;
        case 2:
          if (presentationValue497 !== 17) break;
          presentationValue376.binWidth = presentationValue374.double();
          continue;
        case 3:
          if (presentationValue497 !== 24) break;
          presentationValue376.binCount = presentationValue374.uint32();
          continue;
        case 4:
          if (presentationValue497 !== 33) break;
          presentationValue376.underflow = presentationValue374.double();
          continue;
        case 5:
          if (presentationValue497 !== 41) break;
          presentationValue376.overflow = presentationValue374.double();
          continue;
        case 6:
          if (presentationValue497 !== 48) break;
          presentationValue376.aggregated = presentationValue374.bool();
          continue;
      }
      if ((presentationValue497 & 7) == 4 || presentationValue497 === 0) break;
      presentationValue374.skip(presentationValue497 & 7);
    }
    return presentationValue376;
  },
  create(presentationParam1221) {
    return presentationValue68.fromPartial(presentationParam1221 ?? {});
  },
  fromPartial(presentationParam728) {
    let presentationValue911 = presentationHelper96();
    return (
      (presentationValue911.intervalClosed =
        presentationParam728.intervalClosed ?? void 0),
      (presentationValue911.binWidth = presentationParam728.binWidth ?? void 0),
      (presentationValue911.binCount = presentationParam728.binCount ?? void 0),
      (presentationValue911.underflow =
        presentationParam728.underflow ?? void 0),
      (presentationValue911.overflow = presentationParam728.overflow ?? void 0),
      (presentationValue911.aggregated =
        presentationParam728.aggregated ?? void 0),
      presentationValue911
    );
  },
};
function presentationHelper97() {
  return {
    artifactId: ``,
    autoUpdate: void 0,
  };
}
var presentationValue69 = {
  encode(presentationParam955, presentationParam956 = new presentationPr()) {
    return (
      presentationParam955.artifactId !== `` &&
        presentationParam956.uint32(10).string(presentationParam955.artifactId),
      presentationParam955.autoUpdate !== void 0 &&
        presentationParam956.uint32(16).bool(presentationParam955.autoUpdate),
      presentationParam956
    );
  },
  decode(presentationParam601, presentationParam602) {
    let presentationValue791 =
        presentationParam601 instanceof presentationFr
          ? presentationParam601
          : new presentationFr(presentationParam601),
      presentationValue792 =
        presentationParam602 === void 0
          ? presentationValue791.len
          : presentationValue791.pos + presentationParam602,
      presentationValue793 = presentationHelper97();
    for (; presentationValue791.pos < presentationValue792; ) {
      let presentationValue1030 = presentationValue791.uint32();
      switch (presentationValue1030 >>> 3) {
        case 1:
          if (presentationValue1030 !== 10) break;
          presentationValue793.artifactId = presentationValue791.string();
          continue;
        case 2:
          if (presentationValue1030 !== 16) break;
          presentationValue793.autoUpdate = presentationValue791.bool();
          continue;
      }
      if ((presentationValue1030 & 7) == 4 || presentationValue1030 === 0)
        break;
      presentationValue791.skip(presentationValue1030 & 7);
    }
    return presentationValue793;
  },
  create(presentationParam1222) {
    return presentationValue69.fromPartial(presentationParam1222 ?? {});
  },
  fromPartial(presentationParam1038) {
    let presentationValue1158 = presentationHelper97();
    return (
      (presentationValue1158.artifactId =
        presentationParam1038.artifactId ?? ``),
      (presentationValue1158.autoUpdate =
        presentationParam1038.autoUpdate ?? void 0),
      presentationValue1158
    );
  },
};
function presentationHelper98() {
  return {
    subtotalIndices: [],
  };
}
var presentationValue70 = {
  encode(presentationParam1039, presentationParam1040 = new presentationPr()) {
    presentationParam1040.uint32(10).fork();
    for (let presentationValue1333 of presentationParam1039.subtotalIndices)
      presentationParam1040.uint32(presentationValue1333);
    return (presentationParam1040.join(), presentationParam1040);
  },
  decode(presentationParam485, presentationParam486) {
    let presentationValue648 =
        presentationParam485 instanceof presentationFr
          ? presentationParam485
          : new presentationFr(presentationParam485),
      presentationValue649 =
        presentationParam486 === void 0
          ? presentationValue648.len
          : presentationValue648.pos + presentationParam486,
      presentationValue650 = presentationHelper98();
    for (; presentationValue648.pos < presentationValue649; ) {
      let presentationValue925 = presentationValue648.uint32();
      switch (presentationValue925 >>> 3) {
        case 1:
          if (presentationValue925 === 8) {
            presentationValue650.subtotalIndices.push(
              presentationValue648.uint32(),
            );
            continue;
          }
          if (presentationValue925 === 10) {
            let presentationValue1188 =
              presentationValue648.uint32() + presentationValue648.pos;
            for (; presentationValue648.pos < presentationValue1188; )
              presentationValue650.subtotalIndices.push(
                presentationValue648.uint32(),
              );
            continue;
          }
          break;
      }
      if ((presentationValue925 & 7) == 4 || presentationValue925 === 0) break;
      presentationValue648.skip(presentationValue925 & 7);
    }
    return presentationValue650;
  },
  create(presentationParam1223) {
    return presentationValue70.fromPartial(presentationParam1223 ?? {});
  },
  fromPartial(presentationParam1080) {
    let presentationValue1180 = presentationHelper98();
    return (
      (presentationValue1180.subtotalIndices =
        presentationParam1080.subtotalIndices?.map(
          (presentationParam1476) => presentationParam1476,
        ) || []),
      presentationValue1180
    );
  },
};
function presentationHelper99() {
  return {
    gapWidth: void 0,
  };
}
var presentationValue71 = {
  encode(presentationParam1096, presentationParam1097 = new presentationPr()) {
    return (
      presentationParam1096.gapWidth !== void 0 &&
        presentationParam1097.uint32(9).double(presentationParam1096.gapWidth),
      presentationParam1097
    );
  },
  decode(presentationParam773, presentationParam774) {
    let presentationValue951 =
        presentationParam773 instanceof presentationFr
          ? presentationParam773
          : new presentationFr(presentationParam773),
      presentationValue952 =
        presentationParam774 === void 0
          ? presentationValue951.len
          : presentationValue951.pos + presentationParam774,
      presentationValue953 = presentationHelper99();
    for (; presentationValue951.pos < presentationValue952; ) {
      let presentationValue1117 = presentationValue951.uint32();
      switch (presentationValue1117 >>> 3) {
        case 1:
          if (presentationValue1117 !== 9) break;
          presentationValue953.gapWidth = presentationValue951.double();
          continue;
      }
      if ((presentationValue1117 & 7) == 4 || presentationValue1117 === 0)
        break;
      presentationValue951.skip(presentationValue1117 & 7);
    }
    return presentationValue953;
  },
  create(presentationParam1224) {
    return presentationValue71.fromPartial(presentationParam1224 ?? {});
  },
  fromPartial(presentationParam1126) {
    let presentationValue1259 = presentationHelper99();
    return (
      (presentationValue1259.gapWidth =
        presentationParam1126.gapWidth ?? void 0),
      presentationValue1259
    );
  },
};
function presentationHelper100() {
  return {
    styleId: void 0,
    colorStyleId: void 0,
    palette: [],
    themeName: void 0,
    colorStyleMethod: void 0,
    chartStyleEntries: [],
    chartStyleMarkerLayout: void 0,
    colorStyleVariations: [],
  };
}
var presentationValue72 = {
  encode(presentationParam183, presentationParam184 = new presentationPr()) {
    (presentationParam183.styleId !== void 0 &&
      presentationParam184.uint32(8).int32(presentationParam183.styleId),
      presentationParam183.colorStyleId !== void 0 &&
        presentationParam184
          .uint32(16)
          .int32(presentationParam183.colorStyleId));
    for (let presentationValue1286 of presentationParam183.palette)
      presentationRn
        .encode(presentationValue1286, presentationParam184.uint32(26).fork())
        .join();
    (presentationParam183.themeName !== void 0 &&
      presentationParam184.uint32(34).string(presentationParam183.themeName),
      presentationParam183.colorStyleMethod !== void 0 &&
        presentationParam184
          .uint32(42)
          .string(presentationParam183.colorStyleMethod));
    for (let presentationValue1214 of presentationParam183.chartStyleEntries)
      presentationValue76
        .encode(presentationValue1214, presentationParam184.uint32(50).fork())
        .join();
    presentationParam183.chartStyleMarkerLayout !== void 0 &&
      presentationValue80
        .encode(
          presentationParam183.chartStyleMarkerLayout,
          presentationParam184.uint32(58).fork(),
        )
        .join();
    for (let presentationValue1204 of presentationParam183.colorStyleVariations)
      presentationValue7
        .encode(presentationValue1204, presentationParam184.uint32(66).fork())
        .join();
    return presentationParam184;
  },
  decode(presentationParam120, presentationParam121) {
    let presentationValue234 =
        presentationParam120 instanceof presentationFr
          ? presentationParam120
          : new presentationFr(presentationParam120),
      presentationValue235 =
        presentationParam121 === void 0
          ? presentationValue234.len
          : presentationValue234.pos + presentationParam121,
      presentationValue236 = presentationHelper100();
    for (; presentationValue234.pos < presentationValue235; ) {
      let presentationValue285 = presentationValue234.uint32();
      switch (presentationValue285 >>> 3) {
        case 1:
          if (presentationValue285 !== 8) break;
          presentationValue236.styleId = presentationValue234.int32();
          continue;
        case 2:
          if (presentationValue285 !== 16) break;
          presentationValue236.colorStyleId = presentationValue234.int32();
          continue;
        case 3:
          if (presentationValue285 !== 26) break;
          presentationValue236.palette.push(
            presentationRn.decode(
              presentationValue234,
              presentationValue234.uint32(),
            ),
          );
          continue;
        case 4:
          if (presentationValue285 !== 34) break;
          presentationValue236.themeName = presentationValue234.string();
          continue;
        case 5:
          if (presentationValue285 !== 42) break;
          presentationValue236.colorStyleMethod = presentationValue234.string();
          continue;
        case 6:
          if (presentationValue285 !== 50) break;
          presentationValue236.chartStyleEntries.push(
            presentationValue76.decode(
              presentationValue234,
              presentationValue234.uint32(),
            ),
          );
          continue;
        case 7:
          if (presentationValue285 !== 58) break;
          presentationValue236.chartStyleMarkerLayout =
            presentationValue80.decode(
              presentationValue234,
              presentationValue234.uint32(),
            );
          continue;
        case 8:
          if (presentationValue285 !== 66) break;
          presentationValue236.colorStyleVariations.push(
            presentationValue7.decode(
              presentationValue234,
              presentationValue234.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue285 & 7) == 4 || presentationValue285 === 0) break;
      presentationValue234.skip(presentationValue285 & 7);
    }
    return presentationValue236;
  },
  create(presentationParam1225) {
    return presentationValue72.fromPartial(presentationParam1225 ?? {});
  },
  fromPartial(presentationParam231) {
    let presentationValue363 = presentationHelper100();
    return (
      (presentationValue363.styleId = presentationParam231.styleId ?? void 0),
      (presentationValue363.colorStyleId =
        presentationParam231.colorStyleId ?? void 0),
      (presentationValue363.palette =
        presentationParam231.palette?.map((presentationParam1430) =>
          presentationRn.fromPartial(presentationParam1430),
        ) || []),
      (presentationValue363.themeName =
        presentationParam231.themeName ?? void 0),
      (presentationValue363.colorStyleMethod =
        presentationParam231.colorStyleMethod ?? void 0),
      (presentationValue363.chartStyleEntries =
        presentationParam231.chartStyleEntries?.map((presentationParam1402) =>
          presentationValue76.fromPartial(presentationParam1402),
        ) || []),
      (presentationValue363.chartStyleMarkerLayout =
        presentationParam231.chartStyleMarkerLayout !== void 0 &&
        presentationParam231.chartStyleMarkerLayout !== null
          ? presentationValue80.fromPartial(
              presentationParam231.chartStyleMarkerLayout,
            )
          : void 0),
      (presentationValue363.colorStyleVariations =
        presentationParam231.colorStyleVariations?.map(
          (presentationParam1431) =>
            presentationValue7.fromPartial(presentationParam1431),
        ) || []),
      presentationValue363
    );
  },
};
function presentationHelper101() {
  return {
    index: void 0,
    modifiers: void 0,
    color: void 0,
    styleColor: void 0,
  };
}
var presentationValue73 = {
  encode(presentationParam673, presentationParam674 = new presentationPr()) {
    return (
      presentationParam673.index !== void 0 &&
        presentationParam674.uint32(8).uint32(presentationParam673.index),
      presentationParam673.modifiers !== void 0 &&
        presentationParam674.uint32(18).string(presentationParam673.modifiers),
      presentationParam673.color !== void 0 &&
        presentationRn
          .encode(
            presentationParam673.color,
            presentationParam674.uint32(26).fork(),
          )
          .join(),
      presentationParam673.styleColor !== void 0 &&
        presentationParam674.uint32(34).string(presentationParam673.styleColor),
      presentationParam674
    );
  },
  decode(presentationParam362, presentationParam363) {
    let presentationValue505 =
        presentationParam362 instanceof presentationFr
          ? presentationParam362
          : new presentationFr(presentationParam362),
      presentationValue506 =
        presentationParam363 === void 0
          ? presentationValue505.len
          : presentationValue505.pos + presentationParam363,
      presentationValue507 = presentationHelper101();
    for (; presentationValue505.pos < presentationValue506; ) {
      let presentationValue723 = presentationValue505.uint32();
      switch (presentationValue723 >>> 3) {
        case 1:
          if (presentationValue723 !== 8) break;
          presentationValue507.index = presentationValue505.uint32();
          continue;
        case 2:
          if (presentationValue723 !== 18) break;
          presentationValue507.modifiers = presentationValue505.string();
          continue;
        case 3:
          if (presentationValue723 !== 26) break;
          presentationValue507.color = presentationRn.decode(
            presentationValue505,
            presentationValue505.uint32(),
          );
          continue;
        case 4:
          if (presentationValue723 !== 34) break;
          presentationValue507.styleColor = presentationValue505.string();
          continue;
      }
      if ((presentationValue723 & 7) == 4 || presentationValue723 === 0) break;
      presentationValue505.skip(presentationValue723 & 7);
    }
    return presentationValue507;
  },
  create(presentationParam1345) {
    return presentationValue73.fromPartial(presentationParam1345 ?? {});
  },
  fromPartial(presentationParam824) {
    let presentationValue995 = presentationHelper101();
    return (
      (presentationValue995.index = presentationParam824.index ?? void 0),
      (presentationValue995.modifiers =
        presentationParam824.modifiers ?? void 0),
      (presentationValue995.color =
        presentationParam824.color !== void 0 &&
        presentationParam824.color !== null
          ? presentationRn.fromPartial(presentationParam824.color)
          : void 0),
      (presentationValue995.styleColor =
        presentationParam824.styleColor ?? void 0),
      presentationValue995
    );
  },
};
function presentationHelper102() {
  return {
    index: 0,
    modifiers: void 0,
    color: void 0,
    styleColor: void 0,
  };
}
var presentationValue74 = {
  encode(presentationParam689, presentationParam690 = new presentationPr()) {
    return (
      presentationParam689.index !== 0 &&
        presentationParam690.uint32(8).int32(presentationParam689.index),
      presentationParam689.modifiers !== void 0 &&
        presentationParam690.uint32(18).string(presentationParam689.modifiers),
      presentationParam689.color !== void 0 &&
        presentationRn
          .encode(
            presentationParam689.color,
            presentationParam690.uint32(26).fork(),
          )
          .join(),
      presentationParam689.styleColor !== void 0 &&
        presentationParam690.uint32(34).string(presentationParam689.styleColor),
      presentationParam690
    );
  },
  decode(presentationParam367, presentationParam368) {
    let presentationValue511 =
        presentationParam367 instanceof presentationFr
          ? presentationParam367
          : new presentationFr(presentationParam367),
      presentationValue512 =
        presentationParam368 === void 0
          ? presentationValue511.len
          : presentationValue511.pos + presentationParam368,
      presentationValue513 = presentationHelper102();
    for (; presentationValue511.pos < presentationValue512; ) {
      let presentationValue725 = presentationValue511.uint32();
      switch (presentationValue725 >>> 3) {
        case 1:
          if (presentationValue725 !== 8) break;
          presentationValue513.index = presentationValue511.int32();
          continue;
        case 2:
          if (presentationValue725 !== 18) break;
          presentationValue513.modifiers = presentationValue511.string();
          continue;
        case 3:
          if (presentationValue725 !== 26) break;
          presentationValue513.color = presentationRn.decode(
            presentationValue511,
            presentationValue511.uint32(),
          );
          continue;
        case 4:
          if (presentationValue725 !== 34) break;
          presentationValue513.styleColor = presentationValue511.string();
          continue;
      }
      if ((presentationValue725 & 7) == 4 || presentationValue725 === 0) break;
      presentationValue511.skip(presentationValue725 & 7);
    }
    return presentationValue513;
  },
  create(presentationParam1226) {
    return presentationValue74.fromPartial(presentationParam1226 ?? {});
  },
  fromPartial(presentationParam835) {
    let presentationValue1004 = presentationHelper102();
    return (
      (presentationValue1004.index = presentationParam835.index ?? 0),
      (presentationValue1004.modifiers =
        presentationParam835.modifiers ?? void 0),
      (presentationValue1004.color =
        presentationParam835.color !== void 0 &&
        presentationParam835.color !== null
          ? presentationRn.fromPartial(presentationParam835.color)
          : void 0),
      (presentationValue1004.styleColor =
        presentationParam835.styleColor ?? void 0),
      presentationValue1004
    );
  },
};
function $r() {
  return {
    anchor: void 0,
    vertical: void 0,
    rotation: void 0,
    useParagraphSpacing: void 0,
    leftInset: void 0,
    topInset: void 0,
    rightInset: void 0,
    bottomInset: void 0,
    wrap: void 0,
    anchorCenter: void 0,
    autoFit: void 0,
  };
}
var presentationValue75 = {
  encode(presentationParam154, presentationParam155 = new presentationPr()) {
    return (
      presentationParam154.anchor !== void 0 &&
        presentationParam155.uint32(8).int32(presentationParam154.anchor),
      presentationParam154.vertical !== void 0 &&
        presentationParam155.uint32(16).int32(presentationParam154.vertical),
      presentationParam154.rotation !== void 0 &&
        presentationParam155.uint32(24).int32(presentationParam154.rotation),
      presentationParam154.useParagraphSpacing !== void 0 &&
        presentationParam155
          .uint32(32)
          .bool(presentationParam154.useParagraphSpacing),
      presentationParam154.leftInset !== void 0 &&
        presentationParam155.uint32(40).int32(presentationParam154.leftInset),
      presentationParam154.topInset !== void 0 &&
        presentationParam155.uint32(48).int32(presentationParam154.topInset),
      presentationParam154.rightInset !== void 0 &&
        presentationParam155.uint32(56).int32(presentationParam154.rightInset),
      presentationParam154.bottomInset !== void 0 &&
        presentationParam155.uint32(64).int32(presentationParam154.bottomInset),
      presentationParam154.wrap !== void 0 &&
        presentationParam155.uint32(72).int32(presentationParam154.wrap),
      presentationParam154.anchorCenter !== void 0 &&
        presentationParam155.uint32(80).bool(presentationParam154.anchorCenter),
      presentationParam154.autoFit !== void 0 &&
        presentationValue19
          .encode(
            presentationParam154.autoFit,
            presentationParam155.uint32(90).fork(),
          )
          .join(),
      presentationParam155
    );
  },
  decode(presentationParam102, presentationParam103) {
    let presentationValue215 =
        presentationParam102 instanceof presentationFr
          ? presentationParam102
          : new presentationFr(presentationParam102),
      presentationValue216 =
        presentationParam103 === void 0
          ? presentationValue215.len
          : presentationValue215.pos + presentationParam103,
      presentationValue217 = $r();
    for (; presentationValue215.pos < presentationValue216; ) {
      let presentationValue270 = presentationValue215.uint32();
      switch (presentationValue270 >>> 3) {
        case 1:
          if (presentationValue270 !== 8) break;
          presentationValue217.anchor = presentationValue215.int32();
          continue;
        case 2:
          if (presentationValue270 !== 16) break;
          presentationValue217.vertical = presentationValue215.int32();
          continue;
        case 3:
          if (presentationValue270 !== 24) break;
          presentationValue217.rotation = presentationValue215.int32();
          continue;
        case 4:
          if (presentationValue270 !== 32) break;
          presentationValue217.useParagraphSpacing =
            presentationValue215.bool();
          continue;
        case 5:
          if (presentationValue270 !== 40) break;
          presentationValue217.leftInset = presentationValue215.int32();
          continue;
        case 6:
          if (presentationValue270 !== 48) break;
          presentationValue217.topInset = presentationValue215.int32();
          continue;
        case 7:
          if (presentationValue270 !== 56) break;
          presentationValue217.rightInset = presentationValue215.int32();
          continue;
        case 8:
          if (presentationValue270 !== 64) break;
          presentationValue217.bottomInset = presentationValue215.int32();
          continue;
        case 9:
          if (presentationValue270 !== 72) break;
          presentationValue217.wrap = presentationValue215.int32();
          continue;
        case 10:
          if (presentationValue270 !== 80) break;
          presentationValue217.anchorCenter = presentationValue215.bool();
          continue;
        case 11:
          if (presentationValue270 !== 90) break;
          presentationValue217.autoFit = presentationValue19.decode(
            presentationValue215,
            presentationValue215.uint32(),
          );
          continue;
      }
      if ((presentationValue270 & 7) == 4 || presentationValue270 === 0) break;
      presentationValue215.skip(presentationValue270 & 7);
    }
    return presentationValue217;
  },
  create(presentationParam1227) {
    return presentationValue75.fromPartial(presentationParam1227 ?? {});
  },
  fromPartial(presentationParam298) {
    let presentationValue439 = $r();
    return (
      (presentationValue439.anchor = presentationParam298.anchor ?? void 0),
      (presentationValue439.vertical = presentationParam298.vertical ?? void 0),
      (presentationValue439.rotation = presentationParam298.rotation ?? void 0),
      (presentationValue439.useParagraphSpacing =
        presentationParam298.useParagraphSpacing ?? void 0),
      (presentationValue439.leftInset =
        presentationParam298.leftInset ?? void 0),
      (presentationValue439.topInset = presentationParam298.topInset ?? void 0),
      (presentationValue439.rightInset =
        presentationParam298.rightInset ?? void 0),
      (presentationValue439.bottomInset =
        presentationParam298.bottomInset ?? void 0),
      (presentationValue439.wrap = presentationParam298.wrap ?? void 0),
      (presentationValue439.anchorCenter =
        presentationParam298.anchorCenter ?? void 0),
      (presentationValue439.autoFit =
        presentationParam298.autoFit !== void 0 &&
        presentationParam298.autoFit !== null
          ? presentationValue19.fromPartial(presentationParam298.autoFit)
          : void 0),
      presentationValue439
    );
  },
};
function presentationHelper103() {
  return {
    kind: 0,
    modifiers: void 0,
    lineReference: void 0,
    fillReference: void 0,
    effectReference: void 0,
    fontReference: void 0,
    fill: void 0,
    line: void 0,
    textStyle: void 0,
    body: void 0,
    lineWidthScale: void 0,
  };
}
var presentationValue76 = {
  encode(presentationParam106, presentationParam107 = new presentationPr()) {
    return (
      presentationParam106.kind !== 0 &&
        presentationParam107.uint32(8).int32(presentationParam106.kind),
      presentationParam106.modifiers !== void 0 &&
        presentationParam107.uint32(18).string(presentationParam106.modifiers),
      presentationParam106.lineReference !== void 0 &&
        presentationValue73
          .encode(
            presentationParam106.lineReference,
            presentationParam107.uint32(26).fork(),
          )
          .join(),
      presentationParam106.fillReference !== void 0 &&
        presentationValue73
          .encode(
            presentationParam106.fillReference,
            presentationParam107.uint32(34).fork(),
          )
          .join(),
      presentationParam106.effectReference !== void 0 &&
        presentationValue73
          .encode(
            presentationParam106.effectReference,
            presentationParam107.uint32(42).fork(),
          )
          .join(),
      presentationParam106.fontReference !== void 0 &&
        presentationValue74
          .encode(
            presentationParam106.fontReference,
            presentationParam107.uint32(50).fork(),
          )
          .join(),
      presentationParam106.fill !== void 0 &&
        presentationHn
          .encode(
            presentationParam106.fill,
            presentationParam107.uint32(58).fork(),
          )
          .join(),
      presentationParam106.line !== void 0 &&
        presentationJn
          .encode(
            presentationParam106.line,
            presentationParam107.uint32(66).fork(),
          )
          .join(),
      presentationParam106.textStyle !== void 0 &&
        presentationOr
          .encode(
            presentationParam106.textStyle,
            presentationParam107.uint32(82).fork(),
          )
          .join(),
      presentationParam106.body !== void 0 &&
        presentationValue75
          .encode(
            presentationParam106.body,
            presentationParam107.uint32(90).fork(),
          )
          .join(),
      presentationParam106.lineWidthScale !== void 0 &&
        presentationParam107
          .uint32(98)
          .string(presentationParam106.lineWidthScale),
      presentationParam107
    );
  },
  decode(presentationParam70, presentationParam71) {
    let presentationValue180 =
        presentationParam70 instanceof presentationFr
          ? presentationParam70
          : new presentationFr(presentationParam70),
      presentationValue181 =
        presentationParam71 === void 0
          ? presentationValue180.len
          : presentationValue180.pos + presentationParam71,
      presentationValue182 = presentationHelper103();
    for (; presentationValue180.pos < presentationValue181; ) {
      let presentationValue218 = presentationValue180.uint32();
      switch (presentationValue218 >>> 3) {
        case 1:
          if (presentationValue218 !== 8) break;
          presentationValue182.kind = presentationValue180.int32();
          continue;
        case 2:
          if (presentationValue218 !== 18) break;
          presentationValue182.modifiers = presentationValue180.string();
          continue;
        case 3:
          if (presentationValue218 !== 26) break;
          presentationValue182.lineReference = presentationValue73.decode(
            presentationValue180,
            presentationValue180.uint32(),
          );
          continue;
        case 4:
          if (presentationValue218 !== 34) break;
          presentationValue182.fillReference = presentationValue73.decode(
            presentationValue180,
            presentationValue180.uint32(),
          );
          continue;
        case 5:
          if (presentationValue218 !== 42) break;
          presentationValue182.effectReference = presentationValue73.decode(
            presentationValue180,
            presentationValue180.uint32(),
          );
          continue;
        case 6:
          if (presentationValue218 !== 50) break;
          presentationValue182.fontReference = presentationValue74.decode(
            presentationValue180,
            presentationValue180.uint32(),
          );
          continue;
        case 7:
          if (presentationValue218 !== 58) break;
          presentationValue182.fill = presentationHn.decode(
            presentationValue180,
            presentationValue180.uint32(),
          );
          continue;
        case 8:
          if (presentationValue218 !== 66) break;
          presentationValue182.line = presentationJn.decode(
            presentationValue180,
            presentationValue180.uint32(),
          );
          continue;
        case 10:
          if (presentationValue218 !== 82) break;
          presentationValue182.textStyle = presentationOr.decode(
            presentationValue180,
            presentationValue180.uint32(),
          );
          continue;
        case 11:
          if (presentationValue218 !== 90) break;
          presentationValue182.body = presentationValue75.decode(
            presentationValue180,
            presentationValue180.uint32(),
          );
          continue;
        case 12:
          if (presentationValue218 !== 98) break;
          presentationValue182.lineWidthScale = presentationValue180.string();
          continue;
      }
      if ((presentationValue218 & 7) == 4 || presentationValue218 === 0) break;
      presentationValue180.skip(presentationValue218 & 7);
    }
    return presentationValue182;
  },
  create(presentationParam1228) {
    return presentationValue76.fromPartial(presentationParam1228 ?? {});
  },
  fromPartial(presentationParam80) {
    let presentationValue190 = presentationHelper103();
    return (
      (presentationValue190.kind = presentationParam80.kind ?? 0),
      (presentationValue190.modifiers =
        presentationParam80.modifiers ?? void 0),
      (presentationValue190.lineReference =
        presentationParam80.lineReference !== void 0 &&
        presentationParam80.lineReference !== null
          ? presentationValue73.fromPartial(presentationParam80.lineReference)
          : void 0),
      (presentationValue190.fillReference =
        presentationParam80.fillReference !== void 0 &&
        presentationParam80.fillReference !== null
          ? presentationValue73.fromPartial(presentationParam80.fillReference)
          : void 0),
      (presentationValue190.effectReference =
        presentationParam80.effectReference !== void 0 &&
        presentationParam80.effectReference !== null
          ? presentationValue73.fromPartial(presentationParam80.effectReference)
          : void 0),
      (presentationValue190.fontReference =
        presentationParam80.fontReference !== void 0 &&
        presentationParam80.fontReference !== null
          ? presentationValue74.fromPartial(presentationParam80.fontReference)
          : void 0),
      (presentationValue190.fill =
        presentationParam80.fill !== void 0 && presentationParam80.fill !== null
          ? presentationHn.fromPartial(presentationParam80.fill)
          : void 0),
      (presentationValue190.line =
        presentationParam80.line !== void 0 && presentationParam80.line !== null
          ? presentationJn.fromPartial(presentationParam80.line)
          : void 0),
      (presentationValue190.textStyle =
        presentationParam80.textStyle !== void 0 &&
        presentationParam80.textStyle !== null
          ? presentationOr.fromPartial(presentationParam80.textStyle)
          : void 0),
      (presentationValue190.body =
        presentationParam80.body !== void 0 && presentationParam80.body !== null
          ? presentationValue75.fromPartial(presentationParam80.body)
          : void 0),
      (presentationValue190.lineWidthScale =
        presentationParam80.lineWidthScale ?? void 0),
      presentationValue190
    );
  },
};
function presentationHelper104() {
  return {
    type: void 0,
    colors: [],
  };
}
var presentationValue77 = {
  encode(presentationParam972, presentationParam973 = new presentationPr()) {
    presentationParam972.type !== void 0 &&
      presentationParam973.uint32(8).int32(presentationParam972.type);
    for (let presentationValue1294 of presentationParam972.colors)
      presentationRn
        .encode(presentationValue1294, presentationParam973.uint32(18).fork())
        .join();
    return presentationParam973;
  },
  decode(presentationParam569, presentationParam570) {
    let presentationValue745 =
        presentationParam569 instanceof presentationFr
          ? presentationParam569
          : new presentationFr(presentationParam569),
      presentationValue746 =
        presentationParam570 === void 0
          ? presentationValue745.len
          : presentationValue745.pos + presentationParam570,
      presentationValue747 = presentationHelper104();
    for (; presentationValue745.pos < presentationValue746; ) {
      let presentationValue1009 = presentationValue745.uint32();
      switch (presentationValue1009 >>> 3) {
        case 1:
          if (presentationValue1009 !== 8) break;
          presentationValue747.type = presentationValue745.int32();
          continue;
        case 2:
          if (presentationValue1009 !== 18) break;
          presentationValue747.colors.push(
            presentationRn.decode(
              presentationValue745,
              presentationValue745.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue1009 & 7) == 4 || presentationValue1009 === 0)
        break;
      presentationValue745.skip(presentationValue1009 & 7);
    }
    return presentationValue747;
  },
  create(presentationParam1229) {
    return presentationValue77.fromPartial(presentationParam1229 ?? {});
  },
  fromPartial(presentationParam1017) {
    let presentationValue1138 = presentationHelper104();
    return (
      (presentationValue1138.type = presentationParam1017.type ?? void 0),
      (presentationValue1138.colors =
        presentationParam1017.colors?.map((presentationParam1432) =>
          presentationRn.fromPartial(presentationParam1432),
        ) || []),
      presentationValue1138
    );
  },
};
function presentationHelper105() {
  return {
    pivotTableQualifiedName: ``,
    pivotTableName: void 0,
    pivotCacheId: void 0,
    fmtId: void 0,
    pivotTableId: void 0,
  };
}
var presentationValue78 = {
  encode(presentationParam462, presentationParam463 = new presentationPr()) {
    return (
      presentationParam462.pivotTableQualifiedName !== `` &&
        presentationParam463
          .uint32(10)
          .string(presentationParam462.pivotTableQualifiedName),
      presentationParam462.pivotTableName !== void 0 &&
        presentationParam463
          .uint32(18)
          .string(presentationParam462.pivotTableName),
      presentationParam462.pivotCacheId !== void 0 &&
        presentationParam463
          .uint32(24)
          .uint32(presentationParam462.pivotCacheId),
      presentationParam462.fmtId !== void 0 &&
        presentationParam463.uint32(32).uint32(presentationParam462.fmtId),
      presentationParam462.pivotTableId !== void 0 &&
        presentationParam463
          .uint32(42)
          .string(presentationParam462.pivotTableId),
      presentationParam463
    );
  },
  decode(presentationParam280, presentationParam281) {
    let presentationValue413 =
        presentationParam280 instanceof presentationFr
          ? presentationParam280
          : new presentationFr(presentationParam280),
      presentationValue414 =
        presentationParam281 === void 0
          ? presentationValue413.len
          : presentationValue413.pos + presentationParam281,
      presentationValue415 = presentationHelper105();
    for (; presentationValue413.pos < presentationValue414; ) {
      let presentationValue579 = presentationValue413.uint32();
      switch (presentationValue579 >>> 3) {
        case 1:
          if (presentationValue579 !== 10) break;
          presentationValue415.pivotTableQualifiedName =
            presentationValue413.string();
          continue;
        case 2:
          if (presentationValue579 !== 18) break;
          presentationValue415.pivotTableName = presentationValue413.string();
          continue;
        case 3:
          if (presentationValue579 !== 24) break;
          presentationValue415.pivotCacheId = presentationValue413.uint32();
          continue;
        case 4:
          if (presentationValue579 !== 32) break;
          presentationValue415.fmtId = presentationValue413.uint32();
          continue;
        case 5:
          if (presentationValue579 !== 42) break;
          presentationValue415.pivotTableId = presentationValue413.string();
          continue;
      }
      if ((presentationValue579 & 7) == 4 || presentationValue579 === 0) break;
      presentationValue413.skip(presentationValue579 & 7);
    }
    return presentationValue415;
  },
  create(presentationParam1230) {
    return presentationValue78.fromPartial(presentationParam1230 ?? {});
  },
  fromPartial(presentationParam729) {
    let presentationValue912 = presentationHelper105();
    return (
      (presentationValue912.pivotTableQualifiedName =
        presentationParam729.pivotTableQualifiedName ?? ``),
      (presentationValue912.pivotTableName =
        presentationParam729.pivotTableName ?? void 0),
      (presentationValue912.pivotCacheId =
        presentationParam729.pivotCacheId ?? void 0),
      (presentationValue912.fmtId = presentationParam729.fmtId ?? void 0),
      (presentationValue912.pivotTableId =
        presentationParam729.pivotTableId ?? void 0),
      presentationValue912
    );
  },
};
function presentationHelper106() {
  return {
    dropZonesVisible: void 0,
    showFilterButtons: void 0,
    showCategoryButtons: void 0,
    showDataButtons: void 0,
    showSeriesButtons: void 0,
  };
}
var presentationValue79 = {
  encode(presentationParam418, presentationParam419 = new presentationPr()) {
    return (
      presentationParam418.dropZonesVisible !== void 0 &&
        presentationParam419
          .uint32(8)
          .bool(presentationParam418.dropZonesVisible),
      presentationParam418.showFilterButtons !== void 0 &&
        presentationParam419
          .uint32(16)
          .bool(presentationParam418.showFilterButtons),
      presentationParam418.showCategoryButtons !== void 0 &&
        presentationParam419
          .uint32(24)
          .bool(presentationParam418.showCategoryButtons),
      presentationParam418.showDataButtons !== void 0 &&
        presentationParam419
          .uint32(32)
          .bool(presentationParam418.showDataButtons),
      presentationParam418.showSeriesButtons !== void 0 &&
        presentationParam419
          .uint32(40)
          .bool(presentationParam418.showSeriesButtons),
      presentationParam419
    );
  },
  decode(presentationParam267, presentationParam268) {
    let presentationValue395 =
        presentationParam267 instanceof presentationFr
          ? presentationParam267
          : new presentationFr(presentationParam267),
      presentationValue396 =
        presentationParam268 === void 0
          ? presentationValue395.len
          : presentationValue395.pos + presentationParam268,
      presentationValue397 = presentationHelper106();
    for (; presentationValue395.pos < presentationValue396; ) {
      let presentationValue564 = presentationValue395.uint32();
      switch (presentationValue564 >>> 3) {
        case 1:
          if (presentationValue564 !== 8) break;
          presentationValue397.dropZonesVisible = presentationValue395.bool();
          continue;
        case 2:
          if (presentationValue564 !== 16) break;
          presentationValue397.showFilterButtons = presentationValue395.bool();
          continue;
        case 3:
          if (presentationValue564 !== 24) break;
          presentationValue397.showCategoryButtons =
            presentationValue395.bool();
          continue;
        case 4:
          if (presentationValue564 !== 32) break;
          presentationValue397.showDataButtons = presentationValue395.bool();
          continue;
        case 5:
          if (presentationValue564 !== 40) break;
          presentationValue397.showSeriesButtons = presentationValue395.bool();
          continue;
      }
      if ((presentationValue564 & 7) == 4 || presentationValue564 === 0) break;
      presentationValue395.skip(presentationValue564 & 7);
    }
    return presentationValue397;
  },
  create(presentationParam1231) {
    return presentationValue79.fromPartial(presentationParam1231 ?? {});
  },
  fromPartial(presentationParam634) {
    let presentationValue837 = presentationHelper106();
    return (
      (presentationValue837.dropZonesVisible =
        presentationParam634.dropZonesVisible ?? void 0),
      (presentationValue837.showFilterButtons =
        presentationParam634.showFilterButtons ?? void 0),
      (presentationValue837.showCategoryButtons =
        presentationParam634.showCategoryButtons ?? void 0),
      (presentationValue837.showDataButtons =
        presentationParam634.showDataButtons ?? void 0),
      (presentationValue837.showSeriesButtons =
        presentationParam634.showSeriesButtons ?? void 0),
      presentationValue837
    );
  },
};
function presentationHelper107() {
  return {
    idx: 0,
    fill: void 0,
    stroke: void 0,
    text: void 0,
  };
}
var ui = {
  encode(presentationParam667, presentationParam668 = new presentationPr()) {
    return (
      presentationParam667.idx !== 0 &&
        presentationParam668.uint32(8).uint32(presentationParam667.idx),
      presentationParam667.fill !== void 0 &&
        presentationHn
          .encode(
            presentationParam667.fill,
            presentationParam668.uint32(18).fork(),
          )
          .join(),
      presentationParam667.stroke !== void 0 &&
        presentationJn
          .encode(
            presentationParam667.stroke,
            presentationParam668.uint32(26).fork(),
          )
          .join(),
      presentationParam667.text !== void 0 &&
        presentationOr
          .encode(
            presentationParam667.text,
            presentationParam668.uint32(34).fork(),
          )
          .join(),
      presentationParam668
    );
  },
  decode(presentationParam338, presentationParam339) {
    let presentationValue479 =
        presentationParam338 instanceof presentationFr
          ? presentationParam338
          : new presentationFr(presentationParam338),
      presentationValue480 =
        presentationParam339 === void 0
          ? presentationValue479.len
          : presentationValue479.pos + presentationParam339,
      presentationValue481 = presentationHelper107();
    for (; presentationValue479.pos < presentationValue480; ) {
      let presentationValue697 = presentationValue479.uint32();
      switch (presentationValue697 >>> 3) {
        case 1:
          if (presentationValue697 !== 8) break;
          presentationValue481.idx = presentationValue479.uint32();
          continue;
        case 2:
          if (presentationValue697 !== 18) break;
          presentationValue481.fill = presentationHn.decode(
            presentationValue479,
            presentationValue479.uint32(),
          );
          continue;
        case 3:
          if (presentationValue697 !== 26) break;
          presentationValue481.stroke = presentationJn.decode(
            presentationValue479,
            presentationValue479.uint32(),
          );
          continue;
        case 4:
          if (presentationValue697 !== 34) break;
          presentationValue481.text = presentationOr.decode(
            presentationValue479,
            presentationValue479.uint32(),
          );
          continue;
      }
      if ((presentationValue697 & 7) == 4 || presentationValue697 === 0) break;
      presentationValue479.skip(presentationValue697 & 7);
    }
    return presentationValue481;
  },
  create(presentationParam1232) {
    return ui.fromPartial(presentationParam1232 ?? {});
  },
  fromPartial(presentationParam654) {
    let presentationValue863 = presentationHelper107();
    return (
      (presentationValue863.idx = presentationParam654.idx ?? 0),
      (presentationValue863.fill =
        presentationParam654.fill !== void 0 &&
        presentationParam654.fill !== null
          ? presentationHn.fromPartial(presentationParam654.fill)
          : void 0),
      (presentationValue863.stroke =
        presentationParam654.stroke !== void 0 &&
        presentationParam654.stroke !== null
          ? presentationJn.fromPartial(presentationParam654.stroke)
          : void 0),
      (presentationValue863.text =
        presentationParam654.text !== void 0 &&
        presentationParam654.text !== null
          ? presentationOr.fromPartial(presentationParam654.text)
          : void 0),
      presentationValue863
    );
  },
};
function presentationHelper108() {
  return {
    symbol: void 0,
    size: void 0,
    fill: void 0,
    stroke: void 0,
  };
}
var presentationValue80 = {
  encode(presentationParam678, presentationParam679 = new presentationPr()) {
    return (
      presentationParam678.symbol !== void 0 &&
        presentationParam679.uint32(8).int32(presentationParam678.symbol),
      presentationParam678.size !== void 0 &&
        presentationParam679.uint32(16).uint32(presentationParam678.size),
      presentationParam678.fill !== void 0 &&
        presentationHn
          .encode(
            presentationParam678.fill,
            presentationParam679.uint32(26).fork(),
          )
          .join(),
      presentationParam678.stroke !== void 0 &&
        presentationJn
          .encode(
            presentationParam678.stroke,
            presentationParam679.uint32(34).fork(),
          )
          .join(),
      presentationParam679
    );
  },
  decode(presentationParam356, presentationParam357) {
    let presentationValue499 =
        presentationParam356 instanceof presentationFr
          ? presentationParam356
          : new presentationFr(presentationParam356),
      presentationValue500 =
        presentationParam357 === void 0
          ? presentationValue499.len
          : presentationValue499.pos + presentationParam357,
      presentationValue501 = presentationHelper108();
    for (; presentationValue499.pos < presentationValue500; ) {
      let presentationValue712 = presentationValue499.uint32();
      switch (presentationValue712 >>> 3) {
        case 1:
          if (presentationValue712 !== 8) break;
          presentationValue501.symbol = presentationValue499.int32();
          continue;
        case 2:
          if (presentationValue712 !== 16) break;
          presentationValue501.size = presentationValue499.uint32();
          continue;
        case 3:
          if (presentationValue712 !== 26) break;
          presentationValue501.fill = presentationHn.decode(
            presentationValue499,
            presentationValue499.uint32(),
          );
          continue;
        case 4:
          if (presentationValue712 !== 34) break;
          presentationValue501.stroke = presentationJn.decode(
            presentationValue499,
            presentationValue499.uint32(),
          );
          continue;
      }
      if ((presentationValue712 & 7) == 4 || presentationValue712 === 0) break;
      presentationValue499.skip(presentationValue712 & 7);
    }
    return presentationValue501;
  },
  create(presentationParam1346) {
    return presentationValue80.fromPartial(presentationParam1346 ?? {});
  },
  fromPartial(presentationParam768) {
    let presentationValue945 = presentationHelper108();
    return (
      (presentationValue945.symbol = presentationParam768.symbol ?? void 0),
      (presentationValue945.size = presentationParam768.size ?? void 0),
      (presentationValue945.fill =
        presentationParam768.fill !== void 0 &&
        presentationParam768.fill !== null
          ? presentationHn.fromPartial(presentationParam768.fill)
          : void 0),
      (presentationValue945.stroke =
        presentationParam768.stroke !== void 0 &&
        presentationParam768.stroke !== null
          ? presentationJn.fromPartial(presentationParam768.stroke)
          : void 0),
      presentationValue945
    );
  },
};
function presentationHelper109() {
  return {
    rotX: void 0,
    rotY: void 0,
    rightAngleAxes: void 0,
    perspective: void 0,
  };
}
var presentationValue81 = {
  encode(presentationParam714, presentationParam715 = new presentationPr()) {
    return (
      presentationParam714.rotX !== void 0 &&
        presentationParam715.uint32(8).int32(presentationParam714.rotX),
      presentationParam714.rotY !== void 0 &&
        presentationParam715.uint32(16).int32(presentationParam714.rotY),
      presentationParam714.rightAngleAxes !== void 0 &&
        presentationParam715
          .uint32(24)
          .bool(presentationParam714.rightAngleAxes),
      presentationParam714.perspective !== void 0 &&
        presentationParam715
          .uint32(32)
          .uint32(presentationParam714.perspective),
      presentationParam715
    );
  },
  decode(presentationParam391, presentationParam392) {
    let presentationValue536 =
        presentationParam391 instanceof presentationFr
          ? presentationParam391
          : new presentationFr(presentationParam391),
      presentationValue537 =
        presentationParam392 === void 0
          ? presentationValue536.len
          : presentationValue536.pos + presentationParam392,
      presentationValue538 = presentationHelper109();
    for (; presentationValue536.pos < presentationValue537; ) {
      let presentationValue789 = presentationValue536.uint32();
      switch (presentationValue789 >>> 3) {
        case 1:
          if (presentationValue789 !== 8) break;
          presentationValue538.rotX = presentationValue536.int32();
          continue;
        case 2:
          if (presentationValue789 !== 16) break;
          presentationValue538.rotY = presentationValue536.int32();
          continue;
        case 3:
          if (presentationValue789 !== 24) break;
          presentationValue538.rightAngleAxes = presentationValue536.bool();
          continue;
        case 4:
          if (presentationValue789 !== 32) break;
          presentationValue538.perspective = presentationValue536.uint32();
          continue;
      }
      if ((presentationValue789 & 7) == 4 || presentationValue789 === 0) break;
      presentationValue536.skip(presentationValue789 & 7);
    }
    return presentationValue538;
  },
  create(presentationParam1233) {
    return presentationValue81.fromPartial(presentationParam1233 ?? {});
  },
  fromPartial(presentationParam899) {
    let presentationValue1065 = presentationHelper109();
    return (
      (presentationValue1065.rotX = presentationParam899.rotX ?? void 0),
      (presentationValue1065.rotY = presentationParam899.rotY ?? void 0),
      (presentationValue1065.rightAngleAxes =
        presentationParam899.rightAngleAxes ?? void 0),
      (presentationValue1065.perspective =
        presentationParam899.perspective ?? void 0),
      presentationValue1065
    );
  },
};
export const _presentationOn = (function (presentationParam379) {
  return (
    (presentationParam379[
      (presentationParam379.ARTIFACT_KIND_UNSPECIFIED = 0)
    ] = `ARTIFACT_KIND_UNSPECIFIED`),
    (presentationParam379[
      (presentationParam379.ARTIFACT_KIND_PRESENTATION = 1)
    ] = `ARTIFACT_KIND_PRESENTATION`),
    (presentationParam379[(presentationParam379.ARTIFACT_KIND_WORKBOOK = 2)] =
      `ARTIFACT_KIND_WORKBOOK`),
    (presentationParam379[(presentationParam379.ARTIFACT_KIND_DOCUMENT = 3)] =
      `ARTIFACT_KIND_DOCUMENT`),
    (presentationParam379[(presentationParam379.ARTIFACT_KIND_IMAGE = 4)] =
      `ARTIFACT_KIND_IMAGE`),
    (presentationParam379[(presentationParam379.ARTIFACT_KIND_DATA = 5)] =
      `ARTIFACT_KIND_DATA`),
    (presentationParam379[(presentationParam379.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam379
  );
})({});
function presentationHelper110() {
  return {
    id: ``,
    kind: 0,
    title: void 0,
  };
}
var presentationValue82 = {
  encode(presentationParam915, presentationParam916 = new presentationPr()) {
    return (
      presentationParam915.id !== `` &&
        presentationParam916.uint32(10).string(presentationParam915.id),
      presentationParam915.kind !== 0 &&
        presentationParam916.uint32(16).int32(presentationParam915.kind),
      presentationParam915.title !== void 0 &&
        presentationParam916.uint32(26).string(presentationParam915.title),
      presentationParam916
    );
  },
  decode(presentationParam508, presentationParam509) {
    let presentationValue680 =
        presentationParam508 instanceof presentationFr
          ? presentationParam508
          : new presentationFr(presentationParam508),
      presentationValue681 =
        presentationParam509 === void 0
          ? presentationValue680.len
          : presentationValue680.pos + presentationParam509,
      presentationValue682 = presentationHelper110();
    for (; presentationValue680.pos < presentationValue681; ) {
      let presentationValue975 = presentationValue680.uint32();
      switch (presentationValue975 >>> 3) {
        case 1:
          if (presentationValue975 !== 10) break;
          presentationValue682.id = presentationValue680.string();
          continue;
        case 2:
          if (presentationValue975 !== 16) break;
          presentationValue682.kind = presentationValue680.int32();
          continue;
        case 3:
          if (presentationValue975 !== 26) break;
          presentationValue682.title = presentationValue680.string();
          continue;
      }
      if ((presentationValue975 & 7) == 4 || presentationValue975 === 0) break;
      presentationValue680.skip(presentationValue975 & 7);
    }
    return presentationValue682;
  },
  create(presentationParam1234) {
    return presentationValue82.fromPartial(presentationParam1234 ?? {});
  },
  fromPartial(presentationParam1062) {
    let presentationValue1170 = presentationHelper110();
    return (
      (presentationValue1170.id = presentationParam1062.id ?? ``),
      (presentationValue1170.kind = presentationParam1062.kind ?? 0),
      (presentationValue1170.title = presentationParam1062.title ?? void 0),
      presentationValue1170
    );
  },
};
function _i() {
  return {
    assetId: void 0,
    contentType: void 0,
    widthPx: void 0,
    heightPx: void 0,
  };
}
var presentationValue83 = {
  encode(presentationParam704, presentationParam705 = new presentationPr()) {
    return (
      presentationParam704.assetId !== void 0 &&
        presentationParam705.uint32(10).string(presentationParam704.assetId),
      presentationParam704.contentType !== void 0 &&
        presentationParam705
          .uint32(18)
          .string(presentationParam704.contentType),
      presentationParam704.widthPx !== void 0 &&
        presentationParam705.uint32(24).int32(presentationParam704.widthPx),
      presentationParam704.heightPx !== void 0 &&
        presentationParam705.uint32(32).int32(presentationParam704.heightPx),
      presentationParam705
    );
  },
  decode(presentationParam386, presentationParam387) {
    let presentationValue533 =
        presentationParam386 instanceof presentationFr
          ? presentationParam386
          : new presentationFr(presentationParam386),
      presentationValue534 =
        presentationParam387 === void 0
          ? presentationValue533.len
          : presentationValue533.pos + presentationParam387,
      presentationValue535 = _i();
    for (; presentationValue533.pos < presentationValue534; ) {
      let presentationValue774 = presentationValue533.uint32();
      switch (presentationValue774 >>> 3) {
        case 1:
          if (presentationValue774 !== 10) break;
          presentationValue535.assetId = presentationValue533.string();
          continue;
        case 2:
          if (presentationValue774 !== 18) break;
          presentationValue535.contentType = presentationValue533.string();
          continue;
        case 3:
          if (presentationValue774 !== 24) break;
          presentationValue535.widthPx = presentationValue533.int32();
          continue;
        case 4:
          if (presentationValue774 !== 32) break;
          presentationValue535.heightPx = presentationValue533.int32();
          continue;
      }
      if ((presentationValue774 & 7) == 4 || presentationValue774 === 0) break;
      presentationValue533.skip(presentationValue774 & 7);
    }
    return presentationValue535;
  },
  create(presentationParam1235) {
    return presentationValue83.fromPartial(presentationParam1235 ?? {});
  },
  fromPartial(presentationParam900) {
    let presentationValue1066 = _i();
    return (
      (presentationValue1066.assetId = presentationParam900.assetId ?? void 0),
      (presentationValue1066.contentType =
        presentationParam900.contentType ?? void 0),
      (presentationValue1066.widthPx = presentationParam900.widthPx ?? void 0),
      (presentationValue1066.heightPx =
        presentationParam900.heightPx ?? void 0),
      presentationValue1066
    );
  },
};
function presentationHelper111() {
  return {
    sheetId: void 0,
    rangeA1: void 0,
    showGridlines: void 0,
    showHeaders: void 0,
    zoom: void 0,
  };
}
var presentationValue84 = {
  encode(presentationParam554, presentationParam555 = new presentationPr()) {
    return (
      presentationParam554.sheetId !== void 0 &&
        presentationParam555.uint32(10).string(presentationParam554.sheetId),
      presentationParam554.rangeA1 !== void 0 &&
        presentationParam555.uint32(18).string(presentationParam554.rangeA1),
      presentationParam554.showGridlines !== void 0 &&
        presentationParam555
          .uint32(24)
          .bool(presentationParam554.showGridlines),
      presentationParam554.showHeaders !== void 0 &&
        presentationParam555.uint32(32).bool(presentationParam554.showHeaders),
      presentationParam554.zoom !== void 0 &&
        presentationParam555.uint32(41).double(presentationParam554.zoom),
      presentationParam555
    );
  },
  decode(presentationParam307, presentationParam308) {
    let presentationValue449 =
        presentationParam307 instanceof presentationFr
          ? presentationParam307
          : new presentationFr(presentationParam307),
      presentationValue450 =
        presentationParam308 === void 0
          ? presentationValue449.len
          : presentationValue449.pos + presentationParam308,
      presentationValue451 = presentationHelper111();
    for (; presentationValue449.pos < presentationValue450; ) {
      let presentationValue636 = presentationValue449.uint32();
      switch (presentationValue636 >>> 3) {
        case 1:
          if (presentationValue636 !== 10) break;
          presentationValue451.sheetId = presentationValue449.string();
          continue;
        case 2:
          if (presentationValue636 !== 18) break;
          presentationValue451.rangeA1 = presentationValue449.string();
          continue;
        case 3:
          if (presentationValue636 !== 24) break;
          presentationValue451.showGridlines = presentationValue449.bool();
          continue;
        case 4:
          if (presentationValue636 !== 32) break;
          presentationValue451.showHeaders = presentationValue449.bool();
          continue;
        case 5:
          if (presentationValue636 !== 41) break;
          presentationValue451.zoom = presentationValue449.double();
          continue;
      }
      if ((presentationValue636 & 7) == 4 || presentationValue636 === 0) break;
      presentationValue449.skip(presentationValue636 & 7);
    }
    return presentationValue451;
  },
  create(presentationParam1236) {
    return presentationValue84.fromPartial(presentationParam1236 ?? {});
  },
  fromPartial(presentationParam838) {
    let presentationValue1006 = presentationHelper111();
    return (
      (presentationValue1006.sheetId = presentationParam838.sheetId ?? void 0),
      (presentationValue1006.rangeA1 = presentationParam838.rangeA1 ?? void 0),
      (presentationValue1006.showGridlines =
        presentationParam838.showGridlines ?? void 0),
      (presentationValue1006.showHeaders =
        presentationParam838.showHeaders ?? void 0),
      (presentationValue1006.zoom = presentationParam838.zoom ?? void 0),
      presentationValue1006
    );
  },
};
function presentationHelper112() {
  return {
    artifact: void 0,
    workbook: void 0,
    preview: void 0,
  };
}
var presentationValue85 = {
  encode(presentationParam716, presentationParam717 = new presentationPr()) {
    return (
      presentationParam716.artifact !== void 0 &&
        presentationValue82
          .encode(
            presentationParam716.artifact,
            presentationParam717.uint32(10).fork(),
          )
          .join(),
      presentationParam716.workbook !== void 0 &&
        presentationValue84
          .encode(
            presentationParam716.workbook,
            presentationParam717.uint32(82).fork(),
          )
          .join(),
      presentationParam716.preview !== void 0 &&
        presentationValue83
          .encode(
            presentationParam716.preview,
            presentationParam717.uint32(162).fork(),
          )
          .join(),
      presentationParam717
    );
  },
  decode(presentationParam411, presentationParam412) {
    let presentationValue561 =
        presentationParam411 instanceof presentationFr
          ? presentationParam411
          : new presentationFr(presentationParam411),
      presentationValue562 =
        presentationParam412 === void 0
          ? presentationValue561.len
          : presentationValue561.pos + presentationParam412,
      presentationValue563 = presentationHelper112();
    for (; presentationValue561.pos < presentationValue562; ) {
      let presentationValue841 = presentationValue561.uint32();
      switch (presentationValue841 >>> 3) {
        case 1:
          if (presentationValue841 !== 10) break;
          presentationValue563.artifact = presentationValue82.decode(
            presentationValue561,
            presentationValue561.uint32(),
          );
          continue;
        case 10:
          if (presentationValue841 !== 82) break;
          presentationValue563.workbook = presentationValue84.decode(
            presentationValue561,
            presentationValue561.uint32(),
          );
          continue;
        case 20:
          if (presentationValue841 !== 162) break;
          presentationValue563.preview = presentationValue83.decode(
            presentationValue561,
            presentationValue561.uint32(),
          );
          continue;
      }
      if ((presentationValue841 & 7) == 4 || presentationValue841 === 0) break;
      presentationValue561.skip(presentationValue841 & 7);
    }
    return presentationValue563;
  },
  create(presentationParam1237) {
    return presentationValue85.fromPartial(presentationParam1237 ?? {});
  },
  fromPartial(presentationParam596) {
    let presentationValue785 = presentationHelper112();
    return (
      (presentationValue785.artifact =
        presentationParam596.artifact !== void 0 &&
        presentationParam596.artifact !== null
          ? presentationValue82.fromPartial(presentationParam596.artifact)
          : void 0),
      (presentationValue785.workbook =
        presentationParam596.workbook !== void 0 &&
        presentationParam596.workbook !== null
          ? presentationValue84.fromPartial(presentationParam596.workbook)
          : void 0),
      (presentationValue785.preview =
        presentationParam596.preview !== void 0 &&
        presentationParam596.preview !== null
          ? presentationValue83.fromPartial(presentationParam596.preview)
          : void 0),
      presentationValue785
    );
  },
};
export const _presentationTn = (function (presentationParam744) {
  return (
    (presentationParam744[
      (presentationParam744.MATH_LIMIT_KIND_UNSPECIFIED = 0)
    ] = `MATH_LIMIT_KIND_UNSPECIFIED`),
    (presentationParam744[(presentationParam744.MATH_LIMIT_KIND_LOWER = 1)] =
      `MATH_LIMIT_KIND_LOWER`),
    (presentationParam744[(presentationParam744.MATH_LIMIT_KIND_UPPER = 2)] =
      `MATH_LIMIT_KIND_UPPER`),
    (presentationParam744[(presentationParam744.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam744
  );
})({});
export const _presentationRn = (function (presentationParam328) {
  return (
    (presentationParam328[
      (presentationParam328.MATH_MATRIX_COLUMN_JUSTIFICATION_UNSPECIFIED = 0)
    ] = `MATH_MATRIX_COLUMN_JUSTIFICATION_UNSPECIFIED`),
    (presentationParam328[
      (presentationParam328.MATH_MATRIX_COLUMN_JUSTIFICATION_LEFT = 1)
    ] = `MATH_MATRIX_COLUMN_JUSTIFICATION_LEFT`),
    (presentationParam328[
      (presentationParam328.MATH_MATRIX_COLUMN_JUSTIFICATION_CENTER = 2)
    ] = `MATH_MATRIX_COLUMN_JUSTIFICATION_CENTER`),
    (presentationParam328[
      (presentationParam328.MATH_MATRIX_COLUMN_JUSTIFICATION_RIGHT = 3)
    ] = `MATH_MATRIX_COLUMN_JUSTIFICATION_RIGHT`),
    (presentationParam328[(presentationParam328.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam328
  );
})({});
export const _presentationNn = (function (presentationParam638) {
  return (
    (presentationParam638[
      (presentationParam638.MATH_LIMIT_PLACEMENT_UNSPECIFIED = 0)
    ] = `MATH_LIMIT_PLACEMENT_UNSPECIFIED`),
    (presentationParam638[
      (presentationParam638.MATH_LIMIT_PLACEMENT_SUB_SUP = 1)
    ] = `MATH_LIMIT_PLACEMENT_SUB_SUP`),
    (presentationParam638[
      (presentationParam638.MATH_LIMIT_PLACEMENT_UNDER_OVER = 2)
    ] = `MATH_LIMIT_PLACEMENT_UNDER_OVER`),
    (presentationParam638[(presentationParam638.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam638
  );
})({});
export const _presentationIn = (function (presentationParam340) {
  return (
    (presentationParam340[
      (presentationParam340.MATH_TOKEN_KIND_UNSPECIFIED = 0)
    ] = `MATH_TOKEN_KIND_UNSPECIFIED`),
    (presentationParam340[
      (presentationParam340.MATH_TOKEN_KIND_IDENTIFIER = 1)
    ] = `MATH_TOKEN_KIND_IDENTIFIER`),
    (presentationParam340[(presentationParam340.MATH_TOKEN_KIND_NUMBER = 2)] =
      `MATH_TOKEN_KIND_NUMBER`),
    (presentationParam340[(presentationParam340.MATH_TOKEN_KIND_OPERATOR = 3)] =
      `MATH_TOKEN_KIND_OPERATOR`),
    (presentationParam340[(presentationParam340.MATH_TOKEN_KIND_TEXT = 4)] =
      `MATH_TOKEN_KIND_TEXT`),
    (presentationParam340[(presentationParam340.MATH_TOKEN_KIND_SYMBOL = 5)] =
      `MATH_TOKEN_KIND_SYMBOL`),
    (presentationParam340[(presentationParam340.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam340
  );
})({});
export const _presentationEn = (function (presentationParam403) {
  return (
    (presentationParam403[
      (presentationParam403.MATH_JUSTIFICATION_UNSPECIFIED = 0)
    ] = `MATH_JUSTIFICATION_UNSPECIFIED`),
    (presentationParam403[(presentationParam403.MATH_JUSTIFICATION_LEFT = 1)] =
      `MATH_JUSTIFICATION_LEFT`),
    (presentationParam403[
      (presentationParam403.MATH_JUSTIFICATION_CENTER = 2)
    ] = `MATH_JUSTIFICATION_CENTER`),
    (presentationParam403[(presentationParam403.MATH_JUSTIFICATION_RIGHT = 3)] =
      `MATH_JUSTIFICATION_RIGHT`),
    (presentationParam403[
      (presentationParam403.MATH_JUSTIFICATION_CENTER_GROUP = 4)
    ] = `MATH_JUSTIFICATION_CENTER_GROUP`),
    (presentationParam403[(presentationParam403.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam403
  );
})({});
export const _presentationAn = (function (presentationParam74) {
  return (
    (presentationParam74[(presentationParam74.MATH_VARIANT_UNSPECIFIED = 0)] =
      `MATH_VARIANT_UNSPECIFIED`),
    (presentationParam74[(presentationParam74.MATH_VARIANT_NORMAL = 1)] =
      `MATH_VARIANT_NORMAL`),
    (presentationParam74[(presentationParam74.MATH_VARIANT_BOLD = 2)] =
      `MATH_VARIANT_BOLD`),
    (presentationParam74[(presentationParam74.MATH_VARIANT_ITALIC = 3)] =
      `MATH_VARIANT_ITALIC`),
    (presentationParam74[(presentationParam74.MATH_VARIANT_BOLD_ITALIC = 4)] =
      `MATH_VARIANT_BOLD_ITALIC`),
    (presentationParam74[(presentationParam74.MATH_VARIANT_SCRIPT = 5)] =
      `MATH_VARIANT_SCRIPT`),
    (presentationParam74[(presentationParam74.MATH_VARIANT_BOLD_SCRIPT = 6)] =
      `MATH_VARIANT_BOLD_SCRIPT`),
    (presentationParam74[(presentationParam74.MATH_VARIANT_FRAKTUR = 7)] =
      `MATH_VARIANT_FRAKTUR`),
    (presentationParam74[(presentationParam74.MATH_VARIANT_DOUBLE_STRUCK = 8)] =
      `MATH_VARIANT_DOUBLE_STRUCK`),
    (presentationParam74[(presentationParam74.MATH_VARIANT_SANS_SERIF = 9)] =
      `MATH_VARIANT_SANS_SERIF`),
    (presentationParam74[
      (presentationParam74.MATH_VARIANT_BOLD_SANS_SERIF = 10)
    ] = `MATH_VARIANT_BOLD_SANS_SERIF`),
    (presentationParam74[
      (presentationParam74.MATH_VARIANT_SANS_SERIF_ITALIC = 11)
    ] = `MATH_VARIANT_SANS_SERIF_ITALIC`),
    (presentationParam74[
      (presentationParam74.MATH_VARIANT_SANS_SERIF_BOLD_ITALIC = 12)
    ] = `MATH_VARIANT_SANS_SERIF_BOLD_ITALIC`),
    (presentationParam74[(presentationParam74.MATH_VARIANT_MONOSPACE = 13)] =
      `MATH_VARIANT_MONOSPACE`),
    (presentationParam74[(presentationParam74.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam74
  );
})({});
export const presentationZt = (function (presentationParam710) {
  return (
    (presentationParam710[
      (presentationParam710.MATH_BAR_POSITION_UNSPECIFIED = 0)
    ] = `MATH_BAR_POSITION_UNSPECIFIED`),
    (presentationParam710[(presentationParam710.MATH_BAR_POSITION_TOP = 1)] =
      `MATH_BAR_POSITION_TOP`),
    (presentationParam710[(presentationParam710.MATH_BAR_POSITION_BOTTOM = 2)] =
      `MATH_BAR_POSITION_BOTTOM`),
    (presentationParam710[(presentationParam710.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam710
  );
})({});
export const presentationXt = (function (presentationParam661) {
  return (
    (presentationParam661[
      (presentationParam661.MATH_ACCENT_POSITION_UNSPECIFIED = 0)
    ] = `MATH_ACCENT_POSITION_UNSPECIFIED`),
    (presentationParam661[(presentationParam661.MATH_ACCENT_POSITION_TOP = 1)] =
      `MATH_ACCENT_POSITION_TOP`),
    (presentationParam661[
      (presentationParam661.MATH_ACCENT_POSITION_BOTTOM = 2)
    ] = `MATH_ACCENT_POSITION_BOTTOM`),
    (presentationParam661[(presentationParam661.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam661
  );
})({});
export const presentationQt = (function (presentationParam691) {
  return (
    (presentationParam691[
      (presentationParam691.MATH_DISPLAY_MODE_UNSPECIFIED = 0)
    ] = `MATH_DISPLAY_MODE_UNSPECIFIED`),
    (presentationParam691[(presentationParam691.MATH_DISPLAY_MODE_INLINE = 1)] =
      `MATH_DISPLAY_MODE_INLINE`),
    (presentationParam691[(presentationParam691.MATH_DISPLAY_MODE_BLOCK = 2)] =
      `MATH_DISPLAY_MODE_BLOCK`),
    (presentationParam691[(presentationParam691.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam691
  );
})({});
export const presentationT = (function (presentationParam428) {
  return (
    (presentationParam428[
      (presentationParam428.MATH_FRACTION_KIND_UNSPECIFIED = 0)
    ] = `MATH_FRACTION_KIND_UNSPECIFIED`),
    (presentationParam428[(presentationParam428.MATH_FRACTION_KIND_BAR = 1)] =
      `MATH_FRACTION_KIND_BAR`),
    (presentationParam428[
      (presentationParam428.MATH_FRACTION_KIND_SKEWED = 2)
    ] = `MATH_FRACTION_KIND_SKEWED`),
    (presentationParam428[
      (presentationParam428.MATH_FRACTION_KIND_LINEAR = 3)
    ] = `MATH_FRACTION_KIND_LINEAR`),
    (presentationParam428[
      (presentationParam428.MATH_FRACTION_KIND_NO_BAR = 4)
    ] = `MATH_FRACTION_KIND_NO_BAR`),
    (presentationParam428[(presentationParam428.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam428
  );
})({});
function presentationHelper113() {
  return {
    id: void 0,
    displayMode: void 0,
    paragraphProperties: void 0,
    root: void 0,
  };
}
var presentationValue86 = {
  encode(presentationParam605, presentationParam606 = new presentationPr()) {
    return (
      presentationParam605.id !== void 0 &&
        presentationParam606.uint32(10).string(presentationParam605.id),
      presentationParam605.displayMode !== void 0 &&
        presentationParam606.uint32(16).int32(presentationParam605.displayMode),
      presentationParam605.paragraphProperties !== void 0 &&
        presentationValue87
          .encode(
            presentationParam605.paragraphProperties,
            presentationParam606.uint32(26).fork(),
          )
          .join(),
      presentationParam605.root !== void 0 &&
        presentationValue88
          .encode(
            presentationParam605.root,
            presentationParam606.uint32(34).fork(),
          )
          .join(),
      presentationParam606
    );
  },
  decode(presentationParam329, presentationParam330) {
    let presentationValue473 =
        presentationParam329 instanceof presentationFr
          ? presentationParam329
          : new presentationFr(presentationParam329),
      presentationValue474 =
        presentationParam330 === void 0
          ? presentationValue473.len
          : presentationValue473.pos + presentationParam330,
      presentationValue475 = presentationHelper113();
    for (; presentationValue473.pos < presentationValue474; ) {
      let presentationValue687 = presentationValue473.uint32();
      switch (presentationValue687 >>> 3) {
        case 1:
          if (presentationValue687 !== 10) break;
          presentationValue475.id = presentationValue473.string();
          continue;
        case 2:
          if (presentationValue687 !== 16) break;
          presentationValue475.displayMode = presentationValue473.int32();
          continue;
        case 3:
          if (presentationValue687 !== 26) break;
          presentationValue475.paragraphProperties = presentationValue87.decode(
            presentationValue473,
            presentationValue473.uint32(),
          );
          continue;
        case 4:
          if (presentationValue687 !== 34) break;
          presentationValue475.root = presentationValue88.decode(
            presentationValue473,
            presentationValue473.uint32(),
          );
          continue;
      }
      if ((presentationValue687 & 7) == 4 || presentationValue687 === 0) break;
      presentationValue473.skip(presentationValue687 & 7);
    }
    return presentationValue475;
  },
  create(presentationParam1238) {
    return presentationValue86.fromPartial(presentationParam1238 ?? {});
  },
  fromPartial(presentationParam587) {
    let presentationValue775 = presentationHelper113();
    return (
      (presentationValue775.id = presentationParam587.id ?? void 0),
      (presentationValue775.displayMode =
        presentationParam587.displayMode ?? void 0),
      (presentationValue775.paragraphProperties =
        presentationParam587.paragraphProperties !== void 0 &&
        presentationParam587.paragraphProperties !== null
          ? presentationValue87.fromPartial(
              presentationParam587.paragraphProperties,
            )
          : void 0),
      (presentationValue775.root =
        presentationParam587.root !== void 0 &&
        presentationParam587.root !== null
          ? presentationValue88.fromPartial(presentationParam587.root)
          : void 0),
      presentationValue775
    );
  },
};
function presentationHelper114() {
  return {
    justification: void 0,
  };
}
var presentationValue87 = {
  encode(presentationParam1068, presentationParam1069 = new presentationPr()) {
    return (
      presentationParam1068.justification !== void 0 &&
        presentationParam1069
          .uint32(8)
          .int32(presentationParam1068.justification),
      presentationParam1069
    );
  },
  decode(presentationParam754, presentationParam755) {
    let presentationValue929 =
        presentationParam754 instanceof presentationFr
          ? presentationParam754
          : new presentationFr(presentationParam754),
      presentationValue930 =
        presentationParam755 === void 0
          ? presentationValue929.len
          : presentationValue929.pos + presentationParam755,
      presentationValue931 = presentationHelper114();
    for (; presentationValue929.pos < presentationValue930; ) {
      let presentationValue1106 = presentationValue929.uint32();
      switch (presentationValue1106 >>> 3) {
        case 1:
          if (presentationValue1106 !== 8) break;
          presentationValue931.justification = presentationValue929.int32();
          continue;
      }
      if ((presentationValue1106 & 7) == 4 || presentationValue1106 === 0)
        break;
      presentationValue929.skip(presentationValue1106 & 7);
    }
    return presentationValue931;
  },
  create(presentationParam1239) {
    return presentationValue87.fromPartial(presentationParam1239 ?? {});
  },
  fromPartial(presentationParam1104) {
    let presentationValue1205 = presentationHelper114();
    return (
      (presentationValue1205.justification =
        presentationParam1104.justification ?? void 0),
      presentationValue1205
    );
  },
};
function presentationHelper115() {
  return {
    id: void 0,
    style: void 0,
    sequence: void 0,
    token: void 0,
    fraction: void 0,
    radical: void 0,
    scripts: void 0,
    nary: void 0,
    delimited: void 0,
    function: void 0,
    matrix: void 0,
    accent: void 0,
    bar: void 0,
    enclosure: void 0,
    limit: void 0,
    phantom: void 0,
    equationArray: void 0,
  };
}
var presentationValue88 = {
  encode(presentationParam47, presentationParam48 = new presentationPr()) {
    return (
      presentationParam47.id !== void 0 &&
        presentationParam48.uint32(10).string(presentationParam47.id),
      presentationParam47.style !== void 0 &&
        presentationValue91
          .encode(
            presentationParam47.style,
            presentationParam48.uint32(18).fork(),
          )
          .join(),
      presentationParam47.sequence !== void 0 &&
        presentationValue89
          .encode(
            presentationParam47.sequence,
            presentationParam48.uint32(26).fork(),
          )
          .join(),
      presentationParam47.token !== void 0 &&
        presentationValue90
          .encode(
            presentationParam47.token,
            presentationParam48.uint32(34).fork(),
          )
          .join(),
      presentationParam47.fraction !== void 0 &&
        presentationValue92
          .encode(
            presentationParam47.fraction,
            presentationParam48.uint32(42).fork(),
          )
          .join(),
      presentationParam47.radical !== void 0 &&
        presentationValue93
          .encode(
            presentationParam47.radical,
            presentationParam48.uint32(50).fork(),
          )
          .join(),
      presentationParam47.scripts !== void 0 &&
        presentationValue94
          .encode(
            presentationParam47.scripts,
            presentationParam48.uint32(58).fork(),
          )
          .join(),
      presentationParam47.nary !== void 0 &&
        presentationValue95
          .encode(
            presentationParam47.nary,
            presentationParam48.uint32(66).fork(),
          )
          .join(),
      presentationParam47.delimited !== void 0 &&
        $i
          .encode(
            presentationParam47.delimited,
            presentationParam48.uint32(74).fork(),
          )
          .join(),
      presentationParam47.function !== void 0 &&
        presentationValue96
          .encode(
            presentationParam47.function,
            presentationParam48.uint32(82).fork(),
          )
          .join(),
      presentationParam47.matrix !== void 0 &&
        presentationValue99
          .encode(
            presentationParam47.matrix,
            presentationParam48.uint32(90).fork(),
          )
          .join(),
      presentationParam47.accent !== void 0 &&
        presentationValue100
          .encode(
            presentationParam47.accent,
            presentationParam48.uint32(98).fork(),
          )
          .join(),
      presentationParam47.bar !== void 0 &&
        presentationValue101
          .encode(
            presentationParam47.bar,
            presentationParam48.uint32(106).fork(),
          )
          .join(),
      presentationParam47.enclosure !== void 0 &&
        presentationValue102
          .encode(
            presentationParam47.enclosure,
            presentationParam48.uint32(114).fork(),
          )
          .join(),
      presentationParam47.limit !== void 0 &&
        presentationValue103
          .encode(
            presentationParam47.limit,
            presentationParam48.uint32(122).fork(),
          )
          .join(),
      presentationParam47.phantom !== void 0 &&
        _a
          .encode(
            presentationParam47.phantom,
            presentationParam48.uint32(130).fork(),
          )
          .join(),
      presentationParam47.equationArray !== void 0 &&
        presentationValue104
          .encode(
            presentationParam47.equationArray,
            presentationParam48.uint32(138).fork(),
          )
          .join(),
      presentationParam48
    );
  },
  decode(presentationParam37, presentationParam38) {
    let presentationValue143 =
        presentationParam37 instanceof presentationFr
          ? presentationParam37
          : new presentationFr(presentationParam37),
      presentationValue144 =
        presentationParam38 === void 0
          ? presentationValue143.len
          : presentationValue143.pos + presentationParam38,
      presentationValue145 = presentationHelper115();
    for (; presentationValue143.pos < presentationValue144; ) {
      let presentationValue151 = presentationValue143.uint32();
      switch (presentationValue151 >>> 3) {
        case 1:
          if (presentationValue151 !== 10) break;
          presentationValue145.id = presentationValue143.string();
          continue;
        case 2:
          if (presentationValue151 !== 18) break;
          presentationValue145.style = presentationValue91.decode(
            presentationValue143,
            presentationValue143.uint32(),
          );
          continue;
        case 3:
          if (presentationValue151 !== 26) break;
          presentationValue145.sequence = presentationValue89.decode(
            presentationValue143,
            presentationValue143.uint32(),
          );
          continue;
        case 4:
          if (presentationValue151 !== 34) break;
          presentationValue145.token = presentationValue90.decode(
            presentationValue143,
            presentationValue143.uint32(),
          );
          continue;
        case 5:
          if (presentationValue151 !== 42) break;
          presentationValue145.fraction = presentationValue92.decode(
            presentationValue143,
            presentationValue143.uint32(),
          );
          continue;
        case 6:
          if (presentationValue151 !== 50) break;
          presentationValue145.radical = presentationValue93.decode(
            presentationValue143,
            presentationValue143.uint32(),
          );
          continue;
        case 7:
          if (presentationValue151 !== 58) break;
          presentationValue145.scripts = presentationValue94.decode(
            presentationValue143,
            presentationValue143.uint32(),
          );
          continue;
        case 8:
          if (presentationValue151 !== 66) break;
          presentationValue145.nary = presentationValue95.decode(
            presentationValue143,
            presentationValue143.uint32(),
          );
          continue;
        case 9:
          if (presentationValue151 !== 74) break;
          presentationValue145.delimited = $i.decode(
            presentationValue143,
            presentationValue143.uint32(),
          );
          continue;
        case 10:
          if (presentationValue151 !== 82) break;
          presentationValue145.function = presentationValue96.decode(
            presentationValue143,
            presentationValue143.uint32(),
          );
          continue;
        case 11:
          if (presentationValue151 !== 90) break;
          presentationValue145.matrix = presentationValue99.decode(
            presentationValue143,
            presentationValue143.uint32(),
          );
          continue;
        case 12:
          if (presentationValue151 !== 98) break;
          presentationValue145.accent = presentationValue100.decode(
            presentationValue143,
            presentationValue143.uint32(),
          );
          continue;
        case 13:
          if (presentationValue151 !== 106) break;
          presentationValue145.bar = presentationValue101.decode(
            presentationValue143,
            presentationValue143.uint32(),
          );
          continue;
        case 14:
          if (presentationValue151 !== 114) break;
          presentationValue145.enclosure = presentationValue102.decode(
            presentationValue143,
            presentationValue143.uint32(),
          );
          continue;
        case 15:
          if (presentationValue151 !== 122) break;
          presentationValue145.limit = presentationValue103.decode(
            presentationValue143,
            presentationValue143.uint32(),
          );
          continue;
        case 16:
          if (presentationValue151 !== 130) break;
          presentationValue145.phantom = _a.decode(
            presentationValue143,
            presentationValue143.uint32(),
          );
          continue;
        case 17:
          if (presentationValue151 !== 138) break;
          presentationValue145.equationArray = presentationValue104.decode(
            presentationValue143,
            presentationValue143.uint32(),
          );
          continue;
      }
      if ((presentationValue151 & 7) == 4 || presentationValue151 === 0) break;
      presentationValue143.skip(presentationValue151 & 7);
    }
    return presentationValue145;
  },
  create(presentationParam1347) {
    return presentationValue88.fromPartial(presentationParam1347 ?? {});
  },
  fromPartial(presentationParam33) {
    let presentationValue140 = presentationHelper115();
    return (
      (presentationValue140.id = presentationParam33.id ?? void 0),
      (presentationValue140.style =
        presentationParam33.style !== void 0 &&
        presentationParam33.style !== null
          ? presentationValue91.fromPartial(presentationParam33.style)
          : void 0),
      (presentationValue140.sequence =
        presentationParam33.sequence !== void 0 &&
        presentationParam33.sequence !== null
          ? presentationValue89.fromPartial(presentationParam33.sequence)
          : void 0),
      (presentationValue140.token =
        presentationParam33.token !== void 0 &&
        presentationParam33.token !== null
          ? presentationValue90.fromPartial(presentationParam33.token)
          : void 0),
      (presentationValue140.fraction =
        presentationParam33.fraction !== void 0 &&
        presentationParam33.fraction !== null
          ? presentationValue92.fromPartial(presentationParam33.fraction)
          : void 0),
      (presentationValue140.radical =
        presentationParam33.radical !== void 0 &&
        presentationParam33.radical !== null
          ? presentationValue93.fromPartial(presentationParam33.radical)
          : void 0),
      (presentationValue140.scripts =
        presentationParam33.scripts !== void 0 &&
        presentationParam33.scripts !== null
          ? presentationValue94.fromPartial(presentationParam33.scripts)
          : void 0),
      (presentationValue140.nary =
        presentationParam33.nary !== void 0 && presentationParam33.nary !== null
          ? presentationValue95.fromPartial(presentationParam33.nary)
          : void 0),
      (presentationValue140.delimited =
        presentationParam33.delimited !== void 0 &&
        presentationParam33.delimited !== null
          ? $i.fromPartial(presentationParam33.delimited)
          : void 0),
      (presentationValue140.function =
        presentationParam33.function !== void 0 &&
        presentationParam33.function !== null
          ? presentationValue96.fromPartial(presentationParam33.function)
          : void 0),
      (presentationValue140.matrix =
        presentationParam33.matrix !== void 0 &&
        presentationParam33.matrix !== null
          ? presentationValue99.fromPartial(presentationParam33.matrix)
          : void 0),
      (presentationValue140.accent =
        presentationParam33.accent !== void 0 &&
        presentationParam33.accent !== null
          ? presentationValue100.fromPartial(presentationParam33.accent)
          : void 0),
      (presentationValue140.bar =
        presentationParam33.bar !== void 0 && presentationParam33.bar !== null
          ? presentationValue101.fromPartial(presentationParam33.bar)
          : void 0),
      (presentationValue140.enclosure =
        presentationParam33.enclosure !== void 0 &&
        presentationParam33.enclosure !== null
          ? presentationValue102.fromPartial(presentationParam33.enclosure)
          : void 0),
      (presentationValue140.limit =
        presentationParam33.limit !== void 0 &&
        presentationParam33.limit !== null
          ? presentationValue103.fromPartial(presentationParam33.limit)
          : void 0),
      (presentationValue140.phantom =
        presentationParam33.phantom !== void 0 &&
        presentationParam33.phantom !== null
          ? _a.fromPartial(presentationParam33.phantom)
          : void 0),
      (presentationValue140.equationArray =
        presentationParam33.equationArray !== void 0 &&
        presentationParam33.equationArray !== null
          ? presentationValue104.fromPartial(presentationParam33.equationArray)
          : void 0),
      presentationValue140
    );
  },
};
function presentationHelper116() {
  return {
    children: [],
  };
}
var presentationValue89 = {
  encode(presentationParam1063, presentationParam1064 = new presentationPr()) {
    for (let presentationValue1272 of presentationParam1063.children)
      presentationValue88
        .encode(presentationValue1272, presentationParam1064.uint32(10).fork())
        .join();
    return presentationParam1064;
  },
  decode(presentationParam692, presentationParam693) {
    let presentationValue886 =
        presentationParam692 instanceof presentationFr
          ? presentationParam692
          : new presentationFr(presentationParam692),
      presentationValue887 =
        presentationParam693 === void 0
          ? presentationValue886.len
          : presentationValue886.pos + presentationParam693,
      presentationValue888 = presentationHelper116();
    for (; presentationValue886.pos < presentationValue887; ) {
      let presentationValue1078 = presentationValue886.uint32();
      switch (presentationValue1078 >>> 3) {
        case 1:
          if (presentationValue1078 !== 10) break;
          presentationValue888.children.push(
            presentationValue88.decode(
              presentationValue886,
              presentationValue886.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue1078 & 7) == 4 || presentationValue1078 === 0)
        break;
      presentationValue886.skip(presentationValue1078 & 7);
    }
    return presentationValue888;
  },
  create(presentationParam1240) {
    return presentationValue89.fromPartial(presentationParam1240 ?? {});
  },
  fromPartial(presentationParam1076) {
    let presentationValue1176 = presentationHelper116();
    return (
      (presentationValue1176.children =
        presentationParam1076.children?.map((presentationParam1433) =>
          presentationValue88.fromPartial(presentationParam1433),
        ) || []),
      presentationValue1176
    );
  },
};
function presentationHelper117() {
  return {
    text: ``,
    kind: void 0,
    language: void 0,
  };
}
var presentationValue90 = {
  encode(presentationParam886, presentationParam887 = new presentationPr()) {
    return (
      presentationParam886.text !== `` &&
        presentationParam887.uint32(10).string(presentationParam886.text),
      presentationParam886.kind !== void 0 &&
        presentationParam887.uint32(16).int32(presentationParam886.kind),
      presentationParam886.language !== void 0 &&
        presentationParam887.uint32(26).string(presentationParam886.language),
      presentationParam887
    );
  },
  decode(presentationParam499, presentationParam500) {
    let presentationValue670 =
        presentationParam499 instanceof presentationFr
          ? presentationParam499
          : new presentationFr(presentationParam499),
      presentationValue671 =
        presentationParam500 === void 0
          ? presentationValue670.len
          : presentationValue670.pos + presentationParam500,
      presentationValue672 = presentationHelper117();
    for (; presentationValue670.pos < presentationValue671; ) {
      let presentationValue960 = presentationValue670.uint32();
      switch (presentationValue960 >>> 3) {
        case 1:
          if (presentationValue960 !== 10) break;
          presentationValue672.text = presentationValue670.string();
          continue;
        case 2:
          if (presentationValue960 !== 16) break;
          presentationValue672.kind = presentationValue670.int32();
          continue;
        case 3:
          if (presentationValue960 !== 26) break;
          presentationValue672.language = presentationValue670.string();
          continue;
      }
      if ((presentationValue960 & 7) == 4 || presentationValue960 === 0) break;
      presentationValue670.skip(presentationValue960 & 7);
    }
    return presentationValue672;
  },
  create(presentationParam1241) {
    return presentationValue90.fromPartial(presentationParam1241 ?? {});
  },
  fromPartial(presentationParam1018) {
    let presentationValue1139 = presentationHelper117();
    return (
      (presentationValue1139.text = presentationParam1018.text ?? ``),
      (presentationValue1139.kind = presentationParam1018.kind ?? void 0),
      (presentationValue1139.language =
        presentationParam1018.language ?? void 0),
      presentationValue1139
    );
  },
};
function presentationHelper118() {
  return {
    bold: void 0,
    italic: void 0,
    fontSize: void 0,
    typeface: void 0,
    language: void 0,
    fill: void 0,
    variant: void 0,
    normalText: void 0,
    literal: void 0,
  };
}
var presentationValue91 = {
  encode(presentationParam252, presentationParam253 = new presentationPr()) {
    return (
      presentationParam252.bold !== void 0 &&
        presentationParam253.uint32(8).bool(presentationParam252.bold),
      presentationParam252.italic !== void 0 &&
        presentationParam253.uint32(16).bool(presentationParam252.italic),
      presentationParam252.fontSize !== void 0 &&
        presentationParam253.uint32(24).int32(presentationParam252.fontSize),
      presentationParam252.typeface !== void 0 &&
        presentationParam253.uint32(34).string(presentationParam252.typeface),
      presentationParam252.language !== void 0 &&
        presentationParam253.uint32(42).string(presentationParam252.language),
      presentationParam252.fill !== void 0 &&
        presentationHn
          .encode(
            presentationParam252.fill,
            presentationParam253.uint32(50).fork(),
          )
          .join(),
      presentationParam252.variant !== void 0 &&
        presentationParam253.uint32(56).int32(presentationParam252.variant),
      presentationParam252.normalText !== void 0 &&
        presentationParam253.uint32(64).bool(presentationParam252.normalText),
      presentationParam252.literal !== void 0 &&
        presentationParam253.uint32(72).bool(presentationParam252.literal),
      presentationParam253
    );
  },
  decode(presentationParam149, presentationParam150) {
    let presentationValue276 =
        presentationParam149 instanceof presentationFr
          ? presentationParam149
          : new presentationFr(presentationParam149),
      presentationValue277 =
        presentationParam150 === void 0
          ? presentationValue276.len
          : presentationValue276.pos + presentationParam150,
      presentationValue278 = presentationHelper118();
    for (; presentationValue276.pos < presentationValue277; ) {
      let presentationValue333 = presentationValue276.uint32();
      switch (presentationValue333 >>> 3) {
        case 1:
          if (presentationValue333 !== 8) break;
          presentationValue278.bold = presentationValue276.bool();
          continue;
        case 2:
          if (presentationValue333 !== 16) break;
          presentationValue278.italic = presentationValue276.bool();
          continue;
        case 3:
          if (presentationValue333 !== 24) break;
          presentationValue278.fontSize = presentationValue276.int32();
          continue;
        case 4:
          if (presentationValue333 !== 34) break;
          presentationValue278.typeface = presentationValue276.string();
          continue;
        case 5:
          if (presentationValue333 !== 42) break;
          presentationValue278.language = presentationValue276.string();
          continue;
        case 6:
          if (presentationValue333 !== 50) break;
          presentationValue278.fill = presentationHn.decode(
            presentationValue276,
            presentationValue276.uint32(),
          );
          continue;
        case 7:
          if (presentationValue333 !== 56) break;
          presentationValue278.variant = presentationValue276.int32();
          continue;
        case 8:
          if (presentationValue333 !== 64) break;
          presentationValue278.normalText = presentationValue276.bool();
          continue;
        case 9:
          if (presentationValue333 !== 72) break;
          presentationValue278.literal = presentationValue276.bool();
          continue;
      }
      if ((presentationValue333 & 7) == 4 || presentationValue333 === 0) break;
      presentationValue276.skip(presentationValue333 & 7);
    }
    return presentationValue278;
  },
  create(presentationParam1242) {
    return presentationValue91.fromPartial(presentationParam1242 ?? {});
  },
  fromPartial(presentationParam484) {
    let presentationValue647 = presentationHelper118();
    return (
      (presentationValue647.bold = presentationParam484.bold ?? void 0),
      (presentationValue647.italic = presentationParam484.italic ?? void 0),
      (presentationValue647.fontSize = presentationParam484.fontSize ?? void 0),
      (presentationValue647.typeface = presentationParam484.typeface ?? void 0),
      (presentationValue647.language = presentationParam484.language ?? void 0),
      (presentationValue647.fill =
        presentationParam484.fill !== void 0 &&
        presentationParam484.fill !== null
          ? presentationHn.fromPartial(presentationParam484.fill)
          : void 0),
      (presentationValue647.variant = presentationParam484.variant ?? void 0),
      (presentationValue647.normalText =
        presentationParam484.normalText ?? void 0),
      (presentationValue647.literal = presentationParam484.literal ?? void 0),
      presentationValue647
    );
  },
};
function presentationHelper119() {
  return {
    kind: void 0,
    numerator: void 0,
    denominator: void 0,
  };
}
var presentationValue92 = {
  encode(presentationParam794, presentationParam795 = new presentationPr()) {
    return (
      presentationParam794.kind !== void 0 &&
        presentationParam795.uint32(8).int32(presentationParam794.kind),
      presentationParam794.numerator !== void 0 &&
        presentationValue88
          .encode(
            presentationParam794.numerator,
            presentationParam795.uint32(18).fork(),
          )
          .join(),
      presentationParam794.denominator !== void 0 &&
        presentationValue88
          .encode(
            presentationParam794.denominator,
            presentationParam795.uint32(26).fork(),
          )
          .join(),
      presentationParam795
    );
  },
  decode(presentationParam443, presentationParam444) {
    let presentationValue601 =
        presentationParam443 instanceof presentationFr
          ? presentationParam443
          : new presentationFr(presentationParam443),
      presentationValue602 =
        presentationParam444 === void 0
          ? presentationValue601.len
          : presentationValue601.pos + presentationParam444,
      presentationValue603 = presentationHelper119();
    for (; presentationValue601.pos < presentationValue602; ) {
      let presentationValue872 = presentationValue601.uint32();
      switch (presentationValue872 >>> 3) {
        case 1:
          if (presentationValue872 !== 8) break;
          presentationValue603.kind = presentationValue601.int32();
          continue;
        case 2:
          if (presentationValue872 !== 18) break;
          presentationValue603.numerator = presentationValue88.decode(
            presentationValue601,
            presentationValue601.uint32(),
          );
          continue;
        case 3:
          if (presentationValue872 !== 26) break;
          presentationValue603.denominator = presentationValue88.decode(
            presentationValue601,
            presentationValue601.uint32(),
          );
          continue;
      }
      if ((presentationValue872 & 7) == 4 || presentationValue872 === 0) break;
      presentationValue601.skip(presentationValue872 & 7);
    }
    return presentationValue603;
  },
  create(presentationParam1243) {
    return presentationValue92.fromPartial(presentationParam1243 ?? {});
  },
  fromPartial(presentationParam706) {
    let presentationValue899 = presentationHelper119();
    return (
      (presentationValue899.kind = presentationParam706.kind ?? void 0),
      (presentationValue899.numerator =
        presentationParam706.numerator !== void 0 &&
        presentationParam706.numerator !== null
          ? presentationValue88.fromPartial(presentationParam706.numerator)
          : void 0),
      (presentationValue899.denominator =
        presentationParam706.denominator !== void 0 &&
        presentationParam706.denominator !== null
          ? presentationValue88.fromPartial(presentationParam706.denominator)
          : void 0),
      presentationValue899
    );
  },
};
function presentationHelper120() {
  return {
    degree: void 0,
    radicand: void 0,
    hideDegree: void 0,
  };
}
var presentationValue93 = {
  encode(presentationParam796, presentationParam797 = new presentationPr()) {
    return (
      presentationParam796.degree !== void 0 &&
        presentationValue88
          .encode(
            presentationParam796.degree,
            presentationParam797.uint32(10).fork(),
          )
          .join(),
      presentationParam796.radicand !== void 0 &&
        presentationValue88
          .encode(
            presentationParam796.radicand,
            presentationParam797.uint32(18).fork(),
          )
          .join(),
      presentationParam796.hideDegree !== void 0 &&
        presentationParam797.uint32(24).bool(presentationParam796.hideDegree),
      presentationParam797
    );
  },
  decode(presentationParam445, presentationParam446) {
    let presentationValue604 =
        presentationParam445 instanceof presentationFr
          ? presentationParam445
          : new presentationFr(presentationParam445),
      presentationValue605 =
        presentationParam446 === void 0
          ? presentationValue604.len
          : presentationValue604.pos + presentationParam446,
      presentationValue606 = presentationHelper120();
    for (; presentationValue604.pos < presentationValue605; ) {
      let presentationValue873 = presentationValue604.uint32();
      switch (presentationValue873 >>> 3) {
        case 1:
          if (presentationValue873 !== 10) break;
          presentationValue606.degree = presentationValue88.decode(
            presentationValue604,
            presentationValue604.uint32(),
          );
          continue;
        case 2:
          if (presentationValue873 !== 18) break;
          presentationValue606.radicand = presentationValue88.decode(
            presentationValue604,
            presentationValue604.uint32(),
          );
          continue;
        case 3:
          if (presentationValue873 !== 24) break;
          presentationValue606.hideDegree = presentationValue604.bool();
          continue;
      }
      if ((presentationValue873 & 7) == 4 || presentationValue873 === 0) break;
      presentationValue604.skip(presentationValue873 & 7);
    }
    return presentationValue606;
  },
  create(presentationParam1244) {
    return presentationValue93.fromPartial(presentationParam1244 ?? {});
  },
  fromPartial(presentationParam756) {
    let presentationValue932 = presentationHelper120();
    return (
      (presentationValue932.degree =
        presentationParam756.degree !== void 0 &&
        presentationParam756.degree !== null
          ? presentationValue88.fromPartial(presentationParam756.degree)
          : void 0),
      (presentationValue932.radicand =
        presentationParam756.radicand !== void 0 &&
        presentationParam756.radicand !== null
          ? presentationValue88.fromPartial(presentationParam756.radicand)
          : void 0),
      (presentationValue932.hideDegree =
        presentationParam756.hideDegree ?? void 0),
      presentationValue932
    );
  },
};
function presentationHelper121() {
  return {
    base: void 0,
    subscript: void 0,
    superscript: void 0,
    presubscript: void 0,
    presuperscript: void 0,
  };
}
var presentationValue94 = {
  encode(presentationParam371, presentationParam372 = new presentationPr()) {
    return (
      presentationParam371.base !== void 0 &&
        presentationValue88
          .encode(
            presentationParam371.base,
            presentationParam372.uint32(10).fork(),
          )
          .join(),
      presentationParam371.subscript !== void 0 &&
        presentationValue88
          .encode(
            presentationParam371.subscript,
            presentationParam372.uint32(18).fork(),
          )
          .join(),
      presentationParam371.superscript !== void 0 &&
        presentationValue88
          .encode(
            presentationParam371.superscript,
            presentationParam372.uint32(26).fork(),
          )
          .join(),
      presentationParam371.presubscript !== void 0 &&
        presentationValue88
          .encode(
            presentationParam371.presubscript,
            presentationParam372.uint32(34).fork(),
          )
          .join(),
      presentationParam371.presuperscript !== void 0 &&
        presentationValue88
          .encode(
            presentationParam371.presuperscript,
            presentationParam372.uint32(42).fork(),
          )
          .join(),
      presentationParam372
    );
  },
  decode(presentationParam235, presentationParam236) {
    let presentationValue365 =
        presentationParam235 instanceof presentationFr
          ? presentationParam235
          : new presentationFr(presentationParam235),
      presentationValue366 =
        presentationParam236 === void 0
          ? presentationValue365.len
          : presentationValue365.pos + presentationParam236,
      presentationValue367 = presentationHelper121();
    for (; presentationValue365.pos < presentationValue366; ) {
      let presentationValue477 = presentationValue365.uint32();
      switch (presentationValue477 >>> 3) {
        case 1:
          if (presentationValue477 !== 10) break;
          presentationValue367.base = presentationValue88.decode(
            presentationValue365,
            presentationValue365.uint32(),
          );
          continue;
        case 2:
          if (presentationValue477 !== 18) break;
          presentationValue367.subscript = presentationValue88.decode(
            presentationValue365,
            presentationValue365.uint32(),
          );
          continue;
        case 3:
          if (presentationValue477 !== 26) break;
          presentationValue367.superscript = presentationValue88.decode(
            presentationValue365,
            presentationValue365.uint32(),
          );
          continue;
        case 4:
          if (presentationValue477 !== 34) break;
          presentationValue367.presubscript = presentationValue88.decode(
            presentationValue365,
            presentationValue365.uint32(),
          );
          continue;
        case 5:
          if (presentationValue477 !== 42) break;
          presentationValue367.presuperscript = presentationValue88.decode(
            presentationValue365,
            presentationValue365.uint32(),
          );
          continue;
      }
      if ((presentationValue477 & 7) == 4 || presentationValue477 === 0) break;
      presentationValue365.skip(presentationValue477 & 7);
    }
    return presentationValue367;
  },
  create(presentationParam1245) {
    return presentationValue94.fromPartial(presentationParam1245 ?? {});
  },
  fromPartial(presentationParam251) {
    let presentationValue382 = presentationHelper121();
    return (
      (presentationValue382.base =
        presentationParam251.base !== void 0 &&
        presentationParam251.base !== null
          ? presentationValue88.fromPartial(presentationParam251.base)
          : void 0),
      (presentationValue382.subscript =
        presentationParam251.subscript !== void 0 &&
        presentationParam251.subscript !== null
          ? presentationValue88.fromPartial(presentationParam251.subscript)
          : void 0),
      (presentationValue382.superscript =
        presentationParam251.superscript !== void 0 &&
        presentationParam251.superscript !== null
          ? presentationValue88.fromPartial(presentationParam251.superscript)
          : void 0),
      (presentationValue382.presubscript =
        presentationParam251.presubscript !== void 0 &&
        presentationParam251.presubscript !== null
          ? presentationValue88.fromPartial(presentationParam251.presubscript)
          : void 0),
      (presentationValue382.presuperscript =
        presentationParam251.presuperscript !== void 0 &&
        presentationParam251.presuperscript !== null
          ? presentationValue88.fromPartial(presentationParam251.presuperscript)
          : void 0),
      presentationValue382
    );
  },
};
function presentationHelper122() {
  return {
    operator: ``,
    lowerLimit: void 0,
    upperLimit: void 0,
    body: void 0,
    limitPlacement: void 0,
    hideSubscript: void 0,
    hideSuperscript: void 0,
  };
}
var presentationValue95 = {
  encode(presentationParam269, presentationParam270 = new presentationPr()) {
    return (
      presentationParam269.operator !== `` &&
        presentationParam270.uint32(10).string(presentationParam269.operator),
      presentationParam269.lowerLimit !== void 0 &&
        presentationValue88
          .encode(
            presentationParam269.lowerLimit,
            presentationParam270.uint32(18).fork(),
          )
          .join(),
      presentationParam269.upperLimit !== void 0 &&
        presentationValue88
          .encode(
            presentationParam269.upperLimit,
            presentationParam270.uint32(26).fork(),
          )
          .join(),
      presentationParam269.body !== void 0 &&
        presentationValue88
          .encode(
            presentationParam269.body,
            presentationParam270.uint32(34).fork(),
          )
          .join(),
      presentationParam269.limitPlacement !== void 0 &&
        presentationParam270
          .uint32(40)
          .int32(presentationParam269.limitPlacement),
      presentationParam269.hideSubscript !== void 0 &&
        presentationParam270
          .uint32(48)
          .bool(presentationParam269.hideSubscript),
      presentationParam269.hideSuperscript !== void 0 &&
        presentationParam270
          .uint32(56)
          .bool(presentationParam269.hideSuperscript),
      presentationParam270
    );
  },
  decode(presentationParam169, presentationParam170) {
    let presentationValue291 =
        presentationParam169 instanceof presentationFr
          ? presentationParam169
          : new presentationFr(presentationParam169),
      presentationValue292 =
        presentationParam170 === void 0
          ? presentationValue291.len
          : presentationValue291.pos + presentationParam170,
      presentationValue293 = presentationHelper122();
    for (; presentationValue291.pos < presentationValue292; ) {
      let presentationValue378 = presentationValue291.uint32();
      switch (presentationValue378 >>> 3) {
        case 1:
          if (presentationValue378 !== 10) break;
          presentationValue293.operator = presentationValue291.string();
          continue;
        case 2:
          if (presentationValue378 !== 18) break;
          presentationValue293.lowerLimit = presentationValue88.decode(
            presentationValue291,
            presentationValue291.uint32(),
          );
          continue;
        case 3:
          if (presentationValue378 !== 26) break;
          presentationValue293.upperLimit = presentationValue88.decode(
            presentationValue291,
            presentationValue291.uint32(),
          );
          continue;
        case 4:
          if (presentationValue378 !== 34) break;
          presentationValue293.body = presentationValue88.decode(
            presentationValue291,
            presentationValue291.uint32(),
          );
          continue;
        case 5:
          if (presentationValue378 !== 40) break;
          presentationValue293.limitPlacement = presentationValue291.int32();
          continue;
        case 6:
          if (presentationValue378 !== 48) break;
          presentationValue293.hideSubscript = presentationValue291.bool();
          continue;
        case 7:
          if (presentationValue378 !== 56) break;
          presentationValue293.hideSuperscript = presentationValue291.bool();
          continue;
      }
      if ((presentationValue378 & 7) == 4 || presentationValue378 === 0) break;
      presentationValue291.skip(presentationValue378 & 7);
    }
    return presentationValue293;
  },
  create(presentationParam1246) {
    return presentationValue95.fromPartial(presentationParam1246 ?? {});
  },
  fromPartial(presentationParam310) {
    let presentationValue454 = presentationHelper122();
    return (
      (presentationValue454.operator = presentationParam310.operator ?? ``),
      (presentationValue454.lowerLimit =
        presentationParam310.lowerLimit !== void 0 &&
        presentationParam310.lowerLimit !== null
          ? presentationValue88.fromPartial(presentationParam310.lowerLimit)
          : void 0),
      (presentationValue454.upperLimit =
        presentationParam310.upperLimit !== void 0 &&
        presentationParam310.upperLimit !== null
          ? presentationValue88.fromPartial(presentationParam310.upperLimit)
          : void 0),
      (presentationValue454.body =
        presentationParam310.body !== void 0 &&
        presentationParam310.body !== null
          ? presentationValue88.fromPartial(presentationParam310.body)
          : void 0),
      (presentationValue454.limitPlacement =
        presentationParam310.limitPlacement ?? void 0),
      (presentationValue454.hideSubscript =
        presentationParam310.hideSubscript ?? void 0),
      (presentationValue454.hideSuperscript =
        presentationParam310.hideSuperscript ?? void 0),
      presentationValue454
    );
  },
};
function presentationHelper123() {
  return {
    beginDelimiter: void 0,
    separatorDelimiter: void 0,
    endDelimiter: void 0,
    items: [],
    grow: void 0,
    shape: void 0,
  };
}
var $i = {
  encode(presentationParam404, presentationParam405 = new presentationPr()) {
    (presentationParam404.beginDelimiter !== void 0 &&
      presentationParam405
        .uint32(10)
        .string(presentationParam404.beginDelimiter),
      presentationParam404.separatorDelimiter !== void 0 &&
        presentationParam405
          .uint32(18)
          .string(presentationParam404.separatorDelimiter),
      presentationParam404.endDelimiter !== void 0 &&
        presentationParam405
          .uint32(26)
          .string(presentationParam404.endDelimiter));
    for (let presentationValue1301 of presentationParam404.items)
      presentationValue88
        .encode(presentationValue1301, presentationParam405.uint32(34).fork())
        .join();
    return (
      presentationParam404.grow !== void 0 &&
        presentationParam405.uint32(40).bool(presentationParam404.grow),
      presentationParam404.shape !== void 0 &&
        presentationParam405.uint32(50).string(presentationParam404.shape),
      presentationParam405
    );
  },
  decode(presentationParam219, presentationParam220) {
    let presentationValue347 =
        presentationParam219 instanceof presentationFr
          ? presentationParam219
          : new presentationFr(presentationParam219),
      presentationValue348 =
        presentationParam220 === void 0
          ? presentationValue347.len
          : presentationValue347.pos + presentationParam220,
      presentationValue349 = presentationHelper123();
    for (; presentationValue347.pos < presentationValue348; ) {
      let presentationValue468 = presentationValue347.uint32();
      switch (presentationValue468 >>> 3) {
        case 1:
          if (presentationValue468 !== 10) break;
          presentationValue349.beginDelimiter = presentationValue347.string();
          continue;
        case 2:
          if (presentationValue468 !== 18) break;
          presentationValue349.separatorDelimiter =
            presentationValue347.string();
          continue;
        case 3:
          if (presentationValue468 !== 26) break;
          presentationValue349.endDelimiter = presentationValue347.string();
          continue;
        case 4:
          if (presentationValue468 !== 34) break;
          presentationValue349.items.push(
            presentationValue88.decode(
              presentationValue347,
              presentationValue347.uint32(),
            ),
          );
          continue;
        case 5:
          if (presentationValue468 !== 40) break;
          presentationValue349.grow = presentationValue347.bool();
          continue;
        case 6:
          if (presentationValue468 !== 50) break;
          presentationValue349.shape = presentationValue347.string();
          continue;
      }
      if ((presentationValue468 & 7) == 4 || presentationValue468 === 0) break;
      presentationValue347.skip(presentationValue468 & 7);
    }
    return presentationValue349;
  },
  create(presentationParam1247) {
    return $i.fromPartial(presentationParam1247 ?? {});
  },
  fromPartial(presentationParam659) {
    let presentationValue865 = presentationHelper123();
    return (
      (presentationValue865.beginDelimiter =
        presentationParam659.beginDelimiter ?? void 0),
      (presentationValue865.separatorDelimiter =
        presentationParam659.separatorDelimiter ?? void 0),
      (presentationValue865.endDelimiter =
        presentationParam659.endDelimiter ?? void 0),
      (presentationValue865.items =
        presentationParam659.items?.map((presentationParam1434) =>
          presentationValue88.fromPartial(presentationParam1434),
        ) || []),
      (presentationValue865.grow = presentationParam659.grow ?? void 0),
      (presentationValue865.shape = presentationParam659.shape ?? void 0),
      presentationValue865
    );
  },
};
function presentationHelper124() {
  return {
    name: void 0,
    argument: void 0,
  };
}
var presentationValue96 = {
  encode(presentationParam901, presentationParam902 = new presentationPr()) {
    return (
      presentationParam901.name !== void 0 &&
        presentationValue88
          .encode(
            presentationParam901.name,
            presentationParam902.uint32(10).fork(),
          )
          .join(),
      presentationParam901.argument !== void 0 &&
        presentationValue88
          .encode(
            presentationParam901.argument,
            presentationParam902.uint32(18).fork(),
          )
          .join(),
      presentationParam902
    );
  },
  decode(presentationParam540, presentationParam541) {
    let presentationValue705 =
        presentationParam540 instanceof presentationFr
          ? presentationParam540
          : new presentationFr(presentationParam540),
      presentationValue706 =
        presentationParam541 === void 0
          ? presentationValue705.len
          : presentationValue705.pos + presentationParam541,
      presentationValue707 = presentationHelper124();
    for (; presentationValue705.pos < presentationValue706; ) {
      let presentationValue993 = presentationValue705.uint32();
      switch (presentationValue993 >>> 3) {
        case 1:
          if (presentationValue993 !== 10) break;
          presentationValue707.name = presentationValue88.decode(
            presentationValue705,
            presentationValue705.uint32(),
          );
          continue;
        case 2:
          if (presentationValue993 !== 18) break;
          presentationValue707.argument = presentationValue88.decode(
            presentationValue705,
            presentationValue705.uint32(),
          );
          continue;
      }
      if ((presentationValue993 & 7) == 4 || presentationValue993 === 0) break;
      presentationValue705.skip(presentationValue993 & 7);
    }
    return presentationValue707;
  },
  create(presentationParam1248) {
    return presentationValue96.fromPartial(presentationParam1248 ?? {});
  },
  fromPartial(presentationParam843) {
    let presentationValue1014 = presentationHelper124();
    return (
      (presentationValue1014.name =
        presentationParam843.name !== void 0 &&
        presentationParam843.name !== null
          ? presentationValue88.fromPartial(presentationParam843.name)
          : void 0),
      (presentationValue1014.argument =
        presentationParam843.argument !== void 0 &&
        presentationParam843.argument !== null
          ? presentationValue88.fromPartial(presentationParam843.argument)
          : void 0),
      presentationValue1014
    );
  },
};
function presentationHelper125() {
  return {
    justification: void 0,
  };
}
var presentationValue97 = {
  encode(presentationParam1070, presentationParam1071 = new presentationPr()) {
    return (
      presentationParam1070.justification !== void 0 &&
        presentationParam1071
          .uint32(8)
          .int32(presentationParam1070.justification),
      presentationParam1071
    );
  },
  decode(presentationParam757, presentationParam758) {
    let presentationValue933 =
        presentationParam757 instanceof presentationFr
          ? presentationParam757
          : new presentationFr(presentationParam757),
      presentationValue934 =
        presentationParam758 === void 0
          ? presentationValue933.len
          : presentationValue933.pos + presentationParam758,
      presentationValue935 = presentationHelper125();
    for (; presentationValue933.pos < presentationValue934; ) {
      let presentationValue1107 = presentationValue933.uint32();
      switch (presentationValue1107 >>> 3) {
        case 1:
          if (presentationValue1107 !== 8) break;
          presentationValue935.justification = presentationValue933.int32();
          continue;
      }
      if ((presentationValue1107 & 7) == 4 || presentationValue1107 === 0)
        break;
      presentationValue933.skip(presentationValue1107 & 7);
    }
    return presentationValue935;
  },
  create(presentationParam1249) {
    return presentationValue97.fromPartial(presentationParam1249 ?? {});
  },
  fromPartial(presentationParam1105) {
    let presentationValue1206 = presentationHelper125();
    return (
      (presentationValue1206.justification =
        presentationParam1105.justification ?? void 0),
      presentationValue1206
    );
  },
};
function presentationHelper126() {
  return {
    cells: [],
  };
}
var presentationValue98 = {
  encode(presentationParam1077, presentationParam1078 = new presentationPr()) {
    for (let presentationValue1302 of presentationParam1077.cells)
      presentationValue88
        .encode(presentationValue1302, presentationParam1078.uint32(10).fork())
        .join();
    return presentationParam1078;
  },
  decode(presentationParam707, presentationParam708) {
    let presentationValue900 =
        presentationParam707 instanceof presentationFr
          ? presentationParam707
          : new presentationFr(presentationParam707),
      presentationValue901 =
        presentationParam708 === void 0
          ? presentationValue900.len
          : presentationValue900.pos + presentationParam708,
      presentationValue902 = presentationHelper126();
    for (; presentationValue900.pos < presentationValue901; ) {
      let presentationValue1085 = presentationValue900.uint32();
      switch (presentationValue1085 >>> 3) {
        case 1:
          if (presentationValue1085 !== 10) break;
          presentationValue902.cells.push(
            presentationValue88.decode(
              presentationValue900,
              presentationValue900.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue1085 & 7) == 4 || presentationValue1085 === 0)
        break;
      presentationValue900.skip(presentationValue1085 & 7);
    }
    return presentationValue902;
  },
  create(presentationParam1250) {
    return presentationValue98.fromPartial(presentationParam1250 ?? {});
  },
  fromPartial(presentationParam1089) {
    let presentationValue1191 = presentationHelper126();
    return (
      (presentationValue1191.cells =
        presentationParam1089.cells?.map((presentationParam1435) =>
          presentationValue88.fromPartial(presentationParam1435),
        ) || []),
      presentationValue1191
    );
  },
};
function presentationHelper127() {
  return {
    columns: [],
    rows: [],
    columnCount: void 0,
  };
}
var presentationValue99 = {
  encode(presentationParam810, presentationParam811 = new presentationPr()) {
    for (let presentationValue1273 of presentationParam810.columns)
      presentationValue97
        .encode(presentationValue1273, presentationParam811.uint32(10).fork())
        .join();
    for (let presentationValue1303 of presentationParam810.rows)
      presentationValue98
        .encode(presentationValue1303, presentationParam811.uint32(18).fork())
        .join();
    return (
      presentationParam810.columnCount !== void 0 &&
        presentationParam811.uint32(24).int32(presentationParam810.columnCount),
      presentationParam811
    );
  },
  decode(presentationParam422, presentationParam423) {
    let presentationValue568 =
        presentationParam422 instanceof presentationFr
          ? presentationParam422
          : new presentationFr(presentationParam422),
      presentationValue569 =
        presentationParam423 === void 0
          ? presentationValue568.len
          : presentationValue568.pos + presentationParam423,
      presentationValue570 = presentationHelper127();
    for (; presentationValue568.pos < presentationValue569; ) {
      let presentationValue859 = presentationValue568.uint32();
      switch (presentationValue859 >>> 3) {
        case 1:
          if (presentationValue859 !== 10) break;
          presentationValue570.columns.push(
            presentationValue97.decode(
              presentationValue568,
              presentationValue568.uint32(),
            ),
          );
          continue;
        case 2:
          if (presentationValue859 !== 18) break;
          presentationValue570.rows.push(
            presentationValue98.decode(
              presentationValue568,
              presentationValue568.uint32(),
            ),
          );
          continue;
        case 3:
          if (presentationValue859 !== 24) break;
          presentationValue570.columnCount = presentationValue568.int32();
          continue;
      }
      if ((presentationValue859 & 7) == 4 || presentationValue859 === 0) break;
      presentationValue568.skip(presentationValue859 & 7);
    }
    return presentationValue570;
  },
  create(presentationParam1251) {
    return presentationValue99.fromPartial(presentationParam1251 ?? {});
  },
  fromPartial(presentationParam879) {
    let presentationValue1053 = presentationHelper127();
    return (
      (presentationValue1053.columns =
        presentationParam879.columns?.map((presentationParam1403) =>
          presentationValue97.fromPartial(presentationParam1403),
        ) || []),
      (presentationValue1053.rows =
        presentationParam879.rows?.map((presentationParam1404) =>
          presentationValue98.fromPartial(presentationParam1404),
        ) || []),
      (presentationValue1053.columnCount =
        presentationParam879.columnCount ?? void 0),
      presentationValue1053
    );
  },
};
function presentationHelper128() {
  return {
    character: ``,
    base: void 0,
    position: void 0,
  };
}
var presentationValue100 = {
  encode(presentationParam836, presentationParam837 = new presentationPr()) {
    return (
      presentationParam836.character !== `` &&
        presentationParam837.uint32(10).string(presentationParam836.character),
      presentationParam836.base !== void 0 &&
        presentationValue88
          .encode(
            presentationParam836.base,
            presentationParam837.uint32(18).fork(),
          )
          .join(),
      presentationParam836.position !== void 0 &&
        presentationParam837.uint32(24).int32(presentationParam836.position),
      presentationParam837
    );
  },
  decode(presentationParam464, presentationParam465) {
    let presentationValue627 =
        presentationParam464 instanceof presentationFr
          ? presentationParam464
          : new presentationFr(presentationParam464),
      presentationValue628 =
        presentationParam465 === void 0
          ? presentationValue627.len
          : presentationValue627.pos + presentationParam465,
      presentationValue629 = presentationHelper128();
    for (; presentationValue627.pos < presentationValue628; ) {
      let presentationValue903 = presentationValue627.uint32();
      switch (presentationValue903 >>> 3) {
        case 1:
          if (presentationValue903 !== 10) break;
          presentationValue629.character = presentationValue627.string();
          continue;
        case 2:
          if (presentationValue903 !== 18) break;
          presentationValue629.base = presentationValue88.decode(
            presentationValue627,
            presentationValue627.uint32(),
          );
          continue;
        case 3:
          if (presentationValue903 !== 24) break;
          presentationValue629.position = presentationValue627.int32();
          continue;
      }
      if ((presentationValue903 & 7) == 4 || presentationValue903 === 0) break;
      presentationValue627.skip(presentationValue903 & 7);
    }
    return presentationValue629;
  },
  create(presentationParam1252) {
    return presentationValue100.fromPartial(presentationParam1252 ?? {});
  },
  fromPartial(presentationParam896) {
    let presentationValue1062 = presentationHelper128();
    return (
      (presentationValue1062.character = presentationParam896.character ?? ``),
      (presentationValue1062.base =
        presentationParam896.base !== void 0 &&
        presentationParam896.base !== null
          ? presentationValue88.fromPartial(presentationParam896.base)
          : void 0),
      (presentationValue1062.position =
        presentationParam896.position ?? void 0),
      presentationValue1062
    );
  },
};
function presentationHelper129() {
  return {
    position: void 0,
    base: void 0,
  };
}
var presentationValue101 = {
  encode(presentationParam945, presentationParam946 = new presentationPr()) {
    return (
      presentationParam945.position !== void 0 &&
        presentationParam946.uint32(8).int32(presentationParam945.position),
      presentationParam945.base !== void 0 &&
        presentationValue88
          .encode(
            presentationParam945.base,
            presentationParam946.uint32(18).fork(),
          )
          .join(),
      presentationParam946
    );
  },
  decode(presentationParam588, presentationParam589) {
    let presentationValue776 =
        presentationParam588 instanceof presentationFr
          ? presentationParam588
          : new presentationFr(presentationParam588),
      presentationValue777 =
        presentationParam589 === void 0
          ? presentationValue776.len
          : presentationValue776.pos + presentationParam589,
      presentationValue778 = presentationHelper129();
    for (; presentationValue776.pos < presentationValue777; ) {
      let presentationValue1020 = presentationValue776.uint32();
      switch (presentationValue1020 >>> 3) {
        case 1:
          if (presentationValue1020 !== 8) break;
          presentationValue778.position = presentationValue776.int32();
          continue;
        case 2:
          if (presentationValue1020 !== 18) break;
          presentationValue778.base = presentationValue88.decode(
            presentationValue776,
            presentationValue776.uint32(),
          );
          continue;
      }
      if ((presentationValue1020 & 7) == 4 || presentationValue1020 === 0)
        break;
      presentationValue776.skip(presentationValue1020 & 7);
    }
    return presentationValue778;
  },
  create(presentationParam1253) {
    return presentationValue101.fromPartial(presentationParam1253 ?? {});
  },
  fromPartial(presentationParam970) {
    let presentationValue1097 = presentationHelper129();
    return (
      (presentationValue1097.position =
        presentationParam970.position ?? void 0),
      (presentationValue1097.base =
        presentationParam970.base !== void 0 &&
        presentationParam970.base !== null
          ? presentationValue88.fromPartial(presentationParam970.base)
          : void 0),
      presentationValue1097
    );
  },
};
function presentationHelper130() {
  return {
    body: void 0,
    hideTop: void 0,
    hideBottom: void 0,
    hideLeft: void 0,
    hideRight: void 0,
    strikeHorizontal: void 0,
    strikeVertical: void 0,
    strikeTopLeftToBottomRight: void 0,
    strikeBottomLeftToTopRight: void 0,
  };
}
var presentationValue102 = {
  encode(presentationParam166, presentationParam167 = new presentationPr()) {
    return (
      presentationParam166.body !== void 0 &&
        presentationValue88
          .encode(
            presentationParam166.body,
            presentationParam167.uint32(10).fork(),
          )
          .join(),
      presentationParam166.hideTop !== void 0 &&
        presentationParam167.uint32(16).bool(presentationParam166.hideTop),
      presentationParam166.hideBottom !== void 0 &&
        presentationParam167.uint32(24).bool(presentationParam166.hideBottom),
      presentationParam166.hideLeft !== void 0 &&
        presentationParam167.uint32(32).bool(presentationParam166.hideLeft),
      presentationParam166.hideRight !== void 0 &&
        presentationParam167.uint32(40).bool(presentationParam166.hideRight),
      presentationParam166.strikeHorizontal !== void 0 &&
        presentationParam167
          .uint32(48)
          .bool(presentationParam166.strikeHorizontal),
      presentationParam166.strikeVertical !== void 0 &&
        presentationParam167
          .uint32(56)
          .bool(presentationParam166.strikeVertical),
      presentationParam166.strikeTopLeftToBottomRight !== void 0 &&
        presentationParam167
          .uint32(64)
          .bool(presentationParam166.strikeTopLeftToBottomRight),
      presentationParam166.strikeBottomLeftToTopRight !== void 0 &&
        presentationParam167
          .uint32(72)
          .bool(presentationParam166.strikeBottomLeftToTopRight),
      presentationParam167
    );
  },
  decode(presentationParam131, presentationParam132) {
    let presentationValue243 =
        presentationParam131 instanceof presentationFr
          ? presentationParam131
          : new presentationFr(presentationParam131),
      presentationValue244 =
        presentationParam132 === void 0
          ? presentationValue243.len
          : presentationValue243.pos + presentationParam132,
      presentationValue245 = presentationHelper130();
    for (; presentationValue243.pos < presentationValue244; ) {
      let presentationValue289 = presentationValue243.uint32();
      switch (presentationValue289 >>> 3) {
        case 1:
          if (presentationValue289 !== 10) break;
          presentationValue245.body = presentationValue88.decode(
            presentationValue243,
            presentationValue243.uint32(),
          );
          continue;
        case 2:
          if (presentationValue289 !== 16) break;
          presentationValue245.hideTop = presentationValue243.bool();
          continue;
        case 3:
          if (presentationValue289 !== 24) break;
          presentationValue245.hideBottom = presentationValue243.bool();
          continue;
        case 4:
          if (presentationValue289 !== 32) break;
          presentationValue245.hideLeft = presentationValue243.bool();
          continue;
        case 5:
          if (presentationValue289 !== 40) break;
          presentationValue245.hideRight = presentationValue243.bool();
          continue;
        case 6:
          if (presentationValue289 !== 48) break;
          presentationValue245.strikeHorizontal = presentationValue243.bool();
          continue;
        case 7:
          if (presentationValue289 !== 56) break;
          presentationValue245.strikeVertical = presentationValue243.bool();
          continue;
        case 8:
          if (presentationValue289 !== 64) break;
          presentationValue245.strikeTopLeftToBottomRight =
            presentationValue243.bool();
          continue;
        case 9:
          if (presentationValue289 !== 72) break;
          presentationValue245.strikeBottomLeftToTopRight =
            presentationValue243.bool();
          continue;
      }
      if ((presentationValue289 & 7) == 4 || presentationValue289 === 0) break;
      presentationValue243.skip(presentationValue289 & 7);
    }
    return presentationValue245;
  },
  create(presentationParam1254) {
    return presentationValue102.fromPartial(presentationParam1254 ?? {});
  },
  fromPartial(presentationParam297) {
    let presentationValue437 = presentationHelper130();
    return (
      (presentationValue437.body =
        presentationParam297.body !== void 0 &&
        presentationParam297.body !== null
          ? presentationValue88.fromPartial(presentationParam297.body)
          : void 0),
      (presentationValue437.hideTop = presentationParam297.hideTop ?? void 0),
      (presentationValue437.hideBottom =
        presentationParam297.hideBottom ?? void 0),
      (presentationValue437.hideLeft = presentationParam297.hideLeft ?? void 0),
      (presentationValue437.hideRight =
        presentationParam297.hideRight ?? void 0),
      (presentationValue437.strikeHorizontal =
        presentationParam297.strikeHorizontal ?? void 0),
      (presentationValue437.strikeVertical =
        presentationParam297.strikeVertical ?? void 0),
      (presentationValue437.strikeTopLeftToBottomRight =
        presentationParam297.strikeTopLeftToBottomRight ?? void 0),
      (presentationValue437.strikeBottomLeftToTopRight =
        presentationParam297.strikeBottomLeftToTopRight ?? void 0),
      presentationValue437
    );
  },
};
function presentationHelper131() {
  return {
    kind: void 0,
    base: void 0,
    limit: void 0,
  };
}
var presentationValue103 = {
  encode(presentationParam828, presentationParam829 = new presentationPr()) {
    return (
      presentationParam828.kind !== void 0 &&
        presentationParam829.uint32(8).int32(presentationParam828.kind),
      presentationParam828.base !== void 0 &&
        presentationValue88
          .encode(
            presentationParam828.base,
            presentationParam829.uint32(18).fork(),
          )
          .join(),
      presentationParam828.limit !== void 0 &&
        presentationValue88
          .encode(
            presentationParam828.limit,
            presentationParam829.uint32(26).fork(),
          )
          .join(),
      presentationParam829
    );
  },
  decode(presentationParam454, presentationParam455) {
    let presentationValue616 =
        presentationParam454 instanceof presentationFr
          ? presentationParam454
          : new presentationFr(presentationParam454),
      presentationValue617 =
        presentationParam455 === void 0
          ? presentationValue616.len
          : presentationValue616.pos + presentationParam455,
      presentationValue618 = presentationHelper131();
    for (; presentationValue616.pos < presentationValue617; ) {
      let presentationValue889 = presentationValue616.uint32();
      switch (presentationValue889 >>> 3) {
        case 1:
          if (presentationValue889 !== 8) break;
          presentationValue618.kind = presentationValue616.int32();
          continue;
        case 2:
          if (presentationValue889 !== 18) break;
          presentationValue618.base = presentationValue88.decode(
            presentationValue616,
            presentationValue616.uint32(),
          );
          continue;
        case 3:
          if (presentationValue889 !== 26) break;
          presentationValue618.limit = presentationValue88.decode(
            presentationValue616,
            presentationValue616.uint32(),
          );
          continue;
      }
      if ((presentationValue889 & 7) == 4 || presentationValue889 === 0) break;
      presentationValue616.skip(presentationValue889 & 7);
    }
    return presentationValue618;
  },
  create(presentationParam1255) {
    return presentationValue103.fromPartial(presentationParam1255 ?? {});
  },
  fromPartial(presentationParam825) {
    let presentationValue996 = presentationHelper131();
    return (
      (presentationValue996.kind = presentationParam825.kind ?? void 0),
      (presentationValue996.base =
        presentationParam825.base !== void 0 &&
        presentationParam825.base !== null
          ? presentationValue88.fromPartial(presentationParam825.base)
          : void 0),
      (presentationValue996.limit =
        presentationParam825.limit !== void 0 &&
        presentationParam825.limit !== null
          ? presentationValue88.fromPartial(presentationParam825.limit)
          : void 0),
      presentationValue996
    );
  },
};
function presentationHelper132() {
  return {
    body: void 0,
    show: void 0,
    zeroWidth: void 0,
    zeroAscent: void 0,
    zeroDescent: void 0,
  };
}
var _a = {
  encode(presentationParam544, presentationParam545 = new presentationPr()) {
    return (
      presentationParam544.body !== void 0 &&
        presentationValue88
          .encode(
            presentationParam544.body,
            presentationParam545.uint32(10).fork(),
          )
          .join(),
      presentationParam544.show !== void 0 &&
        presentationParam545.uint32(16).bool(presentationParam544.show),
      presentationParam544.zeroWidth !== void 0 &&
        presentationParam545.uint32(24).bool(presentationParam544.zeroWidth),
      presentationParam544.zeroAscent !== void 0 &&
        presentationParam545.uint32(32).bool(presentationParam544.zeroAscent),
      presentationParam544.zeroDescent !== void 0 &&
        presentationParam545.uint32(40).bool(presentationParam544.zeroDescent),
      presentationParam545
    );
  },
  decode(presentationParam300, presentationParam301) {
    let presentationValue442 =
        presentationParam300 instanceof presentationFr
          ? presentationParam300
          : new presentationFr(presentationParam300),
      presentationValue443 =
        presentationParam301 === void 0
          ? presentationValue442.len
          : presentationValue442.pos + presentationParam301,
      presentationValue444 = presentationHelper132();
    for (; presentationValue442.pos < presentationValue443; ) {
      let presentationValue622 = presentationValue442.uint32();
      switch (presentationValue622 >>> 3) {
        case 1:
          if (presentationValue622 !== 10) break;
          presentationValue444.body = presentationValue88.decode(
            presentationValue442,
            presentationValue442.uint32(),
          );
          continue;
        case 2:
          if (presentationValue622 !== 16) break;
          presentationValue444.show = presentationValue442.bool();
          continue;
        case 3:
          if (presentationValue622 !== 24) break;
          presentationValue444.zeroWidth = presentationValue442.bool();
          continue;
        case 4:
          if (presentationValue622 !== 32) break;
          presentationValue444.zeroAscent = presentationValue442.bool();
          continue;
        case 5:
          if (presentationValue622 !== 40) break;
          presentationValue444.zeroDescent = presentationValue442.bool();
          continue;
      }
      if ((presentationValue622 & 7) == 4 || presentationValue622 === 0) break;
      presentationValue442.skip(presentationValue622 & 7);
    }
    return presentationValue444;
  },
  create(presentationParam1256) {
    return _a.fromPartial(presentationParam1256 ?? {});
  },
  fromPartial(presentationParam762) {
    let presentationValue937 = presentationHelper132();
    return (
      (presentationValue937.body =
        presentationParam762.body !== void 0 &&
        presentationParam762.body !== null
          ? presentationValue88.fromPartial(presentationParam762.body)
          : void 0),
      (presentationValue937.show = presentationParam762.show ?? void 0),
      (presentationValue937.zeroWidth =
        presentationParam762.zeroWidth ?? void 0),
      (presentationValue937.zeroAscent =
        presentationParam762.zeroAscent ?? void 0),
      (presentationValue937.zeroDescent =
        presentationParam762.zeroDescent ?? void 0),
      presentationValue937
    );
  },
};
function presentationHelper133() {
  return {
    rows: [],
    justification: void 0,
    baseJustification: void 0,
  };
}
var presentationValue104 = {
  encode(presentationParam783, presentationParam784 = new presentationPr()) {
    for (let presentationValue1306 of presentationParam783.rows)
      presentationValue88
        .encode(presentationValue1306, presentationParam784.uint32(10).fork())
        .join();
    return (
      presentationParam783.justification !== void 0 &&
        presentationParam784
          .uint32(16)
          .int32(presentationParam783.justification),
      presentationParam783.baseJustification !== void 0 &&
        presentationParam784
          .uint32(26)
          .string(presentationParam783.baseJustification),
      presentationParam784
    );
  },
  decode(presentationParam433, presentationParam434) {
    let presentationValue583 =
        presentationParam433 instanceof presentationFr
          ? presentationParam433
          : new presentationFr(presentationParam433),
      presentationValue584 =
        presentationParam434 === void 0
          ? presentationValue583.len
          : presentationValue583.pos + presentationParam434,
      presentationValue585 = presentationHelper133();
    for (; presentationValue583.pos < presentationValue584; ) {
      let presentationValue864 = presentationValue583.uint32();
      switch (presentationValue864 >>> 3) {
        case 1:
          if (presentationValue864 !== 10) break;
          presentationValue585.rows.push(
            presentationValue88.decode(
              presentationValue583,
              presentationValue583.uint32(),
            ),
          );
          continue;
        case 2:
          if (presentationValue864 !== 16) break;
          presentationValue585.justification = presentationValue583.int32();
          continue;
        case 3:
          if (presentationValue864 !== 26) break;
          presentationValue585.baseJustification =
            presentationValue583.string();
          continue;
      }
      if ((presentationValue864 & 7) == 4 || presentationValue864 === 0) break;
      presentationValue583.skip(presentationValue864 & 7);
    }
    return presentationValue585;
  },
  create(presentationParam1257) {
    return presentationValue104.fromPartial(presentationParam1257 ?? {});
  },
  fromPartial(presentationParam880) {
    let presentationValue1054 = presentationHelper133();
    return (
      (presentationValue1054.rows =
        presentationParam880.rows?.map((presentationParam1436) =>
          presentationValue88.fromPartial(presentationParam1436),
        ) || []),
      (presentationValue1054.justification =
        presentationParam880.justification ?? void 0),
      (presentationValue1054.baseJustification =
        presentationParam880.baseJustification ?? void 0),
      presentationValue1054
    );
  },
};
export const presentationX = (function (presentationParam325) {
  return (
    (presentationParam325[
      (presentationParam325.LINE_END_TYPE_UNSPECIFIED = 0)
    ] = `LINE_END_TYPE_UNSPECIFIED`),
    (presentationParam325[(presentationParam325.LINE_END_TYPE_NONE = 1)] =
      `LINE_END_TYPE_NONE`),
    (presentationParam325[(presentationParam325.LINE_END_TYPE_TRIANGLE = 2)] =
      `LINE_END_TYPE_TRIANGLE`),
    (presentationParam325[(presentationParam325.LINE_END_TYPE_STEALTH = 3)] =
      `LINE_END_TYPE_STEALTH`),
    (presentationParam325[(presentationParam325.LINE_END_TYPE_DIAMOND = 4)] =
      `LINE_END_TYPE_DIAMOND`),
    (presentationParam325[(presentationParam325.LINE_END_TYPE_OVAL = 5)] =
      `LINE_END_TYPE_OVAL`),
    (presentationParam325[(presentationParam325.LINE_END_TYPE_ARROW = 6)] =
      `LINE_END_TYPE_ARROW`),
    (presentationParam325[(presentationParam325.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam325
  );
})({});
export const presentationV = (function (presentationParam769) {
  return (
    (presentationParam769[(presentationParam769.LINE_CAP_UNSPECIFIED = 0)] =
      `LINE_CAP_UNSPECIFIED`),
    (presentationParam769[(presentationParam769.LINE_CAP_FLAT = 1)] =
      `LINE_CAP_FLAT`),
    (presentationParam769[(presentationParam769.LINE_CAP_ROUND = 2)] =
      `LINE_CAP_ROUND`),
    (presentationParam769[(presentationParam769.LINE_CAP_SQUARE = 3)] =
      `LINE_CAP_SQUARE`),
    (presentationParam769[(presentationParam769.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam769
  );
})({});
export const presentationO = (function (presentationParam266) {
  return (
    (presentationParam266[
      (presentationParam266.CODE_BLOCK_KIND_UNSPECIFIED = 0)
    ] = `CODE_BLOCK_KIND_UNSPECIFIED`),
    (presentationParam266[
      (presentationParam266.CODE_BLOCK_KIND_SOURCE_ONLY = 1)
    ] = `CODE_BLOCK_KIND_SOURCE_ONLY`),
    (presentationParam266[
      (presentationParam266.CODE_BLOCK_KIND_OUTPUT_ONLY = 2)
    ] = `CODE_BLOCK_KIND_OUTPUT_ONLY`),
    (presentationParam266[
      (presentationParam266.CODE_BLOCK_KIND_SOURCE_THEN_OUTPUT = 3)
    ] = `CODE_BLOCK_KIND_SOURCE_THEN_OUTPUT`),
    (presentationParam266[
      (presentationParam266.CODE_BLOCK_KIND_SOURCE_OUTPUT_SPLIT = 4)
    ] = `CODE_BLOCK_KIND_SOURCE_OUTPUT_SPLIT`),
    (presentationParam266[
      (presentationParam266.CODE_BLOCK_KIND_PREVIEW_ONLY = 5)
    ] = `CODE_BLOCK_KIND_PREVIEW_ONLY`),
    (presentationParam266[(presentationParam266.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam266
  );
})({});
export const presentationJ = (function (presentationParam98) {
  return (
    (presentationParam98[(presentationParam98.ELEMENT_TYPE_UNSPECIFIED = 0)] =
      `ELEMENT_TYPE_UNSPECIFIED`),
    (presentationParam98[(presentationParam98.ELEMENT_TYPE_TEXT = 1)] =
      `ELEMENT_TYPE_TEXT`),
    (presentationParam98[(presentationParam98.ELEMENT_TYPE_TEXT_GROUP = 2)] =
      `ELEMENT_TYPE_TEXT_GROUP`),
    (presentationParam98[(presentationParam98.ELEMENT_TYPE_IMAGE = 3)] =
      `ELEMENT_TYPE_IMAGE`),
    (presentationParam98[(presentationParam98.ELEMENT_TYPE_CHART = 4)] =
      `ELEMENT_TYPE_CHART`),
    (presentationParam98[(presentationParam98.ELEMENT_TYPE_SHAPE = 5)] =
      `ELEMENT_TYPE_SHAPE`),
    (presentationParam98[
      (presentationParam98.ELEMENT_TYPE_CHART_REFERENCE = 6)
    ] = `ELEMENT_TYPE_CHART_REFERENCE`),
    (presentationParam98[
      (presentationParam98.ELEMENT_TYPE_IMAGE_REFERENCE = 7)
    ] = `ELEMENT_TYPE_IMAGE_REFERENCE`),
    (presentationParam98[
      (presentationParam98.ELEMENT_TYPE_VIDEO_REFERENCE = 8)
    ] = `ELEMENT_TYPE_VIDEO_REFERENCE`),
    (presentationParam98[(presentationParam98.ELEMENT_TYPE_TABLE = 9)] =
      `ELEMENT_TYPE_TABLE`),
    (presentationParam98[(presentationParam98.ELEMENT_TYPE_GROUP = 10)] =
      `ELEMENT_TYPE_GROUP`),
    (presentationParam98[
      (presentationParam98.ELEMENT_TYPE_EMBEDDED_ARTIFACT = 11)
    ] = `ELEMENT_TYPE_EMBEDDED_ARTIFACT`),
    (presentationParam98[(presentationParam98.ELEMENT_TYPE_SMART_ART = 12)] =
      `ELEMENT_TYPE_SMART_ART`),
    (presentationParam98[(presentationParam98.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam98
  );
})({});
export const presentationH = (function (presentationParam75) {
  return (
    (presentationParam75[(presentationParam75.CONDITION_UNSPECIFIED = 0)] =
      `CONDITION_UNSPECIFIED`),
    (presentationParam75[(presentationParam75.CONDITION_WHOLE_TABLE = 1)] =
      `CONDITION_WHOLE_TABLE`),
    (presentationParam75[(presentationParam75.CONDITION_FIRST_ROW = 2)] =
      `CONDITION_FIRST_ROW`),
    (presentationParam75[(presentationParam75.CONDITION_LAST_ROW = 3)] =
      `CONDITION_LAST_ROW`),
    (presentationParam75[(presentationParam75.CONDITION_FIRST_COLUMN = 4)] =
      `CONDITION_FIRST_COLUMN`),
    (presentationParam75[(presentationParam75.CONDITION_LAST_COLUMN = 5)] =
      `CONDITION_LAST_COLUMN`),
    (presentationParam75[(presentationParam75.CONDITION_BANDED_ROW_ODD = 6)] =
      `CONDITION_BANDED_ROW_ODD`),
    (presentationParam75[(presentationParam75.CONDITION_BANDED_ROW_EVEN = 7)] =
      `CONDITION_BANDED_ROW_EVEN`),
    (presentationParam75[
      (presentationParam75.CONDITION_BANDED_COLUMN_ODD = 8)
    ] = `CONDITION_BANDED_COLUMN_ODD`),
    (presentationParam75[
      (presentationParam75.CONDITION_BANDED_COLUMN_EVEN = 9)
    ] = `CONDITION_BANDED_COLUMN_EVEN`),
    (presentationParam75[(presentationParam75.CONDITION_TOP_LEFT_CELL = 10)] =
      `CONDITION_TOP_LEFT_CELL`),
    (presentationParam75[(presentationParam75.CONDITION_TOP_RIGHT_CELL = 11)] =
      `CONDITION_TOP_RIGHT_CELL`),
    (presentationParam75[
      (presentationParam75.CONDITION_BOTTOM_LEFT_CELL = 12)
    ] = `CONDITION_BOTTOM_LEFT_CELL`),
    (presentationParam75[
      (presentationParam75.CONDITION_BOTTOM_RIGHT_CELL = 13)
    ] = `CONDITION_BOTTOM_RIGHT_CELL`),
    (presentationParam75[(presentationParam75.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam75
  );
})({});
export const presentationB = (function (presentationParam597) {
  return (
    (presentationParam597[
      (presentationParam597.LINE_END_LENGTH_UNSPECIFIED = 0)
    ] = `LINE_END_LENGTH_UNSPECIFIED`),
    (presentationParam597[(presentationParam597.LINE_END_LENGTH_SMALL = 1)] =
      `LINE_END_LENGTH_SMALL`),
    (presentationParam597[(presentationParam597.LINE_END_LENGTH_MEDIUM = 2)] =
      `LINE_END_LENGTH_MEDIUM`),
    (presentationParam597[(presentationParam597.LINE_END_LENGTH_LARGE = 3)] =
      `LINE_END_LENGTH_LARGE`),
    (presentationParam597[(presentationParam597.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam597
  );
})({});
export const presentationAt = (function (presentationParam814) {
  return (
    (presentationParam814[(presentationParam814.RETURN_MODE_UNSPECIFIED = 0)] =
      `RETURN_MODE_UNSPECIFIED`),
    (presentationParam814[(presentationParam814.RETURN_MODE_VALUE = 1)] =
      `RETURN_MODE_VALUE`),
    (presentationParam814[(presentationParam814.RETURN_MODE_OBJECT = 2)] =
      `RETURN_MODE_OBJECT`),
    (presentationParam814[(presentationParam814.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam814
  );
})({});
export const presentationYt = `oaiproto.coworker.pptx`;
export const presentationS = (function (presentationParam623) {
  return (
    (presentationParam623[
      (presentationParam623.LINE_END_WIDTH_UNSPECIFIED = 0)
    ] = `LINE_END_WIDTH_UNSPECIFIED`),
    (presentationParam623[(presentationParam623.LINE_END_WIDTH_SMALL = 1)] =
      `LINE_END_WIDTH_SMALL`),
    (presentationParam623[(presentationParam623.LINE_END_WIDTH_MEDIUM = 2)] =
      `LINE_END_WIDTH_MEDIUM`),
    (presentationParam623[(presentationParam623.LINE_END_WIDTH_LARGE = 3)] =
      `LINE_END_WIDTH_LARGE`),
    (presentationParam623[(presentationParam623.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam623
  );
})({});
export const presentationQ = (function (presentationParam662) {
  return (
    (presentationParam662[
      (presentationParam662.GUIDE_ORIENTATION_UNSPECIFIED = 0)
    ] = `GUIDE_ORIENTATION_UNSPECIFIED`),
    (presentationParam662[
      (presentationParam662.GUIDE_ORIENTATION_HORIZONTAL = 1)
    ] = `GUIDE_ORIENTATION_HORIZONTAL`),
    (presentationParam662[
      (presentationParam662.GUIDE_ORIENTATION_VERTICAL = 2)
    ] = `GUIDE_ORIENTATION_VERTICAL`),
    (presentationParam662[(presentationParam662.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam662
  );
})({});
export const __presentationN = (function (presentationParam311) {
  return (
    (presentationParam311[
      (presentationParam311.ELEMENT_WRAP_TYPE_UNSPECIFIED = 0)
    ] = `ELEMENT_WRAP_TYPE_UNSPECIFIED`),
    (presentationParam311[(presentationParam311.ELEMENT_WRAP_TYPE_NONE = 1)] =
      `ELEMENT_WRAP_TYPE_NONE`),
    (presentationParam311[(presentationParam311.ELEMENT_WRAP_TYPE_SQUARE = 2)] =
      `ELEMENT_WRAP_TYPE_SQUARE`),
    (presentationParam311[(presentationParam311.ELEMENT_WRAP_TYPE_TIGHT = 3)] =
      `ELEMENT_WRAP_TYPE_TIGHT`),
    (presentationParam311[
      (presentationParam311.ELEMENT_WRAP_TYPE_THROUGH = 4)
    ] = `ELEMENT_WRAP_TYPE_THROUGH`),
    (presentationParam311[
      (presentationParam311.ELEMENT_WRAP_TYPE_TOP_AND_BOTTOM = 5)
    ] = `ELEMENT_WRAP_TYPE_TOP_AND_BOTTOM`),
    (presentationParam311[(presentationParam311.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam311
  );
})({});
export const presentationD = (function (presentationParam388) {
  return (
    (presentationParam388[(presentationParam388.EFFECT_TYPE_UNSPECIFIED = 0)] =
      `EFFECT_TYPE_UNSPECIFIED`),
    (presentationParam388[(presentationParam388.EFFECT_TYPE_OUTER_SHADOW = 1)] =
      `EFFECT_TYPE_OUTER_SHADOW`),
    (presentationParam388[(presentationParam388.EFFECT_TYPE_INNER_SHADOW = 2)] =
      `EFFECT_TYPE_INNER_SHADOW`),
    (presentationParam388[(presentationParam388.EFFECT_TYPE_GLOW = 3)] =
      `EFFECT_TYPE_GLOW`),
    (presentationParam388[(presentationParam388.EFFECT_TYPE_REFLECTION = 4)] =
      `EFFECT_TYPE_REFLECTION`),
    (presentationParam388[(presentationParam388.EFFECT_TYPE_SOFT_EDGES = 5)] =
      `EFFECT_TYPE_SOFT_EDGES`),
    (presentationParam388[(presentationParam388.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam388
  );
})({});
export const presentationC = (function (presentationParam730) {
  return (
    (presentationParam730[(presentationParam730.LINE_JOIN_UNSPECIFIED = 0)] =
      `LINE_JOIN_UNSPECIFIED`),
    (presentationParam730[(presentationParam730.LINE_JOIN_ROUND = 1)] =
      `LINE_JOIN_ROUND`),
    (presentationParam730[(presentationParam730.LINE_JOIN_BEVEL = 2)] =
      `LINE_JOIN_BEVEL`),
    (presentationParam730[(presentationParam730.LINE_JOIN_MITER = 3)] =
      `LINE_JOIN_MITER`),
    (presentationParam730[(presentationParam730.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam730
  );
})({});
export const presentationA = (function (presentationParam611) {
  return (
    (presentationParam611[
      (presentationParam611.ELEMENT_PLACEMENT_TYPE_UNSPECIFIED = 0)
    ] = `ELEMENT_PLACEMENT_TYPE_UNSPECIFIED`),
    (presentationParam611[
      (presentationParam611.ELEMENT_PLACEMENT_TYPE_INLINE = 1)
    ] = `ELEMENT_PLACEMENT_TYPE_INLINE`),
    (presentationParam611[
      (presentationParam611.ELEMENT_PLACEMENT_TYPE_ANCHORED = 2)
    ] = `ELEMENT_PLACEMENT_TYPE_ANCHORED`),
    (presentationParam611[(presentationParam611.UNRECOGNIZED = -1)] =
      `UNRECOGNIZED`),
    presentationParam611
  );
})({});
function presentationHelper134() {
  return {
    id: void 0,
    slides: [],
    theme: void 0,
    layouts: [],
    charts: [],
    images: [],
    contentReferences: [],
    people: [],
    threads: [],
    textStyles: [],
    tableStyles: void 0,
    viewProperties: void 0,
  };
}
var _presentationX = {
  encode(presentationParam87, presentationParam88 = new presentationPr()) {
    presentationParam87.id !== void 0 &&
      presentationParam88.uint32(82).string(presentationParam87.id);
    for (let presentationValue1295 of presentationParam87.slides)
      presentationUt
        .encode(presentationValue1295, presentationParam88.uint32(10).fork())
        .join();
    presentationParam87.theme !== void 0 &&
      presentationKt
        .encode(
          presentationParam87.theme,
          presentationParam88.uint32(18).fork(),
        )
        .join();
    for (let presentationValue1274 of presentationParam87.layouts)
      _presentationB
        .encode(presentationValue1274, presentationParam88.uint32(26).fork())
        .join();
    for (let presentationValue1287 of presentationParam87.charts)
      _presentationPn
        .encode(presentationValue1287, presentationParam88.uint32(74).fork())
        .join();
    for (let presentationValue1288 of presentationParam87.images)
      presentationKn
        .encode(presentationValue1288, presentationParam88.uint32(34).fork())
        .join();
    for (let presentationValue1215 of presentationParam87.contentReferences)
      presentationBn
        .encode(presentationValue1215, presentationParam88.uint32(42).fork())
        .join();
    for (let presentationValue1289 of presentationParam87.people)
      presentationEr
        .encode(presentationValue1289, presentationParam88.uint32(90).fork())
        .join();
    for (let presentationValue1275 of presentationParam87.threads)
      presentationLr
        .encode(presentationValue1275, presentationParam88.uint32(98).fork())
        .join();
    for (let presentationValue1254 of presentationParam87.textStyles)
      presentationSr
        .encode(presentationValue1254, presentationParam88.uint32(50).fork())
        .join();
    return (
      presentationParam87.tableStyles !== void 0 &&
        presentationWt
          .encode(
            presentationParam87.tableStyles,
            presentationParam88.uint32(58).fork(),
          )
          .join(),
      presentationParam87.viewProperties !== void 0 &&
        presentationDollar
          .encode(
            presentationParam87.viewProperties,
            presentationParam88.uint32(66).fork(),
          )
          .join(),
      presentationParam88
    );
  },
  decode(presentationParam55, presentationParam56) {
    let presentationValue161 =
        presentationParam55 instanceof presentationFr
          ? presentationParam55
          : new presentationFr(presentationParam55),
      presentationValue162 =
        presentationParam56 === void 0
          ? presentationValue161.len
          : presentationValue161.pos + presentationParam56,
      presentationValue163 = presentationHelper134();
    for (; presentationValue161.pos < presentationValue162; ) {
      let presentationValue172 = presentationValue161.uint32();
      switch (presentationValue172 >>> 3) {
        case 10:
          if (presentationValue172 !== 82) break;
          presentationValue163.id = presentationValue161.string();
          continue;
        case 1:
          if (presentationValue172 !== 10) break;
          presentationValue163.slides.push(
            presentationUt.decode(
              presentationValue161,
              presentationValue161.uint32(),
            ),
          );
          continue;
        case 2:
          if (presentationValue172 !== 18) break;
          presentationValue163.theme = presentationKt.decode(
            presentationValue161,
            presentationValue161.uint32(),
          );
          continue;
        case 3:
          if (presentationValue172 !== 26) break;
          presentationValue163.layouts.push(
            _presentationB.decode(
              presentationValue161,
              presentationValue161.uint32(),
            ),
          );
          continue;
        case 9:
          if (presentationValue172 !== 74) break;
          presentationValue163.charts.push(
            _presentationPn.decode(
              presentationValue161,
              presentationValue161.uint32(),
            ),
          );
          continue;
        case 4:
          if (presentationValue172 !== 34) break;
          presentationValue163.images.push(
            presentationKn.decode(
              presentationValue161,
              presentationValue161.uint32(),
            ),
          );
          continue;
        case 5:
          if (presentationValue172 !== 42) break;
          presentationValue163.contentReferences.push(
            presentationBn.decode(
              presentationValue161,
              presentationValue161.uint32(),
            ),
          );
          continue;
        case 11:
          if (presentationValue172 !== 90) break;
          presentationValue163.people.push(
            presentationEr.decode(
              presentationValue161,
              presentationValue161.uint32(),
            ),
          );
          continue;
        case 12:
          if (presentationValue172 !== 98) break;
          presentationValue163.threads.push(
            presentationLr.decode(
              presentationValue161,
              presentationValue161.uint32(),
            ),
          );
          continue;
        case 6:
          if (presentationValue172 !== 50) break;
          presentationValue163.textStyles.push(
            presentationSr.decode(
              presentationValue161,
              presentationValue161.uint32(),
            ),
          );
          continue;
        case 7:
          if (presentationValue172 !== 58) break;
          presentationValue163.tableStyles = presentationWt.decode(
            presentationValue161,
            presentationValue161.uint32(),
          );
          continue;
        case 8:
          if (presentationValue172 !== 66) break;
          presentationValue163.viewProperties = presentationDollar.decode(
            presentationValue161,
            presentationValue161.uint32(),
          );
          continue;
      }
      if ((presentationValue172 & 7) == 4 || presentationValue172 === 0) break;
      presentationValue161.skip(presentationValue172 & 7);
    }
    return presentationValue163;
  },
  create(presentationParam1258) {
    return _presentationX.fromPartial(presentationParam1258 ?? {});
  },
  fromPartial(presentationParam110) {
    let presentationValue224 = presentationHelper134();
    return (
      (presentationValue224.id = presentationParam110.id ?? void 0),
      (presentationValue224.slides =
        presentationParam110.slides?.map((presentationParam1437) =>
          presentationUt.fromPartial(presentationParam1437),
        ) || []),
      (presentationValue224.theme =
        presentationParam110.theme !== void 0 &&
        presentationParam110.theme !== null
          ? presentationKt.fromPartial(presentationParam110.theme)
          : void 0),
      (presentationValue224.layouts =
        presentationParam110.layouts?.map((presentationParam1405) =>
          _presentationB.fromPartial(presentationParam1405),
        ) || []),
      (presentationValue224.charts =
        presentationParam110.charts?.map((presentationParam1406) =>
          _presentationPn.fromPartial(presentationParam1406),
        ) || []),
      (presentationValue224.images =
        presentationParam110.images?.map((presentationParam1407) =>
          presentationKn.fromPartial(presentationParam1407),
        ) || []),
      (presentationValue224.contentReferences =
        presentationParam110.contentReferences?.map((presentationParam1408) =>
          presentationBn.fromPartial(presentationParam1408),
        ) || []),
      (presentationValue224.people =
        presentationParam110.people?.map((presentationParam1409) =>
          presentationEr.fromPartial(presentationParam1409),
        ) || []),
      (presentationValue224.threads =
        presentationParam110.threads?.map((presentationParam1410) =>
          presentationLr.fromPartial(presentationParam1410),
        ) || []),
      (presentationValue224.textStyles =
        presentationParam110.textStyles?.map((presentationParam1411) =>
          presentationSr.fromPartial(presentationParam1411),
        ) || []),
      (presentationValue224.tableStyles =
        presentationParam110.tableStyles !== void 0 &&
        presentationParam110.tableStyles !== null
          ? presentationWt.fromPartial(presentationParam110.tableStyles)
          : void 0),
      (presentationValue224.viewProperties =
        presentationParam110.viewProperties !== void 0 &&
        presentationParam110.viewProperties !== null
          ? presentationDollar.fromPartial(presentationParam110.viewProperties)
          : void 0),
      presentationValue224
    );
  },
};
function presentationHelper135() {
  return {
    colorScheme: void 0,
    backgroundFillStyleList: [],
    fillStyleList: [],
    lineStyleList: [],
    effectStyleList: [],
    fontScheme: void 0,
    name: void 0,
  };
}
var presentationKt = {
  encode(presentationParam239, presentationParam240 = new presentationPr()) {
    presentationParam239.colorScheme !== void 0 &&
      presentationP
        .encode(
          presentationParam239.colorScheme,
          presentationParam240.uint32(10).fork(),
        )
        .join();
    for (let presentationValue1196 of presentationParam239.backgroundFillStyleList)
      presentationHn
        .encode(presentationValue1196, presentationParam240.uint32(18).fork())
        .join();
    for (let presentationValue1238 of presentationParam239.fillStyleList)
      presentationHn
        .encode(presentationValue1238, presentationParam240.uint32(58).fork())
        .join();
    for (let presentationValue1239 of presentationParam239.lineStyleList)
      presentationJn
        .encode(presentationValue1239, presentationParam240.uint32(26).fork())
        .join();
    for (let presentationValue1223 of presentationParam239.effectStyleList)
      presentationE
        .encode(presentationValue1223, presentationParam240.uint32(34).fork())
        .join();
    return (
      presentationParam239.fontScheme !== void 0 &&
        presentationValue10
          .encode(
            presentationParam239.fontScheme,
            presentationParam240.uint32(42).fork(),
          )
          .join(),
      presentationParam239.name !== void 0 &&
        presentationParam240.uint32(50).string(presentationParam239.name),
      presentationParam240
    );
  },
  decode(presentationParam144, presentationParam145) {
    let presentationValue267 =
        presentationParam144 instanceof presentationFr
          ? presentationParam144
          : new presentationFr(presentationParam144),
      presentationValue268 =
        presentationParam145 === void 0
          ? presentationValue267.len
          : presentationValue267.pos + presentationParam145,
      presentationValue269 = presentationHelper135();
    for (; presentationValue267.pos < presentationValue268; ) {
      let presentationValue297 = presentationValue267.uint32();
      switch (presentationValue297 >>> 3) {
        case 1:
          if (presentationValue297 !== 10) break;
          presentationValue269.colorScheme = presentationP.decode(
            presentationValue267,
            presentationValue267.uint32(),
          );
          continue;
        case 2:
          if (presentationValue297 !== 18) break;
          presentationValue269.backgroundFillStyleList.push(
            presentationHn.decode(
              presentationValue267,
              presentationValue267.uint32(),
            ),
          );
          continue;
        case 7:
          if (presentationValue297 !== 58) break;
          presentationValue269.fillStyleList.push(
            presentationHn.decode(
              presentationValue267,
              presentationValue267.uint32(),
            ),
          );
          continue;
        case 3:
          if (presentationValue297 !== 26) break;
          presentationValue269.lineStyleList.push(
            presentationJn.decode(
              presentationValue267,
              presentationValue267.uint32(),
            ),
          );
          continue;
        case 4:
          if (presentationValue297 !== 34) break;
          presentationValue269.effectStyleList.push(
            presentationE.decode(
              presentationValue267,
              presentationValue267.uint32(),
            ),
          );
          continue;
        case 5:
          if (presentationValue297 !== 42) break;
          presentationValue269.fontScheme = presentationValue10.decode(
            presentationValue267,
            presentationValue267.uint32(),
          );
          continue;
        case 6:
          if (presentationValue297 !== 50) break;
          presentationValue269.name = presentationValue267.string();
          continue;
      }
      if ((presentationValue297 & 7) == 4 || presentationValue297 === 0) break;
      presentationValue267.skip(presentationValue297 & 7);
    }
    return presentationValue269;
  },
  create(presentationParam1348) {
    return presentationKt.fromPartial(presentationParam1348 ?? {});
  },
  fromPartial(presentationParam227) {
    let presentationValue359 = presentationHelper135();
    return (
      (presentationValue359.colorScheme =
        presentationParam227.colorScheme !== void 0 &&
        presentationParam227.colorScheme !== null
          ? presentationP.fromPartial(presentationParam227.colorScheme)
          : void 0),
      (presentationValue359.backgroundFillStyleList =
        presentationParam227.backgroundFillStyleList?.map(
          (presentationParam1438) =>
            presentationHn.fromPartial(presentationParam1438),
        ) || []),
      (presentationValue359.fillStyleList =
        presentationParam227.fillStyleList?.map((presentationParam1439) =>
          presentationHn.fromPartial(presentationParam1439),
        ) || []),
      (presentationValue359.lineStyleList =
        presentationParam227.lineStyleList?.map((presentationParam1440) =>
          presentationJn.fromPartial(presentationParam1440),
        ) || []),
      (presentationValue359.effectStyleList =
        presentationParam227.effectStyleList?.map((presentationParam1412) =>
          presentationE.fromPartial(presentationParam1412),
        ) || []),
      (presentationValue359.fontScheme =
        presentationParam227.fontScheme !== void 0 &&
        presentationParam227.fontScheme !== null
          ? presentationValue10.fromPartial(presentationParam227.fontScheme)
          : void 0),
      (presentationValue359.name = presentationParam227.name ?? void 0),
      presentationValue359
    );
  },
};
function presentationHelper136() {
  return {
    name: ``,
    colors: [],
  };
}
var presentationP = {
  encode(presentationParam979, presentationParam980 = new presentationPr()) {
    presentationParam979.name !== `` &&
      presentationParam980.uint32(10).string(presentationParam979.name);
    for (let presentationValue1290 of presentationParam979.colors)
      _presentationQt
        .encode(presentationValue1290, presentationParam980.uint32(18).fork())
        .join();
    return presentationParam980;
  },
  decode(presentationParam556, presentationParam557) {
    let presentationValue730 =
        presentationParam556 instanceof presentationFr
          ? presentationParam556
          : new presentationFr(presentationParam556),
      presentationValue731 =
        presentationParam557 === void 0
          ? presentationValue730.len
          : presentationValue730.pos + presentationParam557,
      presentationValue732 = presentationHelper136();
    for (; presentationValue730.pos < presentationValue731; ) {
      let presentationValue1005 = presentationValue730.uint32();
      switch (presentationValue1005 >>> 3) {
        case 1:
          if (presentationValue1005 !== 10) break;
          presentationValue732.name = presentationValue730.string();
          continue;
        case 2:
          if (presentationValue1005 !== 18) break;
          presentationValue732.colors.push(
            _presentationQt.decode(
              presentationValue730,
              presentationValue730.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue1005 & 7) == 4 || presentationValue1005 === 0)
        break;
      presentationValue730.skip(presentationValue1005 & 7);
    }
    return presentationValue732;
  },
  create(presentationParam1259) {
    return presentationP.fromPartial(presentationParam1259 ?? {});
  },
  fromPartial(presentationParam1030) {
    let presentationValue1150 = presentationHelper136();
    return (
      (presentationValue1150.name = presentationParam1030.name ?? ``),
      (presentationValue1150.colors =
        presentationParam1030.colors?.map((presentationParam1413) =>
          _presentationQt.fromPartial(presentationParam1413),
        ) || []),
      presentationValue1150
    );
  },
};
function presentationHelper137() {
  return {
    name: ``,
    color: void 0,
  };
}
var _presentationQt = {
  encode(presentationParam974, presentationParam975 = new presentationPr()) {
    return (
      presentationParam974.name !== `` &&
        presentationParam975.uint32(10).string(presentationParam974.name),
      presentationParam974.color !== void 0 &&
        presentationRn
          .encode(
            presentationParam974.color,
            presentationParam975.uint32(18).fork(),
          )
          .join(),
      presentationParam975
    );
  },
  decode(presentationParam598, presentationParam599) {
    let presentationValue786 =
        presentationParam598 instanceof presentationFr
          ? presentationParam598
          : new presentationFr(presentationParam598),
      presentationValue787 =
        presentationParam599 === void 0
          ? presentationValue786.len
          : presentationValue786.pos + presentationParam599,
      presentationValue788 = presentationHelper137();
    for (; presentationValue786.pos < presentationValue787; ) {
      let presentationValue1024 = presentationValue786.uint32();
      switch (presentationValue1024 >>> 3) {
        case 1:
          if (presentationValue1024 !== 10) break;
          presentationValue788.name = presentationValue786.string();
          continue;
        case 2:
          if (presentationValue1024 !== 18) break;
          presentationValue788.color = presentationRn.decode(
            presentationValue786,
            presentationValue786.uint32(),
          );
          continue;
      }
      if ((presentationValue1024 & 7) == 4 || presentationValue1024 === 0)
        break;
      presentationValue786.skip(presentationValue1024 & 7);
    }
    return presentationValue788;
  },
  create(presentationParam1260) {
    return _presentationQt.fromPartial(presentationParam1260 ?? {});
  },
  fromPartial(presentationParam990) {
    let presentationValue1112 = presentationHelper137();
    return (
      (presentationValue1112.name = presentationParam990.name ?? ``),
      (presentationValue1112.color =
        presentationParam990.color !== void 0 &&
        presentationParam990.color !== null
          ? presentationRn.fromPartial(presentationParam990.color)
          : void 0),
      presentationValue1112
    );
  },
};
function presentationHelper138() {
  return {
    defaultStyleId: void 0,
    outerXml: void 0,
  };
}
var presentationWt = {
  encode(presentationParam925, presentationParam926 = new presentationPr()) {
    return (
      presentationParam925.defaultStyleId !== void 0 &&
        presentationParam926
          .uint32(10)
          .string(presentationParam925.defaultStyleId),
      presentationParam925.outerXml !== void 0 &&
        presentationParam926.uint32(18).string(presentationParam925.outerXml),
      presentationParam926
    );
  },
  decode(presentationParam590, presentationParam591) {
    let presentationValue779 =
        presentationParam590 instanceof presentationFr
          ? presentationParam590
          : new presentationFr(presentationParam590),
      presentationValue780 =
        presentationParam591 === void 0
          ? presentationValue779.len
          : presentationValue779.pos + presentationParam591,
      presentationValue781 = presentationHelper138();
    for (; presentationValue779.pos < presentationValue780; ) {
      let presentationValue1021 = presentationValue779.uint32();
      switch (presentationValue1021 >>> 3) {
        case 1:
          if (presentationValue1021 !== 10) break;
          presentationValue781.defaultStyleId = presentationValue779.string();
          continue;
        case 2:
          if (presentationValue1021 !== 18) break;
          presentationValue781.outerXml = presentationValue779.string();
          continue;
      }
      if ((presentationValue1021 & 7) == 4 || presentationValue1021 === 0)
        break;
      presentationValue779.skip(presentationValue1021 & 7);
    }
    return presentationValue781;
  },
  create(presentationParam1261) {
    return presentationWt.fromPartial(presentationParam1261 ?? {});
  },
  fromPartial(presentationParam1016) {
    let presentationValue1137 = presentationHelper138();
    return (
      (presentationValue1137.defaultStyleId =
        presentationParam1016.defaultStyleId ?? void 0),
      (presentationValue1137.outerXml =
        presentationParam1016.outerXml ?? void 0),
      presentationValue1137
    );
  },
};
function presentationHelper139() {
  return {
    gridSpacingCxEmu: void 0,
    gridSpacingCyEmu: void 0,
    slideViewSnapToGrid: void 0,
    slideViewSnapToObjects: void 0,
    slideViewShowGuides: void 0,
  };
}
var presentationDollar = {
  encode(presentationParam380, presentationParam381 = new presentationPr()) {
    return (
      presentationParam380.gridSpacingCxEmu !== void 0 &&
        presentationParam381
          .uint32(8)
          .int64(presentationParam380.gridSpacingCxEmu),
      presentationParam380.gridSpacingCyEmu !== void 0 &&
        presentationParam381
          .uint32(16)
          .int64(presentationParam380.gridSpacingCyEmu),
      presentationParam380.slideViewSnapToGrid !== void 0 &&
        presentationParam381
          .uint32(24)
          .bool(presentationParam380.slideViewSnapToGrid),
      presentationParam380.slideViewSnapToObjects !== void 0 &&
        presentationParam381
          .uint32(32)
          .bool(presentationParam380.slideViewSnapToObjects),
      presentationParam380.slideViewShowGuides !== void 0 &&
        presentationParam381
          .uint32(40)
          .bool(presentationParam380.slideViewShowGuides),
      presentationParam381
    );
  },
  decode(presentationParam254, presentationParam255) {
    let presentationValue383 =
        presentationParam254 instanceof presentationFr
          ? presentationParam254
          : new presentationFr(presentationParam254),
      presentationValue384 =
        presentationParam255 === void 0
          ? presentationValue383.len
          : presentationValue383.pos + presentationParam255,
      presentationValue385 = presentationHelper139();
    for (; presentationValue383.pos < presentationValue384; ) {
      let presentationValue525 = presentationValue383.uint32();
      switch (presentationValue525 >>> 3) {
        case 1:
          if (presentationValue525 !== 8) break;
          presentationValue385.gridSpacingCxEmu = $(
            presentationValue383.int64(),
          );
          continue;
        case 2:
          if (presentationValue525 !== 16) break;
          presentationValue385.gridSpacingCyEmu = $(
            presentationValue383.int64(),
          );
          continue;
        case 3:
          if (presentationValue525 !== 24) break;
          presentationValue385.slideViewSnapToGrid =
            presentationValue383.bool();
          continue;
        case 4:
          if (presentationValue525 !== 32) break;
          presentationValue385.slideViewSnapToObjects =
            presentationValue383.bool();
          continue;
        case 5:
          if (presentationValue525 !== 40) break;
          presentationValue385.slideViewShowGuides =
            presentationValue383.bool();
          continue;
      }
      if ((presentationValue525 & 7) == 4 || presentationValue525 === 0) break;
      presentationValue383.skip(presentationValue525 & 7);
    }
    return presentationValue385;
  },
  create(presentationParam1262) {
    return presentationDollar.fromPartial(presentationParam1262 ?? {});
  },
  fromPartial(presentationParam564) {
    let presentationValue741 = presentationHelper139();
    return (
      (presentationValue741.gridSpacingCxEmu =
        presentationParam564.gridSpacingCxEmu ?? void 0),
      (presentationValue741.gridSpacingCyEmu =
        presentationParam564.gridSpacingCyEmu ?? void 0),
      (presentationValue741.slideViewSnapToGrid =
        presentationParam564.slideViewSnapToGrid ?? void 0),
      (presentationValue741.slideViewSnapToObjects =
        presentationParam564.slideViewSnapToObjects ?? void 0),
      (presentationValue741.slideViewShowGuides =
        presentationParam564.slideViewShowGuides ?? void 0),
      presentationValue741
    );
  },
};
function presentationHelper140() {
  return {
    id: void 0,
    name: void 0,
    orientation: 0,
    position: void 0,
    userDrawn: void 0,
    color: void 0,
  };
}
var presentationZ = {
  encode(presentationParam477, presentationParam478 = new presentationPr()) {
    return (
      presentationParam477.id !== void 0 &&
        presentationParam478.uint32(8).uint32(presentationParam477.id),
      presentationParam477.name !== void 0 &&
        presentationParam478.uint32(18).string(presentationParam477.name),
      presentationParam477.orientation !== 0 &&
        presentationParam478.uint32(24).int32(presentationParam477.orientation),
      presentationParam477.position !== void 0 &&
        presentationParam478.uint32(32).int32(presentationParam477.position),
      presentationParam477.userDrawn !== void 0 &&
        presentationParam478.uint32(40).bool(presentationParam477.userDrawn),
      presentationParam477.color !== void 0 &&
        presentationRn
          .encode(
            presentationParam477.color,
            presentationParam478.uint32(50).fork(),
          )
          .join(),
      presentationParam478
    );
  },
  decode(presentationParam249, presentationParam250) {
    let presentationValue379 =
        presentationParam249 instanceof presentationFr
          ? presentationParam249
          : new presentationFr(presentationParam249),
      presentationValue380 =
        presentationParam250 === void 0
          ? presentationValue379.len
          : presentationValue379.pos + presentationParam250,
      presentationValue381 = presentationHelper140();
    for (; presentationValue379.pos < presentationValue380; ) {
      let presentationValue520 = presentationValue379.uint32();
      switch (presentationValue520 >>> 3) {
        case 1:
          if (presentationValue520 !== 8) break;
          presentationValue381.id = presentationValue379.uint32();
          continue;
        case 2:
          if (presentationValue520 !== 18) break;
          presentationValue381.name = presentationValue379.string();
          continue;
        case 3:
          if (presentationValue520 !== 24) break;
          presentationValue381.orientation = presentationValue379.int32();
          continue;
        case 4:
          if (presentationValue520 !== 32) break;
          presentationValue381.position = presentationValue379.int32();
          continue;
        case 5:
          if (presentationValue520 !== 40) break;
          presentationValue381.userDrawn = presentationValue379.bool();
          continue;
        case 6:
          if (presentationValue520 !== 50) break;
          presentationValue381.color = presentationRn.decode(
            presentationValue379,
            presentationValue379.uint32(),
          );
          continue;
      }
      if ((presentationValue520 & 7) == 4 || presentationValue520 === 0) break;
      presentationValue379.skip(presentationValue520 & 7);
    }
    return presentationValue381;
  },
  create(presentationParam1263) {
    return presentationZ.fromPartial(presentationParam1263 ?? {});
  },
  fromPartial(presentationParam709) {
    let presentationValue904 = presentationHelper140();
    return (
      (presentationValue904.id = presentationParam709.id ?? void 0),
      (presentationValue904.name = presentationParam709.name ?? void 0),
      (presentationValue904.orientation =
        presentationParam709.orientation ?? 0),
      (presentationValue904.position = presentationParam709.position ?? void 0),
      (presentationValue904.userDrawn =
        presentationParam709.userDrawn ?? void 0),
      (presentationValue904.color =
        presentationParam709.color !== void 0 &&
        presentationParam709.color !== null
          ? presentationRn.fromPartial(presentationParam709.color)
          : void 0),
      presentationValue904
    );
  },
};
function presentationHelper141() {
  return {
    slideNumber: void 0,
    header: void 0,
    footer: void 0,
    dateTime: void 0,
  };
}
var presentationDt = {
  encode(presentationParam745, presentationParam746 = new presentationPr()) {
    return (
      presentationParam745.slideNumber !== void 0 &&
        presentationParam746.uint32(8).bool(presentationParam745.slideNumber),
      presentationParam745.header !== void 0 &&
        presentationParam746.uint32(16).bool(presentationParam745.header),
      presentationParam745.footer !== void 0 &&
        presentationParam746.uint32(24).bool(presentationParam745.footer),
      presentationParam745.dateTime !== void 0 &&
        presentationParam746.uint32(32).bool(presentationParam745.dateTime),
      presentationParam746
    );
  },
  decode(presentationParam406, presentationParam407) {
    let presentationValue553 =
        presentationParam406 instanceof presentationFr
          ? presentationParam406
          : new presentationFr(presentationParam406),
      presentationValue554 =
        presentationParam407 === void 0
          ? presentationValue553.len
          : presentationValue553.pos + presentationParam407,
      presentationValue555 = presentationHelper141();
    for (; presentationValue553.pos < presentationValue554; ) {
      let presentationValue823 = presentationValue553.uint32();
      switch (presentationValue823 >>> 3) {
        case 1:
          if (presentationValue823 !== 8) break;
          presentationValue555.slideNumber = presentationValue553.bool();
          continue;
        case 2:
          if (presentationValue823 !== 16) break;
          presentationValue555.header = presentationValue553.bool();
          continue;
        case 3:
          if (presentationValue823 !== 24) break;
          presentationValue555.footer = presentationValue553.bool();
          continue;
        case 4:
          if (presentationValue823 !== 32) break;
          presentationValue555.dateTime = presentationValue553.bool();
          continue;
      }
      if ((presentationValue823 & 7) == 4 || presentationValue823 === 0) break;
      presentationValue553.skip(presentationValue823 & 7);
    }
    return presentationValue555;
  },
  create(presentationParam1264) {
    return presentationDt.fromPartial(presentationParam1264 ?? {});
  },
  fromPartial(presentationParam912) {
    let presentationValue1072 = presentationHelper141();
    return (
      (presentationValue1072.slideNumber =
        presentationParam912.slideNumber ?? void 0),
      (presentationValue1072.header = presentationParam912.header ?? void 0),
      (presentationValue1072.footer = presentationParam912.footer ?? void 0),
      (presentationValue1072.dateTime =
        presentationParam912.dateTime ?? void 0),
      presentationValue1072
    );
  },
};
function presentationHelper142() {
  return {
    id: ``,
    innerXml: void 0,
    outerXml: void 0,
    name: ``,
    type: ``,
    background: void 0,
    elements: [],
    bodyLevelStyles: [],
    titleLevelStyles: [],
    otherLevelStyles: [],
    parentLayoutId: ``,
    colorMap: void 0,
    theme: void 0,
    showMasterShapes: void 0,
    showMasterPlaceholderAnimations: void 0,
    matchingName: void 0,
    preserve: void 0,
    userDrawn: void 0,
    furnitureVisibility: void 0,
    slideGuides: [],
  };
}
var _presentationB = {
  encode(presentationParam35, presentationParam36 = new presentationPr()) {
    (presentationParam35.id !== `` &&
      presentationParam36.uint32(10).string(presentationParam35.id),
      presentationParam35.innerXml !== void 0 &&
        presentationParam36.uint32(50).string(presentationParam35.innerXml),
      presentationParam35.outerXml !== void 0 &&
        presentationParam36.uint32(58).string(presentationParam35.outerXml),
      presentationParam35.name !== `` &&
        presentationParam36.uint32(66).string(presentationParam35.name),
      presentationParam35.type !== `` &&
        presentationParam36.uint32(74).string(presentationParam35.type),
      presentationParam35.background !== void 0 &&
        presentationValue11
          .encode(
            presentationParam35.background,
            presentationParam36.uint32(82).fork(),
          )
          .join());
    for (let presentationValue1276 of presentationParam35.elements)
      _presentationO
        .encode(presentationValue1276, presentationParam36.uint32(90).fork())
        .join();
    for (let presentationValue1228 of presentationParam35.bodyLevelStyles)
      presentationValue26
        .encode(presentationValue1228, presentationParam36.uint32(98).fork())
        .join();
    for (let presentationValue1219 of presentationParam35.titleLevelStyles)
      presentationValue26
        .encode(presentationValue1219, presentationParam36.uint32(106).fork())
        .join();
    for (let presentationValue1220 of presentationParam35.otherLevelStyles)
      presentationValue26
        .encode(presentationValue1220, presentationParam36.uint32(114).fork())
        .join();
    (presentationParam35.parentLayoutId !== `` &&
      presentationParam36
        .uint32(122)
        .string(presentationParam35.parentLayoutId),
      presentationParam35.colorMap !== void 0 &&
        _presentationF
          .encode(
            presentationParam35.colorMap,
            presentationParam36.uint32(130).fork(),
          )
          .join(),
      presentationParam35.theme !== void 0 &&
        presentationKt
          .encode(
            presentationParam35.theme,
            presentationParam36.uint32(138).fork(),
          )
          .join(),
      presentationParam35.showMasterShapes !== void 0 &&
        presentationParam36
          .uint32(144)
          .bool(presentationParam35.showMasterShapes),
      presentationParam35.showMasterPlaceholderAnimations !== void 0 &&
        presentationParam36
          .uint32(152)
          .bool(presentationParam35.showMasterPlaceholderAnimations),
      presentationParam35.matchingName !== void 0 &&
        presentationParam36
          .uint32(162)
          .string(presentationParam35.matchingName),
      presentationParam35.preserve !== void 0 &&
        presentationParam36.uint32(168).bool(presentationParam35.preserve),
      presentationParam35.userDrawn !== void 0 &&
        presentationParam36.uint32(176).bool(presentationParam35.userDrawn),
      presentationParam35.furnitureVisibility !== void 0 &&
        presentationDt
          .encode(
            presentationParam35.furnitureVisibility,
            presentationParam36.uint32(186).fork(),
          )
          .join());
    for (let presentationValue1240 of presentationParam35.slideGuides)
      presentationZ
        .encode(presentationValue1240, presentationParam36.uint32(194).fork())
        .join();
    return presentationParam36;
  },
  decode(presentationParam25, presentationParam26) {
    let presentationValue133 =
        presentationParam25 instanceof presentationFr
          ? presentationParam25
          : new presentationFr(presentationParam25),
      presentationValue134 =
        presentationParam26 === void 0
          ? presentationValue133.len
          : presentationValue133.pos + presentationParam26,
      presentationValue135 = presentationHelper142();
    for (; presentationValue133.pos < presentationValue134; ) {
      let presentationValue139 = presentationValue133.uint32();
      switch (presentationValue139 >>> 3) {
        case 1:
          if (presentationValue139 !== 10) break;
          presentationValue135.id = presentationValue133.string();
          continue;
        case 6:
          if (presentationValue139 !== 50) break;
          presentationValue135.innerXml = presentationValue133.string();
          continue;
        case 7:
          if (presentationValue139 !== 58) break;
          presentationValue135.outerXml = presentationValue133.string();
          continue;
        case 8:
          if (presentationValue139 !== 66) break;
          presentationValue135.name = presentationValue133.string();
          continue;
        case 9:
          if (presentationValue139 !== 74) break;
          presentationValue135.type = presentationValue133.string();
          continue;
        case 10:
          if (presentationValue139 !== 82) break;
          presentationValue135.background = presentationValue11.decode(
            presentationValue133,
            presentationValue133.uint32(),
          );
          continue;
        case 11:
          if (presentationValue139 !== 90) break;
          presentationValue135.elements.push(
            _presentationO.decode(
              presentationValue133,
              presentationValue133.uint32(),
            ),
          );
          continue;
        case 12:
          if (presentationValue139 !== 98) break;
          presentationValue135.bodyLevelStyles.push(
            presentationValue26.decode(
              presentationValue133,
              presentationValue133.uint32(),
            ),
          );
          continue;
        case 13:
          if (presentationValue139 !== 106) break;
          presentationValue135.titleLevelStyles.push(
            presentationValue26.decode(
              presentationValue133,
              presentationValue133.uint32(),
            ),
          );
          continue;
        case 14:
          if (presentationValue139 !== 114) break;
          presentationValue135.otherLevelStyles.push(
            presentationValue26.decode(
              presentationValue133,
              presentationValue133.uint32(),
            ),
          );
          continue;
        case 15:
          if (presentationValue139 !== 122) break;
          presentationValue135.parentLayoutId = presentationValue133.string();
          continue;
        case 16:
          if (presentationValue139 !== 130) break;
          presentationValue135.colorMap = _presentationF.decode(
            presentationValue133,
            presentationValue133.uint32(),
          );
          continue;
        case 17:
          if (presentationValue139 !== 138) break;
          presentationValue135.theme = presentationKt.decode(
            presentationValue133,
            presentationValue133.uint32(),
          );
          continue;
        case 18:
          if (presentationValue139 !== 144) break;
          presentationValue135.showMasterShapes = presentationValue133.bool();
          continue;
        case 19:
          if (presentationValue139 !== 152) break;
          presentationValue135.showMasterPlaceholderAnimations =
            presentationValue133.bool();
          continue;
        case 20:
          if (presentationValue139 !== 162) break;
          presentationValue135.matchingName = presentationValue133.string();
          continue;
        case 21:
          if (presentationValue139 !== 168) break;
          presentationValue135.preserve = presentationValue133.bool();
          continue;
        case 22:
          if (presentationValue139 !== 176) break;
          presentationValue135.userDrawn = presentationValue133.bool();
          continue;
        case 23:
          if (presentationValue139 !== 186) break;
          presentationValue135.furnitureVisibility = presentationDt.decode(
            presentationValue133,
            presentationValue133.uint32(),
          );
          continue;
        case 24:
          if (presentationValue139 !== 194) break;
          presentationValue135.slideGuides.push(
            presentationZ.decode(
              presentationValue133,
              presentationValue133.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue139 & 7) == 4 || presentationValue139 === 0) break;
      presentationValue133.skip(presentationValue139 & 7);
    }
    return presentationValue135;
  },
  create(presentationParam1265) {
    return _presentationB.fromPartial(presentationParam1265 ?? {});
  },
  fromPartial(presentationParam49) {
    let presentationValue153 = presentationHelper142();
    return (
      (presentationValue153.id = presentationParam49.id ?? ``),
      (presentationValue153.innerXml = presentationParam49.innerXml ?? void 0),
      (presentationValue153.outerXml = presentationParam49.outerXml ?? void 0),
      (presentationValue153.name = presentationParam49.name ?? ``),
      (presentationValue153.type = presentationParam49.type ?? ``),
      (presentationValue153.background =
        presentationParam49.background !== void 0 &&
        presentationParam49.background !== null
          ? presentationValue11.fromPartial(presentationParam49.background)
          : void 0),
      (presentationValue153.elements =
        presentationParam49.elements?.map((presentationParam1441) =>
          _presentationO.fromPartial(presentationParam1441),
        ) || []),
      (presentationValue153.bodyLevelStyles =
        presentationParam49.bodyLevelStyles?.map((presentationParam1442) =>
          presentationValue26.fromPartial(presentationParam1442),
        ) || []),
      (presentationValue153.titleLevelStyles =
        presentationParam49.titleLevelStyles?.map((presentationParam1443) =>
          presentationValue26.fromPartial(presentationParam1443),
        ) || []),
      (presentationValue153.otherLevelStyles =
        presentationParam49.otherLevelStyles?.map((presentationParam1444) =>
          presentationValue26.fromPartial(presentationParam1444),
        ) || []),
      (presentationValue153.parentLayoutId =
        presentationParam49.parentLayoutId ?? ``),
      (presentationValue153.colorMap =
        presentationParam49.colorMap !== void 0 &&
        presentationParam49.colorMap !== null
          ? _presentationF.fromPartial(presentationParam49.colorMap)
          : void 0),
      (presentationValue153.theme =
        presentationParam49.theme !== void 0 &&
        presentationParam49.theme !== null
          ? presentationKt.fromPartial(presentationParam49.theme)
          : void 0),
      (presentationValue153.showMasterShapes =
        presentationParam49.showMasterShapes ?? void 0),
      (presentationValue153.showMasterPlaceholderAnimations =
        presentationParam49.showMasterPlaceholderAnimations ?? void 0),
      (presentationValue153.matchingName =
        presentationParam49.matchingName ?? void 0),
      (presentationValue153.preserve = presentationParam49.preserve ?? void 0),
      (presentationValue153.userDrawn =
        presentationParam49.userDrawn ?? void 0),
      (presentationValue153.furnitureVisibility =
        presentationParam49.furnitureVisibility !== void 0 &&
        presentationParam49.furnitureVisibility !== null
          ? presentationDt.fromPartial(presentationParam49.furnitureVisibility)
          : void 0),
      (presentationValue153.slideGuides =
        presentationParam49.slideGuides?.map((presentationParam1414) =>
          presentationZ.fromPartial(presentationParam1414),
        ) || []),
      presentationValue153
    );
  },
};
function presentationHelper143() {
  return {
    index: 0,
    useLayoutId: ``,
    elements: [],
    widthEmu: 0,
    heightEmu: 0,
    innerXml: void 0,
    outerXml: void 0,
    background: void 0,
    id: ``,
    notesSlide: void 0,
    creationId: void 0,
    showMasterShapes: void 0,
  };
}
var presentationUt = {
  encode(presentationParam135, presentationParam136 = new presentationPr()) {
    (presentationParam135.index !== 0 &&
      presentationParam136.uint32(8).int32(presentationParam135.index),
      presentationParam135.useLayoutId !== `` &&
        presentationParam136
          .uint32(18)
          .string(presentationParam135.useLayoutId));
    for (let presentationValue1277 of presentationParam135.elements)
      _presentationO
        .encode(presentationValue1277, presentationParam136.uint32(26).fork())
        .join();
    return (
      presentationParam135.widthEmu !== 0 &&
        presentationParam136.uint32(40).int64(presentationParam135.widthEmu),
      presentationParam135.heightEmu !== 0 &&
        presentationParam136.uint32(48).int64(presentationParam135.heightEmu),
      presentationParam135.innerXml !== void 0 &&
        presentationParam136.uint32(58).string(presentationParam135.innerXml),
      presentationParam135.outerXml !== void 0 &&
        presentationParam136.uint32(66).string(presentationParam135.outerXml),
      presentationParam135.background !== void 0 &&
        presentationValue11
          .encode(
            presentationParam135.background,
            presentationParam136.uint32(82).fork(),
          )
          .join(),
      presentationParam135.id !== `` &&
        presentationParam136.uint32(90).string(presentationParam135.id),
      presentationParam135.notesSlide !== void 0 &&
        presentationUt
          .encode(
            presentationParam135.notesSlide,
            presentationParam136.uint32(98).fork(),
          )
          .join(),
      presentationParam135.creationId !== void 0 &&
        presentationParam136
          .uint32(106)
          .string(presentationParam135.creationId),
      presentationParam135.showMasterShapes !== void 0 &&
        presentationParam136
          .uint32(112)
          .bool(presentationParam135.showMasterShapes),
      presentationParam136
    );
  },
  decode(presentationParam72, presentationParam73) {
    let presentationValue183 =
        presentationParam72 instanceof presentationFr
          ? presentationParam72
          : new presentationFr(presentationParam72),
      presentationValue184 =
        presentationParam73 === void 0
          ? presentationValue183.len
          : presentationValue183.pos + presentationParam73,
      presentationValue185 = presentationHelper143();
    for (; presentationValue183.pos < presentationValue184; ) {
      let presentationValue219 = presentationValue183.uint32();
      switch (presentationValue219 >>> 3) {
        case 1:
          if (presentationValue219 !== 8) break;
          presentationValue185.index = presentationValue183.int32();
          continue;
        case 2:
          if (presentationValue219 !== 18) break;
          presentationValue185.useLayoutId = presentationValue183.string();
          continue;
        case 3:
          if (presentationValue219 !== 26) break;
          presentationValue185.elements.push(
            _presentationO.decode(
              presentationValue183,
              presentationValue183.uint32(),
            ),
          );
          continue;
        case 5:
          if (presentationValue219 !== 40) break;
          presentationValue185.widthEmu = $(presentationValue183.int64());
          continue;
        case 6:
          if (presentationValue219 !== 48) break;
          presentationValue185.heightEmu = $(presentationValue183.int64());
          continue;
        case 7:
          if (presentationValue219 !== 58) break;
          presentationValue185.innerXml = presentationValue183.string();
          continue;
        case 8:
          if (presentationValue219 !== 66) break;
          presentationValue185.outerXml = presentationValue183.string();
          continue;
        case 10:
          if (presentationValue219 !== 82) break;
          presentationValue185.background = presentationValue11.decode(
            presentationValue183,
            presentationValue183.uint32(),
          );
          continue;
        case 11:
          if (presentationValue219 !== 90) break;
          presentationValue185.id = presentationValue183.string();
          continue;
        case 12:
          if (presentationValue219 !== 98) break;
          presentationValue185.notesSlide = presentationUt.decode(
            presentationValue183,
            presentationValue183.uint32(),
          );
          continue;
        case 13:
          if (presentationValue219 !== 106) break;
          presentationValue185.creationId = presentationValue183.string();
          continue;
        case 14:
          if (presentationValue219 !== 112) break;
          presentationValue185.showMasterShapes = presentationValue183.bool();
          continue;
      }
      if ((presentationValue219 & 7) == 4 || presentationValue219 === 0) break;
      presentationValue183.skip(presentationValue219 & 7);
    }
    return presentationValue185;
  },
  create(presentationParam1349) {
    return presentationUt.fromPartial(presentationParam1349 ?? {});
  },
  fromPartial(presentationParam216) {
    let presentationValue343 = presentationHelper143();
    return (
      (presentationValue343.index = presentationParam216.index ?? 0),
      (presentationValue343.useLayoutId =
        presentationParam216.useLayoutId ?? ``),
      (presentationValue343.elements =
        presentationParam216.elements?.map((presentationParam1445) =>
          _presentationO.fromPartial(presentationParam1445),
        ) || []),
      (presentationValue343.widthEmu = presentationParam216.widthEmu ?? 0),
      (presentationValue343.heightEmu = presentationParam216.heightEmu ?? 0),
      (presentationValue343.innerXml = presentationParam216.innerXml ?? void 0),
      (presentationValue343.outerXml = presentationParam216.outerXml ?? void 0),
      (presentationValue343.background =
        presentationParam216.background !== void 0 &&
        presentationParam216.background !== null
          ? presentationValue11.fromPartial(presentationParam216.background)
          : void 0),
      (presentationValue343.id = presentationParam216.id ?? ``),
      (presentationValue343.notesSlide =
        presentationParam216.notesSlide !== void 0 &&
        presentationParam216.notesSlide !== null
          ? presentationUt.fromPartial(presentationParam216.notesSlide)
          : void 0),
      (presentationValue343.creationId =
        presentationParam216.creationId ?? void 0),
      (presentationValue343.showMasterShapes =
        presentationParam216.showMasterShapes ?? void 0),
      presentationValue343
    );
  },
};
function presentationHelper144() {
  return {
    bbox: void 0,
    zIndex: void 0,
    innerXml: void 0,
    outerXml: void 0,
    shape: void 0,
    image: void 0,
    chartReference: void 0,
    video: void 0,
    table: void 0,
    imageReference: void 0,
    codeBlock: void 0,
    embeddedArtifact: void 0,
    smartArt: void 0,
    paragraphs: [],
    name: void 0,
    type: 0,
    placeholderIndex: void 0,
    placeholderType: void 0,
    textStyle: void 0,
    effects: [],
    children: [],
    groupChildBbox: void 0,
    levelsStyles: [],
    fill: void 0,
    line: void 0,
    scene3d: void 0,
    shape3d: void 0,
    imageMask: void 0,
    lineReference: void 0,
    fillReference: void 0,
    effectReference: void 0,
    fontReference: void 0,
    hyperlink: void 0,
    id: ``,
    creationId: void 0,
    placement: void 0,
    connector: void 0,
    citations: [],
    hidden: void 0,
    placeholderHasCustomPrompt: void 0,
    pictureHasPresetGeometry: void 0,
  };
}
var _presentationO = {
  encode(presentationParam10, presentationParam11 = new presentationPr()) {
    (presentationParam10.bbox !== void 0 &&
      presentationValue6
        .encode(presentationParam10.bbox, presentationParam11.uint32(10).fork())
        .join(),
      presentationParam10.zIndex !== void 0 &&
        presentationParam11.uint32(16).int32(presentationParam10.zIndex),
      presentationParam10.innerXml !== void 0 &&
        presentationParam11.uint32(58).string(presentationParam10.innerXml),
      presentationParam10.outerXml !== void 0 &&
        presentationParam11.uint32(66).string(presentationParam10.outerXml),
      presentationParam10.shape !== void 0 &&
        _presentationLt
          .encode(
            presentationParam10.shape,
            presentationParam11.uint32(34).fork(),
          )
          .join(),
      presentationParam10.image !== void 0 &&
        presentationL
          .encode(
            presentationParam10.image,
            presentationParam11.uint32(42).fork(),
          )
          .join(),
      presentationParam10.chartReference !== void 0 &&
        presentationI
          .encode(
            presentationParam10.chartReference,
            presentationParam11.uint32(146).fork(),
          )
          .join(),
      presentationParam10.video !== void 0 &&
        _presentationJt
          .encode(
            presentationParam10.video,
            presentationParam11.uint32(162).fork(),
          )
          .join(),
      presentationParam10.table !== void 0 &&
        _presentationZt
          .encode(
            presentationParam10.table,
            presentationParam11.uint32(170).fork(),
          )
          .join(),
      presentationParam10.imageReference !== void 0 &&
        _presentationQn
          .encode(
            presentationParam10.imageReference,
            presentationParam11.uint32(26).fork(),
          )
          .join(),
      presentationParam10.codeBlock !== void 0 &&
        _presentationA
          .encode(
            presentationParam10.codeBlock,
            presentationParam11.uint32(74).fork(),
          )
          .join(),
      presentationParam10.embeddedArtifact !== void 0 &&
        _presentationP
          .encode(
            presentationParam10.embeddedArtifact,
            presentationParam11.uint32(290).fork(),
          )
          .join(),
      presentationParam10.smartArt !== void 0 &&
        presentationMt
          .encode(
            presentationParam10.smartArt,
            presentationParam11.uint32(306).fork(),
          )
          .join());
    for (let presentationValue1260 of presentationParam10.paragraphs)
      _presentationH
        .encode(presentationValue1260, presentationParam11.uint32(50).fork())
        .join();
    (presentationParam10.name !== void 0 &&
      presentationParam11.uint32(82).string(presentationParam10.name),
      presentationParam10.type !== 0 &&
        presentationParam11.uint32(88).int32(presentationParam10.type),
      presentationParam10.placeholderIndex !== void 0 &&
        presentationParam11
          .uint32(96)
          .int32(presentationParam10.placeholderIndex),
      presentationParam10.placeholderType !== void 0 &&
        presentationParam11
          .uint32(106)
          .string(presentationParam10.placeholderType),
      presentationParam10.textStyle !== void 0 &&
        presentationOr
          .encode(
            presentationParam10.textStyle,
            presentationParam11.uint32(114).fork(),
          )
          .join());
    for (let presentationValue1278 of presentationParam10.effects)
      __presentationT
        .encode(presentationValue1278, presentationParam11.uint32(122).fork())
        .join();
    for (let presentationValue1266 of presentationParam10.children)
      _presentationO
        .encode(presentationValue1266, presentationParam11.uint32(138).fork())
        .join();
    presentationParam10.groupChildBbox !== void 0 &&
      presentationValue6
        .encode(
          presentationParam10.groupChildBbox,
          presentationParam11.uint32(330).fork(),
        )
        .join();
    for (let presentationValue1241 of presentationParam10.levelsStyles)
      presentationValue26
        .encode(presentationValue1241, presentationParam11.uint32(130).fork())
        .join();
    (presentationParam10.fill !== void 0 &&
      presentationHn
        .encode(
          presentationParam10.fill,
          presentationParam11.uint32(154).fork(),
        )
        .join(),
      presentationParam10.line !== void 0 &&
        presentationJn
          .encode(
            presentationParam10.line,
            presentationParam11.uint32(242).fork(),
          )
          .join(),
      presentationParam10.scene3d !== void 0 &&
        presentationRt
          .encode(
            presentationParam10.scene3d,
            presentationParam11.uint32(250).fork(),
          )
          .join(),
      presentationParam10.shape3d !== void 0 &&
        presentationSt
          .encode(
            presentationParam10.shape3d,
            presentationParam11.uint32(258).fork(),
          )
          .join(),
      presentationParam10.imageMask !== void 0 &&
        _presentationR
          .encode(
            presentationParam10.imageMask,
            presentationParam11.uint32(266).fork(),
          )
          .join(),
      presentationParam10.lineReference !== void 0 &&
        presentationJt
          .encode(
            presentationParam10.lineReference,
            presentationParam11.uint32(178).fork(),
          )
          .join(),
      presentationParam10.fillReference !== void 0 &&
        presentationJt
          .encode(
            presentationParam10.fillReference,
            presentationParam11.uint32(186).fork(),
          )
          .join(),
      presentationParam10.effectReference !== void 0 &&
        presentationJt
          .encode(
            presentationParam10.effectReference,
            presentationParam11.uint32(194).fork(),
          )
          .join(),
      presentationParam10.fontReference !== void 0 &&
        presentationJt
          .encode(
            presentationParam10.fontReference,
            presentationParam11.uint32(202).fork(),
          )
          .join(),
      presentationParam10.hyperlink !== void 0 &&
        _presentationI
          .encode(
            presentationParam10.hyperlink,
            presentationParam11.uint32(210).fork(),
          )
          .join(),
      presentationParam10.id !== `` &&
        presentationParam11.uint32(218).string(presentationParam10.id),
      presentationParam10.creationId !== void 0 &&
        presentationParam11.uint32(274).string(presentationParam10.creationId),
      presentationParam10.placement !== void 0 &&
        presentationK
          .encode(
            presentationParam10.placement,
            presentationParam11.uint32(282).fork(),
          )
          .join(),
      presentationParam10.connector !== void 0 &&
        presentationG
          .encode(
            presentationParam10.connector,
            presentationParam11.uint32(226).fork(),
          )
          .join());
    for (let presentationValue1323 of presentationParam10.citations)
      presentationParam11.uint32(234).string(presentationValue1323);
    return (
      presentationParam10.hidden !== void 0 &&
        presentationParam11.uint32(296).bool(presentationParam10.hidden),
      presentationParam10.placeholderHasCustomPrompt !== void 0 &&
        presentationParam11
          .uint32(312)
          .bool(presentationParam10.placeholderHasCustomPrompt),
      presentationParam10.pictureHasPresetGeometry !== void 0 &&
        presentationParam11
          .uint32(320)
          .bool(presentationParam10.pictureHasPresetGeometry),
      presentationParam11
    );
  },
  decode(presentationParam7, presentationParam8) {
    let presentationValue111 =
        presentationParam7 instanceof presentationFr
          ? presentationParam7
          : new presentationFr(presentationParam7),
      presentationValue112 =
        presentationParam8 === void 0
          ? presentationValue111.len
          : presentationValue111.pos + presentationParam8,
      presentationValue113 = presentationHelper144();
    for (; presentationValue111.pos < presentationValue112; ) {
      let presentationValue115 = presentationValue111.uint32();
      switch (presentationValue115 >>> 3) {
        case 1:
          if (presentationValue115 !== 10) break;
          presentationValue113.bbox = presentationValue6.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 2:
          if (presentationValue115 !== 16) break;
          presentationValue113.zIndex = presentationValue111.int32();
          continue;
        case 7:
          if (presentationValue115 !== 58) break;
          presentationValue113.innerXml = presentationValue111.string();
          continue;
        case 8:
          if (presentationValue115 !== 66) break;
          presentationValue113.outerXml = presentationValue111.string();
          continue;
        case 4:
          if (presentationValue115 !== 34) break;
          presentationValue113.shape = _presentationLt.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 5:
          if (presentationValue115 !== 42) break;
          presentationValue113.image = presentationL.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 18:
          if (presentationValue115 !== 146) break;
          presentationValue113.chartReference = presentationI.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 20:
          if (presentationValue115 !== 162) break;
          presentationValue113.video = _presentationJt.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 21:
          if (presentationValue115 !== 170) break;
          presentationValue113.table = _presentationZt.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 3:
          if (presentationValue115 !== 26) break;
          presentationValue113.imageReference = _presentationQn.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 9:
          if (presentationValue115 !== 74) break;
          presentationValue113.codeBlock = _presentationA.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 36:
          if (presentationValue115 !== 290) break;
          presentationValue113.embeddedArtifact = _presentationP.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 38:
          if (presentationValue115 !== 306) break;
          presentationValue113.smartArt = presentationMt.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 6:
          if (presentationValue115 !== 50) break;
          presentationValue113.paragraphs.push(
            _presentationH.decode(
              presentationValue111,
              presentationValue111.uint32(),
            ),
          );
          continue;
        case 10:
          if (presentationValue115 !== 82) break;
          presentationValue113.name = presentationValue111.string();
          continue;
        case 11:
          if (presentationValue115 !== 88) break;
          presentationValue113.type = presentationValue111.int32();
          continue;
        case 12:
          if (presentationValue115 !== 96) break;
          presentationValue113.placeholderIndex = presentationValue111.int32();
          continue;
        case 13:
          if (presentationValue115 !== 106) break;
          presentationValue113.placeholderType = presentationValue111.string();
          continue;
        case 14:
          if (presentationValue115 !== 114) break;
          presentationValue113.textStyle = presentationOr.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 15:
          if (presentationValue115 !== 122) break;
          presentationValue113.effects.push(
            __presentationT.decode(
              presentationValue111,
              presentationValue111.uint32(),
            ),
          );
          continue;
        case 17:
          if (presentationValue115 !== 138) break;
          presentationValue113.children.push(
            _presentationO.decode(
              presentationValue111,
              presentationValue111.uint32(),
            ),
          );
          continue;
        case 41:
          if (presentationValue115 !== 330) break;
          presentationValue113.groupChildBbox = presentationValue6.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 16:
          if (presentationValue115 !== 130) break;
          presentationValue113.levelsStyles.push(
            presentationValue26.decode(
              presentationValue111,
              presentationValue111.uint32(),
            ),
          );
          continue;
        case 19:
          if (presentationValue115 !== 154) break;
          presentationValue113.fill = presentationHn.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 30:
          if (presentationValue115 !== 242) break;
          presentationValue113.line = presentationJn.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 31:
          if (presentationValue115 !== 250) break;
          presentationValue113.scene3d = presentationRt.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 32:
          if (presentationValue115 !== 258) break;
          presentationValue113.shape3d = presentationSt.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 33:
          if (presentationValue115 !== 266) break;
          presentationValue113.imageMask = _presentationR.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 22:
          if (presentationValue115 !== 178) break;
          presentationValue113.lineReference = presentationJt.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 23:
          if (presentationValue115 !== 186) break;
          presentationValue113.fillReference = presentationJt.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 24:
          if (presentationValue115 !== 194) break;
          presentationValue113.effectReference = presentationJt.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 25:
          if (presentationValue115 !== 202) break;
          presentationValue113.fontReference = presentationJt.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 26:
          if (presentationValue115 !== 210) break;
          presentationValue113.hyperlink = _presentationI.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 27:
          if (presentationValue115 !== 218) break;
          presentationValue113.id = presentationValue111.string();
          continue;
        case 34:
          if (presentationValue115 !== 274) break;
          presentationValue113.creationId = presentationValue111.string();
          continue;
        case 35:
          if (presentationValue115 !== 282) break;
          presentationValue113.placement = presentationK.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 28:
          if (presentationValue115 !== 226) break;
          presentationValue113.connector = presentationG.decode(
            presentationValue111,
            presentationValue111.uint32(),
          );
          continue;
        case 29:
          if (presentationValue115 !== 234) break;
          presentationValue113.citations.push(presentationValue111.string());
          continue;
        case 37:
          if (presentationValue115 !== 296) break;
          presentationValue113.hidden = presentationValue111.bool();
          continue;
        case 39:
          if (presentationValue115 !== 312) break;
          presentationValue113.placeholderHasCustomPrompt =
            presentationValue111.bool();
          continue;
        case 40:
          if (presentationValue115 !== 320) break;
          presentationValue113.pictureHasPresetGeometry =
            presentationValue111.bool();
          continue;
      }
      if ((presentationValue115 & 7) == 4 || presentationValue115 === 0) break;
      presentationValue111.skip(presentationValue115 & 7);
    }
    return presentationValue113;
  },
  create(presentationParam1350) {
    return _presentationO.fromPartial(presentationParam1350 ?? {});
  },
  fromPartial(presentationParam9) {
    let presentationValue114 = presentationHelper144();
    return (
      (presentationValue114.bbox =
        presentationParam9.bbox !== void 0 && presentationParam9.bbox !== null
          ? presentationValue6.fromPartial(presentationParam9.bbox)
          : void 0),
      (presentationValue114.zIndex = presentationParam9.zIndex ?? void 0),
      (presentationValue114.innerXml = presentationParam9.innerXml ?? void 0),
      (presentationValue114.outerXml = presentationParam9.outerXml ?? void 0),
      (presentationValue114.shape =
        presentationParam9.shape !== void 0 && presentationParam9.shape !== null
          ? _presentationLt.fromPartial(presentationParam9.shape)
          : void 0),
      (presentationValue114.image =
        presentationParam9.image !== void 0 && presentationParam9.image !== null
          ? presentationL.fromPartial(presentationParam9.image)
          : void 0),
      (presentationValue114.chartReference =
        presentationParam9.chartReference !== void 0 &&
        presentationParam9.chartReference !== null
          ? presentationI.fromPartial(presentationParam9.chartReference)
          : void 0),
      (presentationValue114.video =
        presentationParam9.video !== void 0 && presentationParam9.video !== null
          ? _presentationJt.fromPartial(presentationParam9.video)
          : void 0),
      (presentationValue114.table =
        presentationParam9.table !== void 0 && presentationParam9.table !== null
          ? _presentationZt.fromPartial(presentationParam9.table)
          : void 0),
      (presentationValue114.imageReference =
        presentationParam9.imageReference !== void 0 &&
        presentationParam9.imageReference !== null
          ? _presentationQn.fromPartial(presentationParam9.imageReference)
          : void 0),
      (presentationValue114.codeBlock =
        presentationParam9.codeBlock !== void 0 &&
        presentationParam9.codeBlock !== null
          ? _presentationA.fromPartial(presentationParam9.codeBlock)
          : void 0),
      (presentationValue114.embeddedArtifact =
        presentationParam9.embeddedArtifact !== void 0 &&
        presentationParam9.embeddedArtifact !== null
          ? _presentationP.fromPartial(presentationParam9.embeddedArtifact)
          : void 0),
      (presentationValue114.smartArt =
        presentationParam9.smartArt !== void 0 &&
        presentationParam9.smartArt !== null
          ? presentationMt.fromPartial(presentationParam9.smartArt)
          : void 0),
      (presentationValue114.paragraphs =
        presentationParam9.paragraphs?.map((presentationParam1446) =>
          _presentationH.fromPartial(presentationParam1446),
        ) || []),
      (presentationValue114.name = presentationParam9.name ?? void 0),
      (presentationValue114.type = presentationParam9.type ?? 0),
      (presentationValue114.placeholderIndex =
        presentationParam9.placeholderIndex ?? void 0),
      (presentationValue114.placeholderType =
        presentationParam9.placeholderType ?? void 0),
      (presentationValue114.textStyle =
        presentationParam9.textStyle !== void 0 &&
        presentationParam9.textStyle !== null
          ? presentationOr.fromPartial(presentationParam9.textStyle)
          : void 0),
      (presentationValue114.effects =
        presentationParam9.effects?.map((presentationParam1447) =>
          __presentationT.fromPartial(presentationParam1447),
        ) || []),
      (presentationValue114.children =
        presentationParam9.children?.map((presentationParam1448) =>
          _presentationO.fromPartial(presentationParam1448),
        ) || []),
      (presentationValue114.groupChildBbox =
        presentationParam9.groupChildBbox !== void 0 &&
        presentationParam9.groupChildBbox !== null
          ? presentationValue6.fromPartial(presentationParam9.groupChildBbox)
          : void 0),
      (presentationValue114.levelsStyles =
        presentationParam9.levelsStyles?.map((presentationParam1449) =>
          presentationValue26.fromPartial(presentationParam1449),
        ) || []),
      (presentationValue114.fill =
        presentationParam9.fill !== void 0 && presentationParam9.fill !== null
          ? presentationHn.fromPartial(presentationParam9.fill)
          : void 0),
      (presentationValue114.line =
        presentationParam9.line !== void 0 && presentationParam9.line !== null
          ? presentationJn.fromPartial(presentationParam9.line)
          : void 0),
      (presentationValue114.scene3d =
        presentationParam9.scene3d !== void 0 &&
        presentationParam9.scene3d !== null
          ? presentationRt.fromPartial(presentationParam9.scene3d)
          : void 0),
      (presentationValue114.shape3d =
        presentationParam9.shape3d !== void 0 &&
        presentationParam9.shape3d !== null
          ? presentationSt.fromPartial(presentationParam9.shape3d)
          : void 0),
      (presentationValue114.imageMask =
        presentationParam9.imageMask !== void 0 &&
        presentationParam9.imageMask !== null
          ? _presentationR.fromPartial(presentationParam9.imageMask)
          : void 0),
      (presentationValue114.lineReference =
        presentationParam9.lineReference !== void 0 &&
        presentationParam9.lineReference !== null
          ? presentationJt.fromPartial(presentationParam9.lineReference)
          : void 0),
      (presentationValue114.fillReference =
        presentationParam9.fillReference !== void 0 &&
        presentationParam9.fillReference !== null
          ? presentationJt.fromPartial(presentationParam9.fillReference)
          : void 0),
      (presentationValue114.effectReference =
        presentationParam9.effectReference !== void 0 &&
        presentationParam9.effectReference !== null
          ? presentationJt.fromPartial(presentationParam9.effectReference)
          : void 0),
      (presentationValue114.fontReference =
        presentationParam9.fontReference !== void 0 &&
        presentationParam9.fontReference !== null
          ? presentationJt.fromPartial(presentationParam9.fontReference)
          : void 0),
      (presentationValue114.hyperlink =
        presentationParam9.hyperlink !== void 0 &&
        presentationParam9.hyperlink !== null
          ? _presentationI.fromPartial(presentationParam9.hyperlink)
          : void 0),
      (presentationValue114.id = presentationParam9.id ?? ``),
      (presentationValue114.creationId =
        presentationParam9.creationId ?? void 0),
      (presentationValue114.placement =
        presentationParam9.placement !== void 0 &&
        presentationParam9.placement !== null
          ? presentationK.fromPartial(presentationParam9.placement)
          : void 0),
      (presentationValue114.connector =
        presentationParam9.connector !== void 0 &&
        presentationParam9.connector !== null
          ? presentationG.fromPartial(presentationParam9.connector)
          : void 0),
      (presentationValue114.citations =
        presentationParam9.citations?.map(
          (presentationParam1477) => presentationParam1477,
        ) || []),
      (presentationValue114.hidden = presentationParam9.hidden ?? void 0),
      (presentationValue114.placeholderHasCustomPrompt =
        presentationParam9.placeholderHasCustomPrompt ?? void 0),
      (presentationValue114.pictureHasPresetGeometry =
        presentationParam9.pictureHasPresetGeometry ?? void 0),
      presentationValue114
    );
  },
};
function $a() {
  return {
    index: ``,
    color: void 0,
  };
}
var presentationJt = {
  encode(presentationParam967, presentationParam968 = new presentationPr()) {
    return (
      presentationParam967.index !== `` &&
        presentationParam968.uint32(10).string(presentationParam967.index),
      presentationParam967.color !== void 0 &&
        presentationRn
          .encode(
            presentationParam967.color,
            presentationParam968.uint32(18).fork(),
          )
          .join(),
      presentationParam968
    );
  },
  decode(presentationParam592, presentationParam593) {
    let presentationValue782 =
        presentationParam592 instanceof presentationFr
          ? presentationParam592
          : new presentationFr(presentationParam592),
      presentationValue783 =
        presentationParam593 === void 0
          ? presentationValue782.len
          : presentationValue782.pos + presentationParam593,
      presentationValue784 = $a();
    for (; presentationValue782.pos < presentationValue783; ) {
      let presentationValue1022 = presentationValue782.uint32();
      switch (presentationValue1022 >>> 3) {
        case 1:
          if (presentationValue1022 !== 10) break;
          presentationValue784.index = presentationValue782.string();
          continue;
        case 2:
          if (presentationValue1022 !== 18) break;
          presentationValue784.color = presentationRn.decode(
            presentationValue782,
            presentationValue782.uint32(),
          );
          continue;
      }
      if ((presentationValue1022 & 7) == 4 || presentationValue1022 === 0)
        break;
      presentationValue782.skip(presentationValue1022 & 7);
    }
    return presentationValue784;
  },
  create(presentationParam1351) {
    return presentationJt.fromPartial(presentationParam1351 ?? {});
  },
  fromPartial(presentationParam986) {
    let presentationValue1108 = $a();
    return (
      (presentationValue1108.index = presentationParam986.index ?? ``),
      (presentationValue1108.color =
        presentationParam986.color !== void 0 &&
        presentationParam986.color !== null
          ? presentationRn.fromPartial(presentationParam986.color)
          : void 0),
      presentationValue1108
    );
  },
};
function presentationHelper145() {
  return {
    camera: void 0,
    lightRig: void 0,
  };
}
var presentationRt = {
  encode(presentationParam889, presentationParam890 = new presentationPr()) {
    return (
      presentationParam889.camera !== void 0 &&
        presentationR
          .encode(
            presentationParam889.camera,
            presentationParam890.uint32(10).fork(),
          )
          .join(),
      presentationParam889.lightRig !== void 0 &&
        _presentationV
          .encode(
            presentationParam889.lightRig,
            presentationParam890.uint32(18).fork(),
          )
          .join(),
      presentationParam890
    );
  },
  decode(presentationParam531, presentationParam532) {
    let presentationValue700 =
        presentationParam531 instanceof presentationFr
          ? presentationParam531
          : new presentationFr(presentationParam531),
      presentationValue701 =
        presentationParam532 === void 0
          ? presentationValue700.len
          : presentationValue700.pos + presentationParam532,
      presentationValue702 = presentationHelper145();
    for (; presentationValue700.pos < presentationValue701; ) {
      let presentationValue991 = presentationValue700.uint32();
      switch (presentationValue991 >>> 3) {
        case 1:
          if (presentationValue991 !== 10) break;
          presentationValue702.camera = presentationR.decode(
            presentationValue700,
            presentationValue700.uint32(),
          );
          continue;
        case 2:
          if (presentationValue991 !== 18) break;
          presentationValue702.lightRig = _presentationV.decode(
            presentationValue700,
            presentationValue700.uint32(),
          );
          continue;
      }
      if ((presentationValue991 & 7) == 4 || presentationValue991 === 0) break;
      presentationValue700.skip(presentationValue991 & 7);
    }
    return presentationValue702;
  },
  create(presentationParam1266) {
    return presentationRt.fromPartial(presentationParam1266 ?? {});
  },
  fromPartial(presentationParam826) {
    let presentationValue997 = presentationHelper145();
    return (
      (presentationValue997.camera =
        presentationParam826.camera !== void 0 &&
        presentationParam826.camera !== null
          ? presentationR.fromPartial(presentationParam826.camera)
          : void 0),
      (presentationValue997.lightRig =
        presentationParam826.lightRig !== void 0 &&
        presentationParam826.lightRig !== null
          ? _presentationV.fromPartial(presentationParam826.lightRig)
          : void 0),
      presentationValue997
    );
  },
};
function no() {
  return {
    zEmu: void 0,
    extrusionHeightEmu: void 0,
    contourWidthEmu: void 0,
    presetMaterial: void 0,
    bevelTop: void 0,
    bevelBottom: void 0,
    extrusionColor: void 0,
    contourColor: void 0,
  };
}
var presentationSt = {
  encode(presentationParam174, presentationParam175 = new presentationPr()) {
    return (
      presentationParam174.zEmu !== void 0 &&
        presentationParam175.uint32(8).int64(presentationParam174.zEmu),
      presentationParam174.extrusionHeightEmu !== void 0 &&
        presentationParam175
          .uint32(16)
          .int64(presentationParam174.extrusionHeightEmu),
      presentationParam174.contourWidthEmu !== void 0 &&
        presentationParam175
          .uint32(24)
          .int64(presentationParam174.contourWidthEmu),
      presentationParam174.presetMaterial !== void 0 &&
        presentationParam175
          .uint32(34)
          .string(presentationParam174.presetMaterial),
      presentationParam174.bevelTop !== void 0 &&
        presentationCt
          .encode(
            presentationParam174.bevelTop,
            presentationParam175.uint32(42).fork(),
          )
          .join(),
      presentationParam174.bevelBottom !== void 0 &&
        presentationCt
          .encode(
            presentationParam174.bevelBottom,
            presentationParam175.uint32(50).fork(),
          )
          .join(),
      presentationParam174.extrusionColor !== void 0 &&
        presentationRn
          .encode(
            presentationParam174.extrusionColor,
            presentationParam175.uint32(58).fork(),
          )
          .join(),
      presentationParam174.contourColor !== void 0 &&
        presentationRn
          .encode(
            presentationParam174.contourColor,
            presentationParam175.uint32(66).fork(),
          )
          .join(),
      presentationParam175
    );
  },
  decode(presentationParam140, presentationParam141) {
    let presentationValue258 =
        presentationParam140 instanceof presentationFr
          ? presentationParam140
          : new presentationFr(presentationParam140),
      presentationValue259 =
        presentationParam141 === void 0
          ? presentationValue258.len
          : presentationValue258.pos + presentationParam141,
      presentationValue260 = no();
    for (; presentationValue258.pos < presentationValue259; ) {
      let presentationValue295 = presentationValue258.uint32();
      switch (presentationValue295 >>> 3) {
        case 1:
          if (presentationValue295 !== 8) break;
          presentationValue260.zEmu = $(presentationValue258.int64());
          continue;
        case 2:
          if (presentationValue295 !== 16) break;
          presentationValue260.extrusionHeightEmu = $(
            presentationValue258.int64(),
          );
          continue;
        case 3:
          if (presentationValue295 !== 24) break;
          presentationValue260.contourWidthEmu = $(
            presentationValue258.int64(),
          );
          continue;
        case 4:
          if (presentationValue295 !== 34) break;
          presentationValue260.presetMaterial = presentationValue258.string();
          continue;
        case 5:
          if (presentationValue295 !== 42) break;
          presentationValue260.bevelTop = presentationCt.decode(
            presentationValue258,
            presentationValue258.uint32(),
          );
          continue;
        case 6:
          if (presentationValue295 !== 50) break;
          presentationValue260.bevelBottom = presentationCt.decode(
            presentationValue258,
            presentationValue258.uint32(),
          );
          continue;
        case 7:
          if (presentationValue295 !== 58) break;
          presentationValue260.extrusionColor = presentationRn.decode(
            presentationValue258,
            presentationValue258.uint32(),
          );
          continue;
        case 8:
          if (presentationValue295 !== 66) break;
          presentationValue260.contourColor = presentationRn.decode(
            presentationValue258,
            presentationValue258.uint32(),
          );
          continue;
      }
      if ((presentationValue295 & 7) == 4 || presentationValue295 === 0) break;
      presentationValue258.skip(presentationValue295 & 7);
    }
    return presentationValue260;
  },
  create(presentationParam1267) {
    return presentationSt.fromPartial(presentationParam1267 ?? {});
  },
  fromPartial(presentationParam173) {
    let presentationValue298 = no();
    return (
      (presentationValue298.zEmu = presentationParam173.zEmu ?? void 0),
      (presentationValue298.extrusionHeightEmu =
        presentationParam173.extrusionHeightEmu ?? void 0),
      (presentationValue298.contourWidthEmu =
        presentationParam173.contourWidthEmu ?? void 0),
      (presentationValue298.presetMaterial =
        presentationParam173.presetMaterial ?? void 0),
      (presentationValue298.bevelTop =
        presentationParam173.bevelTop !== void 0 &&
        presentationParam173.bevelTop !== null
          ? presentationCt.fromPartial(presentationParam173.bevelTop)
          : void 0),
      (presentationValue298.bevelBottom =
        presentationParam173.bevelBottom !== void 0 &&
        presentationParam173.bevelBottom !== null
          ? presentationCt.fromPartial(presentationParam173.bevelBottom)
          : void 0),
      (presentationValue298.extrusionColor =
        presentationParam173.extrusionColor !== void 0 &&
        presentationParam173.extrusionColor !== null
          ? presentationRn.fromPartial(presentationParam173.extrusionColor)
          : void 0),
      (presentationValue298.contourColor =
        presentationParam173.contourColor !== void 0 &&
        presentationParam173.contourColor !== null
          ? presentationRn.fromPartial(presentationParam173.contourColor)
          : void 0),
      presentationValue298
    );
  },
};
function presentationHelper146() {
  return {
    widthEmu: void 0,
    heightEmu: void 0,
    preset: void 0,
  };
}
var presentationCt = {
  encode(presentationParam853, presentationParam854 = new presentationPr()) {
    return (
      presentationParam853.widthEmu !== void 0 &&
        presentationParam854.uint32(8).int64(presentationParam853.widthEmu),
      presentationParam853.heightEmu !== void 0 &&
        presentationParam854.uint32(16).int64(presentationParam853.heightEmu),
      presentationParam853.preset !== void 0 &&
        presentationParam854.uint32(26).string(presentationParam853.preset),
      presentationParam854
    );
  },
  decode(presentationParam475, presentationParam476) {
    let presentationValue638 =
        presentationParam475 instanceof presentationFr
          ? presentationParam475
          : new presentationFr(presentationParam475),
      presentationValue639 =
        presentationParam476 === void 0
          ? presentationValue638.len
          : presentationValue638.pos + presentationParam476,
      presentationValue640 = presentationHelper146();
    for (; presentationValue638.pos < presentationValue639; ) {
      let presentationValue913 = presentationValue638.uint32();
      switch (presentationValue913 >>> 3) {
        case 1:
          if (presentationValue913 !== 8) break;
          presentationValue640.widthEmu = $(presentationValue638.int64());
          continue;
        case 2:
          if (presentationValue913 !== 16) break;
          presentationValue640.heightEmu = $(presentationValue638.int64());
          continue;
        case 3:
          if (presentationValue913 !== 26) break;
          presentationValue640.preset = presentationValue638.string();
          continue;
      }
      if ((presentationValue913 & 7) == 4 || presentationValue913 === 0) break;
      presentationValue638.skip(presentationValue913 & 7);
    }
    return presentationValue640;
  },
  create(presentationParam1352) {
    return presentationCt.fromPartial(presentationParam1352 ?? {});
  },
  fromPartial(presentationParam993) {
    let presentationValue1115 = presentationHelper146();
    return (
      (presentationValue1115.widthEmu =
        presentationParam993.widthEmu ?? void 0),
      (presentationValue1115.heightEmu =
        presentationParam993.heightEmu ?? void 0),
      (presentationValue1115.preset = presentationParam993.preset ?? void 0),
      presentationValue1115
    );
  },
};
function presentationHelper147() {
  return {
    preset: ``,
    rotation: void 0,
  };
}
var presentationR = {
  encode(presentationParam934, presentationParam935 = new presentationPr()) {
    return (
      presentationParam934.preset !== `` &&
        presentationParam935.uint32(10).string(presentationParam934.preset),
      presentationParam934.rotation !== void 0 &&
        presentationNt
          .encode(
            presentationParam934.rotation,
            presentationParam935.uint32(18).fork(),
          )
          .join(),
      presentationParam935
    );
  },
  decode(presentationParam571, presentationParam572) {
    let presentationValue748 =
        presentationParam571 instanceof presentationFr
          ? presentationParam571
          : new presentationFr(presentationParam571),
      presentationValue749 =
        presentationParam572 === void 0
          ? presentationValue748.len
          : presentationValue748.pos + presentationParam572,
      presentationValue750 = presentationHelper147();
    for (; presentationValue748.pos < presentationValue749; ) {
      let presentationValue1010 = presentationValue748.uint32();
      switch (presentationValue1010 >>> 3) {
        case 1:
          if (presentationValue1010 !== 10) break;
          presentationValue750.preset = presentationValue748.string();
          continue;
        case 2:
          if (presentationValue1010 !== 18) break;
          presentationValue750.rotation = presentationNt.decode(
            presentationValue748,
            presentationValue748.uint32(),
          );
          continue;
      }
      if ((presentationValue1010 & 7) == 4 || presentationValue1010 === 0)
        break;
      presentationValue748.skip(presentationValue1010 & 7);
    }
    return presentationValue750;
  },
  create(presentationParam1268) {
    return presentationR.fromPartial(presentationParam1268 ?? {});
  },
  fromPartial(presentationParam938) {
    let presentationValue1081 = presentationHelper147();
    return (
      (presentationValue1081.preset = presentationParam938.preset ?? ``),
      (presentationValue1081.rotation =
        presentationParam938.rotation !== void 0 &&
        presentationParam938.rotation !== null
          ? presentationNt.fromPartial(presentationParam938.rotation)
          : void 0),
      presentationValue1081
    );
  },
};
function presentationHelper148() {
  return {
    rig: ``,
    direction: ``,
    rotation: void 0,
  };
}
var _presentationV = {
  encode(presentationParam841, presentationParam842 = new presentationPr()) {
    return (
      presentationParam841.rig !== `` &&
        presentationParam842.uint32(10).string(presentationParam841.rig),
      presentationParam841.direction !== `` &&
        presentationParam842.uint32(18).string(presentationParam841.direction),
      presentationParam841.rotation !== void 0 &&
        presentationNt
          .encode(
            presentationParam841.rotation,
            presentationParam842.uint32(26).fork(),
          )
          .join(),
      presentationParam842
    );
  },
  decode(presentationParam466, presentationParam467) {
    let presentationValue630 =
        presentationParam466 instanceof presentationFr
          ? presentationParam466
          : new presentationFr(presentationParam466),
      presentationValue631 =
        presentationParam467 === void 0
          ? presentationValue630.len
          : presentationValue630.pos + presentationParam467,
      presentationValue632 = presentationHelper148();
    for (; presentationValue630.pos < presentationValue631; ) {
      let presentationValue905 = presentationValue630.uint32();
      switch (presentationValue905 >>> 3) {
        case 1:
          if (presentationValue905 !== 10) break;
          presentationValue632.rig = presentationValue630.string();
          continue;
        case 2:
          if (presentationValue905 !== 18) break;
          presentationValue632.direction = presentationValue630.string();
          continue;
        case 3:
          if (presentationValue905 !== 26) break;
          presentationValue632.rotation = presentationNt.decode(
            presentationValue630,
            presentationValue630.uint32(),
          );
          continue;
      }
      if ((presentationValue905 & 7) == 4 || presentationValue905 === 0) break;
      presentationValue630.skip(presentationValue905 & 7);
    }
    return presentationValue632;
  },
  create(presentationParam1269) {
    return _presentationV.fromPartial(presentationParam1269 ?? {});
  },
  fromPartial(presentationParam891) {
    let presentationValue1061 = presentationHelper148();
    return (
      (presentationValue1061.rig = presentationParam891.rig ?? ``),
      (presentationValue1061.direction = presentationParam891.direction ?? ``),
      (presentationValue1061.rotation =
        presentationParam891.rotation !== void 0 &&
        presentationParam891.rotation !== null
          ? presentationNt.fromPartial(presentationParam891.rotation)
          : void 0),
      presentationValue1061
    );
  },
};
function presentationHelper149() {
  return {
    latitude: void 0,
    longitude: void 0,
    revolution: void 0,
  };
}
var presentationNt = {
  encode(presentationParam839, presentationParam840 = new presentationPr()) {
    return (
      presentationParam839.latitude !== void 0 &&
        presentationParam840.uint32(8).int32(presentationParam839.latitude),
      presentationParam839.longitude !== void 0 &&
        presentationParam840.uint32(16).int32(presentationParam839.longitude),
      presentationParam839.revolution !== void 0 &&
        presentationParam840.uint32(24).int32(presentationParam839.revolution),
      presentationParam840
    );
  },
  decode(presentationParam482, presentationParam483) {
    let presentationValue644 =
        presentationParam482 instanceof presentationFr
          ? presentationParam482
          : new presentationFr(presentationParam482),
      presentationValue645 =
        presentationParam483 === void 0
          ? presentationValue644.len
          : presentationValue644.pos + presentationParam483,
      presentationValue646 = presentationHelper149();
    for (; presentationValue644.pos < presentationValue645; ) {
      let presentationValue920 = presentationValue644.uint32();
      switch (presentationValue920 >>> 3) {
        case 1:
          if (presentationValue920 !== 8) break;
          presentationValue646.latitude = presentationValue644.int32();
          continue;
        case 2:
          if (presentationValue920 !== 16) break;
          presentationValue646.longitude = presentationValue644.int32();
          continue;
        case 3:
          if (presentationValue920 !== 24) break;
          presentationValue646.revolution = presentationValue644.int32();
          continue;
      }
      if ((presentationValue920 & 7) == 4 || presentationValue920 === 0) break;
      presentationValue644.skip(presentationValue920 & 7);
    }
    return presentationValue646;
  },
  create(presentationParam1353) {
    return presentationNt.fromPartial(presentationParam1353 ?? {});
  },
  fromPartial(presentationParam976) {
    let presentationValue1099 = presentationHelper149();
    return (
      (presentationValue1099.latitude =
        presentationParam976.latitude ?? void 0),
      (presentationValue1099.longitude =
        presentationParam976.longitude ?? void 0),
      (presentationValue1099.revolution =
        presentationParam976.revolution ?? void 0),
      presentationValue1099
    );
  },
};
function presentationHelper150() {
  return {
    id: ``,
  };
}
var presentationI = {
  encode(presentationParam1129, presentationParam1130 = new presentationPr()) {
    return (
      presentationParam1129.id !== `` &&
        presentationParam1130.uint32(10).string(presentationParam1129.id),
      presentationParam1130
    );
  },
  decode(presentationParam787, presentationParam788) {
    let presentationValue971 =
        presentationParam787 instanceof presentationFr
          ? presentationParam787
          : new presentationFr(presentationParam787),
      presentationValue972 =
        presentationParam788 === void 0
          ? presentationValue971.len
          : presentationValue971.pos + presentationParam788,
      presentationValue973 = presentationHelper150();
    for (; presentationValue971.pos < presentationValue972; ) {
      let presentationValue1127 = presentationValue971.uint32();
      switch (presentationValue1127 >>> 3) {
        case 1:
          if (presentationValue1127 !== 10) break;
          presentationValue973.id = presentationValue971.string();
          continue;
      }
      if ((presentationValue1127 & 7) == 4 || presentationValue1127 === 0)
        break;
      presentationValue971.skip(presentationValue1127 & 7);
    }
    return presentationValue973;
  },
  create(presentationParam1270) {
    return presentationI.fromPartial(presentationParam1270 ?? {});
  },
  fromPartial(presentationParam1150) {
    let presentationValue1324 = presentationHelper150();
    return (
      (presentationValue1324.id = presentationParam1150.id ?? ``),
      presentationValue1324
    );
  },
};
function presentationHelper151() {
  return {
    embeddedView: void 0,
    previewImageReference: void 0,
  };
}
var _presentationP = {
  encode(presentationParam822, presentationParam823 = new presentationPr()) {
    return (
      presentationParam822.embeddedView !== void 0 &&
        presentationValue85
          .encode(
            presentationParam822.embeddedView,
            presentationParam823.uint32(10).fork(),
          )
          .join(),
      presentationParam822.previewImageReference !== void 0 &&
        _presentationQn
          .encode(
            presentationParam822.previewImageReference,
            presentationParam823.uint32(18).fork(),
          )
          .join(),
      presentationParam823
    );
  },
  decode(presentationParam502, presentationParam503) {
    let presentationValue673 =
        presentationParam502 instanceof presentationFr
          ? presentationParam502
          : new presentationFr(presentationParam502),
      presentationValue674 =
        presentationParam503 === void 0
          ? presentationValue673.len
          : presentationValue673.pos + presentationParam503,
      presentationValue675 = presentationHelper151();
    for (; presentationValue673.pos < presentationValue674; ) {
      let presentationValue967 = presentationValue673.uint32();
      switch (presentationValue967 >>> 3) {
        case 1:
          if (presentationValue967 !== 10) break;
          presentationValue675.embeddedView = presentationValue85.decode(
            presentationValue673,
            presentationValue673.uint32(),
          );
          continue;
        case 2:
          if (presentationValue967 !== 18) break;
          presentationValue675.previewImageReference = _presentationQn.decode(
            presentationValue673,
            presentationValue673.uint32(),
          );
          continue;
      }
      if ((presentationValue967 & 7) == 4 || presentationValue967 === 0) break;
      presentationValue673.skip(presentationValue967 & 7);
    }
    return presentationValue675;
  },
  create(presentationParam1271) {
    return _presentationP.fromPartial(presentationParam1271 ?? {});
  },
  fromPartial(presentationParam641) {
    let presentationValue845 = presentationHelper151();
    return (
      (presentationValue845.embeddedView =
        presentationParam641.embeddedView !== void 0 &&
        presentationParam641.embeddedView !== null
          ? presentationValue85.fromPartial(presentationParam641.embeddedView)
          : void 0),
      (presentationValue845.previewImageReference =
        presentationParam641.previewImageReference !== void 0 &&
        presentationParam641.previewImageReference !== null
          ? _presentationQn.fromPartial(
              presentationParam641.previewImageReference,
            )
          : void 0),
      presentationValue845
    );
  },
};
function presentationHelper152() {
  return {
    dataModel: void 0,
    layoutNode: void 0,
  };
}
var presentationMt = {
  encode(presentationParam867, presentationParam868 = new presentationPr()) {
    return (
      presentationParam867.dataModel !== void 0 &&
        presentationPt
          .encode(
            presentationParam867.dataModel,
            presentationParam868.uint32(50).fork(),
          )
          .join(),
      presentationParam867.layoutNode !== void 0 &&
        _presentationCt
          .encode(
            presentationParam867.layoutNode,
            presentationParam868.uint32(90).fork(),
          )
          .join(),
      presentationParam868
    );
  },
  decode(presentationParam521, presentationParam522) {
    let presentationValue690 =
        presentationParam521 instanceof presentationFr
          ? presentationParam521
          : new presentationFr(presentationParam521),
      presentationValue691 =
        presentationParam522 === void 0
          ? presentationValue690.len
          : presentationValue690.pos + presentationParam522,
      presentationValue692 = presentationHelper152();
    for (; presentationValue690.pos < presentationValue691; ) {
      let presentationValue987 = presentationValue690.uint32();
      switch (presentationValue987 >>> 3) {
        case 6:
          if (presentationValue987 !== 50) break;
          presentationValue692.dataModel = presentationPt.decode(
            presentationValue690,
            presentationValue690.uint32(),
          );
          continue;
        case 11:
          if (presentationValue987 !== 90) break;
          presentationValue692.layoutNode = _presentationCt.decode(
            presentationValue690,
            presentationValue690.uint32(),
          );
          continue;
      }
      if ((presentationValue987 & 7) == 4 || presentationValue987 === 0) break;
      presentationValue690.skip(presentationValue987 & 7);
    }
    return presentationValue692;
  },
  create(presentationParam1272) {
    return presentationMt.fromPartial(presentationParam1272 ?? {});
  },
  fromPartial(presentationParam800) {
    let presentationValue978 = presentationHelper152();
    return (
      (presentationValue978.dataModel =
        presentationParam800.dataModel !== void 0 &&
        presentationParam800.dataModel !== null
          ? presentationPt.fromPartial(presentationParam800.dataModel)
          : void 0),
      (presentationValue978.layoutNode =
        presentationParam800.layoutNode !== void 0 &&
        presentationParam800.layoutNode !== null
          ? _presentationCt.fromPartial(presentationParam800.layoutNode)
          : void 0),
      presentationValue978
    );
  },
};
function _o() {
  return {
    name: void 0,
    styleLabel: void 0,
    children: [],
  };
}
var _presentationCt = {
  encode(presentationParam830, presentationParam831 = new presentationPr()) {
    (presentationParam830.name !== void 0 &&
      presentationParam831.uint32(10).string(presentationParam830.name),
      presentationParam830.styleLabel !== void 0 &&
        presentationParam831
          .uint32(18)
          .string(presentationParam830.styleLabel));
    for (let presentationValue1279 of presentationParam830.children)
      presentationGt
        .encode(presentationValue1279, presentationParam831.uint32(50).fork())
        .join();
    return presentationParam831;
  },
  decode(presentationParam451, presentationParam452) {
    let presentationValue612 =
        presentationParam451 instanceof presentationFr
          ? presentationParam451
          : new presentationFr(presentationParam451),
      presentationValue613 =
        presentationParam452 === void 0
          ? presentationValue612.len
          : presentationValue612.pos + presentationParam452,
      presentationValue614 = _o();
    for (; presentationValue612.pos < presentationValue613; ) {
      let presentationValue879 = presentationValue612.uint32();
      switch (presentationValue879 >>> 3) {
        case 1:
          if (presentationValue879 !== 10) break;
          presentationValue614.name = presentationValue612.string();
          continue;
        case 2:
          if (presentationValue879 !== 18) break;
          presentationValue614.styleLabel = presentationValue612.string();
          continue;
        case 6:
          if (presentationValue879 !== 50) break;
          presentationValue614.children.push(
            presentationGt.decode(
              presentationValue612,
              presentationValue612.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue879 & 7) == 4 || presentationValue879 === 0) break;
      presentationValue612.skip(presentationValue879 & 7);
    }
    return presentationValue614;
  },
  create(presentationParam1354) {
    return _presentationCt.fromPartial(presentationParam1354 ?? {});
  },
  fromPartial(presentationParam930) {
    let presentationValue1075 = _o();
    return (
      (presentationValue1075.name = presentationParam930.name ?? void 0),
      (presentationValue1075.styleLabel =
        presentationParam930.styleLabel ?? void 0),
      (presentationValue1075.children =
        presentationParam930.children?.map((presentationParam1450) =>
          presentationGt.fromPartial(presentationParam1450),
        ) || []),
      presentationValue1075
    );
  },
};
function presentationHelper153() {
  return {
    layoutNode: void 0,
    algorithm: void 0,
    shape: void 0,
    presentationOf: void 0,
    forEach: void 0,
    choose: void 0,
    constraints: void 0,
    rules: void 0,
  };
}
var presentationGt = {
  encode(presentationParam171, presentationParam172 = new presentationPr()) {
    return (
      presentationParam171.layoutNode !== void 0 &&
        _presentationCt
          .encode(
            presentationParam171.layoutNode,
            presentationParam172.uint32(10).fork(),
          )
          .join(),
      presentationParam171.algorithm !== void 0 &&
        presentationHt
          .encode(
            presentationParam171.algorithm,
            presentationParam172.uint32(18).fork(),
          )
          .join(),
      presentationParam171.shape !== void 0 &&
        presentationOt
          .encode(
            presentationParam171.shape,
            presentationParam172.uint32(26).fork(),
          )
          .join(),
      presentationParam171.presentationOf !== void 0 &&
        presentationTt
          .encode(
            presentationParam171.presentationOf,
            presentationParam172.uint32(34).fork(),
          )
          .join(),
      presentationParam171.forEach !== void 0 &&
        _presentationXt
          .encode(
            presentationParam171.forEach,
            presentationParam172.uint32(42).fork(),
          )
          .join(),
      presentationParam171.choose !== void 0 &&
        _presentationT
          .encode(
            presentationParam171.choose,
            presentationParam172.uint32(50).fork(),
          )
          .join(),
      presentationParam171.constraints !== void 0 &&
        presentationBt
          .encode(
            presentationParam171.constraints,
            presentationParam172.uint32(58).fork(),
          )
          .join(),
      presentationParam171.rules !== void 0 &&
        _presentationDt
          .encode(
            presentationParam171.rules,
            presentationParam172.uint32(66).fork(),
          )
          .join(),
      presentationParam172
    );
  },
  decode(presentationParam124, presentationParam125) {
    let presentationValue237 =
        presentationParam124 instanceof presentationFr
          ? presentationParam124
          : new presentationFr(presentationParam124),
      presentationValue238 =
        presentationParam125 === void 0
          ? presentationValue237.len
          : presentationValue237.pos + presentationParam125,
      presentationValue239 = presentationHelper153();
    for (; presentationValue237.pos < presentationValue238; ) {
      let presentationValue286 = presentationValue237.uint32();
      switch (presentationValue286 >>> 3) {
        case 1:
          if (presentationValue286 !== 10) break;
          presentationValue239.layoutNode = _presentationCt.decode(
            presentationValue237,
            presentationValue237.uint32(),
          );
          continue;
        case 2:
          if (presentationValue286 !== 18) break;
          presentationValue239.algorithm = presentationHt.decode(
            presentationValue237,
            presentationValue237.uint32(),
          );
          continue;
        case 3:
          if (presentationValue286 !== 26) break;
          presentationValue239.shape = presentationOt.decode(
            presentationValue237,
            presentationValue237.uint32(),
          );
          continue;
        case 4:
          if (presentationValue286 !== 34) break;
          presentationValue239.presentationOf = presentationTt.decode(
            presentationValue237,
            presentationValue237.uint32(),
          );
          continue;
        case 5:
          if (presentationValue286 !== 42) break;
          presentationValue239.forEach = _presentationXt.decode(
            presentationValue237,
            presentationValue237.uint32(),
          );
          continue;
        case 6:
          if (presentationValue286 !== 50) break;
          presentationValue239.choose = _presentationT.decode(
            presentationValue237,
            presentationValue237.uint32(),
          );
          continue;
        case 7:
          if (presentationValue286 !== 58) break;
          presentationValue239.constraints = presentationBt.decode(
            presentationValue237,
            presentationValue237.uint32(),
          );
          continue;
        case 8:
          if (presentationValue286 !== 66) break;
          presentationValue239.rules = _presentationDt.decode(
            presentationValue237,
            presentationValue237.uint32(),
          );
          continue;
      }
      if ((presentationValue286 & 7) == 4 || presentationValue286 === 0) break;
      presentationValue237.skip(presentationValue286 & 7);
    }
    return presentationValue239;
  },
  create(presentationParam1355) {
    return presentationGt.fromPartial(presentationParam1355 ?? {});
  },
  fromPartial(presentationParam119) {
    let presentationValue233 = presentationHelper153();
    return (
      (presentationValue233.layoutNode =
        presentationParam119.layoutNode !== void 0 &&
        presentationParam119.layoutNode !== null
          ? _presentationCt.fromPartial(presentationParam119.layoutNode)
          : void 0),
      (presentationValue233.algorithm =
        presentationParam119.algorithm !== void 0 &&
        presentationParam119.algorithm !== null
          ? presentationHt.fromPartial(presentationParam119.algorithm)
          : void 0),
      (presentationValue233.shape =
        presentationParam119.shape !== void 0 &&
        presentationParam119.shape !== null
          ? presentationOt.fromPartial(presentationParam119.shape)
          : void 0),
      (presentationValue233.presentationOf =
        presentationParam119.presentationOf !== void 0 &&
        presentationParam119.presentationOf !== null
          ? presentationTt.fromPartial(presentationParam119.presentationOf)
          : void 0),
      (presentationValue233.forEach =
        presentationParam119.forEach !== void 0 &&
        presentationParam119.forEach !== null
          ? _presentationXt.fromPartial(presentationParam119.forEach)
          : void 0),
      (presentationValue233.choose =
        presentationParam119.choose !== void 0 &&
        presentationParam119.choose !== null
          ? _presentationT.fromPartial(presentationParam119.choose)
          : void 0),
      (presentationValue233.constraints =
        presentationParam119.constraints !== void 0 &&
        presentationParam119.constraints !== null
          ? presentationBt.fromPartial(presentationParam119.constraints)
          : void 0),
      (presentationValue233.rules =
        presentationParam119.rules !== void 0 &&
        presentationParam119.rules !== null
          ? _presentationDt.fromPartial(presentationParam119.rules)
          : void 0),
      presentationValue233
    );
  },
};
function presentationHelper154() {
  return {
    type: ``,
    parameters: [],
  };
}
var presentationHt = {
  encode(presentationParam959, presentationParam960 = new presentationPr()) {
    presentationParam959.type !== `` &&
      presentationParam960.uint32(10).string(presentationParam959.type);
    for (let presentationValue1255 of presentationParam959.parameters)
      _presentationWt
        .encode(presentationValue1255, presentationParam960.uint32(26).fork())
        .join();
    return presentationParam960;
  },
  decode(presentationParam548, presentationParam549) {
    let presentationValue713 =
        presentationParam548 instanceof presentationFr
          ? presentationParam548
          : new presentationFr(presentationParam548),
      presentationValue714 =
        presentationParam549 === void 0
          ? presentationValue713.len
          : presentationValue713.pos + presentationParam549,
      presentationValue715 = presentationHelper154();
    for (; presentationValue713.pos < presentationValue714; ) {
      let presentationValue998 = presentationValue713.uint32();
      switch (presentationValue998 >>> 3) {
        case 1:
          if (presentationValue998 !== 10) break;
          presentationValue715.type = presentationValue713.string();
          continue;
        case 3:
          if (presentationValue998 !== 26) break;
          presentationValue715.parameters.push(
            _presentationWt.decode(
              presentationValue713,
              presentationValue713.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue998 & 7) == 4 || presentationValue998 === 0) break;
      presentationValue713.skip(presentationValue998 & 7);
    }
    return presentationValue715;
  },
  create(presentationParam1273) {
    return presentationHt.fromPartial(presentationParam1273 ?? {});
  },
  fromPartial(presentationParam1011) {
    let presentationValue1133 = presentationHelper154();
    return (
      (presentationValue1133.type = presentationParam1011.type ?? ``),
      (presentationValue1133.parameters =
        presentationParam1011.parameters?.map((presentationParam1415) =>
          _presentationWt.fromPartial(presentationParam1415),
        ) || []),
      presentationValue1133
    );
  },
};
function presentationHelper155() {
  return {
    type: ``,
    value: void 0,
  };
}
var _presentationWt = {
  encode(presentationParam1003, presentationParam1004 = new presentationPr()) {
    return (
      presentationParam1003.type !== `` &&
        presentationParam1004.uint32(10).string(presentationParam1003.type),
      presentationParam1003.value !== void 0 &&
        presentationParam1004.uint32(18).string(presentationParam1003.value),
      presentationParam1004
    );
  },
  decode(presentationParam639, presentationParam640) {
    let presentationValue842 =
        presentationParam639 instanceof presentationFr
          ? presentationParam639
          : new presentationFr(presentationParam639),
      presentationValue843 =
        presentationParam640 === void 0
          ? presentationValue842.len
          : presentationValue842.pos + presentationParam640,
      presentationValue844 = presentationHelper155();
    for (; presentationValue842.pos < presentationValue843; ) {
      let presentationValue1052 = presentationValue842.uint32();
      switch (presentationValue1052 >>> 3) {
        case 1:
          if (presentationValue1052 !== 10) break;
          presentationValue844.type = presentationValue842.string();
          continue;
        case 2:
          if (presentationValue1052 !== 18) break;
          presentationValue844.value = presentationValue842.string();
          continue;
      }
      if ((presentationValue1052 & 7) == 4 || presentationValue1052 === 0)
        break;
      presentationValue842.skip(presentationValue1052 & 7);
    }
    return presentationValue844;
  },
  create(presentationParam1274) {
    return _presentationWt.fromPartial(presentationParam1274 ?? {});
  },
  fromPartial(presentationParam1100) {
    let presentationValue1198 = presentationHelper155();
    return (
      (presentationValue1198.type = presentationParam1100.type ?? ``),
      (presentationValue1198.value = presentationParam1100.value ?? void 0),
      presentationValue1198
    );
  },
};
function presentationHelper156() {
  return {
    type: void 0,
  };
}
var presentationOt = {
  encode(presentationParam1117, presentationParam1118 = new presentationPr()) {
    return (
      presentationParam1117.type !== void 0 &&
        presentationParam1118.uint32(10).string(presentationParam1117.type),
      presentationParam1118
    );
  },
  decode(presentationParam781, presentationParam782) {
    let presentationValue964 =
        presentationParam781 instanceof presentationFr
          ? presentationParam781
          : new presentationFr(presentationParam781),
      presentationValue965 =
        presentationParam782 === void 0
          ? presentationValue964.len
          : presentationValue964.pos + presentationParam782,
      presentationValue966 = presentationHelper156();
    for (; presentationValue964.pos < presentationValue965; ) {
      let presentationValue1123 = presentationValue964.uint32();
      switch (presentationValue1123 >>> 3) {
        case 1:
          if (presentationValue1123 !== 10) break;
          presentationValue966.type = presentationValue964.string();
          continue;
      }
      if ((presentationValue1123 & 7) == 4 || presentationValue1123 === 0)
        break;
      presentationValue964.skip(presentationValue1123 & 7);
    }
    return presentationValue966;
  },
  create(presentationParam1275) {
    return presentationOt.fromPartial(presentationParam1275 ?? {});
  },
  fromPartial(presentationParam1141) {
    let presentationValue1310 = presentationHelper156();
    return (
      (presentationValue1310.type = presentationParam1141.type ?? void 0),
      presentationValue1310
    );
  },
};
function presentationHelper157() {
  return {
    axes: [],
    pointTypes: [],
    starts: [],
    counts: [],
    steps: [],
  };
}
var _presentationSt = {
  encode(presentationParam529, presentationParam530 = new presentationPr()) {
    for (let presentationValue1334 of presentationParam529.axes)
      presentationParam530.uint32(10).string(presentationValue1334);
    for (let presentationValue1325 of presentationParam529.pointTypes)
      presentationParam530.uint32(18).string(presentationValue1325);
    presentationParam530.uint32(34).fork();
    for (let presentationValue1345 of presentationParam529.starts)
      presentationParam530.int32(presentationValue1345);
    (presentationParam530.join(), presentationParam530.uint32(42).fork());
    for (let presentationValue1344 of presentationParam529.counts)
      presentationParam530.uint32(presentationValue1344);
    (presentationParam530.join(), presentationParam530.uint32(50).fork());
    for (let presentationValue1346 of presentationParam529.steps)
      presentationParam530.int32(presentationValue1346);
    return (presentationParam530.join(), presentationParam530);
  },
  decode(presentationParam126, presentationParam127) {
    let presentationValue240 =
        presentationParam126 instanceof presentationFr
          ? presentationParam126
          : new presentationFr(presentationParam126),
      presentationValue241 =
        presentationParam127 === void 0
          ? presentationValue240.len
          : presentationValue240.pos + presentationParam127,
      presentationValue242 = presentationHelper157();
    for (; presentationValue240.pos < presentationValue241; ) {
      let presentationValue287 = presentationValue240.uint32();
      switch (presentationValue287 >>> 3) {
        case 1:
          if (presentationValue287 !== 10) break;
          presentationValue242.axes.push(presentationValue240.string());
          continue;
        case 2:
          if (presentationValue287 !== 18) break;
          presentationValue242.pointTypes.push(presentationValue240.string());
          continue;
        case 4:
          if (presentationValue287 === 32) {
            presentationValue242.starts.push(presentationValue240.int32());
            continue;
          }
          if (presentationValue287 === 34) {
            let presentationValue1221 =
              presentationValue240.uint32() + presentationValue240.pos;
            for (; presentationValue240.pos < presentationValue1221; )
              presentationValue242.starts.push(presentationValue240.int32());
            continue;
          }
          break;
        case 5:
          if (presentationValue287 === 40) {
            presentationValue242.counts.push(presentationValue240.uint32());
            continue;
          }
          if (presentationValue287 === 42) {
            let presentationValue1216 =
              presentationValue240.uint32() + presentationValue240.pos;
            for (; presentationValue240.pos < presentationValue1216; )
              presentationValue242.counts.push(presentationValue240.uint32());
            continue;
          }
          break;
        case 6:
          if (presentationValue287 === 48) {
            presentationValue242.steps.push(presentationValue240.int32());
            continue;
          }
          if (presentationValue287 === 50) {
            let presentationValue1224 =
              presentationValue240.uint32() + presentationValue240.pos;
            for (; presentationValue240.pos < presentationValue1224; )
              presentationValue242.steps.push(presentationValue240.int32());
            continue;
          }
          break;
      }
      if ((presentationValue287 & 7) == 4 || presentationValue287 === 0) break;
      presentationValue240.skip(presentationValue287 & 7);
    }
    return presentationValue242;
  },
  create(presentationParam1356) {
    return _presentationSt.fromPartial(presentationParam1356 ?? {});
  },
  fromPartial(presentationParam818) {
    let presentationValue989 = presentationHelper157();
    return (
      (presentationValue989.axes =
        presentationParam818.axes?.map(
          (presentationParam1478) => presentationParam1478,
        ) || []),
      (presentationValue989.pointTypes =
        presentationParam818.pointTypes?.map(
          (presentationParam1479) => presentationParam1479,
        ) || []),
      (presentationValue989.starts =
        presentationParam818.starts?.map(
          (presentationParam1480) => presentationParam1480,
        ) || []),
      (presentationValue989.counts =
        presentationParam818.counts?.map(
          (presentationParam1481) => presentationParam1481,
        ) || []),
      (presentationValue989.steps =
        presentationParam818.steps?.map(
          (presentationParam1482) => presentationParam1482,
        ) || []),
      presentationValue989
    );
  },
};
function presentationHelper158() {
  return {
    iterator: void 0,
  };
}
var presentationTt = {
  encode(presentationParam1043, presentationParam1044 = new presentationPr()) {
    return (
      presentationParam1043.iterator !== void 0 &&
        _presentationSt
          .encode(
            presentationParam1043.iterator,
            presentationParam1044.uint32(10).fork(),
          )
          .join(),
      presentationParam1044
    );
  },
  decode(presentationParam718, presentationParam719) {
    let presentationValue907 =
        presentationParam718 instanceof presentationFr
          ? presentationParam718
          : new presentationFr(presentationParam718),
      presentationValue908 =
        presentationParam719 === void 0
          ? presentationValue907.len
          : presentationValue907.pos + presentationParam719,
      presentationValue909 = presentationHelper158();
    for (; presentationValue907.pos < presentationValue908; ) {
      let presentationValue1095 = presentationValue907.uint32();
      switch (presentationValue1095 >>> 3) {
        case 1:
          if (presentationValue1095 !== 10) break;
          presentationValue909.iterator = _presentationSt.decode(
            presentationValue907,
            presentationValue907.uint32(),
          );
          continue;
      }
      if ((presentationValue1095 & 7) == 4 || presentationValue1095 === 0)
        break;
      presentationValue907.skip(presentationValue1095 & 7);
    }
    return presentationValue909;
  },
  create(presentationParam1276) {
    return presentationTt.fromPartial(presentationParam1276 ?? {});
  },
  fromPartial(presentationParam998) {
    let presentationValue1124 = presentationHelper158();
    return (
      (presentationValue1124.iterator =
        presentationParam998.iterator !== void 0 &&
        presentationParam998.iterator !== null
          ? _presentationSt.fromPartial(presentationParam998.iterator)
          : void 0),
      presentationValue1124
    );
  },
};
function presentationHelper159() {
  return {
    reference: void 0,
    iterator: void 0,
    children: [],
  };
}
var _presentationXt = {
  encode(presentationParam801, presentationParam802 = new presentationPr()) {
    (presentationParam801.reference !== void 0 &&
      presentationParam802.uint32(18).string(presentationParam801.reference),
      presentationParam801.iterator !== void 0 &&
        _presentationSt
          .encode(
            presentationParam801.iterator,
            presentationParam802.uint32(26).fork(),
          )
          .join());
    for (let presentationValue1280 of presentationParam801.children)
      presentationGt
        .encode(presentationValue1280, presentationParam802.uint32(34).fork())
        .join();
    return presentationParam802;
  },
  decode(presentationParam429, presentationParam430) {
    let presentationValue580 =
        presentationParam429 instanceof presentationFr
          ? presentationParam429
          : new presentationFr(presentationParam429),
      presentationValue581 =
        presentationParam430 === void 0
          ? presentationValue580.len
          : presentationValue580.pos + presentationParam430,
      presentationValue582 = presentationHelper159();
    for (; presentationValue580.pos < presentationValue581; ) {
      let presentationValue862 = presentationValue580.uint32();
      switch (presentationValue862 >>> 3) {
        case 2:
          if (presentationValue862 !== 18) break;
          presentationValue582.reference = presentationValue580.string();
          continue;
        case 3:
          if (presentationValue862 !== 26) break;
          presentationValue582.iterator = _presentationSt.decode(
            presentationValue580,
            presentationValue580.uint32(),
          );
          continue;
        case 4:
          if (presentationValue862 !== 34) break;
          presentationValue582.children.push(
            presentationGt.decode(
              presentationValue580,
              presentationValue580.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue862 & 7) == 4 || presentationValue862 === 0) break;
      presentationValue580.skip(presentationValue862 & 7);
    }
    return presentationValue582;
  },
  create(presentationParam1277) {
    return _presentationXt.fromPartial(presentationParam1277 ?? {});
  },
  fromPartial(presentationParam819) {
    let presentationValue990 = presentationHelper159();
    return (
      (presentationValue990.reference =
        presentationParam819.reference ?? void 0),
      (presentationValue990.iterator =
        presentationParam819.iterator !== void 0 &&
        presentationParam819.iterator !== null
          ? _presentationSt.fromPartial(presentationParam819.iterator)
          : void 0),
      (presentationValue990.children =
        presentationParam819.children?.map((presentationParam1451) =>
          presentationGt.fromPartial(presentationParam1451),
        ) || []),
      presentationValue990
    );
  },
};
function presentationHelper160() {
  return {
    branches: [],
  };
}
var _presentationT = {
  encode(presentationParam1058, presentationParam1059 = new presentationPr()) {
    for (let presentationValue1267 of presentationParam1058.branches)
      presentationVt
        .encode(presentationValue1267, presentationParam1059.uint32(18).fork())
        .join();
    return presentationParam1059;
  },
  decode(presentationParam686, presentationParam687) {
    let presentationValue883 =
        presentationParam686 instanceof presentationFr
          ? presentationParam686
          : new presentationFr(presentationParam686),
      presentationValue884 =
        presentationParam687 === void 0
          ? presentationValue883.len
          : presentationValue883.pos + presentationParam687,
      presentationValue885 = presentationHelper160();
    for (; presentationValue883.pos < presentationValue884; ) {
      let presentationValue1077 = presentationValue883.uint32();
      switch (presentationValue1077 >>> 3) {
        case 2:
          if (presentationValue1077 !== 18) break;
          presentationValue885.branches.push(
            presentationVt.decode(
              presentationValue883,
              presentationValue883.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue1077 & 7) == 4 || presentationValue1077 === 0)
        break;
      presentationValue883.skip(presentationValue1077 & 7);
    }
    return presentationValue885;
  },
  create(presentationParam1278) {
    return _presentationT.fromPartial(presentationParam1278 ?? {});
  },
  fromPartial(presentationParam1072) {
    let presentationValue1172 = presentationHelper160();
    return (
      (presentationValue1172.branches =
        presentationParam1072.branches?.map((presentationParam1416) =>
          presentationVt.fromPartial(presentationParam1416),
        ) || []),
      presentationValue1172
    );
  },
};
function presentationHelper161() {
  return {
    isElse: !1,
    iterator: void 0,
    function: void 0,
    argument: void 0,
    operator: void 0,
    value: void 0,
    children: [],
  };
}
var presentationVt = {
  encode(presentationParam332, presentationParam333 = new presentationPr()) {
    (presentationParam332.isElse !== !1 &&
      presentationParam333.uint32(8).bool(presentationParam332.isElse),
      presentationParam332.iterator !== void 0 &&
        _presentationSt
          .encode(
            presentationParam332.iterator,
            presentationParam333.uint32(26).fork(),
          )
          .join(),
      presentationParam332.function !== void 0 &&
        presentationParam333.uint32(34).string(presentationParam332.function),
      presentationParam332.argument !== void 0 &&
        presentationParam333.uint32(42).string(presentationParam332.argument),
      presentationParam332.operator !== void 0 &&
        presentationParam333.uint32(50).string(presentationParam332.operator),
      presentationParam332.value !== void 0 &&
        presentationParam333.uint32(58).string(presentationParam332.value));
    for (let presentationValue1281 of presentationParam332.children)
      presentationGt
        .encode(presentationValue1281, presentationParam333.uint32(66).fork())
        .join();
    return presentationParam333;
  },
  decode(presentationParam176, presentationParam177) {
    let presentationValue299 =
        presentationParam176 instanceof presentationFr
          ? presentationParam176
          : new presentationFr(presentationParam176),
      presentationValue300 =
        presentationParam177 === void 0
          ? presentationValue299.len
          : presentationValue299.pos + presentationParam177,
      presentationValue301 = presentationHelper161();
    for (; presentationValue299.pos < presentationValue300; ) {
      let presentationValue405 = presentationValue299.uint32();
      switch (presentationValue405 >>> 3) {
        case 1:
          if (presentationValue405 !== 8) break;
          presentationValue301.isElse = presentationValue299.bool();
          continue;
        case 3:
          if (presentationValue405 !== 26) break;
          presentationValue301.iterator = _presentationSt.decode(
            presentationValue299,
            presentationValue299.uint32(),
          );
          continue;
        case 4:
          if (presentationValue405 !== 34) break;
          presentationValue301.function = presentationValue299.string();
          continue;
        case 5:
          if (presentationValue405 !== 42) break;
          presentationValue301.argument = presentationValue299.string();
          continue;
        case 6:
          if (presentationValue405 !== 50) break;
          presentationValue301.operator = presentationValue299.string();
          continue;
        case 7:
          if (presentationValue405 !== 58) break;
          presentationValue301.value = presentationValue299.string();
          continue;
        case 8:
          if (presentationValue405 !== 66) break;
          presentationValue301.children.push(
            presentationGt.decode(
              presentationValue299,
              presentationValue299.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue405 & 7) == 4 || presentationValue405 === 0) break;
      presentationValue299.skip(presentationValue405 & 7);
    }
    return presentationValue301;
  },
  create(presentationParam1279) {
    return presentationVt.fromPartial(presentationParam1279 ?? {});
  },
  fromPartial(presentationParam525) {
    let presentationValue693 = presentationHelper161();
    return (
      (presentationValue693.isElse = presentationParam525.isElse ?? !1),
      (presentationValue693.iterator =
        presentationParam525.iterator !== void 0 &&
        presentationParam525.iterator !== null
          ? _presentationSt.fromPartial(presentationParam525.iterator)
          : void 0),
      (presentationValue693.function = presentationParam525.function ?? void 0),
      (presentationValue693.argument = presentationParam525.argument ?? void 0),
      (presentationValue693.operator = presentationParam525.operator ?? void 0),
      (presentationValue693.value = presentationParam525.value ?? void 0),
      (presentationValue693.children =
        presentationParam525.children?.map((presentationParam1452) =>
          presentationGt.fromPartial(presentationParam1452),
        ) || []),
      presentationValue693
    );
  },
};
function presentationHelper162() {
  return {
    constraints: [],
  };
}
var presentationBt = {
  encode(presentationParam1046, presentationParam1047 = new presentationPr()) {
    for (let presentationValue1244 of presentationParam1046.constraints)
      _presentationYt
        .encode(presentationValue1244, presentationParam1047.uint32(10).fork())
        .join();
    return presentationParam1047;
  },
  decode(presentationParam676, presentationParam677) {
    let presentationValue880 =
        presentationParam676 instanceof presentationFr
          ? presentationParam676
          : new presentationFr(presentationParam676),
      presentationValue881 =
        presentationParam677 === void 0
          ? presentationValue880.len
          : presentationValue880.pos + presentationParam677,
      presentationValue882 = presentationHelper162();
    for (; presentationValue880.pos < presentationValue881; ) {
      let presentationValue1073 = presentationValue880.uint32();
      switch (presentationValue1073 >>> 3) {
        case 1:
          if (presentationValue1073 !== 10) break;
          presentationValue882.constraints.push(
            _presentationYt.decode(
              presentationValue880,
              presentationValue880.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue1073 & 7) == 4 || presentationValue1073 === 0)
        break;
      presentationValue880.skip(presentationValue1073 & 7);
    }
    return presentationValue882;
  },
  create(presentationParam1280) {
    return presentationBt.fromPartial(presentationParam1280 ?? {});
  },
  fromPartial(presentationParam1048) {
    let presentationValue1161 = presentationHelper162();
    return (
      (presentationValue1161.constraints =
        presentationParam1048.constraints?.map((presentationParam1417) =>
          _presentationYt.fromPartial(presentationParam1417),
        ) || []),
      presentationValue1161
    );
  },
};
function presentationHelper163() {
  return {
    type: ``,
    forTarget: void 0,
    forName: void 0,
    pointType: void 0,
    referenceType: void 0,
    referenceFor: void 0,
    referenceForName: void 0,
    referencePointType: void 0,
    operator: void 0,
    value: void 0,
    factor: void 0,
  };
}
var _presentationYt = {
  encode(presentationParam152, presentationParam153 = new presentationPr()) {
    return (
      presentationParam152.type !== `` &&
        presentationParam153.uint32(10).string(presentationParam152.type),
      presentationParam152.forTarget !== void 0 &&
        presentationParam153.uint32(18).string(presentationParam152.forTarget),
      presentationParam152.forName !== void 0 &&
        presentationParam153.uint32(26).string(presentationParam152.forName),
      presentationParam152.pointType !== void 0 &&
        presentationParam153.uint32(34).string(presentationParam152.pointType),
      presentationParam152.referenceType !== void 0 &&
        presentationParam153
          .uint32(42)
          .string(presentationParam152.referenceType),
      presentationParam152.referenceFor !== void 0 &&
        presentationParam153
          .uint32(50)
          .string(presentationParam152.referenceFor),
      presentationParam152.referenceForName !== void 0 &&
        presentationParam153
          .uint32(58)
          .string(presentationParam152.referenceForName),
      presentationParam152.referencePointType !== void 0 &&
        presentationParam153
          .uint32(66)
          .string(presentationParam152.referencePointType),
      presentationParam152.operator !== void 0 &&
        presentationParam153.uint32(74).string(presentationParam152.operator),
      presentationParam152.value !== void 0 &&
        presentationParam153.uint32(81).double(presentationParam152.value),
      presentationParam152.factor !== void 0 &&
        presentationParam153.uint32(89).double(presentationParam152.factor),
      presentationParam153
    );
  },
  decode(presentationParam94, presentationParam95) {
    let presentationValue209 =
        presentationParam94 instanceof presentationFr
          ? presentationParam94
          : new presentationFr(presentationParam94),
      presentationValue210 =
        presentationParam95 === void 0
          ? presentationValue209.len
          : presentationValue209.pos + presentationParam95,
      presentationValue211 = presentationHelper163();
    for (; presentationValue209.pos < presentationValue210; ) {
      let presentationValue262 = presentationValue209.uint32();
      switch (presentationValue262 >>> 3) {
        case 1:
          if (presentationValue262 !== 10) break;
          presentationValue211.type = presentationValue209.string();
          continue;
        case 2:
          if (presentationValue262 !== 18) break;
          presentationValue211.forTarget = presentationValue209.string();
          continue;
        case 3:
          if (presentationValue262 !== 26) break;
          presentationValue211.forName = presentationValue209.string();
          continue;
        case 4:
          if (presentationValue262 !== 34) break;
          presentationValue211.pointType = presentationValue209.string();
          continue;
        case 5:
          if (presentationValue262 !== 42) break;
          presentationValue211.referenceType = presentationValue209.string();
          continue;
        case 6:
          if (presentationValue262 !== 50) break;
          presentationValue211.referenceFor = presentationValue209.string();
          continue;
        case 7:
          if (presentationValue262 !== 58) break;
          presentationValue211.referenceForName = presentationValue209.string();
          continue;
        case 8:
          if (presentationValue262 !== 66) break;
          presentationValue211.referencePointType =
            presentationValue209.string();
          continue;
        case 9:
          if (presentationValue262 !== 74) break;
          presentationValue211.operator = presentationValue209.string();
          continue;
        case 10:
          if (presentationValue262 !== 81) break;
          presentationValue211.value = presentationValue209.double();
          continue;
        case 11:
          if (presentationValue262 !== 89) break;
          presentationValue211.factor = presentationValue209.double();
          continue;
      }
      if ((presentationValue262 & 7) == 4 || presentationValue262 === 0) break;
      presentationValue209.skip(presentationValue262 & 7);
    }
    return presentationValue211;
  },
  create(presentationParam1281) {
    return _presentationYt.fromPartial(presentationParam1281 ?? {});
  },
  fromPartial(presentationParam352) {
    let presentationValue491 = presentationHelper163();
    return (
      (presentationValue491.type = presentationParam352.type ?? ``),
      (presentationValue491.forTarget =
        presentationParam352.forTarget ?? void 0),
      (presentationValue491.forName = presentationParam352.forName ?? void 0),
      (presentationValue491.pointType =
        presentationParam352.pointType ?? void 0),
      (presentationValue491.referenceType =
        presentationParam352.referenceType ?? void 0),
      (presentationValue491.referenceFor =
        presentationParam352.referenceFor ?? void 0),
      (presentationValue491.referenceForName =
        presentationParam352.referenceForName ?? void 0),
      (presentationValue491.referencePointType =
        presentationParam352.referencePointType ?? void 0),
      (presentationValue491.operator = presentationParam352.operator ?? void 0),
      (presentationValue491.value = presentationParam352.value ?? void 0),
      (presentationValue491.factor = presentationParam352.factor ?? void 0),
      presentationValue491
    );
  },
};
function presentationHelper164() {
  return {
    rules: [],
  };
}
var _presentationDt = {
  encode(presentationParam1073, presentationParam1074 = new presentationPr()) {
    for (let presentationValue1296 of presentationParam1073.rules)
      presentationEt
        .encode(presentationValue1296, presentationParam1074.uint32(10).fork())
        .join();
    return presentationParam1074;
  },
  decode(presentationParam697, presentationParam698) {
    let presentationValue894 =
        presentationParam697 instanceof presentationFr
          ? presentationParam697
          : new presentationFr(presentationParam697),
      presentationValue895 =
        presentationParam698 === void 0
          ? presentationValue894.len
          : presentationValue894.pos + presentationParam698,
      presentationValue896 = presentationHelper164();
    for (; presentationValue894.pos < presentationValue895; ) {
      let presentationValue1083 = presentationValue894.uint32();
      switch (presentationValue1083 >>> 3) {
        case 1:
          if (presentationValue1083 !== 10) break;
          presentationValue896.rules.push(
            presentationEt.decode(
              presentationValue894,
              presentationValue894.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue1083 & 7) == 4 || presentationValue1083 === 0)
        break;
      presentationValue894.skip(presentationValue1083 & 7);
    }
    return presentationValue896;
  },
  create(presentationParam1282) {
    return _presentationDt.fromPartial(presentationParam1282 ?? {});
  },
  fromPartial(presentationParam1086) {
    let presentationValue1189 = presentationHelper164();
    return (
      (presentationValue1189.rules =
        presentationParam1086.rules?.map((presentationParam1418) =>
          presentationEt.fromPartial(presentationParam1418),
        ) || []),
      presentationValue1189
    );
  },
};
function presentationHelper165() {
  return {
    type: ``,
    forTarget: void 0,
    forName: void 0,
    value: void 0,
    factor: void 0,
    max: void 0,
  };
}
var presentationEt = {
  encode(presentationParam515, presentationParam516 = new presentationPr()) {
    return (
      presentationParam515.type !== `` &&
        presentationParam516.uint32(10).string(presentationParam515.type),
      presentationParam515.forTarget !== void 0 &&
        presentationParam516.uint32(18).string(presentationParam515.forTarget),
      presentationParam515.forName !== void 0 &&
        presentationParam516.uint32(26).string(presentationParam515.forName),
      presentationParam515.value !== void 0 &&
        presentationParam516.uint32(41).double(presentationParam515.value),
      presentationParam515.factor !== void 0 &&
        presentationParam516.uint32(49).double(presentationParam515.factor),
      presentationParam515.max !== void 0 &&
        presentationParam516.uint32(57).double(presentationParam515.max),
      presentationParam516
    );
  },
  decode(presentationParam264, presentationParam265) {
    let presentationValue392 =
        presentationParam264 instanceof presentationFr
          ? presentationParam264
          : new presentationFr(presentationParam264),
      presentationValue393 =
        presentationParam265 === void 0
          ? presentationValue392.len
          : presentationValue392.pos + presentationParam265,
      presentationValue394 = presentationHelper165();
    for (; presentationValue392.pos < presentationValue393; ) {
      let presentationValue543 = presentationValue392.uint32();
      switch (presentationValue543 >>> 3) {
        case 1:
          if (presentationValue543 !== 10) break;
          presentationValue394.type = presentationValue392.string();
          continue;
        case 2:
          if (presentationValue543 !== 18) break;
          presentationValue394.forTarget = presentationValue392.string();
          continue;
        case 3:
          if (presentationValue543 !== 26) break;
          presentationValue394.forName = presentationValue392.string();
          continue;
        case 5:
          if (presentationValue543 !== 41) break;
          presentationValue394.value = presentationValue392.double();
          continue;
        case 6:
          if (presentationValue543 !== 49) break;
          presentationValue394.factor = presentationValue392.double();
          continue;
        case 7:
          if (presentationValue543 !== 57) break;
          presentationValue394.max = presentationValue392.double();
          continue;
      }
      if ((presentationValue543 & 7) == 4 || presentationValue543 === 0) break;
      presentationValue392.skip(presentationValue543 & 7);
    }
    return presentationValue394;
  },
  create(presentationParam1283) {
    return presentationEt.fromPartial(presentationParam1283 ?? {});
  },
  fromPartial(presentationParam845) {
    let presentationValue1023 = presentationHelper165();
    return (
      (presentationValue1023.type = presentationParam845.type ?? ``),
      (presentationValue1023.forTarget =
        presentationParam845.forTarget ?? void 0),
      (presentationValue1023.forName = presentationParam845.forName ?? void 0),
      (presentationValue1023.value = presentationParam845.value ?? void 0),
      (presentationValue1023.factor = presentationParam845.factor ?? void 0),
      (presentationValue1023.max = presentationParam845.max ?? void 0),
      presentationValue1023
    );
  },
};
function presentationHelper166() {
  return {
    points: [],
    connections: [],
  };
}
var presentationPt = {
  encode(presentationParam904, presentationParam905 = new presentationPr()) {
    for (let presentationValue1291 of presentationParam904.points)
      _presentationKt
        .encode(presentationValue1291, presentationParam905.uint32(10).fork())
        .join();
    for (let presentationValue1245 of presentationParam904.connections)
      presentationFt
        .encode(presentationValue1245, presentationParam905.uint32(18).fork())
        .join();
    return presentationParam905;
  },
  decode(presentationParam511, presentationParam512) {
    let presentationValue684 =
        presentationParam511 instanceof presentationFr
          ? presentationParam511
          : new presentationFr(presentationParam511),
      presentationValue685 =
        presentationParam512 === void 0
          ? presentationValue684.len
          : presentationValue684.pos + presentationParam512,
      presentationValue686 = presentationHelper166();
    for (; presentationValue684.pos < presentationValue685; ) {
      let presentationValue976 = presentationValue684.uint32();
      switch (presentationValue976 >>> 3) {
        case 1:
          if (presentationValue976 !== 10) break;
          presentationValue686.points.push(
            _presentationKt.decode(
              presentationValue684,
              presentationValue684.uint32(),
            ),
          );
          continue;
        case 2:
          if (presentationValue976 !== 18) break;
          presentationValue686.connections.push(
            presentationFt.decode(
              presentationValue684,
              presentationValue684.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue976 & 7) == 4 || presentationValue976 === 0) break;
      presentationValue684.skip(presentationValue976 & 7);
    }
    return presentationValue686;
  },
  create(presentationParam1284) {
    return presentationPt.fromPartial(presentationParam1284 ?? {});
  },
  fromPartial(presentationParam931) {
    let presentationValue1076 = presentationHelper166();
    return (
      (presentationValue1076.points =
        presentationParam931.points?.map((presentationParam1419) =>
          _presentationKt.fromPartial(presentationParam1419),
        ) || []),
      (presentationValue1076.connections =
        presentationParam931.connections?.map((presentationParam1420) =>
          presentationFt.fromPartial(presentationParam1420),
        ) || []),
      presentationValue1076
    );
  },
};
function presentationHelper167() {
  return {
    modelId: ``,
    type: void 0,
    connectionId: void 0,
    paragraphs: [],
  };
}
var _presentationKt = {
  encode(presentationParam680, presentationParam681 = new presentationPr()) {
    (presentationParam680.modelId !== `` &&
      presentationParam681.uint32(10).string(presentationParam680.modelId),
      presentationParam680.type !== void 0 &&
        presentationParam681.uint32(18).string(presentationParam680.type),
      presentationParam680.connectionId !== void 0 &&
        presentationParam681
          .uint32(26)
          .string(presentationParam680.connectionId));
    for (let presentationValue1261 of presentationParam680.paragraphs)
      _presentationH
        .encode(presentationValue1261, presentationParam681.uint32(42).fork())
        .join();
    return presentationParam681;
  },
  decode(presentationParam341, presentationParam342) {
    let presentationValue482 =
        presentationParam341 instanceof presentationFr
          ? presentationParam341
          : new presentationFr(presentationParam341),
      presentationValue483 =
        presentationParam342 === void 0
          ? presentationValue482.len
          : presentationValue482.pos + presentationParam342,
      presentationValue484 = presentationHelper167();
    for (; presentationValue482.pos < presentationValue483; ) {
      let presentationValue698 = presentationValue482.uint32();
      switch (presentationValue698 >>> 3) {
        case 1:
          if (presentationValue698 !== 10) break;
          presentationValue484.modelId = presentationValue482.string();
          continue;
        case 2:
          if (presentationValue698 !== 18) break;
          presentationValue484.type = presentationValue482.string();
          continue;
        case 3:
          if (presentationValue698 !== 26) break;
          presentationValue484.connectionId = presentationValue482.string();
          continue;
        case 5:
          if (presentationValue698 !== 42) break;
          presentationValue484.paragraphs.push(
            _presentationH.decode(
              presentationValue482,
              presentationValue482.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue698 & 7) == 4 || presentationValue698 === 0) break;
      presentationValue482.skip(presentationValue698 & 7);
    }
    return presentationValue484;
  },
  create(presentationParam1285) {
    return _presentationKt.fromPartial(presentationParam1285 ?? {});
  },
  fromPartial(presentationParam866) {
    let presentationValue1037 = presentationHelper167();
    return (
      (presentationValue1037.modelId = presentationParam866.modelId ?? ``),
      (presentationValue1037.type = presentationParam866.type ?? void 0),
      (presentationValue1037.connectionId =
        presentationParam866.connectionId ?? void 0),
      (presentationValue1037.paragraphs =
        presentationParam866.paragraphs?.map((presentationParam1453) =>
          _presentationH.fromPartial(presentationParam1453),
        ) || []),
      presentationValue1037
    );
  },
};
function presentationHelper168() {
  return {
    modelId: ``,
    type: void 0,
    sourceId: ``,
    destinationId: ``,
    sourcePosition: 0,
    destinationPosition: 0,
    parentTransitionId: void 0,
    siblingTransitionId: void 0,
    presentationId: void 0,
  };
}
var presentationFt = {
  encode(presentationParam178, presentationParam179 = new presentationPr()) {
    return (
      presentationParam178.modelId !== `` &&
        presentationParam179.uint32(10).string(presentationParam178.modelId),
      presentationParam178.type !== void 0 &&
        presentationParam179.uint32(18).string(presentationParam178.type),
      presentationParam178.sourceId !== `` &&
        presentationParam179.uint32(26).string(presentationParam178.sourceId),
      presentationParam178.destinationId !== `` &&
        presentationParam179
          .uint32(34)
          .string(presentationParam178.destinationId),
      presentationParam178.sourcePosition !== 0 &&
        presentationParam179
          .uint32(40)
          .uint32(presentationParam178.sourcePosition),
      presentationParam178.destinationPosition !== 0 &&
        presentationParam179
          .uint32(48)
          .uint32(presentationParam178.destinationPosition),
      presentationParam178.parentTransitionId !== void 0 &&
        presentationParam179
          .uint32(58)
          .string(presentationParam178.parentTransitionId),
      presentationParam178.siblingTransitionId !== void 0 &&
        presentationParam179
          .uint32(66)
          .string(presentationParam178.siblingTransitionId),
      presentationParam178.presentationId !== void 0 &&
        presentationParam179
          .uint32(74)
          .string(presentationParam178.presentationId),
      presentationParam179
    );
  },
  decode(presentationParam133, presentationParam134) {
    let presentationValue246 =
        presentationParam133 instanceof presentationFr
          ? presentationParam133
          : new presentationFr(presentationParam133),
      presentationValue247 =
        presentationParam134 === void 0
          ? presentationValue246.len
          : presentationValue246.pos + presentationParam134,
      presentationValue248 = presentationHelper168();
    for (; presentationValue246.pos < presentationValue247; ) {
      let presentationValue290 = presentationValue246.uint32();
      switch (presentationValue290 >>> 3) {
        case 1:
          if (presentationValue290 !== 10) break;
          presentationValue248.modelId = presentationValue246.string();
          continue;
        case 2:
          if (presentationValue290 !== 18) break;
          presentationValue248.type = presentationValue246.string();
          continue;
        case 3:
          if (presentationValue290 !== 26) break;
          presentationValue248.sourceId = presentationValue246.string();
          continue;
        case 4:
          if (presentationValue290 !== 34) break;
          presentationValue248.destinationId = presentationValue246.string();
          continue;
        case 5:
          if (presentationValue290 !== 40) break;
          presentationValue248.sourcePosition = presentationValue246.uint32();
          continue;
        case 6:
          if (presentationValue290 !== 48) break;
          presentationValue248.destinationPosition =
            presentationValue246.uint32();
          continue;
        case 7:
          if (presentationValue290 !== 58) break;
          presentationValue248.parentTransitionId =
            presentationValue246.string();
          continue;
        case 8:
          if (presentationValue290 !== 66) break;
          presentationValue248.siblingTransitionId =
            presentationValue246.string();
          continue;
        case 9:
          if (presentationValue290 !== 74) break;
          presentationValue248.presentationId = presentationValue246.string();
          continue;
      }
      if ((presentationValue290 & 7) == 4 || presentationValue290 === 0) break;
      presentationValue246.skip(presentationValue290 & 7);
    }
    return presentationValue248;
  },
  create(presentationParam1286) {
    return presentationFt.fromPartial(presentationParam1286 ?? {});
  },
  fromPartial(presentationParam415) {
    let presentationValue565 = presentationHelper168();
    return (
      (presentationValue565.modelId = presentationParam415.modelId ?? ``),
      (presentationValue565.type = presentationParam415.type ?? void 0),
      (presentationValue565.sourceId = presentationParam415.sourceId ?? ``),
      (presentationValue565.destinationId =
        presentationParam415.destinationId ?? ``),
      (presentationValue565.sourcePosition =
        presentationParam415.sourcePosition ?? 0),
      (presentationValue565.destinationPosition =
        presentationParam415.destinationPosition ?? 0),
      (presentationValue565.parentTransitionId =
        presentationParam415.parentTransitionId ?? void 0),
      (presentationValue565.siblingTransitionId =
        presentationParam415.siblingTransitionId ?? void 0),
      (presentationValue565.presentationId =
        presentationParam415.presentationId ?? void 0),
      presentationValue565
    );
  },
};
function presentationHelper169() {
  return {
    type: 0,
    side: void 0,
  };
}
var presentationM = {
  encode(presentationParam1012, presentationParam1013 = new presentationPr()) {
    return (
      presentationParam1012.type !== 0 &&
        presentationParam1013.uint32(8).int32(presentationParam1012.type),
      presentationParam1012.side !== void 0 &&
        presentationParam1013.uint32(18).string(presentationParam1012.side),
      presentationParam1013
    );
  },
  decode(presentationParam643, presentationParam644) {
    let presentationValue846 =
        presentationParam643 instanceof presentationFr
          ? presentationParam643
          : new presentationFr(presentationParam643),
      presentationValue847 =
        presentationParam644 === void 0
          ? presentationValue846.len
          : presentationValue846.pos + presentationParam644,
      presentationValue848 = presentationHelper169();
    for (; presentationValue846.pos < presentationValue847; ) {
      let presentationValue1055 = presentationValue846.uint32();
      switch (presentationValue1055 >>> 3) {
        case 1:
          if (presentationValue1055 !== 8) break;
          presentationValue848.type = presentationValue846.int32();
          continue;
        case 2:
          if (presentationValue1055 !== 18) break;
          presentationValue848.side = presentationValue846.string();
          continue;
      }
      if ((presentationValue1055 & 7) == 4 || presentationValue1055 === 0)
        break;
      presentationValue846.skip(presentationValue1055 & 7);
    }
    return presentationValue848;
  },
  create(presentationParam1287) {
    return presentationM.fromPartial(presentationParam1287 ?? {});
  },
  fromPartial(presentationParam1110) {
    let presentationValue1210 = presentationHelper169();
    return (
      (presentationValue1210.type = presentationParam1110.type ?? 0),
      (presentationValue1210.side = presentationParam1110.side ?? void 0),
      presentationValue1210
    );
  },
};
function presentationHelper170() {
  return {
    type: 0,
    anchorParagraphId: void 0,
    horizontalRelativeFrom: void 0,
    verticalRelativeFrom: void 0,
    xOffsetEmu: void 0,
    yOffsetEmu: void 0,
    horizontalAlignment: void 0,
    verticalAlignment: void 0,
    wrap: void 0,
    distanceTopEmu: void 0,
    distanceBottomEmu: void 0,
    distanceLeftEmu: void 0,
    distanceRightEmu: void 0,
    behindDocument: void 0,
    layoutInCell: void 0,
    allowOverlap: void 0,
    relativeHeight: void 0,
    locked: void 0,
  };
}
var presentationK = {
  encode(presentationParam45, presentationParam46 = new presentationPr()) {
    return (
      presentationParam45.type !== 0 &&
        presentationParam46.uint32(8).int32(presentationParam45.type),
      presentationParam45.anchorParagraphId !== void 0 &&
        presentationParam46
          .uint32(18)
          .string(presentationParam45.anchorParagraphId),
      presentationParam45.horizontalRelativeFrom !== void 0 &&
        presentationParam46
          .uint32(26)
          .string(presentationParam45.horizontalRelativeFrom),
      presentationParam45.verticalRelativeFrom !== void 0 &&
        presentationParam46
          .uint32(34)
          .string(presentationParam45.verticalRelativeFrom),
      presentationParam45.xOffsetEmu !== void 0 &&
        presentationParam46.uint32(40).int64(presentationParam45.xOffsetEmu),
      presentationParam45.yOffsetEmu !== void 0 &&
        presentationParam46.uint32(48).int64(presentationParam45.yOffsetEmu),
      presentationParam45.horizontalAlignment !== void 0 &&
        presentationParam46
          .uint32(58)
          .string(presentationParam45.horizontalAlignment),
      presentationParam45.verticalAlignment !== void 0 &&
        presentationParam46
          .uint32(66)
          .string(presentationParam45.verticalAlignment),
      presentationParam45.wrap !== void 0 &&
        presentationM
          .encode(
            presentationParam45.wrap,
            presentationParam46.uint32(74).fork(),
          )
          .join(),
      presentationParam45.distanceTopEmu !== void 0 &&
        presentationParam46
          .uint32(80)
          .int64(presentationParam45.distanceTopEmu),
      presentationParam45.distanceBottomEmu !== void 0 &&
        presentationParam46
          .uint32(88)
          .int64(presentationParam45.distanceBottomEmu),
      presentationParam45.distanceLeftEmu !== void 0 &&
        presentationParam46
          .uint32(96)
          .int64(presentationParam45.distanceLeftEmu),
      presentationParam45.distanceRightEmu !== void 0 &&
        presentationParam46
          .uint32(104)
          .int64(presentationParam45.distanceRightEmu),
      presentationParam45.behindDocument !== void 0 &&
        presentationParam46
          .uint32(112)
          .bool(presentationParam45.behindDocument),
      presentationParam45.layoutInCell !== void 0 &&
        presentationParam46.uint32(120).bool(presentationParam45.layoutInCell),
      presentationParam45.allowOverlap !== void 0 &&
        presentationParam46.uint32(128).bool(presentationParam45.allowOverlap),
      presentationParam45.relativeHeight !== void 0 &&
        presentationParam46
          .uint32(136)
          .uint32(presentationParam45.relativeHeight),
      presentationParam45.locked !== void 0 &&
        presentationParam46.uint32(144).bool(presentationParam45.locked),
      presentationParam46
    );
  },
  decode(presentationParam41, presentationParam42) {
    let presentationValue148 =
        presentationParam41 instanceof presentationFr
          ? presentationParam41
          : new presentationFr(presentationParam41),
      presentationValue149 =
        presentationParam42 === void 0
          ? presentationValue148.len
          : presentationValue148.pos + presentationParam42,
      presentationValue150 = presentationHelper170();
    for (; presentationValue148.pos < presentationValue149; ) {
      let presentationValue152 = presentationValue148.uint32();
      switch (presentationValue152 >>> 3) {
        case 1:
          if (presentationValue152 !== 8) break;
          presentationValue150.type = presentationValue148.int32();
          continue;
        case 2:
          if (presentationValue152 !== 18) break;
          presentationValue150.anchorParagraphId =
            presentationValue148.string();
          continue;
        case 3:
          if (presentationValue152 !== 26) break;
          presentationValue150.horizontalRelativeFrom =
            presentationValue148.string();
          continue;
        case 4:
          if (presentationValue152 !== 34) break;
          presentationValue150.verticalRelativeFrom =
            presentationValue148.string();
          continue;
        case 5:
          if (presentationValue152 !== 40) break;
          presentationValue150.xOffsetEmu = $(presentationValue148.int64());
          continue;
        case 6:
          if (presentationValue152 !== 48) break;
          presentationValue150.yOffsetEmu = $(presentationValue148.int64());
          continue;
        case 7:
          if (presentationValue152 !== 58) break;
          presentationValue150.horizontalAlignment =
            presentationValue148.string();
          continue;
        case 8:
          if (presentationValue152 !== 66) break;
          presentationValue150.verticalAlignment =
            presentationValue148.string();
          continue;
        case 9:
          if (presentationValue152 !== 74) break;
          presentationValue150.wrap = presentationM.decode(
            presentationValue148,
            presentationValue148.uint32(),
          );
          continue;
        case 10:
          if (presentationValue152 !== 80) break;
          presentationValue150.distanceTopEmu = $(presentationValue148.int64());
          continue;
        case 11:
          if (presentationValue152 !== 88) break;
          presentationValue150.distanceBottomEmu = $(
            presentationValue148.int64(),
          );
          continue;
        case 12:
          if (presentationValue152 !== 96) break;
          presentationValue150.distanceLeftEmu = $(
            presentationValue148.int64(),
          );
          continue;
        case 13:
          if (presentationValue152 !== 104) break;
          presentationValue150.distanceRightEmu = $(
            presentationValue148.int64(),
          );
          continue;
        case 14:
          if (presentationValue152 !== 112) break;
          presentationValue150.behindDocument = presentationValue148.bool();
          continue;
        case 15:
          if (presentationValue152 !== 120) break;
          presentationValue150.layoutInCell = presentationValue148.bool();
          continue;
        case 16:
          if (presentationValue152 !== 128) break;
          presentationValue150.allowOverlap = presentationValue148.bool();
          continue;
        case 17:
          if (presentationValue152 !== 136) break;
          presentationValue150.relativeHeight = presentationValue148.uint32();
          continue;
        case 18:
          if (presentationValue152 !== 144) break;
          presentationValue150.locked = presentationValue148.bool();
          continue;
      }
      if ((presentationValue152 & 7) == 4 || presentationValue152 === 0) break;
      presentationValue148.skip(presentationValue152 & 7);
    }
    return presentationValue150;
  },
  create(presentationParam1288) {
    return presentationK.fromPartial(presentationParam1288 ?? {});
  },
  fromPartial(presentationParam86) {
    let presentationValue199 = presentationHelper170();
    return (
      (presentationValue199.type = presentationParam86.type ?? 0),
      (presentationValue199.anchorParagraphId =
        presentationParam86.anchorParagraphId ?? void 0),
      (presentationValue199.horizontalRelativeFrom =
        presentationParam86.horizontalRelativeFrom ?? void 0),
      (presentationValue199.verticalRelativeFrom =
        presentationParam86.verticalRelativeFrom ?? void 0),
      (presentationValue199.xOffsetEmu =
        presentationParam86.xOffsetEmu ?? void 0),
      (presentationValue199.yOffsetEmu =
        presentationParam86.yOffsetEmu ?? void 0),
      (presentationValue199.horizontalAlignment =
        presentationParam86.horizontalAlignment ?? void 0),
      (presentationValue199.verticalAlignment =
        presentationParam86.verticalAlignment ?? void 0),
      (presentationValue199.wrap =
        presentationParam86.wrap !== void 0 && presentationParam86.wrap !== null
          ? presentationM.fromPartial(presentationParam86.wrap)
          : void 0),
      (presentationValue199.distanceTopEmu =
        presentationParam86.distanceTopEmu ?? void 0),
      (presentationValue199.distanceBottomEmu =
        presentationParam86.distanceBottomEmu ?? void 0),
      (presentationValue199.distanceLeftEmu =
        presentationParam86.distanceLeftEmu ?? void 0),
      (presentationValue199.distanceRightEmu =
        presentationParam86.distanceRightEmu ?? void 0),
      (presentationValue199.behindDocument =
        presentationParam86.behindDocument ?? void 0),
      (presentationValue199.layoutInCell =
        presentationParam86.layoutInCell ?? void 0),
      (presentationValue199.allowOverlap =
        presentationParam86.allowOverlap ?? void 0),
      (presentationValue199.relativeHeight =
        presentationParam86.relativeHeight ?? void 0),
      (presentationValue199.locked = presentationParam86.locked ?? void 0),
      presentationValue199
    );
  },
};
function presentationHelper171() {
  return {
    fromElementId: ``,
    fromIdx: 0,
    toElementId: ``,
    toIdx: 0,
    lineStyle: void 0,
  };
}
var presentationG = {
  encode(presentationParam538, presentationParam539 = new presentationPr()) {
    return (
      presentationParam538.fromElementId !== `` &&
        presentationParam539
          .uint32(10)
          .string(presentationParam538.fromElementId),
      presentationParam538.fromIdx !== 0 &&
        presentationParam539.uint32(16).int32(presentationParam538.fromIdx),
      presentationParam538.toElementId !== `` &&
        presentationParam539
          .uint32(26)
          .string(presentationParam538.toElementId),
      presentationParam538.toIdx !== 0 &&
        presentationParam539.uint32(32).int32(presentationParam538.toIdx),
      presentationParam538.lineStyle !== void 0 &&
        presentationUnderscore
          .encode(
            presentationParam538.lineStyle,
            presentationParam539.uint32(42).fork(),
          )
          .join(),
      presentationParam539
    );
  },
  decode(presentationParam290, presentationParam291) {
    let presentationValue428 =
        presentationParam290 instanceof presentationFr
          ? presentationParam290
          : new presentationFr(presentationParam290),
      presentationValue429 =
        presentationParam291 === void 0
          ? presentationValue428.len
          : presentationValue428.pos + presentationParam291,
      presentationValue430 = presentationHelper171();
    for (; presentationValue428.pos < presentationValue429; ) {
      let presentationValue597 = presentationValue428.uint32();
      switch (presentationValue597 >>> 3) {
        case 1:
          if (presentationValue597 !== 10) break;
          presentationValue430.fromElementId = presentationValue428.string();
          continue;
        case 2:
          if (presentationValue597 !== 16) break;
          presentationValue430.fromIdx = presentationValue428.int32();
          continue;
        case 3:
          if (presentationValue597 !== 26) break;
          presentationValue430.toElementId = presentationValue428.string();
          continue;
        case 4:
          if (presentationValue597 !== 32) break;
          presentationValue430.toIdx = presentationValue428.int32();
          continue;
        case 5:
          if (presentationValue597 !== 42) break;
          presentationValue430.lineStyle = presentationUnderscore.decode(
            presentationValue428,
            presentationValue428.uint32(),
          );
          continue;
      }
      if ((presentationValue597 & 7) == 4 || presentationValue597 === 0) break;
      presentationValue428.skip(presentationValue597 & 7);
    }
    return presentationValue430;
  },
  create(presentationParam1289) {
    return presentationG.fromPartial(presentationParam1289 ?? {});
  },
  fromPartial(presentationParam731) {
    let presentationValue914 = presentationHelper171();
    return (
      (presentationValue914.fromElementId =
        presentationParam731.fromElementId ?? ``),
      (presentationValue914.fromIdx = presentationParam731.fromIdx ?? 0),
      (presentationValue914.toElementId =
        presentationParam731.toElementId ?? ``),
      (presentationValue914.toIdx = presentationParam731.toIdx ?? 0),
      (presentationValue914.lineStyle =
        presentationParam731.lineStyle !== void 0 &&
        presentationParam731.lineStyle !== null
          ? presentationUnderscore.fromPartial(presentationParam731.lineStyle)
          : void 0),
      presentationValue914
    );
  },
};
function presentationHelper172() {
  return {
    rows: [],
    columnWidths: [],
    properties: void 0,
  };
}
var _presentationZt = {
  encode(presentationParam747, presentationParam748 = new presentationPr()) {
    for (let presentationValue1304 of presentationParam747.rows)
      _presentationVt
        .encode(presentationValue1304, presentationParam748.uint32(10).fork())
        .join();
    presentationParam748.uint32(18).fork();
    for (let presentationValue1338 of presentationParam747.columnWidths)
      presentationParam748.int32(presentationValue1338);
    return (
      presentationParam748.join(),
      presentationParam747.properties !== void 0 &&
        _presentationBt
          .encode(
            presentationParam747.properties,
            presentationParam748.uint32(26).fork(),
          )
          .join(),
      presentationParam748
    );
  },
  decode(presentationParam282, presentationParam283) {
    let presentationValue419 =
        presentationParam282 instanceof presentationFr
          ? presentationParam282
          : new presentationFr(presentationParam282),
      presentationValue420 =
        presentationParam283 === void 0
          ? presentationValue419.len
          : presentationValue419.pos + presentationParam283,
      presentationValue421 = presentationHelper172();
    for (; presentationValue419.pos < presentationValue420; ) {
      let presentationValue586 = presentationValue419.uint32();
      switch (presentationValue586 >>> 3) {
        case 1:
          if (presentationValue586 !== 10) break;
          presentationValue421.rows.push(
            _presentationVt.decode(
              presentationValue419,
              presentationValue419.uint32(),
            ),
          );
          continue;
        case 2:
          if (presentationValue586 === 16) {
            presentationValue421.columnWidths.push(
              presentationValue419.int32(),
            );
            continue;
          }
          if (presentationValue586 === 18) {
            let presentationValue1197 =
              presentationValue419.uint32() + presentationValue419.pos;
            for (; presentationValue419.pos < presentationValue1197; )
              presentationValue421.columnWidths.push(
                presentationValue419.int32(),
              );
            continue;
          }
          break;
        case 3:
          if (presentationValue586 !== 26) break;
          presentationValue421.properties = _presentationBt.decode(
            presentationValue419,
            presentationValue419.uint32(),
          );
          continue;
      }
      if ((presentationValue586 & 7) == 4 || presentationValue586 === 0) break;
      presentationValue419.skip(presentationValue586 & 7);
    }
    return presentationValue421;
  },
  create(presentationParam1290) {
    return _presentationZt.fromPartial(presentationParam1290 ?? {});
  },
  fromPartial(presentationParam798) {
    let presentationValue977 = presentationHelper172();
    return (
      (presentationValue977.rows =
        presentationParam798.rows?.map((presentationParam1421) =>
          _presentationVt.fromPartial(presentationParam1421),
        ) || []),
      (presentationValue977.columnWidths =
        presentationParam798.columnWidths?.map(
          (presentationParam1483) => presentationParam1483,
        ) || []),
      (presentationValue977.properties =
        presentationParam798.properties !== void 0 &&
        presentationParam798.properties !== null
          ? _presentationBt.fromPartial(presentationParam798.properties)
          : void 0),
      presentationValue977
    );
  },
};
function presentationHelper173() {
  return {
    fill: void 0,
    rightToLeft: void 0,
    firstRow: void 0,
    firstColumn: void 0,
    lastRow: void 0,
    lastColumn: void 0,
    bandedRows: void 0,
    bandedColumns: void 0,
    styleId: void 0,
    effects: [],
    styleXml: void 0,
    alignment: void 0,
    borders: void 0,
    cellMargins: void 0,
    keepTogether: void 0,
  };
}
var _presentationBt = {
  encode(presentationParam68, presentationParam69 = new presentationPr()) {
    (presentationParam68.fill !== void 0 &&
      presentationHn
        .encode(presentationParam68.fill, presentationParam69.uint32(10).fork())
        .join(),
      presentationParam68.rightToLeft !== void 0 &&
        presentationParam69.uint32(16).bool(presentationParam68.rightToLeft),
      presentationParam68.firstRow !== void 0 &&
        presentationParam69.uint32(24).bool(presentationParam68.firstRow),
      presentationParam68.firstColumn !== void 0 &&
        presentationParam69.uint32(32).bool(presentationParam68.firstColumn),
      presentationParam68.lastRow !== void 0 &&
        presentationParam69.uint32(40).bool(presentationParam68.lastRow),
      presentationParam68.lastColumn !== void 0 &&
        presentationParam69.uint32(48).bool(presentationParam68.lastColumn),
      presentationParam68.bandedRows !== void 0 &&
        presentationParam69.uint32(56).bool(presentationParam68.bandedRows),
      presentationParam68.bandedColumns !== void 0 &&
        presentationParam69.uint32(64).bool(presentationParam68.bandedColumns),
      presentationParam68.styleId !== void 0 &&
        presentationParam69.uint32(74).string(presentationParam68.styleId));
    for (let presentationValue1292 of presentationParam68.effects)
      __presentationT
        .encode(presentationValue1292, presentationParam69.uint32(82).fork())
        .join();
    return (
      presentationParam68.styleXml !== void 0 &&
        presentationParam69.uint32(90).string(presentationParam68.styleXml),
      presentationParam68.alignment !== void 0 &&
        presentationParam69.uint32(96).int32(presentationParam68.alignment),
      presentationParam68.borders !== void 0 &&
        _presentationNt
          .encode(
            presentationParam68.borders,
            presentationParam69.uint32(106).fork(),
          )
          .join(),
      presentationParam68.cellMargins !== void 0 &&
        presentationIt
          .encode(
            presentationParam68.cellMargins,
            presentationParam69.uint32(114).fork(),
          )
          .join(),
      presentationParam68.keepTogether !== void 0 &&
        presentationParam69.uint32(120).bool(presentationParam68.keepTogether),
      presentationParam69
    );
  },
  decode(presentationParam53, presentationParam54) {
    let presentationValue158 =
        presentationParam53 instanceof presentationFr
          ? presentationParam53
          : new presentationFr(presentationParam53),
      presentationValue159 =
        presentationParam54 === void 0
          ? presentationValue158.len
          : presentationValue158.pos + presentationParam54,
      presentationValue160 = presentationHelper173();
    for (; presentationValue158.pos < presentationValue159; ) {
      let presentationValue168 = presentationValue158.uint32();
      switch (presentationValue168 >>> 3) {
        case 1:
          if (presentationValue168 !== 10) break;
          presentationValue160.fill = presentationHn.decode(
            presentationValue158,
            presentationValue158.uint32(),
          );
          continue;
        case 2:
          if (presentationValue168 !== 16) break;
          presentationValue160.rightToLeft = presentationValue158.bool();
          continue;
        case 3:
          if (presentationValue168 !== 24) break;
          presentationValue160.firstRow = presentationValue158.bool();
          continue;
        case 4:
          if (presentationValue168 !== 32) break;
          presentationValue160.firstColumn = presentationValue158.bool();
          continue;
        case 5:
          if (presentationValue168 !== 40) break;
          presentationValue160.lastRow = presentationValue158.bool();
          continue;
        case 6:
          if (presentationValue168 !== 48) break;
          presentationValue160.lastColumn = presentationValue158.bool();
          continue;
        case 7:
          if (presentationValue168 !== 56) break;
          presentationValue160.bandedRows = presentationValue158.bool();
          continue;
        case 8:
          if (presentationValue168 !== 64) break;
          presentationValue160.bandedColumns = presentationValue158.bool();
          continue;
        case 9:
          if (presentationValue168 !== 74) break;
          presentationValue160.styleId = presentationValue158.string();
          continue;
        case 10:
          if (presentationValue168 !== 82) break;
          presentationValue160.effects.push(
            __presentationT.decode(
              presentationValue158,
              presentationValue158.uint32(),
            ),
          );
          continue;
        case 11:
          if (presentationValue168 !== 90) break;
          presentationValue160.styleXml = presentationValue158.string();
          continue;
        case 12:
          if (presentationValue168 !== 96) break;
          presentationValue160.alignment = presentationValue158.int32();
          continue;
        case 13:
          if (presentationValue168 !== 106) break;
          presentationValue160.borders = _presentationNt.decode(
            presentationValue158,
            presentationValue158.uint32(),
          );
          continue;
        case 14:
          if (presentationValue168 !== 114) break;
          presentationValue160.cellMargins = presentationIt.decode(
            presentationValue158,
            presentationValue158.uint32(),
          );
          continue;
        case 15:
          if (presentationValue168 !== 120) break;
          presentationValue160.keepTogether = presentationValue158.bool();
          continue;
      }
      if ((presentationValue168 & 7) == 4 || presentationValue168 === 0) break;
      presentationValue158.skip(presentationValue168 & 7);
    }
    return presentationValue160;
  },
  create(presentationParam1357) {
    return _presentationBt.fromPartial(presentationParam1357 ?? {});
  },
  fromPartial(presentationParam137) {
    let presentationValue253 = presentationHelper173();
    return (
      (presentationValue253.fill =
        presentationParam137.fill !== void 0 &&
        presentationParam137.fill !== null
          ? presentationHn.fromPartial(presentationParam137.fill)
          : void 0),
      (presentationValue253.rightToLeft =
        presentationParam137.rightToLeft ?? void 0),
      (presentationValue253.firstRow = presentationParam137.firstRow ?? void 0),
      (presentationValue253.firstColumn =
        presentationParam137.firstColumn ?? void 0),
      (presentationValue253.lastRow = presentationParam137.lastRow ?? void 0),
      (presentationValue253.lastColumn =
        presentationParam137.lastColumn ?? void 0),
      (presentationValue253.bandedRows =
        presentationParam137.bandedRows ?? void 0),
      (presentationValue253.bandedColumns =
        presentationParam137.bandedColumns ?? void 0),
      (presentationValue253.styleId = presentationParam137.styleId ?? void 0),
      (presentationValue253.effects =
        presentationParam137.effects?.map((presentationParam1454) =>
          __presentationT.fromPartial(presentationParam1454),
        ) || []),
      (presentationValue253.styleXml = presentationParam137.styleXml ?? void 0),
      (presentationValue253.alignment =
        presentationParam137.alignment ?? void 0),
      (presentationValue253.borders =
        presentationParam137.borders !== void 0 &&
        presentationParam137.borders !== null
          ? _presentationNt.fromPartial(presentationParam137.borders)
          : void 0),
      (presentationValue253.cellMargins =
        presentationParam137.cellMargins !== void 0 &&
        presentationParam137.cellMargins !== null
          ? presentationIt.fromPartial(presentationParam137.cellMargins)
          : void 0),
      (presentationValue253.keepTogether =
        presentationParam137.keepTogether ?? void 0),
      presentationValue253
    );
  },
};
function presentationHelper174() {
  return {
    line: void 0,
    none: void 0,
  };
}
var _presentationMt = {
  encode(presentationParam977, presentationParam978 = new presentationPr()) {
    return (
      presentationParam977.line !== void 0 &&
        presentationJn
          .encode(
            presentationParam977.line,
            presentationParam978.uint32(10).fork(),
          )
          .join(),
      presentationParam977.none !== void 0 &&
        presentationParam978.uint32(16).bool(presentationParam977.none),
      presentationParam978
    );
  },
  decode(presentationParam603, presentationParam604) {
    let presentationValue794 =
        presentationParam603 instanceof presentationFr
          ? presentationParam603
          : new presentationFr(presentationParam603),
      presentationValue795 =
        presentationParam604 === void 0
          ? presentationValue794.len
          : presentationValue794.pos + presentationParam604,
      presentationValue796 = presentationHelper174();
    for (; presentationValue794.pos < presentationValue795; ) {
      let presentationValue1031 = presentationValue794.uint32();
      switch (presentationValue1031 >>> 3) {
        case 1:
          if (presentationValue1031 !== 10) break;
          presentationValue796.line = presentationJn.decode(
            presentationValue794,
            presentationValue794.uint32(),
          );
          continue;
        case 2:
          if (presentationValue1031 !== 16) break;
          presentationValue796.none = presentationValue794.bool();
          continue;
      }
      if ((presentationValue1031 & 7) == 4 || presentationValue1031 === 0)
        break;
      presentationValue794.skip(presentationValue1031 & 7);
    }
    return presentationValue796;
  },
  create(presentationParam1358) {
    return _presentationMt.fromPartial(presentationParam1358 ?? {});
  },
  fromPartial(presentationParam991) {
    let presentationValue1113 = presentationHelper174();
    return (
      (presentationValue1113.line =
        presentationParam991.line !== void 0 &&
        presentationParam991.line !== null
          ? presentationJn.fromPartial(presentationParam991.line)
          : void 0),
      (presentationValue1113.none = presentationParam991.none ?? void 0),
      presentationValue1113
    );
  },
};
function is() {
  return {
    top: void 0,
    right: void 0,
    bottom: void 0,
    left: void 0,
    insideHorizontal: void 0,
    insideVertical: void 0,
  };
}
var _presentationNt = {
  encode(presentationParam305, presentationParam306 = new presentationPr()) {
    return (
      presentationParam305.top !== void 0 &&
        _presentationMt
          .encode(
            presentationParam305.top,
            presentationParam306.uint32(10).fork(),
          )
          .join(),
      presentationParam305.right !== void 0 &&
        _presentationMt
          .encode(
            presentationParam305.right,
            presentationParam306.uint32(18).fork(),
          )
          .join(),
      presentationParam305.bottom !== void 0 &&
        _presentationMt
          .encode(
            presentationParam305.bottom,
            presentationParam306.uint32(26).fork(),
          )
          .join(),
      presentationParam305.left !== void 0 &&
        _presentationMt
          .encode(
            presentationParam305.left,
            presentationParam306.uint32(34).fork(),
          )
          .join(),
      presentationParam305.insideHorizontal !== void 0 &&
        _presentationMt
          .encode(
            presentationParam305.insideHorizontal,
            presentationParam306.uint32(42).fork(),
          )
          .join(),
      presentationParam305.insideVertical !== void 0 &&
        _presentationMt
          .encode(
            presentationParam305.insideVertical,
            presentationParam306.uint32(50).fork(),
          )
          .join(),
      presentationParam306
    );
  },
  decode(presentationParam185, presentationParam186) {
    let presentationValue306 =
        presentationParam185 instanceof presentationFr
          ? presentationParam185
          : new presentationFr(presentationParam185),
      presentationValue307 =
        presentationParam186 === void 0
          ? presentationValue306.len
          : presentationValue306.pos + presentationParam186,
      presentationValue308 = is();
    for (; presentationValue306.pos < presentationValue307; ) {
      let presentationValue416 = presentationValue306.uint32();
      switch (presentationValue416 >>> 3) {
        case 1:
          if (presentationValue416 !== 10) break;
          presentationValue308.top = _presentationMt.decode(
            presentationValue306,
            presentationValue306.uint32(),
          );
          continue;
        case 2:
          if (presentationValue416 !== 18) break;
          presentationValue308.right = _presentationMt.decode(
            presentationValue306,
            presentationValue306.uint32(),
          );
          continue;
        case 3:
          if (presentationValue416 !== 26) break;
          presentationValue308.bottom = _presentationMt.decode(
            presentationValue306,
            presentationValue306.uint32(),
          );
          continue;
        case 4:
          if (presentationValue416 !== 34) break;
          presentationValue308.left = _presentationMt.decode(
            presentationValue306,
            presentationValue306.uint32(),
          );
          continue;
        case 5:
          if (presentationValue416 !== 42) break;
          presentationValue308.insideHorizontal = _presentationMt.decode(
            presentationValue306,
            presentationValue306.uint32(),
          );
          continue;
        case 6:
          if (presentationValue416 !== 50) break;
          presentationValue308.insideVertical = _presentationMt.decode(
            presentationValue306,
            presentationValue306.uint32(),
          );
          continue;
      }
      if ((presentationValue416 & 7) == 4 || presentationValue416 === 0) break;
      presentationValue306.skip(presentationValue416 & 7);
    }
    return presentationValue308;
  },
  create(presentationParam1291) {
    return _presentationNt.fromPartial(presentationParam1291 ?? {});
  },
  fromPartial(presentationParam215) {
    let presentationValue342 = is();
    return (
      (presentationValue342.top =
        presentationParam215.top !== void 0 && presentationParam215.top !== null
          ? _presentationMt.fromPartial(presentationParam215.top)
          : void 0),
      (presentationValue342.right =
        presentationParam215.right !== void 0 &&
        presentationParam215.right !== null
          ? _presentationMt.fromPartial(presentationParam215.right)
          : void 0),
      (presentationValue342.bottom =
        presentationParam215.bottom !== void 0 &&
        presentationParam215.bottom !== null
          ? _presentationMt.fromPartial(presentationParam215.bottom)
          : void 0),
      (presentationValue342.left =
        presentationParam215.left !== void 0 &&
        presentationParam215.left !== null
          ? _presentationMt.fromPartial(presentationParam215.left)
          : void 0),
      (presentationValue342.insideHorizontal =
        presentationParam215.insideHorizontal !== void 0 &&
        presentationParam215.insideHorizontal !== null
          ? _presentationMt.fromPartial(presentationParam215.insideHorizontal)
          : void 0),
      (presentationValue342.insideVertical =
        presentationParam215.insideVertical !== void 0 &&
        presentationParam215.insideVertical !== null
          ? _presentationMt.fromPartial(presentationParam215.insideVertical)
          : void 0),
      presentationValue342
    );
  },
};
function os() {
  return {
    top: void 0,
    right: void 0,
    bottom: void 0,
    left: void 0,
    diagonalDown: void 0,
    diagonalUp: void 0,
  };
}
var _presentationFt = {
  encode(presentationParam321, presentationParam322 = new presentationPr()) {
    return (
      presentationParam321.top !== void 0 &&
        _presentationMt
          .encode(
            presentationParam321.top,
            presentationParam322.uint32(10).fork(),
          )
          .join(),
      presentationParam321.right !== void 0 &&
        _presentationMt
          .encode(
            presentationParam321.right,
            presentationParam322.uint32(18).fork(),
          )
          .join(),
      presentationParam321.bottom !== void 0 &&
        _presentationMt
          .encode(
            presentationParam321.bottom,
            presentationParam322.uint32(26).fork(),
          )
          .join(),
      presentationParam321.left !== void 0 &&
        _presentationMt
          .encode(
            presentationParam321.left,
            presentationParam322.uint32(34).fork(),
          )
          .join(),
      presentationParam321.diagonalDown !== void 0 &&
        _presentationMt
          .encode(
            presentationParam321.diagonalDown,
            presentationParam322.uint32(42).fork(),
          )
          .join(),
      presentationParam321.diagonalUp !== void 0 &&
        _presentationMt
          .encode(
            presentationParam321.diagonalUp,
            presentationParam322.uint32(50).fork(),
          )
          .join(),
      presentationParam322
    );
  },
  decode(presentationParam196, presentationParam197) {
    let presentationValue317 =
        presentationParam196 instanceof presentationFr
          ? presentationParam196
          : new presentationFr(presentationParam196),
      presentationValue318 =
        presentationParam197 === void 0
          ? presentationValue317.len
          : presentationValue317.pos + presentationParam197,
      presentationValue319 = os();
    for (; presentationValue317.pos < presentationValue318; ) {
      let presentationValue426 = presentationValue317.uint32();
      switch (presentationValue426 >>> 3) {
        case 1:
          if (presentationValue426 !== 10) break;
          presentationValue319.top = _presentationMt.decode(
            presentationValue317,
            presentationValue317.uint32(),
          );
          continue;
        case 2:
          if (presentationValue426 !== 18) break;
          presentationValue319.right = _presentationMt.decode(
            presentationValue317,
            presentationValue317.uint32(),
          );
          continue;
        case 3:
          if (presentationValue426 !== 26) break;
          presentationValue319.bottom = _presentationMt.decode(
            presentationValue317,
            presentationValue317.uint32(),
          );
          continue;
        case 4:
          if (presentationValue426 !== 34) break;
          presentationValue319.left = _presentationMt.decode(
            presentationValue317,
            presentationValue317.uint32(),
          );
          continue;
        case 5:
          if (presentationValue426 !== 42) break;
          presentationValue319.diagonalDown = _presentationMt.decode(
            presentationValue317,
            presentationValue317.uint32(),
          );
          continue;
        case 6:
          if (presentationValue426 !== 50) break;
          presentationValue319.diagonalUp = _presentationMt.decode(
            presentationValue317,
            presentationValue317.uint32(),
          );
          continue;
      }
      if ((presentationValue426 & 7) == 4 || presentationValue426 === 0) break;
      presentationValue317.skip(presentationValue426 & 7);
    }
    return presentationValue319;
  },
  create(presentationParam1292) {
    return _presentationFt.fromPartial(presentationParam1292 ?? {});
  },
  fromPartial(presentationParam244) {
    let presentationValue372 = os();
    return (
      (presentationValue372.top =
        presentationParam244.top !== void 0 && presentationParam244.top !== null
          ? _presentationMt.fromPartial(presentationParam244.top)
          : void 0),
      (presentationValue372.right =
        presentationParam244.right !== void 0 &&
        presentationParam244.right !== null
          ? _presentationMt.fromPartial(presentationParam244.right)
          : void 0),
      (presentationValue372.bottom =
        presentationParam244.bottom !== void 0 &&
        presentationParam244.bottom !== null
          ? _presentationMt.fromPartial(presentationParam244.bottom)
          : void 0),
      (presentationValue372.left =
        presentationParam244.left !== void 0 &&
        presentationParam244.left !== null
          ? _presentationMt.fromPartial(presentationParam244.left)
          : void 0),
      (presentationValue372.diagonalDown =
        presentationParam244.diagonalDown !== void 0 &&
        presentationParam244.diagonalDown !== null
          ? _presentationMt.fromPartial(presentationParam244.diagonalDown)
          : void 0),
      (presentationValue372.diagonalUp =
        presentationParam244.diagonalUp !== void 0 &&
        presentationParam244.diagonalUp !== null
          ? _presentationMt.fromPartial(presentationParam244.diagonalUp)
          : void 0),
      presentationValue372
    );
  },
};
function presentationHelper175() {
  return {
    left: void 0,
    right: void 0,
    top: void 0,
    bottom: void 0,
  };
}
var presentationIt = {
  encode(presentationParam815, presentationParam816 = new presentationPr()) {
    return (
      presentationParam815.left !== void 0 &&
        presentationParam816.uint32(8).int32(presentationParam815.left),
      presentationParam815.right !== void 0 &&
        presentationParam816.uint32(16).int32(presentationParam815.right),
      presentationParam815.top !== void 0 &&
        presentationParam816.uint32(24).int32(presentationParam815.top),
      presentationParam815.bottom !== void 0 &&
        presentationParam816.uint32(32).int32(presentationParam815.bottom),
      presentationParam816
    );
  },
  decode(presentationParam424, presentationParam425) {
    let presentationValue571 =
        presentationParam424 instanceof presentationFr
          ? presentationParam424
          : new presentationFr(presentationParam424),
      presentationValue572 =
        presentationParam425 === void 0
          ? presentationValue571.len
          : presentationValue571.pos + presentationParam425,
      presentationValue573 = presentationHelper175();
    for (; presentationValue571.pos < presentationValue572; ) {
      let presentationValue860 = presentationValue571.uint32();
      switch (presentationValue860 >>> 3) {
        case 1:
          if (presentationValue860 !== 8) break;
          presentationValue573.left = presentationValue571.int32();
          continue;
        case 2:
          if (presentationValue860 !== 16) break;
          presentationValue573.right = presentationValue571.int32();
          continue;
        case 3:
          if (presentationValue860 !== 24) break;
          presentationValue573.top = presentationValue571.int32();
          continue;
        case 4:
          if (presentationValue860 !== 32) break;
          presentationValue573.bottom = presentationValue571.int32();
          continue;
      }
      if ((presentationValue860 & 7) == 4 || presentationValue860 === 0) break;
      presentationValue571.skip(presentationValue860 & 7);
    }
    return presentationValue573;
  },
  create(presentationParam1293) {
    return presentationIt.fromPartial(presentationParam1293 ?? {});
  },
  fromPartial(presentationParam985) {
    let presentationValue1102 = presentationHelper175();
    return (
      (presentationValue1102.left = presentationParam985.left ?? void 0),
      (presentationValue1102.right = presentationParam985.right ?? void 0),
      (presentationValue1102.top = presentationParam985.top ?? void 0),
      (presentationValue1102.bottom = presentationParam985.bottom ?? void 0),
      presentationValue1102
    );
  },
};
function presentationHelper176() {
  return {
    id: void 0,
    text: ``,
    textStyle: void 0,
    paragraphs: [],
    levelsStyles: [],
    fill: void 0,
    lines: void 0,
    gridSpan: void 0,
    rowSpan: void 0,
    horizontalMerge: void 0,
    verticalMerge: void 0,
    textDirection: void 0,
    marginLeft: void 0,
    marginRight: void 0,
    marginTop: void 0,
    marginBottom: void 0,
    anchor: void 0,
    anchorCenter: void 0,
    horizontalOverflow: void 0,
    elements: [],
  };
}
var _presentationPt = {
  encode(presentationParam43, presentationParam44 = new presentationPr()) {
    (presentationParam43.id !== void 0 &&
      presentationParam44.uint32(58).string(presentationParam43.id),
      presentationParam43.text !== `` &&
        presentationParam44.uint32(10).string(presentationParam43.text),
      presentationParam43.textStyle !== void 0 &&
        presentationOr
          .encode(
            presentationParam43.textStyle,
            presentationParam44.uint32(18).fork(),
          )
          .join());
    for (let presentationValue1262 of presentationParam43.paragraphs)
      _presentationH
        .encode(presentationValue1262, presentationParam44.uint32(26).fork())
        .join();
    for (let presentationValue1246 of presentationParam43.levelsStyles)
      presentationValue26
        .encode(presentationValue1246, presentationParam44.uint32(34).fork())
        .join();
    (presentationParam43.fill !== void 0 &&
      presentationHn
        .encode(presentationParam43.fill, presentationParam44.uint32(42).fork())
        .join(),
      presentationParam43.lines !== void 0 &&
        _presentationRt
          .encode(
            presentationParam43.lines,
            presentationParam44.uint32(50).fork(),
          )
          .join(),
      presentationParam43.gridSpan !== void 0 &&
        presentationParam44.uint32(64).int32(presentationParam43.gridSpan),
      presentationParam43.rowSpan !== void 0 &&
        presentationParam44.uint32(72).int32(presentationParam43.rowSpan),
      presentationParam43.horizontalMerge !== void 0 &&
        presentationParam44
          .uint32(80)
          .bool(presentationParam43.horizontalMerge),
      presentationParam43.verticalMerge !== void 0 &&
        presentationParam44.uint32(88).bool(presentationParam43.verticalMerge),
      presentationParam43.textDirection !== void 0 &&
        presentationParam44
          .uint32(98)
          .string(presentationParam43.textDirection),
      presentationParam43.marginLeft !== void 0 &&
        presentationParam44.uint32(104).int32(presentationParam43.marginLeft),
      presentationParam43.marginRight !== void 0 &&
        presentationParam44.uint32(112).int32(presentationParam43.marginRight),
      presentationParam43.marginTop !== void 0 &&
        presentationParam44.uint32(120).int32(presentationParam43.marginTop),
      presentationParam43.marginBottom !== void 0 &&
        presentationParam44.uint32(128).int32(presentationParam43.marginBottom),
      presentationParam43.anchor !== void 0 &&
        presentationParam44.uint32(138).string(presentationParam43.anchor),
      presentationParam43.anchorCenter !== void 0 &&
        presentationParam44.uint32(144).bool(presentationParam43.anchorCenter),
      presentationParam43.horizontalOverflow !== void 0 &&
        presentationParam44
          .uint32(154)
          .string(presentationParam43.horizontalOverflow));
    for (let presentationValue1268 of presentationParam43.elements)
      _presentationO
        .encode(presentationValue1268, presentationParam44.uint32(162).fork())
        .join();
    return presentationParam44;
  },
  decode(presentationParam31, presentationParam32) {
    let presentationValue136 =
        presentationParam31 instanceof presentationFr
          ? presentationParam31
          : new presentationFr(presentationParam31),
      presentationValue137 =
        presentationParam32 === void 0
          ? presentationValue136.len
          : presentationValue136.pos + presentationParam32,
      presentationValue138 = presentationHelper176();
    for (; presentationValue136.pos < presentationValue137; ) {
      let presentationValue147 = presentationValue136.uint32();
      switch (presentationValue147 >>> 3) {
        case 7:
          if (presentationValue147 !== 58) break;
          presentationValue138.id = presentationValue136.string();
          continue;
        case 1:
          if (presentationValue147 !== 10) break;
          presentationValue138.text = presentationValue136.string();
          continue;
        case 2:
          if (presentationValue147 !== 18) break;
          presentationValue138.textStyle = presentationOr.decode(
            presentationValue136,
            presentationValue136.uint32(),
          );
          continue;
        case 3:
          if (presentationValue147 !== 26) break;
          presentationValue138.paragraphs.push(
            _presentationH.decode(
              presentationValue136,
              presentationValue136.uint32(),
            ),
          );
          continue;
        case 4:
          if (presentationValue147 !== 34) break;
          presentationValue138.levelsStyles.push(
            presentationValue26.decode(
              presentationValue136,
              presentationValue136.uint32(),
            ),
          );
          continue;
        case 5:
          if (presentationValue147 !== 42) break;
          presentationValue138.fill = presentationHn.decode(
            presentationValue136,
            presentationValue136.uint32(),
          );
          continue;
        case 6:
          if (presentationValue147 !== 50) break;
          presentationValue138.lines = _presentationRt.decode(
            presentationValue136,
            presentationValue136.uint32(),
          );
          continue;
        case 8:
          if (presentationValue147 !== 64) break;
          presentationValue138.gridSpan = presentationValue136.int32();
          continue;
        case 9:
          if (presentationValue147 !== 72) break;
          presentationValue138.rowSpan = presentationValue136.int32();
          continue;
        case 10:
          if (presentationValue147 !== 80) break;
          presentationValue138.horizontalMerge = presentationValue136.bool();
          continue;
        case 11:
          if (presentationValue147 !== 88) break;
          presentationValue138.verticalMerge = presentationValue136.bool();
          continue;
        case 12:
          if (presentationValue147 !== 98) break;
          presentationValue138.textDirection = presentationValue136.string();
          continue;
        case 13:
          if (presentationValue147 !== 104) break;
          presentationValue138.marginLeft = presentationValue136.int32();
          continue;
        case 14:
          if (presentationValue147 !== 112) break;
          presentationValue138.marginRight = presentationValue136.int32();
          continue;
        case 15:
          if (presentationValue147 !== 120) break;
          presentationValue138.marginTop = presentationValue136.int32();
          continue;
        case 16:
          if (presentationValue147 !== 128) break;
          presentationValue138.marginBottom = presentationValue136.int32();
          continue;
        case 17:
          if (presentationValue147 !== 138) break;
          presentationValue138.anchor = presentationValue136.string();
          continue;
        case 18:
          if (presentationValue147 !== 144) break;
          presentationValue138.anchorCenter = presentationValue136.bool();
          continue;
        case 19:
          if (presentationValue147 !== 154) break;
          presentationValue138.horizontalOverflow =
            presentationValue136.string();
          continue;
        case 20:
          if (presentationValue147 !== 162) break;
          presentationValue138.elements.push(
            _presentationO.decode(
              presentationValue136,
              presentationValue136.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue147 & 7) == 4 || presentationValue147 === 0) break;
      presentationValue136.skip(presentationValue147 & 7);
    }
    return presentationValue138;
  },
  create(presentationParam1294) {
    return _presentationPt.fromPartial(presentationParam1294 ?? {});
  },
  fromPartial(presentationParam65) {
    let presentationValue176 = presentationHelper176();
    return (
      (presentationValue176.id = presentationParam65.id ?? void 0),
      (presentationValue176.text = presentationParam65.text ?? ``),
      (presentationValue176.textStyle =
        presentationParam65.textStyle !== void 0 &&
        presentationParam65.textStyle !== null
          ? presentationOr.fromPartial(presentationParam65.textStyle)
          : void 0),
      (presentationValue176.paragraphs =
        presentationParam65.paragraphs?.map((presentationParam1455) =>
          _presentationH.fromPartial(presentationParam1455),
        ) || []),
      (presentationValue176.levelsStyles =
        presentationParam65.levelsStyles?.map((presentationParam1456) =>
          presentationValue26.fromPartial(presentationParam1456),
        ) || []),
      (presentationValue176.fill =
        presentationParam65.fill !== void 0 && presentationParam65.fill !== null
          ? presentationHn.fromPartial(presentationParam65.fill)
          : void 0),
      (presentationValue176.lines =
        presentationParam65.lines !== void 0 &&
        presentationParam65.lines !== null
          ? _presentationRt.fromPartial(presentationParam65.lines)
          : void 0),
      (presentationValue176.gridSpan = presentationParam65.gridSpan ?? void 0),
      (presentationValue176.rowSpan = presentationParam65.rowSpan ?? void 0),
      (presentationValue176.horizontalMerge =
        presentationParam65.horizontalMerge ?? void 0),
      (presentationValue176.verticalMerge =
        presentationParam65.verticalMerge ?? void 0),
      (presentationValue176.textDirection =
        presentationParam65.textDirection ?? void 0),
      (presentationValue176.marginLeft =
        presentationParam65.marginLeft ?? void 0),
      (presentationValue176.marginRight =
        presentationParam65.marginRight ?? void 0),
      (presentationValue176.marginTop =
        presentationParam65.marginTop ?? void 0),
      (presentationValue176.marginBottom =
        presentationParam65.marginBottom ?? void 0),
      (presentationValue176.anchor = presentationParam65.anchor ?? void 0),
      (presentationValue176.anchorCenter =
        presentationParam65.anchorCenter ?? void 0),
      (presentationValue176.horizontalOverflow =
        presentationParam65.horizontalOverflow ?? void 0),
      (presentationValue176.elements =
        presentationParam65.elements?.map((presentationParam1457) =>
          _presentationO.fromPartial(presentationParam1457),
        ) || []),
      presentationValue176
    );
  },
};
function fs() {
  return {
    top: void 0,
    right: void 0,
    bottom: void 0,
    left: void 0,
    diagonalDown: void 0,
    diagonalUp: void 0,
  };
}
var _presentationRt = {
  encode(presentationParam323, presentationParam324 = new presentationPr()) {
    return (
      presentationParam323.top !== void 0 &&
        presentationJn
          .encode(
            presentationParam323.top,
            presentationParam324.uint32(10).fork(),
          )
          .join(),
      presentationParam323.right !== void 0 &&
        presentationJn
          .encode(
            presentationParam323.right,
            presentationParam324.uint32(18).fork(),
          )
          .join(),
      presentationParam323.bottom !== void 0 &&
        presentationJn
          .encode(
            presentationParam323.bottom,
            presentationParam324.uint32(26).fork(),
          )
          .join(),
      presentationParam323.left !== void 0 &&
        presentationJn
          .encode(
            presentationParam323.left,
            presentationParam324.uint32(34).fork(),
          )
          .join(),
      presentationParam323.diagonalDown !== void 0 &&
        presentationJn
          .encode(
            presentationParam323.diagonalDown,
            presentationParam324.uint32(42).fork(),
          )
          .join(),
      presentationParam323.diagonalUp !== void 0 &&
        presentationJn
          .encode(
            presentationParam323.diagonalUp,
            presentationParam324.uint32(50).fork(),
          )
          .join(),
      presentationParam324
    );
  },
  decode(presentationParam198, presentationParam199) {
    let presentationValue320 =
        presentationParam198 instanceof presentationFr
          ? presentationParam198
          : new presentationFr(presentationParam198),
      presentationValue321 =
        presentationParam199 === void 0
          ? presentationValue320.len
          : presentationValue320.pos + presentationParam199,
      presentationValue322 = fs();
    for (; presentationValue320.pos < presentationValue321; ) {
      let presentationValue427 = presentationValue320.uint32();
      switch (presentationValue427 >>> 3) {
        case 1:
          if (presentationValue427 !== 10) break;
          presentationValue322.top = presentationJn.decode(
            presentationValue320,
            presentationValue320.uint32(),
          );
          continue;
        case 2:
          if (presentationValue427 !== 18) break;
          presentationValue322.right = presentationJn.decode(
            presentationValue320,
            presentationValue320.uint32(),
          );
          continue;
        case 3:
          if (presentationValue427 !== 26) break;
          presentationValue322.bottom = presentationJn.decode(
            presentationValue320,
            presentationValue320.uint32(),
          );
          continue;
        case 4:
          if (presentationValue427 !== 34) break;
          presentationValue322.left = presentationJn.decode(
            presentationValue320,
            presentationValue320.uint32(),
          );
          continue;
        case 5:
          if (presentationValue427 !== 42) break;
          presentationValue322.diagonalDown = presentationJn.decode(
            presentationValue320,
            presentationValue320.uint32(),
          );
          continue;
        case 6:
          if (presentationValue427 !== 50) break;
          presentationValue322.diagonalUp = presentationJn.decode(
            presentationValue320,
            presentationValue320.uint32(),
          );
          continue;
      }
      if ((presentationValue427 & 7) == 4 || presentationValue427 === 0) break;
      presentationValue320.skip(presentationValue427 & 7);
    }
    return presentationValue322;
  },
  create(presentationParam1359) {
    return _presentationRt.fromPartial(presentationParam1359 ?? {});
  },
  fromPartial(presentationParam245) {
    let presentationValue373 = fs();
    return (
      (presentationValue373.top =
        presentationParam245.top !== void 0 && presentationParam245.top !== null
          ? presentationJn.fromPartial(presentationParam245.top)
          : void 0),
      (presentationValue373.right =
        presentationParam245.right !== void 0 &&
        presentationParam245.right !== null
          ? presentationJn.fromPartial(presentationParam245.right)
          : void 0),
      (presentationValue373.bottom =
        presentationParam245.bottom !== void 0 &&
        presentationParam245.bottom !== null
          ? presentationJn.fromPartial(presentationParam245.bottom)
          : void 0),
      (presentationValue373.left =
        presentationParam245.left !== void 0 &&
        presentationParam245.left !== null
          ? presentationJn.fromPartial(presentationParam245.left)
          : void 0),
      (presentationValue373.diagonalDown =
        presentationParam245.diagonalDown !== void 0 &&
        presentationParam245.diagonalDown !== null
          ? presentationJn.fromPartial(presentationParam245.diagonalDown)
          : void 0),
      (presentationValue373.diagonalUp =
        presentationParam245.diagonalUp !== void 0 &&
        presentationParam245.diagonalUp !== null
          ? presentationJn.fromPartial(presentationParam245.diagonalUp)
          : void 0),
      presentationValue373
    );
  },
};
function presentationHelper177() {
  return {
    id: void 0,
    cells: [],
    heightEmu: void 0,
  };
}
var _presentationVt = {
  encode(presentationParam846, presentationParam847 = new presentationPr()) {
    presentationParam846.id !== void 0 &&
      presentationParam847.uint32(26).string(presentationParam846.id);
    for (let presentationValue1297 of presentationParam846.cells)
      _presentationPt
        .encode(presentationValue1297, presentationParam847.uint32(10).fork())
        .join();
    return (
      presentationParam846.heightEmu !== void 0 &&
        presentationParam847.uint32(16).int32(presentationParam846.heightEmu),
      presentationParam847
    );
  },
  decode(presentationParam456, presentationParam457) {
    let presentationValue619 =
        presentationParam456 instanceof presentationFr
          ? presentationParam456
          : new presentationFr(presentationParam456),
      presentationValue620 =
        presentationParam457 === void 0
          ? presentationValue619.len
          : presentationValue619.pos + presentationParam457,
      presentationValue621 = presentationHelper177();
    for (; presentationValue619.pos < presentationValue620; ) {
      let presentationValue890 = presentationValue619.uint32();
      switch (presentationValue890 >>> 3) {
        case 3:
          if (presentationValue890 !== 26) break;
          presentationValue621.id = presentationValue619.string();
          continue;
        case 1:
          if (presentationValue890 !== 10) break;
          presentationValue621.cells.push(
            _presentationPt.decode(
              presentationValue619,
              presentationValue619.uint32(),
            ),
          );
          continue;
        case 2:
          if (presentationValue890 !== 16) break;
          presentationValue621.heightEmu = presentationValue619.int32();
          continue;
      }
      if ((presentationValue890 & 7) == 4 || presentationValue890 === 0) break;
      presentationValue619.skip(presentationValue890 & 7);
    }
    return presentationValue621;
  },
  create(presentationParam1295) {
    return _presentationVt.fromPartial(presentationParam1295 ?? {});
  },
  fromPartial(presentationParam971) {
    let presentationValue1098 = presentationHelper177();
    return (
      (presentationValue1098.id = presentationParam971.id ?? void 0),
      (presentationValue1098.cells =
        presentationParam971.cells?.map((presentationParam1422) =>
          _presentationPt.fromPartial(presentationParam1422),
        ) || []),
      (presentationValue1098.heightEmu =
        presentationParam971.heightEmu ?? void 0),
      presentationValue1098
    );
  },
};
function presentationHelper178() {
  return {
    textStyle: void 0,
    paragraphStyle: void 0,
    fill: void 0,
    lines: void 0,
    marginLeft: void 0,
    marginRight: void 0,
    marginTop: void 0,
    marginBottom: void 0,
    anchor: void 0,
    textDirection: void 0,
    borders: void 0,
  };
}
var presentationLt = {
  encode(presentationParam122, presentationParam123 = new presentationPr()) {
    return (
      presentationParam122.textStyle !== void 0 &&
        presentationOr
          .encode(
            presentationParam122.textStyle,
            presentationParam123.uint32(10).fork(),
          )
          .join(),
      presentationParam122.paragraphStyle !== void 0 &&
        presentationValue25
          .encode(
            presentationParam122.paragraphStyle,
            presentationParam123.uint32(18).fork(),
          )
          .join(),
      presentationParam122.fill !== void 0 &&
        presentationHn
          .encode(
            presentationParam122.fill,
            presentationParam123.uint32(26).fork(),
          )
          .join(),
      presentationParam122.lines !== void 0 &&
        _presentationRt
          .encode(
            presentationParam122.lines,
            presentationParam123.uint32(34).fork(),
          )
          .join(),
      presentationParam122.marginLeft !== void 0 &&
        presentationParam123.uint32(40).int32(presentationParam122.marginLeft),
      presentationParam122.marginRight !== void 0 &&
        presentationParam123.uint32(48).int32(presentationParam122.marginRight),
      presentationParam122.marginTop !== void 0 &&
        presentationParam123.uint32(56).int32(presentationParam122.marginTop),
      presentationParam122.marginBottom !== void 0 &&
        presentationParam123
          .uint32(64)
          .int32(presentationParam122.marginBottom),
      presentationParam122.anchor !== void 0 &&
        presentationParam123.uint32(74).string(presentationParam122.anchor),
      presentationParam122.textDirection !== void 0 &&
        presentationParam123
          .uint32(82)
          .string(presentationParam122.textDirection),
      presentationParam122.borders !== void 0 &&
        _presentationFt
          .encode(
            presentationParam122.borders,
            presentationParam123.uint32(90).fork(),
          )
          .join(),
      presentationParam123
    );
  },
  decode(presentationParam81, presentationParam82) {
    let presentationValue191 =
        presentationParam81 instanceof presentationFr
          ? presentationParam81
          : new presentationFr(presentationParam81),
      presentationValue192 =
        presentationParam82 === void 0
          ? presentationValue191.len
          : presentationValue191.pos + presentationParam82,
      presentationValue193 = presentationHelper178();
    for (; presentationValue191.pos < presentationValue192; ) {
      let presentationValue231 = presentationValue191.uint32();
      switch (presentationValue231 >>> 3) {
        case 1:
          if (presentationValue231 !== 10) break;
          presentationValue193.textStyle = presentationOr.decode(
            presentationValue191,
            presentationValue191.uint32(),
          );
          continue;
        case 2:
          if (presentationValue231 !== 18) break;
          presentationValue193.paragraphStyle = presentationValue25.decode(
            presentationValue191,
            presentationValue191.uint32(),
          );
          continue;
        case 3:
          if (presentationValue231 !== 26) break;
          presentationValue193.fill = presentationHn.decode(
            presentationValue191,
            presentationValue191.uint32(),
          );
          continue;
        case 4:
          if (presentationValue231 !== 34) break;
          presentationValue193.lines = _presentationRt.decode(
            presentationValue191,
            presentationValue191.uint32(),
          );
          continue;
        case 5:
          if (presentationValue231 !== 40) break;
          presentationValue193.marginLeft = presentationValue191.int32();
          continue;
        case 6:
          if (presentationValue231 !== 48) break;
          presentationValue193.marginRight = presentationValue191.int32();
          continue;
        case 7:
          if (presentationValue231 !== 56) break;
          presentationValue193.marginTop = presentationValue191.int32();
          continue;
        case 8:
          if (presentationValue231 !== 64) break;
          presentationValue193.marginBottom = presentationValue191.int32();
          continue;
        case 9:
          if (presentationValue231 !== 74) break;
          presentationValue193.anchor = presentationValue191.string();
          continue;
        case 10:
          if (presentationValue231 !== 82) break;
          presentationValue193.textDirection = presentationValue191.string();
          continue;
        case 11:
          if (presentationValue231 !== 90) break;
          presentationValue193.borders = _presentationFt.decode(
            presentationValue191,
            presentationValue191.uint32(),
          );
          continue;
      }
      if ((presentationValue231 & 7) == 4 || presentationValue231 === 0) break;
      presentationValue191.skip(presentationValue231 & 7);
    }
    return presentationValue193;
  },
  create(presentationParam1296) {
    return presentationLt.fromPartial(presentationParam1296 ?? {});
  },
  fromPartial(presentationParam148) {
    let presentationValue275 = presentationHelper178();
    return (
      (presentationValue275.textStyle =
        presentationParam148.textStyle !== void 0 &&
        presentationParam148.textStyle !== null
          ? presentationOr.fromPartial(presentationParam148.textStyle)
          : void 0),
      (presentationValue275.paragraphStyle =
        presentationParam148.paragraphStyle !== void 0 &&
        presentationParam148.paragraphStyle !== null
          ? presentationValue25.fromPartial(presentationParam148.paragraphStyle)
          : void 0),
      (presentationValue275.fill =
        presentationParam148.fill !== void 0 &&
        presentationParam148.fill !== null
          ? presentationHn.fromPartial(presentationParam148.fill)
          : void 0),
      (presentationValue275.lines =
        presentationParam148.lines !== void 0 &&
        presentationParam148.lines !== null
          ? _presentationRt.fromPartial(presentationParam148.lines)
          : void 0),
      (presentationValue275.marginLeft =
        presentationParam148.marginLeft ?? void 0),
      (presentationValue275.marginRight =
        presentationParam148.marginRight ?? void 0),
      (presentationValue275.marginTop =
        presentationParam148.marginTop ?? void 0),
      (presentationValue275.marginBottom =
        presentationParam148.marginBottom ?? void 0),
      (presentationValue275.anchor = presentationParam148.anchor ?? void 0),
      (presentationValue275.textDirection =
        presentationParam148.textDirection ?? void 0),
      (presentationValue275.borders =
        presentationParam148.borders !== void 0 &&
        presentationParam148.borders !== null
          ? _presentationFt.fromPartial(presentationParam148.borders)
          : void 0),
      presentationValue275
    );
  },
};
function _s() {
  return {
    tableProperties: void 0,
    cellStyle: void 0,
    textStyle: void 0,
    paragraphStyle: void 0,
    spaceBefore: void 0,
    spaceAfter: void 0,
  };
}
var _presentationUt = {
  encode(presentationParam295, presentationParam296 = new presentationPr()) {
    return (
      presentationParam295.tableProperties !== void 0 &&
        _presentationBt
          .encode(
            presentationParam295.tableProperties,
            presentationParam296.uint32(10).fork(),
          )
          .join(),
      presentationParam295.cellStyle !== void 0 &&
        presentationLt
          .encode(
            presentationParam295.cellStyle,
            presentationParam296.uint32(18).fork(),
          )
          .join(),
      presentationParam295.textStyle !== void 0 &&
        presentationOr
          .encode(
            presentationParam295.textStyle,
            presentationParam296.uint32(26).fork(),
          )
          .join(),
      presentationParam295.paragraphStyle !== void 0 &&
        presentationValue25
          .encode(
            presentationParam295.paragraphStyle,
            presentationParam296.uint32(34).fork(),
          )
          .join(),
      presentationParam295.spaceBefore !== void 0 &&
        presentationParam296.uint32(40).int32(presentationParam295.spaceBefore),
      presentationParam295.spaceAfter !== void 0 &&
        presentationParam296.uint32(48).int32(presentationParam295.spaceAfter),
      presentationParam296
    );
  },
  decode(presentationParam194, presentationParam195) {
    let presentationValue313 =
        presentationParam194 instanceof presentationFr
          ? presentationParam194
          : new presentationFr(presentationParam194),
      presentationValue314 =
        presentationParam195 === void 0
          ? presentationValue313.len
          : presentationValue313.pos + presentationParam195,
      presentationValue315 = _s();
    for (; presentationValue313.pos < presentationValue314; ) {
      let presentationValue418 = presentationValue313.uint32();
      switch (presentationValue418 >>> 3) {
        case 1:
          if (presentationValue418 !== 10) break;
          presentationValue315.tableProperties = _presentationBt.decode(
            presentationValue313,
            presentationValue313.uint32(),
          );
          continue;
        case 2:
          if (presentationValue418 !== 18) break;
          presentationValue315.cellStyle = presentationLt.decode(
            presentationValue313,
            presentationValue313.uint32(),
          );
          continue;
        case 3:
          if (presentationValue418 !== 26) break;
          presentationValue315.textStyle = presentationOr.decode(
            presentationValue313,
            presentationValue313.uint32(),
          );
          continue;
        case 4:
          if (presentationValue418 !== 34) break;
          presentationValue315.paragraphStyle = presentationValue25.decode(
            presentationValue313,
            presentationValue313.uint32(),
          );
          continue;
        case 5:
          if (presentationValue418 !== 40) break;
          presentationValue315.spaceBefore = presentationValue313.int32();
          continue;
        case 6:
          if (presentationValue418 !== 48) break;
          presentationValue315.spaceAfter = presentationValue313.int32();
          continue;
      }
      if ((presentationValue418 & 7) == 4 || presentationValue418 === 0) break;
      presentationValue313.skip(presentationValue418 & 7);
    }
    return presentationValue315;
  },
  create(presentationParam1360) {
    return _presentationUt.fromPartial(presentationParam1360 ?? {});
  },
  fromPartial(presentationParam248) {
    let presentationValue377 = _s();
    return (
      (presentationValue377.tableProperties =
        presentationParam248.tableProperties !== void 0 &&
        presentationParam248.tableProperties !== null
          ? _presentationBt.fromPartial(presentationParam248.tableProperties)
          : void 0),
      (presentationValue377.cellStyle =
        presentationParam248.cellStyle !== void 0 &&
        presentationParam248.cellStyle !== null
          ? presentationLt.fromPartial(presentationParam248.cellStyle)
          : void 0),
      (presentationValue377.textStyle =
        presentationParam248.textStyle !== void 0 &&
        presentationParam248.textStyle !== null
          ? presentationOr.fromPartial(presentationParam248.textStyle)
          : void 0),
      (presentationValue377.paragraphStyle =
        presentationParam248.paragraphStyle !== void 0 &&
        presentationParam248.paragraphStyle !== null
          ? presentationValue25.fromPartial(presentationParam248.paragraphStyle)
          : void 0),
      (presentationValue377.spaceBefore =
        presentationParam248.spaceBefore ?? void 0),
      (presentationValue377.spaceAfter =
        presentationParam248.spaceAfter ?? void 0),
      presentationValue377
    );
  },
};
function presentationHelper179() {
  return {
    condition: 0,
    style: void 0,
  };
}
var _presentationM = {
  encode(presentationParam948, presentationParam949 = new presentationPr()) {
    return (
      presentationParam948.condition !== 0 &&
        presentationParam949.uint32(8).int32(presentationParam948.condition),
      presentationParam948.style !== void 0 &&
        _presentationUt
          .encode(
            presentationParam948.style,
            presentationParam949.uint32(18).fork(),
          )
          .join(),
      presentationParam949
    );
  },
  decode(presentationParam579, presentationParam580) {
    let presentationValue760 =
        presentationParam579 instanceof presentationFr
          ? presentationParam579
          : new presentationFr(presentationParam579),
      presentationValue761 =
        presentationParam580 === void 0
          ? presentationValue760.len
          : presentationValue760.pos + presentationParam580,
      presentationValue762 = presentationHelper179();
    for (; presentationValue760.pos < presentationValue761; ) {
      let presentationValue1015 = presentationValue760.uint32();
      switch (presentationValue1015 >>> 3) {
        case 1:
          if (presentationValue1015 !== 8) break;
          presentationValue762.condition = presentationValue760.int32();
          continue;
        case 2:
          if (presentationValue1015 !== 18) break;
          presentationValue762.style = _presentationUt.decode(
            presentationValue760,
            presentationValue760.uint32(),
          );
          continue;
      }
      if ((presentationValue1015 & 7) == 4 || presentationValue1015 === 0)
        break;
      presentationValue760.skip(presentationValue1015 & 7);
    }
    return presentationValue762;
  },
  create(presentationParam1297) {
    return _presentationM.fromPartial(presentationParam1297 ?? {});
  },
  fromPartial(presentationParam969) {
    let presentationValue1096 = presentationHelper179();
    return (
      (presentationValue1096.condition = presentationParam969.condition ?? 0),
      (presentationValue1096.style =
        presentationParam969.style !== void 0 &&
        presentationParam969.style !== null
          ? _presentationUt.fromPartial(presentationParam969.style)
          : void 0),
      presentationValue1096
    );
  },
};
function presentationHelper180() {
  return {
    id: ``,
    name: ``,
    basedOn: void 0,
    wholeTable: void 0,
    conditionalStyles: [],
  };
}
var _presentationHt = {
  encode(presentationParam533, presentationParam534 = new presentationPr()) {
    (presentationParam533.id !== `` &&
      presentationParam534.uint32(10).string(presentationParam533.id),
      presentationParam533.name !== `` &&
        presentationParam534.uint32(18).string(presentationParam533.name),
      presentationParam533.basedOn !== void 0 &&
        presentationParam534.uint32(26).string(presentationParam533.basedOn),
      presentationParam533.wholeTable !== void 0 &&
        _presentationUt
          .encode(
            presentationParam533.wholeTable,
            presentationParam534.uint32(34).fork(),
          )
          .join());
    for (let presentationValue1217 of presentationParam533.conditionalStyles)
      _presentationM
        .encode(presentationValue1217, presentationParam534.uint32(42).fork())
        .join();
    return presentationParam534;
  },
  decode(presentationParam274, presentationParam275) {
    let presentationValue402 =
        presentationParam274 instanceof presentationFr
          ? presentationParam274
          : new presentationFr(presentationParam274),
      presentationValue403 =
        presentationParam275 === void 0
          ? presentationValue402.len
          : presentationValue402.pos + presentationParam275,
      presentationValue404 = presentationHelper180();
    for (; presentationValue402.pos < presentationValue403; ) {
      let presentationValue567 = presentationValue402.uint32();
      switch (presentationValue567 >>> 3) {
        case 1:
          if (presentationValue567 !== 10) break;
          presentationValue404.id = presentationValue402.string();
          continue;
        case 2:
          if (presentationValue567 !== 18) break;
          presentationValue404.name = presentationValue402.string();
          continue;
        case 3:
          if (presentationValue567 !== 26) break;
          presentationValue404.basedOn = presentationValue402.string();
          continue;
        case 4:
          if (presentationValue567 !== 34) break;
          presentationValue404.wholeTable = _presentationUt.decode(
            presentationValue402,
            presentationValue402.uint32(),
          );
          continue;
        case 5:
          if (presentationValue567 !== 42) break;
          presentationValue404.conditionalStyles.push(
            _presentationM.decode(
              presentationValue402,
              presentationValue402.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue567 & 7) == 4 || presentationValue567 === 0) break;
      presentationValue402.skip(presentationValue567 & 7);
    }
    return presentationValue404;
  },
  create(presentationParam1298) {
    return _presentationHt.fromPartial(presentationParam1298 ?? {});
  },
  fromPartial(presentationParam660) {
    let presentationValue866 = presentationHelper180();
    return (
      (presentationValue866.id = presentationParam660.id ?? ``),
      (presentationValue866.name = presentationParam660.name ?? ``),
      (presentationValue866.basedOn = presentationParam660.basedOn ?? void 0),
      (presentationValue866.wholeTable =
        presentationParam660.wholeTable !== void 0 &&
        presentationParam660.wholeTable !== null
          ? _presentationUt.fromPartial(presentationParam660.wholeTable)
          : void 0),
      (presentationValue866.conditionalStyles =
        presentationParam660.conditionalStyles?.map((presentationParam1423) =>
          _presentationM.fromPartial(presentationParam1423),
        ) || []),
      presentationValue866
    );
  },
};
function presentationHelper181() {
  return {
    id: void 0,
    runs: [],
    textStyle: void 0,
    bulletCharacter: void 0,
    marginLeft: void 0,
    indent: void 0,
    spaceAfter: void 0,
    spaceBefore: void 0,
    styleId: void 0,
    paragraphStyle: void 0,
    docxSectionBreakCarrier: void 0,
    inlineNodes: [],
  };
}
var _presentationH = {
  encode(presentationParam104, presentationParam105 = new presentationPr()) {
    presentationParam104.id !== void 0 &&
      presentationParam105.uint32(74).string(presentationParam104.id);
    for (let presentationValue1307 of presentationParam104.runs)
      _presentationGt
        .encode(presentationValue1307, presentationParam105.uint32(10).fork())
        .join();
    (presentationParam104.textStyle !== void 0 &&
      presentationOr
        .encode(
          presentationParam104.textStyle,
          presentationParam105.uint32(18).fork(),
        )
        .join(),
      presentationParam104.bulletCharacter !== void 0 &&
        presentationParam105
          .uint32(26)
          .string(presentationParam104.bulletCharacter),
      presentationParam104.marginLeft !== void 0 &&
        presentationParam105.uint32(32).int32(presentationParam104.marginLeft),
      presentationParam104.indent !== void 0 &&
        presentationParam105.uint32(40).int32(presentationParam104.indent),
      presentationParam104.spaceAfter !== void 0 &&
        presentationParam105.uint32(48).int32(presentationParam104.spaceAfter),
      presentationParam104.spaceBefore !== void 0 &&
        presentationParam105.uint32(56).int32(presentationParam104.spaceBefore),
      presentationParam104.styleId !== void 0 &&
        presentationParam105.uint32(66).string(presentationParam104.styleId),
      presentationParam104.paragraphStyle !== void 0 &&
        presentationValue25
          .encode(
            presentationParam104.paragraphStyle,
            presentationParam105.uint32(82).fork(),
          )
          .join(),
      presentationParam104.docxSectionBreakCarrier !== void 0 &&
        presentationParam105
          .uint32(88)
          .bool(presentationParam104.docxSectionBreakCarrier));
    for (let presentationValue1247 of presentationParam104.inlineNodes)
      _presentationZ
        .encode(presentationValue1247, presentationParam105.uint32(98).fork())
        .join();
    return presentationParam105;
  },
  decode(presentationParam63, presentationParam64) {
    let presentationValue173 =
        presentationParam63 instanceof presentationFr
          ? presentationParam63
          : new presentationFr(presentationParam63),
      presentationValue174 =
        presentationParam64 === void 0
          ? presentationValue173.len
          : presentationValue173.pos + presentationParam64,
      presentationValue175 = presentationHelper181();
    for (; presentationValue173.pos < presentationValue174; ) {
      let presentationValue200 = presentationValue173.uint32();
      switch (presentationValue200 >>> 3) {
        case 9:
          if (presentationValue200 !== 74) break;
          presentationValue175.id = presentationValue173.string();
          continue;
        case 1:
          if (presentationValue200 !== 10) break;
          presentationValue175.runs.push(
            _presentationGt.decode(
              presentationValue173,
              presentationValue173.uint32(),
            ),
          );
          continue;
        case 2:
          if (presentationValue200 !== 18) break;
          presentationValue175.textStyle = presentationOr.decode(
            presentationValue173,
            presentationValue173.uint32(),
          );
          continue;
        case 3:
          if (presentationValue200 !== 26) break;
          presentationValue175.bulletCharacter = presentationValue173.string();
          continue;
        case 4:
          if (presentationValue200 !== 32) break;
          presentationValue175.marginLeft = presentationValue173.int32();
          continue;
        case 5:
          if (presentationValue200 !== 40) break;
          presentationValue175.indent = presentationValue173.int32();
          continue;
        case 6:
          if (presentationValue200 !== 48) break;
          presentationValue175.spaceAfter = presentationValue173.int32();
          continue;
        case 7:
          if (presentationValue200 !== 56) break;
          presentationValue175.spaceBefore = presentationValue173.int32();
          continue;
        case 8:
          if (presentationValue200 !== 66) break;
          presentationValue175.styleId = presentationValue173.string();
          continue;
        case 10:
          if (presentationValue200 !== 82) break;
          presentationValue175.paragraphStyle = presentationValue25.decode(
            presentationValue173,
            presentationValue173.uint32(),
          );
          continue;
        case 11:
          if (presentationValue200 !== 88) break;
          presentationValue175.docxSectionBreakCarrier =
            presentationValue173.bool();
          continue;
        case 12:
          if (presentationValue200 !== 98) break;
          presentationValue175.inlineNodes.push(
            _presentationZ.decode(
              presentationValue173,
              presentationValue173.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue200 & 7) == 4 || presentationValue200 === 0) break;
      presentationValue173.skip(presentationValue200 & 7);
    }
    return presentationValue175;
  },
  create(presentationParam1361) {
    return _presentationH.fromPartial(presentationParam1361 ?? {});
  },
  fromPartial(presentationParam164) {
    let presentationValue284 = presentationHelper181();
    return (
      (presentationValue284.id = presentationParam164.id ?? void 0),
      (presentationValue284.runs =
        presentationParam164.runs?.map((presentationParam1458) =>
          _presentationGt.fromPartial(presentationParam1458),
        ) || []),
      (presentationValue284.textStyle =
        presentationParam164.textStyle !== void 0 &&
        presentationParam164.textStyle !== null
          ? presentationOr.fromPartial(presentationParam164.textStyle)
          : void 0),
      (presentationValue284.bulletCharacter =
        presentationParam164.bulletCharacter ?? void 0),
      (presentationValue284.marginLeft =
        presentationParam164.marginLeft ?? void 0),
      (presentationValue284.indent = presentationParam164.indent ?? void 0),
      (presentationValue284.spaceAfter =
        presentationParam164.spaceAfter ?? void 0),
      (presentationValue284.spaceBefore =
        presentationParam164.spaceBefore ?? void 0),
      (presentationValue284.styleId = presentationParam164.styleId ?? void 0),
      (presentationValue284.paragraphStyle =
        presentationParam164.paragraphStyle !== void 0 &&
        presentationParam164.paragraphStyle !== null
          ? presentationValue25.fromPartial(presentationParam164.paragraphStyle)
          : void 0),
      (presentationValue284.docxSectionBreakCarrier =
        presentationParam164.docxSectionBreakCarrier ?? void 0),
      (presentationValue284.inlineNodes =
        presentationParam164.inlineNodes?.map((presentationParam1424) =>
          _presentationZ.fromPartial(presentationParam1424),
        ) || []),
      presentationValue284
    );
  },
};
function presentationHelper182() {
  return {
    textRun: void 0,
    math: void 0,
  };
}
var _presentationZ = {
  encode(presentationParam906, presentationParam907 = new presentationPr()) {
    return (
      presentationParam906.textRun !== void 0 &&
        _presentationGt
          .encode(
            presentationParam906.textRun,
            presentationParam907.uint32(10).fork(),
          )
          .join(),
      presentationParam906.math !== void 0 &&
        presentationValue86
          .encode(
            presentationParam906.math,
            presentationParam907.uint32(18).fork(),
          )
          .join(),
      presentationParam907
    );
  },
  decode(presentationParam542, presentationParam543) {
    let presentationValue708 =
        presentationParam542 instanceof presentationFr
          ? presentationParam542
          : new presentationFr(presentationParam542),
      presentationValue709 =
        presentationParam543 === void 0
          ? presentationValue708.len
          : presentationValue708.pos + presentationParam543,
      presentationValue710 = presentationHelper182();
    for (; presentationValue708.pos < presentationValue709; ) {
      let presentationValue994 = presentationValue708.uint32();
      switch (presentationValue994 >>> 3) {
        case 1:
          if (presentationValue994 !== 10) break;
          presentationValue710.textRun = _presentationGt.decode(
            presentationValue708,
            presentationValue708.uint32(),
          );
          continue;
        case 2:
          if (presentationValue994 !== 18) break;
          presentationValue710.math = presentationValue86.decode(
            presentationValue708,
            presentationValue708.uint32(),
          );
          continue;
      }
      if ((presentationValue994 & 7) == 4 || presentationValue994 === 0) break;
      presentationValue708.skip(presentationValue994 & 7);
    }
    return presentationValue710;
  },
  create(presentationParam1299) {
    return _presentationZ.fromPartial(presentationParam1299 ?? {});
  },
  fromPartial(presentationParam850) {
    let presentationValue1025 = presentationHelper182();
    return (
      (presentationValue1025.textRun =
        presentationParam850.textRun !== void 0 &&
        presentationParam850.textRun !== null
          ? _presentationGt.fromPartial(presentationParam850.textRun)
          : void 0),
      (presentationValue1025.math =
        presentationParam850.math !== void 0 &&
        presentationParam850.math !== null
          ? presentationValue86.fromPartial(presentationParam850.math)
          : void 0),
      presentationValue1025
    );
  },
};
function presentationHelper183() {
  return {
    id: void 0,
    text: ``,
    textStyle: void 0,
    hyperlink: void 0,
    citations: [],
    reviewMarkIds: [],
    styleId: void 0,
    fieldType: void 0,
  };
}
var _presentationGt = {
  encode(presentationParam288, presentationParam289 = new presentationPr()) {
    (presentationParam288.id !== void 0 &&
      presentationParam289.uint32(34).string(presentationParam288.id),
      presentationParam288.text !== `` &&
        presentationParam289.uint32(10).string(presentationParam288.text),
      presentationParam288.textStyle !== void 0 &&
        presentationOr
          .encode(
            presentationParam288.textStyle,
            presentationParam289.uint32(18).fork(),
          )
          .join(),
      presentationParam288.hyperlink !== void 0 &&
        _presentationI
          .encode(
            presentationParam288.hyperlink,
            presentationParam289.uint32(26).fork(),
          )
          .join());
    for (let presentationValue1327 of presentationParam288.citations)
      presentationParam289.uint32(42).string(presentationValue1327);
    for (let presentationValue1317 of presentationParam288.reviewMarkIds)
      presentationParam289.uint32(50).string(presentationValue1317);
    return (
      presentationParam288.styleId !== void 0 &&
        presentationParam289.uint32(58).string(presentationParam288.styleId),
      presentationParam288.fieldType !== void 0 &&
        presentationParam289.uint32(66).string(presentationParam288.fieldType),
      presentationParam289
    );
  },
  decode(presentationParam156, presentationParam157) {
    let presentationValue281 =
        presentationParam156 instanceof presentationFr
          ? presentationParam156
          : new presentationFr(presentationParam156),
      presentationValue282 =
        presentationParam157 === void 0
          ? presentationValue281.len
          : presentationValue281.pos + presentationParam157,
      presentationValue283 = presentationHelper183();
    for (; presentationValue281.pos < presentationValue282; ) {
      let presentationValue341 = presentationValue281.uint32();
      switch (presentationValue341 >>> 3) {
        case 4:
          if (presentationValue341 !== 34) break;
          presentationValue283.id = presentationValue281.string();
          continue;
        case 1:
          if (presentationValue341 !== 10) break;
          presentationValue283.text = presentationValue281.string();
          continue;
        case 2:
          if (presentationValue341 !== 18) break;
          presentationValue283.textStyle = presentationOr.decode(
            presentationValue281,
            presentationValue281.uint32(),
          );
          continue;
        case 3:
          if (presentationValue341 !== 26) break;
          presentationValue283.hyperlink = _presentationI.decode(
            presentationValue281,
            presentationValue281.uint32(),
          );
          continue;
        case 5:
          if (presentationValue341 !== 42) break;
          presentationValue283.citations.push(presentationValue281.string());
          continue;
        case 6:
          if (presentationValue341 !== 50) break;
          presentationValue283.reviewMarkIds.push(
            presentationValue281.string(),
          );
          continue;
        case 7:
          if (presentationValue341 !== 58) break;
          presentationValue283.styleId = presentationValue281.string();
          continue;
        case 8:
          if (presentationValue341 !== 66) break;
          presentationValue283.fieldType = presentationValue281.string();
          continue;
      }
      if ((presentationValue341 & 7) == 4 || presentationValue341 === 0) break;
      presentationValue281.skip(presentationValue341 & 7);
    }
    return presentationValue283;
  },
  create(presentationParam1362) {
    return _presentationGt.fromPartial(presentationParam1362 ?? {});
  },
  fromPartial(presentationParam376) {
    let presentationValue521 = presentationHelper183();
    return (
      (presentationValue521.id = presentationParam376.id ?? void 0),
      (presentationValue521.text = presentationParam376.text ?? ``),
      (presentationValue521.textStyle =
        presentationParam376.textStyle !== void 0 &&
        presentationParam376.textStyle !== null
          ? presentationOr.fromPartial(presentationParam376.textStyle)
          : void 0),
      (presentationValue521.hyperlink =
        presentationParam376.hyperlink !== void 0 &&
        presentationParam376.hyperlink !== null
          ? _presentationI.fromPartial(presentationParam376.hyperlink)
          : void 0),
      (presentationValue521.citations =
        presentationParam376.citations?.map(
          (presentationParam1484) => presentationParam1484,
        ) || []),
      (presentationValue521.reviewMarkIds =
        presentationParam376.reviewMarkIds?.map(
          (presentationParam1485) => presentationParam1485,
        ) || []),
      (presentationValue521.styleId = presentationParam376.styleId ?? void 0),
      (presentationValue521.fieldType =
        presentationParam376.fieldType ?? void 0),
      presentationValue521
    );
  },
};
function presentationHelper184() {
  return {
    uri: ``,
    isExternal: !1,
    action: ``,
  };
}
var _presentationI = {
  encode(presentationParam892, presentationParam893 = new presentationPr()) {
    return (
      presentationParam892.uri !== `` &&
        presentationParam893.uint32(10).string(presentationParam892.uri),
      presentationParam892.isExternal !== !1 &&
        presentationParam893.uint32(16).bool(presentationParam892.isExternal),
      presentationParam892.action !== `` &&
        presentationParam893.uint32(26).string(presentationParam892.action),
      presentationParam893
    );
  },
  decode(presentationParam497, presentationParam498) {
    let presentationValue666 =
        presentationParam497 instanceof presentationFr
          ? presentationParam497
          : new presentationFr(presentationParam497),
      presentationValue667 =
        presentationParam498 === void 0
          ? presentationValue666.len
          : presentationValue666.pos + presentationParam498,
      presentationValue668 = presentationHelper184();
    for (; presentationValue666.pos < presentationValue667; ) {
      let presentationValue947 = presentationValue666.uint32();
      switch (presentationValue947 >>> 3) {
        case 1:
          if (presentationValue947 !== 10) break;
          presentationValue668.uri = presentationValue666.string();
          continue;
        case 2:
          if (presentationValue947 !== 16) break;
          presentationValue668.isExternal = presentationValue666.bool();
          continue;
        case 3:
          if (presentationValue947 !== 26) break;
          presentationValue668.action = presentationValue666.string();
          continue;
      }
      if ((presentationValue947 & 7) == 4 || presentationValue947 === 0) break;
      presentationValue666.skip(presentationValue947 & 7);
    }
    return presentationValue668;
  },
  create(presentationParam1363) {
    return _presentationI.fromPartial(presentationParam1363 ?? {});
  },
  fromPartial(presentationParam1027) {
    let presentationValue1147 = presentationHelper184();
    return (
      (presentationValue1147.uri = presentationParam1027.uri ?? ``),
      (presentationValue1147.isExternal =
        presentationParam1027.isExternal ?? !1),
      (presentationValue1147.action = presentationParam1027.action ?? ``),
      presentationValue1147
    );
  },
};
function presentationHelper185() {
  return {
    effects: [],
  };
}
var presentationE = {
  encode(presentationParam1065, presentationParam1066 = new presentationPr()) {
    for (let presentationValue1293 of presentationParam1065.effects)
      __presentationT
        .encode(presentationValue1293, presentationParam1066.uint32(10).fork())
        .join();
    return presentationParam1066;
  },
  decode(presentationParam695, presentationParam696) {
    let presentationValue891 =
        presentationParam695 instanceof presentationFr
          ? presentationParam695
          : new presentationFr(presentationParam695),
      presentationValue892 =
        presentationParam696 === void 0
          ? presentationValue891.len
          : presentationValue891.pos + presentationParam696,
      presentationValue893 = presentationHelper185();
    for (; presentationValue891.pos < presentationValue892; ) {
      let presentationValue1082 = presentationValue891.uint32();
      switch (presentationValue1082 >>> 3) {
        case 1:
          if (presentationValue1082 !== 10) break;
          presentationValue893.effects.push(
            __presentationT.decode(
              presentationValue891,
              presentationValue891.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue1082 & 7) == 4 || presentationValue1082 === 0)
        break;
      presentationValue891.skip(presentationValue1082 & 7);
    }
    return presentationValue893;
  },
  create(presentationParam1300) {
    return presentationE.fromPartial(presentationParam1300 ?? {});
  },
  fromPartial(presentationParam1081) {
    let presentationValue1181 = presentationHelper185();
    return (
      (presentationValue1181.effects =
        presentationParam1081.effects?.map((presentationParam1459) =>
          __presentationT.fromPartial(presentationParam1459),
        ) || []),
      presentationValue1181
    );
  },
};
function presentationHelper186() {
  return {
    type: 0,
    shadow: void 0,
    glow: void 0,
    reflection: void 0,
    softEdges: void 0,
  };
}
var __presentationT = {
  encode(presentationParam468, presentationParam469 = new presentationPr()) {
    return (
      presentationParam468.type !== 0 &&
        presentationParam469.uint32(8).int32(presentationParam468.type),
      presentationParam468.shadow !== void 0 &&
        _presentationOt
          .encode(
            presentationParam468.shadow,
            presentationParam469.uint32(18).fork(),
          )
          .join(),
      presentationParam468.glow !== void 0 &&
        presentationF
          .encode(
            presentationParam468.glow,
            presentationParam469.uint32(26).fork(),
          )
          .join(),
      presentationParam468.reflection !== void 0 &&
        _presentationTt
          .encode(
            presentationParam468.reflection,
            presentationParam469.uint32(34).fork(),
          )
          .join(),
      presentationParam468.softEdges !== void 0 &&
        _presentationAt
          .encode(
            presentationParam468.softEdges,
            presentationParam469.uint32(42).fork(),
          )
          .join(),
      presentationParam469
    );
  },
  decode(presentationParam260, presentationParam261) {
    let presentationValue389 =
        presentationParam260 instanceof presentationFr
          ? presentationParam260
          : new presentationFr(presentationParam260),
      presentationValue390 =
        presentationParam261 === void 0
          ? presentationValue389.len
          : presentationValue389.pos + presentationParam261,
      presentationValue391 = presentationHelper186();
    for (; presentationValue389.pos < presentationValue390; ) {
      let presentationValue539 = presentationValue389.uint32();
      switch (presentationValue539 >>> 3) {
        case 1:
          if (presentationValue539 !== 8) break;
          presentationValue391.type = presentationValue389.int32();
          continue;
        case 2:
          if (presentationValue539 !== 18) break;
          presentationValue391.shadow = _presentationOt.decode(
            presentationValue389,
            presentationValue389.uint32(),
          );
          continue;
        case 3:
          if (presentationValue539 !== 26) break;
          presentationValue391.glow = presentationF.decode(
            presentationValue389,
            presentationValue389.uint32(),
          );
          continue;
        case 4:
          if (presentationValue539 !== 34) break;
          presentationValue391.reflection = _presentationTt.decode(
            presentationValue389,
            presentationValue389.uint32(),
          );
          continue;
        case 5:
          if (presentationValue539 !== 42) break;
          presentationValue391.softEdges = _presentationAt.decode(
            presentationValue389,
            presentationValue389.uint32(),
          );
          continue;
      }
      if ((presentationValue539 & 7) == 4 || presentationValue539 === 0) break;
      presentationValue389.skip(presentationValue539 & 7);
    }
    return presentationValue391;
  },
  create(presentationParam1364) {
    return __presentationT.fromPartial(presentationParam1364 ?? {});
  },
  fromPartial(presentationParam408) {
    let presentationValue556 = presentationHelper186();
    return (
      (presentationValue556.type = presentationParam408.type ?? 0),
      (presentationValue556.shadow =
        presentationParam408.shadow !== void 0 &&
        presentationParam408.shadow !== null
          ? _presentationOt.fromPartial(presentationParam408.shadow)
          : void 0),
      (presentationValue556.glow =
        presentationParam408.glow !== void 0 &&
        presentationParam408.glow !== null
          ? presentationF.fromPartial(presentationParam408.glow)
          : void 0),
      (presentationValue556.reflection =
        presentationParam408.reflection !== void 0 &&
        presentationParam408.reflection !== null
          ? _presentationTt.fromPartial(presentationParam408.reflection)
          : void 0),
      (presentationValue556.softEdges =
        presentationParam408.softEdges !== void 0 &&
        presentationParam408.softEdges !== null
          ? _presentationAt.fromPartial(presentationParam408.softEdges)
          : void 0),
      presentationValue556
    );
  },
};
function presentationHelper187() {
  return {
    color: void 0,
    radiusEmu: void 0,
  };
}
var presentationF = {
  encode(presentationParam927, presentationParam928 = new presentationPr()) {
    return (
      presentationParam927.color !== void 0 &&
        presentationRn
          .encode(
            presentationParam927.color,
            presentationParam928.uint32(10).fork(),
          )
          .join(),
      presentationParam927.radiusEmu !== void 0 &&
        presentationParam928.uint32(16).int64(presentationParam927.radiusEmu),
      presentationParam928
    );
  },
  decode(presentationParam558, presentationParam559) {
    let presentationValue734 =
        presentationParam558 instanceof presentationFr
          ? presentationParam558
          : new presentationFr(presentationParam558),
      presentationValue735 =
        presentationParam559 === void 0
          ? presentationValue734.len
          : presentationValue734.pos + presentationParam559,
      presentationValue736 = presentationHelper187();
    for (; presentationValue734.pos < presentationValue735; ) {
      let presentationValue1007 = presentationValue734.uint32();
      switch (presentationValue1007 >>> 3) {
        case 1:
          if (presentationValue1007 !== 10) break;
          presentationValue736.color = presentationRn.decode(
            presentationValue734,
            presentationValue734.uint32(),
          );
          continue;
        case 2:
          if (presentationValue1007 !== 16) break;
          presentationValue736.radiusEmu = $(presentationValue734.int64());
          continue;
      }
      if ((presentationValue1007 & 7) == 4 || presentationValue1007 === 0)
        break;
      presentationValue734.skip(presentationValue1007 & 7);
    }
    return presentationValue736;
  },
  create(presentationParam1301) {
    return presentationF.fromPartial(presentationParam1301 ?? {});
  },
  fromPartial(presentationParam950) {
    let presentationValue1086 = presentationHelper187();
    return (
      (presentationValue1086.color =
        presentationParam950.color !== void 0 &&
        presentationParam950.color !== null
          ? presentationRn.fromPartial(presentationParam950.color)
          : void 0),
      (presentationValue1086.radiusEmu =
        presentationParam950.radiusEmu ?? void 0),
      presentationValue1086
    );
  },
};
function presentationHelper188() {
  return {
    radiusEmu: void 0,
  };
}
var _presentationAt = {
  encode(presentationParam1091, presentationParam1092 = new presentationPr()) {
    return (
      presentationParam1091.radiusEmu !== void 0 &&
        presentationParam1092.uint32(8).int64(presentationParam1091.radiusEmu),
      presentationParam1092
    );
  },
  decode(presentationParam763, presentationParam764) {
    let presentationValue938 =
        presentationParam763 instanceof presentationFr
          ? presentationParam763
          : new presentationFr(presentationParam763),
      presentationValue939 =
        presentationParam764 === void 0
          ? presentationValue938.len
          : presentationValue938.pos + presentationParam764,
      presentationValue940 = presentationHelper188();
    for (; presentationValue938.pos < presentationValue939; ) {
      let presentationValue1110 = presentationValue938.uint32();
      switch (presentationValue1110 >>> 3) {
        case 1:
          if (presentationValue1110 !== 8) break;
          presentationValue940.radiusEmu = $(presentationValue938.int64());
          continue;
      }
      if ((presentationValue1110 & 7) == 4 || presentationValue1110 === 0)
        break;
      presentationValue938.skip(presentationValue1110 & 7);
    }
    return presentationValue940;
  },
  create(presentationParam1302) {
    return _presentationAt.fromPartial(presentationParam1302 ?? {});
  },
  fromPartial(presentationParam1125) {
    let presentationValue1248 = presentationHelper188();
    return (
      (presentationValue1248.radiusEmu =
        presentationParam1125.radiusEmu ?? void 0),
      presentationValue1248
    );
  },
};
function presentationHelper189() {
  return {
    blurRadiusEmu: void 0,
    startAlpha: void 0,
    startPosition: void 0,
    endAlpha: void 0,
    endPosition: void 0,
    distanceEmu: void 0,
    direction: void 0,
    fadeDirection: void 0,
    horizontalScale: void 0,
    verticalScale: void 0,
    horizontalSkew: void 0,
    verticalSkew: void 0,
    alignment: void 0,
    rotateWithShape: void 0,
  };
}
var _presentationTt = {
  encode(presentationParam76, presentationParam77 = new presentationPr()) {
    return (
      presentationParam76.blurRadiusEmu !== void 0 &&
        presentationParam77.uint32(8).int64(presentationParam76.blurRadiusEmu),
      presentationParam76.startAlpha !== void 0 &&
        presentationParam77.uint32(16).int32(presentationParam76.startAlpha),
      presentationParam76.startPosition !== void 0 &&
        presentationParam77.uint32(24).int32(presentationParam76.startPosition),
      presentationParam76.endAlpha !== void 0 &&
        presentationParam77.uint32(32).int32(presentationParam76.endAlpha),
      presentationParam76.endPosition !== void 0 &&
        presentationParam77.uint32(40).int32(presentationParam76.endPosition),
      presentationParam76.distanceEmu !== void 0 &&
        presentationParam77.uint32(48).int64(presentationParam76.distanceEmu),
      presentationParam76.direction !== void 0 &&
        presentationParam77.uint32(56).int32(presentationParam76.direction),
      presentationParam76.fadeDirection !== void 0 &&
        presentationParam77.uint32(64).int32(presentationParam76.fadeDirection),
      presentationParam76.horizontalScale !== void 0 &&
        presentationParam77
          .uint32(72)
          .int32(presentationParam76.horizontalScale),
      presentationParam76.verticalScale !== void 0 &&
        presentationParam77.uint32(80).int32(presentationParam76.verticalScale),
      presentationParam76.horizontalSkew !== void 0 &&
        presentationParam77
          .uint32(88)
          .int32(presentationParam76.horizontalSkew),
      presentationParam76.verticalSkew !== void 0 &&
        presentationParam77.uint32(96).int32(presentationParam76.verticalSkew),
      presentationParam76.alignment !== void 0 &&
        presentationParam77.uint32(106).string(presentationParam76.alignment),
      presentationParam76.rotateWithShape !== void 0 &&
        presentationParam77
          .uint32(112)
          .bool(presentationParam76.rotateWithShape),
      presentationParam77
    );
  },
  decode(presentationParam59, presentationParam60) {
    let presentationValue165 =
        presentationParam59 instanceof presentationFr
          ? presentationParam59
          : new presentationFr(presentationParam59),
      presentationValue166 =
        presentationParam60 === void 0
          ? presentationValue165.len
          : presentationValue165.pos + presentationParam60,
      presentationValue167 = presentationHelper189();
    for (; presentationValue165.pos < presentationValue166; ) {
      let presentationValue186 = presentationValue165.uint32();
      switch (presentationValue186 >>> 3) {
        case 1:
          if (presentationValue186 !== 8) break;
          presentationValue167.blurRadiusEmu = $(presentationValue165.int64());
          continue;
        case 2:
          if (presentationValue186 !== 16) break;
          presentationValue167.startAlpha = presentationValue165.int32();
          continue;
        case 3:
          if (presentationValue186 !== 24) break;
          presentationValue167.startPosition = presentationValue165.int32();
          continue;
        case 4:
          if (presentationValue186 !== 32) break;
          presentationValue167.endAlpha = presentationValue165.int32();
          continue;
        case 5:
          if (presentationValue186 !== 40) break;
          presentationValue167.endPosition = presentationValue165.int32();
          continue;
        case 6:
          if (presentationValue186 !== 48) break;
          presentationValue167.distanceEmu = $(presentationValue165.int64());
          continue;
        case 7:
          if (presentationValue186 !== 56) break;
          presentationValue167.direction = presentationValue165.int32();
          continue;
        case 8:
          if (presentationValue186 !== 64) break;
          presentationValue167.fadeDirection = presentationValue165.int32();
          continue;
        case 9:
          if (presentationValue186 !== 72) break;
          presentationValue167.horizontalScale = presentationValue165.int32();
          continue;
        case 10:
          if (presentationValue186 !== 80) break;
          presentationValue167.verticalScale = presentationValue165.int32();
          continue;
        case 11:
          if (presentationValue186 !== 88) break;
          presentationValue167.horizontalSkew = presentationValue165.int32();
          continue;
        case 12:
          if (presentationValue186 !== 96) break;
          presentationValue167.verticalSkew = presentationValue165.int32();
          continue;
        case 13:
          if (presentationValue186 !== 106) break;
          presentationValue167.alignment = presentationValue165.string();
          continue;
        case 14:
          if (presentationValue186 !== 112) break;
          presentationValue167.rotateWithShape = presentationValue165.bool();
          continue;
      }
      if ((presentationValue186 & 7) == 4 || presentationValue186 === 0) break;
      presentationValue165.skip(presentationValue186 & 7);
    }
    return presentationValue167;
  },
  create(presentationParam1303) {
    return _presentationTt.fromPartial(presentationParam1303 ?? {});
  },
  fromPartial(presentationParam193) {
    let presentationValue312 = presentationHelper189();
    return (
      (presentationValue312.blurRadiusEmu =
        presentationParam193.blurRadiusEmu ?? void 0),
      (presentationValue312.startAlpha =
        presentationParam193.startAlpha ?? void 0),
      (presentationValue312.startPosition =
        presentationParam193.startPosition ?? void 0),
      (presentationValue312.endAlpha = presentationParam193.endAlpha ?? void 0),
      (presentationValue312.endPosition =
        presentationParam193.endPosition ?? void 0),
      (presentationValue312.distanceEmu =
        presentationParam193.distanceEmu ?? void 0),
      (presentationValue312.direction =
        presentationParam193.direction ?? void 0),
      (presentationValue312.fadeDirection =
        presentationParam193.fadeDirection ?? void 0),
      (presentationValue312.horizontalScale =
        presentationParam193.horizontalScale ?? void 0),
      (presentationValue312.verticalScale =
        presentationParam193.verticalScale ?? void 0),
      (presentationValue312.horizontalSkew =
        presentationParam193.horizontalSkew ?? void 0),
      (presentationValue312.verticalSkew =
        presentationParam193.verticalSkew ?? void 0),
      (presentationValue312.alignment =
        presentationParam193.alignment ?? void 0),
      (presentationValue312.rotateWithShape =
        presentationParam193.rotateWithShape ?? void 0),
      presentationValue312
    );
  },
};
function presentationHelper190() {
  return {
    color: void 0,
    blurRadius: void 0,
    distance: void 0,
    direction: void 0,
    alignment: void 0,
    rotateWithShape: void 0,
    horizontalScale: void 0,
    verticalScale: void 0,
    horizontalSkew: void 0,
    verticalSkew: void 0,
  };
}
var _presentationOt = {
  encode(presentationParam160, presentationParam161 = new presentationPr()) {
    return (
      presentationParam160.color !== void 0 &&
        presentationRn
          .encode(
            presentationParam160.color,
            presentationParam161.uint32(18).fork(),
          )
          .join(),
      presentationParam160.blurRadius !== void 0 &&
        presentationParam161.uint32(24).int32(presentationParam160.blurRadius),
      presentationParam160.distance !== void 0 &&
        presentationParam161.uint32(32).int32(presentationParam160.distance),
      presentationParam160.direction !== void 0 &&
        presentationParam161.uint32(40).int32(presentationParam160.direction),
      presentationParam160.alignment !== void 0 &&
        presentationParam161.uint32(50).string(presentationParam160.alignment),
      presentationParam160.rotateWithShape !== void 0 &&
        presentationParam161
          .uint32(56)
          .bool(presentationParam160.rotateWithShape),
      presentationParam160.horizontalScale !== void 0 &&
        presentationParam161
          .uint32(64)
          .int32(presentationParam160.horizontalScale),
      presentationParam160.verticalScale !== void 0 &&
        presentationParam161
          .uint32(72)
          .int32(presentationParam160.verticalScale),
      presentationParam160.horizontalSkew !== void 0 &&
        presentationParam161
          .uint32(80)
          .int32(presentationParam160.horizontalSkew),
      presentationParam160.verticalSkew !== void 0 &&
        presentationParam161
          .uint32(88)
          .int32(presentationParam160.verticalSkew),
      presentationParam161
    );
  },
  decode(presentationParam111, presentationParam112) {
    let presentationValue225 =
        presentationParam111 instanceof presentationFr
          ? presentationParam111
          : new presentationFr(presentationParam111),
      presentationValue226 =
        presentationParam112 === void 0
          ? presentationValue225.len
          : presentationValue225.pos + presentationParam112,
      presentationValue227 = presentationHelper190();
    for (; presentationValue225.pos < presentationValue226; ) {
      let presentationValue279 = presentationValue225.uint32();
      switch (presentationValue279 >>> 3) {
        case 2:
          if (presentationValue279 !== 18) break;
          presentationValue227.color = presentationRn.decode(
            presentationValue225,
            presentationValue225.uint32(),
          );
          continue;
        case 3:
          if (presentationValue279 !== 24) break;
          presentationValue227.blurRadius = presentationValue225.int32();
          continue;
        case 4:
          if (presentationValue279 !== 32) break;
          presentationValue227.distance = presentationValue225.int32();
          continue;
        case 5:
          if (presentationValue279 !== 40) break;
          presentationValue227.direction = presentationValue225.int32();
          continue;
        case 6:
          if (presentationValue279 !== 50) break;
          presentationValue227.alignment = presentationValue225.string();
          continue;
        case 7:
          if (presentationValue279 !== 56) break;
          presentationValue227.rotateWithShape = presentationValue225.bool();
          continue;
        case 8:
          if (presentationValue279 !== 64) break;
          presentationValue227.horizontalScale = presentationValue225.int32();
          continue;
        case 9:
          if (presentationValue279 !== 72) break;
          presentationValue227.verticalScale = presentationValue225.int32();
          continue;
        case 10:
          if (presentationValue279 !== 80) break;
          presentationValue227.horizontalSkew = presentationValue225.int32();
          continue;
        case 11:
          if (presentationValue279 !== 88) break;
          presentationValue227.verticalSkew = presentationValue225.int32();
          continue;
      }
      if ((presentationValue279 & 7) == 4 || presentationValue279 === 0) break;
      presentationValue225.skip(presentationValue279 & 7);
    }
    return presentationValue227;
  },
  create(presentationParam1304) {
    return _presentationOt.fromPartial(presentationParam1304 ?? {});
  },
  fromPartial(presentationParam302) {
    let presentationValue445 = presentationHelper190();
    return (
      (presentationValue445.color =
        presentationParam302.color !== void 0 &&
        presentationParam302.color !== null
          ? presentationRn.fromPartial(presentationParam302.color)
          : void 0),
      (presentationValue445.blurRadius =
        presentationParam302.blurRadius ?? void 0),
      (presentationValue445.distance = presentationParam302.distance ?? void 0),
      (presentationValue445.direction =
        presentationParam302.direction ?? void 0),
      (presentationValue445.alignment =
        presentationParam302.alignment ?? void 0),
      (presentationValue445.rotateWithShape =
        presentationParam302.rotateWithShape ?? void 0),
      (presentationValue445.horizontalScale =
        presentationParam302.horizontalScale ?? void 0),
      (presentationValue445.verticalScale =
        presentationParam302.verticalScale ?? void 0),
      (presentationValue445.horizontalSkew =
        presentationParam302.horizontalSkew ?? void 0),
      (presentationValue445.verticalSkew =
        presentationParam302.verticalSkew ?? void 0),
      presentationValue445
    );
  },
};
function presentationHelper191() {
  return {
    anchor: ``,
  };
}
var ___presentationN = {
  encode(presentationParam1119, presentationParam1120 = new presentationPr()) {
    return (
      presentationParam1119.anchor !== `` &&
        presentationParam1120.uint32(10).string(presentationParam1119.anchor),
      presentationParam1120
    );
  },
  decode(presentationParam779, presentationParam780) {
    let presentationValue961 =
        presentationParam779 instanceof presentationFr
          ? presentationParam779
          : new presentationFr(presentationParam779),
      presentationValue962 =
        presentationParam780 === void 0
          ? presentationValue961.len
          : presentationValue961.pos + presentationParam780,
      presentationValue963 = presentationHelper191();
    for (; presentationValue961.pos < presentationValue962; ) {
      let presentationValue1120 = presentationValue961.uint32();
      switch (presentationValue1120 >>> 3) {
        case 1:
          if (presentationValue1120 !== 10) break;
          presentationValue963.anchor = presentationValue961.string();
          continue;
      }
      if ((presentationValue1120 & 7) == 4 || presentationValue1120 === 0)
        break;
      presentationValue961.skip(presentationValue1120 & 7);
    }
    return presentationValue963;
  },
  create(presentationParam1305) {
    return ___presentationN.fromPartial(presentationParam1305 ?? {});
  },
  fromPartial(presentationParam1142) {
    let presentationValue1311 = presentationHelper191();
    return (
      (presentationValue1311.anchor = presentationParam1142.anchor ?? ``),
      presentationValue1311
    );
  },
};
function presentationHelper192() {
  return {
    geometry: 0,
    fill: void 0,
    line: void 0,
    adjustmentList: [],
    rectFormula: void 0,
    customPaths: [],
  };
}
var _presentationLt = {
  encode(presentationParam334, presentationParam335 = new presentationPr()) {
    (presentationParam334.geometry !== 0 &&
      presentationParam335.uint32(8).int32(presentationParam334.geometry),
      presentationParam334.fill !== void 0 &&
        presentationHn
          .encode(
            presentationParam334.fill,
            presentationParam335.uint32(42).fork(),
          )
          .join(),
      presentationParam334.line !== void 0 &&
        presentationJn
          .encode(
            presentationParam334.line,
            presentationParam335.uint32(50).fork(),
          )
          .join());
    for (let presentationValue1233 of presentationParam334.adjustmentList)
      ___presentationT
        .encode(presentationValue1233, presentationParam335.uint32(58).fork())
        .join();
    presentationParam334.rectFormula !== void 0 &&
      _presentationEt
        .encode(
          presentationParam334.rectFormula,
          presentationParam335.uint32(66).fork(),
        )
        .join();
    for (let presentationValue1249 of presentationParam334.customPaths)
      _presentationW
        .encode(presentationValue1249, presentationParam335.uint32(74).fork())
        .join();
    return presentationParam335;
  },
  decode(presentationParam180, presentationParam181) {
    let presentationValue302 =
        presentationParam180 instanceof presentationFr
          ? presentationParam180
          : new presentationFr(presentationParam180),
      presentationValue303 =
        presentationParam181 === void 0
          ? presentationValue302.len
          : presentationValue302.pos + presentationParam181,
      presentationValue304 = presentationHelper192();
    for (; presentationValue302.pos < presentationValue303; ) {
      let presentationValue406 = presentationValue302.uint32();
      switch (presentationValue406 >>> 3) {
        case 1:
          if (presentationValue406 !== 8) break;
          presentationValue304.geometry = presentationValue302.int32();
          continue;
        case 5:
          if (presentationValue406 !== 42) break;
          presentationValue304.fill = presentationHn.decode(
            presentationValue302,
            presentationValue302.uint32(),
          );
          continue;
        case 6:
          if (presentationValue406 !== 50) break;
          presentationValue304.line = presentationJn.decode(
            presentationValue302,
            presentationValue302.uint32(),
          );
          continue;
        case 7:
          if (presentationValue406 !== 58) break;
          presentationValue304.adjustmentList.push(
            ___presentationT.decode(
              presentationValue302,
              presentationValue302.uint32(),
            ),
          );
          continue;
        case 8:
          if (presentationValue406 !== 66) break;
          presentationValue304.rectFormula = _presentationEt.decode(
            presentationValue302,
            presentationValue302.uint32(),
          );
          continue;
        case 9:
          if (presentationValue406 !== 74) break;
          presentationValue304.customPaths.push(
            _presentationW.decode(
              presentationValue302,
              presentationValue302.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue406 & 7) == 4 || presentationValue406 === 0) break;
      presentationValue302.skip(presentationValue406 & 7);
    }
    return presentationValue304;
  },
  create(presentationParam1306) {
    return _presentationLt.fromPartial(presentationParam1306 ?? {});
  },
  fromPartial(presentationParam331) {
    let presentationValue476 = presentationHelper192();
    return (
      (presentationValue476.geometry = presentationParam331.geometry ?? 0),
      (presentationValue476.fill =
        presentationParam331.fill !== void 0 &&
        presentationParam331.fill !== null
          ? presentationHn.fromPartial(presentationParam331.fill)
          : void 0),
      (presentationValue476.line =
        presentationParam331.line !== void 0 &&
        presentationParam331.line !== null
          ? presentationJn.fromPartial(presentationParam331.line)
          : void 0),
      (presentationValue476.adjustmentList =
        presentationParam331.adjustmentList?.map((presentationParam1460) =>
          ___presentationT.fromPartial(presentationParam1460),
        ) || []),
      (presentationValue476.rectFormula =
        presentationParam331.rectFormula !== void 0 &&
        presentationParam331.rectFormula !== null
          ? _presentationEt.fromPartial(presentationParam331.rectFormula)
          : void 0),
      (presentationValue476.customPaths =
        presentationParam331.customPaths?.map((presentationParam1425) =>
          _presentationW.fromPartial(presentationParam1425),
        ) || []),
      presentationValue476
    );
  },
};
function presentationHelper193() {
  return {
    name: ``,
    formula: ``,
  };
}
var ___presentationT = {
  encode(presentationParam1005, presentationParam1006 = new presentationPr()) {
    return (
      presentationParam1005.name !== `` &&
        presentationParam1006.uint32(10).string(presentationParam1005.name),
      presentationParam1005.formula !== `` &&
        presentationParam1006.uint32(18).string(presentationParam1005.formula),
      presentationParam1006
    );
  },
  decode(presentationParam635, presentationParam636) {
    let presentationValue838 =
        presentationParam635 instanceof presentationFr
          ? presentationParam635
          : new presentationFr(presentationParam635),
      presentationValue839 =
        presentationParam636 === void 0
          ? presentationValue838.len
          : presentationValue838.pos + presentationParam636,
      presentationValue840 = presentationHelper193();
    for (; presentationValue838.pos < presentationValue839; ) {
      let presentationValue1042 = presentationValue838.uint32();
      switch (presentationValue1042 >>> 3) {
        case 1:
          if (presentationValue1042 !== 10) break;
          presentationValue840.name = presentationValue838.string();
          continue;
        case 2:
          if (presentationValue1042 !== 18) break;
          presentationValue840.formula = presentationValue838.string();
          continue;
      }
      if ((presentationValue1042 & 7) == 4 || presentationValue1042 === 0)
        break;
      presentationValue838.skip(presentationValue1042 & 7);
    }
    return presentationValue840;
  },
  create(presentationParam1365) {
    return ___presentationT.fromPartial(presentationParam1365 ?? {});
  },
  fromPartial(presentationParam1101) {
    let presentationValue1199 = presentationHelper193();
    return (
      (presentationValue1199.name = presentationParam1101.name ?? ``),
      (presentationValue1199.formula = presentationParam1101.formula ?? ``),
      presentationValue1199
    );
  },
};
function presentationHelper194() {
  return {
    geometry: ``,
    cropLeft: 0,
    cropTop: 0,
    cropRight: 0,
    cropBottom: 0,
    adjustmentList: [],
  };
}
var _presentationR = {
  encode(presentationParam458, presentationParam459 = new presentationPr()) {
    (presentationParam458.geometry !== `` &&
      presentationParam459.uint32(10).string(presentationParam458.geometry),
      presentationParam458.cropLeft !== 0 &&
        presentationParam459.uint32(16).uint32(presentationParam458.cropLeft),
      presentationParam458.cropTop !== 0 &&
        presentationParam459.uint32(24).uint32(presentationParam458.cropTop),
      presentationParam458.cropRight !== 0 &&
        presentationParam459.uint32(32).uint32(presentationParam458.cropRight),
      presentationParam458.cropBottom !== 0 &&
        presentationParam459
          .uint32(40)
          .uint32(presentationParam458.cropBottom));
    for (let presentationValue1234 of presentationParam458.adjustmentList)
      ___presentationT
        .encode(presentationValue1234, presentationParam459.uint32(50).fork())
        .join();
    return presentationParam459;
  },
  decode(presentationParam221, presentationParam222) {
    let presentationValue350 =
        presentationParam221 instanceof presentationFr
          ? presentationParam221
          : new presentationFr(presentationParam221),
      presentationValue351 =
        presentationParam222 === void 0
          ? presentationValue350.len
          : presentationValue350.pos + presentationParam222,
      presentationValue352 = presentationHelper194();
    for (; presentationValue350.pos < presentationValue351; ) {
      let presentationValue469 = presentationValue350.uint32();
      switch (presentationValue469 >>> 3) {
        case 1:
          if (presentationValue469 !== 10) break;
          presentationValue352.geometry = presentationValue350.string();
          continue;
        case 2:
          if (presentationValue469 !== 16) break;
          presentationValue352.cropLeft = presentationValue350.uint32();
          continue;
        case 3:
          if (presentationValue469 !== 24) break;
          presentationValue352.cropTop = presentationValue350.uint32();
          continue;
        case 4:
          if (presentationValue469 !== 32) break;
          presentationValue352.cropRight = presentationValue350.uint32();
          continue;
        case 5:
          if (presentationValue469 !== 40) break;
          presentationValue352.cropBottom = presentationValue350.uint32();
          continue;
        case 6:
          if (presentationValue469 !== 50) break;
          presentationValue352.adjustmentList.push(
            ___presentationT.decode(
              presentationValue350,
              presentationValue350.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue469 & 7) == 4 || presentationValue469 === 0) break;
      presentationValue350.skip(presentationValue469 & 7);
    }
    return presentationValue352;
  },
  create(presentationParam1366) {
    return _presentationR.fromPartial(presentationParam1366 ?? {});
  },
  fromPartial(presentationParam741) {
    let presentationValue921 = presentationHelper194();
    return (
      (presentationValue921.geometry = presentationParam741.geometry ?? ``),
      (presentationValue921.cropLeft = presentationParam741.cropLeft ?? 0),
      (presentationValue921.cropTop = presentationParam741.cropTop ?? 0),
      (presentationValue921.cropRight = presentationParam741.cropRight ?? 0),
      (presentationValue921.cropBottom = presentationParam741.cropBottom ?? 0),
      (presentationValue921.adjustmentList =
        presentationParam741.adjustmentList?.map((presentationParam1461) =>
          ___presentationT.fromPartial(presentationParam1461),
        ) || []),
      presentationValue921
    );
  },
};
function presentationHelper195() {
  return {
    contentType: ``,
    data: new Uint8Array(),
    mask: void 0,
    alt: ``,
  };
}
var presentationL = {
  encode(presentationParam749, presentationParam750 = new presentationPr()) {
    return (
      presentationParam749.contentType !== `` &&
        presentationParam750
          .uint32(10)
          .string(presentationParam749.contentType),
      presentationParam749.data.length !== 0 &&
        presentationParam750.uint32(18).bytes(presentationParam749.data),
      presentationParam749.mask !== void 0 &&
        _presentationR
          .encode(
            presentationParam749.mask,
            presentationParam750.uint32(26).fork(),
          )
          .join(),
      presentationParam749.alt !== `` &&
        presentationParam750.uint32(34).string(presentationParam749.alt),
      presentationParam750
    );
  },
  decode(presentationParam382, presentationParam383) {
    let presentationValue526 =
        presentationParam382 instanceof presentationFr
          ? presentationParam382
          : new presentationFr(presentationParam382),
      presentationValue527 =
        presentationParam383 === void 0
          ? presentationValue526.len
          : presentationValue526.pos + presentationParam383,
      presentationValue528 = presentationHelper195();
    for (; presentationValue526.pos < presentationValue527; ) {
      let presentationValue763 = presentationValue526.uint32();
      switch (presentationValue763 >>> 3) {
        case 1:
          if (presentationValue763 !== 10) break;
          presentationValue528.contentType = presentationValue526.string();
          continue;
        case 2:
          if (presentationValue763 !== 18) break;
          presentationValue528.data = presentationValue526.bytes();
          continue;
        case 3:
          if (presentationValue763 !== 26) break;
          presentationValue528.mask = _presentationR.decode(
            presentationValue526,
            presentationValue526.uint32(),
          );
          continue;
        case 4:
          if (presentationValue763 !== 34) break;
          presentationValue528.alt = presentationValue526.string();
          continue;
      }
      if ((presentationValue763 & 7) == 4 || presentationValue763 === 0) break;
      presentationValue526.skip(presentationValue763 & 7);
    }
    return presentationValue528;
  },
  create(presentationParam1307) {
    return presentationL.fromPartial(presentationParam1307 ?? {});
  },
  fromPartial(presentationParam859) {
    let presentationValue1028 = presentationHelper195();
    return (
      (presentationValue1028.contentType =
        presentationParam859.contentType ?? ``),
      (presentationValue1028.data =
        presentationParam859.data ?? new Uint8Array()),
      (presentationValue1028.mask =
        presentationParam859.mask !== void 0 &&
        presentationParam859.mask !== null
          ? _presentationR.fromPartial(presentationParam859.mask)
          : void 0),
      (presentationValue1028.alt = presentationParam859.alt ?? ``),
      presentationValue1028
    );
  },
};
function presentationHelper196() {
  return {
    contentType: ``,
    data: new Uint8Array(),
    mask: void 0,
    alt: ``,
  };
}
var _presentationJt = {
  encode(presentationParam751, presentationParam752 = new presentationPr()) {
    return (
      presentationParam751.contentType !== `` &&
        presentationParam752
          .uint32(10)
          .string(presentationParam751.contentType),
      presentationParam751.data.length !== 0 &&
        presentationParam752.uint32(18).bytes(presentationParam751.data),
      presentationParam751.mask !== void 0 &&
        _presentationR
          .encode(
            presentationParam751.mask,
            presentationParam752.uint32(26).fork(),
          )
          .join(),
      presentationParam751.alt !== `` &&
        presentationParam752.uint32(34).string(presentationParam751.alt),
      presentationParam752
    );
  },
  decode(presentationParam384, presentationParam385) {
    let presentationValue529 =
        presentationParam384 instanceof presentationFr
          ? presentationParam384
          : new presentationFr(presentationParam384),
      presentationValue530 =
        presentationParam385 === void 0
          ? presentationValue529.len
          : presentationValue529.pos + presentationParam385,
      presentationValue531 = presentationHelper196();
    for (; presentationValue529.pos < presentationValue530; ) {
      let presentationValue764 = presentationValue529.uint32();
      switch (presentationValue764 >>> 3) {
        case 1:
          if (presentationValue764 !== 10) break;
          presentationValue531.contentType = presentationValue529.string();
          continue;
        case 2:
          if (presentationValue764 !== 18) break;
          presentationValue531.data = presentationValue529.bytes();
          continue;
        case 3:
          if (presentationValue764 !== 26) break;
          presentationValue531.mask = _presentationR.decode(
            presentationValue529,
            presentationValue529.uint32(),
          );
          continue;
        case 4:
          if (presentationValue764 !== 34) break;
          presentationValue531.alt = presentationValue529.string();
          continue;
      }
      if ((presentationValue764 & 7) == 4 || presentationValue764 === 0) break;
      presentationValue529.skip(presentationValue764 & 7);
    }
    return presentationValue531;
  },
  create(presentationParam1308) {
    return _presentationJt.fromPartial(presentationParam1308 ?? {});
  },
  fromPartial(presentationParam860) {
    let presentationValue1029 = presentationHelper196();
    return (
      (presentationValue1029.contentType =
        presentationParam860.contentType ?? ``),
      (presentationValue1029.data =
        presentationParam860.data ?? new Uint8Array()),
      (presentationValue1029.mask =
        presentationParam860.mask !== void 0 &&
        presentationParam860.mask !== null
          ? _presentationR.fromPartial(presentationParam860.mask)
          : void 0),
      (presentationValue1029.alt = presentationParam860.alt ?? ``),
      presentationValue1029
    );
  },
};
function presentationHelper197() {
  return {
    accent1: ``,
    accent2: ``,
    accent3: ``,
    accent4: ``,
    accent5: ``,
    accent6: ``,
    bg1: ``,
    bg2: ``,
    tx1: ``,
    tx2: ``,
    hlink: ``,
    folHlink: ``,
  };
}
var _presentationF = {
  encode(presentationParam200, presentationParam201 = new presentationPr()) {
    return (
      presentationParam200.accent1 !== `` &&
        presentationParam201.uint32(10).string(presentationParam200.accent1),
      presentationParam200.accent2 !== `` &&
        presentationParam201.uint32(18).string(presentationParam200.accent2),
      presentationParam200.accent3 !== `` &&
        presentationParam201.uint32(26).string(presentationParam200.accent3),
      presentationParam200.accent4 !== `` &&
        presentationParam201.uint32(34).string(presentationParam200.accent4),
      presentationParam200.accent5 !== `` &&
        presentationParam201.uint32(42).string(presentationParam200.accent5),
      presentationParam200.accent6 !== `` &&
        presentationParam201.uint32(50).string(presentationParam200.accent6),
      presentationParam200.bg1 !== `` &&
        presentationParam201.uint32(58).string(presentationParam200.bg1),
      presentationParam200.bg2 !== `` &&
        presentationParam201.uint32(66).string(presentationParam200.bg2),
      presentationParam200.tx1 !== `` &&
        presentationParam201.uint32(74).string(presentationParam200.tx1),
      presentationParam200.tx2 !== `` &&
        presentationParam201.uint32(82).string(presentationParam200.tx2),
      presentationParam200.hlink !== `` &&
        presentationParam201.uint32(90).string(presentationParam200.hlink),
      presentationParam200.folHlink !== `` &&
        presentationParam201.uint32(98).string(presentationParam200.folHlink),
      presentationParam201
    );
  },
  decode(presentationParam90, presentationParam91) {
    let presentationValue203 =
        presentationParam90 instanceof presentationFr
          ? presentationParam90
          : new presentationFr(presentationParam90),
      presentationValue204 =
        presentationParam91 === void 0
          ? presentationValue203.len
          : presentationValue203.pos + presentationParam91,
      presentationValue205 = presentationHelper197();
    for (; presentationValue203.pos < presentationValue204; ) {
      let presentationValue254 = presentationValue203.uint32();
      switch (presentationValue254 >>> 3) {
        case 1:
          if (presentationValue254 !== 10) break;
          presentationValue205.accent1 = presentationValue203.string();
          continue;
        case 2:
          if (presentationValue254 !== 18) break;
          presentationValue205.accent2 = presentationValue203.string();
          continue;
        case 3:
          if (presentationValue254 !== 26) break;
          presentationValue205.accent3 = presentationValue203.string();
          continue;
        case 4:
          if (presentationValue254 !== 34) break;
          presentationValue205.accent4 = presentationValue203.string();
          continue;
        case 5:
          if (presentationValue254 !== 42) break;
          presentationValue205.accent5 = presentationValue203.string();
          continue;
        case 6:
          if (presentationValue254 !== 50) break;
          presentationValue205.accent6 = presentationValue203.string();
          continue;
        case 7:
          if (presentationValue254 !== 58) break;
          presentationValue205.bg1 = presentationValue203.string();
          continue;
        case 8:
          if (presentationValue254 !== 66) break;
          presentationValue205.bg2 = presentationValue203.string();
          continue;
        case 9:
          if (presentationValue254 !== 74) break;
          presentationValue205.tx1 = presentationValue203.string();
          continue;
        case 10:
          if (presentationValue254 !== 82) break;
          presentationValue205.tx2 = presentationValue203.string();
          continue;
        case 11:
          if (presentationValue254 !== 90) break;
          presentationValue205.hlink = presentationValue203.string();
          continue;
        case 12:
          if (presentationValue254 !== 98) break;
          presentationValue205.folHlink = presentationValue203.string();
          continue;
      }
      if ((presentationValue254 & 7) == 4 || presentationValue254 === 0) break;
      presentationValue203.skip(presentationValue254 & 7);
    }
    return presentationValue205;
  },
  create(presentationParam1309) {
    return _presentationF.fromPartial(presentationParam1309 ?? {});
  },
  fromPartial(presentationParam565) {
    let presentationValue742 = presentationHelper197();
    return (
      (presentationValue742.accent1 = presentationParam565.accent1 ?? ``),
      (presentationValue742.accent2 = presentationParam565.accent2 ?? ``),
      (presentationValue742.accent3 = presentationParam565.accent3 ?? ``),
      (presentationValue742.accent4 = presentationParam565.accent4 ?? ``),
      (presentationValue742.accent5 = presentationParam565.accent5 ?? ``),
      (presentationValue742.accent6 = presentationParam565.accent6 ?? ``),
      (presentationValue742.bg1 = presentationParam565.bg1 ?? ``),
      (presentationValue742.bg2 = presentationParam565.bg2 ?? ``),
      (presentationValue742.tx1 = presentationParam565.tx1 ?? ``),
      (presentationValue742.tx2 = presentationParam565.tx2 ?? ``),
      (presentationValue742.hlink = presentationParam565.hlink ?? ``),
      (presentationValue742.folHlink = presentationParam565.folHlink ?? ``),
      presentationValue742
    );
  },
};
function presentationHelper198() {
  return {
    t: ``,
    l: ``,
    r: ``,
    b: ``,
  };
}
var _presentationEt = {
  encode(presentationParam881, presentationParam882 = new presentationPr()) {
    return (
      presentationParam881.t !== `` &&
        presentationParam882.uint32(10).string(presentationParam881.t),
      presentationParam881.l !== `` &&
        presentationParam882.uint32(18).string(presentationParam881.l),
      presentationParam881.r !== `` &&
        presentationParam882.uint32(26).string(presentationParam881.r),
      presentationParam881.b !== `` &&
        presentationParam882.uint32(34).string(presentationParam881.b),
      presentationParam882
    );
  },
  decode(presentationParam435, presentationParam436) {
    let presentationValue587 =
        presentationParam435 instanceof presentationFr
          ? presentationParam435
          : new presentationFr(presentationParam435),
      presentationValue588 =
        presentationParam436 === void 0
          ? presentationValue587.len
          : presentationValue587.pos + presentationParam436,
      presentationValue589 = presentationHelper198();
    for (; presentationValue587.pos < presentationValue588; ) {
      let presentationValue867 = presentationValue587.uint32();
      switch (presentationValue867 >>> 3) {
        case 1:
          if (presentationValue867 !== 10) break;
          presentationValue589.t = presentationValue587.string();
          continue;
        case 2:
          if (presentationValue867 !== 18) break;
          presentationValue589.l = presentationValue587.string();
          continue;
        case 3:
          if (presentationValue867 !== 26) break;
          presentationValue589.r = presentationValue587.string();
          continue;
        case 4:
          if (presentationValue867 !== 34) break;
          presentationValue589.b = presentationValue587.string();
          continue;
      }
      if ((presentationValue867 & 7) == 4 || presentationValue867 === 0) break;
      presentationValue587.skip(presentationValue867 & 7);
    }
    return presentationValue589;
  },
  create(presentationParam1310) {
    return _presentationEt.fromPartial(presentationParam1310 ?? {});
  },
  fromPartial(presentationParam1084) {
    let presentationValue1185 = presentationHelper198();
    return (
      (presentationValue1185.t = presentationParam1084.t ?? ``),
      (presentationValue1185.l = presentationParam1084.l ?? ``),
      (presentationValue1185.r = presentationParam1084.r ?? ``),
      (presentationValue1185.b = presentationParam1084.b ?? ``),
      presentationValue1185
    );
  },
};
function presentationHelper199() {
  return {
    x: 0,
    y: 0,
  };
}
var _presentationJ = {
  encode(presentationParam1053, presentationParam1054 = new presentationPr()) {
    return (
      presentationParam1053.x !== 0 &&
        presentationParam1054.uint32(8).int64(presentationParam1053.x),
      presentationParam1053.y !== 0 &&
        presentationParam1054.uint32(16).int64(presentationParam1053.y),
      presentationParam1054
    );
  },
  decode(presentationParam645, presentationParam646) {
    let presentationValue850 =
        presentationParam645 instanceof presentationFr
          ? presentationParam645
          : new presentationFr(presentationParam645),
      presentationValue851 =
        presentationParam646 === void 0
          ? presentationValue850.len
          : presentationValue850.pos + presentationParam646,
      presentationValue852 = presentationHelper199();
    for (; presentationValue850.pos < presentationValue851; ) {
      let presentationValue1057 = presentationValue850.uint32();
      switch (presentationValue1057 >>> 3) {
        case 1:
          if (presentationValue1057 !== 8) break;
          presentationValue852.x = $(presentationValue850.int64());
          continue;
        case 2:
          if (presentationValue1057 !== 16) break;
          presentationValue852.y = $(presentationValue850.int64());
          continue;
      }
      if ((presentationValue1057 & 7) == 4 || presentationValue1057 === 0)
        break;
      presentationValue850.skip(presentationValue1057 & 7);
    }
    return presentationValue852;
  },
  create(presentationParam1311) {
    return _presentationJ.fromPartial(presentationParam1311 ?? {});
  },
  fromPartial(presentationParam1143) {
    let presentationValue1312 = presentationHelper199();
    return (
      (presentationValue1312.x = presentationParam1143.x ?? 0),
      (presentationValue1312.y = presentationParam1143.y ?? 0),
      presentationValue1312
    );
  },
};
function presentationHelper200() {
  return {
    x: 0,
    y: 0,
  };
}
var _presentationQ = {
  encode(presentationParam1055, presentationParam1056 = new presentationPr()) {
    return (
      presentationParam1055.x !== 0 &&
        presentationParam1056.uint32(8).int64(presentationParam1055.x),
      presentationParam1055.y !== 0 &&
        presentationParam1056.uint32(16).int64(presentationParam1055.y),
      presentationParam1056
    );
  },
  decode(presentationParam647, presentationParam648) {
    let presentationValue853 =
        presentationParam647 instanceof presentationFr
          ? presentationParam647
          : new presentationFr(presentationParam647),
      presentationValue854 =
        presentationParam648 === void 0
          ? presentationValue853.len
          : presentationValue853.pos + presentationParam648,
      presentationValue855 = presentationHelper200();
    for (; presentationValue853.pos < presentationValue854; ) {
      let presentationValue1058 = presentationValue853.uint32();
      switch (presentationValue1058 >>> 3) {
        case 1:
          if (presentationValue1058 !== 8) break;
          presentationValue855.x = $(presentationValue853.int64());
          continue;
        case 2:
          if (presentationValue1058 !== 16) break;
          presentationValue855.y = $(presentationValue853.int64());
          continue;
      }
      if ((presentationValue1058 & 7) == 4 || presentationValue1058 === 0)
        break;
      presentationValue853.skip(presentationValue1058 & 7);
    }
    return presentationValue855;
  },
  create(presentationParam1312) {
    return _presentationQ.fromPartial(presentationParam1312 ?? {});
  },
  fromPartial(presentationParam1144) {
    let presentationValue1313 = presentationHelper200();
    return (
      (presentationValue1313.x = presentationParam1144.x ?? 0),
      (presentationValue1313.y = presentationParam1144.y ?? 0),
      presentationValue1313
    );
  },
};
function presentationHelper201() {
  return {};
}
var presentationW = {
  encode(presentationParam1376, presentationParam1377 = new presentationPr()) {
    return presentationParam1377;
  },
  decode(presentationParam877, presentationParam878) {
    let presentationValue1049 =
        presentationParam877 instanceof presentationFr
          ? presentationParam877
          : new presentationFr(presentationParam877),
      presentationValue1050 =
        presentationParam878 === void 0
          ? presentationValue1049.len
          : presentationValue1049.pos + presentationParam878,
      presentationValue1051 = presentationHelper201();
    for (; presentationValue1049.pos < presentationValue1050; ) {
      let presentationValue1229 = presentationValue1049.uint32();
      switch (presentationValue1229 >>> 3) {
      }
      if ((presentationValue1229 & 7) == 4 || presentationValue1229 === 0)
        break;
      presentationValue1049.skip(presentationValue1229 & 7);
    }
    return presentationValue1051;
  },
  create(presentationParam1313) {
    return presentationW.fromPartial(presentationParam1313 ?? {});
  },
  fromPartial(presentationParam1378) {
    return presentationHelper201();
  },
};
function presentationHelper202() {
  return {
    x1: 0,
    y1: 0,
    x: 0,
    y: 0,
  };
}
var presentationY = {
  encode(presentationParam894, presentationParam895 = new presentationPr()) {
    return (
      presentationParam894.x1 !== 0 &&
        presentationParam895.uint32(8).int64(presentationParam894.x1),
      presentationParam894.y1 !== 0 &&
        presentationParam895.uint32(16).int64(presentationParam894.y1),
      presentationParam894.x !== 0 &&
        presentationParam895.uint32(24).int64(presentationParam894.x),
      presentationParam894.y !== 0 &&
        presentationParam895.uint32(32).int64(presentationParam894.y),
      presentationParam895
    );
  },
  decode(presentationParam426, presentationParam427) {
    let presentationValue574 =
        presentationParam426 instanceof presentationFr
          ? presentationParam426
          : new presentationFr(presentationParam426),
      presentationValue575 =
        presentationParam427 === void 0
          ? presentationValue574.len
          : presentationValue574.pos + presentationParam427,
      presentationValue576 = presentationHelper202();
    for (; presentationValue574.pos < presentationValue575; ) {
      let presentationValue861 = presentationValue574.uint32();
      switch (presentationValue861 >>> 3) {
        case 1:
          if (presentationValue861 !== 8) break;
          presentationValue576.x1 = $(presentationValue574.int64());
          continue;
        case 2:
          if (presentationValue861 !== 16) break;
          presentationValue576.y1 = $(presentationValue574.int64());
          continue;
        case 3:
          if (presentationValue861 !== 24) break;
          presentationValue576.x = $(presentationValue574.int64());
          continue;
        case 4:
          if (presentationValue861 !== 32) break;
          presentationValue576.y = $(presentationValue574.int64());
          continue;
      }
      if ((presentationValue861 & 7) == 4 || presentationValue861 === 0) break;
      presentationValue574.skip(presentationValue861 & 7);
    }
    return presentationValue576;
  },
  create(presentationParam1314) {
    return presentationY.fromPartial(presentationParam1314 ?? {});
  },
  fromPartial(presentationParam1085) {
    let presentationValue1186 = presentationHelper202();
    return (
      (presentationValue1186.x1 = presentationParam1085.x1 ?? 0),
      (presentationValue1186.y1 = presentationParam1085.y1 ?? 0),
      (presentationValue1186.x = presentationParam1085.x ?? 0),
      (presentationValue1186.y = presentationParam1085.y ?? 0),
      presentationValue1186
    );
  },
};
function presentationHelper203() {
  return {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    x: 0,
    y: 0,
  };
}
var _presentationK = {
  encode(presentationParam734, presentationParam735 = new presentationPr()) {
    return (
      presentationParam734.x1 !== 0 &&
        presentationParam735.uint32(8).int64(presentationParam734.x1),
      presentationParam734.y1 !== 0 &&
        presentationParam735.uint32(16).int64(presentationParam734.y1),
      presentationParam734.x2 !== 0 &&
        presentationParam735.uint32(24).int64(presentationParam734.x2),
      presentationParam734.y2 !== 0 &&
        presentationParam735.uint32(32).int64(presentationParam734.y2),
      presentationParam734.x !== 0 &&
        presentationParam735.uint32(40).int64(presentationParam734.x),
      presentationParam734.y !== 0 &&
        presentationParam735.uint32(48).int64(presentationParam734.y),
      presentationParam735
    );
  },
  decode(presentationParam276, presentationParam277) {
    let presentationValue407 =
        presentationParam276 instanceof presentationFr
          ? presentationParam276
          : new presentationFr(presentationParam276),
      presentationValue408 =
        presentationParam277 === void 0
          ? presentationValue407.len
          : presentationValue407.pos + presentationParam277,
      presentationValue409 = presentationHelper203();
    for (; presentationValue407.pos < presentationValue408; ) {
      let presentationValue577 = presentationValue407.uint32();
      switch (presentationValue577 >>> 3) {
        case 1:
          if (presentationValue577 !== 8) break;
          presentationValue409.x1 = $(presentationValue407.int64());
          continue;
        case 2:
          if (presentationValue577 !== 16) break;
          presentationValue409.y1 = $(presentationValue407.int64());
          continue;
        case 3:
          if (presentationValue577 !== 24) break;
          presentationValue409.x2 = $(presentationValue407.int64());
          continue;
        case 4:
          if (presentationValue577 !== 32) break;
          presentationValue409.y2 = $(presentationValue407.int64());
          continue;
        case 5:
          if (presentationValue577 !== 40) break;
          presentationValue409.x = $(presentationValue407.int64());
          continue;
        case 6:
          if (presentationValue577 !== 48) break;
          presentationValue409.y = $(presentationValue407.int64());
          continue;
      }
      if ((presentationValue577 & 7) == 4 || presentationValue577 === 0) break;
      presentationValue407.skip(presentationValue577 & 7);
    }
    return presentationValue409;
  },
  create(presentationParam1315) {
    return _presentationK.fromPartial(presentationParam1315 ?? {});
  },
  fromPartial(presentationParam1014) {
    let presentationValue1135 = presentationHelper203();
    return (
      (presentationValue1135.x1 = presentationParam1014.x1 ?? 0),
      (presentationValue1135.y1 = presentationParam1014.y1 ?? 0),
      (presentationValue1135.x2 = presentationParam1014.x2 ?? 0),
      (presentationValue1135.y2 = presentationParam1014.y2 ?? 0),
      (presentationValue1135.x = presentationParam1014.x ?? 0),
      (presentationValue1135.y = presentationParam1014.y ?? 0),
      presentationValue1135
    );
  },
};
function presentationHelper204() {
  return {
    widthRadius: 0,
    heightRadius: 0,
    startAngle: 0,
    swingAngle: 0,
  };
}
var presentationU = {
  encode(presentationParam720, presentationParam721 = new presentationPr()) {
    return (
      presentationParam720.widthRadius !== 0 &&
        presentationParam721.uint32(8).int64(presentationParam720.widthRadius),
      presentationParam720.heightRadius !== 0 &&
        presentationParam721
          .uint32(16)
          .int64(presentationParam720.heightRadius),
      presentationParam720.startAngle !== 0 &&
        presentationParam721.uint32(24).int64(presentationParam720.startAngle),
      presentationParam720.swingAngle !== 0 &&
        presentationParam721.uint32(32).int64(presentationParam720.swingAngle),
      presentationParam721
    );
  },
  decode(presentationParam343, presentationParam344) {
    let presentationValue485 =
        presentationParam343 instanceof presentationFr
          ? presentationParam343
          : new presentationFr(presentationParam343),
      presentationValue486 =
        presentationParam344 === void 0
          ? presentationValue485.len
          : presentationValue485.pos + presentationParam344,
      presentationValue487 = presentationHelper204();
    for (; presentationValue485.pos < presentationValue486; ) {
      let presentationValue699 = presentationValue485.uint32();
      switch (presentationValue699 >>> 3) {
        case 1:
          if (presentationValue699 !== 8) break;
          presentationValue487.widthRadius = $(presentationValue485.int64());
          continue;
        case 2:
          if (presentationValue699 !== 16) break;
          presentationValue487.heightRadius = $(presentationValue485.int64());
          continue;
        case 3:
          if (presentationValue699 !== 24) break;
          presentationValue487.startAngle = $(presentationValue485.int64());
          continue;
        case 4:
          if (presentationValue699 !== 32) break;
          presentationValue487.swingAngle = $(presentationValue485.int64());
          continue;
      }
      if ((presentationValue699 & 7) == 4 || presentationValue699 === 0) break;
      presentationValue485.skip(presentationValue699 & 7);
    }
    return presentationValue487;
  },
  create(presentationParam1316) {
    return presentationU.fromPartial(presentationParam1316 ?? {});
  },
  fromPartial(presentationParam903) {
    let presentationValue1067 = presentationHelper204();
    return (
      (presentationValue1067.widthRadius =
        presentationParam903.widthRadius ?? 0),
      (presentationValue1067.heightRadius =
        presentationParam903.heightRadius ?? 0),
      (presentationValue1067.startAngle = presentationParam903.startAngle ?? 0),
      (presentationValue1067.swingAngle = presentationParam903.swingAngle ?? 0),
      presentationValue1067
    );
  },
};
function presentationHelper205() {
  return {
    moveTo: void 0,
    lineTo: void 0,
    close: void 0,
    quadBezTo: void 0,
    cubicBezTo: void 0,
    arcTo: void 0,
  };
}
var _presentationG = {
  encode(presentationParam312, presentationParam313 = new presentationPr()) {
    return (
      presentationParam312.moveTo !== void 0 &&
        _presentationJ
          .encode(
            presentationParam312.moveTo,
            presentationParam313.uint32(10).fork(),
          )
          .join(),
      presentationParam312.lineTo !== void 0 &&
        _presentationQ
          .encode(
            presentationParam312.lineTo,
            presentationParam313.uint32(18).fork(),
          )
          .join(),
      presentationParam312.close !== void 0 &&
        presentationW
          .encode(
            presentationParam312.close,
            presentationParam313.uint32(26).fork(),
          )
          .join(),
      presentationParam312.quadBezTo !== void 0 &&
        presentationY
          .encode(
            presentationParam312.quadBezTo,
            presentationParam313.uint32(34).fork(),
          )
          .join(),
      presentationParam312.cubicBezTo !== void 0 &&
        _presentationK
          .encode(
            presentationParam312.cubicBezTo,
            presentationParam313.uint32(42).fork(),
          )
          .join(),
      presentationParam312.arcTo !== void 0 &&
        presentationU
          .encode(
            presentationParam312.arcTo,
            presentationParam313.uint32(50).fork(),
          )
          .join(),
      presentationParam313
    );
  },
  decode(presentationParam187, presentationParam188) {
    let presentationValue309 =
        presentationParam187 instanceof presentationFr
          ? presentationParam187
          : new presentationFr(presentationParam187),
      presentationValue310 =
        presentationParam188 === void 0
          ? presentationValue309.len
          : presentationValue309.pos + presentationParam188,
      presentationValue311 = presentationHelper205();
    for (; presentationValue309.pos < presentationValue310; ) {
      let presentationValue417 = presentationValue309.uint32();
      switch (presentationValue417 >>> 3) {
        case 1:
          if (presentationValue417 !== 10) break;
          presentationValue311.moveTo = _presentationJ.decode(
            presentationValue309,
            presentationValue309.uint32(),
          );
          continue;
        case 2:
          if (presentationValue417 !== 18) break;
          presentationValue311.lineTo = _presentationQ.decode(
            presentationValue309,
            presentationValue309.uint32(),
          );
          continue;
        case 3:
          if (presentationValue417 !== 26) break;
          presentationValue311.close = presentationW.decode(
            presentationValue309,
            presentationValue309.uint32(),
          );
          continue;
        case 4:
          if (presentationValue417 !== 34) break;
          presentationValue311.quadBezTo = presentationY.decode(
            presentationValue309,
            presentationValue309.uint32(),
          );
          continue;
        case 5:
          if (presentationValue417 !== 42) break;
          presentationValue311.cubicBezTo = _presentationK.decode(
            presentationValue309,
            presentationValue309.uint32(),
          );
          continue;
        case 6:
          if (presentationValue417 !== 50) break;
          presentationValue311.arcTo = presentationU.decode(
            presentationValue309,
            presentationValue309.uint32(),
          );
          continue;
      }
      if ((presentationValue417 & 7) == 4 || presentationValue417 === 0) break;
      presentationValue309.skip(presentationValue417 & 7);
    }
    return presentationValue311;
  },
  create(presentationParam1317) {
    return _presentationG.fromPartial(presentationParam1317 ?? {});
  },
  fromPartial(presentationParam234) {
    let presentationValue364 = presentationHelper205();
    return (
      (presentationValue364.moveTo =
        presentationParam234.moveTo !== void 0 &&
        presentationParam234.moveTo !== null
          ? _presentationJ.fromPartial(presentationParam234.moveTo)
          : void 0),
      (presentationValue364.lineTo =
        presentationParam234.lineTo !== void 0 &&
        presentationParam234.lineTo !== null
          ? _presentationQ.fromPartial(presentationParam234.lineTo)
          : void 0),
      (presentationValue364.close =
        presentationParam234.close !== void 0 &&
        presentationParam234.close !== null
          ? presentationW.fromPartial(presentationParam234.close)
          : void 0),
      (presentationValue364.quadBezTo =
        presentationParam234.quadBezTo !== void 0 &&
        presentationParam234.quadBezTo !== null
          ? presentationY.fromPartial(presentationParam234.quadBezTo)
          : void 0),
      (presentationValue364.cubicBezTo =
        presentationParam234.cubicBezTo !== void 0 &&
        presentationParam234.cubicBezTo !== null
          ? _presentationK.fromPartial(presentationParam234.cubicBezTo)
          : void 0),
      (presentationValue364.arcTo =
        presentationParam234.arcTo !== void 0 &&
        presentationParam234.arcTo !== null
          ? presentationU.fromPartial(presentationParam234.arcTo)
          : void 0),
      presentationValue364
    );
  },
};
function presentationHelper206() {
  return {
    id: void 0,
    widthEmu: 0,
    heightEmu: 0,
    commands: [],
  };
}
var _presentationW = {
  encode(presentationParam759, presentationParam760 = new presentationPr()) {
    (presentationParam759.id !== void 0 &&
      presentationParam760.uint32(34).string(presentationParam759.id),
      presentationParam759.widthEmu !== 0 &&
        presentationParam760.uint32(8).int64(presentationParam759.widthEmu),
      presentationParam759.heightEmu !== 0 &&
        presentationParam760.uint32(16).int64(presentationParam759.heightEmu));
    for (let presentationValue1269 of presentationParam759.commands)
      _presentationG
        .encode(presentationValue1269, presentationParam760.uint32(26).fork())
        .join();
    return presentationParam760;
  },
  decode(presentationParam345, presentationParam346) {
    let presentationValue488 =
        presentationParam345 instanceof presentationFr
          ? presentationParam345
          : new presentationFr(presentationParam345),
      presentationValue489 =
        presentationParam346 === void 0
          ? presentationValue488.len
          : presentationValue488.pos + presentationParam346,
      presentationValue490 = presentationHelper206();
    for (; presentationValue488.pos < presentationValue489; ) {
      let presentationValue703 = presentationValue488.uint32();
      switch (presentationValue703 >>> 3) {
        case 4:
          if (presentationValue703 !== 34) break;
          presentationValue490.id = presentationValue488.string();
          continue;
        case 1:
          if (presentationValue703 !== 8) break;
          presentationValue490.widthEmu = $(presentationValue488.int64());
          continue;
        case 2:
          if (presentationValue703 !== 16) break;
          presentationValue490.heightEmu = $(presentationValue488.int64());
          continue;
        case 3:
          if (presentationValue703 !== 26) break;
          presentationValue490.commands.push(
            _presentationG.decode(
              presentationValue488,
              presentationValue488.uint32(),
            ),
          );
          continue;
      }
      if ((presentationValue703 & 7) == 4 || presentationValue703 === 0) break;
      presentationValue488.skip(presentationValue703 & 7);
    }
    return presentationValue490;
  },
  create(presentationParam1318) {
    return _presentationW.fromPartial(presentationParam1318 ?? {});
  },
  fromPartial(presentationParam897) {
    let presentationValue1063 = presentationHelper206();
    return (
      (presentationValue1063.id = presentationParam897.id ?? void 0),
      (presentationValue1063.widthEmu = presentationParam897.widthEmu ?? 0),
      (presentationValue1063.heightEmu = presentationParam897.heightEmu ?? 0),
      (presentationValue1063.commands =
        presentationParam897.commands?.map((presentationParam1426) =>
          _presentationG.fromPartial(presentationParam1426),
        ) || []),
      presentationValue1063
    );
  },
};
function presentationHelper207() {
  return {
    themeId: ``,
  };
}
var _presentationD = {
  encode(presentationParam1111, presentationParam1112 = new presentationPr()) {
    return (
      presentationParam1111.themeId !== `` &&
        presentationParam1112.uint32(10).string(presentationParam1111.themeId),
      presentationParam1112
    );
  },
  decode(presentationParam775, presentationParam776) {
    let presentationValue954 =
        presentationParam775 instanceof presentationFr
          ? presentationParam775
          : new presentationFr(presentationParam775),
      presentationValue955 =
        presentationParam776 === void 0
          ? presentationValue954.len
          : presentationValue954.pos + presentationParam776,
      presentationValue956 = presentationHelper207();
    for (; presentationValue954.pos < presentationValue955; ) {
      let presentationValue1118 = presentationValue954.uint32();
      switch (presentationValue1118 >>> 3) {
        case 1:
          if (presentationValue1118 !== 10) break;
          presentationValue956.themeId = presentationValue954.string();
          continue;
      }
      if ((presentationValue1118 & 7) == 4 || presentationValue1118 === 0)
        break;
      presentationValue954.skip(presentationValue1118 & 7);
    }
    return presentationValue956;
  },
  create(presentationParam1319) {
    return _presentationD.fromPartial(presentationParam1319 ?? {});
  },
  fromPartial(presentationParam1139) {
    let presentationValue1308 = presentationHelper207();
    return (
      (presentationValue1308.themeId = presentationParam1139.themeId ?? ``),
      presentationValue1308
    );
  },
};
function presentationHelper208() {
  return {
    start: 0,
    end: 0,
  };
}
var _presentationL = {
  encode(presentationParam1023, presentationParam1024 = new presentationPr()) {
    return (
      presentationParam1023.start !== 0 &&
        presentationParam1024.uint32(8).int32(presentationParam1023.start),
      presentationParam1023.end !== 0 &&
        presentationParam1024.uint32(16).int32(presentationParam1023.end),
      presentationParam1024
    );
  },
  decode(presentationParam649, presentationParam650) {
    let presentationValue856 =
        presentationParam649 instanceof presentationFr
          ? presentationParam649
          : new presentationFr(presentationParam649),
      presentationValue857 =
        presentationParam650 === void 0
          ? presentationValue856.len
          : presentationValue856.pos + presentationParam650,
      presentationValue858 = presentationHelper208();
    for (; presentationValue856.pos < presentationValue857; ) {
      let presentationValue1059 = presentationValue856.uint32();
      switch (presentationValue1059 >>> 3) {
        case 1:
          if (presentationValue1059 !== 8) break;
          presentationValue858.start = presentationValue856.int32();
          continue;
        case 2:
          if (presentationValue1059 !== 16) break;
          presentationValue858.end = presentationValue856.int32();
          continue;
      }
      if ((presentationValue1059 & 7) == 4 || presentationValue1059 === 0)
        break;
      presentationValue856.skip(presentationValue1059 & 7);
    }
    return presentationValue858;
  },
  create(presentationParam1320) {
    return _presentationL.fromPartial(presentationParam1320 ?? {});
  },
  fromPartial(presentationParam1122) {
    let presentationValue1235 = presentationHelper208();
    return (
      (presentationValue1235.start = presentationParam1122.start ?? 0),
      (presentationValue1235.end = presentationParam1122.end ?? 0),
      presentationValue1235
    );
  },
};
function presentationHelper209() {
  return {
    runtime: ``,
    exitCode: 0,
    durationMs: 0,
    timestampIso8601: ``,
  };
}
var _presentationC = {
  encode(presentationParam711, presentationParam712 = new presentationPr()) {
    return (
      presentationParam711.runtime !== `` &&
        presentationParam712.uint32(10).string(presentationParam711.runtime),
      presentationParam711.exitCode !== 0 &&
        presentationParam712.uint32(16).int32(presentationParam711.exitCode),
      presentationParam711.durationMs !== 0 &&
        presentationParam712.uint32(25).double(presentationParam711.durationMs),
      presentationParam711.timestampIso8601 !== `` &&
        presentationParam712
          .uint32(34)
          .string(presentationParam711.timestampIso8601),
      presentationParam712
    );
  },
  decode(presentationParam364, presentationParam365) {
    let presentationValue508 =
        presentationParam364 instanceof presentationFr
          ? presentationParam364
          : new presentationFr(presentationParam364),
      presentationValue509 =
        presentationParam365 === void 0
          ? presentationValue508.len
          : presentationValue508.pos + presentationParam365,
      presentationValue510 = presentationHelper209();
    for (; presentationValue508.pos < presentationValue509; ) {
      let presentationValue724 = presentationValue508.uint32();
      switch (presentationValue724 >>> 3) {
        case 1:
          if (presentationValue724 !== 10) break;
          presentationValue510.runtime = presentationValue508.string();
          continue;
        case 2:
          if (presentationValue724 !== 16) break;
          presentationValue510.exitCode = presentationValue508.int32();
          continue;
        case 3:
          if (presentationValue724 !== 25) break;
          presentationValue510.durationMs = presentationValue508.double();
          continue;
        case 4:
          if (presentationValue724 !== 34) break;
          presentationValue510.timestampIso8601 = presentationValue508.string();
          continue;
      }
      if ((presentationValue724 & 7) == 4 || presentationValue724 === 0) break;
      presentationValue508.skip(presentationValue724 & 7);
    }
    return presentationValue510;
  },
  create(presentationParam1321) {
    return _presentationC.fromPartial(presentationParam1321 ?? {});
  },
  fromPartial(presentationParam909) {
    let presentationValue1069 = presentationHelper209();
    return (
      (presentationValue1069.runtime = presentationParam909.runtime ?? ``),
      (presentationValue1069.exitCode = presentationParam909.exitCode ?? 0),
      (presentationValue1069.durationMs = presentationParam909.durationMs ?? 0),
      (presentationValue1069.timestampIso8601 =
        presentationParam909.timestampIso8601 ?? ``),
      presentationValue1069
    );
  },
};
function presentationHelper210() {
  return {
    id: ``,
    kind: 0,
    theme: void 0,
    script: void 0,
  };
}
var _presentationA = {
  encode(presentationParam732, presentationParam733 = new presentationPr()) {
    return (
      presentationParam732.id !== `` &&
        presentationParam733.uint32(10).string(presentationParam732.id),
      presentationParam732.kind !== 0 &&
        presentationParam733.uint32(16).int32(presentationParam732.kind),
      presentationParam732.theme !== void 0 &&
        _presentationD
          .encode(
            presentationParam732.theme,
            presentationParam733.uint32(26).fork(),
          )
          .join(),
      presentationParam732.script !== void 0 &&
        _presentationIt
          .encode(
            presentationParam732.script,
            presentationParam733.uint32(58).fork(),
          )
          .join(),
      presentationParam733
    );
  },
  decode(presentationParam358, presentationParam359) {
    let presentationValue502 =
        presentationParam358 instanceof presentationFr
          ? presentationParam358
          : new presentationFr(presentationParam358),
      presentationValue503 =
        presentationParam359 === void 0
          ? presentationValue502.len
          : presentationValue502.pos + presentationParam359,
      presentationValue504 = presentationHelper210();
    for (; presentationValue502.pos < presentationValue503; ) {
      let presentationValue716 = presentationValue502.uint32();
      switch (presentationValue716 >>> 3) {
        case 1:
          if (presentationValue716 !== 10) break;
          presentationValue504.id = presentationValue502.string();
          continue;
        case 2:
          if (presentationValue716 !== 16) break;
          presentationValue504.kind = presentationValue502.int32();
          continue;
        case 3:
          if (presentationValue716 !== 26) break;
          presentationValue504.theme = _presentationD.decode(
            presentationValue502,
            presentationValue502.uint32(),
          );
          continue;
        case 7:
          if (presentationValue716 !== 58) break;
          presentationValue504.script = _presentationIt.decode(
            presentationValue502,
            presentationValue502.uint32(),
          );
          continue;
      }
      if ((presentationValue716 & 7) == 4 || presentationValue716 === 0) break;
      presentationValue502.skip(presentationValue716 & 7);
    }
    return presentationValue504;
  },
  create(presentationParam1322) {
    return _presentationA.fromPartial(presentationParam1322 ?? {});
  },
  fromPartial(presentationParam803) {
    let presentationValue979 = presentationHelper210();
    return (
      (presentationValue979.id = presentationParam803.id ?? ``),
      (presentationValue979.kind = presentationParam803.kind ?? 0),
      (presentationValue979.theme =
        presentationParam803.theme !== void 0 &&
        presentationParam803.theme !== null
          ? _presentationD.fromPartial(presentationParam803.theme)
          : void 0),
      (presentationValue979.script =
        presentationParam803.script !== void 0 &&
        presentationParam803.script !== null
          ? _presentationIt.fromPartial(presentationParam803.script)
          : void 0),
      presentationValue979
    );
  },
};
function presentationHelper211() {
  return {
    id: ``,
    language: ``,
    initSource: ``,
  };
}
var _presentationS = {
  encode(presentationParam884, presentationParam885 = new presentationPr()) {
    return (
      presentationParam884.id !== `` &&
        presentationParam885.uint32(10).string(presentationParam884.id),
      presentationParam884.language !== `` &&
        presentationParam885.uint32(18).string(presentationParam884.language),
      presentationParam884.initSource !== `` &&
        presentationParam885.uint32(26).string(presentationParam884.initSource),
      presentationParam885
    );
  },
  decode(presentationParam491, presentationParam492) {
    let presentationValue657 =
        presentationParam491 instanceof presentationFr
          ? presentationParam491
          : new presentationFr(presentationParam491),
      presentationValue658 =
        presentationParam492 === void 0
          ? presentationValue657.len
          : presentationValue657.pos + presentationParam492,
      presentationValue659 = presentationHelper211();
    for (; presentationValue657.pos < presentationValue658; ) {
      let presentationValue936 = presentationValue657.uint32();
      switch (presentationValue936 >>> 3) {
        case 1:
          if (presentationValue936 !== 10) break;
          presentationValue659.id = presentationValue657.string();
          continue;
        case 2:
          if (presentationValue936 !== 18) break;
          presentationValue659.language = presentationValue657.string();
          continue;
        case 3:
          if (presentationValue936 !== 26) break;
          presentationValue659.initSource = presentationValue657.string();
          continue;
      }
      if ((presentationValue936 & 7) == 4 || presentationValue936 === 0) break;
      presentationValue657.skip(presentationValue936 & 7);
    }
    return presentationValue659;
  },
  create(presentationParam1323) {
    return _presentationS.fromPartial(presentationParam1323 ?? {});
  },
  fromPartial(presentationParam1019) {
    let presentationValue1140 = presentationHelper211();
    return (
      (presentationValue1140.id = presentationParam1019.id ?? ``),
      (presentationValue1140.language = presentationParam1019.language ?? ``),
      (presentationValue1140.initSource =
        presentationParam1019.initSource ?? ``),
      presentationValue1140
    );
  },
};
function presentationHelper212() {
  return {
    language: ``,
    source: ``,
    returnMode: 0,
    environmentId: ``,
    result: void 0,
    execution: void 0,
  };
}
var _presentationIt = {
  encode(presentationParam420, presentationParam421 = new presentationPr()) {
    return (
      presentationParam420.language !== `` &&
        presentationParam421.uint32(10).string(presentationParam420.language),
      presentationParam420.source !== `` &&
        presentationParam421.uint32(18).string(presentationParam420.source),
      presentationParam420.returnMode !== 0 &&
        presentationParam421.uint32(32).int32(presentationParam420.returnMode),
      presentationParam420.environmentId !== `` &&
        presentationParam421
          .uint32(42)
          .string(presentationParam420.environmentId),
      presentationParam420.result !== void 0 &&
        _presentationU
          .encode(
            presentationParam420.result,
            presentationParam421.uint32(50).fork(),
          )
          .join(),
      presentationParam420.execution !== void 0 &&
        _presentationC
          .encode(
            presentationParam420.execution,
            presentationParam421.uint32(58).fork(),
          )
          .join(),
      presentationParam421
    );
  },
  decode(presentationParam217, presentationParam218) {
    let presentationValue344 =
        presentationParam217 instanceof presentationFr
          ? presentationParam217
          : new presentationFr(presentationParam217),
      presentationValue345 =
        presentationParam218 === void 0
          ? presentationValue344.len
          : presentationValue344.pos + presentationParam218,
      presentationValue346 = presentationHelper212();
    for (; presentationValue344.pos < presentationValue345; ) {
      let presentationValue464 = presentationValue344.uint32();
      switch (presentationValue464 >>> 3) {
        case 1:
          if (presentationValue464 !== 10) break;
          presentationValue346.language = presentationValue344.string();
          continue;
        case 2:
          if (presentationValue464 !== 18) break;
          presentationValue346.source = presentationValue344.string();
          continue;
        case 4:
          if (presentationValue464 !== 32) break;
          presentationValue346.returnMode = presentationValue344.int32();
          continue;
        case 5:
          if (presentationValue464 !== 42) break;
          presentationValue346.environmentId = presentationValue344.string();
          continue;
        case 6:
          if (presentationValue464 !== 50) break;
          presentationValue346.result = _presentationU.decode(
            presentationValue344,
            presentationValue344.uint32(),
          );
          continue;
        case 7:
          if (presentationValue464 !== 58) break;
          presentationValue346.execution = _presentationC.decode(
            presentationValue344,
            presentationValue344.uint32(),
          );
          continue;
      }
      if ((presentationValue464 & 7) == 4 || presentationValue464 === 0) break;
      presentationValue344.skip(presentationValue464 & 7);
    }
    return presentationValue346;
  },
  create(presentationParam1324) {
    return _presentationIt.fromPartial(presentationParam1324 ?? {});
  },
  fromPartial(presentationParam517) {
    let presentationValue688 = presentationHelper212();
    return (
      (presentationValue688.language = presentationParam517.language ?? ``),
      (presentationValue688.source = presentationParam517.source ?? ``),
      (presentationValue688.returnMode = presentationParam517.returnMode ?? 0),
      (presentationValue688.environmentId =
        presentationParam517.environmentId ?? ``),
      (presentationValue688.result =
        presentationParam517.result !== void 0 &&
        presentationParam517.result !== null
          ? _presentationU.fromPartial(presentationParam517.result)
          : void 0),
      (presentationValue688.execution =
        presentationParam517.execution !== void 0 &&
        presentationParam517.execution !== null
          ? _presentationC.fromPartial(presentationParam517.execution)
          : void 0),
      presentationValue688
    );
  },
};
function presentationHelper213() {
  return {
    json: void 0,
    stdout: void 0,
    refs: [],
    error: void 0,
  };
}
var _presentationU = {
  encode(presentationParam807, presentationParam808 = new presentationPr()) {
    (presentationParam807.json !== void 0 &&
      presentationParam808.uint32(18).string(presentationParam807.json),
      presentationParam807.stdout !== void 0 &&
        presentationParam808.uint32(26).string(presentationParam807.stdout));
    for (let presentationValue1335 of presentationParam807.refs)
      presentationParam808.uint32(34).string(presentationValue1335);
    return (
      presentationParam807.error !== void 0 &&
        presentationParam808.uint32(42).string(presentationParam807.error),
      presentationParam808
    );
  },
  decode(presentationParam397, presentationParam398) {
    let presentationValue544 =
        presentationParam397 instanceof presentationFr
          ? presentationParam397
          : new presentationFr(presentationParam397),
      presentationValue545 =
        presentationParam398 === void 0
          ? presentationValue544.len
          : presentationValue544.pos + presentationParam398,
      presentationValue546 = presentationHelper213();
    for (; presentationValue544.pos < presentationValue545; ) {
      let presentationValue801 = presentationValue544.uint32();
      switch (presentationValue801 >>> 3) {
        case 2:
          if (presentationValue801 !== 18) break;
          presentationValue546.json = presentationValue544.string();
          continue;
        case 3:
          if (presentationValue801 !== 26) break;
          presentationValue546.stdout = presentationValue544.string();
          continue;
        case 4:
          if (presentationValue801 !== 34) break;
          presentationValue546.refs.push(presentationValue544.string());
          continue;
        case 5:
          if (presentationValue801 !== 42) break;
          presentationValue546.error = presentationValue544.string();
          continue;
      }
      if ((presentationValue801 & 7) == 4 || presentationValue801 === 0) break;
      presentationValue544.skip(presentationValue801 & 7);
    }
    return presentationValue546;
  },
  create(presentationParam1325) {
    return _presentationU.fromPartial(presentationParam1325 ?? {});
  },
  fromPartial(presentationParam952) {
    let presentationValue1088 = presentationHelper213();
    return (
      (presentationValue1088.json = presentationParam952.json ?? void 0),
      (presentationValue1088.stdout = presentationParam952.stdout ?? void 0),
      (presentationValue1088.refs =
        presentationParam952.refs?.map(
          (presentationParam1486) => presentationParam1486,
        ) || []),
      (presentationValue1088.error = presentationParam952.error ?? void 0),
      presentationValue1088
    );
  },
};
function presentationHelper214() {
  return {
    cap: void 0,
    join: void 0,
    head: void 0,
    tail: void 0,
  };
}
var presentationUnderscore = {
  encode(presentationParam722, presentationParam723 = new presentationPr()) {
    return (
      presentationParam722.cap !== void 0 &&
        presentationParam723.uint32(40).int32(presentationParam722.cap),
      presentationParam722.join !== void 0 &&
        presentationParam723.uint32(48).int32(presentationParam722.join),
      presentationParam722.head !== void 0 &&
        _presentationY
          .encode(
            presentationParam722.head,
            presentationParam723.uint32(58).fork(),
          )
          .join(),
      presentationParam722.tail !== void 0 &&
        _presentationY
          .encode(
            presentationParam722.tail,
            presentationParam723.uint32(66).fork(),
          )
          .join(),
      presentationParam723
    );
  },
  decode(presentationParam377, presentationParam378) {
    let presentationValue522 =
        presentationParam377 instanceof presentationFr
          ? presentationParam377
          : new presentationFr(presentationParam377),
      presentationValue523 =
        presentationParam378 === void 0
          ? presentationValue522.len
          : presentationValue522.pos + presentationParam378,
      presentationValue524 = presentationHelper214();
    for (; presentationValue522.pos < presentationValue523; ) {
      let presentationValue737 = presentationValue522.uint32();
      switch (presentationValue737 >>> 3) {
        case 5:
          if (presentationValue737 !== 40) break;
          presentationValue524.cap = presentationValue522.int32();
          continue;
        case 6:
          if (presentationValue737 !== 48) break;
          presentationValue524.join = presentationValue522.int32();
          continue;
        case 7:
          if (presentationValue737 !== 58) break;
          presentationValue524.head = _presentationY.decode(
            presentationValue522,
            presentationValue522.uint32(),
          );
          continue;
        case 8:
          if (presentationValue737 !== 66) break;
          presentationValue524.tail = _presentationY.decode(
            presentationValue522,
            presentationValue522.uint32(),
          );
          continue;
      }
      if ((presentationValue737 & 7) == 4 || presentationValue737 === 0) break;
      presentationValue522.skip(presentationValue737 & 7);
    }
    return presentationValue524;
  },
  create(presentationParam1326) {
    return presentationUnderscore.fromPartial(presentationParam1326 ?? {});
  },
  fromPartial(presentationParam809) {
    let presentationValue986 = presentationHelper214();
    return (
      (presentationValue986.cap = presentationParam809.cap ?? void 0),
      (presentationValue986.join = presentationParam809.join ?? void 0),
      (presentationValue986.head =
        presentationParam809.head !== void 0 &&
        presentationParam809.head !== null
          ? _presentationY.fromPartial(presentationParam809.head)
          : void 0),
      (presentationValue986.tail =
        presentationParam809.tail !== void 0 &&
        presentationParam809.tail !== null
          ? _presentationY.fromPartial(presentationParam809.tail)
          : void 0),
      presentationValue986
    );
  },
};
function presentationHelper215() {
  return {
    type: 0,
    width: 0,
    length: 0,
  };
}
var _presentationY = {
    encode(presentationParam917, presentationParam918 = new presentationPr()) {
      return (
        presentationParam917.type !== 0 &&
          presentationParam918.uint32(8).int32(presentationParam917.type),
        presentationParam917.width !== 0 &&
          presentationParam918.uint32(16).int32(presentationParam917.width),
        presentationParam917.length !== 0 &&
          presentationParam918.uint32(24).int32(presentationParam917.length),
        presentationParam918
      );
    },
    decode(presentationParam506, presentationParam507) {
      let presentationValue677 =
          presentationParam506 instanceof presentationFr
            ? presentationParam506
            : new presentationFr(presentationParam506),
        presentationValue678 =
          presentationParam507 === void 0
            ? presentationValue677.len
            : presentationValue677.pos + presentationParam507,
        presentationValue679 = presentationHelper215();
      for (; presentationValue677.pos < presentationValue678; ) {
        let presentationValue974 = presentationValue677.uint32();
        switch (presentationValue974 >>> 3) {
          case 1:
            if (presentationValue974 !== 8) break;
            presentationValue679.type = presentationValue677.int32();
            continue;
          case 2:
            if (presentationValue974 !== 16) break;
            presentationValue679.width = presentationValue677.int32();
            continue;
          case 3:
            if (presentationValue974 !== 24) break;
            presentationValue679.length = presentationValue677.int32();
            continue;
        }
        if ((presentationValue974 & 7) == 4 || presentationValue974 === 0)
          break;
        presentationValue677.skip(presentationValue974 & 7);
      }
      return presentationValue679;
    },
    create(presentationParam1367) {
      return _presentationY.fromPartial(presentationParam1367 ?? {});
    },
    fromPartial(presentationParam1057) {
      let presentationValue1169 = presentationHelper215();
      return (
        (presentationValue1169.type = presentationParam1057.type ?? 0),
        (presentationValue1169.width = presentationParam1057.width ?? 0),
        (presentationValue1169.length = presentationParam1057.length ?? 0),
        presentationValue1169
      );
    },
  },
  presentationValue105 = (() => {
    if (typeof globalThis < `u`) return globalThis;
    if (typeof self < `u`) return self;
    if (typeof window < `u`) return window;
    if (typeof global < `u`) return global;
    throw `Unable to locate global object`;
  })();
function $(presentationParam665) {
  let presentationValue876 = presentationValue105.Number(
    presentationParam665.toString(),
  );
  if (presentationValue876 > presentationValue105.Number.MAX_SAFE_INTEGER)
    throw new presentationValue105.Error(
      `Value is larger than Number.MAX_SAFE_INTEGER`,
    );
  if (presentationValue876 < presentationValue105.Number.MIN_SAFE_INTEGER)
    throw new presentationValue105.Error(
      `Value is smaller than Number.MIN_SAFE_INTEGER`,
    );
  return presentationValue876;
}
var presentationEmbeddedFontType = (function (presentationEnum) {
  presentationEnum[(presentationEnum.EMBEDDED_FONT_TYPE_UNSPECIFIED = 0)] =
    "EMBEDDED_FONT_TYPE_UNSPECIFIED";
  presentationEnum[(presentationEnum.EMBEDDED_FONT_TYPE_REGULAR = 1)] =
    "EMBEDDED_FONT_TYPE_REGULAR";
  presentationEnum[(presentationEnum.EMBEDDED_FONT_TYPE_BOLD = 2)] =
    "EMBEDDED_FONT_TYPE_BOLD";
  presentationEnum[(presentationEnum.EMBEDDED_FONT_TYPE_ITALIC = 3)] =
    "EMBEDDED_FONT_TYPE_ITALIC";
  presentationEnum[(presentationEnum.EMBEDDED_FONT_TYPE_BOLD_ITALIC = 4)] =
    "EMBEDDED_FONT_TYPE_BOLD_ITALIC";
  presentationEnum[(presentationEnum.UNRECOGNIZED = -1)] = "UNRECOGNIZED";
  return presentationEnum;
})({});
function presentationDefaultEmbeddedFont() {
  return {
    type: 0,
    contentType: "",
    data: new Uint8Array(),
    subsetted: void 0,
  };
}
var presentationEmbeddedFont = {
  encode(presentationParam, presentationWriter = new presentationPr()) {
    return (
      presentationParam.type !== 0 &&
        presentationWriter.uint32(24).int32(presentationParam.type),
      presentationParam.contentType !== "" &&
        presentationWriter.uint32(34).string(presentationParam.contentType),
      presentationParam.data.length !== 0 &&
        presentationWriter.uint32(42).bytes(presentationParam.data),
      presentationParam.subsetted !== void 0 &&
        presentationWriter.uint32(48).bool(presentationParam.subsetted),
      presentationWriter
    );
  },
  decode(presentationInput, presentationLength) {
    let presentationReader =
        presentationInput instanceof presentationFr
          ? presentationInput
          : new presentationFr(presentationInput),
      presentationEnd =
        presentationLength === void 0
          ? presentationReader.len
          : presentationReader.pos + presentationLength,
      presentationValue = presentationDefaultEmbeddedFont();
    for (; presentationReader.pos < presentationEnd; ) {
      let presentationTag = presentationReader.uint32();
      switch (presentationTag >>> 3) {
        case 3:
          if (presentationTag !== 24) break;
          presentationValue.type = presentationReader.int32();
          continue;
        case 4:
          if (presentationTag !== 34) break;
          presentationValue.contentType = presentationReader.string();
          continue;
        case 5:
          if (presentationTag !== 42) break;
          presentationValue.data = presentationReader.bytes();
          continue;
        case 6:
          if (presentationTag !== 48) break;
          presentationValue.subsetted = presentationReader.bool();
          continue;
      }
      if ((presentationTag & 7) == 4 || presentationTag === 0) break;
      presentationReader.skip(presentationTag & 7);
    }
    return presentationValue;
  },
  create(presentationParam) {
    return presentationEmbeddedFont.fromPartial(presentationParam ?? {});
  },
  fromPartial(presentationParam) {
    let presentationValue = presentationDefaultEmbeddedFont();
    return (
      (presentationValue.type = presentationParam.type ?? 0),
      (presentationValue.contentType = presentationParam.contentType ?? ""),
      (presentationValue.data = presentationParam.data ?? new Uint8Array()),
      (presentationValue.subsetted = presentationParam.subsetted ?? void 0),
      presentationValue
    );
  },
};
function presentationDefaultFontDefinition() {
  return {
    name: void 0,
    altName: void 0,
    family: void 0,
    embeddedFonts: [],
  };
}
var presentationFontDefinition = {
  encode(presentationParam, presentationWriter = new presentationPr()) {
    presentationParam.name !== void 0 &&
      presentationWriter.uint32(10).string(presentationParam.name);
    presentationParam.altName !== void 0 &&
      presentationWriter.uint32(18).string(presentationParam.altName);
    presentationParam.family !== void 0 &&
      presentationWriter.uint32(26).string(presentationParam.family);
    for (let presentationFont of presentationParam.embeddedFonts)
      presentationEmbeddedFont
        .encode(presentationFont, presentationWriter.uint32(34).fork())
        .join();
    return presentationWriter;
  },
  decode(presentationInput, presentationLength) {
    let presentationReader =
        presentationInput instanceof presentationFr
          ? presentationInput
          : new presentationFr(presentationInput),
      presentationEnd =
        presentationLength === void 0
          ? presentationReader.len
          : presentationReader.pos + presentationLength,
      presentationValue = presentationDefaultFontDefinition();
    for (; presentationReader.pos < presentationEnd; ) {
      let presentationTag = presentationReader.uint32();
      switch (presentationTag >>> 3) {
        case 1:
          if (presentationTag !== 10) break;
          presentationValue.name = presentationReader.string();
          continue;
        case 2:
          if (presentationTag !== 18) break;
          presentationValue.altName = presentationReader.string();
          continue;
        case 3:
          if (presentationTag !== 26) break;
          presentationValue.family = presentationReader.string();
          continue;
        case 4:
          if (presentationTag !== 34) break;
          presentationValue.embeddedFonts.push(
            presentationEmbeddedFont.decode(
              presentationReader,
              presentationReader.uint32(),
            ),
          );
          continue;
      }
      if ((presentationTag & 7) == 4 || presentationTag === 0) break;
      presentationReader.skip(presentationTag & 7);
    }
    return presentationValue;
  },
  create(presentationParam) {
    return presentationFontDefinition.fromPartial(presentationParam ?? {});
  },
  fromPartial(presentationParam) {
    let presentationValue = presentationDefaultFontDefinition();
    return (
      (presentationValue.name = presentationParam.name ?? void 0),
      (presentationValue.altName = presentationParam.altName ?? void 0),
      (presentationValue.family = presentationParam.family ?? void 0),
      (presentationValue.embeddedFonts =
        presentationParam.embeddedFonts?.map((presentationFont) =>
          presentationEmbeddedFont.fromPartial(presentationFont),
        ) || []),
      presentationValue
    );
  },
};
export {
  presentationDollar as $,
  _presentationAt,
  _presentationB,
  presentationBn,
  _presentationBt,
  _presentationCt,
  _presentationDt,
  presentationE,
  presentationEt,
  presentationF,
  _presentationFt,
  _presentationG,
  _presentationGt,
  _presentationH,
  presentationHn,
  _presentationHt,
  _presentationI,
  presentationIt,
  _presentationJ,
  presentationJn,
  _presentationJt,
  _presentationK,
  presentationKn,
  presentationKt,
  presentationL,
  presentationLt,
  presentationM,
  _presentationMt,
  _presentationNt,
  _presentationO,
  presentationOt,
  _presentationP,
  _presentationPt,
  _presentationR,
  presentationRn,
  _presentationRt,
  _presentationSt,
  __presentationT,
  presentationTt,
  presentationU,
  _presentationUt,
  _presentationV,
  _presentationVt,
  presentationW,
  presentationWt,
  _presentationX,
  presentationY,
  presentationZ,
  presentationUnderscore,
  _presentationT as _t,
  _presentationA,
  presentationBt,
  _presentationC,
  presentationCt,
  _presentationD,
  presentationDt,
  presentationEmbeddedFont,
  presentationEmbeddedFontType,
  presentationEr,
  _presentationEt,
  _presentationF,
  presentationFontDefinition,
  presentationFr,
  presentationFt,
  presentationG,
  presentationGt,
  presentationHt,
  presentationI,
  _presentationIt,
  presentationJt,
  presentationK,
  _presentationKt,
  _presentationL,
  presentationLr,
  _presentationLt,
  _presentationM,
  presentationMt,
  ___presentationN,
  presentationNr,
  presentationNt,
  presentationOr as or,
  _presentationOt,
  presentationP,
  _presentationPn,
  presentationPr,
  presentationPt,
  _presentationQ,
  _presentationQn,
  _presentationQt,
  presentationR,
  presentationRt,
  _presentationS,
  presentationSr,
  presentationSt,
  ___presentationT,
  _presentationTt,
  _presentationU,
  presentationUt,
  presentationVt,
  _presentationW,
  _presentationWt,
  _presentationXt,
  _presentationY,
  _presentationYt,
  _presentationZ,
  _presentationZt,
};

export const legacyPresentationVt = __presentationN;
export const legacyPresentationH = __presentationT;
export const legacyPresentationRr = ___presentationN;
export const legacyPresentationW = ___presentationT;
