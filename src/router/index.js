import { createWebHistory, createRouter } from "vue-router"
import Home from "../views/Home.vue"
import LiveStreams from "../views/LiveStreams.vue"
import About from "../views/About.vue"
import Players from "../views/Players.vue"
import News from "../views/News.vue"
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes: [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/livestreams",
        name: "LiveStreams",
        component: LiveStreams
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/players",
        name: "Players",
        component: Players
    },
    {
        path: "/news",
        name: "News",
        component: News
    }
    ]
})

export default router