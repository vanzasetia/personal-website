import path from "node:path";
import { Buffer } from "node:buffer";
import { transform } from "lightningcss";

export const CSSConfig = (config) => {
  config.addTemplateFormats("css");
  config.addExtension("css", {
    outputFileExtension: "css",
    compileOptions: {
      permalink: function (contents, inputPath) {
        return "./style.css";
      }
    },
    compile: async function (_inputContent, inputPath) {
      let parsed = path.parse(inputPath);
      if (parsed.name.startsWith("_")) {
        return;
      }
      return async () => {
        let { code } = transform({
          filename: "style.css",
          code: Buffer.from(_inputContent),
          minify: true
        });
        return code;
      };
    }
  });
};
