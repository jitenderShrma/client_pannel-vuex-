<template>
  <div id="app">
    <Navbar/>
  <div class="container">
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex';
import Navbar from './components/layout/Navbar';
export default {
  name: 'app',
  components: {
    Navbar
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
  margin: 0;
}
</style>
