
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../component/homePage/homePage';
import Introduce from '../component/introduce/introduce';
import Hobies from '../component/hobies/hobies';
import Skills from '../component/skills/skills';
import Working from '../component/working/working'
Vue.use(VueRouter)
const routes = [{
    path:'/',
    redirect: '/home',
    component: HomePage,
    children:[
        {
            path:'/home',
            redirect: '/home/introduce',
            component: Introduce,
        },
        {
            path: '/home/introduce',
            component: Introduce,
            name:"introduce"
        },
        {
            path:'/home/working',
            component:Working,
            name:"working"
            
        },
        {
            path:'/home/hobies',
            component:Hobies,
            name:"hobies"
        },
        {
            path:'/home/skills',
            component:Skills,
            name:"skills"
        }
    ]
}]



export default new VueRouter({ 
    routes,
})