var app4 = new Vue({
	el:"#app4",
	data:{
		changeThisColor:false,
		changeThisLength:false,
		hello:"hello world",
	},
	computed:{
		computedClass:function(){
			return {
				changeLength:this.changeThisLength,    /*v-bind:class="{changeColor:changeThisColor} 样式名称 样式属性*/
				changeColor:this.changeThisColor,
			}
		},
	},
	methods:{

	}
});