import Vue from 'vue'
import App from './App.vue'
// 所有文件引入包的入口
// 把router导出的挂载到全局
import router from '@/router'
// 引用element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
