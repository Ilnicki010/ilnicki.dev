<template>
  <article class="project">
    <div
      v-if="background"
      :style="{'background-image': `url(${require(`@/assets/img/webp/${this.background}`)})`}"
      class="image"
    ></div>
    <h2 class="project__header">
      <slot name="title"></slot>
    </h2>
    <p class="desc">
      <span>
        <slot name="desc"></slot>
      </span>
    </p>
    <div class="techStackWrapper">
      <span class="techStack">//TECH STACK</span>
      <p>
        <slot name="stack"></slot>
      </p>
    </div>
    <div v-if="gitUrl || url" class="buttons">
      <a v-if="url" target="_blank" :href="url">LIVE</a> /
      <a v-if="gitUrl" target="_blank" :href="gitUrl">GITHUB</a>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      newBackground: null
    }
  },
  props: ['background', 'url', 'gitUrl']
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/vars.scss';
.project {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-left: 2px solid #000;
  padding: 0 15px;
  margin-top: 6vh;
  width: 100%;
  .image {
    height: 30vh;
    margin-bottom: 20px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .project__header {
    color: #fff;
    min-width: 0;
    @include stroke;
  }
  .desc {
    margin-top: 20px;
    color: #fff;
    line-height: 1.5;
    span {
      padding: 1.4px;
      word-break: keep-all;
      background: #000;
    }
  }
  .techStackWrapper {
    padding: 10px 0;
    .techStack {
      letter-spacing: 13px;
    }
  }
}
.buttons {
  a {
    color: $secondary;
    text-decoration: underline;
  }
}
@media (min-width: 720px) {
  .project {
    width: 70%;
    .image {
      height: 40vh;
    }
  }
}
</style>