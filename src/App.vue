<template>
  <div>
    <nav-bar/>
    <router-view class="mt-4"/>
    <v-footer />
  </div>
</template>

<script>
import NavBar from './components/templates/NavBar.vue'
import Footer from './components/templates/Footer.vue'

export default {
  components:{ NavBar, "v-footer": Footer}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
* {
  font-family: 'Ubuntu', sans-serif;
}
</style>
