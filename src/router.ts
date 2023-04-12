

import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home/Home.vue'
import Login from './views/Auth/Login.vue'
import Detail from './views/Detail/Detail.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: Detail,
            meta: {
                requiresAuth: true
            }

        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },

        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('./views/NotFound.vue')

        }


    ]
})

router.beforeEach((to, from, next) => {

    const loggedIn = localStorage.getItem('user')

    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
        next('/login')
    } else {
        next()
    }
}
)

export default router;

