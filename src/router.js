import { createRouter, createWebHistory } from "vue-router";

import HomePetOwners from "./components/HomePetOwners.vue";


//Routes
const routes = [
    { path: '/homepetowners', component: HomePetOwners }
]

const history = createWebHistory();
const router = createRouter({
        history,
        routes
    }
)

export default router
