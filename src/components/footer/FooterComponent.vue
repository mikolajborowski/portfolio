<template>
  <footer>
    <article>
      <section>
        <h3>
          <font-awesome-icon icon="person"/>
          About me
        </h3>
        <p>
          Well-qualified front-end developer familiar with a wide range of programming utilities and languages.
          Knowledgeable of backend development requirements. Handles any part of the process with ease. Collaborative
          team player with excellent technical abilities offering 5 years of related experience.
        </p>
      </section>
      <section>
        <h3>
          <font-awesome-icon icon="message"/>
          Social Media
        </h3>
        <ul>
          <li><a href="https://github.com/mikolajborowski">Github</a></li>
          <li><a href="https://www.linkedin.com/in/miko%C5%82aj-borowski/">Linkedin</a></li>
          <li><a href="https://stackoverflow.com/users/10926556/miko%c5%82aj-borowski">Stack overflow</a></li>
        </ul>
      </section>
      <section>
        <h3>
          <font-awesome-icon icon="link"/>
          My favorites
        </h3>
        <ul>
          <li><a href="https://javascript.info/">javascript.info</a></li>
          <li><a href="https://html.com/">html.com</a></li>
          <li><a href="https://www.geeksforgeeks.org/">geeksforgeeks.org</a></li>
          <li><a href="https://colorsinspo.com/">colorsinspo.com</a></li>
        </ul>
      </section>
    </article>
  </footer>
</template>
<style scoped>
footer {
  margin-top: 80px;
}

article {
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 80px 10% 80px 10%;
  gap: 40px;
  background-color: var(--background-color-light);
  border-radius: 20px 20px 0 0;
}

section {
  flex: 1;
}

h3 {
  padding-bottom: 20px;
  margin-bottom: 40px;
  border-bottom: 4px solid var(--primary-color);
}

@media only screen and (max-width: 871px) {
  article {
    flex-direction: column;
    width: 100vw;
    margin: 0;
  }
}
</style>