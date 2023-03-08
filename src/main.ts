import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import DataVVue3 from '@kjgl77/datav-vue3'

// 引入全局样式
import './assets/scss/style.scss';
// 引入 eCharts
import * as echarts from 'echarts'

const app = createApp(App)

// 全局挂载 eCharts
app.config.globalProperties.$echarts = echarts
app.use(DataVVue3)
app.use(router)

app.mount('#app')


