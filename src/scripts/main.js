globalThis.__VUE_OPTIONS_API__ = process.env.NODE_ENV === "development"
globalThis.__VUE_PROD_DEVTOOLS__ = process.env.NODE_ENV === "development"

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");
