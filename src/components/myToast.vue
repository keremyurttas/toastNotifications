<template>
  <transition
    appear
    :style="{
      '--progress-color':
        state == 'alert' ? 'red' : state == 'warning' ? 'yellow' : 'green',
    }"
    :name="handleTransitionName"
  >
    <section
      v-if="showToast"
      @click="
        {
          onClick(), dissmisible ? closeToast() : undefined;
        }
      "
      :class="handlePositionClass"
      :style="{ cursor: dissmisible ? 'pointer' : 'default' }"
      class="toast"
    >
      <button v-if="dissmisible" @click="closeToast" class="delete-button">
        x
      </button>
      <div class="content">
        <img
          width="30"
          height="30"
          :src="require(`../assets/images/${state}.svg`)"
          alt=""
        />
        <span>{{ message }}</span>
      </div>
      <div :style="{ width: progress + '%' }" class="progress-bar"></div>
    </section>
  </transition>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import url("../assets/animations/animations.css");
@import url("../assets/style/style.css");
</style>
<script setup>
import { onMounted, ref, defineEmits, defineProps, computed } from "vue";
const emits = defineEmits(["delete"]);
const props = defineProps({
  message: {
    type: String,
    default: "message",
  },
  position: {
    type: String,
    default: "topLeft",
  },
  state: {
    type: String,
    default: "topLeft",
  },
  duration: {
    type: Number,
    default: 2000,
  },
  dissmisible: {
    type: Boolean,
    default: true,
  },
  onClick: {
    type: Function,
    default: () => {},
  },
});

const progress = ref(0);

const showToast = ref(true);
function closeToast() {
  emits("delete", false);
  showToast.value = false;
  progress.value = 0;
}
const handleTransitionName = computed(() => {
  return props.position == "topLeft"
    ? "fromRight"
    : props.position == "topRight"
    ? "fromLeft"
    : props.position == "bottomRight"
    ? "fromLeft"
    : props.position == "bottomLeft"
    ? "fromRight"
    : props.position == "bottomCenter"
    ? "fromBottom"
    : props.position == "topCenter"
    ? "fromTop"
    : undefined;
});
const handlePositionClass = computed(() => {
  return props.position == "topLeft"
    ? "top-left"
    : props.position == "topRight"
    ? "top-right"
    : props.position == "bottomRight"
    ? "bottom-right"
    : props.position == "bottomLeft"
    ? "bottom-left"
    : props.position == "bottomCenter"
    ? "bottom"
    : props.position == "topCenter"
    ? "top"
    : undefined;
});

onMounted(() => {
  //progress bar
  const progressInterval = setInterval(() => {
    progress.value < 100 ? (progress.value += 1) : undefined;

    progress.value === 100 ? clearInterval(progressInterval) : undefined;
  }, props.duration / 120);
  setTimeout(() => {
    //for the animation
    showToast.value = false;
  }, props.duration - 500);
});
</script>
