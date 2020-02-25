import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../components/Msite/Msite.vue'
import Order from '../components/Order/Order.vue'
import Profile from '../components/Profile/Profile.vue'
import Search from '../components/Search/Search.vue'

Vue.use(VueRouter)
export default new VueRouter({
    routes: [{
            path: '/',
            redirect: '/msite'
        },
        {
            path: '/msite',
            component: Msite
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/order',
            component: Order
        },
        {
            path: '/profile',
            component: Profile
        }
    ]
})