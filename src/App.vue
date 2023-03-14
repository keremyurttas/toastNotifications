<template>
  <div class="">
    <my-toast></my-toast>
  </div>
</template>
<script>
export default {
  data() {
    return { showToast: false };
  },
  methods: {},
  mounted() {
    this.$test();
  },
};
</script>
