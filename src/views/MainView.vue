<script setup>
import NavBarComponent from '../components/navbar/NavBarComponent.vue'
import HeaderComponent from '../components/header/HeaderComponent.vue'
import AboutMeComponent from '../components/aboutme/AboutMeComponent.vue'
import ContactFormComponent from '../components/contactform/ContactFormComponent.vue'
import ProjectsComponent from '../components/projects/ProjectsComponent.vue'
</script>
<template>
  <NavBarComponent/>
  <HeaderComponent/>
  <div id="projects"></div>
  <ProjectsComponent/>
  <div id="about"></div>
  <AboutMeComponent/>
  <div id="contact"></div>
  <ContactFormComponent/>
</template>