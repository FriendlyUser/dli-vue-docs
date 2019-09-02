<template>
  <div>
    <Navbar />
    <slot name="default" />
    <div class="links">
      <div v-if="page.prevPost">
        <router-link :to="page.prevPost.permalink">
          Previous: {{ page.prevPost.title }}
        </router-link>
      </div>
      <div v-if="page.nextPost">
        <router-link :to="page.nextPost.permalink">
          Next: {{ page.nextPost.title }}
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  props: ['page'],
  components: {
    Navbar,
    Footer
  },
  head() {
    const {title: pageTitle} = this.page
    return {
      title: pageTitle ?
        `${pageTitle} - ${this.$siteConfig.title}` :
        this.$siteConfig.title
    }
  }
}
</script>

<style scoped>
p {
  font-family: Helvetica;
}
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

/**Add outward arrow images or icons at some point*/
.links {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.img {
  max-width: 100%;
}
</style>
