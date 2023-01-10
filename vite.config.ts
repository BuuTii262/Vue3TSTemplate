import type { ConfigEnv, UserConfig } from "vite";
import { loadEnv } from "vite";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

export default ({ command, mode, ssrBuild }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: "./",
    esbuild: {},
    resolve: {
      alias: {
        "/@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [vue(), vueJsx({})],

    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true,
        },
        scss: {
          additionalData: `@import "src/styles/modules/_utils.scss";
                       @import "src/styles/modules/_border.scss";
                     `,
        },
      },
    },
    server: {
      host: "0.0.0.0",
      port: 4000,
      open: true,
    },
  };
};
