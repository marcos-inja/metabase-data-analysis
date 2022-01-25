<template>
  <div>
    <nav-bar/>
    <router-view class='mt-4'/>
  </div>
</template>

<script>
import NavBar from './components/templates/NavBar.vue'
export default {
  components:{ NavBar }
}
</script>

<style>

</style>
