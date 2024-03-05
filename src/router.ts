import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '',
            name: 'index',
            component: () => import('@/routes/IndexRoute.vue')
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('@/routes/ProjectsRoute.vue')
        },
        {
            path: '/project/:key',
            name: 'project',
            component: () => import('@/routes/ProjectRoute.vue')
        },
        {
            path: '/skills',
            name: 'skills',
            component: () => import('@/routes/SkillsRoute.vue')
        }
    ]
})

export default router