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
          <div>
            <span class="nameWrapper__profesion">
              //web developer
              <span class="fade-in">*</span>
            </span>
          </div>
        </article>
        <Menu class="mainMenu" />
        <!-- <img class="transformedText" src="~/assets/svg/asset.svg" alt="DOMINIK ILNICKI" /> -->
        <!-- <span class="rotatedText">DOMINIK ILNICKI</span> -->
        <Footer class="fade-in" />
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
  margin-bottom: 3vh;
  .nameWrapper__profesion {
    letter-spacing: 12px;
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
  transform: rotate(90deg);
}
.fade-in {
  animation: fade-in 0.3s 1s ease-out both;
}
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
  }
}

@media (min-width: 720px) {
  .homeWrapper {
    padding: 0 100px;
  }
}
</style>
