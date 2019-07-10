<template>
  <div>
    <header-component>
      SKILLS
      <template
        v-slot:desc
      >I'm trying to learn a lot of technologies all the time. I pay attention to performance, accessibility and UI/UX of my web apps.</template>
    </header-component>
    <transition name="fade-up">
      <section v-if="loaded" style="transition-delay: .42s" class="skillsWrapper">
        <div>
          <span>JS</span>
          <span>VUE</span>
          <span>NUXT</span>
          <span>ES6</span>
          <span>HTML</span>
          <span>SCSS</span>
          <span>UI/UX</span>
          <span>Node</span>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
import headerComponent from '~/components/headerComponent'
export default {
  components: {
    headerComponent
  },
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/vars.scss';
.skillsWrapper {
  padding: 0 20px;
  @include stroke;
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  span {
    flex: 1;
    font-size: $x-large;
  }
}
@media (min-width: 720px) {
  .skillsWrapper {
    width: 100%;
    div {
      padding: 0 100px;
      height: 40vh;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      span {
        flex: 1;
        margin: 0 10px;
      }
    }
  }
}
</style>