import type { ConfigEnv, UserConfig } from "vite";
import { loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import { createHtmlPlugin } from "vite-plugin-html";

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
    plugins: [
      vue(),
      vueJsx({}),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: env.VITE_APP_NAME,
            // icon: env.VITE_FAV_ICON,
          },
        },
      }),
    ],

    optimizeDeps: {
      include: ["vant", "@vant/touch-emulator"],
    },

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
