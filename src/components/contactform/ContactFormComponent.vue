<script setup>
import BaseSectionComponent from '../utils/BaseSectionComponent.vue'
import BaseButtonComponent from '../utils/BaseButtonComponent.vue'
import {useCssVarFromWindowContext} from '../utils/composables/css'

const {variable} = useCssVarFromWindowContext('--primary-color')
</script>
<template>
  <BaseSectionComponent
      heading="Contact form"
  >
    <form
        action="https://formspree.io/f/mlezoqek"
        class="pill"
        method="POST"
    >
      <p>
        <font-awesome-icon icon="at"/>
        Your email:
      </p>
      <input
          maxlength='100'
          name="email"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          placeholder="Email..."
          required
          type="email"
      >
      <p>
        <font-awesome-icon icon="message"/>
        Your message:
      </p>
      <textarea maxlength='10000' name="message" placeholder="Message..." required></textarea>
      <BaseButtonComponent
          :backgroundColor="variable"
      >
        <font-awesome-icon icon="paper-plane"/>
        Send
      </BaseButtonComponent>
    </form>
  </BaseSectionComponent>
</template>

<style scoped>
textarea, input {
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: none;
  box-sizing: border-box;
  font-family: sans-serif;
}

textarea {
  height: 300px;
  resize: none;
}

label, button {
  margin: 40px 0 20px 0;
}
</style>