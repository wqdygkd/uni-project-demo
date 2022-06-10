import Vue from 'vue'
import App from './App'

// import '@/styles/uni-icons.scss'

// import { uniIcons } from '@dcloudio/uni-ui'
// Vue.component('uni-icons', uniIcons)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
