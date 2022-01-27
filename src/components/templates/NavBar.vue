<template>
  <b-navbar toggleable="lg"  class="shadow-sm mb-5 rounded p-3">
    <b-navbar-brand href="#">
      <img width="36" src="../../assets/logo_nav.png" alt="" srcset="">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" right is-nav>
      <b-navbar-nav>
        <b-nav-item>
          <router-link tag="li" to="/">Análises</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link tag="li" to="/sobre">Sobre</router-link>
        </b-nav-item>
      </b-navbar-nav>
      
    </b-collapse>
  </b-navbar>
</template>

<style scoped>

</style>