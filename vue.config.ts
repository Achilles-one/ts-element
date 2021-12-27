// module.exports = {
//     devServer: {
//         open: true,
//         host: 'localhost',
//         port: 8080,
//         https: false,
//         hotOnly: false,
//         Proxy: {
//             // 跨域配置
//             '/api': {
//                 target: 'https://imissu.herokuapp.com/api/',
//                 ws:true,
//                 changeOrigin: true,
//                 pathRewrite: {
//                     '^/api': ''
//                 }
//             }
//         },
//         before: app => {}
//     }
// }
module.exports = {
  devServer: {
      host: 'localhost',
      port: 8080,
      open: true,// vue项目启动时自动打开浏览器
      proxy: {
          '/api': { // '/api'是代理标识，用于告诉node，url前面是/api的就是使用代理的
              target: "https://imissu.herokuapp.com/api/", //目标地址，一般是指后台服务器地址
              changeOrigin: true, //是否跨域
              pathRewrite: { // pathRewrite 的作用是把实际Request Url中的'/api'用""代替
                  '^/api': "" 
              }
          }
      }
  }
}

