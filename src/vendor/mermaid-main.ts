// Restored from ref/webview/assets/main-BDm-p1LA.js
// Flat boundary. Vendored main chunk restored from the Codex webview bundle.
import {
  once,
  exportGetters,
  createCommonJsModule,
} from "../runtime/commonjs-interop";
import { reduceE, reduceUnderscore, reduceR } from "./lodash-reduce";
import { flattenA } from "./lodash-flatten";
export function mainD(mainParam388, mainParam389) {
  return reduceR(flattenA(mainParam388, mainParam389), 1);
}
export function mainU(mainParam332, mainParam333) {
  return mainParam332 && mainParam332.length
    ? reduceE(mainParam332, reduceUnderscore(mainParam333, 2))
    : [];
}
var mainValue1,
  mainValue2,
  mainValue3,
  mainValue4,
  mainO,
  mainS,
  mainValue5,
  mainValue6,
  mainValue7,
  mainValue8,
  mainValue9,
  mainValue10,
  mainValue11,
  mainValue12,
  mainValue13,
  mainValue14,
  mainValue15,
  mainValue16,
  mainValue17,
  mainValue18,
  mainValue19,
  mainValue20,
  mainValue21,
  mainValue22,
  mainValue23,
  mainValue24,
  mainValue25,
  mainValue26,
  mainValue27,
  mainValue28,
  mainValue29,
  mainValue30,
  mainValue31,
  mainValue32,
  mainValue33,
  mainValue34,
  mainValue35,
  mainValue36,
  mainValue37,
  mainValue38,
  mainValue39,
  mainValue40,
  mainValue41,
  mainValue42,
  mainValue43,
  mainValue44,
  mainValue45,
  mainValue46,
  mainValue47,
  mainValue48,
  mainValue49,
  mainValue50,
  mainValue51,
  mainValue52,
  _e,
  mainValue53,
  mainValue54,
  mainValue55,
  be,
  mainValue56,
  mainValue57,
  mainValue58,
  mainValue59,
  mainValue60,
  mainValue61,
  mainValue62,
  mainValue63,
  mainValue64,
  mainValue65,
  mainValue66,
  mainValue67,
  mainValue68,
  mainValue69,
  mainValue70,
  mainValue71,
  mainValue72,
  mainValue73,
  mainValue74,
  mainValue75,
  mainValue76,
  mainValue77,
  mainValue78,
  mainValue79,
  mainValue80,
  mainValue81,
  mainA = createCommonJsModule((mainParam53) => {
    Object.defineProperty(mainParam53, "__esModule", {
      value: true,
    });
    var mainValue127;
    function mainHelper55() {
      if (mainValue127 === undefined)
        throw Error("No runtime abstraction layer installed");
      return mainValue127;
    }
    (function (mainParam194) {
      function mainHelper116(mainParam235) {
        if (mainParam235 === undefined)
          throw Error("No runtime abstraction layer provided");
        mainValue127 = mainParam235;
      }
      mainParam194.install = mainHelper116;
    })((mainHelper55 ||= {}));
    mainParam53.default = mainHelper55;
  }),
  mainI = createCommonJsModule((mainParam10) => {
    Object.defineProperty(mainParam10, "__esModule", {
      value: true,
    });
    mainParam10.stringArray =
      mainParam10.array =
      mainParam10.func =
      mainParam10.error =
      mainParam10.number =
      mainParam10.string =
      mainParam10.boolean =
        undefined;
    function mainHelper22(mainParam387) {
      return mainParam387 === true || mainParam387 === false;
    }
    mainParam10.boolean = mainHelper22;
    function mainHelper23(mainParam297) {
      return typeof mainParam297 == "string" || mainParam297 instanceof String;
    }
    mainParam10.string = mainHelper23;
    function mainHelper24(mainParam298) {
      return typeof mainParam298 == "number" || mainParam298 instanceof Number;
    }
    mainParam10.number = mainHelper24;
    function mainHelper25(mainParam374) {
      return mainParam374 instanceof Error;
    }
    mainParam10.error = mainHelper25;
    function mainHelper26(mainParam360) {
      return typeof mainParam360 == "function";
    }
    mainParam10.func = mainHelper26;
    function mainHelper27(mainParam384) {
      return Array.isArray(mainParam384);
    }
    mainParam10.array = mainHelper27;
    function _mainD(mainParam347) {
      return (
        mainHelper27(mainParam347) &&
        mainParam347.every((item) => mainHelper23(item))
      );
    }
    mainParam10.stringArray = _mainD;
  }),
  mainR = createCommonJsModule((mainParam1) => {
    Object.defineProperty(mainParam1, "__esModule", {
      value: true,
    });
    mainParam1.Emitter = mainParam1.Event = undefined;
    var mainValue83 = mainA(),
      mainValue84;
    (function (mainParam300) {
      let mainValue252 = {
        dispose() {},
      };
      mainParam300.None = function () {
        return mainValue252;
      };
    })(mainValue84 || (mainParam1.Event = mainValue84 = {}));
    var mainValue85 = class {
        add(mainParam118, mainParam119 = null, mainParam120) {
          this._callbacks || ((this._callbacks = []), (this._contexts = []));
          this._callbacks.push(mainParam118);
          this._contexts.push(mainParam119);
          Array.isArray(mainParam120) &&
            mainParam120.push({
              dispose: () => this.remove(mainParam118, mainParam119),
            });
        }
        remove(mainParam44, mainParam45 = null) {
          if (!this._callbacks) return;
          let mainValue122 = false;
          for (
            let mainValue181 = 0, mainValue182 = this._callbacks.length;
            mainValue181 < mainValue182;
            mainValue181++
          )
            if (this._callbacks[mainValue181] === mainParam44)
              if (this._contexts[mainValue181] === mainParam45) {
                this._callbacks.splice(mainValue181, 1);
                this._contexts.splice(mainValue181, 1);
                return;
              } else mainValue122 = true;
          if (mainValue122)
            throw Error(
              "When adding a listener with a context, you should remove it with the same context",
            );
        }
        invoke(...mainParam85) {
          if (!this._callbacks) return [];
          let mainValue163 = [],
            mainValue164 = this._callbacks.slice(0),
            mainValue165 = this._contexts.slice(0);
          for (
            let mainValue211 = 0, mainValue212 = mainValue164.length;
            mainValue211 < mainValue212;
            mainValue211++
          )
            try {
              mainValue163.push(
                mainValue164[mainValue211].apply(
                  mainValue165[mainValue211],
                  mainParam85,
                ),
              );
            } catch (mainValue261) {
              mainValue83.default().console.error(mainValue261);
            }
          return mainValue163;
        }
        isEmpty() {
          return !this._callbacks || this._callbacks.length === 0;
        }
        dispose() {
          this._callbacks = undefined;
          this._contexts = undefined;
        }
      },
      mainValue86 = class MainClass2 {
        constructor(mainParam393) {
          this._options = mainParam393;
        }
        get event() {
          return (
            (this._event ||= (mainParam20, mainParam21, mainParam22) => {
              this._callbacks ||= new mainValue85();
              this._options &&
                this._options.onFirstListenerAdd &&
                this._callbacks.isEmpty() &&
                this._options.onFirstListenerAdd(this);
              this._callbacks.add(mainParam20, mainParam21);
              let mainValue101 = {
                dispose: () => {
                  this._callbacks &&
                    (this._callbacks.remove(mainParam20, mainParam21),
                    (mainValue101.dispose = MainClass2._noop),
                    this._options &&
                      this._options.onLastListenerRemove &&
                      this._callbacks.isEmpty() &&
                      this._options.onLastListenerRemove(this));
                },
              };
              return (
                Array.isArray(mainParam22) && mainParam22.push(mainValue101),
                mainValue101
              );
            }),
            this._event
          );
        }
        fire(mainParam268) {
          this._callbacks &&
            this._callbacks.invoke.call(this._callbacks, mainParam268);
        }
        dispose() {
          this._callbacks &&= (this._callbacks.dispose(), undefined);
        }
      };
    mainParam1.Emitter = mainValue86;
    mainValue86._noop = function () {};
  }),
  mainValue82 = class MainClass1 {
    constructor(mainParam195, mainParam196, mainParam197, mainParam198) {
      this._uri = mainParam195;
      this._languageId = mainParam196;
      this._version = mainParam197;
      this._content = mainParam198;
      this._lineOffsets = undefined;
    }
    get uri() {
      return this._uri;
    }
    get languageId() {
      return this._languageId;
    }
    get version() {
      return this._version;
    }
    getText(mainParam161) {
      if (mainParam161) {
        let mainValue230 = this.offsetAt(mainParam161.start),
          mainValue231 = this.offsetAt(mainParam161.end);
        return this._content.substring(mainValue230, mainValue231);
      }
      return this._content;
    }
    update(mainParam5, mainParam6) {
      for (let mainValue94 of mainParam5)
        if (MainClass1.isIncremental(mainValue94)) {
          let mainValue95 = mainHelper3(mainValue94.range),
            mainValue96 = this.offsetAt(mainValue95.start),
            mainValue97 = this.offsetAt(mainValue95.end);
          this._content =
            this._content.substring(0, mainValue96) +
            mainValue94.text +
            this._content.substring(mainValue97, this._content.length);
          let mainValue98 = Math.max(mainValue95.start.line, 0),
            mainValue99 = Math.max(mainValue95.end.line, 0),
            mainValue100 = this._lineOffsets,
            _mainD = mainHelper1(mainValue94.text, false, mainValue96);
          if (mainValue99 - mainValue98 === _mainD.length)
            for (
              let mainValue257 = 0, mainValue258 = _mainD.length;
              mainValue257 < mainValue258;
              mainValue257++
            )
              mainValue100[mainValue257 + mainValue98 + 1] =
                _mainD[mainValue257];
          else
            _mainD.length < 1e4
              ? mainValue100.splice(
                  mainValue98 + 1,
                  mainValue99 - mainValue98,
                  ..._mainD,
                )
              : (this._lineOffsets = mainValue100 =
                  mainValue100
                    .slice(0, mainValue98 + 1)
                    .concat(_mainD, mainValue100.slice(mainValue99 + 1)));
          let _mainU = mainValue94.text.length - (mainValue97 - mainValue96);
          if (_mainU !== 0)
            for (
              let mainValue255 = mainValue98 + 1 + _mainD.length,
                mainValue256 = mainValue100.length;
              mainValue255 < mainValue256;
              mainValue255++
            )
              mainValue100[mainValue255] = mainValue100[mainValue255] + _mainU;
        } else if (MainClass1.isFull(mainValue94)) {
          this._content = mainValue94.text;
          this._lineOffsets = undefined;
        } else throw Error("Unknown change event received");
      this._version = mainParam6;
    }
    getLineOffsets() {
      return (
        this._lineOffsets === undefined &&
          (this._lineOffsets = mainHelper1(this._content, true)),
        this._lineOffsets
      );
    }
    positionAt(mainParam59) {
      mainParam59 = Math.max(Math.min(mainParam59, this._content.length), 0);
      let mainValue133 = this.getLineOffsets(),
        mainValue134 = 0,
        mainValue135 = mainValue133.length;
      if (mainValue135 === 0)
        return {
          line: 0,
          character: mainParam59,
        };
      for (; mainValue134 < mainValue135; ) {
        let mainValue260 = Math.floor((mainValue134 + mainValue135) / 2);
        mainValue133[mainValue260] > mainParam59
          ? (mainValue135 = mainValue260)
          : (mainValue134 = mainValue260 + 1);
      }
      let mainValue136 = mainValue134 - 1;
      return (
        (mainParam59 = this.ensureBeforeEOL(
          mainParam59,
          mainValue133[mainValue136],
        )),
        {
          line: mainValue136,
          character: mainParam59 - mainValue133[mainValue136],
        }
      );
    }
    offsetAt(mainParam58) {
      let mainValue129 = this.getLineOffsets();
      if (mainParam58.line >= mainValue129.length) return this._content.length;
      if (mainParam58.line < 0) return 0;
      let mainValue130 = mainValue129[mainParam58.line];
      if (mainParam58.character <= 0) return mainValue130;
      let mainValue131 =
          mainParam58.line + 1 < mainValue129.length
            ? mainValue129[mainParam58.line + 1]
            : this._content.length,
        mainValue132 = Math.min(
          mainValue130 + mainParam58.character,
          mainValue131,
        );
      return this.ensureBeforeEOL(mainValue132, mainValue130);
    }
    ensureBeforeEOL(mainParam246, mainParam247) {
      for (
        ;
        mainParam246 > mainParam247 &&
        mainHelper2(this._content.charCodeAt(mainParam246 - 1));

      )
        mainParam246--;
      return mainParam246;
    }
    get lineCount() {
      return this.getLineOffsets().length;
    }
    static isIncremental(mainParam144) {
      let mainValue191 = mainParam144;
      return (
        mainValue191 != null &&
        typeof mainValue191.text == "string" &&
        mainValue191.range !== undefined &&
        (mainValue191.rangeLength === undefined ||
          typeof mainValue191.rangeLength == "number")
      );
    }
    static isFull(mainParam199) {
      let mainValue210 = mainParam199;
      return (
        mainValue210 != null &&
        typeof mainValue210.text == "string" &&
        mainValue210.range === undefined &&
        mainValue210.rangeLength === undefined
      );
    }
  },
  mainT;
