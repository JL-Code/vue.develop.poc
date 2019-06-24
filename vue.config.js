module.exports = {
  devServer: {
    disableHostCheck: true, //禁用主机检查
    proxy: {
      '/api': {
        target: process.env.VUE_APP_SERVER,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
};
