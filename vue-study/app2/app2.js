var app2 = new Vue({
	el:"#app2",
	data:{
		age:30,
		x:0,
		y:0,
	},
	methods:{
		add:function(increase){
			this.age += increase;
		},
		sub:function(decrease){
			this.age-=decrease;
		},
		handleMove:function(event){  //event事件
			// console.log(event);
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		stop:function(){
			console.log("stop moving");
		},
		alert:function(){
			alert("hello world");
		}
	}
});


var app3 = new Vue({
	el:"#app3",
	data:{
		name:"",
		age:"",
	},
	methods:{
		logName:function(){
			// console.log("你正在输入名字");
			// this.name = this.$refs.name.value;  //通过input标签做标记ref ，后面将标记实现赋值

		},
		logAge:function(){
			// console.log("你正在输入年龄");
			this.age = this.$refs.age.value;
		}
	}
});