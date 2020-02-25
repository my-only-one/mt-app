<template>
  <div id="app">
    <!--header-->
    <app-header :poiInfo="poiInfo"></app-header>
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
  data () {
    return {
      poiInfo: {}
    }
  },
  components: {
    'app-header': Header,
    'app-nav': Nav
  },
  created () {
    // axios
    // fetch
    fetch('/api/goods')
      .then(res => {
        return res.json()
      })
      .then(response => {
        this.poiInfo = response.data.poi_info
      })
  }
}
</script>

<style scoped>

</style>
