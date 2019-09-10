<template>
<div class="relative mr-6 my-2">
  <input type="search" class="bg-purple-white shadow rounded border-0 p-3" placeholder="Search by name..."  v-model="search" v-on:input="getList">
  <div v-if="search !== ''">
  <div class="card" v-bind:data="list" v-for="post in list" :key="post.title">
    <a v-bind:href="post.permalink" target="_blank">{{post.title}} </a>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      search: '',
      list: ''
    }
  },
  methods: {
    getList: async function() {
      if(this.search === '') return
      const database = await this.$fetchSearchDatabase()
      console.log(this.search)
      const keyword = this.search
      const matchedResults = database.filter(page => {
        const {title='', excerpt=''} = page
        return title.includes(keyword) || excerpt.includes(keyword)
      })
      console.log(matchedResults)
      this.list = matchedResults
      return matchedResults
    }
  }
}
</script>