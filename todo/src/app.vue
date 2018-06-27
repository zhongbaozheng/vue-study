<!-- template 的原理就是利用render方法-->
<template>
	<div id="test">
		{{text}}
	</div>
</template>

<script>
	export default{
		data(){
			return {
				text:'ajhdjhsjdhh'
			}
		}
	}
</script>

<style>
#test{
	color:red;
}
</style>