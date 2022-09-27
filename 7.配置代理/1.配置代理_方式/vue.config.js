const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    pages: {
        index: {
            // 入口
            entry: 'src/main.js',
        }
    },

    //开启代理服务器 （方式一）
    devServer:{
        proxy:'http://10.12.12.215:3000'
    }

})
