<template>
  <div id="app">
    <!-- {{allClients}} -->
  <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex';
export default {
  name: 'app',
  components: {

  },
  computed: mapGetters(['allClients'])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
