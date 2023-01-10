import { vantPlugins } from "./vant";
import { App } from "vue";

export const setupPlugins = (app: App) => {
  app.use(vantPlugins);
};
