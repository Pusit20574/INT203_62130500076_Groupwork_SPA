import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import baseButton from '@/components/baseButton.vue'
import baseNote from '@/components/baseNote.vue'

const app = createApp(App).use(router)
app.component('base-button',baseButton)
app.component('base-note',baseNote)
app.mount('#app')

