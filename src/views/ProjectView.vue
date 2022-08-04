<script setup>
import NavBarComponent from '../components/navbar/NavBarComponent.vue'
import ProjectComponent from '../components/projects/ProjectComponent.vue';
</script>
<template>
  <NavBarComponent
      :getBackToHomePage="true"
  />
  <ProjectComponent/>
</template>