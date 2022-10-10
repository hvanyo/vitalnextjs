const requireEsm = require('esm')(module);

const { buildTailwindConfig } = requireEsm(
  '@bodiless/fclasses'
);

const twConfig = {
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}', 
    './src/pages/**/*.{ts,tsx,js,jsx}',
    './node_modules/@bodiless/vital-buttons-core/lib/**/*.js',
    './node_modules/@bodiless/vital-card-core/lib/**/*.js',
    './node_modules/@bodiless/vital-elements/lib/**/*.js',
    './node_modules/@bodiless/vital-layout-core/lib/**/*.js',
    './node_modules/@bodiless/vital-link-core/lib/**/*.js',
    './node_modules/@bodiless/vital-navigation-core/lib/**/*.js',
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', '1.125rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.375rem'],
      lg: ['1.75rem', '1.875rem'],
      xl: ['1.625rem', '2rem'],
      '2xl': ['2rem', '2.25rem'],
      '3xl': ['2.563rem', '2.813rem'],
      'm-xs': ['0.688rem', '0.938rem'],
      'm-sm': ['0.75rem', '1rem'],
      'm-base': ['0.875rem', '1.125rem'],
      'm-lg': ['1.125rem', '1.375rem'],
      'm-xl': ['1.438rem', '1.625rem'],
      'm-2xl': ['1.813rem', '2.125rem'],
      'm-3xl': ['2.25rem', '2.5rem'],
    },
    extend: {
      fontFamily: {
        DMSans: ['DM Sans', 'sans-serif'],
      },
      backdropBlur: {
        'm-md': '10px',
      },
      backdropBrightness: {
        80: '.8',
      },
      boxShadow: {
        'inner-bottom-md': '0 -5px 0 0 inset',
      },
      colors: {
        transparent: 'transparent',
        'vital-primary': {
          brand: '#CA081B',
          'card-bg': '#ffffff',
          'page-bg': '#F4F4F4',
          interactive: '#000099',
          'interactive-active': '#000341',
          divider: '#D8D8D8',
          'body-copy': '#63666A',
          'header-copy': '#212121',
          'footer-copy': '#FFFFFF',
        },
        'vital-secondary': {
          eyebrow: '#CC0099',
          'footer-bg': '#2B2B33',
          table: '#E5E7EB',
          'table-interactive': '#f3f4f6',
          separator: '#666666',
          search: '#888888',
          'button-selected': '#000041',
        },
        white: '#FFFFFF',
        'gray-112-10': 'rgba(112, 112, 112, .1)',
      },      
      margin: {
        4.5: '1.125rem',
        5.75: '1.438rem',
        'site-percent': '5%',
        'md-site-percent': '8%',
        'negative-half-screen': '-50vw',
      },
      padding: {
        'site-percent': '5%',
        'md-site-percent': '8%',
      },
      maxWidth: {
        20: '5rem',
        28: '7rem',
        48: '12rem',
        56: '14rem',
        64: '16rem',
        screen: '100vw',
      },
      minWidth: {
        28: '7rem',
        max: 'max-content',
      },
    },
  },
  variants: {},
  plugins: [],
};

// Get configs sorted by precedence and/or exclude some packages:
// const getTwConfig = () => getPackageTailwindConfig({
//   pkgJson,
//   twConfig,
//   resolver,
//   prefer: ['@bodiless/vital-elements', '@bodiless/vital-card-core'],
//   exclude: [],
// });

module.exports = twConfig;

// module.exports = buildTailwindConfig({
//   twConfig,
//   resolver: (pkgName) => require.resolve(pkgName),
//   // prefer: ['@bodiless/vital-elements'],
// });
