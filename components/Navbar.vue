<template>
<div>
  <nav class="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
  <div class="mb-2 sm:mb-0 inner">

    <a href="https://saber.land/" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">Saber</a><br>
    <span class="text-xs text-grey-dark">Latex Diagrams Gallery Website</span>
    <div>
      <Search />
    </div>
  </div>

  <div class="sm:mb-0 self-center">
    <saber-link to="/" class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">
      Home <warehouse-icon title="Home" class="icon-2x" />
    </saber-link>
    <saber-link to="/about.html" class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">
      About<information-icon title="this is an icon!" class="icon-2x"/>
    </saber-link>
    <!-- <div class="h-10" style="display: table-cell, vertical-align: middle;"> -->
    <a href="https://github.com/FriendlyUser/dli-vue-docs" class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">
      Repo <source-branch-icon title ="this is an icon" class="icon-2x" />
    </a>
    <a href="https://github.com/FriendlyUser/LatexDiagrams" class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">
      LatexDiagrams<github-circle-icon title="this is an icon!" class="icon-2x"/>
    </a>
    <!-- </div> -->

  </div>
</nav>
</div>
</template>


<script>
import Search from './Search.vue';
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
    InformationIcon,
    Search
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
.navbar {
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