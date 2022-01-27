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

</style>
