<template>
  <div>
    <nav-bar/>
    <router-view class="mt-4"/>
    <footer-bar />
  </div>
</template>

<script>
import NavBar from './components/templates/NavBar.vue'
import FooterBar from './components/templates/FooterBar.vue'

export default {
  components:{ NavBar, FooterBar}
}
</script>

<style>

</style>
