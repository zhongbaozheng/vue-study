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
    // this.$http.get("http://jsonplaceholder.typicode.com/users")
    // .then((data)=>{
    //   // console.log(data);
    //   this.users = data.body;
    // });

    //fetch和axios 需要解决跨域问题 跨域问题需要到config目录下index.js修改proxyTable内容
    //链接 http://www.thenewstep.cn/test/testToken.php
    //token  f4c902c9ae5a2a9d8f84868ad064e706
    //henry 123456
    // fetch("/apis/test/testToken.php",{
    //   method:"post",   //method而不是methods。。。。。
    //   headers:{
    //     token:"f4c902c9ae5a2a9d8f84868ad064e706"
    //   },
    //   body:JSON.stringify({username:"henry",password:"123456"})  //传递参数
    // }).then(result=>{
    //   return result.json();   //结果为json格式
    // }).then(data=>{
    //   console.log(data);    //获取数据
    // });


    //axios 需要配置全局，main.js中配置
    this.$axios.post("/apis/test/testToken.php",{
      username:"henry",
      password:"123456",
    }).then(data=>{
      console.log(data.data);  //获取数据
    })

  }
}
</script>

<!-- 模板样式 -->
<style scoped>
h1{
  color: green;
}
</style>
