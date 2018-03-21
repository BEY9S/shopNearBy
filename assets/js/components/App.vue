<template>
  <div id="app">
   <menu-bar/>

   <router-view/>
  </div>
</template>

<script>
import MenuBar from './particles/MenuBar.vue'

export default {
  mounted() {
    console.log('Component mounted');
  },
  components: {
    MenuBar
  }
}
</script>

<style scoped>
  #app {
    margin: 0;
    padding: 0; 
  }
</style>