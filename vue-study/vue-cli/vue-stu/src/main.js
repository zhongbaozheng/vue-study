import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'   //路由引入
import VueResource from 'vue-resource'  //然后可以使用我们的http
import Home from './components/Home'
import HelloWorld from './components/HelloWorld'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);

/*全局注册组件，并在App.vue使用*/
// Vue.component("users",Users);


const router = new VueRouter({   //路由配置
	routes:[
		{path:'/',component:Home},
		{path:'/helloworld',component:HelloWorld}
	],
	mode:"history", //去掉http://localhost:8080/#/helloworld这里的#号
});


/* eslint-disable no-new */
new Vue({
  router,                  //路由使用
  el: '#app',              //绑定元素
  components: { App },    //注册的是app.vue
  template: '<App/>'      //这是模板
})


/*
* index.html作为一个入口--->main.js--->App.vue（可以注册我们的组件）
*/
