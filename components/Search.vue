<template>
<div class="relative mr-6 my-2">
  <input type="search" class="bg-purple-white shadow rounded border-0 p-3" placeholder="Search by name..."  v-model="search" v-on:input="getList">
  <div v-if="search !== ''" class="searchbar">
    <div v-bind:data="list" v-for="post in list" :key="post.title" class="list">
      <a v-bind:href="post.permalink" target="_blank" class="max-w-sm rounded list block group bg-gray-200 group-hover:text-blue">{{post.title}} </a>
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
      if (this.search === '') return
      const database = await this.$fetchSearchDatabase()
      const keyword = this.search
      const matchedResults = database.filter(page => {
        const {title='', excerpt=''} = page
        return title.includes(keyword) || excerpt.includes(keyword)
      })
      this.list = matchedResults
      return matchedResults
    }
  }
}
</script>

<style scoped>
.list {
  width:inherit;
}
.searchbar {
  width:inherit;
}
</style>
