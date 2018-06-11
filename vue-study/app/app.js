var app = new Vue({
	el:"#app", //html里的元素
	data:{     //数据的存储
		name:"zhongbao",    //数据的访问，直接this.name
		job:"javaweb",
		age:30,
		website:"http://www.baidu.com",  //v-bind
		websiteTag:"<a href='http://www.baidu.com'>百度一下</a>",  //标签用''号会好一点
	},
	methods:{
		greet:function(str){
			return "Hello "+this.name+" ! "+str;
		}
	}
});
