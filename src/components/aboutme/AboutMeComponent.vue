<script setup>
import BaseSectionComponent from '../utils/BaseSectionComponent.vue'</script>

<template>
  <BaseSectionComponent
      heading="About me"
  >
    <article>
      <section class="experience">
        <div class="pill">
          <h3>
            <font-awesome-icon icon="briefcase"/>
            Experience:
          </h3>
          <p>Five years of work experience.</p>
        </div>
        <div class="pill">
          <h3>
            <font-awesome-icon icon="cube"/>
            Hobby:
          </h3>
          <p>Thirteen years as a hobby.</p>
        </div>
        <div class="pill">
          <h3>
            <font-awesome-icon icon="file-circle-check"/>
            Diploma:
          </h3>
          <p>BSc computer science degree.</p>
        </div>
      </section>
      <section class="tech-section">
        <font-awesome-icon :icon="['fab', 'css3-alt']"/>
        <font-awesome-icon :icon="['fab', 'js-square']"/>
        <font-awesome-icon :icon="['fab', 'vuejs']"/>
        <font-awesome-icon :icon="['fab', 'php']"/>
        <font-awesome-icon :icon="['fab', 'html5']"/>
        <font-awesome-icon :icon="['fab', 'docker']"/>
        <font-awesome-icon :icon="['fab', 'laravel']"/>
        <font-awesome-icon :icon="['fab', 'bootstrap']"/>
        <font-awesome-icon :icon="['fab', 'git']"/>
        <font-awesome-icon :icon="['fab', 'linux']"/>
        <font-awesome-icon :icon="['fab', 'npm']"/>
      </section>
      <section class="pill info">
        <h3>
          <font-awesome-icon icon="file-circle-check"/>
          About me:
        </h3>
        <p>
          Well-qualified front-end developer familiar with a wide range of programming utilities and
          languages.
          Knowledgeable of backend development requirements.
          Handles any part of the process with ease.
          Collaborative team player with excellent technical abilities offering 5 years of related experience.
        </p>
      </section>
      <section class="pill docker">
        <p>
          <span class="docker-color">
              <font-awesome-icon :icon="['fab', 'docker']"/>
          </span>
          My public repos are
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
            run -p 8888:80 mikolajborowski/--project name--
          </code>
        </div>
        <p>to simply test deploy any of my project's.</p>
      </section>
    </article>
  </BaseSectionComponent>
</template>

<style scoped>
.experience {
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
  gap: 40px;
}

.experience > div {
  flex: 1;
}

.code {
  padding: 10px;
  box-sizing: border-box;
  background-color: var(--background-color);
  border-radius: 10px;
  width: 100%;
}

.tech-section {
  display: flex;
  justify-content: space-between;
  color: var(--background-color-light);
  margin: 40px 0 40px 0;
  font-size: xxx-large;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

@media only screen and (max-width: 871px) {
  .experience {
    flex-direction: column;
  }
}

@media only screen and (max-width: 700px) {
  .tech-section, .docker {
    display: none;
  }

  .info {
    margin-top: 40px;
  }
}
</style>