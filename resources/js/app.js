import './bootstrap';
import '../sass/app.scss'
import Router from '@/router'
import store from '@/store'

import { createApp } from 'vue/dist/vue.esm-bundler';
import Toaster from '@meforma/vue-toaster';

const app = createApp({})
app.use(Router)
app.use(Toaster)
app.use(store)
app.mount('#app')