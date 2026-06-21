<!-- @format -->

<template>
  <div :class="['entrance-wrapper', { 'collapse-away': shouldDisappear }]">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const shouldDisappear = ref(false);

onMounted(() => {
  // Human sa 3 segundos, i-trigger ang pagka-wagtang sa tibuok overlay
  setTimeout(() => {
    shouldDisappear.value = true;
  }, 3000);
});
</script>

<style src="../../public/css/animationEffects.css"></style>
