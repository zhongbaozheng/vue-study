
Vue.component("greeting",{
	template:`<p>
	{{name}}Hello World
	<button v-on:click="changeName">changeName</button>
	</p>`,
	data:function(){  //返回的一般是一个函数，并且在函数中返回我们的对象,
		return {
			name:"zhongbao",
		}
	},
	methods:{
		changeName:function() {
			this.name = "Mr. zhongbao change ";
		}
	}
})
//组件的最大用处就是把一些公共的全部用起来，最终实现我们的代码的复用

var app6 = new Vue({
	el:"#app6",
	data:{

	},
});