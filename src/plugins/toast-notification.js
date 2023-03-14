import myToast from "../components/myToast.vue";
export default {
  install: (app, options) => {
    app.component("my-toast", myToast);
    app.provide("injections", options);
  },
};
