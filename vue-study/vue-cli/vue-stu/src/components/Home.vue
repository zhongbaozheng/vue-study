<!-- 模板 -->
<template>
  <div id="home">
    <myheader v-bind:title="title" v-on:titleChanged="updateTitle($event)"></myheader>  <!-- 父组件接收来自子组件的内容 使用v-on监听 $event接收-->
    <users v-bind:users="users"></users> <!-- 父组件往子组件传递数据-->
    <myfooter v-bind:title="title"></myfooter>
  </div>
</template>

<!-- 组件 -->
<script>
import Users from './Users'
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'home',
  components: {
    //两种方式表述 局部引入
    // Users  
    'users':Users,
    'myfooter':Footer,
    'myheader':Header,
  },
  data(){
     return {
        users:[
        // {name:"money",age:20,isShow:false},
        // {name:"money",age:20,isShow:false},
        // {name:"money",age:20,isShow:false},
        // {name:"money",age:20,isShow:false},
        // {name:"money",age:20,isShow:false},
        // {name:"money",age:20,isShow:false},
        // {name:"money",age:20,isShow:false},
        // {name:"money",age:20,isShow:false},
        // {name:"money",age:20,isShow:false},
        ],
        title:"现在是父组件往子组件传值，请点击..."
     }
  },
  methods:{
    updateTitle:function(str){
        this.title = str;
    }
  },
  created:function(){

    //在created里面使用网络请求，这个是使用resource
    this.$http.get("http://jsonplaceholder.typicode.com/users")
    .then((data)=>{
      // console.log(data);
      this.users = data.body;
    });

    //fetch和axios 需要解决跨域问题

  }
}
</script>

<!-- 模板样式 -->
<style scoped>
h1{
  color: green;
}
</style>
