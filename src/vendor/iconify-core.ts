// Restored from ref/webview/assets/esm-CuAuNray.js
// Flat boundary. Vendored Iconify core runtime restored from the Codex webview bundle.

export type IconifyIconName = {
  provider: string;
  prefix: string;
  name: string;
};

export type IconifyTransformations = {
  rotate?: number;
  vFlip?: boolean;
  hFlip?: boolean;
};

export type IconifyIconData = IconifyTransformations & {
  left?: number;
  top?: number;
  width?: number;
  height?: number;
  body?: string;
  hidden?: boolean;
};

export type IconifyAliasData = IconifyIconData & {
  parent: string;
};

export type IconifyIconSet = IconifyIconData & {
  icons: Record<string, IconifyIconData>;
  aliases?: Record<string, IconifyAliasData>;
};

export type IconifyCustomisations = IconifyTransformations & {
  width?: number | string | null;
  height?: number | string | null;
};

export type IconifySvgBuildResult = {
  attributes: Record<string, string>;
  viewBox: number[];
  body: string;
};

const DEFAULT_ICON_DIMENSIONS = Object.freeze({
  left: 0,
  top: 0,
  width: 16,
  height: 16,
});

const DEFAULT_ICON_TRANSFORMS = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false,
});

const DEFAULT_ICON_PROPS = Object.freeze({
  ...DEFAULT_ICON_DIMENSIONS,
  ...DEFAULT_ICON_TRANSFORMS,
});

const DEFAULT_RESOLVED_ICON_PROPS = Object.freeze({
  ...DEFAULT_ICON_PROPS,
  body: "",
  hidden: false,
});

const DEFAULT_SIZE_CUSTOMISATIONS = Object.freeze({
  width: null,
  height: null,
});

const DEFAULT_ICON_CUSTOMISATIONS = Object.freeze({
  ...DEFAULT_SIZE_CUSTOMISATIONS,
  ...DEFAULT_ICON_TRANSFORMS,
});

const NUMBER_SPLIT_PATTERN = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const NUMBER_VALUE_PATTERN = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
const SVG_ID_PATTERN = /\sid="(\S+)"/g;
const DEFAULT_ID_PREFIX =
  "IconifyId" +
  Date.now().toString(16) +
  ((Math.random() * 16777216) | 0).toString(16);

let iconIdCounter = 0;

export function initIconifyCoreRuntimeChunk(): void {}

export function initIconifyCoreChunk(): void {
  initIconifyCoreRuntimeChunk();
}

function isValidIconName(
  iconName: IconifyIconName | null,
  allowSimpleName = false,
): iconName is IconifyIconName {
  return iconName
    ? Boolean(
        ((allowSimpleName && iconName.prefix === "") || iconName.prefix) &&
          iconName.name,
      )
    : false;
}

export function parseIconName(
  value: string,
  validate: boolean = true,
  allowSimpleName: boolean = false,
  provider: string = "",
): IconifyIconName | null {
  const colonParts = value.split(":");

  if (value.slice(0, 1) === "@") {
    if (colonParts.length < 2 || colonParts.length > 3) return null;
    provider = colonParts.shift()!.slice(1);
  }

  if (colonParts.length > 3 || !colonParts.length) return null;

  if (colonParts.length > 1) {
    const name = colonParts.pop()!;
    const prefix = colonParts.pop()!;
    const parsedName = {
      provider: colonParts.length > 0 ? colonParts[0] : provider,
      prefix,
      name,
    };
    return validate && !isValidIconName(parsedName) ? null : parsedName;
  }

  const simpleName = colonParts[0];
  const dashParts = simpleName.split("-");

  if (dashParts.length > 1) {
    const parsedName = {
      provider,
      prefix: dashParts.shift()!,
      name: dashParts.join("-"),
    };
    return validate && !isValidIconName(parsedName) ? null : parsedName;
  }

  if (allowSimpleName && provider === "") {
    const parsedName = {
      provider,
      prefix: "",
      name: simpleName,
    };
    return validate && !isValidIconName(parsedName, allowSimpleName)
      ? null
      : parsedName;
  }

  return null;
}

