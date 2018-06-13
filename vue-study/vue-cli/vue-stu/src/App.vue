<!-- 模板 -->
<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/helloworld">Helloworld</router-link></li>   <!-- 路由的好处就是直接跳到路径下，而不刷新，提升体验和加载-->
    </ul>
    <router-view></router-view>
  </div>
</template>

<!-- 组件 -->
<script>

export default {
  name: 'App',
  components: {
  
  },
  data(){
  },
  methods:{
  }
}
</script>

<!-- 模板样式 -->
<style scoped>

</style>
