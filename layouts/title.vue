<template>
  <div>
    <Navbar />
    <slot name="default" />
    <TableOfContents v-bind:toc="toc"/>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import TableOfContents from '../components/TableOfContents.vue'
import Footer from '../components/Footer.vue'
export default {
  props: ['page'],
  components: {
    Navbar,
    TableOfContents,
    Footer
  },
  head() {
    const {title: pageTitle} = this.page
    return {
      title: pageTitle ?
        `${pageTitle} - ${this.$siteConfig.title}` :
        this.$siteConfig.title
    }
  },
  data() {
    const {toc} = this.page
    return {
      toc
    }
  }
}
</script>

<style scoped>
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>