function mergeIconTransformations(
  parent: IconifyTransformations,
  child: IconifyTransformations,
): IconifyTransformations {
  const transformations: IconifyTransformations = {};

  if (Boolean(parent.hFlip) !== Boolean(child.hFlip)) {
    transformations.hFlip = true;
  }
  if (Boolean(parent.vFlip) !== Boolean(child.vFlip)) {
    transformations.vFlip = true;
  }

  const rotate = ((parent.rotate || 0) + (child.rotate || 0)) % 4;
  if (rotate) transformations.rotate = rotate;

  return transformations;
}

function mergeIconProps(
  parent: IconifyIconData,
  child: IconifyIconData,
): IconifyIconData {
  const merged: IconifyIconData = mergeIconTransformations(parent, child);

  for (const propertyName of Object.keys(DEFAULT_RESOLVED_ICON_PROPS) as Array<
    keyof IconifyIconData
  >) {
    if (propertyName in DEFAULT_ICON_TRANSFORMS) {
      if (propertyName in parent && !(propertyName in merged)) {
        merged[propertyName] = DEFAULT_ICON_TRANSFORMS[
          propertyName as keyof typeof DEFAULT_ICON_TRANSFORMS
        ] as never;
      }
    } else if (propertyName in child) {
      merged[propertyName] = child[propertyName] as never;
    } else if (propertyName in parent) {
      merged[propertyName] = parent[propertyName] as never;
    }
  }

  return merged;
}

function collectAliasParents(
  iconSet: IconifyIconSet,
  requestedNames?: string[],
): Record<string, string[] | null> {
  const icons = iconSet.icons;
  const aliases = iconSet.aliases || Object.create(null);
  const parentsByName: Record<string, string[] | null> = Object.create(null);

  function visitAliasParent(iconName: string): string[] | null {
    if (icons[iconName]) {
      parentsByName[iconName] = [];
      return parentsByName[iconName];
    }

    if (!(iconName in parentsByName)) {
      parentsByName[iconName] = null;
      const parentName = aliases[iconName]?.parent;
      const parentChain = parentName && visitAliasParent(parentName);
      if (parentChain) {
        parentsByName[iconName] = [parentName].concat(parentChain);
      }
    }

    return parentsByName[iconName];
  }

  (requestedNames || Object.keys(icons).concat(Object.keys(aliases))).forEach(
    visitAliasParent,
  );

  return parentsByName;
}

function resolveIconWithAliases(
  iconSet: IconifyIconSet,
  iconName: string,
  parentNames: string[],
): IconifyIconData {
  const icons = iconSet.icons;
  const aliases = iconSet.aliases || Object.create(null);
  let mergedIcon: IconifyIconData = {};

  function mergeNamedIcon(name: string): void {
    mergedIcon = mergeIconProps(icons[name] || aliases[name], mergedIcon);
  }

  mergeNamedIcon(iconName);
  parentNames.forEach(mergeNamedIcon);

  return mergeIconProps(iconSet, mergedIcon);
}

export function resolveIconData(
  iconSet: IconifyIconSet,
  iconName: string,
): IconifyIconData | null {
  if (iconSet.icons[iconName]) {
    return resolveIconWithAliases(iconSet, iconName, []);
  }

  const parentNames = collectAliasParents(iconSet, [iconName])[iconName];
  return parentNames
    ? resolveIconWithAliases(iconSet, iconName, parentNames)
    : null;
}

function scaleIconDimension(
  dimension: number | string,
  scale: number,
  precision = 100,
): number | string {
  if (scale === 1) return dimension;

  if (typeof dimension === "number") {
    return Math.ceil(dimension * scale * precision) / precision;
  }
  if (typeof dimension !== "string") return dimension;

  const parts = dimension.split(NUMBER_SPLIT_PATTERN);
  if (!parts.length) return dimension;

  const scaledParts: Array<number | string> = [];
  let currentPart = parts.shift();
  let isNumberPart = NUMBER_VALUE_PATTERN.test(currentPart || "");

  for (;;) {
    if (isNumberPart) {
      const numericValue = Number.parseFloat(currentPart || "");
      scaledParts.push(
        Number.isNaN(numericValue)
          ? (currentPart ?? "")
          : Math.ceil(numericValue * scale * precision) / precision,
      );
    } else {
      scaledParts.push(currentPart ?? "");
    }

    currentPart = parts.shift();
    if (currentPart === undefined) return scaledParts.join("");
    isNumberPart = !isNumberPart;
  }
}

