// Restored from ref/webview/assets/chunk-7N4EOEYR-CfJFZH_K.js
// Mermaid architecture diagram service module restored from the Codex webview bundle.
import {
  chunkK5T4RW27G,
  chunkK5T4RW27H,
  chunkK5T4RW27M,
  chunkK5T4RW27N,
  chunkK5T4RW27R,
  chunkK5T4RW27S,
  chunkK5T4RW27T,
  chunkK5T4RW27Underscore,
  chunkK5T4RW27V,
} from "./mermaid-parser-runtime-k5";
var ArchitectureTokenBuilder = class extends chunkK5T4RW27T {
    static {
      chunkK5T4RW27M(this, "ArchitectureTokenBuilder");
    }
    constructor() {
      super(["architecture"]);
    }
  },
  ArchitectureValueConverter = class extends chunkK5T4RW27N {
    static {
      chunkK5T4RW27M(this, "ArchitectureValueConverter");
    }
    runCustomConverter(token, text, context) {
      if (token.name === "ARCH_ICON") return text.replace(/[()]/g, "").trim();
      if (token.name === "ARCH_TEXT_ICON") return text.replace(/["()]/g, "");
      if (token.name === "ARCH_TITLE") {
        let titleText = text.replace(/^\[|]$/g, "").trim();
        return (
          ((titleText.startsWith('"') && titleText.endsWith('"')) ||
            (titleText.startsWith("'") && titleText.endsWith("'"))) &&
            ((titleText = titleText.slice(1, -1)),
            (titleText = titleText.replace(/\\"/g, '"').replace(/\\'/g, "'"))),
          titleText.trim()
        );
      }
    }
  },
  architectureServiceModule = {
    parser: {
      TokenBuilder: chunkK5T4RW27M(
        () => new ArchitectureTokenBuilder(),
        "TokenBuilder",
      ),
      ValueConverter: chunkK5T4RW27M(
        () => new ArchitectureValueConverter(),
        "ValueConverter",
      ),
    },
  };
function createArchitectureServices(parserConfig = chunkK5T4RW27H) {
  let sharedServices = chunkK5T4RW27G(
      chunkK5T4RW27V(parserConfig),
      chunkK5T4RW27S,
    ),
    architectureServices = chunkK5T4RW27G(
      chunkK5T4RW27Underscore({
        shared: sharedServices,
      }),
      chunkK5T4RW27R,
      architectureServiceModule,
    );
  return (
    sharedServices.ServiceRegistry.register(architectureServices),
    {
      shared: sharedServices,
      Architecture: architectureServices,
    }
  );
}
function initChunk7N4EOEYR(): void {
  // Restored ESM modules initialize eagerly; keep the current chunk init export compatible.
}
chunkK5T4RW27M(createArchitectureServices, "createArchitectureServices");
export {
  createArchitectureServices,
  createArchitectureServices as chunk7N4EOEYRN,
  initChunk7N4EOEYR,
  architectureServiceModule,
  architectureServiceModule as chunk7N4EOEYRT,
};
