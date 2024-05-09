import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { componentPlugin } from '@/components'
import { lazyPlugin } from "@/directives"

const app = createApp(App)
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.use(componentPlugin)
app.use(lazyPlugin)
app.use(router)

app.mount('#app')