function extractSvgDefs(
  body: string,
  tagName = "defs",
): {
  defs: string;
  content: string;
} {
  let defs = "";
  let openingIndex = body.indexOf("<" + tagName);

  while (openingIndex >= 0) {
    const openingEnd = body.indexOf(">", openingIndex);
    const closingStart = body.indexOf("</" + tagName);
    if (openingEnd === -1 || closingStart === -1) break;

    const closingEnd = body.indexOf(">", closingStart);
    if (closingEnd === -1) break;

    defs += body.slice(openingEnd + 1, closingStart).trim();
    body = body.slice(0, openingIndex).trim() + body.slice(closingEnd + 1);
    openingIndex = body.indexOf("<" + tagName);
  }

  return {
    defs,
    content: body,
  };
}

function prependSvgDefs(defs: string, content: string): string {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}

function wrapSvgBodyWithTransform(
  body: string,
  openingTag: string,
  closingTag: string,
): string {
  const extracted = extractSvgDefs(body);
  return prependSvgDefs(
    extracted.defs,
    openingTag + extracted.content + closingTag,
  );
}

function isUnsetDimension(value: unknown): boolean {
  return value === "unset" || value === "undefined" || value === "none";
}

export function iconToSvg(
  iconData: IconifyIconData,
  customisations: IconifyCustomisations,
): IconifySvgBuildResult {
  const resolvedIcon = {
    ...DEFAULT_ICON_PROPS,
    ...iconData,
  };
  const resolvedCustomisations = {
    ...DEFAULT_ICON_CUSTOMISATIONS,
    ...customisations,
  };
  const viewBoxBounds = {
    left: resolvedIcon.left,
    top: resolvedIcon.top,
    width: resolvedIcon.width,
    height: resolvedIcon.height,
  };

  let body = resolvedIcon.body || "";

  [resolvedIcon, resolvedCustomisations].forEach((item) => {
    const transformations: string[] = [];
    let hFlip = item.hFlip;
    const vFlip = item.vFlip;
    let rotate = item.rotate || 0;

    if (hFlip) {
      if (vFlip) {
        rotate += 2;
      } else {
        transformations.push(
          "translate(" +
            (viewBoxBounds.width + viewBoxBounds.left).toString() +
            " " +
            (0 - viewBoxBounds.top).toString() +
            ")",
        );
        transformations.push("scale(-1 1)");
        viewBoxBounds.top = 0;
        viewBoxBounds.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" +
          (0 - viewBoxBounds.left).toString() +
          " " +
          (viewBoxBounds.height + viewBoxBounds.top).toString() +
          ")",
      );
      transformations.push("scale(1 -1)");
      viewBoxBounds.top = 0;
      viewBoxBounds.left = 0;
    }

    if (rotate < 0) rotate -= Math.floor(rotate / 4) * 4;
    rotate %= 4;

    let rotationCenter: number;
    switch (rotate) {
      case 1:
        rotationCenter = viewBoxBounds.height / 2 + viewBoxBounds.top;
        transformations.unshift(
          "rotate(90 " +
            rotationCenter.toString() +
            " " +
            rotationCenter.toString() +
            ")",
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " +
            (viewBoxBounds.width / 2 + viewBoxBounds.left).toString() +
            " " +
            (viewBoxBounds.height / 2 + viewBoxBounds.top).toString() +
            ")",
        );
        break;
      case 3:
        rotationCenter = viewBoxBounds.width / 2 + viewBoxBounds.left;
        transformations.unshift(
          "rotate(-90 " +
            rotationCenter.toString() +
            " " +
            rotationCenter.toString() +
            ")",
        );
        break;
    }

    if (rotate % 2 === 1) {
      if (viewBoxBounds.left !== viewBoxBounds.top) {
        const left = viewBoxBounds.left;
        viewBoxBounds.left = viewBoxBounds.top;
        viewBoxBounds.top = left;
      }
      if (viewBoxBounds.width !== viewBoxBounds.height) {
        const width = viewBoxBounds.width;
        viewBoxBounds.width = viewBoxBounds.height;
        viewBoxBounds.height = width;
      }
    }

    if (transformations.length) {
      body = wrapSvgBodyWithTransform(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>",
      );
    }
  });

  const customWidth = resolvedCustomisations.width;
  const customHeight = resolvedCustomisations.height;
  const boxWidth = viewBoxBounds.width;
  const boxHeight = viewBoxBounds.height;
  let width: number | string;
  let height: number | string;

  if (customWidth === null) {
    height =
      customHeight === null
        ? "1em"
        : customHeight === "auto"
          ? boxHeight
          : customHeight;
    width = scaleIconDimension(height, boxWidth / boxHeight);
  } else {
    width = customWidth === "auto" ? boxWidth : customWidth;
    height =
      customHeight === null
        ? scaleIconDimension(width, boxHeight / boxWidth)
        : customHeight === "auto"
          ? boxHeight
          : customHeight;
  }

  const attributes: Record<string, string> = {};
  const addAttribute = (name: string, value: number | string): void => {
    if (!isUnsetDimension(value)) attributes[name] = value.toString();
  };

  addAttribute("width", width);
  addAttribute("height", height);

  const viewBox = [viewBoxBounds.left, viewBoxBounds.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");

  return {
    attributes,
    viewBox,
    body,
  };
}

export function replaceIconIds(
  body: string,
  prefix: string | ((id: string) => string) = DEFAULT_ID_PREFIX,
): string {
  SVG_ID_PATTERN.lastIndex = 0;

  const ids: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = SVG_ID_PATTERN.exec(body))) {
    ids.push(match[1]);
  }
  if (!ids.length) return body;

  const temporarySuffix =
    "suffix" + ((Math.random() * 16777216) | Date.now()).toString(16);

  ids.forEach((id) => {
    const replacement =
      typeof prefix === "function"
        ? prefix(id)
        : prefix + (iconIdCounter++).toString();
    const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    body = body.replace(
      RegExp('([#;"])(' + escapedId + ')([")]|\\.[a-z])', "g"),
      "$1" + replacement + temporarySuffix + "$3",
    );
  });

  return body.replace(new RegExp(temporarySuffix, "g"), "");
}

