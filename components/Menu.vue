<template>
  <nav class="menuWrapper">
    <ul>
      <h3 class="menuLabel">menu</h3>
      <li>
        <nuxt-link to="/">home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/projects">projects</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/skills">skills</nuxt-link>
      </li>
      <li>
        <a
          target="_blank"
          href="https://docs.google.com/document/d/1aMHUhf3c8JjVaWm9NJgwtGxaxgKDkfKA6fSrQGBtLDs/edit?usp=sharing"
        >resume</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/assets/style/vars.scss';
.menuWrapper {
  color: $secondary;
}
</style>