module.exports={
    devServer: {                // 本地开发配置
        host:'zhu.com',
        port: 8090,
        https: false,
        hotOnly: false,
        proxy: 'http://192.168.1.12:6789', // 设置代理
        before: app => { }
      },
}