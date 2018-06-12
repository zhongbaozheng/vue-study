var app3 = new Vue({
	el:"#app3",
	data:{
		a:10,
		b:20,
	},
	methods:{
		/**
		addToA:function(){
			console.log("addToA");
			return this.a;
		},
		addToB:function(){
			console.log("addToB");
			return this.b;
		}
		*/
	},
	computed:{
		addToA:function(){
			console.log("addToA");
			return this.a;
		},
		addToB:function(){
			console.log("addToB");
			return this.b;
		},
	}
});

/*vue采用的是虚拟的dom,则其性能更好,methods与computed的区别就是，methods面向的是全局的
虚拟dom操作，全局渲染一次，而computed只有当虚拟dom的内容和真实dom的内容有变化则会响应渲染，那么
computed适合做一些耗时操作、异步等*/