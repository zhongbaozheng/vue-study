<!-- 1、模板结构 模板只有一个一个根容器，加多一个不行-->
<template>
  <div id="Header" v-on:click="changeTitle">
    <h1>{{ title1 }}--{{title}}</h1>
  </div>
</template>

<!-- 2、行为处理逻辑-->
<script>
export default {
  name: 'Header',
  props:{
    title:{
      type:String,
    }
  },
  data () {
    return {
      title1: 'This is the Header'
    }
  },
  methods:{
    changeTitle:function(){
      //往父组件传值,利用$emit触发事件，事件名称是titleChanged,参数是现在是子组件传值，父组件那里接受
      this.$emit("titleChanged","现在是子组件传值");
    }
  },
  //组件的生命周期
  // beforeCreate:function(){
  //   alert("组件实例化前执行的函数");
  // },
  // created:function(){
  //   alert("组件实例化完毕，页面还未显示");
  // },
  // beforeMount:function(){
  //   alert("组件挂载前，但是页面还未显示，但虚拟Dom已经配置");
  // },
  // mounted:function(){
  //   alert("组件挂载后，改方法执行后，页面显示");
  // },
  // beforeUpdate:function(){
  //   alert("更新前，虚拟DOM已经配置");
  // },
  // updated:function(){
  //   alert("更新完毕，显示");
  // },
  // beforeDestroy:function(){
  //   alert("销毁前");
  // },
  // destroyed:function(){
  //   alert("销毁完毕");
  // }

}
</script>

<!-- 3、模板样式 -->
<style scoped>
#Header{
	background: green;
	width: 100%;
	text-align: center;
	padding: 0;
	border: 1px #222 solid;
}

#Header h1{
	color: #222;
}

</style>
