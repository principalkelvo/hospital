<template>
  <div id="app">
    <!-- <Loader/> -->
    <AsideBar />
    <NavBar />
    <section class="section">
      <router-view />
    </section>
    <!-- <Footer /> -->
  </div>
</template>
<script>
import axios from "axios";
import AsideBar from "@/components/Asidebar.vue";
import NavBar from "@/components/Navbar.vue";


export default {
  name: "App",

  components: {
    NavBar,
    AsideBar,
  },
  beforeCreate() {
    this.$store.commit("initializeStore");
    const token = this.$store.state.token;
    // check if token exists
    if (this.$store.state.token) {
      axios.defaults.headers.common["Authorization"] =
        "Token " + this.$store.state.token;
    } else {
      axios.defaults.headers.common["Authorization"] = " ";
    }
  },
}
</script>
<style lang="scss">
@import "../node_modules/bulma";
@import "../node_modules/boxicons/css/boxicons.min.css";

nav.navbar {
  background: linear-gradient(90.65deg, #8a33de 21.43%, #9362f7 112.7%);
  left: 260px;
  width: calc(100% - 260px);
  padding: 0 10px;
  transition: all 0.5s ease;
}

.sidebar.close~.navbar {
  left: 78px;
  width: calc(100% - 78px);
}

section.section {
  position: relative;
  left: 260px;
  width: calc(100% - 260px);
  padding: 0 10px;
  transition: all 0.5s ease;
}

.sidebar.close~.section {
  left: 78px;
  width: calc(100% - 78px);
}

@media screen and (max-width: 720px) {
  section.section {
    padding: 0 !important;
    margin: 0 !important;
  }
}

@media screen and (max-width: 425px) {
  .sidebar.close~.section {
    opacity: 1;
    transition: all 0.4s ease;
  }

  .sidebar~.section {
    opacity: 0;
  }

}
</style>
