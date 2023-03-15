import { createApp } from "vue";
import App from "./App.vue";
import toast from "./plugins/toast-notification";

const app = createApp(App);
app.use(toast, {
  position: "bottomRight",
  duration: 5000,
});
app.mount("#app");
