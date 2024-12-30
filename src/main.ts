import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.component('QuillEditor', QuillEditor)
app.mount('#app')