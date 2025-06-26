import { registerPlugins } from '@/plugins'


// Composables
import { createApp } from 'vue'

// Components
import App from './App.vue'
import router from './router/router.js'

// Styles
import 'unfonts.css'
import { createVuetify } from 'vuetify'
import '@/assets/css/main.css'




const vuetify = createVuetify()

createApp(App)
.use(router)
.use(vuetify)
.mount('#app')

