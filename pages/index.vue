<template>
  <div>
    <transition name="comeIn">
      <section v-if="loaded" class="homeWrapper">
        <article class="nameWrapper">
          <contact-info />
          <h1>
            DOMINIK
            <br />ILNICKI
          </h1>
          <span class="nameWrapper__profesion">//web developer*</span>
        </article>
        <Menu class="mainMenu" />
        <!-- <img class="transformedText" src="~/assets/svg/asset.svg" alt="DOMINIK ILNICKI" /> -->
        <!-- <span class="rotatedText">DOMINIK ILNICKI</span> -->
        <Footer />
      </section>
    </transition>
  </div>
</template>

<script>
import Menu from '~/components/Menu'
import Footer from '~/components/Footer'
import contactInfo from '~/components/contactInfo'
export default {
  components: { Menu, Footer, contactInfo },
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
.homeWrapper {
  margin: 0;
  padding: 20px;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  position: relative;
}
.nameWrapper {
  height: 50vh;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  .nameWrapper__profesion {
    letter-spacing: 13px;
  }
}
.transformedText {
  position: absolute;
  right: -10px;
  top: 20vh;
}
.rotatedText {
  @include main-font;
  font-size: $large;
  position: absolute;
  right: 0;
  top: 0;
  // -moz-transform: scaleX(-1);
  // -o-transform: scaleX(-1);
  // -webkit-transform: scaleX(-1);
  transform: rotate(90deg);
}
//transition
.comeIn-enter-active {
  transition: 0.6s cubic-bezier(0.16, 0.57, 0.83, 1.32);
}
.comeIn-enter {
  background: #000;
  text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white,
    1px 1px 0 white;
  transform: translateX(-100px);
}

@media (min-width: 720px) {
  .homeWrapper {
    padding: 0 100px;
  }
}
</style>
