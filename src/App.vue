<template>
  <Nav />
  <router-view/>
</template>

<script>
  import Nav from '../src/components/Nav.vue'
  export default {
    components: {Nav},
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}


</style>
