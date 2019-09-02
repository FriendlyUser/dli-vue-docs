<template>
  <div class="card">
    <h2> Table of Contents </h2>
    <p>Below are links to all the various diagrams I have made or referenced in latex. Most of them were created by me.</p>
    <ul id="ex">
      <li v-for="item in toc" v-bind:key="item">
        <a v-bind:href="item">{{item}} </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TableOfContents',
  props: {
    toc: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>
<style scoped>
p {
  text-align: center;
}
h2 {
  margin: auto;
  text-align: center;
  width: 40%;
}
.card {
  background-color: #fff;
  min-height: 200px;
  width: 80%;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
  overflow: hidden;
  align-items: center
}

ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

li {
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 10px;
}
</style>
