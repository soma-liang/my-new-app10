import type IForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import {
  ASSETS_DIRECTORY_LIST,
  BUILD_ASSETS_FOLDER,
} from "./webpack.constants";
import { resolve } from "path";
import DotenvWebpackPlugin from "dotenv-webpack";
// eslint-disable-next-line import/default
import CopyWebpackPlugin from "copy-webpack-plugin";
const getPath = (dir: string) => resolve(__dirname, dir);

import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

export const plugins = [
  new ForkTsCheckerWebpackPlugin({
    logger: "webpack-infrastructure",
  }),
  new DotenvWebpackPlugin(),
  new CopyWebpackPlugin({
    patterns: ASSETS_DIRECTORY_LIST.map((folder) => {
      return {
        from: getPath(`src/${folder}`),
        to: getPath(`${BUILD_ASSETS_FOLDER}/${folder}`),
      };
    }),
  }),
];
