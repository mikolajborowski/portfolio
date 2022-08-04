<script setup>
import BaseLogoComponent from '../utils/BaseLogoComponent.vue'
import NavBarLargeViewportComponent from './NavBarLargeViewportComponent.vue'
import NavBarSmallViewportComponent from './NavBarSmallViewportComponent.vue'
import NavBarGetBackToHomePageComponent from './NavBarGetBackToHomePageComponent.vue'

const props = defineProps({
  getBackToHomePage: {
    type: Boolean,
    required: false,
    default: false
  }
});
</script>
<template>
  <template v-if="props.getBackToHomePage">
    <NavBarGetBackToHomePageComponent>
      <BaseLogoComponent></BaseLogoComponent>
    </NavBarGetBackToHomePageComponent>
  </template>
  <template v-else>
    <NavBarLargeViewportComponent>
      <BaseLogoComponent></BaseLogoComponent>
    </NavBarLargeViewportComponent>
    <NavBarSmallViewportComponent>
      <BaseLogoComponent></BaseLogoComponent>
    </NavBarSmallViewportComponent>
  </template>
</template>
