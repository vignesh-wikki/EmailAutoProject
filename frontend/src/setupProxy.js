const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
 app.use(
   "/api", 
   createProxyMiddleware({
     target: "https://email-auto-project-2mighovxc-vigneshwikkis-projects.vercel.app",
     changeOrigin: true, 
   })
 );
};
