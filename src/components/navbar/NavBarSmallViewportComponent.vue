<script setup>
import {reactive} from 'vue'

const state = reactive({shouldSmallNavBeVisible: false});
const toggleNav = () => state.shouldSmallNavBeVisible = !state.shouldSmallNavBeVisible;
const scrollTo = (element) => {
  document.getElementById(element).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  toggleNav();
}
</script>
<template>
  <nav class="small-viewport">
    <section>
      <section>
        <slot></slot>
      </section>
      <section>
      </section>
      <section>
          <span>
              <a v-if="!state.shouldSmallNavBeVisible" @click="toggleNav"><font-awesome-icon icon="bars"/></a>
              <a v-if="state.shouldSmallNavBeVisible" @click="toggleNav"><font-awesome-icon icon="xmark"/></a>
          </span>
      </section>
    </section>
    <div class="small-nav" v-if="state.shouldSmallNavBeVisible">
      <div>
        <a href="#" @click.prevent="scrollTo('projects')">
          <font-awesome-icon icon="link"/>
          Projects
        </a>
      </div>
      <div>
        <a href="#" @click.prevent="scrollTo('about')">
          <font-awesome-icon icon="person"/>
          About me
        </a>
      </div>
      <div>
        <a href="#" @click.prevent="scrollTo('contact')">
          <font-awesome-icon icon="message"/>
          Contact
        </a>
      </div>
      <div>
        <a href="https://stackoverflow.com/users/10926556/miko%c5%82aj-borowski">
          <font-awesome-icon :icon="['fab', 'stack-overflow']"/>
          Stack overflow
        </a>
      </div>
      <div>
        <a href="https://github.com/mikolajborowski">
          <font-awesome-icon :icon="['fab', 'github-square']"/>
          Github
        </a>
      </div>
      <div>
        <a href="https://linkedin.com/in/mikołaj-borowski">
          <font-awesome-icon :icon="['fab', 'linkedin']"/>
          Linkedin
        </a>
      </div>
    </div>
  </nav>
</template>
<style scoped>
nav > section {
  display: flex;
  justify-content: space-between;
  padding: 40px 0 20px 0;
}

nav > section > section {
  align-self: center;
}

nav > div {
  align-self: center;
}

span {
  margin: 10px;
}

.small-viewport {
  display: none;
}

.small-nav {
  display: flex;
  flex-direction: column;
  background-color: var(--background-color-light);
  border: 3px solid var(--first-color);
  border-radius: 10px;
}

.small-nav > div {
  margin: 15px;
}

a {
  font-size: x-large !important;
}

@media only screen and (max-width: 871px) {
  .small-viewport {
    display: inline;
  }
}

@media only screen and (min-width: 872px) {
  .small-viewport {
    display: none;
  }
}
</style>