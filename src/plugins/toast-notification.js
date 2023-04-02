import { createApp } from "vue";
import myToast from "../components/myToast.vue";
let containerId = 1;
export default {
  install: (app, options) => {
    app.component("my-toast", myToast);
    app.provide("injections", options);

    const instance = {
      success(message, toastClick) {
        handleContainer(options.position);
        createToast("success", options, message, toastClick);
        return containerId;
      },
      alert(message, toastClick) {
        handleContainer(options.position);
        createToast("alert", options, message, toastClick);
        return containerId;
      },
      warning(message, toastClick) {
        handleContainer(options.position);
        createToast("warning", options, message, toastClick);
        return containerId;
      },
    };
    app.config.globalProperties.$toast = instance;
  },
};

function createToast(state, options, message, toastClick) {
  const container = document.createElement("div");
  container.id = `toast-container-${containerId++}`;
  document.getElementById("toastContainer").appendChild(container);

  const myElement = createApp(myToast, {
    state: state,
    message: message,
    position: options.position,
    duration: options.duration,
    dissmisible: options.dissmisible,
    toastClick: toastClick,
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
