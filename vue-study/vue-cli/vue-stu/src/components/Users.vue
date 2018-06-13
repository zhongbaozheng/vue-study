<!-- 1、模板结构 模板只有一个一个根容器，加多一个不行-->
<template>
  <div class="users">
  <ul>
  	<li v-for="user in users" v-on:click="user.isShow=!user.isShow">
  		<h2>姓名：{{user.name}}</h2>
      <h3>邮箱：{{user.email}}</h3>
  	</li>
  </ul>
  </div>
</template>

<!-- 2、行为处理逻辑-->
<script>
export default {
  name: 'users',
  // props:["users"], //这种写法不严谨
  props:{  //属性传递有两种，一种是传递值包括String 、number、Boolean 等，改变一个不会影响其他，另一种是传引用，包括对象，数组等，改变一个也会影响其他
     users:{
        type:Array,
        required:true,
     },
  },
  data(){
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- 3、模板样式 scoped 相当于限制了组件的作用域-->
<style scoped>

.users{
  width: 100%;
  max-width:1200px;
  margin: 40px auto;
  box-sizing: border-box;
}
.users ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
.users ul li{
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 30px;
  border: 2px solid;
}
.users h3{
  color:blue;
}
</style>
