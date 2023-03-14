<template>
  <button @click="showToast = !showToast">toggle</button>

  <br />
  <span>{{ injections }}</span>
  <transition
    :style="{ '--progress-color': state == 'alert' ? 'red' : 'green' }"
    :name="handleTransitionName"
  >
    <section
      v-if="showToast"
      @click="closeToast"
      :class="handlePositionClass"
      class="container"
    >
      <button @click="closeToast" class="delete-button">x</button>
      <div class="content">
        <img
          width="30"
          height="30"
          :src="require(`../assets/${state}.svg`)"
          alt=""
        />
        <span>Lorem ipsum dolor sit amet {{ animation }}.</span>
      </div>
      <div :style="{ width: progress + '%' }" class="progress-bar"></div>
    </section>
  </transition>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import url("../assets/animations/animations.css");
@import url("../assets/style/style.css");
</style>
<script setup>
import {
  onMounted,
  ref,
  defineEmits,
  defineProps,
  inject,
  computed,
} from "vue";
const emits = defineEmits(["delete"]);
const props = defineProps(["animation"]);
const injections = inject("injections");

const progress = ref(0);
const position = injections.position ?? props.position;
const state = injections.state ?? props.state;
const showToast = ref(true);
function closeToast() {
  emits("delete", false);
  showToast.value = false;
  progress.value = 0;
}
const handleTransitionName = computed(() => {
  return position == "topLeft"
    ? "fromRight"
    : position == "topRight"
    ? "fromRight"
    : position == "bottomRight"
    ? "fromLeft"
    : position == "bottomLeft"
    ? "fromRight"
    : position == "bottomCenter"
    ? "fromBottom"
    : position == "topCenter"
    ? "fromTop"
    : undefined;
});
const handlePositionClass = computed(() => {
  return position == "topLeft"
    ? "top-left"
    : position == "topRight"
    ? "top-right"
    : position == "bottomRight"
    ? "bottom-right"
    : position == "bottomLeft"
    ? "bottom-left"
    : position == "bottomCenter"
    ? "bottom"
    : position == "topCenter"
    ? "top"
    : undefined;
});

onMounted(() => {
  const progressInterval = setInterval(() => {
    progress.value < 100 ? (progress.value += 1) : undefined;
    progress.value === 100
      ? (clearInterval(progressInterval), setTimeout(closeToast, 1300))
      : undefined;
  }, 20);
});
</script>
