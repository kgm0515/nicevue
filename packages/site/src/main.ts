import { createApp } from 'vue'
import App from './App'
import NiceVue from '@nicevue/ui'
// import '@nicevue/ui/dist/style/index.css'
import '../node_modules/@nicevue/ui/dist/style/index.css'

createApp(App).use(NiceVue).mount('#app')
