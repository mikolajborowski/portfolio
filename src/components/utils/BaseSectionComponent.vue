<script setup>
const props = defineProps({
  heading: {
    required: true,
    type: String
  }
})
</script>
<template>
  <h2>{{ props.heading }}</h2>
  <slot></slot>
</template>
<style scoped>
h2 {
  font-size: xx-large !important;
  margin: 80px 0 40px 0;
  padding: 0;
}
</style>