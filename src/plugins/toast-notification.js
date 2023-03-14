import myToast from "../components/myToast.vue";
export default {
  install: (app, options) => {
    app.config.globalProperties.$toast = (injections) => {
      const Toast = app.extend(myToast);
      const toast = new Toast({
        props: {
          injections: injections,
        },
      });
      toast.$mount();
      document.body.appendChild(toast.$el);
      setTimeout(() => {
        toast.$destroy();
      }, 2000);
    };
    app.component("my-toast", myToast);
    app.provide("injections", options);
  },
};
