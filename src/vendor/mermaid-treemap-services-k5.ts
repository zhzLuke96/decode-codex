// Restored from ref/webview/assets/chunk-LIHQZDEY-CbTzOPPd.js
// Mermaid treemap diagram service module restored from the Codex webview bundle.
import {
  chunkK5T4RW27F,
  chunkK5T4RW27G,
  chunkK5T4RW27H,
  chunkK5T4RW27M,
  chunkK5T4RW27N,
  chunkK5T4RW27S,
  chunkK5T4RW27T,
  chunkK5T4RW27Underscore,
  chunkK5T4RW27V,
} from "./mermaid-parser-runtime-k5";
var TreemapTokenBuilder = class extends chunkK5T4RW27T {
    static {
      chunkK5T4RW27M(this, "TreemapTokenBuilder");
    }
    constructor() {
      super(["treemap"]);
    }
  },
  classDefStatementPattern = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/,
  TreemapValueConverter = class extends chunkK5T4RW27N {
    static {
      chunkK5T4RW27M(this, "TreemapValueConverter");
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
chunkK5T4RW27M(registerValidationChecks, "registerValidationChecks");
var TreemapValidator = class {
    static {
      chunkK5T4RW27M(this, "TreemapValidator");
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
      TokenBuilder: chunkK5T4RW27M(
        () => new TreemapTokenBuilder(),
        "TokenBuilder",
      ),
      ValueConverter: chunkK5T4RW27M(
        () => new TreemapValueConverter(),
        "ValueConverter",
      ),
    },
    validation: {
      TreemapValidator: chunkK5T4RW27M(
        () => new TreemapValidator(),
        "TreemapValidator",
      ),
    },
  };
function createTreemapServices(parserConfig = chunkK5T4RW27H) {
  let sharedServices = chunkK5T4RW27G(
      chunkK5T4RW27V(parserConfig),
      chunkK5T4RW27S,
    ),
    treemapServices = chunkK5T4RW27G(
      chunkK5T4RW27Underscore({
        shared: sharedServices,
      }),
      chunkK5T4RW27F,
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
function initChunkLIHQZDEY(): void {
  // Restored ESM modules initialize eagerly; keep the current chunk init export compatible.
}
chunkK5T4RW27M(createTreemapServices, "createTreemapServices");
export {
  createTreemapServices,
  createTreemapServices as chunkLIHQZDEYN,
  initChunkLIHQZDEY,
  treemapServiceModule,
  treemapServiceModule as chunkLIHQZDEYT,
};
