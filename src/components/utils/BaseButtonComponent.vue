<script setup>
const props = defineProps({
  backgroundColor: {
    type: String,
    default: 'black'
  }
})
</script>
<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  background-color: v-bind('props.backgroundColor');
  padding: 10px;
  border: none;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 10px;
  box-sizing: border-box;
  transition: 0.5s background-color;
}

button:hover {
  cursor: pointer;
  background-color: var(--second-color);
}
</style>