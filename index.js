require('shelljs/global');
module.exports = function(m) {
  if (!(test('-e', 'node_modules/'+m))) {
    exec('npm i --save '+m);
  }
  return require(m);
}
global['instreq'] = module.exports;
