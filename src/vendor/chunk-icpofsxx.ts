// Restored from ref/webview/assets/chunk-ICPOFSXX-CPupJSsJ.js
// Flat boundary. Vendored chunkICPOFSXX chunk restored from the Codex webview bundle.
const __vite__mapDeps = (
  chunkICPOFSXXParam83,
  chunkICPOFSXXParam84 = __vite__mapDeps,
  chunkICPOFSXXParam85 = chunkICPOFSXXParam84.f ||
    (chunkICPOFSXXParam84.f = [
      "../utils/katex",
      "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4-rg89odR_.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~bj5tp28r-Dcs9S3fj.js",
      "./rolldown-runtime-Czos8NxU.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~plugin-detail-page~new-~sfopfmmp-9J50_--p.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~1je6c975-DGpPRr1D.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~cf3a13zj-DZ7tupb9.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~g5252vxb-CZkpVhg2.js",
      "./app-initial~app-main~remote-conversation-page~onboarding-page~projects-index-page~hotkey-wi~nek76pmq-C240EGR1.js",
      "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~ki4n9fl3-zz_Wr7F0.js",
      "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~ki4n9fl3-sS9Dm_y9.css",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf-DEE2TwPG.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-publication-ter~chrf619l-Bf5oWcQG.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~plug~kmtatxxf-9F1MU8ql.css",
      "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~di269h6j-x1JD0lOF.js",
      "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~dg864qec-ISZMeMHq.js",
      "./app-initial~app-main~remote-conversation-page~pull-requests-page~onboarding-page~hotkey-win~fzw0jvy4-czZPzzcM.css",
    ]),
) => chunkICPOFSXXParam83.map((item) => chunkICPOFSXXParam85[item]);
import { PreloadHelper } from "../utils/preload-helper";
import {
  invertI,
  invertN,
  invertO,
  invertR,
  invertS,
  invertT,
} from "./color-convert";
import {
  chunkAGHRB4JFI,
  chunkAGHRB4JFN,
  chunkAGHRB4JFR,
  chunkAGHRB4JFT,
} from "./dayjs-core-alt";
var {
    entries,
    setPrototypeOf,
    isFrozen,
    getPrototypeOf,
    getOwnPropertyDescriptor,
  } = Object,
  { freeze, seal, create } = Object,
  { apply, construct } = typeof Reflect < "u" && Reflect;
freeze ||= function (chunkICPOFSXXParam157) {
  return chunkICPOFSXXParam157;
};
seal ||= function (chunkICPOFSXXParam154) {
  return chunkICPOFSXXParam154;
};
apply ||= function (chunkICPOFSXXParam93, chunkICPOFSXXParam94) {
  var chunkICPOFSXXValue332 = [...arguments].slice(2);
  return chunkICPOFSXXParam93.apply(
    chunkICPOFSXXParam94,
    chunkICPOFSXXValue332,
  );
};
construct ||= function (chunkICPOFSXXParam125) {
  return new chunkICPOFSXXParam125(...[...arguments].slice(1));
};
var chunkICPOFSXXValue1 = chunkICPOFSXXHelper1(Array.prototype.forEach),
  chunkICPOFSXXValue2 = chunkICPOFSXXHelper1(Array.prototype.lastIndexOf),
  chunkICPOFSXXValue3 = chunkICPOFSXXHelper1(Array.prototype.pop),
  chunkICPOFSXXValue4 = chunkICPOFSXXHelper1(Array.prototype.push),
  chunkICPOFSXXValue5 = chunkICPOFSXXHelper1(Array.prototype.splice),
  chunkICPOFSXXValue6 = chunkICPOFSXXHelper1(String.prototype.toLowerCase),
  chunkICPOFSXXValue7 = chunkICPOFSXXHelper1(String.prototype.toString),
  chunkICPOFSXXValue8 = chunkICPOFSXXHelper1(String.prototype.match),
  chunkICPOFSXXValue9 = chunkICPOFSXXHelper1(String.prototype.replace),
  chunkICPOFSXXValue10 = chunkICPOFSXXHelper1(String.prototype.indexOf),
  chunkICPOFSXXValue11 = chunkICPOFSXXHelper1(String.prototype.trim),
  chunkICPOFSXXValue12 = chunkICPOFSXXHelper1(Object.prototype.hasOwnProperty),
  chunkICPOFSXXValue13 = chunkICPOFSXXHelper1(RegExp.prototype.test),
  _e = chunkICPOFSXXHelper2(TypeError);
function chunkICPOFSXXHelper1(chunkICPOFSXXParam78) {
  return function (chunkICPOFSXXParam82) {
    chunkICPOFSXXParam82 instanceof RegExp &&
      (chunkICPOFSXXParam82.lastIndex = 0);
    var chunkICPOFSXXValue305 = [...arguments].slice(1);
    return apply(
      chunkICPOFSXXParam78,
      chunkICPOFSXXParam82,
      chunkICPOFSXXValue305,
    );
  };
}
function chunkICPOFSXXHelper2(chunkICPOFSXXParam95) {
  return function () {
    return construct(chunkICPOFSXXParam95, [...arguments]);
  };
}
function chunkICPOFSXXHelper3(chunkICPOFSXXParam37, chunkICPOFSXXParam38) {
  let chunkICPOFSXXValue228 =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : chunkICPOFSXXValue6;
  setPrototypeOf && setPrototypeOf(chunkICPOFSXXParam37, null);
  let chunkICPOFSXXValue229 = chunkICPOFSXXParam38.length;
  for (; chunkICPOFSXXValue229--; ) {
    let chunkICPOFSXXValue284 = chunkICPOFSXXParam38[chunkICPOFSXXValue229];
    if (typeof chunkICPOFSXXValue284 == "string") {
      let chunkICPOFSXXValue334 = chunkICPOFSXXValue228(chunkICPOFSXXValue284);
      chunkICPOFSXXValue334 !== chunkICPOFSXXValue284 &&
        (isFrozen(chunkICPOFSXXParam38) ||
          (chunkICPOFSXXParam38[chunkICPOFSXXValue229] = chunkICPOFSXXValue334),
        (chunkICPOFSXXValue284 = chunkICPOFSXXValue334));
    }
    chunkICPOFSXXParam37[chunkICPOFSXXValue284] = true;
  }
  return chunkICPOFSXXParam37;
}
function chunkICPOFSXXHelper4(chunkICPOFSXXParam88) {
  for (
    let chunkICPOFSXXValue349 = 0;
    chunkICPOFSXXValue349 < chunkICPOFSXXParam88.length;
    chunkICPOFSXXValue349++
  )
    chunkICPOFSXXValue12(chunkICPOFSXXParam88, chunkICPOFSXXValue349) ||
      (chunkICPOFSXXParam88[chunkICPOFSXXValue349] = null);
  return chunkICPOFSXXParam88;
}
function chunkICPOFSXXHelper5(chunkICPOFSXXParam57) {
  let chunkICPOFSXXValue262 = create(null);
  for (let [chunkICPOFSXXValue273, chunkICPOFSXXValue274] of entries(
    chunkICPOFSXXParam57,
  ))
    chunkICPOFSXXValue12(chunkICPOFSXXParam57, chunkICPOFSXXValue273) &&
      (Array.isArray(chunkICPOFSXXValue274)
        ? (chunkICPOFSXXValue262[chunkICPOFSXXValue273] = chunkICPOFSXXHelper4(
            chunkICPOFSXXValue274,
          ))
        : chunkICPOFSXXValue274 &&
            typeof chunkICPOFSXXValue274 == "object" &&
            chunkICPOFSXXValue274.constructor === Object
          ? (chunkICPOFSXXValue262[chunkICPOFSXXValue273] =
              chunkICPOFSXXHelper5(chunkICPOFSXXValue274))
          : (chunkICPOFSXXValue262[chunkICPOFSXXValue273] =
              chunkICPOFSXXValue274));
  return chunkICPOFSXXValue262;
}
function chunkICPOFSXXHelper6(chunkICPOFSXXParam58, chunkICPOFSXXParam59) {
  for (; chunkICPOFSXXParam58 !== null; ) {
    let chunkICPOFSXXValue281 = getOwnPropertyDescriptor(
      chunkICPOFSXXParam58,
      chunkICPOFSXXParam59,
    );
    if (chunkICPOFSXXValue281) {
      if (chunkICPOFSXXValue281.get)
        return chunkICPOFSXXHelper1(chunkICPOFSXXValue281.get);
      if (typeof chunkICPOFSXXValue281.value == "function")
        return chunkICPOFSXXHelper1(chunkICPOFSXXValue281.value);
    }
    chunkICPOFSXXParam58 = getPrototypeOf(chunkICPOFSXXParam58);
  }
  function chunkICPOFSXXHelper10() {
    return null;
  }
  return chunkICPOFSXXHelper10;
}
var be = freeze(
    "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(
      ".",
    ),
  ),
  chunkICPOFSXXValue14 = freeze(
    "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(
      ".",
    ),
  ),
  chunkICPOFSXXValue15 = freeze([
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
  ]),
  chunkICPOFSXXValue16 = freeze([
    "animate",
    "color-profile",
    "cursor",
    "discard",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignobject",
    "hatch",
    "hatchpath",
    "mesh",
    "meshgradient",
    "meshpatch",
    "meshrow",
    "missing-glyph",
    "script",
    "set",
    "solidcolor",
    "unknown",
    "use",
  ]),
  chunkICPOFSXXValue17 = freeze(
    "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(
      ".",
    ),
  ),
  chunkICPOFSXXValue18 = freeze([
    "maction",
    "maligngroup",
    "malignmark",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "mstack",
    "msline",
    "msrow",
    "semantics",
    "annotation",
    "annotation-xml",
    "mprescripts",
    "none",
  ]),
  chunkICPOFSXXValue19 = freeze(["#text"]),
  chunkICPOFSXXValue20 = freeze(
    "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns.slot".split(
      ".",
    ),
  ),
  chunkICPOFSXXValue21 = freeze(
    "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(
      ".",
    ),
  ),
  chunkICPOFSXXValue22 = freeze(
    "accent.accentunder.align.bevelled.close.columnsalign.columnlines.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lspace.lquote.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(
      ".",
    ),
  ),
  chunkICPOFSXXValue23 = freeze([
    "xlink:href",
    "xml:id",
    "xlink:title",
    "xml:space",
    "xmlns:xlink",
  ]),
  chunkICPOFSXXValue24 = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
  chunkICPOFSXXValue25 = seal(/<%[\w\W]*|[\w\W]*%>/gm),
  chunkICPOFSXXValue26 = seal(/\$\{[\w\W]*/gm),
  chunkICPOFSXXValue27 = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/),
  chunkICPOFSXXValue28 = seal(/^aria-[\-\w]+$/),
  chunkICPOFSXXValue29 = seal(
    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
  ),
  chunkICPOFSXXValue30 = seal(/^(?:\w+script|data):/i),
  chunkICPOFSXXValue31 = seal(
    /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g,
  ),
  chunkICPOFSXXValue32 = seal(/^html$/i),
  chunkICPOFSXXValue33 = seal(/^[a-z][.\w]*(-[.\w]+)+$/i),
  chunkICPOFSXXValue34 = Object.freeze({
    __proto__: null,
    ARIA_ATTR: chunkICPOFSXXValue28,
    ATTR_WHITESPACE: chunkICPOFSXXValue31,
    CUSTOM_ELEMENT: chunkICPOFSXXValue33,
    DATA_ATTR: chunkICPOFSXXValue27,
    DOCTYPE_NAME: chunkICPOFSXXValue32,
    ERB_EXPR: chunkICPOFSXXValue25,
    IS_ALLOWED_URI: chunkICPOFSXXValue29,
    IS_SCRIPT_OR_DATA: chunkICPOFSXXValue30,
    MUSTACHE_EXPR: chunkICPOFSXXValue24,
    TMPLIT_EXPR: chunkICPOFSXXValue26,
  }),
  chunkICPOFSXXValue35 = {
    element: 1,
    attribute: 2,
    text: 3,
    cdataSection: 4,
    entityReference: 5,
    entityNode: 6,
    progressingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12,
  },
  chunkICPOFSXXValue36 = function () {
    return typeof window > "u" ? null : window;
  },
  chunkICPOFSXXValue37 = function (chunkICPOFSXXParam19, chunkICPOFSXXParam20) {
    if (
      typeof chunkICPOFSXXParam19 != "object" ||
      typeof chunkICPOFSXXParam19.createPolicy != "function"
    )
      return null;
    let chunkICPOFSXXValue204 = null;
    chunkICPOFSXXParam20 &&
      chunkICPOFSXXParam20.hasAttribute("data-tt-policy-suffix") &&
      (chunkICPOFSXXValue204 = chunkICPOFSXXParam20.getAttribute(
        "data-tt-policy-suffix",
      ));
    let chunkICPOFSXXValue206 =
      "dompurify" + (chunkICPOFSXXValue204 ? "#" + chunkICPOFSXXValue204 : "");
    try {
      return chunkICPOFSXXParam19.createPolicy(chunkICPOFSXXValue206, {
        createHTML(chunkICPOFSXXParam143) {
          return chunkICPOFSXXParam143;
        },
        createScriptURL(chunkICPOFSXXParam139) {
          return chunkICPOFSXXParam139;
        },
      });
    } catch {
      return (
        console.warn(
          "TrustedTypes policy " +
            chunkICPOFSXXValue206 +
            " could not be created.",
        ),
        null
      );
    }
  },
  chunkICPOFSXXValue38 = function () {
    return {
      afterSanitizeAttributes: [],
      afterSanitizeElements: [],
      afterSanitizeShadowDOM: [],
      beforeSanitizeAttributes: [],
      beforeSanitizeElements: [],
      beforeSanitizeShadowDOM: [],
      uponSanitizeAttribute: [],
      uponSanitizeElement: [],
      uponSanitizeShadowNode: [],
    };
  };
function chunkICPOFSXXHelper7() {
  let chunkICPOFSXXValue107 =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : chunkICPOFSXXValue36(),
    chunkICPOFSXXValue108 = (chunkICPOFSXXParam166) =>
      chunkICPOFSXXHelper7(chunkICPOFSXXParam166);
  if (
    ((chunkICPOFSXXValue108.version = "3.3.3"),
    (chunkICPOFSXXValue108.removed = []),
    !chunkICPOFSXXValue107 ||
      !chunkICPOFSXXValue107.document ||
      chunkICPOFSXXValue107.document.nodeType !==
        chunkICPOFSXXValue35.document ||
      !chunkICPOFSXXValue107.Element)
  )
    return ((chunkICPOFSXXValue108.isSupported = false), chunkICPOFSXXValue108);
  let { document } = chunkICPOFSXXValue107,
    chunkICPOFSXXValue109 = document,
    chunkICPOFSXXValue110 = chunkICPOFSXXValue109.currentScript,
    {
      DocumentFragment,
      HTMLTemplateElement,
      Node,
      Element,
      NodeFilter,
      NamedNodeMap = chunkICPOFSXXValue107.NamedNodeMap ||
        chunkICPOFSXXValue107.MozNamedAttrMap,
      HTMLFormElement,
      DOMParser,
      trustedTypes,
    } = chunkICPOFSXXValue107,
    chunkICPOFSXXValue111 = Element.prototype,
    chunkICPOFSXXValue112 = chunkICPOFSXXHelper6(
      chunkICPOFSXXValue111,
      "cloneNode",
    ),
    chunkICPOFSXXValue113 = chunkICPOFSXXHelper6(
      chunkICPOFSXXValue111,
      "remove",
    ),
    chunkICPOFSXXValue114 = chunkICPOFSXXHelper6(
      chunkICPOFSXXValue111,
      "nextSibling",
    ),
    chunkICPOFSXXValue115 = chunkICPOFSXXHelper6(
      chunkICPOFSXXValue111,
      "childNodes",
    ),
    chunkICPOFSXXValue116 = chunkICPOFSXXHelper6(
      chunkICPOFSXXValue111,
      "parentNode",
    );
  if (typeof HTMLTemplateElement == "function") {
    let chunkICPOFSXXValue308 = document.createElement("template");
    chunkICPOFSXXValue308.content &&
      chunkICPOFSXXValue308.content.ownerDocument &&
      (document = chunkICPOFSXXValue308.content.ownerDocument);
  }
  let chunkICPOFSXXValue117,
    chunkICPOFSXXValue118 = "",
    {
      implementation,
      createNodeIterator,
      createDocumentFragment,
      getElementsByTagName,
    } = document,
    { importNode } = chunkICPOFSXXValue109,
    chunkICPOFSXXValue119 = chunkICPOFSXXValue38();
  chunkICPOFSXXValue108.isSupported =
    typeof entries == "function" &&
    typeof chunkICPOFSXXValue116 == "function" &&
    implementation &&
    implementation.createHTMLDocument !== undefined;
  let {
      MUSTACHE_EXPR,
      ERB_EXPR: __chunkICPOFSXXZ,
      TMPLIT_EXPR: __chunkICPOFSXXG,
      DATA_ATTR: __chunkICPOFSXXM,
      ARIA_ATTR,
      IS_SCRIPT_OR_DATA: __chunkICPOFSXXT,
      ATTR_WHITESPACE: __chunkICPOFSXXP,
      CUSTOM_ELEMENT: __chunkICPOFSXXF,
    } = chunkICPOFSXXValue34,
    { IS_ALLOWED_URI: __chunkICPOFSXXN } = chunkICPOFSXXValue34,
    chunkICPOFSXXValue120 = null,
    __chunkICPOFSXXS = chunkICPOFSXXHelper3({}, [
      ...be,
      ...chunkICPOFSXXValue14,
      ...chunkICPOFSXXValue15,
      ...chunkICPOFSXXValue17,
      ...chunkICPOFSXXValue19,
    ]),
    chunkICPOFSXXValue121 = null,
    __chunkICPOFSXXR = chunkICPOFSXXHelper3({}, [
      ...chunkICPOFSXXValue20,
      ...chunkICPOFSXXValue21,
      ...chunkICPOFSXXValue22,
      ...chunkICPOFSXXValue23,
    ]),
    chunkICPOFSXXValue122 = Object.seal(
      create(null, {
        tagNameCheck: {
          writable: true,
          configurable: false,
          enumerable: true,
          value: null,
        },
        attributeNameCheck: {
          writable: true,
          configurable: false,
          enumerable: true,
          value: null,
        },
        allowCustomizedBuiltInElements: {
          writable: true,
          configurable: false,
          enumerable: true,
          value: false,
        },
      }),
    ),
    chunkICPOFSXXValue123 = null,
    chunkICPOFSXXValue124 = null,
    chunkICPOFSXXValue125 = Object.seal(
      create(null, {
        tagCheck: {
          writable: true,
          configurable: false,
          enumerable: true,
          value: null,
        },
        attributeCheck: {
          writable: true,
          configurable: false,
          enumerable: true,
          value: null,
        },
      }),
    ),
    $e = true,
    chunkICPOFSXXValue126 = true,
    chunkICPOFSXXValue127 = false,
    chunkICPOFSXXValue128 = true,
    _chunkICPOFSXXE = false,
    chunkICPOFSXXValue129 = true,
    chunkICPOFSXXValue130 = false,
    chunkICPOFSXXValue131 = false,
    at = false,
    chunkICPOFSXXValue132 = false,
    chunkICPOFSXXValue133 = false,
    chunkICPOFSXXValue134 = false,
    chunkICPOFSXXValue135 = true,
    chunkICPOFSXXValue136 = false,
    chunkICPOFSXXValue137 = true,
    chunkICPOFSXXValue138 = false,
    chunkICPOFSXXValue139 = {},
    chunkICPOFSXXValue140 = null,
    chunkICPOFSXXValue141 = chunkICPOFSXXHelper3({}, [
      "annotation-xml",
      "audio",
      "colgroup",
      "desc",
      "foreignobject",
      "head",
      "iframe",
      "math",
      "mi",
      "mn",
      "mo",
      "ms",
      "mtext",
      "noembed",
      "noframes",
      "noscript",
      "plaintext",
      "script",
      "style",
      "svg",
      "template",
      "thead",
      "title",
      "video",
      "xmp",
    ]),
    chunkICPOFSXXValue142 = null,
    chunkICPOFSXXValue143 = chunkICPOFSXXHelper3({}, [
      "audio",
      "video",
      "img",
      "source",
      "image",
      "track",
    ]),
    __chunkICPOFSXXY = null,
    chunkICPOFSXXValue144 = chunkICPOFSXXHelper3({}, [
      "alt",
      "class",
      "for",
      "id",
      "label",
      "name",
      "pattern",
      "placeholder",
      "role",
      "summary",
      "title",
      "value",
      "style",
      "xmlns",
    ]),
    __chunkICPOFSXXD = "http://www.w3.org/1999/xhtml",
    __chunkICPOFSXXI = false,
    chunkICPOFSXXValue148 = null,
    __chunkICPOFSXXL = chunkICPOFSXXHelper3(
      {},
      [
        "http://www.w3.org/1998/Math/MathML",
        "http://www.w3.org/2000/svg",
        "http://www.w3.org/1999/xhtml",
      ],
      chunkICPOFSXXValue7,
    ),
    __chunkICPOFSXXH = chunkICPOFSXXHelper3({}, [
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext",
    ]),
    chunkICPOFSXXValue149 = chunkICPOFSXXHelper3({}, ["annotation-xml"]),
    chunkICPOFSXXValue150 = chunkICPOFSXXHelper3({}, [
      "title",
      "style",
      "font",
      "a",
      "script",
    ]),
    chunkICPOFSXXValue151 = null,
    _t = ["application/xhtml+xml", "text/html"],
    chunkICPOFSXXValue152 = null,
    ___chunkICPOFSXXG = null,
    ___chunkICPOFSXXZ = document.createElement("form"),
    __chunkICPOFSXXX = function (chunkICPOFSXXParam97) {
      return (
        chunkICPOFSXXParam97 instanceof RegExp ||
        chunkICPOFSXXParam97 instanceof Function
      );
    },
    ___chunkICPOFSXXT = function () {
      let chunkICPOFSXXValue177 =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!(___chunkICPOFSXXG && ___chunkICPOFSXXG === chunkICPOFSXXValue177)) {
        if (
          ((!chunkICPOFSXXValue177 ||
            typeof chunkICPOFSXXValue177 != "object") &&
            (chunkICPOFSXXValue177 = {}),
          (chunkICPOFSXXValue177 = chunkICPOFSXXHelper5(chunkICPOFSXXValue177)),
          (chunkICPOFSXXValue151 =
            _t.indexOf(chunkICPOFSXXValue177.PARSER_MEDIA_TYPE) === -1
              ? "text/html"
              : chunkICPOFSXXValue177.PARSER_MEDIA_TYPE),
          (chunkICPOFSXXValue152 =
            chunkICPOFSXXValue151 === "application/xhtml+xml"
              ? chunkICPOFSXXValue7
              : chunkICPOFSXXValue6),
          (chunkICPOFSXXValue120 = chunkICPOFSXXValue12(
            chunkICPOFSXXValue177,
            "ALLOWED_TAGS",
          )
            ? chunkICPOFSXXHelper3(
                {},
                chunkICPOFSXXValue177.ALLOWED_TAGS,
                chunkICPOFSXXValue152,
              )
            : __chunkICPOFSXXS),
          (chunkICPOFSXXValue121 = chunkICPOFSXXValue12(
            chunkICPOFSXXValue177,
            "ALLOWED_ATTR",
          )
            ? chunkICPOFSXXHelper3(
                {},
                chunkICPOFSXXValue177.ALLOWED_ATTR,
                chunkICPOFSXXValue152,
              )
            : __chunkICPOFSXXR),
          (chunkICPOFSXXValue148 = chunkICPOFSXXValue12(
            chunkICPOFSXXValue177,
            "ALLOWED_NAMESPACES",
          )
            ? chunkICPOFSXXHelper3(
                {},
                chunkICPOFSXXValue177.ALLOWED_NAMESPACES,
                chunkICPOFSXXValue7,
              )
            : __chunkICPOFSXXL),
          (__chunkICPOFSXXY = chunkICPOFSXXValue12(
            chunkICPOFSXXValue177,
            "ADD_URI_SAFE_ATTR",
          )
            ? chunkICPOFSXXHelper3(
                chunkICPOFSXXHelper5(chunkICPOFSXXValue144),
                chunkICPOFSXXValue177.ADD_URI_SAFE_ATTR,
                chunkICPOFSXXValue152,
              )
            : chunkICPOFSXXValue144),
          (chunkICPOFSXXValue142 = chunkICPOFSXXValue12(
            chunkICPOFSXXValue177,
            "ADD_DATA_URI_TAGS",
          )
            ? chunkICPOFSXXHelper3(
                chunkICPOFSXXHelper5(chunkICPOFSXXValue143),
                chunkICPOFSXXValue177.ADD_DATA_URI_TAGS,
                chunkICPOFSXXValue152,
              )
            : chunkICPOFSXXValue143),
          (chunkICPOFSXXValue140 = chunkICPOFSXXValue12(
            chunkICPOFSXXValue177,
            "FORBID_CONTENTS",
          )
            ? chunkICPOFSXXHelper3(
                {},
                chunkICPOFSXXValue177.FORBID_CONTENTS,
                chunkICPOFSXXValue152,
              )
            : chunkICPOFSXXValue141),
          (chunkICPOFSXXValue123 = chunkICPOFSXXValue12(
            chunkICPOFSXXValue177,
            "FORBID_TAGS",
          )
            ? chunkICPOFSXXHelper3(
                {},
                chunkICPOFSXXValue177.FORBID_TAGS,
                chunkICPOFSXXValue152,
              )
            : chunkICPOFSXXHelper5({})),
          (chunkICPOFSXXValue124 = chunkICPOFSXXValue12(
            chunkICPOFSXXValue177,
            "FORBID_ATTR",
          )
            ? chunkICPOFSXXHelper3(
                {},
                chunkICPOFSXXValue177.FORBID_ATTR,
                chunkICPOFSXXValue152,
              )
            : chunkICPOFSXXHelper5({})),
          (chunkICPOFSXXValue139 = chunkICPOFSXXValue12(
            chunkICPOFSXXValue177,
            "USE_PROFILES",
          )
            ? chunkICPOFSXXValue177.USE_PROFILES
            : false),
          ($e = chunkICPOFSXXValue177.ALLOW_ARIA_ATTR !== false),
          (chunkICPOFSXXValue126 =
            chunkICPOFSXXValue177.ALLOW_DATA_ATTR !== false),
          (chunkICPOFSXXValue127 =
            chunkICPOFSXXValue177.ALLOW_UNKNOWN_PROTOCOLS || false),
          (chunkICPOFSXXValue128 =
            chunkICPOFSXXValue177.ALLOW_SELF_CLOSE_IN_ATTR !== false),
          (_chunkICPOFSXXE = chunkICPOFSXXValue177.SAFE_FOR_TEMPLATES || false),
          (chunkICPOFSXXValue129 =
            chunkICPOFSXXValue177.SAFE_FOR_XML !== false),
          (chunkICPOFSXXValue130 =
            chunkICPOFSXXValue177.WHOLE_DOCUMENT || false),
          (chunkICPOFSXXValue132 = chunkICPOFSXXValue177.RETURN_DOM || false),
          (chunkICPOFSXXValue133 =
            chunkICPOFSXXValue177.RETURN_DOM_FRAGMENT || false),
          (chunkICPOFSXXValue134 =
            chunkICPOFSXXValue177.RETURN_TRUSTED_TYPE || false),
          (at = chunkICPOFSXXValue177.FORCE_BODY || false),
          (chunkICPOFSXXValue135 =
            chunkICPOFSXXValue177.SANITIZE_DOM !== false),
          (chunkICPOFSXXValue136 =
            chunkICPOFSXXValue177.SANITIZE_NAMED_PROPS || false),
          (chunkICPOFSXXValue137 =
            chunkICPOFSXXValue177.KEEP_CONTENT !== false),
          (chunkICPOFSXXValue138 = chunkICPOFSXXValue177.IN_PLACE || false),
          (__chunkICPOFSXXN =
            chunkICPOFSXXValue177.ALLOWED_URI_REGEXP || chunkICPOFSXXValue29),
          (__chunkICPOFSXXD =
            chunkICPOFSXXValue177.NAMESPACE || "http://www.w3.org/1999/xhtml"),
          (__chunkICPOFSXXH =
            chunkICPOFSXXValue177.MATHML_TEXT_INTEGRATION_POINTS ||
            __chunkICPOFSXXH),
          (chunkICPOFSXXValue149 =
            chunkICPOFSXXValue177.HTML_INTEGRATION_POINTS ||
            chunkICPOFSXXValue149),
          (chunkICPOFSXXValue122 =
            chunkICPOFSXXValue177.CUSTOM_ELEMENT_HANDLING || {}),
          chunkICPOFSXXValue177.CUSTOM_ELEMENT_HANDLING &&
            __chunkICPOFSXXX(
              chunkICPOFSXXValue177.CUSTOM_ELEMENT_HANDLING.tagNameCheck,
            ) &&
            (chunkICPOFSXXValue122.tagNameCheck =
              chunkICPOFSXXValue177.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
          chunkICPOFSXXValue177.CUSTOM_ELEMENT_HANDLING &&
            __chunkICPOFSXXX(
              chunkICPOFSXXValue177.CUSTOM_ELEMENT_HANDLING.attributeNameCheck,
            ) &&
            (chunkICPOFSXXValue122.attributeNameCheck =
              chunkICPOFSXXValue177.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
          chunkICPOFSXXValue177.CUSTOM_ELEMENT_HANDLING &&
            typeof chunkICPOFSXXValue177.CUSTOM_ELEMENT_HANDLING
              .allowCustomizedBuiltInElements == "boolean" &&
            (chunkICPOFSXXValue122.allowCustomizedBuiltInElements =
              chunkICPOFSXXValue177.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
          _chunkICPOFSXXE && (chunkICPOFSXXValue126 = false),
          chunkICPOFSXXValue133 && (chunkICPOFSXXValue132 = true),
          chunkICPOFSXXValue139 &&
            ((chunkICPOFSXXValue120 = chunkICPOFSXXHelper3(
              {},
              chunkICPOFSXXValue19,
            )),
            (chunkICPOFSXXValue121 = create(null)),
            chunkICPOFSXXValue139.html === true &&
              (chunkICPOFSXXHelper3(chunkICPOFSXXValue120, be),
              chunkICPOFSXXHelper3(
                chunkICPOFSXXValue121,
                chunkICPOFSXXValue20,
              )),
            chunkICPOFSXXValue139.svg === true &&
              (chunkICPOFSXXHelper3(
                chunkICPOFSXXValue120,
                chunkICPOFSXXValue14,
              ),
              chunkICPOFSXXHelper3(chunkICPOFSXXValue121, chunkICPOFSXXValue21),
              chunkICPOFSXXHelper3(
                chunkICPOFSXXValue121,
                chunkICPOFSXXValue23,
              )),
            chunkICPOFSXXValue139.svgFilters === true &&
              (chunkICPOFSXXHelper3(
                chunkICPOFSXXValue120,
                chunkICPOFSXXValue15,
              ),
              chunkICPOFSXXHelper3(chunkICPOFSXXValue121, chunkICPOFSXXValue21),
              chunkICPOFSXXHelper3(
                chunkICPOFSXXValue121,
                chunkICPOFSXXValue23,
              )),
            chunkICPOFSXXValue139.mathMl === true &&
              (chunkICPOFSXXHelper3(
                chunkICPOFSXXValue120,
                chunkICPOFSXXValue17,
              ),
              chunkICPOFSXXHelper3(chunkICPOFSXXValue121, chunkICPOFSXXValue22),
              chunkICPOFSXXHelper3(
                chunkICPOFSXXValue121,
                chunkICPOFSXXValue23,
              ))),
          chunkICPOFSXXValue12(chunkICPOFSXXValue177, "ADD_TAGS") ||
            (chunkICPOFSXXValue125.tagCheck = null),
          chunkICPOFSXXValue12(chunkICPOFSXXValue177, "ADD_ATTR") ||
            (chunkICPOFSXXValue125.attributeCheck = null),
          chunkICPOFSXXValue177.ADD_TAGS &&
            (typeof chunkICPOFSXXValue177.ADD_TAGS == "function"
              ? (chunkICPOFSXXValue125.tagCheck =
                  chunkICPOFSXXValue177.ADD_TAGS)
              : (chunkICPOFSXXValue120 === __chunkICPOFSXXS &&
                  (chunkICPOFSXXValue120 = chunkICPOFSXXHelper5(
                    chunkICPOFSXXValue120,
                  )),
                chunkICPOFSXXHelper3(
                  chunkICPOFSXXValue120,
                  chunkICPOFSXXValue177.ADD_TAGS,
                  chunkICPOFSXXValue152,
                ))),
          chunkICPOFSXXValue177.ADD_ATTR &&
            (typeof chunkICPOFSXXValue177.ADD_ATTR == "function"
              ? (chunkICPOFSXXValue125.attributeCheck =
                  chunkICPOFSXXValue177.ADD_ATTR)
              : (chunkICPOFSXXValue121 === __chunkICPOFSXXR &&
                  (chunkICPOFSXXValue121 = chunkICPOFSXXHelper5(
                    chunkICPOFSXXValue121,
                  )),
                chunkICPOFSXXHelper3(
                  chunkICPOFSXXValue121,
                  chunkICPOFSXXValue177.ADD_ATTR,
                  chunkICPOFSXXValue152,
                ))),
          chunkICPOFSXXValue177.ADD_URI_SAFE_ATTR &&
            chunkICPOFSXXHelper3(
              __chunkICPOFSXXY,
              chunkICPOFSXXValue177.ADD_URI_SAFE_ATTR,
              chunkICPOFSXXValue152,
            ),
          chunkICPOFSXXValue177.FORBID_CONTENTS &&
            (chunkICPOFSXXValue140 === chunkICPOFSXXValue141 &&
              (chunkICPOFSXXValue140 = chunkICPOFSXXHelper5(
                chunkICPOFSXXValue140,
              )),
            chunkICPOFSXXHelper3(
              chunkICPOFSXXValue140,
              chunkICPOFSXXValue177.FORBID_CONTENTS,
              chunkICPOFSXXValue152,
            )),
          chunkICPOFSXXValue177.ADD_FORBID_CONTENTS &&
            (chunkICPOFSXXValue140 === chunkICPOFSXXValue141 &&
              (chunkICPOFSXXValue140 = chunkICPOFSXXHelper5(
                chunkICPOFSXXValue140,
              )),
            chunkICPOFSXXHelper3(
              chunkICPOFSXXValue140,
              chunkICPOFSXXValue177.ADD_FORBID_CONTENTS,
              chunkICPOFSXXValue152,
            )),
          chunkICPOFSXXValue137 && (chunkICPOFSXXValue120["#text"] = true),
          chunkICPOFSXXValue130 &&
            chunkICPOFSXXHelper3(chunkICPOFSXXValue120, [
              "html",
              "head",
              "body",
            ]),
          chunkICPOFSXXValue120.table &&
            (chunkICPOFSXXHelper3(chunkICPOFSXXValue120, ["tbody"]),
            delete chunkICPOFSXXValue123.tbody),
          chunkICPOFSXXValue177.TRUSTED_TYPES_POLICY)
        ) {
          if (
            typeof chunkICPOFSXXValue177.TRUSTED_TYPES_POLICY.createHTML !=
            "function"
          )
            throw _e(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.',
            );
          if (
            typeof chunkICPOFSXXValue177.TRUSTED_TYPES_POLICY.createScriptURL !=
            "function"
          )
            throw _e(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.',
            );
          chunkICPOFSXXValue117 = chunkICPOFSXXValue177.TRUSTED_TYPES_POLICY;
          chunkICPOFSXXValue118 = chunkICPOFSXXValue117.createHTML("");
        } else {
          chunkICPOFSXXValue117 === undefined &&
            (chunkICPOFSXXValue117 = chunkICPOFSXXValue37(
              trustedTypes,
              chunkICPOFSXXValue110,
            ));
          chunkICPOFSXXValue117 !== null &&
            typeof chunkICPOFSXXValue118 == "string" &&
            (chunkICPOFSXXValue118 = chunkICPOFSXXValue117.createHTML(""));
        }
        freeze && freeze(chunkICPOFSXXValue177);
        ___chunkICPOFSXXG = chunkICPOFSXXValue177;
      }
    },
    ___chunkICPOFSXXH = chunkICPOFSXXHelper3({}, [
      ...chunkICPOFSXXValue14,
      ...chunkICPOFSXXValue15,
      ...chunkICPOFSXXValue16,
    ]),
    ___chunkICPOFSXXY = chunkICPOFSXXHelper3({}, [
      ...chunkICPOFSXXValue17,
      ...chunkICPOFSXXValue18,
    ]),
    chunkICPOFSXXValue153 = function (chunkICPOFSXXParam17) {
      let chunkICPOFSXXValue199 = chunkICPOFSXXValue116(chunkICPOFSXXParam17);
      (!chunkICPOFSXXValue199 || !chunkICPOFSXXValue199.tagName) &&
        (chunkICPOFSXXValue199 = {
          namespaceURI: __chunkICPOFSXXD,
          tagName: "template",
        });
      let chunkICPOFSXXValue200 = chunkICPOFSXXValue6(
          chunkICPOFSXXParam17.tagName,
        ),
        chunkICPOFSXXValue201 = chunkICPOFSXXValue6(
          chunkICPOFSXXValue199.tagName,
        );
      return chunkICPOFSXXValue148[chunkICPOFSXXParam17.namespaceURI]
        ? chunkICPOFSXXParam17.namespaceURI === "http://www.w3.org/2000/svg"
          ? chunkICPOFSXXValue199.namespaceURI ===
            "http://www.w3.org/1999/xhtml"
            ? chunkICPOFSXXValue200 === "svg"
            : chunkICPOFSXXValue199.namespaceURI ===
                "http://www.w3.org/1998/Math/MathML"
              ? chunkICPOFSXXValue200 === "svg" &&
                (chunkICPOFSXXValue201 === "annotation-xml" ||
                  __chunkICPOFSXXH[chunkICPOFSXXValue201])
              : !!___chunkICPOFSXXH[chunkICPOFSXXValue200]
          : chunkICPOFSXXParam17.namespaceURI ===
              "http://www.w3.org/1998/Math/MathML"
            ? chunkICPOFSXXValue199.namespaceURI ===
              "http://www.w3.org/1999/xhtml"
              ? chunkICPOFSXXValue200 === "math"
              : chunkICPOFSXXValue199.namespaceURI ===
                  "http://www.w3.org/2000/svg"
                ? chunkICPOFSXXValue200 === "math" &&
                  chunkICPOFSXXValue149[chunkICPOFSXXValue201]
                : !!___chunkICPOFSXXY[chunkICPOFSXXValue200]
            : chunkICPOFSXXParam17.namespaceURI ===
                "http://www.w3.org/1999/xhtml"
              ? (chunkICPOFSXXValue199.namespaceURI ===
                  "http://www.w3.org/2000/svg" &&
                  !chunkICPOFSXXValue149[chunkICPOFSXXValue201]) ||
                (chunkICPOFSXXValue199.namespaceURI ===
                  "http://www.w3.org/1998/Math/MathML" &&
                  !__chunkICPOFSXXH[chunkICPOFSXXValue201])
                ? false
                : !___chunkICPOFSXXY[chunkICPOFSXXValue200] &&
                  (chunkICPOFSXXValue150[chunkICPOFSXXValue200] ||
                    !___chunkICPOFSXXH[chunkICPOFSXXValue200])
              : !!(
                  chunkICPOFSXXValue151 === "application/xhtml+xml" &&
                  chunkICPOFSXXValue148[chunkICPOFSXXParam17.namespaceURI]
                )
        : false;
    },
    ___chunkICPOFSXXN = function (chunkICPOFSXXParam80) {
      chunkICPOFSXXValue4(chunkICPOFSXXValue108.removed, {
        element: chunkICPOFSXXParam80,
      });
      try {
        chunkICPOFSXXValue116(chunkICPOFSXXParam80).removeChild(
          chunkICPOFSXXParam80,
        );
      } catch {
        chunkICPOFSXXValue113(chunkICPOFSXXParam80);
      }
    },
    ___chunkICPOFSXXF = function (chunkICPOFSXXParam30, chunkICPOFSXXParam31) {
      try {
        chunkICPOFSXXValue4(chunkICPOFSXXValue108.removed, {
          attribute:
            chunkICPOFSXXParam31.getAttributeNode(chunkICPOFSXXParam30),
          from: chunkICPOFSXXParam31,
        });
      } catch {
        chunkICPOFSXXValue4(chunkICPOFSXXValue108.removed, {
          attribute: null,
          from: chunkICPOFSXXParam31,
        });
      }
      if (
        (chunkICPOFSXXParam31.removeAttribute(chunkICPOFSXXParam30),
        chunkICPOFSXXParam30 === "is")
      )
        if (chunkICPOFSXXValue132 || chunkICPOFSXXValue133)
          try {
            ___chunkICPOFSXXN(chunkICPOFSXXParam31);
          } catch {}
        else
          try {
            chunkICPOFSXXParam31.setAttribute(chunkICPOFSXXParam30, "");
          } catch {}
    },
    chunkICPOFSXXValue154 = function (chunkICPOFSXXParam16) {
      let chunkICPOFSXXValue195 = null,
        chunkICPOFSXXValue196 = null;
      if (at) chunkICPOFSXXParam16 = "<remove></remove>" + chunkICPOFSXXParam16;
      else {
        let chunkICPOFSXXValue337 = chunkICPOFSXXValue8(
          chunkICPOFSXXParam16,
          /^[\r\n\t ]+/,
        );
        chunkICPOFSXXValue196 =
          chunkICPOFSXXValue337 && chunkICPOFSXXValue337[0];
      }
      chunkICPOFSXXValue151 === "application/xhtml+xml" &&
        __chunkICPOFSXXD === "http://www.w3.org/1999/xhtml" &&
        (chunkICPOFSXXParam16 =
          '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
          chunkICPOFSXXParam16 +
          "</body></html>");
      let chunkICPOFSXXValue197 = chunkICPOFSXXValue117
        ? chunkICPOFSXXValue117.createHTML(chunkICPOFSXXParam16)
        : chunkICPOFSXXParam16;
      if (__chunkICPOFSXXD === "http://www.w3.org/1999/xhtml")
        try {
          chunkICPOFSXXValue195 = new DOMParser().parseFromString(
            chunkICPOFSXXValue197,
            chunkICPOFSXXValue151,
          );
        } catch {}
      if (!chunkICPOFSXXValue195 || !chunkICPOFSXXValue195.documentElement) {
        chunkICPOFSXXValue195 = implementation.createDocument(
          __chunkICPOFSXXD,
          "template",
          null,
        );
        try {
          chunkICPOFSXXValue195.documentElement.innerHTML = __chunkICPOFSXXI
            ? chunkICPOFSXXValue118
            : chunkICPOFSXXValue197;
        } catch {}
      }
      let chunkICPOFSXXValue198 =
        chunkICPOFSXXValue195.body || chunkICPOFSXXValue195.documentElement;
      return (
        chunkICPOFSXXParam16 &&
          chunkICPOFSXXValue196 &&
          chunkICPOFSXXValue198.insertBefore(
            document.createTextNode(chunkICPOFSXXValue196),
            chunkICPOFSXXValue198.childNodes[0] || null,
          ),
        __chunkICPOFSXXD === "http://www.w3.org/1999/xhtml"
          ? getElementsByTagName.call(
              chunkICPOFSXXValue195,
              chunkICPOFSXXValue130 ? "html" : "body",
            )[0]
          : chunkICPOFSXXValue130
            ? chunkICPOFSXXValue195.documentElement
            : chunkICPOFSXXValue198
      );
    },
    chunkICPOFSXXValue155 = function (chunkICPOFSXXParam55) {
      return createNodeIterator.call(
        chunkICPOFSXXParam55.ownerDocument || chunkICPOFSXXParam55,
        chunkICPOFSXXParam55,
        NodeFilter.SHOW_ELEMENT |
          NodeFilter.SHOW_COMMENT |
          NodeFilter.SHOW_TEXT |
          NodeFilter.SHOW_PROCESSING_INSTRUCTION |
          NodeFilter.SHOW_CDATA_SECTION,
        null,
      );
    },
    chunkICPOFSXXValue156 = function (chunkICPOFSXXParam21) {
      return (
        chunkICPOFSXXParam21 instanceof HTMLFormElement &&
        (typeof chunkICPOFSXXParam21.nodeName != "string" ||
          typeof chunkICPOFSXXParam21.textContent != "string" ||
          typeof chunkICPOFSXXParam21.removeChild != "function" ||
          !(chunkICPOFSXXParam21.attributes instanceof NamedNodeMap) ||
          typeof chunkICPOFSXXParam21.removeAttribute != "function" ||
          typeof chunkICPOFSXXParam21.setAttribute != "function" ||
          typeof chunkICPOFSXXParam21.namespaceURI != "string" ||
          typeof chunkICPOFSXXParam21.insertBefore != "function" ||
          typeof chunkICPOFSXXParam21.hasChildNodes != "function")
      );
    },
    chunkICPOFSXXValue157 = function (chunkICPOFSXXParam102) {
      return typeof Node == "function" && chunkICPOFSXXParam102 instanceof Node;
    };
  function __chunkICPOFSXXO(
    chunkICPOFSXXParam98,
    chunkICPOFSXXParam99,
    chunkICPOFSXXParam100,
  ) {
    chunkICPOFSXXValue1(chunkICPOFSXXParam98, (chunkICPOFSXXParam147) => {
      chunkICPOFSXXParam147.call(
        chunkICPOFSXXValue108,
        chunkICPOFSXXParam99,
        chunkICPOFSXXParam100,
        ___chunkICPOFSXXG,
      );
    });
  }
  let __chunkICPOFSXXW = function (chunkICPOFSXXParam7) {
      let chunkICPOFSXXValue188 = null;
      if (
        (__chunkICPOFSXXO(
          chunkICPOFSXXValue119.beforeSanitizeElements,
          chunkICPOFSXXParam7,
          null,
        ),
        chunkICPOFSXXValue156(chunkICPOFSXXParam7))
      )
        return (___chunkICPOFSXXN(chunkICPOFSXXParam7), true);
      let chunkICPOFSXXValue189 = chunkICPOFSXXValue152(
        chunkICPOFSXXParam7.nodeName,
      );
      if (
        (__chunkICPOFSXXO(
          chunkICPOFSXXValue119.uponSanitizeElement,
          chunkICPOFSXXParam7,
          {
            tagName: chunkICPOFSXXValue189,
            allowedTags: chunkICPOFSXXValue120,
          },
        ),
        (chunkICPOFSXXValue129 &&
          chunkICPOFSXXParam7.hasChildNodes() &&
          !chunkICPOFSXXValue157(chunkICPOFSXXParam7.firstElementChild) &&
          chunkICPOFSXXValue13(/<[/\w!]/g, chunkICPOFSXXParam7.innerHTML) &&
          chunkICPOFSXXValue13(/<[/\w!]/g, chunkICPOFSXXParam7.textContent)) ||
          chunkICPOFSXXParam7.nodeType ===
            chunkICPOFSXXValue35.progressingInstruction ||
          (chunkICPOFSXXValue129 &&
            chunkICPOFSXXParam7.nodeType === chunkICPOFSXXValue35.comment &&
            chunkICPOFSXXValue13(/<[/\w]/g, chunkICPOFSXXParam7.data)))
      )
        return (___chunkICPOFSXXN(chunkICPOFSXXParam7), true);
      if (
        !(
          chunkICPOFSXXValue125.tagCheck instanceof Function &&
          chunkICPOFSXXValue125.tagCheck(chunkICPOFSXXValue189)
        ) &&
        (!chunkICPOFSXXValue120[chunkICPOFSXXValue189] ||
          chunkICPOFSXXValue123[chunkICPOFSXXValue189])
      ) {
        if (
          !chunkICPOFSXXValue123[chunkICPOFSXXValue189] &&
          chunkICPOFSXXValue158(chunkICPOFSXXValue189) &&
          ((chunkICPOFSXXValue122.tagNameCheck instanceof RegExp &&
            chunkICPOFSXXValue13(
              chunkICPOFSXXValue122.tagNameCheck,
              chunkICPOFSXXValue189,
            )) ||
            (chunkICPOFSXXValue122.tagNameCheck instanceof Function &&
              chunkICPOFSXXValue122.tagNameCheck(chunkICPOFSXXValue189)))
        )
          return false;
        if (
          chunkICPOFSXXValue137 &&
          !chunkICPOFSXXValue140[chunkICPOFSXXValue189]
        ) {
          let chunkICPOFSXXValue222 =
              chunkICPOFSXXValue116(chunkICPOFSXXParam7) ||
              chunkICPOFSXXParam7.parentNode,
            chunkICPOFSXXValue223 =
              chunkICPOFSXXValue115(chunkICPOFSXXParam7) ||
              chunkICPOFSXXParam7.childNodes;
          if (chunkICPOFSXXValue223 && chunkICPOFSXXValue222) {
            let chunkICPOFSXXValue264 = chunkICPOFSXXValue223.length;
            for (
              let chunkICPOFSXXValue275 = chunkICPOFSXXValue264 - 1;
              chunkICPOFSXXValue275 >= 0;
              --chunkICPOFSXXValue275
            ) {
              let chunkICPOFSXXValue278 = chunkICPOFSXXValue112(
                chunkICPOFSXXValue223[chunkICPOFSXXValue275],
                true,
              );
              chunkICPOFSXXValue278.__removalCount =
                (chunkICPOFSXXParam7.__removalCount || 0) + 1;
              chunkICPOFSXXValue222.insertBefore(
                chunkICPOFSXXValue278,
                chunkICPOFSXXValue114(chunkICPOFSXXParam7),
              );
            }
          }
        }
        return (___chunkICPOFSXXN(chunkICPOFSXXParam7), true);
      }
      return (chunkICPOFSXXParam7 instanceof Element &&
        !chunkICPOFSXXValue153(chunkICPOFSXXParam7)) ||
        ((chunkICPOFSXXValue189 === "noscript" ||
          chunkICPOFSXXValue189 === "noembed" ||
          chunkICPOFSXXValue189 === "noframes") &&
          chunkICPOFSXXValue13(
            /<\/no(script|embed|frames)/i,
            chunkICPOFSXXParam7.innerHTML,
          ))
        ? (___chunkICPOFSXXN(chunkICPOFSXXParam7), true)
        : (_chunkICPOFSXXE &&
            chunkICPOFSXXParam7.nodeType === chunkICPOFSXXValue35.text &&
            ((chunkICPOFSXXValue188 = chunkICPOFSXXParam7.textContent),
            chunkICPOFSXXValue1(
              [MUSTACHE_EXPR, __chunkICPOFSXXZ, __chunkICPOFSXXG],
              (chunkICPOFSXXParam132) => {
                chunkICPOFSXXValue188 = chunkICPOFSXXValue9(
                  chunkICPOFSXXValue188,
                  chunkICPOFSXXParam132,
                  " ",
                );
              },
            ),
            chunkICPOFSXXParam7.textContent !== chunkICPOFSXXValue188 &&
              (chunkICPOFSXXValue4(chunkICPOFSXXValue108.removed, {
                element: chunkICPOFSXXParam7.cloneNode(),
              }),
              (chunkICPOFSXXParam7.textContent = chunkICPOFSXXValue188))),
          __chunkICPOFSXXO(
            chunkICPOFSXXValue119.afterSanitizeElements,
            chunkICPOFSXXParam7,
            null,
          ),
          false);
    },
    __chunkICPOFSXXA = function (
      chunkICPOFSXXParam8,
      chunkICPOFSXXParam9,
      chunkICPOFSXXParam10,
    ) {
      if (
        chunkICPOFSXXValue124[chunkICPOFSXXParam9] ||
        (chunkICPOFSXXValue135 &&
          (chunkICPOFSXXParam9 === "id" || chunkICPOFSXXParam9 === "name") &&
          (chunkICPOFSXXParam10 in document ||
            chunkICPOFSXXParam10 in ___chunkICPOFSXXZ))
      )
        return false;
      if (
        !(
          chunkICPOFSXXValue126 &&
          !chunkICPOFSXXValue124[chunkICPOFSXXParam9] &&
          chunkICPOFSXXValue13(__chunkICPOFSXXM, chunkICPOFSXXParam9)
        ) &&
        !($e && chunkICPOFSXXValue13(ARIA_ATTR, chunkICPOFSXXParam9)) &&
        !(
          chunkICPOFSXXValue125.attributeCheck instanceof Function &&
          chunkICPOFSXXValue125.attributeCheck(
            chunkICPOFSXXParam9,
            chunkICPOFSXXParam8,
          )
        )
      ) {
        if (
          !chunkICPOFSXXValue121[chunkICPOFSXXParam9] ||
          chunkICPOFSXXValue124[chunkICPOFSXXParam9]
        ) {
          if (
            !(
              (chunkICPOFSXXValue158(chunkICPOFSXXParam8) &&
                ((chunkICPOFSXXValue122.tagNameCheck instanceof RegExp &&
                  chunkICPOFSXXValue13(
                    chunkICPOFSXXValue122.tagNameCheck,
                    chunkICPOFSXXParam8,
                  )) ||
                  (chunkICPOFSXXValue122.tagNameCheck instanceof Function &&
                    chunkICPOFSXXValue122.tagNameCheck(chunkICPOFSXXParam8))) &&
                ((chunkICPOFSXXValue122.attributeNameCheck instanceof RegExp &&
                  chunkICPOFSXXValue13(
                    chunkICPOFSXXValue122.attributeNameCheck,
                    chunkICPOFSXXParam9,
                  )) ||
                  (chunkICPOFSXXValue122.attributeNameCheck instanceof
                    Function &&
                    chunkICPOFSXXValue122.attributeNameCheck(
                      chunkICPOFSXXParam9,
                      chunkICPOFSXXParam8,
                    )))) ||
              (chunkICPOFSXXParam9 === "is" &&
                chunkICPOFSXXValue122.allowCustomizedBuiltInElements &&
                ((chunkICPOFSXXValue122.tagNameCheck instanceof RegExp &&
                  chunkICPOFSXXValue13(
                    chunkICPOFSXXValue122.tagNameCheck,
                    chunkICPOFSXXParam10,
                  )) ||
                  (chunkICPOFSXXValue122.tagNameCheck instanceof Function &&
                    chunkICPOFSXXValue122.tagNameCheck(chunkICPOFSXXParam10))))
            )
          )
            return false;
        } else if (
          !__chunkICPOFSXXY[chunkICPOFSXXParam9] &&
          !chunkICPOFSXXValue13(
            __chunkICPOFSXXN,
            chunkICPOFSXXValue9(chunkICPOFSXXParam10, __chunkICPOFSXXP, ""),
          ) &&
          !(
            (chunkICPOFSXXParam9 === "src" ||
              chunkICPOFSXXParam9 === "xlink:href" ||
              chunkICPOFSXXParam9 === "href") &&
            chunkICPOFSXXParam8 !== "script" &&
            chunkICPOFSXXValue10(chunkICPOFSXXParam10, "data:") === 0 &&
            chunkICPOFSXXValue142[chunkICPOFSXXParam8]
          ) &&
          !(
            chunkICPOFSXXValue127 &&
            !chunkICPOFSXXValue13(
              __chunkICPOFSXXT,
              chunkICPOFSXXValue9(chunkICPOFSXXParam10, __chunkICPOFSXXP, ""),
            )
          ) &&
          chunkICPOFSXXParam10
        )
          return false;
      }
      return true;
    },
    chunkICPOFSXXValue158 = function (chunkICPOFSXXParam108) {
      return (
        chunkICPOFSXXParam108 !== "annotation-xml" &&
        chunkICPOFSXXValue8(chunkICPOFSXXParam108, __chunkICPOFSXXF)
      );
    },
    chunkICPOFSXXValue159 = function (chunkICPOFSXXParam6) {
      __chunkICPOFSXXO(
        chunkICPOFSXXValue119.beforeSanitizeAttributes,
        chunkICPOFSXXParam6,
        null,
      );
      let { attributes } = chunkICPOFSXXParam6;
      if (!attributes || chunkICPOFSXXValue156(chunkICPOFSXXParam6)) return;
      let chunkICPOFSXXValue186 = {
          attrName: "",
          attrValue: "",
          keepAttr: true,
          allowedAttributes: chunkICPOFSXXValue121,
          forceKeepAttr: undefined,
        },
        chunkICPOFSXXValue187 = attributes.length;
      for (; chunkICPOFSXXValue187--; ) {
        let { name, namespaceURI, value } = attributes[chunkICPOFSXXValue187],
          chunkICPOFSXXValue190 = chunkICPOFSXXValue152(name),
          chunkICPOFSXXValue191 = value,
          chunkICPOFSXXValue192 =
            name === "value"
              ? chunkICPOFSXXValue191
              : chunkICPOFSXXValue11(chunkICPOFSXXValue191);
        if (
          ((chunkICPOFSXXValue186.attrName = chunkICPOFSXXValue190),
          (chunkICPOFSXXValue186.attrValue = chunkICPOFSXXValue192),
          (chunkICPOFSXXValue186.keepAttr = true),
          (chunkICPOFSXXValue186.forceKeepAttr = undefined),
          __chunkICPOFSXXO(
            chunkICPOFSXXValue119.uponSanitizeAttribute,
            chunkICPOFSXXParam6,
            chunkICPOFSXXValue186,
          ),
          (chunkICPOFSXXValue192 = chunkICPOFSXXValue186.attrValue),
          chunkICPOFSXXValue136 &&
            (chunkICPOFSXXValue190 === "id" ||
              chunkICPOFSXXValue190 === "name") &&
            (___chunkICPOFSXXF(name, chunkICPOFSXXParam6),
            (chunkICPOFSXXValue192 = "user-content-" + chunkICPOFSXXValue192)),
          chunkICPOFSXXValue129 &&
            chunkICPOFSXXValue13(
              /((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,
              chunkICPOFSXXValue192,
            ))
        ) {
          ___chunkICPOFSXXF(name, chunkICPOFSXXParam6);
          continue;
        }
        if (
          chunkICPOFSXXValue190 === "attributename" &&
          chunkICPOFSXXValue8(chunkICPOFSXXValue192, "href")
        ) {
          ___chunkICPOFSXXF(name, chunkICPOFSXXParam6);
          continue;
        }
        if (chunkICPOFSXXValue186.forceKeepAttr) continue;
        if (!chunkICPOFSXXValue186.keepAttr) {
          ___chunkICPOFSXXF(name, chunkICPOFSXXParam6);
          continue;
        }
        if (
          !chunkICPOFSXXValue128 &&
          chunkICPOFSXXValue13(/\/>/i, chunkICPOFSXXValue192)
        ) {
          ___chunkICPOFSXXF(name, chunkICPOFSXXParam6);
          continue;
        }
        _chunkICPOFSXXE &&
          chunkICPOFSXXValue1(
            [MUSTACHE_EXPR, __chunkICPOFSXXZ, __chunkICPOFSXXG],
            (chunkICPOFSXXParam133) => {
              chunkICPOFSXXValue192 = chunkICPOFSXXValue9(
                chunkICPOFSXXValue192,
                chunkICPOFSXXParam133,
                " ",
              );
            },
          );
        let chunkICPOFSXXValue193 = chunkICPOFSXXValue152(
          chunkICPOFSXXParam6.nodeName,
        );
        if (
          !__chunkICPOFSXXA(
            chunkICPOFSXXValue193,
            chunkICPOFSXXValue190,
            chunkICPOFSXXValue192,
          )
        ) {
          ___chunkICPOFSXXF(name, chunkICPOFSXXParam6);
          continue;
        }
        if (
          chunkICPOFSXXValue117 &&
          typeof trustedTypes == "object" &&
          typeof trustedTypes.getAttributeType == "function" &&
          !namespaceURI
        )
          switch (
            trustedTypes.getAttributeType(
              chunkICPOFSXXValue193,
              chunkICPOFSXXValue190,
            )
          ) {
            case "TrustedHTML":
              chunkICPOFSXXValue192 = chunkICPOFSXXValue117.createHTML(
                chunkICPOFSXXValue192,
              );
              break;
            case "TrustedScriptURL":
              chunkICPOFSXXValue192 = chunkICPOFSXXValue117.createScriptURL(
                chunkICPOFSXXValue192,
              );
              break;
          }
        if (chunkICPOFSXXValue192 !== chunkICPOFSXXValue191)
          try {
            namespaceURI
              ? chunkICPOFSXXParam6.setAttributeNS(
                  namespaceURI,
                  name,
                  chunkICPOFSXXValue192,
                )
              : chunkICPOFSXXParam6.setAttribute(name, chunkICPOFSXXValue192);
            chunkICPOFSXXValue156(chunkICPOFSXXParam6)
              ? ___chunkICPOFSXXN(chunkICPOFSXXParam6)
              : chunkICPOFSXXValue3(chunkICPOFSXXValue108.removed);
          } catch {
            ___chunkICPOFSXXF(name, chunkICPOFSXXParam6);
          }
      }
      __chunkICPOFSXXO(
        chunkICPOFSXXValue119.afterSanitizeAttributes,
        chunkICPOFSXXParam6,
        null,
      );
    },
    chunkICPOFSXXValue160 = function chunkICPOFSXXHelper9(
      chunkICPOFSXXParam41,
    ) {
      let chunkICPOFSXXValue230 = null,
        chunkICPOFSXXValue231 = chunkICPOFSXXValue155(chunkICPOFSXXParam41);
      for (
        __chunkICPOFSXXO(
          chunkICPOFSXXValue119.beforeSanitizeShadowDOM,
          chunkICPOFSXXParam41,
          null,
        );
        (chunkICPOFSXXValue230 = chunkICPOFSXXValue231.nextNode());

      ) {
        __chunkICPOFSXXO(
          chunkICPOFSXXValue119.uponSanitizeShadowNode,
          chunkICPOFSXXValue230,
          null,
        );
        __chunkICPOFSXXW(chunkICPOFSXXValue230);
        chunkICPOFSXXValue159(chunkICPOFSXXValue230);
        chunkICPOFSXXValue230.content instanceof DocumentFragment &&
          chunkICPOFSXXHelper9(chunkICPOFSXXValue230.content);
      }
      __chunkICPOFSXXO(
        chunkICPOFSXXValue119.afterSanitizeShadowDOM,
        chunkICPOFSXXParam41,
        null,
      );
    };
  return (
    (chunkICPOFSXXValue108.sanitize = function (chunkICPOFSXXParam5) {
      let chunkICPOFSXXValue179 =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {},
        chunkICPOFSXXValue180 = null,
        chunkICPOFSXXValue181 = null,
        chunkICPOFSXXValue182 = null,
        chunkICPOFSXXValue183 = null;
      if (
        ((__chunkICPOFSXXI = !chunkICPOFSXXParam5),
        __chunkICPOFSXXI && (chunkICPOFSXXParam5 = "<!-->"),
        typeof chunkICPOFSXXParam5 != "string" &&
          !chunkICPOFSXXValue157(chunkICPOFSXXParam5))
      )
        if (typeof chunkICPOFSXXParam5.toString == "function") {
          if (
            ((chunkICPOFSXXParam5 = chunkICPOFSXXParam5.toString()),
            typeof chunkICPOFSXXParam5 != "string")
          )
            throw _e("dirty is not a string, aborting");
        } else throw _e("toString is not a function");
      if (!chunkICPOFSXXValue108.isSupported) return chunkICPOFSXXParam5;
      if (
        (chunkICPOFSXXValue131 || ___chunkICPOFSXXT(chunkICPOFSXXValue179),
        (chunkICPOFSXXValue108.removed = []),
        typeof chunkICPOFSXXParam5 == "string" &&
          (chunkICPOFSXXValue138 = false),
        chunkICPOFSXXValue138)
      ) {
        if (chunkICPOFSXXParam5.nodeName) {
          let chunkICPOFSXXValue280 = chunkICPOFSXXValue152(
            chunkICPOFSXXParam5.nodeName,
          );
          if (
            !chunkICPOFSXXValue120[chunkICPOFSXXValue280] ||
            chunkICPOFSXXValue123[chunkICPOFSXXValue280]
          )
            throw _e("root node is forbidden and cannot be sanitized in-place");
        }
      } else if (chunkICPOFSXXParam5 instanceof Node) {
        chunkICPOFSXXValue180 = chunkICPOFSXXValue154("<!---->");
        chunkICPOFSXXValue181 = chunkICPOFSXXValue180.ownerDocument.importNode(
          chunkICPOFSXXParam5,
          true,
        );
        (chunkICPOFSXXValue181.nodeType === chunkICPOFSXXValue35.element &&
          chunkICPOFSXXValue181.nodeName === "BODY") ||
        chunkICPOFSXXValue181.nodeName === "HTML"
          ? (chunkICPOFSXXValue180 = chunkICPOFSXXValue181)
          : chunkICPOFSXXValue180.appendChild(chunkICPOFSXXValue181);
      } else {
        if (
          !chunkICPOFSXXValue132 &&
          !_chunkICPOFSXXE &&
          !chunkICPOFSXXValue130 &&
          chunkICPOFSXXParam5.indexOf("<") === -1
        )
          return chunkICPOFSXXValue117 && chunkICPOFSXXValue134
            ? chunkICPOFSXXValue117.createHTML(chunkICPOFSXXParam5)
            : chunkICPOFSXXParam5;
        if (
          ((chunkICPOFSXXValue180 = chunkICPOFSXXValue154(chunkICPOFSXXParam5)),
          !chunkICPOFSXXValue180)
        )
          return chunkICPOFSXXValue132
            ? null
            : chunkICPOFSXXValue134
              ? chunkICPOFSXXValue118
              : "";
      }
      chunkICPOFSXXValue180 &&
        at &&
        ___chunkICPOFSXXN(chunkICPOFSXXValue180.firstChild);
      let chunkICPOFSXXValue184 = chunkICPOFSXXValue155(
        chunkICPOFSXXValue138 ? chunkICPOFSXXParam5 : chunkICPOFSXXValue180,
      );
      for (; (chunkICPOFSXXValue182 = chunkICPOFSXXValue184.nextNode()); ) {
        __chunkICPOFSXXW(chunkICPOFSXXValue182);
        chunkICPOFSXXValue159(chunkICPOFSXXValue182);
        chunkICPOFSXXValue182.content instanceof DocumentFragment &&
          chunkICPOFSXXValue160(chunkICPOFSXXValue182.content);
      }
      if (chunkICPOFSXXValue138) return chunkICPOFSXXParam5;
      if (chunkICPOFSXXValue132) {
        if (chunkICPOFSXXValue133)
          for (
            chunkICPOFSXXValue183 = createDocumentFragment.call(
              chunkICPOFSXXValue180.ownerDocument,
            );
            chunkICPOFSXXValue180.firstChild;

          )
            chunkICPOFSXXValue183.appendChild(chunkICPOFSXXValue180.firstChild);
        else chunkICPOFSXXValue183 = chunkICPOFSXXValue180;
        return (
          (chunkICPOFSXXValue121.shadowroot ||
            chunkICPOFSXXValue121.shadowrootmode) &&
            (chunkICPOFSXXValue183 = importNode.call(
              chunkICPOFSXXValue109,
              chunkICPOFSXXValue183,
              true,
            )),
          chunkICPOFSXXValue183
        );
      }
      let chunkICPOFSXXValue185 = chunkICPOFSXXValue130
        ? chunkICPOFSXXValue180.outerHTML
        : chunkICPOFSXXValue180.innerHTML;
      return (
        chunkICPOFSXXValue130 &&
          chunkICPOFSXXValue120["!doctype"] &&
          chunkICPOFSXXValue180.ownerDocument &&
          chunkICPOFSXXValue180.ownerDocument.doctype &&
          chunkICPOFSXXValue180.ownerDocument.doctype.name &&
          chunkICPOFSXXValue13(
            chunkICPOFSXXValue32,
            chunkICPOFSXXValue180.ownerDocument.doctype.name,
          ) &&
          (chunkICPOFSXXValue185 =
            "<!DOCTYPE " +
            chunkICPOFSXXValue180.ownerDocument.doctype.name +
            ">\n" +
            chunkICPOFSXXValue185),
        _chunkICPOFSXXE &&
          chunkICPOFSXXValue1(
            [MUSTACHE_EXPR, __chunkICPOFSXXZ, __chunkICPOFSXXG],
            (chunkICPOFSXXParam134) => {
              chunkICPOFSXXValue185 = chunkICPOFSXXValue9(
                chunkICPOFSXXValue185,
                chunkICPOFSXXParam134,
                " ",
              );
            },
          ),
        chunkICPOFSXXValue117 && chunkICPOFSXXValue134
          ? chunkICPOFSXXValue117.createHTML(chunkICPOFSXXValue185)
          : chunkICPOFSXXValue185
      );
    }),
    (chunkICPOFSXXValue108.setConfig = function () {
      ___chunkICPOFSXXT(
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      );
      chunkICPOFSXXValue131 = true;
    }),
    (chunkICPOFSXXValue108.clearConfig = function () {
      ___chunkICPOFSXXG = null;
      chunkICPOFSXXValue131 = false;
    }),
    (chunkICPOFSXXValue108.isValidAttribute = function (
      chunkICPOFSXXParam105,
      chunkICPOFSXXParam106,
      chunkICPOFSXXParam107,
    ) {
      return (
        ___chunkICPOFSXXG || ___chunkICPOFSXXT({}),
        __chunkICPOFSXXA(
          chunkICPOFSXXValue152(chunkICPOFSXXParam105),
          chunkICPOFSXXValue152(chunkICPOFSXXParam106),
          chunkICPOFSXXParam107,
        )
      );
    }),
    (chunkICPOFSXXValue108.addHook = function (
      chunkICPOFSXXParam110,
      chunkICPOFSXXParam111,
    ) {
      typeof chunkICPOFSXXParam111 == "function" &&
        chunkICPOFSXXValue4(
          chunkICPOFSXXValue119[chunkICPOFSXXParam110],
          chunkICPOFSXXParam111,
        );
    }),
    (chunkICPOFSXXValue108.removeHook = function (
      chunkICPOFSXXParam76,
      chunkICPOFSXXParam77,
    ) {
      if (chunkICPOFSXXParam77 !== undefined) {
        let chunkICPOFSXXValue326 = chunkICPOFSXXValue2(
          chunkICPOFSXXValue119[chunkICPOFSXXParam76],
          chunkICPOFSXXParam77,
        );
        return chunkICPOFSXXValue326 === -1
          ? undefined
          : chunkICPOFSXXValue5(
              chunkICPOFSXXValue119[chunkICPOFSXXParam76],
              chunkICPOFSXXValue326,
              1,
            )[0];
      }
      return chunkICPOFSXXValue3(chunkICPOFSXXValue119[chunkICPOFSXXParam76]);
    }),
    (chunkICPOFSXXValue108.removeHooks = function (chunkICPOFSXXParam148) {
      chunkICPOFSXXValue119[chunkICPOFSXXParam148] = [];
    }),
    (chunkICPOFSXXValue108.removeAllHooks = function () {
      chunkICPOFSXXValue119 = chunkICPOFSXXValue38();
    }),
    chunkICPOFSXXValue108
  );
}
var chunkICPOFSXXZ = chunkICPOFSXXHelper7(),
  chunkICPOFSXXG = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s,
  chunkICPOFSXXM =
    /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi,
  chunkICPOFSXXValue39 = /\s*%%.*\n/gm,
  chunkICPOFSXXT = class extends Error {
    static {
      chunkAGHRB4JFN(this, "UnknownDiagramError");
    }
    constructor(chunkICPOFSXXParam101) {
      super(chunkICPOFSXXParam101);
      this.name = "UnknownDiagramError";
    }
  },
  chunkICPOFSXXP = {},
  chunkICPOFSXXValue40 = chunkAGHRB4JFN(
    (chunkICPOFSXXParam64, chunkICPOFSXXParam65, chunkICPOFSXXParam66) => {
      chunkICPOFSXXP[chunkICPOFSXXParam64] &&
        chunkAGHRB4JFR.warn(
          `Detector with key ${chunkICPOFSXXParam64} already exists. Overwriting.`,
        );
      chunkICPOFSXXP[chunkICPOFSXXParam64] = {
        detector: chunkICPOFSXXParam65,
        loader: chunkICPOFSXXParam66,
      };
      chunkAGHRB4JFR.debug(
        `Detector with key ${chunkICPOFSXXParam64} added${chunkICPOFSXXParam66 ? " with loader" : ""}`,
      );
    },
    "addDetector",
  ),
  chunkICPOFSXXValue41 = chunkAGHRB4JFN(
    (
      chunkICPOFSXXParam14,
      chunkICPOFSXXParam15,
      { depth = 2, clobber = false } = {},
    ) => {
      let chunkICPOFSXXValue194 = {
        depth,
        clobber,
      };
      return Array.isArray(chunkICPOFSXXParam15) &&
        !Array.isArray(chunkICPOFSXXParam14)
        ? (chunkICPOFSXXParam15.forEach((item) =>
            chunkICPOFSXXValue41(
              chunkICPOFSXXParam14,
              item,
              chunkICPOFSXXValue194,
            ),
          ),
          chunkICPOFSXXParam14)
        : Array.isArray(chunkICPOFSXXParam15) &&
            Array.isArray(chunkICPOFSXXParam14)
          ? (chunkICPOFSXXParam15.forEach((item) => {
              chunkICPOFSXXParam14.includes(item) ||
                chunkICPOFSXXParam14.push(item);
            }),
            chunkICPOFSXXParam14)
          : chunkICPOFSXXParam14 === undefined || depth <= 0
            ? typeof chunkICPOFSXXParam14 == "object" &&
              chunkICPOFSXXParam14 &&
              typeof chunkICPOFSXXParam15 == "object"
              ? Object.assign(chunkICPOFSXXParam14, chunkICPOFSXXParam15)
              : chunkICPOFSXXParam15
            : (chunkICPOFSXXParam15 !== undefined &&
                typeof chunkICPOFSXXParam14 == "object" &&
                typeof chunkICPOFSXXParam15 == "object" &&
                Object.keys(chunkICPOFSXXParam15).forEach((item) => {
                  typeof chunkICPOFSXXParam15[item] == "object" &&
                  chunkICPOFSXXParam15[item] !== null &&
                  (chunkICPOFSXXParam14[item] === undefined ||
                    typeof chunkICPOFSXXParam14[item] == "object")
                    ? (chunkICPOFSXXParam14[item] === undefined &&
                        (chunkICPOFSXXParam14[item] = Array.isArray(
                          chunkICPOFSXXParam15[item],
                        )
                          ? []
                          : {}),
                      (chunkICPOFSXXParam14[item] = chunkICPOFSXXValue41(
                        chunkICPOFSXXParam14[item],
                        chunkICPOFSXXParam15[item],
                        {
                          depth: depth - 1,
                          clobber,
                        },
                      )))
                    : (clobber ||
                        (typeof chunkICPOFSXXParam14[item] != "object" &&
                          typeof chunkICPOFSXXParam15[item] != "object")) &&
                      (chunkICPOFSXXParam14[item] = chunkICPOFSXXParam15[item]);
                }),
              chunkICPOFSXXParam14);
    },
    "assignWithDepth",
  ),
  chunkICPOFSXXR = chunkICPOFSXXValue41,
  chunkICPOFSXXValue44 = chunkAGHRB4JFN(
    (chunkICPOFSXXParam112, chunkICPOFSXXParam113) =>
      chunkICPOFSXXParam113
        ? invertN(chunkICPOFSXXParam112, {
            s: -40,
            l: 10,
          })
        : invertN(chunkICPOFSXXParam112, {
            s: -40,
            l: -10,
          }),
    "mkBorder",
  ),
  chunkICPOFSXXValue45 = class {
    static {
      chunkAGHRB4JFN(this, "Theme");
    }
    constructor() {
      this.background = "#f4f4f4";
      this.primaryColor = "#fff4dd";
      this.noteBkgColor = "#fff5ad";
      this.noteTextColor = "#333";
      this.THEME_COLOR_LIMIT = 12;
      this.radius = 5;
      this.strokeWidth = 1;
      this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
      this.fontSize = "16px";
      this.useGradient = true;
      this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))";
    }
    updateColors() {
      if (
        ((this.primaryTextColor =
          this.primaryTextColor || (this.darkMode ? "#eee" : "#333")),
        (this.secondaryColor =
          this.secondaryColor ||
          invertN(this.primaryColor, {
            h: -120,
          })),
        (this.tertiaryColor =
          this.tertiaryColor ||
          invertN(this.primaryColor, {
            h: 180,
            l: 5,
          })),
        (this.primaryBorderColor =
          this.primaryBorderColor ||
          chunkICPOFSXXValue44(this.primaryColor, this.darkMode)),
        (this.secondaryBorderColor =
          this.secondaryBorderColor ||
          chunkICPOFSXXValue44(this.secondaryColor, this.darkMode)),
        (this.tertiaryBorderColor =
          this.tertiaryBorderColor ||
          chunkICPOFSXXValue44(this.tertiaryColor, this.darkMode)),
        (this.noteBorderColor =
          this.noteBorderColor ||
          chunkICPOFSXXValue44(this.noteBkgColor, this.darkMode)),
        (this.noteBkgColor = this.noteBkgColor || "#fff5ad"),
        (this.noteTextColor = this.noteTextColor || "#333"),
        (this.secondaryTextColor =
          this.secondaryTextColor || invertT(this.secondaryColor)),
        (this.tertiaryTextColor =
          this.tertiaryTextColor || invertT(this.tertiaryColor)),
        (this.lineColor = this.lineColor || invertT(this.background)),
        (this.arrowheadColor = this.arrowheadColor || invertT(this.background)),
        (this.textColor = this.textColor || this.primaryTextColor),
        (this.border2 = this.border2 || this.tertiaryBorderColor),
        (this.nodeBkg = this.nodeBkg || this.primaryColor),
        (this.mainBkg = this.mainBkg || this.primaryColor),
        (this.nodeBorder = this.nodeBorder || this.primaryBorderColor),
        (this.clusterBkg = this.clusterBkg || this.tertiaryColor),
        (this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor),
        (this.defaultLinkColor = this.defaultLinkColor || this.lineColor),
        (this.titleColor = this.titleColor || this.tertiaryTextColor),
        (this.edgeLabelBackground =
          this.edgeLabelBackground ||
          (this.darkMode
            ? invertR(this.secondaryColor, 30)
            : this.secondaryColor)),
        (this.nodeTextColor = this.nodeTextColor || this.primaryTextColor),
        (this.actorBorder = this.actorBorder || this.primaryBorderColor),
        (this.actorBkg = this.actorBkg || this.mainBkg),
        (this.actorTextColor = this.actorTextColor || this.primaryTextColor),
        (this.actorLineColor = this.actorLineColor || this.actorBorder),
        (this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg),
        (this.signalColor = this.signalColor || this.textColor),
        (this.signalTextColor = this.signalTextColor || this.textColor),
        (this.labelBoxBorderColor =
          this.labelBoxBorderColor || this.actorBorder),
        (this.labelTextColor = this.labelTextColor || this.actorTextColor),
        (this.loopTextColor = this.loopTextColor || this.actorTextColor),
        (this.activationBorderColor =
          this.activationBorderColor || invertR(this.secondaryColor, 10)),
        (this.activationBkgColor =
          this.activationBkgColor || this.secondaryColor),
        (this.sequenceNumberColor =
          this.sequenceNumberColor || invertT(this.lineColor)),
        (this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor),
        (this.altSectionBkgColor = this.altSectionBkgColor || "white"),
        (this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor),
        (this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor),
        (this.excludeBkgColor = this.excludeBkgColor || "#eeeeee"),
        (this.taskBorderColor =
          this.taskBorderColor || this.primaryBorderColor),
        (this.taskBkgColor = this.taskBkgColor || this.primaryColor),
        (this.activeTaskBorderColor =
          this.activeTaskBorderColor || this.primaryColor),
        (this.activeTaskBkgColor =
          this.activeTaskBkgColor || invertI(this.primaryColor, 23)),
        (this.gridColor = this.gridColor || "lightgrey"),
        (this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey"),
        (this.doneTaskBorderColor = this.doneTaskBorderColor || "grey"),
        (this.critBorderColor = this.critBorderColor || "#ff8888"),
        (this.critBkgColor = this.critBkgColor || "red"),
        (this.todayLineColor = this.todayLineColor || "red"),
        (this.vertLineColor = this.vertLineColor || "navy"),
        (this.taskTextColor = this.taskTextColor || this.textColor),
        (this.taskTextOutsideColor =
          this.taskTextOutsideColor || this.textColor),
        (this.taskTextLightColor = this.taskTextLightColor || this.textColor),
        (this.taskTextColor = this.taskTextColor || this.primaryTextColor),
        (this.taskTextDarkColor = this.taskTextDarkColor || this.textColor),
        (this.taskTextClickableColor =
          this.taskTextClickableColor || "#003163"),
        (this.noteFontWeight = this.noteFontWeight || "normal"),
        (this.fontWeight = this.fontWeight || "normal"),
        (this.personBorder = this.personBorder || this.primaryBorderColor),
        (this.personBkg = this.personBkg || this.mainBkg),
        this.darkMode
          ? ((this.rowOdd =
              this.rowOdd || invertR(this.mainBkg, 5) || "#ffffff"),
            (this.rowEven = this.rowEven || invertR(this.mainBkg, 10)))
          : ((this.rowOdd =
              this.rowOdd || invertI(this.mainBkg, 75) || "#ffffff"),
            (this.rowEven = this.rowEven || invertI(this.mainBkg, 5))),
        (this.transitionColor = this.transitionColor || this.lineColor),
        (this.transitionLabelColor =
          this.transitionLabelColor || this.textColor),
        (this.stateLabelColor =
          this.stateLabelColor || this.stateBkg || this.primaryTextColor),
        (this.stateBkg = this.stateBkg || this.mainBkg),
        (this.labelBackgroundColor =
          this.labelBackgroundColor || this.stateBkg),
        (this.compositeBackground =
          this.compositeBackground || this.background || this.tertiaryColor),
        (this.altBackground = this.altBackground || this.tertiaryColor),
        (this.compositeTitleBackground =
          this.compositeTitleBackground || this.mainBkg),
        (this.compositeBorder = this.compositeBorder || this.nodeBorder),
        (this.innerEndBackground = this.nodeBorder),
        (this.errorBkgColor = this.errorBkgColor || this.tertiaryColor),
        (this.errorTextColor = this.errorTextColor || this.tertiaryTextColor),
        (this.transitionColor = this.transitionColor || this.lineColor),
        (this.specialStateColor = this.lineColor),
        (this.cScale0 = this.cScale0 || this.primaryColor),
        (this.cScale1 = this.cScale1 || this.secondaryColor),
        (this.cScale2 = this.cScale2 || this.tertiaryColor),
        (this.cScale3 =
          this.cScale3 ||
          invertN(this.primaryColor, {
            h: 30,
          })),
        (this.cScale4 =
          this.cScale4 ||
          invertN(this.primaryColor, {
            h: 60,
          })),
        (this.cScale5 =
          this.cScale5 ||
          invertN(this.primaryColor, {
            h: 90,
          })),
        (this.cScale6 =
          this.cScale6 ||
          invertN(this.primaryColor, {
            h: 120,
          })),
        (this.cScale7 =
          this.cScale7 ||
          invertN(this.primaryColor, {
            h: 150,
          })),
        (this.cScale8 =
          this.cScale8 ||
          invertN(this.primaryColor, {
            h: 210,
            l: 150,
          })),
        (this.cScale9 =
          this.cScale9 ||
          invertN(this.primaryColor, {
            h: 270,
          })),
        (this.cScale10 =
          this.cScale10 ||
          invertN(this.primaryColor, {
            h: 300,
          })),
        (this.cScale11 =
          this.cScale11 ||
          invertN(this.primaryColor, {
            h: 330,
          })),
        this.darkMode)
      )
        for (
          let chunkICPOFSXXValue312 = 0;
          chunkICPOFSXXValue312 < this.THEME_COLOR_LIMIT;
          chunkICPOFSXXValue312++
        )
          this["cScale" + chunkICPOFSXXValue312] = invertR(
            this["cScale" + chunkICPOFSXXValue312],
            75,
          );
      else
        for (
          let chunkICPOFSXXValue313 = 0;
          chunkICPOFSXXValue313 < this.THEME_COLOR_LIMIT;
          chunkICPOFSXXValue313++
        )
          this["cScale" + chunkICPOFSXXValue313] = invertR(
            this["cScale" + chunkICPOFSXXValue313],
            25,
          );
      for (
        let chunkICPOFSXXValue296 = 0;
        chunkICPOFSXXValue296 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue296++
      )
        this["cScaleInv" + chunkICPOFSXXValue296] =
          this["cScaleInv" + chunkICPOFSXXValue296] ||
          invertT(this["cScale" + chunkICPOFSXXValue296]);
      for (
        let chunkICPOFSXXValue252 = 0;
        chunkICPOFSXXValue252 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue252++
      )
        this.darkMode
          ? (this["cScalePeer" + chunkICPOFSXXValue252] =
              this["cScalePeer" + chunkICPOFSXXValue252] ||
              invertI(this["cScale" + chunkICPOFSXXValue252], 10))
          : (this["cScalePeer" + chunkICPOFSXXValue252] =
              this["cScalePeer" + chunkICPOFSXXValue252] ||
              invertR(this["cScale" + chunkICPOFSXXValue252], 10));
      this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
      for (
        let chunkICPOFSXXValue287 = 0;
        chunkICPOFSXXValue287 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue287++
      )
        this["cScaleLabel" + chunkICPOFSXXValue287] =
          this["cScaleLabel" + chunkICPOFSXXValue287] || this.scaleLabelColor;
      let chunkICPOFSXXValue161 = this.darkMode ? -4 : -1;
      for (
        let chunkICPOFSXXValue232 = 0;
        chunkICPOFSXXValue232 < 5;
        chunkICPOFSXXValue232++
      ) {
        this["surface" + chunkICPOFSXXValue232] =
          this["surface" + chunkICPOFSXXValue232] ||
          invertN(this.mainBkg, {
            h: 180,
            s: -15,
            l: chunkICPOFSXXValue161 * (5 + chunkICPOFSXXValue232 * 3),
          });
        this["surfacePeer" + chunkICPOFSXXValue232] =
          this["surfacePeer" + chunkICPOFSXXValue232] ||
          invertN(this.mainBkg, {
            h: 180,
            s: -15,
            l: chunkICPOFSXXValue161 * (8 + chunkICPOFSXXValue232 * 3),
          });
      }
      this.classText = this.classText || this.textColor;
      this.fillType0 = this.fillType0 || this.primaryColor;
      this.fillType1 = this.fillType1 || this.secondaryColor;
      this.fillType2 =
        this.fillType2 ||
        invertN(this.primaryColor, {
          h: 64,
        });
      this.fillType3 =
        this.fillType3 ||
        invertN(this.secondaryColor, {
          h: 64,
        });
      this.fillType4 =
        this.fillType4 ||
        invertN(this.primaryColor, {
          h: -64,
        });
      this.fillType5 =
        this.fillType5 ||
        invertN(this.secondaryColor, {
          h: -64,
        });
      this.fillType6 =
        this.fillType6 ||
        invertN(this.primaryColor, {
          h: 128,
        });
      this.fillType7 =
        this.fillType7 ||
        invertN(this.secondaryColor, {
          h: 128,
        });
      this.pie1 = this.pie1 || this.primaryColor;
      this.pie2 = this.pie2 || this.secondaryColor;
      this.pie3 = this.pie3 || this.tertiaryColor;
      this.pie4 =
        this.pie4 ||
        invertN(this.primaryColor, {
          l: -10,
        });
      this.pie5 =
        this.pie5 ||
        invertN(this.secondaryColor, {
          l: -10,
        });
      this.pie6 =
        this.pie6 ||
        invertN(this.tertiaryColor, {
          l: -10,
        });
      this.pie7 =
        this.pie7 ||
        invertN(this.primaryColor, {
          h: 60,
          l: -10,
        });
      this.pie8 =
        this.pie8 ||
        invertN(this.primaryColor, {
          h: -60,
          l: -10,
        });
      this.pie9 =
        this.pie9 ||
        invertN(this.primaryColor, {
          h: 120,
          l: 0,
        });
      this.pie10 =
        this.pie10 ||
        invertN(this.primaryColor, {
          h: 60,
          l: -20,
        });
      this.pie11 =
        this.pie11 ||
        invertN(this.primaryColor, {
          h: -60,
          l: -20,
        });
      this.pie12 =
        this.pie12 ||
        invertN(this.primaryColor, {
          h: 120,
          l: -10,
        });
      this.pieTitleTextSize = this.pieTitleTextSize || "25px";
      this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
      this.pieSectionTextSize = this.pieSectionTextSize || "17px";
      this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
      this.pieLegendTextSize = this.pieLegendTextSize || "17px";
      this.pieLegendTextColor =
        this.pieLegendTextColor || this.taskTextDarkColor;
      this.pieStrokeColor = this.pieStrokeColor || "black";
      this.pieStrokeWidth = this.pieStrokeWidth || "2px";
      this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
      this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
      this.pieOpacity = this.pieOpacity || "0.7";
      this.venn1 =
        this.venn1 ??
        invertN(this.primaryColor, {
          l: -30,
        });
      this.venn2 =
        this.venn2 ??
        invertN(this.secondaryColor, {
          l: -30,
        });
      this.venn3 =
        this.venn3 ??
        invertN(this.tertiaryColor, {
          l: -30,
        });
      this.venn4 =
        this.venn4 ??
        invertN(this.primaryColor, {
          h: 60,
          l: -30,
        });
      this.venn5 =
        this.venn5 ??
        invertN(this.primaryColor, {
          h: -60,
          l: -30,
        });
      this.venn6 =
        this.venn6 ??
        invertN(this.secondaryColor, {
          h: 60,
          l: -30,
        });
      this.venn7 =
        this.venn7 ??
        invertN(this.primaryColor, {
          h: 120,
          l: -30,
        });
      this.venn8 =
        this.venn8 ??
        invertN(this.secondaryColor, {
          h: 120,
          l: -30,
        });
      this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor;
      this.vennSetTextColor = this.vennSetTextColor ?? this.textColor;
      this.radar = {
        axisColor: this.radar?.axisColor || this.lineColor,
        axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
        axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
        curveOpacity: this.radar?.curveOpacity || 0.5,
        curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
        graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
        graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
        graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
        legendBoxSize: this.radar?.legendBoxSize || 12,
        legendFontSize: this.radar?.legendFontSize || 12,
      };
      this.archEdgeColor = this.archEdgeColor || "#777";
      this.archEdgeArrowColor = this.archEdgeArrowColor || "#777";
      this.archEdgeWidth = this.archEdgeWidth || "3";
      this.archGroupBorderColor = this.archGroupBorderColor || "#000";
      this.archGroupBorderWidth = this.archGroupBorderWidth || "2px";
      this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
      this.quadrant2Fill =
        this.quadrant2Fill ||
        invertN(this.primaryColor, {
          r: 5,
          g: 5,
          b: 5,
        });
      this.quadrant3Fill =
        this.quadrant3Fill ||
        invertN(this.primaryColor, {
          r: 10,
          g: 10,
          b: 10,
        });
      this.quadrant4Fill =
        this.quadrant4Fill ||
        invertN(this.primaryColor, {
          r: 15,
          g: 15,
          b: 15,
        });
      this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
      this.quadrant2TextFill =
        this.quadrant2TextFill ||
        invertN(this.primaryTextColor, {
          r: -5,
          g: -5,
          b: -5,
        });
      this.quadrant3TextFill =
        this.quadrant3TextFill ||
        invertN(this.primaryTextColor, {
          r: -10,
          g: -10,
          b: -10,
        });
      this.quadrant4TextFill =
        this.quadrant4TextFill ||
        invertN(this.primaryTextColor, {
          r: -15,
          g: -15,
          b: -15,
        });
      this.quadrantPointFill =
        this.quadrantPointFill || invertO(this.quadrant1Fill)
          ? invertI(this.quadrant1Fill)
          : invertR(this.quadrant1Fill);
      this.quadrantPointTextFill =
        this.quadrantPointTextFill || this.primaryTextColor;
      this.quadrantXAxisTextFill =
        this.quadrantXAxisTextFill || this.primaryTextColor;
      this.quadrantYAxisTextFill =
        this.quadrantYAxisTextFill || this.primaryTextColor;
      this.quadrantInternalBorderStrokeFill =
        this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantExternalBorderStrokeFill =
        this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
      this.xyChart = {
        backgroundColor: this.xyChart?.backgroundColor || this.background,
        titleColor: this.xyChart?.titleColor || this.primaryTextColor,
        dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
        xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
        xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
        xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
        xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
        yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
        yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
        yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
        yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
        plotColorPalette:
          this.xyChart?.plotColorPalette ||
          "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0",
      };
      this.requirementBackground =
        this.requirementBackground || this.primaryColor;
      this.requirementBorderColor =
        this.requirementBorderColor || this.primaryBorderColor;
      this.requirementBorderSize = this.requirementBorderSize || "1";
      this.requirementTextColor =
        this.requirementTextColor || this.primaryTextColor;
      this.relationColor = this.relationColor || this.lineColor;
      this.relationLabelBackground =
        this.relationLabelBackground ||
        (this.darkMode
          ? invertR(this.secondaryColor, 30)
          : this.secondaryColor);
      this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
      this.git0 = this.git0 || this.primaryColor;
      this.git1 = this.git1 || this.secondaryColor;
      this.git2 = this.git2 || this.tertiaryColor;
      this.git3 =
        this.git3 ||
        invertN(this.primaryColor, {
          h: -30,
        });
      this.git4 =
        this.git4 ||
        invertN(this.primaryColor, {
          h: -60,
        });
      this.git5 =
        this.git5 ||
        invertN(this.primaryColor, {
          h: -90,
        });
      this.git6 =
        this.git6 ||
        invertN(this.primaryColor, {
          h: 60,
        });
      this.git7 =
        this.git7 ||
        invertN(this.primaryColor, {
          h: 120,
        });
      this.darkMode
        ? ((this.git0 = invertI(this.git0, 25)),
          (this.git1 = invertI(this.git1, 25)),
          (this.git2 = invertI(this.git2, 25)),
          (this.git3 = invertI(this.git3, 25)),
          (this.git4 = invertI(this.git4, 25)),
          (this.git5 = invertI(this.git5, 25)),
          (this.git6 = invertI(this.git6, 25)),
          (this.git7 = invertI(this.git7, 25)))
        : ((this.git0 = invertR(this.git0, 25)),
          (this.git1 = invertR(this.git1, 25)),
          (this.git2 = invertR(this.git2, 25)),
          (this.git3 = invertR(this.git3, 25)),
          (this.git4 = invertR(this.git4, 25)),
          (this.git5 = invertR(this.git5, 25)),
          (this.git6 = invertR(this.git6, 25)),
          (this.git7 = invertR(this.git7, 25)));
      this.gitInv0 = this.gitInv0 || invertT(this.git0);
      this.gitInv1 = this.gitInv1 || invertT(this.git1);
      this.gitInv2 = this.gitInv2 || invertT(this.git2);
      this.gitInv3 = this.gitInv3 || invertT(this.git3);
      this.gitInv4 = this.gitInv4 || invertT(this.git4);
      this.gitInv5 = this.gitInv5 || invertT(this.git5);
      this.gitInv6 = this.gitInv6 || invertT(this.git6);
      this.gitInv7 = this.gitInv7 || invertT(this.git7);
      this.branchLabelColor =
        this.branchLabelColor ||
        (this.darkMode ? "black" : this.labelTextColor);
      this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor;
      this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor;
      this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor;
      this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor;
      this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor;
      this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor;
      this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor;
      this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor;
      this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
      this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
      this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
      this.tagLabelFontSize = this.tagLabelFontSize || "10px";
      this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
      this.commitLabelBackground =
        this.commitLabelBackground || this.secondaryColor;
      this.commitLabelFontSize = this.commitLabelFontSize || "10px";
      this.attributeBackgroundColorOdd =
        this.attributeBackgroundColorOdd || "#ffffff";
      this.attributeBackgroundColorEven =
        this.attributeBackgroundColorEven || "#f2f2f2";
      this.gradientStart = this.primaryBorderColor;
      this.gradientStop = this.secondaryBorderColor;
    }
    calculate(chunkICPOFSXXParam42) {
      if (typeof chunkICPOFSXXParam42 != "object") {
        this.updateColors();
        return;
      }
      let chunkICPOFSXXValue242 = Object.keys(chunkICPOFSXXParam42);
      chunkICPOFSXXValue242.forEach((item) => {
        this[item] = chunkICPOFSXXParam42[item];
      });
      this.updateColors();
      chunkICPOFSXXValue242.forEach((item) => {
        this[item] = chunkICPOFSXXParam42[item];
      });
    }
  },
  $e = chunkAGHRB4JFN((chunkICPOFSXXParam121) => {
    let chunkICPOFSXXValue345 = new chunkICPOFSXXValue45();
    return (
      chunkICPOFSXXValue345.calculate(chunkICPOFSXXParam121),
      chunkICPOFSXXValue345
    );
  }, "getThemeVariables"),
  chunkICPOFSXXValue46 = class {
    static {
      chunkAGHRB4JFN(this, "Theme");
    }
    constructor() {
      this.background = "#333";
      this.primaryColor = "#1f2020";
      this.secondaryColor = invertI(this.primaryColor, 16);
      this.tertiaryColor = invertN(this.primaryColor, {
        h: -160,
      });
      this.primaryBorderColor = invertT(this.background);
      this.secondaryBorderColor = chunkICPOFSXXValue44(
        this.secondaryColor,
        this.darkMode,
      );
      this.tertiaryBorderColor = chunkICPOFSXXValue44(
        this.tertiaryColor,
        this.darkMode,
      );
      this.primaryTextColor = invertT(this.primaryColor);
      this.secondaryTextColor = invertT(this.secondaryColor);
      this.tertiaryTextColor = invertT(this.tertiaryColor);
      this.lineColor = invertT(this.background);
      this.textColor = invertT(this.background);
      this.mainBkg = "#1f2020";
      this.secondBkg = "calculated";
      this.mainContrastColor = "lightgrey";
      this.darkTextColor = invertI(invertT("#323D47"), 10);
      this.lineColor = "calculated";
      this.border1 = "#ccc";
      this.border2 = invertS(255, 255, 255, 0.25);
      this.arrowheadColor = "calculated";
      this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
      this.fontSize = "16px";
      this.labelBackground = "#181818";
      this.textColor = "#ccc";
      this.THEME_COLOR_LIMIT = 12;
      this.radius = 5;
      this.strokeWidth = 1;
      this.nodeBkg = "calculated";
      this.nodeBorder = "calculated";
      this.clusterBkg = "calculated";
      this.clusterBorder = "calculated";
      this.defaultLinkColor = "calculated";
      this.titleColor = "#F9FFFE";
      this.edgeLabelBackground = "calculated";
      this.actorBorder = "calculated";
      this.actorBkg = "calculated";
      this.actorTextColor = "calculated";
      this.actorLineColor = "calculated";
      this.signalColor = "calculated";
      this.signalTextColor = "calculated";
      this.labelBoxBkgColor = "calculated";
      this.labelBoxBorderColor = "calculated";
      this.labelTextColor = "calculated";
      this.loopTextColor = "calculated";
      this.noteBorderColor = "calculated";
      this.noteBkgColor = "#fff5ad";
      this.noteTextColor = "calculated";
      this.activationBorderColor = "calculated";
      this.activationBkgColor = "calculated";
      this.sequenceNumberColor = "black";
      this.clusterBkg = "#302F3D";
      this.sectionBkgColor = invertR("#EAE8D9", 30);
      this.altSectionBkgColor = "calculated";
      this.sectionBkgColor2 = "#EAE8D9";
      this.excludeBkgColor = invertR(this.sectionBkgColor, 10);
      this.taskBorderColor = invertS(255, 255, 255, 70);
      this.taskBkgColor = "calculated";
      this.taskTextColor = "calculated";
      this.taskTextLightColor = "calculated";
      this.taskTextOutsideColor = "calculated";
      this.taskTextClickableColor = "#003163";
      this.activeTaskBorderColor = invertS(255, 255, 255, 50);
      this.activeTaskBkgColor = "#81B1DB";
      this.gridColor = "calculated";
      this.doneTaskBkgColor = "calculated";
      this.doneTaskBorderColor = "grey";
      this.critBorderColor = "#E83737";
      this.critBkgColor = "#E83737";
      this.taskTextDarkColor = "calculated";
      this.todayLineColor = "#DB5757";
      this.vertLineColor = "#00BFFF";
      this.personBorder = this.primaryBorderColor;
      this.personBkg = this.mainBkg;
      this.archEdgeColor = "calculated";
      this.archEdgeArrowColor = "calculated";
      this.archEdgeWidth = "3";
      this.archGroupBorderColor = this.primaryBorderColor;
      this.archGroupBorderWidth = "2px";
      this.rowOdd = this.rowOdd || invertI(this.mainBkg, 5) || "#ffffff";
      this.rowEven = this.rowEven || invertR(this.mainBkg, 10);
      this.labelColor = "calculated";
      this.errorBkgColor = "#a44141";
      this.errorTextColor = "#ddd";
      this.useGradient = true;
      this.gradientStart = this.primaryBorderColor;
      this.gradientStop = this.secondaryBorderColor;
      this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))";
      this.noteFontWeight = this.noteFontWeight || "normal";
      this.fontWeight = this.fontWeight || "normal";
    }
    updateColors() {
      this.secondBkg = invertI(this.mainBkg, 16);
      this.lineColor = this.mainContrastColor;
      this.arrowheadColor = this.mainContrastColor;
      this.nodeBkg = this.mainBkg;
      this.nodeBorder = this.border1;
      this.clusterBkg = this.secondBkg;
      this.clusterBorder = this.border2;
      this.defaultLinkColor = this.lineColor;
      this.edgeLabelBackground = invertI(this.labelBackground, 25);
      this.actorBorder = this.border1;
      this.actorBkg = this.mainBkg;
      this.actorTextColor = this.mainContrastColor;
      this.actorLineColor = this.actorBorder;
      this.signalColor = this.mainContrastColor;
      this.signalTextColor = this.mainContrastColor;
      this.labelBoxBkgColor = this.actorBkg;
      this.labelBoxBorderColor = this.actorBorder;
      this.labelTextColor = this.mainContrastColor;
      this.loopTextColor = this.mainContrastColor;
      this.noteBorderColor = this.secondaryBorderColor;
      this.noteBkgColor = this.secondBkg;
      this.noteTextColor = this.secondaryTextColor;
      this.activationBorderColor = this.border1;
      this.activationBkgColor = this.secondBkg;
      this.altSectionBkgColor = this.background;
      this.taskBkgColor = invertI(this.mainBkg, 23);
      this.taskTextColor = this.darkTextColor;
      this.taskTextLightColor = this.mainContrastColor;
      this.taskTextOutsideColor = this.taskTextLightColor;
      this.gridColor = this.mainContrastColor;
      this.doneTaskBkgColor = this.mainContrastColor;
      this.taskTextDarkColor = invertT(this.doneTaskBkgColor);
      this.archEdgeColor = this.lineColor;
      this.archEdgeArrowColor = this.lineColor;
      this.transitionColor = this.transitionColor || this.lineColor;
      this.transitionLabelColor = this.transitionLabelColor || this.textColor;
      this.stateLabelColor =
        this.stateLabelColor || this.stateBkg || this.primaryTextColor;
      this.stateBkg = this.stateBkg || this.mainBkg;
      this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
      this.compositeBackground =
        this.compositeBackground || this.background || this.tertiaryColor;
      this.altBackground = this.altBackground || "#555";
      this.compositeTitleBackground =
        this.compositeTitleBackground || this.mainBkg;
      this.compositeBorder = this.compositeBorder || this.nodeBorder;
      this.innerEndBackground = this.primaryBorderColor;
      this.specialStateColor = "#f4f4f4";
      this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
      this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
      this.fillType0 = this.primaryColor;
      this.fillType1 = this.secondaryColor;
      this.fillType2 = invertN(this.primaryColor, {
        h: 64,
      });
      this.fillType3 = invertN(this.secondaryColor, {
        h: 64,
      });
      this.fillType4 = invertN(this.primaryColor, {
        h: -64,
      });
      this.fillType5 = invertN(this.secondaryColor, {
        h: -64,
      });
      this.fillType6 = invertN(this.primaryColor, {
        h: 128,
      });
      this.fillType7 = invertN(this.secondaryColor, {
        h: 128,
      });
      this.cScale1 = this.cScale1 || "#0b0000";
      this.cScale2 = this.cScale2 || "#4d1037";
      this.cScale3 = this.cScale3 || "#3f5258";
      this.cScale4 = this.cScale4 || "#4f2f1b";
      this.cScale5 = this.cScale5 || "#6e0a0a";
      this.cScale6 = this.cScale6 || "#3b0048";
      this.cScale7 = this.cScale7 || "#995a01";
      this.cScale8 = this.cScale8 || "#154706";
      this.cScale9 = this.cScale9 || "#161722";
      this.cScale10 = this.cScale10 || "#00296f";
      this.cScale11 = this.cScale11 || "#01629c";
      this.cScale12 = this.cScale12 || "#010029";
      this.cScale0 = this.cScale0 || this.primaryColor;
      this.cScale1 = this.cScale1 || this.secondaryColor;
      this.cScale2 = this.cScale2 || this.tertiaryColor;
      this.cScale3 =
        this.cScale3 ||
        invertN(this.primaryColor, {
          h: 30,
        });
      this.cScale4 =
        this.cScale4 ||
        invertN(this.primaryColor, {
          h: 60,
        });
      this.cScale5 =
        this.cScale5 ||
        invertN(this.primaryColor, {
          h: 90,
        });
      this.cScale6 =
        this.cScale6 ||
        invertN(this.primaryColor, {
          h: 120,
        });
      this.cScale7 =
        this.cScale7 ||
        invertN(this.primaryColor, {
          h: 150,
        });
      this.cScale8 =
        this.cScale8 ||
        invertN(this.primaryColor, {
          h: 210,
        });
      this.cScale9 =
        this.cScale9 ||
        invertN(this.primaryColor, {
          h: 270,
        });
      this.cScale10 =
        this.cScale10 ||
        invertN(this.primaryColor, {
          h: 300,
        });
      this.cScale11 =
        this.cScale11 ||
        invertN(this.primaryColor, {
          h: 330,
        });
      for (
        let chunkICPOFSXXValue297 = 0;
        chunkICPOFSXXValue297 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue297++
      )
        this["cScaleInv" + chunkICPOFSXXValue297] =
          this["cScaleInv" + chunkICPOFSXXValue297] ||
          invertT(this["cScale" + chunkICPOFSXXValue297]);
      for (
        let chunkICPOFSXXValue285 = 0;
        chunkICPOFSXXValue285 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue285++
      )
        this["cScalePeer" + chunkICPOFSXXValue285] =
          this["cScalePeer" + chunkICPOFSXXValue285] ||
          invertI(this["cScale" + chunkICPOFSXXValue285], 10);
      for (
        let chunkICPOFSXXValue240 = 0;
        chunkICPOFSXXValue240 < 5;
        chunkICPOFSXXValue240++
      ) {
        this["surface" + chunkICPOFSXXValue240] =
          this["surface" + chunkICPOFSXXValue240] ||
          invertN(this.mainBkg, {
            h: 30,
            s: -30,
            l: -(-10 + chunkICPOFSXXValue240 * 4),
          });
        this["surfacePeer" + chunkICPOFSXXValue240] =
          this["surfacePeer" + chunkICPOFSXXValue240] ||
          invertN(this.mainBkg, {
            h: 30,
            s: -30,
            l: -(-7 + chunkICPOFSXXValue240 * 4),
          });
      }
      this.scaleLabelColor =
        this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
      for (
        let chunkICPOFSXXValue288 = 0;
        chunkICPOFSXXValue288 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue288++
      )
        this["cScaleLabel" + chunkICPOFSXXValue288] =
          this["cScaleLabel" + chunkICPOFSXXValue288] || this.scaleLabelColor;
      for (
        let chunkICPOFSXXValue324 = 0;
        chunkICPOFSXXValue324 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue324++
      )
        this["pie" + chunkICPOFSXXValue324] =
          this["cScale" + chunkICPOFSXXValue324];
      this.pieTitleTextSize = this.pieTitleTextSize || "25px";
      this.pieTitleTextColor = this.pieTitleTextColor || this.mainContrastColor;
      this.pieSectionTextSize = this.pieSectionTextSize || "17px";
      this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
      this.pieLegendTextSize = this.pieLegendTextSize || "17px";
      this.pieLegendTextColor =
        this.pieLegendTextColor || this.mainContrastColor;
      this.pieStrokeColor = this.pieStrokeColor || "black";
      this.pieStrokeWidth = this.pieStrokeWidth || "2px";
      this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
      this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
      this.pieOpacity = this.pieOpacity || "0.7";
      for (
        let chunkICPOFSXXValue307 = 0;
        chunkICPOFSXXValue307 < 8;
        chunkICPOFSXXValue307++
      )
        this["venn" + (chunkICPOFSXXValue307 + 1)] =
          this["venn" + (chunkICPOFSXXValue307 + 1)] ??
          invertI(this["cScale" + chunkICPOFSXXValue307], 30);
      this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor;
      this.vennSetTextColor = this.vennSetTextColor ?? this.textColor;
      this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
      this.quadrant2Fill =
        this.quadrant2Fill ||
        invertN(this.primaryColor, {
          r: 5,
          g: 5,
          b: 5,
        });
      this.quadrant3Fill =
        this.quadrant3Fill ||
        invertN(this.primaryColor, {
          r: 10,
          g: 10,
          b: 10,
        });
      this.quadrant4Fill =
        this.quadrant4Fill ||
        invertN(this.primaryColor, {
          r: 15,
          g: 15,
          b: 15,
        });
      this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
      this.quadrant2TextFill =
        this.quadrant2TextFill ||
        invertN(this.primaryTextColor, {
          r: -5,
          g: -5,
          b: -5,
        });
      this.quadrant3TextFill =
        this.quadrant3TextFill ||
        invertN(this.primaryTextColor, {
          r: -10,
          g: -10,
          b: -10,
        });
      this.quadrant4TextFill =
        this.quadrant4TextFill ||
        invertN(this.primaryTextColor, {
          r: -15,
          g: -15,
          b: -15,
        });
      this.quadrantPointFill =
        this.quadrantPointFill || invertO(this.quadrant1Fill)
          ? invertI(this.quadrant1Fill)
          : invertR(this.quadrant1Fill);
      this.quadrantPointTextFill =
        this.quadrantPointTextFill || this.primaryTextColor;
      this.quadrantXAxisTextFill =
        this.quadrantXAxisTextFill || this.primaryTextColor;
      this.quadrantYAxisTextFill =
        this.quadrantYAxisTextFill || this.primaryTextColor;
      this.quadrantInternalBorderStrokeFill =
        this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantExternalBorderStrokeFill =
        this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
      this.xyChart = {
        backgroundColor: this.xyChart?.backgroundColor || this.background,
        titleColor: this.xyChart?.titleColor || this.primaryTextColor,
        dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
        xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
        xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
        xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
        xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
        yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
        yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
        yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
        yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
        plotColorPalette:
          this.xyChart?.plotColorPalette ||
          "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22",
      };
      this.packet = {
        startByteColor: this.primaryTextColor,
        endByteColor: this.primaryTextColor,
        labelColor: this.primaryTextColor,
        titleColor: this.primaryTextColor,
        blockStrokeColor: this.primaryTextColor,
        blockFillColor: this.background,
      };
      this.radar = {
        axisColor: this.radar?.axisColor || this.lineColor,
        axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
        axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
        curveOpacity: this.radar?.curveOpacity || 0.5,
        curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
        graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
        graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
        graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
        legendBoxSize: this.radar?.legendBoxSize || 12,
        legendFontSize: this.radar?.legendFontSize || 12,
      };
      this.classText = this.primaryTextColor;
      this.requirementBackground =
        this.requirementBackground || this.primaryColor;
      this.requirementBorderColor =
        this.requirementBorderColor || this.primaryBorderColor;
      this.requirementBorderSize = this.requirementBorderSize || "1";
      this.requirementTextColor =
        this.requirementTextColor || this.primaryTextColor;
      this.relationColor = this.relationColor || this.lineColor;
      this.relationLabelBackground =
        this.relationLabelBackground ||
        (this.darkMode
          ? invertR(this.secondaryColor, 30)
          : this.secondaryColor);
      this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
      this.git0 = invertI(this.secondaryColor, 20);
      this.git1 = invertI(this.pie2 || this.secondaryColor, 20);
      this.git2 = invertI(this.pie3 || this.tertiaryColor, 20);
      this.git3 = invertI(
        this.pie4 ||
          invertN(this.primaryColor, {
            h: -30,
          }),
        20,
      );
      this.git4 = invertI(
        this.pie5 ||
          invertN(this.primaryColor, {
            h: -60,
          }),
        20,
      );
      this.git5 = invertI(
        this.pie6 ||
          invertN(this.primaryColor, {
            h: -90,
          }),
        10,
      );
      this.git6 = invertI(
        this.pie7 ||
          invertN(this.primaryColor, {
            h: 60,
          }),
        10,
      );
      this.git7 = invertI(
        this.pie8 ||
          invertN(this.primaryColor, {
            h: 120,
          }),
        20,
      );
      this.gitInv0 = this.gitInv0 || invertT(this.git0);
      this.gitInv1 = this.gitInv1 || invertT(this.git1);
      this.gitInv2 = this.gitInv2 || invertT(this.git2);
      this.gitInv3 = this.gitInv3 || invertT(this.git3);
      this.gitInv4 = this.gitInv4 || invertT(this.git4);
      this.gitInv5 = this.gitInv5 || invertT(this.git5);
      this.gitInv6 = this.gitInv6 || invertT(this.git6);
      this.gitInv7 = this.gitInv7 || invertT(this.git7);
      this.gitBranchLabel0 =
        this.gitBranchLabel0 || invertT(this.labelTextColor);
      this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
      this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
      this.gitBranchLabel3 =
        this.gitBranchLabel3 || invertT(this.labelTextColor);
      this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
      this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
      this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
      this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
      this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
      this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
      this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
      this.tagLabelFontSize = this.tagLabelFontSize || "10px";
      this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
      this.commitLabelBackground =
        this.commitLabelBackground || this.secondaryColor;
      this.commitLabelFontSize = this.commitLabelFontSize || "10px";
      this.attributeBackgroundColorOdd =
        this.attributeBackgroundColorOdd || invertI(this.background, 12);
      this.attributeBackgroundColorEven =
        this.attributeBackgroundColorEven || invertI(this.background, 2);
      this.nodeBorder = this.nodeBorder || "#999";
    }
    calculate(chunkICPOFSXXParam43) {
      if (typeof chunkICPOFSXXParam43 != "object") {
        this.updateColors();
        return;
      }
      let chunkICPOFSXXValue243 = Object.keys(chunkICPOFSXXParam43);
      chunkICPOFSXXValue243.forEach((item) => {
        this[item] = chunkICPOFSXXParam43[item];
      });
      this.updateColors();
      chunkICPOFSXXValue243.forEach((item) => {
        this[item] = chunkICPOFSXXParam43[item];
      });
    }
  },
  chunkICPOFSXXValue47 = chunkAGHRB4JFN((chunkICPOFSXXParam114) => {
    let chunkICPOFSXXValue338 = new chunkICPOFSXXValue46();
    return (
      chunkICPOFSXXValue338.calculate(chunkICPOFSXXParam114),
      chunkICPOFSXXValue338
    );
  }, "getThemeVariables"),
  chunkICPOFSXXValue48 = class {
    static {
      chunkAGHRB4JFN(this, "Theme");
    }
    constructor() {
      this.background = "#f4f4f4";
      this.primaryColor = "#ECECFF";
      this.secondaryColor = invertN(this.primaryColor, {
        h: 120,
      });
      this.secondaryColor = "#ffffde";
      this.tertiaryColor = invertN(this.primaryColor, {
        h: -160,
      });
      this.primaryBorderColor = chunkICPOFSXXValue44(
        this.primaryColor,
        this.darkMode,
      );
      this.secondaryBorderColor = chunkICPOFSXXValue44(
        this.secondaryColor,
        this.darkMode,
      );
      this.tertiaryBorderColor = chunkICPOFSXXValue44(
        this.tertiaryColor,
        this.darkMode,
      );
      this.primaryTextColor = invertT(this.primaryColor);
      this.secondaryTextColor = invertT(this.secondaryColor);
      this.tertiaryTextColor = invertT(this.tertiaryColor);
      this.lineColor = invertT(this.background);
      this.textColor = invertT(this.background);
      this.background = "white";
      this.mainBkg = "#ECECFF";
      this.secondBkg = "#ffffde";
      this.lineColor = "#333333";
      this.border1 = "#9370DB";
      this.primaryBorderColor = chunkICPOFSXXValue44(
        this.primaryColor,
        this.darkMode,
      );
      this.border2 = "#aaaa33";
      this.arrowheadColor = "#333333";
      this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
      this.fontSize = "16px";
      this.labelBackground = "rgba(232,232,232, 0.8)";
      this.textColor = "#333";
      this.THEME_COLOR_LIMIT = 12;
      this.radius = 5;
      this.strokeWidth = 1;
      this.nodeBkg = "calculated";
      this.nodeBorder = "calculated";
      this.clusterBkg = "calculated";
      this.clusterBorder = "calculated";
      this.defaultLinkColor = "calculated";
      this.titleColor = "calculated";
      this.edgeLabelBackground = "calculated";
      this.actorBorder = "calculated";
      this.actorBkg = "calculated";
      this.actorTextColor = "black";
      this.actorLineColor = "calculated";
      this.signalColor = "calculated";
      this.signalTextColor = "calculated";
      this.labelBoxBkgColor = "calculated";
      this.labelBoxBorderColor = "calculated";
      this.labelTextColor = "calculated";
      this.loopTextColor = "calculated";
      this.noteBorderColor = "calculated";
      this.noteBkgColor = "#fff5ad";
      this.noteTextColor = "calculated";
      this.activationBorderColor = "#666";
      this.activationBkgColor = "#f4f4f4";
      this.sequenceNumberColor = "white";
      this.clusterBkg = "#FBFBFF";
      this.sectionBkgColor = "calculated";
      this.altSectionBkgColor = "calculated";
      this.sectionBkgColor2 = "calculated";
      this.excludeBkgColor = "#eeeeee";
      this.taskBorderColor = "calculated";
      this.taskBkgColor = "calculated";
      this.taskTextLightColor = "calculated";
      this.taskTextColor = this.taskTextLightColor;
      this.taskTextDarkColor = "calculated";
      this.taskTextOutsideColor = this.taskTextDarkColor;
      this.taskTextClickableColor = "calculated";
      this.activeTaskBorderColor = "calculated";
      this.activeTaskBkgColor = "calculated";
      this.gridColor = "calculated";
      this.doneTaskBkgColor = "calculated";
      this.doneTaskBorderColor = "calculated";
      this.critBorderColor = "calculated";
      this.critBkgColor = "calculated";
      this.todayLineColor = "calculated";
      this.vertLineColor = "calculated";
      this.sectionBkgColor = invertS(102, 102, 255, 0.49);
      this.altSectionBkgColor = "white";
      this.sectionBkgColor2 = "#fff400";
      this.taskBorderColor = "#534fbc";
      this.taskBkgColor = "#8a90dd";
      this.taskTextLightColor = "white";
      this.taskTextColor = "calculated";
      this.taskTextDarkColor = "black";
      this.taskTextOutsideColor = "calculated";
      this.taskTextClickableColor = "#003163";
      this.activeTaskBorderColor = "#534fbc";
      this.activeTaskBkgColor = "#bfc7ff";
      this.gridColor = "lightgrey";
      this.doneTaskBkgColor = "lightgrey";
      this.doneTaskBorderColor = "grey";
      this.critBorderColor = "#ff8888";
      this.critBkgColor = "red";
      this.todayLineColor = "red";
      this.vertLineColor = "navy";
      this.noteFontWeight = this.noteFontWeight || "normal";
      this.fontWeight = this.fontWeight || "normal";
      this.personBorder = this.primaryBorderColor;
      this.personBkg = this.mainBkg;
      this.archEdgeColor = "calculated";
      this.archEdgeArrowColor = "calculated";
      this.archEdgeWidth = "3";
      this.archGroupBorderColor = this.primaryBorderColor;
      this.archGroupBorderWidth = "2px";
      this.rowOdd = "calculated";
      this.rowEven = "calculated";
      this.labelColor = "black";
      this.errorBkgColor = "#552222";
      this.errorTextColor = "#552222";
      this.useGradient = false;
      this.gradientStart = this.primaryBorderColor;
      this.gradientStop = this.secondaryBorderColor;
      this.dropShadow = "drop-shadow(1px 2px 2px rgba(185, 185, 185, 1))";
      this.updateColors();
    }
    updateColors() {
      this.cScale0 = this.cScale0 || this.primaryColor;
      this.cScale1 = this.cScale1 || this.secondaryColor;
      this.cScale2 = this.cScale2 || this.tertiaryColor;
      this.cScale3 =
        this.cScale3 ||
        invertN(this.primaryColor, {
          h: 30,
        });
      this.cScale4 =
        this.cScale4 ||
        invertN(this.primaryColor, {
          h: 60,
        });
      this.cScale5 =
        this.cScale5 ||
        invertN(this.primaryColor, {
          h: 90,
        });
      this.cScale6 =
        this.cScale6 ||
        invertN(this.primaryColor, {
          h: 120,
        });
      this.cScale7 =
        this.cScale7 ||
        invertN(this.primaryColor, {
          h: 150,
        });
      this.cScale8 =
        this.cScale8 ||
        invertN(this.primaryColor, {
          h: 210,
        });
      this.cScale9 =
        this.cScale9 ||
        invertN(this.primaryColor, {
          h: 270,
        });
      this.cScale10 =
        this.cScale10 ||
        invertN(this.primaryColor, {
          h: 300,
        });
      this.cScale11 =
        this.cScale11 ||
        invertN(this.primaryColor, {
          h: 330,
        });
      this.cScalePeer1 = this.cScalePeer1 || invertR(this.secondaryColor, 45);
      this.cScalePeer2 = this.cScalePeer2 || invertR(this.tertiaryColor, 40);
      for (
        let chunkICPOFSXXValue269 = 0;
        chunkICPOFSXXValue269 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue269++
      ) {
        this["cScale" + chunkICPOFSXXValue269] = invertR(
          this["cScale" + chunkICPOFSXXValue269],
          10,
        );
        this["cScalePeer" + chunkICPOFSXXValue269] =
          this["cScalePeer" + chunkICPOFSXXValue269] ||
          invertR(this["cScale" + chunkICPOFSXXValue269], 25);
      }
      for (
        let chunkICPOFSXXValue282 = 0;
        chunkICPOFSXXValue282 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue282++
      )
        this["cScaleInv" + chunkICPOFSXXValue282] =
          this["cScaleInv" + chunkICPOFSXXValue282] ||
          invertN(this["cScale" + chunkICPOFSXXValue282], {
            h: 180,
          });
      for (
        let chunkICPOFSXXValue260 = 0;
        chunkICPOFSXXValue260 < 5;
        chunkICPOFSXXValue260++
      ) {
        this["surface" + chunkICPOFSXXValue260] =
          this["surface" + chunkICPOFSXXValue260] ||
          invertN(this.mainBkg, {
            h: 30,
            l: -(5 + chunkICPOFSXXValue260 * 5),
          });
        this["surfacePeer" + chunkICPOFSXXValue260] =
          this["surfacePeer" + chunkICPOFSXXValue260] ||
          invertN(this.mainBkg, {
            h: 30,
            l: -(7 + chunkICPOFSXXValue260 * 5),
          });
      }
      if (
        ((this.scaleLabelColor =
          this.scaleLabelColor !== "calculated" && this.scaleLabelColor
            ? this.scaleLabelColor
            : this.labelTextColor),
        this.labelTextColor !== "calculated")
      ) {
        this.cScaleLabel0 = this.cScaleLabel0 || invertT(this.labelTextColor);
        this.cScaleLabel3 = this.cScaleLabel3 || invertT(this.labelTextColor);
        for (
          let chunkICPOFSXXValue286 = 0;
          chunkICPOFSXXValue286 < this.THEME_COLOR_LIMIT;
          chunkICPOFSXXValue286++
        )
          this["cScaleLabel" + chunkICPOFSXXValue286] =
            this["cScaleLabel" + chunkICPOFSXXValue286] || this.labelTextColor;
      }
      this.nodeBkg = this.mainBkg;
      this.nodeBorder = this.border1;
      this.clusterBkg = this.secondBkg;
      this.clusterBorder = this.border2;
      this.defaultLinkColor = this.lineColor;
      this.titleColor = this.textColor;
      this.edgeLabelBackground = this.labelBackground;
      this.actorBorder = this.border1;
      this.actorBkg = this.mainBkg;
      this.labelBoxBkgColor = this.actorBkg;
      this.signalColor = this.textColor;
      this.signalTextColor = this.textColor;
      this.labelBoxBorderColor = this.actorBorder;
      this.labelTextColor = this.actorTextColor;
      this.loopTextColor = this.actorTextColor;
      this.noteBorderColor = this.border2;
      this.noteTextColor = this.actorTextColor;
      this.actorLineColor = this.actorBorder;
      this.taskTextColor = this.taskTextLightColor;
      this.taskTextOutsideColor = this.taskTextDarkColor;
      this.archEdgeColor = this.lineColor;
      this.archEdgeArrowColor = this.lineColor;
      this.rowOdd = this.rowOdd || invertI(this.primaryColor, 75) || "#ffffff";
      this.rowEven = this.rowEven || invertI(this.primaryColor, 1);
      this.transitionColor = this.transitionColor || this.lineColor;
      this.transitionLabelColor = this.transitionLabelColor || this.textColor;
      this.stateLabelColor =
        this.stateLabelColor || this.stateBkg || this.primaryTextColor;
      this.stateBkg = this.stateBkg || this.mainBkg;
      this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
      this.compositeBackground =
        this.compositeBackground || this.background || this.tertiaryColor;
      this.altBackground = this.altBackground || "#f0f0f0";
      this.compositeTitleBackground =
        this.compositeTitleBackground || this.mainBkg;
      this.compositeBorder = this.compositeBorder || this.nodeBorder;
      this.innerEndBackground = this.nodeBorder;
      this.specialStateColor = this.lineColor;
      this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
      this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
      this.transitionColor = this.transitionColor || this.lineColor;
      this.classText = this.primaryTextColor;
      this.fillType0 = this.primaryColor;
      this.fillType1 = this.secondaryColor;
      this.fillType2 = invertN(this.primaryColor, {
        h: 64,
      });
      this.fillType3 = invertN(this.secondaryColor, {
        h: 64,
      });
      this.fillType4 = invertN(this.primaryColor, {
        h: -64,
      });
      this.fillType5 = invertN(this.secondaryColor, {
        h: -64,
      });
      this.fillType6 = invertN(this.primaryColor, {
        h: 128,
      });
      this.fillType7 = invertN(this.secondaryColor, {
        h: 128,
      });
      this.pie1 = this.pie1 || this.primaryColor;
      this.pie2 = this.pie2 || this.secondaryColor;
      this.pie3 =
        this.pie3 ||
        invertN(this.tertiaryColor, {
          l: -40,
        });
      this.pie4 =
        this.pie4 ||
        invertN(this.primaryColor, {
          l: -10,
        });
      this.pie5 =
        this.pie5 ||
        invertN(this.secondaryColor, {
          l: -30,
        });
      this.pie6 =
        this.pie6 ||
        invertN(this.tertiaryColor, {
          l: -20,
        });
      this.pie7 =
        this.pie7 ||
        invertN(this.primaryColor, {
          h: 60,
          l: -20,
        });
      this.pie8 =
        this.pie8 ||
        invertN(this.primaryColor, {
          h: -60,
          l: -40,
        });
      this.pie9 =
        this.pie9 ||
        invertN(this.primaryColor, {
          h: 120,
          l: -40,
        });
      this.pie10 =
        this.pie10 ||
        invertN(this.primaryColor, {
          h: 60,
          l: -40,
        });
      this.pie11 =
        this.pie11 ||
        invertN(this.primaryColor, {
          h: -90,
          l: -40,
        });
      this.pie12 =
        this.pie12 ||
        invertN(this.primaryColor, {
          h: 120,
          l: -30,
        });
      this.pieTitleTextSize = this.pieTitleTextSize || "25px";
      this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
      this.pieSectionTextSize = this.pieSectionTextSize || "17px";
      this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
      this.pieLegendTextSize = this.pieLegendTextSize || "17px";
      this.pieLegendTextColor =
        this.pieLegendTextColor || this.taskTextDarkColor;
      this.pieStrokeColor = this.pieStrokeColor || "black";
      this.pieStrokeWidth = this.pieStrokeWidth || "2px";
      this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
      this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
      this.pieOpacity = this.pieOpacity || "0.7";
      this.venn1 =
        this.venn1 ??
        invertN(this.primaryColor, {
          l: -30,
        });
      this.venn2 =
        this.venn2 ??
        invertN(this.secondaryColor, {
          l: -30,
        });
      this.venn3 =
        this.venn3 ??
        invertN(this.tertiaryColor, {
          l: -40,
        });
      this.venn4 =
        this.venn4 ??
        invertN(this.primaryColor, {
          h: 60,
          l: -30,
        });
      this.venn5 =
        this.venn5 ??
        invertN(this.primaryColor, {
          h: -60,
          l: -30,
        });
      this.venn6 =
        this.venn6 ??
        invertN(this.secondaryColor, {
          h: 60,
          l: -30,
        });
      this.venn7 =
        this.venn7 ??
        invertN(this.primaryColor, {
          h: 120,
          l: -30,
        });
      this.venn8 =
        this.venn8 ??
        invertN(this.secondaryColor, {
          h: 120,
          l: -30,
        });
      this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor;
      this.vennSetTextColor = this.vennSetTextColor ?? this.textColor;
      this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
      this.quadrant2Fill =
        this.quadrant2Fill ||
        invertN(this.primaryColor, {
          r: 5,
          g: 5,
          b: 5,
        });
      this.quadrant3Fill =
        this.quadrant3Fill ||
        invertN(this.primaryColor, {
          r: 10,
          g: 10,
          b: 10,
        });
      this.quadrant4Fill =
        this.quadrant4Fill ||
        invertN(this.primaryColor, {
          r: 15,
          g: 15,
          b: 15,
        });
      this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
      this.quadrant2TextFill =
        this.quadrant2TextFill ||
        invertN(this.primaryTextColor, {
          r: -5,
          g: -5,
          b: -5,
        });
      this.quadrant3TextFill =
        this.quadrant3TextFill ||
        invertN(this.primaryTextColor, {
          r: -10,
          g: -10,
          b: -10,
        });
      this.quadrant4TextFill =
        this.quadrant4TextFill ||
        invertN(this.primaryTextColor, {
          r: -15,
          g: -15,
          b: -15,
        });
      this.quadrantPointFill =
        this.quadrantPointFill || invertO(this.quadrant1Fill)
          ? invertI(this.quadrant1Fill)
          : invertR(this.quadrant1Fill);
      this.quadrantPointTextFill =
        this.quadrantPointTextFill || this.primaryTextColor;
      this.quadrantXAxisTextFill =
        this.quadrantXAxisTextFill || this.primaryTextColor;
      this.quadrantYAxisTextFill =
        this.quadrantYAxisTextFill || this.primaryTextColor;
      this.quadrantInternalBorderStrokeFill =
        this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantExternalBorderStrokeFill =
        this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
      this.radar = {
        axisColor: this.radar?.axisColor || this.lineColor,
        axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
        axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
        curveOpacity: this.radar?.curveOpacity || 0.5,
        curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
        graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
        graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
        graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
        legendBoxSize: this.radar?.legendBoxSize || 12,
        legendFontSize: this.radar?.legendFontSize || 12,
      };
      this.xyChart = {
        backgroundColor: this.xyChart?.backgroundColor || this.background,
        titleColor: this.xyChart?.titleColor || this.primaryTextColor,
        dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
        xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
        xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
        xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
        xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
        yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
        yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
        yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
        yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
        plotColorPalette:
          this.xyChart?.plotColorPalette ||
          "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3",
      };
      this.requirementBackground =
        this.requirementBackground || this.primaryColor;
      this.requirementBorderColor =
        this.requirementBorderColor || this.primaryBorderColor;
      this.requirementBorderSize = this.requirementBorderSize || "1";
      this.requirementTextColor =
        this.requirementTextColor || this.primaryTextColor;
      this.relationColor = this.relationColor || this.lineColor;
      this.relationLabelBackground =
        this.relationLabelBackground || this.labelBackground;
      this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
      this.git0 = this.git0 || this.primaryColor;
      this.git1 = this.git1 || this.secondaryColor;
      this.git2 = this.git2 || this.tertiaryColor;
      this.git3 =
        this.git3 ||
        invertN(this.primaryColor, {
          h: -30,
        });
      this.git4 =
        this.git4 ||
        invertN(this.primaryColor, {
          h: -60,
        });
      this.git5 =
        this.git5 ||
        invertN(this.primaryColor, {
          h: -90,
        });
      this.git6 =
        this.git6 ||
        invertN(this.primaryColor, {
          h: 60,
        });
      this.git7 =
        this.git7 ||
        invertN(this.primaryColor, {
          h: 120,
        });
      this.darkMode
        ? ((this.git0 = invertI(this.git0, 25)),
          (this.git1 = invertI(this.git1, 25)),
          (this.git2 = invertI(this.git2, 25)),
          (this.git3 = invertI(this.git3, 25)),
          (this.git4 = invertI(this.git4, 25)),
          (this.git5 = invertI(this.git5, 25)),
          (this.git6 = invertI(this.git6, 25)),
          (this.git7 = invertI(this.git7, 25)))
        : ((this.git0 = invertR(this.git0, 25)),
          (this.git1 = invertR(this.git1, 25)),
          (this.git2 = invertR(this.git2, 25)),
          (this.git3 = invertR(this.git3, 25)),
          (this.git4 = invertR(this.git4, 25)),
          (this.git5 = invertR(this.git5, 25)),
          (this.git6 = invertR(this.git6, 25)),
          (this.git7 = invertR(this.git7, 25)));
      this.gitInv0 = this.gitInv0 || invertR(invertT(this.git0), 25);
      this.gitInv1 = this.gitInv1 || invertT(this.git1);
      this.gitInv2 = this.gitInv2 || invertT(this.git2);
      this.gitInv3 = this.gitInv3 || invertT(this.git3);
      this.gitInv4 = this.gitInv4 || invertT(this.git4);
      this.gitInv5 = this.gitInv5 || invertT(this.git5);
      this.gitInv6 = this.gitInv6 || invertT(this.git6);
      this.gitInv7 = this.gitInv7 || invertT(this.git7);
      this.gitBranchLabel0 =
        this.gitBranchLabel0 || invertT(this.labelTextColor);
      this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
      this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
      this.gitBranchLabel3 =
        this.gitBranchLabel3 || invertT(this.labelTextColor);
      this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
      this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
      this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
      this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
      this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
      this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
      this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
      this.tagLabelFontSize = this.tagLabelFontSize || "10px";
      this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
      this.commitLabelBackground =
        this.commitLabelBackground || this.secondaryColor;
      this.commitLabelFontSize = this.commitLabelFontSize || "10px";
      this.attributeBackgroundColorOdd =
        this.attributeBackgroundColorOdd || "#ffffff";
      this.attributeBackgroundColorEven =
        this.attributeBackgroundColorEven || "#f2f2f2";
    }
    calculate(chunkICPOFSXXParam27) {
      if (
        (Object.keys(this).forEach((item) => {
          this[item] === "calculated" && (this[item] = undefined);
        }),
        typeof chunkICPOFSXXParam27 != "object")
      ) {
        this.updateColors();
        return;
      }
      let chunkICPOFSXXValue219 = Object.keys(chunkICPOFSXXParam27);
      chunkICPOFSXXValue219.forEach((item) => {
        this[item] = chunkICPOFSXXParam27[item];
      });
      this.updateColors();
      chunkICPOFSXXValue219.forEach((item) => {
        this[item] = chunkICPOFSXXParam27[item];
      });
    }
  },
  chunkICPOFSXXE = chunkAGHRB4JFN((chunkICPOFSXXParam115) => {
    let chunkICPOFSXXValue339 = new chunkICPOFSXXValue48();
    return (
      chunkICPOFSXXValue339.calculate(chunkICPOFSXXParam115),
      chunkICPOFSXXValue339
    );
  }, "getThemeVariables"),
  chunkICPOFSXXValue49 = class {
    static {
      chunkAGHRB4JFN(this, "Theme");
    }
    constructor() {
      this.background = "#f4f4f4";
      this.primaryColor = "#cde498";
      this.secondaryColor = "#cdffb2";
      this.background = "white";
      this.mainBkg = "#cde498";
      this.secondBkg = "#cdffb2";
      this.lineColor = "green";
      this.border1 = "#13540c";
      this.border2 = "#6eaa49";
      this.arrowheadColor = "green";
      this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
      this.fontSize = "16px";
      this.tertiaryColor = invertI("#cde498", 10);
      this.primaryBorderColor = chunkICPOFSXXValue44(
        this.primaryColor,
        this.darkMode,
      );
      this.secondaryBorderColor = chunkICPOFSXXValue44(
        this.secondaryColor,
        this.darkMode,
      );
      this.tertiaryBorderColor = chunkICPOFSXXValue44(
        this.tertiaryColor,
        this.darkMode,
      );
      this.primaryTextColor = invertT(this.primaryColor);
      this.secondaryTextColor = invertT(this.secondaryColor);
      this.tertiaryTextColor = invertT(this.primaryColor);
      this.lineColor = invertT(this.background);
      this.textColor = invertT(this.background);
      this.THEME_COLOR_LIMIT = 12;
      this.radius = 5;
      this.strokeWidth = 1;
      this.nodeBkg = "calculated";
      this.nodeBorder = "calculated";
      this.clusterBkg = "calculated";
      this.clusterBorder = "calculated";
      this.defaultLinkColor = "calculated";
      this.titleColor = "#333";
      this.edgeLabelBackground = "#e8e8e8";
      this.actorBorder = "calculated";
      this.actorBkg = "calculated";
      this.actorTextColor = "black";
      this.actorLineColor = "calculated";
      this.signalColor = "#333";
      this.signalTextColor = "#333";
      this.labelBoxBkgColor = "calculated";
      this.labelBoxBorderColor = "#326932";
      this.labelTextColor = "calculated";
      this.loopTextColor = "calculated";
      this.noteBorderColor = "calculated";
      this.noteBkgColor = "#fff5ad";
      this.noteTextColor = "calculated";
      this.activationBorderColor = "#666";
      this.activationBkgColor = "#f4f4f4";
      this.sequenceNumberColor = "white";
      this.sectionBkgColor = "#6eaa49";
      this.altSectionBkgColor = "white";
      this.sectionBkgColor2 = "#6eaa49";
      this.excludeBkgColor = "#eeeeee";
      this.taskBorderColor = "calculated";
      this.taskBkgColor = "#487e3a";
      this.taskTextLightColor = "white";
      this.taskTextColor = "calculated";
      this.taskTextDarkColor = "black";
      this.taskTextOutsideColor = "calculated";
      this.taskTextClickableColor = "#003163";
      this.activeTaskBorderColor = "calculated";
      this.activeTaskBkgColor = "calculated";
      this.gridColor = "lightgrey";
      this.doneTaskBkgColor = "lightgrey";
      this.doneTaskBorderColor = "grey";
      this.critBorderColor = "#ff8888";
      this.critBkgColor = "red";
      this.todayLineColor = "red";
      this.vertLineColor = "#00BFFF";
      this.personBorder = this.primaryBorderColor;
      this.personBkg = this.mainBkg;
      this.archEdgeColor = "calculated";
      this.archEdgeArrowColor = "calculated";
      this.archEdgeWidth = "3";
      this.archGroupBorderColor = this.primaryBorderColor;
      this.archGroupBorderWidth = "2px";
      this.noteFontWeight = "normal";
      this.fontWeight = "normal";
      this.labelColor = "black";
      this.errorBkgColor = "#552222";
      this.errorTextColor = "#552222";
      this.useGradient = true;
      this.gradientStart = this.primaryBorderColor;
      this.gradientStop = this.secondaryBorderColor;
      this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,0.5))";
    }
    updateColors() {
      this.actorBorder = invertR(this.mainBkg, 20);
      this.actorBkg = this.mainBkg;
      this.labelBoxBkgColor = this.actorBkg;
      this.labelTextColor = this.actorTextColor;
      this.loopTextColor = this.actorTextColor;
      this.noteBorderColor = this.border2;
      this.noteTextColor = this.actorTextColor;
      this.actorLineColor = this.actorBorder;
      this.cScale0 = this.cScale0 || this.primaryColor;
      this.cScale1 = this.cScale1 || this.secondaryColor;
      this.cScale2 = this.cScale2 || this.tertiaryColor;
      this.cScale3 =
        this.cScale3 ||
        invertN(this.primaryColor, {
          h: 30,
        });
      this.cScale4 =
        this.cScale4 ||
        invertN(this.primaryColor, {
          h: 60,
        });
      this.cScale5 =
        this.cScale5 ||
        invertN(this.primaryColor, {
          h: 90,
        });
      this.cScale6 =
        this.cScale6 ||
        invertN(this.primaryColor, {
          h: 120,
        });
      this.cScale7 =
        this.cScale7 ||
        invertN(this.primaryColor, {
          h: 150,
        });
      this.cScale8 =
        this.cScale8 ||
        invertN(this.primaryColor, {
          h: 210,
        });
      this.cScale9 =
        this.cScale9 ||
        invertN(this.primaryColor, {
          h: 270,
        });
      this.cScale10 =
        this.cScale10 ||
        invertN(this.primaryColor, {
          h: 300,
        });
      this.cScale11 =
        this.cScale11 ||
        invertN(this.primaryColor, {
          h: 330,
        });
      this.cScalePeer1 = this.cScalePeer1 || invertR(this.secondaryColor, 45);
      this.cScalePeer2 = this.cScalePeer2 || invertR(this.tertiaryColor, 40);
      for (
        let chunkICPOFSXXValue270 = 0;
        chunkICPOFSXXValue270 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue270++
      ) {
        this["cScale" + chunkICPOFSXXValue270] = invertR(
          this["cScale" + chunkICPOFSXXValue270],
          10,
        );
        this["cScalePeer" + chunkICPOFSXXValue270] =
          this["cScalePeer" + chunkICPOFSXXValue270] ||
          invertR(this["cScale" + chunkICPOFSXXValue270], 25);
      }
      for (
        let chunkICPOFSXXValue283 = 0;
        chunkICPOFSXXValue283 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue283++
      )
        this["cScaleInv" + chunkICPOFSXXValue283] =
          this["cScaleInv" + chunkICPOFSXXValue283] ||
          invertN(this["cScale" + chunkICPOFSXXValue283], {
            h: 180,
          });
      this.scaleLabelColor =
        this.scaleLabelColor !== "calculated" && this.scaleLabelColor
          ? this.scaleLabelColor
          : this.labelTextColor;
      for (
        let chunkICPOFSXXValue289 = 0;
        chunkICPOFSXXValue289 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue289++
      )
        this["cScaleLabel" + chunkICPOFSXXValue289] =
          this["cScaleLabel" + chunkICPOFSXXValue289] || this.scaleLabelColor;
      for (
        let chunkICPOFSXXValue241 = 0;
        chunkICPOFSXXValue241 < 5;
        chunkICPOFSXXValue241++
      ) {
        this["surface" + chunkICPOFSXXValue241] =
          this["surface" + chunkICPOFSXXValue241] ||
          invertN(this.mainBkg, {
            h: 30,
            s: -30,
            l: -(5 + chunkICPOFSXXValue241 * 5),
          });
        this["surfacePeer" + chunkICPOFSXXValue241] =
          this["surfacePeer" + chunkICPOFSXXValue241] ||
          invertN(this.mainBkg, {
            h: 30,
            s: -30,
            l: -(8 + chunkICPOFSXXValue241 * 5),
          });
      }
      this.nodeBkg = this.mainBkg;
      this.nodeBorder = this.border1;
      this.clusterBkg = this.secondBkg;
      this.clusterBorder = this.border2;
      this.defaultLinkColor = this.lineColor;
      this.taskBorderColor = this.border1;
      this.taskTextColor = this.taskTextLightColor;
      this.taskTextOutsideColor = this.taskTextDarkColor;
      this.activeTaskBorderColor = this.taskBorderColor;
      this.activeTaskBkgColor = this.mainBkg;
      this.archEdgeColor = this.lineColor;
      this.archEdgeArrowColor = this.lineColor;
      this.rowOdd = this.rowOdd || invertI(this.mainBkg, 75) || "#ffffff";
      this.rowEven = this.rowEven || invertI(this.mainBkg, 20);
      this.transitionColor = this.transitionColor || this.lineColor;
      this.transitionLabelColor = this.transitionLabelColor || this.textColor;
      this.stateLabelColor =
        this.stateLabelColor || this.stateBkg || this.primaryTextColor;
      this.stateBkg = this.stateBkg || this.mainBkg;
      this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
      this.compositeBackground =
        this.compositeBackground || this.background || this.tertiaryColor;
      this.altBackground = this.altBackground || "#f0f0f0";
      this.compositeTitleBackground =
        this.compositeTitleBackground || this.mainBkg;
      this.compositeBorder = this.compositeBorder || this.nodeBorder;
      this.innerEndBackground = this.primaryBorderColor;
      this.specialStateColor = this.lineColor;
      this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
      this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
      this.transitionColor = this.transitionColor || this.lineColor;
      this.classText = this.primaryTextColor;
      this.fillType0 = this.primaryColor;
      this.fillType1 = this.secondaryColor;
      this.fillType2 = invertN(this.primaryColor, {
        h: 64,
      });
      this.fillType3 = invertN(this.secondaryColor, {
        h: 64,
      });
      this.fillType4 = invertN(this.primaryColor, {
        h: -64,
      });
      this.fillType5 = invertN(this.secondaryColor, {
        h: -64,
      });
      this.fillType6 = invertN(this.primaryColor, {
        h: 128,
      });
      this.fillType7 = invertN(this.secondaryColor, {
        h: 128,
      });
      this.pie1 = this.pie1 || this.primaryColor;
      this.pie2 = this.pie2 || this.secondaryColor;
      this.pie3 = this.pie3 || this.tertiaryColor;
      this.pie4 =
        this.pie4 ||
        invertN(this.primaryColor, {
          l: -30,
        });
      this.pie5 =
        this.pie5 ||
        invertN(this.secondaryColor, {
          l: -30,
        });
      this.pie6 =
        this.pie6 ||
        invertN(this.tertiaryColor, {
          h: 40,
          l: -40,
        });
      this.pie7 =
        this.pie7 ||
        invertN(this.primaryColor, {
          h: 60,
          l: -10,
        });
      this.pie8 =
        this.pie8 ||
        invertN(this.primaryColor, {
          h: -60,
          l: -10,
        });
      this.pie9 =
        this.pie9 ||
        invertN(this.primaryColor, {
          h: 120,
          l: 0,
        });
      this.pie10 =
        this.pie10 ||
        invertN(this.primaryColor, {
          h: 60,
          l: -50,
        });
      this.pie11 =
        this.pie11 ||
        invertN(this.primaryColor, {
          h: -60,
          l: -50,
        });
      this.pie12 =
        this.pie12 ||
        invertN(this.primaryColor, {
          h: 120,
          l: -50,
        });
      this.pieTitleTextSize = this.pieTitleTextSize || "25px";
      this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
      this.pieSectionTextSize = this.pieSectionTextSize || "17px";
      this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
      this.pieLegendTextSize = this.pieLegendTextSize || "17px";
      this.pieLegendTextColor =
        this.pieLegendTextColor || this.taskTextDarkColor;
      this.pieStrokeColor = this.pieStrokeColor || "black";
      this.pieStrokeWidth = this.pieStrokeWidth || "2px";
      this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
      this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
      this.pieOpacity = this.pieOpacity || "0.7";
      this.venn1 =
        this.venn1 ??
        invertN(this.primaryColor, {
          l: -30,
        });
      this.venn2 =
        this.venn2 ??
        invertN(this.secondaryColor, {
          l: -30,
        });
      this.venn3 =
        this.venn3 ??
        invertN(this.tertiaryColor, {
          l: -30,
        });
      this.venn4 =
        this.venn4 ??
        invertN(this.primaryColor, {
          h: 60,
          l: -30,
        });
      this.venn5 =
        this.venn5 ??
        invertN(this.primaryColor, {
          h: -60,
          l: -30,
        });
      this.venn6 =
        this.venn6 ??
        invertN(this.secondaryColor, {
          h: 60,
          l: -30,
        });
      this.venn7 =
        this.venn7 ??
        invertN(this.primaryColor, {
          h: 120,
          l: -30,
        });
      this.venn8 =
        this.venn8 ??
        invertN(this.secondaryColor, {
          h: 120,
          l: -30,
        });
      this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor;
      this.vennSetTextColor = this.vennSetTextColor ?? this.textColor;
      this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
      this.quadrant2Fill =
        this.quadrant2Fill ||
        invertN(this.primaryColor, {
          r: 5,
          g: 5,
          b: 5,
        });
      this.quadrant3Fill =
        this.quadrant3Fill ||
        invertN(this.primaryColor, {
          r: 10,
          g: 10,
          b: 10,
        });
      this.quadrant4Fill =
        this.quadrant4Fill ||
        invertN(this.primaryColor, {
          r: 15,
          g: 15,
          b: 15,
        });
      this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
      this.quadrant2TextFill =
        this.quadrant2TextFill ||
        invertN(this.primaryTextColor, {
          r: -5,
          g: -5,
          b: -5,
        });
      this.quadrant3TextFill =
        this.quadrant3TextFill ||
        invertN(this.primaryTextColor, {
          r: -10,
          g: -10,
          b: -10,
        });
      this.quadrant4TextFill =
        this.quadrant4TextFill ||
        invertN(this.primaryTextColor, {
          r: -15,
          g: -15,
          b: -15,
        });
      this.quadrantPointFill =
        this.quadrantPointFill || invertO(this.quadrant1Fill)
          ? invertI(this.quadrant1Fill)
          : invertR(this.quadrant1Fill);
      this.quadrantPointTextFill =
        this.quadrantPointTextFill || this.primaryTextColor;
      this.quadrantXAxisTextFill =
        this.quadrantXAxisTextFill || this.primaryTextColor;
      this.quadrantYAxisTextFill =
        this.quadrantYAxisTextFill || this.primaryTextColor;
      this.quadrantInternalBorderStrokeFill =
        this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantExternalBorderStrokeFill =
        this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
      this.packet = {
        startByteColor: this.primaryTextColor,
        endByteColor: this.primaryTextColor,
        labelColor: this.primaryTextColor,
        titleColor: this.primaryTextColor,
        blockStrokeColor: this.primaryTextColor,
        blockFillColor: this.mainBkg,
      };
      this.radar = {
        axisColor: this.radar?.axisColor || this.lineColor,
        axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
        axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
        curveOpacity: this.radar?.curveOpacity || 0.5,
        curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
        graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
        graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
        graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
        legendBoxSize: this.radar?.legendBoxSize || 12,
        legendFontSize: this.radar?.legendFontSize || 12,
      };
      this.xyChart = {
        backgroundColor: this.xyChart?.backgroundColor || this.background,
        titleColor: this.xyChart?.titleColor || this.primaryTextColor,
        dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
        xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
        xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
        xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
        xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
        yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
        yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
        yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
        yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
        plotColorPalette:
          this.xyChart?.plotColorPalette ||
          "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176",
      };
      this.requirementBackground =
        this.requirementBackground || this.primaryColor;
      this.requirementBorderColor =
        this.requirementBorderColor || this.primaryBorderColor;
      this.requirementBorderSize = this.requirementBorderSize || "1";
      this.requirementTextColor =
        this.requirementTextColor || this.primaryTextColor;
      this.relationColor = this.relationColor || this.lineColor;
      this.relationLabelBackground =
        this.relationLabelBackground || this.edgeLabelBackground;
      this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
      this.git0 = this.git0 || this.primaryColor;
      this.git1 = this.git1 || this.secondaryColor;
      this.git2 = this.git2 || this.tertiaryColor;
      this.git3 =
        this.git3 ||
        invertN(this.primaryColor, {
          h: -30,
        });
      this.git4 =
        this.git4 ||
        invertN(this.primaryColor, {
          h: -60,
        });
      this.git5 =
        this.git5 ||
        invertN(this.primaryColor, {
          h: -90,
        });
      this.git6 =
        this.git6 ||
        invertN(this.primaryColor, {
          h: 60,
        });
      this.git7 =
        this.git7 ||
        invertN(this.primaryColor, {
          h: 120,
        });
      this.darkMode
        ? ((this.git0 = invertI(this.git0, 25)),
          (this.git1 = invertI(this.git1, 25)),
          (this.git2 = invertI(this.git2, 25)),
          (this.git3 = invertI(this.git3, 25)),
          (this.git4 = invertI(this.git4, 25)),
          (this.git5 = invertI(this.git5, 25)),
          (this.git6 = invertI(this.git6, 25)),
          (this.git7 = invertI(this.git7, 25)))
        : ((this.git0 = invertR(this.git0, 25)),
          (this.git1 = invertR(this.git1, 25)),
          (this.git2 = invertR(this.git2, 25)),
          (this.git3 = invertR(this.git3, 25)),
          (this.git4 = invertR(this.git4, 25)),
          (this.git5 = invertR(this.git5, 25)),
          (this.git6 = invertR(this.git6, 25)),
          (this.git7 = invertR(this.git7, 25)));
      this.gitInv0 = this.gitInv0 || invertT(this.git0);
      this.gitInv1 = this.gitInv1 || invertT(this.git1);
      this.gitInv2 = this.gitInv2 || invertT(this.git2);
      this.gitInv3 = this.gitInv3 || invertT(this.git3);
      this.gitInv4 = this.gitInv4 || invertT(this.git4);
      this.gitInv5 = this.gitInv5 || invertT(this.git5);
      this.gitInv6 = this.gitInv6 || invertT(this.git6);
      this.gitInv7 = this.gitInv7 || invertT(this.git7);
      this.gitBranchLabel0 =
        this.gitBranchLabel0 || invertT(this.labelTextColor);
      this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
      this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
      this.gitBranchLabel3 =
        this.gitBranchLabel3 || invertT(this.labelTextColor);
      this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
      this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
      this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
      this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
      this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
      this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
      this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
      this.tagLabelFontSize = this.tagLabelFontSize || "10px";
      this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
      this.commitLabelBackground =
        this.commitLabelBackground || this.secondaryColor;
      this.commitLabelFontSize = this.commitLabelFontSize || "10px";
      this.attributeBackgroundColorOdd =
        this.attributeBackgroundColorOdd || "#ffffff";
      this.attributeBackgroundColorEven =
        this.attributeBackgroundColorEven || "#f2f2f2";
    }
    calculate(chunkICPOFSXXParam44) {
      if (typeof chunkICPOFSXXParam44 != "object") {
        this.updateColors();
        return;
      }
      let chunkICPOFSXXValue244 = Object.keys(chunkICPOFSXXParam44);
      chunkICPOFSXXValue244.forEach((item) => {
        this[item] = chunkICPOFSXXParam44[item];
      });
      this.updateColors();
      chunkICPOFSXXValue244.forEach((item) => {
        this[item] = chunkICPOFSXXParam44[item];
      });
    }
  },
  chunkICPOFSXXValue50 = chunkAGHRB4JFN((chunkICPOFSXXParam116) => {
    let chunkICPOFSXXValue340 = new chunkICPOFSXXValue49();
    return (
      chunkICPOFSXXValue340.calculate(chunkICPOFSXXParam116),
      chunkICPOFSXXValue340
    );
  }, "getThemeVariables"),
  chunkICPOFSXXValue51 = class {
    static {
      chunkAGHRB4JFN(this, "Theme");
    }
    constructor() {
      this.primaryColor = "#eee";
      this.contrast = "#707070";
      this.secondaryColor = invertI(this.contrast, 55);
      this.background = "#ffffff";
      this.tertiaryColor = invertN(this.primaryColor, {
        h: -160,
      });
      this.primaryBorderColor = chunkICPOFSXXValue44(
        this.primaryColor,
        this.darkMode,
      );
      this.secondaryBorderColor = chunkICPOFSXXValue44(
        this.secondaryColor,
        this.darkMode,
      );
      this.tertiaryBorderColor = chunkICPOFSXXValue44(
        this.tertiaryColor,
        this.darkMode,
      );
      this.primaryTextColor = invertT(this.primaryColor);
      this.secondaryTextColor = invertT(this.secondaryColor);
      this.tertiaryTextColor = invertT(this.tertiaryColor);
      this.lineColor = invertT(this.background);
      this.textColor = invertT(this.background);
      this.mainBkg = "#eee";
      this.secondBkg = "calculated";
      this.lineColor = "#666";
      this.border1 = "#999";
      this.border2 = "calculated";
      this.note = "#ffa";
      this.text = "#333";
      this.critical = "#d42";
      this.done = "#bbb";
      this.arrowheadColor = "#333333";
      this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
      this.fontSize = "16px";
      this.THEME_COLOR_LIMIT = 12;
      this.radius = 5;
      this.strokeWidth = 1;
      this.nodeBkg = "calculated";
      this.nodeBorder = "calculated";
      this.clusterBkg = "calculated";
      this.clusterBorder = "calculated";
      this.defaultLinkColor = "calculated";
      this.titleColor = "calculated";
      this.edgeLabelBackground = "white";
      this.actorBorder = "calculated";
      this.actorBkg = "calculated";
      this.actorTextColor = "calculated";
      this.actorLineColor = this.actorBorder;
      this.signalColor = "calculated";
      this.signalTextColor = "calculated";
      this.labelBoxBkgColor = "calculated";
      this.labelBoxBorderColor = "calculated";
      this.labelTextColor = "calculated";
      this.loopTextColor = "calculated";
      this.noteBorderColor = "calculated";
      this.noteBkgColor = "calculated";
      this.noteTextColor = "calculated";
      this.activationBorderColor = "#666";
      this.activationBkgColor = "#f4f4f4";
      this.sequenceNumberColor = "white";
      this.sectionBkgColor = "calculated";
      this.altSectionBkgColor = "white";
      this.sectionBkgColor2 = "calculated";
      this.excludeBkgColor = "#eeeeee";
      this.taskBorderColor = "calculated";
      this.taskBkgColor = "calculated";
      this.taskTextLightColor = "white";
      this.taskTextColor = "calculated";
      this.taskTextDarkColor = "calculated";
      this.taskTextOutsideColor = "calculated";
      this.taskTextClickableColor = "#003163";
      this.activeTaskBorderColor = "calculated";
      this.activeTaskBkgColor = "calculated";
      this.gridColor = "calculated";
      this.doneTaskBkgColor = "calculated";
      this.doneTaskBorderColor = "calculated";
      this.critBkgColor = "calculated";
      this.critBorderColor = "calculated";
      this.todayLineColor = "calculated";
      this.vertLineColor = "calculated";
      this.personBorder = this.primaryBorderColor;
      this.personBkg = this.mainBkg;
      this.archEdgeColor = "calculated";
      this.archEdgeArrowColor = "calculated";
      this.archEdgeWidth = "3";
      this.archGroupBorderColor = this.primaryBorderColor;
      this.archGroupBorderWidth = "2px";
      this.noteFontWeight = "normal";
      this.fontWeight = "normal";
      this.rowOdd = this.rowOdd || invertI(this.mainBkg, 75) || "#ffffff";
      this.rowEven = this.rowEven || "#f4f4f4";
      this.labelColor = "black";
      this.errorBkgColor = "#552222";
      this.errorTextColor = "#552222";
      this.useGradient = true;
      this.gradientStart = this.primaryBorderColor;
      this.gradientStop = this.secondaryBorderColor;
      this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))";
    }
    updateColors() {
      this.secondBkg = invertI(this.contrast, 55);
      this.border2 = this.contrast;
      this.actorBorder = invertI(this.border1, 23);
      this.actorBkg = this.mainBkg;
      this.actorTextColor = this.text;
      this.actorLineColor = this.actorBorder;
      this.signalColor = this.text;
      this.signalTextColor = this.text;
      this.labelBoxBkgColor = this.actorBkg;
      this.labelBoxBorderColor = this.actorBorder;
      this.labelTextColor = this.text;
      this.loopTextColor = this.text;
      this.noteBorderColor = "#999";
      this.noteBkgColor = "#666";
      this.noteTextColor = "#fff";
      this.cScale0 = this.cScale0 || "#555";
      this.cScale1 = this.cScale1 || "#F4F4F4";
      this.cScale2 = this.cScale2 || "#555";
      this.cScale3 = this.cScale3 || "#BBB";
      this.cScale4 = this.cScale4 || "#777";
      this.cScale5 = this.cScale5 || "#999";
      this.cScale6 = this.cScale6 || "#DDD";
      this.cScale7 = this.cScale7 || "#FFF";
      this.cScale8 = this.cScale8 || "#DDD";
      this.cScale9 = this.cScale9 || "#BBB";
      this.cScale10 = this.cScale10 || "#999";
      this.cScale11 = this.cScale11 || "#777";
      for (
        let chunkICPOFSXXValue298 = 0;
        chunkICPOFSXXValue298 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue298++
      )
        this["cScaleInv" + chunkICPOFSXXValue298] =
          this["cScaleInv" + chunkICPOFSXXValue298] ||
          invertT(this["cScale" + chunkICPOFSXXValue298]);
      for (
        let chunkICPOFSXXValue253 = 0;
        chunkICPOFSXXValue253 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue253++
      )
        this.darkMode
          ? (this["cScalePeer" + chunkICPOFSXXValue253] =
              this["cScalePeer" + chunkICPOFSXXValue253] ||
              invertI(this["cScale" + chunkICPOFSXXValue253], 10))
          : (this["cScalePeer" + chunkICPOFSXXValue253] =
              this["cScalePeer" + chunkICPOFSXXValue253] ||
              invertR(this["cScale" + chunkICPOFSXXValue253], 10));
      this.scaleLabelColor =
        this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
      this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1;
      this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
      for (
        let chunkICPOFSXXValue290 = 0;
        chunkICPOFSXXValue290 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue290++
      )
        this["cScaleLabel" + chunkICPOFSXXValue290] =
          this["cScaleLabel" + chunkICPOFSXXValue290] || this.scaleLabelColor;
      for (
        let chunkICPOFSXXValue265 = 0;
        chunkICPOFSXXValue265 < 5;
        chunkICPOFSXXValue265++
      ) {
        this["surface" + chunkICPOFSXXValue265] =
          this["surface" + chunkICPOFSXXValue265] ||
          invertN(this.mainBkg, {
            l: -(5 + chunkICPOFSXXValue265 * 5),
          });
        this["surfacePeer" + chunkICPOFSXXValue265] =
          this["surfacePeer" + chunkICPOFSXXValue265] ||
          invertN(this.mainBkg, {
            l: -(8 + chunkICPOFSXXValue265 * 5),
          });
      }
      this.nodeBkg = this.mainBkg;
      this.nodeBorder = this.border1;
      this.clusterBkg = this.secondBkg;
      this.clusterBorder = this.border2;
      this.defaultLinkColor = this.lineColor;
      this.titleColor = this.text;
      this.sectionBkgColor = invertI(this.contrast, 30);
      this.sectionBkgColor2 = invertI(this.contrast, 30);
      this.taskBorderColor = invertR(this.contrast, 10);
      this.taskBkgColor = this.contrast;
      this.taskTextColor = this.taskTextLightColor;
      this.taskTextDarkColor = this.text;
      this.taskTextOutsideColor = this.taskTextDarkColor;
      this.activeTaskBorderColor = this.taskBorderColor;
      this.activeTaskBkgColor = this.mainBkg;
      this.gridColor = invertI(this.border1, 30);
      this.doneTaskBkgColor = this.done;
      this.doneTaskBorderColor = this.lineColor;
      this.critBkgColor = this.critical;
      this.critBorderColor = invertR(this.critBkgColor, 10);
      this.todayLineColor = this.critBkgColor;
      this.vertLineColor = this.critBkgColor;
      this.archEdgeColor = this.lineColor;
      this.archEdgeArrowColor = this.lineColor;
      this.transitionColor = this.transitionColor || "#000";
      this.transitionLabelColor = this.transitionLabelColor || this.textColor;
      this.stateLabelColor =
        this.stateLabelColor || this.stateBkg || this.primaryTextColor;
      this.stateBkg = this.stateBkg || this.mainBkg;
      this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
      this.compositeBackground =
        this.compositeBackground || this.background || this.tertiaryColor;
      this.altBackground = this.altBackground || "#f4f4f4";
      this.compositeTitleBackground =
        this.compositeTitleBackground || this.mainBkg;
      this.stateBorder = this.stateBorder || "#000";
      this.innerEndBackground = this.primaryBorderColor;
      this.specialStateColor = "#222";
      this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
      this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
      this.classText = this.primaryTextColor;
      this.fillType0 = this.primaryColor;
      this.fillType1 = this.secondaryColor;
      this.fillType2 = invertN(this.primaryColor, {
        h: 64,
      });
      this.fillType3 = invertN(this.secondaryColor, {
        h: 64,
      });
      this.fillType4 = invertN(this.primaryColor, {
        h: -64,
      });
      this.fillType5 = invertN(this.secondaryColor, {
        h: -64,
      });
      this.fillType6 = invertN(this.primaryColor, {
        h: 128,
      });
      this.fillType7 = invertN(this.secondaryColor, {
        h: 128,
      });
      for (
        let chunkICPOFSXXValue325 = 0;
        chunkICPOFSXXValue325 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue325++
      )
        this["pie" + chunkICPOFSXXValue325] =
          this["cScale" + chunkICPOFSXXValue325];
      this.pie12 = this.pie0;
      this.pieTitleTextSize = this.pieTitleTextSize || "25px";
      this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
      this.pieSectionTextSize = this.pieSectionTextSize || "17px";
      this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
      this.pieLegendTextSize = this.pieLegendTextSize || "17px";
      this.pieLegendTextColor =
        this.pieLegendTextColor || this.taskTextDarkColor;
      this.pieStrokeColor = this.pieStrokeColor || "black";
      this.pieStrokeWidth = this.pieStrokeWidth || "2px";
      this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
      this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
      this.pieOpacity = this.pieOpacity || "0.7";
      for (
        let chunkICPOFSXXValue314 = 0;
        chunkICPOFSXXValue314 < 8;
        chunkICPOFSXXValue314++
      )
        this["venn" + (chunkICPOFSXXValue314 + 1)] =
          this["venn" + (chunkICPOFSXXValue314 + 1)] ??
          this["cScale" + chunkICPOFSXXValue314];
      this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor;
      this.vennSetTextColor = this.vennSetTextColor ?? this.textColor;
      this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
      this.quadrant2Fill =
        this.quadrant2Fill ||
        invertN(this.primaryColor, {
          r: 5,
          g: 5,
          b: 5,
        });
      this.quadrant3Fill =
        this.quadrant3Fill ||
        invertN(this.primaryColor, {
          r: 10,
          g: 10,
          b: 10,
        });
      this.quadrant4Fill =
        this.quadrant4Fill ||
        invertN(this.primaryColor, {
          r: 15,
          g: 15,
          b: 15,
        });
      this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
      this.quadrant2TextFill =
        this.quadrant2TextFill ||
        invertN(this.primaryTextColor, {
          r: -5,
          g: -5,
          b: -5,
        });
      this.quadrant3TextFill =
        this.quadrant3TextFill ||
        invertN(this.primaryTextColor, {
          r: -10,
          g: -10,
          b: -10,
        });
      this.quadrant4TextFill =
        this.quadrant4TextFill ||
        invertN(this.primaryTextColor, {
          r: -15,
          g: -15,
          b: -15,
        });
      this.quadrantPointFill =
        this.quadrantPointFill || invertO(this.quadrant1Fill)
          ? invertI(this.quadrant1Fill)
          : invertR(this.quadrant1Fill);
      this.quadrantPointTextFill =
        this.quadrantPointTextFill || this.primaryTextColor;
      this.quadrantXAxisTextFill =
        this.quadrantXAxisTextFill || this.primaryTextColor;
      this.quadrantYAxisTextFill =
        this.quadrantYAxisTextFill || this.primaryTextColor;
      this.quadrantInternalBorderStrokeFill =
        this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantExternalBorderStrokeFill =
        this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
      this.xyChart = {
        backgroundColor: this.xyChart?.backgroundColor || this.background,
        titleColor: this.xyChart?.titleColor || this.primaryTextColor,
        dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
        xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
        xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
        xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
        xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
        yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
        yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
        yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
        yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
        plotColorPalette:
          this.xyChart?.plotColorPalette ||
          "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0",
      };
      this.radar = {
        axisColor: this.radar?.axisColor || this.lineColor,
        axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
        axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
        curveOpacity: this.radar?.curveOpacity || 0.5,
        curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
        graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
        graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
        graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
        legendBoxSize: this.radar?.legendBoxSize || 12,
        legendFontSize: this.radar?.legendFontSize || 12,
      };
      this.requirementBackground =
        this.requirementBackground || this.primaryColor;
      this.requirementBorderColor =
        this.requirementBorderColor || this.primaryBorderColor;
      this.requirementBorderSize = this.requirementBorderSize || "1";
      this.requirementTextColor =
        this.requirementTextColor || this.primaryTextColor;
      this.relationColor = this.relationColor || this.lineColor;
      this.relationLabelBackground =
        this.relationLabelBackground || this.edgeLabelBackground;
      this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
      this.git0 = invertR(this.pie1, 25) || this.primaryColor;
      this.git1 = this.pie2 || this.secondaryColor;
      this.git2 = this.pie3 || this.tertiaryColor;
      this.git3 =
        this.pie4 ||
        invertN(this.primaryColor, {
          h: -30,
        });
      this.git4 =
        this.pie5 ||
        invertN(this.primaryColor, {
          h: -60,
        });
      this.git5 =
        this.pie6 ||
        invertN(this.primaryColor, {
          h: -90,
        });
      this.git6 =
        this.pie7 ||
        invertN(this.primaryColor, {
          h: 60,
        });
      this.git7 =
        this.pie8 ||
        invertN(this.primaryColor, {
          h: 120,
        });
      this.gitInv0 = this.gitInv0 || invertT(this.git0);
      this.gitInv1 = this.gitInv1 || invertT(this.git1);
      this.gitInv2 = this.gitInv2 || invertT(this.git2);
      this.gitInv3 = this.gitInv3 || invertT(this.git3);
      this.gitInv4 = this.gitInv4 || invertT(this.git4);
      this.gitInv5 = this.gitInv5 || invertT(this.git5);
      this.gitInv6 = this.gitInv6 || invertT(this.git6);
      this.gitInv7 = this.gitInv7 || invertT(this.git7);
      this.branchLabelColor = this.branchLabelColor || this.labelTextColor;
      this.gitBranchLabel0 = this.branchLabelColor;
      this.gitBranchLabel1 = "white";
      this.gitBranchLabel2 = this.branchLabelColor;
      this.gitBranchLabel3 = "white";
      this.gitBranchLabel4 = this.branchLabelColor;
      this.gitBranchLabel5 = this.branchLabelColor;
      this.gitBranchLabel6 = this.branchLabelColor;
      this.gitBranchLabel7 = this.branchLabelColor;
      this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
      this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
      this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
      this.tagLabelFontSize = this.tagLabelFontSize || "10px";
      this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
      this.commitLabelBackground =
        this.commitLabelBackground || this.secondaryColor;
      this.commitLabelFontSize = this.commitLabelFontSize || "10px";
      this.attributeBackgroundColorOdd =
        this.attributeBackgroundColorOdd || "#ffffff";
      this.attributeBackgroundColorEven =
        this.attributeBackgroundColorEven || "#f2f2f2";
    }
    calculate(chunkICPOFSXXParam45) {
      if (typeof chunkICPOFSXXParam45 != "object") {
        this.updateColors();
        return;
      }
      let chunkICPOFSXXValue245 = Object.keys(chunkICPOFSXXParam45);
      chunkICPOFSXXValue245.forEach((item) => {
        this[item] = chunkICPOFSXXParam45[item];
      });
      this.updateColors();
      chunkICPOFSXXValue245.forEach((item) => {
        this[item] = chunkICPOFSXXParam45[item];
      });
    }
  },
  at = chunkAGHRB4JFN((chunkICPOFSXXParam117) => {
    let chunkICPOFSXXValue341 = new chunkICPOFSXXValue51();
    return (
      chunkICPOFSXXValue341.calculate(chunkICPOFSXXParam117),
      chunkICPOFSXXValue341
    );
  }, "getThemeVariables"),
  chunkICPOFSXXValue52 = class {
    static {
      chunkAGHRB4JFN(this, "Theme");
    }
    constructor() {
      this.background = "#ffffff";
      this.primaryColor = "#cccccc";
      this.mainBkg = "#ffffff";
      this.noteBkgColor = "#fff5ad";
      this.noteTextColor = "#333";
      this.THEME_COLOR_LIMIT = 12;
      this.radius = 3;
      this.strokeWidth = 2;
      this.primaryBorderColor = chunkICPOFSXXValue44(
        this.primaryColor,
        this.darkMode,
      );
      this.fontFamily = "arial, sans-serif";
      this.fontSize = "14px";
      this.nodeBorder = "#000000";
      this.stateBorder = "#000000";
      this.useGradient = true;
      this.gradientStart = "#0042eb";
      this.gradientStop = "#eb0042";
      this.dropShadow = "drop-shadow( 0px 1px 2px rgba(0, 0, 0, 0.25));";
      this.tertiaryColor = "#ffffff";
      this.archEdgeColor = "calculated";
      this.archEdgeArrowColor = "calculated";
      this.archEdgeWidth = "3";
      this.archGroupBorderColor = this.primaryBorderColor;
      this.archGroupBorderWidth = "2px";
      this.noteFontWeight = "normal";
      this.fontWeight = "normal";
    }
    updateColors() {
      this.primaryTextColor =
        this.primaryTextColor || (this.darkMode ? "#eee" : "#333");
      this.secondaryColor =
        this.secondaryColor ||
        invertN(this.primaryColor, {
          h: -120,
        });
      this.tertiaryColor =
        this.tertiaryColor ||
        invertN(this.primaryColor, {
          h: 180,
          l: 5,
        });
      this.primaryBorderColor =
        this.primaryBorderColor ||
        chunkICPOFSXXValue44(this.primaryColor, this.darkMode);
      this.secondaryBorderColor =
        this.secondaryBorderColor ||
        chunkICPOFSXXValue44(this.secondaryColor, this.darkMode);
      this.tertiaryBorderColor =
        this.tertiaryBorderColor ||
        chunkICPOFSXXValue44(this.tertiaryColor, this.darkMode);
      this.noteBorderColor =
        this.noteBorderColor ||
        chunkICPOFSXXValue44(this.noteBkgColor, this.darkMode);
      this.noteBkgColor = this.noteBkgColor || "#fff5ad";
      this.noteTextColor = this.noteTextColor || "#333";
      this.secondaryTextColor =
        this.secondaryTextColor || invertT(this.secondaryColor);
      this.tertiaryTextColor =
        this.tertiaryTextColor || invertT(this.tertiaryColor);
      this.lineColor = this.lineColor || invertT(this.background);
      this.arrowheadColor = this.arrowheadColor || invertT(this.background);
      this.textColor = this.textColor || this.primaryTextColor;
      this.border2 = this.border2 || this.tertiaryBorderColor;
      this.nodeBkg = this.nodeBkg || this.primaryColor;
      this.mainBkg = this.mainBkg || this.primaryColor;
      this.nodeBorder = this.nodeBorder || this.primaryBorderColor;
      this.clusterBkg = this.clusterBkg || this.tertiaryColor;
      this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor;
      this.defaultLinkColor = this.defaultLinkColor || this.lineColor;
      this.titleColor = this.titleColor || this.tertiaryTextColor;
      this.edgeLabelBackground =
        this.edgeLabelBackground ||
        (this.darkMode
          ? invertR(this.secondaryColor, 30)
          : this.secondaryColor);
      this.nodeTextColor = this.nodeTextColor || this.primaryTextColor;
      this.actorBorder = this.actorBorder || this.primaryBorderColor;
      this.actorBkg = this.actorBkg || this.mainBkg;
      this.actorTextColor = this.actorTextColor || this.primaryTextColor;
      this.actorLineColor = this.actorLineColor || this.actorBorder;
      this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg;
      this.signalColor = this.signalColor || this.textColor;
      this.signalTextColor = this.signalTextColor || this.textColor;
      this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder;
      this.labelTextColor = this.labelTextColor || this.actorTextColor;
      this.loopTextColor = this.loopTextColor || this.actorTextColor;
      this.activationBorderColor =
        this.activationBorderColor || invertR(this.secondaryColor, 10);
      this.activationBkgColor = this.activationBkgColor || this.secondaryColor;
      this.sequenceNumberColor =
        this.sequenceNumberColor || invertT(this.lineColor);
      let chunkICPOFSXXValue167 = invertN("#ECECFE", {
        h: 180,
        l: 5,
      });
      if (
        ((this.sectionBkgColor = this.sectionBkgColor || chunkICPOFSXXValue167),
        (this.altSectionBkgColor = this.altSectionBkgColor || "white"),
        (this.sectionBkgColor = this.sectionBkgColor || "#E9E9F1"),
        (this.sectionBkgColor2 = this.sectionBkgColor2 || "#ECECFE"),
        (this.excludeBkgColor = this.excludeBkgColor || "#eeeeee"),
        (this.taskBorderColor =
          this.taskBorderColor || this.primaryBorderColor),
        (this.taskBkgColor = this.taskBkgColor || "#ECECFE"),
        (this.activeTaskBorderColor = this.activeTaskBorderColor || "#ECECFE"),
        (this.activeTaskBkgColor =
          this.activeTaskBkgColor || invertI("#ECECFE", 23)),
        (this.gridColor = this.gridColor || "lightgrey"),
        (this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey"),
        (this.doneTaskBorderColor = this.doneTaskBorderColor || "grey"),
        (this.critBorderColor = this.critBorderColor || "#ff8888"),
        (this.critBkgColor = this.critBkgColor || "red"),
        (this.todayLineColor = this.todayLineColor || "red"),
        (this.taskTextColor = this.taskTextColor || this.textColor),
        (this.taskTextOutsideColor =
          this.taskTextOutsideColor || this.textColor),
        (this.vertLineColor = this.vertLineColor || this.primaryBorderColor),
        (this.taskTextLightColor = this.taskTextLightColor || this.textColor),
        (this.taskTextColor = this.taskTextColor || this.primaryTextColor),
        (this.taskTextDarkColor = this.taskTextDarkColor || this.textColor),
        (this.taskTextClickableColor =
          this.taskTextClickableColor || "#003163"),
        (this.archEdgeColor = this.lineColor),
        (this.archEdgeArrowColor = this.lineColor),
        (this.personBorder = this.personBorder || this.primaryBorderColor),
        (this.personBkg = this.personBkg || this.mainBkg),
        (this.transitionColor = this.transitionColor || this.lineColor),
        (this.transitionLabelColor =
          this.transitionLabelColor || this.textColor),
        (this.stateLabelColor =
          this.stateLabelColor || this.stateBkg || this.primaryTextColor),
        (this.stateBkg = this.stateBkg || this.mainBkg),
        (this.labelBackgroundColor =
          this.labelBackgroundColor || this.stateBkg),
        (this.compositeBackground =
          this.compositeBackground || this.background || this.tertiaryColor),
        (this.altBackground = this.altBackground || "#f0f0f0"),
        (this.compositeTitleBackground =
          this.compositeTitleBackground || this.mainBkg),
        (this.compositeBorder = this.compositeBorder || this.nodeBorder),
        (this.innerEndBackground = this.nodeBorder),
        (this.errorBkgColor = this.errorBkgColor || this.tertiaryColor),
        (this.errorTextColor = this.errorTextColor || this.tertiaryTextColor),
        (this.transitionColor = this.transitionColor || this.lineColor),
        (this.specialStateColor = this.lineColor),
        (this.cScale0 = this.cScale0 || "#ECECFE"),
        (this.cScale1 = this.cScale1 || "#E9E9F1"),
        (this.cScale2 = this.cScale2 || chunkICPOFSXXValue167),
        (this.cScale3 =
          this.cScale3 ||
          invertN("#ECECFE", {
            h: 30,
          })),
        (this.cScale4 =
          this.cScale4 ||
          invertN("#ECECFE", {
            h: 60,
          })),
        (this.cScale5 =
          this.cScale5 ||
          invertN("#ECECFE", {
            h: 90,
          })),
        (this.cScale6 =
          this.cScale6 ||
          invertN("#ECECFE", {
            h: 120,
          })),
        (this.cScale7 =
          this.cScale7 ||
          invertN("#ECECFE", {
            h: 150,
          })),
        (this.cScale8 =
          this.cScale8 ||
          invertN("#ECECFE", {
            h: 210,
            l: 150,
          })),
        (this.cScale9 =
          this.cScale9 ||
          invertN("#ECECFE", {
            h: 270,
          })),
        (this.cScale10 =
          this.cScale10 ||
          invertN("#ECECFE", {
            h: 300,
          })),
        (this.cScale11 =
          this.cScale11 ||
          invertN("#ECECFE", {
            h: 330,
          })),
        this.darkMode)
      )
        for (
          let chunkICPOFSXXValue315 = 0;
          chunkICPOFSXXValue315 < this.THEME_COLOR_LIMIT;
          chunkICPOFSXXValue315++
        )
          this["cScale" + chunkICPOFSXXValue315] = invertR(
            this["cScale" + chunkICPOFSXXValue315],
            75,
          );
      else
        for (
          let chunkICPOFSXXValue316 = 0;
          chunkICPOFSXXValue316 < this.THEME_COLOR_LIMIT;
          chunkICPOFSXXValue316++
        )
          this["cScale" + chunkICPOFSXXValue316] = invertR(
            this["cScale" + chunkICPOFSXXValue316],
            25,
          );
      for (
        let chunkICPOFSXXValue299 = 0;
        chunkICPOFSXXValue299 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue299++
      )
        this["cScaleInv" + chunkICPOFSXXValue299] =
          this["cScaleInv" + chunkICPOFSXXValue299] ||
          invertT(this["cScale" + chunkICPOFSXXValue299]);
      for (
        let chunkICPOFSXXValue254 = 0;
        chunkICPOFSXXValue254 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue254++
      )
        this.darkMode
          ? (this["cScalePeer" + chunkICPOFSXXValue254] =
              this["cScalePeer" + chunkICPOFSXXValue254] ||
              invertI(this["cScale" + chunkICPOFSXXValue254], 10))
          : (this["cScalePeer" + chunkICPOFSXXValue254] =
              this["cScalePeer" + chunkICPOFSXXValue254] ||
              invertR(this["cScale" + chunkICPOFSXXValue254], 10));
      this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
      for (
        let chunkICPOFSXXValue291 = 0;
        chunkICPOFSXXValue291 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue291++
      )
        this["cScaleLabel" + chunkICPOFSXXValue291] =
          this["cScaleLabel" + chunkICPOFSXXValue291] || this.scaleLabelColor;
      let chunkICPOFSXXValue168 = this.darkMode ? -4 : -1;
      for (
        let chunkICPOFSXXValue233 = 0;
        chunkICPOFSXXValue233 < 5;
        chunkICPOFSXXValue233++
      ) {
        this["surface" + chunkICPOFSXXValue233] =
          this["surface" + chunkICPOFSXXValue233] ||
          invertN(this.mainBkg, {
            h: 180,
            s: -15,
            l: chunkICPOFSXXValue168 * (5 + chunkICPOFSXXValue233 * 3),
          });
        this["surfacePeer" + chunkICPOFSXXValue233] =
          this["surfacePeer" + chunkICPOFSXXValue233] ||
          invertN(this.mainBkg, {
            h: 180,
            s: -15,
            l: chunkICPOFSXXValue168 * (8 + chunkICPOFSXXValue233 * 3),
          });
      }
      this.classText = this.classText || this.textColor;
      this.fillType0 = this.fillType0 || "#ECECFE";
      this.fillType1 = this.fillType1 || "#E9E9F1";
      this.fillType2 =
        this.fillType2 ||
        invertN("#ECECFE", {
          h: 64,
        });
      this.fillType3 =
        this.fillType3 ||
        invertN("#E9E9F1", {
          h: 64,
        });
      this.fillType4 =
        this.fillType4 ||
        invertN("#ECECFE", {
          h: -64,
        });
      this.fillType5 =
        this.fillType5 ||
        invertN("#E9E9F1", {
          h: -64,
        });
      this.fillType6 =
        this.fillType6 ||
        invertN("#ECECFE", {
          h: 128,
        });
      this.fillType7 =
        this.fillType7 ||
        invertN("#E9E9F1", {
          h: 128,
        });
      this.pie1 = this.pie1 || "#ECECFE";
      this.pie2 = this.pie2 || "#E9E9F1";
      this.pie3 = this.pie3 || chunkICPOFSXXValue167;
      this.pie4 =
        this.pie4 ||
        invertN("#ECECFE", {
          l: -10,
        });
      this.pie5 =
        this.pie5 ||
        invertN("#E9E9F1", {
          l: -10,
        });
      this.pie6 =
        this.pie6 ||
        invertN(chunkICPOFSXXValue167, {
          l: -10,
        });
      this.pie7 =
        this.pie7 ||
        invertN("#ECECFE", {
          h: 60,
          l: -10,
        });
      this.pie8 =
        this.pie8 ||
        invertN("#ECECFE", {
          h: -60,
          l: -10,
        });
      this.pie9 =
        this.pie9 ||
        invertN("#ECECFE", {
          h: 120,
          l: 0,
        });
      this.pie10 =
        this.pie10 ||
        invertN("#ECECFE", {
          h: 60,
          l: -20,
        });
      this.pie11 =
        this.pie11 ||
        invertN("#ECECFE", {
          h: -60,
          l: -20,
        });
      this.pie12 =
        this.pie12 ||
        invertN("#ECECFE", {
          h: 120,
          l: -10,
        });
      this.pieTitleTextSize = this.pieTitleTextSize || "25px";
      this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
      this.pieSectionTextSize = this.pieSectionTextSize || "17px";
      this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
      this.pieLegendTextSize = this.pieLegendTextSize || "17px";
      this.pieLegendTextColor =
        this.pieLegendTextColor || this.taskTextDarkColor;
      this.pieStrokeColor = this.pieStrokeColor || "black";
      this.pieStrokeWidth = this.pieStrokeWidth || "2px";
      this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
      this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
      this.pieOpacity = this.pieOpacity || "0.7";
      this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor;
      this.vennSetTextColor = this.vennSetTextColor ?? this.textColor;
      this.quadrant1Fill = this.quadrant1Fill || "#ECECFE";
      this.quadrant2Fill =
        this.quadrant2Fill ||
        invertN("#ECECFE", {
          r: 5,
          g: 5,
          b: 5,
        });
      this.quadrant3Fill =
        this.quadrant3Fill ||
        invertN("#ECECFE", {
          r: 10,
          g: 10,
          b: 10,
        });
      this.quadrant4Fill =
        this.quadrant4Fill ||
        invertN("#ECECFE", {
          r: 15,
          g: 15,
          b: 15,
        });
      this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
      this.quadrant2TextFill =
        this.quadrant2TextFill ||
        invertN(this.primaryTextColor, {
          r: -5,
          g: -5,
          b: -5,
        });
      this.quadrant3TextFill =
        this.quadrant3TextFill ||
        invertN(this.primaryTextColor, {
          r: -10,
          g: -10,
          b: -10,
        });
      this.quadrant4TextFill =
        this.quadrant4TextFill ||
        invertN(this.primaryTextColor, {
          r: -15,
          g: -15,
          b: -15,
        });
      this.quadrantPointFill =
        this.quadrantPointFill || invertO(this.quadrant1Fill)
          ? invertI(this.quadrant1Fill)
          : invertR(this.quadrant1Fill);
      this.quadrantPointTextFill =
        this.quadrantPointTextFill || this.primaryTextColor;
      this.quadrantXAxisTextFill =
        this.quadrantXAxisTextFill || this.primaryTextColor;
      this.quadrantYAxisTextFill =
        this.quadrantYAxisTextFill || this.primaryTextColor;
      this.quadrantInternalBorderStrokeFill =
        this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantExternalBorderStrokeFill =
        this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
      this.xyChart = {
        backgroundColor: this.xyChart?.backgroundColor || this.background,
        titleColor: this.xyChart?.titleColor || this.primaryTextColor,
        xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
        xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
        xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
        xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
        yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
        yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
        yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
        yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
        plotColorPalette:
          this.xyChart?.plotColorPalette ||
          "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0",
      };
      this.requirementBackground = this.requirementBackground || "#ECECFE";
      this.requirementBorderColor =
        this.requirementBorderColor || this.primaryBorderColor;
      this.requirementBorderSize = this.requirementBorderSize || "1";
      this.requirementTextColor =
        this.requirementTextColor || this.primaryTextColor;
      this.relationColor = this.relationColor || this.lineColor;
      this.relationLabelBackground =
        this.relationLabelBackground ||
        (this.darkMode
          ? invertR(this.secondaryColor, 30)
          : this.secondaryColor);
      this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
      this.git0 = this.git0 || "#ECECFE";
      this.git1 = this.git1 || "#E9E9F1";
      this.git2 = this.git2 || chunkICPOFSXXValue167;
      this.git3 =
        this.git3 ||
        invertN("#ECECFE", {
          h: -30,
        });
      this.git4 =
        this.git4 ||
        invertN("#ECECFE", {
          h: -60,
        });
      this.git5 =
        this.git5 ||
        invertN("#ECECFE", {
          h: -90,
        });
      this.git6 =
        this.git6 ||
        invertN("#ECECFE", {
          h: 60,
        });
      this.git7 =
        this.git7 ||
        invertN("#ECECFE", {
          h: 120,
        });
      this.darkMode
        ? ((this.git0 = invertI(this.git0, 25)),
          (this.git1 = invertI(this.git1, 25)),
          (this.git2 = invertI(this.git2, 25)),
          (this.git3 = invertI(this.git3, 25)),
          (this.git4 = invertI(this.git4, 25)),
          (this.git5 = invertI(this.git5, 25)),
          (this.git6 = invertI(this.git6, 25)),
          (this.git7 = invertI(this.git7, 25)))
        : ((this.git0 = invertR(this.git0, 25)),
          (this.git1 = invertR(this.git1, 25)),
          (this.git2 = invertR(this.git2, 25)),
          (this.git3 = invertR(this.git3, 25)),
          (this.git4 = invertR(this.git4, 25)),
          (this.git5 = invertR(this.git5, 25)),
          (this.git6 = invertR(this.git6, 25)),
          (this.git7 = invertR(this.git7, 25)));
      this.gitInv0 = this.gitInv0 || invertT(this.git0);
      this.gitInv1 = this.gitInv1 || invertT(this.git1);
      this.gitInv2 = this.gitInv2 || invertT(this.git2);
      this.gitInv3 = this.gitInv3 || invertT(this.git3);
      this.gitInv4 = this.gitInv4 || invertT(this.git4);
      this.gitInv5 = this.gitInv5 || invertT(this.git5);
      this.gitInv6 = this.gitInv6 || invertT(this.git6);
      this.gitInv7 = this.gitInv7 || invertT(this.git7);
      this.branchLabelColor =
        this.branchLabelColor ||
        (this.darkMode ? "black" : this.labelTextColor);
      this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor;
      this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor;
      this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor;
      this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor;
      this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor;
      this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor;
      this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor;
      this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor;
      this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
      this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
      this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
      this.tagLabelFontSize = this.tagLabelFontSize || "10px";
      this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
      this.commitLabelBackground =
        this.commitLabelBackground || this.secondaryColor;
      this.commitLabelFontSize = this.commitLabelFontSize || "10px";
      this.attributeBackgroundColorOdd =
        this.attributeBackgroundColorOdd || "#ffffff";
      this.attributeBackgroundColorEven =
        this.attributeBackgroundColorEven || "#f2f2f2";
    }
    calculate(chunkICPOFSXXParam46) {
      if (typeof chunkICPOFSXXParam46 != "object") {
        this.updateColors();
        return;
      }
      let chunkICPOFSXXValue246 = Object.keys(chunkICPOFSXXParam46);
      chunkICPOFSXXValue246.forEach((item) => {
        this[item] = chunkICPOFSXXParam46[item];
      });
      this.updateColors();
      chunkICPOFSXXValue246.forEach((item) => {
        this[item] = chunkICPOFSXXParam46[item];
      });
    }
  },
  chunkICPOFSXXValue53 = chunkAGHRB4JFN((chunkICPOFSXXParam122) => {
    let chunkICPOFSXXValue346 = new chunkICPOFSXXValue52();
    return (
      chunkICPOFSXXValue346.calculate(chunkICPOFSXXParam122),
      chunkICPOFSXXValue346
    );
  }, "getThemeVariables"),
  chunkICPOFSXXValue54 = class {
    static {
      chunkAGHRB4JFN(this, "Theme");
    }
    constructor() {
      this.background = "#333";
      this.primaryColor = "#1f2020";
      this.secondaryColor = invertI(this.primaryColor, 16);
      this.tertiaryColor = invertN(this.primaryColor, {
        h: -160,
      });
      this.primaryBorderColor = invertT(this.background);
      this.secondaryBorderColor = chunkICPOFSXXValue44(
        this.secondaryColor,
        this.darkMode,
      );
      this.tertiaryBorderColor = chunkICPOFSXXValue44(
        this.tertiaryColor,
        this.darkMode,
      );
      this.primaryTextColor = invertT(this.primaryColor);
      this.secondaryTextColor = invertT(this.secondaryColor);
      this.tertiaryTextColor = invertT(this.tertiaryColor);
      this.mainBkg = "#2a2020";
      this.secondBkg = "calculated";
      this.mainContrastColor = "lightgrey";
      this.darkTextColor = invertI(invertT("#323D47"), 10);
      this.border1 = "#ccc";
      this.border2 = invertS(255, 255, 255, 0.25);
      this.arrowheadColor = invertT(this.background);
      this.fontFamily = "arial, sans-serif";
      this.fontSize = "14px";
      this.labelBackground = "#181818";
      this.textColor = "#ccc";
      this.THEME_COLOR_LIMIT = 12;
      this.radius = 3;
      this.strokeWidth = 1;
      this.noteBkgColor = "#fff5ad";
      this.noteTextColor = "#333";
      this.THEME_COLOR_LIMIT = 12;
      this.fontFamily = "arial, sans-serif";
      this.fontSize = "14px";
      this.useGradient = true;
      this.gradientStart = "#0042eb";
      this.gradientStop = "#eb0042";
      this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,0.2))";
      this.archEdgeColor = "calculated";
      this.archEdgeArrowColor = "calculated";
      this.archEdgeWidth = "3";
      this.archGroupBorderColor = this.primaryBorderColor;
      this.archGroupBorderWidth = "2px";
      this.noteFontWeight = "normal";
      this.fontWeight = "normal";
    }
    updateColors() {
      if (
        ((this.primaryTextColor =
          this.primaryTextColor || (this.darkMode ? "#eee" : "#333")),
        (this.secondaryColor =
          this.secondaryColor ||
          invertN(this.primaryColor, {
            h: -120,
          })),
        (this.tertiaryColor =
          this.tertiaryColor ||
          invertN(this.primaryColor, {
            h: 180,
            l: 5,
          })),
        (this.primaryBorderColor =
          this.primaryBorderColor ||
          chunkICPOFSXXValue44(this.primaryColor, this.darkMode)),
        (this.secondaryBorderColor =
          this.secondaryBorderColor ||
          chunkICPOFSXXValue44(this.secondaryColor, this.darkMode)),
        (this.tertiaryBorderColor =
          this.tertiaryBorderColor ||
          chunkICPOFSXXValue44(this.tertiaryColor, this.darkMode)),
        (this.noteBorderColor =
          this.noteBorderColor ||
          chunkICPOFSXXValue44(this.noteBkgColor, this.darkMode)),
        (this.noteBkgColor = this.noteBkgColor || "#fff5ad"),
        (this.noteTextColor = this.noteTextColor || "#333"),
        (this.secondaryTextColor =
          this.secondaryTextColor || invertT(this.secondaryColor)),
        (this.tertiaryTextColor =
          this.tertiaryTextColor || invertT(this.tertiaryColor)),
        (this.lineColor = this.lineColor || invertT(this.background)),
        (this.arrowheadColor = this.arrowheadColor || invertT(this.background)),
        (this.textColor = this.textColor || this.primaryTextColor),
        (this.border2 = this.border2 || this.tertiaryBorderColor),
        (this.nodeBkg = this.nodeBkg || this.primaryColor),
        (this.mainBkg = this.mainBkg || this.primaryColor),
        (this.nodeBorder = this.nodeBorder || this.border1),
        (this.clusterBkg = this.clusterBkg || this.tertiaryColor),
        (this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor),
        (this.defaultLinkColor = this.defaultLinkColor || this.lineColor),
        (this.titleColor = this.titleColor || this.tertiaryTextColor),
        (this.edgeLabelBackground =
          this.edgeLabelBackground ||
          (this.darkMode
            ? invertR(this.secondaryColor, 30)
            : this.secondaryColor)),
        (this.nodeTextColor = this.nodeTextColor || this.primaryTextColor),
        (this.actorBorder = this.actorBorder || this.primaryBorderColor),
        (this.actorBkg = this.actorBkg || this.mainBkg),
        (this.actorTextColor = this.actorTextColor || this.primaryTextColor),
        (this.actorLineColor = this.actorLineColor || this.actorBorder),
        (this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg),
        (this.signalColor = this.signalColor || this.textColor),
        (this.signalTextColor = this.signalTextColor || this.textColor),
        (this.labelBoxBorderColor =
          this.labelBoxBorderColor || this.actorBorder),
        (this.labelTextColor = this.labelTextColor || this.actorTextColor),
        (this.loopTextColor = this.loopTextColor || this.actorTextColor),
        (this.activationBorderColor =
          this.activationBorderColor || invertR(this.secondaryColor, 10)),
        (this.activationBkgColor =
          this.activationBkgColor || this.secondaryColor),
        (this.sequenceNumberColor =
          this.sequenceNumberColor || invertT(this.lineColor)),
        (this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor),
        (this.altSectionBkgColor = this.altSectionBkgColor || "white"),
        (this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor),
        (this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor),
        (this.excludeBkgColor = this.excludeBkgColor || "#eeeeee"),
        (this.taskBorderColor =
          this.taskBorderColor || this.primaryBorderColor),
        (this.taskBkgColor = this.taskBkgColor || this.primaryColor),
        (this.activeTaskBorderColor =
          this.activeTaskBorderColor || this.primaryColor),
        (this.activeTaskBkgColor =
          this.activeTaskBkgColor || invertI(this.primaryColor, 23)),
        (this.gridColor = this.gridColor || "lightgrey"),
        (this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey"),
        (this.doneTaskBorderColor = this.doneTaskBorderColor || "grey"),
        (this.critBorderColor = this.critBorderColor || "#ff8888"),
        (this.critBkgColor = this.critBkgColor || "red"),
        (this.todayLineColor = this.todayLineColor || "red"),
        (this.vertLineColor = this.vertLineColor || this.primaryBorderColor),
        (this.taskTextColor = this.taskTextColor || this.textColor),
        (this.taskTextOutsideColor =
          this.taskTextOutsideColor || this.textColor),
        (this.taskTextLightColor = this.taskTextLightColor || this.textColor),
        (this.taskTextColor = this.taskTextColor || this.primaryTextColor),
        (this.taskTextDarkColor = this.taskTextDarkColor || this.textColor),
        (this.taskTextClickableColor =
          this.taskTextClickableColor || "#003163"),
        (this.archEdgeColor = this.lineColor),
        (this.archEdgeArrowColor = this.lineColor),
        (this.personBorder = this.personBorder || this.primaryBorderColor),
        (this.personBkg = this.personBkg || this.mainBkg),
        (this.transitionColor = this.transitionColor || this.lineColor),
        (this.transitionLabelColor =
          this.transitionLabelColor || this.textColor),
        (this.stateLabelColor =
          this.stateLabelColor || this.stateBkg || this.primaryTextColor),
        (this.stateBkg = this.stateBkg || this.mainBkg),
        (this.labelBackgroundColor =
          this.labelBackgroundColor || this.stateBkg),
        (this.compositeBackground =
          this.compositeBackground || this.background || this.tertiaryColor),
        (this.altBackground = this.altBackground || "#f0f0f0"),
        (this.compositeTitleBackground =
          this.compositeTitleBackground || this.mainBkg),
        (this.compositeBorder = this.compositeBorder || this.nodeBorder),
        (this.innerEndBackground = this.nodeBorder),
        (this.errorBkgColor = this.errorBkgColor || this.tertiaryColor),
        (this.errorTextColor = this.errorTextColor || this.tertiaryTextColor),
        (this.transitionColor = this.transitionColor || this.lineColor),
        (this.specialStateColor = this.lineColor),
        (this.cScale0 = this.cScale0 || this.primaryColor),
        (this.cScale1 = this.cScale1 || this.secondaryColor),
        (this.cScale2 = this.cScale2 || this.tertiaryColor),
        (this.cScale3 =
          this.cScale3 ||
          invertN(this.primaryColor, {
            h: 30,
          })),
        (this.cScale4 =
          this.cScale4 ||
          invertN(this.primaryColor, {
            h: 60,
          })),
        (this.cScale5 =
          this.cScale5 ||
          invertN(this.primaryColor, {
            h: 90,
          })),
        (this.cScale6 =
          this.cScale6 ||
          invertN(this.primaryColor, {
            h: 120,
          })),
        (this.cScale7 =
          this.cScale7 ||
          invertN(this.primaryColor, {
            h: 150,
          })),
        (this.cScale8 =
          this.cScale8 ||
          invertN(this.primaryColor, {
            h: 210,
            l: 150,
          })),
        (this.cScale9 =
          this.cScale9 ||
          invertN(this.primaryColor, {
            h: 270,
          })),
        (this.cScale10 =
          this.cScale10 ||
          invertN(this.primaryColor, {
            h: 300,
          })),
        (this.cScale11 =
          this.cScale11 ||
          invertN(this.primaryColor, {
            h: 330,
          })),
        this.darkMode)
      )
        for (
          let chunkICPOFSXXValue317 = 0;
          chunkICPOFSXXValue317 < this.THEME_COLOR_LIMIT;
          chunkICPOFSXXValue317++
        )
          this["cScale" + chunkICPOFSXXValue317] = invertR(
            this["cScale" + chunkICPOFSXXValue317],
            75,
          );
      else
        for (
          let chunkICPOFSXXValue318 = 0;
          chunkICPOFSXXValue318 < this.THEME_COLOR_LIMIT;
          chunkICPOFSXXValue318++
        )
          this["cScale" + chunkICPOFSXXValue318] = invertR(
            this["cScale" + chunkICPOFSXXValue318],
            25,
          );
      for (
        let chunkICPOFSXXValue300 = 0;
        chunkICPOFSXXValue300 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue300++
      )
        this["cScaleInv" + chunkICPOFSXXValue300] =
          this["cScaleInv" + chunkICPOFSXXValue300] ||
          invertT(this["cScale" + chunkICPOFSXXValue300]);
      for (
        let chunkICPOFSXXValue255 = 0;
        chunkICPOFSXXValue255 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue255++
      )
        this.darkMode
          ? (this["cScalePeer" + chunkICPOFSXXValue255] =
              this["cScalePeer" + chunkICPOFSXXValue255] ||
              invertI(this["cScale" + chunkICPOFSXXValue255], 10))
          : (this["cScalePeer" + chunkICPOFSXXValue255] =
              this["cScalePeer" + chunkICPOFSXXValue255] ||
              invertR(this["cScale" + chunkICPOFSXXValue255], 10));
      this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
      for (
        let chunkICPOFSXXValue292 = 0;
        chunkICPOFSXXValue292 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue292++
      )
        this["cScaleLabel" + chunkICPOFSXXValue292] =
          this["cScaleLabel" + chunkICPOFSXXValue292] || this.scaleLabelColor;
      let chunkICPOFSXXValue163 = this.darkMode ? -4 : -1;
      for (
        let chunkICPOFSXXValue234 = 0;
        chunkICPOFSXXValue234 < 5;
        chunkICPOFSXXValue234++
      ) {
        this["surface" + chunkICPOFSXXValue234] =
          this["surface" + chunkICPOFSXXValue234] ||
          invertN(this.mainBkg, {
            h: 180,
            s: -15,
            l: chunkICPOFSXXValue163 * (5 + chunkICPOFSXXValue234 * 3),
          });
        this["surfacePeer" + chunkICPOFSXXValue234] =
          this["surfacePeer" + chunkICPOFSXXValue234] ||
          invertN(this.mainBkg, {
            h: 180,
            s: -15,
            l: chunkICPOFSXXValue163 * (8 + chunkICPOFSXXValue234 * 3),
          });
      }
      this.classText = this.classText || this.textColor;
      this.fillType0 = this.fillType0 || this.primaryColor;
      this.fillType1 = this.fillType1 || this.secondaryColor;
      this.fillType2 =
        this.fillType2 ||
        invertN(this.primaryColor, {
          h: 64,
        });
      this.fillType3 =
        this.fillType3 ||
        invertN(this.secondaryColor, {
          h: 64,
        });
      this.fillType4 =
        this.fillType4 ||
        invertN(this.primaryColor, {
          h: -64,
        });
      this.fillType5 =
        this.fillType5 ||
        invertN(this.secondaryColor, {
          h: -64,
        });
      this.fillType6 =
        this.fillType6 ||
        invertN(this.primaryColor, {
          h: 128,
        });
      this.fillType7 =
        this.fillType7 ||
        invertN(this.secondaryColor, {
          h: 128,
        });
      this.pie1 = this.pie1 || this.primaryColor;
      this.pie2 = this.pie2 || this.secondaryColor;
      this.pie3 = this.pie3 || this.tertiaryColor;
      this.pie4 =
        this.pie4 ||
        invertN(this.primaryColor, {
          l: -10,
        });
      this.pie5 =
        this.pie5 ||
        invertN(this.secondaryColor, {
          l: -10,
        });
      this.pie6 =
        this.pie6 ||
        invertN(this.tertiaryColor, {
          l: -10,
        });
      this.pie7 =
        this.pie7 ||
        invertN(this.primaryColor, {
          h: 60,
          l: -10,
        });
      this.pie8 =
        this.pie8 ||
        invertN(this.primaryColor, {
          h: -60,
          l: -10,
        });
      this.pie9 =
        this.pie9 ||
        invertN(this.primaryColor, {
          h: 120,
          l: 0,
        });
      this.pie10 =
        this.pie10 ||
        invertN(this.primaryColor, {
          h: 60,
          l: -20,
        });
      this.pie11 =
        this.pie11 ||
        invertN(this.primaryColor, {
          h: -60,
          l: -20,
        });
      this.pie12 =
        this.pie12 ||
        invertN(this.primaryColor, {
          h: 120,
          l: -10,
        });
      this.pieTitleTextSize = this.pieTitleTextSize || "25px";
      this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
      this.pieSectionTextSize = this.pieSectionTextSize || "17px";
      this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
      this.pieLegendTextSize = this.pieLegendTextSize || "17px";
      this.pieLegendTextColor =
        this.pieLegendTextColor || this.taskTextDarkColor;
      this.pieStrokeColor = this.pieStrokeColor || "black";
      this.pieStrokeWidth = this.pieStrokeWidth || "2px";
      this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
      this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
      this.pieOpacity = this.pieOpacity || "0.7";
      this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor;
      this.vennSetTextColor = this.vennSetTextColor ?? this.textColor;
      this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
      this.quadrant2Fill =
        this.quadrant2Fill ||
        invertN(this.primaryColor, {
          r: 5,
          g: 5,
          b: 5,
        });
      this.quadrant3Fill =
        this.quadrant3Fill ||
        invertN(this.primaryColor, {
          r: 10,
          g: 10,
          b: 10,
        });
      this.quadrant4Fill =
        this.quadrant4Fill ||
        invertN(this.primaryColor, {
          r: 15,
          g: 15,
          b: 15,
        });
      this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
      this.quadrant2TextFill =
        this.quadrant2TextFill ||
        invertN(this.primaryTextColor, {
          r: -5,
          g: -5,
          b: -5,
        });
      this.quadrant3TextFill =
        this.quadrant3TextFill ||
        invertN(this.primaryTextColor, {
          r: -10,
          g: -10,
          b: -10,
        });
      this.quadrant4TextFill =
        this.quadrant4TextFill ||
        invertN(this.primaryTextColor, {
          r: -15,
          g: -15,
          b: -15,
        });
      this.quadrantPointFill =
        this.quadrantPointFill || invertO(this.quadrant1Fill)
          ? invertI(this.quadrant1Fill)
          : invertR(this.quadrant1Fill);
      this.quadrantPointTextFill =
        this.quadrantPointTextFill || this.primaryTextColor;
      this.quadrantXAxisTextFill =
        this.quadrantXAxisTextFill || this.primaryTextColor;
      this.quadrantYAxisTextFill =
        this.quadrantYAxisTextFill || this.primaryTextColor;
      this.quadrantInternalBorderStrokeFill =
        this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantExternalBorderStrokeFill =
        this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
      this.xyChart = {
        backgroundColor: this.xyChart?.backgroundColor || this.background,
        titleColor: this.xyChart?.titleColor || this.primaryTextColor,
        xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
        xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
        xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
        xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
        yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
        yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
        yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
        yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
        plotColorPalette:
          this.xyChart?.plotColorPalette ||
          "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0",
      };
      this.requirementBackground =
        this.requirementBackground || this.primaryColor;
      this.requirementBorderColor =
        this.requirementBorderColor || this.primaryBorderColor;
      this.requirementBorderSize = this.requirementBorderSize || "1";
      this.requirementTextColor =
        this.requirementTextColor || this.primaryTextColor;
      this.relationColor = this.relationColor || this.lineColor;
      this.relationLabelBackground =
        this.relationLabelBackground ||
        (this.darkMode
          ? invertR(this.secondaryColor, 30)
          : this.secondaryColor);
      this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
      this.git0 = this.git0 || "#0b0000";
      this.git1 = this.git1 || "#4d1037";
      this.git2 = this.git2 || "#3f5258";
      this.git3 = this.git3 || "#4f2f1b";
      this.git4 = this.git4 || "#6e0a0a";
      this.git5 = this.git5 || "#3b0048";
      this.git6 = this.git6 || "#995a01";
      this.git7 = this.git7 || "#154706";
      this.gitDarkMode = true;
      this.gitDarkMode
        ? ((this.git0 = invertI(this.git0, 25)),
          (this.git1 = invertI(this.git1, 25)),
          (this.git2 = invertI(this.git2, 25)),
          (this.git3 = invertI(this.git3, 25)),
          (this.git4 = invertI(this.git4, 25)),
          (this.git5 = invertI(this.git5, 25)),
          (this.git6 = invertI(this.git6, 25)),
          (this.git7 = invertI(this.git7, 25)))
        : ((this.git0 = invertR(this.git0, 25)),
          (this.git1 = invertR(this.git1, 25)),
          (this.git2 = invertR(this.git2, 25)),
          (this.git3 = invertR(this.git3, 25)),
          (this.git4 = invertR(this.git4, 25)),
          (this.git5 = invertR(this.git5, 25)),
          (this.git6 = invertR(this.git6, 25)),
          (this.git7 = invertR(this.git7, 25)));
      this.gitInv0 = this.gitInv0 || invertT(this.git0);
      this.gitInv1 = this.gitInv1 || invertT(this.git1);
      this.gitInv2 = this.gitInv2 || invertT(this.git2);
      this.gitInv3 = this.gitInv3 || invertT(this.git3);
      this.gitInv4 = this.gitInv4 || invertT(this.git4);
      this.gitInv5 = this.gitInv5 || invertT(this.git5);
      this.gitInv6 = this.gitInv6 || invertT(this.git6);
      this.gitInv7 = this.gitInv7 || invertT(this.git7);
      this.branchLabelColor =
        this.branchLabelColor ||
        (this.darkMode ? "black" : this.labelTextColor);
      this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor;
      this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor;
      this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor;
      this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor;
      this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor;
      this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor;
      this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor;
      this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor;
      this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
      this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
      this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
      this.tagLabelFontSize = this.tagLabelFontSize || "10px";
      this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
      this.commitLabelBackground =
        this.commitLabelBackground || this.secondaryColor;
      this.commitLabelFontSize = this.commitLabelFontSize || "10px";
      this.attributeBackgroundColorOdd =
        this.attributeBackgroundColorOdd || "#ffffff";
      this.attributeBackgroundColorEven =
        this.attributeBackgroundColorEven || "#f2f2f2";
    }
    calculate(chunkICPOFSXXParam47) {
      if (typeof chunkICPOFSXXParam47 != "object") {
        this.updateColors();
        return;
      }
      let chunkICPOFSXXValue247 = Object.keys(chunkICPOFSXXParam47);
      chunkICPOFSXXValue247.forEach((item) => {
        this[item] = chunkICPOFSXXParam47[item];
      });
      this.updateColors();
      chunkICPOFSXXValue247.forEach((item) => {
        this[item] = chunkICPOFSXXParam47[item];
      });
    }
  },
  chunkICPOFSXXValue55 = chunkAGHRB4JFN((chunkICPOFSXXParam118) => {
    let chunkICPOFSXXValue342 = new chunkICPOFSXXValue54();
    return (
      chunkICPOFSXXValue342.calculate(chunkICPOFSXXParam118),
      chunkICPOFSXXValue342
    );
  }, "getThemeVariables"),
  chunkICPOFSXXValue56 = class {
    static {
      chunkAGHRB4JFN(this, "Theme");
    }
    constructor() {
      this.background = "#ffffff";
      this.primaryColor = "#cccccc";
      this.mainBkg = "#ffffff";
      this.noteBkgColor = "#fff5ad";
      this.noteTextColor = "#28253D";
      this.THEME_COLOR_LIMIT = 12;
      this.radius = 12;
      this.strokeWidth = 2;
      this.primaryBorderColor = chunkICPOFSXXValue44("#28253D", this.darkMode);
      this.fontFamily = '"Recursive Variable", arial, sans-serif';
      this.fontSize = "14px";
      this.nodeBorder = "#28253D";
      this.stateBorder = "#28253D";
      this.useGradient = false;
      this.gradientStart = "#0042eb";
      this.gradientStop = "#eb0042";
      this.dropShadow = "url(#drop-shadow)";
      this.nodeShadow = true;
      this.tertiaryColor = "#ffffff";
      this.clusterBkg = "#F9F9FB";
      this.clusterBorder = "#BDBCCC";
      this.noteBorderColor = "#FACC15";
      this.archEdgeColor = "calculated";
      this.archEdgeArrowColor = "calculated";
      this.archEdgeWidth = "3";
      this.archGroupBorderColor = this.primaryBorderColor;
      this.archGroupBorderWidth = "2px";
      this.actorBorder = "#28253D";
      this.filterColor = "#000000";
    }
    updateColors() {
      this.primaryTextColor =
        this.primaryTextColor || (this.darkMode ? "#eee" : "#28253D");
      this.secondaryColor =
        this.secondaryColor ||
        invertN(this.primaryColor, {
          h: -120,
        });
      this.tertiaryColor =
        this.tertiaryColor ||
        invertN(this.primaryColor, {
          h: 180,
          l: 5,
        });
      this.primaryBorderColor =
        this.primaryBorderColor ||
        chunkICPOFSXXValue44(this.primaryColor, this.darkMode);
      this.secondaryBorderColor =
        this.secondaryBorderColor ||
        chunkICPOFSXXValue44(this.secondaryColor, this.darkMode);
      this.tertiaryBorderColor =
        this.tertiaryBorderColor ||
        chunkICPOFSXXValue44(this.tertiaryColor, this.darkMode);
      this.noteBorderColor =
        this.noteBorderColor ||
        chunkICPOFSXXValue44(this.noteBkgColor, this.darkMode);
      this.noteBkgColor = this.noteBkgColor || "#FEF9C3";
      this.noteTextColor = this.noteTextColor || "#28253D";
      this.secondaryTextColor =
        this.secondaryTextColor || invertT(this.secondaryColor);
      this.tertiaryTextColor =
        this.tertiaryTextColor || invertT(this.tertiaryColor);
      this.lineColor = this.lineColor || invertT(this.background);
      this.arrowheadColor = this.arrowheadColor || invertT(this.background);
      this.textColor = this.textColor || this.primaryTextColor;
      this.border2 = this.border2 || this.tertiaryBorderColor;
      this.nodeBkg = this.nodeBkg || this.primaryColor;
      this.mainBkg = this.mainBkg || this.primaryColor;
      this.nodeBorder = this.nodeBorder || this.primaryBorderColor;
      this.clusterBkg = this.clusterBkg || this.tertiaryColor;
      this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor;
      this.defaultLinkColor = this.defaultLinkColor || this.lineColor;
      this.titleColor = this.titleColor || this.tertiaryTextColor;
      this.edgeLabelBackground =
        this.edgeLabelBackground ||
        (this.darkMode
          ? invertR(this.secondaryColor, 30)
          : this.secondaryColor);
      this.nodeTextColor = this.nodeTextColor || this.primaryTextColor;
      this.noteFontWeight = 600;
      this.actorBorder = this.actorBorder || this.primaryBorderColor;
      this.actorBkg = this.actorBkg || this.mainBkg;
      this.actorTextColor = this.actorTextColor || this.primaryTextColor;
      this.actorLineColor = this.actorLineColor || this.actorBorder;
      this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg;
      this.signalColor = this.signalColor || this.textColor;
      this.signalTextColor = this.signalTextColor || this.textColor;
      this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder;
      this.labelTextColor = this.labelTextColor || this.actorTextColor;
      this.loopTextColor = this.loopTextColor || this.actorTextColor;
      this.activationBorderColor =
        this.activationBorderColor || invertR(this.secondaryColor, 10);
      this.activationBkgColor = this.activationBkgColor || this.secondaryColor;
      this.sequenceNumberColor =
        this.sequenceNumberColor || invertT(this.lineColor);
      let chunkICPOFSXXValue175 = invertN("#ECECFE", {
        h: 180,
        l: 5,
      });
      this.sectionBkgColor = this.sectionBkgColor || chunkICPOFSXXValue175;
      this.altSectionBkgColor = this.altSectionBkgColor || "white";
      this.sectionBkgColor = this.sectionBkgColor || "#E9E9F1";
      this.sectionBkgColor2 = this.sectionBkgColor2 || "#ECECFE";
      this.excludeBkgColor = this.excludeBkgColor || "#eeeeee";
      this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor;
      this.taskBkgColor = this.taskBkgColor || "#ECECFE";
      this.activeTaskBorderColor = this.activeTaskBorderColor || "#ECECFE";
      this.activeTaskBkgColor =
        this.activeTaskBkgColor || invertI("#ECECFE", 23);
      this.gridColor = this.gridColor || "lightgrey";
      this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey";
      this.doneTaskBorderColor = this.doneTaskBorderColor || "grey";
      this.critBorderColor = this.critBorderColor || "#ff8888";
      this.critBkgColor = this.critBkgColor || "red";
      this.todayLineColor = this.todayLineColor || "red";
      this.taskTextColor = this.taskTextColor || this.textColor;
      this.vertLineColor = this.vertLineColor || this.primaryBorderColor;
      this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor;
      this.taskTextLightColor = this.taskTextLightColor || this.textColor;
      this.taskTextColor = this.taskTextColor || this.primaryTextColor;
      this.taskTextDarkColor = this.taskTextDarkColor || this.textColor;
      this.taskTextClickableColor = this.taskTextClickableColor || "#003163";
      this.archEdgeColor = this.lineColor;
      this.archEdgeArrowColor = this.lineColor;
      this.personBorder = this.personBorder || this.primaryBorderColor;
      this.personBkg = this.personBkg || this.mainBkg;
      this.transitionColor = this.transitionColor || this.lineColor;
      this.transitionLabelColor = this.transitionLabelColor || this.textColor;
      this.stateLabelColor =
        this.stateLabelColor || this.stateBkg || this.primaryTextColor;
      this.compositeTitleBackground = "#F9F9FB";
      this.altBackground = "#F9F9FB";
      this.stateEdgeLabelBackground = "#FFFFFF";
      this.fontWeight = 600;
      this.stateBkg = this.stateBkg || this.mainBkg;
      this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
      this.compositeBackground =
        this.compositeBackground || this.background || this.tertiaryColor;
      this.altBackground = this.altBackground || "#f0f0f0";
      this.compositeTitleBackground =
        this.compositeTitleBackground || this.mainBkg;
      this.compositeBorder = this.compositeBorder || this.nodeBorder;
      this.innerEndBackground = this.nodeBorder;
      this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
      this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
      this.transitionColor = this.transitionColor || this.lineColor;
      this.specialStateColor = this.lineColor;
      for (
        let chunkICPOFSXXValue329 = 0;
        chunkICPOFSXXValue329 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue329++
      )
        this["cScale" + chunkICPOFSXXValue329] = this.mainBkg;
      if (this.darkMode)
        for (
          let chunkICPOFSXXValue319 = 0;
          chunkICPOFSXXValue319 < this.THEME_COLOR_LIMIT;
          chunkICPOFSXXValue319++
        )
          this["cScale" + chunkICPOFSXXValue319] = invertR(
            this["cScale" + chunkICPOFSXXValue319],
            75,
          );
      else
        for (
          let chunkICPOFSXXValue320 = 0;
          chunkICPOFSXXValue320 < this.THEME_COLOR_LIMIT;
          chunkICPOFSXXValue320++
        )
          this["cScale" + chunkICPOFSXXValue320] = invertR(
            this["cScale" + chunkICPOFSXXValue320],
            25,
          );
      for (
        let chunkICPOFSXXValue301 = 0;
        chunkICPOFSXXValue301 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue301++
      )
        this["cScaleInv" + chunkICPOFSXXValue301] =
          this["cScaleInv" + chunkICPOFSXXValue301] ||
          invertT(this["cScale" + chunkICPOFSXXValue301]);
      for (
        let chunkICPOFSXXValue256 = 0;
        chunkICPOFSXXValue256 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue256++
      )
        this.darkMode
          ? (this["cScalePeer" + chunkICPOFSXXValue256] =
              this["cScalePeer" + chunkICPOFSXXValue256] ||
              invertI(this["cScale" + chunkICPOFSXXValue256], 10))
          : (this["cScalePeer" + chunkICPOFSXXValue256] =
              this["cScalePeer" + chunkICPOFSXXValue256] ||
              invertR(this["cScale" + chunkICPOFSXXValue256], 10));
      this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
      for (
        let chunkICPOFSXXValue293 = 0;
        chunkICPOFSXXValue293 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue293++
      )
        this["cScaleLabel" + chunkICPOFSXXValue293] =
          this["cScaleLabel" + chunkICPOFSXXValue293] || this.scaleLabelColor;
      let chunkICPOFSXXValue176 = this.darkMode ? -4 : -1;
      for (
        let chunkICPOFSXXValue235 = 0;
        chunkICPOFSXXValue235 < 5;
        chunkICPOFSXXValue235++
      ) {
        this["surface" + chunkICPOFSXXValue235] =
          this["surface" + chunkICPOFSXXValue235] ||
          invertN(this.mainBkg, {
            h: 180,
            s: -15,
            l: chunkICPOFSXXValue176 * (5 + chunkICPOFSXXValue235 * 3),
          });
        this["surfacePeer" + chunkICPOFSXXValue235] =
          this["surfacePeer" + chunkICPOFSXXValue235] ||
          invertN(this.mainBkg, {
            h: 180,
            s: -15,
            l: chunkICPOFSXXValue176 * (8 + chunkICPOFSXXValue235 * 3),
          });
      }
      this.classText = this.classText || this.textColor;
      this.fillType0 = this.fillType0 || "#ECECFE";
      this.fillType1 = this.fillType1 || "#E9E9F1";
      this.fillType2 =
        this.fillType2 ||
        invertN("#ECECFE", {
          h: 64,
        });
      this.fillType3 =
        this.fillType3 ||
        invertN("#E9E9F1", {
          h: 64,
        });
      this.fillType4 =
        this.fillType4 ||
        invertN("#ECECFE", {
          h: -64,
        });
      this.fillType5 =
        this.fillType5 ||
        invertN("#E9E9F1", {
          h: -64,
        });
      this.fillType6 =
        this.fillType6 ||
        invertN("#ECECFE", {
          h: 128,
        });
      this.fillType7 =
        this.fillType7 ||
        invertN("#E9E9F1", {
          h: 128,
        });
      this.pie1 = this.pie1 || "#ECECFE";
      this.pie2 = this.pie2 || "#E9E9F1";
      this.pie3 = this.pie3 || chunkICPOFSXXValue175;
      this.pie4 =
        this.pie4 ||
        invertN("#ECECFE", {
          l: -10,
        });
      this.pie5 =
        this.pie5 ||
        invertN("#E9E9F1", {
          l: -10,
        });
      this.pie6 =
        this.pie6 ||
        invertN(chunkICPOFSXXValue175, {
          l: -10,
        });
      this.pie7 =
        this.pie7 ||
        invertN("#ECECFE", {
          h: 60,
          l: -10,
        });
      this.pie8 =
        this.pie8 ||
        invertN("#ECECFE", {
          h: -60,
          l: -10,
        });
      this.pie9 =
        this.pie9 ||
        invertN("#ECECFE", {
          h: 120,
          l: 0,
        });
      this.pie10 =
        this.pie10 ||
        invertN("#ECECFE", {
          h: 60,
          l: -20,
        });
      this.pie11 =
        this.pie11 ||
        invertN("#ECECFE", {
          h: -60,
          l: -20,
        });
      this.pie12 =
        this.pie12 ||
        invertN("#ECECFE", {
          h: 120,
          l: -10,
        });
      this.pieTitleTextSize = this.pieTitleTextSize || "25px";
      this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
      this.pieSectionTextSize = this.pieSectionTextSize || "17px";
      this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
      this.pieLegendTextSize = this.pieLegendTextSize || "17px";
      this.pieLegendTextColor =
        this.pieLegendTextColor || this.taskTextDarkColor;
      this.pieStrokeColor = this.pieStrokeColor || "black";
      this.pieStrokeWidth = this.pieStrokeWidth || "2px";
      this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
      this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
      this.pieOpacity = this.pieOpacity || "0.7";
      this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor;
      this.vennSetTextColor = this.vennSetTextColor ?? this.textColor;
      this.quadrant1Fill = this.quadrant1Fill || "#ECECFE";
      this.quadrant2Fill =
        this.quadrant2Fill ||
        invertN("#ECECFE", {
          r: 5,
          g: 5,
          b: 5,
        });
      this.quadrant3Fill =
        this.quadrant3Fill ||
        invertN("#ECECFE", {
          r: 10,
          g: 10,
          b: 10,
        });
      this.quadrant4Fill =
        this.quadrant4Fill ||
        invertN("#ECECFE", {
          r: 15,
          g: 15,
          b: 15,
        });
      this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
      this.quadrant2TextFill =
        this.quadrant2TextFill ||
        invertN(this.primaryTextColor, {
          r: -5,
          g: -5,
          b: -5,
        });
      this.quadrant3TextFill =
        this.quadrant3TextFill ||
        invertN(this.primaryTextColor, {
          r: -10,
          g: -10,
          b: -10,
        });
      this.quadrant4TextFill =
        this.quadrant4TextFill ||
        invertN(this.primaryTextColor, {
          r: -15,
          g: -15,
          b: -15,
        });
      this.quadrantPointFill =
        this.quadrantPointFill || invertO(this.quadrant1Fill)
          ? invertI(this.quadrant1Fill)
          : invertR(this.quadrant1Fill);
      this.quadrantPointTextFill =
        this.quadrantPointTextFill || this.primaryTextColor;
      this.quadrantXAxisTextFill =
        this.quadrantXAxisTextFill || this.primaryTextColor;
      this.quadrantYAxisTextFill =
        this.quadrantYAxisTextFill || this.primaryTextColor;
      this.quadrantInternalBorderStrokeFill =
        this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantExternalBorderStrokeFill =
        this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
      this.xyChart = {
        backgroundColor: this.xyChart?.backgroundColor || this.background,
        titleColor: this.xyChart?.titleColor || this.primaryTextColor,
        xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
        xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
        xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
        xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
        yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
        yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
        yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
        yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
        plotColorPalette:
          this.xyChart?.plotColorPalette ||
          "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0",
      };
      this.requirementBackground = this.requirementBackground || "#ECECFE";
      this.requirementBorderColor =
        this.requirementBorderColor || this.primaryBorderColor;
      this.requirementBorderSize = this.requirementBorderSize || "1";
      this.requirementTextColor =
        this.requirementTextColor || this.primaryTextColor;
      this.relationColor = this.relationColor || this.lineColor;
      this.relationLabelBackground =
        this.relationLabelBackground ||
        (this.darkMode
          ? invertR(this.secondaryColor, 30)
          : this.secondaryColor);
      this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
      this.requirementEdgeLabelBackground = "#FFFFFF";
      this.git0 = this.git0 || "#ECECFE";
      this.git1 = this.git1 || "#E9E9F1";
      this.git2 = this.git2 || chunkICPOFSXXValue175;
      this.git3 =
        this.git3 ||
        invertN("#ECECFE", {
          h: -30,
        });
      this.git4 =
        this.git4 ||
        invertN("#ECECFE", {
          h: -60,
        });
      this.git5 =
        this.git5 ||
        invertN("#ECECFE", {
          h: -90,
        });
      this.git6 =
        this.git6 ||
        invertN("#ECECFE", {
          h: 60,
        });
      this.git7 =
        this.git7 ||
        invertN("#ECECFE", {
          h: 120,
        });
      this.darkMode
        ? ((this.git0 = invertI(this.git0, 25)),
          (this.git1 = invertI(this.git1, 25)),
          (this.git2 = invertI(this.git2, 25)),
          (this.git3 = invertI(this.git3, 25)),
          (this.git4 = invertI(this.git4, 25)),
          (this.git5 = invertI(this.git5, 25)),
          (this.git6 = invertI(this.git6, 25)),
          (this.git7 = invertI(this.git7, 25)))
        : ((this.git0 = invertR(this.git0, 25)),
          (this.git1 = invertR(this.git1, 25)),
          (this.git2 = invertR(this.git2, 25)),
          (this.git3 = invertR(this.git3, 25)),
          (this.git4 = invertR(this.git4, 25)),
          (this.git5 = invertR(this.git5, 25)),
          (this.git6 = invertR(this.git6, 25)),
          (this.git7 = invertR(this.git7, 25)));
      this.gitInv0 = this.gitInv0 || invertT(this.git0);
      this.gitInv1 = this.gitInv1 || invertT(this.git1);
      this.gitInv2 = this.gitInv2 || invertT(this.git2);
      this.gitInv3 = this.gitInv3 || invertT(this.git3);
      this.gitInv4 = this.gitInv4 || invertT(this.git4);
      this.gitInv5 = this.gitInv5 || invertT(this.git5);
      this.gitInv6 = this.gitInv6 || invertT(this.git6);
      this.gitInv7 = this.gitInv7 || invertT(this.git7);
      this.branchLabelColor =
        this.branchLabelColor ||
        (this.darkMode ? "black" : this.labelTextColor);
      this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor;
      this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor;
      this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor;
      this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor;
      this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor;
      this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor;
      this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor;
      this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor;
      this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
      this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
      this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
      this.tagLabelFontSize = this.tagLabelFontSize || "10px";
      this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
      this.commitLabelBackground =
        this.commitLabelBackground || this.secondaryColor;
      this.commitLabelFontSize = this.commitLabelFontSize || "10px";
      this.commitLineColor = this.commitLineColor ?? "#BDBCCC";
      this.erEdgeLabelBackground = "#FFFFFF";
      this.attributeBackgroundColorOdd =
        this.attributeBackgroundColorOdd || "#ffffff";
      this.attributeBackgroundColorEven =
        this.attributeBackgroundColorEven || "#f2f2f2";
    }
    calculate(chunkICPOFSXXParam48) {
      if (typeof chunkICPOFSXXParam48 != "object") {
        this.updateColors();
        return;
      }
      let chunkICPOFSXXValue248 = Object.keys(chunkICPOFSXXParam48);
      chunkICPOFSXXValue248.forEach((item) => {
        this[item] = chunkICPOFSXXParam48[item];
      });
      this.updateColors();
      chunkICPOFSXXValue248.forEach((item) => {
        this[item] = chunkICPOFSXXParam48[item];
      });
    }
  },
  chunkICPOFSXXValue57 = chunkAGHRB4JFN((chunkICPOFSXXParam119) => {
    let chunkICPOFSXXValue343 = new chunkICPOFSXXValue56();
    return (
      chunkICPOFSXXValue343.calculate(chunkICPOFSXXParam119),
      chunkICPOFSXXValue343
    );
  }, "getThemeVariables"),
  chunkICPOFSXXValue58 = class {
    static {
      chunkAGHRB4JFN(this, "Theme");
    }
    constructor() {
      this.background = "#333";
      this.primaryColor = "#1f2020";
      this.secondaryColor = invertI(this.primaryColor, 16);
      this.tertiaryColor = invertN(this.primaryColor, {
        h: -160,
      });
      this.primaryBorderColor = invertT(this.background);
      this.secondaryBorderColor = chunkICPOFSXXValue44(
        this.secondaryColor,
        this.darkMode,
      );
      this.tertiaryBorderColor = chunkICPOFSXXValue44(
        this.tertiaryColor,
        this.darkMode,
      );
      this.primaryTextColor = invertT(this.primaryColor);
      this.secondaryTextColor = invertT(this.secondaryColor);
      this.tertiaryTextColor = invertT(this.tertiaryColor);
      this.mainBkg = "#111113";
      this.secondBkg = "calculated";
      this.mainContrastColor = "lightgrey";
      this.darkTextColor = invertI(invertT("#323D47"), 10);
      this.border1 = "#ccc";
      this.border2 = invertS(255, 255, 255, 0.25);
      this.arrowheadColor = invertT(this.background);
      this.fontFamily = '"Recursive Variable", arial, sans-serif';
      this.fontSize = "14px";
      this.labelBackground = "#111113";
      this.textColor = "#ccc";
      this.THEME_COLOR_LIMIT = 12;
      this.radius = 12;
      this.strokeWidth = 2;
      this.noteBkgColor = this.noteBkgColor ?? "#FEF9C3";
      this.noteTextColor = this.noteTextColor ?? "#28253D";
      this.THEME_COLOR_LIMIT = 12;
      this.fontFamily = '"Recursive Variable", arial, sans-serif';
      this.fontSize = "14px";
      this.nodeBorder = "#FFFFFF";
      this.stateBorder = "#FFFFFF";
      this.useGradient = false;
      this.gradientStart = "#0042eb";
      this.gradientStop = "#eb0042";
      this.dropShadow = "url(#drop-shadow)";
      this.nodeShadow = true;
      this.archEdgeColor = "calculated";
      this.archEdgeArrowColor = "calculated";
      this.archEdgeWidth = "3";
      this.archGroupBorderColor = this.primaryBorderColor;
      this.archGroupBorderWidth = "2px";
      this.clusterBkg = "#1E1A2E";
      this.clusterBorder = "#BDBCCC";
      this.noteBorderColor = "#FACC15";
      this.noteFontWeight = 600;
      this.filterColor = "#FFFFFF";
    }
    updateColors() {
      if (
        ((this.primaryTextColor =
          this.primaryTextColor || (this.darkMode ? "#eee" : "#FFFFFF")),
        (this.secondaryColor =
          this.secondaryColor ||
          invertN(this.primaryColor, {
            h: -120,
          })),
        (this.tertiaryColor =
          this.tertiaryColor ||
          invertN(this.primaryColor, {
            h: 180,
            l: 5,
          })),
        (this.primaryBorderColor =
          this.primaryBorderColor ||
          chunkICPOFSXXValue44(this.primaryColor, this.darkMode)),
        (this.secondaryBorderColor =
          this.secondaryBorderColor ||
          chunkICPOFSXXValue44(this.secondaryColor, this.darkMode)),
        (this.tertiaryBorderColor =
          this.tertiaryBorderColor ||
          chunkICPOFSXXValue44(this.tertiaryColor, this.darkMode)),
        (this.noteBorderColor =
          this.noteBorderColor ||
          chunkICPOFSXXValue44(this.noteBkgColor, this.darkMode)),
        (this.noteBkgColor = this.noteBkgColor || "#fff5ad"),
        (this.noteTextColor = this.noteTextColor || "#FFFFFF"),
        (this.secondaryTextColor =
          this.secondaryTextColor || invertT(this.secondaryColor)),
        (this.tertiaryTextColor =
          this.tertiaryTextColor || invertT(this.tertiaryColor)),
        (this.lineColor = this.lineColor || invertT(this.background)),
        (this.arrowheadColor = this.arrowheadColor || invertT(this.background)),
        (this.textColor = this.textColor || this.primaryTextColor),
        (this.border2 = this.border2 || this.tertiaryBorderColor),
        (this.nodeBkg = this.nodeBkg || this.primaryColor),
        (this.mainBkg = this.mainBkg || this.primaryColor),
        (this.nodeBorder = this.nodeBorder || this.border1),
        (this.clusterBkg = this.clusterBkg || this.tertiaryColor),
        (this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor),
        (this.defaultLinkColor = this.defaultLinkColor || this.lineColor),
        (this.titleColor = this.titleColor || this.tertiaryTextColor),
        (this.edgeLabelBackground =
          this.edgeLabelBackground ||
          (this.darkMode
            ? invertR(this.secondaryColor, 30)
            : this.secondaryColor)),
        (this.nodeTextColor = this.nodeTextColor || this.primaryTextColor),
        (this.actorBorder = "#FFFFFF"),
        (this.signalColor = "#FFFFFF"),
        (this.labelBoxBorderColor = "#BDBCCC"),
        (this.actorBorder = this.actorBorder || this.primaryBorderColor),
        (this.actorBkg = this.actorBkg || this.mainBkg),
        (this.actorTextColor = this.actorTextColor || this.primaryTextColor),
        (this.actorLineColor = this.actorLineColor || this.actorBorder),
        (this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg),
        (this.signalColor = this.signalColor || this.textColor),
        (this.signalTextColor = this.signalTextColor || this.textColor),
        (this.labelBoxBorderColor =
          this.labelBoxBorderColor || this.actorBorder),
        (this.labelTextColor = this.labelTextColor || this.actorTextColor),
        (this.loopTextColor = this.loopTextColor || this.actorTextColor),
        (this.activationBorderColor =
          this.activationBorderColor || invertR(this.secondaryColor, 10)),
        (this.activationBkgColor =
          this.activationBkgColor || this.secondaryColor),
        (this.sequenceNumberColor =
          this.sequenceNumberColor || invertT(this.lineColor)),
        (this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor),
        (this.altSectionBkgColor = this.altSectionBkgColor || "white"),
        (this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor),
        (this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor),
        (this.excludeBkgColor = this.excludeBkgColor || "#eeeeee"),
        (this.taskBorderColor =
          this.taskBorderColor || this.primaryBorderColor),
        (this.taskBkgColor = this.taskBkgColor || this.primaryColor),
        (this.activeTaskBorderColor =
          this.activeTaskBorderColor || this.primaryColor),
        (this.activeTaskBkgColor =
          this.activeTaskBkgColor || invertI(this.primaryColor, 23)),
        (this.gridColor = this.gridColor || "lightgrey"),
        (this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey"),
        (this.doneTaskBorderColor = this.doneTaskBorderColor || "grey"),
        (this.critBorderColor = this.critBorderColor || "#ff8888"),
        (this.critBkgColor = this.critBkgColor || "red"),
        (this.todayLineColor = this.todayLineColor || "red"),
        (this.taskTextColor = this.taskTextColor || this.textColor),
        (this.taskTextOutsideColor =
          this.taskTextOutsideColor || this.textColor),
        (this.taskTextLightColor = this.taskTextLightColor || this.textColor),
        (this.taskTextColor = this.taskTextColor || this.primaryTextColor),
        (this.taskTextDarkColor = this.taskTextDarkColor || this.textColor),
        (this.taskTextClickableColor =
          this.taskTextClickableColor || "#003163"),
        (this.archEdgeColor = this.lineColor),
        (this.archEdgeArrowColor = this.lineColor),
        (this.personBorder = this.personBorder || this.primaryBorderColor),
        (this.personBkg = this.personBkg || this.mainBkg),
        (this.transitionColor = this.transitionColor || this.lineColor),
        (this.transitionLabelColor =
          this.transitionLabelColor || this.textColor),
        (this.stateLabelColor =
          this.stateLabelColor || this.stateBkg || this.primaryTextColor),
        (this.vertLineColor = this.vertLineColor || this.primaryBorderColor),
        (this.compositeBackground = "#16141F"),
        (this.altBackground = "#16141F"),
        (this.compositeTitleBackground = "#16141F"),
        (this.stateEdgeLabelBackground = "#16141F"),
        (this.fontWeight = 600),
        (this.stateBkg = this.stateBkg || this.mainBkg),
        (this.labelBackgroundColor =
          this.labelBackgroundColor || this.stateBkg),
        (this.compositeBackground =
          this.compositeBackground || this.background || this.tertiaryColor),
        (this.altBackground = this.altBackground || "#f0f0f0"),
        (this.compositeTitleBackground =
          this.compositeTitleBackground || this.mainBkg),
        (this.compositeBorder = this.compositeBorder || this.nodeBorder),
        (this.innerEndBackground = this.nodeBorder),
        (this.errorBkgColor = this.errorBkgColor || this.tertiaryColor),
        (this.errorTextColor = this.errorTextColor || this.tertiaryTextColor),
        (this.transitionColor = this.transitionColor || this.lineColor),
        (this.specialStateColor = this.lineColor),
        (this.cScale0 = this.cScale0 || this.primaryColor),
        (this.cScale1 = this.cScale1 || this.secondaryColor),
        (this.cScale2 = this.cScale2 || this.tertiaryColor),
        (this.cScale3 =
          this.cScale3 ||
          invertN(this.primaryColor, {
            h: 30,
          })),
        (this.cScale4 =
          this.cScale4 ||
          invertN(this.primaryColor, {
            h: 60,
          })),
        (this.cScale5 =
          this.cScale5 ||
          invertN(this.primaryColor, {
            h: 90,
          })),
        (this.cScale6 =
          this.cScale6 ||
          invertN(this.primaryColor, {
            h: 120,
          })),
        (this.cScale7 =
          this.cScale7 ||
          invertN(this.primaryColor, {
            h: 150,
          })),
        (this.cScale8 =
          this.cScale8 ||
          invertN(this.primaryColor, {
            h: 210,
            l: 150,
          })),
        (this.cScale9 =
          this.cScale9 ||
          invertN(this.primaryColor, {
            h: 270,
          })),
        (this.cScale10 =
          this.cScale10 ||
          invertN(this.primaryColor, {
            h: 300,
          })),
        (this.cScale11 =
          this.cScale11 ||
          invertN(this.primaryColor, {
            h: 330,
          })),
        this.darkMode)
      )
        for (
          let chunkICPOFSXXValue321 = 0;
          chunkICPOFSXXValue321 < this.THEME_COLOR_LIMIT;
          chunkICPOFSXXValue321++
        )
          this["cScale" + chunkICPOFSXXValue321] = invertR(
            this["cScale" + chunkICPOFSXXValue321],
            75,
          );
      else
        for (
          let chunkICPOFSXXValue322 = 0;
          chunkICPOFSXXValue322 < this.THEME_COLOR_LIMIT;
          chunkICPOFSXXValue322++
        )
          this["cScale" + chunkICPOFSXXValue322] = invertR(
            this["cScale" + chunkICPOFSXXValue322],
            25,
          );
      for (
        let chunkICPOFSXXValue302 = 0;
        chunkICPOFSXXValue302 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue302++
      )
        this["cScaleInv" + chunkICPOFSXXValue302] =
          this["cScaleInv" + chunkICPOFSXXValue302] ||
          invertT(this["cScale" + chunkICPOFSXXValue302]);
      for (
        let chunkICPOFSXXValue257 = 0;
        chunkICPOFSXXValue257 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue257++
      )
        this.darkMode
          ? (this["cScalePeer" + chunkICPOFSXXValue257] =
              this["cScalePeer" + chunkICPOFSXXValue257] ||
              invertI(this["cScale" + chunkICPOFSXXValue257], 10))
          : (this["cScalePeer" + chunkICPOFSXXValue257] =
              this["cScalePeer" + chunkICPOFSXXValue257] ||
              invertR(this["cScale" + chunkICPOFSXXValue257], 10));
      this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
      for (
        let chunkICPOFSXXValue294 = 0;
        chunkICPOFSXXValue294 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue294++
      )
        this["cScaleLabel" + chunkICPOFSXXValue294] =
          this["cScaleLabel" + chunkICPOFSXXValue294] || this.scaleLabelColor;
      let chunkICPOFSXXValue162 = this.darkMode ? -4 : -1;
      for (
        let chunkICPOFSXXValue236 = 0;
        chunkICPOFSXXValue236 < 5;
        chunkICPOFSXXValue236++
      ) {
        this["surface" + chunkICPOFSXXValue236] =
          this["surface" + chunkICPOFSXXValue236] ||
          invertN(this.mainBkg, {
            h: 180,
            s: -15,
            l: chunkICPOFSXXValue162 * (5 + chunkICPOFSXXValue236 * 3),
          });
        this["surfacePeer" + chunkICPOFSXXValue236] =
          this["surfacePeer" + chunkICPOFSXXValue236] ||
          invertN(this.mainBkg, {
            h: 180,
            s: -15,
            l: chunkICPOFSXXValue162 * (8 + chunkICPOFSXXValue236 * 3),
          });
      }
      this.classText = this.classText || this.textColor;
      this.fillType0 = this.fillType0 || this.primaryColor;
      this.fillType1 = this.fillType1 || this.secondaryColor;
      this.fillType2 =
        this.fillType2 ||
        invertN(this.primaryColor, {
          h: 64,
        });
      this.fillType3 =
        this.fillType3 ||
        invertN(this.secondaryColor, {
          h: 64,
        });
      this.fillType4 =
        this.fillType4 ||
        invertN(this.primaryColor, {
          h: -64,
        });
      this.fillType5 =
        this.fillType5 ||
        invertN(this.secondaryColor, {
          h: -64,
        });
      this.fillType6 =
        this.fillType6 ||
        invertN(this.primaryColor, {
          h: 128,
        });
      this.fillType7 =
        this.fillType7 ||
        invertN(this.secondaryColor, {
          h: 128,
        });
      this.pie1 = this.pie1 || this.primaryColor;
      this.pie2 = this.pie2 || this.secondaryColor;
      this.pie3 = this.pie3 || this.tertiaryColor;
      this.pie4 =
        this.pie4 ||
        invertN(this.primaryColor, {
          l: -10,
        });
      this.pie5 =
        this.pie5 ||
        invertN(this.secondaryColor, {
          l: -10,
        });
      this.pie6 =
        this.pie6 ||
        invertN(this.tertiaryColor, {
          l: -10,
        });
      this.pie7 =
        this.pie7 ||
        invertN(this.primaryColor, {
          h: 60,
          l: -10,
        });
      this.pie8 =
        this.pie8 ||
        invertN(this.primaryColor, {
          h: -60,
          l: -10,
        });
      this.pie9 =
        this.pie9 ||
        invertN(this.primaryColor, {
          h: 120,
          l: 0,
        });
      this.pie10 =
        this.pie10 ||
        invertN(this.primaryColor, {
          h: 60,
          l: -20,
        });
      this.pie11 =
        this.pie11 ||
        invertN(this.primaryColor, {
          h: -60,
          l: -20,
        });
      this.pie12 =
        this.pie12 ||
        invertN(this.primaryColor, {
          h: 120,
          l: -10,
        });
      this.pieTitleTextSize = this.pieTitleTextSize || "25px";
      this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
      this.pieSectionTextSize = this.pieSectionTextSize || "17px";
      this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
      this.pieLegendTextSize = this.pieLegendTextSize || "17px";
      this.pieLegendTextColor =
        this.pieLegendTextColor || this.taskTextDarkColor;
      this.pieStrokeColor = this.pieStrokeColor || "black";
      this.pieStrokeWidth = this.pieStrokeWidth || "2px";
      this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
      this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
      this.pieOpacity = this.pieOpacity || "0.7";
      this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor;
      this.vennSetTextColor = this.vennSetTextColor ?? this.textColor;
      this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
      this.quadrant2Fill =
        this.quadrant2Fill ||
        invertN(this.primaryColor, {
          r: 5,
          g: 5,
          b: 5,
        });
      this.quadrant3Fill =
        this.quadrant3Fill ||
        invertN(this.primaryColor, {
          r: 10,
          g: 10,
          b: 10,
        });
      this.quadrant4Fill =
        this.quadrant4Fill ||
        invertN(this.primaryColor, {
          r: 15,
          g: 15,
          b: 15,
        });
      this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
      this.quadrant2TextFill =
        this.quadrant2TextFill ||
        invertN(this.primaryTextColor, {
          r: -5,
          g: -5,
          b: -5,
        });
      this.quadrant3TextFill =
        this.quadrant3TextFill ||
        invertN(this.primaryTextColor, {
          r: -10,
          g: -10,
          b: -10,
        });
      this.quadrant4TextFill =
        this.quadrant4TextFill ||
        invertN(this.primaryTextColor, {
          r: -15,
          g: -15,
          b: -15,
        });
      this.quadrantPointFill =
        this.quadrantPointFill || invertO(this.quadrant1Fill)
          ? invertI(this.quadrant1Fill)
          : invertR(this.quadrant1Fill);
      this.quadrantPointTextFill =
        this.quadrantPointTextFill || this.primaryTextColor;
      this.quadrantXAxisTextFill =
        this.quadrantXAxisTextFill || this.primaryTextColor;
      this.quadrantYAxisTextFill =
        this.quadrantYAxisTextFill || this.primaryTextColor;
      this.quadrantInternalBorderStrokeFill =
        this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantExternalBorderStrokeFill =
        this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
      this.xyChart = {
        backgroundColor: this.xyChart?.backgroundColor || this.background,
        titleColor: this.xyChart?.titleColor || this.primaryTextColor,
        xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
        xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
        xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
        xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
        yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
        yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
        yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
        yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
        plotColorPalette:
          this.xyChart?.plotColorPalette ||
          "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0",
      };
      this.requirementBackground =
        this.requirementBackground || this.primaryColor;
      this.requirementBorderColor =
        this.requirementBorderColor || this.primaryBorderColor;
      this.requirementBorderSize = this.requirementBorderSize || "1";
      this.requirementTextColor =
        this.requirementTextColor || this.primaryTextColor;
      this.relationColor = this.relationColor || this.lineColor;
      this.relationLabelBackground =
        this.relationLabelBackground ||
        (this.darkMode
          ? invertR(this.secondaryColor, 30)
          : this.secondaryColor);
      this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
      this.requirementEdgeLabelBackground = "#16141F";
      this.git0 = this.git0 || this.primaryColor;
      this.git1 = this.git1 || this.secondaryColor;
      this.git2 = this.git2 || this.tertiaryColor;
      this.git3 =
        this.git3 ||
        invertN(this.primaryColor, {
          h: -30,
        });
      this.git4 =
        this.git4 ||
        invertN(this.primaryColor, {
          h: -60,
        });
      this.git5 =
        this.git5 ||
        invertN(this.primaryColor, {
          h: -90,
        });
      this.git6 =
        this.git6 ||
        invertN(this.primaryColor, {
          h: 60,
        });
      this.git7 =
        this.git7 ||
        invertN(this.primaryColor, {
          h: 120,
        });
      this.darkMode
        ? ((this.git0 = invertI(this.git0, 25)),
          (this.git1 = invertI(this.git1, 25)),
          (this.git2 = invertI(this.git2, 25)),
          (this.git3 = invertI(this.git3, 25)),
          (this.git4 = invertI(this.git4, 25)),
          (this.git5 = invertI(this.git5, 25)),
          (this.git6 = invertI(this.git6, 25)),
          (this.git7 = invertI(this.git7, 25)))
        : ((this.git0 = invertR(this.git0, 25)),
          (this.git1 = invertR(this.git1, 25)),
          (this.git2 = invertR(this.git2, 25)),
          (this.git3 = invertR(this.git3, 25)),
          (this.git4 = invertR(this.git4, 25)),
          (this.git5 = invertR(this.git5, 25)),
          (this.git6 = invertR(this.git6, 25)),
          (this.git7 = invertR(this.git7, 25)));
      this.gitInv0 = this.gitInv0 || invertT(this.git0);
      this.gitInv1 = this.gitInv1 || invertT(this.git1);
      this.gitInv2 = this.gitInv2 || invertT(this.git2);
      this.gitInv3 = this.gitInv3 || invertT(this.git3);
      this.gitInv4 = this.gitInv4 || invertT(this.git4);
      this.gitInv5 = this.gitInv5 || invertT(this.git5);
      this.gitInv6 = this.gitInv6 || invertT(this.git6);
      this.gitInv7 = this.gitInv7 || invertT(this.git7);
      this.branchLabelColor =
        this.branchLabelColor ||
        (this.darkMode ? "black" : this.labelTextColor);
      this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor;
      this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor;
      this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor;
      this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor;
      this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor;
      this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor;
      this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor;
      this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor;
      this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
      this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
      this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
      this.tagLabelFontSize = this.tagLabelFontSize || "10px";
      this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
      this.commitLabelBackground =
        this.commitLabelBackground || this.secondaryColor;
      this.commitLabelFontSize = this.commitLabelFontSize || "10px";
      this.commitLineColor = this.commitLineColor ?? "#BDBCCC";
      this.erEdgeLabelBackground = "#16141F";
      this.attributeBackgroundColorOdd =
        this.attributeBackgroundColorOdd || "#ffffff";
      this.attributeBackgroundColorEven =
        this.attributeBackgroundColorEven || "#f2f2f2";
    }
    calculate(chunkICPOFSXXParam49) {
      if (typeof chunkICPOFSXXParam49 != "object") {
        this.updateColors();
        return;
      }
      let chunkICPOFSXXValue249 = Object.keys(chunkICPOFSXXParam49);
      chunkICPOFSXXValue249.forEach((item) => {
        this[item] = chunkICPOFSXXParam49[item];
      });
      this.updateColors();
      chunkICPOFSXXValue249.forEach((item) => {
        this[item] = chunkICPOFSXXParam49[item];
      });
    }
  },
  chunkICPOFSXXValue59 = chunkAGHRB4JFN((chunkICPOFSXXParam123) => {
    let chunkICPOFSXXValue347 = new chunkICPOFSXXValue58();
    return (
      chunkICPOFSXXValue347.calculate(chunkICPOFSXXParam123),
      chunkICPOFSXXValue347
    );
  }, "getThemeVariables"),
  chunkICPOFSXXValue60 = class {
    static {
      chunkAGHRB4JFN(this, "Theme");
    }
    constructor() {
      this.background = "#ffffff";
      this.primaryColor = "#cccccc";
      this.mainBkg = "#ffffff";
      this.noteBkgColor = "#fff5ad";
      this.noteTextColor = "#28253D";
      this.THEME_COLOR_LIMIT = 12;
      this.radius = 12;
      this.strokeWidth = 2;
      this.primaryBorderColor = chunkICPOFSXXValue44(
        this.primaryColor,
        this.darkMode,
      );
      this.fontFamily = '"Recursive Variable", arial, sans-serif';
      this.fontSize = "14px";
      this.nodeBorder = "#28253D";
      this.stateBorder = "#28253D";
      this.useGradient = false;
      this.gradientStart = "#0042eb";
      this.gradientStop = "#eb0042";
      this.dropShadow = "url(#drop-shadow)";
      this.nodeShadow = true;
      this.tertiaryColor = "#ffffff";
      this.archEdgeColor = "calculated";
      this.archEdgeArrowColor = "calculated";
      this.archEdgeWidth = "3";
      this.archGroupBorderColor = this.primaryBorderColor;
      this.archGroupBorderWidth = "2px";
      this.actorBorder = "#28253D";
      this.noteBorderColor = "#FACC15";
      this.noteFontWeight = 600;
      this.borderColorArray = [
        "#E879F9",
        "#2DD4BF",
        "#FB923C",
        "#22D3EE",
        "#4ADE80",
        "#A78BFA",
        "#F87171",
        "#FACC15",
        "#818CF8",
        "#A3E635 ",
        "#38BDF8",
        "#FB7185",
      ];
      this.bkgColorArray = [
        "#FDF4FF",
        "#F0FDFA",
        "#FFF7ED",
        "#ECFEFF",
        "#F0FDF4",
        "#F5F3FF",
        "#FEF2F2",
        "#FEFCE8",
        "#EEF2FF",
        "#F7FEE7",
        "#F0F9FF",
        "#FFF1F2",
      ];
      this.filterColor = "#000000";
    }
    updateColors() {
      this.primaryTextColor =
        this.primaryTextColor || (this.darkMode ? "#eee" : "#28253D");
      this.secondaryColor =
        this.secondaryColor ||
        invertN(this.primaryColor, {
          h: -120,
        });
      this.tertiaryColor =
        this.tertiaryColor ||
        invertN(this.primaryColor, {
          h: 180,
          l: 5,
        });
      this.primaryBorderColor =
        this.primaryBorderColor ||
        chunkICPOFSXXValue44(this.primaryColor, this.darkMode);
      this.secondaryBorderColor =
        this.secondaryBorderColor ||
        chunkICPOFSXXValue44(this.secondaryColor, this.darkMode);
      this.tertiaryBorderColor =
        this.tertiaryBorderColor ||
        chunkICPOFSXXValue44(this.tertiaryColor, this.darkMode);
      this.noteBorderColor =
        this.noteBorderColor ||
        chunkICPOFSXXValue44(this.noteBkgColor, this.darkMode);
      this.noteBkgColor = this.noteBkgColor || "#fff5ad";
      this.noteTextColor = this.noteTextColor || "#28253D";
      this.secondaryTextColor =
        this.secondaryTextColor || invertT(this.secondaryColor);
      this.tertiaryTextColor =
        this.tertiaryTextColor || invertT(this.tertiaryColor);
      this.lineColor = this.lineColor || invertT(this.background);
      this.arrowheadColor = this.arrowheadColor || invertT(this.background);
      this.textColor = this.textColor || this.primaryTextColor;
      this.border2 = this.border2 || this.tertiaryBorderColor;
      this.nodeBkg = this.nodeBkg || this.primaryColor;
      this.mainBkg = this.mainBkg || this.primaryColor;
      this.nodeBorder = this.nodeBorder || this.primaryBorderColor;
      this.clusterBkg = this.clusterBkg || this.tertiaryColor;
      this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor;
      this.defaultLinkColor = this.defaultLinkColor || this.lineColor;
      this.titleColor = this.titleColor || this.tertiaryTextColor;
      this.edgeLabelBackground =
        this.edgeLabelBackground ||
        (this.darkMode
          ? invertR(this.secondaryColor, 30)
          : this.secondaryColor);
      this.nodeTextColor = this.nodeTextColor || this.primaryTextColor;
      this.actorBorder = this.actorBorder || this.primaryBorderColor;
      this.actorBkg = this.actorBkg || this.mainBkg;
      this.actorTextColor = this.actorTextColor || this.primaryTextColor;
      this.actorLineColor = this.actorLineColor || this.actorBorder;
      this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg;
      this.signalColor = this.signalColor || this.textColor;
      this.signalTextColor = this.signalTextColor || this.textColor;
      this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder;
      this.labelTextColor = this.labelTextColor || this.actorTextColor;
      this.loopTextColor = this.loopTextColor || this.actorTextColor;
      this.activationBorderColor =
        this.activationBorderColor || invertR(this.secondaryColor, 10);
      this.activationBkgColor = this.activationBkgColor || this.secondaryColor;
      this.sequenceNumberColor =
        this.sequenceNumberColor || invertT(this.lineColor);
      let chunkICPOFSXXValue171 = invertN("#ECECFE", {
        h: 180,
        l: 5,
      });
      this.sectionBkgColor = this.sectionBkgColor || chunkICPOFSXXValue171;
      this.altSectionBkgColor = this.altSectionBkgColor || "white";
      this.sectionBkgColor = this.sectionBkgColor || "#E9E9F1";
      this.sectionBkgColor2 = this.sectionBkgColor2 || "#ECECFE";
      this.excludeBkgColor = this.excludeBkgColor || "#eeeeee";
      this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor;
      this.taskBkgColor = this.taskBkgColor || "#ECECFE";
      this.activeTaskBorderColor = this.activeTaskBorderColor || "#ECECFE";
      this.activeTaskBkgColor =
        this.activeTaskBkgColor || invertI("#ECECFE", 23);
      this.gridColor = this.gridColor || "lightgrey";
      this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey";
      this.doneTaskBorderColor = this.doneTaskBorderColor || "grey";
      this.critBorderColor = this.critBorderColor || "#ff8888";
      this.critBkgColor = this.critBkgColor || "red";
      this.todayLineColor = this.todayLineColor || "red";
      this.taskTextColor = this.taskTextColor || this.textColor;
      this.vertLineColor = this.vertLineColor || this.primaryBorderColor;
      this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor;
      this.taskTextLightColor = this.taskTextLightColor || this.textColor;
      this.taskTextColor = this.taskTextColor || this.primaryTextColor;
      this.taskTextDarkColor = this.taskTextDarkColor || this.textColor;
      this.taskTextClickableColor = this.taskTextClickableColor || "#003163";
      this.archEdgeColor = this.lineColor;
      this.archEdgeArrowColor = this.lineColor;
      this.personBorder = this.personBorder || this.primaryBorderColor;
      this.personBkg = this.personBkg || this.mainBkg;
      this.transitionColor = this.transitionColor || this.lineColor;
      this.transitionLabelColor = this.transitionLabelColor || this.textColor;
      this.stateLabelColor =
        this.stateLabelColor || this.stateBkg || this.primaryTextColor;
      this.stateBkg = this.stateBkg || this.mainBkg;
      this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
      this.compositeBackground =
        this.compositeBackground || this.background || this.tertiaryColor;
      this.altBackground = this.altBackground || "#f0f0f0";
      this.compositeTitleBackground =
        this.compositeTitleBackground || this.mainBkg;
      this.compositeBorder = this.compositeBorder || this.nodeBorder;
      this.innerEndBackground = this.nodeBorder;
      this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
      this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
      this.transitionColor = this.transitionColor || this.lineColor;
      this.specialStateColor = this.lineColor;
      this.cScale0 = this.cScale0 || "#f4a8ff";
      this.cScale1 = this.cScale1 || "#46ecd5";
      this.cScale2 = this.cScale2 || "#ffb86a";
      this.cScale3 = this.cScale3 || "#dab2ff";
      this.cScale4 = this.cScale4 || "#7bf1a8";
      this.cScale5 = this.cScale5 || "#c4b4ff";
      this.cScale6 = this.cScale6 || "#ffa2a2";
      this.cScale7 = this.cScale7 || "#ffdf20";
      this.cScale8 = this.cScale8 || "#a3b3ff";
      this.cScale9 = this.cScale9 || "#bbf451";
      this.cScale10 = this.cScale10 || "#74d4ff";
      this.cScale11 = this.cScale11 || "#ffa1ad";
      for (
        let chunkICPOFSXXValue303 = 0;
        chunkICPOFSXXValue303 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue303++
      )
        this["cScaleInv" + chunkICPOFSXXValue303] =
          this["cScaleInv" + chunkICPOFSXXValue303] ||
          invertT(this["cScale" + chunkICPOFSXXValue303]);
      for (
        let chunkICPOFSXXValue258 = 0;
        chunkICPOFSXXValue258 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue258++
      )
        this.darkMode
          ? (this["cScalePeer" + chunkICPOFSXXValue258] =
              this["cScalePeer" + chunkICPOFSXXValue258] ||
              invertI(this["cScale" + chunkICPOFSXXValue258], 10))
          : (this["cScalePeer" + chunkICPOFSXXValue258] =
              this["cScalePeer" + chunkICPOFSXXValue258] ||
              invertR(this["cScale" + chunkICPOFSXXValue258], 10));
      this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
      for (
        let chunkICPOFSXXValue295 = 0;
        chunkICPOFSXXValue295 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue295++
      )
        this["cScaleLabel" + chunkICPOFSXXValue295] =
          this["cScaleLabel" + chunkICPOFSXXValue295] || this.scaleLabelColor;
      let chunkICPOFSXXValue172 = this.darkMode ? -4 : -1;
      for (
        let chunkICPOFSXXValue237 = 0;
        chunkICPOFSXXValue237 < 5;
        chunkICPOFSXXValue237++
      ) {
        this["surface" + chunkICPOFSXXValue237] =
          this["surface" + chunkICPOFSXXValue237] ||
          invertN(this.mainBkg, {
            h: 180,
            s: -15,
            l: chunkICPOFSXXValue172 * (5 + chunkICPOFSXXValue237 * 3),
          });
        this["surfacePeer" + chunkICPOFSXXValue237] =
          this["surfacePeer" + chunkICPOFSXXValue237] ||
          invertN(this.mainBkg, {
            h: 180,
            s: -15,
            l: chunkICPOFSXXValue172 * (8 + chunkICPOFSXXValue237 * 3),
          });
      }
      this.classText = this.classText || this.textColor;
      this.fillType0 = this.fillType0 || "#ECECFE";
      this.fillType1 = this.fillType1 || "#E9E9F1";
      this.fillType2 =
        this.fillType2 ||
        invertN("#ECECFE", {
          h: 64,
        });
      this.fillType3 =
        this.fillType3 ||
        invertN("#E9E9F1", {
          h: 64,
        });
      this.fillType4 =
        this.fillType4 ||
        invertN("#ECECFE", {
          h: -64,
        });
      this.fillType5 =
        this.fillType5 ||
        invertN("#E9E9F1", {
          h: -64,
        });
      this.fillType6 =
        this.fillType6 ||
        invertN("#ECECFE", {
          h: 128,
        });
      this.fillType7 =
        this.fillType7 ||
        invertN("#E9E9F1", {
          h: 128,
        });
      this.pie1 = this.pie1 || "#ECECFE";
      this.pie2 = this.pie2 || "#E9E9F1";
      this.pie3 = this.pie3 || chunkICPOFSXXValue171;
      this.pie4 =
        this.pie4 ||
        invertN("#ECECFE", {
          l: -10,
        });
      this.pie5 =
        this.pie5 ||
        invertN("#E9E9F1", {
          l: -10,
        });
      this.pie6 =
        this.pie6 ||
        invertN(chunkICPOFSXXValue171, {
          l: -10,
        });
      this.pie7 =
        this.pie7 ||
        invertN("#ECECFE", {
          h: 60,
          l: -10,
        });
      this.pie8 =
        this.pie8 ||
        invertN("#ECECFE", {
          h: -60,
          l: -10,
        });
      this.pie9 =
        this.pie9 ||
        invertN("#ECECFE", {
          h: 120,
          l: 0,
        });
      this.pie10 =
        this.pie10 ||
        invertN("#ECECFE", {
          h: 60,
          l: -20,
        });
      this.pie11 =
        this.pie11 ||
        invertN("#ECECFE", {
          h: -60,
          l: -20,
        });
      this.pie12 =
        this.pie12 ||
        invertN("#ECECFE", {
          h: 120,
          l: -10,
        });
      this.pieTitleTextSize = this.pieTitleTextSize || "25px";
      this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
      this.pieSectionTextSize = this.pieSectionTextSize || "17px";
      this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
      this.pieLegendTextSize = this.pieLegendTextSize || "17px";
      this.pieLegendTextColor =
        this.pieLegendTextColor || this.taskTextDarkColor;
      this.pieStrokeColor = this.pieStrokeColor || "black";
      this.pieStrokeWidth = this.pieStrokeWidth || "2px";
      this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
      this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
      this.pieOpacity = this.pieOpacity || "0.7";
      this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor;
      this.vennSetTextColor = this.vennSetTextColor ?? this.textColor;
      this.quadrant1Fill = this.quadrant1Fill || "#ECECFE";
      this.quadrant2Fill =
        this.quadrant2Fill ||
        invertN("#ECECFE", {
          r: 5,
          g: 5,
          b: 5,
        });
      this.quadrant3Fill =
        this.quadrant3Fill ||
        invertN("#ECECFE", {
          r: 10,
          g: 10,
          b: 10,
        });
      this.quadrant4Fill =
        this.quadrant4Fill ||
        invertN("#ECECFE", {
          r: 15,
          g: 15,
          b: 15,
        });
      this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
      this.quadrant2TextFill =
        this.quadrant2TextFill ||
        invertN(this.primaryTextColor, {
          r: -5,
          g: -5,
          b: -5,
        });
      this.quadrant3TextFill =
        this.quadrant3TextFill ||
        invertN(this.primaryTextColor, {
          r: -10,
          g: -10,
          b: -10,
        });
      this.quadrant4TextFill =
        this.quadrant4TextFill ||
        invertN(this.primaryTextColor, {
          r: -15,
          g: -15,
          b: -15,
        });
      this.quadrantPointFill =
        this.quadrantPointFill || invertO(this.quadrant1Fill)
          ? invertI(this.quadrant1Fill)
          : invertR(this.quadrant1Fill);
      this.quadrantPointTextFill =
        this.quadrantPointTextFill || this.primaryTextColor;
      this.quadrantXAxisTextFill =
        this.quadrantXAxisTextFill || this.primaryTextColor;
      this.quadrantYAxisTextFill =
        this.quadrantYAxisTextFill || this.primaryTextColor;
      this.quadrantInternalBorderStrokeFill =
        this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantExternalBorderStrokeFill =
        this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
      this.xyChart = {
        backgroundColor: this.xyChart?.backgroundColor || this.background,
        titleColor: this.xyChart?.titleColor || this.primaryTextColor,
        xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
        xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
        xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
        xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
        yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
        yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
        yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
        yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
        plotColorPalette:
          this.xyChart?.plotColorPalette ||
          "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0",
      };
      this.requirementBackground = this.requirementBackground || "#ECECFE";
      this.requirementBorderColor =
        this.requirementBorderColor || this.primaryBorderColor;
      this.requirementBorderSize = this.requirementBorderSize || "1";
      this.requirementTextColor =
        this.requirementTextColor || this.primaryTextColor;
      this.relationColor = this.relationColor || this.lineColor;
      this.relationLabelBackground =
        this.relationLabelBackground ||
        (this.darkMode
          ? invertR(this.secondaryColor, 30)
          : this.secondaryColor);
      this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
      this.git0 = this.git0 || "#ECECFE";
      this.git1 = this.git1 || "#E9E9F1";
      this.git2 = this.git2 || chunkICPOFSXXValue171;
      this.git3 =
        this.git3 ||
        invertN("#ECECFE", {
          h: -30,
        });
      this.git4 =
        this.git4 ||
        invertN("#ECECFE", {
          h: -60,
        });
      this.git5 =
        this.git5 ||
        invertN("#ECECFE", {
          h: -90,
        });
      this.git6 =
        this.git6 ||
        invertN("#ECECFE", {
          h: 60,
        });
      this.git7 =
        this.git7 ||
        invertN("#ECECFE", {
          h: 120,
        });
      this.darkMode
        ? ((this.git0 = invertI(this.git0, 25)),
          (this.git1 = invertI(this.git1, 25)),
          (this.git2 = invertI(this.git2, 25)),
          (this.git3 = invertI(this.git3, 25)),
          (this.git4 = invertI(this.git4, 25)),
          (this.git5 = invertI(this.git5, 25)),
          (this.git6 = invertI(this.git6, 25)),
          (this.git7 = invertI(this.git7, 25)))
        : ((this.git0 = invertR(this.git0, 25)),
          (this.git1 = invertR(this.git1, 25)),
          (this.git2 = invertR(this.git2, 25)),
          (this.git3 = invertR(this.git3, 25)),
          (this.git4 = invertR(this.git4, 25)),
          (this.git5 = invertR(this.git5, 25)),
          (this.git6 = invertR(this.git6, 25)),
          (this.git7 = invertR(this.git7, 25)));
      this.gitInv0 = this.gitInv0 || invertT(this.git0);
      this.gitInv1 = this.gitInv1 || invertT(this.git1);
      this.gitInv2 = this.gitInv2 || invertT(this.git2);
      this.gitInv3 = this.gitInv3 || invertT(this.git3);
      this.gitInv4 = this.gitInv4 || invertT(this.git4);
      this.gitInv5 = this.gitInv5 || invertT(this.git5);
      this.gitInv6 = this.gitInv6 || invertT(this.git6);
      this.gitInv7 = this.gitInv7 || invertT(this.git7);
      this.branchLabelColor =
        this.branchLabelColor ||
        (this.darkMode ? "black" : this.labelTextColor);
      this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor;
      this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor;
      this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor;
      this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor;
      this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor;
      this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor;
      this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor;
      this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor;
      this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
      this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
      this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
      this.tagLabelFontSize = this.tagLabelFontSize || "10px";
      this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
      this.commitLabelBackground =
        this.commitLabelBackground || this.secondaryColor;
      this.commitLineColor = this.commitLineColor ?? "#BDBCCC";
      this.commitLabelFontSize = this.commitLabelFontSize || "10px";
      this.fontWeight = 600;
      this.erEdgeLabelBackground = "#FFFFFF";
      this.attributeBackgroundColorOdd =
        this.attributeBackgroundColorOdd || "#ffffff";
      this.attributeBackgroundColorEven =
        this.attributeBackgroundColorEven || "#f2f2f2";
    }
    calculate(chunkICPOFSXXParam50) {
      if (typeof chunkICPOFSXXParam50 != "object") {
        this.updateColors();
        return;
      }
      let chunkICPOFSXXValue250 = Object.keys(chunkICPOFSXXParam50);
      chunkICPOFSXXValue250.forEach((item) => {
        this[item] = chunkICPOFSXXParam50[item];
      });
      this.updateColors();
      chunkICPOFSXXValue250.forEach((item) => {
        this[item] = chunkICPOFSXXParam50[item];
      });
    }
  },
  chunkICPOFSXXValue61 = chunkAGHRB4JFN((chunkICPOFSXXParam124) => {
    let chunkICPOFSXXValue348 = new chunkICPOFSXXValue60();
    return (
      chunkICPOFSXXValue348.calculate(chunkICPOFSXXParam124),
      chunkICPOFSXXValue348
    );
  }, "getThemeVariables"),
  chunkICPOFSXXValue62 = class {
    static {
      chunkAGHRB4JFN(this, "Theme");
    }
    constructor() {
      this.background = "#333";
      this.primaryColor = "#1f2020";
      this.secondaryColor = invertI(this.primaryColor, 16);
      this.tertiaryColor = invertN(this.primaryColor, {
        h: -160,
      });
      this.primaryBorderColor = invertT(this.background);
      this.secondaryBorderColor = chunkICPOFSXXValue44(
        this.secondaryColor,
        this.darkMode,
      );
      this.tertiaryBorderColor = chunkICPOFSXXValue44(
        this.tertiaryColor,
        this.darkMode,
      );
      this.primaryTextColor = invertT(this.primaryColor);
      this.secondaryTextColor = invertT(this.secondaryColor);
      this.tertiaryTextColor = invertT(this.tertiaryColor);
      this.mainBkg = "#111113";
      this.secondBkg = "calculated";
      this.mainContrastColor = "lightgrey";
      this.darkTextColor = invertI(invertT("#323D47"), 10);
      this.border1 = "#ccc";
      this.border2 = invertS(255, 255, 255, 0.25);
      this.arrowheadColor = invertT(this.background);
      this.fontFamily = '"Recursive Variable", arial, sans-serif';
      this.fontSize = "14px";
      this.labelBackground = "#111113";
      this.textColor = "#ccc";
      this.THEME_COLOR_LIMIT = 12;
      this.radius = 12;
      this.strokeWidth = 2;
      this.noteBkgColor = this.noteBkgColor ?? "#FEF9C3";
      this.noteTextColor = this.noteTextColor ?? "#28253D";
      this.THEME_COLOR_LIMIT = 12;
      this.fontFamily = '"Recursive Variable", arial, sans-serif';
      this.fontSize = "14px";
      this.nodeBorder = "#FFFFFF";
      this.stateBorder = "#FFFFFF";
      this.useGradient = false;
      this.gradientStart = "#0042eb";
      this.gradientStop = "#eb0042";
      this.dropShadow = "url(#drop-shadow)";
      this.nodeShadow = true;
      this.archEdgeColor = "calculated";
      this.archEdgeArrowColor = "calculated";
      this.archEdgeWidth = "3";
      this.archGroupBorderColor = this.primaryBorderColor;
      this.archGroupBorderWidth = "2px";
      this.clusterBkg = "#1E1A2E";
      this.clusterBorder = "#BDBCCC";
      this.noteBorderColor = "#FACC15";
      this.noteFontWeight = 600;
      this.borderColorArray = [
        "#E879F9",
        "#2DD4BF",
        "#FB923C",
        "#22D3EE",
        "#4ADE80",
        "#A78BFA",
        "#F87171",
        "#FACC15",
        "#818CF8",
        "#A3E635 ",
        "#38BDF8",
        "#FB7185",
      ];
      this.bkgColorArray = [];
      this.filterColor = "#FFFFFF";
    }
    updateColors() {
      this.primaryTextColor =
        this.primaryTextColor || (this.darkMode ? "#eee" : "#FFFFFF");
      this.secondaryColor =
        this.secondaryColor ||
        invertN(this.primaryColor, {
          h: -120,
        });
      this.tertiaryColor =
        this.tertiaryColor ||
        invertN(this.primaryColor, {
          h: 180,
          l: 5,
        });
      this.primaryBorderColor =
        this.primaryBorderColor ||
        chunkICPOFSXXValue44(this.primaryColor, this.darkMode);
      this.secondaryBorderColor =
        this.secondaryBorderColor ||
        chunkICPOFSXXValue44(this.secondaryColor, this.darkMode);
      this.tertiaryBorderColor =
        this.tertiaryBorderColor ||
        chunkICPOFSXXValue44(this.tertiaryColor, this.darkMode);
      this.noteBorderColor =
        this.noteBorderColor ||
        chunkICPOFSXXValue44(this.noteBkgColor, this.darkMode);
      this.noteBkgColor = this.noteBkgColor || "#fff5ad";
      this.noteTextColor = this.noteTextColor || "#FFFFFF";
      this.secondaryTextColor =
        this.secondaryTextColor || invertT(this.secondaryColor);
      this.tertiaryTextColor =
        this.tertiaryTextColor || invertT(this.tertiaryColor);
      this.lineColor = this.lineColor || invertT(this.background);
      this.arrowheadColor = this.arrowheadColor || invertT(this.background);
      this.textColor = this.textColor || this.primaryTextColor;
      this.border2 = this.border2 || this.tertiaryBorderColor;
      this.nodeBkg = this.nodeBkg || this.primaryColor;
      this.mainBkg = this.mainBkg || this.primaryColor;
      this.nodeBorder = this.nodeBorder || this.border1;
      this.clusterBkg = this.clusterBkg || this.tertiaryColor;
      this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor;
      this.defaultLinkColor = this.defaultLinkColor || this.lineColor;
      this.titleColor = this.titleColor || this.tertiaryTextColor;
      this.edgeLabelBackground =
        this.edgeLabelBackground ||
        (this.darkMode
          ? invertR(this.secondaryColor, 30)
          : this.secondaryColor);
      this.nodeTextColor = this.nodeTextColor || this.primaryTextColor;
      this.actorBorder = "#FFFFFF";
      this.signalColor = "#FFFFFF";
      this.labelBoxBorderColor = "#BDBCCC";
      this.actorBorder = this.actorBorder || this.primaryBorderColor;
      this.actorBkg = this.actorBkg || this.mainBkg;
      this.actorTextColor = this.actorTextColor || this.primaryTextColor;
      this.actorLineColor = this.actorLineColor || this.actorBorder;
      this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg;
      this.signalColor = this.signalColor || this.textColor;
      this.signalTextColor = this.signalTextColor || this.textColor;
      this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder;
      this.labelTextColor = this.labelTextColor || this.actorTextColor;
      this.loopTextColor = this.loopTextColor || this.actorTextColor;
      this.activationBorderColor =
        this.activationBorderColor || invertR(this.secondaryColor, 10);
      this.activationBkgColor = this.activationBkgColor || this.secondaryColor;
      this.sequenceNumberColor =
        this.sequenceNumberColor || invertT(this.lineColor);
      this.rootLabelColor = "#FFFFFF";
      this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor;
      this.altSectionBkgColor = this.altSectionBkgColor || "white";
      this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor;
      this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor;
      this.excludeBkgColor = this.excludeBkgColor || "#eeeeee";
      this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor;
      this.taskBkgColor = this.taskBkgColor || this.primaryColor;
      this.activeTaskBorderColor =
        this.activeTaskBorderColor || this.primaryColor;
      this.activeTaskBkgColor =
        this.activeTaskBkgColor || invertI(this.primaryColor, 23);
      this.gridColor = this.gridColor || "lightgrey";
      this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey";
      this.doneTaskBorderColor = this.doneTaskBorderColor || "grey";
      this.critBorderColor = this.critBorderColor || "#ff8888";
      this.critBkgColor = this.critBkgColor || "red";
      this.todayLineColor = this.todayLineColor || "red";
      this.taskTextColor = this.taskTextColor || this.textColor;
      this.vertLineColor = this.vertLineColor || this.primaryBorderColor;
      this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor;
      this.taskTextLightColor = this.taskTextLightColor || this.textColor;
      this.taskTextColor = this.taskTextColor || this.primaryTextColor;
      this.taskTextDarkColor = this.taskTextDarkColor || this.textColor;
      this.taskTextClickableColor = this.taskTextClickableColor || "#003163";
      this.archEdgeColor = this.lineColor;
      this.archEdgeArrowColor = this.lineColor;
      this.personBorder = this.personBorder || this.primaryBorderColor;
      this.personBkg = this.personBkg || this.mainBkg;
      this.transitionColor = this.transitionColor || this.lineColor;
      this.transitionLabelColor = this.transitionLabelColor || this.textColor;
      this.stateLabelColor =
        this.stateLabelColor || this.stateBkg || this.primaryTextColor;
      this.stateBkg = this.stateBkg || this.mainBkg;
      this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
      this.compositeBackground =
        this.compositeBackground || this.background || this.tertiaryColor;
      this.altBackground = this.altBackground || "#f0f0f0";
      this.compositeTitleBackground =
        this.compositeTitleBackground || this.mainBkg;
      this.compositeBorder = this.compositeBorder || this.nodeBorder;
      this.innerEndBackground = this.nodeBorder;
      this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
      this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
      this.transitionColor = this.transitionColor || this.lineColor;
      this.specialStateColor = this.lineColor;
      this.cScale0 = this.cScale0 || "#f4a8ff";
      this.cScale1 = this.cScale1 || "#46ecd5";
      this.cScale2 = this.cScale2 || "#ffb86a";
      this.cScale3 = this.cScale3 || "#dab2ff";
      this.cScale4 = this.cScale4 || "#7bf1a8";
      this.cScale5 = this.cScale5 || "#c4b4ff";
      this.cScale6 = this.cScale6 || "#ffa2a2";
      this.cScale7 = this.cScale7 || "#ffdf20";
      this.cScale8 = this.cScale8 || "#a3b3ff";
      this.cScale9 = this.cScale9 || "#bbf451";
      this.cScale10 = this.cScale10 || "#74d4ff";
      this.cScale11 = this.cScale11 || "#ffa1ad";
      for (
        let chunkICPOFSXXValue304 = 0;
        chunkICPOFSXXValue304 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue304++
      )
        this["cScaleInv" + chunkICPOFSXXValue304] =
          this["cScaleInv" + chunkICPOFSXXValue304] ||
          invertT(this["cScale" + chunkICPOFSXXValue304]);
      for (
        let chunkICPOFSXXValue259 = 0;
        chunkICPOFSXXValue259 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue259++
      )
        this.darkMode
          ? (this["cScalePeer" + chunkICPOFSXXValue259] =
              this["cScalePeer" + chunkICPOFSXXValue259] ||
              invertI(this["cScale" + chunkICPOFSXXValue259], 10))
          : (this["cScalePeer" + chunkICPOFSXXValue259] =
              this["cScalePeer" + chunkICPOFSXXValue259] ||
              invertR(this["cScale" + chunkICPOFSXXValue259], 10));
      this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
      for (
        let chunkICPOFSXXValue311 = 0;
        chunkICPOFSXXValue311 < this.THEME_COLOR_LIMIT;
        chunkICPOFSXXValue311++
      )
        this["cScaleLabel" + chunkICPOFSXXValue311] = invertR(
          this["cScale" + chunkICPOFSXXValue311],
          75,
        );
      let chunkICPOFSXXValue164 = this.darkMode ? -4 : -1;
      for (
        let chunkICPOFSXXValue238 = 0;
        chunkICPOFSXXValue238 < 5;
        chunkICPOFSXXValue238++
      ) {
        this["surface" + chunkICPOFSXXValue238] =
          this["surface" + chunkICPOFSXXValue238] ||
          invertN(this.mainBkg, {
            h: 180,
            s: -15,
            l: chunkICPOFSXXValue164 * (5 + chunkICPOFSXXValue238 * 3),
          });
        this["surfacePeer" + chunkICPOFSXXValue238] =
          this["surfacePeer" + chunkICPOFSXXValue238] ||
          invertN(this.mainBkg, {
            h: 180,
            s: -15,
            l: chunkICPOFSXXValue164 * (8 + chunkICPOFSXXValue238 * 3),
          });
      }
      this.classText = this.classText || this.textColor;
      this.fillType0 = this.fillType0 || this.primaryColor;
      this.fillType1 = this.fillType1 || this.secondaryColor;
      this.fillType2 =
        this.fillType2 ||
        invertN(this.primaryColor, {
          h: 64,
        });
      this.fillType3 =
        this.fillType3 ||
        invertN(this.secondaryColor, {
          h: 64,
        });
      this.fillType4 =
        this.fillType4 ||
        invertN(this.primaryColor, {
          h: -64,
        });
      this.fillType5 =
        this.fillType5 ||
        invertN(this.secondaryColor, {
          h: -64,
        });
      this.fillType6 =
        this.fillType6 ||
        invertN(this.primaryColor, {
          h: 128,
        });
      this.fillType7 =
        this.fillType7 ||
        invertN(this.secondaryColor, {
          h: 128,
        });
      this.pie1 = this.pie1 || this.primaryColor;
      this.pie2 = this.pie2 || this.secondaryColor;
      this.pie3 = this.pie3 || this.tertiaryColor;
      this.pie4 =
        this.pie4 ||
        invertN(this.primaryColor, {
          l: -10,
        });
      this.pie5 =
        this.pie5 ||
        invertN(this.secondaryColor, {
          l: -10,
        });
      this.pie6 =
        this.pie6 ||
        invertN(this.tertiaryColor, {
          l: -10,
        });
      this.pie7 =
        this.pie7 ||
        invertN(this.primaryColor, {
          h: 60,
          l: -10,
        });
      this.pie8 =
        this.pie8 ||
        invertN(this.primaryColor, {
          h: -60,
          l: -10,
        });
      this.pie9 =
        this.pie9 ||
        invertN(this.primaryColor, {
          h: 120,
          l: 0,
        });
      this.pie10 =
        this.pie10 ||
        invertN(this.primaryColor, {
          h: 60,
          l: -20,
        });
      this.pie11 =
        this.pie11 ||
        invertN(this.primaryColor, {
          h: -60,
          l: -20,
        });
      this.pie12 =
        this.pie12 ||
        invertN(this.primaryColor, {
          h: 120,
          l: -10,
        });
      this.pieTitleTextSize = this.pieTitleTextSize || "25px";
      this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
      this.pieSectionTextSize = this.pieSectionTextSize || "17px";
      this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
      this.pieLegendTextSize = this.pieLegendTextSize || "17px";
      this.pieLegendTextColor =
        this.pieLegendTextColor || this.taskTextDarkColor;
      this.pieStrokeColor = this.pieStrokeColor || "black";
      this.pieStrokeWidth = this.pieStrokeWidth || "2px";
      this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
      this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
      this.pieOpacity = this.pieOpacity || "0.7";
      this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor;
      this.vennSetTextColor = this.vennSetTextColor ?? this.textColor;
      this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
      this.quadrant2Fill =
        this.quadrant2Fill ||
        invertN(this.primaryColor, {
          r: 5,
          g: 5,
          b: 5,
        });
      this.quadrant3Fill =
        this.quadrant3Fill ||
        invertN(this.primaryColor, {
          r: 10,
          g: 10,
          b: 10,
        });
      this.quadrant4Fill =
        this.quadrant4Fill ||
        invertN(this.primaryColor, {
          r: 15,
          g: 15,
          b: 15,
        });
      this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
      this.quadrant2TextFill =
        this.quadrant2TextFill ||
        invertN(this.primaryTextColor, {
          r: -5,
          g: -5,
          b: -5,
        });
      this.quadrant3TextFill =
        this.quadrant3TextFill ||
        invertN(this.primaryTextColor, {
          r: -10,
          g: -10,
          b: -10,
        });
      this.quadrant4TextFill =
        this.quadrant4TextFill ||
        invertN(this.primaryTextColor, {
          r: -15,
          g: -15,
          b: -15,
        });
      this.quadrantPointFill =
        this.quadrantPointFill || invertO(this.quadrant1Fill)
          ? invertI(this.quadrant1Fill)
          : invertR(this.quadrant1Fill);
      this.quadrantPointTextFill =
        this.quadrantPointTextFill || this.primaryTextColor;
      this.quadrantXAxisTextFill =
        this.quadrantXAxisTextFill || this.primaryTextColor;
      this.quadrantYAxisTextFill =
        this.quadrantYAxisTextFill || this.primaryTextColor;
      this.quadrantInternalBorderStrokeFill =
        this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantExternalBorderStrokeFill =
        this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
      this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
      this.xyChart = {
        backgroundColor: this.xyChart?.backgroundColor || this.background,
        titleColor: this.xyChart?.titleColor || this.primaryTextColor,
        xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
        xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
        xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
        xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
        yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
        yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
        yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
        yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
        plotColorPalette:
          this.xyChart?.plotColorPalette ||
          "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0",
      };
      this.requirementBackground =
        this.requirementBackground || this.primaryColor;
      this.requirementBorderColor =
        this.requirementBorderColor || this.primaryBorderColor;
      this.requirementBorderSize = this.requirementBorderSize || "1";
      this.requirementTextColor =
        this.requirementTextColor || this.primaryTextColor;
      this.relationColor = this.relationColor || this.lineColor;
      this.relationLabelBackground =
        this.relationLabelBackground ||
        (this.darkMode
          ? invertR(this.secondaryColor, 30)
          : this.secondaryColor);
      this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
      this.git0 = this.git0 || this.primaryColor;
      this.git1 = this.git1 || this.secondaryColor;
      this.git2 = this.git2 || this.tertiaryColor;
      this.git3 =
        this.git3 ||
        invertN(this.primaryColor, {
          h: -30,
        });
      this.git4 =
        this.git4 ||
        invertN(this.primaryColor, {
          h: -60,
        });
      this.git5 =
        this.git5 ||
        invertN(this.primaryColor, {
          h: -90,
        });
      this.git6 =
        this.git6 ||
        invertN(this.primaryColor, {
          h: 60,
        });
      this.git7 =
        this.git7 ||
        invertN(this.primaryColor, {
          h: 120,
        });
      this.darkMode
        ? ((this.git0 = invertI(this.git0, 25)),
          (this.git1 = invertI(this.git1, 25)),
          (this.git2 = invertI(this.git2, 25)),
          (this.git3 = invertI(this.git3, 25)),
          (this.git4 = invertI(this.git4, 25)),
          (this.git5 = invertI(this.git5, 25)),
          (this.git6 = invertI(this.git6, 25)),
          (this.git7 = invertI(this.git7, 25)))
        : ((this.git0 = invertR(this.git0, 25)),
          (this.git1 = invertR(this.git1, 25)),
          (this.git2 = invertR(this.git2, 25)),
          (this.git3 = invertR(this.git3, 25)),
          (this.git4 = invertR(this.git4, 25)),
          (this.git5 = invertR(this.git5, 25)),
          (this.git6 = invertR(this.git6, 25)),
          (this.git7 = invertR(this.git7, 25)));
      this.gitInv0 = this.gitInv0 || invertT(this.git0);
      this.gitInv1 = this.gitInv1 || invertT(this.git1);
      this.gitInv2 = this.gitInv2 || invertT(this.git2);
      this.gitInv3 = this.gitInv3 || invertT(this.git3);
      this.gitInv4 = this.gitInv4 || invertT(this.git4);
      this.gitInv5 = this.gitInv5 || invertT(this.git5);
      this.gitInv6 = this.gitInv6 || invertT(this.git6);
      this.gitInv7 = this.gitInv7 || invertT(this.git7);
      this.branchLabelColor =
        this.branchLabelColor ||
        (this.darkMode ? "black" : this.labelTextColor);
      this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor;
      this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor;
      this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor;
      this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor;
      this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor;
      this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor;
      this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor;
      this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor;
      this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
      this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
      this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
      this.tagLabelFontSize = this.tagLabelFontSize || "10px";
      this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
      this.commitLabelBackground =
        this.commitLabelBackground || this.secondaryColor;
      this.commitLabelFontSize = this.commitLabelFontSize || "10px";
      this.commitLineColor = this.commitLineColor ?? "#BDBCCC";
      this.fontWeight = 600;
      this.erEdgeLabelBackground = "#16141F";
      this.attributeBackgroundColorOdd =
        this.attributeBackgroundColorOdd || "#ffffff";
      this.attributeBackgroundColorEven =
        this.attributeBackgroundColorEven || "#f2f2f2";
    }
    calculate(chunkICPOFSXXParam51) {
      if (typeof chunkICPOFSXXParam51 != "object") {
        this.updateColors();
        return;
      }
      let chunkICPOFSXXValue251 = Object.keys(chunkICPOFSXXParam51);
      chunkICPOFSXXValue251.forEach((item) => {
        this[item] = chunkICPOFSXXParam51[item];
      });
      this.updateColors();
      chunkICPOFSXXValue251.forEach((item) => {
        this[item] = chunkICPOFSXXParam51[item];
      });
    }
  },
  chunkICPOFSXXValue63 = chunkAGHRB4JFN((chunkICPOFSXXParam120) => {
    let chunkICPOFSXXValue344 = new chunkICPOFSXXValue62();
    return (
      chunkICPOFSXXValue344.calculate(chunkICPOFSXXParam120),
      chunkICPOFSXXValue344
    );
  }, "getThemeVariables"),
  chunkICPOFSXXY = {
    base: {
      getThemeVariables: $e,
    },
    dark: {
      getThemeVariables: chunkICPOFSXXValue47,
    },
    default: {
      getThemeVariables: chunkICPOFSXXE,
    },
    forest: {
      getThemeVariables: chunkICPOFSXXValue50,
    },
    neutral: {
      getThemeVariables: at,
    },
    neo: {
      getThemeVariables: chunkICPOFSXXValue53,
    },
    "neo-dark": {
      getThemeVariables: chunkICPOFSXXValue55,
    },
    redux: {
      getThemeVariables: chunkICPOFSXXValue57,
    },
    "redux-dark": {
      getThemeVariables: chunkICPOFSXXValue59,
    },
    "redux-color": {
      getThemeVariables: chunkICPOFSXXValue61,
    },
    "redux-dark-color": {
      getThemeVariables: chunkICPOFSXXValue63,
    },
  },
  chunkICPOFSXXValue64 = {
    flowchart: {
      useMaxWidth: true,
      titleTopMargin: 25,
      subGraphTitleMargin: {
        top: 0,
        bottom: 0,
      },
      diagramPadding: 8,
      htmlLabels: null,
      nodeSpacing: 50,
      rankSpacing: 50,
      curve: "basis",
      padding: 15,
      defaultRenderer: "dagre-wrapper",
      wrappingWidth: 200,
      inheritDir: false,
    },
    sequence: {
      useMaxWidth: true,
      hideUnusedParticipants: false,
      activationWidth: 10,
      diagramMarginX: 50,
      diagramMarginY: 10,
      actorMargin: 50,
      width: 150,
      height: 65,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
      messageAlign: "center",
      mirrorActors: true,
      forceMenus: false,
      bottomMarginAdj: 1,
      rightAngles: false,
      showSequenceNumbers: false,
      actorFontSize: 14,
      actorFontFamily: '"Open Sans", sans-serif',
      actorFontWeight: 400,
      noteFontSize: 14,
      noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
      noteFontWeight: 400,
      noteAlign: "center",
      messageFontSize: 16,
      messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
      messageFontWeight: 400,
      wrap: false,
      wrapPadding: 10,
      labelBoxWidth: 50,
      labelBoxHeight: 20,
    },
    gantt: {
      useMaxWidth: true,
      titleTopMargin: 25,
      barHeight: 20,
      barGap: 4,
      topPadding: 50,
      rightPadding: 75,
      leftPadding: 75,
      gridLineStartPadding: 35,
      fontSize: 11,
      sectionFontSize: 11,
      numberSectionStyles: 4,
      axisFormat: "%Y-%m-%d",
      topAxis: false,
      displayMode: "",
      weekday: "sunday",
    },
    journey: {
      useMaxWidth: true,
      diagramMarginX: 50,
      diagramMarginY: 10,
      leftMargin: 150,
      maxLabelWidth: 360,
      width: 150,
      height: 50,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
      messageAlign: "center",
      bottomMarginAdj: 1,
      rightAngles: false,
      taskFontSize: 14,
      taskFontFamily: '"Open Sans", sans-serif',
      taskMargin: 50,
      activationWidth: 10,
      textPlacement: "fo",
      actorColours: [
        "#8FBC8F",
        "#7CFC00",
        "#00FFFF",
        "#20B2AA",
        "#B0E0E6",
        "#FFFFE0",
      ],
      sectionFills: [
        "#191970",
        "#8B008B",
        "#4B0082",
        "#2F4F4F",
        "#800000",
        "#8B4513",
        "#00008B",
      ],
      sectionColours: ["#fff"],
      titleColor: "",
      titleFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
      titleFontSize: "4ex",
    },
    class: {
      useMaxWidth: true,
      titleTopMargin: 25,
      arrowMarkerAbsolute: false,
      dividerMargin: 10,
      padding: 5,
      textHeight: 10,
      defaultRenderer: "dagre-wrapper",
      htmlLabels: false,
      hideEmptyMembersBox: false,
    },
    state: {
      useMaxWidth: true,
      titleTopMargin: 25,
      dividerMargin: 10,
      sizeUnit: 5,
      padding: 8,
      textHeight: 10,
      titleShift: -15,
      noteMargin: 10,
      forkWidth: 70,
      forkHeight: 7,
      miniPadding: 2,
      fontSizeFactor: 5.02,
      fontSize: 24,
      labelHeight: 16,
      edgeLengthFactor: "20",
      compositTitleSize: 35,
      radius: 5,
      defaultRenderer: "dagre-wrapper",
    },
    er: {
      useMaxWidth: true,
      titleTopMargin: 25,
      diagramPadding: 20,
      layoutDirection: "TB",
      minEntityWidth: 100,
      minEntityHeight: 75,
      entityPadding: 15,
      nodeSpacing: 140,
      rankSpacing: 80,
      stroke: "gray",
      fill: "honeydew",
      fontSize: 12,
    },
    pie: {
      useMaxWidth: true,
      textPosition: 0.75,
    },
    quadrantChart: {
      useMaxWidth: true,
      chartWidth: 500,
      chartHeight: 500,
      titleFontSize: 20,
      titlePadding: 10,
      quadrantPadding: 5,
      xAxisLabelPadding: 5,
      yAxisLabelPadding: 5,
      xAxisLabelFontSize: 16,
      yAxisLabelFontSize: 16,
      quadrantLabelFontSize: 16,
      quadrantTextTopPadding: 5,
      pointTextPadding: 5,
      pointLabelFontSize: 12,
      pointRadius: 5,
      xAxisPosition: "top",
      yAxisPosition: "left",
      quadrantInternalBorderStrokeWidth: 1,
      quadrantExternalBorderStrokeWidth: 2,
    },
    xyChart: {
      useMaxWidth: true,
      width: 700,
      height: 500,
      titleFontSize: 20,
      titlePadding: 10,
      showDataLabel: false,
      showDataLabelOutsideBar: false,
      showTitle: true,
      xAxis: {
        $ref: "#/$defs/XYChartAxisConfig",
        showLabel: true,
        labelFontSize: 14,
        labelPadding: 5,
        showTitle: true,
        titleFontSize: 16,
        titlePadding: 5,
        showTick: true,
        tickLength: 5,
        tickWidth: 2,
        showAxisLine: true,
        axisLineWidth: 2,
      },
      yAxis: {
        $ref: "#/$defs/XYChartAxisConfig",
        showLabel: true,
        labelFontSize: 14,
        labelPadding: 5,
        showTitle: true,
        titleFontSize: 16,
        titlePadding: 5,
        showTick: true,
        tickLength: 5,
        tickWidth: 2,
        showAxisLine: true,
        axisLineWidth: 2,
      },
      chartOrientation: "vertical",
      plotReservedSpacePercent: 50,
    },
    requirement: {
      useMaxWidth: true,
      rect_fill: "#f9f9f9",
      text_color: "#333",
      rect_border_size: "0.5px",
      rect_border_color: "#bbb",
      rect_min_width: 200,
      rect_min_height: 200,
      fontSize: 14,
      rect_padding: 10,
      line_height: 20,
    },
    mindmap: {
      useMaxWidth: true,
      padding: 10,
      maxNodeWidth: 200,
      layoutAlgorithm: "cose-bilkent",
    },
    ishikawa: {
      useMaxWidth: true,
      diagramPadding: 20,
    },
    kanban: {
      useMaxWidth: true,
      padding: 8,
      sectionWidth: 200,
      ticketBaseUrl: "",
    },
    timeline: {
      useMaxWidth: true,
      diagramMarginX: 50,
      diagramMarginY: 10,
      leftMargin: 150,
      width: 150,
      height: 50,
      boxMargin: 10,
      boxTextMargin: 5,
      noteMargin: 10,
      messageMargin: 35,
      messageAlign: "center",
      bottomMarginAdj: 1,
      rightAngles: false,
      taskFontSize: 14,
      taskFontFamily: '"Open Sans", sans-serif',
      taskMargin: 50,
      activationWidth: 10,
      textPlacement: "fo",
      actorColours: [
        "#8FBC8F",
        "#7CFC00",
        "#00FFFF",
        "#20B2AA",
        "#B0E0E6",
        "#FFFFE0",
      ],
      sectionFills: [
        "#191970",
        "#8B008B",
        "#4B0082",
        "#2F4F4F",
        "#800000",
        "#8B4513",
        "#00008B",
      ],
      sectionColours: ["#fff"],
      disableMulticolor: false,
    },
    gitGraph: {
      useMaxWidth: true,
      titleTopMargin: 25,
      diagramPadding: 8,
      nodeLabel: {
        width: 75,
        height: 100,
        x: -25,
        y: 0,
      },
      mainBranchName: "main",
      mainBranchOrder: 0,
      showCommitLabel: true,
      showBranches: true,
      rotateCommitLabel: true,
      parallelCommits: false,
      arrowMarkerAbsolute: false,
    },
    c4: {
      useMaxWidth: true,
      diagramMarginX: 50,
      diagramMarginY: 10,
      c4ShapeMargin: 50,
      c4ShapePadding: 20,
      width: 216,
      height: 60,
      boxMargin: 10,
      c4ShapeInRow: 4,
      nextLinePaddingX: 0,
      c4BoundaryInRow: 2,
      personFontSize: 14,
      personFontFamily: '"Open Sans", sans-serif',
      personFontWeight: "normal",
      external_personFontSize: 14,
      external_personFontFamily: '"Open Sans", sans-serif',
      external_personFontWeight: "normal",
      systemFontSize: 14,
      systemFontFamily: '"Open Sans", sans-serif',
      systemFontWeight: "normal",
      external_systemFontSize: 14,
      external_systemFontFamily: '"Open Sans", sans-serif',
      external_systemFontWeight: "normal",
      system_dbFontSize: 14,
      system_dbFontFamily: '"Open Sans", sans-serif',
      system_dbFontWeight: "normal",
      external_system_dbFontSize: 14,
      external_system_dbFontFamily: '"Open Sans", sans-serif',
      external_system_dbFontWeight: "normal",
      system_queueFontSize: 14,
      system_queueFontFamily: '"Open Sans", sans-serif',
      system_queueFontWeight: "normal",
      external_system_queueFontSize: 14,
      external_system_queueFontFamily: '"Open Sans", sans-serif',
      external_system_queueFontWeight: "normal",
      boundaryFontSize: 14,
      boundaryFontFamily: '"Open Sans", sans-serif',
      boundaryFontWeight: "normal",
      messageFontSize: 12,
      messageFontFamily: '"Open Sans", sans-serif',
      messageFontWeight: "normal",
      containerFontSize: 14,
      containerFontFamily: '"Open Sans", sans-serif',
      containerFontWeight: "normal",
      external_containerFontSize: 14,
      external_containerFontFamily: '"Open Sans", sans-serif',
      external_containerFontWeight: "normal",
      container_dbFontSize: 14,
      container_dbFontFamily: '"Open Sans", sans-serif',
      container_dbFontWeight: "normal",
      external_container_dbFontSize: 14,
      external_container_dbFontFamily: '"Open Sans", sans-serif',
      external_container_dbFontWeight: "normal",
      container_queueFontSize: 14,
      container_queueFontFamily: '"Open Sans", sans-serif',
      container_queueFontWeight: "normal",
      external_container_queueFontSize: 14,
      external_container_queueFontFamily: '"Open Sans", sans-serif',
      external_container_queueFontWeight: "normal",
      componentFontSize: 14,
      componentFontFamily: '"Open Sans", sans-serif',
      componentFontWeight: "normal",
      external_componentFontSize: 14,
      external_componentFontFamily: '"Open Sans", sans-serif',
      external_componentFontWeight: "normal",
      component_dbFontSize: 14,
      component_dbFontFamily: '"Open Sans", sans-serif',
      component_dbFontWeight: "normal",
      external_component_dbFontSize: 14,
      external_component_dbFontFamily: '"Open Sans", sans-serif',
      external_component_dbFontWeight: "normal",
      component_queueFontSize: 14,
      component_queueFontFamily: '"Open Sans", sans-serif',
      component_queueFontWeight: "normal",
      external_component_queueFontSize: 14,
      external_component_queueFontFamily: '"Open Sans", sans-serif',
      external_component_queueFontWeight: "normal",
      wrap: true,
      wrapPadding: 10,
      person_bg_color: "#08427B",
      person_border_color: "#073B6F",
      external_person_bg_color: "#686868",
      external_person_border_color: "#8A8A8A",
      system_bg_color: "#1168BD",
      system_border_color: "#3C7FC0",
      system_db_bg_color: "#1168BD",
      system_db_border_color: "#3C7FC0",
      system_queue_bg_color: "#1168BD",
      system_queue_border_color: "#3C7FC0",
      external_system_bg_color: "#999999",
      external_system_border_color: "#8A8A8A",
      external_system_db_bg_color: "#999999",
      external_system_db_border_color: "#8A8A8A",
      external_system_queue_bg_color: "#999999",
      external_system_queue_border_color: "#8A8A8A",
      container_bg_color: "#438DD5",
      container_border_color: "#3C7FC0",
      container_db_bg_color: "#438DD5",
      container_db_border_color: "#3C7FC0",
      container_queue_bg_color: "#438DD5",
      container_queue_border_color: "#3C7FC0",
      external_container_bg_color: "#B3B3B3",
      external_container_border_color: "#A6A6A6",
      external_container_db_bg_color: "#B3B3B3",
      external_container_db_border_color: "#A6A6A6",
      external_container_queue_bg_color: "#B3B3B3",
      external_container_queue_border_color: "#A6A6A6",
      component_bg_color: "#85BBF0",
      component_border_color: "#78A8D8",
      component_db_bg_color: "#85BBF0",
      component_db_border_color: "#78A8D8",
      component_queue_bg_color: "#85BBF0",
      component_queue_border_color: "#78A8D8",
      external_component_bg_color: "#CCCCCC",
      external_component_border_color: "#BFBFBF",
      external_component_db_bg_color: "#CCCCCC",
      external_component_db_border_color: "#BFBFBF",
      external_component_queue_bg_color: "#CCCCCC",
      external_component_queue_border_color: "#BFBFBF",
    },
    sankey: {
      useMaxWidth: true,
      width: 600,
      height: 400,
      linkColor: "gradient",
      nodeAlignment: "justify",
      showValues: true,
      prefix: "",
      suffix: "",
    },
    block: {
      useMaxWidth: true,
      padding: 8,
    },
    packet: {
      useMaxWidth: true,
      rowHeight: 32,
      bitWidth: 32,
      bitsPerRow: 32,
      showBits: true,
      paddingX: 5,
      paddingY: 5,
    },
    treeView: {
      useMaxWidth: true,
      rowIndent: 10,
      paddingX: 5,
      paddingY: 5,
      lineThickness: 1,
    },
    architecture: {
      useMaxWidth: true,
      padding: 40,
      iconSize: 80,
      fontSize: 16,
      randomize: false,
    },
    radar: {
      useMaxWidth: true,
      width: 600,
      height: 600,
      marginTop: 50,
      marginRight: 50,
      marginBottom: 50,
      marginLeft: 50,
      axisScaleFactor: 1,
      axisLabelFactor: 1.05,
      curveTension: 0.17,
    },
    venn: {
      useMaxWidth: true,
      width: 800,
      height: 450,
      padding: 8,
      useDebugLayout: false,
    },
    theme: "default",
    look: "classic",
    handDrawnSeed: 0,
    layout: "dagre",
    maxTextSize: 5e4,
    maxEdges: 500,
    darkMode: false,
    fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
    logLevel: 5,
    securityLevel: "strict",
    startOnLoad: true,
    arrowMarkerAbsolute: false,
    secure: [
      "secure",
      "securityLevel",
      "startOnLoad",
      "maxTextSize",
      "suppressErrorRendering",
      "maxEdges",
    ],
    legacyMathML: false,
    forceLegacyMathML: false,
    deterministicIds: false,
    fontSize: 16,
    markdownAutoWrap: true,
    suppressErrorRendering: false,
  },
  chunkICPOFSXXValue65 = {
    ...chunkICPOFSXXValue64,
    deterministicIDSeed: undefined,
    elk: {
      mergeEdges: false,
      nodePlacementStrategy: "BRANDES_KOEPF",
      forceNodeModelOrder: false,
      considerModelOrder: "NODES_AND_EDGES",
    },
    themeCSS: undefined,
    themeVariables: chunkICPOFSXXY.default.getThemeVariables(),
    sequence: {
      ...chunkICPOFSXXValue64.sequence,
      messageFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.messageFontFamily,
          fontSize: this.messageFontSize,
          fontWeight: this.messageFontWeight,
        };
      }, "messageFont"),
      noteFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.noteFontFamily,
          fontSize: this.noteFontSize,
          fontWeight: this.noteFontWeight,
        };
      }, "noteFont"),
      actorFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.actorFontFamily,
          fontSize: this.actorFontSize,
          fontWeight: this.actorFontWeight,
        };
      }, "actorFont"),
    },
    class: {
      hideEmptyMembersBox: false,
    },
    gantt: {
      ...chunkICPOFSXXValue64.gantt,
      tickInterval: undefined,
      useWidth: undefined,
    },
    c4: {
      ...chunkICPOFSXXValue64.c4,
      useWidth: undefined,
      personFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.personFontFamily,
          fontSize: this.personFontSize,
          fontWeight: this.personFontWeight,
        };
      }, "personFont"),
      flowchart: {
        ...chunkICPOFSXXValue64.flowchart,
        inheritDir: false,
      },
      external_personFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.external_personFontFamily,
          fontSize: this.external_personFontSize,
          fontWeight: this.external_personFontWeight,
        };
      }, "external_personFont"),
      systemFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.systemFontFamily,
          fontSize: this.systemFontSize,
          fontWeight: this.systemFontWeight,
        };
      }, "systemFont"),
      external_systemFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.external_systemFontFamily,
          fontSize: this.external_systemFontSize,
          fontWeight: this.external_systemFontWeight,
        };
      }, "external_systemFont"),
      system_dbFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.system_dbFontFamily,
          fontSize: this.system_dbFontSize,
          fontWeight: this.system_dbFontWeight,
        };
      }, "system_dbFont"),
      external_system_dbFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.external_system_dbFontFamily,
          fontSize: this.external_system_dbFontSize,
          fontWeight: this.external_system_dbFontWeight,
        };
      }, "external_system_dbFont"),
      system_queueFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.system_queueFontFamily,
          fontSize: this.system_queueFontSize,
          fontWeight: this.system_queueFontWeight,
        };
      }, "system_queueFont"),
      external_system_queueFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.external_system_queueFontFamily,
          fontSize: this.external_system_queueFontSize,
          fontWeight: this.external_system_queueFontWeight,
        };
      }, "external_system_queueFont"),
      containerFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.containerFontFamily,
          fontSize: this.containerFontSize,
          fontWeight: this.containerFontWeight,
        };
      }, "containerFont"),
      external_containerFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.external_containerFontFamily,
          fontSize: this.external_containerFontSize,
          fontWeight: this.external_containerFontWeight,
        };
      }, "external_containerFont"),
      container_dbFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.container_dbFontFamily,
          fontSize: this.container_dbFontSize,
          fontWeight: this.container_dbFontWeight,
        };
      }, "container_dbFont"),
      external_container_dbFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.external_container_dbFontFamily,
          fontSize: this.external_container_dbFontSize,
          fontWeight: this.external_container_dbFontWeight,
        };
      }, "external_container_dbFont"),
      container_queueFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.container_queueFontFamily,
          fontSize: this.container_queueFontSize,
          fontWeight: this.container_queueFontWeight,
        };
      }, "container_queueFont"),
      external_container_queueFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.external_container_queueFontFamily,
          fontSize: this.external_container_queueFontSize,
          fontWeight: this.external_container_queueFontWeight,
        };
      }, "external_container_queueFont"),
      componentFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.componentFontFamily,
          fontSize: this.componentFontSize,
          fontWeight: this.componentFontWeight,
        };
      }, "componentFont"),
      external_componentFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.external_componentFontFamily,
          fontSize: this.external_componentFontSize,
          fontWeight: this.external_componentFontWeight,
        };
      }, "external_componentFont"),
      component_dbFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.component_dbFontFamily,
          fontSize: this.component_dbFontSize,
          fontWeight: this.component_dbFontWeight,
        };
      }, "component_dbFont"),
      external_component_dbFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.external_component_dbFontFamily,
          fontSize: this.external_component_dbFontSize,
          fontWeight: this.external_component_dbFontWeight,
        };
      }, "external_component_dbFont"),
      component_queueFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.component_queueFontFamily,
          fontSize: this.component_queueFontSize,
          fontWeight: this.component_queueFontWeight,
        };
      }, "component_queueFont"),
      external_component_queueFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.external_component_queueFontFamily,
          fontSize: this.external_component_queueFontSize,
          fontWeight: this.external_component_queueFontWeight,
        };
      }, "external_component_queueFont"),
      boundaryFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.boundaryFontFamily,
          fontSize: this.boundaryFontSize,
          fontWeight: this.boundaryFontWeight,
        };
      }, "boundaryFont"),
      messageFont: chunkAGHRB4JFN(function () {
        return {
          fontFamily: this.messageFontFamily,
          fontSize: this.messageFontSize,
          fontWeight: this.messageFontWeight,
        };
      }, "messageFont"),
    },
    pie: {
      ...chunkICPOFSXXValue64.pie,
      useWidth: 984,
    },
    xyChart: {
      ...chunkICPOFSXXValue64.xyChart,
      useWidth: undefined,
    },
    requirement: {
      ...chunkICPOFSXXValue64.requirement,
      useWidth: undefined,
    },
    packet: {
      ...chunkICPOFSXXValue64.packet,
    },
    treeView: {
      ...chunkICPOFSXXValue64.treeView,
      useWidth: undefined,
    },
    radar: {
      ...chunkICPOFSXXValue64.radar,
    },
    ishikawa: {
      ...chunkICPOFSXXValue64.ishikawa,
    },
    treemap: {
      useMaxWidth: true,
      padding: 10,
      diagramPadding: 8,
      showValues: true,
      nodeWidth: 100,
      nodeHeight: 40,
      borderWidth: 1,
      valueFontSize: 12,
      labelFontSize: 14,
      valueFormat: ",",
    },
    venn: {
      ...chunkICPOFSXXValue64.venn,
    },
  },
  chunkICPOFSXXValue66 = chunkAGHRB4JFN(
    (chunkICPOFSXXParam53, chunkICPOFSXXParam54 = "") =>
      Object.keys(chunkICPOFSXXParam53).reduce(
        (accumulator, current) =>
          Array.isArray(chunkICPOFSXXParam53[current])
            ? accumulator
            : typeof chunkICPOFSXXParam53[current] == "object" &&
                chunkICPOFSXXParam53[current] !== null
              ? [
                  ...accumulator,
                  chunkICPOFSXXParam54 + current,
                  ...chunkICPOFSXXValue66(chunkICPOFSXXParam53[current], ""),
                ]
              : [...accumulator, chunkICPOFSXXParam54 + current],
        [],
      ),
    "keyify",
  ),
  chunkICPOFSXXValue67 = new Set(
    chunkICPOFSXXValue66(chunkICPOFSXXValue65, ""),
  ),
  chunkICPOFSXXD = chunkICPOFSXXValue65,
  chunkICPOFSXXI = chunkAGHRB4JFN((chunkICPOFSXXParam13) => {
    if (
      (chunkAGHRB4JFR.debug(
        "sanitizeDirective called with",
        chunkICPOFSXXParam13,
      ),
      !(typeof chunkICPOFSXXParam13 != "object" || !chunkICPOFSXXParam13))
    ) {
      if (Array.isArray(chunkICPOFSXXParam13)) {
        chunkICPOFSXXParam13.forEach((item) => chunkICPOFSXXI(item));
        return;
      }
      for (let chunkICPOFSXXValue203 of Object.keys(chunkICPOFSXXParam13)) {
        if (
          (chunkAGHRB4JFR.debug("Checking key", chunkICPOFSXXValue203),
          chunkICPOFSXXValue203.startsWith("__") ||
            chunkICPOFSXXValue203.includes("proto") ||
            chunkICPOFSXXValue203.includes("constr") ||
            !chunkICPOFSXXValue67.has(chunkICPOFSXXValue203) ||
            chunkICPOFSXXParam13[chunkICPOFSXXValue203] == null)
        ) {
          chunkAGHRB4JFR.debug(
            "sanitize deleting key: ",
            chunkICPOFSXXValue203,
          );
          delete chunkICPOFSXXParam13[chunkICPOFSXXValue203];
          continue;
        }
        if (typeof chunkICPOFSXXParam13[chunkICPOFSXXValue203] == "object") {
          chunkAGHRB4JFR.debug("sanitizing object", chunkICPOFSXXValue203);
          chunkICPOFSXXI(chunkICPOFSXXParam13[chunkICPOFSXXValue203]);
          continue;
        }
        for (let chunkICPOFSXXValue279 of [
          "themeCSS",
          "fontFamily",
          "altFontFamily",
        ])
          chunkICPOFSXXValue203.includes(chunkICPOFSXXValue279) &&
            (chunkAGHRB4JFR.debug(
              "sanitizing css option",
              chunkICPOFSXXValue203,
            ),
            (chunkICPOFSXXParam13[chunkICPOFSXXValue203] = chunkICPOFSXXValue68(
              chunkICPOFSXXParam13[chunkICPOFSXXValue203],
            )));
      }
      if (chunkICPOFSXXParam13.themeVariables)
        for (let chunkICPOFSXXValue271 of Object.keys(
          chunkICPOFSXXParam13.themeVariables,
        )) {
          let chunkICPOFSXXValue277 =
            chunkICPOFSXXParam13.themeVariables[chunkICPOFSXXValue271];
          chunkICPOFSXXValue277?.match &&
            !chunkICPOFSXXValue277.match(/^[\d "#%(),.;A-Za-z]+$/) &&
            (chunkICPOFSXXParam13.themeVariables[chunkICPOFSXXValue271] = "");
        }
      chunkAGHRB4JFR.debug("After sanitization", chunkICPOFSXXParam13);
    }
  }, "sanitizeDirective"),
  chunkICPOFSXXValue68 = chunkAGHRB4JFN((chunkICPOFSXXParam60) => {
    let chunkICPOFSXXValue266 = 0,
      chunkICPOFSXXValue267 = 0;
    for (let chunkICPOFSXXValue306 of chunkICPOFSXXParam60) {
      if (chunkICPOFSXXValue266 < chunkICPOFSXXValue267)
        return "{ /* ERROR: Unbalanced CSS */ }";
      chunkICPOFSXXValue306 === "{"
        ? chunkICPOFSXXValue266++
        : chunkICPOFSXXValue306 === "}" && chunkICPOFSXXValue267++;
    }
    return chunkICPOFSXXValue266 === chunkICPOFSXXValue267
      ? chunkICPOFSXXParam60
      : "{ /* ERROR: Unbalanced CSS */ }";
  }, "sanitizeCss"),
  chunkICPOFSXXL = Object.freeze(chunkICPOFSXXD),
  chunkICPOFSXXH = chunkAGHRB4JFN(
    (chunkICPOFSXXParam87) =>
      !(
        chunkICPOFSXXParam87 === false ||
        ["false", "null", "0"].includes(
          String(chunkICPOFSXXParam87).trim().toLowerCase(),
        )
      ),
    "evaluate",
  ),
  chunkICPOFSXXValue69 = chunkICPOFSXXR({}, chunkICPOFSXXL),
  chunkICPOFSXXValue70,
  chunkICPOFSXXValue71 = [],
  _t = chunkICPOFSXXR({}, chunkICPOFSXXL),
  chunkICPOFSXXValue72 = chunkAGHRB4JFN(
    (chunkICPOFSXXParam32, chunkICPOFSXXParam33) => {
      let chunkICPOFSXXValue224 = chunkICPOFSXXR({}, chunkICPOFSXXParam32),
        chunkICPOFSXXValue225 = {};
      for (let chunkICPOFSXXValue350 of chunkICPOFSXXParam33) {
        chunkICPOFSXXValue73(chunkICPOFSXXValue350);
        chunkICPOFSXXValue225 = chunkICPOFSXXR(
          chunkICPOFSXXValue225,
          chunkICPOFSXXValue350,
        );
      }
      if (
        ((chunkICPOFSXXValue224 = chunkICPOFSXXR(
          chunkICPOFSXXValue224,
          chunkICPOFSXXValue225,
        )),
        chunkICPOFSXXValue225.theme &&
          chunkICPOFSXXValue225.theme in chunkICPOFSXXY)
      ) {
        let chunkICPOFSXXValue276 = chunkICPOFSXXR(
          chunkICPOFSXXR({}, chunkICPOFSXXValue70).themeVariables || {},
          chunkICPOFSXXValue225.themeVariables,
        );
        chunkICPOFSXXValue224.theme &&
          chunkICPOFSXXValue224.theme in chunkICPOFSXXY &&
          (chunkICPOFSXXValue224.themeVariables = chunkICPOFSXXY[
            chunkICPOFSXXValue224.theme
          ].getThemeVariables(chunkICPOFSXXValue276));
      }
      return ((_t = chunkICPOFSXXValue224), chunkICPOFSXXValue77(_t), _t);
    },
    "updateCurrentConfig",
  ),
  _chunkICPOFSXXH = chunkAGHRB4JFN(
    (chunkICPOFSXXParam156) => (
      chunkICPOFSXXValue77(chunkICPOFSXXParam156),
      chunkICPOFSXXR(_t, chunkICPOFSXXParam156),
      _chunkICPOFSXXY()
    ),
    "setConfig",
  ),
  _chunkICPOFSXXY = chunkAGHRB4JFN(() => chunkICPOFSXXR({}, _t), "getConfig"),
  chunkICPOFSXXValue73 = chunkAGHRB4JFN((chunkICPOFSXXParam18) => {
    chunkICPOFSXXParam18 &&
      (["secure", ...(chunkICPOFSXXValue69.secure ?? [])].forEach((item) => {
        Object.hasOwn(chunkICPOFSXXParam18, item) &&
          (chunkAGHRB4JFR.debug(
            `Denied attempt to modify a secure key ${item}`,
            chunkICPOFSXXParam18[item],
          ),
          delete chunkICPOFSXXParam18[item]);
      }),
      Object.keys(chunkICPOFSXXParam18).forEach((item) => {
        item.startsWith("__") && delete chunkICPOFSXXParam18[item];
      }),
      Object.keys(chunkICPOFSXXParam18).forEach((item) => {
        typeof chunkICPOFSXXParam18[item] == "string" &&
          (chunkICPOFSXXParam18[item].includes("<") ||
            chunkICPOFSXXParam18[item].includes(">") ||
            chunkICPOFSXXParam18[item].includes("url(data:")) &&
          delete chunkICPOFSXXParam18[item];
        typeof chunkICPOFSXXParam18[item] == "object" &&
          chunkICPOFSXXValue73(chunkICPOFSXXParam18[item]);
      }));
  }, "sanitize"),
  chunkICPOFSXXValue74 = {
    LAZY_LOAD_DEPRECATED:
      "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead.",
    FLOWCHART_HTML_LABELS_DEPRECATED:
      "flowchart.htmlLabels is deprecated. Please use global htmlLabels instead.",
  },
  chunkICPOFSXXValue75 = {},
  chunkICPOFSXXValue76 = chunkAGHRB4JFN((chunkICPOFSXXParam131) => {
    chunkICPOFSXXValue75[chunkICPOFSXXParam131] ||
      (chunkAGHRB4JFR.warn(chunkICPOFSXXValue74[chunkICPOFSXXParam131]),
      (chunkICPOFSXXValue75[chunkICPOFSXXParam131] = true));
  }, "issueWarning"),
  chunkICPOFSXXValue77 = chunkAGHRB4JFN((chunkICPOFSXXParam86) => {
    chunkICPOFSXXParam86 &&
      (chunkICPOFSXXParam86.lazyLoadedDiagrams ||
        chunkICPOFSXXParam86.loadExternalDiagramsAtStartup) &&
      chunkICPOFSXXValue76("LAZY_LOAD_DEPRECATED");
  }, "checkConfig"),
  chunkICPOFSXXW = chunkAGHRB4JFN(
    (chunkICPOFSXXParam79) => (
      chunkICPOFSXXParam79.flowchart?.htmlLabels != null &&
        chunkICPOFSXXValue76("FLOWCHART_HTML_LABELS_DEPRECATED"),
      chunkICPOFSXXH(
        chunkICPOFSXXParam79.htmlLabels ??
          chunkICPOFSXXParam79.flowchart?.htmlLabels ??
          true,
      )
    ),
    "getEffectiveHtmlLabels",
  ),
  chunkICPOFSXXA = /<br\s*\/?>/gi,
  chunkICPOFSXXValue78 = chunkAGHRB4JFN(
    (chunkICPOFSXXParam127) =>
      chunkICPOFSXXParam127
        ? chunkICPOFSXXValue86(chunkICPOFSXXParam127)
            .replace(/\\n/g, "#br#")
            .split("#br#")
        : [""],
    "getRows",
  ),
  chunkICPOFSXXValue79 = (() => {
    let chunkICPOFSXXValue333 = false;
    return () => {
      chunkICPOFSXXValue333 ||= (chunkICPOFSXXHelper8(), true);
    };
  })();
export const _chunkICPOFSXXZ = chunkAGHRB4JFN((chunkICPOFSXXParam155) => {
  chunkICPOFSXXValue70 = chunkICPOFSXXR({}, chunkICPOFSXXParam155);
}, "saveConfigFromInitialize");
export const _chunkICPOFSXXN = chunkAGHRB4JFN((chunkICPOFSXXParam70) => {
  chunkICPOFSXXI(chunkICPOFSXXParam70);
  chunkICPOFSXXParam70.fontFamily &&
    !chunkICPOFSXXParam70.themeVariables?.fontFamily &&
    (chunkICPOFSXXParam70.themeVariables = {
      ...chunkICPOFSXXParam70.themeVariables,
      fontFamily: chunkICPOFSXXParam70.fontFamily,
    });
  chunkICPOFSXXValue71.push(chunkICPOFSXXParam70);
  chunkICPOFSXXValue72(chunkICPOFSXXValue69, chunkICPOFSXXValue71);
}, "addDirective");
export const chunkICPOFSXXF = chunkAGHRB4JFN(function (
  chunkICPOFSXXParam39,
  chunkICPOFSXXParam40,
) {
  chunkICPOFSXXParam39 = chunkICPOFSXXParam39
    .replace(chunkICPOFSXXG, "")
    .replace(chunkICPOFSXXM, "")
    .replace(chunkICPOFSXXValue39, "\n");
  for (let [
    chunkICPOFSXXValue335,
    { detector: chunkICPOFSXXValue336 },
  ] of Object.entries(chunkICPOFSXXP))
    if (chunkICPOFSXXValue336(chunkICPOFSXXParam39, chunkICPOFSXXParam40))
      return chunkICPOFSXXValue335;
  throw new chunkICPOFSXXT(
    `No diagram type detected matching given configuration for text: ${chunkICPOFSXXParam39}`,
  );
}, "detectType");
export const chunkICPOFSXXX = chunkAGHRB4JFN(
  (chunkICPOFSXXParam152) => (
    (chunkICPOFSXXValue69 = chunkICPOFSXXR(
      chunkICPOFSXXValue69,
      chunkICPOFSXXParam152,
    )),
    chunkICPOFSXXValue72(chunkICPOFSXXValue69, chunkICPOFSXXValue71),
    chunkICPOFSXXValue69
  ),
  "updateSiteConfig",
);
export const _chunkICPOFSXXT = chunkAGHRB4JFN(
  () => chunkICPOFSXXR({}, chunkICPOFSXXValue69),
  "getSiteConfig",
);
export const chunkICPOFSXXS = chunkAGHRB4JFN(
  (chunkICPOFSXXParam161) => chunkICPOFSXXP[chunkICPOFSXXParam161].loader,
  "getDiagramLoader",
);
export const chunkICPOFSXXO = chunkAGHRB4JFN(() => {
  let chunkICPOFSXXValue323 = {};
  chunkICPOFSXXValue70 &&
    (chunkICPOFSXXValue323 = chunkICPOFSXXR(
      chunkICPOFSXXValue323,
      chunkICPOFSXXValue70,
    ));
  for (let chunkICPOFSXXValue352 of chunkICPOFSXXValue71)
    chunkICPOFSXXValue323 = chunkICPOFSXXR(
      chunkICPOFSXXValue323,
      chunkICPOFSXXValue352,
    );
  return chunkICPOFSXXValue323;
}, "getUserDefinedConfig");
export const chunkICPOFSXXN = chunkAGHRB4JFN((...chunkICPOFSXXParam96) => {
  for (let { id, detector, loader } of chunkICPOFSXXParam96)
    chunkICPOFSXXValue40(id, detector, loader);
}, "registerLazyLoadedDiagrams");
export const _chunkICPOFSXXG = chunkAGHRB4JFN(
  (chunkICPOFSXXParam71) => (
    (chunkICPOFSXXValue69 = chunkICPOFSXXR({}, chunkICPOFSXXL)),
    (chunkICPOFSXXValue69 = chunkICPOFSXXR(
      chunkICPOFSXXValue69,
      chunkICPOFSXXParam71,
    )),
    chunkICPOFSXXParam71.theme &&
      chunkICPOFSXXY[chunkICPOFSXXParam71.theme] &&
      (chunkICPOFSXXValue69.themeVariables = chunkICPOFSXXY[
        chunkICPOFSXXParam71.theme
      ].getThemeVariables(chunkICPOFSXXParam71.themeVariables)),
    chunkICPOFSXXValue72(chunkICPOFSXXValue69, chunkICPOFSXXValue71),
    chunkICPOFSXXValue69
  ),
  "setSiteConfig",
);
export const _chunkICPOFSXXF = chunkAGHRB4JFN(
  (chunkICPOFSXXParam146 = chunkICPOFSXXValue69) => {
    chunkICPOFSXXValue71 = [];
    chunkICPOFSXXValue72(chunkICPOFSXXParam146, chunkICPOFSXXValue71);
  },
  "reset",
);
function chunkICPOFSXXHelper8() {
  chunkICPOFSXXZ.addHook("beforeSanitizeAttributes", (chunkICPOFSXXParam81) => {
    chunkICPOFSXXParam81.tagName === "A" &&
      chunkICPOFSXXParam81.hasAttribute("target") &&
      chunkICPOFSXXParam81.setAttribute(
        "data-temp-href-target",
        chunkICPOFSXXParam81.getAttribute("target") ?? "",
      );
  });
  chunkICPOFSXXZ.addHook("afterSanitizeAttributes", (chunkICPOFSXXParam56) => {
    chunkICPOFSXXParam56.tagName === "A" &&
      chunkICPOFSXXParam56.hasAttribute("data-temp-href-target") &&
      (chunkICPOFSXXParam56.setAttribute(
        "target",
        chunkICPOFSXXParam56.getAttribute("data-temp-href-target") ?? "",
      ),
      chunkICPOFSXXParam56.removeAttribute("data-temp-href-target"),
      chunkICPOFSXXParam56.getAttribute("target") === "_blank" &&
        chunkICPOFSXXParam56.setAttribute("rel", "noopener"));
  });
}
chunkAGHRB4JFN(chunkICPOFSXXHelper8, "setupDompurifyHooks");
var chunkICPOFSXXValue80 = chunkAGHRB4JFN(
    (chunkICPOFSXXParam158) => (
      chunkICPOFSXXValue79(),
      chunkICPOFSXXZ.sanitize(chunkICPOFSXXParam158)
    ),
    "removeScript",
  ),
  chunkICPOFSXXValue81 = chunkAGHRB4JFN(
    (chunkICPOFSXXParam34, chunkICPOFSXXParam35) => {
      if (chunkICPOFSXXW(chunkICPOFSXXParam35)) {
        let chunkICPOFSXXValue239 = chunkICPOFSXXParam35.securityLevel;
        chunkICPOFSXXValue239 === "antiscript" ||
        chunkICPOFSXXValue239 === "strict" ||
        chunkICPOFSXXValue239 === "sandbox"
          ? (chunkICPOFSXXParam34 = chunkICPOFSXXValue80(chunkICPOFSXXParam34))
          : chunkICPOFSXXValue239 !== "loose" &&
            ((chunkICPOFSXXParam34 =
              chunkICPOFSXXValue86(chunkICPOFSXXParam34)),
            (chunkICPOFSXXParam34 = chunkICPOFSXXParam34
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")),
            (chunkICPOFSXXParam34 = chunkICPOFSXXParam34.replace(
              /=/g,
              "&equals;",
            )),
            (chunkICPOFSXXParam34 =
              chunkICPOFSXXValue85(chunkICPOFSXXParam34)));
      }
      return chunkICPOFSXXParam34;
    },
    "sanitizeMore",
  ),
  _chunkICPOFSXXL = chunkAGHRB4JFN(
    (chunkICPOFSXXParam72, chunkICPOFSXXParam73) =>
      chunkICPOFSXXParam72 &&
      ((chunkICPOFSXXParam72 = chunkICPOFSXXParam73.dompurifyConfig
        ? chunkICPOFSXXZ
            .sanitize(
              chunkICPOFSXXValue81(chunkICPOFSXXParam72, chunkICPOFSXXParam73),
              chunkICPOFSXXParam73.dompurifyConfig,
            )
            .toString()
        : chunkICPOFSXXZ
            .sanitize(
              chunkICPOFSXXValue81(chunkICPOFSXXParam72, chunkICPOFSXXParam73),
              {
                FORBID_TAGS: ["style"],
              },
            )
            .toString()),
      chunkICPOFSXXParam72),
    "sanitizeText",
  ),
  chunkICPOFSXXValue82 = chunkAGHRB4JFN(
    (chunkICPOFSXXParam103, chunkICPOFSXXParam104) =>
      typeof chunkICPOFSXXParam103 == "string"
        ? _chunkICPOFSXXL(chunkICPOFSXXParam103, chunkICPOFSXXParam104)
        : chunkICPOFSXXParam103
            .flat()
            .map((item) => _chunkICPOFSXXL(item, chunkICPOFSXXParam104)),
    "sanitizeTextOrArray",
  ),
  chunkICPOFSXXValue83 = chunkAGHRB4JFN(
    (chunkICPOFSXXParam165) => chunkICPOFSXXA.test(chunkICPOFSXXParam165),
    "hasBreaks",
  ),
  chunkICPOFSXXValue84 = chunkAGHRB4JFN(
    (chunkICPOFSXXParam162) => chunkICPOFSXXParam162.split(chunkICPOFSXXA),
    "splitBreaks",
  ),
  chunkICPOFSXXValue85 = chunkAGHRB4JFN(
    (chunkICPOFSXXParam153) => chunkICPOFSXXParam153.replace(/#br#/g, "<br/>"),
    "placeholderToBreak",
  ),
  chunkICPOFSXXValue86 = chunkAGHRB4JFN(
    (chunkICPOFSXXParam160) =>
      chunkICPOFSXXParam160.replace(chunkICPOFSXXA, "#br#"),
    "breakToPlaceholder",
  ),
  _chunkICPOFSXXD = chunkAGHRB4JFN((chunkICPOFSXXParam52) => {
    let chunkICPOFSXXValue261 = "";
    return (
      chunkICPOFSXXParam52 &&
        ((chunkICPOFSXXValue261 =
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          window.location.search),
        (chunkICPOFSXXValue261 = CSS.escape(chunkICPOFSXXValue261))),
      chunkICPOFSXXValue261
    );
  }, "getUrl"),
  chunkICPOFSXXValue87 = chunkAGHRB4JFN(function (...chunkICPOFSXXParam91) {
    let chunkICPOFSXXValue330 = chunkICPOFSXXParam91.filter(
      (item) => !isNaN(item),
    );
    return Math.max(...chunkICPOFSXXValue330);
  }, "getMax"),
  chunkICPOFSXXValue88 = chunkAGHRB4JFN(function (...chunkICPOFSXXParam92) {
    let chunkICPOFSXXValue331 = chunkICPOFSXXParam92.filter(
      (item) => !isNaN(item),
    );
    return Math.min(...chunkICPOFSXXValue331);
  }, "getMin"),
  chunkICPOFSXXValue89 = chunkAGHRB4JFN(
    (chunkICPOFSXXParam144, chunkICPOFSXXParam145) =>
      Math.max(
        0,
        chunkICPOFSXXParam144.split(chunkICPOFSXXParam145).length - 1,
      ),
    "countOccurrence",
  ),
  chunkICPOFSXXValue90 = chunkAGHRB4JFN(
    (chunkICPOFSXXParam89, chunkICPOFSXXParam90) => {
      let chunkICPOFSXXValue327 = chunkICPOFSXXValue89(
          chunkICPOFSXXParam89,
          "~",
        ),
        chunkICPOFSXXValue328 = chunkICPOFSXXValue89(chunkICPOFSXXParam90, "~");
      return chunkICPOFSXXValue327 === 1 && chunkICPOFSXXValue328 === 1;
    },
    "shouldCombineSets",
  ),
  chunkICPOFSXXValue91 = chunkAGHRB4JFN((chunkICPOFSXXParam26) => {
    let chunkICPOFSXXValue214 = chunkICPOFSXXValue89(chunkICPOFSXXParam26, "~"),
      chunkICPOFSXXValue215 = false;
    if (chunkICPOFSXXValue214 <= 1) return chunkICPOFSXXParam26;
    chunkICPOFSXXValue214 % 2 != 0 &&
      chunkICPOFSXXParam26.startsWith("~") &&
      ((chunkICPOFSXXParam26 = chunkICPOFSXXParam26.substring(1)),
      (chunkICPOFSXXValue215 = true));
    let chunkICPOFSXXValue216 = [...chunkICPOFSXXParam26],
      chunkICPOFSXXValue217 = chunkICPOFSXXValue216.indexOf("~"),
      chunkICPOFSXXValue218 = chunkICPOFSXXValue216.lastIndexOf("~");
    for (
      ;
      chunkICPOFSXXValue217 !== -1 &&
      chunkICPOFSXXValue218 !== -1 &&
      chunkICPOFSXXValue217 !== chunkICPOFSXXValue218;

    ) {
      chunkICPOFSXXValue216[chunkICPOFSXXValue217] = "<";
      chunkICPOFSXXValue216[chunkICPOFSXXValue218] = ">";
      chunkICPOFSXXValue217 = chunkICPOFSXXValue216.indexOf("~");
      chunkICPOFSXXValue218 = chunkICPOFSXXValue216.lastIndexOf("~");
    }
    return (
      chunkICPOFSXXValue215 && chunkICPOFSXXValue216.unshift("~"),
      chunkICPOFSXXValue216.join("")
    );
  }, "processSet"),
  chunkICPOFSXXValue92 = chunkAGHRB4JFN(
    () => window.MathMLElement !== undefined,
    "isMathMLSupported",
  ),
  chunkICPOFSXXValue93 = /\$\$(.*)\$\$/g,
  chunkICPOFSXXK = chunkAGHRB4JFN(
    (chunkICPOFSXXParam149) =>
      (chunkICPOFSXXParam149.match(chunkICPOFSXXValue93)?.length ?? 0) > 0,
    "hasKatex",
  ),
  chunkICPOFSXXValue94 = chunkAGHRB4JFN(
    async (chunkICPOFSXXParam11, chunkICPOFSXXParam12) => {
      if (!chunkICPOFSXXK(chunkICPOFSXXParam11)) return chunkICPOFSXXParam11;
      if (
        !(
          chunkICPOFSXXValue92() ||
          chunkICPOFSXXParam12.legacyMathML ||
          chunkICPOFSXXParam12.forceLegacyMathML
        )
      )
        return chunkICPOFSXXParam11.replace(
          chunkICPOFSXXValue93,
          "MathML is unsupported in this environment.",
        );
      {
        let { default: _default } = await PreloadHelper(
            async () => {
              let { default: __default } = await import("../utils/katex");
              return {
                default: __default,
              };
            },
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
            ]),
            import.meta.url,
          ),
          chunkICPOFSXXValue202 =
            chunkICPOFSXXParam12.forceLegacyMathML ||
            (!chunkICPOFSXXValue92() && chunkICPOFSXXParam12.legacyMathML)
              ? "htmlAndMathml"
              : "mathml";
        return chunkICPOFSXXParam11
          .split(chunkICPOFSXXA)
          .map((item) =>
            chunkICPOFSXXK(item)
              ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${item}</div>`
              : `<div>${item}</div>`,
          )
          .join("")
          .replace(
            chunkICPOFSXXValue93,
            (chunkICPOFSXXParam74, chunkICPOFSXXParam75) =>
              _default
                .renderToString(chunkICPOFSXXParam75, {
                  throwOnError: true,
                  displayMode: true,
                  output: chunkICPOFSXXValue202,
                })
                .replace(/\n/g, " ")
                .replace(/<annotation.*<\/annotation>/g, ""),
          );
      }
      return chunkICPOFSXXParam11.replace(
        chunkICPOFSXXValue93,
        "Katex is not supported in @mermaid-js/tiny. Please use the full mermaid library.",
      );
    },
    "renderKatexUnsanitized",
  ),
  _chunkICPOFSXXP = chunkAGHRB4JFN(
    async (chunkICPOFSXXParam150, chunkICPOFSXXParam151) =>
      _chunkICPOFSXXL(
        await chunkICPOFSXXValue94(
          chunkICPOFSXXParam150,
          chunkICPOFSXXParam151,
        ),
        chunkICPOFSXXParam151,
      ),
    "renderKatexSanitized",
  ),
  $t = chunkAGHRB4JFN(function (chunkICPOFSXXParam128, chunkICPOFSXXParam129) {
    for (let chunkICPOFSXXValue351 of chunkICPOFSXXParam129)
      chunkICPOFSXXParam128.attr(
        chunkICPOFSXXValue351[0],
        chunkICPOFSXXValue351[1],
      );
  }, "d3Attrs"),
  chunkICPOFSXXValue95 = chunkAGHRB4JFN(function (
    chunkICPOFSXXParam67,
    chunkICPOFSXXParam68,
    chunkICPOFSXXParam69,
  ) {
    let chunkICPOFSXXValue272 = new Map();
    return (
      chunkICPOFSXXParam69
        ? (chunkICPOFSXXValue272.set("width", "100%"),
          chunkICPOFSXXValue272.set(
            "style",
            `max-width: ${chunkICPOFSXXParam68}px;`,
          ))
        : (chunkICPOFSXXValue272.set("height", chunkICPOFSXXParam67),
          chunkICPOFSXXValue272.set("width", chunkICPOFSXXParam68)),
      chunkICPOFSXXValue272
    );
  }, "calculateSvgSizeAttrs"),
  chunkICPOFSXXC = chunkAGHRB4JFN(function (
    chunkICPOFSXXParam135,
    chunkICPOFSXXParam136,
    chunkICPOFSXXParam137,
    chunkICPOFSXXParam138,
  ) {
    $t(
      chunkICPOFSXXParam135,
      chunkICPOFSXXValue95(
        chunkICPOFSXXParam136,
        chunkICPOFSXXParam137,
        chunkICPOFSXXParam138,
      ),
    );
  }, "configureSvgSize"),
  _chunkICPOFSXXK = chunkAGHRB4JFN(function (
    chunkICPOFSXXParam22,
    chunkICPOFSXXParam23,
    chunkICPOFSXXParam24,
    chunkICPOFSXXParam25,
  ) {
    let chunkICPOFSXXValue208 = chunkICPOFSXXParam23.node().getBBox(),
      chunkICPOFSXXValue209 = chunkICPOFSXXValue208.width,
      chunkICPOFSXXValue210 = chunkICPOFSXXValue208.height;
    chunkAGHRB4JFR.info(
      `SVG bounds: ${chunkICPOFSXXValue209}x${chunkICPOFSXXValue210}`,
      chunkICPOFSXXValue208,
    );
    let chunkICPOFSXXValue211 = 0,
      chunkICPOFSXXValue212 = 0;
    chunkAGHRB4JFR.info(
      `Graph bounds: ${chunkICPOFSXXValue211}x${chunkICPOFSXXValue212}`,
      chunkICPOFSXXParam22,
    );
    chunkICPOFSXXValue211 = chunkICPOFSXXValue209 + chunkICPOFSXXParam24 * 2;
    chunkICPOFSXXValue212 = chunkICPOFSXXValue210 + chunkICPOFSXXParam24 * 2;
    chunkAGHRB4JFR.info(
      `Calculated bounds: ${chunkICPOFSXXValue211}x${chunkICPOFSXXValue212}`,
    );
    chunkICPOFSXXC(
      chunkICPOFSXXParam23,
      chunkICPOFSXXValue212,
      chunkICPOFSXXValue211,
      chunkICPOFSXXParam25,
    );
    let chunkICPOFSXXValue213 = `${chunkICPOFSXXValue208.x - chunkICPOFSXXParam24} ${chunkICPOFSXXValue208.y - chunkICPOFSXXParam24} ${chunkICPOFSXXValue208.width + 2 * chunkICPOFSXXParam24} ${chunkICPOFSXXValue208.height + 2 * chunkICPOFSXXParam24}`;
    chunkICPOFSXXParam23.attr("viewBox", chunkICPOFSXXValue213);
  }, "setupGraphViewbox"),
  chunkICPOFSXXValue96 = {},
  chunkICPOFSXXValue97 = chunkAGHRB4JFN(
    (
      chunkICPOFSXXParam1,
      chunkICPOFSXXParam2,
      chunkICPOFSXXParam3,
      chunkICPOFSXXParam4,
    ) => {
      let chunkICPOFSXXValue178 = "";
      return (
        chunkICPOFSXXParam1 in chunkICPOFSXXValue96 &&
        chunkICPOFSXXValue96[chunkICPOFSXXParam1]
          ? (chunkICPOFSXXValue178 = chunkICPOFSXXValue96[chunkICPOFSXXParam1]({
              ...chunkICPOFSXXParam3,
              svgId: chunkICPOFSXXParam4,
            }))
          : chunkAGHRB4JFR.warn(`No theme found for ${chunkICPOFSXXParam1}`),
        ` & {
    font-family: ${chunkICPOFSXXParam3.fontFamily};
    font-size: ${chunkICPOFSXXParam3.fontSize};
    fill: ${chunkICPOFSXXParam3.textColor}
  }
  @keyframes edge-animation-frame {
    from {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  & .edge-animation-slow {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 50s linear infinite;
    stroke-linecap: round;
  }
  & .edge-animation-fast {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 20s linear infinite;
    stroke-linecap: round;
  }
  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${chunkICPOFSXXParam3.errorBkgColor};
  }
  & .error-text {
    fill: ${chunkICPOFSXXParam3.errorTextColor};
    stroke: ${chunkICPOFSXXParam3.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: ${chunkICPOFSXXParam3.strokeWidth ?? 1}px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }
  & .edge-thickness-invisible {
    stroke-width: 0;
    fill: none;
  }
  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${chunkICPOFSXXParam3.lineColor};
    stroke: ${chunkICPOFSXXParam3.lineColor};
  }
  & .marker.cross {
    stroke: ${chunkICPOFSXXParam3.lineColor};
  }

  & svg {
    font-family: ${chunkICPOFSXXParam3.fontFamily};
    font-size: ${chunkICPOFSXXParam3.fontSize};
  }
   & p {
    margin: 0
   }

  ${chunkICPOFSXXValue178}
  .node .neo-node {
    stroke: ${chunkICPOFSXXParam3.nodeBorder};
  }

  [data-look="neo"].node rect, [data-look="neo"].cluster rect, [data-look="neo"].node polygon {
    stroke: ${chunkICPOFSXXParam3.useGradient ? "url(" + chunkICPOFSXXParam4 + "-gradient)" : chunkICPOFSXXParam3.nodeBorder};
    filter: ${chunkICPOFSXXParam3.dropShadow ? chunkICPOFSXXParam3.dropShadow.replace("url(#drop-shadow)", `url(${chunkICPOFSXXParam4}-drop-shadow)`) : "none"};
  }


  [data-look="neo"].node path {
    stroke: ${chunkICPOFSXXParam3.useGradient ? "url(" + chunkICPOFSXXParam4 + "-gradient)" : chunkICPOFSXXParam3.nodeBorder};
    stroke-width: ${chunkICPOFSXXParam3.strokeWidth ?? 1}px;
  }

  [data-look="neo"].node .outer-path {
    filter: ${chunkICPOFSXXParam3.dropShadow ? chunkICPOFSXXParam3.dropShadow.replace("url(#drop-shadow)", `url(${chunkICPOFSXXParam4}-drop-shadow)`) : "none"};
  }

  [data-look="neo"].node .neo-line path {
    stroke: ${chunkICPOFSXXParam3.nodeBorder};
    filter: none;
  }

  [data-look="neo"].node circle{
    stroke: ${chunkICPOFSXXParam3.useGradient ? "url(" + chunkICPOFSXXParam4 + "-gradient)" : chunkICPOFSXXParam3.nodeBorder};
    filter: ${chunkICPOFSXXParam3.dropShadow ? chunkICPOFSXXParam3.dropShadow.replace("url(#drop-shadow)", `url(${chunkICPOFSXXParam4}-drop-shadow)`) : "none"};
  }

  [data-look="neo"].node circle .state-start{
    fill: #000000;
  }

  [data-look="neo"].icon-shape .icon {
    fill: ${chunkICPOFSXXParam3.useGradient ? "url(" + chunkICPOFSXXParam4 + "-gradient)" : chunkICPOFSXXParam3.nodeBorder};
    filter: ${chunkICPOFSXXParam3.dropShadow ? chunkICPOFSXXParam3.dropShadow.replace("url(#drop-shadow)", `url(${chunkICPOFSXXParam4}-drop-shadow)`) : "none"};
  }

    [data-look="neo"].icon-shape .icon-neo path {
    stroke: ${chunkICPOFSXXParam3.useGradient ? "url(" + chunkICPOFSXXParam4 + "-gradient)" : chunkICPOFSXXParam3.nodeBorder};
    filter: ${chunkICPOFSXXParam3.dropShadow ? chunkICPOFSXXParam3.dropShadow.replace("url(#drop-shadow)", `url(${chunkICPOFSXXParam4}-drop-shadow)`) : "none"};
  }

  ${chunkICPOFSXXParam2}
`
      );
    },
    "getStyles",
  ),
  on = chunkAGHRB4JFN((chunkICPOFSXXParam141, chunkICPOFSXXParam142) => {
    chunkICPOFSXXParam142 !== undefined &&
      (chunkICPOFSXXValue96[chunkICPOFSXXParam141] = chunkICPOFSXXParam142);
  }, "addStylesForDiagram"),
  _chunkICPOFSXXO = {};
export const _chunkICPOFSXXS = {
  getRows: chunkICPOFSXXValue78,
  sanitizeText: _chunkICPOFSXXL,
  sanitizeTextOrArray: chunkICPOFSXXValue82,
  hasBreaks: chunkICPOFSXXValue83,
  splitBreaks: chunkICPOFSXXValue84,
  lineBreakRegex: chunkICPOFSXXA,
  removeScript: chunkICPOFSXXValue80,
  getUrl: _chunkICPOFSXXD,
  evaluate: chunkICPOFSXXH,
  getMax: chunkICPOFSXXValue87,
  getMin: chunkICPOFSXXValue88,
};
export const chunkICPOFSXXJ = chunkAGHRB4JFN(function (chunkICPOFSXXParam36) {
  let chunkICPOFSXXValue226 = chunkICPOFSXXParam36.split(/(,)/),
    chunkICPOFSXXValue227 = [];
  for (
    let chunkICPOFSXXValue263 = 0;
    chunkICPOFSXXValue263 < chunkICPOFSXXValue226.length;
    chunkICPOFSXXValue263++
  ) {
    let chunkICPOFSXXValue268 = chunkICPOFSXXValue226[chunkICPOFSXXValue263];
    if (
      chunkICPOFSXXValue268 === "," &&
      chunkICPOFSXXValue263 > 0 &&
      chunkICPOFSXXValue263 + 1 < chunkICPOFSXXValue226.length
    ) {
      let chunkICPOFSXXValue309 =
          chunkICPOFSXXValue226[chunkICPOFSXXValue263 - 1],
        chunkICPOFSXXValue310 =
          chunkICPOFSXXValue226[chunkICPOFSXXValue263 + 1];
      chunkICPOFSXXValue90(chunkICPOFSXXValue309, chunkICPOFSXXValue310) &&
        ((chunkICPOFSXXValue268 =
          chunkICPOFSXXValue309 + "," + chunkICPOFSXXValue310),
        chunkICPOFSXXValue263++,
        chunkICPOFSXXValue227.pop());
    }
    chunkICPOFSXXValue227.push(chunkICPOFSXXValue91(chunkICPOFSXXValue268));
  }
  return chunkICPOFSXXValue227.join("");
}, "parseGenericTypes");
export const _chunkICPOFSXXI = chunkAGHRB4JFN(
  async (chunkICPOFSXXParam28, chunkICPOFSXXParam29) => {
    let chunkICPOFSXXValue220 = document.createElement("div");
    chunkICPOFSXXValue220.innerHTML = await _chunkICPOFSXXP(
      chunkICPOFSXXParam28,
      chunkICPOFSXXParam29,
    );
    chunkICPOFSXXValue220.id = "katex-temp";
    chunkICPOFSXXValue220.style.visibility = "hidden";
    chunkICPOFSXXValue220.style.position = "absolute";
    chunkICPOFSXXValue220.style.top = "0";
    document
      .querySelector("body")
      ?.insertAdjacentElement("beforeend", chunkICPOFSXXValue220);
    let chunkICPOFSXXValue221 = {
      width: chunkICPOFSXXValue220.clientWidth,
      height: chunkICPOFSXXValue220.clientHeight,
    };
    return (chunkICPOFSXXValue220.remove(), chunkICPOFSXXValue221);
  },
  "calculateMathMLDimensions",
);
export const _chunkICPOFSXXJ = chunkICPOFSXXValue97;
chunkAGHRB4JFT(_chunkICPOFSXXO, {
  clear: () => _chunkICPOFSXXA,
  getAccDescription: () => chunkICPOFSXXUnderscore,
  getAccTitle: () => _chunkICPOFSXXV,
  getDiagramTitle: () => _chunkICPOFSXXC,
  setAccDescription: () => chunkICPOFSXXB,
  setAccTitle: () => chunkICPOFSXXV,
  setDiagramTitle: () => _chunkICPOFSXXW,
});
var chunkICPOFSXXValue98 = "",
  chunkICPOFSXXValue99 = "",
  chunkICPOFSXXValue100 = "",
  chunkICPOFSXXValue101 = chunkAGHRB4JFN(
    (chunkICPOFSXXParam163) =>
      _chunkICPOFSXXL(chunkICPOFSXXParam163, _chunkICPOFSXXY()),
    "sanitizeText",
  ),
  _chunkICPOFSXXA = chunkAGHRB4JFN(() => {
    chunkICPOFSXXValue98 = "";
    chunkICPOFSXXValue100 = "";
    chunkICPOFSXXValue99 = "";
  }, "clear"),
  chunkICPOFSXXV = chunkAGHRB4JFN((chunkICPOFSXXParam140) => {
    chunkICPOFSXXValue98 = chunkICPOFSXXValue101(chunkICPOFSXXParam140).replace(
      /^\s+/g,
      "",
    );
  }, "setAccTitle"),
  _chunkICPOFSXXV = chunkAGHRB4JFN(() => chunkICPOFSXXValue98, "getAccTitle"),
  chunkICPOFSXXB = chunkAGHRB4JFN((chunkICPOFSXXParam109) => {
    chunkICPOFSXXValue100 = chunkICPOFSXXValue101(
      chunkICPOFSXXParam109,
    ).replace(/\n\s+/g, "\n");
  }, "setAccDescription"),
  chunkICPOFSXXUnderscore = chunkAGHRB4JFN(
    () => chunkICPOFSXXValue100,
    "getAccDescription",
  ),
  _chunkICPOFSXXW = chunkAGHRB4JFN((chunkICPOFSXXParam159) => {
    chunkICPOFSXXValue99 = chunkICPOFSXXValue101(chunkICPOFSXXParam159);
  }, "setDiagramTitle"),
  _chunkICPOFSXXC = chunkAGHRB4JFN(
    () => chunkICPOFSXXValue99,
    "getDiagramTitle",
  ),
  chunkICPOFSXXValue102 = chunkAGHRB4JFR,
  chunkICPOFSXXValue103 = chunkAGHRB4JFI,
  _chunkICPOFSXXB = _chunkICPOFSXXY,
  _chunkICPOFSXXR = chunkAGHRB4JFN(
    (chunkICPOFSXXParam164) =>
      _chunkICPOFSXXL(chunkICPOFSXXParam164, _chunkICPOFSXXB()),
    "sanitizeText",
  ),
  chunkICPOFSXXQ = _chunkICPOFSXXK,
  chunkICPOFSXXValue104 = chunkAGHRB4JFN(() => _chunkICPOFSXXO, "getCommonDb"),
  chunkICPOFSXXValue105 = {},
  chunkICPOFSXXValue106 = class extends Error {
    static {
      chunkAGHRB4JFN(this, "DiagramNotFoundError");
    }
    constructor(chunkICPOFSXXParam130) {
      super(`Diagram ${chunkICPOFSXXParam130} not found.`);
    }
  };
export const _chunkICPOFSXXX = chunkAGHRB4JFN((chunkICPOFSXXParam126) => {
  if (chunkICPOFSXXParam126 in chunkICPOFSXXValue105)
    return chunkICPOFSXXValue105[chunkICPOFSXXParam126];
  throw new chunkICPOFSXXValue106(chunkICPOFSXXParam126);
}, "getDiagram");
export const _chunkICPOFSXXU = chunkICPOFSXXL;
export const chunkICPOFSXXU = _chunkICPOFSXXH;
export const _chunkICPOFSXXQ = _chunkICPOFSXXK;
export const _chunkICPOFSXXM = chunkAGHRB4JFN(
  (chunkICPOFSXXParam61, chunkICPOFSXXParam62, chunkICPOFSXXParam63) => {
    chunkICPOFSXXValue105[chunkICPOFSXXParam61] &&
      chunkICPOFSXXValue102.warn(
        `Diagram with id ${chunkICPOFSXXParam61} already registered. Overwriting.`,
      );
    chunkICPOFSXXValue105[chunkICPOFSXXParam61] = chunkICPOFSXXParam62;
    chunkICPOFSXXParam63 &&
      chunkICPOFSXXValue40(chunkICPOFSXXParam61, chunkICPOFSXXParam63);
    on(chunkICPOFSXXParam61, chunkICPOFSXXParam62.styles);
    chunkICPOFSXXParam62.injectUtils?.(
      chunkICPOFSXXValue102,
      chunkICPOFSXXValue103,
      _chunkICPOFSXXB,
      _chunkICPOFSXXR,
      chunkICPOFSXXQ,
      chunkICPOFSXXValue104(),
      () => {},
    );
  },
  "registerDiagram",
);
export function initChunkICPOFSXXDomPurifyRuntime(): void {}
export function initChunkICPOFSXXCurrent(): void {
  initChunkICPOFSXXDomPurifyRuntime();
}
export {
  invertA,
  invertC,
  invertI,
  invertL,
  invertN,
  invertO,
  invertR,
  invertS,
  invertT,
} from "./color-convert";
export {
  chunkICPOFSXXZ as $,
  chunkICPOFSXXA,
  chunkICPOFSXXB,
  _chunkICPOFSXXC,
  _chunkICPOFSXXD,
  chunkICPOFSXXE,
  _chunkICPOFSXXH,
  chunkICPOFSXXI,
  _chunkICPOFSXXK,
  _chunkICPOFSXXL,
  _chunkICPOFSXXP,
  _chunkICPOFSXXR,
  chunkICPOFSXXV,
  _chunkICPOFSXXW,
  chunkICPOFSXXY,
  chunkICPOFSXXZ,
  chunkICPOFSXXUnderscore,
  _chunkICPOFSXXA,
  _chunkICPOFSXXB,
  chunkICPOFSXXC,
  chunkICPOFSXXD,
  chunkICPOFSXXG,
  chunkICPOFSXXH,
  chunkICPOFSXXK,
  chunkICPOFSXXL,
  chunkICPOFSXXM,
  _chunkICPOFSXXO,
  chunkICPOFSXXP,
  chunkICPOFSXXQ,
  chunkICPOFSXXR,
  chunkICPOFSXXT,
  _chunkICPOFSXXV,
  chunkICPOFSXXW,
  _chunkICPOFSXXY,
};
