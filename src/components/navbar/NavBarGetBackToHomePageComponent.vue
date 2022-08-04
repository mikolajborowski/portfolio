<script setup>
import {useRouter} from 'vue-router';

const router = useRouter()
</script>
<template>
  <nav>
    <section>
      <slot></slot>
    </section>
    <section class="animate__animated animate__bounceIn">
      <a @click="router.push('/')">
        <font-awesome-icon icon="circle-left"/>
        Home page
      </a>
    </section>
  </nav>
</template>
<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 40px 0 40px 0;
}

nav > section {
  align-self: center;
}

a {
  font-size: x-large !important;
}
</style>