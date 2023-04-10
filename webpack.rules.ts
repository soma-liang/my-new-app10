import type { ModuleOptions } from "webpack";

export const rules: Required<ModuleOptions>["rules"] = [
  // Add support for native node modules
  {
    // We're specifying native_modules in the test because the asset relocator loader generates a
    // "fake" .node file which is really a cjs file.
    test: /native_modules[/\\].+\.node$/,
    use: "node-loader",
  },
  {
    test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: "@vercel/webpack-asset-relocator-loader",
      options: {
        outputAssetBase: "native_modules",
      },
    },
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: "ts-loader",
      options: {
        transpileOnly: true,
      },
    },
  },
  // {
  //   test: /\.(png|jpe?g|gif|svg)$/,
  //   exclude: /(node_modules|\.webpack)/,
  //   use: {
  //     loader: "file-loader",
  //   },
  // },
  // {
  //   test: /\.(jpg|png|gif|jpeg|jfif)$/,
  //   type: "asset/inline",
  //   //解析
  //   parser: {
  //     // base64就是一串字符串码表示的图片，在加载页面和js时一块加载出来，减少了加载图片时的http请求。
  //     // 加载一张图片时会发起一次http请求，http请求每次建立都会需要一定的时间，
  //     // 对于加载一张小图来说，下载图片所需的时间会比建立http请求的时间要短，
  //     // 所以对小图进行base64转码是优化http请求，保证页面加速渲染，加快页面加载速度。
  //     dataUrlCondition: {
  //       maxSize: 8 * 1024, // 8kb
  //     },
  //   },
  //   generator: {
  //     filename: "img/[name].[hash:4][ext]", // 打包后会放到img文件夹下  hash缓存
  //   },
  // },
];
