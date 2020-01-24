<template>
<div>
  <nav class="z-50 bg-white top-0 flex flex-wrap items-center sm:justify-between py-2 px-6 shadow-lg w-full">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <span class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-800">
          Latex Diagrams Gallery Website
        </span>
        <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div class="lg:flex flex-grow items-center hidden" id="example-navbar-danger">
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="nav-item">
            <saber-link to="/" class="px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-800 hover:text-gray-600" target="_blank">
              <warehouse-icon title="Home" class="icon-2x" />
              <span class="ml-2">Home</span>
            </saber-link>
          </li>
          <li class="nav-item">
            <saber-link to="/about.html" class="px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-800 hover:text-gray-600" target="_blank">
              <information-icon title="this is an icon!" class="icon-2x"/>
              <span class="ml-2">About</span>
            </saber-link>
          </li>
          <li class="nav-item">
            <a href="https://github.com/FriendlyUser/LatexDiagrams" class="px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-800 hover:text-gray-600">
              <github-circle-icon title="this is an icon!" class="icon-2x"/>
              <span class="ml-2">LatexDiagram</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="https://github.com/FriendlyUser/dli-vue-docs" class="download-button px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-800 hover:text-gray-600">
              <source-branch-icon title ="this is an icon" class="icon-2x" />
              <span class="ml-2">Repo</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="container px-4 mx-auto flex flex-wrap items-center">
      <Search />
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