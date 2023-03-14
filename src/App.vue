<template>
  <div class="">
    <my-toast :show="showToast"></my-toast>
  </div>
</template>
<script>
export default {
  data() {
    return { showToast: false };
  },
  methods: {},
  mounted() {
    this.$toast();
  },
};
</script>
