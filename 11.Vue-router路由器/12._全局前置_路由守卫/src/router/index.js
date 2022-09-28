// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

// 引入自定义组件
import About from "@/pages/About";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Message from "@/pages/Message";
import Detail from "@/pages/Detail";

// 创建一个路由器
const router =  new VueRouter({
    routes:[
        {
            name:'aboutPath',
            path:'/about',
            component:About
        },
        {
            // name:'homepath',
            path:'/home',
            component:Home,
            children:[
                {
                    name:'newspath',
                    path:'news',
                    component:News
                },
                {
                    name:'messagepath',
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'detailpath',
                            // path:'detail/:id/:title',
                            path:'detail',
                            component:Detail,
                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式给Detail组件。
                            // props:{a:1,b:'hello'},

                            //props的第一种写法，值为布尔值，就会把该路由组件收到的所有key-value都会以props的形式给Detail组件。
                            // props:true,

                            //props的第一种写法，值为函数，就会把该路由组件收到的所有key-value都会以props的形式给Detail组件。
                            // props($route){
                            //     return {id:$route.query.id , title:$route.query.title}
                            // },
                            props({query}){
                                return {id:query.id , title:query.title}
                            }
                            // props({query:{id,title}}){
                            //     return {id, title}
                            // }
                        }
                    ]
                }
            ]
        },
    ]
});

//全局前置路由守卫 -- 初始化的时候被调用了、每次路由切换之前被调用了
router.beforeEach((to,from, next) => {
    console.log('@',to,from ,next)
    // if(to.path === '/home/news' || to.path ==='/home/message'){
    if(to.name === 'newspath' || to.name ==='messagepath'){
        if(localStorage.getItem('school') === 'mingqi') {
            next()
        } else {
            alert('不正确地址')
        }
    } else {
        next()
    }
})

// 暴露
export default router