<template>
  <div id="app">
    <!--header-->
    <app-header></app-header>
    <!--nav-->
    <app-nav></app-nav>
    <!--content-->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header/Header'
import Nav from './components/nav/Nav'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-nav': Nav
  }
}
</script>

<style scoped>

</style>
