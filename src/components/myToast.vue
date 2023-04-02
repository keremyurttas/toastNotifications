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
          toastClick(), dissmisible ? closeToast() : undefined;
        }
      "
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
import { positions } from "../constants/positions";
import { states } from "../constants/states";
const emits = defineEmits(["delete"]);
const props = defineProps({
  message: {
    type: String,
    default: "message",
    validator(value) {
      return typeof value == "string";
    },
  },
  position: {
    type: String,
    default: "topLeft",
    validator(value) {
      return positions.includes(value);
    },
  },
  state: {
    type: String,
    default: "success",
    validator(value) {
      return states.includes(value);
    },
  },
  duration: {
    type: Number,
    default: 2000,
    validator(value) {
      return typeof value === "number";
    },
  },
  dissmisible: {
    type: Boolean,
    default: true,
    validator(value) {
      return typeof value === "boolean";
    },
  },
  toastClick: {
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
  return props.position.includes("Right")
    ? "rightTransition"
    : props.position.includes("Left")
    ? "leftTransition"
    : //for topCenter and bottomCenter
      props.position + "Transition";
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
