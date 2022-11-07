import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./router";
import store from "./store";
const app = createApp(App);
setupRouter(app);
app.use(store);
app.mount("#app");