export function wrapSvgContent(
  body: string,
  attributes: Record<string, string>,
): string {
  let attributeText =
    body.indexOf("xlink:") === -1
      ? ""
      : ' xmlns:xlink="http://www.w3.org/1999/xlink"';

  for (const name in attributes) {
    attributeText += " " + name + '="' + attributes[name] + '"';
  }

  return (
    '<svg xmlns="http://www.w3.org/2000/svg"' +
    attributeText +
    ">" +
    body +
    "</svg>"
  );
}

export function dedentTemplate(
  strings: TemplateStringsArray | string | string[],
  ...values: unknown[]
): string {
  const segments = Array.from(
    typeof strings === "string" ? [strings] : strings,
  );
  segments[segments.length - 1] = segments[segments.length - 1].replace(
    /\r?\n([\t ]*)$/,
    "",
  );

  const indentationLevels = segments.reduce<number[]>((levels, segment) => {
    const matches = segment.match(/\n([\t ]+|(?!\s).)/g);
    return matches
      ? levels.concat(
          matches.map((match) => match.match(/[\t ]/g)?.length ?? 0),
        )
      : levels;
  }, []);

  if (indentationLevels.length) {
    const trimPattern = RegExp(
      "\n[\t ]{" + Math.min.apply(Math, indentationLevels) + "}",
      "g",
    );
    segments.forEach((segment, index) => {
      segments[index] = segment.replace(trimPattern, "\n");
    });
  }

  segments[0] = segments[0].replace(/^\r?\n/, "");

  let result = segments[0];
  values.forEach((value, index) => {
    const currentLineMatch = result.match(/(?:^|\n)( *)$/);
    const currentIndent = currentLineMatch ? currentLineMatch[1] : "";
    let resolvedValue = value;

    if (typeof value === "string" && value.includes("\n")) {
      resolvedValue = String(value)
        .split("\n")
        .map((line, lineIndex) =>
          lineIndex === 0 ? line : "" + currentIndent + line,
        )
        .join("\n");
    }

    result += resolvedValue + segments[index + 1];
  });

  return result;
}
