<script setup>
import {useRouter} from 'vue-router';

const router = useRouter()
</script>
<template>
    <span @click="router.push('/')">
        Borowski
    </span>
</template>
<style scoped>
span {
  color: var(--font-color);
  font-size: 3rem;
  font-family: 'Ms Madi', cursive;
  margin: 0;
  padding: 0;
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
</style>