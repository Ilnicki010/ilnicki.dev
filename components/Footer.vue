<template>
  <footer class="footerWrapper">
    <p class="footerWrapper__text">*This is not another fu**ing portfolio site.</p>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/assets/style/vars.scss';
.footerWrapper {
  width: 100%;
  position: absolute;
  bottom: 0;
  .footerWrapper__text {
    font-size: $xx-small;
    opacity: 0.6;
    padding: 5px 0;
  }
}
@media (min-width: 720px) {
  .footerWrapper {
    bottom: 20px;
  }
}
</style>