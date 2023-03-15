<template>
  <div class="">
    <button @click="triggerSuccess">Trigger success</button>
    <button @click="triggerAlert">Trigger alert</button>
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
      this.$toast.alert("ALERT");
    },
  },
};
</script>
