import type { Configuration } from "webpack";

import { rules } from "./webpack.rules";
import { plugins } from "./webpack.plugins";
// import relocateLoader from "@vercel/webpack-asset-relocator-loader";

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

// 热加载
// plugins.push({
//   apply(compiler) {
//     compiler.hooks.compilation.tap(
//       "webpack-asset-relocator-loader",
//       (compilation) => {
//         relocateLoader.initAssetCache(compilation, outputAssetBase);
//       }
//     );
//   },
// });

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
  },
};
