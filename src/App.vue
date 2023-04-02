<template>
  <div class="">
    <button @click="triggerSuccess">Trigger success</button>
    <button @click="triggerAlert">Trigger alert</button>

    <button @click="triggerWarning">Trigger warning</button>
  </div>
</template>
<script>
export default {
  data() {
    return { showToast: false };
  },
  methods: {
    triggerSuccess() {
      this.$toast.success("SUCCESS", this.toastClick);
    },
    toastClick() {
      alert("toast click event");
    },
    triggerAlert() {
      this.$toast.alert("ALERT");
    },
    triggerWarning() {
      this.$toast.warning("WARNING");
    },
  },
};
</script>
<style scoped>
button {
  background-color: gainsboro;
  padding: 1rem;
  margin: 2rem;
}
</style>
