<template>
  <div>
    <Navbar />
    <div class="container bg-gray-200 mx-auto">
        <slot name="default" />
      <TableOfContents v-bind:toc="toc"/>
      <div class="overflow-x-hidden mr-auto">
        <div class="contact-me bg-background-secondary pt-16">
          <div class="container-inner mx-auto text-xl pb-4 relative">
            <h2 class="font-bold mb-6 mx-4" id="contact">Contact me:</h2>

            <div class="absolute right-0 top-0" style="transform: translate(100%) rotate(180deg)">
              <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
            </div>

            <p class="mb-12 mx-4">I have decent skill making latex diagrams, if desired I could help you make yours for a small fee depending on the situation. </p>

            <div class="text-lg sm:text-lg mb-16 mx-4">
              <form action="https://formspree.io/f/mayvrajp" method="POST" class="mb-12">
                <div class="flex flex-wrap mb-6 -mx-4">
                    <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                        <label class="block mb-2 text-copy-primary" for="name">
                            Name
                        </label>

                        <input type="text" name="name" id="name" placeholder="Jon Snow" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4" required>
                    </div>

                    <div class="w-full px-4 md:w-1/2">
                        <label class="block text-copy-primary mb-2" for="email">
                            Email Address
                        </label>

                        <input type="email" name="email" id="email" placeholder="email@example.com"  class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-green-700 mb-2 p-4" required>
                    </div>
                </div>

                <div class="w-full mb-12">
                    <label class="block text-copy-primary mb-2" for="message">
                        Message
                    </label>

                    <textarea id="message" rows="5" name="message" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-green-700 mb-2 px-4 py-4" placeholder="Enter your message here." required></textarea>
                </div>

                <div class="flex justify-end w-full">
                    <input type="submit" value="Submit" class="block bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3">
                </div>
            </form>
            </div>
          </div>
        </div> <!-- end contact-me -->
      </div>
      <Footer />
    </div>
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
