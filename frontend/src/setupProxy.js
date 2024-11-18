const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
 app.use(
   "/api", 
   createProxyMiddleware({
     target: "https://email-auto-project-psi.vercel.app/",
     changeOrigin: true, 
   })
 );
};
