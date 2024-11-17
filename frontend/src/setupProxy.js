const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
 app.use(
   "/api", 
   createProxyMiddleware({
     target: "https://email-auto-project-1lalmxwm8-vigneshwikkis-projects.vercel.app/",
     changeOrigin: true, 
   })
 );
};
