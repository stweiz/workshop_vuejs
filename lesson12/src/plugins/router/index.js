import Vue from 'vue'
import VueRouter from 'vue-router'

// Our components for Vue Router
import WokList from "../../components/wok/WokList";

// Use plugin "VueRouter"
// Define it in the plugin instance configuration, so the "main.js" is smaller
Vue.use(VueRouter);

// Route definitions with which component should be loaded on the called route
const routes = [
    {path: '/woks', component: WokList},
];

// Vue Router can also work with wildcards and params:
//const routes = [
//    { path: '/wo*', component: woks },
//    { path: '/ca*/:userid', component: cart },
//];
// Vue Router also has different transition effects, and HTML5 history mode or hash mode, with auto-fallback in IE9

export default new VueRouter({
    routes: routes // "routes" instead of "routes: routes" also works
})
