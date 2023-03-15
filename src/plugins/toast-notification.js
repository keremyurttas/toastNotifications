import { createApp } from "vue";
import myToast from "../components/myToast.vue";

export default {
  install: (app, options) => {
    app.component("my-toast", myToast);
    app.provide("injections", options);

    const instance = {
      success(message) {
        handleContainer(options.position);
        createToast(options, message, "success");
      },
      alert(message) {
        handleContainer(options.position);
        createToast(options, message, "alert");
      },
    };
    app.config.globalProperties.$toast = instance;
  },
};
let containerId = 1;
function createToast(options, message, state) {
  const container = document.createElement("div");
  container.id = `toast-container-${containerId++}`;
  document.getElementById("toastContainer").appendChild(container);

  const myElement = createApp(myToast, {
    message: message,
    position: options.position,
    duration: options.duration,
    state: state,
  });

  myElement.mount(`#${container.id}`);

  setTimeout(() => {
    document.getElementById("toastContainer").removeChild(container);
    myElement.unmount();
  }, options.duration);
}
function handleContainer(position) {
  if (!document.getElementById("toastContainer")) {
    const container = document.createElement("div");
    container.id = "toastContainer";
    container.classList.add(position);
    console.log(position);

    document.body.appendChild(container);
  }
}
