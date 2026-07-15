// Restored from ref/webview/assets/chunk-FWNWRKHM-BHhZ1scK.js
// Mermaid treemap diagram service module restored from the Codex webview bundle.
import {
  chunkFPAJGGOCD,
  chunkFPAJGGOCF,
  chunkFPAJGGOCG,
  chunkFPAJGGOCH,
  chunkFPAJGGOCM,
  chunkFPAJGGOCN,
  chunkFPAJGGOCP,
  chunkFPAJGGOCS,
  chunkFPAJGGOCT,
} from "./mermaid-parser-runtime-fpajggoc";
var TreemapTokenBuilder = class extends chunkFPAJGGOCT {
    static {
      chunkFPAJGGOCF(this, "TreemapTokenBuilder");
    }
    constructor() {
      super(["treemap"]);
    }
  },
  classDefStatementPattern = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/,
  TreemapValueConverter = class extends chunkFPAJGGOCN {
    static {
      chunkFPAJGGOCF(this, "TreemapValueConverter");
    }
    runCustomConverter(token, text, context) {
      if (token.name === "NUMBER2") return parseFloat(text.replace(/,/g, ""));
      if (token.name === "SEPARATOR" || token.name === "STRING2")
        return text.substring(1, text.length - 1);
      if (token.name === "INDENTATION") return text.length;
      if (token.name === "ClassDef") {
        if (typeof text != "string") return text;
        let classDefMatch = classDefStatementPattern.exec(text);
        if (classDefMatch)
          return {
            $type: "ClassDefStatement",
            className: classDefMatch[1],
            styleText: classDefMatch[2] || undefined,
          };
      }
    }
  };
function registerValidationChecks(treemapServices) {
  let treemapValidator = treemapServices.validation.TreemapValidator,
    validationRegistry = treemapServices.validation.ValidationRegistry;
  if (validationRegistry) {
    let validationChecks = {
      Treemap: treemapValidator.checkSingleRoot.bind(treemapValidator),
    };
    validationRegistry.register(validationChecks, treemapValidator);
  }
}
chunkFPAJGGOCF(registerValidationChecks, "registerValidationChecks");
var TreemapValidator = class {
    static {
      chunkFPAJGGOCF(this, "TreemapValidator");
    }
    checkSingleRoot(treemapDocument, accept) {
      let rootIndent;
      for (let row of treemapDocument.TreemapRows)
        row.item &&
          (rootIndent === undefined && row.indent === undefined
            ? (rootIndent = 0)
            : (row.indent === undefined ||
                (rootIndent !== undefined &&
                  rootIndent >= parseInt(row.indent, 10))) &&
              accept(
                "error",
                "Multiple root nodes are not allowed in a treemap.",
                {
                  node: row,
                  property: "item",
                },
              ));
    }
  },
  treemapServiceModule = {
    parser: {
      TokenBuilder: chunkFPAJGGOCF(
        () => new TreemapTokenBuilder(),
        "TokenBuilder",
      ),
      ValueConverter: chunkFPAJGGOCF(
        () => new TreemapValueConverter(),
        "ValueConverter",
      ),
    },
    validation: {
      TreemapValidator: chunkFPAJGGOCF(
        () => new TreemapValidator(),
        "TreemapValidator",
      ),
    },
  };
function createTreemapServices(parserConfig = chunkFPAJGGOCP) {
  let sharedServices = chunkFPAJGGOCM(
      chunkFPAJGGOCG(parserConfig),
      chunkFPAJGGOCS,
    ),
    treemapServices = chunkFPAJGGOCM(
      chunkFPAJGGOCH({
        shared: sharedServices,
      }),
      chunkFPAJGGOCD,
      treemapServiceModule,
    );
  return (
    sharedServices.ServiceRegistry.register(treemapServices),
    registerValidationChecks(treemapServices),
    {
      shared: sharedServices,
      Treemap: treemapServices,
    }
  );
}
function initChunkFWNWRKHM(): void {
  // Restored ESM modules initialize eagerly; keep the current chunk init export compatible.
}
chunkFPAJGGOCF(createTreemapServices, "createTreemapServices");
export {
  createTreemapServices,
  createTreemapServices as chunkFWNWRKHMN,
  initChunkFWNWRKHM,
  treemapServiceModule,
  treemapServiceModule as chunkFWNWRKHMT,
};
