<template>
  <transition name="slide-up">
    <header v-if="loaded" style="transition-delay: .42s" class="header">
      <Menu />
      <div class="contentWrapper">
        <h1 class="header__text">
          <slot></slot>
        </h1>
        <p>
          <slot name="desc"></slot>
        </p>
      </div>
    </header>
  </transition>
</template>

<script>
import Menu from '~/components/Menu'
export default {
  components: {
    Menu
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
.header {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  .contentWrapper {
    display: flex;
    flex-direction: column;
    justify-content: right;
    text-align: right;
    word-break: keep-all;
    p {
      word-break: keep-all;
      padding: 10px;
      font-size: $small;
    }
  }
  .header__text {
    margin-top: -40px;
    position: relative;
    text-align: right;
  }
}
@media (min-width: 720px) {
  .header {
    padding: 50px 100px;
    flex-direction: row;
    justify-content: baseline;
    align-items: flex-end;
    .header__text {
      margin-top: 0;
    }
    * {
      flex: 1;
    }
  }
}
</style>