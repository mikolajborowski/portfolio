<script setup>
import NavBarComponent from '../components/navbar/NavBarComponent.vue';
import NotFoundComponent from '../components/notfound/NotFoundComponent.vue';
</script>
<template>
  <NavBarComponent
      :getBackToHomePage="true"
  />
  <NotFoundComponent/>
</template>