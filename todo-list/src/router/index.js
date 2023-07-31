import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Task from '../views/TaskList.vue'
const routes = [
    {
        path: '/',
        component: Home
    },

    {
        path: '/Register',
        component: Register
    },

    {
        path: '/Login',
        component: Login
    },

    {
        path: '/App',
        component: Task
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router