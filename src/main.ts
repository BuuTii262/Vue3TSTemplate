import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./router";
import store from "./store";
import { setupPlugins } from "./plugins";

const app = createApp(App);
setupRouter(app);
app.use(store);
setupPlugins(app);

app.mount("#app");
