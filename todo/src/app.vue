<!-- template 的原理就是利用render方法-->
<template>
	<div id="app">
		<Header></Header>
		<Todo></Todo>
		<Footer></Footer>
	</div>
</template>

<script>

import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'

import Todo from './views/todo/todo.vue'
export default{
  components: {
    Header,
    Todo,
    Footer
  }

}
</script>

<style>

</style>