import { createWebHistory, createRouter } from "vue-router"
import Home from "../views/Home.vue"
import LiveStreams from "../views/LiveStreams.vue"

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
    }
    ]
})

export default router