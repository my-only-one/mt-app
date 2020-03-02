<template>
  <div id="app">
    <!--header-->
    <app-header :poiInfo="poiInfo"></app-header>
    <!--nav-->
    <app-nav :commentNumData="commentNum"></app-nav>
    <!--content-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from './components/header/Header'
import Nav from './components/nav/Nav'

export default {
  name: 'App',
  data () {
    return {
      poiInfo: {},
      commentNum: 0
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
    // 请求ratings
    fetch('/api/ratings')
      .then(res => {
        return res.json()
      })
      .then(response => {
        this.commentNum = response.data.comment_num
      })
  }
}
</script>

<style scoped>

</style>
