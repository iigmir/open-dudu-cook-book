import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "landing-page",
            component: require("@/views/LandingPage/index.vue").default
        },
        {
            path: "*",
            redirect: "/"
        },
        {
            path: "/app",
            name: "app",
            component: require("@/views/App/index.vue").default
        }
    ]
});
