const Encore = require('@symfony/webpack-encore');

Encore
  // ...

  .enablePostCssLoader((options) => {
    options.config = {
      path: path.resolve(__dirname, '.postcssrc.js'), // Chemin complet du fichier
    };
  });

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
