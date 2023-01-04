// https://github.com/martpie/next-transpile-modules
const withPlugins = require("next-compose-plugins");

// HACK for error: Cannot use import statement outside a module
// code transpilation from NPM modules using ES6 imports
// https://github.com/martpie/next-transpile-modules
const withTM = require('next-transpile-modules')([
  '@bodiless/accordion', // Need to remove
  '@bodiless/card', // Need to remove
  '@bodiless/components', // Need to remove
  '@bodiless/core', // Need to remove
  '@bodiless/fclasses', 
  '@bodiless/layouts', // Need to remove
  '@bodiless/navigation',
  '@bodiless/vital-buttons-core',
  '@bodiless/vital-card-core',
  '@bodiless/vital-elements',
  '@bodiless/vital-layout-core',  
  '@bodiless/vital-link-core',
  '@bodiless/vital-navigation-core',
]); // pass the modules you would like to see transpiled

// HACK to avoid bringing in editor styles from @bodiless/layout
// https://github.com/uiwjs/next-remove-imports
const removeImports = require('next-remove-imports')({
  test: /node_modules([\s\S]*?)\.(tsx|ts|js|mjs|jsx)$/,
  matchImports: "\\.(less|css|scss|sass|styl)$"
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
};

module.exports = withPlugins([
  withTM({}),
  removeImports,
  nextConfig
]);
