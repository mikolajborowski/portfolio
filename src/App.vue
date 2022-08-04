<script setup>
import FooterComponent from './components/footer/FooterComponent.vue'
</script>

<template>
  <div class="routerView">
    <router-view></router-view>
  </div>
  <FooterComponent/>
</template>

<style>
/*Main theme import*/
@import url('./theme/main.css');
@import url('./theme/classes.css');

.routerView {
  width: 80vw;
  margin: 0 10vw 0 10vw;
}

@media only screen and (max-width: 947px) {
  .routerView {
    width: 90vw;
    margin: 0 5vw 0 5vw;
  }
}
</style>