<!-- 1、模板结构 模板只有一个一个根容器，加多一个不行-->
<template>
  <div class="helloworld">
    <h1>{{ msg }}</h1>
  </div>
</template>

<!-- 2、行为处理逻辑-->
<script>
export default {
  name: 'helloworld',
  data () {
    return {
      msg: 'Hello World'
    }
  }
}
</script>

<!-- 3、模板样式 -->
<style scoped>

</style>
