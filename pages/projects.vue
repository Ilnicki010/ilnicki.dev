<template>
  <div class="projectsWrapper">
    <headerComponent>
      MY
      <br />PROJECTS
      <template
        v-slot:desc
      >All of those projects were built by me, without using any templates or ready UI/UX designs.</template>
    </headerComponent>
    <transition name="fade-up">
      <section v-if="loaded" style="transition-delay: .42s" class="projectsList">
        <Project
          :background="'kaligrafowane'"
          :url="'https://kaligrafowane.pl'"
          :gitUrl="'https://github.com/Ilnicki010/kaligrafowane.pl'"
        >
          <template v-slot:title>KALIGRAFOWANE.PL</template>
          <template
            v-slot:desc
          >Static website for local business. Created in mobile first approach using Nuxt JS. Designed using Adobe XD tool after interview with client. This site scores near 100 points in all Google Audits categories, and It's close to perfect in W3C HTML & CSS validator.</template>
          <template v-slot:stack>VUE / NUXT / SCSS / Adobe XD</template>
        </Project>
        <Project
          :background="'quiz_fighters'"
          :url="'https://stoic-aryabhata-79d354.netlify.com/'"
          :gitUrl="'https://github.com/Ilnicki010/kodujwebapp'"
        >
          <template v-slot:title>
            QUIZ
            <br />FIGHTERS
          </template>
          <template v-slot:desc>
            This project took
            <b>1st place</b> in “koduj web app” contents organised by GUS Poland. It is dynamic web application with users authorization. Site makes statistics data more fun and attractive to the young people.
          </template>
          <template v-slot:stack>VUE / Firebase Auth / Mongo DB / Cloud Functions / SCSS / Adobe XD</template>
        </Project>
        <Project
          :background="'hackathon'"
          :url="'https://drive.google.com/file/d/1yUG3G8VVGZOnC8Y7MGrQ0ZJFVJrq4Ffu/view'"
          :gitUrl="'https://github.com/Ilnicki010/behealthy-hackathon'"
        >
          <template v-slot:title>
            BE HEATHY
            <br />HACKATHON
          </template>
          <template
            v-slot:desc
          >I made this app in just 24 hours during hackathon. It helps users to find restaurant without GMO products and with a good quality products.</template>
          <template v-slot:stack>VUE / Strapi CMS / SCSS / Adobe XD</template>
        </Project>
        <Project
          :background="'strapi_blog'"
          :url="'https://drive.google.com/file/d/1LfdxpjM29zO3SWl_V2IZovAc31xT5myn/view?usp=sharing'"
          :gitUrl="'https://github.com/Ilnicki010/starpi-vue-blog'"
        >
          <template v-slot:title>
            STRAPI
            <br />BLOG
          </template>
          <template
            v-slot:desc
          >Blog for presonal usage made with Strapi headless cms on backend and VUE JS on frontend.</template>
          <template v-slot:stack>VUE / Strapi CMS / SCSS / Adobe XD</template>
        </Project>
      </section>
    </transition>
  </div>
</template>

<script>
import headerComponent from '~/components/headerComponent'
import Project from '~/components/Project'
export default {
  components: { headerComponent, Project },
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
.projectsWrapper {
  display: flex;
  flex-direction: column;
}
.projectsList {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>