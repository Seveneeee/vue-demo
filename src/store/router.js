
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../component/homePage/homePage';
// import App from '../../App'
Vue.use(VueRouter)
const routes = [{
    path:'/',
    component:HomePage,
    children:[
        {
            path:'',
            redirect: '/home'
        },
        {
            path:'/home',
            component: HomePage
        }
    ]
}]
export default new VueRouter({ 
    routes
})