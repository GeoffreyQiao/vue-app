import Vue from 'vue'

import App from './App'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'html5'
})

router.map({
    '/index': {
        component: {
            template: `<h1 class="first-page-title cursor-hand" transition="component" transition-mode='out-in' @click="$router.go('/form')"><p>Welcome, Geoffrey Qiao 的</p><p>小站欢迎您</p></h1>`
        }
    },
    '/hello': {
        component: function (resolve) {
            require(['./components/Hello'], resolve)
        }
        // subRoutes: {
        //     '/': {
        //         component: {
        //             template: '<h1>What ?</h1>'
        //         }
        //     }
        //     '/form': {
        //         component: function (resolve) {
        //             require(['./components/Form'], resolve)
        //         }
        //     }
        // }
    },
    '/form': {
        component: function (resolve) {
            require(['./components/Form'], resolve)
        }
    }
})

router.start(App, '#app')

router.redirect({
    '*': '/index'
})
