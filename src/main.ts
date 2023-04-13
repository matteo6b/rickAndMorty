import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { jwtInterceptor } from './config/interceptors'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import "@mdi/font/css/materialdesignicons.css";

import { createPinia } from "pinia";

const pinia = createPinia();

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    }
})
jwtInterceptor()

createApp(App).use(router).use(vuetify).use(pinia).mount('#app')

