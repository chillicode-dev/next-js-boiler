const path = require('path');
// Webpack
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const jsonImporter = require('node-sass-json-importer');
// Internals
const {scssImportChain} = require('./webpack/utils');
const {svgoConfig} = require('./webpack/configs');

// Next config
module.exports = {
  webpack(config, {defaultLoaders}) {
    config.module.rules.push({
      test: /\.svg$/,
      include: path.resolve(__dirname, 'public', 'assets', 'icons'),
      use: [
        defaultLoaders.babel,
        {
          loader: 'react-svg-loader',
          options: {
            jsx: true, // true outputs JSX tags
            svgo: svgoConfig,
          },
        },
      ],
    });

    if (process.env.NODE_ENV !== 'development') {
      // CSS optimizations
      config.plugins.push(new CssoWebpackPlugin());
    }

    // Aliases for paths to app directories
    config.resolve.alias = {
      ...config.resolve.alias,
      assets: path.resolve(__dirname, 'assets'),
      components: path.resolve(__dirname, 'components'),
      config: path.resolve(__dirname, 'config'),
      hocs: path.resolve(__dirname, 'hocs'),
      hooks: path.resolve(__dirname, 'hooks'),
      modals: path.resolve(__dirname, 'modals'),
      public: path.resolve(__dirname, 'public'),
      sections: path.resolve(__dirname, 'sections'),
      services: path.resolve(__dirname, 'services'),
      store: path.resolve(__dirname, 'store'),
      styles: path.resolve(__dirname, 'styles'),
      tests: path.resolve(__dirname, 'tests'),
      utils: path.resolve(__dirname, 'utils'),
    };

    return config;
  },
  sassOptions: {
    importer: jsonImporter(),
    additionalData: scssImportChain([
      'styles/config/breakpoints.json',
      'styles/config/colors.json',
      'styles/preferences/variables',
      'styles/preferences/grid',
      'styles/preferences/mixins',
      'styles/preferences/easings',
    ]),
  },
};
