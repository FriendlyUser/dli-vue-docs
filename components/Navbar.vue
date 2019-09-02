<template>
  <nav>
    <div class="nav-left">
      <div></div>
      <saber-link to="/">Home</saber-link>
      <saber-link to="/about.html">About</saber-link>
    </div>
    <div class="nav-right">
      <!--- Add icons -->
      <a href="https://github.com/FriendlyUser/dli-vue-docs">Repo</a>
      <a href="https://github.com/FriendlyUser/LatexDiagrams">Diagrams</a>
    </div>
  </nav>
</template>

<style scoped>
/* nav {
  display: flex;
  align-items: center;
} */
nav {
  margin: auto;
  width: 100%;
  background-color: rgb(176, 90, 196);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #1c3ed3;
  background-color: #fff;
  display: flex;
  box-shadow: 0 1px 15px rgba(50,50,93,.2);
  height: 60px;
}
.nav-left {
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.nav-right {
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
a {
  text-decoration: none;
  font-size: 2em;
}

a:hover {
  color: rgb(78, 32, 202);
}
/* ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #FFAAC8;
} */

/* ul > li {

  color: #B959FF;
}

ul > li > a{
  display: block;
  text-align: center;
} */
/* ... omitted some css */
</style>