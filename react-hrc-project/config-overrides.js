//添加插件
const { injectBabelPlugin } = require('react-app-rewired');
//添加less
const rewireLess = require('react-app-rewire-less');
 
/* config-overrides.js */
module.exports = function override(config, env) {
  //config = rewireLess(config, env);
  // with loaderOptions
  config = rewireLess(config, env);
  console.log(config)
  return config;
}