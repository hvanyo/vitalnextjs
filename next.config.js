// https://github.com/martpie/next-transpile-modules

const withTM = require('next-transpile-modules')([
  '@bodiless/components',
  '@bodiless/core',
  '@bodiless/fclasses',
  '@bodiless/vital-buttons-core',
  '@bodiless/vital-card-core',
  '@bodiless/vital-elements',  
  '@bodiless/vital-link-core',
  '@bodiless/vital-navigation-core',
]); // pass the modules you would like to see transpiled

module.exports = withTM({});