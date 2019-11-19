import Vue from 'vue'
import VueRouter from 'vue-router'

import Vendor from './pages/vendor/vendor.vue'
import Home from './pages/home/home.vue'

const routerPath = LG_CONFIG_ROUTERPATH
Vue.use(VueRouter)
const routes = [
    {
        path: `${routerPath}/vendor`,
        component: Vendor
    },
    {
        path: `${routerPath}/home`,
        component: Home
    },
    {
        path: `${routerPath}/*`,
        component: Vendor
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

const app = new Vue({
    router
}).$mount('#app')