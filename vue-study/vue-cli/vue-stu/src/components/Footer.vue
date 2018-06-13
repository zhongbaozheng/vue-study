<!-- 1、模板结构 模板只有一个一个根容器，加多一个不行-->
<template>
  <div class ="Footer">
    <p>{{ footer }}--{{title}}</p>
  </div>
</template>

<!-- 2、行为处理逻辑-->
<script>
export default {
  name: 'Footer',
  props:{
    title:{
      type:String,
    }
  },
  data () {
    return {
      footer:"copyright@2017"
    }
  }
}
</script>

<!-- 3、模板样式 -->
<style scoped>

.Footer{
	width: 100%;
	text-align: center;
	padding: 0;
	background: #222;
	border: 1px #222 solid;
}

.Footer p{
	color: green;
}

</style>
