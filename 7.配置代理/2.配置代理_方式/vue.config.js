const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    pages: {
        index: {
            // 入口
            entry: 'src/main.js',
        }
    },
    //开启代理服务器 （方式二）
    devServer:{
        proxy:{
            '/studentPath':{
                target:' http://localhost:3000',
                pathRewrite:{'^/studentPath':''},
                ws: true, // 用于支持websocket
                changeOrigin:false //用于控制请求头中的host值 false:后台服务显示host  true：前台的host
            },
            '/carsPath':{
                target:' http://localhost:3001',
                pathRewrite:{'^/carsPath':''},
                ws: true, // 用于支持websocket
                changeOrigin:false //用于控制请求头中的host值 false:后台服务显示host  true：前台的host
            }
        },
    }
})
