import Vue from 'vue'
import App from './app.vue'

import './assets/style/global.styl'

const root = document.createElement('div')
document.body.appendChild(root)

//将app挂载到div上
new Vue({
	render:(h)=>h(App)
}).$mount(root)
