<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
</script>
<template>
  <article>
    <h1>
      Page not found!
    </h1>
    <h2>
      The requested URL {{ router.currentRoute.value.fullPath }} was not found on this server.
    </h2>
  </article>
</template>
<style scoped>
h1, h2 {
  margin-top: 10vh;
  margin-bottom: 10vh;
  text-align: center;
}

article {
  padding: 10vh;
  height: 50vh;
}
</style>