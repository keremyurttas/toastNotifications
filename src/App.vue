<template>
  <div class="">
    <button @click="triggerSuccess">Trigger success</button>
    <button @click="triggerAlert">Trigger alert</button>
    <button @click="triggerWarning">Trigger warning</button>
    <div id="container"></div>
  </div>
</template>
<script>
export default {
  data() {
    return { showToast: false };
  },
  methods: {
    triggerSuccess() {
      this.$toast.success("SUCCESS");
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
