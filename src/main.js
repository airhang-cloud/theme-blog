import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './Animate/index.css'
import BaseDialog from './components/BaseDialog/index.vue'

const Main = createApp(App)
Main.component(BaseDialog.name, BaseDialog)
Main.use(router).mount('#app')
