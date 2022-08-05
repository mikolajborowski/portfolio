<script setup>
import BaseSectionComponent from '../utils/BaseSectionComponent.vue'
import {projects} from '../../assets/datasets/projects'

const project = projects[0];
</script>
<template>
  <BaseSectionComponent
      :heading="project.name"
  >
    <article>
      <section class="pill">
        <h3>
          <font-awesome-icon icon="code"/>
          Tech used:
        </h3>
        <p class="text-justify">
          <template v-for="tech in project.tech">
            <font-awesome-icon :icon="['fab', tech.icon]"/>
            {{ tech.name }}&nbsp;
          </template>
        </p>
        <h3>
          <font-awesome-icon icon="file-circle-check"/>
          Project description:
        </h3>
        <p>
          {{ project.description }}
        </p>
      </section>
      <section>
        <img src="../../assets/images/projects/portfolio/cover.png" alt="cover"/>
      </section>
      <section class="pill docker">
        <p>
          <span class="docker-color">
              <font-awesome-icon :icon="['fab', 'docker']"/>
          </span>
          This repo is
          <span class="docker-color">
            dockerized,
          </span>
          You can run:
        </p>
        <div class="code">
          <code>
            $
            <span class="docker-color">
                docker
            </span>
            run -p 8888:80 mikolajborowski/portfolio
          </code>
        </div>
        <p>to simply test deploy.</p>
      </section>
    </article>
  </BaseSectionComponent>
</template>
<style scoped>
img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 3px solid var(--primary-color);
  box-sizing: border-box;
}

section {
  margin-top: 40px;
}

.code {
  padding: 10px;
  box-sizing: border-box;
  background-color: var(--background-color);
  border-radius: 10px;
  width: 100%;
}

@media only screen and (max-width: 871px) {
  .projectImages > div:nth-child(2) {
    display: none;
  }

  .docker {
    display: none;
  }
}
</style>