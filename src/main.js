import { createApp } from "vue";
import App from "./App.vue";
import toast from "./plugins/toast-notification";

const app = createApp(App);
app.use(toast, {
  position: "topLeft",
  state: "success",
  message: "Message Succesfully Sent!",
});
app.mount("#app");
