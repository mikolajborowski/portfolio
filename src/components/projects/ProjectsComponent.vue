<script setup>
import BaseSectionComponent from '../utils/BaseSectionComponent.vue'
import BaseButtonComponent from '../utils/BaseButtonComponent.vue'</script>
<template>
  <BaseSectionComponent
      heading="My projects"
  >
    <article class="pill">
      <section>
        <h3 class="project-header">
          More projects in the future!
        </h3>

        <p>
          Please be patient, I'm working on some awesome stuff.
        </p>
        <p>
          Meanwhile you can read about this website:
        </p>
        <router-link to="/project">
          <BaseButtonComponent
              backgroundColor="#0da574"
          >
            <font-awesome-icon :icon="['fab', 'readme']"/>
            Read more
          </BaseButtonComponent>
        </router-link>
      </section>
      <section class="editor">
        <div class="progress">Coding in progress</div>
        <div></div>
      </section>
    </article>
  </BaseSectionComponent>
</template>

<style scoped>
article {
  display: flex;
  gap: 40px;
}

section {
  flex: 1;
  box-sizing: border-box;
}

.editor {
  background-color: var(--background-color);
  border-radius: 10px;
  border-top: 30px solid var(--font-color);
  padding: 10px;
}

.progress:after {
  content: "...";
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  animation: ellipsis-dot 2s infinite .3s;
  animation-fill-mode: forwards;
  width: 1.25em;
}

@keyframes ellipsis-dot {
  25% {
    content: "";
  }
  50% {
    content: ".";
  }
  75% {
    content: "..";
  }
  100% {
    content: "...";
  }
}

@media only screen and (max-width: 1041px) {
  article > section:last-child {
    display: none;
  }
}

/*article {*/
/*  display: grid;*/
/*  grid-template-columns: repeat(auto-fill, minmax(calc(33.333% - 80px), 1fr));*/
/*  gap: 40px;*/
/*}*/

/*section {*/
/*  padding: 10px;*/
/*  border-radius: 10px;*/
/*  background-color: var(--background-color-light);*/
/*}*/
</style>