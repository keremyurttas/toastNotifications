# toast-notifications
## Package information
```
https://www.npmjs.com/package/toast-notificationss
```
## Live Demo
```
https://toast-notifications-yusikerem.vercel.app/
```
## Package setup
```
npm i toast-notificationss
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## How to use?

### How to register plugin to your project?
Register the plugin to your Vue project in main.js file.

```
import toast from "toast-notificationss";
const app = createApp(App);
app.use(toast, {
  position: "bottomCenter",
  duration: 4000,
  dissmisible:true
});
app.mount("#app");
```

### How to display toasts?
Register the plugin to your project, then you are free to toast some notifications!

#### Success
```
$toast.success("Your precious message",methodToExecuteAtClick)
```
#### Alert
```
$toast.alert("Your precious message",methodToExecuteAtClick)
```
#### Warning
```
$toast.warning("Your precious message",methodToExecuteAtClick)
```


