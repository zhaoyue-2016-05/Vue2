// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

// 引入自定义组件
import About from "@/pages/About";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Message from "@/pages/Message";
import Detail from "@/pages/Detail";

// 创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            name:'aboutPath',
            path:'/about',
            component:About
        },
        {
            name:'homepath',
            path:'/home',
            component:Home,
            children:[
                {
                    // name:'newspath',
                    path:'news',
                    component:News
                },
                {
                    // name:'messagepath',
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'detailpath',
                            path:'detail',
                            component:Detail
                        }
                    ]
                }
            ]
        },
    ]
});
