<script setup>
const scrollTo = (element) => document.getElementById(element).scrollIntoView()
</script>
<template>
  <nav>
    <section>
      <slot></slot>
    </section>
    <section>
      <span>
          <a href="#" @click.prevent="scrollTo('projects')">Projects</a>
      </span>
      <span>
          <a href="#" @click.prevent="scrollTo('about')">About me</a>
      </span>
      <span>
          <a href="#" @click.prevent="scrollTo('contact')">Contact</a>
      </span>
    </section>
    <section>
      <span>
          <a href="https://github.com/mikolajborowski">
            <font-awesome-icon :icon="['fab', 'github-square']"/>
          </a>
      </span>
      <span>
          <a href="https://linkedin.com/in/mikołaj-borowski">
            <font-awesome-icon :icon="['fab', 'linkedin']"/>
          </a>
      </span>
      <span>
          <a href="https://stackoverflow.com/users/10926556/miko%c5%82aj-borowski">
            <font-awesome-icon :icon="['fab', 'stack-overflow']"/>
          </a>
      </span>
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

span {
  margin: 10px;
}

section:nth-child(2) > span {
  padding-right: 20px;
  border-right: 3px solid var(--font-color);
}

section:nth-child(2) > span:last-child {
  border-right: none;
}

a {
  font-size: x-large !important;
}

@media only screen and (max-width: 871px) {
  nav {
    display: none;
  }
}
</style>