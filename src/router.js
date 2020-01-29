import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: resolve => require([Home], resolve)
            // component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue')
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/signIn',
            name: 'signIn',
            component: () => import('./views/SignIn.vue')
        },
        {
            path: '/query',
            name: 'query',
            component: () => import('./views/Query.vue')
        },
        {
            path: '/comment',
            name: 'comment',
            component: () => import('./views/Comment.vue')
        },
        {
            path: '/postDetail',
            name: 'postDetail',
            component: () => import('./views/PostDetail.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/Register.vue')
        },
    
        {
            path: '/a',
            name: 'a',
            component: () => import('./views/Register.vue')
        },
        {
            path: '/b',
            name: 'b',
            component: () => import('./views/Register.vue')
        },
        {
            path: '/c',
            name: 'c',
            component: () => import('./views/Register.vue')
        },
    ]
})
