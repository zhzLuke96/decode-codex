// Restored from ref/webview/assets/document-1gFz5aiQ.js
// Flat boundary. Vendored document chunk restored from the Codex webview bundle.
import {
  _presentationPt,
  presentationSn,
  _presentationMn,
  _presentationLn,
  _presentationBn,
  _presentationN,
  presentationFr,
  presentationCn,
  presentationJt,
  presentationK,
  _presentationOt,
  $ as presentationX,
} from "./presentation-runtime";
import { spreadsheetZt } from "./spreadsheet-schema";
export const documentW = `oaiproto.coworker.docx`;
export const documentN = (function (documentParam53) {
  return (
    (documentParam53[(documentParam53.ARTIFACT_TYPE_UNSPECIFIED = 0)] =
      `ARTIFACT_TYPE_UNSPECIFIED`),
    (documentParam53[(documentParam53.ARTIFACT_TYPE_DOCUMENT = 1)] =
      `ARTIFACT_TYPE_DOCUMENT`),
    (documentParam53[(documentParam53.ARTIFACT_TYPE_PRESENTATION = 2)] =
      `ARTIFACT_TYPE_PRESENTATION`),
    (documentParam53[(documentParam53.ARTIFACT_TYPE_WORKBOOK = 3)] =
      `ARTIFACT_TYPE_WORKBOOK`),
    (documentParam53[(documentParam53.ARTIFACT_TYPE_PLAYGROUND = 4)] =
      `ARTIFACT_TYPE_PLAYGROUND`),
    (documentParam53[(documentParam53.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
    documentParam53
  );
})({});
export const documentD = (function (documentParam50) {
  return (
    (documentParam50[(documentParam50.EMBEDDED_FONT_TYPE_UNSPECIFIED = 0)] =
      `EMBEDDED_FONT_TYPE_UNSPECIFIED`),
    (documentParam50[(documentParam50.EMBEDDED_FONT_TYPE_REGULAR = 1)] =
      `EMBEDDED_FONT_TYPE_REGULAR`),
    (documentParam50[(documentParam50.EMBEDDED_FONT_TYPE_BOLD = 2)] =
      `EMBEDDED_FONT_TYPE_BOLD`),
    (documentParam50[(documentParam50.EMBEDDED_FONT_TYPE_ITALIC = 3)] =
      `EMBEDDED_FONT_TYPE_ITALIC`),
    (documentParam50[(documentParam50.EMBEDDED_FONT_TYPE_BOLD_ITALIC = 4)] =
      `EMBEDDED_FONT_TYPE_BOLD_ITALIC`),
    (documentParam50[(documentParam50.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
    documentParam50
  );
})({});
export const documentC = (function (documentParam49) {
  return (
    (documentParam49[(documentParam49.SECTION_BREAK_TYPE_UNSPECIFIED = 0)] =
      `SECTION_BREAK_TYPE_UNSPECIFIED`),
    (documentParam49[(documentParam49.SECTION_BREAK_TYPE_CONTINUOUS = 1)] =
      `SECTION_BREAK_TYPE_CONTINUOUS`),
    (documentParam49[(documentParam49.SECTION_BREAK_TYPE_NEXT_PAGE = 2)] =
      `SECTION_BREAK_TYPE_NEXT_PAGE`),
    (documentParam49[(documentParam49.SECTION_BREAK_TYPE_EVEN_PAGE = 3)] =
      `SECTION_BREAK_TYPE_EVEN_PAGE`),
    (documentParam49[(documentParam49.SECTION_BREAK_TYPE_ODD_PAGE = 4)] =
      `SECTION_BREAK_TYPE_ODD_PAGE`),
    (documentParam49[(documentParam49.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
    documentParam49
  );
})({});
function documentHelper1() {
  return {
    id: void 0,
    charts: [],
    name: ``,
    widthEmu: 0,
    heightEmu: 0,
    elements: [],
    images: [],
    footnotes: [],
    comments: [],
    commentReferences: [],
    textStyles: [],
    reviewMarks: [],
    sections: [],
    numberingDefinitions: [],
    paragraphNumberings: [],
    tableStyleDefinitions: [],
    endnotes: [],
    settings: void 0,
    theme: void 0,
    fonts: [],
  };
}
var documentO = {
  encode(documentParam6, documentParam7 = new presentationK()) {
    documentParam6.id !== void 0 &&
      documentParam7.uint32(50).string(documentParam6.id);
    for (let documentValue122 of documentParam6.charts)
      presentationJt
        .encode(documentValue122, documentParam7.uint32(10).fork())
        .join();
    (documentParam6.name !== `` &&
      documentParam7.uint32(18).string(documentParam6.name),
      documentParam6.widthEmu !== 0 &&
        documentParam7.uint32(24).int64(documentParam6.widthEmu),
      documentParam6.heightEmu !== 0 &&
        documentParam7.uint32(32).int64(documentParam6.heightEmu));
    for (let documentValue117 of documentParam6.elements)
      presentationCn
        .encode(documentValue117, documentParam7.uint32(42).fork())
        .join();
    for (let documentValue123 of documentParam6.images)
      _presentationBn
        .encode(documentValue123, documentParam7.uint32(58).fork())
        .join();
    for (let documentValue114 of documentParam6.footnotes)
      documentM
        .encode(documentValue114, documentParam7.uint32(66).fork())
        .join();
    for (let documentValue118 of documentParam6.comments)
      documentI
        .encode(documentValue118, documentParam7.uint32(74).fork())
        .join();
    for (let documentValue107 of documentParam6.commentReferences)
      documentA
        .encode(documentValue107, documentParam7.uint32(82).fork())
        .join();
    for (let documentValue110 of documentParam6.textStyles)
      _presentationOt
        .encode(documentValue110, documentParam7.uint32(90).fork())
        .join();
    for (let documentValue109 of documentParam6.reviewMarks)
      presentationFr
        .encode(documentValue109, documentParam7.uint32(98).fork())
        .join();
    for (let documentValue115 of documentParam6.sections)
      _documentC
        .encode(documentValue115, documentParam7.uint32(106).fork())
        .join();
    for (let documentValue105 of documentParam6.numberingDefinitions)
      documentUnderscore
        .encode(documentValue105, documentParam7.uint32(114).fork())
        .join();
    for (let documentValue106 of documentParam6.paragraphNumberings)
      documentX
        .encode(documentValue106, documentParam7.uint32(122).fork())
        .join();
    for (let documentValue104 of documentParam6.tableStyleDefinitions)
      _presentationLn
        .encode(documentValue104, documentParam7.uint32(130).fork())
        .join();
    for (let documentValue116 of documentParam6.endnotes)
      documentF
        .encode(documentValue116, documentParam7.uint32(138).fork())
        .join();
    (documentParam6.settings !== void 0 &&
      documentL
        .encode(documentParam6.settings, documentParam7.uint32(146).fork())
        .join(),
      documentParam6.theme !== void 0 &&
        _presentationN
          .encode(documentParam6.theme, documentParam7.uint32(154).fork())
          .join());
    for (let documentValue124 of documentParam6.fonts)
      documentP
        .encode(documentValue124, documentParam7.uint32(162).fork())
        .join();
    return documentParam7;
  },
  decode(documentParam1, documentParam2) {
    let documentValue2 =
        documentParam1 instanceof _presentationPt
          ? documentParam1
          : new _presentationPt(documentParam1),
      documentValue3 =
        documentParam2 === void 0
          ? documentValue2.len
          : documentValue2.pos + documentParam2,
      documentValue4 = documentHelper1();
    for (; documentValue2.pos < documentValue3; ) {
      let documentValue5 = documentValue2.uint32();
      switch (documentValue5 >>> 3) {
        case 6:
          if (documentValue5 !== 50) break;
          documentValue4.id = documentValue2.string();
          continue;
        case 1:
          if (documentValue5 !== 10) break;
          documentValue4.charts.push(
            presentationJt.decode(documentValue2, documentValue2.uint32()),
          );
          continue;
        case 2:
          if (documentValue5 !== 18) break;
          documentValue4.name = documentValue2.string();
          continue;
        case 3:
          if (documentValue5 !== 24) break;
          documentValue4.widthEmu = $(documentValue2.int64());
          continue;
        case 4:
          if (documentValue5 !== 32) break;
          documentValue4.heightEmu = $(documentValue2.int64());
          continue;
        case 5:
          if (documentValue5 !== 42) break;
          documentValue4.elements.push(
            presentationCn.decode(documentValue2, documentValue2.uint32()),
          );
          continue;
        case 7:
          if (documentValue5 !== 58) break;
          documentValue4.images.push(
            _presentationBn.decode(documentValue2, documentValue2.uint32()),
          );
          continue;
        case 8:
          if (documentValue5 !== 66) break;
          documentValue4.footnotes.push(
            documentM.decode(documentValue2, documentValue2.uint32()),
          );
          continue;
        case 9:
          if (documentValue5 !== 74) break;
          documentValue4.comments.push(
            documentI.decode(documentValue2, documentValue2.uint32()),
          );
          continue;
        case 10:
          if (documentValue5 !== 82) break;
          documentValue4.commentReferences.push(
            documentA.decode(documentValue2, documentValue2.uint32()),
          );
          continue;
        case 11:
          if (documentValue5 !== 90) break;
          documentValue4.textStyles.push(
            _presentationOt.decode(documentValue2, documentValue2.uint32()),
          );
          continue;
        case 12:
          if (documentValue5 !== 98) break;
          documentValue4.reviewMarks.push(
            presentationFr.decode(documentValue2, documentValue2.uint32()),
          );
          continue;
        case 13:
          if (documentValue5 !== 106) break;
          documentValue4.sections.push(
            _documentC.decode(documentValue2, documentValue2.uint32()),
          );
          continue;
        case 14:
          if (documentValue5 !== 114) break;
          documentValue4.numberingDefinitions.push(
            documentUnderscore.decode(documentValue2, documentValue2.uint32()),
          );
          continue;
        case 15:
          if (documentValue5 !== 122) break;
          documentValue4.paragraphNumberings.push(
            documentX.decode(documentValue2, documentValue2.uint32()),
          );
          continue;
        case 16:
          if (documentValue5 !== 130) break;
          documentValue4.tableStyleDefinitions.push(
            _presentationLn.decode(documentValue2, documentValue2.uint32()),
          );
          continue;
        case 17:
          if (documentValue5 !== 138) break;
          documentValue4.endnotes.push(
            documentF.decode(documentValue2, documentValue2.uint32()),
          );
          continue;
        case 18:
          if (documentValue5 !== 146) break;
          documentValue4.settings = documentL.decode(
            documentValue2,
            documentValue2.uint32(),
          );
          continue;
        case 19:
          if (documentValue5 !== 154) break;
          documentValue4.theme = _presentationN.decode(
            documentValue2,
            documentValue2.uint32(),
          );
          continue;
        case 20:
          if (documentValue5 !== 162) break;
          documentValue4.fonts.push(
            documentP.decode(documentValue2, documentValue2.uint32()),
          );
          continue;
      }
      if ((documentValue5 & 7) == 4 || documentValue5 === 0) break;
      documentValue2.skip(documentValue5 & 7);
    }
    return documentValue4;
  },
  create(documentParam104) {
    return documentO.fromPartial(documentParam104 ?? {});
  },
  fromPartial(documentParam5) {
    let documentValue10 = documentHelper1();
    return (
      (documentValue10.id = documentParam5.id ?? void 0),
      (documentValue10.charts =
        documentParam5.charts?.map((documentParam123) =>
          presentationJt.fromPartial(documentParam123),
        ) || []),
      (documentValue10.name = documentParam5.name ?? ``),
      (documentValue10.widthEmu = documentParam5.widthEmu ?? 0),
      (documentValue10.heightEmu = documentParam5.heightEmu ?? 0),
      (documentValue10.elements =
        documentParam5.elements?.map((documentParam124) =>
          presentationCn.fromPartial(documentParam124),
        ) || []),
      (documentValue10.images =
        documentParam5.images?.map((documentParam125) =>
          _presentationBn.fromPartial(documentParam125),
        ) || []),
      (documentValue10.footnotes =
        documentParam5.footnotes?.map((documentParam126) =>
          documentM.fromPartial(documentParam126),
        ) || []),
      (documentValue10.comments =
        documentParam5.comments?.map((documentParam127) =>
          documentI.fromPartial(documentParam127),
        ) || []),
      (documentValue10.commentReferences =
        documentParam5.commentReferences?.map((documentParam128) =>
          documentA.fromPartial(documentParam128),
        ) || []),
      (documentValue10.textStyles =
        documentParam5.textStyles?.map((documentParam129) =>
          _presentationOt.fromPartial(documentParam129),
        ) || []),
      (documentValue10.reviewMarks =
        documentParam5.reviewMarks?.map((documentParam130) =>
          presentationFr.fromPartial(documentParam130),
        ) || []),
      (documentValue10.sections =
        documentParam5.sections?.map((documentParam131) =>
          _documentC.fromPartial(documentParam131),
        ) || []),
      (documentValue10.numberingDefinitions =
        documentParam5.numberingDefinitions?.map((documentParam132) =>
          documentUnderscore.fromPartial(documentParam132),
        ) || []),
      (documentValue10.paragraphNumberings =
        documentParam5.paragraphNumberings?.map((documentParam133) =>
          documentX.fromPartial(documentParam133),
        ) || []),
      (documentValue10.tableStyleDefinitions =
        documentParam5.tableStyleDefinitions?.map((documentParam134) =>
          _presentationLn.fromPartial(documentParam134),
        ) || []),
      (documentValue10.endnotes =
        documentParam5.endnotes?.map((documentParam135) =>
          documentF.fromPartial(documentParam135),
        ) || []),
      (documentValue10.settings =
        documentParam5.settings !== void 0 && documentParam5.settings !== null
          ? documentL.fromPartial(documentParam5.settings)
          : void 0),
      (documentValue10.theme =
        documentParam5.theme !== void 0 && documentParam5.theme !== null
          ? _presentationN.fromPartial(documentParam5.theme)
          : void 0),
      (documentValue10.fonts =
        documentParam5.fonts?.map((documentParam136) =>
          documentP.fromPartial(documentParam136),
        ) || []),
      documentValue10
    );
  },
};
function documentHelper2() {
  return {
    id: ``,
    paragraphs: [],
    referenceRunIds: [],
  };
}
var documentM = {
  encode(documentParam90, documentParam91 = new presentationK()) {
    documentParam90.id !== `` &&
      documentParam91.uint32(10).string(documentParam90.id);
    for (let documentValue111 of documentParam90.paragraphs)
      presentationSn
        .encode(documentValue111, documentParam91.uint32(18).fork())
        .join();
    for (let documentValue127 of documentParam90.referenceRunIds)
      documentParam91.uint32(26).string(documentValue127);
    return documentParam91;
  },
  decode(documentParam35, documentParam36) {
    let documentValue52 =
        documentParam35 instanceof _presentationPt
          ? documentParam35
          : new _presentationPt(documentParam35),
      documentValue53 =
        documentParam36 === void 0
          ? documentValue52.len
          : documentValue52.pos + documentParam36,
      documentValue54 = documentHelper2();
    for (; documentValue52.pos < documentValue53; ) {
      let documentValue75 = documentValue52.uint32();
      switch (documentValue75 >>> 3) {
        case 1:
          if (documentValue75 !== 10) break;
          documentValue54.id = documentValue52.string();
          continue;
        case 2:
          if (documentValue75 !== 18) break;
          documentValue54.paragraphs.push(
            presentationSn.decode(documentValue52, documentValue52.uint32()),
          );
          continue;
        case 3:
          if (documentValue75 !== 26) break;
          documentValue54.referenceRunIds.push(documentValue52.string());
          continue;
      }
      if ((documentValue75 & 7) == 4 || documentValue75 === 0) break;
      documentValue52.skip(documentValue75 & 7);
    }
    return documentValue54;
  },
  create(documentParam105) {
    return documentM.fromPartial(documentParam105 ?? {});
  },
  fromPartial(documentParam83) {
    let documentValue95 = documentHelper2();
    return (
      (documentValue95.id = documentParam83.id ?? ``),
      (documentValue95.paragraphs =
        documentParam83.paragraphs?.map((documentParam137) =>
          presentationSn.fromPartial(documentParam137),
        ) || []),
      (documentValue95.referenceRunIds =
        documentParam83.referenceRunIds?.map(
          (documentParam146) => documentParam146,
        ) || []),
      documentValue95
    );
  },
};
function documentHelper3() {
  return {
    id: ``,
    paragraphs: [],
    referenceRunIds: [],
  };
}
var documentF = {
  encode(documentParam92, documentParam93 = new presentationK()) {
    documentParam92.id !== `` &&
      documentParam93.uint32(10).string(documentParam92.id);
    for (let documentValue112 of documentParam92.paragraphs)
      presentationSn
        .encode(documentValue112, documentParam93.uint32(18).fork())
        .join();
    for (let documentValue128 of documentParam92.referenceRunIds)
      documentParam93.uint32(26).string(documentValue128);
    return documentParam93;
  },
  decode(documentParam37, documentParam38) {
    let documentValue55 =
        documentParam37 instanceof _presentationPt
          ? documentParam37
          : new _presentationPt(documentParam37),
      documentValue56 =
        documentParam38 === void 0
          ? documentValue55.len
          : documentValue55.pos + documentParam38,
      documentValue57 = documentHelper3();
    for (; documentValue55.pos < documentValue56; ) {
      let documentValue76 = documentValue55.uint32();
      switch (documentValue76 >>> 3) {
        case 1:
          if (documentValue76 !== 10) break;
          documentValue57.id = documentValue55.string();
          continue;
        case 2:
          if (documentValue76 !== 18) break;
          documentValue57.paragraphs.push(
            presentationSn.decode(documentValue55, documentValue55.uint32()),
          );
          continue;
        case 3:
          if (documentValue76 !== 26) break;
          documentValue57.referenceRunIds.push(documentValue55.string());
          continue;
      }
      if ((documentValue76 & 7) == 4 || documentValue76 === 0) break;
      documentValue55.skip(documentValue76 & 7);
    }
    return documentValue57;
  },
  create(documentParam106) {
    return documentF.fromPartial(documentParam106 ?? {});
  },
  fromPartial(documentParam84) {
    let documentValue96 = documentHelper3();
    return (
      (documentValue96.id = documentParam84.id ?? ``),
      (documentValue96.paragraphs =
        documentParam84.paragraphs?.map((documentParam138) =>
          presentationSn.fromPartial(documentParam138),
        ) || []),
      (documentValue96.referenceRunIds =
        documentParam84.referenceRunIds?.map(
          (documentParam147) => documentParam147,
        ) || []),
      documentValue96
    );
  },
};
function documentHelper4() {
  return {
    id: ``,
    author: ``,
    initials: ``,
    createdAt: ``,
    paragraphs: [],
  };
}
var documentI = {
  encode(documentParam64, documentParam65 = new presentationK()) {
    (documentParam64.id !== `` &&
      documentParam65.uint32(10).string(documentParam64.id),
      documentParam64.author !== `` &&
        documentParam65.uint32(18).string(documentParam64.author),
      documentParam64.initials !== `` &&
        documentParam65.uint32(26).string(documentParam64.initials),
      documentParam64.createdAt !== `` &&
        documentParam65.uint32(34).string(documentParam64.createdAt));
    for (let documentValue113 of documentParam64.paragraphs)
      presentationSn
        .encode(documentValue113, documentParam65.uint32(42).fork())
        .join();
    return documentParam65;
  },
  decode(documentParam23, documentParam24) {
    let documentValue33 =
        documentParam23 instanceof _presentationPt
          ? documentParam23
          : new _presentationPt(documentParam23),
      documentValue34 =
        documentParam24 === void 0
          ? documentValue33.len
          : documentValue33.pos + documentParam24,
      documentValue35 = documentHelper4();
    for (; documentValue33.pos < documentValue34; ) {
      let documentValue47 = documentValue33.uint32();
      switch (documentValue47 >>> 3) {
        case 1:
          if (documentValue47 !== 10) break;
          documentValue35.id = documentValue33.string();
          continue;
        case 2:
          if (documentValue47 !== 18) break;
          documentValue35.author = documentValue33.string();
          continue;
        case 3:
          if (documentValue47 !== 26) break;
          documentValue35.initials = documentValue33.string();
          continue;
        case 4:
          if (documentValue47 !== 34) break;
          documentValue35.createdAt = documentValue33.string();
          continue;
        case 5:
          if (documentValue47 !== 42) break;
          documentValue35.paragraphs.push(
            presentationSn.decode(documentValue33, documentValue33.uint32()),
          );
          continue;
      }
      if ((documentValue47 & 7) == 4 || documentValue47 === 0) break;
      documentValue33.skip(documentValue47 & 7);
    }
    return documentValue35;
  },
  create(documentParam107) {
    return documentI.fromPartial(documentParam107 ?? {});
  },
  fromPartial(documentParam72) {
    let documentValue89 = documentHelper4();
    return (
      (documentValue89.id = documentParam72.id ?? ``),
      (documentValue89.author = documentParam72.author ?? ``),
      (documentValue89.initials = documentParam72.initials ?? ``),
      (documentValue89.createdAt = documentParam72.createdAt ?? ``),
      (documentValue89.paragraphs =
        documentParam72.paragraphs?.map((documentParam139) =>
          presentationSn.fromPartial(documentParam139),
        ) || []),
      documentValue89
    );
  },
};
function documentHelper5() {
  return {
    commentId: ``,
    runIds: [],
  };
}
var documentA = {
  encode(documentParam98, documentParam99 = new presentationK()) {
    documentParam98.commentId !== `` &&
      documentParam99.uint32(10).string(documentParam98.commentId);
    for (let documentValue130 of documentParam98.runIds)
      documentParam99.uint32(18).string(documentValue130);
    return documentParam99;
  },
  decode(documentParam51, documentParam52) {
    let documentValue71 =
        documentParam51 instanceof _presentationPt
          ? documentParam51
          : new _presentationPt(documentParam51),
      documentValue72 =
        documentParam52 === void 0
          ? documentValue71.len
          : documentValue71.pos + documentParam52,
      documentValue73 = documentHelper5();
    for (; documentValue71.pos < documentValue72; ) {
      let documentValue85 = documentValue71.uint32();
      switch (documentValue85 >>> 3) {
        case 1:
          if (documentValue85 !== 10) break;
          documentValue73.commentId = documentValue71.string();
          continue;
        case 2:
          if (documentValue85 !== 18) break;
          documentValue73.runIds.push(documentValue71.string());
          continue;
      }
      if ((documentValue85 & 7) == 4 || documentValue85 === 0) break;
      documentValue71.skip(documentValue85 & 7);
    }
    return documentValue73;
  },
  create(documentParam108) {
    return documentA.fromPartial(documentParam108 ?? {});
  },
  fromPartial(documentParam97) {
    let documentValue101 = documentHelper5();
    return (
      (documentValue101.commentId = documentParam97.commentId ?? ``),
      (documentValue101.runIds =
        documentParam97.runIds?.map((documentParam148) => documentParam148) ||
        []),
      documentValue101
    );
  },
};
function documentHelper6() {
  return {
    numberingFormat: void 0,
    defaultNoteIds: [],
    numberingStart: void 0,
    numberingRestart: void 0,
    position: void 0,
  };
}
var documentG = {
  encode(documentParam57, documentParam58 = new presentationK()) {
    documentParam57.numberingFormat !== void 0 &&
      documentParam58.uint32(10).string(documentParam57.numberingFormat);
    for (let documentValue129 of documentParam57.defaultNoteIds)
      documentParam58.uint32(18).string(documentValue129);
    return (
      documentParam57.numberingStart !== void 0 &&
        documentParam58.uint32(24).int32(documentParam57.numberingStart),
      documentParam57.numberingRestart !== void 0 &&
        documentParam58.uint32(34).string(documentParam57.numberingRestart),
      documentParam57.position !== void 0 &&
        documentParam58.uint32(42).string(documentParam57.position),
      documentParam58
    );
  },
  decode(documentParam21, documentParam22) {
    let documentValue29 =
        documentParam21 instanceof _presentationPt
          ? documentParam21
          : new _presentationPt(documentParam21),
      documentValue30 =
        documentParam22 === void 0
          ? documentValue29.len
          : documentValue29.pos + documentParam22,
      documentValue31 = documentHelper6();
    for (; documentValue29.pos < documentValue30; ) {
      let documentValue46 = documentValue29.uint32();
      switch (documentValue46 >>> 3) {
        case 1:
          if (documentValue46 !== 10) break;
          documentValue31.numberingFormat = documentValue29.string();
          continue;
        case 2:
          if (documentValue46 !== 18) break;
          documentValue31.defaultNoteIds.push(documentValue29.string());
          continue;
        case 3:
          if (documentValue46 !== 24) break;
          documentValue31.numberingStart = documentValue29.int32();
          continue;
        case 4:
          if (documentValue46 !== 34) break;
          documentValue31.numberingRestart = documentValue29.string();
          continue;
        case 5:
          if (documentValue46 !== 42) break;
          documentValue31.position = documentValue29.string();
          continue;
      }
      if ((documentValue46 & 7) == 4 || documentValue46 === 0) break;
      documentValue29.skip(documentValue46 & 7);
    }
    return documentValue31;
  },
  create(documentParam109) {
    return documentG.fromPartial(documentParam109 ?? {});
  },
  fromPartial(documentParam63) {
    let documentValue84 = documentHelper6();
    return (
      (documentValue84.numberingFormat =
        documentParam63.numberingFormat ?? void 0),
      (documentValue84.defaultNoteIds =
        documentParam63.defaultNoteIds?.map(
          (documentParam149) => documentParam149,
        ) || []),
      (documentValue84.numberingStart =
        documentParam63.numberingStart ?? void 0),
      (documentValue84.numberingRestart =
        documentParam63.numberingRestart ?? void 0),
      (documentValue84.position = documentParam63.position ?? void 0),
      documentValue84
    );
  },
};
function documentHelper7() {
  return {
    defaultTabStop: void 0,
    autoHyphenation: void 0,
    mirrorMargins: void 0,
    footnoteProperties: void 0,
    endnoteProperties: void 0,
    displayBackgroundShape: void 0,
    backgroundFill: void 0,
  };
}
var documentL = {
  encode(documentParam31, documentParam32 = new presentationK()) {
    return (
      documentParam31.defaultTabStop !== void 0 &&
        documentParam32.uint32(8).int32(documentParam31.defaultTabStop),
      documentParam31.autoHyphenation !== void 0 &&
        documentParam32.uint32(16).bool(documentParam31.autoHyphenation),
      documentParam31.mirrorMargins !== void 0 &&
        documentParam32.uint32(24).bool(documentParam31.mirrorMargins),
      documentParam31.footnoteProperties !== void 0 &&
        documentG
          .encode(
            documentParam31.footnoteProperties,
            documentParam32.uint32(34).fork(),
          )
          .join(),
      documentParam31.endnoteProperties !== void 0 &&
        documentG
          .encode(
            documentParam31.endnoteProperties,
            documentParam32.uint32(42).fork(),
          )
          .join(),
      documentParam31.displayBackgroundShape !== void 0 &&
        documentParam32.uint32(48).bool(documentParam31.displayBackgroundShape),
      documentParam31.backgroundFill !== void 0 &&
        _presentationMn
          .encode(
            documentParam31.backgroundFill,
            documentParam32.uint32(58).fork(),
          )
          .join(),
      documentParam32
    );
  },
  decode(documentParam13, documentParam14) {
    let documentValue15 =
        documentParam13 instanceof _presentationPt
          ? documentParam13
          : new _presentationPt(documentParam13),
      documentValue16 =
        documentParam14 === void 0
          ? documentValue15.len
          : documentValue15.pos + documentParam14,
      documentValue17 = documentHelper7();
    for (; documentValue15.pos < documentValue16; ) {
      let documentValue22 = documentValue15.uint32();
      switch (documentValue22 >>> 3) {
        case 1:
          if (documentValue22 !== 8) break;
          documentValue17.defaultTabStop = documentValue15.int32();
          continue;
        case 2:
          if (documentValue22 !== 16) break;
          documentValue17.autoHyphenation = documentValue15.bool();
          continue;
        case 3:
          if (documentValue22 !== 24) break;
          documentValue17.mirrorMargins = documentValue15.bool();
          continue;
        case 4:
          if (documentValue22 !== 34) break;
          documentValue17.footnoteProperties = documentG.decode(
            documentValue15,
            documentValue15.uint32(),
          );
          continue;
        case 5:
          if (documentValue22 !== 42) break;
          documentValue17.endnoteProperties = documentG.decode(
            documentValue15,
            documentValue15.uint32(),
          );
          continue;
        case 6:
          if (documentValue22 !== 48) break;
          documentValue17.displayBackgroundShape = documentValue15.bool();
          continue;
        case 7:
          if (documentValue22 !== 58) break;
          documentValue17.backgroundFill = _presentationMn.decode(
            documentValue15,
            documentValue15.uint32(),
          );
          continue;
      }
      if ((documentValue22 & 7) == 4 || documentValue22 === 0) break;
      documentValue15.skip(documentValue22 & 7);
    }
    return documentValue17;
  },
  create(documentParam110) {
    return documentL.fromPartial(documentParam110 ?? {});
  },
  fromPartial(documentParam27) {
    let documentValue39 = documentHelper7();
    return (
      (documentValue39.defaultTabStop =
        documentParam27.defaultTabStop ?? void 0),
      (documentValue39.autoHyphenation =
        documentParam27.autoHyphenation ?? void 0),
      (documentValue39.mirrorMargins = documentParam27.mirrorMargins ?? void 0),
      (documentValue39.footnoteProperties =
        documentParam27.footnoteProperties !== void 0 &&
        documentParam27.footnoteProperties !== null
          ? documentG.fromPartial(documentParam27.footnoteProperties)
          : void 0),
      (documentValue39.endnoteProperties =
        documentParam27.endnoteProperties !== void 0 &&
        documentParam27.endnoteProperties !== null
          ? documentG.fromPartial(documentParam27.endnoteProperties)
          : void 0),
      (documentValue39.displayBackgroundShape =
        documentParam27.displayBackgroundShape ?? void 0),
      (documentValue39.backgroundFill =
        documentParam27.backgroundFill !== void 0 &&
        documentParam27.backgroundFill !== null
          ? _presentationMn.fromPartial(documentParam27.backgroundFill)
          : void 0),
      documentValue39
    );
  },
};
function documentHelper8() {
  return {
    relationshipId: ``,
    key: void 0,
    type: 0,
    contentType: ``,
    data: new Uint8Array(),
    subsetted: void 0,
  };
}
var documentU = {
  encode(event, documentParam56 = new presentationK()) {
    return (
      event.relationshipId !== `` &&
        documentParam56.uint32(10).string(event.relationshipId),
      event.key !== void 0 && documentParam56.uint32(18).string(event.key),
      event.type !== 0 && documentParam56.uint32(24).int32(event.type),
      event.contentType !== `` &&
        documentParam56.uint32(34).string(event.contentType),
      event.data.length !== 0 && documentParam56.uint32(42).bytes(event.data),
      event.subsetted !== void 0 &&
        documentParam56.uint32(48).bool(event.subsetted),
      documentParam56
    );
  },
  decode(documentParam17, documentParam18) {
    let documentValue23 =
        documentParam17 instanceof _presentationPt
          ? documentParam17
          : new _presentationPt(documentParam17),
      documentValue24 =
        documentParam18 === void 0
          ? documentValue23.len
          : documentValue23.pos + documentParam18,
      documentValue25 = documentHelper8();
    for (; documentValue23.pos < documentValue24; ) {
      let documentValue41 = documentValue23.uint32();
      switch (documentValue41 >>> 3) {
        case 1:
          if (documentValue41 !== 10) break;
          documentValue25.relationshipId = documentValue23.string();
          continue;
        case 2:
          if (documentValue41 !== 18) break;
          documentValue25.key = documentValue23.string();
          continue;
        case 3:
          if (documentValue41 !== 24) break;
          documentValue25.type = documentValue23.int32();
          continue;
        case 4:
          if (documentValue41 !== 34) break;
          documentValue25.contentType = documentValue23.string();
          continue;
        case 5:
          if (documentValue41 !== 42) break;
          documentValue25.data = documentValue23.bytes();
          continue;
        case 6:
          if (documentValue41 !== 48) break;
          documentValue25.subsetted = documentValue23.bool();
          continue;
      }
      if ((documentValue41 & 7) == 4 || documentValue41 === 0) break;
      documentValue23.skip(documentValue41 & 7);
    }
    return documentValue25;
  },
  create(documentParam111) {
    return documentU.fromPartial(documentParam111 ?? {});
  },
  fromPartial(event) {
    let documentValue86 = documentHelper8();
    return (
      (documentValue86.relationshipId = event.relationshipId ?? ``),
      (documentValue86.key = event.key ?? void 0),
      (documentValue86.type = event.type ?? 0),
      (documentValue86.contentType = event.contentType ?? ``),
      (documentValue86.data = event.data ?? new Uint8Array()),
      (documentValue86.subsetted = event.subsetted ?? void 0),
      documentValue86
    );
  },
};
function documentHelper9() {
  return {
    name: ``,
    altName: void 0,
    family: void 0,
    embeddedFonts: [],
  };
}
var documentP = {
  encode(documentParam68, documentParam69 = new presentationK()) {
    (documentParam68.name !== `` &&
      documentParam69.uint32(10).string(documentParam68.name),
      documentParam68.altName !== void 0 &&
        documentParam69.uint32(18).string(documentParam68.altName),
      documentParam68.family !== void 0 &&
        documentParam69.uint32(26).string(documentParam68.family));
    for (let documentValue108 of documentParam68.embeddedFonts)
      documentU
        .encode(documentValue108, documentParam69.uint32(34).fork())
        .join();
    return documentParam69;
  },
  decode(documentParam29, documentParam30) {
    let documentValue43 =
        documentParam29 instanceof _presentationPt
          ? documentParam29
          : new _presentationPt(documentParam29),
      documentValue44 =
        documentParam30 === void 0
          ? documentValue43.len
          : documentValue43.pos + documentParam30,
      documentValue45 = documentHelper9();
    for (; documentValue43.pos < documentValue44; ) {
      let documentValue70 = documentValue43.uint32();
      switch (documentValue70 >>> 3) {
        case 1:
          if (documentValue70 !== 10) break;
          documentValue45.name = documentValue43.string();
          continue;
        case 2:
          if (documentValue70 !== 18) break;
          documentValue45.altName = documentValue43.string();
          continue;
        case 3:
          if (documentValue70 !== 26) break;
          documentValue45.family = documentValue43.string();
          continue;
        case 4:
          if (documentValue70 !== 34) break;
          documentValue45.embeddedFonts.push(
            documentU.decode(documentValue43, documentValue43.uint32()),
          );
          continue;
      }
      if ((documentValue70 & 7) == 4 || documentValue70 === 0) break;
      documentValue43.skip(documentValue70 & 7);
    }
    return documentValue45;
  },
  create(documentParam112) {
    return documentP.fromPartial(documentParam112 ?? {});
  },
  fromPartial(documentParam77) {
    let documentValue92 = documentHelper9();
    return (
      (documentValue92.name = documentParam77.name ?? ``),
      (documentValue92.altName = documentParam77.altName ?? void 0),
      (documentValue92.family = documentParam77.family ?? void 0),
      (documentValue92.embeddedFonts =
        documentParam77.embeddedFonts?.map((documentParam140) =>
          documentU.fromPartial(documentParam140),
        ) || []),
      documentValue92
    );
  },
};
function documentHelper10() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    header: 0,
    footer: 0,
    gutter: 0,
  };
}
var documentY = {
  encode(documentParam54, documentParam55 = new presentationK()) {
    return (
      documentParam54.top !== 0 &&
        documentParam55.uint32(8).int32(documentParam54.top),
      documentParam54.bottom !== 0 &&
        documentParam55.uint32(16).int32(documentParam54.bottom),
      documentParam54.left !== 0 &&
        documentParam55.uint32(24).int32(documentParam54.left),
      documentParam54.right !== 0 &&
        documentParam55.uint32(32).int32(documentParam54.right),
      documentParam54.header !== 0 &&
        documentParam55.uint32(40).int32(documentParam54.header),
      documentParam54.footer !== 0 &&
        documentParam55.uint32(48).int32(documentParam54.footer),
      documentParam54.gutter !== 0 &&
        documentParam55.uint32(56).int32(documentParam54.gutter),
      documentParam55
    );
  },
  decode(documentParam15, documentParam16) {
    let documentValue18 =
        documentParam15 instanceof _presentationPt
          ? documentParam15
          : new _presentationPt(documentParam15),
      documentValue19 =
        documentParam16 === void 0
          ? documentValue18.len
          : documentValue18.pos + documentParam16,
      documentValue20 = documentHelper10();
    for (; documentValue18.pos < documentValue19; ) {
      let documentValue32 = documentValue18.uint32();
      switch (documentValue32 >>> 3) {
        case 1:
          if (documentValue32 !== 8) break;
          documentValue20.top = documentValue18.int32();
          continue;
        case 2:
          if (documentValue32 !== 16) break;
          documentValue20.bottom = documentValue18.int32();
          continue;
        case 3:
          if (documentValue32 !== 24) break;
          documentValue20.left = documentValue18.int32();
          continue;
        case 4:
          if (documentValue32 !== 32) break;
          documentValue20.right = documentValue18.int32();
          continue;
        case 5:
          if (documentValue32 !== 40) break;
          documentValue20.header = documentValue18.int32();
          continue;
        case 6:
          if (documentValue32 !== 48) break;
          documentValue20.footer = documentValue18.int32();
          continue;
        case 7:
          if (documentValue32 !== 56) break;
          documentValue20.gutter = documentValue18.int32();
          continue;
      }
      if ((documentValue32 & 7) == 4 || documentValue32 === 0) break;
      documentValue18.skip(documentValue32 & 7);
    }
    return documentValue20;
  },
  create(documentParam113) {
    return documentY.fromPartial(documentParam113 ?? {});
  },
  fromPartial(documentParam70) {
    let documentValue87 = documentHelper10();
    return (
      (documentValue87.top = documentParam70.top ?? 0),
      (documentValue87.bottom = documentParam70.bottom ?? 0),
      (documentValue87.left = documentParam70.left ?? 0),
      (documentValue87.right = documentParam70.right ?? 0),
      (documentValue87.header = documentParam70.header ?? 0),
      (documentValue87.footer = documentParam70.footer ?? 0),
      (documentValue87.gutter = documentParam70.gutter ?? 0),
      documentValue87
    );
  },
};
function documentHelper11() {
  return {
    widthEmu: 0,
    heightEmu: 0,
    pageMargin: void 0,
  };
}
var documentB = {
  encode(documentParam75, documentParam76 = new presentationK()) {
    return (
      documentParam75.widthEmu !== 0 &&
        documentParam76.uint32(8).int64(documentParam75.widthEmu),
      documentParam75.heightEmu !== 0 &&
        documentParam76.uint32(16).int64(documentParam75.heightEmu),
      documentParam75.pageMargin !== void 0 &&
        documentY
          .encode(documentParam75.pageMargin, documentParam76.uint32(26).fork())
          .join(),
      documentParam76
    );
  },
  decode(documentParam39, documentParam40) {
    let documentValue58 =
        documentParam39 instanceof _presentationPt
          ? documentParam39
          : new _presentationPt(documentParam39),
      documentValue59 =
        documentParam40 === void 0
          ? documentValue58.len
          : documentValue58.pos + documentParam40,
      documentValue60 = documentHelper11();
    for (; documentValue58.pos < documentValue59; ) {
      let documentValue77 = documentValue58.uint32();
      switch (documentValue77 >>> 3) {
        case 1:
          if (documentValue77 !== 8) break;
          documentValue60.widthEmu = $(documentValue58.int64());
          continue;
        case 2:
          if (documentValue77 !== 16) break;
          documentValue60.heightEmu = $(documentValue58.int64());
          continue;
        case 3:
          if (documentValue77 !== 26) break;
          documentValue60.pageMargin = documentY.decode(
            documentValue58,
            documentValue58.uint32(),
          );
          continue;
      }
      if ((documentValue77 & 7) == 4 || documentValue77 === 0) break;
      documentValue58.skip(documentValue77 & 7);
    }
    return documentValue60;
  },
  create(documentParam114) {
    return documentB.fromPartial(documentParam114 ?? {});
  },
  fromPartial(documentParam71) {
    let documentValue88 = documentHelper11();
    return (
      (documentValue88.widthEmu = documentParam71.widthEmu ?? 0),
      (documentValue88.heightEmu = documentParam71.heightEmu ?? 0),
      (documentValue88.pageMargin =
        documentParam71.pageMargin !== void 0 &&
        documentParam71.pageMargin !== null
          ? documentY.fromPartial(documentParam71.pageMargin)
          : void 0),
      documentValue88
    );
  },
};
function documentHelper12() {
  return {
    count: 0,
    space: 0,
    widths: [],
    hasSeparatorLine: !1,
  };
}
var documentR = {
  encode(documentParam66, documentParam67 = new presentationK()) {
    (documentParam66.count !== 0 &&
      documentParam67.uint32(8).int32(documentParam66.count),
      documentParam66.space !== 0 &&
        documentParam67.uint32(16).int32(documentParam66.space),
      documentParam67.uint32(26).fork());
    for (let documentValue131 of documentParam66.widths)
      documentParam67.int32(documentValue131);
    return (
      documentParam67.join(),
      documentParam66.hasSeparatorLine !== !1 &&
        documentParam67.uint32(32).bool(documentParam66.hasSeparatorLine),
      documentParam67
    );
  },
  decode(documentParam19, documentParam20) {
    let documentValue26 =
        documentParam19 instanceof _presentationPt
          ? documentParam19
          : new _presentationPt(documentParam19),
      documentValue27 =
        documentParam20 === void 0
          ? documentValue26.len
          : documentValue26.pos + documentParam20,
      documentValue28 = documentHelper12();
    for (; documentValue26.pos < documentValue27; ) {
      let documentValue42 = documentValue26.uint32();
      switch (documentValue42 >>> 3) {
        case 1:
          if (documentValue42 !== 8) break;
          documentValue28.count = documentValue26.int32();
          continue;
        case 2:
          if (documentValue42 !== 16) break;
          documentValue28.space = documentValue26.int32();
          continue;
        case 3:
          if (documentValue42 === 24) {
            documentValue28.widths.push(documentValue26.int32());
            continue;
          }
          if (documentValue42 === 26) {
            let documentValue102 =
              documentValue26.uint32() + documentValue26.pos;
            for (; documentValue26.pos < documentValue102; )
              documentValue28.widths.push(documentValue26.int32());
            continue;
          }
          break;
        case 4:
          if (documentValue42 !== 32) break;
          documentValue28.hasSeparatorLine = documentValue26.bool();
          continue;
      }
      if ((documentValue42 & 7) == 4 || documentValue42 === 0) break;
      documentValue26.skip(documentValue42 & 7);
    }
    return documentValue28;
  },
  create(documentParam115) {
    return documentR.fromPartial(documentParam115 ?? {});
  },
  fromPartial(documentParam82) {
    let documentValue94 = documentHelper12();
    return (
      (documentValue94.count = documentParam82.count ?? 0),
      (documentValue94.space = documentParam82.space ?? 0),
      (documentValue94.widths =
        documentParam82.widths?.map((documentParam150) => documentParam150) ||
        []),
      (documentValue94.hasSeparatorLine =
        documentParam82.hasSeparatorLine ?? !1),
      documentValue94
    );
  },
};
function documentHelper13() {
  return {
    type: void 0,
    linePitch: void 0,
    charSpace: void 0,
  };
}
var documentS = {
  encode(documentParam78, documentParam79 = new presentationK()) {
    return (
      documentParam78.type !== void 0 &&
        documentParam79.uint32(10).string(documentParam78.type),
      documentParam78.linePitch !== void 0 &&
        documentParam79.uint32(16).int32(documentParam78.linePitch),
      documentParam78.charSpace !== void 0 &&
        documentParam79.uint32(24).int32(documentParam78.charSpace),
      documentParam79
    );
  },
  decode(documentParam45, documentParam46) {
    let documentValue64 =
        documentParam45 instanceof _presentationPt
          ? documentParam45
          : new _presentationPt(documentParam45),
      documentValue65 =
        documentParam46 === void 0
          ? documentValue64.len
          : documentValue64.pos + documentParam46,
      documentValue66 = documentHelper13();
    for (; documentValue64.pos < documentValue65; ) {
      let documentValue79 = documentValue64.uint32();
      switch (documentValue79 >>> 3) {
        case 1:
          if (documentValue79 !== 10) break;
          documentValue66.type = documentValue64.string();
          continue;
        case 2:
          if (documentValue79 !== 16) break;
          documentValue66.linePitch = documentValue64.int32();
          continue;
        case 3:
          if (documentValue79 !== 24) break;
          documentValue66.charSpace = documentValue64.int32();
          continue;
      }
      if ((documentValue79 & 7) == 4 || documentValue79 === 0) break;
      documentValue64.skip(documentValue79 & 7);
    }
    return documentValue66;
  },
  create(documentParam116) {
    return documentS.fromPartial(documentParam116 ?? {});
  },
  fromPartial(documentParam95) {
    let documentValue99 = documentHelper13();
    return (
      (documentValue99.type = documentParam95.type ?? void 0),
      (documentValue99.linePitch = documentParam95.linePitch ?? void 0),
      (documentValue99.charSpace = documentParam95.charSpace ?? void 0),
      documentValue99
    );
  },
};
function documentHelper14() {
  return {
    elements: [],
  };
}
var documentH = {
  encode(documentParam101, documentParam102 = new presentationK()) {
    for (let documentValue119 of documentParam101.elements)
      presentationCn
        .encode(documentValue119, documentParam102.uint32(10).fork())
        .join();
    return documentParam102;
  },
  decode(documentParam59, documentParam60) {
    let documentValue81 =
        documentParam59 instanceof _presentationPt
          ? documentParam59
          : new _presentationPt(documentParam59),
      documentValue82 =
        documentParam60 === void 0
          ? documentValue81.len
          : documentValue81.pos + documentParam60,
      documentValue83 = documentHelper14();
    for (; documentValue81.pos < documentValue82; ) {
      let documentValue93 = documentValue81.uint32();
      switch (documentValue93 >>> 3) {
        case 1:
          if (documentValue93 !== 10) break;
          documentValue83.elements.push(
            presentationCn.decode(documentValue81, documentValue81.uint32()),
          );
          continue;
      }
      if ((documentValue93 & 7) == 4 || documentValue93 === 0) break;
      documentValue81.skip(documentValue93 & 7);
    }
    return documentValue83;
  },
  create(documentParam117) {
    return documentH.fromPartial(documentParam117 ?? {});
  },
  fromPartial(documentParam100) {
    let documentValue103 = documentHelper14();
    return (
      (documentValue103.elements =
        documentParam100.elements?.map((documentParam141) =>
          presentationCn.fromPartial(documentParam141),
        ) || []),
      documentValue103
    );
  },
};
function documentHelper15() {
  return {
    level: 0,
    numberFormat: ``,
    levelText: ``,
    startAt: 0,
    paragraphStyleId: ``,
  };
}
var documentV = {
  encode(documentParam61, documentParam62 = new presentationK()) {
    return (
      documentParam61.level !== 0 &&
        documentParam62.uint32(8).int32(documentParam61.level),
      documentParam61.numberFormat !== `` &&
        documentParam62.uint32(18).string(documentParam61.numberFormat),
      documentParam61.levelText !== `` &&
        documentParam62.uint32(26).string(documentParam61.levelText),
      documentParam61.startAt !== 0 &&
        documentParam62.uint32(32).int32(documentParam61.startAt),
      documentParam61.paragraphStyleId !== `` &&
        documentParam62.uint32(42).string(documentParam61.paragraphStyleId),
      documentParam62
    );
  },
  decode(documentParam25, documentParam26) {
    let documentValue36 =
        documentParam25 instanceof _presentationPt
          ? documentParam25
          : new _presentationPt(documentParam25),
      documentValue37 =
        documentParam26 === void 0
          ? documentValue36.len
          : documentValue36.pos + documentParam26,
      documentValue38 = documentHelper15();
    for (; documentValue36.pos < documentValue37; ) {
      let documentValue48 = documentValue36.uint32();
      switch (documentValue48 >>> 3) {
        case 1:
          if (documentValue48 !== 8) break;
          documentValue38.level = documentValue36.int32();
          continue;
        case 2:
          if (documentValue48 !== 18) break;
          documentValue38.numberFormat = documentValue36.string();
          continue;
        case 3:
          if (documentValue48 !== 26) break;
          documentValue38.levelText = documentValue36.string();
          continue;
        case 4:
          if (documentValue48 !== 32) break;
          documentValue38.startAt = documentValue36.int32();
          continue;
        case 5:
          if (documentValue48 !== 42) break;
          documentValue38.paragraphStyleId = documentValue36.string();
          continue;
      }
      if ((documentValue48 & 7) == 4 || documentValue48 === 0) break;
      documentValue36.skip(documentValue48 & 7);
    }
    return documentValue38;
  },
  create(documentParam118) {
    return documentV.fromPartial(documentParam118 ?? {});
  },
  fromPartial(documentParam74) {
    let documentValue91 = documentHelper15();
    return (
      (documentValue91.level = documentParam74.level ?? 0),
      (documentValue91.numberFormat = documentParam74.numberFormat ?? ``),
      (documentValue91.levelText = documentParam74.levelText ?? ``),
      (documentValue91.startAt = documentParam74.startAt ?? 0),
      (documentValue91.paragraphStyleId =
        documentParam74.paragraphStyleId ?? ``),
      documentValue91
    );
  },
};
function documentHelper16() {
  return {
    numId: ``,
    abstractNumId: ``,
    levels: [],
  };
}
var documentUnderscore = {
  encode(documentParam80, documentParam81 = new presentationK()) {
    (documentParam80.numId !== `` &&
      documentParam81.uint32(10).string(documentParam80.numId),
      documentParam80.abstractNumId !== `` &&
        documentParam81.uint32(18).string(documentParam80.abstractNumId));
    for (let documentValue125 of documentParam80.levels)
      documentV
        .encode(documentValue125, documentParam81.uint32(26).fork())
        .join();
    return documentParam81;
  },
  decode(documentParam43, documentParam44) {
    let documentValue61 =
        documentParam43 instanceof _presentationPt
          ? documentParam43
          : new _presentationPt(documentParam43),
      documentValue62 =
        documentParam44 === void 0
          ? documentValue61.len
          : documentValue61.pos + documentParam44,
      documentValue63 = documentHelper16();
    for (; documentValue61.pos < documentValue62; ) {
      let documentValue78 = documentValue61.uint32();
      switch (documentValue78 >>> 3) {
        case 1:
          if (documentValue78 !== 10) break;
          documentValue63.numId = documentValue61.string();
          continue;
        case 2:
          if (documentValue78 !== 18) break;
          documentValue63.abstractNumId = documentValue61.string();
          continue;
        case 3:
          if (documentValue78 !== 26) break;
          documentValue63.levels.push(
            documentV.decode(documentValue61, documentValue61.uint32()),
          );
          continue;
      }
      if ((documentValue78 & 7) == 4 || documentValue78 === 0) break;
      documentValue61.skip(documentValue78 & 7);
    }
    return documentValue63;
  },
  create(documentParam119) {
    return documentUnderscore.fromPartial(documentParam119 ?? {});
  },
  fromPartial(documentParam94) {
    let documentValue98 = documentHelper16();
    return (
      (documentValue98.numId = documentParam94.numId ?? ``),
      (documentValue98.abstractNumId = documentParam94.abstractNumId ?? ``),
      (documentValue98.levels =
        documentParam94.levels?.map((documentParam142) =>
          documentV.fromPartial(documentParam142),
        ) || []),
      documentValue98
    );
  },
};
function documentHelper17() {
  return {
    paragraphId: ``,
    numId: ``,
    level: 0,
  };
}
var documentX = {
  encode(documentParam88, documentParam89 = new presentationK()) {
    return (
      documentParam88.paragraphId !== `` &&
        documentParam89.uint32(10).string(documentParam88.paragraphId),
      documentParam88.numId !== `` &&
        documentParam89.uint32(18).string(documentParam88.numId),
      documentParam88.level !== 0 &&
        documentParam89.uint32(24).int32(documentParam88.level),
      documentParam89
    );
  },
  decode(documentParam47, documentParam48) {
    let documentValue67 =
        documentParam47 instanceof _presentationPt
          ? documentParam47
          : new _presentationPt(documentParam47),
      documentValue68 =
        documentParam48 === void 0
          ? documentValue67.len
          : documentValue67.pos + documentParam48,
      documentValue69 = documentHelper17();
    for (; documentValue67.pos < documentValue68; ) {
      let documentValue80 = documentValue67.uint32();
      switch (documentValue80 >>> 3) {
        case 1:
          if (documentValue80 !== 10) break;
          documentValue69.paragraphId = documentValue67.string();
          continue;
        case 2:
          if (documentValue80 !== 18) break;
          documentValue69.numId = documentValue67.string();
          continue;
        case 3:
          if (documentValue80 !== 24) break;
          documentValue69.level = documentValue67.int32();
          continue;
      }
      if ((documentValue80 & 7) == 4 || documentValue80 === 0) break;
      documentValue67.skip(documentValue80 & 7);
    }
    return documentValue69;
  },
  create(documentParam120) {
    return documentX.fromPartial(documentParam120 ?? {});
  },
  fromPartial(documentParam96) {
    let documentValue100 = documentHelper17();
    return (
      (documentValue100.paragraphId = documentParam96.paragraphId ?? ``),
      (documentValue100.numId = documentParam96.numId ?? ``),
      (documentValue100.level = documentParam96.level ?? 0),
      documentValue100
    );
  },
};
function documentHelper18() {
  return {
    id: ``,
    breakType: 0,
    pageSetup: void 0,
    columns: void 0,
    elements: [],
    header: void 0,
    footer: void 0,
    startsWithPageBreak: !1,
    pageNumberStart: void 0,
    pageNumberFormat: void 0,
    differentFirstPage: void 0,
    firstHeader: void 0,
    firstFooter: void 0,
    documentGrid: void 0,
  };
}
var _documentC = {
  encode(documentParam9, documentParam10 = new presentationK()) {
    (documentParam9.id !== `` &&
      documentParam10.uint32(10).string(documentParam9.id),
      documentParam9.breakType !== 0 &&
        documentParam10.uint32(16).int32(documentParam9.breakType),
      documentParam9.pageSetup !== void 0 &&
        documentB
          .encode(documentParam9.pageSetup, documentParam10.uint32(26).fork())
          .join(),
      documentParam9.columns !== void 0 &&
        documentR
          .encode(documentParam9.columns, documentParam10.uint32(34).fork())
          .join());
    for (let documentValue120 of documentParam9.elements)
      presentationCn
        .encode(documentValue120, documentParam10.uint32(42).fork())
        .join();
    return (
      documentParam9.header !== void 0 &&
        documentH
          .encode(documentParam9.header, documentParam10.uint32(50).fork())
          .join(),
      documentParam9.footer !== void 0 &&
        documentH
          .encode(documentParam9.footer, documentParam10.uint32(58).fork())
          .join(),
      documentParam9.startsWithPageBreak !== !1 &&
        documentParam10.uint32(64).bool(documentParam9.startsWithPageBreak),
      documentParam9.pageNumberStart !== void 0 &&
        documentParam10.uint32(72).int32(documentParam9.pageNumberStart),
      documentParam9.pageNumberFormat !== void 0 &&
        documentParam10.uint32(82).string(documentParam9.pageNumberFormat),
      documentParam9.differentFirstPage !== void 0 &&
        documentParam10.uint32(88).bool(documentParam9.differentFirstPage),
      documentParam9.firstHeader !== void 0 &&
        documentH
          .encode(documentParam9.firstHeader, documentParam10.uint32(98).fork())
          .join(),
      documentParam9.firstFooter !== void 0 &&
        documentH
          .encode(
            documentParam9.firstFooter,
            documentParam10.uint32(106).fork(),
          )
          .join(),
      documentParam9.documentGrid !== void 0 &&
        documentS
          .encode(
            documentParam9.documentGrid,
            documentParam10.uint32(114).fork(),
          )
          .join(),
      documentParam10
    );
  },
  decode(documentParam3, documentParam4) {
    let documentValue6 =
        documentParam3 instanceof _presentationPt
          ? documentParam3
          : new _presentationPt(documentParam3),
      documentValue7 =
        documentParam4 === void 0
          ? documentValue6.len
          : documentValue6.pos + documentParam4,
      documentValue8 = documentHelper18();
    for (; documentValue6.pos < documentValue7; ) {
      let documentValue9 = documentValue6.uint32();
      switch (documentValue9 >>> 3) {
        case 1:
          if (documentValue9 !== 10) break;
          documentValue8.id = documentValue6.string();
          continue;
        case 2:
          if (documentValue9 !== 16) break;
          documentValue8.breakType = documentValue6.int32();
          continue;
        case 3:
          if (documentValue9 !== 26) break;
          documentValue8.pageSetup = documentB.decode(
            documentValue6,
            documentValue6.uint32(),
          );
          continue;
        case 4:
          if (documentValue9 !== 34) break;
          documentValue8.columns = documentR.decode(
            documentValue6,
            documentValue6.uint32(),
          );
          continue;
        case 5:
          if (documentValue9 !== 42) break;
          documentValue8.elements.push(
            presentationCn.decode(documentValue6, documentValue6.uint32()),
          );
          continue;
        case 6:
          if (documentValue9 !== 50) break;
          documentValue8.header = documentH.decode(
            documentValue6,
            documentValue6.uint32(),
          );
          continue;
        case 7:
          if (documentValue9 !== 58) break;
          documentValue8.footer = documentH.decode(
            documentValue6,
            documentValue6.uint32(),
          );
          continue;
        case 8:
          if (documentValue9 !== 64) break;
          documentValue8.startsWithPageBreak = documentValue6.bool();
          continue;
        case 9:
          if (documentValue9 !== 72) break;
          documentValue8.pageNumberStart = documentValue6.int32();
          continue;
        case 10:
          if (documentValue9 !== 82) break;
          documentValue8.pageNumberFormat = documentValue6.string();
          continue;
        case 11:
          if (documentValue9 !== 88) break;
          documentValue8.differentFirstPage = documentValue6.bool();
          continue;
        case 12:
          if (documentValue9 !== 98) break;
          documentValue8.firstHeader = documentH.decode(
            documentValue6,
            documentValue6.uint32(),
          );
          continue;
        case 13:
          if (documentValue9 !== 106) break;
          documentValue8.firstFooter = documentH.decode(
            documentValue6,
            documentValue6.uint32(),
          );
          continue;
        case 14:
          if (documentValue9 !== 114) break;
          documentValue8.documentGrid = documentS.decode(
            documentValue6,
            documentValue6.uint32(),
          );
          continue;
      }
      if ((documentValue9 & 7) == 4 || documentValue9 === 0) break;
      documentValue6.skip(documentValue9 & 7);
    }
    return documentValue8;
  },
  create(documentParam121) {
    return _documentC.fromPartial(documentParam121 ?? {});
  },
  fromPartial(documentParam8) {
    let documentValue11 = documentHelper18();
    return (
      (documentValue11.id = documentParam8.id ?? ``),
      (documentValue11.breakType = documentParam8.breakType ?? 0),
      (documentValue11.pageSetup =
        documentParam8.pageSetup !== void 0 && documentParam8.pageSetup !== null
          ? documentB.fromPartial(documentParam8.pageSetup)
          : void 0),
      (documentValue11.columns =
        documentParam8.columns !== void 0 && documentParam8.columns !== null
          ? documentR.fromPartial(documentParam8.columns)
          : void 0),
      (documentValue11.elements =
        documentParam8.elements?.map((documentParam143) =>
          presentationCn.fromPartial(documentParam143),
        ) || []),
      (documentValue11.header =
        documentParam8.header !== void 0 && documentParam8.header !== null
          ? documentH.fromPartial(documentParam8.header)
          : void 0),
      (documentValue11.footer =
        documentParam8.footer !== void 0 && documentParam8.footer !== null
          ? documentH.fromPartial(documentParam8.footer)
          : void 0),
      (documentValue11.startsWithPageBreak =
        documentParam8.startsWithPageBreak ?? !1),
      (documentValue11.pageNumberStart =
        documentParam8.pageNumberStart ?? void 0),
      (documentValue11.pageNumberFormat =
        documentParam8.pageNumberFormat ?? void 0),
      (documentValue11.differentFirstPage =
        documentParam8.differentFirstPage ?? void 0),
      (documentValue11.firstHeader =
        documentParam8.firstHeader !== void 0 &&
        documentParam8.firstHeader !== null
          ? documentH.fromPartial(documentParam8.firstHeader)
          : void 0),
      (documentValue11.firstFooter =
        documentParam8.firstFooter !== void 0 &&
        documentParam8.firstFooter !== null
          ? documentH.fromPartial(documentParam8.firstFooter)
          : void 0),
      (documentValue11.documentGrid =
        documentParam8.documentGrid !== void 0 &&
        documentParam8.documentGrid !== null
          ? documentS.fromPartial(documentParam8.documentGrid)
          : void 0),
      documentValue11
    );
  },
};
function documentHelper19() {
  return {
    id: void 0,
    elements: [],
    charts: [],
  };
}
var _documentS = {
  encode(documentParam85, documentParam86 = new presentationK()) {
    documentParam85.id !== void 0 &&
      documentParam86.uint32(10).string(documentParam85.id);
    for (let documentValue121 of documentParam85.elements)
      presentationCn
        .encode(documentValue121, documentParam86.uint32(18).fork())
        .join();
    for (let documentValue126 of documentParam85.charts)
      presentationJt
        .encode(documentValue126, documentParam86.uint32(26).fork())
        .join();
    return documentParam86;
  },
  decode(documentParam33, documentParam34) {
    let documentValue49 =
        documentParam33 instanceof _presentationPt
          ? documentParam33
          : new _presentationPt(documentParam33),
      documentValue50 =
        documentParam34 === void 0
          ? documentValue49.len
          : documentValue49.pos + documentParam34,
      documentValue51 = documentHelper19();
    for (; documentValue49.pos < documentValue50; ) {
      let documentValue74 = documentValue49.uint32();
      switch (documentValue74 >>> 3) {
        case 1:
          if (documentValue74 !== 10) break;
          documentValue51.id = documentValue49.string();
          continue;
        case 2:
          if (documentValue74 !== 18) break;
          documentValue51.elements.push(
            presentationCn.decode(documentValue49, documentValue49.uint32()),
          );
          continue;
        case 3:
          if (documentValue74 !== 26) break;
          documentValue51.charts.push(
            presentationJt.decode(documentValue49, documentValue49.uint32()),
          );
          continue;
      }
      if ((documentValue74 & 7) == 4 || documentValue74 === 0) break;
      documentValue49.skip(documentValue74 & 7);
    }
    return documentValue51;
  },
  create(documentParam122) {
    return _documentS.fromPartial(documentParam122 ?? {});
  },
  fromPartial(documentParam87) {
    let documentValue97 = documentHelper19();
    return (
      (documentValue97.id = documentParam87.id ?? void 0),
      (documentValue97.elements =
        documentParam87.elements?.map((documentParam144) =>
          presentationCn.fromPartial(documentParam144),
        ) || []),
      (documentValue97.charts =
        documentParam87.charts?.map((documentParam145) =>
          presentationJt.fromPartial(documentParam145),
        ) || []),
      documentValue97
    );
  },
};
function documentHelper20() {
  return {
    id: void 0,
    type: 0,
    version: ``,
    document: void 0,
    presentation: void 0,
    workbook: void 0,
    playground: void 0,
  };
}
var documentT = {
    encode(documentParam41, documentParam42 = new presentationK()) {
      return (
        documentParam41.id !== void 0 &&
          documentParam42.uint32(82).string(documentParam41.id),
        documentParam41.type !== 0 &&
          documentParam42.uint32(8).int32(documentParam41.type),
        documentParam41.version !== `` &&
          documentParam42.uint32(50).string(documentParam41.version),
        documentParam41.document !== void 0 &&
          documentO
            .encode(documentParam41.document, documentParam42.uint32(18).fork())
            .join(),
        documentParam41.presentation !== void 0 &&
          presentationX
            .encode(
              documentParam41.presentation,
              documentParam42.uint32(26).fork(),
            )
            .join(),
        documentParam41.workbook !== void 0 &&
          spreadsheetZt
            .encode(documentParam41.workbook, documentParam42.uint32(34).fork())
            .join(),
        documentParam41.playground !== void 0 &&
          _documentS
            .encode(
              documentParam41.playground,
              documentParam42.uint32(42).fork(),
            )
            .join(),
        documentParam42
      );
    },
    decode(documentParam11, documentParam12) {
      let documentValue12 =
          documentParam11 instanceof _presentationPt
            ? documentParam11
            : new _presentationPt(documentParam11),
        documentValue13 =
          documentParam12 === void 0
            ? documentValue12.len
            : documentValue12.pos + documentParam12,
        documentValue14 = documentHelper20();
      for (; documentValue12.pos < documentValue13; ) {
        let documentValue21 = documentValue12.uint32();
        switch (documentValue21 >>> 3) {
          case 10:
            if (documentValue21 !== 82) break;
            documentValue14.id = documentValue12.string();
            continue;
          case 1:
            if (documentValue21 !== 8) break;
            documentValue14.type = documentValue12.int32();
            continue;
          case 6:
            if (documentValue21 !== 50) break;
            documentValue14.version = documentValue12.string();
            continue;
          case 2:
            if (documentValue21 !== 18) break;
            documentValue14.document = documentO.decode(
              documentValue12,
              documentValue12.uint32(),
            );
            continue;
          case 3:
            if (documentValue21 !== 26) break;
            documentValue14.presentation = presentationX.decode(
              documentValue12,
              documentValue12.uint32(),
            );
            continue;
          case 4:
            if (documentValue21 !== 34) break;
            documentValue14.workbook = spreadsheetZt.decode(
              documentValue12,
              documentValue12.uint32(),
            );
            continue;
          case 5:
            if (documentValue21 !== 42) break;
            documentValue14.playground = _documentS.decode(
              documentValue12,
              documentValue12.uint32(),
            );
            continue;
        }
        if ((documentValue21 & 7) == 4 || documentValue21 === 0) break;
        documentValue12.skip(documentValue21 & 7);
      }
      return documentValue14;
    },
    create(documentParam103) {
      return documentT.fromPartial(documentParam103 ?? {});
    },
    fromPartial(documentParam28) {
      let documentValue40 = documentHelper20();
      return (
        (documentValue40.id = documentParam28.id ?? void 0),
        (documentValue40.type = documentParam28.type ?? 0),
        (documentValue40.version = documentParam28.version ?? ``),
        (documentValue40.document =
          documentParam28.document !== void 0 &&
          documentParam28.document !== null
            ? documentO.fromPartial(documentParam28.document)
            : void 0),
        (documentValue40.presentation =
          documentParam28.presentation !== void 0 &&
          documentParam28.presentation !== null
            ? presentationX.fromPartial(documentParam28.presentation)
            : void 0),
        (documentValue40.workbook =
          documentParam28.workbook !== void 0 &&
          documentParam28.workbook !== null
            ? spreadsheetZt.fromPartial(documentParam28.workbook)
            : void 0),
        (documentValue40.playground =
          documentParam28.playground !== void 0 &&
          documentParam28.playground !== null
            ? _documentS.fromPartial(documentParam28.playground)
            : void 0),
        documentValue40
      );
    },
  },
  documentValue1 = (() => {
    if (typeof globalThis < `u`) return globalThis;
    if (typeof self < `u`) return self;
    if (typeof window < `u`) return window;
    if (typeof global < `u`) return global;
    throw `Unable to locate global object`;
  })();
function $(documentParam73) {
  let documentValue90 = documentValue1.Number(documentParam73.toString());
  if (documentValue90 > documentValue1.Number.MAX_SAFE_INTEGER)
    throw new documentValue1.Error(
      `Value is larger than Number.MAX_SAFE_INTEGER`,
    );
  if (documentValue90 < documentValue1.Number.MIN_SAFE_INTEGER)
    throw new documentValue1.Error(
      `Value is smaller than Number.MIN_SAFE_INTEGER`,
    );
  return documentValue90;
}
export {
  _documentS,
  documentUnderscore,
  documentA,
  documentB,
  _documentC,
  documentF,
  documentG,
  documentH,
  documentI,
  documentL,
  documentM,
  documentO,
  documentP,
  documentR,
  documentS,
  documentT,
  documentU,
  documentV,
  documentX,
  documentY,
};
