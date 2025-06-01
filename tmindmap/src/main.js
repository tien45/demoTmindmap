import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '../router.js'

const pinia = createPinia()
createApp(App).use(router).mount('#app')
createApp(App).use(pinia)