export const mainN = createCommonJsModule((mainParam2) => {
  Object.defineProperty(mainParam2, "__esModule", {
    value: true,
  });
  mainParam2.CancellationTokenSource = mainParam2.CancellationToken = undefined;
  var mainValue87 = mainA(),
    mainValue88 = mainI(),
    mainValue89 = mainR(),
    mainValue90;
  (function (mainParam42) {
    mainParam42.None = Object.freeze({
      isCancellationRequested: false,
      onCancellationRequested: mainValue89.Event.None,
    });
    mainParam42.Cancelled = Object.freeze({
      isCancellationRequested: true,
      onCancellationRequested: mainValue89.Event.None,
    });
    function mainHelper46(mainParam157) {
      let mainValue198 = mainParam157;
      return (
        mainValue198 &&
        (mainValue198 === mainParam42.None ||
          mainValue198 === mainParam42.Cancelled ||
          (mainValue88.boolean(mainValue198.isCancellationRequested) &&
            !!mainValue198.onCancellationRequested))
      );
    }
    mainParam42.is = mainHelper46;
  })(mainValue90 || (mainParam2.CancellationToken = mainValue90 = {}));
  var mainValue91 = Object.freeze(function (mainParam221, mainParam222) {
      let mainValue222 = mainValue87
        .default()
        .timer.setTimeout(mainParam221.bind(mainParam222), 0);
      return {
        dispose() {
          mainValue222.dispose();
        },
      };
    }),
    mainValue92 = class {
      constructor() {
        this._isCancelled = false;
      }
      cancel() {
        this._isCancelled ||
          ((this._isCancelled = true),
          this._emitter && (this._emitter.fire(undefined), this.dispose()));
      }
      get isCancellationRequested() {
        return this._isCancelled;
      }
      get onCancellationRequested() {
        return this._isCancelled
          ? mainValue91
          : ((this._emitter ||= new mainValue89.Emitter()),
            this._emitter.event);
      }
      dispose() {
        this._emitter &&= (this._emitter.dispose(), undefined);
      }
    };
  mainParam2.CancellationTokenSource = class {
    get token() {
      return ((this._token ||= new mainValue92()), this._token);
    }
    cancel() {
      this._token
        ? this._token.cancel()
        : (this._token = mainValue90.Cancelled);
    }
    dispose() {
      this._token
        ? this._token instanceof mainValue92 && this._token.dispose()
        : (this._token = mainValue90.None);
    }
  };
});
export const mainL = exportGetters({
  AnnotatedTextEdit: () => mainValue21,
  ChangeAnnotation: () => mainValue19,
  ChangeAnnotationIdentifier: () => mainValue20,
  CodeAction: () => mainValue56,
  CodeActionContext: () => be,
  CodeActionKind: () => mainValue54,
  CodeActionTriggerKind: () => mainValue55,
  CodeDescription: () => mainValue15,
  CodeLens: () => mainValue57,
  Color: () => mainValue7,
  ColorInformation: () => mainValue8,
  ColorPresentation: () => mainValue9,
  Command: () => mainValue17,
  CompletionItem: () => mainValue42,
  CompletionItemKind: () => mainValue36,
  CompletionItemLabelDetails: () => mainValue41,
  CompletionItemTag: () => mainValue38,
  CompletionList: () => mainValue43,
  CreateFile: () => mainValue23,
  DeleteFile: () => mainValue25,
  Diagnostic: () => mainValue16,
  DiagnosticRelatedInformation: () => mainValue12,
  DiagnosticSeverity: () => mainValue13,
  DiagnosticTag: () => mainValue14,
  DocumentHighlight: () => mainValue49,
  DocumentHighlightKind: () => mainValue48,
  DocumentLink: () => mainValue59,
  DocumentSymbol: () => mainValue53,
  DocumentUri: () => mainValue1,
  EOL: () => mainValue78,
  FoldingRange: () => mainValue11,
  FoldingRangeKind: () => mainValue10,
  FormattingOptions: () => mainValue58,
  Hover: () => mainValue45,
  InlayHint: () => mainValue70,
  InlayHintKind: () => mainValue68,
  InlayHintLabelPart: () => mainValue69,
  InlineCompletionContext: () => mainValue76,
  InlineCompletionItem: () => mainValue72,
  InlineCompletionList: () => mainValue73,
  InlineCompletionTriggerKind: () => mainValue74,
  InlineValueContext: () => mainValue67,
  InlineValueEvaluatableExpression: () => mainValue66,
  InlineValueText: () => mainValue64,
  InlineValueVariableLookup: () => mainValue65,
  InsertReplaceEdit: () => mainValue39,
  InsertTextFormat: () => mainValue37,
  InsertTextMode: () => mainValue40,
  Location: () => mainValue5,
  LocationLink: () => mainValue6,
  MarkedString: () => mainValue44,
  MarkupContent: () => mainValue35,
  MarkupKind: () => mainValue34,
  OptionalVersionedTextDocumentIdentifier: () => mainValue32,
  ParameterInformation: () => mainValue46,
  Position: () => mainO,
  Range: () => mainS,
  RenameFile: () => mainValue24,
  SelectedCompletionInfo: () => mainValue75,
  SelectionRange: () => mainValue60,
  SemanticTokenModifiers: () => mainValue62,
  SemanticTokenTypes: () => mainValue61,
  SemanticTokens: () => mainValue63,
  SignatureInformation: () => mainValue47,
  StringValue: () => mainValue71,
  SymbolInformation: () => mainValue52,
  SymbolKind: () => mainValue50,
  SymbolTag: () => mainValue51,
  TextDocument: () => mainValue79,
  TextDocumentEdit: () => mainValue22,
  TextDocumentIdentifier: () => mainValue30,
  TextDocumentItem: () => mainValue33,
  TextEdit: () => mainValue18,
  URI: () => mainValue2,
  VersionedTextDocumentIdentifier: () => mainValue31,
  WorkspaceChange: () => mainValue29,
  WorkspaceEdit: () => mainValue26,
  WorkspaceFolder: () => mainValue77,
  WorkspaceSymbol: () => _e,
  integer: () => mainValue3,
  uinteger: () => mainValue4,
});
export const mainC = once(() => {
  (function (mainParam301) {
    function mainHelper129(mainParam365) {
      return typeof mainParam365 == "string";
    }
    mainParam301.is = mainHelper129;
  })((mainValue1 ||= {}));
  (function (mainParam302) {
    function mainHelper130(mainParam366) {
      return typeof mainParam366 == "string";
    }
    mainParam302.is = mainHelper130;
  })((mainValue2 ||= {}));
  (function (mainParam152) {
    mainParam152.MIN_VALUE = -2147483648;
    mainParam152.MAX_VALUE = 2147483647;
    function mainHelper109(mainParam262) {
      return (
        typeof mainParam262 == "number" &&
        mainParam152.MIN_VALUE <= mainParam262 &&
        mainParam262 <= mainParam152.MAX_VALUE
      );
    }
    mainParam152.is = mainHelper109;
  })((mainValue3 ||= {}));
  (function (mainParam158) {
    mainParam158.MIN_VALUE = 0;
    mainParam158.MAX_VALUE = 2147483647;
    function mainHelper111(mainParam263) {
      return (
        typeof mainParam263 == "number" &&
        mainParam158.MIN_VALUE <= mainParam263 &&
        mainParam263 <= mainParam158.MAX_VALUE
      );
    }
    mainParam158.is = mainHelper111;
  })((mainValue4 ||= {}));
  (function (mainParam72) {
    function mainHelper66(mainParam169, mainParam170) {
      return (
        mainParam169 === Number.MAX_VALUE &&
          (mainParam169 = mainValue4.MAX_VALUE),
        mainParam170 === Number.MAX_VALUE &&
          (mainParam170 = mainValue4.MAX_VALUE),
        {
          line: mainParam169,
          character: mainParam170,
        }
      );
    }
    mainParam72.create = mainHelper66;
    function mainHelper67(mainParam228) {
      let mainValue225 = mainParam228;
      return (
        mainValue81.objectLiteral(mainValue225) &&
        mainValue81.uinteger(mainValue225.line) &&
        mainValue81.uinteger(mainValue225.character)
      );
    }
    mainParam72.is = mainHelper67;
  })((mainO ||= {}));
  (function (mainParam39) {
    function mainHelper42(mainParam66, mainParam67, mainParam68, mainParam69) {
      if (
        mainValue81.uinteger(mainParam66) &&
        mainValue81.uinteger(mainParam67) &&
        mainValue81.uinteger(mainParam68) &&
        mainValue81.uinteger(mainParam69)
      )
        return {
          start: mainO.create(mainParam66, mainParam67),
          end: mainO.create(mainParam68, mainParam69),
        };
      if (mainO.is(mainParam66) && mainO.is(mainParam67))
        return {
          start: mainParam66,
          end: mainParam67,
        };
      throw Error(
        `Range#create called with invalid arguments[${mainParam66}, ${mainParam67}, ${mainParam68}, ${mainParam69}]`,
      );
    }
    mainParam39.create = mainHelper42;
    function mainHelper43(mainParam252) {
      let mainValue245 = mainParam252;
      return (
        mainValue81.objectLiteral(mainValue245) &&
        mainO.is(mainValue245.start) &&
        mainO.is(mainValue245.end)
      );
    }
    mainParam39.is = mainHelper43;
  })((mainS ||= {}));
  (function (mainParam126) {
    function mainHelper91(mainParam379, mainParam380) {
      return {
        uri: mainParam379,
        range: mainParam380,
      };
    }
    mainParam126.create = mainHelper91;
    function mainHelper92(mainParam200) {
      let mainValue213 = mainParam200;
      return (
        mainValue81.objectLiteral(mainValue213) &&
        mainS.is(mainValue213.range) &&
        (mainValue81.string(mainValue213.uri) ||
          mainValue81.undefined(mainValue213.uri))
      );
    }
    mainParam126.is = mainHelper92;
  })((mainValue5 ||= {}));
  (function (mainParam47) {
    function mainHelper51(
      mainParam210,
      mainParam211,
      mainParam212,
      mainParam213,
    ) {
      return {
        targetUri: mainParam210,
        targetRange: mainParam211,
        targetSelectionRange: mainParam212,
        originSelectionRange: mainParam213,
      };
    }
    mainParam47.create = mainHelper51;
    function mainHelper52(mainParam94) {
      let mainValue171 = mainParam94;
      return (
        mainValue81.objectLiteral(mainValue171) &&
        mainS.is(mainValue171.targetRange) &&
        mainValue81.string(mainValue171.targetUri) &&
        mainS.is(mainValue171.targetSelectionRange) &&
        (mainS.is(mainValue171.originSelectionRange) ||
          mainValue81.undefined(mainValue171.originSelectionRange))
      );
    }
    mainParam47.is = mainHelper52;
  })((mainValue6 ||= {}));
  (function (mainParam71) {
    function mainHelper64(
      mainParam310,
      mainParam311,
      mainParam312,
      mainParam313,
    ) {
      return {
        red: mainParam310,
        green: mainParam311,
        blue: mainParam312,
        alpha: mainParam313,
      };
    }
    mainParam71.create = mainHelper64;
    function mainHelper65(mainParam138) {
      let mainValue189 = mainParam138;
      return (
        mainValue81.objectLiteral(mainValue189) &&
        mainValue81.numberRange(mainValue189.red, 0, 1) &&
        mainValue81.numberRange(mainValue189.green, 0, 1) &&
        mainValue81.numberRange(mainValue189.blue, 0, 1) &&
        mainValue81.numberRange(mainValue189.alpha, 0, 1)
      );
    }
    mainParam71.is = mainHelper65;
  })((mainValue7 ||= {}));
  (function (mainParam143) {
    function mainHelper103(mainParam367, mainParam368) {
      return {
        range: mainParam367,
        color: mainParam368,
      };
    }
    mainParam143.create = mainHelper103;
    function mainHelper104(mainParam248) {
      let mainValue243 = mainParam248;
      return (
        mainValue81.objectLiteral(mainValue243) &&
        mainS.is(mainValue243.range) &&
        mainValue7.is(mainValue243.color)
      );
    }
    mainParam143.is = mainHelper104;
  })((mainValue8 ||= {}));
  (function (mainParam54) {
    function mainHelper56(mainParam274, mainParam275, mainParam276) {
      return {
        label: mainParam274,
        textEdit: mainParam275,
        additionalTextEdits: mainParam276,
      };
    }
    mainParam54.create = mainHelper56;
    function mainHelper57(mainParam104) {
      let mainValue175 = mainParam104;
      return (
        mainValue81.objectLiteral(mainValue175) &&
        mainValue81.string(mainValue175.label) &&
        (mainValue81.undefined(mainValue175.textEdit) ||
          mainValue18.is(mainValue175)) &&
        (mainValue81.undefined(mainValue175.additionalTextEdits) ||
          mainValue81.typedArray(
            mainValue175.additionalTextEdits,
            mainValue18.is,
          ))
      );
    }
    mainParam54.is = mainHelper57;
  })((mainValue9 ||= {}));
  (function (mainParam272) {
    mainParam272.Comment = "comment";
    mainParam272.Imports = "imports";
    mainParam272.Region = "region";
  })((mainValue10 ||= {}));
  (function (mainParam13) {
    function mainHelper30(
      mainParam97,
      mainParam98,
      mainParam99,
      mainParam100,
      mainParam101,
      mainParam102,
    ) {
      let mainValue173 = {
        startLine: mainParam97,
        endLine: mainParam98,
      };
      return (
        mainValue81.defined(mainParam99) &&
          (mainValue173.startCharacter = mainParam99),
        mainValue81.defined(mainParam100) &&
          (mainValue173.endCharacter = mainParam100),
        mainValue81.defined(mainParam101) && (mainValue173.kind = mainParam101),
        mainValue81.defined(mainParam102) &&
          (mainValue173.collapsedText = mainParam102),
        mainValue173
      );
    }
    mainParam13.create = mainHelper30;
    function mainHelper31(mainParam61) {
      let mainValue138 = mainParam61;
      return (
        mainValue81.objectLiteral(mainValue138) &&
        mainValue81.uinteger(mainValue138.startLine) &&
        mainValue81.uinteger(mainValue138.startLine) &&
        (mainValue81.undefined(mainValue138.startCharacter) ||
          mainValue81.uinteger(mainValue138.startCharacter)) &&
        (mainValue81.undefined(mainValue138.endCharacter) ||
          mainValue81.uinteger(mainValue138.endCharacter)) &&
        (mainValue81.undefined(mainValue138.kind) ||
          mainValue81.string(mainValue138.kind))
      );
    }
    mainParam13.is = mainHelper31;
  })((mainValue11 ||= {}));
  (function (mainParam139) {
    function mainHelper97(mainParam341, mainParam342) {
      return {
        location: mainParam341,
        message: mainParam342,
      };
    }
    mainParam139.create = mainHelper97;
    function mainHelper98(mainParam242) {
      let mainValue238 = mainParam242;
      return (
        mainValue81.defined(mainValue238) &&
        mainValue5.is(mainValue238.location) &&
        mainValue81.string(mainValue238.message)
      );
    }
    mainParam139.is = mainHelper98;
  })((mainValue12 ||= {}));
  (function (mainParam303) {
    mainParam303.Error = 1;
    mainParam303.Warning = 2;
    mainParam303.Information = 3;
    mainParam303.Hint = 4;
  })((mainValue13 ||= {}));
  (function (mainParam348) {
    mainParam348.Unnecessary = 1;
    mainParam348.Deprecated = 2;
  })((mainValue14 ||= {}));
  (function (mainParam233) {
    function mainHelper122(mainParam281) {
      let mainValue248 = mainParam281;
      return (
        mainValue81.objectLiteral(mainValue248) &&
        mainValue81.string(mainValue248.href)
      );
    }
    mainParam233.is = mainHelper122;
  })((mainValue15 ||= {}));
  (function (mainParam9) {
    function mainHelper20(
      mainParam107,
      mainParam108,
      mainParam109,
      mainParam110,
      mainParam111,
      mainParam112,
    ) {
      let mainValue177 = {
        range: mainParam107,
        message: mainParam108,
      };
      return (
        mainValue81.defined(mainParam109) &&
          (mainValue177.severity = mainParam109),
        mainValue81.defined(mainParam110) && (mainValue177.code = mainParam110),
        mainValue81.defined(mainParam111) &&
          (mainValue177.source = mainParam111),
        mainValue81.defined(mainParam112) &&
          (mainValue177.relatedInformation = mainParam112),
        mainValue177
      );
    }
    mainParam9.create = mainHelper20;
    function mainHelper21(mainParam25) {
      let mainValue106 = mainParam25;
      return (
        mainValue81.defined(mainValue106) &&
        mainS.is(mainValue106.range) &&
        mainValue81.string(mainValue106.message) &&
        (mainValue81.number(mainValue106.severity) ||
          mainValue81.undefined(mainValue106.severity)) &&
        (mainValue81.integer(mainValue106.code) ||
          mainValue81.string(mainValue106.code) ||
          mainValue81.undefined(mainValue106.code)) &&
        (mainValue81.undefined(mainValue106.codeDescription) ||
          mainValue81.string(mainValue106.codeDescription?.href)) &&
        (mainValue81.string(mainValue106.source) ||
          mainValue81.undefined(mainValue106.source)) &&
        (mainValue81.undefined(mainValue106.relatedInformation) ||
          mainValue81.typedArray(
            mainValue106.relatedInformation,
            mainValue12.is,
          ))
      );
    }
    mainParam9.is = mainHelper21;
  })((mainValue16 ||= {}));
  (function (mainParam88) {
    function mainHelper72(mainParam217, mainParam218, ...mainParam219) {
      let mainValue221 = {
        title: mainParam217,
        command: mainParam218,
      };
      return (
        mainValue81.defined(mainParam219) &&
          mainParam219.length > 0 &&
          (mainValue221.arguments = mainParam219),
        mainValue221
      );
    }
    mainParam88.create = mainHelper72;
    function mainHelper73(mainParam239) {
      let mainValue236 = mainParam239;
      return (
        mainValue81.defined(mainValue236) &&
        mainValue81.string(mainValue236.title) &&
        mainValue81.string(mainValue236.command)
      );
    }
    mainParam88.is = mainHelper73;
  })((mainValue17 ||= {}));
  (function (mainParam57) {
    function mainHelper58(mainParam358, mainParam359) {
      return {
        range: mainParam358,
        newText: mainParam359,
      };
    }
    mainParam57.replace = mainHelper58;
    function mainHelper59(mainParam314, mainParam315) {
      return {
        range: {
          start: mainParam314,
          end: mainParam314,
        },
        newText: mainParam315,
      };
    }
    mainParam57.insert = mainHelper59;
    function mainHelper60(mainParam361) {
      return {
        range: mainParam361,
        newText: "",
      };
    }
    mainParam57.del = mainHelper60;
    function mainHelper61(mainParam236) {
      let mainValue234 = mainParam236;
      return (
        mainValue81.objectLiteral(mainValue234) &&
        mainValue81.string(mainValue234.newText) &&
        mainS.is(mainValue234.range)
      );
    }
    mainParam57.is = mainHelper61;
  })((mainValue18 ||= {}));
  (function (mainParam48) {
    function mainHelper53(mainParam187, mainParam188, mainParam189) {
      let mainValue208 = {
        label: mainParam187,
      };
      return (
        mainParam188 !== undefined &&
          (mainValue208.needsConfirmation = mainParam188),
        mainParam189 !== undefined && (mainValue208.description = mainParam189),
        mainValue208
      );
    }
    mainParam48.create = mainHelper53;
    function mainHelper54(mainParam105) {
      let mainValue176 = mainParam105;
      return (
        mainValue81.objectLiteral(mainValue176) &&
        mainValue81.string(mainValue176.label) &&
        (mainValue81.boolean(mainValue176.needsConfirmation) ||
          mainValue176.needsConfirmation === undefined) &&
        (mainValue81.string(mainValue176.description) ||
          mainValue176.description === undefined)
      );
    }
    mainParam48.is = mainHelper54;
  })((mainValue19 ||= {}));
  (function (mainParam299) {
    function mainHelper128(mainParam362) {
      let mainValue262 = mainParam362;
      return mainValue81.string(mainValue262);
    }
    mainParam299.is = mainHelper128;
  })((mainValue20 ||= {}));
  (function (mainParam46) {
    function mainHelper47(mainParam304, mainParam305, mainParam306) {
      return {
        range: mainParam304,
        newText: mainParam305,
        annotationId: mainParam306,
      };
    }
    mainParam46.replace = mainHelper47;
    function mainHelper48(mainParam258, mainParam259, mainParam260) {
      return {
        range: {
          start: mainParam258,
          end: mainParam258,
        },
        newText: mainParam259,
        annotationId: mainParam260,
      };
    }
    mainParam46.insert = mainHelper48;
    function mainHelper49(mainParam308, mainParam309) {
      return {
        range: mainParam308,
        newText: "",
        annotationId: mainParam309,
      };
    }
    mainParam46.del = mainHelper49;
    function mainHelper50(mainParam238) {
      let mainValue235 = mainParam238;
      return (
        mainValue18.is(mainValue235) &&
        (mainValue19.is(mainValue235.annotationId) ||
          mainValue20.is(mainValue235.annotationId))
      );
    }
    mainParam46.is = mainHelper50;
  })((mainValue21 ||= {}));
  (function (mainParam134) {
    function mainHelper95(mainParam339, mainParam340) {
      return {
        textDocument: mainParam339,
        edits: mainParam340,
      };
    }
    mainParam134.create = mainHelper95;
    function mainHelper96(mainParam230) {
      let mainValue232 = mainParam230;
      return (
        mainValue81.defined(mainValue232) &&
        mainValue32.is(mainValue232.textDocument) &&
        Array.isArray(mainValue232.edits)
      );
    }
    mainParam134.is = mainHelper96;
  })((mainValue22 ||= {}));
  (function (mainParam18) {
    function mainHelper38(mainParam135, mainParam136, mainParam137) {
      let mainValue188 = {
        kind: "create",
        uri: mainParam135,
      };
      return (
        mainParam136 !== undefined &&
          (mainParam136.overwrite !== undefined ||
            mainParam136.ignoreIfExists !== undefined) &&
          (mainValue188.options = mainParam136),
        mainParam137 !== undefined &&
          (mainValue188.annotationId = mainParam137),
        mainValue188
      );
    }
    mainParam18.create = mainHelper38;
    function mainHelper39(mainParam55) {
      let mainValue128 = mainParam55;
      return (
        mainValue128 &&
        mainValue128.kind === "create" &&
        mainValue81.string(mainValue128.uri) &&
        (mainValue128.options === undefined ||
          ((mainValue128.options.overwrite === undefined ||
            mainValue81.boolean(mainValue128.options.overwrite)) &&
            (mainValue128.options.ignoreIfExists === undefined ||
              mainValue81.boolean(mainValue128.options.ignoreIfExists)))) &&
        (mainValue128.annotationId === undefined ||
          mainValue20.is(mainValue128.annotationId))
      );
    }
    mainParam18.is = mainHelper39;
  })((mainValue23 ||= {}));
  (function (mainParam11) {
    function mainHelper28(
      mainParam113,
      mainParam114,
      mainParam115,
      mainParam116,
    ) {
      let mainValue179 = {
        kind: "rename",
        oldUri: mainParam113,
        newUri: mainParam114,
      };
      return (
        mainParam115 !== undefined &&
          (mainParam115.overwrite !== undefined ||
            mainParam115.ignoreIfExists !== undefined) &&
          (mainValue179.options = mainParam115),
        mainParam116 !== undefined &&
          (mainValue179.annotationId = mainParam116),
        mainValue179
      );
    }
    mainParam11.create = mainHelper28;
    function mainHelper29(mainParam50) {
      let mainValue124 = mainParam50;
      return (
        mainValue124 &&
        mainValue124.kind === "rename" &&
        mainValue81.string(mainValue124.oldUri) &&
        mainValue81.string(mainValue124.newUri) &&
        (mainValue124.options === undefined ||
          ((mainValue124.options.overwrite === undefined ||
            mainValue81.boolean(mainValue124.options.overwrite)) &&
            (mainValue124.options.ignoreIfExists === undefined ||
              mainValue81.boolean(mainValue124.options.ignoreIfExists)))) &&
        (mainValue124.annotationId === undefined ||
          mainValue20.is(mainValue124.annotationId))
      );
    }
    mainParam11.is = mainHelper29;
  })((mainValue24 ||= {}));
  (function (mainParam14) {
    function mainHelper32(mainParam131, mainParam132, mainParam133) {
      let mainValue186 = {
        kind: "delete",
        uri: mainParam131,
      };
      return (
        mainParam132 !== undefined &&
          (mainParam132.recursive !== undefined ||
            mainParam132.ignoreIfNotExists !== undefined) &&
          (mainValue186.options = mainParam132),
        mainParam133 !== undefined &&
          (mainValue186.annotationId = mainParam133),
        mainValue186
      );
    }
    mainParam14.create = mainHelper32;
    function mainHelper33(mainParam52) {
      let mainValue126 = mainParam52;
      return (
        mainValue126 &&
        mainValue126.kind === "delete" &&
        mainValue81.string(mainValue126.uri) &&
        (mainValue126.options === undefined ||
          ((mainValue126.options.recursive === undefined ||
            mainValue81.boolean(mainValue126.options.recursive)) &&
            (mainValue126.options.ignoreIfNotExists === undefined ||
              mainValue81.boolean(mainValue126.options.ignoreIfNotExists)))) &&
        (mainValue126.annotationId === undefined ||
          mainValue20.is(mainValue126.annotationId))
      );
    }
    mainParam14.is = mainHelper33;
  })((mainValue25 ||= {}));
  (function (mainParam89) {
    function mainHelper74(mainParam95) {
      let mainValue172 = mainParam95;
      return (
        mainValue172 &&
        (mainValue172.changes !== undefined ||
          mainValue172.documentChanges !== undefined) &&
        (mainValue172.documentChanges === undefined ||
          mainValue172.documentChanges.every((item) =>
            mainValue81.string(item.kind)
              ? mainValue23.is(item) ||
                mainValue24.is(item) ||
                mainValue25.is(item)
              : mainValue22.is(item),
          ))
      );
    }
    mainParam89.is = mainHelper74;
  })((mainValue26 ||= {}));
  mainValue27 = class {
    constructor(mainParam316, mainParam317) {
      this.edits = mainParam316;
      this.changeAnnotations = mainParam317;
    }
    insert(mainParam79, mainParam80, mainParam81) {
      let mainValue151, mainValue152;
      if (
        (mainParam81 === undefined
          ? (mainValue151 = mainValue18.insert(mainParam79, mainParam80))
          : mainValue20.is(mainParam81)
            ? ((mainValue152 = mainParam81),
              (mainValue151 = mainValue21.insert(
                mainParam79,
                mainParam80,
                mainParam81,
              )))
            : (this.assertChangeAnnotations(this.changeAnnotations),
              (mainValue152 = this.changeAnnotations.manage(mainParam81)),
              (mainValue151 = mainValue21.insert(
                mainParam79,
                mainParam80,
                mainValue152,
              ))),
        this.edits.push(mainValue151),
        mainValue152 !== undefined)
      )
        return mainValue152;
    }
    replace(mainParam76, mainParam77, mainParam78) {
      let mainValue149, mainValue150;
      if (
        (mainParam78 === undefined
          ? (mainValue149 = mainValue18.replace(mainParam76, mainParam77))
          : mainValue20.is(mainParam78)
            ? ((mainValue150 = mainParam78),
              (mainValue149 = mainValue21.replace(
                mainParam76,
                mainParam77,
                mainParam78,
              )))
            : (this.assertChangeAnnotations(this.changeAnnotations),
              (mainValue150 = this.changeAnnotations.manage(mainParam78)),
              (mainValue149 = mainValue21.replace(
                mainParam76,
                mainParam77,
                mainValue150,
              ))),
        this.edits.push(mainValue149),
        mainValue150 !== undefined)
      )
        return mainValue150;
    }
    delete(mainParam86, mainParam87) {
      let mainValue166, mainValue167;
      if (
        (mainParam87 === undefined
          ? (mainValue166 = mainValue18.del(mainParam86))
          : mainValue20.is(mainParam87)
            ? ((mainValue167 = mainParam87),
              (mainValue166 = mainValue21.del(mainParam86, mainParam87)))
            : (this.assertChangeAnnotations(this.changeAnnotations),
              (mainValue167 = this.changeAnnotations.manage(mainParam87)),
              (mainValue166 = mainValue21.del(mainParam86, mainValue167))),
        this.edits.push(mainValue166),
        mainValue167 !== undefined)
      )
        return mainValue167;
    }
    add(mainParam400) {
      this.edits.push(mainParam400);
    }
    all() {
      return this.edits;
    }
    clear() {
      this.edits.splice(0, this.edits.length);
    }
    assertChangeAnnotations(mainParam168) {
      if (mainParam168 === undefined)
        throw Error(
          "Text edit change is not configured to manage change annotations.",
        );
    }
  };
  mainValue28 = class {
    constructor(mainParam226) {
      this._annotations =
        mainParam226 === undefined ? Object.create(null) : mainParam226;
      this._counter = 0;
      this._size = 0;
    }
    all() {
      return this._annotations;
    }
    get size() {
      return this._size;
    }
    manage(mainParam74, mainParam75) {
      let mainValue148;
      if (
        (mainValue20.is(mainParam74)
          ? (mainValue148 = mainParam74)
          : ((mainValue148 = this.nextId()), (mainParam75 = mainParam74)),
        this._annotations[mainValue148] !== undefined)
      )
        throw Error(`Id ${mainValue148} is already in use.`);
      if (mainParam75 === undefined)
        throw Error(`No annotation provided for id ${mainValue148}`);
      return (
        (this._annotations[mainValue148] = mainParam75),
        this._size++,
        mainValue148
      );
    }
    nextId() {
      return (this._counter++, this._counter.toString());
    }
  };
  mainValue29 = class {
    constructor(mainParam17) {
      this._textEditChanges = Object.create(null);
      mainParam17 === undefined
        ? (this._workspaceEdit = {})
        : ((this._workspaceEdit = mainParam17),
          mainParam17.documentChanges
            ? ((this._changeAnnotations = new mainValue28(
                mainParam17.changeAnnotations,
              )),
              (mainParam17.changeAnnotations = this._changeAnnotations.all()),
              mainParam17.documentChanges.forEach((item) => {
                if (mainValue22.is(item)) {
                  let mainValue227 = new mainValue27(
                    item.edits,
                    this._changeAnnotations,
                  );
                  this._textEditChanges[item.textDocument.uri] = mainValue227;
                }
              }))
            : mainParam17.changes &&
              Object.keys(mainParam17.changes).forEach((item) => {
                let mainValue254 = new mainValue27(mainParam17.changes[item]);
                this._textEditChanges[item] = mainValue254;
              }));
    }
    get edit() {
      return (
        this.initDocumentChanges(),
        this._changeAnnotations !== undefined &&
          (this._changeAnnotations.size === 0
            ? (this._workspaceEdit.changeAnnotations = undefined)
            : (this._workspaceEdit.changeAnnotations =
                this._changeAnnotations.all())),
        this._workspaceEdit
      );
    }
    getTextEditChange(mainParam7) {
      if (mainValue32.is(mainParam7)) {
        if (
          (this.initDocumentChanges(),
          this._workspaceEdit.documentChanges === undefined)
        )
          throw Error("Workspace edit is not configured for document changes.");
        let mainValue107 = {
            uri: mainParam7.uri,
            version: mainParam7.version,
          },
          mainValue108 = this._textEditChanges[mainValue107.uri];
        if (!mainValue108) {
          let mainValue192 = [],
            mainValue193 = {
              textDocument: mainValue107,
              edits: mainValue192,
            };
          this._workspaceEdit.documentChanges.push(mainValue193);
          mainValue108 = new mainValue27(mainValue192, this._changeAnnotations);
          this._textEditChanges[mainValue107.uri] = mainValue108;
        }
        return mainValue108;
      } else {
        if ((this.initChanges(), this._workspaceEdit.changes === undefined))
          throw Error(
            "Workspace edit is not configured for normal text edit changes.",
          );
        let mainValue137 = this._textEditChanges[mainParam7];
        if (!mainValue137) {
          let mainValue239 = [];
          this._workspaceEdit.changes[mainParam7] = mainValue239;
          mainValue137 = new mainValue27(mainValue239);
          this._textEditChanges[mainParam7] = mainValue137;
        }
        return mainValue137;
      }
    }
    initDocumentChanges() {
      this._workspaceEdit.documentChanges === undefined &&
        this._workspaceEdit.changes === undefined &&
        ((this._changeAnnotations = new mainValue28()),
        (this._workspaceEdit.documentChanges = []),
        (this._workspaceEdit.changeAnnotations =
          this._changeAnnotations.all()));
    }
    initChanges() {
      this._workspaceEdit.documentChanges === undefined &&
        this._workspaceEdit.changes === undefined &&
        (this._workspaceEdit.changes = Object.create(null));
    }
    createFile(mainParam33, mainParam34, mainParam35) {
      if (
        (this.initDocumentChanges(),
        this._workspaceEdit.documentChanges === undefined)
      )
        throw Error("Workspace edit is not configured for document changes.");
      let mainValue116;
      mainValue19.is(mainParam34) || mainValue20.is(mainParam34)
        ? (mainValue116 = mainParam34)
        : (mainParam35 = mainParam34);
      let mainValue117, mainValue118;
      if (
        (mainValue116 === undefined
          ? (mainValue117 = mainValue23.create(mainParam33, mainParam35))
          : ((mainValue118 = mainValue20.is(mainValue116)
              ? mainValue116
              : this._changeAnnotations.manage(mainValue116)),
            (mainValue117 = mainValue23.create(
              mainParam33,
              mainParam35,
              mainValue118,
            ))),
        this._workspaceEdit.documentChanges.push(mainValue117),
        mainValue118 !== undefined)
      )
        return mainValue118;
    }
    renameFile(mainParam28, mainParam29, mainParam30, mainParam31) {
      if (
        (this.initDocumentChanges(),
        this._workspaceEdit.documentChanges === undefined)
      )
        throw Error("Workspace edit is not configured for document changes.");
      let mainValue112;
      mainValue19.is(mainParam30) || mainValue20.is(mainParam30)
        ? (mainValue112 = mainParam30)
        : (mainParam31 = mainParam30);
      let mainValue113, mainValue114;
      if (
        (mainValue112 === undefined
          ? (mainValue113 = mainValue24.create(
              mainParam28,
              mainParam29,
              mainParam31,
            ))
          : ((mainValue114 = mainValue20.is(mainValue112)
              ? mainValue112
              : this._changeAnnotations.manage(mainValue112)),
            (mainValue113 = mainValue24.create(
              mainParam28,
              mainParam29,
              mainParam31,
              mainValue114,
            ))),
        this._workspaceEdit.documentChanges.push(mainValue113),
        mainValue114 !== undefined)
      )
        return mainValue114;
    }
    deleteFile(mainParam36, mainParam37, mainParam38) {
      if (
        (this.initDocumentChanges(),
        this._workspaceEdit.documentChanges === undefined)
      )
        throw Error("Workspace edit is not configured for document changes.");
      let mainValue119;
      mainValue19.is(mainParam37) || mainValue20.is(mainParam37)
        ? (mainValue119 = mainParam37)
        : (mainParam38 = mainParam37);
      let mainValue120, mainValue121;
      if (
        (mainValue119 === undefined
          ? (mainValue120 = mainValue25.create(mainParam36, mainParam38))
          : ((mainValue121 = mainValue20.is(mainValue119)
              ? mainValue119
              : this._changeAnnotations.manage(mainValue119)),
            (mainValue120 = mainValue25.create(
              mainParam36,
              mainParam38,
              mainValue121,
            ))),
        this._workspaceEdit.documentChanges.push(mainValue120),
        mainValue121 !== undefined)
      )
        return mainValue121;
    }
  };
  (function (mainParam172) {
    function mainHelper114(mainParam397) {
      return {
        uri: mainParam397,
      };
    }
    mainParam172.create = mainHelper114;
    function mainHelper115(mainParam307) {
      let mainValue253 = mainParam307;
      return (
        mainValue81.defined(mainValue253) &&
        mainValue81.string(mainValue253.uri)
      );
    }
    mainParam172.is = mainHelper115;
  })((mainValue30 ||= {}));
  (function (mainParam141) {
    function mainHelper99(mainParam369, mainParam370) {
      return {
        uri: mainParam369,
        version: mainParam370,
      };
    }
    mainParam141.create = mainHelper99;
    function mainHelper100(mainParam243) {
      let mainValue240 = mainParam243;
      return (
        mainValue81.defined(mainValue240) &&
        mainValue81.string(mainValue240.uri) &&
        mainValue81.integer(mainValue240.version)
      );
    }
    mainParam141.is = mainHelper100;
  })((mainValue31 ||= {}));
  (function (mainParam123) {
    function mainHelper85(mainParam371, mainParam372) {
      return {
        uri: mainParam371,
        version: mainParam372,
      };
    }
    mainParam123.create = mainHelper85;
    function mainHelper86(mainParam203) {
      let mainValue216 = mainParam203;
      return (
        mainValue81.defined(mainValue216) &&
        mainValue81.string(mainValue216.uri) &&
        (mainValue216.version === null ||
          mainValue81.integer(mainValue216.version))
      );
    }
    mainParam123.is = mainHelper86;
  })((mainValue32 ||= {}));
  (function (mainParam84) {
    function mainHelper70(
      mainParam286,
      mainParam287,
      mainParam288,
      mainParam289,
    ) {
      return {
        uri: mainParam286,
        languageId: mainParam287,
        version: mainParam288,
        text: mainParam289,
      };
    }
    mainParam84.create = mainHelper70;
    function mainHelper71(mainParam166) {
      let mainValue200 = mainParam166;
      return (
        mainValue81.defined(mainValue200) &&
        mainValue81.string(mainValue200.uri) &&
        mainValue81.string(mainValue200.languageId) &&
        mainValue81.integer(mainValue200.version) &&
        mainValue81.string(mainValue200.text)
      );
    }
    mainParam84.is = mainHelper71;
  })((mainValue33 ||= {}));
  (function (mainParam159) {
    mainParam159.PlainText = "plaintext";
    mainParam159.Markdown = "markdown";
    function mainHelper112(mainParam294) {
      let mainValue251 = mainParam294;
      return (
        mainValue251 === mainParam159.PlainText ||
        mainValue251 === mainParam159.Markdown
      );
    }
    mainParam159.is = mainHelper112;
  })((mainValue34 ||= {}));
  (function (mainParam214) {
    function mainHelper117(mainParam244) {
      let mainValue241 = mainParam244;
      return (
        mainValue81.objectLiteral(mainParam244) &&
        mainValue34.is(mainValue241.kind) &&
        mainValue81.string(mainValue241.value)
      );
    }
    mainParam214.is = mainHelper117;
  })((mainValue35 ||= {}));
  (function (mainParam43) {
    mainParam43.Text = 1;
    mainParam43.Method = 2;
    mainParam43.Function = 3;
    mainParam43.Constructor = 4;
    mainParam43.Field = 5;
    mainParam43.Variable = 6;
    mainParam43.Class = 7;
    mainParam43.Interface = 8;
    mainParam43.Module = 9;
    mainParam43.Property = 10;
    mainParam43.Unit = 11;
    mainParam43.Value = 12;
    mainParam43.Enum = 13;
    mainParam43.Keyword = 14;
    mainParam43.Snippet = 15;
    mainParam43.Color = 16;
    mainParam43.File = 17;
    mainParam43.Reference = 18;
    mainParam43.Folder = 19;
    mainParam43.EnumMember = 20;
    mainParam43.Constant = 21;
    mainParam43.Struct = 22;
    mainParam43.Event = 23;
    mainParam43.Operator = 24;
    mainParam43.TypeParameter = 25;
  })((mainValue36 ||= {}));
  (function (mainParam381) {
    mainParam381.PlainText = 1;
    mainParam381.Snippet = 2;
  })((mainValue37 ||= {}));
  (function (mainParam398) {
    mainParam398.Deprecated = 1;
  })((mainValue38 ||= {}));
  (function (mainParam127) {
    function mainHelper93(mainParam318, mainParam319, mainParam320) {
      return {
        newText: mainParam318,
        insert: mainParam319,
        replace: mainParam320,
      };
    }
    mainParam127.create = mainHelper93;
    function mainHelper94(mainParam234) {
      let mainValue233 = mainParam234;
      return (
        mainValue233 &&
        mainValue81.string(mainValue233.newText) &&
        mainS.is(mainValue233.insert) &&
        mainS.is(mainValue233.replace)
      );
    }
    mainParam127.is = mainHelper94;
  })((mainValue39 ||= {}));
  (function (mainParam349) {
    mainParam349.asIs = 1;
    mainParam349.adjustIndentation = 2;
  })((mainValue40 ||= {}));
  (function (mainParam149) {
    function mainHelper106(mainParam167) {
      let mainValue201 = mainParam167;
      return (
        mainValue201 &&
        (mainValue81.string(mainValue201.detail) ||
          mainValue201.detail === undefined) &&
        (mainValue81.string(mainValue201.description) ||
          mainValue201.description === undefined)
      );
    }
    mainParam149.is = mainHelper106;
  })((mainValue41 ||= {}));
  (function (mainParam321) {
    function mainHelper131(mainParam394) {
      return {
        label: mainParam394,
      };
    }
    mainParam321.create = mainHelper131;
  })((mainValue42 ||= {}));
  (function (mainParam253) {
    function mainHelper124(mainParam322, mainParam323) {
      return {
        items: mainParam322 || [],
        isIncomplete: !!mainParam323,
      };
    }
    mainParam253.create = mainHelper124;
  })((mainValue43 ||= {}));
  (function (mainParam91) {
    function mainHelper75(mainParam290) {
      return mainParam290.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }
    mainParam91.fromPlainText = mainHelper75;
    function mainHelper76(mainParam201) {
      let mainValue214 = mainParam201;
      return (
        mainValue81.string(mainValue214) ||
        (mainValue81.objectLiteral(mainValue214) &&
          mainValue81.string(mainValue214.language) &&
          mainValue81.string(mainValue214.value))
      );
    }
    mainParam91.is = mainHelper76;
  })((mainValue44 ||= {}));
  (function (mainParam121) {
    function mainHelper84(mainParam140) {
      let mainValue190 = mainParam140;
      return (
        !!mainValue190 &&
        mainValue81.objectLiteral(mainValue190) &&
        (mainValue35.is(mainValue190.contents) ||
          mainValue44.is(mainValue190.contents) ||
          mainValue81.typedArray(mainValue190.contents, mainValue44.is)) &&
        (mainParam140.range === undefined || mainS.is(mainParam140.range))
      );
    }
    mainParam121.is = mainHelper84;
  })((mainValue45 ||= {}));
  (function (mainParam237) {
    function mainHelper123(mainParam295, mainParam296) {
      return mainParam296
        ? {
            label: mainParam295,
            documentation: mainParam296,
          }
        : {
            label: mainParam295,
          };
    }
    mainParam237.create = mainHelper123;
  })((mainValue46 ||= {}));
  (function (mainParam145) {
    function mainHelper105(mainParam162, mainParam163, ...mainParam164) {
      let mainValue199 = {
        label: mainParam162,
      };
      return (
        mainValue81.defined(mainParam163) &&
          (mainValue199.documentation = mainParam163),
        mainValue81.defined(mainParam164)
          ? (mainValue199.parameters = mainParam164)
          : (mainValue199.parameters = []),
        mainValue199
      );
    }
    mainParam145.create = mainHelper105;
  })((mainValue47 ||= {}));
  (function (mainParam373) {
    mainParam373.Text = 1;
    mainParam373.Read = 2;
    mainParam373.Write = 3;
  })((mainValue48 ||= {}));
  (function (mainParam231) {
    function mainHelper120(mainParam284, mainParam285) {
      let mainValue250 = {
        range: mainParam284,
      };
      return (
        mainValue81.number(mainParam285) && (mainValue250.kind = mainParam285),
        mainValue250
      );
    }
    mainParam231.create = mainHelper120;
  })((mainValue49 ||= {}));
  (function (mainParam40) {
    mainParam40.File = 1;
    mainParam40.Module = 2;
    mainParam40.Namespace = 3;
    mainParam40.Package = 4;
    mainParam40.Class = 5;
    mainParam40.Method = 6;
    mainParam40.Property = 7;
    mainParam40.Field = 8;
    mainParam40.Constructor = 9;
    mainParam40.Enum = 10;
    mainParam40.Interface = 11;
    mainParam40.Function = 12;
    mainParam40.Variable = 13;
    mainParam40.Constant = 14;
    mainParam40.String = 15;
    mainParam40.Number = 16;
    mainParam40.Boolean = 17;
    mainParam40.Array = 18;
    mainParam40.Object = 19;
    mainParam40.Key = 20;
    mainParam40.Null = 21;
    mainParam40.EnumMember = 22;
    mainParam40.Struct = 23;
    mainParam40.Event = 24;
    mainParam40.Operator = 25;
    mainParam40.TypeParameter = 26;
  })((mainValue50 ||= {}));
  (function (mainParam399) {
    mainParam399.Deprecated = 1;
  })((mainValue51 ||= {}));
  (function (mainParam165) {
    function mainHelper113(
      mainParam204,
      mainParam205,
      mainParam206,
      mainParam207,
      mainParam208,
    ) {
      let mainValue217 = {
        name: mainParam204,
        kind: mainParam205,
        location: {
          uri: mainParam207,
          range: mainParam206,
        },
      };
      return (
        mainParam208 && (mainValue217.containerName = mainParam208),
        mainValue217
      );
    }
    mainParam165.create = mainHelper113;
  })((mainValue52 ||= {}));
  (function (mainParam156) {
    function mainHelper110(
      mainParam183,
      mainParam184,
      mainParam185,
      mainParam186,
    ) {
      return mainParam186 === undefined
        ? {
            name: mainParam183,
            kind: mainParam184,
            location: {
              uri: mainParam185,
            },
          }
        : {
            name: mainParam183,
            kind: mainParam184,
            location: {
              uri: mainParam185,
              range: mainParam186,
            },
          };
    }
    mainParam156.create = mainHelper110;
  })((_e ||= {}));
  (function (mainParam19) {
    function mainHelper40(
      mainParam173,
      mainParam174,
      mainParam175,
      mainParam176,
      mainParam177,
      mainParam178,
    ) {
      let mainValue205 = {
        name: mainParam173,
        detail: mainParam174,
        kind: mainParam175,
        range: mainParam176,
        selectionRange: mainParam177,
      };
      return (
        mainParam178 !== undefined && (mainValue205.children = mainParam178),
        mainValue205
      );
    }
    mainParam19.create = mainHelper40;
    function mainHelper41(mainParam51) {
      let mainValue125 = mainParam51;
      return (
        mainValue125 &&
        mainValue81.string(mainValue125.name) &&
        mainValue81.number(mainValue125.kind) &&
        mainS.is(mainValue125.range) &&
        mainS.is(mainValue125.selectionRange) &&
        (mainValue125.detail === undefined ||
          mainValue81.string(mainValue125.detail)) &&
        (mainValue125.deprecated === undefined ||
          mainValue81.boolean(mainValue125.deprecated)) &&
        (mainValue125.children === undefined ||
          Array.isArray(mainValue125.children)) &&
        (mainValue125.tags === undefined || Array.isArray(mainValue125.tags))
      );
    }
    mainParam19.is = mainHelper41;
  })((mainValue53 ||= {}));
  (function (mainParam56) {
    mainParam56.Empty = "";
    mainParam56.QuickFix = "quickfix";
    mainParam56.Refactor = "refactor";
    mainParam56.RefactorExtract = "refactor.extract";
    mainParam56.RefactorInline = "refactor.inline";
    mainParam56.RefactorRewrite = "refactor.rewrite";
    mainParam56.Source = "source";
    mainParam56.SourceOrganizeImports = "source.organizeImports";
    mainParam56.SourceFixAll = "source.fixAll";
  })((mainValue54 ||= {}));
  (function (mainParam382) {
    mainParam382.Invoked = 1;
    mainParam382.Automatic = 2;
  })((mainValue55 ||= {}));
  (function (mainParam41) {
    function mainHelper44(mainParam223, mainParam224, mainParam225) {
      let mainValue223 = {
        diagnostics: mainParam223,
      };
      return (
        mainParam224 != null && (mainValue223.only = mainParam224),
        mainParam225 != null && (mainValue223.triggerKind = mainParam225),
        mainValue223
      );
    }
    mainParam41.create = mainHelper44;
    function mainHelper45(mainParam90) {
      let mainValue168 = mainParam90;
      return (
        mainValue81.defined(mainValue168) &&
        mainValue81.typedArray(mainValue168.diagnostics, mainValue16.is) &&
        (mainValue168.only === undefined ||
          mainValue81.typedArray(mainValue168.only, mainValue81.string)) &&
        (mainValue168.triggerKind === undefined ||
          mainValue168.triggerKind === mainValue55.Invoked ||
          mainValue168.triggerKind === mainValue55.Automatic)
      );
    }
    mainParam41.is = mainHelper45;
  })((be ||= {}));
  (function (mainParam15) {
    function mainHelper34(mainParam153, mainParam154, mainParam155) {
      let mainValue195 = {
          title: mainParam153,
        },
        mainValue196 = true;
      return (
        typeof mainParam154 == "string"
          ? ((mainValue196 = false), (mainValue195.kind = mainParam154))
          : mainValue17.is(mainParam154)
            ? (mainValue195.command = mainParam154)
            : (mainValue195.edit = mainParam154),
        mainValue196 &&
          mainParam155 !== undefined &&
          (mainValue195.kind = mainParam155),
        mainValue195
      );
    }
    mainParam15.create = mainHelper34;
    function mainHelper35(mainParam49) {
      let mainValue123 = mainParam49;
      return (
        mainValue123 &&
        mainValue81.string(mainValue123.title) &&
        (mainValue123.diagnostics === undefined ||
          mainValue81.typedArray(mainValue123.diagnostics, mainValue16.is)) &&
        (mainValue123.kind === undefined ||
          mainValue81.string(mainValue123.kind)) &&
        (mainValue123.edit !== undefined ||
          mainValue123.command !== undefined) &&
        (mainValue123.command === undefined ||
          mainValue17.is(mainValue123.command)) &&
        (mainValue123.isPreferred === undefined ||
          mainValue81.boolean(mainValue123.isPreferred)) &&
        (mainValue123.edit === undefined || mainValue26.is(mainValue123.edit))
      );
    }
    mainParam15.is = mainHelper35;
  })((mainValue56 ||= {}));
  (function (mainParam93) {
    function mainHelper77(mainParam282, mainParam283) {
      let mainValue249 = {
        range: mainParam282,
      };
      return (
        mainValue81.defined(mainParam283) && (mainValue249.data = mainParam283),
        mainValue249
      );
    }
    mainParam93.create = mainHelper77;
    function mainHelper78(mainParam215) {
      let mainValue219 = mainParam215;
      return (
        mainValue81.defined(mainValue219) &&
        mainS.is(mainValue219.range) &&
        (mainValue81.undefined(mainValue219.command) ||
          mainValue17.is(mainValue219.command))
      );
    }
    mainParam93.is = mainHelper78;
  })((mainValue57 ||= {}));
  (function (mainParam124) {
    function mainHelper87(mainParam337, mainParam338) {
      return {
        tabSize: mainParam337,
        insertSpaces: mainParam338,
      };
    }
    mainParam124.create = mainHelper87;
    function mainHelper88(mainParam229) {
      let mainValue226 = mainParam229;
      return (
        mainValue81.defined(mainValue226) &&
        mainValue81.uinteger(mainValue226.tabSize) &&
        mainValue81.boolean(mainValue226.insertSpaces)
      );
    }
    mainParam124.is = mainHelper88;
  })((mainValue58 ||= {}));
  (function (mainParam106) {
    function mainHelper80(mainParam334, mainParam335, mainParam336) {
      return {
        range: mainParam334,
        target: mainParam335,
        data: mainParam336,
      };
    }
    mainParam106.create = mainHelper80;
    function mainHelper81(mainParam202) {
      let mainValue215 = mainParam202;
      return (
        mainValue81.defined(mainValue215) &&
        mainS.is(mainValue215.range) &&
        (mainValue81.undefined(mainValue215.target) ||
          mainValue81.string(mainValue215.target))
      );
    }
    mainParam106.is = mainHelper81;
  })((mainValue59 ||= {}));
  (function (mainParam125) {
    function mainHelper89(mainParam363, mainParam364) {
      return {
        range: mainParam363,
        parent: mainParam364,
      };
    }
    mainParam125.create = mainHelper89;
    function mainHelper90(mainParam216) {
      let mainValue220 = mainParam216;
      return (
        mainValue81.objectLiteral(mainValue220) &&
        mainS.is(mainValue220.range) &&
        (mainValue220.parent === undefined ||
          mainParam125.is(mainValue220.parent))
      );
    }
    mainParam125.is = mainHelper90;
  })((mainValue60 ||= {}));
  (function (mainParam12) {
    mainParam12.namespace = "namespace";
    mainParam12.type = "type";
    mainParam12.class = "class";
    mainParam12.enum = "enum";
    mainParam12.interface = "interface";
    mainParam12.struct = "struct";
    mainParam12.typeParameter = "typeParameter";
    mainParam12.parameter = "parameter";
    mainParam12.variable = "variable";
    mainParam12.property = "property";
    mainParam12.enumMember = "enumMember";
    mainParam12.event = "event";
    mainParam12.function = "function";
    mainParam12.method = "method";
    mainParam12.macro = "macro";
    mainParam12.keyword = "keyword";
    mainParam12.modifier = "modifier";
    mainParam12.comment = "comment";
    mainParam12.string = "string";
    mainParam12.number = "number";
    mainParam12.regexp = "regexp";
    mainParam12.operator = "operator";
    mainParam12.decorator = "decorator";
  })((mainValue61 ||= {}));
  (function (mainParam60) {
    mainParam60.declaration = "declaration";
    mainParam60.definition = "definition";
    mainParam60.readonly = "readonly";
    mainParam60.static = "static";
    mainParam60.deprecated = "deprecated";
    mainParam60.abstract = "abstract";
    mainParam60.async = "async";
    mainParam60.modification = "modification";
    mainParam60.documentation = "documentation";
    mainParam60.defaultLibrary = "defaultLibrary";
  })((mainValue62 ||= {}));
  (function (mainParam96) {
    function mainHelper79(mainParam122) {
      let mainValue180 = mainParam122;
      return (
        mainValue81.objectLiteral(mainValue180) &&
        (mainValue180.resultId === undefined ||
          typeof mainValue180.resultId == "string") &&
        Array.isArray(mainValue180.data) &&
        (mainValue180.data.length === 0 ||
          typeof mainValue180.data[0] == "number")
      );
    }
    mainParam96.is = mainHelper79;
  })((mainValue63 ||= {}));
  (function (mainParam150) {
    function mainHelper107(mainParam375, mainParam376) {
      return {
        range: mainParam375,
        text: mainParam376,
      };
    }
    mainParam150.create = mainHelper107;
    function mainHelper108(mainParam273) {
      let mainValue246 = mainParam273;
      return (
        mainValue246 != null &&
        mainS.is(mainValue246.range) &&
        mainValue81.string(mainValue246.text)
      );
    }
    mainParam150.is = mainHelper108;
  })((mainValue64 ||= {}));
  (function (mainParam73) {
    function mainHelper68(mainParam269, mainParam270, mainParam271) {
      return {
        range: mainParam269,
        variableName: mainParam270,
        caseSensitiveLookup: mainParam271,
      };
    }
    mainParam73.create = mainHelper68;
    function mainHelper69(mainParam151) {
      let mainValue194 = mainParam151;
      return (
        mainValue194 != null &&
        mainS.is(mainValue194.range) &&
        mainValue81.boolean(mainValue194.caseSensitiveLookup) &&
        (mainValue81.string(mainValue194.variableName) ||
          mainValue194.variableName === undefined)
      );
    }
    mainParam73.is = mainHelper69;
  })((mainValue65 ||= {}));
  (function (mainParam117) {
    function mainHelper82(mainParam343, mainParam344) {
      return {
        range: mainParam343,
        expression: mainParam344,
      };
    }
    mainParam117.create = mainHelper82;
    function mainHelper83(mainParam209) {
      let mainValue218 = mainParam209;
      return (
        mainValue218 != null &&
        mainS.is(mainValue218.range) &&
        (mainValue81.string(mainValue218.expression) ||
          mainValue218.expression === undefined)
      );
    }
    mainParam117.is = mainHelper83;
  })((mainValue66 ||= {}));
  (function (mainParam142) {
    function mainHelper101(mainParam326, mainParam327) {
      return {
        frameId: mainParam326,
        stoppedLocation: mainParam327,
      };
    }
    mainParam142.create = mainHelper101;
    function mainHelper102(mainParam277) {
      let mainValue247 = mainParam277;
      return (
        mainValue81.defined(mainValue247) &&
        mainS.is(mainParam277.stoppedLocation)
      );
    }
    mainParam142.is = mainHelper102;
  })((mainValue67 ||= {}));
  (function (mainParam254) {
    mainParam254.Type = 1;
    mainParam254.Parameter = 2;
    function mainHelper125(mainParam390) {
      return mainParam390 === 1 || mainParam390 === 2;
    }
    mainParam254.is = mainHelper125;
  })((mainValue68 ||= {}));
  (function (mainParam70) {
    function mainHelper62(mainParam395) {
      return {
        value: mainParam395,
      };
    }
    mainParam70.create = mainHelper62;
    function mainHelper63(mainParam103) {
      let mainValue174 = mainParam103;
      return (
        mainValue81.objectLiteral(mainValue174) &&
        (mainValue174.tooltip === undefined ||
          mainValue81.string(mainValue174.tooltip) ||
          mainValue35.is(mainValue174.tooltip)) &&
        (mainValue174.location === undefined ||
          mainValue5.is(mainValue174.location)) &&
        (mainValue174.command === undefined ||
          mainValue17.is(mainValue174.command))
      );
    }
    mainParam70.is = mainHelper63;
  })((mainValue69 ||= {}));
  (function (mainParam16) {
    function mainHelper36(mainParam249, mainParam250, mainParam251) {
      let mainValue244 = {
        position: mainParam249,
        label: mainParam250,
      };
      return (
        mainParam251 !== undefined && (mainValue244.kind = mainParam251),
        mainValue244
      );
    }
    mainParam16.create = mainHelper36;
    function mainHelper37(mainParam32) {
      let mainValue115 = mainParam32;
      return (
        (mainValue81.objectLiteral(mainValue115) &&
          mainO.is(mainValue115.position) &&
          (mainValue81.string(mainValue115.label) ||
            mainValue81.typedArray(mainValue115.label, mainValue69.is)) &&
          (mainValue115.kind === undefined ||
            mainValue68.is(mainValue115.kind)) &&
          mainValue115.textEdits === undefined) ||
        (mainValue81.typedArray(mainValue115.textEdits, mainValue18.is) &&
          (mainValue115.tooltip === undefined ||
            mainValue81.string(mainValue115.tooltip) ||
            mainValue35.is(mainValue115.tooltip)) &&
          (mainValue115.paddingLeft === undefined ||
            mainValue81.boolean(mainValue115.paddingLeft)) &&
          (mainValue115.paddingRight === undefined ||
            mainValue81.boolean(mainValue115.paddingRight)))
      );
    }
    mainParam16.is = mainHelper37;
  })((mainValue70 ||= {}));
  (function (mainParam255) {
    function mainHelper126(mainParam345) {
      return {
        kind: "snippet",
        value: mainParam345,
      };
    }
    mainParam255.createSnippet = mainHelper126;
  })((mainValue71 ||= {}));
  (function (mainParam227) {
    function mainHelper119(
      mainParam264,
      mainParam265,
      mainParam266,
      mainParam267,
    ) {
      return {
        insertText: mainParam264,
        filterText: mainParam265,
        range: mainParam266,
        command: mainParam267,
      };
    }
    mainParam227.create = mainHelper119;
  })((mainValue72 ||= {}));
  (function (mainParam324) {
    function mainHelper132(mainParam396) {
      return {
        items: mainParam396,
      };
    }
    mainParam324.create = mainHelper132;
  })((mainValue73 ||= {}));
  (function (mainParam383) {
    mainParam383.Invoked = 0;
    mainParam383.Automatic = 1;
  })((mainValue74 ||= {}));
  (function (mainParam293) {
    function mainHelper127(mainParam377, mainParam378) {
      return {
        range: mainParam377,
        text: mainParam378,
      };
    }
    mainParam293.create = mainHelper127;
  })((mainValue75 ||= {}));
  (function (mainParam232) {
    function mainHelper121(mainParam291, mainParam292) {
      return {
        triggerKind: mainParam291,
        selectedCompletionInfo: mainParam292,
      };
    }
    mainParam232.create = mainHelper121;
  })((mainValue76 ||= {}));
  (function (mainParam220) {
    function mainHelper118(mainParam245) {
      let mainValue242 = mainParam245;
      return (
        mainValue81.objectLiteral(mainValue242) &&
        mainValue2.is(mainValue242.uri) &&
        mainValue81.string(mainValue242.name)
      );
    }
    mainParam220.is = mainHelper118;
  })((mainValue77 ||= {}));
  mainValue78 = ["\n", "\r\n", "\r"];
  (function (mainParam3) {
    function mainHelper5(
      mainParam350,
      mainParam351,
      mainParam352,
      mainParam353,
    ) {
      return new mainValue80(
        mainParam350,
        mainParam351,
        mainParam352,
        mainParam353,
      );
    }
    mainParam3.create = mainHelper5;
    function mainHelper6(mainParam92) {
      let mainValue169 = mainParam92;
      return !!(
        mainValue81.defined(mainValue169) &&
        mainValue81.string(mainValue169.uri) &&
        (mainValue81.undefined(mainValue169.languageId) ||
          mainValue81.string(mainValue169.languageId)) &&
        mainValue81.uinteger(mainValue169.lineCount) &&
        mainValue81.func(mainValue169.getText) &&
        mainValue81.func(mainValue169.positionAt) &&
        mainValue81.func(mainValue169.offsetAt)
      );
    }
    mainParam3.is = mainHelper6;
    function mainHelper7(mainParam26, mainParam27) {
      let mainValue109 = mainParam26.getText(),
        mainValue110 = mainHelper8(
          mainParam27,
          (mainParam179, mainParam180) => {
            let mainValue206 =
              mainParam179.range.start.line - mainParam180.range.start.line;
            return mainValue206 === 0
              ? mainParam179.range.start.character -
                  mainParam180.range.start.character
              : mainValue206;
          },
        ),
        mainValue111 = mainValue109.length;
      for (
        let mainValue170 = mainValue110.length - 1;
        mainValue170 >= 0;
        mainValue170--
      ) {
        let mainValue183 = mainValue110[mainValue170],
          mainValue184 = mainParam26.offsetAt(mainValue183.range.start),
          _mainD = mainParam26.offsetAt(mainValue183.range.end);
        if (_mainD <= mainValue111)
          mainValue109 =
            mainValue109.substring(0, mainValue184) +
            mainValue183.newText +
            mainValue109.substring(_mainD, mainValue109.length);
        else throw Error("Overlapping edit");
        mainValue111 = mainValue184;
      }
      return mainValue109;
    }
    mainParam3.applyEdits = mainHelper7;
    function mainHelper8(mainParam62, mainParam63) {
      if (mainParam62.length <= 1) return mainParam62;
      let mainValue139 = (mainParam62.length / 2) | 0,
        mainValue140 = mainParam62.slice(0, mainValue139),
        mainValue141 = mainParam62.slice(mainValue139);
      mainHelper8(mainValue140, mainParam63);
      mainHelper8(mainValue141, mainParam63);
      let mainValue142 = 0,
        _mainD = 0,
        _mainU = 0;
      for (
        ;
        mainValue142 < mainValue140.length && _mainD < mainValue141.length;

      )
        mainParam63(mainValue140[mainValue142], mainValue141[_mainD]) <= 0
          ? (mainParam62[_mainU++] = mainValue140[mainValue142++])
          : (mainParam62[_mainU++] = mainValue141[_mainD++]);
      for (; mainValue142 < mainValue140.length; )
        mainParam62[_mainU++] = mainValue140[mainValue142++];
      for (; _mainD < mainValue141.length; )
        mainParam62[_mainU++] = mainValue141[_mainD++];
      return mainParam62;
    }
  })((mainValue79 ||= {}));
  mainValue80 = class {
    constructor(mainParam190, mainParam191, mainParam192, mainParam193) {
      this._uri = mainParam190;
      this._languageId = mainParam191;
      this._version = mainParam192;
      this._content = mainParam193;
      this._lineOffsets = undefined;
    }
    get uri() {
      return this._uri;
    }
    get languageId() {
      return this._languageId;
    }
    get version() {
      return this._version;
    }
    getText(mainParam160) {
      if (mainParam160) {
        let mainValue228 = this.offsetAt(mainParam160.start),
          mainValue229 = this.offsetAt(mainParam160.end);
        return this._content.substring(mainValue228, mainValue229);
      }
      return this._content;
    }
    update(mainParam256, mainParam257) {
      this._content = mainParam256.text;
      this._version = mainParam257;
      this._lineOffsets = undefined;
    }
    getLineOffsets() {
      if (this._lineOffsets === undefined) {
        let mainValue160 = [],
          mainValue161 = this._content,
          mainValue162 = true;
        for (
          let mainValue197 = 0;
          mainValue197 < mainValue161.length;
          mainValue197++
        ) {
          mainValue162 &&= (mainValue160.push(mainValue197), false);
          let mainValue209 = mainValue161.charAt(mainValue197);
          mainValue162 = mainValue209 === "\r" || mainValue209 === "\n";
          mainValue209 === "\r" &&
            mainValue197 + 1 < mainValue161.length &&
            mainValue161.charAt(mainValue197 + 1) === "\n" &&
            mainValue197++;
        }
        mainValue162 &&
          mainValue161.length > 0 &&
          mainValue160.push(mainValue161.length);
        this._lineOffsets = mainValue160;
      }
      return this._lineOffsets;
    }
    positionAt(mainParam82) {
      mainParam82 = Math.max(Math.min(mainParam82, this._content.length), 0);
      let mainValue153 = this.getLineOffsets(),
        mainValue154 = 0,
        mainValue155 = mainValue153.length;
      if (mainValue155 === 0) return mainO.create(0, mainParam82);
      for (; mainValue154 < mainValue155; ) {
        let mainValue259 = Math.floor((mainValue154 + mainValue155) / 2);
        mainValue153[mainValue259] > mainParam82
          ? (mainValue155 = mainValue259)
          : (mainValue154 = mainValue259 + 1);
      }
      let mainValue156 = mainValue154 - 1;
      return mainO.create(
        mainValue156,
        mainParam82 - mainValue153[mainValue156],
      );
    }
    offsetAt(mainParam83) {
      let mainValue157 = this.getLineOffsets();
      if (mainParam83.line >= mainValue157.length) return this._content.length;
      if (mainParam83.line < 0) return 0;
      let mainValue158 = mainValue157[mainParam83.line],
        mainValue159 =
          mainParam83.line + 1 < mainValue157.length
            ? mainValue157[mainParam83.line + 1]
            : this._content.length;
      return Math.max(
        Math.min(mainValue158 + mainParam83.character, mainValue159),
        mainValue158,
      );
    }
    get lineCount() {
      return this.getLineOffsets().length;
    }
  };
  (function (mainParam4) {
    let mainValue93 = Object.prototype.toString;
    function mainHelper9(mainParam391) {
      return mainParam391 !== undefined;
    }
    mainParam4.defined = mainHelper9;
    function mainHelper10(mainParam392) {
      return mainParam392 === undefined;
    }
    mainParam4.undefined = mainHelper10;
    function mainHelper11(mainParam386) {
      return mainParam386 === true || mainParam386 === false;
    }
    mainParam4.boolean = mainHelper11;
    function mainHelper12(mainParam330) {
      return mainValue93.call(mainParam330) === "[object String]";
    }
    mainParam4.string = mainHelper12;
    function mainHelper13(mainParam331) {
      return mainValue93.call(mainParam331) === "[object Number]";
    }
    mainParam4.number = mainHelper13;
    function _mainD(mainParam278, mainParam279, mainParam280) {
      return (
        mainValue93.call(mainParam278) === "[object Number]" &&
        mainParam279 <= mainParam278 &&
        mainParam278 <= mainParam280
      );
    }
    mainParam4.numberRange = _mainD;
    function _mainU(mainParam240) {
      return (
        mainValue93.call(mainParam240) === "[object Number]" &&
        -2147483648 <= mainParam240 &&
        mainParam240 <= 2147483647
      );
    }
    mainParam4.integer = _mainU;
    function _mainL(mainParam261) {
      return (
        mainValue93.call(mainParam261) === "[object Number]" &&
        0 <= mainParam261 &&
        mainParam261 <= 2147483647
      );
    }
    mainParam4.uinteger = _mainL;
    function mainHelper14(mainParam325) {
      return mainValue93.call(mainParam325) === "[object Function]";
    }
    mainParam4.func = mainHelper14;
    function mainHelper15(mainParam346) {
      return typeof mainParam346 == "object" && !!mainParam346;
    }
    mainParam4.objectLiteral = mainHelper15;
    function mainHelper16(mainParam328, mainParam329) {
      return Array.isArray(mainParam328) && mainParam328.every(mainParam329);
    }
    mainParam4.typedArray = mainHelper16;
  })((mainValue81 ||= {}));
});
(function (mainParam8) {
  function mainHelper17(
    mainParam354,
    mainParam355,
    mainParam356,
    mainParam357,
  ) {
    return new mainValue82(
      mainParam354,
      mainParam355,
      mainParam356,
      mainParam357,
    );
  }
  mainParam8.create = mainHelper17;
  function mainHelper18(mainParam146, mainParam147, mainParam148) {
    if (mainParam146 instanceof mainValue82)
      return (mainParam146.update(mainParam147, mainParam148), mainParam146);
    throw Error(
      "TextDocument.update: document must be created by TextDocument.create",
    );
  }
  mainParam8.update = mainHelper18;
  function mainHelper19(mainParam23, mainParam24) {
    let mainValue102 = mainParam23.getText(),
      mainValue103 = $(
        mainParam24.map(mainHelper4),
        (mainParam181, mainParam182) => {
          let mainValue207 =
            mainParam181.range.start.line - mainParam182.range.start.line;
          return mainValue207 === 0
            ? mainParam181.range.start.character -
                mainParam182.range.start.character
            : mainValue207;
        },
      ),
      mainValue104 = 0,
      mainValue105 = [];
    for (let mainValue178 of mainValue103) {
      let mainValue187 = mainParam23.offsetAt(mainValue178.range.start);
      if (mainValue187 < mainValue104) throw Error("Overlapping edit");
      mainValue187 > mainValue104 &&
        mainValue105.push(mainValue102.substring(mainValue104, mainValue187));
      mainValue178.newText.length && mainValue105.push(mainValue178.newText);
      mainValue104 = mainParam23.offsetAt(mainValue178.range.end);
    }
    return (
      mainValue105.push(mainValue102.substr(mainValue104)),
      mainValue105.join("")
    );
  }
  mainParam8.applyEdits = mainHelper19;
})((mainT ||= {}));
function $(mainParam64, mainParam65) {
  if (mainParam64.length <= 1) return mainParam64;
  let mainValue143 = (mainParam64.length / 2) | 0,
    mainValue144 = mainParam64.slice(0, mainValue143),
    mainValue145 = mainParam64.slice(mainValue143);
  $(mainValue144, mainParam65);
  $(mainValue145, mainParam65);
  let mainValue146 = 0,
    mainValue147 = 0,
    _mainD = 0;
  for (
    ;
    mainValue146 < mainValue144.length && mainValue147 < mainValue145.length;

  )
    mainParam65(mainValue144[mainValue146], mainValue145[mainValue147]) <= 0
      ? (mainParam64[_mainD++] = mainValue144[mainValue146++])
      : (mainParam64[_mainD++] = mainValue145[mainValue147++]);
  for (; mainValue146 < mainValue144.length; )
    mainParam64[_mainD++] = mainValue144[mainValue146++];
  for (; mainValue147 < mainValue145.length; )
    mainParam64[_mainD++] = mainValue145[mainValue147++];
  return mainParam64;
}
function mainHelper1(mainParam128, mainParam129, mainParam130 = 0) {
  let mainValue185 = mainParam129 ? [mainParam130] : [];
  for (
    let mainValue202 = 0;
    mainValue202 < mainParam128.length;
    mainValue202++
  ) {
    let mainValue224 = mainParam128.charCodeAt(mainValue202);
    mainHelper2(mainValue224) &&
      (mainValue224 === 13 &&
        mainValue202 + 1 < mainParam128.length &&
        mainParam128.charCodeAt(mainValue202 + 1) === 10 &&
        mainValue202++,
      mainValue185.push(mainParam130 + mainValue202 + 1));
  }
  return mainValue185;
}
function mainHelper2(mainParam385) {
  return mainParam385 === 13 || mainParam385 === 10;
}
function mainHelper3(mainParam171) {
  let mainValue203 = mainParam171.start,
    mainValue204 = mainParam171.end;
  return mainValue203.line > mainValue204.line ||
    (mainValue203.line === mainValue204.line &&
      mainValue203.character > mainValue204.character)
    ? {
        start: mainValue204,
        end: mainValue203,
      }
    : mainParam171;
}
function mainHelper4(mainParam241) {
  let mainValue237 = mainHelper3(mainParam241.range);
  return mainValue237 === mainParam241.range
    ? mainParam241
    : {
        newText: mainParam241.newText,
        range: mainValue237,
      };
}
export { mainA, mainI, mainO, mainR, mainS, mainT };
