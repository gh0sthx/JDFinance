import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import Ious from "../ious/index.vue"
import Raise from "../raise/index.vue"
import "../../css/reset.scss"
import Download from "../special/download.vue"
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/money",
            name: "Money",
            component: Money,
        }, {
            path: "/ious",
            name: "Ious",
            component: Ious,
        }, {
            path: "/raise",
            name: "Raise",
            component: Raise,
        }, {
            path: "/download",
            name: "Download",
            component: Download,
        }
    ],
})
