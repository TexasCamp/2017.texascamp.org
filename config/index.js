const defaultConfig = require('./default.yml');
let localConfig;

try {
  localConfig = require('./local.yml'); // eslint-disable-line global-require, import/no-unresolved, max-len
} catch (e) {
  localConfig = {};
}

module.exports = { ...defaultConfig, ...localConfig };
