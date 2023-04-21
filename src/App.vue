<template>
  <div id="app">
    <div class="flex justify-between border-b">
       <Navbar />
       <Searchbar />
       </div>

    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/header/Navbar.vue";
import Searchbar from "./components/header/Searchbar.vue"
export default{
components: {
  Navbar,
  Searchbar
}
}
</script>