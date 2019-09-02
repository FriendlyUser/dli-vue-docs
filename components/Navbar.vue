<template>
  <nav class="navbar">
    <div class="nav-left">
      <div></div>
      <saber-link to="/"><warehouse-icon title="Home" class="icon-2x" /></saber-link>
      <saber-link to="/about.html"><information-icon title="About" class="icon-2x" /></saber-link>
    </div>
    <div class="nav-right">
      <!--- Add icons -->
      <a href="https://github.com/FriendlyUser/dli-vue-docs">
        <source-branch-icon title ="this is an icon" class="icon-2x" />
      </a>
      <a href="https://github.com/FriendlyUser/LatexDiagrams">
        <github-circle-icon title="this is an icon!" class="icon-2x"/>
      </a>
    </div>
  </nav>
</template>


<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import GithubBoxIcon  from 'vue-material-design-icons/GithubBox.vue';
import GithubCircleIcon from 'vue-material-design-icons/GithubCircle.vue'
import SourceBranchIcon from 'vue-material-design-icons/SourceBranch.vue'
import WarehouseIcon from 'vue-material-design-icons/Warehouse.vue'
import InformationIcon from 'vue-material-design-icons/Information.vue'
export default {
  components: {
    MenuIcon,
    GithubBoxIcon,
    GithubCircleIcon,
    SourceBranchIcon,
    WarehouseIcon,
    InformationIcon
  }
}
</script>
<style>
.material-design-icon.icon-2x.icon-2x {
  height: 2em !important; 
  width: 2em !important;
}

.material-design-icon.icon-2x > .material-design-icon__svg {
  height: 2em;
  width: 2em;
}
/* nav {
  display: flex;
  align-items: center;
} */
nav {
  /** margin: auto; */
  width: 100%;
  background-color: rgb(176, 90, 196);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #1c3ed3;
  background-color: #fff;
  display: flex;
  /** box-shadow: 0 1px 15px rgba(50,50,93,.2); */
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
  margin-left: 5px;
}
.navbar > div > a {
  text-decoration: none;
  font-size: 2em;
}

.navbar > div > a:hover {
  color: rgb(78, 32, 202);
}

/* ... omitted some css */
</style>