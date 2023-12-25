const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ecommerce-react-s68q.onrender.com',
      changeOrigin: true,
    })
  );
};