module.exports = {
  devServer: {
    proxy: {
      '/cms': {
        // 测试环境
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/cms': ''
        }
      }
    }
  }
}