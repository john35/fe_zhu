module.exports={
    devServer: {                // 本地开发配置
        host:'zhu.com',
        port: 8090,
        https: false,
        hotOnly: false,
        proxy: 'http://39.105.159.181:6789', // 设置代理
        // proxy:'http://192.168.2.101:6789',
        before: app => { }
      },
}