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
      this.$toast.success("SUCCESS", this.test);
    },
    test() {
      console.log("sss");
    },
    triggerAlert() {
      this.$toast.alert("ALERTALERTALERTALERT");
    },
    triggerWarning() {
      this.$toast.warning("Warning");
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
