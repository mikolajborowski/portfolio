<template>
  <header>
    <article class="animate__animated animate__fadeIn">
      <section>
        <h1>
          Hello, I'm
          <div class='color'>
            Mikołaj Borowski!
          </div>
        </h1>
        <h2>
          Full-stack web developer, from Poland highly passionate about
          <span class='color'>
            javascript
          </span>
          and other web technologies.
        </h2>
      </section>
      <section>
        <img src='../../assets/images/profile-pic.png' alt="profile-pic"/>
      </section>
    </article>
  </header>
</template>
<style scoped>
header {
  padding: 40px 0 0 0;
}

article {
  display: flex;
  flex-direction: row;
  width: 100%;
}

article > section {
  display: grid;
  width: 50%;
  box-sizing: border-box;
}

article > section:first-child {
  padding-right: 40px;
  align-self: center;
}

article > section:nth-child(2) {
  background-image: radial-gradient(var(--primary-color) 20%, var(--background-color) 20%);
  background-position: 0 0;
  background-size: 100px 100px;
}

h1 {
  margin: 0;
  padding: 0;
}

.color {
  color: var(--secondary-color);
}

h2 {
  margin: 0;
  color: var(--font-color);
}

img {
  align-self: center;
  justify-self: right;
  border: 8px solid var(--secondary-color);
  width: 400px;
  height: 400px;
  border-radius: 50%;
}

@media only screen and (max-width: 947px) {
  article {
    flex-direction: column;
  }

  article > section {
    display: grid;
    width: 100%;
  }

  article > section:last-child {
    display: none;
  }

  article > section:first-child {
    padding-right: 0;
  }
}

</style>