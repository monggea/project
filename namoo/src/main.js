import { registerPlugins } from '@/plugins'

// Composables
import { createApp } from 'vue'

// Components
import App from './App.vue'
import router from './router/router.js'

// Styles
import 'unfonts.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'vuetify/styles'
import '@/assets/css/main.css'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
.use(router)
.use(vuetify)
.mount('#app')

