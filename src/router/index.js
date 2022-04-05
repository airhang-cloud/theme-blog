import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
    {
        path: '/',
        name: 'cover',
        meta: {
            title: 'Blog',
        },
        component: () => import('../views/Cover/index.jsx'),
    },
    {
        path: '/dash',
        name: 'main',
        redirect: '/mine',
        meta: {
            title: '界面入口',
        },
        component: () => import('../views/Entry/index.vue'),
        children: [
            {
                path: '/mine',
                name: 'mine',
                meta: {
                    title: '我的主页',
                },
                component: () => import('../views/Mine/index.vue'),
            },
            {
                path: '/blogs',
                name: 'blogs',
                meta: {
                    title: '博文中心',
                },
                component: () => import('../views/Blogs/index.vue'),
            },
        ],
    },
    {
        path: '/',
        redirect: '/',
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    /**业务路由可拆包放入**/
})
router.beforeEach((from, to, next) => {
    let tit = from.meta.title
    document.title = JSON.parse(JSON.stringify(tit))
    next()
})
router.afterEach(() => {
    // NProgress.done();
})
export default router
