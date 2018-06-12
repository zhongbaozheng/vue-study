var demo = new Vue({
	el:"#vue-demo",
	data:{
		ended:false,
		health:100,
	},
	methods:{
		punch:function(){
			this.health-=10;
			console.log(this.health);
			if(this.health<=0){
				this.ended = true;
			}
		},
		restart:function() {
			this.health = 100;
			this.ended = false;
		}

	},
	computed:{

	}

});