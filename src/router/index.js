import { createWebHistory, createRouter } from "vue-router"
const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue")
    },
    {
        path: "/livestreams",
        name: "LiveStreams",
        component: () => import("../views/Livestreams.vue")
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue")
    },
    {
        path: "/players",
        name: "Players",
        component: () => import("../views/Players.vue")
    },
    {
        path: "/news",
        name: "News",
        component: () => import("../views/News.vue")
    }
    ]
})

export default router