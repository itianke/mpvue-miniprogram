import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

wx.cloud.init({
  env: 'cloud1-0g6qi2zqde9d9e5f', // 测试数据库ID
  traceUser: true
})

const app = new Vue(App)
app.$mount()
