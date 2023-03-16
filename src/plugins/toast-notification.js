import { createApp } from "vue";
import myToast from "../components/myToast.vue";

export default {
  install: (app, options) => {
    app.component("my-toast", myToast);
    app.provide("injections", options);

    const instance = {
      success(message, onClick) {
        handleContainer(options.position);
        createToast("success", options, message, onClick);
      },
      alert(message, onClick) {
        handleContainer(options.position);
        createToast("alert", options, message, onClick);
      },
      warning(message, onClick) {
        handleContainer(options.position);
        createToast("warning", options, message, onClick);
      },
    };
    app.config.globalProperties.$toast = instance;
  },
};
let containerId = 1;
function createToast(state, options, message, onClick) {
  const container = document.createElement("div");
  container.id = `toast-container-${containerId++}`;
  document.getElementById("toastContainer").appendChild(container);

  const myElement = createApp(myToast, {
    state: state,
    message: message,
    position: options.position,
    duration: options.duration,
    dissmisible: options.dissmisible,
    onClick: onClick,
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
    document.body.appendChild(container);
  } else {
    document.getElementById("toastContainer").classList.add(position);
  }
}
